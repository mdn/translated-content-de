---
title: "<input>: Das HTML-Eingabeelement"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<input>`**-[HTML-Element](/de/docs/Web/HTML) wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; je nach Gerät und {{Glossary("user_agent", "User-Agent")}} stehen eine Vielzahl von Eingabedatentypen und Steuerungs-Widgets zur Verfügung. Das `<input>`-Element gehört zu den leistungsfähigsten und komplexesten in HTML, da es eine große Anzahl von Kombinationen von Eingabetypen und Attributen gibt.

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

Wie ein `<input>` funktioniert, hängt erheblich vom Wert seines [`type`](#type)-Attributs ab, daher werden die unterschiedlichen Typen auf eigenen separaten Referenzseiten behandelt. Falls dieses Attribut nicht angegeben ist, wird der Standardtyp `text` verwendet.

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
      <td>Ein Kontrollkästchen, das es ermöglicht, einzelne Werte auszuwählen/abwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerungselement zum Festlegen einer Farbe; öffnet bei Aktivierung in unterstützenden Browsern einen Farbwähler.
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
        Öffnet bei Aktivierung einen Datumsauswahl- oder Zahlradhängt bei unterstützenden Browsern.
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
        Eine Steuerung zur Eingabe von Datum und Uhrzeit, ohne Zeitzone. Öffnet bei Aktivierung einen Datumsauswahl- oder Zahlradhänger für Datum- und Uhrzeitkomponenten in unterstützenden Browsern.
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
        Eine Steuerung, die es dem Benutzer ermöglicht, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Arten von Dateien zu definieren, die die Steuerung auswählen kann.
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
        Server gesendet wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist versteckt!
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
      <td>Eine Steuerung zur Eingabe von Monat und Jahr, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Eine Steuerung zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt eine Standard-
        Validierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten
        mit dynamischen Tastaturen.
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
        Einzeiliges Textfeld, dessen Wert verborgen ist.
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
        Ein Optionsfeld, das eine einzelne Wertauswahl aus mehreren Optionen mit dem gleichen <a href="#name"><code>name</code></a>-Wert ermöglicht.
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
        Wird als Bereichelement angezeigt, das standardmäßig auf den Mittelwert setzt.
        Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich der akzeptablen Werte zu definieren.
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
        Einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbrüche werden
        automatisch aus dem Eingabewert entfernt. Kann in
        unterstützten Browsern ein Löschsymbol enthalten, um das Feld zu leeren. Zeigt auf
        einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Eine Schaltfläche, die das Formular abschickt.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        Eine Steuerung zur Eingabe einer Telefonnummer. Zeigt eine Telefon-Tastatur
        auf einigen Geräten mit dynamischen Tastaturen.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabefeld, jedoch
        hat es Validierungsparameter und relevante Tastatur in unterstützenden Browsern
        und Geräten mit dynamischen Tastaturen.
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
        Eine Steuerung zur Eingabe eines Datums, das aus einer Jahr-Woche-Nummer und einer Wochennummer ohne Zeitzone besteht.
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

Das `<input>`-Element ist so leistungsfähig aufgrund seiner Attribute; das [`type`](#type)-Attribut, das oben mit Beispielen beschrieben wurde, ist dabei das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie alle technisch gesehen den exakt gleichen Satz von Attributen. In der Realität haben jedoch die meisten Attribute nur auf einen bestimmten Teil der Eingabetypen Auswirkungen. Zusätzlich hängt die Wirkung einiger Attribute auf ein Eingabeelement vom Eingabetyp ab, wobei unterschiedliche Eingabetypen unterschiedlich beeinflusst werden.

Dieser Abschnitt bietet eine Tabelle, in der alle Attribute mit einer kurzen Beschreibung aufgelistet sind. Diese Tabelle wird von einer Liste gefolgt, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie verknüpft sind. Attribute, die für die meisten oder alle Eingabetypen üblich sind, werden unten detaillierter definiert. Attribute, die für bestimmte Eingabetypen einzigartig sind – oder Attribute, die zwar für alle Eingabetypen üblich sind, aber besondere Verhaltensweisen aufweisen, wenn sie bei einem bestimmten Eingabefeldtyp verwendet werden – werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element beinhalten die [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes) sowie zusätzlich:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                     |
| --------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis für den erwarteten Dateityp in Datei-Upload-Steuerungen                                  |
| [`alt`](#alt)                                 | `image`                                                                      | Alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                  |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Steuert die automatische Großschreibung in eingegebenem Text                                     |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis auf Formular-Autofill-Funktion                                                           |
| [`capture`](#capture)                         | `file`                                                                       | Medienerfassungsmethode in Datei-Upload-Steuerungen                                              |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Ob der Befehl oder die Steuerung ausgewählt ist                                                  |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfelds zur Übermittlung der Richtung des Elements bei der Formularübertragung    |
| [`disabled`](#disabled)                       | alle                                                                         | Ob die Formularsteuerung deaktiviert ist                                                         |
| [`form`](#form)                               | alle                                                                         | Verknüpft die Steuerung mit einem Formular-Element                                               |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | URL zur Verwendung bei der Formularübermittlung                                                  |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Kodierungstyp des Formulardatensatzes zur Verwendung bei der Formularübermittlung                |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | HTTP-Methode zur Verwendung bei der Formularübermittlung                                         |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Umgeht die Formularsteuervalidierung bei der Formularübermittlung                                |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für die Formularübermittlung                                                    |
| [`height`](#height)                           | `image`                                                                      | Selbiges wie das Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                   |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsmöglichkeiten    |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Maximaler Wert                                                                                   |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) des `value`                                                  |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Minimaler Wert                                                                                   |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Minimale Länge (Anzahl der Zeichen) des `value`                                                  |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolean. Ob mehrere Werte erlaubt sind                                                           |
| [`name`](#name)                               | alle                                                                         | Name der Formularsteuerung. Wird mit dem Formular als Teil eines Namen-/Werte-Paares übermittelt |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Muster, dem das `value` entsprechen muss, um gültig zu sein                                      |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der in der Formsteuerung erscheint, wenn kein Wert gesetzt ist                             |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Kennzeichnet ein `<input type="button">` als Steuerung für ein Popover-Element                   |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Gibt die Aktion an, die eine Popover-Steuerung ausführen soll                                    |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht editierbar                                                           |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss für die Übertragbarkeit geprüft werden              |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe der Steuerung                                                                              |
| [`src`](#src)                                 | `image`                                                                      | Selbiges wie das src-Attribut für {{htmlelement('img')}}; Adresse der Bildressource              |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Inkrementelle Werte, die gültig sind                                                             |
| [`type`](#type)                               | alle                                                                         | Typ der Formularsteuerung                                                                        |
| [`value`](#value)                             | alle außer `image`                                                           | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht dies dem anfänglichen Wert            |
| [`width`](#width)                             | `image`                                                                      | Selbiges wie das Breitenattribut für {{htmlelement('img')}}                                      |

Einige zusätzliche nicht-standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgelistet.

### Individuelle Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Gültig nur für den Dateieingabetyp `file`, definiert das `accept`-Attribut, welche Dateitypen in einer `file`-Upload-Steuerung wählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`

  - : Gültig nur für die Bildschaltfläche `image`, das `alt`-Attribut bietet alternativen Text für das Bild und zeigt den Wert des Attributs an, wenn das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`

  - : Steuert, ob der eingegebene Text automatisch Großbuchstaben verwendet und wenn ja, auf welche Weise. Weitere Informationen finden Sie auf der globalen Attributseite [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette an, die beschreibt, welche Art von Autovervollständigungsfunktionalität die Eingabe bieten soll, falls vorhanden. Eine typische Implementierung der Autovervollständigung erinnert sich an vorherige Werte, die im gleichen Eingabefeld eingegeben wurden, aber es können auch komplexere Formen der Autovervollständigung existieren. Beispielsweise könnte ein Browser mit der Kontaktliste eines Geräts integriert werden, um E-Mail-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder textlichen Daten zurückgeben, und ist für alle Eingabetypen außer `checkbox`, `radio`, `file` oder allen Schaltflächentypen gültig.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` für `hidden` leicht unterschiedlich ist im Vergleich zu anderen Eingabetypen.

