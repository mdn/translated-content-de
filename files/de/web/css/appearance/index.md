---
title: appearance
slug: Web/CSS/appearance
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`appearance`**-Eigenschaft von [CSS](/de/docs/Web/CSS) wird verwendet, um UI-Elemente mit plattformspezifischem Styling basierend auf dem Thema des Betriebssystems anzuzeigen.

{{InteractiveExample("CSS Demo: appearance")}}

```css interactive-example-choice
appearance: none;
```

```css interactive-example-choice
appearance: auto;
```

```html interactive-example
<section id="default-example">
  <div class="background">
    <button id="example-element">button</button>
  </div>
</section>
```

```css interactive-example
.background {
  display: flex;
  place-content: center;
  place-items: center;
  width: 150px;
  height: 150px;
  background-color: white;
}
```

Vor der Standardisierung erlaubte diese Eigenschaft, dass Elemente als Widgets angezeigt wurden, wie Schaltflächen oder Kontrollkästchen. Dies wurde als Fehlfunktion betrachtet und Autoren werden ermutigt, jetzt nur standardisierte Schlüsselwörter zu verwenden.

> [!NOTE]
> Wenn Sie diese Eigenschaft auf Websites verwenden möchten, sollten Sie sie sehr sorgfältig testen. Obwohl sie in den meisten modernen Browsern unterstützt wird, variiert ihre Implementierung. In älteren Browsern hat selbst das Schlüsselwort `none` nicht die gleiche Wirkung auf alle Formularelemente in verschiedenen Browsern, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern geringer.

## Syntax

```css
/* CSS Basic User Interface Module Level 4 values */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;
appearance: base-select;

/* Global values */
appearance: inherit;
appearance: initial;
appearance: revert;
appearance: revert-layer;
appearance: unset;

/* <compat-auto> values have the same effect as 'auto' */
appearance: button;
appearance: checkbox;
```

### Werte

Für die folgenden Schlüsselwörter wählt der Benutzeragent das geeignete Styling basierend auf dem Element.
Einige Beispiele sind angegeben, aber die Liste ist nicht abschließend.

- `none`
  - : Wenn das Element ein Widget (natives Formelement) ist, wird es gezwungen, ein standardisiertes primitives Erscheinungsbild anstelle eines plattformnativen oder betriebssystemspezifischen Erscheinungsbildes zu verwenden, wobei die üblichen CSS-Regeln unterstützt werden. Dieser Wert hat keine Wirkung auf Nicht-Widget-Elemente, einschließlich ersetzter Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}}.

- `auto`
  - : Wirkt wie `none` auf Elementen ohne besonderes Styling.

