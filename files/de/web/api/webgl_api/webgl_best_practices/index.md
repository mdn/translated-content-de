---
title: WebGL Best Practices
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{DefaultAPISidebar("WebGL")}}

WebGL ist eine komplizierte API und es ist oft nicht offensichtlich, welche empfohlenen Methoden für ihren Einsatz gelten. Diese Seite behandelt Empfehlungen über das gesamte Spektrum der Fachkenntnisse hinweg und hebt nicht nur, was zu tun und zu lassen ist, sondern erklärt auch _warum_. Sie können sich auf dieses Dokument verlassen, um Ihre Vorgehensweise zu leiten und sicherzustellen, dass Sie auf dem richtigen Weg sind, unabhängig davon, welchen Browser oder welche Hardware Ihre Benutzer verwenden.

## Adressieren und Eliminieren von WebGL-Fehlern

Ihre Anwendung sollte laufen, ohne WebGL-Fehler zu erzeugen (wie sie von `getError` zurückgegeben werden). Jeder WebGL-Fehler wird in der Webkonsole als JavaScript-Warnung mit einer beschreibenden Nachricht gemeldet. Nach zu vielen Fehlern (32 in Firefox) hört WebGL auf, beschreibende Nachrichten zu generieren, was das Debuggen wirklich erschwert.

Die _einzigen_ Fehler, die eine gut geformte Seite erzeugt, sind `OUT_OF_MEMORY` und `CONTEXT_LOST`.

## Verfügbarkeit von Erweiterungen verstehen

Die Verfügbarkeit der meisten WebGL-Erweiterungen hängt vom Client-System ab. Bei Verwendung von WebGL-Erweiterungen sollten Sie, wenn möglich, versuchen, diese optional zu gestalten, indem Sie sich an den Fall anpassen, in dem sie nicht unterstützt werden.

