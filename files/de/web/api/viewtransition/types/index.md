---
title: "ViewTransition: types-Eigenschaft"
short-title: types
slug: Web/API/ViewTransition/types
l10n:
  sourceCommit: 8f7fa9e7aef0399c7a7f8e5a20476a0c2f287640
---

{{APIRef("View Transition API")}}

Die schreibgeschützte **`types`**-Eigenschaft der [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Schnittstelle ist ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet), das es ermöglicht, die [Typsätze](/de/docs/Web/API/View_Transition_API/Using_types), die auf die Ansichtstransition angewendet wurden, zuzugreifen und zu ändern.

## Wert

Ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet). Dies ist ein [Set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), was bedeutet, dass Sie die auf eine Ansichtstransition angewendeten Typen direkt mithilfe der verfügbaren Methoden wie `clear()`, `add()` und `delete()` ändern können.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel enthält ein grundlegendes Dokument, das zwischen zwei verschiedenen Inhaltsstücken wechselt. Wir bieten drei Schaltflächen an, von denen jede die Transition auslöst, jedoch mit einem unterschiedlichen `type`, um eine andere Art von Animation auf die Transition anzuwenden.

#### HTML

Das Markup enthält ein einzelnes {{htmlelement("p")}}-Element, um den Inhalt zu enthalten, und drei {{htmlelement("button")}}-Elemente, um die Ansichtstransition auszulösen.

```html live-sample___basic_usage
<p>This is my first piece of content. I hope you like it!</p>
<div>
  <button id="default">Default</button>
  <button id="slide">Slide</button>
  <button id="flip">Flip</button>
</div>
```

#### JavaScript

In unserem Skript erstellen wir Referenzen auf die Schaltflächen und den Inhaltsabsatz und speichern dann unsere zwei verschiedenen Inhaltsstücke in zwei Konstanten.

```js live-sample___basic_usage
const defaultBtn = document.getElementById("default");
const slideBtn = document.getElementById("slide");
const flipBtn = document.getElementById("flip");
const content = document.querySelector("p");

const first = "This is my first piece of content. I hope you like it!";
const second =
  "This is my second piece of content. Is it better than the first?";
```

Als Nächstes fügen wir den Schaltflächen `click`-Ereignislistener hinzu; wenn sie angeklickt werden, wird die Funktion `changeContent()` ausgeführt.

```js live-sample___basic_usage
defaultBtn.addEventListener("click", changeContent);
slideBtn.addEventListener("click", changeContent);
flipBtn.addEventListener("click", changeContent);
```

Schließlich definieren wir die Funktion `changeContent()`. Wir beginnen damit, die Methode [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) aufzurufen, um den Inhalt zu aktualisieren und die Transition zu starten. Das zurückgegebene `ViewTransition`-Objekt wird in der Konstanten `vt` gespeichert. Innerhalb von `startViewTransition()` überprüft der `update`-Callback, ob der `textContent` des Absatzes gleich dem String `first` ist. Wenn ja, setzen wir es auf den String `second`. Wenn nicht, setzen wir es auf den String `first`.

Im zweiten Teil der Funktion `changeContent()` überprüfen wir den Wert des `click`-Ereignisziels:

- Wenn es die "Slide"-Schaltfläche ist, fügen wir mithilfe von `vt.types.add("slide")` einen `slide`-Typ zu den Typen der aktiven Ansichtstransition hinzu.
- Wenn es die "Flip"-Schaltfläche ist, fügen wir mithilfe von `vt.types.add("flip")` einen `flip`-Typ zu den Typen der aktiven Ansichtstransition hinzu.
- Wir unternehmen nichts, wenn die "Default"-Schaltfläche gedrückt wurde. In diesem Fall möchten wir die Standard-Cross-Fade-Animation der Ansichtstransition verwenden.

```js live-sample___basic_usage
function changeContent(e) {
  const vt = document.startViewTransition({
    update() {
      content.textContent === first
        ? (content.textContent = second)
        : (content.textContent = first);
    },
  });

  if (e.target === slideBtn) {
    vt.types.add("slide");
  } else if (e.target === flipBtn) {
    vt.types.add("flip");
  }
}
```

#### CSS

