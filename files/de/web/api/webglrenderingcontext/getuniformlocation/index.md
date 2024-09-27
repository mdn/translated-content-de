---
title: "WebGLRenderingContext: getUniformLocation() Methode"
short-title: getUniformLocation()
slug: Web/API/WebGLRenderingContext/getUniformLocation
l10n:
  sourceCommit: 4904c4f3e4ea8f8efd27e9cf51b51d5c5a03de26
---

{{APIRef("WebGL")}}

Teil der [WebGL API](/de/docs/Web/API/WebGL_API), die Methode [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) **`getUniformLocation()`** gibt den Speicherort einer bestimmten **uniform** Variable innerhalb eines gegebenen [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) zurück.

Die uniform-Variable wird als ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation) Objekt zurückgegeben, welches ein undurchsichtiger Bezeichner ist, der verwendet wird, um zu spezifizieren, wo im Speicher der GPU diese uniform Variable sich befindet.

Sobald Sie den Speicherort der uniform-Variable haben, können Sie auf die uniform-Variable selbst mit einer der anderen Zugriffs-Methoden zugreifen und dabei den Standort der uniform-Variable als einen der Eingabewerte übergeben:

- [`getUniform()`](/de/docs/Web/API/WebGLRenderingContext/getUniform)
  - : Gibt den Wert der uniform-Variable an dem angegebenen Speicherort zurück.
- [`WebGLRenderingContext.uniform[1234][fi][v]()`](/de/docs/Web/API/WebGLRenderingContext/uniform)
  - : Setzt den Wert der uniform-Variable auf den angegebenen Wert, welcher eine einzelne Fließkomma- oder ganze Zahl oder ein Vektor mit 2-4 Komponenten sein kann. Diese können entweder als Liste von Werten oder als {{jsxref("Float32Array")}} oder {{jsxref("Int32Array")}} angegeben werden.
- [`WebGLRenderingContext.uniformMatrix[234][fv]()`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix)
  - : Setzt den Wert der uniform-Variable auf die angegebene Matrix, möglicherweise mit Transposition. Der Wert wird als eine Folge von `GLfloat` Werten oder als ein `Float32Array` dargestellt.

Die uniform-Variable selbst wird im Shader-Programm mit GLSL deklariert.

## Syntax

```js-nolint
getUniformLocation(program, name)
```

### Parameter

- `program`
  - : Das [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), in dem die angegebene uniform-Variable gefunden werden soll.
- `name`

  - : Ein String, der den Namen der uniform-Variable angibt, deren Speicherort zurückgegeben werden soll. Der Name darf keine Leerzeichen enthalten, und Sie können diese Funktion nicht verwenden, um den Speicherort von uniform-Variablen zu erhalten, die mit dem reservierten String `"gl_"` beginnen, da diese für die WebGL-Schicht intern sind.

    Die möglichen Werte entsprechen den uniform-Namen, die von [`getActiveUniform`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform) zurückgegeben werden; siehe diese Funktion für Einzelheiten darüber, wie deklarierte uniforms auf uniform-Ortnamen abgebildet werden.

    Zusätzlich sind für als Arrays deklarierte uniforms die folgenden Namen auch gültig:

    - Der uniform-Name ohne den `[0]` Suffix. Z.B. der zurückgegebene Speicherort für `arrayUniform` ist gleichbedeutend mit dem für `arrayUniform[0]`.
    - Der uniform-Name indiziert mit einer Ganzzahl. Z.B. der für `arrayUniform[2]` zurückgegebene Speicherort würde direkt auf den dritten Eintrag des `arrayUniform` uniforms zeigen.

### Rückgabewert

Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation) Wert, der den Speicherort der benannten Variable anzeigt, falls sie existiert. Falls die angegebene Variable nicht existiert, wird [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) stattdessen zurückgegeben.

Die `WebGLUniformLocation` ist ein undurchsichtiger Wert, der verwendet wird, um den Ort im Speicher der GPU eindeutig zu identifizieren, an dem die uniform-Variable gespeichert ist. Mit diesem Wert in der Hand können Sie andere WebGL-Methoden aufrufen, um den Wert der uniform-Variable zu archivieren.

> [!NOTE]
> Der `WebGLUniformLocation` Typ ist kompatibel mit dem `GLint` Typ, wenn der Index oder Speicherort eines uniform-Attributs angegeben wird.

### Fehler

Die folgenden Fehler können auftreten; um nach Fehlern zu prüfen, nachdem `getUniformLocation()` zurückgegeben wurde, rufen Sie [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) auf.

- `GL_INVALID_VALUE`
  - : Der `program` Parameter ist kein von WebGL generierter Wert oder Objekt.
- `GL_INVALID_OPERATION`
  - : Der `program` Parameter entspricht keinem von WebGL generierten GLSL-Programm, oder das angegebene Programm wurde nicht erfolgreich verknüpft.

## Beispiele

In diesem Beispiel, entnommen aus der `animateScene()` Methode im Artikel [Ein einfaches Beispiel für eine 2D-WebGL-Animation](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example#drawing_and_animating_the_scene), werden die Speicherorte von drei uniforms aus dem Shader-Programm bezogen und dann die Werte für jede der drei uniforms gesetzt.

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
> Dieser Codeausschnitt stammt aus [der Funktion `animateScene()`](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example#drawing_and_animating_the_scene) im Artikel "Ein einfaches Beispiel für eine 2D-WebGL-Animation."
> Siehe diesen Artikel für das vollständige Beispiel und um die resultierende Animation in Aktion zu sehen.

Nachdem das aktuelle Shader-Programm auf `shaderProgram` gesetzt wurde, holt dieser Code die drei uniforms `"uScalingFactor"`, `"uGlobalColor"` und `"uRotationVector"` und ruft `getUniformLocation()` einmal für jedes uniform auf.

Dann werden die Werte der drei uniforms gesetzt:

- Das `uScalingFactor` uniform — ein 2-Komponenten Vektor — erhält die horizontalen und vertikalen Skalierungsfaktoren aus der Variable `currentScale`.
- Das uniform `uRotationVector` wird auf den Inhalt der Variable `currentRotation` gesetzt. Auch dies ist ein 2-Komponenten Vektor.
- Schließlich wird das uniform `uGlobalColor` auf die Farbe `[0.1, 0.7, 0.2, 1.0]` gesetzt, wobei die Komponenten in diesem 4-Komponenten Vektor die Werte von Rot, Grün, Blau und Alpha darstellen.

Nachdem dies getan ist, werden bei den nächsten Aufrufen der Shader-Funktionen ihre eigenen Variablen namens `uScalingFactor`, `uGlobalColor` und `uRotationVector` alle die von dem JavaScript-Code bereitgestellten Werte haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation)
- [`WebGLRenderingContext.getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform)
- [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)
