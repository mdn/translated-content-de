---
title: Abrufen von Daten vom Server
slug: Learn/JavaScript/Client-side_web_APIs/Fetching_data
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Eine weitere sehr häufige Aufgabe auf modernen Websites und in Anwendungen besteht darin, einzelne Datenposten vom Server abzurufen, um Abschnitte einer Webseite zu aktualisieren, ohne eine vollständig neue Seite laden zu müssen. Dieses scheinbar kleine Detail hat einen enormen Einfluss auf die Leistung und das Verhalten von Websites gehabt. In diesem Artikel erklären wir das Konzept und schauen auf die Technologien, die dies ermöglichen, insbesondere die [Fetch API](/de/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Grundbausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Grundlagen der Client-seitigen APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Daten vom Server abruft und sie verwendet, um den Inhalt einer Webseite zu aktualisieren.
      </td>
    </tr>
  </tbody>
</table>

## Was ist das Problem hier?

Eine Webseite besteht aus einer HTML-Seite und (meistens) verschiedenen anderen Dateien, wie Stylesheets, Skripten und Bildern. Das grundlegende Modell der Seitenladezeit im Web ist, dass Ihr Browser eine oder mehrere HTTP-Anfragen an den Server für die zum Anzeigen der Seite benötigten Dateien sendet, und der Server die angeforderten Dateien zurückgibt. Wenn Sie eine andere Seite besuchen, fordert der Browser die neuen Dateien an, und der Server antwortet mit ihnen.

![Traditionelles Laden von Seiten](traditional-loading.svg)

Dieses Modell funktioniert für viele Websites einwandfrei. Aber betrachten Sie eine Website, die sehr datengesteuert ist. Zum Beispiel eine Bibliothekswebsite wie die der [Vancouver Public Library](https://www.vpl.ca/). Unter anderem könnte man sich eine solche Seite als eine Benutzeroberfläche zu einer Datenbank vorstellen. Sie könnte Ihnen ermöglichen, nach einem bestimmten Buchgenre zu suchen oder Ihnen Empfehlungen für Bücher anzuzeigen, die Ihnen gefallen könnten, basierend auf Büchern, die Sie zuvor ausgeliehen haben. Wenn Sie dies tun, muss die Seite mit der neuen Reihe von Büchern aktualisiert werden, die angezeigt werden sollen. Beachten Sie jedoch, dass der Großteil des Seiteninhalts — einschließlich Elemente wie der Seitenkopf, die Sidebar und die Fußzeile — gleich bleibt.

Das Problem mit dem traditionellen Modell ist hier, dass wir die gesamte Seite abrufen und laden müssten, selbst wenn wir nur einen Teil davon aktualisieren müssen. Das ist ineffizient und kann zu einer schlechten Benutzererfahrung führen.

Anstatt des traditionellen Modells verwenden viele Websites JavaScript-APIs, um Daten vom Server abzurufen und den Seiteninhalt ohne einen Seitenaufruf zu aktualisieren. Wenn der Benutzer also nach einem neuen Produkt sucht, fordert der Browser nur die Daten an, die zur Aktualisierung der Seite benötigt werden — z. B. die neue Reihe von Büchern, die angezeigt werden sollen.

![Verwenden von Fetch zur Aktualisierung von Seiten](fetch-update.svg)

Die Haupt-API hier ist die [Fetch API](/de/docs/Web/API/Fetch_API). Diese ermöglicht es JavaScript, das auf einer Seite ausgeführt wird, eine [HTTP](/de/docs/Web/HTTP)-Anfrage an einen Server zu senden, um spezifische Ressourcen abzurufen. Wenn der Server diese bereitstellt, kann das JavaScript die Daten verwenden, um die Seite zu aktualisieren, typischerweise durch die Verwendung von [DOM-Manipulations-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents). Die angeforderten Daten sind häufig [JSON](/de/docs/Learn/JavaScript/Objects/JSON), was ein gutes Format zum Übertragen strukturierter Daten ist, können aber auch HTML oder nur Text sein.

Dieses Muster ist bei datengetriebenen Websites wie Amazon, YouTube, eBay und so weiter weit verbreitet. Mit diesem Modell:

- Seitenaktualisierungen sind viel schneller, und Sie müssen nicht darauf warten, dass die Seite neu geladen wird, was bedeutet, dass sich die Website schneller und reaktionsfähiger anfühlt.
- Weniger Daten werden bei jedem Update heruntergeladen, was weniger verschwendete Bandbreite bedeutet. Dies mag auf einem Desktop mit einer Breitbandverbindung kein großes Problem sein, ist jedoch ein großes Problem auf mobilen Geräten und in Ländern, die keinen allgegenwärtigen schnellen Internetdienst haben.

> [!NOTE]
> In den frühen Tagen war diese allgemeine Technik als {{Glossary("Asynchronous", "Asynchrone")}} JavaScript- und XML-({{Glossary("AJAX", "Ajax")}})-Technik bekannt, weil sie dazu neigte, XML-Daten anzufordern. Dies ist heute normalerweise nicht der Fall (man würde eher JSON anfordern), aber das Ergebnis ist immer noch dasselbe, und der Begriff "Ajax" wird oft verwendet, um die Technik zu beschreiben.

Um die Dinge noch weiter zu beschleunigen, speichern einige Websites auch Ressourcen und Daten auf dem Computer des Benutzers, wenn sie zum ersten Mal angefordert werden, was bedeutet, dass sie bei späteren Besuchen die lokalen Versionen verwenden, anstatt jedes Mal beim ersten Laden der Seite neue Kopien herunterzuladen. Der Inhalt wird nur vom Server neu geladen, wenn es aktualisiert wurde.

## Die Fetch API

Lassen Sie uns ein paar Beispiele der Fetch API durchgehen.

### Abrufen von Textinhalten

Für dieses Beispiel werden wir Daten aus einigen unterschiedlichen Textdateien anfordern und sie verwenden, um einen Inhaltsbereich zu füllen.

Diese Serie von Dateien wird als unsere gefälschte Datenbank fungieren; in einer realen Anwendung würden wir wahrscheinlich eher eine serverseitige Sprache wie PHP, Python oder Node verwenden, um unsere Daten aus einer Datenbank anzufordern. Hier jedoch wollen wir es einfach halten und uns auf den clientseitigen Teil konzentrieren.

Um dieses Beispiel zu starten, machen Sie eine lokale Kopie von [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) und den vier Textdateien — [verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt), und [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt) — in einem neuen Verzeichnis auf Ihrem Computer. In diesem Beispiel werden wir eine andere Strophe des Gedichts (das Sie vielleicht sogar erkennen) abrufen, wenn es im Dropdown-Menü ausgewählt ist.

Fügen Sie direkt innerhalb des `{{htmlelement("script")}}`-Elements den folgenden Code hinzu. Dieser speichert Verweise auf die `{{htmlelement("select")}}`- und `{{htmlelement("pre")}}`-Elemente und fügt einen Zuhörer zum `<select>`-Element hinzu, sodass bei Auswahl eines neuen Wertes der neue Wert als Parameter an die Funktion `updateDisplay()` übergeben wird.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Lassen Sie uns unsere `updateDisplay()`-Funktion definieren. Zuerst setzen wir das folgende unter Ihren vorherigen Codeblock — dies ist die leere Hülle der Funktion.

```js-nolint
function updateDisplay(verse) {

}
```

Wir beginnen unsere Funktion, indem wir eine relative URL konstruieren, die auf die Textdatei zeigt, die wir laden möchten, da wir sie später benötigen. Der Wert des `{{htmlelement("select")}}`-Elements zu einem beliebigen Zeitpunkt ist derselbe wie der Text innerhalb der ausgewählten `{{htmlelement("option")}}` (es sei denn, Sie geben einen anderen Wert in einem Wertattribut an) — also zum Beispiel "Verse 1". Die entsprechende Strophentextdatei ist "verse1.txt" und befindet sich im selben Verzeichnis wie die HTML-Datei, daher reicht nur der Dateiname.

Allerdings neigen Webserver dazu, zwischen Groß- und Kleinschreibung zu unterscheiden, und der Dateiname enthält keine Leerstelle. Um "Verse 1" in "verse1.txt" zu konvertieren, müssen wir das 'V' in Kleinbuchstaben umwandeln, die Leerstelle entfernen und ".txt" anhängen. Dies kann mit `{{jsxref("String.replace", "replace()")}}`, `{{jsxref("String.toLowerCase", "toLowerCase()")}}` und [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals) erfolgen. Fügen Sie die folgenden Zeilen innerhalb Ihrer `updateDisplay()`-Funktion hinzu:

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

Hier gibt es viel zu entpacken.

Erstens ist der Einstiegspunkt in die Fetch API eine globale Funktion namens [`fetch()`](/de/docs/Web/API/Window/fetch), die die URL als Parameter nimmt (sie nimmt einen weiteren optionalen Parameter für benutzerdefinierte Einstellungen an, aber das verwenden wir hier nicht).

Als nächstes ist `fetch()` eine asynchrone API, die ein `{{jsxref("Promise")}}` zurückgibt. Wenn Sie nicht wissen, was das ist, lesen Sie das Modul über [asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous), insbesondere den Artikel über [Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises) und kommen Sie dann hierher zurück. In diesem Artikel wird auch über die `fetch()`-API gesprochen!

Da `fetch()` ein Versprechen zurückgibt, geben wir eine Funktion in die `{{jsxref("Promise/then", "then()")}}`-Methode des zurückgegebenen Versprechens ein. Diese Methode wird aufgerufen, wenn die HTTP-Anfrage eine Antwort vom Server erhalten hat. Im Handler überprüfen wir, ob die Anfrage erfolgreich war, und werfen einen Fehler, wenn nicht. Andernfalls rufen wir [`response.text()`](/de/docs/Web/API/Response/text) auf, um den Antwortkörper als Text zu erhalten.

Es stellt sich heraus, dass `response.text()` ebenfalls asynchron ist, daher geben wir das von ihr zurückgegebene Versprechen zurück und geben eine Funktion in die `then()`-Methode dieses neuen Versprechens ein. Diese Funktion wird aufgerufen, wenn der Antworttext bereit ist, und innerhalb dieser Funktion aktualisieren wir unseren `<pre>`-Block mit dem Text.

Schließlich richten wir einen `{{jsxref("Promise/catch", "catch()")}}`-Handler am Ende der Kette ein, um alle Fehler zu erfassen, die in einer der asynchronen Funktionen, die wir aufgerufen haben, oder deren Handlern geworfen werden.

Ein Problem mit dem Beispiel in seinem derzeitigen Zustand ist, dass es beim ersten Laden keine der Gedichtzeilen zeigt. Um dies zu beheben, fügen Sie die folgenden zwei Zeilen am Ende Ihres Codes hinzu (knapp über dem schließenden `</script>`-Tag), um standardmäßig Vers 1 zu laden und sicherzustellen, dass das `{{htmlelement("select")}}`-Element immer den richtigen Wert anzeigt:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### Ihr Beispiel von einem Server bereitstellen

Moderne Browser führen keine HTTP-Anfragen aus, wenn Sie das Beispiel einfach von einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (mehr zu Websicherheit lesen Sie unter [Website security](/de/docs/Learn/Server-side/First_steps/Website_security)).

Um dies zu umgehen, müssen wir das Beispiel testen, indem wir es über einen lokalen Webserver ausführen. Um herauszufinden, wie man das macht, lesen Sie [unseren Leitfaden zum Einrichten eines lokalen Testservers](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

### Der Dosenladen

In diesem Beispiel haben wir eine Beispielseite namens The Can Store erstellt — ein fiktiver Supermarkt, der nur Konserven verkauft. Sie können dieses [Beispiel live auf GitHub sehen](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/) und [den Quellcode ansehen](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Eine gefälschte E-Commerce-Seite, die Suchoptionen in der linken Spalte und Produktsuchergebnisse in der rechten Spalte zeigt.](can-store.png)

Standardmäßig zeigt die Seite alle Produkte an, aber Sie können die Steuerelemente im Formular in der linken Spalte verwenden, um sie nach Kategorie oder Suchbegriff oder beides zu filtern.

Es gibt eine Menge komplizierten Code, der sich mit dem Filtern der Produkte nach Kategorie und Suchbegriffen befasst, Saiten so manipuliert, dass die Daten korrekt in der Benutzeroberfläche angezeigt werden usw. Wir werden nicht alle hier im Artikel durchgehen, aber Sie können umfassende Kommentare im Code finden (siehe [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

Wir werden jedoch den Fetch-Code erklären.

Der erste Block, der Fetch verwendet, ist am Anfang des JavaScripts zu finden:

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

Die `fetch()`-Funktion gibt ein Versprechen zurück. Wenn dies erfolgreich abgeschlossen wird, enthält die Funktion im ersten `.then()`-Block die vom Netzwerk zurückgegebenen `response`.

Innerhalb dieser Funktion:

- überprüfen wir, dass der Server keinen Fehler (wie [`404 Not Found`](/de/docs/Web/HTTP/Status/404)) zurückgegeben hat. Falls dies geschehen ist, werfen wir den Fehler.
- rufen wir `[`json()`](/de/docs/Web/API/Response/json)` auf die Antwort auf. Dies ruft die Daten als [JSON-Objekt](/de/docs/Learn/JavaScript/Objects/JSON) ab. Wir geben das von `response.json()` zurückgegebene Versprechen zurück.

Als nächstes übergeben wir eine Funktion in die `then()`-Methode dieses zurückgegebenen Versprechens. Diese Funktion wird ein Objekt enthalten, das die Antwortdaten als JSON enthält, das wir in die `initialize()`-Funktion übergeben. Diese Funktion startet den Prozess, alle Produkte in der Benutzeroberfläche anzuzeigen.

Um Fehler zu behandeln, verketten wir am Ende der Kette einen `.catch()`-Block. Dies läuft, wenn das Versprechen aus irgendeinem Grund fehlschlägt. Darin enthalten wir eine Funktion, die als Parameter ein übergebenes `err`-Objekt enthält. Dieses `err`-Objekt kann verwendet werden, um die Art des aufgetretenen Fehlers zu melden, in diesem Fall machen wir es mit einem einfachen `console.error()`.

Eine vollständige Website würde diesen Fehler jedoch auf benutzerfreundlichere Weise behandeln, indem sie eine Nachricht auf dem Bildschirm des Benutzers anzeigt und möglicherweise Optionen anbietet, um die Situation zu beheben, aber wir brauchen nicht mehr als ein einfaches `console.error()`.

Sie können den Fehlerfall selbst testen:

<!-- cSpell:ignore produc -->

1. Machen Sie eine lokale Kopie der Beispiel-Dateien.
2. Führen Sie den Code über einen Webserver aus (wie oben beschrieben, in [Ihr Beispiel von einem Server bereitstellen](#ihr_beispiel_von_einem_server_bereitstellen)).
3. Ändern Sie den Pfad zur abzurufenden Datei in etwas wie 'produc.json' (stellen Sie sicher, dass es falsch geschrieben ist).
4. Laden Sie nun die Indexdatei in Ihrem Browser (über `localhost:8000`) und schauen Sie in Ihre Entwicklerkonsole des Browsers. Sie werden eine Nachricht wie "Fetch problem: HTTP error: 404" sehen.

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

Dies funktioniert in ähnlicher Weise wie der vorherige, außer dass wir anstelle von [`json()`](/de/docs/Web/API/Response/json) [`blob()`](/de/docs/Web/API/Response/blob) verwenden. In diesem Fall möchten wir unsere Antwort als Bilddatei zurückgeben, und das Datenformat, das wir dafür verwenden, ist [Blob](/de/docs/Web/API/Blob) (der Begriff ist die Abkürzung für "Binary Large Object" und kann im Grunde verwendet werden, um große dateiähnliche Objekte wie Bilder oder Videodateien darzustellen).

Sobald wir unseren Blob erfolgreich erhalten haben, geben wir ihn in unsere `showProduct()`-Funktion ein, die ihn anzeigt.

## Die XMLHttpRequest API

Manchmal, insbesondere in älterem Code, sehen Sie eine andere API namens [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) (oft als "XHR" abgekürzt), die verwendet wird, um HTTP-Anfragen zu stellen. Diese war der Fetch API voraus, und war wirklich die erste API, die weit verbreitet zur Implementierung von AJAX verwendet wurde. Wir empfehlen, wenn möglich, Fetch zu verwenden: es ist eine einfachere API und hat mehr Funktionen als `XMLHttpRequest`. Wir werden kein Beispiel durchgehen, das `XMLHttpRequest` verwendet, aber wir werden Ihnen zeigen, wie die `XMLHttpRequest`-Version unserer ersten Dosenladen-Anfrage aussehen würde:

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

Es gibt fünf Schritte dazu:

1. Erstellen Sie ein neues `XMLHttpRequest`-Objekt.
2. Rufen Sie die [`open()`](/de/docs/Web/API/XMLHttpRequest/open)-Methode auf, um es zu initialisieren.
3. Fügen Sie einen Ereignislauscher zu seinem [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignis hinzu, das ausgelöst wird, wenn die Antwort erfolgreich abgeschlossen wurde. Im Zuhörer rufen wir `initialize()` mit den Daten auf.
4. Fügen Sie einen Ereignislauscher zu seinem [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)-Ereignis hinzu, das ausgelöst wird, wenn die Anfrage einen Fehler anzeigt.
5. Senden Sie die Anfrage.

Wir müssen das Ganze auch in den [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block einwickeln, um alle durch `open()` oder `send()` verursachten Fehler zu behandeln.

Hoffentlich denken Sie, dass die Fetch API eine Verbesserung gegenüber diesem Ansatz ist. Insbesondere sehen Sie, wie wir Fehler an zwei verschiedenen Stellen behandeln müssen.

## Zusammenfassung

Dieser Artikel zeigt, wie Sie mit der Fetch API beginnen können, um Daten vom Server abzurufen.

## Siehe auch

Es gibt jedoch viele verschiedene Themen, die in diesem Artikel diskutiert werden und die nur an der Oberfläche kratzen. Für viel mehr Details zu diesen Themen probieren Sie die folgenden Artikel:

- [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Working with JSON data](/de/docs/Learn/JavaScript/Objects/JSON)
- [An overview of HTTP](/de/docs/Web/HTTP/Overview)
- [Server-side website programming](/de/docs/Learn/Server-side)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
