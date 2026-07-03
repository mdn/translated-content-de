---
title: "`popover` HTML Globalattribut"
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: 58290795d9f78c91933e092053bb6439bde56651
---

Das **`popover`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das Attribut `popover` kann einen der folgenden Werte annehmen:

- `"auto"`
  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Popover können "light dismissed" werden — das bedeutet, dass Sie das Popover durch Klicken außerhalb des Popovers oder durch Drücken der <kbd>Esc</kbd>-Taste ausblenden können. Ein `auto`-Popover anzuzeigen, schließt im Allgemeinen andere `auto`-Popover, die bereits angezeigt werden, es sei denn, sie sind verschachtelt.

    > [!NOTE]
    > Ein leerer Wert für `popover` — `popover` oder `popover=""` — entspricht der Einstellung `popover="auto"`.

- `"hint"`
  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popover schließen keine `auto`-Popover, wenn sie angezeigt werden, aber sie schließen andere Hint-Popover, die nicht ihre Vorfahren im [Hint-Stack](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules) sind.
    Sie können "light dismissed" werden und reagieren auf Schließanforderungen.

- `"manual"`
  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popover können nicht "light dismissed" werden und werden nicht automatisch geschlossen. Popover müssen explizit mit deklarativen Anzeigen/Verbergen/Umschalt-Schaltflächen oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual`-Popover können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element geöffnet werden (z. B. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder ein Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover).

Wenn sie geöffnet sind, erscheinen Popover-Elemente oberhalb aller anderen Elemente in der {{Glossary("top_layer", "Top-Ebene")}} und werden nicht durch {{cssxref('position')}}- oder {{cssxref('overflow')}}-Stile der Elternelemente beeinflusst.

Popover, die den [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Status haben, können mit zugehörigen Steuerelementen (durch das [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut angegeben) angezeigt und verborgen sowie durch Klicken außerhalb des Popover-Bereichs, Öffnen eines anderen Popovers oder Drücken browserspezifischer Mechanismen wie der <kbd>Esc</kbd>-Taste "light dismissed" werden.

In der Regel kann jeweils nur ein `auto`-Popover auf dem Bildschirm angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits ein Popover angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel sind verschachtelte Auto-Popover. Weitere Details finden Sie unter [Verschachtelte Popover](/de/docs/Web/API/Popover_API/Using#nested_popovers).

Sie können auch mit JavaScript gesteuert werden, zum Beispiel kann die [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methode verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popover manuell angezeigt und verborgen werden — sie schließen nicht automatisch andere Popover, wenn sie angezeigt werden, und sie können nicht "light dismissed" werden. Dies ermöglicht Anwendungsfälle, bei denen Sie mehrere Popover gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popover schließen keine `auto`-Popover, wenn sie angezeigt werden, aber sie schließen andere Hint-Popover, die nicht ihre Vorfahren im Hint-Stack sind. Sie können "light dismissed" werden und reagieren auf Schließanforderungen.

In der Regel werden `hint`-Popover als Reaktion auf nichtklickbare JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und verborgen. Das Klicken auf eine Schaltfläche, um ein `hint`-Popover zu öffnen, würde ein geöffnetes `auto`-Popover "light dismissen".

Um detaillierte Informationen zur Verwendung zu erhalten, besuchen Sie die [Popover API](/de/docs/Web/API/Popover_API)-Einstiegsseite.

## Beispiele

### Ein Element zum Popover machen

Der folgende Code rendert eine Schaltfläche, die, wenn aktiviert, ein Popover-Element öffnet. Dieses Verhalten kann allein mit HTML erreicht werden.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('basic_example_of_popover', 600, 100)}}

### Verschachtelte Popover

In diesem Beispiel öffnet eine Schaltfläche ein Popover, das zusätzliche verschachtelte Popover enthält. Die verschachtelten Popover können geöffnet werden, ohne das ursprüngliche Menü-Popover zu schließen.

#### HTML

Im ersten Teil des HTML erstellen wir ein {{htmlElement("button")}}, das das Haupt-Popover öffnet, welches ein Menü mit einigen Optionen ist.

```html
<header>
  <button popovertarget="menu">Open Menu</button>
