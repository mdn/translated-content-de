---
title: Client-seitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 3fcbbaa87b49ddd87f76d7b932f366726028ab2c
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularelemente vor dem Absenden der von Benutzern eingegebenen Formulardaten an den Server korrekt und im richtigen Format ausgefüllt sind. Diese **client-seitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten den Anforderungen der verschiedenen Formularelemente entsprechen.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der client-seitigen Formularvalidierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit Computern, ein vernünftiges Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was client-seitige Formularvalidierung ist, warum sie wichtig ist,
        und wie man verschiedene Techniken zur Implementierung anwenden kann.
      </td>
    </tr>
  </tbody>
</table>

Client-seitige Validierung ist ein erster Check und ein wichtiges Merkmal einer guten Benutzererfahrung; durch das Abfangen ungültiger Daten auf der Client-Seite kann der Benutzer diese sofort korrigieren.
Wenn die Daten zum Server gelangen und dort abgelehnt werden, entsteht durch die Hin- und Rückreise zum Server und zurück zur Client-Seite, um den Benutzer aufzufordern, die Daten zu reparieren, eine spürbare Verzögerung.

Allerdings _sollte_ client-seitige Validierung _nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer eine Validierung, einschließlich Sicherheitsprüfungen, bei allen Formularübermittlungsdaten _serverseitig_ **sowie** client-seitig durchführen, da die client-seitige Validierung zu leicht umgangen werden kann, sodass böswillige Nutzer dennoch einfach schlechte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Websicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung serverseitiger Validierung geht etwas über den Rahmen dieses Moduls hinaus, aber Sie sollten es im Hinterkopf behalten.

## Was ist Formularvalidierung?

Gehen Sie zu einer beliebten Seite mit einem Registrierungsformular, und Sie werden feststellen, dass sie ein Feedback geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein bestimmtes Datenformat ist erforderlich, damit es als gültig betrachtet wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die von Ihnen eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist erforderlich, damit Ihre Daten gültig sind).

Dies nennt man **Formularvalidierung**.
Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der vom Antrag festgelegten Einschränkungen liegen. Die im Browser durchgeführte Validierung nennt man **client-seitige** Validierung, während die auf dem Server durchgeführte Validierung als **serverseitige** Validierung bezeichnet wird.
In diesem Kapitel konzentrieren wir uns auf die client-seitige Validierung.

Wenn die Informationen richtig formatiert sind, erlaubt die Anwendung das Absenden der Daten an den Server und (normalerweise) das Speichern in einer Datenbank; wenn die Informationen nicht richtig formatiert sind, gibt es dem Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und ermöglicht es ihm, es noch einmal zu versuchen.

Wir wollen das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum also bestehen wir darauf, unsere Formulare zu validieren?
Es gibt drei Hauptgründe:

- **Wir wollen die richtigen Daten im richtigen Format erfassen.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert sind, falsch oder ganz weggelassen sind.
- **Wir wollen die Daten unserer Benutzer schützen**. Das Erzwingen sicherer Passworteingaben durch unsere Benutzer macht es einfacher, ihre Kontodaten zu schützen.
- **Wir wollen uns selbst schützen**. Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Websicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals auf Daten, die Ihr Server vom Client erhält. Auch wenn Ihr Formular korrekt validiert und fehlerhafte Eingaben auf der Client-Seite verhindert, kann ein böswilliger Benutzer die Netzwerkanforderung dennoch ändern.

## Verschiedene Arten der client-seitigen Validierung

Es gibt zwei verschiedene Arten der client-seitigen Validierung, die Sie im Web antreffen werden:

- **HTML-Formularvalidierung**
  HTML Formulareigenschaften können definieren, welche Formularelemente erforderlich sind und in welchem Format die vom Benutzer eingegebenen Daten korrekt sein müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird normalerweise verwendet, um die HTML-Formularvalidierung zu verstärken oder anzupassen.

