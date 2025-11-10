---
title: WebGL-Best Practices
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{DefaultAPISidebar("WebGL")}}

WebGL ist eine komplexe API, und es ist oft nicht offensichtlich, welche die empfohlenen Verwendungsweisen sind. Diese Seite behandelt Empfehlungen über das gesamte Spektrum an Fachwissen und hebt nicht nur das Richtige und Falsche hervor, sondern erklärt auch _warum_. Sie können sich auf dieses Dokument verlassen, um Ihre Wahl der Vorgehensweise zu leiten und sicherzustellen, dass Sie auf dem richtigen Weg sind, egal welchen Browser oder welche Hardware Ihre Nutzer verwenden.

## WebGL-Fehler identifizieren und beseitigen

Ihre Anwendung sollte ohne die Erzeugung von WebGL-Fehlern laufen (wie sie von `getError` zurückgegeben werden). Jeder WebGL-Fehler wird in der Web-Konsole als JavaScript-Warnung mit einer beschreibenden Nachricht gemeldet. Nach zu vielen Fehlern (32 in Firefox) hört WebGL auf, beschreibende Nachrichten zu erzeugen, was das Debuggen wirklich behindert.

Die _einzigen_ Fehler, die eine richtig geformte Seite erzeugt, sind `OUT_OF_MEMORY` und `CONTEXT_LOST`.

## Verfügbarkeit von Erweiterungen verstehen

Die Verfügbarkeit der meisten WebGL-Erweiterungen hängt vom Client-System ab. Wenn Sie WebGL-Erweiterungen verwenden, sollten Sie, wenn möglich, versuchen, sie optional zu machen, indem Sie sich anpassen, falls sie nicht unterstützt werden.

