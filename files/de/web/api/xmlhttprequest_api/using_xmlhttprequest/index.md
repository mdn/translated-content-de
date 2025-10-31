---
title: Verwendung von XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

In diesem Leitfaden schauen wir uns an, wie man [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet, um [HTTP](/de/docs/Web/HTTP)-Anfragen zu senden, um Daten zwischen der Website und einem Server auszutauschen.

Beispiele für sowohl häufige als auch weniger bekannte Anwendungsfälle für `XMLHttpRequest` sind enthalten.

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

Eine über `XMLHttpRequest` gestellte Anfrage kann auf zwei Arten Daten abrufen, asynchron oder synchron. Die Art der Anfrage wird durch das optionale `async`-Argument bestimmt (das dritte Argument), das in der Methode [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) festgelegt wird. Wenn dieses Argument `true` ist oder nicht angegeben wird, wird die `XMLHttpRequest` asynchron verarbeitet, andernfalls synchron. Eine detaillierte Diskussion und Demonstrationen dieser beiden Arten von Anfragen finden Sie auf der Seite zu [synchronen und asynchronen Anfragen](/de/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests). Sie können synchrone Anfragen außerhalb von Web-Workern nicht verwenden, da sie die Hauptschnittstelle einfrieren.

> [!NOTE]
> Der Konstruktor `XMLHttpRequest` ist nicht nur auf XML-Dokumente beschränkt. Er beginnt mit **"XML"**, weil das Hauptformat, das ursprünglich zum asynchronen Datenaustausch verwendet wurde, XML war.

## Umgang mit Antworten

Es gibt mehrere Arten von [Antwort-Attributen](https://xhr.spec.whatwg.org/), die für den [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)-Konstruktor definiert sind. Diese geben dem Client, der die `XMLHttpRequest` durchführt, wichtige Informationen über den Status der Antwort. Einige Fälle, in denen der Umgang mit nicht-textuellen Antworttypen möglicherweise einige Manipulation und Analyse erfordert, sind in den folgenden Abschnitten beschrieben.

### Analyse und Manipulation der responseXML-Eigenschaft

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt eines entfernten XML-Dokuments abzurufen, ist die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft ein DOM-Objekt, das ein analysiertes XML-Dokument enthält. Dies könnte sich als schwierig erweisen, zu manipulieren und zu analysieren. Es gibt vier Hauptmethoden zur Analyse dieses XML-Dokuments:

1. Verwenden von [XPath](/de/docs/Web/XML/XPath), um Teile davon anzusprechen (oder darauf zu zeigen).
2. Manuelles [Parsen und Serialisieren von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML) in Zeichenfolgen oder Objekte.
3. Verwenden von [`XMLSerializer`](/de/docs/Web/API/XMLSerializer), um **DOM-Bäume in Zeichenfolgen oder Dateien** zu serialisieren.
4. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des XML-Dokuments immer im Voraus kennen. Möglicherweise möchten Sie Zeilenumbrüche entfernen, wenn Sie `RegExp` verwenden, um in Bezug auf Zeilenumbrüche zu scannen. Diese Methode ist jedoch ein "letzter Ausweg", da sie bei geringfügigen Änderungen des XML-Codes wahrscheinlich fehlschlägt.

> [!NOTE]
> `XMLHttpRequest` kann jetzt HTML für Sie interpretieren, indem es die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft verwendet. Lesen Sie den Artikel über [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest), um zu erfahren, wie Sie dies tun können.

### Verarbeitung einer `responseText`-Eigenschaft, die ein HTML-Dokument enthält

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt einer entfernten HTML-Webseite abzurufen, ist die [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText)-Eigenschaft eine Zeichenfolge, die das rohe HTML enthält. Dies könnte sich als schwierig erweisen, zu manipulieren und zu analysieren. Es gibt drei Hauptmethoden, um diese rohe HTML-Zeichenfolge zu analysieren und zu parsen:

1. Verwenden Sie die `XMLHttpRequest.responseXML`-Eigenschaft, wie im Artikel [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) besprochen.
2. Injizieren Sie den Inhalt in den Body eines [Dokumentfragments](/de/docs/Web/API/DocumentFragment) über `fragment.body.innerHTML` und durchlaufen Sie das DOM des Fragments.
3. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des HTML-`responseText` immer im Voraus kennen. Möglicherweise möchten Sie Zeilenumbrüche entfernen, wenn Sie `RegExp` verwenden, um in Bezug auf Zeilenumbrüche zu scannen. Diese Methode ist jedoch ein "letzter Ausweg", da sie bei geringfügigen Änderungen des HTML-Codes wahrscheinlich fehlschlägt.

## Umgang mit Binärdaten

Obwohl [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) am häufigsten zum Senden und Empfangen von Textdaten verwendet wird, kann es auch verwendet werden, um binäre Inhalte zu senden und zu empfangen. Es gibt mehrere gut getestete Methoden, um die Antwort eines `XMLHttpRequest` dazu zu zwingen, binäre Daten zu senden. Diese beinhalten die Nutzung der [`overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)-Methode am `XMLHttpRequest`-Objekt und sind eine praktikable Lösung.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// retrieve data unprocessed as a binary string
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

Es stehen jedoch modernere Techniken zur Verfügung, da das Attribut [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) jetzt eine Reihe zusätzlicher Inhaltstypen unterstützt, was das Senden und Empfangen von Binärdaten erheblich erleichtert.

Betrachten Sie beispielsweise diesen Schnipsel, der den `responseType` von `"arraybuffer"` verwendet, um den entfernten Inhalt in ein {{jsxref("ArrayBuffer")}}-Objekt abzurufen, das die rohen Binärdaten speichert.

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

## Überwachung des Fortschritts

`XMLHttpRequest` bietet die Möglichkeit, verschiedene Ereignisse zu überwachen, die während der Verarbeitung der Anfrage auftreten können. Dazu gehören periodische Fortschrittsbenachrichtigungen, Fehlermeldungen und so weiter.

Die Unterstützung für DOM-Überwachung bei [`progress`](/de/docs/Web/API/XMLHttpRequestEventTarget/progress_event)-Ereignissen von `XMLHttpRequest`-Transfers folgt der [Spezifikation für Fortschrittsereignisse](https://xhr.spec.whatwg.org/#interface-progressevent): Diese Ereignisse setzen das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Interface um. Die tatsächlichen Ereignisse, die Sie überwachen können, um den Zustand eines laufenden Transfers zu bestimmen, sind:

- [`progress`](/de/docs/Web/API/XMLHttpRequestEventTarget/progress_event)
  - : Die Menge der abgerufenen Daten hat sich geändert.
- [`load`](/de/docs/Web/API/XMLHttpRequestEventTarget/load_event)
  - : Der Transfer ist abgeschlossen; alle Daten sind nun in der `response`.

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

Wir fügen Ereignis-Listener für die verschiedenen Ereignisse hinzu, die beim Durchführen eines Datentransfers mit `XMLHttpRequest` gesendet werden.

> [!NOTE]
> Sie müssen die Ereignis-Listener hinzufügen, bevor Sie `open()` auf die Anfrage aufrufen. Andernfalls werden die `progress`-Ereignisse nicht ausgelöst.

Der Fortschrittsereignis-Handler, der durch die `updateProgress()`-Funktion in diesem Beispiel spezifiziert wird, erhält die Gesamtanzahl der zu übertragenden Bytes sowie die Anzahl der bisher übertragenen Bytes in den Feldern `total` und `loaded` des Ereignisses. Wenn jedoch das Feld `lengthComputable` falsch ist, ist die Gesamtlänge unbekannt und wird null sein.

Fortschrittsereignisse existieren sowohl für Download- als auch für Upload-Transfers. Die Download-Ereignisse werden direkt beim `XMLHttpRequest`-Objekt ausgelöst, wie im obigen Beispiel gezeigt. Die Upload-Ereignisse werden beim `XMLHttpRequest.upload`-Objekt ausgelöst, wie unten gezeigt:

```js
const req = new XMLHttpRequest();

req.upload.addEventListener("progress", updateProgress);
req.upload.addEventListener("load", transferComplete);
req.upload.addEventListener("error", transferFailed);
req.upload.addEventListener("abort", transferCanceled);

req.open();
```

> [!NOTE]
> Fortschrittsereignisse sind nicht verfügbar für das
> `file:`-Protokoll.

Fortschrittsereignisse treten für jedes Datenstück auf, das empfangen wird, einschließlich des letzten Stücks, in Fällen, in denen das letzte Paket empfangen wird und die Verbindung geschlossen wird, bevor das Fortschrittsereignis ausgelöst wird. In diesem Fall wird das Fortschrittsereignis automatisch ausgelöst, wenn das Ladeereignis für dieses Paket auftritt. So können Sie den Fortschritt zuverlässig überwachen, indem Sie nur das "progress"-Ereignis beobachten.

Man kann auch alle drei Ladeendbedingungen (`abort`, `load` oder `error`) mit dem `loadend`-Ereignis erkennen:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

Beachten Sie, dass es keine Möglichkeit gibt, sicher zu sein, welche Bedingung den Vorgang zum Stoppen gebracht hat, basierend auf den Informationen, die vom `loadend`-Ereignis empfangen wurden; Sie können dies jedoch verwenden, um Aufgaben zu handhaben, die in allen End-of-Transfer-Szenarien durchgeführt werden müssen.

## Abrufen des letzten Änderungsdatums

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

Und zum Testen:

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

Moderne Browser unterstützen Cross-Site-Anfragen, indem sie den Standard [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) (CORS) implementieren. Solange der Server konfiguriert ist, um Anfragen von der Herkunft Ihrer Webanwendung zuzulassen, wird `XMLHttpRequest` funktionieren. Andernfalls wird eine `INVALID_ACCESS_ERR`-Ausnahme ausgelöst.

## Umgehen des Caches

Ein browserkompatibler Ansatz, um den Cache zu umgehen, besteht darin, einen Zeitstempel an die URL anzuhängen, wobei darauf geachtet wird, ein "?" oder "&" je nach Bedarf einzufügen. Zum Beispiel:

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

Da der lokale Cache nach URL indexiert ist, macht dies jede Anfrage einzigartig, wodurch der Cache umgangen wird.

Sie können URLs automatisch mit dem folgenden Code anpassen:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Sicherheit

Der empfohlene Weg zur Aktivierung von Cross-Site-Scripting besteht darin, das `Access-Control-Allow-Origin` HTTP-Header in der Antwort auf den XMLHttpRequest zu verwenden.

### XMLHttpRequests werden gestoppt

Wenn Sie mit einem XMLHttpRequest `status=0` und `statusText=null` erhalten, bedeutet dies, dass die Anfrage nicht ausgeführt werden durfte. Sie war [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Ein häufiger Grund dafür ist, dass sich der Ursprung des `XMLHttpRequest` (bei der Erstellung des XMLHttpRequest) geändert hat, wenn der XMLHttpRequest anschließend `open()` ist. Dies kann zum Beispiel passieren, wenn man einen XMLHttpRequest hat, der bei einem `onunload`-Ereignis für ein Fenster abfeuert, der erwartete XMLHttpRequest wird erstellt, wenn das zu schließende Fenster noch da ist, und schließlich die Anfrage sendet (in anderen Worten, `open()`) wenn dieses Fenster seinen Fokus verloren hat und ein anderes Fenster den Fokus gewinnt. Der effektivste Weg, dieses Problem zu vermeiden, besteht darin, einen Listener auf das [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event)-Ereignis des neuen Fensters zu setzen, der gesetzt wird, sobald das beendete Fenster sein [`unload`](/de/docs/Web/API/Window/unload_event)-Event ausgelöst hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS)
- [XMLHttpRequest - REST und das reichhaltige Benutzererlebnis](https://www.peej.co.uk/articles/rich-user-experience.html)
- [Das `XMLHttpRequest`-Objekt: WHATWG-Spezifikation](https://xhr.spec.whatwg.org/)
