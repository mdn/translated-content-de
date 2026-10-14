---
title: '`<input type="checkbox">`: HTML-Attributwert'
short-title: <input type="checkbox">
slug: Web/HTML/Reference/Elements/input/checkbox
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{htmlelement("input")}}-Elemente vom Typ **`checkbox`** werden standardmäßig als Kästchen dargestellt, die bei Aktivierung mit einem Häkchen markiert werden – ähnlich wie in einem amtlichen Papierformular. Das genaue Erscheinungsbild hängt von der Konfiguration des Betriebssystems ab, auf dem der Browser ausgeführt wird. Im Allgemeinen ist das Kästchen quadratisch, es kann aber abgerundete Ecken haben. Mit einer Checkbox können Sie einen einzelnen Wert für die Übermittlung in einem Formular auswählen oder nicht auswählen.

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

Eine Zeichenfolge, die den Wert der Checkbox darstellt. Sie wird auf der Clientseite nicht angezeigt. Auf dem Server ist sie jedoch der `value`, der den übermittelten Daten zusammen mit dem `name` der Checkbox zugeordnet wird. Betrachten Sie das folgende Beispiel:

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

In diesem Beispiel lautet der Name `subscribe` und der Wert `newsletter`. Beim Absenden des Formulars wird das Name-Wert-Paar `subscribe=newsletter` übermittelt.

Wenn das `value`-Attribut weggelassen wird, ist der Standardwert der Checkbox `on`. In diesem Fall würden die Daten als `subscribe=on` übermittelt.

> [!NOTE]
> Wenn eine Checkbox beim Absenden ihres Formulars nicht markiert ist, werden weder ihr Name noch ihr Wert an den Server übermittelt. Es gibt keine Möglichkeit, den nicht markierten Zustand einer Checkbox allein mit HTML darzustellen (beispielsweise mit `value=unchecked`). Wenn Sie für eine nicht markierte Checkbox einen Standardwert übermitteln möchten, können Sie mit JavaScript innerhalb des Formulars ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} mit einem Wert erstellen, der den nicht markierten Zustand kennzeichnet.

## Zusätzliche Attribute

Zusätzlich zu den [gemeinsamen Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes) aller {{HTMLElement("input")}}-Elemente unterstützen `checkbox`-Inputs die folgenden Attribute.

