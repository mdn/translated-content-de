---
title: CSSTransition
slug: Web/API/CSSTransition
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

Das **`CSSTransition`**-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert ein [`Animation`](/de/docs/Web/API/Animation)-Objekt, das für eine [CSS-Transition](/de/docs/Web/CSS/Guides/Transitions) verwendet wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil, [`Animation`](/de/docs/Web/API/Animation)._

- [`CSSTransition.transitionProperty`](/de/docs/Web/API/CSSTransition/transitionProperty) {{ReadOnlyInline}}
  - : Gibt den Namen der CSS-Transition-Eigenschaft als String zurück.

## Instanz-Methoden

_Dieses Interface erbt Methoden von seinem Elternteil, [`Animation`](/de/docs/Web/API/Animation)._

Keine spezifischen Methoden.

## Beispiele

### Untersuchen der zurückgegebenen CSSTransition

Die Transition im folgenden Beispiel ändert die Breite des Kastens bei Hover. Der Aufruf von [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück. In unserem Fall wird ein `CSSTransition`-Objekt zurückgegeben, das die erstellte Animation repräsentiert.

```css
.box {
  background-color: #165baa;
  color: white;
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
