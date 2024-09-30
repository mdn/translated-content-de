---
title: "HTML-Attribut: multiple"
short-title: multiple
slug: Web/HTML/Attributes/multiple
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{HTMLSidebar}}

Das boolesche **`multiple`**-Attribut gibt an, dass das Formular-Steuerelement ein oder mehrere Werte akzeptiert. Das Attribut ist gültig für die {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/file", "file")}}-Eingabetypen sowie das {{HTMLElement("select")}}. Die Art und Weise, wie der Benutzer mehrere Werte auswählt, hängt vom Formular-Steuerelement ab.

{{EmbedInteractiveExample("pages/tabbed/attribute-multiple.html", "tabbed-standard")}}

## Übersicht

Je nach Typ kann das Formular-Steuerelement ein unterschiedliches Erscheinungsbild haben, wenn das `multiple`-Attribut gesetzt ist. Für den Datei-Eingabetyp unterscheidet sich die native Meldung, die der Browser bereitstellt. In Firefox liest der Datei-Eingabetyp "Keine Dateien ausgewählt", wenn das Attribut vorhanden ist, und "Keine Datei ausgewählt", wenn nicht. Die meisten Browser zeigen eine scrollende Listbox für ein {{HTMLElement("select")}}-Steuerelement mit gesetztem `multiple`-Attribut an und ein Dropdown-Menü mit einer Zeile, wenn das Attribut weggelassen wird. Das {{HTMLElement("input/email", "email")}}-Eingabefeld zeigt dasselbe an, unabhängig davon, ob das `multiple`-Attribut enthalten ist oder nicht, aber es entspricht der {{cssxref(':invalid')}}-Pseudoklasse, wenn mehr als eine durch Kommas getrennte E-Mail-Adresse enthalten ist, falls das Attribut nicht vorhanden ist.

Wenn `multiple` auf dem {{HTMLElement("input/email", "email")}}-Eingabetyp gesetzt ist, kann der Benutzer null (falls nicht auch [`required`](/de/docs/Web/HTML/Attributes/required)), eine oder mehrere durch Kommas getrennte E-Mail-Adressen angeben.

```html
<input type="email" multiple name="emails" id="emails" />
```

Nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste von korrekt geformten, durch Kommas getrennten E-Mail-Adressen sein. Jegliche führenden und nachgestellten Leerzeichen werden aus jeder Adresse in der Liste entfernt.

Wenn `multiple` auf dem {{HTMLElement("input/file", "file")}}-Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen. Der Benutzer kann mehrere Dateien aus dem Dateiauswähler auf jede Weise auswählen, die seine gewählte Plattform ermöglicht (z. B. durch Halten der <kbd>Shift</kbd>- oder <kbd>Control</kbd>-Taste und Klicken).

```html
<input type="file" multiple name="uploads" id="uploads" />
```

Wenn das Attribut weggelassen wird, kann der Benutzer nur eine einzelne Datei pro `<input>` auswählen.

Das `multiple`-Attribut des {{HTMLElement("select")}}-Elements repräsentiert eine Kontrolle zur Auswahl von null oder mehr Optionen aus der Liste der Optionen. Andernfalls repräsentiert das {{HTMLElement("select")}}-Element eine Kontrolle zur Auswahl einer einzelnen {{HTMLElement("option")}} aus der Liste der Optionen.

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

Wenn `multiple` angegeben ist, zeigen die meisten Browser eine scrollende Listbox statt eines Dropdowns mit einer einzelnen Zeile an.

## Barrierefreiheit

Geben Sie Anweisungen, die Benutzern helfen, das Formular auszufüllen und einzelne Formular-Steuerelemente zu verwenden. Geben Sie jegliche erforderlichen und optionalen Eingaben, Datenformate und andere relevante Informationen an. Wenn Sie das `multiple`-Attribut verwenden, informieren Sie den Benutzer darüber, dass mehrere Werte erlaubt sind, und geben Sie Anweisungen, wie er mehrere Werte angeben kann, z.B. "Trennen Sie E-Mail-Adressen mit einem Komma."

Das Setzen von `size="1"` bei einem Mehrfach-Auswahlfeld kann es in einigen Browsern wie ein Einzelauswahlfeld erscheinen lassen, aber es entfaltet sich dann nicht bei Fokus, was die Benutzerfreundlichkeit beeinträchtigt. Tun Sie das nicht. Auch wenn Sie das Aussehen eines Auswahlfelds ändern, und selbst wenn es nicht so ist, stellen Sie sicher, dass Sie dem Benutzer mitteilen, dass mehr als eine Option durch eine andere Methode ausgewählt werden kann.

## Beispiele

### E-Mail-Eingabefeld

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

Nur wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste von korrekt geformten, durch Kommas getrennten E-Mail-Adressen sein. Jegliche führenden und nachgestellten Leerzeichen werden aus jeder Adresse in der Liste entfernt. Wenn das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut vorhanden ist, ist mindestens eine E-Mail-Adresse erforderlich.

Einige Browser unterstützen das Aussehen der [`list`](/de/docs/Web/HTML/Element/input#list)-Optionen aus der zugeordneten {{htmlelement('datalist')}} für nachfolgende E-Mail-Adressen, wenn `multiple` vorhanden ist. Andere tun dies nicht.

{{EmbedLiveSample("email_input", 600, 80)}}

### Datei-Eingabefeld

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

{{EmbedLiveSample("file_input", 600, 80)}}

Beachten Sie den Unterschied im Aussehen zwischen dem Beispiel mit gesetztem `multiple` und dem anderen `file` Eingabefeld ohne.

Wenn das Formular gesendet wird, hätten wir bei Verwendung von [`method="get"`](/de/docs/Web/HTML/Element/form) den Namen jeder ausgewählten Datei zu den URL-Parametern als `?uploads=img1.jpg&uploads=img2.svg` hinzugefügt. Da wir jedoch mehrteilige Formulardaten senden, müssen wir `post` verwenden. Weitere Informationen finden Sie im {{htmlelement('form')}}-Element und [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data#the_method_attribute).

### Auswahl

Das `multiple`-Attribut des {{HTMLElement("select")}}-Elements repräsentiert eine Kontrolle zur Auswahl von null oder mehr Optionen aus der Liste der Optionen. Andernfalls repräsentiert das {{HTMLElement("select")}}-Element eine Kontrolle zur Auswahl einer einzelnen {{HTMLElement("option")}} aus der Liste der Optionen. Das Steuerelement hat im Allgemeinen ein unterschiedliches Aussehen basierend auf dem Vorhandensein des `multiple`-Attributs, wobei die meisten Browser eine scrollende Listbox statt eines Dropdowns mit einer einzelnen Zeile anzeigen, wenn das Attribut vorhanden ist.

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

{{EmbedLiveSample("select", 600, 120)}}

Beachten Sie den Unterschied im Aussehen zwischen den beiden Formular-Steuerelementen.

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

Es gibt einige Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit `multiple`-Attribut auszuwählen. Je nach Betriebssystem können Mausbenutzer die <kbd>Ctrl</kbd>, <kbd>Command</kbd> oder <kbd>Shift</kbd>-Tasten gedrückt halten und dann mehrere Optionen anklicken, um sie auszuwählen oder abzuwählen. Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie das `<select>`-Element fokussieren, ein Element am oberen oder unteren Ende des Bereichs auswählen, den sie auswählen möchten, und die <kbd>Pfeil nach oben</kbd>- und <kbd>Pfeil nach unten</kbd>-Tasten verwenden, um die Optionen nach oben und unten zu navigieren. Die Auswahl von nicht zusammenhängenden Optionen wird nicht so gut unterstützt: Elemente sollten durch Drücken der <kbd>Leertaste</kbd> ausgewählt und abgewählt werden können, aber die Unterstützung variiert zwischen Browsern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [Mehrere E-Mail-Adressen zulassen](/de/docs/Web/HTML/Element/input/email#allowing_multiple_email_addresses)
