---
title: Client-seitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularsteuerelemente ausgefüllt und im korrekten Format sind, bevor die vom Benutzer eingegebenen Formulardaten an den Server gesendet werden. Diese **Client-seitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten den Anforderungen der verschiedenen Formularsteuerelemente entsprechen.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der Client-seitigen Formularvalidierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computerkenntnisse, ein vernünftiges Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Verständnis dafür zu erlangen, was Client-seitige Formularvalidierung ist, warum sie wichtig ist,
        und wie man verschiedene Techniken anwendet, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Client-seitige Validierung ist eine erste Überprüfung und ein wichtiges Merkmal einer guten Benutzererfahrung; durch das Auffangen ungültiger Daten auf der Client-Seite kann der Benutzer sie sofort korrigieren.
Wenn die Daten zum Server gelangen und dort abgelehnt werden, entsteht durch den Rundreiseweg zum Server und zurück zum Client eine spürbare Verzögerung, um dem Benutzer mitzuteilen, dass er seine Daten korrigieren soll.

Jedoch _sollte_ die Client-seitige Validierung nicht als eine umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer auch Server-seitige Validierungen, einschließlich Sicherheitsprüfungen, für alle übermittelten Formulardaten durchführen, denn die Client-seitige Validierung kann zu leicht umgangen werden, sodass böswillige Benutzer leicht fehlerhafte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Webseitensicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der Server-seitigen Validierung liegt zwar außerhalb des Umfangs dieses Moduls, aber Sie sollten es im Hinterkopf behalten.

## Was ist Formularvalidierung?

Gehen Sie auf eine beliebte Website mit einem Registrierungsformular, und Sie werden feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Mitteilungen wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein bestimmtes Datenformat ist erforderlich, damit es als gültig betrachtet wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die Daten, die Sie eingegeben haben, sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist erforderlich für Ihre Daten).

Dies wird als **Formularvalidierung** bezeichnet.
Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der von der Anwendung festgelegten Einschränkungen liegen. Die im Browser durchgeführte Validierung wird als **Client-seitige** Validierung bezeichnet, während die auf dem Server durchgeführte Validierung als **Server-seitige** Validierung bezeichnet wird.
In diesem Kapitel konzentrieren wir uns auf die Client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung das Senden der Daten an den Server und (normalerweise) das Speichern in einer Datenbank; wenn die Informationen nicht korrekt formatiert sind, wird dem Benutzer eine Fehlermeldung angezeigt, die erklärt, was korrigiert werden muss, und ihm erlaubt, es erneut zu versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also auf der Validierung unserer Formulare?
Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert sind, fehlerhaft sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen.** Das Erzwingen der Eingabe sicherer Passwörter macht es einfacher, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Webseitensicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals den Daten, die von einem Client an Ihren Server gesendet werden. Auch wenn Ihr Formular korrekt validiert und fehleingaben auf der Client-Seite verhindert, kann ein böswilliger Benutzer dennoch die Netzwerkanforderung ändern.

## Verschiedene Arten der Client-seitigen Validierung

Auf dem Web gibt es zwei verschiedene Arten der Client-seitigen Validierung, auf die Sie stoßen werden:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können definieren, welche Formularsteuerungen erforderlich sind und in welchem Format die vom Benutzer eingegebenen Daten sein müssen, um als gültig zu gelten.
- **JavaScript-Formularvalidierung**
  JavaScript wird in der Regel verwendet, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Die Client-seitige Validierung kann mit wenig bis gar keinem JavaScript erreicht werden. Die HTML-Validierung ist schneller als JavaScript, ist jedoch weniger anpassbar als JavaScript-Validierung. Es wird im Allgemeinen empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu beginnen und dann bei Bedarf das Benutzererlebnis mit JavaScript zu verbessern.

## Verwendung der integrierten Formularvalidierung

