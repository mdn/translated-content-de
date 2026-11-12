---
title: Globales HTML-Attribut `popover`
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: d16355b5ec024c990cff93dc36232c95d944bfce
---

Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) **`popover`** kennzeichnet ein Element als Popover-Element.

## Beschreibung

Popover-Elemente sind durch `display: none` ausgeblendet, bis sie über ein auslösendes oder steuerndes Element (also einen `<button>` oder ein `<input type="button">` mit dem Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)) oder durch einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) geöffnet werden.

Geöffnete Popover-Elemente erscheinen über allen anderen Elementen in der {{Glossary("top_layer", "obersten Ebene")}}. Die Formatierung von {{cssxref('position')}} oder {{cssxref('overflow')}} übergeordneter Elemente wirkt sich nicht auf sie aus.

Popover mit dem Zustand [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) können über zugehörige Steuerelemente ein- und ausgeblendet werden, die durch das Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) festgelegt sind. Sie können außerdem durch Klicken außerhalb des Popover-Bereichs, durch Öffnen eines anderen Popovers oder durch browserspezifische Aktionen wie das Drücken der Taste <kbd>Esc</kbd> geschlossen werden („Light Dismiss“).

Im Allgemeinen kann jeweils nur ein `auto`-Popover angezeigt werden: Wird ein zweites geöffnet, während bereits eines angezeigt wird, wird das erste ausgeblendet. Eine Ausnahme bilden verschachtelte `auto`-Popover. Weitere Informationen finden Sie unter [Verschachtelte Popover](/de/docs/Web/API/Popover_API/Using#nested_popovers).

Popover lassen sich auch mit JavaScript steuern. Beispielsweise können Sie mit der Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) zwischen dem angezeigten und dem ausgeblendeten Zustand wechseln.

[`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popover müssen dagegen manuell ein- und ausgeblendet werden. Wenn sie angezeigt werden, schließen sie andere Popover nicht automatisch und lassen sich nicht per Light Dismiss schließen. Dadurch können mehrere Popover gleichzeitig angezeigt werden.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popover schließen beim Öffnen keine `auto`-Popover. Sie schließen jedoch andere `hint`-Popover, die im Hint-Stack keine übergeordneten Elemente des geöffneten Popovers sind. Sie lassen sich per Light Dismiss schließen und reagieren auf Schließanforderungen.

Üblicherweise werden `hint`-Popover als Reaktion auf JavaScript-Ereignisse ein- und ausgeblendet, die keine Klickereignisse sind, etwa [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event). Wenn Sie auf eine Schaltfläche klicken, um ein `hint`-Popover zu öffnen, wird ein geöffnetes `auto`-Popover per Light Dismiss geschlossen.

Ausführliche Informationen zur Verwendung finden Sie auf der Übersichtsseite zur [Popover API](/de/docs/Web/API/Popover_API).

## Wert

Das Attribut `popover` kann einen der folgenden Werte annehmen:

- `"auto"`
  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Popover lassen sich per „Light Dismiss“ schließen. Das bedeutet, dass Sie das Popover durch Klicken außerhalb des Popovers oder durch Drücken der Taste <kbd>Esc</kbd> ausblenden können. Beim Öffnen eines `auto`-Popovers werden andere bereits angezeigte `auto`-Popover in der Regel geschlossen, sofern sie nicht verschachtelt sind.

    > [!NOTE]
    > Ein leerer Wert für `popover` – `popover` oder `popover=""` – entspricht `popover="auto"`.

- `"hint"`
  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popover schließen beim Öffnen keine `auto`-Popover. Sie schließen jedoch andere `hint`-Popover, die im [Hint-Stack](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules) keine übergeordneten Elemente des geöffneten Popovers sind.
    Sie lassen sich per Light Dismiss schließen und reagieren auf Schließanforderungen.

- `"manual"`
  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popover lassen sich nicht per „Light Dismiss“ schließen und werden nicht automatisch geschlossen. Sie müssen ausdrücklich über deklarative Schaltflächen zum Einblenden, Ausblenden oder Umschalten oder über JavaScript ein- und ausgeblendet werden. Mehrere unabhängige `manual`-Popover können gleichzeitig angezeigt werden.

## Beispiele

### Ein Element als Popover festlegen

Der folgende Code erzeugt eine Schaltfläche, die beim Aktivieren ein Popover-Element öffnet. Dieses Verhalten lässt sich allein mit HTML umsetzen.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('making_an_element_a_popover', 600, 100)}}

### Popover verschachteln

In diesem Beispiel öffnet eine Schaltfläche ein Popover, das weitere verschachtelte Popover enthält. Die verschachtelten Popover können geöffnet werden, ohne das ursprüngliche Menü-Popover zu schließen.

#### HTML

Im ersten Teil des HTML-Codes erstellen wir einen {{htmlElement("button")}}, der das Haupt-Popover öffnet: ein Menü mit einigen Optionen.

```html
<header>
  <button popovertarget="menu">Open Menu</button>
</header>
<main>
  <!--  Page content goes here  -->
</main>
```

Im zweiten Teil des HTML-Codes erstellen wir das Menü-Popover, das von der Schaltfläche aus dem vorherigen Codeblock geöffnet wird. Es enthält eine ungeordnete Liste von Menüeinträgen. Jeder Eintrag hat eine Info-Schaltfläche, die ein verschachteltes Popover öffnet. Das Menü-Popover verwendet `popover="auto"` und wird deshalb nicht geschlossen, wenn die verschachtelten Popover geöffnet werden.

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

Im letzten Teil des HTML-Codes erstellen wir die Info-Popover für die einzelnen Menüeinträge. Jedes Popover enthält `popover="hint"`. Dadurch schließt es das ursprüngliche Menü-Popover nicht, wohl aber andere geöffnete Info-Popover.

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

Wir verwenden [Anchor Positioning](/de/docs/Web/CSS/Guides/Anchor_positioning), um das Menü-Popover unterhalb des `<button>` zu positionieren, und [Grid](/de/docs/Web/CSS/Guides/Grid_layout), um die Menüeinträge und Info-Schaltflächen anzuordnen.

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

Hier verwenden wir Anchor Positioning, damit die Info-Popover rechts neben ihren jeweiligen Info-Schaltflächen erscheinen.

```css
div.info-popover {
  margin: 2rem;
  inset: auto;
  max-width: 300px;
  position-area: right;
}
```

#### Ergebnis

Klicken Sie auf die Schaltfläche _Menü öffnen_ und anschließend auf die Info-Symbole (ⓘ) neben den Menüoptionen, um die Info-Popover zu öffnen.

{{EmbedLiveSample('nesting_popovers', 600, 250)}}

> [!NOTE]
> Eine vollständige Sammlung von MDN-Popover-Beispielen finden Sie auf unserer [Übersichtsseite mit Beispielen zur Popover API](https://mdn.github.io/dom-examples/popover-api/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
- HTML-Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
- HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
- CSS-Pseudoelement {{cssxref("::backdrop")}}
- CSS-Pseudoklasse {{cssxref(":popover-open")}}
