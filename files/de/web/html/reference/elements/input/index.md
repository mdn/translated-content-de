---
title: Das HTML-Element `<input>`
short-title: <input>
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

Das **`<input>`**-Element von [HTML](/de/docs/Web/HTML) dient dazu, interaktive Steuerelemente für webbasierte Formulare zu erstellen, mit denen Daten von Benutzern entgegengenommen werden. Je nach Gerät und {{Glossary("user_agent", "User Agent")}} stehen zahlreiche Arten von Eingabedaten und Steuerelementen zur Verfügung. Wegen der vielen möglichen Kombinationen von Eingabetypen und Attributen ist `<input>` eines der leistungsfähigsten und komplexesten Elemente in HTML.

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

## \<input>-Typen

Wie ein `<input>` funktioniert, hängt wesentlich vom Wert seines [`type`](#type)-Attributs ab. Deshalb werden die verschiedenen Typen auf eigenen Referenzseiten behandelt. Ist dieses Attribut nicht angegeben, wird standardmäßig der Typ `text` verwendet.

Folgende Typen sind verfügbar:

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
        Eine Schaltfläche ohne Standardverhalten, die den Wert des Attributs <a href="#value"><code>value</code></a> anzeigt. Standardmäßig ist dieser Wert leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Kontrollkästchen, mit dem ein einzelner Wert ausgewählt oder abgewählt werden kann.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerelement zur Angabe einer Farbe. In unterstützenden Browsern öffnet es bei Aktivierung einen Farbwähler.
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
        Ein Steuerelement zur Eingabe eines Datums (Jahr, Monat und Tag, ohne Uhrzeit).
        In unterstützenden Browsern öffnet es bei Aktivierung einen Datumswähler oder
        numerische Auswahlräder für Jahr, Monat und Tag.
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
        Ein Steuerelement zur Eingabe von Datum und Uhrzeit ohne Zeitzone.
        In unterstützenden Browsern öffnet es bei Aktivierung einen Datumswähler
        oder numerische Auswahlräder für Datums- und Uhrzeitbestandteile.
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
        Ein Feld zur Eingabe einer E-Mail-Adresse. Es sieht wie ein
        <code>text</code>-Eingabefeld aus, bietet aber Validierungsregeln und
        auf unterstützenden Geräten eine passende dynamische Tastatur.
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
        Ein Steuerelement, mit dem Benutzer eine Datei auswählen können.
        Mit dem Attribut <a href="#accept"><code>accept</code></a> legen Sie fest, welche Dateitypen ausgewählt werden können.
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
        Server gesendet wird. In der nächsten Spalte gibt es ein Beispiel – es ist allerdings verborgen!
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
        Eine grafische <code>submit</code>-Schaltfläche. Sie zeigt ein Bild an, das durch das Attribut <code>src</code> festgelegt wird.
        Der Wert des Attributs <a href="#alt"><code>alt</code></a> wird angezeigt, wenn das Bild unter <a href="#src"><code>src</code></a> fehlt.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>Ein Steuerelement zur Eingabe von Monat und Jahr ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerelement zur Eingabe einer Zahl. Es zeigt Bedienelemente zum
        schrittweisen Ändern des Werts an und bietet eine Standardvalidierung.
        Auf manchen Geräten mit dynamischer Tastatur wird ein Ziffernblock angezeigt.
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
        Ein einzeiliges Textfeld, dessen Wert verdeckt dargestellt wird.
        Benutzer werden gewarnt, wenn die Website nicht sicher ist.
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
        Ein Optionsfeld, mit dem aus mehreren Optionen mit demselben <a href="#name"><code>name</code></a>-Wert genau eine ausgewählt werden kann.
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
        Es wird als Schieberegler dargestellt, dessen Standardwert in der Mitte liegt.
        Zusammen mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> wird der zulässige Wertebereich festgelegt.
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
        Eine Schaltfläche, die den Formularinhalt auf die Standardwerte zurücksetzt. Ihre Verwendung wird nicht empfohlen.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbrüche
        werden automatisch aus dem Eingabewert entfernt. Unterstützende Browser
        können ein Symbol zum Leeren des Felds anzeigen. Auf manchen Geräten
        mit dynamischer Tastatur erscheint statt der Eingabetaste ein Suchsymbol.
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
        Ein Steuerelement zur Eingabe einer Telefonnummer. Auf manchen Geräten
        mit dynamischer Tastatur wird eine Telefontastatur angezeigt.
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
        Der Standardtyp: ein einzeiliges Textfeld. Zeilenumbrüche werden
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
      <td>Ein Steuerelement zur Eingabe einer Uhrzeit ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Es sieht wie ein <code>text</code>-Eingabefeld
        aus, bietet aber Validierungsregeln und auf unterstützenden Geräten
        eine passende dynamische Tastatur.
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
        Ein Steuerelement zur Eingabe eines Datums aus Wochenjahr und Wochennummer, ohne Zeitzone.
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
        Ein Steuerelement zur Eingabe von Datum und Uhrzeit (Stunde, Minute, Sekunde und Sekundenbruchteile) auf Grundlage der UTC-Zeitzone.
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

Das `<input>`-Element ist vor allem wegen seiner Attribute so leistungsfähig. Das wichtigste ist das oben anhand von Beispielen beschriebene Attribut [`type`](#type). Da jedes `<input>`-Element unabhängig von seinem Typ auf der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) basiert, besitzen technisch gesehen alle dieselben Attribute. Tatsächlich wirken sich die meisten Attribute jedoch nur auf bestimmte Eingabetypen aus. Zudem hängt die Wirkung mancher Attribute vom jeweiligen Eingabetyp ab.

Dieser Abschnitt enthält zunächst eine Tabelle aller Attribute mit kurzen Beschreibungen. Anschließend werden die Attribute und die Eingabetypen, für die sie gelten, genauer erläutert. Attribute, die für die meisten oder alle Eingabetypen gelten, werden weiter unten ausführlicher beschrieben. Attribute, die nur für bestimmte Eingabetypen gelten oder bei einem bestimmten Typ ein besonderes Verhalten haben, sind dagegen auf den Referenzseiten dieser Typen dokumentiert.

Zu den Attributen des `<input>`-Elements gehören die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) sowie die folgenden:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                         |
| --------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis auf erwartete Dateitypen bei Steuerelementen zum Hochladen von Dateien                       |
| [`alpha`](#alpha)                             | `color`                                                                      | Deckkraft der Farbe                                                                                  |
| [`alt`](#alt)                                 | `image`                                                                      | `alt`-Attribut für den Typ `image`; für die Barrierefreiheit erforderlich                            |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Steuert die automatische Großschreibung eingegebenen Texts                                           |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis für die automatische Formularvervollständigung                                               |
| [`capture`](#capture)                         | `file`                                                                       | Methode zur Medienaufnahme bei Steuerelementen zum Hochladen von Dateien                             |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Gibt an, ob das Steuerelement ausgewählt ist                                                         |
| [`colorspace`](#colorspace)                   | `color`                                                                      | Der {{Glossary("Color_space", "Farbraum")}}, der zur Auswahl des Farbwerts verwendet werden soll     |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfelds, mit dem die Schreibrichtung des Elements übermittelt wird                    |
| [`disabled`](#disabled)                       | alle                                                                         | Gibt an, ob das Formularsteuerelement deaktiviert ist                                                |
| [`form`](#form)                               | alle                                                                         | Ordnet das Steuerelement einem Formularelement zu                                                    |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | URL für die Formularübermittlung                                                                     |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Kodierungstyp der bei der Formularübermittlung verwendeten Formulardaten                             |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | HTTP-Methode für die Formularübermittlung                                                            |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Umgeht die Validierung der Formularsteuerelemente bei der Übermittlung                               |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für die Formularübermittlung                                                        |
| [`height`](#height)                           | `image`                                                                      | Wie das Attribut `height` von {{htmlelement('img')}}; vertikale Abmessung                            |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des Attributs `id` des {{htmlelement('datalist')}}-Elements mit Vervollständigungsvorschlägen   |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Höchstwert                                                                                           |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) von `value`                                                      |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Mindestwert                                                                                          |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Minimale Länge (Anzahl der Zeichen) von `value`                                                      |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolesches Attribut; gibt an, ob mehrere Werte zulässig sind                                         |
| [`name`](#name)                               | alle                                                                         | Name des Formularsteuerelements; wird als Teil eines Name-Wert-Paars mit dem Formular übermittelt    |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Muster, dem `value` entsprechen muss, um gültig zu sein                                              |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der im Formularsteuerelement erscheint, solange kein Wert festgelegt ist                       |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Legt ein `<input type="button">` als Steuerelement für ein Popover-Element fest                      |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Legt fest, welche Aktion ein Popover-Steuerelement ausführen soll                                    |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolesches Attribut; der Wert kann nicht bearbeitet werden                                           |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolesches Attribut; für das Absenden muss ein Wert angegeben oder das Steuerelement ausgewählt sein |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe des Steuerelements                                                                             |
| [`src`](#src)                                 | `image`                                                                      | Wie das Attribut `src` von {{htmlelement('img')}}; Adresse der Bildressource                         |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Zulässige Wertschritte                                                                               |
| [`switch`](#switch)                           | `checkbox`                                                                   | Gibt an, ob das Kontrollkästchen als Schalter dargestellt werden soll                                |
| [`type`](#type)                               | alle                                                                         | Typ des Formularsteuerelements                                                                       |
| [`value`](#value)                             | alle außer `image`                                                           | Wert des Steuerelements; bei Angabe im HTML entspricht er dem Anfangswert                            |
| [`width`](#width)                             | `image`                                                                      | Wie das Attribut `width` von {{htmlelement('img')}}                                                  |

Nach den Beschreibungen der standardisierten Attribute werden einige zusätzliche, nicht standardisierte Attribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Das Attribut `accept` gilt nur für den Eingabetyp `file` und legt fest, welche Dateitypen in einem `file`-Steuerelement zum Hochladen ausgewählt werden können. Siehe den Eingabetyp {{HTMLElement("input/file", "file")}}.

- `alpha` {{experimental_inline}}
  - : Das Attribut `alpha` gilt nur für den Eingabetyp `color` und ermöglicht es Benutzern, die Deckkraft der ausgewählten Farbe festzulegen.

- `alt`
  - : Das Attribut `alt` gilt nur für die Schaltfläche vom Typ `image`. Es stellt einen Alternativtext für das Bild bereit, der angezeigt wird, wenn die Bilddatei unter [`src`](#src) fehlt oder nicht geladen werden kann. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.

- `autocapitalize`
  - : Steuert, ob und auf welche Weise eingegebener Text automatisch großgeschrieben wird. Weitere Informationen finden Sie auf der Seite zum globalen Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** boolesches Attribut!) Das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) erwartet eine durch Leerzeichen getrennte Zeichenfolge, die beschreibt, welche Art der automatischen Vervollständigung das Eingabefeld gegebenenfalls bieten soll. Typischerweise werden dafür zuvor in dasselbe Feld eingegebene Werte wiederverwendet; es sind aber auch komplexere Formen möglich. Beispielsweise könnte ein Browser die Kontaktliste eines Geräts verwenden, um `email`-Adressen in einem E-Mail-Eingabefeld zu vervollständigen. Zulässige Werte finden Sie unter [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value).

    Das Attribut `autocomplete` ist für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password` gültig. Es hat keine Wirkung bei Eingabetypen, die weder numerische Daten noch Text zurückgeben. Es gilt für alle Eingabetypen außer `checkbox`, `radio`, `file` und den Schaltflächentypen.

    Weitere Informationen, unter anderem zur Sicherheit von Passwörtern und dazu, wie sich `autocomplete` bei `hidden` geringfügig von anderen Eingabetypen unterscheidet, finden Sie auf der Seite zum [Attribut `autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete).

- `autofocus`
  - : Ein boolesches Attribut, das angibt, dass das Eingabefeld automatisch den Fokus erhalten soll, sobald die Seite geladen ist oder der {{HTMLElement("dialog")}}, in dem sich das Element befindet, angezeigt wurde.

    > [!NOTE]
    > Ein Element mit dem Attribut `autofocus` kann den Fokus erhalten, bevor das Ereignis [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) ausgelöst wird.

    Höchstens ein Element im Dokument darf das Attribut `autofocus` haben. Wenn es mehreren Elementen zugewiesen wird, erhält das erste dieser Elemente den Fokus.

    Das Attribut `autofocus` kann nicht für Eingabefelder vom Typ `hidden` verwendet werden, da verborgene Eingabefelder keinen Fokus erhalten können.

    > [!WARNING]
    > Das automatische Fokussieren eines Formularsteuerelements kann Menschen mit Sehbehinderungen, die Screenreader verwenden, sowie Menschen mit kognitiven Beeinträchtigungen verwirren. Bei Verwendung von `autofocus` versetzen Screenreader ihre Benutzer ohne vorherige Ankündigung direkt zum Formularsteuerelement.

    Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie `autofocus` verwenden. Das automatische Fokussieren eines Steuerelements kann dazu führen, dass die Seite beim Laden scrollt. Auf manchen Touch-Geräten kann dadurch außerdem die Bildschirmtastatur eingeblendet werden. Ein Screenreader liest zwar die Beschriftung des fokussierten Formularsteuerelements vor, kündigt davor aber nichts an. Auch sehenden Benutzern kleiner Geräte kann dadurch der Kontext aus den vorhergehenden Inhalten entgehen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Das Attribut `capture` wurde in der HTML-Media-Capture-Spezifikation eingeführt und gilt nur für den Eingabetyp `file`. Es legt fest, welches Medium – Mikrofon, Video oder Kamera – in unterstützten Szenarien verwendet werden soll, um eine neue Datei für den Upload über das `file`-Steuerelement aufzunehmen. Siehe den Eingabetyp {{HTMLElement("input/file", "file")}}.
- `checked`
  - : `checked` ist ein boolesches Attribut für die Typen `radio` und `checkbox`. Bei `radio` gibt es an, dass das Optionsfeld innerhalb der Gruppe gleichnamiger Optionsfelder ausgewählt ist. Bei `checkbox` gibt es an, dass das Kontrollkästchen beim Laden der Seite standardmäßig ausgewählt ist. Es zeigt _nicht_ an, ob das Kontrollkästchen aktuell ausgewählt ist: Ändert sich dessen Zustand, wird diese Änderung nicht im HTML-Attribut widergespiegelt. (Nur das [IDL-Attribut `checked` von `HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Anders als bei anderen Eingabesteuerelementen werden die Werte von Kontrollkästchen und Optionsfeldern nur dann in die übermittelten Daten aufgenommen, wenn sie aktuell `checked` sind. In diesem Fall werden Name und Wert der ausgewählten Steuerelemente übermittelt.
    >
    > Hat beispielsweise ein Kontrollkästchen den `name`-Wert `fruit` und den `value`-Wert `cherry` und ist es ausgewählt, enthalten die übermittelten Formulardaten `fruit=cherry`. Ist es nicht ausgewählt, erscheint es überhaupt nicht in den Formulardaten. Der Standardwert von `value` ist bei Kontrollkästchen und Optionsfeldern `on`.

- `colorspace` {{experimental_inline}}
  - : Das Attribut `colorspace` gilt nur für den Eingabetyp `color` und legt den {{Glossary("Color_space", "Farbraum")}} fest, den das Eingabefeld `type="color"` verwendet. Mögliche {{Glossary("enumerated", "Aufzählungswerte")}} sind:
    - `"limited-srgb"`: Die Farbe liegt im {{Glossary("RGB", "sRGB-Farbraum")}}. Dazu gehören Werte von {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}} und {{cssxref("hex-color")}}. Der Farbwert ist auf 8 Bit pro `r`-, `g`- und `b`-Komponente begrenzt. Dies ist der Standardwert.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display-P3-Farbraum")}}, beispielsweise `color(display-p3 1.84 -0.19 0.72 / 0.6)`.

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Das Attribut `dirname` gilt für die Eingabetypen `hidden`, `text`, `search`, `url`, `tel` und `email`. Es ermöglicht, die Schreibrichtung des Elements mit dem Formular zu übermitteln. Ist es vorhanden, übermittelt das Formularsteuerelement zwei Name-Wert-Paare: Das erste besteht aus [`name`](#name) und [`value`](#value). Beim zweiten ist der Wert des Attributs `dirname` der Name und die vom Browser festgelegte Schreibrichtung `ltr` oder `rtl` der Wert.

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

    Beim Absenden des obigen Formulars werden sowohl das Paar aus `name` und `value`, `fruit=cherry`, als auch das Paar aus `dirname` und Schreibrichtung, `fruit-dir=ltr`, gesendet.
    Weitere Informationen finden Sie unter [Attribut `dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein boolesches Attribut, das angibt, dass Benutzer nicht mit dem Eingabefeld interagieren können. Deaktivierte Eingabefelder werden üblicherweise ausgegraut oder auf andere Weise als nicht verfügbar gekennzeichnet.

    Deaktivierte Eingabefelder empfangen insbesondere kein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis und werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl die Spezifikation dies nicht verlangt, [speichert Firefox den dynamisch gesetzten Deaktivierungszustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` standardmäßig über das erneute Laden der Seite hinweg. Mit dem Attribut [`autocomplete`](#autocomplete) können Sie dieses Verhalten steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Eine Zeichenfolge, die das {{HTMLElement("form")}}-Element angibt, dem das Eingabefeld zugeordnet ist, also sein **übergeordnetes Formular**. Ist ein Wert vorhanden, muss er mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Fehlt das Attribut, ist das `<input>`-Element gegebenenfalls dem nächstgelegenen umschließenden Formular zugeordnet.

    Mit dem Attribut `form` können Sie ein Eingabefeld an beliebiger Stelle im Dokument platzieren und dennoch einem Formular an anderer Stelle zuordnen.

    > [!NOTE]
    > Ein Eingabefeld kann nur einem Formular zugeordnet sein.

- `formaction`
  - : Gilt nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formenctype`
  - : Gilt nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formmethod`
  - : Gilt nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formnovalidate`
  - : Gilt nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formtarget`
  - : Gilt nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `height`
  - : Gilt nur für die Eingabeschaltfläche vom Typ `image`. `height` gibt die Höhe der Bilddatei an, die als grafische Schaltfläche zum Absenden angezeigt wird. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.
- `id`
  - : Dieses globale Attribut gilt für alle Elemente einschließlich aller Eingabetypen. Es legt eine Kennung (ID) fest, die im gesamten Dokument eindeutig sein muss. Sie dient dazu, das Element bei Verknüpfungen zu identifizieren. Ihr Wert wird als Wert des Attributs `for` eines {{htmlelement('label')}} verwendet, um die Beschriftung mit dem Formularsteuerelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Dieses globale Attribut gilt für alle Elemente und gibt Browsern einen Hinweis darauf, welche Bildschirmtastatur beim Bearbeiten des Elements oder seines Inhalts verwendet werden soll. Mögliche Werte sind `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der Wert des Attributs `list` sollte der [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument entsprechen. Das `<datalist>` enthält vordefinierte Werte, die Benutzern für dieses Eingabefeld vorgeschlagen werden. Werte, die nicht mit dem [`type`](#type) kompatibel sind, erscheinen nicht unter den Vorschlägen. Es handelt sich um Vorschläge, nicht um Vorgaben: Benutzer können einen Wert aus der Liste wählen oder einen anderen eingeben.

    Das Attribut gilt für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut Spezifikation wird `list` von `hidden`, `password`, `checkbox`, `radio`, `file` und den Schaltflächentypen nicht unterstützt.

    Je nach Browser wird möglicherweise eine vorgeschlagene Farbpalette, eine Skala entlang eines Schiebereglers oder ein Eingabefeld angezeigt, das sich wie ein {{HTMLElement("select")}} öffnet, aber auch nicht aufgeführte Werte zulässt. Informationen zu den anderen Eingabetypen finden Sie in der [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility).

    Siehe das Element {{htmlelement('datalist')}}.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gilt für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range` und legt den größten zulässigen Wert fest. Überschreitet der im Element eingegebene [`value`](#value) diesen Wert, besteht das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht. Ist der Wert von `max` keine Zahl, hat das Element keinen Höchstwert.

    Es gibt einen Sonderfall: Bei periodischen Datentypen wie Datums- oder Uhrzeitwerten darf `max` kleiner als `min` sein. Das bedeutet, dass der Bereich über seinen Anfang hinausreichen kann. So lässt sich beispielsweise ein Zeitbereich von 22:00 Uhr bis 04:00 Uhr angeben.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gilt für `text`, `search`, `url`, `tel`, `email` und `password` und legt die maximale Länge der Zeichenfolge fest, die Benutzer in das Feld eingeben können, gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}. Der Wert muss eine ganze Zahl ab 0 sein. Fehlt `maxlength` oder ist sein Wert ungültig, hat das Feld keine maximale Länge. Der Wert muss außerdem mindestens so groß wie `minlength` sein.

    Überschreitet die Länge des eingegebenen Texts `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}, besteht das Eingabefeld die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als `maxlength` erlaubt. Die Einschränkungsvalidierung wird nur angewendet, wenn Benutzer den Wert ändern. Weitere Informationen finden Sie unter [Clientseitige Validierung](#clientseitige_validierung).

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gilt für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range` und legt den kleinsten zulässigen Wert fest. Liegt der im Element eingegebene [`value`](#value) darunter, besteht das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht. Ist der Wert von `min` keine Zahl, hat das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem Wert von `max` sein. Ist `min` vorhanden, aber ohne Wert oder mit einem ungültigen Wert angegeben, wird kein Mindestwert angewendet. Ist `min` gültig und ein nicht leerer Eingabewert kleiner als der zulässige Mindestwert, verhindert die Einschränkungsvalidierung das Absenden des Formulars. Weitere Informationen finden Sie unter [Clientseitige Validierung](#clientseitige_validierung).

    Es gibt einen Sonderfall: Bei periodischen Datentypen wie Datums- oder Uhrzeitwerten darf `max` kleiner als `min` sein. Das bedeutet, dass der Bereich über seinen Anfang hinausreichen kann. So lässt sich beispielsweise ein Zeitbereich von 22:00 Uhr bis 04:00 Uhr angeben.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gilt für `text`, `search`, `url`, `tel`, `email` und `password` und legt die minimale Länge der Zeichenfolge fest, die Benutzer in das Feld eingeben können, gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}. Der Wert muss eine nicht negative ganze Zahl sein, die kleiner oder gleich `maxlength` ist. Fehlt `minlength` oder ist sein Wert ungültig, hat das Eingabefeld keine Mindestlänge.

    Unterschreitet die Länge des eingegebenen Texts `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}, besteht das Eingabefeld die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht und das Formular kann nicht abgesendet werden. Die Einschränkungsvalidierung wird nur angewendet, wenn Benutzer den Wert ändern. Weitere Informationen finden Sie unter [Clientseitige Validierung](#clientseitige_validierung).

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Ist das boolesche Attribut `multiple` gesetzt, können Benutzer im `email`-Feld mehrere durch Kommas getrennte E-Mail-Adressen eingeben oder im `file`-Eingabefeld mehrere Dateien auswählen. Siehe die Eingabetypen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}}.

- `name`
  - : Eine Zeichenfolge, die den Namen des Eingabesteuerelements angibt. Dieser Name wird beim Absenden der Formulardaten zusammen mit dem Wert des Steuerelements übermittelt.

    Betrachten Sie `name` als erforderliches Attribut, auch wenn es formal nicht erforderlich ist. Wenn für ein Eingabefeld kein `name` angegeben ist oder `name` leer ist, wird sein Wert nicht mit dem Formular übermittelt. Deaktivierte Steuerelemente, nicht ausgewählte Optionsfelder und Kontrollkästchen sowie Schaltflächen zum Zurücksetzen werden ebenfalls nicht übermittelt.

    Es gibt zwei Sonderfälle:
    1. `_charset_`: Wird dieser Wert als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet, setzt der {{Glossary("user_agent", "User Agent")}} dessen `value` automatisch auf die für die Formularübermittlung verwendete Zeichenkodierung.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht zulässig.

    Bei Optionsfeldern führt das Attribut [`name`](#name) zu einem besonderen Verhalten.

    Innerhalb einer Gruppe gleichnamiger Optionsfelder kann jeweils nur eines ausgewählt sein. Wenn Sie ein anderes Optionsfeld derselben Gruppe auswählen, wird das zuvor ausgewählte automatisch abgewählt. Beim Absenden des Formulars wird der Wert des ausgewählten Optionsfelds zusammen mit dem Namen übermittelt.

    Wenn Sie mit der Tabulatortaste zu einer Gruppe gleichnamiger Optionsfelder navigieren und eines davon ausgewählt ist, erhält dieses den Fokus. Stehen die Optionsfelder im Quelltext nicht direkt nebeneinander, wird die Gruppe beim ersten Optionsfeld erreicht; nicht ausgewählte Felder werden dabei übersprungen. Ist kein Feld ausgewählt, erhält das erste Optionsfeld der gleichnamigen Gruppe den Fokus.

    Sobald eines der Optionsfelder einer Gruppe den Fokus hat, können Sie mit den Pfeiltasten zwischen allen gleichnamigen Optionsfeldern navigieren, auch wenn sie im Quelltext nicht direkt nebeneinanderstehen.

    Erhält ein Eingabeelement einen `name`, wird dieser Name zu einer Eigenschaft von [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) des zugehörigen Formulars. Wenn Sie ein Eingabefeld mit `name="guest"` und ein weiteres mit `name="hat-size"` haben, können Sie folgenden Code verwenden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Nach Ausführung dieses Codes enthält `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das Feld `guest` und `hatSize` das Objekt für das Feld `hat-size`.

    > [!WARNING]
    > Geben Sie Formularelementen keinen `name`, der einer integrierten Eigenschaft des Formulars entspricht. Andernfalls überschreiben Sie die vordefinierte Eigenschaft oder Methode mit einer Referenz auf das entsprechende Eingabefeld.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Das Attribut `pattern` gilt für `text`, `search`, `url`, `tel`, `email` und `password`. Daraus wird ein regulärer Ausdruck kompiliert, dem der [`value`](#value) des Eingabefelds entsprechen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss sich um einen gültigen regulären JavaScript-Ausdruck handeln, wie ihn der Typ {{jsxref("RegExp")}} verwendet und wie er in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Setzen Sie keine Schrägstriche um den Mustertext. Beim Kompilieren des regulären Ausdrucks gilt:
    1. Das Muster wird implizit mit `^(?:` und `)$` umschlossen. Dadurch muss der _gesamte_ Eingabewert übereinstimmen, also `^(?:<pattern>)$`.
    2. Das Flag `'v'` wird gesetzt, damit das Muster als Folge von Unicode-Codepunkten statt als {{Glossary("ASCII", "ASCII")}} behandelt wird.

    Ist `pattern` vorhanden, aber ohne Wert oder mit einem ungültigen Wert angegeben, wird kein regulärer Ausdruck angewendet und das Attribut vollständig ignoriert. Ist das Muster gültig und ein nicht leerer Wert entspricht ihm nicht, verhindert die Einschränkungsvalidierung das Absenden des Formulars. Ist [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden, wird der kompilierte reguläre Ausdruck auf jeden durch Kommas getrennten Wert angewendet.

    > [!NOTE]
    > Wenn Sie `pattern` verwenden, erläutern Sie das erwartete Format in einem Text in der Nähe des Eingabefelds. Sie können zusätzlich ein Attribut [`title`](#title) angeben, das die Anforderungen des Musters beschreibt; die meisten Browser zeigen dessen Wert als Tooltip an. Die sichtbare Erläuterung ist für die Barrierefreiheit erforderlich. Der Tooltip ist lediglich eine Ergänzung.

    Weitere Informationen finden Sie unter [Clientseitige Validierung](#clientseitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Das Attribut `placeholder` gilt für `text`, `search`, `url`, `tel`, `email`, `password` und `number`. Es gibt Benutzern einen kurzen Hinweis darauf, welche Informationen im Feld erwartet werden. Der Hinweis sollte aus einem Wort oder einer kurzen Formulierung zum erwarteten Datentyp bestehen, nicht aus einer ausführlichen Erklärung oder Aufforderung. Der Text darf _keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Soll ein Feld beispielsweise den Vornamen erfassen und lautet seine Beschriftung „Vorname“, wäre „z. B. Mustafa“ ein geeigneter Platzhalter.

    > [!NOTE]
    > Das Attribut `placeholder` ist semantisch weniger hilfreich als andere Möglichkeiten, ein Formular zu erläutern, und kann unerwartete technische Probleme verursachen. Weitere Informationen finden Sie unter [Beschriftungen](#beschriftungen).

- `popovertarget`
  - : Macht ein `<input type="button">`-Element zu einer Schaltfläche zur Steuerung eines Popovers. Als Wert wird die ID des zu steuernden Popover-Elements angegeben. Weitere Informationen finden Sie auf der Übersichtsseite zur [Popover API](/de/docs/Web/API/Popover_API). Die Verknüpfung eines Popovers mit seiner auslösenden Schaltfläche über `popovertarget` hat zwei weitere nützliche Auswirkungen:
    - Der Browser stellt implizit eine Beziehung über [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) zwischen Popover und auslösender Schaltfläche her. Wenn das Popover angezeigt wird, ordnet er es außerdem an einer logischen Stelle in der Tastatur-Fokusreihenfolge ein. Das verbessert die Zugänglichkeit für Benutzer von Tastaturen und unterstützenden Technologien (siehe auch [Barrierefreiheitsfunktionen von Popovers](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen beiden Elementen. Dadurch lassen sich Popovers bequem mithilfe der [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) relativ zu ihren Steuerelementen platzieren. Weitere Informationen finden Sie unter [Ankerpositionierung von Popovers](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Legt fest, welche Aktion ein `<input type="button">`-Steuerelement für das zugehörige Popover ausführt. Mögliche Werte sind:
    - `"hide"`
      - : Die Schaltfläche verbirgt ein sichtbares Popover. Ist das Popover bereits verborgen, geschieht nichts.
    - `"show"`
      - : Die Schaltfläche zeigt ein verborgenes Popover an. Ist das Popover bereits sichtbar, geschieht nichts.
    - `"toggle"`
      - : Die Schaltfläche wechselt zwischen dem sichtbaren und dem verborgenen Zustand des Popovers. Ist es verborgen, wird es angezeigt; ist es sichtbar, wird es verborgen. Wenn `popovertargetaction` fehlt, ist `"toggle"` die Standardaktion.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein boolesches Attribut, das angibt, dass Benutzer den Wert des Eingabefelds nicht bearbeiten können. `readonly` wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Weitere Informationen finden Sie unter [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein boolesches Attribut. Ist es vorhanden, müssen Benutzer einen Wert für das Eingabefeld angeben, bevor das zugehörige Formular abgesendet werden kann. Unterstützt wird es von Eingabefeldern der Typen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file`.

    Weitere Informationen finden Sie unter [Clientseitige Validierung](#clientseitige_validierung) und [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required).

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Das Attribut `size` gilt für `email`, `password`, `tel`, `url` und `text` und legt fest, wie groß das Eingabefeld dargestellt wird. Im Wesentlichen ähnelt das Ergebnis dem Setzen der CSS-Eigenschaft {{cssxref("width")}}, allerdings gibt es einige Besonderheiten. Die Einheit hängt vom Eingabetyp ab. Bei `password` und `text` entspricht der Wert einer Anzahl von Zeichen beziehungsweise `em`-Einheiten; der Standardwert ist `20`. Bei den anderen Typen sind es Pixel beziehungsweise `px`-Einheiten. Die CSS-Eigenschaft `width` hat Vorrang vor `size`.

- `src`
  - : Gilt nur für die Eingabeschaltfläche vom Typ `image`. `src` ist eine Zeichenfolge mit der URL der Bilddatei, die als grafische Schaltfläche zum Absenden angezeigt wird. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Das Attribut [`step`](/de/docs/Web/HTML/Reference/Attributes/step) gilt für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`. Es ist eine Zahl, die die zulässige Schrittweite festlegt. Gültig sind nur Werte, die um eine ganze Anzahl von Schritten vom Ausgangswert entfernt sind. Als Ausgangswert dient [`min`](/de/docs/Web/HTML/Reference/Attributes/min), falls angegeben, andernfalls [`value`](#value), oder `0`, wenn keines der beiden Attribute vorhanden ist. Eine Ausnahme bildet `week`: Hier ist der standardmäßige Ausgangswert −259.200.000, was dem Beginn der Woche `1970-W01` entspricht.

    Wird `step` nicht ausdrücklich angegeben:
    - Für `number` und `range` ist der Standardwert von `step` 1.
    - Jeder Datums- und Uhrzeit-Eingabetyp hat einen passenden Standardwert für `step`. Siehe die jeweiligen Referenzseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl – ganzzahlig oder als Gleitkommazahl – oder der besondere Wert `any` sein. `any` bedeutet, dass keine Schrittweite vorgegeben ist und jeder Wert zulässig ist, sofern keine anderen Einschränkungen wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) entgegenstehen.

    Bei `<input type="number" min="10" step="2">` ist beispielsweise jede gerade ganze Zahl ab `10` gültig. Wird `step` wie bei `<input type="number">` weggelassen, sind alle ganzen Zahlen gültig, Gleitkommazahlen wie `4.2` jedoch nicht, da `step` standardmäßig `1` ist. Damit `4.2` gültig ist, müsste `step` auf `any`, 0.1 oder 0.2 gesetzt sein, oder `min` müsste auf eine Zahl mit der Nachkommastelle `.2` gesetzt werden, etwa `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die von Benutzern eingegebenen Daten nicht der festgelegten Schrittweite entsprechen, gilt der Wert bei der Einschränkungsvalidierung als ungültig und entspricht der Pseudoklasse `:invalid`.

    Weitere Informationen finden Sie unter [Clientseitige Validierung](#clientseitige_validierung).

- [`switch`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#switch) {{experimental_inline}} {{non-standard_inline}}
  - : Das boolesche Attribut `switch` gilt nur für `checkbox`-Eingabefelder und gibt an, ob das Kontrollkästchen als Schalter dargestellt werden soll.

    > [!NOTE]
    > Dieses Attribut ist noch experimentell und wird nur von wenigen Browsern unterstützt. Nicht unterstützende Browser ignorieren es.

- `tabindex`
  - : Dieses globale ganzzahlige Attribut gilt für alle Elemente einschließlich aller Eingabetypen. Es gibt an, ob ein Element den Fokus erhalten und an der sequenziellen Tastaturnavigation teilnehmen kann. Da alle Eingabetypen außer `hidden` fokussierbar sind, sollte dieses Attribut nicht für Formularsteuerelemente verwendet werden. Andernfalls müssten Sie die Fokusreihenfolge sämtlicher Elemente im Dokument verwalten und könnten bei Fehlern Bedienbarkeit und Barrierefreiheit beeinträchtigen.

- `title`
  - : Dieses globale Attribut gilt für alle Elemente einschließlich aller Eingabetypen. Es enthält einen Text mit ergänzenden Informationen über das Element. Solche Informationen können Benutzern üblicherweise, aber nicht zwingend, als Tooltip angezeigt werden. `title` sollte **NICHT** als wichtigste Erklärung für den Zweck eines Formularsteuerelements dienen. Verwenden Sie stattdessen ein {{htmlelement('label')}}-Element, dessen Attribut `for` auf die [`id`](#id) des Formularsteuerelements gesetzt ist. Siehe [Beschriftungen](#beschriftungen) weiter unten.

- `type`
  - : Eine Zeichenfolge, die den darzustellenden Steuerelementtyp angibt. Um beispielsweise ein Kontrollkästchen zu erstellen, verwenden Sie den Wert `checkbox`. Fehlt das Attribut oder ist der Wert unbekannt, wird `text` verwendet und ein einfaches Textfeld erstellt.

    Die zulässigen Werte sind oben unter [Eingabetypen](#input_types) aufgeführt.

- `value`
  - : Der Wert des Eingabesteuerelements. Wird er im HTML angegeben, ist er der Anfangswert. Anschließend lässt er sich jederzeit über die Eigenschaft `value` des entsprechenden [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts mit JavaScript ändern oder abrufen. Das Attribut `value` ist immer optional, sollte bei `checkbox`, `radio` und `hidden` jedoch als erforderlich betrachtet werden.

- `webkitdirectory`
  - : Das boolesche Attribut `webkitdirectory` gibt an, dass Benutzer in der Dateiauswahl nur Verzeichnisse auswählen können. Weitere Einzelheiten und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

    > [!NOTE]
    > `webkitdirectory` ist in der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) definiert. Der Name stammt daher, dass es ursprünglich eine Chrome-spezifische API war. Mittlerweile ist es in allen Browsern verfügbar.

- `width`
  - : Gilt nur für die Eingabeschaltfläche vom Typ `image`. `width` gibt die Breite der Bilddatei an, die als grafische Schaltfläche zum Absenden angezeigt wird. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.

### Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind ebenfalls in einigen Browsern verfügbar. Grundsätzlich sollten Sie sie nur verwenden, wenn es sich nicht vermeiden lässt.

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
        Gibt an, ob wiederholt <a href="/de/docs/Web/API/HTMLInputElement/search_event"><code>search</code></a>-Ereignisse gesendet werden, damit Suchergebnisse bereits aktualisiert werden können, während Benutzer den Feldwert bearbeiten.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenfolge, die angibt, welche Aktion ausgeführt wird, wenn Benutzer
        beim Bearbeiten des Felds <kbd>Enter</kbd> oder <kbd>Return</kbd> drücken.
        Daraus wird eine passende Beschriftung für die Taste auf einer
        Bildschirmtastatur bestimmt. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Ausrichtung des Schiebereglers fest. <strong>Nur Firefox.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Einträgen, die in der Dropdown-Liste früherer Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das boolesche Attribut `incremental` ist eine Erweiterung von WebKit und Blink und wird daher unter anderem von Safari, Opera und Chrome unterstützt. Ist es vorhanden, weist es den {{Glossary("user_agent", "User Agent")}} an, die Eingabe als Live-Suche zu behandeln. Während Benutzer den Feldwert bearbeiten, sendet der User Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt des Suchfelds. So kann Ihr Code die Suchergebnisse während der Eingabe in Echtzeit aktualisieren.

    Fehlt `incremental`, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn Benutzer ausdrücklich eine Suche starten, beispielsweise indem sie beim Bearbeiten des Felds <kbd>Enter</kbd> oder <kbd>Return</kbd> drücken.

    Die Häufigkeit des `search`-Ereignisses ist begrenzt: Es wird nicht öfter als in einem von der Implementierung festgelegten Zeitabstand gesendet.

- `orient` {{non-standard_inline}}
  - : Ähnlich wie die nicht standardisierte CSS-Eigenschaft `-moz-orient`, die sich auf die Elemente {{htmlelement('progress')}} und {{htmlelement('meter')}} auswirkt, legt das Attribut `orient` die Ausrichtung des Schiebereglers fest. Mögliche Werte sind `horizontal` für eine waagerechte und `vertical` für eine senkrechte Darstellung. Einen modernen Ansatz für senkrechte Formularsteuerelemente finden Sie unter [Senkrechte Formularsteuerelemente erstellen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls).

- `results` {{non-standard_inline}}
  - : Mit dem nur von Safari unterstützten numerischen Attribut `results` können Sie die maximale Anzahl der Einträge überschreiben, die im browserseitigen Dropdown-Menü des `<input>`-Elements mit früheren Suchanfragen angezeigt werden.

    Der Wert muss eine nicht negative Dezimalzahl sein. Fehlt er oder ist er ungültig, verwendet der Browser seine standardmäßige Höchstzahl.

## Methoden

Die folgenden Methoden stellt die Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) bereit, die `<input>`-Elemente im DOM repräsentiert. Zusätzlich sind die Methoden der übergeordneten Schnittstellen [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) verfügbar.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht. Andernfalls gibt die Methode `false` zurück und löst am Element ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht. Andernfalls gibt die Methode `false` zurück, löst am Element ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis aus und meldet Benutzern das Problem, sofern das Ereignis nicht abgebrochen wird.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, sofern dessen Inhalt auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt, etwa einem grafischen Farbwähler oder einer Datumsauswahl, hat die Methode keine Wirkung.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Meldung fest, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Ersetzt den Inhalt eines angegebenen Zeichenbereichs im Eingabeelement durch eine Zeichenfolge. Mit dem Parameter `selectMode` lässt sich steuern, wie sich dies auf die bestehende Auswahl auswirkt.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt einen angegebenen Zeichenbereich innerhalb eines Texteingabeelements aus. Bei Eingabefeldern, die nicht als Textfelder dargestellt werden, hat die Methode keine Wirkung.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt die browserseitige Auswahloberfläche des Eingabeelements an, die normalerweise bei dessen Auswahl erscheint, hier jedoch durch einen Schaltflächenklick oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert eines numerischen Eingabefelds standardmäßig um einen Schritt oder um die angegebene Anzahl von Schritten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert eines numerischen Eingabefelds um einen Schritt oder um die angegebene Anzahl von Schritten.

## CSS

Eingabefelder sind ersetzte Elemente und besitzen daher einige Eigenschaften, die nicht für andere Elemente als Formularelemente gelten. CSS-Selektoren können Formularsteuerelemente anhand von Merkmalen ihrer Benutzeroberfläche gezielt auswählen; diese Selektoren werden auch UI-Pseudoklassen genannt. Eingabeelemente lassen sich außerdem anhand ihres Typs mit Attributselektoren auswählen. Daneben sind einige CSS-Eigenschaften besonders nützlich.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Für das Element <code>&#x3C;input></code>
    relevante Pseudoklassen:
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
        Jedes aktuell aktivierte Element, das benutzt werden kann – etwa durch Auswählen,
        Anklicken oder Eingeben – oder den Fokus erhalten kann und außerdem einen
        deaktivierten Zustand besitzt, in dem dies nicht möglich ist.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes aktuell deaktivierte Element, das auch einen aktivierten Zustand besitzt
        und ohne die Deaktivierung benutzt werden oder den Fokus erhalten könnte.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Ein Element, das Benutzer nicht bearbeiten können.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Ein Element, das Benutzer bearbeiten können.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Ein Element, das gerade <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt.
        Dazu gehören <code>&#x3C;input></code>- und {{HTMLElement("textarea")}}-Elemente
        mit dem Attribut <a href="#placeholder"><code>placeholder</code></a>, denen noch kein Wert zugewiesen wurde.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die innerhalb einer Gruppe zusammengehöriger Elemente die Standardauswahl sind.
        Entspricht Eingabetypen {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}}, die beim Laden oder Darstellen der Seite ausgewählt waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht aktuell ausgewählten Eingabetypen {{HTMLElement("input/checkbox", "checkbox")}}
        und {{HTMLElement("input/radio", "radio")}} sowie einem aktuell ausgewählten
        {{HTMLElement("option")}} in einem {{HTMLElement("select")}}.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren Eigenschaft für den
        unbestimmten Zustand durch JavaScript auf true gesetzt wurde;
        {{HTMLElement("input/radio", "radio")}}-Elemente, wenn kein Optionsfeld
        mit demselben Namen im Formular ausgewählt ist; sowie
        {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularsteuerelemente, für die eine Einschränkungsvalidierung möglich ist und
        die aktuell gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularsteuerelemente, für die eine Einschränkungsvalidierung gilt und
        die aktuell ungültig sind. Entspricht einem Formularsteuerelement, dessen
        Wert die durch Attribute wie <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und
        <a href="#max"><code>max</code></a> festgelegten Einschränkungen nicht erfüllt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht leeres Eingabefeld, dessen aktueller Wert innerhalb der durch
        <a href="#min"><code>min</code></a>, <a href="#max"><code>max</code></a>
        und <a href="#step"><code>step</code></a> festgelegten Grenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht leeres Eingabefeld, dessen aktueller Wert NICHT innerhalb der
        durch <a href="#min"><code>min</code></a> und
        <a href="#max"><code>max</code></a> festgelegten Grenzen liegt oder
        die Einschränkung durch <a href="#step"><code>step</code></a> nicht erfüllt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        Ein <code>&#x3C;input></code>-, {{HTMLElement("select")}}- oder
        {{HTMLElement("textarea")}}-Element mit dem Attribut
        <a href="#required"><code>required</code></a>.
        Entspricht nur Elementen, für die eine Pflichtangabe möglich ist.
        Bei anderen Elementen führt das Attribut nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        Ein <code>&#x3C;input></code>-, {{HTMLElement("select")}}- oder
        {{HTMLElement("textarea")}}-Element ohne das Attribut
        <a href="#required"><code>required</code></a>.
        Entspricht nicht Elementen, für die eine Pflichtangabe unmöglich ist.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code>- und {{HTMLElement("textarea")}}-Elemente,
        die aktuell keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, wird aber nach einer Benutzerinteraktion
        aktiviert. Entspricht einer ungültigen Eingabe erst, nachdem Benutzer
        beispielsweise das Steuerelement fokussiert und wieder verlassen oder
        versucht haben, das Formular mit dem ungültigen Steuerelement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die eine Auswahloberfläche für einen
        Wert anzeigen, beispielsweise <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a> –
        allerdings nur, solange das Element geöffnet ist und die Auswahloberfläche angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Die Beschriftung eines Kontrollkästchens lässt sich abhängig davon gestalten, ob das Kästchen ausgewählt ist. In diesem Beispiel legen wir {{cssxref('color')}} und {{cssxref('font-weight')}} für das {{htmlelement('label')}} fest, das unmittelbar auf ein ausgewähltes Eingabefeld folgt. Ist `input` nicht ausgewählt, werden keine Stile angewendet.

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

Mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) können Sie Formularsteuerelemente anhand ihres [`type`](#type) auswählen. CSS-Attributselektoren stimmen mit Elementen überein, wenn ein Attribut vorhanden ist oder einen bestimmten Wert hat.

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

Standardmäßig erscheint Platzhaltertext halbtransparent oder hellgrau. Das Pseudoelement {{cssxref('::placeholder')}} repräsentiert den [`placeholder`-Text](#placeholder) eines Eingabefelds. Es lässt sich mit einer begrenzten Auswahl von CSS-Eigenschaften gestalten.

```css
::placeholder {
  color: blue;
}
```

In einer Regel mit `::placeholder` im Selektor können nur die CSS-Eigenschaften verwendet werden, die auch für das Pseudoelement {{cssxref("::first-line")}} gelten.

### caret-color

Die CSS-Eigenschaft {{cssxref("caret-color")}} ist besonders für Elemente zur Texteingabe relevant. Mit ihr legen Sie die Farbe des Texteingabecursors fest:

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

Mit der Eigenschaft {{cssxref("field-sizing")}} steuern Sie, wie die Größe von Formulareingabefeldern bestimmt wird. Standardmäßig erhalten sie eine bevorzugte Größe. Mit dieser Eigenschaft können Sie das Standardverhalten überschreiben, sodass sich die Größe der Formularsteuerelemente an ihren Inhalt anpasst.

Typischerweise wird die Eigenschaft verwendet, um Formularfelder zu erstellen, die sich zunächst eng an ihren Inhalt anschmiegen und mit zusätzlichem Text wachsen. Das funktioniert mit Eingabetypen für direkte Texteingaben, etwa [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url), mit dem Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) sowie mit {{htmlelement("textarea")}}-Elementen.

### object-position und object-fit

In bestimmten Fällen, üblicherweise bei nicht textbasierten Eingaben und spezialisierten Oberflächen, ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Dann lassen sich seine Größe und Position innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} anpassen.

### Gestaltung

Weitere Informationen zum Einfärben von HTML-Elementen finden Sie unter:

- [Farben mit CSS auf HTML-Elemente anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color).

Siehe auch:

- [HTML-Formulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Zusätzliche Funktionen

### Beschriftungen

Beschriftungen werden benötigt, um ein `<input>` mit erläuterndem Text zu verknüpfen. Das Element {{HTMLElement("label")}} stellt Informationen zu einem Formularfeld bereit, die – abgesehen von möglichen Layoutaspekten – _immer_ sinnvoll sind. Es ist stets empfehlenswert, mit einem `<label>` zu erläutern, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugeordnete Beschriftungen

Die semantische Verknüpfung von `<input>`- und `<label>`-Elementen hilft unterstützenden Technologien wie Screenreadern. Wenn Sie beide über das Attribut [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) von `<label>` verbinden, können Screenreader das Eingabefeld genauer beschreiben.

Einfacher Text neben dem `<input>`-Element reicht nicht aus. Für Bedienbarkeit und Barrierefreiheit ist stattdessen ein implizit oder explizit zugeordnetes {{HTMLElement("label")}} erforderlich:

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

Das erste Beispiel ist nicht barrierefrei: Zwischen der Aufforderung und dem `<input>`-Element besteht keine Verknüpfung.

Eine Beschriftung stellt nicht nur einen zugänglichen Namen bereit, sondern vergrößert auch die Fläche, die Benutzer mit der Maus anklicken oder auf einem Touchscreen berühren können. Ist ein `<label>` mit einem `<input>` verknüpft, fokussiert ein Klick auf eines der beiden das `<input>`. Bei einfachem Text, der nur als Beschriftung dienen soll, geschieht das nicht. Eine größere Aktivierungsfläche ist besonders für Menschen mit motorischen Einschränkungen hilfreich.

Als Webentwickler sollten wir niemals voraussetzen, dass andere Menschen alles wissen, was wir wissen. Die Vielfalt der Menschen, die das Web und damit auch Ihre Website nutzen, bedeutet praktisch zwangsläufig, dass manche Besucher aufgrund anderer Denkweisen oder Umstände Ihre Formulare ohne klare, angemessen dargestellte Beschriftungen ganz anders verstehen als Sie.

#### Platzhalter sind nicht barrierefrei

Mit dem Attribut [`placeholder`](#placeholder) legen Sie Text fest, der im Inhaltsbereich eines leeren `<input>`-Elements erscheint. Das Verständnis eines Formulars darf niemals vom Platzhalter abhängen. Er ist keine Beschriftung und sollte nicht als Ersatz dafür verwendet werden. Ein Platzhalter gibt einen Hinweis darauf, wie ein Eingabewert aussehen sollte; er dient nicht als Erklärung oder Aufforderung.

Platzhalter sind nicht nur für Screenreader schwer zugänglich, sondern verschwinden auch, sobald Benutzer Text in das Formularsteuerelement eingeben oder bereits ein Wert vorhanden ist. Browser mit automatischer Seitenübersetzung überspringen bei der Übersetzung möglicherweise Attribute, sodass `placeholder` unter Umständen nicht übersetzt wird.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit das Attribut [`placeholder`](#placeholder). Wenn Sie ein `<input>`-Element beschriften müssen, verwenden Sie {{HTMLElement("label")}}.

### Clientseitige Validierung

> [!WARNING]
> Clientseitige Validierung ist nützlich, garantiert aber _nicht_, dass beim Server gültige Daten ankommen. Wenn Daten einem bestimmten Format entsprechen müssen, prüfen Sie sie _immer_ auch auf dem Server und geben Sie bei einem ungültigen Format eine [HTTP-Antwort `400`](/de/docs/Web/HTTP/Reference/Status/400) zurück.

Wie oben unter [UI-Pseudoklassen](#ui-pseudoklassen) beschrieben, können Sie Eingabefelder mit CSS anhand ihres aktuellen Zustands über {{cssxref(":valid")}} oder {{cssxref(":invalid")}} gestalten. Darüber hinaus bietet der Browser eine clientseitige Validierung, wenn versucht wird, ein Formular abzusenden. Besteht dabei ein Formularsteuerelement die Einschränkungsvalidierung nicht, zeigen unterstützende Browser am ersten ungültigen Steuerelement eine Fehlermeldung an: entweder eine Standardmeldung zum Fehlertyp oder eine von Ihnen festgelegte Meldung.

Einige Eingabetypen und Attribute schränken die gültigen Werte ein. `<input type="number" min="2" max="10" step="2">` erlaubt beispielsweise nur die Zahlen 2, 4, 6, 8 und 10. Verschiedene Fehler sind möglich: `rangeUnderflow` bei einem Wert unter 2, `rangeOverflow` bei einem Wert über 10, `stepMismatch` bei einer Zahl zwischen 2 und 10, die keine gerade ganze Zahl ist und damit `step` nicht entspricht, oder `typeMismatch`, wenn der Wert keine Zahl ist.

Bei Eingabetypen mit einem periodischen Wertebereich – bei denen nach dem höchstmöglichen Wert wieder der niedrigste folgt – dürfen die Werte der Eigenschaften [`max`](#max) und [`min`](#min) vertauscht sein. Das bedeutet, dass der zulässige Bereich bei `min` beginnt, nach dem höchstmöglichen Wert beim niedrigsten fortgesetzt wird und bei `max` endet. Das ist besonders für Datums- und Uhrzeitwerte nützlich, etwa wenn Sie einen Bereich von 20:00 Uhr bis 08:00 Uhr zulassen möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und ihre Werte können zu einem bestimmten [`ValidityState`](/de/docs/Web/API/ValidityState)-Fehler führen:

<table class="no-markdown">
  <caption>
    Fehler des Gültigkeitsobjekts hängen von den Attributen des
    <code>&lt;input&gt;</code>-Elements und ihren Werten ab:
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
        Tritt auf, wenn der Wert größer ist als der durch <code>max</code>
        festgelegte Höchstwert.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch
        <code>maxlength</code> erlaubte Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der durch <code>min</code>
        festgelegte Mindestwert.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch
        <code>minlength</code> geforderte Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein gültiger regulärer Ausdruck mit <code>pattern</code>
        angegeben ist und <code>value</code> ihm nicht entspricht.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn <code>required</code> vorhanden ist, der Wert aber
        <code>null</code> ist oder ein Optionsfeld beziehungsweise Kontrollkästchen nicht ausgewählt wurde.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht der Schrittweite. Standardmäßig beträgt diese
        <code>1</code>; bei <code>type="number"</code> sind ohne Angabe von
        <code>step</code> daher nur ganze Zahlen gültig.
        <code>step="any"</code> löst diesen Fehler nie aus.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht dem richtigen Typ entspricht,
        beispielsweise wenn eine E-Mail-Adresse kein <code>@</code> oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularsteuerelement nicht das Attribut `required` besitzt, ist ein fehlender Wert beziehungsweise eine leere Zeichenfolge nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, führt eine leere Zeichenfolge – mit Ausnahme von `required` – zu keinem Fehler.

Wir können einschränken, welche Werte akzeptiert werden. Unterstützende Browser validieren diese Formularwerte selbst und weisen Benutzer beim Absenden auf Fehler hin.

Neben den in der Tabelle beschriebenen Fehlern enthält die Schnittstelle `validityState` die schreibgeschützten booleschen Eigenschaften `badInput`, `valid` und `customError`. Das Gültigkeitsobjekt umfasst:

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

Bei jeder dieser booleschen Eigenschaften bedeutet `true`, dass der jeweilige mögliche Fehlergrund vorliegt. Die Ausnahme ist `valid`: Diese Eigenschaft ist `true`, wenn der Wert des Elements alle Einschränkungen erfüllt.

Bei einem Fehler weisen unterstützende Browser Benutzer darauf hin und verhindern das Absenden des Formulars. Beachten Sie: Ist ein benutzerdefinierter Fehler auf einen als wahr ausgewerteten Wert gesetzt – also auf etwas anderes als eine leere Zeichenfolge oder `null` –, wird das Absenden verhindert. Ist keine benutzerdefinierte Fehlermeldung vorhanden und liefert keine der anderen Eigenschaften `true`, ist `valid` gleich `true` und das Formular kann abgesendet werden.

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

Die letzte Zeile, in der die benutzerdefinierte Gültigkeitsmeldung auf eine leere Zeichenfolge gesetzt wird, ist entscheidend. Wenn nach einem Eingabefehler eine Fehlermeldung gesetzt bleibt, kann das Formular selbst dann nicht abgesendet werden, wenn inzwischen alle Werte gültig sind – bis die Meldung `null` ist.

#### Beispiel für einen benutzerdefinierten Validierungsfehler

Wenn Sie bei einer fehlgeschlagenen Validierung eine eigene Fehlermeldung anzeigen möchten, verwenden Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript), die für `<input>`-Elemente und verwandte Elemente verfügbar ist. Betrachten Sie folgendes Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Die grundlegende HTML-Formularvalidierung zeigt eine Standardfehlermeldung an, wenn Sie versuchen, das Formular ohne gültigen Wert oder mit einem Wert abzusenden, der `pattern` nicht entspricht.

Um stattdessen eigene Fehlermeldungen anzuzeigen, können Sie beispielsweise folgendes JavaScript verwenden:

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

Das Beispiel wird so dargestellt:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz zusammengefasst:

- Jedes Mal, wenn sich der Wert des Eingabeelements ändert, prüfen wir seinen Gültigkeitszustand, indem wir im Handler des `input`-Ereignisses `checkValidity()` aufrufen.
- Ist der Wert ungültig, wird ein `invalid`-Ereignis ausgelöst und dessen Handler ausgeführt. Darin ermitteln wir mit einem `if ()`-Block, ob der Wert wegen eines leeren Felds oder wegen einer Abweichung vom Muster ungültig ist, und legen eine benutzerdefinierte Fehlermeldung fest.
- Ist der Eingabewert beim Drücken der Schaltfläche zum Absenden ungültig, erscheint dadurch eine der benutzerdefinierten Fehlermeldungen.
- Ist der Wert gültig, wird das Formular wie erwartet abgesendet. Dazu muss die benutzerdefinierte Fehlermeldung durch einen Aufruf von `setCustomValidity()` mit einer leeren Zeichenfolge aufgehoben werden. Deshalb tun wir dies bei jedem `input`-Ereignis. Andernfalls würde ein zuvor gesetzter benutzerdefinierter Fehler das Eingabefeld beim Absenden weiterhin als ungültig kennzeichnen, obwohl es inzwischen einen gültigen Wert enthält.

> [!NOTE]
> Validieren Sie Eingaben immer sowohl clientseitig als auch serverseitig. Die Einschränkungsvalidierung ersetzt die Validierung _auf dem Server_ nicht. Ungültige Werte können weiterhin von älteren Browsern oder böswilligen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte über viele Versionen hinweg das proprietäre Attribut `x-moz-errormessage`, mit dem sich auf ähnliche Weise eigene Fehlermeldungen festlegen ließen. Es wurde mit Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Welche Eingaben für bestimmte `<input>`-Typen zulässig sind, hängt vom Gebietsschema ab. In manchen Gebietsschemas ist 1,000.00 eine gültige Zahl; in anderen muss dieselbe Zahl als 1.000,00 eingegeben werden.

Firefox verwendet die folgenden Heuristiken, um das Gebietsschema für die Validierung der Benutzereingabe zu bestimmen, zumindest bei `type="number"`:

- Zuerst wird die Sprache verwendet, die durch ein `lang`- oder `xml:lang`-Attribut am Element oder einem seiner übergeordneten Elemente angegeben ist.
- Danach wird die Sprache aus einem gegebenenfalls vorhandenen HTTP-Header `Content-Language` versucht.
- Ist keine Sprache angegeben, wird das Gebietsschema des Browsers verwendet.

## Barrierefreiheit

### Beschriftungen

Bei Eingabefeldern sind zugehörige Beschriftungen eine Anforderung der Barrierefreiheit. Menschen, die unterstützende Technologien verwenden, können dadurch erkennen, wozu ein Feld dient. Ein Klick oder eine Berührung der Beschriftung fokussiert außerdem das zugehörige Formularsteuerelement. Das verbessert auch für sehende Benutzer die Zugänglichkeit und Bedienbarkeit, weil die anklickbare beziehungsweise berührbare Fläche größer wird. Besonders hilfreich – und teils notwendig – ist das für die kleinen Optionsfelder und Kontrollkästchen. Weitere Informationen finden Sie unter [Beschriftungen](#beschriftungen).

Das folgende Beispiel zeigt, wie Sie ein `<label>` auf die oben beschriebene Weise mit einem `<input>`-Element verknüpfen. Geben Sie dem `<input>` ein Attribut `id`. Das `<label>` benötigt dann ein Attribut `for` mit demselben Wert wie die `id` des Eingabefelds.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingabefelder sollten eine ausreichend große Fläche bieten, damit sie leicht aktiviert werden können. Das hilft unter anderem Menschen mit motorischen Einschränkungen und Menschen, die weniger präzise Eingabemethoden wie einen Eingabestift oder ihre Finger verwenden. Empfohlen wird eine interaktive Mindestgröße von 44 × 44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels).

- [Erfolgskriterium 2.5.5 verstehen: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele – The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        auflistbares, absendbares, zurücksetzbares und einem Formular zugeordnetes Element;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Textinhalt</a>.
        Wenn <a href="#type"><code>type</code></a> nicht <code>hidden</code> ist,
        außerdem beschriftbares Element und wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Ein Start-Tag ist erforderlich; ein End-Tag darf nicht vorhanden sein.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Textinhalt</a> akzeptiert.
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
                ohne Attribut <code>list</code>:
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit Attribut <code>list</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
                ohne Attribut <code>list</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>
              </li>
              <li>
                mit Attribut <code>list</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
                ohne Attribut <code>list</code>:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit Attribut <code>list</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                ohne Attribut <code>list</code>:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit Attribut <code>list</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                ohne Attribut <code>list</code>:
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a ></code>
              </li>
              <li>
                mit Attribut <code>list</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
            <code>type=text</code> ohne Attribut <code>list</code>:
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            oder <code>text</code> mit Attribut <code>list</code>:
            keine <code>role</code> zulässig
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

- CSS-Eigenschaft {{cssxref("appearance")}}
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zum Strukturieren eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Native Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Einschränkungsvalidierung von Formularen](/de/docs/Web/HTML/Guides/Constraint_validation)
- [HTML-Formulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
