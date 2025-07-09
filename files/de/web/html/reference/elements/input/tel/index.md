---
title: <input type="tel">
slug: Web/HTML/Reference/Elements/input/tel
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente vom Typ **`tel`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer Telefonnummer zu ermöglichen. Im Gegensatz zu [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url) wird der Eingabewert nicht automatisch auf ein bestimmtes Format geprüft, bevor das Formular gesendet werden kann, da sich die Formate für Telefonnummern weltweit stark unterscheiden.

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

Obwohl Eingaben vom Typ `tel` funktional identisch mit Standard-`text` Eingaben sind, erfüllen sie dennoch nützliche Zwecke. Am offensichtlichsten ist, dass mobile Browser — insbesondere auf Mobiltelefonen — möglicherweise eine spezielle Tastatur für die Eingabe von Telefonnummern anzeigen. Die Verwendung eines speziellen Eingabetyps für Telefonnummern erleichtert auch die Implementierung benutzerdefinierter Validierungen und die Verarbeitung von Telefonnummern.

> [!NOTE]
> Browser, die den Typ `tel` nicht unterstützen, verwenden stattdessen ein Standard-{{HTMLElement("input/text", "text")}}-Eingabefeld.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der entweder eine Telefonnummer darstellt oder ein Leerstring ist (`""`).

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Telefonnummerneingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Telefonnummernfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben oder ein ungültiger Wert angegeben wird, hat das Telefonnummernfeld keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes größer ist als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}. Die Einschränkungsüberprüfung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Telefonnummernfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben wird, hat das Telefonnummernfeld keine Mindestlänge.

Das Telefonnummernfeld wird die [Einschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kleiner ist als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}. Die Einschränkungsüberprüfung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe für die [Einschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllen muss. Es muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie es in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als eine Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Weitere Informationen und ein Beispiel finden Sie unten unter [Pattern validation](#muster-validierung).

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp verdeutlicht, anstatt einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Zeichen für die bidirektionale Algorithmenformatierung verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für bidi Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels).

### readonly

Ein boolesches Attribut, welches bei Vorhandensein bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin direkt durch JavaScript-Code, der die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Einfluss auf Eingaben mit ebenfalls spezifiziertem `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen weit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da sich die Zeichenbreiten unterscheiden, muss dies nicht exakt sein und sollte nicht darauf verlassen werden, dass es so ist; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen, die verwendet werden).

Dies setzt _kein_ Limit, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt lediglich an, wie viele ungefähr gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von tel-Eingaben

Telefonnummern sind eine sehr häufig erfasste Datenform im Web. Wenn Sie eine Art von Registrierungs- oder E-Commerce-Website erstellen, müssen Sie wahrscheinlich den Benutzer nach einer Telefonnummer fragen, sei es zu geschäftlichen Zwecken oder für Notfallkontaktzwecke. Angesichts der häufig eingegebenen Telefonnummern ist es bedauerlich, dass eine "One size fits all"-Lösung zur Validierung von Telefonnummern nicht praktikabel ist.

Zum Glück können Sie die Anforderungen Ihrer eigenen Website berücksichtigen und ein angemessenes Maß an Validierung selbst implementieren. Siehe [Validierung](#validierung) unten für Details.

### Benutzerdefinierte Tastaturen

Einer der Hauptvorteile von `<input type="tel">` ist, dass es mobile Browser dazu veranlasst, eine spezielle Tastatur für die Eingabe von Telefonnummern anzuzeigen. Zum Beispiel sehen hier die Tastenfelder auf ein paar Geräten so aus.

| Firefox für Android                                       | WebKit iOS (Safari/Chrome/Firefox)                               |
| --------------------------------------------------------- | ---------------------------------------------------------------- |
| ![Screenshot von Firefox für Android](fx-android-tel.png) | ![Screenshot von Firefox für iOS](iphone-tel-keyboard-50pct.png) |

### Ein einfaches tel-Eingabefeld

In seiner einfachsten Form kann ein tel-Eingabefeld so implementiert werden:

```html
<label for="telNo">Phone number:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{ EmbedLiveSample('A_basic_tel_input', 600, 40) }}

