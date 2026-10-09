---
title: Clientseitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 54e121d3b7683b40c309cc86bed164bc7976fb62
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Bevor von Benutzern eingegebene Formulardaten an den Server gesendet werden, muss sichergestellt sein, dass alle erforderlichen Formularfelder ausgefüllt sind und die Daten das richtige Format haben. Diese **clientseitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten den Anforderungen der jeweiligen Formularfelder entsprechen.

Dieser Artikel führt Sie durch die grundlegenden Konzepte und Beispiele der clientseitigen Formularvalidierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Computerkenntnisse und ein solides Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was clientseitige Formularvalidierung ist, warum sie wichtig ist und wie sich verschiedene Techniken zu ihrer Umsetzung einsetzen lassen.
      </td>
    </tr>
  </tbody>
</table>

Die clientseitige Validierung ist eine erste Prüfung und ein wichtiger Bestandteil einer guten Benutzererfahrung: Werden ungültige Daten bereits auf dem Client erkannt, können Benutzer sie sofort korrigieren. Werden die Daten erst auf dem Server zurückgewiesen, entsteht durch die Übertragung zum Server und zurück zum Client eine spürbare Verzögerung, bevor Benutzer zur Korrektur aufgefordert werden.

Clientseitige Validierung sollte jedoch _nicht_ als umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten über Formulare übermittelte Daten **auch serverseitig** validieren und dabei Sicherheitsprüfungen durchführen. Clientseitige Validierung lässt sich zu leicht umgehen, sodass böswillige Benutzer weiterhin problemlos schädliche Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_. Die Implementierung serverseitiger Validierung geht über den Rahmen dieses Moduls hinaus, Sie sollten sie aber im Hinterkopf behalten.

## Was ist Formularvalidierung?

Besuchen Sie eine beliebige Website mit einem Registrierungsformular. Sie werden feststellen, dass Sie eine Rückmeldung erhalten, wenn Sie Ihre Daten nicht im erwarteten Format eingeben. Beispielsweise können folgende Meldungen erscheinen:

- „Dieses Feld ist erforderlich“ (Sie dürfen das Feld nicht leer lassen).
- „Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein“ (Damit die Eingabe gültig ist, muss sie einem bestimmten Format entsprechen).
- „Bitte geben Sie eine gültige E-Mail-Adresse ein“ (Die eingegebenen Daten haben nicht das richtige Format).
- „Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Sonderzeichen sowie eine Zahl enthalten.“ (Ihre Daten müssen ein sehr genau festgelegtes Format haben).

Das wird **Formularvalidierung** genannt. Wenn Sie Daten eingeben, prüfen der Browser (und der Webserver), ob diese das richtige Format haben und die von der Anwendung festgelegten Einschränkungen erfüllen. Die Validierung im Browser heißt **clientseitige** Validierung, die Validierung auf dem Server **serverseitige** Validierung. In diesem Kapitel konzentrieren wir uns auf die clientseitige Validierung.

Sind die Angaben korrekt formatiert, lässt die Anwendung zu, dass die Daten an den Server gesendet und (in der Regel) in einer Datenbank gespeichert werden. Andernfalls zeigt sie eine Fehlermeldung an, die erklärt, was korrigiert werden muss, und ermöglicht einen erneuten Versuch.

