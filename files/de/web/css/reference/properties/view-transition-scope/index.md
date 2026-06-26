---
title: "`view-transition-scope` CSS property"
short-title: view-transition-scope
slug: Web/CSS/Reference/Properties/view-transition-scope
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{SeeCompatTable}}

Die **`view-transition-scope`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht die Isolierung der Auffindbarkeit von Elementen mit festgelegten {{cssxref("view-transition-name")}}-Werten (und daher die Erstellung von [Schnappschüssen](/de/docs/Web/API/View_Transition_API/Using#an_aside_on_snapshots) für die View-Transition) auf einen bestimmten Element-Unterbaum.

## Syntax

```css
/* Keyword values */
view-transition-scope: none;
view-transition-scope: all;

/* Global values */
view-transition-scope: inherit;
view-transition-scope: initial;
view-transition-scope: revert;
view-transition-scope: revert-layer;
view-transition-scope: unset;
```

### Werte

- `none`
  - : Der Initialwert. Die Auffindbarkeit von Elementen zur Erstellung von Schnappschüssen während einer View-Transition ist nicht auf einen bestimmten Unterbaum begrenzt.
- `all`
  - : Begrenzen Sie die Auffindbarkeit von Elementen zur Erstellung von Schnappschüssen während einer View-Transition auf den Unterbaum des Elements, auf dem diese Eigenschaft gesetzt ist. Nur Elemente mit einem nicht-`none` {{cssxref("view-transition-name")}} werden berücksichtigt.

## Beschreibung

Während [des View-Transition-Prozesses](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erfasst der Browser Schnappschüsse von Elementen, die ein nicht-`none` {{cssxref("view-transition-name")}} gesetzt haben. Diese Schnappschüsse werden dann über CSS-Animationen animiert.

Ein Problem, das während dieses Prozesses auftreten kann, sind Namenskonflikte zwischen Elementen, die an einer View-Transition beteiligt sind. Sie können nicht dasselbe {{cssxref("view-transition-name")}} auf mehreren Elementen haben — falls doch, wirft der Browser einen `InvalidStateError`, wenn die Methode [`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition) aufgerufen wird, um die Transition zu starten.

Sie könnten dieses Problem lösen, indem Sie ein `view-transition-name` von [`match-element`](/de/docs/Web/CSS/Reference/Properties/view-transition-name#match-element) auf den Elementen setzen, um dem Browser die automatische Vergabe interner eindeutiger Namen zu ermöglichen. Allerdings funktioniert dies nicht, wenn Sie mehrere Komponenten aus verschiedenen Quellen einbinden, die Sie nicht kontrollieren. Ein Namenskonflikt könnte trotzdem auftreten.

Die Eigenschaft `view-transition-scope` ermöglicht es, View-Transitions eigenständig zu machen. Wenn `view-transition-scope: all` auf einem Element gesetzt wird, wird der Übergangsbereich auf dieses Element und seine Nachkommen begrenzt, was zur Lösung des oben genannten Problems verwendet werden kann.

Wann immer eine [element-gebundene View-Transition](/de/docs/Web/API/View_Transition_API/Using_element-scoped) ausgelöst wird, setzt der Browser automatisch `view-transition-scope: all` auf das Übergangselement, um sicherzustellen, dass nur Elemente innerhalb des Übergangsbereichs als Schnappschuss erfasst und animiert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `view-transition-scope` zur Isolierung von Schnappschüssen

Dieses Beispiel zeigt, wie Sie `view-transition-scope` verwenden, um den Bereich von dokumenten-gebundenen View-Transitions zu isolieren, sodass derselbe `view-transition-name` auf mehreren Elementen verwendet werden kann.

#### HTML

Das HTML enthält ein {{htmlelement("button")}}-Element zur Steuerung der DOM-Aktualisierung sowie mehrere Komponenten mit der Klasse `change-me`, von denen einige verschachtelt sind, alle umschlossen von einem {{htmlelement("section")}}-Element.

```html live-sample___vt-scope
<button>Update DOM</button>
<section>
  <div class="change-me"><span>I can change</span></div>
  <div class="change-me">
    <span>I can change</span>
    <div class="change-me"><span>I can change</span></div>
  </div>
  <div class="change-me"><span>I can change</span></div>
</section>
```

#### CSS

Wir beginnen damit, denselben `view-transition-name` auf allen Komponenten zu setzen. Dann setzen wir `view-transition-scope: all` auf alle, um den View-Transition-Prozess für jede einzelne zu isolieren. Danach setzen wir eine längere {{cssxref("animation-duration")}} auf alle View-Transitions mit diesem `view-transition-name` über das {{cssxref("::view-transition-group()")}} Pseudoelement.

```css hidden live-sample___vt-scope
body {
  font: 1.2em / 1.5 sans-serif;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

section,
.change-me {
  border: 2px solid #666;
  padding: 10px;
}

section {
  background-color: orange;
}
```

```css live-sample___vt-scope
.change-me {
  background-color: white;
  view-transition-name: para-change;
  view-transition-scope: all;
}

::view-transition-group(para-change) {
  animation-duration: 1s;
}
```

#### JavaScript

Das Skript beginnt mit dem Erfassen von Referenzen auf das Button- und die `<div>`-Elemente (unsere Komponenten).

```js live-sample___vt-scope
const btn = document.querySelector("button");
const divs = document.querySelectorAll("div");
```

Als nächstes definieren wir eine Funktion namens `updateDivs()`, die den Textinhalt des verschachtelten {{htmlelement("span")}}-Elements jeder Komponente zwischen zwei Werten umschaltet und auch die Vorder- und Hintergrundfarben der Komponente zwischen zwei Werten wechselt.

```js live-sample___vt-scope
function updateDivs() {
  divs.forEach((div) => {
    if (div.firstElementChild.textContent === "I can change") {
      div.firstElementChild.textContent = "I have changed";
      div.style.color = "white";
      div.style.backgroundColor = "black";
    } else {
      div.firstElementChild.textContent = "I can change";
      div.style.color = "black";
      div.style.backgroundColor = "white";
    }
  });
}
```

Zum Schluss fügen wir dem `<button>`-Element einen `click`-Ereignislistener hinzu. Wenn der Button geklickt wird, prüfen wir zunächst, ob `startViewTransition()` im `document`-Objekt existiert – wenn nicht, führen wir `updateDivs()` aus und kehren dann aus der Funktion zurück. Dieser erste Teil ermöglicht es, dass Browser, die keine View-Transitions unterstützen, das DOM trotzdem fehlerfrei aktualisieren. Anschließend führen wir `updateDivs()` in einem `startViewTransition()`-Callback aus, um die View-Transition beim Aktualisieren des DOMs auszulösen.

```js live-sample___vt-scope
btn.addEventListener("click", handleClick);

function handleClick(e) {
  if (!document.startViewTransition) {
    updateDivs();
    return;
  }
  document.startViewTransition(() => {
    updateDivs();
  });
}
```

#### Ergebnis

{{embedlivesample("vt-scope", "100%", 280)}}

Klicken Sie auf den Button "Update DOM", um die View-Transition zu sehen. Probieren Sie nun Folgendes aus:

1. Untersuchen Sie eines der `<div>`-Elemente.
2. Deaktivieren Sie im Stile-Panel der Entwickler-Tools Ihres Browsers die Deklaration `view-transition-scope: all;`.
3. Wechseln Sie nun zur JavaScript-Konsole.
4. Klicken Sie erneut auf den "Update DOM"-Button.

Sie sollten sehen, dass die View-Transition-Animation nicht angewendet wird, wenn das DOM geändert wird, und ein `InvalidStateError` in der Konsole gemeldet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("view-transition-name")}}
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using) Leitfaden
- [Verwendung von element-gebundenen View-Transitions](/de/docs/Web/API/View_Transition_API/Using_element-scoped)
