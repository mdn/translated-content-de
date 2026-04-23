---
title: '`<input type="checkbox">` HTML-Attributwert'
short-title: <input type="checkbox">
slug: Web/HTML/Reference/Elements/input/checkbox
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{htmlelement("input")}}-Elemente vom Typ **`checkbox`** werden standardmäßig als Kästchen dargestellt, die aktiviert sind (angekreuzt), wie Sie sie möglicherweise in einem offiziellen Regierungsformular sehen. Das genaue Aussehen hängt von der Konfiguration des Betriebssystems ab, unter dem der Browser läuft. Allgemein ist dies ein Quadrat, aber es kann abgerundete Ecken haben. Eine Checkbox ermöglicht es Ihnen, einzelne Werte zur Übermittlung in einem Formular auszuwählen (oder nicht).

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
> [Radiobuttons](/de/docs/Web/HTML/Reference/Elements/input/radio) sind Checkboxes ähnlich, aber mit einem wichtigen Unterschied — [gleichnamige Radiobuttons](/de/docs/Web/HTML/Reference/Elements/input/radio#defining_a_radio_group) werden in einer Gruppe zusammengefasst, in der jeweils nur ein Radiobutton ausgewählt werden kann, während Checkboxes es erlauben, einzelne Werte ein- und auszuschalten. Wo mehrere gleichnamige Steuerungen existieren, erlauben Radiobuttons, dass eine von ihnen ausgewählt wird, während Checkboxes mehrere Werte zur Auswahl zulassen.

## Wert

Ein String, der den Wert der Checkbox repräsentiert. Dieser wird clientseitig nicht angezeigt, aber auf dem Server ist dies der `value`, der den mit dem `name` der Checkbox übermittelten Daten gegeben wird. Nehmen Sie folgendes Beispiel:

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

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn das Formular abgeschickt wird, ist das Datennamen-/Wertepaar `subscribe=newsletter`.

Falls das `value`-Attribut weggelassen wurde, ist der Standardwert für die Checkbox `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn eine Checkbox nicht markiert ist, wenn ihr Formular abgeschickt wird, werden weder der Name noch der Wert an den Server übermittelt. Es gibt keine rein HTML-basierte Methode, um den nicht markierten Zustand einer Checkbox darzustellen (z. B. `value=unchecked`). Wenn Sie einen Standardwert für die Checkbox übermitteln möchten, wenn sie nicht markiert ist, könnten Sie JavaScript verwenden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} innerhalb des Formulars mit einem Wert, der den nicht markierten Zustand anzeigt, zu erstellen.

## Zusätzliche Attribute

Zusätzlich zu den [allgemeinen Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die alle {{HTMLElement("input")}}-Elemente gemeinsam nutzen, unterstützen `checkbox`-Eingaben folgende Attribute.

- `checked`
  - : Ein {{Glossary("Boolean/HTML", "boolean")}}-Attribut, das angibt, ob diese Checkbox standardmäßig markiert ist (wenn die Seite geladen wird). Es gibt _nicht_ an, ob diese Checkbox derzeit markiert ist: Wenn sich der Zustand der Checkbox ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked`-IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Anders als bei anderen Eingabesteuerungen wird der Wert einer Checkbox nur dann in den übermittelten Daten enthalten, wenn die Checkbox derzeit `checked` ist. Falls ja, wird der Wert des `value`-Attributes der Checkbox als Eingabewert gemeldet, oder `on`, wenn kein `value` gesetzt ist.
    > Anders als andere Browser bewahrt Firefox standardmäßig [den dynamischen markierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg. Verwenden Sie das `autocomplete`-Attribut, um diese Funktion zu steuern.

- `value`
  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s gemeinsam nutzen; es hat jedoch eine spezielle Bedeutung für Eingaben vom Typ `checkbox`: Wenn ein Formular abgeschickt wird, werden nur die derzeit markierten Checkboxes an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributes. Falls der `value` nicht anderweitig angegeben ist, ist er standardmäßig die Zeichenkette `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

- `switch`
  - : Ein {{Glossary("Boolean/HTML", "boolean")}}-Attribut, das nur auf `checkbox`-Eingaben angewendet wird. Wenn vorhanden, zeigt es an, dass die `checkbox` einen Ein/Aus-`Schalter` anstelle einer normalen `checkbox` darstellt. Es verändert das Erscheinungsbild der `checkbox`-Steuerung, aber das zugrunde liegende Verhalten bleibt das gleiche wie bei einer normalen `checkbox`.

    > [!NOTE]
    > Dieses Attribut erlaubt es Benutzeragenten, `switch`-ARIA-Semantik an unterstützende Technologien zu übermitteln — ohne dass Dokumente explizit `role="switch"` spezifizieren müssen. Das Markup und die API ähneln denen von Checkboxes, außer dass die `:indeterminate`-Pseudoklasse nie zutrifft.

    > [!WARNING]
    > Dieses Attribut ist noch experimentell und hat eine begrenzte Browser-Unterstützung. Das Attribut wird auf nicht unterstützten Browsern ignoriert.

## Verwendung von Checkbox-Eingaben

Wir haben bereits die einfachste Nutzung von Checkboxes oben behandelt. Schauen wir uns nun andere häufig vorkommende Checkbox-bezogene Funktionen und Techniken an, die Sie benötigen werden.

### Umgang mit mehreren Checkboxes

Das Beispiel, das wir oben gesehen haben, enthielt nur eine Checkbox; in realen Situationen werden Sie wahrscheinlich auf mehrere Checkboxes stoßen. Wenn sie vollkommen unabhängig voneinander sind, können Sie einfach alle separat behandeln, wie oben gezeigt. Wenn sie jedoch alle miteinander verwandt sind, ist die Situation nicht mehr ganz so einfach.

Zum Beispiel umfassen wir im folgenden Demo mehrere Checkboxes, um dem Benutzer zu ermöglichen, seine Interessen auszuwählen (sehen Sie sich die vollständige Version im Abschnitt [Beispiele](#beispiele) an).

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

In diesem Beispiel sehen Sie, dass wir jeder Checkbox denselben `name` gegeben haben. Wenn beide Checkboxes markiert sind und das Formular dann abgeschickt wird, erhalten Sie eine Zeichenkette von Namen-/Wertepaaren, die so aussieht: `interest=coding&interest=music`. Wenn diese Zeichenkette den Server erreicht, müssen Sie sie anders als ein assoziatives Array analysieren, sodass alle Werte, nicht nur der letzte Wert, von `interest` erfasst werden. Eine Technik, die mit Python verwendet wird, finden Sie zum Beispiel unter [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable).

### Voreingestellte Markierung von Checkboxes

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

### Schalter als Checkbox

Das folgende Beispiel zeigt, wie man eine Checkbox aussehen und sich wie einen Ein-/Ausschalter verhalten lassen kann.

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
> Während nur einige Browser die Checkbox als Schalter darstellen, ist das Verhalten in allen Browsern gleich.

{{EmbedLiveSample('Switch_as_a_checkbox', 600, 100)}}

### Größere Klickfläche für Ihre Checkboxes bereitstellen

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie eine Checkbox durch Anklicken ihres zugehörigen {{htmlelement("label")}}-Elements sowie der Checkbox selbst umschalten können. Dies ist eine wirklich nützliche Funktion von HTML-Formularlabels, die es einfacher macht, die gewünschte Option anzuklicken, besonders auf kleinen Bildschirmen wie Smartphones.

Neben der Zugänglichkeit ist dies ein weiterer guter Grund, `<label>`-Elemente ordnungsgemäß in Ihren Formularen einzurichten.

### Indeterminierter Zustand von Checkboxes

Eine Checkbox kann in einem **indeterminierten** Zustand sein. Dies wird mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate) über JavaScript gesetzt (sie kann nicht mittels eines HTML-Attributs gesetzt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat die Checkbox eine horizontale Linie im Kasten (sie sieht in den meisten Browsern etwas aus wie ein Bindestrich oder Minuszeichen) anstelle eines Häkchens.

> [!NOTE]
> Dies ist nur eine visuelle Änderung. Es hat keinen Einfluss darauf, ob der `value` der Checkbox in einer Formularübermittlung verwendet wird. Dies wird durch den `checked`-Zustand entschieden, unabhängig vom `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn eine Checkbox verfügbar ist, die eine Anzahl von Unteroptionen "besitzt" (die ebenfalls Checkboxes sind). Wenn alle Unteroptionen markiert sind, ist die besitzende Checkbox ebenfalls markiert, und wenn sie alle nicht markiert sind, ist die besitzende Checkbox nicht markiert. Wenn eine oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, ist die besitzende Checkbox im indeterminierten Zustand.

Dies kann im folgenden Beispiel gesehen werden (Dank an [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel verfolgen wir die Zutaten, die wir für ein Rezept sammeln. Wenn Sie ein oder mehrere Checkoxes für Zutaten markieren oder abwählen, überprüft eine JavaScript-Funktion die Gesamtzahl der markierten Zutaten:

- Wenn keine markiert sind, ist die Checkbox des Rezeptnamens nicht markiert.
- Wenn ein oder zwei markiert sind, wird die Checkbox des Rezeptnamens auf `indeterminate` gesetzt.
- Wenn alle drei markiert sind, wird die Checkbox des Rezeptnamens auf `checked` gesetzt.

In diesem Fall wird der `indeterminate`-Zustand verwendet, um zu signalisieren, dass das Sammeln der Zutaten begonnen hat, das Rezept jedoch noch nicht vollständig ist.

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

Checkboxes unterstützen [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) (die allen {{HTMLElement("input")}}s angeboten wird). Die meisten [`ValidityState`](/de/docs/Web/API/ValidityState)s werden jedoch immer `false` sein. Wenn die Checkbox das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber nicht markiert ist, ist [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true`.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des "mehrere Checkboxes"-Beispiels, das wir oben gesehen haben — es hat mehr Standardoptionen plus eine "andere" Checkbox, die, wenn sie markiert wird, ein Textfeld erscheinen lässt, um einen Wert für die "andere" Option einzugeben. Dies wird mit einem kurzen JavaScript-Block erreicht. Das Beispiel beinhaltet implizite Labels, mit dem `<input>` direkt im `<label>`. Das Texteingabefeld, ohne sichtbares Label, enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, das den zugänglichen Namen bereitstellt. Dieses Beispiel enthält auch etwas CSS zur Verbesserung des Stils.

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

## Technische Übersicht

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
      <td><strong>Implizite ARIA Rolle</strong></td>
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
