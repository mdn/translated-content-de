---
title: HTML Popover-Globalattribut
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Das **`popover`**-[Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover`-Attribut kann einen der folgenden Werte annehmen:

- `"auto"`
  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Popovers können "leicht" geschlossen werden – das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb davon klicken oder die <kbd>Esc</kbd>-Taste drücken. Ein `auto`-Popover zeigt normalerweise andere bereits angezeigte `auto`-Popovers nicht mehr an, es sei denn, sie sind verschachtelt.

    > [!NOTE]
    > Das Einstellen eines leeren Wertes für `popover` — `popover` oder `popover=""` — entspricht dem Einstellen von `popover="auto"`.

- `"hint"`
  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen `auto`-Popovers nicht, wenn sie angezeigt werden, schließen jedoch andere Hint-Popovers.
    Sie können leicht geschlossen werden und reagieren auf Schließanforderungen.

- `"manual"`
  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers können nicht "leicht" geschlossen werden und werden nicht automatisch geschlossen. Popovers müssen explizit über deklarative Anzeigen/Verbergen/Umschalt-Schaltflächen oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual`-Popovers können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element geöffnet werden (d.h. ein `<button>` oder ein `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf.

Wenn sie geöffnet sind, erscheinen Popover-Elemente über allen anderen Elementen in der {{Glossary("top_layer", "obersten Schicht")}} und werden nicht durch die {{cssxref('position')}}- oder {{cssxref('overflow')}}-Stilierung von Elternelementen beeinflusst.

Popovers, die den [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Status haben, können mithilfe zugeordneter Steuerungen (gekennzeichnet durch das [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) gezeigt und versteckt werden und leicht durch Klicken außerhalb des Popover-Bereichs, Öffnen eines anderen Popovers oder durch Drücken von browserspezifischen Mechanismen wie der <kbd>Esc</kbd>-Taste geschlossen werden.

Im Allgemeinen kann jeweils nur ein `auto`-Popover auf dem Bildschirm angezeigt werden — das Anzeigen eines zweiten Popovers, während eines bereits angezeigt wird, wird das erste ausblenden. Die Ausnahme dieser Regel ist, wenn Sie verschachtelte Auto-Popovers haben. Siehe [verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers) für weitere Details.

Sie können auch mithilfe von JavaScript gesteuert werden. Beispielsweise kann die [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methode verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers manuell angezeigt und verborgen werden — sie schließen nicht automatisch andere Popovers, wenn sie angezeigt werden, und können nicht leicht geschlossen werden. Dies ermöglicht Anwendungsfälle, in denen Sie mehrere Popovers gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen `auto`-Popovers nicht, wenn sie angezeigt werden, schließen jedoch andere Hint-Popovers. Sie können leicht geschlossen werden und reagieren auf Schließanforderungen.

Normalerweise werden `hint`-Popovers als Reaktion auf Nicht-Klick-JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und ausgeblendet. Durch Klicken auf eine Schaltfläche zum Öffnen eines `hint`-Popovers würde ein offenes `auto`-Popover leicht geschlossen werden.

Für ausführliche Informationen zur Verwendung siehe die [Popover-API](/de/docs/Web/API/Popover_API)-Startseite.

## Beispiele

### Ein Element zu einem Popover machen

Der folgende Code rendert eine Schaltfläche, die, wenn sie aktiviert wird, ein Popover-Element öffnet. Dieses Verhalten kann nur mit HTML erreicht werden.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('basic_example_of_popover', 600, 100)}}

### Verschachtelung von Popovers

In diesem Beispiel öffnet eine Schaltfläche ein Popover, das zusätzliche verschachtelte Popovers enthält. Die verschachtelten Popovers können geöffnet werden, ohne das ursprüngliche Menü-Popover zu schließen.

#### HTML

Im ersten Teil des HTML erstellen wir ein {{htmlElement("button")}}, das das Haupt-Popover öffnet, welches ein Menü mit einigen Optionen enthält.

```html
<header>
  <button popovertarget="menu">Open Menu</button>
</header>
<main>
  <!--  Page content goes here  -->
</main>
```

Im zweiten Teil des HTML erstellen wir das Menü-Popover, das von der Schaltfläche geöffnet wird, die wir im vorherigen Codeblock erstellt haben. Dieses Menü-Popover enthält eine ungeordnete Liste von Menüpunkten, von denen jeder eine Info-Schaltfläche enthält, die ein verschachteltes Popover öffnet. Das Menü-Popover verwendet `popover="auto"`, was bedeutet, dass es nicht geschlossen wird, wenn die verschachtelten Popovers geöffnet werden.

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

Im letzten Teil des HTML erstellen wir die Info-Popovers für jeden Menüpunkt. Jedes Popover enthält `popover="hint"`, was bedeutet, dass es das ursprüngliche Menü-Popover nicht schließen wird, aber die anderen geöffneten Info-Popovers schließen wird.

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

Wir haben [Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verwendet, um das Menü-Popover unterhalb des `<button>` zu positionieren, und [Grid](/de/docs/Web/CSS/Guides/Grid_layout), um die Menüpunkte und Info-Schaltflächen anzuordnen.

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

Hier haben wir Ankerpositionierung verwendet, um die Info-Popovers rechts neben ihren jeweiligen Info-Schaltflächen erscheinen zu lassen.

```css
div.info-popover {
  margin: 2rem;
  inset: auto;
  max-width: 300px;
  position-area: right;
}
```

#### Ergebnis

Klicken Sie auf die Schaltfläche _Menü öffnen_, und klicken Sie dann auf die Info-Symbole (ⓘ) neben den Menüoptionen, um die Info-Popovers zu öffnen.

{{EmbedLiveSample('popover_hint', 600, 250)}}

> [!NOTE]
> Besuchen Sie unsere [Popover API examples landing page](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN-Popover-Beispielen zuzugreifen.

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
