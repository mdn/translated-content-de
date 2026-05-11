---
title: Kompilieren eines vorhandenen C-Moduls zu WebAssembly
slug: WebAssembly/Guides/Existing_C_to_Wasm
l10n:
  sourceCommit: e54ef84a31b80e3ac108397f61120728fd9654bc
---

Ein Hauptanwendungsfall für WebAssembly besteht darin, das bestehende Ökosystem von C-Bibliotheken zu nutzen und Entwicklern die Verwendung im Web zu ermöglichen.

Diese Bibliotheken verlassen sich oft auf die Standardbibliothek von C, ein Betriebssystem, ein Dateisystem und andere Dinge. Emscripten bietet die meisten dieser Funktionen, obwohl es einige [Einschränkungen](https://emscripten.org/docs/porting/guidelines/api_limitations.html) gibt.

Als Beispiel kompilieren wir einen Encoder für WebP zu Wasm. Der Quellcode für den WebP-Codec ist in C geschrieben und [auf GitHub verfügbar](https://github.com/webmproject/libwebp) sowie eine umfangreiche [API-Dokumentation](https://developers.google.com/speed/webp/docs/api). Das ist ein ziemlich guter Ausgangspunkt.

```bash
git clone https://github.com/webmproject/libwebp
```

Um einfach zu beginnen, veröffentlichen Sie `WebPGetEncoderVersion()` aus `encode.h` für JavaScript, indem Sie eine C-Datei namens `webp.c` schreiben:

```c
#include "emscripten.h"
#include "src/webp/encode.h"

EMSCRIPTEN_KEEPALIVE
int version() {
    return WebPGetEncoderVersion();
}
```

Dies ist ein einfaches Programm, um zu testen, ob Sie den Quellcode von libwebp kompilieren können, da es keine Parameter oder komplexen Datenstrukturen erfordert, um diese Funktion aufzurufen.

Um dieses Programm zu kompilieren, müssen Sie dem Compiler mitteilen, wo er die Header-Dateien von libwebp finden kann, und zwar mit dem `-I`-Flag, und ihm alle erforderlichen C-Dateien von libwebp übergeben. Eine nützliche Strategie besteht darin, ihm einfach **alle** C-Dateien zu geben und dem Compiler zu überlassen, alles Überflüssige herauszufiltern. Für diese Bibliothek scheint dies hervorragend zu funktionieren:

```bash
emcc -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='["cwrap", "HEAP8"]' \
    -I libwebp \
    -I libwebp/src \
    webp.c \
    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c \
    libwebp/sharpyuv/*.c
```

> [!NOTE]
> Diese Strategie funktioniert nicht mit jedem C-Projekt. Viele Projekte verlassen sich auf autoconf/automake, um systemabhängigen Code vor der Kompilierung zu generieren. Emscripten stellt `emconfigure` und `emmake` bereit, um diese Befehle zu umschließen und die entsprechenden Parameter einzufügen. Weitere Informationen finden Sie in der [Emscripten-Dokumentation](https://emscripten.org/docs/compiling/Building-Projects.html).

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

Und Sie werden die korrekte Versionsnummer in der [Ausgabe](https://googlechrome.github.io/samples/webassembly/version.html) sehen:

![Screenshot der DevTools-Konsole, die die korrekte Versionsnummer zeigt.](version.png)

> [!NOTE]
> libwebp gibt die aktuelle Version a.b.c als hexadezimale Zahl 0xabc zurück. Zum Beispiel ist v0.6.1 als 0x000601 = 1537 kodiert.

## Ein Bild von JavaScript in Wasm bekommen

Die Versionsnummer des Encoders zu erhalten ist großartig, aber ein tatsächliches Bild zu kodieren wäre beeindruckender. Wie machen wir das?

Die erste Frage, die Sie beantworten müssen, ist: wie bekomme ich das Bild in Wasm? Beim Blick auf die [Encoding-API von libwebp](https://developers.google.com/speed/webp/docs/api#simple_encoding_api) werden Sie feststellen, dass es ein Byte-Array in RGB, RGBA, BGR oder BGRA erwartet. Glücklicherweise verfügt die Canvas-API über [`CanvasRenderingContext2D.getImageData`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) — die Ihnen eine {{jsxref("Uint8ClampedArray")}} liefert, die die Bilddaten in RGBA enthält:

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

Jetzt ist es "nur" noch eine Frage, die Daten von JavaScript nach Wasm zu kopieren. Dazu müssen Sie zwei zusätzliche Funktionen bereitstellen — eine, die Speicher für das Bild in Wasm reserviert, und eine, die ihn wieder freigibt:

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

Die Funktion `create_buffer()` reserviert einen Puffer für das RGBA-Bild — daher 4 Bytes pro Pixel. Der von `malloc()` zurückgegebene Zeiger ist die Adresse der ersten Speicherzelle dieses Puffers. Wenn der Zeiger an die JavaScript-Schicht zurückgegeben wird, wird er einfach als Zahl behandelt. Nach der Veröffentlichung der Funktion für JavaScript mit cwrap können Sie diese Zahl verwenden, um den Anfang unseres Puffers zu finden und die Bilddaten zu kopieren:

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

## Das Bild kodieren

Das Bild ist jetzt in Wasm verfügbar. Es ist an der Zeit, den WebP-Encoder seine Arbeit machen zu lassen. Beim Blick auf die [WebP-Dokumentation](https://developers.google.com/speed/webp/docs/api#simple_encoding_api) werden Sie feststellen, dass `WebPEncodeRGBA` perfekt passen könnte. Die Funktion benötigt einen Zeiger auf das Eingabebild und dessen Abmessungen sowie eine Qualitätsoption zwischen 0 und 100. Sie reserviert auch einen Ausgabepuffer für uns, den wir mit `WebPFree()` freigeben müssen, sobald wir mit dem WebP-Bild fertig sind.

Das Ergebnis der Kodierungsoperation ist ein Ausgabepuffer und dessen Länge. Da Funktionen in C keine Arrays als Rückgabetyp haben können (es sei denn, Sie reservieren Speicher dynamisch), greift dieses Beispiel auf ein statisches globales Array zurück. Das ist vielleicht kein sauberes C. Tatsächlich verlässt es sich auf 32-Bit breite Wasm-Zeiger. Aber dies ist eine faire Abkürzung, um die Dinge einfach zu halten:

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

Jetzt, da alles bereit ist, können Sie die Kodierungsfunktion aufrufen, den Zeiger und die Bildgröße abrufen, in einen eigenen JavaScript-Puffer legen und alle während des Vorgangs reservierten Wasm-Puffer freigeben:

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

> [!NOTE]
> `new Uint8Array(someBuffer)` erstellt eine neue Ansicht auf das gleiche Speicherelement, während `new Uint8Array(someTypedArray)` die Daten kopiert.

Abhängig von der Größe Ihres Bildes könnten Sie auf einen Fehler stoßen, bei dem Wasm den Speicher nicht genug erweitern kann, um sowohl das Eingangs- als auch das Ausgangsbild aufzunehmen:

![Screenshot der DevTools-Konsole, der einen Fehler zeigt.](error.png)

Glücklicherweise ist die Lösung für dieses Problem in der Fehlermeldung beschrieben. Sie müssen nur `-s ALLOW_MEMORY_GROWTH=1` zu Ihrem Kompilierungsbefehl hinzufügen.

Und da haben Sie es. Sie haben einen WebP-Encoder kompiliert und ein JPEG-Bild in WebP umgewandelt. Um zu beweisen, dass es funktioniert hat, wandeln Sie Ihren Ergebnis-Puffer in ein Blob um und verwenden Sie es in einem `<img>`-Element:

```js
const blob = new Blob([result], { type: "image/webp" });
const blobURL = URL.createObjectURL(blob);
const img = document.createElement("img");
img.src = blobURL;
img.alt = "a useful description";
document.body.appendChild(img);
```

Erleben Sie die Pracht eines neuen WebP-Bildes.

[Demo](https://googlechrome.github.io/samples/webassembly/image.html) | [Originalartikel](https://web.dev/articles/emscripting-a-c-library)

![DevTools-Netzwerkbereich und das generierte Bild.](result.jpg)
