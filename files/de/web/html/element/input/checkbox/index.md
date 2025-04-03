---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`checkbox`** werden standardmäßig als Kästchen gerendert, die beim Aktivieren angekreuzt werden, wie Sie es vielleicht in einem offiziellen Formular sehen. Das genaue Erscheinungsbild hängt von der Betriebssystemkonfiguration ab, unter der der Browser ausgeführt wird. Im Allgemeinen ist es ein Quadrat, kann jedoch abgerundete Ecken haben. Ein Kontrollkästchen ermöglicht es Ihnen, einzelne Werte zur Übermittlung in einem Formular auszuwählen (oder nicht).

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

> **Hinweis:** [Optionsfelder](/de/docs/Web/HTML/Element/input/radio) sind ähnlich wie Kontrollkästchen, jedoch mit einem wichtigen Unterschied — [gleichnamige Optionsfelder](/de/docs/Web/HTML/Element/input/radio#defining_a_radio_group) werden zu einem Satz gruppiert, in dem nur ein Optionsfeld gleichzeitig ausgewählt werden kann, während bei Kontrollkästchen einzelne Werte ein- und ausgeschaltet werden können. Wenn mehrere gleichnamige Steuerelemente vorhanden sind, kann bei Optionsfeldern eines ausgewählt werden, während bei Kontrollkästchen mehrere Werte ausgewählt werden können.

## Wert

Eine Zeichenkette, die den Wert des Kontrollkästchens darstellt. Dies wird clientseitig nicht angezeigt, aber auf dem Server ist dies der `value`, der den mit dem `name` des Kontrollkästchens übermittelten Daten zugeordnet wird. Sehen Sie sich das folgende Beispiel an:

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

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn das Formular übermittelt wird, wird das Datenname/Werte-Paar `subscribe=newsletter` sein.

Wurde das Attribut `value` weggelassen, ist der Standardwert für das Kontrollkästchen `on`, sodass die übermittelten Daten in diesem Fall `subscribe=on` sein würden.

> [!NOTE]
> Wenn ein Kontrollkästchen nicht markiert ist, wenn sein Formular übermittelt wird, werden weder der Name noch der Wert an den Server übermittelt. Es gibt keine HTML-eigene Methode, um einen nicht markierten Zustand eines Kontrollkästchens darzustellen (z. B. `value=unchecked`). Wenn Sie einen Standardwert für das nicht markierte Kontrollkästchen übermitteln möchten, könnten Sie JavaScript verwenden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} innerhalb des Formulars zu erstellen, das einen nicht markierten Zustand anzeigt.

## Zusätzliche Attribute

