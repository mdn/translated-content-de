---
title: Client-seitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: ddbd6488c73e8933fccc6632b5aea0dbed57914c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularelemente ausgefüllt und im richtigen Format sind, bevor die vom Benutzer eingegebenen Formulardaten an den Server gesendet werden. Diese **Client-seitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten den in den verschiedenen Formularelementen festgelegten Anforderungen entsprechen.

Dieser Artikel führt Sie durch die grundlegenden Konzepte und Beispiele der Client-seitigen Formularvalidierung.

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
        Zu verstehen, was Client-seitige Formularvalidierung ist, warum sie wichtig ist,
        und wie Sie verschiedene Techniken anwenden, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die Client-seitige Validierung ist eine erste Überprüfung und ein wichtiges Merkmal einer guten Benutzererfahrung; durch das Auffangen ungültiger Daten auf der Client-seite kann der Benutzer sie sofort korrigieren. Wenn die Daten zum Server gelangen und dann abgelehnt werden, wird eine merkliche Verzögerung durch die Hin- und Rückreise zum Server und zurück zur Client-seite verursacht, um dem Benutzer mitzuteilen, dass er die Daten korrigieren soll.

Allerdings sollte die client-seitige Validierung _nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer, auch wenn Validierungen und Sicherheitsprüfungen auf der _Server-seite_ durchgeführt werden, validieren, da die Client-seitige Validierung zu leicht zu umgehen ist, sodass böswillige Benutzer dennoch leicht schlechte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) für eine Idee dessen, was _passieren könnte_; die Implementierung der Server-seitigen Validierung liegt außerhalb des Umfangs dieses Moduls, aber Sie sollten sie im Hinterkopf behalten.

## Was ist Formularvalidierung?

Gehen Sie auf eine beliebte Website mit einem Registrierungsformular, und Sie werden feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein bestimmtes Datenformat ist erforderlich, damit es als gültig angesehen wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die von Ihnen eingegebenen Daten entsprechen nicht dem richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies wird als **Formularvalidierung** bezeichnet.
Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der durch die Anwendung festgelegten Einschränkungen sind. Die im Browser durchgeführte Validierung wird als **Client-seitige** Validierung bezeichnet, während die auf dem Server durchgeführte Validierung als **Server-seitige** Validierung bezeichnet wird. In diesem Kapitel konzentrieren wir uns auf die Client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung, die Daten an den Server zu senden und (normalerweise) in einer Datenbank zu speichern; wenn die Informationen nicht korrekt formatiert sind, erhält der Benutzer eine Fehlermeldung, in der erklärt wird, was korrigiert werden muss, und er kann es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren?
Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert, falsch oder vollständig weggelassen werden.
- **Wir möchten die Daten unserer Benutzer schützen.** Unsere Benutzer zu zwingen, sichere Passwörter einzugeben, erleichtert den Schutz ihrer Kontoinformationen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um die Anwendung zu schädigen. Siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals den Daten, die von der Client-seite an Ihren Server übergeben werden. Selbst wenn Ihr Formular korrekt validiert und fehlerhaften Input auf der Client-seite verhindert, kann ein böswilliger Benutzer die Netzwerkaufforderung dennoch abändern.

## Verschiedene Arten der Client-seitigen Validierung

Im Internet werden Sie auf zwei verschiedene Arten der Client-seitigen Validierung stoßen:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können definieren, welche Formularelemente erforderlich sind und in welchem Format die vom Benutzer eingegebenen Daten sein müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird in der Regel hinzugefügt, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Client-seitige Validierung kann mit wenig bis keinem JavaScript erreicht werden. HTML-Validierung ist schneller als JavaScript, aber weniger anpassungsfähig als JavaScript-Validierung. Es wird allgemein empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu beginnen und dann die Benutzererfahrung bei Bedarf mit JavaScript zu verbessern.

## Verwenden der integrierten Formularvalidierung