Client-seitige Validierung kann mit wenig bis gar keinem JavaScript erreicht werden. HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als JavaScript-Validierung. Es wird im Allgemeinen empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu beginnen und dann die Benutzererfahrung bei Bedarf mit JavaScript zu verbessern.

## Verwendung der integrierten Formularvalidierung

Eine der bedeutendsten Funktionen von [Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten ohne JavaScript zu validieren.
Dies geschieht durch die Verwendung von Validierungsattributen auf Formularelementen.
Wir haben viele dieser Attribute schon früher im Kurs gesehen, aber um zusammenzufassen:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular abgeschickt werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Gibt die Mindest- und Höchstlänge von Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die minimalen und maximalen Werte von numerischen Eingabetypen an sowie die Inkremente oder Schritte für Werte, beginnend ab dem Minimum.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer Voreinstellungstyp sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in einem Formularfeld eingegebenen Daten allen durch die auf das Feld angewendeten Attribute festgelegten Regeln entsprechen, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, gilt Folgendes:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen bestimmten Stil auf gültige Elemente anzuwenden. Die Steuerung entspricht auch {{cssxref(":user-valid")}}, wenn der Benutzer mit der Steuerung interagiert hat, und kann abhängig vom Eingabetyp und den Attributen anderen Benutzeroberflächen-Pseudoklassen entsprechen, wie z. B. {{cssxref(":in-range")}}.
- Wenn der Benutzer versucht, die Daten zu senden, sendet der Browser das Formular ab, sofern nichts anderes dies verhindert (z. B. JavaScript).

Wenn ein Element ungültig ist, gilt Folgendes:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit der Steuerung interagiert hat, entspricht es auch der {{cssxer(":user-invalid")}} CSS-Pseudoklasse. Andere Benutzeroberflächen-Pseudoklassen können ebenfalls übereinstimmen, z. B. {{cssxref(":out-of-range")}}, abhängig vom Fehler. Diese ermöglichen es Ihnen, einen bestimmten Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung unterscheidet sich je nach Fehlertyp. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für die integrierte Formularvalidierung

In diesem Abschnitt testen wir einige der oben besprochenen Attribute.

### Basis-Starterdatei

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, bei der Sie wählen können, ob Sie eine Banane oder eine Kirsche bevorzugen.
Dieses Beispiel umfasst ein Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Senden-{{htmlelement("button")}}.

```html live-sample___simple-start-file
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Favorite fruit start</title>
    <style>
      input:invalid {
        border: 2px dashed red;
      }

      input:valid {
        border: 2px solid black;
      }
    </style>
  </head>

  <body>
    <form>
      <label for="choose">Would you prefer a banana or a cherry?</label>
      <input id="choose" name="i_like" />
      <button>Submit</button>
    </form>
  </body>
</html>
```

{{EmbedLiveSample("simple-start-file", "100%", 80)}}

Erstellen Sie zunächst eine Kopie des vorherigen HTML-Listings in einer neuen `index.html`-Datei. Speichern Sie es in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das erforderliche Attribut

Eine häufige HTML-Validierungsfunktion ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut.
Fügen Sie dieses Attribut einer Eingabe hinzu, um ein Element obligatorisch zu machen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht übermittelt, wobei bei der Einreichung eine Fehlermeldung angezeigt wird, falls die Eingabe leer ist.
Solange es leer ist, wird es auch als ungültig betrachtet und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn eine Radio-Schaltfläche in einer gleichnamigen Gruppe das `required`-Attribut hat, muss eine der Radio-Schaltflächen in dieser Gruppe aktiviert sein, damit die Gruppe gültig ist; die aktivierte Radio-Schaltfläche muss nicht diejenige mit dem gesetzten Attribut sein.

> [!NOTE]
> Fordern Sie nur die Eingabe von Daten an, die Sie benötigen: Zum Beispiel, ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu kennen?

Fügen Sie Ihrer Eingabe ein `required`-Attribut hinzu, wie unten gezeigt.

```html live-sample___the-required-attribute
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(erforderlich)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darüber zu informieren, dass das {{htmlelement("input")}} erforderlich ist. Den Benutzer darüber zu informieren, welche Formularfelder erforderlich sind, ist nicht nur eine gute Benutzererfahrung, sondern wird auch von den WCAG-Richtlinien zur [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) gefordert.

Wir fügen die CSS-Stile hinzu, die basierend darauf angewendet werden, ob das Element erforderlich, gültig und ungültig ist:

```css live-sample___the-required-attribute
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

```js hidden live-sample___the-required-attribute live-sample___validate-regular-expression live-sample___constraining-values
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

Diese CSS-Einstellungen führen dazu, dass die Eingabe bei Ungültigkeit einen roten gestrichelten Rand hat und bei Gültigkeit einen subtileren durchgehenden schwarzen Rand.
Wir fügen auch einen Hintergrundgradienten hinzu, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im Beispiel unten aus:

{{EmbedLiveSample("the-required-attribute", "100%", 80, , , , , "allow-forms")}}

Versuchen Sie, das Formular ohne einen Wert zu senden. Beachten Sie, wie die ungültige Eingabe den Fokus erhält und eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint. Das Formular wird auch daran gehindert, gesendet zu werden (obwohl zu beachten ist, dass selbst wenn ein Wert eingegeben wird, wir die Formulareinreichung verhindern, um einen Fehler aufgrund der Art und Weise, wie MDN eingebettete Formulare handhabt, zu vermeiden).

### Validierung gegen einen regulären Ausdruck

Eine weitere nützliche Validierungsfunktion ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das erwartet, dass ein [Regulärer Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) seinem Wert entspricht.
Ein regulärer Ausdruck (regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textzeichenfolgen abzugleichen, sodass regexps ideal für die Formularvalidierung sind und eine Vielzahl anderer Verwendungszwecke in JavaScript haben.

Regexp sind recht komplex, und wir beabsichtigen nicht, sie in diesem Artikel umfassend zu lehren.
Unten sind einige Beispiele, um Ihnen eine grundlegende Vorstellung davon zu geben, wie sie funktionieren.

- `a` — Entspricht einem Zeichen, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Entspricht `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Entspricht `a`, optional gefolgt von einem einzigen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Entspricht `a`, optional gefolgt von beliebig vielen `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Entspricht einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Entspricht genau `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Dokumentation zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut wie dieses hinzuzufügen:

```html live-sample___validate-regular-expression
<form>
  <label for="choose">Would you prefer a banana or a cherry?</label>
  <input id="choose" name="i-like" required pattern="[Bb]anana|[Cc]herry" />
  <button>Submit</button>
</form>
```

```css hidden live-sample___validate-regular-expression
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

Das ergibt das folgende Update — probieren Sie es aus:

{{EmbedLiveSample("validate-regular-expression", "100%", 80, , , , , "allow-forms")}}

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind groß- und kleinschreibungssensitiv, aber wir haben es so gemacht, dass sowohl kapitalisierte als auch kleingeschriebene Versionen durch ein zusätzliches "Aa"-Muster innerhalb von eckigen Klammern unterstützt werden.

An diesem Punkt versuchen Sie, den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attributs zu ändern, um einigen der zuvor gesehenen Beispiele zu entsprechen, und sehen Sie, wie sich das auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen.
Versuchen Sie, einige Ihrer eigenen zu schreiben und sehen Sie, wie es läuft.
Machen Sie sie so fruchtbezogen wie möglich, damit Ihre Beispiele Sinn machen!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, erfüllt die `input` den seltsamer {{cssxref(':invalid')}} Pseudo-Class. Wenn es leer ist und das Element nicht erforderlich ist, wird es nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, um gegen einen regulären Ausdruck validiert zu werden. Beispielsweise validiert die Angabe des `email`-Typs den Wert der Eingaben gegen ein gut geformtes E-Mail-Adresse Muster oder ein Muster, das einer kommaseparierten Liste von E-Mail-Adressen entspricht, wenn es das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut nicht.

### Einschränkung der Länge Ihrer Eingaben

Sie können die Zeichenlänge aller von {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder einschränken, indem Sie die [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)- und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Attribute verwenden.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als den [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)-Wert oder mehr als den [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Wert aufweist.

Browser lassen oft nicht zu, dass der Benutzer einen längeren Wert als erwartet in Textfelder eingibt. Eine bessere Benutzererfahrung als die alleinige Verwendung von `maxlength` besteht darin, auch ein Feedback zur Zeichenanzahl in einer zugänglichen Weise bereitzustellen und dem Benutzer zu erlauben, ihre Inhalte auf die Größe zu reduzieren.
Ein Beispiel dafür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen unter Verwendung von `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann dafür verwendet werden.

> [!NOTE]
> Längeneinschränkungen werden niemals gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur für benutzergenerierte Eingaben gemeldet.

### Einschränkung der Werte Ihrer Eingaben

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und der verschiedenen Date-Eingabetypen, können die [`min`](/de/docs/Web/HTML/Reference/Attributes/min)- und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribute verwendet werden, um einen Bereich gültiger Werte bereitzustellen.
Wenn das Feld einen Wert außerhalb dieser Bereichs enthält, wird es ungültig.

Schauen wir uns ein weiteres Beispiel an.
Erstellen Sie eine neue Kopie der [Basis-Starterdatei](#basis-starterdatei) Datei (speichern Sie es im selben Verzeichnis unter `index2.html`).

Jetzt löschen Sie den Inhalt des `<body>`-Elements und ersetzen ihn durch Folgendes:

```html live-sample___constraining-values
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

- Hier sehen Sie, dass wir dem `text`-Feld eine `minlength` und `maxlength` von sechs gegeben haben, was die gleiche Länge wie Banane und Kirsche hat.
- Wir haben dem `number`-Feld auch ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Inkrement-/Dekrement-Pfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu bewegen.
  Wenn der Benutzer manuell einen Wert außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
  Die Zahl ist nicht erforderlich, daher ergibt das Entfernen des Werts einen gültigen Wert.

```css hidden live-sample___constraining-values
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

Hier ist das Beispiel, das live ausgeführt wird:

{{EmbedLiveSample("constraining-values", "100%", 100)}}

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

Numerische Eingabetypen wie `number`, `range` und `date` können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut annehmen. Dieses Attribut gibt an, mit welchem Inkrement der Wert erhöht oder verringert wird, wenn die Eingabesteuerungen verwendet werden (wie die Aufwärts- und Abwärts-Zahlentasten oder das Verschieben des Bereichs-Schieberegler). Das `step`-Attribut wird in unserem Beispiel weggelassen, sodass der Wert standardmäßig `1` ist. Dies bedeutet, dass Fließkommazahlen, wie 3.2, ebenfalls als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, um die Verwendung der integrierten Validierungsfunktionen von HTML zu zeigen.
Erstmaliges HTML:

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
  border: 1px solid #333333;
  box-sizing: border-box;
}

input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  box-shadow: none;
}
```

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) für eine vollständige Liste von Attributen, die verwendet werden können, um Eingabewerte einzuschränken und die Eingabetypen, die sie unterstützen.

## Formularvalidierung mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich.
In diesem Abschnitt schauen wir uns die verschiedenen Möglichkeiten dazu an.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden Formular-Element-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen zur Verfügung:

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerungsfeld nicht erfüllt (falls vorhanden). Wenn das Steuerungselement kein Kandidat für die Validierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), wird eine leere Zeichenfolge zurückgegeben.
- `validity`: Gibt eine `ValidityState`-Objekt zurück, das mehrere Eigenschaften beschreibt, einschließlich des Validitätsstatus des Elements. Sie können vollständige Details zu allen verfügbaren Eigenschaften auf der Referenzseite des [`ValidityState`](/de/docs/Web/API/ValidityState) finden; unten sind einige der häufigsten aufgeführt:
  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudo-Klasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die maximale Länge, die durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut angegeben ist, oder `false`, wenn er kürzer als oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudo-Klasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die minimale Länge, die durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angegeben ist, oder `false`, wenn er länger oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudo-Klasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als der durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut angegebene maximale Wert, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudo-Klassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als der durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut angegebene minimale Wert, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudo-Klassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht der erforderlichen Syntax entspricht (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudo-Klasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle Validierungseinschränkungen erfüllt und daher als gültig betrachtet wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudo-Klasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudo-Klasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber keinen Wert, oder `false` andernfalls. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudo-Klasse.

- `willValidate`: Gibt `true` zurück, wenn das Element beim Abschicken des Formulars validiert wird; `false` sonst.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form)-Element zur Verfügung:

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Validitätsprobleme hat; `false` andernfalls. Falls das Element ungültig ist, löst diese Methode auch ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mithilfe von Ereignissen. Diese Methode ist in Kombination mit `preventDefault()` in einer `onSubmit` Ereignisbehandlungsroutine nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig betrachtet und die angegebene Fehlermeldung wird angezeigt. Dies ermöglicht es Ihnen, mit JavaScript-Code eine Validierungsfehler festzulegen, die über die von den standardmäßigen HTML-Validierungseinschränkungen angebotenen hinausgehen. Die Nachricht wird dem Benutzer beim Melden des Problems angezeigt.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den HTML-Validierungsbeispielen zuvor gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular abzusenden, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen standardmäßigen Weg, um deren Aussehen mit CSS zu ändern.
- Sie hängen von der Spracheinstellung des Browsers ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Das Anpassen dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns ein Beispiel dafür durchgehen, wie Sie dies tun können.

Wir beginnen mit etwas HTML. Fühlen Sie sich frei, dies in eine weitere Kopie der [Basis-Starterdatei](#basis-starterdatei) zu legen, falls Sie möchten:

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

Hier speichern wir einen Verweis auf die E-Mail-Eingabe und fügen dieser ein Event-Listener hinzu, das den enthaltenen Code jedes Mal ausführt, wenn sich der Wert in der Eingabe ändert.

Im enthaltenen Code prüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster einer wohlgeformten E-Mail-Adresse entspricht. Wenn dies der Fall ist, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) Methode mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass wenn Sie versuchen, das Formular abzusenden, die Einreichung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die `setCustomValidity()`-Methode mit einer leeren Zeichenkette auf. Dies macht die Eingabe gültig, sodass das Formular gesendet wird. Während der Validierung, wenn ein Formularfeld einen `customError` hat, der nicht die leere Zeichenfolge ist, wird das Absenden des Formulars blockiert.

Sie können es unten ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___custom-error-message
<form>
  <label for="mail"
    >I would like you to provide me with an email address:</label
  >
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

```css hidden live-sample___custom-error-message
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
form {
  margin: 3rem 0;
}
```

```js hidden live-sample___custom-error-message
const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("custom-error-message", "100%", 120, , , , , "allow-forms")}}