Eines der bedeutendsten Merkmale von [Formularsteuerelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne auf JavaScript angewiesen zu sein.
Dies wird durch die Verwendung von Validierungsattributen an Formularelementen erreicht.
Wir haben viele dieser Attribute bereits früher im Kurs gesehen, aber zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular übermittelt werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Legt die minimale und maximale Länge von Textdaten (Strings) fest.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max), und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die minimalen und maximalen Werte numerischer Eingabetypen an und die Inkremente oder Schritte für die Werte, beginnend mit dem Minimum.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezieller voreingestellter Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in ein Formularfeld eingegebenen Daten alle durch die auf dieses Feld angewendeten Attribute festgelegten Regeln erfüllen, gelten sie als gültig. Wenn nicht, gelten sie als ungültig.

Wenn ein Element gültig ist, gilt Folgendes:

- Das Element stimmt mit der {{cssxref(":valid")}} CSS-Pseudoklasse überein, was es Ihnen ermöglicht, einen bestimmten Stil auf gültige Elemente anzuwenden. Das Steuerelement stimmt auch mit {{cssxref(":user-valid")}} überein, wenn der Benutzer mit dem Steuerelement interagiert hat, und kann je nach Eingabetyp und -attributen mit anderen UI-Pseudoklassen wie {{cssxref(":in-range")}} übereinstimmen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular übermitteln, sofern nichts anderes ihn daran hindert (z.B. JavaScript).

Wenn ein Element ungültig ist, gilt Folgendes:

- Das Element stimmt mit der {{cssxref(":invalid")}} CSS-Pseudoklasse überein. Wenn der Benutzer mit dem Steuerelement interagiert hat, stimmt es auch mit der {{cssxref(":user-invalid")}} CSS-Pseudoklasse überein. Weitere UI-Pseudoklassen können ebenfalls passen, wie z.B. {{cssxref(":out-of-range")}}, je nach Fehler. Diese ermöglichen es Ihnen, einen bestimmten Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung wird je nach Fehlertyp unterschiedlich sein. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für integrierte Formularvalidierung

In diesem Abschnitt werden wir einige der oben besprochenen Attribute testen.

### Grundlegende Startdatei

Lassen Sie uns mit einem grundlegenden Beispiel beginnen: eine Eingabe, die Ihnen die Wahl zwischen einer Banane und einer Kirsche ermöglicht.
Dieses Beispiel beinhaltet ein Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Übermittlungs-{{htmlelement("button")}}.

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

Um zu beginnen, erstellen Sie eine Kopie der vorherigen HTML-Auflistung in einer neuen `index.html`-Datei. Speichern Sie sie in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das Attribut required

Ein häufiges HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut.
Fügen Sie dieses Attribut einer Eingabe hinzu, um ein Element obligatorisch zu machen.
Wenn dieses Attribut gesetzt ist, stimmt das Element mit der {{cssxref(':required')}} UI-Pseudoklasse überein und das Formular wird bei leerer Eingabe nicht gesendet, sondern zeigt bei der Übermittlung eine Fehlermeldung an.
Solange die Eingabe leer ist, wird sie auch als ungültig betrachtet und passt zur {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein Optionskästchen in einer Gruppe mit demselben Namen das `required`-Attribut hat, muss eines der Kästchen in der Gruppe aktiviert sein, damit die Gruppe gültig ist; das aktivierte Kästchen muss nicht dasjenige mit dem gesetzten Attribut sein.

> [!NOTE]
> Verlangen Sie nur die Eingabe von Daten, die Sie benötigen: Zum Beispiel, ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu kennen?

Fügen Sie Ihrer Eingabe ein `required`-Attribut hinzu, wie unten gezeigt.

```html live-sample___the-required-attribute
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(obligatorisch)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darüber zu informieren, dass das {{htmlelement("input")}} erforderlich ist. Dem Benutzer anzugeben, wann Formularfelder erforderlich sind, ist nicht nur eine gute Benutzererfahrung, sondern auch nach den WCAG [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)-Richtlinien erforderlich.

Wir fügen CSS-Stile bei, die basierend darauf angewendet werden, ob das Element erforderlich, gültig oder ungültig ist:

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

Dieses CSS sorgt dafür, dass die Eingabe einen roten gestrichelten Rand hat, wenn sie ungültig ist, und einen dezenteren schwarzen Vollrand, wenn sie gültig ist.
Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich und ungültig ist. Probieren Sie das neue Verhalten im Beispiel unten aus:

{{EmbedLiveSample("the-required-attribute", "100%", 80, , , , , "allow-forms")}}

Versuchen Sie, das Formular ohne einen Wert zu senden. Beachten Sie, wie sich die ungültige Eingabe im Fokus befindet und eine Standard-Fehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint. Das Formular wird ebenfalls daran gehindert, gesendet zu werden (obwohl selbst wenn ein Wert eingegeben wird, verhindern wir die Übermittlung des Formulars, um einen Fehler aufgrund der Art und Weise, wie MDN eingebettete Formulare handhabt, zu vermeiden).

### Validierung gegen einen regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das einen [Regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein Regulärer Ausdruck (Regexp) ist ein Muster, das genutzt werden kann, um Zeichenkombinationen in Textstrings zu finden, sodass Regexp ideal für die Formularvalidierung ist und eine Vielzahl anderer Einsatzzwecke in JavaScript hat.

Regexps sind ziemlich komplex und wir beabsichtigen nicht, Ihnen sie in diesem Artikel ausführlich beizubringen.
Im Folgenden sind einige Beispiele aufgeführt, um Ihnen eine grundlegende Vorstellung davon zu geben, wie sie funktionieren.

- `a` — Passt auf ein Zeichen, das `a` ist (nicht `b`, nicht `aa`, usw.).
- `abc` — Passt auf `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Passt auf `a`, gefolgt von einem optionalen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Passt auf `a`, gefolgt von beliebig vielen `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc`, usw.).
- `a|b` — Passt auf eines von `a` oder `b`.
- `abc|xyz` — Passt genau auf `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y`, usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)-Dokumentation.

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut hinzuzufügen, wie folgt:

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