- `autofocus`

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass die Eingabe automatisch den Fokus haben sollte, wenn die Seite das Laden abgeschlossen hat (oder wenn das {{HTMLElement("dialog")}}, das das Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus vor dem [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis erhalten.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es mehreren Elementen zugewiesen ist, erhält das erste, das das Attribut hat, den Fokus.

    Das `autofocus`-Attribut kann nicht bei Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren auf eine Formularsteuerung kann sehbehinderten Menschen, die Bildschirmlesetechnologien verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmlesegeräte ihren Benutzer zur Formularsteuerung, ohne sie vorher zu warnen.

    Verwenden Sie die `autofocus`-Attribut mit Bedacht auf die Barrierefreiheit. Durch das automatische Fokussieren einer Steuerung kann die Seite beim Laden scrollen. Der Fokus kann auch dazu führen, dass dynamische Tastaturen auf einigen Touch-Geräten angezeigt werden. Während ein Bildschirmleser das Label der Formularsteuerung mit Fokus ankündigt, wird der Bildschirmleser nichts vor dem Label ankündigen, und die sehende Person auf einem kleinen Gerät wird gleichermaßen den von dem vorhergehenden Inhalt geschaffenen Kontext verpassen.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den Dateieingabetyp `file`, das `capture`-Attribut definiert, welches Medium – Mikrofon, Video oder Kamera – zur Erfassung einer neuen Datei für den Upload mit der `file`-Upload-Steuerung in unterstützenden Szenarien verwendet werden soll. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`

  - : Gültig sowohl für `radio` als auch für `checkbox` Typen, `checked` ist ein Boolean-Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass der Optionsbutton momentan der ausgewählte in der Gruppe von gleichnamigen Optionsbuttons ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig (beim Laden der Seite) ausgewählt ist. Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit ausgewählt ist: Wenn der Zustand des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen werden die Werte eines Kontrollkästchens und von Optionsbuttons nur in den übermittelten Daten eingeschlossen, wenn sie derzeit `checked` sind. Falls sie es sind, werden der Name und die Werte der geprüften Steuerungen übermittelt.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen ausgewählt ist, werden die Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgeführt. Der Standardwert für Kontrollkästchen und Optionsbuttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für die Eingabetypen `hidden`, `text`, `search`, `url`, `tel` und `email`, ermöglicht das `dirname`-Attribut die Übermittlung der Richtung des Elements. Wenn es enthalten ist, wird die Formularsteuerung mit zwei Namen-/Werte-Paaren gesendet: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das oben gezeigte Formular übermittelt wird, bewirkt die Eingabe, dass sowohl das `name` / `value` Paar von `fruit=cherry` als auch das `dirname` / Richtungs-Paar von `fruit-dir=ltr` gesendet wird.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer nicht mit der Eingabe interagieren können soll. Deaktivierte Eingaben werden typischerweise mit einem dunkleren Farbton oder in anderer Form angezeigt, die anzeigt, dass das Feld nicht zur Verfügung steht.

    Konkret empfangen deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl es nicht von der Spezifikation verlangt wird, wird Firefox standardmäßig den [dynamischen deaktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg beibehalten. Verwenden Sie das Attribut [`autocomplete`](#autocomplete), um diese Funktion zu steuern.

- `form`

  - : Eine Zeichenkette, die das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (das heißt, ihr **Formularinhaber**). Der Wert dieser Zeichenkette, falls vorhanden, muss mit dem [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächstgelegenen umschließenden Formular verknüpft, falls vorhanden.

    Das `form`-Attribut ermöglicht es, eine Eingabe an beliebiger Stelle im Dokument zu platzieren, jedoch in einem andernorts im Dokument enthaltenen Formular aufzunehmen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular assoziiert werden.

- `formaction`
  - : Gültig nur für die Bild- und Submit-Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Gültig nur für die Bild- und Submit-Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Gültig nur für die Bild- und Submit-Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Gültig nur für die Bild- und Submit-Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Gültig nur für die Bild- und Submit-Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Gültig nur für die Bildschaltfläche `image`, ist `height` die Höhe der Bilddatei, die zum Darstellen der grafischen Absenden-Schaltfläche angezeigt wird. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das eine eindeutige Kennung (ID) definiert, die im gesamten Dokument eindeutig sein muss. Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des Attributs {{htmlelement('label')}} `for` verwendet, um das Label mit der Formularsteuerung zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert gültig für alle Elemente, es bietet den Browsern einen Hinweis auf die Art der virtuellen Tastaturkonfiguration, die verwendet werden soll, wenn dieses Element oder sein Inhalt bearbeitet wird. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der dem `list`-Attribut zugewiesene Wert sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. Der `<datalist>` bietet eine Liste vordefinierter Werte zur Vorschlag für den Benutzer für diese Eingabe. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert bereitstellen.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Gemäß den Spezifikationen wird das `list`-Attribut von `hidden`, `password`, `checkbox`, `radio`, `file` oder keinem der Schaltflächentypen unterstützt.

    Je nach Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorschlagen, Markierungen entlang eines Bereichs oder sogar eine Eingabe, die wie ein {{HTMLElement("select")}} öffnet, aber nicht gelistete Werte erlaubt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für die anderen Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den größten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (z. B. für Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was anzeigt, dass der Bereich kann umlaufen; zum Beispiel erlaubt dies das Angeben eines Zeitbereichs von 22 Uhr bis 4 Uhr.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die maximale Zeichenfolgenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein Ganzzahlenwert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16-Codeeinheiten ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben als durch das `maxlength`-Attribut erlaubt. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#clientseite-validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den kleinsten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) weniger als dieses ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht-leerer Wert weniger ist als das Minimum, das vom `min`-Attribut erlaubt wird, verhindert die Einschränkungsvalidierung die Formularübertragung. Siehe [Client-seitige Validierung](#clientseite-validierung) für weitere Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), darf der Wert von `max` niedriger sein als der Wert von `min`, was anzeigt, dass der Bereich umschlagen kann; beispielsweise erlaubt dies, einen Zeitbereich von 22 Uhr bis 4 Uhr zu spezifizieren.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimale Zeichenfolgenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert sein, der kleiner oder gleich dem Wert sein muss, der von `maxlength` spezifiziert wird. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16-Codeeinheiten ist, wodurch die Formularübertragung verhindert wird. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#clientseite-validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolean `multiple`-Attribut, falls gesetzt, bedeutet, dass der Benutzer mehrere durch Komma getrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit der `file`-Eingabe auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`

  - : Eine Zeichenkette, die einen Namen für die Eingabesteuerung spezifiziert. Dieser Name wird zusammen mit dem Wert der Steuerung gesendet, wenn die Formulardaten übermittelt werden.

    Betrachten Sie das `name` als Pflichtattribut (obwohl es das nicht ist). Wenn eine Eingabe keinen `name` angegeben hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerungen, nicht ausgewählte Optionsbuttons, nicht ausgewählte Kontrollkästchen und Rücksetzschaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn es als Name eines `<input>` Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch durch die {{Glossary("user_agent", "Benutzer-Agent")}} auf die Zeichencodierung gesetzt, die zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name) -Attribut schafft ein einzigartiges Verhalten für Optionsbuttons.

    Nur ein Optionsbutton in einer gleichnamigen Gruppe kann gleichzeitig ausgewählt sein. Durch die Auswahl eines Optionsbuttons in dieser Gruppe werden automatisch alle derzeit ausgewählten Optionsbuttons in der gleichen Gruppe abgewählt. Der Wert dieses einen ausgewählten Optionsbuttons wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird,

    Wenn in eine Serie gleichnamiger Gruppen von Optionsbuttons getabbt wird, erhält der, der ausgewählt ist, den Fokus. Wenn sie nicht zusammen in Quellenreihenfolge gruppiert sind, beginnt das Tabben in die Gruppe, wenn der erste in der Gruppe auftritt, und überspringt alle, die nicht ausgewählt sind. Mit anderen Worten, wenn einer ausgewählt ist, überspringt das Tabben die nicht ausgewählten Optionsbuttons in der Gruppe. Wenn keiner ausgewählt ist, erhält die Optionsbutton-Gruppe den Fokus, wenn der erste Button in der gleichnamigen Gruppe erreicht wird.

    Sobald einer der Optionsbuttons in einer Gruppe den Fokus hat, wird durch die Verwendung der Pfeiltasten durch alle gleichnamigen Optionsbuttons navigiert, auch wenn die Optionsbuttons nicht in der Quellenreihenfolge gruppiert sind.

    Wenn einem Eingabeelement ein `name` gegeben wird, wird dieser Name zu einer Eigenschaft des tragenden Formelementes [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft. Wenn Sie eine Eingabe haben, deren `name` `guest` ist, und eine andere, deren `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein, und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer eingebauten Eigenschaft des Formulars entspricht, da Sie dann die voreingestellte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, dient das `pattern`-Attribut kompiliert es einen regulären Ausdruck, dem der [`value`](#value) der Eingabe entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärausdruck sein, wie er durch den {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Um den regulären Ausdruck zu erstellen:

    1. das Muster wird implizit mit `^(?:` und `)$` umschlossen und die Übereinstimmung ist für den _gesamten_ Eingabewert erforderlich, d.h. `^(?:<pattern>)$`.
    2. das `'v'`-Flag wird angegeben, sodass das Muster als sequenzielle Unicode-Codepunkte behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert. Wenn das Muster Attribut gültig ist und ein nicht-leerer Wert das Muster nicht erfüllt, verhindert die Einschränkungsvalidierung die Formularübermittlung. Wenn [`multiple`](/de/docs/Web/HTML/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden durch Komma getrennten Wert geprüft.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe anbringen. Sie können auch ein [`title`](#title)-Attribut einfügen, um zu erklären, welche Anforderungen erforderlich sind, um das Muster zu erfüllen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist erforderlich für Barrierefreiheit. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#clientseite-validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis für den Benutzer, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Datenart gibt, eher als eine Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Wenn also beispielsweise in einem Feld erwartet wird, dass der Vorname eines Benutzers erfasst wird, und das Label des Feldes "Vorname" ist, könnte ein geeigneter Platzhalter "z. B. Mustafa" lauten.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für mehr Informationen.

- `popovertarget`

  - : Wählt ein `<input type="button">`-Element in eine Popover-Steuerungsknopf um; nimmt als Wert die ID des Popover-Elements an, das gesteuert werden soll. Siehe die [Popover-API](/de/docs/Web/API/Popover_API)-Landingpage für weitere Details. Die Erstellung einer Beziehung zwischen einem Popover und seinem Steuerungsknopf mit dem `popovertarget`-Attribut hat zwei zusätzlich nützliche Auswirkungen:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Steuerungsknopf und platziert das Popover in einer logischen Position in der Tastaturnavigation, wenn es angezeigt wird. Dies macht das Popover zugänglicher für Tastatur- und Assistenztechnologiebenutzer (AT-Benutzer) (siehe auch [Popover-Accessibilitätsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr praktisch macht, Popover relativ zu ihren Bedienelementen mittels [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die an einem Popover-Element ausgeführt werden soll, das von einer `<input type="button">`-Steuerung gesteuert wird. Mögliche Werte sind:

    - `"hide"`
      - : Die Schaltfläche wird ein angezeigtes Popover verbergen. Wenn versucht wird, ein bereits verstecktes Popover zu verstecken, wird keine Aktion unternommen.
    - `"show"`
      - : Die Schaltfläche wird ein verstecktes Popover anzeigen. Wenn versucht wird, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion unternommen.
    - `"toggle"`
      - : Die Schaltfläche wird ein Popover zwischen Anzeige und verstecktem Status umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardeinstellung, die von der Steuerungsschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht ändern sollte. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly) für mehr Informationen.

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, damit das tragende Formular übermittelt werden kann. Das `required`-Attribut wird von den Eingaben `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Siehe [Client-seitige Validierung](#clientseite-validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Attributes/required) für mehr Informationen.

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url` und `text`, das `size`-Attribut gibt an, wie viel der Eingabe gezeigt wird. Im Grunde erzeugt das gleiche Ergebnis wie das Setzen der CSS-`[width`](/de/docs/Web/CSS/width) Eigenschaft mit einigen Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text`, ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`

  - : Gültig für die Bildschaltfläche `image`, `src` ist eine Zeichenkette, die die URL der Bilddatei angibt, die angezeigt wird, um die grafische Absenden-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert gebunden sein muss.

    Wenn nicht explizit enthalten:

    - `step` ist standardmäßig 1 für `number` und `range`.
    - Jeder Datum/Zeit Eingabetyp hat einen standardmäßigen `step`-Wert, der für den Typ geeignet ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step), und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl sein – Ganzzahl oder Gleitkommazahl – oder der spezielle Wert `any`, was bedeutet, dass kein Schrittimplizit ist, und jeder Wert ist erlaubt (außer andere Beschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, Datum/Zeit-Eingabetypen und `range` Eingabetypen gleich dem Basiswert für die Schritte - dem [`min`](#min) Wert und Inkrementen des `step` Werts, bis zum [`max`](#max) Wert, falls angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Zahl, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede ganze Zahl gültig, aber Gleitkommazahlen (wie `4.2`) sind nicht gültig, weil standardmäßig `step` auf `1` gesetzt ist. Für `4.2` gültig zu sein, hätte `step` auf `any`, 0.1, 0.2, oder ein beliebiger Wert gesetzt werden müssen, der `min`-Wert müsste eine Zahl mit `.2` sein, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht den Schrittkonfiguration entsprechen, wird der Wert als ungültig bei der Einschränkungsvalidierung betrachtet und wird das `:invalid`-Pseudoklasse entsprechen.

    Siehe [Client-seitige Validierung](#clientseite-validierung) für mehr Informationen.

- `tabindex`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element Eintagsfokus erhalten kann (fokussierbar ist), wenn es sollte, an sequentieller Tastaturnavigation teilnehmen. Da alle Eingabesteuerungen außer Eingaben des Typs `hidden` fokussierbar sind, sollte dieses Attribut nicht bei Formularelementen verwendet werden, da dadurch die Verwaltung der Fokussierungsreihenfolge für alle Elemente im Dokument notwendig würde, mit dem Risiko, die Benutzerfreundlichkeit und Barrierefreiheit zu beeinträchtigen, wenn dies falsch gemacht wird.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text enthält, der beratende Informationen bezüglich des zugehörigen Elements darstellt. Solche Informationen können dem Benutzer typischerweise, jedoch nicht notwendigerweise, als Tooltip präsentiert werden. Der Titel sollte NICHT als erste Erklärung zum Zweck der Formularsteuerung verwendet werden. Stattdessen sollten Sie das {{htmlelement('label')}}-Element mit einem `for`-Attribut verwenden, das auf das `id`-Attribut der Formularsteuerung gesetzt ist. Siehe [Labels](#labels) unten.

- `type`

  - : Ein String, der den Typ der darzustellenden Steuerung angibt. Um beispielsweise ein Kontrollkästchen zu erstellen, wird der Wert `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet, wodurch ein Klartext-Eingabefeld erstellt wird.

    Erlaubte Werte sind oben unter [Eingabetypen](#input_types) aufgeführt.

- `value`

  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der anfängliche Wert, und von da an kann er jederzeit geändert oder abgerufen werden, indem JavaScript zum Zugriff auf das entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt verwendet wird, dessen `value`-Eigenschaft den Wert angibt. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio` und `hidden` angesehen werden.

- `width`

  - : Gültig für die Bildschaltfläche `image`, ist `width` die Breite der Bilddatei, die zum Darstellen der grafischen Absenden-Schaltfläche angezeigt wird. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardmäßige Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. Im Allgemeinen sollten Sie es vermeiden, sie zu verwenden, es sei denn, Sie können es nicht vermeiden.

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
        Ob oder ob nicht wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse gesendet werden, um das Aktualisieren der Live-Suchergebnisse zu ermöglichen, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion angibt, die durchgeführt werden soll, wenn der Benutzer die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt, während er das Feld bearbeitet; dies wird verwendet, um eine geeignete Beschriftung für diese Taste auf einer virtuellen Tastatur zu ermitteln. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
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
        Die maximale Anzahl von Einträgen, die in der Dropdown-Liste früherer Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean-Wert, der angibt, ob der Benutzer nur ein Verzeichnis (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) wählen darf
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome, etc.), die, wenn vorhanden, den {{Glossary("user_agent", "Benutzer-Agent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzer-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis nur gesendet, wenn der Benutzer eine Suche explizit einleitet (z.B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

    Das `search`-Ereignis ist ratsbegrenz

t, sodass es nicht häufiger als in einem implementierungsdefinierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich der -moz-orient nicht-standardmäßigen CSS-Eigenschaft, die die {{htmlelement('progress')}} und {{htmlelement('meter')}}-Elemente beeinflusst, definiert das `orient`-Attribut die Ausrichtung des Bereichsschiebers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularelemente.

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut – nur in Safari unterstützt – ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die im `<input>`-Elemente nativ bereitgestellten Dropdown-Menü früherer Suchanfragen angezeigt wird.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben wird, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean `webkitdirectory` Attribut, wenn vorhanden, zeigt an, dass nur Verzeichnisse in der Dateiauswahloberfläche durch den Benutzer auswählbar sein sollen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge und Firefox 50 und später verwendbar. Obwohl es relativ breite Unterstützung hat, ist es dennoch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Ihnen bleibt keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Auch verfügbar sind Methoden, die von den Elternschnittstellen spezifiziert sind, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements Validitätsprüfungen besteht; andernfalls gibt `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements Validitätsprüfungen besteht; andernfalls gibt `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und (falls das Ereignis nicht abgebrochen wird) meldet das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, falls der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder eine Kalenderdatumeingabe) macht diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt wird, wenn der Wert des Eingabefeldes ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine gegebene Zeichenfolge. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der bestehende Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines textbasierten Eingabeelements aus. Macht nichts für Eingaben, die nicht als Texteingabefelder dargestellt sind.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Auswahldialog für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, jedoch durch Drücken einer Schaltfläche oder einer anderen Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Da Inputs ersetzt werden, haben sie einige Merkmale, die für nicht-formale Elemente nicht anwendbar sind. Es gibt CSS-Selektoren, die speziell auf Formularelemente basierend auf ihren UI-Merkmalen abzielen können, auch bekannt als UI-Pseudoklassen. Das Input-Element kann auch nach Typ mit Attributselektoren gezielt werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

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
        Jedes derzeit aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, eingegeben, etc.) oder Fokus akzeptieren kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert werden kann oder Fokus akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es ansonsten aktiviert werden könnte (ausgewählt, angeklickt, eingegeben, etc.) oder Fokus akzeptieren könnte, wäre es nicht deaktiviert.
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
        Element, das derzeit <a href="#placeholder"><code>placeholder</code> Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elementen mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die standardmäßig in einer Gruppe verwandter Elemente sind. Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Input-Typen, die beim Laden oder Rendern der Seite überprüft wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Input-Typen, die
        derzeit überprüft sind (und der ({{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, der derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente,
        deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt wird,
        {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle
        Radiobuttons mit demselben Name-Wert im Formular nicht überprüft sind, und
        {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die Eingabevalidierungen angewendet werden können und die
        derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die Eingabevalidierungen angewendet werden und die derzeit
        ungültig sind. Passt zu einem Formularelement, dessen Wert nicht mit den
        durch seine Attribute festgelegten Einschränkungen übereinstimmt, wie z.B.
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht leeres Eingabefeld, dessen aktueller Wert innerhalb der durch die
        <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>-Attribute und das <a href="#step"><code>step</code></a>-Wert angegebenen Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht leeres Eingabefeld, dessen aktueller Wert NICHT innerhalb der durch die
        <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a>-Attribute angegebenen Bereichsgrenzen liegt oder
        nicht mit der <a href="#step"><code>step</code></a> Einschränkung übereinstimmt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Elemente, die das <a href="#required"><code>required</code></a>-Attribut haben.
        Passt nur zu Elementen, die erforderlich sein können.
        Das Attribut auf einem nicht erforderlichen Element führt nicht zu einem Treffer.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}}-Elemente, die nicht das <a href="#required"><code>required</code></a>-Attribut gesetzt haben.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch bei Verlassen des Elements aktiviert. Passt
        zu ungültiger Eingabe, jedoch nur nach Benutzerinteraktion, z.B. durch Fokussieren
        auf das Steuerelement, Verlassen des Steuerelements oder den Versuch, das Formular
        mit dem ungültigen Steuerelement einzureichen.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die dem Benutzer einen Auswahlmechanismus anbieten, um einen Wert auszusuchen (zum Beispiel <a href="/de/docs/Web/HTML/Element/input/color"><code>&lt;input type="color"&gt;</code></a>) — aber nur, wenn das Element im offenen Zustand ist, also wenn der Auswahlmechanismus angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen-Beispiel

Wir können eine Checkbox-Beschriftung basierend darauf gestalten, ob die Checkbox angekreuzt ist oder nicht. In diesem Beispiel gestalten wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des unmittelbar nach einem angekreuzten Input kommenden {{htmlelement('label')}}. Wir haben keine Stile angewendet, wenn das `input` nicht angekreuzt ist.

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

Es ist möglich, verschiedene Arten von Formulareingaben basierend auf ihrem [`type`](#type) mithilfe von [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) zu selektieren. CSS-Attributselektoren passen zu Elementen basierend entweder nur auf der Anwesenheit eines Attributs oder dem Wert eines bestimmten Attributs.

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

Standardmäßig erscheint der Platzhaltertext in einem durchscheinenden oder hellgrauen Ton. Das {{cssxref('::placeholder')}} Pseudo-Element ist der [`placeholder` Text](#placeholder) des Inputs. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestaltet werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Satz von CSS-Eigenschaften, die für das {{cssxref("::first-line")}} Pseudo-Element zutreffen, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### appearance

Die {{cssxref("appearance")}}-Eigenschaft ermöglicht es, (fast) jedes Element im Stil einer plattformnativen Darstellung basierend auf dem Theme des Betriebssystems anzuzeigen sowie jede plattformnative Gestaltung mit dem Wert `none` zu entfernen.

Man könnte ein `<div>` wie einen Radiobutton aussehen lassen mit `div {appearance: radio;}` oder ein Radio wie eine Checkbox mit `[type="radio"] {appearance: checkbox;}`, aber das sollten Sie nicht tun.

Das Setzen von `appearance: none` entfernt plattformnative Rahmen, aber nicht die Funktionalität.

### caret-color

Eine Eigenschaft, die speziell für texteingabebezogene Elemente gilt, ist die CSS-Eigenschaft {{cssxref("caret-color")}}, die es erlaubt, die Farbe des Texteingabe-Cursors festzulegen:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht Ihnen, das Größerverhalten von Formulareingaben zu steuern (d.h. sie haben standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, damit sich Formularelemente anpassen können, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt einengen und wachsen, während mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingaben akzeptieren (z.B. [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Element/input/file), und {{htmlelement("textarea")}}-Elementen.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textlichen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element). Wenn dies der Fall ist, können die Position und Größe des Elements innerhalb seines Rahmens mithilfe der CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML finden Sie unter:

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels sind notwendig, um unterstützenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element liefert erklärende Informationen zu einem Formularfeld, das _immer_ passend ist (abgesehen von allen Layout-Bedenken, die Sie haben). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingetragen werden soll.

#### Zugehörige Labels

Die semantische Paarung von `<input>`- und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Bildschirmleser. Durch das Paaren mit dem [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut von `<label>`, binden Sie das Label an das Input in einer Weise, die es Bildschirmlesern ermöglicht, Eingaben genauer zu beschreiben.

Es reicht nicht aus, einfachen Text neben dem `<input>`-Element zu haben. Vielmehr erfordert die Benutzbarkeit und Barrierefreiheit das Einschließen eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist unzugänglich: Es existiert keine Beziehung zwischen der Eingabeaufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen liefert das Label eine größere Trefferfläche für Maus- und Touchscreen-Benutzer, um darauf zu klicken oder es zu berühren. Indem Sie ein `<label>` mit einem `<input>` paaren, fokussiert das Klicken auf eines von beiden das `<input>`. Wenn Sie einfachen Text verwenden, um Ihr Input zu "beschriften", passiert das nicht. Die Aufforderung Teil der Aktivierungsfläche des Eingabefelds zu machen, ist hilfreich für Menschen mit motorischen Einschränkungen.

Als Webentwickler ist es wichtig, niemals anzunehmen, dass Menschen all die Dinge wissen, die wir wissen. Die Vielfalt der Menschen, die das Web – und somit Ihre Website – nutzen, garantiert praktisch, dass einige Besucher Ihrer Seite einige Unterschiede in Denkprozessen und/oder Umständen haben, die sie dazu bringen, Ihre Formulare sehr unterschiedlich von Ihnen ohne klare und korrekt präsentierte Labels zu interpretieren.

#### Platzhalter sind nicht barrierefrei

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text zu spezifizieren, der im Inhaltsbereich des `<input>`-Elements selbst erscheint, wenn es leer ist. Der Platzhalter sollte nie erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil er das nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht um eine Erklärung oder Aufforderung zu liefern.

Nicht nur, dass der Platzhalter für Bildschirmleser unzugänglich ist, einmal wenn der Benutzer irgendeinen Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitenübersetzungsfunktionen können Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element beschriften müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Clientseite-Validierung

> [!WARNING]
> Clientseite-Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, _überprüfen_ Sie sie immer auch serverseitig und geben eine [`400`-HTTP-Antwort](/de/docs/Web/HTTP/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Zustand jeder Eingabe zu gestalten, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser Client-seitige Validierung bei (versuchter) Formularübermittlung. Bei der Formularübermittlung, wenn es ein Formularelement gibt, das die Eingabevalidierung nicht besteht, zeigen unterstützende Browser eine Fehlermeldung an, die auf das erste ungültige Formularelement hinweist; entweder eine Standardmeldung basierend auf dem Fehler wurde angezeigt oder eine von Ihnen festgelegte Nachricht.

Einige Eingabetypen und andere Attribute setzen Grenzen dafür, welche Werte für eine gegebene Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler könnten auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Zahl (nicht mit den Anforderungen des `step`-Attributs übereinstimmt), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich möglicher Werte periodisch ist (das bedeutet, dass bei dem höchsten möglichen Wert die Werte zurück zum Anfang gehen, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min) Eigenschaften umgekehrt sind, was darauf hinweist, dass der Bereich der erlaubten Werte bei `min` beginnt, zum niedrigstmöglichen Wert umschlägt und dann fortfährt, bis `max` erreicht ist. Dies ist besonders nützlich für Datums- und Zeitangaben, wie wenn Sie den Bereich von 20:00 Uhr bis 08:00 Uhr erlauben möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und ihre Werte können zu einem spezifischen Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Validitätsobjektfehler hängen von den <code>&lt;input&gt;</code>
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
        Tritt auf, wenn der Wert größer ist als der durch das <code>max</code>-Attribut definierte Höchstwert
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch das <code>maxlength</code>-Eigenschaft erlaubte Zahl
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der durch das <code>min</code>-Attribut definierte Mindestwert
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch das <code>minlength</code>-Eigenschaft erforderliche Zahl
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Muster-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>Wert</code> nicht damit übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, der Wert jedoch <code>null</code> ist oder Radio oder Checkbox nicht angekreuzt sind.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert stimmt nicht mit dem Schritt-Inkrement überein. Der Standard-Inkrement ist <code>1</code>, daher sind nur ganze Zahlen auf <code>type="number"</code> gültig, wenn der Schritt nicht eingeschlossen ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, z.B. wenn eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required`-Attribut hat, wird kein Wert oder eine leere Zeichenfolge nicht als ungültig betrachtet. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme des `required`-Attributs, führt eine leere Zeichenfolge nicht zu einem Fehler.

Wir können Grenzen dafür setzen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer warnen, wenn ein Fehler bei der Übermittlung des Formulars auftritt.

Zusätzlich zu den in der Tabelle oben beschriebenen Fehlern enthält die `validityState`-Schnittstelle die `badInput`, `valid` und `customError`-booleschen schreibgeschützten Eigenschaften. Das Validitätsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften gibt ein Wert von `true` an, dass der angegebene Grund, dass die Validierung fehlgeschlagen sein könnte, zutrifft, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen befolgt.

Wenn ein Fehler vorliegt, warnen unterstützende Browser sowohl den Benutzer als auch verhindern die Übermittlung des Formulars. Ein Wort der Vorsicht: wenn ein benutzerdefinierter Fehler auf einen "wahrheitsgemäßen" Wert gesetzt wird (irgendetwas anderes als eine leere Zeichenfolge oder `null`), wird das Formular daran gehindert, übermittelt zu werden. Wenn keine benutzerdefinierte Fehlermeldung vorhanden ist und keine der anderen Eigenschaften wahr zurückgeben, wird `valid` wahr sein und das Formular kann übermittelt werden.

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

Die letzte Zeile, die die benutzerdefinierte Fehlermeldung auf eine leere Zeichenfolge setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Validität gesetzt ist, wird es nicht übermittelt, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel eines benutzerdefinierten Validierungsfehlers

Wenn Sie beim Validitätsfehler eines Feldes eine benutzerdefinierte Fehlermeldung anzeigen möchten, müssen Sie die auf `<input>` (und verwandte) Elemente verfügbare [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden. Betrachten Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsmerkmale verursachen, dass dies eine Standardfehlermeldung produziert, wenn Sie versuchen, das Formular mit entweder keinem gültigen Wert oder einem Wert, der nicht dem `pattern` entspricht, einzureichen.

Wenn Sie benutzerdefinierte Fehlermeldungen anzeigen möchten, könnten Sie JavaScript wie das folgende verwenden:

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

Das Beispiel wird wie folgt gerendert:

{{EmbedLiveSample('Custom_validation_error_example')}}

In Kürze:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sein Wert durch Ausführen der Methode `checkValidity()` über den `input`-Ereignishandler geändert wird.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst, und die `invalid`-Ereignishandlerfunktion wird ausgeführt. Innerhalb dieser Funktion arbeiten wir heraus, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, unter Verwendung eines `if ()`-Blocks, und setzen eine benutzerdefinierte Validitätsfehlermeldung.
- Dadurch wird, wenn der Eingabewert beim Drücken des Absenden-Knopfes ungültig ist, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn es gültig ist, wird es wie erwartet eingereicht. Damit dies passiert, muss die benutzerdefinierte Validität aufgehoben werden, indem `setCustomValidity()` mit einem leeren Zeichenwert aufgerufen wird. Wir tun dies daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Validität zuvor gesetzt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie derzeit bei der Einreichung einen gültigen Wert enthält.

> [!NOTE]
> Überprüfen Sie immer die Eingabeeinschränkungen sowohl clientseitig als auch serverseitig. Eingabevalidierung auf der Clientseite vermindert nicht die Notwendigkeit von Validierungen auf der _Server_ Seite. Ungültige Werte können immer noch von älteren Browsern oder durch bösartige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte ein proprietäres Fehlerattribut — `x-moz-errormessage` — für viele Versionen, mit dem Sie benutzerdefinierte Fehlermeldungen auf ähnliche Weise festlegen konnten. Dieses wurde in Version 66 entfernt (siehe [Firefox bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der lokalen Region ab. In einigen Regionen ist 1,000.00 eine gültige Zahl, während in anderen Regionen die gültige Eingabe 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die lokale Region zu bestimmen, um die Benutzereingabe zu validieren (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut am Element oder einem seiner Eltern angegeben ist.
- Versuchen Sie die Sprache, die durch einen `Content-Language`-HTTP-Header angegeben ist. Oder,
- Wenn keine angegeben ist, verwenden Sie die Browsersprache.

## Barrierefreiheit

### Labels

Bei der Verwendung von Eingaben ist es eine Barrierefreiheitsanforderung, Labels hinzuzufügen. Dies ist notwendig, damit Personen, die unterstützende Technologien verwenden, erkennen können, wofür die Eingabe gedacht ist. Außerdem wird durch Klicken oder Berühren eines Labels das zugehörige Formularelement fokussiert. Dies verbessert die Barrierefreiheit und Benutzbarkeit für sehende Benutzer, erhöht die Fläche, die ein Benutzer klicken oder berühren kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radiobuttons und Checkboxen, die klein sind. Weitere Informationen zu Labels im Allgemeinen finden Sie unter [Labels](#labels).

Das folgende Beispiel zeigt, wie das `<label>` mit einem `<input>`-Element im obigen Stil verknüpft werden kann. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert mit der `id` des Inputs übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten eine Fläche bereitstellen, die groß genug ist, um einfach aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Problemen und Menschen, die nicht präzise Formen der Eingabe benutzen, wie z.B. einen Stift oder Finger. Eine minimale interaktive Größe von 44×44 [CSS-Pixeln](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

- [Verständniskriterium 2.5.5: Zielgröße | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, gelistet, übermittelbar, zurücksetzbar, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>. Wenn das <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann bildbeschriftbares Element, fühlbarer Inhalt.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
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

- [Eingabebeschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Versenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Eingabedatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Anleitung zum Erstellen von benutzerdefinierten Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
