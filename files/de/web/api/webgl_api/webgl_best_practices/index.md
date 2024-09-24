---
title: WebGL Best Practices
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{DefaultAPISidebar("WebGL")}}

WebGL ist eine komplexe API, und oft ist es nicht offensichtlich, was die empfohlenen Vorgehensweisen sind. Diese Seite behandelt Empfehlungen über das ganze Spektrum der Fachkenntnisse hinweg und hebt nicht nur "Dos and Don'ts" hervor, sondern erklärt auch das _Warum_. Sie können sich auf dieses Dokument verlassen, um Ihre Wahl der Vorgehensweise zu leiten und sicherzustellen, dass Sie auf dem richtigen Weg sind, egal welchen Browser oder welche Hardware Ihre Benutzer verwenden.

## WebGL-Fehler beheben und eliminieren

Ihre Anwendung sollte ohne die Erzeugung von WebGL-Fehlern laufen (wie sie von `getError` zurückgegeben werden). Jeder WebGL-Fehler wird in der Web-Konsole als JavaScript-Warnung mit einer beschreibenden Nachricht gemeldet. Nach zu vielen Fehlern (32 in Firefox) stoppt WebGL die Erzeugung beschreibender Nachrichten, was das Debuggen erheblich erschwert.

Die _einzigen_ Fehler, die eine gut gestaltete Seite erzeugt, sind `OUT_OF_MEMORY` und `CONTEXT_LOST`.

## Verfügbarkeit von Erweiterungen verstehen

Die Verfügbarkeit der meisten WebGL-Erweiterungen hängt vom Client-System ab. Wenn Sie WebGL-Erweiterungen verwenden, versuchen Sie, sie wenn möglich optional zu gestalten, indem Sie sich an den Fall anpassen, in dem sie nicht unterstützt werden.

