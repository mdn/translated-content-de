---
title: "`:active-view-transition-type()` CSS-Pseudoklasse"
short-title: :active-view-transition-type()
slug: Web/CSS/Reference/Selectors/:active-view-transition-type
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die funktionale **`:active-view-transition-type()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) gleicht Elemente ab, wenn ein View-Übergang mit einem oder mehreren spezifischen Typen im Gange ist (also _aktiv_ ist) und hört auf zu gelten, sobald der View-Übergang abgeschlossen ist.

```css
html:active-view-transition-type(forwards, backwards) {
  /* ... */
}
```

## Syntax

```css-nolint
:active-view-transition-type(<custom-ident>#) {
  /* ... */
}
```

### Parameter

- `<custom-ident>#`
  - : Ein oder mehrere durch Komma getrennte {{cssxref("&lt;custom-ident>")}} Werte, die die Auswahl der Typen darstellen, die auf den aktiven View-Übergang angewendet werden können, damit dieser Selektor passt.

## Beschreibung

[View-Übergangstypen](/de/docs/Web/API/View_Transition_API/Using_types) bieten einen Mechanismus, durch den verschiedene **Typen** für aktive View-Übergänge angegeben werden können. Typen können in mehrfacher Hinsicht auf View-Übergänge gesetzt werden:

