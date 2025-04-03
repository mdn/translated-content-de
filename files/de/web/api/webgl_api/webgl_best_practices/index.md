---
title: WebGL Best Practices
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("WebGL")}}

WebGL ist eine komplizierte API, und es ist oft nicht offensichtlich, welche die empfohlenen Methoden zur Nutzung sind. Diese Seite behandelt Empfehlungen über das gesamte Spektrum der Fachkenntnisse hinweg und hebt nicht nur Dos and Don'ts hervor, sondern erläutert auch _warum_. Sie können sich auf dieses Dokument verlassen, um Ihre Wahl des Ansatzes zu leiten und sicherzustellen, dass Sie auf dem richtigen Weg sind, egal welchen Browser oder welche Hardware Ihre Benutzer verwenden.

## WebGL-Fehler ansprechen und beseitigen

Ihre Anwendung sollte laufen, ohne WebGL-Fehler zu generieren (wie von `getError` zurückgegeben). Jeder WebGL-Fehler wird in der Web-Konsole als JavaScript-Warnung mit einer beschreibenden Nachricht gemeldet. Nach zu vielen Fehlern (32 in Firefox) stoppt WebGL das Generieren von beschreibenden Nachrichten, was das Debuggen stark behindert.

Die _einzigen_ Fehler, die eine wohlgeformte Seite generiert, sind `OUT_OF_MEMORY` und `CONTEXT_LOST`.

## Verfügbarkeit von Erweiterungen verstehen

Die Verfügbarkeit der meisten WebGL-Erweiterungen hängt vom Client-System ab. Bei der Verwendung von WebGL-Erweiterungen sollten Sie, wenn möglich, versuchen, diese optional zu machen, indem Sie sich an die Fälle anpassen, in denen sie nicht unterstützt werden.

