---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`checkbox`** werden standardmäßig als Kästchen angezeigt, die bei Aktivierung angekreuzt werden, ähnlich wie Sie es in einem offiziellen Regierungsformular sehen könnten. Das genaue Erscheinungsbild hängt von der Betriebssystemkonfiguration ab, unter der der Browser läuft. Im Allgemeinen handelt es sich um ein Quadrat, das möglicherweise abgerundete Ecken hat. Ein Kontrollkästchen ermöglicht die Auswahl einzelner Werte zur Übermittlung in einem Formular (oder nicht).

{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **Hinweis:** [Radiobuttons](/de/docs/Web/HTML/Element/input/radio) sind ähnlich wie Kontrollkästchen, aber mit einem wesentlichen Unterschied — [gleichnamige Radiobuttons](/de/docs/Web/HTML/Element/input/radio#defining_a_radio_group) sind in einer Gruppe zusammengefasst, in der jeweils nur ein Radiobutton ausgewählt werden kann, während Kontrollkästchen das Ein- und Ausschalten einzelner Werte ermöglichen. Wenn mehrere gleichnamige Steuerelemente vorhanden sind, kann bei Radiobuttons eines ausgewählt werden, während bei Kontrollkästchen mehrere Werte ausgewählt werden können.

## Wert

Ein String, der den Wert des Kontrollkästchens darstellt. Dieser wird auf der Clientseite nicht angezeigt, sondern nur auf dem Server; dies ist der `value`, der den mit dem `name` des Kontrollkästchens übermittelten Daten zugewiesen wird. Betrachten Sie das folgende Beispiel:

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

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn das Formular übermittelt wird, lautet das Datennamen/Werte-Paar `subscribe=newsletter`.

Wenn das `value`-Attribut ausgelassen wurde, ist der Standardwert für das Kontrollkästchen `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` wären.

> [!NOTE]
> Wenn ein Kontrollkästchen beim Absenden des Formulars nicht angekreuzt ist, werden weder der Name noch der Wert an den Server übermittelt. Es gibt keine ausschließlich HTML-basierte Methode, um den nicht angekreuzten Zustand eines Kontrollkästchens darzustellen (z.B. `value=unchecked`). Wenn Sie einen Standardwert für das Kontrollkästchen übermitteln möchten, wenn es nicht markiert ist, könnten Sie JavaScript verwenden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} innerhalb des Formulars zu erstellen, mit einem Wert, der auf einen nicht markierten Zustand hinweist.

## Zusätzliche Attribute

Zusätzlich zu den [allgemeinen Attributen](/de/docs/Web/HTML/Element/input#attributes), die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `checkbox`-Eingaben die folgenden Attribute.

- `checked`

  - : Ein {{Glossary("Boolean/HTML", "boolesches")}} Attribut, das anzeigt, ob dieses Kontrollkästchen standardmäßig (bei Laden der Seite) angekreuzt ist. Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit angekreuzt ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked`-IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird der Wert eines Kontrollkästchens nur in den übermittelten Daten aufgenommen, wenn das Kontrollkästchen derzeit `checked` ist. In diesem Fall wird der Wert des `value`-Attributs des Kontrollkästchens als Eingabewert gemeldet, oder `on`, wenn kein `value` festgelegt ist.
    > Im Gegensatz zu anderen Browsern speichert Firefox standardmäßig den [dynamischen checked-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladungen hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}-Elemente gemeinsam haben; für Eingaben vom Typ `checkbox` hat es jedoch einen speziellen Zweck: Wenn ein Formular übermittelt wird, werden nur Kontrollkästchen, die derzeit angekreuzt sind, an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn der `value`-Wert nicht anders angegeben ist, ist er standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben veranschaulicht.

## Verwenden von Checkbox-Eingaben

Wir haben bereits die grundlegendste Verwendung von Kontrollkästchen oben behandelt. Lassen Sie uns jetzt die anderen gängigen Funktionen und Techniken im Zusammenhang mit Kontrollkästchen betrachten, die Sie benötigen.

### Umgang mit mehreren Kontrollkästchen

Das unten gezeigte Beispiel enthielt nur ein Kontrollkästchen; in realen Situationen werden Sie wahrscheinlich auf mehrere Kontrollkästchen stoßen. Wenn sie völlig unabhängig sind, können Sie sie einfach alle separat behandeln, wie oben gezeigt. Wenn sie jedoch alle miteinander verwandt sind, sind die Dinge nicht ganz so einfach.

Im folgenden Demo-Beispiel fügen wir mehrere Kontrollkästchen hinzu, um dem Benutzer die Auswahl seiner Interessen zu ermöglichen (siehe die vollständige Version im Abschnitt [Beispiele](#beispiele)).

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

In diesem Beispiel werden Sie sehen, dass wir jedem Kontrollkästchen denselben `name` gegeben haben. Wenn beide Kontrollkästchen angekreuzt sind und dann das Formular übermittelt wird, erhalten Sie einen String von Namen/Werte-Paaren wie dieses: `interest=coding&interest=music`. Wenn dieser String den Server erreicht, müssen Sie ihn anders parsen als als assoziatives Array, sodass alle Werte, nicht nur der letzte Wert von `interest`, erfasst werden. Ein Beispiel für eine Technik, die in Python verwendet wird, finden Sie unter [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable).

### Kontrollkästchen standardmäßig auswählen

Um ein Kontrollkästchen standardmäßig als angekreuzt festzulegen, geben Sie ihm das `checked`-Attribut. Siehe das folgende Beispiel:

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

### Größeren Klickbereich für Ihre Kontrollkästchen bereitstellen

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie ein Kontrollkästchen umschalten können, indem Sie auf das zugehörige {{htmlelement("label")}}-Element sowie auf das Kontrollkästchen selbst klicken. Dies ist eine wirklich nützliche Funktion von HTML-Formular-Labels, die es einfacher macht, die gewünschte Option anzuklicken, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Über die Zugänglichkeit hinaus ist dies ein weiterer guter Grund, um `<label>`-Elemente korrekt in Ihren Formularen einzurichten.

### Indeterminierte Zustand von Kontrollkästchen

Ein Kontrollkästchen kann sich in einem **indeterminierten** Zustand befinden. Dies wird über die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate) mittels JavaScript festgelegt (es kann nicht mit einem HTML-Attribut festgelegt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat das Kontrollkästchen in den meisten Browsern eine horizontale Linie im Kästchen (sieht aus wie ein Bindestrich oder Minuszeichen) anstelle eines Häkchens.

> [!NOTE]
> Dies ist nur eine visuelle Änderung. Es hat keinen Einfluss darauf, ob der `value` des Kontrollkästchens in einer Formularübermittlung verwendet wird. Dies wird durch den `checked`-Zustand entschieden, unabhängig vom `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn ein Kontrollkästchen verfügbar ist, das eine Anzahl von Unteroptionen umfasst (die ebenfalls Kontrollkästchen sind). Wenn alle Unteroptionen angekreuzt sind, wird das übergeordnete Kontrollkästchen ebenfalls angekreuzt, und wenn sie alle nicht angekreuzt sind, wird das übergeordnete Kontrollkästchen nicht angekreuzt. Wenn eine oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, befindet sich das übergeordnete Kontrollkästchen im indeterminierten Zustand.

Dies kann im folgenden Beispiel gesehen werden (dank [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel verfolgen wir die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen einer Zutat ankreuzen oder abwählen, überprüft eine JavaScript-Funktion die Gesamtanzahl der angekreuzten Zutaten:

- Wenn keine angekreuzt sind, wird das Rezeptnamen-Kontrollkästchen auf nicht angekreuzt gesetzt.
- Wenn ein oder zwei angekreuzt sind, wird das Rezeptnamen-Kontrollkästchen auf `indeterminate` gesetzt.
- Wenn alle drei angekreuzt sind, wird das Rezeptnamen-Kontrollkästchen auf `checked` gesetzt.

In diesem Fall wird der `indeterminate`-Zustand verwendet, um anzugeben, dass das Sammeln der Zutaten begonnen hat, aber das Rezept noch nicht abgeschlossen ist.

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

Kontrollkästchen unterstützen [Validierung](/de/docs/Web/HTML/Constraint_validation) (angeboten für alle {{HTMLElement("input")}}s). Die meisten [`ValidityState`](/de/docs/Web/API/ValidityState)s werden jedoch immer `false` sein. Wenn das Kontrollkästchen das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, aber nicht angekreuzt ist, dann wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des "mehrere Kontrollkästchen"-Beispiels, das wir oben gesehen haben — es enthält standardmäßig mehr Optionen sowie ein "Andere"-Kontrollkästchen, das bei Ankreuzen ein Textfeld zum Eingeben eines Werts für die "Andere"-Option erscheinen lässt. Dies wird mit einem kurzen JavaScript-Block erreicht. Das Beispiel enthält implizite Labels, mit dem `<input>` direkt im `<label>`. Das Texteingabefeld, ohne sichtbares Label, enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut, das seinen zugänglichen Namen bereitstellt. Dieses Beispiel beinhaltet auch etwas CSS zur Verbesserung des Stylings.

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
      <td><strong>Methode</strong></td>
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
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML DOM API, das das `<input>`-Element implementiert
- [CSS-Eigenschaftskompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
