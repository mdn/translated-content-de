---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 522cbc5cfc25e2b945e69096d995b26f4482ba76
---

Das **`<input>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer entgegenzunehmen. Eine breite Palette von Arten von Eingabedaten und Steuerungs-Widgets ist verfügbar, abhängig vom Gerät und {{Glossary("user_agent", "User-Agent")}}. Das `<input>`-Element ist eines der leistungsfähigsten und komplexesten in ganz HTML, aufgrund der schieren Anzahl von Kombinationen von Eingabetypen und Attributen.

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

## `<input>` Typen

Wie ein `<input>` funktioniert, variiert erheblich, abhängig vom Wert seines [`type`](#type)-Attributs. Daher werden die verschiedenen Typen in ihren eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` übernommen.

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
      <td>Eine Kontrollkästchen, das es ermöglicht, einzelne Werte auszuwählen/abzuwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerungselement zum Angeben einer Farbe; öffnet bei unterstützenden Browsern einen Farbwähler, wenn es aktiv ist.
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
        Ein Steuerungselement zum Eingeben eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumswähler oder numerische Räder für Jahr, Monat, Tag, wenn es in unterstützenden Browsern aktiv ist.
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
        Ein Steuerungselement zum Eingeben eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datums- und Zeitauswahldialog oder numerische Räder für Datum- und Uhrzeitkomponenten in unterstützenden Browsern.
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
        Ein Steuerungselement, das es dem Benutzer ermöglicht, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Arten von Dateien zu definieren, die das Steuerungselement auswählen kann.
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
        Ein Steuerungselement, das nicht angezeigt wird, dessen Wert jedoch an den
        Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist verborgen!
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
        Ein grafischer <code>submit</code>-Button. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert wird.
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
      <td>Ein Steuerungselement zum Eingeben eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerungselement zum Eingeben einer Zahl. Zeigt einen Spinner an und fügt eine Standardvalidierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Warnt den Benutzer, wenn die Site nicht sicher ist.
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
        Ein Radiobutton, der es ermöglicht, einen einzelnen Wert aus mehreren Optionen mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Ein Steuerungselement zum Eingeben einer Zahl, deren exakter Wert nicht wichtig ist. Wird als Bereichs-Widget angezeigt, das standardmäßig auf den mittleren Wert eingestellt ist. Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich akzeptabler Werte zu definieren.
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
        Ein einzeiliges Textfeld zum Eingeben von Suchzeichenfolgen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann ein Löschsymbol in unterstützenden Browsern enthalten, das zum Leeren des Feldes verwendet werden kann. Zeigt ein Suchsymbol anstelle der Eingabetaste auf einigen Geräten mit dynamischen Tastaturen an.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Ein Button, der das Formular übermittelt.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        Ein Steuerungselement zum Eingeben einer Telefonnummer. Zeigt eine Telefonnummerntastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
      <td>Ein Steuerungselement zum Eingeben eines Zeitwerts ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zum Eingeben einer URL. Sieht aus wie eine <code>text</code>-Eingabe, hat aber Validierungsparameter und relevante Tastaturen in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerungselement zum Eingeben eines Datums, das aus einer Wochennummer und einem Jahr besteht, ohne Zeitzone.
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
        Ein Steuerungselement zum Eingeben eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Sekundenbruchteil) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist aufgrund seiner Attribute so leistungsfähig. Das [`type`](#type)-Attribut, das oben mit Beispielen beschrieben wird, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch gesehen den exakt gleichen Satz von Attributen. In der Realität haben jedoch die meisten Attribute nur auf eine spezifische Teilmenge von Eingabetypen Auswirkungen. Zusätzlich hängt die Art und Weise, wie einige Attribute auf eine Eingabe wirken, vom Eingabetyp ab, wodurch unterschiedliche Eingabetypen auf unterschiedliche Weise beeinflusst werden.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird von einer Liste gefolgt, die jedes Attribut detaillierter beschreibt, zusammen mit den zugehörigen Eingabetypen. Attribute, die zu den meisten oder allen Eingabetypen gemeinsam sind, werden weiter unten ausführlicher definiert. Attribute, die für bestimmte Eingabetypen einzigartig sind oder Attribute, die bei allen Eingabetypen üblich sind, aber besondere Verhaltensweisen haben, werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element beinhalten die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                                       |
| --------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis für erwarteten Dateityp in Datei-Upload-Steuerelementen                                    |
| [`alt`](#alt)                                 | `image`                                                                | Alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                    |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                               | Steuerung der automatischen Großschreibung im eingegebenen Text.                                   |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Buttons                             | Hinweis für die Formular-Autovervollständigungsfunktion                                            |
| [`capture`](#capture)                         | `file`                                                                 | Medienerfassungsmethode im Datei-Upload-Steuerelement                                              |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Ob der Befehl oder das Steuerelement aktiviert ist                                                 |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfeldes für das Senden der Richtung des Elements bei der Formularübermittlung      |
| [`disabled`](#disabled)                       | alle                                                                   | Gibt an, ob das Formularelement deaktiviert ist                                                    |
| [`form`](#form)                               | alle                                                                   | Verknüpft das Steuerelement mit einem Formularelement                                              |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL für die Formularübermittlung                                                                   |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Kodierungstyp für den Formulardatensatz zur Formularübermittlung                                   |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | HTTP-Methode für die Formularübermittlung                                                          |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Umgeht die Formularsteuerungsvalidierung bei der Formularübermittlung                              |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browsing-Kontext für die Formularübermittlung                                                      |
| [`height`](#height)                           | `image`                                                                | Gleiches wie das Höhenattribut für {{htmlelement('img')}}; vertikale Abmessung                     |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Buttons       | Wert des ID-Attributs der {{htmlelement('datalist')}} für Autovervollständigungsoptionen           |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Maximalwert                                                                                        |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Anzahl an Zeichen des `value`                                                             |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Minimalwert                                                                                        |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Anzahl an Zeichen des `value`                                                             |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolean. Ob mehrere Werte erlaubt sind                                                             |
| [`name`](#name)                               | alle                                                                   | Name des Formularelements. Wird mit dem Formular als Paar von Name/Wert gesendet                   |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, das `value` entsprechen muss, um gültig zu sein                                            |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der im Formularelement angezeigt wird, wenn kein Wert gesetzt ist                            |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Bezeichnet ein `<input type="button">` als Steuerung für ein Popover-Element                       |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt die Aktion an, die eine Popover-Steuerung ausführen soll                                      |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolean. Der Wert ist nicht editierbar                                                             |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss geprüft werden, um das Formular übermitteln zu können |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe des Steuerelements                                                                           |
| [`src`](#src)                                 | `image`                                                                | Gleiches wie das `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource              |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Inkrementale Werte, die gültig sind                                                                |
| [`type`](#type)                               | alle                                                                   | Typ des Formularelements                                                                           |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert des Steuerelements. Wenn im HTML angegeben, entspricht dies dem Anfangswert               |
| [`width`](#width)                             | `image`                                                                | Gleiches wie das `width`-Attribut für {{htmlelement('img')}}                                       |

Einige zusätzliche nicht-standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgeführt.

### Individuelle Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Gültig nur für den `file`-Eingabetyp, definiert das `accept`-Attribut, welche Dateitypen in einem Datei-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`
  - : Gültig nur für den `image`-Button, bietet das `alt`-Attribut alternativen Text für das Bild, wobei der Wert des Attributs angezeigt wird, falls das Bild[`src`](#src) fehlt oder ansonsten fehlschlägt. Weitere Informationen finden Sie im {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebene Text automatisch groß geschrieben wird und falls ja, wie. Weitere Informationen finden Sie auf der [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) Seite zum globalen Attribut.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Nicht** ein Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge an, die beschreibt, welche Art der Autovervollständigung die Eingabe bieten soll. Eine typische Implementierung von Autovervollständigung erinnert sich an zuvor in dasselbe Eingabefeld eingegebene Werte, aber es können komplexere Formen der Autovervollständigung existieren. Zum Beispiel könnte ein Browser in die Kontaktliste eines Geräts integrieren, um E-Mail-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Weitere Informationen zu den erlaubten Werten finden Sie unter [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value).

    Das `autocomplete`-Attribut ist gültig bei `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen mit Ausnahme von `checkbox`, `radio`, `file` oder eines der Butto-Typen gültig.

    Weitere Informationen, einschließlich Informationen zur Passwortsicherheit und wie sich der `autocomplete`-Unterschied bei `hidden` etwas von anderen Eingabetypen unterscheidet, finden Sie unter dem [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete).

- `autofocus`
  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass die Eingabe automatisch den Fokus erhalten soll, wenn die Seite fertig geladen ist (oder wenn das {{HTMLElement("dialog")}}-Element, das die Elemente enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das Ereignis [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehreren Elementen platziert wird, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingabefeldern des Typs `hidden` verwendet werden, da versteckte Eingabefelder nicht fokussiert werden können.

    > [!WARNING]
    > Ein automatisch fokussiertes Formularelement kann sehbehinderte Benutzer, die Technologie zum Vorlesen des Bildschirminhalts verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmlesegeräte ihren Benutzer ohne Vorwarnung zum Formularelement.

    Berücksichtigen Sie bei der Anwendung des `autofokus`-Attributs sorgfältig die Barrierefreiheit. Das automatische Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label des fokussierten Formularelements ankündigt, wird der Bildschirmleser nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext verpassen, den der vorangehende Inhalt erzeugt.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den `file`-Eingabetyp, definiert das `capture`-Attribut, welches Medium—Mikrofon, Video oder Kamera—verwendet werden soll, um eine neue Datei mit der Datei-Upload-Steuerung in unterstützenden Szenarien aufzunehmen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`
  - : Gültig für sowohl `radio` und `checkbox`-Typen ist `checked` ein Boolean-Attribut. Wenn es beim `radio`-Typ vorkommt, zeigt es an, dass der Radiobutton der aktuell ausgewählte in der Gruppe von gleichnamigen Radio-Buttons ist. Wenn es beim `checkbox`-Typ vorkommt, zeigt es an, dass das Kontrollkästchen standardmäßig aktiviert ist, wenn die Seite geladen wird. Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn der Zustand des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Lediglich das [`checked`](#checked) IDL-Attribut des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Anders als bei anderen Eingabesteuerelementen werden in einer Checkbox und einem Radio-Button die Werte nur eingeschlossen, wenn sie derzeit `checked` sind. Wenn dies der Fall ist, werden der Name und die Werte der aktivierten Steuerelemente übermittelt.
    >
    > Beispiel: Wenn ein Kontrollkästchen mit dem Namen `fruit` und einem `value` von `cherry` aktiviert ist, lautet der übermittelte Formulardaten-Satz `fruit=cherry`. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgeführt. Der Standardwert für Checkboxen und Radio-Buttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email`-Eingabetypen, ermöglicht das `dirname`-Attribut die Übermittlung der Richtungalität des Elements. Bei Hinzufügung wird das Formularelement mit zwei Name/Wert-Paaren gesendet: Das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das obenstehende Formular übermittelt wird, bewirkt die Eingabe sowohl die Übergabe des `name` / `value`-Paares `fruit=cherry` als auch des `dirname` / Richtungswertpaares `fruit-dir=ltr`.
    Weitere Informationen finden Sie im Attribut [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren können sollte. Deaktivierte Eingaben werden typischerweise mit einer gedimmten Farbe oder einer anderen Form der Indikation angezeigt, dass das Feld nicht zur Verwendung zur Verfügung steht.

    Insbesondere erhalten deaktivierte Eingabefelder nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingabefelder werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation gefordert, speichert Firefox standardmäßig [die dynamische deaktivierte Zustands](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- `form`
  - : Eine Zeichenfolge, die das {{HTMLElement("form")}}-Element angeben, mit dem die Eingabe verknüpft ist (das heißt, sein **Formular-Eigentümer**). Der Wert dieser Zeichenfolge, falls vorhanden, muss der [`id`](#id) eines `<form>`-Elements im selben Dokument entsprechen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächsten enthaltenen Formular assoziiert, falls vorhanden.

    Das `form`-Attribut ermöglicht es, ein Eingabefeld überall im Dokument zu platzieren, es jedoch mit einem Formular an anderer Stelle im Dokument einzuschließen.

    > [!NOTE]
    > Ein Eingabefeld kann nur mit einem Formular verknüpft sein.

- `formaction`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie bei dem Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formenctype`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie bei dem Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formmethod`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie bei dem Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formnovalidate`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie bei dem Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formtarget`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie bei dem Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `height`
  - : Nur für den `image`-Eingabebutton gültig, ist `height` die Höhe der Bilddatei, die dargestellt werden soll, um den grafischen Absenden-Button darzustellen. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Der Zweck besteht darin, das Element bei der Verlinkung zu identifizieren. Der Wert wird als Wert des `for`-Attributs der {{htmlelement('label')}} verwendet, um das Label mit dem Formularelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, es bietet einen Hinweis an die Browser, welche Art von virtueller Tastaturkonfiguration verwendet werden soll, wenn dieses Element oder seine Inhalte bearbeitet werden. Werte schließen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search` ein.
- `list`
  - : Der Wert, der dem `list`-Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. Das `<datalist>` bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte, die nicht mit dem [`type`](#type) kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Gemäß den Spezifikationen wird das `list`-Attribut von `hidden`, `password`, `checkbox`, `radio`, `file` oder einem der Butto-Typen nicht unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen sehen, Markierungen entlang eines Bereiches oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}}-Element öffnet, es jedoch ermöglicht, dass nicht aufgeführte Werte eingegeben werden können. Überprüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert `max` den größten Wert im Bereich der erlaubten Werte. Überschreitet der in das Element eingegebene [`value`](#value) diesen Wert, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen maximalen Wert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (z. B. bei Daten oder Zeiten), kann der Wert von `max` kleiner als der Wert von `min` sein, was anzeigt, dass sich der Bereich umwickeln kann; zum Beispiel kann dies die Angabe eines Zeitbereichs von 22:00 Uhr bis 4:00 Uhr morgens ermöglichen.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert `maxlength` die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Texts länger als `maxlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das Attribut `maxlength` erlaubt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Weitere Informationen finden Sie unter [Clientseitige Validierung](#client-seitige_validierung).

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert `min` den kleinsten Wert im Bereich der erlaubten Werte. Unterschreitet der in das Element eingegebene [`value`](#value) diesen Wert, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen minimalen Wert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht-leerer Wert kleiner ist als das Minimum, das durch das `min`-Attribut erlaubt ist, verhindert die Einschränkungsvalidierung die Formularübermittlung. Weitere Informationen finden Sie unter [Clientseitige Validierung](#client-seitige_validierung).

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (z. B. bei Daten oder Zeiten), kann der Wert von `max` kleiner als der Wert von `min` sein, was angibt, dass sich der Bereich umwickeln kann; zum Beispiel kann dies die Angabe eines Zeitbereichs von 22:00 Uhr bis 4:00 Uhr morgens ermöglichen.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert `minlength` die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht negativer Ganzzahlenwert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Element keine minimale Länge.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} ist, was die Formularübermittlung verhindert. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Weitere Informationen finden Sie unter [Clientseitige Validierung](#client-seitige_validierung).

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das Boolean-Attribut `multiple`, wenn gesetzt, bedeutet, dass der Benutzer durch Komma getrennte E-Mail-Adressen im E-Mail-Widget eingeben kann oder mehr als eine Datei mit der `file`-Eingabe auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`
  - : Eine Zeichenfolge, die einen Namen für das Eingabesteuerelement angibt. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als ein erforderliches Attribut (auch wenn es das nicht ist). Wenn eine Eingabe kein `name` angegeben hat oder `name` leer ist, wird der Wert der Eingabe beim Formular nicht mit übermittelt! (Deaktivierte Steuerelemente, nicht aktivierte Radiobuttons, nicht aktivierte Kontrollkästchen und Zurücksetzen-Buttons werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_`: Wenn es als Name eines `<input>`-Elements des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der Wert der Eingabe automatisch durch den {{Glossary("user_agent", "User-Agent")}} auf die zur Übermittlung des Formulars verwendete Zeichencodierung gesetzt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das Attribut [`name`](#name) erzeugt ein einzigartiges Verhalten bei Radiobuttons.

    Nur ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons kann zu einem Zeitpunkt ausgewählt werden. Die Auswahl eines Radiobuttons in dieser Gruppe hebt automatisch die aktuelle Auswahl eines Radiobuttons in derselben Gruppe auf. Der Wert dieses einen ausgewählten Radiobuttons wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Beim Tabwechsel zu einer Gruppe von gleichnamigen Radiobuttons, wenn einer davon ausgewählt ist, erhält dieser den Fokus. Wenn sie in der Quellreihenfolge nicht zusammen gruppiert sind, wird beim Tabwechsel zu der Gruppe gestartet, wenn der erste Radiobutton dieser Gruppe erreicht wird, wobei alle übersprungen werden, die nicht ausgewählt sind. Anders gesagt, wenn einer ausgewählt ist, werden die nicht ausgewählten Radiobuttons in der Gruppe beim Tabwechsel übersprungen. Wenn keiner ausgewählt ist, erhält die Radiogruppenerste den Fokus, wenn der erste in der gleichnamigen Gruppe erreicht wird.

    Sobald ein Radiobutton in einer Gruppe den Fokus hat, navigieren die Pfeiltasten durch alle Radiobuttons mit demselben Namen, auch wenn die Radiobuttons in der Quellreihenfolge nicht zusammen gruppiert sind.

    Wenn ein Eingabenelement einen `name` erhält, wird dieser Name zu einer Eigenschaft des [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigentums des Formularbesitzers. Wenn Sie eine Eingabe mit dem `name` auf `guest` setzen und eine andere mit `name` auf `hat-size` festlegen, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, ist `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das Feld `guest` und `hatSize` das Objekt für das Feld `hat-size`.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer integrierten Eigenschaft des Formulars entspricht, da Sie andernfalls die vordefinierte Eigenschaft oder Methode mit dieser Referenz auf das entsprechende Eingabeelement überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password` wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompilieren, dem der [`value`](#value) des Eingabefelds entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer Ausdruck von JavaScript sein, wie ihn der {{jsxref("RegExp")}}-Typ verwendet, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Es sollten keine Schrägstriche um den Mustertext angegeben werden. Beim Kompilieren des regulären Ausdrucks:
    1. Wird das Muster implizit mit `^(?:` und `)$` eingeschlossen, sodass eine Übereinstimmung gegen den _gesamten_ Eingabewert erforderlich ist, also `^(?:<pattern>)$`.
    2. Wird das `'v'`-Flag angegeben, sodass das Muster als eine Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn das Pattern-Attribut gültig ist und ein nicht-leerer Wert nicht dem Pattern entspricht, verhindert die Einschränkungsvalidierung das Absenden des Formulars. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden kommagetrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erläuternden Text in der Nähe platzieren. Sie können auch ein [`title`](#title)-Attribut einfügen, um zu erklären, welche Anforderungen bestehen, um dem Muster zu entsprechen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist erforderlich, um barrierefrei zu sein. Der Tooltip ist eine Verbesserung.

    Weitere Informationen finden Sie unter [Clientseitige Validierung](#client-seitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis für den Benutzer, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der einen Hinweis auf die erwartete Art der Daten gibt, anstatt einer Erklärung oder einem Eingabeaufforderung. Der Text darf keine Wagenrücklaufzeichen oder Zeilenumbruchzeichen enthalten. Wenn beispielsweise der Vorname eines Benutzers erfasst werden soll und sein Label "Vorname" lautet, könnte ein geeigneter Platzhalter "z. B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Labels](#beschriftungen).

- `popovertarget`
  - : Macht ein `<input type="button">`-Element zu einem Popover-Steuerungsbutton; nimmt die ID des zu steuernden Popover-Elements als Wert. Weitere Details finden Sie auf der [Popover-API](/de/docs/Web/API/Popover_API)-Übersichtsseite. Die Etablierung einer Beziehung zwischen einem Popover und seinem Einbinder-Button unter Verwendung des `popovertarget`-Attributs hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Einbinder und positioniert das Popover logisch in der Tab-Navigation, wenn es angezeigt wird. Dies macht das Popover zugänglicher für Tastatur- und Hilfstexttechnologie-Benutzer (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt einen impliziten Ankerbezug zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die auszuführende Aktion auf einem Popover-Element an, das von einer Steuerung `<input type="button">` gesteuert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Button wird ein gezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verborgenes Popover auszublenden, wird keine Aktion unternommen.
    - `"show"`
      - : Der Button wird ein verborgenes Popover anzeigen. Wenn Sie versuchen, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion unternommen.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen sichtbar und verborgen toggeln. Wenn das Popover verborgen ist, wird es sichtbar gemacht; wenn das Popover sichtbar ist, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerungsbutton durchgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer den Wert des Eingabefeldes nicht bearbeiten kann. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Weitere Informationen finden Sie unter dem [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Formular übermittelt werden kann. Das `required`-Attribut wird durch `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file`-Eingaben unterstützt.

    Weitere Informationen finden Sie unter [Clientseitige Validierung](#client-seitige_validierung) und im [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required).

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text` spezifiziert das `size`-Attribut, wie viel der Eingabe angezeigt wird. Im Grunde genommen erzeugt es das gleiche Ergebnis wie das Setzen der CSS [`width`](/de/docs/Web/CSS/width)-Eigenschaft mit einigen besonderen Aspekten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Bei `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und bei anderen ist es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`
  - : Nur für den `image`-Eingabebutton gültig, der `src` ist eine Zeichenkette, die die URL der Bilddatei angibt, die dargestellt werden soll, um den grafischen Absenden-Button darzustellen. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert sich halten muss. Nur Werte, die eine ganze Anzahl von Schritten ab der Schrittbasis sind, sind gültig. Die Schrittbasis ist `min`, wenn angegeben, `value` andernfalls, oder `0`, falls weder angegeben wird (außer für `week`, das eine Standardschrittbasis von −259.200.000 hat, die dem Beginn der Woche `1970-W01` entspricht).

    Wenn nicht ausdrücklich enthalten:
    - `step` ist standardmäßig 1 für `number` und `range`.
    - Jeder Datum/Uhrzeit-Eingabetyp hat einen Standard-`step`-Wert, der dem Typ entspricht. Siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step), und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein - Ganzzahl oder Dezimal - oder der spezielle Wert `any`, was bedeutet, dass kein Schritt erforderlich ist, und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Ganzzahl, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber Gleitkommazahlen (wie `4.2`) sind nicht gültig, weil `step` standardmäßig auf `1` steht. Wenn `4.2` gültig sein soll, müsste `step` auf `any`, 0.1, 0.2 gesetzt worden sein, oder der `min`-Wert hätte eine Zahl mit `.2` sein müssen, wie beispielsweise `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten der Konfiguration nicht entsprechen, wird der Wert in der Einschränkungsvalidierung als ungültig angesehen und entspricht dem `:invalid`-Pseudoklasse.

    Weitere Informationen finden Sie unter [Clientseitige Validierung](#client-seitige_validierung).

- `tabindex`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliger Attribut, der angibt, ob das Element Eingabefokus annehmen kann (fokussierbar ist), wenn es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen mit Ausnahme der Eingabe des Typs `hidden` fokussierbar sind, sollte dieses Attribut nicht auf Formularelementen verwendet werden, da dies die Verwaltung der Fokusreihenfolge für alle Elemente im Dokument erfordern würde und das Risiko von Usability- und Barrierefreiheitsproblemen mit sich bringt.

- `title`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, enthält einen Text, der beratende Informationen im Zusammenhang mit dem Element darstellt, zu dem er gehört. Diese Information kann typischerweise, jedoch nicht zwingend, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks des Formularelements verwendet werden, sondern verwenden Sie das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut des Formularelements festgelegt ist. Siehe [Labels](#beschriftungen) unten.

- `type`
  - : Eine Zeichenkette, die den Typ des zu rendernden Steuerelements angibt. Zum Beispiel, um ein Kontrollkästchen zu erstellen, wird der Wert `checkbox` verwendet. Wenn es weggelassen wird (oder ein unbekannter Wert angegeben wird), wird das Eingabefeld `text` verwendet, um ein Klartext-Eingabefeld zu erstellen.

    Zulässige Werte sind oben in den [Eingabetypen](#input_types) aufgeführt.

- `value`
  - : Der Wert des Eingabesteuerelements. Wenn es im HTML angegeben ist, ist dies der Anfangswert, und danach kann er jederzeit geändert oder über JavaScript abgerufen werden, um die entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft `value` zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch für `checkbox`, `radio` und `hidden` als obligatorisch betrachtet werden.

- `width`
  - : Nur für den `image`-Eingabebutton gültig, ist `width` die Breite der Bilddatei, die dargestellt werden soll, um den grafischen Absenden-Button darzustellen. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. Als Faustregel sollten Sie deren Verwendung vermeiden, es sei denn, es gibt keine andere Möglichkeit.

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
        Ob wiederholt [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden oder nicht, um die Live-Suchergebnisse zu aktualisieren, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenkette, die den Typ der Aktion angibt, die ausgeführt wird, wenn der Benutzer die Taste <kbd>Enter</kbd> oder <kbd>Return</kbd> drückt, während das Feld bearbeitet wird; dies wird verwendet, um eine passende Beschriftung für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Ausrichtung des Bereichsschiebers fest. <strong>Nur Firefox.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl der Elemente, die in der Dropdown-Liste der früheren Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob der Benutzer nur ein Verzeichnis (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) auswählen darf
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine Erweiterung von WebKit und Blink (also unterstützt von Safari, Opera, Chrome usw.), die, falls vorhanden, dem {{Glossary("user_agent", "User-Agent")}} sagt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das die Suchbox repräsentiert. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (wie z. B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

    Das `search`-Ereignis ist limitierungsbeschränkt, sodass es nicht häufiger als in einem implementationsdefinierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}
  - : Ähnlich dem nicht-standardisierten CSS-Property `-moz-orient`, das die {{htmlelement('progress')}} und {{htmlelement('meter')}}-Elemente betrifft, definiert das `orient`-Attribut die Ausrichtung des Bereichsschiebers. Zu den Werten gehören `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wobei der Bereich vertikal gerendert wird. Weitere Informationen finden Sie unter [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularelemente.

- `results` {{non-standard_inline}}
  - : Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü der früheren Suchanfragen des `<input>`-Elements angezeigt werden sollen.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben ist, wird die Standardmaximalanzahl von Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass nur Verzeichnisse vom Benutzer in der Dateiauswahloberfläche ausgewählt werden können. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

    Obwohl es ursprünglich nur für WebKit-basierte Browser implementiert wurde, ist `webkitdirectory` ab Firefox 50 und später auch in Microsoft Edge verwendbar. Trotzdem sollte es aufgrund seiner nach wie vor nicht-standardisierten Natur nur dann verwendet werden, wenn es keine Alternative gibt.

## Methoden

Die folgenden Methoden werden durch die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Außerdem stehen die Methoden der übergeordneten Schnittstellen zur Verfügung, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Validitätsprüfungen besteht. Andernfalls wird `false` zurückgegeben und ein [`ungültig`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Validitätsprüfungen besteht. Andernfalls wird `false` zurückgegeben, ein [`ungültig`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element ausgelöst, und (wenn das Ereignis nicht abgebrochen wird) das Problem dem Benutzer angezeigt.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder ein Kalenderdatumeingabefeld) passiert nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabefeldes nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Bereichs von Zeichen im Eingabefeld auf eine angegebene Zeichenkette. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines Texteingabefeldes aus. Für Eingaben, die nicht als Texteingabefelder dargestellt werden, passiert nichts.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Auswahldialog für das Eingabefeld an, der normalerweise beim Auswählen des Elements angezeigt wird, jedoch durch das Drücken eines Buttons oder einer anderen Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins, standardmäßig, oder durch die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder durch die angegebene Anzahl von Einheiten.

## CSS

Eingaben, als ersetzte Elemente, haben einige Merkmale, die nicht auf nicht-Formularelemente anwendbar sind. Es gibt CSS-Selektoren, die Formularelemente basierend auf ihren UI-Merkmalen gezielt ansprechen können, auch bekannt als UI-Pseudoklassen. Das `input`-Element kann auch nach Typ mit Attributselektoren angesprochen werden. Einige Eigenschaften sind besonders nützlich.

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
        Jedes aktuell aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, eingegeben usw.) oder den Fokus akzeptiert und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert werden kann oder den Fokus akzeptiert.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes aktuell deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es ansonsten aktiviert werden könnte (ausgewählt, angeklickt, eingegeben usw.) oder den Fokus akzeptieren könnte, wenn es nicht deaktiviert wäre.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Nicht bearbeitbares Element für den Benutzer</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das aktuell <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt,
        einschließlich <code>&#x3C;input></code>- und {{HTMLElement("textarea")}}-Elementen mit dem Attribut <a href="#placeholder"><code>placeholder</code></a>, das bisher keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die die Standardelemente in einer Gruppe verwandter Elemente sind.
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die beim Laden oder Rendern der Seite geprüft wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die
        derzeit geprüft sind (und der {{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente,
        deren indeterminate Eigenschaft durch JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle
        Radio-Schaltflächen mit demselben Namenswert im Formular nicht überprüft sind, und
        {{HTMLElement("progress")}} Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die eine Constraints-Validierung angewendet werden kann und die
        derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die eine Constraints-Validierung angewendet wird und die derzeit
        nicht gültig sind. Passt zu einem Formularelement, dessen Wert nicht den
        durch seine Attribute festgelegten Einschränkungen entspricht, zum Beispiel
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute und <a href="#step"><code>step</code></a> festgelegten Wertebereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a> Attribute festgelegten Wertebereichsgrenzen liegt oder
        nicht den <a href="#step"><code>step</code></a>-Einschränkungen entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das Attribut <a href="#required"><code>required</code></a> gesetzt hat.
        Passt nur zu Elementen, die erforderlich sein können.
        Das Attribut, das bei einem nicht erforderlichen Element einbezogen wird, führt nicht zu einem Treffer.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}}-Element, das das Attribut <a href="#required"><code>required</code></a> NICHT gesetzt hat.
        Passt nicht zu Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlassen aktiviert. Passt
        zu ungültigen Eingaben, jedoch nur nach Benutzerinteraktion, wie durch Fokussieren
        auf das Steuerelement, Verlassen des Steuerelements oder Versuch des Absenden des Formulars
        mit dem ungültigen Steuerelement.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die dem Benutzer eine Auswahl an Werten anzeigen, um einen auszuwählen (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) – jedoch nur wenn das Element im offenen Zustand ist, das heißt, wenn der Picker angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudo-Klassen-Beispiel

Wir können ein `label`-Element eines Kontrollkästchens basierend darauf stylen, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einer aktivierten Eingabe kommt. Wir haben keine Stile angewendet, wenn das `input` nicht aktiviert ist.

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

Es ist möglich, verschiedene Typen von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren passen zu Elementen basierend entweder auf der bloßen Anwesenheit eines Attributs oder dem Wert eines gegebenen Attributs.

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

Standardmäßig ist das Erscheinen von Platzhaltertext durchsichtig oder hellgrau. Das {{cssxref('::placeholder')}}-Pseudoelement ist der [`placeholder`-Text](#placeholder) der Eingabe. Es kann mit einem limitierten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Satz von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}}-Pseudoelement angewendet werden, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### caret-color

Eine spezifische Eigenschaft für elemente, die Texteingabe ermöglichen, ist die CSS-Eigenschaft {{cssxref("caret-color")}}, die es Ihnen ermöglicht, die Farbe des Texteingabe-Cursors zu setzen:

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

Die Eigenschaft {{cssxref("field-sizing")}} ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie haben standardmäßig eine bevorzugte Standardgröße). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und Formularelementen zu erlauben, sich an die Größe ihrer Inhalte anzupassen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die den Textinhalten angepasst sind und wachsen, während mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingaben akzeptieren (zum Beispiel, [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file), und {{htmlelement("textarea")}}-Elementen.

### object-position und object-fit

In bestimmten Fällen (die typischerweise nicht-textuelle Eingaben und spezialisierte Schnittstellen umfassen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es so ist, können die Position und Größe des Elements innerhalb seines Rahmens angepasst werden, indem die CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} verwendet werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML, siehe:

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Zusätzliche Funktionen

### Beschriftungen

Beschriftungen sind notwendig, um assistive Texte mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element bietet erklärende Informationen über ein Formularfeld, das _immer_ angemessen ist (abgesehen von allen Layoutbedenken, die Sie haben könnten). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden sollte.

#### Zugehörige Beschriftungen

Die semantische Paarung von `<input>`- und `<label>`-Elementen ist für assistive Technologien wie Bildschirmleser nützlich. Durch die Verwendung des [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attributs des `<label>`-Elements, wird das Label mit der Eingabe verbunden, sodass Bildschirmleser Eingaben dem Benutzer präziser beschreiben können.

Es reicht nicht aus, plain Text neben dem `<input>`-Element zu haben. Benutzerfreundlichkeit und Barrierefreiheit erfordert die Einbeziehung von entweder impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht zugänglich: Es existiert keine Beziehung zwischen dem Hinweis und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere 'Treffer'-Fläche für Maus- und Touchscreen-Nutzer zum Klicken oder Berühren. Durch die Paarung eines `<label>` mit einem `<input>`, wird durch Klicken auf eines von beiden das `<input>` fokussiert. Wenn Sie plain Text verwenden, um Ihre Eingabe zu "kennzeichnen", wird dies nicht passieren. Das Einbeziehen des Hinweises als Teil des Aktivierungsbereichs für die Eingabe ist für Menschen mit motorischen Einschränkungen hilfreich.

Als Webentwickler ist es wichtig, dass wir nie davon ausgehen, dass die Menschen alle Dinge wissen werden, die wir wissen. Die Vielfalt der Menschen, die das Web verwenden – und in der Erweiterung Ihrer Website – garantiert praktisch, dass einige Besucher Ihrer Website einige Variationen in Denkprozessen und/oder Umständen haben, die sie dazu bringen, Ihre Formulare sehr unterschiedlich zu interpretieren, wenn diese nicht mit klaren und richtig präsentierten Beschriftungen versehen sind.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text zu spezifizieren, der innerhalb des Inhaltsbereichs des `<input>`-Elements selbst erscheint, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil es das nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Nicht nur ist der Platzhalter für Bildschirmleser nicht zugänglich, sondern sobald der Benutzer irgendeinen Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitenübersetzungsfunktionen können Attribute beim Übersetzen möglicherweise überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Vermeiden Sie die Nutzung des [`placeholder`](#placeholder) Attributs, wenn es möglich ist. Wenn Sie ein `<input>`-Element kennzeichnen müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Eine Client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Falls die Daten in einem bestimmten Format sein müssen, verifizieren Sie dies _immer_ auch auf der Server-Seite und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400), wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS zum Stylen von Eingaben basierend auf dem {{cssxref(":valid")}}- oder {{cssxref(":invalid")}}-UI-Zustand, basierend auf dem aktuellen Zustand jeder Eingabe, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser eine Client-seitige Validierung bei (versuchtem) Absenden des Formulars. Beim Absenden des Formulars, falls es ein Formularelement gibt, das die Constraints-Validierung nicht besteht, werden unterstützende Browser eine Fehlermeldung beim ersten ungültigen Formularsteuerelement anzeigen; entweder eine Standardmeldung basierend auf dem Fehlertyp oder eine von Ihnen gesetzte Nachricht.

Einige Eingabetypen und andere Attribute legen Grenzen fest, welche Werte für eine gegebene Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler könnten auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner ist als 2, `rangeOverflow`, wenn er größer ist als 10, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Zahl (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich möglicher Werte periodisch ist (das heißt, beim höchsten möglichen Wert kehren die Werte zum Anfang zurück, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max)- und [`min`](#min)-Eigenschaften umgekehrt sind, was anzeigt, dass der Bereich der erlaubten Werte bei `min` beginnt, um den niedrigsten möglichen Wert herum und dann weiter bis `max` reicht. Dies ist besonders nützlich für Daten und Zeiten, wie zum Beispiel, wenn Sie erlauben wollen, dass der Bereich von 20 Uhr bis 8 Uhr reicht:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezielle Attribute und ihre Werte können zu einem speziellen Fehler führen [`ValidityState`](/de/docs/Web/API/ValidityState):

<table class="no-markdown">
  <caption>
    Validitätsobjekt-Fehler hängen von den <code>&lt;input&gt;</code>
    Attributen und deren Werte ab:
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
        Tritt auf, wenn der Wert größer als der maximale Wert ist, der durch das
        <code>max</code>-Attribut definiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die Anzahl, die durch die `maxlength`-Eigenschaft erlaubt ist.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der minimale Wert, der durch das `min`-Attribut definiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die Anzahl, die durch die `minlength`-Eigenschaft verlangt wird.
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Musterattribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> ihm nicht entspricht.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, der Wert jedoch <code>null</code> ist, oder Radio- oder Kontrollkästchen sind nicht aktiviert.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schritt-Inkrement. Das Standard-Inkrement ist <code>1</code>, daher sind nur ganze Zahlen gültig bei <code>type="number"</code>, wenn Schritt nicht enthalten ist. <code>step="any"</code> wird diesen Fehler niemals werfen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht den richtigen Typ hat, zum Beispiel enthält eine E-Mail kein <code>@</code> oder eine URL enthält kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement das `required`-Attribut nicht hat, kein Wert oder ein leerer String, ist es nicht ungültig. Auch wenn die obigen Attribute vorhanden sind, mit Ausnahme von `required`, wird ein leerer String nicht zu einem Fehler führen.

Wir können Grenzen festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer warnen, wenn beim Absenden des Formulars ein Fehler vorhanden ist.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen readonly Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund für das Validierungsversagen wahr ist, mit der Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

Wenn ein Fehler vorliegt, werden unterstützende Browser sowohl den Benutzer warnen als auch verhindern, dass das Formular gesendet wird. Ein Wort der Vorsicht: Wenn eine benutzerdefinierte Fehlermeldung auf einen wahrheitsgemäßen Wert gesetzt ist (alles andere als der leere String oder `null`), wird das Formular nicht gesendet. Wenn es keine benutzerdefinierte Fehlermeldung gibt und keine der anderen Eigenschaften true zurückgibt, wird `valid` true sein und das Formular kann gesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Validitätsmeldung auf den leeren String setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeitsprüfung bestanden ist, wird das Senden verhindert, auch wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandten) Elementen verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen verursachen eine Standardfehlermeldung, wenn Sie versuchen, das Formular ohne gültige, ausgefüllte Felder oder mit einem Wert zu senden, der nicht dem `pattern` entspricht.

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

Das Beispiel rendert wie folgt:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Status des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die Methode `checkValidity()` über den `input`-Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst und die `invalid`-Ereignishandlerfunktion wird ausgeführt. Innerhalb dieser Funktion bestimmen wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, indem wir einen `if ()`-Block verwenden und eine benutzerdefinierte Fehlermeldung festlegen.
- Infolgedessen wird eine der benutzerdefinierten Fehlermeldungen angezeigt, wenn der Eingabewert bei gedrücktem Submit-Button ungültig ist.
- Wenn er gültig ist, wird er wie erwartet gesendet. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit abgebrochen werden, indem `setCustomValidity()` mit einem leeren String-Wert aufgerufen wird. Wir machen das daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Gültigkeit zuvor festgelegt wurde, wird die Eingabe als ungültig registriert, auch wenn sie derzeit bei der Eingabe eines gültigen Werts gültig ist.

> [!NOTE]
> Validieren Sie immer sowohl serverseitige als auch clientseitige Eingabeparameter. Die Constraints-Validierung hebt nicht die Notwendigkeit der Validierung auf der _Server-Seite_ auf. Ungültige Werte können immer noch von älteren Browsern oder durch böswillige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte ein proprietäres Fehlerattribut – `x-moz-errormessage` – für viele Versionen, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise einzustellen. Dies wurde ab Version 66 entfernt (siehe [Firefox-Fehler 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der Sprache ab. In einigen Sprachen ist 1.000,00 eine gültige Zahl, während in anderen Sprachen die gültige Eingabeweise für diese Zahl 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Sprache zu bestimmen, um die Benutzereingabe zu validieren (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut auf dem Element oder einem seiner Elternteile angegeben ist.
- Versuchen Sie, die Sprache zu verwenden, die durch einen `Content-Language`-HTTP-Header angegeben ist. Oder
- Falls keine angegeben, verwenden Sie die Sprache des Browsers.

## Barrierefreiheit

### Beschriftungen

Wenn Eingaben enthalten sind, ist es eine Anforderung für die Barrierefreiheit, Labels hinzuzufügen. Dies ist erforderlich, damit Benutzer, die assistive Technologien verwenden, wissen, wofür die Eingabe gedacht ist. Außerdem gibt Klicken oder Berühren eines Labels den Fokus auf das zugehörige Formularelement. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erhöht den Bereich, auf den ein Benutzer klicken oder tippen kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Optionsfelder und Kontrollkästchen, die winzig sind. Weitere Informationen zu Labels im Allgemeinen finden Sie unter [Labels](#beschriftungen).

Das folgende Beispiel zeigt, wie das `<label>` mit einem `<input>`-Element im obigen Stil assoziiert wird. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert mit der `id` des Eingabefeldes übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bieten, damit es einfach ist, sie zu aktivieren. Dies hilft verschiedenen Menschen, einschließlich Menschen mit motorischen Einschränkungen, und Menschen, die ungenaue Eingabemethoden wie einen Stift oder Finger verwenden. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Erfolgskriterium 2.5.5: Zielgröße verstehen | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließende Inhalte</a>, gelistet, übermittelbar, zurücksetzbar, formularzugeordnetes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a>. Wenn das <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann ein kennzeichnungsfähiges Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Eröffnungs-Tag haben und darf keinen Schlusstag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a> akzeptiert.
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

- CSS {{cssxref("appearance")}} Eigenschaft
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zum Strukturieren eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formular-Constraints-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
