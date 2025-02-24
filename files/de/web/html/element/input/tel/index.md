---
title: <input type="tel">
slug: Web/HTML/Element/input/tel
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`tel`** werden verwendet, um den Benutzer eine Telefonnummer eingeben und bearbeiten zu lassen. Im Gegensatz zu [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url) wird der Eingabewert nicht automatisch auf ein bestimmtes Format validiert, bevor das Formular gesendet werden kann, da sich Telefonnummernformate weltweit stark unterscheiden.

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

Obwohl Eingaben vom Typ `tel` funktional identisch mit Standard-`text`-Eingaben sind, haben sie nützliche Zwecke; der offensichtlichste ist, dass mobile Browser — insbesondere auf Mobiltelefonen — möglicherweise ein benutzerdefiniertes Tastenfeld anzeigen, das für die Eingabe von Telefonnummern optimiert ist. Die Verwendung eines speziellen Eingabetypes für Telefonnummern erleichtert auch das Hinzufügen benutzerdefinierter Validierung und Handhabung von Telefonnummern.

> [!NOTE]
> Browser, die den Typ `tel` nicht unterstützen, fallen auf eine Standard-{{HTMLElement("input/text", "text")}}-Eingabe zurück.

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Element/input#value) des {{HTMLElement("input")}}-Elements enthält einen String, der entweder eine Telefonnummer darstellt oder ein leerer String (`""`) ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Telefonnummerneingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das im selben Dokument enthalten ist. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste wählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Telefonnummerfeld eingeben kann. Dies muss eine ganzzahlige Zahl von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Telefonnummerfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des Textes, der in das Feld eingegeben wird, länger als `maxlength` UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewandt, wenn der Benutzer den Wert ändert.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Telefonnummerfeld eingeben kann. Dies muss eine nicht-negative Ganzzahl sein, die kleiner als oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Telefonnummerneingabe keine Mindestlänge.

