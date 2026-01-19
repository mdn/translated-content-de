---
title: <input type="checkbox">
slug: Web/HTML/Reference/Elements/input/checkbox
l10n:
  sourceCommit: ac954189ad461fb8b8b1e3b4b2be1cd3604f20d6
---

`<input>`-Elemente vom Typ **`checkbox`** werden standardmäßig als Kästchen dargestellt, die angekreuzt werden, wenn sie aktiviert sind, ähnlich wie man es in einem amtlichen Formular sehen könnte. Das genaue Aussehen hängt von der Betriebssystemkonfiguration ab, unter der der Browser läuft. Allgemein ist es ein Quadrat, kann aber abgerundete Ecken haben. Ein Kontrollkästchen ermöglicht es Ihnen, einzelne Werte zur Übermittlung in einem Formular auszuwählen (oder nicht).

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
> [Optionsfelder](/de/docs/Web/HTML/Reference/Elements/input/radio) sind Checkboxes ähnlich, jedoch mit einem wichtigen Unterschied — [gleichnamige Optionsfelder](/de/docs/Web/HTML/Reference/Elements/input/radio#defining_a_radio_group) sind in einer Gruppe, in der nur ein Optionsfeld zu einem Zeitpunkt ausgewählt werden kann, während Kontrollkästchen es erlauben, einzelne Werte ein- und auszuschalten. Wenn mehrere gleichnamige Steuerelemente vorhanden sind, erlaubt ein Optionsfeld, eines unter allen auszuwählen, während Kontrollkästchen das Auswählen mehrerer Werte erlauben.

## Wert

Ein String, der den Wert des Kontrollkästchens repräsentiert. Dieser wird nicht auf der Client-Seite angezeigt, sondern auf dem Server ist dies der `value`, der den mit dem `name` des Kontrollkästchens gesendeten Daten zugeordnet wird. Nehmen Sie folgendes Beispiel:

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

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn das Formular gesendet wird, wird das Daten-Namen/Wert-Paar `subscribe=newsletter` sein.

Falls das `value`-Attribut weggelassen wird, ist der Standardwert für das Kontrollkästchen `on`, sodass die gesendeten Daten in diesem Fall `subscribe=on` sein würden.

> [!NOTE]
> Wenn ein Kontrollkästchen beim Absenden des Formulars nicht angehakt ist, werden weder der Name noch der Wert an den Server gesendet. Es gibt keine HTML-exklusive Methode, um den nicht angehakten Zustand eines Kontrollkästchens darzustellen (z.B. `value=unchecked`). Wenn Sie einen Standardwert für das Kontrollkästchen übermitteln möchten, wenn es nicht angehakt ist, könnten Sie JavaScript verwenden, um ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} innerhalb des Formulars zu erzeugen, das einen Wert angibt, der einen nicht angehakten Zustand anzeigt.

## Zusätzliche Attribute

