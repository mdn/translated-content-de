---
title: WebGL Best Practices
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{DefaultAPISidebar("WebGL")}}

WebGL ist eine komplizierte API und es ist oft nicht offensichtlich, welche empfohlenen Methoden es gibt, um sie zu nutzen. Diese Seite behandelt Empfehlungen über das gesamte Spektrum der Fachkenntnisse hinweg und hebt nicht nur Do's and Don'ts hervor, sondern erläutert auch das _Warum_. Sie können sich auf dieses Dokument verlassen, um Ihre Wahl des Ansatzes zu leiten und sicherzustellen, dass Sie auf dem richtigen Weg sind, unabhängig davon, welchen Browser oder welche Hardware Ihre Benutzer verwenden.

## Adressieren und Beseitigen von WebGL-Fehlern

Ihre Anwendung sollte ohne WebGL-Fehler laufen (wie sie von `getError` zurückgegeben werden). Jeder WebGL-Fehler wird in der Web-Konsole als JavaScript-Warnung mit einer beschreibenden Nachricht gemeldet. Nach zu vielen Fehlern (32 in Firefox) hört WebGL auf, beschreibende Nachrichten zu generieren, was das Debuggen erheblich behindert.

Die _einzigen_ Fehler, die eine gut formatierte Seite generieren sollte, sind `OUT_OF_MEMORY` und `CONTEXT_LOST`.

## Verfügbarkeit von Erweiterungen verstehen

Die Verfügbarkeit der meisten WebGL-Erweiterungen hängt vom Client-System ab. Wenn Sie WebGL-Erweiterungen verwenden, versuchen Sie, sie optional zu machen, indem Sie sich an den Fall anpassen, in dem sie nicht unterstützt werden.