Diese WebGL 1-Erweiterungen werden universell unterstützt und können als vorhanden angenommen werden:

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(siehe auch: [WebGL-Feature-Level und %-Unterstützung](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

Überlegen Sie, diese in den WebGLRenderingContext einzuarbeiten, wie hier: <https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js>

## Systemgrenzen verstehen

Ähnlich wie bei Erweiterungen werden die Grenzen Ihres Systems anders sein als die der Systeme Ihrer Kunden! Gehen Sie nicht davon aus, dass Sie dreißig Textur-Sampler pro Shader verwenden können, nur weil es auf Ihrem Rechner funktioniert!

Die Mindestanforderungen für WebGL sind ziemlich niedrig. Praktisch alle Systeme unterstützen mindestens Folgendes:

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

Ihr Desktop-Computer kann eventuell 16k Texturen oder 16 Textureinheiten im Vertex-Shader unterstützen, aber die meisten anderen Systeme nicht, und Inhalte, die für Sie funktionieren, werden für diese nicht funktionieren!

## Vermeiden Sie das Invalideren von FBO-Anhangsbindungen

Nahezu jede Änderung an den Anhangsbindungen eines FBO macht seine Framebuffer-Vollständigkeit ungültig. Richten Sie Ihre heißen Framebuffer im Voraus ein.

In Firefox wird durch das Setzen der Voreinstellung `webgl.perf.max-warnings` auf `-1` in about:config die Leistungswarnungen aktiviert, die auch Warnungen über die Ungültigkeitserklärungen der FB-Vollständigkeit enthalten.

### Vermeiden Sie das Ändern von VAO-Anhängen (vertexAttribPointer, disable/enableVertexAttribArray)

Das Zeichnen aus statischen, unveränderlichen VAOs ist schneller als das Ändern desselben VAO bei jedem Zeichenvorgang. Bei unveränderten VAOs können Browser die Abrufgrenzen zwischenspeichern, während bei Änderung von VAOs Browser die Grenzen erneut validieren und berechnen müssen. Der Aufwand dafür ist relativ gering, aber die Wiederverwendung von VAOs bedeutet auch weniger `vertexAttribPointer`-Aufrufe, was es wert ist, wenn es einfach umzusetzen ist.

## Objekte eager löschen

Warten Sie nicht darauf, dass der Garbage Collector/Cycle Collector erkennt, dass Objekte verwaist sind und sie zerstört. Implementierungen verfolgen die Lebensdauer von Objekten, sodass 'Löschen' auf API-Ebene nur den Handle freigibt, der auf das tatsächliche Objekt verweist. (konzeptionell das Freigeben des Handle-Zeigers auf das Objekt) Erst wenn das Objekt in der Implementierung nicht mehr verwendet wird, wird es tatsächlich freigegeben. Wenn Sie zum Beispiel nie wieder direkt auf Ihre Shader-Objekte zugreifen möchten, löschen Sie einfach ihre Handles, nachdem Sie sie an ein Programmobjekt angehängt haben.

## Kontexte eager verlieren

Erwägen Sie auch das aktive Verlieren von WebGL-Kontexten über die `WEBGL_lose_context`-Erweiterung, wenn Sie definitiv mit ihnen fertig sind und die Rendering-Ergebnisse der Ziel-Canvas nicht mehr benötigen. Beachten Sie, dass dies nicht erforderlich ist, wenn Sie von einer Seite weg navigieren - fügen Sie hierfür keinen Unload-Event-Handler hinzu.

## Flush ausführen, wenn Ergebnisse erwartet werden

Rufen Sie `flush()` auf, wenn Ergebnisse wie Abfragen erwartet werden oder bei Abschluss eines Rendering-Frames.

Flush teilt der Implementierung mit, alle ausstehenden Befehle zur Ausführung herauszuschieben und sie aus der Warteschlange zu entfernen, anstatt auf weitere Befehle zu warten, um sie zur Ausführung zu senden.

Zum Beispiel kann es möglich sein, dass Folgendes niemals ohne Kontextverlust abgeschlossen wird:

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL hat standardmäßig keinen SwapBuffers-Aufruf, sodass ein Flush helfen kann, die Lücke zu füllen.

### Verwenden Sie `webgl.flush()`, wenn requestAnimationFrame nicht verwendet wird

Verwenden Sie `webgl.flush()`, um eine zügige Ausführung der eingereihten Befehle zu fördern, wenn Sie nicht RAF verwenden.

Da RAF direkt von der Framebegrenzung gefolgt wird, ist ein explizites `webgl.flush()` mit RAF eigentlich nicht notwendig.

## Vermeiden Sie blockierende API-Aufrufe in der Produktion

Bestimmte WebGL-Einstiegspunkte - einschließlich `getError` und `getParameter` - verursachen synchrone Unterbrechungen im aufrufenden Thread. Selbst einfache Anfragen können bis zu 1 ms dauern, aber sie können noch länger dauern, wenn sie darauf warten müssen, dass alle Grafikarbeiten abgeschlossen sind (mit einer Wirkung ähnlich wie `glFinish()` in nativem OpenGL).

In Produktionscode vermeiden Sie solche Einstiegspunkte, insbesondere im Haupt-Thread des Browsers, wo sie die gesamte Seite ins Stocken bringen können (oft auch das Scrollen oder sogar den ganzen Browser).

- `getError()`: Verursacht einen Flush + Roundtrip, um Fehler aus dem GPU-Prozess abzurufen.

  Zum Beispiel wird in Firefox glGetError nur nach Zuweisungen überprüft (`bufferData`, `*texImage*`, `texStorage*`), um GL_OUT_OF_MEMORY-Fehler aufzufangen.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()`, andere `get`s bei Shaders/Programmen: Flush + Shader-kompilieren + Roundtrip, wenn nicht nach Abschluss der Shader-Kompilierung erfolgt. (Siehe auch [parallele Shader-Kompilierung](#shader_parallel_kompilieren_und_programme_verlinken) unten.)
- `get*Parameter()` im Allgemeinen: Möglicher Flush + Roundtrip. In einigen Fällen werden diese zwischengespeichert, um den Roundtrip zu vermeiden, aber versuchen Sie, nicht darauf zu vertrauen.
- `checkFramebufferStatus()`: Möglicher Flush + Roundtrip.
- `getBufferSubData()`: Üblicherweise Finish + Roundtrip. (Dies ist in Ordnung für READ-Puffer in Verbindung mit Zäunen - siehe [asynchrone Datenrücklese](#verwenden_sie_nicht_blockierende_asynchrone_datenrücklese) unten.)
- `readPixels()` zur CPU (d. h. ohne einen verbundenen UNPACK-Puffer): Finish + Roundtrip. Verwenden Sie stattdessen GPU-GPU `readPixels` in Verbindung mit asynchroner Datenrücklese.

## Aktivieren Sie immer Vertex Attrib 0 als Array

Wenn Sie zeichnen, ohne dass Vertex Attrib 0 als Array aktiviert ist, zwingen Sie den Browser, eine komplizierte Emulation bei der Ausführung auf Desktop-OpenGL durchzuführen (wie auf macOS). Dies liegt daran, dass in Desktop-OpenGL nichts gezeichnet wird, wenn Vertex Attrib 0 nicht als Array aktiviert ist. Sie können `bindAttribLocation` verwenden, um ein Vertex-Attribut zur Verwendung von Location 0 zu zwingen, und `enableVertexAttribArray(0)`, um es Array-aktiviert zu machen.

## Schätzen Sie ein VRAM-Budget pro Pixel ab

WebGL bietet keine APIs, um die maximale Menge an Videospeicher im System abzufragen, da solche Abfragen nicht portabel sind. Dennoch müssen Anwendungen sich des VRAM-Verbrauchs bewusst sein und nicht einfach so viel wie möglich zuweisen.

Eine vom Google Maps-Team eingeführte Technik ist das Konzept eines _pro-Pixel-VRAM-Budgets_:

1\) Für ein System (z. B. einen bestimmten Desktop/Laptop) die maximale Menge an VRAM bestimmen, die Ihre Anwendung verwenden sollte. 2) Die Anzahl der Pixel berechnen, die von einem maximierten Browserfenster abgedeckt werden. Z. B. `(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)` 3) Das pro-Pixel-VRAM-Budget ist (1) geteilt durch (2) und stellt eine Konstante dar.

Diese Konstante sollte _in der Regel_ zwischen Systemen portabel sein. Mobile Geräte haben typischerweise kleinere Bildschirme als leistungsfähige Desktop-Computer mit großen Monitoren. Berechnen Sie diese Konstante auf einigen Zielsystemen neu, um eine zuverlässige Schätzung zu erhalten.

Passen Sie nun alle internen Caches der Anwendung (WebGLBuffers, WebGLTextures usw.) so an, dass sie eine maximale Größe befolgen, die von dieser Konstante multipliziert mit der Anzahl der von dem _aktuellen_ Browserfenster abgedeckten Pixel berechnet wird. Dies erfordert die Abschätzung der Anzahl der von jeder Textur verbrauchten Bytes, zum Beispiel. Das Limit muss auch typischerweise aktualisiert werden, wenn die Größe des Browserfensters geändert wird, und ältere Ressourcen, die das Limit überschreiten, müssen entfernt werden.

Das Einhalten dieser Obergrenze beim VRAM-Verbrauch der Anwendung hilft, Speicherfehler und damit verbundene Instabilität zu vermeiden.

## Ziehen Sie in Betracht, zu einem kleineren Back-Buffer zu rendern

Eine häufige und einfache Methode, Qualität gegen Geschwindigkeit einzutauschen, besteht darin, in einen kleineren Back-Buffer zu rendern und das Ergebnis hochzuskalieren. Erwägen Sie, die canvas.width und -höhe zu reduzieren und canvas.style.width und -height auf einer konstanten Größe zu halten.

## Zeichenaufrufe bündeln

Das "Bündeln" von Zeichenaufrufen in weniger, größere Zeichenaufrufe verbessert in der Regel die Leistung. Wenn Sie 1000 Sprites malen, versuchen Sie es in einem einzigen drawArrays() oder drawElements()-Aufruf zu tun.

Es ist gängig, "degenerierte Dreiecke" zu verwenden, wenn Sie diskontinuierliche Objekte als einen einzelnen drawArrays(TRIANGLE_STRIP)-Aufruf zeichnen müssen. Degenerierte Dreiecke haben keine Fläche, also jedes Dreieck, bei dem mehr als ein Punkt auf genau demselben Ort liegt. Diese Dreiecke werden effektiv übersprungen, was Ihnen ermöglicht, einen neuen Triangle Strip zu beginnen, der von dem vorherigen nicht verbunden ist, ohne in mehrere Zeichenaufrufe aufteilen zu müssen.

Eine weitere wichtige Methode für das Bündeln ist das Texturatlasieren, bei dem mehrere Bilder in einer einzigen Textur platziert werden, oft wie ein Schachbrett. Da Sie die Zeichnungsaufruf-Bündelungen aufteilen müssen, um die Texturen zu ändern, ermöglicht Ihnen das Texturatlasieren, mehr Zeichnungsaufrufe in weniger, größere Bündel zu kombinieren. Siehe [dieses Beispiel](https://webglsamples.org/sprites/readme.html), das zeigt, wie man sogar Sprites referenziert, die mehrere Texturatlanten in einem einzigen Zeichenaufruf kombinieren.

## Vermeiden Sie "#ifdef GL_ES"

Sie sollten `#ifdef GL_ES` niemals in Ihren WebGL-Shadern verwenden; diese Bedingung ist in WebGL immer wahr. Obwohl einige frühe Beispiele dies verwendeten, ist es nicht notwendig.

## Bevorzugen Sie, Arbeit im Vertex-Shader zu erledigen

Machen Sie so viel Arbeit wie möglich im Vertex-Shader, anstatt im Fragment-Shader. Dies liegt daran, dass pro Zeichnungsaufruf die Fragment-Shader im Allgemeinen viel häufiger ausgeführt werden als Vertex-Shader. Jede Berechnung, die an den Vertices durchgeführt werden kann und dann einfach über Fragmente interpoliert wird (über `varying`s), ist ein Leistungsgewinn. (Die Interpolation von Varyings ist sehr kostengünstig und wird automatisch für Sie durch die Festwert-Rasterisierungsphase der Grafikpipeline durchgeführt.)

Ein einfaches Beispiel für eine Animation einer texturierten Oberfläche kann durch eine zeitabhängige Transformation der Texturkoordinaten erreicht werden. (Der einfachste Fall ist das Hinzufügen eines Uniform-Vektors zum Attributvektor der Texturkoordinaten) Wenn es visuell akzeptabel ist, können die Texturkoordinaten im Vertex-Shader anstelle des Fragment-Shaders transformiert werden, um eine bessere Leistung zu erzielen.

Ein häufiger Kompromiss besteht darin, einige Beleuchtungsberechnungen pro Vertex anstelle von pro Fragment (Pixel) durchzuführen. In einigen Fällen, insbesondere bei einfachen Modellen oder dichten Vertices, sieht das gut genug aus.

Die Umkehrung davon ist, wenn ein Modell mehr Vertices als Pixel in der gerenderten Ausgabe hat. LOD-Meshes sind in der Regel die Antwort auf dieses Problem, selten wird Arbeit vom Vertex- zum Fragment-Shader verschoben.

## Shader parallel kompilieren und Programme verlinken

Es ist verlockend, Shader seriell zu kompilieren und Programme zu verlinken, aber viele Browser können parallel im Hintergrund kompilieren und verlinken.

Statt:

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

Obwohl wir ein Muster beschrieben haben, um Browsern die Parallelkompilierung und das Verlinken zu ermöglichen, blockiert normalerweise die Überprüfung von `COMPILE_STATUS` oder `LINK_STATUS`, bis die Kompilierung oder das Verlinken abgeschlossen ist. In Browsern, in denen es verfügbar ist, bietet die [KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/) Erweiterung eine _nicht blockierende_ `COMPLETION_STATUS`-Abfrage. Bevorzugen Sie, diese Erweiterung zu aktivieren und zu verwenden.

Beispielverwendung:

```js
ext = gl.getExtension("KHR_parallel_shader_compile");
gl.compileProgram(vs);
gl.compileProgram(fs);
gl.attachShader(prog, vs);
gl.attachShader(prog, fs);
gl.linkProgram(prog);

// Speichern Sie das Programm in Ihrer Datenstruktur.
// Später, zum Beispiel im nächsten Frame:

if (ext) {
  if (gl.getProgramParameter(prog, ext.COMPLETION_STATUS_KHR)) {
    // Programmverknüpfungsstatus überprüfen; wenn OK, verwenden und damit zeichnen.
  }
} else {
  // Programmverknüpfung ist synchron.
  // Programmverknüpfungsstatus überprüfen; wenn OK, verwenden und damit zeichnen.
}
```

Diese Technik funktioniert möglicherweise nicht in allen Anwendungen, zum Beispiel in solchen, die erfordern, dass Programme sofort renderbereit sind. Dennoch überlegen Sie, wie Variationen funktionieren könnten.

## Shader-Kompilierungsstatus nur prüfen, wenn Verlinkung fehlschlägt

Es gibt sehr wenige Fehler, die garantiert Shaderkompilierungsfehler verursachen, aber nicht zur Linkzeit aufgelöst werden können. Die [ESSL3-Spezifikation](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) besagt dies unter "Fehlerbehandlung":

> Die Implementierung sollte Fehler so früh wie möglich melden, muss jedoch in jedem Fall Folgendes erfüllen:
>
> - Alle lexikalischen, grammatikalischen und semantischen Fehler müssen nach einem Aufruf von glLinkProgram erkannt worden sein
> - Fehler aufgrund von Inkonsistenzen zwischen Vertex- und Fragment-Shader (Link-Fehler) müssen nach einem Aufruf von glLinkProgram erkannt worden sein
> - Fehler durch Überschreitung von Ressourcenlimits müssen nach jedem Zeichnungsaufruf oder einem Aufruf von glValidateProgram erkannt worden sein
> - Ein Aufruf von glValidateProgram muss alle mit einem Programmobjekt verbundenen Fehler im aktuellen GL-Zustand melden.
>
> Die Aufteilung der Aufgaben zwischen Compiler und Linker ist abhängig von der Implementierung. Folglich gibt es viele Fehler, die entweder zur Kompilier- oder Linkzeit erkannt werden können, je nach Implementierung.

Darüber hinaus ist das Abfragen des Kompilierungsstatus ein synchroner Aufruf, der die Pipeline unterbricht.

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

Überlegen Sie:

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

Wenn Sie erwarten, einen essl300 `int` zwischen Shadern zu übergeben und Sie benötigen ihn in 32 Bit, müssen Sie `highp` verwenden, oder Sie haben Portabilitätsprobleme. (Funktioniert auf dem Desktop, nicht auf Android)

Wenn Sie eine Flächen-Textur haben, erfordert iOS, dass Sie `highp sampler2D foo;` verwenden, andernfalls erhalten Sie auf schmerzhafte Weise `lowp`-Texturproben! (+/-2.0 max ist wahrscheinlich nicht gut genug für Sie)

### Implizite Standards

Die Vertex-Sprache hat die folgenden vorgezeichneten globalen Standardpräzisionserklärungen:

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

Die Fragment-Sprache hat die folgenden vorgezeichneten globalen Standardpräzisionserklärungen:

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### In WebGL 1 ist "highp float" Unterstützung in Fragment-Shadern optional

Die bedingungslose Verwendung von `highp`-Präzision in Fragment-Shadern verhindert, dass Ihre Inhalte auf einigen älteren mobilen Geräten funktionieren.

Während Sie stattdessen `mediump float` verwenden können, sollten Sie sich dessen bewusst sein, dass dies oft zu Rendering-Fehlern aufgrund mangelnder Präzision führt (insbesondere bei mobilen Systemen), obwohl die Fehler auf einem typischen Desktop-Computer nicht sichtbar sind.

Wenn Sie Ihre Präzisionsanforderungen kennen, wird `getShaderPrecisionFormat()` Ihnen mitteilen, was das System unterstützt.

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

| `float`   | denken              | Bereich        | Minimum über null | Präzision      |
| --------- | ------------------- | -------------- | ----------------- | -------------- |
| `highp`   | float24\*           | (-2^62, 2^62)  | 2^-62             | 2^-16 relativ  |
| `mediump` | IEEE float16        | (-2^14, 2^14)  | 2^-14             | 2^-10 relativ  |
| `lowp`    | 10-Bit signed fixed | (-2, 2)        | 2^-8              | 2^-8 absolut   |

| `int`     | denken | Bereich        |
| --------- | ------ | -------------- |
| `highp`   | int17  | (-2^16, 2^16)  |
| `mediump` | int11  | (-2^10, 2^10)  |
| `lowp`    | int9   | (-2^8, 2^8)    |

_\*float24: Vorzeichenbit, 7 Bit für Exponent, 16 Bit für Mantisse._

### ESSL300 Mindestanforderungen (WebGL 2)

| `float`   | denken              | Bereich        | Minimum über null | Präzision      |
| --------- | ------------------- | -------------- | ----------------- | -------------- |
| `highp`   | IEEE float32        | (-2^126, 2^127)| 2^-126            | 2^-24 relativ  |
| `mediump` | IEEE float16        | (-2^14, 2^14)  | 2^-14             | 2^-10 relativ  |
| `lowp`    | 10-Bit signed fixed | (-2, 2)        | 2^-8              | 2^-8 absolut   |

| `(u)int`  | denken    | `int` Bereich | `unsigned int` Bereich |
| --------- | --------- | ------------- | ---------------------- |
| `highp`   | (u)int32  | [-2^31, 2^31] | [0, 2^32]              |
| `mediump` | (u)int16  | [-2^15, 2^15] | [0, 2^16]              |
| `lowp`    | (u)int9   | [-2^8, 2^8]   | [0, 2^9]               |

## Bevorzugen Sie eingebaute Funktionen statt eigene zu erstellen

Bevorzugen Sie eingebaute Funktionen wie `dot`, `mix` und `normalize`. Im besten Fall könnten benutzerdefinierte Implementierungen so schnell laufen wie die Einbauten, die sie ersetzen, aber erwarten Sie das nicht. Hardware hat oft hyperoptimierte oder sogar spezialisierte Instruktionen für eingebaute Funktionen, und der Compiler kann Ihre benutzerdefinierten Ersatzroutinen für eingebaute Funktionen nicht zuverlässig mit den speziellen eingbauten Code-Pfaden ersetzen.

## Verwenden Sie Mipmaps für jede Textur, die Sie in 3D sehen

Rufen Sie im Zweifel `generateMipmaps()` nach dem Hochladen von Texturen auf. Mipmaps sind speichertechnisch günstig (nur 30% Overhead), bieten jedoch oft große Leistungsgewinne, wenn Texturen "herausgezoomt" oder allgemein in der Entfernung in 3D verkleinert werden, oder sogar für Cube-Maps!

Das Abtasten von kleineren Texturbildern ist aufgrund einer besseren inhärenten Texturabruf-Cache-Lokalität schneller: Das Herauszoomen auf einer nicht mipmapped Textur ruiniert die Texturabruf-Cache-Lokalität, da benachbarte Pixel nicht mehr von benachbarten Texeln abtasten!

Für 2D-Ressourcen, die nie "herausgezoomt" werden, zahlen Sie allerdings nicht den 30% Speicheraufschlag für Mipmaps:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(In WebGL 2 sollten Sie einfach `texStorage` mit `levels=1` verwenden)

Ein Vorbehalt: `generateMipmaps` funktioniert nur, wenn Sie in der Lage wären, in die Textur zu rendern, wenn Sie sie an einen Framebuffer anfügen würden. (Die Spezifikation nennt dies "farbrenderbare Formate") Wenn ein System beispielsweise float-Texturen unterstützt, aber nicht render-to-float, schlägt `generateMipmaps` für Float-Formate fehl.

## Gehen Sie nicht davon aus, dass Sie auf Float-Texturen rendern können

Es gibt viele Systeme, die RGBA32F-Texturen unterstützen, aber wenn Sie eine an einen Framebuffer anhängen, erhalten Sie `FRAMEBUFFER_INCOMPLETE_ATTACHMENT` von `checkFramebufferStatus()`. Es kann auf Ihrem System funktionieren, aber _die meisten_ mobilen Systeme unterstützen es nicht!

Verwenden Sie in WebGL 1 die `EXT_color_buffer_half_float` und `WEBGL_color_buffer_float` Erweiterungen, um die Unterstützung von Render-to-Float-Texturen für float16 bzw. float32 zu überprüfen.

In WebGL 2 überprüft `EXT_color_buffer_float` die Unterstützung von Render-to-Float-Texturen für sowohl float32 als auch float16. `EXT_color_buffer_half_float` ist auf Systemen vorhanden, die nur das Rendern zu float16-Texturen unterstützen.

### Render-zu-float32 impliziert nicht float32-Blending!

Es kann auf Ihrem System funktionieren, aber auf vielen anderen nicht. Vermeiden Sie es, wenn Sie können. Überprüfen Sie die `EXT_float_blend` Erweiterung, um die Unterstützung zu überprüfen.

Float16-Blending wird immer unterstützt.

## Einige Formate (z. B. RGB) können emuliert werden

Eine Reihe von Formaten (insbesondere dreikanalige Formate) werden emuliert. Zum Beispiel ist RGB32F oft tatsächlich RGBA32F, und Luminance8 kann tatsächlich RGBA8 sein. RGB8 ist besonders oft überraschend langsam, da das Maskieren des Alpha-Kanals und/oder das Patchen von Blendfunktionen einen ziemlich hohen Overhead hat. Bevorzugen Sie die Verwendung von RGBA8 und ignorieren Sie das Alpha selbst für eine bessere Leistung.

## Vermeiden Sie alpha:false, das teuer sein kann

Das Angeben von `alpha:false` bei der Kontext-Erstellung führt dazu, dass der Browser die WebGL-gerenderte Canvas so zusammensetzt, als ob sie undurchsichtig wäre, indem mögliche Alpha-Werte ignoriert werden, die die Anwendung in ihrem Fragment-Shader schreibt. Auf einigen Plattformen bringt diese Fähigkeit leider erhebliche Leistungskosten mit sich. Das RGB-Back-Buffer muss möglicherweise auf einer RGBA-Oberfläche emuliert werden, und es gibt relativ wenige Techniken in der OpenGL-API, die es der Anwendung ermöglichen, dass eine RGBA-Oberfläche keinen Alpha-Kanal hat. [Es wurde festgestellt](https://crbug.com/1045643), dass alle diese Techniken ungefähr den gleichen Leistungseinfluss auf betroffene Plattformen haben.

Die meisten Anwendungen, sogar solche, die Alpha-Blending erfordern, können so strukturiert werden, dass sie `1.0` für den Alpha-Kanal produzieren. Die primäre Ausnahme ist jede Anwendung, die Ziel-Alpha in der Mischfunktion erfordert. Wenn machbar, wird empfohlen, dies zu tun, anstatt `alpha:false` zu verwenden.

## Ziehen Sie komprimierte Texturformate in Betracht

Während JPG und PNG über das Netzwerk im Allgemeinen kleiner sind, sind komprimierte Texturformate im GPU-Speicher kleiner und schneller, um daraus abzurufen. (Dies reduziert den Texturspeicher-Durchsatz, der auf mobilen Geräten kostbar ist) Allerdings haben komprimierte Texturformate eine schlechtere Qualität als JPG und sind im Allgemeinen nur für Farben akzeptabel (nicht z. B. für Normalen oder Koordinaten).

Leider gibt es kein einzelnes, universell unterstütztes Format. Jedes System hat mindestens eines der folgenden:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

WebGL 2 hat universelle Unterstützung durch die Kombination:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc (Mobil)

WEBGL_compressed_texture_astc hat sowohl höhere Qualität und/oder höhere Kompression, wird jedoch nur auf neuerer Hardware unterstützt.

### Basis Universal Texturkompressionsformat/Bibliothek

Basis Universal löst mehrere der oben erwähnten Probleme. Es bietet einen Weg, alle gebräuchlichen komprimierten Texturformate mit einer einzigen komprimierten Texturdatei zu unterstützen, durch eine JavaScript-Bibliothek, die Formate zur Ladezeit effizient konvertiert. Es fügt auch zusätzliche Kompression hinzu, die Basis Universal komprimierte Texturdateien über das Netzwerk viel kleiner macht als reguläre komprimierte Texturen, vergleichbarer mit JPEG.

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## Speicherverbrauch von Tiefen- und Stencil-Formaten

Tiefen- und Stencil-Anhänge und -Formate sind auf vielen Geräten tatsächlich untrennbar. Sie können nach DEPTH_COMPONENT24 oder STENCIL_INDEX8 fragen, erhalten jedoch oft D24X8 und/oder X24S8 32-Bit-Formate im Hintergrund. Gehen Sie davon aus, dass der Speicherverbrauch von Tiefen- und Stencil-Formaten auf das nächste Vielfache von vier Bytes aufgerundet wird.

## texImage/texSubImage-Uploads (besonders Videos) können Pipeline-Flushes verursachen

Die meisten Texture-Uploads von DOM-Elements werden einen Verarbeitungsschritt auslösen, der GL-Programme intern wechseln wird, was einen Pipeline-Flush verursacht. (Pipelines sind in [Vulkan](https://registry.khronos.org/vulkan/specs/1.2/html/chap9.html#VkGraphicsPipelineCreateInfo) explizit formalisier, aber in OpenGL und WebGL implizit hinter den Kulissen. Pipelines sind mehr oder weniger das Tupel von Shader-Programmen, Tiefen/Stencil/Multisample/Misch-/Rasterisierungsstatus)

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
        +drawArrays() // y-flip/Farbraum-Transform/Alpha-(un)premultiply
        +bindTexture(webgl_texture)
        +bindFramebuffer(target)
        +useProgram(prog1)
<pipeline flush>
    drawArrays()
    …
```

Bevorzugen Sie, Uploads vor Beginn des Zeichnens oder zumindest zwischen Pipelines auszuführen:

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
        +drawArrays() // y-flip/Farbraum-Transform/Alpha-(un)premultiply
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

## Verwenden Sie texStorage zur Erstellung von Texturen

Die WebGL 2.0 `texImage*` API ermöglicht es Ihnen, jede Mip-Ebene unabhängig und in beliebiger Größe zu definieren; selbst wenn die Mip-Größen nicht übereinstimmen, sind sie erst zur Zeichenzeit ein Fehler, was bedeutet, dass der Treiber die Textur im GPU-Speicher nicht tatsächlich vorbereiten kann, bis die Textur erstmals gezeichnet wird.

Darüber hinaus könnten einige Treiber bedingungslos die ganze Mip-Kette zuweisen (+30% Speicher!), selbst wenn Sie nur eine einzelne Ebene wünschen.

Bevorzugen Sie also `texStorage` + `texSubImage` für Texturen in WebGL 2.

## Verwenden Sie invalidateFramebuffer

Das Speichern von Daten, die Sie nicht mehr verwenden werden, kann hohe Kosten haben, insbesondere auf gekachelten GPUs, die auf mobilen Geräten verbreitet sind. Wenn Sie mit dem Inhalt eines Framebuffer-Anhangs fertig sind, verwenden Sie WebGL 2.0's `invalidateFramebuffer`, um die Daten zu verwerfen, anstatt den Treiber Zeit verschwenden zu lassen, indem er die Daten für eine spätere Verwendung speichert. DEPTH/STENCIL und/oder multisamples Anhänge sind besonders gute Kandidaten für `invalidateFramebuffer`.

## Verwenden Sie nicht blockierende asynchrone Datenrücklese

Operationen wie `readPixels` und `getBufferSubData` sind typischerweise synchron, aber mit denselben APIs kann nicht blockierende, asynchrone Datenrücklese erreicht werden. Der Ansatz in WebGL 2 ist analog zum Ansatz in OpenGL: [Async Downloads in Blocking APIs](https://kdashg.github.io/misc/async-gpu-downloads.html)

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

## `devicePixelRatio` und Rendering mit hoher DPI

Die Handhabung von `devicePixelRatio !== 1.0` ist knifflig. Während der gebräuchliche Ansatz darin besteht, `canvas.width = width * devicePixelRatio` zu setzen, wird dies bei nicht ganzzahligen Werten von `devicePixelRatio` Moiré-Muster verursachen, wie sie bei der UI-Skalierung unter Windows sowie beim Zoomen auf allen Plattformen üblich sind.

Stattdessen können wir nicht ganzzahlige Werte für CSS's `top`/`bottom`/`left`/`right` verwenden, um zu einem zuverlässigen "Vorspringen" der Canvas auf ganze, ganzzahlige Gerätekoordinaten zu gelangen.

Demo: [Geräte-Pixel-Vorsprung](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

## ResizeObserver und "device-pixel-content-box"

In unterstützenden Browsern (Chromium?) kann `ResizeObserver` mit `'device-pixel-content-box'` verwendet werden, um einen Callback anzufordern, der die wahre Geräte-Pixelgröße eines Elements beinhaltet. Dies kann verwendet werden, um eine asynchrone, aber genaue Funktion zu erstellen:

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

Bitte beachten Sie [die Spezifikation](https://www.w3.org/TR/resize-observer/#resize-observer-interface) für weitere Details.

## ImageBitmap-Erstellung

Die Verwendung des [ImageBitmapOptions Dictionary](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapoptions) ist für die ordnungsgemäße Vorbereitung von Texturen zum Upload zu WebGL unerlässlich, aber leider gibt es keine offensichtliche Möglichkeit, genau abzufragen, welche Wörterbuchmitglieder von einem bestimmten Browser unterstützt werden.

[Dieses JSFiddle](https://jsfiddle.net/ptkyewhx/) zeigt, wie man bestimmt, welche Wörterbuchmitglieder von einem bestimmten Browser unterstützt werden.

## Verwenden Sie `WEBGL_provoking_vertex`, wenn verfügbar

Beim Zusammensetzen von Vertices in Primitiven wie Dreiecken und Linien, nach OpenGL-Konvention, wird der letzte Vertex des Primitivs als "auslösender Vertex" betrachtet. Dies ist relevant, wenn `flat` Vertex-Attribut-Interpolation in ESSL300 (WebGL 2) verwendet wird; der Attributwert vom auslösenden Vertex wird für alle Vertices des Primitivs verwendet.

Heutzutage sind die WebGL-Implementierungen vieler Browser auf verschiedenen Grafik-APIs als OpenGL gehostet, und einige dieser APIs verwenden den ersten Vertex als auslösenden Vertex für Zeichenbefehle. Das Emulieren der OpenGL-Konvention des auslösenden Vertex kann auf einigen dieser APIs rechenintensiv sein.

Aus diesem Grund wurde die [WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/) Erweiterung eingeführt. Wenn eine WebGL-Implementierung diese Erweiterung bereitstellt, ist dies ein Hinweis an die Anwendung, dass das Ändern der Konvention zu `FIRST_VERTEX_CONVENTION_WEBGL` die Leistung verbessert. Es wird dringend empfohlen, dass Anwendungen, die flaches Shading verwenden, nach dem Vorhandensein dieser Erweiterung suchen und diese verwenden, wenn sie verfügbar ist. Beachten Sie, dass dies Änderungen an den Vertex-Buffer-Objekten oder Shadern der Anwendung erfordern kann.
