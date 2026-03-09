---
title: HTML-Popover-Globalattribut
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: 6c53947ceb7d71352b382f9d6564d021d7fe376e
---

Das **`popover`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover`-Attribut kann einen der folgenden Werte annehmen:

- `"auto"`
  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Popovers können „leicht abgewiesen“ werden – das bedeutet, dass Sie das Popover durch Klicken außerhalb davon oder durch Drücken der <kbd>Esc</kbd>-Taste verstecken können. Das Anzeigen eines `auto` Popovers schließt in der Regel andere bereits angezeigte `auto` Popovers, es sei denn, sie sind verschachtelt.

    > [!NOTE]
    > Ein leeren Wert für `popover` festzulegen – `popover` oder `popover=""` – entspricht der Einstellung `popover="auto"`.

- `"hint"`
  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen jedoch andere Hint-Popovers. Sie können leicht abgewiesen werden und reagieren auf Schließanforderungen.

- `"manual"`
  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers können nicht „leicht abgewiesen“ werden und werden nicht automatisch geschlossen. Popovers müssen explizit durch deklarative Show/Hide/Toggle-Buttons oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual` Popovers können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind über `display: none` versteckt, bis sie über ein aufrufendes/steuerndes Element (z. B. ein `<button>` oder ein `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) Aufruf geöffnet werden.

Wenn sie geöffnet werden, erscheinen Popover-Elemente über allen anderen Elementen in der {{Glossary("top_layer", "Top-Ebene")}} und werden nicht von den CSS-Stilen {{cssxref('position')}} oder {{cssxref('overflow')}} der Elternelemente beeinflusst.

Popovers, die sich im [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Zustand befinden, können mithilfe von zugehörigen Steuerungen (festgelegt durch das [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut) angezeigt und versteckt werden und durch Klicken außerhalb des Popover-Bereichs, das Öffnen eines anderen Popovers oder durch das Drücken von browserspezifischen Mechanismen wie der <kbd>Esc</kbd>-Taste „leicht abgewiesen“ werden.

In der Regel kann nur ein `auto` Popover gleichzeitig auf dem Bildschirm angezeigt werden – das Anzeigen eines zweiten Popovers, wenn eines bereits angezeigt wird, versteckt das erste. Die Ausnahme von dieser Regel besteht, wenn Sie verschachtelte Auto-Popovers haben. Siehe [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers) für weitere Details.

Sie können auch mit JavaScript gesteuert werden, zum Beispiel kann die Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen angezeigt und versteckt umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers manuell angezeigt und versteckt werden – sie schließen andere Popovers nicht automatisch, wenn sie angezeigt werden, und können nicht „leicht abgewiesen“ werden. Dies ermöglicht Anwendungsfälle, bei denen Sie mehrere Popovers gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen jedoch andere Hint-Popovers. Sie können leicht abgewiesen werden und reagieren auf Schließanforderungen.

In der Regel werden `hint` Popovers als Reaktion auf nicht klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und versteckt. Das Klicken auf eine Schaltfläche zum Öffnen eines `hint` Popovers würde dazu führen, dass ein geöffnetes `auto` Popover „leicht abgewiesen“ wird.

Für detaillierte Informationen zur Verwendung siehe die [Popover API](/de/docs/Web/API/Popover_API) Hauptseite.

## Beispiele

### Ein Element zu einem Popover machen

Der folgende Code rendert eine Schaltfläche, die beim Aktivieren ein Popover-Element öffnet. Dieses Verhalten kann allein mit HTML erreicht werden.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('basic_example_of_popover', 600, 100)}}

### Verschachtelung von Popovers

In diesem Beispiel öffnet eine Schaltfläche ein Popover, das zusätzliche verschachtelte Popovers enthält. Die verschachtelten Popovers können geöffnet werden, ohne das ursprüngliche Menü-Popover zu schließen.

#### HTML

Im ersten Teil des HTML erstellen wir einen {{htmlElement("button")}}, der das Haupt-Popover öffnet, das ein Menü mit einigen Optionen enthält.

```html
<header>
  <button popovertarget="menu">Open Menu</button>
</header>
<main>
  <!--  Page content goes here  -->
</main>
```

Im zweiten Teil des HTML erstellen wir das Menü-Popover, das durch die Schaltfläche im vorherigen Codeblock geöffnet wird. Dieses Menü-Popover enthält eine ungeordnete Liste von Menüelementen, von denen jedes eine Info-Schaltfläche hat, die ein verschachteltes Popover öffnet. Das Menü-Popover verwendet `popover="auto"`, was bedeutet, dass es nicht geschlossen wird, wenn die verschachtelten Popovers geöffnet werden.

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

Im letzten Teil des HTML erstellen wir die Info-Popovers für jedes Menüelement. Jedes Popover umfasst `popover="hint"`, was bedeutet, dass es das ursprüngliche Menü-Popover nicht schließt, aber die anderen offenen Info-Popovers schließt.

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

Wir haben [Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verwendet, um das Menü-Popover unter dem `<button>` zu positionieren, und [Grid](/de/docs/Web/CSS/Guides/Grid_layout), um die Menüelemente und Info-Schaltflächen anzuordnen.

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

Hier haben wir Anker-Positionierung verwendet, um die Info-Popovers rechts neben ihren jeweiligen Info-Schaltflächen erscheinen zu lassen.

```css
div.info-popover {
  margin: 2rem;
  inset: auto;
  max-width: 300px;
  position-area: right;
}
```

#### Ergebnis

Klicken Sie auf die Schaltfläche _Menü öffnen_ und dann auf die Info-Symbole (ⓘ) neben den Menüoptionen, um die Info-Popovers zu öffnen.

{{EmbedLiveSample('popover_hint', 600, 250)}}

> [!NOTE]
> Besuchen Sie unsere [Popover API Beispiele Hauptseite](https://mdn.github.io/dom-examples/popover-api/), um die vollständige Sammlung von MDN-Popover-Beispielen zu sehen.

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