Das Telefonnummerfeld schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des Textes, der in das Feld eingegeben wird, kürzer als `minlength` UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewandt, wenn der Benutzer den Wert ändert.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Folge von Unicode-Codepunkten anstelle von {{Glossary("ASCII", "ASCII")}} behandelt wird. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Siehe [Musterüberprüfung](#musterüberprüfung) unten für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die die erwartete Art der Daten darstellt, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Placeholder jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie das Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Placeholder zu überschreiben; siehe [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Ein Boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf verlassen werden; die resultierende Eingabe kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen in Verwendung).

Dies setzt _keine_ Begrenzung darauf, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt lediglich an, wie viele Zeichen etwa gleichzeitig sichtbar sein können. Um ein oberes Limit der Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von tel-Eingaben

Telefonnummern sind eine sehr häufig gesammelte Art von Daten im Web. Wenn Sie beispielsweise eine Art Registrierung oder E-Commerce-Seite erstellen, müssen Sie wahrscheinlich den Benutzer nach einer Telefonnummer fragen, sei es aus geschäftlichen Gründen oder für Notfallkontaktzwecke. Angesichts der häufig eingegebenen Telefonnummern ist es bedauerlich, dass eine „Einheitsgröße passt für alle“-Lösung zur Validierung von Telefonnummern nicht praktisch ist.

Glücklicherweise können Sie die Anforderungen Ihrer eigenen Website berücksichtigen und eine geeignete Ebene der Validierung selbst implementieren. Siehe [Validierung](#validierung) unten für Details.

### Benutzerdefinierte Tastatur

Einer der Hauptvorteile von `<input type="tel">` ist, dass es mobilen Browsern ermöglicht, eine spezielle Tastatur zum Eingeben von Telefonnummern anzuzeigen. Hier sind beispielsweise die Tastaturen auf ein paar Geräten dargestellt.

| Firefox für Android                                   | WebKit iOS (Safari/Chrome/Firefox)                           |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| ![Firefox für Android Screenshot](fx-android-tel.png) | ![Firefox für iOS Screenshot](iphone-tel-keyboard-50pct.png) |

### Eine grundlegende tel-Eingabe

In seiner grundlegendsten Form kann eine tel-Eingabe wie folgt implementiert werden:

```html
<label for="telNo">Phone number:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{EmbedLiveSample('A_basic_tel_input', 600, 40)}}

Es passiert hier nichts Magisches. Wenn an den Server gesendet, wären die Daten der oben genannten Eingabe beispielsweise als `telNo=+12125553151` repräsentiert.

### Platzhalter

Manchmal ist es hilfreich, einen kontextsensitiven Hinweis zu geben, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form veranschaulicht, die der `value` annehmen sollte, indem er ein Beispiel für einen gültigen Wert präsentiert, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `tel`-Eingabe mit dem Platzhalter `123-4567-8901`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input id="telNo" name="telNo" type="tel" placeholder="123-4567-8901" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefeldes steuern, sondern auch die minimale und maximale erlaubte Länge des eingegebenen Textes selbst.

#### Physische Elementgröße

Die physische Größe des Eingabefelds kann mit dem `size`-Attribut gesteuert werden. Damit können Sie angeben, wie viele Zeichen das Eingabefeld auf einmal anzeigen kann. In diesem Beispiel ist das `tel`-Bearbeitungsfeld 20 Zeichen breit:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{EmbedLiveSample('Physical_input_element_size', 600, 40)}}

#### Elementwertlänge

Die `size` ist separat von der Längenbegrenzung für die eingegebene Telefonnummer. Sie können eine Mindestlänge in Zeichen für die eingegebene Telefonnummer mithilfe des [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attributs angeben; ebenso können Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) verwenden, um die maximale Länge der eingegebenen Telefonnummer festzulegen.

Das folgende Beispiel erstellt ein 20 Zeichen breites Telefonnummer-Eingabefeld, das erfordert, dass der Inhalt nicht kürzer als 9 und nicht länger als 14 Zeichen ist.

```html
<input
  id="telNo"
  name="telNo"
  type="tel"
  size="20"
  minlength="9"
  maxlength="14" />
```

{{EmbedLiveSample("Element_value_length", 600, 40)}}

> [!NOTE]
> Die obigen Attribute beeinflussen die [Validierung](#validierung) — die Eingaben im obigen Beispiel gelten als ungültig, wenn die Länge des Wertes weniger als 9 Zeichen oder mehr als 14 Zeichen beträgt. Die meisten Browser lassen Sie nicht einmal einen Wert über die maximale Länge eingeben.

### Vordefinierte Optionen bereitstellen

#### Eine einzelne Standardoption mit dem value-Attribut bereitstellen

Wie immer können Sie einen Standardwert für eine `tel`-Eingabe durch Festlegen ihres [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs bereitstellen:

```html
<input id="telNo" name="telNo" type="tel" value="333-4444-4444" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Einen Schritt weiter können Sie eine Liste von Standard-Telefonnummerwerten bereitstellen, aus denen der Benutzer auswählen kann. Verwenden Sie dazu das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht ihm jedoch, häufiger verwendete Telefonnummern schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}}-Elements an, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das Telefonnummerneingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s bietet der Browser die angegebenen Werte als mögliche Werte für die Telefonnummer an; dies wird normalerweise als Popup- oder Dropdown-Menü mit den Vorschlägen angezeigt. Während die Benutzererfahrung variieren kann, präsentiert typischerweise das Klicken in das Bearbeitungsfeld ein Dropdown mit den vorgeschlagenen Telefonnummern. Wenn der Benutzer tippt, wird die Liste angepasst, um nur gefilterte passende Werte anzuzeigen. Jeder eingegebene Buchstabe verkleinert die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

Hier ist ein Screenshot, wie das aussehen könnte:

![Ein Eingabefeld hat den Fokus mit einem blauen Fokusring. Die Eingabe hat ein Dropdown-Menü, das vier Telefonnummern anzeigt, die der Benutzer auswählen kann.](phone-number-with-options.png)

## Validierung

