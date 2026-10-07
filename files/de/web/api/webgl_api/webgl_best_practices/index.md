---
title: Best Practices für WebGL
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{DefaultAPISidebar("WebGL")}}

WebGL ist eine komplexe API, und die empfohlenen Vorgehensweisen für ihre Verwendung sind nicht immer offensichtlich. Diese Seite enthält Empfehlungen für unterschiedliche Erfahrungsstufen. Sie erläutert nicht nur, was Sie tun oder vermeiden sollten, sondern auch _warum_. Nutzen Sie dieses Dokument als Orientierung bei der Wahl Ihres Vorgehens, damit Ihre Anwendung unabhängig vom Browser und der Hardware Ihrer Nutzer zuverlässig funktioniert.

## WebGL-Fehler untersuchen und beheben

Ihre Anwendung sollte ohne WebGL-Fehler laufen, wie sie von `getError` zurückgegeben werden. Jeder WebGL-Fehler wird in der Web-Konsole als JavaScript-Warnung mit einer beschreibenden Meldung ausgegeben. Nach zu vielen Fehlern – in Firefox nach 32 – gibt WebGL keine beschreibenden Meldungen mehr aus, was die Fehlersuche erheblich erschwert.

Die _einzigen_ Fehler, die eine korrekt implementierte Seite erzeugen darf, sind `OUT_OF_MEMORY` und `CONTEXT_LOST`.

## Verfügbarkeit von Erweiterungen verstehen

Die Verfügbarkeit der meisten WebGL-Erweiterungen hängt vom System des Clients ab. Wenn Sie WebGL-Erweiterungen verwenden, sollten Sie sie nach Möglichkeit optional machen und Ihre Anwendung so anpassen, dass sie auch ohne diese Erweiterungen funktioniert.

