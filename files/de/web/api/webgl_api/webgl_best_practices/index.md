---
title: WebGL Best Practices
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{DefaultAPISidebar("WebGL")}}

WebGL ist eine komplexe API, und es ist oft nicht offensichtlich, welche die empfohlenen Wege zur Nutzung sind. Diese Seite behandelt Empfehlungen über das gesamte Spektrum der Fachkenntnisse hinweg und hebt nicht nur das, was zu tun und zu lassen ist, hervor, sondern erläutert auch das _warum_. Sie können sich auf dieses Dokument verlassen, um Ihre Wahl der Herangehensweise zu unterstützen und sicherzustellen, dass Sie auf dem richtigen Weg sind, unabhängig davon, welchen Browser oder welches Hardware-Gerät Ihre Benutzer verwenden.

## WebGL-Fehler ansprechen und beheben

Ihre Anwendung sollte ohne die Erzeugung von WebGL-Fehlern laufen (wie sie von `getError` zurückgegeben werden). Jeder WebGL-Fehler wird in der Webkonsole als JavaScript-Warnung mit einer beschreibenden Nachricht gemeldet. Nach zu vielen Fehlern (32 in Firefox) hört WebGL auf, beschreibende Nachrichten zu erzeugen, was das Debuggen erheblich erschwert.

Die _einzigen_ Fehler, die eine gut geformte Seite erzeugt, sind `OUT_OF_MEMORY` und `CONTEXT_LOST`.

## Verfügbarkeit von Erweiterungen verstehen

Die Verfügbarkeit der meisten WebGL-Erweiterungen hängt vom Client-System ab. Wenn Sie WebGL-Erweiterungen verwenden, versuchen Sie, diese nach Möglichkeit optional zu machen, indem Sie sich an den Fall anpassen, dass sie nicht unterstützt werden.

