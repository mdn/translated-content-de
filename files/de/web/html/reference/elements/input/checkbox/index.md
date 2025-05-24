---
title: <input type="checkbox">
slug: Web/HTML/Reference/Elements/input/checkbox
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`checkbox`** werden standardmäßig als Kästchen dargestellt, die beim Aktivieren angekreuzt (abgehakt) werden, ähnlich wie auf offiziellen Formularen von Regierungsbehörden. Das genaue Erscheinungsbild hängt von der Konfiguration des Betriebssystems ab, unter dem der Browser läuft. In der Regel ist dies ein Quadrat, es kann jedoch abgerundete Ecken haben. Ein Kontrollkästchen ermöglicht es Ihnen, einzelne Werte zur Übermittlung in einem Formular auszuwählen (oder nicht).

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

> **Hinweis:** [Radiobuttons](/de/docs/Web/HTML/Reference/Elements/input/radio) ähneln Kontrollkästchen, haben jedoch einen wichtigen Unterschied — [gleichnamige Radiobuttons](/de/docs/Web/HTML/Reference/Elements/input/radio#defining_a_radio_group) sind zu einer Gruppe zusammengefasst, in der jeweils nur ein Radiobutton ausgewählt werden kann, während Kontrollkästchen es erlauben, einzelne Werte ein- und auszuschalten. Wenn mehrere gleichnamige Steuerelemente vorhanden sind, kann bei Radiobuttons nur eines von ihnen aus allen ausgewählt werden, während bei Kontrollkästchen mehrere Werte ausgewählt werden können.

## Wert

Ein String, der den Wert des Kontrollkästchens darstellt. Dieser wird nicht auf der Client-Seite angezeigt, sondern auf dem Server ist dies der `value`, der mit dem `name` des Kontrollkästchens bei der Datenübermittlung übergeben wird. Nehmen wir folgendes Beispiel:

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

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn das Formular übermittelt wird, ist das Datenname/Wert-Paar `subscribe=newsletter`.

Wenn das `value`-Attribut weggelassen wird, ist der Standardwert für das Kontrollkästchen `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn ein Kontrollkästchen beim Absenden seines Formulars nicht aktiviert ist, werden weder der Name noch der Wert an den Server übermittelt. Es gibt keine reine HTML-Methode, um den nicht aktivierten Zustand eines Kontrollkästchens darzustellen (z.B. `value=unchecked`). Wenn Sie einen Standardwert für das Kontrollkästchen festlegen möchten, wenn es nicht aktiviert ist, können Sie JavaScript verwenden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} im Formular zu erstellen, das einen Wert angibt, der den nicht aktivierten Zustand darstellt.

## Zusätzliche Attribute

Zusätzlich zu den [allgemeinen Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `checkbox`-Inputs die folgenden Attribute.

- `checked`

  - : Ein {{Glossary("Boolean/HTML", "boolean")}}-Attribut, das angibt, ob dieses Kontrollkästchen standardmäßig aktiviert ist (beim Laden der Seite). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked` IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerelementen wird der Wert eines Kontrollkästchens nur dann in den übermittelten Daten einbezogen, wenn das Kontrollkästchen derzeit `checked` ist. Wenn dies der Fall ist, wird der dem Kontrollkästchen zugewiesene Wert des `value`-Attributs als Wert der Eingabe gemeldet, oder `on`, wenn kein `value` festgelegt ist.
    > Anders als andere Browser behält Firefox standardmäßig den [dynamischen aktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg bei. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}} gemeinsam haben; jedoch erfüllt es eine besondere Funktion für Eingaben vom Typ `checkbox`: Wenn ein Formular übermittelt wird, werden nur Kontrollkästchen, die derzeit aktiviert sind, an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn `value` nicht anders angegeben ist, ist es standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

## Verwendung von Kontrollkästchen

Die einfachste Verwendung von Kontrollkästchen haben wir oben bereits behandelt. Schauen wir uns nun die anderen gängigen, kontrollkästchenbezogenen Funktionen und Techniken an, die Sie benötigen werden.

### Umgang mit mehreren Kontrollkästchen

Das Beispiel, das wir oben gesehen haben, enthält nur ein Kontrollkästchen; in realen Situationen werden Sie wahrscheinlich mehrere Kontrollkästchen vorfinden. Wenn sie völlig unabhängig sind, können Sie alle separat behandeln, wie oben gezeigt. Wenn sie jedoch alle miteinander verbunden sind, ist die Sache nicht ganz so einfach.

