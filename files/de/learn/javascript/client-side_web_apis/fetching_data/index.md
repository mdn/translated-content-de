---
title: Abrufen von Daten vom Server
slug: Learn/JavaScript/Client-side_web_APIs/Fetching_data
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Eine weitere sehr verbreitete Aufgabe auf modernen Websites und in Anwendungen ist das Abrufen einzelner Datenpunkte vom Server, um Abschnitte einer Webseite zu aktualisieren, ohne eine komplett neue Seite laden zu müssen. Dieses scheinbar kleine Detail hat einen enormen Einfluss auf die Leistung und das Verhalten von Websites gehabt. In diesem Artikel erklären wir das Konzept und betrachten die Technologien, die dies ermöglichen: insbesondere die [Fetch API](/de/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Grundlagen von Client-seitigen APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Daten vom Server abruft und sie verwendet, um die
        Inhalte einer Webseite zu aktualisieren.
      </td>
    </tr>
  </tbody>
</table>

## Was ist das Problem hier?

Eine Webseite besteht aus einer HTML-Seite und (in der Regel) verschiedenen anderen Dateien wie Stylesheets, Skripten und Bildern. Das grundlegende Modell des Seitenladens im Web ist, dass Ihr Browser eine oder mehrere HTTP-Anfragen an den Server für die zum Anzeigen der Seite benötigten Dateien stellt, und der Server mit den angeforderten Dateien antwortet. Wenn Sie eine andere Seite besuchen, fordert der Browser die neuen Dateien an und der Server liefert diese.

![Traditionelles Laden von Seiten](traditional-loading.svg)

Dieses Modell funktioniert für viele Seiten sehr gut. Aber stellen Sie sich eine Website vor, die sehr datengetrieben ist. Zum Beispiel eine Bibliothekswebsite wie die [Vancouver Public Library](https://www.vpl.ca/). Unter anderem könnten Sie sich eine solche Seite als Benutzeroberfläche zu einer Datenbank vorstellen. Sie könnte es Ihnen ermöglichen, nach einem bestimmten Buchgenre zu suchen oder Ihnen Empfehlungen für Bücher zu geben, die Ihnen gefallen könnten, basierend auf Büchern, die Sie zuvor ausgeliehen haben. Wenn Sie dies tun, muss die Seite mit dem neuen Satz Bücher, die angezeigt werden sollen, aktualisiert werden. Beachten Sie jedoch, dass der größte Teil des Seiteninhalts - einschließlich Elemente wie der Seitenkopf, die Seitenleiste und die Fußzeile - gleich bleibt.

Das Problem mit dem traditionellen Modell hier ist, dass wir die gesamte Seite abrufen und laden müssten, selbst wenn wir nur einen Teil davon aktualisieren müssen. Dies ist ineffizient und kann zu einer schlechten Benutzererfahrung führen.

Statt des traditionellen Modells verwenden viele Websites JavaScript-APIs, um Daten vom Server anzufordern und den Seiteninhalt ohne Seitenladen zu aktualisieren. Wenn der Benutzer beispielsweise nach einem neuen Produkt sucht, fordert der Browser nur die Daten an, die benötigt werden, um die Seite zu aktualisieren - wie etwa den neuen Satz von Büchern, die angezeigt werden sollen.

![Verwenden von Fetch zum Aktualisieren von Seiten](fetch-update.svg)

Die Haupt-API hier ist die [Fetch API](/de/docs/Web/API/Fetch_API). Diese ermöglicht es, dass JavaScript, das in einer Seite ausgeführt wird, eine [HTTP](/de/docs/Web/HTTP)-Anfrage an einen Server stellt, um bestimmte Ressourcen abzurufen. Wenn der Server diese bereitstellt, kann das JavaScript die Daten verwenden, um die Seite zu aktualisieren, typischerweise durch die Verwendung von [DOM-Manipulations-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents). Die angeforderten Daten sind oft [JSON](/de/docs/Learn/JavaScript/Objects/JSON), welches ein gutes Format zur Übertragung strukturierter Daten ist, können jedoch auch HTML oder einfacher Text sein.

Dies ist ein gängiges Muster für datengetriebene Websites wie Amazon, YouTube, eBay usw. Mit diesem Modell:

- Seitenaktualisierungen sind viel schneller und Sie müssen nicht auf das Laden der Seite warten, was bedeutet, dass die Website schneller und reaktionsschneller wirkt.
- Bei jeder Aktualisierung werden weniger Daten heruntergeladen, was weniger verschwendete Bandbreite bedeutet. Dies mag auf einem Desktop mit Breitbandverbindung kein großes Problem sein, ist aber ein großes Problem auf mobilen Geräten und in Ländern ohne allgegenwärtige schnelle Internetdienste.

> [!NOTE]
> In den frühen Tagen war diese allgemeine Technik als [Asynchrones](/de/docs/Glossary/Asynchronous) JavaScript und XML ([Ajax](/de/docs/Glossary/AJAX)) bekannt, weil sie dazu neigte, XML-Daten anzufordern. Dies ist heutzutage normalerweise nicht der Fall (Sie würden eher JSON anfordern), aber das Ergebnis ist dasselbe, und der Begriff "Ajax" wird oft noch verwendet, um die Technik zu beschreiben.

Um die Geschwindigkeit weiter zu erhöhen, speichern einige Websites auch Assets und Daten auf dem Computer des Benutzers, wenn diese zuerst angefordert werden, was bedeutet, dass sie bei späteren Besuchen die lokalen Versionen verwenden, anstatt bei jedem erstmaligen Laden der Seite neue Kopien herunterzuladen. Der Inhalt wird nur dann vom Server neu geladen, wenn er aktualisiert wurde.

## Die Fetch API

Lassen Sie uns einige Beispiele der Fetch API durchgehen.

### Abrufen von Textinhalten

Für dieses Beispiel werden wir Daten aus einigen verschiedenen Textdateien anfordern und sie verwenden, um einen Inhaltsbereich zu füllen.

Diese Reihe von Dateien wird als unsere gefälschte Datenbank fungieren; in einer echten Anwendung würden wir eher eine serverseitige Sprache wie PHP, Python oder Node verwenden, um unsere Daten aus einer Datenbank anzufordern. Hier wollen wir es jedoch einfach halten und uns auf den clientseitigen Teil konzentrieren.

Um dieses Beispiel zu beginnen, machen Sie eine lokale Kopie von [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) und den vier Textdateien — [verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt) und [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt) — in einem neuen Verzeichnis auf Ihrem Computer. In diesem Beispiel werden wir einen anderen Vers des Gedichts abrufen (den Sie wohl erkennen könnten), wenn er im Dropdown-Menü ausgewählt wird.

Fügen Sie direkt innerhalb des {{htmlelement("script")}}-Elements den folgenden Code hinzu. Dieser speichert Referenzen zu den {{htmlelement("select")}}- und {{htmlelement("pre")}}-Elementen und fügt dem `<select>`-Element einen Listener hinzu, sodass, wenn der Benutzer einen neuen Wert auswählt, der neue Wert als Parameter an die Funktion `updateDisplay()` übergeben wird.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Definieren wir unsere Funktion `updateDisplay()`. Fügen Sie zunächst das folgende Gerüst der Funktion unter Ihrem vorherigen Codeblock hinzu.

```js-nolint
function updateDisplay(verse) {

}
```

Wir starten unsere Funktion, indem wir eine relative URL erstellen, die auf die Textdatei zeigt, die wir laden wollen, da wir sie später benötigen. Der Wert des {{htmlelement("select")}}-Elements zu einem beliebigen Zeitpunkt ist derselbe wie der Text innerhalb der ausgewählten {{htmlelement("option")}} (es sei denn, Sie geben einen anderen Wert in einem value-Attribut an) — zum Beispiel "Vers 1". Die entsprechende Vers-Textdatei ist "verse1.txt" und befindet sich im selben Verzeichnis wie die HTML-Datei, daher reicht der Dateiname aus.

Webserver neigen jedoch dazu, zwischen Groß- und Kleinschreibung zu unterscheiden, und der Dateiname enthält keine Leerzeichen. Um "Vers 1" in "verse1.txt" umzuwandeln, müssen wir das "V" in Kleinbuchstaben umwandeln, den Leerraum entfernen und ".txt" anhängen. Dies kann mit {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}} und [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) durchgeführt werden. Fügen Sie die folgenden Zeilen innerhalb Ihrer `updateDisplay()`-Funktion hinzu:

```js
verse = verse.replace(" ", "").toLowerCase();
const url = `${verse}.txt`;
```

Endlich sind wir bereit, die Fetch API zu verwenden:

```js
// Rufen Sie `fetch()` auf und übergeben Sie die URL.
fetch(url)
  // fetch() gibt ein Versprechen zurück. Wenn wir eine Antwort vom Server erhalten haben,
  // wird der `then()`-Handler des Versprechens mit der Antwort aufgerufen.
  .then((response) => {
    // Unser Handler wirft einen Fehler, wenn die Anforderung nicht erfolgreich war.
    if (!response.ok) {
      throw new Error(`HTTP-Fehler: ${response.status}`);
    }
    // Andernfalls (wenn die Antwort erfolgreich war), ruft unser Handler die Antwort
    // als Text ab, indem er response.text() aufruft, und gibt sofort das von `response.text()`
    // zurückgegebene Versprechen zurück.
    return response.text();
  })
  // Wenn response.text() erfolgreich war, wird der `then()`-Handler mit
  // dem Text aufgerufen, und wir kopieren ihn in das `poemDisplay`-Feld.
  .then((text) => {
    poemDisplay.textContent = text;
  })
  // Fangen Sie etwaige Fehler ab, die auftreten könnten, und zeigen Sie eine Nachricht
  // im `poemDisplay`-Feld an.
  .catch((error) => {
    poemDisplay.textContent = `Konnte Vers nicht abrufen: ${error}`;
  });
```

Es gibt hier ziemlich viel zu entpacken.

Zuerst ist der Einstiegspunkt zur Fetch API eine globale Funktion namens {{domxref("Window/fetch", "fetch()")}}, die die URL als Parameter annimmt (sie nimmt einen weiteren optionalen Parameter für benutzerdefinierte Einstellungen an, aber wir verwenden das hier nicht).

Als nächstes ist `fetch()` eine asynchrone API, die ein {{jsxref("Promise")}} zurückgibt. Wenn Sie nicht wissen, was das ist, lesen Sie das Modul über [asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous) und insbesondere den Artikel über [Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises), dann kommen Sie hierher zurück. Sie werden feststellen, dass dieser Artikel auch über die `fetch()`-API spricht!

Da `fetch()` ein Versprechen zurückgibt, übergeben wir eine Funktion in die {{jsxref("Promise/then", "then()")}}-Methode des zurückgegebenen Versprechens. Diese Methode wird aufgerufen, wenn die HTTP-Anfrage eine Antwort vom Server erhalten hat. In dem Handler überprüfen wir, ob die Anforderung erfolgreich war, und werfen einen Fehler, wenn nicht. Ansonsten rufen wir {{domxref("Response/text", "response.text()")}} auf, um den Antwortkörper als Text zu erhalten.

Es stellt sich heraus, dass `response.text()` _auch_ asynchron ist, daher geben wir das von ihm zurückgegebene Versprechen zurück und übergeben eine Funktion an die `then()`-Methode dieses neuen Versprechens. Diese Funktion wird aufgerufen, wenn der Antworttext bereit ist, und darin aktualisieren wir unseren `<pre>`-Block mit dem Text.

Zuletzt hängen wir am Ende einen {{jsxref("Promise/catch", "catch()")}}-Handler an, um alle in den von uns aufgerufenen asynchronen Funktionen oder deren Handler ausgelösten Fehler zu erfassen.

Ein Problem mit dem Beispiel, wie es derzeit steht, ist, dass es keines der Gedichte anzeigt, wenn es zuerst geladen wird. Um dies zu beheben, fügen Sie am Ende Ihres Codes (direkt über dem schließenden `</script>`-Tag) die folgenden zwei Zeilen hinzu, um Vers 1 standardmäßig zu laden und sicherzustellen, dass das {{htmlelement("select")}}-Element immer den richtigen Wert anzeigt:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### Ihr Beispiel von einem Server bereitstellen

Moderne Browser führen keine HTTP-Anfragen aus, wenn Sie das Beispiel einfach aus einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (für mehr zum Thema Web-Sicherheit lesen Sie [Webseiten-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)).

Um dies zu umgehen, müssen wir das Beispiel testen, indem wir es durch einen lokalen Webserver laufen lassen. Um herauszufinden, wie das geht, lesen Sie [unseren Leitfaden zur Einrichtung eines lokalen Testservers](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

### Der Konservenladen

In diesem Beispiel haben wir eine Beispielseite namens Der Konservenladen erstellt - es ist ein fiktiver Supermarkt, der nur Dosenwaren verkauft. Sie können dieses [Beispiel live auf GitHub sehen](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/), und [sehen Sie sich den Quellcode an](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Eine gefälschte E-Commerce-Website, die Suchoptionen in der linken Spalte und Suchergebnisse für Produkte in der rechten Spalte zeigt.](can-store.png)

Standardmäßig zeigt die Seite alle Produkte an, aber Sie können die Formularsteuerungen in der linken Spalte verwenden, um sie nach Kategorie oder Suchbegriff oder beidem zu filtern.

Es gibt eine Menge komplexen Code, der sich damit befasst, die Produkte nach Kategorie und Suchbegriffen zu filtern, Strings so zu manipulieren, dass die Daten korrekt in der Benutzeroberfläche angezeigt werden usw. Wir werden nicht alles davon im Artikel besprechen, aber Sie können umfangreiche Kommentare im Code finden (siehe [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

Wir werden jedoch den Fetch-Code erklären.

Der erste Block, der Fetch verwendet, kann zu Beginn des JavaScripts gefunden werden:

```js
fetch("products.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP-Fehler: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => initialize(json))
  .catch((err) => console.error(`Fetch-Problem: ${err.message}`));
```

Die `fetch()`-Funktion gibt ein Versprechen zurück. Wenn dieses erfolgreich abgeschlossen wird, enthält die Funktion im ersten `.then()`-Block die vom Netzwerk zurückgegebene `response`.

Innerhalb dieser Funktion:

- überprüfen wir, ob der Server keinen Fehler (wie z.B. [`404 Not Found`](/de/docs/Web/HTTP/Status/404)) zurückgegeben hat. Wenn er das getan hat, werfen wir den Fehler.
- rufen wir {{domxref("Response.json","json()")}} auf die Antwort auf. Dadurch werden die Daten als [JSON-Objekt](/de/docs/Learn/JavaScript/Objects/JSON) abgerufen. Wir geben das von `response.json()` zurückgegebene Versprechen zurück.

Als nächstes geben wir eine Funktion in die `then()`-Methode des zurückgegebenen Versprechens ein. Diese Funktion erhält ein Objekt mit den Antwortdaten als JSON, das wir in die Funktion `initialize()` übergeben. Diese Funktion startet den Prozess, alle Produkte in der Benutzeroberfläche anzuzeigen.

Um Fehler zu behandeln, hängen wir einen `.catch()`-Block an das Ende der Kette an. Dieser wird ausgeführt, wenn das Versprechen aus irgendeinem Grund fehlschlägt. Darin beinhalten wir eine Funktion, die als Parameter ein `err`-Objekt übergeben bekommt. Dieses `err`-Objekt kann verwendet werden, um die Art des aufgetretenen Fehlers zu berichten, in diesem Fall machen wir es mit einem einfachen `console.error()`.

Ein vollständiges Website würde diesen Fehler jedoch eleganter behandeln, indem eine Nachricht auf dem Bildschirm des Benutzers angezeigt wird und möglicherweise Optionen zur Behebung der Situation angeboten werden. Aber wir benötigen nichts weiter als ein einfaches `console.error()`.

Sie können den Fehlerfall selbst testen:

1. Machen Sie eine lokale Kopie der Beispieldateien.
2. Führen Sie den Code durch einen Webserver aus (wie oben beschrieben, in [Ihr Beispiel von einem Server bereitstellen](#ihr_beispiel_von_einem_server_bereitstellen)).
3. Ändern Sie den Pfad zur Datei, die abgerufen werden soll, zu etwas wie 'produc.json' (stellen Sie sicher, dass es falsch geschrieben ist).
4. Laden Sie nun die Indexdatei in Ihrem Browser (`localhost:8000`) und schauen Sie in der Entwicklerkonsole Ihres Browsers. Sie werden eine Nachricht sehen, die dem "Fetch-Problem: HTTP-Fehler: 404" ähnelt.

Der zweite Fetch-Block kann innerhalb der `fetchBlob()`-Funktion gefunden werden:

```js
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP-Fehler: ${response.status}`);
    }
    return response.blob();
  })
  .then((blob) => showProduct(blob, product))
  .catch((err) => console.error(`Fetch-Problem: ${err.message}`));
```

Dies funktioniert im Wesentlichen genauso wie das vorherige, außer dass wir anstelle von {{domxref("Response.json","json()")}} {{domxref("Response.blob","blob()")}} verwenden. In diesem Fall möchten wir unsere Antwort als Bilddatei zurückgeben, und das Datenformat, das wir dafür verwenden, ist [Blob](/de/docs/Web/API/Blob) (der Begriff ist eine Abkürzung für "Binary Large Object" und kann im Grunde verwendet werden, um große, dateiähnliche Objekte darzustellen, wie Bilder oder Videodateien).

Sobald wir unseren Blob erfolgreich erhalten haben, übergeben wir ihn an unsere `showProduct()`-Funktion, die ihn anzeigt.

## Die XMLHttpRequest API

Manchmal, besonders in älterem Code, werden Sie eine andere API namens [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) (oft als "XHR" abgekürzt) sehen, die verwendet wird, um HTTP-Anfragen zu machen. Diese ging Fetch voraus und war wirklich die erste API, die weit verbreitet verwendet wurde, um AJAX zu implementieren. Wir empfehlen, Fetch zu verwenden, wenn Sie können: es ist eine einfachere API und hat mehr Funktionen als `XMLHttpRequest`. Wir werden kein Beispiel durchgehen, das `XMLHttpRequest` verwendet, aber wir zeigen Ihnen, wie die `XMLHttpRequest`-Version unserer ersten Kan-Speicher-Anforderung aussehen würde:

```js
const request = new XMLHttpRequest();

try {
  request.open("GET", "products.json");

  request.responseType = "json";

  request.addEventListener("load", () => initialize(request.response));
  request.addEventListener("error", () => console.error("XHR-Fehler"));

  request.send();
} catch (error) {
  console.error(`XHR-Fehler ${request.status}`);
}
```

Es gibt fünf Schritte dazu:

1. Erstellen Sie ein neues `XMLHttpRequest`-Objekt.
2. Rufen Sie seine [`open()`](/de/docs/Web/API/XMLHttpRequest/open)-Methode auf, um es zu initialisieren.
3. Fügen Sie einen Ereignis-Listener für sein [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignis hinzu, das ausgelöst wird, wenn die Antwort erfolgreich abgeschlossen wurde. Im Listener rufen wir `initialize()` mit den Daten auf.
4. Fügen Sie einen Ereignis-Listener für sein [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)-Ereignis hinzu, das ausgelöst wird, wenn die Anfrage auf einen Fehler trifft.
5. Senden Sie die Anfrage.

Wir müssen das Ganze auch in einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block einwickeln, um alle von `open()` oder `send()` ausgelösten Fehler zu behandeln.

Hoffentlich denken Sie, dass die Fetch API eine Verbesserung im Vergleich dazu ist. Insbesondere sehen Sie, wie wir Fehler an zwei verschiedenen Stellen behandeln müssen.

## Zusammenfassung

Dieser Artikel zeigt, wie man beginnt, mit Fetch zu arbeiten, um Daten vom Server zu holen.

## Siehe auch

In diesem Artikel werden jedoch viele verschiedene Themen diskutiert, die wirklich nur die Oberfläche angekratzt haben. Für viel mehr Details zu diesen Themen, probieren Sie die folgenden Artikel:

- [Verwenden von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Arbeiten mit JSON-Daten](/de/docs/Learn/JavaScript/Objects/JSON)
- [Ein Überblick über HTTP](/de/docs/Web/HTTP/Overview)
- [Server-seitige Website-Programmierung](/de/docs/Learn/Server-side)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
