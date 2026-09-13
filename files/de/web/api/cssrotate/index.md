---
title: CSSRotate
slug: Web/API/CSSRotate
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`CSSRotate`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert den Wert einer Rotationsfunktion in der {{cssxref("transform")}}-Eigenschaft in CSS.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSRotate()`](/de/docs/Web/API/CSSRotate/CSSRotate)
  - : Erstellt ein neues `CSSRotate`-Objekt.

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von seiner übergeordneten Schnittstelle [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)._

- [`angle`](/de/docs/Web/API/CSSRotate/angle)
  - : Repräsentiert den Rotationswinkel.
- [`x`](/de/docs/Web/API/CSSRotate/x)
  - : Repräsentiert die x-Koordinate des Vektors der Rotationsachse.
- [`y`](/de/docs/Web/API/CSSRotate/y)
  - : Repräsentiert die y-Koordinate des Vektors der Rotationsachse.
- [`z`](/de/docs/Web/API/CSSRotate/z)
  - : Repräsentiert die z-Koordinate des Vektors der Rotationsachse.

## Instanzmethoden

_Erbt außerdem Methoden von seiner übergeordneten Schnittstelle [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)._

## Beschreibung

Die **`CSSRotate`**-Schnittstelle wird verwendet, um Rotationsfunktionen in einer Liste von {{cssxref("transform-function")}}s zu repräsentieren, die für eine CSS-{{cssxref("transform")}}-Eigenschaft definiert sind.
Dies umfasst Rotationen, die mit folgenden Funktionen deklariert werden: {{cssxref("transform-function/rotate", "rotate()")}}, {{cssxref("transform-function/rotate3d", "rotate3d()")}}, {{cssxref("transform-function/rotateX", "rotateX()")}}, {{cssxref("transform-function/rotateY", "rotateY()")}} oder {{cssxref("transform-function/rotateZ", "rotateZ()")}}.

Die Liste selbst wird durch ein [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Objekt repräsentiert, das iteriert werden kann, um die Objekte zu erhalten, die die einzelnen Funktionen repräsentieren (und möglicherweise Objekte enthält, die andere Transformationen repräsentieren).

Eine Rotation wird durch einen Achsenvektor (`x`, `y`, `z`) und einen `angle` der Rotation um diese Achse definiert.
Die Konstruktorform mit 2 Argumenten ist eine Kurzform für eine Rotation um die z-Achse: Sie setzt die Achse auf `(0, 0, 1)`. Deshalb entspricht ein 2D-CSS-{{cssxref("transform-function/rotate", "rotate()")}} `rotate3d(0, 0, 1, angle)`.
Mit der Form mit 4 Argumenten können Sie jede beliebige Achse für eine beliebige 3D-Rotation angeben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel erstellt ein `CSSRotate` und gibt dessen Struktur und Eigenschaften im Protokoll aus.

```js
const rotate = new CSSRotate(CSS.deg(45));

console.log(rotate); // CSSRotate {x: CSSUnitValue, y: CSSUnitValue, z: CSSUnitValue, angle: CSSUnitValue, is2D: true}
console.log(rotate.angle.value, rotate.angle.unit); // 45 "deg"
console.log(rotate.x.value, rotate.y.value, rotate.z.value); // 0 0 1
console.log(rotate.toString()); // "rotate(45deg)"
```

### Erhöhen einer Rotation

Dieses Beispiel demonstriert, wie `CSSRotate` verwendet werden könnte.

Beachten Sie, dass es ausgeblendeten Protokollierungscode gibt, der für das Beispiel nicht relevant ist.

#### HTML

Zuerst definieren wir die Elemente für das zu rotierende Feld sowie die Schaltfläche, mit der wir es drehen.

```html
<div id="increment-box"></div>
<button id="increment-button">Rotate 15°</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

Das CSS für das Feld, das wir drehen werden, ist unten dargestellt.
Beachten Sie, dass das Feld anfangs um 15 Grad gedreht ist.

```css
#increment-box {
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
  background-color: #66d;
  transform: rotate(15deg);
  transition: transform 0.3s ease;
}
```

```css hidden
#log {
  height: 80px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Der Code ruft zunächst eine Referenz auf das Feld ab, das wir drehen, und verwendet dann [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap), um den anfänglichen Transformationswinkel abzurufen und zu protokollieren.

```js
const incrementBox = document.getElementById("increment-box");

let angle = incrementBox.computedStyleMap().get("transform")[0].angle.value;
log(`initial angle: ${angle}deg`);
```

Anschließend rufen wir die Schaltfläche ab und fügen einen Handler hinzu, der sie bei jedem Klick auf die Schaltfläche um 15 Grad dreht.
Beachten Sie, dass wir `CSSRotate` verwenden, um die Rotation zu definieren, sie einem [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) hinzufügen und dieses dann als Stil für das Feld festlegen.

```js
const incrementButton = document.getElementById("increment-button");
incrementButton.addEventListener("click", () => {
  angle = (angle + 15) % 360;
  const rotate = new CSSRotate(CSS.deg(angle));

  incrementBox.attributeStyleMap.set(
    "transform",
    new CSSTransformValue([rotate]),
  );
  log(`angle: ${angle}deg`);
});
```

#### Ergebnis

Dieses Beispiel beginnt mit einem Feld, das in CSS bereits um `15deg` gedreht ist.
Klicken Sie auf die Schaltfläche, um es zu drehen.

{{EmbedLiveSample("Incrementing a rotation", 120, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)
- [`CSSScale`](/de/docs/Web/API/CSSScale)
- [`CSSSkew`](/de/docs/Web/API/CSSSkew)
- [`CSSSkewX`](/de/docs/Web/API/CSSSkewX)
- [`CSSSkewY`](/de/docs/Web/API/CSSSkewY)
- [`CSSPerspective`](/de/docs/Web/API/CSSPerspective)
- [`CSSMatrixComponent`](/de/docs/Web/API/CSSMatrixComponent)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
