# 8-Ball Program
**This example program was made by 5quirre1, creator of the SGC++ programming language. Here is the code:**
<div class="output">
    import random<br>
    import time<br>
    import os<br><br>
    // variables<br>
    let answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]<br>
    let result = random.choice(answers)<br><br>
    // start<br>
    gPrintln("Welcome to 8 ball..\n")<br>
    time.sleep(1)<br>
    var question = gReadln("Ask a question [or type 'exit' to quit]: ").strip()<br><br>
    // if statements for a question<br>
    if (not question) then<br>
    &nbsp;&nbsp;&nbsp;&nbsp;gPrintln("grrrr")<br>
    &nbsp;&nbsp;&nbsp;&nbsp;exit(1)<br>
    end<br><br>
    if (question.lower() == "exit") then<br>
    &nbsp;&nbsp;&nbsp;&nbsp;gPrintln("Bai bai!")<br>
    &nbsp;&nbsp;&nbsp;&nbsp;exit()<br>
    end <br>
    // end if statements<br><br>
    // main<br>
    gPrintln("thinking...")<br>
    time.sleep(2)<br><br>
    var clear_screen = os.system("cls" if (os.name == "nt") else "clear")<br>
    time.sleep(1)<br>
    gPrintln("Question: " + question)<br>
    gPrintln("Magic 8 ball says: " + result) // result!
</div>

**The code is also on GitHub at [Freakybob-Team/SGC-Plus-Plus/programs/8Ball.sgcx](https://github.com/Freakybob-Team/SGC-Plus-Plus/blob/main/programs/8Ball.sgcx)!**