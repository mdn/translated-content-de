---
title: <input type="tel">
slug: Web/HTML/Reference/Elements/input/tel
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

{{HTMLElement("input")}}-Elemente des Typs **`tel`** werden verwendet, um dem Benutzer die Eingabe und Bearbeitung einer Telefonnummer zu ermöglichen. Im Gegensatz zu [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url) wird der Eingabewert nicht automatisch auf ein bestimmtes Format validiert, bevor das Formular gesendet werden kann, da die Formate für Telefonnummern weltweit stark variieren.

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

Trotz der Tatsache, dass Eingaben des Typs `tel` funktional identisch mit Standard-`text`-Eingaben sind, erfüllen sie nützliche Zwecke; der schnellste, offensichtliche Vorteil liegt darin, dass mobile Browser – insbesondere auf Mobiltelefonen – möglicherweise eine angepasste Tastatur zur Eingabe von Telefonnummern anzeigen. Die Verwendung eines spezifischen Eingabetypen für Telefonnummern erleichtert auch die Hinzufügung benutzerdefinierter Validierungen und die Handhabung von Telefonnummern.

> [!NOTE]
> Browser, die den Typ `tel` nicht unterstützen, fallen auf ein Standard-{{HTMLElement("input/text", "text")}}-Eingabefeld zurück.

## Wert

Das `value`-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der entweder eine Telefonnummer darstellt oder ein leerer String (`""`) ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Telefonnummerneingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht kompatibel mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) sind, werden in den vorgeschlagenen Optionen nicht enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Stringlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Telefonnummerneingabefeld eingeben kann. Dieser Wert muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Telefonnummerneingabefeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Texts größer als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### minlength

Die minimale Stringlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Telefonnummerneingabefeld eingeben kann. Dieser Wert muss eine nicht-negative Ganzzahl kleiner oder gleich dem durch `maxlength` angegebenen Wert sein. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Telefonnummerneingabe keine Mindestlänge.