Die folgenden WebGL-1-Erweiterungen werden überall unterstützt; Sie können sich darauf verlassen, dass sie verfügbar sind:

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(Siehe auch: [WebGL-Funktionsstufen und prozentuale Unterstützung](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

Ziehen Sie in Betracht, diese mittels Polyfill in WebGLRenderingContext bereitzustellen, beispielsweise so: <https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js>

## Systemgrenzen verstehen

Wie bei Erweiterungen unterscheiden sich auch die Grenzen Ihres Systems von denen der Systeme Ihrer Nutzer! Gehen Sie nicht davon aus, dass Sie pro Shader dreißig Texture-Sampler verwenden können, nur weil das auf Ihrem Rechner funktioniert!

Die Mindestanforderungen für WebGL sind recht niedrig. In der Praxis unterstützen so gut wie alle Systeme mindestens Folgendes:

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

Ihr Desktop-Rechner unterstützt möglicherweise Texturen mit 16k Auflösung oder 16 Texture-Units im Vertex-Shader. Auf den meisten anderen Systemen ist das jedoch nicht der Fall. Inhalte, die bei Ihnen funktionieren, funktionieren dort möglicherweise nicht!

## Änderungen an FBO-Attachment-Bindungen vermeiden

Fast jede Änderung an den Attachment-Bindungen eines FBO macht eine erneute Prüfung seiner Framebuffer-Vollständigkeit erforderlich. Richten Sie häufig verwendete Framebuffer im Voraus ein.

Wenn Sie in Firefox unter about:config die Einstellung `webgl.perf.max-warnings` auf `-1` setzen, werden Leistungswarnungen aktiviert. Dazu gehören auch Warnungen, wenn die Framebuffer-Vollständigkeit erneut geprüft werden muss.

### Änderungen an VAO-Attributbindungen vermeiden (vertexAttribPointer, disable/enableVertexAttribArray)

Das Zeichnen mit statischen, unveränderten VAOs ist schneller, als dasselbe VAO bei jedem Draw-Call zu ändern. Bei unveränderten VAOs können Browser die Grenzen für den Abruf von Vertex-Daten zwischenspeichern. Wenn sich VAOs ändern, müssen Browser diese Grenzen dagegen erneut prüfen und berechnen. Der zusätzliche Aufwand ist relativ gering. Die Wiederverwendung von VAOs reduziert aber auch die Anzahl der `vertexAttribPointer`-Aufrufe und lohnt sich daher überall dort, wo sie sich einfach umsetzen lässt.

## Objekte frühzeitig löschen

Warten Sie nicht darauf, dass der Garbage Collector oder Cycle Collector erkennt, dass Objekte nicht mehr referenziert werden, und sie entfernt. Implementierungen verfolgen, ob Objekte noch verwendet werden. Ein „Löschen“ auf API-Ebene gibt daher nur den Handle frei, der auf das eigentliche Objekt verweist. Konzeptionell wird dabei der Referenzzeiger des Handles auf das Objekt freigegeben. Erst wenn das Objekt innerhalb der Implementierung nicht mehr verwendet wird, wird es tatsächlich freigegeben. Wenn Sie beispielsweise nie wieder direkt auf Ihre Shader-Objekte zugreifen müssen, löschen Sie deren Handles einfach, nachdem Sie die Shader an ein Programmobjekt angehängt haben.

## Kontexte frühzeitig freigeben

Ziehen Sie außerdem in Betracht, WebGL-Kontexte über die Erweiterung `WEBGL_lose_context` frühzeitig freizugeben, wenn Sie sie definitiv nicht mehr benötigen und auch die Rendering-Ergebnisse des zugehörigen Canvas nicht mehr brauchen. Beim Verlassen einer Seite ist das nicht erforderlich – fügen Sie nicht eigens dafür einen unload-Event-Handler hinzu.

## Flush aufrufen, wenn Ergebnisse erwartet werden

Rufen Sie `flush()` auf, wenn Sie Ergebnisse erwarten, etwa von Abfragen, oder wenn ein Rendering-Frame abgeschlossen ist.

Flush weist die Implementierung an, alle ausstehenden Befehle zur Ausführung weiterzugeben und damit aus der Warteschlange zu entfernen, anstatt vor der Ausführung auf weitere Befehle zu warten.

Das folgende Beispiel kann ohne einen Kontextverlust unter Umständen niemals abgeschlossen werden:

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL verfügt standardmäßig nicht über einen SwapBuffers-Aufruf. Ein Flush kann auch diese Lücke schließen.

### `webgl.flush()` verwenden, wenn requestAnimationFrame nicht genutzt wird

Wenn Sie RAF nicht verwenden, nutzen Sie `webgl.flush()`, um die frühzeitige Ausführung der eingereihten Befehle zu fördern.

Auf RAF folgt unmittelbar die Frame-Grenze. Daher ist bei Verwendung von RAF ein ausdrücklicher Aufruf von `webgl.flush()` normalerweise nicht nötig.

## Blockierende API-Aufrufe im Produktivbetrieb vermeiden

Bestimmte WebGL-Einstiegspunkte – darunter `getError` und `getParameter` – halten den aufrufenden Thread synchron an. Selbst einfache Abfragen können bis zu 1 ms dauern. Wenn sie auf den Abschluss sämtlicher Grafikoperationen warten müssen, kann es noch länger dauern; die Wirkung ähnelt dann `glFinish()` in nativem OpenGL.

Vermeiden Sie solche Einstiegspunkte im Produktivcode, insbesondere auf dem Hauptthread des Browsers. Dort können sie die gesamte Seite ins Stocken bringen, häufig auch beim Scrollen, oder sogar den ganzen Browser.

- `getError()`: Löst einen Flush und einen Roundtrip aus, um Fehler aus dem GPU-Prozess abzurufen.

  In Firefox wird glGetError beispielsweise nur nach Speicherzuweisungen (`bufferData`, `*texImage*`, `texStorage*`) abgefragt, um mögliche GL_OUT_OF_MEMORY-Fehler zu erfassen.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()` und andere `get`-Aufrufe für Shader oder Programme: Flush, Shader-Kompilierung und Roundtrip, falls der Aufruf erfolgt, bevor die Shader-Kompilierung abgeschlossen ist. (Siehe auch [Shader parallel kompilieren](#shader_parallel_kompilieren_und_programme_parallel_linken) weiter unten.)
- `get*Parameter()` allgemein: Möglicherweise Flush und Roundtrip. In manchen Fällen werden Ergebnisse zwischengespeichert, um den Roundtrip zu vermeiden. Verlassen Sie sich darauf jedoch möglichst nicht.
- `checkFramebufferStatus()`: Möglicherweise Flush und Roundtrip.
- `getBufferSubData()`: Üblicherweise Warten auf den Abschluss und ein Roundtrip. (Für READ-Buffer ist dies in Verbindung mit Fences in Ordnung – siehe [asynchrones Auslesen von Daten](#daten_nicht_blockierend_und_asynchron_auslesen) weiter unten.)
- `readPixels()` in Richtung CPU (also ohne gebundenen UNPACK-Buffer): Warten auf den Abschluss und ein Roundtrip. Verwenden Sie stattdessen GPU-zu-GPU-`readPixels` zusammen mit asynchronem Auslesen von Daten.

## Vertex-Attribut 0 immer als Array aktivieren

Wenn Sie zeichnen, ohne Vertex-Attribut 0 als Array aktiviert zu haben, zwingen Sie den Browser bei der Ausführung auf Desktop-OpenGL – etwa unter macOS – zu einer aufwendigen Emulation. Der Grund dafür ist, dass Desktop-OpenGL nichts zeichnet, wenn Vertex-Attribut 0 nicht als Array aktiviert ist. Mit `bindAttribLocation` können Sie erzwingen, dass ein Vertex-Attribut Position 0 verwendet. Mit `enableVertexAttribArray(0)` aktivieren Sie es als Array.

## Ein VRAM-Budget pro Pixel abschätzen

WebGL stellt keine APIs bereit, mit denen sich die maximale Größe des Grafikspeichers eines Systems abfragen lässt, da solche Abfragen nicht portabel sind. Dennoch müssen Anwendungen ihren VRAM-Verbrauch berücksichtigen, statt einfach so viel Speicher wie möglich zu belegen.

Ein vom Google-Maps-Team eingeführter Ansatz ist ein _VRAM-Budget pro Pixel_:

1\) Legen Sie für ein System, beispielsweise einen bestimmten Desktop- oder Laptop-Rechner, fest, wie viel VRAM Ihre Anwendung höchstens verwenden soll. 2) Berechnen Sie die Anzahl der Pixel, die ein maximiertes Browserfenster einnimmt, beispielsweise mit `(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)`. 3) Teilen Sie den Wert aus (1) durch den Wert aus (2). Das Ergebnis ist das konstante VRAM-Budget pro Pixel.

Diese Konstante sollte _im Allgemeinen_ auf andere Systeme übertragbar sein. Mobilgeräte haben üblicherweise kleinere Bildschirme als leistungsfähige Desktop-Rechner mit großen Monitoren. Berechnen Sie die Konstante für einige Zielsysteme erneut, um eine verlässliche Schätzung zu erhalten.

Passen Sie nun alle internen Caches der Anwendung (WebGLBuffers, WebGLTextures usw.) so an, dass sie eine Höchstgröße einhalten: die Konstante multipliziert mit der Anzahl der Pixel, die das _aktuelle_ Browserfenster einnimmt. Dazu müssen Sie beispielsweise abschätzen, wie viele Bytes jede Textur belegt. Die Obergrenze muss normalerweise auch bei Größenänderungen des Browserfensters aktualisiert werden. Ältere Ressourcen, durch die das Limit überschritten wird, müssen entfernt werden.

Wenn der VRAM-Verbrauch der Anwendung unter dieser Grenze bleibt, lassen sich Fehler wegen Speichermangels und damit verbundene Instabilität eher vermeiden.

## Rendering in einen kleineren Backbuffer erwägen

Eine gängige und einfache Möglichkeit, Geschwindigkeit zulasten der Qualität zu gewinnen, besteht darin, in einen kleineren Backbuffer zu rendern und das Ergebnis hochzuskalieren. Erwägen Sie, canvas.width und canvas.height zu reduzieren und canvas.style.width und canvas.style.height auf einer konstanten Größe zu halten.

## Draw-Calls bündeln

Wenn Sie Draw-Calls zu weniger, größeren Draw-Calls bündeln („Batching“), verbessert das im Allgemeinen die Leistung. Wenn Sie 1000 Sprites zeichnen möchten, versuchen Sie, dafür nur einen einzigen Aufruf von drawArrays() oder drawElements() zu verwenden.

Wenn Sie voneinander getrennte Objekte in einem einzigen drawArrays(TRIANGLE_STRIP)-Aufruf zeichnen möchten, werden häufig „degenerate triangles“ verwendet. Das sind Dreiecke ohne Fläche, bei denen also mehr als ein Punkt exakt an derselben Stelle liegt. Diese Dreiecke werden praktisch übersprungen. So können Sie einen neuen, vom vorherigen getrennten Triangle-Strip beginnen, ohne ihn auf mehrere Draw-Calls aufteilen zu müssen.

Eine weitere wichtige Methode zum Bündeln ist die Verwendung von Textur-Atlanten: Mehrere Bilder werden in einer einzigen Textur angeordnet, häufig schachbrettartig. Da ein Texturwechsel die Aufteilung einer Draw-Call-Gruppe erfordert, können Sie mit Textur-Atlanten mehr Draw-Calls zu weniger, größeren Gruppen zusammenfassen. [Dieses Beispiel](https://webglsamples.org/sprites/readme.html) zeigt, wie sich sogar Sprites, die auf mehrere Textur-Atlanten verweisen, in einem einzigen Draw-Call zusammenfassen lassen.

## „#ifdef GL_ES“ vermeiden

Verwenden Sie in Ihren WebGL-Shadern niemals `#ifdef GL_ES`: Diese Bedingung ist in WebGL immer wahr. Obwohl sie in einigen frühen Beispielen verwendet wurde, ist sie nicht nötig.

## Arbeit vorzugsweise im Vertex-Shader erledigen

Erledigen Sie möglichst viel Arbeit im Vertex-Shader statt im Fragment-Shader. Bei einem Draw-Call werden Fragment-Shader im Allgemeinen wesentlich häufiger ausgeführt als Vertex-Shader. Jede Berechnung, die für die Vertices erfolgen und anschließend nur noch zwischen den Fragmenten interpoliert werden kann – über `varying`s –, bringt einen Leistungsvorteil. Die Interpolation von Varyings ist sehr effizient und erfolgt automatisch während der Rasterisierungsphase mit fester Funktionalität in der Grafikpipeline.

Eine einfache Animation einer texturierten Oberfläche lässt sich beispielsweise durch eine zeitabhängige Transformation der Texturkoordinaten erreichen. Im einfachsten Fall wird dem Attributvektor der Texturkoordinaten ein Uniform-Vektor hinzugefügt. Wenn das Ergebnis optisch akzeptabel ist, können Sie die Texturkoordinaten für eine bessere Leistung im Vertex-Shader statt im Fragment-Shader transformieren.

Ein häufiger Kompromiss besteht darin, einige Beleuchtungsberechnungen pro Vertex statt pro Fragment (Pixel) auszuführen. In manchen Fällen sieht das gut genug aus, insbesondere bei einfachen Modellen oder hoher Vertex-Dichte.

Anders verhält es sich, wenn ein Modell mehr Vertices als Pixel im gerenderten Ergebnis hat. Die übliche Lösung hierfür sind jedoch LOD-Meshes; nur selten sollte Arbeit vom Vertex- _in den_ Fragment-Shader verlagert werden.

## Shader parallel kompilieren und Programme parallel linken

Es ist naheliegend, Shader nacheinander zu kompilieren und Programme nacheinander zu linken. Viele Browser können diese Vorgänge jedoch auf Hintergrundthreads parallel ausführen.

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

Ziehen Sie Folgendes in Betracht:

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

Das oben beschriebene Muster ermöglicht es Browsern, Kompilierung und Linken parallel auszuführen. Normalerweise blockiert jedoch eine Abfrage von `COMPILE_STATUS` oder `LINK_STATUS`, bis der jeweilige Vorgang abgeschlossen ist. In Browsern, in denen die Erweiterung [KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/) verfügbar ist, bietet sie eine _nicht blockierende_ Abfrage von `COMPLETION_STATUS`. Aktivieren und verwenden Sie diese Erweiterung nach Möglichkeit.

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

Diese Technik eignet sich möglicherweise nicht für alle Anwendungen, etwa wenn Programme sofort für das Rendering verfügbar sein müssen. Prüfen Sie dennoch, ob eine Variante davon für Ihre Anwendung geeignet ist.

## Kompilierungsstatus von Shadern nur prüfen, wenn das Linken fehlschlägt

Es gibt nur sehr wenige Fehler, die garantiert dazu führen, dass die Shader-Kompilierung fehlschlägt, deren Erkennung aber nicht bis zum Linken aufgeschoben werden kann. Die [ESSL3-Spezifikation](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) legt unter „Error Handling“ Folgendes fest:

> Die Implementierung sollte Fehler so früh wie möglich melden, muss aber in jedem Fall die folgenden Anforderungen erfüllen:
>
> - Alle lexikalischen, grammatikalischen und semantischen Fehler müssen nach einem Aufruf von glLinkProgram erkannt worden sein.
> - Fehler aufgrund von Unterschieden zwischen Vertex- und Fragment-Shader (Link-Fehler) müssen nach einem Aufruf von glLinkProgram erkannt worden sein.
> - Fehler durch Überschreitung von Ressourcengrenzen müssen nach einem beliebigen Draw-Call oder einem Aufruf von glValidateProgram erkannt worden sein.
> - Ein Aufruf von glValidateProgram muss unter Berücksichtigung des aktuellen GL-Zustands alle Fehler melden, die mit einem Programmobjekt zusammenhängen.
>
> Die Aufgabenverteilung zwischen Compiler und Linker hängt von der Implementierung ab. Daher können viele Fehler je nach Implementierung entweder beim Kompilieren oder beim Linken erkannt werden.

Außerdem ist die Abfrage des Kompilierungsstatus ein synchroner Aufruf, der das Pipelining unterbricht.

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

Ziehen Sie Folgendes in Betracht:

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

## GLSL-Präzisionsangaben sorgfältig festlegen

Wenn Sie einen essl300-`int` zwischen Shadern übergeben möchten und dafür 32 Bit benötigen, _müssen_ Sie `highp` verwenden. Andernfalls entstehen Portabilitätsprobleme: Auf Desktop-Systemen funktioniert es möglicherweise, auf Android dagegen nicht.

Wenn Sie eine Float-Textur verwenden, verlangt iOS die Angabe `highp sampler2D foo;`. Andernfalls erhalten Sie Textur-Samples mit `lowp`-Präzision, was erhebliche Probleme verursachen kann! Ein Maximalwert von +/-2.0 reicht für Sie vermutlich nicht aus.

### Implizite Standardwerte

Die Vertex-Sprache verfügt über die folgenden vordefinierten Standard-Präzisionsdeklarationen mit globalem Gültigkeitsbereich:

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

Die Fragment-Sprache verfügt über die folgenden vordefinierten Standard-Präzisionsdeklarationen mit globalem Gültigkeitsbereich:

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### In WebGL 1 ist die Unterstützung für „highp float“ in Fragment-Shadern optional

Wenn Sie in Fragment-Shadern bedingungslos die Präzision `highp` verwenden, funktionieren Ihre Inhalte auf manchen älteren Mobilgeräten nicht.

Sie können stattdessen `mediump float` verwenden. Beachten Sie jedoch, dass die geringere Präzision häufig zu fehlerhaftem Rendering führt, insbesondere auf Mobilgeräten. Auf einem typischen Desktop-Rechner ist der Fehler möglicherweise nicht sichtbar.

Wenn Sie Ihre Anforderungen an die Präzision kennen, können Sie mit `getShaderPrecisionFormat()` ermitteln, was das System unterstützt.

Wenn `highp float` verfügbar ist, ist `GL_FRAGMENT_PRECISION_HIGH` als `1` definiert.

Ein gutes Muster für „immer die höchste verfügbare Präzision verwenden“:

```glsl
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
```

### Mindestanforderungen von ESSL100 (WebGL 1)

| `float`   | ungefähr                            | Wertebereich  | kleinster Wert über null | Präzision     |
| --------- | ----------------------------------- | ------------- | ------------------------ | ------------- |
| `highp`   | float24\*                           | (-2^62, 2^62) | 2^-62                    | 2^-16 relativ |
| `mediump` | IEEE float16                        | (-2^14, 2^14) | 2^-14                    | 2^-10 relativ |
| `lowp`    | 10-Bit-Festkommazahl mit Vorzeichen | (-2, 2)       | 2^-8                     | 2^-8 absolut  |

| `int`     | ungefähr | Wertebereich  |
| --------- | -------- | ------------- |
| `highp`   | int17    | (-2^16, 2^16) |
| `mediump` | int11    | (-2^10, 2^10) |
| `lowp`    | int9     | (-2^8, 2^8)   |

_\*float24: Vorzeichenbit, 7 Bit für den Exponenten, 16 Bit für die Mantisse._

### Mindestanforderungen von ESSL300 (WebGL 2)

| `float`   | ungefähr                            | Wertebereich    | kleinster Wert über null | Präzision     |
| --------- | ----------------------------------- | --------------- | ------------------------ | ------------- |
| `highp`   | IEEE float32                        | (-2^126, 2^127) | 2^-126                   | 2^-24 relativ |
| `mediump` | IEEE float16                        | (-2^14, 2^14)   | 2^-14                    | 2^-10 relativ |
| `lowp`    | 10-Bit-Festkommazahl mit Vorzeichen | (-2, 2)         | 2^-8                     | 2^-8 absolut  |

| `(u)int`  | ungefähr | Wertebereich von `int` | Wertebereich von `unsigned int` |
| --------- | -------- | ---------------------- | ------------------------------- |
| `highp`   | (u)int32 | [-2^31, 2^31]          | [0, 2^32]                       |
| `mediump` | (u)int16 | [-2^15, 2^15]          | [0, 2^16]                       |
| `lowp`    | (u)int9  | [-2^8, 2^8]            | [0, 2^9]                        |

## Integrierte Funktionen statt eigener Implementierungen bevorzugen

Bevorzugen Sie integrierte Funktionen wie `dot`, `mix` und `normalize`. Eigene Implementierungen sind bestenfalls so schnell wie die integrierten Funktionen, die sie ersetzen; rechnen Sie aber nicht damit. Hardware bietet für integrierte Funktionen häufig besonders stark optimierte oder sogar spezialisierte Anweisungen. Der Compiler kann Ihre eigenen Ersatzimplementierungen nicht zuverlässig durch die speziellen Codepfade für integrierte Funktionen ersetzen.

## Mipmaps für jede in 3D sichtbare Textur verwenden

Rufen Sie im Zweifelsfall nach dem Hochladen von Texturen `generateMipmaps()` auf. Mipmaps benötigen vergleichsweise wenig zusätzlichen Speicher – nur 30 % –, bieten aber oft erhebliche Leistungsvorteile, wenn Texturen in 3D „herausgezoomt“ oder in der Ferne verkleinert dargestellt werden. Das gilt sogar für Cube-Maps!

Samples aus kleineren Texturbildern lassen sich schneller lesen, weil benachbarte Daten besser im Cache liegen. Beim Herauszoomen aus einer Textur ohne Mipmaps geht dieser Vorteil verloren, da benachbarte Pixel nicht mehr auf benachbarte Texel zugreifen!

Für 2D-Ressourcen, die niemals „herausgezoomt“ werden, sollten Sie dagegen nicht den zusätzlichen Speicherbedarf von 30 % für Mipmaps in Kauf nehmen:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(In WebGL 2 sollten Sie stattdessen einfach `texStorage` mit `levels=1` verwenden.)

Eine Einschränkung: `generateMipmaps` funktioniert nur, wenn Sie in die Textur rendern könnten, nachdem Sie sie an einen Framebuffer angehängt haben. Die Spezifikation bezeichnet solche Formate als „color-renderable formats“. Wenn ein System beispielsweise Float-Texturen, aber kein Render-to-Float unterstützt, schlägt `generateMipmaps` für Float-Formate fehl.

## Nicht davon ausgehen, dass Rendering in Float-Texturen möglich ist

Sehr viele Systeme unterstützen RGBA32F-Texturen. Wenn Sie eine solche Textur jedoch an einen Framebuffer anhängen, liefert `checkFramebufferStatus()` unter Umständen `FRAMEBUFFER_INCOMPLETE_ATTACHMENT`. Auf Ihrem System funktioniert es vielleicht, auf den _meisten_ Mobilgeräten jedoch nicht!

Prüfen Sie unter WebGL 1 mit den Erweiterungen `EXT_color_buffer_half_float` beziehungsweise `WEBGL_color_buffer_float`, ob Rendering in float16- beziehungsweise float32-Texturen unterstützt wird.

Unter WebGL 2 prüft `EXT_color_buffer_float`, ob Rendering in float32- und float16-Texturen unterstützt wird. `EXT_color_buffer_half_float` ist auf Systemen verfügbar, die nur Rendering in float16-Texturen unterstützen.

### Render-to-float32 bedeutet nicht, dass float32-Blending möglich ist!

Auf Ihrem System funktioniert es möglicherweise, auf vielen anderen jedoch nicht. Vermeiden Sie es nach Möglichkeit. Prüfen Sie mit der Erweiterung `EXT_float_blend`, ob es unterstützt wird.

Float16-Blending wird immer unterstützt.

## Manche Formate (z. B. RGB) werden möglicherweise emuliert

Eine Reihe von Formaten wird emuliert, insbesondere Formate mit drei Kanälen. RGB32F ist beispielsweise häufig tatsächlich RGBA32F, und Luminance8 kann intern RGBA8 sein. Gerade RGB8 ist oft überraschend langsam, da das Ausblenden des Alpha-Kanals und/oder das Anpassen von Blend-Funktionen einen recht hohen Aufwand verursacht. Verwenden Sie für eine bessere Leistung vorzugsweise RGBA8 und ignorieren Sie den Alpha-Kanal selbst.

## `alpha:false` vermeiden, da es aufwendig sein kann

Wenn Sie bei der Kontexterstellung `alpha:false` angeben, setzt der Browser den mit WebGL gerenderten Canvas so zusammen, als wäre er undurchsichtig. Dabei ignoriert er sämtliche Alpha-Werte, die die Anwendung im Fragment-Shader schreibt. Auf manchen Plattformen geht dies leider mit erheblichen Leistungseinbußen einher. Möglicherweise muss ein RGB-Backbuffer auf einer RGBA-Oberfläche emuliert werden. Die OpenGL-API bietet nur relativ wenige Möglichkeiten, der Anwendung eine RGBA-Oberfläche als Oberfläche ohne Alpha-Kanal erscheinen zu lassen. [Es wurde festgestellt](https://crbug.com/1045643), dass all diese Methoden auf den betroffenen Plattformen ungefähr dieselben Auswirkungen auf die Leistung haben.

Die meisten Anwendungen – auch solche, die Alpha-Blending benötigen – können so aufgebaut werden, dass sie für den Alpha-Kanal `1.0` ausgeben. Die wichtigste Ausnahme sind Anwendungen, die in der Blend-Funktion den Ziel-Alpha-Wert benötigen. Wenn möglich, empfiehlt sich dieser Ansatz anstelle von `alpha:false`.

## Komprimierte Texturformate erwägen

JPG und PNG sind bei der Übertragung im Allgemeinen kleiner. GPU-komprimierte Texturformate benötigen dagegen weniger GPU-Speicher und lassen sich schneller abtasten. Das verringert die benötigte Texturspeicher-Bandbreite, die insbesondere auf Mobilgeräten knapp ist. Allerdings liefern komprimierte Texturformate eine schlechtere Qualität als JPG und eignen sich im Allgemeinen nur für Farben, nicht etwa für Normalen oder Koordinaten.

Leider gibt es kein einzelnes Format, das überall unterstützt wird. Jedes System unterstützt jedoch mindestens eines der folgenden Formate:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

Für WebGL 2 lässt sich eine allgemeine Unterstützung durch die Kombination folgender Formate erreichen:

- WEBGL_compressed_texture_s3tc (Desktop)
- WEBGL_compressed_texture_etc (Mobilgeräte)

WEBGL_compressed_texture_astc bietet eine höhere Qualität und/oder stärkere Komprimierung, wird aber nur von neuerer Hardware unterstützt.

### Texturkomprimierungsformat und -bibliothek Basis Universal

Basis Universal löst mehrere der oben genannten Probleme. Mithilfe einer JavaScript-Bibliothek, die Formate beim Laden effizient konvertiert, können Sie mit einer einzigen komprimierten Texturdatei alle gängigen komprimierten Texturformate unterstützen. Eine zusätzliche Komprimierung sorgt außerdem dafür, dass Basis-Universal-Texturdateien bei der Übertragung wesentlich kleiner sind als gewöhnliche komprimierte Texturen und eher mit JPEG vergleichbar sind.

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## Speicherverbrauch von Depth- und Stencil-Formaten

Depth- und Stencil-Attachments beziehungsweise -Formate sind auf vielen Geräten tatsächlich untrennbar miteinander verbunden. Sie können DEPTH_COMPONENT24 oder STENCIL_INDEX8 anfordern, erhalten intern aber häufig die 32-bpp-Formate D24X8 beziehungsweise X24S8. Gehen Sie davon aus, dass der Speicherverbrauch von Depth- und Stencil-Formaten auf das nächste Vielfache von vier Bytes aufgerundet wird.

## Uploads mit texImage/texSubImage (insbesondere von Videos) können Pipeline-Flushes auslösen

Die meisten Textur-Uploads aus DOM-Elementen erfordern einen Verarbeitungsschritt, bei dem intern vorübergehend andere GL-Programme verwendet werden. Das führt zu einem Pipeline-Flush. (Pipelines sind in [Vulkan](https://docs.vulkan.org/spec/latest/chapters/pipelines.html) und ähnlichen APIs ausdrücklich definiert, in OpenGL und WebGL dagegen nur implizit vorhanden. Eine Pipeline besteht im Wesentlichen aus dem Shader-Programm und den Zuständen für Depth, Stencil, Multisampling, Blending und Rasterisierung.)

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

Intern im Browser:

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

Führen Sie Uploads vorzugsweise aus, bevor Sie mit dem Zeichnen beginnen, oder zumindest zwischen der Verwendung verschiedener Pipelines:

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

Intern im Browser:

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

## Texturen mit texStorage erstellen

Mit der WebGL-2.0-API `texImage*` können Sie jede Mip-Stufe unabhängig und in beliebiger Größe definieren. Selbst unterschiedlich große, nicht zusammenpassende Mip-Stufen verursachen erst beim Zeichnen einen Fehler. Der Treiber kann die Textur im GPU-Speicher daher erst vorbereiten, wenn sie zum ersten Mal gezeichnet wird.

Außerdem reservieren manche Treiber möglicherweise immer Speicher für die gesamte Mip-Kette – mit 30 % zusätzlichem Speicherbedarf –, selbst wenn Sie nur eine einzige Stufe benötigen.

Bevorzugen Sie deshalb für Texturen in WebGL 2 die Kombination aus `texStorage` und `texSubImage`.

## invalidateFramebuffer verwenden

Das Speichern von Daten, die Sie nicht erneut verwenden, kann aufwendig sein, insbesondere auf GPUs mit kachelbasiertem Rendering, wie sie bei Mobilgeräten häufig vorkommen. Wenn Sie den Inhalt eines Framebuffer-Attachments nicht mehr benötigen, verwerfen Sie die Daten mit `invalidateFramebuffer` aus WebGL 2.0. Andernfalls speichert der Treiber sie möglicherweise unnötig für eine spätere Verwendung. Insbesondere DEPTH/STENCIL- und/oder Multisample-Attachments eignen sich gut für `invalidateFramebuffer`.

## Daten nicht blockierend und asynchron auslesen

Operationen wie `readPixels` und `getBufferSubData` sind normalerweise synchron. Mit denselben APIs lässt sich das Auslesen von Daten jedoch auch nicht blockierend und asynchron gestalten. Der Ansatz in WebGL 2 entspricht dem in OpenGL: [Asynchrone Downloads mit blockierenden APIs](https://kdashg.github.io/misc/async-gpu-downloads.html)

```js
function clientWaitAsync(gl, sync, flags, intervalMs) {
  return new Promise((resolve, reject) => {
    function test() {
      const res = gl.clientWaitSync(sync, flags, 0);
      if (res === gl.WAIT_FAILED) {
        reject(new Error("clientWaitSync failed"));
        return;
      }
      if (res === gl.TIMEOUT_EXPIRED) {
        setTimeout(test, intervalMs);
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

## `devicePixelRatio` und Rendering mit hoher Pixeldichte

Der Umgang mit `devicePixelRatio !== 1.0` ist schwierig. Ein üblicher Ansatz besteht darin, `canvas.width = width * devicePixelRatio` zu setzen. Bei nicht ganzzahligen Werten von `devicePixelRatio` entstehen dadurch jedoch Moiré-Artefakte. Solche Werte treten häufig bei der Skalierung der Benutzeroberfläche unter Windows sowie beim Zoomen auf allen Plattformen auf.

Stattdessen können wir für die CSS-Eigenschaften `top`/`bottom`/`left`/`right` nicht ganzzahlige Werte verwenden, um unseren Canvas recht zuverlässig vorab an ganzzahligen Gerätekoordinaten auszurichten.

Demo: [Vorabausrichtung an Gerätepixeln](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

## ResizeObserver und 'device-pixel-content-box'

In [Browsern, die dies unterstützen](/de/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize#browser_compatibility), können Sie `ResizeObserver` mit `'device-pixel-content-box'` verwenden, um einen Callback anzufordern, der die tatsächliche Größe eines Elements in {{Glossary("device_pixel", "Gerätepixeln")}} enthält. Damit lässt sich eine asynchrone, aber genaue Funktion erstellen:

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

## `WEBGL_provoking_vertex` verwenden, wenn verfügbar

Wenn Vertices zu Primitiven wie Dreiecken und Linien zusammengesetzt werden, gilt nach der OpenGL-Konvention der letzte Vertex des Primitivs als „provoking vertex“. Das ist bei der Verwendung von `flat` für die Interpolation von Vertex-Attributen in ESSL300 (WebGL 2) relevant: Der Attributwert des provoking vertex wird für alle Vertices des Primitivs verwendet.

Heutzutage basieren die WebGL-Implementierungen vieler Browser auf anderen Grafik-APIs als OpenGL. Einige dieser APIs verwenden bei Zeichenbefehlen den ersten Vertex als provoking vertex. Die Emulation der OpenGL-Konvention kann bei manchen dieser APIs rechenintensiv sein.

Aus diesem Grund wurde die Erweiterung [WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/) eingeführt. Wenn eine WebGL-Implementierung diese Erweiterung bereitstellt, ist das ein Hinweis für die Anwendung, dass ein Wechsel der Konvention zu `FIRST_VERTEX_CONVENTION_WEBGL` die Leistung verbessert. Anwendungen, die Flat Shading verwenden, sollten unbedingt prüfen, ob diese Erweiterung vorhanden ist, und sie gegebenenfalls für den Wechsel verwenden. Beachten Sie, dass dafür möglicherweise Änderungen an den Vertex-Buffern oder Shadern der Anwendung erforderlich sind.