- `base-select`
  - : Wählt das {{htmlelement("select")}}-Element und das {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement in die vom Browser definierten Standardstile und Verhaltensweisen für [anpassbare Auswahl Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) ein.

    > [!NOTE]
    > Die Spezifikation definiert derzeit den `base`-Wert, der dazu gedacht ist, Basis-Browser-Stile allgemeiner auf UI-Elemente anzuwenden, für die sie verfügbar sind. Allerdings wird dies derzeit in keinem Browser unterstützt.

- `<compat-special>`
  - : Einer von `menulist-button` oder `textfield`.
    Beide dieser Werte sind auf Elementen ohne besonderes Styling gleichwertig mit `auto`.

- `<compat-auto>`
  - : Mögliche Werte sind `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` und `textarea`.
    Schlüsselwörter, die dem `auto`-Wert entsprechen, um die Kompatibilität mit älteren Browsern aufrechtzuerhalten.

#### Nicht standardisierte Werte

Die folgenden Werte können auf historischen Browserversionen mit dem Präfix **`-moz-appearance`** oder **`-webkit-appearance`** funktionieren, jedoch nicht auf der standardisierten **`appearance`**-Eigenschaft.

<details>
<summary>Nicht standardisierte Werte</summary>

- Einträge für Firefox zeigen die Unterstützung mit `-moz-appearance` an.
- Einträge für Chrome, Edge und Safari unten zeigen die Versionsunterstützung für Werte an, die mit der `-webkit-appearance`-Vendor-Präfix-Eigenschaft verwendet werden.
- Mit einem Sternchen (\*) markierte Werte haben klare Absichten zur Entfernung.
- Für jede Zelle der Browserversion und des Wertes:
  - `Y{version}`: gibt an, dass ein Wert bis einschließlich `{version}` unterstützt wird
  - `N{version}`: die Unterstützung wurde in einer früheren Version als `{version}` entfernt
  - Eine leere Zelle bedeutet, dass keine Unterstützung hinzugefügt wurde

| Wert                                   | Safari  | Firefox | Chrome    | Edge   |
| -------------------------------------- | ------- | ------- | --------- | ------ |
| `attachment`                           | Y(13.1) |         |           |        |
| `borderless-attachment`                | Y(13.1) |         |           |        |
| `button-bevel`                         | Y(13.1) | N(75)   |           | N(80)  |
| `caps-lock-indicator`                  | Y(13.1) |         |           | N(80)  |
| `caret`                                | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `checkbox-container`                   |         | N(75)   |           |        |
| `checkbox-label`                       |         | N(75)   |           |        |
| `checkmenuitem`                        |         | N(75)   |           |        |
| `color-well`                           | Y(13.1) |         |           |        |
| `continuous-capacity-level-indicator`  | Y(13.1) |         |           |        |
| `default-button`                       | Y(13.1) |         |           | N(80)  |
| `discrete-capacity-level-indicator`    | Y(13.1) |         |           |        |
| `inner-spin-button`                    | Y(13.1) | N(75)   | Y(118) \* | Y(119) |
| `image-controls-button`                | Y(13.1) |         |           |        |
| `list-button`                          | Y(13.1) |         |           |        |
| `listitem`                             | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `media-enter-fullscreen-button`        | Y(13.1) |         | Y(73)     |        |
| `media-exit-fullscreen-button`         | Y(13.1) |         | Y(73)     |        |
| `media-fullscreen-volume-slider`       | Y(13.1) |         |           |        |
| `media-fullscreen-volume-slider-thumb` | Y(13.1) |         |           |        |
| `media-mute-button`                    | Y(13.1) |         |           | N(80)  |
| `media-play-button`                    | Y(13.1) |         |           | N(80)  |
| `media-overlay-play-button`            | Y(13.1) |         | Y(73)     |        |
| `media-return-to-realtime-button`      | Y(13.1) |         |           |        |
| `media-rewind-button`                  | Y(13.1) |         |           |        |
| `media-seek-back-button`               | Y(13.1) |         | N(73)     |        |
| `media-seek-forward-button`            | Y(13.1) |         | N(73)     |        |
| `media-toggle-closed-captions-button`  | Y(13.1) |         | Y(73)     |        |
| `media-slider`                         | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-sliderthumb`                    | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-volume-slider-container`        | Y(13.1) |         | Y(73)     |        |
| `media-volume-slider-mute-button`      | Y(13.1) |         |           |        |
| `media-volume-slider`                  | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-volume-sliderthumb`             | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-controls-background`            | Y(13.1) |         | Y(73)     |        |
| `media-controls-dark-bar-background`   | Y(13.1) |         |           |        |
| `media-controls-fullscreen-background` | Y(13.1) |         | Y(73)     |        |
| `media-controls-light-bar-background`  | Y(13.1) |         |           |        |
| `media-current-time-display`           |         |         | Y(73)     |        |
| `media-time-remaining-display`         | Y(13.1) |         | Y(73)     |        |
| `menulist-text`                        | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `menulist-textfield`                   | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `meterbar`                             |         | Y(100)  |           |        |
| `number-input`                         |         | Y(75)   |           |        |
| `progress-bar-value`                   | Y(13.1) |         | Y(73)     |        |
| `progressbar`                          |         | Y(100)  |           |        |
| `progressbar-vertical`                 |         | Y(75)   |           |        |
| `range`                                |         | Y(75)   |           |        |
| `range-thumb`                          |         | Y(75)   |           |        |
| `rating-level-indicator`               | Y(13.1) |         |           |        |
| `relevancy-level-indicator`            | Y(13.1) |         |           |        |
| `scale-horizontal`                     |         | Y(75)   |           |        |
| `scalethumbend`                        |         | Y(75)   |           |        |
| `scalethumb-horizontal`                |         | Y(75)   |           |        |
| `scalethumbstart`                      |         | Y(75)   |           |        |
| `scalethumbtick`                       |         | Y(75)   |           |        |
| `scalethumb-vertical`                  |         | Y(75)   |           |        |
| `scale-vertical`                       |         | Y(75)   |           |        |
| `scrollbarthumb-horizontal`            |         | Y(75)   |           |        |
| `scrollbarthumb-vertical`              |         | Y(75)   |           |        |
| `scrollbartrack-horizontal`            |         | Y(75)   |           |        |
| `scrollbartrack-vertical`              |         | Y(75)   |           |        |
| `searchfield-decoration`               | Y(13.1) |         |           | N(80)  |
| `searchfield-results-decoration`       | Y(13.1) | N(75)   | N(73)     | N(80)  |
| `searchfield-results-button`           | Y(13.1) |         |           | N(80)  |
| `searchfield-cancel-button`            | Y(13.1) | N(75)   | Y(118) \* | Y(119) |
| `snapshotted-plugin-overlay`           | Y(13.1) |         |           |        |
| `sheet`                                |         |         |           |        |
| `slider-vertical`                      |         |         | Y(118) \* | Y(119) |
| `sliderthumb-horizontal`               |         |         | Y(117)    | Y(80)  |
| `sliderthumb-vertical`                 |         |         | Y(117)    | Y(80)  |
| `textfield-multiline`                  |         | Y(100)  |           |        |
| `-apple-pay-button`                    | Y(13.1) |         |           |        |

</details>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Benutzerdefinierte Gestaltung anwenden

Das folgende Beispiel zeigt, wie man das Standardstyling von einem Kontrollkästchen und einem Auswahl-Element entfernt und benutzerdefiniertes Styling anwendet.
Das Erscheinungsbild des Kontrollkästchens wird in einen Kreis geändert, und das Auswahl-Element zeigt, wie man den Pfeil entfernt, der anzeigt, dass die Liste erweitert werden kann.

#### HTML

```html
<input type="checkbox" />
<input type="checkbox" checked />

<select>
  <option>default</option>
  <option>option 2</option>
</select>
<select class="none">
  <option>appearance: none</option>
  <option>option 2</option>
</select>
```

#### CSS

```css
input {
  appearance: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  background: red;
}
input:checked {
  border-radius: 50%;
  background: green;
}

select {
  border: 1px solid black;
  font-size: 1em;
}

select.none {
  appearance: none;
}
```

#### Ergebnis

{{EmbedLiveSample("Apply_custom_styling", 1050, 100)}}

### Grundlegende Verwendung von benutzerdefiniertem Auswahl

Um die Funktionalität für benutzerdefinierte Auswahl zu aktivieren, müssen dem `<select>`-Element und seinem Picker ein `appearance`-Wert von `base-select` zugewiesen werden:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann beispielsweise den Standard-Schwarz {{cssxref("border")}} des Pickers entfernen:

```css
::picker(select) {
  border: none;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)
