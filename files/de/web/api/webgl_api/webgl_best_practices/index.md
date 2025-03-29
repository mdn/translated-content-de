---
title: WebGL Best Practices
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{DefaultAPISidebar("WebGL")}}

WebGL ist eine komplexe API, und es ist oft nicht offensichtlich, welche die empfohlenen Nutzungsweisen sind. Diese Seite behandelt Empfehlungen für das gesamte Spektrum an Fachwissen und hebt nicht nur Dos und Don'ts hervor, sondern erklärt auch _warum_. Sie können sich auf dieses Dokument verlassen, um Ihre Herangehensweise zu leiten und sicherzustellen, dass Sie auf dem richtigen Weg sind, egal welchen Browser oder welche Hardware Ihre Benutzer nutzen.

## WebGL-Fehler adressieren und eliminieren

Ihre Anwendung sollte ausgeführt werden, ohne WebGL-Fehler zu erzeugen (wie sie von `getError` zurückgegeben werden). Jeder WebGL-Fehler wird in der Webkonsole als JavaScript-Warnung mit einer beschreibenden Nachricht gemeldet. Nach zu vielen Fehlern (32 in Firefox) hört WebGL auf, beschreibende Nachrichten zu generieren, was das Debuggen erheblich erschwert.

Die _einzigen_ Fehler, die eine gut geformte Seite generiert, sind `OUT_OF_MEMORY` und `CONTEXT_LOST`.

## Verfügbarkeit von Erweiterungen verstehen

Die Verfügbarkeit der meisten WebGL-Erweiterungen hängt vom Client-System ab. Wenn Sie WebGL-Erweiterungen verwenden, versuchen Sie nach Möglichkeit, sie optional zu machen, indem Sie sich an die Situation anpassen, in der sie nicht unterstützt werden.

