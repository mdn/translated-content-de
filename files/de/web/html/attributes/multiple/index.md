---
title: "HTML-Attribut: multiple"
short-title: multiple
slug: Web/HTML/Attributes/multiple
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Das Boolean-Attribut **`multiple`**, wenn es gesetzt ist, bedeutet, dass das Formularelement einen oder mehrere Werte akzeptiert. Das Attribut ist gültig für die {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/file", "file")}}-Eingabetypen sowie für das {{HTMLElement("select")}}. Die Art und Weise, in der der Benutzer mehrere Werte auswählt, hängt vom Formularelement ab.

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

## Übersicht

Abhängig vom Typ kann das Formularelement ein unterschiedliches Erscheinungsbild haben, wenn das `multiple`-Attribut gesetzt ist. Für den Dateityp-Input unterscheiden sich die nativen Meldungen, die der Browser bereitstellt. In Firefox zeigt der Dateieingang "Keine Dateien ausgewählt" an, wenn das Attribut vorhanden ist, und "Keine Datei ausgewählt", wenn es nicht vorhanden ist. Die meisten Browser zeigen ein scrollbares Listenfeld für ein {{HTMLElement("select")}}-Element mit gesetztem `multiple`-Attribut an und ein einzeiliges Dropdown, wenn das Attribut weggelassen wird. Der {{HTMLElement("input/email", "email")}}-Eingabetyp zeigt dasselbe an, unabhängig davon, ob das `multiple`-Attribut enthalten ist oder nicht, aber er entspricht der {{cssxref(':invalid')}}-Pseudoklasse, wenn mehr als eine kommagetrennte E-Mail-Adresse enthalten ist, falls das Attribut nicht vorhanden ist.

Wenn `multiple` beim {{HTMLElement("input/email", "email")}}-Eingabetyp gesetzt ist, kann der Benutzer null (wenn nicht auch [`required`](/de/docs/Web/HTML/Attributes/required) gesetzt wurde), eine oder mehrere kommagetrennte E-Mail-Adressen einschließen.

```html
<input type="email" multiple name="emails" id="emails" />
```

Wenn und nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste korrekt formatierter, kommagetrennter E-Mail-Adressen sein. Jegliche führenden und nachstehenden Leerzeichen werden von jeder Adresse in der Liste entfernt.

Wenn `multiple` beim {{HTMLElement("input/file", "file")}}-Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen. Der Benutzer kann mehrere Dateien aus dem Dateiauswahldialog in beliebiger Weise auswählen, die auf seiner Plattform unterstützt wird (z. B. durch Halten von <kbd>Shift</kbd> oder <kbd>Control</kbd> und anschließendem Klicken).

```html
<input type="file" multiple name="uploads" id="uploads" />
```

Wenn das Attribut weggelassen wird, kann der Benutzer nur eine einzelne Datei pro `<input>` auswählen.

Das `multiple`-Attribut auf dem {{HTMLElement("select")}}-Element repräsentiert eine Steuerung zur Auswahl von null oder mehr Optionen aus der Liste der Optionen. Andernfalls repräsentiert das {{HTMLElement("select")}}-Element eine Steuerung zur Auswahl einer einzelnen {{HTMLElement("option")}} aus der Liste der Optionen.

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

Wenn `multiple` spezifiziert ist, zeigen die meisten Browser ein scrollendes Listenfeld anstelle eines einzeiligen Dropdowns.

## Barrierefreiheitsaspekte

Stellen Sie Anweisungen bereit, um Nutzern zu helfen, das Formular auszufüllen und einzelne Formularelemente zu verwenden. Geben Sie erforderliche und optionale Eingaben, Datenformate und andere relevante Informationen an. Wenn Sie das `multiple`-Attribut verwenden, informieren Sie den Benutzer, dass mehrere Werte erlaubt sind, und geben Sie Hinweise zum Eingeben mehrerer Werte, wie "trennen Sie E-Mail-Adressen mit einem Komma".

Das Setzen von `size="1"` auf einem mehrfachen `select` kann es in einigen Browsern wie ein einfaches `select` aussehen lassen, aber es expandiert dann nicht bei Fokus, was die Benutzerfreundlichkeit beeinträchtigt. Tun Sie das nicht. Wenn Sie das Aussehen eines `select` ändern, oder auch wenn Sie es nicht tun, stellen Sie sicher, dass der Benutzer informiert ist, dass mehr als eine Option auf eine andere Weise ausgewählt werden kann.

## Beispiele

### E-Mail-Eingabe

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

Wenn und nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste korrekt formatierter, kommagetrennter E-Mail-Adressen sein. Jegliche führenden und nachstehenden Leerzeichen werden von jeder Adresse in der Liste entfernt. Wenn das Attribut [`required`](/de/docs/Web/HTML/Attributes/required) vorhanden ist, muss mindestens eine E-Mail-Adresse angegeben werden.

Einige Browser unterstützen das Erscheinungsbild der [`list`](/de/docs/Web/HTML/Element/input#list) von Optionen aus der zugehörigen {{htmlelement('datalist')}} für nachfolgende E-Mail-Adressen, wenn `multiple` vorhanden ist. Andere tun dies nicht.

{{EmbedLiveSample("email_input", 600, 80) }}

### Dateieingabe

Wenn `multiple` auf dem {{HTMLElement("input/file", "file")}}-Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen:

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

Beachten Sie den Unterschied im Erscheinungsbild zwischen dem Beispiel mit gesetztem `multiple` und dem anderen Dateieingabefeld ohne.

Wenn das Formular abgeschickt wird, und wir hätten [`method="get"`](/de/docs/Web/HTML/Element/form) verwendet, hätte jeder ausgewählte Dateiname zu den URL-Parametern als `?uploads=img1.jpg&uploads=img2.svg` hinzugefügt werden müssen. Da wir jedoch Multipart-Formulardaten übermitteln, müssen wir `post` verwenden. Siehe das {{htmlelement('form')}}-Element und [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_method_attribute) für weitere Informationen.

### Auswahl

Das `multiple`-Attribut auf dem {{HTMLElement("select")}}-Element repräsentiert eine Steuerung zur Auswahl von null oder mehr Optionen aus der Liste der Optionen. Andernfalls repräsentiert das {{HTMLElement("select")}}-Element eine Steuerung zur Auswahl einer einzigen {{HTMLElement("option")}} aus der Liste der Optionen. Das Kontrollfeld hat im Allgemeinen ein unterschiedliches Erscheinungsbild, basierend auf der Anwesenheit des `multiple`-Attributs, wobei die meisten Browser ein scrollbares Listenfeld anstelle eines einzelnen Dropdowns anzeigen, wenn das Attribut vorhanden ist.

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

Beachten Sie den Unterschied im Erscheinungsbild zwischen den beiden Formularelementen.

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

Es gibt verschiedene Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit `multiple`-Attribut auszuwählen. Je nach Betriebssystem können Mausnutzer die Tasten <kbd>Ctrl</kbd>, <kbd>Command</kbd>, oder <kbd>Shift</kbd> gedrückt halten und dann auf mehrere Optionen klicken, um sie auszuwählen/abzuwählen. Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie das `<select>`-Element fokussieren, ein Element am oberen oder unteren Ende des Bereichs auswählen, den sie auswählen möchten, und die Tasten <kbd>Up</kbd> und <kbd>Down</kbd> verwenden, um die Optionen aufwärts und abwärts zu navigieren. Die Auswahl nicht zusammenhängender Elemente wird nicht so gut unterstützt: Elemente sollten durch Drücken von <kbd>Space</kbd> ausgewählt und abgewählt werden können, aber die Unterstützung variiert je nach Browser.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [Mehrere E-Mail-Adressen zulassen](/de/docs/Web/HTML/Element/input/email#allowing_multiple_email_addresses)
