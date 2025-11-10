---
title: <input type="checkbox">
slug: Web/HTML/Reference/Elements/input/checkbox
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{htmlelement("input")}}-Elemente des Typs **`checkbox`** werden standardmäßig als Kästchen dargestellt, die markiert (angehakt) werden, wenn sie aktiviert sind, ähnlich wie Sie es in einem offiziellen Formular einer Regierungsbehörde sehen könnten. Das genaue Erscheinungsbild hängt von der Betriebssystemkonfiguration ab, unter der der Browser ausgeführt wird. In der Regel ist dies ein Quadrat, aber es kann abgerundete Ecken haben. Eine Checkbox ermöglicht es Ihnen, einzelne Werte zur Übermittlung in einem Formular auszuwählen (oder nicht).

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
> [Optionsfelder](/de/docs/Web/HTML/Reference/Elements/input/radio) ähneln Checkboxen, haben jedoch einen wichtigen Unterschied — [gleichnamige Optionsfelder](/de/docs/Web/HTML/Reference/Elements/input/radio#defining_a_radio_group) sind in einer Gruppe zusammengefasst, in der jeweils nur ein Optionsfeld ausgewählt werden kann, während Checkboxen es erlauben, einzelne Werte ein- und auszuschalten. Wo mehrere gleichnamige Steuerungen existieren, erlauben Optionsfelder eine Auswahl, während Checkboxen mehrere Werte ausgewählt werden können.

## Wert

Ein String, der den Wert der Checkbox darstellt. Dieser wird nicht auf der Clientseite angezeigt, sondern auf dem Server ist dies der `value`, der für die mit dem `name` der Checkbox übermittelten Daten angegeben wird. Nehmen Sie folgendes Beispiel:

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

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn das Formular übermittelt wird, wird das Datenpaar Name/Wert `subscribe=newsletter` sein.

Wenn das `value`-Attribut ausgelassen wird, beträgt der Standardwert für die Checkbox `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn eine Checkbox beim Senden ihres Formulars nicht markiert ist, weder der Name noch der Wert an den Server übermittelt. Es gibt keine reine HTML-Methode zur Darstellung des nicht markierten Zustands einer Checkbox (z.B. `value=unchecked`). Wenn Sie einen Standardwert für die Checkbox übermitteln möchten, wenn diese nicht markiert ist, könnten Sie JavaScript verwenden, um innerhalb des Formulars ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} mit einem Wert zu erstellen, der einen nicht markierten Zustand anzeigt.

## Zusätzliche Attribute

Zusätzlich zu den [allgemeinen Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `checkbox`-Eingaben die folgenden Attribute.

- `checked`
  - : Ein {{Glossary("Boolean/HTML", "boolesches")}} Attribut, das angibt, ob diese Checkbox standardmäßig (beim Laden der Seite) markiert ist. Es zeigt _nicht_ an, ob diese Checkbox derzeit markiert ist: Wenn sich der Zustand der Checkbox ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked`-IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird nur der Wert einer Checkbox in die übermittelten Daten einbezogen, wenn die Checkbox derzeit `checked` ist. Ist dies der Fall, wird der Wert des `value`-Attributs der Checkbox als der Wert der Eingabe berichtet, oder `on`, wenn kein `value` festgelegt ist.
    > Im Gegensatz zu anderen Browsern speichert Firefox standardmäßig [den dynamischen markierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladungen hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`
  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}} gemeinsam haben; jedoch dient es einem speziellen Zweck bei Eingaben des Typs `checkbox`: Wenn ein Formular übermittelt wird, werden nur die Checkboxen, die derzeit markiert sind, an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn das `value` nicht anderweitig angegeben ist, ist es standardmäßig der String `on`. Dies wird im Abschnitt [Value](#wert) oben demonstriert.

## Verwendung von Checkbox-Eingaben

Wir haben bereits die grundlegendste Nutzung von Checkboxen oben behandelt. Schauen wir uns nun die anderen häufig checkbox-bezogenen Funktionen und Techniken an, die Sie benötigen.

### Umgang mit mehreren Checkboxen

Das oben gezeigte Beispiel enthielt nur eine Checkbox; in realen Situationen werden Sie wahrscheinlich auf mehrere Checkboxen stoßen. Wenn sie völlig unabhängig sind, können Sie einfach mit ihnen allen separat umgehen, wie oben gezeigt. Wenn sie jedoch alle zusammenhängen, sind die Dinge nicht ganz so einfach.

Zum Beispiel enthalten wir im folgenden Demo mehrere Checkboxen, um dem Benutzer zu ermöglichen, seine Interessen auszuwählen (siehe die vollständige Version im Abschnitt [Beispiele](#beispiele)).

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

In diesem Beispiel werden Sie sehen, dass wir jeder Checkbox denselben `name` gegeben haben. Wenn beide Checkboxen markiert sind und dann das Formular übermittelt wird, erhalten Sie einen String von Name/Wert-Paaren, die so übermittelt werden: `interest=coding&interest=music`. Wenn dieser String den Server erreicht, müssen Sie ihn anders als ein assoziatives Array parsen, sodass alle Werte, nicht nur der letzte Wert, von `interest` erfasst werden. Zu einer Technik, die mit Python verwendet wird, siehe [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable), zum Beispiel.

### Markieren von Kästchen standardmäßig

Um eine Checkbox standardmäßig markiert zu machen, geben Sie ihr das `checked`-Attribut. Siehe das folgende Beispiel:

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

### Bereitstellung einer größeren Trefferfläche für Ihre Checkboxen

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie eine Checkbox durch Klicken auf das zugehörige {{htmlelement("label")}}-Element sowie auf die Checkbox selbst umschalten können. Dies ist eine wirklich nützliche Funktion von HTML-Formular-Labels, die es einfacher macht, die gewünschte Option zu klicken, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Über die Barrierefreiheit hinaus ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen korrekt einzurichten.

### Indeterminierten Zustand von Checkboxen

Eine Checkbox kann sich in einem **indeterminierten** Zustand befinden. Dies wird über die `indeterminate`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts mit JavaScript gesetzt (es kann nicht mit einem HTML-Attribut eingestellt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat die Checkbox in den meisten Browsern eine horizontale Linie im Kasten (sie sieht etwas wie ein Bindestrich oder Minuszeichen aus) anstelle eines Häkchens.

> [!NOTE]
> Dies ist rein eine visuelle Änderung. Es hat keinen Einfluss darauf, ob der `value` der Checkbox in einer Formularübermittlung verwendet wird. Dies wird durch den `checked`-Zustand entschieden, unabhängig vom `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn eine Checkbox vorhanden ist, die eine Anzahl von Unteroptionen (die auch Checkboxen sind) „besitzt“. Wenn alle Unteroptionen markiert sind, ist die übergeordnete Checkbox ebenfalls markiert, und wenn sie alle nicht markiert sind, ist die übergeordnete Checkbox nicht markiert. Wenn eine der Unteroptionen einen anderen Zustand als die anderen hat, befindet sich die übergeordnete Checkbox im indeterminierten Zustand.

Dies kann im folgenden Beispiel gesehen werden (Dank an [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel verfolgen wir die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen einer Zutat an- oder abwählen, überprüft eine JavaScript-Funktion die Gesamtzahl der markierten Zutaten:

- Wenn keine markiert sind, wird das Kontrollkästchen des Rezeptnamens auf nicht markiert gesetzt.
- Wenn eine oder zwei markiert sind, wird das Kontrollkästchen des Rezeptnamens auf `indeterminate` gesetzt.
- Wenn alle drei markiert sind, wird das Kontrollkästchen des Rezeptnamens auf `checked` gesetzt.

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

Checkboxen unterstützen [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) (die allen {{HTMLElement("input")}}s angeboten wird). Jedoch werden die meisten [`ValidityState`](/de/docs/Web/API/ValidityState) immer `false` sein. Wenn die Checkbox das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber nicht markiert ist, dann wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des oben gesehenen "mehrere Checkboxen"-Beispiels — es enthält mehr Standardoptionen plus eine "andere"-Checkbox, die beim Markieren ein Textfeld erscheinen lässt, um einen Wert für die "andere" Option einzugeben. Dies wird mit einem kurzen JavaScript-Block erreicht. Das Beispiel enthält implizite Labels, mit dem `<input>` direkt innerhalb des `<label>`. Das Texteingabefeld, ohne sichtbares Label, enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, das den zugänglichen Namen bereitstellt. Dieses Beispiel enthält auch etwas CSS zur Verbesserung der Gestaltung.

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
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, mit denen Sie Checkboxen basierend auf ihrem aktuellen Zustand stylen können
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML-DOM API, das das `<input>`-Element implementiert
