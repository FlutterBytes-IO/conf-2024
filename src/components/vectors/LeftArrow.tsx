"use client"

import { useContext } from "react";
import { DarkmodeContext } from "@/Context/DarkMode";

export default function LeftArrow({ dark }: { dark?: boolean; }) {
    const { isDarkmode } = useContext(DarkmodeContext);
    return <svg width="17" height="7" viewBox="0 0 17 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 3.5L5.5 6.38675V0.613249L0.5 3.5ZM5 4H16.5V3H5V4Z" fill={isDarkmode || dark ? "#021B38" : "#D0EFFF"}/>
    </svg>
    
}