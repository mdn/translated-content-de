---
title: HTML-Attribut `multiple`
short-title: multiple
slug: Web/HTML/Reference/Attributes/multiple
l10n:
  sourceCommit: fd0b11ad5b5014a9333578adcc4bc98fb9024da3
---

Wenn das boolesche Attribut **`multiple`** gesetzt ist, kann das Formular-Steuerelement einen oder mehrere Werte annehmen. Das Attribut ist für die input-Typen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} sowie für {{HTMLElement("select")}} gültig. Wie Benutzer mehrere Werte auswählen, hängt vom Formular-Steuerelement ab.

{{InteractiveExample("HTML Demo: multiple", "tabbed-standard")}}

```html interactive-example
<label for="recipients">Where should we send the receipt?</label>
<input id="recipients" name="recipients" type="email" multiple />

<label for="shakes">Which shakes would you like to order?</label>
<select id="shakes" name="shakes" multiple>
  <option>Vanilla Shake</option>
  <option>Strawberry Shake</option>
  <option>Chocolate Shake</option>
</select>

<label for="payment">How would you like to pay?</label>
<select id="payment" name="payment">
  <option>Credit card</option>
  <option>Bank Transfer</option>
</select>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input,
select {
  width: 100%;
}

input:invalid {
  background-color: lightpink;
}
```

## Überblick

Je nach Typ kann das Formular-Steuerelement anders aussehen, wenn das Attribut `multiple` gesetzt ist. Beim file-input-Typ unterscheidet sich der vom Browser angezeigte Standardtext. In Firefox steht „Keine Dateien ausgewählt“, wenn das Attribut vorhanden ist, und „Keine Datei ausgewählt“, wenn es fehlt. Die meisten Browser zeigen für ein {{HTMLElement("select")}}-Steuerelement mit dem Attribut `multiple` ein scrollbares Listenfeld und ohne das Attribut eine einzeilige Dropdown-Liste an. Ein {{HTMLElement("input/email", "email")}}-input sieht mit und ohne das Attribut `multiple` gleich aus. Wenn das Attribut jedoch fehlt und mehr als eine durch Kommas getrennte E-Mail-Adresse eingegeben wird, entspricht das input der Pseudoklasse {{cssxref(':invalid')}}.

Wenn `multiple` beim {{HTMLElement("input/email", "email")}}-input-Typ gesetzt ist, können Benutzer keine, eine oder mehrere durch Kommas getrennte E-Mail-Adressen eingeben. Keine Adresse ist nur dann zulässig, wenn nicht auch [`required`](/de/docs/Web/HTML/Reference/Attributes/required) gesetzt ist.

```html
<input type="email" multiple name="emails" id="emails" />
```

Nur wenn das Attribut `multiple` angegeben ist, kann der Wert eine Liste korrekt formatierter, durch Kommas getrennter E-Mail-Adressen sein. Führende und nachfolgende Leerzeichen werden bei jeder Adresse in der Liste entfernt.

Wenn `multiple` beim {{HTMLElement("input/file", "file")}}-input-Typ gesetzt ist, können Benutzer eine oder mehrere Dateien auswählen. Im Dateiauswahldialog können sie mehrere Dateien auf jede von ihrer Plattform unterstützte Weise auswählen, beispielsweise indem sie <kbd>Umschalt</kbd> oder <kbd>Strg</kbd> gedrückt halten und dann klicken.

```html
<input type="file" multiple name="uploads" id="uploads" />
```

Wenn das Attribut fehlt, können Benutzer pro `<input>` nur eine Datei auswählen.

Das Attribut `multiple` beim Element {{HTMLElement("select")}} kennzeichnet ein Steuerelement, mit dem sich keine, eine oder mehrere Optionen aus einer Liste auswählen lassen. Andernfalls dient das Element {{HTMLElement("select")}} dazu, genau eine {{HTMLElement("option")}} aus der Liste auszuwählen.

