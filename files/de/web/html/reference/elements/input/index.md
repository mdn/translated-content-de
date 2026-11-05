---
title: "`<input>`: HTML-Eingabeelement"
short-title: <input>
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 5c76c9c822b4083750ff7fcabcd07422ad3a591b
---

Das [HTML](/de/docs/Web/HTML)-Element **`<input>`** wird verwendet, um interaktive Steuerelemente für Webformulare zu erstellen, über die Daten von Benutzern entgegengenommen werden. Je nach Gerät und {{Glossary("user_agent", "User-Agent")}} stehen zahlreiche Arten von Eingabedaten und Steuerelementen zur Verfügung. Aufgrund der vielen möglichen Kombinationen aus Eingabetypen und Attributen gehört `<input>` zu den leistungsfähigsten und komplexesten Elementen in HTML.

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
        Eine Schaltfläche ohne Standardverhalten, die den Wert des <a href="#value"><code>value</code></a>-Attributs anzeigt. Standardmäßig ist dieser Wert leer.
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
        Ein Steuerelement zur Angabe einer Farbe. In unterstützenden Browsern öffnet es bei Aktivierung eine Farbauswahl.
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
        In unterstützenden Browsern öffnet es bei Aktivierung eine Datumsauswahl
        oder Zahlenräder für Jahr, Monat und Tag.
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
        In unterstützenden Browsern öffnet es bei Aktivierung eine Datumsauswahl
        oder Zahlenräder für Datums- und Uhrzeitbestandteile.
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
        Ein Feld zum Bearbeiten einer E-Mail-Adresse. Es sieht wie ein
        <code>text</code>-Eingabefeld aus, verfügt aber über Validierungsregeln
        und zeigt in unterstützenden Browsern und auf Geräten mit dynamischer Tastatur
        eine passende Tastatur an.
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
        Verwenden Sie das Attribut <a href="#accept"><code>accept</code></a>, um festzulegen, welche Dateitypen ausgewählt werden können.
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
        Ein nicht angezeigtes Steuerelement, dessen Wert an den Server übermittelt wird.
        In der nächsten Spalte gibt es ein Beispiel – es ist allerdings verborgen!
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
        Der Wert des Attributs <a href="#alt"><code>alt</code></a> wird angezeigt, wenn die Bildressource unter <a href="#src"><code>src</code></a> fehlt.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>Ein Steuerelement zur Eingabe eines Monats und eines Jahres ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerelement zur Eingabe einer Zahl. Es zeigt Steuerelemente zum schrittweisen Ändern des Werts an
        und bietet eine standardmäßige Validierung. Auf einigen Geräten mit dynamischer
        Tastatur wird ein Ziffernblock angezeigt.
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
        Ein Optionsfeld, mit dem einer von mehreren Werten mit demselben <a href="#name"><code>name</code></a>-Wert ausgewählt werden kann.
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
        Es wird als Schieberegler dargestellt, der standardmäßig auf dem mittleren Wert steht.
        Zusammen mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> wird der Bereich zulässiger Werte festgelegt.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbrüche werden
        automatisch aus dem Eingabewert entfernt. In unterstützenden Browsern kann es
        ein Symbol zum Leeren des Felds enthalten. Auf einigen Geräten mit dynamischer
        Tastatur wird statt der Eingabetaste ein Suchsymbol angezeigt.
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
        Ein Steuerelement zur Eingabe einer Telefonnummer. Auf einigen Geräten
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
        Der Standardtyp. Ein einzeiliges Textfeld. Zeilenumbrüche werden
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
        Ein Feld zur Eingabe einer URL. Es sieht wie ein <code>text</code>-Eingabefeld aus,
        verfügt aber über Validierungsregeln und zeigt in unterstützenden Browsern
        und auf Geräten mit dynamischer Tastatur eine passende Tastatur an.
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
        Ein Steuerelement zur Eingabe eines Datums, das aus einem Wochenjahr und einer Wochennummer ohne Zeitzone besteht.
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

