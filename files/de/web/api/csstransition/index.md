---
title: CSSTransition
slug: Web/API/CSSTransition
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Die **`CSSTransition`**-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert ein [`Animation`](/de/docs/Web/API/Animation)-Objekt, das für eine [CSS Transition](/de/docs/Web/CSS/CSS_transitions) verwendet wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`Animation`](/de/docs/Web/API/Animation)._

- [`CSSTransition.transitionProperty`](/de/docs/Web/API/CSSTransition/transitionProperty) {{ReadOnlyInline}}
  - : Gibt den Namen der CSS-Eigenschaft der Transition als Zeichenkette zurück.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von ihrem Elternteil, [`Animation`](/de/docs/Web/API/Animation)._

Keine spezifischen Methoden.

## Beispiele

### Überprüfung der zurückgegebenen CSSTransition

Die Transition im folgenden Beispiel ändert die Breite der Box beim Hover. Der Aufruf von [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) gibt ein Array von allen [`Animation`](/de/docs/Web/API/Animation)-Objekten zurück. In unserem Fall wird ein `CSSTransition`-Objekt zurückgegeben, das die erstellte Animation darstellt.

```css
.box {
  background-color: #165baa;
  color: #fff;
  width: 100px;
  height: 100px;
  transition: width 4s;
}

.box:hover {
  width: 200px;
}
```

```js
const item = document.querySelector(".box");
item.addEventListener("transitionrun", () => {
  let animations = document.querySelector(".box").getAnimations();
  console.log(animations[0]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
