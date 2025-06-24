---
title: <input type="checkbox">
slug: Web/HTML/Reference/Elements/input/checkbox
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`checkbox`** werden standardmäßig als Kästchen dargestellt, die bei Aktivierung angekreuzt (markiert) werden, ähnlich wie man es in einem offiziellen Regierungsformular sehen könnte. Das genaue Erscheinungsbild hängt von der Betriebssystemkonfiguration ab, unter der der Browser läuft. Im Allgemeinen ist es ein Quadrat, es kann jedoch abgerundete Ecken haben. Ein Kontrollkästchen ermöglicht es, einzelne Werte zur Übermittlung in einem Formular auszuwählen (oder nicht).

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

> [!NOTE] > [Optionsfelder](/de/docs/Web/HTML/Reference/Elements/input/radio) ähneln Kontrollkästchen, haben jedoch einen wichtigen Unterschied — [gleichnamige Optionsfelder](/de/docs/Web/HTML/Reference/Elements/input/radio#defining_a_radio_group) sind in einer Gruppe zusammengefasst, in der jeweils nur ein Optionsfeld ausgewählt werden kann, während Kontrollkästchen das Ein- und Ausschalten einzelner Werte ermöglichen. Wenn mehrere gleichnamige Steuerungen vorhanden sind, kann bei Optionsfeldern eines aus allen ausgewählt werden, während bei Kontrollkästchen mehrere Werte ausgewählt werden können.

## Wert

Ein String, der den Wert des Kontrollkästchens darstellt. Dieser wird auf der Client-Seite nicht angezeigt, aber auf dem Server ist dies der `value`, der den mit dem `name` des Kontrollkästchens übermittelten Daten zugewiesen wird. Schauen Sie sich folgendes Beispiel an:

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

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn das Formular übermittelt wird, ist das Daten-Namens/Wert-Paar `subscribe=newsletter`.

Wenn das `value`-Attribut weggelassen wurde, ist der Standardwert für das Kontrollkästchen `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn ein Kontrollkästchen beim Absenden seines Formulars nicht markiert ist, werden weder der Name noch der Wert an den Server übermittelt. Es gibt keine HTML-eigene Methode, den nicht markierten Zustand eines Kontrollkästchens darzustellen (z.B. `value=unchecked`). Wenn Sie einen Standardwert für das Kontrollkästchen übermitteln möchten, wenn es nicht markiert ist, könnten Sie JavaScript verwenden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} innerhalb des Formulars zu erstellen, mit einem Wert, der einen nicht markierten Zustand anzeigt.

## Zusätzliche Attribute

Zusätzlich zu den [allgemeinen Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `checkbox`-Eingaben die folgenden Attribute.

- `checked`

  - : Ein {{Glossary("Boolean/HTML", "boolesches")}} Attribut, das angibt, ob dieses Kontrollkästchen standardmäßig markiert ist (wenn die Seite geladen wird). Es gibt _nicht_ an, ob dieses Kontrollkästchen derzeit markiert ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked` IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird der Wert eines Kontrollkästchens nur in den übermittelten Daten aufgenommen, wenn das Kontrollkästchen derzeit `checked` ist. Ist dies der Fall, wird der Wert des `value`-Attributs des Kontrollkästchens als Eingabewert gemeldet oder `on`, wenn kein `value` festgelegt ist.
    > Im Gegensatz zu anderen Browsern behält Firefox standardmäßig den [dynamischen überprüften Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg bei. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`
  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; es hat jedoch eine spezielle Bedeutung für Eingaben vom Typ `checkbox`: Wenn ein Formular übermittelt wird, werden nur die Kontrollkästchen, die derzeit markiert sind, an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Falls das `value` nicht anders spezifiziert ist, ist es standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

## Verwendung von Kontrollkästchen-Eingaben

Wir haben bereits die grundlegendste Verwendung von Kontrollkästchen oben behandelt. Schauen wir uns nun die anderen gängigen, mit Kontrollkästchen verbundenen Funktionen und Techniken an, die Sie benötigen werden.

### Behandlung mehrerer Kontrollkästchen

Das Beispiel, das wir oben gesehen haben, enthielt nur ein Kontrollkästchen; in realen Situationen werden Sie wahrscheinlich auf mehrere Kontrollkästchen stoßen. Wenn sie völlig unabhängig sind, können Sie sie separat behandeln, wie oben gezeigt. Wenn sie jedoch alle zusammenhängen, ist es nicht ganz so einfach.

In der folgenden Demo fügen wir beispielsweise mehrere Kontrollkästchen ein, die es dem Benutzer ermöglichen, seine Interessen zu wählen (siehe die vollständige Version im Abschnitt [Beispiele](#beispiele)).

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

In diesem Beispiel werden Sie sehen, dass wir jedem Kontrollkästchen denselben `name` gegeben haben. Wenn beide Kontrollkästchen markiert sind und dann das Formular übermittelt wird, erhalten Sie einen String von Namens/Wert-Paaren, der so aussieht: `interest=coding&interest=music`. Wenn dieser String den Server erreicht, müssen Sie ihn anders als ein assoziatives Array analysieren, damit alle Werte, nicht nur der letzte Wert von `interest`, erfasst werden. Eine Technik, die mit Python verwendet wird, finden Sie unter [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable).

### Kontrollkästchen standardmäßig ankreuzen

Um ein Kontrollkästchen standardmäßig anzukreuzen, geben Sie ihm das `checked`-Attribut. Sehen Sie sich das folgende Beispiel an:

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

### Einen größeren Trefferbereich für Ihre Kontrollkästchen bereitstellen

In den obigen Beispielen haben Sie vielleicht bemerkt, dass Sie ein Kontrollkästchen umschalten können, indem Sie auf sein zugehöriges {{htmlelement("label")}}-Element sowie auf das Kontrollkästchen selbst klicken. Dies ist eine wirklich nützliche Funktion von HTML-Formularbeschriftungen, die es einfacher macht, die gewünschte Option zu klicken, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Neben der Zugänglichkeit ist dies ein weiterer guter Grund, `label`-Elemente in Ihren Formularen ordnungsgemäß einzurichten.

### Kontrollkästchen im unbestimmten Zustand

Ein Kontrollkästchen kann in einem **unbestimmten** Zustand sein. Dies wird durch das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt mit der [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)-Eigenschaft über JavaScript gesetzt (es kann nicht mit einem HTML-Attribut gesetzt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat das Kontrollkästchen in den meisten Browsern eine horizontale Linie in der Box (es sieht ein wenig wie ein Bindestrich oder Minuszeichen aus), anstelle eines Häkchens/Hakens.

> [!NOTE]
> Dies ist rein eine visuelle Änderung. Es hat keinen Einfluss darauf, ob der `value` des Kontrollkästchens bei einer Formularübermittlung verwendet wird. Dies wird durch den Zustand `checked` entschieden, unabhängig vom Zustand `indeterminate`.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn ein Kontrollkästchen vorhanden ist, das „Unteroptionen“ (die ebenfalls Kontrollkästchen sind) „besitzt“. Wenn alle Unteroptionen markiert sind, ist auch das besitzende Kontrollkästchen markiert, und wenn sie alle nicht markiert sind, ist das besitzende Kontrollkästchen nicht markiert. Wenn eines oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, befindet sich das besitzende Kontrollkästchen im unbestimmten Zustand.

Dies kann im folgenden Beispiel gesehen werden (danke an [CSS-Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel verfolgen wir die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen einer Zutat aktivieren oder deaktivieren, überprüft eine JavaScript-Funktion die Gesamtzahl der markierten Zutaten:

- Wenn keine markiert sind, wird das Kontrollkästchen des Rezeptnamens auf nicht markiert gesetzt.
- Wenn ein oder zwei markiert sind, wird das Kontrollkästchen des Rezeptnamens auf `indeterminate` gesetzt.
- Wenn alle drei markiert sind, wird das Kontrollkästchen des Rezeptnamens auf `checked` gesetzt.

In diesem Fall wird der Zustand `indeterminate` verwendet, um zu sagen, dass das Sammeln der Zutaten begonnen hat, das Rezept jedoch noch nicht komplett ist.

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

Kontrollkästchen unterstützen die [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) (angeboten für alle {{HTMLElement("input")}}s). Die meisten [`ValidityState`](/de/docs/Web/API/ValidityState)s werden jedoch immer `false` sein. Wenn das Kontrollkästchen das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber nicht markiert ist, dann wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des oben gesehenen Beispiels mit "mehrere Kontrollkästchen" — es hat mehr Standardoptionen sowie ein "anderes" Kontrollkästchen, das, wenn es markiert ist, ein Textfeld erscheinen lässt, um einen Wert für die "andere" Option einzugeben. Dies wird mit einem kurzen JavaScript-Block erreicht. Das Beispiel enthält implizite Labels, mit dem `<input>` direkt im `<label>`. Das Texteingabefeld, ohne sichtbares Label, enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, das seinen zugänglichen Namen bereitstellt. Dieses Beispiel enthält auch ein wenig CSS, um die Gestaltung zu verbessern.

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
      <td><strong>Events</strong></td>
      <td>[`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event)</td>
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

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, die es ermöglichen, Kontrollkästchen basierend auf ihrem aktuellen Zustand zu gestalten
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML DOM-API, die das `<input>`-Element implementiert
