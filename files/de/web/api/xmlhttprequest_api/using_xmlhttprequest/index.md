---
title: Verwendung von XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

In diesem Leitfaden betrachten wir, wie Sie [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwenden können, um [HTTP](/de/docs/Web/HTTP)-Anfragen zu stellen, um Daten zwischen der Website und einem Server auszutauschen.

Beispiele für gängige und weniger häufige Anwendungsfälle von `XMLHttpRequest` sind enthalten.

Um eine HTTP-Anfrage zu senden:

1. Erstellen Sie ein `XMLHttpRequest`-Objekt
2. Öffnen Sie eine URL
3. Senden Sie die Anfrage.

Nachdem die Transaktion abgeschlossen ist, enthält das `XMLHttpRequest`-Objekt nützliche Informationen wie den Antworttext und den [HTTP-Status](/de/docs/Web/HTTP/Status) des Ergebnisses.

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

Eine Anfrage, die über `XMLHttpRequest` gesendet wird, kann die Daten auf zwei Arten abrufen: asynchron oder synchron. Die Art der Anfrage wird durch das optionale Argument `async` (das dritte Argument) bestimmt, das in der Methode [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) gesetzt wird. Wenn dieses Argument `true` ist oder nicht angegeben wurde, wird die `XMLHttpRequest`-Anfrage asynchron verarbeitet, andernfalls wird der Vorgang synchron abgewickelt. Eine detaillierte Diskussion und Demonstrationen dieser beiden Anfragearten finden Sie auf der Seite [synchronen und asynchronen Anfragen](/de/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests). Sie können keine synchronen Anfragen außerhalb von Web-Workern verwenden, da dies die Hauptoberfläche einfrieren würde.

> [!NOTE]
> Der Konstruktor `XMLHttpRequest` ist nicht nur auf XML-Dokumente beschränkt. Er beginnt mit **"XML"**, da das ursprüngliche Format, das für asynchronen Datenaustausch verwendet wurde, XML war.

## Umgang mit Antworten

Es gibt mehrere Arten von [Antwortattributen](https://xhr.spec.whatwg.org/), die für den [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)-Konstruktor definiert sind. Diese liefern dem `XMLHttpRequest`-Client wichtige Informationen über den Status der Antwort. Einige Anwendungsfälle, bei denen mit Nicht-Text-Antworttypen gearbeitet wird, können Manipulation und Analyse erfordern und werden in den folgenden Abschnitten dargestellt.

### Analyse und Manipulation der `responseXML`-Eigenschaft

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt eines entfernten XML-Dokuments zu erhalten, ist die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft ein DOM-Objekt, das ein geparstes XML-Dokument enthält. Dies kann schwierig zu analysieren und zu manipulieren sein. Es gibt vier Hauptmethoden, um dieses XML-Dokument zu analysieren:

1. Verwendung von [XPath](/de/docs/Web/XML/XPath), um Teile davon zu adressieren (oder darauf zu verweisen).
2. Manuelles [Parsen und Serialisieren von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML) als Zeichenfolgen oder Objekte.
3. Verwendung von [`XMLSerializer`](/de/docs/Web/API/XMLSerializer), um **DOM-Bäume in Zeichenfolgen oder Dateien zu serialisieren**.
4. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des XML-Dokuments im Voraus kennen. Es könnte notwendig sein, Zeilenumbrüche zu entfernen, wenn Sie `RegExp` verwenden. Diese Methode sollte jedoch nur als "letzter Ausweg" betrachtet werden, da sie bei einer geringfügigen Änderung des XML-Codes wahrscheinlich fehlschlägt.

> **Hinweis:** `XMLHttpRequest` kann nun HTML für Sie interpretieren, indem die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft genutzt wird. Lesen Sie den Artikel über [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest), um mehr darüber zu erfahren.

### Verarbeitung der `responseText`-Eigenschaft, die ein HTML-Dokument enthält

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt einer entfernten HTML-Webseite zu erhalten, ist die [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText)-Eigenschaft eine Zeichenfolge, die das rohe HTML enthält. Dies könnte schwierig zu analysieren und zu manipulieren sein. Es gibt drei Hauptwege, dieses rohe HTML zu analysieren und zu verarbeiten:

1. Verwenden Sie die `XMLHttpRequest.responseXML`-Eigenschaft, wie im Artikel [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) beschrieben.
2. Injizieren Sie den Inhalt in den Body eines [Dokumentfragments](/de/docs/Web/API/DocumentFragment) über `fragment.body.innerHTML` und durchlaufen Sie den DOM des Fragments.
3. {{jsxref("RegExp")}} kann verwendet werden, wenn der Inhalt von `responseText` im Voraus bekannt ist. Der Umgang mit Zeilenumbrüchen könnte notwendig sein. Allerdings ist dies eine Methode des „letzten Auswegs“, da sie bei Änderungen am HTML-Code wahrscheinlich fehlschlägt.

## Umgang mit Binärdaten

Obwohl [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) am häufigsten verwendet wird, um Textdaten zu senden und zu empfangen, kann es auch für den Umgang mit Binärdaten genutzt werden. Es gibt mehrere bewährte Methoden, um die Antwort einer `XMLHttpRequest` zur Verarbeitung binärer Inhalte zu zwingen. Dazu gehört die Verwendung der Methode [`overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType) am `XMLHttpRequest`-Objekt, was eine funktionierende Lösung darstellt.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// retrieve data unprocessed as a binary string
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

Neue Techniken sind jedoch verfügbar, da das Attribut [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) nun eine Anzahl zusätzlicher Inhaltstypen unterstützt, was das Senden und Empfangen binärer Daten einfacher macht.

Ein Beispiel dafür ist die Verwendung des `responseType` mit `"arraybuffer"`, um den entfernten Inhalt in ein {{jsxref("ArrayBuffer")}}-Objekt zu laden, welches die rohen Binärdaten speichert.

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

## Überwachung des Fortschritts

`XMLHttpRequest` ermöglicht es, Ereignisse zu überwachen, die während der Verarbeitung einer Anfrage auftreten können. Dazu gehören regelmäßige Fortschrittsbenachrichtigungen, Fehlermeldungen und dergleichen.

Die Unterstützung für DOM-[`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)-Ereignisse bei der Überwachung von `XMLHttpRequest`-Transfers folgt der [Spezifikation für Fortschrittsereignisse](https://xhr.spec.whatwg.org/#interface-progressevent): Diese Ereignisse implementieren die [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Schnittstelle. Die tatsächlichen Ereignisse, die überwacht werden können, um den Status einer laufenden Übertragung zu bestimmen, sind:

- [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)
  - : Die Menge der abgerufenen Daten hat sich geändert.
- [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)
  - : Die Übertragung ist abgeschlossen; alle Daten befinden sich jetzt in der Antwort.

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

Wir fügen Ereignis-Listener für die verschiedenen Ereignisse hinzu, die während einer Datenübertragung mit `XMLHttpRequest` gesendet werden.

> [!NOTE]
> Sie müssen die Ereignis-Listener hinzufügen, bevor Sie `open()` auf der Anfrage aufrufen. Andernfalls werden keine `progress`-Ereignisse ausgelöst.

Der Fortschrittsereignishandler, der durch die Funktion `updateProgress()` in diesem Beispiel definiert wird, erhält die Gesamtanzahl der zu übertragenden Bytes sowie die bisher übertragenen Bytes in den Feldern `total` und `loaded` des Ereignisses. Wenn jedoch das Feld `lengthComputable` falsch ist, ist die Gesamtlänge unbekannt und beträgt null.

Fortschrittsereignisse gibt es sowohl für Download- als auch für Upload-Übertragungen. Die Download-Ereignisse werden auf dem `XMLHttpRequest`-Objekt selbst ausgelöst, wie im obigen Beispiel gezeigt. Die Upload-Ereignisse werden auf dem `XMLHttpRequest.upload`-Objekt ausgelöst, wie unten gezeigt:

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

Fortschrittsereignisse treten für jeden empfangenen Datenblock auf, einschließlich des letzten Blocks, falls der letzte Block empfangen und die Verbindung geschlossen wird, bevor das Fortschrittsereignis ausgelöst wird. In diesem Fall wird das Fortschrittsereignis automatisch ausgelöst, wenn das Ladevorgangsereignis für dieses Paket eintritt. So können Sie den Fortschritt zuverlässig überwachen, indem Sie nur das "progress"-Ereignis beobachten.

Man kann auch alle drei Zustände des Abschlusses (`abort`, `load` oder `error`) mithilfe des `loadend`-Ereignisses erkennen:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

Beachten Sie, dass es keine Möglichkeit gibt, aus den Informationen, die durch das `loadend`-Ereignis empfangen werden, sicher festzustellen, welcher Zustand den Vorgang beendet hat; Sie können dies jedoch verwenden, um Aufgaben zu behandeln, die in allen Abschluss-Szenarien ausgeführt werden müssen.

## Abrufen des Zuletzt-Geändert-Datums

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

### Etwas tun, wenn sich das Zuletzt-Geändert-Datum ändert

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

Und testen:

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

Wenn Sie wissen möchten, ob sich die aktuelle Seite geändert hat, lesen Sie den Artikel über [`document.lastModified`](/de/docs/Web/API/Document/lastModified).

## Cross-Site-XMLHttpRequest

Moderne Browser unterstützen Cross-Site-Anfragen durch Implementierung des [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS) (CORS)-Standards. Solange der Server so konfiguriert ist, dass er Anfragen aus dem Ursprung Ihrer Webanwendung erlaubt, wird `XMLHttpRequest` funktionieren. Andernfalls wird eine `INVALID_ACCESS_ERR`-Ausnahme ausgelöst.

## Umgehen des Caches

Eine browserübergreifende Möglichkeit, den Cache zu umgehen, besteht darin, einen Zeitstempel an die URL anzuhängen und sicherzustellen, dass ein „?“ oder „&“ wie erforderlich eingeschlossen wird. Zum Beispiel:

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

Da der lokale Cache nach URL indiziert wird, führt dies dazu, dass jede Anfrage einzigartig ist, wodurch der Cache umgangen wird.

Sie können URLs automatisch anpassen, indem Sie den folgenden Code verwenden:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Sicherheit

Die empfohlene Methode zur Aktivierung von Cross-Site-Scripting ist die Verwendung des HTTP-Headers `Access-Control-Allow-Origin` in der Antwort auf die XMLHttpRequest.

### XMLHttpRequests werden gestoppt

Wenn Sie feststellen, dass eine XMLHttpRequest `status=0` und `statusText=null` erhält, bedeutet dies, dass die Anfrage nicht ausgeführt werden durfte. Sie war [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Ein wahrscheinlicher Grund hierfür ist, dass sich der [`XMLHttpRequest`-Ursprung](https://www.w3.org/TR/2010/CR-XMLHttpRequest-20100803/#xmlhttprequest-origin) (zum Zeitpunkt der Erstellung des XMLHttpRequest) geändert hat, als die XMLHttpRequest anschließend `open()` wurde. Dieser Fall kann beispielsweise auftreten, wenn eine XMLHttpRequest ausgelöst wird, während ein Fenster geschlossen wird. Der effektivste Weg, dieses Problem zu vermeiden, besteht darin, einen Listener für das [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event)-Ereignis des neuen Fensters zu setzen, das ausgelöst wird, sobald das `unload`-Ereignis des geschlossenen Fensters ausgelöst wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/CORS)
- [XMLHttpRequest - REST und die Rich User Experience](https://www.peej.co.uk/articles/rich-user-experience.html)
- [Das `XMLHttpRequest`-Objekt: WHATWG-Spezifikation](https://xhr.spec.whatwg.org/)
