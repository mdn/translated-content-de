---
title: Client-side-Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: e0f97a8a4e8a2fc45f1a7bdc8d1e3f524ccb627d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig, sicherzustellen, dass alle erforderlichen Formularsteuerungen ausgefüllt sind und das richtige Format haben, bevor die vom Benutzer eingegebenen Daten an den Server gesendet werden. Diese **Client-seitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten den in den verschiedenen Formularsteuerungen festgelegten Anforderungen entsprechen.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der Client-seitigen Formularvalidierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computerkompetenz, ein angemessenes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was Client-seitige Formularvalidierung ist, warum sie wichtig ist,
        und wie Sie verschiedene Techniken anwenden, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Client-seitige Validierung ist eine erste Überprüfung und ein wichtiges Merkmal für eine gute Benutzererfahrung; durch das Abfangen von ungültigen Daten auf der Client-Seite kann der Benutzer diese sofort korrigieren.
Wenn sie den Server erreichen und dann abgelehnt werden, wird eine merkliche Verzögerung durch eine Server-Client-Runde verursacht, um den Benutzer über die erforderliche Datenkorrektur zu informieren.

Jedoch sollte die Client-seitige Validierung _nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer auch eine Validierung, einschließlich Sicherheitsprüfungen, bei auf dem Server übermittelten Daten vornehmen, **sowie** auf der Client-Seite, da die Client-seitige Validierung zu einfach zu umgehen ist, sodass böswillige Benutzer immer noch leicht fehlerhafte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der Server-seitigen Validierung liegt zwar etwas außerhalb des Rahmens dieses Moduls, aber Sie sollten es im Hinterkopf behalten.

## Was ist Formularvalidierung?

Gehen Sie zu einer beliebigen beliebten Website mit einem Registrierungsformular und Sie werden feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht in dem erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein bestimmtes Datenformat ist erforderlich, damit es als gültig betrachtet wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies nennt man **Formularvalidierung**.
Wenn Sie Daten eingeben, prüft der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der durch die Anwendung festgelegten Einschränkungen sind. Die im Browser durchgeführte Validierung wird als **Client-seitige** Validierung bezeichnet, während die Validierung auf dem Server als **Server-seitige** Validierung bezeichnet wird.
In diesem Kapitel konzentrieren wir uns auf die Client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, darf die Anwendung die Daten an den Server übermitteln und (normalerweise) in einer Datenbank speichern; sind die Informationen nicht korrekt formatiert, erhält der Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und er kann es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren?
Es gibt drei Hauptgründe:

- **Wir wollen die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht ordnungsgemäß, wenn die Daten unserer Benutzer im falschen Format gespeichert sind, falsch sind oder ganz fehlen.
- **Wir wollen die Daten unserer Benutzer schützen**. Wenn wir unsere Benutzer zwingen, sichere Passwörter einzugeben, wird es einfacher, ihre Kontoinformationen zu schützen.
- **Wir wollen uns selbst schützen**. Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals den Daten, die vom Client an Ihren Server übergeben werden. Selbst wenn Ihr Formular korrekt validiert und fehlerhafte Eingaben auf der Client-Seite verhindert, kann ein böswilliger Benutzer die Netzwerkaufforderung dennoch ändern.

## Verschiedene Arten der Client-seitigen Validierung

Es gibt zwei verschiedene Arten der Client-seitigen Validierung, die Sie im Web antreffen werden:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können definieren, welche Formularsteuerungen erforderlich sind und in welchem Format die vom Benutzer eingegebenen Daten vorliegen müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  In der Regel wird JavaScript hinzugefügt, um HTML-Formularvalidierungen zu erweitern oder anzupassen.

Die Client-seitige Validierung kann mit wenig bis gar keinem JavaScript durchgeführt werden. Die HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als die JavaScript-Validierung. Es wird allgemein empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu starten und die Benutzererfahrung bei Bedarf mit JavaScript zu erweitern.

