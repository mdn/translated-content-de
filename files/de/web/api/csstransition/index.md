---
title: CSSTransition
slug: Web/API/CSSTransition
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Das **`CSSTransition`**-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert ein [`Animation`](/de/docs/Web/API/Animation)-Objekt, das für einen [CSS Übergang](/de/docs/Web/CSS/CSS_transitions) verwendet wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil, [`Animation`](/de/docs/Web/API/Animation)._

- [`CSSTransition.transitionProperty`](/de/docs/Web/API/CSSTransition/transitionProperty) {{ReadOnlyInline}}
  - : Gibt den Namen der Übergangs-CSS-Eigenschaft als Zeichenfolge zurück.

## Instanz-Methoden

_Dieses Interface erbt Methoden von seinem Elternteil, [`Animation`](/de/docs/Web/API/Animation)._

Keine spezifischen Methoden.

## Beispiele

### Untersuchen der zurückgegebenen CSSTransition

Der Übergang im folgenden Beispiel ändert die Breite des Kastens beim Hover. Ein Aufruf von [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück. In unserem Fall wird dadurch ein `CSSTransition`-Objekt zurückgegeben, das die erstellte Animation repräsentiert.

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
