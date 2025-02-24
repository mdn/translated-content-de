---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{htmlelement("input")}} Elemente des Typs **`checkbox`** werden standardmäßig als Kästchen gerendert, die beim Aktivieren angekreuzt werden, ähnlich wie Sie es auf einem offiziellen Regierungsformular sehen könnten. Das genaue Aussehen hängt von der Konfiguration des Betriebssystems ab, auf dem der Browser läuft. Im Allgemeinen ist dies ein Quadrat, kann aber abgerundete Ecken haben. Ein Kontrollkästchen ermöglicht es Ihnen, einzelne Werte zur Übermittlung in einem Formular auszuwählen (oder nicht).

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

> **Note:** [Radio-Buttons](/de/docs/Web/HTML/Element/input/radio) sind ähnlich wie Kontrollkästchen, jedoch mit einem wichtigen Unterschied — [gleichnamige Radio-Buttons](/de/docs/Web/HTML/Element/input/radio#defining_a_radio_group) sind zu einer Gruppe zusammengefasst, in der jeweils nur ein Radio-Button ausgewählt werden kann, während Kontrollkästchen es ermöglichen, einzelne Werte ein- und auszuschalten. Wenn mehrere gleichnamige Steuerungen vorhanden sind, kann mit Radio-Buttons einer von ihnen ausgewählt werden, während Kontrollkästchen mehrere Werte ausgewählt lassen.

## Wert

Ein String, der den Wert des Kontrollkästchens repräsentiert. Dieser wird nicht clientseitig angezeigt, aber auf dem Server ist dies der `value`, der mit dem `name` des Kontrollkästchens an die Daten übergeben wird. Nehmen Sie folgendes Beispiel:

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

Wenn das `value`-Attribut weggelassen wird, ist der Standardwert für das Kontrollkästchen `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn ein Kontrollkästchen beim Übermitteln seines Formulars nicht markiert ist, werden weder der Name noch der Wert an den Server übermittelt. Es gibt keine reine HTML-Methode, um den nicht ausgewählten Zustand eines Kontrollkästchens darzustellen (z.B. `value=unchecked`). Wenn Sie einen Standardwert für das Kontrollkästchen übermitteln möchten, wenn es nicht ausgewählt ist, könnten Sie JavaScript verwenden, um innerhalb des Formulars ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} mit einem Wert zu erstellen, der einen nicht ausgewählten Zustand anzeigt.

## Zusätzliche Attribute

Zusätzlich zu den [gemeinsamen Attributen](/de/docs/Web/HTML/Element/input#attributes), die von allen {{HTMLElement("input")}} Elementen geteilt werden, unterstützen `checkbox`-Eingaben die folgenden Attribute.

- `checked`

  - : Ein {{Glossary("Boolean/HTML", "boolean")}} Attribut, das angibt, ob dieses Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn der Zustand des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)'s `checked` IDL-Attribut wird aktualisiert.)
    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird der Wert eines Kontrollkästchens nur in die übermittelten Daten aufgenommen, wenn das Kontrollkästchen derzeit `checked` ist. Wenn es das ist, wird der Wert des `value`-Attributs des Kontrollkästchens als Wert des Eingabefeldes berichtet, oder `on`, wenn kein `value` gesetzt ist.
    > Anders als andere Browser speichert Firefox standardmäßig [den dynamischen überprüften Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladezeiten hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) Attribut, um diese Funktion zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; es hat jedoch einen speziellen Zweck für Eingaben vom Typ `checkbox`: Wenn ein Formular übermittelt wird, werden nur Kontrollkästchen, die derzeit überprüft sind, an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn der `value` nicht anders angegeben ist, ist er standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

## Verwendung von Kontrollkästchen-Eingaben

Wir haben oben die grundlegendste Verwendung von Kontrollkästchen behandelt. Lassen Sie uns nun die anderen gebräuchlichen mit Kontrollkästchen zusammenhängenden Funktionen und Techniken betrachten, die Sie benötigen.

### Umgang mit mehreren Kontrollkästchen

Das Beispiel, das wir oben gesehen haben, enthielt nur ein Kontrollkästchen; in realen Situationen werden Sie wahrscheinlich auf mehrere Kontrollkästchen stoßen. Wenn sie völlig unabhängig voneinander sind, können Sie einfach mit jedem separat umgehen, wie oben gezeigt. Wenn sie jedoch alle zusammenhängen, sind die Dinge nicht ganz so einfach.

Zum Beispiel beinhalten wir im folgenden Beispiel mehrere Kontrollkästchen, um dem Benutzer zu ermöglichen, seine Interessen auszuwählen (siehe die vollständige Version im [Beispiele](#beispiele) Abschnitt).

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

In diesem Beispiel sehen Sie, dass wir jedem Kontrollkästchen denselben `name` gegeben haben. Wenn beide Kontrollkästchen markiert sind und dann das Formular übermittelt wird, erhalten Sie einen String von Name/Wert-Paaren, der folgendermaßen übermittelt wird: `interest=coding&interest=music`. Wenn dieser String den Server erreicht, müssen Sie ihn anders als in einem assoziativen Array analysieren, sodass alle Werte und nicht nur der letzte Wert von `interest` erfasst werden. Für eine Technik, die mit Python verwendet wird, siehe [Mehrere Kontrollkästchen mit einer einzelnen Serverseitigen Variablen behandeln](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable), zum Beispiel.

### Kontrollkästchen standardmäßig markieren

Um ein Kontrollkästchen standardmäßig markiert zu machen, geben Sie ihm das `checked` Attribut. Siehe das folgende Beispiel:

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

### Eine größere Trefferfläche für Ihre Kontrollkästchen bereitstellen

In den obigen Beispielen haben Sie vielleicht bemerkt, dass Sie ein Kontrollkästchen umschalten können, indem Sie auf das zugehörige {{htmlelement("label")}} Element klicken, sowie auf das Kontrollkästchen selbst. Dies ist eine wirklich nützliche Funktion von HTML-Formularbeschriftungen, die es einfacher macht, die gewünschte Option auszuwählen, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Über die Barrierefreiheit hinaus gibt es einen weiteren guten Grund, die `<label>` Elemente in Ihren Formularen richtig einzurichten.

### Unbestimmter Zustand von Kontrollkästchen

Ein Kontrollkästchen kann sich in einem **unbestimmten** Zustand befinden. Dies wird mittels der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekteigenschaft [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate) über JavaScript gesetzt (es kann nicht mit einem HTML-Attribut gesetzt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` auf `true` gesetzt ist, hat das Kontrollkästchen in den meisten Browsern eine horizontale Linie im Kasten (es sieht ein bisschen wie ein Bindestrich oder Minuszeichen aus), anstelle eines Häkchens.

> [!NOTE]
> Dies ist rein eine visuelle Änderung. Es hat keinen Einfluss darauf, ob der Wert des Kontrollkästchens in einer Formularübermittlung verwendet wird. Das wird vom `checked` Zustand entschieden, unabhängig vom `indeterminate` Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn ein Kontrollkästchen vorhanden ist, das eine Anzahl von Unteroptionen "besitzt" (die auch Kontrollkästchen sind). Wenn alle Unteroptionen markiert sind, wird auch das besitzende Kontrollkästchen markiert, und wenn sie alle nicht markiert sind, wird das besitzende Kontrollkästchen nicht markiert. Wenn eine oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, befindet sich das besitzende Kontrollkästchen im unbestimmten Zustand.

Dies kann im folgenden Beispiel gesehen werden (danke an [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel verfolgen wir die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen einer Zutat markieren oder deaktivieren, überprüft eine JavaScript-Funktion die Gesamtzahl der markierten Zutaten:

- Wenn keine markiert ist, wird das Kontrollkästchen des Rezeptnamens auf nicht markiert gesetzt.
- Wenn eine oder zwei markiert sind, wird das Kontrollkästchen des Rezeptnamens auf `indeterminate` gesetzt.
- Wenn alle drei markiert sind, wird das Kontrollkästchen des Rezeptnamens auf `checked` gesetzt.

In diesem Fall wird der `indeterminate` Zustand verwendet, um zu sagen, dass das Sammeln der Zutaten begonnen hat, aber das Rezept noch nicht komplett ist.

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

Kontrollkästchen unterstützen [Validierung](/de/docs/Web/HTML/Constraint_validation) (angeboten für alle {{HTMLElement("input")}}s). Allerdings werden die meisten [`ValidityState`](/de/docs/Web/API/ValidityState)s immer `false` sein. Wenn das Kontrollkästchen das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut hat, aber nicht markiert ist, wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des "mehrere Kontrollkästchen"-Beispiels, das wir oben gesehen haben: Es hat mehr Standardoptionen plus ein "anderes" Kontrollkästchen, das, wenn es markiert ist, ein Textfeld erscheinen lässt, um einen Wert für die "andere" Option einzugeben. Dies wird mit einem kurzen JavaScript-Block erreicht. Das Beispiel enthält implizite Labels, mit dem `<input>` direkt innerhalb des `<label>`. Die Texteingabe, ohne sichtbares Label, enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut, das seinen zugänglichen Namen bereitstellt. Dieses Beispiel enthält auch etwas CSS zur Verbesserung der Gestaltung.

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
      <td><code><a href="#checked">checked</a></code></td>
    </tr>
    <tr>
      <td><strong>IDL Attribute</strong></td>
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

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, mit denen Sie Kontrollkästchen basierend auf ihrem aktuellen Zustand stylen können
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML DOM API, die das `<input>`-Element implementiert
