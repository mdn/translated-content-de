---
title: Kompilierung eines bestehenden C-Moduls in WebAssembly
slug: WebAssembly/Guides/Existing_C_to_Wasm
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Ein wesentlicher Anwendungsfall für WebAssembly ist es, das bestehende Ökosystem von C-Bibliotheken zu nutzen und Entwicklern zu ermöglichen, diese im Web zu verwenden.

Diese Bibliotheken hängen häufig von der C-Standardbibliothek, einem Betriebssystem, einem Dateisystem und anderen Dingen ab. Emscripten bietet die meisten dieser Funktionen, obwohl es einige [Einschränkungen](https://emscripten.org/docs/porting/guidelines/api_limitations.html) gibt.

Als Beispiel werden wir einen Encoder für WebP in Wasm kompilieren. Der Quellcode des WebP-Codecs ist in C geschrieben und [auf GitHub verfügbar](https://github.com/webmproject/libwebp) sowie eine umfangreiche [API-Dokumentation](https://developers.google.com/speed/webp/docs/api). Das ist ein guter Ausgangspunkt.

```bash
git clone https://github.com/webmproject/libwebp
```

Um einfach zu beginnen, exponieren Sie `WebPGetEncoderVersion()` aus `encode.h` nach JavaScript, indem Sie eine C-Datei namens `webp.c` erstellen:

```c
#include "emscripten.h"
#include "src/webp/encode.h"

EMSCRIPTEN_KEEPALIVE
int version() {
    return WebPGetEncoderVersion();
}
```

Dies ist ein gutes einfaches Programm, um zu testen, ob Sie den Quellcode von libwebp kompilieren können, da es keine Parameter oder komplexe Datenstrukturen erfordert, um diese Funktion aufzurufen.

Um dieses Programm zu kompilieren, müssen Sie dem Compiler mitteilen, wo er die Header-Dateien von libwebp finden kann, indem Sie das `-I`-Flag verwenden, und ihm auch alle C-Dateien von libwebp übergeben, die er benötigt. Eine nützliche Strategie ist es, einfach **alle** C-Dateien zu übergeben und darauf zu vertrauen, dass der Compiler alles Unnötige herausfiltert. Für diese Bibliothek scheint das hervorragend zu funktionieren:

```bash
emcc -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    -I libwebp \
    webp.c \
    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c \
    libwebp/sharpyuv/*.c
```

> [!NOTE]
> Diese Strategie wird nicht mit jedem C-Projekt funktionieren. Viele Projekte verlassen sich auf autoconf/automake, um system-spezifischen Code vor der Kompilierung zu generieren. Emscripten bietet `emconfigure` und `emmake`, um diese Befehle zu umschließen und die passenden Parameter einzufügen. Weitere Informationen finden Sie in der [Emscripten-Dokumentation](https://emscripten.org/docs/compiling/Building-Projects.html).

Jetzt brauchen Sie nur noch etwas HTML und JavaScript, um Ihr neues Modul zu laden:

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

Und Sie werden die korrekte Versionsnummer im [Ausgabefenster](https://googlechrome.github.io/samples/webassembly/version.html) sehen:

![Screenshot der DevTools-Konsole mit der korrekten Versionsnummer.](version.png)

> [!NOTE]
> libwebp gibt die aktuelle Version a.b.c als hexadezimale Zahl 0xabc zurück. Zum Beispiel ist v0.6.1 als 0x000601 = 1537 kodiert.

### Ein Bild von JavaScript in Wasm laden

Die Versionsnummer des Encoders zu erhalten, ist großartig, aber ein tatsächliches Bild zu kodieren wäre beeindruckender. Wie machen wir das?

Die erste Frage, die Sie beantworten müssen, ist: Wie bekomme ich das Bild in Wasm? Ein Blick auf die [Encoding-API von libwebp](https://developers.google.com/speed/webp/docs/api#simple_encoding_api) zeigt, dass sie ein Array von Bytes in RGB, RGBA, BGR oder BGRA erwartet. Glücklicherweise verfügt die Canvas-API über [`CanvasRenderingContext2D.getImageData`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) — das gibt Ihnen ein {{jsxref("Uint8ClampedArray")}}, das die Bilddaten in RGBA enthält:

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

Jetzt ist es "nur" eine Frage des Kopierens der Daten aus JavaScript in Wasm. Dazu müssen Sie zwei zusätzliche Funktionen exponieren — eine, die Speicher für das Bild innerhalb von Wasm reserviert, und eine, die ihn wieder freigibt:

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

Die `create_buffer()`-Funktion reserviert einen Puffer für das RGBA-Bild — daher 4 Bytes pro Pixel. Der von `malloc()` zurückgegebene Zeiger ist die Adresse der ersten Speicherzelle dieses Puffers. Wenn der Zeiger in die JavaScript-Welt zurückkehrt, wird er einfach als Zahl behandelt. Nachdem die Funktion mit cwrap nach JavaScript exponiert wurde, können Sie diese Zahl verwenden, um den Anfang unseres Puffers zu finden und die Bilddaten zu kopieren:

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

### Kodieren des Bildes

Das Bild ist nun in Wasm verfügbar. Es ist Zeit, den WebP-Encoder seine Arbeit machen zu lassen. Ein Blick auf die [WebP-Dokumentation](https://developers.google.com/speed/webp/docs/api#simple_encoding_api) zeigt, dass `WebPEncodeRGBA` perfekt passt. Die Funktion benötigt einen Zeiger auf das Eingabebild und seine Dimensionen sowie eine Qualitätsoption zwischen 0 und 100. Sie reserviert auch einen Ausgabepuffer für uns, den wir mit `WebPFree()` freigeben müssen, sobald wir mit dem WebP-Bild fertig sind.

Das Ergebnis des Kodierungsvorgangs ist ein Ausgabepuffer und seine Länge. Da Funktionen in C keine Arrays als Rückgabewert haben können (es sei denn, Sie reservieren den Speicher dynamisch), greift dieses Beispiel auf ein statisches globales Array zurück. Dies mag kein sauberer C-Code sein. Tatsächlich verlässt es sich auf 32-Bit-Wasm-Zeiger. Aber dies ist ein angemessener Kompromiss, um die Dinge einfach zu halten:

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

Nun, da alles bereit ist, können Sie die Kodierfunktion aufrufen, den Zeiger und die Bildgröße abrufen, sie in einem eigenen JavaScript-Puffer ablegen und alle in diesem Prozess reservierten Wasm-Puffer freigeben:

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

> [!NOTE] > `new Uint8Array(someBuffer)` erzeugt eine neue Ansicht auf denselben Speicherblock, während `new Uint8Array(someTypedArray)` die Daten kopiert.

Je nach Größe Ihres Bildes kann es zu einem Fehler kommen, bei dem Wasm den Speicher nicht genug erweitern kann, um sowohl das Eingabe- als auch das Ausgabebild aufzunehmen:

![Screenshot der DevTools-Konsole mit einem Fehler.](error.png)

Glücklicherweise liegt die Lösung für dieses Problem in der Fehlermeldung. Sie müssen nur `-s ALLOW_MEMORY_GROWTH=1` zu Ihrem Kompilierbefehl hinzufügen.

Und da haben Sie es. Sie haben einen WebP-Encoder kompiliert und ein JPEG-Bild in WebP umkodiert. Um zu beweisen, dass es funktioniert hat, verwandeln Sie den Ergebnis-Puffer in ein Blob und verwenden es in einem `<img>`-Element:

```js
const blob = new Blob([result], { type: "image/webp" });
const blobURL = URL.createObjectURL(blob);
const img = document.createElement("img");
img.src = blobURL;
img.alt = "a useful description";
document.body.appendChild(img);
```

Bewundern Sie die Herrlichkeit eines neuen WebP-Bildes.

[Demo](https://googlechrome.github.io/samples/webassembly/image.html) | [Originalartikel](https://web.dev/articles/emscripting-a-c-library)

![DevTools Netwerk-Panel und das generierte Bild.](result.jpg)
