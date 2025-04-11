---
title: Client-seitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig, sicherzustellen, dass alle erforderlichen Formularelemente ausgefüllt sind, im richtigen Format, bevor die vom Benutzer eingegebenen Formulardaten an den Server gesendet werden. Diese **client-seitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten den Anforderungen der verschiedenen Formularelemente entsprechen.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der client-seitigen Formularvalidierung.

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
        Zu verstehen, was client-seitige Formularvalidierung ist, warum sie wichtig ist,
        und wie man verschiedene Techniken anwendet, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die client-seitige Validierung ist eine erste Prüfung und ein wichtiges Merkmal einer guten Benutzererfahrung; indem ungültige Daten auf der Client-Seite abgefangen werden, kann der Benutzer sie sofort korrigieren.
Wenn es zum Server gelangt und dann abgelehnt wird, wird eine spürbare Verzögerung durch eine Hin- und Rückfahrt zum Server verursacht, um dem Benutzer mitzuteilen, dass er seine Daten korrigieren soll.

Allerdings _sollte die client-seitige Validierung nicht_ als umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer auch auf der _Server-Seite_ eine Validierung durchführen, einschließlich Sicherheitsprüfungen, wenn Formulardaten eingereicht werden, da die client-seitige Validierung zu leicht umgangen werden kann, sodass böswillige Benutzer dennoch leicht schlechte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der serverseitigen Validierung liegt zwar etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten es im Hinterkopf behalten.

## Was ist Formularvalidierung?

Gehen Sie zu einer beliebigen beliebten Seite mit einem Registrierungsformular, und Sie werden feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein spezifisches Datenformat ist erforderlich, damit es als gültig angesehen wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die von Ihnen eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und muss einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies wird als **Formularvalidierung** bezeichnet.
Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im korrekten Format und innerhalb der von der Anwendung festgelegten Einschränkungen vorliegen. Die im Browser durchgeführte Validierung wird als **client-seitige** Validierung bezeichnet, während die auf dem Server durchgeführte Validierung als **server-seitige** Validierung bezeichnet wird.
In diesem Kapitel konzentrieren wir uns auf die client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung die Übermittlung der Daten an den Server und speichert sie (in der Regel) in einer Datenbank; wenn die Informationen nicht korrekt formatiert sind, gibt sie dem Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und lässt ihn es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren?
Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert sind, falsch sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen.** Indem wir unsere Benutzer zwingen, sichere Passwörter einzugeben, erleichtern wir es, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung zu schaden. Weitere Informationen finden Sie unter [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals den vom Client an Ihren Server übergebenen Daten. Selbst wenn Ihr Formular ordnungsgemäß validiert wird und fehlerhafte Eingaben auf der Client-Seite verhindert werden, kann ein böswilliger Benutzer immer noch die Netzwerkanforderung ändern.

## Verschiedene Arten der client-seitigen Validierung

Sie werden im Web auf zwei verschiedene Arten der client-seitigen Validierung stoßen:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können bestimmen, welche Formularelemente erforderlich sind und in welchem Format die vom Benutzer eingegebenen Daten sein müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird in der Regel hinzugefügt, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Die client-seitige Validierung kann mit wenig bis gar keinem JavaScript erreicht werden. Die HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als die JavaScript-Validierung. Es wird generell empfohlen, mit robusten HTML-Funktionen zu beginnen und dann die Benutzererfahrung nach Bedarf mit JavaScript zu verbessern.

## Verwendung der integrierten Formularvalidierung

Eine der bedeutendsten Funktionen von [Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne sich auf JavaScript zu verlassen.
Dies geschieht durch die Verwendung von Validierungsattributen auf den Formularelementen.
Viele davon haben wir bereits im Kurs gesehen, aber zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt sein muss, bevor das Formular eingereicht werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Zeichenfolgen) an.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die minimalen und maximalen Werte von numerischen Eingabetypen an sowie das Inkrement, oder Schritt, für Werte, beginnend ab dem Mindestwert.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer voreingestellter Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten entsprechen müssen.

Wenn die in ein Formularfeld eingegebenen Daten alle durch die auf das Feld angewendeten Attribute angegebenen Regeln befolgen, wird es als gültig angesehen. Andernfalls wird es als ungültig angesehen.

Wenn ein Element gültig ist, gilt Folgendes:

- Das Element entspricht der {{cssxref(":valid")}}-CSS-Pseudoklasse, die es Ihnen ermöglicht, einen bestimmten Stil auf gültige Elemente anzuwenden. Das Steuerelement entspricht auch {{cssxref(":user-valid")}}, wenn der Benutzer mit dem Steuerelement interagiert hat, und es kann auch anderen UI-Pseudoklassen entsprechen, wie {{cssxref(":in-range")}}, abhängig vom Eingabetyp und den Attributen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular einreichen, vorausgesetzt, es gibt nichts anderes, was dies verhindert (z. B. JavaScript).

Wenn ein Element ungültig ist, gilt Folgendes:

- Das Element entspricht der {{cssxref(":invalid")}}-CSS-Pseudoklasse. Wenn der Benutzer mit dem Steuerelement interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}}-CSS-Pseudoklasse. Andere UI-Pseudoklassen können ebenfalls übereinstimmen, wie {{cssxref(":out-of-range")}}, abhängig vom Fehler. Diese ermöglichen das Anwenden eines bestimmten Stils auf ungültige Elemente.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formulareinreichung und zeigt eine Fehlermeldung an. Die Fehlermeldung unterscheidet sich je nach Fehlerart. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Eingebaute Formularvalidierungsbeispiele

