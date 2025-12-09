---
title: "ViewTransition: types-Eigenschaft"
short-title: types
slug: Web/API/ViewTransition/types
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

{{APIRef("View Transition API")}}

Die **`types`**-Eigenschaft der [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Schnittstelle ist ein schreibgeschützter [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet), der es ermöglicht, die [types](/de/docs/Web/API/View_Transition_API/Using_types), die auf die View-Transition gesetzt wurden, zuzugreifen und zu ändern.

## Wert

Ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet). Dies ist ein [Set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), was bedeutet, dass Sie die Typen, die auf eine View-Transition angewendet werden, dynamisch mithilfe von Methoden wie `clear()`, `add()` und `delete()` ändern können.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel enthält ein einfaches Dokument, das zwischen zwei verschiedenen Inhalten wechselt. Wir bieten drei Schaltflächen an, von denen jede die Transition auslöst, jedoch mit einem unterschiedlichen `type`, um eine andere Art von Animation auf die Transition anzuwenden.

#### HTML

Das Markup enthält ein einzelnes {{htmlelement("p")}}-Element, um den Inhalt zu enthalten, und drei {{htmlelement("button")}}-Elemente, um die View-Transition auszulösen.

```html live-sample___basic_usage
<p>This is my first piece of content. I hope you like it!</p>
<div>
  <button id="default">Default</button>
  <button id="slide">Slide</button>
  <button id="flip">Flip</button>
</div>
```

#### JavaScript

In unserem Script erstellen wir Verweise auf die Schaltflächen und den Inhaltsabsatz und speichern dann unsere beiden verschiedenen Inhalte in zwei Konstanten.

```js live-sample___basic_usage
const defaultBtn = document.getElementById("default");
const slideBtn = document.getElementById("slide");
const flipBtn = document.getElementById("flip");
const content = document.querySelector("p");

const first = "This is my first piece of content. I hope you like it!";
const second =
  "This is my second piece of content. Is it better than the first?";
```

Als Nächstes fügen wir den Schaltflächen `click`-Event-Listener hinzu; wenn sie angeklickt werden, wird die Funktion `changeContent()` ausgeführt.

```js live-sample___basic_usage
defaultBtn.addEventListener("click", changeContent);
slideBtn.addEventListener("click", changeContent);
flipBtn.addEventListener("click", changeContent);
```

Schließlich definieren wir die Funktion `changeContent()`. Wir beginnen mit dem Aufrufen der Methode [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), um den Inhalt zu aktualisieren und die Transition zu starten, wobei das zurückgegebene `ViewTransition`-Objekt in der Konstante `vt` gespeichert wird. Innerhalb von `startViewTransition()` prüft der `update`-Callback, ob der `textContent` des Absatzes gleich dem String `first` ist. Falls ja, setzen wir ihn auf den String `second`. Andernfalls setzen wir ihn auf den String `first`.

Im zweiten Teil der Funktion `changeContent()` überprüfen wir den Wert des `click`-Event-Ziels:

- Wenn es die "Slide"-Schaltfläche ist, fügen wir dem aktiven View-Transition `slide`-Typen hinzu, indem wir `vt.types.add("slide")` verwenden.
- Wenn es die "Flip"-Schaltfläche ist, fügen wir dem aktiven View-Transition `flip`-Typen hinzu, indem wir `vt.types.add("flip")` verwenden.
- Wir unternehmen nichts, wenn die "Default"-Schaltfläche gedrückt wurde. In diesem Fall möchten wir die standardmäßige View-Transition-Überblendungsanimation verwenden.

```js live-sample___basic_usage
function changeContent(e) {
  const vt = document.startViewTransition({
    update: () => {
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

In unseren Styles beginnen wir mit der Erstellung einer Reihe von verschachtelten Regeln, die die Pseudoklasse `:active-view-transition` verwenden. Diese Styles werden immer dann angewendet, wenn eine View-Transition aktiv ist, unabhängig von ihren Typen. Wir wenden einen {{cssxref("view-transition-name")}} von `none` auf das {{cssxref(":root")}} an, da wir nicht möchten, dass Elemente während der Transition erfasst und animiert werden, außer das `<p>`-Element, dem ein `view-transition-name` von `content` zugewiesen wird.

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

Als Nächstes verwenden wir die Pseudoklasse `:active-view-transition-type()`, um zwei Blöcke von verschachtelten Styles zu erstellen. Der erste Block wird nur angewendet, wenn die aktive View-Transition einen Typ von `slide` hat, und der zweite wird nur angewendet, wenn die aktive View-Transition einen Typ von `flip` hat. In jedem Block verwenden wir die Pseudoelemente {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}}, um benutzerdefinierte {{cssxref("animation-name")}}-Werte auf die `slide`-Capture-Gruppe und die eingehenden Ansichten anzuwenden.

Als Ergebnis:

- Wenn der Transition-Typ `slide` ist, gleitet die alte Inhaltsansicht nach links aus dem Bild, und die neue Inhaltsansicht gleitet von rechts herein.
- Wenn der Transition-Typ `flip` ist, dreht sich die alte Inhaltsansicht horizontal um 90 Grad, sodass sie nicht mehr sichtbar ist, und die neue Inhaltsansicht dreht sich zurück herein.
- In jedem anderen Fall werden die standardmäßigen Überblendungsanimationen verwendet.

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

Schließlich verwenden wir {{cssxref("@keyframes")}}-Animationsblöcke, um die zuvor erwähnten Animationen zu definieren. Wir setzen auch eine benutzerdefinierte {{cssxref("animation-duration")}} auf alle Capture-Gruppen, um die Transition-Animationen leicht zu verlangsamen.

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

Das Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample("basic-usage", "100%", 200)}}

Versuchen Sie, jede Schaltfläche zu klicken, und beachten Sie, wie sich die DOM-Änderungen in jedem Fall identisch sind, aber die Animation unterschiedlich ist. Dies liegt daran, dass ein anderer Transition-Typ eingestellt wird, je nachdem, welche Schaltfläche gedrückt wird (oder kein Transition-Typ im Fall von "Default").

### Angewandtes Beispiel

Werfen Sie einen Blick auf unser [MPA-Beispiel mit mehreren Transition-Typen](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types)), das zeigt, wie unterschiedliche Animationen auf dokumentübergreifende View-Transitions angewendet werden können, abhängig vom Navigationstyp, der durch unterschiedliche Transition-Typen dargestellt wird. Der Transition-Typ wird während der Navigation dynamisch mit JavaScript bestimmt.

[Anwenden unterschiedlicher dokumentübergreifender Typen mithilfe von pageswap- und pagereveal-Events](/de/docs/Web/API/View_Transition_API/Using_types#applying_different_cross-document_types_using_pageswap_and_pagereveal_events) bietet eine Schritt-für-Schritt-Anleitung zu diesem Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von View-Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types)
- [Fließende Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
