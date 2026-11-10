---
title: "ViewTransition: types-Eigenschaft"
short-title: types
slug: Web/API/ViewTransition/types
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("View Transition API")}}

Die schreibgeschützte Eigenschaft **`types`** der Schnittstelle [`ViewTransition`](/de/docs/Web/API/ViewTransition) ist ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet), über das Sie auf die für die View Transition festgelegten [Typen](/de/docs/Web/API/View_Transition_API/Using_types) zugreifen und sie ändern können.

## Wert

Ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet). Dabei handelt es sich um ein [Set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis). Sie können die einer View Transition zugewiesenen Typen daher während der Laufzeit mit Methoden wie `clear()`, `add()` und `delete()` ändern.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel enthält ein einfaches Dokument, das zwischen zwei verschiedenen Inhalten wechselt. Drei Schaltflächen lösen jeweils die Transition aus, legen aber unterschiedliche `type`-Werte fest, damit verschiedene Animationen angewendet werden.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element für den Inhalt und drei {{htmlelement("button")}}-Elemente zum Auslösen der View Transition.

```html live-sample___basic_usage
<p>This is my first piece of content. I hope you like it!</p>
<div>
  <button id="default">Default</button>
  <button id="slide">Slide</button>
  <button id="flip">Flip</button>
</div>
```

#### JavaScript

Im Skript erstellen wir Referenzen auf die Schaltflächen und den Inhaltsabsatz. Anschließend speichern wir die beiden Inhalte in zwei Konstanten.

```js live-sample___basic_usage
const defaultBtn = document.getElementById("default");
const slideBtn = document.getElementById("slide");
const flipBtn = document.getElementById("flip");
const content = document.querySelector("p");

const first = "This is my first piece of content. I hope you like it!";
const second =
  "This is my second piece of content. Is it better than the first?";
```

Danach fügen wir den Schaltflächen `click`-Event-Listener hinzu. Beim Anklicken wird die Funktion `changeContent()` ausgeführt.

```js live-sample___basic_usage
defaultBtn.addEventListener("click", changeContent);
slideBtn.addEventListener("click", changeContent);
flipBtn.addEventListener("click", changeContent);
```

Abschließend definieren wir die Funktion `changeContent()`. Zunächst rufen wir die Methode [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) auf, um den Inhalt zu aktualisieren und die Transition zu starten. Das zurückgegebene `ViewTransition`-Objekt speichern wir in der Konstante `vt`. Innerhalb von `startViewTransition()` prüft der `update`-Callback, ob `textContent` des Absatzes der Zeichenfolge `first` entspricht. Falls ja, setzen wir ihn auf `second`, andernfalls auf `first`.

Im zweiten Teil der Funktion `changeContent()` prüfen wir das Ziel des `click`-Events:

- Ist es die Schaltfläche „Slide“, fügen wir den Typ `slide` mit `vt.types.add("slide")` zu den Typen der aktiven View Transition hinzu.
- Ist es die Schaltfläche „Flip“, fügen wir den Typ `flip` mit `vt.types.add("flip")` zu den Typen der aktiven View Transition hinzu.
- Wurde die Schaltfläche „Default“ angeklickt, tun wir nichts. In diesem Fall verwenden wir die standardmäßige Überblendungsanimation der View Transition.

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

In den Styles erstellen wir zunächst mithilfe der Pseudoklasse `:active-view-transition` verschachtelte Regeln. Diese Styles werden angewendet, sobald eine View Transition aktiv ist – unabhängig von ihren Typen. Wir weisen {{cssxref(":root")}} einen {{cssxref("view-transition-name")}}-Wert von `none` zu, da beim Übergang außer dem `<p>`-Element keine Elemente erfasst und animiert werden sollen. Das `<p>`-Element erhält den `view-transition-name`-Wert `content`.

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

Anschließend erstellen wir mit der Pseudoklasse `:active-view-transition-type()` zwei Blöcke verschachtelter Styles. Der erste wird nur angewendet, wenn die aktive View Transition den Typ `slide` hat, der zweite nur beim Typ `flip`. In beiden Blöcken verwenden wir die Pseudoelemente {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}}, um den ausgehenden und eingehenden Ansichten der Capture-Gruppe `slide` eigene {{cssxref("animation-name")}}-Werte zuzuweisen.

Das Ergebnis:

- Beim Transition-Typ `slide` gleitet die alte Inhaltsansicht nach links hinaus und die neue von rechts herein.
- Beim Transition-Typ `flip` dreht sich die alte Inhaltsansicht horizontal um 90 Grad, sodass sie nicht mehr sichtbar ist. Die neue Inhaltsansicht dreht sich anschließend herein.
- In allen anderen Fällen werden die standardmäßigen Überblendungsanimationen verwendet.

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

Abschließend definieren wir die zuvor verwendeten Animationen mit {{cssxref("@keyframes")}}-Blöcken. Außerdem legen wir für alle Capture-Gruppen eine eigene {{cssxref("animation-duration")}} fest, um die Transition-Animationen etwas zu verlangsamen.

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

{{EmbedLiveSample("basic_usage", "100%", 200)}}

Klicken Sie auf die einzelnen Schaltflächen. Die Änderungen am DOM sind jeweils identisch, die Animation unterscheidet sich jedoch. Das liegt daran, dass abhängig von der angeklickten Schaltfläche ein anderer Transition-Typ festgelegt wird – beziehungsweise im Fall von „Default“ kein Transition-Typ.

### Anwendungsbeispiel

Sehen Sie sich unser [Beispiel für mehrere Transition-Typen in einer MPA](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types)) an. Es zeigt, wie abhängig von der Navigationsart unterschiedliche Animationen auf dokumentübergreifende View Transitions angewendet werden. Die Navigationsarten werden durch verschiedene Transition-Typen dargestellt. Der Transition-Typ wird während der Navigation mit JavaScript dynamisch bestimmt.

[Unterschiedliche dokumentübergreifende Typen mithilfe von pageswap- und pagereveal-Events anwenden](/de/docs/Web/API/View_Transition_API/Using_types#applying_different_cross-document_types_using_pageswap_and_pagereveal_events) führt Sie durch dieses Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Die View Transition API verwenden](/de/docs/Web/API/View_Transition_API/Using)
- [View-Transition-Typen verwenden](/de/docs/Web/API/View_Transition_API/Using_types)
- [Fließende Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
