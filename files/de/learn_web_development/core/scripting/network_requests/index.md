---
title: Netzwerkanfragen mit JavaScript
slug: Learn_web_development/Core/Scripting/Network_requests
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}

Eine weitere sehr häufige Aufgabe in modernen Websites und Anwendungen ist das Stellen von Netzwerkanfragen, um einzelne Datenobjekte vom Server abzurufen und damit Abschnitte einer Webseite zu aktualisieren, ohne die gesamte Seite neu laden zu müssen. Dieses scheinbar kleine Detail hat einen enormen Einfluss auf die Leistung und das Verhalten von Websites gehabt, daher werden wir in diesem Artikel das Konzept erklären und die Technologien betrachten, die es möglich machen: insbesondere die [Fetch API](/de/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Asynchrone Netzwerkanfragen, das ist mit Abstand der häufigste Anwendungsfall für asynchrones JavaScript im Web.</li>
          <li>Häufige Typen von Ressourcen, die aus dem Netzwerk abgerufen werden: JSON, Medienressourcen, Daten von RESTful-APIs.</li>
          <li>Wie man <code>fetch()</code> verwendet, um asynchrone Netzwerkanfragen zu implementieren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist hier das Problem?

Eine Webseite besteht aus einer HTML-Seite und (meistens) verschiedenen anderen Dateien, wie Stylesheets, Skripten und Bildern. Das grundlegende Lade-Modell von Seiten im Web ist, dass Ihr Browser eine oder mehrere HTTP-Anfragen an den Server stellt, um die Dateien abzurufen, die für die Anzeige der Seite benötigt werden, und der Server antwortet mit den angeforderten Dateien. Wenn Sie eine andere Seite besuchen, fordert der Browser die neuen Dateien an und der Server antwortet mit ihnen.

![Traditionelles Laden von Seiten](traditional-loading.svg)

Dieses Modell funktioniert für viele Websites einwandfrei. Aber denken Sie an eine Website, die sehr datengetrieben ist. Zum Beispiel eine Bibliothekswebsite wie die [Vancouver Public Library](https://www.vpl.ca/). Unter anderem könnte man eine solche Seite als Benutzeroberfläche einer Datenbank betrachten. Sie könnte es Ihnen ermöglichen, nach einem bestimmten Buchgenre zu suchen oder Ihnen basierend auf Büchern, die Sie zuvor ausgeliehen haben, Buchempfehlungen zu geben. Wenn Sie dies tun, muss die Seite mit der neuen Menge an Büchern aktualisiert werden, die angezeigt werden sollen. Beachten Sie jedoch, dass der größte Teil des Seiteninhalts - darunter Elemente wie Kopfzeile, Seitenleiste und Fußzeile - gleich bleibt.

Das Problem beim traditionellen Modell ist hier, dass wir die gesamte Seite abrufen und laden müssten, obwohl wir nur einen Teil davon aktualisieren müssen. Dies ist ineffizient und kann zu einer schlechten Benutzererfahrung führen.

Stattdessen verwenden viele Websites JavaScript-APIs, um Daten vom Server anzufordern und den Seiteninhalt zu aktualisieren, ohne die Seite neu zu laden. Wenn der Benutzer zum Beispiel nach einem neuen Produkt sucht, fordert der Browser nur die Daten an, die benötigt werden, um die Seite zu aktualisieren – zum Beispiel das Set der neuen Bücher, die angezeigt werden sollen.

![Verwendung von fetch, um Seiten zu aktualisieren](fetch-update.svg)

Die Haupt-API hier ist die [Fetch API](/de/docs/Web/API/Fetch_API). Diese ermöglicht es, dass JavaScript, das auf einer Seite läuft, eine [HTTP](/de/docs/Web/HTTP)-Anfrage an einen Server stellt, um bestimmte Ressourcen abzurufen. Sobald der Server diese bereitstellt, kann das JavaScript die Daten verwenden, um die Seite zu aktualisieren, typischerweise indem es [DOM-Manipulations-APIs](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) verwendet. Die angeforderten Daten sind oft im Format [JSON](/de/docs/Learn_web_development/Core/Scripting/JSON), welches gut geeignet ist, um strukturierte Daten zu übertragen, können aber auch HTML oder einfacher Text sein.

Dies ist ein häufiges Muster für datengesteuerte Websites wie Amazon, YouTube, eBay usw. Mit diesem Modell:

- Seitenaktualisierungen sind viel schneller und Sie müssen nicht auf das Neuladen der Seite warten, was bedeutet, dass sich die Website schneller und reaktionsschneller anfühlt.
- Weniger Daten werden bei jedem Update heruntergeladen, was weniger verschwendete Bandbreite bedeutet. Das mag auf einem Desktop mit Breitbandverbindung kein großes Problem sein, ist aber ein großes Thema auf mobilen Geräten und in Ländern ohne weit verbreiteten schnellen Internetzugang.

> [!NOTE]
> In den Anfangstagen war diese allgemeine Technik bekannt als {{Glossary("Asynchronous", "Asynchrones")}} JavaScript und XML ({{Glossary("AJAX", "AJAX")}}), weil sie dazu neigte, XML-Daten anzufordern. Dies ist heutzutage normalerweise nicht der Fall (eher würde man JSON anfordern), aber das Ergebnis ist dasselbe, und der Begriff "AJAX" wird oft noch verwendet, um die Technik zu beschreiben.

Um die Dinge noch weiter zu beschleunigen, speichern einige Seiten auch Assets und Daten auf dem Computer des Nutzers, wenn sie zum ersten Mal angefordert werden, sodass sie bei späteren Besuchen die lokalen Versionen anstelle des Herunterladens neuer Kopien verwenden, jedes Mal, wenn die Seite erstmals geladen wird. Der Inhalt wird nur dann vom Server nachgeladen, wenn er aktualisiert wurde.

## Die Fetch API

Lassen Sie uns einige Beispiele der Fetch API durchgehen.

### Abrufen von Textinhalten

In diesem Beispiel werden wir Daten aus einigen verschiedenen Textdateien anfordern und verwenden sie, um einen Inhaltsbereich auszufüllen.

Diese Reihe von Dateien wird als unsere gefälschte Datenbank fungieren; in einer echten Anwendung würden wir eher eine serverseitige Sprache wie PHP, Python oder Node verwenden, um unsere Daten aus einer Datenbank abzufragen. Hier wollen wir es jedoch einfach halten und uns auf den clientseitigen Teil konzentrieren.

Um mit diesem Beispiel zu beginnen, machen Sie eine lokale Kopie von [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) und den vier Textdateien — [verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt) und [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt) — in ein neues Verzeichnis auf Ihrem Computer. In diesem Beispiel werden wir ein anderes Versmaß des Gedichts abrufen (das Sie möglicherweise erkennen), wenn es im Dropdown-Menü ausgewählt wird.

Fügen Sie direkt im {{htmlelement("script")}}-Element den folgenden Code hinzu. Dieser speichert Referenzen zu den {{htmlelement("select")}} und {{htmlelement("pre")}} Elementen und fügt dem `<select>` Element einen Listener hinzu, sodass wenn der Benutzer einen neuen Wert auswählt, der neue Wert an die Funktion `updateDisplay()` als Parameter übergeben wird.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Lassen Sie uns unsere `updateDisplay()`-Funktion definieren. Zuerst setzen Sie folgendes unter Ihren vorherigen Codeblock — dies ist der leere Rahmen der Funktion.

```js-nolint
function updateDisplay(verse) {

}
```

Wir beginnen unsere Funktion, indem wir eine relative URL konstruieren, die auf die Textdatei zeigt, die wir laden möchten, da wir diese später benötigen werden. Der Wert des {{htmlelement("select")}}-Elements zu jeder Zeit entspricht dem Text innerhalb der ausgewählten {{htmlelement("option")}} (es sei denn, Sie spezifizieren einen anderen Wert in einem `value`-Attribut) — also zum Beispiel "Verse 1". Die entsprechende Vers-Textdatei ist "verse1.txt" und befindet sich im selben Verzeichnis wie die HTML-Datei, daher genügt der Dateiname.

Allerdings sind Webserver meist case-sensitiv und der Dateiname enthält kein Leerzeichen. Um "Verse 1" in "verse1.txt" zu konvertieren, müssen wir das 'V' in Kleinbuchstaben umwandeln, das Leerzeichen entfernen und ".txt" am Ende hinzufügen. Dies kann mit {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}} und [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) erreicht werden. Fügen Sie folgende Zeilen innerhalb Ihrer `updateDisplay()` Funktion hinzu:

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

Hier gibt es einiges zu entpacken.

Zuerst, der Einstiegspunkt der Fetch API ist eine globale Funktion namens [`fetch()`](/de/docs/Web/API/Window/fetch), die die URL als Parameter nimmt (sie nimmt einen weiteren optionalen Parameter für benutzerdefinierte Einstellungen, aber diesen verwenden wir hier nicht).

Dann ist `fetch()` eine asynchrone API, die ein {{jsxref("Promise")}} zurückgibt. Wenn Sie nicht wissen, was das ist, lesen Sie das Modul über [asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS), insbesondere die Lektion über [Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises), und kommen Sie dann hierher zurück. Dort wird auch über die `fetch()` API gesprochen!

Da `fetch()` ein Promise zurückgibt, übergeben wir eine Funktion an die {{jsxref("Promise/then", "then()")}} Methode des zurückgegebenen Promises. Diese Methode wird aufgerufen, wenn die HTTP-Anfrage eine Antwort vom Server erhalten hat. Im Handler prüfen wir, ob die Anfrage erfolgreich war, und werfen einen Fehler, wenn dies nicht der Fall war. Andernfalls rufen wir [`response.text()`](/de/docs/Web/API/Response/text) auf, um den Antwortkörper als Text zu erhalten.

Es stellt sich heraus, dass `response.text()` _auch_ asynchron ist, daher geben wir das Promise zurück, das es zurückgibt, und übergeben eine Funktion an die `then()` Methode dieses neuen Promises. Diese Funktion wird aufgerufen, wenn der Antworttext bereit ist, und darin werden wir unser `<pre>`-Block mit dem Text aktualisieren.

Zuletzt hängen wir einen {{jsxref("Promise/catch", "catch()")}} Handler an das Ende der Kette, um alle in einer der aufgerufenen asynchronen Funktionen oder deren Handler geworfenen Fehler zu erfassen.

Ein Problem mit dem Beispiel in seinem aktuellen Zustand ist, dass es beim ersten Laden kein Gedicht anzeigt. Um dies zu beheben, fügen Sie die folgenden zwei Zeilen am Ende Ihres Codes hinzu (direkt über dem schließenden `</script>`-Tag), um Vers 1 standardmäßig zu laden und sicherzustellen, dass das {{htmlelement("select")}} Element immer den richtigen Wert anzeigt:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### Servieren Ihres Beispiels von einem Server

Moderne Browser führen keine HTTP-Anfragen aus, wenn Sie das Beispiel einfach von einer lokalen Datei ausführen. Das liegt an Sicherheitsbeschränkungen (für mehr über Web-Sicherheit, lesen Sie [Webseiten-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).

Um dies zu umgehen, müssen wir das Beispiel testen, indem wir es über einen lokalen Webserver laufen lassen. Um herauszufinden, wie man das macht, siehe [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

### Der Can Store

In diesem Beispiel haben wir eine Musterseite namens The Can Store erstellt – es ist ein fiktiver Supermarkt, der nur Dosenware verkauft. Sie können dieses [Beispiel live auf GitHub finden](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/), und [den Quellcode ansehen](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Eine gefälschte E-Commerce-Seite mit Suchoptionen in der linken Spalte und Produktsuchergebnissen in der rechten Spalte.](can-store.png)

Standardmäßig zeigt die Seite alle Produkte an, aber Sie können die Formularsteuerungen in der linken Spalte verwenden, um sie nach Kategorie oder Suchbegriff oder beides zu filtern.

Es gibt eine ganze Menge komplexen Code, der sich mit dem Filtern der Produkte nach Kategorie und Suchbegriffen, dem Manipulieren von Zeichenfolgen, sodass die Daten korrekt in der Benutzeroberfläche angezeigt werden, usw. befasst. Wir werden nicht alles davon im Artikel diskutieren, aber Sie finden ausführliche Kommentare im Code (siehe [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

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

Die `fetch()` Funktion gibt ein Promise zurück. Wenn dies erfolgreich abgeschlossen wird, enthält die Funktion im ersten `.then()` Block die `response`, die vom Netzwerk zurückgegeben wird.

Innerhalb dieser Funktion:

- prüfen wir, dass der Server keinen Fehler zurückgegeben hat (wie zum Beispiel [`404 Not Found`](/de/docs/Web/HTTP/Status/404)). Wenn dies der Fall war, werfen wir den Fehler.
- rufen wir [`json()`](/de/docs/Web/API/Response/json) auf die Antwort auf. Dies wird die Daten als [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) abrufen. Wir geben das von `response.json()` zurückgegebene Promise zurück.

Als nächstes übergeben wir eine Funktion in die `then()` Methode dieses zurückgegebenen Promises. Dieser Funktion wird ein Objekt übergeben, das die Antwortdaten als JSON enthält, die wir dann an die `initialize()` Funktion übergeben. Diese Funktion startet den Prozess, alle Produkte in der Benutzeroberfläche anzuzeigen.

Um Fehler zu behandeln, hängen wir einen `.catch()` Block an das Ende der Kette. Dieser läuft, wenn das Promise aus irgendeinem Grund fehlschlägt. Darin enthalten wir eine Funktion, die als Parameter ein `err`-Objekt erhält. Dieses `err`-Objekt kann verwendet werden, um die Art des aufgetretenen Fehlers zu melden. In diesem Fall machen wir dies mit einem einfachen `console.error()`.

Eine vollständige Website würde diesen Fehler jedoch eleganter behandeln, indem sie eine Nachricht auf dem Bildschirm des Benutzers anzeigt und möglicherweise Optionen zur Lösung der Situation anbietet, aber wir brauchen nichts weiter als ein einfaches `console.error()`.

Sie können den Fehlerfall selbst testen:

1. Machen Sie eine lokale Kopie der Beispieldateien.
2. Führen Sie den Code über einen Webserver aus (wie oben beschrieben, unter [Serving your example from a server](#servieren_ihres_beispiels_von_einem_server)).
3. Ändern Sie den Pfad zur abzurufenden Datei auf etwas wie 'produc.json' (stellen Sie sicher, dass es falsch geschrieben ist).
4. Laden Sie nun die Indexdatei in Ihrem Browser (über `localhost:8000`) und schauen Sie in die Entwicklerkonsole Ihres Browsers. Sie sehen eine Nachricht ähnlich wie "Fetch problem: HTTP error: 404".

Der zweite Fetch-Block kann innerhalb der `fetchBlob()` Funktion gefunden werden:

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

Dies funktioniert auf ähnliche Weise wie der vorherige, außer dass wir anstelle von [`json()`](/de/docs/Web/API/Response/json), [`blob()`](/de/docs/Web/API/Response/blob) verwenden. In diesem Fall wollen wir unsere Antwort als Bilddatei zurückgeben, und das Datenformat, das wir dafür verwenden, ist [Blob](/de/docs/Web/API/Blob) (der Begriff ist eine Abkürzung für "Binary Large Object" und kann grundsätzlich verwendet werden, um große dateiartige Objekte darzustellen, wie z.B. Bilder oder Videodateien).

Sobald wir unseren Blob erfolgreich empfangen haben, übergeben wir ihn in unsere `showProduct()` Funktion, die ihn anzeigt.

## Die XMLHttpRequest API

Manchmal, besonders in älterem Code, sehen Sie eine andere API namens [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) (oft abgekürzt als "XHR"), die verwendet wird, um HTTP-Anfragen zu machen. Diese ging der Fetch voraus und war wirklich die erste API, die weit verbreitet verwendet wurde, um AJAX zu implementieren. Wir empfehlen Ihnen, Fetch zu verwenden, wenn Sie können: es ist eine einfachere API und hat mehr Funktionen als `XMLHttpRequest`. Wir werden kein Beispiel durchgehen, das `XMLHttpRequest` verwendet, aber wir zeigen Ihnen, wie die `XMLHttpRequest` Version unserer ersten Can Store-Anfrage aussehen würde:

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
2. Rufen Sie seine [`open()`](/de/docs/Web/API/XMLHttpRequest/open) Methode auf, um es zu initialisieren.
3. Fügen Sie einen Event-Listener für sein [`load`](/de/docs/Web/API/XMLHttpRequest/load_event) Ereignis hinzu, der ausgelöst wird, wenn die Antwort erfolgreich abgeschlossen wurde. Im Listener rufen wir `initialize()` mit den Daten auf.
4. Fügen Sie einen Event-Listener für sein [`error`](/de/docs/Web/API/XMLHttpRequest/error_event) Ereignis hinzu, das ausgelöst wird, wenn die Anfrage auf einen Fehler stößt.
5. Senden Sie die Anfrage.

Wir müssen auch das Ganze in den [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block einwickeln, um alle von `open()` oder `send()` geworfenen Fehler zu behandeln.

Hoffentlich denken Sie, dass die Fetch API eine Verbesserung gegenüber diesem darstellt. Insbesondere sehen Sie, wie wir mit Fehlern an zwei verschiedenen Stellen umgehen müssen.

## Zusammenfassung

Dieser Artikel zeigt, wie man mit Fetch beginnt, um Daten vom Server abzurufen.

## Siehe auch

Es gibt jedoch viele verschiedene Themen, die in diesem Artikel behandelt werden und die nur an der Oberfläche kratzen. Für viel mehr Details zu diesen Themen versuchen Sie die folgenden Artikel:

- [Fetch verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Arbeiten mit JSON-Daten](/de/docs/Learn_web_development/Core/Scripting/JSON)
- [Ein Überblick über HTTP](/de/docs/Web/HTTP/Overview)
- [Serverseitige Webentwicklung](/de/docs/Learn_web_development/Extensions/Server-side)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}
