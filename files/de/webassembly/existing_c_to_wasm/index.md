---
title: Ein vorhandenes C-Modul zu WebAssembly kompilieren
slug: WebAssembly/existing_C_to_Wasm
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Ein zentrales Anwendungsbeispiel für WebAssembly ist die Nutzung des bestehenden Ökosystems von C-Bibliotheken, um Entwickler in die Lage zu versetzen, sie im Web zu verwenden.

Diese Bibliotheken basieren häufig auf der Standardbibliothek von C, einem Betriebssystem, einem Dateisystem und anderen Dingen. Emscripten stellt die meisten dieser Funktionen bereit, obwohl es einige [Einschränkungen](https://emscripten.org/docs/porting/guidelines/api_limitations.html) gibt.

Als Beispiel wollen wir einen Encoder für WebP zu Wasm kompilieren. Der Quellcode des WebP-Codecs ist in C geschrieben und [auf GitHub verfügbar](https://github.com/webmproject/libwebp), sowie einige umfassende [API-Dokumentationen](https://developers.google.com/speed/webp/docs/api). Das ist ein ziemlich guter Ausgangspunkt.

```bash
git clone https://github.com/webmproject/libwebp
```

Um es einfach zu beginnen, exponieren Sie `WebPGetEncoderVersion()` aus `encode.h` zu JavaScript, indem Sie eine C-Datei namens `webp.c` schreiben:

```cpp
#include "emscripten.h"
#include "src/webp/encode.h"

EMSCRIPTEN_KEEPALIVE
int version() {
  return WebPGetEncoderVersion();
}
```

Dies ist ein gutes einfaches Programm, um zu testen, ob Sie den Quellcode von libwebp kompilieren können, da es keine Parameter oder komplexen Datenstrukturen benötigt, um diese Funktion aufzurufen.

Um dieses Programm zu kompilieren, müssen Sie dem Compiler mitteilen, wo er die Header-Dateien von libwebp finden kann, indem Sie das `-I`-Flag verwenden, und auch alle C-Dateien von libwebp übergeben, die er benötigt. Eine nützliche Strategie ist, ihm einfach **alle** C-Dateien zu geben und darauf zu vertrauen, dass der Compiler alles Überflüssige entfernt. Es scheint für diese Bibliothek hervorragend zu funktionieren:

```bash
emcc -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    -I libwebp \
    webp.c \
    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c \
    libwebp/sharpyuv/*.c
```

> [!NOTE]
> Diese Strategie wird nicht mit jedem C-Projekt funktionieren. Viele Projekte verlassen sich auf autoconf/automake, um systemabhängigen Code vor der Kompilierung zu generieren. Emscripten bietet `emconfigure` und `emmake`, um diese Befehle einzubinden und die entsprechenden Parameter einzufügen. Mehr dazu finden Sie in der [Emscripten-Dokumentation](https://emscripten.org/docs/compiling/Building-Projects.html).

Jetzt benötigen Sie nur noch etwas HTML und JavaScript, um Ihr neues Modul zu laden:

```html
<script src="./a.out.js"></script>
<script>
  Module.onRuntimeInitialized = async () => {
    const api = {
      version: Module.cwrap("version", "number", []),
    };
    console.log(api.version());
  };
</script>
```

Und Sie werden die korrekte Versionsnummer im [Ausgang](https://googlechrome.github.io/samples/webassembly/version.html) sehen:

![Screenshot der DevTools-Konsole, die die korrekte Versionsnummer zeigt.](version.png)

> [!NOTE]
> libwebp gibt die aktuelle Version a.b.c als hexadezimale Zahl 0xabc zurück. Zum Beispiel wird v0.6.1 als 0x000601 = 1537 kodiert.

### Ein Bild von JavaScript in Wasm bringen

Die Versionsnummer des Encoders zu erhalten, ist großartig, aber ein tatsächliches Bild zu kodieren, wäre beeindruckender. Wie machen wir das?

Die erste Frage, die Sie beantworten müssen, ist: Wie bekomme ich das Bild in Wasm? Wenn Sie sich die [Codierungs-API von libwebp](https://developers.google.com/speed/webp/docs/api#simple_encoding_api) ansehen, werden Sie feststellen, dass sie ein Array von Bytes in RGB, RGBA, BGR oder BGRA erwartet. Glücklicherweise hat die Canvas-API {{domxref("CanvasRenderingContext2D.getImageData")}} — die Ihnen ein {{jsxref("Uint8ClampedArray")}} mit den Bilddaten in RGBA gibt:

```js
async function loadImage(src) {
  // Bild laden
  const imgBlob = await fetch(src).then((resp) => resp.blob());
  const img = await createImageBitmap(imgBlob);
  // Canvas in der gleichen Größe wie das Bild machen
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  // Bild auf Canvas zeichnen
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, img.width, img.height);
}
```

Nun ist es "nur" eine Frage des Kopierens der Daten von JavaScript nach Wasm. Dafür müssen Sie zwei zusätzliche Funktionen exponieren — eine, die Speicher für das Bild in Wasm allokiert und eine, die ihn wieder frei gibt:

```cpp
#include <stdlib.h> // erforderlich für malloc-Definition

EMSCRIPTEN_KEEPALIVE
uint8_t* create_buffer(int width, int height) {
  return malloc(width * height * 4 * sizeof(uint8_t));
}

EMSCRIPTEN_KEEPALIVE
void destroy_buffer(uint8_t* p) {
  free(p);
}
```

Die `create_buffer()`-Funktion allokiert einen Puffer für das RGBA-Bild — daher 4 Bytes pro Pixel. Der durch `malloc()` zurückgegebene Zeiger ist die Adresse der ersten Speicherzelle dieses Puffers. Wenn der Zeiger in das JavaScript-Land zurückgegeben wird, wird er einfach als Zahl behandelt. Nachdem die Funktion mit cwrap in JavaScript exponiert wurde, können Sie diese Zahl verwenden, um den Start unseres Puffers zu finden und die Bilddaten zu kopieren:

```js
const api = {
  version: Module.cwrap("version", "number", []),
  create_buffer: Module.cwrap("create_buffer", "number", ["number", "number"]),
  destroy_buffer: Module.cwrap("destroy_buffer", "", ["number"]),
  encode: Module.cwrap("encode", "", ["number", "number", "number", "number"]),
  free_result: Module.cwrap("free_result", "", ["number"]),
  get_result_pointer: Module.cwrap("get_result_pointer", "number", []),
  get_result_size: Module.cwrap("get_result_size", "number", []),
};

const image = await loadImage("./image.jpg");
const p = api.create_buffer(image.width, image.height);
Module.HEAP8.set(image.data, p);
// ... Encoder aufrufen ...
api.destroy_buffer(p);
```

### Das Bild kodieren

Das Bild ist jetzt in Wasm verfügbar. Es ist Zeit, den WebP-Encoder zu seinem Job aufzufordern. Wenn Sie sich die [WebP-Dokumentation](https://developers.google.com/speed/webp/docs/api#simple_encoding_api) ansehen, werden Sie feststellen, dass `WebPEncodeRGBA` perfekt passt. Die Funktion nimmt einen Zeiger auf das Eingabebild und seine Dimensionen sowie eine Qualitätsoption zwischen 0 und 100 entgegen. Sie allokiert auch einen Ausgabepuffer für uns, den wir mit `WebPFree()` freigeben müssen, sobald wir mit dem WebP-Bild fertig sind.

Das Ergebnis der Kodierungsoperation ist ein Ausgabepuffer und seine Länge. Da Funktionen in C keine Arrays als Rückgabetypen haben können (es sei denn, Sie allokieren Speicher dynamisch), greift dieses Beispiel auf ein statisches globales Array zurück. Das ist vielleicht kein sauberes C. Tatsächlich beruht es darauf, dass Wasm-Zeiger 32 Bit breit sind. Aber das ist ein fairer Kompromiss, um die Dinge einfach zu halten:

```cpp
int result[2];
EMSCRIPTEN_KEEPALIVE
void encode(uint8_t* img_in, int width, int height, float quality) {
  uint8_t* img_out;
  size_t size;

  size = WebPEncodeRGBA(img_in, width, height, width * 4, quality, &img_out);

  result[0] = (int)img_out;
  result[1] = size;
}

EMSCRIPTEN_KEEPALIVE
void free_result(uint8_t* result) {
  WebPFree(result);
}

EMSCRIPTEN_KEEPALIVE
int get_result_pointer() {
  return result[0];
}

EMSCRIPTEN_KEEPALIVE
int get_result_size() {
  return result[1];
}
```

Jetzt, mit all dem im Platz, können Sie die Kodierungsfunktion aufrufen, den Zeiger und die Bildgröße greifen, es in einen eigenen JavaScript-Puffer kopieren und alle während des Prozesses in Wasm allokierten Puffer freigeben:

```js
api.encode(p, image.width, image.height, 100);
const resultPointer = api.get_result_pointer();
const resultSize = api.get_result_size();
const resultView = new Uint8Array(
  Module.HEAP8.buffer,
  resultPointer,
  resultSize,
);
const result = new Uint8Array(resultView);
api.free_result(resultPointer);
```

> **Hinweis:** `new Uint8Array(someBuffer)` wird eine neue Ansicht auf denselben Speicherbereich erstellen, während `new Uint8Array(someTypedArray)` die Daten kopieren wird.

Je nach Größe Ihres Bildes könnten Sie auf einen Fehler stoßen, bei dem Wasm den Speicher nicht genügend erweitern kann, um sowohl das Eingabe- als auch das Ausgabebild unterzubringen:

![Screenshot der DevTools-Konsole, die einen Fehler zeigt.](error.png)

Glücklicherweise liegt die Lösung dieses Problems in der Fehlermeldung. Sie müssen nur `-s ALLOW_MEMORY_GROWTH=1` zu Ihrem Kompilierbefehl hinzufügen.

Und da haben Sie es. Sie haben einen WebP-Encoder kompiliert und ein JPEG-Bild in WebP transkodiert. Um zu beweisen, dass es funktioniert hat, verwandeln Sie Ihren Ergebnispuffer in ein Blob und verwenden es in einem `<img>`-Element:

```js
const blob = new Blob([result], { type: "image/webp" });
const blobURL = URL.createObjectURL(blob);
const img = document.createElement("img");
img.src = blobURL;
img.alt = "eine nützliche Beschreibung";
document.body.appendChild(img);
```

Bewundern Sie den Glanz eines neuen WebP-Bildes.

[Demo](https://googlechrome.github.io/samples/webassembly/image.html) | [Ursprünglicher Artikel](https://web.dev/articles/emscripting-a-c-library)

![DevTools Netzwerk-Panel und das generierte Bild.](result.jpg)