Das Ausfüllen von Webformularen soll möglichst einfach sein. Warum bestehen wir also darauf, Formulare zu validieren? Dafür gibt es drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn Benutzerdaten im falschen Format gespeichert werden, fehlerhaft sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen.** Wenn Benutzer sichere Passwörter eingeben müssen, lassen sich ihre Kontoinformationen leichter schützen.
- **Wir möchten uns selbst schützen.** Böswillige Benutzer können ungeschützte Formulare auf vielfältige Weise missbrauchen, um einer Anwendung zu schaden. Weitere Informationen finden Sie unter [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die vom Client an Ihren Server gesendet werden. Selbst wenn Ihr Formular clientseitig korrekt validiert und fehlerhafte Eingaben verhindert, können böswillige Benutzer die Netzwerkanfrage verändern.

## Verschiedene Arten der clientseitigen Validierung

Im Web begegnen Ihnen zwei Arten der clientseitigen Validierung:

- **HTML-Formularvalidierung**
  Mit HTML-Attributen können Sie festlegen, welche Formularfelder erforderlich sind und welches Format die eingegebenen Daten haben müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird üblicherweise eingesetzt, um die HTML-Formularvalidierung zu erweitern oder anzupassen.

Clientseitige Validierung lässt sich mit wenig oder ganz ohne JavaScript umsetzen. HTML-Validierung ist schneller als JavaScript-Validierung, bietet aber weniger Anpassungsmöglichkeiten. Grundsätzlich empfiehlt es sich, Formulare zunächst mit den leistungsfähigen HTML-Funktionen aufzubauen und die Benutzererfahrung bei Bedarf mit JavaScript zu verbessern.

## Integrierte Formularvalidierung verwenden

Eine der wichtigsten Eigenschaften von [Formularfeldern](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Möglichkeit, die meisten Benutzereingaben ohne JavaScript zu validieren. Dazu werden Validierungsattribute an Formularelementen verwendet. Viele davon sind Ihnen im Verlauf des Kurses bereits begegnet. Hier eine Zusammenfassung:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Legt fest, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular gesendet werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Legen die Mindest- und Höchstlänge von Textdaten (Zeichenfolgen) fest.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Legen die Mindest- und Höchstwerte numerischer Eingabetypen sowie die Schrittweite der Werte ausgehend vom Mindestwert fest.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Legt fest, ob die Daten beispielsweise eine Zahl, eine E-Mail-Adresse oder einem anderen vordefinierten Typ entsprechen müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Legt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) fest, dessen Muster die eingegebenen Daten erfüllen müssen.

Erfüllen die in ein Formularfeld eingegebenen Daten alle Regeln, die durch die Attribute des Feldes festgelegt sind, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, trifft Folgendes zu:

- Das Element entspricht der CSS-Pseudoklasse {{cssxref(":valid")}}. Dadurch können Sie gültigen Elementen einen bestimmten Stil zuweisen. Wenn der Benutzer mit dem Feld interagiert hat, entspricht es außerdem {{cssxref(":user-valid")}}. Je nach Eingabetyp und Attributen kann es weiteren UI-Pseudoklassen wie {{cssxref(":in-range")}} entsprechen.
- Versucht der Benutzer, die Daten zu senden, übermittelt der Browser das Formular, sofern dies nicht durch etwas anderes verhindert wird (zum Beispiel durch JavaScript).

Wenn ein Element ungültig ist, trifft Folgendes zu:

- Das Element entspricht der CSS-Pseudoklasse {{cssxref(":invalid")}}. Wenn der Benutzer mit dem Feld interagiert hat, entspricht es außerdem der CSS-Pseudoklasse {{cssxref(":user-invalid")}}. Je nach Fehler können weitere UI-Pseudoklassen wie {{cssxref(":out-of-range")}} zutreffen. So können Sie ungültigen Elementen einen bestimmten Stil zuweisen.
- Versucht der Benutzer, die Daten zu senden, verhindert der Browser das Absenden des Formulars und zeigt eine Fehlermeldung an. Die Meldung hängt von der Art des Fehlers ab. Die [Constraint Validation API](#die_constraint_validation_api) wird weiter unten beschrieben.

## Beispiele für die integrierte Formularvalidierung

In diesem Abschnitt probieren wir einige der zuvor besprochenen Attribute aus.

### Einfache Ausgangsdatei

Beginnen wir mit einem einfachen Beispiel: einem Eingabefeld, in dem Sie auswählen können, ob Sie eine Banane oder eine Kirsche bevorzugen. Das Beispiel enthält ein Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem {{htmlelement("button")}} zum Absenden.

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

Erstellen Sie zunächst eine Kopie des obigen HTML-Codes in einer neuen Datei namens `index.html`. Speichern Sie sie in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das Attribut `required`

Eine häufig verwendete HTML-Validierungsfunktion ist das Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required). Fügen Sie es einem Eingabefeld hinzu, um dessen Ausfüllen verpflichtend zu machen. Ist dieses Attribut gesetzt, entspricht das Element der UI-Pseudoklasse {{cssxref(':required')}}. Bleibt das Feld leer, wird das Formular beim Versuch, es abzusenden, nicht übermittelt und eine Fehlermeldung angezeigt. Solange das Feld leer ist, gilt es außerdem als ungültig und entspricht der UI-Pseudoklasse {{cssxref(':invalid')}}.

Hat einer der Radio-Buttons einer Gruppe mit gleichem Namen das Attribut `required`, muss einer der Radio-Buttons dieser Gruppe ausgewählt sein, damit die Gruppe gültig ist. Dabei muss nicht unbedingt der Radio-Button mit dem Attribut ausgewählt sein.

> [!NOTE]
> Verlangen Sie von Benutzern nur Angaben, die Sie tatsächlich benötigen: Ist es beispielsweise wirklich notwendig, das Geschlecht oder die Anrede einer Person zu kennen?

Fügen Sie Ihrem Eingabefeld wie unten gezeigt ein `required`-Attribut hinzu.

```html live-sample___the-required-attribute
<form>
  <label for="choose">Would you prefer a banana or cherry? *</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

> [!NOTE]
> Üblicherweise wird nach der Beschriftung erforderlicher Formularfelder ein Sternchen (oder eine andere Kennzeichnung) gesetzt, damit sie für sehende Benutzer erkennbar sind. Benutzer darauf hinzuweisen, welche Formularfelder erforderlich sind, verbessert nicht nur die Benutzererfahrung, sondern ist auch nach den WCAG-Richtlinien zur [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) erforderlich.

Wir fügen CSS-Stile hinzu, die abhängig davon angewendet werden, ob das Element erforderlich, gültig oder ungültig ist:

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

```js hidden live-sample___simple-start-file live-sample___the-required-attribute live-sample___validate-regular-expression live-sample___constraining-values live-sample___full-example live-sample___extending-built-in-form-validation
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

Dieses CSS gibt dem Eingabefeld bei ungültigen Daten einen roten gestrichelten Rahmen und bei gültigen Daten einen dezenteren durchgezogenen schwarzen Rahmen. Außerdem haben wir für den Fall, dass das Feld _sowohl_ erforderlich _als auch_ ungültig ist, einen Hintergrundverlauf hinzugefügt. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("the-required-attribute", "100%", 80, , , , , "allow-forms")}}

