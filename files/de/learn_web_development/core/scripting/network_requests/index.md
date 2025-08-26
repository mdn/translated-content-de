---
title: Netzwerk-Anfragen mit JavaScript
short-title: Network requests
slug: Learn_web_development/Core/Scripting/Network_requests
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}

Eine weitere sehr häufige Aufgabe in modernen Websites und Anwendungen ist das Erstellen von Netzwerk-Anfragen, um einzelne Datenobjekte vom Server abzurufen und Teile einer Webseite zu aktualisieren, ohne die gesamte Seite neu laden zu müssen. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites gehabt. In diesem Artikel erklären wir das Konzept und betrachten Technologien, die dies möglich machen: insbesondere die [Fetch API](/de/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Asynchrone Netzwerk-Anfragen, die mit Abstand der häufigste Anwendungsfall von asynchronem JavaScript im Web sind.</li>
          <li>Häufige Typen von Ressourcen, die aus dem Netzwerk abgerufen werden: JSON, Medienressourcen, Daten aus RESTful APIs.</li>
          <li>Wie man <code>fetch()</code> verwendet, um asynchrone Netzwerk-Anfragen zu implementieren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist das Problem hier?

Eine Webseite besteht aus einer HTML-Seite und (in der Regel) verschiedenen anderen Dateien, wie Stylesheets, Skripten und Bildern. Das grundlegende Modell des Seitenladens im Web ist, dass Ihr Browser eine oder mehrere HTTP-Anfragen an den Server für die Dateien stellt, die benötigt werden, um die Seite darzustellen, und der Server antwortet mit den angeforderten Dateien. Wenn Sie eine andere Seite besuchen, fordert der Browser die neuen Dateien an, und der Server antwortet mit ihnen.

![Traditionelles Seitenladen](traditional-loading.svg)

Dieses Modell funktioniert für viele Websites problemlos. Aber betrachten Sie eine Website, die sehr datengetrieben ist. Zum Beispiel eine Bibliotheks-Website wie die [Vancouver Public Library](https://www.vpl.ca/). Neben anderen Dingen könnte man eine solche Website als Benutzerschnittstelle zu einer Datenbank betrachten. Sie könnte es Ihnen ermöglichen, nach einem bestimmten Buchgenre zu suchen oder empfiehlt Ihnen Bücher, die Ihnen basierend auf zuvor entliehenen Büchern möglicherweise gefallen. Wenn Sie dies tun, muss die Seite mit dem neuen Satz von Büchern aktualisiert werden, die angezeigt werden sollen. Beachten Sie jedoch, dass der Großteil des Seiteninhalts – einschliesslich Elementen wie Kopfzeile, Seitenleiste und Fußzeile – gleich bleibt.

Das Problem mit dem traditionellen Modell hier ist, dass wir die gesamte Seite abrufen und laden müssten, selbst wenn wir nur einen Teil davon aktualisieren müssen. Dies ist ineffizient und kann zu einer schlechten Benutzererfahrung führen.

Stattdessen verwenden viele Websites JavaScript-APIs, um Daten vom Server anzufordern und den Seiteninhalt ohne Seitenneuladen zu aktualisieren. Wenn der Benutzer nach einem neuen Produkt sucht, fordert der Browser nur die Daten an, die benötigt werden, um die Seite zu aktualisieren – beispielsweise den neuen Satz von Büchern, die angezeigt werden sollen.

![Verwenden von fetch, um Seiten zu aktualisieren](fetch-update.svg)

Die Haupt-API hier ist die [Fetch API](/de/docs/Web/API/Fetch_API). Diese ermöglicht es JavaScript, das auf einer Seite ausgeführt wird, eine [HTTP](/de/docs/Web/HTTP)-Anfrage an einen Server zu stellen, um spezifische Ressourcen abzurufen. Wenn der Server sie bereitstellt, kann das JavaScript die Daten verwenden, um die Seite zu aktualisieren, typischerweise durch Nutzung der [DOM-Manipulations-APIs](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting). Die angeforderten Daten sind häufig [JSON](/de/docs/Learn_web_development/Core/Scripting/JSON), was ein gutes Format zum Übertragen von strukturierten Daten ist, aber sie können auch HTML oder nur Text sein.

Dies ist ein häufiges Muster für datengesteuerte Websites wie Amazon, YouTube, eBay und so weiter. Mit diesem Modell:

- Seitenaktualisierungen sind viel schneller und Sie müssen nicht auf ein Neuladen der Seite warten, was bedeutet, dass sich die Website schneller und reaktiver anfühlt.
- Weniger Daten werden bei jedem Update heruntergeladen, was weniger verschwendete Bandbreite bedeutet. Dies mag auf einem Desktop mit Breitbandverbindung kein großes Problem sein, aber es ist ein großes Problem auf Mobilgeräten und in Ländern, die keinen allgegenwärtigen schnellen Internetdienst haben.

> [!NOTE]
> In den frühen Tagen war diese allgemeine Technik als {{Glossary("Asynchronous", "Asynchrones")}} JavaScript und XML ({{Glossary("AJAX", "AJAX")}}) bekannt, weil sie tendenziell XML-Daten anforderte. Dies ist heutzutage normalerweise nicht der Fall (man würde eher JSON anfordern), aber das Ergebnis ist immer noch dasselbe und der Begriff "AJAX" wird oft noch zur Beschreibung der Technik verwendet.

Um die Dinge noch weiter zu beschleunigen, speichern einige Websites auch Assets und Daten auf dem Computer des Benutzers, wenn sie zum ersten Mal angefordert werden. Das bedeutet, dass sie bei nachfolgenden Besuchen die lokalen Versionen verwenden, anstatt bei jedem ersten Laden der Seite frische Kopien herunterzuladen. Die Inhalte werden nur dann vom Server neu geladen, wenn sie aktualisiert wurden.

## Die Fetch API

In diesem Abschnitt gehen wir einige Beispiele der Fetch API durch.

Die untenstehenden Beispiele haben eine gewisse Komplexität und zeigen, wie man die Fetch API in einigen realen Kontexten verwendet. Wenn Sie fetch noch nie verwendet haben, sollten Sie vielleicht mit Scrimba's [Erster Fetch](https://scrimba.com/frontend-path-c0j/~0lu?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktiven Tutorial beginnen, das eine sehr einfache Einführung bietet.

### Text-Inhalte abrufen

In diesem Beispiel fordern wir Daten aus einigen verschiedenen Textdateien an und verwenden sie, um einen Inhaltsbereich zu füllen.

Diese Serie von Dateien wird als unsere gefälschte Datenbank fungieren; in einer echten Anwendung würden wir eher eine serverseitige Sprache wie PHP, Python oder Node verwenden, um unsere Daten aus einer Datenbank anzufordern. Hier jedoch möchten wir es einfach halten und uns auf den clientseitigen Teil konzentrieren.

Um dieses Beispiel zu beginnen, machen Sie eine lokale Kopie von [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) und der vier Textdateien — [verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt) und [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt) — in einem neuen Verzeichnis auf Ihrem Computer. In diesem Beispiel holen wir einen anderen Vers des Gedichts (den Sie vielleicht gut kennen), wenn er im Dropdown-Menü ausgewählt wird.

Fügen Sie direkt im {{htmlelement("script")}}-Element den folgenden Code hinzu. Dieser speichert Referenzen auf die {{htmlelement("select")}}- und {{htmlelement("pre")}}-Elemente und fügt einen Listener zum `<select>`-Element hinzu, sodass, wenn der Benutzer einen neuen Wert auswählt, der neue Wert als Parameter an die Funktion `updateDisplay()` übergeben wird.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Lassen Sie uns nun unsere `updateDisplay()`-Funktion definieren. Setzen Sie zunächst das folgende unter Ihren vorherigen Codeblock — dies ist das leere Gerüst der Funktion.

```js-nolint
function updateDisplay(verse) {

}
```

Wir beginnen mit der Konstruktion einer relativen URL, die auf die Textdatei verweist, die wir laden möchten, da wir sie später benötigen werden. Der Wert des {{htmlelement("select")}}-Elements ist jederzeit derselbe wie der Text innerhalb der ausgewählten {{htmlelement("option")}} (es sei denn, Sie geben einen anderen Wert in einem value-Attribut an) — zum Beispiel "Verse 1". Die entsprechende Vers-Datei ist "verse1.txt" und befindet sich im gleichen Verzeichnis wie die HTML-Datei, daher reicht der Dateiname aus.

Allerdings sind Webserver dazu geneigt, zwischen Groß- und Kleinschreibung zu unterscheiden, und der Dateiname enthält kein Leerzeichen. Um "Verse 1" in "verse1.txt" zu konvertieren, müssen wir das 'V' in Kleinbuchstaben umwandeln, das Leerzeichen entfernen und ".txt" anhängen. Dies kann mit {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}} und einem [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) erledigt werden. Fügen Sie die folgenden Zeilen in Ihre `updateDisplay()`-Funktion ein:

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

Es gibt hier einiges zu entpacken.

Zunächst ist der Einstiegspunkt in die Fetch API eine globale Funktion namens [`fetch()`](/de/docs/Web/API/Window/fetch), die die URL als Parameter entgegennimmt (es gibt noch einen optionalen Parameter für benutzerdefinierte Einstellungen, den wir hier nicht verwenden).

Als nächstes ist `fetch()` eine asynchrone API, die ein {{jsxref("Promise")}} zurückgibt. Wenn Sie nicht wissen, was das ist, lesen Sie das Modul über [asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS), und insbesondere die Lektion über [Promisen](/de/docs/Learn_web_development/Extensions/Async_JS/Promises), und kommen Sie dann hierher zurück. Sie werden feststellen, dass dieser Artikel ebenfalls über die `fetch()` API spricht!

Da `fetch()` ein Versprechen zurückgibt, übergeben wir eine Funktion in die {{jsxref("Promise/then", "then()")}}-Methode des zurückgegebenen Versprechens. Diese Methode wird aufgerufen, wenn die HTTP-Anfrage eine Antwort vom Server erhalten hat. Im Handler prüfen wir, ob die Anfrage erfolgreich war, und werfen einen Fehler, wenn dies nicht der Fall war. Anderenfalls rufen wir [`response.text()`](/de/docs/Web/API/Response/text), um den Antwortkörper als Text zu erhalten.

Es stellt sich heraus, dass `response.text()` _ebenfalls_ asynchron ist, daher geben wir das Versprechen zurück, das es zurückgibt, und übergeben eine Funktion in die `then()`-Methode dieses neuen Versprechens. Diese Funktion wird aufgerufen, wenn der Antworttext bereit ist, und innerhalb davon aktualisieren wir unseren `<pre>`-Block mit dem Text.

Schließlich verknüpfen wir einen {{jsxref("Promise/catch", "catch()")}}-Handler am Ende, um alle Fehler abzufangen, die in einer der von uns aufgerufenen asynchronen Funktionen oder deren Handlern auftreten.

Ein Problem mit unserem Beispiel, so wie es sich derzeit darstellt, besteht darin, dass es keinen Teil des Gedichts anzeigt, wenn es zuerst geladen wird. Um dies zu beheben, fügen Sie die folgenden zwei Zeilen am Ende Ihres Codes hinzu (direkt über dem schließenden `</script>`-Tag), um standardmäßig Vers 1 zu laden und sicherzustellen, dass das {{htmlelement("select")}}-Element immer den richtigen Wert anzeigt:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### Testen Ihres Beispiels von einem Server aus

Moderne Browser werden keine HTTP-Anfragen ausführen, wenn Sie das Beispiel nur aus einer lokalen Datei ausführen. Dies liegt an sicherheitsrelevanten Einschränkungen (für mehr über Web-Sicherheit, lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).

Um dies zu umgehen, müssen wir das Beispiel durch einen lokalen Webserver testen. Um herauszufinden, wie man das macht, siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

### Der Can Store

In diesem Beispiel haben wir eine Beispielseite namens The Can Store erstellt — es ist ein fiktiver Supermarkt, der nur Konserven verkauft. Sie können dieses [Beispiel live auf GitHub sehen](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/), und [sehen Sie den Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Eine gefälschte E-Commerce-Website, die Suchoptionen in der linken Spalte und Produktsuchergebnisse in der rechten Spalte zeigt.](can-store.png)

Standardmäßig zeigt die Seite alle Produkte an, aber Sie können die Formularelemente in der linken Spalte verwenden, um sie nach Kategorie, Suchbegriff oder beidem zu filtern.

Es gibt ziemlich viel komplexen Code, der sich mit dem Filtern der Produkte nach Kategorie und Suchbegriffen beschäftigt, Zeichenfolgen manípuliert, so dass die Daten korrekt in der Benutzeroberfläche angezeigt werden, usw. Wir werden nicht alles davon im Artikel besprechen, aber Sie finden ausführliche Kommentare im Code (siehe [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

Wir werden jedoch den Fetch-Code erklären.

Der erste Block, der Fetch verwendet, ist am Anfang des JavaScript zu finden:

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

Die `fetch()`-Funktion gibt ein Versprechen zurück. Wenn dies erfolgreich abgeschlossen wird, enthält die Funktion innerhalb des ersten `.then()`-Blocks die vom Netzwerk zurückgegebene `response`.

Innerhalb dieser Funktion:

- prüfen wir, dass der Server keinen Fehler zurückgegeben hat (wie etwa [`404 Not Found`](/de/docs/Web/HTTP/Reference/Status/404)). Wenn doch, werfen wir den Fehler.
- rufen wir [`json()`](/de/docs/Web/API/Response/json) in der Antwort auf. Dies wird die Daten als [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) abrufen. Wir geben das von `response.json()` zurückgegebene Versprechen zurück.

Als nächstes übergeben wir eine Funktion in die `then()`-Methode dieses zurückgegebenen Versprechens. Diese Funktion wird ein Objekt mit den Antwortdaten als JSON erhalten, das wir in die `initialize()`-Funktion übergeben. Es ist `initialize()`, das den Prozess des Anzeigen aller Produkte in der Benutzeroberfläche startet.

Um Fehler zu behandeln, verknüpfen wir einen `.catch()`-Block ans Ende der Kette. Dies wird ausgeführt, wenn das Versprechen aus irgendeinem Grund fehlschlägt. Innerhalb davon verwenden wir ein als Parameter übergebenes `err`-Objekt. Dieses `err`-Objekt kann verwendet werden, um die Art des aufgetretenen Fehlers zu melden. In diesem Fall tun wir das mit einem einfachen `console.error()`.

Eine vollständige Website würde diesen Fehler jedoch eleganter handhaben, indem eine Meldung auf dem Bildschirm des Benutzers angezeigt wird und möglicherweise Optionen angeboten werden, um die Situation zu beheben, aber wir brauchen nichts weiter als ein einfaches `console.error()`.

Sie können die Fehlerschaltfläche selbst testen:

1. Machen Sie eine lokale Kopie der Beispieldateien.
2. Führen Sie den Code durch einen Webserver aus (wie oben beschrieben, in [Testen Ihres Beispiels von einem Server aus](#testen_ihres_beispiels_von_einem_server_aus)).
3. Ändern Sie den Pfad zur abgerufenen Datei auf etwas wie 'produc.json' (stellen Sie sicher, dass es falsch geschrieben ist).
4. Laden Sie nun die Indexdatei in Ihrem Browser (über `localhost:8000`) und schauen Sie in die Entwicklerkonsole Ihres Browsers. Sie werden eine Nachricht ähnlich wie "Fetch-Problem: HTTP-Fehler: 404" sehen.

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

Dies funktioniert ähnlich wie das vorherige, außer dass wir statt [`json()`](/de/docs/Web/API/Response/json) nun [`blob()`](/de/docs/Web/API/Response/blob) verwenden. In diesem Fall möchten wir unsere Antwort als Bilddatei zurückgeben, und das Datenformat, das wir dafür verwenden, ist [Blob](/de/docs/Web/API/Blob) (der Begriff ist eine Abkürzung für "Binary Large Object" und kann im Wesentlichen verwendet werden, um große dateiartige Objekte darzustellen, wie zum Beispiel Bilder oder Videodateien).

Sobald wir unseren Blob erfolgreich erhalten haben, übergeben wir ihn an unsere `showProduct()`-Funktion, die ihn anzeigt.

## Die XMLHttpRequest API

Manchmal, besonders in älterem Code, sehen Sie eine andere API namens [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), die gebraucht wird, um HTTP-Anfragen zu stellen. Diese ging dem Fetch voraus und war wirklich die erste weitverbreitete API, um AJAX zu implementieren. Wir empfehlen, Fetch zu verwenden, wenn Sie können: es ist eine einfachere API und hat mehr Funktionen als `XMLHttpRequest`. Wir werden kein Beispiel durchgehen, das `XMLHttpRequest` verwendet, aber wir zeigen Ihnen, wie die `XMLHttpRequest`-Version unserer ersten Can Store-Anfrage aussehen würde:

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
2. Aufruf seiner [`open()`](/de/docs/Web/API/XMLHttpRequest/open)-Methode, um es zu initialisieren.
3. Hinzufügen eines Event-Listeners zu seinem [`load`](/de/docs/Web/API/XMLHttpRequestEventTarget/load_event)-Event, das ausgelöst wird, wenn die Antwort erfolgreich abgeschlossen ist. Im Listener rufen wir `initialize()` mit den Daten auf.
4. Hinzufügen eines Event-Listeners zu seinem [`error`](/de/docs/Web/API/XMLHttpRequestEventTarget/error)-Event, welches ausgelöst wird, wenn die Anfrage auf einen Fehler stößt.
5. Senden der Anfrage.

Wir müssen das Ganze auch in den [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block einbetten, um Fehler zu behandeln, die von `open()` oder `send()` geworfen werden.

Hoffentlich denken Sie, dass die Fetch API eine Verbesserung gegenüber diesem ist. Besonders sehen Sie, wie wir Fehler an zwei verschiedenen Stellen behandeln müssen.

## Zusammenfassung

Dieser Artikel zeigt, wie man anfängt, mit Fetch Daten vom Server zu holen.

## Siehe auch

Es gibt jedoch viele verschiedene Themen, die in diesem Artikel diskutiert wurden, die nur wirklich an der Oberfläche kratzen. Für viel mehr Details zu diesen Themen probieren Sie die folgenden Artikel:

- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Arbeiten mit JSON-Daten](/de/docs/Learn_web_development/Core/Scripting/JSON)
- [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview)
- [Serverseitige Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}
