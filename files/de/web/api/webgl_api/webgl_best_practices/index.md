---
title: Best Practices für WebGL
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: 14bbb5e28cc560752ed4c8e88479c4bb5d661953
---

{{DefaultAPISidebar("WebGL")}}

WebGL ist eine komplizierte API, und es ist oft nicht offensichtlich, welche empfohlenen Vorgehensweisen es gibt. Diese Seite behandelt Empfehlungen für alle Erfahrungsstufen und hebt nicht nur wichtige Prinzipien hervor, sondern erklärt auch _warum_. Sie können sich auf dieses Dokument verlassen, um Ihre Entscheidungsfindung zu leiten und sicherzustellen, dass Sie auf dem richtigen Weg sind, unabhängig davon, welchen Browser oder welche Hardware Ihre Nutzer verwenden.

## WebGL-Fehler beheben und beseitigen

Ihre Anwendung sollte ohne Generierung von WebGL-Fehlern laufen (wie von `getError` zurückgegeben). Jeder WebGL-Fehler wird in der Webkonsole als JavaScript-Warnung mit einer beschreibenden Nachricht gemeldet. Nach zu vielen Fehlern (32 in Firefox) hört WebGL auf, beschreibende Nachrichten zu generieren, was das Debugging stark behindert.

Die _einzigen_ Fehler, die eine gut geformte Seite generiert, sind `OUT_OF_MEMORY` und `CONTEXT_LOST`.

## Verfügbarkeit von Erweiterungen verstehen

Die Verfügbarkeit der meisten WebGL-Erweiterungen hängt vom Client-System ab. Wenn Sie WebGL-Erweiterungen verwenden, versuchen Sie, sie optional zu machen, indem Sie sich anpassen, falls sie nicht unterstützt werden.

