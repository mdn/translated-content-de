---
title: "HTML-Attribut: multiple"
short-title: multiple
slug: Web/HTML/Attributes/multiple
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{HTMLSidebar}}

Das Boolesche **`multiple`**-Attribut, wenn gesetzt, bedeutet, dass das Formularfeld einen oder mehrere Werte akzeptiert. Das Attribut ist gültig für die {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetypen sowie für das {{HTMLElement("select")}}. Die Art und Weise, wie der Benutzer mehrere Werte wählt, hängt vom Formularfeld ab.

{{EmbedInteractiveExample("pages/tabbed/attribute-multiple.html", "tabbed-standard")}}

## Übersicht

Je nach Typ kann das Formularfeld ein anderes Aussehen haben, wenn das `multiple`-Attribut gesetzt ist. Für den Datei-Eingabetyp unterscheidet sich die native Messaging-Funktion, die der Browser bereitstellt. In Firefox liest der Dateieingang "Keine Dateien ausgewählt", wenn das Attribut vorhanden ist, und "Keine Datei ausgewählt", wenn es nicht vorhanden ist. Die meisten Browser zeigen ein scrollfähiges Listenfeld für ein {{HTMLElement("select")}}-Steuerelement mit gesetztem `multiple`-Attribut und ein einziges Dropdown-Menü, wenn das Attribut weggelassen wird. Der {{HTMLElement("input/email", "email")}}-Eingang zeigt dasselbe, unabhängig davon, ob das `multiple`-Attribut eingeschlossen ist oder nicht, er wird jedoch die {{cssxref(':invalid')}}-Pseudoklasse erfüllen, wenn mehr als eine durch Komma getrennte E-Mail-Adresse enthalten ist, falls das Attribut nicht vorhanden ist.

Wenn `multiple` auf dem {{HTMLElement("input/email", "email")}}-Eingabetyp gesetzt ist, kann der Benutzer null (wenn nicht auch [`required`](/de/docs/Web/HTML/Attributes/required)), eine oder mehrere durch Komma getrennte E-Mail-Adressen einschließen.

```html
<input type="email" multiple name="emails" id="emails" />
```

Nur wenn das `multiple`-Attribut spezifiziert ist, kann der Wert eine Liste von korrekt geformten, durch Komma getrennten E-Mail-Adressen sein. Jegliche führende und nachfolgende Leerzeichen werden von jeder Adresse in der Liste entfernt.

Wenn `multiple` auf dem {{HTMLElement("input/file", "file")}}-Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen. Der Benutzer kann über den Dateiauswahldialog mehrere Dateien auf jede ihm zur Verfügung stehende Weise auswählen (z.B. durch Halten der <kbd>Shift</kbd> oder <kbd>Control</kbd>-Taste und Klicken).

```html
<input type="file" multiple name="uploads" id="uploads" />
```

Wenn das Attribut weggelassen wird, kann der Benutzer nur eine einzelne Datei pro `<input>` auswählen.

Das `multiple`-Attribut auf dem {{HTMLElement("select")}}-Element repräsentiert ein Steuerelement zur Auswahl von null oder mehr Optionen aus der Liste der Optionen. Andernfalls repräsentiert das {{HTMLElement("select")}}-Element ein Steuerelement zur Auswahl einer einzelnen {{HTMLElement("option")}} aus der Liste der Optionen.

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

Wenn `multiple` angegeben ist, zeigen die meisten Browser ein scrollbares Listenfeld anstelle eines einzeiligen Dropdowns an.

## Barrierefreiheit

Geben Sie Anweisungen, um den Benutzern zu helfen, das Formular und die einzelnen Formularfelder auszufüllen. Geben Sie an, welche Eingaben erforderlich sind und welche optional, Formate der Daten und andere relevante Informationen. Wenn Sie das `multiple`-Attribut verwenden, informieren Sie den Benutzer darüber, dass mehrere Werte erlaubt sind, und geben Sie Anweisungen, wie man mehrere Werte angibt, z.B. "Trennen Sie E-Mail-Adressen mit einem Komma."

Wenn Sie `size="1"` auf einem Mehrfachauswahl-Select setzen, kann es in einigen Browsern wie ein einfaches Select erscheinen, erweitert sich jedoch nicht bei Fokus, was die Benutzerfreundlichkeit beeinträchtigt. Tun Sie dies nicht. Wenn Sie das Aussehen eines Selects ändern und auch wenn nicht, stellen Sie sicher, dass Sie den Benutzer informieren, dass mehr als eine Option durch eine andere Methode ausgewählt werden kann.

## Beispiele

### email input

```html
<label for="emails">Wen möchten Sie per E-Mail kontaktieren?</label>
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

Nur wenn das `multiple`-Attribut spezifiziert ist, kann der Wert eine Liste von korrekt geformten, durch Komma getrennten E-Mail-Adressen sein. Jegliche führende und nachfolgende Leerzeichen werden von jeder Adresse in der Liste entfernt. Wenn das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut vorhanden ist, ist mindestens eine E-Mail-Adresse erforderlich.

Einige Browser unterstützen das Erscheinen der [`list`](/de/docs/Web/HTML/Element/input#list) von Optionen aus der zugehörigen {{htmlelement('datalist')}}, wenn `multiple` vorhanden ist. Andere nicht.

{{EmbedLiveSample("email_input", 600, 80) }}

### file input

Wenn `multiple` auf dem {{HTMLElement("input/file", "file")}}-Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen:

```html
<form method="post" enctype="multipart/form-data">
  <p>
    <label for="uploads"> Wählen Sie die Bilder, die Sie hochladen möchten: </label>
    <input
      type="file"
      id="uploads"
      name="uploads"
      accept=".jpg, .jpeg, .png, .svg, .gif"
      multiple />
  </p>
  <p>
    <label for="text">Wählen Sie eine Textdatei zum Hochladen: </label>
    <input type="file" id="text" name="text" accept=".txt" />
  </p>
  <p>
    <input type="submit" value="Absenden" />
  </p>
</form>
```

{{EmbedLiveSample("file_input", 600, 80) }}

Beachten Sie den Unterschied im Aussehen zwischen dem Beispiel mit gesetztem `multiple` und dem anderen Datei-Eingabefeld ohne.

Beim Absenden des Formulars, hätten wir [`method="get"`](/de/docs/Web/HTML/Element/form) verwendet, wären die Namen der ausgewählten Dateien zu den URL-Parametern als `?uploads=img1.jpg&uploads=img2.svg` hinzugefügt worden. Da wir jedoch Multipart-Formulardaten einreichen, müssen wir POST verwenden. Weitere Informationen finden Sie im {{htmlelement('form')}}-Element und im Artikel [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data#the_method_attribute).

### select

Das `multiple`-Attribut auf dem {{HTMLElement("select")}}-Element repräsentiert ein Steuerelement zur Auswahl von null oder mehr Optionen aus der Liste der Optionen. Andernfalls repräsentiert das {{HTMLElement("select")}}-Element ein Steuerelement zur Auswahl einer einzelnen {{HTMLElement("option")}} aus der Liste der Optionen. Das Steuerelement hat normalerweise ein anderes Aussehen basierend auf der Anwesenheit des multiple-Attributs, wobei die meisten Browser ein scrollfähiges Listenfeld anstelle eines einzeiligen Dropdowns anzeigen, wenn das Attribut vorhanden ist.

```html
<form method="get" action="#">
  <p>
    <label for="dwarfs">Wählen Sie den Zwergarbeiter, den Sie mögen:</label>
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
    <label for="favoriteOnly">Wählen Sie Ihren Favoriten:</label>
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
    <input type="submit" value="Absenden" />
  </p>
</form>
```

{{EmbedLiveSample("select", 600, 120) }}

Achten Sie auf den Unterschied im Aussehen zwischen den beiden Formularsteuerelementen.

```css
/* entfernen Sie diesen Kommentar, um die Mehrfachauswahl auf die Höhe der Einzelauswahl anzupassen */

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

Es gibt einige Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut auszuwählen. Je nach Betriebssystem können Mausbenutzer die <kbd>Strg</kbd>, <kbd>Befehl</kbd> oder <kbd>Umschalttaste</kbd> halten und dann auf mehrere Optionen klicken, um sie auszuwählen/abzuwählen. Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie das `<select>`-Element fokussieren, ein Element oben oder unten im Bereich auswählen, den sie auswählen möchten, und mit den <kbd>Aufwärts</kbd> und <kbd>Abwärts</kbd>-Pfeiltasten nach oben und unten durch die Optionen navigieren. Die Auswahl nicht zusammenhängender Elemente wird nicht so gut unterstützt: Elemente sollten durch Drücken der <kbd>Leertaste</kbd> ausgewählt und abgewählt werden können, aber die Unterstützung variiert zwischen den Browsern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [Erlauben mehrerer E-Mail-Adressen](/de/docs/Web/HTML/Element/input/email#allowing_multiple_email_addresses)
