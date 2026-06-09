---
title: '`<input type="checkbox">` HTML-Attributwert'
short-title: <input type="checkbox">
slug: Web/HTML/Reference/Elements/input/checkbox
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{htmlelement("input")}}-Elemente vom Typ **`checkbox`** werden standardmäßig als Kästchen dargestellt, die bei Aktivierung angekreuzt (abgehakt) werden, ähnlich wie Sie es in einem offiziellen Regierungsformular finden könnten. Das genaue Erscheinungsbild hängt von der Konfiguration des Betriebssystems ab, unter dem der Browser ausgeführt wird. Im Allgemeinen handelt es sich um ein Quadrat, das aber abgerundete Ecken haben kann. Ein Kontrollkästchen erlaubt es Ihnen, einzelne Werte zur Übermittlung in einem Formular auszuwählen (oder nicht).

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
> [Radiobuttons](/de/docs/Web/HTML/Reference/Elements/input/radio) sind ähnlich wie Kontrollkästchen, aber mit einem wichtigen Unterschied — [gleichnamige Radiobuttons](/de/docs/Web/HTML/Reference/Elements/input/radio#defining_a_radio_group) sind in einem Satz gruppiert, in dem nur ein Radiobutton gleichzeitig ausgewählt werden kann, während Kontrollkästchen es erlauben, einzelne Werte an- und auszuschalten. Wo mehrere gleiche Steuerungen existieren, erlauben Radiobuttons die Auswahl eines aus allen, während Kontrollkästchen mehrere Werte ausgewählt werden können.

## Wert

Ein String, der den Wert des Kontrollkästchens darstellt. Dieser wird clientseitig nicht angezeigt, aber auf dem Server ist dies der `value`, der den mit dem `name` des Kontrollkästchens eingereichten Daten zugewiesen wird. Nehmen Sie das folgende Beispiel:

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

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn das Formular eingereicht wird, ist das Datenname/Wert-Paar `subscribe=newsletter`.

Wenn das `value`-Attribut weggelassen wurde, ist der Standardwert für das Kontrollkästchen `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn ein Kontrollkästchen beim Einreichen seines Formulars nicht angekreuzt ist, wird weder der Name noch der Wert an den Server übermittelt. Es gibt keine HTML-exklusive Methode, um den nicht angekreuzten Zustand eines Kontrollkästchens darzustellen (z. B. `value=unchecked`). Wenn Sie einen Standardwert für das Kontrollkästchen übermitteln möchten, wenn es nicht angekreuzt ist, könnten Sie JavaScript verwenden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} innerhalb des Formulars mit einem Wert zu erstellen, der einen nicht angekreuzten Zustand angibt.

## Zusätzliche Attribute

Zusätzlich zu den [allgemeinen Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `checkbox`-Eingaben die folgenden Attribute.

- `checked`
  - : Ein {{Glossary("Boolean/HTML", "boolean")}} Attribut, das angibt, ob dieses Kontrollkästchen standardmäßig (beim Laden der Seite) angekreuzt ist. Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit angekreuzt ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked` IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird der Wert eines Kontrollkästchens nur in die übermittelten Daten aufgenommen, wenn das Kontrollkästchen derzeit `checked` ist. Wenn das der Fall ist, wird der Wert des `value`-Attributs des Kontrollkästchens als der Wert der Eingabe gemeldet, oder `on`, wenn kein `value` festgelegt ist.
    > Anders als in anderen Browsern speichert Firefox standardmäßig [den dynamischen checked Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`
  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}-Elemente gemeinsam haben; es erfüllt jedoch einen speziellen Zweck für Eingaben des Typs `checkbox`: Wenn ein Formular eingereicht wird, werden nur Kontrollkästchen, die derzeit angekreuzt sind, an den Server übermittelt und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn der `value` nicht anderweitig angegeben ist, ist er standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

- `switch`
  - : Ein {{Glossary("Boolean/HTML", "boolean")}} Attribut, das nur für `checkbox`-Eingaben gilt. Wenn vorhanden, zeigt es an, dass das `checkbox` einen Ein/Aus `switch` darstellt, anstatt eines normalen `checkbox`. Es ändert das Erscheinungsbild der `checkbox`-Steuerung, aber das zugrunde liegende Verhalten bleibt das gleiche wie das eines normalen `checkbox`.

    > [!NOTE]
    > Dieses Attribut erlaubt es Benutzeragenten, ARIA-Semantiken für `switch` an unterstützende Technologien weiterzugeben — ohne dass Dokumente explizit `role="switch"` angeben müssen. Das Markup und die API sind den Kontrollkästchen ähnlich, außer dass die `:indeterminate` Pseudo-Klasse niemals zutrifft.

    > [!WARNING]
    > Dieses Attribut ist noch experimentell und wird von begrenzten Browsern unterstützt. Auf nicht unterstützten Browsern wird das Attribut ignoriert.

## Verwendung von checkbox-Eingaben

Wir haben bereits die grundlegendste Verwendung von Kontrollkästchen oben behandelt. Lassen Sie uns nun die anderen gängigen, mit Kontrollkästchen verbundenen Funktionen und Techniken näher betrachten, die Sie benötigen.

### Umgang mit mehreren Kontrollkästchen

Das von uns oben gesehene Beispiel enthielt nur ein Kontrollkästchen; in realen Situationen werden Sie wahrscheinlich auf mehrere Kontrollkästchen stoßen. Wenn sie völlig unabhängig sind, können Sie einfach mit jedem einzeln umgehen, wie oben gezeigt. Wenn sie jedoch alle miteinander verbunden sind, sind die Dinge nicht ganz so einfach.

Zum Beispiel enthält das folgende Demo mehrere Kontrollkästchen, um dem Benutzer die Auswahl seiner Interessen zu ermöglichen (siehe die vollständige Version im Abschnitt [Beispiele](#beispiele)).

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

In diesem Beispiel sehen Sie, dass wir jedem Kontrollkästchen denselben `name` gegeben haben. Wenn beide Kontrollkästchen angekreuzt sind und das Formular dann eingereicht wird, erhalten Sie einen String mit Namen/Wert-Paaren, der so aussieht: `interest=coding&interest=music`. Wenn dieser String den Server erreicht, müssen Sie ihn anders als ein assoziatives Array analysieren, sodass alle Werte und nicht nur der letzte Wert von `interest` erfasst werden. Für eine mit Python verwendete Technik siehe [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable), zum Beispiel.

### Kästchen standardmäßig ankreuzen

Um ein Kontrollkästchen standardmäßig anzukreuzen, geben Sie ihm das `checked`-Attribut. Siehe das folgende Beispiel:

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

Das folgende Beispiel zeigt, wie ein Kontrollkästchen aussieht und wie es sich als Ein/Aus-Schalter verhält.

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
> Obwohl nur einige Browser das Kontrollkästchen als Schalter darstellen, bleibt das Verhalten in allen Browsern das gleiche.

{{EmbedLiveSample('Switch_as_a_checkbox', 600, 100)}}

### Bereitstellung eines größeren Trefferbereichs für Ihre Kontrollkästchen

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie ein Kontrollkästchen aktivieren können, indem Sie auf das zugehörige {{htmlelement("label")}}-Element klicken, genauso wie auf das Kontrollkästchen selbst. Dies ist eine wirklich nützliche Funktion von HTML-Formularbeschriftungen, die es erleichtert, die gewünschte Option anzuklicken, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Über die Barrierefreiheit hinaus ist dies ein weiterer guter Grund, `<label>`-Elemente auf Ihren Formularen ordnungsgemäß einzurichten.

### Unbestimmte Zustandskontrollkästchen

Ein Kontrollkästchen kann sich in einem **unbestimmten** Zustand befinden. Dies wird über das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt und die [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)-Eigenschaft per JavaScript eingestellt (es kann nicht über ein HTML-Attribut festgelegt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat das Kontrollkästchen in den meisten Browsern eine horizontale Linie im Kästchen (es sieht ein wenig aus wie ein Minuszeichen oder Bindestrich) anstelle eines Häkchens.

> [!NOTE]
> Dies ist lediglich eine visuelle Änderung. Es hat keinen Einfluss darauf, ob der `value` des Kontrollkästchens für eine Formularübermittlung verwendet wird. Das wird durch den `checked`-Zustand entschieden, unabhängig vom `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn ein Kontrollkästchen verfügbar ist, das eine Anzahl von Unteroptionen "besitzt" (die ebenfalls Kontrollkästchen sind). Wenn alle Unteroptionen angekreuzt sind, ist das übergeordnete Kontrollkästchen auch angekreuzt, und wenn sie alle nicht angekreuzt sind, ist das übergeordnete Kontrollkästchen nicht angekreuzt. Wenn eine oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, befindet sich das übergeordnete Kontrollkästchen im unbestimmten Zustand.

Dies kann im folgenden Beispiel (dank [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration) gesehen werden. In diesem Beispiel verfolgen wir die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen einer Zutat aktivieren oder deaktivieren, überprüft eine JavaScript-Funktion die Gesamtzahl der angekreuzten Zutaten:

- Wenn keine angekreuzt sind, wird das Kontrollkästchen des Rezeptnamens auf nicht angekreuzt gesetzt.
- Wenn ein oder zwei angekreuzt sind, wird das Kontrollkästchen des Rezeptnamens auf `indeterminate` gesetzt.
- Wenn alle drei angekreuzt sind, wird das Kontrollkästchen des Rezeptnamens auf `checked` gesetzt.

In diesem Fall wird der `indeterminate`-Zustand verwendet, um anzugeben, dass das Sammeln von Zutaten begonnen hat, das Rezept jedoch noch nicht vollständig ist.

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

Kontrollkästchen unterstützen [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) (angeboten für alle {{HTMLElement("input")}}-Elemente). Die meisten [`ValidityState`](/de/docs/Web/API/ValidityState)s werden jedoch immer `false` sein. Wenn das Kontrollkästchen das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber nicht angekreuzt ist, dann wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des "mehrere Kontrollkästchen"-Beispiels, das wir oben gesehen haben — es hat mehr Standardoptionen sowie ein "anderes" Kontrollkästchen, bei dessen Aktivierung ein Textfeld erscheint, um einen Wert für die "andere" Option einzugeben. Dies wird mit einem kurzen Block JavaScript erreicht. Das Beispiel enthält implizite Beschriftungen, wobei das `<input>` direkt innerhalb des `<label>` ist. Das Texteingabefeld, ohne sichtbare Beschriftung, enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, das seinen zugänglichen Namen angibt. Dieses Beispiel enthält auch etwas CSS zur Verbesserung des Stils.

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
        Ein String, der den Wert des Kontrollkästchens darstellt.
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

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, die es Ihnen ermöglichen, Kontrollkästchen basierend auf ihrem aktuellen Zustand zu stylen
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML-DOM-API, die das `<input>`-Element implementiert
