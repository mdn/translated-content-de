---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`checkbox`** werden standardmäßig als Kästchen gerendert, die aktiviert sind (angekreuzt), ähnlich wie man es in offiziellen Formularen von Regierungsbehörden sieht. Das genaue Erscheinungsbild hängt von der Konfiguration des Betriebssystems ab, auf dem der Browser läuft. Im Allgemeinen ist es ein Quadrat, kann aber abgerundete Ecken haben. Ein Kontrollkästchen erlaubt es Ihnen, einzelne Werte zur Übermittlung in einem Formular auszuwählen (oder nicht).

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

> **Hinweis:** [Radioknöpfe](/de/docs/Web/HTML/Element/input/radio) sind Kontrollkästchen ähnlich, aber mit einem wichtigen Unterschied — [gleichnamige Radioknöpfe](/de/docs/Web/HTML/Element/input/radio#defining_a_radio_group) sind in einer Gruppe, in der nur ein Radiobutton gleichzeitig ausgewählt werden kann, während Kontrollkästchen es erlauben, einzelne Werte ein- und auszuschalten. Wenn mehrere gleichnamige Steuerungen vorhanden sind, erlauben Radioknöpfe, einen von ihnen auszuwählen, während Kontrollkästchen mehrere Werte auswählen lassen.

## Wert

Ein String, der den Wert des Kontrollkästchens darstellt. Dieser wird auf der Client-Seite nicht angezeigt, sondern auf dem Server ist dies der `value`, der den mit dem `name` des Kontrollkästchens übermittelten Daten zugeordnet wird. Nehmen Sie folgendes Beispiel:

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

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn das Formular abgeschickt wird, lautet das Datenname/Werte-Paar `subscribe=newsletter`.

Wenn das `value`-Attribut weggelassen wird, ist der Standardwert für das Kontrollkästchen `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` lauten würden.

> [!NOTE]
> Wenn ein Kontrollkästchen nicht aktiviert ist, wenn das Formular übermittelt wird, werden weder der Name noch der Wert an den Server geschickt. Es gibt keine HTML-exklusive Methode, um den Zustand eines nicht aktivierten Kontrollkästchens darzustellen (z. B. `value=unchecked`). Wenn Sie einen Standardwert für das Kontrollkästchen übermitteln möchten, wenn es nicht aktiviert ist, können Sie JavaScript verwenden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} innerhalb des Formulars zu erstellen, mit einem Wert, der auf einen deaktivierten Zustand hinweist.

## Zusätzliche Attribute

