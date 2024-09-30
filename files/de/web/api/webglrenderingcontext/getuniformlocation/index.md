---
title: "WebGLRenderingContext: Methode getUniformLocation()"
short-title: getUniformLocation()
slug: Web/API/WebGLRenderingContext/getUniformLocation
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Teil der [WebGL API](/de/docs/Web/API/WebGL_API), die Methode [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) **`getUniformLocation()`** gibt die Position einer spezifischen **uniform**-Variable zurück, die Teil eines bestimmten [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ist.

Die uniform-Variable wird als ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekt zurückgegeben, welches als undurchsichtiger Bezeichner verwendet wird, um zu spezifizieren, wo im GPU-Speicher diese uniform-Variable liegt.

Sobald Sie die Position des uniforms haben, können Sie auf das uniform selbst mit einer der anderen Zugriffs-Methoden zugreifen, indem Sie die Position des uniforms als eine der Eingaben übergeben:

- [`getUniform()`](/de/docs/Web/API/WebGLRenderingContext/getUniform)
  - : Gibt den Wert des uniforms an der angegebenen Position zurück.
- [`WebGLRenderingContext.uniform[1234][fi][v]()`](/de/docs/Web/API/WebGLRenderingContext/uniform)
  - : Setzt den Wert des uniforms auf den angegebenen Wert, der eine einzelne Gleitkomma- oder Ganzzahl oder ein 2-4 Komponenten-Vektor sein kann, der entweder als eine Liste von Werten oder als eine {{jsxref("Float32Array")}} oder {{jsxref("Int32Array")}} dargestellt wird.
- [`WebGLRenderingContext.uniformMatrix[234][fv]()`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix)
  - : Setzt den Wert des uniforms auf die angegebene Matrix, möglicherweise mit Transposition. Der Wert wird als eine Sequenz von `GLfloat`-Werten oder als `Float32Array` dargestellt.

Das uniform selbst wird im Shader-Programm unter Verwendung von GLSL deklariert.

## Syntax

```js-nolint
getUniformLocation(program, name)
```

### Parameter

- `program`
  - : Das [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), in dem die angegebene uniform-Variable lokalisiert werden soll.
- `name`

  - : Ein String, der den Namen der uniform-Variable angibt, deren Position zurückgegeben werden soll. Der Name darf keine Leerzeichen enthalten, und Sie können diese Funktion nicht verwenden, um die Position von Uniforms zu erhalten, die mit dem reservierten String `"gl_"` beginnen, da diese intern in der WebGL-Schicht sind.

    Die möglichen Werte entsprechen den uniform-Namen, die durch [`getActiveUniform`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform) zurückgegeben werden; sehen Sie sich diese Funktion für genauere Informationen darüber an, wie deklarierte uniforms auf uniform-Namen abgebildet werden.

    Zusätzlich sind für als Arrays deklarierte uniforms auch die folgenden Namen gültig:

    - Der uniform-Name ohne den `[0]`-Suffix. Z.B. ist die Position, die für `arrayUniform` zurückgegeben wird, äquivalent zu der für `arrayUniform[0]`.
    - Der uniform-Name, der mit einer Ganzzahl indexiert ist. Z.B. würde die Position, die für `arrayUniform[2]` zurückgegeben wird, direkt auf den dritten Eintrag des `arrayUniform` uniforms verweisen.

### Rückgabewert

Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Wert, der die Position der benannten Variable angibt, falls sie existiert. Falls die spezifizierte Variable nicht existiert, wird [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgegeben.

Die `WebGLUniformLocation` ist ein undurchsichtiger Wert, der verwendet wird, um die Position im GPU-Speicher, an der sich die uniform-Variable befindet, eindeutig zu identifizieren. Mit diesem Wert in der Hand können Sie andere WebGL-Methoden aufrufen, um auf den Wert der uniform-Variable zuzugreifen.

> [!NOTE]
> Der `WebGLUniformLocation`-Typ ist kompatibel mit dem `GLint`-Typ, wenn der Index oder die Position eines uniform-Attributs angegeben wird.

### Fehler

Die folgenden Fehler können auftreten; um nach Fehlern zu prüfen, nachdem `getUniformLocation()` zurückkehrt, rufen Sie [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) auf.

- `GL_INVALID_VALUE`
  - : Der `program`-Parameter ist kein Wert oder Objekt, das von WebGL generiert wurde.
- `GL_INVALID_OPERATION`
  - : Der `program`-Parameter entspricht keinem durch WebGL generierten GLSL-Programm oder das spezifizierte Programm wurde nicht erfolgreich verlinkt.

## Beispiele

In diesem Beispiel, entnommen aus der Methode `animateScene()` im Artikel [Ein einfaches 2D-WebGL-Animationsbeispiel](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example#drawing_and_animating_the_scene), werden die Positionen von drei uniforms aus dem Shaderprogramm abgerufen und dann die Werte jedes der drei uniforms gesetzt.

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
> Dieser Codeausschnitt stammt aus [der Funktion `animateScene()`](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example#drawing_and_animating_the_scene) im Artikel "Ein einfaches 2D-WebGL-Animationsbeispiel." Sehen Sie sich diesen Artikel für das vollständige Beispiel an und um die resultierende Animation in Aktion zu sehen.

Nachdem das aktuelle Shaderprogramm auf `shaderProgram` gesetzt wurde, ruft dieser Code die drei uniforms `"uScalingFactor"`, `"uGlobalColor"` und `"uRotationVector"` ab, indem `getUniformLocation()` jeweils einmal für jedes uniform aufgerufen wird.

Dann werden die Werte der drei uniforms gesetzt:

- Das uniform `uScalingFactor` — ein 2-Komponenten-Vektor — erhält die horizontalen und vertikalen Skalierungsfaktoren aus der Variablen `currentScale`.
- Das uniform `uRotationVector` wird auf den Inhalt der Variablen `currentRotation` gesetzt. Auch dies ist ein 2-Komponenten-Vektor.
- Schließlich wird das uniform `uGlobalColor` auf die Farbe `[0.1, 0.7, 0.2, 1.0]` gesetzt, wobei die Komponenten in diesem 4-Komponenten-Vektor die Werte von Rot, Grün, Blau und Alpha repräsentieren.

Nachdem dies getan ist, haben die eigenen Variablen der Shader-Funktionen `uScalingFactor`, `uGlobalColor` und `uRotationVector` alle die Werte, die vom JavaScript-Code bereitgestellt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation)
- [`WebGLRenderingContext.getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform)
- [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)
