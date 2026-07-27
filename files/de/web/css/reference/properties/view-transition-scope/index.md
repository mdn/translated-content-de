---
title: "`view-transition-scope` CSS property"
short-title: view-transition-scope
slug: Web/CSS/Reference/Properties/view-transition-scope
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{SeeCompatTable}}

Die **`view-transition-scope`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, die Auffindbarkeit von Elementen mit auf ihnen gesetzten {{cssxref("view-transition-name")}} Werten (und somit die Erstellung von View-Transition-[Snapshots](/de/docs/Web/API/View_Transition_API/Using#an_aside_on_snapshots)) auf einen bestimmten Element-Teilbaum zu isolieren.

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
  - : Der Anfangswert. Die Auffindbarkeit von Elementen, die während einer View-Transition gesnapshotted werden, ist nicht auf einen bestimmten Teilbaum beschränkt.
- `all`
  - : Beschränkt die Auffindbarkeit von Elementen, die während einer View-Transition gesnapshotted werden, auf den Teilbaum des Elements, auf dem diese Eigenschaft gesetzt ist. Es werden nur Elemente mit einem nicht `none` {{cssxref("view-transition-name")}} berücksichtigt.

## Beschreibung

Während [des View-Transition-Prozesses](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erfasst der Browser Snapshots von Elementen, auf denen ein nicht `none` {{cssxref("view-transition-name")}} gesetzt ist. Diese Snapshots werden dann über CSS-Animationen animiert.

Ein Problem, das während dieses Prozesses auftreten kann, sind Namenskollisionen zwischen den an einer View-Transition beteiligten Elementen. Sie können nicht denselben {{cssxref("view-transition-name")}} auf mehreren Elementen setzen — wenn Sie dies tun, wirft der Browser einen `InvalidStateError`, wenn die Methode [`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition) aufgerufen wird, um die Transition zu starten.

Sie könnten dieses Problem lösen, indem Sie ein `view-transition-name` von [`match-element`](/de/docs/Web/CSS/Reference/Properties/view-transition-name#match-element) auf den Elementen setzen, um dem Browser zu erlauben, intern eindeutige Namen automatisch zuzuweisen. Dies funktioniert jedoch nicht, wenn Sie mehrere Komponenten aus verschiedenen Quellen einbinden, die Sie nicht kontrollieren. Eine Namenskollision könnte trotzdem auftreten.

Die `view-transition-scope` Eigenschaft ermöglicht es, View-Transitions in sich geschlossen zu machen. Wenn `view-transition-scope: all` auf ein Element gesetzt ist, beschränkt es den Transition-Scope auf dieses Element und seine Nachkommen, was verwendet werden kann, um das oben genannte Problem zu lösen.

Jedes Mal, wenn eine [element-scoped View-Transition](/de/docs/Web/API/View_Transition_API/Using_element-scoped) ausgelöst wird, setzt der Browser automatisch `view-transition-scope: all` auf das Transition-Root-Element, um sicherzustellen, dass nur Elemente innerhalb des Transition-Scopes gesnapshotted und animiert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `view-transition-scope`, um Snapshots zu isolieren

Dieses Beispiel zeigt, wie man `view-transition-scope` verwendet, um den Scope dokument-spezifischer View-Transitions zu isolieren, sodass derselbe `view-transition-name` auf mehreren Elementen verwendet werden kann.

#### HTML

Das HTML enthält ein {{htmlelement("button")}}-Element zur Steuerung der Aktualisierung des DOMs, sowie mehrere Komponenten mit der Klasse `change-me`, von denen einige verschachtelt sind, und die alle in einem {{htmlelement("section")}}-Element eingeschlossen sind.

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

Wir beginnen damit, auf alle Komponenten denselben `view-transition-name` zu setzen. Dann setzen wir `view-transition-scope: all` auf alle von ihnen, um den View-Transition-Prozess für jede zu isolieren. Als nächstes setzen wir eine längere {{cssxref("animation-duration")}} auf alle View-Transitions mit diesem `view-transition-name` über das {{cssxref("::view-transition-group()")}} Pseudo-Element.

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

Das Skript beginnt mit dem Abrufen von Referenzen auf den Button und die `<div>`-Elemente (unsere Komponenten).

```js live-sample___vt-scope
const btn = document.querySelector("button");
const divs = document.querySelectorAll("div");
```

Als nächstes definieren wir eine Funktion namens `updateDivs()`, welche den Textinhalt des geschachtelten {{htmlelement("span")}}-Elements jeder Komponente zwischen zwei Werten umschaltet und auch die Vorder- und Hintergrundfarben der Komponente zwischen zwei Werten umschaltet.

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

Schließlich fügen wir dem `<button>`-Element einen `click`-Ereignislistener hinzu. Wenn der Button geklickt wird, prüfen wir zuerst, ob `startViewTransition()` im `document`-Objekt existiert — falls nicht, führen wir `updateDivs()` aus und geben dann aus der Funktion zurück. Dieser erste Teil ermöglicht es, dass Browser, die View-Transitions nicht unterstützen, das DOM trotzdem ohne Fehler aktualisieren. Danach führen wir `updateDivs()` innerhalb eines `startViewTransition()`-Callbacks aus, um die View-Transition auszulösen, wenn das DOM aktualisiert wird.

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

Klicken Sie auf die Schaltfläche "Update DOM", um die View-Transition zu sehen. Versuchen Sie nun Folgendes:

1. Untersuchen Sie eines der `<div>`-Elemente.
2. Deaktivieren Sie im Styles-Panel in den Entwicklerwerkzeugen Ihres Browsers die `view-transition-scope: all;`-Deklaration, um sie zu deaktivieren.
3. Wechseln Sie nun zur JavaScript-Konsole.
4. Klicken Sie erneut auf die Schaltfläche "Update DOM".

Sie sollten sehen, dass die View-Transition-Animation nicht angewendet wird, wenn das DOM geändert wird, und ein `InvalidStateError` in der Konsole gemeldet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("view-transition-name")}}
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using) Leitfaden
- [Verwendung element-spezifischer View-Transitions](/de/docs/Web/API/View_Transition_API/Using_element-scoped)
