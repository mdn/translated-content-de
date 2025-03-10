---
title: Client-seitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularsteuerungen ausgefüllt und im richtigen Format sind, bevor die vom Benutzer eingegebenen Formulardaten an den Server gesendet werden. Diese **Client-seitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten den in den verschiedenen Formularsteuerungen festgelegten Anforderungen entsprechen.

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
      <th scope="row">Zielsetzung:</th>
      <td>
        Verstehen, was eine Client-seitige Formularvalidierung ist, warum sie wichtig ist,
        und wie man verschiedene Techniken zur Implementierung anwendet.
      </td>
    </tr>
  </tbody>
</table>

Die Client-seitige Validierung ist ein erster Check und ein wichtiges Merkmal einer guten Benutzererfahrung; indem ungültige Daten auf der Client-Seite abgefangen werden, kann der Benutzer sie sofort korrigieren.
Wenn die Daten erst zum Server gelangen und dann zurückgewiesen werden, entsteht durch die Hin- und Rückreise eine spürbare Verzögerung, um dem Benutzer mitzuteilen, dass seine Daten korrigiert werden müssen.

Die Client-seitige Validierung _sollte jedoch nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Apps sollten immer eine Validierung, einschließlich Sicherheitsüberprüfungen, der von einem Formular übermittelten Daten auf der _Server-Seite_ **sowie** auf der Client-Seite durchführen, da die Client-seitige Validierung zu leicht umgangen werden kann und böswillige Benutzer immer noch leicht fehlerhafte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) für eine Vorstellung davon, was _passieren könnte_; die Implementierung der Server-seitigen Validierung liegt etwas außerhalb des Umfangs dieses Moduls, sollte jedoch im Hinterkopf behalten werden.

## Was ist Formularvalidierung?

Gehen Sie auf eine beliebte Seite mit einem Registrierungsformular, und Sie werden feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Dieses Feld darf nicht leer bleiben).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein spezifisches Datenformat ist erforderlich, damit es als gültig gilt).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die Daten, die Sie eingegeben haben, sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist erforderlich für Ihre Daten).

Dies wird als **Formularvalidierung** bezeichnet.
Wenn Sie Daten eingeben, überprüfen der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der von der Anwendung festgelegten Einschränkungen sind. Die im Browser durchgeführte Validierung wird als **Client-seitige** Validierung bezeichnet, während die auf dem Server durchgeführte Validierung als **Server-seitige** Validierung bezeichnet wird.
In diesem Kapitel konzentrieren wir uns auf die Client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung, die Daten an den Server zu übermitteln und (in der Regel) in einer Datenbank zu speichern; wenn die Informationen nicht korrekt formatiert sind, gibt sie dem Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und lässt ihn es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir dann auf der Validierung unserer Formulare?
Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert sind, falsch sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen**. Die Benutzer zu zwingen, sichere Passwörter einzugeben, macht es einfacher, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen**. Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die von der Client-Seite an Ihren Server gesendet werden. Selbst wenn Ihr Formular korrekt validiert wird und die Eingabe fehlerhaft ist, kann ein böswilliger Benutzer immer noch die Netzwerk-Anfrage ändern.

## Verschiedene Arten der Client-seitigen Validierung

Es gibt zwei verschiedene Arten der Client-seitigen Validierung, die Sie im Web antreffen werden:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können definieren, welche Formularsteuerungen erforderlich sind und in welchem Format die vom Benutzer eingegebenen Daten vorliegen müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird in der Regel hinzugefügt, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Client-seitige Validierung kann mit wenig bis keinem JavaScript durchgeführt werden. HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als JavaScript-Validierung. Es wird allgemein empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu beginnen und dann die Benutzererfahrung mit JavaScript nach Bedarf zu verbessern.

## Verwendung der integrierten Formularvalidierung

