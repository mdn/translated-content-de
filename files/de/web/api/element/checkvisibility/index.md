---
title: "Element: checkVisibility() Methode"
short-title: checkVisibility()
slug: Web/API/Element/checkVisibility
l10n:
  sourceCommit: 978aef2f7339917b6032c687b675402ae664de4d
---

{{APIRef("DOM")}}

Die **`checkVisibility()`** Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces prüft, ob das Element potenziell sichtbar ist.

Die Methode gibt `false` in einem der folgenden Fälle zurück:

- Das Element hat keine zugeordnete Box, zum Beispiel weil die CSS-Eigenschaft {{cssxref("display")}} auf [`none`](/de/docs/Web/CSS/Reference/Properties/display#none) oder [`contents`](/de/docs/Web/CSS/Reference/Properties/display#contents) gesetzt ist.
- Das Element wird nicht dargestellt, weil das Element oder ein übergeordnetes Element die Eigenschaft {{cssxref("content-visibility")}} auf [`hidden`](/de/docs/Web/CSS/Reference/Properties/content-visibility#hidden) setzt.

Der optionale Parameter ermöglicht zusätzliche Prüfungen für andere Interpretationen dessen, was "sichtbar" bedeutet.
Zum Beispiel können Sie weiter prüfen, ob ein Element eine Deckkraft von `0` hat, ob der Wert der {{cssxref("visibility")}} Eigenschaft des Elements es unsichtbar macht, oder ob die {{cssxref("content-visibility")}} Eigenschaft des Elements den Wert [`auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility#auto) hat und seine Darstellung derzeit übersprungen wird.

Beachten Sie, dass ein Rückgabewert von `true` nicht garantiert, dass das Element für den Benutzer sichtbar ist, sondern nur, dass es sichtbar sein könnte.
Elemente außerhalb des Ansichtsfensters oder durch andere Inhalte verdeckt, können trotzdem `true` zurückgeben.

## Syntax

```js-nolint
checkVisibility(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das zusätzliche Prüfungen angibt, die durchgeführt werden sollen.
    Die möglichen Optionen sind:
    - `contentVisibilityAuto`
      - : `true`, um zu prüfen, ob die Eigenschaft {{cssxref("content-visibility")}} des Elements den (oder vererbt den) Wert [`auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility#auto) hat und die Darstellung derzeit übersprungen wird.
        Standardmäßig `false`.
    - `opacityProperty`
      - : `true`, um zu prüfen, ob die Eigenschaft {{cssxref("opacity")}} des Elements den (oder vererbt einen) Wert von `0` hat.
        Standardmäßig `false`.
    - `visibilityProperty`
      - : `true`, um zu prüfen, ob das Element wegen des Wertes seiner {{cssxref("visibility")}} Eigenschaft unsichtbar ist.
        Standardmäßig `false`.

        > [!NOTE]
        > Unsichtbare Elemente schließen solche ein, die [`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility#hidden) haben, und einige Elementtypen, die [`visibility: collapse`](/de/docs/Web/CSS/Reference/Properties/visibility#collapse) haben.

    - `checkOpacity`
      - : Ein historisches Alias für [`opacityProperty`](#opacityproperty).
    - `checkVisibilityCSS`
      - : Ein historisches Alias für [`visibilityProperty`](#visibilityproperty).

### Rückgabewert

`false` wenn eine der folgenden Bedingungen erfüllt ist, andernfalls `true`:

- Das Element hat keine zugeordnete Box.
- Die Eigenschaft {{cssxref("content-visibility")}} des Elements hat (oder vererbt) den Wert [`hidden`](/de/docs/Web/CSS/Reference/Properties/visibility#hidden).
- `opacityProperty` (oder `checkOpacity`) ist `true` und die Eigenschaft {{cssxref("opacity")}} des Elements hat (oder vererbt) den Wert von `0`.
- `visibilityProperty` (oder `checkVisibilityCSS`) ist `true` und das Element ist aufgrund des Wertes seiner {{cssxref("visibility")}} Eigenschaft unsichtbar.
- `contentVisibilityAuto` ist `true`, die Eigenschaft {{cssxref("content-visibility")}} hat (oder vererbt) den Wert [`auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility#auto) und die Darstellung des Elements wird übersprungen.

## Beispiele

### Testen von checkVisibility() mit verschiedenen CSS

Das folgende Beispiel ermöglicht es Ihnen, zu testen, wie sich das Ergebnis von `checkVisibility()` mit unterschiedlichen Werten für die CSS-Eigenschaften `display`, `content-visibility`, `visibility` und `opacity` ändern kann.

#### HTML

Der HTML-Code definiert ein `<select>`-Element für die CSS-Eigenschaften, die die Ergebnisse von `checkVisibility()` beeinflussen.
Die ersten (standardmäßig ausgewählten) Werte sollten dazu führen, dass `checkVisibility()` `true` zurückgibt, wenn sie auf ein Element angewendet werden, während die anderen Werte die Sichtbarkeit beeinflussen.

```html
<select id="css_display" name="css_display">
  <option value="block" selected>display: block</option>
  <option value="none">display: none</option>
  <option value="contents">display: contents</option>
</select>

<select id="css_content_visibility" name="css_content_visibility">
  <option value="visible" selected>content-visibility: visible</option>
  <option value="hidden">content-visibility: hidden</option>
  <option value="auto">content-visibility: auto</option>
</select>

<select id="css_opacity" name="css_opacity">
  <option value="1" selected>opacity: 1</option>
  <option value="0">opacity: 0</option>
</select>

<select id="css_visibility" name="css_visibility">
  <option value="visible" selected>visibility: visible</option>
  <option value="hidden">visibility: hidden</option>
  <option value="collapse">visibility: collapse</option>
</select>
```

Als nächstes haben wir ein `<pre>`, das genutzt wird, um das Ergebnis der `checkVisibility()`-Prüfung auszugeben, wenn im Parameter keine Optionen übergeben werden, und für jeden einzelnen Optionswert.
Am Ende haben wir das Element, das getestet wird (auf das wir die ausgewählten CSS-Eigenschaftswerte anwenden werden).

```html
<pre id="output_result"></pre>
<div id="test_element">The element to be checked for visibility.</div>
```

#### CSS

Das CSS hebt nur das zu testende Element hervor.

```css
#test_element {
  border: solid;
  border-color: blue;
}
```

#### JavaScript

Der folgende Code bezieht jede der `<select>`-Elemente.
Die Methode `updateCSS()` wird beim Start und immer dann aufgerufen, wenn sich die Auswahl der Elemente ändert, um das ausgewählte CSS auf das Zielelement anzuwenden.

```js
const displayCssSelect = document.getElementById("css_display");
const contentVisibilityCssSelect = document.getElementById(
  "css_content_visibility",
);
const displayCssOpacity = document.getElementById("css_opacity");
const displayCssVisibility = document.getElementById("css_visibility");

const outputResult = document.getElementById("output_result");
const elementToCheck = document.getElementById("test_element");

updateCSS();

const cssSelectors = document.querySelectorAll("select");
cssSelectors.forEach((select) => {
  select.addEventListener("change", (event) => {
    updateCSS();
  });
});

function updateCSS() {
  // Apply selected CSS properties to target element
  elementToCheck.style.display = displayCssSelect.value;
  elementToCheck.style.contentVisibility = contentVisibilityCssSelect.value;
  elementToCheck.style.opacity = displayCssOpacity.value;
  elementToCheck.style.visibility = displayCssVisibility.value;

  // Call checkVisibility() on element using default and each of options
  const defaultVisibilityCheck = elementToCheck.checkVisibility();
  const opacityVisibilityCheck = elementToCheck.checkVisibility({
    opacityProperty: true,
  });
  const cssVisibilityCheck = elementToCheck.checkVisibility({
    visibilityProperty: true,
  });
  const contentVisibilityAutoCheck = elementToCheck.checkVisibility({
    contentVisibilityAuto: true,
  });

  // Output the results of the tests
  outputResult.innerText = `Checks on element below (may be hidden):
- Result of checkVisibility(): ${defaultVisibilityCheck}
- Result of checkVisibility({opacityProperty: true}): ${opacityVisibilityCheck}
- Result of checkVisibility({visibilityProperty: true}): ${cssVisibilityCheck}
- Result of checkVisibility({contentVisibilityAuto: true}): ${contentVisibilityAutoCheck}`;
}
```

#### Ergebnis

Die Ergebnisse werden unten gezeigt.
Wenn Sie die Auswahl ändern, werden die Ergebnisse auf das Testelement (blauer Umriss) angewendet und die Ergebnisse von `checkVisibility()` für jede Einstellung sollten angezeigt werden.
Wenn Sie zum Beispiel `opacity: 0` setzen, sollte dieser Test (nur) `false` anzeigen.
Wenn Sie jedoch `display: none` setzen, sollten alle Tests `false` zurückgeben.

{{ EmbedLiveSample('Test checkVisibility() with varied CSS', "100%", "200" ) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
