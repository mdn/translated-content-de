---
title: Netzwerk-Anfragen mit JavaScript
short-title: Network requests
slug: Learn_web_development/Core/Scripting/Network_requests
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}

Eine weitere sehr häufige Aufgabe in modernen Websites und Anwendungen ist das Stellen von Netzwerk-Anfragen, um einzelne Datenobjekte vom Server abzurufen, um Bereiche einer Webseite zu aktualisieren, ohne eine komplett neue Seite laden zu müssen. Dieses scheinbar kleine Detail hat große Auswirkungen auf die Leistung und das Verhalten von Websites gehabt. In diesem Artikel werden wir das Konzept erklären und Technologien betrachten, die dies ermöglichen, insbesondere die [Fetch API](/de/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Asynchrone Netzwerk-Anfragen, die bei weitem der häufigste Anwendungsfall für asynchrones JavaScript im Web sind.</li>
          <li>Gängige Arten von Ressourcen, die aus dem Netzwerk abgerufen werden: JSON, Medienressourcen, Daten von RESTful-APIs.</li>
          <li>Wie Sie <code>fetch()</code> verwenden, um asynchrone Netzwerk-Anfragen zu implementieren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist hier das Problem?

Eine Webseite besteht aus einer HTML-Seite und (gewöhnlich) verschiedenen anderen Dateien wie Stylesheets, Skripten und Bildern. Das grundlegende Modell des Seitenladens im Web ist, dass Ihr Browser eine oder mehrere HTTP-Anfragen an den Server für die zum Anzeigen der Seite benötigten Dateien stellt, und der Server mit den angeforderten Dateien antwortet. Wenn Sie eine andere Seite besuchen, fordert der Browser die neuen Dateien an, und der Server liefert sie.

![Traditionelles Laden von Seiten](traditional-loading.svg)

Dieses Modell funktioniert für viele Websites perfekt. Aber betrachten Sie eine Website, die sehr datengetrieben ist. Zum Beispiel eine Bibliothekswebsite wie die [Vancouver Public Library](https://www.vpl.ca/). Solch eine Seite könnte als Benutzeroberfläche für eine Datenbank betrachtet werden. Möglicherweise können Sie nach einem bestimmten Buchgenre suchen oder Empfehlungen für Bücher anzeigen lassen, die Ihnen auf Basis von zuvor ausgeliehenen Büchern gefallen könnten. Wenn Sie dies tun, muss die Seite mit der neuen Buchauswahl aktualisiert werden. Aber beachten Sie, dass der größte Teil des Seiteninhalts – einschließlich Elemente wie Seitenkopf, Seitenleiste und Fußzeile – gleich bleibt.

Das Problem mit dem traditionellen Modell in diesem Fall ist, dass wir die gesamte Seite abrufen und laden müssten, selbst wenn wir nur einen Teil davon aktualisieren müssen. Dies ist ineffizient und kann zu einer schlechten Benutzererfahrung führen.

Stattdessen verwenden viele Websites JavaScript-APIs, um Daten vom Server anzufordern und den Seiteninhalt ohne Seitenladung zu aktualisieren. Wenn der Nutzer also nach einem neuen Produkt sucht, fordert der Browser nur die Daten an, die benötigt werden, um die Seite zu aktualisieren – zum Beispiel die neuen anzuzeigenden Bücher.

![Verwendung von Fetch zur Seitenaktualisierung](fetch-update.svg)

Die Haupt-API hier ist die [Fetch API](/de/docs/Web/API/Fetch_API). Sie ermöglicht JavaScript, das in einer Seite läuft, eine [HTTP](/de/docs/Web/HTTP)-Anfrage an einen Server zu stellen, um bestimmte Ressourcen abzurufen. Wenn der Server sie bereitstellt, kann das JavaScript die Daten verwenden, um die Seite zu aktualisieren, üblicherweise durch Verwendung von [DOM-Manipulations-APIs](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting). Die angeforderten Daten sind oft [JSON](/de/docs/Learn_web_development/Core/Scripting/JSON), das ein gutes Format für die Übertragung strukturierter Daten ist, können aber auch HTML oder nur Text sein.

Dies ist ein häufiges Muster für datengesteuerte Seiten wie Amazon, YouTube, eBay und so weiter. Mit diesem Modell:

- Seitenaktualisierungen erfolgen viel schneller und Sie müssen nicht auf das Neuladen der Seite warten, was bedeutet, dass die Website schneller und reaktionsschneller wirkt.
- Weniger Daten werden bei jeder Aktualisierung heruntergeladen, was weniger verschwendete Bandbreite bedeutet. Dies ist vielleicht kein großes Problem auf einem Desktop mit Breitbandverbindung, aber ein großes Problem auf mobilen Geräten und in Ländern ohne allgegenwärtigen schnellen Internetdienst.

> [!NOTE]
> In den frühen Tagen war diese allgemeine Technik als {{Glossary("Asynchronous", "Asynchronously")}} JavaScript and XML ({{Glossary("AJAX", "AJAX")}}) bekannt, da es dazu tendierte, XML-Daten anzufordern. Dies ist heutzutage normalerweise nicht der Fall (es wäre wahrscheinlicher, JSON anzufordern), aber das Ergebnis ist immer noch das gleiche, und der Begriff "AJAX" wird oft verwendet, um die Technik zu beschreiben.

Um die Geschwindigkeit weiter zu steigern, speichern einige Websites auch Ressourcen und Daten auf dem Computer des Nutzers, wenn sie das erste Mal angefordert werden, sodass bei nachfolgenden Besuchen die lokalen Versionen verwendet werden, statt jedes Mal neue Kopien herunterzuladen, wenn die Seite zuerst geladen wird. Der Inhalt wird nur vom Server neu geladen, wenn er aktualisiert wurde.

## Die Fetch API

Lassen Sie uns einige Beispiele der Fetch API durchgehen.

### Laden von Textinhalten

Für dieses Beispiel werden wir Daten aus einigen verschiedenen Textdateien anfordern und verwenden, um ein Inhaltsbereich zu füllen.

Diese Serie von Dateien wird als unsere Fake-Datenbank fungieren; in einer echten Anwendung würden wir eher eine serverseitige Sprache wie PHP, Python oder Node verwenden, um unsere Daten von einer Datenbank anzufordern. Hier möchten wir es jedoch einfach halten und uns auf den clientseitigen Teil konzentrieren.

Um dieses Beispiel zu beginnen, machen Sie eine lokale Kopie von [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) und den vier Textdateien — [verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt), und [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt) — in einem neuen Verzeichnis auf Ihrem Computer. In diesem Beispiel werden wir einen anderen Vers des Gedichts (den Sie wahrscheinlich erkennen werden) abrufen, wenn er im Dropdown-Menü ausgewählt wird.

Fügen Sie direkt im {{htmlelement("script")}}-Element den folgenden Code ein. Dieser speichert Verweise auf die {{htmlelement("select")}}- und {{htmlelement("pre")}}-Elemente und fügt einen Listener zum `<select>`-Element hinzu, so dass, wenn der Nutzer einen neuen Wert auswählt, der neue Wert als Parameter an die Funktion `updateDisplay()` übergeben wird.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Definieren wir unsere `updateDisplay()`-Funktion. Zuerst setzen Sie den folgenden Code unter Ihren vorherigen Codeblock — dies ist die leere Hülle der Funktion.

```js-nolint
function updateDisplay(verse) {

}
```

Wir starten unsere Funktion, indem wir eine relative URL konstruieren, die auf die Textdatei verweist, die wir laden möchten, da wir sie später benötigen. Der Wert des {{htmlelement("select")}}-Elements zu jeder Zeit ist derselbe wie der Text innerhalb der ausgewählten {{htmlelement("option")}} (es sei denn, Sie spezifizieren einen anderen Wert in einem value-Attribut) – zum Beispiel "Vers 1". Die entsprechende Vers-Textdatei ist "verse1.txt" und befindet sich im gleichen Verzeichnis wie die HTML-Datei, daher reicht der Dateiname allein aus.

Allerdings neigen Webserver dazu, case-sensitiv zu sein, und der Dateiname enthält kein Leerzeichen. Um "Vers 1" in "verse1.txt" zu konvertieren, müssen wir das 'V' in Kleinbuchstaben umwandeln, das Leerzeichen entfernen und ".txt" am Ende hinzufügen. Dies kann mit {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}}, und [Vorlagenliteral](/de/docs/Web/JavaScript/Reference/Template_literals) gemacht werden. Fügen Sie die folgenden Zeilen in Ihre `updateDisplay()`-Funktion ein:

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

Hier gibt es eine Menge zu entpacken.

Zunächst ist der Einstiegspunkt in die Fetch API eine globale Funktion namens [`fetch()`](/de/docs/Web/API/Window/fetch), die die URL als Parameter nimmt (sie nimmt einen weiteren optionalen Parameter für benutzerdefinierte Einstellungen, den wir hier jedoch nicht verwenden).

Außerdem ist `fetch()` eine asynchrone API, die ein {{jsxref("Promise")}} zurückgibt. Wenn Sie nicht wissen, was das ist, lesen Sie das Modul über [asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS), insbesondere die Lektion über [Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises), und kehren Sie dann hierher zurück. In diesem Artikel wird auch die `fetch()`-API behandelt!

Da `fetch()` ein Promise zurückgibt, geben wir eine Funktion in die {{jsxref("Promise/then", "then()")}}-Methode des zurückgegebenen Promises ein. Diese Methode wird aufgerufen, wenn die HTTP-Anfrage eine Antwort vom Server erhalten hat. Im Handler überprüfen wir, ob die Anfrage erfolgreich war, und werfen einen Fehler, wenn nicht. Andernfalls rufen wir [`response.text()`](/de/docs/Web/API/Response/text) auf, um den Antworttext zu erhalten.

Es stellt sich heraus, dass `response.text()` _auch_ asynchron ist, also geben wir das Promise zurück, das es zurückgibt, und übergeben eine Funktion in die `then()`-Methode dieses neuen Promises. Diese Funktion wird aufgerufen, wenn der Antworttext bereit ist, und darin werden wir unseren `<pre>`-Block mit dem Text aktualisieren.

Schließlich verketten wir einen {{jsxref("Promise/catch", "catch()")}}-Handler am Ende, um Fehler abzufangen, die entweder in den aufgerufenen asynchronen Funktionen oder ihren Handlern geworfen werden.

Ein Problem mit dem Beispiel, wie es derzeit steht, ist, dass es keinen Teil des Gedichts zeigt, wenn es zuerst geladen wird. Um dies zu beheben, fügen Sie die folgenden zwei Zeilen am Ende Ihres Codes (direkt über dem schließenden `</script>`-Tag) hinzu, um Vers 1 standardmäßig zu laden und sicherzustellen, dass das {{htmlelement("select")}}-Element immer den richtigen Wert zeigt:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### Ihr Beispiel von einem Server ausführen

Moderne Browser werden keine HTTP-Anfragen ausführen, wenn Sie das Beispiel nur aus einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (für mehr zum Thema Web-Sicherheit lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).

Um dies zu umgehen, müssen wir das Beispiel testen, indem wir es über einen lokalen Webserver laufen lassen. Wie Sie das machen, erfahren Sie unter [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

### Der Dosenladen

In diesem Beispiel haben wir eine Beispielseite namens Der Dosenladen erstellt – es ist ein fiktiver Supermarkt, der nur Dosengüter verkauft. Sie können dieses [Beispiel live auf GitHub ansehen](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/) und [den Quellcode einsehen](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Eine gefälschte E-Commerce-Website mit Suchoptionen in der linken Spalte und Produktsuchresultaten in der rechten Spalte.](can-store.png)

Standardmäßig zeigt die Seite alle Produkte an, aber Sie können die Formularsteuerungen in der linken Spalte verwenden, um sie nach Kategorie, Suchbegriff oder beidem zu filtern.

Es gibt ziemlich viel komplexen Code, der sich mit dem Filtern der Produkte nach Kategorie und Suchbegriffen, dem Manipulieren von Zeichenfolgen, damit die Daten in der Benutzeroberfläche korrekt angezeigt werden, usw. befasst. Wir werden nicht alles im Artikel besprechen, aber Sie können umfangreiche Kommentare im Code finden (siehe [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

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

Die `fetch()`-Funktion gibt ein Promise zurück. Wenn dieses erfolgreich abgeschlossen wird, enthält die Funktion innerhalb des ersten `.then()`-Blocks die vom Netzwerk zurückgegebene `response`.

Innerhalb dieser Funktion:

- überprüfen wir, dass der Server keinen Fehler (wie [`404 Not Found`](/de/docs/Web/HTTP/Reference/Status/404)) zurückgegeben hat. Wenn doch, werfen wir den Fehler.
- rufen wir [`json()`](/de/docs/Web/API/Response/json) auf dem `response` auf. Dies wird die Daten als [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) abrufen. Wir geben das Promise zurück, das von `response.json()` zurückgegeben wird.

Als nächstes übergeben wir eine Funktion in die `then()`-Methode des zurückgegebenen Promises. Diese Funktion erhält ein Objekt, das die Antwortdaten als JSON enthält, die wir in die `initialize()`-Funktion übergeben. `initialize()` beginnt mit dem Prozess der Anzeige aller Produkte in der Benutzeroberfläche.

Um Fehler zu behandeln, fügen wir einen `.catch()`-Block an das Ende der Kette an. Dieser läuft, wenn das Promise aus irgendeinem Grund fehlschlägt. Innerhalb davon fügen wir eine Funktion hinzu, die ein Parameter, ein `err`-Objekt, übergeben wird. Dieses `err`-Objekt kann verwendet werden, um die Art des aufgetretenen Fehlers zu melden, in diesem Fall tun wir dies mit einem einfachen `console.error()`.

Ein vollständiges Website würde diesen Fehler jedoch eleganter behandeln, indem eine Nachricht auf dem Bildschirm des Nutzers angezeigt wird und möglicherweise Optionen angeboten werden, um die Situation zu beheben, aber wir brauchen nicht mehr als ein einfaches `console.error()`.

Sie können den Fehlerfall selbst testen:

1. Machen Sie eine lokale Kopie der Beispiel Dateien.
2. Führen Sie den Code durch einen Web Server aus (wie oben beschrieben, unter [Ihr Beispiel von einem Server ausführen](#ihr_beispiel_von_einem_server_ausführen)).
3. Ändern Sie den Pfad zur Datei, die abgerufen werden soll, in etwas wie 'produc.json' (stellen Sie sicher, dass dies falsch geschrieben ist).
4. Laden Sie nun die Indexdatei in Ihrem Browser (über `localhost:8000`) und schauen Sie in Ihre Entwicklerkonsole im Browser. Sie werden eine Nachricht ähnlich wie "Fetch problem: HTTP error: 404" sehen.

Der zweite Fetch-Block ist in der `fetchBlob()`-Funktion zu finden:

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

Dies funktioniert ähnlich wie der vorherige, jedoch verwenden wir anstelle von [`json()`](/de/docs/Web/API/Response/json) [`blob()`](/de/docs/Web/API/Response/blob). In diesem Fall wollen wir unsere Antwort als Bilddatei zurückgeben, und das Datenformat, das wir dafür verwenden, ist [Blob](/de/docs/Web/API/Blob) (der Begriff ist eine Abkürzung für "Binary Large Object" und kann im Wesentlichen verwendet werden, um große, wie Dateien geformte Objekte zu repräsentieren, wie Bilder oder Videodateien).

Sobald wir erfolgreich unseren Blob empfangen haben, übergeben wir ihn an unsere `showProduct()`-Funktion, die ihn anzeigt.

## Die XMLHttpRequest API

Manchmal, besonders in älterem Code, werden Sie eine andere API namens [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) (oft als "XHR" abgekürzt) sehen, die verwendet wird, um HTTP-Anfragen zu stellen. Diese ging der Fetch voran und war wirklich die erste API, die weit verbreitet für die Implementierung von AJAX verwendet wurde. Wir empfehlen Ihnen, Fetch zu verwenden, wenn Sie können: Es ist eine einfachere API und hat mehr Funktionen als `XMLHttpRequest`. Wir werden hier kein Beispiel verwenden, das `XMLHttpRequest` nutzt, aber wir werden Ihnen zeigen, wie die `XMLHttpRequest`-Version unserer ersten Dosenladen-Anfrage aussehen würde:

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

Es gibt fünf Stufen dazu:

1. Erstellen Sie ein neues `XMLHttpRequest`-Objekt.
2. Rufen Sie seine [`open()`](/de/docs/Web/API/XMLHttpRequest/open)-Methode auf, um es zu initialisieren.
3. Fügen Sie einen Ereignis-Listener zu seinem [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignis hinzu, das ausgelöst wird, wenn die Antwort erfolgreich abgeschlossen wurde. Im Listener rufen wir `initialize()` mit den Daten auf.
4. Fügen Sie einen Ereignis-Listener zu seinem [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)-Ereignis hinzu, das ausgelöst wird, wenn die Anfrage auf einen Fehler stößt.
5. Senden Sie die Anfrage.

Wir müssen auch das Ganze in den [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block einwickeln, um alle von `open()` oder `send()` geworfenen Fehler zu behandeln.

Hoffentlich denken Sie, dass die Fetch API eine Verbesserung gegenüber diesem Code darstellt. Besonders berücksichtigen Sie, wie wir Fehler an zwei verschiedenen Stellen behandeln müssen.

## Zusammenfassung

Dieser Artikel zeigt, wie man mit Fetch beginnt, um Daten vom Server abzurufen.

## Siehe auch

Es gibt jedoch viele verschiedene Themen, die in diesem Artikel diskutiert werden, die wir nur an der Oberfläche gestreift haben. Für viel mehr Details zu diesen Themen versuchen Sie die folgenden Artikel:

- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Arbeiten mit JSON-Daten](/de/docs/Learn_web_development/Core/Scripting/JSON)
- [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview)
- [Serverseitige Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}
