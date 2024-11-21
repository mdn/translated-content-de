---
title: <input type="tel">
slug: Web/HTML/Element/input/tel
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`tel`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer Telefonnummer zu ermöglichen. Anders als bei [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url) wird der Eingabewert nicht automatisch auf ein bestimmtes Format validiert, bevor das Formular gesendet werden kann, da sich die Formate für Telefonnummern weltweit stark unterscheiden.

{{EmbedInteractiveExample("pages/tabbed/input-tel.html", "tabbed-standard")}}

Obwohl Eingaben vom Typ `tel` funktional identisch mit Standard-`text`-Eingaben sind, erfüllen sie nützliche Zwecke; einer der am schnellsten erkennbaren Vorteile ist, dass mobile Browser — insbesondere auf Mobiltelefonen — möglicherweise ein spezielles Tastenfeld anzeigen, das für die Eingabe von Telefonnummern optimiert ist. Die Verwendung eines spezifischen Eingabetyp für Telefonnummern erleichtert auch die Hinzufügung benutzerdefinierter Validierung und Handhabung von Telefonnummern.

> [!NOTE]
> Browser, die den Typ `tel` nicht unterstützen, fallen auf eine Standard-{{HTMLElement("input/text", "text")}}-Eingabe zurück.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der entweder eine Telefonnummer darstellt oder ein leerer String (`""`) ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen Telefonnummerneingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, sind nicht in den Vorschlagsoptionen enthalten. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Stringlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Telefonnummernfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Telefonnummernfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Stringlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Telefonnummernfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Telefonnummerneingabe keine Mindestlänge.

Das Telefonnummernfeld schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht festgelegt oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch in der Nähe anderen erklärenden Text einschließen.

Siehe [Muster-Validierung](#muster-validierung) unten für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in dem Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp verdeutlicht, anstatt einer erklärenden Nachricht. Der Text _darf nicht_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, jedoch den Platzhalter in der entgegengesetzten Richtung anzeigen muss, können Sie Unicode bidirektionale Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerungen für bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels).

### readonly

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben, bei denen auch das `readonly`-Attribut angegeben ist.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies exakt oder nicht sein und sollte nicht darauf vertraut werden; die resultierende Eingabe kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der ({{cssxref("font")}}) Schriftart-Einstellungen.

Dies setzt _nicht_ ein Limit, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur grob an, wie viele gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von tel-Eingaben

Telefonnummern sind eine sehr häufig erfasste Art von Daten im Web. Beim Erstellen einer Art Registrierungs- oder E-Commerce-Website müssen Sie beispielsweise wahrscheinlich den Benutzer nach einer Telefonnummer fragen, sei es für geschäftliche Zwecke oder für Notfallkontaktzwecke. Angesichts der häufig eingegebenen Telefonnummern ist es bedauerlich, dass eine "One-Size-Fits-All"-Lösung für die Validierung von Telefonnummern nicht praktikabel ist.

Glücklicherweise können Sie die Anforderungen Ihrer eigenen Website berücksichtigen und selbst ein angemessenes Maß an Validierung implementieren. Weitere Informationen finden Sie unter [Validierung](#validierung).

### Benutzerdefinierte Tastaturen

Ein Hauptvorteil von `<input type="tel">` besteht darin, dass es mobile Browser dazu veranlasst, eine spezielle Tastatur für die Telefonnummerneingabe anzuzeigen. Zum Beispiel, so sehen die Tastaturen auf ein paar Geräten aus.

| Firefox für Android                                           | WebKit iOS (Safari/Chrome/Firefox)                                   |
| ------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Firefox für Android Bildschirmaufnahme](fx-android-tel.png) | ![Firefox für iOS Bildschirmaufnahme](iphone-tel-keyboard-50pct.png) |

### Eine grundlegende Tel-Eingabe

In ihrer einfachsten Form kann eine Tel-Eingabe so implementiert werden:

```html
<label for="telNo">Phone number:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{ EmbedLiveSample('A_basic_tel_input', 600, 40) }}

Hier passiert nichts Magisches. Wenn sie an den Server übermittelt wird, würde die obige Eingabe beispielsweise als `telNo=+12125553151` dargestellt.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, welche Form die Eingabedaten haben sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}}-Element bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form zeigt, die der `value` haben sollte, indem er ein Beispiel für einen gültigen Wert darstellt, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir ein `tel`-Eingabeelement mit dem Platzhalter `123-4567-8901`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input id="telNo" name="telNo" type="tel" placeholder="123-4567-8901" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefelds steuern, sondern auch die minimal zulässigen und maximal zulässigen Längen für den eingegebenen Text.

#### Physische Eingangselement-Größe

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut kontrolliert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `tel`-Bearbeitungsfeld beispielsweise 20 Zeichen breit:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwert-Länge

Die `size` ist getrennt von der Längeneinschränkung für die eingegebene Telefonnummer. Sie können eine Mindestlänge, in Zeichen, für die eingegebene Telefonnummer mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; Verwenden Sie ähnlicherweise [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen Telefonnummer festzulegen.

Das untenstehende Beispiel erstellt ein 20 Zeichen breites Telefonnummerneingabefeld, das verlangt, dass der Inhalt nicht kürzer als 9 Zeichen und nicht länger als 14 Zeichen ist.

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
> Die oben genannten Attribute wirken sich auf die [Validierung](#validierung) aus — die Eingaben des obigen Beispiels gelten als ungültig, wenn die Länge des Wertes weniger als 9 Zeichen oder mehr als 14 Zeichen beträgt. Die meisten Browser lassen Sie nicht einmal einen Wert über die maximale Länge eingeben.

### Vorgabewerte bereitstellen

#### Einzelnen Standardwert mit dem Attribute "value" bereitstellen

Wie immer können Sie einen Standardwert für ein `tel`-Eingabefeld bereitstellen, indem Sie dessen [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut festlegen:

```html
<input id="telNo" name="telNo" type="tel" value="333-4444-4444" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Machen Sie einen Schritt weiter und bieten Sie eine Liste von Standard-Telefonnummernwerten an, aus denen der Benutzer auswählen kann. Verwenden Sie dazu das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut. Dies schränkt den Benutzer nicht auf diese Optionen ein, ermöglicht es ihm jedoch, häufig verwendete Telefonnummern schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}}-Elements an, das seinerseits eines oder mehrere {{HTMLElement("option")}}-Elemente für jeden vorgeschlagenen Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das Telefonnummerneingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s im Einsatz wird der Browser die angegebenen Werte als potenzielle Werte für die Telefonnummer anbieten; dies wird in der Regel als Popup oder Dropdown-Menü mit den Vorschlägen angezeigt. Während das spezifische Benutzererlebnis je nach Browser variieren kann, präsentiert das Klicken im Bearbeitungsfeld normalerweise ein Dropdown mit den vorgeschlagenen Telefonnummern. Dann wird die Liste angepasst, um nur gefilterte übereinstimmende Werte zu zeigen, während der Benutzer tippt. Jeder getippte Charakter schränkt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

