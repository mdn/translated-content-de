---
title: <input type="checkbox">
slug: Web/HTML/Reference/Elements/input/checkbox
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`checkbox`** werden standardmäßig als Kästchen dargestellt, die beim Aktivieren angekreuzt (abgehakt) werden, ähnlich wie in einem offiziellen Regierungsformular. Das genaue Erscheinungsbild hängt von der Konfiguration des Betriebssystems ab, unter dem der Browser läuft. Allgemein ist dies ein Quadrat, kann jedoch abgerundete Ecken haben. Ein Kontrollkästchen erlaubt es Ihnen, einzelne Werte zur Übermittlung in einem Formular auszuwählen (oder nicht).

{{InteractiveExample("HTML Demo: &lt;input type=&quot;checkbox&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<fieldset>
  <legend>Choose your monster's features:</legend>

  <div>
    <input type="checkbox" id="scales" name="scales" checked />
    <label for="scales">Scales</label>
  </div>

  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label for="horns">Horns</label>
  </div>
</fieldset>
```

```css interactive-example
p,
label {
  font:
    1rem "Fira Sans",
    sans-serif;
}

input {
  margin: 0.4rem;
}
```

> **Note:** [Radioknöpfe](/de/docs/Web/HTML/Reference/Elements/input/radio) sind ähnlich wie Kontrollkästchen, haben jedoch einen wichtigen Unterschied — [gleichnamige Radioknöpfe](/de/docs/Web/HTML/Reference/Elements/input/radio#defining_a_radio_group) werden zu einer Gruppe zusammengefasst, in der jeweils nur ein Radioknopf ausgewählt werden kann, während mit Kontrollkästchen einzelne Werte ein- und ausgeschaltet werden können. Wo mehrere gleichnamige Steuerelemente vorhanden sind, ermöglichen Radioknöpfe, dass einer ausgewählt wird, während mit Kontrollkästchen mehrere Werte ausgewählt werden können.

## Wert

Ein String, der den Wert des Kontrollkästchens darstellt. Dieser wird clientseitig nicht angezeigt, aber auf dem Server ist dies der `value`, der den mit dem `name` des Kontrollkästchens übermittelten Daten zugewiesen wird. Nehmen Sie folgendes Beispiel:

```html
<form>
  <div>
    <input
      type="checkbox"
      id="subscribeNews"
      name="subscribe"
      value="newsletter" />
    <label for="subscribeNews">Subscribe to newsletter?</label>
  </div>
  <div>
    <button type="submit">Subscribe</button>
  </div>
</form>
```

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn das Formular abgesendet wird, ist das Daten-Namens-Wert-Paar `subscribe=newsletter`.

Falls das `value`-Attribut weggelassen wurde, ist der Standardwert für das Kontrollkästchen `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn ein Kontrollkästchen beim Absenden des Formulars nicht aktiviert ist, werden weder der Name noch der Wert an den Server übermittelt. Es gibt keine HTML-basierte Methode, um einen nicht aktivierten Zustand eines Kontrollkästchens darzustellen (z.B. `value=unchecked`). Falls Sie einen Standardwert für das Kontrollkästchen übermitteln möchten, wenn es nicht aktiviert ist, könnten Sie JavaScript verwenden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} im Formular zu erstellen, das einen Wert für einen nicht aktivierten Zustand angibt.

## Zusätzliche Attribute

Zusätzlich zu den [allgemeinen Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die von allen {{HTMLElement("input")}}-Elementen geteilt werden, unterstützen `checkbox`-Eingaben die folgenden Attribute.

- `checked`

  - : Ein {{Glossary("Boolean/HTML", "Boolesches")}} Attribut, das anzeigt, ob dieses Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked` IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird der Wert eines Kontrollkästchens nur dann in den übermittelten Daten enthalten, wenn das Kontrollkästchen derzeit `checked` ist. Falls dies der Fall ist, wird der Wert des `value`-Attributs des Kontrollkästchens als Eingabewert übermittelt, oder `on`, wenn kein `value` gesetzt ist.
    > Anders als andere Browser behält Firefox standardmäßig den [dynamischen Aktivierungszustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladungen bei. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um diese Funktionalität zu steuern.

- `value`

  - : Das `value`-Attribut wird von allen {{HTMLElement("input")}}-Elementen geteilt; es hat jedoch eine spezielle Bedeutung für Eingaben des Typs `checkbox`: Wenn ein Formular übermittelt wird, werden nur Kontrollkästchen, die derzeit aktiviert sind, an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Falls das `value` nicht anderweitig spezifiziert ist, ist es standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

## Verwendung von Kontrollkästcheneingaben

Wir haben bereits die grundlegendste Verwendung von Kontrollkästchen behandelt. Schauen wir uns nun die anderen häufigen Merkmale und Techniken im Zusammenhang mit Kontrollkästchen an, die Sie benötigen werden.

### Umgang mit mehreren Kontrollkästchen

Das oben gezeigte Beispiel enthielt nur ein einziges Kontrollkästchen; in realen Situationen werden Sie wahrscheinlich auf mehrere Kontrollkästchen stoßen. Wenn sie völlig unabhängig voneinander sind, können Sie einfach alle separat behandeln, wie oben gezeigt. Sind sie jedoch alle miteinander verbunden, ist die Handhabung nicht ganz so einfach.

Zum Beispiel fügen wir in der folgenden Demo mehrere Kontrollkästchen ein, um dem Benutzer die Auswahl seiner Interessen zu ermöglichen (siehe die vollständige Version im Abschnitt [Beispiele](#beispiele)).

```html
<fieldset>
  <legend>Choose your interests</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" />
    <label for="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">Music</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Handling_multiple_checkboxes', 600, 100)}}

Sie werden sehen, dass wir jedem Kontrollkästchen denselben `name` gegeben haben. Wenn beide Kontrollkästchen aktiviert sind und das Formular dann gesendet wird, erhalten Sie einen String der Namens-Wert-Paare wie folgt: `interest=coding&interest=music`. Wenn dieser String den Server erreicht, müssen Sie ihn anders als ein assoziatives Array analysieren, damit alle Werte, nicht nur der letzte Wert von `interest`, erfasst werden. Für eine mit Python verwendete Technik siehe [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable), zum Beispiel.

### Standardmäßig aktivierte Kästchen

Um ein Kontrollkästchen standardmäßig aktiviert zu machen, geben Sie ihm das `checked`-Attribut. Siehe folgendes Beispiel:

```html
<fieldset>
  <legend>Choose your interests</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked />
    <label for="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">Music</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Checking_boxes_by_default', 600, 100)}}

### Bereitstellung eines größeren anklickbaren Bereichs für Ihre Kontrollkästchen

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie ein Kontrollkästchen durch Klicken auf sein zugehöriges {{htmlelement("label")}}-Element sowie auf das Kontrollkästchen selbst umschalten können. Dies ist eine wirklich nützliche Funktion von HTML-Formularlabels, die es einfacher macht, die gewünschte Option auszuwählen, insbesondere auf Geräten mit kleinen Bildschirmen wie Smartphones.

Über die Barrierefreiheit hinaus ist dies ein weiterer guter Grund, um `<label>`-Elemente in Ihren Formularen ordnungsgemäß einzurichten.

### Kontrollkästchen im indeterminaten Zustand

Ein Kontrollkästchen kann sich in einem **indermedinate**-Zustand befinden. Dies wird mit der `indeterminate`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts über JavaScript gesetzt (es kann nicht mit einem HTML-Attribut gesetzt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat das Kontrollkästchen in den meisten Browsern eine horizontale Linie im Feld (es sieht ein wenig aus wie ein Minuszeichen) anstelle eines Häkchens.

> [!NOTE]
> Dies ist nur eine visuelle Änderung. Es hat keinen Einfluss darauf, ob der `value` des Kontrollkästchens bei einer Formularübermittlung verwendet wird. Dies wird durch den `checked`-Zustand bestimmt, unabhängig von dem `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der gebräuchlichste ist ein Kontrollkästchen, das eine Anzahl von Unteroptionen (die ebenfalls Kontrollkästchen sind) "besitzt". Wenn alle Unteroptionen aktiviert sind, ist auch das Kontrollkästchen aktiviert, und wenn alle deaktiviert sind, ist das Kontrollkästchen deaktiviert. Wenn eine oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, befindet sich das Kontrollkästchen im indeterminaten Zustand.

Dies kann man im folgenden Beispiel sehen (danke an [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel verfolgen wir die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen einer Zutat an- oder abwählen, überprüft eine JavaScript-Funktion die Gesamtanzahl der ausgewählten Zutaten:

- Wenn keine ausgewählt sind, wird das Kontrollkästchen des Rezeptnamens auf deaktiviert gesetzt.
- Wenn eine oder zwei ausgewählt sind, ist das Kontrollkästchen des Rezeptnamens auf `indeterminate` gesetzt.
- Wenn alle drei ausgewählt sind, ist das Kontrollkästchen des Rezeptnamens auf `checked` gesetzt.

In diesem Fall wird also der `indeterminate`-Zustand verwendet, um anzuzeigen, dass das Sammeln der Zutaten begonnen hat, das Rezept aber noch nicht vollständig ist.

```js
const overall = document.querySelector("#enchantment");
const ingredients = document.querySelectorAll("ul input");

overall.addEventListener("click", (e) => {
  e.preventDefault();
});

for (const ingredient of ingredients) {
  ingredient.addEventListener("click", updateDisplay);
}

function updateDisplay() {
  let checkedCount = 0;
  for (const ingredient of ingredients) {
    if (ingredient.checked) {
      checkedCount++;
    }
  }

  if (checkedCount === 0) {
    overall.checked = false;
    overall.indeterminate = false;
  } else if (checkedCount === ingredients.length) {
    overall.checked = true;
    overall.indeterminate = false;
  } else {
    overall.checked = false;
    overall.indeterminate = true;
  }
}
```

{{EmbedGHLiveSample("learning-area/html/forms/indeterminate-example/index.html", '100%', 200)}}

## Validierung

Kontrollkästchen unterstützen die [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) (angeboten für alle {{HTMLElement("input")}}-Elemente). Die meisten [`ValidityState`](/de/docs/Web/API/ValidityState)-Zustände werden jedoch immer `false` sein. Hat das Kontrollkästchen das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut, ist jedoch nicht aktiviert, dann ist [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true`.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des oben gesehenen „mehrere Kontrollkästchen“-Beispiels — es hat mehr Standardoptionen, plus ein „anderes“ Kontrollkästchen, das bei Aktivierung ein Textfeld erscheinen lässt, um einen Wert für die „andere“-Option einzugeben. Dies wird mit einem kurzen JavaScript-Block erreicht. Das Beispiel enthält implizite Labels, wobei das `<input>` direkt innerhalb des `<label>` ist. Das Texteingabefeld, ohne sichtbares Label, enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, das dessen zugänglichen Namen bereitstellt. Dieses Beispiel enthält auch etwas CSS, um das Styling zu verbessern.

### HTML

```html
<form>
  <fieldset>
    <legend>Choose your interests</legend>
    <div>
      <label>
        <input type="checkbox" id="coding" name="interest" value="coding" />
        Coding
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="music" name="interest" value="music" />
        Music
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="art" name="interest" value="art" />
        Art
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="sports" name="interest" value="sports" />
        Sports
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="cooking" name="interest" value="cooking" />
        Cooking
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="other" name="interest" value="other" />
        Other
      </label>
      <input
        type="text"
        id="otherValue"
        name="other"
        aria-label="Other interest" />
    </div>
    <div>
      <button type="submit">Submit form</button>
    </div>
  </fieldset>
</form>
```

### CSS

```css
html {
  font-family: sans-serif;
}

form {
  width: 600px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

fieldset {
  background: cyan;
  border: 5px solid blue;
}

legend {
  padding: 10px;
  background: blue;
  color: cyan;
}
```

### JavaScript

```js
const otherCheckbox = document.querySelector("#other");
const otherText = document.querySelector("#otherValue");
otherText.style.visibility = "hidden";

otherCheckbox.addEventListener("change", () => {
  if (otherCheckbox.checked) {
    otherText.style.visibility = "visible";
    otherText.value = "";
  } else {
    otherText.style.visibility = "hidden";
  }
});
```

{{EmbedLiveSample('Examples', '100%', 300)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Wert des
        Kontrollkästchens darstellt.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>[`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event)</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td><code><a href="#checked">checked</a></code></td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
        <code><a href="/de/docs/Web/API/HTMLInputElement/checked">checked</a></code>,
        <code><a href="/de/docs/Web/API/HTMLInputElement/indeterminate">indeterminate</a></code> und
        <code><a href="/de/docs/Web/API/HTMLInputElement/value">value</a></code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select)
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, die es ermöglichen, Kontrollkästchen basierend auf ihrem aktuellen Zustand zu stylen
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML DOM API, die das `<input>`-Element implementiert
