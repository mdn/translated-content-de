---
title: "`multiple` HTML-Attribut"
short-title: multiple
slug: Web/HTML/Reference/Attributes/multiple
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das boolesche **`multiple`** Attribut, falls gesetzt, bedeutet, dass das Formularelement einen oder mehrere Werte akzeptiert. Das Attribut ist gültig für die {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetypen sowie das {{HTMLElement("select")}}. Die Art und Weise, wie der Benutzer mehrere Werte auswählt, hängt vom Formularelement ab.

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

Je nach Typ kann das Formularelement ein unterschiedliches Erscheinungsbild haben, wenn das `multiple` Attribut gesetzt ist. Für den Datei-Eingabetyp unterscheidet sich die native Nachricht, die der Browser anzeigt. In Firefox lautet die Dateieingabe "Keine Dateien ausgewählt", wenn das Attribut vorhanden ist, und "Keine Datei ausgewählt", wenn es nicht vorhanden ist. Die meisten Browser zeigen ein Scroll-Listenfeld für ein {{HTMLElement("select")}} Element mit dem gesetzten `multiple` Attribut an und ein einzeiliges Dropdown-Menü, wenn das Attribut weggelassen wird. Die {{HTMLElement("input/email", "email")}} Eingabe zeigt unabhängig davon, ob das `multiple` Attribut enthalten ist, dasselbe an, wird jedoch die {{cssxref(':invalid')}} Pseudo-Klasse ansprechen, wenn mehr als eine durch Kommas getrennte E-Mail-Adresse enthalten ist, falls das Attribut nicht vorhanden ist.

Wenn `multiple` auf dem {{HTMLElement("input/email", "email")}} Eingabetyp gesetzt ist, kann der Benutzer null (wenn nicht auch [`required`](/de/docs/Web/HTML/Reference/Attributes/required)), eine oder mehrere durch Kommas getrennte E-Mail-Adressen eingeben.

```html
<input type="email" multiple name="emails" id="emails" />
```

Nur und nur wenn das `multiple` Attribut angegeben ist, kann der Wert eine Liste von korrekt gebildeten, durch Kommas getrennten E-Mail-Adressen sein. Jeder führende und nachfolgende Leerraum wird aus jeder Adresse in der Liste entfernt.

Wenn `multiple` auf dem {{HTMLElement("input/file", "file")}} Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen. Der Benutzer kann mehrere Dateien aus dem Dateiauswahlfenster auf jede Weise auswählen, die seine gewählte Plattform erlaubt (z.B. durch Halten von <kbd>Shift</kbd> oder <kbd>Control</kbd> und dann Klicken).

```html
<input type="file" multiple name="uploads" id="uploads" />
```

Wenn das Attribut weggelassen wird, kann der Benutzer nur eine einzelne Datei pro `<input>` auswählen.

Das `multiple` Attribut auf dem {{HTMLElement("select")}} Element stellt eine Kontrolle für die Auswahl von null oder mehr Optionen aus der Liste der Optionen dar. Andernfalls stellt das {{HTMLElement("select")}} Element eine Kontrolle für die Auswahl einer einzelnen {{HTMLElement("option")}} aus der Liste der Optionen dar.

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

Wenn `multiple` angegeben ist, zeigen die meisten Browser ein Scroll-Listenfeld anstelle eines einzeiligen Dropdowns an.

Mehrere ausgewählte Optionen werden unter Verwendung des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Array-Konvention übermittelt, d.h. `name=value1&name=value2`.

## Barrierefreiheitsbedenken

Geben Sie Anweisungen, um Benutzern zu helfen, das Formular auszufüllen und einzelne Formularelemente zu verwenden. Geben Sie erforderliche und optionale Eingaben, Datenformate und andere relevante Informationen an. Wenn Sie das `multiple` Attribut verwenden, informieren Sie den Benutzer, dass mehrere Werte zulässig sind, und geben Sie Anweisungen, wie mehrere Werte bereitgestellt werden können, zum Beispiel "E-Mail-Adressen mit einem Komma trennen."

Das Setzen von `size="1"` auf einem mehrfachen Auswahlfeld kann es in einigen Browsern als Einzelwahl erscheinen lassen. Es wird jedoch nicht bei Fokus erweitert, was die Benutzerfreundlichkeit beeinträchtigt. Tun Sie das nicht. Wenn Sie das Erscheinungsbild eines Auswahlfelds ändern, und selbst wenn nicht, stellen Sie sicher, dass Sie den Benutzer informieren, dass mehr als eine Option auf eine andere Weise ausgewählt werden kann.

## Beispiele

### email input

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

Nur und nur wenn das `multiple` Attribut angegeben ist, kann der Wert eine Liste von korrekt gebildeten, durch Kommas getrennten E-Mail-Adressen sein. Jeder führende und nachfolgende Leerraum wird aus jeder Adresse in der Liste entfernt. Wenn das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) Attribut vorhanden ist, ist mindestens eine E-Mail-Adresse erforderlich.

