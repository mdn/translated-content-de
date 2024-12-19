---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`checkbox`** werden standardmäßig als Kästchen dargestellt, die aktiviert (angehakt) sind, wenn sie aktiviert werden, ähnlich wie Sie es in einem offiziellen Regierungsformular sehen könnten. Das genaue Erscheinungsbild hängt von der Konfiguration des Betriebssystems ab, unter dem der Browser läuft. Im Allgemeinen ist dies ein Quadrat, kann aber abgerundete Ecken haben. Ein Kontrollkästchen erlaubt es Ihnen, einzelne Werte für die Übermittlung in einem Formular auszuwählen (oder nicht).

{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **Note:** [Optionsfelder](/de/docs/Web/HTML/Element/input/radio) sind Kontrollkästchen ähnlich, jedoch mit einem wichtigen Unterschied – [gleichnamige Optionsfelder](/de/docs/Web/HTML/Element/input/radio#defining_a_radio_group) sind zu einem Satz gruppiert, in dem jeweils nur ein Optionsfeld gleichzeitig ausgewählt werden kann, während Kontrollkästchen es erlauben, einzelne Werte ein- und auszuschalten. Wo mehrere gleichnamige Steuerungen existieren, erlauben Optionsfelder, dass eine ausgewählt wird, während Kontrollkästchen es erlauben, mehrere Werte auszuwählen.

## Wert

Ein String, der den Wert des Kontrollkästchens darstellt. Dieser wird nicht auf der Client-Seite angezeigt, sondern auf dem Server ist dies der `value`, der den Daten zugewiesen wird, die mit dem `name` des Kontrollkästchens eingereicht werden. Nehmen Sie das folgende Beispiel:

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

Wenn das `value`-Attribut weggelassen wird, ist der Standardwert für das Kontrollkästchen `on`, sodass die eingereichten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn ein Kontrollkästchen beim Einreichen seines Formulars nicht angehakt ist, wird weder der Name noch der Wert an den Server übermittelt. Es gibt keine HTML-exklusive Methode, um den nicht angehakten Zustand eines Kontrollkästchens darzustellen (z.B. `value=unchecked`). Wenn Sie einen Standardwert für das Kontrollkästchen einreichen möchten, wenn es nicht angehakt ist, könnten Sie JavaScript verwenden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} im Formular zu erstellen, das einen Wert zur Anzeige eines nicht angehakten Zustands enthält.

## Zusätzliche Attribute

Zusätzlich zu den [allgemeinen Attributen](/de/docs/Web/HTML/Element/input#attributes), die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `checkbox`-Eingaben die folgenden Attribute.

- `checked`

  - : Ein {{Glossary("Boolean/HTML", "boolean")}}-Attribut, das anzeigt, ob dieses Kontrollkästchen standardmäßig angehakt ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit angehakt ist: Wenn der Zustand des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked` IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Anders als andere Eingabesteuerungen wird der Wert eines Kontrollkästchens nur in die übermittelten Daten einbezogen, wenn das Kontrollkästchen derzeit `checked` ist. Ist es das, wird der Wert des `value`-Attributs des Kontrollkästchens als Eingabewert angegeben, oder `on`, wenn kein `value` gesetzt ist.
    > Anders als in anderen Browsern behält Firefox standardmäßig [den dynamischen angehakten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg bei. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; es hat jedoch einen besonderen Zweck für Eingaben des Typs `checkbox`: Wenn ein Formular eingereicht wird, werden nur Kontrollkästchen, die derzeit angehakt sind, an den Server übermittelt, und der angegebene Wert ist der Wert des `value`-Attributs. Wenn der `value` nicht anderweitig angegeben wird, ist er standardmäßig die Zeichenfolge `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

## Verwendung von Kontrollkästchen-Eingaben

Wir haben die grundlegendste Verwendung von Kontrollkästchen oben behandelt. Schauen wir uns nun die anderen häufig verwendeten kontrollkästchenbezogenen Funktionen und Techniken an, die Sie benötigen.

### Umgang mit mehreren Kontrollkästchen

Das Beispiel oben enthielt nur ein Kontrollkästchen; in realen Situationen werden Sie wahrscheinlich auf mehrere Kontrollkästchen stoßen. Wenn sie völlig unabhängig sind, können Sie sie alle separat behandeln, wie oben gezeigt. Wenn sie jedoch alle miteinander verwandt sind, sind die Dinge nicht ganz so einfach.

Zum Beispiel, im folgenden Beispiel beinhalten wir mehrere Kontrollkästchen, um dem Benutzer zu erlauben, seine Interessen auszuwählen (sehen Sie die vollständige Version im Abschnitt [Beispiele](#beispiele)).

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

In diesem Beispiel werden Sie sehen, dass wir jedem Kontrollkästchen denselben `name` gegeben haben. Wenn beide Kontrollkästchen aktiviert sind und dann das Formular eingereicht wird, erhalten Sie eine Zeichenfolge von Name/Wert-Paaren, die wie folgt eingereicht wird: `interest=coding&interest=music`. Wenn diese Zeichenfolge den Server erreicht, müssen Sie sie anders als ein assoziatives Array parsen, damit alle Werte, nicht nur der letzte Wert, von `interest` erfasst werden. Für eine Technik, die in Python verwendet wird, siehe [Mehrere Kontrollkästchen mit einer einzigen serverseitigen Variablen behandeln](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable), zum Beispiel.

### Vorab angehaktes Kontrollkästchen

Um ein Kontrollkästchen standardmäßig anzuhaken, versehen Sie es mit dem `checked`-Attribut. Siehe das folgende Beispiel:

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

### Eine größere Trefferzone für Ihre Kontrollkästchen bereitstellen

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie ein Kontrollkästchen umschalten können, indem Sie auf das damit verbundene {{htmlelement("label")}}-Element klicken, sowie auf das Kontrollkästchen selbst. Dies ist eine wirklich nützliche Funktion von HTML-Formularlabels, die es einfacher macht, die gewählte Option auszuwählen, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Dies ist nicht nur aus Gründen der Barrierefreiheit wichtig, sondern auch ein guter Grund, `<label>`-Elemente in Ihren Formularen ordnungsgemäß einzurichten.

### Kontrollkästchen im unbestimmten Zustand

Ein Kontrollkästchen kann in einem **unbestimmten** Zustand sein. Dies wird mithilfe der [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts über JavaScript eingestellt (es kann nicht mithilfe eines HTML-Attributs festgelegt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat das Kontrollkästchen in den meisten Browsern eine horizontale Linie im Kasten (es sieht etwas aus wie ein Bindestrich oder Minuszeichen) anstelle eines Häkchens.

> [!NOTE]
> Dies ist rein eine visuelle Änderung. Es hat keinen Einfluss darauf, ob der `value` des Kontrollkästchens in einer Formulareinreichung verwendet wird. Dies wird durch den `checked`-Zustand festgelegt, unabhängig vom `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn ein Kontrollkästchen verfügbar ist, das eine Anzahl von Unteroptionen (die ebenfalls Kontrollkästchen sind) "besitzt". Wenn alle Unteroptionen angehakt sind, wird das besitzende Kontrollkästchen ebenfalls angehakt, und wenn sie alle nicht angehakt sind, wird das besitzende Kontrollkästchen nicht angehakt. Wenn eine oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, ist das besitzende Kontrollkästchen im unbestimmten Zustand.

Dies kann im untenstehenden Beispiel gesehen werden (dank [CSS-Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel verfolgen wir die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen einer Zutat aktivieren oder deaktivieren, prüft eine JavaScript-Funktion die Gesamtzahl der angehakten Zutaten:

- Wenn keine angehakt sind, wird das Kontrollkästchen des Rezeptnamens auf nicht angehakt gesetzt.
- Wenn eine oder zwei angehakt sind, wird das Kontrollkästchen des Rezeptnamens auf `indeterminate` gesetzt.
- Wenn alle drei angehakt sind, wird das Kontrollkästchen des Rezeptnamens auf `checked` gesetzt.

In diesem Fall wird der `indeterminate`-Zustand verwendet, um anzuzeigen, dass das Sammeln der Zutaten begonnen hat, das Rezept aber noch nicht vollständig ist.

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

Kontrollkästchen unterstützen die [Validierung](/de/docs/Web/HTML/Constraint_validation) (die allen {{HTMLElement("input")}}s angeboten wird). Die meisten der [`ValidityState`](/de/docs/Web/API/ValidityState)s werden jedoch immer `false` sein. Wenn das Kontrollkästchen das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, aber nicht angehakt ist, wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des "mehrere Kontrollkästchen" Beispiels, das wir oben gesehen haben — es hat mehr Standardoptionen, plus ein "anderes" Kontrollkästchen, das bei Aktivierung ein Textfeld erscheinen lässt, um einen Wert für die "andere" Option einzugeben. Dies wird mit einem kurzen JavaScript-Block erreicht. Das Beispiel enthält implizite Labels, wobei das `<input>` direkt im `<label>` liegt. Das Texteingabefeld ohne sichtbares Label enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut, das seinen zugänglichen Namen angibt. Dieses Beispiel enthält auch etwas CSS, um das Styling zu verbessern.

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
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, die es Ihnen ermöglichen, Kontrollkästchen basierend auf ihrem aktuellen Zustand zu stylen.
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML DOM API, die das `<input>`-Element implementiert.