Diese WebGL-1-Erweiterungen sind universell unterstützt und können als vorhanden vorausgesetzt werden:

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(siehe auch: [WebGL-Feature-Level und % Unterstützung](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

Erwägen Sie, diese in den WebGLRenderingContext als Polyfill einzufügen, wie: <https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js>

## Systemlimits verstehen

Ähnlich wie bei Erweiterungen werden die Systemlimits von Ihrem System unterschiedlich als die von Client-Systemen sein! Gehen Sie nicht davon aus, dass Sie dreißig Textur-Sampler pro Shader verwenden können, nur weil es auf Ihrem Computer funktioniert!

Die Mindestanforderungen für WebGL sind ziemlich niedrig. In der Praxis unterstützen so gut wie alle Systeme mindestens Folgendes:

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

Ihr Desktop unterstützt möglicherweise 16k Texturen oder vielleicht 16 Textureinheiten im Vertex-Shader, aber die meisten anderen Systeme tun dies nicht, und Inhalte, die für Sie funktionieren, werden für andere nicht funktionieren!

## Vermeiden Sie die Invalidierung von FBO-Attributbindungen

Fast jede Änderung an den Attributbindungen eines FBO wird die Framebuffer-Vollständigkeit ungültig machen. Richten Sie Ihre Hot-Framebuffers im Voraus ein.

In Firefox wird durch das Setzen der Einstellung `webgl.perf.max-warnings` auf `-1` in about:config die Leistungswarnungen aktiviert, die Warnungen über FB-Vollständigkeits-Invalidierungen umfassen.

### Vermeiden Sie das Ändern von VAO-Anhängen (vertexAttribPointer, disable/enableVertexAttribArray)

Das Zeichnen von statischen, unveränderlichen VAOs ist schneller, als das gleiche VAO für jeden Zeichnungsaufruf zu ändern. Für unveränderte VAOs können Browser die Abrufgrenzen zwischenspeichern, während bei Änderungen von VAOs die Browser die Grenzen neu validieren und berechnen müssen. Der Aufwand hierfür ist relativ gering, aber die Wiederverwendung von VAOs bedeutet auch weniger `vertexAttribPointer`-Aufrufe, daher lohnt es sich, dies überall dort zu tun, wo es einfach ist.

## Objekte schnell löschen

Warten Sie nicht darauf, dass der Garbage Collector/Cycle Collector erkennt, dass Objekte verwaist sind und sie zerstört. Implementierungen verfolgen die Lebendigkeit von Objekten, sodass das "Löschen" auf API-Ebene nur den Handle freigibt, der auf das tatsächliche Objekt verweist. (konzeptionell das Freigeben des Referenzzeigers des Handles auf das Objekt) Erst wenn das Objekt in der Implementierung nicht mehr verwendet wird, wird es tatsächlich freigegeben. Zum Beispiel, wenn Sie nie wieder direkt auf Ihre Shader-Objekte zugreifen möchten, löschen Sie einfach deren Handles, nachdem sie an ein Programmobjekt angehängt wurde.

## Kontexte schnell verlieren

Überlegen Sie auch, WebGL-Kontexte über die `WEBGL_lose_context`-Erweiterung schnell zu verlieren, wenn Sie definitiv mit ihnen fertig sind und die Rendering-Ergebnisse der Ziel-Canvas nicht mehr benötigen. Beachten Sie, dass dies beim Verlassen einer Seite nicht notwendig ist - fügen Sie aus diesem Zweck keinen Unload-Event-Handler hinzu.

## Flush aufrufen, wenn Ergebnisse erwartet werden

Rufen Sie `flush()` auf, wenn Ergebnisse wie Abfragen erwartet werden oder nach Abschluss eines Rendering-Rahmens.

Flush fordert die Implementierung auf, alle ausstehenden Befehle zur Ausführung zu senden und sie aus der Warteschlange zu entfernen, anstatt darauf zu warten, dass weitere Befehle zur Durchführung eingereiht werden.

Es ist zum Beispiel möglich, dass Folgendes niemals ohne Kontextverlust abgeschlossen wird:

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL hat standardmäßig keinen SwapBuffers-Aufruf, daher kann ein Flush ebenfalls zur Überbrückung der Lücke beitragen.

### Verwenden Sie `webgl.flush()`, wenn Sie requestAnimationFrame nicht benutzen

Wenn Sie RAF nicht verwenden, verwenden Sie `webgl.flush()`, um die schnelle Ausführung der eingefügten Befehle zu fördern.

Da RAF direkt von der Frame-Grenze gefolgt wird, ist ein ausdrückliches `webgl.flush()` mit RAF nicht wirklich erforderlich.

## Blockierende API-Aufrufe in der Produktion vermeiden

Bestimmte WebGL-Eintrittspunkte - einschließlich `getError` und `getParameter` - verursachen synchrone Stalls im aufrufenden Thread. Selbst einfache Anfragen können bis zu 1ms in Anspruch nehmen, aber sie können noch länger dauern, wenn sie warten müssen, bis alle Grafikarbeiten abgeschlossen sind (mit einem Effekt ähnlich wie `glFinish()` in nativen OpenGL).

In Produktionscode sollten solche Eintrittspunkte vermieden werden, insbesondere im Hauptthread des Browsers, wo sie die gesamte Seite ruckeln lassen können (einschließlich Scrollen oder sogar des gesamten Browsers).

- `getError()`: verursacht einen Flush + Round-Trip, um Fehler vom GPU-Prozess abzurufen.

  Zum Beispiel innerhalb von Firefox wird der glGetError nur nach Zuweisungen (`bufferData`, `*texImage*`, `texStorage*`) überprüft, um GL_OUT_OF_MEMORY-Fehler auszuernten.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()`, und andere `get`s auf Shadern/Programmen: Flush + Shaderkompilierung + Round-Trip, wenn nicht nach Abschluss der Shaderkompilierung durchgeführt. (Siehe auch [parallele Shaderkompilierung](#kompilieren_von_shadern_und_verknüpfen_von_programmen_parallel_durchführen) unten.)
- `get*Parameter()` im Allgemeinen: möglicher Flush + Round-Trip. In einigen Fällen werden diese zwischengespeichert, um den Round-Trip zu vermeiden, versuchen Sie jedoch, sich nicht darauf zu verlassen.
- `checkFramebufferStatus()`: möglicher Flush + Round-Trip.
- `getBufferSubData()`: üblicher Abschluss + Round-Trip. (Dies ist in Ordnung für LESEN-Buffer in Verbindung mit Zäunen - siehe [asynchroner Daten-Rückruf](#verwenden_sie_nicht-blockierende_asynchrone_daten-rückabfragen) unten.)
- `readPixels()` zur CPU (d.h. ohne gebundenen UNPACK-Buffer): Abschluss + Round-Trip. Verwenden Sie stattdessen GPU-GPU `readPixels` in Verbindung mit asynchronem Daten-Rückruf.

## Vertex attribut 0 immer als Array aktivieren

Wenn Sie ohne aktiviertes Vertex Attribut 0 als Array zeichnen, zwingen Sie den Browser dazu, bei der Ausführung auf Desktop OpenGL (z.B. auf macOS) komplexe Emulationen durchzuführen. Dies liegt daran, dass bei Desktop OpenGL nichts gezeichnet wird, wenn das Vertex Attribut 0 nicht als Array aktiviert ist. Sie können `bindAttribLocation` verwenden, um ein Vertex Attribut zur Nutzung des Ortes 0 zu zwingen, und `enableVertexAttribArray(0)`, um es als Array zu aktivieren.

## Abschätzen des VRAM-Budgets pro Pixel

WebGL bietet keine APIs, um die maximale Menge an Videospeicher im System abzufragen, da solche Abfragen nicht portabel sind. Dennoch müssen Anwendungen sich des VRAM-Verbrauchs bewusst sein und nicht einfach so viel wie möglich zuweisen.

Eine Technik, die vom Google Maps Team eingeführt wurde, ist der Gedanke eines _VRAM-Budgets pro Pixel_:

1\) Für ein System (zum Beispiel ein bestimmtes Desktop/Notebook), bestimmen Sie die maximale Menge an VRAM, die Ihre Anwendung verwenden sollte. 2) Berechnen Sie die Anzahl der Pixel, die durch ein maximiertes Browserfenster abgedeckt werden. Zum Beispiel `(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)` 3) Das VRAM-Budget pro Pixel ist (1) geteilt durch (2) und eine Konstante.

Diese Konstante sollte _generell_ portabel zwischen Systemen sein. Mobile Geräte haben typischerweise kleinere Bildschirme als leistungsfähige Desktop-Maschinen mit großen Monitoren. Berechnen Sie diese Konstante auf einigen Zielsystemen neu, um eine zuverlässige Schätzung zu erhalten.

Passen Sie nun alle internen Zwischenspeicher in der Anwendung (WebGLBuffers, WebGLTextures usw.) so an, dass sie eine maximale Größe nicht überschreiten, berechnet durch diese Konstante multipliziert mit der Anzahl der durch das aktuelle Browserfenster abgedeckten Pixel. Dies erfordert die Abschätzung der von jeder Textur verbrauchten Bytes. Das Limit muss typischerweise auch aktualisiert werden, wenn das Browserfenster in der Größe geändert wird, und ältere Ressourcen, die das Limit überschreiten, müssen entfernt werden.

Indem die VRAM-Nutzung der Anwendung unter diesem Limit bleibt, kann geholfen werden, Out-of-Memory-Fehler und damit verbundene Instabilität zu vermeiden.

## Ziehen Sie in Betracht, in einen kleineren Backbuffer zu rendern

Eine gängige (und einfache) Methode, Qualität gegen Geschwindigkeit einzutauschen, besteht darin, in einen kleineren Backbuffer zu rendern und das Ergebnis hochzuskalieren. Erwägen Sie, canvas.width und Höhe zu reduzieren und canvas.style.width und Höhe auf einer konstanten Größe zu belassen.

## Zeichnungsaufrufe gruppieren

Das "Batching" von Zeichnungsaufrufen zu weniger, größeren Zeichnungsaufrufen wird in der Regel die Leistung verbessern. Wenn Sie 1000 Sprites malen möchten, versuchen Sie, dies als einen einzelnen drawArrays()- oder drawElements()-Aufruf zu tun.

Es ist üblich, "degenerate triangles" zu verwenden, wenn Sie nicht zusammenhängende Objekte als einen einzigen drawArrays(TRIANGLE_STRIP)-Aufruf zeichnen müssen. Degenerierte Dreiecke sind Dreiecke ohne Fläche, daher ist jedes Dreieck, bei dem mehr als ein Punkt an derselben exakten Position ist. Diese Dreiecke werden effektiv übersprungen, sodass Sie ohne mehrere Zeichnungsaufrufe in einen neuen Triangle Strip eintreten können.

Eine weitere wichtige Methode zum Batchen ist das Texturatlas, bei dem mehrere Bilder in einer einzigen Textur platziert werden, oft wie ein Schachbrett. Da Sie Batch-Zeichnungsaufaufrufe aufteilen müssen, um Texturen zu wechseln, können Sie durch das Texturatlas mehr Zeichnungsaufaufrufe zu weniger, größeren Batches kombinieren. Siehe [dieses Beispiel](https://webglsamples.org/sprites/readme.html), das zeigt, wie man auch Sprites, die auf mehrere Texture Atlasses verweisen, in einem einzigen Zeichnungsaufruf zusammenführt.

## Vermeiden Sie "#ifdef GL_ES"

Sie sollten `#ifdef GL_ES` in Ihren WebGL-Shadern nie verwenden; diese Bedingung ist in WebGL immer wahr. Obwohl einige frühe Beispiele dies verwendeten, ist es nicht notwendig.

## Bevorzugen Sie Arbeit im Vertex-Shader

Erledigen Sie so viel Arbeit wie möglich im Vertex-Shader, anstatt im Fragment-Shader. Der Grund dafür ist, dass pro Zeichnungsaufruf Fragment-Shader in der Regel viel häufiger ausgeführt werden als Vertex-Shader. Jede Berechnung, die auf den Scheitelpunkten durchgeführt werden kann und dann nur unter Fragmenten interpoliert wird (über `varying`s), ist ein Leistungsgewinn. (Die Interpolation von varyings ist sehr billig und wird automatisch für Sie während der Rasterisierungsphase der festen Funktionalität der Grafikpipeline durchgeführt.)

Beispielsweise kann eine einfache Animation einer texturierten Oberfläche durch eine zeitabhängige Transformation von Texturkoordinaten erreicht werden. (Der einfachste Fall ist das Hinzufügen eines einheitlichen Vektors zum Texturkoordinaten-Attributvektor) Wenn visuell akzeptabel, kann man die Texturkoordinaten im Vertex-Shader anstatt im Fragment-Shader transformieren, um eine bessere Leistung zu erzielen.

Ein häufiger Kompromiss ist es, einige Beleuchtungsberechnungen pro Scheitelpunkt statt pro Fragment (Pixel) durchzuführen. In einigen Fällen, insbesondere bei einfachen Modellen oder dichten Scheitelpunkten, sieht dies ausreichend gut aus.

Die Umkehrung dessen ist, wenn ein Modell mehr Scheitelpunkte als Pixel im gerenderten Ausgaberahmen hat. Allerdings ist LOD-Meshes in der Regel die Antwort auf dieses Problem, und Arbeit vom Vertex- zum Fragment-Shader zu verlagern, ist selten die Lösung.

## Kompilieren von Shadern und Verknüpfen von Programmen parallel durchführen

Es ist verlockend, Shader und Programme nacheinander zu kompilieren und zu verknüpfen, aber viele Browser können kompilieren und verknüpfen parallel in Hintergrund-Threads durchführen.

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

Betrachten Sie:

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

Während wir ein Muster beschrieben haben, um Browsern zu ermöglichen, parallel zu kompilieren und zu verknüpfen, blockiert das normale Abfragen von `COMPILE_STATUS` oder `LINK_STATUS` bis die Kompilierung oder Verknüpfung abgeschlossen ist. In Browsern, in denen es verfügbar ist, ermöglicht die [KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/) Erweiterung eine _nicht-blockierende_ `COMPLETION_STATUS`-Abfrage. Bevorzugen Sie, diese Erweiterung zu aktivieren und zu verwenden.

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

Diese Technik mag nicht in allen Anwendungen funktionieren, beispielsweise in solchen, die Programme sofort für das Rendering verfügbar brauchen. Überlegen Sie dennoch, wie Variationen davon funktionieren können.

## Überprüfen Sie den Shader-Kompilierungsstatus nicht, es sei denn, die Verknüpfung schlägt fehl

Es gibt nur sehr wenige Fehler, die garantiert dazu führen, dass die Shader-Kompilierung fehlschlägt, aber nicht auf Verknüpfungszeit verzögert werden können. Die [ESSL3-Spezifikation](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) sagt folgendes unter "Fehlerbehandlung":

> Die Umsetzung sollte Fehler so früh wie möglich melden, aber in jedem Fall muss sie die folgenden Anforderungen erfüllen:
>
> - Alle lexikalischen, grammatikalischen und semantischen Fehler müssen nach einem Aufruf von glLinkProgram erkannt worden sein
> - Fehler aufgrund von Unstimmigkeiten zwischen dem Vertex- und Fragment-Shader (Verknüpfungsfehler) müssen nach einem Aufruf von glLinkProgram erkannt worden sein
> - Fehler aufgrund des Überschreitens von Ressourcenlimits müssen nach jedem Zeichnungsaufruf oder einem Aufruf von glValidateProgram erkannt worden sein
> - Ein Aufruf an glValidateProgram muss alle Fehler melden, die mit einem Programmobjekt im gegebenen GL-State verbunden sind.
>
> Die Zuteilung von Aufgaben zwischen Compiler und Linker ist implementierungsabhängig. Infolgedessen gibt es viele Fehler, die entweder zur Kompilierungs- oder Verknüpfungszeit erkannt werden können, abhängig von der Implementierung.

Zudem ist das Abfragen des Kompilierungsstatus ein synchroner Aufruf, der das Pipelining unterbricht.

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

Betrachten Sie:

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

Wenn Sie erwarten, einen essl300 `int` zwischen Shadern zu übergeben und er 32-Bit haben muss, _müssen_ Sie `highp` verwenden, ansonsten werden Sie Portabilitätsprobleme haben. (Funktioniert auf Desktop-, nicht aber auf Android-Geräten)

Bei einer Gleitkommatextur erfordert iOS, dass Sie `highp sampler2D foo;` verwenden, oder es wird sehr schmerzhaft Texture Samples von `lowp` geben! (+/-2.0 max ist wahrscheinlich nicht genug)

### Implizite Vorgaben

Die Vertex-Sprache hat folgende vordeklarierte global gescoped Default-Präzisionsaussagen:

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

Die Fragment-Sprache hat folgende vordeklarierte global gescoped Default-Präzisionsaussagen:

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### In WebGL 1 ist "highp float"-Unterstützung in Fragment-Shadern optional

Die bedingungslose Verwendung von `highp` Präzision in Fragment-Shadern verhindert, dass Ihr Inhalt auf einigen älteren mobilen Geräten funktioniert.

Sie können stattdessen `mediump float` verwenden, aber beachten Sie, dass dies oft zu fehlerhaften Darstellungen aufgrund von mangelnder Präzision führt (insbesondere auf mobilen Systemen), jedoch wird die Beschädigung auf einem typischen Desktop-Computer nicht zu sehen sein.

Wenn Sie Ihre Präzisionsanforderungen kennen, wird `getShaderPrecisionFormat()` Ihnen sagen, was das System unterstützt.

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

| `float`   | denken              | Reichweite    | min über null | Präzision     |
| --------- | ------------------- | ------------- | ------------- | ------------- |
| `highp`   | float24\*           | (-2^62, 2^62) | 2^-62         | 2^-16 relativ |
| `mediump` | IEEE float16        | (-2^14, 2^14) | 2^-14         | 2^-10 relativ |
| `lowp`    | 10-bit signed fixed | (-2, 2)       | 2^-8          | 2^-8 absolut  |

| `int`     | denken | Reichweite    |
| --------- | ------ | ------------- |
| `highp`   | int17  | (-2^16, 2^16) |
| `mediump` | int11  | (-2^10, 2^10) |
| `lowp`    | int9   | (-2^8, 2^8)   |

_\*float24: Vorzeichenbit, 7-Bit für den Exponenten, 16-Bit für die Mantisse._

### ESSL300 Mindestanforderungen (WebGL 2)

| `float`   | denken              | Reichweite      | min über null | Präzision     |
| --------- | ------------------- | --------------- | ------------- | ------------- |
| `highp`   | IEEE float32        | (-2^126, 2^127) | 2^-126        | 2^-24 relativ |
| `mediump` | IEEE float16        | (-2^14, 2^14)   | 2^-14         | 2^-10 relativ |
| `lowp`    | 10-bit signed fixed | (-2, 2)         | 2^-8          | 2^-8 absolut  |

| `(u)int`  | denken   | `int` Reichweite | `unsigned int` Reichweite |
| --------- | -------- | ---------------- | ------------------------- |
| `highp`   | (u)int32 | [-2^31, 2^31]    | [0, 2^32]                 |
| `mediump` | (u)int16 | [-2^15, 2^15]    | [0, 2^16]                 |
| `lowp`    | (u)int9  | [-2^8, 2^8]      | [0, 2^9]                  |

## Bevorzugen Sie eingebaute Funktionen statt eigene zu erstellen

Bevorzugen Sie eingebaute Funktionen wie `dot`, `mix`, und `normalize`. Im besten Fall laufen benutzerdefinierte Implementierungen so schnell wie die eingebauten, die sie ersetzen, aber erwarten Sie nicht, dass sie es tun. Hardware hat oft stark optimierte oder sogar spezialisierte Anweisungen für eingebaute Funktionen, und der Compiler kann Ihre benutzerdefinierten Einbau-Ersetzungen nicht zuverlässig durch spezielle eingebaute Codepfade ersetzen.

## Verwenden Sie Mipmaps für jede Textur, die Sie in 3D sehen

Wenn Sie unsicher sind, rufen Sie `generateMipmaps()` nach dem Hochladen von Texturen auf. Mipmaps sind speicherleicht (nur 30% Overhead), bieten aber oft große Vorteile bei der Leistung, wenn Texturen in der Ferne in 3D "herausgezoomt" oder im Allgemeinen verkleinert werden, oder sogar bei Cube-Maps!

Es ist schneller, von kleineren Texturbildern zu sampeln, aufgrund einer besseren inhärenten Textur-Sampler-Cache-Lokalität: Wenn man auf eine nicht-mipmap'd Textur herauszoomt, wird die Textur-Sampler-Cache-Lokalität ruiniert, weil benachbarte Pixel nicht mehr von benachbarten Texeln samplen!

Für 2D-Ressourcen aber, die nie "herausgezoomt" werden, bezahlen Sie nicht den 30% Speichersurcharge für Mipmaps:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(In WebGL 2 sollten Sie einfach `texStorage` mit `levels=1` verwenden)

Ein Vorbehalt: `generateMipmaps` funktioniert nur, wenn Sie in die Textur rendern könnten, wenn Sie es an ein Framebuffer angehängt hätten. (Die Spezifikation nennt dies "farben-renderbare Formate") Zum Beispiel, wenn ein System Float-Texturen unterstützt, aber nicht auf Float rendern kann, wird `generateMipmaps` für Float-Formate fehlschlagen.

## Gehen Sie nicht davon aus, dass Sie in Float-Texturen rendern können

Es gibt viele Systeme, die RGBA32F-Texturen unterstützen, aber wenn Sie eine an ein Framebuffer anhängen, erhalten Sie `FRAMEBUFFER_INCOMPLETE_ATTACHMENT` von `checkFramebufferStatus()`. Es funktioniert möglicherweise auf Ihrem System, aber _die meisten_ mobilen Systeme unterstützen es nicht!

Auf WebGL 1 verwenden Sie die `EXT_color_buffer_half_float` und `WEBGL_color_buffer_float` Erweiterungen, um die Unterstützung für das Rendern auf Float-Texturunterstützung für float16 bzw. float32 zu überprüfen.

Auf WebGL 2 prüft `EXT_color_buffer_float` die Unterstützung für das Rendern auf Float-Texturunterstützung für sowohl float32 als auch float16. `EXT_color_buffer_half_float` ist auf Systemen verfügbar, die nur das Rendern auf float16-Texturen unterstützen.

### Render-to-float32 impliziert nicht float32-Blending!

Es mag auf Ihrem System funktionieren, aber auf vielen anderen wird es nicht funktionieren. Vermeiden Sie es, wenn Sie können. Prüfen Sie die `EXT_float_blend`-Erweiterung auf Unterstützung.

Float16-Blending wird immer unterstützt.

## Einige Formate (z.B. RGB) können emuliert werden

Eine Reihe von Formaten (insbesondere drei-Kanal-Formate) werden emuliert. Zum Beispiel ist RGB32F oft tatsächlich RGBA32F, und Luminance8 kann tatsächlich RGBA8 sein. RGB8 ist besonders oft überraschend langsam, da das Ausmaskieren des Alpha-Kanals und/oder das Patchen von Blend-Funktionen einen relativ hohen Overhead hat. Verwenden Sie lieber RGBA8 und ignorieren Sie den Alpha selbst, für bessere Leistung.

## Vermeiden Sie alpha:false, das teuer sein kann

Das Angeben von `alpha:false` während der Kontext-Erstellung führt dazu, dass der Browser das WebGL-gerenderte Canvas so zusammensetzt, als wäre es undurchsichtig, ohne Berücksichtigung von Alpha-Werten, die die Anwendung in ihrem Fragment-Shader schreibt. Auf einigen Plattformen verursacht diese Fähigkeit leider erhebliche Leistungseinbußen. Der RGB-Backbuffer muss möglicherweise auf einer RGBA-Oberfläche emuliert werden, und es gibt relativ wenige Techniken in der OpenGL-API, um es der Anwendung erscheinen zu lassen, als ob eine RGBA-Oberfläche keinen Alpha-Kanal hätte. [Es wurde festgestellt](https://crbug.com/1045643), dass all diese Techniken auf betroffenen Plattformen etwa gleiche Leistungseinbußen haben.

Die meisten Anwendungen, sogar solche, die Alphablending erfordern, können so strukturiert werden, dass sie `1.0` für den Alpha-Kanal produzieren. Die primäre Ausnahme ist jede Anwendung, die Zielalpha in der Blendfunktion erfordert. Wenn möglich, wird empfohlen, dies zu tun, anstatt `alpha:false` zu verwenden.

## Ziehen Sie komprimierte Texturformate in Betracht

Während JPG und PNG in der Regel kleiner über die Leitung sind, sind komprimierte GPU-Texturformate im GPU-Speicher kleiner und schneller zu sampeln. (Dies verringert die Texturspeicherbandbreite, die auf Mobilgeräten wertvoll ist) Allerdings haben komprimierte Texturformate schlechtere Qualität als JPG und sind im Allgemeinen nur für Farben akzeptabel (nicht z.B. Normals oder Koordinaten).

Leider gibt es kein einzelnes universell unterstütztes Format. Jedes System hat mindestens einen der folgenden Punkte:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

WebGL 2 hat durch die Kombination folgende universelle Unterstützung:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc (Mobil)

WEBGL_compressed_texture_astc hat sowohl eine höhere Qualität und/oder höhere Kompression, wird jedoch nur von neueren Hardware unterstützt.

### Basis Universal Texturkompressionsformat/Bibliothek

Basis Universal löst einige der oben erwähnten Probleme. Es bietet einen Weg, alle gängigen komprimierten Texturformate mit einer einzigen komprimierten Texturdatei zu unterstützen, durch eine JavaScript-Bibliothek, die Formate effizient zur Ladezeit konvertiert. Es fügt auch zusätzliche Komprimierung hinzu, die Basis Universal komprimierte Texturdateien viel kleiner als reguläre komprimierte Texturen über die Leitung macht, vergleichbar mit JPEG.

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## Speichernutzung von Tiefen- und Stencil-Formaten

Tiefen- und Stencil-Attachments und Formate sind tatsächlich auf vielen Geräten untrennbar. Sie können nach DEPTH_COMPONENT24 oder STENCIL_INDEX8 fragen, aber Sie bekommen oft D24X8 und X24S8 32-bpp-Formate im Hintergrund. Nehmen Sie an, dass der Speichergebrauch von Tiefen- und Stencil-Formaten auf die nächste Vier-Bit-Grenze abgerundet wird.

## texImage/texSubImage-Uploads (insbesondere Videos) können Pipeline-Flushes verursachen

Die meisten Textur-Uploads von DOM-Elementen verursachen einen Bearbeitungsdurchgang, der intern GL-Programme temporär wechselt und zu einem Pipeline-Flush führt. (Pipelines sind formal explizit in [Vulkan](https://docs.vulkan.org/spec/latest/chapters/pipelines.html) usw. definiert, aber sie sind hinter den Kulissen implizit in OpenGL und WebGL. Pipelines sind mehr oder weniger das Tuple von Shader-Programm, Tiefe/Stencil/Multisample/Blend/Rasterisierung Zustand)

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

Bevorzugen Sie Uploads vor dem Zeichnen oder zumindest zwischen Pipelines:

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

## Verwenden Sie texStorage zur Erstellung von Texturen

Die WebGL 2.0 `texImage*` API ermöglicht es Ihnen, jede Mip-Ebene unabhängig und in jeder Größe zu definieren, selbst wenn die Mip-Größen nicht zusammenpassen, sind sie bis zur Zeichnungszeit kein Fehler, was bedeutet, dass der Treiber den Textur im GPU-Speicher bis zum ersten Mal, wenn die Textur gezeichnet wird, tatsächlich nicht vorbereiten kann.

Zudem könnten einige Treiber bedingungslos die gesamte Mip-Kette zuweisen (+30% Speicher!), selbst wenn Sie nur eine einzelne Ebene möchten.

Bevorzugen Sie daher `texStorage` + `texSubImage` für Texturen in WebGL 2.

## Verwenden Sie invalidateFramebuffer

Das Speichern von Daten, die Sie später nicht mehr verwenden werden, kann hohe Kosten haben, insbesondere bei Kachel-Render-GPUs auf Mobilgeräten. Wenn Sie mit den Inhalten eines Framebuffer-Attachments fertig sind, verwenden Sie die WebGL 2.0 `invalidateFramebuffer` um die Daten zu verwerfen, anstatt den Treiber die Daten später speichern zu lassen. DEPTH/STENCIL und/oder multisampled Attachments sind besonders gute Kandidaten für `invalidateFramebuffer`.

## Verwenden Sie nicht-blockierende asynchrone Daten-Rückabfragen

Operationen wie `readPixels` und `getBufferSubData` sind typischerweise synchron, aber mit den gleichen APIs kann eine nicht-blockierende asynchrone Daten-Rückabfrage erreicht werden. Der Ansatz in WebGL 2 ist analog zum Ansatz in OpenGL: [Asynchrone Downloads in blockierenden APIs](https://kdashg.github.io/misc/async-gpu-downloads.html)

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

Der Umgang mit `devicePixelRatio !== 1.0` ist schwierig. Während der gängige Ansatz darin besteht, `canvas.width = width * devicePixelRatio` zu setzen, führt dies bei nicht-ganzzahligen Werten von `devicePixelRatio`, wie sie bei der UI-Skalierung unter Windows und beim Zoomen auf allen Plattformen üblich sind, zu Moiré-Artefakten.

Stattdessen können wir nicht-ganzzahlige Werte für das CSS `top`/`bottom`/`left`/`right` verwenden, um unser Canvas zuverlässig auf ganze Integer-Gerätekoordinaten vorzuschnappen.

Demo: [Device pixel presnap](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

## ResizeObserver und 'device-pixel-content-box'

Auf [unterstützten Browsern](/de/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize#browser_compatibility) kann `ResizeObserver` mit `'device-pixel-content-box'` verwendet werden, um einen Rückruf zu erhalten, der die echte {{Glossary("device_pixel", "Device-Pixel")}}-Größe eines Elements enthält. Dies kann verwendet werden, um eine asynchrone, aber genaue Funktion zu erstellen:

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

## Verwenden Sie `WEBGL_provoking_vertex`, wenn verfügbar

Beim Zusammenstellen von Scheitelpunkten zu Primitiven wie Dreiecken und Linien wird nach OpenGL-Konvention der letzte Scheitelpunkt des Primitivs als "provokanter Scheitelpunkt" angesehen. Dies ist relevant, wenn `flat` Vertex-Attributinterpolation in ESSL300 (WebGL 2) verwendet wird; der Attributwert des provokanten Scheitelpunkts wird für alle Scheitelpunkte des Primitivs verwendet.

Heutzutage werden viele Browser-WebGL-Implementierungen auf verschiedenen Grafik-APIs als OpenGL gehostet, und einige dieser APIs verwenden den ersten Scheitelpunkt als provokanten Scheitelpunkt für Zeichnungsbefehle. Die Emulation der OpenGL provokanten Scheitelpunktkonvention kann auf einigen dieser APIs rechentechnisch teuer sein.

Aus diesem Grund wurde die [WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/) Erweiterung eingeführt. Wenn eine WebGL-Implementierung diese Erweiterung bereitstellt, ist dies ein Hinweis an die Anwendung, dass das Ändern der Konvention in `FIRST_VERTEX_CONVENTION_WEBGL` die Leistung verbessern wird. Es wird dringend empfohlen, dass Anwendungen, die Flachschattierung verwenden, auf das Vorhandensein dieser Erweiterung prüfen und sie nutzen, wenn sie verfügbar ist. Beachten Sie, dass dies möglicherweise Änderungen an den Vertex-Buffers oder Shadern der Anwendung erfordert.