- Für gleichseitige (SPA) View-Übergänge geben Sie die Typen in der [`types`](/de/docs/Web/API/Document/startViewTransition#types) Option der [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) Methode an.
- Für Dokument übergreifende View-Übergänge geben Sie die Typen im [`types`](/de/docs/Web/CSS/Reference/At-rules/@view-transition#types) Deskriptor der {{cssxref("@view-transition")}} @-Regel an.
- Sie können auch die Typen des aktiven View-Übergangs in Echtzeit über die [`types`](/de/docs/Web/API/ViewTransition/types) Eigenschaft des entsprechenden `ViewTransition` Objekts ändern:
  - Für gleichseitige View-Übergänge ist dies das `ViewTransition` Objekt, das von der `startViewTransition()` Methode zurückgegeben wird.
  - Für Dokument übergreifende View-Übergänge ist das `ViewTransition` Objekt in der [`viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) Eigenschaft des [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignisobjekts im Fall der ausgehenden Seite und in der [`viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) Eigenschaft des [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisobjekts im Fall der eingehenden Seite verfügbar.
  - Sie können auch über die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) Eigenschaft auf den aktiven `ViewTransition` zugreifen. Dies bietet eine konsistente Möglichkeit, den aktiven View-Übergang in jedem Kontext zu erreichen.

Sobald der aktive View-Übergang einen oder mehrere Typen aufweist, kann die `:active-view-transition-type()` Pseudoklasse auf das Dokument-Wurzelelement angewendet werden, um benutzerdefinierte Stile für jeden Typ festzulegen. Die Pseudoklasse nimmt eine durch Komma getrennte Liste von Typen als Argument an, um die Typen zu spezifizieren, die auf den aktiven View-Übergang gesetzt werden können, damit der Selektor passt.

Zum Beispiel könnten Sie verschiedene Übergangsanimationen auf ein {{htmlelement("img")}} Element in einer Bildergalerie-App anwenden, wenn das angezeigte Bild wechselt, je nachdem, ob Sie vorwärts oder rückwärts in der Sequenz navigieren, ein Bild löschen oder ein Bild in die Sequenz einfügen.

### ODER versus UND Verhalten

Es ist wichtig zu beachten, dass die durch Komma getrennte Liste von Typen, die innerhalb der `:active-view-transition-type()` Pseudoklasse angegeben ist, ODER Verhalten bietet — wenn einer oder mehrere dieser Typen auf den aktiven View-Übergang gesetzt sind, wird der Selektor übereinstimmen.

Zum Beispiel wird in diesem Fall der Selektor passen, wenn der aktive View-Übergang einen Typ von `forwards`, `backwards` oder beides hat:

```css
html:active-view-transition-type(forwards, backwards) {
  /* ... */
}
```

Wenn Sie ein UND Verhalten angeben möchten — das heißt, alle Typen müssen gesetzt sein, damit der Selektor übereinstimmt — können Sie dies tun, indem Sie mehrere `:active-view-transition-type()` Pseudoklassen hintereinander verketten. Im folgenden Fall wird der Selektor nur dann übereinstimmen, wenn der aktive View-Übergang Typen von `slide` _und_ `forwards` hat:

```css
html:active-view-transition-type(slide):active-view-transition-type(forwards) {
  /* ... */
}
```

## Beispiele

Siehe auch [Verwendung von View-Übergangstypen](/de/docs/Web/API/View_Transition_API/Using_types) für mehrere vollständige Beispiele.

### Grundlegende Benutzung von `:active-view-transition-type()`

Dieses Beispiel enthält ein grundlegendes Dokument, das zwischen zwei verschiedenen Inhalten über zwei verschiedene Schaltflächen, "Vorwärts" und "Rückwärts", wechselt. Wir zeigen, wie View-Übergangstypen verwendet werden können, um den Übergang unterschiedlich zu animieren, abhängig davon, welche Schaltfläche gedrückt wurde.

#### HTML

Das Markup enthält ein einziges {{htmlelement("p")}} Element, um den Inhalt zu enthalten, und zwei {{htmlelement("button")}} Elemente, um die View-Übergänge auszulösen.

```html live-sample___basic_usage
<p>This is my first piece of content. I hope you like it!</p>
<div>
  <button id="backwards">Backwards</button>
  <button id="forwards">Forwards</button>
</div>
```

#### JavaScript

In unserem Skript erstellen wir Referenzen zu beiden Schaltflächen und dem Inhaltsabsatz und speichern dann unsere beiden unterschiedlichen Inhaltsteile in zwei Konstanten.

```js live-sample___basic_usage
const backBtn = document.getElementById("backwards");
const fwdBtn = document.getElementById("forwards");
const content = document.querySelector("p");

const first = "This is my first piece of content. I hope you like it!";
const second =
  "This is my second piece of content. Is it better than the first?";
```

Als nächstes fügen wir den Rückwärts- und Vorwärts-Schaltflächen `click`-Ereignislistener hinzu; wenn sie geklickt werden, wird die `changeContent()` Funktion ausgeführt.

```js live-sample___basic_usage
backBtn.addEventListener("click", changeContent);
fwdBtn.addEventListener("click", changeContent);
```

Schließlich definieren wir die `changeContent()` Funktion. Wir beginnen mit der Deklaration eines `type` Wertes, der unseren View-Übergangstyp-Wert enthalten wird. Wenn das Ereignisziel die "Rückwärts"-Schaltfläche ist, setzen wir `type` auf `backwards`. Andernfalls setzen wir `type` auf `forwards`. Dann rufen wir die [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) Methode auf, um den Inhalt zu aktualisieren und den Übergang zu starten:

- Der `update` Rückruf überprüft, ob der `textContent` des Absatzes gleich dem `first` String ist. Falls ja, setzen wir ihn auf den `second` String. Andernfalls setzen wir ihn auf den `first` String.
- Das `types` Array erhält ein Element: den zuvor erklärten `type` Wert.

```js live-sample___basic_usage
function changeContent(e) {
  const type = e.target === backBtn ? "backwards" : "forwards";
  document.startViewTransition({
    update() {
      content.textContent === first
        ? (content.textContent = second)
        : (content.textContent = first);
    },
    types: [type],
  });
}
```

#### CSS

In unseren Styles beginnen wir mit dem Erstellen eines Satzes verschachtelter Regeln unter Verwendung der `:active-view-transition` Pseudoklasse. Diese Styles werden angewendet, wenn ein View-Übergang aktiv ist, unabhängig von seinen Typen. Wir wenden eine {{cssxref("view-transition-name")}} von `none` auf die {{cssxref(":root")}} an, da wir nicht möchten, dass irgendwelche Elemente auf Übergangen erfasst und animiert werden, außer dem `<p>` Element, das einen `view-transition-name` von `slide` erhält.

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
  margin-top: 0;
}
```

```css live-sample___basic_usage
html:active-view-transition {
  :root {
    view-transition-name: none;
  }
  p {
    view-transition-name: slide;
  }
}
```

Als nächstes verwenden wir die `:active-view-transition-type()` Pseudoklasse, um zwei Blöcke verschachtelter Styles zu erstellen, von denen der erste nur angewendet wird, wenn der aktive View-Übergang einen Typ von `forwards` hat, und der zweite nur angewendet wird, wenn der aktive View-Übergang einen Typ von `backwards` hat. In jedem Block verwenden wir die {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Pseudoelemente, um benutzerdefinierte {{cssxref("animation-name")}} Werte auf die ausgehenden und eingehenden Ansichten der `slide` Capture-Gruppe anzuwenden.

Das Ergebnis:

- Wenn der Übergangstyp `forwards` ist, gleitet die alte Inhaltsansicht nach links aus und die neue Inhaltsansicht von rechts herein.
- Wenn der Übergangstyp `backwards` ist, gleitet die alte Inhaltsansicht nach rechts aus und die neue Inhaltsansicht von links herein.

```css live-sample___basic_usage
html:active-view-transition-type(forwards) {
  &::view-transition-old(slide) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(slide) {
    animation-name: slide-in-from-right;
  }
}

html:active-view-transition-type(backwards) {
  &::view-transition-old(slide) {
    animation-name: slide-out-to-right;
  }
  &::view-transition-new(slide) {
    animation-name: slide-in-from-left;
  }
}
```

Schließlich verwenden wir {{cssxref("@keyframes")}} Animationsblöcke, um die zuvor erwähnten Animationen zu definieren.

```css live-sample___basic_usage
@keyframes slide-in-from-left {
  from {
    translate: -100vw 0;
  }
}
@keyframes slide-in-from-right {
  from {
    translate: 100vw 0;
  }
}
@keyframes slide-out-to-left {
  to {
    translate: -100vw 0;
  }
}
@keyframes slide-out-to-right {
  to {
    translate: 100vw 0;
  }
}
```

#### Ergebnis

Das Beispiel wird wie folgt gerendert:

{{EmbedLiveSample("basic-usage", "100%", 200)}}

Versuchen Sie, auf die "Rückwärts"- und "Vorwärts"-Schaltflächen zu klicken, und beachten Sie, wie, obwohl derselbe Code verwendet wird, um die Inhaltsaktualisierung und den View-Übergang in jedem Fall zu initiieren, eine andere Animation für den Übergang verwendet wird. Das liegt daran, dass je nach gedrückter Schaltfläche ein anderer Übergangstyp gesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)
- {{CSSXRef(":active-view-transition")}} Pseudoklasse
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von View-Übergangstypen](/de/docs/Web/API/View_Transition_API/Using_types)