## Verwendung der integrierten Formularvalidierung

Eine der wichtigsten Eigenschaften von [Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten ohne Rückgriff auf JavaScript zu validieren.
Dies geschieht durch die Verwendung von Validierungsattributen an Formularelementen.
Viele davon haben wir schon früher im Kurs gesehen, aber hier eine Zusammenfassung:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular gesendet werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Gibt die minimale und maximale Länge der Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die minimalen und maximalen Werte numerischer Eingabetypen sowie das Inkrement oder den Schritt für Werte, beginnend mit dem Minimum, an.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer Voreinstellungstyp sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in einem Formularfeld eingegebenen Daten alle von den auf das Feld angewendeten Attributen festgelegten Regeln befolgen, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, treffen die folgenden Aussagen zu:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen spezifischen Stil auf gültige Elemente anzuwenden. Die Steuerung wird auch {{cssxref(":user-valid")}} entsprechen, wenn der Benutzer mit der Steuerung interagiert hat, und kann anderen UI-Pseudoklassen entsprechen, wie {{cssxref(":in-range")}}, abhängig vom Eingabetyp und den Attributen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular übermitteln, vorausgesetzt, dass es nichts anderes gibt, das dies verhindert (z.B. JavaScript).

Wenn ein Element ungültig ist, treffen die folgenden Aussagen zu:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit der Steuerung interagiert hat, entspricht sie auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudoklassen können je nach Fehler ebenfalls übereinstimmen, wie {{cssxref(":out-of-range")}}. Diese ermöglichen es Ihnen, einen spezifischen Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung variiert je nach Art des Fehlers. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für integrierte Formularvalidierung

In diesem Abschnitt testen wir einige der oben besprochenen Attribute.

### Einfaches Startbeispiel

Beginnen wir mit einem einfachen Beispiel: eine Eingabe, die Ihnen erlaubt, zu wählen, ob Sie eine Banane oder eine Kirsche bevorzugen.
Dieses Beispiel beinhaltet ein einfaches Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem {{htmlelement("button")}} zum Absenden.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry?</label>
  <input id="choose" name="i-like" />
  <button>Submit</button>
</form>
```

```css
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

{{EmbedLiveSample("Simple_start_file", "100%", 80)}}

Kopieren Sie zu Beginn die [`fruit-start.html`-Datei auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in ein neues Verzeichnis auf Ihrer Festplatte.

### Das required-Attribut

Eine häufige HTML-Validierungsfunktion ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) Attribut.
Fügen Sie dieses Attribut zu einer Eingabe hinzu, um ein Element als obligatorisch zu machen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird beim Absenden eine Fehlermeldung anzeigen und nicht gesendet, wenn die Eingabe leer ist.
Während es leer ist, wird die Eingabe auch als ungültig betrachtet und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein Radio-Button in einer gleichen Gruppe das `required`-Attribut hat, muss einer der Radio-Buttons in dieser Gruppe ausgewählt werden, damit die Gruppe gültig ist; der ausgewählte Radio muss nicht derjenige sein, bei dem das Attribut gesetzt ist.

> [!NOTE]
> Fordern Sie Benutzerdaten nur an, wenn Sie diese benötigen: Beispielsweise ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu erfahren?

Fügen Sie Ihrer Eingabe ein `required`-Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(erforderlich)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer zu informieren, dass das {{htmlelement("input")}} erforderlich ist. Den Benutzer zu informieren, wann Formularfelder erforderlich sind, ist nicht nur eine gute Benutzererfahrung, sondern auch notwendig laut den WCAG [Barrierefreiheitsrichtlinien](/de/docs/Learn_web_development/Core/Accessibility).

Wir haben CSS-Stile hinzugefügt, die basierend darauf angewendet werden, ob das Element erforderlich, gültig oder ungültig ist:

```css
input:invalid {
  border: 2px dashed red;
}

input:invalid:required {
  background-image: linear-gradient(to right, pink, lightgreen);
}

input:valid {
  border: 2px solid black;
}
```

Dieses CSS bewirkt, dass die Eingabe eine rot gestrichelte Umrandung hat, wenn sie ungültig ist, und eine subtilere schwarze, durchgezogene Umrandung, wenn sie gültig ist.
Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular aus dem [Live-`required`-Beispiel](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne Wert zu senden. Beachten Sie, wie die ungültige Eingabe fokussiert wird, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint und das Formular nicht gesendet wird. Sie können auch den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) sehen.

### Validierung mit regulärem Ausdruck

Eine weitere nützliche Validierungsfunktion ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das einen [Regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein regulärer Ausdruck (RegExp) ist ein Muster, mit dem Sie Zeichenkombinationen in Textzeichenfolgen abgleichen können, sodass RegExps ideal für die Formularvalidierung und eine Vielzahl anderer Anwendungen in JavaScript sind.

RegExps sind ziemlich komplex, und wir beabsichtigen nicht, sie in diesem Artikel umfassend zu lehren.
Unten finden Sie einige Beispiele, um Ihnen einen grundlegenden Überblick zu geben, wie sie funktionieren.

- `a` — Entspricht einem Zeichen, das `a` ist (nicht `b`, nicht `aa` und so weiter).
- `abc` — Entspricht `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Entspricht `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Entspricht `a`, optional gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` und so weiter).
- `a|b` — Entspricht einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Entspricht genau `abc` oder genau `xyz` (nicht jedoch `abcxyz` oder `a` oder `y` und so weiter).

Es gibt viele weitere Möglichkeiten, die wir hier nicht behandeln.
Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Dokumentation zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut wie folgt hinzuzufügen:

```html
<form>
  <label for="choose">Would you prefer a banana or a cherry?</label>
  <input id="choose" name="i-like" required pattern="[Bb]anana|[Cc]herry" />
  <button>Submit</button>
</form>
```

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

Dies gibt uns das folgende Update — probieren Sie es aus:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

Sie finden dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) sowie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html).

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke unterscheiden Groß- und Kleinschreibung, aber wir haben das Muster so gestaltet, dass kapitalisierte sowie kleingeschriebene Versionen unterstützt werden, indem wir ein zusätzliches "Aa"-Muster innerhalb eckiger Klammern verwenden.

An diesem Punkt versuchen Sie, den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attributs auf einige der früher gesehenen Beispiele zu setzten und sehen, wie sich dies auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen.
Versuchen Sie, einige eigene zu schreiben, und sehen Sie, wie es läuft.
Versuchen Sie, sie so weit wie möglich fruchtbezogen zu machen, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, wird die `input`-Eingabe der {{cssxref(':invalid')}}-Pseudoklasse entsprechen. Ist sie leer und das Element ist nicht erforderlich, wird sie als nicht ungültig angesehen.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, um gegen einen regulären Ausdruck validiert zu werden. Zum Beispiel validiert der Typ `email` die Eingabewerte gegen ein gut geformtes E-Mail-Adress-Muster oder ein Muster, das eine kommagetrennte Liste von E-Mail-Adressen entspricht, falls es das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut nicht.

### Einschränkung der Länge Ihrer Eingaben

Sie können die Zeichenlänge aller von {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder mit den Attributen [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) einschränken.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)-Wert oder mehr als der [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Wert aufweist.

Browser lassen den Benutzer oft nicht zu, einen längeren Wert als erwartet in Textfelder einzugeben. Eine bessere Benutzererfahrung als nur `maxlength` zu verwenden ist, auch ein Zeichenanzahlfeedback auf eine zugängliche Weise bereitzustellen und dem Benutzer zu ermöglichen, seine Inhalte auf die passende Größe zu bearbeiten.
Ein Beispiel hierfür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen, die `maxlength` verwenden](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies bereitzustellen.

> [!NOTE]
> Begrenzungen der Länge werden nie gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur für benutzergenerierte Eingaben gemeldet.

### Einschränkung der Werte Ihrer Eingaben

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und die verschiedenen Datumseingabetypen, können die Attribute [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) verwendet werden, um einen Bereich gültiger Werte bereitzustellen.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, wird es als ungültig angesehen.

Lassen Sie uns ein weiteres Beispiel betrachten.
Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html)-Datei.

Löschen Sie nun die Inhalte des `<body>`-Elements und ersetzen Sie es durch Folgendes:

```html
<form>
  <div>
    <label for="choose">Would you prefer a banana or a cherry?</label>
    <input
      type="text"
      id="choose"
      name="i-like"
      required
      minlength="6"
      maxlength="6" />
  </div>
  <div>
    <label for="number">How many would you like?</label>
    <input type="number" id="number" name="amount" value="1" min="1" max="10" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

- Hier sehen Sie, dass wir dem `text`-Feld eine `minlength` und `maxlength` von sechs gegeben haben, was der gleichen Länge wie Banane und Kirsche entspricht.
- Wir haben dem `number`-Feld auch ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Inkrement-/Dekrementpfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu bewegen.
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, wird die Eingabe als ungültig angesehen.
  Die Zahl ist nicht erforderlich, sodass das Entfernen des Werts zu einem gültigen Wert führt.

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}

div {
  margin-bottom: 10px;
}
```

Hier ist das Beispiel live:

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html) an.

Numerische Eingabetypen wie `number`, `range` und `date` können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut verwenden. Dieses Attribut gibt an, in welchem Inkrement der Wert erhöht oder verringert wird, wenn die Eingabesteuerungen verwendet werden (wie die Auf- und Ab-Nummerntasten oder das Verschieben des Bereichszeigers). In unserem Beispiel wurde das `step`-Attribut weggelassen, sodass der Wert standardmäßig `1` beträgt. Das bedeutet, dass Fließkommazahlen wie 3,2 auch als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel zur Darstellung der Verwendung der integrierten Validierungsfunktionen von HTML.
Zuerst etwas HTML:

```html
<form>
  <fieldset>
    <legend>
      Do you have a driver's license?<span aria-label="required">*</span>
    </legend>
    <input type="radio" required name="driver" id="r1" value="yes" /><label
      for="r1"
      >Yes</label
    >
    <input type="radio" required name="driver" id="r2" value="no" /><label
      for="r2"
      >No</label
    >
  </fieldset>
  <p>
    <label for="n1">How old are you?</label>
    <input type="number" min="12" max="120" step="1" id="n1" name="age" />
  </p>
  <p>
    <label for="t1"
      >What's your favorite fruit?<span aria-label="required">*</span></label
    >
    <input
      type="text"
      id="t1"
      name="fruit"
      list="l1"
      required
      pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range" />
    <datalist id="l1">
      <option>Banana</option>
      <option>Cherry</option>
      <option>Apple</option>
      <option>Strawberry</option>
      <option>Lemon</option>
      <option>Orange</option>
    </datalist>
  </p>
  <p>
    <label for="t2">What's your email address?</label>
    <input type="email" id="t2" name="email" />
  </p>
  <p>
    <label for="t3">Leave a short message</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
  </p>
  <p>
    <button>Submit</button>
  </p>
</form>
```

Und nun etwas CSS, um das HTML zu stylen:

```css
form {
  font: 1em sans-serif;
  max-width: 320px;
}

p > label {
  display: block;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea,
fieldset {
  width: 100%;
  border: 1px solid #333;
  box-sizing: border-box;
}

input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  box-shadow: none;
}
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Dieses [vollständige Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) sowie der [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

Sehen Sie sich [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) für eine vollständige Liste von Attributen an, die verwendet werden können, um Eingabewerte einzuschränken und die Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der systemeigenen Fehlermeldungen ändern möchten, benötigen Sie JavaScript.
In diesem Abschnitt werden wir die verschiedenen Möglichkeiten betrachten, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die über die folgenden Formularelement-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen bereit.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die das Steuerungselement nicht erfüllt (falls vorhanden). Wenn die Steuerung kein Kandidat für die Validierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), wird ein leerer String zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitszustand des Elements beschreiben. Sie finden vollständige Details zu allen verfügbaren Eigenschaften auf der [`ValidityState`](/de/docs/Web/API/ValidityState)-Referenzseite; unten sind einige der häufigeren aufgelistet:
  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem spezifizierten [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er es tut. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger als die durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut spezifizierte maximale Länge ist, oder `false`, wenn er kürzer oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer als die durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attribut spezifizierte Mindestlänge ist, oder `false`, wenn er länger oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer als das im [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribut spezifizierte Maximum ist, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner als das im [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) Attribut spezifizierte Minimum ist, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht der erforderlichen Syntax entspricht (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}}-CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber keinen Wert, oder `false` andernfalls. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, wenn das Formular gesendet wird; `false` andernfalls.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form)-Element bereit.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; `false` andernfalls. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid`-Event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mithilfe von Ereignissen. Diese Methode ist in Kombination mit `preventDefault()` in einem `onSubmit`-Event-Handler nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig betrachtet, und der angegebene Fehler wird angezeigt. Dies ermöglicht es Ihnen, mithilfe von JavaScript-Code eine andere Validierungsfehler festzustellen als die, die von den Standard-HTML-Validierungsbeschränkungen angeboten werden. Die Nachricht wird dem Benutzer angezeigt, wenn das Problem gemeldet wird.

#### Implementierung einer angepassten Fehlermeldung

Wie Sie in den vorherigen HTML-Validierungsbeispielen gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular zu senden, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keine Standardmöglichkeit, ihr Aussehen mit CSS zu ändern.
- Sie hängen von der Sprache des Browsers ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Screenshot von Firefox in Französisch gezeigt.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns ein Beispiel dafür erarbeiten, wie dies gemacht wird.

Wir beginnen mit etwas HTML (fühlen Sie sich frei, dies in eine leere HTML-Datei einzufügen; verwenden Sie eine neue Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Grundlage, wenn Sie möchten):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Fügen Sie der Seite das folgende JavaScript hinzu:

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});
```

Hier speichern wir eine Referenz zur E-Mail-Eingabe und fügen dann einen Event-Listener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster einer gut geformten E-Mail-Adresse entspricht. In diesem Fall rufen wir die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass beim Versuch, das Formular zu senden, das Absenden fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einem leeren String auf. Dies macht die Eingabe gültig, sodass das Formular gesendet wird. Während der Validierung, wenn ein Formularelement einen `customError` hat, das nicht der leere String ist, wird das Absenden des Formulars blockiert.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie finden dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) sowie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Erweitern der integrierten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine angepasste Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können.
Es ist auch möglich, alle integrierte Formularvalidierung zu verwenden und sie dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die integrierte [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)-Validierung erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren.
Wir beginnen mit dem unten stehenden HTML-{{htmlelement("form")}}.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt.
Im Falle einer neuen Eingabe setzt der Code zunächst die benutzerdefinierte Gültigkeitsnachricht zurück, indem er `setCustomValidity("")` aufruft.
Anschließend verwendet er `email.validity.valid`, um zu überprüfen, ob die eingegebene Adresse ungültig ist und bricht in diesem Fall den Event-Handler ab.
Dies stellt sicher, dass alle normalen integrierten Validierungsüberprüfungen ausgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Einschränkung hinzu, indem `setCustomValidity()` mit einer Fehlermeldung aufgerufen wird, wenn die Adresse nicht mit `@example.com` endet.

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  // Validate with the built-in constraints
  email.setCustomValidity("");
  if (!email.validity.valid) {
    return;
  }

  // Extend with a custom constraints
  if (!email.value.endsWith("@example.com")) {
    email.setCustomValidity("Please enter an email address of @example.com");
  }
});
```

Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet, einzugeben.

{{EmbedLiveSample("extending built-in form validation", "", 200, , , , , "allow-forms")}}

#### Ein detaillierteres Beispiel

Jetzt, da wir ein wirklich einfaches Beispiel gesehen haben, sehen wir, wie wir diese API verwenden können, um eine etwas komplexere benutzerdefinierte Validierung zu erstellen.

Zuerst das HTML. Erbauen Sie dies wieder gerne mit uns:

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut, um die automatische Validierung des Browsers zu deaktivieren. Durch das Setzen des `novalidate`-Attributs auf das Formular wird das eigene Fehlermeldungsfenster des Formulars ausgeschaltet, und es ermöglicht uns stattdessen, die

benutzerdefinierten Fehlermeldungen auf irgendeine Weise im DOM anzuzeigen.
Dies verhindert jedoch nicht die Unterstützung für die Constraint Validation API, noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}}, usw.
Dass bedeutet, dass auch wenn der Browser die Gültigkeit des Formulars nicht automatisch überprüft, bevor dessen Daten gesendet werden, Sie dies dennoch selbst tun können und das Formular entsprechend gestalten.

Unsere zu validierende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), das `erforderlich` ist und eine `minlength` von 8 Zeichen hat. Überprüfen wir diese mit unserem eigenen Code und zeigen eine benutzerdefinierte Fehlermeldung für jede an.

Wir beabsichtigen, die Fehlermeldungen in einem `<span>`-Element anzuzeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Attribut wird auf dieses `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung für alle Personen präsent wird, einschließlich der Lesung für Screenreader-Benutzer.

