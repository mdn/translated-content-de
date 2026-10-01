---
title: '`<input type="checkbox">`: Wert des HTML-Attributs'
short-title: <input type="checkbox">
slug: Web/HTML/Reference/Elements/input/checkbox
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

{{htmlelement("input")}}-Elemente vom Typ **`checkbox`** werden standardmäßig als Kästchen dargestellt, die bei Aktivierung angekreuzt werden – ähnlich wie in einem amtlichen Papierformular. Das genaue Aussehen hängt von der Konfiguration des Betriebssystems ab, auf dem der Browser läuft. In der Regel ist das Kästchen quadratisch, es kann aber auch abgerundete Ecken haben. Mit einer Checkbox können Sie einen einzelnen Wert für die Übermittlung in einem Formular auswählen – oder ihn nicht auswählen.

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

## Wert

Eine Zeichenfolge, die den Wert der Checkbox angibt. Sie wird auf der Clientseite nicht angezeigt. Auf dem Server ist sie der `value`, der den übermittelten Daten zusammen mit dem `name` der Checkbox zugeordnet wird. Betrachten Sie das folgende Beispiel:

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

In diesem Beispiel lautet der `name` `subscribe` und der `value` `newsletter`. Beim Absenden des Formulars wird das Name-Wert-Paar `subscribe=newsletter` übermittelt.

Wird das Attribut `value` weggelassen, ist der Standardwert der Checkbox `on`. In diesem Fall würden also die Daten `subscribe=on` übermittelt.

> [!NOTE]
> Ist eine Checkbox beim Absenden ihres Formulars nicht angekreuzt, werden weder ihr Name noch ihr Wert an den Server übermittelt. Es gibt keine Möglichkeit, den nicht angekreuzten Zustand einer Checkbox allein mit HTML darzustellen (etwa durch `value=unchecked`). Wenn Sie für eine nicht angekreuzte Checkbox einen Standardwert übermitteln möchten, können Sie mit JavaScript ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} im Formular erstellen, dessen Wert den nicht angekreuzten Zustand angibt.

## Zusätzliche Attribute

Neben den [gemeinsamen Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes) aller {{HTMLElement("input")}}-Elemente unterstützen Eingaben vom Typ `checkbox` die folgenden Attribute.

- `checked`
  - : Ein {{Glossary("Boolean/HTML", "boolesches")}} Attribut, das angibt, ob diese Checkbox standardmäßig angekreuzt ist (wenn die Seite geladen wird). Es gibt _nicht_ an, ob die Checkbox aktuell angekreuzt ist: Ändert sich ihr Zustand, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das IDL-Attribut `checked` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Anders als bei anderen Eingabesteuerelementen wird der Wert einer Checkbox nur dann in die übermittelten Daten aufgenommen, wenn die Checkbox aktuell `checked` ist. In diesem Fall wird der Wert ihres `value`-Attributs als Eingabewert übermittelt, oder `on`, wenn kein `value` festgelegt ist.
    > Anders als andere Browser speichert Firefox standardmäßig [den dynamischen angekreuzten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg. Verwenden Sie das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete), um dieses Verhalten zu steuern.