Eine der bedeutendsten Eigenschaften von [Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Nutzerdaten zu validieren, ohne auf JavaScript angewiesen zu sein. Dies wird durch die Verwendung von Validierungsattributen auf Formularelementen erreicht. Wir haben viele davon bereits früher im Kurs gesehen, aber zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular gesendet werden kann.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Attributes/min), [`max`](/de/docs/Web/HTML/Attributes/max) und [`step`](/de/docs/Web/HTML/Attributes/step): Gibt die minimalen und maximalen Werte von Zahlen-Eingabetypen und die Schritte für Werte, beginnend mit dem Minimum, an.
- [`type`](/de/docs/Web/HTML/Element/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer Voreingestellter Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die Daten, die in ein Formularfeld eingegeben werden, alle Regeln befolgen, die von den auf das Feld angewendeten Attributen spezifiziert werden, werden sie als gültig betrachtet. Andernfalls werden sie als ungültig betrachtet.

Wenn ein Element gültig ist, sind die folgenden Dinge wahr:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die Ihnen ermöglicht, einen spezifischen Stil auf gültige Elemente anzuwenden. Das Steuerungselement wird auch mit {{cssxref(":user-valid")}} übereinstimmen, wenn der Benutzer die Steuerung verwendet hat, und kann je nach Eingabetyp und Attributen mit anderen UI-Pseudoklassen wie {{cssxref(":in-range")}} übereinstimmen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular absenden, sofern nichts anderes dies verhindert (z. B. JavaScript).

Wenn ein Element ungültig ist, sind die folgenden Dinge wahr:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer die Steuerung verwendet hat, stimmt es auch mit der {{cssxref(":user-invalid")}} CSS-Pseudoklasse überein. Andere UI-Pseudoklassen können ebenfalls übereinstimmen, wie {{cssxref(":out-of-range")}}, abhängig vom Fehler. Diese ermöglichen es Ihnen, einen spezifischen Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formulareinreichung und zeigt eine Fehlermeldung an. Die Fehlermeldung wird je nach Art des Fehlers unterschiedlich sein. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für eingebaute Formularvalidierung

In diesem Abschnitt testen wir einige der Attribute, die wir oben besprochen haben.

### Einfaches Startdatei

Lassen Sie uns mit einem einfachen Beispiel beginnen: einer Eingabe, die es Ihnen erlaubt, zu wählen, ob Sie eine Banane oder eine Kirsche bevorzugen.
Dieses Beispiel beinhaltet einen einfachen Text {{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einer Sende-{{htmlelement("button")}}.

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

Um zu beginnen, machen Sie eine Kopie der [`fruit-start.html` Datei auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das required-Attribut

Ein häufiges HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Attributes/required) Attribut. Fügen Sie dieses Attribut einer Eingabe hinzu, um ein Element verbindlich zu machen. Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht gesendet und zeigt eine Fehlermeldung an, wenn die Eingabe leer ist. Während es leer ist, wird die Eingabe auch als ungültig betrachtet, in Übereinstimmung mit der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein Radio-Button in einer gleichnamigen Gruppe das `required`-Attribut hat, muss einer der Radio-Buttons in dieser Gruppe für die Gültigkeit der Gruppe ausgewählt sein; der ausgewählte Radio muss nicht derjenige mit dem gesetzten Attribut sein.

> [!NOTE]
> Fordern Sie die Benutzer nur auf, die Daten einzugeben, die Sie benötigen: Zum Beispiel, ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu kennen?

Fügen Sie Ihrem Input ein `required`-Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(required)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darüber zu informieren, dass das {{htmlelement("input")}} erforderlich ist. Den Benutzer darüber zu informieren, wann Formularelemente benötigt werden, ist nicht nur eine gute Benutzererfahrung, es ist auch von den WCAG- [Zugänglichkeitsrichtlinien](/de/docs/Learn_web_development/Core/Accessibility) erforderlich.

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

Dieses CSS bewirkt, dass die Eingabe eine rote gestrichelte Umrandung hat, wenn sie ungültig ist, und eine subtilere schwarze durchgezogene Umrandung, wenn sie gültig ist. Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular aus dem [live `required` Beispiel](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne Wert abzusenden. Beachten Sie, wie die ungültige Eingabe fokussiert wird, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint, und das Formular wird daran gehindert, gesendet zu werden. Sie können auch den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) sehen.

### Validierung gegen einen regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut, das einen [Regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet. Ein regulärer Ausdruck (regexp) ist ein Muster, das verwendet werden kann, um Zeichnungskombinationen in Textzeichenfolgen abzugleichen, sodass regexps ideal für die Formularvalidierung sind und eine Vielzahl anderer Anwendungen in JavaScript haben.

Reguläre Ausdrücke sind ziemlich komplex, und wir haben nicht die Absicht, Ihnen sie vollständig in diesem Artikel beizubringen. Unten sind einige Beispiele, um Ihnen eine grundlegende Vorstellung davon zu geben, wie sie funktionieren.

- `a` — Passt zu einem Zeichen, das `a` ist (nicht `b`, nicht `aa`, usw.).
- `abc` — Passt auf `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Passt auf `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c` (`ac` oder `abc`).
- `ab*c` — Passt auf `a`, optional gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c` (`ac`, `abc`, `abbbbbc`, usw.).
- `a|b` — Passt auf ein Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Passt genau auf `abc` oder genau auf `xyz` (aber nicht `abcxyz` oder `a` oder `y`, usw.).

Es gibt noch viele weitere Möglichkeiten, die wir hier nicht abdecken. Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Dokumentation zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

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

Dies gibt uns das folgende Update — probieren Sie es aus:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

Sie können dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) sowie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html) finden.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind casesensitive, aber wir haben es so gestaltet, dass sie sowohl großgeschriebene als auch klein geschriebene Versionen mit einem zusätzlichen "Aa"-Muster unterstützt, das in eckigen Klammern verschachtelt ist.

An dieser Stelle versuchen Sie, den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attributs auf einige der Beispiele zu ändern, die Sie früher gesehen haben, und schauen Sie, wie sich dies auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen. Versuchen Sie, einige Ihrer eigenen zu schreiben, und sehen Sie, wie es läuft. Versuchen Sie, sie fruchtbezogen zu gestalten, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht-leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, entspricht der `input` der {{cssxref(':invalid')}} Pseudoklasse. Wenn er leer ist und das Element nicht erforderlich ist, wird es nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}} Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut, um gegen einen regulären Ausdruck validiert zu werden. Zum Beispiel validiert die Angabe des `email`-Typs den Wert der Eingaben gegen ein gut geformtes E-Mail-Adresse-Muster oder ein Muster, das eine kommaseparierte Liste von E-Mail-Adressen bei Vorhandensein des [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attributs darstellt.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut nicht.

### Einschränkung der Länge Ihrer Einträge

Sie können die Zeichenlänge aller Textfelder, die durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellt wurden, mit den Attributen [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) einschränken. Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als die [`minlength`](/de/docs/Web/HTML/Attributes/minlength) oder mehr als die [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) hat.

Browser lassen Benutzer oft nicht zu, einen längeren Wert als erwartet in Textfelder einzugeben. Eine bessere Benutzererfahrung als nur die Verwendung von `maxlength` ist, auch Feedback zur Zeichenzahl auf eine zugängliche Weise bereitzustellen und dem Benutzer die Möglichkeit zu geben, seinen Inhalt auf die Größe anzupassen. Ein Beispiel dafür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies bereitzustellen.

> [!NOTE]
> Längeneinschränkungen werden nie gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur für benutzereingetragene Eingaben gemeldet.

### Einschränkung der Werte Ihrer Einträge

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) und den verschiedenen Datumseingabetypen, können die Attribute [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) verwendet werden, um eine Reihe gültiger Werte bereitzustellen. Wenn das Feld einen Wert enthält, der außerhalb dieses Bereichs liegt, wird es ungültig sein.

