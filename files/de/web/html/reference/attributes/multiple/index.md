---
title: "HTML-Attribut: multiple"
short-title: multiple
slug: Web/HTML/Reference/Attributes/multiple
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das Boolesche **`multiple`**-Attribut bedeutet, dass das Formularelement, wenn es gesetzt ist, einen oder mehrere Werte akzeptiert. Das Attribut ist gültig für die {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/file", "file")}}-Eingabetypen sowie das {{HTMLElement("select")}}. Die Art und Weise, wie der Benutzer mehrere Werte auswählt, hängt vom Formularelement ab.

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

Je nach Typ kann das Formularelement ein anderes Erscheinungsbild haben, wenn das `multiple`-Attribut gesetzt ist. Für den Datei-Eingabetyp unterscheidet sich die native Nachricht, die der Browser bereitstellt. In Firefox lautet die Datei-Eingabemeldung "Keine Dateien ausgewählt", wenn das Attribut vorhanden ist, und "Keine Datei ausgewählt", wenn es nicht vorhanden ist. Die meisten Browser zeigen eine rollende Listenbox für ein {{HTMLElement("select")}}-Element mit gesetztem `multiple`-Attribut und ein Dropdown-Menü auf einer einzigen Linie, wenn das Attribut weggelassen wird. Die {{HTMLElement("input/email", "email")}}-Eingabe zeigt das gleiche Verhalten, unabhängig davon, ob das `multiple`-Attribut enthalten ist oder nicht, wird jedoch der {{cssxref(':invalid')}}-Pseudoklasse entsprechen, wenn mehr als eine kommagetrennte E-Mail-Adresse enthalten ist, falls das Attribut nicht vorhanden ist.

Wenn `multiple` bei der {{HTMLElement("input/email", "email")}}-Eingabe gesetzt ist, kann der Benutzer null (wenn nicht auch [`required`](/de/docs/Web/HTML/Reference/Attributes/required) gesetzt ist), eine oder mehrere kommagetrennte E-Mail-Adressen einfügen.

```html
<input type="email" multiple name="emails" id="emails" />
```

Nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste von korrekt formatierten kommagetrennten E-Mail-Adressen sein. Alle führenden und nachgestellten Leerzeichen werden aus jeder Adresse in der Liste entfernt.

Wenn `multiple` auf den {{HTMLElement("input/file", "file")}}-Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen. Der Benutzer kann mehrere Dateien aus dem Dateiauswahlfeld auf jede Weise auswählen, die seine gewählte Plattform zulässt (z. B. durch Halten der <kbd>Shift</kbd>- oder <kbd>Control</kbd>-Taste und anschließendem Klicken).

```html
<input type="file" multiple name="uploads" id="uploads" />
```

Ohne das Attribut kann der Benutzer nur eine einzelne Datei pro `<input>` auswählen.

Das `multiple`-Attribut auf dem {{HTMLElement("select")}}-Element stellt eine Steuerung zum Auswählen von null oder mehr Optionen aus der Liste der Optionen dar. Andernfalls stellt das {{HTMLElement("select")}}-Element eine Steuerung zum Auswählen einer einzigen {{HTMLElement("option")}} aus der Liste der Optionen dar.

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

Wenn `multiple` angegeben ist, zeigen die meisten Browser anstelle eines Dropdowns mit einer einzelnen Zeile eine rollbare Listenbox an.

## Barrierefreiheit

Geben Sie Anweisungen, die den Benutzern helfen, das Formular zu vervollständigen und die einzelnen Formularelemente zu verwenden. Geben Sie alle erforderlichen und optionalen Eingaben, Datumsformate und andere relevante Informationen an. Wenn Sie das `multiple`-Attribut verwenden, informieren Sie den Benutzer darüber, dass mehrere Werte zulässig sind, und geben Sie Anweisungen, wie mehrere Werte bereitgestellt werden können, wie "E-Mail-Adressen mit einem Komma trennen".

Setzen Sie `size="1"` auf ein mehrfaches Select, kann es in einigen Browsern wie ein einfaches Select aussehen lassen, aber dann expandiert es nicht bei Fokus, was die Benutzerfreundlichkeit schädigt. Tun Sie das nicht. Wenn Sie das Aussehen eines Selects ändern, und sogar wenn nicht, stellen Sie sicher, dass Sie den Benutzer informieren, dass mehr als eine Option mit einer anderen Methode ausgewählt werden kann.

## Beispiele

### email-Eingabe

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

Nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste von korrekt formatierten kommagetrennten E-Mail-Adressen sein. Alle führenden und nachgestellten Leerzeichen werden aus jeder Adresse in der Liste entfernt. Wenn das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut vorhanden ist, wird mindestens eine E-Mail-Adresse benötigt.

Einige Browser unterstützen das Erscheinungsbild der [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) von Optionen aus der zugehörigen {{htmlelement('datalist')}} für nachfolgende E-Mail-Adressen, wenn `multiple` vorhanden ist. Andere nicht.

{{EmbedLiveSample("email_input", 600, 80) }}

### datei-Eingabe

Wenn `multiple` bei der {{HTMLElement("input/file", "file")}}-Eingabe gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen:

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

Beachten Sie den Unterschied im Aussehen zwischen dem Beispiel mit gesetztem `multiple` und dem anderen `file`-Eingabefeld ohne.

Beim Absenden des Formulars würden bei Verwendung von [`method="get"`](/de/docs/Web/HTML/Reference/Elements/form) der Name jeder ausgewählten Datei den URL-Parametern als `?uploads=img1.jpg&uploads=img2.svg` hinzugefügt. Da jedoch mehrteilige Formulardaten übermittelt werden, muss `post` verwendet werden. Siehe das {{htmlelement('form')}}-Element und [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_method_attribute) für weitere Informationen.

### select

Das `multiple`-Attribut auf dem {{HTMLElement("select")}}-Element stellt eine Steuerung zum Auswählen von null oder mehr Optionen aus der Liste der Optionen dar. Andernfalls stellt das {{HTMLElement("select")}}-Element eine Steuerung zum Auswählen einer einzigen {{HTMLElement("option")}} aus der Liste der Optionen dar. Die Steuerung hat im Allgemeinen ein unterschiedliches Erscheinungsbild basierend auf der Anwesenheit des multiple-Attributs, wobei die meisten Browser bei Präsenz des Attributs eine rollende Listenbox anstelle eines Dropdowns mit einer einzelnen Zeile anzeigen.

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

Beachten Sie den Unterschied im Aussehen zwischen den beiden Formularelementen.

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

Es gibt einige Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen. Je nach Betriebssystem können Mausbenutzer die Tasten <kbd>Ctrl</kbd>, <kbd>Command</kbd> oder <kbd>Shift</kbd> gedrückt halten und dann auf mehrere Optionen klicken, um sie auszuwählen/aufzuheben. Tastaturnutzer können mehrere zusammenhängende Elemente auswählen, indem sie das `<select>`-Element fokussieren, ein Element am oberen oder unteren Ende des gewünschten Bereichs auswählen und die <kbd>Up</kbd>- und <kbd>Down</kbd>-Pfeiltasten verwenden, um die Optionen zu durchlaufen. Die Auswahl von nicht zusammenhängenden Elementen ist nicht so gut unterstützt: Elemente sollten ausgewählt und abgewählt werden können, indem die <kbd>Space</kbd>-Taste gedrückt wird, aber die Unterstützung variiert zwischen den Browsern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [Mehrere E-Mail-Adressen zulassen](/de/docs/Web/HTML/Reference/Elements/input/email#allowing_multiple_email_addresses)
