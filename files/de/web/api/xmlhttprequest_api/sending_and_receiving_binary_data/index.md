---
title: Senden und Empfangen von Binärdaten
slug: Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Die Eigenschaft `responseType` des XMLHttpRequest-Objekts kann gesetzt werden, um den erwarteten Antworttyp vom Server zu ändern. Mögliche Werte sind der leere String (Standard), `"arraybuffer"`, `"blob"`, `"document"`, `"json"` und `"text"`. Die Eigenschaft `response` enthält den Entitätskörper entsprechend `responseType`, als `ArrayBuffer`, `Blob`, `Document`, `JSON` oder String. Dies ist `null`, wenn die Anfrage nicht abgeschlossen oder nicht erfolgreich war.

Dieses Beispiel liest ein Bild als Binärdatei und erstellt ein 8-Bit-Unsigned-Integer-Array aus den Rohbytes. Beachten Sie, dass dies das Bild nicht dekodieren und die Pixel lesen wird. Sie benötigen dafür eine [png-Dekodierungsbibliothek](https://github.com/foliojs/png.js).

```js
const req = new XMLHttpRequest();
req.open("GET", "/myfile.png", true);
req.responseType = "arraybuffer";

req.onload = (event) => {
  const arrayBuffer = req.response; // Note: not req.responseText
  if (arrayBuffer) {
    const byteArray = new Uint8Array(arrayBuffer);
    byteArray.forEach((element, index) => {
      // do something with each byte in the array
    });
  }
};

req.send(null);
```

Sie können auch eine Binärdatei als [`Blob`](/de/docs/Web/API/Blob) lesen, indem Sie den String `"blob"` für die Eigenschaft `responseType` setzen.

```js
const req = new XMLHttpRequest();
req.open("GET", "/myfile.png", true);
req.responseType = "blob";

req.onload = (event) => {
  const blob = req.response;
  // ...
};

req.send();
```

## Empfang von Binärdaten in älteren Browsern

Die unten gezeigte Funktion `loadBinaryResource()` lädt Binärdaten von der angegebenen URL und gibt sie an den Aufrufer zurück.

```js
function loadBinaryResource(url) {
  const req = new XMLHttpRequest();
  req.open("GET", url, false);

  // XHR binary charset opt by Marcus Granado 2006 [http://mgran.blogspot.com]
  req.overrideMimeType("text/plain; charset=x-user-defined");
  req.send(null);
  return req.status === 200 ? req.responseText : "";
}
```

Die Magie passiert in der Funktion `overrideMimeType`, die den Browser zwingt, es als einfachen Text zu behandeln, unter Verwendung eines benutzerdefinierten Zeichensatzes. Dies weist den Browser an, es nicht zu parsen und die Bytes unbearbeitet durchzulassen.

```js
const fileStream = loadBinaryResource(url);
const lowestByte = fileStream.charCodeAt(x) & 0xff; // throw away high-order byte (f7)
```

Das obige Beispiel holt das Byte bei Offset `x` innerhalb der geladenen Binärdaten. Der gültige Bereich für `x` reicht von 0 bis `fileStream.length-1`.

Siehe [Herunterladen von Binärstreams mit XMLHttpRequest](https://web.archive.org/web/20071103070418/http://mgran.blogspot.com/2006/08/downloading-binary-streams-with.html) für eine detaillierte Erklärung.

## Senden von Binärdaten

Die Methode `send` von XMLHttpRequest wurde erweitert, um die einfache Übertragung von Binärdaten zu ermöglichen, indem ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File)-Objekt akzeptiert wird.

Das folgende Beispiel erstellt eine Textdatei "on-the-fly" und verwendet die `POST`-Methode, um die "Datei" an den Server zu senden. Dieses Beispiel verwendet Klartext, aber Sie können sich vorstellen, dass die Daten stattdessen eine Binärdatei sind.

```js
const req = new XMLHttpRequest();
req.open("POST", url, true);
req.onload = (event) => {
  // Uploaded
};

const blob = new Blob(["abc123"], { type: "text/plain" });

req.send(blob);
```

## Senden von typisierten Arrays als Binärdaten

Sie können auch JavaScript-typisierte Arrays als Binärdaten senden.

```js
// Create a new array with fake data (Consecutive numbers (0 - 255), looping back to 0)
const array = new Uint8Array(512).map((v, i) => i);

const xhr = new XMLHttpRequest();
xhr.open("POST", url, false);
xhr.send(array);
```

Dies baut ein 512-Byte-Array von 8-Bit-Integern und sendet es; Sie können natürlich beliebige Binärdaten verwenden, die Sie möchten.

## Senden von Formularen und Hochladen von Dateien

Siehe [`FormData`](/de/docs/Web/API/FormData).
