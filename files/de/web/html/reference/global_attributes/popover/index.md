---
title: "`popover` HTML-Globalattribut"
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`popover`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover`-Attribut kann einen der folgenden Werte annehmen:

- `"auto"`
  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Popovers können "light dismissed" werden — das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb davon klicken oder die <kbd>Esc</kbd>-Taste drücken. Das Anzeigen eines `auto`-Popovers schließt in der Regel andere `auto`-Popovers, die bereits angezeigt werden, es sei denn, sie sind verschachtelt.

    > [!NOTE]
    > Ein leerer Wert für `popover` — `popover` oder `popover=""` — ist gleichbedeutend mit der Einstellung `popover="auto"`.

- `"hint"`
  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie schließen andere Hint-Popovers.
    Sie können "light dismissed" werden und reagieren auf Schließanforderungen.

- `"manual"`
  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers können nicht "light dismissed" werden und werden nicht automatisch geschlossen. Popovers müssen ausdrücklich über deklarative Show/Hide/Toggle-Buttons oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual`-Popovers können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente werden über `display: none` versteckt, bis sie über ein aufrufendes/steuerndes Element (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf geöffnet werden.

Wenn ein Popover geöffnet ist, wird es über allen anderen Elementen in der {{Glossary("top_layer", "obersten Schicht")}} erscheinen und nicht von den {{cssxref('position')}}- oder {{cssxref('overflow')}}-Stilgebungen der Elternelemente beeinflusst.

Popovers, die den [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Status haben, können über zugeordnete Steuerelemente (die durch das [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut bezeichnet werden) ein- und ausgeblendet und "light dismissed" werden, indem außerhalb des Popover-Bereichs geklickt, ein anderes Popover geöffnet oder browserspezifische Mechanismen wie die <kbd>Esc</kbd>-Taste gedrückt werden.

Im Allgemeinen kann nur ein `auto`-Popover gleichzeitig auf dem Bildschirm angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte Auto-Popovers haben. Siehe [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers) für weitere Details.

Sie können auch mit JavaScript gesteuert werden, zum Beispiel kann die Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen angezeigt und versteckt umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers manuell ein- und ausgeblendet werden — sie schließen nicht automatisch andere Popovers, wenn sie angezeigt werden, und können nicht "light dismissed" werden. Dies ermöglicht Anwendungsfälle, in denen Sie mehrere Popovers gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie schließen andere Hint-Popovers. Sie können "light dismissed" werden und reagieren auf Schließanforderungen.

Normalerweise werden `hint`-Popovers als Antwort auf JavaScript-Events, die kein Klicken beinhalten, wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und versteckt. Ein Klick auf einen Button zum Öffnen eines `hint`-Popovers würde ein geöffnetes `auto`-Popover "light-dismiss".

Für detaillierte Informationen zur Verwendung siehe die [Popover API](/de/docs/Web/API/Popover_API)-Startseite.

## Beispiele

### Ein Element als Popover erstellen

Der folgende Code rendert einen Button, der beim Aktivieren ein Popover-Element öffnet. Dieses Verhalten kann allein mit HTML erreicht werden.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('basic_example_of_popover', 600, 100)}}

### Popovers verschachteln

In diesem Beispiel öffnet ein Button ein Popover, das zusätzliche verschachtelte Popovers enthält. Die verschachtelten Popovers können geöffnet werden, ohne das ursprüngliche Menü-Popover zu schließen.

#### HTML

Im ersten Teil des HTMLs erstellen wir ein {{htmlElement("button")}}, das das Haupt-Popover öffnet, welches ein Menü mit einigen Optionen enthält.

```html
<header>
  <button popovertarget="menu">Open Menu</button>
</header>
<main>
  <!--  Page content goes here  -->
</main>
```

Im zweiten Teil des HTMLs erstellen wir das Menü-Popover, das durch den Button geöffnet wird, den wir im vorherigen Codeblock erstellt haben. Dieses Menü-Popover enthält eine ungeordnete Liste von Menüelementen, die jeweils mit einem Info-Button versehen sind, der ein verschachteltes Popover öffnet. Das Menü-Popover verwendet `popover="auto"`, was bedeutet, dass es nicht geschlossen wird, wenn die verschachtelten Popovers geöffnet werden.

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

Im letzten Teil des HTMLs erstellen wir die Info-Popovers für jedes Menüelement. Jedes Popover enthält `popover="hint"`, was bedeutet, dass es das ursprüngliche Menü-Popover nicht schließen wird, aber die anderen geöffneten Info-Popovers schließen wird.

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

Wir haben [Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verwendet, um das Menü-Popover unterhalb des `<button>` zu positionieren, und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) verwendet, um die Menüelemente und Info-Buttons anzuordnen.

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

Hier haben wir die Ankerpositionierung verwendet, um die Info-Popovers rechts neben ihren jeweiligen Info-Buttons erscheinen zu lassen.

```css
div.info-popover {
  margin: 2rem;
  inset: auto;
  max-width: 300px;
  position-area: right;
}
```

#### Resultat

Klicken Sie auf den _Menü öffnen_-Button und dann auf die Info-Icons (ⓘ) neben den Menüoptionen, um die Info-Popovers zu öffnen.

{{EmbedLiveSample('popover_hint', 600, 250)}}

> [!NOTE]
> Besuchen Sie unsere [Popover API Beispiel-Startseite](https://mdn.github.io/dom-examples/popover-api/), um die vollständige Sammlung von MDN Popover-Beispielen zu sehen.

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
