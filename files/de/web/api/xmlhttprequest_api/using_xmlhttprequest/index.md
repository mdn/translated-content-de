---
title: Verwenden von XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: b9f156bd1ced39a6f6aa0fc5b6744cd2ca63959e
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

In diesem Leitfaden sehen wir uns an, wie Sie [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwenden, um [HTTP](/de/docs/Web/HTTP)-Anfragen zu senden und Daten zwischen der Website und einem Server auszutauschen.

Es sind Beispiele sowohl für häufige als auch für weniger bekannte Anwendungsfälle für `XMLHttpRequest` enthalten.

Um eine HTTP-Anfrage zu senden:

1. Erstellen Sie ein `XMLHttpRequest`-Objekt.
2. Öffnen Sie eine URL.
3. Senden Sie die Anfrage.

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

Eine via `XMLHttpRequest` gestellte Anfrage kann die Daten auf zwei Arten abrufen: asynchron oder synchron. Die Art der Anfrage wird durch das optionale `async`-Argument (das dritte Argument) bestimmt, das in der Methode [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) festgelegt ist. Wenn dieses Argument `true` ist oder nicht angegeben wird, wird das `XMLHttpRequest` asynchron verarbeitet, ansonsten synchron. Eine ausführliche Diskussion und Demonstrationen dieser beiden Anfragetypen finden Sie auf der Seite [synchronous and asynchronous requests](/de/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests). Sie können keine synchronen Anfragen außerhalb von Webworkern verwenden, da dies die Hauptschnittstelle einfrieren würde.

> [!NOTE]
> Der Konstruktor `XMLHttpRequest` ist nicht nur auf XML-Dokumente beschränkt. Er beginnt mit **"XML"**, weil das Hauptformat, das ursprünglich für den asynchronen Datenaustausch verwendet wurde, XML war.

## Umgang mit Antworten

Es gibt verschiedene Arten von [Antwortattributen](https://xhr.spec.whatwg.org/), die für den [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)-Konstruktor definiert sind. Diese geben dem Client, der das `XMLHttpRequest` ausführt, wichtige Informationen über den Status der Antwort. Einige Fälle, in denen der Umgang mit nicht-textuellen Antworttypen einige Manipulationen und Analysen erfordert, werden in den folgenden Abschnitten skizziert.

### Analysieren und Manipulieren der responseXML Eigenschaft

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt eines entfernten XML-Dokuments abzurufen, ist die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft ein DOM-Objekt, das ein geparstes XML-Dokument enthält. Dies kann sich als schwierig erweisen, um es zu manipulieren und zu analysieren. Es gibt vier Hauptmethoden, um dieses XML-Dokument zu analysieren:

1. Verwendung von [XPath](/de/docs/Web/XML/XPath), um auf Teile davon zuzugreifen oder darauf zu verweisen.
2. Manuelles [Parsen und Serialisieren von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML) in Zeichenfolgen oder Objekte.
3. Verwendung von [`XMLSerializer`](/de/docs/Web/API/XMLSerializer), um **DOM-Bäume in Zeichenfolgen oder Dateien zu serialisieren**.
4. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des XML-Dokuments im Voraus kennen. Möglicherweise möchten Sie Zeilenumbrüche entfernen, wenn Sie `RegExp` verwenden, um im Hinblick auf Zeilenumbrüche zu scannen. Diese Methode sollte jedoch nur als "letzter Ausweg" betrachtet werden, da sie wahrscheinlich fehlschlägt, wenn sich der XML-Code geringfügig ändert.

> **Hinweis:** `XMLHttpRequest` kann jetzt HTML für Sie interpretieren, indem die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) verwendet wird. Lesen Sie den Artikel über [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest), um zu erfahren, wie dies funktioniert.

### Verarbeitung einer `responseText`-Eigenschaft, die ein HTML-Dokument enthält

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt einer entfernten HTML-Webseite abzurufen, ist die [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText)-Eigenschaft eine Zeichenfolge, die das rohe HTML enthält. Dies kann sich als schwierig erweisen, um es zu manipulieren und zu analysieren. Es gibt drei Hauptmethoden, um diese rohe HTML-Zeichenfolge zu analysieren und zu parsen:

1. Verwenden Sie die `XMLHttpRequest.responseXML`-Eigenschaft, wie im Artikel [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) beschrieben.
2. Injizieren Sie den Inhalt in den Body eines [Document Fragments](/de/docs/Web/API/DocumentFragment) über `fragment.body.innerHTML` und durchlaufen Sie das DOM des Fragments.
3. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des HTML-`responseText` im Voraus kennen. Möglicherweise möchten Sie Zeilenumbrüche entfernen, wenn Sie `RegExp` verwenden, um im Hinblick auf Zeilenumbrüche zu scannen. Diese Methode sollte jedoch nur als "letzter Ausweg" betrachtet werden, da sie wahrscheinlich fehlschlägt, wenn sich der HTML-Code geringfügig ändert.

## Umgang mit Binärdaten

Obwohl [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) am häufigsten zum Senden und Empfangen von Textdaten verwendet wird, kann es auch zum Senden und Empfangen binärer Inhalte verwendet werden. Es gibt mehrere gut erprobte Methoden, um die Antwort eines `XMLHttpRequest` dazu zu bringen, Binärdaten zu senden. Diese beinhalten die Verwendung der [`overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)-Methode am `XMLHttpRequest`-Objekt und stellen eine praktikable Lösung dar.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// retrieve data unprocessed as a binary string
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

Es stehen jedoch modernere Techniken zur Verfügung, da das [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)-Attribut jetzt eine Reihe zusätzlicher Inhaltstypen unterstützt, was das Senden und Empfangen von Binärdaten erheblich erleichtert.

Zum Beispiel verwendet dieser Ausschnitt den `responseType` von `"arraybuffer"`, um den entfernten Inhalt in ein {{jsxref("ArrayBuffer")}}-Objekt zu laden, das die rohen Binärdaten speichert.

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

`XMLHttpRequest` bietet die Möglichkeit, verschiedenen Ereignissen zu lauschen, die beim Verarbeiten der Anfrage auftreten können. Dazu gehören regelmäßige Fortschrittsbenachrichtigungen, Fehlermeldungen und andere.

Die Unterstützung für DOM-`progress`-Ereignismonitoring von `XMLHttpRequest`-Übertragungen folgt der [Spezifikation für Fortschrittsereignisse](https://xhr.spec.whatwg.org/#interface-progressevent): Diese Ereignisse implementieren das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Interface. Die tatsächlichen Ereignisse, die Sie überwachen können, um den Status einer laufenden Übertragung festzustellen, sind:

- [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)
  - : Die Menge der abgerufenen Daten hat sich geändert.
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

Wir fügen Ereignislistener für die verschiedenen Ereignisse hinzu, die beim Ausführen eines Datentransfers mit `XMLHttpRequest` gesendet werden.

> [!NOTE]
> Sie müssen die Ereignislistener hinzufügen, bevor Sie `open()` für die Anfrage aufrufen. Andernfalls werden die `progress`-Ereignisse nicht ausgelöst.

Der Fortschrittsereignishandler, der durch die `updateProgress()`-Funktion in diesem Beispiel angegeben ist, erhält die Gesamtzahl der zu übertragenden Bytes sowie die Anzahl der bisher übertragenen Bytes in den `total` und `loaded` Feldern des Ereignisses. Wenn jedoch das `lengthComputable`-Feld false ist, ist die Gesamtlänge unbekannt und wird null sein.

Progress-Ereignisse existieren sowohl für Download- als auch für Upload-Übertragungen. Die Download-Ereignisse werden direkt auf dem `XMLHttpRequest`-Objekt ausgelöst, wie im obigen Beispiel gezeigt. Die Upload-Ereignisse werden auf dem `XMLHttpRequest.upload`-Objekt ausgelöst, wie unten gezeigt:

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

Fortschrittsereignisse treten bei jedem empfangenen Datenabschnitt auf, einschließlich des letzten Abschnitts in Fällen, in denen das letzte Paket empfangen wird und die Verbindung geschlossen wird, bevor das Fortschrittsereignis ausgelöst wird. In diesem Fall wird das Fortschrittsereignis automatisch ausgelöst, wenn das Ladeereignis für dieses Paket auftritt. Dies ermöglicht es Ihnen, den Fortschritt zuverlässig zu überwachen, indem Sie nur das "progress"-Ereignis beobachten.

Man kann auch alle drei Ladevorgang-beendenden Bedingungen (`abort`, `load` oder `error`) mit dem `loadend` Ereignis erkennen:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

Beachten Sie, dass es keine Möglichkeit gibt, aus den Informationen, die vom `loadend`-Ereignis empfangen werden, mit Sicherheit festzustellen, welche Bedingung den Vorgang beendet hat; dies kann jedoch verwendet werden, um Aufgaben zu behandeln, die in allen End-of-Transfer-Szenarien ausgeführt werden müssen.

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

## Cross-site XMLHttpRequest

Moderne Browser unterstützen Cross-Site-Anfragen durch Implementierung des [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS) (CORS)-Standards. Solange der Server so konfiguriert ist, dass er Anforderungen aus dem Ursprung Ihrer Webanwendung zulässt, funktioniert `XMLHttpRequest`. Andernfalls wird eine `INVALID_ACCESS_ERR`-Ausnahme ausgelöst.

## Umgehen des Caches

Ein browserübergreifender Ansatz zum Umgehen des Caches ist das Anhängen eines Zeitstempels an die URL, wobei darauf zu achten ist, ein "?" oder "&" hinzuzufügen, wie es geeignet ist. Zum Beispiel:

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

Da der lokale Cache nach URL indexiert wird, führt dies dazu, dass jede Anfrage einzigartig ist und dadurch der Cache umgangen wird.

Sie können URLs automatisch mit folgendem Code anpassen:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Sicherheit

Die empfohlene Methode, um Cross-Site-Scripting zu aktivieren, besteht darin, den HTTP-Header `Access-Control-Allow-Origin` in der Antwort auf das XMLHttpRequest festzulegen.

### XMLHttpRequests werden gestoppt

Wenn Sie mit einem XMLHttpRequest mit `status=0` und `statusText=null` enden, bedeutet dies, dass die Anfrage nicht ausgeführt werden durfte. Sie war [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Ein wahrscheinlicher Grund hierfür ist, wenn sich der Ursprung des `XMLHttpRequest` (bei der Erstellung des XMLHttpRequest) ändert, wenn das XMLHttpRequest anschließend `open()` ist. Dieser Fall kann auftreten, zum Beispiel wenn man ein XMLHttpRequest hat, das bei einem onunload-Ereignis für ein Fenster ausgelöst wird, das erwartete XMLHttpRequest wird erstellt, wenn das zu schließende Fenster noch vorhanden ist, und schließlich das Senden der Anfrage (mit anderen Worten `open()`) wenn dieses Fenster den Fokus verloren hat und ein anderes Fenster den Fokus erhält. Die effektivste Methode, um dieses Problem zu vermeiden, besteht darin, einen Listener für das [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event)-Ereignis des neuen Fensters festzulegen, der gesetzt wird, sobald das beendete Fenster sein [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis ausgelöst hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Fetch-API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/CORS)
- [XMLHttpRequest - REST und das Rich User-Erlebnis](https://www.peej.co.uk/articles/rich-user-experience.html)
- [Das `XMLHttpRequest`-Objekt: WHATWG-Spezifikation](https://xhr.spec.whatwg.org/)