Eine der bedeutendsten Funktionen von [Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne auf JavaScript angewiesen zu sein.
Dies geschieht durch die Verwendung von Validierungsattributen auf Formularelementen.
Wir haben viele dieser Attribute früher im Kurs gesehen, hier zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular eingereicht werden kann.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Zeichenfolgen) an.
- [`min`](/de/docs/Web/HTML/Attributes/min), [`max`](/de/docs/Web/HTML/Attributes/max) und [`step`](/de/docs/Web/HTML/Attributes/step): Gibt die minimalen und maximalen Werte von numerischen Eingabetypen und die Schrittweite der Werte an, beginnend mit dem Minimum.
- [`type`](/de/docs/Web/HTML/Element/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer voreingestellter Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in einem Formularfeld eingegebenen Daten alle Regeln befolgen, die durch die auf das Feld angewendeten Attribute spezifiziert sind, wird es als gültig betrachtet. Andernfalls wird es als ungültig betrachtet.

Wenn ein Element gültig ist, gilt Folgendes:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen bestimmten Stil auf gültige Elemente anzuwenden. Die Steuerung entspricht auch {{cssxref(":user-valid")}}, wenn der Benutzer mit der Steuerung interagiert hat und kann anderen UI-Pseudoklassen wie {{cssxref(":in-range")}} entsprechen, abhängig vom Eingabetyp und den Attributen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular übermitteln, vorausgesetzt, es gibt nichts anderes, das es daran hindert (z. B. JavaScript).

Wenn ein Element ungültig ist, gilt Folgendes:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit der Steuerung interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudoklassen können auch übereinstimmen, wie {{cssxref(":out-of-range")}}, abhängig vom Fehler. Diese ermöglichen es Ihnen, einen bestimmten Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung unterscheidet sich je nach Fehlertyp. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für integrierte Formularvalidierung

In diesem Abschnitt werden wir einige der oben besprochenen Attribute testen.

### Einfaches Startbeispiel

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, die es Ihnen ermöglicht, zu wählen, ob Sie lieber eine Banane oder eine Kirsche haben möchten.
Dieses Beispiel beinhaltet eine einfache Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Abschicken-{{htmlelement("button")}}.

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

Um zu beginnen, machen Sie eine Kopie der [`fruit-start.html`-Datei, die auf GitHub gefunden wurde](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das required-Attribut

Eine häufige HTML-Validierungsfunktion ist das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut.
Fügen Sie dieses Attribut zu einer Eingabe hinzu, um ein Element verpflichtend zu machen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht abgeschickt, wobei eine Fehlermeldung bei der Absendung angezeigt wird, wenn die Eingabe leer ist.
Während leer, wird die Eingabe auch als ungültig betrachtet, und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn irgendein Radiobutton in einer gleichnamigen Gruppe das `required`-Attribut hat, muss einer der Radiobuttons in dieser Gruppe ausgewählt werden, damit die Gruppe gültig ist; der ausgewählte Radiobutton muss nicht derjenige mit dem gesetzten Attribut sein.

> [!NOTE]
> Verlangen Sie von den Benutzern nur die Eingabe von Daten, die Sie benötigen: Ist es beispielsweise wirklich notwendig, das Geschlecht oder den Titel einer Person zu wissen?

Fügen Sie Ihrer Eingabe ein `required`-Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(erforderlich)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darüber zu informieren, dass das {{htmlelement("input")}} erforderlich ist. Den Benutzern anzugeben, wann Formulare erforderlich sind, ist nicht nur eine gute Benutzererfahrung, es wird auch von den WCAG-[Barrierefreiheitsrichtlinien](/de/docs/Learn_web_development/Core/Accessibility) gefordert.

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

Dieses CSS bewirkt, dass die Eingabe einen roten gestrichelten Rand hat, wenn sie ungültig ist, und einen subtileren schwarzen Rand, wenn sie gültig ist.
Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular aus dem [Live `required` Beispiel](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne einen Wert zu senden. Beachten Sie, wie die ungültige Eingabe den Fokus erhält, eine Standard-Fehlermeldung ("Bitte füllen Sie dieses Feld aus") angezeigt wird und die Übermittlung des Formulars verhindert wird. Sie können auch den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) sehen.

### Validierung gegen einen regulären Ausdruck

Eine weitere nützliche Validierungsfunktion ist das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, das einen [Regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein regulärer Ausdruck (regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textzeichenfolgen abzugleichen, sodass Regexps ideal für die Formularvalidierung sind und eine Vielzahl anderer Verwendungen in JavaScript haben.

Regexps sind ziemlich komplex, und wir beabsichtigen nicht, Ihnen in diesem Artikel eine umfassende Einführung zu geben.
Hier sind einige Beispiele, um Ihnen eine grundlegende Vorstellung davon zu vermitteln, wie sie funktionieren.

- `a` — Stimmt mit einem Zeichen überein, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Stimmt mit `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Stimmt mit `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Stimmt mit `a`, optional gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Stimmt mit einem Zeichen überein, das `a` oder `b` ist.
- `abc|xyz` — Stimmt genau mit `abc` oder genau `xyz` überein (aber nicht `abcxyz` oder `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele, konsultieren Sie unsere [Dokumentation zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut hinzuzufügen, wie folgt:

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

Sie können dieses [Beispiel live auf GitHub finden](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html).

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind case-sensitive, aber wir haben es unterstützt, sowohl großgeschriebene als auch kleingeschriebene Versionen mit einem zusätzlichen "Aa"-Muster in eckigen Klammern zu unterstützen.

Versuchen Sie an dieser Stelle, den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attributs zu ändern, um einigen der früher gesehenen Beispiele zu entsprechen, und sehen Sie, wie sich das auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen.
Versuchen Sie, einige Ihrer eigenen zu schreiben, und sehen Sie, wie es läuft.
Machen Sie sie nach Möglichkeit fruchtbezogen, damit Ihre Beispiele Sinn machen!

Wenn ein nichtleerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, wird `input` der {{cssxref(':invalid')}} Pseudoklasse entsprechen. Wenn leer und das Element nicht erforderlich ist, wird es nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, um gegen einen regulären Ausdruck validiert zu werden. Zum Beispiel validiert die Angabe des `email`-Typs den Wert der Eingaben gegen ein wohlgeformtes E-Mail-Adressmuster oder ein Muster, das einer durch Kommas getrennten Liste von E-Mail-Adressen entspricht, wenn es das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut nicht.

### Einschränkung der Länge Ihrer Eingaben

Sie können die Zeichenlänge aller durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder über die [`minlength`](/de/docs/Web/HTML/Attributes/minlength)- und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)-Attribute einschränken.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen hat als der [`minlength`](/de/docs/Web/HTML/Attributes/minlength)-Wert oder mehr als der [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)-Wert.

Browser lassen oft nicht zu, dass der Benutzer einen längeren Wert als erwartet in Textfelder eingibt. Eine bessere Benutzererfahrung als nur `maxlength` zu verwenden, besteht darin, auch eine Zeichenanzahl-Rückmeldung auf eine barrierefreie Weise zu bieten und dem Benutzer zu erlauben, seinen Inhalt bis zur Größe zu bearbeiten.
Ein Beispiel hierfür ist die Zeichenbegrenzung beim Posten in sozialen Medien. JavaScript einschließlich [lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies zu bieten.

> [!NOTE]
> Längenbeschränkungen werden nie berichtet, wenn der Wert programmiert gesetzt wird. Sie werden nur für benutzergelieferte Eingaben berichtet.

### Einschränkung der Werte Ihrer Eingaben

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) und die verschiedenen Datumseingabetypen, können die [`min`](/de/docs/Web/HTML/Attributes/min)- und [`max`](/de/docs/Web/HTML/Attributes/max)-Attribute verwendet werden, um einen Bereich gültiger Werte anzugeben.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, wird es als ungültig betrachtet.

Sehen wir uns ein weiteres Beispiel an.
Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html)-Datei.

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

- Hier sehen Sie, dass wir dem Textfeld eine `minlength` und eine `maxlength` von sechs gegeben haben, was die gleiche Länge wie Banane und Kirsche ist.
- Wir haben dem Zahlenfeld auch ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Inkrement-/Dekrementpfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu bewegen.
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
  Die Zahl ist nicht erforderlich, sodass das Entfernen des Wertes zu einem gültigen Wert führt.

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

Hier ist das Beispiel live ausführbar:

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) zu sehen und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html) anzusehen.

Numerische Eingabetypen, wie `number`, `range` und `date`, können auch das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut annehmen. Dieses Attribut gibt an, in welchem Schritt der Wert erhöht oder verringert wird, wenn die Eingabesteuerungen verwendet werden (wie die Auf- und Ab-Nummern-Buttons oder das Verschieben des Bereichsreglers). Das `step`-Attribut wird in unserem Beispiel weggelassen, daher ist der Wert standardmäßig `1`. Dies bedeutet, dass Fließkommazahlen, wie 3.2, auch als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, um die Verwendung von HTML's eingebauten Validierungsfunktionen zu zeigen.
Zuerst ein bisschen HTML:

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Dieses [vollständige Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Constraint_validation#validation-related_attributes) für eine vollständige Liste der Attribute, die verwendet werden können, um Eingabewerte einzuschränken und die Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich.
In diesem Abschnitt werden wir uns die verschiedenen Methoden ansehen, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einem Satz von Methoden und Eigenschaften, die auf den folgenden Formularelement DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Element/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Element/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Element/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Element/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea)-Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen zur Verfügung:

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Validierung von Einschränkungen ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), wird dies eine leere Zeichenfolge zurückgeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitszustand des Elements beschreiben. Sie finden vollständige Informationen zu allen verfügbaren Eigenschaften in der [`ValidityState`](/de/docs/Web/API/ValidityState)-Referenzseite; unten sind einige der häufigsten aufgelistet:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, erfüllt das Element die {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die durch das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut festgelegte maximale Länge oder `false`, wenn er kürzer oder gleich dem Maximum ist. Wenn `true`, erfüllt das Element die {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die durch das [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut festgelegte minimale Länge oder `false`, wenn er größer oder gleich diesem Minimum ist. Wenn `true`, erfüllt das Element die {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als der durch das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut festgelegte Maximalwert oder `false`, wenn er kleiner oder gleich diesem Maximalwert ist. Wenn `true`, erfüllt das Element die {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als der durch das [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut festgelegte Minimalwert oder `false`, wenn er größer oder gleich diesem Minimum ist. Wenn `true`, erfüllt das Element die {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht im erforderlichen Syntax ist (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, erfüllt das Element die {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls die {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, aber keinen Wert, oder `false` andererseits. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, wenn das Formular eingereicht wird; andernfalls `false`.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Element/form)-Element zur Verfügung.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls `false`. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid`-Event](/de/docs/Web/API/HTMLInputElement/invalid_event) für das Element aus.
- `reportValidity()`: Berichtet ungültige Felder mithilfe von Ereignissen. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit`-Event-Handler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig angesehen, und der angegebene Fehler wird angezeigt. Dadurch können Sie mit JavaScript-Code einen Validierungsfehler festlegen, der über die Standard-HTML-Validierungseinschränkungen hinausgeht. Die Nachricht wird dem Benutzer bei der Problemberichterstattung angezeigt.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den HTML-Validierungsbeispielen früher gesehen haben, zeigt jeder Versuch eines Benutzers, ein ungültiges Formular abzuschicken, dem Browser eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen standardisierten Weg, ihr Aussehen und Gefühl mit CSS zu ändern.
- Sie hängen von der Browsersprache ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung an einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Das Anpassen dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns ein Beispiel durcharbeiten, wie man dies tut.

Wir beginnen mit einem HTML-Dokument (fühlen Sie sich frei, dies in einer leeren HTML-Datei zu platzieren; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Grundlage, wenn Sie möchten):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Fügen Sie die folgende JavaScript-Datei zur Seite hinzu:

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

Hier speichern wir eine Referenz auf die E-Mail-Eingabe und fügen ihr einen Ereignis-Listener hinzu, der bei jeder Änderung des Wertes innerhalb der Eingabe den enthaltenen Code ausführt.

Im enthaltenen Code überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster für eine wohlgeformte E-Mail-Adresse entspricht. Wenn ja, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass bei dem Versuch, das Formular zu übermitteln, die Übermittlung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die `setCustomValidity()`-Methode mit einer leeren Zeichenfolge auf. Dies macht die Eingabe gültig, sodass das Formular übermittelt wird. Während der Validierung wird, wenn ein Formularelement eine `customError` hat, die nicht die leere Zeichenfolge ist, die Übermittlung blockiert.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie können dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) finden, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Erweiterung der integrierten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können.
Es ist auch möglich, alle integrierten Formularvalidierungen zu verwenden und dann um `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die integrierte Validierung für [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren.
Wir beginnen mit dem untenstehenden HTML-{{htmlelement("form")}}

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt.
Im Falle einer neuen Eingabe setzt der Code zunächst die benutzerdefinierte Fehlermeldung zurück, indem er `setCustomValidity("")` aufruft.
Er verwendet dann `email.validity.valid`, um zu überprüfen, ob die eingegebene Adresse ungültig ist, und falls ja, wird aus dem Ereignis-Handler zurückgegeben.
Dies stellt sicher, dass alle normalen eingebauten Überprüfungen ausgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

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

Sie können dieses Beispiel auf der Seite am {{LiveSampleLink('Extending_built-in_form_validation', 'Livebeispiel-Demolink')}} ausprobieren.
Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet, einzureichen.

#### Ein detaillierteres Beispiel

Nachdem wir nun ein sehr grundlegendes Beispiel gesehen haben, sehen wir, wie wir mit dieser API einige etwas komplexere benutzerdefinierte Validierungen erstellen können.

Zuerst das HTML. Auch hier können Sie dies gerne mit uns erstellen:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut, um die automatische Validierung des Browsers zu deaktivieren. Durch das Setzen des `novalidate`-Attributs auf dem Formular wird das Formular daran gehindert, seine eigenen Fehlerbläschen anzuzeigen, und es ermöglicht uns stattdessen, die benutzerdefinierten Fehlermeldungen auf eine Weise im DOM anzuzeigen, die unserer Wahl entspricht.
Dies deaktiviert jedoch nicht die Unterstützung für die Constraint Validation API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}} usw.
Das bedeutet, dass auch wenn der Browser die Gültigkeit des Formulars nicht automatisch überprüft, bevor seine Daten gesendet werden, Sie dies selbst tun können und das Formular entsprechend stylen können.

Unser zu prüfendes Eingabeelement ist ein [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jedes anzeigen.

Unser Ziel ist es, die Fehlermeldungen innerhalb eines `<span>`-Elements anzuzeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Attribut ist auf diesem `<span>` festgelegt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen bereitgestellt wird, einschließlich sie für Sehbehinderte vorzulesen.

Nun etwas grundlegendes CSS, um das Formular leicht zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

Schauen wir uns nun das JavaScript an, das die benutzerdefinierte Fehlerüberprüfung implementiert.
Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier erhalten wir das Formular selbst und das E-Mail-Eingabefeld sowie das Span-Element, in das wir die Fehlermeldung platzieren.

Mithilfe von Ereignis-Handlern überprüfen wir bei jeder Eingabe des Benutzers, ob die Formularfelder gültig sind. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir alle Fehlermeldungen.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob er gültige Daten enthält. Wenn ja, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzusenden, prüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular absenden. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen und verhindern das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um zu bestimmen, was der Fehler ist, und dann eine Fehlermeldung wie angemessen anzuzeigen.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie können dieses Beispiel live auf GitHub unter [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html) finden.

Die Constraint Validation API gibt Ihnen ein mächtiges Werkzeug zur Handhabung der Formularvalidierung, das Ihnen eine enorme Kontrolle über die Benutzeroberfläche gibt, die über das hinausgeht, was Sie nur mit HTML und CSS tun können.

### Validierung von Formularen ohne integrierte API

In einigen Fällen, wie bei [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können Sie die Constraint Validation API nicht verwenden oder möchten sie nicht verwenden. Sie können weiterhin JavaScript zur Validierung Ihres Formulars verwenden, müssen es jedoch selbst schreiben.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: String-Operationen, Typkonvertierung, reguläre Ausdrücke und so weiter. Es liegt an Ihnen.
- Was sollte ich tun, wenn das Formular ungültig ist?
  - : Dies ist eindeutig eine UI-Angelegenheit. Sie müssen entscheiden, wie das Formular sich verhalten wird. Senden die Formulardaten trotzdem?
    Sollten Sie die fehlerhaften Felder hervorheben?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Benutzers zu verringern, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um sie bei der Korrektur ihrer Eingaben zu unterstützen.
    Sie sollten im Voraus Vorschläge machen, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen geben.
    Wenn Sie sich mit den Anforderungen der UI-Validierung befassen möchten, lesen Sie diese nützlichen Artikel:

    - [Benutzern beim Eingeben der richtigen Daten in Formulare helfen](https://web.dev/learn/forms/form-fields)
    - [Validierung von Eingaben](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Design-Richtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, sehen Sie hier eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

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

Ebenso muss sich das CSS nicht sehr ändern; wir haben nur die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse umgewandelt und vermieden, den Attributselektor zu verwenden.

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

Die großen Änderungen sind im JavaScript-Code, der viel schwerer heben muss.

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

Das Ergebnis sieht so aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Wie Sie sehen können, ist es nicht so schwer, ein Validierungssystem selbst zu erstellen. Der schwierige Teil ist, es generisch genug zu machen, um sowohl plattformübergreifend als auch für jedes Formular, das Sie möglicherweise erstellen, verwenden zu können. Es gibt viele Bibliotheken, die zur Formularvalidierung verfügbar sind, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Die Client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie Stil und Fehlermeldungen anpassen möchten, aber es _immer_ ist notwendig, sorgfältig über den Benutzer nachzudenken.
Denken Sie immer daran, Ihren Benutzern zu helfen, die Daten, die sie bereitstellen, zu korrigieren. Stellen Sie sicher, dass Sie:

- Explizite Fehlermeldungen anzeigen.
- Seien Sie nachsichtig hinsichtlich des Eingabeformats.
- Zeigen Sie genau an, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular gesendet werden.
Wir behandeln als Nächstes [das Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zur Erstellung benutzerdefinierter Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Formulare durch JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
