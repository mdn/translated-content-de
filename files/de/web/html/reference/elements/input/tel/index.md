---
title: <input type="tel">
slug: Web/HTML/Reference/Elements/input/tel
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{HTMLElement("input")}}-Elemente des Typs **`tel`** werden verwendet, um dem Benutzer die Eingabe und Bearbeitung einer Telefonnummer zu ermöglichen. Im Gegensatz zu [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url) wird der Eingabewert nicht automatisch auf ein bestimmtes Format geprüft, bevor das Formular abgesendet werden kann, da sich die Formate für Telefonnummern weltweit stark unterscheiden.

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

Obwohl Eingaben des Typs `tel` funktional identisch mit Standard-`text`-Eingaben sind, machen sie dennoch Sinn; der offensichtlichste Nutzen ist, dass mobile Browser - insbesondere auf Mobiltelefonen - möglicherweise eine spezielle Tastatur anzeigen, die für die Eingabe von Telefonnummern optimiert ist. Die Verwendung eines spezifischen Eingabetypus für Telefonnummern erleichtert auch die Implementierung von benutzerdefinierter Validierung und Handhabung von Telefonnummern.

> [!NOTE]
> Browser, die den Typ `tel` nicht unterstützen, fallen zurück auf ein Standard-{{HTMLElement("input/text", "text")}}-Eingabefeld.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die entweder eine Telefonnummer darstellt oder eine leere Zeichenkette (`""`) ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Telefonnummerneingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im gleichen Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Telefonnummernfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Telefonnummernfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes größer ist als `maxlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} lang. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Telefonnummernfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem vom `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Telefonnummerneingabefeld keine Mindestlänge.

Das Telefonnummernfeld schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer ist als `minlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn es angegeben ist, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefelds erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer Ausdruck in JavaScript sein, wie er durch den {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als eine Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erläutern, welche Anforderungen erfüllt sein müssen, um dem Muster zu entsprechen. Sie sollten auch andere erläuternde Texte in der Nähe einschließen.

Siehe [Muster-Validierung](#muster-validierung) unten für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Formatting-Zeichen der bidirektionalen Algorithmen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für Bidirektionalen-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für mehr Informationen.

### readonly

Ein Boolean-Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) mit JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf verlassen werden; das resultierende Eingabeelement kann schmaler oder breiter als die angegebene Zeichenanzahl sein, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen in Gebrauch).

Dies setzt _kein_ Limit darauf, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von tel-Eingaben

Telefonnummern sind eine sehr häufig gesammelte Art von Daten im Web. Bei der Erstellung jeglicher Art von Registrierungs- oder E-Commerce-Sites müssen Sie beispielsweise wahrscheinlich den Benutzer um eine Telefonnummer bitten, sei es für geschäftliche Zwecke oder als Notfallkontakt. Angesichts dessen, wie häufig Telefonnummern eingegeben werden, ist es bedauerlich, dass eine "Einheitslösung" für die Validierung von Telefonnummern nicht praktikabel ist.

Glücklicherweise können Sie die Anforderungen Ihrer eigenen Seite prüfen und ein angemessenes Validierungsniveau selbst implementieren. Weitere Informationen finden Sie unter [Validierung](#validierung) unten.

### Benutzerdefinierte Tastaturen

Einer der Hauptvorteile von `<input type="tel">` besteht darin, dass es bei mobilen Browsern eine spezielle Tastatur zur Eingabe von Telefonnummern anzeigt. Zum Beispiel sehen die Tastaturen auf einigen Geräten so aus:

| Firefox für Android                                       | WebKit iOS (Safari/Chrome/Firefox)                               |
| --------------------------------------------------------- | ---------------------------------------------------------------- |
| ![Firefox für Android Bildschirmfoto](fx-android-tel.png) | ![Firefox für iOS Bildschirmfoto](iphone-tel-keyboard-50pct.png) |

### Ein Basis-tel-Input

In seiner einfachsten Form kann ein `tel`-Input folgendermaßen implementiert werden:

```html
<label for="telNo">Phone number:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{ EmbedLiveSample('A_basic_tel_input', 600, 40) }}

Es gibt hier nichts Magisches. Wenn es an den Server gesendet wird, würde der obige Eingabewert beispielsweise als `telNo=+12125553151` dargestellt werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextuellen Hinweis darauf zu geben, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}}-Element bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form darstellt, den der `value` annehmen sollte, indem er ein Beispiel für einen gültigen Wert präsentiert, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `tel`-Eingabe mit dem Platzhalter `123-4567-8901`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input id="telNo" name="telNo" type="tel" placeholder="123-4567-8901" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefelds steuern, sondern auch die minimalen und maximalen zulässigen Längen für den Eingabetext selbst.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist beispielsweise das `tel`-Bearbeitungsfeld 20 Zeichen breit:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwertes

Die `size` ist unabhängig von der Längenbeschränkung für die eingegebene Telefonnummer. Sie können eine minimale Zeichenlänge für die eingegebene Telefonnummer mithilfe des [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attributs angeben; verwenden Sie in ähnlicher Weise [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen Telefonnummer festzulegen.

Das folgende Beispiel erstellt ein Eingabefeld für Telefonnummern, das 20 Zeichen breit ist und dessen Inhalt nicht kürzer als 9 Zeichen und nicht länger als 14 Zeichen sein darf.

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
> Die obigen Attribute beeinflussen die [Validierung](#validierung) — die Eingaben des obigen Beispiels werden als ungültig gewertet, wenn die Länge des Wertes weniger als 9 Zeichen oder mehr als 14 Zeichen beträgt. Die meisten Browser lassen Sie nicht einmal einen Wert über die maximale Länge eingeben.

### Bereitstellen von Standardoptionen

#### Bereitstellung eines einzelnen Standardwerts mit dem value-Attribut

Wie immer können Sie einen Standardwert für ein `tel`-Eingabefeld bereitstellen, indem Sie sein [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut setzen:

```html
<input id="telNo" name="telNo" type="tel" value="333-4444-4444" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Angebotsvorschläge

Um noch einen Schritt weiter zu gehen, können Sie eine Liste mit Standard-Telefonnummernwerten bereitstellen, aus denen der Benutzer auswählen kann. Dazu verwenden Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, gebräuchliche Telefonnummern schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}}-Elements an, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; jedes `option` `value` ist der entsprechende vorgeschlagene Wert für das Telefonnummerneingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle, bietet der Browser die angegebenen Werte als potenzielle Werte für die Telefonnummer an; dies wird in der Regel als Popup- oder Dropdown-Menü präsentiert, das die Vorschläge enthält. Während die spezifische Benutzererfahrung von Browser zu Browser unterschiedlich sein kann, präsentiert normalerweise ein Klick in das Bearbeitungsfeld eine Dropdown-Liste der vorgeschlagenen Telefonnummern. Dann wird die Liste beim Eingeben des Benutzers so angepasst, dass nur gefilterte Übereinstimmungen angezeigt werden. Jedes getippte Zeichen verkleinert die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

Hier ist ein Screenshot, wie das aussehen könnte:

![Ein Eingabefeld hat den Fokus mit einem blauen Fokusring. Das Eingabefeld hat ein Dropdown-Menü, das vier Telefonnummern zeigt, die der Benutzer auswählen kann.](phone-number-with-options.png)

## Validierung

Wie bereits erwähnt, ist es ziemlich schwierig, eine Einheitslösung für die clientseitige Validierung von Telefonnummern bereitzustellen. Was können wir also tun? Betrachten wir einige Optionen.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben, bevor sie in die Datenbank gelangen dürfen. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn der serverseitige Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn fehlerhaft formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Telefonate erforderlich machen

Sie können es so einstellen, dass eine leere Eingabe ungültig ist und nicht an den Server gesendet wird, indem Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden. Zum Beispiel verwenden wir diesen HTML-Code:

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

Und wir fügen das folgende CSS hinzu, um gültige Eingaben mit einem Häkchen und ungültige Einträge mit einem Kreuz zu markieren:

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

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Making_telephone_numbers_required", 700, 70)}}

### Muster-Validierung

Wenn Sie die eingegebenen Nummern weiter einschränken möchten, sodass sie auch einem bestimmten Muster entsprechen müssen, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, das als Wert einen {{Glossary("regular_expression", "regulären Ausdruck")}} akzeptiert, dem eingegebene Werte entsprechen müssen.

In diesem Beispiel verwenden wir das gleiche CSS wie zuvor, aber unser HTML wird geändert, um so auszusehen:

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

Beachten Sie, wie der eingegebene Wert als ungültig gemeldet wird, es sei denn, das Muster xxx-xxx-xxxx wird erfüllt; zum Beispiel wird 41-323-421 nicht akzeptiert. Auch 800-MDN-ROCKS wird nicht akzeptiert. 865-555-6502 wird jedoch akzeptiert. Dieses spezielle Muster ist offensichtlich nur für bestimmte Lokationen nützlich - in einer echten Anwendung müssten Sie wahrscheinlich das verwendete Muster abhängig von der Lokation des Benutzers variieren.

## Beispiele

In diesem Beispiel präsentieren wir ein {{htmlelement("select")}}-Element, das dem Benutzer erlaubt, auszuwählen, in welchem Land er sich befindet, und eine Reihe von `<input type="tel">`-Elementen, die es ihm erlauben, jeden Teil seiner Telefonnummer einzugeben; es gibt keinen Grund, warum Sie nicht mehrere `tel`-Eingaben haben können.

Jede Eingabe hat ein [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut, um sehbehinderten Benutzern einen Hinweis zu geben, was sie eingeben sollen, ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern), um eine spezifische Anzahl von Zeichen für den gewünschten Abschnitt zu erzwingen, und ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, das einen Hinweis enthalten soll, der Bildschirmlesegerät-Benutzern vorliest, was sie eingeben sollen.

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

Das JavaScript enthält einen [`onchange`](/de/docs/Web/API/HTMLElement/change_event)-Ereignishandler, der, wenn der `<select>`-Wert geändert wird, das `pattern`, den `placeholder` und das `aria-label` des `<input>`-Elements aktualisiert, um dem Format der Telefonnummern in diesem Land zu entsprechen.

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

Dies ist eine interessante Idee, die ein mögliches Lösungsmuster für das Problem der Handhabung internationaler Telefonnummern zeigt. Sie müssten das Beispiel natürlich erweitern, um das korrekte Muster für potenziell jedes Land bereitzustellen, was viel Arbeit wäre, und es gäbe immer noch keine narrensichere Garantie, dass die Benutzer ihre Nummern korrekt eingeben würden.

Es stellt sich die Frage, ob es sich lohnt, all diesen Aufwand auf der Client-Seite zu betreiben, wenn Sie den Benutzer die Nummer in welchem Format auch immer eingeben lassen und dann auf dem Server validieren und bereinigen könnten. Aber diese Entscheidung liegt bei Ihnen.

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
        Eine Zeichenkette, die eine Telefonnummer darstellt, oder
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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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
      <td><strong>IDL Attribute</strong></td>
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
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText),
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td>ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code></td>
      <td>mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare-Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
  - [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
  - [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