In unseren Styles beginnen wir mit der Erstellung einer Reihe verschachtelter Regeln unter Verwendung der Pseudoklasse `:active-view-transition`. Diese Styles werden immer dann angewendet, wenn eine Ansichtstransition aktiv ist, unabhängig von deren Typen. Wir setzen eine {{cssxref("view-transition-name")}} von `none` auf das {{cssxref(":root")}}, da wir nicht möchten, dass irgendwelche Elemente erfasst und animiert werden, außer dem `<p>`-Element, dem ein `view-transition-name` von `content` zugewiesen wird.

```css hidden live-sample___basic_usage
html,
body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

div {
  display: flex;
  width: 60%;
  justify-content: space-between;
}

p {
  font-size: 1.7em;
  width: 60%;
  color: blue;
  background-color: white;
  margin-top: 0;
}
```

```css live-sample___basic_usage
html:active-view-transition {
  :root {
    view-transition-name: none;
  }
  p {
    view-transition-name: content;
  }
}
```

Dann verwenden wir die Pseudoklasse `:active-view-transition-type()`, um zwei Blöcke verschachtelter Styles zu erstellen: Der erste wird nur angewendet, wenn die aktive Ansichtstransition einen Typ von `slide` hat, und der zweite wird nur angewendet, wenn die aktive Ansichtstransition einen Typ von `flip` hat. In jedem Block verwenden wir die {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Pseudoelemente, um benutzerdefinierte {{cssxref("animation-name")}}-Werte auf die `slide`-Erfassungsgruppe der ausgehenden und eingehenden Ansichten anzuwenden.

Als Ergebnis:

- Wenn der Transitionstyp `slide` ist, gleitet die alte Inhaltsansicht nach links heraus und die neue Inhaltsansicht gleitet von rechts herein.
- Wenn der Transitionstyp `flip` ist, wird die alte Inhaltsansicht horizontal um 90 Grad gedreht, sodass sie nicht mehr sichtbar ist, während die neue Inhaltsansicht zurückdreht.
- In jedem anderen Fall werden die Standard-Cross-Fade-Transition-Animationen verwendet.

```css live-sample___basic_usage
html:active-view-transition-type(slide) {
  &::view-transition-old(content) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(content) {
    animation-name: slide-in-from-right;
  }
}

html:active-view-transition-type(flip) {
  &::view-transition-old(content) {
    animation-name: flip-out;
  }
  &::view-transition-new(content) {
    animation-name: flip-in;
    animation-delay: 0.6s;
  }
}
```

Schließlich verwenden wir {{cssxref("@keyframes")}}-Animationsblöcke, um die zuvor referenzierten Animationen zu definieren. Wir setzen auch eine benutzerdefinierte {{cssxref("animation-duration")}} auf alle Erfassungsgruppen, um die Transition-Animationen etwas zu verlangsamen.

```css live-sample___basic_usage
@keyframes slide-out-to-left {
  to {
    translate: -100vw 0;
  }
}
@keyframes slide-in-from-right {
  from {
    translate: 100vw 0;
  }
}

@keyframes flip-out {
  to {
    rotate: x 90deg;
  }
}
@keyframes flip-in {
  from {
    rotate: x -90deg;
  }
}

::view-transition-group(*) {
  animation-duration: 0.6s;
}
```

#### Ergebnis

Das Beispiel wird so gerendert:

{{EmbedLiveSample("basic-usage", "100%", 200)}}

Versuchen Sie, jede Schaltfläche zu klicken und beachten Sie, wie sich die DOM-Änderungen in jedem Fall identisch sind, die Animation jedoch unterschiedlich ist. Das liegt daran, dass je nach gedrückter Schaltfläche ein unterschiedlicher Transitionstyp gesetzt wird (oder kein Transitionstyp im "Default"-Fall).

### Angewandtes Beispiel

Sehen Sie sich unser [MPA-Beispiel mit mehreren Transitionstypen](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types)), das zeigt, wie unterschiedliche Animationen auf dokumentübergreifende Ansichtstransitionen je nach Navigationstyp angewendet werden können, der durch unterschiedliche Transitionstypen dargestellt wird. Der Transitionstyp wird während der Navigation mit JavaScript ermittelt.

[Anwenden verschiedener dokumentübergreifender Typen mithilfe der Seitenwechsel- und Seitenauslöser-Ereignisse](/de/docs/Web/API/View_Transition_API/Using_types#applying_different_cross-document_types_using_pageswap_and_pagereveal_events) bietet eine Schritt-für-Schritt-Anleitung zu diesem Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von Ansichtstransitionstypen](/de/docs/Web/API/View_Transition_API/Using_types)
- [Glatte Transitionen mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
