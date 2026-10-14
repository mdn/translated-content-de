---
title: HTML-Attribut `multiple`
short-title: multiple
slug: Web/HTML/Reference/Attributes/multiple
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

Das boolesche Attribut **`multiple`** gibt an, dass ein Formularsteuerelement einen oder mehrere Werte akzeptiert. Das Attribut ist für die Input-Typen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} sowie für {{HTMLElement("select")}} gültig. Wie Benutzer mehrere Werte auswählen, hängt vom jeweiligen Formularsteuerelement ab.

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

Je nach Typ kann ein Formularsteuerelement anders aussehen, wenn das Attribut `multiple` gesetzt ist. Bei einem Input des Typs `file` unterscheidet sich der vom Browser angezeigte Hinweistext. In Firefox steht „Keine Dateien ausgewählt“, wenn das Attribut vorhanden ist, und „Keine Datei ausgewählt“, wenn es fehlt. Die meisten Browser zeigen für ein {{HTMLElement("select")}}-Steuerelement mit dem Attribut `multiple` ein scrollbares Listenfeld an; ohne das Attribut zeigen sie ein einzeiliges Dropdown-Menü an. Ein Input des Typs {{HTMLElement("input/email", "email")}} sieht unabhängig davon gleich aus, ob das Attribut `multiple` vorhanden ist. Fehlt das Attribut jedoch, entspricht das Input der Pseudoklasse {{cssxref(':invalid')}}, wenn es mehr als eine durch Kommas getrennte E-Mail-Adresse enthält.

Wenn `multiple` für den Input-Typ {{HTMLElement("input/email", "email")}} gesetzt ist, können Benutzer null (sofern nicht auch [`required`](/de/docs/Web/HTML/Reference/Attributes/required) gesetzt ist), eine oder mehrere durch Kommas getrennte E-Mail-Adressen eingeben.

```html
<input type="email" multiple name="emails" id="emails" />
```

Nur wenn das Attribut `multiple` angegeben ist, darf der Wert eine Liste korrekt formatierter, durch Kommas getrennter E-Mail-Adressen sein. Leerzeichen am Anfang und Ende jeder Adresse in der Liste werden entfernt.

Wenn `multiple` für den Input-Typ {{HTMLElement("input/file", "file")}} gesetzt ist, können Benutzer eine oder mehrere Dateien auswählen. Sie können im Dateiauswahldialog mehrere Dateien auf jede Weise auswählen, die ihre Plattform unterstützt (z. B. indem sie <kbd>Shift</kbd> oder <kbd>Control</kbd> gedrückt halten und dann klicken).

```html
<input type="file" multiple name="uploads" id="uploads" />
```

Wenn das Attribut fehlt, können Benutzer pro `<input>` nur eine Datei auswählen.

Das Attribut `multiple` auf dem Element {{HTMLElement("select")}} kennzeichnet ein Steuerelement, mit dem null oder mehr Optionen aus einer Liste ausgewählt werden können. Andernfalls ist das Element {{HTMLElement("select")}} ein Steuerelement zur Auswahl einer einzelnen {{HTMLElement("option")}} aus der Liste.

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

Wenn `multiple` angegeben ist, zeigen die meisten Browser statt eines einzeiligen Dropdown-Menüs ein scrollbares Listenfeld an.

Mehrere ausgewählte Optionen werden gemäß der Array-Konvention von [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) übermittelt, also als `name=value1&name=value2`.

## Hinweise zur Barrierefreiheit

Geben Sie Anweisungen, damit Benutzer verstehen, wie sie das Formular ausfüllen und die einzelnen Formularsteuerelemente verwenden. Kennzeichnen Sie erforderliche und optionale Eingaben, Datenformate und andere relevante Informationen. Wenn Sie das Attribut `multiple` verwenden, weisen Sie darauf hin, dass mehrere Werte zulässig sind, und erklären Sie, wie diese eingegeben werden können, beispielsweise „Trennen Sie E-Mail-Adressen durch ein Komma“.

