---
title: <input type="tel">
slug: Web/HTML/Element/input/tel
l10n:
  sourceCommit: cd56d512284c5765f115cb002c1be5d23e7281d2
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`tel`** werden verwendet, um den Benutzer eine Telefonnummer eingeben und bearbeiten zu lassen. Im Gegensatz zu [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url) wird der Eingabewert nicht automatisch auf ein bestimmtes Format validiert, bevor das Formular gesendet werden kann, da sich die Formate für Telefonnummern weltweit stark unterscheiden.

{{EmbedInteractiveExample("pages/tabbed/input-tel.html", "tabbed-standard")}}

Trotz der Tatsache, dass Eingaben vom Typ `tel` funktional mit Standard-`text`-Eingaben identisch sind, erfüllen sie nützliche Zwecke; einer der augenfälligsten ist, dass mobile Browser — insbesondere auf Mobiltelefonen — möglicherweise ein benutzerdefiniertes Tastenfeld zur Eingabe von Telefonnummern bereitstellen. Die Verwendung eines spezifischen Eingabetypus für Telefonnummern erleichtert zudem die Hinzufügung von benutzerdefinierten Validierungen und das Handling von Telefonnummern.

> [!NOTE]
> Browser, die den Typ `tel` nicht unterstützen, fallen auf eine standardmäßige {{HTMLElement("input/text", "text")}}-Eingabe zurück.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der entweder eine Telefonnummer darstellt oder ein leerer String (`""`) ist.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Telefonnummern-Eingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die {{domxref("Element.id", "id")}} eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer als Vorschläge für diese Eingabe angezeigt werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codes), die der Benutzer in das Telefonnummernfeld eingeben kann. Dieser Wert muss eine ganze Zahl von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Telefonnummernfeld keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe entspricht der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht, wenn die Länge des in das Feld eingegebenen Textes länger ist als `maxlength` UTF-16-Codes. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codes), die der Benutzer in das Telefonnummernfeld eingeben kann. Dieser Wert muss eine nicht negative ganze Zahl sein, die kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Telefonnummernfeld keine Mindestlänge.

