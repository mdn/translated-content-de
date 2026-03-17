---
title: HTML popover globales Attribut
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: d35f07a74f76374a6d98aa07b0b42e79322b02ec
---

Das **`popover`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover`-Attribut kann einen der folgenden Werte annehmen:

- `"auto"`
  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Popovers können "leicht verworfen" werden – das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb davon klicken oder die <kbd>Esc</kbd>-Taste drücken. Das Anzeigen eines `auto` Popovers wird in der Regel andere bereits angezeigte `auto` Popovers schließen, es sei denn, sie sind verschachtelt.

    > [!NOTE]
    > Das Setzen eines leeren Wertes für `popover` — `popover` oder `popover=""` — ist gleichbedeutend mit dem Setzen von `popover="auto"`.

- `"hint"`
  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen jedoch andere `hint` Popovers.
    Sie können leicht verworfen werden und reagieren auf Schließanfragen.

- `"manual"`
  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers können nicht "leicht verworfen" werden und werden nicht automatisch geschlossen. Popovers müssen explizit mit deklarativen Anzeigen-/Ausblenden-/Umschaltknöpfen oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual` Popovers können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind über `display: none` versteckt, bis sie über ein auslösendes/steuerndes Element (z. B. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf geöffnet werden.

Wenn geöffnet, erscheinen Popover-Elemente über allen anderen Elementen in der {{Glossary("top_layer", "obersten Schicht")}} und werden nicht von Stilen wie {{cssxref('position')}} oder {{cssxref('overflow')}} von Elternelementen beeinflusst.

Popovers, die sich im [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Zustand befinden, können mit zugehörigen Steuerelementen (durch das [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) ein- und ausgeschaltet werden und durch Klicken außerhalb des Popover-Bereichs, Öffnen eines anderen Popovers oder Drücken von browserspezifischen Mechanismen wie der <kbd>Esc</kbd>-Taste "leicht verworfen" werden.

In der Regel kann jeweils nur ein `auto` Popover auf dem Bildschirm angezeigt werden – das Anzeigen eines zweiten Popovers, während eines bereits gezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte `auto` Popovers haben. Weitere Details finden Sie unter [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers).

Sie können auch mit JavaScript gesteuert werden, zum Beispiel kann die [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methode verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Dagegen müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers manuell ein- und ausgeblendet werden – sie schließen nicht automatisch andere Popovers, wenn sie angezeigt werden und können nicht "leicht verworfen" werden. Dies ermöglicht Anwendungsfälle, in denen Sie mehrere Popovers gleichzeitig zeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, aber schließen andere `hint` Popovers. Sie können leicht verworfen werden und reagieren auf Schließanfragen.

In der Regel werden `hint` Popovers als Antwort auf nicht-klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und verborgen. Das Klicken auf einen Knopf zum Öffnen eines `hint` Popovers würde ein geöffnetes `auto` Popover leicht verwerfen.

Für detaillierte Informationen zur Verwendung siehe die [Popover API](/de/docs/Web/API/Popover_API) Startseite.

## Beispiele

### Ein Element zu einem Popover machen

Der folgende Code rendert einen Knopf, der beim Aktivieren ein Popover-Element öffnet. Dieses Verhalten kann allein mit HTML erreicht werden.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('basic_example_of_popover', 600, 100)}}

### Verschachtelung von Popovers

In diesem Beispiel öffnet ein Knopf ein Popover, das zusätzliche verschachtelte Popovers enthält. Die verschachtelten Popovers können geöffnet werden, ohne das ursprüngliche Menü-Popover zu schließen.

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

Im zweiten Teil des HTML erstellen wir das Menü-Popover, das durch den Knopf geöffnet wird, den wir im vorherigen Codeblock erstellt haben. Dieses Menü-Popover enthält eine ungeordnete Liste von Menüelementen, von denen jedes einen Info-Knopf hat, der ein verschachteltes Popover öffnet. Das Menü-Popover verwendet `popover="auto"`, was bedeutet, dass es nicht geschlossen wird, wenn die verschachtelten Popovers geöffnet werden.

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

Im letzten Teil des HTML erstellen wir die Info-Popovers für jedes Menüelement. Jedes Popover enthält `popover="hint"`, was bedeutet, dass es nicht das ursprüngliche Menü-Popover schließt, aber die anderen offenen Info-Popovers.

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

Wir haben [Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verwendet, um das Menü-Popover unterhalb des `<button>`-Elements zu positionieren und [Grid](/de/docs/Web/CSS/Guides/Grid_layout), um die Menüelemente und Infoknöpfe anzuordnen.

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

Hier haben wir Ankerpositionierung verwendet, um die Info-Popovers rechts von ihren jeweiligen Infoknöpfen erscheinen zu lassen.

```css
div.info-popover {
  margin: 2rem;
  inset: auto;
  max-width: 300px;
  position-area: right;
}
```

#### Ergebnis

Klicken Sie den _Open Menu_ Knopf, dann klicken Sie die Info-Icons (ⓘ) neben den Menüoptionen, um die Info-Popovers zu öffnen.

{{EmbedLiveSample('popover_hint', 600, 250)}}

> [!NOTE]
> Besuchen Sie unsere [Popover API Beispiele Startseite](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung der MDN Popover-Beispiele zuzugreifen.

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
