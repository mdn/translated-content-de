---
title: Client-seitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularfelder ausgefüllt und im richtigen Format sind, bevor Benutzereingaben an den Server übermittelt werden. Diese **Client-seitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten den Anforderungen entsprechen, die in den verschiedenen Formularfeldern festgelegt sind.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der Client-seitigen Formularvalidierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computerkenntnisse, ein angemessenes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was Client-seitige Formularvalidierung ist, warum sie wichtig ist und wie man verschiedene Techniken anwendet, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die Client-seitige Validierung ist ein erster Check und ein wichtiges Merkmal für eine gute Benutzererfahrung; durch das Auffangen ungültiger Daten auf der Client-Seite kann der Benutzer diese direkt korrigieren. Wenn sie zum Server gelangen und dort abgelehnt werden, entsteht durch die Hin- und Rückreise zum Server eine spürbare Verzögerung, um dem Benutzer mitzuteilen, dass er die Daten korrigieren soll.

Jedoch sollte die Client-seitige Validierung _nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Apps sollten immer auch Validierungen, einschließlich Sicherheitsprüfungen, bei allen formularübermittelten Daten auf der _Server-Seite_ durchführen, da die Client-seitige Validierung zu leicht zu umgehen ist und böswillige Benutzer dennoch leicht schlechte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung von Validierungen auf der Server-Seite liegt etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten dies im Hinterkopf behalten.

## Was ist Formularvalidierung?

