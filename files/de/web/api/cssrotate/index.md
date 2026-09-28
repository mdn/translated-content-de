---
title: CSSRotate
slug: Web/API/CSSRotate
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Schnittstelle **`CSSRotate`** der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert den Wert einer Rotationsfunktion in der CSS-Eigenschaft {{cssxref("transform")}}.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSRotate()`](/de/docs/Web/API/CSSRotate/CSSRotate)
  - : Erstellt ein neues `CSSRotate`-Objekt.

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von der übergeordneten Schnittstelle [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)._

- [`angle`](/de/docs/Web/API/CSSRotate/angle)
  - : Repräsentiert den Rotationswinkel.
- [`x`](/de/docs/Web/API/CSSRotate/x)
  - : Repräsentiert die x-Koordinate des Rotationsachsenvektors.
- [`y`](/de/docs/Web/API/CSSRotate/y)
  - : Repräsentiert die y-Koordinate des Rotationsachsenvektors.
- [`z`](/de/docs/Web/API/CSSRotate/z)
  - : Repräsentiert die z-Koordinate des Rotationsachsenvektors.

## Instanzmethoden

_Erbt außerdem Methoden von der übergeordneten Schnittstelle [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)._

## Beschreibung

Die Schnittstelle **`CSSRotate`** wird verwendet, um Rotationsfunktionen in einer Liste von {{cssxref("transform-function")}}s darzustellen, die für eine CSS-Eigenschaft {{cssxref("transform")}} definiert sind.
Dazu gehören Rotationen, die mit {{cssxref("transform-function/rotate", "rotate()")}}, {{cssxref("transform-function/rotate3d", "rotate3d()")}}, {{cssxref("transform-function/rotateX", "rotateX()")}}, {{cssxref("transform-function/rotateY", "rotateY()")}} oder {{cssxref("transform-function/rotateZ", "rotateZ()")}} deklariert wurden.

Die Liste selbst wird durch ein [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Objekt repräsentiert. Sie können darüber iterieren, um die Objekte zu erhalten, die die einzelnen Funktionen repräsentieren. Die Liste kann auch Objekte enthalten, die andere Transformationen repräsentieren.

Eine Rotation wird durch einen Achsenvektor (`x`, `y`, `z`) und einen Rotationswinkel `angle` um diese Achse definiert.
Die Konstruktorform mit zwei Argumenten ist eine Kurzform für eine Rotation um die z-Achse: Sie setzt den Achsenvektor auf `(0, 0, 1)`. Deshalb entspricht eine zweidimensionale CSS-Funktion {{cssxref("transform-function/rotate", "rotate()")}} dem Ausdruck `rotate3d(0, 0, 1, angle)`.
Mit der Form mit vier Argumenten können Sie für eine beliebige 3D-Rotation jede beliebige Achse angeben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel erstellt ein `CSSRotate`-Objekt und gibt dessen Struktur und Eigenschaften im Protokoll aus.

```js
const rotate = new CSSRotate(CSS.deg(45));

console.log(rotate); // CSSRotate {x: CSSUnitValue, y: CSSUnitValue, z: CSSUnitValue, angle: CSSUnitValue, is2D: true}
console.log(rotate.angle.value, rotate.angle.unit); // 45 "deg"
console.log(rotate.x.value, rotate.y.value, rotate.z.value); // 0 0 1
console.log(rotate.toString()); // "rotate(45deg)"
```

### Schrittweises Erhöhen einer Rotation

Dieses Beispiel zeigt, wie `CSSRotate` verwendet werden kann.

Beachten Sie, dass es verborgenen Protokollierungscode gibt, der für das Beispiel nicht relevant ist.

#### HTML

Zuerst definieren wir die Elemente für das zu rotierende Kästchen und die Schaltfläche, mit der wir es rotieren.

```html
<div id="increment-box"></div>
<button id="increment-button">Rotate 15°</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

Das CSS für das Kästchen, das wir rotieren, ist unten dargestellt.
Beachten Sie, dass das Kästchen anfangs um 15 Grad gedreht ist.

```css
#increment-box {
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
  background-color: #6666dd;
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

Der Code ruft zunächst eine Referenz auf das Kästchen ab, das wir rotieren. Anschließend verwendet er [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap), um den anfänglichen Rotationswinkel abzurufen und im Protokoll auszugeben.

```js
const incrementBox = document.getElementById("increment-box");

let angle = incrementBox.computedStyleMap().get("transform")[0].angle.value;
log(`initial angle: ${angle}deg`);
```

Dann rufen wir die Schaltfläche ab und fügen einen Handler hinzu, der das Kästchen bei jedem Klick auf die Schaltfläche um 15 Grad weiterdreht.
Beachten Sie, dass wir die Rotation mit `CSSRotate` definieren, sie einem [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) hinzufügen und diesen Wert dann als Stil für das Kästchen festlegen.

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

Zu Beginn dieses Beispiels ist das Kästchen durch CSS bereits um `15deg` gedreht.
Klicken Sie auf die Schaltfläche, um es weiterzudrehen.

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
