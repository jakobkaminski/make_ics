function download(filename, text) {
  var element = document.createElement('a');
  element.style.display='none';
  //Define the data of the file using encodeURIComponent
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  
  //Add the download attribute of the hidden link
  element.setAttribute('download', filename);
  
  document.body.appendChild(element);
  
  element.click();
  
  document.body.removeChild(element);
  }
  //When the user clicks the download button, start download
  // Start file download.
  document.getElementById("download-btn").addEventListener("click",function(){
    //Generate download of hello.txt file with some content
    var text = document.getElementById("text-val").value;
    
    // output = `I like the song "${ text }".abced.`;
    
    output =`
BEGIN:VCALENDAR
…
BEGIN:VEVENT
CREATED:20151219T021727Z
DTSTART;VALUE=DATE:${ text }
SEQUENCE:0
SUMMARY:Meeting
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`;

    var filename = document.getElementById("filename").value;
  download(filename, output);
  }, false);
  