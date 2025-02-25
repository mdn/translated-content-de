---
title: "<input>: Das HTML-Eingabeelement"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{HTMLSidebar}}

Das **`<input>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren. Eine Vielzahl von Eingabedatentypen und Steuerwidgets stehen zur Verfügung, abhängig vom Gerät und dem {{Glossary("user_agent", "Benutzeragenten")}}. Das `<input>`-Element ist eines der mächtigsten und komplexesten in HTML aufgrund der großen Anzahl von Kombinationen von Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich je nach Wert seines [`type`](#type)-Attributs, daher werden die verschiedenen Typen auf ihren eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird standardmäßig der Typ `text` verwendet.

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
      <th>Einfache Beispiele</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/button", "button")}}</td>
      <td>
        Eine Schaltfläche ohne Standardverhalten, die den Wert des <a href="#value"><code>value</code></a>-Attributs anzeigt, standardmäßig leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Kontrollkästchen, das einzelne Werte ausgewählt oder deselektiert werden lässt.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerungselement zur Auswahl einer Farbe; öffnet einen Farbwähler in unterstützenden Browsern.
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
        Ein Steuerelement zum Eingeben eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumsauswähler oder numerische Räder für Jahr, Monat und Tag in unterstützenden Browsern.
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
        Ein Steuerelement zum Eingeben von Datum und Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Räder für Datums- und Zeitkomponenten in unterstützenden Browsern.
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
        Ein Feld zum Bearbeiten einer E-Mail-Adresse. Sieht aus wie ein
        <code>text</code>-Eingabefeld, hat aber Validierungsparameter und relevante
        Tastaturen in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerelement, das dem Benutzer ermöglicht, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Dateitypen zu definieren, die das Steuerelement auswählen kann.
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
        Ein Steuerelement, das nicht angezeigt wird, dessen Wert jedoch an den
        Server übermittelt wird. Es gibt ein verstecktes Beispiel in der nächsten Spalte!
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
      <td>Ein Steuerelement zur Eingabe von Monat und Jahr, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerelement zur Eingabe einer Zahl. Deaktiviert einen Spinner und fügt eine Standardvalidierung hinzu. Zeigt ein numerisches Tastenfeld auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein einzeiliges Textfeld, dessen Wert ausgeblendet ist.
        Warnt den Benutzer, wenn die Website nicht sicher ist.
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
        Ein Auswahlknopf, der eine Auswahl unter mehreren Optionen ermöglicht, die denselben <a href="#name"><code>name</code></a>-Wert haben.
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
        Ein Steuerelement zur Eingabe einer Zahl, deren genauer Wert nicht wichtig ist.
        Wird als Bereichs-Widget angezeigt, das standardmäßig auf den Mittelwert eingestellt ist.
        Wird zusammen mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich der akzeptablen Werte zu definieren.
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
        Eine Schaltfläche, die die Inhalte des Formulars auf Standardwerte zurücksetzt. Nicht empfohlen.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbrüche werden
        beim Eingabewert automatisch entfernt. Kann in unterstützenden Browsern ein Löschsymbol enthalten, das zum Leeren des Feldes verwendet werden kann. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Eine Schaltfläche, die das Formular übermittelt.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        Ein Steuerelement zur Eingabe einer Telefonnummer. Zeigt ein Telefontastenfeld
        auf einigen Geräten mit dynamischen Tastaturen an.
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
        Der Standardwert. Ein einzeiliges Textfeld. Zeilenumbrüche werden
        beim Eingabewert automatisch entfernt.
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
      <td>Ein Steuerelement zur Eingabe eines Zeitwerts ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabefeld, hat aber Validierungsparameter und relevante Tastaturen in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerelement zur Eingabe eines Datums, das aus einer Jahr-Woche-Nummer und einer Wochen-Nummer besteht, ohne Zeitzone.
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
        Ein Steuerelement zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so mächtig aufgrund seiner Attribute; das [`type`](#type)-Attribut, das mit Beispielen oben beschrieben wird, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch das exakt gleiche Set von Attributen. In der Realität haben die meisten Attribute jedoch nur eine Wirkung auf einen bestimmten Untertyp von Eingabetypen. Zudem hängt die Wirkung einiger Attribute auf einem Eingabeelement vom Eingabetyp ab, indem sie verschiedene Eingabetypen auf unterschiedliche Weise beeinflusst.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird durch eine Liste ergänzt, die jedes Attribut ausführlicher beschreibt und angibt, mit welchen Eingabetypen sie verbunden sind. Attribute, die auf die meisten oder alle Eingabetypen zutreffen, werden weiter unten ausführlicher definiert. Attribute, die spezifisch für bestimmte Eingabetypen sind oder die bei bestimmten Eingabetypen spezielle Verhaltensweisen haben, werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                       | Beschreibung                                                                                            |
| --------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                        | Hinweis für erwarteten Dateityp in Datei-Upload-Steuerelementen                                         |
| [`alt`](#alt)                                 | `image`                                                                       | Alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                         |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email`, und `password`                                     | Steuert die automatische Großschreibung im eingegebenen Text.                                           |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio`, und Schaltflächen                             | Hinweis für die automatische Formularvervollständigungsfunktion                                         |
| [`capture`](#capture)                         | `file`                                                                        | Medienaufnahme-Eingabemethode in Datei-Upload-Steuerelementen                                           |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                           | Ob der Befehl oder das Steuerelement ausgewählt ist                                                     |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                             | Name des Formularfelds zum Senden der Richtung des Elements bei der Formularübertragung                 |
| [`disabled`](#disabled)                       | alle                                                                          | Ob das Formular-Steuerelement deaktiviert ist                                                           |
| [`form`](#form)                               | alle                                                                          | Verknüpft das Steuerelement mit einem Formularelement                                                   |
| [`formaction`](#formaction)                   | `image`, `submit`                                                             | URL für die Formularübertragung                                                                         |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                             | Formular-Datensatz-Codierungstyp für die Formularübertragung                                            |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                             | HTTP-Methode für die Formularübertragung                                                                |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                             | Umgeht die Formularsteuerungsvalidierung für die Formularübertragung                                    |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                             | Browsing-Kontext für die Formularübertragung                                                            |
| [`height`](#height)                           | `image`                                                                       | Wie das Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                                   |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio`, und Schaltflächen       | Wert des IDs-Attributs der {{htmlelement('datalist') der Autovervollständigungsoptionen                 |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Maximalwert                                                                                             |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                           | Maximale Länge (Anzahl der Zeichen) von `value`                                                         |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Minimalwert                                                                                             |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                           | Minimale Länge (Anzahl der Zeichen) von `value`                                                         |
| [`multiple`](#multiple)                       | `email`, `file`                                                               | Boolean. Ob mehrere Werte erlaubt sind                                                                  |
| [`name`](#name)                               | alle                                                                          | Name des Formular-Steuerelements. Wird mit dem Formular als Teil eines Namen/Wert-Paares übertragen     |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                           | Muster, das `value` erfüllen muss, um gültig zu sein                                                    |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                 | Text, der im Formular-Steuerelement erscheint, wenn es keinen Wert hat                                  |
| [`popovertarget`](#popovertarget)             | `button`                                                                      | Bestimmt ein `<input type="button">` als Steuerungselement für ein Popover-Element                      |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                      | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                        |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio`, und Schaltflächen | Boolean. Der Wert ist nicht bearbeitbar                                                                 |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color`, und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss geprüft werden, damit das Formular übermittelt werden kann |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                           | Größe des Steuerelements                                                                                |
| [`src`](#src)                                 | `image`                                                                       | Wie das `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                            |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Inkrementelle Werte, die gültig sind                                                                    |
| [`type`](#type)                               | alle                                                                          | Typ des Formular-Stuerelements                                                                          |
| [`value`](#value)                             | alle außer `image`                                                            | Der Wert des Steuerelements. Wenn im HTML angegeben, entspricht dies dem Anfangswert                    |
| [`width`](#width)                             | `image`                                                                       | Wie das `width`-Attribut für {{htmlelement('img')}}                                                     |

Einige zusätzliche nicht standardisierte Attribute werden nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Gültig nur für den `file`-Eingabetyp, das `accept`-Attribut definiert, welche Dateitypen in einem `file`-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alt`

  - : Gültig nur für den `image`-Button, gibt das `alt`-Attribut alternativen Text für das Bild an, das den Wert des Attributs anzeigt, falls das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Weitere Informationen finden Sie auf der Seite für das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** boolesches Attribut!) Das Attribut [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) nimmt als Wert einen durch Leerzeichen getrennten String an, der beschreibt, welche, falls vorhanden, Art von Autovervollständigungsfunktionalität der Eingabe bereitgestellt werden soll. Eine typische Implementierung der Autovervollständigung erinnert sich an zuvor eingegebene Werte im selben Eingabefeld, aber es können auch komplexere Formen der Autovervollständigung existieren. Beispielsweise könnte ein Browser mit der Kontaktliste eines Geräts interagieren, um `email`-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Weitere Informationen zu erlaubten Werten finden Sie unter [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values).

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Wirkung auf Eingaben, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen außer `checkbox`, `radio`, `file` oder einen der Button-Typen gültig.

    Siehe das [Attribut `autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` bei `hidden` leicht anders ist als für andere Eingabetypen.

- `autofocus`

  - : Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass diese Eingabe beim Laden der Seite automatisch den Fokus erhalten soll (oder wenn das {{HTMLElement("dialog")}}, das das Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Kein weiteres Element im Dokument darf das `autofocus`-Attribut haben. Wenn es bei mehr als einem Element gesetzt ist, erhält das erste Element mit diesem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf `hidden`-Inputs verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Ein Formular-Steuerelement automatisch zu fokussieren, kann sehbehinderte Menschen, die Bildschirmlesetechnologien verwenden, sowie Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, wird der Benutzer von Screenreadern "teleportiert" zum Formular-Steuerelement, ohne ihn vorher zu warnen.

    Verwenden Sie sorgfältige Überlegungen für die Barrierefreiheit, wenn Sie das `autofocus`-Attribut anwenden. Das automatische Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass dynamische Tastaturen auf einigen Touch-Geräten angezeigt werden. Während ein Screenreader das Label des Formular-Steuerelements beim Empfang des Fokus ankündigt, wird der Screenreader nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird ebenso den durch den vorhergehenden Inhalt geschaffenen Kontext vermissen.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den `file`-Eingabetyp, definiert das `capture`-Attribut, welche Medien - Mikrofon, Video oder Kamera - verwendet werden sollen, um eine neue Datei zur Upload-Steuerung in unterstützten Szenarien zu erfassen. Sehen Sie sich den {{HTMLElement("input/file", "file")}}-Eingabetyp an.
- `checked`

  - : Gültig für sowohl `radio`- als auch `checkbox`-Typen, ist `checked` ein boolesches Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass der Auswahlknopf der aktuell ausgewählte in der Gruppe von gleichnamigen Auswahlknöpfen ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, bedeutet es, dass das Kontrollkästchen standardmäßig (bei Seitenladen) aktiviert ist. Es zeigt _nicht_ an, ob das Kontrollkästchen derzeit aktiviert ist: Wenn der Zustand des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`checked`-IDL-Attribut der `HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Anders als bei anderen Eingabe-Steuerelementen werden Checkboxen und Radio-Button-Werte nur in die übertragenen Daten aufgenommen, wenn sie derzeit `checked` sind. Falls sie das sind, werden der Name und die Wert(e) der aktivierten Steuerelemente übertragen.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen mit dem `name` `fruit` den `value` `cherry` hat und das Kontrollkästchen aktiviert ist, werden die Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgeführt. Der Standardwert für `checkbox` und `radio` ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email`-Eingabetypen, ermöglicht das `dirname`-Attribut die Übertragung der Leserichtung des Elements. Wenn es enthalten ist, sendet das Formular-Steuerelement zwei Namen/Wert-Paare: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Namen, mit einem Wert von `ltr` oder `rtl`, wie er vom Browser gesetzt wurde.

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

    Wenn das obige Formular übermittelt wird, sendet das Eingabefeld sowohl das `name` / `value`-Paar von `fruit=cherry` als auch das `dirname` / Richtungs-Paar von `fruit-dir=ltr`.
    Weitere Informationen finden Sie im [Attribut `dirname`](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass der Benutzer nicht mit der Eingabe interagieren soll. Deaktivierte Eingaben werden typischerweise mit einer dunkleren Farbe oder durch eine andere Form der Anzeige dargestellt, dass das Feld nicht zur Nutzung verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl es nicht von der Spezifikation erforderlich ist, behält Firefox standardmäßig den [dynamischen deaktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladungen hinweg bei. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um dieses Feature zu steuern.

- `form`

  - : Eine Zeichenfolge, die das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (d.h. ihren **Formulareigentümer**). Der Wert dieser Zeichenfolge, falls vorhanden, muss dem [`id`](#id) eines `<form>`-Elements im selben Dokument entsprechen. Wenn dieses Attribut nicht angegeben ist, ist das `<input>`-Element mit dem nächstgelegenen umschließenden Formular verbunden, falls vorhanden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe irgendwo im Dokument zu platzieren, aber sie in einem Formular an anderer Stelle im Dokument einzubinden.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formenctype`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formmethod`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formnovalidate`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formtarget`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `height`
  - : Gültig nur für den `image`-Button, ist die `height` die Höhe der Bilddatei, die angezeigt wird, um die grafische Submit-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen. Es definiert eine einzigartige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element bei der Verlinkung zu identifizieren. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um das Label mit dem Formular-Steuerelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globale Einstellung, gültig für alle Elemente. Es gibt einen Hinweis an Browser, welche Art von virtueller Tastaturkonfiguration für dieses Element oder seine Inhalte verwendet werden soll. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der Wert des `list`-Attributs sollte der [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. Das `<datalist>` bietet eine Liste vordefinierter Werte, um sie dem Benutzer für diese Eingabe vorzuschlagen. Alle in der Liste enthaltenen Werte, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Voraussetzungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut der Spezifikationen wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder einem der Button-Typen unterstützt.

    Abhängig vom Browser kann der Benutzer eine vorgeschlagene benutzerdefinierte Farbpalette, Tick-Zeichen entlang eines Bereichs oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, sehen, jedoch nicht gelistete Werte erlaubt. Schauen Sie auf die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für die anderen Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den größten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Höchstwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Datum oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was bedeutet, dass der Bereich möglicherweise den Wert umfassen kann, beispielsweise kann so ein Zeitbereich von 22 Uhr bis 4 Uhr angegeben werden.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die maximale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein Integer-Wert von 0 oder höher sein. Wenn `maxlength` nicht angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger ist als `maxlength` UTF-16 Code-Einheiten lang. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das `maxlength`-Attribut erlaubt. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [clientseitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den kleinsten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) weniger als dieser ist, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert unter dem Mindestwert liegt, der durch das `min`-Attribut erlaubt ist, verhindert die Einschränkungsvalidierung die Formularübermittlung. Siehe [clientseitige Validierung](#clientseitige_validierung) für weitere Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Datum oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was bedeutet, dass der Bereich möglicherweise den Wert umfasst; beispielsweise kann so ein Zeitbereich von 22 Uhr bis 4 Uhr angegeben werden.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Integer-Wert sein, der kleiner oder gleich dem durch `maxlength` spezifizierten Wert ist. Wenn `minlength` nicht angegeben ist oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Minimallänge.

    Die Eingabe schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Code-Einheiten lang ist, was die Formularübermittlung verhindert. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das boolesche `multiple`-Attribut, sofern gesetzt, bedeutet, dass der Benutzer mit dem E-Mail-Widget kommagetrennte E-Mail-Adressen eingeben oder mit dem `file`-Input mehr als eine Datei auswählen kann. Siehe den {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `name`

  - : Eine Zeichenfolge, die einen Namen für das Eingabesteuerelement angibt. Dieser Name wird mit dem Wert des Steuerelements übertragen, wenn die Formulardaten übertragen werden.

    Betrachten Sie den `name` als erforderliches Attribut (auch wenn es nicht so ist). Wenn eine Eingabe keinen `name` angegeben hat oder `name` leer ist, wird der Eingabewert nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, nicht aktivierte Radio-Schaltflächen, nicht aktivierte Kontrollkästchen und Zurücksetzen-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn als Name eines `<input>`-Elements des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "Benutzeragenten")}} auf die Kodierung des Zeichensatzes gesetzt, der zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name) Attribut erstellt ein einzigartiges Verhalten für Radio-Schaltflächen.

    Nur eine Radio-Schaltfläche in einer Gruppe mit demselben Namen kann gleichzeitig aktiviert sein. Durch die Auswahl einer beliebigen Schaltfläche in dieser Gruppe wird automatisch jede derzeit angewählte Schaltfläche in derselben Gruppe deaktiviert. Der Wert dieser einen aktivierten Radio-Schaltfläche wird zusammen mit dem Namen übertragen, wenn das Formular übermittelt wird,

    Wenn Sie sich durch eine Serie von gleichnamigen Radio-Schaltflächen bewegen, wird, falls eine aktiviert ist, diese den Fokus erhalten. Wenn sie nicht in der Quellreihenfolge gruppiert sind, wird, falls eine der Gruppen aktiviert ist, das Tabbing in der Gruppe starten, sobald die erste in der Gruppe erreicht wird, wobei alle, die nicht aktiviert sind, übersprungen werden. Mit anderen Worten, wenn eine aktiviert ist, überspringt das Tabbing die nicht aktivierten Radio-Schaltflächen in der Gruppe. Wenn keine aktiviert ist, erhält die Radio-Schaltfläche-Gruppe den Fokus, wenn die erste Schaltfläche in der gleichnamigen Gruppe erreicht wird.

    Sobald eine der Radio-Schaltflächen in einer Gruppe den Fokus hat, können Sie mithilfe der Pfeiltasten alle Radio-Schaltflächen desselben Namens durchlaufen, auch wenn die Radio-Schaltflächen nicht in der Quellreihenfolge gruppiert sind.

    Wenn ein Eingabeelement einen `name` erhält, wird dieser Name zu einer Eigenschaft der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft des besitzenden Formularelements. Wenn Sie eine Eingabe haben, deren `name` auf `guest` gesetzt ist und eine andere, deren `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Nachdem dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest` Feld sein, und `hatSize` das Objekt für das `hat-size` Feld.

    > [!WARNING]
    > Vermeiden Sie, den Formular-Elementen einen `name` zu geben, der einem eingebauten Eigenschaft des Formulars entspricht, da Sie dann die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf die entsprechende Eingabe überschreiben.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompilieren, den der Eingabewert erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger regulärer Ausdruck in JavaScript sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Keine Schrägstriche sollten um den Mustertext spezifiziert werden. Beim Kompilieren des regulären Ausdrucks:

    1. Das Muster wird implizit mit `^(?:` und `)$` umschlossen, sodass die Übereinstimmung gegen den gesamten Eingabewert erforderlich ist, d. h. `^(?:<pattern>)$`.
    2. Das `'v'`-Flag wird spezifiziert, sodass das Muster als Folge von Unicode-Codepunkten anstelle von {{Glossary("ASCII", "ASCII")}} behandelt wird.

    Wenn das `pattern`-Attribut vorhanden, aber nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht-leerer Wert nicht dem Muster entspricht, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden durch Komma getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erläuternden Text in der Nähe einfügen. Sie können auch ein [`title`](#title)-Attribut einschließen, um zu erklären, was die Anforderungen sind, um dem Muster zu entsprechen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password`, und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis an den Benutzer, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Art von Daten gibt, anstatt einer Erklärung oder Aufforderung. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten. Angenommen, in einem Feld wird erwartet, dass der Vorname eines Benutzers erfasst wird und sein Label ist "Vorname", könnte ein geeigneter Platzhalter "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`

  - : Wandelt ein `<input type="button">`-Element in eine Popover-Steuerungstaste um; nimmt die ID des zu steuernden Popover-Elements als Wert. Weitere Details finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API)-Startseite. Die Einrichtung einer Beziehung zwischen einem Popover und seiner aufrufenden Schaltfläche mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Beziehung zwischen Popover und Aufrufer und platziert das Popover in einer logischen Position in der Tastaturnavigation, wenn es angezeigt wird. Das macht das Popover zugänglicher für Tastatur- und Hilfstechnologie (AT)-Benutzer (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr praktisch macht, Popovers relativ zu ihren Steuerelementen mit der [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`

  - : Gibt die auszuführende Aktion auf einem durch ein Steuerungs-`<input type="button">` kontrollierten Popover-Element an. Mögliche Werte sind:

    - `"hide"`
      - : Die Schaltfläche wird ein angezeigtes Popover ausblenden. Wenn Sie versuchen, ein bereits verstecktes Popover auszublenden, wird keine Aktion durchgeführt.
    - `"show"`
      - : Die Schaltfläche wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Die Schaltfläche wird ein Popover zwischen sichtbar und verborgen umschalten. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` fehlt, ist `"toggle"` die Standardaktion, die von der Steuertaste ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten soll. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `password` unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly) für weitere Informationen.

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das übergeordnete Formular übermittelt werden kann. Das `required`-Attribut wird von `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, und `file`-Eingaben unterstützt.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Attributes/required) für weitere Informationen.

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url`, und `text`, spezifiziert das `size`-Attribut, wieviel von der Eingabe angezeigt wird. Im Grunde erzeugt es dasselbe Ergebnis wie das Einstellen der CSS-`width`-Eigenschaft mit einigen Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px`-Einheiten). CSS-`width` hat Vorrang vor dem `size`-Attribut.

- `src`

  - : Gültig nur für den `image`-Button, ist `src` eine Zeichenfolge, die die URL der Bilddatei spezifiziert, um die grafische Submit-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, ist das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut eine Zahl, die die Granularität spezifiziert, an die sich der Wert halten muss.

    Wenn nicht explizit enthalten:

    - `step` ist standardmäßig 1 für `number` und `range`.
    - Jeder Datum/Uhrzeit-Eingabetyp hat einen Standardwert für `step`, der für den Typ geeignet ist; siehe die individuellen Eingabeseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step) und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl sein - ganz oder dezimal - oder der spezielle Wert `any`, was bedeutet, dass kein Schritt angedeutet wird und jeder Wert (unter Berücksichtigung anderer Einschränkungen wie [`min`](#min) und [`max`](#max)) erlaubt ist.

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, Datum/Uhrzeit-Eingabetypen, und `range`-Eingabetypen gleich dem Basiswert für das Schrittverfahren - der [`min`](#min)-Wert und Inkremente des Schrittwerts bis zum [`max`](#max)-Wert, falls spezifiziert.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade ganze Zahl, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede ganze Zahl gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig `1` ist. Damit `4.2` gültig ist, hätte `step` auf `any`, 0.1, 0.2 oder eine Mindesteingabe, die mit `.2` endet, gesetzt werden müssen, wie `<input type="number" min="-5.2">`

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht den Schritt-Einstellungen entsprechen, wird der Wert bei der Einschränkungsvalidierung als ungültig angesehen und passt zur `:invalid`-Pseudoklasse.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- `tabindex`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen außer den `hidden` Inputs fokussierbar sind, sollte dieses Attribut nicht auf Formularelementen verwendet werden, da dies die Verwaltung der Fokus-Reihenfolge für alle Elemente im Dokument erfordern würde, mit dem Risiko, die Benutzerfreundlichkeit und Zugänglichkeit zu beeinträchtigen, wenn dies falsch gemacht wird.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, mit einem Text, der beratende Informationen darstellt, die sich auf das Element beziehen, zu dem es gehört. Solche Informationen können normalerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung für den Zweck der Formularkontrolle verwendet werden. Stattdessen verwenden Sie das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut der Formularkontrolle gesetzt ist. Siehe [Labels](#labels) unten.

- `type`

  - : Eine Zeichenfolge, die den Typ des darzustellenden Steuerelements angibt. Um beispielsweise ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben ist), wird der Eingabetyp `text` verwendet, womit ein Klartext-Eingabefeld erstellt wird.

    Zulässige Werte sind in den [Eingabetypen](#input_types) oben aufgeführt.

- `value`

  - : Der Wert des Eingabesteuerelements. Wenn im HTML angegeben, ist dies der Anfangswert, und ab diesem Zeitpunkt kann er jederzeit mithilfe von JavaScript, um die jeweilige [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft `value` zuzugreifen, geändert oder abgerufen werden. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio`, und `hidden` betrachtet werden.

- `width`

  - : Gültig nur für den `image`-Button, wird die `width` spezifiziert, um die Breite der Bilddatei anzugeben, um die grafische Submit-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind auch in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie sie vermeiden, es sei denn, es lässt sich nicht vermeiden.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, um die Live-Suchergebnisse zu aktualisieren, während der Benutzer weiterhin den Wert des Felds bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenfolge, die die Art der Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste während der Bearbeitung des Felds drückt; dies wird verwendet, um ein geeignetes Label für diese Taste auf einer virtuellen Tastatur zu ermitteln. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Ausrichtung des Bereichsschiebers fest. <strong>Nur Firefox.</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Elementen, die in der Dropdown-Liste früherer Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob nur das Auswählen eines Verzeichnisses (oder von Verzeichnissen, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) zulässig ist
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das boolesche Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome, usw.), die, wenn vorhanden, den {{Glossary("user_agent", "Benutzeragenten")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht spezifiziert ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (wie durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes).

    Das `search`-Ereignis ist so begrenzt, dass es nicht häufiger als in einem implementierungsdefinierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich der nicht standardisierten CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}} und {{htmlelement('meter')}}-Elemente beeinflusst, definiert das `orient`-Attribut die Ausrichtung des Bereichsschiebers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularelemente.

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut - nur von Safari unterstützt - ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die im Nativ bereitgestellten Dropdown-Menü des `<input>`-Elements mit vorherigen Suchanfragen angezeigt werden sollen.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben wird, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das boolesche `webkitdirectory`-Attribut, falls vorhanden, gibt an, dass im Dateiauswahl-Interface nur Verzeichnisse für die Auswahl durch den Benutzer verfügbar sein sollten. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später verwendbar. Allerdings ist es trotz der relativ breiten Unterstützung immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden durch die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Auch verfügbar sind diejenigen Methoden, die durch die übergeordneten Schnittstellen spezifiziert werden, nämlich [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Validierungsprüfungen besteht; ansonsten gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Validierungsprüfungen besteht; andernfalls gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und meldet (wenn das Ereignis nicht abgebrochen wird) das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder Kalenderdatumseingabe) macht diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt werden soll, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine bestimmte Zeichenfolge. Ein `selectMode`-Parameter steht zur Verfügung, um zu steuern, wie die vorhandenen Inhalte betroffen sind.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines Texteingabeelements aus. Macht nichts für Eingaben, die nicht als Text-Eingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browserauswähler für das Eingabeelement an, der normalerweise angezeigt würde, wenn das Element ausgewählt wäre, aber von einem Tastendruck oder einer anderen Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert eines numerischen Eingabefelds standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert eines numerischen Eingabefelds um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Funktionen, die auf nicht-Formularelemente nicht anwendbar sind. Es gibt CSS-Selektoren, die gezielt Formularelemente basierend auf ihren UI-Funktionen ansprechen können, auch bekannt als UI-Pseudoklassen. Das `input`-Element kann auch nach Typ mit Attributselektoren angesprochen werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudoklassen relevant für das
    <code>&#x3C;input></code>-Element:
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
        Jedes derzeit aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, eingegeben, etc.) oder den Fokus erhalten kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert werden kann oder keinen Fokus erhalten kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es ansonsten aktiviert werden könnte (ausgewählt, angeklickt, eingegeben, etc.) oder den Fokus erhalten könnte, wenn es nicht deaktiviert wäre.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element, das durch den Benutzer nicht bearbeitet werden kann</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die der Standard in einer Gruppe verwandter Elemente sind. Übereinstimmung mit {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die beim Laden oder Rendern der Seite markiert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Übereinstimmung mit {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die derzeit markiert sind (und die ({{HTMLElement("option")}} in einem {{HTMLElement("select")}}, die derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren indeterminate-Eigenschaft von JavaScript auf true gesetzt wurde, {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Radiobuttons mit demselben Namenswert im Formular nicht markiert sind, und {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, die eine Einschränkungsvalidierung aufweisen können und derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, die eine Einschränkungsvalidierung aufweisen und derzeit ungültig sind. Übereinstimmung mit einem Formularelement, dessen Wert die durch seine Attribute festgelegten Einschränkungen nicht erfüllt, wie z.B. <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht leeres `input`, dessen aktueller Wert innerhalb der durch die Attribute <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> und den <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht leeres `input`, dessen aktueller Wert NICHT innerhalb der durch die Attribute <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> festgelegten Bereichsgrenzen liegt oder nicht den <a href="#step"><code>step</code></a>-Einschränkungen entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat. Es werden nur Elemente erfasst, die erforderlich sein können. Das Attribut auf einem nicht erforderlichen Element wird keine Übereinstimmung erzeugen.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut NICHT gesetzt hat. Es werden keine Elemente erfasst, die nicht erforderlich sein können.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente, die derzeit keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, wird jedoch bei der Leerung aktiviert. Übereinstimmung mit ungültigem `input`, aber nur nach Benutzerinteraktion, z.B. durch Fokus auf das Steuerelement, Verlassen des Steuerelements oder Versuch der Übermittlung des Formulars mit dem ungültigen Steuerelement.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die dem Benutzer ermöglichen, einen Wert auszuwählen (zum Beispiel <a href="/de/docs/Web/HTML/Element/input/color"><code>&lt;input type="color"&gt;</code></a>) — aber nur, wenn das Element im geöffneten Zustand ist, d.h. wenn der Auswahlmechanismus angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen Beispiel

Wir können ein Checkbox-Label basierend darauf stylen, ob die Checkbox markiert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und das {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einem markierten Input kommt. Wir haben keine Stile angewendet, wenn das `input` nicht markiert ist.

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

Es ist möglich, verschiedene Typen von Formkontrollen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren stimmen mit Elementen, die entweder nur durch die Präsenz eines Attributs oder den Wert eines bestimmten Attributs überein.

```css
/* matches a password input */
input[type="password"] {
}

/* matches a form control whose valid values are limited to a range of values*/
input[min][max] {
}

/* matches a form control with a pattern attribute */
input[pattern] {
}
```

### ::placeholder

Standardmäßig erscheint der Text des Platzhalters als durchscheinend oder hellgrau. Das {{cssxref('::placeholder')}} Pseudo-Element ist der [`placeholder` text](#placeholder) des Eingabefeldes. Es kann mit einem eingeschränkten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudo-Element anwendbar sind, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### appearance

Die {{cssxref("appearance")}}-Eigenschaft ermöglicht die Anzeige von (fast) jedem Element im Stil eines nativen Plattform-Stils basierend auf dem Betriebssystemthema sowie die Entfernung jeglicher nativer Plattform-Stile mit dem Wert `none`.

Sie könnten ein `<div>` aussehen lassen wie einen Radiobutton mit `div {appearance: radio;}` oder ein Radio aussieht wie ein Checkbox mit `[type="radio"] {appearance: checkbox;}`, aber tun Sie das nicht.

`appearance: none` entfernt native Plattformrahmen, jedoch nicht die Funktionalität.

### caret-color

Eine spezifische Eigenschaft für textbezogene Eingabeelemente ist die CSS-{{cssxref("caret-color")}}-Eigenschaft, die es ermöglicht, die Farbe des Texteingabe-Cursors festzulegen:

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
    "sans-serif";
}
```

#### Ergebnis

{{EmbedLiveSample('caret-color', 500, 80)}}

### field-sizing

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d. h. sie erhalten standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und zu erlauben, dass sich Formularelemente in ihrer Größe anpassen, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt anpassen und wachsen, sobald mehr Text eingegeben wird. Dies funktioniert mit Eingabefeldern, die direkte Texteingaben akzeptieren (z. B. [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Element/input/file) und {{htmlelement("textarea")}}-Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht textbezogenen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element). Wenn es so ist, können die Position und Größe des Elements und seine Positionierung innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML, siehe:

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Stylen von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Stylen von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels sind notwendig, um erklärenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element liefert erklärende Informationen über ein Formularfeld, die _immer_ angemessen sind (abgesehen von Layoutfragen). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugehörige Labels

Die semantische Paarung von `<input>`- und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Screenreader. Durch das Paaren mit dem [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut des `<label>`, binden Sie das Label an die Eingabe in einer Weise, die es Screenreadern ermöglicht, Eingaben präziser zu beschreiben.

Es genügt nicht, einfachen Text neben das `<input>`-Element zu stellen. Vielmehr erfordert die Benutzerfreundlichkeit und Zugänglichkeit die Einbeziehung eines entweder impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht zugänglich: Es besteht keine Beziehung zwischen dem Hinweis und dem `<input>`-Element.

Neben einem zugänglichen Namen bietet das Label eine größere "Treffer"-Fläche für Maus- und Touchscreen-Benutzer zum Klicken oder Berühren. Durch das Paaren eines `<label>` mit einem `<input>`, wird durch das Klicken auf eines von beiden das `<input>` fokussiert. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu "beschriften", wird dies nicht passieren. Den Hinweis als Teil des Aktivierungsbereichs für die Eingabe zu haben, ist hilfreich für Menschen mit motorischen Einschränkungen.

Als Webentwickler ist es wichtig, dass wir nie davon ausgehen, dass Menschen all die Dinge wissen, die wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und somit Ihre Website – garantiert praktisch, dass einige Besucher Ihrer Website eine andere Interpretation Ihrer Formulare haben, die sich ohne klare und ordnungsgemäß präsentierte Labels von Ihrer unterscheidet.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut ermöglicht es, Text anzugeben, der im Inhaltsbereich des `<input>`-Elements selbst erscheint, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil er es nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebenes Ergebnis aussehen sollte, nicht als Erklärung oder Aufforderung.

Nicht nur ist der Platzhalter nicht für Screenreader zugänglich, sondern wenn der Benutzer Text in die Steuerung eingibt oder die Steuerung bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Übersetzungsfunktionen auf Seite könnten Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element kennzeichnen müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Clientseitige Validierung

> [!WARNING]
> Clientseitige Validierung ist nützlich, aber sie garantiert _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, _überprüfen_ Sie sie immer auch auf der Serverseite und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Zustand jedes Eingabefeldes zu stylen, stellt der Browser auch bei dem (versuchten) Absenden des Formulars die clientseitige Validierung bereit. Wenn es beim Absenden des Formulars eine Steuerung gibt, die die Einschränkungsvalidierung nicht besteht, zeigen unterstützende Browser eine Fehlermeldung an der ersten ungültigen Formsteuerung an; entweder eine Standardnachricht basierend auf dem Fehler oder eine von Ihnen festgelegte Nachricht.

Einige Eingabetypen und andere Attribute setzen Grenzen dafür, welche Werte für eine gegebene Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler könnten auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade ganze Zahl (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich periodisch ist (d.h. bei dem höchsten möglichen Wert gehen die Werte zurück zum Anfang, anstatt zu enden), ist es möglich, dass die Werte der Eigenschaften [`max`](#max) und [`min`](#min) umgekehrt sind, was anzeigt, dass der Bereich der erlaubten Werte bei `min` beginnt, zum niedrigsten möglichen Wert zurückrollt und dann weitergeht, bis `max` erreicht ist. Das ist besonders nützlich für Datums- und Zeit-Angaben, z.B. wenn Sie den Bereich von 20:00 Uhr bis 8:00 Uhr erlauben wollen:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und ihre Werte können zu einem bestimmten Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Validitätsobjektfehler hängen von den <code>&lt;input&gt;</code>-Attributen und ihren Werten ab:
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
        Tritt auf, wenn der Wert größer als der maximale Wert ist, wie vom <code>max</code>-Attribut definiert.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die Anzahl, die durch die <code>maxlength</code>-Eigenschaft erlaubt ist.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der minimale Wert, wie vom <code>min</code>-Attribut definiert.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen geringer ist als die durch die <code>minlength</code>-Eigenschaft erforderliche Zahl.
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
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> ist oder das Radio oder die Checkbox nicht markiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert stimmt nicht mit dem Schrittinkrement überein. Das Standardinkrement ist <code>1</code>, sodass nur ganze Zahlen gültig sind, wenn <code>type="number"</code> ist, wenn der Schritt nicht enthalten ist. <code>step="any"</code> wirft diesen Fehler nie.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, zum Beispiel enthält eine E-Mail kein <code>@</code> oder eine URL kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement das `required`-Attribut nicht hat, ist kein Wert oder ein leerer String nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, wird ein leerer String nicht zu einem Fehler führen, mit Ausnahme von `required`.

Wir können Grenzen setzen, welche Werte wir akzeptieren, und die unterstützenden Browser werden diese Formularwerte nativ validieren und den Benutzer warnen, wenn bei der Formularübermittlung ein Fehler vorliegt.

Zusätzlich zu den in der Tabelle oben beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen Nur-Lese-Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt enthält:

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

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true`, dass der angegebene Grund der Validierung, die möglicherweise fehlgeschlagen ist, wahr ist, mit Ausnahme der `valid`-Eigenschaft, die wahr ist, wenn der Wert des Elements allen Einschränkungen gehorcht.

Wenn ein Fehler vorliegt, werden unterstützende Browser sowohl den Benutzer warnen als auch die Formularübermittlung verhindern. Eine Warnung: Wenn ein benutzerdefinierter Fehler auf einen wahrhaftigen Wert gesetzt ist (alles andere als den leeren String oder `null`), wird die Übermittlung des Formulars verhindert. Wenn keine benutzerdefinierte Fehlermeldung vorliegt und keine der anderen Eigenschaften wahr ist, ist `valid` wahr und das Formular kann übermittelt werden.

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

Die letzte Zeile, die die benutzerdefinierte Validitätsmeldung auf den leeren String setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Validität gesetzt ist, wird das Formular nicht übermittelt, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>`- (und verwandten) Elementen verfügbar ist. Nehmen Sie folgendes Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formular-Validierungsfunktionen erzeugen eine Standardfehlermeldung, wenn Sie versuchen, das Formular ohne gültige Eingaben oder mit einem Wert, der nicht mit dem `pattern` übereinstimmt, zu übermitteln.

Wenn Sie stattdessen benutzerdefinierte Fehlermeldungen anzeigen möchten, könnten Sie JavaScript wie folgt verwenden:

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

Das Beispiel rendert wie folgt:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gefasst:

- Wir prüfen den gültigen Status des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die `checkValidity()`-Methode über den `input`-Event-Handler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Event ausgelöst und die `invalid`-Event-Handler-Funktion wird ausgeführt. Innerhalb dieser Funktion stellen wir fest, ob der Wert ungültig ist, weil er leer ist, oder weil er nicht dem Muster entspricht, indem wir einen `if ()`-Block nutzen, und setzen eine benutzerdefinierte Validitätsfehlermeldung.
- Infolgedessen wird, wenn der Eingabewert ungültig ist, wenn die Absende-Schaltfläche gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er wie erwartet übermittelt. Damit dies geschieht, muss die benutzerdefinierte Validität aufgehoben werden, indem `setCustomValidity()` mit einem leeren String aufgerufen wird. Deshalb tun wir dies jedes Mal, wenn das `input`-Event ausgelöst wird. Wenn Sie dies nicht tun und zuvor eine benutzerdefinierte Validität gesetzt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie derzeit einen gültigen Wert bei der Übermittlung enthält.

> [!NOTE]
> Validieren Sie immer Eingabebeschränkungen sowohl auf der Client- als auch auf der Serverseite. Einschränkungsvalidierung ersetzt nicht die Notwendigkeit der Validierung auf der _Server-Seite_. Ungültige Werte können immer noch durch ältere Browser oder durch bösartige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte viele Versionen lang ein proprietäres Fehlerattribut – `x-moz-errormessage` –, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise zu setzen. Dies wurde in Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen vom Gebietsschema ab. In einigen Ländern ist 1.000,00 eine gültige Zahl, während in anderen Ländern die gültige Eingabeweise dieser Zahl 1.000,00 ist.

Firefox verwendet folgende Heuristiken, um das Gebietsschema zur Validierung der Benutzereingabe zu bestimmen (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut auf dem Element oder einem seiner Elternteile angegeben ist.
- Versuchen Sie die Sprache, die durch das `Content-Language`-HTTP-Header angegeben wird. Oder,
- Wenn keine angegeben ist, verwenden Sie das Gebietsschema des Browsers.

## Barrierefreiheit

### Labels

Beim Einbeziehen von Eingaben ist es eine Anforderung der Barrierefreiheit, Labels hinzuzufügen. Dies ist notwendig, damit diejenigen, die unterstützende Technologien verwenden, wissen, wofür die Eingabe ist. Außerdem gibt das Klicken oder Berühren eines Labels dem zugehörigen Formularsteuerelement den Fokus. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, da es den Bereich vergrößert, den ein Benutzer klicken oder berühren kann, um die Steuerung zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radiobuttons und Checkboxes, die winzig sind. Für weitere Informationen über Labels im Allgemeinen, siehe [Labels](#labels).

Das folgende Beispiel zeigt, wie Sie das `<label>` mit einem `<input>`-Element im obigen Stil verknüpfen. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert derselbe ist wie die `id` des Eingabefelds.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen Bereich bieten, der groß genug ist, um sie leicht zu aktivieren. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Problemen und Menschen, die nicht-präzise Formen der Eingabe wie einen Stift oder Finger verwenden. Eine Mindestinteraktivgröße von 44×44 [CSS-Pixel] (https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

- [Verstehen des Erfolgskriteriums 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>, aufgelistet, einreichbar, zurücksetzbar, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierung Inhalt</a>. Wenn das <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann labelbares Element, tastbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=checkbox</code>:
            <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role">checkbox</a></code>
          </li>
          <li>
            <code>type=email</code>
            <ul>
              <li>
                ohne <code>list</code> Attribut:
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=image</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=number</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li><code>type=radio</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a></li>
          <li><code>type=range</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/slider_role"><code>slider</code></a></li>
          <li>
            <code>type=reset</code>:
            <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=search</code>
            <ul>
              <li>
                ohne <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role"><code>searchbox</code></a>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=submit</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=tel</code>
            <ul>
              <li>
                ohne <code>list</code> Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                ohne <code>list</code> Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                ohne <code>list</code> Attribut:
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a ></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=color|date|datetime-local|file|hidden|month|password|time|week</code>:
            <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>
          </li>
          <li>
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a> wenn
            mit <code>aria-pressed</code> verwendet,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=image</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=radio</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>
          </li>
          <li>
            <code>type=text</code> ohne <code>list</code> Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            oder <code>text</code> mit <code>list</code> Attribut: kein
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

- [Formular-Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Wie man benutzerdefinierte Formular-Widgets baut](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in Legacy-Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Erstellen vertikaler Formularsteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
