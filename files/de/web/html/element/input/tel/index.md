---
title: <input type="tel">
slug: Web/HTML/Element/input/tel
l10n:
  sourceCommit: 709d3a56661f895e5b0a67ff969e381d503ddd45
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`tel`** werden verwendet, um Benutzern das Eingeben und Bearbeiten von Telefonnummern zu ermöglichen. Im Gegensatz zu [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url) wird der Eingabewert nicht automatisch auf ein bestimmtes Format validiert, bevor das Formular gesendet werden kann, da sich Telefonnummernformate weltweit stark unterscheiden.

{{EmbedInteractiveExample("pages/tabbed/input-tel.html", "tabbed-standard")}}

Obwohl Eingaben des Typs `tel` funktional identisch mit normalen `text`-Eingaben sind, haben sie nützliche Zwecke; der am schnellsten ersichtliche ist, dass mobile Browser – insbesondere auf Mobiltelefonen – möglicherweise ein angepasstes Tastenfeld anzeigen, das für die Eingabe von Telefonnummern optimiert ist. Die Verwendung eines spezifischen Eingabetypes für Telefonnummern erleichtert zudem die Hinzufügung benutzerdefinierter Validierungen und die Handhabung von Telefonnummern.

> [!NOTE]
> Browser, die den Typ `tel` nicht unterstützen, fallen auf eine standardmäßige {{HTMLElement("input/text", "text")}}-Eingabe zurück.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der entweder eine Telefonnummer darstellt oder ein leerer String (`""`) ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Telefonnummerneingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributes ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte zur Vorschlagung für diese Eingabe. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Stringlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Telefonnummernfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben wird oder ein ungültiger Wert angegeben wird, hat das Telefonnummernfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes mehr als `maxlength` UTF-16-Code-Einheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Stringlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Telefonnummernfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben wird oder ein ungültiger Wert angegeben wird, hat die Telefonnummerneingabe keine Mindestlänge.

Das Telefonnummernfeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16-Code-Einheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) des Eingabefeldes erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Code-Punkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext herum angegeben werden.

Falls das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt sein müssen, um das Muster zu entsprechen. Sie sollten auch andere erklärende Texte in der Nähe platzieren.

