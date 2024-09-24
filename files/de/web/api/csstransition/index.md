---
title: CSSTransition
slug: Web/API/CSSTransition
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Die **`CSSTransition`**-Schnittstelle der {{domxref('Web Animations API','','',' ')}} repräsentiert ein {{domxref("Animation")}}-Objekt, das für eine [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) verwendet wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, {{domxref("Animation")}}._

- {{domxref("CSSTransition.transitionProperty")}} {{ReadOnlyInline}}
  - : Gibt den Namen der CSS-Übergangseigenschaft als Zeichenkette zurück.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von ihrem Elternteil, {{domxref("Animation")}}._

Keine spezifischen Methoden.

## Beispiele

### Überprüfen der zurückgegebenen CSSTransition

Der Übergang im folgenden Beispiel ändert die Breite des Kastens bei Hover. Der Aufruf von {{domxref("Element.getAnimations()")}} gibt ein Array aller {{domxref("Animation")}}-Objekte zurück. In unserem Fall gibt dies ein `CSSTransition`-Objekt zurück, das die erstellte Animation darstellt.

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