Versuchen Sie, das Formular ohne Wert abzusenden. Beachten Sie, dass das ungültige Eingabefeld den Fokus erhält und eine standardmäßige Fehlermeldung („Bitte füllen Sie dieses Feld aus“) erscheint. Auch das Absenden des Formulars wird verhindert. Beachten Sie allerdings, dass wir das Absenden selbst dann verhindern, wenn ein Wert eingegeben wurde, um einen Fehler durch die Art zu vermeiden, wie MDN eingebettete Formulare verarbeitet.

### Validierung anhand eines regulären Ausdrucks

Eine weitere nützliche Validierungsfunktion ist das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern), dessen Wert ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) sein muss. Ein regulärer Ausdruck (Regexp) ist ein Muster, mit dem sich Zeichenkombinationen in Zeichenfolgen abgleichen lassen. Deshalb eignen sich reguläre Ausdrücke gut für die Formularvalidierung und haben viele weitere Einsatzmöglichkeiten in JavaScript.

Reguläre Ausdrücke sind recht komplex; eine umfassende Einführung würde den Rahmen dieses Artikels sprengen. Die folgenden Beispiele vermitteln Ihnen eine grundlegende Vorstellung von ihrer Funktionsweise:

- `a` — Entspricht genau einem Zeichen, das `a` ist (nicht `b`, nicht `aa` und so weiter).
- `abc` — Entspricht `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Entspricht `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c` (`ac` oder `abc`).
- `ab*c` — Entspricht `a`, optional gefolgt von beliebig vielen `b`, gefolgt von `c` (`ac`, `abc`, `abbbbbc` und so weiter).
- `a|b` — Entspricht genau einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Entspricht genau `abc` oder genau `xyz` (aber nicht `abcxyz`, `a`, `y` und so weiter).

Es gibt viele weitere Möglichkeiten, auf die wir hier nicht eingehen. Eine vollständige Übersicht mit zahlreichen Beispielen finden Sie in unserer Dokumentation zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Setzen wir nun ein Beispiel um. Ergänzen Sie Ihren HTML-Code wie folgt um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut:

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

Damit erhalten wir die folgende aktualisierte Version – probieren Sie sie aus:

{{EmbedLiveSample("validate-regular-expression", "100%", 80, , , , , "allow-forms")}}

Sie können auch auf die Schaltfläche **Play** klicken, um das Beispiel im MDN Playground zu öffnen und dort den Quellcode zu bearbeiten.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier Werten: die Zeichenfolgen „banana“, „Banana“, „cherry“ oder „Cherry“. Reguläre Ausdrücke unterscheiden zwischen Groß- und Kleinschreibung. Mit einem zusätzlichen, in eckige Klammern gesetzten „Aa“-Muster unterstützen wir sowohl groß- als auch kleingeschriebene Varianten.

Ändern Sie nun den Wert des [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attributs so, dass er einem der zuvor gezeigten Beispiele entspricht. Sehen Sie sich an, wie sich das auf die Werte auswirkt, die Sie eingeben können, damit das Feld gültig ist. Versuchen Sie auch, eigene Muster zu schreiben. Beziehen Sie sich dabei nach Möglichkeit auf Obst, damit Ihre Beispiele sinnvoll bleiben!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, entspricht das `input`-Element der Pseudoklasse {{cssxref(':invalid')}}. Ist das Feld leer und das Element nicht erforderlich, gilt es nicht als ungültig.

Für einige Typen des {{HTMLElement("input")}}-Elements ist kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut nötig, um die Eingabe anhand eines regulären Ausdrucks zu validieren. Beispielsweise wird bei `email` geprüft, ob der eingegebene Wert dem Format einer gültigen E-Mail-Adresse entspricht. Wenn zusätzlich das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) gesetzt ist, kann der Wert auch einer durch Kommas getrennten Liste von E-Mail-Adressen entsprechen.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) nicht.

### Die Länge von Eingaben begrenzen

Mit den Attributen [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) können Sie die Zeichenlänge aller mit {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder begrenzen. Ein Feld ist ungültig, wenn es einen Wert enthält und dieser weniger Zeichen als durch [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) festgelegt oder mehr Zeichen als durch [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) festgelegt hat.

Browser lassen häufig gar nicht erst zu, dass Benutzer mehr Zeichen als erlaubt in ein Textfeld eingeben. Eine bessere Benutzererfahrung, als lediglich `maxlength` zu verwenden, bietet eine barrierefrei zugängliche Anzeige der Zeichenanzahl, bei der Benutzer ihre Eingabe auf die erlaubte Länge kürzen können. Ein Beispiel dafür ist die Zeichenbegrenzung beim Verfassen von Beiträgen in sozialen Medien. Hierfür lässt sich JavaScript einsetzen, auch mit [Lösungen, die `maxlength` verwenden](https://github.com/mimo84/bootstrap-maxlength).

> [!NOTE]
> Verstöße gegen Längenbegrenzungen werden nicht gemeldet, wenn der Wert programmatisch gesetzt wird. Sie werden nur bei Benutzereingaben gemeldet.

### Die Werte von Eingaben begrenzen

Bei numerischen Feldern, darunter [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und die verschiedenen Typen für Datumseingaben, können Sie mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) einen Bereich gültiger Werte festlegen. Enthält das Feld einen Wert außerhalb dieses Bereichs, ist es ungültig.

Sehen wir uns ein weiteres Beispiel an. Erstellen Sie im selben Verzeichnis wie Ihre vorherige Datei eine weitere Kopie der [einfachen Ausgangsdatei](#einfache_ausgangsdatei) und speichern Sie sie als `index2.html`.

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

- Das `text`-Feld hat hier für `minlength` und `maxlength` jeweils den Wert sechs. Das entspricht der Länge von „banana“ und „cherry“.
- Für das `number`-Feld haben wir `min` auf eins und `max` auf zehn gesetzt. Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt. Mit den Schaltflächen zum Erhöhen und Verringern lässt sich der Wert nicht über diesen Bereich hinaus verändern. Gibt ein Benutzer manuell eine Zahl außerhalb des Bereichs ein, sind die Daten ungültig. Die Zahl ist nicht erforderlich; wird der Wert entfernt, ist das Feld gültig.

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

Hier sehen Sie das Beispiel in Aktion:

{{EmbedLiveSample("constraining-values", "100%", 100)}}

Sie können auch auf die Schaltfläche **Play** klicken, um das Beispiel im MDN Playground zu öffnen und dort den Quellcode zu bearbeiten.

Numerische Eingabetypen wie `number`, `range` und `date` können auch das Attribut [`step`](/de/docs/Web/HTML/Reference/Attributes/step) verwenden. Es legt fest, in welchen Schritten sich der Wert erhöht oder verringert, wenn die Eingabesteuerelemente verwendet werden – etwa die Schaltflächen zum Erhöhen und Verringern einer Zahl oder der Schieberegler eines Bereichs. In unserem Beispiel fehlt das `step`-Attribut, daher gilt der Standardwert `1`. Das bedeutet, dass auch Dezimalzahlen wie 3,2 als ungültig angezeigt werden.

### Vollständiges Beispiel

Das folgende vollständige Beispiel zeigt die Verwendung der integrierten HTML-Validierungsfunktionen. Zunächst der HTML-Code:

```html live-sample___full-example
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

