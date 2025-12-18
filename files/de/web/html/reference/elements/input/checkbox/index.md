---
title: <input type="checkbox">
slug: Web/HTML/Reference/Elements/input/checkbox
l10n:
  sourceCommit: f86740f3a842a5a075be18185ecaf9a981eda4b9
---

{{htmlelement("input")}}-Elemente des Typs **`checkbox`** werden standardmäßig als Kästchen gerendert, die aktiviert angekreuzt werden, ähnlich wie Sie es in einem offiziellen Regierungsformular sehen könnten. Das genaue Erscheinungsbild hängt von der Betriebssystemkonfiguration ab, unter der der Browser läuft. Im Allgemeinen ist dies ein Quadrat, es kann jedoch abgerundete Ecken haben. Eine Checkbox ermöglicht es Ihnen, einzelne Werte zur Übermittlung in einem Formular auszuwählen (oder nicht).

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

> [!NOTE]
> [Radio-Buttons](/de/docs/Web/HTML/Reference/Elements/input/radio) ähneln Checkboxes, weisen jedoch einen wichtigen Unterschied auf — [gleichnamige Radio-Buttons](/de/docs/Web/HTML/Reference/Elements/input/radio#defining_a_radio_group) werden in einer Gruppe zusammengefasst, in der nur ein Radio-Button gleichzeitig ausgewählt werden kann, während Checkboxes es ermöglichen, einzelne Werte ein- und auszuschalten. Wo mehrere gleichnamige Steuerelemente existieren, erlauben Radio-Buttons die Auswahl von einem, während Checkboxes mehrere Werte ausgewählt lassen.

## Wert

Ein String, der den Wert der Checkbox repräsentiert. Dieser wird auf der Client-Seite nicht angezeigt, aber auf dem Server ist dies der `value`, der mit dem `name` der Checkbox an die übermittelten Daten gegeben wird. Nehmen Sie folgendes Beispiel:

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

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn das Formular übermittelt wird, ist das Datenpaar Name/Wert `subscribe=newsletter`.

Wenn das `value`-Attribut weggelassen wurde, ist der Standardwert für die Checkbox `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn eine Checkbox beim Übermitteln ihres Formulars nicht angekreuzt ist, werden weder der Name noch der Wert an den Server übermittelt. Es gibt keine HTML-exklusive Methode, um den nicht angekreuzten Zustand einer Checkbox darzustellen (z. B. `value=unchecked`). Wenn Sie einen Standardwert für die nicht angekreuzte Checkbox übermitteln möchten, können Sie JavaScript einfügen, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} innerhalb des Formulars mit einem Wert zu erstellen, der den nicht angekreuzten Zustand anzeigt.

## Zusätzliche Attribute

Zusätzlich zu den [allgemeinen Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `checkbox`-Eingaben die folgenden Attribute.

- `checked`
  - : Ein {{Glossary("Boolean/HTML", "Boolean")}}-Attribut, das angibt, ob diese Checkbox standardmäßig (wenn die Seite geladen wird) angekreuzt ist. Es zeigt _nicht_ an, ob diese Checkbox derzeit angekreuzt ist: Wenn sich der Zustand der Checkbox ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked` IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Anders als bei anderen Eingabesteuerelementen wird der Wert einer Checkbox nur in die übermittelten Daten aufgenommen, wenn die Checkbox derzeit `checked` ist. Ist dies der Fall, wird der Wert des `value`-Attributs der Checkbox als Wert der Eingabe gemeldet oder `on`, wenn kein `value` festgelegt ist.
    > Im Gegensatz zu anderen Browsern speichert Firefox standardmäßig [den dynamischen checked-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`
  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s gemeinsam haben; jedoch erfüllt es eine besondere Aufgabe für Eingaben des Typs `checkbox`: Wenn ein Formular übermittelt wird, werden nur die aktuell angekreuzten Checkboxes an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn das `value` nicht anderweitig angegeben wird, ist es standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

## Verwendung von Checkbox-Inputs

Wir haben bereits die grundlegendste Verwendung von Checkboxes behandelt. Schauen wir uns jetzt die anderen üblichen checkbox-bezogenen Funktionen und Techniken an, die Sie benötigen.

### Umgang mit mehreren Checkboxes

Das oben gesehene Beispiel enthielt nur eine Checkbox; in realen Situationen werden Sie wahrscheinlich auf mehrere Checkboxes stoßen. Wenn sie völlig unzusammenhängend sind, können Sie sie einfach alle separat behandeln, wie oben gezeigt. Wenn sie jedoch alle zusammenhängen, sind die Dinge nicht ganz so einfach.

Zum Beispiel fügen wir im folgenden Demo mehrere Checkboxes ein, um dem Benutzer die Auswahl seiner Interessen zu ermöglichen (siehe die vollständige Version im Abschnitt [Beispiele](#beispiele)).

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

In diesem Beispiel sehen Sie, dass wir jeder Checkbox denselben `name` gegeben haben. Wenn beide Checkboxes angekreuzt sind und das Formular dann übermittelt wird, erhalten Sie einen String von Name/Wert-Paaren wie folgt: `interest=coding&interest=music`. Wenn dieser String den Server erreicht, müssen Sie ihn anders analysieren als als ein assoziatives Array, sodass alle Werte, nicht nur der letzte Wert von `interest`, erfasst werden. Eine Technik, die mit Python verwendet wird, finden Sie unter [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable), zum Beispiel.

### Voreingestelltes Ankreuzen von Kästchen

Um eine Checkbox standardmäßig angekreuzt zu setzen, geben Sie ihr das Attribut `checked`. Siehe das folgende Beispiel:

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

### Bereitstellung eines größeren Trefferbereichs für Ihre Checkboxes

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie eine Checkbox durch Klicken auf das zugeordnete {{htmlelement("label")}}-Element sowie direkt auf die Checkbox selbst umschalten können. Dies ist eine wirklich nützliche Funktion von HTML-Formularlabels, die es einfacher macht, die gewünschte Option auszuwählen, insbesondere auf Geräten mit kleinen Bildschirmen wie Smartphones.

Neben der Zugänglichkeit ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen ordnungsgemäß zu konfigurieren.

### Checkboxes im unbestimmten Zustand

Eine Checkbox kann sich in einem **unbestimmten** Zustand befinden. Dies wird über die `indeterminate`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts via JavaScript gesetzt (es kann nicht mit einem HTML-Attribut gesetzt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat die Checkbox eine horizontale Linie im Kasten (sie sieht in den meisten Browsern eher wie ein Bindestrich oder Minuszeichen aus) anstelle eines Häkchens/Kreuzes.

> [!NOTE]
> Dies ist lediglich eine visuelle Änderung. Sie hat keinen Einfluss darauf, ob der `value` der Checkbox bei einer Formularübermittlung verwendet wird. Dies wird durch den `checked`-Zustand entschieden, unabhängig vom `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn eine Checkbox verfügbar ist, die eine Reihe von Unteroptionen "besitzt" (die ebenfalls Checkboxes sind). Wenn alle Unteroptionen angekreuzt sind, ist auch die übergeordnete Checkbox angekreuzt, und wenn sie alle nicht angekreuzt sind, ist die übergeordnete Checkbox nicht angekreuzt. Wenn eine oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, befindet sich die übergeordnete Checkbox im unbestimmten Zustand.

Dies kann im folgenden Beispiel gesehen werden (danke an [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel verfolgen wir die Zutaten, die wir für ein Rezept sammeln. Wenn Sie die Checkbox einer Zutat an- oder abkreuzen, überprüft eine JavaScript-Funktion die Gesamtanzahl der angekreuzten Zutaten:

- Wenn keine angekreuzt ist, wird die Checkbox des Rezeptnamens auf nicht angekreuzt gesetzt.
- Wenn ein oder zwei angekreuzt sind, wird die Checkbox des Rezeptnamens auf `indeterminate` gesetzt.
- Wenn alle drei angekreuzt sind, wird die Checkbox des Rezeptnamens auf `checked` gesetzt.

In diesem Fall wird der `indeterminate`-Zustand verwendet, um anzuzeigen, dass das Sammeln der Zutaten begonnen hat, das Rezept jedoch noch nicht vollständig ist.

```js live-sample___indeterminate_state
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

```html live-sample___indeterminate_state
<form>
  <fieldset>
    <legend>Complete the recipe</legend>
    <div>
      <input type="checkbox" id="enchantment" name="enchantment" />
      <label for="enchantment">Enchantment table</label>
      <ul>
        <li>
          <input type="checkbox" id="book" name="ingredient" value="book" />
          <label for="book">Book</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="diamonds"
            name="ingredient"
            value="diamonds" />
          <label for="diamonds">Diamonds (x2)</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="obsidian"
            name="ingredient"
            value="obsidian" />
          <label for="obsidian">Obsidian (x4)</label>
        </li>
      </ul>
    </div>
  </fieldset>
</form>
```

{{EmbedLiveSample("indeterminate_state", "", 200)}}

## Validierung

Checkboxes unterstützen die [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) (die allen {{HTMLElement("input")}}s angeboten wird). Allerdings werden die meisten [`ValidityState`](/de/docs/Web/API/ValidityState)-Zustände immer `false` sein. Wenn die Checkbox das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber nicht angekreuzt ist, wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des "mehrere Checkboxes"-Beispiels, das wir oben gesehen haben — es enthält mehr Standardoptionen sowie eine "andere"-Checkbox, die beim Ankreuzen ein Textfeld zum Eingeben eines Werts für die "andere"-Option erscheinen lässt. Dies wird mit einem kurzen JavaScript-Block erreicht. Das Beispiel enthält implizite Labels, mit dem `<input>` direkt innerhalb des `<label>`. Das Texteingabefeld, das kein sichtbares Label hat, enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, das seinen zugänglichen Namen bereitstellt. Dieses Beispiel enthält auch etwas CSS, um das Styling zu verbessern.

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
        Ein String, der den Wert der
        Checkbox repräsentiert.
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, die es ermöglichen, Checkboxes basierend auf ihrem aktuellen Zustand zu stylen
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML DOM API, die das `<input>`-Element implementiert