Diese WebGL 1 Erweiterungen sind universell unterstützt und können regelmäßig genutzt werden:

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(siehe auch: [WebGL Feature Levels und % Unterstützung](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

Erwägen Sie, diese in `WebGLRenderingContext` zu polyfillen, wie z.B.: <https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js>

## Systemgrenzen verstehen

Ähnlich wie bei Erweiterungen werden die Grenzen Ihres Systems anders sein als die Ihrer Kunden! Gehen Sie nicht davon aus, dass Sie dreißig Textursammler pro Shader verwenden können, nur weil es auf Ihrem Gerät funktioniert!

Die Mindestanforderungen für WebGL sind recht niedrig. In der Praxis unterstützen alle Systeme mindestens Folgendes:

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

Ihr Desktop unterstützt möglicherweise 16k-Texturen oder vielleicht 16 Textureinheiten im Vertex-Shader, aber die meisten anderen Systeme tun dies nicht, und Inhalte, die für Sie funktionieren, werden für sie nicht funktionieren!

## Vermeiden Sie das Ungültigmachen von FBO-Anhangsbindungen

Fast jede Änderung an den Anhangsbindungen eines FBO invalidiert dessen Framebuffer-Vollständigkeit. Richten Sie Ihre "heißen" Framebuffer im Voraus ein.

In Firefox aktiviert das Setzen der Einstellung `webgl.perf.max-warnings` auf `-1` in about:config Performancewarnungen, die auch Hinweise auf Ungültigmachungen der FB-Vollständigkeit enthalten.

### Vermeiden Sie das Ändern von VAO-Anhängen (vertexAttribPointer, disable/enableVertexAttribArray)

Das Zeichnen von statischen, unveränderlichen VAOs ist schneller als das Mutieren desselben VAO bei jedem Zeichnungsaufruf. Bei unveränderten VAOs können Browser die Abrufgrenzen zwischenspeichern, während bei sich ändernden VAOs die Browser die Grenzen neu validieren und berechnen müssen. Der Aufwand hierfür ist relativ gering, aber die Wiederverwendung von VAOs bedeutet auch weniger `vertexAttribPointer`-Aufrufe, daher lohnt es sich, dies überall dort zu tun, wo es einfach ist.

## Objekte frühzeitig löschen

Warten Sie nicht darauf, dass der Garbage Collector/Durchlauf-Sammler erkennt, dass Objekte verwaist sind und sie zerstört. Implementierungen verfolgen die Lebensdauer von Objekten, sodass das 'Löschen' auf API-Ebene nur den Griff freigibt, der auf das eigentliche Objekt verweist. (konzeptionell die Freigabe des Griff-Ref.-Zeigers auf das Objekt) Erst wenn das Objekt in der Implementierung nicht verwendet wird, wird es tatsächlich freigegeben. Wenn Sie beispielsweise Ihre Shader-Objekte nicht mehr direkt ansprechen möchten, löschen Sie einfach deren Griffe, nachdem Sie sie einem Programmobjekt zugeordnet haben.

## Kontext-Verluste frühzeitig herbeiführen

Erwägen Sie auch, WebGL-Kontexte über die `WEBGL_lose_context`-Erweiterung frühzeitig zu verlieren, wenn Sie definitiv fertig mit ihnen sind und die Rendering-Ergebnisse der Ziel-Leinwand nicht mehr benötigen. Beachten Sie, dass dies nicht notwendig ist, wenn Sie von einer Seite weg navigieren - fügen Sie keinen Unload-Ereignishandler nur zu diesem Zweck hinzu.

## Flush anwenden, wenn Ergebnisse erwartet werden

Rufen Sie `flush()` auf, wenn Sie Ergebnisse wie Abfragen erwarten oder bei Abschluss eines Renderframe.

Flush weist die Implementierung an, alle ausstehenden Befehle zur Ausführung zu senden und sie aus der Warteschlange zu entfernen, anstatt auf mehr Befehle zu warten, bevor sie zur Ausführung gesendet werden.

Zum Beispiel ist es möglich, dass das folgende Beispiel ohne Kontextverlust nie abgeschlossen wird:

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL hat standardmäßig keinen `SwapBuffers`-Aufruf, daher kann ein Flush helfen, die Lücke zu schließen.

### Verwenden Sie `webgl.flush()`, wenn Sie nicht `requestAnimationFrame` nutzen

Wenn Sie nicht RAF verwenden, nutzen Sie `webgl.flush()`, um die zeitnahe Ausführung der in der Warteschlange befindlichen Befehle zu fördern.

Da RAF direkt auf die Frame-Grenze folgt, ist ein explizites `webgl.flush()` mit RAF nicht wirklich notwendig.

## Vermeiden Sie blockierende API-Aufrufe in der Produktion

Bestimmte WebGL-Einstiegspunkte - darunter `getError` und `getParameter` - verursachen synchrone Stopps auf dem aufrufenden Thread. Sogar einfache Anfragen können bis zu 1ms dauern, aber sie können noch länger dauern, wenn sie darauf warten müssen, dass alle Grafikarbeiten abgeschlossen sind (mit einer ähnlichen Wirkung wie `glFinish()` im nativen OpenGL).

In Produktionscode sollten Sie solche Einstiegspunkte vermeiden, insbesondere im Hauptthread des Browsers, wo sie die gesamte Seite ruckeln lassen können (oft einschließlich des Scrollens oder sogar des gesamten Browsers).

- `getError()`: verursacht einen Flush + Round-Trip, um Fehler vom GPU-Prozess abzurufen.

  Zum Beispiel wird in Firefox glGetError nur nach Allokationen (`bufferData`, `*texImage*`, `texStorage*`) überprüft, um irgendwelche `GL_OUT_OF_MEMORY`-Fehler aufzunehmen.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()`, andere `get`s auf Shadern/Programmen: flush + Shader-Kompilierung + Round-Trip, wenn nicht nach Abschluss der Shader-Kompilierung durchgeführt. (Siehe auch [parallele Shaderkompilierung](#shader_kompilieren_und_programme_parallel_verlinken) unten.)
- `get*Parameter()` im Allgemeinen: möglicher Flush + Round-Trip. In einigen Fällen werden diese zwischengespeichert, um den Round-Trip zu vermeiden, aber versuchen Sie, sich nicht darauf zu verlassen.
- `checkFramebufferStatus()`: mögliches Flush + Round-Trip.
- `getBufferSubData()`: übliches Finish + Round-Trip. (Dies ist in Verbindung mit Zäunen bei `READ`-Puffern in Ordnung - siehe [asynchrone Datenrücklesung](#verwenden_sie_nicht-blockierende_asynchrone_datenrücklesung) unten.)
- `readPixels()` zur CPU (d.h. ohne gebundenen `UNPACK`-Puffer): Finish + Round-Trip. Verwenden Sie stattdessen GPU-GPU-`readPixels` in Verbindung mit asynchroner Datenrücklesung.

## Aktivieren Sie immer Vertex Attrib 0 als Array

Wenn Sie ohne aktiviertes Array für Vertex Attrib 0 zeichnen, zwingen Sie den Browser, eine komplizierte Emulation zu verwenden, wenn er auf Desktop-OpenGL (z.B. auf macOS) läuft. Der Grund dafür ist, dass in Desktop-OpenGL nichts gezeichnet wird, wenn Vertex Attrib 0 nicht Array-aktiviert ist. Sie können `bindAttribLocation` verwenden, um ein Vertex Attribut zu erzwingen, den Ort 0 zu verwenden, und `enableVertexAttribArray(0)`, um es array-aktiviert zu machen.

## Schätzen Sie ein VRAM-Budget pro Pixel

WebGL bietet keine APIs, um die maximale Menge an Videospeicher im System abzufragen, da solche Abfragen nicht portabel sind. Dennoch müssen Anwendungen sich des VRAM-Verbrauchs bewusst sein und nicht einfach so viel wie möglich zuweisen.

Eine Technik, die vom Google Maps-Team entwickelt wurde, ist der Begriff eines _pro Pixel VRAM-Budgets_:

1\) Entscheiden Sie für ein System (z.B. einen bestimmten Desktop/Laptop) die maximale Menge an VRAM, die Ihre Anwendung nutzen sollte. 2) Berechnen Sie die Anzahl der Pixel, die von einem maximierten Browserfenster abgedeckt werden. Z.B. `(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)` 3) Das VRAM-Budget pro Pixel ist (1) geteilt durch (2) und ist eine Konstante.

Diese Konstante sollte _allgemein_ zwischen Systemen portabel sein. Mobile Geräte haben typischerweise kleinere Bildschirme als leistungsstarke Desktops mit großen Monitoren. Berechnen Sie diese Konstante auf einigen Zielsystemen neu, um eine verlässliche Schätzung zu erhalten.

Passen Sie nun alle internen Caches in der Anwendung (WebGLBuffers, WebGLTextures, etc.) an, um eine maximale Größe einzuhalten, berechnet durch diese Konstante multipliziert mit der Anzahl der Pixel, die durch das _aktuelle_ Browserfenster abgedeckt werden. Dies erfordert die Schätzung der Anzahl von Bytes, die von jeder Textur verbraucht werden, zum Beispiel. Die Obergrenze muss auch typischerweise aktualisiert werden, wenn das Browserfenster seine Größe ändert, und ältere Ressourcen über dem Limit müssen entfernt werden.

Das Einhalten der VRAM-Nutzung der Anwendung unter dieser Obergrenze hilft, Speicherfehler und damit verbundene Instabilitäten zu vermeiden.

## Ziehen Sie in Betracht, in einen kleineren Back-Buffer zu rendern

Eine häufige (und einfache) Methode, um Qualität gegen Geschwindigkeit auszutauschen, ist das Rendern in einen kleineren Back-Buffer und das Hochskalieren des Ergebnisses. Erwägen Sie das Reduzieren von `canvas.width` und `canvas.height` und das Beibehalten von `canvas.style.width` und `canvas.style.height` auf einer konstanten Größe.

## Batch-Zeichnungsaufrufe

Das "Batching" von Zeichnungsaufrufen in weniger und größere Zeichnungsaufrufe wird im Allgemeinen die Performance verbessern. Wenn Sie 1000 Sprites zeichnen müssen, versuchen Sie es als einen einzigen `drawArrays()` oder `drawElements()`-Aufruf zu machen.

Es ist üblich, "degenerierte Dreiecke" zu verwenden, wenn Sie diskontinuierliche Objekte als einen einzelnen `drawArrays(TRIANGLE_STRIP)` Aufruf zeichnen müssen. Degenerierte Dreiecke sind Dreiecke ohne Fläche, daher jedes Dreieck, bei dem mehr als ein Punkt am gleichen exakten Ort ist. Diese Dreiecke werden effektiv übersprungen, was es Ihnen ermöglicht, einen neuen Dreiecks-Strang losgelöst von Ihrem vorherigen zu beginnen, ohne auf mehrere Zeichnungsaufrufe aufteilen zu müssen.

Eine weitere wichtige Methode zum Batchen ist das Texture Atlasing, bei dem mehrere Bilder in einer einzigen Textur platziert werden, oft wie ein Schachbrettmuster. Da Sie Zeichnungsaufruf-Batches aufteilen müssen, um Texturen zu wechseln, ermöglicht Ihnen das Texture Atlasing, mehr Zeichnungsaufrufe zu größeren, weniger Batches zusammenzufassen. Siehe [dieses Beispiel](https://webglsamples.org/sprites/readme.html), das zeigt, wie man sogar Sprites, die mehrere Texture Atlases referenzieren, zu einem einzigen Zeichnungsaufruf kombinieren kann.

## Vermeiden Sie `#ifdef GL_ES`

Sie sollten niemals `#ifdef GL_ES` in Ihren WebGL-Shadern verwenden; diese Bedingung ist in WebGL immer wahr. Obwohl einige frühe Beispiele dies verwendeten, ist es nicht notwendig.

## Bevorzugen Sie, Arbeiten im Vertex Shader zu erledigen

Erledigen Sie so viel Arbeit wie möglich im Vertex Shader anstatt im Fragment Shader. Dies liegt daran, dass pro Zeichnungsaufruf Fragment Shader im Allgemeinen viel häufiger als Vertex Shader ausgeführt werden. Jede Berechnung, die auf den Vertices durchgeführt werden kann und dann einfach über `varying`s auf Fragmenten interpoliert wird, ist ein Leistungsgewinn. (Die Interpolation von Varyings ist sehr günstig und wird für Sie automatisch durch die feste Funktionalität der Rasterisierungsphase der Grafikpipeline durchgeführt.)

Beispielsweise kann eine einfache Animation einer texturierten Oberfläche durch eine zeitabhängige Transformation der Texturkoordinaten erreicht werden. (Der einfachste Fall ist das Hinzufügen eines konstanten Vektors zu den Texturkoordinaten-Attributsvektor) Wenn visuell akzeptabel, kann man die Texturkoordinaten im Vertex Shader anstelle des Fragment Shaders transformieren, um eine bessere Leistung zu erzielen.

Ein häufiger Kompromiss ist es, einige Beleuchtungsberechnungen pro Vertex anstelle von pro Fragment (Pixel) durchzuführen. In einigen Fällen, insbesondere bei einfachen Modellen oder dichten Vertices, sieht dies gut genug aus.

Das Inverse davon ist, wenn ein Modell mehr Vertices als Pixel im gerenderten Ausgabebild hat. LOD-Meshes sind jedoch normalerweise die Antwort auf dieses Problem; selten wird Arbeit vom Vertex- auf den Fragment-Shader verschoben.

## Shader kompilieren und Programme parallel verlinken

Es ist verlockend, Shader und Programme seriell zu kompilieren und zu verlinken, aber viele Browser können in Hintergrund-Threads parallel kompilieren und verlinken.

Anstelle von:

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

Während wir ein Muster beschrieben haben, um Browsern zu erlauben, in Hintergrund-Threads parallel zu kompilieren und zu verlinken, blockiert das normale Überprüfen von `COMPILE_STATUS` oder `LINK_STATUS`, bis die Kompilierung oder der Link abgeschlossen ist. In Browsern, in denen es verfügbar ist, bietet die [KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/) Erweiterung eine _nicht blockierende_ `COMPLETION_STATUS`-Abfrage. Bevorzugen Sie es, diese Erweiterung zu aktivieren und zu verwenden.

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

Diese Technik funktioniert möglicherweise nicht in allen Anwendungen, z.B. in denen, die Programme sofort für das Rendering benötigen. Dennoch sollten Sie in Betracht ziehen, wie Variationen davon funktionieren könnten.

## Überprüfen Sie den Shader-Compile-Status nicht, es sei denn, das Linking schlägt fehl

Es gibt sehr wenige Fehler, die garantiert ein Scheitern der Shader-Kompilierung verursachen, aber nicht auf Link-Zeit aufgeschoben werden können. Die [ESSL3-Spezifikation](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) sagt dies unter "Fehlerbehandlung":

> Die Implementierung sollte Fehler so früh wie möglich melden, muss jedoch auf jeden Fall das folgende einhalten:
>
> - Alle lexikalischen, grammatikalischen und semantischen Fehler müssen nach einem Aufruf von glLinkProgram entdeckt worden sein.
> - Fehler aufgrund von Unterschieden zwischen dem Vertex- und Fragment-Shader (Link-Fehler) müssen nach einem Aufruf von glLinkProgram entdeckt worden sein.
> - Fehler aufgrund von überschrittenen Ressourcenbeschränkungen müssen nach jedem Zeichnungsaufruf oder einem Aufruf von glValidateProgram entdeckt worden sein.
> - Ein Aufruf von glValidateProgram muss alle Fehler melden, die mit einem Programmobjekt in Verbindung mit dem aktuellen GL-Status verbunden sind.
>
> Die Zuweisung von Aufgaben zwischen dem Compiler und dem Linker ist implementierungsabhängig. Folglich gibt es viele Fehler, die entweder zur Kompilierungs- oder Link-Zeit entdeckt werden können, abhängig von der Implementierung.

Zusätzlich ist das Abfragen des Compile-Status ein synchroner Aufruf, der das Pipelining unterbricht.

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

## Präzise mit GLSL-Präzisionsanmerkungen sein

Wenn Sie erwarten, einen essl300 `int` zwischen Shadern zu übergeben, und Sie ihn mit 32 Bit benötigen, müssen Sie `highp` verwenden, sonst werden Sie Portabilitätsprobleme haben. (Funktioniert auf Desktop, nicht auf Android)

Wenn Sie eine Float-Textur haben, erfordert iOS, dass Sie `highp sampler2D foo;` verwenden, oder es wird Ihnen schmerzlich `lowp` Texturproben geben! (+/-2.0 max ist wahrscheinlich nicht gut genug für Sie)

### Implizite Standardwerte

Die Vertex-Sprache hat die folgenden vorangekündigten Standard-Präzisionsanweisungen mit globalem Umfang:

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

Die Fragment-Sprache hat die folgenden vorangekündigten Standard-Präzisionsanweisungen mit globalem Umfang:

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### In WebGL 1, "highp float" support ist optional in Fragment-Shadern

Die bedingungslose Verwendung von `highp` Präzision in Fragment-Shadern verhindert, dass Ihre Inhalte auf einigen älteren Mobilgeräten funktionieren.

Während Sie `mediump float` verwenden können, aber beachten Sie, dass dies oft zu korrupter Darstellung aufgrund von Mangel an Präzision führt (insbesondere auf mobilen Systemen), obwohl die Korruption nicht auf einem typischen Desktop-Computer sichtbar ist.

Wenn Sie Ihre Präzisionsanforderungen kennen, wird Ihnen `getShaderPrecisionFormat()` mitteilen, was das System unterstützt.

Wenn `highp float` verfügbar ist, wird `GL_FRAGMENT_PRECISION_HIGH` als `1` definiert.

Ein gutes Muster für "gib mir immer die höchste Präzision":

```glsl
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
```

### ESSL100 Mindestanforderungen (WebGL 1)

| `float`   | denken Sie an       | Bereich       | minimal über Null | Präzision     |
| --------- | ------------------- | ------------- | ----------------- | ------------- |
| `highp`   | float24\*           | (-2^62, 2^62) | 2^-62             | 2^-16 relativ |
| `mediump` | IEEE float16        | (-2^14, 2^14) | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-Bit signed fixed | (-2, 2)       | 2^-8              | 2^-8 absolut  |

| `int`     | denken | Bereich       |
| --------- | ------ | ------------- |
| `highp`   | int17  | (-2^16, 2^16) |
| `mediump` | int11  | (-2^10, 2^10) |
| `lowp`    | int9   | (-2^8, 2^8)   |

_\*float24: Vorzeichenbit, 7-Bit für Exponent, 16-Bit für Mantisse._

### ESSL300 Mindestanforderungen (WebGL 2)

| `float`   | denken Sie an       | Bereich         | minimal über Null | Präzision     |
| --------- | ------------------- | --------------- | ----------------- | ------------- |
| `highp`   | IEEE float32        | (-2^126, 2^127) | 2^-126            | 2^-24 relativ |
| `mediump` | IEEE float16        | (-2^14, 2^14)   | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-Bit signed fixed | (-2, 2)         | 2^-8              | 2^-8 absolut  |

| `(u)int`  | denken Sie an | `int` Bereich | `unsigned int` Bereich |
| --------- | ------------- | ------------- | ---------------------- |
| `highp`   | (u)int32      | [-2^31, 2^31] | [0, 2^32]              |
| `mediump` | (u)int16      | [-2^15, 2^15] | [0, 2^16]              |
| `lowp`    | (u)int9       | [-2^8, 2^8]   | [0, 2^9]               |

## Bevorzugen Sie eingebaute Methoden anstelle eigener Implementierungen

Bevorzugen Sie eingebaute Methoden wie `dot`, `mix` und `normalize`. Im besten Fall könnten benutzerdefinierte Implementierungen genauso schnell laufen wie die eingebauten Methoden, die sie ersetzen, aber verlassen Sie sich nicht darauf. Hardware hat oft hochoptimierte oder sogar spezialisierte Anweisungen für eingebaute Methoden, und der Compiler kann Ihre benutzerdefinierten Implementierungen nicht zuverlässig durch die speziellen eingebauten Codepfade ersetzen.

## Verwenden Sie Mipmaps für jede Textur, die Sie in 3D sehen werden

Im Zweifelsfall rufen Sie `generateMipmaps()` nach dem Hochladen von Texturen auf. Mipmaps sind speicherschonend (nur 30% Overhead) und bieten oft große Leistungsvorteile, wenn Texturen "herausgezoomt" oder generell in der Entfernung in 3D verkleinert werden, oder sogar für Cubemaps!

Es ist schneller, von kleineren Texturbildern zu sampeln, aufgrund der besseren inhärenten Texturabruf-Cache-Lokalität: Herauszoomen auf einer nicht-mipmapped Textur ruiniert die Texturabruf-Cache-Lokalität, weil benachbarte Pixel nicht mehr von benachbarten Texeln sampeln!

Für 2D-Ressourcen, die nie "herausgezoomt" werden, zahlen Sie jedoch nicht den 30% Speicheraufpreis für Mipmaps:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(In WebGL 2 sollten Sie einfach `texStorage` mit `levels=1` verwenden)

Ein Vorbehalt: `generateMipmaps` funktioniert nur, wenn Sie in der Lage wären, in die Textur zu rendern, wenn Sie sie an einen Framebuffer anhängen würden. (Die Spezifikation nennt dies "color-renderable formats") Zum Beispiel, wenn ein System Float-Texturen unterstützt, aber nicht render-to-float, wird `generateMipmaps` für Float-Formate fehlschlagen.

## Gehen Sie nicht davon aus, dass Sie in Float-Texturen rendern können

Es gibt viele, viele Systeme, die RGBA32F Texturen unterstützen, aber wenn Sie eine an einen Framebuffer anhängen, erhalten Sie `FRAMEBUFFER_INCOMPLETE_ATTACHMENT` von `checkFramebufferStatus()`. Es könnte auf Ihrem System funktionieren, aber _die meisten_ mobilen Systeme werden es nicht unterstützen!

In WebGL 1 verwenden Sie die `EXT_color_buffer_half_float` und `WEBGL_color_buffer_float` Erweiterungen, um die Unterstützung für render-to-float-texture für float16 bzw. float32 zu überprüfen.

In WebGL 2 prüft `EXT_color_buffer_float` die Unterstützung für render-to-float-texture sowohl für float32 als auch float16. `EXT_color_buffer_half_float` ist auf Systemen vorhanden, die nur das Rendern zu float16-Texturen unterstützen.

### Render-to-float32 impliziert nicht float32-blending!

Es könnte auf Ihrem System funktionieren, aber auf vielen anderen nicht. Vermeiden Sie es, wenn Sie können. Überprüfen Sie die `EXT_float_blend` Erweiterung, um die Unterstützung zu überprüfen.

Float16-Blending wird immer unterstützt.

## Einige Formate (z.B. RGB) können emuliert werden

Eine Reihe von Formaten (insbesondere Drei-Kanal-Formate) werden emuliert. Beispielsweise ist RGB32F oft tatsächlich RGBA32F, und Luminance8 kann tatsächlich RGBA8 sein. RGB8 im Besonderen ist oft überraschend langsam, da das Ausmaskieren des Alpha-Kanals und/oder das Patching von Blend-Funktionen recht hohen Overhead hat. Bevorzugen Sie die Verwendung von RGBA8 und ignorieren Sie den Alpha-Wert selbst für bessere Leistung.

## Vermeiden Sie `alpha:false`, da dies teuer sein kann

Das Festlegen von `alpha:false` während der Kontext-Erstellung bewirkt, dass der Browser die WebGL-gerenderte Leinwand so zusammensetzt, als wäre sie undurchsichtig, indem er alle Alpha-Werte ignoriert, die die Anwendung in ihrem Fragment-Shader schreibt. Auf einigen Plattformen ist diese Fähigkeit leider mit erheblichen Leistungseinbußen verbunden. Der RGB-Back-Buffer muss möglicherweise auf einer RGBA-Oberfläche emuliert werden, und es gibt relativ wenige Techniken in der OpenGL-API, um es so erscheinen zu lassen, dass eine RGBA-Oberfläche keinen Alpha-Kanal hat. [Es wurde festgestellt](https://crbug.com/1045643), dass alle diese Techniken auf betroffenen Plattformen ungefähr gleiche Leistungseinbußen haben.

Die meisten Anwendungen, sogar diejenigen, die Alpha-Blending erfordern, können so strukturiert werden, dass sie `1.0` für den Alpha-Kanal erzeugen. Die wichtigste Ausnahme ist jede Anwendung, die Ziel-Alpha in der Blending-Funktion erfordert. Wenn möglich, wird empfohlen, dies zu tun, anstatt `alpha:false` zu verwenden.

## Ziehen Sie komprimierte Texturformate in Betracht

Während JPG und PNG normalerweise kleiner im Übertragungsprozess sind, sind auf der GPU komprimierte Texturformate im GPU-Speicher kleiner und schneller zu samplen. (Dies reduziert die Texturspeicher-Bandbreite, die auf mobilen Geräten kostbar ist) Allerdings haben komprimierte Texturformate eine schlechtere Qualität als JPG und sind im Allgemeinen nur für Farben akzeptabel (z.B. nicht für Normalen oder Koordinaten).

Leider gibt es kein einheitlich unterstütztes Format. Jedes System hat mindestens eines der folgenden:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

WebGL 2 hat eine universelle Unterstützung durch die Kombination:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc (Mobil)

WEBGL_compressed_texture_astc bietet sowohl höhere Qualität als auch höhere Kompression, wird jedoch nur auf neuerer Hardware unterstützt.

### Basis Universal Texturkompressionsformat/Bibliothek

Basis Universal löst mehrere der oben genannten Probleme. Es bietet eine Möglichkeit, alle gängigen komprimierten Texturformate mit einer einzigen komprimierten Texturdatei zu unterstützen, durch eine JavaScript-Bibliothek, die effizient Formate zur Ladezeit konvertiert. Es fügt auch zusätzliche Kompression hinzu, wodurch Basis Universal komprimierte Texturdateien viel kleiner als reguläre komprimierte Texturen über die Leitung sind, vergleichbar mit JPEG.

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## Speicherverbrauch von Tiefen- und Stencil-Formaten

Tiefen- und Stencil-Anhänge und Formate sind auf vielen Geräten tatsächlich untrennbar. Sie könnten DEPTH_COMPONENT24 oder STENCIL_INDEX8 anfordern, aber oft erhalten Sie D24X8 und X24S8 32bpp-Formate im Hintergrund. Nehmen Sie an, dass der Speicherverbrauch von Tiefen- und Stencil-Formaten auf das nächstgelegene Vielfache von vier Bytes aufgerundet wird.

## texImage/texSubImage Uploads (insbesondere Videos) können Pipeline-Flushes verursachen

Die meisten Textur-Uploads von DOM-Elementen verursachen einen Verarbeitungsschritt, der intern vorübergehend GL-Programme wechselt und einen Pipeline-Flush verursacht. (Pipelines sind in [Vulkan](https://docs.vulkan.org/spec/latest/chapters/pipelines.html) usw. explizit formalisiert, aber hinter den Kulissen in OpenGL und WebGL implizit. Pipelines sind mehr oder weniger das Tupel aus Shader-Programm, Tiefen-/Stencil-/Multisample-/Blend-/Rasterisierungsstatus)

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

Bevorzugen Sie Uploads, bevor Sie das Zeichnen beginnen oder zumindest zwischen Pipelines:

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

Die WebGL 2.0 `texImage*` API ermöglicht es Ihnen, jedes Mip-Level unabhängig und in jeder Größe zu definieren, auch die nicht übereinstimmenden Mip-Größen sind kein Fehler bis zur Zeichenzeit, was bedeutet, dass es keine Möglichkeit für den Treiber gibt, die Textur im GPU-Speicher tatsächlich vorzubereiten, bis die Textur das erste Mal gezeichnet wird.

Darüber hinaus könnten einige Treiber bedingungslos die gesamte Mip-Kette (+30% Speicher!) allokieren, auch wenn Sie nur eine Ebene wünschen.

Bevorzugen Sie daher `texStorage` + `texSubImage` für Texturen in WebGL 2.

## Verwenden Sie invalidateFramebuffer

Das Speichern von Daten, die Sie nicht erneut verwenden werden, kann hohe Kosten haben, insbesondere auf Kachel-Rendering-GPUs, die auf mobilen Geräten üblich sind. Wenn Sie mit dem Inhalt eines Framebuffer-Anhangs fertig sind, verwenden Sie WebGL 2.0's `invalidateFramebuffer`, um die Daten zu verwerfen, anstatt den Treiber Zeit fürs Speichern der Daten für später zu verschwenden. Besonders `DEPTH/STENCIL` und/oder Multi-Sample-Anhänge sind gute Kandidaten für `invalidateFramebuffer`.

## Verwenden Sie nicht-blockierende asynchrone Datenrücklesung

Operationen wie `readPixels` und `getBufferSubData` sind normalerweise synchron, aber mit denselben APIs kann eine nicht-blockierende, asynchrone Datenrücklesung erreicht werden. Der Ansatz in WebGL 2 ist analog zum Ansatz in OpenGL: [Asynchrone Downloads in blockierenden APIs](https://kdashg.github.io/misc/async-gpu-downloads.html)

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

## `devicePixelRatio` und hochauflösendes Rendering

Der Umgang mit `devicePixelRatio !== 1.0` ist knifflig. Während der weit verbreitete Ansatz `canvas.width = width * devicePixelRatio` ist, wird dies Moiré-Artefakte mit nicht ganzzahligen Werten von `devicePixelRatio` verursachen, wie sie bei der UI-Skalierung unter Windows sowie beim Zoomen auf allen Plattformen üblich sind.

Stattdessen können wir nicht ganzzahlige Werte für die CSS-Eigenschaften `top`/`bottom`/`left`/`right` verwenden, um unsere Leinwand relativ zuverlässig auf ganze Zahlengerätekoordinaten vorzuschneiden.

Demo: [Device pixel presnap](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

## ResizeObserver und 'device-pixel-content-box'

Auf [unterstützten Browsern](/de/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize#browser_compatibility) kann `ResizeObserver` mit `'device-pixel-content-box'` verwendet werden, um einen Rückruf anzufordern, der die echte {{Glossary("device_pixel", "device pixel")}} Größe eines Elements einschließt. Dies kann verwendet werden, um eine asynchrone, aber genaue Funktion zu erstellen:

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

Bitte beziehen Sie sich auf [die Spezifikation](https://www.w3.org/TR/resize-observer/#resize-observer-interface) für weitere Details.

## Verwenden Sie `WEBGL_provoking_vertex`, wenn es verfügbar ist

Beim Zusammenstellen von Vertices zu Primitiven wie Dreiecken und Linien wird in OpenGLs Konvention der letzte Vertex des Primitives als "provoking vertex" betrachtet. Dies ist relevant, wenn `flat` Vertex-Attribut-Interpolation in ESSL300 (WebGL 2) verwendet wird; der Attributwert vom provocierenden Vertex wird für alle Vertices des Primitives verwendet.

Heutzutage werden viele WebGL-Implementierungen von Browsern auf anderen Grafik-APIs als OpenGL gehostet, und einige dieser APIs verwenden den ersten Vertex als provocierenden Vertex für Zeichnungsbefehle. Die Emulation der OpenGL-Konvention für provocierende Vertices kann auf einigen dieser APIs rechnerintensiv sein.

Aus diesem Grund wurde die [WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/) Erweiterung eingeführt. Wenn eine WebGL-Implementierung diese Erweiterung anzeigt, ist dies ein Hinweis an die Anwendung, dass das Ändern der Konvention zu `FIRST_VERTEX_CONVENTION_WEBGL` die Leistung verbessern wird. Es wird dringend empfohlen, dass Anwendungen, die Flachschattierung verwenden, die Anwesenheit dieser Erweiterung überprüfen und sie nutzen, falls verfügbar. Beachten Sie, dass dies möglicherweise Änderungen an den Vertex-Puffern oder Shadern der Anwendung erfordert.
