---
title: <input type='checkbox'>
slug: Web/HTML/Element/input/checkbox
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

{{htmlelement("input")}} Elemente des Typs **`checkbox`** werden standardmäßig als Kästchen dargestellt, die aktiviert (angehakt) sind, wie man es in einem offiziellen Regierungsformular sehen könnte. Das genaue Erscheinungsbild hängt von der Betriebssystemkonfiguration ab, unter der der Browser läuft. Im Allgemeinen ist dies ein Quadrat, es kann jedoch abgerundete Ecken haben. Eine Checkbox ermöglicht es Ihnen, einzelne Werte für die Übermittlung in einem Formular auszuwählen (oder nicht).

{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **Note:** [Radio-Buttons](/de/docs/Web/HTML/Element/input/radio) sind Checkboxes ähnlich, haben jedoch einen wichtigen Unterschied — [gleichnamige Radio-Buttons](/de/docs/Web/HTML/Element/input/radio#defining_a_radio_group) werden zu einer Gruppe zusammengefasst, in der jeweils nur ein Radio-Button ausgewählt werden kann, während Checkboxes ermöglichen, einzelne Werte ein- und auszuschalten. Wenn mehrere gleichnamige Steuerelemente existieren, erlauben Radio-Buttons, dass eines ausgewählt wird, während Checkboxes die Auswahl mehrerer Werte erlauben.

## Value

Ein String, der den Wert der Checkbox darstellt. Dieser wird auf der Client-Seite nicht angezeigt, sondern auf dem Server ist dies der `value`, der den mit dem `name` der Checkbox übermittelten Daten zugeordnet wird. Betrachten Sie das folgende Beispiel:

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

In diesem Beispiel haben wir einen `name` von `subscribe` und einen `value` von `newsletter`. Wenn das Formular eingereicht wird, wird das Datenpaar Name/Wert `subscribe=newsletter` sein.

Wenn das `value`-Attribut weggelassen wird, ist der Standardwert für die Checkbox `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn eine Checkbox beim Abschicken des Formulars nicht angehakt ist, werden weder der Name noch der Wert an den Server übermittelt. Es gibt keine HTML-only Methode, um den nicht angehakten Zustand einer Checkbox darzustellen (z.B. `value=unchecked`). Wenn Sie einen Standardwert für die Checkbox übermitteln möchten, wenn sie nicht angehakt ist, können Sie JavaScript verwenden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} innerhalb des Formulars zu erstellen, das einen Wert anzeigt, der einen nicht angehakten Zustand kennzeichnet.

## Zusätzliche Attribute

Zusätzlich zu den [allgemeinen Attributen](/de/docs/Web/HTML/Element/input#attributes), die von allen {{HTMLElement("input")}}-Elementen gemeinsam genutzt werden, unterstützen `checkbox`-Eingaben die folgenden Attribute.

- `checked`

  - : Ein {{Glossary("Boolean/HTML", "boolean")}} Attribut, das angibt, ob diese Checkbox standardmäßig angehakt ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob diese Checkbox derzeit angehakt ist: Wenn der Zustand der Checkbox geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked` IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerelementen wird der Wert einer Checkbox nur dann in den übermittelten Daten enthalten, wenn die Checkbox derzeit `checked` ist. In diesem Fall wird der Wert des `value`-Attributes der Checkbox als Eingabewert gemeldet, oder `on`, wenn kein `value` gesetzt ist.
    > Anders als andere Browser bewahrt Firefox standardmäßig [den dynamischen checked-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitennachladungen hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) Attribut, um diese Funktion zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, das allen {{HTMLElement("input")}} gemeinsam ist; allerdings dient es bei Eingaben vom Typ `checkbox` einem besonderen Zweck: Wenn ein Formular abgeschickt wird, werden nur Checkboxes, die derzeit angehakt sind, an den Server übertragen, und der gemeldete Wert ist der Wert des `value`-Attributes. Wenn das `value`-Attribut nicht anders spezifiziert ist, ist es standardmäßig der String `on`. Dies wird im Abschnitt [Value](#value) oben demonstriert.

## Verwendung von Checkbox-Eingaben

Die grundlegendste Verwendung von Checkboxes haben wir bereits oben behandelt. Schauen wir uns nun die anderen gebräuchlichen Checkbox-bezogenen Funktionen und Techniken an, die Sie benötigen werden.

### Umgang mit mehreren Checkboxes

Das oben gezeigte Beispiel enthält nur eine Checkbox; in realen Situationen werden Sie wahrscheinlich auf mehrere Checkboxes stoßen. Wenn sie völlig unabhängig sind, können Sie sie einfach alle separat behandeln, wie oben gezeigt. Wenn sie jedoch miteinander in Beziehung stehen, sind die Dinge nicht ganz so einfach.

Zum Beispiel enthalten wir im folgenden Demo mehrere Checkboxes, um den Benutzer seine Interessen auswählen zu lassen (siehe die vollständige Version im Abschnitt [Beispiele](#beispiele)).

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

In diesem Beispiel sehen Sie, dass wir jeder Checkbox denselben `name` gegeben haben. Wenn beide Checkboxen angehakt und dann das Formular abgeschickt werden, erhalten Sie eine Zeichenfolge mit Name/Wert-Paaren wie folgt: `interest=coding&interest=music`. Wenn diese Zeichenfolge den Server erreicht, müssen Sie sie anders als ein assoziatives Array parsen, damit alle Werte erfasst werden, nicht nur der letzte Wert von `interest`. Eine Technik, die mit Python verwendet wird, ist zum Beispiel im Artikel [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable) beschrieben.

### Standardmäßig markierte Checkboxes

Um eine Checkbox standardmäßig angehakt zu machen, geben Sie ihr das `checked`-Attribut. Siehe das folgende Beispiel:

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

### Größere Trefferfläche für Ihre Checkboxes bereitstellen

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie eine Checkbox umschalten können, indem Sie auf ihr zugeordnetes {{htmlelement("label")}}-Element klicken, sowie auf die Checkbox selbst. Dies ist eine sehr nützliche Funktion von HTML-Formularbeschriftungen, die es einfacher macht, die gewünschte Option auszuwählen, insbesondere auf Geräten mit kleinen Bildschirmen wie Smartphones.

Uber die Zugänglichkeit hinaus ist dies ein weiterer guter Grund, die `<label>`-Elemente in Ihren Formularen richtig einzurichten.

### Indeterminierte Zustand-Checkboxes

Eine Checkbox kann sich in einem **indeterminierten** Zustand befinden. Dieser wird mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate) über JavaScript gesetzt (er kann nicht mit einem HTML-Attribut gesetzt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` auf `true` gesetzt ist, hat die Checkbox in den meisten Browsern eine horizontale Linie im Kästchen (sie sieht in der Regel wie ein Bindestrich oder Minuszeichen aus) anstelle eines Häkchens/Kreuzes.

> [!NOTE]
> Dies ist rein eine visuelle Änderung. Es hat keinen Einfluss darauf, ob der `value` der Checkbox in einer Formularübermittlung verwendet wird. Dies wird durch den `checked`-Zustand entschieden, unabhängig vom `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn eine Checkbox verfügbar ist, die eine Anzahl von Unteroptionen (die ebenfalls Checkboxes sind) "besitzt". Wenn alle Unteroptionen angehakt sind, ist die besitzende Checkbox ebenfalls angehakt, und wenn sie alle nicht angehakt sind, ist die besitzende Checkbox nicht angehakt. Wenn eine oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, befindet sich die besitzende Checkbox im unentschiedenen Zustand.

Dies kann im unten stehenden Beispiel gesehen werden (dank an [CSS-Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel halten wir einen Überblick über die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen einer Zutat aktivieren oder deaktivieren, überprüft eine JavaScript-Funktion die Gesamtzahl der angehakten Zutaten:

- Wenn keine angehakt sind, ist das Kontrollkästchen für den Rezeptnamen nicht angehakt.
- Wenn ein oder zwei angehakt sind, ist das Kontrollkästchen für den Rezeptnamen `indeterminate`.
- Wenn alle drei angehakt sind, ist das Kontrollkästchen für den Rezeptnamen `checked`.

In diesem Fall wird der `indeterminate`-Zustand verwendet, um anzugeben, dass das Sammeln der Zutaten begonnen hat, aber das Rezept noch nicht vollständig ist.

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

Checkboxes unterstützen [Validierung](/de/docs/Web/HTML/Constraint_validation) (angeboten für alle {{HTMLElement("input")}}). Jedoch sind die meisten der [`ValidityState`](/de/docs/Web/API/ValidityState)s immer `false`. Wenn die Checkbox das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, aber nicht angehakt ist, dann wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des "mehrere Checkboxes"-Beispiels, das wir oben gesehen haben – es hat mehr Standardoptionen plus ein "andere" Checkbox, die bei Aktivierung ein Textfeld erscheinen lässt, um einen Wert für die "andere" Option einzugeben. Dies wird mit einem einfachen JavaScript-Block erreicht. Das Beispiel enthält implizite Labels, wobei das `<input>` direkt im `<label>` enthalten ist. Das Texteingabefeld, ohne sichtbares Label, enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut, das seinen zugänglichen Namen angibt. Dieses Beispiel enthält auch etwas CSS, um die Gestaltung zu verbessern.

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
      <td><strong><a href="#value">Value</a></strong></td>
      <td>
        Ein String, der den Wert der
        Checkbox darstellt.
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
      <td><strong>Methode</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select)
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, mit denen Sie Checkboxes basierend auf ihrem aktuellen Zustand stylen können
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML-DOM-API, die das `<input>`-Element implementiert
- [Kompatibilitätstabelle für CSS-Eigenschaften bei Formularelementen](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
