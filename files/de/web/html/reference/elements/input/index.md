---
title: "<input>: Das HTML-Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: c10cfb6daba8fe6fc5366f2e1ca1bd32de8a537f
---

Das **`<input>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; es sind eine Vielzahl von Arten von Eingabedaten und Steuerwidgets verfügbar, abhängig vom Gerät und dem {{Glossary("user_agent", "User Agent")}}. Das `<input>`-Element ist eines der leistungsstärksten und komplexesten in ganz HTML, aufgrund der schieren Anzahl von Kombinationen von Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich, abhängig vom Wert seines [`type`](#type)-Attributs, daher werden die verschiedenen Typen auf ihren eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben wird, wird standardmäßig der Typ `text` übernommen.

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
      <td>Ein Druckknopf ohne Standardverhalten, der den Wert des standardmäßig leeren <a href="#value"><code>value</code></a>-Attributs anzeigt.</td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Kontrollkästchen, das die Auswahl/Abwahl einzelner Werte ermöglicht.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>Ein Steuerfeld zur Angabe einer Farbe; öffnet einen Farbwähler in unterstützenden Browsern, wenn aktiviert.</td>
      <td id="examplecolor">
        <pre class="brush: html hidden">
&#x3C;input type="color" name="color"/></pre>
        {{EmbedLiveSample("examplecolor",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td>
        Ein Steuerfeld zur Eingabe eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumswähler oder numerische Räder für Jahr, Monat, Tag in
        unterstützenden Browsern, wenn aktiviert.
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
        Ein Steuerfeld zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumswähler
        oder numerische Räder für Datum- und Zeitkomponenten in unterstützenden Browsern, wenn aktiviert.
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
        Ein Feld zur Bearbeitung einer E-Mail-Adresse. Sieht aus wie ein
        <code>text</code>-Eingabefeld, verfügt aber über Validierungsparameter und eine relevante
        Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerfeld, das dem Benutzer die Auswahl einer Datei ermöglicht.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Dateitypen zu definieren, die das Steuerfeld auswählen kann.
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
        Ein Steuerfeld, das nicht angezeigt wird, dessen Wert jedoch an den
        Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist versteckt!
      </td>
      <td id="examplehidden">
        <pre class="brush: html hidden">
&#x3C;input id="userId" name="userId" type="hidden" value="abc123" /></pre
        >
        {{EmbedLiveSample("examplehidden",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/image", "image")}}</td>
      <td>
        Ein grafischer <code>submit</code>-Button. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert wird.
        Das <a href="#alt"><code>alt</code></a>-Attribut zeigt eine Beschreibung an, wenn das Bild-<a href="#src"><code>src</code></a> fehlt.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>Ein Steuerfeld zum Eingeben eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerfeld zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt eine Standard-
        validierung hinzu. Zeigt auf einigen Geräten mit dynamischen Tastaturen eine numerische Tastatur an.
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
        Ein einzeiliges Textfeld, dessen Wert verborgen ist.
        Der Benutzer wird gewarnt, wenn die Website nicht sicher ist.
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
        Ein Optionsfeld, das es ermöglicht, einen einzigen Wert aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Ein Steuerfeld zur Eingabe einer Zahl, deren genauer Wert nicht wichtig ist.
        Zeigt ein Bereichs-Widget an, das standardmäßig den Mittelwert hat.
        Wird zusammen mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den akzeptablen Wertebereich zu definieren.
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
        Ein Button, der den Inhalt des Formulars auf die Standardwerte zurücksetzt. Nicht empfohlen.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchstrings. Zeilenumbrüche werden
        automatisch aus dem Eingabewert entfernt. Kann ein Löschen-Symbol in
        unterstützenden Browsern enthalten, das verwendet werden kann, um das Feld zu leeren. Zeigt ein
        Suchsymbol anstelle der Eingabetaste auf einigen Geräten mit dynamischen Tastaturen an.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Ein Button, der das Formular absendet.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        Ein Steuerfeld zur Eingabe einer Telefonnummer. Zeigt eine Telefonnumerntastatur
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
        automatisch aus dem Eingabewert entfernt.
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
      <td>Ein Steuerfeld zur Eingabe eines Zeitwerts ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabefeld, verfügt aber über Validierungsparameter und eine relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerfeld zur Eingabe eines Datums, das aus einer Wochennummer und einer Wochenjahreszahl besteht, ohne Zeitzone.
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
        Ein Steuerfeld zur Eingabe eines Datums und einer Zeit (Stunde, Minute, Sekunde und Bruchteile einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so leistungsfähig wegen seiner Attribute; das [`type`](#type)-Attribut, mit Beispielen oben beschrieben, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch dasselbe Set von Attributen. In der Realität haben jedoch die meisten Attribute nur Auswirkungen auf einen spezifischen Teil von Eingabetypen. Zusätzlich hängt die Art und Weise, wie einige Attribute ein Eingabefeld beeinflussen, vom Eingabetyp ab und wirkt sich auf unterschiedliche Eingabetypen unterschiedlich aus.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Anschließend folgt eine Liste, die jedes Attribut ausführlicher beschreibt und die Eingabetypen, mit denen sie verbunden sind. Attribute, die bei den meisten oder allen Eingabetypen üblich sind, werden weiter unten ausführlicher beschrieben. Attribute, die einzigartig für bestimmte Eingabetypen sind – oder Attribute, die bei allen Eingabetypen üblich sind, aber spezielle Verhaltensweisen aufweisen, wenn sie bei einem bestimmten Eingabetyp verwendet werden – sind stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element schließen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) mit ein und zusätzlich:

| Attribut                                      | Typ(en)                                                                 | Beschreibung                                                                                           |
| --------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [`accept`](#accept)                           | `file`                                                                  | Hinweis auf erwarteten Dateityp in Dateiupload-Steuerelementen                                         |
| [`alpha`](#alpha)                             | `color`                                                                 | Deckkraft der Farbe                                                                                    |
| [`alt`](#alt)                                 | `image`                                                                 | alt-Attribut für den image-Typ. Erforderlich für Barrierefreiheit                                      |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email`, und `password`                               | Steuert die automatische Großschreibung im eingegebenen Text.                                          |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio`, und Button                              | Hinweis auf die automatisierte Ausfüllfunktion des Formulars                                           |
| [`capture`](#capture)                         | `file`                                                                  | Methode zur Mediaerfassung in Dateiupload-Steuerelementen                                              |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                     | Ob der Befehl oder das Steuerelement ausgewählt ist                                                    |
| [`colorspace`](#colorspace)                   | `color`                                                                 | Der {{Glossary("Color_space", "Farbraum")}}, der zum Auswählen des Farbwerts verwendet werden soll     |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                       | Name des Formularfelds zur Übermittlung der Ausrichtung des Elements beim Absenden des Formulars       |
| [`disabled`](#disabled)                       | alle                                                                    | Ob das Formularelement deaktiviert ist                                                                 |
| [`form`](#form)                               | alle                                                                    | Verknüpft das Steuerelement mit einem Formularelement                                                  |
| [`formaction`](#formaction)                   | `image`, `submit`                                                       | URL, die zum Absenden des Formulars verwendet werden soll                                              |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                       | Kodierungstyp des Formulardatensatzes, der beim Absenden des Formulars verwendet werden soll           |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                       | HTTP-Methode, die zum Absenden des Formulars verwendet werden soll                                     |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                       | Umgeht die Formularfeld-Validierung beim Absenden des Formulars                                        |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                       | Browsing-Kontext für das Absenden des Formulars                                                        |
| [`height`](#height)                           | `image`                                                                 | Entspricht dem Höhenattribut für {{htmlelement('img')}}; Vertikale Ausdehnung                          |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio`, und Buttons       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsmöglichkeiten          |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Maximalwert                                                                                            |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Maximale Länge (Anzahl der Zeichen) des `value`                                                        |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Minimalwert                                                                                            |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Minimale Länge (Anzahl der Zeichen) des `value`                                                        |
| [`multiple`](#multiple)                       | `email`, `file`                                                         | Boolean. Ob mehrere Werte erlaubt sind                                                                 |
| [`name`](#name)                               | alle                                                                    | Name des Formularelements. Wird mit dem Formular als Teil eines Name/Wert-Paars eingereicht            |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                     | Muster, dem `value` entsprechen muss, um gültig zu sein                                                |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`           | Text, der im Formularelement erscheint, wenn kein Wert festgelegt ist                                  |
| [`popovertarget`](#popovertarget)             | `button`                                                                | Bezeichnet ein `<input type="button">` als Steuerung für ein Popover-Element                           |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                       |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio`, und Buttons | Boolean. Der Wert ist nicht editierbar                                                                 |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color`, und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss überprüft werden, damit das Formular gesendet werden kann |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                     | Größe des Steuerelements                                                                               |
| [`src`](#src)                                 | `image`                                                                 | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                    |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Inkrementelle Werte, die gültig sind                                                                   |
| [`type`](#type)                               | alle                                                                    | Typ des Formularelements                                                                               |
| [`value`](#value)                             | alle außer `image`                                                      | Der Wert des Steuerungselements. Wenn im HTML angegeben, entspricht dies dem Anfangswert               |
| [`width`](#width)                             | `image`                                                                 | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                             |

Einige zusätzliche nicht standardisierte Attribute werden nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Nur gültig für den `file`-Eingabetyp, definiert das `accept`-Attribut, welche Dateitypen in einem `file`-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alpha` {{experimental_inline}}
  - : Nur gültig für den `color`-Eingabetyp, das `alpha`-Attribut gibt dem Endbenutzer die Möglichkeit, die Deckkraft der ausgewählten Farbe festzulegen.

- `alt`
  - : Nur gültig für den `image`-Button, das `alt`-Attribut bietet alternativen Text für das Bild und zeigt den Wert des Attributs an, wenn das Bild-[`src`](#src) fehlt oder anderweitig nicht geladen wird. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Weitere Informationen finden Sie auf der Seite des [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)-globalen Attributs.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolesches Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als seinen Wert eine durch Leerzeichen getrennte Zeichenfolge an, die beschreibt, welche, wenn überhaupt, Art der Autovervollständigungsfunktionalität das Eingabefeld bereitstellen soll. Eine typische Implementierung von Autovervollständigung ruft vorherige in dasselbe Eingabefeld eingegebene Werte ab, aber komplexere Formen der Autovervollständigung können existieren. Zum Beispiel könnte ein Browser in die Kontaktliste eines Geräts integrieren, um `email`-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für erlaubte Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen außer `checkbox`, `radio`, `file` oder jeglichen der Button-Typen gültig.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` für `hidden` leicht anders ist als für andere Eingabetypen.

- `autofocus`
  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass die Eingabe automatisch den Fokus haben sollte, wenn die Seite fertig geladen (oder wenn das {{HTMLElement("dialog")}}-Element, das das Element enthält, angezeigt) wurde.

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als ein Element gesetzt wurde, erhält das erste Element mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren eines Formularsteuerelements kann sehbehinderte Personen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Einschränkungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmlesegeräte ihren Benutzer ohne Vorwarnung zum Formularsteuerelement.

    Verwenden Sie bei der Anwendung des `autofocus`-Attributs sorgfältige Überlegungen zur Barrierefreiheit. Das automatische Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmlesegerät das Label des Formularsteuerelements ankündigt, das den Fokus erhält, wird das Bildschirmlesegerät nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird ebenso den durch den vorherigen Inhalt geschaffenen Kontext verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und nur gültig für den `file`-Eingabetyp, bestimmt das `capture`-Attribut, welches Medium – Mikrofon, Video oder Kamera – zum Erfassen einer neuen Datei zum Hochladen mit `file`-Upload-Steuerelement in unterstützenden Szenarien verwendet werden soll. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`
  - : Gültig für die Typen `radio` und `checkbox`, ist `checked` ein Boolean-Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass die Optionsschaltfläche die aktuell ausgewählte in der Gruppe von gleichnamigen Optionsschaltflächen ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig ausgewählt ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen aktuell ausgewählt ist: Wenn der Status des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das `checked`-IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerelementen werden der Wert eines Kontrollkästchens und anderer Optionsfelder nur in die übermittelten Daten aufgenommen, wenn sie aktuell `checked` sind. Wenn sie es sind, werden der Name und die Wert(e) der ausgewählten Steuerelemente übermittelt.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name` `fruit` ist, den `value` `cherry` hat und das Kontrollkästchen aktiviert ist, werden die Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es nicht in den Formulardaten aufgeführt. Der Standardwert `value` für Kontrollkästchen und Optionsfelder ist `on`.

- `colorspace` {{experimental_inline}}
  - : Nur gültig für den `color`-Eingabetyp, das `colorspace`-Attribut gibt den {{Glossary("Color_space", "Farbraum")}} an, der von der `type="color"`-Eingabe verwendet wird. Mögliche {{Glossary("enumerated", "aufgezählte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies schließt [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) und {{cssxref("hex-color")}}-Werte ein. Der Farbwert ist auf 8-bit pro `r`, `g` und `b`-Komponente beschränkt. Dies ist der Standard.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3-Farbraum")}}, z.B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email`-Eingabetypen, ermöglicht das `dirname`-Attribut die Übermittlung der Ausrichtung des Elements. Bei Einbeziehung wird das Formularsteuerelement zwei Name/Wert-Paare übermitteln: das erste ist der [`name`](#name) und [`value`](#value) und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das obige Formular übermittelt wird, wird die Eingabe sowohl das `name` / `value`-Paar `fruit=cherry` als auch das `dirname` / Richtungs-Paar `fruit-dir=ltr` versenden. Für weitere Informationen siehe das [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren sollte. Deaktivierte Eingaben werden typischerweise heller dargestellt oder verwenden eine andere Form von Hinweis darauf, dass das Feld nicht verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular eingereicht.

    > [!NOTE]
    > Obwohl nicht durch die Spezifikation vorgeschrieben, behält Firefox standardmäßig den [dynamischen deaktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>`-Feldes über Seitenladevorgängen hinweg. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Ein String, der das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verbunden ist (d.h. ihr **Formularbesitz**). Der Wert dieses Strings muss, wenn vorhanden, mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem am nächsten gelegenen umschließenden Formular verbunden, falls vorhanden.

    Das `form`-Attribut erlaubt das Platzieren einer Eingabe irgendwo im Dokument, jedoch das Einbeziehen in ein an anderer Stelle im Dokument befindliches Formular.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft sein.

- `formaction`
  - : Nur gültig für die `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formenctype`
  - : Nur gültig für die `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formmethod`
  - : Nur gültig für die `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formnovalidate`
  - : Nur gültig für die `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formtarget`
  - : Nur gültig für die `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `height`
  - : Nur gültig für den `image`-Eingabeknopf, ist die `height` die Höhe der anzuzeigenden Bilddatei, um den grafischen Absenden-Button zu repräsentieren. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen. Es definiert eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element bei Verlinkungen zu identifizieren. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}}-Elements verwendet, um das Label mit dem Formularelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist. Es bietet einen Hinweis an Browser, welche Art von virtueller Tastaturkonfiguration beim Bearbeiten dieses Elements oder seiner Inhalte verwendet werden soll. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal`, und `search`.
- `list`
  - : Der angegebene Wert für das `list`-Attribut sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements sein, das sich im selben Dokument befindet. Die `<datalist>` bietet eine Liste von vordefinierten Werten, um dem Benutzer Vorschläge für diese Eingabe zu machen. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden in den vorgeschlagenen Optionen nicht aufgenommen. Die zur Verfügung gestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste wählen oder einen anderen Wert angeben.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut den Spezifikationen wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder einem der Button-Typen unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Markierungen über eine Skala sehen oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} verhält, aber nicht gelistete Werte zulässt. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den größten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element bei der [Constraints-Überprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Höchstwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` kleiner sein als der Wert von `min`, was darauf hinweist, dass der Bereich möglicherweise umfahren kann; zum Beispiel erlaubt dies, einen Zeitbereich von 22:00 bis 4:00 Uhr anzugeben.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die maximale Zeichenfolgenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von 'minlength' sein.

    Die Eingabe wird bei der [Constraints-Überprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Textes länger ist als `maxlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} lang. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das `maxlength`-Attribut erlaubt ist. Die Constraints-Überprüfung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung).

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den negativsten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) weniger als dies ist, schlägt das Element bei der [Constraints-Überprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Mindestwert.

    Dieser Wert muss weniger als oder gleich dem des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert weniger ist als das Minimum, das durch das `min`-Attribut erlaubt ist, wird die Constraints-Überprüfung das Absenden des Formulars verhindern. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung).

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` kleiner sein als der Wert von `min`, was darauf hinweist, dass der Bereich möglicherweise umfahren kann; zum Beispiel erlaubt dies, einen Zeitbereich von 22:00 bis 4:00 Uhr anzugeben.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimale Zeichenfolgenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein nicht negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Eingabe keine Mindestlänge.

  Die Eingabe wird bei der [Constraints-Überprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Textes weniger ist als `minlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} lang, was das Absenden des Formulars verhindert. Constraints-Überprüfung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung).

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das Boolean-`multiple`-Attribut, falls gesetzt, bedeutet, der Benutzer kann durch Kommas getrennte E-Mail-Adressen im E-Mail-Widget eingeben oder kann mehr als eine Datei mit der `file`-Eingabe auswählen. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `name`
  - : Ein String, der einen Namen für das Eingabesteuerelement angibt. Dieser Name wird zusammen mit dem Wert des Steuerelements beim Absenden der Formulardaten übermittelt.

    Betrachten Sie den `name` als ein erforderliches Attribut (obwohl es nicht ist). Wenn eine Eingabe keinen `name` hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular gesendet! (Deaktivierte Steuerelemente, nicht ausgewählte Optionsfelder, nicht ausgewählte Kontrollkästchen und Zurücksetzen-Buttons werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_` : Wenn als Name eines `<input>`-Elements des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet, wird der Eingabewert vom {{Glossary("user_agent", "User Agent")}} automatisch auf die Zeichenkodierung gesetzt, die beim Absenden des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erstellt ein einzigartiges Verhalten für Optionen.

    Nur eine Optionsschaltfläche in einer gleichnamigen Gruppe von Optionsschaltflächen kann gleichzeitig ausgewählt sein. Das Auswählen einer beliebigen Optionsschaltfläche in dieser Gruppe deaktiviert automatisch jede derzeit ausgewählte Optionsschaltfläche in derselben Gruppe. Der Wert dieser einen ausgewählten Optionsschaltfläche wird zusammen mit dem Namen gesendet, wenn das Formular abgesendet wird.

    Beim Tabben in eine Serie von gleichnamigen Gruppen von Optionsschaltflächen, wenn eine ausgewählt ist, erhält diese den Fokus. Wenn sie in der Quellreihenfolge nicht gruppiert sind und eine der Gruppe ausgewählt ist, beginnt das Tabben in die Gruppe, wenn die erste der Gruppe erreicht wird, wobei alle diejenigen übersprungen werden, die nicht ausgewählt sind. Mit anderen Worten, wenn eine ausgewählt ist, wird das Tabben die nicht ausgewählten Optionsschaltflächen in der Gruppe überspringen. Wenn keine ausgewählt ist, erhält die Optionsschaltflächengruppe den Fokus, wenn die erste Taste in der gleichnamigen Gruppe erreicht ist.

    Sobald eine der Optionsschaltflächen in einer Gruppe den Fokus hat, navigieren die Pfeiltasten durch alle gleichnamigen Optionsschaltflächen, auch wenn die Optionsschaltflächen in der Quellreihenfolge nicht zusammen gruppiert sind.

    Wenn einem Eingabeelement ein `name` gegeben wird, wird dieser Name zu einem Eigentumselement des Formulars über die [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft. Wenn Sie eine Eingabe haben, dessen `name` auf `guest` gesetzt ist, und eine andere, deren `name` auf `hat-size`

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

```html
// Beispiel-JavaScript-Code zum Erzeugen von Referenzen auf <input /> Felder
const guestName = document.forms[0].elements["guest"]; const hatSize =
document.forms[0].elements["hat-size"];
```

Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein und `hatSize` das Objekt für das `hat-size`-Feld sein.

> [!WARNING]
> Vermeiden Sie es, Formularelementen einen `name` zu geben, der einem eingebauten Eigentum des Formulars entspricht, da Sie dann die vordefinierte Eigenschaft oder Methode mit dieser Referenz auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompilieren, dem der [`value`](#value) der Eingabe entsprechen muss, damit der Wert die [Constraints-Überprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Keine Schrägstriche sollten um den Mustertext angegeben werden. Beim Kompilieren des regulären Ausdrucks:
    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, so dass die Übereinstimmung gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag angegeben, so dass das Muster als Folge von Unicode-Zeichencodes und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird.

    Wenn das `pattern`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht leerer Wert nicht dem Muster entspricht, wird die Constraints-Überprüfung das Absenden des Formulars verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden durch Kommas getrennten Wert geprüft.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erläuternden Text in der Nähe angeben. Sie können auch ein [`title`](#title)-Attribut hinzufügen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist erforderlich für Barrierefreiheit. Der Tooltip ist eine Verbesserung.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis auf die Art der erwarteten Information im Feld. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Art von Daten gibt, anstatt einer Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Wenn zum Beispiel ein Feld erwartet, den Vornamen eines Benutzers zu erfassen und sein Label "Vorname" ist, wäre ein geeigneter Platzhalter "z.B. Mustafa".

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Arten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Labels](#labels).

- `popovertarget`
  - : Macht ein `<input type="button">`-Element zu einem Popover-Steuerungsknopf; nimmt die ID des Popover-Elements, das zu steuern ist, als seinen Wert. Weitere Einzelheiten finden Sie auf der [Popover-API](/de/docs/Web/API/Popover_API)-Landungsseite. Das Herstellen einer Beziehung zwischen einem Popover und seinem Einführ-Knopf mittels des `popovertarget`-Attributs hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Einführer und platziert das Popover, wenn es angezeigt wird, in einer logischen Position in der Tastatur-Fokus-Navigationsreihenfolge. Dies macht das Popover für Tastatur- und Assistive-Technologie (AT)-Benutzer zugänglicher (siehe auch [Popover-Accessibility-Funktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerungen unter Verwendung von [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu platzieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die Aktion an, die auf ein Popover-Element ausgeführt werden soll, das von einem Steuerungs-`<input type="button">` gesteuert wird. Mögliche Werte sind:
    - "hide"
      - : Der Knopf wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion durchgeführt.
    - "show"
      - : Der Knopf wird ein verborgenes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt.
    - "toggle"
      - : Der Knopf wird ein Popover zwischen Anzeigen und Verbergen umschalten. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist "toggle" die Standardaktion, die von dem Steuerknopf durchgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten können soll. Das `readonly`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password`-Eingabetypen unterstützt.

    Weitere Informationen finden Sie im [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Eigentumsformular gesendet werden kann. Das `required`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file`-Eingaben unterstützt.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung) und im [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required).

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`, gibt das `size`-Attribut an, wie viel von der Eingabe angezeigt wird. Es erzeugt im Grunde das gleiche Ergebnis wie das Setzen der CSS-{{cssxref("width")}}-Eigenschaft mit ein paar Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von 20 und für andere sind es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`
  - : Nur gültig für den `image`-Eingabeknopf, ist das `src` ein String, der die URL der Bilddatei angibt, um den grafischen Absenden-Button anzuzeigen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss. Nur Werte, die eine ganze Anzahl von Schritten von der Schrittbasis entfernt sind, sind gültig. Die Schrittbasis ist `min`, falls angegeben, `value` ansonsten oder `0`, wenn weder noch angegeben ist (außer `week`, das eine Standardschrittbasis von −259.200.000 hat, was dem Beginn der Woche `1970-W01` entspricht).

    Wenn nicht explizit enthalten:
    - `step` standardmäßig auf 1 für `number` und `range`.
    - Jeder Datums-/Uhrzeiten-Eingabetyp hat einen Standard-`step`-Wert, der für den Typ geeignet ist; Siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein – entweder Integer oder Float – oder der spezielle Wert `any`, was bedeutet, dass kein Schritt impliziert wird und jeder Wert erlaubt ist (mit Ausnahme anderer Einschränkungen, wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade ganze Zahl, `10` oder größer, gültig. Wenn `step` weggelassen wird bei `<input type="number">`, ist jede ganze Zahl gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, weil `step` standardmäßig auf `1` gesetzt ist. Damit `4.2` gültig ist, hätte `step` auf `any`, 0.1, 0.2 gesetzt werden müssen, oder der `min`-Wert müsste eine Zahl sein, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die von dem Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, wird der Wert bei der Constraints-Überprüfung als ungültig angesehen und wird das `:invalid`-Pseudoklasse entsprechen.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung).

- `tabindex`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (fokusfähig ist), ob es an die sequentielle Tastaturnavigation teilnehmen soll. Da alle Eingabetypen außer der Eingabe des Typs `hidden` fokussierbar sind, sollte dieses Attribut nicht auf Formularelementen verwendet werden, da dies die Verwaltung der Fokussierreihenfolge für alle Elemente im Dokument erforderlich machen würde, mit dem Risiko, die Bedienbarkeit und Barrierefreiheit zu beeinträchtigen, wenn dies falsch gemacht wird.

- `title`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, das einen Text enthält, der beratende Informationen in Bezug auf das zugehörige Element darstellt. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erläuterung des Zwecks des Formularelements verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut des Formularelements eingestellt ist. Weitere Einzelheiten finden Sie unter [Labels](#labels) unten.

- `type`
  - : Ein String, der den Typ des darzustellenden Steuerelements angibt. Zum Beispiel, um ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben) wird, wird der Eingabetyp `text` verwendet, um ein Klartext-Eingabefeld zu erstellen.

    Erlaubte Werte sind in den [Eingabetypen](#input_types) oben aufgelistet.

- `value`
  - : Der Wert des Eingabesteuerelements. Wenn im HTML angegeben, ist dies der Anfangswert, und von da an kann es jederzeit durch JavaScript geändert oder abgerufen werden, um die entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft `value` zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch für `checkbox`, `radio` und `hidden` als obligatorisch angesehen werden.

- `width`
  - : Nur gültig für den `image`-Eingabeknopf, die `width` ist die Breite der Bilddatei, um den grafischen Absende-Button anzuzeigen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind auch in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie es vermeiden, diese zu verwenden, es sei denn, es kann nicht anders sein.

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
        Ob oder ob nicht wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden, um Live-Suchergebnisse zu aktualisieren, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion angibt, die ausgeführt wird, wenn der Benutzer
        die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt, während das
        Feld bearbeitet wird; dies wird verwendet, um ein geeignetes Label für diese Taste auf einer
        virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Orientierung des Bereichs-Schiebereglers fest. <strong>Nur Firefox.</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Elementen, die in der Dropdownliste früherer Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob nur Verzeichnisse zur Auswahl durch den Benutzer im Datei-Auswahl-Interface zulässig sein sollen (oder mehrere, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist)
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher von Safari, Opera, Chrome, etc. unterstützt), die, falls vorhanden, den {{Glossary("user_agent", "User Agent")}} dazu anweist, die Eingabe als Live-Suche zu verarbeiten. Wenn der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer eine Suche explizit initiiert (wie durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

    Das `search`-Ereignis ist so eingeschränkt, dass es nicht häufiger gesendet wird, als ein implementierungsdefiniertes Intervall zulässt.

- `orient` {{non-standard_inline}}
  - : Ähnlich wie die -moz-orient nicht standardisierte CSS-Eigenschaft, die die {{htmlelement('progress')}} und {{htmlelement('meter')}}-Elemente betrifft, definiert das `orient`-Attribut die Orientierung des Bereichs-Schiebereglers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal dargestellt wird, und `vertical`, was bedeutet, dass der Bereich vertikal dargestellt wird. Siehe [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularelemente.

- `results` {{non-standard_inline}}
  - : Das `results`-Attribut – nur von Safari unterstützt – ist ein numerischer Wert, der es Ihnen erlaubt, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü früherer Suchanfragen des `<input>`-Elements angezeigt werden.

    Der Wert muss eine nicht negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert gegeben wird, wird die von den Browservorschriften festgelegte Standard-Maximalanzahl von Einträgen verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass nur Verzeichnisse zur Auswahl durch den Benutzer im Dateiauswahl-Interface erlaubt sind. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später nutzbar. Trotz seiner relativ breiten Unterstützung ist es jedoch immer noch kein Standard und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden durch das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interface bereitgestellt, das `<input>` Elemente im DOM darstellt. Ebenfalls verfügbar sind die Methoden, die von den Eltern-Interfaces [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) spezifiziert sind.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; ansonsten gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis beim Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; ansonsten gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis beim Element aus, und meldet (wenn das Ereignis nicht abgebrochen wird) das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>` Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder Kalenderdatumseingabe) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Bereichs von Zeichen im Eingabeelement auf eine bestimmte Zeichenfolge. Ein `selectMode` Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines Texteingabeelements aus. Macht nichts bei Eingaben, die nicht als Textfelder angezeigt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Auswahlmechanismus für das Eingabeelement, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber durch einen Tastendruck oder andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Merkmale, die für nicht-Form-Elemente nicht zutreffen. Es gibt CSS-Selektoren, die speziell auf Formularelemente basierend auf ihren UI-Funktionen abzielen können, auch bekannt als UI-Pseudoklassen. Das Input-Element kann auch nach Typ mit Attributselektoren gezielt werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudoklassen, die für das
    <code>&#x3C;input></code>
    Element relevant sind:
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
        Jedes derzeit aktivierbare Element, das aktiviert (ausgewählt, angeklickt,
        beschrieben usf.) oder in den Fokus genommen werden kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder in den Fokus genommen werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierbaren Zustand hat, was bedeutet, dass es andernfalls aktiviert (ausgewählt, angeklickt,
        beschrieben usf.) oder in den Fokus genommen werden könnte, wenn es nicht deaktiviert wäre.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element nicht editierbar durch den Benutzer</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer editiert werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code> Text</a> anzeigt,
        einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elemente mit dem <a href="#placeholder"><code>placeholder</code></a> Attribut, die noch keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die das Standard-Element in einer Gruppe verwandter Elemente sind. Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die beim Laden oder Rendern der Seite geprüft wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die derzeit geprüft sind (und dem {{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente
        deren indeterminate Eigenschaft durch JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle
        Radiobuttons mit demselben Namenswert im Formular nicht ausgewählt sind und
        {{HTMLElement("progress")}} Elemente in einem unbestimmten Zustand
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die eine Gültigkeitsbeschränkung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die eine Gültigkeitsbeschränkung angewendet wird und die derzeit
        nicht gültig sind. Entspricht einem Formularelement, dessen Wert die
        durch seine Attribute gesetzten Einschränkungen nicht erfüllt, wie
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute und das <a href="#step"><code>step</code></a> spezifizierten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a> Attribute spezifizierten Bereichsgrenzen liegt oder
        nicht der <a href="#step"><code>step</code></a> Einschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut gesetzt hat.
        Entspricht nur Elementen, die erforderlich sein können.
        Das Attribut bei einem nicht anfordbaren Element führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder
        {{HTMLElement("textarea")}} Element, das NICHT das <a href="#required"><code>required</code></a> Attribut gesetzt hat.
        Entspricht nicht Elementen, die erforderlich sein können.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elemente, die derzeit keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, aber wird beim Verlassen aktiviert. Entspricht
        ungültigen Eingaben, jedoch nur nach der Benutzerinteraktion, wie durch Fokussierung
        des Bedienelements, Verlassen des Bedienelements oder Versuch,
        das Formular mit der ungültigen Eingabe zu übermitteln.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code> Elemente, die einen Auswahldialog zur Verfügung stellen, aus dem der Benutzer einen Wert wählen kann (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — aber nur, wenn das Element im offenen Zustand ist, also wenn der Dialog angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen-Beispiel

Wir können ein Kontrollkästchen-Label basierend darauf stylen, ob das Kontrollkästchen markiert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} der {{htmlelement('label')}}, die unmittelbar nach einer geprüften Eingabe kommt. Wir haben keine Styles angewandt, wenn das `input` nicht markiert ist.

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

Es ist möglich, unterschiedliche Typen von Formulareingaben auf Basis ihres [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) zu bestimmen. CSS-Attributselektoren passen auf Elemente, die entweder nur das Vorhandensein eines Attributs oder den Wert eines bestimmten Attributs haben.

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

Standardmäßig erscheint Platzhaltertext halbtransparent oder in hellem Grau. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder` Text](#placeholder) der Eingabe. Es kann mit einem eingeschränkten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement angewendet werden können, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor hat.

### caret-color

Eine auf texteingabe-bezogene Elemente spezifische Eigenschaft ist die CSS {{cssxref("caret-color")}} Eigenschaft, die es ermöglicht, die Farbe zu setzen, in der der Texteingabe-Cursor gezeichnet wird:

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

Die {{cssxref("field-sizing")}} Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie erhalten standardmäßig eine bevorzugte Standardgröße.) Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, sodass Formularelemente sich in der Größe anpassen, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Formulareingaben zu erstellen, die ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingaben akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}} Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise nicht-textuelle Eingaben und spezialisierte Schnittstellen betreffend) ist das `<input>` Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es dies ist, können die Position und die Größe des Elements und seine Positionierung innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farben zu Elementen in HTML, siehe:

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Zusätzliche Funktionen

### Labels

Labels sind notwendig, um Hilfetext mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}} Element bietet erklärende Informationen zu einem Formularfeld, die _immer_ angemessen sind (abgesehen von Layout-Bedenken, die Sie haben könnten). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden sollte.

#### Zugeordnete Labels

Die semantische Zuordnung von `<input>` und `<label>` Elementen ist nützlich für Hilfstechnologien wie Bildschirmleser. Durch die Zuordnung mithilfe des [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) Attributs des `<label>` Elements verbinden Sie das Label mit der Eingabe, was es Bildschirmlesern ermöglicht, Eingaben den Benutzern präziser zu beschreiben.

Ein einfacher Text neben dem `<input>` Element reicht nicht aus. Vielmehr erfordert Benutzbarkeit und Zugänglichkeit die Einbeziehung eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht zugänglich: Es gibt keine Beziehung zwischen der Eingabeaufforderung und dem `<input>` Element.

Neben einem zugänglichen Namen bietet das Label einen größeren "Treffer"-Bereich für Maus- und Touchscreen-Benutzer zum Klicken oder Berühren. Durch die Zuordnung eines `<label>` mit einem `<input>` wird das Fokussieren des `<input>` sowohl möglich durch Klicken darauf oder dem Label. Wenn Sie einen einfachen Text verwenden, um Ihre Eingabe zu "labeln", passiert dies nicht. Das Einbeziehen der Eingabeaufforderung in den Aktivierungsbereich für die Eingabe ist hilfreich für Personen mit motorischen Beeinträchtigungen.

Als Webentwickler sollten wir nie annehmen, dass die Menschen alles Wissen, was wir wissen. Die Vielfalt der Menschen, die das Internet nutzen – und somit Ihrer Website – stellt praktisch sicher, dass einige Besucher Ihrer Site durch einen unterschiedlichen Denkprozess und/oder Umstände dazu veranlasst werden, Ihre Formulare ganz anders zu interpretieren als Sie ohne klare und ordnungsgemäß präsentierte Labels.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder) Attribut ermöglicht es Ihnen, Text zu spezifizieren, der innerhalb des Inhaltsbereichs des `<input>` Elements selbst erscheint, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil er das nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Eingabeaufforderung.

Nicht nur ist der Platzhalter nicht zugänglich für Bildschirmleser, sondern sobald der Benutzer Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitentranslationsfunktionen können Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder) Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>` Element kennzeichnen müssen, verwenden Sie das {{HTMLElement("label")}} Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, aber garantiert nicht, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format sein müssen, sollten sie _immer_ auch serverseitig geprüft werden. Bei ungültigem Format ist eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurückzugeben.

Neben der Verwendung von CSS zum Stylen von Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Stati basierend auf dem aktuellen Zustand jeder Eingabe, wie im Abschnitt zu [UI-Pseudoklassen](#ui-pseudoklassen) oben beschrieben, ermöglicht der Browser eine client-seitige Validierung bei (versuchter) Formularübermittlung. Bei der Formularübermittlung wird von unterstützenden Browsern auf dem ersten ungültigen Formularelement eine Fehlermeldung angezeigt, in der entweder eine Standardmeldung basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Nachricht angezeigt wird.

Einige Eingabetyen und andere Attribute legen Beschränkungen fest, welche Werte für eine bestimmte Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Diverse Fehler könnten auftreten, darunter ein `rangeUnderflow` Fehler, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Zahl (der Anforderungen des `step` Attributs nicht entspricht), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich möglicher Werte periodisch ist (d.h. dass die Werte sich am höchsten möglichen Wert wieder zurück auf den Anfang zurücksetzen, anstatt zu enden), können die Werte der [`max`](#max) und [`min`](#min) Eigenschaften umgekehrt werden, was darauf hinweist, dass der Bereich der erlaubten Werte bei `min` beginnt, wieder auf den niedrigsten möglichen Wert zurückspringt und dann weitergeht bis `max` erreicht ist. Dies ist besonders nützlich für Daten und Zeiten, z. B., wenn Sie möchten, dass der Bereich von 20:00 Uhr bis 08:00 Uhr reicht:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und ihre Werte können zu einem spezifischen [`ValidityState`](/de/docs/Web/API/ValidityState) Fehler führen:

<table class="no-markdown">
  <caption>
    Validitätsobjektfehler hängen von den <code>&lt;input&gt;</code>
    Attributen und deren Werten ab:
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
        Tritt auf, wenn der Wert größer ist als der maximal durch das <code>max</code> Attribut definierte Wert.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen die durch die <code>maxlength</code> Eigenschaft erlaubte Anzahl übersteigt.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der durch das <code>min</code> Attribut definierte Minimalwert.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code> Eigenschaft erforderliche Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein pattern Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> damit nicht übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code> Attribut vorhanden ist, der Wert jedoch <code>null</code> ist oder radio oder checkbox nicht markiert sind.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Standard-Inkrement ist <code>1</code>, also sind nur ganze Zahlen gültig bei <code>type="number"</code>, wenn kein Schritt inkludiert ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom korrekten Typ ist, beispielsweise, wenn eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement das `required` Attribut nicht hat, ist ein kein Wert oder eine leere Zeichenfolge nicht ungültig. Selbst wenn die obigen Attribute mit Ausnahme von `required` vorhanden sind, führt eine leere Zeichenfolge nicht zu einem Fehler.

Wir können Grenzen festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer darauf hinweisen, wenn bei der Übermittlung ein Fehler vorliegt.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält das `validityState` Interface die booleschen Lese-schreibgeschützten Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften gibt ein `true` Wert an, dass der angegebene Grund für das Fehlschlagen der Validierung wahr ist, mit Ausnahme der `valid` Eigenschaft, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

Wenn ein Fehler auftritt, werden unterstützende Browser den Benutzer sowohl darauf hinweisen als auch verhindern, dass das Formular abgesendet wird. Ein Wort der Vorsicht: Wenn eine benutzerdefinierte Fehlermeldung auf einen wahrheitsgemäßen Wert gesetzt wird (alles außer die leere Zeichenfolge oder `null`), wird das Absenden des Formulars verhindert. Wenn es keine benutzerdefinierte Fehlermeldung gibt und keine der anderen Eigenschaften wahr zurückgibt, wird `valid` wahr und das Formular kann übermittelt werden.

```js
function validate(input) {
  let validityState = input.validity;
  if (validityState.valueMissing) {
    input.setCustomValidity("A value is required");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("Your value is too low");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("Your value is too high");
  } else {
    input.setCustomValidity("");
  }
}
```

Die letzte Zeile, die die benutzerdefinierte Validitätsnachricht auf die leere Zeichenfolge setzt, ist unerlässlich. Wenn der Benutzer einen Fehler macht und die Validität eingestellt ist, wird das Formular nicht abgesendet, auch wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandten) Elementen verfügbar ist. Betrachten Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen werden dazu führen, dass diese eine Standardfehlermeldung erzeugt, wenn Sie versuchen, das Formular entweder mit einem ungültigen Wert oder ohne Wert auszufüllen, oder einem Wert, der nicht mit dem `pattern` übereinstimmt.

Wenn Sie stattdessen benutzerdefinierte Fehlermeldungen anzeigen möchten, könnten Sie JavaScript wie folgendes verwenden:

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

Das Beispiel rendert so:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich der Wert ändert, durch den Einsatz der `checkValidity()` Methode über den `input` Ereignishandler.
- Wenn der Wert ungültig ist, wird ein `invalid` Ereignis ausgelöst, und die `invalid` Ereignishandlerfunktion ausgeführt. Innerhalb dieser Funktion prüfen wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht mit dem Muster übereinstimmt, unter Verwendung eines `if ()` Blocks und setzen eine benutzerdefinierte Gültigkeitsfehlermeldung.
- Folglich, wenn der Eingabewert ungültig ist, wenn die Senden-Schaltfläche gedrückt wird, wird eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er wie erwartet übermittelt. Damit dies geschehen kann, muss die benutzerdefinierte Validität aufgehoben werden, indem Sie `setCustomValidity()` mit einem leeren Zeichenfolgenwert ausführen. Wir machen dies daher jedes Mal, wenn das `input` Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Validität zuvor festgelegt wurde, registriert die Eingabe als ungültig, selbst wenn sie derzeit einen gültigen Wert bei der Übermittlung enthält.

> [!NOTE]
> Validieren Sie stets Eingabeeinschränkungen sowohl clientseitig als auch serverseitig. Die Einschränkungsvalidierung entfernt nicht die Notwendigkeit einer Validierung an der _Server-Seite_. Ungültige Werte können weiterhin von älteren Browsern oder böswilligen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte lange ein proprietäres Fehlerattribut — `x-moz-errormessage` —, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Art festzulegen. Dieses wurde ab Version 66 entfernt (siehe [Firefox Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>` Typen hängen von der Lokalisierung ab. In einigen Regionen ist 1.000,00 eine gültige Zahl, während in anderen Regionen der gültige Weg, diese Zahl einzugeben, 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Lokalisierung zur Validierung der Benutzereingabe zu bestimmen (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang` Attribut auf dem Element oder einem seiner Elternteile angegeben wird.
- Versuchen Sie die Sprache, die von einem `Content-Language` HTTP-Header angegeben wird. Oder,
- Wenn keine angegeben ist, verwenden Sie die Browser-Sprache.

## Barrierefreiheit

### Labels

Wenn Eingaben hinzugefügt werden, ist es eine Voraussetzung zur Barrierefreiheit, Labels nebenhinzuzufügen. Dies ist notwendig, damit Benutzer, die Hilfstechnologien verwenden, erkennen können, wofür die Eingabe ist. Auch das Klicken oder Berühren eines Labels fokussiert das zugehörige Formulareingabefeld. Dies verbessert die Barrierefreiheit und Benutzbarkeit für sehende Benutzer, erhöht die Fläche, die ein Benutzer zum Klicken oder Berühren aktivieren kann, und ist besonders nützlich (und sogar notwendig) für Kontrollkästchen und Radiobuttons, die winzig sind. Für mehr Informationen über Labels im Allgemeinen siehe [Labels](#labels).

Das folgende ist ein Beispiel, wie man das `<label>` mit einem `<input>` Element im oben beschriebenen Stil verknüpft. Sie müssen dem `<input>` ein `id` Attribut geben. Das `<label>` benötigt dann ein `for` Attribut, dessen Wert mit der `id` des Eingabefelds übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten eine Fläche bieten, die groß genug ist, um leicht aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Personen mit motorischen Beeinträchtigungen und Personen, die nicht-präzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine Mindest-Interaktionsgröße von 44×44 [CSS-Pixel](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Erfolgskriterium 2.5.5 verstehen: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>, gelistet, übermittelbar, rücksetzbares, formular-assoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseologie-Inhalt</a>. Wenn das <a href="#type"><code>type</code></a> nicht `hidden` ist, dann etikettierbares Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leerelement")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseologie-Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
                ohne <code>list</code> Attribut:
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
                ohne <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
                ohne <code>list</code> Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                ohne <code>list</code> Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                ohne <code>list</code> Attribut:
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a ></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=color|date|datetime-local|file|hidden|month|password|time|week</code>:
            <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine Entsprechende Rolle</a>
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a> wenn verwendet
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
            <code>type=text</code> ohne <code>list</code> Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            oder <code>text</code> mit <code>list</code> Attribut: keine
            <code>role</code> erlaubt
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM Interface</th>
      <td>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("appearance")}} Eigenschaft
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formularwidgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formularbeschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
