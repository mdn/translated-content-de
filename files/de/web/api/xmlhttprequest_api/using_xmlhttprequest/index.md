---
title: Nutzung von XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

In diesem Leitfaden betrachten wir, wie man [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet, um [HTTP](/de/docs/Web/HTTP)-Anfragen zu stellen, um Daten zwischen der Website und einem Server auszutauschen.

Beispiele für sowohl häufige als auch weniger bekannte Anwendungsfälle für `XMLHttpRequest` sind enthalten.

Um eine HTTP-Anfrage zu senden:

1. Erstellen Sie ein `XMLHttpRequest`-Objekt.
2. Öffnen Sie eine URL.
3. Senden Sie die Anfrage.

Nach Abschluss der Transaktion enthält das `XMLHttpRequest`-Objekt nützliche Informationen, wie den Antwortinhalt und den [HTTP-Status](/de/docs/Web/HTTP/Status) des Ergebnisses.

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

Eine Anfrage, die über `XMLHttpRequest` gestellt wird, kann die Daten auf zwei Arten abrufen, asynchron oder synchron. Die Art der Anfrage wird durch das optionale `async`-Argument (das dritte Argument) festgelegt, das in der Methode [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) gesetzt wird. Wenn dieses Argument `true` oder nicht angegeben ist, wird das `XMLHttpRequest` asynchron verarbeitet, andernfalls wird der Vorgang synchron behandelt. Eine ausführliche Diskussion und Demonstrationen dieser beiden Arten von Anfragen finden Sie auf der Seite [synchronous and asynchronous requests](/de/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests). Sie können keine synchronen Anfragen außerhalb von Web-Workern verwenden, da dies die Hauptschnittstelle einfrieren würde.

> [!NOTE]
> Der Konstruktor `XMLHttpRequest` ist nicht nur auf XML-Dokumente beschränkt. Er beginnt mit **"XML"**, weil zur Zeit seiner Erstellung das Hauptformat für den asynchronen Datenaustausch XML war.

## Umgang mit Antworten

Es gibt mehrere Arten von [Antwortattributen](https://xhr.spec.whatwg.org/), die für den [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)-Konstruktor definiert sind. Diese geben dem Client, der das `XMLHttpRequest` durchführt, wichtige Informationen über den Status der Antwort. Einige Fälle, in denen der Umgang mit Nicht-Text-Antworttypen eine gewisse Manipulation und Analyse erfordert, sind in den folgenden Abschnitten beschrieben.

### Analyse und Manipulation der responseXML-Eigenschaft

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt eines entfernten XML-Dokuments abzurufen, wird die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft ein DOM-Objekt enthalten, das ein geparstes XML-Dokument darstellt. Dies könnte sich als schwierig erweisen, zu manipulieren und zu analysieren. Es gibt vier primäre Wege, dieses XML-Dokument zu analysieren:

1. Verwendung von [XPath](/de/docs/Web/XPath), um Teile davon anzusprechen (oder darauf zu verweisen).
2. Manuelles [Parse und Serialisieren von XML](/de/docs/Web/XML/Parsing_and_serializing_XML) zu Strings oder Objekten.
3. Verwendung von [`XMLSerializer`](/de/docs/Web/API/XMLSerializer), um **DOM-Bäume in Strings oder Dateien zu serialisieren**.
4. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des XML-Dokuments im Voraus kennen. Sie könnten Zeilenumbrüche entfernen wollen, wenn Sie `RegExp` verwenden, um im Hinblick auf Zeilenumbrüche zu scannen. Diese Methode ist jedoch ein "letzter Ausweg", da sie bei einer geringfügigen Änderung des XML-Codes wahrscheinlich fehlschlagen wird.

> **Hinweis:** `XMLHttpRequest` kann jetzt HTML für Sie interpretieren, indem die [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft verwendet wird. Lesen Sie den Artikel über [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest), um zu erfahren, wie Sie dies tun.

### Verarbeitung einer `responseText`-Eigenschaft, die ein HTML-Dokument enthält

Wenn Sie `XMLHttpRequest` verwenden, um den Inhalt einer entfernten HTML-Webseite abzurufen, ist die [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText)-Eigenschaft ein String, der das rohe HTML enthält. Dies könnte sich als schwierig erweisen, zu manipulieren und zu analysieren. Es gibt drei primäre Wege, diesen rohen HTML-String zu analysieren und zu parsen:

1. Verwenden Sie die `XMLHttpRequest.responseXML`-Eigenschaft, wie im Artikel [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) behandelt.
2. Integrieren Sie den Inhalt in den Body eines [Dokumentfragments](/de/docs/Web/API/DocumentFragment) über `fragment.body.innerHTML` und durchlaufen Sie das DOM des Fragments.
3. {{jsxref("RegExp")}} kann verwendet werden, wenn Sie den Inhalt des HTML-`responseText` im Voraus kennen. Sie könnten Zeilenumbrüche entfernen wollen, wenn Sie `RegExp` verwenden, um im Hinblick auf Zeilenumbrüche zu scannen. Diese Methode ist jedoch ein "letzter Ausweg", da sie bei einer geringfügigen Änderung des HTML-Codes wahrscheinlich fehlschlagen wird.

## Umgang mit binären Daten

Obwohl [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) am häufigsten zum Senden und Empfangen von Textdaten verwendet wird, kann es auch zum Senden und Empfangen von Binärinhalten genutzt werden. Es gibt mehrere gut getestete Methoden, um die Antwort eines `XMLHttpRequest` zur Übertragung binärer Daten zu zwingen. Diese beinhalten die Verwendung der [`overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)-Methode auf dem `XMLHttpRequest`-Objekt und sind eine praktikable Lösung.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// retrieve data unprocessed as a binary string
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

Es stehen jedoch modernere Techniken zur Verfügung, da das [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)-Attribut jetzt mehrere zusätzliche Inhaltstypen unterstützt, was das Senden und Empfangen von Binärdaten erheblich erleichtert.

Zum Beispiel betrachten Sie dieses Snippet, das den `responseType` von `"arraybuffer"` verwendet, um den entfernten Inhalt in ein {{jsxref("ArrayBuffer")}}-Objekt zu laden, das die rohen Binärdaten speichert.

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

`XMLHttpRequest` bietet die Möglichkeit, auf verschiedene Ereignisse zu hören, die während der Bearbeitung der Anfrage auftreten können. Dies schließt regelmäßige Fortschrittsbenachrichtigungen, Fehlermeldungen und Ähnliches ein.

Die Unterstützung für DOM [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)-Ereignismonitoring von `XMLHttpRequest`-Übertragungen folgt der [Spezifikation für Fortschrittsereignisse](https://xhr.spec.whatwg.org/#interface-progressevent): Diese Ereignisse implementieren das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Interface. Die tatsächlichen Ereignisse, die Sie überwachen können, um den Zustand einer laufenden Übertragung zu bestimmen, sind:

- [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)
  - : Die Menge an abgerufenen Daten hat sich geändert.
- [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)
  - : Die Übertragung ist abgeschlossen; alle Daten sind jetzt in der `response`.

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

Wir fügen Ereignis-Listener für die verschiedenen Ereignisse hinzu, die während der Durchführung einer Datenübertragung mit `XMLHttpRequest` gesendet werden.

> [!NOTE]
> Sie müssen die Ereignis-Listener hinzufügen, bevor Sie `open()` auf die Anfrage aufrufen. Andernfalls werden die `progress`-Ereignisse nicht ausgelöst.

Der Fortschrittsereignis-Handler, der durch die `updateProgress()`-Funktion in diesem Beispiel angegeben wird, erhält die Gesamtanzahl der zu übertragenden Bytes sowie die bisher übertragenen Bytes in den Feldern `total` und `loaded` des Ereignisses. Wenn jedoch das Feld `lengthComputable` falsch ist, ist die Gesamtlänge unbekannt und wird null sein.

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
> Fortschrittsereignisse sind nicht für das
> `file:`-Protokoll verfügbar.

Fortschrittsereignisse kommen für jedes Datenstück herein, das empfangen wird, einschließlich des letzten Stücks, in Fällen, in denen das letzte Paket empfangen und die Verbindung geschlossen wird, bevor das Fortschrittsereignis ausgelöst wird. In diesem Fall wird das Fortschrittsereignis automatisch ausgelöst, wenn das Ladeereignis für dieses Paket eintritt. Dadurch können Sie den Fortschritt zuverlässig überwachen, indem Sie nur das "Fortschritt"-Ereignis beobachten.

Man kann auch alle drei Lade-Endbedingungen (`abort`, `load` oder `error`) mit dem `loadend`-Ereignis erkennen:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

Beachten Sie, dass es keine Möglichkeit gibt, aus den Informationen, die vom `loadend`-Ereignis empfangen werden, mit Sicherheit zu erkennen, welche Bedingung den Vorgang beendet hat; Sie können dies jedoch verwenden, um Aufgaben zu bearbeiten, die in allen End-of-Transfer-Szenarien erledigt werden müssen.

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

### Handeln, wenn sich das letzte Änderungsdatum ändert

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
      nModified,
    ).toLocaleString()}!`,
  );
});
```

Wenn Sie wissen möchten, ob die aktuelle Seite geändert wurde, lesen Sie den Artikel über [`document.lastModified`](/de/docs/Web/API/Document/lastModified).

## Cross-site XMLHttpRequest

Moderne Browser unterstützen Cross-Site-Anfragen durch Implementierung des [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS) (CORS)-Standards. Solange der Server so konfiguriert ist, dass er Anfragen von der Herkunft Ihrer Webanwendung zulässt, funktioniert `XMLHttpRequest`. Andernfalls wird eine `INVALID_ACCESS_ERR`-Ausnahme ausgelöst.

## Cache umgehen

Ein browserübergreifender Ansatz, um den Cache zu umgehen, besteht darin, einen Zeitstempel an die URL anzuhängen, wobei darauf zu achten ist, dass ein "?" oder "&" gegebenenfalls eingefügt wird. Zum Beispiel:

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

Da der lokale Cache durch die URL indiziert wird, führt dies dazu, dass jede Anfrage einzigartig ist, wodurch der Cache umgangen wird.

Sie können URLs automatisch mit dem folgenden Code anpassen:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Sicherheit

Der empfohlene Weg, um Cross-Site-Scripting zu ermöglichen, ist die Verwendung des `Access-Control-Allow-Origin`-HTTP-Headers in der Antwort auf die XMLHttpRequest.

### XMLHttpRequests werden gestoppt

Wenn Sie mit einer XMLHttpRequest abschließen, die `status=0` und `statusText=null` erhält, bedeutet dies, dass die Anfrage nicht erlaubt war. Sie war [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Ein wahrscheinlicher Grund dafür ist, wenn sich der [`XMLHttpRequest`-Ursprung](https://www.w3.org/TR/2010/CR-XMLHttpRequest-20100803/#xmlhttprequest-origin) (bei der Erstellung der XMLHttpRequest) geändert hat, als die XMLHttpRequest anschließend `open()` wird. Dies kann beispielsweise passieren, wenn man eine XMLHttpRequest hat, die bei einem `onunload`-Ereignis für ein Fenster ausgelöst wird, die erwartete XMLHttpRequest erstellt wird, wenn das zu schließende Fenster noch vorhanden ist und schließlich die Anfrage gesendet wird (mit anderen Worten `open()`), wenn dieses Fenster seinen Fokus verliert und ein anderes Fenster den Fokus erhält. Der effektivste Weg, dieses Problem zu vermeiden, besteht darin, einen Listener auf das [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event)-Ereignis des neuen Fensters zu setzen, das ausgelöst wird, sobald das beendete Fenster sein [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis trägt.

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
