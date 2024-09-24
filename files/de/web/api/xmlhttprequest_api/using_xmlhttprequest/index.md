---
title: Verwendung von XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

In diesem Leitfaden werden wir uns ansehen, wie Sie {{domxref("XMLHttpRequest")}} verwenden können, um [HTTP](/de/docs/Web/HTTP)-Anfragen zu stellen, um Daten zwischen der Website und einem Server auszutauschen.

Es sind Beispiele sowohl für gängige als auch weniger bekannte Anwendungsfälle für `XMLHttpRequest` enthalten.

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

Eine Anfrage, die über `XMLHttpRequest` gestellt wird, kann Daten auf zwei Arten abrufen: asynchron oder synchron. Der Anfragetyp wird durch das optionale `async`-Argument (das dritte Argument) bestimmt, das in der Methode {{domxref("XMLHttpRequest.open()")}} festgelegt wird. Wenn dieses Argument `true` ist oder nicht angegeben wird, wird `XMLHttpRequest` asynchron verarbeitet, andernfalls wird der Prozess synchron abgewickelt. Eine detaillierte Diskussion und Demonstrationen dieser beiden Anfragetypen finden Sie auf der Seite [synchron und asynchron Anfragen](/de/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests). Sie können außerhalb von Web-Workern keine synchronen Anfragen verwenden, da dies die Hauptschnittstelle einfrieren würde.

> [!NOTE]
> Der Konstruktor `XMLHttpRequest` ist nicht auf XML-Dokumente beschränkt. Er beginnt mit **"XML"**, weil beim Erstellen das Hauptformat für den asynchronen Datenaustausch ursprünglich XML war.

## Verarbeitung von Antworten

