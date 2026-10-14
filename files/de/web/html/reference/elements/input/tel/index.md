---
title: '`<input type="tel">` HTML-Attributwert'
short-title: <input type="tel">
slug: Web/HTML/Reference/Elements/input/tel
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{HTMLElement("input")}}-Elemente vom Typ **`tel`** ermöglichen es Benutzern, eine Telefonnummer einzugeben und zu bearbeiten. Anders als bei [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url) wird der eingegebene Wert vor dem Absenden des Formulars nicht automatisch auf ein bestimmtes Format geprüft, da sich Telefonnummernformate weltweit stark unterscheiden.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;tel&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<label for="phone">
  Enter your phone number:<br />
  <small>Format: 123-456-7890</small>
</label>

<input
  type="tel"
  id="phone"
  name="phone"
  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  required />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des {{HTMLElement("input")}}-Elements enthält eine Zeichenfolge, die entweder eine Telefonnummer darstellt oder leer ist (`""`).

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die unabhängig vom Typ für alle {{HTMLElement("input")}}-Elemente gelten, unterstützen Eingabefelder für Telefonnummern die folgenden Attribute.

### list

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}}-Element enthält eine Liste vordefinierter Werte, die Benutzern für dieses Eingabefeld vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die Vorschläge aufgenommen. Die Werte sind Vorschläge, keine Vorgaben: Benutzer können einen Wert aus der Liste auswählen oder einen anderen eingeben.

### maxlength

Die maximale Länge der Zeichenfolge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die Benutzer in das Telefonnummernfeld eingeben können. Der Wert muss eine ganze Zahl von mindestens 0 sein. Wenn `maxlength` nicht angegeben oder ein ungültiger Wert angegeben wird, hat das Telefonnummernfeld keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe besteht die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn der eingegebene Text länger als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Constraint-Validierung wird nur angewendet, wenn Benutzer den Wert ändern.

### minlength

Die minimale Länge der Zeichenfolge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die Benutzer in das Telefonnummernfeld eingeben können. Der Wert muss eine nicht negative ganze Zahl sein, die kleiner oder gleich dem durch `maxlength` festgelegten Wert ist. Wenn `minlength` nicht angegeben oder ein ungültiger Wert angegeben wird, hat das Telefonnummernfeld keine Mindestlänge.

Das Telefonnummernfeld besteht die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn der eingegebene Text kürzer als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Constraint-Validierung wird nur angewendet, wenn Benutzer den Wert ändern.

### pattern

Das Attribut `pattern` ist, sofern angegeben, ein regulärer Ausdruck, dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe entsprechen muss, damit er die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss sich um einen gültigen regulären JavaScript-Ausdruck handeln, wie er vom Typ {{jsxref("RegExp")}} verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) beschrieben wird. Beim Kompilieren des regulären Ausdrucks wird das Flag `'u'` verwendet, sodass das Muster als Folge von Unicode-Codepunkten statt als {{Glossary("ASCII", "ASCII")}} behandelt wird. Der Mustertext darf nicht von Schrägstrichen umgeben sein.