Dies gibt uns folgendes Update — probieren Sie es aus:

{{EmbedLiveSample("validate-regular-expression", "100%", 80, , , , , "allow-forms")}}

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Strings "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind case-sensitiv, aber wir haben es so gemacht, dass es sowohl capitalisierte als auch kleingeschriebene Versionen unterstützt, indem wir ein zusätzliches "Aa"-Muster innerhalb von eckigen Klammern verschachtelt haben.

An diesem Punkt versuchen Sie, den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attributs in einige der früher gesehenen Beispiele zu ändern und schauen Sie, wie das die Werte beeinflusst, die Sie eingeben können, um den Eingabewert gültig zu machen.
Versuchen Sie, einige Ihrer eigenen zu schreiben, und sehen Sie, wie es läuft.
Versuchen Sie, sie fruchtbezogen zu machen, wann immer möglich, damit Ihre Beispiele Sinn ergeben!

Wenn ein nicht-leerer Wert des {{HTMLElement("input")}} nicht dem regulären Ausdrucksmuster entspricht, wird das `input` mit der {{cssxref(':invalid')}} Pseudo-Klasse übereinstimmen. Wenn es leer ist und das Element nicht erforderlich ist, wird es nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, um gegen einen regulären Ausdruck validiert zu werden. Beispielsweise validiert der `email`-Typ die Eingaben gegen einen gut geformten E-Mail-Adresse-Muster oder ein Muster, das einer durch Kommas getrennten Liste von E-Mail-Adressen entspricht, wenn er das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut nicht.

### Begrenzung der Länge Ihrer Eingaben