Zusätzlich zu den [gemeinsamen Attributen](/de/docs/Web/HTML/Element/input#attributes), die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `checkbox`-Eingaben die folgenden Attribute.

- `checked`

  - : Ein {{Glossary("Boolean/HTML", "boolesches")}} Attribut, das angibt, ob dieses Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn sich der Zustand des Kontrollkästchens ändert, wird dieses Inhaltsattribut nicht aktualisiert. (Nur das `checked` IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird der Wert eines Kontrollkästchens nur in den übermittelten Daten enthalten, wenn das Kontrollkästchen derzeit `checked` ist. Ist dies der Fall, wird der Wert des `value`-Attributs des Kontrollkästchens als Eingabewert gemeldet, oder `on`, falls kein `value` gesetzt ist.
    > Anders als andere Browser behält Firefox standardmäßig [den dynamischen `checked`-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladungen hinweg bei. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut, um dieses Feature zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; jedoch dient es bei Eingaben des Typs `checkbox` einem besonderen Zweck: Wenn ein Formular übermittelt wird, werden nur Kontrollkästchen, die derzeit aktiviert sind, an den Server gesendet, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn das `value` nicht anderweitig angegeben ist, ist es standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

## Verwendung von Kontrollkästchen-Eingaben

Wir haben bereits die grundlegendste Verwendung von Kontrollkästchen oben behandelt. Schauen wir uns nun die anderen häufigen kontrollkästchenbezogenen Merkmale und Techniken an, die Sie benötigen.

### Umgang mit mehreren Kontrollkästchen

Das obige Beispiel enthält nur ein Kontrollkästchen; in realen Szenarien werden Sie wahrscheinlich auf mehrere Kontrollkästchen treffen. Wenn sie völlig unabhängig voneinander sind, können Sie sie alle separat behandeln, wie oben gezeigt. Wenn sie jedoch alle zusammenhängen, sind die Dinge nicht ganz so einfach.

Zum Beispiel umfassen wir im folgenden Demo mehrere Kontrollkästchen, um dem Benutzer zu ermöglichen, seine Interessen zu wählen (sehen Sie die vollständige Version im Abschnitt [Beispiele](#beispiele)).

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

In diesem Beispiel sehen Sie, dass wir jedem Kontrollkästchen denselben `name` gegeben haben. Wenn beide Kontrollkästchen aktiviert und das Formular dann übermittelt wird, erhalten Sie eine Zeichenfolge von Name/Wert-Paaren, die so aussieht: `interest=coding&interest=music`. Wenn diese Zeichenfolge den Server erreicht, müssen Sie sie anders als als assoziatives Array parsen, damit alle Werte, nicht nur der letzte Wert von `interest`, erfasst werden. Für eine Technik, die mit Python verwendet wird, siehe zum Beispiel [Mehrere Kontrollkästchen mit einer einzigen Serverside-Variable behandeln](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable).

### Kontrollkästchen standardmäßig aktivieren

Um ein Kontrollkästchen standardmäßig aktiviert zu machen, geben Sie ihm das `checked`-Attribut. Siehe das folgende Beispiel:

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

### Bereitstellung eines größeren Trefferbereichs für Ihre Kontrollkästchen

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie ein Kontrollkästchen umschalten können, indem Sie auf das zugehörige {{htmlelement("label")}}-Element sowie auf das Kontrollkästchen selbst klicken. Dies ist ein sehr nützliches Feature von HTML-Formularbezeichnungen, das es einfacher macht, die gewünschte Option, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones, auszuwählen.

Abgesehen von der Zugänglichkeit gibt es einen weiteren guten Grund, `<label>`-Elemente richtig einzurichten.

### Kontrollkästchen im indeterminierten Zustand

Ein Kontrollkästchen kann sich in einem **indeterminierten** Zustand befinden. Dies wird über die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate) mittels JavaScript gesetzt (es kann nicht mit einem HTML-Attribut gesetzt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat das Kontrollkästchen in den meisten Browsern eine horizontale Linie im Kästchen (es sieht ein bisschen wie ein Bindestrich oder Minuszeichen aus), anstatt eines Häkchens.

> [!NOTE]
> Dies ist nur eine visuelle Änderung. Es hat keinen Einfluss darauf, ob der `value` des Kontrollkästchens in einer Formularübermittlung verwendet wird. Dies wird durch den `checked`-Zustand entschieden, unabhängig vom `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn ein Kontrollkästchen verfügbar ist, das eine Anzahl von Unteroptionen "besitzt" (die ebenfalls Kontrollkästchen sind). Wenn alle Unteroptionen aktiviert sind, ist das besitzende Kontrollkästchen ebenfalls aktiviert, und wenn sie alle deaktiviert sind, ist das besitzende Kontrollkästchen deaktiviert. Wenn eine oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, befindet sich das besitzende Kontrollkästchen im indeterminierten Zustand.

Dies kann man im untenstehenden Beispiel sehen (danke an [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel behalten wir den Überblick über die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen einer Zutat (de)aktivieren, überprüft eine JavaScript-Funktion die Gesamtzahl der aktivierten Zutaten:

- Wenn keine aktiviert ist, ist das Kontrollkästchen des Rezeptnamens deaktiviert.
- Wenn eine oder zwei aktiviert sind, wird das Kontrollkästchen des Rezeptnamens `indeterminate` gesetzt.
- Wenn alle drei aktiviert sind, wird das Kontrollkästchen des Rezeptnamens auf `checked` gesetzt.

In diesem Fall wird der Zustand `indeterminate` verwendet, um anzugeben, dass das Sammeln der Zutaten begonnen hat, aber das Rezept noch nicht vollständig ist.

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

Kontrollkästchen unterstützen [Validierung](/de/docs/Web/HTML/Constraint_validation) (beim Einsatz bei allen {{HTMLElement("input")}}-Elementen). Jedoch werden die meisten [`ValidityState`](/de/docs/Web/API/ValidityState)-Elemente immer `false` sein. Wenn das Kontrollkästchen das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, jedoch nicht aktiviert ist, dann wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des "Mehrere Kontrollkästchen"-Beispiels, das wir oben gesehen haben — es hat mehr Standardoptionen plus ein "anderes" Kontrollkästchen, das, wenn aktiviert, ein Textfeld erscheinen lässt, um einen Wert für die "andere" Option einzugeben. Dies wird mit einem kurzen JavaScript-Block erreicht. Das Beispiel enthält implizite Labels, mit dem `<input>` direkt im `<label>`. Das Texteingabefeld ohne sichtbares Label enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, das seinen zugänglichen Namen bereitstellt. Dieses Beispiel enthält auch etwas CSS, um das Styling zu verbessern.

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

{{EmbedLiveSample('Beispiele', '100%', 300)}}

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

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, die es erlauben, Kontrollkästchen basierend auf ihrem aktuellen Zustand zu stylen
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML DOM API, die das `<input>`-Element implementiert
