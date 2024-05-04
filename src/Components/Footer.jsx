import React from "react";
const handlebuttonGit=()=>{
    window.location.href="https://github.com/SAAD-DASTGIR"
}
const handlebuttonLinkedIn=()=>{
    window.location.href="https://www.linkedin.com/in/saad-dastgir-8357b51b2/"
}
const handlebuttonTwitter=()=>{
    window.location.href="https://www.linkedin.com/in/saad-dastgir-8357b51b2/"
}
const handlebuttonLeetCode=()=>{
    window.location.href="https://leetcode.com/u/C6hKHHA30U/"
}
const Footer =()=>{
    return(
        <div className="footer">
            <div className="footer-detail">
            ©Saad Dastgir     
              </div>
            <div className="footer-list">
                <li
                onClick={handlebuttonGit}
                 className="flist" >
                    Github
                </li>
                <li 
                onClick={handlebuttonLinkedIn}
                className="flist">LinkedIn</li>
                <li onClick={handlebuttonTwitter}
                className="flist">Twitter</li>
                <li onClick={handlebuttonLeetCode}
                className="flist">LeetCode</li>
            </div>
        
        </div>
    )
}
export default Footer