Diese WebGL-1-Erweiterungen werden universell unterstützt und können als vorhanden angesehen werden:

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(siehe auch: [WebGL Feature Levels und % Unterstützung](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

Erwägen Sie, diese in WebGLRenderingContext zu polyfillen, wie: <https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js>

## Systemgrenzen verstehen

Ähnlich wie bei Erweiterungen werden die Grenzen Ihres Systems anders sein als die der Systeme Ihrer Kunden! Gehen Sie nicht davon aus, dass Sie dreißig Textursampler pro Shader verwenden können, nur weil es auf Ihrem Computer funktioniert!

Die Mindestanforderungen für WebGL sind recht niedrig. In der Praxis unterstützen fast alle Systeme zumindest Folgendes:

```plain
MAX_CUBE_MAP_TEXTURE_SIZE: 4096
MAX_RENDERBUFFER_SIZE: 4096
MAX_TEXTURE_SIZE: 4096
MAX_VIEWPORT_DIMS: [4096,4096]
MAX_VERTEX_TEXTURE_IMAGE_UNITS: 4
MAX_TEXTURE_IMAGE_UNITS: 8
MAX_COMBINED_TEXTURE_IMAGE_UNITS: 8
MAX_VERTEX_ATTRIBS: 16
MAX_VARYING_VECTORS: 8
MAX_VERTEX_UNIFORM_VECTORS: 128
MAX_FRAGMENT_UNIFORM_VECTORS: 64
ALIASED_POINT_SIZE_RANGE: [1,100]
```

Ihr Desktop unterstützt möglicherweise 16k Texturen oder vielleicht 16 Textureinheiten im Vertex-Shader, aber die meisten anderen Systeme tun dies nicht, und Inhalte, die für Sie funktionieren, werden nicht für sie funktionieren!

## Vermeiden Sie das Ungültigmachen von FBO-Anhangsbindungen

Fast jede Veränderung an den Anhangsbindungen eines FBO macht seine Framebuffer-Gesamtheit ungültig. Richten Sie Ihre Heißspeicher im Voraus ein.

In Firefox können Sie die Einstellung `webgl.perf.max-warnings` auf `-1` in about:config setzen, um Leistungswarnungen zu aktivieren, die auch Warnungen über FB-Gesamtheitsungültigmachungen enthalten.

### Vermeiden Sie das Ändern von VAO-Anhängseln (vertexAttribPointer, disable/enableVertexAttribArray)

Das Zeichnen von statischen, unveränderlichen VAOs ist schneller als das Mutieren des gleichen VAO für jeden Zeichnungsaufruf. Für unveränderte VAOs können Browser die Fetch-Limits zwischenspeichern, während bei Änderungen der VAOs die Browser die Limits neuberechnen und validieren müssen. Der Overhead hierfür ist relativ gering, aber die Wiederverwendung von VAOs bedeutet auch weniger `vertexAttribPointer`-Aufrufe, daher lohnt es sich, dies zu tun, wo immer es einfach ist.

## Objekte zügig löschen

Warten Sie nicht darauf, dass der Garbage Collector/Recycle Collector erkennt, dass Objekte verwaist sind und sie zerstört. Implementierungen verfolgen die Lebensdauer von Objekten, sodass das 'Löschen' auf API-Ebene nur den Handle freigibt, der auf das tatsächliche Objekt verweist. (Konzeptionell wird der Ref-Zeiger des Handles zum Objekt freigegeben) Erst wenn das Objekt in der Implementierung ungenutzt ist, wird es tatsächlich freigegeben. Zum Beispiel, wenn Sie Ihre Shader-Objekte nie wieder direkt zugreifen möchten, löschen Sie einfach deren Handles, nachdem Sie sie an ein Programmobjekt angehängt haben.

## Kontexte zügig verlieren

Erwägen Sie auch, WebGL-Kontexte aktiv über die `WEBGL_lose_context`-Erweiterung zu verlieren, wenn Sie definitiv mit ihnen fertig sind und die Rendering-Ergebnisse der Ziel-Leinwand nicht mehr benötigen. Beachten Sie, dass dies nicht notwendig ist, wenn Sie eine Seite verlassen - fügen Sie für diesen Zweck keinen Unload-Event-Handler hinzu.

## Ausführen zur Zeitpunkt erwarteter Ergebnisse

Rufen Sie `flush()` auf, wenn Sie Ergebnisse wie Abfragen erwarten oder am Ende eines Rendering-Frames.

Flush weist die Implementierung an, alle ausstehenden Befehle zur Ausführung zu bringen, sie aus der Warteschlange zu leeren, anstatt darauf zu warten, dass weitere Befehle zur Ausführung hinzugefügt werden.

Zum Beispiel kann es möglich sein, dass ohne Kontextverlust Folgendes nie abgeschlossen wird:

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL hat standardmäßig keinen SwapBuffers-Aufruf, daher kann ein Flush helfen, die Lücke zu füllen.

### Verwenden Sie `webgl.flush()`, wenn Sie nicht `requestAnimationFrame` verwenden

Wenn Sie nicht RAF verwenden, verwenden Sie `webgl.flush()`, um die Ausführung der in die Warteschlange gestellten Befehle anzuregen.

Da RAF direkt nach der Frame-Grenze folgt, ist ein explizites `webgl.flush()` mit RAF wirklich nicht nötig.

## Vermeiden Sie blockierende API-Aufrufe in der Produktion

Bestimmte WebGL-Einstiegspunkte - einschließlich `getError` und `getParameter` - verursachen synchrone Wartezeiten im aufrufenden Thread. Selbst einfache Anfragen können bis zu 1 ms dauern, aber sie können noch länger dauern, wenn sie darauf warten müssen, dass alle Grafiken abgeschlossen sind (mit einer Wirkung ähnlich `glFinish()` in nativen OpenGL).

In Produktionscode sollten Sie solche Einstiegspunkte vermeiden, insbesondere im Hauptthread des Browsers, wo sie die gesamte Seite ins Stocken bringen können (oft einschließlich Scrollen oder sogar den gesamten Browser).

- `getError()`: verursacht einen Flush + Round-Trip, um Fehler vom GPU-Prozess zu holen).

  Zum Beispiel ist in Firefox die einzige Zeit, in der glGetError überprüft wird, nach Allocierungen (`bufferData`, `*texImage*`, `texStorage*`), um GL_OUT_OF_MEMORY-Fehler zu erfassen.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()`, andere `get`s auf Shadern/Programmen: Flush + Shader-Compile + Round-Trip, wenn nicht nach Abschluss der Shader-Kompilierung durchgeführt. (Siehe auch [parallele Shader-Kompilierung](#shader_kompilieren_und_programme_parallel_verknüpfen) unten.)
- `getParameter()` im Allgemeinen: möglicher Flush + Round-Trip. In einigen Fällen werden diese zwischengespeichert, um den Round-Trip zu vermeiden, aber versuchen Sie, nicht darauf zu vertrauen.
- `checkFramebufferStatus()`: möglicher Flush + Round-Trip.
- `getBufferSubData()`: gewöhnlicher Abschluss + Round-Trip. (Dies ist für READ-Puffer in Verbindung mit Zäunen in Ordnung - siehe [asynchrone Datenabfrage](#verwenden_sie_nicht-blockierenden_asynchronen_daten-rückruf) unten.)
- `readPixels()` auf die CPU (d.h. ohne gebundenen UNPACK-Puffer): Abschluss + Round-Trip. Verwenden Sie stattdessen GPU-GPU `readPixels` in Verbindung mit asynchronem Datenabruf.

## Aktivieren Sie stets Vertex Attrib 0 als ein Array

Wenn Sie zeichnen, ohne dass Vertex Attrib 0 als Array aktiviert ist, zwingen Sie den Browser zu komplizierter Emulation beim Betrieb auf Desktop-OpenGL (wie auf macOS). Dies liegt daran, dass in Desktop-OpenGL nichts gezeichnet wird, wenn Vertex Attrib 0 nicht als Array aktiviert ist. Sie können `bindAttribLocation` verwenden, um ein Vertex-Attribut an die Location 0 zu binden, und `enableVertexAttribArray(0)` verwenden, um es als Array zu aktivieren.

## Schätzen Sie ein VRAM-Budget pro Pixel

WebGL bietet keine APIs, um die maximale Menge an Videospeicher im System abzufragen, da solche Anfragen nicht portabel sind. Dennoch müssen Anwendungen sich des VRAM-Verbrauchs bewusst sein und nicht einfach so viel wie möglich allokieren.

Eine Technik, die vom Google Maps-Team entwickelt wurde, ist der Begriff eines _VRAM-Budgets pro Pixel_:

1. Für ein System (z.B. ein bestimmter Desktop / Laptop) entscheiden Sie, wie viel VRAM Ihre Anwendung maximal verwenden sollte. 2) Berechnen Sie die Anzahl der Pixel, die von einem maximierten Browserfenster abgedeckt werden. Z.B. `(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)` 3) Das VRAM-Budget pro Pixel ist (1) geteilt durch (2) und ist eine Konstante.

Diese Konstante sollte _allgemein_ zwischen Systemen portabel sein. Mobile Geräte haben typischerweise kleinere Bildschirme als leistungsstarke Desktop-Maschinen mit großen Monitoren. Berechnen Sie diese Konstante auf einigen Zielsystemen neu, um eine zuverlässige Schätzung zu erhalten.

Passen Sie nun alle internen Caches in der Anwendung an (WebGLBuffers, WebGLTextures usw.), um eine maximale Größe zu beachten, die durch diese Konstante multipliziert mit der Anzahl der von dem _aktuellen_ Browserfenster abgedeckten Pixel berechnet wird. Dies erfordert die Schätzung der Anzahl von Bytes, die von jeder Textur konsumiert werden, zum Beispiel. Die Obergrenze muss auch typischerweise aktualisiert werden, wenn das Browserfenster in der Größe ändert, und ältere Ressourcen über dem Limit müssen bereinigt werden.

Die Beibehaltung des VRAM-Verbrauchs der Anwendung unter dieser Obergrenze hilft, Out-of-Memory-Fehler und damit verbundene Instabilität zu vermeiden.

## Ziehen Sie in Betracht, in einem kleineren Backbuffer zu rendern

Eine gängige (und einfache) Möglichkeit, Qualität gegen Geschwindigkeit einzutauschen, besteht darin, in einen kleineren Backbuffer zu rendern und das Ergebnis hochzuskalieren. Überlegen Sie, die canvas.width und -höhe zu reduzieren und die canvas.style.width und -höhe in konstanter Größe zu belassen.

## Batch-Zeichenaufrufe

Das „Batchen“ von Zeichenanrufen in weniger, größere Anrufe wird im Allgemeinen die Leistung verbessern. Wenn Sie 1000 Sprites zu malen haben, versuchen Sie, dies als einen einzigen drawArrays()- oder drawElements()-Aufruf zu tun.

Es ist üblich, „degenerierte Dreiecke“ zu verwenden, wenn Sie diskontinuierliche Objekte als einen einzigen drawArrays(TRIANGLE_STRIP)-Aufruf zeichnen müssen. Degenerierte Dreiecke sind Dreiecke ohne Fläche, also jedes Dreieck, bei dem mehr als ein Punkt an genau derselben Stelle liegt. Diese Dreiecke werden effektiv übersprungen, was es Ihnen ermöglicht, ein neues Dreiecksstreifen zu beginnen, das nicht mit dem vorherigen verbunden ist, ohne in mehrere Zeichenaufrufe zu unterteilen.

Eine weitere wichtige Methode zum Batchen ist das Texture-Atlasing, bei dem mehrere Bilder in eine einzige Textur eingefügt werden, oft wie ein Schachbrettmuster. Da Sie Batch-Zeichenaufrufe teilen müssen, um Texturen zu ändern, ermöglicht Ihnen Texture-Atlasing, mehr Zeichenaufrufe in weniger, größere Batches zu kombinieren. Sehen Sie sich [dieses Beispiel](https://webglsamples.org/sprites/readme.html) an, das demonstriert, wie man selbst Sprites, die auf mehrere Texture-Atlanten verweisen, in einem einzigen Zeichenaufruf kombinieren kann.

## Verwenden Sie nicht "#ifdef GL_ES"

Sie sollten niemals `#ifdef GL_ES` in Ihren WebGL-Shadern verwenden; diese Bedingung ist in WebGL immer wahr. Obwohl einige frühe Beispiele dies verwendeten, ist es nicht notwendig.

## Bevorzugen Sie Arbeiten im Vertex-Shader

Machen Sie so viel Arbeit wie möglich im Vertex-Shader anstatt im Fragment-Shader. Dies ist, weil pro Zeichenaufruf, Fragment-Shader im Allgemeinen viel öfter laufen als Vertex-Shader. Jede Berechnung, die an den Vertices durchgeführt werden kann und dann nur zwischen den Fragmenten interpoliert wird (über `varying`s), ist ein Leistungssegen. (Die Interpolation der Varyings ist sehr günstig und wird automatisch für Sie durch die feste Funktionsweise der Rasterisierung im Grafik-Pipeline durchgeführt.)

Zum Beispiel kann eine einfache Animation einer texturierten Oberfläche durch eine zeitabhängige Transformation von Texturkoordinaten erreicht werden. (Der einfachste Fall ist die Addition eines uniform Vektors zum Attributvektor der Texturkoordinaten) Wenn es visuell akzeptabel ist, kann man die Texturkoordinaten im Vertex-Shader anstatt im Fragment-Shader transformieren, um eine bessere Leistung zu erzielen.

Ein häufiger Kompromiss ist es, einige Lichtberechnungen pro Vertex anstelle von pro Fragment (Pixel) durchzuführen. In einigen Fällen, insbesondere bei einfachen Modellen oder dichten Vertices, sieht das gut genug aus.

Das Umgekehrte davon ist, wenn ein Modell mehr Vertices als Pixel im gerenderten Output hat. Allerdings ist LOD Meshes normalerweise die Antwort auf dieses Problem, selten Arbeit von dem Vertex _zu_ den Fragment-Shader zu verschieben.

## Shader kompilieren und Programme parallel verknüpfen

Es ist verlockend, Shader und Programme seriell zu kompilieren und zu verknüpfen, aber viele Browser können im Hintergrund parallel kompilieren und verknüpfen.

Anstatt:

```js
function compileOnce(gl, shader) {
  if (shader.compiled) return;
  gl.compileShader(shader);
  shader.compiled = true;
}
for (const [vs, fs, prog] of programs) {
  compileOnce(gl, vs);
  compileOnce(gl, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error(`Link failed: ${gl.getProgramInfoLog(prog)}`);
    console.error(`vs info-log: ${gl.getShaderInfoLog(vs)}`);
    console.error(`fs info-log: ${gl.getShaderInfoLog(fs)}`);
  }
}
```

Erwägen Sie:

```js
function compileOnce(gl, shader) {
  if (shader.compiled) return;
  gl.compileShader(shader);
  shader.compiled = true;
}
for (const [vs, fs, prog] of programs) {
  compileOnce(gl, vs);
  compileOnce(gl, fs);
}
for (const [vs, fs, prog] of programs) {
  gl.linkProgram(prog);
}
for (const [vs, fs, prog] of programs) {
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error(`Link failed: ${gl.getProgramInfoLog(prog)}`);
    console.error(`vs info-log: ${gl.getShaderInfoLog(vs)}`);
    console.error(`fs info-log: ${gl.getShaderInfoLog(fs)}`);
  }
}
```

## Bevorzugen Sie KHR_parallel_shader_compile

Während wir ein Muster beschrieben haben, das es den Browsern ermöglicht, parallel zu kompilieren und zu verknüpfen, blockiert das normale Überprüfen von `COMPILE_STATUS` oder `LINK_STATUS`, bis die Kompilierung oder Verknüpfung abgeschlossen ist. In Browsern, wo es verfügbar ist, bietet die [KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/) Erweiterung eine _nicht-blockierende_ `COMPLETION_STATUS`-Abfrage. Bevorzugen Sie es, diese Erweiterung zu aktivieren und zu verwenden.

Beispielnutzung:

```js
ext = gl.getExtension("KHR_parallel_shader_compile");
gl.compileProgram(vs);
gl.compileProgram(fs);
gl.attachShader(prog, vs);
gl.attachShader(prog, fs);
gl.linkProgram(prog);

// Store program in your data structure.
// Later, for example the next frame:

if (ext) {
  if (gl.getProgramParameter(prog, ext.COMPLETION_STATUS_KHR)) {
    // Check program link status; if OK, use and draw with it.
  }
} else {
  // Program linking is synchronous.
  // Check program link status; if OK, use and draw with it.
}
```

Diese Technik funktioniert möglicherweise nicht in allen Anwendungen, zum Beispiel bei solchen, die Programme sofort für das Rendering benötigen. Dennoch sollten Sie in Betracht ziehen, wie Varianten funktionieren könnten.

## Überprüfen Sie den Shader-Kompilierungsstatus nicht, es sei denn, das Verknüpfen schlägt fehl

Es gibt sehr wenige Fehler, die garantiert einen Shader-Kompilierungsfehler verursachen, aber nicht bis zur Verknüpfungszeit aufgeschoben werden können. Die [ESSL3-Spezifikation](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) besagt dies unter "Fehlerbehandlung":

> Die Implementierung sollte Fehler so früh wie möglich melden, aber in jedem Fall muss Folgendes gewährleistet sein:
>
> - Alle lexikalischen, grammatikalischen und semantischen Fehler müssen nach einem Aufruf von glLinkProgram erkannt werden
> - Fehler aufgrund von Diskrepanzen zwischen Vertex- und Fragment-Shader (Link-Fehler) müssen nach einem Aufruf von glLinkProgram erkannt werden
> - Fehler aufgrund der Überschreitung von Ressourcenlimits müssen nach jedem Zeichnungsaufruf oder einem Aufruf von glValidateProgram erkannt werden
> - Ein Aufruf von glValidateProgram muss alle mit einem Programmobjekt verbundenen Fehler im aktuellen GL-Status melden.
>
> Die Aufgabenverteilung zwischen Compiler und Linker ist implementierungsabhängig. Folglich gibt es viele Fehler, die entweder bei der Compilierung oder bei der Verknüpfung erkannt werden können, abhängig von der Implementierung.

Zusätzlich ist die Abfrage des Kompilierungsstatus ein synchroner Aufruf, der das Pipelinings bricht.

Anstatt:

```js
gl.compileShader(vs);
if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
  console.error(`vs compile failed: ${gl.getShaderInfoLog(vs)}`);
}

gl.compileShader(fs);
if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
  console.error(`fs compile failed: ${gl.getShaderInfoLog(fs)}`);
}

gl.linkProgram(prog);
if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
  console.error(`Link failed: ${gl.getProgramInfoLog(prog)}`);
}
```

Erwägen Sie:

```js
gl.compileShader(vs);
gl.compileShader(fs);
gl.linkProgram(prog);
if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
  console.error(`Link failed: ${gl.getProgramInfoLog(prog)}`);
  console.error(`vs info-log: ${gl.getShaderInfoLog(vs)}`);
  console.error(`fs info-log: ${gl.getShaderInfoLog(fs)}`);
}
```

## Seien Sie präzise mit GLSL-Präzisionsannotationen

Wenn Sie erwarten, einen essl300 `int` zwischen Shadern zu übergeben und Sie benötigen ihn in 32-Bit, _müssen_ Sie `highp` verwenden, oder Sie werden Portabilitätsprobleme haben. (Funktioniert auf Desktop, nicht auf Android)

Wenn Sie eine Fließkommapixeltextur haben, erfordert iOS, dass Sie `highp sampler2D foo;` verwenden, oder es wird Ihnen sehr schmerzhaft `lowp` Texturbeispiele geben! (+/-2.0 max ist wahrscheinlich nicht gut genug für Sie)

### Implizite Standardeinstellungen

Die Vertex-Sprache hat die folgenden global vordefinierten Präzisionsstandard-Anweisung:

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

Die Fragment-Sprache hat die folgenden global vordefinierten Präzisionsstandard-Anweisung:

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### In WebGL 1 ist "highp float"-Unterstützung in Fragment-Shadern optional

Die bedingungslose Verwendung von `highp` Präzision in Fragment-Shadern wird verhindern, dass Ihr Inhalt auf einigen älteren mobilen Hardware funktioniert.

Während Sie `mediump float` verwenden können, beachten Sie, dass dies oft zu korruptem Rendern führt, aufgrund von mangelnder Präzision (insbesondere mobile Systeme), obwohl die Korruption auf einem typischen Desktop-Computer wahrscheinlich nicht sichtbar ist.

Wenn Sie Ihre Präzisionsanforderungen kennen, sagt Ihnen `getShaderPrecisionFormat()`, was das System unterstützt.

Wenn `highp float` verfügbar ist, wird `GL_FRAGMENT_PRECISION_HIGH` auf `1` definiert sein.

Ein gutes Muster für "Gib mir immer die höchste Präzision":

```glsl
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
```

### ESSL100 Mindestanforderungen (WebGL 1)

| `float`   | Denken              | Bereich       | min. über Null | Präzision     |
| --------- | ------------------- | ------------- | -------------- | ------------- |
| `highp`   | float24\*           | (-2^62, 2^62) | 2^-62          | 2^-16 relativ |
| `mediump` | IEEE float16        | (-2^14, 2^14) | 2^-14          | 2^-10 relativ |
| `lowp`    | 10-bit signed fixed | (-2, 2)       | 2^-8           | 2^-8 absolut  |

| `int`     | Denken | Bereich       |
| --------- | ------ | ------------- |
| `highp`   | int17  | (-2^16, 2^16) |
| `mediump` | int11  | (-2^10, 2^10) |
| `lowp`    | int9   | (-2^8, 2^8)   |

_\*float24: Sign-Bit, 7-Bit für Exponent, 16-Bit für Mantisse._

### ESSL300 Mindestanforderungen (WebGL 2)

| `float`   | Denken              | Bereich         | min. über Null | Präzision     |
| --------- | ------------------- | --------------- | -------------- | ------------- |
| `highp`   | IEEE float32        | (-2^126, 2^127) | 2^-126         | 2^-24 relativ |
| `mediump` | IEEE float16        | (-2^14, 2^14)   | 2^-14          | 2^-10 relativ |
| `lowp`    | 10-bit signed fixed | (-2, 2)         | 2^-8           | 2^-8 absolut  |

| `(u)int`  | Denken   | `int` Bereich | `unsigned int` Bereich |
| --------- | -------- | ------------- | ---------------------- |
| `highp`   | (u)int32 | [-2^31, 2^31] | [0, 2^32]              |
| `mediump` | (u)int16 | [-2^15, 2^15] | [0, 2^16]              |
| `lowp`    | (u)int9  | [-2^8, 2^8]   | [0, 2^9]               |

## Bevorzugen Sie eingebaute Funktionen anstelle von eigenen

Bevorzugen Sie eingebaute Funktionen wie `dot`, `mix` und `normalize`. Im besten Fall laufen benutzerdefinierte Implementierungen möglicherweise so schnell wie die eingebauten, die sie ersetzen, aber erwarten Sie das nicht. Hardware hat oft hyperoptimierte oder sogar spezialisierte Anweisungen für eingebaute, und der Compiler kann Ihre benutzerdefinierten Implementierungen nicht zuverlässig durch die speziellen eingebauten Pfade ersetzen.

## Verwenden Sie Mipmaps für jede Textur, die Sie in 3D sehen werden

Wenn Sie unsicher sind, rufen Sie `generateMipmaps()` nach Textur-Uploads auf. Mipmaps sind speichergünstig (nur 30% Overhead) und bieten oft erhebliche Leistungsverbesserungen, wenn Texturen "herausgezoomt" oder generell in der Entfernung in 3D herunterskaliert werden, oder sogar für Cube-Maps!

Es ist schneller, aus kleineren Texturbildern zu sampeln, aufgrund der besseren inhärenten Textur-Fetch-Cache-Lokalität: Herauszoomen auf einer nicht mipmap-genutzten Textur ruiniert die Textur-Fetch-Cache-Lokalität, da benachbarte Pixel nicht mehr aus benachbarten Texeln gesamplet werden!

Für 2D-Ressourcen, die niemals "herausgezoomt" werden, zahlen Sie jedoch nicht die 30% Speicherkosten für Mipmaps:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(In WebGL 2 sollten Sie einfach `texStorage` mit `levels=1` verwenden)

Ein Hinweis: `generateMipmaps` funktioniert nur, wenn Sie in die Textur rendern könnten, wenn Sie sie an ein Framebuffer anhängen. (Die Spezifikation nennt dies "color-renderable formats") Zum Beispiel, wenn ein System Gleitkomma-Texturen unterstützt, aber nicht in Gleitkommabereich rendern kann, wird `generateMipmaps` für Gleitkommabereiche versagen.

## Gehen Sie nicht davon aus, dass Sie in Gleitkomma-Texturen rendern können

Es gibt viele Systeme, die RGBA32F-Texturen unterstützen, aber wenn Sie eines an ein Framebuffer anhängen, erhalten Sie `FRAMEBUFFER_INCOMPLETE_ATTACHMENT` von `checkFramebufferStatus()`. Es kann auf Ihrem System funktionieren, aber _die meisten_ mobilen Systeme werden es nicht unterstützen!

In WebGL 1 verwenden Sie die `EXT_color_buffer_half_float` und `WEBGL_color_buffer_float` Erweiterungen, um Verkaufsupport zu überprüfen, um Unterstützung für render-to-float-texture für float16 bzw. float32 zu überprüfen.

In WebGL 2 überprüft `EXT_color_buffer_float` den Verkaufsupport für render-to-float-texture sowohl für float32 als auch für float16. `EXT_color_buffer_half_float` ist vorhanden in Systemen, die nur das Rendern zu float16-Texturen unterstützen.

### Render-to-float32 impliziert nicht float32-Blending!

Es kann auf Ihrem System funktionieren, aber auf vielen anderen nicht. Vermeiden Sie es, wenn möglich. Überprüfen Sie die `EXT_float_blend` Erweiterung, um Unterstützung zu überprüfen.

Float16-Blending wird immer unterstützt.

## Einige Formate (z.B. RGB) können emuliert sein

Eine Reihe von Formaten (insbesondere Dreikanalformate) werden emuliert. Zum Beispiel wird RGB32F oft tatsächlich als RGBA32F dargestellt, und Luminance8 kann tatsächlich RGBA8 sein. RGB8 ist insbesondere oft überraschend langsam, da das Ausmaskieren des Alphakanals und/oder das Patchen von Mischfunktionen einen relativ hohen Overhead hat. Bevorzugen Sie die Verwendung von RGBA8 und ignorieren Sie das Alpha für bessere Leistung.

## Vermeiden Sie alpha:false, was teuer sein kann

Das Angeben von `alpha:false` während der Kontext-Erstellung führt dazu, dass der Browser die im WebGL gerenderte Leinwand so zusammensetzt, als ob sie undurchsichtig wäre und alle Alpha-Werte ignoriert, die die Anwendung in ihrem Fragment-Shader schreibt. Auf einigen Plattformen kommt diese Fähigkeit leider mit erheblichen Leistungskosten. Der RGB-Backbuffer muss möglicherweise auf einer RGBA-Oberfläche emuliert werden, und es gibt relativ wenige Techniken, die in der OpenGL-API verfügbar sind, um es für die Anwendung so erscheinen zu lassen, als hätte eine RGBA-Oberfläche keinen Alphakanal. [Es wurde festgestellt](https://crbug.com/1045643), dass alle diese Techniken auf betroffenen Plattformen ungefähr den gleichen Performance-Einfluss haben.

Die meisten Anwendungen, sogar solche, die Alphablending erfordern, können so strukturiert werden, dass sie `1.0` für den Alphakanal erzeugen. Die Hauptausnahme ist jede Anwendung, die Zielalpha in der Mischfunktion erfordert. Wenn machbar, wird empfohlen, dies zu tun, anstatt `alpha:false` zu verwenden.

## Erwägen Sie komprimierte Texturformate

Während JPG und PNG im Allgemeinen kleiner über das Netzwerk sind, sind GPU-komprimierte Texturformate im auch Speicher auf der GPU kleiner und gleichzeitig schneller zur Probe zu nehmen (das reduziert den Texturspeicher-Bandbreitenbedarf, der auf mobilen Geräten kostbar ist). Leider gibt es kein einziges universell unterstütztes Format. Jedes System hat mindestens eines der folgenden:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

WebGL 2 hat allgemeine Unterstützung durch Kombination von:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc (Mobil)

WEBGL_compressed_texture_astc bietet sowohl höhere Qualität als auch höhere Kompression, wird aber nur auf neuerer Hardware unterstützt.

### Basis Universal Texturkompressionsformat/Bibliothek

Basis Universal löst mehrere der oben genannten Probleme. Es bietet eine Möglichkeit, alle gängigen komprimierten Texturformate mit einer einzigen komprimierten Texturdatei zu unterstützen, durch eine JavaScript-Bibliothek, die Formate effizient zur Ladezeit konvertiert. Es fügt auch zusätzliche Kompression hinzu, die Basis Universal komprimierte Texturdateien viel kleiner als reguläre komprimierte Texturen über-die-Leitung macht, mehr vergleichbar mit JPEG.

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## Speicherverbrauch von Tiefen- und Schablonenformaten

Tiefen- und Schablonenanhänge und -formate sind auf vielen Geräten tatsächlich untrennbar miteinander verbunden. Sie können nach DEPTH_COMPONENT24 oder STENCIL_INDEX8 fragen, aber oft bekommen Sie D24X8 und X24S8 32bpp-Formate hinter den Kulissen. Gehen Sie davon aus, dass der Speicherverbrauch von Tiefen- und Schablonenformaten auf das nächstgelegene Vielfache von vier Bytes aufgerundet ist.

## texImage/texSubImage-Uploads (insbesondere Videos) können Pipeline-Flushe verursachen

Die meisten Textur-Uploads von DOM-Elementen werden einen Verarbeitungsdurchlauf verursachen, der vorübergehend GL-Programme intern umschaltet und einen Pipeline-Flush verursacht. (Pipelines sind formell in [Vulkan](https://docs.vulkan.org/spec/latest/chapters/pipelines.html) et al explizit dargestellt, aber in OpenGL und WebGL sind sie implizit hinter den Kulissen. Pipelines sind mehr oder weniger das Tupel von Shader-Programm, Tiefe/Stencil-/Multisample-/Blend-/Rasterisierungszustand)

In WebGL:

```glsl
    …
    useProgram(prog1)
<pipeline flush>
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    texImage2D(HTMLVideoElement)
    drawArrays()
    …
```

Hinter den Kulissen im Browser:

```glsl
    …
    useProgram(prog1)
<pipeline flush>
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    -texImage2D(HTMLVideoElement):
        +useProgram(_internal_tex_transform_prog)
<pipeline flush>
        +bindFramebuffer(webgl_texture._internal_framebuffer)
        +bindTexture(HTMLVideoElement._internal_video_tex)
        +drawArrays() // y-flip/colorspace-transform/alpha-(un)premultiply
        +bindTexture(webgl_texture)
        +bindFramebuffer(target)
        +useProgram(prog1)
<pipeline flush>
    drawArrays()
    …
```

Bevorzugen Sie es, Uploads zu machen, bevor das Zeichnen beginnt, oder zumindest zwischen Pipelines:

In WebGL:

```glsl
    …
    bindTexture(webgl_texture)
    texImage2D(HTMLVideoElement)
    useProgram(prog1)
<pipeline flush>
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    drawArrays()
    …
```

Hinter den Kulissen im Browser:

```glsl
    …
    bindTexture(webgl_texture)
    -texImage2D(HTMLVideoElement):
        +useProgram(_internal_tex_transform_prog)
<pipeline flush>
        +bindFramebuffer(webgl_texture._internal_framebuffer)
        +bindTexture(HTMLVideoElement._internal_video_tex)
        +drawArrays() // y-flip/colorspace-transform/alpha-(un)premultiply
        +bindTexture(webgl_texture)
        +bindFramebuffer(target)
    useProgram(prog1)
<pipeline flush>
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    drawArrays()
    …
```

## Verwenden Sie `texStorage`, um Texturen zu erstellen

Die WebGL 2.0 `texImage*` API lässt Sie jede Mip-Ebene unabhängig und in jeder Größe definieren, selbst das Missverhältnis der Mip-Größen ist bis zur Zeichnungszeit kein Fehler, was bedeutet, dass es keine Möglichkeit gibt, dass der Treiber die Textur im GPU-Speicher tatsächlich vorbereiten kann, bis die Textur zum ersten Mal gezeichnet wird.

Darüber hinaus könnten einige Treiber bedingungslos die gesamte Mip-Kette (+30% Speicher!) allokieren, selbst wenn Sie nur eine Ebene haben möchten.

Also, bevorzugen Sie `texStorage` + `texSubImage` für Texturen in WebGL 2.

## Verwenden Sie `invalidateFramebuffer`

Das Speichern von Daten, die Sie nicht wieder verwenden werden, kann hohe Kosten haben, insbesondere auf Kachel-Rendering-GPUs, die auf mobilen Geräten üblich sind. Wenn Sie mit den Inhalten eines Framebuffer-Anhangs fertig sind, verwenden Sie das `invalidateFramebuffer` von WebGL 2.0, um die Daten zu verwerfen, anstatt den Treiber Zeit darauf zu verwenden, die Daten für eine spätere Verwendung zu speichern. DEPTH/STENCIL und/oder Multisample-Anhänge sind insbesondere gute Kandidaten für `invalidateFramebuffer`.

## Verwenden Sie nicht-blockierenden asynchronen Daten-Rückruf

Operationen wie `readPixels` und `getBufferSubData` sind typisch synchron, aber mithilfe der gleichen APIs kann nicht-blockierendes, asynchrones Datenlesen erzielt werden. Der Ansatz in WebGL 2 ist analog zu dem Ansatz in OpenGL: [Asynchrone Downloads in blockierenden APIs](https://kdashg.github.io/misc/async-gpu-downloads.html)

```js
function clientWaitAsync(gl, sync, flags, intervalMs) {
  return new Promise((resolve, reject) => {
    function test() {
      const res = gl.clientWaitSync(sync, flags, 0);
      if (res === gl.WAIT_FAILED) {
        reject(new Error("clientWaitSync failed"));
        return;
      }
      if (res === gl.TIMEOUT_EXPIRED) {
        setTimeout(test, intervalMs);
        return;
      }
      resolve();
    }
    test();
  });
}

async function getBufferSubDataAsync(
  gl,
  target,
  buffer,
  srcByteOffset,
  dstBuffer,
  /* optional */ dstOffset,
  /* optional */ length,
) {
  const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
  gl.flush();

  await clientWaitAsync(gl, sync, 0, 10);
  gl.deleteSync(sync);

  gl.bindBuffer(target, buffer);
  gl.getBufferSubData(target, srcByteOffset, dstBuffer, dstOffset, length);
  gl.bindBuffer(target, null);

  return dstBuffer;
}

async function readPixelsAsync(gl, x, y, w, h, format, type, dest) {
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.PIXEL_PACK_BUFFER, buf);
  gl.bufferData(gl.PIXEL_PACK_BUFFER, dest.byteLength, gl.STREAM_READ);
  gl.readPixels(x, y, w, h, format, type, 0);
  gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);

  await getBufferSubDataAsync(gl, gl.PIXEL_PACK_BUFFER, buf, 0, dest);

  gl.deleteBuffer(buf);
  return dest;
}
```

## `devicePixelRatio` und Hoch-DPI-Rendering

Der Umgang mit `devicePixelRatio !== 1.0` ist heikel. Während der übliche Ansatz darin besteht, `canvas.width = width * devicePixelRatio` zu setzen, führt dies zu Moiré-Artefakten bei nicht ganzzahligen Werten von `devicePixelRatio`, wie sie häufig bei der UI-Skalierung unter Windows sowie beim Zoomen auf allen Plattformen vorkommen.

Stattdessen können wir ungerade Werte für die CSS-Eigenschaften „top“/„bottom“/„left“/„right“ verwenden, um unsere Leinwand ziemlich zuverlässig auf ganze Ganzzahlen zu „vorzuschnappen“.

Demo: [Device-Pixel-Vorschnapp](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

## ResizeObserver und 'device-pixel-content-box'

Auf [unterstützten Browsern](/de/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize#browser_compatibility) kann `ResizeObserver` mit `'device-pixel-content-box'` verwendet werden, um einen Callback anzufordern, der die tatsächliche {{Glossary("device_pixel", "Gerät-Pixel")}} Größe eines Elements umfasst. Dies kann verwendet werden, um eine asynchrone, aber genaue Funktion zu erstellen:

```js
function getDevicePixelSize(elem) {
  return new Promise((resolve) => {
    const observer = new ResizeObserver(([cur]) => {
      if (!cur) {
        throw new Error(
          `device-pixel-content-box not observed for elem ${elem}`,
        );
      }
      const devSize = cur.devicePixelContentBoxSize;
      const ret = {
        width: devSize[0].inlineSize,
        height: devSize[0].blockSize,
      };
      resolve(ret);
      observer.disconnect();
    });
    observer.observe(elem, { box: "device-pixel-content-box" });
  });
}
```

## Verwenden Sie `WEBGL_provoking_vertex`, wenn es verfügbar ist

Wenn Sie Vertices zu Primitiven wie Dreiecken und Linien zusammensetzen, gilt in der OpenGL-Konvention der letzte Vertex des Primitives als der „provokante Vertex“. Dies ist relevant, wenn `flat`-Vertex-Attribut-Interpolation in ESSL300 (WebGL 2) verwendet wird; der Attributwert vom provokanten Vertex wird für alle Vertices des Primitives verwendet.

Heutzutage sind viele WebGL-Implementierungen von Browsern auf unterschiedlichen Grafikschnittstellen als OpenGL beherbergt, und einige dieser Schnittstellen verwenden den ersten Vertex als provokanten Vertex für Zeichenaufrufe. Die Emulation der OpenGL-Konvention kann bei einigen dieser Schnittstellen rechenintensiv sein.

Aus diesem Grund wurde die [WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/) Erweiterung eingeführt. Wenn eine WebGL-Implementierung diese Erweiterung offenlegt, ist dies ein Hinweis für die Anwendung, dass die Änderungerung zur `FIRST_VERTEX_CONVENTION_WEBGL` die Leistung verbessert. Es wird nachdrücklich empfohlen, dass Anwendungen, die flache Schattierung verwenden, auf das Vorhandensein dieser Erweiterung überprüfen und sie nutzen, wenn sie verfügbar ist. Beachten Sie, dass dies Änderungen an den Vertex-Buffern oder Shadern der Anwendung erfordern kann.