Wenn kein Muster angegeben wird oder das angegebene Muster ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das Attribut [`title`](/de/docs/Web/HTML/Reference/Elements/input#title), um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen und der die Anforderungen des Musters erläutert. Fügen Sie außerdem weiteren erklärenden Text in der Nähe hinzu.

Einzelheiten und ein Beispiel finden Sie unten unter [Mustervalidierung](#mustervalidierung).

### placeholder

Das Attribut `placeholder` ist eine Zeichenfolge, die Benutzern einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte sich um ein Wort oder eine kurze Wortgruppe handeln, die den erwarteten Datentyp veranschaulicht, nicht um eine ausführliche Erklärung. Der Text darf _keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Schreibrichtung hat ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}), der Platzhalter aber in der entgegengesetzten Richtung dargestellt werden muss, können Sie Formatierungszeichen des bidirektionalen Unicode-Algorithmus verwenden, um die Schreibrichtung innerhalb des Platzhalters zu ändern. Weitere Informationen finden Sie unter [Anleitung zur Verwendung von Unicode-Steuerzeichen für bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des Attributs `placeholder`. Es ist semantisch weniger aussagekräftig als andere Möglichkeiten, ein Formular zu erläutern, und kann unerwartete technische Probleme mit Ihren Inhalten verursachen. Weitere Informationen finden Sie unter [Beschriftungen für `<input>`](/de/docs/Web/HTML/Reference/Elements/input#labels).

### readonly

Ein boolesches Attribut, das, wenn es vorhanden ist, verhindert, dass Benutzer dieses Feld bearbeiten. Der `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die Eigenschaft `value` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt setzt.

> [!NOTE]
> Da für ein schreibgeschütztes Feld kein Wert erforderlich ist, hat `required` keine Wirkung auf Eingabefelder, für die auch das Attribut `readonly` angegeben ist.

### size

Das Attribut `size` ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss größer als null sein; der Standardwert ist 20. Da die Breite von Zeichen variiert, ist die Angabe möglicherweise nicht exakt und sollte nicht als exakte Breite vorausgesetzt werden. Je nach Zeichen und Schriftart (den verwendeten {{cssxref("font")}}-Einstellungen) kann das resultierende Eingabefeld schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies begrenzt _nicht_, wie viele Zeichen Benutzer in das Feld eingeben können. Es legt lediglich ungefähr fest, wie viele Zeichen gleichzeitig sichtbar sind. Um die Länge der Eingabedaten nach oben zu begrenzen, verwenden Sie das Attribut [`maxlength`](#maxlength).

## Verwendung von tel-Eingabefeldern

Obwohl Eingabefelder vom Typ `tel` funktional mit gewöhnlichen `text`-Eingabefeldern identisch sind, erfüllen sie nützliche Zwecke. Besonders auffällig ist, dass mobile Browser – insbesondere auf Mobiltelefonen – eine für die Eingabe von Telefonnummern optimierte Tastatur anzeigen können. Ein spezieller Eingabetyp für Telefonnummern erleichtert außerdem das Hinzufügen einer eigenen Validierung und die Verarbeitung von Telefonnummern.

> [!NOTE]
> Browser, die den Typ `tel` nicht unterstützen, behandeln das Feld stattdessen als gewöhnliches {{HTMLElement("input/text", "text")}}-Eingabefeld.

Telefonnummern gehören zu den Daten, die im Web sehr häufig abgefragt werden. Wenn Sie beispielsweise eine Registrierungs- oder E-Commerce-Website erstellen, müssen Sie Benutzer wahrscheinlich nach einer Telefonnummer fragen, sei es für geschäftliche Zwecke oder als Kontakt für Notfälle. Da Telefonnummern so häufig eingegeben werden, ist es bedauerlich, dass eine universelle Lösung für ihre Validierung nicht praktikabel ist.

Glücklicherweise können Sie die Anforderungen Ihrer eigenen Website berücksichtigen und selbst einen angemessenen Validierungsgrad implementieren. Einzelheiten finden Sie unten unter [Validierung](#validierung).

### Angepasste Tastaturen

Einer der größten Vorteile von `<input type="tel">` besteht darin, dass mobile Browser eine spezielle Tastatur für die Eingabe von Telefonnummern anzeigen. Die folgende Tabelle zeigt beispielsweise, wie die Tastaturen auf zwei Geräten aussehen.

| Firefox für Android                                       | WebKit iOS (Safari/Chrome/Firefox)                               |
| --------------------------------------------------------- | ---------------------------------------------------------------- |
| ![Screenshot von Firefox für Android](fx-android-tel.png) | ![Screenshot von Firefox für iOS](iphone-tel-keyboard-50pct.png) |

### Ein einfaches tel-Eingabefeld

In seiner einfachsten Form lässt sich ein `tel`-Eingabefeld wie folgt implementieren:

```html
<label for="telNo">Phone number:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{ EmbedLiveSample('A_basic_tel_input', 600, 40) }}

Hier geschieht nichts Besonderes. Beim Absenden an den Server würden die Daten des obigen Eingabefelds beispielsweise als `telNo=+12125553151` dargestellt.

### Platzhalter

Manchmal ist es hilfreich, direkt am Eingabefeld einen Hinweis darauf zu geben, welches Format die Eingabedaten haben sollen. Das kann besonders wichtig sein, wenn das Seitendesign keine aussagekräftigen Beschriftungen für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter zeigt anhand eines gültigen Beispielwerts, welches Format der `value` haben soll. Er wird im Eingabefeld angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten eingegeben werden, verschwindet der Platzhalter; wird das Feld geleert, erscheint er erneut.

Hier verwenden wir ein `tel`-Eingabefeld mit dem Platzhalter `123-4567-8901`. Beachten Sie, wie der Platzhalter beim Bearbeiten des Feldinhalts verschwindet und wieder erscheint.

```html
<input id="telNo" name="telNo" type="tel" placeholder="123-4567-8901" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Größe der Eingabe steuern

Sie können sowohl die sichtbare Breite des Eingabefelds als auch die zulässige Mindest- und Höchstlänge des eingegebenen Texts festlegen.

#### Sichtbare Größe des Eingabeelements

Die sichtbare Größe des Eingabefelds lässt sich mit dem Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) steuern. Damit können Sie angeben, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `tel`-Eingabefeld 20 Zeichen breit:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

`size` ist unabhängig von der Längenbegrenzung der eingegebenen Telefonnummer. Mit dem Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) können Sie eine Mindestlänge in Zeichen für die eingegebene Telefonnummer festlegen. Mit [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) legen Sie entsprechend die Höchstlänge fest.

Das folgende Beispiel erstellt ein 20 Zeichen breites Eingabefeld für eine Telefonnummer, dessen Inhalt mindestens 9 und höchstens 14 Zeichen lang sein muss.

```html
<input
  id="telNo"
  name="telNo"
  type="tel"
  size="20"
  minlength="9"
  maxlength="14" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

> [!NOTE]
> Die obigen Attribute wirken sich auf die [Validierung](#validierung) aus: Die Eingabe im Beispiel gilt als ungültig, wenn der Wert weniger als 9 oder mehr als 14 Zeichen enthält. Die meisten Browser lassen die Eingabe eines Werts über der Höchstlänge gar nicht erst zu.

### Standardoptionen bereitstellen

#### Einen einzelnen Standardwert mit dem Attribut value bereitstellen

Wie üblich können Sie für ein `tel`-Eingabefeld einen Standardwert bereitstellen, indem Sie das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) setzen:

```html
<input id="telNo" name="telNo" type="tel" value="333-4444-4444" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Werte vorschlagen

Darüber hinaus können Sie eine Liste mit Telefonnummern bereitstellen, aus der Benutzer auswählen können. Verwenden Sie dazu das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list). Dadurch sind Benutzer nicht auf diese Optionen beschränkt, können häufig verwendete Telefonnummern aber schneller auswählen. Die Liste liefert auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das Attribut `list` gibt die ID eines {{HTMLElement("datalist")}}-Elements an. Dieses enthält wiederum für jeden vorgeschlagenen Wert ein {{HTMLElement("option")}}-Element; der `value` jedes `option`-Elements ist der entsprechende vorgeschlagene Wert für das Telefonnummernfeld.

```html
<label for="telNo">Phone number: </label>
<input id="telNo" name="telNo" type="tel" list="defaultTels" />

<datalist id="defaultTels">
  <option value="111-1111-1111"></option>
  <option value="122-2222-2222"></option>
  <option value="333-3333-3333"></option>
  <option value="344-4444-4444"></option>
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}-Elementen bietet der Browser die angegebenen Werte als mögliche Telefonnummern an. Die Vorschläge werden üblicherweise in einem Popup oder Dropdown-Menü angezeigt. Die genaue Bedienung kann sich je nach Browser unterscheiden. In der Regel erscheint beim Klicken in das Eingabefeld eine Dropdown-Liste mit vorgeschlagenen Telefonnummern. Während Benutzer tippen, wird die Liste auf passende Werte gefiltert. Mit jedem eingegebenen Zeichen wird die Liste weiter eingegrenzt, bis ein Wert ausgewählt oder ein eigener Wert eingegeben wird.

