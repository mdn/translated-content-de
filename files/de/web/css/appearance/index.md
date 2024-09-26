---
title: Darstellung
slug: Web/CSS/appearance
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`appearance`**-[CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um UI-Elemente mit einer plattform-spezifischen Gestaltung anzuzeigen, basierend auf dem Thema des Betriebssystems.

{{EmbedInteractiveExample("pages/css/appearance.html")}}

Vor der Standardisierung erlaubte diese Eigenschaft, dass Elemente als Widgets wie Schaltflächen oder Kontrollkästchen dargestellt wurden. Es wurde jedoch als missbräuchlich angesehen, und Autoren werden ermutigt, jetzt nur noch standardmäßige Schlüsselwörter zu verwenden.

> [!NOTE]
> Wenn Sie diese Eigenschaft auf Websites verwenden möchten, sollten Sie sie sehr sorgfältig testen. Obwohl sie in den meisten modernen Browsern unterstützt wird, variiert ihre Implementierung. In älteren Browsern hat sogar das Schlüsselwort `none` nicht auf allen Formularelementen in verschiedenen Browsern die gleiche Wirkung, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern kleiner.

## Syntax

```css
/* Werte des CSS Basic User Interface Module Level 4 */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;

/* Globale Werte */
appearance: inherit;
appearance: initial;
appearance: revert;
appearance: revert-layer;
appearance: unset;

/* <compat-auto>-Werte haben die gleiche Wirkung wie 'auto' */
appearance: button;
appearance: checkbox;
```

### Werte

Für die folgenden Schlüsselwörter wählt der User-Agent das passende Styling basierend auf dem Element.
Einige Beispiele werden bereitgestellt, aber die Liste ist nicht erschöpfend.

- `none`

  - : Verbirgt bestimmte Merkmale von Widgets, wie den im Select-Element angezeigten Pfeil, der anzeigt, dass die Liste erweitert werden kann.

- `auto`

  - : Verhält sich wie `none` auf Elementen ohne besondere Gestaltung.

- `<compat-special>`

  - : Einer von `menulist-button` oder `textfield`.
    Beide dieser Werte sind auf Elemente mit keiner besonderen Gestaltung gleichwertig mit `auto`.

- `<compat-auto>`

  - : Mögliche Werte sind `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` und `textarea`.
    Schlüsselwörter, die dem `auto` zur Aufrechterhaltung der Kompatibilität mit älteren Browsern entsprechen.

#### Nicht-standardisierte Werte

Die folgenden Werte können in historischen Browserversionen mit dem **`-moz-appearance`**- oder **`-webkit-appearance`**-Präfix funktionieren, jedoch nicht mit der standardisierten **`appearance`**-Eigenschaft.

<details>
<summary>Nicht-standardisierte Werte</summary>

- Einträge in Firefox zeigen die Unterstützung mit `-moz-appearance` an.
- Einträge in Chrome, Edge und Safari unten zeigen die Unterstützung für Werte mit dem `-webkit-appearance`-Anbieterpräfix an.
- Werte mit einem Sternchen (*) haben klare Absichten zur Entfernung.
- Für jede Zelle von Browserversion und Wert:
  - `Y{version}`: zeigt an, dass ein Wert bis einschließlich `{version}` unterstützt wird
  - `N{version}`: die Unterstützung wurde in einer früheren Version als `{version}` entfernt
  - eine leere Zelle zeigt an, dass die Unterstützung nie hinzugefügt wurde

| Wert                                  | Safari  | Firefox | Chrome    | Edge   |
| ------------------------------------- | ------- | ------- | --------- | ------ |
| `attachment`                          | Y(13.1) |         |           |        |
| `borderless-attachment`               | Y(13.1) |         |           |        |
| `button-bevel`                        | Y(13.1) | N(75)   |           | N(80)  |
| `caps-lock-indicator`                 | Y(13.1) |         |           | N(80)  |
| `caret`                               | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `checkbox-container`                  |         | N(75)   |           |        |
| `checkbox-label`                      |         | N(75)   |           |        |
| `checkmenuitem`                       |         | N(75)   |           |        |
| `color-well`                          | Y(13.1) |         |           |        |
| `continuous-capacity-level-indicator` | Y(13.1) |         |           |        |
| `default-button`                      | Y(13.1) |         |           | N(80)  |
| `discrete-capacity-level-indicator`   | Y(13.1) |         |           |        |
| `inner-spin-button`                   | Y(13.1) | N(75)   | Y(118) \* | Y(119) |
| `image-controls-button`               | Y(13.1) |         |           |        |
| `list-button`                         | Y(13.1) |         |           |        |
| `listitem`                            | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `media-enter-fullscreen-button`       | Y(13.1) |         | Y(73)     |        |
| `media-exit-fullscreen-button`        | Y(13.1) |         | Y(73)     |        |
| `media-fullscreen-volume-slider`      | Y(13.1) |         |           |        |
| `media-fullscreen-volume-slider-thumb`| Y(13.1) |         |           |        |
| `media-mute-button`                   | Y(13.1) |         |           | N(80)  |
| `media-play-button`                   | Y(13.1) |         |           | N(80)  |
| `media-overlay-play-button`           | Y(13.1) |         | Y(73)     |        |
| `media-return-to-realtime-button`     | Y(13.1) |         |           |        |
| `media-rewind-button`                 | Y(13.1) |         |           |        |
| `media-seek-back-button`              | Y(13.1) |         | N(73)     |        |
| `media-seek-forward-button`           | Y(13.1) |         | N(73)     |        |
| `media-toggle-closed-captions-button` | Y(13.1) |         | Y(73)     |        |
| `media-slider`                        | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-sliderthumb`                   | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-volume-slider-container`       | Y(13.1) |         | Y(73)     |        |
| `media-volume-slider-mute-button`     | Y(13.1) |         |           |        |
| `media-volume-slider`                 | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-volume-sliderthumb`            | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-controls-background`           | Y(13.1) |         | Y(73)     |        |
| `media-controls-dark-bar-background`  | Y(13.1) |         |           |        |
| `media-controls-fullscreen-background`| Y(13.1) |         | Y(73)     |        |
| `media-controls-light-bar-background` | Y(13.1) |         |           |        |
| `media-current-time-display`          |         |         | Y(73)     |        |
| `media-time-remaining-display`        | Y(13.1) |         | Y(73)     |        |
| `menulist-text`                       | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `menulist-textfield`                  | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `meterbar`                            |         | Y(100)  |           |        |
| `number-input`                        |         | Y(75)   |           |        |
| `progress-bar-value`                  | Y(13.1) |         | Y(73)     |        |
| `progressbar`                         |         | Y(100)  |           |        |
| `progressbar-vertical`                |         | Y(75)   |           |        |
| `range`                               |         | Y(75)   |           |        |
| `range-thumb`                         |         | Y(75)   |           |        |
| `rating-level-indicator`              | Y(13.1) |         |           |        |
| `relevancy-level-indicator`           | Y(13.1) |         |           |        |
| `scale-horizontal`                    |         | Y(75)   |           |        |
| `scalethumbend`                       |         | Y(75)   |           |        |
| `scalethumb-horizontal`               |         | Y(75)   |           |        |
| `scalethumbstart`                     |         | Y(75)   |           |        |
| `scalethumbtick`                      |         | Y(75)   |           |        |
| `scalethumb-vertical`                 |         | Y(75)   |           |        |
| `scale-vertical`                      |         | Y(75)   |           |        |
| `scrollbarthumb-horizontal`           |         | Y(75)   |           |        |
| `scrollbarthumb-vertical`             |         | Y(75)   |           |        |
| `scrollbartrack-horizontal`           |         | Y(75)   |           |        |
| `scrollbartrack-vertical`             |         | Y(75)   |           |        |
| `searchfield-decoration`              | Y(13.1) |         |           | N(80)  |
| `searchfield-results-decoration`      | Y(13.1) | N(75)   | N(73)     | N(80)  |
| `searchfield-results-button`          | Y(13.1) |         |           | N(80)  |
| `searchfield-cancel-button`           | Y(13.1) | N(75)   | Y(118) \* | Y(119) |
| `snapshotted-plugin-overlay`          | Y(13.1) |         |           |        |
| `sheet`                               |         |         |           |        |
| `slider-vertical`                     |         |         | Y(118) \* | Y(119) |
| `sliderthumb-horizontal`              |         |         | Y(117)    | Y(80)  |
| `sliderthumb-vertical`                |         |         | Y(117)    | Y(80)  |
| `textfield-multiline`                 |         | Y(100)  |           |        |
| `-apple-pay-button`                   | Y(13.1) |         |           |        |

</details>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Individuelle Gestaltung anwenden

Das folgende Beispiel zeigt, wie man das Standard-Styling von einem Kontrollkästchen und einem Select-Element entfernt und individuelles Styling anwendet.
Das Erscheinungsbild des Kontrollkästchens wird in einen Kreis geändert und das Select-Element zeigt, wie der Pfeil, der anzeigt, dass die Liste erweitert werden kann, entfernt wird.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)