---
title: <input type="checkbox">
slug: Web/HTML/Reference/Elements/input/checkbox
l10n:
  sourceCommit: 539dea64b179cea3f12270fe2b5203a9d2d08795
---

{{htmlelement("input")}}-Elemente vom Typ **`checkbox`** werden standardmäßig als Kästchen dargestellt, die aktiviert (angehakt) sind, wie Sie sie in einem offiziellen Papierformular einer Regierung sehen könnten. Das genaue Erscheinungsbild hängt von der Betriebssystemkonfiguration ab, unter der der Browser läuft. Im Allgemeinen ist es ein Quadrat, es kann aber auch abgerundete Ecken haben. Ein Kontrollkästchen ermöglicht es Ihnen, einzelne Werte zur Übermittlung in einem Formular auszuwählen (oder nicht).

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
> [Radio-Buttons](/de/docs/Web/HTML/Reference/Elements/input/radio) sind ähnlich wie Kontrollkästchen, haben aber einen wichtigen Unterschied — [gleichnamige Radio-Buttons](/de/docs/Web/HTML/Reference/Elements/input/radio#defining_a_radio_group) sind in einer Gruppe zusammengeschlossen, bei der immer nur ein Radio-Button gleichzeitig ausgewählt werden kann, während Kontrollkästchen es ermöglichen, einzelne Werte ein- und auszuschalten. Wenn mehrere gleichnamige Steuerelemente existieren, erlaubt Radio-Buttons, dass einer von ihnen ausgewählt wird, während Kontrollkästchen es erlauben, mehrere Werte auszuwählen.

## Wert

Ein String, der den Wert des Kontrollkästchens darstellt. Dieser wird auf der Client-Seite nicht angezeigt, aber auf dem Server ist dieser der `value`, der den mit dem `name` des Kontrollkästchens übermittelten Daten zugeordnet ist. Nehmen Sie das folgende Beispiel:

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

Wenn das `value`-Attribut weggelassen wurde, ist der Standardwert für das Kontrollkästchen `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn ein Kontrollkästchen beim Absenden seines Formulars nicht angehakt ist, werden weder der Name noch der Wert an den Server übermittelt. Es gibt keine HTML-Only-Methode, um den nicht angehakten Zustand eines Kontrollkästchens darzustellen (z.B. `value=unchecked`). Wenn Sie einen Standardwert für das Kontrollkästchen übermitteln wollten, wenn es nicht angehakt ist, könnten Sie JavaScript verwenden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} im Formular zu erstellen, das einen Wert für den nicht angehakten Zustand angibt.

## Zusätzliche Attribute

Zusätzlich zu den [gemeinsamen Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die von allen {{HTMLElement("input")}}-Elementen geteilt werden, unterstützen `checkbox`-Inputs die folgenden Attribute.

- `checked`
  - : Ein {{Glossary("Boolean/HTML", "boolean")}}-Attribut, das angibt, ob dieses Kontrollkästchen standardmäßig (beim Laden der Seite) angehakt ist. Es gibt _nicht_ an, ob dieses Kontrollkästchen derzeit angehakt ist: Wenn der Zustand des Kontrollkästchens geändert wird, wird dieses Inhaltsattribut nicht geändert. (Nur das `checked` IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Anders als bei anderen Eingabesteuerelementen wird der Wert eines Kontrollkästchens nur in die übermittelten Daten aufgenommen, wenn das Kontrollkästchen derzeit `checked` ist. Wenn dies der Fall ist, wird der Wert des `value`-Attributs des Kontrollkästchens als Wert der Eingabe gemeldet, oder `on`, wenn kein `value` gesetzt ist.
    > Anders als andere Browser behält Firefox standardmäßig [den dynamischen angehakten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge bei. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`
  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; es erfüllt jedoch einen besonderen Zweck bei Eingaben vom Typ `checkbox`: Wenn ein Formular übermittelt wird, werden nur Kontrollkästchen, die derzeit angehakt sind, an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn das `value`-Attribut nicht anderweitig spezifiziert ist, ist es standardmäßig der String `on`. Dies wird in der [Wert](#wert)-Sektion oben demonstriert.

- `switch`
  - : Ein {{Glossary("Boolean/HTML", "boolean")}}-Attribut, das nur auf `checkbox`-Eingaben angewendet wird. Wenn es vorhanden ist, zeigt es an, dass das `checkbox` einen Ein-/Aus-`Schalter` anstelle eines normalen Kontrollkästchens darstellt. Es verändert das Erscheinungsbild der `checkbox`-Steuerung, aber das zugrunde liegende Verhalten bleibt dasselbe wie bei einem normalen `checkbox`.

    > [!NOTE]
    > Dieses Attribut ermöglicht es Benutzeragenten, ARIA-Semantik für `switch`-Elemente für unterstützende Technologien zugänglich zu machen — ohne dass Dokumente ausdrücklich `role="switch"` angeben müssen. Das Markup und die API sind ähnlich denen von Kontrollkästchen, mit der Ausnahme, dass die `:indeterminate`-Pseudoklasse niemals übereinstimmt.

    > [!WARNING]
    > Dieses Attribut ist noch experimentell und hat begrenzte Browser-Unterstützung. Das Attribut wird in nicht unterstützten Browsern ignoriert.

## Verwendung von Kontrollkästcheneingaben

Wir haben bereits die grundlegendste Verwendung von Kontrollkästchen oben behandelt. Schauen wir uns nun die anderen häufigen Kontrollkästchen bezogenen Funktionen und Techniken an, die Sie benötigen werden.

### Umgang mit mehreren Kontrollkästchen

Das obige Beispiel enthielt nur ein Kontrollkästchen; in realen Situationen werden Sie wahrscheinlich auf mehrere Kontrollkästchen stoßen. Wenn sie komplett unabhängig sind, können Sie sie einfach alle separat behandeln, wie oben gezeigt. Wenn sie jedoch alle zusammenhängen, sind die Dinge nicht ganz so einfach.

Zum Beispiel beinhalten wir im folgenden Demo mehrere Kontrollkästchen, um dem Benutzer die Auswahl seiner Interessen zu ermöglichen (sehen Sie sich die vollständige Version im Abschnitt [Beispiele](#beispiele) an).

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

In diesem Beispiel werden Sie sehen, dass wir jedem Kontrollkästchen denselben `name` gegeben haben. Wenn beide Kontrollkästchen angehakt sind und das Formular übermittelt wird, erhalten Sie einen String von Namen/Wert-Paaren wie folgt: `interest=coding&interest=music`. Wenn dieser String den Server erreicht, müssen Sie ihn so parsen, dass nicht nur der letzte Wert von `interest`, sondern alle Werte erfasst werden. Eine Technik, die zum Beispiel mit Python verwendet wird, finden Sie unter [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable).

### Kästchen standardmäßig ankreuzen

Um ein Kontrollkästchen standardmäßig anzuhaken, geben Sie ihm das `checked`-Attribut. Sehen Sie das folgende Beispiel:

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

### Schalter als Kontrollkästchen

Das folgende Beispiel zeigt, wie Sie ein Kontrollkästchen so aussehen lassen können, dass es wie ein Ein-/Aus-Schalter handelt.

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
> Während nur einige Browser das Kontrollkästchen als Schalter rendern, ist das Verhalten in allen Browsern gleich.

{{EmbedLiveSample('Switch_as_a_checkbox', 600, 100)}}

### Eine größere Trefffläche für Ihre Kontrollkästchen bereitstellen

In den obigen Beispielen haben Sie vielleicht bemerkt, dass Sie ein Kontrollkästchen durch Klicken auf das zugehörige {{htmlelement("label")}}-Element sowie auf das Kontrollkästchen selbst umschalten können. Dies ist eine wirklich nützliche Eigenschaft von HTML-Formularbeschriftungen, die es erleichtert, die gewünschte Option anzuklicken, insbesondere auf Kleingeräten wie Smartphones.

Dies ist neben der Barrierefreiheit ein weiterer guter Grund, `<label>`-Elemente richtig in Ihren Formularen einzurichten.

### Kontrollkästchen im unbestimmten Zustand

Ein Kontrollkästchen kann in einem **unbestimmten** Zustand sein. Dies wird mithilfe der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate) über JavaScript gesetzt (es kann nicht mithilfe eines HTML-Attributs gesetzt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` auf `true` gesetzt ist, hat das Kontrollkästchen in den meisten Browsern eine horizontale Linie im Kästchen (es sieht ein wenig wie ein Bindestrich oder Minuszeichen aus) anstelle eines Häkchens.

> [!NOTE]
> Dies ist ausschließlich eine visuelle Änderung. Es hat keinen Einfluss darauf, ob der `value` des Kontrollkästchens bei der Formulareinreichung verwendet wird oder nicht. Dies wird durch den `checked`-Zustand entschieden, unabhängig vom `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn ein Kontrollkästchen verfügbar ist, das eine Anzahl von Unteroptionen „besitzt“ (die ebenfalls Kontrollkästchen sind). Wenn alle Unteroptionen angehakt sind, wird das besitzende Kontrollkästchen ebenfalls angehakt, und wenn sie alle nicht angehakt sind, wird das besitzende Kontrollkästchen nicht angehakt. Wenn irgendeine der Unteroptionen einen anderen Zustand als die anderen hat, befindet sich das besitzende Kontrollkästchen im unbestimmten Zustand.

Dies kann im folgenden Beispiel gesehen werden (dank [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel verfolgen wir die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen einer Zutat an- oder abwählen, überprüft eine JavaScript-Funktion die Gesamtzahl der angehakten Zutaten:

- Wenn keine angehakt ist, wird das Kontrollkästchen des Rezeptnamens auf nicht angehakt gesetzt.
- Wenn eine oder zwei angehakt sind, wird das Kontrollkästchen des Rezeptnamens auf `indeterminate` gesetzt.
- Wenn alle drei angehakt sind, wird das Kontrollkästchen des Rezeptnamens auf `checked` gesetzt.

In diesem Fall wird der `indeterminate`-Zustand verwendet, um anzugeben, dass das Sammeln der Zutaten begonnen hat, das Rezept jedoch noch nicht vollständig ist.

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

Kontrollkästchen unterstützen [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) (angeboten für alle {{HTMLElement("input")}}s). Die meisten `ValidityState`s werden jedoch immer `false` sein. Wenn das Kontrollkästchen das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber nicht angehakt ist, wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des "mehrfachen Kontrollkästchen"-Beispiels, das wir oben gesehen haben — es hat mehr Standardoptionen plus ein "anderes" Kontrollkästchen, das bei Aktivierung ein Textfeld erscheinen lässt, um einen Wert für die "andere" Option einzugeben. Dies wird mit einem kurzen JavaScript-Block erreicht. Das Beispiel beinhaltet implizite Labels, wobei das `<input>` direkt innerhalb des `<label>` ist. Das Texteingabefeld, ohne sichtbares Label, beinhaltet das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, welches seinen zugänglichen Namen bereitstellt. Dieses Beispiel beinhaltet auch einige CSS zur Verbesserung der Gestaltung.

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

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, mit denen Sie Kontrollkästchen basierend auf ihrem aktuellen Zustand stylen können
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML DOM API, die das `<input>`-Element implementiert
