---
title: Validierung von Formularen auf der Clientseite
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularsteuerelemente vor dem Absenden der vom Benutzer eingegebenen Formulardaten an den Server korrekt ausgefüllt sind. Diese **Validierung von Formularen auf der Clientseite** hilft sicherzustellen, dass die eingegebenen Daten den Anforderungen der verschiedenen Formularsteuerelemente entsprechen.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der Validierung von Formularen auf der Clientseite.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computerkenntnisse, ein vernünftiges Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was die Validierung von Formularen auf der Clientseite ist, warum sie wichtig ist,
        und wie verschiedene Techniken angewendet werden können, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die Validierung auf der Clientseite ist eine anfängliche Überprüfung und ein wichtiges Merkmal einer guten Benutzererfahrung; durch das Erkennen ungültiger Daten auf der Clientseite kann der Benutzer sie sofort korrigieren. Wenn die Daten zum Server gelangen und dort abgelehnt werden, führt dies zu einer merklichen Verzögerung durch eine Rundreise zum Server und zurück zur Clientseite, um dem Benutzer mitzuteilen, dass er seine Daten korrigieren soll.

Allerdings sollte die Validierung auf der Clientseite _nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer eine Validierung, einschließlich Sicherheitsüberprüfungen, für alle Formulardaten auf der _Serverseite_ **sowie** auf der Clientseite durchführen, weil die Validierung auf der Clientseite zu leicht umgangen werden kann, sodass böswillige Benutzer immer noch problemlos schlechte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung von Server-seitiger Validierung liegt etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten dies im Hinterkopf behalten.

## Was ist Formularvalidierung?