In diesem Abschnitt werden wir einige der zuvor besprochenen Attribute testen.

### Einfaches Startbeispiel

Beginnen wir mit einem einfachen Beispiel: ein Eingabefeld, in dem Sie wählen können, ob Sie eine Banane oder eine Kirsche bevorzugen.
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

Zu Beginn machen Sie eine Kopie der [`fruit-start.html`-Datei auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das required-Attribut

Ein gängiges HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut.
Fügen Sie dieses Attribut zu einem Eingabefeld hinzu, um ein Element obligatorisch zu machen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}}-UI-Pseudoklasse und das Formular wird nicht abgesendet, wobei eine Fehlermeldung bei der Einsendung angezeigt wird, wenn die Eingabe leer ist.
Solange es leer ist, wird die Eingabe auch als ungültig angesehen und entspricht der {{cssxref(':invalid')}}-UI-Pseudoklasse.

Wenn eine beliebige Optionsfeld-Taste in einer gleichnamigen Gruppe das `required`-Attribut hat, muss eine der Optionsfeld-Tasten in dieser Gruppe für die Gruppe als gültig markiert sein; die markierte Option muss nicht die sein, der das Attribut zugeordnet ist.

> [!NOTE]
> Verlangen Sie nur von den Benutzern, dass sie Daten eingeben, die Sie benötigen: Ist es beispielsweise wirklich notwendig, das Geschlecht oder den Titel einer Person zu kennen?

Fügen Sie Ihrem Eingabefeld ein `required`-Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(erforderlich)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darüber zu informieren, dass das {{htmlelement("input")}} erforderlich ist. Es ist nicht nur eine gute Benutzererfahrung, den Benutzern anzugeben, wann Formularelemente erforderlich sind; es ist sogar gemäß den [WCAG-Richtlinien zur Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) erforderlich.

Wir fügen CSS-Stile hinzu, die basierend darauf angewendet werden, ob das Element erforderlich, gültig oder ungültig ist:

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

