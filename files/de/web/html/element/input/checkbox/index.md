---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`checkbox`** werden standardmäßig als Kästchen dargestellt, die angekreuzt (abgehakt) werden, wenn sie aktiviert sind, ähnlich wie in einem offiziellen Regierungsformular. Das genaue Erscheinungsbild hängt von der Betriebssystemkonfiguration ab, unter der der Browser ausgeführt wird. In der Regel ist dies ein Quadrat, es kann jedoch abgerundete Ecken haben. Eine Checkbox ermöglicht die Auswahl einzelner Werte, die in einem Formular übermittelt werden sollen (oder nicht).

{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **Hinweis:** [Radiobuttons](/de/docs/Web/HTML/Element/input/radio) sind ähnlich wie Checkboxes, aber mit einem wichtigen Unterschied — [gleichnamige Radiobuttons](/de/docs/Web/HTML/Element/input/radio#defining_a_radio_group) werden zu einer Gruppe zusammengefasst, in der jeweils nur ein Radiobutton ausgewählt werden kann, wohingegen bei Checkboxes einzelne Werte ein- und ausgeschaltet werden können. Wenn mehrere gleichnamige Steuerelemente existieren, kann bei Radiobuttons nur einer ausgewählt werden, während bei Checkboxes mehrere Werte ausgewählt werden können.

## Wert

Ein String, der den Wert der Checkbox darstellt. Dieser wird auf der Client-Seite nicht angezeigt, aber auf dem Server ist dies der `value`, der den mit dem Namen der Checkbox übermittelten Daten zugeordnet ist. Sehen Sie sich das folgende Beispiel an:

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

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn das Formular übermittelt wird, ist das Datenpaar aus Name und Wert `subscribe=newsletter`.

Wenn das `value`-Attribut weggelassen wurde, ist der Standardwert für die Checkbox `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn eine Checkbox nicht angekreuzt ist, wenn ihr Formular übermittelt wird, werden weder der Name noch der Wert an den Server übermittelt. Es gibt keine HTML-exklusive Methode, um den ungekreuzten Zustand einer Checkbox darzustellen (z. B. `value=unchecked`). Wenn Sie einen Standardwert für die Checkbox übermitteln möchten, wenn sie ungekreuzt ist, können Sie JavaScript verwenden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} innerhalb des Formulars zu erstellen, dessen Wert einen ungekreuzten Zustand anzeigt.

## Zusätzliche Attribute

Zusätzlich zu den [allgemeinen Attributen](/de/docs/Web/HTML/Element/input#attributes), die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `checkbox`-Inputs die folgenden Attribute.

- `checked`

  - : Ein [Boolean](/de/docs/Glossary/Boolean/HTML)-Attribut, das anzeigt, ob diese Checkbox standardmäßig (beim Laden der Seite) angekreuzt ist. Es zeigt _nicht_ an, ob diese Checkbox aktuell angekreuzt ist: Wenn sich der Zustand der Checkbox ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`checked`-IDL-Attribut wird aktualisiert.)
    > [!NOTE]
    > Anders als bei anderen Eingabesteuerelementen wird der Wert einer Checkbox nur in den übermittelten Daten aufgenommen, wenn die Checkbox derzeit `checked` ist. Wenn dies der Fall ist, wird als Wert der Checkbox der Wert des `value`-Attributs angegeben oder `on`, wenn kein `value`-Wert festgelegt ist.
    > Anders als bei anderen Browsern behält Firefox standardmäßig den [dynamischen angekreuzten Status](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladungen hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut, um dieses Feature zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s gemeinsam haben; jedoch dient es einem besonderen Zweck für Inputs des Typs `checkbox`: Wenn ein Formular übermittelt wird, werden nur derzeit angekreuzte Checkboxes an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn der `value` nicht anderweitig angegeben ist, ist er standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

## Verwendung von Checkbox-Inputs

Wir haben bereits den grundlegendsten Gebrauch von Checkboxes oben behandelt. Lassen Sie uns nun die anderen gängigen Checkbox-bezogenen Funktionen und Techniken betrachten, die Sie benötigen.

### Verarbeiten mehrerer Checkboxes

Das Beispiel, das wir oben gesehen haben, enthielt nur eine Checkbox; in realen Situationen werden Sie wahrscheinlich auf mehrere Checkboxes stoßen. Wenn sie völlig unabhängig sind, können Sie sie einfach alle einzeln handhaben, wie oben gezeigt. Wenn sie jedoch alle zusammengehören, sind die Dinge nicht ganz so einfach.

Zum Beispiel enthalten wir in der folgenden Demo mehrere Checkboxes, um es dem Benutzer zu ermöglichen, seine Interessen auszuwählen (siehe die vollständige Version im Abschnitt [Beispiele](#beispiele)).

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

In diesem Beispiel werden Sie sehen, dass wir jeder Checkbox den gleichen `name` gegeben haben. Wenn beide Checkboxes angekreuzt sind und das Formular dann übermittelt wird, erhalten Sie einen String von Name/Wert-Paaren, der so übermittelt wird: `interest=coding&interest=music`. Wenn dieser String den Server erreicht, müssen Sie ihn anders als als assoziatives Array parsen, sodass alle Werte, nicht nur der letzte Wert von `interest`, erfasst werden. Für eine Technik, die mit Python verwendet wird, siehe [Verarbeiten mehrerer Checkboxes mit einer einzigen serverseitigen Variablen](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable).

### Standardmäßig Kästchen ankreuzen

Um eine Checkbox standardmäßig anzukreuzen, geben Sie ihr das `checked`-Attribut. Sehen Sie sich das folgende Beispiel an:

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

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie eine Checkbox umschalten können, indem Sie auf das zugehörige {{htmlelement("label")}}-Element klicken, ebenso wie auf die Checkbox selbst. Dies ist eine wirklich nützliche Funktion von HTML-Formularlabels, die es erleichtert, die gewünschte Option anzuklicken, insbesondere auf Geräten mit kleinen Bildschirmen wie Smartphones.

Über die Barrierefreiheit hinaus ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen korrekt einzurichten.

### Indeterminate-State-Checkboxen

Eine Checkbox kann sich in einem **indeterminierten** Zustand befinden. Dies wird über das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt und die [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)-Eigenschaft mittels JavaScript gesetzt (es kann nicht über ein HTML-Attribut gesetzt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat die Checkbox eine horizontale Linie im Kästchen (sie sieht in den meisten Browsern aus wie ein Bindestrich oder ein Minuszeichen) statt eines Häkchens.

> [!NOTE]
> Dies ist rein eine visuelle Änderung und hat keinen Einfluss darauf, ob der `value` der Checkbox bei einer Formularübermittlung verwendet wird. Dies wird durch den `checked`-Zustand entschieden, unabhängig vom `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Am häufigsten wird sie verwendet, wenn eine Checkbox vorhanden ist, die eine Anzahl von Unteroptionen "besitzt" (die ebenfalls Checkboxes sind). Wenn alle Unteroptionen angekreuzt sind, ist die besitzende Checkbox ebenfalls angekreuzt, und wenn sie alle nicht angekreuzt sind, ist die besitzende Checkbox nicht angekreuzt. Wenn eine oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, befindet sich die besitzende Checkbox in einem indeterminierten Zustand.

Dies kann im folgenden Beispiel gesehen werden (dank [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel verfolgen wir die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen für eine Zutat an- oder abkreuzen, überprüft eine JavaScript-Funktion die Gesamtanzahl der angekreuzten Zutaten:

- Wenn keine angekreuzt ist, wird das Kontrollkästchen mit dem Rezeptnamen auf nicht angekreuzt gesetzt.
- Wenn eine oder zwei angekreuzt sind, wird das Kontrollkästchen mit dem Rezeptnamen auf `indeterminate` gesetzt.
- Wenn alle drei angekreuzt sind, wird das Kontrollkästchen mit dem Rezeptnamen auf `checked` gesetzt.

In diesem Fall wird der `indeterminate`-Zustand verwendet, um anzuzeigen, dass das Sammeln der Zutaten begonnen hat, das Rezept jedoch noch nicht vollständig ist.

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

Checkboxes unterstützen eine [Validierung](/de/docs/Web/HTML/Constraint_validation) (die allen {{HTMLElement("input")}}s angeboten wird). Jedoch werden die meisten [`ValidityState`](/de/docs/Web/API/ValidityState)-Zustände immer `false` sein. Wenn die Checkbox das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, aber nicht angekreuzt ist, wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des "mehrere Checkboxes"-Beispiels, das wir oben gesehen haben — es hat mehr Standardoptionen sowie eine "andere" Checkbox, die beim Ankreuzen ein Textfeld anzeigt, um einen Wert für die "andere" Option einzugeben. Dies wird mit einem einfachen JavaScript-Block erreicht. Das Beispiel enthält implizite Labels, wobei das `<input>` direkt im `<label>` ist. Das Texteingabefeld, ohne sichtbares Label, enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut, das seinen zugänglichen Namen bereitstellt. Dieses Beispiel enthält auch ein wenig CSS zur Verbesserung des Stylings.

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
      <td><strong>Methoden</strong></td>
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
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML DOM API, die das `<input>`-Element implementiert
- [CSS-Eigenschaftskompatibilitäts-Tabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