Der folgende Screenshot zeigt, wie das aussehen kann:

![Ein Eingabefeld ist fokussiert und von einem blauen Fokusring umgeben. Ein Dropdown-Menü zeigt vier Telefonnummern zur Auswahl an.](phone-number-with-options.png)

## Validierung

Wie bereits erwähnt, ist eine universelle Lösung für die clientseitige Validierung von Telefonnummern schwer umzusetzen. Welche Möglichkeiten gibt es also? Betrachten wir einige Optionen.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass eingegebene Daten das richtige Format haben, bevor sie in die Datenbank gelangen. Es ist allzu einfach, HTML so zu verändern, dass die Validierung umgangen oder vollständig entfernt wird. Es ist auch möglich, das HTML vollständig zu umgehen und Daten direkt an Ihren Server zu senden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, kann es schwerwiegende Folgen haben, wenn falsch formatierte, zu große oder dem falschen Typ entsprechende Daten in Ihre Datenbank gelangen.

### Telefonnummern als Pflichtangabe festlegen

Mit dem Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) können Sie dafür sorgen, dass ein leeres Eingabefeld ungültig ist und das Formular nicht an den Server gesendet wird. Verwenden wir beispielsweise dieses HTML:

```html
<form>
  <div>
    <label for="telNo">Enter a telephone number (required): </label>
    <input id="telNo" name="telNo" type="tel" required />
    <span class="validity"></span>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Ergänzen wir folgendes CSS, um gültige Eingaben mit einem Häkchen und ungültige Eingaben mit einem Kreuz zu kennzeichnen:

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
  color: darkred;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
  color: #009000;
}
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Making_telephone_numbers_required", 700, 70)}}

### Mustervalidierung

Wenn Sie die zulässigen Nummern weiter einschränken möchten, sodass sie einem bestimmten Muster entsprechen müssen, können Sie das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) verwenden. Sein Wert ist ein {{Glossary("regular_expression", "regulärer Ausdruck")}}, dem die eingegebenen Werte entsprechen müssen.

In diesem Beispiel verwenden wir dasselbe CSS wie zuvor, ändern aber das HTML wie folgt:

```html
<form>
  <div>
    <label for="telNo">
      Enter a telephone number (in the form xxx-xxx-xxxx):
    </label>
    <input
      id="telNo"
      name="telNo"
      type="tel"
      required
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
    <span class="validity"></span>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
  color: darkred;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
  color: #009000;
}
```

{{EmbedLiveSample("Pattern_validation", 700, 70)}}

Beachten Sie, dass ein eingegebener Wert als ungültig gemeldet wird, sofern er nicht dem Muster xxx-xxx-xxxx entspricht. Beispielsweise werden 41-323-421 und 800-MDN-ROCKS nicht akzeptiert, 865-555-6502 dagegen schon. Dieses Muster ist offensichtlich nur für bestimmte Regionen geeignet. In einer echten Anwendung müssten Sie das verwendete Muster wahrscheinlich an die Region der Benutzer anpassen.

## Beispiele

In diesem Beispiel verwenden wir ein {{htmlelement("select")}}-Element, mit dem Benutzer ihr Land auswählen können, sowie mehrere `<input type="tel">`-Elemente, in die sie die einzelnen Teile ihrer Telefonnummer eingeben. Sie können durchaus mehrere `tel`-Eingabefelder verwenden.

Jedes Eingabefeld hat ein Attribut [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder), das sehenden Benutzern einen Hinweis auf die erwartete Eingabe gibt, ein Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern), das die erforderliche Zeichenanzahl für den jeweiligen Teil festlegt, und ein Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), das einen entsprechenden Hinweis für Benutzer von Screenreadern enthält.

```html
<div>
  <label for="country">Choose your country:</label>
  <select id="country" name="country">
    <option>UK</option>
    <option selected>US</option>
    <option>Germany</option>
  </select>
