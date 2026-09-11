---
title: Clientseitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: f5ea8950d5cc7bc42691e0bb8a3e634160814bac
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig, sicherzustellen, dass alle erforderlichen Formular-Steuerelemente ausgefüllt sind und das richtige Format haben, bevor vom Benutzer eingegebene Formulardaten an den Server übermittelt werden. Diese **clientseitige Formularvalidierung** trägt dazu bei, sicherzustellen, dass eingegebene Daten den Anforderungen entsprechen, die in den verschiedenen Formular-Steuerelementen festgelegt sind.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der clientseitigen Formularvalidierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computer-Grundkenntnisse, ein angemessenes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was clientseitige Formularvalidierung ist, warum sie wichtig
        ist und wie verschiedene Techniken zu ihrer Implementierung angewendet werden.
      </td>
    </tr>
  </tbody>
</table>

Clientseitige Validierung ist eine erste Prüfung und ein wichtiges Merkmal einer guten Benutzererfahrung; indem ungültige Daten auf der Clientseite erkannt werden, kann der Benutzer sie sofort korrigieren.
Wenn die Daten den Server erreichen und dort abgelehnt werden, entsteht eine merkliche Verzögerung durch einen Hin- und Rückweg zum Server und zurück zur Clientseite, um dem Benutzer mitzuteilen, dass die Daten korrigiert werden müssen.

Clientseitige Validierung _sollte jedoch nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten für alle über ein Formular übermittelten Daten immer auch auf der _Serverseite_ Validierungen einschließlich Sicherheitsprüfungen durchführen, **zusätzlich** zur Clientseite, da sich clientseitige Validierung zu leicht umgehen lässt und böswillige Benutzer daher weiterhin leicht fehlerhafte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung serverseitiger Validierung geht etwas über den Umfang dieses Moduls hinaus, Sie sollten sie jedoch im Hinterkopf behalten.

## Was ist Formularvalidierung?

Besuchen Sie eine beliebige populäre Website mit einem Registrierungsformular, und Sie werden feststellen, dass diese Rückmeldungen geben, wenn Sie Ihre Daten nicht in dem erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- „Dieses Feld ist erforderlich“ (Sie können dieses Feld nicht leer lassen).
- „Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein“ (ein bestimmtes Datenformat ist erforderlich, damit die Eingabe als gültig gilt).
- „Bitte geben Sie eine gültige E-Mail-Adresse ein“ (die eingegebenen Daten haben nicht das richtige Format).
- „Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten.“ (für Ihre Daten ist ein sehr spezifisches Datenformat erforderlich).

Dies wird als **Formularvalidierung** bezeichnet.
Wenn Sie Daten eingeben, prüft der Browser (und der Webserver), ob die Daten das richtige Format haben und innerhalb der von der Anwendung festgelegten Einschränkungen liegen. Im Browser durchgeführte Validierung wird als **clientseitige** Validierung bezeichnet, während auf dem Server durchgeführte Validierung **serverseitige** Validierung heißt.
In diesem Kapitel konzentrieren wir uns auf die clientseitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung, die Daten an den Server zu übermitteln und sie (üblicherweise) in einer Datenbank zu speichern. Wenn die Informationen nicht korrekt formatiert sind, erhält der Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und kann es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also auf der Validierung unserer Formulare?
Dafür gibt es drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht ordnungsgemäß, wenn die Daten unserer Benutzer im falschen Format gespeichert werden, fehlerhaft sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen.** Indem wir unsere Benutzer zur Eingabe sicherer Passwörter verpflichten, wird es einfacher, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung zu schaden. Siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die vom Client an Ihren Server übermittelt werden. Selbst wenn Ihr Formular korrekt validiert und fehlerhafte Eingaben auf der Clientseite verhindert, kann ein böswilliger Benutzer die Netzwerkanfrage weiterhin verändern.

## Verschiedene Arten clientseitiger Validierung

Im Web begegnen Ihnen zwei verschiedene Arten clientseitiger Validierung:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können festlegen, welche Formular-Steuerelemente erforderlich sind und welches Format die vom Benutzer eingegebenen Daten haben müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird im Allgemeinen eingebunden, um die HTML-Formularvalidierung zu erweitern oder anzupassen.