Zusätzlich zu den [allgemeinen Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `checkbox`-Eingaben die folgenden Attribute.

- `checked`
  - : Ein {{Glossary("Boolean/HTML", "boolean")}}-Attribut, das angibt, ob dieses Kontrollkästchen standardmäßig (beim Laden der Seite) angehakt ist. Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit angehakt ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked`-IDL-Attribut von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)
    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerelementen wird der Wert eines Kontrollkästchens nur in die gesendeten Daten aufgenommen, wenn das Kontrollkästchen derzeit `checked` ist. Wenn dies der Fall ist, wird der Wert des `value`-Attributs des Kontrollkästchens als Eingabewert gemeldet, oder `on`, wenn kein `value` festgelegt ist.
    > Anders als andere Browser behält Firefox standardmäßig [den dynamischen checked-Zustand über Seitenladezyklen hinweg](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das `autocomplete`-Attribut, um diese Funktion zu steuern.

- `value`
  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}-Elemente teilen; allerdings hat es eine besondere Bedeutung für Eingaben vom Typ `checkbox`: Wenn ein Formular gesendet wird, werden nur Kontrollkästchen, die derzeit angehakt sind, an den Server gesendet, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn nicht anders festgelegt, ist der Standardwert `on`. Dies wird im Abschnitt [Wert](#wert) oben erläutert.

- `switch`
  - : Ein {{Glossary("Boolean/HTML", "boolean")}}-Attribut, das nur für `checkbox`-Eingaben gilt. Wenn vorhanden, zeigt es an, dass das Kontrollkästchen einen Ein/Aus-`switch` statt eines normalen `checkbox` repräsentiert. Es verändert das Erscheinungsbild des `checkbox`-Steuerungselements, aber das zugrundeliegende Verhalten bleibt das gleiche wie bei einem normalen `checkbox`.

    > [!NOTE]
    > Dieses Attribut erlaubt es Benutzeragenten, `switch`-ARIA-Semantiken zu unterstützenden Technologien bereitzustellen — ohne, dass Dokumente explizit `role="switch"` angeben müssen. Das Markup und die API sind denen von Checkboxes ähnlich, außer dass die `:indeterminate`-Pseudoklasse niemals übereinstimmt.

    > [!WARNING]
    > Dieses Attribut ist noch experimentell und hat begrenzte Unterstützung in Browsern. Das Attribut wird in nicht unterstützten Browsern ignoriert.

## Verwendung von Checkbox-Eingaben

Wir haben bereits die grundlegendste Verwendung von Kontrollkästchen oben behandelt. Lassen Sie uns nun die anderen gängigen, mit Kontrollkästchen verbundenen Funktionen und Techniken betrachten, die Sie benötigen werden.

### Umgang mit mehreren Kontrollkästchen

Das oben gezeigte Beispiel enthielt nur ein Kontrollkästchen; in realen Situationen werden Sie wahrscheinlich auf mehrere Kontrollkästchen stoßen. Wenn sie völlig unabhängig sind, können Sie mit ihnen allen separat umgehen, wie oben gezeigt. Wenn sie jedoch alle miteinander in Beziehung stehen, ist es nicht ganz so einfach.

Zum Beispiel, im folgenden Demo haben wir mehrere Kontrollkästchen eingeschlossen, um dem Benutzer zu erlauben, seine Interessen zu wählen (sehen Sie die vollständige Version im Abschnitt [Beispiele](#beispiele)).

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

In diesem Beispiel sehen Sie, dass wir jedem Kontrollkästchen den gleichen `name` gegeben haben. Wenn beide Kontrollkästchen angekreuzt sind und dann das Formular gesendet wird, erhalten Sie eine Zeichenfolge von Namen/Wert-Paaren, die so übermittelt werden: `interest=coding&interest=music`. Wenn diese Zeichenfolge den Server erreicht, müssen Sie sie anders als als assoziatives Array parsen, sodass alle Werte, nicht nur der letzte Wert, von `interest` erfasst werden. Für eine mit Python verwendete Technik, siehe [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable), zum Beispiel.

### Kontrollkästchen standardmäßig ankreuzen

Um ein Kontrollkästchen standardmäßig angekreuzt zu machen, geben Sie ihm das `checked`-Attribut. Sehen Sie sich das folgende Beispiel an:

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

### Switch als Kontrollkästchen

Das folgende Beispiel zeigt, wie man ein Kontrollkästchen wie einen Ein/Aus-Schalter aussehen und agieren lässt.

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
> Während nur einige Browser das Kontrollkästchen als Schalter rendern, bleibt das Verhalten in allen Browsern gleich.

{{EmbedLiveSample('Switch_as_a_checkbox', 600, 100)}}

### Bereitstellen eines größeren Trefferbereichs für Ihre Kontrollkästchen

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie ein Kontrollkästchen durch Klicken auf das zugehörige {{htmlelement("label")}}-Element sowie auf das Kontrollkästchen selbst umschalten können. Dies ist ein wirklich nützliches Merkmal von HTML-Formularetiketten, das es einfacher macht, die gewünschte Option zu klicken, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Abgesehen von der Barrierefreiheit ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen richtig einzurichten.

### Kontrollkästchen im unbestimmten Zustand

Ein Kontrollkästchen kann sich in einem **unbestimmten** Zustand befinden. Dies wird mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt-Eigenschaft [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate) über JavaScript festgelegt (es kann nicht mit einem HTML-Attribut gesetzt werden):

```js
inputInstance.indeterminate = true;
```

Wenn `indeterminate` `true` ist, hat das Kontrollkästchen eine horizontale Linie im Kästchen (in den meisten Browsern sieht es etwas wie ein Bindestrich oder Minuszeichen aus) anstelle eines Häkchens/Hakens.

> [!NOTE]
> Dies ist lediglich eine visuelle Änderung. Es hat keine Auswirkung darauf, ob der `value` des Kontrollkästchens bei einem Formularversand verwendet wird. Dies wird durch den `checked`-Zustand bestimmt, unabhängig vom `indeterminate`-Zustand.

Es gibt nicht viele Anwendungsfälle für diese Eigenschaft. Der häufigste ist, wenn ein Kontrollkästchen verfügbar ist, das eine Anzahl von Unteroptionen "besitzt" (welche ebenfalls Kontrollkästchen sind). Wenn alle Unteroptionen angehakt sind, ist auch das besitzende Kontrollkästchen angehakt, und wenn sie alle nicht angehakt sind, ist das besitzende Kontrollkästchen nicht angehakt. Wenn eine oder mehr der Unteroptionen einen anderen Zustand als die anderen haben, ist das besitzende Kontrollkästchen im unbestimmten Zustand.

Dies kann im folgenden Beispiel gesehen werden (danke an [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel halten wir die Zutaten im Überblick, die wir für ein Rezept sammeln. Wenn Sie das Kontrollkästchen einer Zutat an- oder abwählen, überprüft eine JavaScript-Funktion die Gesamtzahl der angehakten Zutaten:

- Wenn keine angehakt sind, wird das Kontrollkästchen des Rezeptnamens auf nicht angehakt gesetzt.
- Wenn ein oder zwei angehakt sind, wird das Kontrollkästchen des Rezeptnamens auf `indeterminate` gesetzt.
- Wenn alle drei angehakt sind, wird das Kontrollkästchen des Rezeptnamens auf `checked` gesetzt.

In diesem Fall wird der `indeterminate`-Zustand benutzt, um zu zeigen, dass das Sammeln der Zutaten begonnen hat, aber das Rezept noch nicht vollständig ist.

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

Kontrollkästchen unterstützen die [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) (die allen {{HTMLElement("input")}}s angeboten wird). Jedoch werden die meisten [`ValidityState`](/de/docs/Web/API/ValidityState)s immer `false` sein. Wenn das Kontrollkästchen das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber nicht angehakt ist, dann wird [`ValidityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des oben gesehenen "mehrere Kontrollkästchen"-Beispiels — es hat mehr Standardoptionen, plus ein "andere" Kontrollkästchen, welches, wenn angehakt, ein Textfeld erscheinen lässt, um einen Wert für die "andere" Option einzugeben. Dies wird mit einem kurzen JavaScript-Block erreicht. Das Beispiel schließt implizite Labels ein, mit dem `<input>` direkt innerhalb des `<label>`. Das Texteingabefeld ohne sichtbares Label enthält das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, das seinen zugänglichen Namen bereitstellt. Dieses Beispiel enthält auch etwas CSS zur Verbesserung des Stylings.

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
        Kontrollkästchens repräsentiert.
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