Nun zu etwas grundlegenden CSS, um das Erscheinungsbild des Formulars etwas zu verbessern, und visuelles Feedback bereitzustellen, wenn die Eingabedaten ungültig sind:

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

p * {
  display: block;
}

input[type="email"] {
  appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* invalid fields */
input:invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus:invalid {
  outline: none;
}

/* error message styles */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

Nun, lassen Sie uns den JavaScript-Code betrachten, der die benutzerdefinierte Fehlerprüfung implementiert.
Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier beziehen wir das Formular selbst und das Eingabefeld für die E-Mail
sowie das Spar-Element, in welches wir die Fehlermeldung einfügen werden.

Mithilfe von Event-Handlern, überprüfen wir jedes Mal, wenn der Benutzer etwas eingibt, ob die Formularfelder gültig sind. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir sämtliche Fehlermeldungen.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; // Remove the message content
    emailError.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is invalid
  if (!email.validity.valid) {
    // display an appropriate error message
    showError();
    // prevent form submission
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If empty
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // Add the `active` class
  emailError.className = "error active";
}
```

Jedes Mal, wenn wir den Wert der Eingabeänderung ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn ja, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular zu senden, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular senden. Wenn nicht, führenwir `showError()` aus, um den entsprechenden Fehler anzuzeigen und verhindern das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um festzustellen, was der Fehler ist, und zeigt dann eine Fehlermeldung nach Bedarf an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie finden dieses Beispiel live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) sowie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint Validation API gibt Ihnen ein mächtiges Werkzeug zur Hand, mit dem Sie die Formularvalidierung handhaben können, sodass Sie enorme Kontrolle über die Benutzeroberfläche haben, die über das hinausgeht, was Sie nur mit HTML und CSS tun können.

### Validierung von Formularen ohne integrierte API

In einigen Fällen, wie [benutzerdefinierte Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können oder möchten Sie die Constraint Validation API nicht verwenden. Sie können dennoch JavaScript verwenden, um Ihr Formular zu validieren, aber Sie müssen es einfach selbst schreiben.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung soll ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenkettenoperationen, Typumwandlungen, reguläre Ausdrücke und so weiter. Das liegt bei Ihnen.
- Was soll ich tun, wenn das Formular nicht gültig ist?
  - : Dies ist offensichtlich eine UI-Angelegenheit. Sie müssen entscheiden, wie sich das Formular verhält. Sendet das Formular die Daten trotzdem?
    Sollten Sie die Felder, die im Fehler sind, hervorheben?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?
  - : Um die Frustration des Benutzers zu verringern, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu leiten.
    Sie sollten Vorfeld-Vorschläge anbieten, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie sich wirklich eingehend mit den UI-Anforderungen zur Formularvalidierung beschäftigen möchten, lesen Sie bitte folgende nützliche Artikel:
    - [Benutzern helfen, die richtigen Daten in Formularen einzugeben](https://web.dev/learn/forms/form-fields)
    - [Validierung von Eingaben](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Fehler in Formularen melden: 10 Design-Richtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, ist das folgende ein vereinfachtes Beispiel des vorherigen Beispiels, jedoch ohne die Constraint Validation API.

Das HTML ist fast dasselbe; wir haben nur die HTML-Validierungsfunktionen entfernt.

```html
<form>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
    </label>
    <input type="text" id="mail" name="mail" />
    <span id="error" aria-live="polite"></span>
  </p>
  <button>Submit</button>
</form>
```

Ähnlich muss sich das CSS nicht sehr stark ändern; wir haben einfach die {{cssxref(":invalid")}}-CSS-Pseudoklasse in eine reale Klasse umgewandelt und vermieden, den Attributselektor zu verwenden.

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input {
  appearance: none;
  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* invalid fields */
input.invalid {
  border: 2px solid #900;
  background-color: #fdd;
}

input:focus.invalid {
  outline: none;
  /* make sure keyboard-only users see a change when focusing */
  border-style: dashed;
}

/* error messages */
#error {
  width: 100%;
  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.active {
  padding: 0.3rem;
}
```

Die großen Änderungen liegen im JavaScript-Code, der weit mehr Schwerstarbeit leisten muss.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = document.getElementById("error");

// Regular expression for email validation as per HTML specification
const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

// Check if the email is valid
const isValidEmail = () => {
  const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};

// Update email input class based on validity
const setEmailClass = (isValid) => {
  email.className = isValid ? "valid" : "invalid";
};

// Update error message and visibility
const updateError = (isValidInput) => {
  if (isValidInput) {
    error.textContent = "";
    error.removeAttribute("class");
  } else {
    error.textContent = "I expect an email, darling!";
    error.setAttribute("class", "active");
  }
};

// Initialize email validity on page load
const initializeValidation = () => {
  const emailInput = isValidEmail();
  setEmailClass(emailInput);
};

// Handle input event to update email validity
const handleInput = () => {
  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  updateError(emailInput);
};

// Handle form submission to show error if email is invalid
const handleSubmit = (event) => {
  event.preventDefault();

  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  updateError(emailInput);
};

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
window.addEventListener("load", initializeValidation);
// This defines what happens when the user types in the field
email.addEventListener("input", handleInput);
// This defines what happens when the user tries to submit the data
form.addEventListener("submit", handleSubmit);
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Wie Sie sehen können, ist es nicht so schwer, ein Validierungssystem selbst zu erstellen. Der schwierige Teil besteht darin, es generisch genug zu machen, um es plattformübergreifend und auf jedem von Ihnen erstellten Formular zu verwenden. Es gibt viele Bibliotheken, die zur Durchführung der Formularvalidierung verfügbar sind, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen gespeichert haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Form_validation).

## Zusammenfassung

Die Client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie das Styling und die Fehlermeldungen anpassen möchten, aber sie erfordert _immer_, dass Sie den Benutzer sorgfältig berücksichtigen.
Erinnern Sie sich immer daran, Ihren Benutzern zu helfen, die Daten zu korrigieren, die sie bereitstellen. Zu diesem Zweck stellen Sie sicher, dass Sie:

- Explizite Fehlermeldungen anzeigen.
- Fleissig hinsichtlich des Eingabeformats sind.
- Exakt aufzeigen, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular gesendet werden.
Wir werden als Nächstes das [Versenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) behandeln.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
