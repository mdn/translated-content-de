---
title: Verwendung von XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

In diesem Leitfaden werden wir uns ansehen, wie Sie [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwenden, um [HTTP](/de/docs/Web/HTTP)-Anfragen zu stellen, um Daten zwischen der Website und einem Server auszutauschen.

Beispiele für sowohl häufige als auch weniger bekannte Anwendungsfälle von `XMLHttpRequest` sind enthalten.

So senden Sie eine HTTP-Anfrage:

1. Erstellen Sie ein `XMLHttpRequest`-Objekt
2. Öffnen Sie eine URL
3. Senden Sie die Anfrage.

Nach Abschluss der Transaktion enthält das `XMLHttpRequest`-Objekt nützliche Informationen wie den Antworttext und den [HTTP-Status](/de/docs/Web/HTTP/Reference/Status) des Ergebnisses.

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

Eine Anfrage, die über `XMLHttpRequest` gemacht wird, kann die Daten auf zwei Arten abrufen, entweder asynchron oder synchron. Die Art der Anfrage wird durch das optionale `async`-Argument (das dritte Argument) bestimmt, das in der Methode [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) festgelegt wird. Wenn dieses Argument `true` ist oder nicht spezifiziert wird, wird `XMLHttpRequest` asynchron verarbeitet, andernfalls wird der Prozess synchron durchgeführt. Eine ausführliche Diskussion und Demonstrationen dieser beiden Arten von Anfragen finden Sie auf der Seite [Synchrone und asynchrone Anfragen](/de/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests). Sie können keine synchronen Anfragen außerhalb von Web-Workern verwenden, da dies die Hauptschnittstelle einfriert.

> [!NOTE]
> Der Konstruktor `XMLHttpRequest` ist nicht nur auf XML-Dokumente beschränkt. Er beginnt mit **"XML"**, weil das Hauptformat, das ursprünglich für den asynchronen Datenaustausch verwendet wurde, XML war.

## Umgang mit Antworten

Es gibt verschiedene Typen von [Antwortattributen](https://xhr.spec.whatwg.org/), die für den [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)-Konstruktor definiert sind. Diese geben dem Client, der die `XMLHttpRequest` stellt, wichtige Informationen über den Status der Antwort. Einige Fälle, in denen der Umgang mit Nicht-Text-Antworttypen einige Manipulationen und Analysen erfordern kann, werden in den folgenden Abschnitten beschrieben.

### Analysieren und Manipulieren der responseXML-Eigenschaft

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt eines entfernten XML-Dokuments abzurufen, wird die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft ein DOM-Objekt enthalten, das ein analysiertes XML-Dokument darstellt. Dies kann sich als schwierig zu manipulieren und zu analysieren erweisen. Es gibt vier Hauptmethoden zur Analyse dieses XML-Dokuments:

1. Verwendung von [XPath](/de/docs/Web/XML/XPath), um Teile davon zu adressieren (oder darauf zu verweisen).
2. Manuelles [Parsen und Serialisieren von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML) zu Zeichenfolgen oder Objekten.
3. Verwendung von [`XMLSerializer`](/de/docs/Web/API/XMLSerializer), um **DOM-Bäume in Zeichenfolgen oder Dateien zu serialisieren**.
4. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des XML-Dokuments immer vorher kennen. Es kann sinnvoll sein, Zeilenumbrüche zu entfernen, wenn `RegExp` im Hinblick auf Zeilenumbrüche verwendet wird. Diese Methode ist jedoch ein "letzter Ausweg", da sie vermutlich scheitert, wenn sich der XML-Code leicht ändert.

> [!NOTE] > `XMLHttpRequest` kann jetzt HTML für Sie interpretieren, indem es die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft verwendet. Lesen Sie den Artikel über [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest), um zu erfahren, wie das funktioniert.

### Verarbeitung einer `responseText`-Eigenschaft, die ein HTML-Dokument enthält

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt einer entfernten HTML-Webseite abzurufen, enthält die [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText)-Eigenschaft eine Zeichenfolge mit dem rohen HTML. Dies kann sich als schwierig zu manipulieren und zu analysieren erweisen. Es gibt drei Hauptmethoden, um diese rohe HTML-Zeichenfolge zu analysieren und zu parsen:

1. Verwenden Sie die `XMLHttpRequest.responseXML`-Eigenschaft, wie im Artikel [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) beschrieben.
2. Injizieren Sie den Inhalt in den Körper eines [Dokumentfragments](/de/docs/Web/API/DocumentFragment) über `fragment.body.innerHTML` und durchlaufen Sie das DOM des Fragments.
3. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des HTML-`responseText` immer vorher kennen. Vielleicht möchten Sie Zeilenumbrüche entfernen, wenn Sie `RegExp` im Hinblick auf Zeilenumbrüche verwenden. Diese Methode ist jedoch ein "letzter Ausweg", da sie vermutlich scheitert, wenn sich der HTML-Code leicht ändert.

## Umgang mit Binärdaten

Obwohl [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) am häufigsten verwendet wird, um Textdaten zu senden und zu empfangen, kann es auch verwendet werden, um binäre Inhalte zu senden und zu empfangen. Es gibt mehrere gut erprobte Methoden, um die Antwort eines `XMLHttpRequest` in das Senden von Binärdaten zu zwingen. Diese beinhalten die Nutzung der [`overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)-Methode auf dem `XMLHttpRequest`-Objekt und sind eine praktikable Lösung.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// retrieve data unprocessed as a binary string
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

Moderne Techniken sind jedoch verfügbar, da das [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)-Attribut nun eine Reihe weiterer Inhaltstypen unterstützt, was das Senden und Empfangen von Binärdaten viel einfacher macht.

Zum Beispiel betrachten Sie diesen Ausschnitt, der den `responseType` von `"arraybuffer"` verwendet, um den entfernten Inhalt in ein {{jsxref("ArrayBuffer")}}-Objekt abzurufen, das die rohen Binärdaten speichert.

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

`XMLHttpRequest` bietet die Möglichkeit, auf verschiedene Ereignisse zu hören, die beim Verarbeiten der Anfrage auftreten können. Dazu gehören regelmäßige Fortschrittsbenachrichtigungen, Fehlerbenachrichtigungen usw.

Die Unterstützung für DOM-[`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)-Ereignisüberwachung von `XMLHttpRequest`-Übertragungen folgt der [Spezifikation für Fortschrittsereignisse](https://xhr.spec.whatwg.org/#interface-progressevent): Diese Ereignisse implementieren das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Interface. Die tatsächlichen Ereignisse, die Sie überwachen können, um den Zustand eines laufenden Transfers zu bestimmen, sind:

- [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)
  - : Die Menge der abgerufenen Daten hat sich geändert.
- [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)
  - : Der Transfer ist abgeschlossen; alle Daten sind jetzt in der `response`

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

Wir fügen Ereignislistener für die verschiedenen Ereignisse hinzu, die beim Durchführen eines Datentransfers mit `XMLHttpRequest` gesendet werden.

> [!NOTE]
> Sie müssen die Ereignislistener hinzufügen, bevor Sie `open()` für die Anfrage aufrufen. Andernfalls werden die `progress`-Ereignisse nicht ausgelöst.

Der Fortschrittsereignis-Handler, der durch die `updateProgress()`-Funktion in diesem Beispiel angegeben wird, erhält die gesamte Anzahl der zu übertragenden Bytes sowie die Anzahl der bisher übertragenen Bytes in den Feldern `total` und `loaded` des Ereignisses. Wenn jedoch das Feld `lengthComputable` false ist, ist die Gesamtlänge nicht bekannt und beträgt null.

Fortschrittsereignisse existieren sowohl für Download- als auch für Upload-Übertragungen. Die Downloadevents werden auf dem `XMLHttpRequest`-Objekt selbst ausgelöst, wie im obigen Beispiel gezeigt. Die Uploadevents werden auf dem `XMLHttpRequest.upload`-Objekt ausgelöst, wie unten gezeigt:

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

Fortschrittsereignisse kommen für jeden empfangenen Datenblock, einschließlich des letzten Blockes, in Fällen, in denen das letzte Paket empfangen und die Verbindung geschlossen wird, bevor das Fortschrittsereignis ausgelöst wird. In diesem Fall wird das Fortschrittsereignis automatisch ausgelöst, wenn das Ladeereignis für dieses Paket auftritt. Dies ermöglicht es Ihnen nun, den Fortschritt zuverlässig zu überwachen, indem Sie nur das "progress"-Ereignis beobachten.

Man kann auch alle drei Ladeendbedingungen (`abort`, `load` oder `error`) mit dem `loadend`-Ereignis erkennen:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

Beachten Sie, dass es keine Möglichkeit gibt, mit Sicherheit aus den Informationen, die vom `loadend`-Ereignis empfangen werden, zu schließen, welche Bedingung die Beendigung der Operation verursacht hat; Sie können dies jedoch verwenden, um Aufgaben zu behandeln, die in allen End-of-Transfer-Szenarien ausgeführt werden müssen.

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

Wenn Sie wissen möchten, ob sich die aktuelle Seite geändert hat, beziehen Sie sich auf den Artikel über [`document.lastModified`](/de/docs/Web/API/Document/lastModified).

## Cross-Site XMLHttpRequest

Moderne Browser unterstützen Cross-Site-Anfragen durch Implementierung des [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) (CORS)-Standards. Solange der Server so konfiguriert ist, dass Anfragen von der Herkunft Ihrer Webanwendung zulässig sind, funktioniert `XMLHttpRequest`. Andernfalls wird eine `INVALID_ACCESS_ERR`-Ausnahme ausgelöst.

## Umgehung des Caches

Ein browserübergreifender Ansatz zur Umgehung des Caches ist das Anhängen eines Zeitstempels an die URL, wobei darauf geachtet wird, ein „?“ oder „&“ wie erforderlich einzuschließen. Zum Beispiel:

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

Da der lokale Cache nach URL indiziert ist, macht dies jede Anfrage einzigartig und umgeht somit den Cache.

Sie können URLs automatisch mit dem folgenden Code anpassen:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Sicherheit

Der empfohlene Weg zur Aktivierung von Cross-Site-Scripting besteht darin, den `Access-Control-Allow-Origin` HTTP-Header in der Antwort auf die XMLHttpRequest zu verwenden.

### Beendete XMLHttpRequests

Wenn Sie mit einer XMLHttpRequest abgeschlossen haben, die `status=0` und `statusText=null` erhält, bedeutet dies, dass die Anfrage nicht ausgeführt werden durfte. Sie war [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Eine wahrscheinliche Ursache hierfür ist, dass sich der Ursprung der `XMLHttpRequest` (zum Zeitpunkt der Erstellung der XMLHttpRequest) geändert hat, wenn die XMLHttpRequest anschließend `geöffnet` wird. Dies kann beispielsweise passieren, wenn man eine XMLHttpRequest hat, die beim `onunload`-Ereignis für ein Fenster ausgelöst wird, die erwartete XMLHttpRequest erstellt wird, wenn das zu schließende Fenster noch vorhanden ist, und letztlich die Anfrage sendet (in anderen Worten `open()`), wenn dieses Fenster den Fokus verloren hat und ein anderes Fenster den Fokus gewinnt. Der effektivste Weg, dieses Problem zu vermeiden, besteht darin, einen Listener für das [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event)-Ereignis des neuen Fensters zu setzen, das einmal ausgelöst wird, wenn das beendete Fenster sein [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis ausgelöst hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Fetch-API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS)
- [XMLHttpRequest - REST und die reichhaltige Benutzererfahrung](https://www.peej.co.uk/articles/rich-user-experience.html)
- [Das `XMLHttpRequest`-Objekt: WHATWG-Spezifikation](https://xhr.spec.whatwg.org/)
