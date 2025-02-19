---
title: WebGL Best Practices
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: f35733893f8c17dcbf8e9d5cf2551f6fb1cbecd5
---

{{DefaultAPISidebar("WebGL")}}

WebGL ist eine komplizierte API und es ist oft nicht offensichtlich, welche die empfohlenen Nutzungsweisen sind. Diese Seite behandelt Empfehlungen über das gesamte Spektrum an Fachwissen, und hebt nicht nur Gebote und Verbote hervor, sondern erklärt auch _warum_. Sie können sich auf dieses Dokument verlassen, um Ihre Wahl der Vorgehensweise zu leiten und sicherzustellen, dass Sie auf dem richtigen Weg sind, egal welchen Browser oder welche Hardware Ihre Nutzer verwenden.

## Adressieren und Eliminieren von WebGL-Fehlern

Ihre Anwendung sollte ohne Generierung von WebGL-Fehlern (wie sie durch `getError` zurückgegeben werden) laufen. Jeder WebGL-Fehler wird in der Webkonsole als JavaScript-Warnung mit einer beschreibenden Meldung gemeldet. Nach zu vielen Fehlern (32 in Firefox) hört WebGL auf, beschreibende Nachrichten zu generieren, was das Debugging erheblich erschwert.

Die _einzigen_ Fehler, die eine gut geformte Seite erzeugen sollte, sind `OUT_OF_MEMORY` und `CONTEXT_LOST`.

## Verfügbarkeit von Erweiterungen verstehen

Die Verfügbarkeit der meisten WebGL-Erweiterungen hängt vom Client-System ab. Beim Einsatz von WebGL-Erweiterungen sollten Sie, wenn möglich, versuchen, diese optional zu machen, indem Sie sich anpassen, falls sie nicht unterstützt werden.

