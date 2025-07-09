---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<input>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; eine Vielzahl von Arten von Eingabedaten und Steuerungs-Widgets sind verfügbar, abhängig vom Gerät und dem {{Glossary("user_agent", "User-Agent")}}. Das `<input>` Element ist eines der mächtigsten und komplexesten in HTML aufgrund der schieren Anzahl an Kombinationen von Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich abhängig vom Wert des [`type`](#type) Attributs, daher werden die verschiedenen Typen in eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` übernommen.

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
        Ein Druckknopf ohne Standardverhalten, der den Wert des <a href="#value"><code>value</code></a> Attributs anzeigt, standardmäßig leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Kontrollkästchen, das es erlaubt, einzelne Werte auszuwählen/abzuwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerelement zur Angabe einer Farbe; Öffnet einen Farbpicker, wenn es in unterstützenden Browsern aktiv ist.
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
        Ein Steuerelement zur Eingabe eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumspicker oder numerische Räder für Jahr, Monat, Tag, wenn es in unterstützenden Browsern aktiv ist.
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
        Ein Steuerelement zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumspicker oder numerische Räder für Datum- und Uhrzeit-Komponenten, wenn es in unterstützenden Browsern aktiv ist.
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
        <code>text</code> Eingabe, hat aber Validierungsparameter und relevante
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
        Ein Steuerelement, das es dem Benutzer ermöglicht, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a> Attribut, um die Dateitypen festzulegen, die das Steuerelement auswählen kann.
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
        Ein Steuerelement, das nicht angezeigt wird, dessen Wert aber an den
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
        Ein grafischer <code>submit</code> Knopf. Zeigt ein Bild an, das durch das <code>src</code> Attribut definiert wird.
        Das <a href="#alt"><code>alt</code></a> Attribut wird angezeigt, wenn das Bild <a href="#src"><code>src</code></a> fehlt.
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
        Ein Steuerelement zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt eine Standardvalidierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Optionsfeld, das es erlaubt, einen einzelnen Wert aus mehreren mit demselben <a href="#name"><code>name</code></a> Wert auszuwählen.
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
        Ein Steuerelement zur Eingabe einer Zahl, deren genauer Wert nicht wichtig ist. Wird als Bereichs-Widget angezeigt, der standardmäßig den Mittelwert anzeigt. Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich der akzeptablen Werte zu definieren.
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
        Ein Knopf, der den Inhalt des Formulars auf die Standardwerte zurücksetzt. Nicht empfohlen.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann in unterstützten Browsern ein Löschsymbol enthalten, das zum Leeren des Feldes verwendet werden kann. Zeigt statt der Eingabetaste ein Suchsymbol auf einigen Geräten mit dynamischen Tastaturen an.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Ein Knopf, der das Formular absendet.</td>
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code> Eingabe, hat aber Validierungsparameter und relevante Tastatur in unterstützten Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerelement zur Eingabe eines Datums, das aus einer Kalenderwochennummer und einer Wochennummer ohne Zeitzone besteht.
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

Das `<input>` Element ist so mächtig aufgrund seiner Attribute; das [`type`](#type) Attribut, das oben mit Beispielen beschrieben wurde, ist das wichtigste. Da jedes `<input>` Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle basiert, teilen sie technisch das exakt gleiche Set an Attributen. In der Realität haben jedoch die meisten Attribute nur eine Wirkung auf ein bestimmtes Unterset von Eingabetypen. Darüber hinaus hängt die Weise, wie einige Attribute eine Eingabe beeinflussen, vom Eingabetyp ab, und beeinflusst unterschiedliche Eingabetypen auf unterschiedliche Weise.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird von einer Liste gefolgt, die jedes Attribut im Detail beschreibt und mit welchen Eingabetypen sie verbunden sind. Diejenigen, die für die meisten oder alle Eingabetypen üblich sind, werden detaillierter unten definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind—oder Attribute, die zwar für alle Eingabetypen üblich sind, aber besondere Verhaltensweisen haben, wenn sie auf einem bestimmten Eingabetyp verwendet werden—werden stattdessen auf den Seiten dieser Typen dokumentiert.

Zu den Attributen des `<input>` Elements gehören die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                       | Beschreibung                                                                                             |
| --------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                        | Hinweis für erwarteten Dateityp in Datei-Upload-Steuerelementen                                          |
| [`alt`](#alt)                                 | `image`                                                                       | alt Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                          |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email`, und `password`                                     | Steuert die automatische Großschreibung im eingegebenen Text.                                            |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio`, und Schaltflächen                             | Hinweis für Formular-Autovervollständigungsfunktion                                                      |
| [`capture`](#capture)                         | `file`                                                                        | Medieneingabemethode in Datei-Upload-Steuerelementen                                                     |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                           | Ob der Befehl oder das Steuerelement ausgewählt ist                                                      |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                             | Name des Formularfeldes zur Übermittlung der Richtung des Elements bei der Formularabsendung             |
| [`disabled`](#disabled)                       | alle                                                                          | Ob das Formular-Steuerelement deaktiviert ist                                                            |
| [`form`](#form)                               | alle                                                                          | Verbindet das Steuerelement mit einem Formularelement                                                    |
| [`formaction`](#formaction)                   | `image`, `submit`                                                             | URL für die Formularabsendung                                                                            |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                             | Zu verwendender Typ der Formulardatensatz-Kodierung für die Formularabsendung                            |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                             | HTTP-Methode zur Formularabsendung                                                                       |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                             | Umgeht die Formularsteuerungsvalidierung für die Formularabsendung                                       |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                             | Browsing-Kontext für die Formularabsendung                                                               |
| [`height`](#height)                           | `image`                                                                       | Entspricht dem height Attribut für {{htmlelement('img')}}; vertikale Dimension                           |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio`, und Schaltflächen       | Wert des id Attributs der {{htmlelement('datalist')}} der Autovervollständigungsoptionen                 |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Maximalwert                                                                                              |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                           | Maximale Länge (Anzahl der Zeichen) des `value`                                                          |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Minimalwert                                                                                              |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                           | Minimale Länge (Anzahl der Zeichen) des `value`                                                          |
| [`multiple`](#multiple)                       | `email`, `file`                                                               | Boolean. Ob mehrere Werte erlaubt sind                                                                   |
| [`name`](#name)                               | alle                                                                          | Name des Formular-Steuerelements. Wird mit dem Formular als Teil eines Name/Wert-Paares übermittelt      |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                           | Muster, dem der `value` entsprechen muss, um gültig zu sein                                              |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                 | Text, der im Formular-Steuerelement erscheint, wenn kein Wert gesetzt ist                                |
| [`popovertarget`](#popovertarget)             | `button`                                                                      | Bestimmt ein `<input type="button">` als Steuerelement für ein Popover Element                           |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                      | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                         |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio`, und Schaltflächen | Boolean. Der Wert ist nicht editierbar                                                                   |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color`, und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss markiert werden, damit das Formular übermittelt werden kann |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                           | Größe des Steuerelements                                                                                 |
| [`src`](#src)                                 | `image`                                                                       | Entspricht dem `src` Attribut für {{htmlelement('img')}}; Adresse der Bildressource                      |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Inkrementelle Werte, die gültig sind                                                                     |
| [`type`](#type)                               | alle                                                                          | Typ des Formular-Steuerelements                                                                          |
| [`value`](#value)                             | alle außer `image`                                                            | Der Wert des Steuerelements. Wenn im HTML angegeben, entspricht dies dem Initialwert                     |
| [`width`](#width)                             | `image`                                                                       | Entspricht dem `width` Attribut für {{htmlelement('img')}}                                               |

Einige zusätzliche nicht standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Gültig nur für den `file` Eingabetyp, das `accept` Attribut definiert, welche Dateitypen in einem `file` Upload-Steuerelement ausgewählt werden können. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`
  - : Gültig nur für den `image` Knopf, das `alt` Attribut liefert alternativen Text für das Bild, der den Wert des Attributs anzeigt, wenn das Bild [`src`](#src) fehlt oder sonst fehlschlägt. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und wenn ja, auf welche Weise. Siehe die [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) globale Attributseite für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolesches Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge an, die beschreibt, welche (falls vorhanden) Art der Autovervollständigungsfunktion die Eingabe bereitstellen soll. Eine typische Implementierung der Autovervollständigung ruft zuvor in demselben Eingabefeld eingegebene Werte ab, aber es können auch komplexere Formen der Autovervollständigung existieren. Zum Beispiel könnte ein Browser in der Lage sein, mit der Kontaktliste eines Geräts zu interagieren, um `email` Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für erlaubte Werte.

    Das `autocomplete` Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, und `password`. Dieses Attribut hat keine Auswirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, es ist für alle Eingabetypen gültig außer `checkbox`, `radio`, `file`, oder eines der Schaltflächentypen.

    Siehe das [`autocomplete` Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` für `hidden` etwas anders funktioniert als für andere Eingabetypen.

- `autofocus`
  - : Ein Boolesches Attribut, das, wenn vorhanden, angibt, dass die Eingabe automatisch den Fokus erhalten soll, wenn die Seite vollständig geladen ist (oder wenn das {{HTMLElement("dialog")}} welches das Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus` Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Event ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus` Attribut haben. Wenn es auf mehr als ein Element gesetzt wird, erhält das erste Element mit diesem Attribut den Fokus.

    Das `autofocus` Attribut kann nicht auf Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussierbar sind.

    > [!WARNING]
    > Automatisches Fokussieren eines Formularsteuerelements kann sehbehinderte Nutzer, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihre Benutzer ohne vorherige Warnung zum Formularsteuerelement.

    Verwenden Sie das `autofocus` Attribut mit Bedacht auf Barrierefreiheit. Das automatische Fokussieren auf ein Steuerelement kann bewirken, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label des fokussierten Formularsteuerelements ankündigt, wird der Bildschirmleser nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird den durch den vorhergehenden Inhalt geschaffenen Kontext ebenso verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture Spezifikation und nur gültig für den `file` Eingabetyp, das `capture` Attribut definiert, welches Medium—Mikrofon, Video, oder Kamera—zum Aufnehmen einer neuen Datei für den Upload mit `file` Upload-Steuerelementen in unterstützenden Szenarien verwendet werden soll. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`
  - : Gültig für beide `radio` und `checkbox` Typen, `checked` ist ein boolesches Attribut. Wenn es auf einem `radio` Typ vorhanden ist, zeigt es an, dass das Optionsfeld das aktuell ausgewählte in der Gruppe der gleichnamigen Optionsfelder ist. Wenn es auf einem `checkbox` Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig markiert ist (wenn die Seite geladen wird). Es zeigt nicht an, ob dieses Kontrollkästchen derzeit markiert ist: wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerelementen wird der Wert eines Kontrollkästchens und eines Optionsfeldes nur in die übermittelten Daten aufgenommen, wenn sie derzeit `checked` sind. Wenn dies der Fall ist, werden der Name und die Wert(e) der markierten Steuerelemente übermittelt.
    >
    > Wenn beispielsweise ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen markiert ist, enthalten die übermittelten Formulardaten `fruit=cherry`. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgeführt. Der Standard `value` für Kontrollkästchen und Optionsfelder ist `on`.

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen, das `dirname` Attribut ermöglicht die Übermittlung der Richtung des Elements. Wenn es enthalten ist, wird das Formularsteuerelement mit zwei Name/Wert-Paaren übermittelt: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname` Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser gesetzt.

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

    Wenn das obige Formular übermittelt wird, bewirkt die Eingabe sowohl das `name` / `value` Paar von `fruit=cherry` als auch das `dirname` / Richtungs-Paar von `fruit-dir=ltr`.
    Für weitere Informationen siehe das [`dirname` Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren können sollte. Deaktivierte Eingaben werden typischerweise mit einer gedimmteren Farbe oder durch eine andere Form der Anzeige, dass das Feld nicht verfügbar ist, gerendert.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event) Event und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation vorgeschrieben, wird Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` über Seitenladezeiten hinweg [beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete) Attribut, um diese Funktion zu steuern.

- `form`
  - : Eine Zeichenfolge, die das {{HTMLElement("form")}} Element angibt, mit dem die Eingabe verknüpft ist (d.h. ihr **Formulareigentümer**). Der Wert dieser Zeichenfolge, falls vorhanden, muss mit dem [`id`](#id) eines `<form>` Elements im gleichen Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>` Element dem nächstgelegenen enthaltenen Formular zugeordnet, falls vorhanden.

    Das `form` Attribut ermöglicht es Ihnen, eine Eingabe irgendwo im Dokument zu platzieren, diese aber mit einem Formular an anderer Stelle im Dokument einzubeziehen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft sein.

- `formaction`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formenctype`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formmethod`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formnovalidate`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formtarget`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `height`
  - : Nur gültig für den `image` Eingabetyp, `height` ist die Höhe der Bilddatei, die für die Darstellung des grafischen Übermittlungs-Knopfes angezeigt wird. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, definiert eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Sein Zweck besteht darin, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des `for` Attributs des {{htmlelement('label')}} genutzt, um das Label mit der Formularsteuerung zu verlinken. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist, bietet einen Hinweis an Browser, welche Art von virtueller Tastaturkonfiguration verwendet werden soll, wenn dieses Element oder dessen Inhalte bearbeitet werden. Werte sind `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der für das `list` Attribut gegebene Wert sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements im gleichen Dokument sein. Das `<datalist>` bietet eine Liste von vordefinierten Werten zum Vorschlagen für den Benutzer für diese Eingabe. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, und `color`.

    Laut den Spezifikationen wird das `list` Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file`, oder einem der Schaltflächentypen unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen, Markierungen entlang eines Bereichs oder sogar eine Eingabe sehen, die sich wie ein {{HTMLElement("select")}} öffnet, aber nicht aufgeführte Werte ermöglicht. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}} Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert den größten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element [Constraint Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max` Attributs keine Zahl ist, dann hat das Element keinen Maximalwert.

    Es gibt einen speziellen Fall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der `max` Wert niedriger sein als der `min` Wert, was darauf hinweist, dass dieser Bereich sich umschlagen kann; dies ermöglicht es zum Beispiel, einen Zeitraum von 22:00 bis 04:00 Uhr zu spezifizieren.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definieren die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt [Constraint Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger ist als `maxlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als das `maxlength` Attribut erlaubt. Constraint Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Clientseitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert den niedrigsten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) kleiner ist als dieser, schlägt das Element [Constraint Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min` Attributs keine Zahl ist, dann hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max` Attributs sein. Wenn das `min` Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `min` Wert angewendet. Wenn das `min` Attribut gültig ist und ein nicht leerer Wert kleiner ist als das durch das `min` Attribut erlaubte Minimum, wird die Constraint Validierung die Formularübermittlung verhindern. Siehe [Clientseitige Validierung](#client-seitige_validierung) für weitere Informationen.

    Es gibt einen speziellen Fall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der `max` Wert niedriger sein als der `min` Wert, was darauf hinweist, dass dieser Bereich sich umschlagen kann; dies ermöglicht es zum Beispiel, einen Zeitraum von 22:00 bis 04:00 Uhr zu spezifizieren.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password` definiert die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, kleiner oder gleich dem durch `maxlength` angegebenen Wert. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt [Constraint Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer ist als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} und verhindert die Formularübermittlung. Constraint Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Clientseitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das boolesche `multiple` Attribut, wenn gesetzt, bedeutet, dass der Benutzer in der E-Mail-Widget komma-getrennte E-Mail-Adressen eingeben kann oder mehr als eine Datei mit der `file` Eingabe wählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`
  - : Eine Zeichenfolge, die einen Namen für die Eingabesteuerung angibt. Dieser Name wird zusammen mit dem Wert der Steuerung übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie das `name` Attribut als obligatorisch (obwohl es nicht ist). Wenn eine Eingabe kein `name` angegeben hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerungen, nicht markierte Optionsfelder, nicht markierte Kontrollkästchen und Rücksetzknöpfe werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_` : Wenn als Name eines `<input>` Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "User-Agent")}} auf die Zeichencodierung gesetzt, die zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name) Attribut erzeugt ein einzigartiges Verhalten für Optionsfelder.

    Nur ein Optionsfeld in einer gleichnamigen Gruppe von Optionsfeldern kann auf einmal markiert werden. Wenn eines der Optionsfelder in dieser Gruppe ausgewählt wird, wird automatisch das derzeit ausgewählte Optionsfeld in derselben Gruppe abgewählt. Der Wert dieses “einen markierten Optionsfeldes” wird zusammen mit dem Namen übermittelt, wenn das Formular abgesendet wird.

    Wenn Sie in eine Serie gleichnamiger Optionsfelder einsteigen, wenn eines davon markiert ist, wird das markierte den Fokus erhalten. Wenn sie nicht zusammen in der Quellreihenfolge sind, wenn eines der Gruppe markiert ist, beginnt das Einsteigen in die Gruppe, wenn das erste in der Gruppe erreicht wird und alle übersprungen werden, die nicht markiert sind. Anders ausgedrückt: Wenn eines markiert ist, überspringt die Neigung die nicht markierten Optionsfelder in der Gruppe. Wenn keine markiert sind, erhält die Optionsfeldgruppe den Fokus, wenn das erste Optionsfeld in der gleichnamigen Gruppe erreicht wird.

    Sobald eines der Optionsfelder in der Gruppe den Fokus hat, wird durch Verwendung der Pfeiltasten durch alle Optionsfelder des gleichen Namens navigiert, selbst wenn die Optionsfelder in der Quellreihenfolge nicht zusammen angeordnet sind.

    Wenn ein Eingabeelement einen `name` erhält, wird dieser Name eine Eigenschaft des übergeordneten Formularelements [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements). Wenn Sie eine Eingabe haben, deren `name` auf `guest` und eine andere auf `hat-size` gesetzt ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest` Feld und `hatSize` das Objekt für das `hat-size` Feld sein.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer integrierten Methode oder Eigenschaft des Formulars entspricht, da Sie dann die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, das `pattern` Attribut wird verwendet, um einen regulären Ausdruck zu erstellen, den der `value` der Eingabe entsprechen muss, damit der Wert die [Constraint Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Keine Schrägstriche sollten um den Mustertest herum angegeben werden. Beim Erstellen des regulären Ausdrucks:
    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, sodass das Match gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das 'v' Flag angegeben, damit das Muster als eine Sequenz von Unicode-Codepunkten interpretiert wird, anstatt als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern` Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn das Pattern-Attribut gültig ist und ein nicht leerer Wert das Muster nicht trifft, verhindert die Constraint Validierung die Formularübermittlung. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der erstellte reguläre Ausdruck mit jedem durch Kommas getrennten Wert verglichen.

    > [!NOTE]
    > Wenn das `pattern` Attribut verwendet wird, informieren Sie den Benutzer über das erwartete Format, indem Sie erläuternden Text in der Nähe hinzufügen. Sie können auch ein [`title`](#title) Attribut hinzufügen, um zu erläutern, welche Anforderungen erfüllt sein müssen, um das Muster zu treffen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist erforderlich für Barrierefreiheit. Der Tooltip ist eine Verbesserung.

    Siehe [Clientseitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, das `placeholder` Attribut liefert einen kurzen Hinweis für den Benutzer, welche Art von Informationen in dem Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Art der Daten gibt, anstatt einer Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Beispielsweise könnte bei einem Feld, das den Vornamen eines Benutzers erfassen soll, und dessen Label „Vorname“ lautet, eine geeignete Platzhalterangabe „z.B., Mustafa“ sein.

    > [!NOTE]
    > Das `placeholder` Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`
  - : Wandelt ein `<input type="button">` Element in einen Popover-Steuerelement-Knopf um; nimmt die ID des Popover-Elements, das es steuern soll, als Wert. Siehe die [Popover API](/de/docs/Web/API/Popover_API) Landing-Seite für weitere Einzelheiten. Die Etablierung einer Beziehung zwischen einem Popover und seinem Aufrufer-Knopf unter Verwendung des `popovertarget` Attributs hat zwei weitere nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Aufrufer und platziert das Popover in einer logischen Position in der Tastatur-Fokusnavigationsreihenfolge, wenn es gezeigt wird. Dies macht das Popover für Tastatur- und Hilfstoolbenutzer (AT) besser zugänglich (siehe auch [Popover Barrierefreiheitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, die es sehr bequem macht, Popover relativ zu ihren Steuerungen mit [CSS Ankerpositioning](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Einzelheiten.

- `popovertargetaction`
  - : Gibt die auszuführende Aktion auf einem Popover-Element an, das von einem Steuerungselement `<input type="button">` gesteuert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Knopf wird ein gezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion vorgenommen.
    - `"show"`
      - : Der Knopf wird ein verborgenes Popover zeigen. Wenn Sie versuchen, ein bereits gezeigtes Popover zu zeigen, wird keine Aktion vorgenommen.
    - `"toggle"`
      - : Der Knopf wird ein Popover zwischen dem Status „anzeigen“ und „verbergen“ umschalten. Wenn das Popover verborgen ist, wird es gezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerungsknopf ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht ändern können sollte. Das `readonly` Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `password` unterstützt.

    Siehe das [HTML Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) für weitere Informationen.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein boolesches Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Besitzformular abgesendet werden kann. Das `required` Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, und `file` Eingabetypen unterstützt.

    Siehe [Clientseitige Validierung](#client-seitige_validierung) und das [HTML Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für weitere Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url`, und `text`, das `size` Attribut gibt an, wie viel der Eingabe angezeigt wird. Grundsätzlich ergibt es dasselbe Ergebnis wie das Setzen der CSS [`width`](/de/docs/Web/CSS/width) Eigenschaft mit ein paar Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text`, ist es eine Anzahl von Zeichen (oder `em` Einheiten) mit einem Standardwert von `20`, und für andere ist es Pixel (oder `px` Einheiten). CSS `width` hat Vorrang vor dem `size` Attribut.

- `src`
  - : Nur gültig für den `image` Eingabeknopf, `src` ist eine Zeichenfolge, die die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Übermittlungs-Knopf darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss.

    Wenn nicht explizit enthalten:
    - `step` hat standardmäßig den Wert 1 für `number` und `range`.
    - Jeder Date- oder Zeiteingabetyp hat einen Standardwert für den `step` Wert, der für den Typ geeignet ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step), und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl—ganzzahlig oder Gleitkomme—oder der spezielle Wert `any` sein, was bedeutet, dass kein Schritt impliziert ist und jeder Wert erlaubt ist (abgesehen von anderen Beschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, date-/Zeiteingabetypen und `range` Eingabetypen gleich dem Basiswert für die Schrittweite—dem [`min`](#min) Wert und Inkrementen des `step` Werts, bis zum [`max`](#max) Wert, wenn angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann sind alle geraden ganzen Zahlen, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, sind alle ganzen Zahlen gültig, aber Gleitkomma-Zahlen (wie `4.2`) sind nicht gültig, weil der `step` standardmäßig auf `1` gesetzt ist. Für `4.2` um gültig zu sein, hätte der `step` auf `any`, 0.1, 0.2 gesetzt sein müssen, oder der `min` Wert hätte eine Zahl sein müssen, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht der Schrittweitekonfiguration entsprechen, wird der Wert bei der Constraint Validierung als ungültig betrachtet und wird die `:invalid` Pseudoklasse treffen.

    Siehe [Clientseitige Validierung](#client-seitige_validierung) für weitere Informationen.

- `tabindex`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (fokussierbar ist), ob es an sequentieller Tastaturnavigation teilnehmen sollte. Da alle Eingabetypen außer Eingaben des Typs hidden fokussierbar sind, sollte dieses Attribut nicht auf Formular-Steuerelementen verwendet werden, da dies eine Verwaltung der Fokusreihenfolge für alle Elemente im Dokument erfordern würde, mit dem Risiko, die Benutzerfreundlichkeit und Barrierefreiheit zu beeinträchtigen, wenn es falsch gemacht wird.

- `title`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, enthält einen Text, der beratende Informationen darstellt, die sich auf das Element beziehen, zu dem es gehört. Solche Informationen können typischerweise, aber nicht notwendig, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als die primäre Erklärung des Zwecks der Formularsteuerung verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}} Element mit einem `for` Attribut, das auf das [`id`](#id) der Formularsteuerung gesetzt ist. Siehe [Labels](#labels) unten.

- `type`
  - : Eine Zeichenfolge, die den Typ der Steuerung, die darzustellen ist, angibt. Beispielsweise wird für ein Kontrollkästchen ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet, wodurch ein Klartext-Eingabefeld erstellt wird.

    Die erlaubten Werte sind in [Eingabetypen](#input_types) oben aufgeführt.

- `value`
  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Initialwert, und danach kann er jederzeit mittels JavaScript geändert oder abgerufen werden, indem auf die entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt `value` Eigenschaft zugegriffen wird. Das `value` Attribut ist immer optional, sollte aber als zwingend für `checkbox`, `radio`, und `hidden` betrachtet werden.

- `width`
  - : Nur gültig für den `image` Eingabeknopf, `width` ist die Breite der Bilddatei, die angezeigt werden soll, um den grafischen Übermittlungs-Knopf darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-Standard-Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie sie vermeiden, es sei denn, es lässt sich nicht vermeiden.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Events gesendet werden sollen, um Live-Suchergebnisse zu aktualisieren, während der Benutzer den Wert des Feldes noch bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der den Typ der Aktion anzeigt, die ausgeführt wird, wenn der Benutzer die <kbd>Eingabetaste</kbd> oder <kbd>Rückstelltaste</kbd> drückt, während das Feld bearbeitet wird; dies wird verwendet, um eine angemessene Etikettierung für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> anstelle davon.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Ausrichtung des Bereichsreglers fest. <strong>Nur Firefox</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl an Elementen, die in der Dropdown-Liste der vorherigen Suchanfragen angezeigt werden soll. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob nur Verzeichnisse zur Auswahl durch den Benutzer zugelassen werden sollen (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist).
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolesche Attribut `incremental` ist eine WebKit und Blink Erweiterung (daher unterstützt von Safari, Opera, Chrome, etc.), die, wenn vorhanden, den {{Glossary("user_agent", "User-Agent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Events an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das das Suchfeld repräsentiert. Dies erlaubt Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht spezifiziert ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Event nur gesendet, wenn der Benutzer explizit eine Suche initiiert (z.B. durch Drücken der <kbd>Eingabetaste</kbd> oder <kbd>Rückstelltaste</kbd>, während das Feld bearbeitet wird).

    Das `search` Event ist ratengesteuert, so dass es nicht häufiger als in einem von der Implementierung definierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}
  - : Ähnlich dem -moz-orient nicht-standard CSS Attribut, das die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente betrifft, definiert das `orient` Attribut die Orientierung des Bereichsreglers. Werte sind `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, bei dem der Bereich vertikal gerendert wird. Siehe [Erstellen von vertikalen Steuerelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung von vertikalen Steuerelementen.

- `results` {{non-standard_inline}}
  - : Das `results` Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der Ihnen erlaubt, die maximale Anzahl von Einträgen, die im [Eingabe]-Element nativ bereitgestellten Dropdown-Menü von vorherigen Suchanfragen angezeigt werden, zu überschreiben.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht gegeben, oder ein ungültiger Wert gegeben wird, wird die Standardmaximalzahl der Einträge des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean `webkitdirectory` Attribut, wenn vorhanden, gibt an, dass nur Verzeichnisse im Dateiauswahlinteface zur Auswahl für den Benutzer verfügbar sein sollen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für weitere Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch verwendbar in Microsoft Edge sowie in Firefox-Versionen 50 und später. Allerdings, obwohl es relativ breite Unterstützung hat, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, es gibt keine alternative Möglichkeit.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle bereitgestellt, die die `<input>` Elemente im DOM repräsentiert. Außerdem sind die von den übergeordneten Schnittstellen spezifizierten Methoden verfügbar, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements alle Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben und ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Event am Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements alle Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben, ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Event am Element ausgelöst, und (wenn das Event nicht abgesagt wird) dem Benutzer das Problem gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>` Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente mit nicht auswählbarem Textinhalt (wie ein visueller Farbwähler oder ein Kalenderdatei-Eingabefeld) macht diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Meldung fest, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Legt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine gegebene Zeichenfolge fest. Ein `selectMode` Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen in einem Texteingabeelement aus. Macht nichts für Eingaben, die nicht als Texteingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Auswahldialog für das Eingabeelement, der normalerweise angezeigt werden würde, wenn das Element ausgewählt ist, jedoch durch einen Knopfdruck oder eine andere Benutzerinteraktion ausgelöst.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Dekrementiert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Inkrementiert den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, die ersetzte Elemente sind, haben einige Merkmale, die nicht für Nicht-Formularelemente anwendbar sind. Es gibt CSS-Selektoren, die gezielt auf Formularelemente basieren auf ihren UI-Merkmalen abzielen können, auch bekannt als UI-Pseudoklassen. Das Eingabeelement kann auch nach Typ mit Attributselektoren gezielt angesprochen werden. Es gibt einige Eigenschaften, die ebenfalls besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudoklassen, die für das
    <code>&#x3C;input></code>
    -Element relevant sind:
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
        Jedes derzeit aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, eingetippt usw.) oder den Fokus annehmen kann und ebenfalls einen deaktivierten Zustand hat, in dem es nicht aktiviert werden kann oder den Fokus nicht annehmen kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, das ansonsten aktiviert werden könnte (ausgewählt, angeklickt, eingetippt usw.) oder den Fokus annehmen könnte, wäre es nicht deaktiviert.
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
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das vorhanden ist und noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die in einer Gruppe von verwandten Elementen das Standardelement sind. Passt {{HTMLElement("input/checkbox", "checkbox")}}- und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die beim Laden oder Rendern der Seite überprüft wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt {{HTMLElement("input/checkbox", "checkbox")}}- und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die derzeit überprüft sind (und die {{HTMLElement("option")}} in einem {{HTMLElement("select")}}, die derzeit ausgewählt sind).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren indeterminate-Eigenschaft durch JavaScript auf „wahr“ gesetzt ist, {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Radiobuttons mit dem gleichen Namenwert im Formular nicht ausgewählt sind, und {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularsteuerungen, auf die die Validierung von Einschränkungen angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularsteuerungen, auf die die Validierung von Einschränkungen angewendet wird und die derzeit nicht gültig sind. Passt ein Formularsteuerungselement, dessen Wert nicht mit den durch seine Attribute festgelegten Einschränkungen übereinstimmt, wie <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die Attribute <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> sowie <a href="#step"><code>step</code></a> angegebenen Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die Attribute <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> angegebenen Bereichsgrenzen liegt oder nicht die <a href="#step"><code>step</code></a>-Vorgabe einhält.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat. Passt nur zu Elementen, die erforderlich sein können. Das Attribut bei einem nicht erforderlichen Element wird kein Übereinstimmung ergeben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das NICHT das <a href="#required"><code>required</code></a>-Attribut gesetzt hat. Passt nicht zu Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlassen des Feldes aktiviert. Passt auf ungültige Eingaben, jedoch nur nach der Benutzerinteraktion, z.B. durch Fokussieren auf die Steuerung, Verlassen der Steuerung oder Versuch, das Formular mit der ungültigen Steuerung abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die eine Auswahlmöglichkeit für den Benutzer anzeigen (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — jedoch nur, wenn das Element im offenen Zustand ist, also wenn die Auswahl angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen-Beispiel

Wir können ein Checkbox-Label basierend darauf stylen, ob die Checkbox aktiviert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das direkt nach einer aktivierten Eingabe kommt. Wir haben keine Stile angewendet, wenn die `input` nicht aktiviert ist.

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

Es ist möglich, verschiedene Arten von Formsteuerungen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren passen zu Elementen basierend entweder nur auf das Vorhandensein eines Attributs oder den Wert eines bestimmten Attributs.

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

Standardmäßig erscheint der Platzhaltertext als durchscheinend oder hellgrau. Das {{cssxref('::placeholder')}} Pseudo-Element ist der [`placeholder` Text](#placeholder) der Eingabe. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil der CSS-Eigenschaften, der auf das {{cssxref("::first-line")}} Pseudo-Element angewendet werden kann, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### appearance

Die {{cssxref("appearance")}}-Eigenschaft ermöglicht das Darstellen von (fast) jedem Element im plattform-nativen Stil basierend auf dem Thema des Betriebssystems sowie die Entfernung jeder plattform-nativen Gestaltung mit dem Wert `none`.

Sie könnten ein `<div>` wie einen Radiobutton aussehen lassen mit `div {appearance: radio;}` oder ein Radio wie eine Checkbox mit `[type="radio"] {appearance: checkbox;}`, aber tun Sie das nicht.

Das Setzen von `appearance: none` entfernt plattform-native Rahmen, aber nicht die Funktionalität.

### caret-color

Eine speziell für Text-Eingabebezogene Elemente spezifische Eigenschaft ist die CSS {{cssxref("caret-color")}}-Eigenschaft, mit der Sie die Farbe festlegen können, die zum Zeichnen des Texteingabe-Cursors verwendet wird:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu kontrollieren (d.h. sie erhalten standardmäßig eine vorgesehene Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, damit sich Formsteuerungen in ihrer Größe anpassen, um ihren Inhalt anzupassen.

Diese Eigenschaft wird typischerweise verwendet, um Eingabefelder zu erstellen, die ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}}-Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn dies der Fall ist, können die Position und Größe des Elements und seine Positionierung innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen über das Hinzufügen von Farben zu Elementen in HTML, siehe:

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Zusätzliche Merkmale

### Labels

Labels sind erforderlich, um erläuternden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element liefert erklärende Informationen über ein Formularfeld, das _immer_ angemessen ist (abgesehen von Layout-Bedenken, die Sie haben könnten). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder ein {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugehörige Labels

Die semantische Paarung von `<input>`- und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Bildschirmleseprogramme. Indem sie mit dem [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut des `<label>` gepaart werden, verknüpfen Sie das Label mit der Eingabe in einer Art und Weise, die es Bildschirmleseprogrammen ermöglicht, Eingaben genauer zu beschreiben.

Es reicht nicht aus, einfachen Text neben dem `<input>`-Element zu haben. Vielmehr erfordern Benutzerfreundlichkeit und Barrierefreiheit die Einbeziehung entweder eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht barrierefrei: Es gibt keine Beziehung zwischen der Eingabeaufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere „Trefferfläche“ für Maus- und Touchscreen-Nutzer, auf die sie klicken oder tippen können. Indem ein `<label>` mit einem `<input>` verbunden wird, fokussiert das Klicken auf eines der beiden die Eingabe. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu beschriften, wird dies nicht geschehen. Das Teil der Aktivierungsfläche für die Eingabe beeinträchtigt Menschen mit motorischen Störungen positiv.

Als Webentwickler ist es wichtig, dass wir niemals davon ausgehen, dass Menschen alle Dinge wissen, die wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und daher auch Ihre Website – garantiert praktisch, dass einige Besucher Ihrer Website einige Variationen in Denkprozessen und/oder Umständen haben, die sie dazu führen, Ihre Formulare anders zu interpretieren als Sie, ohne klare und korrekt präsentierte Labels.

#### Platzhalter sind nicht barrierefrei

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text anzugeben, der innerhalb des Inhaltsbereichs des `<input>`-Elements erscheint, wenn dieser leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, weil es keins ist. Der Platzhalter wird dazu verwendet, einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Der Platzhalter ist nicht nur für Bildschirmleseprogramme unzugänglich, sondern verschwindet auch, sobald der Benutzer Text in die Formularsteuerung eingibt oder die Formularsteuerung bereits einen Wert hat. Browser mit automatischen Seitenübersetzungsfunktionen können Attribute beim Übersetzen ignorieren, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das `placeholder`-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element beschriften müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten empfängt. Wenn die Daten in einem bestimmten Format vorliegen müssen, _verifiziert_ es immer auch auf der Serverseite und gibt eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Neben der Verwendung von CSS, um Eingaben basierend auf dem aktuellen Zustand der {{cssxref(":valid")}}- oder {{cssxref(":invalid")}}-UI-Zustände zu gestalten, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser eine Client-seitige Validierung bei (beabsichtigter) Formularübermittlung. Bei der Formularübermittlung, falls eine Formularsteuerung die Validierungseinschränkungen nicht besteht, zeigt der unterstützende Browser eine Fehlermeldung auf der ersten ungültigen Formularsteuerung an; entweder wird eine Standardfehlermeldung basierend auf dem Fehlertyp angezeigt oder eine durch Sie festgelegte Nachricht.

Einige Eingabetypen und andere Attribute legen Einschränkungen fest, welche Werte für eine bestimmte Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">` nur die Zahlen 2, 4, 6, 8 oder 10 sind gültig. Mehrere Fehler können auftreten, wie z.B. ein `rangeUnderflow`-Fehler, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, falls der Wert eine Zahl zwischen 2 und 10 ist, jedoch keine gerade ganze Zahl (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Wertebereich periodisch ist (d.h. bei einem maximalen möglichen Wert die Werte wieder am Anfang beginnen, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max)- und [`min`](#min)-Eigenschaften umgekehrt werden, was darauf hinweist, dass der Bereich der erlaubten Werte bei `min` beginnt, auf den niedrigsten möglichen Wert zurückgeht und dann weiter fortsetzt, bis `max` erreicht ist. Dies ist besonders nützlich für Datumsangaben und Zeiten, z.B. wenn man den Bereich von 20:00 bis 8:00 Uhr zulassen möchte:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und deren Werte können zu einem bestimmten [`ValidityState`](/de/docs/Web/API/ValidityState)-Fehler führen:

<table class="no-markdown">
  <caption>
    Gültigkeitsobjektfehler hängen von den <code>&lt;input&gt;</code>-Attributen und ihren Werten ab:
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
        Tritt auf, wenn der Wert größer ist als der Maximalwert, wie durch das <code>max</code>-Attribut definiert
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code>-Eigenschaft erlaubt
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der Minimalwert, wie durch das <code>min</code>-Attribut definiert
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code>-Eigenschaft erforderlich
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Musterattribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht damit übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> oder ein Radio oder eine Checkbox nicht ausgewählt ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schritt-Inkrement. Der Standardinkrement beträgt <code>1</code>, daher sind nur ganze Zahlen bei <code>type="number"</code> gültig, wenn step nicht enthalten ist. <code>step="any"</code> wird diesen Fehler nie werfen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, zum Beispiel eine E-Mail, die kein <code>@</code> enthält, oder eine URL, die kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn eine Formularsteuerung nicht das `required`-Attribut hat, sind kein Wert oder ein leerer String nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, wird ein leerer String nicht zu einem Fehler führen.

Wir können Grenzen festlegen, was wir akzeptieren, und unterstützende Browser validieren diese Formularwerte nativ und benachrichtigen den Benutzer über einen Fehler, wenn das Formular abgesendet wird.

Zusätzlich zu den in der Tabelle oben beschriebenen Fehlern enthält das `validityState`-Interface die booleschen schreibgeschützten Eigenschaften `badInput`, `valid` und `customError`. Das Gültigkeitsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften gibt ein Wert von `true` an, dass der angegebene Grund für das Scheitern der Validierung wahr ist, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements allen Einschränkungen gehorcht.

Wenn ein Fehler vorliegt, warnen unterstützende Browser den Benutzer und verhindern die Übermittlung des Formulars. Ein Wort der Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen wahrheitsgemäßen Wert gesetzt ist (etwas anderes als der leere String oder `null`), wird das Absenden des Formulars verhindert. Wenn es keine benutzerdefinierte Fehlermeldung gibt und keine der anderen Eigenschaften true zurückgeben, wird `valid` true sein und das Formular kann abgesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Gültigkeitsmeldung auf den leeren String setzt, ist von entscheidender Bedeutung. Wenn der Benutzer einen Fehler macht und die Gültigkeit festgelegt ist, wird es sich nicht senden lassen, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandten) Elementen verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen führen dazu, dass dies eine Standardfehlermeldung erzeugt, wenn Sie versuchen, das Formular mit entweder keinem gültigen Eingabe oder einem Wert abzusenden, der nicht dem `pattern` entspricht.

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

Das Beispiel wird so gerendert:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabeelements, jedes Mal, wenn sich sein Wert ändert, indem wir die `checkValidity()`-Methode über den `input`-Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst und die `invalid`-Ereignishandlerfunktion wird ausgeführt. In dieser Funktion ermitteln wir, ob der Wert ungültig ist, weil er leer ist, oder weil er das Muster nicht erfüllt, indem wir einen `if ()`-Block verwenden und eine benutzerdefinierte Gültigkeitsfehlermeldung setzen.
- Dadurch wird, wenn der Eingabewert ungültig ist, wenn die Sende-Taste gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er so gesendet, wie Sie es erwarten. Dazu muss die benutzerdefinierte Gültigkeit abgebrochen werden, indem `setCustomValidity()` mit einem leeren String-Wert aufgerufen wird. Wir machen das daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie das nicht tun und vorher eine benutzerdefinierte Gültigkeit festgelegt wurde, wird die Eingabe als ungültig registriert, auch wenn sie bei der Übermittlung derzeit einen gültigen Wert enthält.

> [!NOTE]
> Überprüfen Sie immer die Eingabebeschränkungen sowohl auf der Client-Seite als auch auf der Server-Seite. Die Validierung von Einschränkungen entfernt nicht den Bedarf an Validierung auf der _Server-Seite_. Ungültige Werte können immer noch von älteren Browsern oder durch böswillige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte für viele Versionen ein proprietäres Fehlerattribut — `x-moz-errormessage` —, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise festzulegen. Dies wurde ab Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die zulässigen Eingaben für bestimmte `<input>`-Typen hängen von der Spracheinstellung ab. In einigen Regionen ist 1.000,00 eine gültige Zahl, während in anderen Regionen die gültige Möglichkeit, diese Zahl einzugeben, 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Sprache zur Validierung der Benutzereingabe zu bestimmen (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut auf dem Element oder einem übergeordneten Element angegeben wird.
- Versuchen Sie die Sprache, die durch einen `Content-Language` HTTP-Header angegeben wird. Oder,
- Wenn keine angegeben ist, verwenden Sie die Spracheinstellung des Browsers.

## Barrierefreiheit

### Labels

Beim Einfügen von Eingaben ist es erforderlich, Labels hinzuzufügen. Dies ist notwendig, damit Nutzer, die unterstützende Technologien verwenden, wissen, wofür die Eingabe ist. Außerdem gibt das Klicken oder Berühren eines Labels dem Label zugeordneten Formularelement den Fokus. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erhöht den Bereich, den ein Benutzer klicken oder berühren kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radiobuttons und Checkboxen, die winzig sind. Weitere Informationen zu Labels im Allgemeinen finden Sie unter [Labels](#labels).

Das Folgende ist ein Beispiel dafür, wie Sie das `<label>` mit einem `<input>`-Element in dem oben genannten Stil verknüpfen. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert der gleiche ist wie der `id` des Eingabefeldes.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bieten, damit sie leicht aktiviert werden können. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die ungenaue Formen der Eingabe verwenden, wie einen Stift oder Finger. Eine Mindestinteraktivgröße von 44×44 [CSS-Pixel]((https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Verstehen des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verstehen der WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>, aufgelistet, versendbarer, zurücksetzbarer, formularassoziiertes Element, <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasierter Inhalt</a>. If the <a href="#type"><code>type</code></a> is not <code>hidden</code>, then labelable element, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Kein; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasierter Inhalt</a> akzeptiert.
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
                with no <code>list</code> attribute:
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                with <code>list</code> attribute: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
                with no <code>list</code> attribute: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>
              </li>
              <li>
                with <code>list</code> attribute: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
                with no <code>list</code> attribute:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                with <code>list</code> attribute: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                with no <code>list</code> attribute:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                with <code>list</code> attribute: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                with no <code>list</code> attribute:
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a ></code>
              </li>
              <li>
                with <code>list</code> attribute: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a> when used
            with <code>aria-pressed</code>,
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
            <code>type=text</code> with no <code>list</code> attribute:
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            or <code>text</code> with <code>list</code> attribute: no
            <code>role</code> permitted
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

- [Formularbeschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Anleitung zum Erstellen benutzerdefinierter Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Erstellen Vertikaler Formsteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
