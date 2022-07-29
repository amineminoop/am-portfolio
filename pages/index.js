import Head from 'next/head'

export default function Home() {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach(field => {
        if (!field.name) return;
        formData[field.name] = field.value;
    })
   

    fetch('/api/hello',{
        method : 'post',
        body: JSON.stringify(formData)
    })
    console.log(formData)
}
  return (

    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <form action="post" onSubmit={handleOnSubmit}>
      <input type="text" name='name' placeholder='name' /><br />
      <input type="text" name='email' placeholder='email' /><br />
      <textarea name="message" id="" rows="10"></textarea><br />
      <input type="submit" value='envoi email' />

     </form>
    </div>
  )
}