Dieses CSS sorgt dafür, dass die Eingabe ein rotes gestricheltes Rand hat, wenn sie ungültig ist, und einen subtileren schwarzen durchgezogenen Rand, wenn sie gültig ist.
Wir haben auch ein Hintergrundgradient hinzugefügt, wenn die Eingabe erforderlich und ungültig ist. Probieren Sie das neue Verhalten im Beispiel unten aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular aus dem [live `required`-Beispiel](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne Wert abzusenden. Beachten Sie, wie die ungültige Eingabe in den Fokus rückt, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint, und das Formular nicht gesendet werden kann. Sie können auch den [Quellcode auf GitHub ansehen](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html).

### Validierung gegen einen regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das als Wert einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) erwartet.
Ein regulärer Ausdruck (RegExp) ist ein Muster, das zur Übereinstimmung von Zeichenkombinationen in Textstrings verwendet werden kann. RegExps sind daher ideal für die Formularvalidierung und erfüllen eine Vielzahl anderer Funktionen in JavaScript.

RegExps sind ziemlich komplex, und wir beabsichtigen nicht, Ihnen diese umfassend in diesem Artikel beizubringen.
Nachfolgend einige Beispiele, um Ihnen eine grundlegende Vorstellung zu geben, wie sie funktionieren.

- `a` — Entspricht einem Zeichen, das `a` ist (nicht `b`, nicht `aa` und so weiter).
- `abc` — Entspricht `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Entspricht `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Entspricht `a`, optional gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` und so weiter).
- `a|b` — Entspricht einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Entspricht genau `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y` und so weiter).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele, konsultieren Sie unsere [Dokumentation zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut wie dieses hinzuzufügen:

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

Dieses [Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html) verfügbar.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Strings "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind case-sensitiv, aber wir haben es so gemacht, dass sowohl großgeschriebene als auch kleingeschriebene Versionen unter Verwendung eines zusätzlichen "Aa"-Musters in eckigen Klammern unterstützt werden.

An diesem Punkt, versuchen Sie den Wert im [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut zu ändern, um einigen der Beispiele zu entsprechen, die Sie früher gesehen haben, und schauen Sie, wie das beeinflusst, welche Werte Sie eingeben können, um die Eingabewerte gültig zu machen.
Versuchen Sie, einige Ihrer eigenen zu schreiben, und sehen Sie, wie es läuft.
Machen Sie sie fruchtbezogen, wo möglich, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht-leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, entspricht das `input` der {{cssxref(':invalid')}}-Pseudoklasse. Wenn leer und das Element nicht erforderlich ist, wird es nicht als ungültig angesehen.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, um gegen einen regulären Ausdruck validiert zu werden. Zum Beispiel validiert die Angabe des `email`-Typs den Wert der Eingaben gegen ein wohlgeformtes E-Mail-Adress-Muster oder ein Muster, das eine durch Kommas getrennte Liste von E-Mail-Adressen entspricht, wenn es das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut nicht.

### Beschränkung der Länge Ihrer Einträge

Sie können die Zeichenlänge aller durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder mit den Attributen [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) beschränken.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen hat als der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)-Wert oder mehr als der [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Wert.

Browser lassen den Benutzer oft keinen längeren Wert als erwartet in Textfelder eingeben. Eine bessere Benutzererfahrung als nur `maxlength` zu verwenden, besteht darin, auch eine Rückmeldung zur Zeichenanzahl in zugänglicher Weise bereitzustellen und den Benutzer seinen Inhalt auf die richtige Größe bearbeiten zu lassen.
Ein Beispiel dafür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen unter Verwendung von `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies bereitzustellen.

> [!NOTE]
> Längeneinschränkungen werden niemals gemeldet, wenn der Wert programmgesteuert festgelegt wird. Sie werden nur für nutzerseitig eingegangene Eingaben gemeldet.

### Einschränkung der Werte Ihrer Einträge

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und die verschiedenen Dateneingabetypen, können die Attribute [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) verwendet werden, um einen Bereich gültiger Werte bereitzustellen.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, ist es ungültig.

Schauen wir uns ein weiteres Beispiel an.
Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html)-Datei.

Löschen Sie jetzt den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch Folgendes:

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