Hier passiert nichts Magisches. Beim Senden an den Server würde die Eingabedaten des obigen Eingabefelds beispielsweise als `telNo=+12125553151` dargestellt.

### Platzhalter

Manchmal ist es hilfreich, einen Hinweis im Kontext zu bieten, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` zeigt, indem ein Beispiel für einen gültigen Wert dargestellt wird, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier sehen Sie eine `tel`-Eingabe mit dem Platzhalter `123-4567-8901`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input id="telNo" name="telNo" type="tel" placeholder="123-4567-8901" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge der Eingabebox steuern, sondern auch die minimalen und maximalen Längen, die für den eingegebenen Text selbst erlaubt sind.

#### Physische Eingabeelementgröße

Die physische Größe der Eingabebox kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die die Eingabebox auf einmal anzeigen kann. In diesem Beispiel ist zum Beispiel die `tel`-Eingabebox 20 Zeichen breit:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwertlänge

Die `size` ist separat von der Längenbegrenzung der eingegebenen Telefonnummer. Sie können eine Mindestlänge in Zeichen für die eingegebene Telefonnummer mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; verwenden Sie ähnlich [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen Telefonnummer festzulegen.

Das folgende Beispiel erstellt eine 20 Zeichen breite Telefonnummerneingabebox, die verlangt, dass der Inhalt nicht kürzer als 9 Zeichen und nicht länger als 14 Zeichen ist.

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
> Die obigen Attribute beeinflussen die [Validierung](#validierung) — die Eingaben im obigen Beispiel werden als ungültig gewertet, wenn die Länge des Werts weniger als 9 oder mehr als 14 Zeichen beträgt. Die meisten Browser lassen Sie nicht einmal über die maximal erlaubte Länge hinaus Eingaben machen.

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standardwerts mit dem value-Attribut

Wie üblich können Sie einen Standardwert für ein `tel`-Eingabefeld angeben, indem Sie sein [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut setzen:

```html
<input id="telNo" name="telNo" type="tel" value="333-4444-4444" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Angebot von vorgeschlagenen Werten