Schauen wir uns ein weiteres Beispiel an. Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) Datei.

Löschen Sie nun den Inhalt des `<body>` Elements und ersetzen Sie ihn durch folgendes:

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

- Hier sehen Sie, dass wir dem `text`-Feld ein `minlength` und `maxlength` von sechs gegeben haben, was derselben Länge wie Banane und Kirsche entspricht.
- Wir haben auch das `number`-Feld mit einem `min` von eins und einem `max` von zehn versehen. Eingetragene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer werden die Erhöhung-/Verkörserungspfeile nicht verwenden können, um den Wert außerhalb dieses Bereichs zu bewegen. Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig. Die Zahl ist nicht erforderlich, sodass das Entfernen des Wertes zu einem gültigen Wert führt.

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

Hier ist das Beispiel in Live:

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html).

Numerische Eingabetypen wie `number`, `range` und `date` können auch das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut verwenden. Dieses Attribut gibt an, welches Inkrement der Wert erhöht oder verringert wird, wenn die Eingabesteuerungen verwendet werden (wie die Aufwärts- und Abwärtspfeiltasten oder das Schieben des Bereichsschiebers). Das `step` Attribut fehlt in unserem Beispiel, sodass der Wert standardmäßig auf `1` gesetzt ist. Dies bedeutet, dass Floats wie 3.2 auch als ungültig angezeigt werden.