- Hier sehen Sie, dass wir dem `text`-Feld ein `minlength` und `maxlength` von sechs gegeben haben, was der Länge von Banane und Kirsche entspricht.
- Wir haben auch dem `number`-Feld ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Erhöhungs-/Verminderungsfelder nicht verwenden, um den Wert außerhalb dieses Bereichs zu verschieben.
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
  Die Zahl ist nicht erforderlich, daher ist das Entfernen des Werts gültig.

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

Hier ist das Beispiel in Aktion:

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und betrachten Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html).

Nummerische Eingabetypen, wie `number`, `range` und `date`, können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut verwenden. Dieses Attribut gibt an, welches Inkrement der Wert bei Verwendung der Eingabesteuerelemente (wie die Auf- und Ab-Pfeile, oder das Bewegen des Bereichsreglers) hoch- oder runtergehen wird. Das `step`-Attribut ist in unserem Beispiel weggelassen, sodass der Wert standardmäßig `1` ist. Das bedeutet, dass auch Gleitkommazahlen, wie 3.2, als ungültig angezeigt werden.

### Volles Beispiel

Hier ist ein vollständiges Beispiel, um die Verwendung der eingebauten Validierungsfunktionen von HTML zu zeigen.
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

Und nun etwas CSS, um das HTML zu gestalten:

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

Das ergibt Folgendes:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Dieses [vollständige Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

Sehen Sie [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) für eine vollständige Liste der Attribute, die zur Einschränkung von Eingabewerten verwendet werden können, und der Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, benötigen Sie JavaScript.
In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten ansehen, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden Formularelement-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element)

Die Constraint Validation API macht die folgenden Eigenschaften auf den oben genannten Elementen verfügbar:

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), wird ein leerer String zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitsstatus des Elements beschreiben. Sie können vollständige Details zu allen verfügbaren Eigenschaften auf der [`ValidityState`](/de/docs/Web/API/ValidityState)-Referenzseite finden; unten sind einige der gebräuchlicheren aufgelistet:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut angegebene maximale Länge, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angegebene minimale Länge, oder `false`, wenn er größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut angegebene Maximum, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}- und {{cssxref(":out-of-range")}}-CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut angegebene Minimum, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}- und {{cssxref(":out-of-range")}}-CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht im erforderlichen Syntax ist (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist) oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element all seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}}-CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber keinen Wert, oder `false` ansonsten. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, wenn das Formular gesendet wird; `false` andernfalls.

Die Constraint Validation API bietet auch die folgenden Methoden, die auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form)-Element verfügbar sind.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; `false` andernfalls. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mithilfe von Ereignissen. Diese Methode ist in Kombination mit `preventDefault()` in einem `onSubmit`-Ereignishandler nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig angesehen und der angegebene Fehler wird angezeigt. Auf diese Weise können Sie mit JavaScript-Code einen Validierungsfehler festlegen, der von den Standard-HTML-Validierungseinschränkungen abweicht. Die Nachricht wird dem Benutzer angezeigt, wenn das Problem gemeldet wird.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den früheren Beispielen zu HTML-Validierungseinschränkungen gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular abzusenden, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen standardisierten Weg, ihren Look und ihre Haptik mit CSS zu ändern.
- Sie hängen von der Browsersprache ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Screenshot von Firefox zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox in Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist eine der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns ein Beispiel erarbeiten, wie dies zu tun ist.

Wir beginnen mit etwas HTML (fühlen Sie sich frei, dies in eine leere HTML-Datei zu setzen; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Basis, wenn Sie mögen):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Fügen Sie die folgende JavaScript-Datei der Seite hinzu:

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

Hier speichern wir eine Referenz auf das E-Mail-Eingabefeld und fügen ihm dann einen Ereignislistener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn der Wert im Eingabefeld geändert wird.

