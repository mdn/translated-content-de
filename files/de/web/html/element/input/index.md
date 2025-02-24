---
title: "<input>: Das HTML-Input-Element"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<input>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um interaktive Steuerelemente für webbasierten Formulare zu erstellen, um Daten von einem Benutzer zu erfassen; eine Vielzahl an Eingabedaten und Steuerungs-Widgets sind verfügbar, abhängig vom Gerät und dem {{Glossary("user_agent", "User Agent")}}. Das `<input>` Element ist eines der mächtigsten und komplexesten in HTML, da es eine große Anzahl an Kombinationen von Eingabetypen und Attributen gibt.

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

Wie ein `<input>` funktioniert, hängt wesentlich vom Wert seines [`type`](#type) Attributs ab, und deshalb werden die verschiedenen Typen auf separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird standardmäßig `text` angenommen.

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
        Eine Schaltfläche ohne Standardverhalten, die den Wert des <a href="#value"><code>value</code></a> Attributs anzeigt, standardmäßig leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Kontrollkästchen, das es ermöglicht, einzelne Werte auszuwählen bzw. abwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerungselement zur Angabe einer Farbe; öffnet einen Farbwähler in unterstützenden Browsern, wenn aktiv.
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
        Ein Steuerungselement zur Eingabe eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumswähler oder numerische Räder für Jahr, Monat, Tag in unterstützenden Browsern, wenn aktiv.
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
        Ein Steuerungselement zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumswähler oder numerische Räder für die Komponenten von Datum und Uhrzeit in unterstützenden Browsern, wenn aktiv.
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
        <code>text</code> Eingabefeld, verfügt aber über Validierungsparameter und relevante Tastaturen in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Verwenden Sie das <a href="#accept"><code>accept</code></a> Attribute, um die Dateitypen zu definieren, die die Steuerung auswählen kann.
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
        Ein grafischer <code>submit</code> Button. Zeigt ein Bild an, das durch das <code>src</code> Attribut definiert ist.
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
      <td>Ein Steuerungselement zur Eingabe eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerungselement zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt standardmäßige
        Validierung hinzu. Zeigt eine numerische Tastatur in einigen Geräten
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
        Einzeiliges Textfeld, dessen Wert nicht zu sehen ist.
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
        Ein Radioknopf, der es erlaubt, einen einzigen Wert aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a> Wert auszuwählen.
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
        Ein Steuerungselement zur Eingabe einer Zahl, deren genauer Wert nicht wichtig ist.
        Wird als Bereichs-Widget angezeigt, das standardmäßig den mittleren Wert hat.
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
        Ein Knopf, der den Inhalt des Formulars auf Standardwerte zurücksetzt. Nicht empfohlen.
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
        automatisch vom Eingabewert entfernt. Kann ein Löschsymbol in
        unterstützenden Browsern enthalten, das zum Leeren des Feldes verwendet werden kann. Zeigt ein
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
      <td>Ein Knopf, der das Formular einreicht.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        Eine Eingabesteuerung zur Eingabe einer Telefonnummer. Zeigt eine Telefonwähltastatur
        in einigen Geräten mit dynamischen Tastaturen an.
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
        automatisch vom Eingabewert entfernt.
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
      <td>Ein Steuerungselement zur Eingabe eines Zeitwertes ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code> Eingabefeld, verfügt aber
        über Validierungsparameter und relevante Tastaturen in unterstützenden Browsern
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
        Eine Steuerung zur Eingabe eines Datums bestehend aus einer Wochennummer und einer Jahreszahl, ohne Zeitzone.
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
        Ein Steuerungselement zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>` Element ist so mächtig aufgrund seiner Attribute; das [`type`](#type) Attribut, das oben mit Beispielen beschrieben wird, ist das wichtigste. Da jedes `<input>` Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle basiert, teilen sie technisch gesehen denselben Satz an Attributen. In der Praxis jedoch haben die meisten Attribute Auswirkungen nur auf eine spezifische Untermenge von Eingabetypen. Außerdem beeinflussen einige Attribute die Eingabeelemente unterschiedlich, je nach Typ, und beeinflussen verschiedene Eingabetypen auf unterschiedliche Weisen.

Dieser Abschnitt bietet eine Tabelle mit allen Attributen und einer kurzen Beschreibung. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut ausführlicher beschreibt, zusammen mit den Eingabetypen, mit denen sie assoziiert sind. Attribute, die für die meisten oder alle Eingabetypen gemeinsam sind, werden weiter unten ausführlicher erläutert. Attribute, die einzigartig für bestimmte Eingabetypen sind—oder Attribute, die allgemein für alle Eingabetypen gelten, aber besondere Verhaltensweisen aufweisen, wenn sie auf einem bestimmten Eingabetyp verwendet werden—sind stattdessen auf den Seiten dieser Typen dokumentiert.

Zu den Attributen des `<input>` Elements gehören die [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                              |
| --------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis für den erwarteten Dateityp in Dateiupload-Steuerungselementen                                    |
| [`alt`](#alt)                                 | `image`                                                                      | alternativer Text für den Bildtyp. Für die Barrierefreiheit erforderlich                                  |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Bestimmt die automatischen Großschreibung im eingegebenen Text.                                           |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis für die Formular-Autovervollständigungsfunktion                                                   |
| [`capture`](#capture)                         | `file`                                                                       | Aufnahmemethode für Medien in Dateiupload-Steuerungselementen                                             |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Ob der Befehl oder die Steuerung aktiviert ist                                                            |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfeldes zur Verwendung für das Senden der Direktionalität des Elements im Formular        |
| [`disabled`](#disabled)                       | alle                                                                         | Ob die Formularsteuerung deaktiviert ist                                                                  |
| [`form`](#form)                               | alle                                                                         | Verbindet die Steuerung mit einem Formularelement                                                         |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | URL zur Verwendung für die Formularübermittlung                                                           |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Datenmenge Codierungstyp zur Verwendung für die Formularübermittlung                                      |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | HTTP-Methode zur Verwendung für die Formularübermittlung                                                  |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Kein Validieren von Formularsteuerungen für die Formularübermittlung                                      |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für Formularübermittlung                                                                 |
| [`height`](#height)                           | `image`                                                                      | Dasselbe wie das Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                            |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des id-Attributs der {{htmlelement('datalist')}} für Autovervollständigungsoptionen                  |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Maximalwert                                                                                               |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) von `value`                                                           |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Minimalwert                                                                                               |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Minimale Länge (Anzahl der Zeichen) von `value`                                                           |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolean. Ob mehrere Werte erlaubt sind                                                                    |
| [`name`](#name)                               | alle                                                                         | Name der Formularsteuerung. Wird mit dem Formular als Teil eines Name/Wert-Paares gesendet                |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Muster, das der `value` entsprechen muss, um gültig zu sein                                               |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der im Formularsteuerungselement erscheint, wenn kein Wert gesetzt ist                              |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Kennzeichnet einen `<input type="button">` als Steuerung für ein Popover-Element                          |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Gibt an, welche Aktion eine Popover-Steuerung ausführen soll                                              |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht bearbeitbar                                                                   |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss überprüft werden, damit das Formular abgeschickt werden kann |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe der Steuerung                                                                                       |
| [`src`](#src)                                 | `image`                                                                      | Wie das `src` Attribut für {{htmlelement('img')}}; Adresse der Bildressource                              |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Inkrementelle Werte, die gültig sind                                                                      |
| [`type`](#type)                               | alle                                                                         | Typ der Formularsteuerung                                                                                 |
| [`value`](#value)                             | alle außer `image`                                                           | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht er dem Anfangswert                             |
| [`width`](#width)                             | `image`                                                                      | Wie das Breitenattribut für {{htmlelement('img')}}                                                        |

Einige zusätzliche nicht standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgeführt.

### Individuelle Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Nur gültig für den `file` Eingabetyp, definiert das `accept` Attribut, welche Dateitypen in einem `file` Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`

  - : Nur gültig für den `image` Button, liefert das `alt` Attribut alternativen Text für das Bild, der den Wert des Attributs anzeigt, wenn das Bild [`src`](#src) fehlt oder sonst nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`

  - : Steuert, ob der eingegebene Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Weitere Informationen finden Sie auf der globalen Attributseite [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) Attribut nimmt als Wert eine mit Leerzeichen getrennte Zeichenkette an, die beschreibt, welche Art von Autovervollständigungsfunktion die Eingabe bereitstellen sollte. Eine typische Implementierung des Autovervollständigens erinnert sich an zuvor in demselben Eingabefeld eingegebene Werte, aber es können auch komplexere Formen der Autovervollständigung existieren. Zum Beispiel könnte ein Browser mit der Kontaktliste eines Geräts integrieren, um `email` Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values) für zulässige Werte.

    Das `autocomplete` Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Wirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen gültig, außer `checkbox`, `radio`, `file` oder irgendeinem der Schaltflächen-Typen.

    Siehe das [`autocomplete` Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` für `hidden` leicht anders ist als für andere Eingabetypen.

- `autofocus`

  - : Ein Boolean-Attribut, das angibt, dass das Eingabefeld automatisch den Fokus erhalten soll, wenn die Seite fertig geladen ist (oder wenn das {{HTMLElement("dialog")}} mit dem Element angezeigt wird).

    > [!NOTE]
    > Ein Element mit dem `autofocus` Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird.

    Es darf nicht mehr als ein Element im Dokument geben, das das `autofocus` Attribut besitzt. Wenn das Attribut auf mehr als einem Element gesetzt wird, erhält das erste dieses Attributs den Fokus.

    Das `autofocus` Attribut kann nicht auf Eingaben vom Typ `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren auf eine Formularsteuerung kann sehbehinderten Personen, die Bildschirmlesetechnologie nutzen, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihre Benutzer ohne Vorwarnung zur Formularsteuerung.

    Verwenden Sie das `autofocus` Attribut mit Bedacht auf Barrierefreiheit. Automatisches Fokussieren auf eine Steuerung kann das Scrollen der Seite bei der Ladung verursachen. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label der fokussierten Formularsteuerung ankündigt, wird er nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird ebenfalls den Kontext, den der vorherige Inhalt schafft, verpassen.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture Spezifikation und gültig nur für den `file` Eingabetyp, definiert das `capture` Attribut, welches Medium—Mikrofon, Video oder Kamera—verwendet werden soll, um eine neue Datei für den Upload mit `file` Upload-Steuerung in unterstützenden Szenarien aufzunehmen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`

  - : Gültig sowohl für `radio` als auch `checkbox` Typen, `checked` ist ein Boolean-Attribut. Wenn es auf einem `radio` Typ vorhanden ist, zeigt es an, dass der Radioknopf der aktuell ausgewählte in der Gruppe von gleichnamigen Radioknöpfen ist. Wenn es auf einem `checkbox` Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig (wenn die Seite geladen wird) geprüft ist. Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit geprüft ist: wenn der Zustand des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen werden der Name und die Werte von geprüften Steuerungen nur übermittelt, wenn sie aktuell `checked` sind. Anderenfalls werden sie im gesendeten Formular nicht berücksichtigt.
    >
    > Wenn ein Kontrollkästchen, dessen `name` `fruit` ist, zum Beispiel den `value` `cherry` und ist geprüft, werden die Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgeführt. Der Standard-`value` für Kontrollkästchen und Radioknöpfe ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen, ermöglicht das `dirname` Attribut die Übermittlung der Direktionalität des Elements. Wenn enthalten, übermittelt das Steuerungselement mit zwei Name/Wert-Paaren: das erste ist das [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname` Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das obige Formular übermittelt wird, verursachen die Eingaben sowohl die `name` / `value` Paar von `fruit=cherry` als auch das `dirname` / Richtungspaar von `fruit-dir=ltr` gesendet zu werden.
    Für mehr Informationen siehe das [`dirname` Attribut](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolean-Attribut, das angibt, dass der Benutzer nicht mit der Eingabe interagieren kann. Deaktivierte Eingaben werden typischerweise in einer gedimmten Farbe oder mit einer anderen Form des Hinweises angezeigt, dass das Feld nicht verfügbar ist.

    Speziell empfangen deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event) Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl von der Spezifikation nicht gefordert, wird Firefox standardmäßig [den dynamischen deaktivierten Zustand beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladungen hinweg. Verwenden Sie das [`autocomplete`](#autocomplete) Attribut, um diese Funktion zu steuern.

- `form`

  - : Eine Zeichenkette, die das {{HTMLElement("form")}} Element spezifiziert, mit dem die Eingabe assoziiert ist (d.h. ihr **Formular-Eigentümer**). Der Wert dieser Zeichenkette, falls vorhanden, muss der [`id`](#id) eines `<form>` Elements im selben Dokument entsprechen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>` Element mit dem nächstgelegenen, enthaltenen Formular assoziiert, falls vorhanden.

    Das `form` Attribut ermöglicht es, eine Eingabe überall im Dokument zu platzieren, sie aber mit einem Formular an einem anderen Ort im Dokument zu inkludieren.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular assoziiert sein.

- `formaction`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `formenctype`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `formmethod`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `formnovalidate`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `formtarget`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `height`
  - : Gültig nur für die `image` Eingabe-Schaltfläche, die `height` ist die Höhe der Bilddatei, die angezeigt werden soll, um den grafischen Submit-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des `for` Attributs im {{htmlelement('label')}} verwendet, um das Label mit der Formularsteuerung zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert gültig für alle Elemente, bietet einen Hinweis für Browser, welche Art von virtueller Tastaturkonfiguration verwendet werden soll, wenn dieses Element oder dessen Inhalte bearbeitet werden. Werte schließen ein: `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der Wert, der dem `list` Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) einer {{HTMLElement("datalist")}} sein, das sich im selben Dokument befindet. Die `<datalist>` bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden in den vorgeschlagenen Optionen nicht einbezogen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig auf `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut Spezifikationen wird das `list` Attribut nicht vom `hidden`, `password`, `checkbox`, `radio`, `file` oder einem der Schaltflächentypen unterstützt.

    Je nach Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Markierungen entlang eines Bereichs, oder sogar eine Eingabe, die sich wie eine {{HTMLElement("select")}} öffnet aber nicht gelistete Werte erlaubt. Schauen Sie sich die [Tabelle für Browser-Kompatibilität](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für andere Eingabetypen an.

    Siehe das {{htmlelement('datalist')}} Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert den größten Wert im Bereich der zulässigen Werte. Wenn der [`value`](#value), der in das Element eingegeben wird, diesen übersteigt, schlägt das Element bei der [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max` Attributs keine Zahl ist, hat das Element keinen Höchstwert.

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (wie z.B. für Daten oder Zeiten), kann der `max` Wert niedriger sein als der `min` Wert, was darauf hinweist, dass der Bereich sich umwickeln könnte; dies erlaubt Ihnen z.B., einen Zeitrahmen von 22 Uhr bis 4 Uhr anzugeben.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert die maximale Zeichenfolgenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn keine `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt bei der [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes größer als UTF-16 Code-Einheiten der `maxlength` ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen als durch das `maxlength` Attribut erlaubt eingeben. Die Constraints-Validierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert den kleinsten Wert im Bereich der zulässigen Werte. Wenn der [`value`](#value), der in das Element eingegeben wird, niedriger ist, schlägt das Element bei der [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min` Attributs keine Zahl ist, hat das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max` Attributs sein. Wenn das `min` Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, gilt kein `min` Wert. Wenn das `min` Attribut gültig ist und ein nicht leerer Wert kleiner als der durch das `min` Attribut erlaubte Mindestwert ist, verhindert die Constraint-Validierung die Formularübermittlung. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (wie z.B. für Daten oder Zeiten), kann der `max` Wert niedriger sein als der `min` Wert, was darauf hinweist, dass der Bereich sich umwickeln könnte; dies erlaubt Ihnen z.B., einen Zeitrahmen von 22 Uhr bis 4 Uhr anzugeben.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert die minimale Zeichenfolgenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert sein, der kleiner oder gleich dem vom `maxlength` angegebenen Wert ist. Wenn keine `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Eingabefeld keine Mindestlänge.

    Die Eingabe schlägt bei der [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als UTF-16 Code-Einheiten der `minlength` ist, was die Formularübermittlung verhindert. Die Constraints-Validierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolean-Attribut `multiple`, wenn gesetzt, bedeutet, dass der Benutzer durch Kommas getrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehrere Dateien mit dem `file` Input auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`

  - : Eine Zeichenkette, die einen Namen für die Eingabesteuerung spezifiziert. Dieser Name wird zusammen mit dem Wert der Steuerung übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als ein erforderliches Attribut (auch wenn es nicht ist). Wenn eine Eingabe keinen `name` angegeben hat oder der `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerungen, nicht geprüfte Radioknöpfe, nicht geprüfte Kontrollkästchen und Reset-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn als Name eines `<input>` Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "user agent")}} auf die verwendete Zeichencodierung für die Formularübermittlung gesetzt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name) Attribut erstellt ein einzigartiges Verhalten für Radioknöpfe.

    Nur ein Radioknopf in einer gleichnamigen Gruppe kann zu einem Zeitpunkt geprüft sein. Wenn ein beliebiges Radioknopf in dieser Gruppe ausgewählt wird, wird jeder aktuell ausgewählte Radioknopf in derselben Gruppe automatisch deselektiert. Der Wert dieses einen geprüften Radioknopfs wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird,

    Beim Tabben in eine Reihe von gleichnamigen Gruppen von Radioknöpfen erhält, wenn einer geprüft ist, dieser den Fokus. Wenn sie nicht zusammen in der Quellordnung gruppiert sind, beginnt der Fokus auf die erste der Gruppe, wenn einer geprüft ist, und alle nicht geprüften Radioknöpfe in der Gruppe werden übersprungen. Mit anderen Worten, wenn eine geprüft ist, überspringt das Tabben die nicht geprüften Radioknöpfe in der Gruppe. Wenn keiner geprüft ist, erhält die Radioknopfgruppe den Fokus, wenn der erste Radioknopf in der gleichen Namensgruppe erreicht wird.

    Sobald ein Radioknopf in einer Gruppe den Fokus hat, ermöglicht die Nutzung der Pfeiltasten das Navigieren durch alle Radioknöpfe mit demselben Namen, auch wenn die Radioknöpfe nicht zusammen in der Quellordnung gruppiert sind.

    Wenn ein Eingabeelement einen `name` gegeben wird, wird dieser Name zu einer Eigenschaft des appearnden Formularelements [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) Eigenschaft. Wenn Sie eine Eingabe mit einem `name` auf `guest` und eine andere mit einem `name` auf `hat-size` haben, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Nachdem dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest` Feld sein, und `hatSize` das Objekt für das `hat-size` Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer integrierten Eigenschaft des Formulars entspricht, da Sie dadurch die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern` Attribut verwendet, um ein reguläres Ausdruck zu erstellen, dem die Eingabe-`value` entsprechen muss, um die [constraint validation](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Keine Schrägstriche sollten um den Mustertext spezifiziert werden. Beim Erstellen des regulären Ausdrucks:

    1. das Muster wird implizit mit `^(?:` und `)$` umgeben, sodass ein Abgleich gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. das `'v'` Flag ist angegeben, sodass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern` Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und das Attribut vollständig ignoriert. Wenn das Muster Attribut gültig ist und ein nicht leerer Wert nicht zum Muster passt, wird die Constraint-Validierung das Formular nicht einreichen. Wenn [`multiple`](/de/docs/Web/HTML/Attributes/multiple) vorhanden ist, wird der erstellte reguläre Ausdruck gegen jeden durch Kommas getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern` Attribut verwenden, informieren Sie die Benutzer im Voraus über das erwartete Format, indem Sie erläuternden Text in der Nähe hinzufügen. Sie können auch ein [`title`](#title) Attribut hinzufügen, um zu erklären, welche Anforderungen bestehen, um dem Muster zu entsprechen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Zugänglichkeit erforderlich. Der Tooltip ist eine Verbesserung.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, liefert das `placeholder` Attribut einen kurzen Hinweis auf die erwarteten Informationen im Feld. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf den erwarteten Datentyp gibt, anstelle einer Erklärung oder eines Eingabeaufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenvorschübe enthalten. Wenn zum Beispiel erwartet wird, dass ein Feld den Vornamen eines Benutzers erfasst, und sein Label "Vorname" ist, könnte ein passender Platzhalter "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder` Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, ein Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Etiketten](#labels).

- `popovertarget`

  - : Verwandelt ein `<input type="button">` Element in eine Popover-Steuerungstaste; setzt die ID des Popover-Elements, das gesteuert werden soll, als dessen Wert. Weitere Einzelheiten finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API) Hauptseite.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf einem von einer Steuerung `<input type="button">` gesteuerten Popover-Element ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Der Button verbirgt ein sichtbares Popover. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button zeigt ein verborgenes Popover an. Wenn Sie versuchen, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button schaltet ein Popover zwischen sichtbar und verborgen um. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuertaste durchgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolean-Attribut, das angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten kann. Das `readonly` Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` Eingabetypen unterstützt.

    siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly) für weitere Informationen.

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das angibt, dass der Benutzer einen Wert für die Eingabe festlegen muss, bevor das Eigentümerformular gesendet werden kann. Das `required` Attribut wird von `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` Eingaben unterstützt.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) und das [HTML Attribut: `required`](/de/docs/Web/HTML/Attributes/required) für weitere Informationen.

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url` und `text`, legt das `size` Attribut fest, wie viel der Eingabe angezeigt wird. Grundsätzlich wird das gleiche Ergebnis wie bei Setzen der CSS [`width`](/de/docs/Web/CSS/width) Eigenschaft mit wenigen Besonderheiten erzielt. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist sie eine Anzahl von Zeichen (oder `em` Einheiten) mit einem Standardwert von `20`, und für andere ist sie Pixel (oder `px` Einheiten). CSS `width` hat Vorrang vor dem `size` Attribut.

- `src`

  - : Gültig für die `image` Eingabeschaltfläche nur, ist `src` eine Zeichenfolge, die die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Submit-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut ist eine Zahl, die die Granularität angibt, zu der der Wert passen muss.

    Wenn nicht explizit einbezogen:

    - `step` standardisiert auf `1` für `number` und `range`.
    - Jeder Datum/Uhrzeit Eingabetyp hat einen Standard-`step` Wert, der für den Typ geeignet ist; siehe die individuellen Eingabeseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step) und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl sein—Ganzzahl oder Kommazahl—oder der spezielle Wert `any`, was bedeutet, dass kein Stufenmaß impliziert ist und jeder Wert erlaubt ist (außer andere Einschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, Datum/Uhrzeit Eingabetypen und `range` Eingabetypen gleich dem Basiswert für das Abstimmen — dem [`min`](#min) Wert und Inkrementen des `step` Wertes, bis zum [`max`](#max) Wert, wenn angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jeder ganzzahlige Wert von 10 oder größer gültig. Wenn weggelassen, `<input type="number">`, ist jeder ganzzahlige Wert gültig, aber Gleitkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig `1` ist. Damit `4.2` gültig ist, müsste `step` auf `any`, 0.1, 0.2 gesetzt worden sein, oder irgendein anderer `min` Wert hätte eine Zahl mit `.2` am Ende sein müssen, wie `<input type="number" min="-5.2">`

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht den Stufeneinstellungen entsprechen, wird der Wert bei der Constraint-Validierung als ungültig angesehen und entspricht der `:invalid` Pseudoklasse.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- `tabindex`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element den Fokuseingaben erhalten kann (fokusierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen außer Input vom Typ `hidden` fokussierbar sind, sollte dieses Attribut nicht auf Formularelementen verwendet werden, da dies die Verwaltung der Fokusreihenfolge für alle Elemente im Dokument erfordern würde, mit dem Risiko, die Benutzerfreundlichkeit und Barrierefreiheit bei falschem Gebrauch zu beeinträchtigen.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, Enthält einen Text, der beratende Informationen über das zugehörige Element darstellt. Diese Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip angezeigt werden. Der Titel sollte NICHT als die primäre Erklärung für den Zweck der Formularsteuerung verwendet werden. Stattdessen verwenden Sie das {{htmlelement('label')}} Element mit einem `for` Attribut, das auf das [`id`](#id) Attribut der Formularsteuerung gesetzt ist. Siehe [Etiketten](#labels) unten.

- `type`

  - : Eine Zeichenfolge, die den Typ der Steuerung angibt, die zu rendern ist. Um beispielsweise eine Checkbox zu erstellen, wird ein Wert `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben ist), wird der Eingabetyp `text` verwendet, welcher ein Klartext-Eingabefeld erzeugt.

    Zulässige Werte sind in [Input Typen](#input_types) oben aufgelistet.

- `value`

  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, entspricht dies dem Anfangswert, und danach kann er jederzeit durch Zugriff auf das jeweilige [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt und dessen `value` Eigenschaft verändert oder abgerufen werden. Das `value` Attribut ist immer optional, sollte jedoch für `checkbox`, `radio` und `hidden` als obligatorisch angesehen werden.

- `width`

  - : Gültig für die `image` Eingabeschaltfläche nur, die `width` ist die Breite der Bilddatei, die angezeigt werden soll, um den grafischen Submit-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardmäßige Attribute

Die folgenden nicht-standardmäßigen Attribute sind auch in einigen Browsern verfügbar. Grundsätzlich sollten Sie vermeiden, sie zu verwenden, es sei denn, es gibt keine Alternative.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse gesendet werden sollen, um die Aktualisierung der Live-Suchergebnisse zu ermöglichen, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenfolge, die den Typ der Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste drückt, während das Feld bearbeitet wird; dies wird verwendet, um ein geeignetes Label für diese Taste auf einer
        virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
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
        Die maximale Anzahl von Elementen, die in der Dropdown-Liste der vorherigen Suchanfragen angezeigt werden sollten. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob der Benutzer nur Verzeichnisse (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> auch vorhanden ist) auswählen kann.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome, etc.), welche, falls vorhanden, den {{Glossary("user_agent", "user agent")}} anweist, die Eingabe als Live-Suche zu behandeln. Wenn der Benutzer den Wert des Feldes bearbeitet, sendet der User Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das die Suchbox darstellt. Dies ermöglicht es Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht spezifiziert ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis nur gesendet, wenn der Benutzer eine Suche explizit einleitet (zum Beispiel durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste bei der Bearbeitung des Feldes).

    Das `search` Ereignis ist ratelimited, sodass es nicht häufiger als in einem vom Implementierer festgelegten Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich dem -moz-orient Nicht-Standard-CSS-Eigenschaft, das die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente betrifft, definiert das `orient` Attribut die Ausrichtung des Bereichsschiebers. Einschließlich `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertikal`, wo der Bereich vertikal gerendert wird. Siehe [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz, vertikale Formularelemente zu erstellen.

- `results` {{non-standard_inline}}

  - : Das `results` Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der es Ihnen ermöglicht, die maximalen Anzahl der Einträge zu überschreiben, die im nativ bereitgestellten Dropdown-Menü des `<input>` Elements von vorherigen Suchanfragen angezeigt werden.

    Der Wert muss eine nichtnegative Dezimalzahl sein. Wird kein Wert angegeben oder ein ungültiger Wert übergeben, wird die standardmäßig festgelegte maximale Anzahl an Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass nur Verzeichnisse zum Auswählen im Dateiauswahlfeld des Benutzers verfügbar sein sollen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später nutzbar. Trotz seiner relativ breiten Unterstützung ist es jedoch immer noch nicht standardisiert und sollte nur verwendet werden, wenn Sie keine Alternative haben.

## Methoden

Die folgenden Methoden werden durch die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle bereitgestellt, die `<input>` Elemente im DOM darstellt. Ebenso verfügbar sind jene Methoden, die von den Elternschnittstellen, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget), spezifiziert sind.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben und ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis an das Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben, ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis an das Element ausgelöst und (wenn das Ereignis nicht abgebrochen wird) dem Benutzer das Problem gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>` Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder Kalenderdateneingabe) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Bereichs an Zeichen im Eingabeelement auf eine gegebene Zeichenkette. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Markiert den angegebenen Bereich an Zeichen innerhalb eines textlichen Eingabeelements. Funktioniert nicht für Eingaben, die nicht als Texteingabefelder präsentiert werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den browserbasierten Picker für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt ist, aber durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Vermindert den Wert eines numerischen Eingabefelds um eins, standardmäßig, oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert eines numerischen Eingabefelds um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Merkmale, die für Nicht-Formular-Elemente nicht anwendbar sind. Es gibt CSS-Selektoren, die gezielt auf Formularelemente basieren auf ihren UI-Funktionen abzielen können, auch bekannt als UI-Pseudoklassen. Das Input-Element kann auch nach Typ mit Attributselektoren angezielt werden. Es gibt einige Eigenschaften, die ebenfalls besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudoklassen, relevant für das
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
        Jedes aktuell aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, eingetippt usw.) oder den Fokus akzeptieren kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert werden kann oder Fokus akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes aktuell deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es andernfalls aktiviert (ausgewählt, angeklickt, eingetippt usw.) werden könnte oder den Fokus akzeptieren könnte, wenn es nicht deaktiviert wäre.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element nicht vom Benutzer editierbar</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer editierbar ist.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code> Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elemente mit dem <a href="#placeholder"><code>placeholder</code> Attribut, das bisher keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die Standard in einer Gruppe von verwandten Elementen sind. Passt zu den {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Input-Typen, die beim Laden oder Rendern der Seite ausgewählt wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Input-Typen, die derzeit ausgewählt sind (und der ({{HTMLElement("option")}} in einem {{HTMLElement("select")}}, der derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente deren indeterminate Eigenschaft durch JavaScript auf true gesetzt ist, {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle Radiobuttons mit dem gleichen Namenswert im Formular nicht ausgewählt sind, und {{HTMLElement("progress")}} Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die Einschränkungsvalidierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularsteuerelemente, auf die Einschränkungsvalidierung angewendet wird und die derzeit ungültig sind. Passt zu einem Formularsteuerelement, dessen Wert nicht mit den durch seine Attribute festgelegten Einschränkungen übereinstimmt, wie z.B. <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht leeres Eingabefeld, dessen aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute und den <a href="#step"><code>step</code> spezifizierten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht leeres Eingabefeld, dessen aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute spezifizierten Bereichsgrenzen liegt oder das die <a href="#step"><code>step</code></a> Einschränkung nicht einhält.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut gesetzt hat. Passt nur zu Elementen, die erforderlich sein können. Das Attribut auf einem nicht erforderlichen Element führt zu keinem Treffer.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut NICHT gesetzt hat. Passt nicht zu Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, aber es wird bei Unschärfe aktiviert. Passt zu ungültiger Eingabe, aber nur nach Benutzerinteraktion, z.B. durch Fokussieren auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular mit dem ungültigen Steuerelement zu senden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code> Elemente, die einen Auswahldialog anzeigen, aus dem der Benutzer einen Wert auswählen kann (zum Beispiel <a href="/de/docs/Web/HTML/Element/input/color"><code>&lt;input type="color"&gt;</code></a>) — aber nur, wenn das Element im offenen Zustand ist, d.h. wenn der Auswahldialog angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können eine Checkbox-Beschriftung basierend darauf, ob die Checkbox ausgewählt ist oder nicht, stylen. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das direkt nach einem ausgewählten Input kommt. Wir haben keine Stile angewendet, wenn das `input` nicht ausgewählt ist.

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

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) zu zielen. CSS-Attributselektoren passen Elemente entweder basierend nur auf der Anwesenheit eines Attributs oder auf dem Wert eines bestimmten Attributs.

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

Standardmäßig ist die Darstellung des Platzhaltertextes durchscheinend oder hellgrau. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder` Text](#placeholder) des Inputs. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestaltet werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Unterbereich von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement angewendet werden, kann in einer Regel verwendet werden, die `::placeholder` in seinem Selektor verwendet.

### appearance

Die Eigenschaft {{cssxref("appearance")}} ermöglicht das Anzeigen von (fast) jedem Element als plattformnatives Design basierend auf dem Theme des Betriebssystems sowie das Entfernen eines plattformnativen Stylings mit dem Wert `none`.

Sie könnten ein `<div>` wie einen Radiobutton aussehen lassen mit `div {appearance: radio;}` oder ein Radio wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}`, aber tun Sie es nicht.

Das Setzen von `appearance: none` entfernt plattformnative Ränder, jedoch nicht die Funktionalität.

### caret-color

Eine spezifische Eigenschaft für texteingabebezogene Elemente ist die CSS-Eigenschaft {{cssxref("caret-color")}}, mit der Sie die Farbe einstellen können, die zum Zeichnen des Text-Eingabe-Carets verwendet wird:

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

Die Eigenschaft {{cssxref("field-sizing")}} ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. ihnen wird standardmäßig eine bevorzugte Größe gegeben). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, sodass Formularelemente ihre Größe anpassen können, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt einwickeln und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingaben akzeptieren (z.B. [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Element/input/file), und {{htmlelement("textarea")}} Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element). Wenn es so ist, können die Position und die Größe des Elements innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen über das Hinzufügen von Farbe zu Elementen in HTML, siehe:

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Zusätzliche Funktionen

### Labels

Labels sind notwendig, um unterstützenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}} Element liefert erklärende Informationen über ein Formularfeld, das immer relevant ist (abgesehen von jeglichen Layout-Bedenken, die Sie haben). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden sollte.

#### Zugeordnete Labels

Die semantische Paarung von `<input>` und `<label>` Elementen ist nützlich für unterstützende Technologien wie Screenreader. Indem sie mit dem [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut des `<label>`-Elements miteinander verbunden werden, koppeln Sie das Label mit dem Input auf eine Weise, die es Screenreadern ermöglicht, Eingaben den Benutzern präziser zu beschreiben.

Es reicht nicht aus, nur Text neben dem `<input>`-Element zu haben. Vielmehr erfordert die Benutzerfreundlichkeit und Barrierefreiheit die Einbeziehung entweder impliziter oder expliziter {{HTMLElement("label")}}:

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

Das erste Beispiel ist unzugänglich: Es besteht keine Beziehung zwischen dem Prompt und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen liefert das Label eine größere "Treffer"-Fläche für Maus- und Touchscreen-Benutzer zum Klicken oder Berühren. Indem Sie ein `<label>` mit einem `<input>` koppeln, fokussiert das Klicken auf eines der beiden das `<input>`. Wenn Sie normalen Text verwenden, um Ihre Eingabe zu "labeln", wird dies nicht passieren. Den Prompt als Teil des Aktivierungsbereichs für die Eingabe zu haben, ist hilfreich für Menschen mit motorischen Steuerungsbedingungen.

Als Webentwickler ist es wichtig, dass wir nie annehmen, dass Menschen alle Dinge wissen werden, die wir wissen. Die Diversität der Menschen, die das Web nutzen – und damit auch Ihre Website – garantiert praktisch, dass einige der Besucher Ihrer Website einige Variationen in Denkprozessen und/oder Umständen haben werden, die sie dazu bringen, Ihre Formulare sehr unterschiedlich zu interpretieren, ohne klare und richtig präsentierte Labels.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder) Attribut lässt Sie Text angeben, der innerhalb des Inhaltsbereichs des `<input>`-Elements selbst erscheint, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, weil es das nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Nicht nur ist der Platzhalter nicht für Screenreader zugänglich, sondern sobald der Benutzer Text in das Formularsteuerelement eingibt, oder wenn das Formularsteuerelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitenübersetzungsfunktionen können Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder) Attribut nur, wenn es unbedingt erforderlich ist. Wenn Sie ein `<input>`-Element labeln müssen, verwenden Sie das {{HTMLElement("label")}} Element.

### Client-seitige Validierung

> [!WARNING]
> Die Client-seitige Validierung ist nützlich, garantiert jedoch nicht, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, überprüfen Sie sie _immer_ auch serverseitig und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS zum Stylen von Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Zustand jeder Eingabe, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, stellt der Browser eine clientseitige Validierung beim (versuchten) Absenden des Formulars bereit. Beim Absenden eines Formulars zeigt, wenn ein Formularsteuerelement die Einschränkungsvalidierung nicht besteht, ein unterstützender Browser eine Fehlermeldung auf dem ersten ungültigen Formularsteuerelement an; es wird eine Standardnachricht basierend auf der Art des Fehlers angezeigt oder eine von Ihnen gesetzte Nachricht.

Einige Eingabetypen und andere Attribute beschränken, welche Werte für eine gegebene Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Verschiedene Fehler können auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow` bei einem Wert größer als 10, `stepMismatch` wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade ganze Zahl (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch` wenn der Wert keine Zahl ist.

Bei den Eingabetypen, deren Bereich möglicher Werte periodisch ist (d.h. beim höchsten möglichen Wert umschalten die Werte zurück zum Anfang, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min) Eigenschaften umgekehrt werden, was darauf hinweist, dass der Bereich der erlaubten Werte bei `min` beginnt, zum niedrigsten möglichen Wert umschlägt und dann fortfährt, bis `max` erreicht ist. Dies ist besonders nützlich für Datums- und Uhrzeitangaben, wie wenn Sie den Bereich von 20:00 Uhr bis 8:00 Uhr zulassen möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und deren Werte können zu einem bestimmten Fehler führen [`ValidityState`](/de/docs/Web/API/ValidityState):

<table class="no-markdown">
  <caption>
    Gültigkeitsobjektfehler hängen von den <code>&lt;input&gt;</code> Attributen und deren Werten ab:
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
        Tritt auf, wenn der Wert größer ist als der Maximalwert, der durch das <code>max</code> Attribut definiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code> Eigenschaft erlaubte Zahl.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der Minimalwert, der durch das <code>min</code> Attribut definiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code> Eigenschaft erforderte Zahl.
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Musterattribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht mit diesem übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code> Attribut vorhanden ist, aber der Wert <code>null</code> oder ein Radiobutton oder Kontrollkästchen nicht ausgewählt ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Standardinkrement ist <code>1</code>, so dass nur ganze Zahlen auf <code>type="number"</code> gültig sind, wenn kein Schritt enthalten ist. <code>step="any"</code> wird diesen Fehler nie auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, zum Beispiel, wenn eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularsteuerelement nicht das `required` Attribut hat, ist kein Wert oder ein leerer String nicht ungültig. Selbst wenn die obigen Attribute vorhanden sind, führt ein leerer String nicht zu einem Fehler.

Wir können Begrenzungen für akzeptierte Werte festlegen, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer warnen, wenn beim Absenden des Formulars ein Fehler vorliegt.

Zusätzlich zu den in der Tabelle oben beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen Read-only-Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund, warum die Validierung möglicherweise fehlgeschlagen ist, zutrifft, mit Ausnahme der `valid` Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen einhält.

Wenn ein Fehler auftritt, werden unterstützende Browser sowohl den Benutzer warnen als auch das Absenden des Formulars verhindern. Ein Wort der Vorsicht: Wenn eine benutzerdefinierte Fehlermeldung auf einen wahren Wert festgelegt wird (alles andere als der leere String oder `null`), wird das Formular daran gehindert, eingereicht zu werden. Wenn es keine benutzerdefinierte Fehlermeldung gibt und keine der anderen Eigenschaften wahr ist, wird `valid` wahr sein und das Formular kann eingereicht werden.

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

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandten) Elementen verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formular-Validierungsfunktionen führen dazu, dass eine Standardfehlermeldung ausgegeben wird, wenn Sie versuchen, das Formular ohne gültige Eintragung einzureichen oder mit einem Wert, der nicht dem `pattern` entspricht.

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

Das Beispiel wird so wiedergegeben:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüften den gültigen Zustand des Eingabeelements jedes Mal, wenn sein Wert durch Ausführen der `checkValidity()`-Methode über den `input`-Event-Handler geändert wird.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst, und die `invalid`-Ereignis-Handlerfunktion wird ausgeführt. In dieser Funktion arbeiten wir heraus, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, durch ein `if ()`-Block, und setzen eine benutzerdefinierte Fehlermeldung.
- Infolgedessen wird, wenn der Eingabewert ungültig ist, wenn der Absenden-Button gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er wie erwartet gesendet. Dafür muss die benutzerdefinierte Validität durch das Aufrufen von `setCustomValidity()` mit einem leeren Stringwert abgebrochen werden. Deshalb tun wir dies jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Validität zuvor gesetzt wurde, wird die Eingabe als ungültig eingestuft, auch wenn sie derzeit einen gültigen Wert bei der Abgabe enthält.

> [!NOTE]
> Validieren Sie immer die Eingabeeinschränkungen sowohl auf der Client- als auch auf der Serverseite. Einschränkungsvalidierung beseitigt nicht die Notwendigkeit einer Validierung auf der _Server-Seite_. Ungültige Werte können immer noch von älteren Browsern oder durch böswillige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte ein proprietäres Fehlerattribut — `x-moz-errormessage` — für viele Versionen, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise zu setzen. Dies wurde ab Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der Region ab. In einigen Regionen ist 1.000,00 eine gültige Zahl, während in anderen Regionen die gültige Art, diese Zahl einzugeben, 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Region zur Validierung der Benutzereingabe zu bestimmen (mindestens für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut auf dem Element oder einem seiner Elternteile angegeben ist.
- Versuchen Sie die Sprache, die durch einen `Content-Language` HTTP-Header angegeben ist. Oder,
- Wenn keine angegeben wird, verwenden Sie die Region des Browsers.

## Barrierefreiheit

### Labels

Beim Einfügen von Eingaben ist es eine Barrierefreiheit einenbe Notwendigkeit Label hinzuzufügen. Dies ist nötig, damit diejenigen, die unterstützende Technologien nutzen, erkennen können, wofür die Eingabe ist. Außerdem gibt das Klicken oder Berühren eines Labels dem zugehörigen Formularsteuerelement Fokus. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erhöht den Bereich, den ein Benutzer klicken oder berühren kann, um das Formularsteuerelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radiobuttons und Kontrollkästchen, die sehr klein sind. Für weitere Informationen über Labels im Allgemeinen, siehe [Labels](#labels).

Das folgende Beispiel zeigt, wie das `<label>` mit einem `<input>`-Element im oben genannten Stil verbunden wird. Sie müssen dem `<input>` eine `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert derselbe ist wie die `id` des Inputs.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingabe sollten einen ausreichend großen Bereich bieten, damit sie leicht aktiviert werden können. Dies hilft einer Vielzahl von Personen, einschließlich Menschen mit motorischen Steuerungsproblemen und Menschen, die ungenaue Eingabearten verwenden wie einen Stift oder Finger. Eine Mindest-Interaktivgröße von 44×44 [CSS-Pixel] ist empfohlen.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, gelistet, übermittlungsfähig, zurücksetzbar, mit Formular verbundenes Element,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann benennbares Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
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
      <th scope="row">Implizierte ARIA-Rolle</th>
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a> wenn verwendet mit <code>aria-pressed</code>,
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
            oder <code>text</code> mit <code>list</code> Attribut: keine <code>role</code> erlaubt
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

- [Validierung von Formulareinschränkungen](/de/docs/Web/HTML/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [So strukturieren Sie ein HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [So bauen Sie benutzerdefinierte Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in alten Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