- `checked`
  - : Ein {{Glossary("Boolean/HTML", "boolesches")}} Attribut, das angibt, ob diese Checkbox standardmäßig markiert ist (wenn die Seite geladen wird). Es gibt _nicht_ an, ob die Checkbox derzeit markiert ist: Wenn sich der Zustand der Checkbox ändert, wird diese Änderung nicht im Inhaltsattribut widergespiegelt. (Nur das IDL-Attribut `checked` des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Anders als bei anderen Eingabesteuerelementen wird der Wert einer Checkbox nur dann in die übermittelten Daten aufgenommen, wenn die Checkbox derzeit `checked` ist. In diesem Fall wird der Wert des `value`-Attributs der Checkbox als Eingabewert übermittelt, oder `on`, wenn kein `value` festgelegt ist.
    > Anders als andere Browser [speichert Firefox standardmäßig den dynamischen Markierungszustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über das Neuladen der Seite hinweg. Verwenden Sie das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete), um dieses Verhalten zu steuern.

- `value`
  - : Das Attribut `value` haben alle {{HTMLElement("input")}}-Elemente gemeinsam. Für Inputs vom Typ `checkbox` erfüllt es jedoch einen besonderen Zweck: Beim Absenden eines Formulars werden nur die derzeit markierten Checkboxen an den Server übermittelt. Der übermittelte Wert entspricht dem Wert des `value`-Attributs. Wenn `value` nicht anderweitig angegeben ist, ist der Standardwert die Zeichenfolge `on`. Dies wird oben im Abschnitt [Wert](#wert) gezeigt.

- `switch`
  - : Ein {{Glossary("Boolean/HTML", "boolesches")}} Attribut, das nur für `checkbox`-Inputs gilt. Wenn es vorhanden ist, gibt es an, dass die `checkbox` einen Ein/Aus-Schalter (`switch`) anstelle einer normalen `checkbox` darstellt. Es verändert das Erscheinungsbild des `checkbox`-Steuerelements, das zugrunde liegende Verhalten bleibt jedoch das einer normalen `checkbox`.

    > [!NOTE]
    > Dieses Attribut ermöglicht es User Agents, unterstützenden Technologien die ARIA-Semantik von `switch` bereitzustellen, ohne dass Dokumente ausdrücklich `role="switch"` angeben müssen. Das Markup und die API ähneln denen von Checkboxen, mit der Ausnahme, dass die Pseudoklasse `:indeterminate` niemals zutrifft.

    > [!WARNING]
    > Dieses Attribut ist noch experimentell und wird nur von wenigen Browsern unterstützt. Browser, die es nicht unterstützen, ignorieren das Attribut.

## Checkbox-Inputs verwenden

Checkboxen ähneln [Radio-Buttons](/de/docs/Web/HTML/Reference/Elements/input/radio), unterscheiden sich aber in einem wichtigen Punkt: [Radio-Buttons mit demselben Namen](/de/docs/Web/HTML/Reference/Elements/input/radio#defining_a_radio_group) werden zu einer Gruppe zusammengefasst, in der jeweils nur ein Radio-Button ausgewählt werden kann. Checkboxen ermöglichen dagegen, einzelne Werte ein- und auszuschalten. Wenn mehrere Steuerelemente denselben Namen haben, lässt sich bei Radio-Buttons nur eines davon auswählen, bei Checkboxen hingegen lassen sich mehrere Werte auswählen.

### Mehrere Checkboxen verarbeiten

Das obige Beispiel enthielt nur eine Checkbox. In der Praxis werden Sie wahrscheinlich auf mehrere Checkboxen stoßen. Wenn diese nichts miteinander zu tun haben, können Sie sie wie oben gezeigt einzeln behandeln. Wenn sie jedoch zusammengehören, ist die Verarbeitung nicht ganz so einfach.

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

In diesem Beispiel haben wir jeder Checkbox denselben `name` gegeben. Wenn beide Checkboxen markiert sind und das Formular anschließend abgesendet wird, werden die Name-Wert-Paare als Zeichenfolge wie diese übermittelt: `interest=coding&interest=music`. Wenn diese Zeichenfolge den Server erreicht, müssen Sie sie anders als ein assoziatives Array verarbeiten, damit alle Werte von `interest` erfasst werden und nicht nur der letzte. Ein Beispiel für eine Technik mit Python finden Sie unter [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable).

### Checkboxen standardmäßig markieren

Um eine Checkbox standardmäßig zu markieren, geben Sie ihr das Attribut `checked`. Sehen Sie sich das folgende Beispiel an:

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

### Checkbox als Schalter

Das folgende Beispiel zeigt, wie Sie eine Checkbox so darstellen und verwenden können, dass sie wie ein Ein/Aus-Schalter aussieht und funktioniert.

```html
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
</fieldset>
```

> [!NOTE]
> Nur einige Browser stellen die Checkbox als Schalter dar. Ihr Verhalten ist jedoch in allen Browsern gleich.

{{EmbedLiveSample('Switch_as_a_checkbox', 600, 100)}}

### Den anklickbaren Bereich für Checkboxen vergrößern

In den obigen Beispielen ist Ihnen möglicherweise aufgefallen, dass Sie eine Checkbox sowohl durch Klicken auf die Checkbox selbst als auch auf das zugehörige {{htmlelement("label")}}-Element umschalten können. Diese nützliche Eigenschaft von HTML-Formularbeschriftungen erleichtert das Anklicken der gewünschten Option, insbesondere auf Geräten mit kleinen Bildschirmen wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen richtig einzurichten.

### Checkboxen im unbestimmten Zustand

Eine Checkbox kann sich in einem **unbestimmten** Zustand befinden. Dieser wird über JavaScript mit der Eigenschaft [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate) des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts festgelegt (er kann nicht mit einem HTML-Attribut festgelegt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` den Wert `true` hat, zeigen die meisten Browser in der Checkbox eine horizontale Linie (ähnlich einem Binde- oder Minuszeichen) anstelle eines Häkchens an.

> [!NOTE]
> Dies ist eine rein visuelle Änderung. Sie hat keinen Einfluss darauf, ob der `value` der Checkbox beim Absenden eines Formulars verwendet wird. Das entscheidet der Zustand `checked`, unabhängig vom Zustand `indeterminate`.

Für diese Eigenschaft gibt es nicht viele Anwendungsfälle. Am häufigsten wird sie verwendet, wenn eine Checkbox mehreren Unteroptionen (ebenfalls Checkboxen) übergeordnet ist. Wenn alle Unteroptionen markiert sind, ist auch die übergeordnete Checkbox markiert. Wenn keine markiert ist, ist auch die übergeordnete Checkbox nicht markiert. Sobald sich der Zustand einer oder mehrerer Unteroptionen von dem der anderen unterscheidet, befindet sich die übergeordnete Checkbox im unbestimmten Zustand.

Dies zeigt das folgende Beispiel (mit Dank an [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Anregung). Darin verfolgen wir, welche Zutaten wir für ein Rezept zusammengetragen haben. Wenn Sie die Checkbox einer Zutat markieren oder die Markierung entfernen, prüft eine JavaScript-Funktion die Gesamtzahl der markierten Zutaten:

- Wenn keine Zutat markiert ist, wird die Checkbox des Rezeptnamens auf nicht markiert gesetzt.
- Wenn eine oder zwei Zutaten markiert sind, wird die Checkbox des Rezeptnamens auf `indeterminate` gesetzt.
- Wenn alle drei Zutaten markiert sind, wird die Checkbox des Rezeptnamens auf `checked` gesetzt.

In diesem Fall zeigt der Zustand `indeterminate` also an, dass das Zusammentragen der Zutaten begonnen hat, das Rezept aber noch nicht vollständig ist.

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
```

{{EmbedLiveSample("indeterminate_state", "", 200)}}

## Validierung

Checkboxen unterstützen die [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation), die für alle {{HTMLElement("input")}}-Elemente verfügbar ist. Die meisten Eigenschaften von [`ValidityState`](/de/docs/Web/API/ValidityState) sind jedoch immer `false`. Wenn die Checkbox das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) hat, aber nicht markiert ist, hat [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) den Wert `true`.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des obigen Beispiels mit mehreren Checkboxen. Es enthält mehr Standardoptionen und zusätzlich eine Checkbox für „Sonstiges“. Wenn diese markiert wird, erscheint ein Textfeld, in das ein Wert für die Option „Sonstiges“ eingegeben werden kann. Dies wird mit einem kurzen JavaScript-Codeblock umgesetzt. Das Beispiel verwendet implizite Beschriftungen, bei denen sich das `<input>` direkt innerhalb des `<label>` befindet. Das Texteingabefeld hat keine sichtbare Beschriftung, aber das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), das seinen zugänglichen Namen bereitstellt. Außerdem enthält das Beispiel etwas CSS, um die Gestaltung zu verbessern.

### HTML

```html
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
</fieldset>
```

### CSS

```css
html {
  font-family: sans-serif;
}

div {
  margin-bottom: 10px;
}

fieldset {
  width: 600px;
  margin: 0 auto;
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
        Checkbox darstellt.
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

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, mit denen Sie Checkboxen anhand ihres aktuellen Zustands gestalten können
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML-DOM-API, die das `<input>`-Element implementiert
