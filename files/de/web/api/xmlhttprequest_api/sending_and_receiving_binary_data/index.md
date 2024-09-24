---
title: Senden und Empfangen von Binärdaten
slug: Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Die `responseType`-Eigenschaft des XMLHttpRequest-Objekts kann festgelegt werden, um den erwarteten Antworttyp vom Server zu ändern. Mögliche Werte sind der leere String (Standard), `"arraybuffer"`, `"blob"`, `"document"`, `"json"` und `"text"`. Die `response`-Eigenschaft wird den Entitätskörper entsprechend dem `responseType` als `ArrayBuffer`, `Blob`, `Document`, `JSON` oder String enthalten. Dies ist `null`, wenn die Anfrage nicht abgeschlossen oder nicht erfolgreich war.

Dieses Beispiel liest ein Bild als Binärdatei und erstellt ein Array aus 8-Bit-Unsigned-Integern aus den Rohbytes. Beachten Sie, dass dies das Bild nicht dekodieren und die Pixel nicht lesen wird. Sie benötigen dafür eine [png-Dekodierungsbibliothek](https://github.com/foliojs/png.js).

```js
const req = new XMLHttpRequest();
req.open("GET", "/myfile.png", true);
req.responseType = "arraybuffer";

req.onload = (event) => {
  const arrayBuffer = req.response; // Hinweis: nicht req.responseText
  if (arrayBuffer) {
    const byteArray = new Uint8Array(arrayBuffer);
    byteArray.forEach((element, index) => {
      // Etwas tun mit jedem Byte im Array
    });
  }
};

req.send(null);
```

Sie können auch eine Binärdatei als {{domxref("Blob")}} lesen, indem Sie den String `"blob"` auf die `responseType`-Eigenschaft setzen.

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

## Empfangen von Binärdaten in älteren Browsern

Die unten gezeigte `loadBinaryResource()`-Funktion lädt Binärdaten von der angegebenen URL und gibt sie an den Aufrufer zurück.

```js
function loadBinaryResource(url) {
  const req = new XMLHttpRequest();
  req.open("GET", url, false);

  // XHR binary charset opt von Marcus Granado 2006 [http://mgran.blogspot.com]
  req.overrideMimeType("text/plain; charset=x-user-defined");
  req.send(null);
  return req.status === 200 ? req.responseText : "";
}
```

Der Trick erfolgt in der `overrideMimeType`-Funktion, die den Browser zwingt, es als Klartext zu behandeln, unter Verwendung eines benutzerdefinierten Zeichensatzes. Dies weist den Browser an, es nicht zu parsen und die Bytes unverarbeitet durchzulassen.

```js
const filestream = loadBinaryResource(url);
const abyte = filestream.charCodeAt(x) & 0xff; // höherwertiges Byte (f7) verwerfen
```

Das obige Beispiel holt das Byte an der Stelle `x` innerhalb der geladenen Binärdaten. Der gültige Bereich für `x` reicht von 0 bis `filestream.length-1`.

Siehe [Herunterladen von Binärdatenströmen mit XMLHttpRequest](https://web.archive.org/web/20071103070418/http://mgran.blogspot.com/2006/08/downloading-binary-streams-with.html) für eine ausführliche Erklärung.

## Senden von Binärdaten

Die `send`-Methode des XMLHttpRequest wurde erweitert, um die Übertragung von Binärdaten zu erleichtern, indem sie ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), {{domxref("Blob")}} oder {{domxref("File")}}-Objekt akzeptiert.

Das folgende Beispiel erstellt dynamisch eine Textdatei und verwendet die `POST`-Methode, um die "Datei" zum Server zu senden. Dieses Beispiel verwendet Klartext, aber Sie können sich vorstellen, dass die Daten stattdessen eine Binärdatei sind.

```js
const req = new XMLHttpRequest();
req.open("POST", url, true);
req.onload = (event) => {
  // Hochgeladen
};

const blob = new Blob(["abc123"], { type: "text/plain" });

req.send(blob);
```

## Senden von getypten Arrays als Binärdaten

Sie können auch JavaScript-typed arrays als Binärdaten senden.

```js
// Erstellen Sie ein neues Array mit falschen Daten (aufeinanderfolgende Zahlen (0 - 255), zurücksetzend auf 0)
const array = new Uint8Array(512).map((v, i) => i);

const xhr = new XMLHttpRequest();
xhr.open("POST", url, false);
xhr.send(array);
```

Hier wird ein 512-Byte-Array von 8-Bit-Integern erstellt und gesendet; Sie können natürlich beliebige Binärdaten verwenden.

## Formulare absenden und Dateien hochladen

Siehe [`FormData`](/de/docs/Web/API/FormData).