Nun etwas CSS, um den HTML-Code zu gestalten:

```css live-sample___full-example
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

Das Ergebnis sieht so aus:

{{EmbedLiveSample("full-example", "100%", 480)}}

Sie können auch auf die Schaltfläche **Play** klicken, um das Beispiel im MDN Playground zu öffnen und dort den Quellcode zu bearbeiten.

Eine vollständige Liste der Attribute, mit denen sich Eingabewerte einschränken lassen, und der Eingabetypen, die diese unterstützen, finden Sie unter [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes).

## Formulare mit JavaScript validieren

Wenn Sie den Text der integrierten Fehlermeldungen ändern möchten, benötigen Sie JavaScript. In diesem Abschnitt betrachten wir verschiedene Möglichkeiten dafür.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden DOM-Schnittstellen für Formularelemente verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element)

Die Constraint Validation API stellt für diese Elemente die folgenden Eigenschaften bereit:

- `validationMessage`: Gibt eine lokalisierte Meldung zurück, die beschreibt, welche Validierungsbedingungen das Feld nicht erfüllt (falls vorhanden). Ist das Feld nicht für die Validierung vorgesehen (`willValidate` ist `false`) oder erfüllt sein Wert alle Bedingungen (ist also gültig), wird eine leere Zeichenfolge zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt mit mehreren Eigenschaften zurück, die den Gültigkeitszustand des Elements beschreiben. Einzelheiten zu allen verfügbaren Eigenschaften finden Sie auf der Referenzseite zu [`ValidityState`](/de/docs/Web/API/ValidityState). Einige der häufigsten Eigenschaften sind:
  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, andernfalls `false`. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die durch das Attribut [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) festgelegte Höchstlänge, und `false`, wenn er kürzer oder gleich lang ist. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die durch das Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) festgelegte Mindestlänge, und `false`, wenn er länger oder gleich lang ist. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als der durch das Attribut [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegte Höchstwert, und `false`, wenn er kleiner oder gleich groß ist. Bei `true` entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als der durch das Attribut [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) festgelegte Mindestwert, und `false`, wenn er größer oder gleich groß ist. Bei `true` entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht der erforderlichen Syntax entspricht (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), und `false`, wenn die Syntax korrekt ist. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - `valid`: Gibt `true` zurück, wenn das Element alle Validierungsbedingungen erfüllt und daher als gültig gilt. Wird eine Bedingung nicht erfüllt, wird `false` zurückgegeben. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":valid")}}, andernfalls der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut, aber keinen Wert hat, andernfalls `false`. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.

- `willValidate`: Gibt `true` zurück, wenn das Element beim Absenden des Formulars validiert wird, andernfalls `false`.

Die Constraint Validation API stellt außerdem für diese Elemente und das [`form`](/de/docs/Web/HTML/Reference/Elements/form)-Element die folgenden Methoden bereit:

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements gültig ist, andernfalls `false`. Ist das Element ungültig, löst die Methode außerdem ein [`invalid`-Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mithilfe von Ereignissen. Diese Methode ist in Verbindung mit `preventDefault()` in einem `onSubmit`-Event-Handler nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu. Wenn Sie eine solche Fehlermeldung setzen, gilt das Element als ungültig und der angegebene Fehler wird angezeigt. So können Sie mit JavaScript einen Validierungsfehler festlegen, der nicht durch die standardmäßigen HTML-Validierungsbedingungen abgedeckt ist. Die Meldung wird Benutzern bei der Fehlerausgabe angezeigt.

#### Eine benutzerdefinierte Fehlermeldung implementieren

Wie Sie in den vorherigen Beispielen zu HTML-Validierungsbedingungen gesehen haben, zeigt der Browser jedes Mal eine Fehlermeldung an, wenn ein Benutzer versucht, ein ungültiges Formular abzusenden. Wie diese Meldung dargestellt wird, hängt vom Browser ab.

Diese automatisch erzeugten Meldungen haben zwei Nachteile:

- Ihr Erscheinungsbild lässt sich nicht auf standardisierte Weise mit CSS ändern.
- Sie hängen von der Spracheinstellung des Browsers ab. Deshalb kann eine Seite in einer Sprache angezeigt werden, während die Fehlermeldung in einer anderen erscheint, wie der folgende Firefox-Screenshot zeigt.

![Beispiel für eine französische Firefox-Fehlermeldung auf einer englischsprachigen Seite](error-firefox-win7.png)

Die Anpassung solcher Fehlermeldungen gehört zu den häufigsten Anwendungsfällen der Constraint Validation API. Sehen wir uns anhand eines Beispiels an, wie das funktioniert.

Wir beginnen mit etwas HTML. Sie können es in eine weitere Kopie der [einfachen Ausgangsdatei](#einfache_ausgangsdatei) einfügen:

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

Hier speichern wir eine Referenz auf das E-Mail-Eingabefeld und fügen ihm anschließend einen Event-Listener hinzu. Dieser führt den enthaltenen Code jedes Mal aus, wenn sich der Wert des Eingabefeldes ändert.

Im enthaltenen Code prüfen wir, ob die Eigenschaft `validity.typeMismatch` des E-Mail-Eingabefeldes `true` zurückgibt. Das bedeutet, dass der Wert nicht dem Format einer gültigen E-Mail-Adresse entspricht. In diesem Fall rufen wir die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) mit einer benutzerdefinierten Meldung auf. Dadurch wird das Eingabefeld ungültig: Beim Versuch, das Formular abzusenden, schlägt das Absenden fehl und die benutzerdefinierte Fehlermeldung wird angezeigt.

Gibt `validity.typeMismatch` dagegen `false` zurück, rufen wir `setCustomValidity()` mit einer leeren Zeichenfolge auf. Dadurch wird das Eingabefeld gültig und das Formular kann abgesendet werden. Hat bei der Validierung irgendein Formularfeld einen `customError`, der keine leere Zeichenfolge ist, wird das Absenden des Formulars verhindert.

Probieren Sie es unten aus (klicken Sie auf die Schaltfläche **Play**, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

#### Die integrierte Formularvalidierung erweitern

Das vorherige Beispiel hat gezeigt, wie Sie für eine bestimmte Fehlerart (`validity.typeMismatch`) eine benutzerdefinierte Meldung hinzufügen. Sie können auch sämtliche integrierten Validierungsfunktionen nutzen und sie anschließend mit `setCustomValidity()` ergänzen.

Hier zeigen wir, wie Sie die integrierte Validierung von [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) so erweitern, dass nur Adressen mit der Domain `@example.com` akzeptiert werden. Wir beginnen mit dem folgenden HTML-{{htmlelement("form")}}.

```html live-sample___extending-built-in-form-validation
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode ist unten dargestellt. Bei jeder neuen Eingabe setzt er zunächst die benutzerdefinierte Validierungsmeldung durch einen Aufruf von `setCustomValidity("")` zurück. Anschließend prüft er mit `email.validity.valid`, ob die eingegebene Adresse ungültig ist. Wenn ja, beendet er den Event-Handler. So wird sichergestellt, dass alle regulären integrierten Validierungsprüfungen durchgeführt werden, solange der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, ergänzt der Code eine benutzerdefinierte Bedingung: Endet die Adresse nicht auf `@example.com`, ruft er `setCustomValidity()` mit einer Fehlermeldung auf.

