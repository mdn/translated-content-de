---
title: :active-view-transition-type()
slug: Web/CSS/Reference/Selectors/:active-view-transition-type
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

Die funktionale **`:active-view-transition-type()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt Elemente aus, wenn eine View-Übergang mit einem oder mehreren spezifischen Typen aktiv ist (also _aktiv_) und hört auf, übereinzustimmen, sobald der View-Übergang abgeschlossen ist.

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
  - : Ein oder mehrere durch Komma getrennte {{cssxref("&lt;custom-ident>")}} Werte, die die Auswahl der Typen darstellen, die auf den aktiven View-Übergang angewendet werden können, damit dieser Selektor übereinstimmt.

## Beschreibung

[View-Übergangstypen](/de/docs/Web/API/View_Transition_API/Using_types) bieten einen Mechanismus, durch den verschiedene **Typen** für aktive View-Übergänge angegeben werden können. Typen können auf verschiedene Weisen auf View-Übergänge gesetzt werden:

- Für gleiche-Dokument (SPA) View-Übergänge, geben Sie Typen in der [`types`](/de/docs/Web/API/Document/startViewTransition#types) Option der Methode [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) an.
- Für dokumentübergreifende View-Übergänge, geben Sie Typen im [`types`](/de/docs/Web/CSS/Reference/At-rules/@view-transition#types) Deskriptor der {{cssxref("@view-transition")}} At-Regel an.
- Sie können auch die Typen des aktiven View-Übergangs dynamisch über die [`types`](/de/docs/Web/API/ViewTransition/types) Eigenschaft des entsprechenden `ViewTransition` Objekts ändern:
  - Für gleiche-Dokument View-Übergänge ist das das `ViewTransition` Objekt, das von der Methode `startViewTransition()` zurückgegeben wird.
  - Für dokumentübergreifende View-Übergänge ist das `ViewTransition` Objekt in der [`viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) Eigenschaft des [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Event-Objekts im Fall der ausgehenden Seite verfügbar, und in der [`viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) Eigenschaft des [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Event-Objekts im Fall der eingehenden Seite.
  - Sie können auch auf die aktive `ViewTransition` über die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) Eigenschaft zugreifen. Dies bietet eine konsistente Möglichkeit, auf die aktive View-Übergang in jedem Kontext zuzugreifen.

Sobald der aktive View-Übergang einen oder mehrere Typen gesetzt hat, kann die Pseudoklasse `:active-view-transition-type()` auf das Root-Element des Dokuments angewendet werden, um benutzerdefinierte Stile für jeden Typ festzulegen. Die Pseudoklasse nimmt eine durch Komma getrennte Liste von Typen als Argument, um die Typen anzugeben, die auf den aktiven View-Übergang gesetzt werden können, damit der Selektor übereinstimmt.

Zum Beispiel könnten Sie unterschiedliche Übergangsanimationen auf ein {{htmlelement("img")}} Element in einer Bildergalerie-App anwenden, wenn sich das angezeigte Bild ändert, je nachdem, ob Sie sich vorwärts oder rückwärts in der Sequenz bewegen, ein Bild löschen oder ein Bild in die Sequenz hinzufügen.

### ODER versus UND Verhalten

Es ist wichtig zu beachten, dass die durch Komma getrennte Liste von Typen, die innerhalb der Pseudoklasse `:active-view-transition-type()` angegeben wird, ein ODER-Verhalten bietet — wenn einer oder mehrere dieser Typen auf den aktiven View-Übergang gesetzt sind, wird der Selektor übereinstimmen.

Zum Beispiel wird der Selektor in diesem Fall übereinstimmen, wenn der aktive View-Übergang einen Typ `forwards`, `backwards` oder beide hat:

```css
html:active-view-transition-type(forwards, backwards) {
  /* ... */
}
```

Wenn Sie ein UND-Verhalten angeben möchten — das heißt, alle Typen müssen gesetzt sein, damit der Selektor übereinstimmt —, können Sie dies tun, indem Sie mehrere `:active-view-transition-type()` Pseudoklassen hintereinander schalten. Im folgenden Fall wird der Selektor nur übereinstimmen, wenn der aktive View-Übergang Typen `slide` _und_ `forwards` hat:

```css
html:active-view-transition-type(slide):active-view-transition-type(forwards) {
  /* ... */
}
```

## Beispiele

Siehe auch [Verwendung von View-Übergangstypen](/de/docs/Web/API/View_Transition_API/Using_types) für mehrere vollständige Beispiele.

### Grundlegende Verwendung von `:active-view-transition-type()`

Dieses Beispiel enthält ein grundlegendes Dokument, das zwischen zwei verschiedenen Inhaltsstücken über zwei verschiedene Schaltflächen, "Rückwärts" und "Vorwärts", wechselt. Wir zeigen, wie View-Übergangstypen verwendet werden können, um den Übergang je nach gedrückter Schaltfläche unterschiedlich zu animieren.

#### HTML

Das Markup enthält ein einzelnes {{htmlelement("p")}} Element, um den Inhalt zu enthalten, und zwei {{htmlelement("button")}} Elemente, um die View-Übergänge auszulösen.

```html live-sample___basic_usage
<p>This is my first piece of content. I hope you like it!</p>
<div>
  <button id="backwards">Backwards</button>
  <button id="forwards">Forwards</button>
</div>
```

#### JavaScript

In unserem Script erstellen wir Referenzen auf beide Schaltflächen und den Inhaltsabsatz und speichern dann unsere zwei verschiedenen Inhaltsstücke in zwei Konstanten.

```js live-sample___basic_usage
const backBtn = document.getElementById("backwards");
const fwdBtn = document.getElementById("forwards");
const content = document.querySelector("p");

const first = "This is my first piece of content. I hope you like it!";
const second =
  "This is my second piece of content. Is it better than the first?";
```

Als nächstes fügen wir den Rückwärts- und Vorwärts-Schaltflächen `click` Ereignis-Listener hinzu; wenn sie geklickt werden, wird die Funktion `changeContent()` ausgeführt.

```js live-sample___basic_usage
backBtn.addEventListener("click", changeContent);
fwdBtn.addEventListener("click", changeContent);
```

Schließlich definieren wir die Funktion `changeContent()`. Wir starten, indem wir einen `type` Wert deklarieren, der unseren View-Übergangstyp-Wert halten wird. Wenn das Ereignisziel die "Rückwärts"-Schaltfläche ist, setzen wir `type` auf `backwards`. Andernfalls setzen wir `type` auf `forwards`. Dann rufen wir die Methode [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) auf, um den Inhalt zu aktualisieren und den Übergang zu starten:

- Der `update` Callback prüft, ob der `textContent` des Absatzes gleich der `first` Zeichenkette ist. Wenn ja, setzen wir es auf die `second` Zeichenkette. Andernfalls setzen wir es auf die `first` Zeichenkette.
- Das `types` Array erhält ein Element: den zuvor deklarierten `type` Wert.

```js live-sample___basic_usage
function changeContent(e) {
  const type = e.target === backBtn ? "backwards" : "forwards";
  document.startViewTransition({
    update: () => {
      content.textContent === first
        ? (content.textContent = second)
        : (content.textContent = first);
    },
    types: [type],
  });
}
```

#### CSS

In unseren Stilen beginnen wir, indem wir eine Reihe verschachtelter Regeln mit der Pseudoklasse `:active-view-transition` erstellen. Diese Stile werden immer angewendet, wenn ein View-Übergang aktiv ist, unabhängig von ihren Typen. Wir wenden einen {{cssxref("view-transition-name")}} von `none` auf das {{cssxref(":root")}} an, da wir möchten, dass keine Elemente bei Übergang erfasst und animiert werden, außer dem `<p>` Element, dem ein `view-transition-name` von `slide` gegeben wird.

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

Als nächstes verwenden wir die Pseudoklasse `:active-view-transition-type()`, um zwei Blöcke verschachtelter Stile zu erstellen; der erste wird nur angewendet, wenn der aktive View-Übergang einen Typ `forwards` hat, und der zweite wird nur angewendet, wenn der aktive View-Übergang einen Typ `backwards` hat. In jedem Block verwenden wir die Pseudo-Elemente {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}}, um benutzerdefinierte {{cssxref("animation-name")}} Werte auf die ausgehenden und eingehenden Ansichten der `slide`-Erfassungsgruppe anzuwenden.

Infolgedessen:

- Wenn der Übergangstyp `forwards` ist, gleitet die alte Inhaltsansicht nach links hinaus und die neue Inhaltsansicht von rechts herein.
- Wenn der Übergangstyp `backwards` ist, gleitet die alte Inhaltsansicht nach rechts hinaus und die neue Inhaltsansicht von links herein.

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

Schließlich verwenden wir {{cssxref("@keyframes")}} Animationsblöcke, um die zuvor referenzierten Animationen zu definieren.

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

Versuchen Sie, die Schaltflächen "Rückwärts" und "Vorwärts" zu klicken und zu beachten, wie trotz des gleichen Codes, der zur Aktualisierung des Inhalts und zur Auslösung des View-Übergangs in jedem Fall verwendet wird, eine andere Animation für den Übergang verwendet wird. Dies liegt daran, dass ein anderer Übergangstyp je nach gedrückter Schaltfläche gesetzt wird.

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
