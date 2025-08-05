---
title: "<input>: Das HTML-Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 3d06d82cbddf640291fd66cf85cd9014c4e867c5
---

Das **`<input>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um interaktive Steuerungen für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; je nach Gerät und {{Glossary("user_agent", "Benutzeragent")}} stehen zahlreiche Arten von Eingabedaten und Steuerungs-Widgets zur Verfügung. Das `<input>`-Element ist eines der leistungsstärksten und komplexesten in ganz HTML, aufgrund der schieren Anzahl an Kombinationen von Eingabetypen und Attributen.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;text&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="name">Name (4 to 8 characters):</label>

<input
  type="text"
  id="name"
  name="name"
  required
  minlength="4"
  maxlength="8"
  size="10" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## `<input>`-Typen

Die Funktionsweise eines `<input>` variiert erheblich abhängig vom Wert seines [`type`](#type)-Attributs, daher sind die verschiedenen Typen in ihren eigenen, separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` verwendet.

Die verfügbaren Typen sind wie folgt:

<table class="no-markdown">
  <colgroup>
    <col />
    <col style="width: 50%" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>Typ</th>
      <th>Beschreibung</th>
      <th>Grundlegende Beispiele</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/button", "button")}}</td>
      <td>
        Ein Druckknopf ohne Standardverhalten, der den Wert des <a href="#value"><code>value</code></a>-Attributs anzeigt, standardmäßig leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Kontrollkästchen, das einzelne Werte auswählen/deselektieren lässt.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Eine Steuerung zur Farbauswahl; öffnet einen Farbwähler in unterstützenden Browsern, wenn aktiv.
      </td>
      <td id="examplecolor">
        <pre class="brush: html hidden">