Neben den [allgemeinen Attributen](/de/docs/Web/HTML/Element/input#attributes), die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `checkbox`-Eingaben die folgenden Attribute:

- `checked`

  - : Ein {{Glossary("Boolean/HTML", "boolesches")}} Attribut, das angibt, ob dieses Kontrollkästchen standardmäßig (wenn die Seite geladen wird) markiert ist. Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit markiert ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked` IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerelementen wird der Wert eines Kontrollkästchens nur in die übermittelten Daten aufgenommen, wenn das Kontrollkästchen derzeit `checked` ist. In diesem Fall wird der Wert des `value`-Attributs des Kontrollkästchens als Wert der Eingabe gemeldet, oder `on`, wenn kein `value` festgelegt ist.
    > Im Gegensatz zu anderen Browsern behält Firefox standardmäßig [den dynamischen markierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` zwischen Seitenladevorgängen bei. Verwenden Sie das Attribut [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete), um diese Funktion zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}-Elemente teilen; es hat jedoch eine besondere Bedeutung für Eingaben vom Typ `checkbox`: Wenn ein Formular übermittelt wird, werden nur die Kontrollkästchen, die derzeit markiert sind, an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn der `value` nicht anderweitig angegeben ist, ist dies standardmäßig die Zeichenkette `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

## Verwendung von Kontrollkästchen-Eingaben

Wir haben bereits die grundlegendste Verwendung von Kontrollkästchen oben behandelt. Lassen Sie uns nun die anderen häufigen kontrollkästchenbezogenen Funktionen und Techniken betrachten, die Sie benötigen.

### Umgang mit mehreren Kontrollkästchen

Das Beispiel, das wir oben gesehen haben, enthielt nur ein Kontrollkästchen; in realen Situationen werden Sie wahrscheinlich auf mehrere Kontrollkästchen stoßen. Wenn sie völlig unabhängig sind, können Sie einfach alle separat behandeln, wie oben gezeigt. Wenn sie jedoch alle zusammengehören, ist die Sache nicht ganz so einfach.

Zum Beispiel enthalten wir im folgenden Demo mehrere Kontrollkästchen, um dem Benutzer zu ermöglichen, seine Interessen auszuwählen (siehe die vollständige Version im Abschnitt [Beispiele](#beispiele)).

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

In diesem Beispiel werden Sie sehen, dass wir jedem Kontrollkästchen denselben `name` gegeben haben. Wenn beide Kontrollkästchen markiert sind und dann das Formular übermittelt wird, erhalten Sie eine Zeichenkette mit Name/Wert-Paaren, die so aussieht: `interest=coding&interest=music`. Wenn diese Zeichenkette den Server erreicht, müssen Sie sie anders als ein assoziatives Array analysieren, damit alle Werte, nicht nur der letzte Wert von `interest`, erfasst werden. Eine Technik, die mit Python verwendet wird, finden Sie unter [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable).

### Kontrollkästchen standardmäßig aktivieren

Um ein Kontrollkästchen standardmäßig aktiviert zu machen, geben Sie ihm das Attribut `checked`. Siehe das folgende Beispiel:

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

In den obigen Beispielen haben Sie vielleicht bemerkt, dass Sie ein Kontrollkästchen durch Klicken auf das zugehörige {{htmlelement("label")}}-Element sowie auf das Kontrollkästchen selbst umschalten können. Dies ist eine wirklich nützliche Funktion von HTML-Formularbeschriftungen, die es einfacher macht, die gewünschte Option zu klicken, besonders auf Geräten mit kleinem Bildschirm wie Smartphones.

Über die Barrierefreiheit hinaus ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen korrekt einzurichten.

### Kontrollkästchen im unbestimmten Zustand

Ein Kontrollkästchen kann sich in einem **unbestimmten** Zustand befinden. Dies wird über die Eigenschaft [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate) des Objekts [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) per JavaScript gesetzt (es kann nicht mit einem HTML-Attribut festgelegt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat das Kontrollkästchen in den meisten Browsern eine horizontale Linie im Kästchen (es sieht etwas aus wie ein Bindestrich oder Minuszeichen) anstelle eines Häkchens.

> [!NOTE]
> Dies ist nur eine visuelle Änderung. Es hat keinen Einfluss darauf, ob der `value` des Kontrollkästchens bei einer Formularübermittlung verwendet wird. Dies wird durch den `checked`-Zustand entschieden, unabhängig vom `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn ein Kontrollkästchen vorhanden ist, das eine Reihe von Unteroptionen (die ebenfalls Kontrollkästchen sind) „besitzt“. Wenn alle Unteroptionen markiert sind, wird auch das besitzende Kontrollkästchen markiert, und wenn sie alle nicht markiert sind, wird auch das besitzende Kontrollkästchen nicht markiert. Wenn eine oder mehrere der Unteroptionen einen anderen Zustand als die anderen haben, befindet sich das besitzende Kontrollkästchen im unbestimmten Zustand.

Dies können Sie im folgenden Beispiel sehen (dank [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel behalten wir den Überblick über die Zutaten, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen einer Zutat markieren oder dessen Markierung entfernen, überprüft eine JavaScript-Funktion die Gesamtzahl der markierten Zutaten:

- Wenn keine markiert sind, wird das Kontrollkästchen mit dem Namen des Rezepts auf nicht markiert gesetzt.
- Wenn eine oder zwei markiert sind, wird das Kontrollkästchen mit dem Namen des Rezepts auf `indeterminate` gesetzt.
- Wenn alle drei markiert sind, wird das Kontrollkästchen mit dem Namen des Rezepts auf `checked` gesetzt.

In diesem Fall wird der `indeterminate`-Zustand verwendet, um anzuzeigen, dass das Sammeln der Zutaten begonnen hat, das Rezept aber noch nicht fertig ist.

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

Kontrollkästchen unterstützen [Validierung](/de/docs/Web/HTML/Constraint_validation) (die allen {{HTMLElement("input")}}-Elementen angeboten wird). Die meisten [`ValidityState`](/de/docs/Web/API/ValidityState)-Zustände sind jedoch immer `false`. Wenn das Kontrollkästchen das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, aber nicht markiert ist, wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des "mehrere Kontrollkästchen"-Beispiels, das wir oben gesehen haben — es hat mehr Standardoptionen plus ein "anderes" Kontrollkästchen, das, wenn es angekreuzt ist, ein Textfeld erscheinen lässt, um einen Wert für die "andere" Option einzugeben. Dies wird mit einem kurzen JavaScript-Block erreicht. Das Beispiel enthält implizite Labels, wobei das `<input>` direkt innerhalb des `<label>` steht. Das Texteingabefeld, ohne sichtbares Label, enthält das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), das seinen zugänglichen Namen bereitstellt. Dieses Beispiel enthält auch einige CSS zur Verbesserung des Stils.

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
        Eine Zeichenkette, die den Wert des
        Kontrollkästchens darstellt.
      </td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
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

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren, die es Ihnen ermöglichen, Kontrollkästchen basierend auf ihrem aktuellen Zustand zu stylen
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement): HTML DOM API, die das `<input>`-Element implementiert