#### Erweiterung der integrierten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für einen bestimmten Fehlertyp hinzufügen können (`validity.typeMismatch`).
Es ist auch möglich, die gesamte integrierte Formularvalidierung zu nutzen und sie dann zu erweitern, indem Sie `setCustomValidity()` verwenden.

Hier demonstrieren wir, wie Sie die integrierte Validierung für das [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)-Attribut so erweitern können, dass nur Adressen mit der Domain `@example.com` akzeptiert werden.
Wir beginnen mit dem unten stehenden HTML {{htmlelement("form")}}.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt.
Im Fall von neuen Eingaben setzt der Code zuerst die benutzerdefinierte Fehlermeldung zurück, indem er `setCustomValidity("")` aufruft.
Dann verwendet er `email.validity.valid`, um zu prüfen, ob die eingegebene Adresse ungültig ist und wenn ja, kehrt aus der Ereignishandlingsroutine zurück.
Dies stellt sicher, dass alle normalen integrierten Validierungsprüfungen ausgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Bedingung hinzu, indem er `setCustomValidity()` mit einer Fehlermeldung aufruft, wenn die Adresse nicht mit `@example.com` endet.

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

Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine E-Mail-Adresse, die mit `@example.com` endet, abzusenden.

{{EmbedLiveSample("extending built-in form validation", "", 200, , , , , "allow-forms")}}

