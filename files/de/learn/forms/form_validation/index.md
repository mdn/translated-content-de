---
title: Client-seitige Formularvalidierung
slug: Learn/Forms/Form_validation
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

Es ist wichtig, sicherzustellen, dass alle erforderlichen Formularsteuerelemente ausgefüllt und im korrekten Format angegeben sind, bevor Benutzerdaten an den Server gesendet werden. Diese **Client-seitige Formularvalidierung** hilft sicherzustellen, dass eingegebene Daten den in den verschiedenen Formularsteuerelementen festgelegten Anforderungen entsprechen.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der Client-seitigen Formularvalidierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computerkenntnisse, ein gutes Verständnis von
        <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was Client-seitige Formularvalidierung ist, warum sie wichtig ist und wie verschiedene Techniken angewendet werden können, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die Client-seitige Validierung ist eine erste Überprüfung und eine wichtige Funktion für eine gute Benutzererfahrung; durch das Auffangen ungültiger Daten auf der Client-Seite kann der Benutzer sie sofort korrigieren. Wenn sie zum Server gelangen und dann abgelehnt werden, entsteht eine merkliche Verzögerung durch die Rundreise zum Server und zurück zur Client-Seite, um dem Benutzer mitzuteilen, dass er seine Daten korrigieren soll.

Dennoch sollte die Client-seitige Validierung _nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer eine Validierung, einschließlich Sicherheitsprüfungen, auf der _Server-Seite_ **sowie** auf der Client-Seite durchführen, da die Client-seitige Validierung zu leicht zu umgehen ist, so dass böswillige Benutzer dennoch leicht schlechte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website security](/de/docs/Learn/Server-side/First_steps/Website_security) für eine Idee dessen, was _passieren könnte;_ die Implementierung von Server-seitiger Validierung liegt zwar außerhalb des Umfangs dieses Moduls, aber Sie sollten dies berücksichtigen.

## Was ist Formularvalidierung?