Clientseitige Validierung kann mit wenig bis gar keinem JavaScript umgesetzt werden. HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als JavaScript-Validierung. Im Allgemeinen wird empfohlen, Formulare zunächst mit robusten HTML-Funktionen zu erstellen und die Benutzererfahrung bei Bedarf mit JavaScript zu verbessern.

## Verwendung integrierter Formularvalidierung

Eine der wichtigsten Funktionen von [Formular-Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Möglichkeit, die meisten Benutzerdaten ohne JavaScript zu validieren.
Dies geschieht mithilfe von Validierungsattributen für Formularelemente.
Viele davon haben wir bereits früher im Kurs gesehen, aber zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Legt fest, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular übermittelt werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Legen die minimale und maximale Länge von Textdaten (Zeichenketten) fest.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Legen die minimalen und maximalen Werte numerischer Eingabetypen sowie die Schrittweite für Werte ab dem Minimum fest.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Legt fest, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer vordefinierter Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Legt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) fest, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in ein Formularfeld eingegebenen Daten allen durch die auf das Feld angewendeten Attribute festgelegten Regeln entsprechen, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, trifft Folgendes zu:

- Das Element entspricht der CSS-Pseudoklasse {{cssxref(":valid")}}, mit der Sie auf gültige Elemente einen bestimmten Stil anwenden können. Das Steuerelement entspricht außerdem {{cssxref(":user-valid")}}, wenn der Benutzer mit dem Steuerelement interagiert hat, und kann abhängig vom Eingabetyp und den Attributen weiteren UI-Pseudoklassen entsprechen, etwa {{cssxref(":in-range")}}.
- Wenn der Benutzer versucht, die Daten zu senden, übermittelt der Browser das Formular, sofern ihn nichts anderes daran hindert (z. B. JavaScript).

Wenn ein Element ungültig ist, trifft Folgendes zu:

- Das Element entspricht der CSS-Pseudoklasse {{cssxref(":invalid")}}. Wenn der Benutzer mit dem Steuerelement interagiert hat, entspricht es außerdem der CSS-Pseudoklasse {{cssxref(":user-invalid")}}. Abhängig vom Fehler können auch andere UI-Pseudoklassen zutreffen, beispielsweise {{cssxref(":out-of-range")}}. Damit können Sie auf ungültige Elemente einen bestimmten Stil anwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung unterscheidet sich je nach Fehlertyp. Die [Constraint Validation API](#die_constraint_validation_api) wird weiter unten beschrieben.

## Beispiele für integrierte Formularvalidierung

In diesem Abschnitt testen wir einige der oben besprochenen Attribute.

### Grundlegende Startdatei

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, bei der Sie auswählen können, ob Sie eine Banane oder eine Kirsche bevorzugen.
Dieses Beispiel enthält ein Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Übermittlungs-{{htmlelement("button")}}.

```html live-sample___simple-start-file
<!doctype html>
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

Erstellen Sie zunächst eine Kopie der vorherigen HTML-Auflistung in einer neuen Datei `index.html`. Speichern Sie sie in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das Attribut required

Eine häufig verwendete HTML-Validierungsfunktion ist das Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required).
Fügen Sie dieses Attribut zu einer Eingabe hinzu, um ein Element obligatorisch zu machen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der UI-Pseudoklasse {{cssxref(':required')}}, und das Formular wird bei der Übermittlung nicht gesendet, wenn die Eingabe leer ist; stattdessen wird eine Fehlermeldung angezeigt.
Solange die Eingabe leer ist, gilt sie außerdem als ungültig und entspricht der UI-Pseudoklasse {{cssxref(':invalid')}}.

Wenn eine Radio-Schaltfläche in einer Gruppe mit gleichem Namen das Attribut `required` hat, muss eine der Radio-Schaltflächen in dieser Gruppe aktiviert sein, damit die Gruppe gültig ist; die aktivierte Radio-Schaltfläche muss nicht diejenige sein, für die das Attribut gesetzt wurde.

> [!NOTE]
> Verlangen Sie von Benutzern nur Daten, die Sie benötigen: Ist es zum Beispiel wirklich notwendig, das Geschlecht oder den Titel einer Person zu kennen?

Fügen Sie Ihrer Eingabe wie unten gezeigt ein Attribut `required` hinzu.

```html live-sample___the-required-attribute
<form>
  <label for="choose">Would you prefer a banana or cherry? *</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

> [!NOTE]
> Es ist üblich, nach den Beschriftungen erforderlicher Formular-Steuerelemente ein Sternchen (oder eine andere Markierung) zu setzen, damit diese für sehende Benutzer hervorstechen. Dem Benutzer mitzuteilen, wann Formularfelder erforderlich sind, ist nicht nur eine gute Benutzererfahrung, sondern wird auch durch die WCAG-[Barrierefreiheits](/de/docs/Learn_web_development/Core/Accessibility)-Richtlinien verlangt.

Wir fügen CSS-Stile ein, die abhängig davon angewendet werden, ob das Element erforderlich, gültig oder ungültig ist:

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

Dieses CSS bewirkt, dass die Eingabe bei Ungültigkeit einen roten gestrichelten Rand und bei Gültigkeit einen dezenteren durchgezogenen schwarzen Rand erhält.
Außerdem haben wir einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("the-required-attribute", "100%", 80, , , , , "allow-forms")}}