```js live-sample___extending-built-in-form-validation
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

Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse ohne die Endung `@example.com` und eine Adresse mit dieser Endung abzusenden.

{{EmbedLiveSample("extending-built-in-form-validation", "", 200, , , , , "allow-forms")}}

#### Ein ausführlicheres Beispiel

Nachdem wir ein sehr einfaches Beispiel gesehen haben, betrachten wir nun, wie sich mit dieser API eine etwas komplexere benutzerdefinierte Validierung erstellen lässt.

Zunächst der HTML-Code. Sie können das Beispiel wieder Schritt für Schritt selbst aufbauen:

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

Dieses Formular verwendet das Attribut [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate), um die automatische Validierung des Browsers zu deaktivieren. Wird `novalidate` am Formular gesetzt, zeigt das Formular keine eigenen Fehlermeldungs-Pop-ups mehr an. Stattdessen können wir die benutzerdefinierten Fehlermeldungen auf eine selbst gewählte Weise im DOM anzeigen. Die Constraint Validation API bleibt jedoch weiterhin verfügbar, und auch CSS-Pseudoklassen wie {{cssxref(":valid")}} werden weiterhin angewendet. Das heißt: Obwohl der Browser die Gültigkeit des Formulars vor dem Senden der Daten nicht automatisch prüft, können Sie diese Prüfung selbst durchführen und das Formular entsprechend gestalten.

Das zu validierende Eingabefeld ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email). Es ist `required` und hat eine `minlength` von 8 Zeichen. Wir prüfen diese Bedingungen mit eigenem Code und zeigen für jede eine benutzerdefinierte Fehlermeldung an.

Die Fehlermeldungen sollen innerhalb eines `<span>`-Elements erscheinen. Das Attribut [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) wird für dieses `<span>` gesetzt, damit die benutzerdefinierte Fehlermeldung allen zugänglich ist – auch Benutzern von Screenreadern, denen sie vorgelesen wird.

Nun folgt etwas grundlegendes CSS, um das Aussehen des Formulars zu verbessern und bei ungültigen Eingabedaten eine visuelle Rückmeldung zu geben:

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

Sehen wir uns jetzt das JavaScript an, das die benutzerdefinierte Fehlervalidierung umsetzt. Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen. Hier greifen wir auf das Formular selbst, das E-Mail-Eingabefeld und das span-Element zu, in dem die Fehlermeldung erscheinen soll.

Mithilfe von Event-Handlern prüfen wir bei jeder Eingabe, ob die Formularfelder gültig sind. Liegt ein Fehler vor, zeigen wir ihn an. Andernfalls entfernen wir eine eventuell angezeigte Fehlermeldung.

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

Bei jeder Änderung des Eingabewerts prüfen wir, ob er gültige Daten enthält. Ist das der Fall, entfernen wir eine eventuell angezeigte Fehlermeldung. Sind die Daten ungültig, rufen wir `showError()` auf, um den passenden Fehler anzuzeigen.

Bei jedem Versuch, das Formular abzusenden, prüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Absenden zu. Andernfalls rufen wir `showError()` auf, um den passenden Fehler anzuzeigen, und verhindern das Absenden mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity`-Objekts des Eingabefeldes, um die Art des Fehlers zu ermitteln, und zeigt dann eine passende Fehlermeldung an.

