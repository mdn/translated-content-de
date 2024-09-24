---
title: "Element: checkVisibility() Methode"
short-title: checkVisibility()
slug: Web/API/Element/checkVisibility
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`checkVisibility()`** Methode der {{domxref("Element")}} Schnittstelle prüft, ob das Element sichtbar ist.

Die Methode gibt `false` in einer der folgenden Situationen zurück:

- Das Element hat keine zugehörige Box, zum Beispiel weil die CSS-Eigenschaft {{cssxref("display")}} auf [`none`](/de/docs/Web/CSS/display#none) oder [`contents`](/de/docs/Web/CSS/display#contents) gesetzt ist.
- Das Element wird nicht gerendert, weil das Element oder ein übergeordnetes Element die Eigenschaft {{cssxref("content-visibility")}} auf [`hidden`](/de/docs/Web/CSS/content-visibility#hidden) setzt.

Der optionale Parameter ermöglicht zusätzliche Prüfungen, um andere Interpretationen von "sichtbar" zu testen.
Beispielsweise können Sie weiter prüfen, ob ein Element eine Opazität von `0` hat, ob der Wert der Eigenschaft [`visibility`](/de/docs/Web/CSS/visibility) des Elements es unsichtbar macht oder ob die Eigenschaft {{cssxref("content-visibility")}} des Elements den Wert [`auto`](/de/docs/Web/CSS/content-visibility#auto) hat und das Rendering derzeit übersprungen wird.

## Syntax

```js-nolint
checkVisibility(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das zusätzliche Prüfungen angibt.
    Die möglichen Optionen sind:

    - `contentVisibilityAuto`
      - : `true`, um zu prüfen, ob die Eigenschaft {{cssxref("content-visibility")}} des Elements (oder ererbte) den Wert [`auto`](/de/docs/Web/CSS/content-visibility#auto) hat und das Rendering derzeit übersprungen wird.
        Standardmäßig `false`.
    - `opacityProperty`
      - : `true`, um zu prüfen, ob die Eigenschaft {{cssxref("opacity")}} des Elements (oder ererbte) den Wert `0` hat.
        Standardmäßig `false`.
    - `visibilityProperty`

      - : `true`, um zu prüfen, ob das Element aufgrund des Wertes seiner Eigenschaft {{cssxref("visibility")}} unsichtbar ist.
        Standardmäßig `false`.

        > [!NOTE]
        > Unsichtbare Elemente umfassen solche, die [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden) haben, und einige Elementtypen, die [`visibility: collapse`](/de/docs/Web/CSS/visibility#collapse) haben.

    - `checkOpacity`
      - : Ein historischer Alias für [`opacityProperty`](#opacityproperty).
    - `checkVisibilityCSS`
      - : Ein historischer Alias für [`visibilityProperty`](#visibilityproperty).

### Rückgabewert

`false`, wenn eine der folgenden Bedingungen erfüllt ist, sonst `true`:

- Das Element hat keine zugehörige Box.
- Die Eigenschaft {{cssxref("content-visibility")}} des Elements hat (oder ererbte) einen Wert von [`hidden`](/de/docs/Web/CSS/visibility#hidden).
- `opacityProperty` (oder `checkOpacity`) ist `true` und die Eigenschaft {{cssxref("opacity")}} des Elements hat (oder ererbte) den Wert `0`.
- `visibilityProperty` (oder `checkVisibilityCSS`) ist `true` und das Element ist aufgrund des Wertes seiner Eigenschaft {{cssxref("visibility")}} unsichtbar.
- `contentVisibilityAuto` ist `true`, die Eigenschaft {{cssxref("content-visibility")}} hat (oder ererbte) einen Wert von [`auto`](/de/docs/Web/CSS/content-visibility#auto), und das Rendering des Elements wird übersprungen.

## Beispiele

### Test von checkVisibility() mit verschiedenen CSS-Werten

Das folgende Beispiel ermöglicht es Ihnen zu testen, wie sich das Ergebnis von `checkVisibility()` mit unterschiedlichen Werten für die CSS-Eigenschaften `display`, `content-visibility`, `visibility` und `opacity` ändern könnte.

#### HTML

Das HTML definiert ein `<select>`-Element für die CSS-Eigenschaften, die die Ergebnisse von `checkVisibility()` beeinflussen.
Die ersten (standardmäßig ausgewählten) Werte sollten dazu führen, dass `checkVisibility()` `true` zurückgibt, wenn sie auf ein Element angewendet werden, während die anderen Werte die Sichtbarkeit beeinflussen.

```html
<select id="css_display" name="css_display">
  <option value="block" selected>display: block</option>
  <option value="none">display: none</option>
  <option value="content">display: content</option>
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

Als nächstes haben wir ein `<pre>`, das verwendet wird, um das Ergebnis des `checkVisibility()`-Checks auszugeben, wenn keine Optionen im Parameter übergeben werden, sowie für jeden einzelnen Optionswert.
Am Ende haben wir das zu testende Element (auf das wir die ausgewählten CSS-Eigenschaftswerte anwenden werden).

```html
<pre id="output_result"></pre>
<div id="test_element">Das Element, das auf Sichtbarkeit geprüft wird.</div>
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

Der folgende Code erfasst jedes der `<select>`-Elemente.
Die `updateCSS()`-Methode wird beim Start und bei jeder Änderung der Auswahlelemente aufgerufen, um die ausgewählten CSS-Eigenschaften auf das Ziel-Element anzuwenden,

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
  // Ausgewählte CSS-Eigenschaften auf Ziel-Element anwenden
  elementToCheck.style.display = displayCssSelect.value;
  elementToCheck.style.contentVisibility = contentVisibilityCssSelect.value;
  elementToCheck.style.opacity = displayCssOpacity.value;
  elementToCheck.style.visibility = displayCssVisibility.value;

  // checkVisibility() auf Element mit Standard- und jeder Option aufrufen
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

  // Die Ergebnisse der Tests ausgeben
  outputResult.innerText = `Prüfungen auf Element unten (kann versteckt sein):
- Ergebnis von checkVisibility(): ${defaultVisibilityCheck}
- Ergebnis von checkVisibility({opacityProperty: true}): ${opacityVisibilityCheck}
- Ergebnis von checkVisibility({visibilityProperty: true}): ${cssVisibilityCheck}
- Ergebnis von checkVisibility({contentVisibilityAuto: true}): ${contentVisibilityAutoCheck}`;
}
```

#### Ergebnis

Die Ergebnisse werden unten angezeigt.
Wenn Sie die Auswahl ändern, werden die Ergebnisse auf das Testelement (blauer Umriss) angewendet und die Ergebnisse des `checkVisibility()` für jede Einstellung sollten angezeigt werden.
Wenn Sie beispielsweise `opacity: 0` setzen, sollte dieser Test (nur) `false` anzeigen.
Wenn Sie jedoch `display: none` setzen, sollten alle Tests `false` zurückgeben.

{{ EmbedLiveSample('Test checkVisibility() with varied CSS', "100%", "200" ) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
