---
title: Verwendung von XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

In diesem Leitfaden zeigen wir, wie Sie [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwenden, um [HTTP](/de/docs/Web/HTTP)-Anfragen zu stellen und Daten zwischen der Website und einem Server auszutauschen.

Es sind Beispiele für sowohl gängige als auch ungewöhnlichere Anwendungsfälle von `XMLHttpRequest` enthalten.

Um eine HTTP-Anfrage zu senden:

1. Erstellen Sie ein `XMLHttpRequest`-Objekt
2. Öffnen Sie eine URL
3. Senden Sie die Anfrage.

Nach Abschluss der Transaktion enthält das `XMLHttpRequest`-Objekt nützliche Informationen wie den Antworttext und den [HTTP-Status](/de/docs/Web/HTTP/Status) des Ergebnisses.

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

Eine Anfrage, die über `XMLHttpRequest` gestellt wird, kann die Daten auf eine von zwei Arten abrufen: asynchron oder synchron. Der Anfragetype wird durch das optionale Argument `async` (das dritte Argument) bestimmt, das in der Methode [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) festgelegt wird. Wenn dieses Argument `true` ist oder nicht angegeben wird, wird das `XMLHttpRequest` asynchron verarbeitet, andernfalls erfolgt die Verarbeitung synchron. Eine ausführliche Diskussion und Demonstrationen dieser beiden Arten von Anfragen finden Sie auf der Seite [Synchrone und asynchrone Anfragen](/de/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests). Sie können außerhalb von Web-Workern keine synchronen Anfragen verwenden, da es die Hauptoberfläche einfriert.

> [!NOTE]
> Der Konstruktor `XMLHttpRequest` ist nicht nur auf XML-Dokumente beschränkt. Er beginnt mit **"XML"**, weil zu der Zeit, als er erstellt wurde, das Hauptformat für den asynchronen Datenaustausch XML war.

## Umgang mit Antworten

Es gibt mehrere Arten von [Antwortattributen](https://xhr.spec.whatwg.org/), die für den [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)-Konstruktor definiert sind. Diese informieren den Client, der das `XMLHttpRequest` erstellt, über den Status der Antwort. Einige Fälle, in denen der Umgang mit Nicht-Text-Antworttypen einige Manipulation und Analyse erfordern kann, werden in den folgenden Abschnitten erläutert.

### Analyse und Manipulation der responseXML-Eigenschaft

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt eines entfernten XML-Dokuments zu erhalten, ist die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft ein DOM-Objekt, das ein geparstes XML-Dokument enthält. Dies könnte sich als schwierig zu bearbeiten und zu analysieren erweisen. Es gibt vier Hauptmethoden zur Analyse dieses XML-Dokuments:

1. Verwendung von [XPath](/de/docs/Web/XPath), um Teile davon zu adressieren (oder zu verweisen).
2. Manuelles [Parsen und Serialisieren von XML](/de/docs/Web/XML/Parsing_and_serializing_XML) zu Strings oder Objekten.
3. Verwendung von [`XMLSerializer`](/de/docs/Web/API/XMLSerializer), um **DOM-Bäume zu Strings oder Dateien** zu serialisieren.
4. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des XML-Dokuments im Voraus kennen. Sie möchten möglicherweise Zeilenumbrüche entfernen, wenn Sie `RegExp` zum Scannen in Bezug auf Zeilenumbrüche verwenden. Diese Methode ist jedoch ein "letztes Mittel", da bei geringfügigen Änderungen des XML-Codes die Methode wahrscheinlich fehlschlägt.

> **Hinweis:** `XMLHttpRequest` kann jetzt HTML für Sie interpretieren, indem es die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft verwendet. Lesen Sie den Artikel über [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest), um zu erfahren, wie dies funktioniert.

### Verarbeitung einer `responseText`-Eigenschaft, die ein HTML-Dokument enthält

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt einer entfernten HTML-Webseite zu erhalten, ist die [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText)-Eigenschaft ein String, der das rohe HTML enthält. Dies könnte sich als schwierig zu bearbeiten und zu analysieren erweisen. Es gibt drei Hauptmethoden zur Analyse und zum Parsen dieses rohen HTML-Strings:

1. Verwenden Sie die `XMLHttpRequest.responseXML`-Eigenschaft, wie im Artikel [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) behandelt.
2. Injizieren Sie den Inhalt in den Körper eines [Dokumentfragments](/de/docs/Web/API/DocumentFragment) über `fragment.body.innerHTML` und durchlaufen Sie das DOM des Fragments.
3. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des HTML-`responseText` im Voraus kennen. Sie möchten möglicherweise Zeilenumbrüche entfernen, wenn Sie `RegExp` zum Scannen in Bezug auf Zeilenumbrüche verwenden. Diese Methode ist jedoch ein "letztes Mittel", da bei geringfügigen Änderungen des HTML-Codes die Methode wahrscheinlich fehlschlägt.

## Umgang mit Binärdaten

Obwohl [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) am häufigsten zum Senden und Empfangen von Textdaten verwendet wird, kann es auch zum Senden und Empfangen von binären Inhalten verwendet werden. Es gibt mehrere gut getestete Methoden, um die Antwort eines `XMLHttpRequest` in den Versand binärer Daten zu zwingen. Diese beinhalten die Nutzung der [`overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)-Methode auf dem `XMLHttpRequest`-Objekt und stellen eine praktikable Lösung dar.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// retrieve data unprocessed as a binary string
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

Jedoch sind modernere Techniken verfügbar, da das [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)-Attribut jetzt eine Reihe zusätzlicher Inhaltsarten unterstützt, was das Senden und Empfangen binärer Daten viel einfacher macht.

Betrachten Sie zum Beispiel diesen Ausschnitt, der den `responseType` von `"arraybuffer"` verwendet, um den entfernten Inhalt in ein {{jsxref("ArrayBuffer")}}-Objekt abzurufen, das die rohen Binärdaten speichert.

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

Für weitere Beispiele schauen Sie sich die Seite [Senden und Empfangen von Binärdaten](/de/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data) an.

## Fortschritt überwachen

`XMLHttpRequest` bietet die Möglichkeit, verschiedenen Ereignissen zuzuhören, die während der Anfragebearbeitung auftreten können. Dies umfasst regelmäßige Fortschrittsbenachrichtigungen, Fehlermeldungen und so weiter.

Die Unterstützung für DOM [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)-Ereignisüberwachung bei `XMLHttpRequest`-Übertragungen folgt der [Spezifikation für Fortschrittsereignisse](https://xhr.spec.whatwg.org/#interface-progressevent): Diese Ereignisse implementieren das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Interface. Die tatsächlichen Ereignisse, die Sie überwachen können, um den Zustand einer laufenden Übertragung zu bestimmen, sind:

- [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)
  - : Die Menge an abgerufenen Daten hat sich geändert.
- [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)
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

Wir fügen Ereignislistener für die verschiedenen Ereignisse hinzu, die während eines Datentransfers mit `XMLHttpRequest` gesendet werden.

> [!NOTE]
> Sie müssen die Ereignislistener hinzufügen, bevor Sie `open()` für die Anfrage aufrufen. Andernfalls werden die `progress`-Ereignisse nicht ausgelöst.

Der Fortschritts-Ereignishandler, der durch die `updateProgress()`-Funktion in diesem Beispiel angegeben wird, erhält die Gesamtanzahl der zu übertragenden Bytes sowie die bisher übertragenen Bytes in den `total`- und `loaded`-Feldern des Ereignisses. Wenn jedoch das Feld `lengthComputable` falsch ist, ist die Gesamtlänge unbekannt und wird null sein.

Fortschrittsereignisse existieren sowohl für Download- als auch Upload-Übertragungen. Die Download-Ereignisse werden am `XMLHttpRequest`-Objekt selbst ausgelöst, wie im obigen Beispiel gezeigt. Die Upload-Ereignisse werden am `XMLHttpRequest.upload`-Objekt ausgelöst, wie unten gezeigt:

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

Fortschrittsereignisse treten bei jedem Datenstück auf, das empfangen wird, einschließlich des letzten Datenstücks, bei dem das letzte Paket empfangen wird und die Verbindung geschlossen wird, bevor das Fortschrittsereignis ausgelöst wird. In diesem Fall wird das Fortschrittsereignis automatisch ausgelöst, wenn das Ladeereignis für dieses Paket auftritt. Dies ermöglicht eine zuverlässige Fortschrittsüberwachung durch das alleinige Beobachten des "progress"-Ereignisses.

Man kann auch alle drei Ladeabschlussbedingungen (`abort`,
`load` oder `error`) mit dem `loadend`-Ereignis erkennen:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

Beachten Sie, dass es keine Möglichkeit gibt, mit den vom `loadend`-Ereignis empfangenen Informationen sicher festzustellen, welche Bedingung den Abschluss der Operation verursacht hat; Sie können dies jedoch verwenden, um Aufgaben zu bearbeiten, die in allen End-of-Transfer-Szenarien durchgeführt werden müssen.

## Letztes Änderungsdatum abrufen

```js
function getHeaderTime() {
  console.log(this.getResponseHeader("Last-Modified")); // A valid GMTString date or null
}

const req = new XMLHttpRequest();
req.open(
  "HEAD", // use HEAD when you only need the headers
  "yourpage.html",
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
// Let's test the file "yourpage.html"
ifHasChanged("yourpage.html", function (modified, visit) {
  console.log(
    `The page '${this.filepath}' has been changed on ${new Date(
      nModified,
    ).toLocaleString()}!`,
  );
});
```

Wenn Sie wissen möchten, ob die aktuelle Seite geändert wurde, lesen Sie den Artikel über [`document.lastModified`](/de/docs/Web/API/Document/lastModified).

## Cross-Site XMLHttpRequest

Moderne Browser unterstützen Cross-Site-Anfragen durch die Implementierung des [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS) (CORS)-Standards. Solange der Server so konfiguriert ist, Anfragen von der Herkunft Ihrer Webanwendung zuzulassen, funktioniert `XMLHttpRequest`. Andernfalls wird eine `INVALID_ACCESS_ERR`-Ausnahme ausgelöst.

## Zwischenspeicher umgehen

Ein browserkompatibler Ansatz, um den Zwischenspeicher zu umgehen, besteht darin, einen Zeitstempel an die URL anzuhängen, wobei darauf zu achten ist, dass ein "?" oder "&" nach Bedarf eingefügt wird. Zum Beispiel:

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

Da der lokale Cache nach URL indiziert ist, macht dies jede Anfrage einzigartig, wodurch der Zwischenspeicher umgangen wird.

Sie können URLs automatisch mit dem folgenden Code anpassen:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Sicherheit

Der empfohlene Weg, Cross-Site-Scripting zu ermöglichen, besteht darin, den `Access-Control-Allow-Origin` HTTP-Header in der Antwort auf die XMLHttpRequest zu verwenden.

### XMLHttpRequests werden gestoppt

Wenn Sie mit einem XMLHttpRequest abschließen, das `status=0` und `statusText=null` empfängt, bedeutet dies, dass die Anfrage nicht ausgeführt werden durfte. Sie war [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Eine wahrscheinliche Ursache dafür ist, wenn sich die [`XMLHttpRequest`-Herkunft](https://www.w3.org/TR/2010/CR-XMLHttpRequest-20100803/#xmlhttprequest-origin) (bei der Erstellung der XMLHttpRequest) ändert, wenn die XMLHttpRequest anschließend `open()` ist. Dieser Fall kann beispielsweise auftreten, wenn man eine XMLHttpRequest hat, die bei einem onunload-Ereignis für ein Fenster ausgelöst wird, wobei die erwartete XMLHttpRequest erstellt wird, wenn das zu schließende Fenster noch vorhanden ist, und schließlich die Anfrage gesendet wird (anders ausgedrückt, `open()`), wenn dieses Fenster seinen Fokus verloren hat und ein anderes Fenster den Fokus erhält. Der effektivste Weg, dieses Problem zu vermeiden, ist, einen Listener für das [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event)-Ereignis des neuen Fensters zu setzen, das gesetzt wird, sobald das beendete Fenster sein [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis ausgelöst hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/CORS)
- [XMLHttpRequest - REST und die reichhaltige Benutzererfahrung](https://www.peej.co.uk/articles/rich-user-experience.html)
- [Das `XMLHttpRequest`-Objekt: WHATWG-Spezifikation](https://xhr.spec.whatwg.org/)