```html
<select multiple name="dwarfs" id="dwarfs">
  <option>Grumpy</option>
  <option>Happy</option>
  <option>Sleepy</option>
  <option>Bashful</option>
  <option>Sneezy</option>
  <option>Dopey</option>
  <option>Doc</option>
</select>
```

Wenn `multiple` angegeben ist, zeigen die meisten Browser statt einer einzeiligen Dropdown-Liste ein scrollbares Listenfeld an.

Mehrere ausgewählte Optionen werden gemäß der Array-Konvention von [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) übermittelt, also als `name=value1&name=value2`.

## Barrierefreiheit

Geben Sie Anweisungen, damit Benutzer verstehen, wie sie das Formular ausfüllen und die einzelnen Formular-Steuerelemente verwenden. Kennzeichnen Sie erforderliche und optionale Eingaben, Datenformate und andere relevante Informationen. Wenn Sie das Attribut `multiple` verwenden, weisen Sie darauf hin, dass mehrere Werte zulässig sind, und erklären Sie, wie diese eingegeben werden können, beispielsweise: „Trennen Sie E-Mail-Adressen durch ein Komma.“

Wird bei einem select mit Mehrfachauswahl `size="1"` gesetzt (also `<select multiple size="1">`), erscheint eine Dropdown-Liste, in der Benutzer mehrere Optionen auswählen können. Manche Browser erweitern die Optionsliste nicht, wenn das Steuerelement aktiv ist, sondern zeigen mehrere Optionen in einer Menüliste an, die nur so hoch wie ein einzeiliges Feld ist. Das beeinträchtigt die Benutzerfreundlichkeit. Weisen Sie bei einem select mit Mehrfachauswahl darauf hin, dass mehr als eine Option ausgewählt werden kann – auch wenn mehrere Optionen sichtbar sind.

## Beispiele

### email-input

```html
<label for="emails">Who do you want to email?</label>
<input
  type="email"
  multiple
  name="emails"
  id="emails"
  list="dwarf-emails"
  required
  size="64" />

<datalist id="dwarf-emails">
  <option value="grumpy@woodworkers.com">Grumpy</option>
  <option value="happy@woodworkers.com">Happy</option>
  <option value="sleepy@woodworkers.com">Sleepy</option>
  <option value="bashful@woodworkers.com">Bashful</option>
  <option value="sneezy@woodworkers.com">Sneezy</option>
  <option value="dopey@woodworkers.com">Dopey</option>
  <option value="doc@woodworkers.com">Doc</option>
</datalist>
```

```css hidden
input:invalid {
  border: red solid 3px;
}
```

Nur wenn das Attribut `multiple` angegeben ist, kann der Wert eine Liste korrekt formatierter, durch Kommas getrennter E-Mail-Adressen sein. Führende und nachfolgende Leerzeichen werden bei jeder Adresse in der Liste entfernt. Wenn das Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required) vorhanden ist, muss mindestens eine E-Mail-Adresse eingegeben werden.

