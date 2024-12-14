import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';

const Question = () => {
  return (
      <div className=' flex bg-slate-100 flex-row justify-around items-center w-[1440px] h-[704px]'>
         <div className='w-[1170px] h-[560px] flex flex-row justify-between  '>
          <div className='flex flex-col w-[570px] h-[118px] '>
              <p className='font-DM_Serif_Display text-4xl leading-10'>Frequently Asked Questions</p>
              <p className='text-base font-Open_Sans font-normal text-slate-600 w-[300px]'>If you haven’t found the answer you need, email us at <span className='font-bold'>gemcustom@gmail.com!</span> </p>
          </div>
          <div className='flex flex-col w-[538px] h-[560px]  border-red-500'>
           <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <p>Why do I have to choose a high-resolution image for my printed product?</p> 
        </AccordionSummary>
        <AccordionDetails>
         <p>Please understand that our print is entirely based on what image you share with us. Using an image with a resolution of at least 300dpi will make your product look its best.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p>Can I make changes to my order once it has been placed?</p>
        </AccordionSummary>
        <AccordionDetails>
         <p></p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p>Can I cancel my order if I change my mind?</p>
        </AccordionSummary>
        <AccordionDetails>
         <p></p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p>How do I track my order?</p>
        </AccordionSummary>
        <AccordionDetails>
         <p></p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p>How long before I get my return refund?</p>
        </AccordionSummary>
        <AccordionDetails>
         <p></p>
        </AccordionDetails>
      </Accordion>
      
    
            </div>
        </div>
    </div>
  )
}

export default Question