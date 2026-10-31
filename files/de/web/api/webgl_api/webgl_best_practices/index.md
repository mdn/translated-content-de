---
title: Best Practices für WebGL
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: a0ba038b5e77c06c820e90dc39133acb70dd476a
---

{{DefaultAPISidebar("WebGL")}}

WebGL ist eine komplexe API, und die empfohlenen Vorgehensweisen sind nicht immer offensichtlich. Diese Seite enthält Empfehlungen für unterschiedliche Erfahrungsstufen. Sie zeigt nicht nur, was Sie tun und vermeiden sollten, sondern erklärt auch, _warum_. Nutzen Sie dieses Dokument als Orientierung bei der Wahl Ihres Ansatzes, damit Ihre Anwendung unabhängig vom Browser und der Hardware Ihrer Nutzer zuverlässig funktioniert.

## WebGL-Fehler erkennen und beheben

Ihre Anwendung sollte keine WebGL-Fehler erzeugen, wie sie von `getError` zurückgegeben werden. Jeder WebGL-Fehler wird in der Web-Konsole als JavaScript-Warnung mit einer beschreibenden Meldung angezeigt. Nach zu vielen Fehlern (32 in Firefox) erzeugt WebGL keine beschreibenden Meldungen mehr, was die Fehlersuche erheblich erschwert.

Die _einzigen_ Fehler, die eine korrekt aufgebaute Seite erzeugt, sind `OUT_OF_MEMORY` und `CONTEXT_LOST_WEBGL`.

## Speicher optimieren

### VRAM konservativ einplanen

WebGL bietet keine APIs, um die maximale Größe des Videospeichers eines Systems abzufragen, da solche Abfragen nicht portabel sind. Dennoch müssen Anwendungen auf ihren VRAM-Verbrauch achten, statt einfach möglichst viel Speicher zu belegen.

Einige gängige Vorgehensweisen:

- Schätzen Sie den aktuellen VRAM-Verbrauch, beispielsweise anhand der Anzahl zugewiesener Buffer.
- Behandeln Sie [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)-Ereignisse, die unter anderem auftreten können, wenn der GPU der Speicher ausgeht.
- Bieten Sie verschiedene Einstellungen für die Grafikqualität an, damit Nutzer bei knappen Ressourcen eine niedrigere Qualität wählen können.

### Objekte frühzeitig löschen

Warten Sie nicht darauf, dass der Garbage Collector oder Cycle Collector erkennt, dass Objekte verwaist sind, und sie zerstört. Implementierungen verfolgen, ob Objekte noch verwendet werden. Wenn Sie ein Objekt auf API-Ebene „löschen“, wird daher nur das Handle freigegeben, das auf das eigentliche Objekt verweist. (Konzeptionell wird der Referenzzeiger des Handles auf das Objekt freigegeben.) Erst wenn das Objekt in der Implementierung nicht mehr verwendet wird, wird es tatsächlich freigegeben. Wenn Sie beispielsweise nicht mehr direkt auf Ihre Shader-Objekte zugreifen müssen, löschen Sie deren Handles, nachdem Sie sie an ein Program-Objekt angehängt haben.

### Kontexte frühzeitig aufgeben

Ziehen Sie auch in Betracht, WebGL-Kontexte über die Erweiterung `WEBGL_lose_context` frühzeitig aufzugeben, wenn Sie sie definitiv nicht mehr benötigen und die Rendering-Ergebnisse des zugehörigen Canvas nicht mehr brauchen. Beim Verlassen einer Seite ist das nicht erforderlich – fügen Sie nicht eigens dafür einen unload-Event-Handler hinzu.

### Komprimierte Texturformate in Betracht ziehen

JPG und PNG sind bei der Übertragung zwar im Allgemeinen kleiner, GPU-komprimierte Texturformate benötigen jedoch weniger GPU-Speicher und lassen sich schneller abtasten. (Dadurch wird die Bandbreite für Texturspeicher reduziert, die insbesondere auf Mobilgeräten kostbar ist.) Komprimierte Texturformate bieten allerdings eine schlechtere Qualität als JPG und eignen sich im Allgemeinen nur für Farben (nicht beispielsweise für Normalen oder Koordinaten).

Leider gibt es kein einzelnes Format, das überall unterstützt wird. Jedes System unterstützt jedoch mindestens eines der folgenden Formate:

- `WEBGL_compressed_texture_s3tc` (Desktop)
- `WEBGL_compressed_texture_etc1` (Android)
- `WEBGL_compressed_texture_pvrtc` (iOS)

WebGL 2 ermöglicht eine universelle Unterstützung durch die Kombination von:

- `WEBGL_compressed_texture_s3tc` (Desktop)
- `WEBGL_compressed_texture_etc` (Mobilgeräte)

Das neuere `WEBGL_compressed_texture_astc` bietet eine höhere Qualität und/oder stärkere Komprimierung.

#### Texturkomprimierungsformat und -bibliothek Basis Universal

