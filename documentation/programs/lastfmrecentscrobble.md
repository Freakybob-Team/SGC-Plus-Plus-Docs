# LastFM Recent Scrobble Program
**This example program was made by 5quirre1, creator of the SGC++ programming language. Here is the code:**
<div class="output">
    import requests<br><br>
    let username = gReadln("What is the username:") // ask the user for the last.fm username (eg: 5quirre1Z)<br><br>
    // no username<br>
    if (not username) then<br>
    &nbsp;&nbsp;&nbsp;&nbsp;gPrintln("no username.. try again")<br>
    &nbsp;&nbsp;&nbsp;&nbsp;exit(1)<br>
    end<br>
    let API_KEY = gReadln("put the last.fm api key here plz!") // ask for the api key (won't work without one)<br><br>
    // no api key<br>
    if (not API_KEY) then<br>
    &nbsp;&nbsp;&nbsp;&nbsp;gPrintln("no apikey.. try again")<br>
    &nbsp;&nbsp;&nbsp;&nbsp;exit(1)<br>
    end<br><br>
    let url = f"https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user={username}&api_key={API_KEY}&format=json&limit=1" // url<br>
    var response = requests.get(url) // response<br>
    var json = response.json() // json response<br><br>
    // error if error<br>
    if (response.status.code != 200) then<br>
    &nbsp;&nbsp;&nbsp;&nbsp;gPrintln("ERROR")<br>
    &nbsp;&nbsp;&nbsp;&nbsp;exit(1)<br>
    end<br><br>
    // get the recent track<br>
    if ('recenttracks' in json) then<br>
    &nbsp;&nbsp;&nbsp;&nbsp;gPrintln("=" * 40)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;gPrintln(f"{username}'s recent track was:\n")<br>
    &nbsp;&nbsp;&nbsp;&nbsp;var track = json['recenttracks']['track'][0]<br>
    &nbsp;&nbsp;&nbsp;&nbsp;gPrintln(f"Track: {track['name']}")<br>
    &nbsp;&nbsp;&nbsp;&nbsp;gPrintln(f"Artist: {track['artist']['#text']}")<br>
    &nbsp;&nbsp;&nbsp;&nbsp;gPrintln(f"Album: {track['album']['#text']}")<br>
    &nbsp;&nbsp;&nbsp;&nbsp;gPrintln("=" * 40)<br>
    else<br>
    &nbsp;&nbsp;&nbsp;&nbsp;gPrintln("didn't find any recent data..)<br>
    end    
</div>

**The code is also on GitHub at [Freakybob-Team/SGC-Plus-Plus/programs/last-fm-recent.sgcx](https://github.com/Freakybob-Team/SGC-Plus-Plus/blob/main/programs/last-fm-recent.sgcx)!**