Diese WebGL-1-Erweiterungen sind universell unterstützt und können als vorhanden angesehen werden:

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(siehe auch: [WebGL-Feature-Level und % Unterstützung](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

Erwägen Sie, diese in das `WebGLRenderingContext` einzupolyfillen, wie: <https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js>

## Systemgrenzen verstehen

Ähnlich wie bei Erweiterungen sind die Grenzen Ihres Systems anders als die der Systeme Ihrer Clienten! Gehen Sie nicht davon aus, dass Sie dreißig Textursampler pro Shader verwenden können, nur weil es auf Ihrem Rechner funktioniert!

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

Ihr Desktop könnte 16k-Texturen oder vielleicht 16 Textureinheiten im Vertex-Shader unterstützen, aber die meisten anderen Systeme nicht, und Inhalte, die für Sie funktionieren, werden für sie nicht funktionieren!

## Vermeiden Sie die Invalidierung von FBO-Anhangsbindungen

Fast jede Änderung an den Anhangsbindungen eines FBO macht die Vollständigkeit des Framebuffers ungültig. Richten Sie Ihre aktiven Framebuffer im Voraus ein.

In Firefox wird durch das Setzen der Einstellung `webgl.perf.max-warnings` auf `-1` in about:config Leistungswarnungen aktiviert, die auch Warnungen über FBO-Vollständigkeitsinvalidierungen umfassen.

### Vermeiden Sie das Ändern von VAO-Anhängen (vertexAttribPointer, disable/enableVertexAttribArray)

Das Zeichnen aus statischen, unveränderten VAOs ist schneller als bei jedem Zeichenaufruf dasselbe VAO zu verändern. Bei unveränderten VAOs können Browser die Abrufgrenzen cachen, während bei VAO-Änderungen die Browser die Grenzen erneut validieren und berechnen müssen. Der Aufwand dafür ist relativ gering, aber die Wiederverwendung von VAOs bedeutet auch weniger `vertexAttribPointer`-Aufrufe, daher ist es sinnvoll, dies überall zu tun, wo es einfach ist.

## Objekte schnell löschen

Warten Sie nicht, bis der Garbage Collector/Zyklus-Collector feststellt, dass Objekte verwaist sind und sie zerstört. Implementierungen verfolgen die Lebensdauer von Objekten, daher wird durch das 'Löschen' auf API-Ebene nur der Verweis auf das tatsächliche Objekt freigegeben. (Konzeptuell das Freigeben des Ref-Pointers des Handles auf das Objekt) Nur wenn das Objekt in der Implementierung ungenutzt ist, wird es tatsächlich freigegeben. Beispielsweise, wenn Sie Ihre Shader-Objekte nie wieder direkt zugreifen möchten, löschen Sie einfach ihre Handles, nachdem sie einem Programmobjekt angehängt wurden.

## Kontextverluste schnell erzwingen

Erwägen Sie auch, WebGL-Kontexte über die `WEBGL_lose_context`-Erweiterung schnell zu verlieren, wenn Sie definitiv mit ihnen fertig sind und die Render-Ergebnisse der Ziel-Canvas nicht mehr benötigen. Beachten Sie, dass dies nicht notwendig ist, wenn Sie die Seite verlassen - fügen Sie keinen unload-Ereignishandler nur für diesen Zweck hinzu.

## Flush aufrufen, wenn Ergebnisse erwartet werden

Rufen Sie `flush()` auf, wenn Ergebnisse wie Abfragen erwartet werden oder beim Abschluss eines Renderings-Rahmens.

Flush weist die Implementierung an, alle ausstehenden Befehle zur Ausführung auszuführen, sie aus der Warteschlange zu leeren, anstatt auf weitere Befehle zu warten, die für die Ausführung hinzugefügt werden sollen.

Beispielsweise ist es möglich, dass Folgendes ohne Kontextverlust nie abgeschlossen wird:

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL hat standardmäßig keinen SwapBuffers-Aufruf, daher kann ein Flush auch hier die Lücke füllen.

### Verwenden Sie `webgl.flush()`, wenn Sie nicht `requestAnimationFrame` verwenden

Wenn Sie RAF nicht verwenden, verwenden Sie `webgl.flush()`, um die schnelle Ausführung von ausstehenden Befehlen zu fördern.

Da RAF direkt von der Rahmenbegrenzung gefolgt wird, ist ein explizites `webgl.flush()` mit RAF eigentlich nicht erforderlich.

## Vermeiden Sie blockierende API-Aufrufe in der Produktion

Bestimmte WebGL-Einstiegspunkte - einschließlich `getError` und `getParameter` - verursachen synchrone Unterbrechungen im aufrufenden Thread. Selbst grundlegende Anfragen können bis zu 1 ms dauern, aber sie können noch länger dauern, wenn sie darauf warten müssen, dass alle Grafikarbeiten abgeschlossen sind (mit einer Wirkung ähnlich wie `glFinish()` in nativem OpenGL).

Vermeiden Sie solche Einstiegspunkte im Produktionscode, insbesondere im Hauptthread des Browsers, wo sie die gesamte Seite ruckeln lassen können (oft einschließlich Scrollen oder sogar den gesamten Browser).

- `getError()`: verursacht einen Flush + Rundreise zum Abrufen von Fehlern aus dem GPU-Prozess).

  Zum Beispiel wird in Firefox `glGetError` nur nach Speicherzuweisungen überprüft (`bufferData`, `*texImage*`, `texStorage*`), um GL_OUT_OF_MEMORY-Fehler zu erfassen.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()`, andere `get`s auf Shadern/Programmen: Flush + Shader-Kompilierung + Rundreise, wenn nicht nach Abschluss der Shader-Komplierung durchgeführt. (Siehe auch [Parallele Shader-Kompilierung](#shader_kompilieren_und_programme_parallel_verlinken) unten.)
- `get*Parameter()` im Allgemeinen: möglicher Flush + Rundreise. In einigen Fällen werden diese zwischengespeichert, um die Rundreise zu vermeiden, aber versuchen Sie, sich nicht darauf zu verlassen.
- `checkFramebufferStatus()`: möglicher Flush + Rundreise.
- `getBufferSubData()`: übliche Fertigstellung + Rundreise. (Dies ist okay für LESEN von Buffern in Verbindung mit Fences - siehe [Asynchroner Datenrücklesevorgang](#verwenden_sie_asynchrone_datenrücklesevorgänge) unten.)
- `readPixels()` zur CPU (d.h. ohne gebundenen UNPACK-Buffer): Fertigstellung + Rundreise. Verwenden Sie stattdessen GPU-GPU `readPixels` in Verbindung mit asynchroner Datenrücklesevorgang.

## Aktivieren Sie immer Vertex Attrib 0 als Array

Wenn Sie zeichnen, ohne Vertex Attrib 0 als Array aktiviert zu haben, zwingen Sie den Browser, eine komplizierte Emulation durchzuführen, wenn er auf Desktop-OpenGL (wie macOS) ausgeführt wird. Dies liegt daran, dass in Desktop-OpenGL nichts gezeichnet wird, wenn Vertex Attrib 0 nicht als Array aktiviert ist. Sie können `bindAttribLocation` verwenden, um ein Vertex-Attribut zu zwingen, Position 0 zu verwenden, und `enableVertexAttribArray(0)`, um es als Array zu aktivieren.

## Berechnen Sie ein pro-Pixel-VRAM-Budget

WebGL bietet keine APIs, um die maximale Menge an Videospeicher im System abzufragen, da solche Anfragen nicht portabel sind. Dennoch müssen Anwendungen sich des VRAM-Verbrauchs bewusst sein und nicht einfach so viel wie möglich anfordern.

Eine Technik, die vom Google Maps-Team eingeführt wurde, ist die Idee eines _pro-Pixel-VRAM-Budgets_:

1\) Für ein System (z.B. ein bestimmter Desktop / Laptop) entscheiden Sie sich für die maximale Menge an VRAM, die Ihre Anwendung verwenden sollte. 2\) Berechnen Sie die Anzahl der Pixel, die von einem maximierten Browserfenster abgedeckt werden. Z.B. `(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)` 3\) Das pro-Pixel-VRAM-Budget ist (1) geteilt durch (2) und ist eine Konstante.

Diese Konstante sollte _im Allgemeinen_ portabel zwischen Systemen sein. Mobile Geräte haben normalerweise kleinere Bildschirme als leistungsstarke Desktop-Maschinen mit großen Monitoren. Berechnen Sie diese Konstante auf einigen Zielsystemen neu, um eine zuverlässige Schätzung zu erhalten.

Passen Sie jetzt alle internen Caching in der Anwendung (WebGLBuffers, WebGLTextures usw.) so an, dass sie eine maximale Größe einhalten, die durch diese Konstante multipliziert mit der Anzahl der Pixel abgedeckt wird, die das _aktuelle_ Browserfenster abdeckt. Dies erfordert die Schätzung der Anzahl der von jeder Textur verbrauchten Bytes, beispielsweise. Das Limit muss normalerweise auch aktualisiert werden, wenn sich die Größe des Browserfensters ändert, und ältere Ressourcen über dem Limit müssen entfernt werden.

Das Einhalten des VRAM-Verbrauchs der Anwendung unter diesem Limit trägt dazu bei, Speicherfehler und damit verbundene Instabilitäten zu vermeiden.

## Erwägen Sie, in einen kleineren Backbuffer zu rendern

Eine übliche (und einfache) Möglichkeit, Qualität gegen Geschwindigkeit abzuwägen, ist das Rendering in einen kleineren Backbuffer und das Hochskalieren des Ergebnisses. Erwägen Sie, `canvas.width` und `height` zu reduzieren und `canvas.style.width` und `height` auf einer konstanten Größe zu halten.

## Batch-Zeichenaufrufe

Das "Batchen" von Zeichenaufrufen in weniger, größere Zeichenausrufe verbessert in der Regel die Leistung. Wenn Sie 1000 Sprites zeichnen müssen, versuchen Sie, dies als einen einzigen `drawArrays()`- oder `drawElements()`-Aufruf zu tun.

Es ist üblich, "entartete Dreiecke" zu verwenden, wenn Sie diskontinuierliche Objekte als einen einzigen `drawArrays(TRIANGLE_STRIP)`-Aufruf zeichnen müssen. Entartete Dreiecke sind Dreiecke ohne Fläche, also jedes Dreieck, bei dem mehr als ein Punkt exakt an derselben Stelle sitzt. Diese Dreiecke werden effektiv übersprungen, wodurch Sie einen neuen Dreiecksstreifen ohne Anbindung an Ihren vorherigen beginnen können, ohne in mehrere Zeichenausrufe aufteilen zu müssen.

Eine weitere wichtige Methode zum Batchen ist Texture-Atlasing, bei dem mehrere Bilder in eine einzige Textur gepackt werden, oft wie ein Schachbrettmuster. Da Sie Zeichenausruf-Batches aufteilen müssen, um Texturen zu ändern, ermöglicht Texture-Atlasing es Ihnen, mehr Zeichenausrufe in größere, weniger Batches zu kombinieren. Siehe [dieses Beispiel](https://webglsamples.org/sprites/readme.html), das zeigt, wie selbst Sprites, die auf mehrere Texture-Atlase verweisen, in einen einzigen Zeichenausfruf kombiniert werden können.

## Vermeiden Sie "#ifdef GL_ES"

Sie sollten niemals `#ifdef GL_ES` in Ihren WebGL-Shadern verwenden; diese Bedingung ist in WebGL stets wahr. Obwohl einige frühe Beispiele dies verwendet haben, ist es nicht notwendig.

## Bevorzugen Sie Arbeiten im Vertex-Shader

Führen Sie so viel Verarbeitung wie möglich im Vertex-Shader durch, anstatt im Fragment-Shader. Dies liegt daran, dass pro Zeichenaufruf Fragment-Shader in der Regel viele Male mehr als Vertex-Shader ausgeführt werden. Jede Berechnung, die auf den Vertices durchgeführt und dann nur über Fragmente (via `varying`s) interpoliert wird, ist ein Leistungsgewinn. (Die Interpolation von Varyings ist sehr günstig und wird automatisch für Sie durch die feste Funktionalitätsrakorisierung der Grafikkette durchgeführt.)

Ein einfaches Beispiel für eine Animation einer texturierten Oberfläche kann durch eine zeitabhängige Transformation der Texturkoordinaten erreicht werden. (Der einfachste Fall ist das Hinzufügen eines uniformen Vektors zu dem Texturkoordinatenattributvektor) Wenn visuell akzeptabel, kann man die Texturkoordinaten im Vertex-Shader anstatt im Fragment-Shader transformieren, um eine bessere Leistung zu erzielen.

Ein gängiger Kompromiss ist es, einige Lichtberechnungen pro Vertex anstatt pro Fragment (Pixel) durchzuführen. In einigen Fällen, insbesondere bei einfachen Modellen oder dichten Vertices, sieht dies gut genug aus.

Die Umkehrung davon ist, dass ein Modell mehr Vertices hat als Pixel im gerenderten Ausgabe. Allerdings ist LOD-Meshes normalerweise die Antwort auf dieses Problem, selten Arbeiten vom Vertex _zum_ Fragment-Shader zu verlagern.

## Shader kompilieren und Programme parallel verlinken

Es ist verlockend, Shader und Programme seriell zu kompilieren und zu verlinken, aber viele Browser können im Hintergrund-Threads parallel kompilieren und verlinken.

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

Während wir ein Muster beschrieben haben, um Browsern zu ermöglichen, parallel zu kompilieren und zu verlinken, führt das normale Überprüfen von `COMPILE_STATUS` oder `LINK_STATUS` zu einem Blockieren, bis die Kompilierung oder Verlinkung abgeschlossen ist. In Browsern, in denen dies verfügbar ist, bietet die [KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/) Erweiterung einen _nicht blockierenden_ `COMPLETION_STATUS`-Abfrage. Bevorzugen Sie es, diese Erweiterung zu aktivieren und zu verwenden.

Beispielgebrauch:

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

Diese Technik funktioniert möglicherweise nicht in allen Anwendungen, beispielsweise in solchen, die Programme sofort für das Rendering benötigen. Überlegen Sie trotzdem, wie Variationen funktionieren könnten.

## Shader-Kompilierungsstatus nur prüfen, wenn die Verlinkung fehlschlägt

Es gibt nur sehr wenige Fehler, die garantiert zum Fehlschlag der Shader-Kompilation führen, aber nicht auf die Verlinkungszeit verschoben werden können. Die [ESSL3-Spezifikation](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) sagt dies unter "Fehlerbehandlung":

> Die Implementierung sollte Fehler so früh wie möglich melden, aber in jedem Fall muss sie Folgendes erfüllen:
>
> - Alle lexikalischen, grammatikalischen und semantischen Fehler müssen nach einem Aufruf von glLinkProgram erkannt worden sein
> - Fehler aufgrund von Unterschieden zwischen dem Vertex- und dem Fragment-Shader (Link-Fehler) müssen nach einem Aufruf von glLinkProgram erkannt worden sein
> - Fehler aufgrund des Überschreitens von Ressourcenbeschränkungen müssen nach jedem Zeichnungsaufruf oder einem Aufruf von glValidateProgram erkannt worden sein
> - Ein Aufruf von glValidateProgram muss alle mit einem Programmobjekt verbundenen Fehler bei gegebenem aktuellen GL-Zustand melden.
>
> Die Aufgabenverteilung zwischen Compiler und Linker ist implementierungsabhängig. Folglich gibt es viele Fehler, die je nach Implementierung entweder bei der Kompilierung oder bei der Verlinkung erkannt werden können.

Zusätzlich ist die Abfrage des Kompilierungsstatus ein synchroner Aufruf, der die Pipelinierung unterbricht.

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

## Präzise mit GLSL-Präzisionsanmerkungen sein

Wenn Sie erwarten, ein essl300 `int` zwischen Shadern zu übergeben, und dies 32-Bit haben muss, MÜSSEN Sie `highp` verwenden oder Sie werden Portabilitätsprobleme haben. (Funktioniert auf dem Desktop, nicht auf Android)

Wenn Sie eine Gleitkommatextur haben, erfordert iOS, dass Sie `highp sampler2D foo;` verwenden, oder es wird Ihnen schmerzhaft `lowp`-Texturbeispiele geben! (+/-2.0 maximal ist wahrscheinlich nicht gut genug für Sie)

### Implizite Standards

Die Vertex-Sprache hat die folgenden vordeklarierten globalen Standard-Präzisionsanweisungen:

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

Die Fragment-Sprache hat die folgenden vordeklarierten globalen Standard-Präzisionsanweisungen:

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### In WebGL 1 ist "highp float" Unterstützung in Fragment-Shadern optional

Die Verwendung von `highp`-Präzision bedingungslos in Fragment-Shadern verhindert, dass Ihre Inhalte auf einigen älteren mobilen Hardwareplattformen funktionieren.

Obwohl Sie `mediump float` verwenden können, sollten Sie sich bewusst sein, dass dies oft zu einer beschädigten Darstellung aufgrund mangelnder Präzision führt (insbesondere auf mobilen Systemen), obwohl die Korruption auf einem typischen Desktop-Computer nicht sichtbar sein wird.

Wenn Sie Ihre Präzisionsanforderungen kennen, gibt Ihnen `getShaderPrecisionFormat()` an, was das System unterstützt.

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

| `float`   | Vorstellung         | Bereich       | Minimum über Null | Präzision     |
| --------- | ------------------- | ------------- | ----------------- | ------------- |
| `highp`   | float24\*           | (-2^62, 2^62) | 2^-62             | 2^-16 relativ |
| `mediump` | IEEE float16        | (-2^14, 2^14) | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-Bit signed fixed | (-2, 2)       | 2^-8              | 2^-8 absolut  |

| `int`     | Vorstellung | Bereich       |
| --------- | ----------- | ------------- |
| `highp`   | int17       | (-2^16, 2^16) |
| `mediump` | int11       | (-2^10, 2^10) |
| `lowp`    | int9        | (-2^8, 2^8)   |

_\*float24: Vorzeichenbit, 7-Bit für den Exponent, 16-Bit für die Mantisse._

### ESSL300 Mindestanforderungen (WebGL 2)

| `float`   | Vorstellung         | Bereich         | Minimum über Null | Präzision     |
| --------- | ------------------- | --------------- | ----------------- | ------------- |
| `highp`   | IEEE float32        | (-2^126, 2^127) | 2^-126            | 2^-24 relativ |
| `mediump` | IEEE float16        | (-2^14, 2^14)   | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-Bit signed fixed | (-2, 2)         | 2^-8              | 2^-8 absolut  |

| `(u)int`  | Vorstellung | `int`-Bereich | `unsigned int`-Bereich |
| --------- | ----------- | ------------- | ---------------------- |
| `highp`   | (u)int32    | [-2^31, 2^31] | [0, 2^32]              |
| `mediump` | (u)int16    | [-2^15, 2^15] | [0, 2^16]              |
| `lowp`    | (u)int9     | [-2^8, 2^8]   | [0, 2^9]               |

## Bevorzugen Sie eingebaute Funktionen anstatt eigene zu erstellen

Bevorzugen Sie eingebaute Funktionen wie `dot`, `mix`, und `normalize`. Im besten Fall könnten benutzerdefinierte Implementierungen so schnell laufen wie die eingebauten Funktionen, die sie ersetzen, aber erwarten Sie nicht, dass dies der Fall ist. Die Hardware hat oft hyperoptimierte oder sogar spezialisierte Anweisungen für eingebaute Funktionen, und der Compiler kann Ihre benutzerdefinierten Ersatzfunktionen nicht zuverlässig mit den speziellen eingebauten Codepfaden ersetzen.

## Benutzen Sie Mipmaps für jede Textur, die Sie in 3D sehen werden

Wenn Sie unsicher sind, rufen Sie `generateMipmaps()` nach dem Hochladen von Texturen auf. Mipmaps sind speichergünstig (nur 30% Overhead), während sie oft große Leistungsgewinne bieten, wenn Texturen in der Ferne in 3D "herausgezoomt" oder allgemein herunterskaliert werden, oder sogar für Cube-Maps!

Es ist schneller, kleinere Texturbilder zu sampeln, dank einer besseren inhärenten Texturnachbarschaft im Cache: Wenn auf eine nicht-mipmapierte Textur herausgezoomt wird, wird die Texturnachbarschaft im Cache ruiniert, da benachbarte Pixel nicht mehr von benachbarten Texeln sampeln!

Bei 2D-Ressourcen, die nie "herausgezoomt" werden, sollten Sie jedoch kein zusätzliches Speicherbedenken von 30% für Mipmaps auf sich nehmen:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(In WebGL 2 sollten Sie einfach `texStorage` mit `levels=1` verwenden)

Ein Vorbehalt: `generateMipmaps` funktioniert nur, wenn Sie in die Textur rendern könnten, wenn Sie sie an einen Framebuffer anhängen. (Die Spezifikation nennt dies "farbrenderbare Formate") Beispielsweise, wenn ein System Gleitkommatexuren, aber nicht "Render-to-Float" unterstützt, wird `generateMipmaps` für Gleitformate fehlschlagen.

## Gehen Sie nicht davon aus, dass Sie in Gleitkommatexuren rendern können

Es gibt viele, viele Systeme, die RGBA32F-Texturen unterstützen, aber wenn Sie eine an einen Framebuffer anhängen, erhalten Sie `FRAMEBUFFER_INCOMPLETE_ATTACHMENT` von `checkFramebufferStatus()`. Es mag auf Ihrem System funktionieren, aber _die meisten_ mobilen Systeme werden dies nicht unterstützen!

In WebGL 1 verwenden Sie die `EXT_color_buffer_half_float` und `WEBGL_color_buffer_float`-Erweiterungen, um Render-to-Float-Texturunterstützung für float16 und float32 zu prüfen.

In WebGL 2 prüft `EXT_color_buffer_float` die Unterstützung von Render-to-Float-Textur sowohl für float32 als auch float16. `EXT_color_buffer_half_float` ist auf Systemen vorhanden, die nur das Rendering auf float16-Texturen unterstützen.

### Render-to-float32 impliziert nicht float32-Blending!

Es mag auf Ihrem System funktionieren, aber auf vielen anderen nicht. Vermeiden Sie es, wenn Sie können. Prüfen Sie die `EXT_float_blend`-Erweiterung, um die Unterstützung abzufragen.

Float16-Blending wird immer unterstützt.

## Einige Formate (z.B. RGB) können emuliert sein

Einige Formate (insbesondere drei-Kanal-Formate) werden emuliert. Beispielsweise ist RGB32F oft tatsächlich RGBA32F, und Luminance8 könnte tatsächlich RGBA8 sein. RGB8 ist besonders oft überraschend langsam, da das Ausschalten des Alpha-Kanals und/oder das Patchen von Blend-Funktionen einen recht hohen Overhead haben. Bevorzugen Sie es, RGBA8 zu verwenden und den Alpha selbst zu ignorieren, für bessere Leistung.

## Vermeiden Sie alpha:false, was teuer sein kann

Das Angeben von `alpha:false` während der Kontexterstellung veranlasst den Browser, die WebGL-gerenderte Leinwand so zusammenzusetzen, als ob sie opak wäre und ignoriert alle Alphawerte, die die Anwendung in ihrem Fragment-Shader schreibt. Auf einigen Plattformen ist diese Fähigkeit leider mit erheblichen Leistungseinbußen verbunden. Der RGB-Backbuffer muss möglicherweise auf einer RGBA-Oberfläche emuliert werden, und es gibt relativ wenige Techniken in der OpenGL-API, die es der Anwendung erscheinen lassen, dass eine RGBA-Oberfläche keinen Alpha-Kanal hat. [Es wurde festgestellt](https://crbug.com/1045643), dass all diese Techniken einen ungefähr gleichen Leistungseinbruch auf betroffenen Plattformen haben.

Die meisten Anwendungen, selbst solche, die Alphablending erfordern, können so strukturiert werden, dass sie `1.0` für den Alpha-Kanal produzieren. Die primäre Ausnahme ist jede Anwendung, die Zielalpha in der Blending-Funktion erfordert. Wenn möglich, wird empfohlen, dies zu tun, anstatt `alpha:false` zu verwenden.

## Erwägen Sie komprimierte Texturformate

Während JPG und PNG in der Regel kleiner über die Leitung sind, sind komprimierte GPU-Texturformate im GPU-Speicher kleiner und werden schneller gesampelt. (Dies reduziert den Texturspeicher-Bandbreitenbedarf, der auf Mobilgeräten kostbar ist) Leider gibt es kein einheitlich unterstütztes Format. Jedes System hat jedoch mindestens eines der folgenden:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

WebGL 2 hat universelle Unterstützung durch die Kombination:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc (Mobil)

`WEBGL_compressed_texture_astc` hat sowohl bessere Qualität und/oder höhere Kompression, wird aber nur auf neuerer Hardware unterstützt.

### Basis Universal Texture Compression Format/Library

Basis Universal löst mehrere der oben genannten Probleme. Es bietet eine Möglichkeit, alle gängigen komprimierten Texturformate mit einer einzigen komprimierten Texturdatei zu unterstützen, durch eine JavaScript-Bibliothek, die Formate effizient zur Ladezeit konvertiert. Es fügt auch zusätzliche Kompression hinzu, die Basis Universal komprimierte Texturdateien viel kleiner macht als reguläre komprimierte Texturen über die Leitung, vergleichbar mit JPEG.

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## Speicherverbrauch von Tiefen- und Schablonenformaten

Tiefen- und Schablonen-Anhänge und -Formate sind auf vielen Geräten tatsächlich untrennbar miteinander verbunden. Sie können DEPTH_COMPONENT24 oder STENCIL_INDEX8 anfordern, aber Sie erhalten oft D24X8 und X24S8 32bpp-Formate im Hintergrund. Gehen Sie davon aus, dass der Speicherverbrauch von Tiefen- und Schablonenformaten auf ganze vier Bytes aufgerundet wird.

## texImage/texSubImage Uploads (insb. Videos) können Pipeline-Flushes verursachen

Die meisten Texture-Uploads von DOM-Elementen verursachen einen Verarbeitungsdurchlauf, der intern temporär GL-Programme umschalten und so einen Pipeline-Flush verursachen wird. (Pipelines sind explizit in [Vulkan](https://docs.vulkan.org/spec/latest/chapters/pipelines.html) et al formalisiert, aber hinter den Kulissen in OpenGL und WebGL impliziert. Pipelines sind mehr oder weniger das Tupel von Shader-Programm, Tiefen/Stencil/Multisample/Blend/Rasterization-Zustand)

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

Bevorzugen Sie Uploads vor dem Starten der Zeichnung oder zumindest zwischen Pipelines:

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

Die WebGL 2.0 `texImage*` API ermöglicht es Ihnen, jede Mip-Ebene unabhängig und in jeder Größe zu definieren, auch wenn die Größen nicht zusammenpassen, sind es keine Fehler bis zum Zeitpunkt des Draw, was bedeutet, dass der Treiber die Textur im GPU-Speicher erst vorbereiten kann, wenn die Textur das erste Mal gezeichnet wird.

Darüber hinaus könnten einige Treiber bedingungslos die gesamte Mip-Kette zuweisen (+30% Speicher!), selbst wenn Sie nur eine Ebene wünschen.

Bevorzugen Sie daher `texStorage` + `texSubImage` für Texturen in WebGL 2.

## Verwenden Sie invalidateFramebuffer

Das Speichern von Daten, die Sie nicht wiederverwenden, kann hohe Kosten verursachen, insbesondere auf Kachel-Rendering-GPUs, die auf Mobilgeräten verbreitet sind. Wenn Sie mit dem Inhalt eines Framebuffer-Anhangs fertig sind, verwenden Sie WebGL 2.0's `invalidateFramebuffer`, um die Daten zu verwerfen, anstatt den Treiber die Daten für die spätere Verwendung speichern zu lassen. DEPTH/STENCIL und/oder multisampled Anhänge sind besonders gute Kandidaten für `invalidateFramebuffer`.

## Verwenden Sie asynchrone Datenrücklesevorgänge

Operationen wie `readPixels` und `getBufferSubData` sind typischerweise synchron, aber mit den gleichen APIs kann ein nicht-blockierender, asynchroner Datenrücklesevorgang erreicht werden. Der Ansatz in WebGL 2 ist analog zum Ansatz in OpenGL: [Asynchrone Downloads in blockierenden APIs](https://kdashg.github.io/misc/async-gpu-downloads.html)

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

Das Handling von `devicePixelRatio !== 1.0` ist knifflig. Während der gängige Ansatz besteht, `canvas.width = width * devicePixelRatio` zu setzen, führt dies zu Moiré-Artefakten bei nicht-integrierten Werten von `devicePixelRatio`, wie sie bei der UI-Skalierung unter Windows sowie beim Zoomen auf allen Plattformen üblich sind.

Stattdessen können wir nicht-integer Werte für CSS's `top`/`bottom`/`left`/`right` verwenden, um unsere Leinwand recht zuverlässig auf ganze integer Gerätekoordinaten 'vorzuschnappen'.

Demonstration: [Device-Pixel-Presnap](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

## ResizeObserver und 'device-pixel-content-box'

In unterstützenden Browsern (Chromium?) kann `ResizeObserver` mit `'device-pixel-content-box'` verwendet werden, um einen Rückruf anzufordern, der die wahre {{Glossary("device_pixel", "device pixel")}} Größe eines Elements enthält. Dies kann genutzt werden, um eine asynchrone, aber genaue Funktion zu erstellen:

```js
window.getDevicePixelSize =
  window.getDevicePixelSize ||
  (async (elem) => {
    await new Promise((resolve) => {
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
  });
```

Bitte beziehen Sie sich auf [die Spezifikation](https://www.w3.org/TR/resize-observer/#resize-observer-interface) für weitere Details.

## Erstellung von ImageBitmap

Die Verwendung des [ImageBitmapOptions-Dictionary](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapoptions) ist entscheidend für die ordnungsgemäße Vorbereitung von Texturen zum Hochladen zu WebGL, aber leider gibt es keinen offensichtlichen Weg zu ermitteln, welche Wörterbucheinträge von einem bestimmten Browser unterstützt werden.

[Dieses JSFiddle](https://jsfiddle.net/ptkyewhx/) veranschaulicht, wie ermittelt werden kann, welche Wörterbucheinträge ein bestimmter Browser unterstützt.

## Verwenden Sie `WEBGL_provoking_vertex`, wenn es verfügbar ist

Beim Zusammenstellen von Vertices zu Primitives wie Dreiecken und Linien wird im OpenGL-Konvention der letzte Vertex des Primitives als "provoking vertex" angesehen. Dies ist relevant, wenn `flat`-Vertex-Attribut-Interpolation in ESSL300 (WebGL 2) verwendet wird; der Attributwert des provokanten Vertexes wird für alle Vertices des Primitives verwendet.

Heutzutage werden viele der WebGL-Implementierungen in Browsern über unterschiedliche Grafik-APIs als OpenGL gehostet, und einige dieser APIs verwenden den ersten Vertex als provokanten Vertex für Zeichnungskommandos. Die Emulation der OpenGL-Konvention des provokanten Vertex kann auf einigen dieser APIs rechnerisch teuer sein.

Aus diesem Grund wurde die [WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/) Erweiterung eingeführt. Wenn eine WebGL-Implementierung diese Erweiterung zur Verfügung stellt, ist dies ein Hinweis an die Anwendung, dass das Ändern der Konvention zu `FIRST_VERTEX_CONVENTION_WEBGL` die Leistung verbessern wird. Es wird dringend empfohlen, dass Anwendungen, die Flat-Shading verwenden, das Vorhandensein dieser Erweiterung überprüfen und sie verwenden, wenn sie verfügbar ist. Beachten Sie, dass dies möglicherweise Änderungen der Vertex-Buffer oder Shader der Anwendung erfordert.