Besuchen Sie eine beliebte Website mit einem Anmeldeformular, und Sie werden feststellen, dass Sie eine Rückmeldung erhalten, wenn Sie Ihre Daten nicht in dem erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Dieses Feld kann nicht leer gelassen werden).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein spezifisches Datenformat ist erforderlich, damit es als gültig betrachtet wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (Die von Ihnen eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies wird als **Formularvalidierung** bezeichnet.
Beim Eingeben von Daten überprüft der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der durch die Anwendung festgelegten Einschränkungen sind. Die Validierung, die im Browser durchgeführt wird, nennt man **Client-seitige** Validierung, während die auf dem Server durchgeführte Validierung als **Server-seitige** Validierung bezeichnet wird.
In diesem Kapitel konzentrieren wir uns auf die Validierung auf der Clientseite.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung das Absenden der Daten an den Server und (üblicherweise) das Speichern in einer Datenbank; wenn die Informationen nicht korrekt formatiert sind, erhält der Benutzer eine Fehlermeldung, die beschreibt, was korrigiert werden muss, und er kann es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren?
Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert werden, falsch sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen.** Die Eingabe sicherer Passwörter zu erzwingen, erleichtert den Schutz ihrer Kontoinformationen.
- **Wir möchten uns selbst schützen.** Es gibt viele Wege, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung zu schaden. Siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die von der Clientseite an Ihren Server übermittelt werden. Selbst wenn Ihr Formular korrekt validiert und fehlerhafte Eingaben auf der Clientseite verhindert, kann ein böswilliger Benutzer dennoch die Netzwerkanforderung ändern.

## Verschiedene Arten der Validierung auf der Clientseite

Sie werden auf zwei verschiedene Arten der Validierung auf der Clientseite im Web stoßen:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können definieren, welche Formularsteuerelemente erforderlich sind und in welchem Format die vom Benutzer eingegebenen Daten vorliegen müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird im Allgemeinen verwendet, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Die Validierung auf der Clientseite kann mit wenig bis gar keinem JavaScript erreicht werden. Die HTML-Validierung ist schneller als die JavaScript-Validierung, jedoch weniger anpassbar. Es wird empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu starten und die Benutzererfahrung nach Bedarf mit JavaScript zu verbessern.

## Verwendung der integrierten Formularvalidierung

Eine der bedeutendsten Funktionen von [Formularsteuerelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten ohne JavaScript zu validieren.
Dies geschieht durch die Verwendung von Validierungsattributen auf Formularelementen.
Wir haben viele davon bereits im Kurs gesehen, aber um es noch einmal zusammenzufassen:

- [`required`](/de/docs/Web/HTML/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular abgeschickt werden kann.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Zeichenfolgen) an.
- [`min`](/de/docs/Web/HTML/Attributes/min), [`max`](/de/docs/Web/HTML/Attributes/max) und [`step`](/de/docs/Web/HTML/Attributes/step): Gibt die minimalen und maximalen Werte von numerischen Eingabetypen sowie das Inkrement oder den Schritt für Werte beginnend mit dem Minimum an.
- [`type`](/de/docs/Web/HTML/Element/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer voreingestellter Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern): Gibt ein [reguläres Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in ein Formularfeld eingegebenen Daten allen durch die auf das Feld angewendeten Attribute festgelegten Regeln folgen, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, gelten die folgenden Dinge:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen bestimmten Stil auf gültige Elemente anzuwenden. Das Steuerelement entspricht auch {{cssxref(":user-valid")}}, wenn der Benutzer mit dem Steuerelement interagiert hat, und es kann auch andere UI-Pseudoklassen wie {{cssxref(":in-range")}} entsprechen, abhängig vom Eingabetyp und den Attributen.
- Wenn der Benutzer versucht, die Daten zu versenden, sendet der Browser das Formular, sofern nichts anderes dies verhindert (z. B. JavaScript).

Wenn ein Element ungültig ist, gelten die folgenden Dinge:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit dem Steuerelement interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Weitere UI-Pseudoklassen können ebenfalls zutreffen, wie {{cssxref(":out-of-range")}}, abhängig vom Fehler. Diese ermöglichen es Ihnen, einen bestimmten Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung variiert je nach Art des Fehlers. Die weiter unten beschriebene [Constraint Validation API](#die_constraint_validation_api) wird beschrieben.

## Beispiele für integrierte Formularvalidierung

In diesem Abschnitt werden wir einige der oben diskutierten Attribute testen.

### Einfaches Startdatei

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, die es Ihnen ermöglicht, zwischen einer Banane oder einer Kirsche zu wählen.
Dieses Beispiel umfasst ein grundlegendes Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem {{htmlelement("button")}} zum Absenden.

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

Beginnen Sie, indem Sie eine Kopie der [`fruit-start.html`-Datei auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in einem neuen Verzeichnis auf Ihrem Laufwerk speichern.

### Das required-Attribut

Ein häufiges HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Attributes/required) Attribut.
Fügen Sie dieses Attribut einer Eingabe hinzu, um ein Element obligatorisch zu machen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht abgesendet, sondern stattdessen wird eine Fehlermeldung angezeigt, wenn die Eingabe fehlt.
Solange die Eingabe leer ist, gilt sie ebenfalls als ungültig und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn eines der Radiobuttons einer gleichnamigen Gruppe das `required` Attribut hat, muss einer der Radiobuttons in dieser Gruppe ausgewählt sein, damit die Gruppe gültig ist; der ausgewählte Radiobutton muss nicht derjenige sein, für den das Attribut gesetzt ist.

> [!NOTE]
> Fordern Sie nur Daten an, die Sie benötigen: Beispielsweise ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu kennen?

Fügen Sie Ihrem Eingabeelement ein `required` Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(erforderlich)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darauf hinzuweisen, dass das {{htmlelement("input")}} erforderlich ist. Dem Benutzer mitzuteilen, wann Formularfelder erforderlich sind, ist nicht nur eine gute Benutzererfahrung, sondern wird auch von den WCAG [Barrierefreiheits](/de/docs/Learn_web_development/Core/Accessibility) Richtlinien gefordert.

Wir fügen CSS-Stile hinzu, die je nachdem, ob das Element erforderlich, gültig oder ungültig ist, angewendet werden:

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

Dieses CSS bewirkt, dass die Eingabe ein rotes getupftes Feld hat, wenn sie ungültig ist, und eine subtilere feste Umrandung in Schwarz, wenn sie gültig ist.
Wir haben auch einen Hintergrundgradienten hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Versuchen Sie das neue Verhalten im Beispiel unten:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular des [Live-`required`-Beispiels](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne einen Wert abzusenden. Beachten Sie, wie die ungültige Eingabe den Fokus erhält, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint und das Formular daran gehindert wird, gesendet zu werden. Sie können auch den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) sehen.

### Validierung gegen einen regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut, das einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein regulärer Ausdruck (Regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Zeichenfolgen abzugleichen. Regexps sind ideal für die Formularvalidierung und dienen einer Vielzahl anderer Zwecke in JavaScript.

Regexps sind ziemlich komplex, und wir beabsichtigen nicht, sie in diesem Artikel erschöpfend zu lehren.
Es folgen einige Beispiele, die Ihnen eine grundlegende Vorstellung davon geben sollen, wie sie funktionieren.

- `a` — Passt auf ein Zeichen, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Passt auf `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Passt auf `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Passt auf `a`, gefolgt von beliebig vielen `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Passt auf ein Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Passt genau auf `abc` oder genau auf `xyz` (aber nicht `abcxyz` oder `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht behandeln.
Für eine vollständige Liste und viele Beispiele, konsultieren Sie unsere [Regulärerausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) Dokumentation.

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut wie folgt hinzuzufügen:

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

Dies ergibt das folgende Update — testen Sie es:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

Sie können dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html) ausprobieren.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}} Element einen von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind case-sensitive, aber wir haben es so gestaltet, dass sowohl großgeschriebene als auch kleingeschriebene Versionen unterstützt werden, indem wir ein zusätzliches "Aa"-Muster in eckige Klammern gesetzt haben.

Versuchen Sie an dieser Stelle, den Wert im [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut auf einige der zuvor gesehenen Beispiele einzustellen, und schauen Sie, wie sich das auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen. Schreiben Sie einige Ihrer eigenen, und sehen Sie, wie es geht. Gestalten Sie sie, wenn möglich, obstbezogen, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, ist die `input` als {{cssxref(':invalid')}} Pseudoklasse klassifiziert. Ist sie leer und das Element ist nicht erforderlich, wird sie nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}} Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut, um gegen einen regulären Ausdruck validiert zu werden. Beispielsweise überprüft die Angabe des `email` Typs den Wert der Eingabe auf ein gut formatierter E-Mail-Adresse oder ein Muster, das eine kommagetrennte Liste von E-Mail-Adressen darstellt, wenn es das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}} Element unterstützt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut nicht.