Gehen Sie auf eine beliebte Seite mit einem Registrierungsformular, und Sie werden feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht im Format eingeben, das erwartet wird. Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein bestimmtes Datenformat ist erforderlich, damit es als gültig angesehen wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die von Ihnen eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies wird als **Formularvalidierung** bezeichnet. Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im richtigen Format vorliegen und innerhalb der vom Anwendungsprogramm festgelegten Einschränkungen liegen. Die im Browser durchgeführte Validierung wird als **Client-seitige** Validierung bezeichnet, während die auf dem Server durchgeführte Validierung als **Server-seitige** Validierung bezeichnet wird. In diesem Kapitel konzentrieren wir uns auf die Client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung, die Daten an den Server zu übermitteln und (normalerweise) in einer Datenbank zu speichern; ist die Information nicht korrekt formatiert, gibt sie dem Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und lässt ihn es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren? Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert, falsch oder ganz weggelassen sind.
- **Wir möchten die Daten unserer Benutzer schützen.** Indem wir unsere Benutzer zwingen, sichere Passwörter einzugeben, wird es einfacher, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um die Anwendung zu schädigen. Siehe [Website security](/de/docs/Learn/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die von der Client-Seite an Ihren Server übergeben werden. Selbst wenn Ihre Formulareingaben korrekt validiert werden und falsche Eingaben auf der Client-Seite verhindern, kann ein böswilliger Benutzer dennoch die Netzwerkanforderungen ändern.

## Verschiedene Arten der Client-seitigen Validierung

Es gibt zwei verschiedene Arten der Client-seitigen Validierung, denen Sie im Web begegnen werden:

- **HTML-Formularvalidierung** HTML-Formularattribute können definieren, welche Formularsteuerelemente erforderlich sind und in welchem Format die von Benutzern eingegebenen Daten vorliegen müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung** JavaScript wird normalerweise hinzugefügt, um die HTML-Formularvalidierung zu erweitern oder anzupassen.

Client-seitige Validierung kann mit wenig bis gar keinem JavaScript erreicht werden. HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als JavaScript-Validierung. Es wird allgemein empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu beginnen und die Benutzererfahrung nach Bedarf mit JavaScript zu verbessern.

## Verwendung der integrierten Formularvalidierung

Eines der bedeutendsten Merkmale von [Formularsteuerelementen](/de/docs/Learn/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne auf JavaScript zurückzugreifen. Dies wird durch die Verwendung von Validierungsattributen bei Formularelementen erreicht. Viele davon haben wir früher im Kurs gesehen, aber um sie zusammenzufassen:

- [`required`](/de/docs/Web/HTML/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular abgeschickt werden kann.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Attributes/min), [`max`](/de/docs/Web/HTML/Attributes/max), und [`step`](/de/docs/Web/HTML/Attributes/step): Gibt die minimalen und maximalen Werte numerischer Eingabetypen und das Inkrement oder den Schritt für Werte ab dem Minimum an.
- [`type`](/de/docs/Web/HTML/Element/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer voreingestellter Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in einem Formularfeld eingegebenen Daten alle durch die an das Feld angewendeten Attribute festgelegten Regeln einhalten, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, sind folgende Punkte zutreffend:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, wodurch Sie einen bestimmten Stil auf gültige Elemente anwenden können. Das Steuerelement entspricht auch {{cssxref(":user-valid")}}, wenn der Benutzer mit dem Steuerelement interagiert hat, und kann je nach Eingabetyp und Attributen anderen UI-Pseudoklassen entsprechen, wie {{cssxref(":in-range")}}.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular übermitteln, vorausgesetzt, es gibt nichts, was dies sonst verhindert (z. B. JavaScript).

Wenn ein Element ungültig ist, sind folgende Punkte zutreffend:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit dem Steuerelement interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudoklassen können ebenfalls entsprechen, wie {{cssxref(":out-of-range")}}, abhängig von dem Fehler. Diese ermöglichen es Ihnen, einen bestimmten Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung unterscheidet sich je nach Art des Fehlers. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für integrierte Formularvalidierung

In diesem Abschnitt testen wir einige der oben diskutierten Attribute.

### Einfaches Startdatei

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, die es Ihnen ermöglicht, zu wählen, ob Sie eine Banane oder eine Kirsche bevorzugen. Dieses Beispiel umfasst eine einfache Text{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Absendebutton {{htmlelement("button")}}.

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

Um zu beginnen, erstellen Sie eine Kopie der [`fruit-start.html` Datei auf Github](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das required-Attribut

Eine häufige Funktion der HTML-Validierung ist das [`required`](/de/docs/Web/HTML/Attributes/required) Attribut. Fügen Sie dieses Attribut einer Eingabe hinzu, um ein Element obligatorisch zu machen. Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht gesendet, wobei es im Falle einer leeren Eingabe eine Fehlermeldung anzeigt. Während es leer ist, wird die Eingabe auch als ungültig betrachtet und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn eine beliebige Schaltfläche einer gleichnamigen Gruppe das `required` Attribut hat, muss eine der Funkschaltflächen in dieser Gruppe markiert sein, damit die Gruppe gültig ist; die markierte Schaltfläche muss nicht diejenige mit dem Attribut sein.

> [!NOTE]
> Verlangen Sie nur Daten, die Sie benötigen: Beispielsweise, ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu wissen?

Fügen Sie ein `required` Attribut zu Ihrer Eingabe hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(required)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darauf hinzuweisen, dass die {{htmlelement("input")}} erforderlich ist. Den Benutzer darauf hinzuweisen, wenn Formularfelder erforderlich sind, ist nicht nur eine gute Benutzererfahrung, es ist laut den WCAG [Zugänglichkeitsrichtlinien](/de/docs/Learn/Accessibility) erforderlich.

Wir fügen CSS-Stile hinzu, die basierend darauf, ob das Element erforderlich, gültig oder ungültig ist, angewendet werden:

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

Dieses CSS bewirkt, dass die Eingabe einen roten gestrichelten Rahmen hat, wenn sie ungültig ist, und einen subtileren schwarzen durchgehenden Rahmen, wenn sie gültig ist. Wir fügten auch einen Hintergrundverlauf hinzu, wenn die Eingabe erforderlich _und_ ungültig ist. Versuchen Sie das neue Verhalten im folgenden Beispiel:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular aus dem [live `required` example](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne einen Wert abzusenden. Beachten Sie, wie die ungültige Eingabe fokussiert wird, eine Standardfehlermeldung ("Please fill out this field") erscheint und das Formular daran gehindert wird, gesendet zu werden. Sie können auch den [Quellcode auf Github](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) sehen.

### Validierung mit einem regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut, das einen [Regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet. Ein regulärer Ausdruck (RegExp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textstrings zu suchen, daher sind Regexps ideal für die Formularvalidierung und haben eine Vielzahl anderer Anwendungen in JavaScript.

Regexps sind ziemlich komplex, und wir beabsichtigen nicht, Ihnen sie in diesem Artikel umfassend beizubringen. Nachfolgend sind einige Beispiele aufgeführt, die Ihnen eine grundlegende Vorstellung davon vermitteln, wie sie funktionieren.

- `a` — Passend zu einem Zeichen, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Passend zu `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Passend zu `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Passend zu `a`, optional gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Passend zu einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Passend zu exakt `abc` oder exakt `xyz` (jedoch nicht `abcxyz` oder `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken. Für eine vollständige Liste und viele Beispiele lesen Sie unsere [Regulärer Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) Dokumentation.

Lassen Sie uns ein Beispiel implementieren. Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut wie folgt hinzuzufügen:

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

Dies ergibt das folgende Update — probieren Sie es aus:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

Sie können dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html) finden.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}} Element einen von vier möglichen Werten: die Strings "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind groß- und kleinschreibungssensitiv, aber wir haben es unterstützt, dass großgeschriebene als auch kleingeschriebene Versionen unterstützt werden, indem wir ein zusätzliches "Aa"-Muster in eckigen Klammern verschachtelt haben.

Versuchen Sie an dieser Stelle, den Wert im [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut so zu ändern, dass er einigen der oben genannten Beispiele entspricht, und sehen Sie sich an, wie sich dies auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen. Versuchen Sie, einige eigene zu schreiben, und sehen Sie, wie es läuft. Machen Sie sie fruchtbezogen, wo möglich, damit Ihre Beispiele Sinn machen!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht mit dem Muster des regulären Ausdrucks übereinstimmt, entspricht die `input` der {{cssxref(':invalid')}} Pseudoklasse. Wenn leer, und das Element ist nicht erforderlich, wird es nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}} Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut, um gegen einen regulären Ausdruck validiert zu werden. Beispielsweise, wenn der `email` Typ angegeben wird, validiert er den Eingabewert gegen ein gut geformtes E-Mail-Adresse-Muster oder ein Muster, das einer durch Kommas getrennten Liste von E-Mail-Adressen entspricht, wenn es das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}} Element unterstützt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut nicht.

### Einschränkung der Länge Ihrer Eingaben

Sie können die Zeichenlänge aller Textfelder, die mit {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellt wurden, durch die Verwendung der [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) Attribute einschränken. Ein Feld ist ungültig, wenn es einen Wert hat und der Wert weniger Zeichen als der [`minlength`](/de/docs/Web/HTML/Attributes/minlength) Wert oder mehr als der [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) Wert enthält.

Browser lassen oft nicht zu, dass der Benutzer einen längeren Wert als erwartet in Textfelder eingibt. Eine bessere Benutzererfahrung als nur `maxlength` zu verwenden, ist es auch, die Zeichenanzahl in einer zugänglichen Weise zu geben und dem Benutzer ermöglichen, ihren Inhalt herunterzuschneiden. Ein Beispiel dafür ist das Zeichenlimit beim Posten auf sozialen Medien. JavaScript, einschließlich [Lösungen, die `maxlength` verwenden](https://github.com/mimo84/bootstrap-maxlength), kann dafür verwendet werden.

> [!NOTE]
> Längeneinschränkungen werden nie gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur für vom Benutzer bereitgestellte Eingaben gemeldet.

### Einschränkung der Werte Ihrer Eingaben

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) und der verschiedenen Dateneingabetypen, können die [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) Attribute verwendet werden, um einen Bereich von gültigen Werten anzugeben. Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, ist es ungültig.

Lassen Sie uns ein weiteres Beispiel ansehen. Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) Datei.

Löschen Sie nun den Inhalt des `<body>` Elements, und ersetzen Sie ihn durch Folgendes:

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

- Hier sehen Sie, dass wir dem `text` Feld eine `minlength` und `maxlength` von sechs gegeben haben, was die gleiche Länge wie Banane und Kirsche ist.
- Wir haben dem `number` Feld auch ein `min` von eins und ein `max` von zehn gegeben. Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können nicht die Inkrement-/Dekrement-Pfeile verwenden, um den Wert außerhalb dieses Bereichs zu verschieben. Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig. Die Zahl ist nicht erforderlich, daher führt das Entfernen des Werts zu einem gültigen Wert.

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

Hier ist das Beispiel, das live läuft:

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html) an.

Numerische Eingabetypen, wie `number`, `range` und `date`, können auch das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut annehmen. Dieses Attribut gibt an, mit welchem Inkrement der Wert erhöht oder verringert wird, wenn die Eingabesteuerelemente verwendet werden (wie die Auf- und Ab-Nummer-Schaltflächen oder das Verschieben des Reichweiten-Daumens). Das `step` Attribut ist in unserem Beispiel weggelassen, daher ist der Wert standardmäßig `1`. Das bedeutet, dass Floats, wie 3.2, ebenfalls als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, um die Verwendung der eingebauten Validierungsfunktionen von HTML zu zeigen. Zuerst etwas HTML:

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

Dieses [vollständige Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

Sehen Sie [Validierungsbezogene Attribute](/de/docs/Web/HTML/Constraint_validation#validation-related_attributes) für eine vollständige Liste der Attribute, die verwendet werden können, um Eingabewerte zu beschränken und die Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich. In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten ansehen, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden Formularelement-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Element/button) Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Element/input) Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Element/output) Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Element/select) Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea) Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen zur Verfügung.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Validierungsprüfung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), gibt dies eine leere Zeichenfolge zurück.
- `validity`: Gibt ein `ValidityState` Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitsstatus des Elements beschreiben. Sie finden die vollständigen Details aller verfügbaren Eigenschaften in der [`ValidityState`](/de/docs/Web/API/ValidityState) Referenzseite; unten sind einige der häufigsten aufgelistet:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht mit dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) übereinstimmt, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger als die durch das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut angegebene maximale Länge ist, oder `false`, wenn er kürzer oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die durch das [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attribut angegebene minimale Länge, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das durch das [`max`](/de/docs/Web/HTML/Element/input#max) Attribut angegebene Maximum, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner als das durch das [`min`](/de/docs/Web/HTML/Element/input#min) Attribut angegebene Minimum ist, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht im erforderlichen Syntaxformat vorliegt (bei [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url`), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig betrachtet wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required) Attribut hat, aber keinen Wert, oder `false` sonst. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element bei der Übermittlung des Formulars validiert wird; `false` sonst.

Die Constraint Validation API stellt die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Element/form) Element zur Verfügung.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; `false` sonst. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mithilfe von Events. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit` Event-Handler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig betrachtet und der angegebene Fehler wird angezeigt. Dadurch können Sie mit JavaScript-Code einen Validierungsfehler festlegen, der von den standardmäßigen HTML-Validierungseinschränkungen nicht angeboten wird. Die Nachricht wird dem Benutzer bei der Meldung des Problems angezeigt.

#### Implementierung einer angepassten Fehlermeldung

Wie Sie in den Beispielen zu HTML-Validierungsbeschränkungen früher gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular zu übermitteln, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen Standardweg, ihr Aussehen und Verhalten mit CSS zu ändern.
- Sie hängen von der Browsersprache ab, was bedeutet, dass Sie eine Seite in einer Sprache und eine Fehlermeldung in einer anderen Sprache haben können, wie in folgendem Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Das Anpassen dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API. Lassen Sie uns ein Beispiel durcharbeiten, wie dies zu tun ist.

Wir beginnen mit etwas HTML (fühlen Sie sich frei, dies in eine leere HTML-Datei zu setzen; verwenden Sie eine neue Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Basis, wenn Sie möchten):

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

Hier speichern wir eine Referenz zur E-Mail-Eingabe und fügen einen Event-Listener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert in der Eingabe ändert.

Innerhalb des enthaltenen Codes überprüfen wir, ob die `validity.typeMismatch` Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster einer gut geformten E-Mail-Adresse entspricht. Wenn dem so ist, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) Methode mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass das Formular beim Versuch, es abzusenden, fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch` Eigenschaft `false` zurückgibt, rufen wir die `setCustomValidity()` Methode mit einer leeren Zeichenfolge auf. Dies macht die Eingabe gültig, sodass das Formular gesendet werden kann. Während der Validierung, wenn ein Steuerelement einen `customError` hat, der nicht der leere String ist, wird die Übermittlung des Formulars blockiert.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie finden dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html), zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Erweiterung der integrierten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine angepasste Nachricht für eine bestimmte Art von Fehler (`validity.typeMismatch`) hinzufügen können. Es ist auch möglich, alle eingebauten Formularvalidierungen zu verwenden und dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die eingebaute [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) Validierung erweitern können, um nur Adressen mit der Domäne `@example.com` zu akzeptieren. Wir beginnen mit der HTML {{htmlelement("form")}} darunter.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt. Im Falle einer neuen Eingabe setzt der Code zuerst die benutzerdefinierte Validitätsnachricht durch Aufrufen von `setCustomValidity("")` zurück. Danach verwendet er `email.validity.valid`, um zu überprüfen, ob die eingegebene Adresse ungültig ist und beendet in diesem Fall den Event-Handler. Auf diese Weise wird sichergestellt, dass alle normalen eingebauten Validierungsprüfungen ausgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Einschränkung hinzu und ruft `setCustomValidity()` mit einer Fehlermeldung auf, wenn die Adresse nicht mit `@example.com` endet.

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

Dieses Beispiel können Sie auf der Seite beim {{LiveSampleLink('Extending_built-in_form_validation', 'Live-Demo-Link')}} ausprobieren. Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet, einzugeben.

#### Ein detaillierteres Beispiel

Jetzt, da wir ein wirklich einfaches Beispiel gesehen haben, lassen Sie uns sehen, wie wir diese API verwenden können, um eine etwas komplexere benutzerdefinierte Validierung zu erstellen.

Zuerst das HTML. Bauen Sie dies gerne mit uns zusammen auf:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut, um die automatische Validierung des Browsers zu deaktivieren. Das Setzen des `novalidate` Attributs auf dem Formular verhindert, dass das Formular seine eigenen Fehlermeldungsblasen anzeigt und ermöglicht es uns stattdessen, die benutzerdefinierten Fehlermeldungen in irgendeiner Weise in das DOM einzufügen, wie wir es möchten. Dies deaktiviert jedoch nicht die Unterstützung der Constraint Validation API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}} usw. Das bedeutet, dass, obwohl der Browser die Gültigkeit des Formulars vor dem Senden seiner Daten nicht automatisch überprüft, Sie dies trotzdem selbst tun und das Formular entsprechend stylen können.

Unsere zu überprüfende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), das `required` ist, und eine `minlength` von 8 Zeichen hat. Lassen Sie uns das mithilfe unserer eigenen Codes überprüfen und eine benutzerdefinierte Fehlermeldung für jede anzeigen.

