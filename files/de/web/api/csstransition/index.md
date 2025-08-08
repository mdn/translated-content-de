---
title: CSSTransition
slug: Web/API/CSSTransition
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("Web Animations")}}

Die **`CSSTransition`**-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert ein [`Animation`](/de/docs/Web/API/Animation)-Objekt, das für eine [CSS Transition](/de/docs/Web/CSS/CSS_transitions) verwendet wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem übergeordneten Element, [`Animation`](/de/docs/Web/API/Animation)._

- [`CSSTransition.transitionProperty`](/de/docs/Web/API/CSSTransition/transitionProperty) {{ReadOnlyInline}}
  - : Gibt den Namen der CSS-Übergangseigenschaft als Zeichenkette zurück.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von ihrem übergeordneten Element, [`Animation`](/de/docs/Web/API/Animation)._

Keine spezifischen Methoden.

## Beispiele

### Inspizieren der zurückgegebenen CSSTransition

Die Transition im folgenden Beispiel ändert die Breite des Kastens beim Hover. Der Aufruf von [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück. In unserem Fall wird ein `CSSTransition`-Objekt zurückgegeben, das die erstellte Animation repräsentiert.

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
