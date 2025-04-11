---
title: <input type="tel">
slug: Web/HTML/Reference/Elements/input/tel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`tel`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer Telefonnummer zu ermöglichen. Im Gegensatz zu [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url) wird der Eingabewert nicht automatisch auf ein bestimmtes Format überprüft, bevor das Formular gesendet werden kann, da sich die Formate für Telefonnummern weltweit stark unterscheiden.

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

Obwohl Eingaben vom Typ `tel` funktional identisch mit Standard-`text`-Eingaben sind, haben sie nützliche Zwecke; der offensichtlichste Vorteil ist, dass mobile Browser – besonders auf Mobiltelefonen – möglicherweise eine benutzerdefinierte Tastatur präsentieren, die für die Eingabe von Telefonnummern optimiert ist. Die Verwendung eines bestimmten Eingabetypus für Telefonnummern erleichtert außerdem die eigene Validierung und Verarbeitung von Telefonnummern.

> [!NOTE]
> Browser, die den Typ `tel` nicht unterstützen, fallen auf eine standardmäßige {{HTMLElement("input/text", "text")}}-Eingabe zurück.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die entweder eine Telefonnummer oder eine leere Zeichenkette (`""`) darstellt.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Telefonnummerneingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vorab definierter Werte an, die dem Benutzer zur Auswahl vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vorgegebenen Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das Telefonnummernfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Telefonnummernfeld keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des eingegebenen Textes im Feld mehr als `maxlength` UTF-16 Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das Telefonnummernfeld eingeben kann. Dies muss ein nicht negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Telefonnummerneingabe keine Mindestlänge.

Das Telefonnummernfeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des eingegebenen Textes im Feld weniger als `minlength` UTF-16 Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom Typ {{jsxref("RegExp")}} verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `u`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Keine Schrägstriche sollten um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird komplett ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, der von den meisten Browsern als Tooltip angezeigt wird, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Siehe [Muster-Validierung](#muster-validierung) unten für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, den Platzhalter jedoch in der entgegengesetzten Richtung präsentieren muss, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerungen für Bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch sinnvoll wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Ein logisches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem auch spezifizierten `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, ist dies möglicherweise nicht genau und sollte nicht als exakt angesehen werden; die resultierende Eingabe kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen in Verwendung).

Dies setzt _keine_ Grenze dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr auf einmal sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von tel-Eingaben

Telefonnummern sind eine sehr häufig gesammelte Art von Daten im Web. Wenn Sie beispielsweise eine Art von Registrierungs- oder E-Commerce-Seite erstellen, müssen Sie wahrscheinlich den Benutzer nach einer Telefonnummer fragen, sei es für geschäftliche Zwecke oder für Notfallkontaktzwecke. Angesichts der Häufigkeit, mit der Telefonnummern eingegeben werden, ist es bedauerlich, dass eine „Einheitslösung“ für die Validierung von Telefonnummern nicht praktikabel ist.

Glücklicherweise können Sie die Anforderungen Ihrer eigenen Seite berücksichtigen und selbst eine angemessene Validierungsebene implementieren. Siehe [Validierung](#validierung) unten für Details.

### Benutzerdefinierte Tastaturen

Einer der Hauptvorteile von `<input type="tel">` besteht darin, dass es mobile Browser dazu veranlasst, eine spezielle Tastatur für die Eingabe von Telefonnummern anzuzeigen. Hier sind einige Beispiele, wie die Tastenfelder auf einigen Geräten aussehen:

| Firefox für Android                                  | WebKit iOS (Safari/Chrome/Firefox)                          |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| ![Firefox for Android Bildschirmaufnahme](fx-android-tel.png) | ![Firefox für iOS Bildschirmaufnahme](iphone-tel-keyboard-50pct.png) |

### Eine einfache tel-Eingabe

In ihrer grundlegendsten Form kann eine tel-Eingabe folgendermaßen implementiert werden:

```html
<label for="telNo">Phone number:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{ EmbedLiveSample('A_basic_tel_input', 600, 40) }}

Hier geschieht nichts Magisches. Wenn an den Server gesendet wird, würde das oben stehende Eingabedaten als beispielsweise `telNo=+12125553151` dargestellt werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis zu geben, in welcher Form die Eingabedaten sein sollen. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form demonstriert, die der `value` haben sollte, indem er ein Beispiel für einen gültigen Wert präsentiert, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `tel`-Eingabe mit dem Platzhalter `123-4567-8901`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input id="telNo" name="telNo" type="tel" placeholder="123-4567-8901" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabengröße

Sie können nicht nur die physische Länge des Eingabefelds, sondern auch die Mindest- und Höchstlängen für den Eingabetext selbst steuern.

#### Physische Eingabeelementgröße

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `tel`-Bearbeitungsfeld beispielsweise 20 Zeichen breit:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwertlänge

Die `size` ist unabhängig von der Längenbeschränkung der eingegebenen Telefonnummer. Sie können eine Mindestlänge in Zeichen für die eingegebene Telefonnummer mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen Telefonnummer festzulegen.

Das folgende Beispiel erstellt eine 20 Zeichen breite Telefonnummerneingabefeld, das erfordert, dass der Inhalt nicht kürzer als 9 Zeichen und nicht länger als 14 Zeichen ist.

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
> Die obigen Attribute beeinflussen die [Validierung](#validierung) – die Eingaben im obigen Beispiel werden als ungültig gewertet, wenn die Länge des Wertes weniger als 9 Zeichen oder mehr als 14 beträgt. Die meisten Browser lassen Sie nicht einmal einen Wert eingeben, der über die maximale Länge hinausgeht.

### Vorgabewerte anbieten

#### Einen einzelnen Vorgabewert mit dem value-Attribut bereitstellen

Wie immer können Sie einen Standardwert für ein `tel`-Eingabefeld bereitstellen, indem Sie dessen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut festlegen:

```html
<input id="telNo" name="telNo" type="tel" value="333-4444-4444" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Noch einen Schritt weiter können Sie eine Liste von Standard-Telefonnummernwerten bereitstellen, aus denen der Benutzer auswählen kann. Dazu verwenden Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, gängige Telefonnummern schneller auszuwählen. Dies bietet auch Hinweise für das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}}-Elements an, das jeweils ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das Telefonnummern-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an ihrem Platz wird der Browser die angegebenen Werte als mögliche Werte für die Telefonnummer anbieten; dies wird normalerweise als Popup oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, zeigt ein Klick in das Bearbeitungsfeld typischerweise ein Dropdown-Menü mit den vorgeschlagenen Telefonnummern an. Dann wird die Liste beim Tippen des Benutzers angepasst, um nur gefilterte übereinstimmende Werte anzuzeigen. Jeder eingegebene Buchstabe reduziert die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

