---
title: <input type="tel">
slug: Web/HTML/Element/input/tel
l10n:
  sourceCommit: cd56d512284c5765f115cb002c1be5d23e7281d2
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`tel`** werden verwendet, um dem Benutzer die Eingabe und Bearbeitung einer Telefonnummer zu ermöglichen. Im Gegensatz zu [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url) wird der Eingabewert nicht automatisch auf ein bestimmtes Format validiert, bevor das Formular gesendet werden kann, da sich die Formate für Telefonnummern weltweit stark unterscheiden.

{{EmbedInteractiveExample("pages/tabbed/input-tel.html", "tabbed-standard")}}

Obwohl Eingaben des Typs `tel` funktional identisch mit standardmäßigen `text`-Eingaben sind, erfüllen sie nützliche Zwecke; der offensichtlichste davon ist, dass mobile Browser — insbesondere auf Mobiltelefonen — möglicherweise eine spezielle Tastatur anzeigen, die für die Eingabe von Telefonnummern optimiert ist. Die Verwendung eines speziellen Eingabetyp für Telefonnummern erleichtert auch die Hinzufügung benutzerdefinierter Validierungen und die Verarbeitung von Telefonnummern.

> [!NOTE]
> Browser, die den Typ `tel` nicht unterstützen, verwenden standardmäßig eine {{HTMLElement("input/text", "text")}}-Eingabe.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der entweder eine Telefonnummer oder einen leeren String (`""`) darstellt.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen Telefonnummerneingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge und keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Telefonnummerfeld eingeben kann. Dieser muss ein Ganzzahlwert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Telefonnummerfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16-Code-Einheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Telefonnummerfeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Telefonnummerneingabe keine Mindestlänge.

Das Telefonnummerfeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16-Code-Einheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn es spezifiziert ist, ist ein regulärer Ausdruck, den der `value` des Eingabefelds für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) erfüllen muss. Er muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als [ASCII](/de/docs/Glossary/ASCII). Vorwärtsschrägstriche sollten im Text des Musters nicht angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erläutern, was erforderlich ist, um dem Muster zu entsprechen. Sie sollten auch andere erläuternde Texte in der Nähe einfügen.

