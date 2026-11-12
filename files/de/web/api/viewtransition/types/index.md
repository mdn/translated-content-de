---
title: "ViewTransition: Eigenschaft types"
short-title: types
slug: Web/API/ViewTransition/types
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{APIRef("View Transition API")}}

Die schreibgeschützte Eigenschaft **`types`** der Schnittstelle [`ViewTransition`](/de/docs/Web/API/ViewTransition) ist ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet). Damit können Sie auf die für den Ansichtsübergang festgelegten [Typen](/de/docs/Web/API/View_Transition_API/Using_types) zugreifen und sie ändern.

## Wert

Ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet). Dabei handelt es sich um ein [Set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis). Mit Methoden wie `clear()`, `add()` und `delete()` können Sie die auf einen Ansichtsübergang angewendeten Typen während der Laufzeit ändern.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel enthält ein einfaches Dokument, das zwischen zwei verschiedenen Inhalten wechselt. Drei Schaltflächen lösen jeweils den Übergang aus, verwenden dabei aber unterschiedliche `type`-Werte, um verschiedene Animationen anzuwenden.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element für den Inhalt und drei {{htmlelement("button")}}-Elemente zum Auslösen des Ansichtsübergangs.

```html live-sample___basic_usage
<p>This is my first piece of content. I hope you like it!</p>
<div>
  <button id="default">Default</button>
  <button id="slide">Slide</button>
  <button id="flip">Flip</button>
</div>
```

#### CSS

In den Styles erstellen wir zunächst verschachtelte Regeln mit der Pseudoklasse `:active-view-transition`. Diese Styles gelten immer dann, wenn ein Ansichtsübergang aktiv ist, unabhängig von dessen Typen. Wir weisen {{cssxref(":root")}} den {{cssxref("view-transition-name")}}-Wert `none` zu, da außer dem `<p>`-Element keine Elemente für den Übergang erfasst und animiert werden sollen. Das `<p>`-Element erhält den `view-transition-name`-Wert `content`.

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

Anschließend erstellen wir mit der Pseudoklasse `:active-view-transition-type()` zwei Blöcke mit verschachtelten Styles: Der erste gilt nur, wenn der aktive Ansichtsübergang den Typ `slide` hat, der zweite nur beim Typ `flip`. In beiden Blöcken verwenden wir die Pseudoelemente {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}}, um den ausgehenden und eingehenden Ansichten der Erfassungsgruppe `slide` eigene {{cssxref("animation-name")}}-Werte zuzuweisen.

Das Ergebnis:

- Beim Übergangstyp `slide` gleitet die alte Inhaltsansicht nach links heraus und die neue von rechts herein.
- Beim Übergangstyp `flip` dreht sich die alte Inhaltsansicht horizontal um 90 Grad, bis sie nicht mehr sichtbar ist. Anschließend dreht sich die neue Inhaltsansicht herein.
- In allen anderen Fällen werden die standardmäßigen Überblendanimationen verwendet.

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

Zum Schluss definieren wir die zuvor referenzierten Animationen mit {{cssxref("@keyframes")}}-Blöcken. Außerdem legen wir für alle Erfassungsgruppen eine eigene {{cssxref("animation-duration")}} fest, um die Übergangsanimationen etwas zu verlangsamen.

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

#### JavaScript

Im Skript erstellen wir Referenzen auf die Schaltflächen und den Inhaltsabsatz. Die beiden verschiedenen Inhalte speichern wir in zwei Konstanten.

```js live-sample___basic_usage
const defaultBtn = document.getElementById("default");
const slideBtn = document.getElementById("slide");
const flipBtn = document.getElementById("flip");
const content = document.querySelector("p");

const first = "This is my first piece of content. I hope you like it!";
const second =
  "This is my second piece of content. Is it better than the first?";
```

Anschließend fügen wir den Schaltflächen `click`-Event-Listener hinzu. Beim Klicken wird die Funktion `changeContent()` ausgeführt.

```js live-sample___basic_usage
defaultBtn.addEventListener("click", changeContent);
slideBtn.addEventListener("click", changeContent);
flipBtn.addEventListener("click", changeContent);
```

Zum Schluss definieren wir die Funktion `changeContent()`. Zunächst rufen wir die Methode [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) auf, um den Inhalt zu aktualisieren und den Übergang zu starten. Das zurückgegebene `ViewTransition`-Objekt speichern wir in der Konstante `vt`. Innerhalb von `startViewTransition()` prüft der `update`-Callback, ob `textContent` des Absatzes der Zeichenfolge `first` entspricht. Falls ja, setzen wir den Wert auf `second`, andernfalls auf `first`.

Im zweiten Teil der Funktion `changeContent()` prüfen wir das Ziel des `click`-Events:

- Ist es die Schaltfläche „Slide“, fügen wir den Typ `slide` mit `vt.types.add("slide")` zu den Typen des aktiven Ansichtsübergangs hinzu.
- Ist es die Schaltfläche „Flip“, fügen wir den Typ `flip` mit `vt.types.add("flip")` hinzu.
- Bei der Schaltfläche „Default“ nehmen wir keine Änderung vor. In diesem Fall soll die standardmäßige Überblendanimation für Ansichtsübergänge verwendet werden.

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

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample("basic_usage", "100%", 200)}}

Klicken Sie auf die einzelnen Schaltflächen. Die Änderungen am DOM sind jedes Mal identisch, die Animation ist jedoch unterschiedlich. Das liegt daran, dass je nach gedrückter Schaltfläche ein anderer Übergangstyp festgelegt wird – oder im Fall von „Default“ gar keiner.

### Anwendungsbeispiel

Sehen Sie sich unser [MPA-Beispiel mit mehreren Übergangstypen](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types)) an. Es zeigt, wie abhängig von der Navigationsart, die durch unterschiedliche Übergangstypen repräsentiert wird, verschiedene Animationen auf dokumentübergreifende Ansichtsübergänge angewendet werden. Der Übergangstyp wird während der Navigation dynamisch mit JavaScript bestimmt.

[Unterschiedliche dokumentübergreifende Typen mit pageswap- und pagereveal-Events anwenden](/de/docs/Web/API/View_Transition_API/Using_types#applying_different_cross-document_types_using_pageswap_and_pagereveal_events) führt Sie durch dieses Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Die View Transition API verwenden](/de/docs/Web/API/View_Transition_API/Using)
- [Typen von Ansichtsübergängen verwenden](/de/docs/Web/API/View_Transition_API/Using_types)
- [Flüssige Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
