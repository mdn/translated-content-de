---
title: "HTML-Attribut: multiple"
short-title: multiple
slug: Web/HTML/Reference/Attributes/multiple
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das boolesche Attribut **`multiple`** bedeutet, wenn es gesetzt ist, dass das Formularelement ein oder mehrere Werte akzeptiert. Das Attribut ist gültig für die Eingabetypen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} sowie für {{HTMLElement("select")}}. Die Art und Weise, wie der Benutzer mehrere Werte auswählt, hängt vom Formularelement ab.

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

Abhängig vom Typ kann das Formularelement ein unterschiedliches Aussehen haben, wenn das `multiple`-Attribut gesetzt ist. Beim Eingabetyp `file` unterscheidet sich die native Meldung, die der Browser bereitstellt. In Firefox zeigt das Dateieingabefeld "Keine Dateien ausgewählt" an, wenn das Attribut vorhanden ist, und "Keine Datei ausgewählt", wenn es nicht vorhanden ist. Die meisten Browser zeigen eine scrollbare Listenbox für ein {{HTMLElement("select")}}-Element mit gesetztem `multiple`-Attribut an und ein Dropdown-Menü mit einer einzigen Zeile, wenn das Attribut weggelassen wird. Die {{HTMLElement("input/email", "email")}}-Eingabe zeigt das gleiche Erscheinungsbild, unabhängig davon, ob das `multiple`-Attribut eingeschlossen ist oder nicht, wird jedoch die {{cssxref(':invalid')}}-Pseudoklasse zutreffen, wenn mehr als eine kommaseparierte E-Mail-Adresse enthalten ist, falls das Attribut nicht vorhanden ist.

Wenn `multiple` auf dem Eingabetyp {{HTMLElement("input/email", "email")}} gesetzt ist, kann der Benutzer null (wenn nicht auch [`required`](/de/docs/Web/HTML/Reference/Attributes/required) gesetzt ist), eine oder mehrere kommaseparierte E-Mail-Adressen eingeben.

```html
<input type="email" multiple name="emails" id="emails" />
```

Nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste korrekt formatierter, kommaseparierter E-Mail-Adressen sein. Jedes führende oder nachfolgende Leerzeichen wird aus jeder Adresse in der Liste entfernt.

Wenn `multiple` auf dem Eingabetyp {{HTMLElement("input/file", "file")}} gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen. Der Benutzer kann nach Belieben mehrere Dateien aus dem Dateiauswahlfenster auswählen, je nach den Möglichkeiten seiner Plattform (z. B. durch Drücken von <kbd>Shift</kbd> oder <kbd>Control</kbd> und Klicken).

```html
<input type="file" multiple name="uploads" id="uploads" />
```

Wenn das Attribut weggelassen wird, kann der Benutzer nur eine einzelne Datei pro `<input>` auswählen.

Das `multiple`-Attribut auf dem {{HTMLElement("select")}}-Element stellt ein Steuerelement dar, mit dem null oder mehr Optionen aus der Liste der Optionen ausgewählt werden können. Ansonsten stellt das {{HTMLElement("select")}}-Element ein Steuerelement dar, mit dem eine einzelne {{HTMLElement("option")}} aus der Liste der Optionen ausgewählt wird.

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

Wenn `multiple` angegeben ist, zeigen die meisten Browser stattdessen eine scrollbare Listenbox an, anstatt ein Dropdown-Menü mit einer einzelnen Zeile.

## Barrierefreiheitsaspekte

Geben Sie Anweisungen an, um den Benutzern zu helfen, das Formular auszufüllen und einzelne Formularelemente zu verwenden. Geben Sie an, welche Eingaben erforderlich und optional sind, Datenformate und andere relevante Informationen. Wenn Sie das `multiple`-Attribut verwenden, informieren Sie den Benutzer, dass mehrere Werte erlaubt sind, und geben Sie Anweisungen, wie mehrere Werte angegeben werden sollen, z. B. "E-Mail-Adressen mit einem Komma trennen".

Ein `size="1"` auf einem Multiple-Select kann es in einigen Browsern wie eine Einzel-Auswahl aussehen lassen, aber es wird dann nicht bei Fokus erweitert, was die Benutzerfreundlichkeit beeinträchtigt. Machen Sie das nicht. Wenn Sie das Erscheinungsbild eines Selects ändern, und sogar wenn Sie es nicht tun, stellen Sie sicher, dass der Benutzer darüber informiert wird, dass mehr als eine Option durch eine andere Methode ausgewählt werden kann.

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

Nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste korrekt formatierter, kommaseparierter E-Mail-Adressen sein. Jedes führende oder nachfolgende Leerzeichen wird aus jeder Adresse in der Liste entfernt. Wenn das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut vorhanden ist, wird mindestens eine E-Mail-Adresse benötigt.

Einige Browser unterstützen das Erscheinungsbild der [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) von Optionen aus dem zugeordneten {{htmlelement('datalist')}} für nachfolgende E-Mail-Adressen, wenn `multiple` vorhanden ist. Andere tun dies nicht.

{{EmbedLiveSample("email_input", 600, 80) }}

### Dateieingabe

Wenn `multiple` auf dem Eingabetyp {{HTMLElement("input/file", "file")}} gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen:

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

Beachten Sie den Unterschied im Erscheinungsbild zwischen dem Beispiel mit gesetztem `multiple` und dem anderen `file`-Input ohne.

Wenn das Formular abgesendet wird, würde bei der Verwendung von [`method="get"`](/de/docs/Web/HTML/Reference/Elements/form) jeder Name der ausgewählten Dateien als URL-Parameter wie `?uploads=img1.jpg&uploads=img2.svg` hinzugefügt werden. Da wir jedoch mehrteilige Formulardaten senden, müssen wir `post` verwenden. Weitere Informationen finden Sie im {{htmlelement('form')}}-Element und [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_method_attribute).

### Auswahl

Das `multiple`-Attribut auf dem {{HTMLElement("select")}}-Element stellt ein Steuerelement dar, mit dem null oder mehr Optionen aus der Liste der Optionen ausgewählt werden können. Ansonsten stellt das {{HTMLElement("select")}}-Element ein Steuerelement dar, mit dem eine einzelne {{HTMLElement("option")}} aus der Liste der Optionen ausgewählt wird. Das Steuerelement hat in der Regel ein unterschiedliches Erscheinungsbild basierend auf der Präsenz des Multiple-Attributs, wobei die meisten Browser eine scrollbare Listenbox anzeigen, anstatt ein Dropdown-Menü mit einer einzigen Zeile, wenn das Attribut vorhanden ist.

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

Es gibt einige Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen. Abhängig vom Betriebssystem können Mausbenutzer die <kbd>Ctrl</kbd>, <kbd>Command</kbd> oder <kbd>Shift</kbd> Tasten gedrückt halten und dann mehrere Optionen anklicken, um sie auszuwählen/abzuwählen. Tastaturbenutzer können mehrere aneinandergrenzende Elemente auswählen, indem sie das `<select>`-Element fokussieren, ein Element oben oder unten im Bereich auswählen und dann die <kbd>Up</kbd>- und <kbd>Down</kbd>-Cursor-Tasten verwenden, um in den Optionen nach oben und unten zu gehen. Die Auswahl nicht aneinandergrenzender Elemente wird nicht so gut unterstützt: Elemente sollten durch Drücken von <kbd>Space</kbd> ausgewählt und abgewählt werden können, aber die Unterstützung variiert zwischen den Browsern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [Erlauben mehrerer E-Mail-Adressen](/de/docs/Web/HTML/Reference/Elements/input/email#allowing_multiple_email_addresses)