Siehe [Muster-Validierung](#muster-validierung) unten für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information in das Feld eingegeben werden soll. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat und der Platzhalter in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-zweiseitige Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie Unicode-Kontrollen für bidirektionalen Text verwendet werden](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, soweit möglich, die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Etiketten](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Ein boolesches Attribut, dessen Vorhandensein bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `Wert` kann jedoch immer noch durch JavaScript-Code direkt durch das Setzen der `value`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein Zahlenwert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da die Zeichenbreiten variieren, kann dies möglicherweise nicht exakt sein und sollte nicht darauf vertraut werden; das resultierende Eingabefeld kann je nach Zeichen und Schriftart ({{cssxref("font")}}-Einstellungen) schmaler oder breiter sein als die angegebene Anzahl von Zeichen.

Dies setzt _keine_ Begrenzung für die Anzahl der Zeichen fest, die der Benutzer in das Feld eingeben kann. Es wird nur angegeben, wie viele Zeichen gleichzeitig ungefähr sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von tel-Eingaben

Telefonnummern sind eine sehr häufig abgefragte Art von Daten im Web. Wenn Sie beispielsweise irgendeine Art von Registrierungs- oder E-Commerce-Site erstellen, müssen Sie wahrscheinlich den Benutzer nach einer Telefonnummer fragen, sei es aus geschäftlichen Gründen oder für den Notfallkontakt. Angesichts der Häufigkeit eingegebener Telefonnummern ist es bedauerlich, dass eine "Einheitslösung für alles" zur Validierung von Telefonnummern nicht praktikabel ist.

Glücklicherweise können Sie die Anforderungen Ihrer eigenen Website berücksichtigen und selbst eine geeignete Validierung umsetzen. Siehe [Validierung](#validierung) unten für Details.

### Benutzerdefinierte Tastaturen

Einer der Hauptvorteile von `<input type="tel">` ist, dass er dazu führt, dass mobile Browser eine spezielle Tastatur zur Eingabe von Telefonnummern anzeigen. Hier sind zum Beispiel, wie die Tastaturen auf einigen Geräten aussehen.

| Firefox für Android                                           | WebKit iOS (Safari/Chrome/Firefox)                                   |
| ------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Bildschirmfoto von Firefox für Android](fx-android-tel.png) | ![Bildschirmfoto von Firefox für iOS](iphone-tel-keyboard-50pct.png) |

### Eine einfache tel-Eingabe

In seiner grundlegendsten Form kann eine tel-Eingabe wie folgt implementiert werden:

```html
<label for="telNo">Phone number:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{ EmbedLiveSample('A_simple_tel_input', 600, 40) }}

Hier passiert nichts Magisches. Wenn das oben stehende Eingabefeld an den Server gesendet wird, würde die Eingabedaten beispielsweise als `telNo=+12125553151` dargestellt werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Design der Seite keine beschreibenden Etiketten für jedes {{HTMLElement("input")}}-Element bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form demonstriert, die der `Wert` haben sollte, indem er ein Beispiel eines gültigen Werts anzeigt, das im Bearbeitungsfeld angezeigt wird, wenn der `Wert` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `tel`-Eingabe mit dem Platzhalter `123-4567-8901`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input id="telNo" name="telNo" type="tel" placeholder="123-4567-8901" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Kontrolle der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefelds, sondern auch die minimal und maximal zulässigen Längen für den Eingabetext selbst steuern.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie angeben, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `tel`-Bearbeitungsfeld beispielsweise 20 Zeichen breit:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwertes

Die `size` ist unabhängig von der Längenbegrenzung für die eingegebene Telefonnummer. Sie können eine Mindestlänge, in Zeichen, für die eingegebene Telefonnummer mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut festlegen; ebenso verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen Telefonnummer festzulegen.

Das folgende Beispiel erstellt ein 20 Zeichen breites Telefonnummerneingabefeld, das verlangt, dass der Inhalt nicht kürzer als 9 Zeichen und nicht länger als 14 Zeichen ist.

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
> Die oben genannten Attribute wirken sich auf die [Validierung](#validierung) aus – die Eingaben im obigen Beispiel werden als ungültig gewertet, wenn die Länge des Wertes weniger als 9 Zeichen oder mehr als 14 Zeichen beträgt. Die meisten Browser lassen Sie ohnehin keinen Wert über der maximalen Länge eingeben.

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mithilfe des Wertattributs

Wie immer können Sie einen Standardwert für ein `tel`-Eingabefeld bereitstellen, indem Sie dessen [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut festlegen:

```html
<input id="telNo" name="telNo" type="tel" value="333-4444-4444" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschlagen von Werten

Einen Schritt weiter gehend können Sie eine Liste von Standard-Telefonnummernwerten angeben, aus denen der Benutzer auswählen kann. Verwenden Sie hierzu das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, häufig verwendete Telefonnummern schneller auszuwählen. Dies bietet auch Hinweise zur [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}}-Elements an, das seinerseits ein {{HTMLElement("option")}}-Element für jeden vorgeschlagenen Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das Telefonnummerneingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle bietet der Browser die angegebenen Werte als potenzielle Werte für die Telefonnummer an; dies wird normalerweise als Popup- oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzeroberfläche von Browser zu Browser variieren kann, wird normalerweise das Klicken in das Bearbeitungsfeld eine Dropdown-Liste der vorgeschlagenen Telefonnummern anzeigen. Dann wird beim Tippen des Benutzers die Liste angepasst, um nur gefilterte übereinstimmende Werte anzuzeigen. Jedes getippte Zeichen engt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

Hier ist ein Screenshot, wie das aussehen könnte:

![Ein Eingabefeld hat den Fokus mit einem blauen Fokusring. Das Eingabefeld hat ein Dropdown-Menü, das vier Telefonnummern zeigt, die der Benutzer auswählen kann.](phone-number-with-options.png)

## Validierung

