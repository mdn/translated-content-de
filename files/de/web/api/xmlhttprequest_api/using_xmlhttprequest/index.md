---
title: Verwendung von XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

In diesem Leitfaden werden wir uns ansehen, wie Sie [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwenden, um [HTTP](/de/docs/Web/HTTP)-Anfragen zu stellen, um Daten zwischen der Website und einem Server auszutauschen.

Es werden Beispiele für sowohl gängige als auch weniger verbreitete Anwendungsfälle für `XMLHttpRequest` enthalten.

Um eine HTTP-Anfrage zu senden:

1. Erstellen Sie ein `XMLHttpRequest`-Objekt
2. Öffnen Sie eine URL
3. Senden Sie die Anfrage.

Nach Abschluss der Transaktion enthält das `XMLHttpRequest`-Objekt nützliche Informationen wie den Antwortinhalt und den [HTTP-Status](/de/docs/Web/HTTP/Reference/Status) des Ergebnisses.

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

Eine Anfrage, die über `XMLHttpRequest` gestellt wird, kann die Daten auf zwei Arten abrufen: asynchron oder synchron. Der Anfragetyp wird durch das optionale `async`-Argument (das dritte Argument), das in der Methode [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) festgelegt ist, bestimmt. Wenn dieses Argument `true` oder nicht angegeben ist, wird die `XMLHttpRequest` asynchron verarbeitet, andernfalls wird der Prozess synchron behandelt. Eine ausführliche Diskussion und Demonstrationen dieser beiden Anfragetypen finden Sie auf der Seite über [synchrone und asynchrone Anfragen](/de/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests). Sie können außerhalb von Web Workern keine synchronen Anfragen verwenden, da dies die Hauptschnittstelle einfriert.

> [!NOTE]
> Der Konstruktor `XMLHttpRequest` ist nicht nur auf XML-Dokumente beschränkt. Er beginnt mit **"XML"**, weil zu der Zeit, als er erstellt wurde, das Hauptformat, das ursprünglich für den asynchronen Datenaustausch verwendet wurde, XML war.

## Umgang mit Antworten

Es gibt mehrere Typen von [Antwortattributen](https://xhr.spec.whatwg.org/), die für den [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)-Konstruktor definiert sind. Diese geben dem Client, der die `XMLHttpRequest` ausführt, wichtige Informationen über den Status der Antwort. Einige Fälle, in denen der Umgang mit Nicht-Text-Antworttypen einige Manipulationen und Analysen erfordern kann, sind in den folgenden Abschnitten beschrieben.

### Analyse und Manipulation der responseXML-Eigenschaft

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt eines entfernten XML-Dokuments zu erhalten, wird die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft ein DOM-Objekt enthalten, das ein analysiertes XML-Dokument darstellt. Dies könnte sich als schwierig zu manipulieren und zu analysieren erweisen. Es gibt vier Hauptmethoden, um dieses XML-Dokument zu analysieren:

1. Verwendung von [XPath](/de/docs/Web/XML/XPath), um Teile davon zu adressieren (oder zu markieren).
2. Manuelle [Analyse und Serialisierung von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML) zu Zeichenfolgen oder Objekten.
3. Verwendung von [`XMLSerializer`](/de/docs/Web/API/XMLSerializer), um **DOM-Bäume in Zeichenfolgen oder Dateien** zu serialisieren.
4. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des XML-Dokuments vorher immer kennen. Sie können Zeilenumbrüche entfernen, wenn Sie `RegExp` verwenden, um nach Zeilenumbrüchen zu durchsuchen. Diese Methode ist jedoch ein "letzter Ausweg", da sie wahrscheinlich fehlschlägt, wenn sich der XML-Code leicht ändert.

> **Hinweis:** `XMLHttpRequest` kann nun HTML für Sie interpretieren, indem die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft verwendet wird. Lesen Sie den Artikel über [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest), um zu erfahren, wie dies funktioniert.

### Verarbeitung einer `responseText`-Eigenschaft, die ein HTML-Dokument enthält

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt einer entfernten HTML-Webseite zu erhalten, ist die [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText)-Eigenschaft eine Zeichenfolge, die das rohe HTML enthält. Dies könnte sich als schwierig zu manipulieren und zu analysieren erweisen. Es gibt drei Hauptmethoden zur Analyse und zum Parsen dieser rohen HTML-Zeichenfolge:

1. Verwenden Sie die `XMLHttpRequest.responseXML`-Eigenschaft, wie im Artikel [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) behandelt.
2. Injizieren Sie den Inhalt in den Körper eines [Dokumentfragments](/de/docs/Web/API/DocumentFragment) über `fragment.body.innerHTML` und durchlaufen Sie das DOM des Fragments.
3. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des HTML-`responseText` vorher immer kennen. Sie können Zeilenumbrüche entfernen, wenn Sie `RegExp` verwenden, um nach Zeilenumbrüchen zu durchsuchen. Diese Methode ist jedoch ein "letzter Ausweg", da sie wahrscheinlich fehlschlägt, wenn sich der HTML-Code leicht ändert.

## Umgang mit Binärdaten

Obwohl [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) am häufigsten verwendet wird, um Textdaten zu senden und zu empfangen, kann es auch zum Senden und Empfangen von binären Inhalten verwendet werden. Es gibt mehrere gut getestete Methoden, um die Antwort eines `XMLHttpRequest` dazu zu zwingen, Binärdaten zu senden. Diese beinhalten die Verwendung der [`overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)-Methode auf dem `XMLHttpRequest`-Objekt und sind eine praktikable Lösung.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// retrieve data unprocessed as a binary string
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

Es stehen jedoch modernere Techniken zur Verfügung, da das [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)-Attribut jetzt mehrere zusätzliche Inhaltstypen unterstützt, was das Senden und Empfangen von Binärdaten erheblich erleichtert.

Betrachten Sie zum Beispiel diesen Codeausschnitt, der den `responseType` von `"arraybuffer"` verwendet, um den entfernten Inhalt in ein {{jsxref("ArrayBuffer")}}-Objekt abzurufen, das die rohen Binärdaten speichert.

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

`XMLHttpRequest` bietet die Möglichkeit, verschiedenen Ereignissen zuzuhören, die während der Verarbeitung der Anfrage auftreten können. Dazu gehören regelmäßige Fortschrittsbenachrichtigungen, Fehlerbenachrichtigungen und so weiter.

Die Unterstützung für DOM [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)-Ereignisüberwachung von `XMLHttpRequest`-Übertragungen folgt der [Spezifikation für Fortgeschrittene Ereignisse](https://xhr.spec.whatwg.org/#interface-progressevent): Diese Ereignisse implementieren die [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Schnittstelle. Die tatsächlichen Ereignisse, die Sie überwachen können, um den Status einer laufenden Übertragung zu bestimmen, sind:

- [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)
  - : Die Menge der abgerufenen Daten hat sich geändert.
- [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)
  - : Die Übertragung ist abgeschlossen; alle Daten befinden sich nun in der `response`.

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
> Sie müssen die Ereignis-Listener hinzufügen, bevor Sie `open()` für die Anfrage aufrufen. Andernfalls werden die `progress`-Ereignisse nicht ausgelöst.

Der Fortschrittsereignishandler, der durch die Funktion `updateProgress()` in diesem Beispiel angegeben wird, erhält die Gesamtzahl der zu übertragenden Bytes sowie die bisher übertragene Anzahl von Bytes in den Feldern `total` und `loaded` des Ereignisses. Wenn jedoch das Feld `lengthComputable` falsch ist, ist die Gesamtlänge nicht bekannt und wird null sein.

Fortschrittsereignisse existieren sowohl für Download- als auch für Upload-Übertragungen. Die Download-Ereignisse werden auf dem `XMLHttpRequest`-Objekt selbst ausgelöst, wie im obigen Beispiel gezeigt. Die Upload-Ereignisse werden auf dem `XMLHttpRequest.upload`-Objekt ausgelöst, wie im folgenden Beispiel gezeigt:

```js
const req = new XMLHttpRequest();

req.upload.addEventListener("progress", updateProgress);
req.upload.addEventListener("load", transferComplete);
req.upload.addEventListener("error", transferFailed);
req.upload.addEventListener("abort", transferCanceled);

req.open();
```

> [!NOTE]
> Fortschrittsereignisse sind nicht für das `file:`-Protokoll verfügbar.

Fortschrittsereignisse kommen für jedes empfangene Datenstück, einschließlich des letzten Stücks, in den Fällen an, in denen das letzte Paket empfangen wurde und die Verbindung geschlossen wird, bevor das Fortschrittereignis ausgelöst wird. In diesem Fall wird das Fortschrittereignis automatisch ausgelöst, wenn das Ladeereignis für dieses Paket auftritt. Dies ermöglicht es Ihnen, den Fortschritt jetzt zuverlässig zu überwachen, indem Sie nur das "progress"-Ereignis beobachten.

Sie können auch alle drei Ladeendbedingungen (`abort`, `load` oder `error`) mithilfe des `loadend`-Ereignisses erkennen:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

Beachten Sie, dass es keine Möglichkeit gibt, mit Sicherheit festzustellen, aus welcher Bedingung die Operation abgebrochen wurde, basierend auf den Informationen, die vom `loadend`-Ereignis erhalten wurden. Sie können dies jedoch verwenden, um Aufgaben auszuführen, die in allen End-of-Transfer-Szenarien durchgeführt werden müssen.

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

Und um zu testen:

```js
// Let's test the file "your-page.html"
ifHasChanged("your-page.html", function (modified, visit) {
  console.log(
    `The page '${this.filepath}' has been changed on ${new Date(
      modified,
    ).toLocaleString()}!`,
  );
});
```

Wenn Sie wissen möchten, ob sich die aktuelle Seite geändert hat, lesen Sie den Artikel über [`document.lastModified`](/de/docs/Web/API/Document/lastModified).

## Cross-Site XMLHttpRequest

Moderne Browser unterstützen Cross-Site-Anfragen, indem sie den [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) (CORS)-Standard implementieren. Solange der Server so konfiguriert ist, dass er Anfragen aus dem Ursprung Ihrer Webanwendung zulässt, funktioniert `XMLHttpRequest`. Andernfalls wird eine `INVALID_ACCESS_ERR`-Ausnahme ausgelöst.

## Umgehen des Caches

Ein plattformübergreifend kompatibler Ansatz, um den Cache zu umgehen, besteht darin, der URL einen Zeitstempel anzuhängen, wobei ein "?" oder "&" wie erforderlich eingeschlossen wird. Zum Beispiel:

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

Da der lokale Cache nach URLs indexiert ist, macht dies jede Anfrage eindeutig und umgeht somit den Cache.

Sie können URLs automatisch mit folgendem Code anpassen:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Sicherheit

Der empfohlene Weg, um Cross-Site-Scripting zu ermöglichen, ist die Verwendung des HTTP-Headers `Access-Control-Allow-Origin` in der Antwort auf das XMLHttpRequest.

### XMLHttpRequests werden gestoppt

Wenn Sie mit einem XMLHttpRequest enden, der `status=0` und `statusText=null` empfängt, bedeutet dies, dass die Anfrage nicht ausgeführt werden durfte. Sie war [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Eine wahrscheinliche Ursache hierfür ist, wenn sich der Ursprung des `XMLHttpRequest` (bei der Erstellung des XMLHttpRequest) geändert hat, wenn `XMLHttpRequest` anschließend `open()` ist. Dieser Fall kann zum Beispiel auftreten, wenn man eine XMLHttpRequest hat, die bei einem `onunload`-Ereignis für ein Fenster ausgelöst wird, die erwartete XMLHttpRequest erstellt wird, wenn das zu schließende Fenster noch vorhanden ist, und die Anfrage schließlich gesendet wird (mit anderen Worten, `open()`), wenn dieses Fenster den Fokus verloren hat und ein anderes Fenster den Fokus erhält. Der effektivste Weg, dieses Problem zu vermeiden, besteht darin, einen Listener auf das `DOMActivate`-Ereignis des neuen Fensters zu setzen, das gesetzt wird, sobald das beendete Fenster sein `unload`-Ereignis ausgelöst hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS)
- [XMLHttpRequest - REST und die Rich User Experience](https://www.peej.co.uk/articles/rich-user-experience.html)
- [Das `XMLHttpRequest`-Objekt: WHATWG-Spezifikation](https://xhr.spec.whatwg.org/)