Das Telefonnummernfeld entspricht der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht, wenn die Länge des in das Feld eingegebenen Textes kürzer ist als `minlength` UTF-16-Codes. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) des Eingabefelds erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Sequenz von Unicode-Codepunkten und nicht als {{Glossary("ASCII")}} behandelt wird. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, der von den meisten Browsern als Tooltip angezeigt wird, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Siehe [Pattern-Validierung](#pattern-validierung) unten für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht zu sein. Der Text _darf keine_ Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR")}} oder {{Glossary("RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Algorithmusformatierungszeichen zur bidirektionalen Steuerung verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Verwendung von Unicode-Steuerelementen für bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Ein Boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch die direkte Setzung der {{domxref("HTMLInputElement")}}-`value`-Eigenschaft im JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben, bei denen auch das `readonly`-Attribut angegeben ist.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen das Eingabefeld breit sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da die Zeichenbreiten variieren, kann dies genau sein oder nicht, und es sollte nicht darauf vertraut werden, dass es so ist; die resultierende Eingabe kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, je nach den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen).

Dies legt _kein_ Limit fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig sichtbar sein können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Nicht-standardmäßige Attribute

Die folgenden nicht-standardmäßigen Attribute stehen Telefonnummerneingabefeldern zur Verfügung. Generell sollten Sie sie nur verwenden, wenn es sich nicht vermeiden lässt.

### autocorrect

Eine Safari-Erweiterung, das `autocorrect`-Attribut, ist ein String, der angibt, ob die automatische Korrektur aktiviert werden soll, während der Benutzer dieses Feld bearbeitet. Zulässige Werte sind:

- `on`
  - : Aktivieren der automatischen Korrektur von Tippfehlern sowie Verarbeitung von Textsubstitutionen, falls welche konfiguriert sind.
- `off`
  - : Deaktivieren der automatischen Korrektur und Textsubstitutionen.

## Verwendung von tel-Eingaben

Telefonnummern sind eine auf dem Web sehr häufig gesammelte Art von Daten. Wenn Sie beispielsweise eine Art von Registrierungs- oder E-Commerce-Website erstellen, müssen Sie wahrscheinlich den Benutzer um eine Telefonnummer bitten, sei es für geschäftliche Zwecke oder für Notfallkontaktzwecke. Angesichts dessen, wie oft Telefonnummern eingegeben werden, ist es bedauerlich, dass eine „Einheitslösung“ für die Validierung von Telefonnummern nicht praktikabel ist.

Glücklicherweise können Sie die Anforderungen Ihrer eigenen Website berücksichtigen und selbst ein angemessenes Maß an Validierung implementieren. Siehe [Validierung](#validierung) unten für Details.

### Benutzerdefinierte Tastaturen

Einer der Hauptvorteile von `<input type="tel">` ist, dass es mobile Browser dazu bringt, eine spezielle Tastatur zur Eingabe von Telefonnummern anzuzeigen. Hier sehen Sie beispielsweise, wie die Tastaturen auf ein paar Geräten aussehen.

| Firefox für Android                                   | WebKit iOS (Safari/Chrome/Firefox)                          |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| ![Screenshot von Firefox für Android](fx-android-tel.png) | ![Screenshot von Firefox für iOS](iphone-tel-keyboard-50pct.png) |

### Eine einfache tel-Eingabe

In ihrer grundlegendsten Form kann eine tel-Eingabe so implementiert werden:

```html
<label for="telNo">Telefonnummer:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{ EmbedLiveSample('A_simple_tel_input', 600, 40) }}

Hier passiert nichts Magisches. Wenn an den Server gesendet, würden die Daten der obigen Eingabe beispielsweise als `telNo=+12125553151` dargestellt.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Beschriftungen für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form der `value` zeigt, indem er ein Beispiel eines gültigen Wertes liefert, der innerhalb des Bearbeitungsfeldes angezeigt wird, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wird das Feld geleert, erscheint der Platzhalter erneut.

Hier haben wir eine `tel`-Eingabe mit dem Platzhalter `123-4567-8901`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input id="telNo" name="telNo" type="tel" placeholder="123-4567-8901" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefeldes steuern, sondern auch die Minimal- und Maximal-Längen, die für den Eingabetext selbst erlaubt sind.

#### Physische Eingabeelementgröße

Die physische Größe des Eingabefeldes kann über das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Mit ihm können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist beispielsweise das `tel`-Eingabefeld 20 Zeichen breit:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwertlänge

Die `size` ist getrennt von der Längsbeschränkung auf die eingegebene Telefonnummer. Sie können eine minimale Länge, in Zeichen, für die eingegebene Telefonnummer mithilfe des [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attributs angeben; ebenso verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen Telefonnummer festzulegen.

Das untenstehende Beispiel erstellt ein Telefonnummerneingabefeld mit einer Breite von 20 Zeichen, wobei die Inhalte nicht kürzer als 9 Zeichen und nicht länger als 14 Zeichen sein dürfen.

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
> Die obigen Attribute beeinflussen die [Validierung](#validierung) — Eingaben des obigen Beispiels werden als ungültig betrachtet, wenn die Länge des Wertes weniger als 9 Zeichen oder mehr als 14 Zeichen beträgt. Die meisten Browser lassen Sie nicht einmal einen Wert über die maximale Länge eingeben.

### Standardoptionen bereitstellen

#### Einzelnen Standardwert mit dem value-Attribut bereitstellen

Wie immer können Sie einen Standardwert für ein `tel`-Eingabefeld bereitstellen, indem Sie sein [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut setzen:

```html
<input id="telNo" name="telNo" type="tel" value="333-4444-4444" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Weiter gedacht können Sie eine Liste von Standardtelefonnummernwerten bereitstellen, die der Benutzer auswählen kann. Um dies zu tun, verwenden Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, häufiger verwendete Telefonnummern schneller auszuwählen. Dies bietet auch Hinweise zur [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Funktion. Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}}-Elements an, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` eines jeden `option` ist der entsprechende vorgeschlagene Wert für das Telefonnummerneingabefeld.

```html
<label for="telNo">Telefonnummer: </label>
<input id="telNo" name="telNo" type="tel" list="defaultTels" />

<datalist id="defaultTels">
  <option value="111-1111-1111"></option>
  <option value="122-2222-2222"></option>
  <option value="333-3333-3333"></option>
  <option value="344-4444-4444"></option>
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s setzt der Browser die angegebenen Werte als potenzielle Werte für die Telefonnummer; dies wird typischerweise als Popup- oder Drop-Down-Menü mit den Vorschlägen angezeigt. Die spezifische Benutzererfahrung kann von einem Browser zum anderen variieren, typischerweise jedoch zeigt ein Klick in das Bearbeitungsfeld ein Drop-Down der vorgeschlagenen Telefonnummern an. Während der Benutzer tippt, wird die Liste gefiltert, um nur passende Werte anzuzeigen. Jedes getippte Zeichen schränkt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

Hier ist ein Screenshot, wie das aussehen könnte:

![Ein Eingabefeld hat Fokus mit einem blauen Fokusring. Die Eingabe hat ein Dropdown-Menü, das vier auswählbare Telefonnummern anzeigt.](phone-number-with-options.png)

## Validierung

Wie wir zuvor erwähnt haben, ist es ziemlich schwierig, eine Einheitslösung zur clientseitigen Validierung von Telefonnummern bereitzustellen. Was können wir also tun? Betrachten wir einige Optionen.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben, bevor sie in die Datenbank aufgenommen werden. Es ist viel zu einfach für jemanden, die HTML so anzupassen, dass er die Validierung umgeht oder sie vollständig entfernt. Es ist auch möglich, dass jemand Ihr HTML komplett umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es katastrophal enden, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Telefonnummern als erforderlich machen

Sie können eine leere Eingabe als ungültig markieren und verhindern, dass sie an den Server gesendet wird, indem Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden. Zum Beispiel, verwenden wir diesen HTML-Code:

```html
<form>
  <div>
    <label for="telNo">Geben Sie eine Telefonnummer ein (erforderlich): </label>
    <input id="telNo" name="telNo" type="tel" required />
    <span class="validity"></span>
  </div>
  <div>
    <button>Absenden</button>
  </div>
</form>
```

Und fügen wir das folgende CSS hinzu, um gültige Einträge mit einem Häkchen und ungültige Einträge mit einem Kreuz hervorzuheben:

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

Der Output sieht so aus:

{{EmbedLiveSample("Making_telephone_numbers_required", 700, 70)}}

### Pattern-Validierung

Wenn Sie die eingegebenen Nummern weiter einschränken möchten, sodass sie auch einem bestimmten Muster entsprechen müssen, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, das als Wert einen {{Glossary("regulärer Ausdruck")}} akzeptiert, dem eingegebene Werte entsprechen müssen.

In diesem Beispiel verwenden wir dasselbe CSS wie zuvor, aber unser HTML sieht jetzt so aus:

```html
<form>
  <div>
    <label for="telNo">
      Geben Sie eine Telefonnummer ein (im Format xxx-xxx-xxxx):
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
    <button>Absenden</button>
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

Beachten Sie, wie der eingegebene Wert als ungültig gemeldet wird, es sei denn, das Muster xxx-xxx-xxxx wird erfüllt; zum Beispiel wird 41-323-421 nicht akzeptiert. Auch nicht 800-MDN-ROCKS. 865-555-6502 hingegen wird akzeptiert. Dieses spezielle Muster ist offensichtlich nur in bestimmten Gebieten nützlich — in einer echten Anwendung müssten Sie wahrscheinlich je nach Gebiet des Benutzers das verwendete Muster variieren.

## Beispiele

In diesem Beispiel präsentieren wir eine einfache Oberfläche mit einem {{htmlelement("select")}}-Element, mit dem der Benutzer seine Landesauswahl treffen kann, und einer Gruppe von `<input type="tel">`-Elementen, um ihm die Eingabe jedes Teils seiner Telefonnummer zu ermöglichen; es gibt keinen Grund, warum Sie nicht mehrere `tel`-Eingaben haben können.

Jede Eingabe hat ein [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut, um sehenden Benutzern einen Hinweis darauf zu geben, was eingegeben werden soll, ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut, um eine bestimmte Anzahl von Zeichen für den gewünschten Abschnitt zu erzwingen, und ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut, das einen Hinweis enthält, der für Bildschirmlese-Benutzer gelesen werden soll, was eingeben werden soll.

```html
<form>
  <div>
    <label for="country">Wählen Sie Ihr Land:</label>
    <select id="country" name="country">
      <option>UK</option>
      <option selected>US</option>
      <option>Germany</option>
    </select>
  </div>
  <div>
    <p>Geben Sie Ihre Telefonnummer ein:</p>
    <span class="areaDiv">
      <input
        id="areaNo"
        name="areaNo"
        type="tel"
        required
        placeholder="Vorwahl"
        pattern="[0-9]{3}"
        aria-label="Vorwahl" />
      <span class="validity"></span>
    </span>
    <span class="number1Div">
      <input
        id="number1"
        name="number1"
        type="tel"
        required
        placeholder="Erster Teil"
        pattern="[0-9]{3}"
        aria-label="Erster Teil der Nummer" />
      <span class="validity"></span>
    </span>
    <span class="number2Div">
      <input
        id="number2"
        name="number2"
        type="tel"
        required
        placeholder="Zweiter Teil"
        pattern="[0-9]{4}"
        aria-label="Zweiter Teil der Nummer" />
      <span class="validity"></span>
    </span>
  </div>
  <div>
    <button>Absenden</button>
  </div>
</form>
```

Der JavaScript-Code ist relativ einfach — er enthält einen {{domxref("HTMLElement.change_event", "onchange")}}-Ereignishandler, der bei einer Änderung des `<select>`-Werts die `pattern`-, `placeholder`- und `aria-label`-Eigenschaften der `<input>`-Elemente aktualisiert, um dem Format der Telefonnummern in diesem Land/Gebiet zu entsprechen.

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

Dies ist eine interessante Idee, die einen möglichen Lösungsansatz für das Problem des Umgangs mit internationalen Telefonnummern zeigt. Sie müssten das Beispiel natürlich erweitern, um das korrekte Muster für potenziell jedes Land bereitzustellen, was viel Arbeit wäre, und es gäbe immer noch keine narrensichere Garantie, dass die Benutzer ihre Nummern richtig eingeben würden.

Es lässt einen darüber nachdenken, ob es sich lohnt, all diese Mühe auf der Client-Seite zu machen, wenn man dem Benutzer einfach erlauben könnte, seine Nummer in jedem gewünschten Format auf der Client-Seite einzugeben und dann auf der Server-Seite zu validieren und zu bereinigen. Aber diese Entscheidung liegt bei Ihnen.

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
        {{domxref("HTMLElement/change_event", "change")}} und
        {{domxref("Element/input_event", "input")}}
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}},
        {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu HTML-Formularen](/de/docs/Learn/Forms)
- {{HTMLElement("input")}}
  - [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
  - [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
