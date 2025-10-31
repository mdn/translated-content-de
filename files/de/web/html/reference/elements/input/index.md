---
title: "<input>: Das HTML-Eingabe-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`<input>`**-Element im [HTML](/de/docs/Web/HTML) wird verwendet, um interaktive Steuerungen für webbasierte Formulare zu erstellen, damit Daten vom Benutzer akzeptiert werden können; eine Vielzahl von Eingabedatentypen und Steuerungs-Widgets sind verfügbar, abhängig von dem Gerät und dem {{Glossary("user_agent", "User-Agent")}}. Das `<input>`-Element ist eines der mächtigsten und komplexesten in ganz HTML aufgrund der schieren Anzahl von Kombinationen aus Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich, abhängig vom Wert seines [`type`](#type)-Attributs, daher werden die unterschiedlichen Typen in eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird standardmäßig der Typ `text` verwendet.

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
      <th>Einfach Beipiele</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/button", "button")}}</td>
      <td>
        Eine Schaltfläche ohne voreingestelltes Verhalten, die den Wert des <a href="#value"><code>value</code></a>-Attributs anzeigt, standardmäßig leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Kontrollkästchen, das einzelne Werte auswählbar/nicht auswählbar macht.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Eine Steuerung zum Festlegen einer Farbe; öffnet einen Farbwähler in unterstützenden Browsern.
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
        Eine Steuerung zur Eingabe eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumsauswähler oder Zahlenwalzen für Jahr, Monat, Tag in unterstützenden Browsern.
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
        Eine Steuerung zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder Zahlenwalzen für Datum- und Uhrzeitkomponenten in unterstützenden Browsern.
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
        Ein Feld zum Bearbeiten einer E-Mail-Adresse. Sieht aus wie eine
        <code>text</code>-Eingabe, hat jedoch Validierungsparameter und relevante
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
        Server gesendet wird. Es ist ein Beispiel in der nächsten Spalte vorhanden, aber es ist verborgen!
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
        Ein grafischer <code>submit</code>-Button. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert ist.
        Das <a href="#alt"><code>alt</code></a>-Attribut wird angezeigt, falls das Bild <a href="#src"><code>src</code></a> fehlt.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>Eine Steuerung zur Eingabe eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Eine Steuerung zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt standardmäßig
        eine Validierung hinzu. Zeigt ein numerisches Tastenfeld auf einigen Geräten
        mit dynamischen Tastaturen an.
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
        Ein einzeiliges Textfeld, dessen Wert verdeckt ist.
        Warnt den Benutzer, wenn die Seite nicht sicher ist.
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
        Eine Optionsschaltfläche, die es ermöglicht, einen einzigen Wert aus mehreren Auswahlmöglichkeiten mit dem gleichen <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Eine Steuerung zur Eingabe einer Zahl, deren exakter Wert nicht wichtig ist.
        Zeigt als Standardwert ein Bereichs-Widget in der Mitte an.
        Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich akzeptabler Werte zu definieren.
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
        Eine Schaltfläche, mit der der Inhalt des Formulars auf Standardwerte zurückgesetzt wird. Nicht empfohlen.
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
        automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern ein Löschsymbol enthalten, das zum Leeren des Feldes verwendet werden kann. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
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
        Eine Steuerung zur Eingabe einer Telefonnummer. Zeigt ein Telefon-Tastenfeld
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code>-Eingabe, weist jedoch Validierungsparameter und relevante Tastaturen in unterstützten Browsern und Geräten mit dynamischen Tastaturen auf.
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
        Eine Steuerung zur Eingabe eines Datums bestehend aus einer Jahreszahl und einer Wochenzahl ohne Zeitzone.
      </td>
      <td id="exampleweek">
        <pre class="brush: html hidden">
&#x3C;input type="week" name="week"/></pre>
        {{EmbedLiveSample("exampleweek",200,55)}}
      </td>
    </tr>
    <tr>
      <th colspan="3">Obsolete Werte</th>
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