Einen Schritt weiter können Sie eine Liste von Standardtelefonnummern anbieten, aus denen der Benutzer auswählen kann. Verwenden Sie dazu das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, schneller häufig verwendete Telefonnummern auszuwählen. Dies bietet auch Hinweise auf [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das Attribut `list` gibt die ID eines {{HTMLElement("datalist")}}-Elements an, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; jedes `option`'s `value` ist der entsprechende vorgeschlagene Wert für das Telefonnummerneingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle wird der Browser die angegebenen Werte als mögliche Werte für die Telefonnummer vorschlagen; dies wird in der Regel als Popup- oder Dropdown-Menü mit den Vorschlägen dargestellt. Während sich die spezifische Benutzererfahrung von einem Browser zum anderen unterscheiden kann, wird typischerweise durch das Klicken in das Bearbeitungsfeld ein Dropdown mit den vorgeschlagenen Telefonnummern angezeigt. Dann, während der Benutzer tippt, wird die Liste so angepasst, dass nur passende Werte angezeigt werden. Jeder getippte Buchstabe schränkt die Liste solange ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

Hier ein Screenshot, wie das aussehen könnte:

![Ein Eingabefeld ist fokussiert mit einem blauen Fokusring. Die Eingabe hat ein Dropdown-Menü, das vier Telefonnummern zeigt, die der Benutzer auswählen kann.](phone-number-with-options.png)

## Validierung

Wie bereits angedeutet, ist es ziemlich schwierig, eine All-in-One-Client-seitige Validierungslösung für Telefonnummern bereitzustellen. Was können wir also tun? Lassen Sie uns einige Optionen in Betracht ziehen.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im korrekten Format sind, bevor sie in die Datenbank aufgenommen werden dürfen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einer Katastrophe kommen, wenn falsch formatierte Daten (oder Daten, die zu groß, vom falschen Typ usw. sind) in Ihre Datenbank eingegeben werden.

### Telefonnummern erforderlich machen

Sie können es so einrichten, dass eine leere Eingabe ungültig ist und nicht an den Server gesendet wird, indem Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden. Beispielsweise lassen Sie uns dieses HTML verwenden:

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

Und lassen Sie uns das folgende CSS hinzufügen, um gültige Einträge mit einem Häkchen und ungültige Einträge mit einem Kreuz hervorzuheben:

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

Die Ausgabe sieht so aus:

{{EmbedLiveSample("Making_telephone_numbers_required", 700, 70)}}

### Muster-Validierung

Wenn Sie weitere Einschränkungen auf die eingegebenen Zahlen anwenden möchten, sodass sie auch einem bestimmten Muster entsprechen müssen, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, das als Wert einen {{Glossary("regular_expression", "regulären Ausdruck")}} übernimmt, dem die eingegebenen Werte entsprechen müssen.

In diesem Beispiel verwenden wir das gleiche CSS wie zuvor, aber unser HTML sieht so aus:

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

Beachten Sie, wie der eingegebene Wert als ungültig gemeldet wird, es sei denn, das Muster xxx-xxx-xxxx wird erfüllt; zum Beispiel wird 41-323-421 nicht akzeptiert. Auch nicht 800-MDN-ROCKS. Allerdings wird 865-555-6502 akzeptiert. Dieses bestimmte Muster ist offensichtlich nur für bestimmte Regionen nützlich — in einer echten Anwendung müssten Sie wahrscheinlich das verwendete Muster je nach Region des Benutzers variieren.

## Beispiele

In diesem Beispiel präsentieren wir ein {{htmlelement("select")}}-Element, das es dem Benutzer ermöglicht, das Land auszuwählen, in dem er sich befindet, und eine Reihe von `<input type="tel">`-Elementen, um ihm zu ermöglichen, jeden Teil seiner Telefonnummer einzugeben; es gibt keinen Grund, warum Sie nicht mehrere `tel`-Eingaben haben können.

Jede Eingabe hat ein [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut, um sehenden Benutzern einen Hinweis darauf zu geben, was sie eingeben sollen, ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern), um eine bestimmte Anzahl von Zeichen für den gewünschten Abschnitt zu erzwingen, und ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, das einen Hinweis enthält, der über einen Bildschirmleser-Benutzer über das Eingabefeld vorgelesen werden soll.

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

Das JavaScript enthält einen [`onchange`](/de/docs/Web/API/HTMLElement/change_event)-Ereignishandler, der beim Ändern des `<select>`-Werts das `pattern`, `placeholder` und `aria-label` des `<input>`-Elements aktualisiert, um dem Telefonnummernformat in diesem Land/dieser Region zu entsprechen.

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

Dies ist eine interessante Idee, die eine mögliche Lösung zur Handhabung internationaler Telefonnummern aufzeigt. Sie müssten das Beispiel natürlich erweitern, um das richtige Muster potenziell für jedes Land bereitzustellen, was eine Menge Arbeit wäre, und es gäbe immer noch keine wasserdichte Garantie, dass die Benutzer ihre Nummern korrekt eingeben würden.

Es lässt Sie fragen, ob es sich lohnt, all diese Mühe auf der Clientseite zu machen, wenn Sie dem Benutzer einfach erlauben könnten, seine Nummer im gewünschten Format auf der Clientseite einzugeben und sie dann auf dem Server zu validieren und zu bereinigen. Aber diese Wahl liegt bei Ihnen.

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

- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
  - [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
  - [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