Wie bereits erwähnt, ist es ziemlich schwierig, eine „Einheitsgröße passt für alle“-Lösung zur clientseitigen Validierung für Telefonnummern bereitzustellen. Was können wir also tun? Betrachten wir einige Optionen.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im korrekten Format sind, bevor sie in die Datenbank aufgenommen werden dürfen. Es ist viel zu einfach für jemanden, das HTML so zu ändern, dass er die Validierung umgehen oder sie ganz entfernen kann. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu Katastrophen kommen, wenn fehlerhaft formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind, und so weiter) in Ihre Datenbank eingegeben werden.

### Telefonnummern erforderlich machen

Sie können es so einrichten, dass eine leere Eingabe ungültig ist und nicht an den Server gesendet wird, indem Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden. Verwenden wir hierzu folgendes HTML:

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

Und fügen Sie das folgende CSS hinzu, um gültige Einträge mit einem Häkchen und ungültige Einträge mit einem Kreuz hervorzuheben:

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

### Musterüberprüfung

Wenn Sie eingegebene Nummern weiter einschränken möchten, sodass sie auch einem bestimmten Muster entsprechen müssen, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, das als Wert einen {{Glossary("regular_expression", "regulären Ausdruck")}} akzeptiert, den die eingegebenen Werte erfüllen müssen.

In diesem Beispiel verwenden wir dasselbe CSS wie zuvor, aber unser HTML wird geändert, um so auszusehen:

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

Beachten Sie, wie der eingegebene Wert als ungültig gemeldet wird, es sei denn, das Muster xxx-xxx-xxxx wird eingehalten; zum Beispiel wird 41-323-421 nicht akzeptiert. Auch 800-MDN-ROCKS nicht. 865-555-6502 hingegen wird akzeptiert. Dieses spezifische Muster ist offensichtlich nur für bestimmte Regionen nützlich — in einer echten Anwendung müssten Sie wahrscheinlich das verwendete Muster je nach dem Standort des Benutzers variieren.

## Beispiele

In diesem Beispiel präsentieren wir ein {{htmlelement("select")}}-Element, das den Benutzer auswählen lässt, in welchem Land er sich befindet, und eine Reihe von `<input type="tel">`-Elementen, die ihm erlauben, jeden Teil seiner Telefonnummer einzugeben; es gibt keinen Grund, warum Sie nicht mehrere `tel`-Eingaben haben können.

Jede Eingabe hat ein [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut, um Sehenden einen Hinweis zu geben, was sie eingeben sollen, ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern), um eine bestimmte Anzahl Zeichen für den gewünschten Abschnitt zu erzwingen, und ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut, das einen Hinweis enthält, der sehbehinderten Benutzern vorgelesen wird, was sie eingeben sollen.

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

Das JavaScript enthält einen [`onchange`](/de/docs/Web/API/HTMLElement/change_event)-Ereignishandler, der beim Ändern des `<select>`-Wertes das `pattern`, den `placeholder` und das `aria-label` des `<input>`-Elements anpasst, um dem Format der Telefonnummern in diesem Land oder Gebiet gerecht zu werden.

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

Dies ist eine interessante Idee, die einen möglichen Lösungsansatz für das Problem der Handhabung internationaler Telefonnummern zeigt. Sie müssten das Beispiel natürlich erweitern, um das richtige Muster für potenziell jedes Land bereitzustellen, was viel Arbeit wäre, und es gäbe immer noch keine narrensichere Garantie, dass die Benutzer ihre Nummern korrekt eingeben.

Es lässt einen überlegen, ob es sich lohnt, all diese Mühe auf der Clientseite zu machen, wenn man den Benutzer seine Nummer einfach in einem beliebigen Format auf der Clientseite eingeben lassen könnte und dann auf der Serverseite validiert und bereinigt. Aber diese Entscheidung müssen Sie treffen.

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
        <a href="/de/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a> und
        <a href="/de/docs/Web/HTML/Element/input#size"><code>size</code></a>
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

- [HTML-Formular-Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
  - [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
  - [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)
