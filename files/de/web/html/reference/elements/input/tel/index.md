---
title: <input type="tel">
slug: Web/HTML/Reference/Elements/input/tel
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`tel`** werden verwendet, um dem Benutzer zu ermöglichen, eine Telefonnummer einzugeben und zu bearbeiten. Im Gegensatz zu [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url) wird der Eingabewert nicht automatisch auf ein bestimmtes Format überprüft, bevor das Formular abgesendet werden kann, da sich die Formate von Telefonnummern weltweit so stark unterscheiden.

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

Obwohl Eingaben vom Typ `tel` funktional identisch zu Standard-`text`-Eingaben sind, haben sie nützliche Verwendungszwecke; der am schnellsten ersichtliche Vorteil ist, dass mobile Browser—besonders auf Mobiltelefonen—möglicherweise eine benutzerdefinierte Tastatur präsentieren, die für die Eingabe von Telefonnummern optimiert ist. Die Verwendung eines spezifischen Eingabetyps für Telefonnummern erleichtert auch die Hinzufügung benutzerdefinierter Validierungen und Handhabungen von Telefonnummern.

> [!NOTE]
> Browser, die den Typ `tel` nicht unterstützen, verwenden standardmäßig eine {{HTMLElement("input/text", "text")}}-Eingabe.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der entweder eine Telefonnummer darstellt oder ein leerer String (`""`) ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Telefonnummerneingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Telefonnummernfeld eingeben kann. Dieser Wert muss eine ganze Zahl von 0 oder höher sein. Wenn keine `maxlength` angegeben oder ein ungültiger Wert angegeben ist, hat das Telefonnummernfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes größer als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Telefonnummernfeld eingeben kann. Dieser Wert muss eine nicht negative ganze Zahl sein, die kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn keine `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat die Telefonnummerneingabe keine Mindestlänge.

Das Telefonnummernfeld wird [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Compilieren des regulären Ausdrucks angegeben, so dass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Um das Mustertext sollten keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht angegeben ist oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollkommen ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text zu spezifizieren, den die meisten Browser als Tooltip anzeigen werden, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Details und ein Beispiel finden Sie unter [Muster-Validierung](#muster-validierung) weiter unten.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information in das Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine bestimmte Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in entgegengesetzter Richtung präsentiert werden muss, können Sie Unicode bidirektionale Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerungen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, das `placeholder`-Attribut zu verwenden, wenn Sie können. Es ist nicht so semantisch sinnvoll wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit angegebenem `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies genauer oder ungenauer sein und sollte nicht darauf verlassen werden, genau zu sein; die resultierende Eingabe kann je nach Zeichen und verwendeter Schriftart ({{cssxref("font")}} Einstellungen in Verwendung) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies legt kein Limit fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele etwa auf einmal gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von 'tel'-Eingaben

Telefonnummern sind ein sehr häufig gesammelter Datentyp im Web. Beim Erstellen einer beliebigen Art von Registrierungs- oder E-Commerce-Website beispielsweise müssen Sie wahrscheinlich den Benutzer nach einer Telefonnummer fragen, sei es für geschäftliche Zwecke oder für Notfallkontaktzwecke. Angesichts der häufig eingegebenen Telefonnummern ist es bedauerlich, dass eine "One-size-fits-all"-Lösung zur Validierung von Telefonnummern nicht praktikabel ist.

