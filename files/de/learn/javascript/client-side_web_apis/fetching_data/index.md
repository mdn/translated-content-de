---
title: Abrufen von Daten vom Server
slug: Learn/JavaScript/Client-side_web_APIs/Fetching_data
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Eine weitere sehr häufige Aufgabe in modernen Websites und Anwendungen ist das Abrufen individueller Datenobjekte vom Server, um Abschnitte einer Webseite zu aktualisieren, ohne eine komplette neue Seite laden zu müssen. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Webseiten. Daher werden wir in diesem Artikel das Konzept erklären und die Technologien betrachten, die dies ermöglichen: insbesondere die [Fetch API](/de/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks">Bausteine</a>,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">Grundlagen von Client-seitigen APIs</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Daten vom Server abruft und verwendet, um den Inhalt einer Webseite zu aktualisieren.
      </td>
    </tr>
  </tbody>
</table>

## Was ist hier das Problem?

Eine Webseite besteht aus einer HTML-Seite und (normalerweise) verschiedenen anderen Dateien, wie Stylesheets, Skripten und Bildern. Das grundlegende Modell des Seitenladens im Web ist, dass Ihr Browser eine oder mehrere HTTP-Anfragen an den Server für die Dateien stellt, die benötigt werden, um die Seite anzuzeigen, und der Server antwortet mit den angeforderten Dateien. Wenn Sie eine andere Seite besuchen, fordert der Browser die neuen Dateien an, und der Server antwortet mit ihnen.

![Traditionelles Seitenladen](traditional-loading.svg)

Dieses Modell funktioniert für viele Seiten gut. Aber betrachten Sie eine sehr datengesteuerte Website. Zum Beispiel eine Bibliothekswebsite wie die [Vancouver Public Library](https://www.vpl.ca/). Eine Seite wie diese könnte als Benutzeroberfläche für eine Datenbank gesehen werden. Sie könnte Ihnen erlauben, nach einem bestimmten Buchgenre zu suchen oder Ihnen Empfehlungen für Bücher zu geben, die Ihnen gefallen könnten, basierend auf Büchern, die Sie zuvor ausgeliehen haben. Wenn Sie dies tun, muss die Seite mit der neuen Buchauswahl aktualisiert werden. Beachten Sie jedoch, dass der Großteil des Seiteninhalts – einschließlich Elementen wie dem Seitenkopf, der Seitenleiste und dem Fußbereich – gleich bleibt.

Das Problem mit dem traditionellen Modell ist, dass wir die gesamte Seite neu laden müssten, auch wenn wir nur einen Teil von ihr aktualisieren müssen. Dies ist ineffizient und kann zu einer schlechten Benutzererfahrung führen.

Stattdessen verwenden viele Websites JavaScript-APIs, um Daten vom Server anzufordern und den Seiteninhalt ohne Seitenladevorgang zu aktualisieren. Wenn der Benutzer nach einem neuen Produkt sucht, fordert der Browser nur die Daten an, die benötigt werden, um die Seite zu aktualisieren – zum Beispiel die neuen Bücher, die angezeigt werden sollen.

![Fetch verwenden, um Seiten zu aktualisieren](fetch-update.svg)

Die Haupt-API hier ist die [Fetch API](/de/docs/Web/API/Fetch_API). Diese ermöglicht es JavaScript, das auf einer Seite ausgeführt wird, eine [HTTP](/de/docs/Web/HTTP)-Anfrage an einen Server zu stellen, um spezifische Ressourcen abzurufen. Wenn der Server diese bereitstellt, kann das JavaScript die Daten verwenden, um die Seite zu aktualisieren, normalerweise durch die Verwendung von [DOM Manipulations-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents). Die angeforderten Daten sind oft im [JSON](/de/docs/Learn/JavaScript/Objects/JSON)-Format, das gut für die Übertragung strukturierter Daten geeignet ist, können aber auch HTML oder nur Text sein.

Dies ist ein häufiges Muster für datengesteuerte Seiten wie Amazon, YouTube, eBay und so weiter. Mit diesem Modell:

- Seitenaktualisierungen sind viel schneller und Sie müssen nicht auf ein Neuladen der Seite warten, was bedeutet, dass die Seite schneller und reaktionsfähiger wirkt.
- Weniger Daten werden bei jedem Update heruntergeladen, was weniger verschwendete Bandbreite bedeutet. Dies mag auf einem Desktop mit Breitbandverbindung nicht so wichtig sein, ist aber ein großes Problem auf mobilen Geräten und in Ländern ohne durchgängig schnellen Internetdienst.

> [!NOTE]
> In den frühen Tagen war diese allgemeine Technik als [Asynchronous](/de/docs/Glossary/Asynchronous) JavaScript and XML ([Ajax](/de/docs/Glossary/AJAX)) bekannt, weil sie dazu neigte, XML-Daten anzufordern. Heute ist das normalerweise nicht mehr der Fall (Sie würden eher JSON anfordern), aber das Ergebnis ist immer noch dasselbe und der Begriff „Ajax“ wird oft verwendet, um die Technik zu beschreiben.

Um die Dinge noch weiter zu beschleunigen, speichern einige Seiten auch Assets und Daten auf dem Computer des Benutzers, wenn sie das erste Mal angefordert werden, was bedeutet, dass bei nachfolgenden Besuchen die lokalen Versionen verwendet werden, anstatt jedes Mal beim ersten Laden der Seite frische Kopien herunterzuladen. Der Inhalt wird nur dann vom Server neu geladen, wenn er aktualisiert wurde.

## Die Fetch API

Lassen Sie uns einige Beispiele für die Fetch API durchgehen.

### Abrufen von Textinhalten

Für dieses Beispiel werden wir Daten aus einigen verschiedenen Textdateien anfordern und sie verwenden, um einen Inhaltsbereich zu füllen.

Diese Reihe von Dateien wird als unsere gefälschte Datenbank fungieren; in einer echten Anwendung würden wir eher eine serverseitige Sprache wie PHP, Python oder Node verwenden, um unsere Daten aus einer Datenbank anzufordern. Hier möchten wir es jedoch einfach halten und uns auf den clientseitigen Teil konzentrieren.

Um dieses Beispiel zu beginnen, erstellen Sie eine lokale Kopie von [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) und den vier Textdateien — [verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt) und [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt) — in einem neuen Verzeichnis auf Ihrem Computer. In diesem Beispiel werden wir einen anderen Vers des Gedichts (den Sie wahrscheinlich erkennen werden) abrufen, wenn er im Dropdown-Menü ausgewählt wird.

Fügen Sie direkt im {{htmlelement("script")}}-Element den folgenden Code hinzu. Dieser speichert Referenzen auf die {{htmlelement("select")}}- und {{htmlelement("pre")}}-Elemente und fügt einen Listener zum `<select>`-Element hinzu, sodass beim Auswählen eines neuen Werts durch den Benutzer der neue Wert als Parameter an die Funktion `updateDisplay()` übergeben wird.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Definieren wir unsere `updateDisplay()`-Funktion. Zuerst fügen Sie das Folgende unter Ihrem vorherigen Codeblock hinzu — dies ist das leere Gerüst der Funktion.

```js-nolint
function updateDisplay(verse) {

}
```

Wir beginnen unsere Funktion, indem wir eine relative URL konstruieren, die auf die Textdatei zeigt, die wir laden möchten, da wir sie später benötigen. Der Wert des {{htmlelement("select")}}-Elements ist zu jedem Zeitpunkt derselbe wie der Text im ausgewählten {{htmlelement("option")}} (es sei denn, Sie geben einen anderen Wert in einem Wertattribut an) — also zum Beispiel "Vers 1". Die entsprechende Vers-Textdatei ist "verse1.txt" und befindet sich im selben Verzeichnis wie die HTML-Datei; daher genügt der Dateiname.

Webserver sind jedoch oft case-sensitiv, und der Dateiname enthält kein Leerzeichen. Um "Vers 1" in "verse1.txt" zu konvertieren, müssen wir das 'V' in Kleinbuchstaben umwandeln, das Leerzeichen entfernen und ".txt" am Ende hinzufügen. Dies kann mit {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}} und [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) erfolgen. Fügen Sie die folgenden Zeilen in Ihre `updateDisplay()`-Funktion ein:

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

Hier gibt es einiges zu entwirren.

Zuerst: Der Einstiegspunkt zur Fetch API ist eine globale Funktion namens [`fetch()`](/de/docs/Web/API/Window/fetch), die die URL als Parameter nimmt (sie nimmt einen weiteren optionalen Parameter für benutzerdefinierte Einstellungen, aber den verwenden wir hier nicht).

Als nächstes: `fetch()` ist eine asynchrone API, die ein {{jsxref("Promise")}} zurückgibt. Wenn Sie nicht wissen, was das ist, lesen Sie das Modul zu [asynchronem JavaScript](/de/docs/Learn/JavaScript/Asynchronous), und insbesondere den Artikel zu [Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises), und kommen Sie dann hierher zurück. In diesem Artikel wird auch die `fetch()`-API behandelt!

Da `fetch()` ein Promise zurückgibt, übergeben wir eine Funktion an die {{jsxref("Promise/then", "then()")}}-Methode des zurückgegebenen Promise. Diese Methode wird aufgerufen, wenn die HTTP-Anfrage eine Antwort vom Server erhalten hat. In der Funktion prüfen wir, ob die Anfrage erfolgreich war, und werfen einen Fehler, wenn dies nicht der Fall ist. Anderenfalls rufen wir [`response.text()`](/de/docs/Web/API/Response/text) auf, um den Antwortkörper als Text zu erhalten.

Es stellt sich heraus, dass `response.text()` _ebenfalls_ asynchron ist. Daher geben wir das Promise, das zurückgegeben wird, zurück und übergeben eine Funktion an die `then()`-Methode dieses neuen Promise. Diese Funktion wird aufgerufen, wenn der Antworttext bereit ist, und in ihr aktualisieren wir unseren `<pre>`-Block mit dem Text.

Schließlich verketten wir einen {{jsxref("Promise/catch", "catch()")}}-Handler am Ende, um Fehler zu fangen, die in einer der asynchronen Funktionen, die wir aufgerufen haben, oder deren Handler aufgetreten sind.

Ein Problem mit dem Beispiel in seinem jetzigen Zustand ist, dass es beim ersten Laden keinen der Verse anzeigt. Um dies zu beheben, fügen Sie die folgenden zwei Zeilen am Ende Ihres Codes (direkt über dem schließenden `</script>`-Tag) hinzu, um standardmäßig Vers 1 zu laden und sicherzustellen, dass das `<select>`-Element immer den richtigen Wert anzeigt:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### Ihr Beispiel von einem Server bereitstellen

Moderne Browser führen keine HTTP-Anfragen aus, wenn Sie das Beispiel nur von einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (für mehr Informationen über Web-Sicherheit lesen Sie [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)).

Um dies zu umgehen, müssen wir das Beispiel testen, indem wir es über einen lokalen Webserver laufen lassen. Um herauszufinden, wie das geht, lesen Sie [unseren Leitfaden zum Einrichten eines lokalen Testservers](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

### Der Dosenladen

In diesem Beispiel haben wir eine Beispielseite namens The Can Store erstellt — es ist ein fiktiver Supermarkt, der nur Dosenwaren verkauft. Sie können dieses [Beispiel live auf GitHub finden](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/), und [den Quellcode ansehen](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Eine gefälschte E-Commerce-Seite mit Suchoptionen in der linken Spalte und Produktsuchergebnissen in der rechten Spalte.](can-store.png)

Standardmäßig zeigt die Seite alle Produkte an, aber Sie können die Steuerelemente in der linken Spalte verwenden, um sie nach Kategorie oder Suchbegriff oder beidem zu filtern.

Es gibt einen ziemlich komplexen Code, der sich mit dem Filtern der Produkte nach Kategorie und Suchbegriffen, dem Manipulieren von Strings, damit die Daten korrekt in der Benutzeroberfläche angezeigt werden, usw. beschäftigt. Wir werden nicht alles in dem Artikel besprechen, aber Sie finden ausführliche Kommentare im Code (siehe [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

Wir werden jedoch den Fetch-Code erklären.

Der erste Block, der Fetch verwendet, kann am Anfang des JavaScript gefunden werden:

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

Die `fetch()`-Funktion gibt ein Promise zurück. Wenn dieses erfolgreich abgeschlossen wird, enthält die Funktion im ersten `.then()`-Block die `response`, die vom Netzwerk zurückgegeben wird.

In dieser Funktion:

- prüfen wir, ob der Server keinen Fehler zurückgegeben hat (wie beispielsweise [`404 Not Found`](/de/docs/Web/HTTP/Status/404)). Falls doch, werfen wir den Fehler.
- rufen wir [`json()`](/de/docs/Web/API/Response/json) auf der Antwort auf. Dies wird die Daten als [JSON-Objekt](/de/docs/Learn/JavaScript/Objects/JSON) abrufen. Wir geben das Promise zurück, das von `response.json()` zurückgegeben wird.

Als nächstes übergeben wir eine Funktion an die `then()`-Methode dieses zurückgegebenen Promise. Diese Funktion wird ein Objekt enthalten, das die Antwortdaten als JSON enthält, das wir an die `initialize()`-Funktion übergeben. Diese Funktion startet den Prozess der Anzeige aller Produkte in der Benutzeroberfläche.

Um Fehler zu behandeln, hängen wir einen `.catch()`-Block an das Ende der Kette. Dieser wird ausgeführt, wenn das Promise aus irgendeinem Grund fehlschlägt. Darin enthalten wir eine Funktion, die als Parameter ein `err`-Objekt übergeben bekommt. Dieses `err`-Objekt kann verwendet werden, um die Art des Fehlers zu melden, der aufgetreten ist. In diesem Fall tun wir dies mit einem einfachen `console.error()`.

Eine komplette Website würde diesen Fehler jedoch eleganter behandeln, indem sie möglicherweise eine Nachricht auf dem Bildschirm des Benutzers anzeigt und Optionen zur Behebung der Situation anbietet, aber wir benötigen nicht mehr als ein einfaches `console.error()`.

Sie können den Fehlerfall selbst testen:

1. Erstellen Sie eine lokale Kopie der Beispieldateien.
2. Führen Sie den Code durch einen Webserver aus (wie oben beschrieben, im Abschnitt [Ihr Beispiel von einem Server bereitstellen](#ihr_beispiel_von_einem_server_bereitstellen)).
3. Ändern Sie den Pfad zur abgerufenen Datei in etwas wie 'produc.json' (stellen Sie sicher, dass es falsch geschrieben ist).
4. Laden Sie nun die Indexdatei in Ihrem Browser (über `localhost:8000`) und schauen Sie in der Entwicklerkonsole Ihres Browsers nach. Sie werden eine Nachricht ähnlich "Fetch-Problem: HTTP-Fehler: 404" sehen.

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

Dieser funktioniert im Wesentlichen auf die gleiche Weise wie der vorherige, außer dass wir anstelle von [`json()`](/de/docs/Web/API/Response/json) [`blob()`](/de/docs/Web/API/Response/blob) verwenden. In diesem Fall möchten wir unsere Antwort als Bilddatei zurückgeben, und das Datenformat, das wir dafür verwenden, ist [Blob](/de/docs/Web/API/Blob) (der Begriff ist eine Abkürzung für "Binary Large Object" und kann im Wesentlichen verwendet werden, um große dateiähnliche Objekte darzustellen, wie Bild- oder Videodateien).

Sobald wir unseren Blob erfolgreich empfangen haben, reichen wir ihn an unsere `showProduct()`-Funktion weiter, die ihn anzeigt.

## Die XMLHttpRequest API

Manchmal, insbesondere in älterem Code, sehen Sie eine andere API namens [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) (oft als "XHR" abgekürzt), die verwendet wird, um HTTP-Anfragen zu machen. Diese existierte vor Fetch und war wirklich die erste weit verbreitete API, um AJAX zu implementieren. Wir empfehlen, Fetch zu verwenden, wenn Sie können: Es ist eine einfachere API und hat mehr Funktionen als `XMLHttpRequest`. Wir werden kein Beispiel durcharbeiten, das `XMLHttpRequest` verwendet, aber wir zeigen Ihnen, wie die `XMLHttpRequest`-Version unserer ersten Abfrage im Dosenladen aussehen würde:

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

Es gibt fünf Phasen dazu:

1. Erstellen eines neuen `XMLHttpRequest`-Objekts.
2. Aufrufen seiner [`open()`](/de/docs/Web/API/XMLHttpRequest/open)-Methode, um es zu initialisieren.
3. Hinzufügen eines Ereignis-Listeners für sein [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignis, das ausgelöst wird, wenn die Antwort erfolgreich abgeschlossen wurde. Im Listener rufen wir `initialize()` mit den Daten auf.
4. Hinzufügen eines Ereignis-Listeners für sein [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)-Ereignis, das ausgelöst wird, wenn bei der Anfrage ein Fehler auftritt.
5. Senden der Anfrage.

Wir müssen auch das Ganze im [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block einwickeln, um mit Fehlern umzugehen, die von `open()` oder `send()` geworfen werden können.

Hoffentlich denken Sie, dass die Fetch API eine Verbesserung gegenüber diesem Ansatz darstellt. Insbesondere sehen Sie, wie wir Fehler an zwei verschiedenen Stellen handhaben müssen.

## Zusammenfassung

Dieser Artikel zeigt, wie man beginnt, mit Fetch zu arbeiten, um Daten vom Server abzurufen.

## Siehe auch

Es gibt jedoch viele verschiedene Themen, die in diesem Artikel diskutiert werden und die nur die Oberfläche kratzt. Für viele weitere Details zu diesen Themen versuchen Sie die folgenden Artikel:

- [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Mit JSON-Daten arbeiten](/de/docs/Learn/JavaScript/Objects/JSON)
- [Ein Überblick über HTTP](/de/docs/Web/HTTP/Overview)
- [Server-seitige Website-Programmierung](/de/docs/Learn/Server-side)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