[Basis Universal](https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md) löst mehrere der oben genannten Probleme. Es ermöglicht, alle gängigen komprimierten Texturformate mit einer einzigen komprimierten Texturdatei zu unterstützen. Dazu dient eine JavaScript-Bibliothek, die Formate beim Laden effizient konvertiert. Durch zusätzliche Komprimierung sind mit Basis Universal komprimierte Texturdateien bei der Übertragung außerdem wesentlich kleiner als gewöhnliche komprimierte Texturen und eher mit JPEG vergleichbar.

### Speicherbedarf von Depth- und Stencil-Formaten

Depth- und Stencil-Attachments und -Formate lassen sich auf vielen Geräten faktisch nicht voneinander trennen. Sie können `DEPTH_COMPONENT24` oder `STENCIL_INDEX8` anfordern, erhalten intern aber häufig die 32-bpp-Formate D24X8 beziehungsweise X24S8. Gehen Sie davon aus, dass der Speicherbedarf von Depth- und Stencil-Formaten auf das nächste Vielfache von vier Bytes aufgerundet wird.

Ein kleineres Format spart daher nicht unbedingt Speicher: Beispielsweise kann `DEPTH_COMPONENT16` als 32-Bit-Format gespeichert werden und damit genauso viel Speicher wie `DEPTH_COMPONENT24` benötigen. Umgekehrt kann ein zusätzlicher Stencil-Buffer auf manchen Plattformen den Speicherbedarf erhöhen, etwa bei Apple-GPUs. Dort kann ein 24-Bit-Depth-Format als 32-Bit-Gleitkomma-Depth gespeichert werden, während ein Depth-Stencil-Format aus 32-Bit-Gleitkomma-Depth plus 8-Bit-Stencil besteht. Fordern Sie einen Stencil-Buffer (über das Kontextattribut `stencil: true` oder ein Depth-Stencil-Attachment) nur an, wenn Sie ihn verwenden.

### Texturen mit texStorage erstellen

Mit der `texImage*`-API von WebGL 2.0 können Sie jede Mip-Stufe unabhängig und in beliebiger Größe definieren – selbst mit nicht zusammenpassenden Mip-Größen, die eine Textur für das Sampling unvollständig machen. Der Treiber kann den Speicher bereits vor dem Zeichnen der Textur zuweisen, einige Arbeiten aber auch bis dahin aufschieben.

Außerdem weisen manche Treiber möglicherweise immer Speicher für die gesamte Mip-Kette zu (+33 % Speicher bei quadratischen Texturen!), selbst wenn Sie nur eine einzige Stufe benötigen.

Verwenden Sie in WebGL 2 vorzugsweise `texStorage`, um Format, Abmessungen und Mip-Stufen der Textur im Voraus zuzuweisen, und laden Sie deren Inhalt anschließend mit `texSubImage` hoch. So wird der Texturspeicher bei späteren Uploads nicht neu definiert, und Sie können nur die benötigten Mip-Stufen zuweisen. Das Hochladen von Bildern und Videos über `texSubImage` kann allerdings langsamer sein als über `texImage`. Messen Sie daher die Leistung solcher Uploads, bevor Sie umstellen.

## Laufzeit optimieren

### Änderungen an FBO-Attachment-Bindings vermeiden

Fast jede Änderung an den Attachment-Bindings eines FBO macht die Feststellung ungültig, ob dessen Framebuffer vollständig ist. Richten Sie häufig verwendete Framebuffer im Voraus ein.

In Firefox können Sie in about:config die Einstellung `webgl.perf.max-warnings` auf `-1` setzen. Dadurch werden Leistungswarnungen aktiviert, darunter Warnungen zur Ungültigkeit der Framebuffer-Vollständigkeit.

### Änderungen an VAO-Attachments vermeiden (vertexAttribPointer, disable/enableVertexAttribArray)

Das Zeichnen mit statischen, unveränderten VAOs ist schneller, als dasselbe VAO bei jedem Draw-Call zu verändern. Bei unveränderten VAOs können Browser die Grenzen für das Auslesen zwischenspeichern. Ändern sich VAOs, müssen Browser diese Grenzen dagegen erneut validieren und berechnen. Der Mehraufwand ist relativ gering, aber die Wiederverwendung von VAOs bedeutet auch weniger `vertexAttribPointer`-Aufrufe. Wo es einfach möglich ist, lohnt sie sich daher.

### Flush ausführen, wenn Ergebnisse erwartet werden

Rufen Sie `flush()` auf, wenn Sie Ergebnisse wie Query-Ergebnisse erwarten oder ein Rendering-Frame abgeschlossen ist.

Ein Flush weist die Implementierung an, alle ausstehenden Befehle zur Ausführung weiterzuleiten und aus der Warteschlange zu entfernen, statt vor der Übergabe zur Ausführung auf weitere Befehle zu warten.

Führen Sie in WebGL 2 beispielsweise nach dem Einfügen einer Fence einen Flush aus, bevor Sie in einem späteren Task prüfen, ob sie abgeschlossen ist:

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
gl.flush();