#### Ein detaillierteres Beispiel

Nachdem wir ein wirklich einfaches Beispiel gesehen haben, schauen wir uns an, wie wir mit dieser API eine etwas komplexere benutzerdefinierte Validierung erstellen können.

Zuerst das HTML. Erstellen Sie dies ruhig mit uns mit:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut, um die automatische Validierung des Browsers zu deaktivieren. Wenn das `novalidate`-Attribut am Formular gesetzt ist, verhindert es, dass das Formular seine eigenen Fehlermeldeblasen anzeigt und ermöglicht es uns stattdessen, die benutzerdefinierten Fehlermeldungen auf irgendeine Weise unserer Wahl im DOM anzuzeigen.
Jedoch deaktiviert dies nicht die Unterstützung für die Validierungs-API noch die Anwendung von CSS-Pseudo-Klassen wie {{cssxref(":valid")}} usw.
Das bedeutet, dass selbst wenn der Browser die Gültigkeit des Formulars vor dem Versenden seiner Daten nicht automatisch überprüft, Sie dies dennoch selbst tun und das Formular entsprechend gestalten können.

Unsere zu validierende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), welches `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unseren eigenen Code prüfen und eine benutzerdefinierte Fehlermeldung für jede anzeigen.

Wir zielen darauf ab, die Fehlermeldungen in einem `<span>`-Element anzuzeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Attribut ist auf diesem `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen angezeigt wird, auch dass es für Screenreader-Nutzer vorgelesen wird.

