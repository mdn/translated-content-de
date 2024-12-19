---
title: "HTML-Attribut: multiple"
short-title: multiple
slug: Web/HTML/Attributes/multiple
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das Boolean-Attribut **`multiple`** bedeutet, wenn es gesetzt ist, dass die Formulareingabe ein oder mehrere Werte akzeptiert. Das Attribut ist gültig für die {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/file", "file")}}-Eingabetypen sowie das {{HTMLElement("select")}}. Die Art und Weise, wie der Benutzer mehrere Werte auswählt, hängt vom Formularelement ab.

{{EmbedInteractiveExample("pages/tabbed/attribute-multiple.html", "tabbed-standard")}}

## Übersicht

Abhängig vom Typ kann das Formularelement ein unterschiedliches Erscheinungsbild haben, wenn das `multiple`-Attribut gesetzt ist. Für den Datei-Input-Typ unterscheidet sich die native Meldung, die der Browser anzeigt. In Firefox liest der Datei-Input "Keine Dateien ausgewählt", wenn das Attribut vorhanden ist, und "Keine Datei ausgewählt", wenn es nicht vorhanden ist. Die meisten Browser zeigen eine scrollbare Listenbox für ein {{HTMLElement("select")}}-Element an, wenn das `multiple`-Attribut gesetzt ist, und ein einzeiliges Dropdown-Menü, wenn das Attribut weggelassen wird. Das {{HTMLElement("input/email", "email")}}-Eingabefeld zeigt unabhängig davon, ob das `multiple`-Attribut enthalten ist oder nicht, dasselbe an, wird jedoch die {{cssxref(':invalid')}} Pseudoklasse treffen, wenn mehr als eine durch Kommas getrennte E-Mail-Adresse eingegeben wird, wenn das Attribut nicht vorhanden ist.

Wenn `multiple` beim {{HTMLElement("input/email", "email")}}-Eingabetyp gesetzt ist, kann der Benutzer null (wenn nicht auch [`required`](/de/docs/Web/HTML/Attributes/required) verwendet wird), eine oder mehrere durch Kommas getrennte E-Mail-Adressen angeben.

```html
<input type="email" multiple name="emails" id="emails" />
```

Nur und ausschließlich wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste von richtig formatierten durch Kommas getrennten E-Mail-Adressen sein. Jegliche führenden und abschließenden Leerzeichen werden von jeder Adresse in der Liste entfernt.

Wenn `multiple` beim {{HTMLElement("input/file", "file")}}-Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen. Der Benutzer kann mehrere Dateien aus dem Dateiauswahlfenster auf jede seiner Plattform erlaubte Art und Weise auswählen (z. B. durch Drücken von <kbd>Shift</kbd> oder <kbd>Control</kbd> und anschließendes Klicken).

```html
<input type="file" multiple name="uploads" id="uploads" />
```

Wenn das Attribut weggelassen wird, kann der Benutzer nur eine einzelne Datei pro `<input>` auswählen.

Das `multiple`-Attribut am {{HTMLElement("select")}}-Element stellt eine Steuerung für die Auswahl von null oder mehr Optionen aus der Liste der Optionen dar. Andernfalls stellt das {{HTMLElement("select")}}-Element eine Steuerung zur Auswahl einer einzigen {{HTMLElement("option")}} aus der Liste der Optionen dar.

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

Wenn `multiple` angegeben ist, zeigen die meisten Browser eine scrollbare Listenbox anstelle eines einzeiligen Dropdown-Menüs an.

## Barrierefreiheitsbedenken

Geben Sie Anleitungen, um Benutzern zu helfen, das Formular auszufüllen und einzelne Formularelemente zu verwenden. Geben Sie jede erforderliche und optionale Eingabe, Datenformate und andere relevante Informationen an. Wenn Sie das `multiple`-Attribut verwenden, informieren Sie den Benutzer, dass mehrere Werte erlaubt sind, und geben Sie Anweisungen, wie sie mehrere Werte angeben können, z. B. "trennen Sie E-Mail-Adressen durch ein Komma."

Das Setzen von `size="1"` bei einem mehrfachen Select kann es in einigen Browsern wie ein einfaches Select erscheinen lassen, aber dann erweitert es sich nicht bei Fokussierung, was die Benutzerfreundlichkeit beeinträchtigt. Tun Sie das nicht. Wenn Sie das Erscheinungsbild eines Select ändern, und selbst wenn Sie das nicht tun, stellen Sie sicher, dass Sie den Benutzer darüber informieren, dass mehr als eine Option auf eine andere Weise ausgewählt werden kann.

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

Nur und ausschließlich wenn das `multiple`-Attribut angegeben ist, kann der Wert eine Liste von richtig formatierten durch Kommas getrennten E-Mail-Adressen sein. Jegliche führenden und abschließenden Leerzeichen werden von jeder Adresse in der Liste entfernt. Wenn das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut vorhanden ist, ist mindestens eine E-Mail-Adresse erforderlich.

Einige Browser unterstützen das Erscheinungsbild der [`list`](/de/docs/Web/HTML/Element/input#list) der Optionen aus der zugehörigen {{htmlelement('datalist')}} für nachfolgende E-Mail-Adressen, wenn `multiple` vorhanden ist. Andere tun dies nicht.

{{EmbedLiveSample("email_input", 600, 80) }}

### Datei-Eingabe

Wenn `multiple` beim {{HTMLElement("input/file", "file")}}-Eingabetyp gesetzt ist, kann der Benutzer eine oder mehrere Dateien auswählen:

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

Beachten Sie den Unterschied im Erscheinungsbild zwischen dem Beispiel mit gesetztem `multiple` und dem anderen Datei-Input ohne.

Wenn das Formular gesendet wird, würden bei Verwendung von [`method="get"`](/de/docs/Web/HTML/Element/form) die Namen der ausgewählten Dateien als URL-Parameter wie `?uploads=img1.jpg&uploads=img2.svg` hinzugefügt worden sein. Da wir jedoch mehrteilige Formulardaten übermitteln, müssen wir post verwenden. Siehe das {{htmlelement('form')}}-Element und [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_method_attribute) für weitere Informationen.

### Auswahl

Das `multiple`-Attribut am {{HTMLElement("select")}}-Element stellt eine Steuerung für die Auswahl von null oder mehr Optionen aus der Liste der Optionen dar. Andernfalls stellt das {{HTMLElement("select")}}-Element eine Steuerung zur Auswahl einer einzigen {{HTMLElement("option")}} aus der Liste der Optionen dar. Die Steuerung hat im Allgemeinen ein anderes Erscheinungsbild, basierend auf dem Vorhandensein des attributiven multiple, wobei die meisten Browser eine scrollbare Listenbox anstelle eines einzeiligen Dropdowns anzeigen, wenn das Attribut vorhanden ist.

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

Es gibt mehrere Möglichkeiten, mehrere Optionen in einem `<select>`-Element mit einem `multiple`-Attribut zu wählen. Je nach Betriebssystem können Mausbenutzer die <kbd>Strg</kbd>, <kbd>Command</kbd> oder <kbd>Shift</kbd>-Tasten gedrückt halten und dann mehrere Optionen anklicken, um sie auszuwählen/abzuwählen. Tastaturbenutzer können mehrere zusammenhängende Elemente auswählen, indem sie das `<select>`-Element fokussieren, ein Element oben oder unten im Bereich, den sie auswählen möchten, auswählen und dann mit den <kbd>Nach oben</kbd>- und <kbd>Nach unten</kbd>-Cursortasten die Optionen durchgehen. Die Auswahl von nicht zusammenhängenden Elementen wird nicht so gut unterstützt: Elementen sollten durch Drücken der <kbd>Leertaste</kbd> ausgewählt und abgewählt werden können, aber die Unterstützung variiert zwischen den Browsern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [Mehrere E-Mail-Adressen zulassen](/de/docs/Web/HTML/Element/input/email#allowing_multiple_email_addresses)