Wie bereits erwähnt, ist es ziemlich schwierig, eine universelle clientseitige Validierungslösung für Telefonnummern bereitzustellen. Was können wir also tun? Lassen Sie uns einige Optionen betrachten.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben, bevor sie in die Datenbank gelangen. Es ist viel zu einfach, Änderungen am HTML vorzunehmen, die es ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML komplett umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte ein Desaster eintreten, wenn falsch formatierte Daten (oder zu große Daten, falscher Typ usw.) in Ihre Datenbank eingegeben werden.

### Telefonnummern erforderlich machen

Sie können dafür sorgen, dass eine leere Eingabe ungültig ist und nicht an den Server gesendet wird, indem Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden. Verwenden wir zum Beispiel diesen HTML-Code:

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

Und fügen wir den folgenden CSS-Code hinzu, um gültige Einträge mit einem Häkchen und ungültige Einträge mit einem Kreuz zu markieren:

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

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Making_telephone_numbers_required", 700, 70)}}

### Muster-Validierung

Wenn Sie eingegebene Nummern weiter einschränken wollen, sodass sie auch einem bestimmten Muster entsprechen müssen, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, das als Wert einen {{Glossary("regular_expression", "regulären Ausdruck")}} nimmt, dem eingegebene Werte entsprechen müssen.

In diesem Beispiel verwenden wir dasselbe CSS wie zuvor, aber unser HTML ist geändert, um so auszusehen:

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

Beachten Sie, wie der eingegangene Wert als ungültig gemeldet wird, es sei denn, das Muster xxx-xxx-xxxx wird eingehalten; beispielsweise wird 41-323-421 nicht akzeptiert. Auch 800-MDN-ROCKS nicht. Allerdings wird 865-555-6502 akzeptiert. Dieses spezielle Muster ist offensichtlich nur für bestimmte Regionen nützlich – in einer realen Anwendung müssten Sie wahrscheinlich das Muster je nach Region des Benutzers variieren.

## Beispiele

In diesem Beispiel präsentieren wir eine einfache Schnittstelle mit einem {{htmlelement("select")}}-Element, das den Benutzer auswählen lässt, in welchem Land er sich befindet, und einer Reihe von `<input type="tel">`-Elementen, die ihm ermöglichen, jeden Teil seiner Telefonnummer einzugeben; es gibt keinen Grund, warum Sie nicht mehrere `tel`-Eingaben haben können.

Jede Eingabe besitzt ein [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut, um den sehenden Benutzern einen Hinweis zu geben, was eingegeben werden soll, ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern), um eine bestimmte Anzahl von Zeichen für den gewünschten Abschnitt durchzusetzen, und ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut, das einen Hinweis für Screenreader-Benutzer enthält, was eingegeben werden soll.

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

Das JavaScript ist relativ einfach – es enthält einen [`onchange`](/de/docs/Web/API/HTMLElement/change_event)-Ereignishandler, der bei der Änderung des `<select>`-Werts das `pattern`, `placeholder` und `aria-label` des `<input>`-Elements aktualisiert, um das Format der Telefonnummern in diesem Land/Gebiet zu berücksichtigen.

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

Dies ist eine interessante Idee, die eine potenzielle Lösung für das Problem des Umgangs mit internationalen Telefonnummern zeigt. Sie müssten das Beispiel natürlich erweitern, um das korrekte Muster für potenziell jedes Land bereitzustellen, was viel Arbeit bedeuten würde, und es gäbe trotzdem keine hundertprozentige Garantie dafür, dass die Benutzer ihre Nummern korrekt eingeben.

Es lässt Sie darüber nachdenken, ob es sich lohnt, all diese Mühe auf der Client-Seite auf sich zu nehmen, wenn Sie den Benutzer seine Nummer im beliebigen Format auf der Client-Seite eingeben lassen und sie dann auf dem Server validieren und bereinigen könnten. Aber diese Entscheidung liegt bei Ihnen.

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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
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

- [Leitfaden zu HTML-Formularen](/de/docs/Learn/Forms)
- {{HTMLElement("input")}}
  - [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
  - [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