</div>
<div>
  <p>Enter your telephone number:</p>
  <span class="areaDiv">
    <input
      id="areaNo"
      name="areaNo"
      type="tel"
      required
      placeholder="Area code"
      pattern="[0-9]{3}"
      aria-label="Area code" />
    <span class="validity"></span>
  </span>
  <span class="number1Div">
    <input
      id="number1"
      name="number1"
      type="tel"
      required
      placeholder="First part"
      pattern="[0-9]{3}"
      aria-label="First part of number" />
    <span class="validity"></span>
  </span>
  <span class="number2Div">
    <input
      id="number2"
      name="number2"
      type="tel"
      required
      placeholder="Second part"
      pattern="[0-9]{4}"
      aria-label="Second part of number" />
    <span class="validity"></span>
  </span>
</div>
```

Das JavaScript enthält einen [`onchange`](/de/docs/Web/API/HTMLElement/change_event)-Event-Handler. Wenn sich der Wert von `<select>` ändert, passt er `pattern`, `placeholder` und `aria-label` der `<input>`-Elemente an das Telefonnummernformat des jeweiligen Landes oder Gebiets an.

```js
const selectElem = document.querySelector("select");
const inputElems = document.querySelectorAll("input");

selectElem.onchange = () => {
  for (const e of inputElems) {
    e.value = "";
  }

  if (selectElem.value === "US") {
    inputElems[2].parentNode.style.display = "inline";

    inputElems[0].placeholder = "Area code";
    inputElems[0].pattern = "[0-9]{3}";

    inputElems[1].placeholder = "First part";
    inputElems[1].pattern = "[0-9]{3}";
    inputElems[1].setAttribute("aria-label", "First part of number");

    inputElems[2].placeholder = "Second part";
    inputElems[2].pattern = "[0-9]{4}";
    inputElems[2].setAttribute("aria-label", "Second part of number");
  } else if (selectElem.value === "UK") {
    inputElems[2].parentNode.style.display = "none";

    inputElems[0].placeholder = "Area code";
    inputElems[0].pattern = "[0-9]{3,6}";

    inputElems[1].placeholder = "Local number";
    inputElems[1].pattern = "[0-9]{4,8}";
    inputElems[1].setAttribute("aria-label", "Local number");
  } else if (selectElem.value === "Germany") {
    inputElems[2].parentNode.style.display = "inline";

    inputElems[0].placeholder = "Area code";
    inputElems[0].pattern = "[0-9]{3,5}";

    inputElems[1].placeholder = "First part";
    inputElems[1].pattern = "[0-9]{2,4}";
    inputElems[1].setAttribute("aria-label", "First part of number");

    inputElems[2].placeholder = "Second part";
    inputElems[2].pattern = "[0-9]{4}";
    inputElems[2].setAttribute("aria-label", "Second part of number");
  }
};
```

Das Beispiel sieht so aus:

{{EmbedLiveSample('Examples', 600, 140)}}

Das ist ein interessanter Ansatz, der eine mögliche Lösung für den Umgang mit internationalen Telefonnummern zeigt. Natürlich müssten Sie das Beispiel erweitern, um gegebenenfalls für jedes Land das richtige Muster bereitzustellen. Das wäre sehr aufwendig, und selbst dann gäbe es keine zuverlässige Garantie, dass Benutzer ihre Nummern korrekt eingeben.

Es stellt sich die Frage, ob sich dieser clientseitige Aufwand lohnt. Alternativ könnten Sie Benutzern erlauben, ihre Nummern clientseitig in einem beliebigen Format einzugeben, und sie anschließend auf dem Server validieren und bereinigen. Welche Möglichkeit Sie wählen, bleibt Ihnen überlassen.

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
  color: darkred;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
  color: #009000;
}
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die eine Telefonnummer darstellt, oder
        leer
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a> und
        <a href="/de/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
        <code>list</code>, <code>selectionStart</code>,
        <code>selectionEnd</code>, <code>selectionDirection</code> und
        <code>value</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td>
        ohne <code>list</code>-Attribut:
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code><br />
        mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
  - [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
  - [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
