---
title: "HTML-Attribut: multiple"
short-title: multiple
slug: Web/HTML/Reference/Attributes/multiple
l10n:
  sourceCommit: 7fdf1972da2094ecf91427a578685670c2fbdb17
---

Das boolesche **`multiple`** Attribut, wenn gesetzt, bedeutet, dass das Formularelement ein oder mehrere Werte akzeptiert. Das Attribut ist gültig für die {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/file", "file")}}-Eingabetypen sowie für das {{HTMLElement("select")}}. Die Art und Weise, wie der Benutzer mehrere Werte auswählt, hängt vom Formularelement ab.

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

Je nach Typ kann das Formularelement ein anderes Aussehen haben, wenn das `multiple`-Attribut gesetzt ist. Für den Datei-Eingabetyp unterscheidet sich die native Anzeige, die der Browser bereitstellt. In Firefox liest der Datei-Eingabetyp "Keine Dateien ausgewählt", wenn das Attribut vorhanden ist, und "Keine Datei ausgewählt", wenn es nicht vorhanden ist. Die meisten Browser zeigen eine scrollbare Liste für ein {{HTMLElement("select")}}-Element mit gesetztem `multiple`-Attribut an und einen einfachen Dropdown, wenn das Attribut weggelassen wird. Das {{HTMLElement("input/email", "email")}}-Element zeigt dasselbe an, unabhängig davon, ob das `multiple`-Attribut enthalten ist oder nicht, wird jedoch der {{cssxref(':invalid')}} Pseudo-Klasse entsprechen, wenn mehr als eine durch Kommas getrennte E-Mail-Adresse enthalten ist, wenn das Attribut nicht vorhanden ist.

Wenn das `multiple`-Attribut auf dem {{HTMLElement("input/email", "email")}}-Eingabetyp gesetzt ist, kann der Benutzer null (wenn nicht auch [`required`](/de/docs/Web/HTML/Reference/Attributes/required)), eine oder mehrere durch Kommas getrennte E-Mail-Adressen eingeben.

```html
<input type="email" multiple name="emails" id="emails" />
```

Nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste von korrekt formatierten, durch Kommas getrennten E-Mail-Adressen sein. Jeglicher führende und nachfolgende Leerraum wird aus jeder Adresse in der Liste entfernt.

Wenn das `multiple`-Attribut auf dem {{HTMLElement("input/file", "file")}}-Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen. Der Benutzer kann mehrere Dateien aus dem Dateiauswahlmenü auf jede von der ausgewählten Plattform erlaubte Weise wählen (z.B. durch Halten der <kbd>Shift</kbd>- oder <kbd>Steuerung</kbd>-Taste und anschließendes Klicken).

```html
<input type="file" multiple name="uploads" id="uploads" />
```

Wenn das Attribut weggelassen wird, kann der Benutzer nur eine einzelne Datei pro `<input>` auswählen.

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

Wenn `multiple` angegeben ist, zeigen die meisten Browser eine scrollbare Liste anstelle eines einzeiligen Dropdowns an.

Mehrfach ausgewählte Optionen werden unter Verwendung der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Array-Konvention, d.h. `name=value1&name=value2`, übermittelt.

## Barrierefreiheit

Geben Sie Anweisungen, die den Benutzern helfen zu verstehen, wie sie das Formular ausfüllen und die einzelnen Formularelemente verwenden können. Weisen Sie auf benötigte und optionale Eingaben, Datenformate und andere relevante Informationen hin. Wenn das `multiple`-Attribut verwendet wird, informieren Sie den Benutzer, dass mehrere Werte erlaubt sind, und geben Sie Anweisungen, wie mehrere Werte eingegeben werden können, zum Beispiel: "Trennen Sie E-Mail-Adressen mit einem Komma".

Das Festlegen von `size="1"` auf einem Mehrfachauswahl kann es in einigen Browsern wie eine Einzelauswahl aussehen lassen, aber dann wird es nicht bei Fokussierung erweitert, was die Benutzerfreundlichkeit beeinträchtigt. Tun Sie das nicht. Wenn Sie das Aussehen einer Auswahl ändern oder auch nicht, stellen Sie sicher, dass der Benutzer weiß, dass mehr als eine Option ausgewählt werden kann, indem eine andere Methode verwendet wird.

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

Nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste von korrekt formatierten, durch Kommas getrennten E-Mail-Adressen sein. Jeglicher führende und nachfolgende Leerraum wird aus jeder Adresse in der Liste entfernt. Wenn das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut vorhanden ist, wird mindestens eine E-Mail-Adresse benötigt.

Einige Browser unterstützen das Erscheinungsbild der [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) von Optionen aus der zugehörigen {{htmlelement('datalist')}} für nachfolgende E-Mail-Adressen, wenn `multiple` vorhanden ist. Andere nicht.

{{EmbedLiveSample("email_input", 600, 80) }}

### Datei-Eingabe

Wenn das `multiple`-Attribut auf dem {{HTMLElement("input/file", "file")}}-Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen:

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

Beachten Sie den Unterschied im Aussehen zwischen dem Beispiel mit gesetztem `multiple` und dem anderen Datei-Input ohne.

Wenn das Formular übermittelt wird, hätten wir [`method="get"`](/de/docs/Web/HTML/Reference/Elements/form) verwendet, wäre jeder ausgewählte Dateiname den URL-Parametern als `?uploads=img1.jpg&uploads=img2.svg` hinzugefügt worden. Da wir jedoch Multipart-Formulardaten übermitteln, müssen wir `post` verwenden. Weitere Informationen finden Sie im {{htmlelement('form')}}-Element und [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_method_attribute).

### Auswahl

Das `multiple`-Attribut auf dem {{HTMLElement("select")}}-Element stellt eine Steuerung zum Auswählen von null oder mehr Optionen aus der Liste der Optionen dar. Andernfalls stellt das {{HTMLElement("select")}}-Element eine Steuerung zum Auswählen einer einzigen {{HTMLElement("option")}} aus der Liste der Optionen dar. Die Steuerung hat normalerweise ein anderes Erscheinungsbild basierend auf dem Vorhandensein des `multiple`-Attributs, wobei die meisten Browser eine scrollbare Liste anstelle eines einzeiligen Dropdown-Menüs anzeigen, wenn das Attribut vorhanden ist.

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

Es gibt einige Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen. Je nach Betriebssystem können Mausbenutzer die <kbd>Strg</kbd>, <kbd>Befehl</kbd> oder <kbd>Shift</kbd>-Tasten halten und dann mehrere Optionen durch Klicken auswählen/abwählen. Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie das `<select>`-Element fokussieren, ein Element am oberen oder unteren Ende des Bereichs, den sie auswählen möchten, auswählen und die <kbd>Auf</kbd>- und <kbd>Ab</kbd>-Pfeiltasten verwenden, um die Optionen nach oben und unten zu bewegen. Die Auswahl von nicht zusammenhängenden Elementen wird weniger gut unterstützt: Elemente sollten durch Drücken von <kbd>Leertaste</kbd> ausgewählt und abgewählt werden können, aber die Unterstützung variiert zwischen den Browsern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [Erlauben mehrerer E-Mail-Adressen](/de/docs/Web/HTML/Reference/Elements/input/email#allowing_multiple_email_addresses)