Diese WebGL 1-Erweiterungen sind universell unterstützt und können als vorhanden angesehen werden:

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(siehe auch: [WebGL-Funktionsstufen und % Unterstützung](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

Erwägen Sie, diese in den `WebGLRenderingContext` zu polyfillen, wie z.B.: <https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js>

## Systemgrenzen verstehen

Ähnlich wie bei Erweiterungen werden die Grenzen Ihres Systems anders sein als die Systeme Ihrer Kunden! Gehen Sie nicht davon aus, dass Sie dreißig Textur-Sampler pro Shader verwenden können, nur weil es auf Ihrem Computer funktioniert!

Die Mindestanforderungen für WebGL sind ziemlich gering. Tatsächlich unterstützen fast alle Systeme mindestens Folgendes:

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

Ihr Desktop kann 16k-Texturen unterstützen oder vielleicht 16 Textureinheiten im Vertex-Shader, aber die meisten anderen Systeme nicht, und Inhalte, die bei Ihnen funktionieren, funktionieren bei ihnen nicht!

## Vermeiden Sie das Inaktivieren von FBO-Anhangsbindungen

Fast jede Änderung an einer FBO-Anhangsbindung macht die Framebuffer-Vollständigkeit ungültig. Richten Sie Ihre heißen Framebuffer im Voraus ein.

In Firefox aktiviert das Setzen der Einstellung `webgl.perf.max-warnings` auf `-1` in about:config Leistungswarnungen, die Warnungen über die Ungültigkeit der FB-Vollständigkeit beinhalten.

### Vermeiden Sie Änderungen an VAO-Anhängen (`vertexAttribPointer`, `disable/enableVertexAttribArray`)

Das Zeichnen aus statischen, unveränderlichen VAOs ist schneller als das Mutieren desselben VAO für jede Zeichenaufruf. Für unveränderte VAOs können Browser die Abrufgrenzen zwischenspeichern, während bei Änderungen der VAOs Browser die Grenzen neu validieren und neuberechnen müssen. Der Overhead dafür ist relativ gering, aber die Wiederverwendung von VAOs bedeutet auch weniger `vertexAttribPointer`-Aufrufe, was es wert ist, wann immer es einfach ist.

## Löschen Sie Objekte zeitnah

Warten Sie nicht darauf, dass der Garbage Collector/Zyklus-Collector erkennt, dass Objekte verwaist sind und sie zerstört. Die Implementierungen verfolgen die Lebensdauer von Objekten, sodass das 'Löschen' auf der API-Ebene nur das Handle freigibt, das auf das tatsächliche Objekt verweist. (Konzeptionell wird der Ref-Pointer des Handles zum Objekt freigegeben.) Erst wenn das Objekt in der Implementierung nicht mehr verwendet wird, wird es tatsächlich freigegeben. Zum Beispiel: Wenn Sie Ihre Shader-Objekte nicht mehr direkt verwenden möchten, löschen Sie einfach deren Handles, nachdem Sie sie mit einem Programmobjekt verbunden haben.

## Verlieren Sie Kontexte zeitnah

Erwägen Sie auch, WebGL-Kontexte über die `WEBGL_lose_context`-Erweiterung zu verlieren, wenn Sie definitiv mit ihnen fertig sind und die Rendering-Ergebnisse der Ziel-Leinwand nicht mehr benötigen. Beachten Sie, dass dies beim Navigieren von einer Seite nicht notwendig ist - fügen Sie keinen Unload-Event-Handler nur für diesen Zweck hinzu.

## Spülen bei erwarteten Ergebnissen

Rufen Sie `flush()` auf, wenn Sie Ergebnisse wie Abfragen erwarten oder am Ende eines Rendering-Frames.

`Flush` weist die Implementierung an, alle ausstehenden Befehle zur Ausführung zu bringen und sie aus der Warteschlange zu spülen, anstatt auf weitere Befehle zu warten, bevor diese zur Ausführung gesendet werden.

Zum Beispiel könnte es möglich sein, dass das folgende nie abgeschlossen wird, ohne dass der Kontext verloren geht:

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL hat standardmäßig keinen `SwapBuffers`-Aufruf, daher kann ein `flush` helfen, die Lücke zu füllen.

### Verwenden Sie `webgl.flush()`, wenn `requestAnimationFrame` nicht verwendet wird

Wenn RAF nicht verwendet wird, verwenden Sie `webgl.flush()`, um die vorzeitige Ausführung von in die Warteschlange eingereihten Befehlen zu fördern.

Da RAF direkt nach der Frame-Grenze folgt, ist ein explizites `webgl.flush()` mit RAF nicht wirklich nötig.

## Vermeiden Sie blockierende API-Aufrufe in der Produktion

Bestimmte WebGL-Einstiegspunkte - einschließlich `getError` und `getParameter` - verursachen synchrone Wartezeiten im Anruferthread. Selbst einfache Anfragen können so lange dauern wie 1ms, aber sie können noch länger dauern, wenn sie darauf warten müssen, dass alle Grafik-Arbeiten abgeschlossen sind (mit einer ähnlichen Wirkung wie `glFinish()` in nativem OpenGL).

In Produktionscode sollten solche Einstiegspunkte vermieden werden, insbesondere im Hauptthread des Browsers, wo sie die gesamte Seite stören können (oft einschließlich Scrollen oder sogar dem gesamten Browser).

- `getError()`: verursacht Spülung + Rundreise, um Fehler vom GPU-Prozess abzurufen.

  Zum Beispiel wird in Firefox das einzige Mal `glGetError` überprüft, wenn Zuweisungen (`bufferData`, `*texImage*`, `texStorage*`) vorgenommen werden, um eventuelle `GL_OUT_OF_MEMORY`-Fehler zu erfassen.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()`, andere `get's` auf Shadern/Programmen: Spülung + Shader-Kompilierung + Rundreise, wenn nicht nach Abschluss der Shader-Kompilierung durchgeführt. (Siehe auch [parallele Shader-Kompilierung](#kompilieren_sie_shader_und_verknüpfen_sie_programme_parallel) unten.)
- `get*Parameter()` im Allgemeinen: mögliche Spülung + Rundreise. In einigen Fällen werden diese zwischengespeichert, um die Rundreise zu vermeiden, aber versuchen Sie, sich nicht darauf zu verlassen.
- `checkFramebufferStatus()`: mögliche Spülung + Rundreise.
- `getBufferSubData()`: übliche Fertigstellung + Rundreise. (Dies ist in Ordnung für READ-Puffer in Verbindung mit Zäunen - siehe [asynchrone Datenrückmeldungen](#verwenden_sie_nicht-blockierende_asynchrone_datenabfrage) unten.)
- `readPixels()` an die CPU (d.h. ohne gebundenen UNPACK-Puffer): Fertigstellung + Rundreise. Verwenden Sie stattdessen GPU-GPU `readPixels` in Verbindung mit asynchronem Daten-Readback.

## Immer Vertex Attrib 0 als Array aktivieren

Wenn Sie zeichnen, ohne dass Vertex Attrib 0 als Array aktiviert ist, zwingen Sie den Browser zu komplizierter Emulation beim Ausführen auf Desktop-OpenGL (wie auf macOS). Dies liegt daran, dass in Desktop-OpenGL nichts gezeichnet wird, wenn Vertex Attrib 0 nicht als Array aktiviert ist. Sie können `bindAttribLocation` verwenden, um ein Vertex-Attribut zu zwingen, den Standort 0 zu verwenden, und `enableVertexAttribArray(0)`, um es als Array zu aktivieren.

## Ein VRAM-Budget pro Pixel schätzen

WebGL bietet keine APIs, um die maximale Menge an Videospeicher im System abzufragen, da solche Abfragen nicht portabel sind. Trotzdem müssen Anwendungen auf die Nutzung von VRAM achten und nicht einfach so viel wie möglich zuweisen.

Eine Technik, die vom Google Maps-Team entwickelt wurde, ist das Konzept eines _VRAM-Budgets pro Pixel_:

1. Entscheiden Sie für ein System (z.B. einen bestimmten Desktop / Laptop), wie viel VRAM Ihre Anwendung maximal nutzen sollte. 2) Berechnen Sie die Anzahl der Pixel, die von einem maximierten Browserfenster abgedeckt werden. Z.B. `(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)` 3) Das VRAM-Budget pro Pixel ist (1) geteilt durch (2) und ist eine Konstante.

Diese Konstante sollte _allgemein_ unter Systemen portabel sein. Mobile Geräte haben typischerweise kleinere Bildschirme als leistungsstarke Desktop-Geräte mit großen Monitoren. Berechnen Sie diese Konstante auf einigen Zielsystemen neu, um eine zuverlässige Schätzung zu erhalten.

Passen Sie nun alle internen Caches in der Anwendung (WebGLBuffers, WebGLTextures, usw.) so an, dass sie eine maximale Größe einhalten, die aus dieser Konstante multipliziert mit der Anzahl der Pixel resultiert, die vom _aktuellen_ Browserfenster abgedeckt werden. Dies erfordert die Schätzung der Anzahl der von jeder Textur verbrauchten Bytes, zum Beispiel. Die Begrenzung muss auch typischerweise aktualisiert werden, wenn das Browserfenster die Größe ändert, und ältere Ressourcen über dem Limit müssen bereinigt werden.

Die VRAM-Nutzung der Anwendung unterhalb dieser Begrenzung zu halten, wird helfen, Fehler wegen Speichermangels und damit verbundene Instabilitäten zu vermeiden.

## Erwägen Sie das Rendern auf einen kleineren Backbuffer

Eine gängige (und einfache) Möglichkeit, Qualität gegen Geschwindigkeit zu tauschen, besteht darin, in einen kleineren Backbuffer zu rendern und das Ergebnis hochzuskalieren. Erwägen Sie, `canvas.width` und `canvas.height` zu reduzieren und `canvas.style.width` und `canvas.style.height` in einer konstanten Größe zu halten.

## Batch-Zeichenaufrufe

Das "Batching" von Zeichenaufrufen in weniger, größere Zeichenaufrufe wird die Leistung im Allgemeinen verbessern. Wenn Sie 1000 Sprites malen müssen, versuchen Sie, dies als einen einzigen `drawArrays()` oder `drawElements()`-Aufruf zu tun.

Es ist üblich, "degenerierte Dreiecke" zu verwenden, wenn Sie diskontinuierliche Objekte als einzelnen `drawArrays(TRIANGLE_STRIP)`-Aufruf zeichnen müssen. Degenerierte Dreiecke sind Dreiecke ohne Fläche, daher jedes Dreieck, bei dem mehr als ein Punkt genau an derselben Position ist. Diese Dreiecke werden effektiv übersprungen, was Ihnen erlaubt, einen neuen Dreiecksstrip zu starten, der nicht mit Ihrem vorherigen verknüpft ist, ohne in mehrere Zeichenaufrufe zu unterteilen.

Eine weitere wichtige Methode zum Batchen ist das Texturatlasieren, bei dem mehrere Bilder in einer einzigen Textur platziert werden, oft wie ein Schachbrett. Da Sie Zeichenaufruf-Batches aufteilen müssen, um Texturen zu wechseln, ermöglicht das Texturatlasieren, mehrere Zeichenaufrufe in weniger, größere Batches zu kombinieren. Siehe [dieses Beispiel](https://webglsamples.org/sprites/readme.html), das zeigt, wie selbst Sprites, die sich auf mehrere Texturatlanten beziehen, in einem einzigen Zeichenaufruf kombiniert werden können.

## Vermeiden Sie "#ifdef GL_ES"

Sie sollten nie `#ifdef GL_ES` in Ihren WebGL-Shaders verwenden; diese Bedingung ist in WebGL immer wahr. Obwohl einige frühe Beispiele dies verwendet haben, ist es nicht notwendig.

## Vorzugsweise Arbeit im Vertex-Shader erledigen

Erledigen Sie so viel Arbeit wie möglich im Vertex-Shader, anstatt im Fragment-Shader. Dies liegt daran, dass Fragment-Shader pro Zeichenaufruf im Allgemeinen viel häufiger als Vertex-Shader ausgeführt werden. Jede Berechnung, die an den Vertices durchgeführt werden kann und dann einfach unter den Fragmenten interpoliert wird (über `varying`s), ist ein Leistungsgewinn. (Das Interpolieren von `varying`s ist sehr kostengünstig und wird automatisch durch die feste Funktionalität der Rasterisierungsstufe der Grafik-Pipeline für Sie durchgeführt.)

Zum Beispiel kann eine einfache Animation einer texturierten Oberfläche durch eine zeitabhängige Transformation der Texturkoordinaten erreicht werden. (Der einfachste Fall ist das Hinzufügen eines `uniform`-Vektors zum Texturkoordinaten-Attributvektor.) Wenn es visuell akzeptabel ist, kann man die Texturkoordinaten im Vertex-Shader anstatt im Fragment-Shader transformieren, um bessere Leistung zu erzielen.

Ein häufiger Kompromiss besteht darin, einige Lichtberechnungen pro Vertex anstelle von pro Fragment (Pixel) durchzuführen. In einigen Fällen, besonders bei einfachen Modellen oder dichten Vertices, sieht dies gut genug aus.

Die Umkehrung davon ist, wenn ein Modell mehr Vertices als Pixel im gerenderten Output hat. Jedoch ist LOD-Meshes normalerweise die Antwort auf dieses Problem, selten wird Arbeit vom Vertex- _zum_ Fragment-Shader verschoben.

## Kompilieren Sie Shader und verknüpfen Sie Programme parallel

Es ist verlockend, Shader und Programme seriell zu kompilieren und zu verknüpfen, aber viele Browser können auf Hintergrundthreads parallel kompilieren und verknüpfen.

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

Obwohl wir ein Muster beschrieben haben, um Browsern zu ermöglichen, parallel zu kompilieren und zu verknüpfen, blockiert das Überprüfen von `COMPILE_STATUS` oder `LINK_STATUS` normalerweise, bis die Kompilierung oder Verknüpfung abgeschlossen ist. In Browsern, in denen es verfügbar ist, bietet die [KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/) Erweiterung eine _nicht blockierende_ `COMPLETION_STATUS`-Abfrage. Bevorzugen Sie es, diese Erweiterung zu aktivieren und zu verwenden.

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

Diese Technik funktioniert möglicherweise nicht in allen Anwendungen, zum Beispiel bei solchen, die Programme sofort für das Rendering verfügbar haben müssen. Erwägen Sie dennoch, wie Variationen funktionieren könnten.

## Überprüfen Sie den Shader-Kompilierungsstatus nicht, es sei denn, das Verknüpfen schlägt fehl

Es gibt sehr wenige Fehler, die garantiert zum Scheitern der Shader-Kompilierung führen, aber nicht auf Verknüpfungszeit verschoben werden können. Die [ESSL3-Spezifikation](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) besagt dies unter "Fehlerbehandlung":

> Die Implementierung sollte Fehler so früh wie möglich melden, muss jedoch in jedem Fall Folgendes erfüllen:
>
> - Alle lexikalischen, grammatikalischen und semantischen Fehler müssen nach einem Aufruf von glLinkProgram erkannt worden sein.
> - Fehler aufgrund eines Mismatch zwischen dem Vertex- und Fragment-Shader (Verknüpfungsfehler) müssen nach einem Aufruf von glLinkProgram erkannt worden sein.
> - Fehler aufgrund des Überschreitens von Ressourcengrenzen müssen nach jedem Zeichenaufruf oder einem Aufruf von glValidateProgram erkannt worden sein.
> - Ein Aufruf von glValidateProgram muss alle mit einem Programmobjekt verbundenen Fehler im aktuellen GL-Zustand melden.
>
> Die Verteilung der Aufgaben zwischen dem Compiler und dem Linker ist implementierungsabhängig. Folglich gibt es viele Fehler, die entweder zur Kompilierungs- oder Verknüpfungszeit je nach Implementierung erkannt werden können.

Zusätzlich ist das Abfragen des Kompilierungsstatus ein synchroner Aufruf, der das Pipelining unterbricht.

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

Wenn Sie erwarten, ein essl300 `int` zwischen Shadern weiterzugeben, und Sie benötigen es, um 32-Bit zu haben, _müssen_ Sie `highp` verwenden, sonst werden Sie Portabilitätsprobleme haben. (Funktioniert auf Desktop, nicht auf Android)

Wenn Sie eine Float-Textur haben, erfordert iOS, dass Sie `highp sampler2D foo;` verwenden, oder es wird Ihnen sehr schmerzhaft `lowp` Textur-Samples geben! (+/-2.0 max ist wahrscheinlich nicht gut genug für Sie)

### Implizite Voreinstellungen

Die Vertex-Sprache hat die folgenden vordeklarierten globalen Bereichsstandardpräzisionsaussagen:

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

Die Fragment-Sprache hat die folgenden vordeklarierten globalen Bereichsstandardpräzisionsaussagen:

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### In WebGL 1 ist "highp float"-Support in Fragment-Shadern optional

Die bedingungslose Verwendung von `highp` Präzision in Fragment-Shadern wird verhindern, dass Ihr Inhalt auf einigen älteren mobilen Geräten funktioniert.

Während Sie `mediump float` stattdessen verwenden können, seien Sie sich bewusst, dass dies oft zu korruptem Rendering aufgrund von fehlender Präzision führt (insbesondere mobile Systeme), obwohl die Korruption auf einem typischen Desktop-Computer nicht sichtbar ist.

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

| `float`   | denken                    | Bereich       | min über null | Präzision     |
| --------- | ------------------------- | ------------- | ------------- | ------------- |
| `highp`   | float24\*                 | (-2^62, 2^62) | 2^-62         | 2^-16 relativ |
| `mediump` | IEEE float16              | (-2^14, 2^14) | 2^-14         | 2^-10 relativ |
| `lowp`    | 10-Bit vorzeichenbehaftet | (-2, 2)       | 2^-8          | 2^-8 absolut  |

| `int`     | denken | Bereich       |
| --------- | ------ | ------------- |
| `highp`   | int17  | (-2^16, 2^16) |
| `mediump` | int11  | (-2^10, 2^10) |
| `lowp`    | int9   | (-2^8, 2^8)   |

_\*float24: Vorzeichenbit, 7-Bit für Exponent, 16-Bit für Mantisse._

### ESSL300 Mindestanforderungen (WebGL 2)

| `float`   | denken                    | Bereich         | min über null | Präzision     |
| --------- | ------------------------- | --------------- | ------------- | ------------- |
| `highp`   | IEEE float32              | (-2^126, 2^127) | 2^-126        | 2^-24 relativ |
| `mediump` | IEEE float16              | (-2^14, 2^14)   | 2^-14         | 2^-10 relativ |
| `lowp`    | 10-Bit vorzeichenbehaftet | (-2, 2)         | 2^-8          | 2^-8 absolut  |

| `(u)int`  | denken   | `int` Bereich | `unsigned int` Bereich |
| --------- | -------- | ------------- | ---------------------- |
| `highp`   | (u)int32 | [-2^31, 2^31] | [0, 2^32]              |
| `mediump` | (u)int16 | [-2^15, 2^15] | [0, 2^16]              |
| `lowp`    | (u)int9  | [-2^8, 2^8]   | [0, 2^9]               |

## Bevorzugen Sie eingebaute Funktionen statt selbstgebaute

Bevorzugen Sie eingebaute Funktionen wie `dot`, `mix` und `normalize`. Bestenfalls könnten benutzerdefinierte Implementierungen so schnell wie die eingebauten Funktionen laufen, die sie ersetzen, aber erwarten Sie dies nicht. Hardware hat oft hyper-optimierte oder sogar spezialisierte Anweisungen für eingebaute Funktionen, und der Compiler kann Ihre benutzerdefinierten Funktionsersetzungen nicht zuverlässig durch die speziellen eingebaute Codepfade ersetzen.

## Verwenden Sie Mipmaps für jede Textur, die in 3D angezeigt wird

Wenn Sie unsicher sind, rufen Sie `generateMipmaps()` nach Textur-Uploads auf. Mipmaps sind speicherarm (nur 30 % Overhead) und bieten oft große Leistungsverbesserungen, wenn Texturen in 3D "herausgezoomt" oder allgemein in der Entfernung verkleinert werden oder sogar für Würfelmaps!

Es ist schneller, von kleineren Texturbildern zu sampeln, aufgrund der besseren inhärenten Texturabruf-Cache-Lokalität: Das Herauszoomen auf einer nicht mipmap-unterstützten Textur ruiniert die Texturabruf-Cache-Lokalität, weil benachbarte Pixel nicht mehr von benachbarten Texeln sampeln!

Für 2D-Ressourcen, die niemals "herausgezoomt" werden, bezahlen Sie jedoch nicht den 30 % Speicherzuschlag für Mipmaps:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(In WebGL 2 sollten Sie einfach `texStorage` mit `levels=1` verwenden.)

Ein Vorbehalt: `generateMipmaps` funktioniert nur, wenn es möglich wäre, in die Textur zu rendern, wenn Sie sie an einen Framebuffer angehängt hätten. (Die Spezifikation nennt dies "color-renderable formats".) Wenn ein System float-Texturen unterstützt, aber nicht render-to-float, wird `generateMipmaps` für Float-Formate fehlschlagen.

## Gehen Sie nicht davon aus, dass Sie in Float-Texturen rendern können

Es gibt viele, viele Systeme, die RGBA32F Texturen unterstützen, aber wenn Sie eine an einen Framebuffer anhängen, erhalten Sie `FRAMEBUFFER_INCOMPLETE_ATTACHMENT` von `checkFramebufferStatus()`. Es mag auf Ihrem System funktionieren, aber _die meisten_ mobilen Systeme werden es nicht unterstützen!

In WebGL 1 verwenden Sie die Erweiterungen `EXT_color_buffer_half_float` und `WEBGL_color_buffer_float`, um die Unterstützung für das Rendern zu Float-Textur für float16 und float32 respectively zu überprüfen.

In WebGL 2 überprüft `EXT_color_buffer_float` die Unterstützung des Renderns zu Float-Textur für beide float32 und float16. `EXT_color_buffer_half_float` ist auf Systemen vorhanden, die nur das Rendern zu float16 Texturen unterstützen.

### Render-to-float32 impliziert nicht float32-Blending!

Es mag auf Ihrem System funktionieren, aber auf vielen anderen nicht. Vermeiden Sie es, wenn Sie können. Überprüfen Sie die `EXT_float_blend`-Erweiterung, um die Unterstützung zu überprüfen.

Float16-Blending wird immer unterstützt.

## Einige Formate (z.B. RGB) können emuliert sein

Eine Reihe von Formaten (insbesondere Drei-Kanal-Formate) werden emuliert. Zum Beispiel wird RGB32F oft tatsächlich als RGBA32F dargestellt, und Luminance8 kann tatsächlich als RGBA8 dargestellt werden. Insbesondere RGB8 ist oft überraschend langsam, da das Ausblenden des Alpha-Kanals und/oder das Anpassen der Mischfunktionen relativ hohe Overhead-Kosten haben kann. Bevorzugen Sie die Verwendung von RGBA8, und ignorieren Sie das Alpha selbst für bessere Leistung.

## Vermeiden Sie alpha:false, was teuer sein kann

Das Angeben von `alpha:false` während der Kontexterstellung führt dazu, dass der Browser die von WebGL gerenderte Leinwand so zusammenstellt, als wäre sie undurchsichtig, und ignoriert dabei alle Alphawerte, die die Anwendung in ihrem Fragment-Shader schreibt. Auf einigen Plattformen hat diese Funktionalität leider erhebliche Leistungskosten. Der RGB-Backbuffer muss möglicherweise auf einer RGBA-Oberfläche emuliert werden, und es stehen relativ wenige Techniken in der OpenGL-API zur Verfügung, um es der Anwendung so erscheinen zu lassen, als hätte eine RGBA-Oberfläche keinen Alphakanal. [Es wurde festgestellt](https://crbug.com/1045643), dass alle diese Techniken auf betroffenen Plattformen ungefähr gleiche Leistungseinbußen haben.

Die meisten Anwendungen, selbst diejenigen, die Alpha-Blending erfordern, können so strukturiert werden, dass `1.0` für den Alpha-Kanal erzeugt wird. Die Hauptausnahme ist jede Anwendung, die Ziel-Alpha in der Mischfunktion erfordert. Wenn es machbar ist, wird eher empfohlen, dies zu tun, als `alpha:false` zu verwenden.

## Erwägen Sie komprimierte Texturformate

Während JPG und PNG über das Kabel im Allgemeinen kleiner sind, sind GPU-komprimierte Texturformate im GPU-Speicher kleiner und schneller zu sampeln. (Dies reduziert den Texturspeicher-Bandbreitenbedarf, was auf mobilen Geräten kostbar ist.) Komprimierte Texturformate haben jedoch schlechtere Qualität als JPG und sind im Allgemeinen nur für Farben akzeptabel (nicht z.B. Normale oder Koordinaten).

Leider gibt es kein universell unterstütztes Format. Jedes System hat jedoch mindestens eines der folgenden:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

WebGL 2 bietet universelle Unterstützung, indem es kombiniert:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc (Mobile)

`WEBGL_compressed_texture_astc` bietet sowohl höhere Qualität als auch höhere Kompression, wird jedoch nur auf neuerer Hardware unterstützt.

### Basis Universal Texturkompressionsformat/Bibliothek

Basis Universal löst mehrere der oben erwähnten Probleme. Es bietet eine Möglichkeit, alle gängigen komprimierten Texturformate mit einer einzigen komprimierten Texturdatei zu unterstützen, mithilfe einer JavaScript-Bibliothek, die Formate effizient zur Ladezeit konvertiert. Es fügt auch zusätzliche Kompression hinzu, die Basis Universal komprimierte Texturdateien viel kleiner als reguläre komprimierte Texturen über das Kabel macht, mehr vergleichbar mit JPEG.

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## Speicherverbrauch von Tiefen- und Stencil-Formaten

Tiefen- und Schablonen-Anhänge und -Formate sind auf vielen Geräten tatsächlich untrennbar. Sie können DEPTH_COMPONENT24 oder STENCIL_INDEX8 anfordern, bekommen jedoch oft D24X8 und X24S8 32bpp-Formate im Hintergrund. Gehen Sie davon aus, dass der Speicherverbrauch von Tiefen- und Schablonen-Formaten auf die nächste Vier-Byte-Grenze aufgerundet wird.

## texImage/texSubImage-Uploads (besonders Videos) können Pipeline-Spülungen verursachen

Die meisten Textur-Uploads von DOM-Elementen werden eine Verarbeitungspassage verursachen, die Programme intern vorübergehend in GL umschalten wird, was zu einer Pipeline-Spülung führt. (Pipelines sind formalisiert explizit in [Vulkan](https://registry.khronos.org/vulkan/specs/1.2/html/chap9.html#VkGraphicsPipelineCreateInfo) et al, sind aber hinter den Kulissen implizit in OpenGL und WebGL. Pipelines sind mehr oder weniger das Tupel aus Shader-Programm, Tiefen-/Schablonen-/Multisample-/Blend-/Rasterisierung-Zustand.)

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

Bevorzugen Sie Uploads, bevor Sie mit dem Zeichnen beginnen, oder zumindest zwischen den Pipelines:

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

Die WebGL 2.0 `texImage*`-API ermöglicht es Ihnen, jede Mip-Ebene unabhängig zu definieren und in jeder Größe, selbst die nicht übereinstimmenden Mips-Größen sind bis zur Zeichenzeit kein Fehler, was bedeutet, dass der Treiber die Textur im GPU-Speicher erst vorbereiten kann, wenn die Textur das erste Mal gezeichnet wird.

Darüber hinaus können einige Treiber bedingungslos die gesamte Mip-Kette (+30 % Speicher) zuweisen, auch wenn Sie nur eine einzige Ebene möchten.

Bevorzugen Sie `texStorage` + `texSubImage` für Texturen in WebGL 2.

## Verwenden Sie `invalidateFramebuffer`

Das Speichern von Daten, die Sie nicht wiederverwenden werden, kann hohe Kosten haben, besonders auf Geräten mit Kachel-Rendering-GPUs, die auf mobilen Geräten häufig vorkommen. Wenn Sie mit dem Inhalt eines Framebuffer-Anhangs fertig sind, verwenden Sie WebGL 2.0's `invalidateFramebuffer`, um die Daten zu verwerfen, anstatt den Treiber Zeit damit verschwenden zu lassen, die Daten für die spätere Nutzung zu speichern. Besonders Tiefen-/Schablonen- und/oder Multisample-Anhänge sind großartige Kandidaten für `invalidateFramebuffer`.

## Verwenden Sie nicht-blockierende asynchrone Datenabfrage

Operationen wie `readPixels` und `getBufferSubData` sind typischerweise synchron, aber mit denselben APIs kann nicht-blockierende, asynchrone Datenabfrage erreicht werden. Der Ansatz in WebGL 2 ist analog zum Ansatz in OpenGL: [Asynchrone Downloads in blockierenden APIs](https://kdashg.github.io/misc/async-gpu-downloads.html)

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

Der Umgang mit `devicePixelRatio !== 1.0` ist trickreich. Während der übliche Ansatz darin besteht, `canvas.width = width * devicePixelRatio` zu setzen, führt dies zu Moiré-Artefakten bei nicht-ganzzahligen Werten von `devicePixelRatio`, wie sie bei der UI-Skalierung unter Windows sowie beim Zoomen auf allen Plattformen üblich sind.

Stattdessen können wir nicht-ganzzahlige Werte für die CSS-Anweisungen `top`, `bottom`, `left` und `right` verwenden, um unser Canvas ziemlich zuverlässig auf ganze Gerätekoordinaten vorzuwahrnen.

Demo: [Gerätepixel-Vorschnappung](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

## ResizeObserver und 'device-pixel-content-box'

In unterstützenden Browsern (Chromium?) kann `ResizeObserver` zusammen mit `'device-pixel-content-box'` verwendet werden, um einen Rückruf zu verlangen, der die tatsächliche Größe eines Elements in Gerätepixeln beinhaltet. Dies kann verwendet werden, um eine asynchrone, aber genaue Funktion zu erstellen:

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

Bitte ziehen Sie die [Spezifikation](https://www.w3.org/TR/resize-observer/#resize-observer-interface) für weitere Einzelheiten heran.

## BildBitmap-Erstellung

Die Verwendung des [ImageBitmapOptions Wörlterbuchs](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapoptions) ist wesentlich, um Texturen ordnungsgemäß für den Upload zu WebGL vorzubereiten, aber leider gibt es keinen offensichtlichen Weg, um genau abzufragen, welche Wörterbuchmitglieder von einem bestimmten Browser unterstützt werden.

[Dieses JSFiddle](https://jsfiddle.net/ptkyewhx/) veranschaulicht, wie man bestimmen kann, welche Wörterbuchmitglieder von einem bestimmten Browser unterstützt werden.

## Verwenden Sie `WEBGL_provoking_vertex`, wenn es verfügbar ist

Wenn Sie Scheitelpunkte zu Primitiven wie Dreiecken und Linien zusammensetzen, wird im OpenGL-Konvention der letzte Scheitelpunkt des Primitives als der "provozierte Scheitelpunkt" angesehen. Dies ist relevant bei der Verwendung von `flat` Scheitelpunkt-Attribut-Interpolation in ESSL300 (WebGL 2); Der Attributwert des provozierten Scheitelpunkts wird für alle Scheitelpunkte des Primitives verwendet.

Heutzutage werden die WebGL-Implementierungen vieler Browser über andere Grafik-APIs als OpenGL gehostet, und einige dieser APIs verwenden den ersten Scheitelpunkt als provozierten Scheitelpunkt für Zeichenbefehle. Die Emulation der OpenGL-Konvention des provozierten Scheitelpunkts kann auf einigen dieser APIs rechnerisch teuer sein.

Aus diesem Grund wurde die [WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/) Erweiterung eingeführt. Wenn eine WebGL-Implementierung diese Erweiterung zur Verfügung stellt, ist dies ein Hinweis für die Anwendung, dass das Ändern der Konvention zu `FIRST_VERTEX_CONVENTION_WEBGL` die Leistung verbessern wird. Es wird dringend empfohlen, dass Anwendungen, die Flachschattierung verwenden, das Vorhandensein dieser Erweiterung überprüfen und sie verwenden, wenn sie verfügbar ist. Beachten Sie, dass dies Änderungen an den Scheitelpunktpuffern oder Shaderson der Anwendung erfordern kann.