</header>
<main>
  <!--  Page content goes here  -->
</main>
```

Im zweiten Teil des HTML erstellen wir das Menü-Popover, das durch die Schaltfläche, die wir im vorherigen Codeblock erstellt haben, geöffnet wird. Dieses Menü-Popover enthält eine ungeordnete Liste von Menüelementen, die jeweils mit einer Info-Schaltfläche ausgestattet sind, um ein verschachteltes Popover zu öffnen. Das Menü-Popover verwendet `popover="auto"`, was bedeutet, dass es nicht geschlossen wird, wenn die verschachtelten Popover geöffnet werden.

```html
<!-- menu popover -->
<div id="menu" popover="auto">
  <ul>
    <li>
      <a href="#">New thing</a><button popovertarget="new-info">ⓘ</button>
    </li>
    <li>
      <a href="#">Open thing</a><button popovertarget="open-info">ⓘ</button>
    </li>
    <li>
      <a href="#">Save thing</a><button popovertarget="save-info">ⓘ</button>
    </li>
    <li>
      <a href="#">Close thing</a><button popovertarget="close-info">ⓘ</button>
    </li>
  </ul>
</div>
```

Im letzten Teil des HTML erstellen wir die Info-Popover für jedes Menüelement. Jedes Popover enthält `popover="hint"`, was bedeutet, dass das ursprüngliche Menü-Popover nicht geschlossen wird, aber die anderen offenen Info-Popover geschlossen werden.

```html
<!-- info popovers -->
<div id="new-info" class="info-popover" popover="hint">
  This is some information about <strong>creating a new</strong> thing.
</div>
<div id="open-info" class="info-popover" popover="hint">
  This is some information about <strong>opening an existing</strong> thing.
</div>
<div id="save-info" class="info-popover" popover="hint">
  This is some information about <strong>saving the current</strong> thing.
</div>
<div id="close-info" class="info-popover" popover="hint">
  This is some information about <strong>closing the current</strong> thing.
</div>
```

#### CSS

```css hidden
header {
  display: flex;
  justify-content: center;
}
header button {
  margin: 0.4rem auto;
}
```

Wir haben [Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verwendet, um das Menü-Popover unterhalb des `<button>` zu positionieren, und [Grid](/de/docs/Web/CSS/Guides/Grid_layout), um die Menüelemente und Infoknöpfe anzuordnen.

```css
#menu {
  margin: 0;
  margin-top: 0.4rem;
  inset: auto;
  position-area: bottom;
}
#menu ul {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.4rem;
  padding: 0.4rem;
}
#menu li {
  grid-column: span 2;
  display: grid;
  grid: inherit;
  grid-template-columns: subgrid;
  gap: 1.4rem;
}
li [popovertarget] {
  cursor: pointer;
  font-size: 1.2rem;
}
li button {
  border: none;
  padding: 0;
  background-color: inherit;
}
```

Hier haben wir die Ankerpositionierung verwendet, um die Info-Popover rechts neben ihren jeweiligen Infoknöpfen erscheinen zu lassen.

```css
div.info-popover {
  margin: 2rem;
  inset: auto;
  max-width: 300px;
  position-area: right;
}
```

#### Ergebnis

Klicken Sie auf die Schaltfläche _Menü öffnen_, und klicken Sie dann auf die Info-Icons (ⓘ) neben den Menüoptionen, um die Info-Popover zu öffnen.

{{EmbedLiveSample('popover_hint', 600, 250)}}

> [!NOTE]
> Sehen Sie sich unsere [Popover API-Beispieleinstiegsseite](https://mdn.github.io/dom-examples/popover-api/) an, um die vollständige Sammlung von MDN-Popover-Beispielen zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attribut
- {{cssxref("::backdrop")}} CSS-Pseudoelement
- {{cssxref(":popover-open")}} CSS-Pseudoklasse
