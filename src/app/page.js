// import Image from "next/image";
// import styles from "./page.module.css";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
export default function Home() {
  const id = cookies().get('userId')?.value || cookies().get('sellerId')?.value;

  if(!id){
    return redirect('/login')
  }
  return (
    <div >
      
    </div>
  );
}
