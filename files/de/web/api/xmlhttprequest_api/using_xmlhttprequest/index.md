---
title: Verwendung von XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

In diesem Leitfaden werden wir uns ansehen, wie man [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet, um [HTTP](/de/docs/Web/HTTP)-Anfragen zu stellen und Daten zwischen der Website und einem Server auszutauschen.

Beispiele für sowohl gebräuchliche als auch ungewöhnlichere Anwendungsfälle für `XMLHttpRequest` sind enthalten.

Um eine HTTP-Anfrage zu senden:

1. Erstellen Sie ein `XMLHttpRequest`-Objekt.
2. Öffnen Sie eine URL.
3. Senden Sie die Anfrage.

Nach Abschluss der Transaktion enthält das `XMLHttpRequest`-Objekt nützliche Informationen wie den Antwortkörper und den [HTTP-Status](/de/docs/Web/HTTP/Reference/Status) des Ergebnisses.

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

Eine über `XMLHttpRequest` gestellte Anfrage kann die Daten auf zwei Arten abrufen: asynchron oder synchron. Der Anfragetyp wird durch das optionale `async`-Argument (das dritte Argument), das in der [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open)-Methode gesetzt wird, bestimmt. Wenn dieses Argument `true` ist oder nicht spezifiziert wird, wird `XMLHttpRequest` asynchron verarbeitet, andernfalls wird der Prozess synchron ausgeführt. Eine ausführliche Diskussion und Demonstrationen dieser beiden Anfragetypen finden Sie auf der Seite [Synchronous and Asynchronous Requests](/de/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests). Sie können keine synchronen Anfragen außerhalb von Web Workern verwenden, da es die Hauptschnittstelle einfriert.

> [!NOTE]
> Der Konstruktor `XMLHttpRequest` ist nicht nur auf XML-Dokumente beschränkt. Er beginnt mit **"XML"**, da das ursprünglich verwendete Hauptformat für asynchronen Datenaustausch XML war.

## Umgang mit Antworten

Es sind mehrere [Antwortattribute](https://xhr.spec.whatwg.org/) für den [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)-Konstruktor definiert. Diese geben dem Client, der das `XMLHttpRequest` erstellt, wichtige Informationen über den Status der Antwort. Einige Fälle, in denen der Umgang mit nicht-textbasierten Antworttypen einige Manipulationen und Analysen erfordern kann, werden in den folgenden Abschnitten beschrieben.

### Analysieren und Manipulieren der Eigenschaft responseXML

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt eines entfernten XML-Dokuments abzurufen, wird die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft ein DOM-Objekt sein, das ein geparstes XML-Dokument enthält. Dies kann sich als schwierig zu manipulieren und analysieren erweisen. Es gibt vier Hauptmethoden, um dieses XML-Dokument zu analysieren:

1. Verwendung von [XPath](/de/docs/Web/XML/XPath) zur Adressierung (oder zum Zeigen) von Teilen davon.
2. Manuelles [Parsen und Serialisieren von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML) in Zeichenfolgen oder Objekte.
3. Verwendung von [`XMLSerializer`](/de/docs/Web/API/XMLSerializer), um **DOM-Bäume in Zeichenfolgen oder Dateien zu serialisieren**.
4. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des XML-Dokuments immer im Voraus kennen. Möglicherweise möchten Sie Zeilenumbrüche entfernen, wenn Sie `RegExp` verwenden, um bezüglich Zeilenumbrüche zu scannen. Diese Methode ist jedoch ein "letztes Mittel", da sie bei geringfügigen Änderungen im XML-Code wahrscheinlich fehlschlägt.

> [!NOTE]
> `XMLHttpRequest` kann jetzt HTML für Sie interpretieren, indem die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft verwendet wird. Lesen Sie den Artikel über [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest), um zu lernen, wie man dies macht.

### Verarbeitung einer `responseText`-Eigenschaft, die ein HTML-Dokument enthält

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt einer entfernten HTML-Webseite abzurufen, ist die [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText)-Eigenschaft eine Zeichenfolge, die das rohe HTML enthält. Dies kann sich als schwierig zu manipulieren und analysieren erweisen. Es gibt drei Hauptmethoden, um diese rohe HTML-Zeichenfolge zu analysieren und zu parsen:

1. Verwenden Sie die `XMLHttpRequest.responseXML`-Eigenschaft, wie im Artikel [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) behandelt.
2. Integrieren Sie den Inhalt in den Körper eines [DocumentFragment](/de/docs/Web/API/DocumentFragment) über `fragment.body.innerHTML` und durchlaufen Sie das DOM des Fragments.
3. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des HTML-`responseText` immer im Voraus kennen. Möglicherweise möchten Sie Zeilenumbrüche entfernen, wenn Sie `RegExp` verwenden, um bezüglich Zeilenumbrüche zu scannen. Diese Methode ist jedoch ein "letztes Mittel", da sie bei geringfügigen Änderungen im HTML-Code wahrscheinlich fehlschlägt.

## Umgang mit Binärdaten

Obwohl [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) am häufigsten zum Senden und Empfangen von textuellen Daten verwendet wird, kann es auch zum Senden und Empfangen von binären Inhalten verwendet werden. Es gibt mehrere gut getestete Methoden, um die Antwort eines `XMLHttpRequest` zur Übertragung von Binärdaten zu zwingen. Diese beinhalten die Verwendung der Methode [`overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType) auf dem `XMLHttpRequest`-Objekt und stellen eine praktikable Lösung dar.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// retrieve data unprocessed as a binary string
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

Es stehen jedoch modernere Techniken zur Verfügung, da das Attribut [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) jetzt eine Anzahl zusätzlicher Inhaltstypen unterstützt, was das Senden und Empfangen von Binärdaten viel einfacher macht.

Betrachten Sie zum Beispiel diesen Ausschnitt, der den `responseType` von `"arraybuffer"` verwendet, um den entfernten Inhalt in ein {{jsxref("ArrayBuffer")}}-Objekt zu laden, das die rohen Binärdaten speichert.

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

Weitere Beispiele finden Sie auf der Seite [Sending and Receiving Binary Data](/de/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data).

## Fortschritt überwachen

`XMLHttpRequest` bietet die Möglichkeit, verschiedene Ereignisse zu hören, die während der Bearbeitung der Anfrage auftreten können. Dies umfasst periodische Fortschrittsbenachrichtigungen, Fehlerbenachrichtigungen und so weiter.

Die Unterstützung für DOM-`progress`-Ereignisüberwachung von `XMLHttpRequest`-Übertragungen folgt der [Spezifikation für Fortschrittsereignisse](https://xhr.spec.whatwg.org/#interface-progressevent): Diese Ereignisse implementieren das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Interface. Die tatsächlichen Ereignisse, die Sie überwachen können, um den Zustand einer laufenden Übertragung zu bestimmen, sind:

- [`progress`](/de/docs/Web/API/XMLHttpRequestEventTarget/progress_event)
  - : Die Menge der abgerufenen Daten hat sich geändert.
- [`load`](/de/docs/Web/API/XMLHttpRequestEventTarget/load_event)
  - : Die Übertragung ist abgeschlossen; alle Daten befinden sich jetzt in der `response`.

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

Wir fügen Listener für die verschiedenen Ereignisse hinzu, die beim Datentransfer mit `XMLHttpRequest` gesendet werden.

> [!NOTE]
> Sie müssen die Ereignis-Listener hinzufügen, bevor Sie `open()` für die Anfrage aufrufen. Andernfalls werden die `progress`-Ereignisse nicht ausgelöst.

Der Fortschrittsereignis-Handler, wie in diesem Beispiel durch die Funktion `updateProgress()` angegeben, erhält die Gesamtzahl der zu übertragenden Bytes sowie die bisher übertragenen Bytes in den Feldern `total` und `loaded` des Ereignisses. Wenn das Feld `lengthComputable` jedoch false ist, ist die Gesamtlänge unbekannt und wird null sein.

Fortschrittsereignisse existieren sowohl für Download- als auch für Upload-Übertragungen. Die Download-Ereignisse werden auf dem `XMLHttpRequest`-Objekt selbst ausgelöst, wie im obigen Beispiel gezeigt. Die Upload-Ereignisse werden auf dem `XMLHttpRequest.upload`-Objekt ausgelöst, wie unten gezeigt:

```js
const req = new XMLHttpRequest();

req.upload.addEventListener("progress", updateProgress);
req.upload.addEventListener("load", transferComplete);
req.upload.addEventListener("error", transferFailed);
req.upload.addEventListener("abort", transferCanceled);

req.open();
```

> [!NOTE]
> Fortschrittsereignisse sind für das
> `file:`-Protokoll nicht verfügbar.

Fortschrittsereignisse treten für jedes Datenstück auf, das empfangen wird, einschließlich des letzten Stücks in Fällen, in denen das letzte Paket empfangen wird und die Verbindung geschlossen wird, bevor das Fortschrittsereignis ausgelöst wird. In diesem Fall wird das Fortschrittsereignis automatisch ausgelöst, wenn das Ladeereignis für dieses Paket auftritt. Dadurch können Sie den Fortschritt zuverlässig überwachen, indem Sie nur das "progress"-Ereignis beobachten.

Man kann auch alle drei Ladeend-Bedingungen (`abort`,
`load` oder `error`) mithilfe des `loadend`-Ereignisses erkennen:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

Beachten Sie, dass es keine Möglichkeit gibt, aus den Informationen, die durch das `loadend`-Ereignis empfangen werden, sicher zu sein, welche Bedingung den Vorgang beendet hat; Sie können dies jedoch verwenden, um Aufgaben zu bearbeiten, die in allen End-of-Transfer-Szenarien abgeschlossen werden müssen.

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

Moderne Browser unterstützen Cross-Site-Anfragen durch die Implementierung des Standards [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) (CORS). Solange der Server so konfiguriert ist, dass er Anfragen von der Herkunft Ihrer Webanwendung zulässt, funktioniert `XMLHttpRequest`. Andernfalls wird eine `INVALID_ACCESS_ERR`-Ausnahme ausgelöst.

## Cache umgehen

Ein browserübergreifender kompatibler Ansatz, um den Cache zu umgehen, besteht darin, einen Zeitstempel an die URL anzuhängen, wobei darauf geachtet wird, ein "?" oder "&" wie angemessen einzuschließen. Zum Beispiel:

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

Da der lokale Cache nach URL indiziert ist, ist jede Anfrage eindeutig, wodurch der Cache umgangen wird.

Sie können URLs automatisch mit dem folgenden Code anpassen:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Sicherheit

Der empfohlene Weg, Cross-Site Scripting zu aktivieren, besteht darin, das `Access-Control-Allow-Origin` HTTP-Header in der Antwort auf das XMLHttpRequest zu verwenden.

### XMLHttpRequests werden gestoppt

Wenn Sie mit einem XMLHttpRequest enden, das `status=0` und `statusText=null` empfängt, bedeutet dies, dass die Anfrage nicht ausgeführt werden durfte. Sie war [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Eine wahrscheinliche Ursache dafür ist, wenn sich die Herkunft des `XMLHttpRequest` (zum Zeitpunkt der Erstellung des XMLHttpRequest) geändert hat, wenn das XMLHttpRequest anschließend `open()` aufgerufen wird. Dies kann zum Beispiel passieren, wenn man ein XMLHttpRequest hat, das bei einem `onunload`-Ereignis für ein Fenster ausgelöst wird, das erwartete XMLHttpRequest erstellt wird, wenn das zu schließende Fenster noch vorhanden ist, und schließlich die Anfrage gesendet wird (in anderen Worten, `open()`) wenn dieses Fenster den Fokus verloren hat und ein anderes Fenster den Fokus erlangt. Der effektivste Weg, dieses Problem zu vermeiden, besteht darin, einen Listener auf das `DOMActivate`-Ereignis des neuen Fensters zu setzen, das einmal gesetzt wird, wenn das Ereignis [`unload`](/de/docs/Web/API/Window/unload_event) des beendeten Fensters ausgelöst wird.

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
