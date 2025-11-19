---
title: "WebGLRenderingContext: getUniformLocation() Methode"
short-title: getUniformLocation()
slug: Web/API/WebGLRenderingContext/getUniformLocation
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Teil der [WebGL API](/de/docs/Web/API/WebGL_API), gibt die Methode [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) **`getUniformLocation()`** den Standort einer spezifischen **uniform**-Variable zurück, die Teil eines bestimmten [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ist.

Die uniform-Variable wird als ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekt zurückgegeben, das ein undurchsichtiges Identifikationsmittel ist, das verwendet wird, um zu spezifizieren, wo sich diese uniform-Variable im Speicher der GPU befindet.

Sobald Sie den Standort der uniform-Variable haben, können Sie auf die uniform-Variable selbst mit einer der anderen uniform-Zugriffsmethoden zugreifen, indem Sie den Standort der uniform-Variable als einen der Eingänge übergeben:

- [`getUniform()`](/de/docs/Web/API/WebGLRenderingContext/getUniform)
  - : Gibt den Wert der uniform-Variable an dem angegebenen Standort zurück.
- [`WebGLRenderingContext.uniform[1234][fi][v]()`](/de/docs/Web/API/WebGLRenderingContext/uniform)
  - : Setzt den Wert der uniform-Variable auf den angegebenen Wert, der eine einzelne Gleitkommazahl oder Ganzzahl sein kann, oder einen 2-4 Komponenten-Vektor, der entweder als eine Liste von Werten oder als ein {{jsxref("Float32Array")}} oder {{jsxref("Int32Array")}} angegeben ist.
- [`WebGLRenderingContext.uniformMatrix[234][fv]()`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix)
  - : Setzt den Wert der uniform-Variable auf die angegebene Matrix, möglicherweise mit Transposition. Der Wert wird als eine Sequenz von `GLfloat`-Werten oder als `Float32Array` repräsentiert.

Die uniform-Variable selbst wird in dem Shader-Programm unter Verwendung von GLSL deklariert.

## Syntax

```js-nolint
getUniformLocation(program, name)
```

### Parameter

- `program`
  - : Das [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), in dem die angegebene uniform-Variable zu lokalisieren ist.
- `name`
  - : Ein String, der den Namen der uniform-Variable angibt, deren Standort zurückgegeben werden soll. Der Name darf keine Leerzeichen enthalten, und Sie können diese Funktion nicht verwenden, um den Standort von uniform-Variablen zu erhalten, die mit dem reservierten String `"gl_"` beginnen, da diese intern in der WebGL-Schicht sind.

    Die möglichen Werte entsprechen den uniform-Namen, die von [`getActiveUniform`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform) zurückgegeben werden. Sehen Sie sich diese Funktion für spezifische Informationen darüber an, wie deklarierte uniforms zu uniform-Standortnamen abgebildet werden.

    Zusätzlich sind für als Arrays deklarierte uniforms auch folgende Namen gültig:
    - Der uniform-Name ohne den `[0]`-Suffix. Z.B. der Standort, der für `arrayUniform` zurückgegeben wird, entspricht dem für `arrayUniform[0]`.
    - Der uniform-Name mit einem Integer-Indizierung. Z.B. der Standort, der für `arrayUniform[2]` zurückgegeben wird, würde direkt auf den dritten Eintrag der `arrayUniform`-uniform-Variable zeigen.

### Rückgabewert

Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Wert, der den Standort der benannten Variable angibt, wenn sie existiert. Wenn die angegebene Variable nicht existiert, wird [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgegeben.

Die `WebGLUniformLocation` ist ein undurchsichtiger Wert, der zur eindeutigen Identifizierung des Standorts im GPU-Speicher verwendet wird, an dem sich die uniform-Variable befindet. Mit diesem Wert in der Hand können Sie andere WebGL-Methoden aufrufen, um auf den Wert der uniform-Variable zuzugreifen.

> [!NOTE]
> Der `WebGLUniformLocation`-Typ ist mit dem `GLint`-Typ kompatibel, wenn Sie den Index oder Standort eines uniform-Attributs spezifizieren.

### Fehler

Die folgenden Fehler können auftreten; um nach `getUniformLocation()` nach Fehlern zu überprüfen, rufen Sie [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) auf.

- `GL_INVALID_VALUE`
  - : Der `program`-Parameter ist kein Wert oder Objekt, das von WebGL generiert wurde.
- `GL_INVALID_OPERATION`
  - : Der `program`-Parameter entspricht keinem von WebGL generierten GLSL-Programm oder das angegebene Programm wurde nicht erfolgreich verknüpft.

## Beispiele

In diesem Beispiel, entnommen aus der `animateScene()`-Methode im Artikel [Ein einfaches 2D-WebGL-Animationsbeispiel](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example#drawing_and_animating_the_scene), werden die Standorte von drei uniforms aus dem Shader-Programm ermittelt und dann der Wert jedes der drei uniforms festgelegt.

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
> Dieses Code-Snippet stammt aus [der Funktion `animateScene()`](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example#drawing_and_animating_the_scene) in "Ein einfaches 2D-WebGL-Animationsbeispiel." Siehe diesen Artikel für das vollständige Beispiel und um die resultierende Animation in Aktion zu sehen.

Nach dem Setzen des aktuellen Shader-Programms auf `shaderProgram`, holt dieser Code die drei uniforms `"uScalingFactor"`, `"uGlobalColor"` und `"uRotationVector"`, indem er `getUniformLocation()` einmal für jede uniform aufruft.

Dann werden die Werte der drei uniforms gesetzt:

- Die `uScalingFactor`-uniform — ein 2-Komponenten-Vektor — erhält die horizontalen und vertikalen Skalierungsfaktoren aus der Variable `currentScale`.
- Die uniform `uRotationVector` wird auf den Inhalt der Variablen `currentRotation` gesetzt. Auch dies ist ein 2-Komponenten-Vektor.
- Schließlich wird die uniform `uGlobalColor` auf die Farbe `[0.1, 0.7, 0.2, 1.0]` gesetzt, wobei die Komponenten in diesem 4-Komponenten-Vektor die Werte von Rot, Grün, Blau und Alpha repräsentieren.

Nachdem dies getan wurde, werden bei den nächsten Aufrufen der Shader-Funktionen ihre eigenen Variablen namens `uScalingFactor`, `uGlobalColor` und `uRotationVector` alle die Werte haben, die vom JavaScript-Code bereitgestellt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation)
- [`WebGLRenderingContext.getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform)
- [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)
