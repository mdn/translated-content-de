---
title: :active-view-transition-type()
slug: Web/CSS/Reference/Selectors/:active-view-transition-type
l10n:
  sourceCommit: 8f7fa9e7aef0399c7a7f8e5a20476a0c2f287640
---

Die funktionale **`:active-view-transition-type()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) trifft auf Elemente zu, wenn ein View-Übergang mit einem oder mehreren spezifischen Typen im Gange ist (ist _aktiv_) und hört auf zuzutreffen, sobald der View-Übergang abgeschlossen ist.

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
  - : Ein oder mehrere durch Kommas getrennte {{cssxref("&lt;custom-ident>")}} Werte, die die Auswahl an Typen darstellen, die auf den aktiven View-Übergang angewendet werden können, damit dieser Selektor passt.

## Beschreibung

[View-Übergangstypen](/de/docs/Web/API/View_Transition_API/Using_types) bieten einen Mechanismus, mit dem verschiedene **Typen** für aktive View-Übergänge angegeben werden können. Typen können auf View-Übergänge auf verschiedene Weise angewendet werden:

- Für gleiche Dokument (SPA) View-Übergänge, geben Sie Typen in der [`types`](/de/docs/Web/API/Document/startViewTransition#types) Option der [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) Methode an.
- Für zwischen Dokumenten View-Übergänge geben Sie Typen in der [`types`](/de/docs/Web/CSS/Reference/At-rules/@view-transition#types) Beschreibung der {{cssxref("@view-transition")}} At-Regel an.
- Sie können die Typen des aktiven View-Übergangs auch dynamisch über die [`types`](/de/docs/Web/API/ViewTransition/types) Eigenschaft des entsprechenden `ViewTransition` Objekts ändern:
  - Für gleiche Dokument View-Übergänge ist dies das `ViewTransition` Objekt, das von der `startViewTransition()` Methode zurückgegeben wird.
  - Für zwischen Dokumenten View-Übergänge ist das `ViewTransition` Objekt in der [`viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) Eigenschaft des [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignisobjekts für die ausgehende Seite verfügbar und in der [`viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) Eigenschaft des [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisobjekts für die eingehende Seite.
  - Sie können auch über die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) Eigenschaft auf den aktiven `ViewTransition` zugreifen. Dies bietet einen konsistenten Weg, um in jedem Kontext auf den aktiven View-Übergang zuzugreifen.

Sobald eine oder mehrere Typen auf den aktiven View-Übergang gesetzt sind, kann die Pseudoklasse `:active-view-transition-type()` auf das Dokumentstammelement angewendet werden, um benutzerdefinierte Stile für jeden Typ festzulegen. Die Pseudoklasse nimmt eine durch Kommas getrennte Liste von Typen als Argument, um die Typen anzugeben, die auf den aktiven View-Übergang gesetzt werden können, damit der Selektor übereinstimmt.

Zum Beispiel könnten Sie in einer Bildergalerie-App unterschiedliche Übergangsanimationen auf ein {{htmlelement("img")}}-Element anwenden, während sich das angezeigte Bild ändert, je nachdem, ob Sie in der Sequenz vorwärts oder rückwärts gehen, ein Bild löschen oder ein Bild in die Sequenz hinzufügen.

### ODER- versus UND-Verhalten

Es ist wichtig zu beachten, dass die durch Kommas getrennte Liste von Typen, die in der Pseudoklasse `:active-view-transition-type()` angegeben ist, ein ODER-Verhalten bietet — wenn einer oder mehrere dieser Typen auf den aktiven View-Übergang gesetzt sind, wird der Selektor übereinstimmen.

Zum Beispiel wird in diesem Fall der Selektor übereinstimmen, wenn der aktive View-Übergang den Typ `forwards`, `backwards` oder beide hat:

```css
html:active-view-transition-type(forwards, backwards) {
  /* ... */
}
```

Wenn Sie ein UND-Verhalten angeben möchten — das heißt, alle Typen müssen gesetzt sein, damit der Selektor übereinstimmt — können Sie dies tun, indem Sie mehrere `:active-view-transition-type()` Pseudoklassen miteinander verketten. Im folgenden Fall wird der Selektor nur übereinstimmen, wenn der aktive View-Übergang die Typen `slide` _und_ `forwards` hat:

```css
html:active-view-transition-type(slide):active-view-transition-type(forwards) {
  /* ... */
}
```

## Beispiele

Siehe auch [View-Übergangstypen verwenden](/de/docs/Web/API/View_Transition_API/Using_types) für mehrere vollständige Beispiele.

### Grundlegende Verwendung von `:active-view-transition-type()`

Dieses Beispiel enthält ein einfaches Dokument, das zwischen zwei verschiedenen Inhaltsstücken über zwei verschiedene Schaltflächen, "Backwards" und "Forwards", übergeht. Wir demonstrieren, wie View-Übergangstypen verwendet werden können, um den Übergang unterschiedlich zu animieren, je nachdem, welche Schaltfläche gedrückt wurde.

#### HTML

Das Markup beinhaltet ein einzelnes {{htmlelement("p")}}-Element, um den Inhalt zu enthalten, und zwei {{htmlelement("button")}}-Elemente, um die View-Übergänge auszulösen.

```html live-sample___basic_usage
<p>This is my first piece of content. I hope you like it!</p>
<div>
  <button id="backwards">Backwards</button>
  <button id="forwards">Forwards</button>
</div>
```

#### JavaScript

In unserem Skript erstellen wir Referenzen zu beiden Schaltflächen und dem Inhaltsabsatz und speichern dann unsere zwei verschiedenen Inhaltsstücke in zwei Konstanten.

```js live-sample___basic_usage
const backBtn = document.getElementById("backwards");
const fwdBtn = document.getElementById("forwards");
const content = document.querySelector("p");

const first = "This is my first piece of content. I hope you like it!";
const second =
  "This is my second piece of content. Is it better than the first?";
```

Als nächstes fügen wir den Schaltflächen "Rückwärts" und "Vorwärts" `click`-Ereignislistener hinzu; wenn sie geklickt werden, wird die Funktion `changeContent()` ausgeführt.

```js live-sample___basic_usage
backBtn.addEventListener("click", changeContent);
fwdBtn.addEventListener("click", changeContent);
```

Schließlich definieren wir die Funktion `changeContent()`. Wir beginnen mit der Deklaration eines `type`-Werts, der unseren View-Übergangstyp-Wert halten wird. Wenn das Ereignisziel die Schaltfläche "Rückwärts" ist, setzen wir `type` auf `backwards`. Wenn nicht, setzen wir `type` auf `forwards`. Wir rufen dann die Methode [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) auf, um den Inhalt zu aktualisieren und den Übergang zu starten:

- Der `update`-Callback prüft, ob der `textContent` des Absatzes mit dem `first`-String übereinstimmt. Wenn ja, setzen wir ihn auf den `second`-String. Wenn nicht, setzen wir ihn auf den `first`-String.
- Das `types`-Array erhält ein Element: den vorher deklarieren `type`-Wert.

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

In unseren Stilen beginnen wir damit, eine Reihe verschachtelter Regeln mit der `:active-view-transition` Pseudoklasse zu erstellen. Diese Stile werden angewendet, wann immer ein View-Übergang aktiv ist, unabhängig von deren Typen. Wir wenden einen {{cssxref("view-transition-name")}} von `none` auf das {{cssxref(":root")}} an, da wir nicht möchten, dass irgendwelche Elemente erfasst und bei Übergängen animiert werden, außer das `<p>`-Element, das einen `view-transition-name` von `slide` erhält.

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

Als nächstes verwenden wir die Pseudoklasse `:active-view-transition-type()`, um zwei Blöcke verschachtelter Stile zu erstellen, von denen der erste nur angewendet wird, wenn der aktive View-Übergang den Typ `forwards` hat, und der zweite nur, wenn der aktive View-Übergang den Typ `backwards` hat. In jedem Block verwenden wir die {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Pseudoelemente, um benutzerdefinierte {{cssxref("animation-name")}} Werte auf die ausgehenden und eingehenden Ansichten der `slide`-Erfassungsgruppe anzuwenden.

Das Ergebnis:

- Wenn der Übergangstyp `forwards` ist, rutscht die alte Inhaltsansicht nach links heraus und die neue Inhaltsansicht rutscht von rechts herein.
- Wenn der Übergangstyp `backwards` ist, rutscht die alte Inhaltsansicht nach rechts heraus und die neue Inhaltsansicht rutscht von links herein.

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

Das Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample("basic-usage", "100%", 200)}}

Versuchen Sie, die Schaltflächen "Backwards" und "Forwards" zu klicken, und beachten Sie, wie jeweils eine andere Animation für den Übergang verwendet wird, obwohl derselbe Code verwendet wird, um die Inhaltsaktualisierung und den View-Übergang in jedem Fall auszulösen. Dies liegt daran, dass ein unterschiedlicher Übergangstyp gesetzt wird, je nachdem, welche Schaltfläche gedrückt wird.

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