Im enthaltenen Code prüfen wir, ob die Eigenschaft `validity.typeMismatch` des E-Mail-Eingabefelds `true` zurückgibt, was bedeutet, dass der enthaltene Wert dem Muster für eine gut geformte E-Mail-Adresse nicht entspricht. Wenn dies der Fall ist, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode mit einer benutzerdefinierten Nachricht auf. Dadurch wird die Eingabe ungültig, sodass, wenn Sie versuchen, das Formular abzusenden, das Absenden fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die Eigenschaft `validity.typeMismatch` `false` zurückgibt, rufen wir die `setCustomValidity()`-Methode mit einem leeren String auf. Dadurch wird die Eingabe gültig, sodass das Formular gesendet wird. Während der Validierung, wenn ein Formularsteuerelement ein `customError` hat, das nicht der leere String ist, wird das Absenden des Formulars blockiert.

Probieren Sie es unten aus:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Dieses Beispiel finden Sie live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Erweiterung der eingebauten Formularvalidierung

Das vorherige Beispiel hat gezeigt, wie Sie eine angepasste Nachricht für eine bestimmte Fehlerart (`validity.typeMismatch`) hinzufügen können.
Es ist auch möglich, alle eingebauten Formularvalidierungen zu verwenden und diese mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die eingebaute Validierung von [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren.
Wir beginnen mit dem HTML-{{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt.
Im Falle einer neuen Eingabe setzt der Code zuerst die benutzerdefinierte Validitätsnachricht durch den Aufruf von `setCustomValidity("")` zurück.
Dann verwendet es `email.validity.valid`, um zu überprüfen, ob die eingegebene Adresse ungültig ist, und kehrt dann aus dem Ereignishandler zurück.
Dies stellt sicher, dass alle normalen eingebauten Validierungsprüfungen ausgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Einschränkung hinzu, indem `setCustomValidity()` mit einer Fehlermeldung aufgerufen wird, wenn die Adresse nicht auf `@example.com` endet.

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

Sie können dieses Beispiel auf der Seite mit dem {{LiveSampleLink('Extending_built-in_form_validation', 'Live-Sample-Demo-Link')}} ausprobieren.
Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse, die nicht auf `@example.com` endet, und eine, die auf `@example.com` endet, einzugeben.

#### Ein ausführlicheres Beispiel

Da wir nun ein wirklich einfaches Beispiel gesehen haben, sehen wir uns an, wie wir mit dieser API eine etwas komplexere benutzerdefinierte Validierung aufbauen können.

Zuerst das HTML. Fühlen Sie sich wieder frei, parallel mit uns zu bauen:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut, um die automatische Validierung des Browsers auszuschalten. Das Setzen des `novalidate`-Attributs auf dem Formular verhindert, dass das Formular seine eigenen Fehlermeldungsblasen zeigt, und ermöglicht uns stattdessen, die benutzerdefinierten Fehlermeldungen auf eine unserer Wahl in das DOM anzuzeigen.
Dies deaktiviert jedoch nicht die Unterstützung für die Constraint-Validation-API, noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}} usw.
Das bedeutet, dass auch wenn der Browser nicht automatisch die Gültigkeit des Formulars vor dem Senden seiner Daten überprüft, Sie dies immer noch selbst tun können und das Formular entsprechend gestalten können.

Unsere Eingabe zur Validierung ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lass uns das mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jede davon anzeigen.

Wir beabsichtigen, die Fehlermeldungen innerhalb eines `<span>`-Elements anzuzeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Attribut ist auf diesem `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen Benutzern präsentiert wird, einschließlich dass es für Bildschirmleserbenutzer vorgelesen wird.

Jetzt zum grundlegenden CSS, um das Formular ein wenig zu verbessern und visuelles Feedback zu geben, wenn die eingegebenen Daten ungültig sind:

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

Nun sehen wir uns das JavaScript an, das die benutzerdefinierte Fehlerüberprüfung implementiert.
Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier erhalten wir das Formular selbst und das E-Mail-Eingabefeld sowie das Element span, in das wir die Fehlermeldung platzieren werden.

Mit Ereignishandlern prüfen wir, ob die Formularfelder jedes Mal gültig sind, wenn der Benutzer etwas eingibt. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn es keinen Fehler gibt, entfernen wir alle Fehlermeldungen.

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

Jedes Mal, wenn wir versuchen, das Formular abzusenden, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular absenden. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und stoppen das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die `showError()`-Funktion verwendet verschiedene Eigenschaften des `validity`-Objekts des Eingabefelds, um festzustellen, was der Fehler ist, und zeigt dann eine entsprechende Fehlermeldung an.

Hier ist das Ergebnis live:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Dieses Beispiel können Sie live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) sehen, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint-Validation-API gibt Ihnen ein leistungsstarkes Werkzeug, um die Formularvalidierung zu handhaben, das Ihnen eine enorme Kontrolle über die Benutzeroberfläche gibt, weit über das hinaus, was Sie alleine mit HTML und CSS tun können.

### Validierung von Formularen ohne eingebaute API

In einigen Fällen, wie [benutzerdefinierte Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), werden Sie nicht in der Lage sein oder nicht wollen, die Constraint-Validation-API zu verwenden. Sie können trotzdem JavaScript verwenden, um Ihr Formular zu validieren, aber Sie müssen es nur selbst programmieren.

Um ein Formular zu validieren, fragen Sie sich einige Fragen:

- Welche Art der Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: String-Operationen, Typkonvertierung, reguläre Ausdrücke und so weiter. Es liegt an Ihnen.
- Was sollte ich tun, wenn das Formular nicht validiert?
  - : Dies ist eindeutig eine UI-Angelegenheit. Sie müssen entscheiden, wie das Formular sich verhalten wird. Sendet das Formular die Daten trotzdem?
    Sollten Sie die Felder hervorheben, die fehlerhaft sind?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Benutzers zu minimieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um sie in der Korrektur ihrer Eingaben zu führen.
    Sie sollten im Voraus Vorschläge bieten, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie in die Anforderungen der Formularvalidierungs-Benutzeroberfläche eintauchen möchten, finden Sie hier einige nützliche Artikel, die Sie lesen sollten:

    - [Helfen Sie Benutzern dabei, die richtigen Daten in Formularen einzugeben](https://web.dev/learn/forms/form-fields)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Design-Richtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint-Validation-API nicht verwendet

Um dies zu veranschaulichen, folgt eine vereinfachte Version des vorherigen Beispiels ohne die Constraint-Validation-API.

Das HTML bleibt fast dasselbe; wir haben einfach die HTML-Validierungsfunktionen entfernt.

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

Ebenso muss sich das CSS nicht sehr ändern; wir haben nur die {{cssxref(":invalid")}}-CSS-Pseudoklasse in eine echte Klasse verwandelt und vermeiden die Verwendung des Attributselectors.

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

Die großen Änderungen liegen im JavaScript-Code, das viel mehr Arbeit leisten muss.

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

Wie Sie sehen können, ist es nicht allzu schwer, ein Validierungssystem auf eigene Faust aufzubauen. Der schwierige Teil besteht darin, es generisch genug zu machen, um sowohl plattformübergreifend als auch für jedes Formular zu verwenden, das Sie möglicherweise erstellen. Es gibt viele Bibliotheken, die zur Durchführung der Formularvalidierung verfügbar sind, wie z.B. [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Die client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie das Styling und die Fehlermeldungen anpassen möchten, aber sie erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken.
Denken Sie stets daran, Ihren Benutzern bei der Korrektur der von ihnen bereitgestellten Daten zu helfen. Um dies zu erreichen, sollten Sie sicherstellen:

- Zeigen Sie explizite Fehlermeldungen an.
- Seien Sie großzügig mit dem Eingabeformat.
- Zeigen Sie genau, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular abgesendet werden.
Wir werden als Nächstes das [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) behandeln.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
