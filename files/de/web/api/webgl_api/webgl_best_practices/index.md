---
title: WebGL Best Practices
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{DefaultAPISidebar("WebGL")}}

WebGL ist eine komplexe API und oft ist nicht offensichtlich, welche die empfohlenen Nutzungsweisen sind. Diese Seite behandelt Empfehlungen über das gesamte Spektrum der Fachkompetenz und hebt nicht nur Do's und Don'ts hervor, sondern erklärt auch _warum_. Sie können sich auf dieses Dokument verlassen, um Ihre Wahl des Ansatzes zu leiten und sicherzustellen, dass Sie auf dem richtigen Weg sind, unabhängig davon, welchen Browser oder welche Hardware Ihre Benutzer verwenden.

## WebGL-Fehler adressieren und beseitigen

Ihre Anwendung sollte ohne die Erzeugung von WebGL-Fehlern (wie von `getError` zurückgegeben) laufen. Jeder WebGL-Fehler wird in der Web-Konsole als JavaScript-Warnung mit einer erklärenden Nachricht gemeldet. Nach zu vielen Fehlern (32 in Firefox) stellt WebGL die Generierung erläuternder Nachrichten ein, was das Debugging erheblich behindert.

Die _einzigen_ Fehler, die eine gut gestaltete Seite generiert, sind `OUT_OF_MEMORY` und `CONTEXT_LOST`.

## Verfügbarkeit von Erweiterungen verstehen

Die Verfügbarkeit der meisten WebGL-Erweiterungen hängt vom Client-System ab. Wenn Sie WebGL-Erweiterungen verwenden, versuchen Sie nach Möglichkeit, sie optional zu machen, indem Sie sich anpassen, falls sie nicht unterstützt werden.

