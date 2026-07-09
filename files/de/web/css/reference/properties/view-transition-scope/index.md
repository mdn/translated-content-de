---
title: "`view-transition-scope` CSS property"
short-title: view-transition-scope
slug: Web/CSS/Reference/Properties/view-transition-scope
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{SeeCompatTable}}

Die **`view-transition-scope`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht die Begrenzung der Auffindbarkeit von Elementen mit auf ihnen gesetzten {{cssxref("view-transition-name")}}-Werten (und damit die Erstellung von Ansichtstransition-[Schnappschüssen](/de/docs/Web/API/View_Transition_API/Using#an_aside_on_snapshots)) auf einen bestimmten Element-Unterbaum.

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
  - : Der initiale Wert. Die Auffindbarkeit von Elementen für Schnappschüsse während einer Ansichtstransition ist nicht auf einen spezifischen Unterbaum beschränkt.
- `all`
  - : Beschränkt die Auffindbarkeit von Elementen für Schnappschüsse während einer Ansichtstransition auf den Unterbaum des Elements, auf dem diese Eigenschaft gesetzt ist. Nur Elemente mit einem nicht-`none` {{cssxref("view-transition-name")}} werden berücksichtigt.

## Beschreibung

Während des [Ansichtstransitions-Prozesses](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erstellt der Browser Schnappschüsse von Elementen, auf denen ein nicht-`none` {{cssxref("view-transition-name")}} gesetzt ist. Diese Schnappschüsse werden dann mittels CSS-Animationen animiert.

Ein Problem, das während dieses Prozesses auftreten kann, sind Namenskollisionen zwischen in einer Ansichtstransition beteiligten Elementen. Es ist nicht möglich, denselben {{cssxref("view-transition-name")}} auf mehreren Elementen zu setzen — tut man es dennoch, wirft der Browser einen `InvalidStateError`, wenn die Methode [`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition) aufgerufen wird, um die Transition zu starten.

Man könnte dieses Problem lösen, indem man `view-transition-name` auf [`match-element`](/de/docs/Web/CSS/Reference/Properties/view-transition-name#match-element) setzt, um dem Browser zu ermöglichen, intern eindeutige Namen automatisch zuzuweisen. Dies funktioniert jedoch nicht, wenn man mehrere Komponenten aus unterschiedlichen Quellen einbindet, die man nicht kontrolliert, da eine Namenskollision dennoch auftreten könnte.

Die `view-transition-scope`-Eigenschaft ermöglicht es Ansichtstransitionen, eigenständig zu sein. Wenn `view-transition-scope: all` auf einem Element gesetzt ist, beschränkt es den Transitionsumfang auf dieses Element und seine Nachfahren, was zur Lösung des oben genannten Problems beitragen kann.

Sobald eine [element-begrenzte Ansichtstransition](/de/docs/Web/API/View_Transition_API/Using_element-scoped) ausgelöst wird, setzt der Browser automatisch `view-transition-scope: all` auf dem Transitionswurzelelement, wodurch sichergestellt wird, dass nur Elemente innerhalb des Transition-Scopes gesnapshots und animiert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `view-transition-scope`, um Schnappschüsse zu isolieren

Dieses Beispiel demonstriert, wie `view-transition-scope` verwendet wird, um den Scope von dokumentenweiten Ansichtstransitionen zu isolieren und die gleiche `view-transition-name` auf mehreren Elementen zu verwenden.

#### HTML

Das HTML enthält ein {{htmlelement("button")}}-Element zur Steuerung der Aktualisierung des DOMs, sowie mehrere Komponenten mit der Klasse `change-me`, einige davon sind verschachtelt, alle in einem {{htmlelement("section")}}-Element verpackt.

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

Wir beginnen damit, dieselbe `view-transition-name` auf allen Komponenten zu setzen. Dann setzen wir `view-transition-scope: all` auf all diese, um den Ansichtstransitionsprozess für jede einzelne zu isolieren. Anschließend setzen wir eine längere {{cssxref("animation-duration")}} für alle Ansichtstransitionen mit dieser `view-transition-name` über das {{cssxref("::view-transition-group()")}}-Pseudoelement.

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

Das Skript beginnt damit, Referenzen auf die Schaltfläche und die `<div>`-Elemente (unsere Komponenten) zu erfassen.

```js live-sample___vt-scope
const btn = document.querySelector("button");
const divs = document.querySelectorAll("div");
```

Als nächstes definieren wir eine Funktion namens `updateDivs()`, die den Textinhalt des verschachtelten {{htmlelement("span")}}-Elements jeder Komponente zwischen zwei Werten umschaltet und auch die Vordergrund- und Hintergrundfarben der Komponente zwischen zwei Werten wechselt.

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

Schließlich fügen wir dem `<button>`-Element einen `click`-Ereignislistener hinzu. Wenn die Schaltfläche geklickt wird, prüfen wir zuerst, ob `startViewTransition()` im `document`-Objekt existiert — wenn nicht, führen wir `updateDivs()` aus und verlassen die Funktion mit `return`. Dieser erste Teil ermöglicht es, dass Browser, die Ansichtstransitionen nicht unterstützen, dennoch das DOM aktualisieren können, ohne Fehler zu erzeugen. Anschließend führen wir `updateDivs()` in einem `startViewTransition()`-Callback aus, um die Ansichtstransition auszulösen, während das DOM aktualisiert wird.

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

Klicken Sie auf die Schaltfläche "Update DOM", um die Ansichtstransition zu sehen. Versuchen Sie nun Folgendes:

1. Untersuchen Sie eines der `<div>`-Elemente.
2. Deaktivieren Sie im Styles-Panel der Entwicklertools Ihres Browsers die `view-transition-scope: all;`-Deklaration.
3. Wechseln Sie jetzt zur JavaScript-Konsole.
4. Klicken Sie erneut auf die Schaltfläche "Update DOM".

Sie sollten sehen, dass die Animation der Ansichtstransition nicht angewendet wird, wenn sich das DOM ändert, und ein `InvalidStateError` in der Konsole gemeldet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("view-transition-name")}}
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using) Leitfaden
- [Verwendung von element-begrenzten Ansichtstransitionen](/de/docs/Web/API/View_Transition_API/Using_element-scoped)
