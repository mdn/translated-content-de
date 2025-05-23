---
title: Netzwerk-Anfragen mit JavaScript
short-title: Network requests
slug: Learn_web_development/Core/Scripting/Network_requests
l10n:
  sourceCommit: 0915a5e602d475bd1a1a57d905f0bac1b7ed57b8
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}

Eine weitere sehr häufige Aufgabe auf modernen Websites und in Anwendungen ist das Senden von Netzwerk-Anfragen, um einzelne Datenobjekte vom Server abzurufen und Abschnitte einer Webseite zu aktualisieren, ohne die gesamte Seite neu laden zu müssen. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites gehabt. In diesem Artikel erklären wir das Konzept und betrachten die Technologien, die dies ermöglichen, insbesondere die [Fetch API](/de/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit JavaScript-Grundlagen, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Asynchrone Netzwerk-Anfragen, welche bei weitem der häufigste Anwendungsfall für asynchrones JavaScript im Web sind.</li>
          <li>Gängige Typen von Ressourcen, die aus dem Netzwerk abgerufen werden: JSON, Medienressourcen, Daten von RESTful APIs.</li>
          <li>Wie man <code>fetch()</code> verwendet, um asynchrone Netzwerk-Anfragen zu implementieren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist das Problem hier?

Eine Webseite besteht aus einer HTML-Seite und (in der Regel) verschiedenen anderen Dateien wie Stylesheets, Skripten und Bildern. Das grundlegende Modell des Seitenladens im Web ist, dass Ihr Browser eine oder mehrere HTTP-Anfragen an den Server für die zum Anzeigen der Seite benötigten Dateien stellt, und der Server mit den angeforderten Dateien antwortet. Wenn Sie eine andere Seite besuchen, fordert der Browser die neuen Dateien an, und der Server antwortet mit ihnen.

![Traditionelles Seitenladen](traditional-loading.svg)

Dieses Modell funktioniert bei vielen Seiten einwandfrei. Aber betrachten Sie eine sehr datengetriebene Website. Zum Beispiel eine Bibliotheks-Website wie die [Vancouver Public Library](https://www.vpl.ca/). Unter anderem können Sie sich eine solche Seite als Benutzeroberfläche zu einer Datenbank vorstellen. Sie könnte es Ihnen ermöglichen, nach einem bestimmten Buchgenre zu suchen oder Empfehlungen für Bücher anzuzeigen, die Ihnen gefallen könnten, basierend auf Büchern, die Sie zuvor ausgeliehen haben. Wenn Sie dies tun, muss die Seite mit dem neuen Satz von Büchern aktualisiert werden, die angezeigt werden sollen. Beachten Sie jedoch, dass der Großteil des Seiteninhalts – einschließlich Elemente wie Seitenkopf, Seitenleiste und Fußzeile – gleich bleibt.

Das Problem mit dem traditionellen Modell hier ist, dass wir die gesamte Seite abrufen und laden müssten, auch wenn wir nur einen Teil davon aktualisieren müssen. Dies ist ineffizient und kann zu einer schlechten Benutzererfahrung führen.

Anstatt des traditionellen Modells verwenden viele Websites JavaScript-APIs, um Daten vom Server anzufordern und den Seiteninhalt zu aktualisieren, ohne dass eine Seite geladen werden muss. Wenn der Benutzer also nach einem neuen Produkt sucht, fordert der Browser nur die Daten an, die benötigt werden, um die Seite zu aktualisieren – zum Beispiel den Satz neuer Bücher, die angezeigt werden sollen.

![Verwendung von Fetch zum Aktualisieren von Seiten](fetch-update.svg)

Die Haupt-API hier ist die [Fetch API](/de/docs/Web/API/Fetch_API). Diese ermöglicht es JavaScript, das in einer Seite läuft, eine [HTTP](/de/docs/Web/HTTP)-Anfrage an einen Server zu stellen, um bestimmte Ressourcen abzurufen. Wenn der Server sie bereitstellt, kann JavaScript die Daten verwenden, um die Seite zu aktualisieren, typischerweise durch Verwendung von [DOM-Manipulations-APIs](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting). Die angeforderten Daten sind oft [JSON](/de/docs/Learn_web_development/Core/Scripting/JSON), das ein gutes Format für die Übertragung strukturierter Daten ist, können aber auch HTML oder nur Text sein.

Dies ist ein gängiges Muster für datengetriebene Seiten wie Amazon, YouTube, eBay usw. Mit diesem Modell:

- Seitenaktualisierungen sind viel schneller und Sie müssen nicht darauf warten, dass die Seite aktualisiert wird, was bedeutet, dass die Seite schneller und reaktionsschneller wirkt.
- Weniger Daten werden bei jedem Update heruntergeladen, was weniger verschwendete Bandbreite bedeutet. Dies mag auf einem Desktop mit Breitbandverbindung kein großes Problem sein, aber es ist ein großes Problem auf mobilen Geräten und in Ländern, die keinen allgegenwärtigen schnellen Internetdienst haben.

> [!NOTE]
> In den frühen Tagen wurde diese allgemeine Technik als {{Glossary("Asynchronous", "Asynchrone")}} JavaScript und XML ({{Glossary("AJAX", "AJAX")}}) bekannt, da sie dazu neigte, XML-Daten anzufordern. Dies ist heutzutage normalerweise nicht der Fall (Sie würden eher JSON anfordern), aber das Ergebnis ist immer noch dasselbe, und der Begriff "AJAX" wird immer noch häufig verwendet, um die Technik zu beschreiben.

Um die Dinge noch weiter zu beschleunigen, speichern einige Seiten auch Assets und Daten auf dem Computer des Benutzers, wenn sie zuerst angefordert werden, was bedeutet, dass sie bei späteren Besuchen die lokalen Versionen verwenden, anstatt jedes Mal, wenn die Seite zuerst geladen wird, frische Kopien herunterzuladen. Der Inhalt wird nur dann vom Server neu geladen, wenn er aktualisiert wurde.

## Die Fetch API

In diesem Abschnitt werden wir ein paar Beispiele der Fetch API durchgehen.

Die Beispiele unten sind von einer gewissen Komplexität und zeigen, wie man die Fetch API in einigen realen Kontexten verwendet. Wenn Sie noch nie Fetch verwendet haben, möchten Sie vielleicht mit Scrimbas [Erste Fetch](https://scrimba.com/frontend-path-c0j/~0lu?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktivem Tutorial beginnen, das einen sehr einfachen Einführungsspaziergang bietet.

### Abrufen von Textinhalten

Für dieses Beispiel werden wir Daten aus ein paar verschiedenen Textdateien anfordern und sie verwenden, um einen Inhaltsbereich zu füllen.

Diese Dateireihe wird als unsere gefälschte Datenbank fungieren; in einer echten Anwendung würden wir wahrscheinlich eher eine serverseitige Sprache wie PHP, Python oder Node verwenden, um unsere Daten aus einer Datenbank anzufordern. Hier wollen wir es jedoch einfach halten und uns auf den clientseitigen Teil konzentrieren.

Um dieses Beispiel zu beginnen, machen Sie eine lokale Kopie von [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) und den vier Textdateien – [verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt), und [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt) – in einem neuen Verzeichnis auf Ihrem Computer. In diesem Beispiel werden wir bei Auswahl im Dropdown-Menü einen anderen Vers des Gedichts (den Sie wahrscheinlich erkennen werden) abrufen.

Fügen Sie direkt innerhalb des {{htmlelement("script")}}-Elements den folgenden Code hinzu. Dieser speichert Referenzen zu den {{htmlelement("select")}}- und {{htmlelement("pre")}}-Elementen und fügt einen Listener zum `<select>`-Element hinzu, sodass beim Auswählen eines neuen Wertes durch den Benutzer der neue Wert der Funktion `updateDisplay()` als Parameter übergeben wird.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Lassen Sie uns unsere `updateDisplay()`-Funktion definieren. Zuerst setzen Sie folgendes unter Ihren vorherigen Codeblock — dies ist die leere Hülle der Funktion.

```js-nolint
function updateDisplay(verse) {

}
```

Wir beginnen unsere Funktion, indem wir eine relative URL erstellen, die auf die Textdatei zeigt, die wir später laden wollen. Der Wert des {{htmlelement("select")}}-Elements zu jedem Zeitpunkt ist derselbe wie der Text innerhalb der ausgewählten {{htmlelement("option")}} (außer Sie spezifizieren einen anderen Wert in einem Wert-Attribut) — zum Beispiel "Vers 1". Die entsprechende Vers-Textdatei ist "verse1.txt" und befindet sich im gleichen Verzeichnis wie die HTML-Datei, daher reicht der Dateiname allein.

Webserver sind jedoch häufig case-sensitiv, und im Dateinamen gibt es keinen Leerraum. Um "Vers 1" in "verse1.txt" zu konvertieren, müssen wir das 'V' in Kleinbuchstaben umwandeln, den Leerraum entfernen und ".txt" am Ende hinzufügen. Dies kann mit {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}} und [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) durchgeführt werden. Fügen Sie die folgenden Zeilen innerhalb Ihrer `updateDisplay()`-Funktion hinzu:

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

Hier gibt es viel zu verarbeiten.

Zuerst, der Einstiegspunkt der Fetch API ist eine globale Funktion namens [`fetch()`](/de/docs/Web/API/Window/fetch), die die URL als Parameter nimmt (sie nimmt einen weiteren optionalen Parameter für benutzerdefinierte Einstellungen, aber den verwenden wir hier nicht).

Weiterhin ist `fetch()` eine asynchrone API, die ein {{jsxref("Promise")}} zurückgibt. Wenn Sie nicht wissen, was das ist, lesen Sie das Modul über [asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS), und besonders die Lektion über [Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises), dann kommen Sie hierher zurück. Sie werden feststellen, dass dieser Artikel auch über die `fetch()`-API spricht!

Da `fetch()` ein Promise zurückgibt, übergeben wir eine Funktion an die {{jsxref("Promise/then", "then()")}}-Methode des zurückgegebenen Promises. Diese Methode wird aufgerufen, wenn die HTTP-Anfrage eine Antwort vom Server erhalten hat. Im Handler überprüfen wir, ob die Anfrage erfolgreich war, und werfen einen Fehler, wenn dies nicht der Fall ist. Ansonsten rufen wir [`response.text()`](/de/docs/Web/API/Response/text) auf, um den Antworttext als Text zu erhalten.

Es stellt sich heraus, dass `response.text()` ebenfalls asynchron ist, daher geben wir das Promise zurück, das es zurückgibt, und übergeben eine Funktion an die `then()`-Methode dieses neuen Promises. Diese Funktion wird aufgerufen, wenn der Antworttext bereit ist, und innerhalb dieser werden wir unseren `<pre>`-Block mit dem Text aktualisieren.

Schließlich hängen wir einen {{jsxref("Promise/catch", "catch()")}}-Handler ans Ende, um Fehler in einer der asynchronen Funktionen oder ihren Handlern abzufangen.

Ein Problem mit dem Beispiel in seinem jetzigen Zustand ist, dass es keinen Teil des Gedichts anzeigt, wenn es zuerst geladen wird. Um dies zu korrigieren, fügen Sie die folgenden zwei Zeilen am Ende Ihres Codes hinzu (direkt über dem abschließenden `</script>`-Tag), um Vers 1 standardmäßig zu laden und sicherzustellen, dass das {{htmlelement("select")}}-Element immer den richtigen Wert anzeigt:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### Ihr Beispiel von einem Server aus bereitstellen

Moderne Browser führen keine HTTP-Anfragen aus, wenn Sie das Beispiel einfach aus einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (mehr über Web-Sicherheit erfahren Sie in [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).

Um dies zu umgehen, müssen wir das Beispiel testen, indem wir es über einen lokalen Webserver ausführen. Wie das geht, erfahren Sie unter [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

### Der Dosenladen

In diesem Beispiel haben wir eine Beispielseite namens Der Dosenladen erstellt - es ist ein fiktiver Supermarkt, der nur Dosenwaren verkauft. Sie können dieses [Beispiel live auf GitHub sehen](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/), und [den Quellcode ansehen](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Eine gefälschte E-Commerce-Seite, die Suchoptionen in der linken Spalte und Produktsuchergebnisse in der rechten Spalte zeigt.](can-store.png)

Standardmäßig zeigt die Seite alle Produkte an, aber Sie können die Formularsteuerungen in der linken Spalte verwenden, um sie nach Kategorie oder Suchbegriff oder beidem zu filtern.

Es gibt ziemlich viel komplexen Code, der sich mit dem Filtern der Produkte nach Kategorie und Suchbegriffen beschäftigt, Zeichenfolgen so manipuliert, dass die Daten korrekt in der Benutzeroberfläche angezeigt werden usw. Wir werden nicht alles davon im Artikel besprechen, aber Sie können umfangreiche Kommentare im Code finden (siehe [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

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

Die `fetch()`-Funktion gibt ein Promise zurück. Wenn dies erfolgreich abgeschlossen ist, enthält die Funktion innerhalb des ersten `.then()`-Blocks die vom Netzwerk zurückgegebene `response`.

Innerhalb dieser Funktion:

- überprüfen wir, ob der Server keinen Fehler zurückgegeben hat (wie [`404 Not Found`](/de/docs/Web/HTTP/Reference/Status/404)). Wenn dies der Fall ist, werfen wir den Fehler.
- rufen wir [`json()`](/de/docs/Web/API/Response/json) auf die Response auf. Dies wird die Daten als [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) abrufen. Wir geben das Promise zurück, das von `response.json()` zurückgegeben wird.

Als nächstes übergeben wir eine Funktion an die `then()`-Methode dieses zurückgegebenen Promises. Diese Funktion erhält ein Objekt, das die Antwortdaten als JSON enthält, und wir übergeben es der `initialize()`-Funktion. Es ist `initialize()`, das den Prozess des Anzeigens aller Produkte in der Benutzeroberfläche startet.

Um Fehler zu behandeln, hängen wir einen `.catch()`-Block ans Ende der Kette an. Dieser läuft, wenn das Promise aus irgendeinem Grund fehlschlägt. Innerhalb davon enthalten wir eine Funktion, die als Parameter ein `err`-Objekt erhält. Dieses `err`-Objekt kann verwendet werden, um die Art des aufgetretenen Fehlers zu melden; in diesem Fall tun wir dies mit einem einfachen `console.error()`.

Eine vollständige Website würde diesen Fehler jedoch eleganter behandeln, indem sie eine Nachricht auf dem Bildschirm des Benutzers anzeigt und möglicherweise Optionen anbietet, um die Situation zu beheben, aber wir brauchen hier nicht mehr als ein einfaches `console.error()`.

Sie können den Fehlerfall selbst testen:

<!-- cSpell:ignore produc -->

1. Machen Sie eine lokale Kopie der Beispieldateien.
2. Führen Sie den Code über einen Webserver aus (wie oben beschrieben, in [Ihr Beispiel von einem Server aus bereitstellen](#ihr_beispiel_von_einem_server_aus_bereitstellen)).
3. Ändern Sie den Pfad zur abgerufenen Datei auf etwas wie 'produc.json' (stellen Sie sicher, dass es falsch geschrieben ist).
4. Laden Sie nun die Indexdatei in Ihrem Browser (via `localhost:8000`) und schauen Sie in Ihre Entwicklerkonsole des Browsers. Sie sehen eine ähnliche Meldung wie "Fetch problem: HTTP error: 404".

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

Dies funktioniert in etwa genauso wie der vorherige, außer dass wir anstelle von [`json()`](/de/docs/Web/API/Response/json) [`blob()`](/de/docs/Web/API/Response/blob) verwenden. In diesem Fall möchten wir unsere Antwort als Bilddatei zurückgeben, und das Datenformat, das wir dafür verwenden, ist [Blob](/de/docs/Web/API/Blob) (der Begriff ist eine Abkürzung für "Binary Large Object" und kann im Grunde verwendet werden, um große Dateiförmige Objekte darzustellen, wie z. B. Bilder oder Videodateien).

Sobald wir erfolgreich unseren Blob erhalten haben, übergeben wir ihn an unsere `showProduct()`-Funktion, die ihn anzeigt.

## Die XMLHttpRequest API

Manchmal, besonders in älterem Code, sehen Sie eine andere API namens [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) (häufig abgekürzt als "XHR"), die verwendet wird, um HTTP-Anfragen zu machen. Diese kam vor Fetch, und war wirklich die erste API, die weitverbreitet verwendet wurde, um AJAX zu implementieren. Wir empfehlen, wenn möglich Fetch zu verwenden: Es ist eine einfachere API und hat mehr Funktionen als `XMLHttpRequest`. Wir werden kein Beispiel verwenden, das `XMLHttpRequest` verwendet, aber wir werden Ihnen zeigen, wie die `XMLHttpRequest`-Version unserer ersten Dosenladen-Anfrage aussehen würde:

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
2. Aufrufen seiner [`open()`](/de/docs/Web/API/XMLHttpRequest/open)-Methode, um es zu initialisieren.
3. Hinzufügen eines Ereignislisteners zu seinem [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignis, das ausgelöst wird, wenn die Antwort erfolgreich abgeschlossen wurde. Im Listener rufen wir `initialize()` mit den Daten auf.
4. Hinzufügen eines Ereignislisteners zu seinem [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)-Ereignis, das ausgelöst wird, wenn die Anfrage auf einen Fehler stößt.
5. Senden der Anfrage.

Wir müssen das Ganze auch im [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block einhüllen, um alle Fehler zu handhaben, die durch `open()` oder `send()` geworfen werden.

Hoffentlich denken Sie, dass die Fetch API eine Verbesserung gegenüber diesem ist. Besonders beachten Sie, wie wir Fehler an zwei verschiedenen Stellen handhaben müssen.

## Zusammenfassung

Dieser Artikel zeigt, wie man beginnt, mit Fetch zu arbeiten, um Daten vom Server abzurufen.

## Siehe auch

Es gibt jedoch viele verschiedene Themen, die in diesem Artikel diskutiert werden, die nur wirklich an der Oberfläche kratzen. Für viel mehr Details zu diesen Themen probieren Sie die folgenden Artikel:

- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Arbeiten mit JSON-Daten](/de/docs/Learn_web_development/Core/Scripting/JSON)
- [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview)
- [Server-seitige Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}