Versuchen Sie, das Formular ohne einen Wert zu übermitteln. Beachten Sie, wie die ungültige Eingabe den Fokus erhält und eine standardmäßige Fehlermeldung („Bitte füllen Sie dieses Feld aus“) erscheint. Auch die Übermittlung des Formulars wird verhindert (beachten Sie jedoch, dass wir die Formularübermittlung selbst bei Eingabe eines Werts verhindern, um einen Fehler zu vermeiden, der durch die Verarbeitung eingebetteter Formulare durch MDN entsteht).

### Validierung anhand eines regulären Ausdrucks

Eine weitere nützliche Validierungsfunktion ist das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern), das einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein regulärer Ausdruck (regexp) ist ein Muster, das zum Abgleichen von Zeichenkombinationen in Textzeichenketten verwendet werden kann. Daher eignen sich reguläre Ausdrücke ideal für die Formularvalidierung und haben in JavaScript viele weitere Anwendungsfälle.

Reguläre Ausdrücke sind recht komplex, und wir beabsichtigen nicht, sie Ihnen in diesem Artikel vollständig beizubringen.
Nachfolgend finden Sie einige Beispiele, um Ihnen eine grundlegende Vorstellung ihrer Funktionsweise zu geben.

- `a` — Entspricht einem Zeichen, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Entspricht `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Entspricht `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Entspricht `a`, optional gefolgt von einer beliebigen Anzahl von `b`, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Entspricht einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Entspricht genau `abc` oder genau `xyz` (aber nicht `abcxyz`, `a`, `y` usw.).

Es gibt noch viele weitere Möglichkeiten, die wir hier nicht behandeln.
Eine vollständige Liste und viele Beispiele finden Sie in unserer Dokumentation zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein Attribut [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) wie dieses hinzuzufügen:

```html live-sample___validate-regular-expression
<form>
  <label for="choose">Would you prefer a banana or a cherry? *</label>
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

Dadurch ergibt sich folgende Aktualisierung — probieren Sie sie aus:

{{EmbedLiveSample("validate-regular-expression", "100%", 80, , , , , "allow-forms")}}

Sie können auch die Schaltfläche **Play** drücken, um das Beispiel in MDN Playground zu öffnen und dort den Quellcode zu bearbeiten.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Zeichenketten „banana“, „Banana“, „cherry“ oder „Cherry“. Reguläre Ausdrücke berücksichtigen Groß- und Kleinschreibung, aber wir haben mithilfe eines zusätzlichen „Aa“-Musters in eckigen Klammern sowohl großgeschriebene als auch kleingeschriebene Varianten unterstützt.

Versuchen Sie nun, den Wert innerhalb des Attributs [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) in einige der zuvor gesehenen Beispiele zu ändern, und betrachten Sie, wie sich dies auf die Werte auswirkt, die Sie eingeben können, damit der Eingabewert gültig ist.
Versuchen Sie, eigene Ausdrücke zu schreiben, und sehen Sie, wie es funktioniert.
Gestalten Sie sie nach Möglichkeit mit Bezug zu Obst, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, entspricht das `input` der Pseudoklasse {{cssxref(':invalid')}}. Ist es leer und das Element nicht erforderlich, gilt es nicht als ungültig.

Einige Typen des {{HTMLElement("input")}}-Elements benötigen kein Attribut [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern), um anhand eines regulären Ausdrucks validiert zu werden. Beispielsweise validiert die Angabe des Typs `email` den Eingabewert anhand eines Musters für eine wohlgeformte E-Mail-Adresse oder, falls das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, anhand eines Musters für eine durch Kommas getrennte Liste von E-Mail-Adressen.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) nicht.

### Begrenzen der Länge Ihrer Eingaben

Sie können die Zeichenlänge aller mit {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder mithilfe der Attribute [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) begrenzen.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als der Wert von [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) oder mehr Zeichen als der Wert von [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) enthält.

Browser erlauben Benutzern bei Textfeldern oft nicht, einen längeren als den erwarteten Wert einzugeben. Eine bessere Benutzererfahrung als die alleinige Verwendung von `maxlength` ist, zusätzlich auf barrierefreie Weise eine Rückmeldung zur Zeichenzahl bereitzustellen und dem Benutzer zu erlauben, seinen Inhalt auf die zulässige Größe zu kürzen.
Ein Beispiel hierfür ist die Zeichenbegrenzung beim Veröffentlichen in sozialen Medien. JavaScript, einschließlich [Lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann dazu verwendet werden.

> [!NOTE]
> Längenbeschränkungen werden niemals gemeldet, wenn der Wert programmatisch gesetzt wird. Sie werden nur bei vom Benutzer bereitgestellten Eingaben gemeldet.

### Begrenzen der Werte Ihrer Eingaben

Bei numerischen Feldern, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und den verschiedenen Datumseingabetypen, können die Attribute [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) verwendet werden, um einen Bereich gültiger Werte bereitzustellen.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, ist es ungültig.

Sehen wir uns ein weiteres Beispiel an.
Erstellen Sie eine neue Kopie der [grundlegenden Startdatei](#grundlegende_startdatei) und speichern Sie sie als `index2.html` im selben Verzeichnis.

Löschen Sie nun den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch Folgendes:

```html live-sample___constraining-values
<form>
  <div>
    <label for="choose">Would you prefer a banana or a cherry? *</label>
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

- Hier sehen Sie, dass wir dem Feld `text` ein `minlength` und `maxlength` von sechs gegeben haben, was derselben Länge wie banana und cherry entspricht.
- Außerdem haben wir dem Feld `number` ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Pfeile zum Erhöhen/Verringern nicht verwenden, um den Wert außerhalb dieses Bereichs zu verschieben.
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
  Die Zahl ist nicht erforderlich, daher führt das Entfernen des Werts zu einem gültigen Wert.

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

Hier sehen Sie das laufende Beispiel:

{{EmbedLiveSample("constraining-values", "100%", 100)}}

Sie können auch die Schaltfläche **Play** drücken, um das Beispiel in MDN Playground zu öffnen und dort den Quellcode zu bearbeiten.

Numerische Eingabetypen wie `number`, `range` und `date` können auch das Attribut [`step`](/de/docs/Web/HTML/Reference/Attributes/step) annehmen. Dieses Attribut legt fest, um welche Schrittweite der Wert steigt oder fällt, wenn die Eingabe-Steuerelemente verwendet werden (etwa die Schaltflächen für Zahlen nach oben und unten oder das Verschieben des Schiebereglers). Das Attribut `step` wird in unserem Beispiel weggelassen, daher lautet der Standardwert `1`. Dies bedeutet, dass Fließkommazahlen wie 3.2 ebenfalls als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, das die Verwendung der integrierten HTML-Validierungsfunktionen zeigt.
Zunächst etwas HTML:

```html
<form>
  <p>Please complete all required (*) fields.</p>
  <fieldset>
    <legend>Do you have a driver's license? *</legend>
    <input type="radio" required name="driver" id="r1" value="yes" />
    <label for="r1">Yes</label>
    <input type="radio" required name="driver" id="r2" value="no" />
    <label for="r2">No</label>
  </fieldset>
  <p>
    <label for="n1">How old are you?</label>
    <input type="number" min="12" max="120" step="1" id="n1" name="age" />
  </p>
  <p>
    <label for="t1">What's your favorite fruit? *</label>
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

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Sie können auch die Schaltfläche **Play** drücken, um das Beispiel in MDN Playground zu öffnen und dort den Quellcode zu bearbeiten.

Eine vollständige Liste der Attribute, die zum Einschränken von Eingabewerten verwendet werden können, sowie der Eingabetypen, die sie unterstützen, finden Sie unter [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes).

## Formulare mit JavaScript validieren

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, benötigen Sie JavaScript.
In diesem Abschnitt betrachten wir die verschiedenen Möglichkeiten dafür.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die in den folgenden DOM-Schnittstellen für Formularelemente verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element)

Die Constraint Validation API stellt für die oben genannten Elemente die folgenden Eigenschaften bereit.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, welche das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Beschränkungsvalidierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Beschränkungen erfüllt (gültig ist), wird eine leere Zeichenkette zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften zur Beschreibung des Gültigkeitsstatus des Elements enthält. Vollständige Informationen zu allen verfügbaren Eigenschaften finden Sie auf der Referenzseite zu [`ValidityState`](/de/docs/Web/API/ValidityState); nachfolgend sind einige der häufigeren aufgeführt:
  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er ihm entspricht. Wenn der Wert `true` ist, entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die durch das Attribut [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) angegebene maximale Länge, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn der Wert `true` ist, entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die durch das Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) angegebene Mindestlänge, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn der Wert `true` ist, entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das durch das Attribut [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) angegebene Maximum, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn der Wert `true` ist, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das durch das Attribut [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) angegebene Minimum, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn der Wert `true` ist, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht die erforderliche Syntax aufweist (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn der Wert `true` ist, entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungsbeschränkungen erfüllt und daher als gültig gilt, oder `false`, wenn es eine Beschränkung nicht erfüllt. Wenn der Wert `true` ist, entspricht das Element der CSS-Pseudoklasse {{cssxref(":valid")}}; andernfalls der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required), aber keinen Wert hat, oder andernfalls `false`. Wenn der Wert `true` ist, entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.

- `willValidate`: Gibt `true` zurück, wenn das Element beim Übermitteln des Formulars validiert wird; andernfalls `false`.

Die Constraint Validation API stellt außerdem die folgenden Methoden für die oben genannten Elemente und das Element [`form`](/de/docs/Web/HTML/Reference/Elements/form) bereit.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls `false`. Wenn das Element ungültig ist, löst diese Methode außerdem ein [`invalid`-Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mithilfe von Ereignissen. Diese Methode ist in Verbindung mit `preventDefault()` in einem `onSubmit`-Ereignis-Handler nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung setzen, gilt das Element als ungültig und der angegebene Fehler wird angezeigt. Damit können Sie mit JavaScript-Code einen anderen Validierungsfehler als die durch die standardmäßigen HTML-Validierungsbeschränkungen angebotenen festlegen. Die Nachricht wird dem Benutzer angezeigt, wenn das Problem gemeldet wird.

#### Implementieren einer benutzerdefinierten Fehlermeldung

Wie Sie in den vorherigen Beispielen für HTML-Validierungsbeschränkungen gesehen haben, zeigt der Browser jedes Mal eine Fehlermeldung an, wenn ein Benutzer versucht, ein ungültiges Formular zu übermitteln. Die Art der Anzeige dieser Nachricht hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keine standardisierte Möglichkeit, ihr Erscheinungsbild mit CSS zu ändern.
- Sie hängen vom Gebietsschema des Browsers ab. Das bedeutet, dass Sie eine Seite in einer Sprache haben können, während die Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Das Anpassen dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns anhand eines Beispiels durchgehen, wie dies funktioniert.

Wir beginnen mit etwas HTML. Wenn Sie möchten, können Sie dies in eine weitere Kopie der Datei mit der [grundlegenden Startdatei](#grundlegende_startdatei) einfügen:

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

Hier speichern wir eine Referenz auf die E-Mail-Eingabe und fügen ihr dann einen Ereignis-Listener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Innerhalb des enthaltenen Codes prüfen wir, ob die Eigenschaft `validity.typeMismatch` der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster für eine wohlgeformte E-Mail-Adresse entspricht. Wenn dies der Fall ist, rufen wir die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) mit einer benutzerdefinierten Nachricht auf. Dadurch wird die Eingabe ungültig, sodass die Übermittlung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird, wenn Sie versuchen, das Formular zu übermitteln.

Wenn die Eigenschaft `validity.typeMismatch` `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einer leeren Zeichenkette auf. Dadurch wird die Eingabe gültig und das Formular wird übermittelt. Während der Validierung wird die Formularübermittlung blockiert, wenn ein Formular-Steuerelement einen `customError` aufweist, der nicht die leere Zeichenkette ist.