Das Telefonnummerneingabefeld wird bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Texts weniger als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der `value` des Eingabefelds erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er durch den {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe anfügen.

Siehe [Muster-Validierung](#muster-validierung) unten für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbruchzeichen enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode Formatierungszeichen des bidirektionalen Algorithmus verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Bezeichnungen](/de/docs/Web/HTML/Reference/Elements/input#labels).

### readonly

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld nicht durch den Benutzer bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code direkt durch Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies genau oder auch nicht exakt sein und sollte daher nicht darauf verlassen werden; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und den Schriftart-({{cssxref("font")}}-Einstellungen), die verwendet werden.

Dies setzt _keine_ Begrenzung, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr zu einem Zeitpunkt gesehen werden können. Um eine obere Grenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von tel-Eingaben

Telefonnummern sind eine sehr häufig erfasste Art von Daten im Web. Wenn Sie beispielsweise eine Registrierungs- oder E-Commerce-Seite erstellen, müssen Sie wahrscheinlich den Benutzer nach einer Telefonnummer fragen, sei es für geschäftliche Zwecke oder für Notfallkontakte. Angesichts der häufig eingegebenen Telefonnummern ist es bedauerlich, dass eine "One size fits all"-Lösung zur Validierung von Telefonnummern nicht praktikabel ist.

Glücklicherweise können Sie die Anforderungen Ihrer eigenen Website in Betracht ziehen und selbst ein angemessenes Maß an Validierung implementieren. Siehe [Validierung](#validierung) unten für Details.

### Benutzerdefinierte Tastaturen

Einer der Hauptvorteile von `<input type="tel">` besteht darin, dass mobile Browser eine spezielle Tastatur zur Eingabe von Telefonnummern anzeigen. Hier sind zum Beispiel die Tastenfelder auf ein paar Geräten.

| Firefox für Android                                       | WebKit iOS (Safari/Chrome/Firefox)                               |
| --------------------------------------------------------- | ---------------------------------------------------------------- |
| ![Firefox für Android Bildschirmfoto](fx-android-tel.png) | ![Firefox für iOS Bildschirmfoto](iphone-tel-keyboard-50pct.png) |

### Ein einfaches tel-Eingabefeld

In seiner grundlegendsten Form kann ein tel-Eingabefeld folgendermaßen implementiert werden:

```html
<label for="telNo">Phone number:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{ EmbedLiveSample('A_basic_tel_input', 600, 40) }}

Hier geschieht nichts Magisches. Wenn es zum Server gesendet wird, würde die obenstehende Eingabe als Beispiel `telNo=+12125553151` dargestellt werden.

### Platzhalter

Manchmal ist es hilfreich, einen hinweisenden Kontext zu bieten, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Beschriftungen für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form darstellt, die der `value` annehmen sollte, indem ein Beispiel eines gültigen Werts vorgestellt wird, das innerhalb des Bearbeitungsfelds angezeigt wird, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `tel`-Eingabe mit dem Platzhalter `123-4567-8901`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input id="telNo" name="telNo" type="tel" placeholder="123-4567-8901" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefelds steuern, sondern auch die minimal und maximal zugelassenen Längen des Eingabetexts selbst.

#### Physische Größe des Eingabefelds

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `tel`-Bearbeitungsfeld zum Beispiel 20 Zeichen breit:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwertlänge

Die `size` ist unabhängig vom Längslimit für die eingegebene Telefonnummer. Sie können eine Mindestlänge in Zeichen für die eingegebene Telefonnummer mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; ebenso verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen Telefonnummer festzulegen.

Das folgende Beispiel erstellt ein 20 Zeichen breites Telefonnummern-Eingabefeld und verlangt, dass der Inhalt nicht kürzer als 9 Zeichen und nicht länger als 14 Zeichen ist.

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
> Die oben genannten Attribute beeinflussen die [Validierung](#validierung) — die Eingaben im obigen Beispiel werden als ungültig gewertet, wenn die Länge des Wertes weniger als 9 Zeichen beträgt oder mehr als 14. Die meisten Browser lassen nicht einmal zu, dass ein Wert über die maximale Länge hinaus eingegeben wird.

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzigen Standards mit dem value-Attribut

Wie immer können Sie einen Standardwert für ein `tel`-Eingabefeld angeben, indem Sie dessen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut setzen:

```html
<input id="telNo" name="telNo" type="tel" value="333-4444-4444" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Angebot von vorgeschlagenen Werten

Einen Schritt weiter, können Sie eine Liste von Standard-Telefonnummernwerten anbieten, aus denen der Benutzer auswählen kann. Verwenden Sie dazu das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut. Das schränkt den Benutzer nicht auf diese Optionen ein, ermöglicht es ihm jedoch, häufig verwendete Telefonnummern schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}}-Elements an, das seinerseits ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für die Telefonnummerneingabe.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle wird der Browser die angegebenen Werte als potenzielle Werte für die Telefonnummer anbieten; dies wird typischerweise als Pop-up oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von Browser zu Browser variieren kann, präsentiert typischerweise ein Klick in das Bearbeitungsfeld eine Dropdown-Liste der vorgeschlagenen Telefonnummern. Dann, während der Benutzer tippt, wird die Liste angepasst, um nur gefilterte übereinstimmende Werte anzuzeigen. Jedes getippte Zeichen verkleinert die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

Hier ist ein Bildschirmfoto, wie das aussehen könnte:

![Ein Eingabefeld hat Fokus mit einem blauen Fokusring. Die Eingabe hat ein Dropdown-Menü, das vier Telefonnummern zeigt, die der Benutzer auswählen kann.](phone-number-with-options.png)

## Validierung

Wie bereits erwähnt, ist es ziemlich schwierig, eine Alles-in-einem-Client-Validierungslösung für Telefonnummern bereitzustellen. Was können wir also tun? Lassen Sie uns einige Optionen in Betracht ziehen.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten in dem richtigen Format sind, bevor sie in die Datenbank gelassen werden. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML komplett umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Telefonnummern verpflichtend machen

Sie können eine leere Eingabe ungültig machen, sodass sie nicht an den Server gesendet wird, indem Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden. Zum Beispiel verwenden wir diesen HTML-Code:

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

Und fügen folgendes CSS hinzu, um gültige Eingaben mit einem Häkchen und ungültige Eingaben mit einem Kreuz zu markieren:

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

Die Ausgabe sieht so aus:

{{EmbedLiveSample("Making_telephone_numbers_required", 700, 70)}}

### Muster-Validierung

Wenn Sie die eingegebenen Nummern weiter einschränken möchten, sodass sie auch einem bestimmten Muster entsprechen müssen, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, das als Wert einen {{Glossary("regular_expression", "regulären Ausdruck")}} verwendet, dem die eingegebenen Werte entsprechen müssen.

In diesem Beispiel verwenden wir das gleiche CSS wie zuvor, aber unser HTML wurde geändert, um so auszusehen:

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

Beachten Sie, wie der eingegebene Wert als ungültig gemeldet wird, es sei denn, das Muster xxx-xxx-xxxx wird erfüllt; zum Beispiel wird 41-323-421 nicht akzeptiert. 800-MDN-ROCKS auch nicht. Jedoch wird 865-555-6502 akzeptiert. Dieses besondere Muster ist offensichtlich nur für bestimmte Regionen nützlich - in einer realen Anwendung müssten Sie wahrscheinlich das verwendete Muster je nach Region des Benutzers variieren.

## Beispiele

In diesem Beispiel präsentieren wir ein {{htmlelement("select")}}-Element, das dem Benutzer die Auswahl des Landes ermöglicht, in dem er sich befindet, und eine Reihe von `<input type="tel">`-Elementen, um jeden Teil ihrer Telefonnummer einzugeben; es gibt keinen Grund, warum Sie nicht mehrere `tel`-Eingaben haben sollten.

Jede Eingabe hat ein [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut, um sehenden Benutzern einen Hinweis darauf zu geben, was eingegeben werden soll, ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern), um eine bestimmte Anzahl von Zeichen für den gewünschten Abschnitt durchzusetzen, und ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, um den Inhalt eines Hinweises zu enthalten, der von Screenreadern Benutzern darüber vorgelesen wird, was eingegeben werden soll.

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

Das JavaScript enthält einen [`onchange`](/de/docs/Web/API/HTMLElement/change_event)-Event-Handler, der beim Ändern des `<select>`-Werts das `pattern`, den `placeholder` und das `aria-label` des `<input>`-Elements aktualisiert, um dem Format von Telefonnummern in diesem Land bzw. dieser Region zu entsprechen.

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

Dies ist eine interessante Idee, die ein potenzielles Lösung aufzeigt für das Problem des Umgangs mit internationalen Telefonnummern. Natürlich müssten Sie das Beispiel erweitern, um das richtige Muster für jedes Land bereitzustellen, was viel Arbeit wäre, und es gäbe immer noch keine narrensichere Garantie, dass die Benutzer ihre Nummern korrekt eingeben.

Es stellt sich die Frage, ob es sich lohnt, all diese Mühe auf der Client-Seite zu machen, anstatt den Benutzer seine Nummer in einem beliebigen Format auf der Client-Seite eingeben zu lassen und dann auf dem Server zu validieren und zu bereinigen. Aber diese Entscheidung liegt bei Ihnen.

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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>, und
        <a href="/de/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>
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

- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
  - [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
  - [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
