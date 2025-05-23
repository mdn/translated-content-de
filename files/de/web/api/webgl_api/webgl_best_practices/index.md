---
title: WebGL Best Practices
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: 373fcd42528fc9eafa3703dc99927cc56c75fa8d
---

{{DefaultAPISidebar("WebGL")}}

WebGL ist eine komplexe API, und es ist oft nicht offensichtlich, welche die empfohlenen Methoden zur Nutzung sind. Diese Seite behandelt Empfehlungen über das gesamte Spektrum der Expertise hinweg und hebt nicht nur Do's und Don'ts hervor, sondern erläutert auch _warum_. Sie können sich auf dieses Dokument verlassen, um Ihre Wahl der Vorgehensweise zu leiten und sicherzustellen, dass Sie auf dem richtigen Weg sind, unabhängig davon, welchen Browser oder welche Hardware Ihre Benutzer verwenden.

## Beheben und Eliminieren von WebGL-Fehlern

Ihre Anwendung sollte ohne Generierung von WebGL-Fehlern (wie von `getError` zurückgegeben) laufen. Jeder WebGL-Fehler wird in der Web-Konsole als JavaScript-Warnung mit einer beschreibenden Nachricht gemeldet. Nach zu vielen Fehlern (32 in Firefox) hört WebGL auf, beschreibende Nachrichten zu generieren, was das Debugging erheblich erschwert.

Die _einzigen_ Fehler, die eine gut gestaltete Seite generiert, sind `OUT_OF_MEMORY` und `CONTEXT_LOST`.

## Verfügbarkeit von Erweiterungen verstehen

Die Verfügbarkeit der meisten WebGL-Erweiterungen hängt vom Client-System ab. Wenn Sie WebGL-Erweiterungen nutzen, versuchen Sie, sie optional zu machen, indem Sie sich bei Nichtunterstützung flexibel anpassen.