### Einschränken der Zeichenlänge Ihrer Einträge

Sie können die Anzahl der Zeichen aller durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder mit den Attributen [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) einschränken. Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als der [`minlength`](/de/docs/Web/HTML/Attributes/minlength) Wert oder mehr als der [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) Wert hat.

Browser lassen den Benutzer oft nicht mehr Zeichen eingeben, als erwartet in Textfeldern. Eine bessere Benutzererfahrung als nur die Verwendung von `maxlength` ist es, auch eine Zeichenanzahl Rückmeldung auf zugängliche Weise zu geben und dem Benutzer zu erlauben, seine Inhalte zu bearbeiten, um sie zu verkleinern. Ein Beispiel hierfür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen, die `maxlength` verwenden](https://github.com/mimo84/bootstrap-maxlength), können hierfür verwendet werden.

> [!NOTE]
> Längenbeschränkungen werden nie gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur für benutzereingabene Daten gemeldet.

### Einschränken der Werte Ihrer Eingaben

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) und der verschiedenen Dateneingabetypen, können die [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) Attribute verwendet werden, um einen Bereich gültiger Werte zu definieren. Wenn das Feld einen Wert enthält, der außerhalb dieses Bereichs liegt, ist es ungültig.

Sehen wir uns ein weiteres Beispiel an.
Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) Datei.

Löschen Sie jetzt den Inhalt des `<body>` Elements und ersetzen Sie ihn durch das Folgende:

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

- Sie werden hier sehen, dass wir dem `text` Feld eine `minlength` und `maxlength` von sechs gegeben haben, was die gleiche Länge wie Banane und Kirsche ist.
- Wir haben dem `number` Feld auch ein `min` von eins und ein `max` von zehn gegeben.
  Eingetragene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Inkrement-/Dekrementpfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu verschieben.
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
  Die Zahl ist nicht erforderlich, das Entfernen des Wertes führt daher zu einem gültigen Wert.

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

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und schauen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html) an.

Numerische Eingabetypen wie `number`, `range` und `date` können auch das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut aufnehmen. Dieses Attribut gibt an, um welchen Inkrementwert der Wert steigt oder fällt, wenn die Eingabesteuerelemente verwendet werden (z. B. die Auf- und Abzahlknöpfe oder beim Verschieben des Bereichs). In unserem Beispiel wird das `step` Attribut weggelassen, so dass der Wert standardmäßig auf `1` eingestellt ist. Dies bedeutet, dass Fließkommazahlen wie 3.2 ebenfalls als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, das die Verwendung der integrierten Validierungsfunktionen von HTML zeigt.
Zuerst ein wenig HTML:

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

Und jetzt ein wenig CSS, um das HTML zu stylen:

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

Dieses [vollständige Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) ist zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html) verfügbar.

