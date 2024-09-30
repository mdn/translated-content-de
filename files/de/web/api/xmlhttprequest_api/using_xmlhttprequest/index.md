---
title: Verwendung von XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

In diesem Leitfaden betrachten wir, wie man [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet, um [HTTP](/de/docs/Web/HTTP)-Anfragen zu senden, um Daten zwischen der Website und einem Server auszutauschen.

Beispiele sowohl für häufige als auch für weniger bekannte Anwendungsfälle von `XMLHttpRequest` sind enthalten.

Um eine HTTP-Anfrage zu senden:

1. Erstellen eines `XMLHttpRequest`-Objekts
2. Eine URL öffnen
3. Die Anfrage senden.

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

## Typen von Anfragen

Eine Anfrage über `XMLHttpRequest` kann auf zwei Arten Daten abfragen, asynchron oder synchron. Der Anfragetyp wird durch das optionale `async`-Argument (das dritte Argument) festgelegt, das in der Methode [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) gesetzt wird. Wenn dieses Argument `true` ist oder nicht angegeben wird, wird die `XMLHttpRequest` asynchron verarbeitet, andernfalls erfolgt die Verarbeitung synchron. Eine ausführliche Diskussion und Demonstrationen dieser beiden Anfragearten finden Sie auf der Seite zu [synchronen und asynchronen Anfragen](/de/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests). Sie können keine synchronen Anfragen außerhalb von Web-Workern verwenden, da dies die Hauptschnittstelle einfriert.

> [!NOTE]
> Der Konstruktor `XMLHttpRequest` ist nicht auf XML-Dokumente beschränkt. Er beginnt mit **"XML"**, weil das Hauptformat, das ursprünglich für den asynchronen Datenaustausch verwendet wurde, XML war.

## Umgang mit Antworten

Es gibt mehrere Typen von [Antwortattributen](https://xhr.spec.whatwg.org/) für den [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)-Konstruktor. Diese geben dem Client, der das `XMLHttpRequest` ausführt, wichtige Informationen über den Status der Antwort. Einige Fälle, in denen der Umgang mit nicht-textlichen Antworttypen einige Manipulationen und Analysen beinhalten kann, sind in den folgenden Abschnitten beschrieben.

### Analysieren und Manipulieren der responseXML-Eigenschaft

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt eines entfernten XML-Dokuments abzurufen, wird die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft ein DOM-Objekt enthalten, das ein geparstes XML-Dokument darstellt. Dies könnte sich als schwierig erweisen, zu manipulieren und zu analysieren. Es gibt vier Hauptmöglichkeiten, dieses XML-Dokument zu analysieren:

1. Verwendung von [XPath](/de/docs/Web/XPath), um Teile davon anzusprechen (oder zu lokalisieren).
2. Manuelles [Parsieren und Serialisieren von XML](/de/docs/Web/XML/Parsing_and_serializing_XML) zu Zeichenfolgen oder Objekten.
3. Verwendung von [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) zum Serialisieren von **DOM-Bäumen zu Zeichenfolgen oder Dateien**.
4. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des XML-Dokuments immer im Voraus kennen. Sie könnten Zeilenumbrüche entfernen wollen, wenn Sie `RegExp` verwenden, um in Bezug auf Zeilenumbrüche zu scannen. Diese Methode ist jedoch ein "letzter Ausweg", da sie wahrscheinlich scheitert, wenn sich der XML-Code leicht ändert.

> **Note:** `XMLHttpRequest` kann jetzt HTML für Sie interpretieren, indem die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft verwendet wird. Lesen Sie den Artikel über [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest), um zu erfahren, wie das funktioniert.

### Verarbeitung einer `responseText`-Eigenschaft, die ein HTML-Dokument enthält

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt einer entfernten HTML-Webseite abzurufen, ist die [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText)-Eigenschaft eine Zeichenfolge, die das rohe HTML enthält. Dies könnte sich als schwierig erweisen, zu manipulieren und zu analysieren. Es gibt drei Hauptmethoden, um diese rohe HTML-Zeichenfolge zu analysieren und zu parsen:

1. Verwenden Sie die `XMLHttpRequest.responseXML`-Eigenschaft wie im Artikel [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) behandelt.
2. Injizieren Sie den Inhalt in den Körper eines [Dokumentfragments](/de/docs/Web/API/DocumentFragment) über `fragment.body.innerHTML` und durchlaufen Sie das DOM des Fragments.
3. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des HTML-`responseText` immer im Voraus kennen. Sie könnten Zeilenumbrüche entfernen wollen, wenn Sie `RegExp` verwenden, um in Bezug auf Zeilenumbrüche zu scannen. Diese Methode ist jedoch ein "letzter Ausweg", da sie wahrscheinlich scheitert, wenn sich der HTML-Code leicht ändert.

## Umgang mit Binärdaten

Obwohl [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) am häufigsten zum Senden und Empfangen von Textdaten verwendet wird, kann es auch zum Senden und Empfangen von Binärinhalten verwendet werden. Es gibt mehrere gut erprobte Methoden, um die Antwort eines `XMLHttpRequest` dazu zu zwingen, Binärdaten zu senden. Diese beinhalten die Verwendung der [`overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)-Methode auf dem `XMLHttpRequest`-Objekt und sind eine gangbare Lösung.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// retrieve data unprocessed as a binary string
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

Es stehen jedoch modernere Techniken zur Verfügung, da das [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)-Attribut nun eine Reihe zusätzlicher Inhaltstypen unterstützt, was das Senden und Empfangen von Binärdaten erheblich erleichtert.

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

Für weitere Beispiele schauen Sie sich die Seite [Senden und Empfangen von Binärdaten](/de/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data) an.

## Überwachung des Fortschritts

`XMLHttpRequest` bietet die Möglichkeit, verschiedenen Ereignissen zuzuhören, die während der Verarbeitung der Anfrage auftreten können. Dazu gehören periodische Fortschrittsbenachrichtigungen, Fehlermeldungen und dergleichen.

Die Unterstützung des DOM-`progress`-Ereignismonitorings von `XMLHttpRequest`-Übertragungen folgt der [Spezifikation für Fortschrittsereignisse](https://xhr.spec.whatwg.org/#interface-progressevent): Diese Ereignisse implementieren die [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Schnittstelle. Die tatsächlichen Ereignisse, die Sie überwachen können, um den Zustand einer laufenden Übertragung zu bestimmen, sind:

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

Der Event-Handler für den Fortschritt, der durch die Funktion `updateProgress()` in diesem Beispiel angegeben wird, erhält die Gesamtzahl der zu übertragenden Bytes sowie die Anzahl der bisher übertragenen Bytes in den Feldern `total` und `loaded` des Ereignisses. Falls das Feld `lengthComputable` jedoch false ist, ist die Gesamtlänge unbekannt und beträgt null.

Fortschrittsereignisse existieren sowohl für Download- als auch für Upload-Übertragungen. Die Download-Ereignisse werden direkt auf dem `XMLHttpRequest`-Objekt ausgelöst, wie im obigen Beispiel gezeigt. Die Upload-Ereignisse werden auf dem `XMLHttpRequest.upload`-Objekt ausgelöst, wie im folgenden Beispiel gezeigt:

```js
const req = new XMLHttpRequest();

req.upload.addEventListener("progress", updateProgress);
req.upload.addEventListener("load", transferComplete);
req.upload.addEventListener("error", transferFailed);
req.upload.addEventListener("abort", transferCanceled);

req.open();
```

> [!NOTE]
> Fortschrittsereignisse sind nicht verfügbar für das `file:`-Protokoll.

Fortschrittsereignisse kommen für jedes empfangene Datenstück herein, einschließlich des letzten Stücks, in Fällen, in denen das letzte Paket empfangen wird und die Verbindung geschlossen wird, bevor das Fortschrittsereignis ausgelöst wird. In diesem Fall wird das Fortschrittsereignis automatisch ausgelöst, wenn das Ladeereignis für dieses Paket stattfindet. Dies ermöglicht es Ihnen nun, den Fortschritt zuverlässig zu überwachen, indem Sie nur das "progress"-Ereignis beobachten.

Man kann auch alle drei Ladeendbedingungen (`abort`, `load` oder `error`) mit dem `loadend`-Ereignis erkennen:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

Beachten Sie, dass es keine Möglichkeit gibt, von den Informationen des `loadend`-Ereignisses sicher zu sein, welcher Zustand die Operation beendet hat; Sie können dies jedoch verwenden, um Aufgaben zu erledigen, die in allen End-der-Übertragungs-Szenarien durchgeführt werden müssen.

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

Und um zu testen:

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

Wenn Sie wissen möchten, ob die aktuelle Seite geändert wurde, sehen Sie sich den Artikel über [`document.lastModified`](/de/docs/Web/API/Document/lastModified) an.

## Cross-Site XMLHttpRequest

Moderne Browser unterstützen Cross-Site-Anfragen durch die Implementierung des Standards [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS) (CORS). Solange der Server so konfiguriert ist, Anfragen von dem Ursprung Ihrer Webanwendung zuzulassen, funktioniert `XMLHttpRequest`. Andernfalls wird eine `INVALID_ACCESS_ERR`-Ausnahme ausgelöst.

## Umgehen des Caches

Ein browserübergreifender Ansatz zum Umgehen des Caches ist das Anhängen eines Zeitstempel an die URL, wobei darauf geachtet wird, ein "?" oder "&" wie erforderlich einzufügen. Zum Beispiel:

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

Da der lokale Cache nach URL indiziert ist, macht dies jede Anfrage eindeutig und umgeht so den Cache.

Sie können URLs automatisch anpassen, indem Sie den folgenden Code verwenden:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Sicherheit

Der empfohlene Weg, um Cross-Site-Scripting zu ermöglichen, besteht darin, den `Access-Control-Allow-Origin` HTTP-Header in der Antwort auf die XMLHttpRequest zu verwenden.

### Beendigung von XMLHttpRequests

Wenn Sie mit einem XMLHttpRequest abschließen, der `status=0` und `statusText=null` empfängt, bedeutet dies, dass die Anfrage nicht ausgeführt werden durfte. Sie war [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Ein wahrscheinlicher Grund hierfür ist, wenn sich der [`XMLHttpRequest`-Ursprung](https://www.w3.org/TR/2010/CR-XMLHttpRequest-20100803/#xmlhttprequest-origin) (zum Zeitpunkt der Erstellung des XMLHttpRequest) ändert, wenn das XMLHttpRequest anschließend `open()` ist. Dieser Fall kann beispielsweise auftreten, wenn eine XMLHttpRequest auf einem `onunload`-Ereignis eines Fensters ausgelöst wird; das erwartete XMLHttpRequest wird erstellt, wenn das zu schließende Fenster noch vorhanden ist, und schließlich wird die Anfrage (mit anderen Worten, `open()`) gesendet, wenn dieses Fenster seinen Fokus verloren hat und ein anderes Fenster den Fokus erlangt. Der effektivste Weg zur Vermeidung dieses Problems ist es, einen Listener für das [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event)-Ereignis des neuen Fensters zu setzen, der gesetzt wird, sobald das beendete Fenster sein [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis auslöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [Kontrolle des HTTP-Zugangs](/de/docs/Web/HTTP/CORS)
- [XMLHttpRequest - REST und die Rich User Experience](https://www.peej.co.uk/articles/rich-user-experience.html)
- [Das `XMLHttpRequest`-Objekt: WHATWG-Spezifikation](https://xhr.spec.whatwg.org/)