Siehe [Pattern-Validierung](#pattern-validierung) unten für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder kurzer Satz sein, der den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung hat ([LTR](/de/docs/Glossary/LTR) oder [RTL](/de/docs/Glossary/RTL)), der Placeholder jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidi-Algorithmusformatierungszeichen verwenden, um die Richtung innerhalb des Placeholders zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Ein Boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direkten JavaScript-Code, der die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da die Breiten der Zeichen variieren, kann dies mehr oder weniger nicht exakt sein und sollte nicht darauf vertraut werden, dass es so ist; das resultierende Eingabefeld kann je nach Zeichen und Schrift ({{cssxref("font")}}-Einstellungen in Gebrauch) schmaler oder breiter sein als die angegebene Anzahl von Zeichen.

Dies legt _kein_ Limit fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es spezifiziert nur ungefähr, wie viele gleichzeitig gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute stehen für Telefonnummerneingabefelder zur Verfügung. Grundsätzlich sollten Sie deren Verwendung vermeiden, es sei denn, es ist nicht anders möglich.

### autocorrect

Eine Safari-Erweiterung, das `autocorrect`-Attribut, ist ein String, der angibt, ob die automatische Korrektur beim Bearbeiten dieses Feldes aktiviert werden soll. Erlaubte Werte sind:

- `on`
  - : Aktiviert die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textsubstitutionen, falls solche konfiguriert sind.
- `off`
  - : Deaktiviert die automatische Korrektur und Textsubstitutionen.

## Verwendung von tel-Eingaben

Telefonnummern sind eine sehr häufig erfasste Art von Daten im Internet. Wenn Sie eine beliebige Art von Registrierungs- oder E-Commerce-Website erstellen, müssen Sie möglicherweise den Benutzer nach einer Telefonnummer fragen, sei es für geschäftliche Zwecke oder für den Notfallkontakt. Angesichts der häufigen Eingabe von Telefonnummern ist es bedauerlich, dass eine "Einheitsgröße passt für alle"-Lösung für die Validierung von Telefonnummern nicht praktikabel ist.

Glücklicherweise können Sie die Anforderungen Ihrer eigenen Website in Betracht ziehen und einen geeigneten Validierungsgrad selbst implementieren. Siehe [Validierung](#validierung) unten für Details.

### Benutzerdefinierte Tastaturen

Einer der Hauptvorteile von `<input type="tel">` besteht darin, dass mobile Browser eine spezielle Tastatur für die Eingabe von Telefonnummern anzeigen. So sehen die Tastenfelder beispielsweise auf einigen Geräten aus.

| Firefox für Android                                       | WebKit iOS (Safari/Chrome/Firefox)                               |
| --------------------------------------------------------- | ---------------------------------------------------------------- |
| ![Screenshot von Firefox für Android](fx-android-tel.png) | ![Screenshot von Firefox für iOS](iphone-tel-keyboard-50pct.png) |

### Eine einfache tel-Eingabe

In ihrer einfachsten Form kann eine tel-Eingabe so implementiert werden:

```html
<label for="telNo">Phone number:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{ EmbedLiveSample('A_simple_tel_input', 600, 40) }}

Hier passiert nichts Magisches. Wenn das obenstehende Eingabefeld an den Server gesendet wird, würde die eingegebene Daten beispielsweise als `telNo=+12125553151` dargestellt werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis zu geben, welche Form die eingegebenen Daten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jede {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form, die der `value` annehmen sollte, durch das Präsentieren eines Beispiels eines gültigen Werts demonstriert, und wird im Bearbeitungsfeld angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `tel`-Eingabe mit dem Platzhalter `123-4567-8901`. Beachten Sie, wie der Platzhalter beim Bearbeiten der Inhalte des Bearbeitungsfelds verschwindet und wieder erscheint.

```html
<input id="telNo" name="telNo" type="tel" placeholder="123-4567-8901" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefelds, sondern auch die minimale und maximale zulässige Länge des Eingabetextes selbst steuern.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Mit ihm können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `tel`-Bearbeitungsfeld beispielsweise 20 Zeichen breit:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

Die `size` ist von der Längenbegrenzung der eingegebenen Telefonnummer getrennt. Sie können eine Mindestlänge in Zeichen für die eingegebene Telefonnummer mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut festlegen; verwenden Sie analog [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen Telefonnummer festzulegen.

Das folgende Beispiel erstellt ein 20 Zeichen breites Telefonnummern-Eingabefeld, das verlangt, dass der Inhalt mindestens 9 Zeichen und höchstens 14 Zeichen lang ist.

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
> Die obigen Attribute beeinflussen die [Validierung](#validierung) — die Eingaben im obigen Beispiel werden als ungültig gewertet, wenn die Länge des Werts weniger als 9 Zeichen oder mehr als 14 Zeichen beträgt. Die meisten Browser erlauben Ihnen nicht einmal, einen Wert über der maximalen Länge einzugeben.

### Voreingestellte Optionen bereitstellen

#### Einen einzelnen Standardwert mit dem value-Attribut bereitstellen

Wie immer können Sie einen Standardwert für ein `tel`-Eingabefeld bereitstellen, indem Sie dessen [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut festlegen:

```html
<input id="telNo" name="telNo" type="tel" value="333-4444-4444" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Einen Schritt weitergehend, können Sie eine Liste von Standard-Telefonnummernwerten bereitstellen, aus der der Benutzer auswählen kann. Verwenden Sie dazu das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut. Dies begrenzt den Benutzer nicht auf diese Optionen, ermöglicht ihm jedoch, häufiger verwendete Telefonnummern schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}}-Elements an, welches wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das Telefonnummern-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}-Elementen in Position bietet der Browser die angegebenen Werte als potenzielle Werte für die Telefonnummer an; dies wird in der Regel als Popup oder Dropdown-Menü mit den Vorschlägen angezeigt. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, wird normalerweise durch Klicken in das Bearbeitungsfeld ein Dropdown mit den vorgeschlagenen Telefonnummern angezeigt. Dann, während der Benutzer schreibt, wird die Liste angepasst, um nur gefilterte Übereinstimmungen anzuzeigen. Jedes eingegebene Zeichen verengt die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

Hier ist ein Screenshot, wie das aussehen könnte:

![Ein Eingabefeld hat den Fokus mit einem blauen Fokusring. Die Eingabe hat ein Dropdown-Menü, das vier Telefonnummern zeigt, die der Benutzer auswählen kann.](phone-number-with-options.png)

## Validierung

Wie bereits erwähnt, ist es ziemlich schwierig, eine Einheitslösung für die clientseitige Validierung von Telefonnummern zu bieten. Was können wir also tun? Lassen Sie uns einige Optionen betrachten.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben, bevor sie in die Datenbank gelangen dürfen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu Problemen kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ usw.) in Ihre Datenbank gelangen.

### Telefonnummern erforderlich machen

Sie können eine leere Eingabe ungültig machen und verhindern, dass sie an den Server gesendet wird, indem Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden. Beispielsweise verwenden wir dieses HTML:

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

Und fügen Sie das folgende CSS hinzu, um gültige Einträge mit einem Häkchen und ungültige mit einem Kreuz zu kennzeichnen:

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
  color: #8b0000;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
  color: #009000;
}
```

Die Ausgabe sieht folgendermaßen aus:

{{EmbedLiveSample("Making_telephone_numbers_required", 700, 70)}}

### Pattern-Validierung

Wenn Sie die eingegebenen Nummern weiter einschränken möchten, damit sie auch einem spezifischen Muster entsprechen, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, welches einen [regulären Ausdruck](/de/docs/Glossary/regular_expression) als Wert annimmt, dem die eingegebenen Werte entsprechen müssen.

In diesem Beispiel werden wir dasselbe CSS wie zuvor verwenden, aber unser HTML sieht so aus:

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
  color: #8b0000;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
  color: #009000;
}
```

{{EmbedLiveSample("Pattern_validation", 700, 70)}}

Beachten Sie, wie der eingegebene Wert als ungültig gemeldet wird, es sei denn, das Muster xxx-xxx-xxxx wird erfüllt; zum Beispiel wird 41-323-421 nicht akzeptiert. Ebenso wenig 800-MDN-ROCKS. Jedoch wird 865-555-6502 akzeptiert. Dieses spezielle Muster ist offenkundig nur für bestimmte Regionen nützlich — in einer realen Anwendung müssten Sie wahrscheinlich das verwendete Muster je nach Region des Benutzers variieren.

## Beispiele

In diesem Beispiel präsentieren wir eine einfache Oberfläche mit einem {{htmlelement("select")}}-Element, das dem Benutzer ermöglicht, das Land auszuwählen, in dem er sich befindet, und eine Reihe von `<input type="tel">`-Elementen, um jeden Teil der Telefonnummer einzugeben; es gibt keinen Grund, warum Sie nicht mehrere `tel`-Eingaben haben könnten.

Jede Eingabe hat ein [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut, um Sehenden einen Hinweis darauf zu geben, was einzugeben ist, ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern), um eine bestimmte Anzahl von Zeichen für den gewünschten Abschnitt durchzusetzen, und ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut, das einen Hinweis enthält, der Bildschirmlesern vorgelesen wird, was einzugeben ist.

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

Das JavaScript ist relativ einfach — es enthält einen [`onchange`](/de/docs/Web/API/HTMLElement/change_event)-Ereignishandler, der, wenn der `select`-Wert geändert wird, die `pattern`-, `placeholder`- und `aria-label`-Eigenschaften des `input`-Elements anpasst, um dem Format der Telefonnummern in diesem Land/Gebiet gerecht zu werden.

```js
const selectElem = document.querySelector("select");
const inputElems = document.querySelectorAll("input");

selectElem.onchange = () => {
  for (let i = 0; i < inputElems.length; i++) {
    inputElems[i].value = "";
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

Das Beispiel sieht folgendermaßen aus:

{{EmbedLiveSample('Examples', 600, 140)}}

Dies ist eine interessante Idee, die eine potenzielle Lösung für das Problem des Umgangs mit internationalen Telefonnummern zeigt. Sie müssten das Beispiel natürlich erweitern, um das richtige Muster für potenziell jedes Land bereitzustellen, was viel Arbeit wäre, und es gäbe immer noch keine narrensichere Garantie, dass die Benutzer ihre Nummern korrekt eingeben.

Es fragt sich, ob es sich lohnt, all diesen Aufwand auf der Client-Seite zu betreiben, wenn Sie den Benutzer einfach seine Nummer in welchem Format auch immer eingeben lassen könnten und diese dann serverseitig validieren und bereinigen. Aber diese Entscheidung liegt bei Ihnen.

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
  color: #8b0000;
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
        Ein String, der eine Telefonnummer darstellt, oder
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
        <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>, und
        <a href="/de/docs/Web/HTML/Element/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
        <code>list</code>, <code>selectionStart</code>,
        <code>selectionEnd</code>, <code>selectionDirection</code>, und
        <code>value</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText),
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td>ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code></td>
      <td>mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare Leitfaden](/de/docs/Learn/Forms)
- {{HTMLElement("input")}}
  - [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
  - [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