Hier sehen Sie das Ergebnis in Aktion (klicken Sie auf die Schaltfläche **Play**, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Die Constraint Validation API ist ein leistungsfähiges Werkzeug für die Formularvalidierung. Sie gibt Ihnen weit mehr Kontrolle über die Benutzeroberfläche, als mit HTML und CSS allein möglich ist.

### Formulare ohne integrierte API validieren

In manchen Fällen, etwa bei [benutzerdefinierten Formularfeldern](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können oder möchten Sie die Constraint Validation API nicht verwenden. Sie können Ihr Formular trotzdem mit JavaScript validieren, müssen den dafür nötigen Code dann aber selbst schreiben.

Stellen Sie sich bei der Validierung eines Formulars einige Fragen:

- Welche Art der Validierung soll ich durchführen?
  - : Sie müssen festlegen, wie Sie Ihre Daten validieren möchten: mit Zeichenfolgenoperationen, Typumwandlungen, regulären Ausdrücken und so weiter. Die Entscheidung liegt bei Ihnen.
- Was soll geschehen, wenn das Formular nicht gültig ist?
  - : Das ist eine Frage der Benutzeroberfläche. Sie müssen entscheiden, wie sich das Formular verhalten soll. Soll es die Daten trotzdem senden? Sollen fehlerhafte Felder hervorgehoben werden? Sollen Fehlermeldungen angezeigt werden?
- Wie kann ich Benutzern helfen, ungültige Daten zu korrigieren?
  - : Um Frustration zu vermeiden, sollten Sie möglichst hilfreiche Informationen bereitstellen, die Benutzer bei der Korrektur ihrer Eingaben unterstützen. Geben Sie schon vor der Eingabe Hinweise darauf, was erwartet wird, und formulieren Sie klare Fehlermeldungen. Wenn Sie sich näher mit den Anforderungen an Benutzeroberflächen für die Formularvalidierung beschäftigen möchten, lesen Sie diese hilfreichen Artikel:
    - [Benutzern helfen, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/form-fields)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Fehler in Formularen melden: 10 Gestaltungsrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel ohne Constraint Validation API

Zur Veranschaulichung folgt eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

Der HTML-Code ist fast identisch; wir haben lediglich die HTML-Validierungsfunktionen entfernt.

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

Auch das CSS muss kaum geändert werden: Wir haben die CSS-Pseudoklasse {{cssxref(":invalid")}} durch eine gewöhnliche Klasse ersetzt und verzichten auf den Attributselektor.

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

Die wesentlichen Änderungen betreffen den JavaScript-Code, der nun deutlich mehr Aufgaben übernehmen muss.

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

Wie Sie sehen, ist es nicht besonders schwierig, ein eigenes Validierungssystem zu entwickeln. Schwieriger ist es, dieses so allgemein zu gestalten, dass es plattformübergreifend und mit jedem Formular funktioniert, das Sie erstellen. Für die Formularvalidierung stehen viele Bibliotheken zur Verfügung, beispielsweise [Validate.js](https://rickharrison.github.io/validate.js/).

## Zusammenfassung

Für die clientseitige Formularvalidierung ist manchmal JavaScript nötig, wenn Sie die Gestaltung und Fehlermeldungen anpassen möchten. Sie müssen dabei aber _immer_ sorgfältig an die Benutzer denken. Helfen Sie ihnen stets, ihre Eingaben zu korrigieren. Achten Sie dazu auf Folgendes:

- Zeigen Sie eindeutige Fehlermeldungen an.
- Lassen Sie beim Eingabeformat möglichst viel Spielraum.
- Zeigen Sie genau an, wo ein Fehler aufgetreten ist – insbesondere bei umfangreichen Formularen.

Sobald Sie geprüft haben, dass das Formular korrekt ausgefüllt ist, kann es abgesendet werden. Als Nächstes behandeln wir das [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
