---
title: Netzwerkanfragen mit JavaScript
slug: Learn_web_development/Core/Scripting/Network_requests
l10n:
  sourceCommit: 1bc73ffae56805919adab884053b966e5a8a9446
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}

Eine weitere sehr häufige Aufgabe in modernen Websites und Anwendungen ist das Stellen von Netzwerkanfragen, um einzelne Datenobjekte vom Server abzurufen und Teile einer Webseite zu aktualisieren, ohne eine komplett neue Seite laden zu müssen. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites gehabt. In diesem Artikel erklären wir das Konzept und betrachten Technologien, die dies ermöglichen, insbesondere die [Fetch API](/de/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Asynchrone Netzwerkanfragen, der bei weitem häufigste Anwendungsfall von asynchronem JavaScript im Web.</li>
          <li>Gängige Arten von Ressourcen, die aus dem Netzwerk abgerufen werden: JSON, Medienressourcen, Daten von RESTful APIs.</li>
          <li>Wie man <code>fetch()</code> verwendet, um asynchrone Netzwerkanfragen zu implementieren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist hier das Problem?

Eine Webseite besteht aus einer HTML-Seite und (in der Regel) verschiedenen anderen Dateien wie Stylesheets, Skripten und Bildern. Das grundlegende Modell des Seitenladens im Web ist, dass Ihr Browser eine oder mehrere HTTP-Anfragen an den Server für die zum Anzeigen der Seite benötigten Dateien stellt, und der Server antwortet mit den angeforderten Dateien. Wenn Sie eine andere Seite besuchen, fordert der Browser die neuen Dateien an und der Server antwortet mit diesen.

![Traditionelles Seitenladen](traditional-loading.svg)

Dieses Modell funktioniert für viele Websites einwandfrei. Aber betrachten Sie eine Website, die sehr datengetrieben ist. Zum Beispiel eine Bibliothekswebsite wie die der [Vancouver Public Library](https://www.vpl.ca/). Man könnte sich eine Seite wie diese als Benutzeroberfläche für eine Datenbank denken. Sie könnte es Ihnen ermöglichen, nach einem bestimmten Buchgenre zu suchen, oder Empfehlungen für Bücher anzeigen, die Ihnen gefallen könnten, basierend auf Büchern, die Sie zuvor ausgeliehen haben. Wenn Sie dies tun, muss die Seite mit dem neuen Satz anzuzeigender Bücher aktualisiert werden. Beachten Sie jedoch, dass der Großteil des Seiteninhalts – einschließlich des Kopfbereichs, der Seitenleiste und des Fußbereichs – gleich bleibt.

Das Problem mit dem traditionellen Modell hier ist, dass wir die gesamte Seite abrufen und laden müssten, auch wenn wir nur einen Teil davon aktualisieren müssen. Dies ist ineffizient und kann zu einer schlechten Benutzererfahrung führen.

Stattdessen verwenden viele Websites JavaScript-APIs, um Daten vom Server anzufordern und den Seiteninhalt ohne einen kompletten Seitenladevorgang zu aktualisieren. Wenn der Benutzer nach einem neuen Produkt sucht, fordert der Browser nur die Daten an, die benötigt werden, um die Seite zu aktualisieren – etwa der Satz neuer Bücher, die angezeigt werden sollen.

![Fetch zum Aktualisieren von Seiten verwenden](fetch-update.svg)

Die Haupt-API hierfür ist die [Fetch API](/de/docs/Web/API/Fetch_API). Damit kann JavaScript, das in einer Seite läuft, eine [HTTP](/de/docs/Web/HTTP)-Anfrage an einen Server stellen, um bestimmte Ressourcen abzurufen. Wenn der Server diese bereitstellt, kann das JavaScript die Daten verwenden, um die Seite zu aktualisieren, typischerweise durch die Verwendung von [DOM-Manipulations-APIs](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting). Die angeforderten Daten sind oft [JSON](/de/docs/Learn_web_development/Core/Scripting/JSON), was ein gutes Format zum Übertragen von strukturierten Daten darstellt, können jedoch auch HTML oder reiner Text sein.

Dies ist ein gängiges Muster für datengesteuerte Seiten wie Amazon, YouTube, eBay usw. Mit diesem Modell:

- Aktualisierungen der Seite sind viel schneller und Sie müssen nicht auf das Neuladen der Seite warten, was bedeutet, dass sich die Seite schneller und reaktionsschneller anfühlt.
- Weniger Daten werden bei jeder Aktualisierung heruntergeladen, was weniger verschwendete Bandbreite bedeutet. Dies mag auf einem Desktop mit Breitbandverbindung kein großes Problem sein, aber es ist ein großes Problem auf mobilen Geräten und in Ländern, die keinen allgegenwärtigen schnellen Internetdienst haben.

> [!NOTE]
> In den frühen Tagen war diese allgemeine Technik als {{Glossary("Asynchronous", "Asynchrone")}} JavaScript und XML ({{Glossary("AJAX", "AJAX")}}) bekannt, da sie dazu neigte, XML-Daten anzufordern. Dies ist heutzutage normalerweise nicht der Fall (es ist wahrscheinlicher, dass JSON angefordert wird), aber das Ergebnis ist dasselbe, und der Begriff "AJAX" wird oft verwendet, um die Technik zu beschreiben.

Um die Dinge noch weiter zu beschleunigen, speichern einige Websites auch Assets und Daten auf dem Computer des Benutzers, wenn sie zuerst angefordert werden. Das bedeutet, dass bei nachfolgenden Besuchen die lokalen Versionen verwendet werden, anstatt bei jedem ersten Laden der Seite neue Kopien herunterzuladen. Der Inhalt wird nur dann vom Server neu geladen, wenn er aktualisiert wurde.

## Die Fetch API

Lassen Sie uns ein paar Beispiele der Fetch API durchgehen.

### Abrufen von Textinhalten

In diesem Beispiel werden wir Daten aus einigen verschiedenen Textdateien anfordern und diese verwenden, um einen Inhaltsbereich zu füllen.

Diese Reihe von Dateien wird als unsere gefälschte Datenbank dienen; in einer echten Anwendung würden wir eher eine serverseitige Sprache wie PHP, Python oder Node verwenden, um unsere Daten aus einer Datenbank anzufordern. Hier möchten wir es jedoch einfach halten und uns auf den clientseitigen Teil konzentrieren.

Um dieses Beispiel zu beginnen, machen Sie eine lokale Kopie von [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) und den vier Textdateien — [verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt), und [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt) — in einem neuen Verzeichnis auf Ihrem Computer. In diesem Beispiel werden wir einen anderen Vers des Gedichts abrufen (das Sie möglicherweise wiedererkennen), wenn er im Dropdown-Menü ausgewählt wird.

Fügen Sie direkt innerhalb des {{htmlelement("script")}}-Elements den folgenden Code hinzu. Dieser speichert Verweise auf die {{htmlelement("select")}}- und {{htmlelement("pre")}}-Elemente und fügt dem `<select>`-Element einen Listener hinzu, sodass, wenn der Benutzer einen neuen Wert auswählt, der neue Wert an die Funktion `updateDisplay()` als Parameter übergeben wird.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Definieren wir unsere `updateDisplay()`-Funktion. Zuerst fügen Sie unterhalb Ihres vorherigen Codeblocks Folgendes hinzu – das ist das leere Gerüst der Funktion.

```js-nolint
function updateDisplay(verse) {

}
```

Wir beginnen unsere Funktion, indem wir eine relative URL konstruieren, die auf die Textdatei zeigt, die wir laden möchten, da wir sie später benötigen werden. Der Wert des {{htmlelement("select")}}-Elements zu jeder Zeit ist derselbe wie der Text innerhalb der ausgewählten {{htmlelement("option")}} (es sei denn, Sie geben einen anderen Wert in einem value-Attribut an) – also zum Beispiel "Vers 1". Die entsprechende Vers-Textdatei ist "verse1.txt" und befindet sich im selben Verzeichnis wie die HTML-Datei, daher reicht der Dateiname aus.

Allerdings neigen Webserver dazu, zwischen Groß- und Kleinschreibung zu unterscheiden, und der Dateiname enthält keinen Leerraum. Um "Verse 1" in "verse1.txt" umzuwandeln, müssen wir das 'V' in Kleinbuchstaben umwandeln, den Leerraum entfernen und ".txt" anhängen. Dies kann mit {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}} und [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) erreicht werden. Fügen Sie die folgenden Zeilen in Ihre `updateDisplay()`-Funktion ein:

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

Hier gibt es einiges zu erläutern.

Zunächst ist der Einstiegspunkt in die Fetch API eine globale Funktion namens [`fetch()`](/de/docs/Web/API/Window/fetch), die die URL als Parameter nimmt (sie nimmt einen weiteren optionalen Parameter für benutzerdefinierte Einstellungen, aber wir verwenden das hier nicht).

Weiterhin ist `fetch()` eine asynchrone API, die ein {{jsxref("Promise")}} zurückgibt. Wenn Sie nicht wissen, was das ist, lesen Sie das Modul über [asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS), insbesondere die Lektion über [Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises), und kehren Sie dann hierher zurück. Sie werden feststellen, dass in diesem Artikel auch über die `fetch()`-API gesprochen wird!

Da `fetch()` ein Promise zurückgibt, übergeben wir eine Funktion an die {{jsxref("Promise/then", "then()")}}-Methode des zurückgegebenen Versprechens. Diese Methode wird aufgerufen, wenn die HTTP-Anfrage eine Antwort vom Server erhalten hat. Im Handler prüfen wir, ob die Anfrage erfolgreich war, und werfen einen Fehler, wenn dies nicht der Fall ist. Andernfalls rufen wir [`response.text()`](/de/docs/Web/API/Response/text) auf, um den Antwortkörper als Text zu erhalten.

Es stellt sich heraus, dass `response.text()` _auch_ asynchron ist, also geben wir das Versprechen zurück, das es zurückgibt, und übergeben eine Funktion an die `then()`-Methode dieses neuen Versprechens. Diese Funktion wird aufgerufen, wenn der Antworttext bereit ist, und darin werden wir unser `<pre>`-Block mit dem Text aktualisieren.

Schließlich verketten wir einen {{jsxref("Promise/catch", "catch()")}}-Handler am Ende, um alle Fehler abzufangen, die in einem der von uns aufgerufenen asynchronen Funktionen oder deren Handlers auftreten.

Ein Problem mit dem Beispiel, wie es derzeit steht, ist, dass es keinen der Gedichtstrophen zeigt, wenn es zuerst geladen wird. Um dies zu beheben, fügen Sie die folgenden beiden Zeilen am Ende Ihres Codes (kurz vor dem schließenden `</script>` Tag) hinzu, um Vers 1 standardmäßig zu laden, und stellen Sie sicher, dass das {{htmlelement("select")}}-Element immer den korrekten Wert zeigt:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### Ihr Beispiel von einem Server ausführen

Moderne Browser führen keine HTTP-Anfragen aus, wenn Sie das Beispiel einfach von einer lokalen Datei ausführen. Das liegt an Sicherheitsbeschränkungen (mehr dazu im Artikel [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).

Um dies zu umgehen, müssen wir das Beispiel durch einen lokalen Webserver laufen lassen. Um herauszufinden, wie das geht, siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

### The Can Store

In diesem Beispiel haben wir eine Beispielseite namens The Can Store erstellt – ein fiktiver Supermarkt, der nur Konserven verkauft. Sie können dieses [Beispiel live auf GitHub sehen](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/), und sich [den Quellcode ansehen](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Ein gefälschter E-Commerce-Shop zeigt Suchoptionen in der linken Spalte und Produktsuchergebnisse in der rechten Spalte.](can-store.png)

Standardmäßig zeigt die Seite alle Produkte an, aber Sie können die Formularsteuerungen in der linken Spalte verwenden, um sie nach Kategorien oder Suchbegriffen oder beidem zu filtern.

Es gibt ziemlich viel komplexen Code, der sich mit dem Filtern der Produkte nach Kategorien und Suchbegriffen befasst, Strings manipuliert, damit die Daten korrekt in der Benutzeroberfläche angezeigt werden usw. Wir werden nicht alles in diesem Artikel besprechen, aber Sie können ausführliche Kommentare im Code finden (siehe [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

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

Die `fetch()`-Funktion gibt ein Promise zurück. Wenn dies erfolgreich abgeschlossen ist, enthält die Funktion innerhalb des ersten `.then()`-Blocks die `response`, die aus dem Netzwerk zurückgegeben wird.

Innerhalb dieser Funktion:

- überprüfen wir, ob der Server nicht einen Fehler zurückgegeben hat (wie zum Beispiel [`404 Not Found`](/de/docs/Web/HTTP/Status/404)). Wenn er dies getan hat, werfen wir den Fehler.
- rufen wir [`json()`](/de/docs/Web/API/Response/json) auf die Antwort auf. Dies wird die Daten als [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) abrufen. Wir geben das Versprechen zurück, das `response.json()` zurückgibt.

Dann übergeben wir eine Funktion an die `then()`-Methode dieses zurückgegebenen Versprechens. Diese Funktion wird ein Objekt enthalten, das die Antwortdaten als JSON enthält, welche wir an die `initialize()`-Funktion weitergeben. Es ist `initialize()`, das den Prozess des Anzeigens aller Produkte in der Benutzeroberfläche startet.

Um Fehler zu behandeln, verketten wir einen `.catch()`-Block an das Ende der Kette. Dieser läuft, wenn das Versprechen aus irgendeinem Grund fehlschlägt. Innerhalb davon fügen wir eine Funktion hinzu, die als Parameter ein `err`-Objekt enthält. Dieses `err`-Objekt kann verwendet werden, um die Art des entstandenen Fehlers zu melden, in diesem Fall tun wir dies mit einem einfachen `console.error()`.

Eine komplette Website würde diesen Fehler jedoch freundlicher behandeln, indem sie eine Nachricht auf dem Bildschirm des Benutzers anzeigt und möglicherweise Optionen anbietet, um die Lage zu verbessern, aber wir brauchen nichts mehr als ein einfaches `console.error()`.

Sie können den Fehlerfall selbst testen:

<!-- cSpell:ignore produc -->

1. Machen Sie eine lokale Kopie der Beispielfiles.
2. Führen Sie den Code über einen Webserver aus (wie oben beschrieben unter [Ihr Beispiel von einem Server ausführen](#ihr_beispiel_von_einem_server_ausführen)).
3. Ändern Sie den Pfad zur abzurufenden Datei in etwas wie 'produc.json' (stellen Sie sicher, dass es falsch geschrieben ist).
4. Laden Sie nun die Indexdatei in Ihrem Browser (über `localhost:8000`) und schauen Sie in die Entwicklertools Ihres Browsers. Sie sehen eine Nachricht, die in etwa "Fetch problem: HTTP error: 404" lautet.

Der zweite Fetch-Block kann in der `fetchBlob()`-Funktion gefunden werden:

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

Dies funktioniert ähnlich wie der vorherige, außer dass wir anstelle von [`json()`](/de/docs/Web/API/Response/json) [`blob()`](/de/docs/Web/API/Response/blob) verwenden. In diesem Fall möchten wir unsere Antwort als Bilddatei zurückgeben, und das Datenformat, das wir dafür verwenden, ist [Blob](/de/docs/Web/API/Blob) (der Begriff ist eine Abkürzung für "Binary Large Object" und kann im Wesentlichen verwendet werden, um große dateiartige Objekte wie Bilder oder Video-Dateien darzustellen).

Sobald wir unseren Blob erfolgreich erhalten haben, übergeben wir ihn an unsere `showProduct()`-Funktion, die ihn anzeigt.

## Die XMLHttpRequest API

Manchmal, besonders in älterem Code, werden Sie eine andere API namens [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) (oft als "XHR" abgekürzt) sehen, die verwendet wird, um HTTP-Anfragen zu stellen. Diese ging dem Fetch voraus und war eigentlich die erste API, die weit verbreitet zur Umsetzung von AJAX verwendet wurde. Wir empfehlen Ihnen, Fetch zu verwenden, wenn Sie können: Es ist eine einfachere API und hat mehr Funktionen als `XMLHttpRequest`. Wir werden kein Beispiel durchgehen, das `XMLHttpRequest` verwendet, aber wir zeigen Ihnen, wie die `XMLHttpRequest`-Version unserer ersten Can Store-Anfrage aussehen würde:

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
3. Fügen Sie einen Event-Listener zu seinem [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignis hinzu, das ausgelöst wird, wenn die Antwort erfolgreich abgeschlossen wurde. Im Listener rufen wir `initialize()` mit den Daten auf.
4. Fügen Sie einen Event-Listener zu seinem [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)-Ereignis hinzu, das ausgelöst wird, wenn die Anfrage auf einen Fehler stößt.
5. Senden der Anfrage.

Wir müssen auch das Ganze in den [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block einwickeln, um eventuelle Fehler von `open()` oder `send()` zu handhaben.

Hoffentlich denken Sie, dass die Fetch API im Vergleich hierzu eine Verbesserung darstellt. Besonders sehen Sie, wie wir Fehler an zwei verschiedenen Orten behandeln müssen.

## Zusammenfassung

Dieser Artikel zeigt, wie Sie mit Fetch beginnen können, um Daten vom Server abzurufen.

## Siehe auch

In diesem Artikel werden jedoch viele verschiedene Themen behandelt, die nur oberflächlich behandelt wurden. Für viel mehr Details zu diesen Themen, probieren Sie die folgenden Artikel:

- [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Arbeiten mit JSON-Daten](/de/docs/Learn_web_development/Core/Scripting/JSON)
- [Ein Überblick über HTTP](/de/docs/Web/HTTP/Overview)
- [Serverseitige Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}
