---
title: CSS-Pseudoklasse `:active-view-transition-type()`
short-title: :active-view-transition-type()
slug: Web/CSS/Reference/Selectors/:active-view-transition-type
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die funktionale [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:active-view-transition-type()`** trifft auf Elemente zu, solange eine View Transition mit einem oder mehreren bestimmten Typen läuft (also _aktiv_ ist). Sobald die View Transition abgeschlossen ist, trifft sie nicht mehr zu.

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
  - : Ein oder mehrere durch Kommas getrennte {{cssxref("&lt;custom-ident>")}}-Werte. Sie bezeichnen die Typen, die für die aktive View Transition festgelegt sein können, damit der Selektor zutrifft.

## Beschreibung

[View-Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types) ermöglichen es, unterschiedliche **Typen** für aktive View Transitions festzulegen. Typen können auf verschiedene Weise festgelegt werden:

- Geben Sie für View Transitions innerhalb desselben Dokuments (SPA) die Typen in der Option [`types`](/de/docs/Web/API/Document/startViewTransition#types) der Methode [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) an.
- Geben Sie für dokumentübergreifende View Transitions die Typen im Deskriptor [`types`](/de/docs/Web/CSS/Reference/At-rules/@view-transition#types) der At-Regel {{cssxref("@view-transition")}} an.
- Sie können die Typen der aktiven View Transition auch während ihrer Laufzeit über die Eigenschaft [`types`](/de/docs/Web/API/ViewTransition/types) des zugehörigen `ViewTransition`-Objekts ändern:
  - Bei View Transitions innerhalb desselben Dokuments ist dies das `ViewTransition`-Objekt, das von der Methode `startViewTransition()` zurückgegeben wird.
  - Bei dokumentübergreifenden View Transitions ist das `ViewTransition`-Objekt für die verlassene Seite über die Eigenschaft [`viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) des Ereignisobjekts [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und für die aufgerufene Seite über die Eigenschaft [`viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) des Ereignisobjekts [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) verfügbar.
  - Über die Eigenschaft [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) können Sie ebenfalls auf das aktive `ViewTransition`-Objekt zugreifen. Damit steht Ihnen in jedem Kontext dieselbe Zugriffsmöglichkeit auf die aktive View Transition zur Verfügung.

Sobald für die aktive View Transition ein oder mehrere Typen festgelegt sind, kann die Pseudoklasse `:active-view-transition-type()` auf das Wurzelelement des Dokuments angewendet werden, um für jeden Typ eigene Stile festzulegen. Als Argument erhält die Pseudoklasse eine durch Kommas getrennte Liste von Typen. Der Selektor trifft zu, wenn einer dieser Typen für die aktive View Transition festgelegt ist.

In einer Bildergalerie könnten Sie beispielsweise unterschiedliche Animationen für den Wechsel eines {{htmlelement("img")}}-Elements verwenden – je nachdem, ob Sie in der Bildfolge vor- oder zurückgehen, ein Bild löschen oder eines hinzufügen.

### ODER- und UND-Verhalten

Die durch Kommas getrennte Typenliste innerhalb von `:active-view-transition-type()` bewirkt eine ODER-Verknüpfung: Der Selektor trifft zu, wenn mindestens einer der angegebenen Typen für die aktive View Transition festgelegt ist.

Im folgenden Beispiel trifft der Selektor zu, wenn die aktive View Transition den Typ `forwards`, den Typ `backwards` oder beide Typen hat:

```css
html:active-view-transition-type(forwards, backwards) {
  /* ... */
}
```

Wenn Sie eine UND-Verknüpfung benötigen – der Selektor also nur zutreffen soll, wenn alle Typen festgelegt sind –, können Sie mehrere `:active-view-transition-type()`-Pseudoklassen aneinanderreihen. Im folgenden Beispiel trifft der Selektor nur zu, wenn die aktive View Transition sowohl den Typ `slide` _als auch_ den Typ `forwards` hat:

```css
html:active-view-transition-type(slide):active-view-transition-type(forwards) {
  /* ... */
}
```

## Beispiele

Weitere vollständige Beispiele finden Sie unter [View-Transition-Typen verwenden](/de/docs/Web/API/View_Transition_API/Using_types).

### Grundlegende Verwendung von `:active-view-transition-type()`

Dieses Beispiel enthält ein einfaches Dokument, das über zwei Schaltflächen, „Zurück“ und „Vorwärts“, zwischen zwei verschiedenen Inhalten wechselt. Es zeigt, wie sich der Wechsel mithilfe von View-Transition-Typen unterschiedlich animieren lässt, je nachdem, welche Schaltfläche angeklickt wurde.

#### HTML

Das Markup enthält ein einzelnes {{htmlelement("p")}}-Element für den Inhalt sowie zwei {{htmlelement("button")}}-Elemente zum Auslösen der View Transitions.

```html live-sample___basic_usage
<p>This is my first piece of content. I hope you like it!</p>
<div>
  <button id="backwards">Backwards</button>
  <button id="forwards">Forwards</button>
</div>
```

#### CSS

Für die Stile erstellen wir zunächst verschachtelte Regeln mit der Pseudoklasse `:active-view-transition`. Diese Stile gelten immer dann, wenn eine View Transition aktiv ist, unabhängig von ihrem Typ. Wir weisen {{cssxref(":root")}} den {{cssxref("view-transition-name")}}-Wert `none` zu, da außer dem `<p>`-Element keine Elemente für die View Transition erfasst und animiert werden sollen. Das `<p>`-Element erhält den `view-transition-name`-Wert `slide`.

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

Anschließend erstellen wir mit der Pseudoklasse `:active-view-transition-type()` zwei Blöcke mit verschachtelten Stilen. Der erste gilt nur, wenn die aktive View Transition den Typ `forwards` hat, der zweite nur beim Typ `backwards`. In beiden Blöcken verwenden wir die Pseudoelemente {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}}, um den ausgehenden und eingehenden Ansichten der Erfassungsgruppe `slide` eigene {{cssxref("animation-name")}}-Werte zuzuweisen.

Das führt zu folgendem Verhalten:

- Beim Transition-Typ `forwards` gleitet die alte Inhaltsansicht nach links hinaus und die neue von rechts herein.
- Beim Transition-Typ `backwards` gleitet die alte Inhaltsansicht nach rechts hinaus und die neue von links herein.

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

Zum Schluss definieren wir mit {{cssxref("@keyframes")}}-Animationsblöcken die zuvor referenzierten Animationen.

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

#### JavaScript

Im Skript erstellen wir Referenzen auf beide Schaltflächen und den Absatz mit dem Inhalt. Anschließend speichern wir die beiden unterschiedlichen Inhalte in zwei Konstanten.

```js live-sample___basic_usage
const backBtn = document.getElementById("backwards");
const fwdBtn = document.getElementById("forwards");
const content = document.querySelector("p");

const first = "This is my first piece of content. I hope you like it!";
const second =
  "This is my second piece of content. Is it better than the first?";
```

Danach fügen wir den Schaltflächen „Zurück“ und „Vorwärts“ `click`-Event-Listener hinzu. Beim Anklicken wird die Funktion `changeContent()` ausgeführt.

```js live-sample___basic_usage
backBtn.addEventListener("click", changeContent);
fwdBtn.addEventListener("click", changeContent);
```

Abschließend definieren wir die Funktion `changeContent()`. Zunächst deklarieren wir einen Wert `type`, in dem wir den View-Transition-Typ speichern. Ist das Ziel des Ereignisses die Schaltfläche „Zurück“, setzen wir `type` auf `backwards`, andernfalls auf `forwards`. Anschließend rufen wir die Methode [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) auf, um den Inhalt zu aktualisieren und die View Transition zu starten:

- Der Callback `update` prüft, ob `textContent` des Absatzes der Zeichenfolge `first` entspricht. Wenn ja, setzen wir den Wert auf `second`, andernfalls auf `first`.
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

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample("basic_usage", "100%", 200)}}

Klicken Sie auf die Schaltflächen „Zurück“ und „Vorwärts“. Obwohl in beiden Fällen derselbe Code die Aktualisierung des Inhalts und die View Transition auslöst, wird jeweils eine andere Animation verwendet. Das liegt daran, dass abhängig von der angeklickten Schaltfläche ein anderer Transition-Typ festgelegt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)
- Pseudoklasse {{CSSXRef(":active-view-transition")}}
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [View Transition API verwenden](/de/docs/Web/API/View_Transition_API/Using)
- [View-Transition-Typen verwenden](/de/docs/Web/API/View_Transition_API/Using_types)
