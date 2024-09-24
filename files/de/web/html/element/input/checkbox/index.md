---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`checkbox`** werden standardmäßig als Kästchen angezeigt, die bei Aktivierung angekreuzt werden, wie Sie es vielleicht in einem offiziellen Regierungsformular sehen. Das genaue Erscheinungsbild hängt von der Betriebssystemkonfiguration ab, unter der der Browser läuft. Im Allgemeinen ist dies ein Quadrat, es kann jedoch abgerundete Ecken haben. Eine Checkbox ermöglicht es Ihnen, einzelne Werte zur Übermittlung in einem Formular auszuwählen (oder nicht).

{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **Note:** [Radio-Buttons](/de/docs/Web/HTML/Element/input/radio) sind ähnlich wie Checkboxes, aber mit einem wichtigen Unterschied — [gleichnamige Radio-Buttons](/de/docs/Web/HTML/Element/input/radio#defining_a_radio_group) werden zu einer Gruppe zusammengefasst, in der jeweils nur ein Radio-Button ausgewählt werden kann, während Checkboxes es ermöglichen, einzelne Werte ein- und auszuschalten. In Fällen, in denen mehrere gleichnamige Steuerungen vorhanden sind, lässt ein Radio-Button nur eine Auswahl aus der Gruppe zu, während Checkboxes die Auswahl mehrerer Werte erlauben.

## Wert

Ein String, der den Wert der Checkbox repräsentiert. Dieser wird auf der Client-Seite nicht angezeigt, aber auf dem Server ist dies der `value`, der mit dem `name` der Checkbox übermittelt wird. Nehmen Sie das folgende Beispiel:

```html
<form>
  <div>
    <input
      type="checkbox"
      id="subscribeNews"
      name="subscribe"
      value="newsletter" />
    <label for="subscribeNews">Newsletter abonnieren?</label>
  </div>
  <div>
    <button type="submit">Abonnieren</button>
  </div>
</form>
```

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn das Formular eingereicht wird, wird das Datenpaar `name=value` `subscribe=newsletter` sein.

Wenn das `value`-Attribut weggelassen wurde, ist der Standardwert für die Checkbox `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn eine Checkbox nicht angekreuzt ist, wenn ihr Formular übermittelt wird, werden weder der Name noch der Wert an den Server übermittelt. Es gibt keine nur mit HTML umsetzbare Methode, um den nicht angekreuzten Zustand einer Checkbox darzustellen (z.B. `value=unchecked`). Wenn Sie einen Standardwert für die Checkbox übermitteln möchten, wenn sie nicht angekreuzt ist, könnten Sie JavaScript einbinden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} innerhalb des Formulars zu erzeugen, der einen Wert für den nicht angekreuzten Zustand angibt.

## Zusätzliche Attribute

Zusätzlich zu den [gemeinsamen Attributen](/de/docs/Web/HTML/Element/input#attributes), die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen "`checkbox`"-Eingaben die folgenden Attribute.

- `checked`

  - : Ein [boolean](/de/docs/Glossary/Boolean/HTML)-Attribut, das anzeigt, ob diese Checkbox standardmäßig (beim Laden der Seite) angekreuzt ist. Es gibt _nicht_ an, ob diese Checkbox momentan angekreuzt ist: Wenn sich der Zustand der Checkbox ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked` IDL-Attribut des {{domxref("HTMLInputElement")}} wird aktualisiert.)
    > [!NOTE]
    > Anders als bei anderen Eingabesteuerungen wird der Wert einer Checkbox nur in die übermittelten Daten aufgenommen, wenn die Checkbox momentan `checked` ist. Ist das der Fall, wird der Wert des `value`-Attributs der Checkbox als der Wert der Eingabe berücksichtigt, oder `on`, wenn kein `value` gesetzt ist.
    > Im Gegensatz zu anderen Browsern behält Firefox standardmäßig [den dynamischen angekreuzten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladungen hinweg bei. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; für Eingaben vom Typ `checkbox` erfüllt es jedoch einen speziellen Zweck: Wenn ein Formular übermittelt wird, werden nur Checkboxes, die momentan angekreuzt sind, an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn der `value` nicht anderweitig angegeben ist, ist er standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

## Verwendung von Checkbox-Eingaben

Wir haben bereits die grundlegendste Verwendung von Checkboxes oben behandelt. Schauen wir uns nun die anderen häufigen checkboxbezogenen Funktionen und Techniken an, die Sie benötigen werden.

### Handhabung mehrerer Checkboxes

Das Beispiel, das wir oben gesehen haben, enthielt nur eine Checkbox; in realen Situationen werden Sie wahrscheinlich auf mehrere Checkboxes stoßen. Sind sie völlig unabhängig, können Sie mit ihnen jeweils getrennt umgehen, wie oben gezeigt. Wenn sie jedoch alle zusammenhängen, sind die Dinge nicht ganz so einfach.

Zum Beispiel verwenden wir im folgenden Demo mehrere Checkboxes, um dem Benutzer die Auswahl seiner Interessen zu ermöglichen (siehe die vollständige Version im Abschnitt [Beispiele](#beispiele)).

```html
<fieldset>
  <legend>Wählen Sie Ihre Interessen</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" />
    <label for="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">Musik</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Handling_multiple_checkboxes', 600, 100)}}

In diesem Beispiel sehen Sie, dass wir jeder Checkbox den gleichen `name` zugewiesen haben. Wenn beide Checkboxes angekreuzt sind und dann das Formular übermittelt wird, erhalten Sie eine Zeichenfolge von Name/Wert-Paaren, die wie folgt übermittelt wird: `interest=coding&interest=music`. Wenn diese Zeichenfolge den Server erreicht, müssen Sie sie anders als als assoziatives Array parsen, sodass alle Werte, nicht nur der letzte Wert von `interest`, erfasst werden. Eine Technik, die mit Python verwendet wird, finden Sie in [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable), zum Beispiel.

### Standardmäßig angekreuzte Boxes

Um eine Checkbox standardmäßig angekreuzt zu machen, geben Sie ihr das `checked`-Attribut. Das folgende Beispiel zeigt dies:

```html
<fieldset>
  <legend>Wählen Sie Ihre Interessen</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked />
    <label for="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">Musik</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Checking_boxes_by_default', 600, 100)}}

### Größeren Aktionsbereich für Ihre Checkboxes bereitstellen

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie eine Checkbox umschalten können, indem Sie auf das zugehörige {{htmlelement("label")}}-Element klicken, ebenso wie auf die Checkbox selbst. Dies ist eine wirklich nützliche Funktion von HTML-Formular-Labels, die es erleichtert, die gewünschte Option auszuwählen, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen ordnungsgemäß einzurichten.

### Checkboxen im unbestimmten Zustand

Eine Checkbox kann sich in einem **unbestimmten** Zustand befinden. Dieser wird mithilfe der `indeterminate`-Eigenschaft des {{domxref("HTMLInputElement")}}-Objekts über JavaScript gesetzt (es kann nicht mit einem HTML-Attribut gesetzt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat die Checkbox in den meisten Browsern eine horizontale Linie im Kästchen (sie sieht ungefähr wie ein Bindestrich oder Minuszeichen aus) anstelle eines Häkchens.

> [!NOTE]
> Dies ist ausschließlich eine visuelle Änderung. Es hat keinen Einfluss darauf, ob der `value` der Checkbox bei einer Formularübermittlung verwendet wird. Dies wird durch den `checked`-Status festgelegt, unabhängig vom `indeterminate`-Status.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste Fall ist, wenn eine Checkbox vorhanden ist, die eine Anzahl von Unteroptionen (die ebenfalls Checkboxes sind) "besitzt". Wenn alle Unteroptionen angekreuzt sind, wird auch die besitzende Checkbox angekreuzt, und wenn sie alle nicht angekreuzt sind, ist die besitzende Checkbox nicht angekreuzt. Wenn eine oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, befindet sich die besitzende Checkbox im unbestimmten Zustand.

Dies kann im unten stehenden Beispiel gesehen werden (dank an [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel verfolgen wir die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kästchen für eine Zutat ankreuzen oder abkreuzen, überprüft eine JavaScript-Funktion die Gesamtzahl der angekreuzten Zutaten:

- Wenn keine angekreuzt sind, wird die Checkbox des Rezeptnamens auf nicht angekreuzt gesetzt.
- Wenn eine oder zwei angekreuzt sind, wird die Checkbox des Rezeptnamens auf `indeterminate` gesetzt.
- Wenn alle drei angekreuzt sind, wird die Checkbox des Rezeptnamens auf `checked` gesetzt.

In diesem Fall wird der `indeterminate`-Status verwendet, um anzugeben, dass das Sammeln der Zutaten begonnen hat, aber das Rezept noch nicht vollständig ist.

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

Checkboxes unterstützen [Validierung](/de/docs/Web/HTML/Constraint_validation) (die allen {{HTMLElement("input")}}s angeboten wird). Die meisten der {{domxref("ValidityState")}}s werden jedoch immer `false` sein. Wenn die Checkbox das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, aber nicht angekreuzt ist, wird {{domxref("ValidityState.valueMissing")}} `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des oben gesehenen "mehrere Checkboxes"-Beispiels — es enthält mehr Standardoptionen sowie eine "Andere"-Checkbox, die bei Auswahl ein Textfeld erscheint, um einen Wert für die "Andere"-Option einzugeben. Dies wird mit einem einfachen JavaScript-Block erreicht. Das Beispiel enthält implizite Labels, wobei das `<input>` direkt im `<label>` enthalten ist. Das Text-Eingabefeld, ohne sichtbares Label, enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut, das seinen zugänglichen Namen bereitstellt. Dieses Beispiel enthält auch etwas CSS zur Verbesserung des Stils.

### HTML

```html
<form>
  <fieldset>
    <legend>Wählen Sie Ihre Interessen</legend>
    <div>
      <label>
        <input type="checkbox" id="coding" name="interest" value="coding" />
        Coding
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="music" name="interest" value="music" />
        Musik
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="art" name="interest" value="art" />
        Kunst
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="sports" name="interest" value="sports" />
        Sport
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="cooking" name="interest" value="cooking" />
        Kochen
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="other" name="interest" value="other" />
        Andere
      </label>
      <input
        type="text"
        id="otherValue"
        name="other"
        aria-label="Anderes Interesse" />
    </div>
    <div>
      <button type="submit">Formular absenden</button>
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
      <td><strong>Events</strong></td>
      <td>{{domxref("HTMLElement/change_event", "change")}} und {{domxref("Element/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, die es ermöglichen, Checkboxes basierend auf ihrem aktuellen Status zu stylen
- {{domxref("HTMLInputElement")}}: HTML DOM API, die das `<input>`-Element implementiert
- [Kompatibilitätstabelle für CSS-Eigenschaften von Formularelementen](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
