---
title: HTML-Attributwert `<input type="tel">`
short-title: <input type="tel">
slug: Web/HTML/Reference/Elements/input/tel
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
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

Neben den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen Eingabefelder für Telefonnummern die folgenden Attribute.

### list

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}}-Element enthält eine Liste vordefinierter Werte, die Benutzern für dieses Eingabefeld vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht als Optionen vorgeschlagen. Die Werte sind Vorschläge, keine Vorgaben: Benutzer können einen Wert aus der Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Länge der Zeichenfolge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die Benutzer in das Telefonnummernfeld eingeben können. Der Wert muss eine ganze Zahl größer oder gleich 0 sein. Wenn `maxlength` nicht angegeben oder ein ungültiger Wert angegeben wird, hat das Telefonnummernfeld keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe besteht die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn der eingegebene Text länger als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Constraint Validation wird nur durchgeführt, wenn der Wert durch Benutzer geändert wird.

### minlength

Die minimale Länge der Zeichenfolge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die Benutzer in das Telefonnummernfeld eingeben können. Der Wert muss eine nicht negative ganze Zahl sein, die kleiner oder gleich dem für `maxlength` angegebenen Wert ist. Wenn `minlength` nicht angegeben oder ein ungültiger Wert angegeben wird, hat das Telefonnummernfeld keine minimale Länge.

Das Telefonnummernfeld besteht die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn der eingegebene Text kürzer als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Constraint Validation wird nur durchgeführt, wenn der Wert durch Benutzer geändert wird.

### pattern

Wenn das Attribut `pattern` angegeben ist, enthält es einen regulären Ausdruck, mit dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefelds übereinstimmen muss, damit er die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss sich um einen gültigen regulären JavaScript-Ausdruck handeln, wie er vom Typ {{jsxref("RegExp")}} verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) beschrieben wird. Beim Kompilieren des regulären Ausdrucks wird das Flag `'u'` gesetzt, sodass das Muster als Folge von Unicode-Codepunkten statt als {{Glossary("ASCII", "ASCII")}} behandelt wird. Der Mustertext darf nicht von Schrägstrichen umgeben sein.

