---
title: <input type='tel'>
slug: Web/HTML/Element/input/tel
l10n:
  sourceCommit: cd56d512284c5765f115cb002c1be5d23e7281d2
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`tel`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer Telefonnummer zu ermöglichen. Im Gegensatz zu [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url) wird der Eingabewert nicht automatisch auf ein bestimmtes Format überprüft, bevor das Formular gesendet werden kann, da die Formate für Telefonnummern weltweit stark variieren.

{{EmbedInteractiveExample("pages/tabbed/input-tel.html", "tabbed-standard")}}

Obwohl Eingaben vom Typ `tel` funktional identisch mit Standard-`text`-Eingaben sind, erfüllen sie nützliche Zwecke; am offensichtlichsten ist, dass mobile Browser – insbesondere auf Mobiltelefonen – möglicherweise eine spezielle Tastatur anzeigen, die für die Eingabe von Telefonnummern optimiert ist. Die Verwendung eines spezifischen Eingabetypes für Telefonnummern erleichtert auch die Anpassung von Validierungen und die Handhabung von Telefonnummern.

> [!NOTE]
> Browser, die den Typ `tel` nicht unterstützen, fallen auf eine standardmäßige {{HTMLElement("input/text", "text")}}-Eingabe zurück.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der entweder eine Telefonnummer darstellt oder ein leerer String (`""`) ist.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen Telefonnummern-Eingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden in den vorgeschlagenen Optionen nicht berücksichtigt. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Länge der Zeichenkette (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Telefonnummernfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Telefonnummernfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem `minlength`-Wert sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Länge der Zeichenkette (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Telefonnummernfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem vom `maxlength`-Attribut angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Telefonnummerneingabe keine Mindestlänge.

Das Telefonnummernfeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erläutern, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch andere erläuternde Texte in der Nähe hinzufügen.

Siehe [Musterprüfung](#musterprüfung) unten für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp veranschaulicht, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie die Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters außer Kraft zu setzen; siehe [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) per JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit auch festgelegtem `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies genau sein oder auch nicht und sollte nicht auf Genauigkeit verlassen werden; die resultierende Eingabe kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und den ({{cssxref("font")}}-Einstellungen) im Einsatz befindlichen Schriftarten.

Dies setzt _kein_ Limit dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele Zeichen ungefähr zur gleichen Zeit sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Nicht-standardmäßige Attribute

Die folgenden nicht standardmäßigen Attribute stehen den Telefonnummerneingabefeldern zur Verfügung. Als allgemeine Regel sollten Sie diese nur verwenden, wenn es sich nicht vermeiden lässt.

### autocorrect

Eine Safari-Erweiterung, das `autocorrect`-Attribut ist ein String, der angibt, ob die automatische Korrektur aktiviert werden soll, während der Benutzer dieses Feld bearbeitet. Erlaubte Werte sind:

- `on`
  - : Aktivieren Sie die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textersetzungen, sofern konfiguriert.
- `off`
  - : Deaktiviert die automatische Korrektur und Textersetzungen.

## Verwendung von `tel`-Eingaben

Telefonnummern sind eine sehr häufig gesammelte Art von Daten im Web. Wenn Sie beispielsweise eine Registrierungs- oder E-Commerce-Website erstellen, müssen Sie wahrscheinlich den Benutzer um eine Telefonnummer bitten, sei es aus geschäftlichen Gründen oder für Notfallkontakte. Angesichts der häufig eingetragenen Telefonnummern ist es bedauerlich, dass eine „Einheitsgröße passt allen“ Lösung für die Validierung von Telefonnummern nicht praktikabel ist.

Glücklicherweise können Sie die Anforderungen Ihrer eigenen Website berücksichtigen und selbst ein angemessenes Validierungsniveau implementieren. Siehe [Validierung](#validierung) unten für Details.

### Benutzerdefinierte Tastaturen

Einer der Hauptvorteile von `<input type="tel">` ist, dass es mobile Browser veranlasst, eine spezielle Tastatur zur Eingabe von Telefonnummern anzuzeigen. Zum Beispiel sehen so die Tastaturen auf einigen Geräten aus.

| Firefox für Android                                       | WebKit iOS (Safari/Chrome/Firefox)                               |
| --------------------------------------------------------- | ---------------------------------------------------------------- |
| ![Firefox für Android Bildschirmfoto](fx-android-tel.png) | ![Firefox für iOS Bildschirmfoto](iphone-tel-keyboard-50pct.png) |

### Eine einfache Tel-Eingabe

In ihrer einfachsten Form kann eine Tel-Eingabe so implementiert werden:

```html
<label for="telNo">Phone number:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{ EmbedLiveSample('A_simple_tel_input', 600, 40) }}

Hier passiert nichts Magisches. Wenn sie an den Server gesendet wird, würde die obige Eingabedaten als `telNo=+12125553151` dargestellt werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis zu bieten, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form zeigt, die der `value` annehmen sollte, indem er ein Beispiel für einen gültigen Wert präsentiert, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `tel`-Eingabe mit dem Platzhalter `123-4567-8901`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input id="telNo" name="telNo" type="tel" placeholder="123-4567-8901" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabengröße

Sie können nicht nur die physische Länge der Eingabebox steuern, sondern auch die Mindest- und Höchstlänge, die für den eingegebenen Text zulässig ist.

#### Physische Größe des Eingabeelements

Die physische Größe der Eingabebox kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die die Eingabebox gleichzeitig anzeigen kann. In diesem Beispiel ist das `tel`-Bearbeitungsfeld beispielsweise 20 Zeichen breit:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

Die `size` ist getrennt von der Längenbegrenzung der eingegebenen Telefonnummer. Sie können eine Mindestlänge in Zeichen für die eingegebene Telefonnummer mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; ebenso verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen Telefonnummer festzulegen.

Das folgende Beispiel erstellt ein 20 Zeichen breites Telefonnummerneingabefeld, das erfordert, dass der Inhalt nicht kürzer als 9 Zeichen und nicht länger als 14 Zeichen ist.

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
> Die oben genannten Attribute beeinflussen die [Validierung](#validierung) — die Eingaben des obigen Beispiels werden als ungültig gewertet, wenn die Länge des Wertes weniger als 9 Zeichen oder mehr als 14 Zeichen beträgt. Die meisten Browser lassen Sie nicht einmal einen Wert über die maximal zulässige Länge eingeben.

### Voreingestellte Optionen bereitstellen

#### Bereitstellung eines einzelnen Standards mit dem value-Attribut

Wie immer können Sie einen Standardwert für ein `tel`-Eingabefeld angeben, indem Sie dessen [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut setzen:

```html
<input id="telNo" name="telNo" type="tel" value="333-4444-4444" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschlag von Werten

Gehen Sie einen Schritt weiter und bieten Sie eine Liste von Standard-Telefonnummernwerten an, aus denen der Benutzer auswählen kann. Verwenden Sie dazu das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, häufiger verwendete Telefonnummern schneller auszuwählen. Dies bietet auch Hinweise auf [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}}-Elements an, das wiederum eines oder mehrere {{HTMLElement("option")}}-Elemente pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das Telefonnummerneingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s bietet der Browser die angegebenen Werte als potenzielle Werte für die Telefonnummer an; dies wird typischerweise als Popup- oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von Browser zu Browser variieren kann, zeigt typischerweise das Klicken in das Bearbeitungsfeld ein Dropdown-Menü mit den vorgeschlagenen Telefonnummern. Wenn der Benutzer tippt, wird die Liste angepasst, um nur noch gefilterte passende Werte anzuzeigen. Jedes getippte Zeichen reduziert die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

Hier ist ein Screenshot, wie das aussehen könnte:

![Ein Eingabefeld hat den Fokus mit einem blauen Fokusring. Die Eingabe hat ein Dropdown-Menü, das vier Telefonnummern zeigt, die der Benutzer auswählen kann.](phone-number-with-options.png)

## Validierung

Wie bereits angesprochen, ist es ziemlich schwierig, eine universelle clientseitige Validierungslösung für Telefonnummern anzubieten. Was können wir also tun? Lassen Sie uns einige Optionen in Betracht ziehen.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind, bevor sie in die Datenbank übernommen werden. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte ein Desaster passieren, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Telefonnummern erforderlich machen

Sie können es so einrichten, dass eine leere Eingabe ungültig ist und nicht an den Server gesendet wird, indem Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden. Beispielhaft verwenden wir folgenden HTML-Code:

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

Und fügen das folgende CSS hinzu, um gültige Eingaben mit einem Häkchen und ungültige Eingaben mit einem Kreuz zu markieren:

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

Die Ausgabe sieht dann so aus:

{{EmbedLiveSample("Making_telephone_numbers_required", 700, 70)}}

### Musterprüfung

Wenn Sie die eingegebenen Nummern weiter einschränken möchten, damit sie auch einem bestimmten Muster entsprechen müssen, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, das als Wert einen {{Glossary("regular_expression", "regulären Ausdruck")}} annimmt, dem die eingegebenen Werte entsprechen müssen.

In diesem Beispiel verwenden wir dasselbe CSS wie zuvor, aber unser HTML wird folgendermaßen geändert:

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

Beachten Sie, dass der eingegebene Wert als ungültig gemeldet wird, es sei denn, das Muster xxx-xxx-xxxx wird eingehalten; Beispielsweise wird 41-323-421 nicht akzeptiert. Auch 800-MDN-ROCKS wird nicht akzeptiert. Allerdings wird 865-555-6502 akzeptiert. Dieses spezielle Muster ist offensichtlich nur für bestimmte Lokale nützlich – in einer echten Anwendung müssten Sie wahrscheinlich das verwendete Muster je nach Lokal des Benutzers variieren.

## Beispiele

In diesem Beispiel präsentieren wir eine einfache Benutzeroberfläche mit einem {{htmlelement("select")}}-Element, das dem Benutzer ermöglicht, das Land auszuwählen, in dem er sich befindet, und einer Reihe von `<input type="tel">`-Elementen, um jeden Teil der Telefonnummer einzugeben; es gibt keinen Grund, warum Sie nicht mehrere `tel`-Eingaben haben können.

Jede Eingabe hat ein [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut, um einen Hinweis für sehende Benutzer zu geben, was eingegeben werden soll, ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern), um eine bestimmte Zeichenanzahl für den gewünschten Abschnitt zu erzwingen, und ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut, um einen Hinweis für Nutzer von Screenreadern zu enthalten, was eingegeben werden soll.

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

Das JavaScript ist relativ einfach — es enthält einen [`onchange`](/de/docs/Web/API/HTMLElement/change_event)-Ereignishandler, der beim Ändern des `<select>`-Werts das `pattern`, den `placeholder` und das `aria-label` des `<input>`-Elements aktualisiert, um das Format der Telefonnummern in diesem Land/Gebiet zu erfüllen.

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

Das Ergebnis sieht so aus:

{{EmbedLiveSample('Examples', 600, 140)}}

Dies ist eine interessante Idee, die eine potenzielle Lösung für das Problem des Umgangs mit internationalen Telefonnummern aufzeigt. Sie müssten natürlich das Beispiel erweitern, um das korrekte Pattern möglicherweise für jedes Land bereitzustellen, was viel Arbeit wäre, und es würde immer noch keine 100%ige Garantie dafür geben, dass die Benutzer ihre Nummern korrekt eingeben.

Es stellt sich die Frage, ob es die ganze Mühe auf der Client-Seite wert ist, wenn Sie dem Benutzer einfach erlauben könnten, seine Nummer in jedem gewünschten Format auf der Client-Seite einzugeben und sie dann auf dem Server zu validieren und zu bereinigen. Aber diese Wahl liegt bei Ihnen.

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