Einige Browser unterstützen bei gesetztem `multiple` die Anzeige der Optionsliste aus dem zugehörigen {{htmlelement('datalist')}} für weitere E-Mail-Adressen über [`list`](/de/docs/Web/HTML/Reference/Elements/input#list). Andere Browser unterstützen dies nicht.

{{EmbedLiveSample("email_input", 600, 80) }}

### file-input

Wenn `multiple` beim {{HTMLElement("input/file", "file")}}-input-Typ gesetzt ist, können Benutzer eine oder mehrere Dateien auswählen:

```html
<form method="post" enctype="multipart/form-data">
  <p>
    <label for="uploads"> Choose the images you want to upload: </label>
    <input
      type="file"
      id="uploads"
      name="uploads"
      accept=".jpg, .jpeg, .png, .svg, .gif"
      multiple />
  </p>
  <p>
    <label for="text">Pick a text file to upload: </label>
    <input type="file" id="text" name="text" accept=".txt" />
  </p>
  <p>
    <input type="submit" value="Submit" />
  </p>
</form>
```

{{EmbedLiveSample("file_input", 600, 80) }}

Beachten Sie den Unterschied im Erscheinungsbild zwischen dem Beispiel mit gesetztem `multiple` und dem anderen `file`-input ohne dieses Attribut.

Würden wir beim Absenden des Formulars [`method="get"`](/de/docs/Web/HTML/Reference/Elements/form) verwenden, würde der Name jeder ausgewählten Datei als URL-Parameter hinzugefügt, beispielsweise `?uploads=img1.jpg&uploads=img2.svg`. Da wir jedoch Formulardaten im Multipart-Format übermitteln, müssen wir post verwenden. Weitere Informationen finden Sie beim Element {{htmlelement('form')}} und unter [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_method_attribute).

### select

Das Attribut `multiple` beim Element {{HTMLElement("select")}} kennzeichnet ein Steuerelement, mit dem sich keine, eine oder mehrere Optionen aus einer Liste auswählen lassen. Andernfalls dient das Element {{HTMLElement("select")}} dazu, genau eine {{HTMLElement("option")}} aus der Liste auszuwählen. Je nachdem, ob das Attribut `multiple` vorhanden ist, sieht das Steuerelement in der Regel anders aus: Die meisten Browser zeigen bei vorhandenem Attribut statt einer einzeiligen Dropdown-Liste ein scrollbares Listenfeld an.

```html
<form method="get" action="#">
  <p>
    <label for="dwarfs">Select the dwarf woodsman you like:</label>
    <select multiple name="dwarfs" id="dwarfs">
      <option>grumpy@woodworkers.com</option>
      <option>happy@woodworkers.com</option>
      <option>sleepy@woodworkers.com</option>
      <option>bashful@woodworkers.com</option>
      <option>sneezy@woodworkers.com</option>
      <option>dopey@woodworkers.com</option>
      <option>doc@woodworkers.com</option>
    </select>
  </p>
  <p>
    <label for="favoriteOnly">Select your favorite:</label>
    <select name="favoriteOnly" id="favoriteOnly">
      <option>grumpy@woodworkers.com</option>
      <option>happy@woodworkers.com</option>
      <option>sleepy@woodworkers.com</option>
      <option>bashful@woodworkers.com</option>
      <option>sneezy@woodworkers.com</option>
      <option>dopey@woodworkers.com</option>
      <option>doc@woodworkers.com</option>
    </select>
  </p>
  <p>
    <input type="submit" value="Submit" />
  </p>
</form>
```

{{EmbedLiveSample("select", 600, 120) }}

Beachten Sie den Unterschied im Erscheinungsbild der beiden Formular-Steuerelemente.

```css
/* uncomment this CSS to make the multiple the same height as the single */

/*
select[multiple] {
  height: 1.5em;
  vertical-align: top;
}
select[multiple]:focus,
select[multiple]:active {
  height: auto;
}
*/
```

Es gibt mehrere Möglichkeiten, in einem `<select>`-Element mit dem Attribut `multiple` mehrere Optionen auszuwählen. Je nach Betriebssystem können Benutzer mit der Maus <kbd>Strg</kbd>, <kbd>Command</kbd> oder <kbd>Umschalt</kbd> gedrückt halten und dann auf mehrere Optionen klicken, um sie aus- oder abzuwählen. Benutzer mit Tastatur können mehrere aufeinanderfolgende Einträge auswählen, indem sie das `<select>`-Element fokussieren und mit den Pfeiltasten <kbd>Aufwärts</kbd> und <kbd>Abwärts</kbd> einen Eintrag am Anfang oder Ende des gewünschten Bereichs auswählen. Die Auswahl nicht aufeinanderfolgender Einträge wird weniger gut unterstützt: Einträge sollten sich mit der <kbd>Leertaste</kbd> aus- und abwählen lassen, die Unterstützung variiert jedoch zwischen Browsern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [Mehrere E-Mail-Adressen zulassen](/de/docs/Web/HTML/Reference/Elements/input/email#allowing_multiple_email_addresses)