Es gibt verschiedene Typen von [Antwortattributen](https://xhr.spec.whatwg.org/), die für den {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}-Konstruktor definiert sind. Diese informieren den Client, der die `XMLHttpRequest` erstellt, über den Status der Antwort. Einige Fälle, in denen der Umgang mit nicht-textuellen Antworttypen möglicherweise einige Manipulationen und Analysen erfordert, sind in den folgenden Abschnitten umrissen.

### Analysieren und Manipulieren der responseXML-Eigenschaft

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt eines externen XML-Dokuments abzurufen, wird die Eigenschaft {{domxref("XMLHttpRequest.responseXML", "responseXML")}} ein DOM-Objekt sein, das ein analysiertes XML-Dokument enthält. Dies kann sich als schwierig zu manipulieren und zu analysieren erweisen. Es gibt vier Hauptmethoden, um dieses XML-Dokument zu analysieren:

1. Verwendung von [XPath](/de/docs/Web/XPath), um Teile davon anzusprechen (oder darauf hinzuweisen).
2. Manuelles [Analysieren und Serialisieren von XML](/de/docs/Web/XML/Parsing_and_serializing_XML) zu Strings oder Objekten.
3. Verwendung von {{domxref("XMLSerializer")}}, um **DOM-Bäume in Strings oder Dateien zu serialisieren**.
4. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des XML-Dokuments immer im Voraus kennen. Sie möchten möglicherweise Zeilenumbrüche entfernen, wenn Sie `RegExp` verwenden, um in Bezug auf Zeilenumbrüche zu scannen. Diese Methode ist jedoch ein "letzter Ausweg", da sie wahrscheinlich fehlschlägt, wenn sich der XML-Code leicht ändert.

> **Hinweis:** `XMLHttpRequest` kann nun HTML für Sie interpretieren, indem Sie die Eigenschaft {{domxref("XMLHttpRequest.responseXML", "responseXML")}} verwenden. Lesen Sie den Artikel über [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest), um zu erfahren, wie das geht.

### Verarbeitung einer `responseText`-Eigenschaft, die ein HTML-Dokument enthält

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt einer externen HTML-Webseite abzurufen, ist die Eigenschaft {{domxref("XMLHttpRequest.responseText", "responseText")}} ein String, der das rohe HTML enthält. Dies könnte sich als schwierig zu manipulieren und analysieren erweisen. Es gibt drei Hauptmethoden, um diesen rohen HTML-String zu analysieren und zu parsen:

1. Verwenden Sie die Eigenschaft `XMLHttpRequest.responseXML`, wie im Artikel [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) behandelt.
2. Injizieren Sie den Inhalt in den Body eines [Document Fragments](/de/docs/Web/API/DocumentFragment) über `fragment.body.innerHTML` und durchqueren Sie das DOM des Fragments.
3. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt von `responseText` im Voraus kennen. Sie möchten möglicherweise Zeilenumbrüche entfernen, wenn Sie `RegExp` in Bezug auf Zeilenumbrüche scannen. Diese Methode ist jedoch ein "letzter Ausweg", da sie wahrscheinlich fehlschlägt, wenn sich der HTML-Code leicht ändert.

## Umgang mit Binärdaten

Obwohl {{domxref("XMLHttpRequest")}} am häufigsten verwendet wird, um Textdaten zu senden und zu empfangen, kann es auch verwendet werden, um binären Inhalt zu senden und zu empfangen. Es gibt verschiedene gut erprobte Methoden, um die Antwort einer `XMLHttpRequest` zum Senden binärer Daten zu zwingen. Diese beinhalten die Nutzung der Methode {{domxref("XMLHttpRequest.overrideMimeType", "overrideMimeType()")}} auf dem `XMLHttpRequest`-Objekt und stellen eine praktikable Lösung dar.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// Daten unverarbeitet als Binärstring abrufen
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

Allerdings gibt es mittlerweile modernere Techniken, da das Attribut {{domxref("XMLHttpRequest.responseType", "responseType")}} nun eine Reihe zusätzlicher Inhaltstypen unterstützt, was das Senden und Empfangen von Binärdaten erheblich erleichtert hat.

Betrachten Sie zum Beispiel diesen Schnipsel, der den `responseType` von "`arraybuffer`" verwendet, um den entfernten Inhalt in ein {{jsxref("ArrayBuffer")}}-Objekt abzurufen, das die Roh-Binärdaten speichert.

```js
const req = new XMLHttpRequest();

req.onload = (e) => {
  const arraybuffer = req.response; // nicht responseText
  /* … */
};
req.open("GET", url);
req.responseType = "arraybuffer";
req.send();
```

Für weitere Beispiele sehen Sie sich die Seite [Senden und Empfangen von Binärdaten](/de/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data) an.

## Fortschritt überwachen

`XMLHttpRequest` bietet die Möglichkeit, auf verschiedene Ereignisse zu hören, die während der Bearbeitung der Anfrage auftreten können. Dazu gehören regelmäßige Fortschrittsbenachrichtigungen, Fehlerbenachrichtigungen und so weiter.

Die Unterstützung für DOM-{{domxref("XMLHttpRequest/progress_event", "progress")}}-Ereignisüberwachung von `XMLHttpRequest`-Übertragungen folgt der [Spezifikation für Fortschrittsereignisse](https://xhr.spec.whatwg.org/#interface-progressevent): diese Ereignisse implementieren das {{domxref("ProgressEvent")}}-Interface. Die tatsächlichen Ereignisse, die Sie überwachen können, um den Status einer laufenden Übertragung zu ermitteln, sind:

- {{domxref("XMLHttpRequest/progress_event", "progress")}}
  - : Die Menge an Daten, die abgerufen wurden, hat sich geändert.
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : Die Übertragung ist abgeschlossen; alle Daten befinden sich nun in der `response`.

```js
const req = new XMLHttpRequest();

req.addEventListener("progress", updateProgress);
req.addEventListener("load", transferComplete);
req.addEventListener("error", transferFailed);
req.addEventListener("abort", transferCanceled);

req.open();

// …

// Fortschritt bei Übertragungen vom Server zum Client (Downloads)
function updateProgress(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    // …
  } else {
    // Fortschrittsinformationen können nicht berechnet werden, da die Gesamtgröße unbekannt ist
  }
}

function transferComplete(evt) {
  console.log("Die Übertragung ist abgeschlossen.");
}

function transferFailed(evt) {
  console.log("Beim Übertragen der Datei ist ein Fehler aufgetreten.");
}

function transferCanceled(evt) {
  console.log("Die Übertragung wurde vom Benutzer abgebrochen.");
}
```

Wir fügen Event Listener für die verschiedenen Ereignisse hinzu, die während einer Datenübertragung mit `XMLHttpRequest` gesendet werden.

> [!NOTE]
> Sie müssen die Event Listener hinzufügen, bevor Sie `open()` für die Anfrage aufrufen. Andernfalls werden die `progress`-Ereignisse nicht ausgelöst.

Der Fortschrittsereignis-Handler, der durch die Funktion `updateProgress()` in diesem Beispiel spezifiziert wird, erhält die Gesamtzahl der zu übertragenden Bytes sowie die bisher übertragenen Bytes in den Feldern `total` und `loaded` des Ereignisses. Wenn jedoch das Feld `lengthComputable` false ist, ist die Gesamtlänge nicht bekannt und beträgt null.

Fortschrittsevents existieren sowohl für Download- als auch für Upload-Übertragungen. Die Download-Ereignisse werden direkt am `XMLHttpRequest`-Objekt selbst ausgelöst, wie im obigen Beispiel gezeigt. Die Upload-Ereignisse werden am `XMLHttpRequest.upload`-Objekt ausgelöst, wie unten gezeigt:

```js
const req = new XMLHttpRequest();

req.upload.addEventListener("progress", updateProgress);
req.upload.addEventListener("load", transferComplete);
req.upload.addEventListener("error", transferFailed);
req.upload.addEventListener("abort", transferCanceled);

req.open();
```

> [!NOTE]
> Progress Events sind nicht verfügbar für das
> `file:`-Protokoll.

Fortschrittsevents werden für jedes Datenstück empfangen, einschließlich des letzten Stücks in Fällen, in denen das letzte Paket empfangen und die Verbindung geschlossen wird, bevor das Progress Event ausgelöst wird. In diesem Fall wird das Progress Event automatisch ausgelöst, wenn das Load Event für dieses Paket auftritt. Dies ermöglicht es Ihnen, den Fortschritt nun zuverlässig zu überwachen, indem Sie nur das "progress"-Ereignis beobachten.

Man kann auch alle drei Ladebedingungen (`abort`, `load` oder `error`) mit dem `loadend`-Ereignis erkennen:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "Die Übertragung ist abgeschlossen (obwohl wir nicht wissen, ob sie erfolgreich war oder nicht)."
  );
}
```

Beachten Sie, dass es keine Möglichkeit gibt, mit den Informationen, die durch das `loadend`-Ereignis erhalten werden, sicher zu sein, welcher Zustand die Operation beendet hat; Sie können dies jedoch verwenden, um Aufgaben zu behandeln, die in allen End-of-Transfer-Szenarien durchgeführt werden müssen.

## Letztes Änderungsdatum erhalten

```js
function getHeaderTime() {
  console.log(this.getResponseHeader("Last-Modified")); // Ein gültiges GMTString-Datum oder null
}

