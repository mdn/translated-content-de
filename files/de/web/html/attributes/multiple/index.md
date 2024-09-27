---
title: "HTML-Attribut: multiple"
short-title: multiple
slug: Web/HTML/Attributes/multiple
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{HTMLSidebar}}

Das Boolesche **`multiple`**-Attribut, falls gesetzt, bedeutet, dass das Formularelement einen oder mehrere Werte akzeptiert. Das Attribut ist gültig für die {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetypen sowie das {{HTMLElement("select")}}. Die Art und Weise, wie der Benutzer mehrere Werte auswählt, hängt vom Formularelement ab.

{{EmbedInteractiveExample("pages/tabbed/attribute-multiple.html", "tabbed-standard")}}

## Überblick

Je nach Typ kann das Formularelement ein unterschiedliches Erscheinungsbild haben, wenn das `multiple`-Attribut gesetzt ist. Bei dem Dateieingabetyp unterscheidet sich die native Meldung, die der Browser anzeigt. In Firefox zeigt die Dateieingabe "Keine Dateien ausgewählt" an, wenn das Attribut vorhanden ist, und "Keine Datei ausgewählt", wenn es nicht vorhanden ist. Die meisten Browser zeigen eine scrollbare Liste für ein {{HTMLElement("select")}}-Element mit gesetztem `multiple`-Attribut und ein einzeiliges Dropdown an, wenn das Attribut fehlt. Die {{HTMLElement("input/email", "email")}}-Eingabe zeigt dasselbe an, unabhängig davon, ob das `multiple`-Attribut enthalten ist oder nicht, wird jedoch die {{cssxref(':invalid')}} Pseudo-Klasse zutreffen, wenn mehr als eine durch Komma getrennte E-Mail-Adresse enthalten ist und das Attribut nicht vorhanden ist.

Wenn `multiple` beim {{HTMLElement("input/email", "email")}} Eingabetyp gesetzt wird, kann der Benutzer null (sofern nicht auch [`required`](/de/docs/Web/HTML/Attributes/required) gesetzt ist), eine oder mehrere durch Kommas getrennte E-Mail-Adressen angeben.

```html
<input type="email" multiple name="emails" id="emails" />
```

Nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste von richtig formatierten, durch Kommas getrennten E-Mail-Adressen sein. Jeglicher führender und nachfolgender Leerraum wird aus jeder Adresse in der Liste entfernt.

Wenn `multiple` beim {{HTMLElement("input/file", "file")}} Eingabetyp gesetzt wird, kann der Benutzer eine oder mehrere Dateien auswählen. Der Benutzer kann mehrere Dateien aus dem Dateiauswahlmenü auf jede Weise auswählen, die sein gewähltes System ermöglicht (z. B. durch Halten der <kbd>Shift</kbd>- oder <kbd>Control</kbd>-Taste und Klicken).

```html
<input type="file" multiple name="uploads" id="uploads" />
```

Wenn das Attribut weggelassen wird, kann der Benutzer nur eine einzelne Datei pro `<input>` auswählen.

Das `multiple`-Attribut im {{HTMLElement("select")}}-Element repräsentiert ein Steuerungselement zum Auswählen von null oder mehr Optionen aus der Optionsliste. Andernfalls repräsentiert das {{HTMLElement("select")}}-Element ein Steuerungselement zum Auswählen einer einzelnen {{HTMLElement("option")}} aus der Optionsliste.

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

Wenn `multiple` angegeben ist, zeigen die meisten Browser eine scrollbare Listbox anstelle eines einzeiligen Dropdowns an.

## Barrierefreiheitsbedenken

Geben Sie Anweisungen, die den Benutzern helfen, das Formular auszufüllen und die einzelnen Formularelemente zu verwenden. Geben Sie an, welche Eingaben erforderlich und optional sind, Datenformate und andere relevante Informationen. Wenn Sie das `multiple`-Attribut verwenden, informieren Sie den Benutzer darüber, dass mehrere Werte erlaubt sind und geben Sie Anweisungen, wie mehrere Werte eingegeben werden sollen, wie z. B. "E-Mail-Adressen durch Kommas trennen."

Das Setzen von `size="1"` auf einem multiple select kann es in einigen Browsern wie ein einzelnes Select erscheinen lassen, aber es erweitert sich dann nicht beim Fokus, was die Benutzerfreundlichkeit beeinträchtigt. Machen Sie das nicht. Selbst wenn Sie das Erscheinungsbild eines selects ändern, und auch wenn Sie das nicht tun, stellen Sie sicher, dass Sie den Benutzer informieren, dass mehr als eine Option durch eine andere Methode ausgewählt werden kann.

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

Nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste von richtig formatierten, durch Kommas getrennten E-Mail-Adressen sein. Jeglicher führender und nachfolgender Leerraum wird aus jeder Adresse in der Liste entfernt. Wenn das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut vorhanden ist, ist mindestens eine E-Mail-Adresse erforderlich.

Einige Browser unterstützen das Erscheinen der [`list`](/de/docs/Web/HTML/Element/input#list) von Optionen aus der zugehörigen {{htmlelement('datalist')}} für nachfolgende E-Mail-Adressen, wenn `multiple` vorhanden ist. Andere tun dies nicht.

{{EmbedLiveSample("email_input", 600, 80) }}

### Datei-Eingabe

Wenn `multiple` beim {{HTMLElement("input/file", "file")}} Eingabetyp gesetzt wird, kann der Benutzer eine oder mehrere Dateien auswählen:

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

Beachten Sie den Unterschied im Erscheinungsbild zwischen dem Beispiel mit gesetztem `multiple` und der anderen Datei-Eingabe ohne.

Wenn das Formular gesendet wird, hätten die Namen der ausgewählten Dateien, falls wir [`method="get"`](/de/docs/Web/HTML/Element/form) verwendet hätten, als `?uploads=img1.jpg&uploads=img2.svg` zu den URL-Parametern hinzugefügt werden können. Da wir jedoch mehrteilige Formulardaten übermitteln, müssen wir post verwenden. Siehe das {{htmlelement('form')}}-Element und [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data#the_method_attribute) für weitere Informationen.

### Auswahl

Das `multiple`-Attribut im {{HTMLElement("select")}}-Element repräsentiert ein Steuerungselement zum Auswählen von null oder mehr Optionen aus der Optionsliste. Andernfalls repräsentiert das {{HTMLElement("select")}}-Element ein Steuerungselement zum Auswählen einer einzigen {{HTMLElement("option")}} aus der Optionsliste. Das Steuerungselement hat im Allgemeinen ein anderes Erscheinungsbild, abhängig vom Vorhandensein des multiple-Attributs, wobei die meisten Browser eine scrollbare Listbox anstelle eines einzeiligen Dropdowns anzeigen, wenn das Attribut vorhanden ist.

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

Es gibt mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen. Abhängig vom Betriebssystem können Mausbenutzer die <kbd>Ctrl</kbd>-, <kbd>Command</kbd>- oder <kbd>Shift</kbd>-Taste halten und dann mehrere Optionen anklicken, um sie auszuwählen/abwählen. Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie das `<select>`-Element fokussieren, ein Element am oberen oder unteren Ende des Bereichs auswählen, den sie auswählen möchten, und die <kbd>Pfeil hoch</kbd> und <kbd>Pfeil runter</kbd> Tasten verwenden, um durch die Optionen zu navigieren. Die Auswahl von nicht zusammenhängenden Elementen wird nicht so gut unterstützt: Elemente sollten ausgewählt und deselektiert werden können, indem die <kbd>Leertaste</kbd> gedrückt wird, aber die Unterstützung variiert je nach Browser.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [Erlauben mehrerer E-Mail-Adressen](/de/docs/Web/HTML/Element/input/email#allowing_multiple_email_addresses)