Wir beabsichtigen, die Fehlermeldungen in einem `<span>` Element anzuzeigen. Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) Attribut ist auf diesem `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung jedem präsentiert wird, einschließlich dass sie für Bildschirmleser-Benutzer vorgelesen wird.

Nun zu etwas Grundlegendes CSS, um das Aussehen des Formulars ein wenig zu verbessern, und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

Schauen wir uns nun das JavaScript an, das die benutzerdefinierte Fehlerüberprüfung implementiert. Es gibt viele Möglichkeiten, einen DOM-Knoten zu wählen; hier erhalten wir das Formular selbst und das E-Mail Eingabefeld, sowie das Span-Element, in das wir die Fehlermeldung platzieren werden.

Mithilfe von Event-Handlern überprüfen wir jedes Mal, wenn der Benutzer etwas eingibt, ob die Formularfelder gültig sind. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir jede Fehlermeldung.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn ja, entfernen wir jede angezeigte Fehlermeldung. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular einzureichen, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular einsenden. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und stoppen die Formulareinsendung mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity` Objekts der Eingabe, um zu bestimmen, was der Fehler ist, und zeigt entsprechend eine Fehlermeldung an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie finden dieses Beispiel live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html), zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint Validation API gibt Ihnen ein leistungsstarkes Tool zur Formularvalidierung, das es Ihnen ermöglicht, eine enorme Kontrolle über die Benutzeroberfläche zu haben, die über das hinausgeht, was Sie nur mit HTML und CSS tun können.

