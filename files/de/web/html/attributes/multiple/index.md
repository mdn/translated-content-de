---
title: "HTML-Attribut: multiple"
short-title: multiple
slug: Web/HTML/Attributes/multiple
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das Boolesche Attribut **`multiple`**, wenn gesetzt, bedeutet, dass das Formular-Steuerelement einen oder mehrere Werte akzeptiert. Das Attribut ist gültig für die {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetypen sowie für das {{HTMLElement("select")}}. Die Art und Weise, wie der Benutzer mehrere Werte auswählt, hängt vom Formular-Steuerelement ab.

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

Je nach Typ kann das Formular-Steuerelement ein anderes Aussehen haben, wenn das `multiple`-Attribut gesetzt ist. Für den Datei-Eingabetyp unterscheidet sich die native Nachricht, die der Browser bereitstellt. In Firefox zeigt der Datei-Eingabe "Keine Dateien ausgewählt" an, wenn das Attribut vorhanden ist, und "Keine Datei ausgewählt", wenn es nicht vorhanden ist. Die meisten Browser zeigen ein scrollbares Listenfeld für ein {{HTMLElement("select")}}-Steuerelement an, wenn das `multiple`-Attribut gesetzt ist, und ein einfaches Dropdown-Menü, wenn das Attribut weggelassen wird. Der {{HTMLElement("input/email", "email")}} Eingabetyp wird gleich angezeigt, unabhängig davon, ob das `multiple`-Attribut enthalten ist oder nicht, passt jedoch zur {{cssxref(':invalid')}} Pseudoklasse, wenn mehr als eine durch Komma getrennte E-Mail-Adresse enthalten ist, falls das Attribut nicht vorhanden ist.

Wenn `multiple` beim {{HTMLElement("input/email", "email")}} Eingabetyp gesetzt ist, kann der Benutzer null (sofern nicht auch [`required`](/de/docs/Web/HTML/Attributes/required)) ist, eine oder mehrere durch Komma getrennte E-Mail-Adressen einschließen.

```html
<input type="email" multiple name="emails" id="emails" />
```

Nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste von korrekt geformten, durch Komma getrennten E-Mail-Adressen sein. Führende und nachfolgende Leerzeichen werden von jeder Adresse in der Liste entfernt.

Wenn `multiple` auf den {{HTMLElement("input/file", "file")}} Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen. Der Benutzer kann mehrere Dateien aus dem Dateiauswahlfenster in jeglicher erlaubten Weise auf seiner Plattform auswählen (z.B. durch Halten der <kbd>Shift</kbd>- oder <kbd>Control</kbd>-Taste und dann Klicken).

```html
<input type="file" multiple name="uploads" id="uploads" />
```

Wenn das Attribut weggelassen wird, kann der Benutzer nur eine einzelne Datei pro `<input>` auswählen.

Das `multiple`-Attribut auf dem {{HTMLElement("select")}} Element stellt ein Steuerelement zum Auswählen von null oder mehr Optionen aus der Liste der Optionen dar. Andernfalls stellt das {{HTMLElement("select")}} Element ein Steuerelement zum Auswählen einer einzelnen {{HTMLElement("option")}} aus der Liste der Optionen dar.

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

Wenn `multiple` angegeben ist, zeigen die meisten Browser ein scrollbares Listenfeld anstelle eines einzeiligen Dropdown-Menüs.

## Barrierefreiheit

Stellen Sie Anleitungen bereit, um Benutzern zu helfen, das Formular zu vervollständigen und einzelne Formular-Steuerelemente zu verwenden. Geben Sie alle erforderlichen und optionalen Eingaben, Datenformate und andere relevante Informationen an. Beim Verwenden des `multiple`-Attributs informieren Sie den Benutzer, dass mehrere Werte erlaubt sind, und geben Sie Anweisungen, wie mehrere Werte bereitgestellt werden können, wie zum Beispiel "E-Mail-Adressen mit einem Komma trennen."

Das Setzen von `size="1"` bei einer mehrfachen Auswahl kann in einigen Browsern wie eine einfache Auswahl erscheinen lassen, jedoch wird es dann beim Fokus nicht erweitert, was die Bedienbarkeit einschränkt. Tun Sie das nicht. Wenn Sie das Aussehen einer Auswahl ändern, und auch wenn Sie es nicht tun, stellen Sie sicher, dass der Benutzer darüber informiert ist, dass mehr als eine Option durch eine andere Methode ausgewählt werden kann.

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

Nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste von korrekt geformten, durch Komma getrennten E-Mail-Adressen sein. Führende und nachfolgende Leerzeichen werden von jeder Adresse in der Liste entfernt. Wenn das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut vorhanden ist, ist mindestens eine E-Mail-Adresse erforderlich.

Einige Browser unterstützen das Erscheinungsbild der [`list`](/de/docs/Web/HTML/Element/input#list) von Optionen aus der zugehörigen {{htmlelement('datalist')}} für nachfolgende E-Mail-Adressen, wenn `multiple` vorhanden ist. Andere tun dies nicht.

{{EmbedLiveSample("email_input", 600, 80) }}

### Dateieingabe

Wenn `multiple` auf den {{HTMLElement("input/file", "file")}} Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen:

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

Beachten Sie den Unterschied im Erscheinungsbild zwischen dem Beispiel mit gesetztem `multiple` und dem anderen `file`-Eingang ohne.

Wenn das Formular übermittelt wird, hätten wir [`method="get"`](/de/docs/Web/HTML/Element/form) verwendet, um den Namen jeder ausgewählten Datei zu den URL-Parametern als `?uploads=img1.jpg&uploads=img2.svg` hinzuzufügen. Da wir jedoch mehrteilige Formulardaten senden, müssen wir POST verwenden. Weitere Informationen finden Sie im {{htmlelement('form')}} Element und bei [senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_method_attribute).

### Auswahl

Das `multiple`-Attribut im {{HTMLElement("select")}} Element stellt ein Steuerlement zum Auswählen von null oder mehr Optionen aus der Liste dar. Andernfalls stellt das {{HTMLElement("select")}} Element ein Steuerlement zum Auswählen einer einzelnen {{HTMLElement("option")}} aus der Liste dar. Das Steuerlement hat in der Regel ein unterschiedliches Erscheinungsbild basierend auf der Anwesenheit des multiple-Attributs, wobei die meisten Browser ein scrollbares Listenfeld anstelle eines einzeiligen Dropdown-Menüs anzeigen, wenn das Attribut vorhanden ist.

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

Beachten Sie den Unterschied im Erscheinungsbild zwischen den beiden Formular-Steuerelementen.

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

Es gibt einige Möglichkeiten, mehrere Optionen in einem `<select>` Element mit einem `multiple`-Attribut auszuwählen. Je nach Betriebssystem können Mausanwender die <kbd>Ctrl</kbd>, <kbd>Command</kbd> oder <kbd>Shift</kbd> Tasten halten und dann mehrere Optionen anklicken, um sie auszuwählen/abwählen. Benutzer der Tastatur können mehrere aufeinanderfolgende Elemente auswählen, indem sie sich auf das `<select>` Element konzentrieren, ein Element oben oder unten im Bereich auswählen, den sie auswählen möchten, und die <kbd>Hoch</kbd> und <kbd>Runter</kbd> Cursortasten verwenden, um zwischen den Optionen zu navigieren. Die Auswahl von nicht zusammenhängenden Elementen wird nicht so gut unterstützt: Elemente sollten durch Drücken der <kbd>Leertaste</kbd> ausgewählt und abgewählt werden können, aber die Unterstützung variiert zwischen den Browsern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [Mehrere E-Mail-Adressen erlauben](/de/docs/Web/HTML/Element/input/email#allowing_multiple_email_addresses)
