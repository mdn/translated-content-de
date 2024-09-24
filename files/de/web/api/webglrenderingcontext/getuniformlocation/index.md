---
title: "WebGLRenderingContext: getUniformLocation()-Methode"
short-title: getUniformLocation()
slug: Web/API/WebGLRenderingContext/getUniformLocation
l10n:
  sourceCommit: 4904c4f3e4ea8f8efd27e9cf51b51d5c5a03de26
---

{{APIRef("WebGL")}}

Als Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt die Methode **`getUniformLocation()`** des {{domxref("WebGLRenderingContext")}} die Position einer spezifischen **Uniform**-Variable zurück, die Teil eines bestimmten {{domxref("WebGLProgram")}} ist.

Die Uniform-Variable wird als ein {{domxref("WebGLUniformLocation")}}-Objekt zurückgegeben, welches ein undurchsichtiges Identifikationsmerkmal ist, das verwendet wird, um die Position in den Speicherbereichen der GPU anzugeben, in denen sich diese Uniform-Variable befindet.

Sobald Sie die Position der Uniform haben, können Sie die Uniform selbst mit einer der anderen Methoden zum Zugriff auf Uniforms aufrufen, indem Sie die Uniform-Position als eine der Eingaben übergeben:

- {{domxref("WebGLRenderingContext.getUniform", "getUniform()")}}
  - : Gibt den Wert der Uniform an der angegebenen Position zurück.
- [`WebGLRenderingContext.uniform[1234][fi][v]()`](/de/docs/Web/API/WebGLRenderingContext/uniform)
  - : Setzt den Wert der Uniform auf den angegebenen Wert, der eine einzelne Gleitkommazahl oder Ganzzahl oder einen 2-4 Komponenten-Vektor sein kann, der entweder als Liste von Werten oder als {{jsxref("Float32Array")}} oder {{jsxref("Int32Array")}} spezifiziert wird.
- [`WebGLRenderingContext.uniformMatrix[234][fv]()`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix)
  - : Setzt den Wert der Uniform auf die angegebene Matrix, möglicherweise unter Transposition. Der Wert wird als eine Sequenz von `GLfloat`-Werten oder als `Float32Array` dargestellt.

Die Uniform selbst wird im Shader-Programm unter Verwendung von GLSL deklariert.

## Syntax

```js-nolint
getUniformLocation(program, name)
```

### Parameter

- `program`
  - : Das {{domxref("WebGLProgram")}}, in dem die angegebene Uniform-Variable gefunden werden soll.
- `name`

  - : Ein String, der den Namen der Uniform-Variable angibt, deren Position zurückgegeben werden soll. Der Name darf keine Leerzeichen enthalten, und Sie können diese Funktion nicht verwenden, um die Position von Uniforms zu erhalten, die mit dem reservierten String `"gl_"` beginnen, da diese intern zur WebGL-Schicht gehören.

    Die möglichen Werte entsprechen den Uniform-Namen, die von {{domxref("WebGLRenderingContext.getActiveUniform()", "getActiveUniform")}} zurückgegeben werden; siehe diese Funktion für spezifische Informationen darüber, wie deklarierte Uniforms den Uniform-Positionsnamen zugeordnet werden.

    Zusätzlich sind für Uniforms, die als Arrays deklariert sind, folgende Namen ebenfalls gültig:

    - Der Uniform-Name ohne das `[0]`-Suffix. Z.B. ist die zurückgegebene Position für `arrayUniform` gleich der von `arrayUniform[0]`.
    - Der Uniform-Name, indiziert mit einer Ganzzahl. Z.B. würde die zurückgegebene Position für `arrayUniform[2]` direkt auf den dritten Eintrag der Uniform `arrayUniform` verweisen.

### Rückgabewert

Ein {{domxref("WebGLUniformLocation")}}-Wert, der die Position der benannten Variable angibt, falls sie existiert. Wenn die angegebene Variable nicht existiert, wird [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) stattdessen zurückgegeben.

Der `WebGLUniformLocation` ist ein undurchsichtiger Wert, der verwendet wird, um die Position in den Speicherbereichen der GPU zu identifizieren, an der sich die Uniform-Variable befindet. Mit diesem Wert können Sie andere WebGL-Methoden aufrufen, um auf den Wert der Uniform-Variable zuzugreifen.

> [!NOTE]
> Der Typ `WebGLUniformLocation` ist kompatibel mit dem `GLint`-Typ, wenn der Index oder die Position eines Uniform-Attributes angegeben wird.

### Fehler

Die folgenden Fehler können auftreten; um Fehler zu überprüfen, nachdem `getUniformLocation()` zurückgegeben wurde, rufen Sie {{domxref("WebGLRenderingContext.getError", "getError()")}} auf.

- `GL_INVALID_VALUE`
  - : Der `program`-Parameter ist kein Wert oder Objekt, das von WebGL generiert wurde.
- `GL_INVALID_OPERATION`
  - : Der `program`-Parameter entspricht keinem von WebGL generierten GLSL-Programm oder das angegebene Programm wurde nicht erfolgreich verlinkt.

## Beispiele

In diesem Beispiel, das der Methode `animateScene()` im Artikel [Ein grundlegendes 2D-WebGL-Animationsbeispiel](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example#drawing_and_animating_the_scene) entnommen ist, werden die Positionen von drei Uniforms aus dem Shading-Programm ermittelt und dann die Werte jeder der drei Uniforms gesetzt.

```js
gl.useProgram(shaderProgram);

uScalingFactor = gl.getUniformLocation(shaderProgram, "uScalingFactor");
uGlobalColor = gl.getUniformLocation(shaderProgram, "uGlobalColor");
uRotationVector = gl.getUniformLocation(shaderProgram, "uRotationVector");

gl.uniform2fv(uScalingFactor, currentScale);
gl.uniform2fv(uRotationVector, currentRotation);
gl.uniform4fv(uGlobalColor, [0.1, 0.7, 0.2, 1.0]);
```

> [!NOTE]
> Dieser Code-Schnipsel stammt aus [der Funktion `animateScene()`](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example#drawing_and_animating_the_scene) in "Ein grundlegendes 2D-WebGL-Animationsbeispiel."
> Sehen Sie sich diesen Artikel für das vollständige Beispiel an und um die resultierende Animation in Aktion zu sehen.

Nachdem das aktuelle Shading-Programm auf `shaderProgram` gesetzt wurde, ruft dieser Code die drei Uniforms `"uScalingFactor"`, `"uGlobalColor"` und `"uRotationVector"` ab, indem er `getUniformLocation()` einmal für jede Uniform aufruft.

Dann werden die Werte der drei Uniforms gesetzt:

- Die Uniform `uScalingFactor` — ein 2-Komponenten-Vertex — erhält die horizontalen und vertikalen Skalierungsfaktoren aus der Variable `currentScale`.
- Die Uniform `uRotationVector` wird auf den Inhalt der Variable `currentRotation` gesetzt. Auch dies ist ein 2-Komponenten-Vertex.
- Schließlich wird die Uniform `uGlobalColor` auf die Farbe `[0.1, 0.7, 0.2, 1.0]` gesetzt, wobei die Komponenten in diesem 4-Komponenten-Vektor die Werte von Rot, Grün, Blau und Alpha darstellen.

Nachdem dies getan wurde, werden beim nächsten Aufrufen der Shading-Funktionen deren eigene Variablen mit den Namen `uScalingFactor`, `uGlobalColor` und `uRotationVector` alle die Werte haben, die durch den JavaScript-Code bereitgestellt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getAttribLocation()")}}
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
- {{domxref("WebGLUniformLocation")}}
