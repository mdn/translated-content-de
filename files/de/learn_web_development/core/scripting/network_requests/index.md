---
title: Erstellen von Netzwerk-Anfragen mit JavaScript
slug: Learn_web_development/Core/Scripting/Network_requests
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}

Eine weitere sehr häufige Aufgabe auf modernen Websites und in Anwendungen ist das Erstellen von Netzwerk-Anfragen, um einzelne Daten vom Server abzurufen und Abschnitte einer Webseite zu aktualisieren, ohne eine komplett neue Seite laden zu müssen. Dieses scheinbar geringe Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites gehabt. In diesem Artikel erklären wir das Konzept und betrachten die Technologien, die dies möglich machen, insbesondere die [Fetch API](/de/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Asynchrone Netzwerk-Anfragen, eine der häufigsten Aspekte von asynchronem JavaScript im Web.</li>
          <li>Gemeinsame Arten von Ressourcen, die vom Netzwerk abgerufen werden: JSON, Medienressourcen, Daten von RESTful APIs.</li>
          <li>Verwendung von <code>fetch()</code>, um asynchrone Netzwerk-Anfragen zu implementieren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist hier das Problem?

Eine Webseite besteht aus einer HTML-Seite und (normalerweise) verschiedenen anderen Dateien, wie Stylesheets, Skripten und Bildern. Das grundlegende Modell des Seitenladens im Web ist, dass Ihr Browser eine oder mehrere HTTP-Anfragen an den Server für die benötigten Dateien stellt, um die Seite anzuzeigen, und der Server antwortet mit den angeforderten Dateien. Wenn Sie eine andere Seite besuchen, fordert der Browser die neuen Dateien an und der Server antwortet mit ihnen.

![Traditionelles Seitenladen](traditional-loading.svg)

Dieses Modell funktioniert für viele Websites hervorragend. Aber denken Sie an eine stark datengesteuerte Website. Zum Beispiel eine Bibliothekswebsite wie die [Vancouver Public Library](https://www.vpl.ca/). Solch eine Seite könnte als Benutzeroberfläche zu einer Datenbank fungieren. Sie könnte es Ihnen ermöglichen, nach einem bestimmten Buchgenre zu suchen oder Empfehlungen für Bücher anzuzeigen, die Sie interessieren könnten, basierend auf zuvor ausgeliehenen Büchern. Nach einer solchen Aktion muss die Seite mit dem neuen Satz anzuzeigender Bücher aktualisiert werden. Beachten Sie jedoch, dass der Großteil des Seiteninhalts — einschließlich Elementen wie Seitenkopf, Seitenleiste und Fußzeile — gleich bleibt.

Das Problem mit dem traditionellen Modell ist, dass wir die gesamte Seite laden und abrufen müssten, selbst wenn wir nur einen Teil davon aktualisieren müssen. Dies ist ineffizient und kann zu einer schlechten Benutzererfahrung führen.

Aufgrund dessen verwenden viele Websites JavaScript-APIs, um Daten vom Server anzufordern und den Seiteninhalt ohne Seitenneu-Laden zu aktualisieren. Wenn der Benutzer daher nach einem neuen Produkt sucht, fordert der Browser nur die Daten an, die benötigt werden, um die Seite zu aktualisieren — zum Beispiel den Satz neuer Bücher, der angezeigt werden soll.

![Verwendung von fetch zum Aktualisieren von Seiten](fetch-update.svg)

Die Haupt-API hierfür ist die [Fetch API](/de/docs/Web/API/Fetch_API). Diese ermöglicht es JavaScript, das in einer Seite läuft, eine [HTTP](/de/docs/Web/HTTP)-Anfrage an einen Server zu stellen, um bestimmte Ressourcen abzurufen. Wenn der Server diese bereitstellt, kann das JavaScript die Daten verwenden, um die Seite zu aktualisieren, typischerweise durch Verwendung von [DOM-Manipulations-APIs](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting). Die angeforderten Daten sind oft [JSON](/de/docs/Learn_web_development/Core/Scripting/JSON), ein geeignetes Format für den Transfer von strukturierten Daten, können aber auch HTML oder einfacher Text sein.

Dies ist ein übliches Muster für datengesteuerte Seiten wie Amazon, YouTube, eBay und so weiter. Mit diesem Modell:

- Seitenaktualisierungen sind viel schneller und Sie müssen nicht darauf warten, dass die Seite neu geladen wird, was bedeutet, dass sich die Seite schneller und reaktionsschneller anfühlt.
- Weniger Daten werden bei jeder Aktualisierung heruntergeladen, was weniger verschwendete Bandbreite bedeutet. Dies mag auf einem Desktop mit Breitbandverbindung kein großes Problem sein, ist aber ein großes Problem auf mobilen Geräten und in Ländern, in denen kein allgegenwärtiger schneller Internetdienst verfügbar ist.

> [!NOTE]
> In den frühen Tagen war diese allgemeine Technik als {{Glossary("Asynchronous", "Asynchrones")}} JavaScript und XML ({{Glossary("AJAX", "AJAX")}}) bekannt, da sie dazu neigte, XML-Daten anzufordern. Dies ist heutzutage normalerweise nicht der Fall (wahrscheinlicher würden Sie JSON anfordern), aber das Ergebnis ist immer noch dasselbe und der Begriff „AJAX“ wird immer noch oft verwendet, um die Technik zu beschreiben.

Um die Dinge noch weiter zu beschleunigen, speichern einige Websites auch Ressourcen und Daten auf dem Computer des Benutzers, wenn sie zum ersten Mal angefordert werden, was bedeutet, dass bei nachfolgenden Besuchen die lokalen Versionen verwendet werden, anstatt bei jedem erstmaligen Laden der Seite frische Kopien herunterzuladen. Der Inhalt wird nur dann vom Server neu geladen, wenn er aktualisiert wurde.

## Die Fetch API

Lassen Sie uns ein paar Beispiele der Fetch-API durchgehen.

### Abrufen von Textinhalten

Für dieses Beispiel werden wir Daten aus ein paar verschiedenen Textdateien abrufen und diese verwenden, um einen Inhaltsbereich zu füllen.

Diese Serie an Dateien wird als unsere gefälschte Datenbank fungieren; in einer realen Anwendung würden wir eher eine serverseitige Sprache wie PHP, Python oder Node verwenden, um unsere Daten aus einer Datenbank anzufordern. Hier möchten wir jedoch die Sache einfach halten und uns auf den clientseitigen Teil konzentrieren.

Um dieses Beispiel zu beginnen, machen Sie eine lokale Kopie von [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) und den vier Textdateien — [verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt), und [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt) — in einem neuen Verzeichnis auf Ihrem Computer. In diesem Beispiel laden wir beim Auswählen im Dropdown-Menü eine andere Strophe des Gedichts (welches Ihnen wohl bekannt vorkommen mag).

Fügen Sie direkt innerhalb des {{htmlelement("script")}}-Elements den folgenden Code hinzu. Dies speichert Referenzen zu den {{htmlelement("select")}}- und {{htmlelement("pre")}}-Elementen und fügt ein Listener zum `<select>`-Element hinzu, sodass, wenn der Benutzer einen neuen Wert auswählt, der neue Wert an die Funktion `updateDisplay()` als Parameter übergeben wird.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Lassen Sie uns unsere `updateDisplay()`-Funktion definieren. Zuerst fügen Sie folgendes unter Ihren vorherigen Codeblock ein — dies ist die leere Hülle der Funktion.

```js-nolint
function updateDisplay(verse) {

}
```

Wir beginnen unsere Funktion, indem wir eine relative URL konstruieren, die auf die Textdatei zeigt, die wir später laden wollen. Der Wert des {{htmlelement("select")}}-Elements zu einem beliebigen Zeitpunkt ist derselbe wie der Text innerhalb der ausgewählten {{htmlelement("option")}} (es sei denn, Sie geben in einem value-Attribut einen anderen Wert an) — also zum Beispiel "Vers 1". Die entsprechende Vers-Textdatei ist "verse1.txt" und befindet sich im selben Verzeichnis wie die HTML-Datei, daher reicht der Dateiname aus.

Webserver neigen jedoch dazu, fallsensitiv zu sein und der Dateiname enthält kein Leerzeichen. Um "Vers 1" in "verse1.txt" umzuwandeln, müssen wir das 'V' in Kleinbuchstaben umwandeln, das Leerzeichen entfernen und ".txt" hinzufügen. Dies kann mit {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}} und [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) durchgeführt werden. Fügen Sie die folgenden Zeilen in Ihre `updateDisplay()`-Funktion ein:

```js
verse = verse.replace(" ", "").toLowerCase();
const url = `${verse}.txt`;
```

Endlich sind wir bereit, die Fetch-API zu verwenden:

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

Hier gibt es einiges zu verarbeiten.

Zuallererst, der Einstiegspunkt der Fetch-API ist eine globale Funktion namens [`fetch()`](/de/docs/Web/API/Window/fetch), die die URL als Parameter entgegennimmt (sie hat einen weiteren optionalen Parameter für benutzerdefinierte Einstellungen, den wir hier nicht verwenden).

Als nächstes, `fetch()` ist eine asynchrone API, die ein {{jsxref("Promise")}} zurückgibt. Falls Sie nicht wissen, was das ist, lesen Sie das Modul über [asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS), und insbesondere die Lektion über [Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises), und kommen Sie dann hierher zurück. Sie werden feststellen, dass dieser Artikel auch über die `fetch()`-API spricht!

Da `fetch()` ein Promise zurückgibt, übergeben wir eine Funktion in die Methode {{jsxref("Promise/then", "then()")}} des zurückgegebenen Promise. Diese Methode wird aufgerufen, wenn die HTTP-Anfrage eine Antwort vom Server erhalten hat. Im Handler überprüfen wir, ob die Anfrage erfolgreich war, und werfen einen Fehler, wenn nicht. Andernfalls rufen wir [`response.text()`](/de/docs/Web/API/Response/text) auf, um den Antwortkörper als Text zu erhalten.

Es stellt sich heraus, dass `response.text()` _ebenfalls_ asynchron ist, daher geben wir das Promise zurück, das es zurückgibt, und übergeben eine Funktion in die Methode `then()` dieses neuen Promise. Diese Funktion wird aufgerufen, wenn der Antworttext bereit ist, und darin aktualisieren wir unseren `<pre>`-Block mit dem Text.

Schließlich verketten wir einen {{jsxref("Promise/catch", "catch()")}}-Handler am Ende, um alle in einem der asynchronen Funktionen, die wir aufgerufen haben, oder in deren Handler geworfenen Fehler abzufangen.

Ein Problem mit dem Beispiel, wie es derzeit steht, ist, dass es keinen Teil des Gedichts anzeigt, wenn es zuerst geladen wird. Um dies zu beheben, fügen Sie die folgenden zwei Zeilen am Ende Ihres Codes (direkt über dem schließenden `</script>`-Tag) hinzu, um Vers 1 standardmäßig zu laden, und stellen Sie sicher, dass das {{htmlelement("select")}}-Element immer den korrekten Wert anzeigt:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### Beispiel von einem Server bereitstellen

Moderne Browser führen keine HTTP-Anfragen aus, wenn Sie das Beispiel einfach von einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (für mehr zum Thema Web-Sicherheit, lesen Sie [Websicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).

Um dieses Problem zu umgehen, müssen wir das Beispiel prüfen, indem wir es über einen lokalen Webserver ausführen. Um zu erfahren, wie Sie dies tun können, siehe [Wie richte ich einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

### Der Dosenladen

In diesem Beispiel haben wir eine Beispiels-Webseite namens "Der Dosenladen" erstellt — es ist ein fiktiver Supermarkt, der nur Dosenwaren verkauft. Sie können dieses [Beispiel live auf GitHub sehen](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/) und [den Quellcode ansehen](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Eine gefälschte E-Commerce-Seite, die Suchoptionen in der linken Spalte und Produktsuchergebnisse in der rechten Spalte zeigt.](can-store.png)

Standardmäßig zeigt die Seite alle Produkte an, aber Sie können die Formularsteuerungen in der linken Spalte verwenden, um sie nach Kategorie oder Suchbegriff oder beidem zu filtern.

Es gibt ziemlich viel komplexen Code, der sich mit dem Filtern der Produkte nach Kategorie und Suchbegriffen befasst, Zeichenfolgen manipuliert, damit die Daten korrekt in der Benutzeroberfläche angezeigt werden usw. Wir werden nicht alles im Artikel diskutieren, aber Sie können ausführliche Kommentare im Code finden (siehe [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

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

Die `fetch()`-Funktion gibt ein Promise zurück. Wenn dies erfolgreich abgeschlossen wird, enthält die Funktion im ersten `.then()`-Block die vom Netzwerk zurückgegebene `response`.

In dieser Funktion:

- überprüfen wir, dass der Server keinen Fehler zurückgegeben hat (wie beispielsweise [`404 Not Found`](/de/docs/Web/HTTP/Reference/Status/404)). Wenn er das tat, werfen wir den Fehler.
- rufen wir [`json()`](/de/docs/Web/API/Response/json) auf der Antwort auf. Dies wird die Daten als [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) abrufen. Wir geben das von `response.json()` zurückgegebene Promise zurück.

Als Nächstes übergeben wir eine Funktion in die Methode `then()` dieses zurückgegebenen Promise. Diese Funktion wird ein Objekt erhalten, das die Antwortdaten als JSON enthält, die wir in die Funktion `initialize()` übergeben. Diese ist es, die den Prozess des Anzeigen aller Produkte in der Benutzeroberfläche startet.

Um Fehler zu behandeln, verketten wir einen `catch()`-Block am Ende der Kette. Dieser läuft, falls das Promise aus irgendeinem Grund fehlschlägt. Darin fügen wir eine Funktion hinzu, die als Parameter ein `err`-Objekt übergeben bekommt. Dieses `err`-Objekt kann verwendet werden, um die Art des aufgetretenen Fehlers zu melden. In diesem Fall tun wir dies mit einem einfachen `console.error()`.

Eine vollständige Webseite würde diesen Fehler jedoch auf nutzerfreundlichere Weise behandeln, indem sie eine Nachricht auf dem Bildschirm des Benutzers anzeigt und möglicherweise Optionen anbietet, um die Situation zu beheben. Aber mehr als ein simples `console.error()` brauchen wir hier nicht.

Sie können selbst die Fehlerbehandlung testen:

1. Machen Sie eine lokale Kopie der Beispiel-Dateien.
2. Führen Sie den Code über einen Webserver aus (wie oben beschrieben, unter [Beispiel von einem Server bereitstellen](#beispiel_von_einem_server_bereitstellen)).
3. Ändern Sie den Pfad zur zu ladenden Datei zu etwas wie 'produc.json' (stellen Sie sicher, dass er falsch geschrieben ist).
4. Laden Sie nun die Index-Datei in Ihrem Browser (über `localhost:8000`) und schauen Sie in die Entwicklerkonsole Ihres Browsers. Sie sehen eine Nachricht ähnlich wie „Fetch-Problem: HTTP-Fehler: 404“.

Der zweite Fetch-Block befindet sich in der Funktion `fetchBlob()`:

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

Dies funktioniert in etwa genauso wie der vorherige, mit der Ausnahme, dass wir anstelle von [`json()`](/de/docs/Web/API/Response/json) [`blob()`](/de/docs/Web/API/Response/blob) verwenden. In diesem Fall wollen wir unsere Antwort als Bilddatei zurückgeben, und das Datenformat, das wir dafür verwenden, ist [Blob](/de/docs/Web/API/Blob) (der Begriff ist eine Abkürzung für "Binary Large Object" und kann im Grunde genommen verwendet werden, um große dateiähnliche Objekte zu repräsentieren, wie Bilder oder Videodateien).

Sobald wir unseren Blob erfolgreich erhalten haben, übergeben wir ihn an unsere `showProduct()`-Funktion, die ihn anzeigt.

## Die XMLHttpRequest API

Manchmal, besonders in älterem Code, sehen Sie eine andere API namens [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) (oft abgekürzt als "XHR"), die verwendet wird, um HTTP-Anfragen zu stellen. Diese wurde vor Fetch entwickelt und war wirklich die erste API, die weit verbreitet zur Implementierung von AJAX verwendet wurde. Wir empfehlen, Fetch zu verwenden, wann immer es möglich ist: Es ist eine einfachere API und hat mehr Funktionen als `XMLHttpRequest`. Wir werden kein Beispiel durchgehen, das `XMLHttpRequest` verwendet, aber wir zeigen Ihnen, wie die `XMLHttpRequest`-Version unserer ersten Dosenladen-Anfrage aussehen würde:

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

Es gibt fünf Stufen zu diesem Prozess:

1. Erstellen eines neuen `XMLHttpRequest`-Objekts.
2. Aufrufen seiner [`open()`](/de/docs/Web/API/XMLHttpRequest/open)-Methode zur Initialisierung.
3. Hinzufügen eines Event-Listeners zu seinem [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignis, das ausgelöst wird, wenn die Antwort erfolgreich abgeschlossen wurde. Im Listener rufen wir `initialize()` mit den Daten auf.
4. Hinzufügen eines Event-Listeners zu seinem [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)-Ereignis, das ausgelöst wird, wenn die Anfrage auf einen Fehler stößt.
5. Senden der Anfrage.

Wir müssen das Ganze auch in einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block einschließen, um alle von `open()` oder `send()` geworfenen Fehler zu behandeln.

Hoffentlich sind Sie der Meinung, dass die Fetch-API hier eine Verbesserung darstellt. Insbesondere sehen Sie, wie wir in zwei verschiedenen Orten mit Fehlern umgehen müssen.

## Zusammenfassung

Dieser Artikel zeigt, wie Sie mit Fetch beginnen, um Daten vom Server abzurufen.

## Siehe auch

In diesem Artikel werden jedoch viele verschiedene Themen behandelt, die nur an der Oberfläche gekratzt wurden. Für wesentlich mehr Details zu diesen Themen probieren Sie die folgenden Artikel:

- [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Working with JSON data](/de/docs/Learn_web_development/Core/Scripting/JSON)
- [An overview of HTTP](/de/docs/Web/HTTP/Guides/Overview)
- [Serverseitige Web-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}