Wenn kein Muster angegeben ist oder das angegebene Muster ungültig ist, wird kein regulärer Ausdruck angewendet und das Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das Attribut [`title`](/de/docs/Web/HTML/Reference/Elements/input#title), um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen und der die Anforderungen an die Übereinstimmung mit dem Muster erklärt. Fügen Sie außerdem in der Nähe weiteren erklärenden Text hinzu.

Weitere Informationen und ein Beispiel finden Sie unten unter [Validierung anhand eines Musters](#validierung_anhand_eines_musters).

### placeholder

Das Attribut `placeholder` enthält eine Zeichenfolge, die Benutzern einen kurzen Hinweis darauf gibt, welche Informationen im Feld erwartet werden. Statt einer erklärenden Nachricht sollte sie ein Wort oder eine kurze Wortgruppe sein, die die erwartete Art der Daten veranschaulicht. Der Text darf _keine_ Wagenrückläufe oder Zeilenvorschübe enthalten.

Wenn der Inhalt des Steuerelements eine Schreibrichtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter aber in der entgegengesetzten Richtung angezeigt werden soll, können Sie Formatierungszeichen des bidirektionalen Unicode-Algorithmus verwenden, um die Schreibrichtung innerhalb des Platzhalters zu ändern. Weitere Informationen finden Sie unter [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie nach Möglichkeit das Attribut `placeholder`. Es ist semantisch weniger aussagekräftig als andere Möglichkeiten, Ihr Formular zu erläutern, und kann unerwartete technische Probleme mit Ihren Inhalten verursachen. Weitere Informationen finden Sie unter [Beschriftungen für `<input>`](/de/docs/Web/HTML/Reference/Elements/input#labels).

### readonly

Ein boolesches Attribut, das angibt, dass Benutzer dieses Feld nicht bearbeiten können. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die Eigenschaft `value` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt setzt.

> [!NOTE]
> Da für ein schreibgeschütztes Feld kein Wert erforderlich sein kann, hat `required` keine Wirkung auf Eingabefelder, für die auch das Attribut `readonly` angegeben ist.

### size

Das Attribut `size` ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss größer als null sein; der Standardwert ist 20. Da die Breite einzelner Zeichen variiert, ist diese Angabe möglicherweise nicht exakt. Je nach Zeichen und Schriftart (den verwendeten {{cssxref("font")}}-Einstellungen) kann das resultierende Eingabefeld schmaler oder breiter als die angegebene Zeichenanzahl sein.

Damit wird _nicht_ begrenzt, wie viele Zeichen Benutzer in das Feld eingeben können. Es wird lediglich ungefähr festgelegt, wie viele Zeichen gleichzeitig sichtbar sind. Verwenden Sie das Attribut [`maxlength`](#maxlength), um eine Obergrenze für die Länge der eingegebenen Daten festzulegen.

## `tel`-Eingabefelder verwenden

Obwohl Eingabefelder vom Typ `tel` funktional mit gewöhnlichen `text`-Eingabefeldern identisch sind, erfüllen sie nützliche Zwecke. Besonders auffällig ist, dass mobile Browser – vor allem auf Mobiltelefonen – eine für die Eingabe von Telefonnummern optimierte Tastatur anzeigen können. Ein eigener Eingabetyp für Telefonnummern erleichtert außerdem das Hinzufügen einer benutzerdefinierten Validierung und die Verarbeitung von Telefonnummern.

> [!NOTE]
> Browser, die den Typ `tel` nicht unterstützen, verwenden stattdessen ein gewöhnliches {{HTMLElement("input/text", "text")}}-Eingabefeld.

Telefonnummern gehören zu den Daten, die im Web sehr häufig erfasst werden. Wenn Sie beispielsweise eine Registrierungs- oder E-Commerce-Website erstellen, müssen Sie Benutzer wahrscheinlich nach einer Telefonnummer fragen – sei es für geschäftliche Zwecke oder als Kontaktmöglichkeit im Notfall. Da Telefonnummern so häufig eingegeben werden, ist es bedauerlich, dass eine universelle Lösung für ihre Validierung nicht praktikabel ist.

Glücklicherweise können Sie die Anforderungen Ihrer eigenen Website berücksichtigen und selbst ein angemessenes Maß an Validierung implementieren. Einzelheiten finden Sie unten unter [Validierung](#validierung).

### Benutzerdefinierte Tastaturen

Einer der wichtigsten Vorteile von `<input type="tel">` besteht darin, dass mobile Browser eine spezielle Tastatur für die Eingabe von Telefonnummern anzeigen. So sehen die Tastaturen beispielsweise auf zwei Geräten aus:

| Firefox für Android                                       | WebKit iOS (Safari/Chrome/Firefox)                               |
| --------------------------------------------------------- | ---------------------------------------------------------------- |
| ![Screenshot von Firefox für Android](fx-android-tel.png) | ![Screenshot von Firefox für iOS](iphone-tel-keyboard-50pct.png) |

### Ein einfaches `tel`-Eingabefeld

In seiner einfachsten Form lässt sich ein `tel`-Eingabefeld so implementieren:

```html
<label for="telNo">Phone number:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{ EmbedLiveSample('A_basic_tel_input', 600, 40) }}

Hier geschieht nichts Besonderes. Beim Absenden an den Server würden die Daten des obigen Eingabefelds beispielsweise als `telNo=+12125553151` dargestellt.

### Platzhalter

Manchmal ist ein Hinweis direkt im Eingabefeld hilfreich, der zeigt, in welcher Form die Daten eingegeben werden sollen. Das kann besonders wichtig sein, wenn das Seitendesign keine aussagekräftigen Beschriftungen für jedes {{HTMLElement("input")}}-Element vorsieht. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter zeigt anhand eines gültigen Beispielwerts, welche Form der `value` haben soll. Er wird im Eingabefeld angezeigt, solange der `value` des Elements `""` ist. Sobald Daten eingegeben werden, verschwindet der Platzhalter; wird das Feld geleert, erscheint er erneut.

Hier sehen Sie ein `tel`-Eingabefeld mit dem Platzhalter `123-4567-8901`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Felds ändern.

```html
<input id="telNo" name="telNo" type="tel" placeholder="123-4567-8901" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Größe des Eingabefelds steuern

Sie können sowohl die sichtbare Breite des Eingabefelds als auch die zulässige Mindest- und Höchstlänge des eingegebenen Texts festlegen.

#### Sichtbare Größe des Eingabeelements

Die sichtbare Größe des Eingabefelds lässt sich mit dem Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) steuern. Damit können Sie angeben, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `tel`-Eingabefeld 20 Zeichen breit:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

`size` ist unabhängig von der Längenbegrenzung für die eingegebene Telefonnummer. Mit dem Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) können Sie eine Mindestlänge in Zeichen für die eingegebene Telefonnummer festlegen. Mit [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) legen Sie entsprechend die Höchstlänge fest.

Das folgende Beispiel erstellt ein 20 Zeichen breites Eingabefeld für Telefonnummern, dessen Inhalt mindestens 9 und höchstens 14 Zeichen lang sein muss.

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
> Die obigen Attribute wirken sich auf die [Validierung](#validierung) aus: Die Eingabe im obigen Beispiel gilt als ungültig, wenn der Wert kürzer als 9 oder länger als 14 Zeichen ist. Die meisten Browser lassen die Eingabe eines Werts, der die Höchstlänge überschreitet, gar nicht erst zu.

### Standardoptionen bereitstellen

#### Einen einzelnen Standardwert mit dem Attribut `value` bereitstellen

Wie üblich können Sie einen Standardwert für ein `tel`-Eingabefeld festlegen, indem Sie dessen Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) setzen:

```html
<input id="telNo" name="telNo" type="tel" value="333-4444-4444" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Werte vorschlagen

Darüber hinaus können Sie eine Liste vorgegebener Telefonnummern bereitstellen, aus denen Benutzer wählen können. Verwenden Sie dazu das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list). Dadurch sind Benutzer nicht auf diese Optionen beschränkt, können häufig verwendete Telefonnummern aber schneller auswählen. Die Liste liefert auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das Attribut `list` gibt die ID eines {{HTMLElement("datalist")}}-Elements an. Dieses enthält für jeden vorgeschlagenen Wert ein {{HTMLElement("option")}}-Element; der `value` jedes `option`-Elements ist der entsprechende Vorschlagswert für das Telefonnummernfeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}-Elementen bietet der Browser die angegebenen Werte als mögliche Telefonnummern an. Üblicherweise erscheinen die Vorschläge in einem Popup- oder Dropdown-Menü. Die genaue Bedienung kann sich je nach Browser unterscheiden. Normalerweise wird beim Klicken in das Eingabefeld eine Dropdown-Liste mit vorgeschlagenen Telefonnummern angezeigt. Während Benutzer tippen, wird die Liste auf passende Werte eingeschränkt. Mit jedem eingegebenen Zeichen wird die Auswahl kleiner, bis ein Vorschlag ausgewählt oder ein eigener Wert eingegeben wird.

So könnte das aussehen:

![Ein Eingabefeld ist fokussiert und hat einen blauen Fokusring. Ein Dropdown-Menü zeigt vier Telefonnummern an, aus denen Benutzer wählen können.](phone-number-with-options.png)

## Validierung

Wie bereits erwähnt, ist eine universelle Lösung für die clientseitige Validierung von Telefonnummern nur schwer umzusetzen. Welche Möglichkeiten gibt es also? Betrachten wir einige Optionen.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass eingegebene Daten das richtige Format haben, bevor sie in die Datenbank aufgenommen werden. HTML lässt sich leicht so verändern, dass die Validierung umgangen oder vollständig entfernt wird. Außerdem können Daten unter Umgehung Ihres HTML-Codes direkt an Ihren Server gesendet werden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, kann die Aufnahme falsch formatierter, zu großer oder anderweitig ungeeigneter Daten in Ihre Datenbank schwerwiegende Folgen haben.

### Telefonnummern als Pflichtangabe festlegen

Mit dem Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) können Sie festlegen, dass ein leeres Eingabefeld ungültig ist und das Formular dann nicht an den Server gesendet wird. Verwenden wir beispielsweise dieses HTML:

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

Ergänzen wir das folgende CSS, um gültige Eingaben mit einem Häkchen und ungültige Eingaben mit einem Kreuz zu kennzeichnen:

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

### Validierung anhand eines Musters

Wenn Sie die zulässigen Nummern weiter einschränken möchten, sodass sie einem bestimmten Muster entsprechen müssen, können Sie das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) verwenden. Sein Wert ist ein {{Glossary("regular_expression", "regulärer Ausdruck")}}, mit dem eingegebene Werte übereinstimmen müssen.

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

Beachten Sie, dass ein eingegebener Wert als ungültig gilt, wenn er nicht dem Muster xxx-xxx-xxxx entspricht. Beispielsweise wird 41-323-421 nicht akzeptiert, ebenso wenig wie 800-MDN-ROCKS. Dagegen wird 865-555-6502 akzeptiert. Dieses Muster ist offensichtlich nur für bestimmte Regionen sinnvoll. In einer echten Anwendung müssten Sie das verwendete Muster wahrscheinlich an die Region der Benutzer anpassen.

## Beispiele

In diesem Beispiel zeigen wir ein {{htmlelement("select")}}-Element, mit dem Benutzer ihr Land auswählen können, sowie mehrere `<input type="tel">`-Elemente, in die sie die einzelnen Teile ihrer Telefonnummer eingeben können. Es spricht nichts dagegen, mehrere `tel`-Eingabefelder zu verwenden.

Jedes Eingabefeld besitzt ein Attribut [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder), das sehenden Benutzern einen Hinweis zur erwarteten Eingabe gibt, ein Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern), das die Anzahl der Zeichen im jeweiligen Abschnitt festlegt, und ein Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) mit einem entsprechenden Hinweis für Benutzer von Screenreadern.

```html
<form>
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
  <div>
    <button>Submit</button>
  </div>
</form>
```

Das JavaScript enthält einen Event-Handler für [`onchange`](/de/docs/Web/API/HTMLElement/change_event). Wenn sich der Wert des `<select>`-Elements ändert, aktualisiert er `pattern`, `placeholder` und `aria-label` der `<input>`-Elemente entsprechend dem Telefonnummernformat des ausgewählten Landes oder Gebiets.

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

Dieser interessante Ansatz zeigt eine mögliche Lösung für den Umgang mit internationalen Telefonnummern. Natürlich müssten Sie das Beispiel erweitern, um gegebenenfalls für jedes Land das richtige Muster bereitzustellen. Das wäre viel Arbeit, und eine zuverlässige Garantie für die korrekte Eingabe der Telefonnummern gäbe es trotzdem nicht.

Daher stellt sich die Frage, ob sich dieser Aufwand auf der Clientseite lohnt. Alternativ könnten Sie Benutzern erlauben, ihre Nummer dort in einem beliebigen Format einzugeben, und sie anschließend auf dem Server validieren und bereinigen. Diese Entscheidung liegt bei Ihnen.

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
      <td><strong>Events</strong></td>
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
        ohne Attribut <code>list</code>:
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code><br />
        mit Attribut <code>list</code>: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
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