const req = new XMLHttpRequest();
req.open(
  "HEAD", // Verwenden Sie HEAD, wenn Sie nur die Header benötigen
  "yourpage.html",
);
req.onload = getHeaderTime;
req.send();
```

### Etwas tun, wenn das letzte Änderungsdatum sich ändert

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
  req.open("HEAD" /* Verwenden Sie HEAD - wir benötigen nur die Header! */, URL);
  req.callback = callback;
  req.filepath = URL;
  req.onload = getHeaderTime;
  req.send();
}
```

Und um zu testen:

```js
// Lassen Sie uns die Datei "yourpage.html" testen
ifHasChanged("yourpage.html", function (modified, visit) {
  console.log(
    `Die Seite '${this.filepath}' wurde am ${new Date(
      modified,
    ).toLocaleString()}! geändert.`,
  );
});
```

Wenn Sie wissen möchten, ob sich die aktuelle Seite geändert hat, lesen Sie den Artikel über {{domxref("document.lastModified")}}.

## Cross-site XMLHttpRequest

Moderne Browser unterstützen Cross-Site-Anfragen, indem sie den [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS) (CORS) Standard implementieren. Solange der Server so konfiguriert ist, dass er Anfragen von der Ursprungsdomäne Ihrer Webanwendung zulässt, wird `XMLHttpRequest` funktionieren. Andernfalls wird eine `INVALID_ACCESS_ERR`-Ausnahme ausgelöst.

## Umgehen des Caches

Eine plattformübergreifende Methode, um den Cache zu umgehen, besteht darin, einen Zeitstempel an die URL anzuhängen und sicherzustellen, dass ein "?" oder "&" enthalten ist, wie angemessen. Zum Beispiel:

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

Da der lokale Cache nach URL indexiert wird, führt dies dazu, dass jede Anfrage einzigartig ist und dadurch den Cache umgeht.

Sie können URLs automatisch mit dem folgenden Code anpassen:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Sicherheit

Der empfohlene Weg, um Cross-Site-Scripting zu aktivieren, ist die Verwendung des `Access-Control-Allow-Origin` HTTP-Headers in der Antwort auf das XMLHttpRequest.

### XMLHttpRequests werden gestoppt

Wenn Sie mit einer XMLHttpRequest enden, die `status=0` und `statusText=null` empfängt, bedeutet dies, dass die Anfrage nicht ausgeführt werden durfte. Es war [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Eine wahrscheinliche Ursache hierfür ist, wenn sich der [`XMLHttpRequest`-Ursprung](https://www.w3.org/TR/2010/CR-XMLHttpRequest-20100803/#xmlhttprequest-origin) (beim Erstellen der XMLHttpRequest) ändert, wenn die XMLHttpRequest dann `open()` ist. Dieser Fall kann auftreten, zum Beispiel, wenn man eine XMLHttpRequest hat, die bei einem onUnload-Ereignis für ein Fenster ausgelöst wird, die erwartete XMLHttpRequest erstellt wird, wenn das zu schließende Fenster noch da ist, und schließlich die Anfrage gesendet wird (in anderen Worten: `open()`), wenn dieses Fenster seinen Fokus verloren hat und ein anderes Fenster den Fokus erhält. Der effektivste Weg, dieses Problem zu vermeiden, besteht darin, einen Listener für das {{domxref("Element/DOMActivate_event", "DOMActivate")}}-Ereignis des neuen Fensters zu setzen, das gesetzt wird, sobald das beendete Fenster sein {{domxref("Window/unload_event", "unload")}}-Ereignis ausgelöst hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/CORS)
- [XMLHttpRequest - REST und das Rich User Experience](https://www.peej.co.uk/articles/rich-user-experience.html)
- [Das `XMLHttpRequest`-Objekt: WHATWG-Spezifikation](https://xhr.spec.whatwg.org/)