Jetzt zu einem grundlegenden CSS, um das Aussehen des Formulars leicht zu verbessern und visuelles Feedback zu

geben, wenn die Eingabedaten ungültig sind:

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
  border: 1px solid #333333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* invalid fields */
input:invalid {
  border-color: #990000;
  background-color: #ffdddd;
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
  background-color: #990000;
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

Nun wenden wir uns dem JavaScript zu, das die benutzerdefinierte Fehlerprüfung implementiert.
Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier holen wir uns das Formular selbst und das E-Mail
Eingabefeld, sowie das Span-Element, in das wir die Fehlermeldung platzieren werden.

Mit Event-Handlern überprüfen wir jedes Mal, ob die Formularelemente gültig sind, wenn der Benutzer etwas eintippt. Gibt es einen Fehler, zeigen wir ihn an. Gibt es keinen Fehler, entfernen wir jegliche Fehlermeldungen.

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

Jedes Mal, wenn sich der Wert der Eingabe ändert, überprüfen wir, ob sie gültige Daten enthält. Wenn dies der Fall ist, entfernen wir jegliche angezeigte Fehlermeldungen. Wenn die Daten ungültig sind, führen wir `showError()` aus, um die entsprechende Fehlermeldung anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzusenden, überprüfen wir erneut, ob die Daten gültig sind. Wenn dem so ist, lassen wir das Formular absenden. Wenn nicht, führen wir `showError()` aus, um die entsprechende Fehlermeldung anzuzeigen, und stoppen das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um zu bestimmen, was der Fehler ist, und zeigt dann eine entsprechende Fehlermeldung an.

Hier ist das Live-Ergebnis (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___detailed-custom-validation
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

```css hidden live-sample___detailed-custom-validation
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
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* This is our style for the invalid fields */
input:invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus:invalid {
  outline: none;
}

/* This is the style of our error messages */
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

```js hidden live-sample___detailed-custom-validation
// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.innerHTML = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", function (event) {
  // if the form contains valid data, we let it submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("detailed-custom-validation", "100%", 150, , , , , "allow-forms")}}

Die Constraint Validation API bietet Ihnen ein leistungsstarkes Werkzeug zur Formularvalidierung und gibt Ihnen eine enorme Kontrolle über die Benutzeroberfläche, die über das hinausgeht, was Sie allein mit HTML und CSS tun können.

### Formularvalidierung ohne eine integrierte API

In einigen Fällen, wie bei [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), werden Sie die Constraint Validation API möglicherweise nicht verwenden können oder möchten dies nicht. Sie können weiterhin JavaScript zur Validierung Ihres Formulars verwenden, aber Sie müssen Ihre eigene Validierung schreiben.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung soll ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: String-Operationen, Typkonvertierung, reguläre Ausdrücke usw. Es liegt an Ihnen.
- Was soll ich tun, wenn das Formular nicht validiert wird?
  - : Dies ist eindeutig eine Benutzeroberflächenfrage. Sie müssen entscheiden, wie sich das Formular verhalten wird. Sendet das Formular die Daten trotzdem?
    Sollten Sie die Felder hervorheben, die fehlerhaft sind?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?
  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu unterstützen.
    Sie sollten Vorschläge im Voraus anbieten, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie in die Anforderungen der Benutzeroberfläche zur Formularvalidierung eintauchen möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:
    - [Help users enter the right data in forms](https://web.dev/learn/forms/form-fields)
    - [Validating input](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [How to Report Errors in Forms: 10 Design Guidelines](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, ist das folgende eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

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

Ebenso muss das CSS nicht viel geändert werden; wir haben lediglich die {{cssxref(":invalid")}} CSS-Pseudo-Klasse in eine echte Klasse umgewandelt und vermieden, den Attributselektor zu verwenden.

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
  border: 1px solid #333333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* invalid fields */
input.invalid {
  border: 2px solid #990000;
  background-color: #ffdddd;
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
  background-color: #990000;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.active {
  padding: 0.3rem;
}
```

Die großen Änderungen sind im JavaScript-Code, der viel mehr Heben übernehmen muss.

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
const updateError = (isValid) => {
  if (isValid) {
    error.textContent = "";
    error.removeAttribute("class");
  } else {
    error.textContent = "I expect an email, darling!";
    error.setAttribute("class", "active");
  }
};

// Handle input event to update email validity
const handleInput = () => {
  const validity = isValidEmail();
  setEmailClass(validity);
  updateError(validity);
};

// Handle form submission to show error if email is invalid
const handleSubmit = (event) => {
  event.preventDefault();

  const validity = isValidEmail();
  setEmailClass(validity);
  updateError(validity);
};

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
const validity = isValidEmail();
setEmailClass(validity);
// This defines what happens when the user types in the field
email.addEventListener("input", handleInput);
// This defines what happens when the user tries to submit the data
form.addEventListener("submit", handleSubmit);
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Wie Sie sehen können, ist es nicht so schwer, ein Validierungssystem selbst zu erstellen. Der schwierige Teil ist, es allgemein genug zu gestalten, um es sowohl plattformübergreifend als auch in jedem Formular, das Sie erstellen könnten, zu verwenden. Es gibt viele Bibliotheken zur Formularvalidierung, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Zusammenfassung

Die client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie das Styling und die Fehlermeldungen anpassen möchten, aber es _erfordert_ immer einen sorgfältigen Umgang mit dem Benutzer.
Denken Sie immer daran, Ihren Benutzern bei der Korrektur der von ihnen bereitgestellten Daten zu helfen. Achten Sie darauf:

- Explizite Fehlermeldungen anzuzeigen.
- Tolerant gegenüber dem Eingabeformat zu sein.
- Genau darauf hinzuweisen, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular übermittelt werden.
Wir werden als nächstes das [Versenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) behandeln.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
