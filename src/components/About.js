export default function About(props) {

 
  return (
    <div className={`container ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
     <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample" >
            <div className={`accordion-item `}>
                <h2 className="accordion-header">
                <button className={`accordion-button ${props.mode === 'dark' ? 'bg-secondary text-light' : 'bg-light text-dark'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About Us #1
                </button>
                </h2>
                <div id="collapseOne"    className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className={`accordion-body ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                    <strong> TextUtils</strong> is a versatile online text analysis tool designed to assist users in manipulating and analyzing text effectively. Whether you're a student, writer, researcher, or just someone who works extensively with text, TextUtils offers a range of features to enhance your productivity and streamline your workflow.
                </div>
                </div>
            </div>
            <div className="accordion-item"  >
                <h2 className="accordion-header">
                <button className={`accordion-button ${props.mode === 'dark' ? 'bg-secondary text-light' : 'bg-light text-dark'}`}   type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Our Mission #2
                </button>
                </h2>
                <div    id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className={`accordion-body ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}  >
                    <strong>At TextUtils</strong> , our mission is to empower individuals with the tools they need to navigate the complexities of textual data. We believe that by providing easy-to-use yet powerful text analysis functionalities, we can enable our users to unlock deeper insights, improve their writing, and make more informed decisions.
                </div>
                </div>
            </div>
            <div className="accordion-item"   >
                <h2 className="accordion-header">
                <button className={`accordion-button ${props.mode === 'dark' ? 'bg-secondary text-light' : 'bg-light text-dark'}`}    type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Key Features #3
                </button>
                </h2>
                <div id="collapseFour"    className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className={`accordion-body ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                    <strong>Features<br></br></strong> Text Analysis: Analyze the characteristics of your text, including word count, character count, sentence count, and more.<br></br>
                    Text Transformation: Convert text between various formats, including uppercase, lowercase, title case, and sentence case.<br></br>
                    Text Manipulation: Manipulate your text with ease, such as removing extra spaces, trimming whitespace, and sorting lines alphabetically.<br></br>
                    Word Frequency: Discover the frequency of words in your text to identify patterns and trends.<br></br>
                    Character Counter: Count the occurrence of specific characters or words within your text.<br></br>
                    Text Comparison: Compare two different texts side by side to identify similarities and differences.
                </div>
                </div>
            </div>

            <div className="accordion-item"   >
                <h2 className="accordion-header">
                <button className={`accordion-button ${props.mode === 'dark' ? 'bg-secondary text-light' : 'bg-light text-dark'}`}    type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Get in Touch #4
                </button>
                </h2>
                <div id="collapseFour"    className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className={`accordion-body ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                     Have questions, feedback, or suggestions? We'd love to hear from you! Feel free to reach out to us at <strong>contacttextutils@gmail.com</strong> and we'll get back to you as soon as possible.
                </div>
                </div>
            </div>


        </div>
    </div>
  )
}
