import Feed from "@/components/Feed"

const Home = () => {
  return (
   <section className="w-full flex-center flex-col">
     <h1 className="head_text text-center">Discover & Share</h1>
     <br className="max-md:hidden"/>
     <span className="head_text orange_gradient text-center">AI-Powered Promosts</span>

     <p className="desc text-center">PromptTeli is an open-source AI prompting tool for the modern world to discover, create and share creative prompts</p>

     {/**Feed */}
     <Feed></Feed>

   </section>
  )
}

export default Home