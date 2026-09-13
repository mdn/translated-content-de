---
title: "`view-transition-scope` CSS property"
short-title: view-transition-scope
slug: Web/CSS/Reference/Properties/view-transition-scope
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{SeeCompatTable}}

Die **`view-transition-scope`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, die Auffindbarkeit von Elementen mit festgelegten {{cssxref("view-transition-name")}}-Werten (und somit die Erstellung von View-Transition-[Snapshots](/de/docs/Web/API/View_Transition_API/Using#an_aside_on_snapshots)) auf einen bestimmten Element-Unterbaum zu isolieren.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Der Initialwert. Die Auffindbarkeit von Elementen, die während einer View-Transition gesnapshottet werden sollen, ist nicht auf einen bestimmten Unterbaum beschränkt.
- `all`
  - : Beschränkt die Auffindbarkeit von Elementen, die während einer View-Transition gesnapshottet werden sollen, auf den Unterbaum des Elements, auf dem diese Eigenschaft gesetzt ist. Nur Elemente mit einem von `none` abweichenden {{cssxref("view-transition-name")}} werden berücksichtigt.

## Beschreibung

Während [des View-Transitions-Prozesses](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erfasst der Browser Snapshots von Elementen, auf denen eine von `none` abweichende {{cssxref("view-transition-name")}} festgelegt ist. Diese Snapshots werden dann über CSS-Animationen animiert.

Ein Problem, das während dieses Prozesses auftreten kann, sind Namenskollisionen zwischen Elementen, die an einer View-Transition beteiligt sind. Sie können nicht dasselbe {{cssxref("view-transition-name")}} auf mehreren Elementen festlegen — geschieht dies doch, wirft der Browser einen `InvalidStateError`, wenn die Methode [`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition) aufgerufen wird, um die Transition zu starten.

Sie könnten dieses Problem lösen, indem Sie ein `view-transition-name` von [`match-element`](/de/docs/Web/CSS/Reference/Properties/view-transition-name#match-element) auf den Elementen festlegen, um dem Browser zu ermöglichen, intern eindeutige Namen automatisch zuzuweisen. Dies funktioniert jedoch nicht, wenn Sie mehrere Komponenten aus verschiedenen Quellen einbinden, die Sie nicht kontrollieren. Eine Namenskollision könnte trotzdem auftreten.

Die `view-transition-scope`-Eigenschaft ermöglicht es, View-Transitions eigenständig zu machen. Wenn `view-transition-scope: all` auf ein Element gesetzt ist, begrenzt sie den Übergangsbereich auf dieses Element und seine Nachkommen, was zur Lösung des oben genannten Problems eingesetzt werden kann.

Immer wenn eine [element-spezifische View-Transition](/de/docs/Web/API/View_Transition_API/Using_element-scoped) ausgelöst wird, setzt der Browser automatisch `view-transition-scope: all` auf dem Übergangs-Root-Element, wodurch sichergestellt wird, dass nur Elemente innerhalb des Übergangsbereichs gesnapshottet und animiert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `view-transition-scope` zur Isolation von Snapshots

Dieses Beispiel zeigt, wie `view-transition-scope` verwendet wird, um den Umfang von dokumentenspezifischen View-Transitions zu isolieren, dadurch kann dasselbe `view-transition-name` auf mehreren Elementen verwendet werden.

#### HTML

Das HTML enthält ein {{htmlelement("button")}}-Element zur Steuerung der Aktualisierung des DOM, sowie mehrere Komponenten mit der Klasse `change-me`, von denen einige verschachtelt sind, alle in einem {{htmlelement("section")}}-Element umschlossen.

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

Wir beginnen damit, dasselbe `view-transition-name` auf allen Komponenten zu setzen. Dann setzen wir `view-transition-scope: all` auf alle von ihnen, um den View-Transition-Prozess für jede einzelne zu isolieren. Als nächstes setzen wir eine längere {{cssxref("animation-duration")}} auf alle View-Transitions mit diesem `view-transition-name` über das {{cssxref("::view-transition-group()")}}-Pseudo-Element.

```css hidden live-sample___vt-scope
body {
  font: 1.2em / 1.5 sans-serif;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

section,
.change-me {
  border: 2px solid #666666;
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

Das Skript beginnt mit dem Abrufen von Referenzen auf den Button und die `<div>`-Elemente (unsere Komponenten).

```js live-sample___vt-scope
const btn = document.querySelector("button");
const divs = document.querySelectorAll("div");
```

Als nächstes definieren wir eine Funktion namens `updateDivs()`, die den Textinhalt jedes geschachtelten {{htmlelement("span")}}-Elements der Komponente zwischen zwei Werten umschaltet und auch die Vorder- und Hintergrundfarben der Komponente zwischen zwei Werten tauscht.

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

Schließlich fügen wir dem `<button>`-Element einen `click`-Ereignislistener hinzu. Wenn der Button geklickt wird, überprüfen wir zuerst, ob `startViewTransition()` auf dem `document`-Objekt existiert — falls nicht, führen wir `updateDivs()` aus und verlassen dann die Funktion. Dieser erste Teil ermöglicht es Browsern, die View-Transitions nicht unterstützen, das DOM trotzdem ohne Fehler zu aktualisieren. Als nächstes führen wir `updateDivs()` innerhalb eines `startViewTransition()`-Callbacks aus, um die View-Transition zu starten, während das DOM aktualisiert wird.

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

Klicken Sie auf die Schaltfläche „DOM aktualisieren“, um die View-Transition zu sehen. Versuchen Sie nun Folgendes:

1. Untersuchen Sie eines der `<div>`-Elemente.
2. Deaktivieren Sie im Styles-Panel der Entwickler-Tools Ihres Browsers die `view-transition-scope: all;`-Deklaration.
3. Wechseln Sie nun zur JavaScript-Konsole.
4. Klicken Sie erneut auf die Schaltfläche „DOM aktualisieren“.

Sie sollten sehen, dass die View-Transition-Animation nicht angewendet wird, wenn sich das DOM ändert, und im Konsolenbericht erscheint ein `InvalidStateError`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("view-transition-name")}}
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using) Leitfaden
- [Verwendung elementbasierter View Transitions](/de/docs/Web/API/View_Transition_API/Using_element-scoped)