Diese WebGL 1-Erweiterungen werden universell unterstützt und können als vorhanden angesehen werden:

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(siehe auch: [WebGL Feature Levels und % Unterstützung](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

Erwägen Sie, diese in den WebGLRenderingContext zu polyfillen, wie: <https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js>

## Systemlimits verstehen

Ähnlich wie bei Erweiterungen werden die Limits Ihres Systems anders sein als die Ihrer Kunden! Gehen Sie nicht davon aus, dass Sie dreißig Textursampler pro Shader verwenden können, nur weil es auf Ihrem Computer funktioniert!

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

Ihr Desktop könnte 16k-Texturen oder vielleicht 16 Textur-Einheiten im Vertex-Shader unterstützen, aber die meisten anderen Systeme nicht, und Inhalte, die für Sie funktionieren, werden nicht für sie funktionieren!

## Eine unzulässige Bindung von FBO-Anhangsbeschränkungen vermeiden

Fast jede Änderung an den Anhangsbeschränkungen eines FBO wird dessen Framebuffer-Komplettheit ungültig machen. Richten Sie Ihre schnellen Framebuffer im Voraus ein.

In Firefox wird das Setzen der Pref `webgl.perf.max-warnings` auf `-1` in about:config Leistungswarnungen aktivieren, die Warnungen über FB-Komplettheitsinvalidierungen enthalten.

### Änderungen an VAO-Anhängen vermeiden (vertexAttribPointer, disable/enableVertexAttribArray)

Das Zeichnen von statischen, unveränderten VAOs ist schneller als das Ändern desselben VAO für jeden Zeichenaufruf. Bei unveränderten VAOs können Browser die Abrufgrenzen zwischenspeichern, während sie bei Änderungen der VAOs neu validiert und die Grenzen neu berechnet werden müssen. Der Overhead dafür ist relativ gering, aber die Wiederverwendung von VAOs bedeutet auch weniger `vertexAttribPointer`-Aufrufe, daher lohnt es sich, dies überall dort zu tun, wo es einfach ist.

## Objekte zügig löschen

Warten Sie nicht darauf, dass der Garbage Collector/Cycle Collector erkennt, dass Objekte verwaist sind und sie zerstört. Implementierungen verfolgen die Lebendigkeit von Objekten, daher wird durch das 'Löschen' auf API-Ebene nur der Handle freigegeben, der auf das eigentliche Objekt verweist. (konzeptionelles Freigeben des Handle-Referenz-Pointers auf das Objekt) Erst wenn das Objekt in der Implementierung nicht mehr verwendet wird, wird es tatsächlich freigegeben. Wenn Sie zum Beispiel nie wieder direkt auf Ihre Shader-Objekte zugreifen möchten, löschen Sie einfach ihre Handles, nachdem Sie sie an ein Programmobjekt angehängt haben.

## Kontexte zügig verlieren

Erwägen Sie auch, WebGL-Kontexte über die `WEBGL_lose_context`-Erweiterung zügig zu verlieren, wenn Sie definitiv fertig mit ihnen sind und die Rendering-Ergebnisse der Ziel-Canvas nicht mehr benötigen. Beachten Sie, dass dies nicht nötig ist, wenn Sie von einer Seite weg navigieren - fügen Sie hierfür keinen Unload-Event-Handler hinzu.

## Flush verwenden, wenn Ergebnisse erwartet werden

Rufen Sie `flush()` auf, wenn Ergebnisse wie Abfragen erwartet werden oder beim Abschluss eines Rendering-Frames.

Flush weist die Implementierung an, alle ausstehenden Befehle zur Ausführung anzustoßen und sie aus der Warteschlange zu entfernen, anstatt auf weitere Befehle zu warten, bevor sie zur Ausführung gesendet werden.

Beispielsweise kann es möglich sein, dass das Folgende nie ohne Kontextverlust abgeschlossen wird:

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL hat standardmäßig keinen SwapBuffers-Aufruf, daher kann ein Flush helfen, diese Lücke zu füllen.

### `webgl.flush()` verwenden, wenn requestAnimationFrame nicht verwendet wird

Wenn RAF nicht verwendet wird, verwenden Sie `webgl.flush()`, um eine zügige Ausführung der in die Warteschlange gestellten Befehle zu fördern.

Da RAF direkt auf die Frame-Grenze folgt, ist ein explizites `webgl.flush()` mit RAF eigentlich nicht nötig.

## Blockierende API-Aufrufe in der Produktion vermeiden

Bestimmte WebGL-Einstiegspunkte, einschließlich `getError` und `getParameter`, verursachen synchrone Stalls im aufrufenden Thread. Selbst einfache Anfragen können so lange wie 1ms dauern, aber sie können noch länger dauern, wenn sie alle Grafikarbeiten abwarten müssen (mit einem Effekt ähnlich dem von `glFinish()` in nativen OpenGL).

In Produktionscode vermeiden Sie solche Einstiegspunkte, insbesondere im Hauptthread des Browsers, wo sie die gesamte Seite ruckeln lassen können (oft einschließlich Scrollen oder sogar den gesamten Browser).

- `getError()`: verursacht einen Flush + Round-Trip, um Fehler vom GPU-Prozess abzuholen.

  Beispielsweise wird in Firefox das einzige Mal, wo glGetError überprüft wird, nach Allokationen (`bufferData`, `*texImage*`, `texStorage*`), um etwaige GL_OUT_OF_MEMORY-Fehler abzuholen.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()`, andere `get`s auf Shadern/Programmen: Flush + Shader-Kompilierung + Round-Trip, falls nicht nach Shader-Kompilierung abgeschlossen. (Siehe auch [Parallele Shader-Kompilierung](#shader_parallel_kompilieren_und_programme_verlinken) weiter unten.)
- `get*Parameter()` im Allgemeinen: möglicher Flush + Round-Trip. In einigen Fällen werden diese gecacht, um den Round-Trip zu vermeiden, aber versuchen Sie, sich nicht darauf zu verlassen.
- `checkFramebufferStatus()`: möglicher Flush + Round-Trip.
- `getBufferSubData()`: übliche Fertigstellung + Round-Trip. (Dies ist für LESEN von Puffern in Verbindung mit Zäunen in Ordnung - siehe [asynchrone Datenrücklesung](#verwenden_sie_nicht-blockierende_asynchrone_datenrücklesung) weiter unten.)
- `readPixels()` zur CPU (d.h. ohne einen UNPACK-Puffer gebunden): Fertigstellung + Round-Trip. Verwenden Sie stattdessen GPU-GPU `readPixels` in Verbindung mit asynchroner Datenrücklesung.

## Vertex Attrib 0 immer als Array aktivieren

Wenn Sie ohne Vertex Attrib 0 als Arrayaktivierung zeichnen, zwingen Sie den Browser auf Desktop OpenGL zu komplizierter Emulation (wie z.B. auf macOS). Dies liegt daran, dass in Desktop OpenGL nichts gezeichnet wird, wenn Vertex Attrib 0 nicht array-aktiviert ist. Sie können `bindAttribLocation` verwenden, um einen Vertex-Attribut zu erzwingen, Position 0 zu verwenden, und `enableVertexAttribArray(0)`, um ihn array-aktiviert zu machen.

## VRAM-Budget pro Pixel schätzen

WebGL bietet keine APIs, um die maximale Menge des Videospeichers im System abzufragen, da solche Abfragen nicht portierbar sind. Anwendungen müssen jedoch auf den VRAM-Verbrauch achten und nicht einfach so viel wie möglich allokieren.

Eine Technik, die vom Google Maps-Team entwickelt wurde, ist der Begriff eines _VRAM-Budgets pro Pixel_:

1. Für ein System (z.B. einen bestimmten Desktop/Laptop) die maximale Menge an VRAM festlegen, die Ihre Anwendung nutzen sollte. 2) Die Anzahl der Pixel berechnen, die durch ein maximiertes Browserfenster abgedeckt werden. Z.B. `(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)` 3) Das VRAM-Budget pro Pixel ist (1) geteilt durch (2) und ist eine Konstante.

Diese Konstante sollte _allgemein_ portierbar zwischen Systemen sein. Mobile Geräte haben typischerweise kleinere Bildschirme als leistungsstarke Desktop-Computer mit großen Monitoren. Berechnen Sie diese Konstante auf einigen Zielsystemen neu, um eine zuverlässige Schätzung zu erhalten.

Passen Sie jetzt alle internen Caches in der Anwendung (WebGLBuffers, WebGLTextures, etc.) an, um eine maximale Größe zu befolgen, die durch diese Konstante multipliziert mit der Anzahl der durch das _aktuelle_ Browserfenster abgedeckten Pixel berechnet wird. Dies erfordert die Schätzung der Anzahl von Bytes, die z.B. von jeder Textur verbraucht werden. Die Obergrenze muss in der Regel auch aktualisiert werden, wenn das Browserfenster die Größe ändert, und ältere Ressourcen über dem Limit müssen gelöscht werden.

Die Einhaltung dieser VRAM-Obergrenze hilft, Out-of-Memory-Fehler und damit verbundene Instabilitäten zu vermeiden.

## Überlegen Sie, zu einem kleineren Back-Buffer zu rendern

Eine gängige (und einfache) Möglichkeit, Qualität gegen Geschwindigkeit auszutauschen, besteht darin, in einen kleineren Back-Buffer zu rendern und das Ergebnis hochzuskalieren. Überlegen Sie, canvas.width und height zu reduzieren und canvas.style.width und height auf einer konstanten Größe zu halten.

## Zeichnungsaufrufe bündeln

Das "Bündeln" von Zeichnungsaufrufen zu weniger, größerem Zeichnungsaufrufen verbessert in der Regel die Leistung. Wenn Sie 1000 Sprites malen müssen, versuchen Sie, dies als einen einzigen drawArrays() oder drawElements()-Aufruf zu tun.

Es ist üblich, "degenerierte Dreiecke" zu verwenden, wenn Sie diskontinuierliche Objekte als einen einzigen drawArrays(TRIANGLE_STRIP)-Aufruf zeichnen müssen. Degenerierte Dreiecke sind Dreiecke ohne Fläche, d.h. jedes Dreieck, bei dem mehr als ein Punkt am exakt gleichen Ort ist. Diese Dreiecke werden effektiv übersprungen, wodurch Sie einen neuen Triangle Strip starten können, ohne in mehrere Zeichnungsaufrufe aufteilen zu müssen.

Eine weitere wichtige Methode zum Bündeln ist das Texturatlasverfahren, bei dem mehrere Bilder in eine einzige Textur gepackt werden, oft wie ein Schachbrettmuster. Da Sie Zeichenaufruf-Batches aufteilen müssen, um Texturen zu ändern, ermöglicht das Texturatlasing, mehr Zeichnungsaufrufe zu größeren Batches zusammenzufassen. Sehen Sie sich [dieses Beispiel](https://webglsamples.org/sprites/readme.html) an, das zeigt, wie man sogar Sprites, die mehrere Texture Atlases referenzieren, in einem einzigen Zeichnungsaufruf kombinieren kann.

## `#ifdef GL_ES` vermeiden

Sie sollten niemals `#ifdef GL_ES` in Ihren WebGL-Shadern verwenden; diese Bedingung ist immer wahr in WebGL. Obwohl einige frühe Beispiele dies verwendeten, ist es nicht nötig.

## Arbeit vorzugsweise im Vertex-Shader ausführen

Machen Sie so viel Arbeit wie möglich im Vertex-Shader, statt im Fragment-Shader. Dies liegt daran, dass Fragment-Shader in einem einzigen Zeichenaufruf normalerweise viel öfter laufen als Vertex-Shader. Jede Berechnung, die an den Vertices durchgeführt und dann nur unter den Fragmenten interpoliert werden kann (durch `varying`s), führt zu einem Leistungsgewinn. (Die Interpolation von varyings ist sehr günstig und erfolgt automatisch für Sie durch die festgelegte Funktionalität der Rasterisierungsphase der Grafikpipeline.)

Ein einfaches Beispiel für diese Technik ist eine einfache Animation einer texturierten Oberfläche durch eine zeitabhängige Transformation der Texturkoordinaten. (Der einfachste Fall ist das Hinzufügen eines gleichmäßigen Vektors zu den Texturkoordinatenattributvektoren) Wenn visuell akzeptabel, kann man die Texturkoordinaten im Vertex-Shader statt im Fragment-Shader transformieren, um eine bessere Leistung zu erzielen.

Ein häufiger Kompromiss ist es, einige Beleuchtungsberechnungen pro Vertex statt pro Fragment (Pixel) durchzuführen. In einigen Fällen, insbesondere bei einfachen Modellen oder dichten Vertices, sieht das gut genug aus.

Das Umkehren von diesem Ansatz ist, wenn ein Modell mehr Vertices als Pixel im gerenderten Ergebnisbild hat. Allerdings ist LOD-Meshes normalerweise die Antwort auf dieses Problem, und es wird selten Arbeit von dem Vertex- zum Fragment-Shader verschoben.

## Shader parallel kompilieren und Programme verlinken

Es ist verlockend, Shader und Programme seriell zu kompilieren und zu verlinken, aber viele Browser können auf Hintergrund-Threads parallel kompilieren und verlinken.

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

## KHR_parallel_shader_compile bevorzugen

Während wir ein Muster beschrieben haben, das es Browsern ermöglicht, parallel zu kompilieren und zu verlinken, blockiert das normale Überprüfen von `COMPILE_STATUS` oder `LINK_STATUS` normalerweise, bis die Kompilierung oder das Verlinken abgeschlossen ist. In Browsern, in denen es verfügbar ist, bietet die [KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/) Erweiterung eine _nicht-blockierende_ `COMPLETION_STATUS`-Abfrage. Bevorzugen Sie es, diese Erweiterung zu aktivieren und zu verwenden.

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

Diese Technik funktioniert möglicherweise nicht in allen Anwendungen, insbesondere in solchen, die Programme sofort für das Rendering verfügbar haben müssen. Erwägen Sie dennoch, wie Variationen funktionieren könnten.

## Überprüfen Sie den Shader-Kompilierungsstatus nur, wenn das Verlinken fehlschlägt

Es gibt sehr wenige Fehler, die garantiert ein Fehlschlagen der Shader-Kompilierung verursachen, aber nicht auf die Verknüpfungszeit verschoben werden können. Die [ESSL3-Spezifikation](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) sagt dies unter "Fehlerbehandlung":

> Die Implementierung sollte Fehler so früh wie möglich melden, aber in jedem Fall muss Folgendes erfüllt sein:
>
> - Alle lexikalischen, grammatikalischen und semantischen Fehler müssen nach einem Aufruf von glLinkProgram erkannt worden sein
> - Fehler aufgrund von Nichtübereinstimmungen zwischen Vertex- und Fragment-Shader (Verlinkungsfehler) müssen nach einem Aufruf von glLinkProgram erkannt worden sein
> - Fehler aufgrund des Überschreitens von Ressourcenbeschränkungen müssen nach jedem Zeichenaufruf oder einem Aufruf von glValidateProgram erkannt worden sein
> - Ein Aufruf von glValidateProgram muss alle Fehler im Zusammenhang mit einem Programmobjekt unter dem aktuellen GL-Zustand melden.
>
> Die Aufgabenverteilung zwischen Compiler und Linker ist implementationsabhängig. Daher gibt es viele Fehler, die entweder zu Kompilierungs- oder Verlinkungszeit erkannt werden können, abhängig von der Implementierung.

Zusätzlich ist das Abfragen des Kompilierungsstatus ein synchroner Aufruf, der die Pipelining unterbricht.

Statt:

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

## Mit GLSL-Präzisionsannotationen genau umgehen

Wenn Sie erwarten, dass ein essl300 `int` zwischen Shadern übergeben wird, und Sie benötigen ihn mit 32 Bit, _müssen_ Sie `highp` verwenden, oder Sie werden Portabilitätsprobleme haben. (Funktioniert auf Desktop, nicht auf Android)

Wenn Sie eine Float-Textur haben, erfordert iOS, dass Sie `highp sampler2D foo;` verwenden, oder es wird Ihnen sehr schmerzlich `lowp` Texturproben geben! (+/-2.0 Maximalwert ist wahrscheinlich nicht gut genug für Sie)

### Implizite Standardeinstellungen

Die Vertex-Sprache hat die folgenden vorab deklarierten globalen Standardpräzisionsanweisungen:

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

Die Fragment-Sprache hat die folgenden vorab deklarierten globalen Standardpräzisionsanweisungen:

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### In WebGL 1 ist "highp float" Unterstützung in Fragment-Shadern optional

Die Verwendung von `highp` Präzision bedingungslos in Fragment-Shadern wird verhindern, dass Ihr Inhalt auf einigen älteren mobilen Hardware funktioniert.

Während Sie `mediump float` stattdessen verwenden können, beachten Sie, dass dies oft zu Verfälschungen im Rendering führt aufgrund mangelnder Präzision (insbesondere mobile Systeme), auch wenn die Verfälschung auf einem typischen Desktop-Computer nicht sichtbar ist.

Wenn Sie Ihre Präzisionsanforderungen kennen, wird Ihnen `getShaderPrecisionFormat()` mitteilen, was das System unterstützt.

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

| `float`   | Übersetzen     | Bereich       | Minimal über Null | Präzision     |
| --------- | -------------- | ------------- | ----------------- | ------------- |
| `highp`   | float24\*      | (-2^62, 2^62) | 2^-62             | 2^-16 relativ |
| `mediump` | IEEE float16   | (-2^14, 2^14) | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-bit fixiert | (-2, 2)       | 2^-8              | 2^-8 absolut  |

| `int`     | Übersetzen | Bereich       |
| --------- | ---------- | ------------- |
| `highp`   | int17      | (-2^16, 2^16) |
| `mediump` | int11      | (-2^10, 2^10) |
| `lowp`    | int9       | (-2^8, 2^8)   |

_\*float24: Vorzeichen-Bit, 7-Bit für Exponent, 16-Bit für Mantissa._

### ESSL300 Mindestanforderungen (WebGL 2)

| `float`   | Übersetzen     | Bereich         | Minimal über Null | Präzision     |
| --------- | -------------- | --------------- | ----------------- | ------------- |
| `highp`   | IEEE float32   | (-2^126, 2^127) | 2^-126            | 2^-24 relativ |
| `mediump` | IEEE float16   | (-2^14, 2^14)   | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-bit fixiert | (-2, 2)         | 2^-8              | 2^-8 absolut  |

| `(u)int`  | Übersetzen | `int` Bereich | `unsigned int` Bereich |
| --------- | ---------- | ------------- | ---------------------- |
| `highp`   | (u)int32   | [-2^31, 2^31] | [0, 2^32]              |
| `mediump` | (u)int16   | [-2^15, 2^15] | [0, 2^16]              |
| `lowp`    | (u)int9    | [-2^8, 2^8]   | [0, 2^9]               |

## Vorzugsweise integrierte Funktionen statt eigener Anwendungen verwenden

Verwenden Sie vorzugsweise integrierte Funktionen wie `dot`, `mix` und `normalize`. Im besten Fall laufen benutzerdefinierte Implementierungen möglicherweise so schnell wie die integrierten Funktionen, die sie ersetzen, aber erwarten Sie das nicht. Hardware hat oft hyperoptimierte oder sogar spezialisierte Anweisungen für integrierte Funktionen, und der Compiler kann Ihre benutzerdefinierten Ersatzfunktionen für eingebaute Funktionen nicht zuverlässig mit den speziellen integrierten Codepfaden ersetzen.

## Verwenden Sie Mipmaps für jede Textur, die Sie in 3D sehen werden

Wenn Sie nicht sicher sind, rufen Sie `generateMipmaps()` nach dem Hochladen der Texturen auf. Mipmaps sind speichergünstig (nur 30% Overhead) und bieten oft große Leistungsverbesserungen, wenn Texturen "herausgezoomt" oder allgemein in der Ferne in 3D verkleinert werden, oder sogar für Würfelkarten!

Es geht schneller, von kleineren Texturbildern zu sampeln, aufgrund besserer inhärenter Cache-Lokalität bei Texturabfragen: Herauszoomen auf einer nicht mipgemappten Textur zerstört die Cache-Lokalität bei Texturabfragen, weil benachbarte Pixel nicht mehr von benachbarten Texeln samplen!

Allerdings, für 2D-Ressourcen, die nie "herausgezoomt" werden, zahlen Sie nicht die 30% Speicherzuschlag für Mipmaps:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(In WebGL 2 sollten Sie einfach `texStorage` mit `levels=1` verwenden)

Ein Vorbehalt: `generateMipmaps` funktioniert nur, wenn Sie in das Textur rendern können, wenn Sie es an ein Framebuffer anhängen. (Die Spezifikation nennt dies "color-renderable formats") Wenn beispielsweise ein System float-Texturen unterstützt, aber nicht auf-float-rendern, schlägt `generateMipmaps` für float-Formate fehl.

## Gehen Sie nicht davon aus, dass Sie in float-Texturen rendern können

Es gibt viele, viele Systeme, die RGBA32F-Texturen unterstützen, aber wenn Sie eines an ein Framebuffer anhängen, erhalten Sie `FRAMEBUFFER_INCOMPLETE_ATTACHMENT` von `checkFramebufferStatus()`. Es mag auf Ihrem System funktionieren, aber _die meisten_ mobilen Systeme werden es nicht unterstützen!

In WebGL 1 verwenden Sie die `EXT_color_buffer_half_float` und `WEBGL_color_buffer_float` Erweiterungen, um die Unterstützung des Renderns auf float-Texturen für float16 und float32 zu überprüfen.

In WebGL 2 überprüft `EXT_color_buffer_float` die Unterstützung des Renderns auf float-Texturen sowohl für float32 als auch für float16. `EXT_color_buffer_half_float` ist auf Systemen vorhanden, die nur das Rendern auf float16-Texturen unterstützen.

### Rendern-auf-float32 bedeutet nicht float32-Blending!

Es mag auf Ihrem System funktionieren, aber auf vielen anderen wird es nicht. Vermeiden Sie es, wenn Sie können. Überprüfen Sie die `EXT_float_blend` Erweiterung, um Unterstützung zu überprüfen.

Float16-Blending wird immer unterstützt.

## Einige Formate (z.B. RGB) können emuliert werden

Eine Reihe von Formaten (insbesondere Formate mit drei Kanälen) werden emuliert. Beispielsweise ist RGB32F oft tatsächlich RGBA32F, und Luminance8 könnte tatsächlich RGBA8 sein. RGB8 ist besonders oft überraschend langsam, da das Maskieren des Alpha-Kanals und/oder das Anpassen von Blend-Funktionen einen relativ hohen Overhead hat. Bevorzugen Sie es, RGBA8 zu verwenden und den Alpha selbst zu ignorieren, für bessere Leistung.

## Vermeiden Sie alpha:false, was teuer sein kann

Die Angabe von `alpha:false` während der Kontext-Erstellung führt dazu, dass der Browser das WebGL-gerenderte Canvas so zusammensetzt, als ob es obskur wäre und jegliche Alpha-Werte ignoriert, die die Anwendung in ihrem Fragment-Shader schreibt. Auf einigen Plattformen kommt diese Fähigkeit leider mit erheblichen Leistungskosten. Der RGB-Backbuffer muss möglicherweise auf einer RGBA-Oberfläche emuliert werden, und es gibt relativ wenig Techniken im OpenGL-API, um es so erscheinen zu lassen, dass eine RGBA-Oberfläche keinen Alpha-Kanal hat. [Es wurde entdeckt](https://crbug.com/1045643), dass alle diese Techniken auf den betroffenen Plattformen ungefähr den gleichen Leistungseinfluss haben.

Die meisten Anwendungen, selbst solche, die Alpha-Blending benötigen, können so strukturiert werden, dass sie `1.0` für den Alpha-Kanal produzieren. Die Hauptausnahme sind Anwendungen, die Alphakanal im Blendfunktion erfordern. Wenn möglich, wird empfohlen, dies zu tun, anstatt `alpha:false` zu verwenden.

## Überlegen Sie, komprimierte Texturformate zu verwenden

Während JPG und PNG in der Regel kleiner über die Leitung sind, sind GPU-komprimierte Texturformate im GPU-Speicher kleiner und schneller zu samplen. (Dies reduziert die Speichermandbreite für Texturen, die auf mobilen Geräten wertvoll ist) jedoch haben komprimierte Texturformate eine schlechtere Qualität als JPG und sind in der Regel nur für Farben akzeptabel (z.B. keine Normalen oder Koordinaten).

Leider gibt es kein einzelnes universell unterstütztes Format. Jedes System hat allerdings mindestens eines der folgenden:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

WebGL 2 hat universelle Unterstützung durch Kombination:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc (Mobil)

WEBGL_compressed_texture_astc hat sowohl höhere Qualität als auch/oder höhere Kompression, wird jedoch nur von neuerer Hardware unterstützt.

### Basis Universal Texturkompressionsformat/Bibliothek

Basis Universal löst einige der oben genannten Probleme. Es bietet eine Möglichkeit, alle gängigen komprimierten Texturformate mit einer einzigen komprimierten Texturdatei zu unterstützen, durch eine JavaScript-Bibliothek, die Formate effizient zur Ladezeit konvertiert. Es bietet auch zusätzliche Kompression, die Basis Universal komprimierte Texturdateien viel kleiner als reguläre komprimierte Texturen über die Leitung macht, vergleichbar mit JPEG.

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## Speicherverbrauch von Tiefen- und Stencil-Formaten

Tiefen- und Stencil-Anfügungen und Formate sind auf vielen Geräten tatsächlich untrennbar. Sie können DEPTH_COMPONENT24 oder STENCIL_INDEX8 anfordern, aber meistens erhalten Sie D24X8 und X24S8 32bpp Formate im Hintergrund. Gehen Sie davon aus, dass der Speicherverbrauch von Tiefen- und Stencil-Formaten auf die nächsten vier Bytes aufgerundet wird.

## texImage/texSubImage Uploads (insbesondere Videos) können Pipeline-Flushes verursachen

Die meisten Textur-Uploads von DOM-Elementen werden einen Verarbeitungsschritt erfordern, der vorübergehend interne GL-Programme wechseln wird, was eine Pipeline-Flush verursacht. (Pipelines werden explizit in [Vulkan](https://registry.khronos.org/vulkan/specs/1.2/html/chap9.html#VkGraphicsPipelineCreateInfo) et al formalisiert, sind aber in OpenGL und WebGL implizit hinter den Kulissen. Pipelines sind mehr oder weniger das Tupeldes Shader-Programms, der Tiefen-/Stencils-/Multisample-/Blend-/Rasterisierungszustand)

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

Erwägen Sie, die Uploads vor dem Beginn des Zeichnens zu machen, oder zumindest zwischen Pipelines:

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

## Verwenden Sie texStorage, um Texturen zu erzeugen

Die WebGL 2.0 `texImage*` API ermöglicht es Ihnen, jedes Mip-Level unabhängig und in jeder Größe zu definieren, selbst wenn die nicht übereinstimmenden Mip-Größen bis zur Zeichnungszeit nicht als Fehler betrachtet werden, was bedeutet, dass der Treiber die Textur im GPU-Speicher nicht vorbereiten kann, bis die Textur das erste Mal gezeichnet wird.

Darüber hinaus könnten einige Treiber bedingungslos die ganze Mip-Kette (+30% Speicher!) allozieren, selbst wenn Sie nur ein einziges Level wollen.

Bevorzugen Sie `texStorage` + `texSubImage` für Texturen in WebGL 2.

## Verwenden Sie invalidateFramebuffer

Das Speichern von Daten, die Sie nicht mehr verwenden werden, kann hohe Kosten verursachen, insbesondere auf gekachelten Rendering-GPUs, die auf Mobilgeräten üblich sind. Wenn Sie mit dem Inhalt einer Framebuffer-Anfügung fertig sind, verwenden Sie das `invalidateFramebuffer` von WebGL 2.0, um die Daten zu verwerfen, anstatt den Treiber Zeit zu verschwenden zu lassen, die Daten für die spätere Verwendung zu speichern. TIEFEN/STENCIL- und/oder multisampling-Anfügungen im Besonderen sind hervorragende Kandidaten für `invalidateFramebuffer`.

## Verwenden Sie nicht-blockierende asynchrone Datenrücklesung

Operationen wie `readPixels` und `getBufferSubData` sind normalerweise synchron, aber durch die gleichen APIs kann nicht-blockierende, asynchrone Datenrücklesung erreicht werden. Der Ansatz in WebGL 2 ist analog zu dem Ansatz in OpenGL: [Asynchrone Downloads in blockierenden APIs](https://kdashg.github.io/misc/async-gpu-downloads.html)

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

Den Umgang mit `devicePixelRatio !== 1.0` ist knifflig. Obwohl der übliche Ansatz ist, `canvas.width = width * devicePixelRatio` zu setzen, wird dies Moiré-Artefakte mit nicht-ganzzahligen Werten von `devicePixelRatio` verursachen, wie sie bei der UI-Skalierung auf Windows sowie beim Zoomen auf allen Plattformen üblich sind.

Stattdessen können wir nicht-ganzzahlige Werte für CSS's `top`/`bottom`/`left`/`right` verwenden, um unser Canvas zuverlässig auf ganze Ganzzahlgerätekoordinaten vorzurufen.

Demo: [Device pixel presnap](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

## ResizeObserver und 'device-pixel-content-box'

Auf unterstützenden Browsern (Chromium?) kann `ResizeObserver` mit `'device-pixel-content-box'` verwendet werden, um einen Callback anzufordern, der die wahre {{Glossary("device_pixel", "Gerätepixel")}} Größe eines Elements enthält. Dies kann verwendet werden, um eine asynchrone, aber genaue Funktion zu erstellen:

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

## Erstellung von ImageBitmap

Die Verwendung des [ImageBitmapOptions Wörterbuchs](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapoptions) ist wichtig, um Texturen richtig für den Upload zu WebGL vorzubereiten, aber leider gibt es keinen offensichtlichen Weg, um genau abzufragen, welche Wörterbuchmitglieder von einem gegebenen Browser unterstützt werden.

[Dieser JSFiddle](https://jsfiddle.net/ptkyewhx/) zeigt, wie man herausfindet, welche Wörterbuchmitglieder ein bestimmter Browser unterstützt.

## Verwenden Sie `WEBGL_provoking_vertex`, wenn verfügbar

Beim Zusammenfügen von Vertices zu Primitionen wie Dreiecken und Linien, ist in der OpenGL-Konvention das letzte Vertex der Primition als "provoking vertex" angesehen. Dies ist relevant, wenn `flache` Vertex-Attributinterpolation in ESSL300 (WebGL 2) verwendet wird; der Attributwert vom provoking vertex wird für alle Vertices der Primition verwendet.

Heutzutage werden viele WebGL-Implementierungen in Browser auf verschiedenen Grafik-APIs als OpenGL gehostet, und einige dieser APIs verwenden das erste Vertex als provoking vertex für Zeichnungsbefehle. Die Emulation der OpenGL-Konvention für das provoking vertex kann auf einigen dieser APIs rechenintensiv sein.

Aus diesem Grund wurde die [WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/) Erweiterung eingeführt. Wenn eine WebGL-Implementierung diese Erweiterung bereitstellt, deutet dies für die Anwendung an, dass die Änderung der Konvention zu `FIRST_VERTEX_CONVENTION_WEBGL` die Leistung verbessern wird. Es wird dringend empfohlen, dass Anwendungen, die flaches Shading verwenden, die Existenz dieser Erweiterung überprüfen und sie verwenden, falls verfügbar. Beachten Sie, dass dies Änderungen an den Vertex-Puffer oder Shader der Anwendung erfordern kann.
