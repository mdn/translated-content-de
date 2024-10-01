---
title: Daten vom Server abrufen
slug: Learn/JavaScript/Client-side_web_APIs/Fetching_data
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Eine sehr häufige Aufgabe in modernen Websites und Anwendungen ist das Abrufen einzelner Datenpunkte vom Server, um Abschnitte einer Webseite zu aktualisieren, ohne eine komplett neue Seite laden zu müssen. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites gehabt. In diesem Artikel erklären wir das Konzept und betrachten die Technologien, die dies möglich machen: insbesondere die [Fetch API](/de/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Grundlagen von Client-seitigen APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie man Daten vom Server abruft und nutzt, um den Inhalt einer Webseite zu aktualisieren.
      </td>
    </tr>
  </tbody>
</table>

## Was ist das Problem hier?

Eine Webseite besteht aus einer HTML-Seite und (in der Regel) verschiedenen anderen Dateien, wie Stylesheets, Skripten und Bildern. Das grundlegende Modell des Seitenladens im Web ist, dass Ihr Browser eine oder mehrere HTTP-Anfragen an den Server stellt, um die Dateien zu erhalten, die zum Anzeigen der Seite benötigt werden, und der Server antwortet mit den angeforderten Dateien. Wenn Sie eine andere Seite besuchen, fordert der Browser die neuen Dateien an, und der Server antwortet mit diesen.

![Traditionelles Seitenladen](traditional-loading.svg)

Dieses Modell funktioniert für viele Webseiten hervorragend. Aber betrachten Sie eine Website, die sehr datengetrieben ist. Zum Beispiel eine Bibliotheks-Website wie die [Vancouver Public Library](https://www.vpl.ca/). Unter anderem könnte man sich eine solche Website als Benutzeroberfläche zu einer Datenbank vorstellen. Sie könnte Ihnen erlauben, nach einem bestimmten Buchgenre zu suchen, oder Ihnen Buchempfehlungen zeigen, basierend auf Büchern, die Sie zuvor ausgeliehen haben. Wenn Sie dies tun, muss die Seite mit der neuen Buchauswahl aktualisiert werden. Aber beachten Sie, dass die meisten Inhalte der Seite – einschließlich Elemente wie der Seitenkopf, die Seitenleiste und die Fußzeile – gleich bleiben.

Das Problem mit dem traditionellen Modell ist hier, dass wir die gesamte Seite abrufen und laden müssten, selbst wenn wir nur einen Teil davon aktualisieren müssen. Das ist ineffizient und kann zu einer schlechten Benutzererfahrung führen.

Also verwenden viele Websites statt des traditionellen Modells JavaScript-APIs, um Daten vom Server anzufordern und den Seiteninhalt ohne erneutes Laden der Seite zu aktualisieren. Wenn der Benutzer nach einem neuen Produkt sucht, fordert der Browser nur die Daten an, die benötigt werden, um die Seite zu aktualisieren – beispielsweise die neue Bücherliste, die angezeigt werden soll.

![Verwendung von Fetch zum Aktualisieren von Seiten](fetch-update.svg)

Die Haupt-API hier ist die [Fetch API](/de/docs/Web/API/Fetch_API). Diese ermöglicht es JavaScript, das in einer Seite ausgeführt wird, eine [HTTP](/de/docs/Web/HTTP)-Anfrage an einen Server zu stellen, um bestimmte Ressourcen abzurufen. Wenn der Server diese bereitstellt, kann JavaScript die Daten nutzen, um die Seite zu aktualisieren, typischerweise durch die Verwendung von [DOM-Manipulations-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents). Die angeforderten Daten sind oft [JSON](/de/docs/Learn/JavaScript/Objects/JSON), was ein gutes Format für den Transfer von strukturierten Daten ist, sie können aber auch HTML oder einfach nur Text sein.

Dies ist ein gängiges Muster für datengetriebene Websites wie Amazon, YouTube, eBay und so weiter. Mit diesem Modell:

- Seitenaktualisierungen sind viel schneller und Sie müssen nicht auf das Aktualisieren der Seite warten, was bedeutet, dass sich die Website schneller und reaktionsfähiger anfühlt.
- Weniger Daten werden bei jedem Update heruntergeladen, was weniger Bandbreitenverschwendung bedeutet. Dies mag auf einem Desktop mit Breitbandverbindung kein großes Problem sein, aber es ist ein großes Problem auf mobilen Geräten und in Ländern, die keinen allgegenwärtigen schnellen Internetzugang haben.

> [!NOTE]
> In den frühen Tagen war diese allgemeine Technik als {{Glossary("Asynchronous", "Asynchronous")}} JavaScript und XML ({{Glossary("AJAX", "Ajax")}}) bekannt, da sie dazu neigte, XML-Daten anzufordern. Dies ist heutzutage normalerweise nicht der Fall (man würde eher JSON anfordern), aber das Ergebnis ist immer noch dasselbe, und der Begriff "Ajax" wird oft verwendet, um die Technik zu beschreiben.

Um die Geschwindigkeit noch weiter zu erhöhen, speichern einige Websites auch Vermögenswerte und Daten auf dem Computer des Benutzers, wenn sie zuerst angefordert werden. Bei späteren Besuchen werden sie dann stattdessen die lokalen Versionen nutzen, anstatt immer neue Kopien herunterzuladen, wenn die Seite zum ersten Mal geladen wird. Der Inhalt wird nur dann vom Server neu geladen, wenn er aktualisiert wurde.

## Die Fetch API

Lassen Sie uns einige Beispiele der Fetch API durchgehen.

### Laden von Textinhalt

In diesem Beispiel werden wir Daten aus ein paar verschiedenen Textdateien anfordern und nutzen, um einen Inhaltsbereich zu füllen.

Diese Serie von Dateien wird als unsere gefälschte Datenbank dienen; in einer echten Anwendung würden wir eher eine serverseitige Sprache wie PHP, Python oder Node verwenden, um unsere Daten aus einer Datenbank anzufordern. Hier jedoch wollen wir es einfach halten und uns auf den Client-seitigen Teil konzentrieren.

Um dieses Beispiel zu beginnen, machen Sie eine lokale Kopie von [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) und den vier Textdateien — [verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt) und [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt) — in ein neues Verzeichnis auf Ihrem Computer. In diesem Beispiel werden wir einen anderen Vers des Gedichts abrufen (das Sie möglicherweise erkennen), wenn er im Drop-down-Menü ausgewählt wird.

Fügen Sie gleich innerhalb des {{htmlelement("script")}}-Elements den folgenden Code hinzu. Dieser speichert Referenzen zu den {{htmlelement("select")}}- und {{htmlelement("pre")}}-Elementen und fügt ein Listener-Event zum `<select>`-Element hinzu, sodass, wenn der Benutzer einen neuen Wert auswählt, der neue Wert an die Funktion mit dem Namen `updateDisplay()` als Parameter übergeben wird.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Lassen Sie uns unsere `updateDisplay()`-Funktion definieren. Zuerst fügen Sie das Folgende unter Ihrem vorherigen Codeblock hinzu – dies ist das leere Gerüst der Funktion.

```js-nolint
function updateDisplay(verse) {

}
```

Wir beginnen unsere Funktion, indem wir eine relative URL konstruieren, die auf die Textdatei zeigt, die wir laden möchten, da wir sie später benötigen. Der Wert des {{htmlelement("select")}}-Elements ist zu jeder Zeit derselbe wie der Text des ausgewählten {{htmlelement("option")}} (es sei denn, Sie geben einen anderen Wert in einem value-Attribut an) – also beispielsweise "Vers 1". Die entsprechende Vers-Textdatei ist "verse1.txt" und befindet sich im gleichen Verzeichnis wie die HTML-Datei, daher genügt der Dateiname.

Webserver neigen jedoch dazu, zwischen Groß- und Kleinschreibung zu unterscheiden, und der Dateiname hat kein Leerzeichen. Um "Vers 1" in "verse1.txt" zu konvertieren, müssen wir das 'V' in Kleinbuchstaben umwandeln, das Leerzeichen entfernen und ".txt" am Ende hinzufügen. Dies kann mit {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}} und [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) erfolgen. Fügen Sie die folgenden Zeilen in Ihrer `updateDisplay()`-Funktion hinzu:

```js
verse = verse.replace(" ", "").toLowerCase();
const url = `${verse}.txt`;
```

Endlich sind wir bereit, die Fetch API zu verwenden:

```js
// Call `fetch()`, passing in the URL.
fetch(url)
  // fetch() returns a promise. When we have received a response from the server,
  // the promise's `then()` handler is called with the response.
  .then((response) => {
    // Our handler throws an error if the request did not succeed.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // Otherwise (if the response succeeded), our handler fetches the response
    // as text by calling response.text(), and immediately returns the promise
    // returned by `response.text()`.
    return response.text();
  })
  // When response.text() has succeeded, the `then()` handler is called with
  // the text, and we copy it into the `poemDisplay` box.
  .then((text) => {
    poemDisplay.textContent = text;
  })
  // Catch any errors that might happen, and display a message
  // in the `poemDisplay` box.
  .catch((error) => {
    poemDisplay.textContent = `Could not fetch verse: ${error}`;
  });
```

Hier gibt es ziemlich viel zu erklären.

Erstens ist der Einstiegspunkt zur Fetch API eine globale Funktion namens [`fetch()`](/de/docs/Web/API/Window/fetch), die die URL als Parameter nimmt (sie nimmt einen weiteren optionalen Parameter für benutzerdefinierte Einstellungen, aber den benutzen wir hier nicht).

Zweitens, `fetch()` ist eine asynchrone API, die ein {{jsxref("Promise")}} zurückgibt. Falls Sie nicht wissen, was das ist, lesen Sie das Modul über [asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous), und insbesondere den Artikel über [Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises), und kehren Sie dann hierher zurück. Sie werden feststellen, dass dieser Artikel auch die `fetch()`-API behandelt!

Da `fetch()` ein Promise zurückgibt, übergeben wir eine Funktion an die {{jsxref("Promise/then", "then()")}}-Methode des zurückgegebenen Promises. Diese Methode wird aufgerufen, wenn die HTTP-Anfrage eine Antwort vom Server erhalten hat. In der Handlerfunktion überprüfen wir, ob die Anfrage erfolgreich war, und lösen einen Fehler aus, falls nicht. Andernfalls rufen wir [`response.text()`](/de/docs/Web/API/Response/text) auf, um den Antwortinhalt als Text zu erhalten.

Es stellt sich heraus, dass `response.text()` _ebenfalls_ asynchron ist, also geben wir das Promise zurück, das es zurückgibt, und übergeben eine Funktion an die `then()`-Methode dieses neuen Promises. Diese Funktion wird aufgerufen, wenn der Antworttext bereit ist, und innerhalb dieser Funktion aktualisieren wir unseren `<pre>`-Block mit dem Text.

Schließlich verketten wir einen {{jsxref("Promise/catch", "catch()")}}-Handler am Ende, um alle Fehler abzufangen, die in einem der aufgerufenen asynchronen Funktionen oder deren Handlern geworfen werden.

Ein Problem mit dem Beispiel, wie es jetzt ist, ist, dass es keines der Gedichte zeigt, wenn es erstmals geladen wird. Um dies zu beheben, fügen Sie die folgenden zwei Zeilen am unteren Ende Ihres Codes hinzu (direkt über dem schließenden `</script>`-Tag), um standardmäßig Vers 1 zu laden und sicherzustellen, dass das {{htmlelement("select")}}-Element immer den richtigen Wert zeigt:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### Ihr Beispiel über einen Server bereitstellen

Moderne Browser werden keine HTTP-Anfragen ausführen, wenn Sie das Beispiel einfach aus einer lokalen Datei ausführen. Dies geschieht aus Sicherheitsgründen (um mehr über Web-Sicherheit zu erfahren, lesen Sie [Websicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)).

Um dies zu umgehen, müssen wir das Beispiel testen, indem wir es über einen lokalen Webserver ausführen. Um herauszufinden, wie dies geht, lesen Sie [unsere Anleitung zum Einrichten eines lokalen Testservers](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

### Der Dosenladen

In diesem Beispiel haben wir eine Beispielsseite namens The Can Store erstellt – es handelt sich um einen fiktiven Supermarkt, der nur Konserven verkauft. Sie können dieses [Beispiel live auf GitHub sehen](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/) und [den Quellcode anzeigen](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Eine gefälschte E-Commerce-Website zeigt Suchoptionen in der linken Spalte und Produktsuchergebnisse in der rechten Spalte.](can-store.png)

Standardmäßig zeigt die Seite alle Produkte an, aber Sie können die Formularsteuerungen in der linken Spalte verwenden, um sie nach Kategorie oder Suchbegriff oder beidem zu filtern.

Es gibt eine Menge komplexen Code, der sich mit der Filterung der Produkte nach Kategorie und Suchbegriffen, der Manipulation von Strings, damit die Daten korrekt in der UI angezeigt werden, usw. Diese werden wir in dem Artikel nicht alle behandeln, aber Sie finden umfangreiche Kommentare im Code (siehe [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

Wir werden jedoch den Fetch-Code erklären.

Der erste Block, der Fetch verwendet, kann am Anfang des JavaScripts gefunden werden:

```js
fetch("products.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => initialize(json))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));
```

Die `fetch()`-Funktion gibt ein Promise zurück. Wenn dies erfolgreich abgeschlossen wird, enthält die Funktion im ersten `.then()`-Block die vom Netzwerk zurückgegebene `response`.

Innerhalb dieser Funktion:

- Überprüfen wir, ob der Server keinen Fehler zurückgegeben hat (wie beispielsweise [`404 Not Found`](/de/docs/Web/HTTP/Status/404)). Falls doch, werfen wir den Fehler.
- Rufen wir [`json()`](/de/docs/Web/API/Response/json) auf der Antwort auf. Dadurch werden die Daten als [JSON-Objekt](/de/docs/Learn/JavaScript/Objects/JSON) abgerufen. Wir geben das Promise zurück, das von `response.json()` zurückgegeben wird.

Als nächstes übergeben wir eine Funktion an die `then()`-Methode dieses zurückgegebenen Promises. Diese Funktion wird ein Objekt erhalten, das die Antwortdaten als JSON enthält, die wir an die `initialize()`-Funktion übergeben. Diese Funktion beginnt den Prozess, alle Produkte in der Benutzeroberfläche darzustellen.

Um Fehler zu handhaben, verketten wir einen `.catch()` Block am Ende der Kette. Dies wird ausgeführt, wenn das Promise aus irgendeinem Grund fehlschlägt. Innerhalb davon enthalten wir eine Funktion, die als Parameter ein `err`-Objekt übergeben bekommt. Dieses `err`-Objekt kann verwendet werden, um die Art des aufgetretenen Fehlers zu melden, in diesem Fall machen wir dies mit einem einfachen `console.error()`.

Eine vollständige Website würde diesen Fehler jedoch eleganter behandeln, indem sie eine Nachricht auf dem Bildschirm des Benutzers anzeigt und vielleicht Möglichkeiten anbietet, die Situation zu beheben, aber wir benötigen nichts mehr als ein einfaches `console.error()`.

Sie können den Fehlerfall selbst testen:

1. Machen Sie eine lokale Kopie der Beispieldateien.
2. Führen Sie den Code über einen Webserver aus (wie oben beschrieben, unter [Ihr Beispiel über einen Server bereitstellen](#ihr_beispiel_über_einen_server_bereitstellen)).
3. Ändern Sie den Pfad zur abzurufenden Datei in etwas Ähnliches wie 'produc.json' (stellen Sie sicher, dass es falsch geschrieben ist).
4. Laden Sie nun die Indexdatei in Ihrem Browser (über `localhost:8000`) und schauen Sie in Ihrer Entwicklerkonsole des Browsers nach. Sie werden eine Nachricht ähnlich "Fetch problem: HTTP error: 404" sehen.

Der zweite Fetch-Block kann innerhalb der `fetchBlob()`-Funktion gefunden werden:

```js
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.blob();
  })
  .then((blob) => showProduct(blob, product))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));
```

Dies funktioniert ähnlich wie der vorherige, außer dass wir statt `json()` [`blob()`](/de/docs/Web/API/Response/blob) verwenden. In diesem Fall möchten wir unsere Antwort als Bilddatei zurückgeben, und das Datenformat, das wir dafür verwenden, ist [Blob](/de/docs/Web/API/Blob) (der Begriff ist eine Abkürzung für "Binary Large Object" und kann im Wesentlichen verwendet werden, um große dateiähnliche Objekte wie Bilder oder Videodateien darzustellen).

Sobald wir unseren Blob erfolgreich erhalten haben, übergeben wir ihn an unsere `showProduct()`-Funktion, die ihn anzeigt.

## Die XMLHttpRequest API

Manchmal, besonders in älterem Code, werden Sie eine andere API namens [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) (oft als "XHR" abgekürzt) sehen, die verwendet wird, um HTTP-Anfragen auszuführen. Diese war der Fetch API vorausgegangen und war wirklich die erste API, die weit verbreitet zur Implementierung von AJAX verwendet wurde. Wir empfehlen, wann immer es möglich ist, die Fetch API zu verwenden: Es ist eine einfachere API und hat mehr Funktionen als `XMLHttpRequest`. Wir werden Ihnen kein Beispiel zeigen, das `XMLHttpRequest` verwendet, aber wir zeigen Ihnen, wie die `XMLHttpRequest`-Version unserer ersten Anfrage im Dosenladen aussehen würde:

```js
const request = new XMLHttpRequest();

try {
  request.open("GET", "products.json");

  request.responseType = "json";

  request.addEventListener("load", () => initialize(request.response));
  request.addEventListener("error", () => console.error("XHR error"));

  request.send();
} catch (error) {
  console.error(`XHR error ${request.status}`);
}
```

Es gibt fünf Schritte dafür:

1. Erstellen Sie ein neues `XMLHttpRequest`-Objekt.
2. Rufen Sie die [`open()`](/de/docs/Web/API/XMLHttpRequest/open)-Methode auf, um es zu initialisieren.
3. Fügen Sie einen Event-Listener zu seinem [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Event hinzu, das ausgelöst wird, wenn die Antwort erfolgreich abgeschlossen wurde. Im Listener rufen wir `initialize()` mit den Daten auf.
4. Fügen Sie einen Event-Listener zu seinem [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)-Event hinzu, das ausgelöst wird, wenn die Anfrage einen Fehler trifft.
5. Senden Sie die Anfrage.

Wir müssen das Ganze auch im [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block umschließen, um alle Fehler zu behandeln, die von `open()` oder `send()` geworfen werden.

Hoffentlich finden Sie die Fetch API im Vergleich dazu als Verbesserung. Insbesondere sehen Sie, wie wir Fehler an zwei verschiedenen Stellen behandeln müssen.

## Zusammenfassung

Dieser Artikel zeigt, wie man mit Fetch beginnen kann, um Daten vom Server abzurufen.

## Siehe auch

Es gibt jedoch viele verschiedene Themen, die in diesem Artikel besprochen werden, und er kratzt nur an der Oberfläche. Für viel mehr Details zu diesen Themen probieren Sie die folgenden Artikel:

- [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Arbeiten mit JSON-Daten](/de/docs/Learn/JavaScript/Objects/JSON)
- [Ein Überblick über HTTP](/de/docs/Web/HTTP/Overview)
- [Serverseitige Website-Programmierung](/de/docs/Learn/Server-side)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