Das `<input>`-Element ist vor allem wegen seiner Attribute so leistungsfähig. Das wichtigste davon ist das oben anhand von Beispielen beschriebene Attribut [`type`](#type). Da jedes `<input>`-Element unabhängig vom Typ auf der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) basiert, haben alle technisch gesehen genau dieselben Attribute. Tatsächlich wirken sich die meisten Attribute jedoch nur auf eine bestimmte Teilmenge der Eingabetypen aus. Zudem hängt die Wirkung einiger Attribute vom jeweiligen Eingabetyp ab.

Dieser Abschnitt enthält zunächst eine Tabelle aller Attribute mit kurzen Beschreibungen. Anschließend werden die einzelnen Attribute und die zugehörigen Eingabetypen ausführlicher beschrieben. Attribute, die für die meisten oder alle Eingabetypen gelten, werden weiter unten näher erläutert. Attribute, die nur für bestimmte Eingabetypen gelten – oder für alle gelten, bei einem bestimmten Typ aber ein besonderes Verhalten aufweisen –, werden stattdessen auf den Referenzseiten der jeweiligen Typen dokumentiert.

Zu den Attributen des `<input>`-Elements gehören die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) sowie:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                                                    |
| --------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis auf die erwarteten Dateitypen bei Steuerelementen zum Hochladen von Dateien                                             |
| [`alpha`](#alpha)                             | `color`                                                                      | Deckkraft der Farbe                                                                                                             |
| [`alt`](#alt)                                 | `image`                                                                      | Alternativtext für den Typ `image`; für die Barrierefreiheit erforderlich                                                       |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Steuert die automatische Großschreibung eingegebenen Texts                                                                      |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis für das automatische Ausfüllen von Formularen                                                                           |
| [`capture`](#capture)                         | `file`                                                                       | Methode zur Medienaufnahme bei Steuerelementen zum Hochladen von Dateien                                                        |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Gibt an, ob das Steuerelement ausgewählt ist                                                                                    |
| [`colorspace`](#colorspace)                   | `color`                                                                      | Der {{Glossary("Color_space", "Farbraum")}}, der zur Auswahl des Farbwerts verwendet werden soll                                |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfelds, mit dem die Schreibrichtung des Elements beim Übermitteln des Formulars gesendet wird                   |
| [`disabled`](#disabled)                       | alle                                                                         | Gibt an, ob das Formularsteuerelement deaktiviert ist                                                                           |
| [`form`](#form)                               | alle                                                                         | Verknüpft das Steuerelement mit einem Formularelement                                                                           |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | URL, an die das Formular übermittelt wird                                                                                       |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Kodierungstyp der Formulardaten bei der Übermittlung                                                                            |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | HTTP-Methode für die Formularübermittlung                                                                                       |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Umgeht die Validierung der Formularsteuerelemente bei der Übermittlung                                                          |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für die Formularübermittlung                                                                                   |
| [`height`](#height)                           | `image`                                                                      | Wie das Attribut `height` für {{htmlelement('img')}}; vertikale Abmessung                                                       |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des `id`-Attributs des {{htmlelement('datalist')}} mit Vorschlägen zur automatischen Vervollständigung                     |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Höchstwert                                                                                                                      |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) von `value`                                                                                 |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Mindestwert                                                                                                                     |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Mindestlänge (Anzahl der Zeichen) von `value`                                                                                   |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolesches Attribut; gibt an, ob mehrere Werte erlaubt sind                                                                     |
| [`name`](#name)                               | alle                                                                         | Name des Formularsteuerelements; wird als Teil eines Name-Wert-Paars mit dem Formular übermittelt                               |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Muster, dem `value` entsprechen muss, um gültig zu sein                                                                         |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der im Formularsteuerelement erscheint, solange kein Wert festgelegt ist                                                  |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Legt ein `<input type="button">` als Steuerelement für ein Popover-Element fest                                                 |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Legt die Aktion fest, die ein Popover-Steuerelement ausführen soll                                                              |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolesches Attribut; der Wert kann nicht bearbeitet werden                                                                      |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolesches Attribut; damit das Formular übermittelt werden kann, muss ein Wert angegeben oder das Steuerelement ausgewählt sein |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe des Steuerelements                                                                                                        |
| [`src`](#src)                                 | `image`                                                                      | Wie das Attribut `src` für {{htmlelement('img')}}; Adresse der Bildressource                                                    |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Gültige Wertabstände                                                                                                            |
| [`switch`](#switch)                           | `checkbox`                                                                   | Gibt an, ob das Kontrollkästchen als Schalter dargestellt werden soll                                                           |
| [`type`](#type)                               | alle                                                                         | Typ des Formularsteuerelements                                                                                                  |
| [`value`](#value)                             | alle außer `image`                                                           | Wert des Steuerelements; bei Angabe im HTML entspricht er dem Anfangswert                                                       |
| [`width`](#width)                             | `image`                                                                      | Wie das Attribut `width` für {{htmlelement('img')}}                                                                             |

Nach den Beschreibungen der Standardattribute werden einige weitere, nicht standardisierte Attribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Das Attribut `accept` gilt nur für den Eingabetyp `file` und legt fest, welche Dateitypen in einem `file`-Steuerelement zum Hochladen ausgewählt werden können. Siehe den Eingabetyp {{HTMLElement("input/file", "file")}}.

- `alpha` {{experimental_inline}}
  - : Das Attribut `alpha` gilt nur für den Eingabetyp `color` und ermöglicht es Benutzern, die Deckkraft der ausgewählten Farbe festzulegen.

- `alt`
  - : Das Attribut `alt` gilt nur für die Schaltfläche vom Typ `image`. Es stellt Alternativtext für das Bild bereit und zeigt den Attributwert an, wenn die Bildressource unter [`src`](#src) fehlt oder nicht geladen werden kann. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und gegebenenfalls auf welche Weise. Weitere Informationen finden Sie auf der Seite zum globalen Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** boolesches Attribut!) Das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) erwartet eine durch Leerzeichen getrennte Zeichenfolge. Sie beschreibt, welche Art der automatischen Vervollständigung das Eingabefeld gegebenenfalls anbieten soll. Üblicherweise werden dabei zuvor in dasselbe Eingabefeld eingegebene Werte erneut angeboten. Es sind aber auch komplexere Formen möglich: Ein Browser könnte beispielsweise auf die Kontaktliste eines Geräts zugreifen, um `email`-Adressen in einem E-Mail-Eingabefeld zu vervollständigen. Zulässige Werte finden Sie unter [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value).

    Das Attribut `autocomplete` ist für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password` gültig. Es wirkt sich nicht auf Eingabetypen aus, die keine Zahlen- oder Textdaten zurückgeben, und gilt für alle Eingabetypen außer `checkbox`, `radio`, `file` und den Schaltflächentypen.

    Weitere Informationen, unter anderem zur Passwortsicherheit und dazu, wie sich `autocomplete` bei `hidden` geringfügig von anderen Eingabetypen unterscheidet, finden Sie auf der Seite zum [Attribut `autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete).

- `autofocus`
  - : Ein boolesches Attribut, das angibt, dass das Eingabefeld nach dem Laden der Seite automatisch den Fokus erhalten soll – oder nachdem das {{HTMLElement("dialog")}}, das das Element enthält, angezeigt wurde.

    > [!NOTE]
    > Ein Element mit dem Attribut `autofocus` kann den Fokus erhalten, bevor das Ereignis [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) ausgelöst wird.

    Höchstens ein Element im Dokument darf das Attribut `autofocus` haben. Ist es für mehrere Elemente angegeben, erhält das erste davon den Fokus.

    Das Attribut `autofocus` kann nicht für Eingabefelder vom Typ `hidden` verwendet werden, da verborgene Eingabefelder keinen Fokus erhalten können.

    > [!WARNING]
    > Wenn ein Formularsteuerelement automatisch den Fokus erhält, kann dies Menschen mit Sehbeeinträchtigungen, die Screenreader verwenden, sowie Menschen mit kognitiven Beeinträchtigungen verwirren. Bei Verwendung von `autofocus` versetzen Screenreader ihre Benutzer ohne vorherige Ankündigung direkt zum Formularsteuerelement.

    Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie das Attribut `autofocus` verwenden. Der automatische Fokus auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Auf manchen Touch-Geräten kann dadurch außerdem eine Bildschirmtastatur eingeblendet werden. Ein Screenreader gibt zwar die Beschriftung des fokussierten Formularsteuerelements aus, kündigt davor aber nichts an. Auch sehenden Benutzern kleiner Geräte kann dadurch der Kontext aus dem vorhergehenden Inhalt entgehen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Das mit der HTML-Media-Capture-Spezifikation eingeführte Attribut `capture` gilt nur für den Eingabetyp `file`. Es legt in unterstützten Szenarien fest, welches Medium – Mikrofon, Video oder Kamera – verwendet werden soll, um eine neue Datei für das Hochladen mit dem `file`-Steuerelement aufzunehmen. Siehe den Eingabetyp {{HTMLElement("input/file", "file")}}.
- `checked`
  - : `checked` ist ein boolesches Attribut für die Typen `radio` und `checkbox`. Bei `radio` gibt es an, dass dieses Optionsfeld innerhalb der Gruppe gleichnamiger Optionsfelder aktuell ausgewählt ist. Bei `checkbox` gibt es an, dass das Kontrollkästchen beim Laden der Seite standardmäßig ausgewählt ist. Es gibt _nicht_ an, ob das Kontrollkästchen derzeit ausgewählt ist: Ändert sich dessen Zustand, spiegelt dieses HTML-Attribut die Änderung nicht wider. (Nur das [IDL-Attribut `checked` von `HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Anders als bei anderen Eingabesteuerelementen werden die Werte von Kontrollkästchen und Optionsfeldern nur dann in die übermittelten Daten aufgenommen, wenn sie aktuell `checked` sind. In diesem Fall werden Name und Wert der ausgewählten Steuerelemente übermittelt.
    >
    > Hat beispielsweise ein Kontrollkästchen den `name` `fruit` und den `value` `cherry` und ist es ausgewählt, enthalten die übermittelten Formulardaten `fruit=cherry`. Ist das Kontrollkästchen nicht ausgewählt, erscheint es überhaupt nicht in den Formulardaten. Der Standardwert von `value` für Kontrollkästchen und Optionsfelder ist `on`.

- `colorspace` {{experimental_inline}}
  - : Das Attribut `colorspace` gilt nur für den Eingabetyp `color` und legt den {{Glossary("Color_space", "Farbraum")}} fest, den das Eingabefeld `type="color"` verwendet. Mögliche {{Glossary("enumerated", "aufgezählte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe liegt im {{Glossary("RGB", "sRGB")}}-Farbraum. Dazu gehören Werte der Formate {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}} und {{cssxref("hex-color")}}. Der Farbwert ist auf 8 Bit je `r`-, `g`- und `b`-Komponente begrenzt. Dies ist der Standardwert.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display-P3-Farbraum")}}, zum Beispiel `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Das Attribut `dirname` gilt für die Eingabetypen `hidden`, `text`, `search`, `url`, `tel` und `email` und ermöglicht die Übermittlung der Schreibrichtung des Elements. Ist es vorhanden, übermittelt das Formularsteuerelement zwei Name-Wert-Paare: Das erste besteht aus [`name`](#name) und [`value`](#value). Beim zweiten ist der Wert des Attributs `dirname` der Name und `ltr` oder `rtl` der vom Browser festgelegte Wert.

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

    Beim Übermitteln des obigen Formulars werden sowohl das `name`-/`value`-Paar `fruit=cherry` als auch das `dirname`-/Schreibrichtungs-Paar `fruit-dir=ltr` gesendet.
    Weitere Informationen finden Sie unter [Attribut `dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein boolesches Attribut, das angibt, dass Benutzer nicht mit dem Eingabefeld interagieren können. Deaktivierte Eingabefelder werden normalerweise blasser oder auf andere Weise als nicht verfügbar dargestellt.

    Insbesondere empfangen deaktivierte Eingabefelder kein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis und werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl die Spezifikation dies nicht verlangt, [speichert Firefox standardmäßig den dynamischen Deaktivierungszustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` auch über das erneute Laden der Seite hinweg. Mit dem Attribut [`autocomplete`](#autocomplete) können Sie dieses Verhalten steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Eine Zeichenfolge, die das {{HTMLElement("form")}}-Element angibt, dem das Eingabefeld zugeordnet ist – seinen **Formularbesitzer**. Ist ein Wert vorhanden, muss er mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Ist das Attribut nicht angegeben, wird das `<input>`-Element gegebenenfalls dem nächstgelegenen umgebenden Formular zugeordnet.

    Mit dem Attribut `form` können Sie ein Eingabefeld an beliebiger Stelle im Dokument platzieren und es dennoch in ein Formular an anderer Stelle im Dokument einbinden.

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
  - : Gilt nur für die Eingabeschaltfläche vom Typ `image`. `height` gibt die Höhe der Bilddatei an, mit der die grafische Schaltfläche zum Übermitteln dargestellt wird. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.
- `id`
  - : Ein für alle Elemente einschließlich aller Eingabetypen gültiges [globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes/id). Es legt eine Kennung (ID) fest, die innerhalb des gesamten Dokuments eindeutig sein muss. Sie dient dazu, das Element für Verknüpfungen zu identifizieren. Ihr Wert wird als Wert des Attributs [`for`](/de/docs/Web/HTML/Reference/Attributes/for) von {{htmlelement('label')}} verwendet, um die Beschriftung mit dem Formularsteuerelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Ein globales Attribut, das für alle Elemente gilt und Browsern einen Hinweis darauf gibt, welche Konfiguration der Bildschirmtastatur beim Bearbeiten des Elements oder seines Inhalts verwendet werden soll. Zu den Werten gehören `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der Wert des Attributs `list` sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. `<datalist>` stellt eine Liste vordefinierter Werte bereit, die Benutzern für dieses Eingabefeld vorgeschlagen werden. Werte in der Liste, die mit dem [`type`](#type) nicht kompatibel sind, werden nicht als Vorschläge angezeigt. Die Werte sind Vorschläge, keine Vorgaben: Benutzer können einen Wert aus der Liste auswählen oder einen anderen eingeben.

    Das Attribut ist für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color` gültig.

    Laut Spezifikation wird das Attribut `list` für `hidden`, `password`, `checkbox`, `radio`, `file` und sämtliche Schaltflächentypen nicht unterstützt.

    Je nach Browser sehen Benutzer möglicherweise eine vorgeschlagene Farbpalette, Markierungen entlang eines Schiebereglers oder sogar ein Eingabefeld, das sich wie ein {{HTMLElement("select")}} öffnet, aber auch nicht aufgeführte Werte zulässt. Beachten Sie für die anderen Eingabetypen die [Tabelle zur Browser-Kompatibilität](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility).

    Siehe das Element {{htmlelement('datalist')}}.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gilt für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range` und legt den größten zulässigen Wert fest. Überschreitet der im Element eingegebene [`value`](#value) diesen Wert, schlägt die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Ist der Wert des Attributs `max` keine Zahl, hat das Element keinen Höchstwert.

    Es gibt einen Sonderfall: Ist der Datentyp periodisch, etwa bei Datums- oder Uhrzeitangaben, darf der Wert von `max` kleiner sein als der von `min`. Das zeigt an, dass der Bereich über seinen Endpunkt hinausreichen kann. So lässt sich beispielsweise ein Zeitraum von 22 Uhr bis 4 Uhr festlegen.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gilt für `text`, `search`, `url`, `tel`, `email` und `password` und legt die maximale Länge der Zeichenfolge fest, die Benutzer in das Feld eingeben können (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}). Der Wert muss eine ganze Zahl ab 0 sein. Ist `maxlength` nicht angegeben oder ungültig, hat das Feld keine maximale Länge. Der Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

    Die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) schlägt fehl, wenn der eingegebene Text länger als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als das Attribut `maxlength` erlaubt. Die Constraint Validation wird nur angewendet, wenn Benutzer den Wert ändern. Weitere Informationen finden Sie unter [Clientseitige Validierung](#clientseitige_validierung).

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gilt für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range` und legt den kleinsten zulässigen Wert fest. Ist der im Element eingegebene [`value`](#value) kleiner, schlägt die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Ist der Wert des Attributs `min` keine Zahl, hat das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem Wert des Attributs `max` sein. Ist das Attribut `min` vorhanden, aber ohne Wert oder ungültig, wird kein Mindestwert angewendet. Ist `min` gültig und ein nicht leerer Wert kleiner als der festgelegte Mindestwert, verhindert die Constraint Validation die Formularübermittlung. Weitere Informationen finden Sie unter [Clientseitige Validierung](#clientseitige_validierung).

    Es gibt einen Sonderfall: Ist der Datentyp periodisch, etwa bei Datums- oder Uhrzeitangaben, darf der Wert von `max` kleiner sein als der von `min`. Das zeigt an, dass der Bereich über seinen Endpunkt hinausreichen kann. So lässt sich beispielsweise ein Zeitraum von 22 Uhr bis 4 Uhr festlegen.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gilt für `text`, `search`, `url`, `tel`, `email` und `password` und legt die Mindestlänge der Zeichenfolge fest, die Benutzer in das Feld eingeben können (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}). Der Wert muss eine nicht negative ganze Zahl sein, die kleiner oder gleich dem Wert von `maxlength` ist. Ist `minlength` nicht angegeben oder ungültig, hat das Eingabefeld keine Mindestlänge.

    Die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) schlägt fehl, wenn der eingegebene Text kürzer als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Dadurch wird die Formularübermittlung verhindert. Die Constraint Validation wird nur angewendet, wenn Benutzer den Wert ändern. Weitere Informationen finden Sie unter [Clientseitige Validierung](#clientseitige_validierung).

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Ist das boolesche Attribut `multiple` gesetzt, können Benutzer im E-Mail-Feld mehrere durch Kommas getrennte E-Mail-Adressen eingeben oder bei einem `file`-Eingabefeld mehrere Dateien auswählen. Siehe die Eingabetypen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}}.

- `name`
  - : Eine Zeichenfolge, die den Namen des Eingabesteuerelements festlegt. Dieser Name wird bei der Formularübermittlung zusammen mit dem Wert des Steuerelements gesendet.

    Behandeln Sie `name` als erforderliches Attribut, auch wenn es formal keines ist. Ist für ein Eingabefeld kein `name` angegeben oder ist `name` leer, wird sein Wert nicht mit dem Formular übermittelt! Auch deaktivierte Steuerelemente, nicht ausgewählte Optionsfelder und Kontrollkästchen sowie Reset-Schaltflächen werden nicht gesendet.

    Es gibt zwei Sonderfälle:
    1. `_charset_`: Wird dies als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet, setzt der {{Glossary("user_agent", "User-Agent")}} dessen `value` automatisch auf die Zeichenkodierung, die zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht zulässig.

    Das Attribut [`name`](#name) bewirkt bei Optionsfeldern ein besonderes Verhalten.

    Innerhalb einer Gruppe gleichnamiger Optionsfelder kann jeweils nur eines ausgewählt sein. Wird ein anderes Optionsfeld der Gruppe ausgewählt, wird das bisher ausgewählte automatisch abgewählt. Bei der Formularübermittlung werden der Name und der Wert des ausgewählten Optionsfelds gesendet.

    Wenn Sie mit der Tabulatortaste zu einer Gruppe gleichnamiger Optionsfelder wechseln und eines davon ausgewählt ist, erhält dieses den Fokus. Stehen die Optionsfelder im Quellcode nicht unmittelbar beieinander, beginnt die Tabulatornavigation durch die Gruppe beim ersten Optionsfeld, überspringt aber alle nicht ausgewählten Optionsfelder. Anders ausgedrückt: Ist eines ausgewählt, werden die nicht ausgewählten Optionsfelder der Gruppe mit der Tabulatortaste übersprungen. Ist keines ausgewählt, erhält die Gruppe den Fokus beim ersten gleichnamigen Optionsfeld.

    Sobald eines der Optionsfelder einer Gruppe den Fokus hat, können Sie mit den Pfeiltasten durch alle gleichnamigen Optionsfelder navigieren, auch wenn sie im Quellcode nicht unmittelbar beieinanderstehen.

    Erhält ein Eingabeelement einen `name`, wird dieser Name zu einer Eigenschaft von [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) des zugehörigen Formularelements. Wenn ein Eingabefeld den `name` `guest` und ein anderes den `name` `hat-size` hat, können Sie den folgenden Code verwenden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Nach Ausführung dieses Codes ist `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das Feld `guest`, während `hatSize` das Objekt für das Feld `hat-size` ist.

    > [!WARNING]
    > Vergeben Sie für Formularelemente keinen `name`, der einer integrierten Eigenschaft des Formulars entspricht. Andernfalls würde die Referenz auf das entsprechende Eingabefeld die vordefinierte Eigenschaft oder Methode überschreiben.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Das Attribut `pattern` gilt für `text`, `search`, `url`, `tel`, `email` und `password`. Daraus wird ein regulärer Ausdruck kompiliert, dem der [`value`](#value) des Eingabefelds entsprechen muss, damit die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) erfolgreich ist. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom Typ {{jsxref("RegExp")}} verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) beschrieben wird. Der Mustertext darf nicht von Schrägstrichen umschlossen sein. Beim Kompilieren des regulären Ausdrucks gilt:
    1. Das Muster wird implizit mit `^(?:` und `)$` umschlossen, sodass der _gesamte_ Eingabewert übereinstimmen muss, also `^(?:<pattern>)$`.
    2. Das Flag `'v'` wird gesetzt, sodass das Muster als Folge von Unicode-Codepunkten statt als {{Glossary("ASCII", "ASCII")}} behandelt wird.

    Ist das Attribut `pattern` vorhanden, aber ohne Wert oder ungültig, wird kein regulärer Ausdruck angewendet und das Attribut vollständig ignoriert. Ist das Muster gültig und entspricht ein nicht leerer Wert ihm nicht, verhindert die Constraint Validation die Formularübermittlung. Ist [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden, wird der kompilierte reguläre Ausdruck mit jedem durch Kommas getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das Attribut `pattern` verwenden, informieren Sie Benutzer durch einen erklärenden Text in der Nähe über das erwartete Format. Sie können auch ein Attribut [`title`](#title) hinzufügen, um die Anforderungen des Musters zu erläutern; die meisten Browser zeigen dessen Wert als Tooltip an. Die sichtbare Erläuterung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Ergänzung.

    Weitere Informationen finden Sie unter [Clientseitige Validierung](#clientseitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Das Attribut `placeholder` gilt für `text`, `search`, `url`, `tel`, `email`, `password` und `number`. Es gibt Benutzern einen kurzen Hinweis darauf, welche Informationen im Feld erwartet werden. Der Hinweis sollte aus einem Wort oder einer kurzen Formulierung bestehen, die den erwarteten Datentyp verdeutlicht, statt eine Erklärung oder Aufforderung zu sein. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Soll ein Feld beispielsweise den Vornamen erfassen und lautet seine Beschriftung „Vorname“, könnte „z. B. Mustafa“ ein geeigneter Platzhalter sein.

    > [!NOTE]
    > Das Attribut `placeholder` ist semantisch weniger hilfreich als andere Möglichkeiten, ein Formular zu erklären, und kann unerwartete technische Probleme mit Ihren Inhalten verursachen. Weitere Informationen finden Sie unter [Beschriftungen](#beschriftungen).

- `popovertarget`
  - : Macht ein `<input type="button">`-Element zu einer Schaltfläche, die ein Popover steuert. Als Wert wird die ID des zu steuernden Popover-Elements verwendet. Weitere Einzelheiten finden Sie auf der Einstiegsseite zur [Popover API](/de/docs/Web/API/Popover_API). Die Verknüpfung zwischen einem Popover und seiner aufrufenden Schaltfläche über das Attribut `popovertarget` hat zwei weitere nützliche Auswirkungen:
    - Der Browser erstellt eine implizite Beziehung über [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) zwischen Popover und aufrufender Schaltfläche. Außerdem ordnet er das angezeigte Popover an einer logischen Stelle in der Tastatur-Fokusreihenfolge ein. Dadurch ist das Popover für Benutzer von Tastaturen und assistiven Technologien (AT) besser zugänglich (siehe auch [Barrierefreiheitsfunktionen von Popovers](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden Elementen. Dadurch lassen sich Popovers mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) bequem relativ zu ihren Steuerelementen positionieren. Weitere Einzelheiten finden Sie unter [Ankerpositionierung von Popovers](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Legt fest, welche Aktion ein `<input type="button">`-Steuerelement für das von ihm gesteuerte Popover-Element ausführt. Mögliche Werte sind:
    - `"hide"`
      - : Die Schaltfläche verbirgt ein angezeigtes Popover. Ist das Popover bereits verborgen, geschieht nichts.
    - `"show"`
      - : Die Schaltfläche zeigt ein verborgenes Popover an. Ist das Popover bereits sichtbar, geschieht nichts.
    - `"toggle"`
      - : Die Schaltfläche wechselt zwischen sichtbarem und verborgenem Popover. Ein verborgenes Popover wird angezeigt, ein sichtbares verborgen. Wird `popovertargetaction` weggelassen, ist `"toggle"` die Standardaktion der Schaltfläche.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein boolesches Attribut, das angibt, dass Benutzer den Wert des Eingabefelds nicht bearbeiten können. Das Attribut `readonly` wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Weitere Informationen finden Sie unter [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein boolesches Attribut, das angibt, dass Benutzer einen Wert für das Eingabefeld angeben müssen, bevor das zugehörige Formular übermittelt werden kann. Das Attribut `required` wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Weitere Informationen finden Sie unter [Clientseitige Validierung](#clientseitige_validierung) und [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required).

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Das Attribut `size` gilt für `email`, `password`, `tel`, `url` und `text` und legt fest, wie viel vom Eingabefeld angezeigt wird. Im Wesentlichen entspricht das Ergebnis dem Festlegen der CSS-Eigenschaft {{cssxref("width")}}, allerdings mit einigen Besonderheiten. Die Einheit des Werts hängt vom Eingabetyp ab. Bei `password` und `text` handelt es sich um eine Anzahl von Zeichen (oder `em`-Einheiten) mit dem Standardwert `20`, bei den anderen um Pixel (oder `px`-Einheiten). CSS-`width` hat Vorrang vor dem Attribut `size`.

- `src`
  - : Gilt nur für die Eingabeschaltfläche vom Typ `image`. `src` ist eine Zeichenfolge mit der URL der Bilddatei, die als grafische Schaltfläche zum Übermitteln angezeigt wird. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Das Attribut [`step`](/de/docs/Web/HTML/Reference/Attributes/step) gilt für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`. Es ist eine Zahl, die die Schrittweite festlegt, der der Wert entsprechen muss. Gültig sind nur Werte, die um eine ganze Anzahl von Schritten vom Ausgangswert entfernt sind. Der Ausgangswert ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), falls angegeben, andernfalls [`value`](#value), oder `0`, wenn beides fehlt. Eine Ausnahme ist `week`: Hier beträgt der standardmäßige Ausgangswert −259.200.000 und stellt den Beginn der Woche `1970-W01` dar.

    Wird `step` nicht ausdrücklich angegeben:
    - Für `number` und `range` ist der Standardwert von `step` 1.
    - Jeder Datums- und Uhrzeiteingabetyp hat einen geeigneten Standardwert für `step`. Siehe die Seiten der einzelnen Eingabetypen: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl – ganzzahlig oder mit Nachkommastellen – oder der Sonderwert `any` sein. `any` bedeutet, dass keine Schrittweite vorgegeben wird und jeder Wert erlaubt ist, sofern keine anderen Einschränkungen wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) entgegenstehen.

    Bei `<input type="number" min="10" step="2">` ist beispielsweise jede gerade ganze Zahl ab `10` gültig. Wird `step` weggelassen, wie bei `<input type="number">`, ist jede ganze Zahl gültig, Zahlen mit Nachkommastellen wie `4.2` dagegen nicht, da `step` standardmäßig `1` ist. Damit `4.2` gültig ist, müsste `step` auf `any`, 0.1 oder 0.2 gesetzt werden. Alternativ müsste der Wert von `min` auf `.2` enden, etwa bei `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Entsprechen die von Benutzern eingegebenen Daten nicht der festgelegten Schrittweite, gelten sie bei der Constraint Validation als ungültig und entsprechen der Pseudoklasse `:invalid`.

    Weitere Informationen finden Sie unter [Clientseitige Validierung](#clientseitige_validierung).

- [`switch`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#switch) {{experimental_inline}} {{non-standard_inline}}
  - : `switch` gilt nur für Eingabefelder vom Typ `checkbox` und ist ein boolesches Attribut, das angibt, ob das Kontrollkästchen als Schalter dargestellt werden soll.

    > [!NOTE]
    > Dieses Attribut ist noch experimentell und wird nur von wenigen Browsern unterstützt. Nicht unterstützende Browser ignorieren es.

- `tabindex`
  - : Ein globales, für alle Elemente einschließlich aller Eingabetypen gültiges Attribut mit einem ganzzahligen Wert. Es gibt an, ob das Element den Eingabefokus erhalten kann und ob es an der sequenziellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen außer `hidden` fokussierbar sind, sollte dieses Attribut nicht für Formularsteuerelemente verwendet werden. Andernfalls müsste die Fokusreihenfolge aller Elemente im Dokument verwaltet werden. Bei Fehlern kann dies die Benutzerfreundlichkeit und Barrierefreiheit beeinträchtigen.

- `title`
  - : Ein globales, für alle Elemente einschließlich aller Eingabetypen gültiges Attribut. Es enthält einen Text mit ergänzenden Informationen zum jeweiligen Element. Diese Informationen können Benutzern üblicherweise, aber nicht zwingend, als Tooltip angezeigt werden. `title` sollte NICHT als wichtigste Erklärung für den Zweck eines Formularsteuerelements verwendet werden. Nutzen Sie stattdessen das Element {{htmlelement('label')}} mit einem `for`-Attribut, dessen Wert dem [`id`](#id)-Attribut des Formularsteuerelements entspricht. Siehe [Beschriftungen](#beschriftungen) weiter unten.

- `type`
  - : Eine Zeichenfolge, die den darzustellenden Steuerelementtyp festlegt. Um beispielsweise ein Kontrollkästchen zu erstellen, wird der Wert `checkbox` verwendet. Fehlt das Attribut oder ist sein Wert unbekannt, wird der Eingabetyp `text` verwendet und ein einfaches Texteingabefeld erstellt.

    Zulässige Werte sind oben unter [Eingabetypen](#input_types) aufgeführt.

- `value`
  - : Der Wert des Eingabesteuerelements. Wird er im HTML angegeben, ist er der Anfangswert. Anschließend kann er jederzeit mit JavaScript über die Eigenschaft `value` des entsprechenden [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts geändert oder abgerufen werden. Das Attribut `value` ist immer optional, sollte für `checkbox`, `radio` und `hidden` jedoch als erforderlich betrachtet werden.

- `webkitdirectory`
  - : Ist das boolesche Attribut `webkitdirectory` vorhanden, stehen Benutzern in der Dateiauswahl nur Verzeichnisse zur Auswahl. Weitere Einzelheiten und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

    > [!NOTE]
    > `webkitdirectory` ist in der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) definiert. Der Name `webkitdirectory` stammt daher, dass es ursprünglich eine Chrome-spezifische API war. Inzwischen ist sie in allen Browsern verfügbar.

- `width`
  - : Gilt nur für die Eingabeschaltfläche vom Typ `image`. `width` gibt die Breite der Bilddatei an, die als grafische Schaltfläche zum Übermitteln angezeigt wird. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.

### Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind ebenfalls in einigen Browsern verfügbar. Grundsätzlich sollten Sie ihre Verwendung nach Möglichkeit vermeiden.

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
        Gibt an, ob wiederholt <a href="/de/docs/Web/API/HTMLInputElement/search_event"><code>search</code></a>-Ereignisse gesendet werden, damit Suchergebnisse bereits aktualisiert werden können, während Benutzer den Feldwert noch bearbeiten.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenfolge, die angibt, welche Aktion ausgeführt wird, wenn Benutzer
        beim Bearbeiten des Felds die Taste <kbd>Enter</kbd> oder <kbd>Return</kbd>
        drücken. Sie dient dazu, eine geeignete Beschriftung für diese Taste auf
        einer Bildschirmtastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist,
        verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
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
        Die Höchstzahl der Einträge, die in der Dropdown-Liste früherer Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das boolesche Attribut `incremental` ist eine Erweiterung von WebKit und Blink, die unter anderem von Safari, Opera und Chrome unterstützt wird. Ist es vorhanden, weist es den {{Glossary("user_agent", "User-Agent")}} an, das Eingabefeld als Live-Suche zu behandeln. Während Benutzer den Feldwert bearbeiten, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. So kann Ihr Code die Suchergebnisse während der Eingabe in Echtzeit aktualisieren.

    Ist `incremental` nicht angegeben, wird das Ereignis [`search`](/de/docs/Web/API/HTMLInputElement/search_event) nur gesendet, wenn Benutzer ausdrücklich eine Suche starten, etwa indem sie beim Bearbeiten des Felds <kbd>Enter</kbd> oder <kbd>Return</kbd> drücken.

    Die Häufigkeit des `search`-Ereignisses ist begrenzt: Es wird nicht öfter als in einem von der Implementierung festgelegten Zeitabstand gesendet.

- `orient` {{non-standard_inline}}
  - : Ähnlich wie die nicht standardisierte CSS-Eigenschaft -moz-orient, die sich auf die Elemente {{htmlelement('progress')}} und {{htmlelement('meter')}} auswirkt, legt das Attribut `orient` die Ausrichtung eines Schiebereglers fest. Zu den Werten gehören `horizontal` für eine waagerechte und `vertical` für eine senkrechte Darstellung. Einen modernen Ansatz für vertikale Formularsteuerelemente finden Sie unter [Vertikale Formularsteuerelemente erstellen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls).

- `results` {{non-standard_inline}}
  - : Das nur von Safari unterstützte Attribut `results` ist ein Zahlenwert, mit dem Sie die Höchstzahl der Einträge im browserseitig bereitgestellten Dropdown-Menü früherer Suchanfragen eines `<input>`-Elements überschreiben können.

    Der Wert muss eine nicht negative Dezimalzahl sein. Ist er nicht angegeben oder ungültig, verwendet der Browser seine standardmäßige Höchstzahl an Einträgen.

## Methoden

Die folgenden Methoden werden von der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) bereitgestellt, die `<input>`-Elemente im DOM repräsentiert. Ebenfalls verfügbar sind die Methoden der übergeordneten Schnittstellen [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht. Andernfalls wird `false` zurückgegeben und am Element ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht. Andernfalls wird `false` zurückgegeben, am Element ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis ausgelöst und – sofern das Ereignis nicht abgebrochen wird – das Problem den Benutzern gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, sofern dessen Inhalt auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt, etwa einer grafischen Farbauswahl oder einer Kalenderauswahl für ein Datum, bewirkt diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Meldung fest, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Ersetzt den Inhalt eines angegebenen Zeichenbereichs im Eingabeelement durch eine Zeichenfolge. Mit dem Parameter `selectMode` lässt sich steuern, wie sich dies auf den vorhandenen Inhalt auswirkt.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt einen angegebenen Zeichenbereich innerhalb eines Texteingabeelements aus. Bei Eingabefeldern, die nicht als Textfelder dargestellt werden, bewirkt die Methode nichts.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt die Browser-Auswahloberfläche für das Eingabeelement an. Normalerweise erscheint sie, wenn das Element ausgewählt wird; mit dieser Methode kann sie durch einen Schaltflächenklick oder eine andere Benutzerinteraktion geöffnet werden.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert eines numerischen Eingabefelds standardmäßig um eine Einheit oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert eines numerischen Eingabefelds um eine Einheit oder um die angegebene Anzahl von Einheiten.

## CSS

Eingabefelder sind ersetzte Elemente und haben daher einige Eigenschaften, die für andere Elemente als Formularelemente nicht gelten. Mit bestimmten CSS-Selektoren lassen sich Formularsteuerelemente anhand ihrer Oberflächeneigenschaften ansprechen; diese Selektoren werden auch UI-Pseudoklassen genannt. Eingabeelemente können außerdem mithilfe von Attributselektoren nach Typ ausgewählt werden. Daneben gibt es einige besonders nützliche Eigenschaften.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Für das Element
    <code>&#x3C;input></code>
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
        Jedes derzeit aktivierte Element, das aktiviert werden oder den Fokus
        erhalten kann und auch einen deaktivierten Zustand besitzt, in dem
        es weder aktiviert werden noch den Fokus erhalten kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das auch einen aktivierten Zustand
        besitzt, in dem es aktiviert werden oder den Fokus erhalten könnte.
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
        Ein Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt.
        Dazu gehören <code>&#x3C;input></code>- und {{HTMLElement("textarea")}}-Elemente,
        die ein <a href="#placeholder"><code>placeholder</code></a>-Attribut haben,
        aber noch keinen Wert.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die innerhalb einer Gruppe zusammengehöriger Elemente
        standardmäßig ausgewählt sind. Entspricht Eingabetypen
        {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}}, die beim Laden oder Darstellen
        der Seite ausgewählt waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht Eingabetypen {{HTMLElement("input/checkbox", "checkbox")}}
        und {{HTMLElement("input/radio", "radio")}}, die aktuell ausgewählt
        sind, sowie einem aktuell ausgewählten {{HTMLElement("option")}}
        innerhalb eines {{HTMLElement("select")}}.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren
        indeterminate-Eigenschaft mit JavaScript auf true gesetzt wurde;
        {{HTMLElement("input/radio", "radio")}}-Elemente, wenn im Formular
        alle gleichnamigen Optionsfelder nicht ausgewählt sind; sowie
        {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularsteuerelemente, für die eine Constraint Validation möglich ist
        und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularsteuerelemente, für die eine Constraint Validation gilt und
        die derzeit ungültig sind. Entspricht einem Steuerelement, dessen Wert
        die durch Attribute wie <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und
        <a href="#max"><code>max</code></a> festgelegten Anforderungen nicht erfüllt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht leeres Eingabefeld, dessen aktueller Wert innerhalb der durch
        die Attribute <a href="#min"><code>min</code></a> und
        <a href="#max"><code>max</code></a> sowie durch
        <a href="#step"><code>step</code></a> festgelegten Grenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht leeres Eingabefeld, dessen aktueller Wert NICHT innerhalb
        der durch die Attribute <a href="#min"><code>min</code></a> und
        <a href="#max"><code>max</code></a> festgelegten Grenzen liegt oder
        die Vorgabe durch <a href="#step"><code>step</code></a> nicht erfüllt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        Ein <code>&#x3C;input></code>-, {{HTMLElement("select")}}- oder
        {{HTMLElement("textarea")}}-Element mit dem Attribut
        <a href="#required"><code>required</code></a>.
        Entspricht nur Elementen, für die eine Eingabe verlangt werden kann.
        Bei anderen Elementen führt das Attribut nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        Ein <code>&#x3C;input></code>-, {{HTMLElement("select")}}- oder
        {{HTMLElement("textarea")}}-Element ohne das Attribut
        <a href="#required"><code>required</code></a>.
        Entspricht nicht Elementen, für die keine Eingabe verlangt werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code>- und {{HTMLElement("textarea")}}-Elemente,
        die derzeit keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, wird aber beim Verlassen des
        Elements aktiviert. Entspricht einer ungültigen Eingabe erst nach einer
        Benutzerinteraktion, etwa wenn das Steuerelement fokussiert und wieder
        verlassen wurde oder versucht wurde, das Formular mit dem ungültigen
        Steuerelement zu übermitteln.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die eine Auswahloberfläche anzeigen,
        über die Benutzer einen Wert auswählen können, beispielsweise
        <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>.
        Die Pseudoklasse gilt nur, während das Element geöffnet ist, also
        während die Auswahloberfläche angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Die Beschriftung eines Kontrollkästchens kann unterschiedlich gestaltet werden, je nachdem, ob das Kontrollkästchen ausgewählt ist. In diesem Beispiel gestalten wir {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar auf ein ausgewähltes Eingabefeld folgt. Wenn `input` nicht ausgewählt ist, wenden wir keine Stile an.

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

Mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) können verschiedene Arten von Formularsteuerelementen anhand ihres [`type`](#type) ausgewählt werden. CSS-Attributselektoren stimmen mit Elementen überein, wenn ein Attribut vorhanden ist oder einen bestimmten Wert hat.

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

Standardmäßig wird Platzhaltertext durchscheinend oder hellgrau dargestellt. Das Pseudoelement {{cssxref('::placeholder')}} steht für den [`placeholder`-Text](#placeholder) eines Eingabefelds. Es kann mit einer begrenzten Auswahl an CSS-Eigenschaften gestaltet werden.

```css
::placeholder {
  color: blue;
}
```

In einer Regel mit `::placeholder` im Selektor können nur die CSS-Eigenschaften verwendet werden, die auch für das Pseudoelement {{cssxref("::first-line")}} gelten.

### caret-color

Die CSS-Eigenschaft {{cssxref("caret-color")}} ist besonders für Elemente zur Texteingabe relevant. Mit ihr können Sie die Farbe der Einfügemarke festlegen:

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

Mit der Eigenschaft {{cssxref("field-sizing")}} können Sie steuern, wie die Größe von Formulareingabefeldern bestimmt wird. Standardmäßig erhalten sie eine bevorzugte Größe. Mit dieser Eigenschaft können Sie dieses Verhalten überschreiben, sodass Formularsteuerelemente ihre Größe an ihren Inhalt anpassen.

Die Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die eng am Inhalt anliegen und mit zunehmender Texteingabe wachsen. Das funktioniert mit Eingabetypen, die eine direkte Texteingabe erlauben, beispielsweise [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url), mit dem Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) sowie mit {{htmlelement("textarea")}}-Elementen.

### object-position und object-fit

In bestimmten Fällen – üblicherweise bei nicht textbasierten Eingaben und spezialisierten Oberflächen – ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Dann können seine Positionierung und Größe innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Gestaltung

Weitere Informationen zum Hinzufügen von Farbe zu HTML-Elementen finden Sie unter:

- [Farbe mit CSS auf HTML-Elemente anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color).

Siehe auch:

- [HTML-Formulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittene Gestaltung von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Weitere Funktionen

### Beschriftungen

Beschriftungen sind erforderlich, um ein `<input>` mit einem erklärenden Text zu verknüpfen. Das Element {{HTMLElement("label")}} stellt Informationen zu einem Formularfeld bereit und ist dafür _immer_ geeignet, sofern keine besonderen Layoutanforderungen entgegenstehen. Ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll, ist stets sinnvoll.

#### Zugeordnete Beschriftungen

Die semantische Verknüpfung von `<input>`- und `<label>`-Elementen ist für assistive Technologien wie Screenreader hilfreich. Wenn Sie die beiden Elemente über das Attribut [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) von `<label>` verknüpfen, können Screenreader den Benutzern die Eingabefelder genauer beschreiben.

Ein einfacher Text neben dem `<input>`-Element reicht nicht aus. Für Benutzerfreundlichkeit und Barrierefreiheit ist vielmehr ein implizites oder explizites {{HTMLElement("label")}} erforderlich:

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

Neben einem zugänglichen Namen bietet die Beschriftung auch eine größere anklickbare beziehungsweise berührbare Fläche für Benutzer von Maus und Touchscreen. Sind ein `<label>` und ein `<input>` verknüpft, erhält das `<input>` den Fokus, wenn eines der beiden angeklickt wird. Wenn Sie das Eingabefeld lediglich mit einfachem Text „beschriften“, geschieht dies nicht. Dass die Aufforderung zum Aktivierungsbereich des Eingabefelds gehört, hilft insbesondere Menschen mit motorischen Einschränkungen.

Als Webentwickler sollten wir niemals davon ausgehen, dass andere Menschen alles wissen, was wir wissen. Die Vielfalt der Menschen, die das Web und damit auch Ihre Website nutzen, bedeutet praktisch zwangsläufig, dass manche Besucher Ihre Formulare aufgrund anderer Denkweisen oder Umstände ganz anders verstehen als Sie – sofern eindeutige und gut präsentierte Beschriftungen fehlen.

#### Platzhalter sind nicht barrierefrei

Mit dem Attribut [`placeholder`](#placeholder) können Sie Text festlegen, der im Inhaltsbereich eines leeren `<input>`-Elements angezeigt wird. Das Verständnis Ihrer Formulare darf niemals vom Platzhalter abhängen. Er ist keine Beschriftung und sollte auch nicht als Ersatz dafür verwendet werden. Ein Platzhalter soll lediglich darauf hinweisen, wie ein eingegebener Wert aussehen könnte, nicht das Feld erklären oder zur Eingabe auffordern.

Platzhalter sind nicht nur für Screenreader unzugänglich: Sobald Benutzer Text in das Formularsteuerelement eingeben oder bereits ein Wert vorhanden ist, verschwindet der Platzhalter. Browser mit automatischer Seitenübersetzung überspringen bei der Übersetzung möglicherweise Attribute, sodass der `placeholder` unter Umständen nicht übersetzt wird.

> [!NOTE]
> Vermeiden Sie das Attribut [`placeholder`](#placeholder) nach Möglichkeit. Wenn Sie ein `<input>`-Element beschriften müssen, verwenden Sie das Element {{HTMLElement("label")}}.

### Clientseitige Validierung

> [!WARNING]
> Clientseitige Validierung ist nützlich, garantiert aber _nicht_, dass der Server gültige Daten erhält. Wenn Daten ein bestimmtes Format haben müssen, überprüfen Sie sie _immer_ auch auf dem Server und geben Sie bei einem ungültigen Format eine [HTTP-Antwort mit Status `400`](/de/docs/Web/HTTP/Reference/Status/400) zurück.

Wie oben im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) beschrieben, können Sie Eingabefelder mit CSS anhand ihres aktuellen Zustands über {{cssxref(":valid")}} oder {{cssxref(":invalid")}} gestalten. Darüber hinaus validiert der Browser Formulareingaben clientseitig, wenn versucht wird, ein Formular zu übermitteln. Besteht ein Formularsteuerelement die Constraint Validation nicht, zeigen unterstützende Browser beim ersten ungültigen Steuerelement eine Fehlermeldung an. Dabei wird entweder eine Standardmeldung für die Fehlerart oder eine von Ihnen festgelegte Meldung angezeigt.

Einige Eingabetypen und Attribute schränken die gültigen Werte eines Eingabefelds ein. Beispielsweise erlaubt `<input type="number" min="2" max="10" step="2">` nur die Zahlen 2, 4, 6, 8 und 10. Es können verschiedene Fehler auftreten: `rangeUnderflow`, wenn der Wert kleiner als 2 ist; `rangeOverflow`, wenn er größer als 10 ist; `stepMismatch`, wenn er zwar zwischen 2 und 10 liegt, aber keine gerade ganze Zahl ist und somit die Anforderungen des Attributs `step` nicht erfüllt; oder `typeMismatch`, wenn der Wert keine Zahl ist.

Bei Eingabetypen mit einem periodischen Wertebereich – deren Werte nach dem höchsten möglichen Wert wieder am Anfang beginnen, statt dort zu enden – können die Werte der Eigenschaften [`max`](#max) und [`min`](#min) vertauscht sein. Das bedeutet, dass der zulässige Bereich bei `min` beginnt, über den höchsten Wert hinaus beim niedrigsten möglichen Wert fortgesetzt wird und bei `max` endet. Dies ist besonders bei Datums- und Uhrzeitangaben nützlich, etwa wenn Sie einen Zeitraum von 20 Uhr bis 8 Uhr zulassen möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und ihre Werte können zu einem bestimmten Fehler im [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Fehler des Validitätsobjekts hängen von den Attributen des
    <code>&lt;input&gt;</code> und ihren Werten ab:
  </caption>
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Zugehörige Eigenschaft</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#max"><code>max</code></a></td>
      <td>[`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow)</td>
      <td>
        Tritt auf, wenn der Wert größer als der durch das Attribut <code>max</code>
        festgelegte Höchstwert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Zeichenanzahl größer ist, als die Eigenschaft
        <code>maxlength</code> erlaubt.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner als der durch das Attribut <code>min</code>
        festgelegte Mindestwert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Zeichenanzahl kleiner ist, als die Eigenschaft
        <code>minlength</code> verlangt.
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn das Attribut <code>pattern</code> einen gültigen regulären
        Ausdruck enthält und <code>value</code> ihm nicht entspricht.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das Attribut <code>required</code> vorhanden ist, der
        Wert aber <code>null</code> ist oder ein Optionsfeld beziehungsweise
        Kontrollkästchen nicht ausgewählt wurde.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht der festgelegten Schrittweite. Die
        Standardschrittweite ist <code>1</code>. Fehlt <code>step</code>, sind
        bei <code>type="number"</code> daher nur ganze Zahlen gültig.
        <code>step="any"</code> löst diesen Fehler niemals aus.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht den richtigen Typ hat, beispielsweise
        wenn eine E-Mail-Adresse kein <code>@</code> oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularsteuerelement kein Attribut `required` hat, ist ein fehlender Wert beziehungsweise eine leere Zeichenfolge nicht ungültig. Mit Ausnahme von `required` führt eine leere Zeichenfolge auch dann nicht zu einem Fehler, wenn die oben genannten Attribute vorhanden sind.

Wir können die zulässigen Werte begrenzen. Unterstützende Browser validieren diese Formularwerte dann selbst und informieren Benutzer bei der Übermittlung über Fehler.

Zusätzlich zu den in der Tabelle beschriebenen Fehlern enthält die Schnittstelle `validityState` die schreibgeschützten booleschen Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Bei jeder dieser booleschen Eigenschaften zeigt `true` an, dass der jeweilige Grund für eine fehlgeschlagene Validierung vorliegt. Eine Ausnahme ist die Eigenschaft `valid`: Sie ist `true`, wenn der Wert des Elements alle Anforderungen erfüllt.

Liegt ein Fehler vor, informieren unterstützende Browser die Benutzer und verhindern die Formularübermittlung. Beachten Sie: Ist eine benutzerdefinierte Fehlermeldung auf einen Truthy-Wert gesetzt – also auf etwas anderes als eine leere Zeichenfolge oder `null` –, wird die Formularübermittlung verhindert. Gibt es keine benutzerdefinierte Fehlermeldung und ist keine der anderen Fehlereigenschaften `true`, ist `valid` `true` und das Formular kann übermittelt werden.

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

Die letzte Zeile, die die benutzerdefinierte Validierungsmeldung auf eine leere Zeichenfolge setzt, ist entscheidend. Macht ein Benutzer einen Fehler und wird eine Validierungsmeldung gesetzt, kann das Formular trotz später gültiger Werte erst wieder übermittelt werden, wenn die Meldung `null` ist.

#### Beispiel für eine benutzerdefinierte Validierungsfehlermeldung

Wenn Sie bei einer fehlgeschlagenen Validierung eine eigene Fehlermeldung anzeigen möchten, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die für `<input>`-Elemente und verwandte Elemente verfügbar ist. Betrachten Sie das folgende Formular:

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

Die grundlegenden HTML-Funktionen zur Formularvalidierung zeigen hier eine Standardfehlermeldung an, wenn Sie versuchen, das Formular ohne einen gültigen Wert oder mit einem Wert zu übermitteln, der nicht dem `pattern` entspricht.

Wenn Sie stattdessen eigene Fehlermeldungen anzeigen möchten, können Sie JavaScript wie im folgenden Beispiel verwenden:

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

Das Beispiel wird folgendermaßen dargestellt:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz zusammengefasst:

- Jedes Mal, wenn sich der Wert des Eingabeelements ändert, prüfen wir seine Gültigkeit, indem wir im Handler des `input`-Ereignisses die Methode `checkValidity()` ausführen.
- Ist der Wert ungültig, wird ein `invalid`-Ereignis ausgelöst und dessen Handler ausgeführt. Dort bestimmen wir mit einem `if ()`-Block, ob der Wert wegen eines leeren Felds oder wegen einer Abweichung vom Muster ungültig ist, und legen eine benutzerdefinierte Validierungsfehlermeldung fest.
- Ist der Eingabewert beim Drücken der Schaltfläche zum Übermitteln ungültig, wird daraufhin eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Ist er gültig, wird das Formular wie erwartet übermittelt. Dazu muss die benutzerdefinierte Validierungsfehlermeldung zurückgesetzt werden, indem `setCustomValidity()` mit einer leeren Zeichenfolge aufgerufen wird. Deshalb tun wir dies bei jedem `input`-Ereignis. Andernfalls würde ein Eingabefeld mit einer zuvor festgelegten Fehlermeldung auch dann noch als ungültig gelten, wenn es bei der Übermittlung inzwischen einen gültigen Wert enthält.

> [!NOTE]
> Validieren Sie Eingabeanforderungen immer sowohl auf Client- als auch auf Serverseite. Die Constraint Validation ersetzt die Validierung _auf dem Server_ nicht. Ältere Browser oder böswillige Akteure können weiterhin ungültige Werte senden.

> [!NOTE]
> Firefox unterstützte über viele Versionen hinweg das proprietäre Fehlerattribut `x-moz-errormessage`, mit dem sich auf ähnliche Weise eigene Fehlermeldungen festlegen ließen. Es wurde mit Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Welche Eingaben für bestimmte `<input>`-Typen zulässig sind, hängt von der Locale ab. In manchen Locales ist 1,000.00 eine gültige Zahl, während dieselbe Zahl in anderen als 1.000,00 eingegeben werden muss.

Firefox verwendet die folgenden Heuristiken, um die Locale für die Validierung der Benutzereingabe zu bestimmen (zumindest bei `type="number"`):

- Zunächst wird die Sprache aus einem `lang`-/`xml:lang`-Attribut des Elements oder eines seiner übergeordneten Elemente verwendet.
- Dann wird die Sprache aus einem etwaigen `Content-Language`-HTTP-Header verwendet.
- Ist keine Sprache angegeben, wird die Locale des Browsers verwendet.

## Barrierefreiheit

### Beschriftungen

Wenn Sie Eingabefelder einbinden, müssen Sie für die Barrierefreiheit auch Beschriftungen hinzufügen. Nur so können Menschen, die assistive Technologien verwenden, den Zweck eines Eingabefelds erkennen. Zudem erhält das zugehörige Formularsteuerelement den Fokus, wenn seine Beschriftung angeklickt oder berührt wird. Das verbessert auch für sehende Benutzer die Zugänglichkeit und Bedienbarkeit, weil die anklickbare beziehungsweise berührbare Fläche zum Aktivieren des Steuerelements größer wird. Besonders bei kleinen Optionsfeldern und Kontrollkästchen ist das hilfreich oder sogar notwendig. Allgemeine Informationen finden Sie unter [Beschriftungen](#beschriftungen).

Das folgende Beispiel zeigt, wie Sie ein `<label>` wie oben beschrieben mit einem `<input>`-Element verknüpfen. Dazu benötigt das `<input>` ein Attribut `id`. Das `<label>` benötigt ein Attribut `for` mit demselben Wert wie die `id` des Eingabefelds.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingabefelder sollten eine ausreichend große Fläche bieten, damit sie sich leicht aktivieren lassen. Das hilft unter anderem Menschen mit motorischen Einschränkungen und Personen, die weniger präzise Eingabemethoden wie einen Eingabestift oder ihre Finger verwenden. Empfohlen wird eine interaktive Mindestgröße von 44 × 44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels).

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>;
        auflistbares, übermittelbares, zurücksetzbares und formularzugeordnetes Element;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a>.
        Wenn <a href="#type"><code>type</code></a> nicht <code>hidden</code> ist,
        außerdem beschriftbares Element und wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Auslassen von Tags</th>
      <td>Ein Start-Tag ist erforderlich; ein End-Tag darf nicht vorhanden sein.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a>
        akzeptiert.
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

- CSS-Eigenschaft {{cssxref("appearance")}}
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Native Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Constraint Validation für Formulare](/de/docs/Web/HTML/Guides/Constraint_validation)
- [HTML-Formulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