Hier ist ein Screenshot, wie das aussehen könnte:

![Ein Eingabefeld hat den Fokus mit einem blauen Fokusring. Die Eingabe hat ein Dropdown-Menü, das vier Telefonnummern zeigt, die der Benutzer auswählen kann.](phone-number-with-options.png)

## Validierung

Wie wir bereits erwähnt haben, ist es ziemlich schwierig, eine Einheitslösung für die clientseitige Validierung von Telefonnummern bereitzustellen. Was können wir also tun? Betrachten wir einige Optionen.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben, bevor sie in die Datenbank gelangen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ usw.) in Ihre Datenbank eingegeben werden.

### Telefonnummern erforderlich machen

Sie können es so machen, dass eine leere Eingabe ungültig ist und nicht an den Server gesendet wird, indem Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden. Zum Beispiel verwenden wir diesen HTML-Code:

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

Und wir fügen das folgende CSS hinzu, um gültige Eingaben mit einem Häkchen und ungültige Eingaben mit einem Kreuz hervorzuheben:

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

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Making_telephone_numbers_required", 700, 70)}}

### Muster-Validierung

Wenn Sie die eingegebenen Nummern weiter einschränken möchten, sodass sie auch einem bestimmten Muster entsprechen müssen, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, das als Wert einen {{Glossary("regular_expression", "regulären Ausdruck")}} nimmt, den eingegebene Werte erfüllen müssen.

In diesem Beispiel verwenden wir dasselbe CSS wie zuvor, aber unser HTML sieht jetzt so aus:

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

Beachten Sie, wie der eingegebene Wert als ungültig gemeldet wird, es sei denn, das Muster xxx-xxx-xxxx wird erfüllt; beispielsweise wird 41-323-421 nicht akzeptiert. Ebenso wenig wie 800-MDN-ROCKS. 865-555-6502 wird jedoch akzeptiert. Dieses bestimmte Muster ist offensichtlich nur für bestimmte Regionen nützlich - in einer realen Anwendung müssten Sie das verwendete Muster wahrscheinlich je nach Region des Benutzers variieren.

## Beispiele

In diesem Beispiel präsentieren wir ein {{htmlelement("select")}}-Element, das dem Benutzer ermöglicht, das Land auszuwählen, in dem er sich befindet, und eine Reihe von `<input type="tel">`-Elementen, um ihm das Eingeben jedes Teils seiner Telefonnummer zu ermöglichen; es gibt keinen Grund, warum Sie nicht mehrere `tel`-Eingaben haben können.

Jede Eingabe hat ein [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut, um einen Hinweis für sehende Benutzer anzuzeigen, was eingegeben werden soll, ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern), um eine bestimmte Anzahl von Zeichen für den gewünschten Abschnitt zu erzwingen, und ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, um einen Hinweis für Screenreader-Benutzer zu enthalten, was eingegeben werden soll.

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

Das JavaScript enthält einen [`onchange`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Handler, der beim Ändern des `<select>`-Werts das `pattern`, den `placeholder` und das `aria-label` des `<input>`-Elements aktualisiert, um dem Format von Telefonnummern in diesem Land/Gebiet zu entsprechen.

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

Das Beispiel sieht so aus:

{{EmbedLiveSample('Examples', 600, 140)}}

Dies ist eine interessante Idee, die ein mögliches Lösungskonzept für das Problem der Behandlung internationaler Telefonnummern zeigt. Sie müssten das Beispiel natürlich erweitern, um das richtige Muster für potenziell jedes Land bereitzustellen, was viel Arbeit wäre, und es gäbe immer noch keine narrensichere Garantie, dass die Benutzer ihre Nummern korrekt eingeben würden.

Es macht Sie überlegen, ob es sich lohnt, all diesen Aufwand auf der Clientseite zu betreiben, wenn Sie dem Benutzer einfach erlauben könnten, seine Nummer in jedem gewünschten Format auf der Clientseite einzugeben und sie dann auf dem Server zu validieren und zu bereinigen. Aber diese Entscheidung liegt bei Ihnen.

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
        Eine Zeichenkette, die eine Telefonnummer repräsentiert, oder
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

- [HTML Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
  - [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
  - [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