Sie können die Zeichenlänge aller durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder durch das [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)- und das [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Attribut beschränken.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)-Wert hat oder länger als der [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Wert ist.

Browser erlauben es Benutzern oft nicht, einen längeren Wert als erwartet in Textfelder einzugeben. Eine bessere Benutzererfahrung als nur `maxlength` zu verwenden ist es, auch Zeichenanzahl-Feedback auf eine zugängliche Weise bereitzustellen und dem Benutzer zu erlauben, seinen Inhalt zu kürzen.
Ein Beispiel dafür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen unter Verwendung von `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies bereitzustellen.

> [!NOTE]
> Längenbeschränkungen werden nie gemeldet, wenn der Wert programmatisch gesetzt wird. Sie werden nur für Benutzereingaben gemeldet.

### Begrenzung der Werte Ihrer Eingaben

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und der verschiedenen Datumseingabetypen, können die [`min`](/de/docs/Web/HTML/Reference/Attributes/min)- und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribute verwendet werden, um einen Bereich gültiger Werte bereitzustellen.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, wird es ungültig sein.

Lassen Sie uns ein weiteres Beispiel betrachten.
Erstellen Sie eine neue Kopie der [grundlegenden Startdatei](#grundlegende_startdatei) (speichern Sie sie im selben Verzeichnis unter `index2.html`).

Löschen Sie jetzt den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch Folgendes:

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

- Hier werden Sie sehen, dass wir dem `text`-Feld ein `minlength` und `maxlength` von sechs gegeben haben, das ist die gleiche Länge wie Banane und Kirsche.
- Wir haben dem `number`-Feld auch ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können nicht die Erhöhungs-/Verringerungspfeile verwenden, um den Wert außerhalb dieses Bereichs zu bewegen.
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
  Die Zahl ist nicht erforderlich, sodass das Entfernen des Wertes zu einem gültigen Wert führt.

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

Hier ist das Beispiel live in Aktion:

{{EmbedLiveSample("constraining-values", "100%", 100)}}

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

Numerische Eingabetypen, wie `number`, `range` und `date`, können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut verwenden. Dieses Attribut gibt an, welches Inkrement der Wert erhöht oder verringert wird, wenn die Steuerelemente der Eingabe verwendet werden (wie die Auf- und Ab-Nummer-Tasten oder das Verschieben des Range-Daumen). Das `step`-Attribut wird in unserem Beispiel weggelassen, sodass der Wert auf `1` standardmäßig ist. Dies bedeutet, dass Gleitkommazahlen, wie 3.2, ebenfalls als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, um die Verwendung von HTML-integrierten Validierungsfunktionen zu zeigen.
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

Und jetzt ein wenig CSS, um das HTML zu formatieren:

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

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) für eine vollständige Liste von Attributen, die verwendet werden können, um Eingabewerte einzuschränken und die Eingabetypen, die sie unterstützen.

## Formulare mit JavaScript validieren

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, wird JavaScript benötigt.
In diesem Abschnitt werden wir uns die verschiedenen Methoden ansehen, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf folgenden DOM-Schnittstellen von Formularelementen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element)

Die Constraint Validation API macht folgende Eigenschaften auf den oben genannten Elementen verfügbar:

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder der Wert des Elements seinen Einschränkungen entspricht (also gültig ist), wird ein leerer String zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitszustand des Elements beschreiben. Sie können vollständige Details zu allen verfügbaren Eigenschaften im [`ValidityState`](/de/docs/Web/API/ValidityState) Referenzdokument finden; im Folgenden sind einige der häufiger verwendeten aufgeführt:
  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er es tut. Wenn true, stimmt das Element mit der {{cssxref(":invalid")}} CSS-Pseudoklasse überein.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger als die maximale Länge ist, die durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut festgelegt ist, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn true, stimmt das Element mit der {{cssxref(":invalid")}} CSS-Pseudoklasse überein.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer als die minimale Länge ist, die durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attribut festgelegt ist, oder `false`, wenn er größer oder gleich der minimalen Länge ist. Wenn true, stimmt das Element mit der {{cssxref(":invalid")}} CSS-Pseudoklasse überein.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer als das Maximum ist, das durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribut festgelegt ist, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn true, stimmt das Element mit den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen überein.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner als das Minimum ist, das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) Attribut festgelegt ist, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn true, stimmt das Element mit den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen überein.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht der erforderlichen Syntax entspricht (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, stimmt das Element mit der {{cssxref(":invalid")}} CSS-Pseudoklasse überein.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn true, stimmt das Element mit der {{cssxref(":valid")}} CSS-Pseudoklasse überein; andernfalls mit der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut hat, aber keinen Wert, oder `false` andernfalls. Wenn true, stimmt das Element mit der {{cssxref(":invalid")}} CSS-Pseudoklasse überein.

- `willValidate`: Gibt `true` zurück, wenn das Element beim Senden des Formulars validiert wird; `false` andernfalls.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form)-Element zur Verfügung.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; `false` andernfalls. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder unter Verwendung von Ereignissen. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit`-Ereignishandler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig angesehen, und die angegebene Fehlermeldung wird angezeigt. Dies ermöglicht es Ihnen, mit JavaScript-Code einen Validierungsfehler festzulegen, der nicht von den standardmäßigen HTML-Validierungseinschränkungen abgedeckt wird. Die Nachricht wird dem Benutzer beim Melden des Problems angezeigt.

#### Implementieren einer benutzerdefinierten Fehlermeldung

Wie Sie in den HTML-Validierungsbeispiele früher gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular zu übermitteln, eine Fehlermeldung an. Wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen standardmäßigen Weg, sie mit CSS zu ändern.
- Sie sind abhängig von der Browser-Locale, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Das Anpassen dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns durch ein Beispiel arbeiten, wie Sie dies tun können.

Wir beginnen mit etwas HTML. Sie können dies gerne in einer anderen Kopie der [grundlegenden Startdatei](#grundlegende_startdatei) platzieren, wenn Sie möchten:

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

Hier speichern wir eine Referenz zur E-Mail-Eingabe, dann fügen wir einen Ereignishandler hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster für eine gut geformte E-Mail-Adresse entspricht. Wenn dies der Fall ist, rufen wir die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) mit einer benutzerdefinierten Nachricht auf. Dadurch wird die Eingabe ungültig, sodass bei dem Versuch, das Formular zu senden, die Übermittlung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einem leeren String auf. Dadurch wird die Eingabe gültig, sodass das Formular abgeschickt wird. Während der Validierung, wenn irgendein Formularsteuerelement einen `customError` hat, der nicht der leere String ist, wird die Formularübertragung blockiert.

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

#### Erweiterung der integrierten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können.
Es ist auch möglich, die gesamte eingebaute Formularvalidierung zu nutzen und dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die eingebaute [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) Validierung erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren.
Wir beginnen mit dem HTML-{{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt.
Im Falle neuer Eingaben setzt der Code zuerst die benutzerdefinierte Gültigkeitsnachricht erneut, indem er `setCustomValidity("")` aufruft.
Dann verwendet er `email.validity.valid`, um zu prüfen, ob die eingegebene Adresse ungültig ist und wenn dies der Fall ist, kehrt er vom Ereignishandler zurück.
Dadurch wird sichergestellt, dass alle normalen eingebaute Prüfungen bei der Validierung ausgeführt werden, solange die eingegebene Adresse keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Einschränkung hinzu, indem er `setCustomValidity()` mit einem Fehlermeldung aufruft, wenn die Adresse nicht mit `@example.com` endet.

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

Versuchen Sie, eine ungültige E-Mail-Adresse einzureichen, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet.

{{EmbedLiveSample("extending built-in form validation", "", 200, , , , , "allow-forms")}}

#### Ein detaillierteres Beispiel

Nachdem wir nun ein wirklich einfaches Beispiel gesehen haben, wollen wir sehen, wie wir diese API nutzen können, um eine etwas komplexere benutzerdefinierte Validierung zu erstellen.

Zuerst das HTML. Bauen Sie dies ruhig mit uns zusammen:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut, um die automatische Validierung durch den Browser zu deaktivieren. Das Setzen des `novalidate`-Attributs auf dem Formular verhindert, dass das Formular seine eigenen Fehlermeldungsblasen anzeigt, und ermöglicht es uns, stattdessen die benutzerdefinierten Fehlermeldungen im DOM auf eine von uns gewählte Weise anzuzeigen.
Dies deaktiviert jedoch nicht die Unterstützung für die Constraint Validation API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}}, etc.
Das bedeutet, dass selbst wenn der Browser die Gültigkeit des Formulars nicht automatisch überprüft, bevor es seine Daten sendet, Sie dies dennoch selbst tun können und das Formular entsprechend gestalten können.

Unsere zu validierende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jedes anzeigen.

Wir beabsichtigen, die Fehlermeldungen in einem `<span>`-Element anzuzeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Attribut ist auf diesem `<span>`-Element gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung für alle angezeigt wird, einschließlich einer, die für Screenreader-Benutzer vorgelesen wird.

Nun zu ein wenig grundlegenderem CSS, um das Aussehen des Formulars leicht zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

Schauen wir uns nun das JavaScript an, das die benutzerdefinierte Fehlerprüfung implementiert.
Es gibt viele Möglichkeiten, ein DOM-Node auszuwählen; hier wird das Formular selbst und das E-Mail-Eingabefeld sowie das Span-Element, in das wir die Fehlermeldung platzieren werden, abgerufen.

Mit Ereignishandlern prüfen wir bei jeder Eingabe, ob die Formularfelder gültig sind. Gibt es einen Fehler, zeigen wir ihn an. Gibt es keinen Fehler, entfernen wir alle angezeigten Fehlermeldungen.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob er gültige Daten enthält. Wenn es dazu gekommen ist, entfernen wir jede angezeigte Fehlermeldung. Wenn die Daten ungültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular zu senden, überprüfen wir wieder, ob die Daten gültig sind. Wenn ja, lassen wir das Formular senden. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern Sie das Senden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die `showError()`-Funktion verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um zu bestimmen, was der Fehler ist, und zeigt dann eine Fehlermeldung entsprechend an.

Hier ist das Ergebnis live (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Die Constraint Validation API gibt Ihnen ein leistungsstarkes Werkzeug zum Umgang mit der Formularvalidierung, wodurch Sie die Benutzeroberfläche umfassend kontrollieren können, was Sie mit HTML und CSS allein nicht können.

### Validierung von Formularen ohne eingebautes API

In einigen Fällen, wie bei [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können oder möchten Sie die Constraint Validation API nicht verwenden. Sie können immer noch JavaScript verwenden, um Ihr Formular zu validieren, aber Sie müssen es selbst schreiben.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen entscheiden, wie Sie Ihre Daten validieren: Zeichenkettenoperationen, Typkonvertierungen, reguläre Ausdrücke usw. Es liegt an Ihnen.
- Was soll ich tun, wenn das Formular nicht validiert wird?
  - : Dies ist eindeutig eine UI-Angelegenheit. Sie müssen entscheiden, wie sich das Formular Verhalten soll. Wird das Formular die Daten trotzdem senden?
    Sollten Sie die Felder hervorheben, die einen Fehler aufweisen?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?
  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu unterstützen.
    Sie sollten Vorschläge vorab anbieten, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie sich in die UI-Anforderungen für die Formularvalidierung vertiefen möchten, finden Sie hier einige nützliche Artikel, die Sie lesen sollten:
    - [Helfen Sie Benutzern, die richtigen Daten in Formularen einzugeben](https://web.dev/learn/forms/form-fields)
    - [Validierung der Eingabe](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, folgt hier eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

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

Ebenso braucht das CSS nicht sehr viel geändert zu werden; wir haben nur die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse umgewandelt und die Attributselektion vermieden.

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

Die großen Änderungen stecken im JavaScript-Code, das viel mehr Arbeit leisten muss.

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

Wie Sie sehen, ist es nicht so schwer, ein Validierungssystem selbst zu erstellen. Der schwierige Teil ist es, es ausreichend generisch zu machen, um es sowohl plattformübergreifend als auch in jedem Formular, das Sie erstellen könnten, zu verwenden. Es gibt viele Bibliotheken zur Verfügung, um die Formularvalidierung durchzuführen, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Zusammenfassung

Die Client-seitige Formularvalidierung benötigt manchmal JavaScript, wenn Sie Styling und Fehlermeldungen anpassen möchten, aber es _erfordert immer_, dass Sie sorgfältig über den Benutzer nachdenken.
Erinnern Sie sich stets daran, Ihren Nutzern bei der Korrektur der eingegebenen Daten zu helfen. Achten Sie daher darauf:

- Explizite Fehlermeldungen anzuzeigen.
- Nachsichtig gegenüber dem Eingabeformat zu sein.
- Genau darauf hinzuweisen, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie geprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular übermittelt werden.
Wir behandeln als nächstes das [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