Sie können dies unten ausprobieren (drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

email.addEventListener("input", (event) => {
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

#### Integrierte Formularvalidierung erweitern

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können.
Es ist auch möglich, die gesamte integrierte Formularvalidierung zu verwenden und sie dann mit `setCustomValidity()` zu ergänzen.

Hier demonstrieren wir, wie Sie die integrierte Validierung von [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren.
Wir beginnen mit dem folgenden HTML-{{htmlelement("form")}}.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten angezeigt.
Bei jeder neuen Eingabe setzt der Code zunächst die benutzerdefinierte Gültigkeitsmeldung durch Aufruf von `setCustomValidity("")` zurück.
Anschließend verwendet er `email.validity.valid`, um zu prüfen, ob die eingegebene Adresse ungültig ist, und kehrt in diesem Fall aus dem Ereignis-Handler zurück.
Dadurch wird sichergestellt, dass alle normalen integrierten Validierungsprüfungen ausgeführt werden, solange der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Beschränkung hinzu, indem er `setCustomValidity()` mit einer Fehlermeldung aufruft, falls die Adresse nicht auf `@example.com` endet.

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

Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse, die nicht auf `@example.com` endet, sowie eine E-Mail-Adresse zu übermitteln, die auf `@example.com` endet.

{{EmbedLiveSample("extending built-in form validation", "", 200, , , , , "allow-forms")}}

#### Ein detaillierteres Beispiel

Nachdem wir nun ein wirklich grundlegendes Beispiel gesehen haben, sehen wir uns an, wie wir diese API verwenden können, um eine etwas komplexere benutzerdefinierte Validierung zu erstellen.

Zunächst das HTML. Auch hier können Sie es gern zusammen mit uns erstellen:

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address *:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

Dieses Formular verwendet das Attribut [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate), um die automatische Validierung des Browsers auszuschalten. Das Setzen des Attributs `novalidate` für das Formular verhindert, dass das Formular seine eigenen Fehlermeldungsblasen anzeigt, und ermöglicht es uns stattdessen, die benutzerdefinierten Fehlermeldungen auf eine von uns gewählte Weise im DOM anzuzeigen.
Dies deaktiviert jedoch weder die Unterstützung für die Constraint Validation API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}} usw.
Das bedeutet, dass Sie die Gültigkeit selbst weiterhin überprüfen und das Formular entsprechend gestalten können, obwohl der Browser die Gültigkeit des Formulars vor dem Senden seiner Daten nicht automatisch prüft.

Unsere zu validierende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), das `required` ist und ein `minlength` von 8 Zeichen hat. Prüfen wir dies mit unserem eigenen Code und zeigen wir für jeden Fall eine benutzerdefinierte Fehlermeldung an.

Wir möchten die Fehlermeldungen innerhalb eines `<span>`-Elements anzeigen.
Das Attribut [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) ist für dieses `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen präsentiert wird, einschließlich des Vorlesens für Benutzer von Screenreadern.

Kommen wir nun zu grundlegendem CSS, um das Erscheinungsbild des Formulars etwas zu verbessern und visuelle Rückmeldung zu geben, wenn die Eingabedaten ungültig sind:

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

Sehen wir uns nun das JavaScript an, das die benutzerdefinierte Fehlervalidierung implementiert.
Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier erhalten wir das Formular selbst und das E-Mail-Eingabefeld sowie das span-Element, in das wir die Fehlermeldung einfügen werden.

Mithilfe von Ereignis-Handlern prüfen wir jedes Mal, wenn der Benutzer etwas eingibt, ob die Formularfelder gültig sind. Bei einem Fehler zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir alle Fehlermeldungen.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, prüfen wir, ob sie gültige Daten enthält. Wenn dies der Fall ist, entfernen wir angezeigte Fehlermeldungen. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular zu übermitteln, prüfen wir erneut, ob die Daten gültig sind. Wenn dies der Fall ist, lassen wir die Übermittlung des Formulars zu. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern die Formularübermittlung mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um zu bestimmen, welcher Fehler vorliegt, und zeigt dann eine entsprechende Fehlermeldung an.

Hier ist das Live-Ergebnis (drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___detailed-custom-validation
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address *:</span>
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
  border: 1px solid #333333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* This is our style for the invalid fields */
input:invalid {
  border-color: #990000;
  background-color: #ffdddd;
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
  background-color: #990000;
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

email.addEventListener("input", (event) => {
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

form.addEventListener("submit", (event) => {
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

Die Constraint Validation API stellt Ihnen ein leistungsstarkes Werkzeug für die Formularvalidierung bereit und ermöglicht Ihnen eine enorme Kontrolle über die Benutzeroberfläche, die weit über die Möglichkeiten von HTML und CSS allein hinausgeht.

### Formulare ohne integrierte API validieren

In einigen Fällen, etwa bei [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können oder möchten Sie die Constraint Validation API nicht verwenden. Sie können JavaScript weiterhin zur Validierung Ihres Formulars verwenden, müssen dies aber selbst implementieren.

Stellen Sie sich zur Validierung eines Formulars einige Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen festlegen, wie Ihre Daten validiert werden sollen: Zeichenkettenoperationen, Typkonvertierung, reguläre Ausdrücke usw. Dies liegt bei Ihnen.
- Was sollte ich tun, wenn das Formular nicht validiert werden kann?
  - : Dies ist eindeutig eine Frage der Benutzeroberfläche. Sie müssen entscheiden, wie sich das Formular verhalten soll. Übermittelt das Formular die Daten dennoch?
    Sollten Sie die fehlerhaften Felder hervorheben?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?
  - : Um die Frustration des Benutzers zu verringern, ist es sehr wichtig, möglichst viele hilfreiche Informationen bereitzustellen, die ihn bei der Korrektur seiner Eingaben anleiten.
    Sie sollten im Voraus Hinweise dazu geben, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie sich näher mit den Anforderungen an die Benutzeroberfläche für Formularvalidierung beschäftigen möchten, sollten Sie diese nützlichen Artikel lesen:
    - [Benutzern helfen, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/form-fields)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [So melden Sie Fehler in Formularen: 10 Gestaltungsrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel ohne die Constraint Validation API

Zur Veranschaulichung folgt eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

Das HTML ist nahezu gleich; wir haben lediglich die HTML-Validierungsfunktionen entfernt.

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

Auch das CSS muss sich nicht stark ändern; wir haben lediglich die CSS-Pseudoklasse {{cssxref(":invalid")}} in eine echte Klasse umgewandelt und die Verwendung des Attributselektors vermieden.

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

Die großen Änderungen befinden sich im JavaScript-Code, der wesentlich mehr Arbeit übernehmen muss.

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

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Wie Sie sehen können, ist es nicht besonders schwer, selbst ein Validierungssystem zu erstellen. Der schwierige Teil besteht darin, es allgemein genug zu gestalten, damit es sowohl plattformübergreifend als auch für jedes von Ihnen erstellte Formular verwendet werden kann. Es gibt viele Bibliotheken zur Durchführung von Formularvalidierung, beispielsweise [Validate.js](https://rickharrison.github.io/validate.js/).

## Zusammenfassung

Clientseitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie Stile und Fehlermeldungen anpassen möchten, aber sie erfordert _immer_, dass Sie sorgfältig an den Benutzer denken.
Denken Sie immer daran, Ihren Benutzern beim Korrigieren der von ihnen bereitgestellten Daten zu helfen. Stellen Sie dazu sicher, dass Sie:

- explizite Fehlermeldungen anzeigen.
- beim Eingabeformat tolerant sind.
- genau darauf hinweisen, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie geprüft haben, dass das Formular korrekt ausgefüllt ist, kann es übermittelt werden.
Als Nächstes behandeln wir das [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