Diese WebGL 1-Erweiterungen sind universell unterstützt und können als vorhanden angesehen werden:

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(siehe auch: [WebGL-Feature-Level und % Unterstützung](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

Erwägen Sie, diese in den WebGLRenderingContext einzupflegen, wie: <https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js>

## Systemgrenzen verstehen

Ähnlich wie bei Erweiterungen werden die Grenzen Ihres Systems anders sein als die Systeme Ihrer Kunden! Gehen Sie nicht davon aus, dass Sie dreißig Textur-Sampler pro Shader verwenden können, nur weil es auf Ihrem Computer funktioniert!

Die Mindestanforderungen für WebGL sind sehr niedrig. In der Praxis unterstützen praktisch alle Systeme mindestens Folgendes:

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

Ihr Desktop kann 16k-Texturen oder vielleicht 16 Textureinheiten im Vertex-Shader unterstützen, aber die meisten anderen Systeme nicht, und Inhalte, die für Sie funktionieren, funktionieren für sie nicht!

## Vermeiden der Ungültigmachung von FBO-Anhangsbindungen

Fast jede Änderung an den Anhangsbindungen eines FBOs macht seine Framebuffer-Komplettheit ungültig. Richten Sie Ihre heißen Framebuffer im Voraus ein.

In Firefox aktiviert das Setzen der Präferenz `webgl.perf.max-warnings` auf `-1` in about:config Leistungswarnungen, die Warnungen über FB-Komplettheits-Ungültigmachungen enthalten.

### Vermeiden Sie das Ändern von VAO-Anhängen (vertexAttribPointer, disable/enableVertexAttribArray)

Das Zeichnen aus statischen, unveränderten VAOs ist schneller als das Ändern desselben VAO für jeden Zeichnungsaufruf. Bei unveränderten VAOs können Browser die Abholgrenzen zwischenspeichern, während bei Änderungen der VAOs Browser die Grenzen erneut validieren und berechnen müssen. Der Aufwand dafür ist relativ gering, aber die Wiederverwendung von VAOs bedeutet auch weniger `vertexAttribPointer`-Aufrufe, also lohnt es sich, dies zu tun, wo immer es einfach ist.

## Löschen Sie Objekte frühzeitig

Warten Sie nicht, bis der Garbage Collector/Cycle Collector bemerkt, dass Objekte verwaist sind und sie zerstört. Implementierungen verfolgen die Lebensdauer von Objekten, sodass das „Löschen“ auf der API-Ebene nur den Handle freigibt, der auf das tatsächliche Objekt verweist. (Konzeptionell die Freigabe des Referenzzeigers des Handles auf das Objekt) Erst wenn das Objekt in der Implementierung nicht mehr genutzt wird, wird es tatsächlich freigegeben. Wenn Sie beispielsweise nie direkt auf Ihre Shader-Objekte zugreifen möchten, löschen Sie einfach deren Handles, nachdem Sie sie einem Programmobjekt angehängt haben.

## Kontexte bewusst verlieren

Erwägen Sie auch, WebGL-Kontexte mit der Erweiterung `WEBGL_lose_context` bewusst zu verlieren, wenn Sie definitiv mit ihnen fertig sind und die Rendering-Ergebnisse der Ziel-Canvas nicht mehr benötigen. Beachten Sie, dass dies nicht notwendig ist, wenn Sie die Seite verlassen - fügen Sie keinen Unload-Event-Handler nur zu diesem Zweck hinzu.

## Spülen, wenn Sie Ergebnisse erwarten

Rufen Sie `flush()` auf, wenn Sie Ergebnisse wie Anfragen erwarten oder am Ende eines Rendering-Frames.

Flush teilt der Implementierung mit, alle ausstehenden Befehle zur Ausführung zu senden und sie aus der Warteschlange zu entfernen, anstatt auf weitere Befehle zu warten, bevor sie zur Ausführung gesendet werden.

Beispielsweise ist es möglich, dass das Folgende ohne Kontextverlust nie abgeschlossen wird:

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL hat standardmäßig keinen SwapBuffers-Aufruf, daher kann ein Flush helfen, die Lücke zu füllen.

### Verwenden Sie `webgl.flush()`, wenn Sie nicht `requestAnimationFrame` verwenden

Wenn Sie nicht RAF verwenden, verwenden Sie `webgl.flush()`, um die sofortige Ausführung der eingereihten Befehle zu fördern.

Da RAF direkt auf die Frame-Grenze folgt, ist ein explizites `webgl.flush()` bei RAF eigentlich nicht nötig.

## Vermeiden Sie blockierende API-Aufrufe in der Produktion

Bestimmte WebGL-Einstiegspunkte - einschließlich `getError` und `getParameter` - verursachen synchrone Wartezeiten im aufrufenden Thread. Selbst grundlegende Anfragen können so lange wie 1 ms dauern, aber sie können noch länger dauern, wenn sie warten müssen, bis alle Grafikarbeiten abgeschlossen sind (mit einem Effekt ähnlich wie `glFinish()` in nativen OpenGL).

In Produktionscode sollten solche Einstiegspunkte vermieden werden, besonders im Hauptthread des Browsers, wo sie die gesamte Seite zum Ruckeln bringen können (oft auch das Scrollen oder sogar den gesamten Browser).

- `getError()`: verursacht einen Flush + Round-Trip, um Fehler vom GPU-Prozess abzurufen.

  Beispielsweise wird innerhalb von Firefox glGetError nur nach Zuweisungen (`bufferData`, `*texImage*`, `texStorage*`) überprüft, um GL_OUT_OF_MEMORY-Fehler zu erkennen.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()`, andere `get`s bei Shadern/Programmen: Flush + Shader-Kompilierung + Round-Trip, wenn nicht nach Abschluss der Shader-Kompilierung durchgeführt. (Siehe auch [parallele Shader-Kompilierung](#shaders_kompilieren_und_programme_parallel_verknüpfen) unten.)
- `get*Parameter()` im Allgemeinen: möglicherweise Flush + Round-Trip. In einigen Fällen werden diese zwischengespeichert, um den Round-Trip zu vermeiden, aber versuchen Sie, sich nicht darauf zu verlassen.
- `checkFramebufferStatus()`: möglicherweise Flush + Round-Trip.
- `getBufferSubData()`: üblicherweise Finish + Round-Trip. (Dies ist in Ordnung für READ-Buffer in Verbindung mit Fences - siehe [asynchrone Datenrückgabe](#asynchrone_nicht-blockierende_datenrückgabe_verwenden) unten.)
- `readPixels()` zur CPU (d.h. ohne gebundenen UNPACK-Buffer): Finish + Round-Trip. Verwenden Sie stattdessen GPU-GPU-`readPixels` in Verbindung mit asynchroner Datenrückgabe.

## Aktivieren Sie immer Vertex Attrib 0 als Array

Wenn Sie ohne aktiviertes Vertex Attrib 0 als Array zeichnen, zwingen Sie den Browser, bei der Ausführung auf Desktop-OpenGL eine komplizierte Emulation durchzuführen (wie auf macOS). Dies liegt daran, dass in Desktop-OpenGL nichts gezeichnet wird, wenn Vertex Attrib 0 nicht als Array aktiviert ist. Sie können `bindAttribLocation` verwenden, um ein Vertex-Attribut zu zwingen, Standort 0 zu verwenden, und `enableVertexAttribArray(0)`, um es als Array zu aktivieren.

## Schätzen Sie ein VRAM-Budget pro Pixel

WebGL bietet keine APIs zum Abfragen der maximalen Menge an Videospeicher im System, da solche Abfragen nicht plattformunabhängig sind. Dennoch müssen Anwendungen sich des VRAM-Gebrauchs bewusst sein und nicht einfach so viel wie möglich zuweisen.

Eine Technik, die vom Google Maps-Team entwickelt wurde, ist die Vorstellung eines _VRAM-Budgets pro Pixel_:

1. Für ein System (z. B. einen bestimmten Desktop/Laptop) entscheiden Sie, wie viel VRAM Ihre Anwendung maximal verwenden sollte. 2) Berechnen Sie die Anzahl der Pixel, die von einem maximierten Browserfenster abgedeckt werden. Z.B. `(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)` 3) Das VRAM-Budget pro Pixel is (1) geteilt durch (2) und ist eine Konstante.

Diese Konstante sollte _allgemein_ plattformübergreifend sein. Mobile Geräte haben typischerweise kleinere Bildschirme als leistungsstarke Desktops mit großen Monitoren. Berechnen Sie diese Konstante für einige Zielsysteme neu, um eine zuverlässige Schätzung zu erhalten.

Passen Sie jetzt das gesamte interne Caching in der Anwendung (WebGLBuffers, WebGLTextures usw.) an, um eine Maximalgröße einzuhalten, die durch diese Konstante multipliziert mit der Anzahl der Pixel berechnet wird, die das _aktuelle_ Browserfenster bedecken. Dies erfordert die Schätzung der von jeder Textur verbrauchten Bytezahl, zum Beispiel. Das Limit muss auch normalerweise aktualisiert werden, wenn die Größe des Browserfensters geändert wird und ältere Ressourcen über dem Limit müssen gelöscht werden.

Wenn Sie den VRAM-Gebrauch der Anwendung unter diesem Limit halten, wird es helfen, Out-of-Memory-Fehler und damit verbundene Instabilität zu vermeiden.

## Erwägen Sie das Rendern in einen kleineren Backbuffer

Eine übliche (und einfache) Möglichkeit, die Qualität gegen Geschwindigkeit einzutauschen, besteht darin, in einem kleineren Backbuffer zu rendern und das Ergebnis hochzuskalieren. Erwägen Sie, canvas.width und height zu reduzieren und canvas.style.width und height in einer konstanten Größe zu belassen.

## Batch-Zeichnungsaufrufe

„Batching“ von Zeichnungsaufrufen in weniger, größere Zeichnungsaufrufe wird im Allgemeinen die Leistung verbessern. Wenn Sie 1000 Sprites malen müssen, versuchen Sie, dies mit einem einzigen `drawArrays()`- oder `drawElements()`-Aufruf zu tun.

Es ist üblich, "degenerate triangles" zu verwenden, wenn Sie getrennte Objekte als einen einzigen `drawArrays(TRIANGLE_STRIP)`-Aufruf zeichnen müssen. Degenerierte Dreiecke sind Dreiecke ohne Fläche, daher jedes Dreieck, bei dem mehr als ein Punkt an genau der gleichen Stelle liegt. Diese Dreiecke werden effektiv übersprungen, was Ihnen ermöglicht, einen neuen Triangle-Strip zu beginnen, der nicht an den vorherigen angehängt ist, ohne in mehrere Zeichnungsaufrufe aufteilen zu müssen.

Eine weitere wichtige Methode zum Batching ist Texture Atlasing, bei dem mehrere Bilder in eine einzige Textur platziert werden, oft wie ein Schachbrettmuster. Da Sie Zeichenaufruf-Batches teilen müssen, um Texturen zu ändern, lässt Texture Atlasing mehr Zeichenaufrufe in weniger, größere Batches kombinieren. Siehe [dieses Beispiel](https://webglsamples.org/sprites/readme.html), das demonstriert, wie man sogar Sprites, die auf mehrere Texture Atlases verweisen, in einen einzigen Zeichenaufruf kombiniert.

## Vermeiden Sie `#ifdef GL_ES`

Sie sollten niemals `#ifdef GL_ES` in Ihren WebGL-Shadern verwenden; diese Bedingung ist in WebGL immer wahr. Obwohl einige frühe Beispiele dies verwendeten, ist es nicht notwendig.

## Bevorzugen Sie die Arbeit im Vertex-Shader

Erledigen Sie so viel Arbeit wie möglich im Vertex-Shader anstatt im Fragment-Shader. Dies liegt daran, dass pro Zeichnungsaufruf Fragment-Shader im Allgemeinen viel öfter ausgeführt werden als Vertex-Shader. Jede Berechnung, die an den Vertices durchgeführt und dann nur über Fragmente interpoliert werden kann (über `varying`s), ist ein Leistungsgewinn. (Die Interpolation von `varying`s ist sehr billig und wird automatisch für Sie durch die fest vorprogrammierte Rasterisierungsphase der Grafik-Pipeline durchgeführt.)

Zum Beispiel kann eine einfache Animation einer texturierten Oberfläche durch eine zeitabhängige Transformation der Texturkoordinaten erreicht werden. (Der einfachste Fall ist das Hinzufügen eines Uniformvektors zur Texturkoordinaten-Attributvektor) Falls optisch akzeptabel, kann man die Texturkoordinaten im Vertex-Shader anstatt im Fragment-Shader transformieren, um eine bessere Leistung zu erzielen.

Ein häufiger Kompromiss besteht darin, einige Beleuchtungsberechnungen pro Vertex anstatt pro Fragment (Pixel) durchzuführen. In einigen Fällen, insbesondere bei einfachen Modellen oder dichten Vertices, sieht das gut genug aus.

Das Gegenteil davon ist, wenn ein Modell mehr Vertices als Pixel im gerenderten Ausgabebild aufweist. Jedoch ist LOD Meshes normalerweise die Antwort auf dieses Problem, selten wird Arbeit vom Vertex zum Fragment-Shader verschoben.

## Shaders kompilieren und Programme parallel verknüpfen

Es ist verlockend, Shaders und Programme seriell zu kompilieren und zu verknüpfen, aber viele Browser können in parallelen Hintergrund-Threads kompilieren und verknüpfen.

Anstatt von:

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

Während wir ein Muster beschrieben haben, das Browsern ermöglicht, in parallelen Threads zu kompilieren und zu verknüpfen, blockiert normalerweise das Überprüfen von `COMPILE_STATUS` oder `LINK_STATUS`, bis das Kompilieren oder Verknüpfen abgeschlossen ist. In Browsern, wo es verfügbar ist, bietet die [KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/) Erweiterung eine _nicht-blockierende_ `COMPLETION_STATUS`-Abfrage. Bevorzugen Sie es, diese Erweiterung zu aktivieren und zu nutzen.

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

Diese Technik funktioniert möglicherweise nicht in allen Anwendungen, zum Beispiel bei denen, die Programme sofort für das Rendering verfügbar haben müssen. Überlegen Sie dennoch, wie Variationen funktionieren können.

## Überprüfen Sie keine Shader-Kompilierungsstatus, es sei denn, das Verknüpfen schlägt fehl

Es gibt sehr wenige Fehler, die garantiert zum Fehlschlag der Shader-Kompilierung führen, die jedoch nicht auf die Verknüpfungszeit verschoben werden können. Die [ESSL3-Spezifikation](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) sagt dies unter "Error Handling":

> Die Implementierung sollte Fehler so früh wie möglich melden, muss jedoch in jedem Fall das Folgende erfüllen:
>
> - Alle lexikalischen, grammatikalischen und semantischen Fehler müssen nach einem Aufruf von glLinkProgram entdeckt worden sein.
> - Fehler aufgrund von Mismatch zwischen dem Vertex- und Fragment-Shader (Link-Fehler) müssen nach einem Aufruf von glLinkProgram entdeckt worden sein.
> - Fehler aufgrund der Überschreitung von Ressourcenlimits müssen nach einem Zeichnungsaufruf oder einem Aufruf von glValidateProgram entdeckt worden sein.
> - Ein Aufruf von glValidateProgram muss alle Fehler in Verbindung mit einem Programmobjekt unter Berücksichtigung des aktuellen GL-Zustands melden.
>
> Die Verteilung der Aufgaben zwischen dem Compiler und Linker ist implementierungsabhängig. Daher gibt es viele Fehler, die entweder zur Kompilier- oder Verknüpfungszeit je nach Implementierung entdeckt werden können.

Zusätzlich ist das Abfragen des Kompilierungsstatus ein synchroner Aufruf, der das Pipelining unterbricht.

Anstatt von:

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

Wenn Sie erwarten, einen essl300 `int` zwischen Shaders zu übergeben und er muss 32-Bit haben, müssen Sie `highp` verwenden, oder es werden Portabilitätsprobleme auftreten. (Funktioniert auf Desktop, nicht auf Android)

Wenn Sie eine Fließkomma-Textur haben, verlangt iOS, dass Sie `highp sampler2D foo;` verwenden, oder es wird Ihnen sehr schmerzhaft nur `lowp`-Texturabfragen geben! (+/-2,0 max ist wahrscheinlich nicht gut genug für Sie)

### Implizite Standards

Die Vertex-Sprache hat die folgenden global gültigen Standardpräzisionsanweisungen vorausdeklariert:

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

Die Fragment-Sprache hat die folgenden global gültigen Standardpräzisionsanweisungen vorausdeklariert:

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### In WebGL 1 ist `highp float`-Unterstützung in Fragment-Shaders optional

Die bedingungslose Verwendung von `highp`-Präzision in Fragment-Shaders verhindert, dass Ihre Inhalte auf einigen älteren mobilen Hardware funktioniert.

Während Sie `mediump float` verwenden können, sollten Sie sich bewusst sein, dass dies oft zu verfälschten Darstellungen aufgrund mangelnder Präzision führt (insbesondere auf mobilen Systemen), obwohl die Verfälschung auf einem typischen Desktop-Computer nicht sichtbar sein wird.

Wenn Sie Ihre Präzisionsanforderungen kennen, wird Ihnen `getShaderPrecisionFormat()` mitteilen, was das System unterstützt.

Wenn `highp float` verfügbar ist, wird `GL_FRAGMENT_PRECISION_HIGH` als `1` definiert sein.

Ein guter Mustervorschlag für „Geben Sie mir immer die höchste Präzision“:

```glsl
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
```

### ESSL100 Mindestanforderungen (WebGL 1)

| `float`   | Denkweise                | Bereich       | minimum über Null | Präzision     |
| --------- | ------------------------ | ------------- | ----------------- | ------------- |
| `highp`   | float24\*                | (-2^62, 2^62) | 2^-62             | 2^-16 relativ |
| `mediump` | IEEE float16             | (-2^14, 2^14) | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-bit festes Vorzeichen | (-2, 2)       | 2^-8              | 2^-8 absolut  |

| `int`     | Denkweise | Bereich       |
| --------- | --------- | ------------- |
| `highp`   | int17     | (-2^16, 2^16) |
| `mediump` | int11     | (-2^10, 2^10) |
| `lowp`    | int9      | (-2^8, 2^8)   |

_\*float24: Vorzeichen-Bit, 7-Bit für Exponent, 16-Bit für Mantisse._

### ESSL300 Mindestanforderungen (WebGL 2)

| `float`   | Denkweise                | Bereich         | minimum über Null | Präzision     |
| --------- | ------------------------ | --------------- | ----------------- | ------------- |
| `highp`   | IEEE float32             | (-2^126, 2^127) | 2^-126            | 2^-24 relativ |
| `mediump` | IEEE float16             | (-2^14, 2^14)   | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-bit festes Vorzeichen | (-2, 2)         | 2^-8              | 2^-8 absolut  |

| `(u)int`  | Denkweise | Bereich `int` | Bereich `unsigned int` |
| --------- | --------- | ------------- | ---------------------- |
| `highp`   | (u)int32  | [-2^31, 2^31] | [0, 2^32]              |
| `mediump` | (u)int16  | [-2^15, 2^15] | [0, 2^16]              |
| `lowp`    | (u)int9   | [-2^8, 2^8]   | [0, 2^9]               |

## Bevorzugen Sie eingebauten Funktionen anstatt eigene zu erstellen

Bevorzugen Sie eingebauten Funktionen wie `dot`, `mix` und `normalize`. Im besten Fall könnten benutzerdefinierte Implementierungen so schnell laufen wie die eingebauten Funktionen, die sie ersetzen, aber erwarten Sie nicht, dass sie es tun. Hardware hat oft hyperoptimierte oder sogar spezialisierte Anweisungen für eingebaute Funktionen, und der Compiler kann Ihre benutzerdefinierten Implementierungen nicht zuverlässig durch die speziellen eingebauten Codepfade ersetzen.

## Verwenden Sie Mipmaps für jede Textur, die Sie in 3D sehen werden

Im Zweifel, rufen Sie `generateMipmaps()` nach dem Hochladen von Texturen auf. Mipmaps sind speichergünstig (nur 30% Overhead), während sie oft große Leistungsverbesserungen bieten, wenn Texturen "herausgezoomt" oder allgemein in der Entfernung in 3D herunterskaliert werden, oder sogar für Cubemaps!

Es ist schneller, von kleineren Texturbildern zu sampeln, aufgrund besserer inhärenter Cache-Lokalität der Texturabrufe: Das Herauszoomen einer nicht-mipgemappten Textur ruiniert die Lokalität der Texturabrufcaches, weil benachbarte Pixel nicht mehr von benachbarten Texeln sampeln!

Falls jedoch 2D-Ressourcen nicht "herausgezoomt" sind, zahlen Sie nicht den 30% Speichersurplus für Mipmaps:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(In WebGL 2 sollten Sie einfach `texStorage` mit `levels=1` verwenden)

Ein Vorbehalt: `generateMipmaps` funktioniert nur, wenn Sie in der Lage wären, in die Textur zu rendern, wenn Sie sie an einen Framebuffer anhängen. (Die Spezifikation nennt dies "color-renderable formats") Wenn ein System Fließkomma-Texturen unterstützt, aber kein Render-to-Float, wird `generateMipmaps` für Fließkomma-Formate fehlschlagen.

## Gehen Sie nicht davon aus, dass Sie in Fließkomma-Texturen rendern können

Es gibt viele, viele Systeme, die RGBA32F-Texturen unterstützen, aber wenn Sie eine an einen Framebuffer anhängen, erhalten Sie `FRAMEBUFFER_INCOMPLETE_ATTACHMENT` von `checkFramebufferStatus()`. Es kann auf Ihrem System funktionieren, aber _die meisten_ mobilen Systeme werden es nicht unterstützen!

Bei WebGL 1 verwenden Sie die Erweiterungen `EXT_color_buffer_half_float` und `WEBGL_color_buffer_float`, um die Unterstützung des Renderns in Fließkomma-Texturen für float16 bzw. float32 zu überprüfen.

Bei WebGL 2 überprüft `EXT_color_buffer_float` die Unterstützung des Renderns in Fließkomma-Texturen sowohl für float32 als auch float16. `EXT_color_buffer_half_float` ist auf Systemen vorhanden, die nur das Rendern in float16-Texturen unterstützen.

### Rendern in float32 bedeutet nicht float32-Blending!

Es kann auf Ihrem System funktionieren, aber auf vielen anderen wird es nicht. Vermeiden Sie es, wenn möglich. Überprüfen Sie die `EXT_float_blend`-Erweiterung, um Unterstützung zu überprüfen.

Float16-Blending wird immer unterstützt.

## Einige Formate (z.B. RGB) können emuliert sein

Eine Reihe von Formaten (insbesondere Drei-Kanal-Formate) werden emuliert. Zum Beispiel ist RGB32F oft tatsächlich RGBA32F und Luminance8 kann tatsächlich RGBA8 sein. RGB8 ist besonders oft überraschend langsam, da das Maskieren des Alpha-Kanals und/oder das Patchen von Blend-Funktionen relativ hohen Aufwand hat. Bevorzugen Sie die Verwendung von RGBA8 und ignorieren Sie das Alpha selbst für bessere Leistung.

## Vermeiden Sie alpha:false, was teuer sein kann

Die Angabe von `alpha:false` während der Erstellung des Kontexts führt dazu, dass der Browser die WebGL-gerenderte Canvas so zusammenstellt, als wäre sie undurchsichtig, und ignoriert dabei alle Alpha-Werte, die die Anwendung im Fragment-Shader schreibt. Auf einigen Plattformen kommt diese Fähigkeit leider mit erheblichen Leistungskosten. Der RGB-Backbuffer muss möglicherweise auf einer RGBA-Fläche emuliert werden, und es gibt relativ wenige Techniken, die in der OpenGL-API verfügbar sind, um es so erscheinen zu lassen, dass eine RGBA-Fläche keinen Alpha-Kanal hat. [Es wurde festgestellt](https://crbug.com/1045643), dass all diese Techniken eine ungefähr gleiche Leistungsauswirkung auf betroffene Plattformen haben.

Die meisten Anwendungen, sogar diejenige, die Alpha-Blending benötigen, können so strukturiert werden, dass sie `1.0` für den Alpha-Kanal produzieren. Die Hauptausnahme dazu ist jede Anwendung, die die Ziel-Alpha in der Mischfunktion benötigt. Falls möglich, wird empfohlen, dies zu tun, anstatt `alpha:false` zu verwenden.

## Betrachten Sie komprimierte Texturformate

Während JPG und PNG im Allgemeinen kleiner über die Leitung sind, sind GPU-komprimierte Texturformate im GPU-Speicher kleiner und werden schneller gesampelt. (Dies reduziert den Texturspeicherbandbreiteverbrauch, der auf Mobilgeräten kostbar ist) Allerdings haben komprimierte Texturformate schlechtere Qualität als JPG und sind im Allgemeinen nur für Farben akzeptabel (nicht z.B. für Normale oder Koordinaten).

Unglücklicherweise gibt es kein einziges universell unterstütztes Format. Jedes System hat mindestens eines der folgenden:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

WebGL 2 hat universelle Unterstützung durch Kombination von:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc (Mobil)

WEBGL_compressed_texture_astc bietet sowohl höhere Qualität als auch/oder höhere Kompression, wird jedoch nur auf neuerer Hardware unterstützt.

### Basis Universal Texturkompressionsformat/-bibliothek

Basis Universal löst einige der oben genannten Probleme. Es bietet eine Möglichkeit, alle gängigen komprimierten Texturformate mit einer einzigen komprimierten Texturdatei zu unterstützen, durch eine JavaScript-Bibliothek, die Formate effizient zur Ladezeit konvertiert. Es fügt auch zusätzliche Kompression hinzu, die Basis Universal komprimierte Texturdateien viel kleiner als reguläre komprimierte Texturen über die Leitung macht, vergleichbarer mit JPEG.

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## Speicherverbrauch von Tiefen- und Schablonenformaten

Tiefen- und Schablonenanbindungen und -formate sind tatsächlich auf vielen Geräten untrennbar. Sie könnten DEPTH_COMPONENT24 oder STENCIL_INDEX8 anfordern, aber oft bekommen Sie im Hintergrund D24X8 und X24S8 32bpp Formate. Gehen Sie davon aus, dass der Speicherverbrauch von Tiefen- und Schablonenformaten auf das nächste Vielfache von vier Bytes aufgerundet wird.

## texImage/texSubImage-Uploads (insbesondere Videos) können Pipeline-Flushes verursachen

Die meisten Textur-Uploads von DOM-Elementen verursachen einen Verarbeitungsvorgang, der vorübergehend intern GL-Programme wechselt und einen Pipeline-Flush verursacht. (Pipelines sind explizit in [Vulkan](https://docs.vulkan.org/spec/latest/chapters/pipelines.html) etc. formalisiert, aber sie sind hinter den Kulissen in OpenGL and WebGL implizit. Pipelines sind mehr oder weniger das Tupel aus Shader-Programm, Tiefen-/Schablonen-/Multisample-/Blend-/Rasterisierungszustand)

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

Bevorzugen Sie, Uploads vor dem Start des Zeichnens zu machen oder zumindest zwischen Pipelines:

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

## Verwenden Sie texStorage, um Texturen zu erstellen

Die WebGL 2.0 `texImage*`-API ermöglicht es Ihnen, jede Mip-Ebene unabhängig und in beliebiger Größe zu definieren, selbst die nicht übereinstimmenden Mip-Größen sind kein Fehler bis zur Zeichenzeit, was bedeutet, dass der Treiber die Textur im GPU-Speicher tatsächlich nicht vorbereiten kann, bis die Textur zum ersten Mal gezeichnet wird.

Außerdem könnten einige Treiber bedingungslos die gesamte Mip-Kette (+30% Speicher!) allokieren, selbst wenn Sie nur eine einzige Ebene wollen.

Daher bevorzugen Sie `texStorage` + `texSubImage` für Texturen in WebGL 2.

## Verwenden Sie invalidateFramebuffer

Das Speichern von Daten, die Sie nicht wieder verwenden werden, kann hohe Kosten verursachen, insbesondere auf gekachelten Rendering-GPUs, die auf Mobilgeräten üblich sind. Wenn Sie mit den Inhalten einer Framebuffer-Anbindung fertig sind, verwenden Sie WebGL 2.0's `invalidateFramebuffer`, um die Daten zu verwerfen, anstatt den Treiber dazu zu bringen, Zeit mit dem Speichern der Daten für die spätere Verwendung zu verschwenden. Insbesondere TIEFE/SCHABLONE und/oder multisample Anbindungen sind großartige Kandidaten für `invalidateFramebuffer`.

## Asynchrone Nicht-Blockierende Datenrückgabe verwenden

Operationen wie `readPixels` und `getBufferSubData` sind typischerweise synchron, aber mit denselben APIs kann eine nicht blockierende, asynchrone Datenrückgabe erreicht werden. Der Ansatz in WebGL 2 ist analog zum Ansatz in OpenGL: [Asynchrone Downloads in blockierenden APIs](https://kdashg.github.io/misc/async-gpu-downloads.html)

```js
function clientWaitAsync(gl, sync, flags, interval_ms) {
  return new Promise((resolve, reject) => {
    function test() {
      const res = gl.clientWaitSync(sync, flags, 0);
      if (res === gl.WAIT_FAILED) {
        reject(new Error("clientWaitSync failed"));
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

## `devicePixelRatio` und High-DPI-Rendering

Der Umgang mit `devicePixelRatio !== 1.0` ist knifflig. Während der übliche Ansatz darin besteht, `canvas.width = width * devicePixelRatio` festzulegen, verursacht dies Moire-Effekte bei nicht-ganzzahligen `devicePixelRatio`-Werten, wie sie bei der UI-Skalierung unter Windows üblich sind, sowie beim Zoomen auf allen Plattformen.

Stattdessen können wir nicht-ganzzahlige Werte für CSS's `top`/`bottom`/`left`/`right` verwenden, um unser Canvas relativ zuverlässig auf ganze Gerät-koordinaten zu "pre-snappen".

Demo: [Gerät-Pixel-Vorschnapp](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

## ResizeObserver und 'device-pixel-content-box'

In [unterstützenden Browsern](/de/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize#browser_compatibility) kann `ResizeObserver` mit `'device-pixel-content-box'` verwendet werden, um einen Rückruf anzufordern, der die tatsächliche {{Glossary("device_pixel", "Device-Pixel")}}-Größe eines Elements enthält. Dies kann verwendet werden, um eine asynchrone, aber genaue Funktion aufzubauen:

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

Bitte beachten Sie [die Spezifikation](https://www.w3.org/TR/resize-observer/#resize-observer-interface) für weitere Details.

## ImageBitmap-Erstellung

Die Verwendung des [ImageBitmapOptions-Dictionarys](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapoptions) ist unerlässlich, um Texturen ordnungsgemäß für den Upload zu WebGL vorzubereiten, aber leider gibt es keinen offensichtlichen Weg, um genau abzufragen, welche Dictionary-Mitglieder von einem bestimmten Browser unterstützt werden.

[Dieses JSFiddle](https://jsfiddle.net/ptkyewhx/) veranschaulicht, wie man herausfindet, welche Dictionary-Mitglieder von einem bestimmten Browser unterstützt werden.

## Verwenden Sie `WEBGL_provoking_vertex`, wenn es verfügbar ist

Beim Zusammenstellen von Vertices in Primitives wie Dreiecken und Linien gilt in OpenGLs Konvention der letzte Vertex des Primitivs als der "provoking vertex". Dies ist wichtig, wenn `flat` Vertex-Attribut-Interpolation in ESSL300 (WebGL 2) verwendet wird; der Attributwert vom provoking vertex wird für alle Vertices des Primitivs verwendet.

Heutzutage werden viele WebGL-Implementierungen der Browser auf verschiedenen Grafikschnittstellen als OpenGL gehostet, und einige dieser APIs verwenden den ersten Vertex als provoking vertex für Zeichnungsbefehle. Die Emulation von OpenGLs provoking vertex-Konvention kann auf einigen dieser APIs rechenintensiv sein.

Aus diesem Grund wurde die Erweiterung [WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/) eingeführt. Wenn eine WebGL-Implementierung diese Erweiterung bereitstellt, ist dies ein Hinweis für die Anwendung, dass das Ändern der Konvention zu `FIRST_VERTEX_CONVENTION_WEBGL` die Leistung verbessern wird. Es wird dringend empfohlen, dass Anwendungen, die Flat Shading verwenden, auf das Vorhandensein dieser Erweiterung prüfen und diese verwenden, wenn sie verfügbar ist. Beachten Sie, dass dies Änderungen an den Vertex-Puffern oder Shadern der Anwendung erfordern kann.
