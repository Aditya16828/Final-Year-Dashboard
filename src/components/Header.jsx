import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Dine In', href: '/customer/dine-in' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {

    return (
        <Disclosure as="nav" className="bg-gray-900 rounded-b-md ">
            <>
                <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-center text-center">
                        <h1 className="text-indigo-200 text-2xl font-bold">Recommendation System</h1>
                    </div>
                </div>
            </>
        </Disclosure>
    )
}