Diese WebGL 1-Erweiterungen werden universell unterstützt und können als vorhanden vorausgesetzt werden:

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(siehe auch: [WebGL-Features und % Unterstützung](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

Erwägen Sie, diese in den `WebGLRenderingContext` einzuarbeiten, wie z.B.: <https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js>

## Systemgrenzen verstehen

Ähnlich wie bei Erweiterungen werden die Grenzen Ihres Systems anders sein als die Systeme Ihrer Kunden! Gehen Sie nicht davon aus, dass Sie dreißig Textursampler pro Shader verwenden können, nur weil es auf Ihrem Computer funktioniert!

Die Mindestanforderungen für WebGL sind recht niedrig. In der Praxis unterstützen nahezu alle Systeme mindestens Folgendes:

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

Ihr Desktop könnte 16k-Texturen oder vielleicht 16 Textureinheiten im Vertex-Shader unterstützen, aber die meisten anderen Systeme tun das nicht, und Inhalte, die für Sie funktionieren, werden für sie nicht funktionieren!

## Vermeiden Sie das Ungültigmachen von FBO-Anhangsbindungen

Fast jede Änderung an den Anhangsbindungen eines FBO wird die Vollständigkeit seines Framebuffers ungültig machen. Richten Sie Ihre heißen Framebuffer im Voraus ein.

In Firefox ermöglicht das Setzen der Einstellung `webgl.perf.max-warnings` auf `-1` in about:config Leistungswarnungen, die Hinweise zur Unvollständigkeit von FB enthalten.

### Vermeiden Sie das Ändern von VAO-Anhängern (vertexAttribPointer, disable/enableVertexAttribArray)

Das Zeichnen aus statischen, unveränderten VAOs ist schneller als das Ändern desselben VAO für jeden Zeichenaufruf. Für unveränderte VAOs können Browser die Abrufgrenzen zwischenspeichern, während bei geänderten VAOs Browser die Grenzen erneut validieren und berechnen müssen. Der Aufwand hierfür ist relativ gering, aber das erneute Verwenden von VAOs bedeutet auch weniger `vertexAttribPointer`-Aufrufe, deshalb ist es lohnenswert, dies wann immer möglich zu tun.

## Löschen Sie Objekte frühzeitig

Warten Sie nicht darauf, dass der Garbage Collector/zyklische Sammler erkennt, dass Objekte verwaist sind und sie zerstört. Implementierungen verfolgen die Lebensdauer von Objekten, sodass das 'Löschen' auf API-Ebene nur den Handle freigibt, der auf das eigentliche Objekt verweist. (Konzeptuell das Freigeben des Handle-Referenzzeigers auf das Objekt) Erst wenn das Objekt in der Implementierung nicht mehr verwendet wird, wird es tatsächlich freigegeben. Beispielsweise, wenn Sie niemals Ihre Shader-Objekte direkt wieder verwenden möchten, löschen Sie einfach ihre Handles, nachdem Sie sie an ein Programmobjekt angehängt haben.

## Verlieren Sie Kontexte frühzeitig

Erwägen Sie auch, WebGL-Kontexte über die `WEBGL_lose_context`-Erweiterung frühzeitig zu verlieren, wenn Sie definitiv mit ihnen fertig sind und die Rendering-Ergebnisse der Ziel-Canvas nicht mehr benötigen. Beachten Sie, dass dies beim Verlassen einer Seite nicht notwendig ist – fügen Sie hierfür keinen `unload`-Ereignis-Handler hinzu.

## Flushing, wenn Resultate erwartet werden

Rufen Sie `flush()` auf, wenn Ergebnisse wie Abfragen erwartet werden oder beim Abschluss eines Rendering-Frames.

Flush teilt der Implementierung mit, alle ausstehenden Befehle zur Ausführung zu leiten und sie aus der Warteschlange zu entfernen, anstatt auf weitere Befehle zu warten, bevor sie zur Ausführung gesendet werden.

Zum Beispiel könnte es möglich sein, dass das Folgende ohne Verlust des Kontexts niemals abgeschlossen wird:

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL hat standardmäßig keinen SwapBuffers-Aufruf, daher kann ein Flush helfen, diese Lücke zu füllen.

### Verwenden Sie `webgl.flush()`, wenn Sie nicht `requestAnimationFrame` verwenden

Wenn Sie nicht RAF verwenden, nutzen Sie `webgl.flush()`, um die Ausführung eingereihter Befehle zu fördern.

Da RAF direkt von der Framerandbegrenzung gefolgt wird, ist ein explizites `webgl.flush()` mit RAF nicht wirklich notwendig.

## Vermeiden Sie blockierende API-Aufrufe in der Produktion

Bestimmte WebGL-Einstiegspunkte – einschließlich `getError` und `getParameter` – verursachen synchrone Unterbrechungen auf dem aufrufenden Thread. Selbst grundlegende Anfragen können bis zu 1 ms dauern, aber sie können noch länger dauern, wenn sie darauf warten müssen, dass alle Grafikarbeiten abgeschlossen sind (mit einer Wirkung ähnlich wie `glFinish()` in nativen OpenGL).

Im Produktionscode sollten Sie solche Einstiegspunkte vermeiden, insbesondere im Haupt-Thread des Browsers, wo sie die gesamte Seite ins Stocken bringen können (oft inklusive Scrollen oder sogar den ganzen Browser).

- `getError()`: verursacht einen Flush + Roundtrip, um Fehler vom GPU-Prozess zu holen.

  Zum Beispiel wird in Firefox nur nach Zuweisungen (`bufferData`, `*texImage*`, `texStorage*`) glGetError geprüft, um GL_OUT_OF_MEMORY-Fehler zu erkennen.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()`, andere `get`s auf Shadern/Programmen: flush + Shader-Kompilation + Roundtrip, wenn nicht danach Shader-Kompilation abgeschlossen ist. (Siehe auch [parallele Shader-Kompilation](#Compile_Shaders_and_Link_Programs_in_parallel) unten.)
- `get*Parameter()` im Allgemeinen: möglicher Flush + Roundtrip. In einigen Fällen werden diese zwischengespeichert, um den Roundtrip zu vermeiden, aber versuchen Sie, sich nicht darauf zu verlassen.
- `checkFramebufferStatus()`: möglicher Flush + Roundtrip.
- `getBufferSubData()`: übliches Finish + Roundtrip. (Dies ist okay für READ-Buffer in Verbindung mit Zäunen - siehe [asychrone Datenrückgabe](#Use_non-blocking_async_data_readback) unten.)
- `readPixels()` zur CPU (d.h. ohne gebundenen UNPACK-Buffer): finish + Roundtrip. Verwenden Sie stattdessen GPU-GPU-`readPixels` in Verbindung mit asynchronem Daten-Lesebrücke.

## Aktivieren Sie immer Vertex Attrib 0 als Array

Wenn Sie zeichnen, ohne dass Vertex Attrib 0 als Array aktiviert ist, zwingen Sie den Browser zur komplexen Emulation beim Ausführen auf Desktop-OpenGL (z. B. auf macOS). Dies liegt daran, dass in Desktop-OpenGL nichts gezeichnet wird, wenn Vertex Attrib 0 nicht als Array aktiviert ist. Sie können `bindAttribLocation` verwenden, um ein Vertex-Attribut zu zwingen, die Position 0 zu verwenden, und `enableVertexAttribArray(0)` verwenden, um es als Array zu aktivieren.

## Schätzen Sie ein VRAM-Budget pro Pixel

WebGL bietet keine APIs, um die maximale Menge an Videospeicher im System abzufragen, da solche Abfragen nicht portabel sind. Dennoch müssen Anwendungen sich des VRAM-Verbrauchs bewusst sein und nicht einfach so viel wie möglich zuweisen.

Eine von Google Maps entwickelte Technik ist die Vorstellung eines _VRAM-Budgets pro Pixel_:

1. Entscheiden Sie für ein System (z. B. ein bestimmtes Desktop / Laptop), wie viel VRAM Ihre Anwendung maximal verwenden sollte. 2) Berechnen Sie die Anzahl der Pixel, die durch ein maximiertes Browserfenster abgedeckt werden. Z.B. `(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)` 3) Das VRAM-Budget pro Pixel ist (1) geteilt durch (2) und ist eine Konstante.

Diese Konstante sollte _in der Regel_ zwischen Systemen portabel sein. Mobile Geräte haben in der Regel kleinere Bildschirme als leistungsstarke Desktop-Computer mit großen Monitoren. Berechnen Sie diese Konstante auf einigen Zielsystemen, um eine verlässliche Schätzung zu erhalten.

Passen Sie jetzt alle internen Zwischenspeicher in der Anwendung (WebGLBuffers, WebGLTextures, usw.) so an, dass sie eine maximale Größe einhalten, berechnet durch diese Konstante multipliziert mit der Anzahl der Pixel, die durch das _aktuelle_ Browserfenster abgedeckt werden. Dies erfordert eine Schätzung der von jeder Textur verbrauchten Bytes, zum Beispiel. Das Limit muss typischerweise auch aktualisiert werden, wenn sich die Größe des Browserfensters ändert, und ältere Ressourcen, die das Limit überschreiten, müssen gelöscht werden.

Das Halten des VRAM-Verbrauchs der Anwendung unter diesem Limit hilft, out-of-memory Fehler und damit verbundene Instabilität zu vermeiden.

## Erwägen Sie das Rendern auf einen kleineren Back-Buffer

Ein häufiger (und einfacher) Weg, um Qualität gegen Geschwindigkeit einzutauschen, besteht darin, in einen kleineren Back-Buffer zu rendern und das Ergebnis hochzuskalieren. Erwägen Sie, `canvas.width` und `height` zu reduzieren und `canvas.style.width` und `height` bei einer konstanten Größe zu belassen.

## Batch-Zeichnungsaufrufe

Das "Batching" von Zeichnungsaufrufen in weniger, größere Zeichnungsaufrufe wird die Leistung im Allgemeinen verbessern. Wenn Sie 1000 Sprites malen müssen, versuchen Sie es als ein einziger `drawArrays()`- oder `drawElements()`-Aufruf auszuführen.

Es ist üblich, "Degenerierte Dreiecke" zu verwenden, wenn Sie diskontinuierliche Objekte in einem einzigen `drawArrays(TRIANGLE_STRIP)`-Aufruf zeichnen müssen. Degenerierte Dreiecke sind Dreiecke ohne Fläche, daher jedes Dreieck, bei dem mehr als ein Punkt an derselben exakten Stelle liegt. Diese Dreiecke werden effektiv übersprungen, was es Ihnen ermöglicht, einen neuen Dreiecksstreifen zu starten, der nicht an Ihren vorherigen angeschlossen ist, ohne in mehrere Zeichnungsaufrufe aufteilen zu müssen.

Eine weitere wichtige Methode zum Batching ist das Texturatlas, bei dem mehrere Bilder in einer einzigen Textur angeordnet werden, oft wie ein Schachbrett. Da Sie Zeichnungsaufruf-Batches aufteilen müssen, um Texturen zu wechseln, ermöglicht das Texturatlas das Kombinieren von mehr Zeichnungsaufrufen in weniger, größere Batches. Sehen Sie [dieses Beispiel](https://webglsamples.org/sprites/readme.html), das zeigt, wie selbst Sprites, die auf mehrere Texturatlase verweisen, in einem einzigen Zeichnungsaufruf kombiniert werden können.

## Vermeiden Sie "#ifdef GL_ES"

Sie sollten `#ifdef GL_ES` niemals in Ihren WebGL-Shadern verwenden; diese Bedingung ist in WebGL immer wahr. Obwohl einige frühe Beispiele dies verwendeten, ist es nicht notwendig.

## Bevorzugen Sie den Einsatz des Vertex-Shaders

Führen Sie so viele Arbeiten wie möglich im Vertex-Shader aus, anstatt im Fragment-Shader. Dies ist, weil per Zeichnungsaufruf Fragment-Shader im Allgemeinen viel häufiger ausgeführt werden als Vertex-Shader. Jede Berechnung, die an den Vertices durchgeführt werden kann und dann nur zwischen Fragmenten interpoliert wird (über `varying`s), ist ein Leistungsgewinn. (Die Interpolation von varyings ist sehr günstig und wird automatisch für Sie durch die festgelegte Funktionalität der Rasterisierungsphase der Grafikpipeline durchgeführt.)

Beispielsweise kann eine einfache Animation einer texturierten Oberfläche durch eine zeitabhängige Transformation der Texturkoordinaten erreicht werden. (Der einfachste Fall ist das Hinzufügen eines einheitlichen Vektors zum Texturkoordinaten-Attributvektor) Wenn es visuell akzeptabel ist, kann man die Texturkoordinaten im Vertex-Shader anstatt im Fragment-Shader transformieren, um eine bessere Leistung zu erzielen.

Ein häufiger Kompromiss besteht darin, einige Lichtberechnungen pro Vertex anstatt pro Fragment (Pixel) durchzuführen. In einigen Fällen, insbesondere bei einfachen Modellen oder dichten Vertices, sieht dies gut genug aus.

Die Umkehrung davon ist, wenn ein Modell mehr Vertices als Pixel im gerenderten Output hat. In solchen Fällen sind LOD-Meshes normalerweise die Antwort auf dieses Problem, selten die Verschiebung der Arbeit vom Vertex- _zum_ Fragment-Shader.

## Kompilieren Sie Shader und verlinken Sie Programme parallel

Es ist verlockend, Shader und Programme seriell zu kompilieren und zu verlinken, aber viele Browser können parallel im Hintergrund-Thread kompilieren und verlinken.

Stattdessen:

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

Während wir ein Muster beschrieben haben, das es Browsern ermöglicht, parallel zu kompilieren und zu verlinken, führt das normale Prüfen von `COMPILE_STATUS` oder `LINK_STATUS` zu einer Blockierung, bis das Kompilieren oder Verlinken abgeschlossen ist. In Browsern, in denen es verfügbar ist, bietet die [KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/)-Erweiterung eine _nicht blockierende_ `COMPLETION_STATUS`-Abfrage. Bevorzugen Sie es, diese Erweiterung zu aktivieren und zu verwenden.

Beispielverwendung:

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

Diese Technik funktioniert möglicherweise nicht in allen Anwendungen, zum Beispiel in solchen, die erfordern, dass Programme sofort für das Rendering verfügbar sind. Dennoch prüfen Sie, wie Variationen funktionieren könnten.

## Überprüfen Sie den Shader-Kompilierungsstatus nur, wenn das Linken fehlschlägt

Es gibt sehr wenige Fehler, die garantiert zu einem Shader-Kompilierungsfehler führen, aber nicht auf Link-Zeit zurückgeführt werden können. Die [ESSL3-Spezifikation](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) besagt dies unter "Error Handling":

> Die Implementierung sollte Fehler so früh wie möglich melden, muss jedoch in jedem Fall Folgendes erfüllen:
>
> - Alle lexikalischen, grammatikalischen und semantischen Fehler müssen nach einem Aufruf von glLinkProgram erkannt worden sein
> - Fehler aufgrund von Unstimmigkeiten zwischen dem Vertex- und dem Fragment-Shader (Link-Fehler) müssen nach einem glLinkProgram-Aufruf erkannt worden sein
> - Fehler aufgrund überschrittener Ressourcenbeschränkungen müssen nach einem beliebigen Zeichnungsaufruf oder einem glValidateProgram-Aufruf erkannt worden sein
> - Ein Aufruf von glValidateProgram muss alle Fehler im Zusammenhang mit einem Programmobjekt im gegebenen GL-Zustand melden.
>
> Die Zuweisung von Aufgaben zwischen Compiler und Linker ist implementierungsabhängig. Folglich gibt es viele Fehler, die entweder beim Kompilieren oder beim Verlinken erkannt werden können, je nach Implementierung.

Zusätzlich ist die Abfrage des Kompilierungsstatus ein synchroner Aufruf, der die Pipeline unterbricht.

Stattdessen:

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

Wenn Sie erwarten, ein `essl300 int` zwischen Shadern zu übergeben, und Sie benötigen, dass es 32-Bit hat, müssen Sie `highp` verwenden, ansonsten werden Sie Portabilitätsprobleme haben. (Funktioniert auf Desktop, nicht auf Android)

Wenn Sie eine Gleitkommatextur haben, erfordert iOS, dass Sie `highp sampler2D foo;` verwenden, oder es wird Ihnen sehr schmerzhaft `lowp`-Texturproben geben! (+/-2.0 max ist wahrscheinlich nicht ausreichend für Sie)

### Implizite Defaults

Die Vertex-Sprache hat die folgenden vorab deklarierten, globalen voreingestellten Präzisionsanweisungen:

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

Die Fragment-Sprache hat die folgenden vorab deklarierten, globalen voreingestellten Präzisionsanweisungen:

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### In WebGL 1 ist "highp float" Unterstützung in Fragment-Shadern optional

Die bedingungslose Nutzung von `highp` Präzision in Fragment-Shadern verhindert, dass Ihre Inhalte auf älterer mobiler Hardware funktionieren.

Zwar können Sie `mediump float` verwenden, aber beachten Sie, dass dies oft zu beschädigtem Rendering aufgrund mangelnder Präzision führt (insbesondere auf mobilen Systemen), obwohl die Beschädigung auf einem typischen Desktop-Computer nicht sichtbar sein wird.

Wenn Sie Ihre Präzisionsanforderungen kennen, wird Ihnen `getShaderPrecisionFormat()` mitteilen, was das System unterstützt.

Wenn `highp float` verfügbar ist, wird `GL_FRAGMENT_PRECISION_HIGH` als `1` definiert.

Ein gutes Muster für "Geben Sie mir immer die höchste Präzision":

```glsl
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
```

### ESSL100 Mindestanforderungen (WebGL 1)

| `float`   | Denken Sie an               | Bereich       | Minimum über Null | Präzision     |
| --------- | --------------------------- | ------------- | ----------------- | ------------- |
| `highp`   | float24\*                   | (-2^62, 2^62) | 2^-62             | 2^-16 relativ |
| `mediump` | IEEE float16                | (-2^14, 2^14) | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-Bit signiertes Festkomma | (-2, 2)       | 2^-8              | 2^-8 absolut  |

| `int`     | Denken Sie an | Bereich       |
| --------- | ------------- | ------------- |
| `highp`   | int17         | (-2^16, 2^16) |
| `mediump` | int11         | (-2^10, 2^10) |
| `lowp`    | int9          | (-2^8, 2^8)   |

_\*float24: Vorzeichenbit, 7-Bit für Exponent, 16-Bit für Mantisse._

### ESSL300 Mindestanforderungen (WebGL 2)

| `float`   | Denken Sie an               | Bereich         | Minimum über Null | Präzision     |
| --------- | --------------------------- | --------------- | ----------------- | ------------- |
| `highp`   | IEEE float32                | (-2^126, 2^127) | 2^-126            | 2^-24 relativ |
| `mediump` | IEEE float16                | (-2^14, 2^14)   | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-Bit signiertes Festkomma | (-2, 2)         | 2^-8              | 2^-8 absolut  |

| `(u)int`  | Denken Sie an | `int` Bereich | `unsigned int` Bereich |
| --------- | ------------- | ------------- | ---------------------- |
| `highp`   | (u)int32      | [-2^31, 2^31] | [0, 2^32]              |
| `mediump` | (u)int16      | [-2^15, 2^15] | [0, 2^16]              |
| `lowp`    | (u)int9       | [-2^8, 2^8]   | [0, 2^9]               |

## Bevorzugen Sie eingebaute Funktionen statt eigene zu erstellen

Bevorzugen Sie eingebautte Funktionen wie `dot`, `mix` und `normalize`. Bestenfalls laufen eigene Implementierungen so schnell wie die eingebauten, die sie ersetzen, aber erwarten Sie das nicht. Hardware hat oft hyperoptimierte oder sogar spezialisierte Anweisungen für eingebaute Funktionen, und der Compiler kann Ihre eigens erstellten Ersetzungen nicht zuverlässig mit den speziellen eingebauten Codepfaden ersetzen.

## Verwenden Sie Mipmaps für jede Textur, die Sie in 3D sehen werden

Im Zweifelsfall rufen Sie `generateMipmaps()` nach Textur-Uploads auf. Mipmaps sind speichergünstig (nur 30 % Overhead), während sie oft große Leistungsverbesserungen bieten, wenn Texturen „ausgezoomt“ oder allgemein in 3D oder sogar für Würfelkarten in der Entfernung verkleinert werden!

Es ist schneller, von kleineren Texturbildern abzusampeln aufgrund einer besseren inhärenten Texturabruf-Cache-Lokalität: Beim Auszoomen auf einer nicht-mipgemappten Textur wird die Texturabruf-Cache-Lokalität ruiniert, weil benachbarte Pixel nicht mehr von benachbarten Texeln abtasten!

Für 2D-Ressourcen, die niemals „ausgezoomt“ werden, zahlen Sie jedoch nicht den 30% Speicherzuschlag für Mipmaps:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(In WebGL 2 sollten Sie einfach `texStorage` mit `levels=1` verwenden)

Ein Vorbehalt: `generateMipmaps` funktioniert nur, wenn Sie in der Lage wären, in die Textur zu rendern, wenn Sie sie an ein Framebuffer anhängen würden. (Die Spezifikation nennt dies "farbendarstellbare Formate") Wenn ein System Float-Texturen unterstützt, aber nicht render-to-float, wird `generateMipmaps` bei Float-Formaten fehlschlagen.

## Gehen Sie nicht davon aus, dass Sie in Float-Texturen rendern können

Es gibt viele Systeme, die RGBA32F-Texturen unterstützen, aber wenn Sie eine an ein Framebuffer anhängen, erhalten Sie `FRAMEBUFFER_INCOMPLETE_ATTACHMENT` von `checkFramebufferStatus()`. Es mag auf Ihrem System funktionieren, aber auf _den meisten_ mobilen Systemen wird es nicht unterstützt!

Auf WebGL 1 verwenden Sie die `EXT_color_buffer_half_float` und `WEBGL_color_buffer_float` Erweiterungen, um Unterstützung für das Rendern in Float-Texturen für Float16 bzw. Float32 zu prüfen.

Auf WebGL 2 prüft `EXT_color_buffer_float` die Unterstützung für das Rendern in Float-Texturen für Float32 und Float16. `EXT_color_buffer_half_float` ist auf Systemen vorhanden, die nur das Rendern in Float16-Texturen unterstützen.

### Rendern in Float32 impliziert kein Float32-Blending!

Es mag auf Ihrem System funktionieren, aber auf vielen anderen wird es nicht. Vermeiden Sie es, wenn möglich. Prüfen Sie die `EXT_float_blend` Erweiterung, um Unterstützung zu prüfen.

Float16-Blending wird immer unterstützt.

## Einige Formate (z. B. RGB) können emuliert werden

Eine Reihe von Formaten (insbesondere Drei-Kanal-Formate) werden emuliert. Zum Beispiel ist RGB32F oft tatsächlich RGBA32F, und Luminance8 könnte tatsächlich RGBA8 sein. RGB8 ist besonders oft überraschend langsam, da das Ausmaskieren des Alpha-Kanals und/oder Anpassungen von Blend-Funktionen einen ziemlich großen Overhead haben. Bevorzugen Sie die Verwendung von RGBA8 und ignorieren Sie den Alpha selbst für eine bessere Leistung.

## Vermeiden Sie alpha:false, was teuer sein kann

Das Angeben von `alpha:false` bei der Kontext-Erstellung veranlasst den Browser, die WebGL-gerenderte Leinwand so zu komponieren, als wäre sie undurchsichtig, und ignoriert dabei alle Alpha-Werte, die die Anwendung in ihrem Fragment-Shader schreibt. Auf einigen Plattformen bringt diese Fähigkeit leider erhebliche Leistungseinbußen mit sich. Der RGB-Backbuffer muss möglicherweise über einer RGBA-Oberfläche emuliert werden, und es gibt relativ wenige Techniken in der OpenGL-API, die der Anwendung den Anschein geben, dass eine RGBA-Oberfläche keinen Alpha-Kanal hat. [Es wurde festgestellt](https://crbug.com/1045643), dass alle diese Techniken auf betroffenen Plattformen etwa die gleiche Leistungseinwirkung haben.

Die meisten Anwendungen, auch solche, die Alpha-Blending erfordern, können so strukturiert werden, dass sie `1.0` für den Alpha-Kanal erzeugen. Die primäre Ausnahme ist jede Anwendung, die Ziel-Alpha in der Blending-Funktion erfordert. Wenn es machbar ist, wird empfohlen, dies zu tun, anstatt `alpha:false` zu verwenden.

## Erwägen Sie komprimierte Texturformate

Während JPG und PNG in der Regel kleiner über die Leitung sind, sind GPU-komprimierte Texturformate im GPU-Speicher kleiner und schneller abzutasten. (Dies reduziert den Texturspeicher-Bandbreite, die bei mobilen Geräten wertvoll ist) Komprimierte Texturformate haben jedoch eine schlechtere Qualität als JPG und sind im Allgemeinen nur für Farben akzeptabel (nicht z. B. für Normalen oder Koordinaten).

Leider gibt es kein einziges, universell unterstütztes Format. Jedes System hat jedoch mindestens eines der folgenden:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

WebGL 2 bietet universelle Unterstützung durch die Kombination von:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc (Mobil)

WEBGL_compressed_texture_astc hat sowohl eine höhere Qualität und/oder eine höhere Kompression, wird jedoch nur auf neuerer Hardware unterstützt.

### Basis Universal Texturkomprimierungsformat/Bibliothek

Basis Universal löst mehrere der oben erwähnten Probleme. Es bietet eine Möglichkeit, alle gängigen komprimierten Texturformate mit einer einzigen komprimierten Texturdatei zu unterstützen, durch eine JavaScript-Bibliothek, die Formate zur Ladezeit effizient konvertiert. Es fügt auch eine zusätzliche Kompression hinzu, die Basis Universal komprimierte Texturdateien viel kleiner als reguläre komprimierte Texturen über die Leitung macht, vergleichbar mit JPEG.

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## Speicherverbrauch von Tiefen- und Stencil-Formaten

Tiefen- und Stencil-Anhang und -Formate sind auf vielen Geräten eigentlich untrennbar. Sie können DEPTH_COMPONENT24 oder STENCIL_INDEX8 anfordern, aber Sie erhalten oft D24X8 und X24S8 32bpp-Formate im Hintergrund. Gehen Sie davon aus, dass der Speicherverbrauch von Tiefen- und Stencil-Formaten auf die nächsten vier Bytes gerundet wird.

## texImage/texSubImage Uploads (insbesondere Videos) können Pipeline-Flushing verursachen

Die meisten Textur-Uploads von DOM-Elementen durchlaufen einen Verarbeitungsschritt, der GL-Programme intern temporär umschaltet, was ein Pipeline-Flushing verursacht. (Pipelines sind in [Vulkan](https://docs.vulkan.org/spec/latest/chapters/pipelines.html) und andere ausdrücklich formalisiert, aber sind implizit im Hintergrund in OpenGL und WebGL. Pipelines sind mehr oder weniger das Tupel von Shader-Programm, Tiefen/Stencil/Multisample/Blend/Rasterisierung Status)

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

Im Hintergrund im Browser:

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

Bevorzugen Sie Uploads vor dem Zeichnen zu machen, oder zumindest zwischen den Pipelines:

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

Im Hintergrund im Browser:

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

## Verwenden Sie texStorage, um Texturen zu erstellen

Die WebGL 2.0 `texImage*` API lässt Sie jede Mip-Ebene unabhängig und in beliebiger Größe definieren, auch wenn die nicht übereinstimmenden Mip-Größen nicht bis zur Zeichenzeit als Fehler erkannt werden, was bedeutet, dass es keine Möglichkeit für den Treiber gibt, die Textur tatsächlich im GPU-Speicher vorzubereiten, bis die Textur zum ersten Mal gezeichnet wird.

Darüber hinaus könnten einige Treiber bedingungslos die gesamte Mip-Kette (+30% Speicher!) allokieren, auch wenn Sie nur eine Ebene benötigen.

Bevorzugen Sie daher `texStorage` + `texSubImage` für Texturen in WebGL 2.

## Verwenden Sie invalidateFramebuffer

Das Speichern von Daten, die Sie nicht wieder verwenden werden, kann hohe Kosten haben, insbesondere auf gekachelten Rendering-GPUs, die auf mobilen Geräten verbreitet sind. Wenn Sie mit dem Inhalt eines Framebuffer-Anhangs fertig sind, verwenden Sie WebGL 2.0's `invalidateFramebuffer`, um die Daten zu verwerfen, anstatt den Treiber zu belasten, die Daten für die zukünftige Verwendung zu speichern. DEPTH/STENCIL-und/oder multisampled-Anhänge eignen sich besonders gut für `invalidateFramebuffer`.

## Verwenden Sie nicht-blockierende asynchrone Datenrückgabe

Operationen wie `readPixels` und `getBufferSubData` sind typischerweise synchron, aber mit denselben APIs kann eine nicht-blockierende, asynchrone Datenrückgabe erreicht werden. Der Ansatz in WebGL 2 ist analog zum Ansatz in OpenGL: [Asynchrone Downloads in blockierenden APIs](https://kdashg.github.io/misc/async-gpu-downloads.html)

```js
function clientWaitAsync(gl, sync, flags, interval_ms) {
  return new Promise((resolve, reject) => {
    function test() {
      const res = gl.clientWaitSync(sync, flags, 0);
      if (res === gl.WAIT_FAILED) {
        reject();
        return;
      }
      if (res === gl.TIMEOUT_EXPIRED) {
        setTimeout(test, interval_ms);
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

## `devicePixelRatio` und hochauflösendes Rendern

Der Umgang mit `devicePixelRatio !== 1.0` ist knifflig. Während der übliche Ansatz darin besteht, `canvas.width = width * devicePixelRatio` zu setzen, wird dadurch ein Moiré-Muster mit nicht-ganzzahligen Werten von `devicePixelRatio` verursacht, wie es bei der UI-Skalierung auf Windows sowie beim Zoomen auf allen Plattformen üblich ist.

Stattdessen können wir nicht-ganzzahlige Werte für die CSS-Eigenschaften `top`/`bottom`/`left`/`right` verwenden, um unser Canvas ziemlich zuverlässig auf ganze Ganzzahliger Gerätekoordinaten vorzurastern.

Demo: [Device pixel presnap](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

## ResizeObserver und 'device-pixel-content-box'

In unterstützten Browsern (Chromium?) kann `ResizeObserver` mit `'device-pixel-content-box'` verwendet werden, um einen Rückruf anzufordern, der die tatsächliche [Device-Pixel]-Größe(/de/docs/Glossary/device_pixel) eines Elements enthält. Dies kann verwendet werden, um eine asynchrone, aber genaue Funktion zu erstellen:

```js
window.getDevicePixelSize =
  window.getDevicePixelSize ||
  (async (elem) => {
    await new Promise((fn_resolve) => {
      const observer = new ResizeObserver((entries) => {
        for (const cur of entries) {
          const dev_size = cur.devicePixelContentBoxSize;
          const ret = {
            width: dev_size[0].inlineSize,
            height: dev_size[0].blockSize,
          };
          fn_resolve(ret);
          observer.disconnect();
          return;
        }
        throw `device-pixel-content-box not observed for elem ${elem}`;
      });
      observer.observe(elem, { box: "device-pixel-content-box" });
    });
  });
```

Bitte beziehen Sie sich auf [die Spezifikation](https://www.w3.org/TR/resize-observer/#resize-observer-interface) für weitere Details.

## ImageBitmap-Erstellung

Die Verwendung des [ImageBitmapOptions-Wörterbuchs](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapoptions) ist entscheidend, um Texturen richtig für den Upload zu WebGL vorzubereiten, aber leider gibt es keine offensichtliche Möglichkeit, genau zu ermitteln, welche Wörterbucheinträge von einem bestimmten Browser unterstützt werden.

[Dieses JSFiddle](https://jsfiddle.net/ptkyewhx/) zeigt, wie Sie ermitteln können, welche Wörterbucheinträge ein bestimmter Browser unterstützt.

## Verwenden Sie `WEBGL_provoking_vertex`, wenn es verfügbar ist

Beim Zusammensetzen von Vertices in Primitive wie Dreiecken und Linien, wird im OpenGL-Konvention der letzte Vertex des Primitivs als "provozierender Vertex" betrachtet. Dies ist relevant, wenn `flat` Vertex-Attribut Interpolation in ESSL300 (WebGL 2) verwendet wird; der Attributwert vom provozierenden Vertex wird für alle Vertices des Primitives verwendet.

Heutzutage werden viele Browser-WebGL-Implementierungen auf APIs gehostet, die anders als OpenGL sind, und einige dieser APIs verwenden den ersten Vertex als provozierenden Vertex für Zeichenbefehle. Die Emulation der OpenGL-Konvention für den provozierenden Vertex kann auf einigen dieser APIs rechnerisch teuer sein.

Aus diesem Grund wurde die [WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/)-Erweiterung eingeführt. Wenn eine WebGL-Implementierung diese Erweiterung bietet, ist dies ein Hinweis für die Anwendung, dass die Änderung der Konvention zu FIRST_VERTEX_CONVENTION_WEBGL die Leistung verbessern wird. Es wird dringend empfohlen, dass Anwendungen, die Flat-Shading verwenden, auf das Vorhandensein dieser Erweiterung überprüfen und sie nutzen, wenn sie verfügbar ist. Beachten Sie, dass dies Änderungen an den Vertex-Puffer oder Shadern der Anwendung erfordern kann.