### Formulare ohne integrierte API validieren

In einigen Fällen, wie [benutzerdefinierte Steuerelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls), können Sie die Constraint Validation API nicht verwenden oder möchten sie nicht verwenden. Sie können dennoch JavaScript verwenden, um Ihr Formular zu validieren, aber Sie müssen Ihre eigene schreiben.

Um ein Formular zu validieren, stellen Sie sich ein paar Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenfolgenoperationen, Typkonvertierung, reguläre Ausdrücke usw. Es liegt an Ihnen.
- Was sollte ich tun, wenn das Formular nicht validiert wird?
  - : Dies ist eindeutig eine Benutzeroberflächenangelegenheit. Sie müssen entscheiden, wie das Formular reagieren wird. Sendet das Formular die Daten trotzdem? Sollten Sie die Felder hervorheben, die einen Fehler anzeigen? Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration der Benutzer zu verringern, ist es sehr wichtig, so viele nützliche Informationen wie möglich bereitzustellen, um sie bei der Korrektur ihrer Eingaben zu leiten. Sie sollten im Voraus Vorschläge unterbreiten, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen anzeigen. Wenn Sie die Anforderungen der Benutzeroberfläche zur Formularvalidierung vertiefen möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:

    - [Help users enter the right data in forms](https://web.dev/learn/forms/validation/)
    - [Validating input](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [How to Report Errors in Forms: 10 Design Guidelines](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, ist das folgende eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

Das HTML ist fast das gleiche; wir haben nur die HTML-Validierungsfunktionen entfernt.

```html
<form>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="text" id="mail" name="mail" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

Ebenso muss das CSS nicht viel geändert werden; wir haben nur die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse umgewandelt und die Attribut-Selektoren vermieden.

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

input#mail {
  appearance: none;
  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* invalid fields */
input#mail.invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus.invalid {
  outline: none;
}

/* error messages */
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

Die wesentlichen Änderungen finden sich im JavaScript-Code, der viel mehr Aufgaben übernehmen muss.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;

// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
window.addEventListener("load", () => {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed email address.
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

// This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    error.textContent = "I expect an email, darling!";
    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  }
});
```

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 130)}}

Wie Sie sehen können, ist es nicht so schwierig, ein eigenes Validierungssystem zu erstellen. Die Herausforderung besteht darin, es generisch genug zu machen, um es sowohl plattformübergreifend als auch bei jedem erstellten Formular zu verwenden. Es gibt viele Bibliotheken zur Durchführung der Formularvalidierung, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Können: Formularvalidierung](/de/docs/Learn/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Die Client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie Styling und Fehlermeldungen anpassen möchten, aber sie erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken. Denken Sie immer daran, Ihren Benutzern zu helfen, die von ihnen bereitgestellten Daten zu korrigieren. Um dieses Ziel zu erreichen, sollten Sie sicherstellen, dass Sie:

- Deutliche Fehlermeldungen anzeigen.
- Beim Eingabeformat nachsichtig sein.
- Genau angeben, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular gesendet werden. Wir werden als nächstes das [Versenden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) behandeln.

{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare mit JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