Wird für ein `select`-Element mit `multiple` der Wert `size="1"` gesetzt (also `<select multiple size="1">`), erscheint ein Dropdown-Menü, in dem Benutzer mehrere Optionen auswählen können. Manche Browser erweitern die Optionsliste nicht, wenn das Steuerelement aktiv ist, sondern zeigen mehrere Optionen in einer Menüliste an, die nur so hoch wie ein einzeiliges Feld ist. Das beeinträchtigt die Benutzerfreundlichkeit. Weisen Sie bei einem `select`-Element mit Mehrfachauswahl darauf hin, dass mehrere Optionen ausgewählt werden können – auch dann, wenn mehrere Optionen bereits sichtbar sind.

## Beispiele

### Input des Typs `email`

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

Nur wenn das Attribut `multiple` angegeben ist, darf der Wert eine Liste korrekt formatierter, durch Kommas getrennter E-Mail-Adressen sein. Leerzeichen am Anfang und Ende jeder Adresse in der Liste werden entfernt. Wenn das Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required) vorhanden ist, muss mindestens eine E-Mail-Adresse eingegeben werden.

Einige Browser unterstützen bei vorhandenem `multiple` die Anzeige der Optionsliste aus dem zugehörigen {{htmlelement('datalist')}} auch für weitere E-Mail-Adressen. Andere unterstützen dies nicht. Siehe dazu das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list).

{{EmbedLiveSample("email_input", 600, 80) }}

### Input des Typs `file`

Wenn `multiple` für den Input-Typ {{HTMLElement("input/file", "file")}} gesetzt ist, können Benutzer eine oder mehrere Dateien auswählen:

```html
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
```

{{EmbedLiveSample("file_input", 600, 80) }}

Beachten Sie den Unterschied im Erscheinungsbild zwischen dem Beispiel mit gesetztem `multiple` und dem anderen `file`-Input ohne dieses Attribut.

Wenn diese Inputs Teil eines Formulars sind, das mit [`method="get"`](/de/docs/Web/HTML/Reference/Elements/form) übermittelt wird, wird der Name jeder ausgewählten Datei als URL-Parameter hinzugefügt, beispielsweise `?uploads=img1.jpg&uploads=img2.svg`. Um die Dateien als mehrteilige Formulardaten zu übermitteln, verwenden Sie `method="post"` und `enctype="multipart/form-data"`. Weitere Informationen finden Sie beim Element {{htmlelement('form')}} und unter [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_method_attribute).

### `select`

Das Attribut `multiple` auf dem Element {{HTMLElement("select")}} kennzeichnet ein Steuerelement, mit dem null oder mehr Optionen aus einer Liste ausgewählt werden können. Andernfalls ist das Element {{HTMLElement("select")}} ein Steuerelement zur Auswahl einer einzelnen {{HTMLElement("option")}} aus der Liste. Das Erscheinungsbild des Steuerelements hängt in der Regel davon ab, ob das Attribut `multiple` vorhanden ist: Die meisten Browser zeigen dann statt eines einzeiligen Dropdown-Menüs ein scrollbares Listenfeld an.

```html
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
```

{{EmbedLiveSample("select", 600, 120) }}

Beachten Sie den Unterschied im Erscheinungsbild der beiden Formularsteuerelemente.

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

Es gibt mehrere Möglichkeiten, in einem `<select>`-Element mit dem Attribut `multiple` mehrere Optionen auszuwählen. Je nach Betriebssystem können Benutzer mit einer Maus <kbd>Ctrl</kbd>, <kbd>Command</kbd> oder <kbd>Shift</kbd> gedrückt halten und dann auf mehrere Optionen klicken, um sie aus- oder abzuwählen. Benutzer einer Tastatur können mehrere aufeinanderfolgende Einträge auswählen, indem sie den Fokus auf das `<select>`-Element setzen, mit den Pfeiltasten <kbd>Up</kbd> und <kbd>Down</kbd> einen Eintrag am Anfang oder Ende des gewünschten Bereichs auswählen und sich durch die Optionen bewegen. Die Auswahl nicht aufeinanderfolgender Einträge wird weniger zuverlässig unterstützt: Einträge sollten sich mit <kbd>Space</kbd> aus- und abwählen lassen, die Unterstützung unterscheidet sich jedoch zwischen Browsern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [Mehrere E-Mail-Adressen zulassen](/de/docs/Web/HTML/Reference/Elements/input/email#allowing_multiple_email_addresses)
