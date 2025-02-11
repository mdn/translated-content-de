---
title: Verwendung von XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

In diesem Leitfaden werfen wir einen Blick darauf, wie [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet werden kann, um [HTTP](/de/docs/Web/HTTP)-Anfragen zu senden und Daten zwischen der Website und einem Server auszutauschen.

Beispiele sowohl für häufige als auch für ungewöhnlichere Anwendungsfälle von `XMLHttpRequest` sind enthalten.

So senden Sie eine HTTP-Anfrage:

1. Erstellen eines `XMLHttpRequest`-Objekts.
2. Öffnen einer URL.
3. Senden der Anfrage.

Nach Abschluss der Transaktion enthält das `XMLHttpRequest`-Objekt nützliche Informationen wie den Antwortinhalt und den [HTTP-Status](/de/docs/Web/HTTP/Status) des Ergebnisses.

```js
function reqListener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "http://www.example.org/example.txt");
req.send();
```

## Arten von Anfragen

Eine Anfrage, die mittels `XMLHttpRequest` gesendet wird, kann die Daten auf zwei Arten abrufen: asynchron oder synchron. Die Art der Anfrage wird durch das optionale `async`-Argument (das dritte Argument) bestimmt, das in der Methode [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) gesetzt wird. Wenn dieses Argument auf `true` gesetzt oder nicht angegeben ist, wird die `XMLHttpRequest` asynchron verarbeitet. Andernfalls erfolgt die Verarbeitung synchron. Eine detaillierte Diskussion und Demonstrationen dieser beiden Anfragetypen finden Sie auf der Seite [Synchronisierte und asynchronisierte Anfragen](/de/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests). Sie können synchronisierte Anfragen außerhalb von Web-Workern nicht verwenden, da dies die Hauptschnittstelle einfriert.

> [!NOTE]
> Der Konstruktor `XMLHttpRequest` ist nicht auf XML-Dokumente beschränkt. Er beginnt mit **"XML"**, weil das ursprüngliche Hauptformat für den asynchronen Datenaustausch XML war.

## Verarbeitung von Antworten

Für den [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)-Konstruktor sind mehrere Arten von [Antwortattributen](https://xhr.spec.whatwg.org/) definiert. Diese geben dem Client, der die `XMLHttpRequest` sendet, wichtige Informationen über den Status der Antwort. Einige Fälle, in denen der Umgang mit Nicht-Text-Antworttypen einige Manipulationen und Analysen erfordert, werden in den folgenden Abschnitten beschrieben.

### Analysieren und Verarbeiten der responseXML-Eigenschaft

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt eines entfernten XML-Dokuments abzurufen, ist die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft ein DOM-Objekt, das ein geparstes XML-Dokument enthält. Dies könnte sich als schwierig erweisen, um zu manipulieren und zu analysieren. Es gibt vier Hauptmethoden, dieses XML-Dokument zu analysieren:

1. Verwenden von [XPath](/de/docs/Web/XML/XPath), um Teile davon anzusprechen (oder darauf zu verweisen).
2. Manuelles [Parsen und Serialisieren von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML) in Zeichenfolgen oder Objekte.
3. Verwenden von [`XMLSerializer`](/de/docs/Web/API/XMLSerializer), um **DOM-Bäume in Zeichenfolgen oder Dateien zu serialisieren**.
4. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des XML-Dokuments im Voraus genau kennen. Sie könnten Zeilenumbrüche entfernen wollen, wenn Sie `RegExp` verwenden, um in Bezug auf Zeilenumbrüche zu scannen. Diese Methode ist jedoch ein "letztes Mittel", da sie bei geringfügigen Änderungen des XML-Codes wahrscheinlich fehlschlägt.

> **Hinweis:** `XMLHttpRequest` kann jetzt HTML für Sie interpretieren, indem die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft verwendet wird. Lesen Sie den Artikel über [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest), um zu erfahren, wie das geht.

### Verarbeitung einer `responseText`-Eigenschaft, die ein HTML-Dokument enthält

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt einer entfernten HTML-Webseite abzurufen, ist die [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText)-Eigenschaft eine Zeichenkette, die das rohe HTML enthält. Dieses könnte sich als schwierig erweisen, um zu manipulieren und zu analysieren. Es gibt drei Hauptmethoden, um diesen rohen HTML-Text zu analysieren und zu parsen:

1. Verwenden Sie die Eigenschaft `XMLHttpRequest.responseXML`, wie im Artikel [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) behandelt.
2. Integrieren Sie den Inhalt in den Body eines [DocumentFragment](/de/docs/Web/API/DocumentFragment) mittels `fragment.body.innerHTML` und durchlaufen Sie das DOM des Fragments.
3. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des HTML-`responseText` im Voraus genau kennen. Sie könnten Zeilenumbrüche entfernen wollen, wenn Sie `RegExp` verwenden, um in Bezug auf Zeilenumbrüche zu scannen. Diese Methode ist jedoch ein "letztes Mittel", da sie bei geringfügigen Änderungen des HTML-Codes wahrscheinlich fehlschlägt.

## Umgang mit Binärdaten

Obwohl [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) am häufigsten verwendet wird, um Textdaten zu senden und zu empfangen, kann es auch zum Senden und Empfangen von Binärinhalten verwendet werden. Es gibt mehrere gut erprobte Methoden, um die Antwort einer `XMLHttpRequest` so zu manipulieren, dass Binärdaten gesendet werden. Diese umfassen die Verwendung der [`overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)-Methode beim `XMLHttpRequest`-Objekt und sind eine praktikable Lösung.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// retrieve data unprocessed as a binary string
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

Allerdings stehen mittlerweile modernere Techniken zur Verfügung, da das Attribut [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) nun eine Vielzahl zusätzlicher Inhaltstypen unterstützt, wodurch das Senden und Empfangen von Binärdaten deutlich einfacher wird.

Betrachten Sie beispielsweise dieses Snippet, das den `responseType` von `"arraybuffer"` verwendet, um den entfernten Inhalt in ein {{jsxref("ArrayBuffer")}}-Objekt zu holen, das die rohen Binärdaten speichert.

```js
const req = new XMLHttpRequest();

req.onload = (e) => {
  const arraybuffer = req.response; // not responseText
  /* … */
};
req.open("GET", url);
req.responseType = "arraybuffer";
req.send();
```

Weitere Beispiele finden Sie auf der Seite [Senden und Empfangen von Binärdaten](/de/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data).

## Fortschritt überwachen

`XMLHttpRequest` bietet die Möglichkeit, verschiedene Ereignisse zu überwachen, die auftreten können, während die Anfrage verarbeitet wird. Dazu gehören regelmäßige Fortschrittsbenachrichtigungen, Fehlerbenachrichtigungen und mehr.

Die Unterstützung für das Monitoring von DOM-[`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)-Ereignissen während `XMLHttpRequest`-Transfers folgt der [Spezifikation für Fortschrittsereignisse](https://xhr.spec.whatwg.org/#interface-progressevent): Diese Ereignisse implementieren die [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Schnittstelle. Die tatsächlichen Ereignisse, die Sie überwachen können, um den Status eines laufenden Transfers zu bestimmen, sind:

- [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)
  - : Die Menge der abgerufenen Daten hat sich geändert.
- [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)
  - : Der Transfer ist abgeschlossen; alle Daten befinden sich jetzt in der `response`.

```js
const req = new XMLHttpRequest();

req.addEventListener("progress", updateProgress);
req.addEventListener("load", transferComplete);
req.addEventListener("error", transferFailed);
req.addEventListener("abort", transferCanceled);

req.open();

// …

// progress on transfers from the server to the client (downloads)
function updateProgress(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    // …
  } else {
    // Unable to compute progress information since the total size is unknown
  }
}

function transferComplete(evt) {
  console.log("The transfer is complete.");
}

function transferFailed(evt) {
  console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}
```

Wir fügen Ereignislistener für die verschiedenen Ereignisse hinzu, die beim Datenübertragungsprozess mit `XMLHttpRequest` gesendet werden.

> [!NOTE]
> Sie müssen die Ereignislistener hinzufügen, bevor Sie `open()` für die Anfrage aufrufen. Andernfalls werden die `progress`-Ereignisse nicht ausgelöst.

Der Fortschrittsereignishandler, der durch die Funktion `updateProgress()` in diesem Beispiel beschrieben wird, erhält die Gesamtanzahl der zu übertragenden Bytes sowie die bisher übertragenen Bytes in den Feldern `total` und `loaded` des Ereignisses. Wenn jedoch das Feld `lengthComputable` auf `false` steht, ist die Gesamtlänge nicht bekannt und beträgt null.

Fortschrittsereignisse existieren sowohl für Download- als auch für Upload-Transfers. Die Download-Ereignisse werden direkt beim `XMLHttpRequest`-Objekt selbst ausgelöst, wie im obigen Beispiel dargestellt. Die Upload-Ereignisse werden beim `XMLHttpRequest.upload`-Objekt ausgelöst, wie unten gezeigt:

```js
const req = new XMLHttpRequest();

req.upload.addEventListener("progress", updateProgress);
req.upload.addEventListener("load", transferComplete);
req.upload.addEventListener("error", transferFailed);
req.upload.addEventListener("abort", transferCanceled);

req.open();
```

> [!NOTE]
> Fortschrittsereignisse sind nicht für das
> `file:`-Protokoll verfügbar.

Fortschrittsereignisse treten für jedes Datenstück auf, das empfangen wurde, einschließlich des letzten Stücks, in Fällen, in denen das letzte Paket empfangen wird und die Verbindung geschlossen wird, bevor das Fortschrittsereignis ausgelöst wird. In diesem Fall wird das Fortschrittsereignis automatisch ausgelöst, wenn das Ladeereignis für dieses Paket auftritt. Dadurch können Sie den Fortschritt jetzt zuverlässig überwachen, indem Sie nur das "progress"-Ereignis überwachen.

Man kann auch alle drei Ladeendbedingungen (`abort`, `load` oder `error`) mit dem `loadend`-Ereignis erkennen:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

Beachten Sie, dass es anhand der Informationen, die durch das `loadend`-Ereignis empfangen werden, keine Möglichkeit gibt, sicher zu bestimmen, welche Bedingung die Operation beendet hat. Sie können dies jedoch verwenden, um Aufgaben zu behandeln, die in allen End-of-Transfer-Szenarien ausgeführt werden müssen.

## Letztes Änderungsdatum abrufen

```js
function getHeaderTime() {
  console.log(this.getResponseHeader("Last-Modified")); // A valid GMTString date or null
}

const req = new XMLHttpRequest();
req.open(
  "HEAD", // use HEAD when you only need the headers
  "your-page.html",
);
req.onload = getHeaderTime;
req.send();
```

### Etwas tun, wenn sich das letzte Änderungsdatum ändert

Lassen Sie uns zwei Funktionen erstellen:

```js
function getHeaderTime() {
  const lastVisit = parseFloat(
    window.localStorage.getItem(`lm_${this.filepath}`),
  );
  const lastModified = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(lastVisit) || lastModified > lastVisit) {
    window.localStorage.setItem(`lm_${this.filepath}`, Date.now());
    isFinite(lastVisit) && this.callback(lastModified, lastVisit);
  }
}

function ifHasChanged(URL, callback) {
  const req = new XMLHttpRequest();
  req.open("HEAD" /* use HEAD - we only need the headers! */, URL);
  req.callback = callback;
  req.filepath = URL;
  req.onload = getHeaderTime;
  req.send();
}
```

Und um dies zu testen:

```js
// Let's test the file "your-page.html"
ifHasChanged("your-page.html", function (modified, visit) {
  console.log(
    `The page '${this.filepath}' has been changed on ${new Date(
      nModified,
    ).toLocaleString()}!`,
  );
});
```

Wenn Sie wissen möchten, ob sich die aktuelle Seite geändert hat, lesen Sie den Artikel zu [`document.lastModified`](/de/docs/Web/API/Document/lastModified).

## Cross-Site-XMLHttpRequest

Moderne Browser unterstützen Cross-Site-Anfragen, indem sie den [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS) (CORS)-Standard implementieren. Solange der Server so konfiguriert ist, dass er Anfragen vom Ursprung Ihrer Webanwendung zulässt, funktioniert `XMLHttpRequest`. Andernfalls wird eine `INVALID_ACCESS_ERR`-Ausnahme ausgelöst.

## Cache umgehen

Ein browserübergreifend kompatibler Ansatz zum Umgehen des Caches ist das Anhängen eines Zeitstempels an die URL, wobei darauf geachtet wird, ein "?" oder "&" je nach Bedarf einzufügen. Zum Beispiel:

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

Da der lokale Cache nach URL indexiert wird, führt dies dazu, dass jede Anfrage einzigartig ist und somit den Cache umgeht.

Sie können URLs automatisch mit folgendem Code anpassen:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Sicherheit

Die empfohlene Methode, Cross-Site-Scripting zu ermöglichen, besteht darin, das `Access-Control-Allow-Origin`-HTTP-Header in der Antwort auf die XMLHttpRequest zu verwenden.

### XMLHttpRequests werden gestoppt

Wenn eine XMLHttpRequest mit `status=0` und `statusText=null` endet, bedeutet dies, dass die Anfrage nicht ausgeführt werden durfte. Sie war [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Eine wahrscheinliche Ursache dafür ist, wenn der Ursprung der `XMLHttpRequest` (zum Zeitpunkt der Erstellung der XMLHttpRequest) geändert wurde, wenn die XMLHttpRequest anschließend `open()` ist. Dieser Fall kann beispielsweise auftreten, wenn eine XMLHttpRequest beim `onunload`-Ereignis für ein Fenster ausgelöst wird. Die erwartete XMLHttpRequest wird erstellt, wenn das zu schließende Fenster noch vorhanden ist, und schließlich beim Senden der Anfrage (in anderen Worten, `open()`) hat dieses Fenster den Fokus verloren und ein anderes Fenster erhält den Fokus. Die effektivste Methode, dieses Problem zu vermeiden, besteht darin, einen Listener für das [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event)-Ereignis des neuen Fensters zu setzen, das einmal gesetzt wird, wenn das beendete Fenster sein [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis auslöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [HTTP Access Control](/de/docs/Web/HTTP/CORS)
- [XMLHttpRequest - REST and the Rich User Experience](https://www.peej.co.uk/articles/rich-user-experience.html)
- [Das `XMLHttpRequest`-Objekt: WHATWG Spezifikation](https://xhr.spec.whatwg.org/)