- `value`
  - : Das Attribut `value` ist allen {{HTMLElement("input")}}-Elementen gemeinsam. Bei Eingaben vom Typ `checkbox` erfüllt es jedoch einen besonderen Zweck: Beim Absenden eines Formulars werden nur die aktuell angekreuzten Checkboxen an den Server übermittelt. Als Wert wird der Wert des Attributs `value` übermittelt. Ist `value` nicht anderweitig festgelegt, lautet die Zeichenfolge standardmäßig `on`. Dies wird im obigen Abschnitt [Wert](#wert) veranschaulicht.

- `switch`
  - : Ein {{Glossary("Boolean/HTML", "boolesches")}} Attribut, das nur für Eingaben vom Typ `checkbox` gilt. Wenn es vorhanden ist, zeigt es an, dass die `checkbox` einen Ein/Aus-Schalter (`switch`) statt einer gewöhnlichen `checkbox` darstellt. Es verändert das Aussehen des Steuerelements, sein grundlegendes Verhalten bleibt jedoch das einer gewöhnlichen `checkbox`.

    > [!NOTE]
    > Dieses Attribut ermöglicht es Benutzeragenten, die ARIA-Semantik von `switch` für assistive Technologien bereitzustellen, ohne dass Dokumente ausdrücklich `role="switch"` angeben müssen. Markup und API ähneln denen von Checkboxen, mit der Ausnahme, dass die Pseudoklasse `:indeterminate` niemals zutrifft.

    > [!WARNING]
    > Dieses Attribut ist noch experimentell und wird nur von wenigen Browsern unterstützt. Nicht unterstützende Browser ignorieren das Attribut.

## Checkbox-Eingaben verwenden

Checkboxen ähneln [Optionsfeldern](/de/docs/Web/HTML/Reference/Elements/input/radio), unterscheiden sich aber in einem wichtigen Punkt: [Optionsfelder mit demselben Namen](/de/docs/Web/HTML/Reference/Elements/input/radio#defining_a_radio_group) werden zu einer Gruppe zusammengefasst, aus der jeweils nur ein Optionsfeld ausgewählt werden kann. Mit Checkboxen lassen sich dagegen einzelne Werte unabhängig voneinander ein- und ausschalten. Bei mehreren Steuerelementen mit demselben Namen erlauben Optionsfelder nur eine Auswahl, Checkboxen hingegen die Auswahl mehrerer Werte.

### Mehrere Checkboxen verarbeiten

Das obige Beispiel enthielt nur eine Checkbox. In der Praxis werden Sie wahrscheinlich auf mehrere Checkboxen stoßen. Sind sie völlig unabhängig voneinander, können Sie jede einzeln behandeln, wie oben gezeigt. Wenn sie jedoch zusammengehören, ist die Sache nicht ganz so einfach.

In der folgenden Demo verwenden wir beispielsweise mehrere Checkboxen, damit Benutzer ihre Interessen auswählen können (die vollständige Version finden Sie im Abschnitt [Beispiele](#beispiele)).

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

In diesem Beispiel haben wir jeder Checkbox denselben `name` gegeben. Sind beide Checkboxen angekreuzt und wird das Formular abgesendet, werden Name-Wert-Paare in Form der folgenden Zeichenfolge übermittelt: `interest=coding&interest=music`. Wenn diese Zeichenfolge den Server erreicht, müssen Sie sie anders als ein assoziatives Array auswerten, damit alle Werte von `interest` erfasst werden und nicht nur der letzte. Ein Beispiel für eine Vorgehensweise mit Python finden Sie unter [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable).

### Checkboxen standardmäßig ankreuzen

Damit eine Checkbox standardmäßig angekreuzt ist, weisen Sie ihr das Attribut `checked` zu. Das folgende Beispiel zeigt dies:

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

### Ein Schalter als Checkbox

Das folgende Beispiel zeigt, wie Sie eine Checkbox wie einen Ein/Aus-Schalter aussehen und funktionieren lassen.

```html
<form>
  <fieldset>
    <legend>Adjust your setting</legend>
    <div>
      <label for="theme">Dark mode</label>
      <input type="checkbox" name="theme" id="theme" switch checked />
    </div>
    <div>
      <label for="notifications">Notifications</label>
      <input type="checkbox" name="notifications" id="notifications" switch />
    </div>
    <button type="submit">Submit</button>
  </fieldset>
</form>
```

> [!NOTE]
> Nur einige Browser stellen die Checkbox als Schalter dar. Das Verhalten ist jedoch in allen Browsern gleich.

{{EmbedLiveSample('Switch_as_a_checkbox', 600, 100)}}

### Die Klickfläche Ihrer Checkboxen vergrößern

In den obigen Beispielen ist Ihnen vielleicht aufgefallen, dass Sie eine Checkbox sowohl durch Klicken auf die Checkbox selbst als auch auf das zugehörige {{htmlelement("label")}}-Element umschalten können. Diese Funktion von HTML-Formularbeschriftungen erleichtert es, die gewünschte Option anzuklicken – insbesondere auf Geräten mit kleinen Bildschirmen wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen korrekt einzurichten.

### Checkboxen mit unbestimmtem Zustand

Eine Checkbox kann sich in einem **unbestimmten** Zustand befinden. Dieser wird über JavaScript mit der Eigenschaft [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate) des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts festgelegt (nicht über ein HTML-Attribut):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, zeigen die meisten Browser in der Checkbox einen waagerechten Strich (ähnlich einem Binde- oder Minuszeichen) statt eines Häkchens an.

> [!NOTE]
> Dies ist eine rein visuelle Änderung. Sie hat keinen Einfluss darauf, ob der `value` der Checkbox beim Absenden eines Formulars verwendet wird. Darüber entscheidet der Zustand `checked`, unabhängig vom Zustand `indeterminate`.

Für diese Eigenschaft gibt es nicht viele Anwendungsfälle. Am häufigsten wird sie verwendet, wenn eine Checkbox mehrere Unteroptionen (ebenfalls Checkboxen) zusammenfasst. Sind alle Unteroptionen angekreuzt, ist auch die übergeordnete Checkbox angekreuzt. Sind alle nicht angekreuzt, ist auch die übergeordnete Checkbox nicht angekreuzt. Weicht der Zustand einer oder mehrerer Unteroptionen von dem der anderen ab, befindet sich die übergeordnete Checkbox im unbestimmten Zustand.

Das folgende Beispiel zeigt dies (danke an [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Anregung). Darin verfolgen wir, welche Zutaten wir für ein Rezept zusammengestellt haben. Wenn Sie die Checkbox einer Zutat an- oder abwählen, prüft eine JavaScript-Funktion die Gesamtzahl der angekreuzten Zutaten:

- Ist keine Zutat angekreuzt, wird die Checkbox des Rezeptnamens auf nicht angekreuzt gesetzt.
- Sind eine oder zwei Zutaten angekreuzt, wird die Checkbox des Rezeptnamens auf `indeterminate` gesetzt.
- Sind alle drei Zutaten angekreuzt, wird die Checkbox des Rezeptnamens auf `checked` gesetzt.

In diesem Fall zeigt der Zustand `indeterminate` also an, dass mit dem Zusammenstellen der Zutaten begonnen wurde, das Rezept aber noch nicht vollständig ist.

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

Checkboxen unterstützen die [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation), die für alle {{HTMLElement("input")}}-Elemente verfügbar ist. Die meisten Eigenschaften von [`ValidityState`](/de/docs/Web/API/ValidityState) sind jedoch immer `false`. Hat die Checkbox das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required), ist aber nicht angekreuzt, so ist [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true`.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des obigen Beispiels mit mehreren Checkboxen. Es enthält weitere Standardoptionen sowie eine Checkbox für „Sonstiges“, bei deren Auswahl ein Textfeld zur Eingabe eines Werts für diese Option erscheint. Dies wird mit einem kurzen JavaScript-Block umgesetzt. Das Beispiel verwendet implizite Beschriftungen, bei denen sich das `<input>` direkt innerhalb des `<label>` befindet. Die Texteingabe hat keine sichtbare Beschriftung; ihr Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) stellt ihren zugänglichen Namen bereit. Das Beispiel enthält außerdem CSS, um die Darstellung zu verbessern.

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
        Eine Zeichenfolge, die den Wert der
        Checkbox angibt.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>[`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event)</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
        <code><a href="#checked">checked</a></code> und
        <code><a href="#switch">switch</a></code>
      </td>
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

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, mit denen Sie Checkboxen entsprechend ihrem aktuellen Zustand gestalten können
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML-DOM-API, die das `<input>`-Element implementiert