Besuchen Sie eine beliebte Seite mit einem Registrierungsformular, und Sie werden feststellen, dass Feedback bereitgestellt wird, wenn Sie Ihre Daten nicht im erwarteten Format eingeben. Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (ein spezifisches Datenformat ist erforderlich, damit es als gültig betrachtet wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (Die eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies nennt man **Formularvalidierung**. Wenn Sie Daten eingeben, prüft der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der von der Anwendung festgelegten Einschränkungen sind. Die im Browser durchgeführte Validierung wird als **Client-seitige** Validierung bezeichnet, während die Validierung auf dem Server als **Server-seitige** Validierung bezeichnet wird. In diesem Kapitel konzentrieren wir uns auf die Client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, lässt die Anwendung die Daten an den Server übermitteln und (in der Regel) in einer Datenbank speichern; sind die Informationen nicht korrekt formatiert, gibt sie dem Nutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und lässt ihn es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich machen. Warum bestehen wir also darauf, unsere Formulare zu validieren? Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert sind, falsch sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen.** Wenn wir unsere Benutzer zwingen, sichere Passwörter einzugeben, können wir ihre Kontoinformationen leichter schützen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die von der Client-Seite an Ihren Server gesendet werden. Selbst wenn Ihr Formular korrekt validiert und falsch formatierte Eingaben auf der Client-Seite verhindert, kann ein böswilliger Benutzer die Netzwerkanfrage dennoch ändern.

## Verschiedene Arten der Client-seitigen Validierung

Im Web werden Ihnen zwei verschiedene Arten der Client-seitigen Validierung begegnen:

- **HTML-Formularvalidierung** HTML-Formularattribute können festlegen, welche Formularsteuerelemente erforderlich sind und in welchem Format die Benutzereingabedaten gültig sein müssen.
- **JavaScript-Formularvalidierung** JavaScript wird allgemein hinzugefügt, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Die Client-seitige Validierung kann mit wenig bis gar keinem JavaScript durchgeführt werden. HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als JavaScript-Validierung. Es wird allgemein empfohlen, Ihre Formulare mit soliden HTML-Funktionen zu beginnen und dann bei Bedarf das Benutzererlebnis mit JavaScript zu verbessern.

## Verwendung der integrierten Formularvalidierung

Eine der bedeutendsten Eigenschaften von [Formularsteuerelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne auf JavaScript angewiesen zu sein. Dies geschieht durch die Verwendung von Validierungsattributen auf Formularelementen. Viele davon haben wir bereits im Kurs gesehen, aber zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular abgeschickt werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die minimalen und maximalen Werte von numerischen Eingabetypen sowie das Inkrement oder den Schritt für die Werte an, beginnend mit dem Minimum.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Nummer, eine E-Mail-Adresse oder ein anderer spezifischer voreingestellter Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in einem Formularfeld eingegebenen Daten alle durch die auf das Feld angewendeten Attribute festgelegten Regeln befolgen, werden sie als gültig betrachtet. Andernfalls gelten sie als ungültig.

Ist ein Element gültig, gilt Folgendes:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, wodurch Sie einen spezifischen Stil auf gültige Elemente anwenden können. Das Steuerelement entspricht auch {{cssxref(":user-valid")}}, wenn der Benutzer mit dem Steuerelement interagiert hat, und kann anderen UI-Pseudoklassen entsprechen, wie {{cssxref(":in-range")}}, abhängig vom Eingabetyp und Attributen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular übermitteln, vorausgesetzt, es gibt nichts anderes, das dies verhindert (z.B. JavaScript).

Ist ein Element ungültig, gilt Folgendes:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Hat der Benutzer mit dem Steuerelement interagiert, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudoklassen können ebenfalls zutreffen, wie {{cssxref(":out-of-range")}}, abhängig vom Fehler. Damit können Sie einen spezifischen Stil auf ungültige Elemente anwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung variiert je nach Fehlertyp. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für eingebaute Formularvalidierung

In diesem Abschnitt werden wir einige der oben besprochenen Attribute testen.

### Einfaches Startbeispiel

Lassen Sie uns mit einem einfachen Beispiel beginnen: eine Eingabe, die Ihnen ermöglicht, sich zwischen einer Banane oder einer Kirsche zu entscheiden.
Dieses Beispiel beinhaltet ein einfaches Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Absende-{{htmlelement("button")}}.

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

Beginnen Sie, indem Sie eine Kopie der [`fruit-start.html`-Datei auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in einem neuen Verzeichnis auf Ihrer Festplatte speichern.

### Das erforderliche Attribut

Ein häufiges HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut.
Fügen Sie dieses Attribut einer Eingabe hinzu, um ein Element erforderlich zu machen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht übermittelt, sondern zeigt eine Fehlermeldung bei der Übermittlung an, wenn die Eingabe leer ist.
Solange die Eingabe leer ist, wird sie auch als ungültig betrachtet und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein beliebiges Optionsfeld in einer gleichnamigen Gruppe das `required`-Attribut hat, muss eines der Optionen in dieser Gruppe ausgewählt werden, damit die Gruppe gültig ist; das ausgewählte Optionsfeld muss nicht das sein, das das Attribut gesetzt hat.

> [!NOTE]
> Fordern Sie nur Daten an, die Sie benötigen: Ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu erfahren?

Fügen Sie Ihrer Eingabe ein `required`-Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(erforderlich)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darauf hinzuweisen, dass das {{htmlelement("input")}} erforderlich ist. Den Benutzern anzuzeigen, wenn Formularfelder erforderlich sind, ist nicht nur eine gute Benutzererfahrung, sondern auch von den WCAG-[Barrierefreiheits](/de/docs/Learn_web_development/Core/Accessibility)-Richtlinien vorgeschrieben.

Wir fügen CSS-Stile hinzu, die basierend darauf angewendet werden, ob das Element erforderlich, gültig und ungültig ist:

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

Dieses CSS bewirkt, dass die Eingabe einen roten, gestrichelten Rahmen erhält, wenn sie ungültig ist, und einen subtileren, durchgängigen schwarzen Rahmen, wenn sie gültig ist. Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular aus dem [Live-`required`-Beispiel](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne einen Wert abzusenden. Beachten Sie, wie der ungültige Eingabefokus erhalten bleibt, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") angezeigt wird und das Formular nicht gesendet werden kann. Sie können auch den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) sehen.

### Validierung gegen einen regulären Ausdruck

Eine andere nützliche Validierungsfunktion ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das als Wert einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) erwartet. Ein regulärer Ausdruck (Regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textstrings zu erkennen, sodass Regexp sich ideal für die Formularvalidierung und eine Vielzahl anderer Anwendungen in JavaScript eignet.

Regexps sind ziemlich komplex, und wir beabsichtigen nicht, sie in diesem Artikel umfassend zu lehren. Unten sind einige Beispiele, um Ihnen eine grundlegende Vorstellung davon zu geben, wie sie funktionieren.

- `a` — Passt zu einem Zeichen, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Passt zu `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Passt zu `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Passt zu `a`, optional gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Passt zu einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Passt genau zu `abc` oder genau zu `xyz` (aber nicht `abcxyz` oder `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken. Eine vollständige Liste und viele Beispiele finden Sie in unserer [Dokumentation zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Lassen Sie uns ein Beispiel implementieren. Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut wie folgt hinzuzufügen:

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

Sie können dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) sowie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html) finden.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Strings "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind groß-/kleinschreibungssensitiv, aber wir haben es unterstützt, sowohl Großbuchstaben als auch Kleinbuchstaben mit einem zusätzlichen "Aa"-Muster innerhalb von eckigen Klammern zu unterstützen.

Versuchen Sie an diesem Punkt, den Wert im [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut auf einige der zuvor gesehenen Beispiele zu ändern, und sehen Sie, wie sich das auf die Werte auswirkt, die Sie eingeben können, um die Eingabe gültig zu machen. Versuchen Sie, einige Ihrer eigenen zu erstellen, und sehen Sie, wie es läuft. Machen Sie sie fruchtbezogen, wann immer möglich, damit Ihre Beispiele Sinn machen!

Wenn der nicht-leere Wert des {{HTMLElement("input")}} nicht mit dem Muster des regulären Ausdrucks übereinstimmt, wird die `input` als {{cssxref(':invalid')}} Pseudoklasse klassifiziert. Ist der Wert leer und das Element nicht erforderlich, gilt er nicht als ungültig.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, um gegen einen regulären Ausdruck validiert zu werden. Zum Beispiel validiert die Angabe des `email`-Typs die Eingabewerte gegen ein gut-geformtes E-Mail-Adressmuster oder ein Muster, das eine durch Komma getrennte Liste von E-Mail-Adressen entspricht, wenn es das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut nicht.

### Beschränken der Länge Ihrer Eingaben

Sie können die Zeichenlänge aller durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder beschränken, indem Sie die Attribute [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) verwenden. Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen hat als der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)-Wert oder mehr als der [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Wert.

Browser lassen oft nicht zu, dass der Benutzer einen länger erwarteten Wert in Textfelder eingibt. Eine bessere Benutzererfahrung als nur `maxlength` zu verwenden, besteht darin, auch Feedback zur Zeichenzählung auf eine zugängliche Weise bereitzustellen und dem Benutzer zu ermöglichen, seinen Inhalt auf die richtige Größe zu bearbeiten. Ein Beispiel dafür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies bereitzustellen.

> [!NOTE]
> Längenbeschränkungen werden nie gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur für Benutzereingaben gemeldet.

### Beschränken der Werte Ihrer Eingaben

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und der verschiedenen Datumseingabetypen, können die Attribute [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) verwendet werden, um einen Bereich gültiger Werte bereitzustellen. Wenn das Feld einen Wert enthält, der außerhalb dieses Bereichs liegt, wird es als ungültig betrachtet.

Schauen wir uns ein weiteres Beispiel an. Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html)-Datei.

Löschen Sie nun den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch das folgende:

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

- Hier sehen Sie, dass wir dem `text`-Feld eine `minlength` und eine `maxlength` von sechs gegeben haben, was der gleichen Länge wie Banane und Kirsche entspricht.
- Außerdem haben wir dem `number`-Feld ein `min` von eins und ein `max` von zehn gegeben. Zahlen, die außerhalb dieses Bereichs eingegeben werden, werden als ungültig angezeigt; Benutzer können nicht die Inkrement-/Dekrement-Tasten verwenden, um den Wert außerhalb dieses Bereichs zu bewegen. Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig. Die Zahl ist nicht erforderlich, sodass das Entfernen des Wertes zu einem gültigen Wert führt.

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

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html) an.

Numerische Eingabefelder, wie `number`, `range` und `date`, können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut verwenden. Dieses Attribut gibt an, welches Inkrement der Wert beim Verwenden der Eingabesteuerungen verringert oder erhöht wird (z. B. die Hoch- und Herunternummerknöpfe oder das Schieben des Bereichsdaumens). Das `step`-Attribut wurde in unserem Beispiel weggelassen, sodass der Wert auf `1` standardisiert wird. Das bedeutet, dass Floatwerte wie 3.2 ebenfalls als ungültig angezeigt werden.

### Volles Beispiel

Hier ist ein vollständiges Beispiel zur Darstellung der Verwendung der integrierten HTML-Validierungsfunktionen. Zuerst etwas HTML:

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

Und jetzt etwas CSS, um das HTML zu stylen:

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

Dieses [vollständige Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html) verfügbar.

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) für eine vollständige Liste von Attributen, die verwendet werden können, um Eingabewerte einzuschränken und welche Eingabetypen sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich. In diesem Abschnitt betrachten wir die verschiedenen Möglichkeiten, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden Formularelement DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen bereit.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerungselement nicht erfüllt (falls vorhanden). Wenn das Steuerungselement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), wird ein leerer String zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften beschreibt, die den Gültigkeitsstatus des Elements beschreiben. Sie können vollständige Details zu allen verfügbaren Eigenschaften auf der [`ValidityState`](/de/docs/Web/API/ValidityState)-Referenzseite finden; im Folgenden sind einige der häufigeren aufgelistet:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die maximale Länge, die durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut angegeben ist, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die minimale Länge, die durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angegeben ist, oder `false`, wenn er größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das Maximum, das durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut angegeben ist, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das Minimum, das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut angegeben ist, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht der erforderlichen Syntax entspricht (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; sonst der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber keinen Wert, oder `false` sonst. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element beim Absenden des Formulars validiert wird; sonst `false`.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form)-Element bereit.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; sonst `false`. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid`-Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder unter Verwendung von Ereignissen. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit`-Ereignishandler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig angesehen und der angegebene Fehler wird angezeigt. Dies ermöglicht Ihnen, JavaScript-Code zu verwenden, um einen Validierungsfehler auf andere Weise zu erstellen als die Standard-HTML-Validierungsbeschränkungen. Die Nachricht wird dem Benutzer beim Melden des Problems angezeigt.

#### Implementieren einer benutzerdefinierten Fehlermeldung

Wie Sie in den HTML-Validierungsbeispielen zuvor gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular abzusenden, eine Fehlermeldung an. Die Anzeige dieser Nachricht hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen standardmäßigen Weg, ihr Aussehen mit CSS zu ändern.
- Sie sind abhängig von der Browsersprache, was bedeutet, dass Sie eine Seite in einer Sprache und eine Fehlermeldung in einer anderen Sprache haben können, wie im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox in Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist eine der häufigsten Anwendungsfälle der Constraint Validation API. Lassen Sie uns ein Beispiel dafür durchgehen, wie dies getan werden kann.

Wir beginnen mit etwas HTML (fühlen Sie sich frei, dies in eine leere HTML-Datei zu setzen; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Grundlage, wenn Sie möchten):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Fügen Sie der Seite folgendes JavaScript hinzu:

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

Hier speichern wir eine Referenz auf die E-Mail-Eingabe, dann fügen wir einen Ereignislistener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert in der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster einer gut-geformten E-Mail-Adresse entspricht. Wenn ja, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass bei einem Absendeversuch das Absenden fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einem leeren String auf. Dies macht die Eingabe gültig, sodass das Formular gesendet wird. Während der Validierung, wenn ein Steuerelement eine `customError` hat, die nicht der leere String ist, wird das Absenden des Formulars blockiert.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Dieses Beispiel finden Sie live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html), zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Erweiterung der eingebauten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können. Es ist auch möglich, die gesamte eingebaute Formularvalidierung zu nutzen und dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die eingebaute [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)-Validierung erweitern können, um nur Adressen mit der `@example.com`-Domain zu akzeptieren. Wir beginnen mit dem HTML-{{htmlelement("form")}}-Element unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt. Im Falle einer neuen Eingabe setzt der Code zuerst die benutzerdefinierte Fehlermeldung zurück, indem er `setCustomValidity("")` aufruft. Anschließend verwendet er `email.validity.valid`, um zu überprüfen, ob die eingegebene Adresse ungültig ist und wenn ja, wird aus dem Ereignishandler zurückgekehrt. Dies stellt sicher, dass alle normalen eingebauten Validierungsprüfungen durchgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Einschränkung hinzu, indem er `setCustomValidity()` mit einer Fehlermeldung aufruft, wenn die Adresse nicht mit `@example.com` endet.

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

Sie können dieses Beispiel in der Seite unter dem {{LiveSampleLink('Extending_built-in_form_validation', 'Live-Demo-Link')}} ausprobieren. Versuchen Sie, eine ungültige E-Mail-Adresse einzugeben, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet.

#### Ein detaillierteres Beispiel

Nachdem wir nun ein wirklich einfaches Beispiel gesehen haben, wollen wir sehen, wie wir diese API verwenden können, um eine etwas komplexere benutzerdefinierte Validierung zu erstellen.

Zuerst das HTML. Bauen Sie es gerne mit uns zusammen:

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

Dieses Formular verwendet das Attribut [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate), um die automatische Validierung des Browsers auszuschalten. Das Setzen des `novalidate`-Attributs im Formular verhindert, dass das Formular seine eigenen Fehlermeldungsblasen zeigt, und ermöglicht es uns stattdessen, die benutzerdefinierten Fehlermeldungen im DOM auf eine Weise unserer Wahl anzuzeigen. Dies deaktiviert jedoch nicht die Unterstützung für die Constraint Validation API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}}, usw. Das bedeutet, dass selbst wenn der Browser die Gültigkeit des Formulars nicht automatisch überprüft, bevor seine Daten gesendet werden, Sie dies weiterhin selbst tun und das Formular entsprechend stylen können.

Unsere Eingabe, die zu überprüfen ist, ist eine [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), die `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jede anzeigen.

Wir beabsichtigen, die Fehlermeldungen in einem `<span>`-Element anzuzeigen. Das Attribut [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) wird auf dieses `<span>`-Element gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung jedem gezeigt wird, einschließlich der Vorlesung für Bildschirmleserbenutzer.

Nun zu etwas grundlegender CSS, um das Aussehen des Formulars leicht zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

Schauen wir uns nun das JavaScript an, das die benutzerdefinierte Fehlerüberprüfung implementiert. Es gibt viele Möglichkeiten, ein DOM-Knoten auszuwählen; hier holen wir uns das Formular selbst und das E-Mail-Eingabefeld, sowie das Span-Element, in das wir die Fehlermeldung platzieren werden.

Verwendung von Ereignishandlern, prüfen wir, ob die Formulardaten jedes Mal gültig sind, wenn der Benutzer etwas eingibt. Wenn es einen Fehler gibt, zeigen wir ihn an. Wenn es keinen Fehler gibt, entfernen wir alle Fehlermeldungen.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, prüfen wir, ob sie gültige Daten enthält. Wenn ja, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzusenden, prüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular absenden. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) das Absenden des Formulars.

Die `showError()`-Funktion verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um zu bestimmen, was der Fehler ist, und dann die entsprechende Fehlermeldung anzuzeigen.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Dieses Beispiel finden Sie live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html), zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint Validation API bietet Ihnen ein leistungsstarkes Werkzeug zur Handhabung der Formularvalidierung, das Ihnen enorme Kontrolle über die Benutzeroberfläche gibt, weit über das hinaus, was Sie mit HTML und CSS alleine tun können.

### Validierung von Formularen ohne integrierte API

In einigen Fällen, wie bei [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können oder wollen Sie die Constraint Validation API nicht verwenden. Sie können trotzdem JavaScript verwenden, um Ihr Formular zu validieren, aber Sie müssen Ihr eigenes schreiben.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen entscheiden, wie Sie Ihre Daten validieren: Zeichenkettenoperationen, Typkonvertierungen, reguläre Ausdrücke und so weiter. Das liegt ganz bei Ihnen.
- Was sollte ich tun, wenn das Formular nicht valide ist?
  - : Dies ist eindeutig eine UI-Angelegenheit. Sie müssen entscheiden, wie sich das Formular verhält. Sendet das Formular die Daten trotzdem? Sollten Sie die Felder hervorheben, die fehlerhaft sind? Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Nutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben anzuleiten. Sie sollten im Voraus Vorschläge unterbreiten, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen anzeigen. Wenn Sie mehr über die Anforderungen an die Formularvalidierung erfahren möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:

    - [Helfen Sie Benutzern, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/form-fields)
    - [Validierung von Eingaben](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man fehlende Eingabemöglichkeiten in Formularen meldet: 10 Design-Richtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, folgt hier eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

Das HTML ist fast identisch; wir haben nur die HTML-Validierungsfunktionen entfernt.

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

Ebenso muss sich das CSS nicht sehr ändern; wir haben die {{cssxref(":invalid")}} CSS-Pseudoklasse nur in eine echte Klasse umgewandelt und verwenden keinen Attributselektor.

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

Die großen Änderungen erfolgen im JavaScript-Code, der viel mehr Arbeit leisten muss.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = document.getElementById("error");

// Regular expression for email validation as per HTML specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Wie Sie sehen können, ist es nicht so schwer, ein Validierungssystem selbst zu erstellen. Der schwierige Teil ist, es so generisch zu machen, dass es sowohl plattformübergreifend als auch auf jedem Formular, das Sie möglicherweise erstellen, verwendet werden kann. Es gibt viele Bibliotheken, die Formularvalidierung durchführen, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie die Gestaltung und Fehlermeldungen anpassen möchten, aber es erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken. Denken Sie stets daran, Ihren Benutzern zu helfen, die von ihnen angegebenen Daten zu korrigieren. Zu diesem Zweck stellen Sie sicher, dass Sie:

- Explizite Fehlermeldungen anzeigen.
- Nachsichtig mit dem Eingabeformat sind.
- Genau aufzeigen, wo der Fehler auftritt, insbesondere bei größeren Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular gesendet werden. Als nächstes behandeln wir das [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
