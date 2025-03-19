---
title: Netzwerkanforderungen mit JavaScript
short-title: Network requests
slug: Learn_web_development/Core/Scripting/Network_requests
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}

Eine weitere sehr häufige Aufgabe auf modernen Websites und in Anwendungen besteht darin, Netzwerkanforderungen zu stellen, um einzelne Datenobjekte vom Server abzurufen und Abschnitte einer Webseite zu aktualisieren, ohne dass eine neue Seite vollständig geladen werden muss. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites gehabt. In diesem Artikel erklären wir das Konzept und betrachten Technologien, die dies möglich machen, insbesondere die [Fetch API](/de/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in bisherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Asynchrone Netzwerkanforderungen, die mit Abstand der häufigste Anwendungsfall für asynchrones JavaScript im Web sind.</li>
          <li>Gewöhnliche Arten von Ressourcen, die aus dem Netzwerk abgerufen werden: JSON, Medienassets, Daten von RESTful APIs.</li>
          <li>Wie man <code>fetch()</code> verwendet, um asynchrone Netzwerkanforderungen zu implementieren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist hier das Problem?

Eine Webseite besteht aus einer HTML-Seite und (in der Regel) verschiedenen anderen Dateien, wie Stylesheets, Skripten und Bildern. Das Grundmodell des Seitenladens im Web besteht darin, dass Ihr Browser eine oder mehrere HTTP-Anforderungen an den Server sendet, um die Dateien anzufordern, die zum Anzeigen der Seite benötigt werden, und der Server antwortet mit den angeforderten Dateien. Wenn Sie eine andere Seite besuchen, fordert der Browser die neuen Dateien an, und der Server liefert sie aus.

![Traditionelles Seitenladen](traditional-loading.svg)

Dieses Modell funktioniert für viele Websites einwandfrei. Aber betrachten Sie eine Website, die sehr datengesteuert ist. Zum Beispiel eine Bibliotheks-Website wie die [Vancouver Public Library](https://www.vpl.ca/). Unter anderem könnte man eine solche Seite als Benutzeroberfläche zu einer Datenbank betrachten. Sie könnte es Ihnen ermöglichen, nach einem bestimmten Genre von Büchern zu suchen, oder Ihnen Buchempfehlungen zu zeigen, die Sie interessieren könnten, basierend auf Büchern, die Sie zuvor ausgeliehen haben. Dabei muss die Seite mit der neuen Menge an anzuzeigenden Büchern aktualisiert werden. Beachten Sie jedoch, dass der Großteil des Seiteninhalts — einschließlich Elemente wie Kopfzeile, Seitenleiste und Fußzeile — gleich bleibt.

Das Problem mit dem traditionellen Modell ist hier, dass wir die gesamte Seite abrufen und laden müssten, selbst wenn wir nur einen Teil davon aktualisieren müssen. Dies ist ineffizient und kann zu einer schlechten Benutzererfahrung führen.

Statt des traditionellen Modells verwenden viele Websites JavaScript-APIs, um Daten vom Server anzufordern und den Seiteninhalt ohne Seitenladen zu aktualisieren. Wenn der Benutzer zum Beispiel nach einem neuen Produkt sucht, fordert der Browser nur die Daten an, die benötigt werden, um die Seite zu aktualisieren — zum Beispiel die neuen anzuzeigenden Bücher.

![Verwendung von Fetch zum Aktualisieren von Seiten](fetch-update.svg)

Die Haupt-API hier ist die [Fetch API](/de/docs/Web/API/Fetch_API). Sie ermöglicht es JavaScript, das auf einer Seite läuft, eine [HTTP](/de/docs/Web/HTTP)-Anfrage an einen Server zu stellen, um spezifische Ressourcen abzurufen. Wenn der Server diese bereitstellt, kann das JavaScript die Daten verwenden, um die Seite zu aktualisieren, typischerweise durch Verwendung von [DOM-Manipulations-APIs](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting). Die angeforderten Daten sind oft [JSON](/de/docs/Learn_web_development/Core/Scripting/JSON), welches ein gutes Format für den Transfer strukturierter Daten ist, können aber auch HTML oder einfach nur Text sein.

Dies ist ein gängiges Muster für datengesteuerte Seiten wie Amazon, YouTube, eBay usw. Mit diesem Modell:

- Seitenaktualisierungen geschehen viel schneller und Sie müssen nicht auf das Neuladen der Seite warten, was bedeutet, dass sich die Seite schneller und reaktionsfreudiger anfühlt.
- Weniger Daten werden bei jeder Aktualisierung heruntergeladen, was weniger verschwendete Bandbreite bedeutet. Dies mag auf einem Desktop-Rechner mit Breitbandverbindung kein großes Thema sein, ist aber ein größeres Problem auf mobilen Geräten und in Ländern, die keinen allgegenwärtigen schnellen Internetdienst haben.

> [!NOTE]
> In den frühen Tagen war diese allgemeine Technik als {{Glossary("Asynchronous", "Asynchrones")}} JavaScript und XML ({{Glossary("AJAX", "AJAX")}}) bekannt, weil sie dazu neigte, XML-Daten anzufordern. Das ist heutzutage normalerweise nicht der Fall (es wird eher JSON angefordert), aber das Ergebnis ist immer noch dasselbe, und der Begriff "AJAX" wird immer noch oft verwendet, um die Technik zu beschreiben.

Um die Dinge noch weiter zu beschleunigen, speichern einige Seiten auch Assets und Daten auf dem Computer des Benutzers, wenn sie zuerst angefordert werden, sodass sie bei nachfolgenden Besuchen die lokalen Versionen verwenden, anstatt jedes Mal neue Kopien herunterzuladen, wenn die Seite zuerst geladen wird. Der Inhalt wird nur dann vom Server neu geladen, wenn er aktualisiert wurde.

## Die Fetch API

Lassen Sie uns ein paar Beispiele für die Fetch API durchgehen.

### Textinhalte abrufen

In diesem Beispiel werden wir Daten aus einigen verschiedenen Textdateien anfordern und sie verwenden, um einen Inhaltsbereich zu füllen.

Diese Reihe von Dateien wird als unsere gefälschte Datenbank fungieren; in einer echten Anwendung würden wir eher eine serverseitige Sprache wie PHP, Python oder Node verwenden, um unsere Daten aus einer Datenbank anzufordern. Hier möchten wir es jedoch einfach halten und uns auf den clientseitigen Teil konzentrieren.

Um dieses Beispiel zu beginnen, machen Sie eine lokale Kopie von [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) und den vier Textdateien — [verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt), und [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt) — in einem neuen Verzeichnis auf Ihrem Computer. In diesem Beispiel werden wir ein anderes Versmaß des Gedichts abrufen (welches Ihnen möglicherweise bekannt vorkommt), wenn es im Dropdown-Menü ausgewählt wird.

Fügen Sie direkt im {{htmlelement("script")}}-Element den folgenden Code hinzu. Dies speichert Referenzen zu den {{htmlelement("select")}} und {{htmlelement("pre")}} Elementen und fügt einen Listener zum `<select>`-Element hinzu, sodass, wenn der Benutzer einen neuen Wert auswählt, der neue Wert an die Funktion `updateDisplay()` als Parameter übergeben wird.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Lassen Sie uns unsere `updateDisplay()`-Funktion definieren. Fügen Sie zunächst das folgende unterhalb Ihres vorherigen Codeblocks ein — dies ist die leere Hülle der Funktion.

```js-nolint
function updateDisplay(verse) {

}
```

Wir beginnen unsere Funktion, indem wir eine relative URL konstruieren, die auf die Textdatei zeigt, die wir laden möchten, da wir sie später benötigen. Der Wert des {{htmlelement("select")}}-Elements ist jederzeit derselbe wie der Text im ausgewählten {{htmlelement("option")}} (es sei denn, Sie geben einen anderen Wert in einem Wertattribut an) — also zum Beispiel "Vers 1". Die entsprechende Versdatei ist "verse1.txt", und befindet sich im selben Verzeichnis wie die HTML-Datei, daher reicht der Dateiname aus.

Webserver sind jedoch oft schreibempfindlich und der Dateiname enthält kein Leerzeichen. Um "Vers 1" in "verse1.txt" zu konvertieren, müssen wir das 'V' in Kleinbuchstaben umwandeln, das Leerzeichen entfernen und ".txt" anhängen. Dies kann mit {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}}, und [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals) durchgeführt werden. Fügen Sie die folgenden Zeilen in Ihre `updateDisplay()`-Funktion ein:

```js
verse = verse.replace(" ", "").toLowerCase();
const url = `${verse}.txt`;
```

Schließlich sind wir bereit, die Fetch API zu verwenden:

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

Es gibt hier einiges zu erklären.

Zuerst ist der Einstiegspunkt zur Fetch API eine globale Funktion namens [`fetch()`](/de/docs/Web/API/Window/fetch), die die URL als Parameter nimmt (sie nimmt noch einen optionalen Parameter für benutzerdefinierte Einstellungen, den wir hier nicht verwenden).

Dann ist `fetch()` eine asynchrone API, die ein {{jsxref("Promise")}} zurückgibt. Wenn Sie nicht wissen, was das ist, lesen Sie das Modul über [asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS), insbesondere die Lektion über [Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises), und kommen Sie dann hierher zurück. Sie werden feststellen, dass auch dieser Artikel über die `fetch()`-API spricht!

Da `fetch()` ein Versprechen zurückgibt, übergeben wir eine Funktion in die {{jsxref("Promise/then", "then()")}}-Methode des zurückgegebenen Versprechens. Diese Methode wird aufgerufen, wenn die HTTP-Anforderung eine Antwort vom Server erhalten hat. Im Handler prüfen wir, dass die Anforderung erfolgreich war, und werfen einen Fehler, wenn dies nicht der Fall war. Andernfalls rufen wir [`response.text()`](/de/docs/Web/API/Response/text) auf, um den Antworttext zu erhalten.

Es stellt sich heraus, dass `response.text()` _auch_ asynchron ist, daher geben wir das Versprechen zurück, das es zurückgibt, und übergeben eine Funktion in die `then()`-Methode dieses neuen Versprechens. Diese Funktion wird aufgerufen, wenn der Antworttext bereit ist, und darin aktualisieren wir unseren `<pre>`-Block mit dem Text.

Schließlich hängen wir einen {{jsxref("Promise/catch", "catch()")}}-Handler an das Ende der Kette, um alle Fehler zu erfassen, die in einer der von uns aufgerufenen asynchronen Funktionen oder ihren Handlers geworfen werden.

Ein Problem mit dem Beispiel, wie es derzeit besteht, ist, dass es beim ersten Laden keines der Gedichte anzeigen wird. Um dies zu beheben, fügen Sie die folgenden zwei Zeilen am Ende Ihres Codes hinzu (direkt über dem schließenden `</script>`-Tag), um Vers 1 standardmäßig zu laden und sicherzustellen, dass das {{htmlelement("select")}}-Element immer den korrekten Wert anzeigt:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### Ihr Beispiel von einem Server ausführen

Moderne Browser führen keine HTTP-Anfragen aus, wenn Sie das Beispiel nur von einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (für mehr Informationen über Websicherheit lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).

Um dies zu umgehen, müssen wir das Beispiel testen, indem wir es über einen lokalen Webserver ausführen. Um herauszufinden, wie das gemacht wird, sehen Sie sich [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) an.

### Der Dosenshop

In diesem Beispiel haben wir eine Beispielseite namens Der Dosenshop erstellt — es ist ein fiktiver Supermarkt, der nur Dosenwaren verkauft. Sie können dieses [Beispiel live auf GitHub ansehen](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/) und [den Quellcode ansehen](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Eine gefälschte E-Commerce-Seite, die Suchoptionen in der linken Spalte und Produktsuchergebnisse in der rechten Spalte anzeigt.](can-store.png)

Standardmäßig zeigt die Seite alle Produkte an, aber Sie können die Steuerungen im Formular in der linken Spalte verwenden, um sie nach Kategorie oder Suchbegriff oder beidem zu filtern.

Es gibt ziemlich viel komplexen Code, der sich mit dem Filtern der Produkte nach Kategorie und Suchbegriffen, der Manipulation von Zeichenfolgen, sodass die Daten korrekt in der Benutzeroberfläche angezeigt werden, usw. beschäftigt. Wir werden nicht alles hier im Artikel besprechen, aber Sie finden umfangreiche Kommentare im Code (siehe [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

Wir werden jedoch den Fetch-Code erklären.

Der erste Block, der Fetch verwendet, befindet sich am Anfang des JavaScripts:

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

Die `fetch()`-Funktion gibt ein Versprechen zurück. Wenn dieses erfolgreich abgeschlossen ist, enthält die Funktion im ersten `.then()`-Block die `response` vom Netzwerk.

In dieser Funktion:

- prüfen wir, dass der Server keinen Fehler zurückgegeben hat (wie z.B. [`404 Not Found`](/de/docs/Web/HTTP/Reference/Status/404)). Wenn dies der Fall ist, werfen wir den Fehler.
- rufen wir [`json()`](/de/docs/Web/API/Response/json) auf der `response` auf. Dies wird die Daten als [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) abrufen. Wir geben das Versprechen zurück, das von `response.json()` zurückgegeben wird.

Als nächstes übergeben wir eine Funktion in die `then()`-Methode dieses zurückgegebenen Versprechens. Diese Funktion wird ein Objekt empfangen, das die Antwortdaten als JSON enthält, das wir in die `initialize()`-Funktion übergeben. Es ist die `initialize()`, die den Prozess des Anzeige aller Produkte in der Benutzeroberfläche startet.

Um Fehler zu behandeln, hängen wir einen `.catch()`-Block an das Ende der Kette an. Dieser wird ausgeführt, falls das Versprechen aus irgendeinem Grund fehlschlägt. Darin nehmen wir eine Funktion auf, die als Parameter ein `err`-Objekt übergeben bekommt. Dieses `err`-Objekt kann verwendet werden, um die Art des Fehlers zu melden, der aufgetreten ist; in diesem Fall tun wir es mit einem einfachen `console.error()`.

Eine vollständige Website würde diesen Fehler jedoch eleganter handhaben, indem eine Nachricht auf dem Bildschirm des Benutzers angezeigt und möglicherweise Optionen angeboten würden, um die Situation zu beheben, aber wir benötigen nicht mehr als ein einfaches `console.error()`.

Sie können den Fehlerfall selbst testen:

<!-- cSpell:ignore produc -->

1. Machen Sie eine lokale Kopie der Beispieldateien.
2. Führen Sie den Code über einen Webserver aus (wie oben beschrieben, im Abschnitt [Ihr Beispiel von einem Server ausführen](#ihr_beispiel_von_einem_server_ausführen)).
3. Ändern Sie den Pfad zur Datei, die abgerufen wird, in etwas wie 'produc.json' (stellen Sie sicher, dass dies falsch geschrieben ist).
4. Laden Sie nun die Indexdatei in Ihrem Browser (über `localhost:8000`) und schauen Sie in Ihre Entwicklertools im Browser. Sie sehen eine Nachricht ähnlich wie "Fetch problem: HTTP error: 404".

Der zweite Fetch-Block befindet sich innerhalb der `fetchBlob()`-Funktion:

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

Dies funktioniert ähnlich wie der vorherige, außer dass wir statt [`json()`](/de/docs/Web/API/Response/json) [`blob()`](/de/docs/Web/API/Response/blob) verwenden. In diesem Fall möchten wir unsere Antwort als Bilddatei zurückgeben, und das Datenformat, das wir dafür verwenden, ist [Blob](/de/docs/Web/API/Blob) (der Begriff ist eine Abkürzung für "Binary Large Object" und kann im Grunde verwendet werden, um große file-ähnliche Objekte zu repräsentieren, wie Bilder oder Videodateien).

Sobald wir erfolgreich unser Blob erhalten haben, übergeben wir es in unsere `showProduct()`-Funktion, die es anzeigt.

## Die XMLHttpRequest API

Manchmal, insbesondere in älteren Codes, werden Sie eine andere API namens [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) (oft als "XHR" abgekürzt) sehen, die verwendet wird, um HTTP-Anfragen zu machen. Diese existierte vor Fetch und war wirklich die erste API, die weit verbreitet zur Implementierung von AJAX genutzt wurde. Wir empfehlen, dass Sie, wenn möglich, Fetch verwenden: es ist eine einfachere API und hat mehr Funktionen als `XMLHttpRequest`. Wir werden kein Beispiel durchgehen, das `XMLHttpRequest` verwendet, aber wir zeigen Ihnen, wie die `XMLHttpRequest`-Version unserer ersten Dosenshop-Anfrage aussehen würde:

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

Es gibt fünf Phasen hierzu:

1. Erstellen eines neuen `XMLHttpRequest`-Objekts.
2. Aufrufen der [`open()`](/de/docs/Web/API/XMLHttpRequest/open) Methode, um es zu initialisieren.
3. Hinzufügen eines Event-Listeners zu seinem [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignis, das ausgelöst wird, wenn die Antwort erfolgreich abgeschlossen wurde. Im Listener rufen wir `initialize()` mit den Daten auf.
4. Hinzufügen eines Event-Listeners zu seinem [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)-Ereignis, das ausgelöst wird, wenn die Anforderung auf einen Fehler stößt.
5. Senden der Anforderung.

Wir müssen auch alles im [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block einwickeln, um alle Fehler zu behandeln, die von `open()` oder `send()` geworfen werden.

Hoffentlich denken Sie, dass die Fetch API eine Verbesserung gegenüber dieser ist. Besonders sehen Sie, wie wir Fehler an zwei verschiedenen Stellen behandeln müssen.

## Zusammenfassung

Dieser Artikel zeigt, wie man beginnt, mit Fetch Daten vom Server abzurufen.

## Siehe auch

Allerdings gibt es viele verschiedene Themen, die in diesem Artikel behandelt werden, die nur wirklich die Oberfläche angekratzt haben. Für viel mehr Details zu diesen Themen probieren Sie die folgenden Artikel:

- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Arbeiten mit JSON-Daten](/de/docs/Learn_web_development/Core/Scripting/JSON)
- [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview)
- [Serverseitige Webseitenprogrammierung](/de/docs/Learn_web_development/Extensions/Server-side)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}