Beispielsweise enthalten wir im folgenden Demo mehrere Kontrollkästchen, um dem Benutzer die Auswahl seiner Interessen zu ermöglichen (siehe die vollständige Version im Abschnitt [Beispiele](#beispiele)).

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

In diesem Beispiel sehen Sie, dass wir jedem Kontrollkästchen denselben `name` gegeben haben. Wenn beide Kontrollkästchen aktiviert und das Formular dann abgesendet wird, erhalten Sie eine Zeichenfolge von Namen/Wert-Paaren wie folgt: `interest=coding&interest=music`. Wenn diese Zeichenfolge den Server erreicht, müssen Sie sie anders als als assoziatives Array parsen, sodass alle, nicht nur der letzte Wert, von `interest` erfasst werden. Eine mit Python verwendete Technik finden Sie beispielsweise unter [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable).

### Kontrollkästchen standardmäßig aktivieren

Um ein Kontrollkästchen von vornherein aktiviert zu haben, geben Sie ihm das `checked`-Attribut. Sehen Sie das folgende Beispiel:

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

### Bereitstellen eines größeren Bereichs zum Anklicken für Ihre Kontrollkästchen

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie ein Kontrollkästchen durch Klicken auf das zugehörige {{htmlelement("label")}}-Element sowie auf das Kontrollkästchen selbst umschalten können. Dies ist eine wirklich nützliche Funktion von HTML-Formularlabels, die es einfacher macht, die gewünschte Option auszuwählen, insbesondere auf Geräten mit kleinen Bildschirmen wie Smartphones.

Über die Zugänglichkeit hinaus ist dies ein weiterer guter Grund, `<label>`-Elemente korrekt in Ihren Formularen zu konfigurieren.

### Indeterminiert-Status von Kontrollkästchen

Ein Kontrollkästchen kann sich im **indeterminierten** Zustand befinden. Dieser wird über die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate) mithilfe von JavaScript gesetzt (es kann nicht mit einem HTML-Attribut gesetzt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat das Kontrollkästchen in den meisten Browsern eine horizontale Linie im Kästchen (es sieht etwas wie ein Bindestrich oder Minuszeichen aus), anstelle eines Häkchens.

> [!NOTE]
> Dies ist lediglich eine visuelle Änderung. Sie hat keinen Einfluss darauf, ob der `value` des Kontrollkästchens bei einer Formularübermittlung verwendet wird. Dies wird durch den `checked`-Zustand bestimmt, unabhängig vom `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn ein Kontrollkästchen verfügbar ist, das "Besitzer" einer Vielzahl von Unteroptionen ist (die ebenfalls Kontrollkästchen sind). Wenn alle Unteroptionen aktiviert sind, ist auch das besitzende Kontrollkästchen aktiviert, und wenn sie alle deaktiviert sind, ist das besitzende Kontrollkästchen deaktiviert. Wenn eine oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, befindet sich das besitzende Kontrollkästchen im indeterminierten Zustand.

Dies kann im folgenden Beispiel gesehen werden (danke an [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel verfolgen wir die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen einer Zutat aktivieren oder deaktivieren, überprüft eine JavaScript-Funktion die Gesamtzahl der aktivierten Zutaten:

- Wenn keine aktiviert sind, wird das Kontrollkästchen des Rezeptnamens deaktiviert.
- Wenn ein oder zwei aktiviert sind, wird das Kontrollkästchen des Rezeptnamens auf `indeterminate` gesetzt.
- Wenn alle drei aktiviert sind, wird das Kontrollkästchen des Rezeptnamens auf `checked` gesetzt.

In diesem Fall wird der `indeterminate`-Zustand verwendet, um anzugeben, dass das Sammeln der Zutaten begonnen hat, das Rezept jedoch noch nicht vollständig ist.

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

Kontrollkästchen unterstützen [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) (angeboten für alle {{HTMLElement("input")}}). Die meisten der [`ValidityState`](/de/docs/Web/API/ValidityState)s sind jedoch immer `false`. Wenn das Kontrollkästchen das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut hat, aber nicht aktiviert ist, dann wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des "mehrere Kontrollkästchen"-Beispiels, das wir oben gesehen haben — es hat mehr Standardoptionen sowie ein "anderes" Kontrollkästchen, das ein Textfeld erscheinen lässt, um einen Wert für die "andere" Option einzugeben, wenn es aktiviert ist. Dies wird mit einem kurzen JavaScript-Block erreicht. Das Beispiel enthält implizite Labels, mit dem `<input>` direkt innerhalb des `<label>`. Das Texteingabefeld, ohne sichtbares Label, enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, das seinen zugänglichen Namen bereitstellt. Dieses Beispiel enthält auch etwas CSS zur Verbesserung der Gestaltung.

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

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, die es ermöglichen, Kontrollkästchen basierend auf ihrem aktuellen Zustand zu gestalten
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML DOM API, das das `<input>`-Element implementiert