Diese WebGL 1-Erweiterungen werden universell unterstützt und können als vorhanden vorausgesetzt werden:

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(siehe auch: [WebGL-Funktionsstufen und % Unterstützung](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

Erwägen Sie, diese in WebGLRenderingContext einzuarbeiten, wie unter: <https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js>

## Systemgrenzen verstehen

Ähnlich wie bei Erweiterungen werden die Grenzen Ihres Systems anders sein als die der Systeme Ihrer Clients! Gehen Sie nicht davon aus, dass Sie dreißig Textur-Sampler pro Shader verwenden können, nur weil es auf Ihrem Rechner funktioniert!

Die Mindestanforderungen für WebGL sind ziemlich niedrig. In der Praxis unterstützen fast alle Systeme mindestens Folgendes:

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

Ihr Desktop kann 16k Texturen oder vielleicht 16 Textureinheiten im Vertex Shader unterstützen, aber die meisten anderen Systeme nicht, und Inhalte, die für Sie funktionieren, werden für sie nicht funktionieren!

## Vermeiden Sie das Ungültigmachen von FBO-Anhangsbindungen

Fast jede Änderung an den Anhangsbindungen eines FBO macht dessen Framebuffer-Vollständigkeit ungültig. Richten Sie Ihre heißen Framebuffers im Voraus ein.

In Firefox wird durch Setzen der Voreinstellung `webgl.perf.max-warnings` auf `-1` in about:config Leistungswarnungen aktiviert, die Warnungen über FB-Vollständigkeits-Invalide beinhalten.

### Vermeiden Sie das Ändern von VAO-Anhängen (vertexAttribPointer, disable/enableVertexAttribArray)

Das Zeichnen aus statischen, unveränderten VAOs ist schneller als das Ändern desselben VAO für jeden Zeichenaufruf. Für unveränderte VAOs können die Browser die Abrufgrenzen zwischenspeichern, während bei geänderten VAOs müssen die Browser die Grenzen erneut validieren und berechnen. Der Aufwand dafür ist relativ gering, aber die Wiederverwendung von VAOs bedeutet auch weniger `vertexAttribPointer`-Aufrufe, daher ist es wichtig, dies überall zu tun, wo es einfach ist.

## Objekte schnell löschen

Warten Sie nicht darauf, dass der Garbage Collector/Cycle Collector erkennt, dass Objekte verwaist sind und sie zerstört. Implementierungen verfolgen die Lebensdauer von Objekten, sodass das "Löschen" auf API-Ebene nur den Handle veröffentlicht, der sich auf das eigentliche Objekt bezieht. (Konzeptionelles Freigeben des Handle-Referenzzeigers auf das Objekt) Erst wenn das Objekt in der Implementierung unbenutzt ist, wird es tatsächlich freigegeben. Zum Beispiel, wenn Sie Ihre Shader-Objekte nie wieder direkt zugreifen möchten, löschen Sie einfach ihre Handles, nachdem Sie sie an ein Programmobjekt angehängt haben.

## Kontexte schnell verlieren

Erwägen Sie auch, WebGL-Kontexte über die `WEBGL_lose_context`-Erweiterung schnell zu verlieren, wenn Sie definitiv mit ihnen fertig sind und die Rendering-Ergebnisse des Ziel-Canvas nicht mehr benötigen. Beachten Sie, dass dies beim Navigieren von einer Seite nicht erforderlich ist - fügen Sie keinen Entlade-Event-Handler nur zu diesem Zweck hinzu.

## Spülen wenn Ergebnisse erwartet werden

Rufen Sie `flush()` auf, wenn Sie Ergebnisse wie Abfragen erwarten oder beim Abschluss eines Rendering-Frames.

Flush fordert die Implementierung auf, alle noch ausstehenden Befehle zur Ausführung herauszuschieben, sie aus der Warteschlange zu spülen, anstatt darauf zu warten, dass weitere Befehle zur Ausführung gesendet werden.

Zum Beispiel ist es möglich, dass folgendes nie ohne Kontextverlust abgeschlossen wird:

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL verfügt standardmäßig nicht über einen SwapBuffers-Aufruf, sodass ein Flush auch diese Lücke füllen kann.

### Verwenden Sie `webgl.flush()` wenn Sie requestAnimationFrame nicht verwenden

Wenn RAF nicht verwendet wird, verwenden Sie `webgl.flush()`, um eine schnelle Ausführung der enqueuten Befehle zu fördern.

Da RAF direkt von der Frame-Grenze gefolgt wird, wird `webgl.flush()` mit RAF nicht wirklich benötigt.

## Vermeiden Sie blockierende API-Aufrufe in der Produktion

Bestimmte WebGL-Einstiegspunkte - einschließlich `getError` und `getParameter` - verursachen synchrone Stalls im aufrufenden Thread. Selbst grundlegende Anfragen können so lange wie 1 ms dauern, sie können aber noch länger dauern, wenn sie darauf warten müssen, dass alle Grafikarbeiten abgeschlossen sind (mit einem Effekt ähnlich wie `glFinish()` in nativen OpenGL).

In Produktionscode vermeiden Sie solche Einstiegspunkte, besonders im Hauptthread des Browsers, wo sie die gesamte Seite ins Stocken bringen können (oft auch das Scrollen oder sogar den gesamten Browser).

- `getError()`: verursacht ein Flush + Round-Trip, um Fehler aus dem GPU-Prozess abzurufen).

  Zum Beispiel wird innerhalb von Firefox glGetError nur nach Allokationen (`bufferData`, `*texImage*`, `texStorage*`) geprüft, um etwaige GL_OUT_OF_MEMORY-Fehler zu erkennen.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()`, andere `get`s auf Shadern/Programmen: Flush + Shader-Kompilierung + Round-Trip, wenn nicht nach Abschluss der Shader-Kompilierung erledigt. (Siehe auch [parallele Shader-Kompilierung](#shader_kompilieren_und_programme_parallel_verlinken) unten.)
- `get*Parameter()` im Allgemeinen: möglicher Flush + Round-Trip. In einigen Fällen werden diese zwischengespeichert, um den Round-Trip zu vermeiden, aber versuchen Sie nicht, sich darauf zu verlassen.
- `checkFramebufferStatus()`: möglicher Flush + Round-Trip.
- `getBufferSubData()`: übliche Finish + Round-Trip. (Dies ist okay für READ-Buffer zusammen mit Fences - siehe [asynchroner Daten-Readback](#verwenden_sie_nicht-blockierende_asynchrone_datenrücklesung) unten.)
- `readPixels()` zur CPU (d.h. ohne einen UNPACK-Buffer gebunden): Finish + Round-Trip. Stattdessen GPU-GPU `readPixels` in Verbindung mit asynchronem Daten-Readback verwenden.

## Vertex attrib 0 immer als Array aktivieren

Wenn Sie zeichnen, ohne dass vertex attrib 0 als Array aktiviert ist, zwingen Sie den Browser zu einer komplizierten Emulation bei der Ausführung auf Desktop-OpenGL (wie auf macOS). Dies liegt daran, dass in Desktop-OpenGL nichts gezeichnet wird, wenn vertex attrib 0 nicht als Array aktiviert ist. Sie können `bindAttribLocation` verwenden, um ein Vertex-Attribut zur Verwendung der Position 0 zu zwingen, und `enableVertexAttribArray(0)`, um es als Array zu aktivieren.

## Schätzen Sie ein VRAM-Budget pro Pixel

WebGL bietet keine APIs, um die maximale Menge an Videospeicher im System abzufragen, da solche Anfragen nicht portabel sind. Trotzdem müssen Anwendungen auf den VRAM-Verbrauch achten und nicht einfach so viel wie möglich allokieren.

Eine von Google Maps entwickelte Technik ist der Begriff eines _VRAM-Budgets pro Pixel_:

1. Für ein System (z. B. einen bestimmten Desktop/Laptop) entscheiden Sie die maximale Menge an VRAM, die Ihre Anwendung verwenden soll. 2) Berechnen Sie die Anzahl der Pixel, die von einem maximierten Browserfenster abgedeckt werden. Z.B. `(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)` 3) Das VRAM-Budget pro Pixel ist (1) geteilt durch (2) und ist eine Konstante.

Diese Konstante sollte _allgemein_ portable zwischen Systemen sein. Mobile Geräte haben typischerweise kleinere Bildschirme als leistungsfähige Desktop-Rechner mit großen Monitoren. Berechnen Sie diese Konstante auf ein paar Zielsystemen neu, um eine zuverlässige Schätzung zu erhalten.

Passen Sie nun alle internen Caching-Mechanismen in der Anwendung (WebGLBuffers, WebGLTextures usw.) an, um eine maximale Größe zu befolgen, die durch diese Konstante multipliziert mit der Anzahl der durch das _aktuelle_ Browserfenster abgedeckten Pixel berechnet wird. Dies erfordert eine Schätzung der Anzahl der von jeder Textur verbrauchten Bytes zum Beispiel. Das Limit muss in der Regel auch aktualisiert werden, wenn sich das Browserfenster ändert, und ältere Ressourcen über dem Limit müssen entfernt werden.

Das Halten des VRAM-Verbrauchs der Anwendung unter diesem Limit hilft, Speicherüberschreitungsfehler und damit verbundene Instabilitäten zu vermeiden.

## Erwägen Sie das Rendern in einen kleineren Back-Buffer

Ein üblicher (und einfacher) Weg, Qualität gegen Geschwindigkeit einzutauschen, besteht darin, in einen kleineren Back-Buffer zu rendern und das Ergebnis hochzuskalieren. Erwägen Sie, canvas.width und canvas.height zu reduzieren und canvas.style.width und height bei einer konstanten Größe zu belassen.

## Sammeln von Zeichenaufrufen

Das "Batching" von Zeichenaufrufen in weniger, größere Zeichenaufrufe wird allgemein die Leistung verbessern. Wenn Sie 1000 Sprites malen müssen, versuchen Sie, es in einem einzigen drawArrays() oder drawElements() Aufruf zu tun.

Es ist üblich, "degenerierte Dreiecke" zu verwenden, wenn Sie getrennte Objekte als einzigen drawArrays(TRIANGLE_STRIP) Aufruf zeichnen müssen. Degenerierte Dreiecke sind Dreiecke ohne Fläche, daher ist jedes Dreieck, bei dem mehr als ein Punkt an genau derselben Stelle ist, effektiv übersprungen, wodurch Sie einen neuen Dreiecksstrang unvermittelt zu Ihrem vorherigen starten können, ohne ihn in mehrere Zeichenaufrufe zu teilen.

Eine weitere wichtige Methode zum Batching ist die Texturatlasierung, bei der mehrere Bilder in eine einzelne Textur eingefügt werden, oft wie ein Schachbrettmuster. Da Sie die Reihenfolge der Zeichenaufrufe ändern müssen, um die Texturen zu wechseln, ermöglicht die Texturatlasierung, mehr Zeichenaufrufe in weniger, größere Chargen zu kombinieren. Sehen Sie dieses [Beispiel](https://webglsamples.org/sprites/readme.html), das demonstriert, wie man sogar Sprites, die mehrere Texturatlanten referenzieren, zu einem einzigen Zeichenaufruf kombiniert.

## Vermeiden Sie "#ifdef GL_ES"

Sie sollten niemals `#ifdef GL_ES` in Ihren WebGL-Shadern verwenden; Diese Bedingung ist in WebGL immer wahr. Obwohl dies in einigen frühen Beispielen verwendet wurde, ist es nicht erforderlich.

## Bevorzugen Sie Arbeit im Vertex-Shader

Machen Sie so viel Arbeit wie möglich im Vertex-Shader, anstatt im Fragment-Shader. Dies liegt daran, dass per Zeichenaufruf Fragment-Shader im Allgemeinen viel häufiger ausgeführt werden als Vertex-Shader. Berechnungen, die an den Vertices durchgeführt werden können und dann nur noch über Fragmente interpoliert werden (über `varying`s), sind ein Leistungsgewinn. (Die Interpolation von varyings ist sehr günstig und wird automatisch für Sie während der festen Funktionalität der Rasterisierungsphase der Grafikpipeline durchgeführt.)

Zum Beispiel kann eine einfache Animation einer texturierten Oberfläche durch eine zeitabhängige Transformation der Texturkoordinaten erreicht werden. (Der einfachste Fall ist das Hinzufügen eines einheitlichen Vektors zu dem Texturkoordinatenattributenvektor) Wenn es optisch akzeptabel ist, kann man die Texturkoordinaten im Vertex-Shader anstelle des Fragment-Shader transformieren, um eine bessere Leistung zu erzielen.

Ein häufiges Abwägen ist, einige Beleuchtungsberechnungen pro Vertex anstelle von pro Fragment (Pixel) durchzuführen. In einigen Fällen, besonders bei einfachen Modellen oder dichten Vertices, sieht das gut genug aus.

Das Gegenteil davon ist, wenn ein Modell mehr Vertices als Pixel im gerenderten Output hat. In der Regel ist LOD-Meshes die Antwort auf dieses Problem und selten die Verschiebung von Arbeit vom Vertex- zum Fragment-Shader.

## Shader kompilieren und Programme parallel verlinken

Es ist verlockend, Shader seriell zu kompilieren und Programme zu verlinken, aber viele Browser können im Hintergrund in Threads parallel kompilieren und verlinken.

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

Obwohl wir ein Muster beschrieben haben, das es Browsern ermöglicht, parallel zu kompilieren und zu verlinken, blockiert normalerweise die Überprüfung von `COMPILE_STATUS` oder `LINK_STATUS`, bis die Kompilierung oder das Verlinken abgeschlossen ist. In Browsern, in denen es verfügbar ist, bietet die [KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/) Erweiterung eine _nicht-blockierende_ `COMPLETION_STATUS`-Abfrage. Bevorzugen Sie das Aktivieren und Verwenden dieser Erweiterung.

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

Diese Technik funktioniert möglicherweise nicht in allen Anwendungen, zum Beispiel in solchen, bei denen Programme sofort zum Rendern verfügbar sein müssen. Erwägen Sie jedoch, wie Varianten funktionieren können.

## Überprüfen Sie den Shader-Kompilierungsstatus nicht, es sei denn, das Verlinken schlägt fehl

Es gibt sehr wenige Fehler, die garantiert zu einem Fehlschlagen der Shader-Kompilierung führen, die aber nicht auf die Verlinkungszeit aufgeschoben werden können. Die [ESSL3-Spezifikation](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) sagt dies unter "Fehlerbehandlung":

> Die Implementierung sollte Fehler so früh wie möglich melden, muss jedoch in jedem Fall folgendes garantieren:
>
> - Alle lexikalischen, grammatischen und semantischen Fehler müssen nach einem glLinkProgram-Aufruf entdeckt worden sein
> - Fehler aufgrund von Inkonsistenzen zwischen Vertex und Fragment Shader (Linkfehler) müssen nach einem glLinkProgram-Aufruf entdeckt worden sein
> - Fehler aufgrund des Überschreitens von Ressourcenlimits müssen nach jedem D-zeichnung auf ruf oder einem glValidateProgram-Aufruf entdeckt worden sein
> - Ein auf ruf an glValidateProgram muss alle mit einem Program Objekt im gegebenen GL Zustand verbundenen Fehler melden.
>
> Die Zuweisung von Aufgaben zwischen dem Compiler und dem Linker ist implementierungsabhängig. Folglich gibt es viele Fehler, die entweder bei der Kompilierung oder beim Verlinken je nach Implementierung erkannt werden können.

Zusätzlich ist die Abfrage des Kompilierungsstatus ein synchroner Aufruf, der das Pipelineing unterbricht.

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

## Präzise GLSL-Präzisionsanmerkungen verwenden

Wenn Sie erwarten, ein essl300 `int` zwischen Shadern zu übergeben, und Sie benötigen es mit 32-Bit, _müssen_ Sie `highp` verwenden, sonst haben Sie Portabilitätsprobleme. (Funktioniert auf Desktop, nicht auf Android)

Wenn Sie eine Float-Textur haben, erfordert iOS, dass Sie `highp sampler2D foo;` verwenden, andernfalls erhalten Sie schmerzhaft `lowp`-Textur-Samples! (+/-2.0 max ist wahrscheinlich nicht gut genug für Sie)

### Implizite Standardeinstellungen

Die Vertexsprache hat die folgenden vordeklarierten, globalen Standard-Präzisionserklärungen:

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

Die Fragmentsprache hat die folgenden vordeklarierten, globalen Standard-Präzisionserklärungen:

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### In WebGL 1 ist "highp float"-Unterstützung optional in Fragment-Shadern

Die Verwendung der `highp`-Präzision in Fragment-Shadern verhindert, dass Ihre Inhalte auf einigen älteren mobilen Geräten funktionieren.

Obwohl Sie `mediump float` verwenden können, beachten Sie, dass dies oft zu korrumpierter Darstellung aufgrund mangelnder Präzision führt (insbesondere auf mobilen Systemen), obwohl die Beschädigung auf einem typischen Desktop-Computer nicht sichtbar sein wird.

Wenn Sie Ihre Präzisionserfordernisse kennen, wird Ihnen `getShaderPrecisionFormat()` sagen, was das System unterstützt.

Wenn `highp float` verfügbar ist, wird `GL_FRAGMENT_PRECISION_HIGH` als `1` definiert sein.

Ein gutes Muster für "Gib mir immer die höchste Präzision":

```glsl
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
```

### ESSL100 Mindestanforderungen (WebGL 1)

| `float`   | denkbar             | Bereich       | min über Null | Präzision     |
| --------- | ------------------- | ------------- | ------------- | ------------- |
| `highp`   | float24\*           | (-2^62, 2^62) | 2^-62         | 2^-16 relativ |
| `mediump` | IEEE float16        | (-2^14, 2^14) | 2^-14         | 2^-10 relativ |
| `lowp`    | 10-bit signed fixed | (-2, 2)       | 2^-8          | 2^-8 absolut  |

| `int`     | denkbar | Bereich       |
| --------- | ------- | ------------- |
| `highp`   | int17   | (-2^16, 2^16) |
| `mediump` | int11   | (-2^10, 2^10) |
| `lowp`    | int9    | (-2^8, 2^8)   |

_\*float24: Vorzeichenbit, 7 Bit für Exponent, 16 Bit für Mantisse._

### ESSL300 Mindestanforderungen (WebGL 2)

| `float`   | denkbar             | Bereich         | min über Null | Präzision     |
| --------- | ------------------- | --------------- | ------------- | ------------- |
| `highp`   | IEEE float32        | (-2^126, 2^127) | 2^-126        | 2^-24 relativ |
| `mediump` | IEEE float16        | (-2^14, 2^14)   | 2^-14         | 2^-10 relativ |
| `lowp`    | 10-bit signed fixed | (-2, 2)         | 2^-8          | 2^-8 absolut  |

| `(u)int`  | denkbar  | Bereich `int` | Bereich `unsigned int` |
| --------- | -------- | ------------- | ---------------------- |
| `highp`   | (u)int32 | [-2^31, 2^31] | [0, 2^32]              |
| `mediump` | (u)int16 | [-2^15, 2^15] | [0, 2^16]              |
| `lowp`    | (u)int9  | [-2^8, 2^8]   | [0, 2^9]               |

## Bevorzugen Sie eingebaute Funktionen statt selbst erstellter

Bevorzugen Sie eingebaute Funktionen wie `dot`, `mix` und `normalize`. Im besten Fall laufen benutzerdefinierte Implementierungen möglicherweise so schnell wie die eingebauten Funktionen, die sie ersetzen, aber erwarten Sie nicht, dass sie es tun. Hardware hat oft hyperoptimierte oder sogar spezialisierte Anweisungen für eingebaute Funktionen und der Compiler kann Ihre benutzerdefinierten Ersatzfunktionen nicht zuverlässig mit den speziellen Codepfaden der eingebauten Funktionen ersetzen.

## Verwenden Sie Mipmaps für jede Textur, die Sie in 3D sehen werden

Im Zweifelsfall rufen Sie `generateMipmaps()` nach dem Hochladen von Texturen auf. Mipmaps sind speicherbillig (nur 30% Überhead) und bieten oft große Leistungsgewinne, wenn Texturen in 3D "herausgezoomt" oder insgesamt in die Ferne hinunter skaliert werden, oder sogar für Würfel-Maps!

Es ist schneller, von kleineren Texturbildern zu sampeln, da die inhärente Texturabruf-Cache-Lokalität besser ist: Das Herauszoomen auf eine nicht-mipmap-Textur ruiniert die Texturabruf-Cache-Lokalität, weil benachbarte Pixel nicht mehr von benachbarten Texeln sampeln!

Für 2D-Ressourcen, die niemals "herausgezoomt" werden, zahlen Sie jedoch nicht den 30% Speicheraufschlag für Mipmaps:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(Im WebGL 2 sollten Sie einfach `texStorage` mit `levels=1` verwenden)

Eine Einschränkung: `generateMipmaps` funktioniert nur, wenn Sie in die Textur rendern könnten, wenn Sie sie an ein Framebuffer anhängen würden. (Die Spezifikation nennt das "farb-renderbare Formate") Zum Beispiel, wenn ein System Float-Texturen unterstützt, aber nicht render-to-float, schlägt `generateMipmaps` für Float-Formate fehl.

## Gehen Sie nicht davon aus, dass Sie in Float-Texturen rendern können

Es gibt viele, viele Systeme, die RGBA32F-Texturen unterstützen, aber wenn Sie eine an ein Framebuffer anhängen, erhalten Sie `FRAMEBUFFER_INCOMPLETE_ATTACHMENT` von `checkFramebufferStatus()`. Es mag auf Ihrem System funktionieren, aber _die meisten_ mobilen Systeme werden es nicht unterstützen!

Unter WebGL 1 verwenden Sie die Erweiterung `EXT_color_buffer_half_float` und `WEBGL_color_buffer_float`, um die Unterstützung für das Rendern in float-Texturen für float16 und float32 jeweils zu prüfen.

Unter WebGL 2 prüft `EXT_color_buffer_float` die Unterstützung für das Rendern in float-Texturen sowohl für float32 als auch für float16. `EXT_color_buffer_half_float` ist auf Systemen vorhanden, die nur das Rendern in float16-Texturen unterstützen.

### Render-to-float32 impliziert nicht automatisch float32-Blending!

Es mag auf Ihrem System funktionieren, aber auf vielen anderen nicht. Vermeiden Sie es, wenn Sie können. Überprüfen Sie die `EXT_float_blend`-Erweiterung, um Unterstützung zu prüfen.

Float16-Blending wird immer unterstützt.

## Einige Formate (z.B. RGB) können emuliert sein

Eine Reihe von Formaten (insbesondere Drei-Kanal-Formate) werden emuliert. Zum Beispiel wird RGB32F oft tatsächlich als RGBA32F dargestellt und Luminance8 kann tatsächlich RGBA8 sein. RGB8 ist besonders oft überraschend langsam, da das Maskieren des Alpha-Kanals und/oder das Patchen von Blend-Funktionen einen relativ hohen Overhead darstellt. Verwenden Sie bevorzugt RGBA8 und ignorieren Sie das Alpha selbst, für eine bessere Performance.

## Vermeiden Sie alpha:false, was teuer sein kann

Das Spezifizieren von `alpha:false` während der Erstellung des Kontextes verursacht, dass der Browser die WebGL-gerenderte Leinwand so zusammensetzt, als wäre sie opak, ignoriert also jegliche Alpha-Werte, die die Anwendung in ihrem Fragment-Shader schreibt. Auf einigen Plattformen kommt diese Fähigkeit leider zu erheblichen Leistungskosten. Der RGB-Backbuffer muss möglicherweise auf einer RGBA-Oberfläche emuliert werden und es gibt relativ wenige Techniken, die in der OpenGL-API verfügbar sind, um es für die Anwendung so aussehen zu lassen, als hätte eine RGBA-Oberfläche keinen Alpha-Kanal. [Es wurde festgestellt](https://crbug.com/1045643), dass alle diese Techniken auf betroffenen Plattformen etwa die gleichen Leistungseinbußen haben.

Die meisten Anwendungen, sogar solche, die Alpha-Blending erfordern, können strukturiert werden, um `1.0` für den Alpha-Kanal zu erzeugen. Die Hauptausnahme ist jede Anwendung, die Ziel-Alpha in der Blend-Funktion erfordert. Wenn möglich, wird empfohlen, dies zu tun statt `alpha:false` zu verwenden.

## Komprimierte Texturformate in Betracht ziehen

Während JPG und PNG allgemein kleiner über die Leitung sind, sind GPU-komprimierte Texturformate im GPU-Speicher kleiner und schneller zu samplen. (Dies reduziert die Texturspeicherbandbreite, die auf mobilen Geräten kostbar ist.) Allerdings haben komprimierte Texturformate eine schlechtere Qualität als JPG und sind im Allgemeinen nur für Farben akzeptabel (nicht z.B. für Normalen oder Koordinaten).

Leider gibt es kein einzelnes universell unterstütztes Format. Jedes System hat aber mindestens eines der folgenden:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

WebGL 2 bietet universal Unterstützung durch Kombination:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc (Mobil)

WEBGL_compressed_texture_astc bietet sowohl höhere Qualität als auch/oder höhere Komprimierung, wird aber nur auf neuerer Hardware unterstützt.

### Basis Universal Textur-Kompressionsformat/Bibliothek

Basis Universal löst einige der oben genannten Probleme. Es bietet eine Möglichkeit, alle gängigen komprimierten Texturformate mit einer einzigen komprimierten Texturdatei zu unterstützen, über eine JavaScript-Bibliothek, die Formate effizient zur Ladezeit konvertiert. Es fügt auch zusätzliche Komprimierung hinzu, die Basis Universal komprimierte Texturdateien viel kleiner macht als reguläre komprimierte Texturen über die Leitung, mehr vergleichbar mit JPEG.

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## Speicherverbrauch von Tiefen- und Stencil-Formaten

Tiefen- und Stencil-Anhänge und -Formate sind auf vielen Geräten tatsächlich untrennbar. Sie können für DEPTH_COMPONENT24 oder STENCIL_INDEX8 fragen, bekommen aber oft tatsächlich D24X8 und X24S8 32bpp Formate im Hintergrund. Gehen Sie davon aus, dass der Speicherverbrauch von Tiefen- und Stencil-Formaten auf die nächsten vier Bytes aufgerundet wird.

## texImage/texSubImage-Uploads (besonders Videos) können Pipeline-Flushes verursachen

Die meisten Textur-Uploads von DOM-Elementen werden einen Verarbeitungsdurchgang nach sich ziehen, der vorübergehend GL-Programme intern umschaltet, was einen Pipeline-Flush verursacht. (Pipelines sind explizit in [Vulkan](https://docs.vulkan.org/spec/latest/chapters/pipelines.html) et al formalisiert, aber hinter den Kulissen implizit in OpenGL und WebGL. Pipelines sind mehr oder weniger das Tupel aus Shader-Programm, Tiefen/Stencil/Multisample/Blend/Rasterisierung Status).

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

Bevorzugen Sie es, Uploads vor dem Start des Zeichnens oder zumindest zwischen den Pipelines zu tätigen:

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

## Verwenden Sie texStorage um Texturen zu erstellen

Die WebGL 2.0 `texImage*` API erlaubt es Ihnen, jedes Mip-Level unabhängig und in jeder Größe zu definieren, auch wenn die nicht übereinstimmenden Mip-Größen nicht bis zur Zeit des Zeichnens ein Fehler sind, was bedeutet, dass der Treiber die Textur im GPU-Speicher nicht vorbereiten kann, bis die Textur das erste Mal gezeichnet ist.

Darüber hinaus könnten einige Treiber unweigerlich die ganze Mip-Kette allokieren (+30% Speicher!), auch wenn Sie nur ein einziges Level wollen.

Deshalb bevorzugen Sie `texStorage` + `texSubImage` für Texturen in WebGL 2.

## Verwenden Sie invalidateFramebuffer

Das Speichern von Daten, die Sie nicht wiederverwenden wollen, kann hohe Kosten haben, besonders auf Kachelspeicher-GPUs, die auf mobilen Geräten häufig sind. Wenn Sie mit den Inhalten eines Framebuffer-Anhangs fertig sind, verwenden Sie WebGL 2.0s `invalidateFramebuffer`, um die Daten zu verwerfen, anstatt den Treiber Zeit verschwenden zu lassen, die Daten für den späteren Gebrauch zu speichern. DEPTH/STENCIL und/oder multisample Anhänge sind besonders gute Kandidaten für `invalidateFramebuffer`.

## Verwenden Sie nicht-blockierende asynchrone Datenrücklesung

Operationen wie `readPixels` und `getBufferSubData` sind typischerweise synchron, aber mit den gleichen APIs kann nicht-blockierende, asynchrone Datenrücklesung erreicht werden. Der Ansatz in WebGL 2 entspricht dem Ansatz in OpenGL: [Async-Downloads in blockierenden APIs](https://kdashg.github.io/misc/async-gpu-downloads.html).

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

Die Handhabung von `devicePixelRatio !== 1.0` ist knifflig. Während der allgemeine Ansatz darin besteht, `canvas.width = width * devicePixelRatio` zu setzen, wird dies Moire-Artefakte bei nicht-integer Werten von `devicePixelRatio` verursachen, wie es bei der UI-Skalierung unter Windows sowie beim Zoomen auf allen Plattformen üblich ist.

Stattdessen können wir nicht-integer Werte für CSS's `top`/`bottom`/`left`/`right` verwenden, um unsere Leinwand auf ganze Integer-Gerätekoordinaten 'vorzuschnappen'.

Demo: [Device pixel presnap](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

## ResizeObserver und 'device-pixel-content-box'

Auf unterstützten Browsern (Chromium?) kann `ResizeObserver` mit `'device-pixel-content-box'` verwendet werden, um einen Callback anzufordern, der die tatsächliche {{Glossary("device_pixel", "device pixel")}} Größe eines Elements umfasst. Dies kann verwendet werden, um eine asynchrone, aber genaue Funktion zu erstellen:

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

Bitte sehen Sie sich [die Spezifikation](https://www.w3.org/TR/resize-observer/#resize-observer-interface) für mehr Details an.

## Erstellung von ImageBitmap

Die Verwendung des [ImageBitmapOptions Dictionary](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapoptions) ist entscheidend für die richtige Vorbereitung von Texturen für Uploads zu WebGL, aber leider gibt es keinen offensichtlichen Weg, um genau abzufragen, welche Dictionary-Mitglieder von einem bestimmten Browser unterstützt werden.

[Dieses JSFiddle](https://jsfiddle.net/ptkyewhx/) zeigt, wie man herausfindet, welche Dictionary-Mitglieder von einem bestimmten Browser unterstützt werden.

## Verwenden Sie `WEBGL_provoking_vertex`, wenn es verfügbar ist

Beim Zusammenstellen von Vertices in Primitiven wie Dreiecke und Linien wird in der OpenGL-Konvention das letzte Vertex des Primitivs als "provoking vertex" betrachtet. Dies ist von Bedeutung bei Verwendung von `flat` Vertex-Attribut-Interpolation in ESSL300 (WebGL 2); der Attributwert vom provoking vertex wird für alle Vertices des Primitivs verwendet.

Heutzutage sind viele WebGL-Implementationen von Browsern auf anderen Grafik-APIs als OpenGL gehostet, und einige dieser APIs verwenden das erste Vertex als provoking vertex für Zeichenbefehle. Das Emulieren von OpenGL's Provoking-Vertex-Konvention kann bei einigen dieser APIs rechenintensiv sein.

Aus diesem Grund wurde die [WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/) Erweiterung eingeführt. Wenn eine WebGL-Implementierung diese Erweiterung bereitstellt, ist dies ein Hinweis an die Anwendung, dass das Ändern der Konvention auf `FIRST_VERTEX_CONVENTION_WEBGL` die Leistung verbessern wird. Es wird dringend empfohlen, dass Anwendungen, die Flat Shading verwenden, die Präsenz dieser Erweiterung überprüfen und sie nutzen, wenn sie verfügbar ist. Beachten Sie, dass dies Änderungen an den Vertex-Buffern oder Shadern der Anwendung erfordern könnte.
