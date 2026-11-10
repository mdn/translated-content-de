---
title: Globales HTML-Attribut `popover`
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) **`popover`** kennzeichnet ein Element als Popover-Element.

## Wert

Das Attribut `popover` kann einen der folgenden Werte annehmen:

- `"auto"`
  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Popover können durch Klicken außerhalb des Popovers oder durch Drücken der Taste <kbd>Esc</kbd> geschlossen werden. Wird ein `auto`-Popover angezeigt, werden in der Regel andere bereits angezeigte `auto`-Popover geschlossen, sofern sie nicht verschachtelt sind.

    > [!NOTE]
    > Ein leerer Wert für `popover` — `popover` oder `popover=""` — ist gleichbedeutend mit `popover="auto"`.

- `"hint"`
  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popover schließen beim Anzeigen keine `auto`-Popover. Sie schließen jedoch andere Hint-Popover, die im [Hint-Stack](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules) keine ihrer Vorfahren sind.
    Sie können durch Klicken außerhalb geschlossen werden und reagieren auf Schließanforderungen.

- `"manual"`
  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popover können nicht durch Klicken außerhalb geschlossen werden und schließen sich nicht automatisch. Sie müssen ausdrücklich über deklarative Schaltflächen zum Anzeigen, Ausblenden oder Umschalten oder über JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual`-Popover können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind durch `display: none` ausgeblendet, bis sie über ein auslösendes oder steuerndes Element (also einen `<button>` oder ein `<input type="button">` mit dem Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)) oder durch einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) geöffnet werden.

Geöffnete Popover-Elemente erscheinen über allen anderen Elementen in der {{Glossary("top_layer", "obersten Ebene")}}. Die Gestaltung über {{cssxref('position')}} oder {{cssxref('overflow')}} von übergeordneten Elementen wirkt sich nicht auf sie aus.

Popover mit dem Zustand [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) können über zugehörige Steuerelemente (gekennzeichnet durch das Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)) angezeigt und ausgeblendet werden. Sie lassen sich außerdem durch Klicken außerhalb des Popover-Bereichs, durch Öffnen eines anderen Popovers oder über browserspezifische Mechanismen wie die Taste <kbd>Esc</kbd> schließen.

Im Allgemeinen kann jeweils nur ein `auto`-Popover auf dem Bildschirm angezeigt werden: Wird ein zweites Popover angezeigt, während bereits eines geöffnet ist, wird das erste ausgeblendet. Eine Ausnahme bilden verschachtelte Auto-Popover. Weitere Informationen finden Sie unter [Verschachtelte Popover](/de/docs/Web/API/Popover_API/Using#nested_popovers).

Sie können auch mit JavaScript gesteuert werden. Beispielsweise lässt sich mit der Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) zwischen dem angezeigten und dem ausgeblendeten Zustand eines Popovers wechseln.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popover manuell angezeigt und ausgeblendet werden. Beim Anzeigen schließen sie andere Popover nicht automatisch und können nicht durch Klicken außerhalb geschlossen werden. Dadurch lassen sich mehrere Popover gleichzeitig anzeigen.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popover schließen beim Anzeigen keine `auto`-Popover. Sie schließen jedoch andere Hint-Popover, die im Hint-Stack keine ihrer Vorfahren sind. Sie können durch Klicken außerhalb geschlossen werden und reagieren auf Schließanforderungen.

Üblicherweise werden `hint`-Popover als Reaktion auf JavaScript-Ereignisse angezeigt und ausgeblendet, die nicht durch Klicken ausgelöst werden, etwa [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event). Wird eine Schaltfläche angeklickt, um ein `hint`-Popover zu öffnen, wird ein geöffnetes `auto`-Popover dabei geschlossen.

Ausführliche Informationen zur Verwendung finden Sie auf der Übersichtsseite zur [Popover API](/de/docs/Web/API/Popover_API).

## Beispiele

### Ein Element zum Popover machen

Der folgende Code stellt eine Schaltfläche dar, die beim Aktivieren ein Popover-Element öffnet. Dieses Verhalten lässt sich allein mit HTML umsetzen.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('making_an_element_a_popover', 600, 100)}}

### Popover verschachteln

In diesem Beispiel öffnet eine Schaltfläche ein Popover, das weitere verschachtelte Popover enthält. Die verschachtelten Popover können geöffnet werden, ohne das ursprüngliche Menü-Popover zu schließen.

#### HTML

Im ersten Teil des HTML erstellen wir einen {{htmlElement("button")}}, der das Haupt-Popover öffnet: ein Menü mit mehreren Optionen.

```html
<header>
  <button popovertarget="menu">Open Menu</button>
</header>
<main>
  <!--  Page content goes here  -->
</main>
```

Im zweiten Teil des HTML erstellen wir das Menü-Popover, das durch die Schaltfläche aus dem vorherigen Codeblock geöffnet wird. Dieses Menü-Popover enthält eine ungeordnete Liste von Menüpunkten. Jeder Menüpunkt hat eine Info-Schaltfläche, die ein verschachteltes Popover öffnet. Das Menü-Popover verwendet `popover="auto"` und wird daher nicht geschlossen, wenn die verschachtelten Popover geöffnet werden.

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

Im letzten Teil des HTML erstellen wir die Info-Popover für die einzelnen Menüpunkte. Jedes Popover enthält `popover="hint"`. Daher schließt es das ursprüngliche Menü-Popover nicht, wohl aber andere geöffnete Info-Popover.

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

Wir haben [Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verwendet, um das Menü-Popover unterhalb des `<button>` zu platzieren, und [Grid](/de/docs/Web/CSS/Guides/Grid_layout), um die Menüpunkte und Info-Schaltflächen anzuordnen.

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

Hier haben wir die Ankerpositionierung verwendet, damit die Info-Popover rechts neben ihren jeweiligen Info-Schaltflächen erscheinen.

```css
div.info-popover {
  margin: 2rem;
  inset: auto;
  max-width: 300px;
  position-area: right;
}
```

#### Ergebnis

Klicken Sie auf die Schaltfläche _Open Menu_ und anschließend auf die Info-Symbole (ⓘ) neben den Menüoptionen, um die Info-Popover zu öffnen.

{{EmbedLiveSample('nesting_popovers', 600, 250)}}

> [!NOTE]
> Auf unserer [Übersichtsseite mit Beispielen zur Popover API](https://mdn.github.io/dom-examples/popover-api/) finden Sie alle Popover-Beispiele von MDN.

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