// clientWaitAsync is defined in the async data readback example below.
clientWaitAsync(gl, sync, 0, 10)
  .finally(() => gl.deleteSync(sync))
  .catch(console.error);
```

WebGL hat standardmäßig keinen SwapBuffers-Aufruf; auch hier kann ein Flush die Lücke schließen.

#### `webgl.flush()` verwenden, wenn requestAnimationFrame nicht verwendet wird

Wenn Sie RAF nicht verwenden, nutzen Sie `webgl.flush()`, um die frühzeitige Ausführung eingereihter Befehle anzustoßen.

Da auf RAF unmittelbar die Frame-Grenze folgt, ist bei Verwendung von RAF ein expliziter Aufruf von `webgl.flush()` nicht wirklich nötig.

### Blockierende API-Aufrufe im Produktivbetrieb vermeiden

Bestimmte WebGL-Einstiegspunkte – darunter `getError` und `getParameter` – verursachen synchrone Wartezeiten im aufrufenden Thread. Selbst einfache Abfragen können bis zu 1 ms dauern; müssen sie auf den Abschluss aller Grafikarbeiten warten, kann es noch länger dauern (mit einer ähnlichen Wirkung wie `glFinish()` in nativem OpenGL).

Vermeiden Sie solche Einstiegspunkte im Produktivcode, insbesondere im Hauptthread des Browsers. Dort können sie die gesamte Seite ins Stocken bringen – häufig auch das Scrollen oder sogar den ganzen Browser.

- `getError()`: Führt einen Flush und einen Roundtrip aus, um Fehler vom GPU-Prozess abzurufen.

  In Firefox wird glGetError beispielsweise nur nach Speicherzuweisungen (`bufferData`, `*texImage*`, `texStorage*`) geprüft, um mögliche GL_OUT_OF_MEMORY-Fehler zu erfassen.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()` und andere `get`-Aufrufe für Shader und Programs: Flush, Shader-Kompilierung und Roundtrip, falls die Shader-Kompilierung noch nicht abgeschlossen ist. (Siehe auch [Shader parallel kompilieren](#shader_parallel_kompilieren_und_programs_parallel_linken) weiter unten.)
- `get*Parameter()` allgemein: möglicherweise Flush und Roundtrip. In einigen Fällen werden Ergebnisse zwischengespeichert, um den Roundtrip zu vermeiden. Verlassen Sie sich möglichst nicht darauf.
- `checkFramebufferStatus()`: möglicherweise Flush und Roundtrip.
- `getBufferSubData()`: üblicherweise Warten auf den Abschluss und Roundtrip. (Für READ-Buffer ist das in Verbindung mit Fences in Ordnung – siehe [Asynchrones Auslesen von Daten](#nicht_blockierendes_asynchrones_auslesen_von_daten_verwenden) weiter unten.)
- `readPixels()` zur CPU (also ohne gebundenen PIXEL_PACK-Buffer): Warten auf den Abschluss und Roundtrip. Verwenden Sie stattdessen GPU-zu-GPU-`readPixels` in Verbindung mit asynchronem Auslesen von Daten.

### Vertex-Attribut 0 immer als Array aktivieren

Wenn Sie zeichnen, ohne Vertex-Attribut 0 als Array zu aktivieren, muss der Browser bei Desktop-OpenGL (etwa unter macOS) eine aufwendige Emulation durchführen. Der Grund: In Desktop-OpenGL wird nichts gezeichnet, wenn Vertex-Attribut 0 nicht als Array aktiviert ist. Mit `bindAttribLocation` können Sie erzwingen, dass ein Vertex-Attribut Position 0 verwendet, und mit `enableVertexAttribArray(0)` können Sie es als Array aktivieren.

### Rendering in einen kleineren Back-Buffer in Betracht ziehen

Eine gängige (und einfache) Möglichkeit, Geschwindigkeit auf Kosten der Qualität zu gewinnen, besteht darin, in einen kleineren Back-Buffer zu rendern und das Ergebnis hochzuskalieren. Erwägen Sie, canvas.width und canvas.height zu verringern, während canvas.style.width und canvas.style.height eine konstante Größe behalten.

### Draw-Calls bündeln

Das „Batching“ von Draw-Calls zu weniger, größeren Draw-Calls verbessert in der Regel die Leistung. Wenn Sie 1000 Sprites zeichnen müssen, versuchen Sie, dies mit einem einzigen `drawArrays()`- oder `drawElements()`-Aufruf zu erledigen.

Wenn Sie nicht zusammenhängende Objekte mit einem einzigen `drawArrays(TRIANGLE_STRIP)`-Aufruf zeichnen müssen, werden häufig „degenerierte Dreiecke“ verwendet. Degenerierte Dreiecke haben keine Fläche: Bei ihnen liegen also mindestens zwei Punkte exakt an derselben Position. Diese Dreiecke werden praktisch übersprungen. So können Sie einen neuen Triangle-Strip beginnen, der nicht mit dem vorherigen verbunden ist, ohne mehrere Draw-Calls zu benötigen.

Eine weitere wichtige Methode für das Batching sind Texturatlanten. Dabei werden mehrere Bilder in einer einzigen Textur platziert, häufig in einem schachbrettartigen Muster. Da Sie Draw-Call-Batches beim Wechseln der Textur aufteilen müssen, können Sie mit Texturatlanten mehr Draw-Calls zu weniger, größeren Batches zusammenfassen. [Dieses Beispiel](https://webglsamples.org/sprites/readme.html) zeigt, wie sich sogar Sprites, die auf mehrere Texturatlanten verweisen, in einem einzigen Draw-Call kombinieren lassen.

### Arbeit vorzugsweise im Vertex-Shader erledigen

Erledigen Sie möglichst viel Arbeit im Vertex-Shader statt im Fragment-Shader. Pro Draw-Call werden Fragment-Shader in der Regel wesentlich häufiger ausgeführt als Vertex-Shader. Jede Berechnung, die an den Vertices vorgenommen werden kann und deren Ergebnis anschließend nur zwischen den Fragmenten interpoliert werden muss (über `varying`s), verbessert die Leistung. (Die Interpolation von Varyings ist sehr günstig und erfolgt automatisch in der Rasterisierungsphase mit fest vorgegebener Funktionalität der Grafikpipeline.)

Eine einfache Animation einer texturierten Oberfläche lässt sich beispielsweise durch eine zeitabhängige Transformation der Texturkoordinaten erreichen. (Im einfachsten Fall wird ein Uniform-Vektor zum Attributvektor der Texturkoordinaten addiert.) Wenn das Ergebnis visuell akzeptabel ist, können Sie die Texturkoordinaten für eine bessere Leistung im Vertex-Shader statt im Fragment-Shader transformieren.

Ein häufiger Kompromiss besteht darin, einige Beleuchtungsberechnungen pro Vertex statt pro Fragment (Pixel) durchzuführen. In manchen Fällen, insbesondere bei einfachen Modellen oder dicht angeordneten Vertices, sieht das Ergebnis gut genug aus.

Die umgekehrte Situation tritt ein, wenn ein Modell mehr Vertices als Pixel in der gerenderten Ausgabe hat. Üblicherweise sind LOD-Meshes die Lösung für dieses Problem; nur selten sollte Arbeit vom Vertex- _in den_ Fragment-Shader verlagert werden.

### Shader parallel kompilieren und Programs parallel linken

Es liegt nahe, Shader nacheinander zu kompilieren und Programs nacheinander zu linken. Viele Browser können diese Vorgänge jedoch parallel in Hintergrundthreads ausführen.

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

### KHR_parallel_shader_compile bevorzugen

Oben wurde ein Muster beschrieben, das Browsern paralleles Kompilieren und Linken ermöglicht. Normalerweise blockiert jedoch die Prüfung von `COMPILE_STATUS` oder `LINK_STATUS`, bis die Kompilierung beziehungsweise das Linken abgeschlossen ist. In Browsern, in denen die Erweiterung [KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/) verfügbar ist, bietet sie eine _nicht blockierende_ Abfrage von `COMPLETION_STATUS`. Aktivieren und verwenden Sie diese Erweiterung vorzugsweise.

Verwendungsbeispiel:

```js
const ext = gl.getExtension("KHR_parallel_shader_compile");
gl.compileShader(vs);
gl.compileShader(fs);
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
  // Checking link status may block until linking completes.
  // Check program link status; if OK, use and draw with it.
}
```

Diese Technik funktioniert möglicherweise nicht für alle Anwendungen, etwa wenn Programs sofort für das Rendering verfügbar sein müssen. Prüfen Sie dennoch, ob eine angepasste Variante für Ihre Anwendung geeignet ist.

### Shader-Kompilierungsstatus nur prüfen, wenn das Linken fehlschlägt

Es gibt nur sehr wenige Fehler, die garantiert zum Fehlschlagen der Shader-Kompilierung führen, deren Erkennung sich aber nicht bis zum Linken aufschieben lässt. Die [ESSL3-Spezifikation](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) besagt unter „Error Handling“:

> Die Implementierung sollte Fehler so früh wie möglich melden, muss aber in jedem Fall Folgendes erfüllen:
>
> - Alle lexikalischen, grammatikalischen und semantischen Fehler müssen nach einem Aufruf von glLinkProgram erkannt worden sein.
> - Fehler aufgrund einer Nichtübereinstimmung zwischen Vertex- und Fragment-Shader (Link-Fehler) müssen nach einem Aufruf von glLinkProgram erkannt worden sein.
> - Fehler aufgrund überschrittener Ressourcengrenzen müssen nach einem beliebigen Draw-Call oder einem Aufruf von glValidateProgram erkannt worden sein.
> - Ein Aufruf von glValidateProgram muss angesichts des aktuellen GL-Zustands alle Fehler melden, die mit einem Program-Objekt zusammenhängen.
>
> Die Aufteilung der Aufgaben zwischen Compiler und Linker hängt von der Implementierung ab. Daher gibt es viele Fehler, die je nach Implementierung entweder beim Kompilieren oder beim Linken erkannt werden können.

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

### Eingebaute Funktionen eigenen Implementierungen vorziehen

Bevorzugen Sie eingebaute Funktionen wie `dot`, `mix` und `normalize`. Eigene Implementierungen laufen bestenfalls so schnell wie die eingebauten Funktionen, die sie ersetzen – rechnen Sie aber nicht damit. Hardware bietet häufig hochoptimierte oder sogar spezialisierte Anweisungen für eingebaute Funktionen. Der Compiler kann Ihre eigenen Ersatzimplementierungen nicht zuverlässig durch die speziellen Codepfade dieser Funktionen ersetzen.

### Manche Formate (z. B. RGB) werden möglicherweise emuliert

Einige Formate – insbesondere Formate mit drei Kanälen – werden emuliert. Beispielsweise ist RGB32F intern oft tatsächlich RGBA32F, und Luminance8 kann tatsächlich RGBA8 sein. Gerade RGB8 ist häufig überraschend langsam, da das Maskieren des Alpha-Kanals und/oder das Anpassen von Blend-Funktionen einen recht hohen Mehraufwand verursacht. Verwenden Sie für eine bessere Leistung vorzugsweise RGBA8 und ignorieren Sie den Alpha-Kanal selbst.

### `alpha:false` vermeiden, da es aufwendig sein kann

Wenn Sie beim Erstellen eines Kontexts `alpha:false` angeben, führt der Browser das von WebGL gerenderte Canvas so mit anderen Inhalten zusammen, als wäre es vollständig undurchsichtig. Dabei ignoriert er alle Alpha-Werte, die die Anwendung in ihrem Fragment-Shader schreibt. Auf manchen Plattformen ist diese Funktion leider mit erheblichen Leistungseinbußen verbunden. Möglicherweise muss der RGB-Back-Buffer auf einer RGBA-Oberfläche emuliert werden. Die OpenGL-API bietet nur relativ wenige Techniken, um für eine Anwendung den Eindruck zu erzeugen, eine RGBA-Oberfläche habe keinen Alpha-Kanal. [Es wurde festgestellt](https://crbug.com/1045643), dass all diese Techniken auf betroffenen Plattformen ungefähr die gleichen Leistungseinbußen verursachen.

Die meisten Anwendungen – selbst solche, die Alpha-Blending benötigen – können so aufgebaut werden, dass sie für den Alpha-Kanal `1.0` ausgeben. Die wichtigste Ausnahme sind Anwendungen, deren Blend-Funktion das Destination-Alpha benötigt. Wenn es möglich ist, wird empfohlen, den Alpha-Kanal auf `1.0` zu setzen, statt `alpha:false` zu verwenden.

### Uploads mit texImage/texSubImage (insbesondere Videos) können Pipeline-Flushes auslösen

Die meisten Textur-Uploads aus DOM-Elementen erfordern einen Verarbeitungsschritt, bei dem intern vorübergehend das GL Program gewechselt wird. Dies führt zu einem Pipeline-Flush. (Pipelines sind in [Vulkan](https://docs.vulkan.org/spec/latest/chapters/pipelines.html) und ähnlichen APIs ausdrücklich definiert, in OpenGL und WebGL dagegen implizit. Eine Pipeline ist ungefähr das Tupel aus Shader-Program sowie Depth-, Stencil-, Multisample-, Blend- und Rasterisierungszustand.)

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

Führen Sie Uploads möglichst vor Beginn des Zeichnens oder zumindest zwischen Pipelines durch:

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

### invalidateFramebuffer verwenden

Das Speichern von Daten, die Sie nicht erneut verwenden werden, kann teuer sein – besonders auf GPUs mit gekacheltem Rendering, wie sie auf Mobilgeräten üblich sind. Wenn Sie den Inhalt eines Framebuffer-Attachments nicht mehr benötigen, verwerfen Sie die Daten mit `invalidateFramebuffer` aus WebGL 2.0. Andernfalls verschwendet der Treiber möglicherweise Zeit damit, sie für eine spätere Verwendung zu speichern. Insbesondere DEPTH/STENCIL- und/oder Multisample-Attachments eignen sich gut für `invalidateFramebuffer`.

### Nicht blockierendes asynchrones Auslesen von Daten verwenden

Operationen wie `readPixels` und `getBufferSubData` sind normalerweise synchron. Mit denselben APIs lässt sich jedoch ein nicht blockierendes, asynchrones Auslesen von Daten umsetzen. Der Ansatz in WebGL 2 entspricht dem in OpenGL: [Asynchrone Downloads mit blockierenden APIs](https://kdashg.github.io/misc/async-gpu-downloads.html)

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

### `WEBGL_provoking_vertex` verwenden, wenn verfügbar

Beim Zusammensetzen von Vertices zu Primitiven wie Dreiecken und Linien gilt nach der Konvention von OpenGL der letzte Vertex des Primitivs als „provoking vertex“. Das ist bei der `flat`-Interpolation von Vertex-Attributen in ESSL300 (WebGL 2) relevant: Für alle Vertices des Primitivs wird der Attributwert des provoking vertex verwendet.

Heutzutage basieren die WebGL-Implementierungen vieler Browser auf anderen Grafik-APIs als OpenGL. Einige dieser APIs verwenden bei Zeichenbefehlen den ersten Vertex als provoking vertex. Die Emulation der OpenGL-Konvention kann auf manchen dieser APIs rechenaufwendig sein.

Aus diesem Grund wurde die Erweiterung [WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/) eingeführt. Wenn eine WebGL-Implementierung diese Erweiterung bereitstellt, ist das für die Anwendung ein Hinweis darauf, dass ein Wechsel zur Konvention `FIRST_VERTEX_CONVENTION_WEBGL` die Leistung verbessert. Anwendungen mit Flat Shading wird dringend empfohlen, zu prüfen, ob diese Erweiterung vorhanden ist, und sie gegebenenfalls für diesen Wechsel zu verwenden. Beachten Sie, dass dafür möglicherweise Änderungen an den Vertex-Buffern oder Shadern der Anwendung erforderlich sind.

## Kompatibilität verbessern

### Verfügbarkeit von Erweiterungen verstehen

Ob WebGL-Erweiterungen verfügbar sind, hängt vom Browser und vom System des Clients ab. Prüfen Sie das Ergebnis von [`getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension), bevor Sie eine Erweiterung verwenden: Die Methode gibt `null` zurück, wenn die Erweiterung nicht verfügbar ist. Versuchen Sie nach Möglichkeit, WebGL-Erweiterungen optional zu verwenden und Ihre Anwendung entsprechend anzupassen, wenn sie nicht unterstützt werden.

Der folgende Code aktiviert beispielsweise optional die anisotrope Filterung für die derzeit an `gl.TEXTURE_2D` gebundene Textur. Ist die Erweiterung nicht verfügbar, verwendet die Textur lineare Filterung:

```js
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

const ext = gl.getExtension("EXT_texture_filter_anisotropic");
if (ext) {
  const maxAnisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
  gl.texParameterf(
    gl.TEXTURE_2D,
    ext.TEXTURE_MAX_ANISOTROPY_EXT,
    Math.min(4, maxAnisotropy),
  );
}
```

### Systemgrenzen verstehen

Wie bei Erweiterungen unterscheiden sich auch die Grenzen Ihres Systems von denen der Systeme Ihrer Clients. Gehen Sie nicht davon aus, dass Sie dreißig Textur-Sampler pro Shader verwenden können, nur weil es auf Ihrem Rechner funktioniert.

Die Mindestanforderungen für WebGL sind recht niedrig. In der Praxis unterstützen nahezu alle Systeme mindestens Folgendes:

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

Ihr Desktop-Rechner unterstützt vielleicht Texturen mit 16k Pixeln, leistungsschwächere Systeme aber möglicherweise nicht. Derselbe Inhalt funktioniert dort dann nicht.

### „#ifdef GL_ES“ vermeiden

Verwenden Sie `#ifdef GL_ES` niemals in Ihren WebGL-Shadern; diese Bedingung ist in WebGL immer wahr. Obwohl sie in einigen frühen Beispielen verwendet wurde, ist sie nicht nötig.

### Nicht davon ausgehen, dass Rendering in Float-Texturen möglich ist

Sehr viele Systeme unterstützen RGBA32F-Texturen. Wenn Sie eine solche Textur an einen Framebuffer anhängen, erhalten Sie von `checkFramebufferStatus()` aber `FRAMEBUFFER_INCOMPLETE_ATTACHMENT`.

Prüfen Sie in WebGL 1 mit den Erweiterungen `EXT_color_buffer_half_float` beziehungsweise `WEBGL_color_buffer_float`, ob das Rendering in Float16- beziehungsweise Float32-Texturen unterstützt wird.

In WebGL 2 prüft `EXT_color_buffer_float`, ob das Rendering sowohl in Float32- als auch in Float16-Texturen unterstützt wird. `EXT_color_buffer_half_float` ist auf Systemen vorhanden, die nur das Rendering in Float16-Texturen unterstützen.

#### Rendering in Float32 bedeutet nicht, dass Float32-Blending möglich ist!

Auf Ihrem System funktioniert es vielleicht, auf vielen anderen aber nicht. Vermeiden Sie es nach Möglichkeit. Prüfen Sie anhand der Erweiterung `EXT_float_blend`, ob es unterstützt wird.

Float16-Blending wird immer unterstützt.

## Qualität verbessern

### Präzisionsangaben in GLSL genau festlegen

Wenn Sie einen essl300-`int` zwischen Shadern übergeben möchten und 32 Bit benötigen, _müssen_ Sie `highp` verwenden. Andernfalls entstehen Portabilitätsprobleme. (Funktioniert auf Desktop-Systemen, nicht auf Android.)

Bei einer Float-Textur müssen Sie unter iOS `highp sampler2D foo;` verwenden. Andernfalls erhalten Sie dort nur `lowp`-Textur-Samples – mit sehr unerfreulichen Folgen! (Ein Maximalwert von +/-2.0 reicht Ihnen wahrscheinlich nicht aus.)

#### Implizite Standardwerte

In der Vertex-Sprache sind die folgenden global gültigen Standard-Präzisionsangaben vordeklariert:

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

In der Fragment-Sprache sind die folgenden global gültigen Standard-Präzisionsangaben vordeklariert:

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

#### In WebGL 1 ist die Unterstützung für „highp float“ in Fragment-Shadern optional

Wenn Sie in Fragment-Shadern ausnahmslos die Präzision `highp` verwenden, funktionieren Ihre Inhalte auf mancher älterer Mobilhardware nicht.

Sie können stattdessen `mediump float` verwenden. Beachten Sie jedoch, dass die geringere Präzision häufig zu fehlerhaftem Rendering führt (insbesondere auf Mobilgeräten), auch wenn die Fehler auf einem typischen Desktop-Computer nicht sichtbar sind.

Wenn Sie wissen, welche Präzision Sie benötigen, können Sie mit `getShaderPrecisionFormat()` prüfen, was das System unterstützt.

Wenn `highp float` verfügbar ist, ist `GL_FRAGMENT_PRECISION_HIGH` als `1` definiert.

Ein geeignetes Muster für „immer die höchste verfügbare Präzision verwenden“:

```glsl
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
```

#### ESSL100-Mindestanforderungen (WebGL 1)

| `float`   | entspricht ungefähr                 | Wertebereich  | Minimum über null | Präzision     |
| --------- | ----------------------------------- | ------------- | ----------------- | ------------- |
| `highp`   | float24\*                           | (-2^62, 2^62) | 2^-62             | 2^-16 relativ |
| `mediump` | IEEE float16                        | (-2^14, 2^14) | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-Bit-Festkommazahl mit Vorzeichen | (-2, 2)       | 2^-8              | 2^-8 absolut  |

| `int`     | entspricht ungefähr | Wertebereich  |
| --------- | ------------------- | ------------- |
| `highp`   | int17               | (-2^16, 2^16) |
| `mediump` | int11               | (-2^10, 2^10) |
| `lowp`    | int9                | (-2^8, 2^8)   |

_\*float24: Vorzeichenbit, 7 Bit für den Exponenten, 16 Bit für die Mantisse._

#### ESSL300-Mindestanforderungen (WebGL 2)

| `float`   | entspricht ungefähr                 | Wertebereich    | Minimum über null | Präzision     |
| --------- | ----------------------------------- | --------------- | ----------------- | ------------- |
| `highp`   | IEEE float32                        | (-2^126, 2^127) | 2^-126            | 2^-24 relativ |
| `mediump` | IEEE float16                        | (-2^14, 2^14)   | 2^-14             | 2^-10 relativ |
| `lowp`    | 10-Bit-Festkommazahl mit Vorzeichen | (-2, 2)         | 2^-8              | 2^-8 absolut  |

| `(u)int`  | entspricht ungefähr | Wertebereich von `int` | Wertebereich von `unsigned int` |
| --------- | ------------------- | ---------------------- | ------------------------------- |
| `highp`   | (u)int32            | [-2^31, 2^31 - 1]      | [0, 2^32 - 1]                   |
| `mediump` | (u)int16            | [-2^15, 2^15 - 1]      | [0, 2^16 - 1]                   |
| `lowp`    | (u)int9             | [-2^8, 2^8 - 1]        | [0, 2^9 - 1]                    |

### Mipmaps für alle Texturen verwenden, die in 3D sichtbar sind

Rufen Sie im Zweifelsfall nach dem Hochladen von Texturen `generateMipmap()` auf. Mipmaps benötigen nur wenig zusätzlichen Speicher (etwa 33 % bei quadratischen Texturen), bieten aber oft erhebliche Leistungsvorteile, wenn Texturen in 3D „herausgezoomt“ oder in der Ferne allgemein verkleinert dargestellt werden – und sogar bei Cube-Maps!

Das Sampling aus kleineren Texturbildern ist schneller, weil Zugriffe auf den Texture-Fetch-Cache von Natur aus räumlich besser zusammenliegen: Beim Herauszoomen einer Textur ohne Mipmaps geht diese räumliche Nähe verloren, da benachbarte Pixel nicht mehr aus benachbarten Texeln sampeln!

Bei 2D-Ressourcen, die niemals „herausgezoomt“ werden, sollten Sie dagegen den zusätzlichen Speicherbedarf für Mipmaps vermeiden:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(In WebGL 2 sollten Sie einfach `texStorage` mit `levels=1` verwenden.)

Eine Einschränkung: Bei Sized-Internal-Formaten funktioniert `generateMipmap` nur, wenn Sie in die Textur rendern könnten, sobald sie an einen Framebuffer angehängt ist, und wenn das Format Texturfilterung unterstützt. (Die Spezifikation bezeichnet solche Formate als „color-renderable“ und „texture-filterable“.) Unsized-Formate wie `ALPHA`, `LUMINANCE` und `LUMINANCE_ALPHA` aus WebGL 1 können die Mipmap-Generierung unterstützen, ohne color-renderable zu sein. Komprimierte Formate sowie Depth-/Stencil-Formate unterstützen `generateMipmap` nicht. In WebGL 1 müssen die Texturabmessungen außerdem Zweierpotenzen sein.

### `devicePixelRatio` und Rendering mit hoher Pixeldichte

Der Umgang mit `devicePixelRatio !== 1.0` ist schwierig. Häufig wird `canvas.width = width * devicePixelRatio` gesetzt. Bei nicht ganzzahligen Werten von `devicePixelRatio` können Rundungsunterschiede jedoch Moiré-Artefakte verursachen. Solche Werte treten häufig bei der Skalierung der Benutzeroberfläche unter Windows sowie beim Zoomen auf allen Plattformen auf.

Am zuverlässigsten vermeiden Sie dies, indem Sie den Browser mit `ResizeObserver` und `'device-pixel-content-box'` nach der exakten Größe des Canvas in Gerätepixeln fragen, wie im [nächsten Abschnitt](#resizeobserver_and_device-pixel-content-box) beschrieben. Das funktioniert mit dem normalen CSS-Layout, sodass das Canvas seinen jeweiligen Container weiterhin ausfüllen kann.

Als Ausweichlösung können Sie für `top`/`bottom`/`left`/`right` in CSS nicht ganzzahlige Werte verwenden, um das Canvas recht zuverlässig im Voraus an ganzzahligen Gerätekoordinaten auszurichten. Das funktioniert nur, wenn Sie das Canvas selbst positionieren. Für Layouts, in denen sich die Größe des Canvas nach seinem Container richtet, ist es daher nicht geeignet.

Demo: [Canvas im Voraus an Gerätepixeln ausrichten](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

### ResizeObserver und 'device-pixel-content-box'

In [unterstützenden Browsern](/de/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize#browser_compatibility) gibt [`devicePixelContentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize) die Content-Box in Gerätepixeln an. Beobachten Sie sie mit `box: "device-pixel-content-box"`, um Callbacks zu erhalten, wenn sich diese Größe ändert. Das folgende Beispiel beobachtet ersatzweise die Content-Box in CSS-Pixeln, wenn Größenangaben in Gerätepixeln nicht verfügbar sind. Es setzt einen horizontalen Schreibmodus sowie ein Canvas voraus, dessen CSS-Breite und -Höhe unabhängig von seinen Attributen `width` und `height` festgelegt sind, um eine Rückkopplungsschleife bei der Größenänderung zu vermeiden.

```js
let pendingWidth = canvas.width;
let pendingHeight = canvas.height;

function onResize(entries) {
  for (const entry of entries) {
    let width;
    let height;
    if (entry.devicePixelContentBoxSize) {
      width = entry.devicePixelContentBoxSize[0].inlineSize;
      height = entry.devicePixelContentBoxSize[0].blockSize;
    } else {
      // Fallback for browsers without device-pixel-content-box support
      const dpr = window.devicePixelRatio;
      width = Math.round(entry.contentBoxSize[0].inlineSize * dpr);
      height = Math.round(entry.contentBoxSize[0].blockSize * dpr);
    }
    pendingWidth = width;
    pendingHeight = height;
  }
}

const observer = new ResizeObserver(onResize);
try {
  observer.observe(canvas, { box: "device-pixel-content-box" });
} catch {
  // Browsers that don't support this box option throw an error
  observer.observe(canvas, { box: "content-box" });
}

function resizeCanvas() {
  if (canvas.width !== pendingWidth || canvas.height !== pendingHeight) {
    canvas.width = pendingWidth;
    canvas.height = pendingHeight;
  }
}
```

Wenn Sie in einer [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Schleife rendern, rufen Sie `resizeCanvas()` vor dem Zeichnen auf. Jeder Frame kann dann `canvas.width` und `canvas.height` auslesen und die Werte an `gl.viewport()` übergeben. Eine Größenänderung direkt im Observer könnte einen bereits gezeichneten Frame löschen, da Observer-Callbacks nach Animation-Frame-Callbacks ausgeführt werden. Wenn Sie nur bei Bedarf rendern, rufen Sie Ihre Renderfunktion am Ende des Callbacks auf und lassen Sie diese vor dem Zeichnen `resizeCanvas()` aufrufen. Eine Größenänderung des Canvas löscht nämlich seinen Inhalt.

Der Rückgriff auf die Content-Box liefert nur einen Näherungswert: Die gerundete Größe entspricht möglicherweise nicht genau den Gerätepixeln, die das Canvas abdeckt. Außerdem wird der Callback nicht ausgeführt, wenn sich lediglich `devicePixelRatio` ändert – beispielsweise wenn das Fenster auf einen Bildschirm mit anderer Pixeldichte verschoben wird. Für diesen Fall können Sie zusätzlich mit [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) auf Änderungen einer Media Query zur Auflösung reagieren.
