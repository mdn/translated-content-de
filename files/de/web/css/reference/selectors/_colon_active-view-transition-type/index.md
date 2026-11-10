---
title: "`:active-view-transition-type()` CSS-Pseudoklasse"
short-title: :active-view-transition-type()
slug: Web/CSS/Reference/Selectors/:active-view-transition-type
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die funktionale [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:active-view-transition-type()`** trifft auf Elemente zu, während eine View Transition mit einem oder mehreren bestimmten Typen ausgeführt wird (also _aktiv_ ist). Sobald die View Transition abgeschlossen ist, trifft sie nicht mehr zu.

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
  - : Ein oder mehrere durch Kommas getrennte {{cssxref("&lt;custom-ident>")}}-Werte, die die Typen angeben, bei denen dieser Selektor auf die aktive View Transition zutrifft.

## Beschreibung

[View-Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types) bieten die Möglichkeit, unterschiedliche **Typen** für aktive View Transitions festzulegen. Typen können auf verschiedene Weise festgelegt werden:

- Geben Sie bei View Transitions innerhalb desselben Dokuments (SPA) die Typen in der Option [`types`](/de/docs/Web/API/Document/startViewTransition#types) der Methode [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) an.
- Geben Sie bei dokumentübergreifenden View Transitions die Typen im Deskriptor [`types`](/de/docs/Web/CSS/Reference/At-rules/@view-transition#types) der At-Regel {{cssxref("@view-transition")}} an.
- Sie können die Typen der aktiven View Transition auch zur Laufzeit über die Eigenschaft [`types`](/de/docs/Web/API/ViewTransition/types) des zugehörigen `ViewTransition`-Objekts ändern:
  - Bei View Transitions innerhalb desselben Dokuments ist dies das `ViewTransition`-Objekt, das von der Methode `startViewTransition()` zurückgegeben wird.
  - Bei dokumentübergreifenden View Transitions ist das `ViewTransition`-Objekt für die verlassene Seite über die Eigenschaft [`viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) des Ereignisobjekts [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und für die aufgerufene Seite über die Eigenschaft [`viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) des Ereignisobjekts [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) verfügbar.
  - Sie können auch über die Eigenschaft [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) auf die aktive `ViewTransition` zugreifen. Damit steht Ihnen in jedem Kontext eine einheitliche Zugriffsmöglichkeit zur Verfügung.

Sobald für die aktive View Transition ein oder mehrere Typen festgelegt sind, können Sie die Pseudoklasse `:active-view-transition-type()` auf das Wurzelelement des Dokuments anwenden, um für jeden Typ eigene Stile festzulegen. Die Pseudoklasse erwartet als Argument eine durch Kommas getrennte Liste von Typen. Der Selektor trifft zu, wenn einer dieser Typen für die aktive View Transition festgelegt ist.

Beispielsweise könnten Sie in einer Bildergalerie-App unterschiedliche Übergangsanimationen auf ein {{htmlelement("img")}}-Element anwenden, wenn sich das angezeigte Bild ändert – je nachdem, ob Sie in der Bildfolge vorwärts oder rückwärts navigieren, ein Bild löschen oder eines hinzufügen.

### ODER- und UND-Verhalten

Beachten Sie, dass die durch Kommas getrennte Liste von Typen innerhalb der Pseudoklasse `:active-view-transition-type()` ein ODER-Verhalten bewirkt: Der Selektor trifft zu, wenn mindestens einer dieser Typen für die aktive View Transition festgelegt ist.

Im folgenden Beispiel trifft der Selektor zu, wenn die aktive View Transition den Typ `forwards`, `backwards` oder beide Typen hat:

```css
html:active-view-transition-type(forwards, backwards) {
  /* ... */
}
```

Wenn Sie ein UND-Verhalten benötigen – also festlegen möchten, dass alle Typen vorhanden sein müssen, damit der Selektor zutrifft –, können Sie mehrere `:active-view-transition-type()`-Pseudoklassen aneinanderreihen. Im folgenden Beispiel trifft der Selektor nur zu, wenn die aktive View Transition sowohl den Typ `slide` _als auch_ den Typ `forwards` hat:

```css
html:active-view-transition-type(slide):active-view-transition-type(forwards) {
  /* ... */
}
```

## Beispiele

Weitere vollständige Beispiele finden Sie unter [View-Transition-Typen verwenden](/de/docs/Web/API/View_Transition_API/Using_types).

### Grundlegende Verwendung von `:active-view-transition-type()`

Dieses Beispiel enthält ein einfaches Dokument, das mithilfe der beiden Schaltflächen „Backwards“ und „Forwards“ zwischen zwei verschiedenen Inhalten wechselt. Es zeigt, wie sich der Übergang mithilfe von View-Transition-Typen unterschiedlich animieren lässt, je nachdem, welche Schaltfläche gedrückt wurde.

#### HTML

Das Markup enthält ein einzelnes {{htmlelement("p")}}-Element für den Inhalt und zwei {{htmlelement("button")}}-Elemente, die die View Transitions auslösen.

```html live-sample___basic_usage
<p>This is my first piece of content. I hope you like it!</p>
<div>
  <button id="backwards">Backwards</button>
  <button id="forwards">Forwards</button>
</div>
```

#### JavaScript

In unserem Skript erstellen wir Referenzen auf beide Schaltflächen und den Absatz mit dem Inhalt. Anschließend speichern wir die beiden unterschiedlichen Inhalte in zwei Konstanten.

```js live-sample___basic_usage
const backBtn = document.getElementById("backwards");
const fwdBtn = document.getElementById("forwards");
const content = document.querySelector("p");

const first = "This is my first piece of content. I hope you like it!";
const second =
  "This is my second piece of content. Is it better than the first?";
```

Als Nächstes fügen wir den Schaltflächen „Backwards“ und „Forwards“ `click`-Ereignis-Listener hinzu. Beim Anklicken wird die Funktion `changeContent()` ausgeführt.

```js live-sample___basic_usage
backBtn.addEventListener("click", changeContent);
fwdBtn.addEventListener("click", changeContent);
```

Abschließend definieren wir die Funktion `changeContent()`. Zunächst deklarieren wir einen Wert `type`, in dem der View-Transition-Typ gespeichert wird. Wenn das Ereignisziel die Schaltfläche „Backwards“ ist, setzen wir `type` auf `backwards`. Andernfalls setzen wir `type` auf `forwards`. Anschließend rufen wir die Methode [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) auf, um den Inhalt zu aktualisieren und die View Transition zu starten:

- Der Callback `update` prüft, ob `textContent` des Absatzes der Zeichenfolge `first` entspricht. Falls ja, setzen wir es auf die Zeichenfolge `second`. Andernfalls setzen wir es auf die Zeichenfolge `first`.
- Das Array `types` erhält ein Element: den zuvor festgelegten Wert `type`.

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

In unseren Stilen erstellen wir zunächst mithilfe der Pseudoklasse `:active-view-transition` eine Reihe verschachtelter Regeln. Diese Stile werden immer angewendet, wenn eine View Transition aktiv ist, unabhängig von ihren Typen. Wir weisen {{cssxref(":root")}} den Wert `none` für {{cssxref("view-transition-name")}} zu, da beim Übergang außer dem `<p>`-Element keine Elemente erfasst und animiert werden sollen. Das `<p>`-Element erhält für `view-transition-name` den Wert `slide`.

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

Anschließend erstellen wir mit der Pseudoklasse `:active-view-transition-type()` zwei Blöcke verschachtelter Stile. Der erste wird nur angewendet, wenn die aktive View Transition den Typ `forwards` hat, der zweite nur beim Typ `backwards`. In jedem Block verwenden wir die Pseudoelemente {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}}, um der ausgehenden und der eingehenden Ansicht der Erfassungsgruppe `slide` eigene Werte für {{cssxref("animation-name")}} zuzuweisen.

Das Ergebnis:

- Beim Übergangstyp `forwards` gleitet die alte Inhaltsansicht nach links hinaus und die neue Inhaltsansicht von rechts herein.
- Beim Übergangstyp `backwards` gleitet die alte Inhaltsansicht nach rechts hinaus und die neue Inhaltsansicht von links herein.

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

Abschließend definieren wir mit {{cssxref("@keyframes")}}-Animationsblöcken die zuvor referenzierten Animationen.

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

{{EmbedLiveSample("basic_usage", "100%", 200)}}

Klicken Sie auf die Schaltflächen „Backwards“ und „Forwards“. Beachten Sie, dass für den Übergang jeweils eine andere Animation verwendet wird, obwohl in beiden Fällen derselbe Code die Aktualisierung des Inhalts und die View Transition auslöst. Der Grund dafür ist, dass abhängig von der gedrückten Schaltfläche ein anderer Übergangstyp festgelegt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)
- {{CSSXRef(":active-view-transition")}}-Pseudoklasse
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Die View Transition API verwenden](/de/docs/Web/API/View_Transition_API/Using)
- [View-Transition-Typen verwenden](/de/docs/Web/API/View_Transition_API/Using_types)
