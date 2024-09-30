---
title: Ein vorhandenes C-Modul zu WebAssembly kompilieren
slug: WebAssembly/existing_C_to_Wasm
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Ein zentraler Anwendungsfall für WebAssembly besteht darin, das bestehende Ökosystem von C-Bibliotheken zu nutzen und Entwicklern zu ermöglichen, sie im Web einzusetzen.

Diese Bibliotheken verlassen sich häufig auf die Standardbibliothek von C, ein Betriebssystem, ein Dateisystem und andere Dinge. Emscripten bietet die meisten dieser Funktionen, obwohl es einige [Einschränkungen](https://emscripten.org/docs/porting/guidelines/api_limitations.html) gibt.

Als Beispiel wollen wir einen Encoder für WebP zu Wasm kompilieren. Der Quellcode für den WebP-Codec ist in C geschrieben und [auf GitHub verfügbar](https://github.com/webmproject/libwebp) sowie umfangreiche [API-Dokumentation](https://developers.google.com/speed/webp/docs/api). Das ist ein sehr guter Ausgangspunkt.

```bash
git clone https://github.com/webmproject/libwebp
```

Um einfach zu beginnen, exponieren Sie `WebPGetEncoderVersion()` aus `encode.h` nach JavaScript, indem Sie eine C-Datei namens `webp.c` schreiben:

```cpp
#include "emscripten.h"
#include "src/webp/encode.h"

EMSCRIPTEN_KEEPALIVE
int version() {
  return WebPGetEncoderVersion();
}
```

Dies ist ein gutes einfaches Programm, um zu testen, ob Sie den Quellcode von libwebp kompilieren können, da es keine Parameter oder komplexe Datenstrukturen benötigt, um diese Funktion aufzurufen.

Um dieses Programm zu kompilieren, müssen Sie dem Compiler mitteilen, wo er die Header-Dateien von libwebp mit dem `-I`-Flag finden kann, und ihm auch alle C-Dateien von libwebp übergeben, die er benötigt. Eine nützliche Strategie ist es, ihm einfach **alle** C-Dateien zu geben und sich darauf zu verlassen, dass der Compiler alles Unnötige herausfiltert. Diese scheint für diese Bibliothek hervorragend zu funktionieren:

```bash
emcc -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    -I libwebp \
    webp.c \
    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c \
    libwebp/sharpyuv/*.c
```

> [!NOTE]
> Diese Strategie funktioniert nicht bei jedem C-Projekt. Viele Projekte verlassen sich auf autoconf/automake, um systemabhängigen Code vor der Kompilierung zu generieren. Emscripten bietet `emconfigure` und `emmake`, um diese Befehle zu umhüllen und die entsprechenden Parameter einzufügen. Mehr dazu finden Sie in der [Emscripten-Dokumentation](https://emscripten.org/docs/compiling/Building-Projects.html).

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

Und Sie werden die richtige Versionsnummer in der [Ausgabe](https://googlechrome.github.io/samples/webassembly/version.html) sehen:

![Screenshot der DevTools-Konsole, die die korrekte Versionsnummer zeigt.](version.png)

> [!NOTE]
> libwebp gibt die aktuelle Version a.b.c als hexadezimale Zahl 0xabc zurück. Beispielsweise ist v0.6.1 als 0x000601 = 1537 kodiert.

### Ein Bild von JavaScript in Wasm übertragen

Die Versionsnummer des Encoders zu erhalten, ist großartig, aber ein tatsächliches Bild zu kodieren, wäre beeindruckender. Wie macht man das?

Die erste Frage, die Sie beantworten müssen, ist: Wie bekomme ich das Bild in Wasm? Bei Betrachtung der [Encoding-API von libwebp](https://developers.google.com/speed/webp/docs/api#simple_encoding_api) werden Sie feststellen, dass sie ein Byte-Array in RGB, RGBA, BGR oder BGRA erwartet. Glücklicherweise verfügt die Canvas-API über [`CanvasRenderingContext2D.getImageData`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) — das Ihnen ein {{jsxref("Uint8ClampedArray")}} liefert, das die Bilddaten in RGBA enthält:

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

Jetzt ist es "nur" eine Frage des Kopierens der Daten von JavaScript in Wasm. Dafür müssen Sie zwei zusätzliche Funktionen bereitstellen — eine, die Speicher für das Bild in Wasm allokiert, und eine, die ihn wieder freigibt:

```cpp
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

Die Funktion `create_buffer()` allokiert einen Puffer für das RGBA-Bild — daher 4 Byte pro Pixel. Der Zeiger, der von `malloc()` zurückgegeben wird, ist die Adresse der ersten Speicherzelle dieses Puffers. Wenn der Zeiger an die JavaScript-Umgebung zurückgegeben wird, wird er nur als Zahl behandelt. Nachdem Sie die Funktion mit `cwrap` für JavaScript verfügbar gemacht haben, können Sie diese Zahl verwenden, um den Start unseres Puffers zu finden und die Bilddaten zu kopieren:

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
// ... call encoder ...
api.destroy_buffer(p);
```

### Das Bild kodieren

Das Bild ist jetzt in Wasm verfügbar. Es ist an der Zeit, den WebP-Encoder seine Arbeit erledigen zu lassen. Auf der Suche nach der [WebP-Dokumentation](https://developers.google.com/speed/webp/docs/api#simple_encoding_api) werden Sie feststellen, dass `WebPEncodeRGBA` perfekt passt. Die Funktion nimmt einen Zeiger auf das Eingangbild und dessen Abmessungen sowie eine Qualitätsoption zwischen 0 und 100. Sie allokiert auch einen Ausgabepuffer für uns, den wir mit `WebPFree()` freigeben müssen, sobald wir mit dem WebP-Bild fertig sind.

Das Ergebnis des Kodierungsvorgangs ist ein Ausgabepuffer und seine Länge. Da Funktionen in C keine Arrays als Rückgabetypen haben können (es sei denn, Sie allokieren Speicher dynamisch), verwendet dieses Beispiel ein statisches globales Array. Dies mag kein sauberer C-Code sein. Tatsächlich beruht es darauf, dass Wasm-Zeiger 32 Bit breit sind. Aber dies ist eine vernünftige Abkürzung, um die Dinge einfach zu halten:

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

Nun, mit all dem im Place, können Sie die Kodierungsfunktion aufrufen, den Zeiger und die Bildgröße abrufen, in Ihren eigenen JavaScript-Puffer einfügen und alle in diesem Prozess zugewiesenen `Wasm`-Puffer freigeben:

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

> **Hinweis:** `new Uint8Array(someBuffer)` erstellt eine neue Ansicht auf dasselbe Speicherstück, während `new Uint8Array(someTypedArray)` die Daten kopiert.

Abhängig von der Größe Ihres Bildes könnten Sie auf einen Fehler stoßen, bei dem Wasm den Speicher nicht genug vergrößern kann, um sowohl das Eingangs- als auch das Ausgabebild unterzubringen:

![Screenshot der DevTools-Konsole, die einen Fehler zeigt.](error.png)

Glücklicherweise ist die Lösung für dieses Problem in der Fehlermeldung angegeben. Sie müssen nur `-s ALLOW_MEMORY_GROWTH=1` zu Ihrem Kompilierbefehl hinzufügen.

Und da haben Sie es. Sie haben einen WebP-Encoder kompiliert und ein JPEG-Bild nach WebP transkodiert. Um zu beweisen, dass es funktioniert hat, verwandeln Sie Ihren Ergebnispuffer in einen Blob und verwenden ihn in einem `<img>`-Element:

```js
const blob = new Blob([result], { type: "image/webp" });
const blobURL = URL.createObjectURL(blob);
const img = document.createElement("img");
img.src = blobURL;
img.alt = "a useful description";
document.body.appendChild(img);
```

Sehen Sie den Glanz eines neuen WebP-Bildes.

[Demo](https://googlechrome.github.io/samples/webassembly/image.html) | [Originalartikel](https://web.dev/articles/emscripting-a-c-library)

![DevTools-Netzwerkbereich und das erzeugte Bild.](result.jpg)