Diese WebGL 1-Erweiterungen sind universell unterstützt und können als vorhanden betrachtet werden:

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(siehe auch: [WebGL-Funktionsebenen und % Unterstützung](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

Erwägen Sie, diese in WebGLRenderingContext wie folgt zu implementieren: <https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js>

## Systemgrenzen verstehen

Ähnlich wie bei Erweiterungen werden die Grenzen Ihres Systems anders sein als die der Systeme Ihrer Kunden! Gehen Sie nicht davon aus, dass Sie dreißig Textursampler pro Shader verwenden können, nur weil es auf Ihrem Gerät funktioniert!

Die Mindestanforderungen für WebGL sind ziemlich niedrig. In der Praxis unterstützen alle Systeme mindestens Folgendes:

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

Ihr Desktop kann möglicherweise 16k Texturen oder vielleicht 16 Textureinheiten im Vertex-Shader unterstützen, aber die meisten anderen Systeme tun dies nicht, und Inhalte, die für Sie funktionieren, werden für sie nicht funktionieren!

## Ungültigmachen von FBO-Attachment-Bindungen vermeiden

Fast jede Änderung an den Attachment-Bindungen eines FBO macht dessen Framebuffer-Vollständigkeit ungültig. Richten Sie Ihre heißen Framebuffer im Voraus ein.

In Firefox aktiviert das Setzen der Einstellung `webgl.perf.max-warnings` auf `-1` in about:config Performance-Warnungen, die Warnungen über Ungültigmachungen von FB-Vollständigkeiten beinhalten.

### Änderungen an VAO-Anhängen vermeiden (vertexAttribPointer, disable/enableVertexAttribArray)

Das Zeichnen von statischen, unveränderlichen VAOs ist schneller als das Ändern des gleichen VAO bei jedem Zeichnungsaufruf. Bei unveränderten VAOs können Browser die Abrufgrenzen zwischenspeichern, während bei Änderungen der VAOs die Browser die Grenzen erneut validieren und berechnen müssen. Der Overhead dafür ist relativ gering, aber die Wiederverwendung von VAOs bedeutet auch weniger `vertexAttribPointer`-Aufrufe, sodass es sich lohnt, dies zu tun, wo immer es leicht ist.

## Objekte frühzeitig löschen

Warten Sie nicht darauf, dass der Garbage Collector / Cycle Collector feststellt, dass Objekte verwaist sind und sie zerstört. Implementierungen verfolgen die Lebendigkeit von Objekten, sodass das 'Löschen' auf API-Ebene nur den Handle freigibt, der auf das tatsächliche Objekt verweist. (konzeptionell das Freigeben des Verweispointers des Handles auf das Objekt) Erst wenn das Objekt in der Implementierung nicht mehr verwendet wird, wird es tatsächlich freigegeben. Wenn Sie beispielsweise nie wieder direkt auf Ihre Shader-Objekte zugreifen möchten, löschen Sie einfach deren Handles, nachdem Sie sie an ein Programmobjekt angehängt haben.

## Kontexte frühzeitig verlieren

Erwägen Sie auch, WebGL-Kontexte über die `WEBGL_lose_context`-Erweiterung frühzeitig zu verlieren, wenn Sie definitiv mit ihnen fertig sind und das Rendering-Ergebnis der Ziel-Canvas nicht mehr benötigen. Beachten Sie, dass dies beim Verlassen einer Seite nicht erforderlich ist - fügen Sie dazu keinen Unload-Ereignishandler hinzu.

## Flush aufrufen, wenn Ergebnisse erwartet werden

Rufen Sie `flush()` auf, wenn Ergebnisse wie Abfragen erwartet werden oder beim Abschluss eines Rendering-Frames.

Flush weist die Implementierung an, alle ausstehenden Befehle für die Ausführung zu übermitteln, sie aus der Warteschlange zu spülen, anstatt auf weitere Befehle zu warten, die in die Warteschlange gestellt werden, bevor sie zur Ausführung gesendet werden.

Beispielsweise ist es möglich, dass das folgende ohne Kontextverlust nie abgeschlossen wird:

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL hat standardmäßig keinen SwapBuffers-Aufruf, sodass ein Flush helfen kann, die Lücke zu füllen.

### Verwenden Sie `webgl.flush()`, wenn `requestAnimationFrame` nicht verwendet wird

Wenn Sie nicht RAF verwenden, verwenden Sie `webgl.flush()`, um eine frühzeitige Ausführung der in die Warteschlange gestellten Befehle zu fördern.

Da RAF direkt von der Frame-Grenze gefolgt wird, ist mit RAF wirklich kein explizites `webgl.flush()` erforderlich.

## API-Aufrufe, die Blockierungen verursachen, in der Produktion vermeiden

Bestimmte WebGL-Einstiegspunkte - einschließlich `getError` und `getParameter` - verursachen synchrone Stalls im aufrufenden Thread. Selbst einfache Anforderungen können bis zu 1 ms dauern, aber sie können noch länger dauern, wenn sie warten müssen, bis alle Grafikarbeiten abgeschlossen sind (mit einem Effekt ähnlich wie `glFinish()` in nativen OpenGL).

In Produktionscode vermeiden Sie solche Einstiegspunkte, insbesondere im Hauptthread des Browsers, wo sie die gesamte Seite ins Stocken bringen können (oft einschließlich des Scrollens oder sogar des gesamten Browsers).

- `getError()`: Verursacht einen Flush + Round-Trip, um Fehler vom GPU-Prozess abzurufen.

  Beispielsweise wird innerhalb von Firefox glGetError nur nach Allokationen (`bufferData`, `*texImage*`, `texStorage*`) geprüft, um GL_OUT_OF_MEMORY-Fehler zu erfassen.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()`, andere `get`s bei Shadern/Programmen: Flush + Shader-Kompilierung + Round-Trip, wenn nicht nach Abschluss der Shader-Kompilierung durchgeführt. (Siehe auch [parallele Shader-Kompilierung](#kompilieren_sie_shader_und_verlinken_sie_programme_parallel) unten.)
- `get*Parameter()` im Allgemeinen: Möglicher Flush + Round-Trip. In einigen Fällen werden diese zwischengespeichert, um den Round-Trip zu vermeiden, aber versuchen Sie, sich nicht auf diese zu verlassen.
- `checkFramebufferStatus()`: Möglicher Flush + Round-Trip.
- `getBufferSubData()`: Übliche Finish + Round-Trip. (Dies ist in Ordnung für READ-Puffer in Verbindung mit Fences - siehe [asynchrones Daten-Readback](#verwenden_sie_asynchrones_nicht-blockierendes_daten-readback) unten.)
- `readPixels()` zur CPU (d. h. ohne gebundenen UNPACK-Puffer): Finish + Round-Trip. Verwenden Sie stattdessen GPU-GPU-`readPixels` in Verbindung mit asynchronem Daten-Readback.

## Aktivieren Sie Attrib 0 immer als Array

Wenn Sie ohne aktiviertes Vertex Attrib 0 als Array zeichnen, zwingen Sie den Browser, eine komplizierte Emulation beim Ausführen auf Desktop OpenGL durchzuführen (wie auf macOS). Dies liegt daran, dass auf Desktop OpenGL nichts gezeichnet wird, wenn Vertex Attrib 0 nicht als Array aktiviert ist. Sie können `bindAttribLocation` verwenden, um ein Vertex-Attribut zu zwingen, Standort 0 zu verwenden, und `enableVertexAttribArray(0)` verwenden, um es als Array zu aktivieren.

## Schätzen Sie ein per-Pixel-VRAM-Budget

WebGL bietet keine APIs zum Abfragen der maximalen Menge an Videospeicher im System, da solche Abfragen nicht portabel sind. Anwendungen müssen sich dennoch des VRAM-Verbrauchs bewusst sein und nicht einfach so viel wie möglich zuweisen.

Eine Technik, die von dem Google Maps-Team entwickelt wurde, ist das Konzept eines _per-Pixel-VRAM-Budgets_:

1\) Entscheiden Sie für ein System (z. B. einen bestimmten Desktop / Laptop), wie viel VRAM Ihre Anwendung maximal nutzen sollte. 2) Berechnen Sie die Anzahl der Pixel, die von einem maximierten Browserfenster abgedeckt werden. Z.B. `(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)` 3) Das per-Pixel-VRAM-Budget ist (1) geteilt durch (2) und ist eine Konstante.

Diese Konstante sollte _generell_ zwischen Systemen portabel sein. Mobile Geräte haben normalerweise kleinere Bildschirme als leistungsstarke Desktop-Computer mit großen Monitoren. Berechnen Sie diese Konstante auf einigen Zielsystemen neu, um eine zuverlässige Schätzung zu erhalten.

Nun passen Sie alle internen Caching-Vorgänge in der Anwendung (WebGLBuffers, WebGLTextures usw.) an, um eine maximale Größe einzuhalten, die durch diese Konstante multipliziert mit der Anzahl der von dem _aktuellen_ Browserfenster abgedeckten Pixel berechnet wird. Dies erfordert die Abschätzung der Anzahl der Bytes, die von jeder Textur verbraucht werden, zum Beispiel. Die Obergrenze muss typischerweise auch bei Größenänderung des Browserfensters aktualisiert werden, und ältere Ressourcen, die über das Limit hinausgehen, müssen entfernt werden.

Wenn Sie den VRAM-Verbrauch der Anwendung unter dieser Obergrenze halten, hilft dies, Speicherfehler und damit verbundene Instabilität zu vermeiden.

## Erwägen Sie das Rendern in einen kleineren Back-Buffer

Ein üblicher (und einfacher) Weg, um Qualität gegen Geschwindigkeit auszutauschen, besteht darin, in einen kleineren Back-Buffer zu rendern und das Ergebnis hochzuskalieren. Erwägen Sie die Reduzierung von canvas.width und height und behalten Sie canvas.style.width und height auf einer konstanten Größe.

## Zeichenaufrufe stapeln

Das „Stapeln“ von Zeichenaufrufen zu weniger, größeren Zeichenaufrufen wird die Leistung im Allgemeinen verbessern. Wenn Sie 1000 Sprites malen müssen, versuchen Sie, es als einen einzigen drawArrays()- oder drawElements()-Aufruf zu tun.

Es ist üblich, „degenerierte Dreiecke“ zu verwenden, wenn Sie diskontinuierliche Objekte als einzigen drawArrays(TRIANGLE_STRIP)-Aufruf zeichnen müssen. Degenerierte Dreiecke sind Dreiecke ohne Fläche, daher jedes Dreieck, bei dem mehr als ein Punkt an derselben genauen Position ist. Diese Dreiecke werden effektiv übersprungen, was es Ihnen ermöglicht, einen neuen Dreiecks-Streifen ohne Verbindung zu Ihrem vorherigen zu beginnen, ohne in mehrere Zeichenaufrufe aufteilen zu müssen.

Eine weitere wichtige Methode für das Stapeln ist das Textur-Atlasing, bei dem mehrere Bilder in einer einzigen Textur platziert werden, oft wie ein Schachbrett. Da Sie Zeichnungsaufrufgruppen aufteilen müssen, um Texturen zu ändern, ermöglicht dies das Textur-Atlasing, mehr Zeichenaufrufe zu größeren Gruppen zu kombinieren. Siehe [dieses Beispiel](https://webglsamples.org/sprites/readme.html), das demonstriert, wie man sogar Sprites, die auf mehrere Texturatlanten verweisen, in einem einzigen Zeichenaufruf kombiniert.

## Vermeiden Sie "#ifdef GL_ES"

Sie sollten `#ifdef GL_ES` in Ihren WebGL-Shadern niemals verwenden; diese Bedingung ist in WebGL immer wahr. Obwohl einige frühe Beispiele dies verwendeten, ist es nicht notwendig.

## Bevorzugen Sie es, Arbeiten im Vertex-Shader auszuführen

Erledigen Sie so viel Arbeit wie möglich im Vertex-Shader, anstatt im Fragment-Shader. Dies liegt daran, dass per Zeichnungsaufruf Fragment-Shader in der Regel viel öfter ausgeführt werden als Vertex-Shader. Jede Berechnung, die an den Vertizes durchgeführt und dann einfach unter Fragmenten interpoliert werden kann (über `varying`s), ist ein Leistungsgewinn. (Die Interpolation von Varyings ist sehr kostengünstig und wird automatisch für Sie durch die feste Funktionalität der Rasterisierungsphase der Grafik-Pipeline durchgeführt.)

Zum Beispiel kann eine einfache Animation einer texturierten Oberfläche durch eine zeitabhängige Transformation der Texturkoordinaten erreicht werden. (Der einfachste Fall ist das Hinzufügen eines Uniformvektors zu dem Texturkoordinatenattributvektor) Wenn es visuell akzeptabel ist, kann man die Texturkoordinaten im Vertex-Shader anstelle im Fragment-Shader transformieren, um eine bessere Leistung zu erzielen.

Ein häufiger Kompromiss besteht darin, einige Beleuchtungsberechnungen pro Vertex statt pro Fragment (Pixel) durchzuführen. In einigen Fällen, insbesondere bei einfachen Modellen oder dichten Vertices, sieht das gut genug aus.

Das Gegenteil ist, wenn ein Modell mehr Vertices hat als Pixel im gerenderten Ausgabe. Jedoch ist LOD-Meshes in der Regel die Antwort auf dieses Problem, selten Arbeit vom Vertex- auf den Fragment-Shader zu verschieben.

## Kompilieren Sie Shader und verlinken Sie Programme parallel

Es ist verlockend, Shader serielle zu kompilieren und Programme zu verlinken, aber viele Browser können parallel in Hintergrundthreads kompilieren und verlinken.

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

Während wir ein Muster beschrieben haben, um es Browsern zu ermöglichen, parallel zu kompilieren und zu verlinken, blockiert das normale Überprüfen von `COMPILE_STATUS` oder `LINK_STATUS` bis die Kompilierung oder das Verlinken abgeschlossen ist. In Browsern, in denen es verfügbar ist, bietet die [KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/) Erweiterung eine _nicht-blockierende_ `COMPLETION_STATUS`-Abfrage. Bevorzugen Sie, die Verwendung dieser Erweiterung zu aktivieren.

Anwendungsbeispiel:

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

Diese Technik funktioniert möglicherweise nicht in allen Anwendungen, beispielsweise in Anwendungen, die Programme sofort für das Rendering verfügbar haben müssen. Erwägen Sie dennoch, wie Variationen funktionieren könnten.

## Überprüfen Sie den Shader-Kompilierstatus nicht, es sei denn, das Verlinken schlägt fehl

Es gibt sehr wenige Fehler, die garantiert zu einem Scheitern der Shader-Kompilierung führen, aber nicht auf die Link-Zeit verschoben werden können. Die [ESSL3-Spezifikation](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) sagt dies unter "Fehlerbehandlung":

> Die Implementierung sollte Fehler so früh wie möglich melden, muss jedoch in jedem Fall Folgendes gewährleisten:
>
> - Alle lexikalischen, grammatikalischen und semantischen Fehler müssen nach einem Aufruf von glLinkProgram erkannt worden sein
> - Fehler aufgrund von Unstimmigkeiten zwischen dem Vertex- und dem Fragment-Shader (Link-Fehler) müssen nach einem Aufruf von glLinkProgram erkannt worden sein
> - Fehler aufgrund der Überschreitung von Ressourcenlimits müssen nach jedem Zeichenaufruf oder einem Aufruf von glValidateProgram erkannt worden sein
> - Ein Aufruf von glValidateProgram muss alle Fehler im Zusammenhang mit einem Programmobjekt im aktuellen GL-Status melden.
>
> Die Zuweisung von Aufgaben zwischen Compiler und Linker ist implementierungsabhängig. Folglich gibt es viele Fehler, die entweder zur Kompilierungs- oder Linkzeit erkannt werden können, je nach Implementierung.

Außerdem ist das Abfragen des Kompilierungsstatus ein synchroner Aufruf, der die Pipeline unterbricht.

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

## Seien Sie präzise mit GLSL-Genauigkeitsanmerkungen

Wenn Sie erwarten, einen essl300 `int` zwischen Shadern zu übergeben, und Sie benötigen ihn mit 32-Bit, müssen Sie `highp` verwenden, sonst werden Sie Probleme mit der Portabilität haben. (Funktioniert auf dem Desktop, nicht auf Android)

Wenn Sie eine Fließkommatextur haben, erfordert iOS, dass Sie `highp sampler2D foo;` verwenden, oder es wird Ihnen sehr schmerzhaft `lowp`-Texturproben liefern! (+/-2,0 max ist wahrscheinlich nicht gut genug für Sie)

### Implizite Standards

Die Vertex-Sprache hat die folgenden vordeklarierten, globalen Standard-Präzisionsanweisungen:

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

Die Fragment-Sprache hat die folgenden vordeklarierten, globalen Standard-Präzisionsanweisungen:

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### In WebGL 1 ist "highp float"-Unterstützung in Fragment-Shadern optional

Die Verwendung bedingungsloser `highp`-Präzision in Fragment-Shadern verhindert, dass Ihre Inhalte auf einigen älteren mobilen Geräten funktionieren.

Sie können `mediump float` stattdessen verwenden, aber beachten Sie, dass dies oft zu beschädigten Darstellungen aufgrund mangelnder Präzision führend (besonders bei mobilen Systemen), obwohl die Beschädigung auf einem typischen Desktop-Computer nicht sichtbar sein wird.

Wenn Sie Ihre Präzisionsanforderungen kennen, wird `getShaderPrecisionFormat()` Ihnen sagen, was das System unterstützt.

Wenn `highp float` verfügbar ist, wird `GL_FRAGMENT_PRECISION_HIGH` als `1` definiert sein.

Ein gutes Muster für "gib mir immer die höchste Präzision":

```glsl
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
```

### ESSL100 Mindestanforderungen (WebGL 1)

| `float`   | denken               | Bereich       | Minimum über Null | Präzision     |
| --------- | -------------------- | ------------- | ----------------- | ------------- |
| `highp`   | float24\*            | (-2^62, 2^62) | 2^-62             | 2^-16 relativ |
| `mediump` | IEEE float16         | (-2^14, 2^14) | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-Bit Vorzeichenfix | (-2, 2)       | 2^-8              | 2^-8 absolut  |

| `int`     | denken | Bereich       |
| --------- | ------ | ------------- |
| `highp`   | int17  | (-2^16, 2^16) |
| `mediump` | int11  | (-2^10, 2^10) |
| `lowp`    | int9   | (-2^8, 2^8)   |

_\*float24: Vorzeichen-Bit, 7-Bit für Exponent, 16-Bit für Mantisse._

### ESSL300 Mindestanforderungen (WebGL 2)

| `float`   | denken               | Bereich         | Minimum über Null | Präzision     |
| --------- | -------------------- | --------------- | ----------------- | ------------- |
| `highp`   | IEEE float32         | (-2^126, 2^127) | 2^-126            | 2^-24 relativ |
| `mediump` | IEEE float16         | (-2^14, 2^14)   | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-Bit Vorzeichenfix | (-2, 2)         | 2^-8              | 2^-8 absolut  |

| `(u)int`  | denken   | `int` Bereich | `unsigned int` Bereich |
| --------- | -------- | ------------- | ---------------------- |
| `highp`   | (u)int32 | [-2^31, 2^31] | [0, 2^32]              |
| `mediump` | (u)int16 | [-2^15, 2^15] | [0, 2^16]              |
| `lowp`    | (u)int9  | [-2^8, 2^8]   | [0, 2^9]               |

## Bevorzugen Sie eingebaute Funktionen, anstatt eigene zu erstellen

Bevorzugen Sie eingebaute Funktionen wie `dot`, `mix` und `normalize`. Im besten Fall könnten kundenspezifische Implementierungen so schnell laufen wie die eingebauten Funktionen, die sie ersetzen, aber erwarten Sie nicht, dass sie es tun. Hardware hat oft hyper-optimierte oder sogar spezialisierte Anweisungen für eingebaute Funktionen, und der Compiler kann Ihre benutzerdefinierten Ersatzimplementierungen für eingebaute Funktionen nicht zuverlässig mit den speziellen eingebauten Codepfaden ersetzen.

## Verwenden Sie Mipmaps für jede Textur, die Sie in 3D sehen werden

Im Zweifelsfall rufen Sie `generateMipmaps()` nach dem Textur-Upload auf. Mipmaps sind speichergünstig (nur 30% Overhead) und bieten oft erhebliche Leistungsverbesserungen, wenn Texturen „herausgezoomt“ oder im Allgemeinen in der Ferne in 3D herunterskaliert werden, oder sogar für Würfelkarten!

Es ist schneller, von kleineren Texturbildern zu samplen, aufgrund besserer inhärenter Texturfetch-Cache-Lokalität: Das Herauszoomen auf eine nicht Mipmap-basierte Textur ruiniert die Texturfetch-Cache-Lokalität, da benachbarte Pixel nicht mehr von benachbarten Texeln samplen!

Für 2D-Ressourcen, die niemals „herausgezoomt“ werden, zahlen Sie jedoch nicht den 30% Speicherkostenaufschlag für Mipmaps:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(In WebGL 2 sollten Sie einfach `texStorage` mit `levels=1` verwenden)

Ein Vorbehalt: `generateMipmaps` funktioniert nur, wenn es Ihnen möglich wäre, in die Textur zu rendern, wenn Sie sie an einen Framebuffer anfügen würden. (Die Spezifikation nennt dies „farb-renderbare Formate“) Wenn beispielsweise ein System Float-Texturen unterstützt, aber nicht zu Float rendern kann, wird `generateMipmaps` für Float-Formate fehlschlagen.

## Gehen Sie nicht davon aus, dass Sie in Float-Texturen rendern können

Es gibt viele, viele Systeme, die RGBA32F-Texturen unterstützen, aber wenn Sie eine an einen Framebuffer anhängen, erhalten Sie `FRAMEBUFFER_INCOMPLETE_ATTACHMENT` von `checkFramebufferStatus()`. Es kann auf Ihrem System funktionieren, aber die _meisten_ Mobilgeräte unterstützen es nicht!

Verwenden Sie in WebGL 1 die `EXT_color_buffer_half_float` und `WEBGL_color_buffer_float` Erweiterungen, um die Unterstützung für render-to-float-texture für float16 bzw. float32 zu überprüfen.

In WebGL 2 überprüft `EXT_color_buffer_float` die Unterstützung für render-to-float-texture sowohl für float32 als auch für float16. `EXT_color_buffer_half_float` ist auf Systemen vorhanden, die nur das Rendering auf float16-Texturen unterstützen.

### Render-to-float32 impliziert nicht float32-Blending!

Es kann auf Ihrem System funktionieren, aber auf vielen anderen nicht. Vermeiden Sie es, wenn Sie können. Prüfen Sie die Unterstützung für die `EXT_float_blend` Erweiterung.

Float16-Blending wird immer unterstützt.

## Einige Formate (z. B. RGB) können emuliert sein

Einige Formate (insbesondere drei-Kanal-Formate) werden emuliert. Zum Beispiel ist RGB32F häufig tatsächlich RGBA32F, und Luminance8 kann tatsächlich RGBA8 sein. RGB8 ist insbesondere oft überraschend langsam, da das Maskieren des Alphakanals und/oder das Anpassen von Blend-Funktionen ziemlich hohen Overhead haben. Verwenden Sie besser RGBA8 und ignorieren Sie das Alpha selbst für eine bessere Leistung.

## Vermeiden Sie alpha:false, was teuer sein kann

Das Angeben von `alpha:false` während der Kontext-Erstellung führt dazu, dass der Browser die WebGL-gerenderte Canvas so zusammensetzt, als wäre sie opak, wobei alle Alpha-Werte ignoriert werden, die die Anwendung in ihrem Fragment-Shader schreibt. Auf einigen Plattformen kommt diese Möglichkeit leider mit erheblichen Leistungseinbußen einher. Das RGB-Back-Buffer muss möglicherweise auf einer RGBA-Fläche emuliert werden, und es gibt relativ wenige Techniken in der OpenGL-API, um es so erscheinen zu lassen, dass eine RGBA-Fläche keinen Alpha-Kanal hat. [Es wurde festgestellt](https://crbug.com/1045643), dass all diese Techniken in etwa gleich großen Leistungsaufwand auf betroffenen Plattformen haben.

Die meisten Anwendungen, auch solche, die Alpha-Blending erfordern, können so strukturiert werden, dass sie `1.0` für den Alpha-Kanal produzieren. Die Hauptausnahme bildet jede Anwendung, die Ziel-Alpha in der Blend-Funktion erfordert. Wenn möglich, wird empfohlen, dies zu tun, anstatt `alpha:false` zu verwenden.

## Erwägen Sie komprimierte Texturformate

Während JPG und PNG im Allgemeinen kleiner über die Leitung sind, sind GPU-komprimierte Texturformate im Grafikspeicher kleiner und schneller zu samplen. (Das reduziert die Texturspeicherbandbreite, die auf Mobilgeräten wertvoll ist) Komprimierte Texturformate haben jedoch eine schlechtere Qualität als JPG und sind im Allgemeinen nur für Farbwerte akzeptabel (nicht z. B. für Normalen oder Koordinaten).

Leider gibt es kein universell unterstütztes Format. Jedes System hat mindestens eines der folgenden:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

WebGL 2 hat universelle Unterstützung durch Kombination von:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc (Mobil)

WEBGL_compressed_texture_astc hat sowohl eine höhere Qualität und/oder eine höhere Komprimierung, wird jedoch nur auf neuerer Hardware unterstützt.

### Basis Universal Texture Compression Format/Bibliothek

Basis Universal löst mehrere der oben genannten Probleme. Es bietet eine Möglichkeit, alle gängigen komprimierten Texturformate mit einer einzigen komprimierten Texturdatei zu unterstützen, durch eine JavaScript-Bibliothek, die effizient Formate zur Ladezeit konvertiert. Es fügt auch zusätzliche Komprimierung hinzu, die Basis Universal komprimierte Texturdateien viel kleiner als reguläre komprimierte Texturen über die Leitung, vergleichbarer mit JPEG macht.

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## Speicherverbrauch von Tiefen- und Stencil-Formaten

Tiefen- und Stencil-Anhänge und -Formate sind auf vielen Geräten tatsächlich untrennbar. Sie können um DEPTH_COMPONENT24 oder STENCIL_INDEX8 bitten, aber häufig erhalten Sie D24X8 und X24S8 32bpp-Formate im Hintergrund. Gehen Sie davon aus, dass der Speicherverbrauch von Tiefen- und Stencil-Formaten auf das nächste Vielfache von vier Byte aufgerundet wird.

## texImage/texSubImage Uploads (insbesondere Videos) können Pipeline-Flushes verursachen

Die meisten Textur-Uploads von DOM-Elementen werden einen Verarbeitungsdurchgang erfordern, der vorübergehend intern GL-Programme umschaltet und einen Pipeline-Flush verursacht. (Pipelines sind formell in [Vulkan](https://registry.khronos.org/vulkan/specs/1.2/html/chap9.html#VkGraphicsPipelineCreateInfo) usw. explizit, aber hinter den Kulissen in OpenGL und WebGL implizit. Pipelines sind mehr oder weniger das Tupel aus Shader-Programm, Tiefen-/Stencil-/Multisample-/Blend-/Rasterisierungsstatus)

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

Hinter den Szenen im Browser:

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

Bevorzugen Sie es, Uploads durchzuführen, bevor Sie mit dem Zeichnen beginnen, oder zumindest zwischen Pipelines:

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

Hinter den Szenen im Browser:

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

Die WebGL 2.0 `texImage*` API ermöglicht es Ihnen, jedes Mipmap-Level unabhängig und in jeder Größe zu definieren, selbst die nicht übereinstimmenden Mip-Größen sind kein Fehler bis zur Zeichnungszeit, was bedeutet, dass der Treiber die Textur im GPU-Speicher bis zur ersten Zeichnung tatsächlich nicht vorbereiten kann.

Darüber hinaus könnten einige Treiber bedingungslos die gesamte Mip-Kette (+30 % Speicher!) zuweisen, auch wenn Sie nur ein einzelnes Level wollen.

Bevorzugen Sie also `texStorage` + `texSubImage` für Texturen in WebGL 2.

## Verwenden Sie invalidateFramebuffer

Das Speichern von Daten, die Sie nicht erneut verwenden werden, kann hohe Kosten haben, insbesondere auf Fliesenrender-GPUs, die auf Mobilgeräten üblich sind. Wenn Sie mit den Inhalten eines Framebuffer-Anhangs fertig sind, verwenden Sie WebGL 2.0's `invalidateFramebuffer`, um die Daten zu verwerfen, anstatt den Treiber Zeit damit zu verschwenden, die Daten für eine spätere Verwendung zu speichern. DEPTH/STENCIL und/oder Multi-Sample-Anhänge sind besonders gute Kandidaten für `invalidateFramebuffer`.

## Verwenden Sie asynchrones nicht-blockierendes Daten-Readback

Vorgänge wie `readPixels` und `getBufferSubData` sind in der Regel synchron, aber mit denselben APIs kann ein nicht-blockierender, asynchroner Daten-Readback erreicht werden. Der Ansatz in WebGL 2 ist analog zum Ansatz in OpenGL: [Async-Downloads in blockierenden APIs](https://kdashg.github.io/misc/async-gpu-downloads.html)

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

## `devicePixelRatio` und hochauflösendes Rendering

Der Umgang mit `devicePixelRatio !== 1.0` ist knifflig. Während der übliche Ansatz darin besteht, `canvas.width = width * devicePixelRatio` zu setzen, wird dies Moiré-Effekte mit nicht-ganzzahligen Werten von `devicePixelRatio` verursachen, wie sie beim UI-Scaling unter Windows und beim Zoomen auf allen Plattformen üblich sind.

Stattdessen können wir nicht-ganzzahlige Werte für CSS's `top`/`bottom`/`left`/`right` verwenden, um unser Canvas relativ zuverlässig auf ganze ganzzahlige Gerätekoordinaten vorzurasten.

Demo: [Device pixel presnap](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

## ResizeObserver und 'device-pixel-content-box'

In unterstützenden Browsern (Chromium?) kann `ResizeObserver` mit `'device-pixel-content-box'` verwendet werden, um eine Rückruffunktion anzufordern, die die echte Gerätepixelgröße eines Elements enthält. Dies kann verwendet werden, um eine asynchrone, aber genaue Funktion zu erstellen:

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

Die Verwendung des [ImageBitmapOptions-Dictionary](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapoptions) ist entscheidend für die ordnungsgemäße Vorbereitung von Texturen für den Upload zu WebGL, aber leider gibt es keinen offensichtlichen Weg, um abzufragen, welche Dictionary-Mitglieder von einem gegebenen Browser unterstützt werden.

[Dieses JSFiddle](https://jsfiddle.net/ptkyewhx/) zeigt, wie man herausfindet, welche Dictionary-Mitglieder von einem bestimmten Browser unterstützt werden.

## Verwenden Sie `WEBGL_provoking_vertex`, wenn es verfügbar ist

Beim Zusammenstellen von Vertices in Primitive wie Dreiecke und Linien wird in OpenGLs Konvention der letzte Vertex des Primitivs als "auslösender Vertex" betrachtet. Dies ist relevant, wenn `flat` Vertex-Attributinterpolation in ESSL300 (WebGL 2) verwendet wird; der Attributwert aus dem auslösenden Vertex wird für alle Vertices des Primitivs verwendet.

Heutzutage sind viele WebGL-Implementierungen von Browsern auf anderen Grafik-APIs als OpenGL abgelegt, und einige dieser APIs verwenden den ersten Vertex als auslösenden Vertex für Zeichenbefehle. Die Emulation der von OpenGL verwendeten auslösenden Vertex-Konvention kann auf einigen dieser APIs rechenintensiv sein.

Aus diesem Grund wurde die Erweiterung [WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/) eingeführt. Wenn eine WebGL-Implementierung diese Erweiterung zugänglich macht, ist dies ein Hinweis für die Anwendung, dass eine Änderung der Konvention auf `FIRST_VERTEX_CONVENTION_WEBGL` die Leistung verbessern wird. Es wird dringend empfohlen, dass Anwendungen, die flaches Shading verwenden, auf das Vorhandensein dieser Erweiterung prüfen und sie verwenden, wenn sie verfügbar ist. Beachten Sie, dass dies Änderungen an den Vertex-Puffern oder Shadern der Anwendung erfordern kann.