&#x3C;input type="color" name="color"/></pre>
        {{EmbedLiveSample("examplecolor",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td>
        Eine Steuerung zum Eingeben eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumswähler oder numerische Räder für Jahr, Monat und Tag, wenn aktiv
        in unterstützenden Browsern.
      </td>
      <td id="exampledate">
        <pre class="brush: html hidden">
&#x3C;input type="date" name="date"/></pre>
        {{EmbedLiveSample("exampledate",200,55)}}
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td>
        Eine Steuerung zum Eingeben eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumswähler oder numerische Räder für Datum- und Uhrzeitkomponenten, wenn aktiv in unterstützenden Browsern.
      </td>
      <td id="exampledtl">
        <pre class="brush: html hidden">
&#x3C;input type="datetime-local" name="datetime-local"/></pre>
        {{EmbedLiveSample("exampledtl",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/email", "email")}}</td>
      <td>
        Ein Feld zum Bearbeiten einer E-Mail-Adresse. Sieht wie ein
        <code>text</code>-Eingabe aus, hat jedoch Validierungsparameter und relevante
        Tastatur in unterstützten Browsern und Geräten mit dynamischen Tastaturen.
      </td>
      <td id="exampleemail">
        <pre class="brush: html hidden">
&#x3C;input type="email" name="email"/></pre>
        {{EmbedLiveSample("exampleemail",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/file", "file")}}</td>
      <td>
        Eine Steuerung, die es dem Benutzer ermöglicht, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Dateitypen zu definieren, die die Steuerung auswählen kann.
      </td>
      <td id="examplefile">
        <pre class="brush: html hidden">
&#x3C;input type="file" accept="image/*, text/*" name="file"/></pre>
        {{EmbedLiveSample("examplefile",'100%',55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/hidden", "hidden")}}</td>
      <td>
        Eine Steuerung, die nicht angezeigt wird, deren Wert jedoch an den
        Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist versteckt!
      </td>
      <td id="examplehidden">
        <pre class="brush: html hidden">
&#x3C;input id="userId" name="userId" type="hidden" value="abc123"></pre
        >
        {{EmbedLiveSample("examplehidden",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/image", "image")}}</td>
      <td>
        Eine grafische <code>submit</code>-Schaltfläche. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert ist.
        Das <a href="#alt"><code>alt</code></a>-Attribut wird angezeigt, wenn das Bild <a href="#src"><code>src</code></a> fehlt.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>Eine Steuerung zum Eingeben eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Eine Steuerung zum Eingeben einer Zahl. Zeigt einen Spinner an und fügt eine Standardvalidierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
      </td>
      <td id="examplenumber">
        <pre class="brush: html hidden">
&#x3C;input type="number" name="number"/></pre>
        {{EmbedLiveSample("examplenumber",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/password", "password")}}</td>
      <td>
        Ein einzeiliges Textfeld, dessen Wert verschleiert ist. Warnt den Benutzer, wenn die Site nicht sicher ist.
      </td>
      <td id="examplepassword">
        <pre class="brush: html hidden">
&#x3C;input type="password" name="password"/></pre>
        {{EmbedLiveSample("examplepassword",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/radio", "radio")}}</td>
      <td>
        Eine Optionsschaltfläche, die es ermöglicht, einen Wert aus mehreren Optionen auszuwählen, die denselben <a href="#name"><code>name</code></a>-Wert haben.
      </td>
      <td id="exampleradio">
        <pre class="brush: html hidden">
&#x3C;input type="radio" name="radio"/></pre
        >
        {{EmbedLiveSample("exampleradio",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>
        Eine Steuerung zur Eingabe einer Zahl, deren genauer Wert nicht wichtig ist. Wird als Bereichs-Widget angezeigt, das standardmäßig auf den Mittelwert setzt. Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich akzeptabler Werte zu definieren.
      </td>
      <td id="examplerange">
        <pre class="brush: html hidden">
&#x3C;input type="range" name="range" min="0" max="25"/></pre>
        {{EmbedLiveSample("examplerange",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/reset", "reset")}}</td>
      <td>
        Eine Schaltfläche, die den Inhalt des Formulars auf die Standardwerte zurücksetzt. Nicht empfohlen.
      </td>
      <td id="examplereset">
        <pre class="brush: html hidden">
&#x3C;input type="reset" name="reset"/></pre
        >
        {{EmbedLiveSample("examplereset",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/search", "search")}}</td>
      <td>
        Ein einzeiliges Textfeld zur Eingabe von Suchzeichenfolgen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern ein Löschsymbol enthalten, das zum Löschen des Feldes verwendet werden kann. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Eine Schaltfläche, die das Formular absendet.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        Eine Steuerung zur Eingabe einer Telefonnummer. Zeigt eine Telefontastatur auf einigen Geräten mit dynamischen Tastaturen an.
      </td>
      <td id="exampletel">
        <pre class="brush: html hidden">
&#x3C;input type="tel" name="tel"/></pre>
        {{EmbedLiveSample("exampletel",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/text", "text")}}</td>
      <td>
        Der Standardwert. Ein einzeiliges Textfeld. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt.
      </td>
      <td id="exampletext">
        <pre class="brush: html hidden">
&#x3C;input type="text" name="text"/></pre
        >
        {{EmbedLiveSample("exampletext",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td>Eine Steuerung zur Eingabe eines Zeitwerts ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht wie eine <code>text</code>-Eingabe aus, hat jedoch Validierungsparameter und relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
      </td>
      <td id="exampleurl">
        <pre class="brush: html hidden">
&#x3C;input type="url" name="url"/></pre
        >
        {{EmbedLiveSample("exampleurl",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td>
        Eine Steuerung zur Eingabe eines Datums, bestehend aus einer Jahreszahl und einer Wochennummer, ohne Zeitzone.
      </td>
      <td id="exampleweek">
        <pre class="brush: html hidden">
&#x3C;input type="week" name="week"/></pre>
        {{EmbedLiveSample("exampleweek",200,55)}}
      </td>
    </tr>
    <tr>
      <th colspan="3">Veraltete Werte</th>
    </tr>
    <tr>
      <td><code>datetime</code> {{deprecated_inline}}</td>
      <td>
        Eine Steuerung zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
      </td>
      <td id="exampledatetime">
        <pre class="brush: html hidden">
&#x3C;input type="datetime" name="datetime"/></pre>
        {{EmbedLiveSample("exampledatetime",200,75)}}
      </td>
    </tr>
  </tbody>
</table>

## Attribute

Das `<input>`-Element ist so leistungsstark aufgrund seiner Attribute; das [`type`](#type)-Attribut, wie oben mit Beispielen beschrieben, ist dabei das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie sich technisch gesehen denselben Satz von Attributen. In der Praxis wirken sich jedoch die meisten Attribute nur auf eine bestimmte Teilmenge von Eingabetypen aus. Zusätzlich hängt die Wirkung einiger Attribute auf eine Eingabe vom Eingabetyp ab und beeinflusst verschiedene Eingabetypen auf unterschiedliche Weise.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut im Detail beschreibt, zusammen mit den mit ihnen assoziierten Eingabetypen. Attribute, die für die meisten oder alle Eingabetypen gemeinsam sind, werden unten detailliert beschrieben. Attribute, die einzigartig für bestimmte Eingabetypen sind – oder Attribute, die für alle Eingabetypen gemeinsam sind, aber besondere Verhaltensweisen haben, wenn sie auf einen bestimmten Eingabetyp angewendet werden – sind stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                        |
| --------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis für erwarteten Dateityp in Datei-Upload-Steuerungen                                         |
| [`alt`](#alt)                                 | `image`                                                                      | alt-Attribut für den Bildtyp. Erforderlich zur Barrierefreiheit                                     |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Steuert die automatische Großschreibung in eingegebenem Text.                                       |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis für Formular-Autofill-Funktion                                                              |
| [`capture`](#capture)                         | `file`                                                                       | Methode der Medienaufnahme in Datei-Upload-Steuerungen                                              |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Gibt an, ob der Befehl oder die Steuerung aktiv ist                                                 |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfelds, um die Richtung der Eingabe bei der Formularübermittlung zu senden          |
| [`disabled`](#disabled)                       | Alle                                                                         | Gibt an, ob die Formularsteuerung deaktiviert ist                                                   |
| [`form`](#form)                               | Alle                                                                         | Verknüpft die Steuerung mit einem Formularelement                                                   |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | URL, die für die Formularübermittlung verwendet werden soll                                         |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Kodierungstype der Formulardaten, der für die Formularübermittlung verwendet werden soll            |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | HTTP-Methode, die für die Formularübermittlung verwendet werden soll                                |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Umgeht die Validierung der Formularsteuerung für die Formularübermittlung                           |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für die Formularübermittlung                                                       |
| [`height`](#height)                           | `image`                                                                      | Entspricht dem Höhe-Attribut für {{htmlelement('img')}}; vertikale Dimension                        |
| [`list`](#list)                               | Alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsoptionen            |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Maximaler Wert                                                                                      |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) von `value`                                                     |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Minimaler Wert                                                                                      |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Minimale Länge (Anzahl der Zeichen) von `value`                                                     |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolean. Gibt an, ob mehrere Werte erlaubt sind                                                     |
| [`name`](#name)                               | Alle                                                                         | Name der Formularsteuerung. Wird mit dem Formular als Name/Wert-Paar übermittelt                    |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Muster, das `value` entsprechen muss, um gültig zu sein                                             |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der in der Formularsteuerung angezeigt wird, wenn kein Wert festgelegt ist                    |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Bestimmt ein `<input type="button">` als Steuerung für ein Popover-Element                          |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Gibt die Aktion an, die eine Popover-Steuerung durchführen soll                                     |
| [`readonly`](#readonly)                       | Alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht bearbeitbar                                                             |
| [`required`](#required)                       | Alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss aktiv sein, damit das Formular übermittelt werden kann |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe der Steuerung                                                                                 |
| [`src`](#src)                                 | `image`                                                                      | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildquelle                    |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Inkrementelle Werte, die gültig sind                                                                |
| [`type`](#type)                               | Alle                                                                         | Typ der Formularsteuerung                                                                           |
| [`value`](#value)                             | Alle außer `image`                                                           | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht dies dem Anfangswert                     |
| [`width`](#width)                             | `image`                                                                      | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                          |

Einige zusätzliche nicht-standardmäßige Attribute sind im Anschluss an die Beschreibungen der Standardattribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Gültig nur für den `file` Eingabetyp, definiert das `accept`-Attribut die Dateitypen, die in einer `file`-Upload-Steuerung auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`
  - : Gültig nur für die `image`-Schaltfläche, bietet das `alt`-Attribut alternativen Text für das Bild und zeigt den Wert des Attributs an, wenn das Bild-`[`src`](#src)` fehlt oder nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, in welcher Weise. Siehe die [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) globale Attributseite für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** boolesches Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette an, die beschreibt, welche, wenn überhaupt, Art der Autovervollständigungsfunktion die Eingabe bieten soll. Eine typische Implementierung der Autovervollständigung ruft frühere Werte auf, die im selben Eingabefeld eingegeben wurden, aber es können auch komplexere Formen der Autovervollständigung existieren. Zum Beispiel könnte ein Browser mit der Kontaktliste eines Geräts integrieren, um E-Mail-Adressen in einem E-Mail-Eingabefeld autovervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für erlaubte Werte.

    Das `autocomplete`-Attribut ist gültig bei `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, gültig für alle Eingabetypen außer `checkbox`, `radio`, `file` oder eine der Schaltflächentypen.

    Weitere Informationen, einschließlich Informationen zur Passwortsicherheit und zur Funktionsweise von `autocomplete` bei `hidden`, finden Sie im [Autocomplete-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete).

- `autofocus`
  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass die Eingabe automatisch den Fokus erhalten soll, wenn die Seite geladen wurde (oder wenn das {{HTMLElement("dialog")}}, das das Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element gesetzt ist, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussierbar sind.

    > [!WARNING]
    > Einem Formularsteuerelement automatisch den Fokus zu geben, kann Menschen mit visuellen Einschränkungen, die Technologien zur Bildschirmvorlesung verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportiert" der Bildschirmleser seinen Benutzer ohne Vorwarnung zur Formularsteuerung.

    Verwenden Sie sorgfältige Überlegungen zur Barrierefreiheit, wenn Sie das `autofocus`-Attribut anwenden. Einem Steuerelement automatisch den Fokus zu geben, kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auf einigen Touch-Geräten auch dazu führen, dass dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label des Formularelements ankündigt, das den Fokus erhält, wird er nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird den Kontext des vorhergehenden Inhalts ebenfalls nicht wahrnehmen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den `file` Eingabetyp, definiert das `capture` Attribut, welches Medium—Mikrofon, Video oder Kamera— verwendet werden soll, um eine neue Datei zur Upload mit einer `file` Upload-Steuerung im unterstützenden Szenario festzulegen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`
  - : Gültig sowohl für den `radio`-als auch den `checkbox`-Typ. `checked` ist ein boolesches Attribut. Bei Vorhandensein bei `radio` zeigt es an, dass die Optionsschaltfläche die aktuell ausgewählte in der Gruppe gleichnamiger Radio-Buttons ist. Bei `checkbox` zeigt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es gibt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn sich der Status des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen werden der Wert von Kontrollkästchen und Radio-Buttons nur dann in den übermittelten Daten aufgenommen, wenn sie aktuell `aktiviert` sind. Wenn sie aktiviert sind, werden der Name und die Wert(e) der aktivierten Steuerungen übermittelt.
    >
    > Wenn zum Beispiel ein Kontrollkästchen, dessen `name` `frucht` ist, einen `value` von `kirsche` hat und das Kontrollkästchen aktiviert ist, werden in den gesendeten Formulardaten `frucht=kirsche` enthalten sein. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgelistet. Der Standardwert für Kontrollkästchen und Radio-Buttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für die Eingabetypen `hidden`, `text`, `search`, `url`, `tel` und `email`, ermöglicht das `dirname`-Attribut die Übermittlung der Richtung des Elements. Wenn es enthalten ist, wird die Formularsteuerung mit zwei Name/Wert-Paaren übermittelt: Das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert `ltr` oder `rtl`, wie vom Browser festgelegt.

    ```html
    <form action="page.html" method="post">
      <label>
        Fruit:
        <input type="text" name="fruit" dirname="fruit-dir" value="cherry" />
      </label>
      <input type="submit" />
    </form>
    <!-- page.html?fruit=cherry&fruit-dir=ltr -->
    ```

    Wenn das obige Formular übermittelt wird, lässt die Eingabe sowohl das `name` / `value` Paar `frucht=kirsche` als auch das `dirname` / Richtungs-Paar `frucht-dir=ltr` gesendet werden.
    Für weitere Informationen siehe das [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren können soll. Deaktivierte Eingaben werden typischerweise mit einer dunkleren Farbe dargestellt oder in anderer Weise darauf hingewiesen, dass das Feld nicht zur Verwendung verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl es von der Spezifikation nicht gefordert wird, wird Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` über Seitenladevorgänge hinweg [persistieren](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut zur Steuerung dieser Funktion.

- `form`
  - : Eine Zeichenkette, die das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (d.h. sein **Formular Besitzer**). Der Wert dieser Zeichenkette muss, falls vorhanden, mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, ist das `<input>`-Element mit dem nächstgelegenen umgebenden Formular verbunden, falls vorhanden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe irgendwo im Dokument zu platzieren, sie aber in einem Formular woanders im Dokument einzuschließen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Gültig nur für den Eingabetyp `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formenctype`
  - : Gültig nur für den Eingabetyp `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formmethod`
  - : Gültig nur für den Eingabetyp `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formnovalidate`
  - : Gültig nur für den Eingabetyp `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formtarget`
  - : Gültig nur für den Eingabetyp `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `height`
  - : Gültig nur für die `image`-Schaltfläche, die `height` ist die Höhe der Bilddatei, die angezeigt werden soll, um die grafische Submit-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen. Es definiert eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Seine Funktion ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um das Label mit der Formularsteuerung zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist. Es bietet einen Hinweis für Browser auf die Art der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seiner Inhalte zu verwenden ist. Werte sind `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der dem `list`-Attribut gegebene Wert sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. Das `<datalist>` bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle nicht mit dem [`type`](#type) kompatiblen Werte sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Gemäß den Spezifikationen wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder einem der Schaltflächentypen unterstützt.

    Je nach Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen, Markierungen entlang eines Bereichs oder sogar eine Eingabe sehen, die sich wie ein {{HTMLElement("select")}} öffnet, aber auch nicht aufgelistete Werte zulässt. Sehen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert den größten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element die [Constraints-Überprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Terminen oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich umwickeln kann; dies ermöglicht beispielsweise das Spezifizieren eines Zeitbereichs von 22 Uhr bis 4 Uhr.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert sie die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein Integer-Wert von 0 oder höher sein. Wenn `maxlength` nicht angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt die [Constraints-Überprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes größer ist als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} lang ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als vom `maxlength`-Attribut erlaubt ist. Constraints-Überprüfung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert den niedrigsten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) weniger als dieser ist, schlägt das Element die [Constraints-Überprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht-leerer Wert niedriger ist als das mindestens vom `min`-Attribut erlaubte, verhindert die Constraints-Überprüfung das Absenden des Formulars. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Terminen oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich umwickeln kann; dies ermöglicht beispielsweise das Spezifizieren eines Zeitbereichs von 22 Uhr bis 4 Uhr.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert sie die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Integer-Wert sein, der kleiner oder gleich dem vom `maxlength` spezifizierten Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt die [Constraints-Überprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} lang ist, wodurch das Absenden des Formulars verhindert wird. Constraints-Überprüfung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das boolesche `multiple`-Attribut, wenn gesetzt, bedeutet, dass der Benutzer kommagetrennte E-Mail-Adressen im E-Mail-Widget eingeben kann oder mehr als eine Datei mit dem `file`-Eingabe auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`
  - : Ein String, der einen Namen für die Eingabesteuerung angibt. Dieser Name wird zusammen mit dem Wert der Steuerung übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie das `name` als erforderliches Attribut (auch wenn es das nicht ist). Wenn eine Eingabe kein angegebenes `name` hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular gesendet! (Deaktivierte Steuerungen, nicht ausgewählte Optionsfelder, nicht aktivierte Kontrollkästchen und Rücksetzschaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_` : Wenn als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "Benutzeragent")}} auf die Zeichencodierung gesetzt, die zur Übermittlung des Formular verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erzeugt ein einzigartiges Verhalten für Radio-Buttons.

    Nur ein Radio-Button in einer gleichen Namensgruppe von Radio-Buttons kann gleichzeitig ausgewählt sein. Das Auswählen eines Radio-Buttons in dieser Gruppe deselektiert automatisch einen aktuell ausgewählten Radio-Button in derselben Gruppe. Der Wert dieses einen ausgewählten Radio-Buttons wird zusammen mit dem Namen übermittelt, wenn das Formular übermittelt wird.

    Wenn man in eine Reihe von gleichnamigen Radio-Buttons wechselt, wird, wenn einer ausgewählt ist, dieser den Fokus erhalten. Wenn sie nicht in der Quelldatei gruppiert sind, wird, wenn eines der Gruppe ausgewählt ist, beim Überspringen nicht ausgewählter Radio-Buttons in der Gruppe gestartet, sobald das erste der Gruppe erreicht wird. In anderen Worten, wenn ein Radio-Button ausgewählt ist, überspringt das Überspringen die nicht ausgewählten Radio-Buttons in der Gruppe. Wenn keiner ausgewählt ist, wird die Radio-Button-Gruppe fokussiert, wenn der erste in derselben Namensgruppe erreicht ist.

    Sobald eines der Radio-Buttons in einer Gruppe den Fokus hat, wird durch Verwenden der Pfeiltasten durch alle Radio-Buttons des gleichen Namens navigiert, auch wenn die Radio-Buttons nicht in der Quelldatei gruppiert sind.

    Wenn ein Eingabeelement einen `name` zugewiesen bekommt, wird dieser Name zu einer Eigenschaft der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft des besitzenden Formularelements. Wenn Sie eine Eingabe haben, deren `name` auf `gast` und eine weitere, deren `name` auf `hut-groesse` festgelegt ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wird, wird `gastName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `gast`-Feld und `hutGroesse` das Objekt für das `hut-groesse`-Feld sein.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der mit einer integrierten Eigenschaft des Formulars übereinstimmt, da Sie dann die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompilieren, dem der [`value`](#value) der Eingabe entsprechen muss, damit der Wert die [Constraints-Überprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Um die Mustertexte sollten keine Schrägstriche angegeben werden. Bei der Kompilierung des regulären Ausdrucks:
    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, sodass die Übereinstimmung mit dem _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag festgelegt, sodass das Muster als eine Folge von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht-leerer Wert nicht mit dem Muster übereinstimmt, wird die Constraints-Überprüfung das Formulargestaltungsverfahren verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck mit jedem kommagetrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe hinzufügen. Sie können auch ein [`title`](#title)-Attribut aufnehmen, um zu erklären, was die Anforderungen sind, um das Muster zu erfüllen; die meisten Browser werden diesen Titel als Tooltip anzeigen. Die sichtbare Erklärung ist erforderlich für Zugänglichkeit. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis für den Benutzer an, welche Art von Informationen in das Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Art von Daten gibt, anstatt eine Erklärung oder Aufforderung. Der Text darf _keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Wenn ein Feld beispielsweise den Vorname des Benutzers erfassen soll und sein Label "Vorname" lautet, könnte ein geeigneter Placeholder "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für mehr Informationen.

- `popovertarget`
  - : Wandelt ein `<input type="button">`-Element in eine Popover-Steuerungsschaltfläche um; nimmt die ID des Popover-Elements, das kontrolliert werden soll, als seinen Wert. Siehe die [Popover API](/de/docs/Web/API/Popover_API)-Startseite für mehr Details. Die Herstellung einer Beziehung zwischen einem Popover und seiner Invokanten-Taste mithilfe des `popovertarget`-Attributs hat zwei weitere nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Invoker und platziert das Popover in einer logischen Position innerhalb der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Benutzer von Tastatur- und assistiven Technologien (AT) besser zugänglich (siehe auch [Popover-Zugänglichkeitseigenschaften](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Anker-Referenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerungen mithilfe von [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`
  - : Gibt die zu ausführende Aktion auf einem von einer Steuerung `<input type="button">` gesteuerten Popover-Element an. Mögliche Werte sind:
    - `"hide"`
      - : Die Schaltfläche verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion durchgeführt.
    - `"show"`
      - : Die Schaltfläche zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits gezeigtes Popover zu zeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Die Schaltfläche wechselt ein Popover zwischen angezeigt und versteckt. Wenn das Popover ausgeblendet ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es ausgeblendet. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerungsschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten kann. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) für mehr Informationen.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein boolesches Attribut, das, wenn vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Formular gesendet werden kann. Das `required`-Attribut wird von `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` Eingaben unterstützt.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für mehr Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`, spezifiziert das `size`-Attribut, wie viel der Eingabe angezeigt wird. Grundsätzlich wird dasselbe Ergebnis erzielt wie durch das Setzen der CSS-`[width](/de/docs/Web/CSS/width) Eigenschaft mit einigen Besonderheiten. Die tatsächliche Einheit des Werts hängt vom Eingabetyp ab. Für `password`und`text`ist es eine Anzahl von Zeichen (oder`em`-Einheiten) mit einem Standardwert von `20`, und für andere ist es Pixel (oder `px`-Einheiten). CSS-`width`hat Vorrang vor dem`size`-Attribut.

- `src`
  - : Gültig nur für die `image`-Schaltfläche, ist das `src` eine Zeichenkette, die die URL der Bilddatei angibt, die als grafische Submit-Schaltfläche angezeigt werden soll. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, ist das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut eine Zahl, die die Granularität spezifiziert, der der Wert entsprechen muss. Nur Werte, die eine ganzzahlige Schrittanzahl vom Basiswert entfernt sind, sind gültig. Der Basiswert ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), wenn angegeben, [`value`](#value) andernfalls oder `0`, wenn weder noch angegeben (außer für `week`, das einen Standardbasiswert für Schritte von −259.200.000 hat, der den Anfang der Woche `1970-W01` darstellt).

    Wenn nicht explizit enthalten:
    - Standardmäßig ist `step` 1 für `number` und `range`.
    - Jeder Datum/Zeit-Eingabetyp hat einen Standardwert für `step`, der für den Typ geeignet ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein—ganzzahlig oder gleitkommagesteuert—oder der spezielle Wert `any`, was bedeutet, dass kein Schritt impliziert wird und jeder Wert erlaubt ist (abzüglich anderer Einschränkungen, wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Wenn Sie beispielsweise `<input type="number" min="10" step="2">` haben, ist jede gerade ganze Zahl, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede Zahl gültig, aber Gleitkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig `1` ist. Für `4.2`, um gültig zu sein, müsste `step` auf `any`, 0.1, 0.2 gesetzt werden oder der `min`-Wert müsste eine Zahl sein, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die Daten, die der Benutzer eingegeben hat, nicht der Schritt-Konfiguration entsprechen, wird der Wert als ungültig in der Constraints-Überprüfung angesehen und wird die `:invalid`-Pseudoklasse anpassen.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- `tabindex`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, ein Integer-Attribut, das anzeigt, ob das Element Eingabefokus nehmen kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen sollte. Da alle Eingabetypen außer Typ `hidden` fokussierbar sind, sollte dieses Attribut nicht auf Formularsteuerelementen verwendet werden, da sonst der Fokusreihenfolge für alle Elemente im Dokument verwaltet werden müsste, mit dem Risiko, die Usability und Zugänglichkeit bei falscher Implementierung zu beeinträchtigen.

- `title`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, das einen Text enthält, der Beratungsinformationen im Zusammenhang mit dem Element darstellt, zu dem es gehört. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung für den Zweck der Formularsteuerung verwendet werden. Stattdessen sollte das {{htmlelement('label')}}-Element verwendet werden, dessen `for`-Attribut auf das `id`-Attribut der Form-Steuerelemente gesetzt wird. Siehe [Labels](#labels) unten.

- `type`
  - : Eine Zeichenkette, die den Typ der zu rendernden Steuerung spezifiziert. Zum Beispiel, um ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben), wird der Eingabety `text` verwendet, was ein Klartext-Eingabefeld erstellt.

    Erlaubte Werte sind in [Eingabetypen](#input_types) oben aufgelistet.

- `value`
  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Anfangswert, und von da an kann er jederzeit mit JavaScript geändert oder abgerufen werden, indem auf die entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft `value` zugegriffen wird. Das `value`-Attribut ist immer optional, obwohl es als obligatorisch für `checkbox`, `radio` und `hidden` betrachtet werden sollte.

- `width`
  - : Gültig nur für die `image`-Schaltfläche, gibt die `width` die Breite der Bilddatei an, die zur Darstellung der grafischen Übermittlungsschaltfläche angezeigt werden soll. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. Allgemein sollte man die Verwendung vermeiden, es sei denn, es ist unvermeidbar.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#incremental"><code>incremental</code></a></td>
      <td>
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, um die Live-Suchergebnisse während der Bearbeitung des Wertes im Feld aktualisieren zu lassen.
        <strong>Nur WebKit- und Blink-basierte Browser (Safari, Chrome, Opera, usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion angibt, die ausgeführt wird, wenn der Benutzer während der Bearbeitung des Feldes die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt; wird verwendet, um eine geeignete Beschriftung für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Orientierung des Bereichs-Schiebereglers fest. <strong>Nur Firefox.</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Elementen, die in der Dropdown-Liste der vorherigen Suchabfragen angezeigt werden sollten. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob der Benutzer nur ein Verzeichnis (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) auswählen kann
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine Erweiterung von WebKit und Blink (so unterstützt von Safari, Opera, Chrome, usw.), die, wenn vorhanden, dem {{Glossary("user_agent", "Benutzeragent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das die Suchbox darstellt. Dies ermöglicht es Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht spezifiziert ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer die Suche explizit initiiert (z. B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes).

    Das `search`-Ereignis ist so begrenzt, dass es nicht häufiger als in einem implementierungsdefinierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}
  - : Ähnlich dem nicht-standardisierten CSS-Eigenschaft -moz-orient, das die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente betrifft, definiert das `orient`-Attribut die Orientierung des Bereichs-Schiebereglers. Werte umfassen `horizontal`, was bedeutet, dass der Bereichskontrollschieber horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Erstellen vertikaler Formularkontrollen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zum Erstellen vertikaler Formularkontrollen.

- `results` {{non-standard_inline}}
  - : Das nur von Safari unterstützte `results`-Attribut ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die im `<input>`-Element des nativen Dropdown-Menüs der vorherigen Suchabfragen angezeigt werden sollen.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben ist, wird die maximale Anzahl von Einträgen standardmäßig vom Browser verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass nur Verzeichnisse von dem Benutzer im Datei-Picker ausgewählt werden dürfen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für weitere Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später verwendbar. Obwohl es ziemlich umfangreich unterstützt wird, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Auch verfügbar sind die von den übergeordneten Schnittstellen, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) angegebenen Methoden.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und meldet (falls das Ereignis nicht abgebrochen wird) das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Text-Inhalt (wie ein visueller Farbwähler oder Kalendereingabe) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabefeld auf eine gegebene Zeichenkette. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines textuellen Eingabelements aus. Macht nichts für Eingaben, die nicht als Text-Eingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Auswahl für das Eingabelement an, das normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber durch einen Tastenanschlag oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Vermindert den Wert einer numerischen Eingabe um eins, standardmäßig, oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Merkmale, die nicht auf Nicht-Formularelemente anwendbar sind. Es gibt CSS-Selektoren, die speziell auf Formularelemente basierend auf ihren UI-Merkmalen abzielen können, auch bekannt als UI-Pseudoklassen. Das Input-Element kann auch nach Typ mit Attributselektoren angesprochen werden. Es gibt auch einige Eigenschaften, die besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudoklassen relevant für das
    <code>&#x3C;input></code>
    Element:
  </caption>
  <thead>
    <tr>
      <th>Pseudoklasse</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{Cssxref(":enabled")}}</td>
      <td>
        Jedes derzeit aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, beschrieben, etc.) oder den Fokus akzeptieren kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es sonst aktiviert (ausgewählt, angeklickt, beschrieben, etc.) werden könnte oder den Fokus akzeptieren könnte, wäre es nicht deaktiviert.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element, das vom Benutzer nicht bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}} -Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das bisher keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die der Standard in einer Gruppe verwandter Elemente sind. Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Input-Arten, die beim Laden oder Rendern der Seite überprüft wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Input-Arten, die derzeit aktiviert sind (und das {{HTMLElement("option")}} -Element in einem {{HTMLElement("select")}} , das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} -Elemente, deren unbestimmte Eigenschaft per JavaScript auf true gesetzt ist, {{HTMLElement("input/radio", "radio")}} -Elemente, wenn alle Radio-Buttons mit demselben Namenswert im Formular nicht markiert sind, und {{HTMLElement("progress")}} -Elemente im unbestimmten Zustand
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die eine Eingabekontrolle angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die eine Eingabekontrolle angewendet wurde und die derzeit ungültig sind. Entspricht einem Formularelement, dessen Wert nicht den durch seine Attribute festgelegten Einschränkungen entspricht, wie z.B. <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht leeres Input, dessen aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute und dem <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht leeres Input, dessen aktueller Wert nicht innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute festgelegten Bereichsgrenzen liegt oder das nicht die <a href="#step"><code>step</code></a>-Einschränkung beachtet.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} -Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat. Entspricht nur Elementen, die erforderlich gemacht werden können. Das Attribut, das bei einem nicht erforderlichen Element enthalten ist, führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} -Element, das nicht das <a href="#required"><code>required</code></a>-Attribut gesetzt hat. Entspricht nicht Elementen, die nicht erforderlich gemacht werden können.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code> und {{HTMLElement("textarea")}} -Elemente, die derzeit keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, wird aber beim Verlassen des Fokus aktiviert. Entspricht ungültigen Eingaben, aber nur nach der Benutzerinteraktion, wie z.B. durch Fokussierung auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular mit dem ungültigen Steuerelement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Auswahlbereich für den Benutzer anzeigen, um einen Wert auszuwählen (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — aber nur, wenn das Element im offenen Zustand ist, das heißt, wenn der Auswahlbereich angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können das Label eines Kontrollkästchens basierend darauf stylen, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel gestalten wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einem aktivierten Input kommt. Wir haben keine Stile angewendet, wenn das `input` nicht aktiviert ist.

```html hidden
<input id="checkboxInput" type="checkbox" />
<label for="checkboxInput">Toggle the checkbox on and off</label>
```

```css
input:checked + label {
  color: red;
  font-weight: bold;
}
```

{{EmbedLiveSample('Pseudo-classes_example', 500, 80)}}

### Attributselektoren

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren stimmen mit Elementen basierend entweder auf dem Vorhandensein eines Attributs oder dem Wert eines bestimmten Attributs überein.

```css
/* matches a password input */
input[type="password"] {
}

/* matches a form control whose valid values are limited to a range of values */
input[min][max] {
}

/* matches a form control with a pattern attribute */
input[pattern] {
}
```

### ::placeholder

Standardmäßig erscheint der Platzhaltertext als durchscheinend oder hellgrau. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder` Text](#placeholder) des Inputs. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Satz von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement angewendet werden können, kann in einer Regel verwendet werden, die `::placeholder` in seinem Selektor verwendet.

### appearance

Die {{cssxref("appearance")}} Eigenschaft ermöglicht das Anpassen von (fast) jedem Element im plattformnativen Stil basierend auf dem Thema des Betriebssystems sowie das Entfernen jeglicher plattform-natürlichen Stile mit dem Wert `none`.

Sie könnten ein `<div>` wie einen Radio-Button mit `div {appearance: radio;}` oder ein Radio wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}` gestalten, aber tun Sie es nicht.

Das Setzen von `appearance: none` entfernt plattform-native Rahmen, aber nicht die Funktionalität.

### caret-color

Eine spezifische Eigenschaft für texteingabebezogene Elemente ist die CSS {{cssxref("caret-color")}} Eigenschaft, die es ermöglicht, die Farbe der Texteingabe-Markierung festzulegen:

#### HTML

```html
<label for="textInput">Note the red caret:</label>
<input id="textInput" class="custom" size="32" />
```

#### CSS

```css
input.custom {
  caret-color: red;
  font:
    16px "Helvetica",
    "Arial",
    sans-serif;
}
```

#### Ergebnis

{{EmbedLiveSample('caret-color', 500, 80)}}

### field-sizing

Die {{cssxref("field-sizing")}} Eigenschaft ermöglicht Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie haben standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und Formularelementen zu erlauben, die Größe an ihre Inhalte anzupassen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt einwickeln und wachsen, während mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (zum Beispiel, [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file), und {{htmlelement("textarea")}}-Elementen.

### object-position und object-fit

In bestimmten Fällen (typischerweise mit nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn dies der Fall ist, können die Position und Größe des Elements und seine Positionierung innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Gestaltung

Weitere Informationen zum Hinzufügen von Farben zu Elementen in HTML finden Sie unter:

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [HTML-Formulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels sind erforderlich, um unterstützenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element bietet erklärende Informationen über ein Formularfeld, die _immer_ angemessen sind (abgesehen von jeglichen Layoutbedenken, die Sie haben). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder in eine {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugeordnete Labels

Die semantische Koppelung von `<input>` und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Screenreader. Indem sie mit dem [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut des `<label>`-Elements gekoppelt werden, verbinden Sie das Label mit dem Input auf eine Weise, die es Screenreadern ermöglicht, Eingaben Benutzern präziser zu beschreiben.

Es reicht nicht aus, nur Text neben dem `<input>`-Element zu haben. Vielmehr erfordern Benutzerfreundlichkeit und Barrierefreiheit, dass entweder implizite oder explizite {{HTMLElement("label")}} enthalten sind:

```html
<!-- inaccessible -->
<p>Enter your name: <input id="name" type="text" size="30" /></p>

<!-- implicit label -->
<p>
  <label>Enter your name: <input id="name" type="text" size="30" /></label>
</p>

<!-- explicit label -->
<p>
  <label for="name">Enter your name: </label>
  <input id="name" type="text" size="30" />
</p>
```

Das erste Beispiel ist unzugänglich: Es besteht keine Beziehung zwischen der Aufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere Erkennungsfläche für Maus- und Touchscreen-Nutzer, um darauf zu klicken oder es zu berühren. Indem Sie ein `<label>` mit einem `<input>` koppeln, wird durch Klicken auf eines von beiden das `<input>` fokussiert. Wenn Sie einfachen Text verwenden, um Ihr Eingabefeld zu "labeln", passiert dies nicht. Es ist hilfreich für Menschen mit motorischen Störungen, wenn der Aktivierungsbereich des Eingabefelds Teil der Aufforderung ist.

Als Webentwickler ist es wichtig, dass wir niemals davon ausgehen, dass Menschen all das wissen, was wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und damit auch Ihre Website – garantiert praktisch, dass einige der Besucher Ihrer Website einige Abweichungen in Denkprozessen und/oder Umständen haben, die sie dazu bringt, Ihre Formulare sehr unterschiedlich von Ihnen zu interpretieren, ohne klare und ordnungsgemäß präsentierte Labels.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut erlaubt es Ihnen, Text anzugeben, der im Inhaltsbereich des `<input>`-Elements selbst erscheint, wenn er leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, weil es kein Label ist. Der Platzhalter dient dazu, einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Nicht nur ist der Platzhalter für Screenreader nicht zugänglich, sondern wenn der Benutzer Text in das Eingabefeld eingibt oder wenn das Eingabefeld bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitentranslationsfunktionen überspringen möglicherweise Attribute bei der Übersetzung, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element kennzeichnen müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format sein müssen, überprüfen Sie sie _immer_ auch auf der Serverseite und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Inputs basierend auf dem {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Zustand jedes Inputs zu stylen, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben beschrieben, bietet der Browser eine Client-seitige Validierung bei (versuchter) Formularübermittlung. Bei der Formularübermittlung, wenn es ein Formularelement gibt, das die Eingabekontrolle nicht erfüllt, zeigen unterstützende Browser eine Fehlermeldung beim ersten ungültigen Formularelement an; entweder eine Standardmeldung basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Nachricht.

Einige Eingabetypen und andere Attribute begrenzen, welche Werte für eine bestimmte Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler können auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Ganzzahl (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Wertebereich periodisch ist (das heißt, beim höchsten möglichen Wert, setzen die Werte zurück zum Anfang, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min)-Eigenschaften umgekehrt sind, was darauf hinweist, dass der Bereich der zulässigen Werte bei `min` beginnt, zum niedrigsten möglichen Wert zurückgesetzt wird und dann weitergeht, bis `max` erreicht ist. Dies ist besonders nützlich für Daten und Zeiten, zum Beispiel wenn Sie den Bereich von 20 Uhr bis 8 Uhr erlauben möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und ihre Werte können zu einem bestimmten Fehler im [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Gültigkeitsobjekt-Fehler hängen von den <code>&lt;input&gt;</code>
    Attributen und ihren Werten ab:
  </caption>
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Relevante Eigenschaft</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#max"><code>max</code></a></td>
      <td>[`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow)</td>
      <td>
        Tritt auf, wenn der Wert größer ist als der Höchstwert, der durch das <code>max</code>-Attribut definiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist, als die durch die <code>maxlength</code>-Eigenschaft erlaubte Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der Mindestwert, der durch das <code>min</code>-Attribut definiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code>-Eigenschaft erforderliche Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Musterattribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht dazu passt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> ist oder das Radio oder das Kontrollkästchen nicht aktiviert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert stimmt nicht mit dem Schrittinkrement überein. Das Standardinkrement ist <code>1</code>, daher sind nur Ganzzahlen gültig bei <code>type="number"</code>, wenn step nicht enthalten ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht den richtigen Typ hat, beispielsweise enthält eine E-Mail kein <code>@</code> oder eine URL enthält kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required`-Attribut hat, ist kein Wert oder ein leerer String nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, führt ein leerer String nicht zu einem Fehler.

Wir können festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer informieren, wenn beim Absenden des Formulars ein Fehler vorliegt.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen Lese-Schreib-Eigenschaften `badInput`, `valid`, und `customError`. Das Gültigkeitsobjekt umfasst:

- [`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)
- [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)
- [`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)
- [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)
- [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)
- [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow)
- [`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)
- [`validityState.badInput`](/de/docs/Web/API/ValidityState/badInput)
- [`validityState.valid`](/de/docs/Web/API/ValidityState)
- [`validityState.customError`](/de/docs/Web/API/ValidityState)

Für jede dieser booleschen Eigenschaften gibt ein Wert von `true` an, dass der angegebene Grund, warum die Validierung möglicherweise fehlgeschlagen ist, zutrifft, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen befolgt.

Wenn ein Fehler auftritt, werden unterstützende Browser sowohl den Benutzer benachrichtigen als auch das Absenden des Formulars verhindern. Ein Wort der Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen wahrheitsgemäßen Wert gesetzt wird (alles außer dem leeren String oder `null`), wird das Absenden des Formulars verhindert. Wenn keine benutzerdefinierte Fehlermeldung vorhanden ist und keine der anderen Eigenschaften true zurückgibt, wird `valid` true und das Formular kann gesendet werden.

```js
function validate(input) {
  let validityState_object = input.validity;
  if (validityState_object.valueMissing) {
    input.setCustomValidity("A value is required");
  } else if (validityState_object.rangeUnderflow) {
    input.setCustomValidity("Your value is too low");
  } else if (validityState_object.rangeOverflow) {
    input.setCustomValidity("Your value is too high");
  } else {
    input.setCustomValidity("");
  }
}
```

Die letzte Zeile, die die benutzerdefinierte Gültigkeitsnachricht auf den leeren String setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit eingestellt ist, wird das Formular selbst dann nicht abgesendet, wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandten) Elementen verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen verursachen, dass dies eine Standardfehlermeldung ausgibt, wenn Sie versuchen, das Formular entweder ohne gültiges Feld zu übermitteln oder einen Wert, der nicht dem `pattern` entspricht.

Wenn Sie stattdessen benutzerdefinierte Fehlermeldungen anzeigen möchten, können Sie JavaScript wie das folgende verwenden:

```js
const nameInput = document.querySelector("input");

nameInput.addEventListener("input", () => {
  nameInput.setCustomValidity("");
  nameInput.checkValidity();
});

nameInput.addEventListener("invalid", () => {
  if (nameInput.value === "") {
    nameInput.setCustomValidity("Enter your username!");
  } else {
    nameInput.setCustomValidity(
      "Usernames can only contain upper and lowercase letters. Try again!",
    );
  }
});
```

Das Beispiel wird wie folgt angezeigt:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Status des Eingabeelements jedes Mal, wenn sein Wert geändert wird, indem wir die Methode `checkValidity()` über den `input`-Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst und die `invalid`-Ereignishandlerfunktion ausgeführt. Innerhalb dieser Funktion ermitteln wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht zum Muster passt, indem wir einen `if ()` Block verwenden und eine benutzerdefinierte Gültigkeitsfehlermeldung setzen.
- Dadurch wird bei Drücken der Submit-Taste, wenn der Eingabewert ungültig ist, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn es gültig ist, wird es wie erwartet gesendet. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit durch Aufrufen von `setCustomValidity()` mit einem leeren String-Wert aufgehoben werden. Daher tun wir dies jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und zuvor eine benutzerdefinierte Gültigkeit festgelegt wurde, wird die Eingabe als ungültig registriert, auch wenn sie derzeit beim Absenden einen gültigen Wert enthält.

> [!NOTE]
> Validieren Sie immer die Eingabebeschränkungen sowohl auf der Client- als auch auf der Serverseite. Die Eingabekontrolle entfernt nicht die Notwendigkeit der Validierung auf der _Server-Seite_. Ungültige Werte können immer noch von älteren Browsern oder durch böswillige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte viele Versionen lang ein proprietäres Fehlerattribut — `x-moz-errormessage` — das Ihnen ähnlich wie bei der Definition benutzerdefinierter Fehlermeldungen erlaubte. Dies wurde ab Version 66 entfernt (siehe [Firefox Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die zulässigen Eingaben für bestimmte `<input>`-Typen hängen von der Spracheinstellung ab. In einigen Sprachversionen ist 1.000,00 eine gültige Zahl, während in anderen Sprachversionen die gültige Eingabemöglichkeit 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Sprache zu bestimmen, um die Benutzereingabe zu validieren (zumindest für `type="number"`):

- Versuchen Sie die durch ein `lang`/`xml:lang`-Attribut am Element oder einem seiner Elternteile angegebene Sprache.
- Versuchen Sie die durch irgendein `Content-Language`-HTTP-Header angegebene Sprache. Oder,
- Wenn keine angegeben ist, verwenden Sie die Spracheinstellung des Browsers.

## Barrierefreiheit

### Labels

Beim Einschließen von Eingabefeldern ist es eine Anforderung bezüglich der Barrierefreiheit, Labels hinzuzufügen. Dies ist notwendig, damit diejenigen, die unterstützende Technologien verwenden, erkennen können, wofür die Eingabe ist. Zudem gibt das Klicken oder Berühren eines Labels den Fokus auf das mit dem Label verknüpfte Formularelement. Dadurch wird die Barrierefreiheit und Benutzerfreundlichkeit für sehbare Nutzer erhöht, und es vergrößert den Bereich, den ein Nutzer anklicken oder berühren kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und auch erforderlich) für Radio-Buttons und Kontrollkästchen, die winzig sind. Weitere Informationen zu Labels im Allgemeinen finden Sie unter [Labels](#labels).

Das folgende Beispiel zeigt, wie Sie das `<label>` und das `<input>`-Element im obigen Stil verknüpfen können. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert denselben Wert wie das `id` des Inputs hat.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten eine Fläche bereitstellen, die groß genug ist, damit es leicht ist, sie zu aktivieren. Dies hilft einer Vielzahl von Personen, einschließlich Personen mit motorischen Störungen und Personen, die ungenaue Formen der Eingabe verwenden, wie einen Stift oder Finger. Eine Mindestgröße der interaktiven Fläche von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>, gelistet, einreichbar, zurücksetzbar, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungselemente</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann labelbares Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "void Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungselemente</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=checkbox</code>:
            <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role">checkbox</a></code>
          </li>
          <li>
            <code>type=email</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=image</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=number</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li><code>type=radio</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a></li>
          <li><code>type=range</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role"><code>slider</code></a></li>
          <li>
            <code>type=reset</code>:
            <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=search</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=submit</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=tel</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a ></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=color|date|datetime-local|file|hidden|month|password|time|week</code>:
            <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a>
          </li>
          <li>
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a> bei Verwendung
            mit <code>aria-pressed</code>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=image</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=radio</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>
          </li>
          <li>
            <code>type=text</code> ohne <code>list</code>-Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            oder <code>text</code> mit <code>list</code>-Attribut: keine
            <code>role</code> erlaubt
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Formular-Eingabekontrolle](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Wie man benutzerdefinierte Formular-Widgets erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in Legacy-Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [HTML-Formulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Vertikale Formular-Steuerelemente erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
