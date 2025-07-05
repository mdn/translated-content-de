---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{HTMLSidebar}}

Das **`<input>`**-Element [HTML](/de/docs/Web/HTML) wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; Eine Vielzahl von Eingabedatenarten und Steuerelementen sind verfügbar, abhängig vom Gerät und dem {{Glossary("user_agent", "User-Agent")}}. Das `<input>`-Element ist eines der leistungsfähigsten und komplexesten in HTML aufgrund der Vielzahl an Kombinationen von Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich, je nach Wert seines [`type`](#type)-Attributs. Daher werden die verschiedenen Typen auf ihren eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird standardmäßig der Typ `text` angenommen.

Die verfügbaren Typen sind wie folgt:

<table class="no-markdown">
  <colgroup>
    <col />
    <col style="width: 50%" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>Type</th>
      <th>Beschreibung</th>
      <th>Einfache Beispiele</th>
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
      <td>Ein Kontrollkästchen, das es ermöglicht, einzelne Werte auszuwählen oder abzuwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerelement zur Angabe einer Farbe; öffnet einen Farbwähler, wenn es in unterstützenden Browsern aktiv ist.
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
        Öffnet einen Datumsauswahl oder numerische Räder für Jahr, Monat, Tag, wenn es in unterstützenden Browsern aktiv ist.
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
        Ein Steuerelement zum Eingeben eines Datums und einer Zeit, ohne Zeitzone. Öffnet einen Datumsauswahl oder numerische Räder für Datum- und Zeitkomponenten, wenn es in unterstützenden Browsern aktiv ist.
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
        Ein Feld zur Bearbeitung einer E-Mail-Adresse. Sieht aus wie ein <code>text</code>-Eingabefeld, verfügt jedoch über Validierungsparameter und ein passendes Keyboard in unterstützenden Browsern und Geräten mit dynamischen Keyboards.
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
        Ein Steuerelement, das es dem Benutzer ermöglicht, eine Datei auszuwählen.
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
        Ein Steuerelement, das nicht angezeigt wird, aber dessen Wert an den Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist verborgen!
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
        Ein graphischer <code>submit</code>-Button. Zeigt ein durch das <code>src</code>-Attribut definiertes Bild an.
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
      <td>Ein Steuerelement zur Eingabe eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerelement zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt eine Standardvalidierung hinzu. Zeigt eine numerische Tastatur in einigen Geräten mit dynamischen Tastaturen an.
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
        Ein einzeiliges Textfeld, dessen Wert verschleiert ist.
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
        Ein Optionsknopf, der es ermöglicht, einen einzelnen Wert aus mehreren Optionen mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Ein Steuerelement zur Eingabe einer Zahl, deren exakter Wert nicht wichtig ist.
        Wird als Bereichs-Widget dargestellt, standardmäßig mit dem mittleren Wert.
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
        Ein Button, der die Inhalte des Formulars auf Standardwerte zurücksetzt. Nicht empfohlen.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann ein Löschsymbol in unterstützenden Browsern enthalten, das zum Löschen des Feldes verwendet werden kann. Zeigt ein Suchsymbol anstelle der Enter-Taste auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Steuerelement zur Eingabe einer Telefonnummer. Zeigt eine Telefontastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
      <td>Ein Steuerelement zur Eingabe eines Zeitwertes ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabefeld, hat jedoch Validierungsparameter und ein passendes Keyboard in unterstützenden Browsern und Geräten mit dynamischen Keyboards.
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
        Ein Steuerelement zur Eingabe eines Datums bestehend aus einer Wochennummer und einer Jahreszahl ohne Zeitzone.
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
        Ein Steuerelement zur Eingabe eines Datums und einer Zeit (Stunde, Minute, Sekunde und Bruchteile von Sekunden) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so leistungsfähig wegen seiner Attribute; das [`type`](#type)-Attribut, oben mit Beispielen beschrieben, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie sich technisch denselben Satz von Attributen. In der Realität wirken sich jedoch die meisten Attribute nur auf eine bestimmte Untermenge von Eingabetypen aus. Darüber hinaus hängt die Art und Weise, wie einige Attribute eine Eingabe beeinflussen, vom Eingabetyp ab und beeinflusst unterschiedliche Eingabetypen auf unterschiedliche Weise.

Dieser Abschnitt bietet eine Tabelle mit einer Liste von Attributen und einer kurzen Beschreibung. Auf diese Tabelle folgt eine Liste, die jedes Attribut im Detail beschreibt, zusammen mit den Eingabetypen, mit denen es verbunden ist. Diejenigen, die für die meisten oder alle Eingabetypen gemeinsam sind, werden im Folgenden ausführlicher definiert. Attribute, die für bestimmte Eingabetypen einzigartig sind – oder Attribute, die für alle Eingabetypen gemeinsam sind, aber ein spezielles Verhalten haben, wenn sie bei einem bestimmten Eingabetyp verwendet werden – sind stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                                        |
| --------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis auf erwarteten Dateityp in Datei-Upload-Steuerelementen                                     |
| [`alt`](#alt)                                 | `image`                                                                | alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                     |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                               | Steuert die automatische Großschreibung bei eingegebenem Text.                                      |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Buttons                             | Hinweis für Formular-Autovervollständigungsfunktion                                                 |
| [`capture`](#capture)                         | `file`                                                                 | Methode der Medienaufnahme in Datei-Upload-Steuerelementen                                          |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Ob der Befehl oder das Steuerelement aktiviert ist                                                  |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfeldes zur Verwendung beim Senden der Elementrichtung bei der Formularübermittlung |
| [`disabled`](#disabled)                       | alle                                                                   | Ob das Formular-Steuerelement deaktiviert ist                                                       |
| [`form`](#form)                               | alle                                                                   | Verknüpft das Steuerelement mit einem Formularelement                                               |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL für die Formularübermittlung zu verwenden                                                       |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Formular-Datensatz-Codierungsart zur Verwendung bei der Formularübermittlung                        |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | HTTP-Methode zur Verwendung bei der Formularübermittlung                                            |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Überspringt die Formularsteuerungsvalidierung für die Formularübermittlung                          |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browsing-Kontext für die Formularübermittlung                                                       |
| [`height`](#height)                           | `image`                                                                | Gleich wie das height-Attribut für {{htmlelement('img')}}; vertikale Dimension                      |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Buttons       | Wert des id-Attributs der {{htmlelement('datalist')}} mit Autovervollständigungsoptionen            |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Höchstwert                                                                                          |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Länge (Anzahl der Zeichen) von `value`                                                     |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Minimalwert                                                                                         |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Länge (Anzahl der Zeichen) von `value`                                                     |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolean. Ob es erlaubt ist, mehrere Werte zuzulassen                                                |
| [`name`](#name)                               | alle                                                                   | Name des Formularsteuerelements. Wird mit dem Formular als Teil eines name/value-Paares übermittelt |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, das der `value` erfüllen muss, um gültig zu sein                                            |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der im Formularsteuerelement angezeigt wird, wenn es keinen Wert hat                          |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Bezeichnet ein `<input type="button">` als Steuerungselement für ein Popover-Element                |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt die Aktion an, die ein Popover-Steuerungselement ausführen soll                                |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolean. Der Wert kann nicht bearbeitet werden                                                      |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss überprüft werden, damit das Formular übermittelbar ist |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe des Steuerelements                                                                            |
| [`src`](#src)                                 | `image`                                                                | Gleich wie das `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                 |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Inkrementelle Werte, die gültig sind                                                                |
| [`type`](#type)                               | alle                                                                   | Typ des Formularsteuerelements                                                                      |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert des Steuerelements. Bei Angabe im HTML entspricht er dem Anfangswert                       |
| [`width`](#width)                             | `image`                                                                | Gleich wie das `width`-Attribut für {{htmlelement('img')}}                                          |

Einige zusätzliche nicht-standardmäßige Attribute werden nach den Beschreibungen der standardmäßigen Attribute aufgelistet.

### Einzelattribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Gültig nur für den `file`-Eingabetyp, definiert das `accept`-Attribut, welche Dateitypen in einem `file`-Upload-Steuerelement ausgewählt werden können. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alt`
  - : Gültig nur für den `image`-Button, bietet das `alt`-Attribut alternativen Text für das Bild und zeigt den Wert des Attributs an, wenn das Bild[`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Weitere Informationen finden Sie auf der Seite des globalen Attributs [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette, die beschreibt, welcher Art von Autovervollständigungsfunktionalität die Eingabe bereitstellen soll, wenn überhaupt. Eine typische Implementierung der Autovervollständigung erinnert sich an zuvor eingegebene Werte im selben Eingabefeld, aber komplexere Formen der Autovervollständigung können existieren. Zum Beispiel könnte ein Browser mit der Kontaktliste eines Geräts integriert werden, um `email`-Adressen in einem E-Mail-Eingabefeld zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für erlaubte Werte.

    Das `autocomplete`-Attribut ist auf `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password` gültig. Dieses Attribut hat keine Auswirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen außer `checkbox`, `radio`, `file` oder einer der Button-Typen gültig.

    Weitere Informationen, einschließlich Informationen zu Passwortsicherheit und wie `autocomplete` bei `hidden` leicht anders als bei anderen Eingabetypen ist, finden Sie unter [`autocomplete` attribute](/de/docs/Web/HTML/Reference/Attributes/autocomplete).

- `autofocus`
  - : Ein Boolean-Attribut, welches, falls vorhanden, angibt, dass das Eingabefeld automatisch den Fokus erhalten soll, nachdem die Seite geladen wurde (oder wenn das {{HTMLElement("dialog")}}-Element angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element platziert ist, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren eines Formularsteuerelements kann visuell eingeschränkte Menschen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihren Benutzer ohne vorherige Warnung zu dem Formularsteuerelement.

    Verwenden Sie das `autofocus`-Attribut unter Berücksichtigung der Barrierefreiheit. Automatisches Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dynamische Tastaturen auf einigen Touch-Geräten anzeigen. Während ein Bildschirmlesegerät das Label des Formularsteuerelements mit Fokus ankündigen wird, wird es vor dem Label nichts ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird genauso den Kontext durch den vorhergehenden Inhalt verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und nur für den `file`-Eingabetyp gültig, definiert das `capture`-Attribut, welches Medium—Mikrofon, Video oder Kamera—verwendet werden soll, um eine neue Datei für den Upload mit `file`-Upload-Steuerelement in unterstützenden Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`
  - : Gültig für sowohl `radio`- als auch `checkbox`-Typen, ist `checked` ein Boolean-Attribut. Falls bei einem `radio`-Typ vorhanden, gibt es an, dass der Optionsknopf der aktuell ausgewählte in der Gruppe von gleichnamigen Radio-Buttons ist. Falls bei einem `checkbox`-Typ vorhanden, gibt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite lädt). Es gibt _nicht_ an, ob dieses Kontrollkästchen aktuell aktiviert ist: wenn der Zustand des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Anders als andere Eingabesteuerungen, werden ein Kontrollkästchen und Radio-Buttons-Werte nur in die übermittelten Daten einbezogen, wenn sie derzeit `checked` sind. Wenn sie es sind, werden der Name und die Wert(e) der aktivierten Steuerelemente übermittelt.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, werden die übermittelten Formulardaten `fruit=cherry` beinhalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgeführt. Der Standardwert `value` für Kontrollkästchen und Radio-Buttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email`-Eingabetypen, ermöglicht das `dirname`-Attribut die Übermittlung der Richtungsangabe des Elements. Wenn es enthalten ist, wird das Formularsteuerelement mit zwei Name/Wert-Paaren übermittelt: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl` wie vom Browser festgelegt.

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

    Wenn das obenstehende Formular übermittelt wird, wird die Eingabe sowohl das `name` / `value`-Paar `fruit=cherry` als auch das `dirname` / Richtungs-Paar `fruit-dir=ltr` senden.
    Für weitere Informationen siehe das [`dirname` attribute](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer nicht mit der Eingabe interagieren können soll. Deaktivierte Eingaben werden typischerweise mit einer dunkleren Farbe oder in irgendeiner anderen Form angezeigt, die anzeigt, dass das Feld nicht zur Benutzung verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Auch wenn es nicht von der Spezifikation gefordert wird, wird Firefox standardmäßig den [dynamischen deaktivierten Status speichern](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladungen. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- `form`
  - : Ein String, der das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (d.h. sein **Formularinhaber**). Der Wert dieses Strings, falls vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben wird, ist das `<input>`-Element mit dem am nächsten gelegenen beinhaltenden Formular verknüpft, falls vorhanden.

    Das `form`-Attribut ermöglicht es, eine Eingabe irgendwo im Dokument zu platzieren, aber sie mit einem Formular an einer anderen Stelle im Dokument einzuschließen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formenctype`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formmethod`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formnovalidate`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formtarget`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `height`
  - : Gültig nur für den `image`-Eingabe-Button, ist die `height` die Höhe der Bilddatei, die angezeigt werden soll, um den grafischen Senden-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Sein Zweck ist die Identifizierung des Elements bei Verlinkungen. Der Wert wird als Wert der `for`-Eigenschaft des {{htmlelement('label')}}-Elements verwendet, um das Label mit dem Formularsteuerelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, gibt Hinweis an Browser, welche Art von virtueller Keyboard-Konfiguration bei der Bearbeitung dieses Elements oder seines Inhalts zu verwenden ist. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der dem `list`-Attribut gegebene Wert sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. Die `<datalist>` bietet eine Liste von vordefinierten Werten an, die dem Benutzer als Vorschläge für diese Eingabe angeboten werden. Alle in der Liste enthaltenen Werte, die nicht mit dem [`type`](#type) kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert bereitstellen.

    Es ist gültig auf `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Gemäß den Spezifikationen wird das `list`-Attribut nicht von den Typen `hidden`, `password`, `checkbox`, `radio`, `file` oder irgendeinem der Button-Typen unterstützt.

    Abhängig vom Browser sieht der Benutzer möglicherweise eine benutzerdefinierte Farbpalette als Vorschlag, Taktmarken entlang eines Bereichs oder sogar eine Eingabe, die wie eine {{HTMLElement("select")}} öffnet, aber nicht gelistete Werte zulässt. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den größten Wert im Bereich der zulässigen Werte. Wenn der [`value`](#value), der in das Element eingegeben wird, diesen überschreitet, schlägt das Element bei der [Beschränkungsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Höchstwert.

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (zum Beispiel für Daten oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was anzeigt, dass der Bereich umlaufen darf; zum Beispiel ermöglicht dies, einen Zeitbereich von 22 Uhr bis 4 Uhr morgens festzulegen.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe wird bei der [Beschränkungsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des Textes, der in das Feld eingegeben wird, länger als die `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als das `maxlength`-Attribut erlaubt. Die Beschränkungsprüfung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Weitere Informationen finden Sie unter [Client-side validation](#client-seitige_validierung).

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den geringsten Wert im Bereich der zulässigen Werte. Wenn der [`value`](#value), der in das Element eingegeben wird, weniger als das ist, schlägt das Element bei der [Beschränkungsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der `min`-Attributwert keine Zahl ist, hat das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein Mindeswert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert niedriger ist als das Minimum, das durch `min` erlaubt ist, wird die Beschränkungsprüfung die Formularübermittlung verhindern. Weitere Informationen finden Sie unter [Client-side validation](#client-seitige_validierung).

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (zum Beispiel für Daten oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was anzeigt, dass der Bereich umlaufen darf; zum Beispiel ermöglicht dies, einen Zeitbereich von 22 Uhr bis 4 Uhr morgens festzulegen.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem Wert von `maxlength` ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe wird bei der [Beschränkungsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des Textes, der in das Feld eingegeben wird, kürzer als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} ist, wodurch die Formularübermittlung verhindert wird. Die Beschränkungsprüfung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Weitere Informationen finden Sie unter [Client-side validation](#client-seitige_validierung).

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das Boolean-Attribut `multiple`, falls gesetzt, bedeutet, dass der Benutzer Komma getrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit der `file`-Eingabe auswählen kann. Sehen Sie den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`
  - : Ein String, der einen Namen für das Eingabefeld angibt. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als ein erforderliches Attribut (auch wenn es nicht so ist). Wenn eine Eingabe kein angegebenes `name` hat oder das `name` leer ist, wird der Eingabewert nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, nicht aktivierte Radio-Buttons, nicht aktivierte Kontrollkästchen und Reset-Buttons werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_` : Wenn es als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der Eingabewert automatisch vom {{Glossary("user_agent", "User-Agent")}} auf die Zeichencodierung gesetzt, die zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erzeugt ein einzigartiges Verhalten für Radio-Buttons.

    Nur einer der Radio-Buttons in einer gleichnamigen Gruppe von Radio-Buttons kann gleichzeitig aktiviert werden. Das Auswählen eines der Radio-Buttons in dieser Gruppe deaktiviert automatisch alle aktuell ausgewählten Radio-Buttons in derselben Gruppe. Der Wert dieses einen aktivierten Radio-Buttons wird zusammen mit dem Namen übermittelt, wenn das Formular übermittelt wird.

    Beim Wechseln in eine Serie von gleichnamigen Radio-Button-Gruppen, wenn einer aktiviert ist, erhält dieser den Fokus. Wenn sie in der Quellreihenfolge nicht zusammen gruppiert sind, wenn einer der Gruppe aktiviert ist, beginnt das Wechseln in die Gruppe, wenn der erste in der Gruppe erreicht wird und überspringt alle, die nicht aktiviert sind. Mit anderen Worten, wenn einer aktiviert ist, wird das Wechseln die nicht aktivierten Radio-Buttons in der Gruppe überspringen. Wenn keiner aktiviert ist, erhält die Radio-Button-Gruppe den Fokus, wenn der erste Button in der gleichnamigen Gruppe erreicht ist.

    Sobald einer der Radio-Buttons in einer Gruppe den Fokus hat, navigieren die Pfeiltasten durch alle Radio-Buttons desselben Namens, selbst wenn die Radio-Buttons nicht in der Quellreihenfolge gruppiert sind.

    Wenn ein Eingabefeld ein `name` zugewiesen bekommt, wird dieser zu einer Eigenschaft der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft des Formular-Elements, dem es gehört. Wenn Sie eine Eingabe haben, deren `name` auf `guest` gesetzt ist und eine andere, deren `name` auf `hat-size` gesetzt ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Nachdem dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einem eingebauten Attribut des Formulars entspricht, da Sie dann das vordefinierte Attribut oder die Methode mit diesem Bezug auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um eine reguläre Ausdrücke zu erstellen, die [`value`](#value) der Eingabe erfüllen muss, um die [Beschränkungsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er von der {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Es sollten keine Schrägstriche um den Mustertext angegeben werden. Beim Kompilieren des regulären Ausdrucks:
    1. wird das Muster automatisch mit `^(?:` und `)$` umschlossen, sodass das Muster einen Match gegen den _ganzen_ Eingabewert erfordert, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag spezifiziert, sodass das Muster als Sequenz von Unicode-Kodepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird völlig ignoriert. Wenn das Muster-Attribut gültig ist und ein nicht leerer Wert nicht dem Muster entspricht, wird die Beschränkungsprüfung die Formularübermittlung verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden durch Komma getrennten Wert gematcht.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe einfügen. Sie können auch ein [`title`](#title)-Attribut einschließen, um zu erklären, was die Anforderungen sind, um dem Muster zu entsprechen; die meisten Browser werden diesen Titel als Tooltip anzeigen. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Weitere Informationen finden Sie unter [Client-side validation](#client-seitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis für den Benutzer, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Art der Daten bietet, anstatt eine Erklärung oder Eingabeaufforderung. Der Text _darf nicht_ Wagenrückläufe oder Zeilenvorschübe enthalten. Wenn zum Beispiel ein Feld erwartet, den Vornamen eines Benutzers zu erfassen, und sein Label "Vorname" ist, könnte ein geeignetes Platzhalter "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Labels](#labels).

- `popovertarget`
  - : Schaltet ein `<input type="button">`-Element in eine Popover-Steuerung um; nimmt die ID des Popover-Elements, das gesteuert werden soll, als Wert. Weitere Informationen finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API)-Startseite. Das Erstellen einer Beziehung zwischen einem Popover und ihrem Aufrufer-Button mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Aufrufer und platziert das Popover in einer logischen Position in der Tastaturnavigationsfolge, wenn es angezeigt wird. Das macht das Popover zugänglicher für Tastatur- und unterstützende Technologie-Benutzer (AT-Benutzer) (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr komfortabel macht, Popovers relativ zu ihren Steuerungen mit [CSS-Ankers-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Informationen finden Sie unter [Popover-Anker-Positionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die Aktion an, die auf ein Popover-Element angewendet werden soll, das von einer Steuerung `<input type="button">` gesteuert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verstecken. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen Anzeigemodus und Verborgenheitsmodus umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerung ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer den Wert der Eingabe nicht bearbeiten kann. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Weitere Informationen finden Sie im [HTML-Attribut `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Formular, zu dem es gehört, übermittelt werden kann. Das `required`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Weitere Informationen finden Sie unter [Client-side validation](#client-seitige_validierung) und im [HTML-Attribut `required`](/de/docs/Web/HTML/Reference/Attributes/required).

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`, spezifiziert das `size`-Attribut, wie viel der Eingabe angezeigt wird. Grundsätzlich erzielt es das gleiche Ergebnis, wie das Setzen der CSS [`width`](/de/docs/Web/CSS/width) Eigenschaft mit ein paar Besonderheiten. Der tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em` Einheiten) mit einem Standardwert von `20`, und für andere ist es Pixel (oder `px` Einheiten). CSS `width` hat Vorrang über das `size`-Attribut.

- `src`
  - : Gültig nur für den `image`-Eingabe-Button, ist das `src` ein String, der die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Senden-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, ist das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut eine Zahl, die die Granularität angibt, an die sich der Wert halten muss.

    Wenn nicht explizit eingeschlossen:
    - `step` ist standardmäßig 1 für `number` und `range`.
    - Jeder Datum-/Uhrzeit-Eingabetyp hat einen Standardwert für `step`, der für den Typ geeignet ist; siehe die individuellen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl—ganz oder mit Komma—sein oder der spezielle Wert `any`, was bedeutet, dass kein Schrittverhalten angenommen wird und jeder Wert erlaubt ist (ausgenommen andere Einschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, Datum/Uhrzeit-Eingabefelder und `range` Eingabefelder gleichbedeutend zur Basis für den Schritt—dem [`min`](#min)-Wert und Inkrementen des Schrittwerts, bis zum [`max`](#max)-Wert, falls angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Ganzzahl, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, weil `step` standardmäßig `1` ist. Damit `4.2` gültig ist, hätte `step` auf `any`, 0.1, 0.2, oder der `min`-Wert hätte eine Zahl sein müssen, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, wird der Wert in der Beschränkungsprüfung als ungültig angesehen und entspricht dem `:invalid` Pseudoklasse.

    Weitere Informationen finden Sie unter [Client-side validation](#client-seitige_validierung).

- `tabindex`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erlangen kann (fokusierbar ist) und ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen mit Ausnahme von `hidden` fokusierbar sind, sollte dieses Attribut nicht auf Formularelementen verwendet werden, weil dies ein Management der Fokusreihenfolge für alle Elemente innerhalb des Dokuments erfordern würde, mit dem Risiko, die Benutzerfreundlichkeit und Barrierefreiheit zu beeinträchtigen, wenn es falsch gemacht wird.

- `title`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das Text enthält, der Beratung zu dem Element bietet, zu dem es gehört. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks des Formularsteuerelements verwendet werden. Stattdessen verwenden Sie das {{htmlelement('label')}}-Element mit einer `for`-Eigenschaft, die auf die [`id`](#id)-Eigenschaft des Formularsteuerelements gesetzt ist. Siehe [Labels](#labels) unten.

- `type`
  - : Ein String, der den zu rendernden Steuerungstyp angibt. Zum Beispiel, um eine Checkbox zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet, was ein Klartext-Eingabefeld erstellt.

    Erlaubte Werte sind in [Eingabetypen](#input_types) oben aufgeführt.

- `value`
  - : Der Wert des Eingabefeld-Steuerelements. Bei Angabe im HTML, ist dies der Anfangswert, und danach kann dieser jederzeit geändert oder abgerufen werden, indem JavaScript verwendet wird, um auf die entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft `value` zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`
  - : Gültig nur für den `image`-Eingabe-Button, ist die `width` die Breite der Bilddatei, die angezeigt werden soll, um den grafischen Senden-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht-standardmäßige Attribute

Die folgenden nicht-standardmäßigen Attribute sind auf einigen Browsern ebenfalls verfügbar. Als allgemeine Regel sollten Sie vermeiden, diese zu verwenden, es sei denn, es ist nicht zu vermeiden.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, um das Live-Update von Suchergebnissen zu ermöglichen, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der den Typ der Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt, während er das Feld bearbeitet; dies wird verwendet, um ein geeignetes Label für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Ausrichtung des Bereichsschiebers fest. <strong>Nur Firefox</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Elementen, die in der Dropdown-Liste der vorherigen Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob nur das Wählen eines Verzeichnisses (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) erlaubt ist.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt durch Safari, Opera, Chrome, usw.), die, falls vorhanden, dem {{Glossary("user_agent", "User-Agent")}} angibt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Nutzer-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das die Suchbox darstellt. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer die Suche ausdrücklich initiiert (z.B. indem er die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes drückt).

    Das `search`-Ereignis ist ratifiziert, sodass es nicht häufiger als in einem implementierungsdefinierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}
  - : Ähnlich wie die nicht-standardmäßige CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente beeinflusst, definiert das `orient`-Attribut die Ausrichtung des Bereichsschiebers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Vertical form controls erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zum Erstellen von vertikalen Formularelementen.

- `results` {{non-standard_inline}}
  - : Das `results`-Attribut – nur von Safari unterstützt – ist ein Zählwert, der Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü des `<input>`-Elements von vorherigen Suchanfragen angezeigt werden.

    Der Wert muss eine nicht negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert gegeben wird, wird die standardmäßige maximale Eintragsmenge des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass nur Verzeichnisse durch den Benutzer in der Dateiauswahl-Schnittstelle ausgewählt werden können. Weitere Einzelheiten und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

    Obwohl es ursprünglich nur für WebKit-basierte Browser implementiert wurde, ist `webkitdirectory` auch in Microsoft Edge und Firefox 50 und später verwendbar. Obwohl es eine relativ breite Unterstützung hat, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Auch verfügbar sind die Methoden, die von den sich übergeordneten Schnittstellen, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) spezifiziert werden.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und meldet (falls das Ereignis nicht abgebrochen wird) das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visuelles Farbwähler oder Kalenderdatum-Eingabe) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabefelds nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Legt den Inhalt des angegebenen Bereichs von Zeichen im Eingabefeld auf eine gegebene Zeichenfolge fest. Ein Parameter `selectMode` ist verfügbar, um zu steuern, wie der vorhandene Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines textuellen Eingabe-Elements aus. Macht nichts für Eingaben, die nicht als Text-Eingabefelder angezeigt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Picker für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber von einem Button-Drücker oder einem anderen Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins, standardmäßig oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder durch die angegebene Anzahl von Einheiten.

## CSS

Eingaben, die ersetzbare Elemente sind, haben einige Merkmale, die nicht auf Nicht-Formularelemente anwendbar sind. Es gibt CSS-Selektoren, die spezifisch Formularsteuerungen basierend auf ihren UI-Funktionen anvisieren können, auch bekannt als UI-Pseudoklassen. Das Eingabeelement kann auch nach Typ mit Attributselektoren gezielt werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

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
        Jedes derzeit aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, beschrieben usw.) oder den Fokus akzeptiert und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder den Fokus akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es ansonsten aktiviert (ausgewählt, angeklickt, beschrieben usw.) oder den Fokus akzeptiert werden könnte, wenn es nicht deaktiviert wäre.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Nicht durch den Nutzer bearbeitbares Element.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Vom Nutzer bearbeitbares Element.</td>
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
        Formularelemente, die in einer Gruppe verwandter Elemente standardmäßig sind. Passt für die {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Input-Typen, die beim Laden oder Rendern der Seite überprüft wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Input-Typen, die derzeit überprüft werden (und das {{HTMLElement("option")}} in einem {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren indeterminierte Eigenschaft von JavaScript auf wahr gesetzt wird, {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Radiobuttons mit demselben Namenswert im Formular nicht ausgewählt sind und {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, die eine Bedingungsvalidierung haben können und derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, die eine Bedingungsvalidierung haben und derzeit ungültig sind. Passt zu einem Formularelement, dessen Wert nicht zu den durch seine Attribute festgelegten Bedingungen passt, wie <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>-Attribute und das <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>-Attribute festgelegten Bereichsgrenzen liegt oder nicht den <a href="#step"><code>step</code></a>-Beschränkungen entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Passt nur zu Elementen, die erforderlich sein können.
        Das Attribut auf einem nicht erforderlichen Element sorgt nicht für eine Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das NICHT das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlassen des Eingabefelds aktiviert. Passt auf ungültige Eingaben, jedoch nur nach der Benutzerinteraktion, z. B. durch Fokussieren auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular mit dem ungültigen Steuerelement abzuschicken.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Auswahldialog für den Nutzer anzeigen, um einen Wert auszuwählen (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>), aber nur, wenn das Element im offenen Zustand ist, das heißt, wenn der Auswahldialog angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen Beispiel

Wir können einem Beschriftungselement eines Kontrollkästchens einen Stil geben, basierend darauf, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel gestalten wir die {{cssxref('color')}} und {{cssxref('font-weight')}} der {{htmlelement('label')}}, die direkt nach einem aktivierten Eingabefeld kommt. Wir haben keine Stile angewendet, wenn das `input` nicht aktiviert ist.

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

Es ist möglich, verschiedene Arten von Formularsteuerungen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) zu adressieren. CSS-Attributselektoren passen zu Elementen basierend auf entweder nur der Anwesenheit eines Attributs oder dem Wert eines bestimmten Attributs.

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

Standardmäßig ist das Erscheinungsbild des Platzhaltertextes durchsichtig oder hellgrau. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder`-Text](#placeholder) der Eingabe. Er kann mit einem begrenzten Satz von CSS-Eigenschaften gestaltet werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Satz von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement angewendet werden können, kann auch in einer Regel mit `::placeholder` im Selektor verwendet werden.

### appearance

Die {{cssxref("appearance")}} Eigenschaft ermöglicht das Anzeigen von (fast) jedem Element im plattform-native Stil basierend auf dem Betriebssystemthema sowie das Entfernen von irgendeinem plattform-nativen Styling mit dem Wert `none`.

Sie könnten ein `<div>` wie einen Radiobutton aussehen lassen mit `div {appearance: radio;}` oder einen Radiobutton wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}`, aber tun Sie es nicht.

Das Setzen von `appearance: none` entfernt plattformnativen Rahmen, aber nicht die Funktionalität.

### caret-color

Eine spezifische Eigenschaft für Texteingabeelemente ist die CSS {{cssxref("caret-color")}} Eigenschaft, mit der Sie die Farbe festlegen können, die zum Zeichnen des Texteingabecursors verwendet wird:

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

Die {{cssxref("field-sizing")}} Eigenschaft ermöglicht Ihnen die Kontrolle über das Größenverhalten von Formular-Eingaben (d.h. sie erhalten standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und den Formularsteuerungen zu erlauben, sich in der Größe an ihren Inhalt anzupassen.

Diese Eigenschaft wird normalerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt einpacken und wachsen, während mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingaben akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}} Elemente.

### object-position und object-fit

In bestimmten Fällen (normalerweise bei nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>` Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es so ist, können die Position und die Größe des Elements sowie die Positionierung innerhalb seines Rahmens mit den CSS {{cssxref("object-position")}} und {{cssxref("object-fit")}} Eigenschaften angepasst werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farbe zu HTML-Elementen siehe:

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels werden benötigt, um unterstützenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element bietet erklärende Informationen zu einem Formularfeld, die _immer_ angebracht sind (abgesehen von allen Layout-Bedenken, die Sie haben). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden sollte.

#### Zugehörige Labels

Die semantische Zusammenführung von `<input>` und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Screenreader. Durch die Verknüpfung mit dem [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) Attribut des `<label>`, binden Sie das Label an die Eingabe in einer Weise, die es Screenreadern ermöglicht, Eingaben den Nutzern präziser zu beschreiben.

Es genügt nicht, einfachen Text neben dem `<input>`-Element zu haben. Vielmehr erfordern Benutzerfreundlichkeit und Zugänglichkeit die Einbeziehung eines ausdrücklichen oder impliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist unzugänglich: Es gibt keine Beziehung zwischen der Eingabeaufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere "Treffer"-Fläche für Maus- und Touchscreen-Nutzer. Durch die Verknüpfung eines `<label>` mit einem `<input>` wird durch Klicken auf eines von beiden das `<input>` fokussiert. Wird einfacher Text verwendet, um die Eingabe zu "beschriften", passiert das nicht. Das Teilen der Aktivierungsfläche für die Eingabeaufforderung ist für Menschen mit motorischen Problemen hilfreich.

Als Webentwickler sollten wir niemals davon ausgehen, dass Menschen all das wissen, was wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und dadurch Ihre Website – garantiert praktisch, dass einige Ihrer Besucher einige Variationen in Denkprozessen und/oder Umständen haben, die sie dazu bringen, Ihre Formulare sehr unterschiedlich von Ihnen zu interpretieren, ohne klare und richtig präsentierte Labels.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut ermöglicht Ihnen die Angabe von Text, der im Inhaltsbereich des `<input>`-Elements angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, da es kein Ersatz ist. Der Platzhalter dient dazu, einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Nicht nur ist der Platzhalter für Screenreader nicht zugänglich, sondern sobald der Nutzer irgendeinen Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitenübersetzungsfunktionen überspringen möglicherweise Attribute beim Übersetzen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie nicht das [`placeholder`](#placeholder)-Attribut, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element kennzeichnen müssen, verwenden Sie das {{HTMLElement("label")}} Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, _überprüfen_ Sie sie immer auch serverseitig und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen zu stilisieren, basierend auf dem aktuellen Zustand jeder Eingabe, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser die clientseitige Validierung bei einem (versuchten) Formular-Submit. Beim Absenden des Formulars, wenn es ein Formularelement gibt, das die Bedingungsvalidierung nicht besteht, werden unterstützende Browser eine Fehlermeldung auf dem ersten ungültigen Formularelement anzeigen; entweder eine Standardmeldung basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Meldung.

Einige Eingabetypen und andere Attribute legen Limits fest, welche Werte für eine bestimmte Eingabe gültig sind. Zum Beispiel `<input type="number" min="2" max="10" step="2">` bedeutet, dass nur die Nummer 2, 4, 6, 8 oder 10 gültig sind. Verschiedene Fehler können auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert weniger als 2 beträgt, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert zwischen 2 und 10 liegt, jedoch keine gerade Ganzzahl ist (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Wertebereich periodisch ist (d.h. beim höchsten möglichen Wert die Werte wieder von vorne beginnen, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min) Eigenschaften vertauscht sind, was darauf hinweist, dass die Spanne der erlaubten Werte bei `min` beginnt, zum niedrigsten möglichen Wert zurückkehrt und dann fortfährt, bis `max` erreicht ist. Dies ist besonders nützlich für Daten und Zeiten, wie zur Erlaubnis eines Bereichs von 20 Uhr bis 8 Uhr:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und deren Werte können zu einem bestimmten Fehler im [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Gültigkeitsobjektfehler hängen von den Attributen des
    <code>&lt;input&gt;</code>-Elements und deren Werten ab:
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
        Tritt auf, wenn der Wert größer ist als der maximale Wert, der durch das <code>max</code>-Attribut definiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code>-Eigenschaft zulässige Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der minimale Wert, der durch das <code>min</code>-Attribut definiert ist.
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
        Tritt auf, wenn ein pattern-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, der Wert jedoch <code>null</code> ist, oder ein Radio- oder Kontrollkästchen nicht ausgewählt ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert stimmt nicht mit dem Stufenschritt überein. Der Standardschritt ist <code>1</code>, also sind nur Ganzzahlen gültig, wenn <code>type="number"</code> ist und der Schritt nicht enthalten ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, z.B. eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required`-Attribut hat, wird kein Wert, oder eine leere Zeichenfolge nicht als ungültig betrachtet. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, führt eine leere Zeichenfolge nicht zu einem Fehler.

Wir können festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Nutzer bei einem Fehler beim Absenden warnen.

Zusätzlich zu den im obigen Abschnitt beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen schreibgeschützten Eigenschaften `badInput`, `valid` und `customError`. Das Gültigkeitsobjekt enthält:

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

Für jede dieser Booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund, warum die Validierung möglicherweise fehlgeschlagen ist, zutrifft, mit Ausnahme der Eigenschaft `valid`, die `true` ist, wenn der Wert des Elements alle Einschränkungen einhält.

Tritt ein Fehler auf, werden unterstützende Browser den Nutzer sowohl warnen als auch das Absenden des Formulars verhindern. Ein Wort der Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen "wahr" Wert gesetzt ist (etwas anderes als die leere Zeichenfolge oder `null`), wird das Formular nicht abgesendet. Gibt es keine benutzerdefinierte Fehlermeldung und keines der anderen Eigenschaften true ist, wird `valid` true sein und das Formular kann abgesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Gültigkeitsmeldung auf eine leere Zeichenfolge setzt, ist entscheidend. Macht der Nutzer einen Fehler und ist die Gültigkeit gesetzt, wird das Absenden ausgeschlossen, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Möchten Sie eine benutzerdefinierte Fehlermeldung anzeigen, wenn ein Feld die Validierung nicht besteht, müssen Sie die[Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandten) Elementen verfügbar ist. Nehmen wir folgendes Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularprüfungsfunktionen werden dazu führen, dass dies eine Standardfehlermeldung erzeugen wird, wenn Sie versuchen, das Formular mit entweder keinem gültigen eingefüllten Wert oder einem Wert, der nicht dem `pattern` entspricht, abzusenden.

Wenn Sie stattdessen benutzerdefinierte Fehlermeldungen anzeigen möchten, könnten Sie JavaScript wie folgend verwenden:

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

Das Beispiel wird folgendermaßen wiedergegeben:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir über die `input` Ereignis-Handler die Methode `checkValidity()` ausführen.
- Ist der Wert ungültig, wird ein `invalid` Ereignis ausgelöst und die `invalid`-Ereignis-Handler-Funktion ausgeführt. Innerhalb dieser Funktion bestimmen wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, mit einem `if ()`-Block und setzen eine benutzerdefinierte Fehlermeldung.
- Als Ergebnis wird eine der benutzerdefinierten Fehlermeldungen angezeigt, wenn der Eingabewert ungültig ist, wenn die Schaltfläche "Absenden" gedrückt wird.
- Ist es gültig, wird es wie erwartet abgesendet. Dafür muss die benutzerdefinierte Validität aufgehoben werden, indem `setCustomValidity()` mit einem leeren Zeichenfolgenwert aufgerufen wird. Deshalb tun wir dies jedes Mal, wenn das Ereignis `input` aufgerufen wird. Tun Sie das nicht und eine benutzerdefinierte Gültigkeit wurde zuvor gesetzt, wird die Eingabe als ungültig registriert, selbst wenn sie derzeit einen validen Wert bei der Einreichung enthält.

> [!NOTE]
> Validieren Sie stets alle Eingabezwänge sowohl auf Client- als auch auf Serverseite. Die Zwangsvalidierung entfernt nicht die Notwendigkeit der Validierung auf der _Serverseite_. Ungültige Werte können weiterhin von älteren Browsern oder durch bösartige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte über viele Versionen ein proprietäres Fehlerattribut – `x-moz-errormessage` –, das es erlaubte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise zu setzen. Dies wurde mit Version 66 entfernt (siehe [Firefox Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>` Typen hängen von der lokalen Region ab. In einigen Regionen ist 1.000,00 eine gültige Zahl, während in anderen Regionen die gültige Eingabemöglichkeit für diese Zahl 1.000,00 ist.

Firefox verwendet folgende Heuristiken, um die Region zu bestimmen, um die Eingabe des Nutzers (zumindest für `type="number"`) zu validieren:

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut am Element oder an einem seiner Elternteile angegeben ist.
- Versuchen Sie die Sprache, die durch jeglichen `Content-Language` HTTP-Header angegeben ist. Oder,
- Verwenden Sie, falls keine angegeben ist, die Browser-Region.

## Barrierefreiheit

### Labels

Wenn Eingaben enthalten sind, ist es eine Anforderung zur Barrierefreiheit, Labels hinzuzufügen. Dies ist notwendig, damit Menschen, die unterstützende Technologien verwenden, erkennen können, wofür die Eingabe ist. Auch durch Klicken oder Berühren eines Labels erhält das damit verbundene Formularelement den Fokus. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für Sehbehinderte, erhöht die Fläche, die ein Benutzer klicken oder berühren kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radiobuttons und Kontrollkästchen, die klein sind. Für weitere Informationen über Labels im Allgemeinen siehe [Labels](#labels).

Das folgende ist ein Beispiel dafür, wie das `<label>` mit einem `<input>`-Element in obigem Stil verknüpft wird. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert derselbe wie die `id` der Eingabe ist.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten eine Fläche bereitstellen, die groß genug ist, um sie einfach zu aktivieren. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Problemen und Menschen, die ungenaue Eingabeformen verwenden, wie einen Stift oder Finger. Eine minimale interaktive Größe von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Verstehen des Erfolgskriteriums 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, gelistet, einreichbar, zurücksetzbares, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseinhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht <code>hidden</code> ist, dann etikettierbares, palpierbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Ein Start-Tag muss vorhanden sein und ein End-Tag darf nicht vorhanden sein.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA Rollenzuordnung</th>
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a> wenn
            mit <code>aria-pressed</code> verwendet,
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
            oder <code>text</code> mit <code>list</code>-Attribut: keine <code>role</code> erlaubt
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

- [Bedingungsvalidierung von Formularen](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zur Struktur eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Anleitung zum Erstellen von benutzerdefinierten Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in veralteten Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Erstellen von vertikalen Formularsteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