Das `<input>`-Element ist so mächtig wegen seiner Attribute; das [`type`](#type)-Attribut, mit Beispielen oben beschrieben, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch die gleiche Menge an Attributen. In Realität haben die meisten Attribute jedoch nur Auswirkungen auf einen bestimmten Teil der Eingabetypen. Darüber hinaus beeinflusst die Art und Weise, wie einige Attribute eine Eingabe beeinflussen, verschiedene Eingabetypen in unterschiedlicher Weise.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut ausführlicher beschreibt und mit welchen Eingabetypen sie verbunden sind. Attribute, die für die meisten oder alle Eingabetypen üblich sind, werden ausführlicher unten definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind — oder Attribute, die für alle Eingabetypen allgemein sind, aber besonderes Verhalten auf bestimmten Eingabetypen haben — sind stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                       | Beschreibung                                                                                              |
| --------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                        | Hinweis für erwarteten Dateityp in Dateiupload-Steuerungen                                                |
| [`alpha`](#alpha)                             | `color`                                                                       | Deckkraft der Farbe                                                                                       |
| [`alt`](#alt)                                 | `image`                                                                       | Alt-Attribut für den Bildtyp. Erforderlich für Zugänglichkeit                                             |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email`, und `password`                                     | Steuert die automatische Großschreibung im eingegebenen Text.                                             |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio`, und Schaltflächen                             | Hinweis für die Formular-Autovervollständigungsfunktion                                                   |
| [`capture`](#capture)                         | `file`                                                                        | Medienerfassungsmethode in Dateiupload-Steuerungen                                                        |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                           | Ob der Befehl oder die Steuerung aktiviert ist                                                            |
| [`colorspace`](#colorspace)                   | `color`                                                                       | Der verwendete {{Glossary("Color_space", "Farbraum")}} für die Auswahl des Farbwerts                      |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                             | Name des Formularfeldes zur Übermittlung der Richtung des Elements bei der Formularübermittlung           |
| [`disabled`](#disabled)                       | alle                                                                          | Ob die Formularsteuerung deaktiviert ist                                                                  |
| [`form`](#form)                               | alle                                                                          | Verbindet die Steuerung mit einem Formularelement                                                         |
| [`formaction`](#formaction)                   | `image`, `submit`                                                             | URL zur Formularübermittlung                                                                              |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                             | Zu verwendender Kodierungstyp der Formulardatensätze für die Formularübermittlung                         |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                             | HTTP-Methode zur Formularübermittlung                                                                     |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                             | Umgeht die Formularkontrollvalidierung bei der Formularübermittlung                                       |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                             | Browsing-Kontext für die Formularübermittlung                                                             |
| [`height`](#height)                           | `image`                                                                       | Entspricht dem Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                              |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio`, und Schaltflächen       | Wert des ID-Attributs der {{htmlelement('datalist')}} für Verarbeitungsvorschläge                         |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Maximalwert                                                                                               |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                           | Maximale Länge (Anzahl Zeichen) des `value`                                                               |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Minimalwert                                                                                               |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                           | Minimale Länge (Anzahl Zeichen) des `value`                                                               |
| [`multiple`](#multiple)                       | `email`, `file`                                                               | Boolean. Ob mehrere Werte erlaubt sind                                                                    |
| [`name`](#name)                               | alle                                                                          | Name der Formularsteuerung. Wird mit dem Formular als Teil eines Name/Wert-Paares übermittelt             |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                           | Muster, das der `value` entsprechen muss, um gültig zu sein                                               |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                 | Text, der in der Formularsteuerung erscheint, wenn kein Wert festgelegt ist                               |
| [`popovertarget`](#popovertarget)             | `button`                                                                      | Bezeichnet ein `<input type="button">` als Steuerung für ein Popover-Element                              |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                      | Gibt die Aktion an, die eine Popover-Steuerung ausführen sollte                                           |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio`, und Schaltflächen | Boolean. Der Wert ist nicht bearbeitbar                                                                   |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color`, und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss überprüft werden, damit das Formular übermittelt werden kann |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                           | Größe der Steuerung                                                                                       |
| [`src`](#src)                                 | `image`                                                                       | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                       |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Inkrementelle Werte, die gültig sind                                                                      |
| [`type`](#type)                               | alle                                                                          | Typ der Formularsteuerung                                                                                 |
| [`value`](#value)                             | alle außer `image`                                                            | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht dies dem Anfangswert                           |
| [`width`](#width)                             | `image`                                                                       | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                                |

Einige zusätzliche nicht standardisierte Attribute sind nach den Beschreibungen der standardisierten Attribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Nur gültig für den `file`-Eingabetyp. Das `accept`-Attribut definiert, welche Dateitypen in einer `file`-Upload-Steuerung auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alpha` {{experimental_inline}}
  - : Nur gültig für den `color`-Eingabetyp. Das `alpha`-Attribut ermöglicht es dem Endbenutzer, die Deckkraft der ausgewählten Farbe festzulegen.

- `alt`
  - : Nur gültig für den `image`-Button. Das `alt`-Attribut bietet alternativen Text für das Bild und zeigt den Wert des Attributs an, wenn das Bild [`src`](#src) fehlt oder nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und falls ja, in welcher Weise. Siehe die [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)-Seite zum globalen Attribut für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolean-Attribut!) Das `autocomplete`-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette an, die beschreibt, welche Art von Autovervollständigungsfunktion die Eingabe bereitstellen soll, wenn überhaupt. Eine typische Implementierung von Autovervollständigung ruft vorherige Werte ab, die im gleichen Eingabefeld eingegeben wurden, aber es können auch komplexere Formen der Autovervollständigung existieren. Beispielsweise könnte ein Browser mit einer Geräteliste von Kontakten integriert werden, um automatisch E-Mail-Adressen in einem E-Mail-Eingabefeld zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für erlaubte Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist gültig für alle Eingabetypen außer `checkbox`, `radio`, `file` oder eine der Schaltflächenarten.

    Siehe das [Attribut `autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen über Passwortsicherheit und wie `autocomplete` für `hidden` etwas anders ist als für andere Eingabetypen.

- `autofocus`
  - : Ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass das Eingabefeld automatisch den Fokus haben soll, wenn die Seite geladen ist (oder wenn das {{HTMLElement("dialog")}}-Element, das das Eingabefeld enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erlangen, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn auf mehr als einem Element vorhanden, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben keinen Fokus erhalten können.

    > [!WARNING]
    > Das automatische Fokussieren einer Formularsteuerung kann sehbehinderte Personen, die Bildschirmlesetechnologien verwenden, sowie Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, "teleportieren" Bildschirmlesegeräte den Benutzer ohne vorherige Warnung zur Formularsteuerung.

    Verwenden Sie sorgfältige Überlegungen zur Barrierefreiheit, wenn Sie das `autofocus`-Attribut anwenden. Das automatische Fokussieren auf eine Steuerung kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmlesegerät das Etikett der Formularsteuerung, die den Fokus erhält, ankündigen wird, wird es nichts vor dem Etikett ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird ebenso den Kontext der vorhergehenden Inhalte verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML-Medienerfassungsspezifikation und nur gültig für den `file` Eingabetyp, definiert das `capture`-Attribut, welches Medium (Mikrofon, Video oder Kamera) verwendet werden sollte, um eine neue Datei für den Upload mit `file`-Upload-Steuerung in unterstützenden Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`
  - : Gültig für Radio- und Kontrollkästchentypen. `checked` ist ein Boolean-Attribut. Wenn es auf einem `radio`-Typ vorhanden ist, gibt es an, dass die Optionsschaltfläche die derzeit ausgewählte innerhalb der Gruppe von gleichnamigen Optionsschaltflächen ist. Wenn es auf einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig (beim Laden der Seite) aktiviert ist. Es gibt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt sich dies nicht in diesem Inhaltsattribut wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Anders als andere Eingabesteuerungen wird der Wert eines Kontrollkästchens und von Optionsschaltflächen nur dann in die übermittelten Daten aufgenommen, wenn sie derzeit `checked` sind. Wenn das der Fall ist, werden der Name und die Wert(e) der aktivierten Steuerungen übermittelt.
    >
    > Beispielsweise, wenn ein Kontrollkästchen dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen angekreuzt ist, werden die übermittelten Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgelistet. Der Standardwert für Kontrollkästchen und Optionsschaltflächen ist `on`.

- `colorspace` {{experimental_inline}}
  - : Nur gültig für den `color`-Eingabetyp. Das `colorspace`-Attribut gibt den {{Glossary("Color_space", "Farbraum")}} an, der vom Eingabetyp `type="color"` verwendet wird. Mögliche {{Glossary("enumerated", "aufgezählte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dazu gehören [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und {{cssxref("hex-color")}} Werte. Der Farbwert ist auf 8-Bit pro `r`, `g` und `b`-Komponente beschränkt. Dies ist der Standard.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3 Farbraum")}}, z.B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Nur gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen. Das `dirname`-Attribut ermöglicht die Übermittlung der Richtung des Elements. Wenn es enthalten ist, wird die Formularsteuerung mit zwei Name/Wert-Paaren übermittelt: zuerst das [`name`](#name)/[`value`](#value)-Paar und dann der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das obige Formular übermittelt wird, werden sowohl das `name` / `value`-Paar `fruit=cherry` als auch das `dirname` / Richtungs-Paar `fruit-dir=ltr` gesendet.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass der Benutzer nicht mit der Eingabe interagieren soll. Deaktivierte Eingaben werden typischerweise mit einer dunkleren Farbe oder durch eine andere Form von Indikation dargestellt, dass das Feld nicht verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular gesendet.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation gefordert, wird Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` über Seitenladevorgänge hinweg [beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Eine Zeichenfolge, die das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (d.h. sein **Formulareigentümer**). Der Wert dieser Zeichenfolge, wenn vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im gleichen Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, ist das `<input>`-Element mit dem nächstgelegenen enthaltenden Formular verknüpft, falls vorhanden.

    Das `form`-Attribut ermöglicht es, ein Eingabefeld irgendwo im Dokument zu platzieren, aber es in einem Formular anderswo im Dokument einzuschließen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Weitere Informationen siehe {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Weitere Informationen siehe {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Weitere Informationen siehe {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Weitere Informationen siehe {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Weitere Informationen siehe {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Nur gültig für den `image`-Eingabeknopf. Die `height` ist die Höhe der Bilddatei, die angezeigt werden soll, um den grafischen Senden-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente, einschließlich aller Eingabetypen, gültig ist. Es definiert eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um das Etikett mit der Formularsteuerung zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist. Es bietet einen Hinweis an Browser, welche Art von virtueller Tastaturkonfiguration zu verwenden ist, wenn dieses Element oder sein Inhalt bearbeitet wird. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der dem `list`-Attribut gegebene Wert sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements sein, das sich im gleichen Dokument befindet. Der `<datalist>` bietet eine Liste vordefinierter Werte, die dem Benutzer zur Vorschläge für dieses Eingabefeld gemacht werden. Alle Werte in der Liste, die mit dem [`type`](#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut den Spezifikationen wird das `list`-Attribut von `hidden`, `password`, `checkbox`, `radio`, `file` oder einer der Schaltflächenarten nicht unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Markierungen entlang eines Bereichs oder sogar ein Eingabefeld, das sich wie ein {{HTMLElement("select")}} öffnet, aber auch nicht gelistete Werte zulässt. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`. Es definiert den größten Wert im Bereich der zulässigen Werte. Wenn der eingegebene [`value`](#value) in das Element diesen Wert überschreitet, schlägt das Element bei der [Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, dann hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich übergreifend ist; zum Beispiel können Sie so einen Zeitbereich von 22:00 bis 4:00 Uhr angeben.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`. Es definiert die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert ab 0 oder mehr sein. Wenn kein `maxlength` angegeben ist, oder ein ungültiger Wert angegeben ist, hat das Feld keine Maximallänge. Dieser Wert muss auch größer oder gleich dem `minlength`-Wert sein.

    Der Eingabewert wird bei der [Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Textes größer ist als `maxlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das `maxlength`-Attribut erlaubt sind. Die Beschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Validierung auf der Clientseite](#client-seitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`. Es definiert den kleinsten Wert im Bereich der zulässigen Werte. Wenn der eingegebene [`value`](#value) in das Element kleiner als dieser ist, schlägt das Element bei der [Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, dann hat das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert kleiner ist als der durch das `min`-Attribut erlaubte Mindestwert, wird die Beschränkungsvalidierung die Formularübermittlung verhindern. Siehe [Validierung auf der Clientseite](#client-seitige_validierung) für weitere Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie Daten oder Zeiten), kann der Wert des `max` niedriger sein als der Wert des `min`, was darauf hinweist, dass der Bereich übergreifend ist; zum Beispiel können Sie eine Zeitspanne von 22:00 bis 4:00 Uhr angeben.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`. Es definiert die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Der Eingabewert wird bei der [Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Textes kleiner ist als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}, was die Formularübermittlung verhindert. Die Beschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Validierung auf der Clientseite](#client-seitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das Boolean-Attribut `multiple`, wenn gesetzt, bedeutet, dass der Benutzer im E-Mail-Widget durch Kommas getrennte E-Mail-Adressen eingeben oder mehr als eine Datei mit der `file`-Eingabe auswählen kann. Siehe den {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `name`
  - : Eine Zeichenfolge, die einen Namen für die Eingabesteuerung angibt. Dieser Name wird zusammen mit dem Wert der Steuerung gesendet, wenn die Formulardaten übermittelt werden.

    Betrachten Sie `name` als obligatorisches Attribut (auch wenn es das nicht ist). Wenn eine Eingabe keinen angegebenen `Name` hat oder der `Name` leer ist, wird der Wert der Eingabe nicht mit dem Formular gesendet! (Deaktivierte Steuerungen, nicht markierte Optionsschaltflächen, nicht markierte Kontrollkästchen und Zurücksetzen-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_`: Wenn verwendet als Name eines `<input>` Elements des Typs {{HTMLElement("input/hidden", "hidden")}}, wird der Wert der Eingabe vom {{Glossary("user_agent", "User-Agent")}} automatisch auf die Zeilenkodierung gesetzt, die zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erstellt ein einzigartiges Verhalten für Optionsschaltflächen.

    Nur eine Optionsschaltfläche innerhalb einer Gruppe von gleichnamigen Optionsschaltflächen kann gleichzeitig aktiviert sein. Das Auswählen einer Optionsschaltfläche innerhalb dieser Gruppe hebt automatisch die Auswahl der derzeit ausgewählten Optionsschaltfläche in der gleichen Gruppe auf. Der Wert dieser einen aktivierten Optionsschaltfläche wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Beim Tabben in eine Serie von gleichnamigen Optionsschaltflächen, wenn eine aktiviert ist, wird diese den Fokus erhalten. Wenn sie nicht in der Quellreihenfolge gruppiert sind, und eine der Gruppe aktiviert ist, beginnt das Tabben in die Gruppe, wenn die erste der Gruppe erreicht wird, überspringt alle, die nicht aktiviert sind. Mit anderen Worten, wenn eine aktiviert ist, überspringt das Tabben die nicht markierten Optionsschaltflächen in der Gruppe. Wenn keine aktiviert ist, erhält die Gruppe von Optionsschaltflächen den Fokus, wenn die erste Schaltfläche in der gleichnamigen Gruppe erreicht wird.

    Sobald eine der Optionsschaltflächen innerhalb einer Gruppe den Fokus hat, navigieren die Pfeiltasten zwischen allen Optionsschaltflächen mit dem gleichen Namen, auch wenn die Optionsschaltflächen nicht in der Quellreihenfolge gruppiert sind.

    Wenn ein Eingabeelement einen `name` erhält, wird dieser Name Eigentum der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) Eigenschaft des zugehörigen Formularelements. Wenn Sie ein Eingabefeld namens `guest` und ein weiteres namens `hat-size` haben, können Sie den folgenden Code verwenden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, ist `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest` Field, und `hatSize` das Objekt für das `hat-size` Field.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer eingebauten Eigenschaft des Formulars entspricht, da Sie damit die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`. Das `pattern`-Attribut wird verwendet, um einen regulären Ausdruck zu kompilieren, den der `value` der Eingabe erfüllen muss, damit der Wert die [Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er von der {{jsxref("RegExp")}}-Type verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Es sollten keine Schrägstriche um den Text des Musters angegeben werden. Bei der Kompilierung des regulären Ausdrucks:
    1. wird das Muster implizit mit `^(?:` und `)$` eingeschlossen, sodass die Übereinstimmung gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag angegeben, sodass das Muster als Sequenz von Unicode-Zeichen interpretiert wird, anstelle von {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht leerer Wert nicht dem Muster entspricht, verhindert die Beschränkungsvalidierung die Formularübermittlung. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden kommagetrennten Wert getestet.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erläuternden Text in der Nähe bereitstellen. Sie können auch ein [`title`](#title)-Attribut hinzufügen, um zu erklären, welche Anforderungen an das Muster bestehen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Validierung auf der Clientseite](#client-seitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`. Das `placeholder`-Attribut bietet dem Benutzer einen kurzen Hinweis darauf, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Art von Daten gibt, anstelle einer Erklärung oder Aufforderung. Der Text _darf nicht_ Wagenrückläufe oder Zeilenvorschübe enthalten. Beispielsweise könnte ein geeignetes Platzhalter sein "z.B. Mustafa" für ein Feld, das den Vornamen eines Benutzers erfassen soll und dessen Etikett "Vorname" ist.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Labels](#labels).

- `popovertarget`
  - : Wandelt ein `<input type="button">`-Element in eine Popover-Steuerungsschaltfläche um; nimmt die ID des zu steuernden Popover-Elements als Wert. Weitere Details finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API)-Seite. Die Erstellung einer Beziehung zwischen einem Popover und seinem auslösenden Knopf mit dem `popovertarget`-Attribut hat zwei weitere nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und eine [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastaturnavigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover zugänglicher für Benutzer der Tastatur und unterstützender Technologien (AT) (siehe auch [Popover-Zugänglichkeitseigenschaften](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen beiden, was es sehr praktisch macht, Popover mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) relativ zu ihren Steuerungen zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die Aktion an, die auf einem mittels einer Steuerung `<input type="button">` gesteuerten Popover-Element ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Die Schaltfläche wird ein angezeigtes Popover ausblenden. Wenn Sie versuchen, ein bereits verstecktes Popover auszublenden, wird keine Aktion ausgeführt.
    - `"show"`
      - : Die Schaltfläche wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Die Schaltfläche wird ein Popover zwischen sichtbar und versteckt umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover bereits angezeigt wird, wird es ausgeblendet. Wenn `popovertargetaction` ausgelassen wird, wird `"toggle"` als Standardaktion ausgeführt, die von der Steuerungsschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das, wenn es vorhanden ist, anzeigt, dass der Benutzer den Wert der Eingabe nicht bearbeiten kann. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Weitere Informationen finden Sie im [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das zugehörige Formular übermittelt werden kann. Das `required`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Siehe [Validierung auf der Clientseite](#client-seitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für weitere Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`. Das `size`-Attribut gibt an, wie viel der Eingabe angezeigt wird. Im Wesentlichen erzeugt es das gleiche Ergebnis wie das Festlegen der CSS-Eigenschaft [`width`](/de/docs/Web/CSS/Reference/Properties/width), mit einigen Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`
  - : Nur gültig für den `image`-Eingabeknopf. Die `src` ist eine Zeichenfolge, die die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Senden-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`. Das `step`-Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss. Nur Werte, die eine ganze Anzahl von Schritten vom Schrittbasiswert entfernt sind, sind gültig. Der Schrittbasiswert ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), falls angegeben, ansonsten [`value`](#value) oder `0`, wenn keiner angegeben ist (außer `week`, das einen Schrittbasiswert von −259,200,000 hat, der den Start der Woche `1970-W01` darstellt).

    Wenn nicht explizit eingeschlossen:
    - `step` standardmäßig auf 1 für `number` und `range`.
    - Jeder Date-/Zeit-Eingabetyp hat einen Standard-`step`-Wert, der für den Typ geeignet ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step), und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein — Ganzzahl oder Fließkommazahl — oder der spezielle Wert `any`, was bedeutet, dass keine stufenweise Erweiterung impliziert wird und jeder Wert erlaubt ist (barring other constraints, like [`min`](/de/docs/Web/HTML/Reference/Attributes/min) and [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Wenn Sie beispielsweise `<input type="number" min="10" step="2">` haben, dann ist jede gerade Ganzzahl, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig `1` ist. Für `4.2`, um gültig zu sein, müsste `step` auf `any`, 0.1, 0.2 gesetzt sein oder der `min`-Wert müsste eine Zahl sein, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, wird der Wert in der Beschränkungsvalidierung als ungültig angesehen und entspricht der `:invalid`-Pseudoklasse.

    Siehe [Validierung auf der Clientseite](#client-seitige_validierung) für weitere Informationen.

- `tabindex`
  - : Globales Attribut, das für alle Elemente, einschließlich aller Eingabetypen, gültig ist. Ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus nehmen kann (fokusbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen außer dem Eingabetyp `hidden` fokussierbar sind, sollte dieses Attribut nicht für Formularsteuerungen verwendet werden, da dies die Verwaltung der Fokusreihenfolge für alle Elemente innerhalb des Dokuments erfordern würde, wodurch die Gefahr besteht, die Benutzerfreundlichkeit und Zugänglichkeit zu schädigen, wenn es falsch gemacht wird.

- `title`
  - : Globales Attribut, das für alle Elemente, einschließlich alle Eingabetypen, gültig ist. Es enthält einen Text, der Beratungsinformationen zu dem Element darstellt, zu dem es gehört. Solche Informationen können normalerweise, aber nicht unbedingt, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks der Formularsteuerung verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut der Formularsteuerung gesetzt ist. Siehe [Etiketten](#labels) unten.

- `type`
  - : Eine Zeichenkette, die den Typ der zu rendernden Steuerung angibt. Beispielsweise wird zur Erstellung eines Kontrollkästchens ein Wert von `checkbox` verwendet. Wenn dieses Attribut weggelassen wird (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet, d.h. es wird ein schlichtes Texteingabefeld erstellt.

    Zugelassene Werte sind in den [Eingabetypen](#input_types) oben aufgeführt.

- `value`
  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Anfangswert und kann von da an jederzeit über JavaScript modifiziert oder abgerufen werden, indem auf die `value`-Eigenschaft des entsprechenden [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekts zugegriffen wird. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`
  - : Nur gültig für den `image`-Eingabeknopf. Die `width` ist die Breite der Bilddatei, die angezeigt werden soll, um den grafischen Senden-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind ebenfalls in einigen Browsern verfügbar. Generell sollten Sie deren Nutzung vermeiden, es sei denn, es gibt keine Alternative.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, um Live-Suchergebnisse zu aktualisieren, während der Benutzer den Wert des Feldes noch bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste beim Bearbeiten des
        Feldes drückt; dies wird verwendet, um ein geeignetes Label für diese Taste auf einer
        virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Ausrichtung des Bereichsreglers fest. <strong>Nur Firefox.</strong>.
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
        Ein Boolean, der angibt, ob dem Benutzer nur die Auswahl eines Verzeichnisses (oder mehrerer Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) erlaubt werden soll.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher wird es von Safari, Opera, Chrome usw. unterstützt), das, wenn vorhanden, dem {{Glossary("user_agent", "User-Agent")}} mitgeteilt wird, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer eine Suche explizit initiiert (z. B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes).

    Das `search`-Ereignis ist so rate-begrenzt, dass es nicht häufiger als in durch die Implementierungs-Definierte Intervall gesendet wird.

- `orient` {{non-standard_inline}}
  - : Ähnlich wie die -moz-orient nicht-standardisierte CSS-Eigenschaft, die die {{htmlelement('progress')}} und {{htmlelement('meter')}}-Elemente betrifft, definiert das `orient`-Attribut die Ausrichtung des Bereichsschiebers. Werte beinhalten `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wobei der Bereich vertikal gerendert wird. Siehe [Erstellung vertikaler Formularsteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularsteuerungen.

- `results` {{non-standard_inline}}
  - : Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die an das `<input>`-Element im nativen Drop-down-Menü vorheriger Suchanfragen angezeigt wird.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert eingegeben wird, wird die Standard-Maximalanzahl der Einträge des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass nur Verzeichnisse vom Benutzer im Dateiauswahlfenster ausgewählt werden dürfen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` in Microsoft Edge sowie in Firefox 50 und höher nutzbar. Obwohl es also eine relativ breite Unterstützung hat, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden durch das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interface bereitgestellt, welches `<input>`-Elemente im DOM repräsentiert. Ebenso verfügbar sind die Methoden, die in den übergeordneten Interfaces [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) definiert sind.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und meldet (falls das Ereignis nicht abgebrochen wird) das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie z.B. ein visueller Farbwähler oder Kalendereingabe) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine bestimmte Zeichenkette. Ein `selectMode`-Parameter steht zur Verfügung, um zu steuern, wie der vorhandene Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines textuellen Eingabeelements aus. Macht für Eingaben, die nicht als Texteingabefelder präsentiert werden, nichts.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browserauswahldialog für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber durch einen Tastendruck oder andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert standardmäßig den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Merkmale, die bei nicht-formularbasierten Elementen nicht anwendbar sind. Es gibt CSS-Selektoren, die speziell auf Formularelemente basierend auf ihren UI-Eigenschaften abzielen können, auch bekannt als UI-Pseudoklassen. Das Eingabeelement kann auch nach Typ mit Attributselektoren adressiert werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudoklassen, die relevant für das
    <code>&#x3C;input></code>
    Element sind:
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
        Jedes momentan aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, hineingeschrieben, etc.) oder den Fokus annehmen kann und auch einen deaktivierten Zustand besitzt, in dem es nicht aktiviert werden oder den Fokus annehmen kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes momentan deaktivierte Element, das einen aktivierten Zustand hat, d.h. es könnte ansonsten aktiviert werden (ausgewählt, angeklickt, hineingeschrieben, etc.) oder den Fokus annehmen, wäre es nicht deaktiviert.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element, das vom Benutzer nicht bearbeitet werden kann</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das momentan <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das bisher noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die in einer Gruppe verwandter Elemente die Standardwerte sind. Es wird passend gemacht zu {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}}, die beim Laden oder Darstellung der Seite ausgewählt waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passend für {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}}, die momentan ausgewählt sind (und die {{HTMLElement("option")}} in einem {{HTMLElement("select")}}, das momentan ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente deren indeterminate Eigenschaft durch JavaScript auf true gesetzt ist, {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Radiobuttons mit demselben Namen im Formular nicht ausgewählt sind, und {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die Gültigkeitsüberprüfung angewendet werden kann und die momentan gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die Gültigkeitsüberprüfung angewendet wird und die momentan ungültig sind. Entspricht einem Formularelement, dessen Wert nicht mit den durch seine Attribute gesetzten Einschränkungen übereinstimmt, wie z.B. <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>-Attribute und die <a href="#step"><code>step</code></a> angegebenen Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>-Attribute angegebenen Bereichsgrenzen liegt oder die das <a href="#step"><code>step</code></a>-Kriterium nicht erfüllt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Passt nur zu Elementen, die erforderlich sein können.
        Das Attribut, das auf einem nicht erforderlichen Element enthalten ist, führt nicht zu einem Treffer.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut NICHT gesetzt hat.
        Passt nicht zu Elementen, die nicht erforderlich sein können.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente, die momentan keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, wird aber beim Verlassen aktiviert. Passt zu ungültigen Eingaben, jedoch nur nach der Benutzerinteraktion, wie das Fokussieren auf das Element, Verlassen des Elements oder der Versuch, das Formular mit dem ungültigen Element zu senden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Auswahldialog für den Benutzer anzeigen, um einen Wert auszuwählen (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>), jedoch nur, wenn das Element im offenen Zustand ist, also, wenn der Auswahldialog angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen-Beispiel

Wir können das Label einer Checkbox basierend darauf stylen, ob die Checkbox ausgewählt ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}-Elements, das direkt nach einer ausgewählten Eingabe kommt. Wir haben keine Stile angewendet, wenn das `input` nicht ausgewählt ist.

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

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren passen Elemente basierend entweder nur auf das Vorhandensein eines Attributs oder den Wert eines bestimmten Attributs an.

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

Standardmäßig ist das Aussehen von Placeholder-Text transluzent oder hellgrau. Der {{cssxref('::placeholder')}} Pseudo-Element ist der [`placeholder` Text](#placeholder) der Eingabe. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestyled werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Unterbereich von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudo-Element angewendet werden können, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### caret-color

Eine spezifische Eigenschaft für textbezogene Eingabeelemente ist die CSS-Eigenschaft {{cssxref("caret-color")}}, die es Ihnen ermöglicht, die Farbe festzulegen, die zum Zeichnen des Text Eingabecursors verwendet wird:

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

Die Eigenschaft {{cssxref("field-sizing")}} ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie erhalten standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, sodass Formularelemente sich in der Größe an ihren Inhalt anpassen können.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt durch Schrumpfen einhüllen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file), und {{htmlelement("textarea")}}-Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es so ist, können die Position und die Größe des Elements innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Weitere Informationen zum Hinzufügen von Farben zu Elementen in HTML finden Sie unter:

- [Applying color to HTML elements using CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling HTML forms](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Advanced styling for HTML forms](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Eigenschaften

### Labels

Labels sind notwendig, um unterstützenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element bietet erklärende Informationen über ein Formularfeld, das _immer_ angemessen ist (abgesehen von Layout-Angelegenheiten, die Sie haben mögen). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder ein {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugehörige Labels

Die semantische Zuordnung von `<input>`- und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Bildschirmlesegeräte. Indem sie mit dem [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut von `<label>` gepaart werden, verbinden sie das Label mit der Eingabe, was Bildschirmlesegeräten hilft, Eingabefelder den Benutzern präziser zu erläutern.

Es reicht nicht aus, einfachen Text neben das `<input>`-Element zu setzen. Vielmehr erfordert die Benutzerfreundlichkeit und Zugänglichkeit die Einbindung eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht zugänglich: Es besteht keine Beziehung zwischen dem Hinweistext und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere 'Trefferfläche' für Maus- und Touchscreen-Nutzer zum Klicken oder Berühren. Durch die Kopplung eines `<label>` mit einem `<input>` wird das `<input>` sowohl durch Klicken auf das `<label>` als auch auf das `<input>` fokussiert. Wenn Sie normalen Text verwenden, um Ihr Eingabefeld zu beschriften, geschieht dies nicht. Es ist hilfreich für Menschen mit motorischen Funktionseinschränkungen, wenn der Hinweistext Teil des Aktivierungsbereichs der Eingabe ist.

Als Webentwickler ist es wichtig, dass wir niemals davon ausgehen, dass Menschen all das wissen werden, was wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und damit auch Ihre Website – garantiert praktisch, dass einige Besucher Ihrer Website einige Unterschiede in den Denkprozessen und/oder Umständen haben, die sie dazu führen, Ihre Formulare sehr unterschiedlich von Ihnen zu interpretieren, ohne klare und korrekt präsentierte Labels.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text zu spezifizieren, der innerhalb des Inhaltsbereichs des `<input>`-Elements selbst erscheint, wenn er leer ist. Der Platzhalter sollte niemals benötigt werden, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil er das nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Hinweis.

Nicht nur ist der Platzhalter nicht für Bildschirmleser zugänglich, sondern er verschwindet auch, sobald der Benutzer Text in das Formularelement eingibt oder das Formularelement bereits einen Wert hat. Browser mit automatischen Seitenübersetzungsfunktionen können Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element beschriften müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Die Client-seitige Validierung ist nützlich, garantiert jedoch nicht, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, überprüfen Sie dies _immer_ auch auf der Serverseite und senden Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400), wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Zustand jeder Eingabe zu stylen, wie oben im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) erwähnt, bietet der Browser clientseitige Validierung beim (versuchten) Absenden des Formulars. Beim Absenden des Formulars wird, wenn ein Formularelement die Beschränkungsvalidierung nicht besteht, von unterstützenden Browsern eine Fehlermeldung zu dem ersten ungültigen Formularelement angezeigt; entweder eine Standardnachricht basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Nachricht.

Einige Eingabetypen und andere Attribute begrenzen, welche Werte für eine bestimmte Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">` dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler können auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Zahl (also nicht den Anforderungen des `step`-Attributs entspricht), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich periodischer Werte ist (d.h. die Werte kehren nach Erreichen des höchsten möglichen Wertes zum Anfang zurück, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max)- und [`min`](#min)-Eigenschaften vertauscht werden, was anzeigt, dass der Bereich der erlaubten Werte bei `min` beginnt, sich um den niedrigsten möglichen Wert wickelt und dann fortfährt, bis `max` erreicht ist. Das ist besonders nützlich für Daten und Zeiten, beispielsweise wenn Sie den Bereich von 20:00 Uhr bis 8:00 Uhr erlauben möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und deren Werte können zu einem spezifischen Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Gültigkeitsobjektfehler hängen von den <code>&lt;input&gt;</code>-Attributen und deren Werten ab:
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
        Tritt auf, wenn der Wert größer als der maximal zulässige Wert gemäß dem <code>max</code>-Attribut ist
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die Anzahl, die durch die <code>maxlength</code>-Eigenschaft erlaubt ist
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner als der minimal zulässige Wert gemäß dem <code>min</code>-Attribut ist
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die Anzahl, die durch die <code>minlength</code>-Eigenschaft erforderlich ist
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein <code>pattern</code>-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> ist oder Radio- oder Checkbox nicht ausgewählt sind.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Standardinkrement ist <code>1</code>, daher sind nur ganze Zahlen gültig bei <code>type="number"</code>, wenn nicht <code>step="any"</code> angegeben ist. <code>step="any"</code> wird niemals diesen Fehler auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, zum Beispiel wenn eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required`-Attribut hat, ist kein Wert oder eine leere Zeichenkette nicht ungültig. Auch wenn die oben genannten Attribute vorhanden sind, wird eine leere Zeichenkette nicht zu einem Fehler führen, mit Ausnahme von `required`.

Wir können Einschränkungen festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer auf einen Fehler hinweisen, wenn das Formular abgesendet wird.

Zusätzlich zu den in der Tabelle oben beschriebenen Fehlern enthält das `validityState`-Interface die Booleschen readonly-Eigenschaften `badInput`, `valid` und `customError`. Das Gültigkeitsobjekt beinhaltet:

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

Für jede dieser Booleschen Eigenschaften bedeutet ein Wert von `true`, dass der angegebene Grund der Validierungsfehler zutreffen kann, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

Wenn es einen Fehler gibt, werden unterstützende Browser sowohl den Benutzer warnen als auch verhindern, dass das Formular abgesendet wird. Ein Wort der Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen wahrheitswertigen Wert gesetzt ist (alles außer der leeren Zeichenkette oder `null`), wird verhindert, dass das Formular abgesendet wird. Wenn es keine benutzerdefinierte Fehlermeldung gibt und keine der anderen Eigenschaften wahr ist, wird `valid` wahr sein, und das Formular kann abgesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Fehlermeldung auf die leere Zeichenkette setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt ist, wird es nicht nach einen neue Gültigkeitsschätzung gesendet, selbst wenn alle Werte gültig sind, bis die Botschaft `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandten) Elementen verfügbar ist. Nehmen Sie folgendes Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen führen dazu, dass dies eine Standardfehlermeldung produziert, wenn Sie versuchen, das Formular mit entweder keinem gültigen Wert oder einem Wert einzureichen, der nicht mit dem `pattern` übereinstimmt.

Wenn Sie stattdessen benutzerdefinierte Fehlermeldungen anzeigen möchten, könnten Sie JavaScript wie das folgende verwenden:

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

Das Beispiel rendert folgendermaßen:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die `checkValidity()`-Methode über den `input`-Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst, und die `invalid`-Ereignishandlerfunktion wird ausgeführt. Innerhalb dieser Funktion ermitteln wir, ob der Wert ungültig ist, weil er leer ist, oder weil er nicht dem Muster entspricht, indem wir einen `if ()`-Block verwenden und eine benutzerdefinierte Validitätsfehlermeldung festlegen.
- Wenn der Eingabewert ungültig ist, wenn die Schaltfläche zum Absenden gedrückt wird, wird eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn sie gültig ist, wird sie, wie erwartet, übermittelt. Dafür muss die benutzerdefinierte Validität storniert werden, indem `setCustomValidity()` mit einem leeren Zeichenkettenwert aufgerufen wird. Wir tun dies daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun, und eine benutzerdefinierte Validität zuvor festgelegt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie zum Zeitpunkt der Übermittlung einen gültigen Wert enthält.

> [!NOTE]
> Validieren Sie immer Eingabebeschränkungen sowohl clientseitig als auch serverseitig. Die Einschränkungsvalidierung beseitigt nicht die Notwendigkeit einer Validierung auf der _Serverseite_. Ungültige Werte können dennoch durch ältere Browser oder durch böswillige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte für viele Versionen ein proprietäres Fehlerattribut - `x-moz-errormessage` - das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise festzulegen. Dies wurde mit Version 66 entfernt (siehe [Firefox Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der Spracheinstellung ab. In einigen Sprachregionen ist 1.000,00 eine gültige Zahl, während in anderen Sprachregionen 1.000,00 die gültige Eingabe ist.

Firefox verwendet die folgenden Heuristiken, um die Spracheinstellung zu bestimmen, um die Eingabe des Benutzers zu validieren (zumindest für `type="number"`):

- Versuchen Sie, die Sprache zu verwenden, die durch ein `lang`/`xml:lang`-Attribut auf dem Element oder einem seiner Elternteile angegeben wird.
- Versuchen Sie, die Sprache zu verwenden, die durch einen `Content-Language`-HTTP-Header angegeben ist. Oder,
- Verwenden Sie, falls nicht angegeben, die Sprache des Browsers.

## Barrierefreiheit

### Labels

Wenn Eingaben inkludiert werden, ist es eine Barrierefreiheitsanforderung, Labels hinzuzufügen. Dies ist notwendig, damit diejenigen, die unterstützende Technologien verwenden, wissen, wofür die Eingabe gedacht ist. Außerdem erhält das Klicken oder Berühren eines Labels den Fokus auf das zugehörige Formelement. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erhöht die Fläche, auf die ein Benutzer klicken oder berühren kann, um das Formelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radiobuttons und Checkboxen, die sehr klein sind. Mehr Informationen über Labels im Allgemeinen finden Sie unter [Labels](#labels).

Das folgende ist ein Beispiel, wie das `<label>` mit einem `<input>`-Element im oben genannten Stil verknüpft wird. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert derselbe wie der `id` des Eingabefeldes ist.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bieten, um leicht aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrolleinschränkungen und Menschen, die unpräzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixel](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, gelistet, einreichbar, zurücksetzbares, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">ausdrücksinhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht <code>hidden</code> ist, dann beschreibbares Element, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Kein; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Starttag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">ausdrücksinhalt</a> akzeptiert.
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a>, wenn mit <code>aria-pressed</code> verwendet,
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
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-{{cssxref("appearance")}}-Eigenschaft
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung: Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formulareinschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
