---
title: Abrufen von Daten vom Server
slug: Learn/JavaScript/Client-side_web_APIs/Fetching_data
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Eine weitere sehr häufige Aufgabe auf modernen Websites und in Anwendungen besteht darin, einzelne Datenobjekte vom Server abzurufen, um Abschnitte einer Webseite zu aktualisieren, ohne eine komplett neue Seite laden zu müssen. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites gehabt. In diesem Artikel erklären wir das Konzept und betrachten Technologien, die dies ermöglichen: insbesondere die [Fetch API](/de/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von JavaScript (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks">Bausteine</a>,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">Grundlagen der Client-seitigen APIs</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Daten vom Server abruft und diese verwendet, um den
        Inhalt einer Webseite zu aktualisieren.
      </td>
    </tr>
  </tbody>
</table>

## Was ist das Problem hier?

Eine Webseite besteht aus einer HTML-Seite und (in der Regel) verschiedenen anderen Dateien wie Stylesheets, Skripten und Bildern. Das grundlegende Modell des Seitenladens im Web besteht darin, dass Ihr Browser eine oder mehrere HTTP-Anfragen an den Server für die Dateien stellt, die zum Anzeigen der Seite benötigt werden, und der Server antwortet mit den angeforderten Dateien. Wenn Sie eine andere Seite besuchen, fordert der Browser die neuen Dateien an, und der Server antwortet ihnen.

![Traditionelles Seitenladen](traditional-loading.svg)

Dieses Modell funktioniert für viele Websites recht gut. Aber betrachten Sie eine Website, die sehr datengetrieben ist. Zum Beispiel eine Bibliothekswebsite wie die [Vancouver Public Library](https://www.vpl.ca/). Unter anderem könnte man eine solche Seite als Benutzeroberfläche zu einer Datenbank betrachten. Sie könnte es Ihnen ermöglichen, nach einem bestimmten Genre von Büchern zu suchen oder Ihnen Empfehlungen für Bücher anzuzeigen, die Ihnen gefallen könnten, basierend auf Büchern, die Sie zuvor ausgeliehen haben. Wenn Sie das tun, muss die Seite mit dem neuen Satz von Büchern aktualisiert werden, die angezeigt werden sollen. Beachten Sie jedoch, dass der größte Teil des Seiteninhalts – einschließlich Elementen wie der Seitenkopfzeile, der Seitenleiste und der Fußzeile – gleich bleibt.

Das Problem im traditionellen Modell besteht darin, dass wir die gesamte Seite abrufen und laden müssten, selbst wenn wir nur einen Teil davon aktualisieren müssen. Dies ist ineffizient und kann zu einer schlechten Benutzererfahrung führen.

Stattdessen verwenden viele Websites JavaScript-APIs, um Daten vom Server anzufordern und den Seiteninhalt ohne Seitenneuladen zu aktualisieren. Wenn also der Benutzer nach einem neuen Produkt sucht, fordert der Browser nur die Daten an, die zur Aktualisierung der Seite benötigt werden – zum Beispiel das Set neuer Bücher, das angezeigt werden soll.

![Verwendung von Fetch zur Aktualisierung von Seiten](fetch-update.svg)

Die Haupt-API hier ist die [Fetch API](/de/docs/Web/API/Fetch_API). Diese ermöglicht es JavaScript, das auf einer Seite ausgeführt wird, eine [HTTP](/de/docs/Web/HTTP)-Anfrage an einen Server zu stellen, um bestimmte Ressourcen abzurufen. Wenn der Server sie bereitstellt, kann das JavaScript die Daten verwenden, um die Seite zu aktualisieren, typischerweise durch Verwendung von [DOM-Manipulations-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents). Die angeforderten Daten sind häufig [JSON](/de/docs/Learn/JavaScript/Objects/JSON), was ein gutes Format für die Übertragung strukturierter Daten ist, können aber auch HTML oder nur Text sein.

Dies ist ein häufiges Muster für datengetriebene Websites wie Amazon, YouTube, eBay und so weiter. Mit diesem Modell:

- Aktualisierungen der Seite sind viel schneller und Sie müssen nicht auf das Neuladen der Seite warten, was bedeutet, dass sich die Website schneller und reaktionsfähiger anfühlt.
- Es wird weniger Datenvolumen bei jeder Aktualisierung heruntergeladen, was zu weniger verschwendeter Bandbreite führt. Dies mag auf einem Desktop mit Breitbandverbindung kein großes Problem sein, ist jedoch ein großes Problem auf mobilen Geräten und in Ländern, die keinen allgegenwärtigen schnellen Internetdienst haben.

> [!NOTE]
> In den frühen Tagen war diese allgemeine Technik als {{Glossary("Asynchronous", "Asynchrones")}} JavaScript und XML ({{Glossary("AJAX", "AJAX")}}) bekannt, da sie dazu neigte, XML-Daten anzufordern. Normalerweise ist das heutzutage nicht der Fall (es ist wahrscheinlicher, dass Sie JSON anfordern), aber das Ergebnis ist immer noch dasselbe und der Begriff "AJAX" wird oft zur Beschreibung der Technik verwendet.

Um die Dinge noch weiter zu beschleunigen, speichern einige Websites auch Assets und Daten auf dem Computer des Benutzers, wenn sie erstmals angefordert werden. Dies bedeutet, dass bei nachfolgenden Besuchen die lokalen Versionen verwendet werden, anstatt jedes Mal beim ersten Laden der Seite frische Kopien herunterzuladen. Der Inhalt wird nur von dem Server neu geladen, wenn er aktualisiert wurde.

## Die Fetch API

Lassen Sie uns einige Beispiele der Fetch API durchgehen.

### Textinhalt abrufen

In diesem Beispiel werden wir Daten aus einigen verschiedenen Textdateien anfordern und diese verwenden, um einen Inhaltsbereich zu füllen.

Diese Serie von Dateien wird als unsere gefälschte Datenbank fungieren; in einer echten Anwendung würden wir eher eine serverseitige Sprache wie PHP, Python oder Node verwenden, um unsere Daten aus einer Datenbank anzufordern. In diesem Fall möchten wir es jedoch einfach halten und uns auf den Client-seitigen Teil konzentrieren.

Um dieses Beispiel zu beginnen, machen Sie eine lokale Kopie von [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) und den vier Textdateien — [verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt) und [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt) — in einem neuen Verzeichnis auf Ihrem Computer. In diesem Beispiel werden wir einen anderen Vers des Gedichts abrufen (den Sie möglicherweise erkennen werden), wenn er im Dropdown-Menü ausgewählt wird.

Direkt innerhalb des {{htmlelement("script")}}-Elements fügen Sie den folgenden Code hinzu. Dieser speichert Referenzen zu den {{htmlelement("select")}}- und {{htmlelement("pre")}}-Elementen und fügt dem `<select>`-Element einen Listener hinzu. Wenn der Benutzer einen neuen Wert auswählt, wird der neue Wert als Parameter an die Funktion `updateDisplay()` übergeben.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Definieren wir unsere `updateDisplay()`-Funktion. Fügen Sie zunächst das folgende unter Ihrem vorherigen Code-Block ein — dies ist die leere Hülle der Funktion.

```js-nolint
function updateDisplay(verse) {

}
```

Wir beginnen unsere Funktion, indem wir eine relative URL konstruieren, die auf die Textdatei zeigt, die wir laden möchten, da wir sie später benötigen werden. Der Wert des {{htmlelement("select")}}-Elements zu jedem Zeitpunkt ist derselbe wie der Text im ausgewählten {{htmlelement("option")}} (es sei denn, Sie geben einen anderen Wert in einem Wertattribut an) — also zum Beispiel "Vers 1". Die entsprechende Vers-Textdatei ist "verse1.txt" und befindet sich im selben Verzeichnis wie die HTML-Datei, daher reicht der Dateiname allein.

Webserver sind jedoch tendenziell groß- und kleinschreibungssensitiv, und der Dateiname enthält keinen Leerraum. Um "Vers 1" in "verse1.txt" zu konvertieren, müssen wir das 'V' in Kleinbuchstaben umwandeln, den Leerraum entfernen und ".txt" hinten anfügen. Dies kann mit {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}} und [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) erfolgen. Fügen Sie die folgenden Zeilen in Ihrer `updateDisplay()`-Funktion hinzu:

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

Hier gibt es eine Menge zu entpacken.

Zuerst ist der Einstiegspunkt in die Fetch API eine globale Funktion namens [`fetch()`](/de/docs/Web/API/Window/fetch), die die URL als Parameter nimmt (sie nimmt einen weiteren optionalen Parameter für benutzerdefinierte Einstellungen, den wir hier nicht verwenden).

Als nächstes ist `fetch()` eine asynchrone API, die ein {{jsxref("Promise")}} zurückgibt. Wenn Sie nicht wissen, was das ist, lesen Sie das Modul über [asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous) und insbesondere den Artikel über [Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises), und kommen Sie dann hierher zurück. Sie werden feststellen, dass dieser Artikel auch über die `fetch()` API spricht!

Da `fetch()` ein Versprechen zurückgibt, übergeben wir eine Funktion in die {{jsxref("Promise/then", "then()")}}-Methode des zurückgegebenen Versprechens. Diese Methode wird aufgerufen, wenn die HTTP-Anfrage eine Antwort vom Server erhalten hat. Im Handler prüfen wir, ob die Anfrage erfolgreich war und werfen einen Fehler, wenn dies nicht der Fall war. Andernfalls rufen wir [`response.text()`](/de/docs/Web/API/Response/text) auf, um den Antwortkörper als Text zu erhalten.

Es stellt sich heraus, dass `response.text()` _auch_ asynchron ist, also geben wir das Versprechen zurück, das es zurückgibt, und übergeben eine Funktion in die `then()`-Methode dieses neuen Versprechens. Diese Funktion wird aufgerufen, wenn der Antworttext bereit ist, und darin aktualisieren wir unseren `<pre>`-Block mit dem Text.

Schließlich ketten wir einen {{jsxref("Promise/catch", "catch()")}}-Handler am Ende, um alle Fehler abzufangen, die in einer der asynchronen Funktionen, die wir aufgerufen haben, oder ihren Handlern geworfen werden.

Ein Problem mit dem Beispiel, wie es jetzt ist, ist, dass es keinen der Verse anzeigt, wenn es zuerst geladen wird. Um dies zu beheben, fügen Sie die folgenden zwei Zeilen am Ende Ihres Codes hinzu (direkt über dem schließenden `</script>`-Tag), um Vers 1 standardmäßig zu laden und sicherzustellen, dass das {{htmlelement("select")}}-Element immer den richtigen Wert anzeigt:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### Ihr Beispiel von einem Server aus bereitstellen

Moderne Browser führen keine HTTP-Anfragen aus, wenn Sie das Beispiel einfach von einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (mehr über Web-Sicherheit erfahren Sie unter [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)).

Um dies zu umgehen, müssen wir das Beispiel testen, indem wir es über einen lokalen Webserver ausführen. Um herauszufinden, wie das geht, lesen Sie [unseren Leitfaden zum Einrichten eines lokalen Testservers](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

### Der Dosenladen

In diesem Beispiel haben wir eine Beispielseite namens The Can Store erstellt — es ist ein fiktiver Supermarkt, der nur Konserven verkauft. Sie können dieses [Beispiel live auf GitHub sehen](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/) und [den Quellcode sehen](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Eine gefälschte E-Commerce-Site, die Suchoptionen in der linken Spalte und Suchergebnisse für Produkte in der rechten Spalte zeigt.](can-store.png)

Standardmäßig zeigt die Seite alle Produkte an, aber Sie können die Formularkontrollen in der linken Spalte verwenden, um sie nach Kategorie oder Suchbegriff oder beidem zu filtern.

Es gibt eine Menge komplexen Code, der sich mit der Filterung der Produkte nach Kategorie und Suchbegriffen befasst, Zeichenketten manipuliert, sodass die Daten korrekt in der Benutzeroberfläche angezeigt werden usw. Wir werden nicht alles in diesem Artikel besprechen, Sie finden jedoch ausführliche Kommentare im Code (siehe [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

Wir werden jedoch den Fetch-Code erklären.

Der erste Block, der Fetch verwendet, befindet sich am Anfang des JavaScript:

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

Die `fetch()`-Funktion gibt ein Versprechen zurück. Wenn dies erfolgreich abgeschlossen wird, enthält die Funktion im ersten `.then()`-Block die vom Netzwerk zurückgegebene `response`.

Innerhalb dieser Funktion:

- prüfen wir, dass der Server keinen Fehler zurückgegeben hat (wie z.B. [`404 Not Found`](/de/docs/Web/HTTP/Status/404)). Wenn ja, werfen wir den Fehler.
- rufen wir [`json()`](/de/docs/Web/API/Response/json) auf die Antwort auf. Dies wird die Daten als [JSON-Objekt](/de/docs/Learn/JavaScript/Objects/JSON) abrufen. Wir geben das Versprechen zurück, das von `response.json()` zurückgegeben wird.

Als nächstes geben wir eine Funktion in die `then()`-Methode dieses zurückgegebenen Versprechens ein. Diese Funktion wird ein Objekt erhalten, das die Antwortdaten als JSON enthält, welches wir in die `initialize()`-Funktion übergeben. Diese Funktion startet den Prozess, alle Produkte in der Benutzeroberfläche anzuzeigen.

Um Fehler zu behandeln, ketten wir am Ende der Kette einen `.catch()`-Block an. Dieser wird ausgeführt, wenn das Versprechen aus irgendeinem Grund fehlschlägt. Darin fügen wir eine Funktion ein, die als Parameter ein `err`-Objekt übergeben bekommt. Dieses `err`-Objekt kann verwendet werden, um die Art des aufgetretenen Fehlers zu melden, in diesem Fall machen wir das mit einem einfachen `console.error()`.

Eine vollständige Website würde diesen Fehler jedoch auf benutzerfreundliche Weise behandeln, indem eine Nachricht auf dem Bildschirm des Benutzers angezeigt und möglicherweise Optionen zur Behebung der Situation angeboten würden, aber wir benötigen nichts anderes als ein einfaches `console.error()`.

Sie können die Fehlersituation selbst testen:

<!-- cSpell:ignore produc -->

1. Machen Sie eine lokale Kopie der Beispieldateien.
2. Führen Sie den Code über einen Webserver aus (wie oben beschrieben unter [Ihr Beispiel von einem Server aus bereitstellen](#ihr_beispiel_von_einem_server_aus_bereitstellen)).
3. Ändern Sie den Pfad zur Datei, die abgerufen wird, in etwas wie 'produc.json' (stellen Sie sicher, dass es falsch geschrieben ist).
4. Laden Sie nun die Indexdatei in Ihrem Browser (über `localhost:8000`) und schauen Sie in Ihre Browser-Entwicklerkonsole. Sie sehen eine Meldung ähnlich wie "Fetch problem: HTTP error: 404".

Der zweite Fetch-Block findet sich in der `fetchBlob()`-Funktion:

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

Dies funktioniert ähnlich wie der vorherige, außer dass wir statt [`json()`](/de/docs/Web/API/Response/json), [`blob()`](/de/docs/Web/API/Response/blob) verwenden. In diesem Fall möchten wir unsere Antwort als Bilddatei zurückgeben, und das von uns verwendete Datenformat dafür ist [Blob](/de/docs/Web/API/Blob) (der Begriff ist eine Abkürzung für "Binary Large Object" und kann im Grunde verwendet werden, um große dateiähnliche Objekte, wie Bilder oder Videodateien, darzustellen).

Sobald wir unseren Blob erfolgreich erhalten haben, übergeben wir ihn an unsere `showProduct()`-Funktion, die ihn anzeigt.

## Die XMLHttpRequest API

Gelegentlich, besonders in älterem Code, sehen Sie eine andere API namens [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) (oft abgekürzt als "XHR"), die verwendet wird, um HTTP-Anfragen zu machen. Diese war der Fetch-API voraus und war tatsächlich die erste API, die breit genutzt wurde, um AJAX zu implementieren. Wir empfehlen Ihnen, Fetch zu verwenden, wenn Sie können: es ist eine einfachere API und hat mehr Funktionen als `XMLHttpRequest`. Wir werden kein Beispiel durchgehen, das `XMLHttpRequest` verwendet, aber wir zeigen Ihnen, wie die `XMLHttpRequest`-Version unserer ersten Anfrage im Dosenladen aussehen würde:

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

1. Erstellen eines neuen `XMLHttpRequest`-Objekts.
2. Aufrufen der [`open()`](/de/docs/Web/API/XMLHttpRequest/open)-Methode, um es zu initialisieren.
3. Einfügen eines Ereignislisteners für dessen [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignis, das ausgelöst wird, wenn die Antwort erfolgreich abgeschlossen wurde. Im Listener rufen wir `initialize()` mit den Daten auf.
4. Einfügen eines Ereignislisteners für dessen [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)-Ereignis, das ausgelöst wird, wenn die Anfrage auf einen Fehler stößt.
5. Senden der Anfrage.

Wir müssen auch das Ganze in den [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block einwickeln, um Fehler zu behandeln, die von `open()` oder `send()` geworfen werden könnten.

Hoffentlich denken Sie, dass die Fetch API eine Verbesserung hiervon ist. Besonders sehen Sie, wie wir Fehler an zwei verschiedenen Stellen behandeln müssen.

## Zusammenfassung

Dieser Artikel zeigt, wie Sie beginnen können, mit Fetch Daten vom Server abzurufen.

## Siehe auch

Es gibt jedoch viele verschiedene Themen, die in diesem Artikel besprochen werden, die nur an der Oberfläche kratzen. Für viel mehr Details zu diesen Themen versuchen Sie die folgenden Artikel:

- [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Working with JSON data](/de/docs/Learn/JavaScript/Objects/JSON)
- [An overview of HTTP](/de/docs/Web/HTTP/Overview)
- [Server-side website programming](/de/docs/Learn/Server-side)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