Sehen Sie sich die [validierungsbezogenen Attribute](/de/docs/Web/HTML/Constraint_validation#validation-related_attributes) für eine vollständige Liste von Attributen an, die verwendet werden können, um Eingabewerte zu beschränken, und die Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, wird JavaScript benötigt. In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten ansehen, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden Formularelement-DOM-Interfaces verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Element/button) Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Element/input) Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Element/output) Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Element/select) Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea) Element)

Die Constraint Validation API stellt die folgenden Eigenschaften für die obigen Elemente bereit.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Constraint-Validierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), wird eine leere Zeichenfolge zurückgegeben.
- `validity`: Gibt ein `ValidityState` Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitszustand des Elements beschreiben. Sie finden vollständige Details zu allen verfügbaren Eigenschaften auf der [`ValidityState`](/de/docs/Web/API/ValidityState) Referenzseite; im Folgenden sind einige der häufigeren aufgeführt:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er es tut. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger als die maximale Länge ist, die durch das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut angegeben wird, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer als die minimale Länge ist, die durch das [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attribut angegeben wird, oder `false`, wenn er größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer als der durch das [`max`](/de/docs/Web/HTML/Element/input#max) Attribut angegebene Maximalwert ist, oder `false`, wenn er kleiner oder gleich dem Maximalwert ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner als der durch das [`min`](/de/docs/Web/HTML/Element/input#min) Attribut angegebene Minimalwert ist, oder `false`, wenn er größer oder gleich dem Minimalwert ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht der erforderlichen Syntax entspricht (wenn der [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung verletzt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; anderweitig der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required) Attribut hat, aber keinen Wert hat, oder `false` andernfalls. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element beim Einreichen des Formulars validiert wird; `false` andernfalls.

Die Constraint Validation API stellt auch die folgenden Methoden für die oben genannten Elemente und das [`form`](/de/docs/Web/HTML/Element/form) Element zur Verfügung.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; `false` andernfalls. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid`-Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) für das Element aus.
- `reportValidity()`: Meldet ungültige Felder mit Ereignissen. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einer `onSubmit`-Ereignishandler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; Wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig betrachtet, und der angegebene Fehler wird angezeigt. Auf diese Weise können Sie mit JavaScript-Code eine Validierungsfehler neben den standardmäßigen HTML-Validierungseinschränkungen etablieren. Die Nachricht wird dem Benutzer angezeigt, wenn das Problem gemeldet wird.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den früheren Beispielen für HTML-Validierungseinschränkungen gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular abzuschicken, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen standardmäßigen Weg, ihr Aussehen und Gefühl mit CSS zu ändern.
- Sie hängen vom Browser-Locale ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox in Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns ein Beispiel durchgehen, wie dies zu tun ist.

Wir beginnen mit etwas HTML (fühlen Sie sich frei, dies in eine leere HTML-Datei zu setzen; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Basis, wenn Sie möchten):

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

Hier speichern wir eine Referenz zur E-Mail-Eingabe und fügen dann einen Ereignis-Listener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster einer gut formatierten E-Mail-Adresse entspricht. Wenn dies der Fall ist, rufen wir die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass das Absenden des Formulars fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einer Leerzeichenfolge auf. Dies macht die Eingabe gültig, sodass das Formular abgeschickt werden kann. Während der Validierung wird, wenn ein Formularfeld eine `customError` enthält, die keine Leerzeichenfolge ist, das Absenden des Formulars blockiert.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie können dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) ausprobieren, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Erweiterung der integrierten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können.
Es ist auch möglich, die gesamte integrierte Formularvalidierung zu verwenden und sie dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die integrierte Validierung von [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren.
Wir beginnen mit dem HTML-{{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten angezeigt.
Im Falle einer neuen Eingabe setzt der Code zuerst die benutzerdefinierte Gültigkeitsmeldung zurück, indem `setCustomValidity("")` aufgerufen wird.
Anschließend wird `email.validity.valid` verwendet, um zu überprüfen, ob die eingegebene Adresse ungültig ist und falls ja, aus dem Ereignishandler zurückgekehrt.
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

Sie können dieses Beispiel auf der Seite unter dem {{LiveSampleLink('Extending_built-in_form_validation', 'Live sample demo link')}} ausprobieren.
Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet, abzuschicken.

#### Ein detaillierteres Beispiel

Nachdem wir nun ein wirklich einfaches Beispiel gesehen haben, wollen wir sehen, wie wir diese API verwenden können, um ein etwas komplexeres benutzerdefiniertes Validierungssystem zu erstellen.

Zuerst das HTML. Bauen Sie es gerne mit uns auf:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut, um die automatische Validierung des Browsers zu deaktivieren. Das Festlegen des `novalidate` Attributs auf dem Formular verhindert, dass das Formular seine eigenen Fehlermeldungsblasen anzeigt, und ermöglicht es uns stattdessen, die benutzerdefinierten Fehlermeldungen auf irgendeine Weise in das DOM einzubauen. Dies deaktiviert jedoch nicht die Unterstützung für die Constraint Validation API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}} usw. Das bedeutet, dass selbst wenn der Browser nicht automatisch die Gültigkeit des Formulars überprüft, bevor er seine Daten sendet, Sie dies immer noch tun können und das Formular entsprechend stylen können.

Unsere zu validierende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und für jede einen benutzerdefinierten Fehler anzeigen.

Wir zielen darauf ab, die Fehlermeldungen in einem `<span>` Element anzuzeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Attribut ist auf diesem `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen mitgeteilt wird, einschließlich der Ansage an Bildschirmlesegeräte.

Nun zum grundlegenden CSS, um das Formular leicht zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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
Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier holen wir uns das Formular selbst und das E-Mail Eingabefeld sowie das Span-Element, in das wir die Fehlermeldung platzieren werden.

Mit Ereignishandlern prüfen wir bei jeder Eingabe des Benutzers, ob die Formularfelder gültig sind. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir jegliche Fehlermeldung.

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

Jedes Mal, wenn sich der Wert der Eingabe ändert, überprüfen wir, ob sie gültige Daten enthält. Wenn sie es tut, entfernen wir jegliche angezeigte Fehlermeldung. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzusenden, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular absenden. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern das Abschicken des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die `showError()` Funktion verwendet verschiedene Eigenschaften des `validity` Objekts der Eingabe, um zu bestimmen, was der Fehler ist, und zeigt dann eine Fehlermeldung entsprechend an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie können dieses Beispiel live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) ausprobieren, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint Validation API gibt Ihnen ein leistungsstarkes Werkzeug, um die Formularvalidierung zu handhaben, das es Ihnen ermöglicht, die Benutzeroberfläche über das hinaus zu steuern, was Sie allein mit HTML und CSS tun können.

### Validierung von Formularen ohne eingebaute API

In einigen Fällen, wie bei [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können Sie die Constraint Validation API nicht verwenden oder möchten Sie dies nicht. Sie sind dennoch in der Lage, JavaScript zu verwenden, um Ihr Formular zu validieren, aber Sie müssen Ihr eigenes schreiben.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenfolgenoperationen, Typkonvertierung, reguläre Ausdrücke usw. Es liegt an Ihnen.
- Was sollte ich tun, wenn das Formular nicht gültig ist?
  - : Dies ist eindeutig eine UI-Angelegenheit. Sie müssen entscheiden, wie das Formular sich verhalten wird. Sendet das Formular die Daten trotzdem?
    Sollten Sie die fehlerhaften Felder hervorheben?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um sie bei der Korrektur ihrer Eingaben zu führen.
    Sie sollten im Voraus Vorschläge machen, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie sich in die Anforderungen für die UI der Formularvalidierung vertiefen möchten, finden Sie hier einige nützliche Artikel, die Sie lesen sollten:

    - [Benutzern helfen, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/form-fields)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, folgt hier eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

Das HTML ist fast das gleiche; wir haben einfach die HTML-Validierungsfunktionen entfernt.

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

Ebenso muss das CSS nicht viel geändert werden; wir haben einfach die {{cssxref(":invalid")}} CSS-Pseudoklasse zu einer realen Klasse gemacht und darauf verzichtet, den Attribut-Selektor zu verwenden.

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

Die großen Änderungen finden sich im JavaScript-Code, der weitaus mehr Aufgaben übernehmen muss.

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

Wie Sie sehen können, ist es nicht so schwer, ein Validierungssystem selbst zu entwickeln. Das Schwierige ist, es so generisch zu machen, dass es sowohl plattformübergreifend als auch für jedes Formular, das Sie erstellen, verwendet werden kann. Es gibt viele Bibliotheken zur Formularvalidierung, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Finden Sie einige weitere Tests, um zu verifizieren, dass Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Die Validierung von Formularen auf der Clientseite benötigt manchmal JavaScript, wenn Sie das Styling und die Fehlermeldungen anpassen möchten, aber es erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken.
Denken Sie immer daran, Ihren Benutzern zu helfen, die Daten zu korrigieren, die sie bereitstellen. Stellen Sie sicher, dass Sie:

- Explizite Fehlermeldungen anzeigen.
- Bezüglich des Eingabeformats permissiv sind.
- Genauer aufzeigen, wo der Fehler auftritt, insbesondere in großen Formularen.

Sobald Sie überprüft haben, dass das Formular richtig ausgefüllt ist, kann das Formular abgeschickt werden.
Wir werden uns als Nächstes mit dem [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) beschäftigen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