Hier ist ein Bildschirmfoto, wie das aussehen könnte:

![Ein Eingabefeld hat den Fokus mit einem blauen Fokusring. Das Eingabefeld hat ein Dropdown-Menü, das vier Telefonnummern anzeigt, die der Benutzer auswählen kann.](phone-number-with-options.png)

## Validierung

Wie wir bereits angedeutet haben, ist es recht schwierig, eine Einheitslösung für die clientseitige Validierung von Telefonnummern zu bieten. Was können wir also tun? Lassen Sie uns einige Optionen in Betracht ziehen.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind, bevor sie in die Datenbank zugelassen werden. Es ist viel zu einfach für jemand, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte ein Desaster drohen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind und so weiter) in Ihre Datenbank eingegeben werden.

### Telefonnummern erforderlich machen

Sie können es so festlegen, dass eine leere Eingabe ungültig ist und nicht an den Server übermittelt wird, indem Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden. Zum Beispiel, lassen Sie uns diesen HTML-Code verwenden:

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

Und fügen wir das folgende CSS hinzu, um gültige Einträge mit einem Häkchen und ungültige Einträge mit einem Kreuz zu markieren:

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

Wenn Sie die eingegebenen Nummern weiter einschränken möchten, sodass sie auch ein bestimmtes Muster erfüllen müssen, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, das als Wert einen {{Glossary("regular_expression", "regulären Ausdruck")}} annimmt, dem die eingegebenen Werte entsprechen müssen.

In diesem Beispiel verwenden wir dasselbe CSS wie zuvor, aber unser HTML sieht nun so aus:

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

Beachten Sie, wie der eingegebene Wert als ungültig gemeldet wird, es sei denn, das Muster xxx-xxx-xxxx wird erfüllt; 41-323-421 wird zum Beispiel nicht akzeptiert. Auch 800-MDN-ROCKS nicht. Jedoch wird 865-555-6502 akzeptiert. Dieses spezielle Muster ist offensichtlich nur in bestimmten Regionen von Nutzen — in einer echten Anwendung müssten Sie das verwendete Muster wahrscheinlich abhängig von der Region des Benutzers variieren.

## Beispiele

In diesem Beispiel präsentieren wir ein {{htmlelement("select")}}-Element, das es dem Benutzer ermöglicht, das Land auszuwählen, in dem er sich befindet, und eine Reihe von `<input type="tel">`-Elementen, die ihm erlauben, jeden Teil seiner Telefonnummer einzugeben; es gibt keinen Grund, warum Sie nicht mehrere `tel`-Eingaben haben könnten.

Jede Eingabe hat ein [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut, um einen Hinweis für sehende Benutzer zu geben, was eingegeben werden soll, ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern), um eine bestimmte Anzahl von Zeichen für den gewünschten Abschnitt zu erzwingen, und ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut, das einen Hinweis enthält, der von Screenreader-Benutzern darüber vorgelesen wird, was eingegeben werden soll.

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

Das JavaScript enthält einen [`onchange`](/de/docs/Web/API/HTMLElement/change_event)-Ereignishandler, der, wenn der `<select>`-Wert geändert wird, das Muster, den Platzhalter und das aria-label des `<input>`-Elements aktualisiert, um dem Format der Telefonnummern in diesem Land/Gebiet zu entsprechen.

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

Dies ist eine interessante Idee, die eine potenzielle Lösung für das Problem des Umgangs mit internationalen Telefonnummern zeigt. Sie müssten das Beispiel natürlich erweitern, um das richtige Muster für möglicherweise jedes Land bereitzustellen, was viel Arbeit wäre, und es gäbe immer noch keine narrensichere Garantie, dass die Benutzer ihre Nummern korrekt eingeben würden.

Es lässt einen überlegen, ob es sich lohnt, all diese Mühe auf der Client-Seite zu machen, wenn Sie dem Benutzer einfach erlauben könnten, seine Nummer in jedem beliebigen Format auf der Client-Seite einzugeben und sie dann auf dem Server zu validieren und zu bereinigen. Aber diese Entscheidung liegt bei Ihnen.

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
        Ein String, der eine Telefonnummer darstellt, oder leer
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