Glücklicherweise können Sie die Anforderungen Ihrer eigenen Website berücksichtigen und selbst ein angemessenes Validierungsniveau implementieren. Details siehe [Validierung](#validierung) unten.

### Benutzerdefinierte Tastaturen

Einer der Hauptvorteile von `<input type="tel">` ist, dass es mobile Browser veranlasst, eine spezielle Tastatur zum Eingeben von Telefonnummern anzuzeigen. Zum Beispiel sehen die Tastaturen auf einigen Geräten wie folgt aus.

| Firefox für Android                                       | WebKit iOS (Safari/Chrome/Firefox)                               |
| --------------------------------------------------------- | ---------------------------------------------------------------- |
| ![Firefox für Android Bildschirmfoto](fx-android-tel.png) | ![Firefox für iOS Bildschirmfoto](iphone-tel-keyboard-50pct.png) |

### Eine grundlegende tel-Eingabe

In ihrer einfachsten Form kann eine tel-Eingabe wie folgt implementiert werden:

```html
<label for="telNo">Phone number:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{ EmbedLiveSample('A_basic_tel_input', 600, 40) }}

Hier passiert nichts Magisches. Wenn das obige Eingabefeld an den Server gesendet wird, würde die Daten als `telNo=+12125553151` dargestellt.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, welche Form die Eingabedaten haben sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Das ist der Punkt, an dem **Platzhalter** ins Spiel kommen. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem er ein Beispiel für einen gültigen Wert anzeigt, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir ein `tel`-Eingabefeld mit dem Platzhalter `123-4567-8901`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input id="telNo" name="telNo" type="tel" placeholder="123-4567-8901" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Kontrolle der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefeldes steuern, sondern auch die minimalen und maximalen Längen, die für den eingegebenen Text erlaubt sind.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Mit ihm können Sie die Anzahl der Zeichen angeben, die das Eingabefeld auf einmal anzeigen kann. In diesem Beispiel ist das `tel`-Eingabefeld 20 Zeichen breit:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Element-Wertlänge

Die `size` ist von der Längenbeschränkung der eingegebenen Telefonnummer getrennt. Sie können eine minimale Länge, in Zeichen, für die eingegebene Telefonnummer mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut festlegen; verwenden Sie ähnlicheweise [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen Telefonnummer festzulegen.

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
> Die oben genannten Attribute wirken sich auf die [Validierung](#validierung) aus — die Eingaben des obigen Beispiels werden als ungültig gezählt, wenn die Länge des Wertes weniger als 9 Zeichen oder mehr als 14 Zeichen beträgt. Die meisten Browser lassen Sie nicht einmal einen Wert über der maximalen Länge eingeben.

### Standardoptionen bereitstellen

#### Einen einzigen Standard mit dem Wertattribut bereitstellen

Wie immer können Sie einen Standardwert für eine `tel`-Eingabe bereitstellen, indem Sie ihr [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut festlegen:

```html
<input id="telNo" name="telNo" type="tel" value="333-4444-4444" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Einen Schritt weiter gegangen, können Sie eine Liste von Standardtelefonnummernwerten bereitstellen, aus denen der Benutzer auswählen kann. Verwenden Sie dazu das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut. Dies schränkt die Benutzer nicht auf diese Optionen ein, ermöglicht es ihnen jedoch, häufig verwendete Telefonnummern schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list`-Attribut spezifiziert die ID eines {{HTMLElement("datalist")}}-Elements, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das Telefonnummerneingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s stellt der Browser die angegebenen Werte als potenzielle Werte für die Telefonnummer bereit; dies wird typischerweise als Popup oder Dropdown-Menü mit den Vorschlägen präsentiert. Während das spezifische Benutzererlebnis von einem Browser zum anderen variieren kann, wird typischerweise beim Klicken in das Bearbeitungsfeld ein Dropdown mit den vorgeschlagenen Telefonnummern angezeigt. Dann, wenn der Benutzer tippt, wird die Liste angepasst, um nur gefilterte passende Werte anzuzeigen. Jeder eingegebene Buchstabe schränkt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

Hier ist ein Screenshot, wie das aussehen könnte:

![Ein Eingabefeld hat den Fokus mit einem blauen Fokusring. Das Eingabefeld hat ein Dropdown-Menü mit vier Telefonnummern, die der Benutzer auswählen kann.](phone-number-with-options.png)

## Validierung

Wie bereits erwähnt, ist es ziemlich schwierig, eine einheitliche clientseitige Validierungslösung für Telefonnummern bereitzustellen. Was können wir also tun? Betrachten wir einige Optionen.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben, bevor sie in die Datenbank aufgenommen werden dürfen. Es ist viel zu einfach für jemanden, die HTML anzupassen, um die Validierung zu umgehen, oder um sie ganz zu entfernen. Es ist auch möglich für jemanden, Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr serverseitiger Code es versäumt, die empfangenen Daten zu validieren, könnte es zu einer Katastrophe führen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Telefonnummern erforderlich machen

Sie können es so einstellen, dass eine leere Eingabe ungültig ist und nicht an den Server übermittelt wird, indem Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden. Zum Beispiel verwenden wir diesen HTML-Code:

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

Und fügen wir das folgende CSS hinzu, um gültige Eingaben mit einem Häkchen und ungültige Eingaben mit einem Kreuz hervorzuheben:

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

Der Ausgabe sieht so aus:

{{EmbedLiveSample("Making_telephone_numbers_required", 700, 70)}}

### Muster-Validierung

Wenn Sie weiter einschränken möchten, dass eingegebene Nummern auch einem bestimmten Muster entsprechen müssen, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, das als Wert einen {{Glossary("regular_expression", "regulären Ausdruck")}} erhält, dem die eingegebenen Werte entsprechen müssen.

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

Beachten Sie, wie der eingegebene Wert als ungültig gemeldet wird, es sei denn, das Muster xxx-xxx-xxxx wird eingehalten; beispielsweise wird 41-323-421 nicht akzeptiert. Auch nicht 800-MDN-ROCKS. Allerdings wird 865-555-6502 akzeptiert. Dieses spezielle Muster ist offensichtlich nur für bestimmte Regionen nützlich – in einer realen Anwendung müssten Sie wahrscheinlich das verwendete Muster je nach Region des Benutzers variieren.

## Beispiele

In diesem Beispiel präsentieren wir ein {{htmlelement("select")}}-Element, das dem Benutzer erlaubt, das Land auszuwählen, in dem er sich befindet, und eine Reihe von `<input type="tel">`-Elementen, um ihn jeden Teil seiner Telefonnummer eingeben zu lassen; es gibt keinen Grund, warum Sie nicht mehrere `tel`-Eingaben haben können.

Jede Eingabe hat ein [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut, das einen Hinweis für sehende Benutzer anzeigt, was eingegeben werden soll, ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) zum Erzwingen einer bestimmten Anzahl von Zeichen für den gewünschten Abschnitt, und ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut, das einen Hinweis enthält, der für Screenreader-Benutzer darüber vorgelesen wird, was eingegeben werden soll.

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

Das JavaScript enthält einen [`onchange`](/de/docs/Web/API/HTMLElement/change_event)-Ereignishandler, der beim Ändern des `<select>`-Wertes das `pattern`, `placeholder` und `aria-label` des `<input>`-Elements aktualisiert, um den Telefonnummernformaten in diesem Land/Gebiet zu entsprechen.

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

Dies ist eine interessante Idee, die ein potenzielles Lösung für das Problem der Handhabung internationaler Telefonnummern zeigt. Natürlich müssten Sie das Beispiel erweitern, um das richtige Muster für potenziell jedes Land bereitzustellen, was viel Arbeit wäre, und es gäbe immer noch keine zuverlässige Garantie, dass Benutzer ihre Nummern korrekt eingeben würden.

Es lässt einen überlegen, ob es sich lohnt, all diese Mühen auf der Clientseite zu betreiben, wenn man den Benutzer die Nummer einfach so eingeben lassen könnte, wie er möchte, und sie dann auf dem Server validieren und bereinigen könnte. Aber diese Entscheidung liegt bei Ihnen.

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

- [HTML-Formular-Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
  - [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
  - [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
