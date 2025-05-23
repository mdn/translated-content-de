---
title: Kompilieren eines bestehenden C-Moduls zu WebAssembly
slug: WebAssembly/Guides/Existing_C_to_Wasm
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

Ein zentraler Anwendungsfall für WebAssembly ist es, das bestehende Ökosystem von C-Bibliotheken zu nutzen und Entwicklern zu ermöglichen, diese im Web zu verwenden.

Diese Bibliotheken stützen sich oft auf die Standardbibliothek von C, ein Betriebssystem, ein Dateisystem und weitere Komponenten. Emscripten bietet die meisten dieser Funktionen, obwohl es einige [Einschränkungen](https://emscripten.org/docs/porting/guidelines/api_limitations.html) gibt.

Als Beispiel wollen wir einen Encoder für WebP in Wasm kompilieren. Der Quellcode für den WebP-Codec ist in C geschrieben und sowohl auf [GitHub](https://github.com/webmproject/libwebp) als auch als umfassende [API-Dokumentation](https://developers.google.com/speed/webp/docs/api) verfügbar. Das ist ein ziemlich guter Ausgangspunkt.

```bash
git clone https://github.com/webmproject/libwebp
```

Um einfach zu beginnen, exponieren Sie `WebPGetEncoderVersion()` aus `encode.h` zu JavaScript, indem Sie eine C-Datei namens `webp.c` schreiben:

```c
#include "emscripten.h"
#include "src/webp/encode.h"

EMSCRIPTEN_KEEPALIVE
int version() {
    return WebPGetEncoderVersion();
}
```

Dies ist ein einfaches Programm, um zu testen, ob der Quellcode von libwebp kompiliert werden kann, da es keine Parameter oder komplexe Datenstrukturen benötigt, um diese Funktion aufzurufen.

Um dieses Programm zu kompilieren, müssen Sie dem Compiler mitteilen, wo er die Header-Dateien von libwebp mit dem `-I` Flag finden kann und ihm alle C-Dateien von libwebp übergeben, die es benötigt. Eine nützliche Strategie ist es, ihm **alle** C-Dateien zu geben und sich darauf zu verlassen, dass der Compiler alles Überflüssige entfernt. Diese Methode funktioniert für diese Bibliothek hervorragend:

```bash
emcc -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    -I libwebp \
    webp.c \
    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c \
    libwebp/sharpyuv/*.c
```

> [!NOTE]
> Diese Strategie wird nicht mit jedem C-Projekt funktionieren. Viele Projekte sind auf autoconf/automake angewiesen, um systemspezifischen Code vor der Kompilierung zu generieren. Emscripten stellt `emconfigure` und `emmake` bereit, um diese Befehle zu umschließen und die entsprechenden Parameter einzuschleusen. Mehr dazu finden Sie in der [Emscripten-Dokumentation](https://emscripten.org/docs/compiling/Building-Projects.html).

Nun benötigen Sie nur noch etwas HTML und JavaScript, um Ihr neues Modul zu laden:

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

Und Sie werden die korrekte Versionsnummer in der [Ausgabe](https://googlechrome.github.io/samples/webassembly/version.html) sehen:

![Screenshot der DevTools-Konsole, die die korrekte Versionsnummer zeigt.](version.png)

> [!NOTE]
> libwebp gibt die aktuelle Version a.b.c als hexadezimale Zahl 0xabc zurück. Beispielsweise wird v0.6.1 als 0x000601 = 1537 kodiert.

### Ein Bild von JavaScript in Wasm bringen

Die Version des Encoders abzurufen ist großartig, aber ein tatsächliches Bild zu kodieren wäre beeindruckender. Wie machen wir das?

Die erste Frage, die Sie beantworten müssen, ist: Wie bringe ich das Bild in Wasm? Wenn Sie die [Kodierungs-API von libwebp](https://developers.google.com/speed/webp/docs/api#simple_encoding_api) betrachten, werden Sie feststellen, dass es ein Array von Bytes in RGB, RGBA, BGR oder BGRA erwartet. Glücklicherweise hat die Canvas API [`CanvasRenderingContext2D.getImageData`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) — das Ihnen ein {{jsxref("Uint8ClampedArray")}} gibt, das die Bilddaten in RGBA enthält:

```js
async function loadImage(src) {
  // Load image
  const imgBlob = await fetch(src).then((resp) => resp.blob());
  const img = await createImageBitmap(imgBlob);
  // Make canvas same size as image
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  // Draw image onto canvas
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, img.width, img.height);
}
```

Jetzt geht es "nur noch" darum, die Daten von JavaScript in Wasm zu kopieren. Dafür müssen Sie zwei zusätzliche Funktionen exponieren — eine, die Speicher für das Bild in Wasm allokiert, und eine, die ihn wieder freigibt:

```c
#include <stdlib.h> // required for malloc definition

EMSCRIPTEN_KEEPALIVE
uint8_t* create_buffer(int width, int height) {
    return malloc(width * height * 4 * sizeof(uint8_t));
}

EMSCRIPTEN_KEEPALIVE
void destroy_buffer(uint8_t* p) {
    free(p);
}
```

Die Funktion `create_buffer()` allokiert einen Puffer für das RGBA-Bild — daher 4 Bytes pro Pixel. Der von `malloc()` zurückgegebene Zeiger ist die Adresse der ersten Speicherzelle dieses Puffers. Wenn der Zeiger nach JavaScript übergeben wird, wird er nur als Zahl behandelt. Nachdem Sie die Funktion mittels cwrap in JavaScript exponiert haben, können Sie diese Zahl verwenden, um den Anfang unseres Puffers zu finden und die Bilddaten zu kopieren:

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
// … call encoder …
api.destroy_buffer(p);
```

### Das Bild kodieren

Das Bild ist jetzt in Wasm verfügbar. Es ist an der Zeit, den WebP-Encoder seine Arbeit machen zu lassen. Beim Blick auf die [WebP-Dokumentation](https://developers.google.com/speed/webp/docs/api#simple_encoding_api) werden Sie feststellen, dass `WebPEncodeRGBA` perfekt geeignet scheint. Die Funktion benötigt einen Zeiger auf das Eingabebild und dessen Abmessungen sowie eine Qualitätsoption zwischen 0 und 100. Sie allokiert auch einen Ausgabepuffer für uns, den wir mit `WebPFree()` freigeben müssen, sobald wir mit dem WebP-Bild fertig sind.

Das Ergebnis des Kodierungsvorgangs ist ein Ausgabepuffer und seine Länge. Da Funktionen in C keine Arrays als Rückgabewerte haben können (es sei denn, Sie allokieren den Speicher dynamisch), greift dieses Beispiel auf ein statisches globales Array zurück. Dies ist möglicherweise kein sauberer C-Code. In der Tat hängt es davon ab, dass Wasm-Zeiger 32 Bit breit sind. Aber das ist ein fairer Kompromiss, um die Dinge einfach zu halten:

```c
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

Nun, mit all dem im Platz, können Sie die Kodierungsfunktion aufrufen, den Zeiger und die Bildgröße greifen, ihn in einen eigenen JavaScript-Puffer stecken und alle in diesem Prozess allokierten Wasm-Puffer freigeben:

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

> **Hinweis:** `new Uint8Array(someBuffer)` erstellt eine neue Ansicht auf das gleiche Speicherstück, während `new Uint8Array(someTypedArray)` die Daten kopiert.

Je nach Größe Ihres Bildes könnten Sie auf einen Fehler stoßen, bei dem Wasm den Speicher nicht genug erweitern kann, um sowohl das Eingabe- als auch das Ausgabebild aufzunehmen:

![Screenshot der DevTools-Konsole, die einen Fehler zeigt.](error.png)

Glücklicherweise befindet sich die Lösung für dieses Problem in der Fehlermeldung. Sie müssen nur `-s ALLOW_MEMORY_GROWTH=1` zu Ihrem Kompilierungsbefehl hinzufügen.

Und da haben Sie es. Sie haben einen WebP-Encoder kompiliert und ein JPEG-Bild in WebP transkodiert. Um zu beweisen, dass es funktioniert hat, machen Sie aus Ihrem Ergebnis-Puffer ein Blob und verwenden Sie es in einem `<img>`-Element:

```js
const blob = new Blob([result], { type: "image/webp" });
const blobURL = URL.createObjectURL(blob);
const img = document.createElement("img");
img.src = blobURL;
img.alt = "a useful description";
document.body.appendChild(img);
```

Sehen Sie, die Herrlichkeit eines neuen WebP-Bildes.

[Demo](https://googlechrome.github.io/samples/webassembly/image.html) | [Originalartikel](https://web.dev/articles/emscripting-a-c-library)

![DevTools Netzwerkanzeige und das erzeugte Bild.](result.jpg)
