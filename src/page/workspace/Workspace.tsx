import { useUser } from '@clerk/clerk-react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { firebaseDB } from './../../../config/firebase.cofig';

const Workspace = () => {
    const { user, isLoaded } = useUser();

    useEffect(() => {
        const createNewUser = async () => {
            const email = user?.primaryEmailAddress?.emailAddress;
            if (!email) return;

            try {
                const docRef = doc(firebaseDB, 'users', email);
                const docSnap = await getDoc(docRef);

                if (!docSnap.exists()) {
                    await setDoc(docRef, {
                        fullName:
                            `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim(),
                        email,
                        createdAt: new Date(),
                        credits: 3,
                    });
                    console.log('User created successfully');
                }
            } catch (error) {
                console.error('Error creating user:', error);
            }
        };

        if (isLoaded && user) {
            createNewUser();
        }
    }, [user, isLoaded]);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>Please login first</div>;
    }

    return (
        <div>
            MenubarasMenubarPrimitive
            <Outlet />
        </div>
    );
};

export default Workspace;