Einige Browser unterstützen das Erscheinungsbild der [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) von Optionen aus der zugeordneten {{htmlelement('datalist')}}, wenn `multiple` vorhanden ist. Andere nicht.

{{EmbedLiveSample("email_input", 600, 80) }}

### file input

Wenn `multiple` auf dem {{HTMLElement("input/file", "file")}} Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen:

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

Beachten Sie den Unterschied im Erscheinungsbild zwischen dem Beispiel mit gesetztem `multiple` und dem anderen `file` Eingabeelement ohne.

Wenn das Formular gesendet wird, hätten wir beim Verwenden von [`method="get"`](/de/docs/Web/HTML/Reference/Elements/form) die Namen der ausgewählten Dateien als URL-Parameter wie `?uploads=img1.jpg&uploads=img2.svg` hinzugefügt. Da wir jedoch mehrteilige Formulardaten übermitteln, müssen wir POST verwenden. Siehe das {{htmlelement('form')}} Element und [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_method_attribute) für weitere Informationen.

### select

Das `multiple` Attribut auf dem {{HTMLElement("select")}} Element stellt eine Kontrolle für die Auswahl von null oder mehr Optionen aus der Liste der Optionen dar. Andernfalls stellt das {{HTMLElement("select")}} Element eine Kontrolle für die Auswahl einer einzelnen {{HTMLElement("option")}} aus der Liste dar. Die Kontrolle hat im Allgemeinen ein anderes Erscheinungsbild, basierend auf der Anwesenheit des multiple Attributs, wobei die meisten Browser ein Scroll-Listenfeld anstelle eines einzeiligen Dropdown-Menüs anzeigen, wenn das Attribut vorhanden ist.

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

Es gibt einige Möglichkeiten, mehrere Optionen in einem `<select>` Element mit einem `multiple` Attribut auszuwählen. Abhängig vom Betriebssystem können Mausbenutzer die <kbd>Strg</kbd>, <kbd>Befehl</kbd> oder <kbd>Umschalt</kbd> Tasten gedrückt halten und dann mehrere Optionen anklicken, um diese auszuwählen/abzuwählen. Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie sich auf das `<select>` Element fokussieren, ein Element am oberen oder unteren Rand des gewünschten Bereichs auswählen und die <kbd>Auf</kbd> und <kbd>Ab</kbd> Cursor-Tasten verwenden, um die Optionen hoch und runter zu navigieren. Die Auswahl von nicht zusammenhängenden Elementen wird nicht so gut unterstützt: Elemente sollten durch Drücken der <kbd>Leertaste</kbd> ausgewählt und abgewählt werden können, aber die Unterstützung variiert zwischen den Browsern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [Mehrere E-Mail-Adressen zulassen](/de/docs/Web/HTML/Reference/Elements/input/email#allowing_multiple_email_addresses)