### Volles Beispiel

Hier ist ein vollständiges Beispiel zur Verwendung der in HTML eingebauten Validierungsfunktionen. Zuerst etwas HTML:

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Dieses [komplette Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) sowie der [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

Sehen Sie [Validierungsbezogene Attribute](/de/docs/Web/HTML/Constraint_validation#validation-related_attributes) für eine vollständige Liste von Attributen, die verwendet werden können, um Eingabewerte einzuschränken, und die Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, wird JavaScript benötigt. In diesem Abschnitt werden wir uns ansehen, auf welche verschiedene Weisen dies geschehen kann.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden Formularelement-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Element/button) Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Element/input) Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Element/output) Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Element/select) Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea) Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den genannten Elementen zur Verfügung.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Wenn die Steuerung kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), wird eine leere Zeichenfolge zurückgegeben.
- `validity`: Gibt ein `ValidityState` Objekt zurück, das mehrere Eigenschaften beschreibt, die den Gültigkeitsstatus des Elements beschreiben. Sie können vollständige Details zu allen verfügbaren Eigenschaften auf der Seite [`ValidityState`](/de/docs/Web/API/ValidityState) finden; unten finden Sie einige der häufigeren:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht mit dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) übereinstimmt, und `false`, wenn er übereinstimmt. Wenn wahr, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die maximale Länge, die durch das Attribut [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) angegeben wird, oder `false`, wenn er kürzer oder gleich dem Maximum ist. Wenn wahr, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`рooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die minimale Länge, die durch das Attribut [`minlength`](/de/docs/Web/HTML/Element/input#minlength) angegeben wird, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn wahr, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das Maximum, das durch das Attribut [`max`](/de/docs/Web/HTML/Element/input#max) angegeben wird, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn wahr, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert geringer ist als das Minimum, das durch das Attribut [`min`](/de/docs/Web/HTML/Element/input#min) angegeben wird, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn wahr, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht in dem erforderlichen Syntaxformat (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist) ist, oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungsbeschränkungen erfüllt und daher als gültig betrachtet wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn true, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required) Attribut hat, aber keinen Wert, oder `false` ansonsten. Wenn wahr, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, wenn das Formular gesendet wird; `false` andernfalls.

Die Constraint Validation API stellt auch die folgenden Methoden auf den genannten Elementen und dem [`form`](/de/docs/Web/HTML/Element/form) Element bereit.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; ansonsten `false`. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mithilfe von Ereignissen. Diese Methode ist in Kombination mit `preventDefault()` in einem `onSubmit`-Ereignis-Handler nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig angesehen, und der angegebene Fehler wird angezeigt. Dies ermöglicht es Ihnen, JavaScript-Code zu verwenden, um einen Validierungsfehler festzustellen, der über die standardmäßigen HTML-Validierungseinschränkungen hinausgeht. Die Nachricht wird dem Benutzer angezeigt, wenn das Problem gemeldet wird.

#### Implementieren einer benutzerdefinierten Fehlermeldung

Wie Sie in den vorherigen Beispielen für HTML-Validierungseinschränkungen bereits gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular abzusenden, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen standardmäßigen Weg, ihr Aussehen und Gefühl mit CSS zu ändern.
- Sie hängen von der Browser-Lokalisierung ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel für eine Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API. Lassen Sie uns ein Beispiel durchgehen, wie dies getan wird.

Wir beginnen mit etwas HTML (fühlen Sie sich frei, dies in eine leere HTML-Datei aufzunehmen; verwenden Sie eine neue Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Grundlage, wenn Sie möchten):

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

Hier speichern wir einen Verweis auf die E-Mail-Eingabe und fügen dann einen Ereignis-Listener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster für eine gut geformte E-Mail-Adresse entspricht. Wenn dem so ist, rufen wir die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass beim Versuch, das Formular abzusenden, die Übermittlung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einer leeren Zeichenfolge auf. Dies macht die Eingabe gültig, sodass das Formular abgesendet wird. Während der Validierung wird die Formulareinreichung blockiert, wenn ein Formularelement einen `customError` hat, der nicht die leere Zeichenfolge ist.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie können dieses Beispiel live auf GitHub unter [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) sowie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html) finden.

#### Erweiterung der eingebauten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können. Es ist auch möglich, die gesamte eingebaute Formularvalidierung zu verwenden und dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die eingebaute Validierung für [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren. Wir beginnen mit dem folgenden HTML {{htmlelement("form")}}.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten angezeigt. Im Falle einer neuen Eingabe setzt der Code zuerst die benutzerdefinierte Gültigkeitsnachricht durch Ausrufen von `setCustomValidity("")` zurück. Dann verwendet er `email.validity.valid`, um zu überprüfen, ob die eingegebene Adresse ungültig ist, und wenn ja, wird aus dem Ereignishandler zurückgegeben. Dies stellt sicher, dass alle normalen eingebauten Validierungsprüfungen durchgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

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

Sie können dieses Beispiel in der Seite unter dem {{LiveSampleLink('Extending_built-in_form_validation', 'Live sample demo link')}} testen. Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet, zu senden.

#### Ein detaillierteres Beispiel

Nachdem wir nun ein wirklich einfaches Beispiel gesehen haben, lassen Sie uns sehen, wie wir diese API verwenden können, um einige etwas komplexere benutzerdefinierte Validierungen zu erstellen.

Zuerst das HTML. Auch hier freut es uns, wenn Sie dies zusammen mit uns entwickeln:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut, um die automatische Validierung des Browsers zu deaktivieren. Das Setzen des `novalidate`-Attributs auf das Formular stoppt das Formular daran, seine eigenen Fehlermeldungsblasen anzuzeigen, und ermöglicht es uns stattdessen, die benutzerdefinierten Fehlermeldungen im DOM auf eine von uns gewählte Weise anzuzeigen. Dies deaktiviert jedoch nicht die Unterstützung für die Constraint Validation API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}} usw. Das bedeutet, dass obwohl der Browser nicht automatisch die Gültigkeit des Formulars überprüft, bevor es seine Daten sendet, Sie es immer noch selbst tun können und das Formular entsprechend stylen können.

Unsere zu prüfende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns überprüfen, ob diese Prüfungen mit unserem eigenen Code durchgeführt werden, und zeigen wir eine benutzerdefinierte Fehlermeldung für jede.

Wir zielen darauf ab, die Fehlernachrichten innerhalb eines `<span>` Elements anzuzeigen. Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) Attribut wird auf diesem `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung für alle präsent wird, einschließlich dass sie zur Sprachausgabe gehört wird.

Nun zu etwas grundlegendes CSS, um das Erscheinungsbild des Formulars leicht zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

Nun lassen Sie uns das JavaScript ansehen, das die benutzerdefinierte Fehlerüberprüfung implementiert. Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier erhalten wir das Formular selbst und das Email- Eingabefeld, sowie das Span-Element, in das wir die Fehlermeldung platzieren werden.

Mit Event-Handlern überprüfen wir jedes Mal, wenn der Benutzer etwas eingibt, ob die Formularfelder gültig sind. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir alle Fehlermeldungen.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn sie gültig ist, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzuschicken, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular absenden. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen und verhindern die Absendung des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity` Objekts der Eingabe, um festzustellen, was der Fehler ist, und zeigt dann eine Fehlermeldung entsprechend an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie können dieses Beispiel live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) finden, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint Validation API gibt Ihnen ein leistungsstarkes Werkzeug zur Handhabung der Formularvalidierung, mit dem Sie die Benutzeroberfläche enorm kontrollieren können, weit über das hinaus, was Sie nur mit HTML und CSS erreichen können.

### Validierung von Formularen ohne eine eingebaute API

In einigen Fällen, wie bei [benutzerdefinierten Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können Sie die Constraint Validation API nicht verwenden oder wollen sie nicht verwenden. Sie können trotzdem JavaScript verwenden, um Ihr Formular zu validieren, müssen aber Ihre eigene schreiben.

Um ein Formular zu validieren, stellen Sie sich ein paar Fragen:

- Welche Art der Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: String-Operationen, Typkonvertierung, reguläre Ausdrücke usw. Es liegt an Ihnen.
- Was sollte ich tun, wenn das Formular nicht validiert?
  - : Dies ist eindeutig eine UI-Angelegenheit. Sie müssen entscheiden, wie das Formular funktionieren soll. Wird das Formular die Daten trotzdem senden? Sollten Sie die fehlerhaften Felder hervorheben? Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Benutzers zu verringern, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu führen. Sie sollten Vorschläge im Voraus geben, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen. Wenn Sie die Anforderungen der Benutzeroberfläche der Formularvalidierung erkunden möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:

    - [Helfen Sie den Benutzern, die richtigen Daten in Formularen einzugeben](https://web.dev/Learn_web_development/Extensions/Forms/validation/)
    - [Validierung der Eingaben](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, ist das folgende eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

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

Ebenso muss das CSS nicht viel geändert werden; wir haben die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse umgewandelt und die Attributselektoren vermieden.

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

Die großen Änderungen sind im JavaScript-Code, der nun viel mehr Arbeit übernehmen muss.

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

Wie Sie sehen, ist es nicht so schwer, ein eigenes Validierungssystem zu erstellen. Die Schwierigkeit besteht darin, es so generisch zu machen, dass es plattformübergreifend und in jedem Formular, das Sie erstellen könnten, einsetzbar ist. Es gibt viele Bibliotheken, die Formularvalidierung durchführen können, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen gespeichert haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Die client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie das Styling und die Fehlermeldungen anpassen möchten, aber sie erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken. Vergessen Sie niemals, Ihren Benutzern zu helfen, die von ihnen bereitgestellten Daten zu korrigieren. Daher:

- Zeigen Sie explizite Fehlermeldungen an.
- Seien Sie großzügig beim Eingabeformat.
- Weisen Sie genau darauf hin, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular abgeschickt werden. Wir behandeln als nächstes [das Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

### Erweiterte Themen

- [Anleitung zur Erstellung benutzerdefinierter Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Versenden von Formularen über JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
