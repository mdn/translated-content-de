---
title: HTML-Eingabeelement `<input>`
short-title: <input>
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 6488b82388db9e593ec28be1d845688e29c679e1
---

Das [HTML](/de/docs/Web/HTML)-Element **`<input>`** wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, die Daten von Benutzern entgegennehmen. Je nach Gerät und {{Glossary("user_agent", "User Agent")}} stehen zahlreiche Arten von Eingabedaten und Steuerelement-Widgets zur Verfügung. Das Element `<input>` gehört aufgrund der großen Anzahl möglicher Kombinationen von Eingabetypen und Attributen zu den leistungsfähigsten und komplexesten Elementen in HTML.

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

Wie ein `<input>` funktioniert, hängt erheblich vom Wert seines Attributs [`type`](#type) ab. Daher werden die verschiedenen Typen auf eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird standardmäßig der Typ `text` verwendet.

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
      <th>Grundlegende Beispiele</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/button", "button")}}</td>
      <td>
        Eine Schaltfläche ohne Standardverhalten, die den Wert des Attributs <a href="#value"><code>value</code></a> anzeigt, der standardmäßig leer ist.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Kontrollkästchen, mit dem einzelne Werte ausgewählt bzw. abgewählt werden können.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerelement zum Festlegen einer Farbe; in unterstützenden Browsern wird bei Aktivierung ein Farbwähler geöffnet.
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
        Ein Steuerelement zum Eingeben eines Datums (Jahr, Monat und Tag, ohne Uhrzeit).
        In unterstützenden Browsern wird bei Aktivierung ein Datumsauswähler oder Zahlenräder für Jahr, Monat und Tag geöffnet.
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
        Ein Steuerelement zum Eingeben eines Datums und einer Uhrzeit ohne Zeitzone. In unterstützenden Browsern wird bei Aktivierung ein Datumsauswähler oder Zahlenräder für Datums- und Zeitkomponenten geöffnet.
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
        Ein Feld zum Bearbeiten einer E-Mail-Adresse. Es sieht wie eine <code>text</code>-Eingabe aus, verfügt in unterstützenden Browsern und Geräten mit dynamischen Tastaturen jedoch über Validierungsparameter und eine passende Tastatur.
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
        Verwenden Sie das Attribut <a href="#accept"><code>accept</code></a>, um die Dateitypen festzulegen, die das Steuerelement auswählen kann.
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
        Ein nicht angezeigtes Steuerelement, dessen Wert jedoch an den Server gesendet wird. In der nächsten Spalte befindet sich ein Beispiel, aber es ist versteckt!
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
        Eine grafische <code>submit</code>-Schaltfläche. Zeigt ein durch das Attribut <code>src</code> definiertes Bild an.
        Das Attribut <a href="#alt"><code>alt</code></a> wird angezeigt, wenn das Bild-<a href="#src"><code>src</code></a> fehlt.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>Ein Steuerelement zum Eingeben eines Monats und Jahres ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerelement zum Eingeben einer Zahl. Zeigt ein Drehfeld an und fügt eine Standardvalidierung hinzu. Auf einigen Geräten mit dynamischen Tastaturen wird ein numerisches Tastenfeld angezeigt.
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
        Warnt Benutzer, wenn die Website nicht sicher ist.
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
        Eine Optionsschaltfläche, mit der ein einzelner Wert aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert ausgewählt werden kann.
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
        Ein Steuerelement zum Eingeben einer Zahl, deren genauer Wert nicht wichtig ist.
        Wird als Bereichs-Widget angezeigt und verwendet standardmäßig den mittleren Wert.
        Wird zusammen mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich akzeptabler Werte festzulegen.
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
        Ein einzeiliges Textfeld zum Eingeben von Suchzeichenfolgen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Unterstützende Browser können ein Löschsymbol enthalten, mit dem das Feld geleert werden kann. Auf einigen Geräten mit dynamischen Tastaturen wird anstelle der Eingabetaste ein Suchsymbol angezeigt.
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
        Ein Steuerelement zum Eingeben einer Telefonnummer. Auf einigen Geräten mit dynamischen Tastaturen wird ein Telefontastenfeld angezeigt.
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
      <td>Ein Steuerelement zum Eingeben eines Zeitwerts ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zum Eingeben einer URL. Es sieht wie eine <code>text</code>-Eingabe aus, verfügt in unterstützenden Browsern und Geräten mit dynamischen Tastaturen jedoch über Validierungsparameter und eine passende Tastatur.
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
        Ein Steuerelement zum Eingeben eines Datums, das aus einer Wochenjahreszahl und einer Wochennummer ohne Zeitzone besteht.
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
        Ein Steuerelement zum Eingeben eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Sekundenbruchteil) basierend auf der UTC-Zeitzone.
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

Das Element `<input>` ist aufgrund seiner Attribute so leistungsfähig; das oben mit Beispielen beschriebene Attribut [`type`](#type) ist dabei das wichtigste. Da jedes `<input>`-Element unabhängig vom Typ auf der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) basiert, teilen sie technisch gesehen exakt denselben Satz von Attributen. In der Praxis wirken sich die meisten Attribute jedoch nur auf eine bestimmte Teilmenge von Eingabetypen aus. Außerdem hängt die Auswirkung einiger Attribute auf eine Eingabe vom Eingabetyp ab, sodass verschiedene Eingabetypen unterschiedlich beeinflusst werden.

Dieser Abschnitt enthält eine Tabelle mit allen Attributen und einer kurzen Beschreibung. Darauf folgt eine Liste, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, denen es zugeordnet ist. Attribute, die den meisten oder allen Eingabetypen gemeinsam sind, werden weiter unten ausführlicher definiert. Attribute, die für bestimmte Eingabetypen einzigartig sind – oder Attribute, die allen Eingabetypen gemeinsam sind, aber bei Verwendung mit einem bestimmten Eingabetyp ein besonderes Verhalten aufweisen –, sind stattdessen auf den Seiten dieser Typen dokumentiert.

Zu den Attributen für das Element `<input>` gehören die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) sowie zusätzlich:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                             |
| --------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis auf den erwarteten Dateityp in Datei-Upload-Steuerelementen                                      |
| [`alpha`](#alpha)                             | `color`                                                                      | Deckkraft der Farbe                                                                                      |
| [`alt`](#alt)                                 | `image`                                                                      | `alt`-Attribut für den Bildtyp. Für Barrierefreiheit erforderlich                                        |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Steuert die automatische Großschreibung im eingegebenen Text                                             |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis für die Funktion zum automatischen Ausfüllen von Formularen                                      |
| [`capture`](#capture)                         | `file`                                                                       | Methode zur Medienerfassung in Datei-Upload-Steuerelementen                                              |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Ob der Befehl oder das Steuerelement aktiviert ist                                                       |
| [`colorspace`](#colorspace)                   | `color`                                                                      | Der {{Glossary("Color_space", "Farbraum")}}, der zum Auswählen des Farbwerts verwendet werden soll       |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfelds zum Senden der Schreibrichtung des Elements bei der Formularübermittlung          |
| [`disabled`](#disabled)                       | alle                                                                         | Ob das Formular-Steuerelement deaktiviert ist                                                            |
| [`form`](#form)                               | alle                                                                         | Verknüpft das Steuerelement mit einem Formularelement                                                    |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | Für die Formularübermittlung zu verwendende URL                                                          |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Für die Formularübermittlung zu verwendender Kodierungstyp des Formulardatensatzes                       |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | Für die Formularübermittlung zu verwendende HTTP-Methode                                                 |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Überspringt die Validierung von Formular-Steuerelementen bei der Formularübermittlung                    |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für die Formularübermittlung                                                            |
| [`height`](#height)                           | `image`                                                                      | Wie das Attribut `height` für {{htmlelement('img')}}; vertikale Dimension                                |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des Attributs `id` der {{htmlelement('datalist')}} mit Optionen zur automatischen Vervollständigung |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Höchstwert                                                                                               |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) von `value`                                                          |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Mindestwert                                                                                              |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Mindestlänge (Anzahl der Zeichen) von `value`                                                            |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolean. Ob mehrere Werte erlaubt werden                                                                 |
| [`name`](#name)                               | alle                                                                         | Name des Formular-Steuerelements. Wird als Teil eines Name-Wert-Paars mit dem Formular übermittelt       |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Muster, dem `value` entsprechen muss, um gültig zu sein                                                  |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der im Formular-Steuerelement erscheint, wenn kein Wert festgelegt ist                             |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Kennzeichnet ein `<input type="button">` als Steuerelement für ein Popover-Element                       |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                         |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht bearbeitbar                                                                  |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolean. Für das Absenden des Formulars ist ein Wert erforderlich bzw. muss aktiviert sein               |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe des Steuerelements                                                                                 |
| [`src`](#src)                                 | `image`                                                                      | Wie das Attribut `src` für {{htmlelement('img')}}; Adresse der Bildressource                             |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Gültige schrittweise Werte                                                                               |
| [`switch`](#switch)                           | `checkbox`                                                                   | Ob die Kontrollkästchen-Eingabe als Schalter gerendert werden soll                                       |
| [`type`](#type)                               | alle                                                                         | Typ des Formular-Steuerelements                                                                          |
| [`value`](#value)                             | alle außer `image`                                                           | Der Wert des Steuerelements. In HTML angegeben entspricht er dem Anfangswert                             |
| [`width`](#width)                             | `image`                                                                      | Wie das Attribut `width` für {{htmlelement('img')}}                                                      |

Nach den Beschreibungen der Standardattribute sind einige zusätzliche nicht standardisierte Attribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Nur für den Eingabetyp `file` gültig. Das Attribut `accept` definiert, welche Dateitypen in einem `file`-Upload-Steuerelement auswählbar sind. Siehe den Eingabetyp {{HTMLElement("input/file", "file")}}.

- `alpha` {{experimental_inline}}
  - : Nur für den Eingabetyp `color` gültig. Das Attribut `alpha` ermöglicht es dem Endbenutzer, die Deckkraft der ausgewählten Farbe festzulegen.

- `alt`
  - : Nur für die Schaltfläche `image` gültig. Das Attribut `alt` stellt Alternativtext für das Bild bereit und zeigt den Wert des Attributs an, wenn das Bild-[`src`](#src) fehlt oder aus anderen Gründen nicht geladen werden kann. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und gegebenenfalls auf welche Weise. Weitere Informationen finden Sie auf der Seite zum globalen Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolean-Attribut!) Das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) akzeptiert als Wert eine durch Leerzeichen getrennte Zeichenfolge, die beschreibt, welche Art von Autovervollständigungsfunktionalität die Eingabe gegebenenfalls bereitstellen soll. Eine typische Implementierung der Autovervollständigung ruft zuvor in dasselbe Eingabefeld eingegebene Werte ab, es können aber auch komplexere Formen der Autovervollständigung existieren. Beispielsweise könnte ein Browser in die Kontaktliste eines Geräts integriert werden, um `email`-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Zulässige Werte finden Sie unter [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value).

    Das Attribut `autocomplete` ist für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password` gültig. Dieses Attribut hat keine Auswirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen außer `checkbox`, `radio`, `file` oder einem der Schaltflächentypen gültig.

    Weitere Informationen, einschließlich Informationen zur Kennwortsicherheit und darüber, wie sich `autocomplete` für `hidden` geringfügig von anderen Eingabetypen unterscheidet, finden Sie unter dem [Attribut `autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete).

- `autofocus`
  - : Ein Boolean-Attribut, das bei Vorhandensein angibt, dass die Eingabe automatisch den Fokus erhalten soll, wenn die Seite vollständig geladen wurde (oder wenn der {{HTMLElement("dialog")}}, der das Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem Attribut `autofocus` kann den Fokus erhalten, bevor das Ereignis [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das Attribut `autofocus` besitzen. Wenn es bei mehr als einem Element gesetzt ist, erhält das erste Element mit dem Attribut den Fokus.

    Das Attribut `autofocus` kann nicht bei Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren eines Formular-Steuerelements kann sehbehinderte Personen, die Screenreader-Technologie verwenden, sowie Personen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, „teleportieren“ Screenreader ihre Benutzer zum Formular-Steuerelement, ohne sie vorher zu warnen.

    Berücksichtigen Sie bei der Verwendung des Attributs `autofocus` die Barrierefreiheit sorgfältig. Das automatische Fokussieren eines Steuerelements kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann außerdem auf einigen Touch-Geräten dynamische Tastaturen einblenden. Während ein Screenreader die Beschriftung des Formular-Steuerelements mit Fokus ankündigt, kündigt er vor der Beschriftung nichts an. Auch sehende Benutzer kleiner Geräte übersehen gleichermaßen den durch den vorangehenden Inhalt geschaffenen Kontext.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Das in der HTML-Media-Capture-Spezifikation eingeführte und nur für den Eingabetyp `file` gültige Attribut `capture` definiert, welches Medium – Mikrofon, Video oder Kamera – verwendet werden soll, um in unterstützten Szenarien eine neue Datei für den Upload über ein `file`-Upload-Steuerelement aufzunehmen. Siehe den Eingabetyp {{HTMLElement("input/file", "file")}}.
- `checked`
  - : Für die Typen `radio` und `checkbox` gültig. `checked` ist ein Boolean-Attribut. Bei einem Typ `radio` gibt es an, dass die Optionsschaltfläche die aktuell ausgewählte in der Gruppe gleichnamiger Optionsschaltflächen ist. Bei einem Typ `checkbox` gibt es an, dass das Kontrollkästchen standardmäßig aktiviert ist, wenn die Seite geladen wird. Es gibt _nicht_ an, ob dieses Kontrollkästchen aktuell aktiviert ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`checked`-IDL-Attribut von `HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabe-Steuerelementen werden die Werte von Kontrollkästchen und Optionsschaltflächen nur dann in die übermittelten Daten aufgenommen, wenn sie aktuell `checked` sind. Wenn dies der Fall ist, werden der Name und die Werte der aktivierten Steuerelemente übermittelt.
    >
    > Wenn beispielsweise ein Kontrollkästchen mit `name` `fruit` einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, enthalten die übermittelten Formulardaten `fruit=cherry`. Ist das Kontrollkästchen nicht aktiv, wird es überhaupt nicht in den Formulardaten aufgeführt. Der Standard-`value` für Kontrollkästchen und Optionsschaltflächen ist `on`.

- `colorspace` {{experimental_inline}}
  - : Nur für den Eingabetyp `color` gültig. Das Attribut `colorspace` gibt den {{Glossary("Color_space", "Farbraum")}} an, der von der Eingabe `type="color"` verwendet wird. Mögliche {{Glossary("enumerated", "aufgezählte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies umfasst Werte von {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}} und {{cssxref("hex-color")}}. Der Farbwert ist auf 8 Bit pro Komponente `r`, `g` und `b` begrenzt. Dies ist der Standard.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display-P3-Farbraum")}}, z. B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Für die Eingabetypen `hidden`, `text`, `search`, `url`, `tel` und `email` gültig. Das Attribut `dirname` ermöglicht die Übermittlung der Schreibrichtung des Elements. Wenn es enthalten ist, wird das Formular-Steuerelement mit zwei Name-Wert-Paaren übermittelt: dem ersten aus [`name`](#name) und [`value`](#value) sowie dem zweiten mit dem Wert des Attributs `dirname` als Namen und einem vom Browser festgelegten Wert von `ltr` oder `rtl`.

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

    Wenn das obige Formular übermittelt wird, führt die Eingabe dazu, dass sowohl das Paar `name`/`value` `fruit=cherry` als auch das Paar `dirname`/Richtung `fruit-dir=ltr` gesendet werden.
    Weitere Informationen finden Sie unter dem [Attribut `dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das bei Vorhandensein angibt, dass Benutzer nicht mit der Eingabe interagieren können sollen. Deaktivierte Eingaben werden üblicherweise in einer blasseren Farbe oder mit einer anderen Kennzeichnung dargestellt, die zeigt, dass das Feld nicht verfügbar ist.

    Insbesondere empfangen deaktivierte Eingaben kein Ereignis [`click`](/de/docs/Web/API/Element/click_event) und werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl dies nicht von der Spezifikation verlangt wird, behält Firefox standardmäßig den [dynamischen deaktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg bei. Verwenden Sie das Attribut [`autocomplete`](#autocomplete), um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Eine Zeichenfolge, die das {{HTMLElement("form")}}-Element angibt, dem die Eingabe zugeordnet ist, also seinen **Formularbesitzer**. Der Wert dieser Zeichenfolge muss, sofern vorhanden, mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das Element `<input>` dem nächstgelegenen umschließenden Formular zugeordnet, sofern eines vorhanden ist.

    Mit dem Attribut `form` können Sie eine Eingabe an einer beliebigen Stelle im Dokument platzieren und sie dennoch in ein Formular an einer anderen Stelle im Dokument einschließen.

    > [!NOTE]
    > Eine Eingabe kann nur einem Formular zugeordnet sein.

- `formaction`
  - : Nur für die Eingabetypen `image` und `submit` gültig. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formenctype`
  - : Nur für die Eingabetypen `image` und `submit` gültig. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formmethod`
  - : Nur für die Eingabetypen `image` und `submit` gültig. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formnovalidate`
  - : Nur für die Eingabetypen `image` und `submit` gültig. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formtarget`
  - : Nur für die Eingabetypen `image` und `submit` gültig. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `height`
  - : Nur für die Eingabeschaltfläche `image` gültig. `height` ist die Höhe der Bilddatei, die als grafische Senden-Schaltfläche angezeigt wird. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.
- `id`
  - : Ein globales Attribut, das für alle Elemente einschließlich aller Eingabetypen gültig ist. Es definiert einen eindeutigen Identifikator (ID), der im gesamten Dokument eindeutig sein muss. Sein Zweck besteht darin, das Element beim Verknüpfen zu identifizieren. Der Wert wird als Wert des Attributs `for` von {{htmlelement('label')}} verwendet, um die Beschriftung mit dem Formular-Steuerelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Ein globaler Wert, der für alle Elemente gültig ist. Er gibt Browsern einen Hinweis auf die Art der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Zu den Werten gehören `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der für das Attribut `list` angegebene Wert sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. Das `<datalist>` stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit [`type`](#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color` gültig.

    Laut Spezifikationen wird das Attribut `list` nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder einem der Schaltflächentypen unterstützt.

    Abhängig vom Browser sehen Benutzer möglicherweise eine vorgeschlagene benutzerdefinierte Farbpalette, Teilstriche entlang eines Bereichs oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber nicht aufgelistete Werte zulässt. Prüfen Sie die Tabelle zur [Browser-Kompatibilität](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen.

    Siehe das Element {{htmlelement('datalist')}}.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`. Es definiert den größten Wert im Bereich zulässiger Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, besteht das Element die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht. Wenn der Wert des Attributs `max` keine Zahl ist, besitzt das Element keinen Höchstwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist, beispielsweise bei Daten oder Uhrzeiten, kann der Wert von `max` kleiner als der Wert von `min` sein. Dies gibt an, dass der Bereich umgebrochen werden kann; so können Sie beispielsweise einen Zeitbereich von 22 Uhr bis 4 Uhr festlegen.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`. Es definiert die maximale Zeichenfolgenlänge, gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}, die Benutzer in das Feld eingeben können. Dies muss ein ganzzahliger Wert größer oder gleich 0 sein. Wenn kein `maxlength` oder ein ungültiger Wert angegeben ist, hat das Feld keine Maximallänge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe besteht die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn die Länge des in das Feld eingegebenen Textes größer als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das Attribut `maxlength` erlaubt sind. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Weitere Informationen finden Sie unter [clientseitige Validierung](#clientseitige_validierung).

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`. Es definiert den niedrigsten Wert im Bereich zulässiger Werte. Wenn der in das Element eingegebene [`value`](#value) kleiner ist, besteht das Element die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht. Wenn der Wert des Attributs `min` keine Zahl ist, besitzt das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem Wert des Attributs `max` sein. Wenn das Attribut `min` vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das Attribut `min` gültig ist und ein nicht leerer Wert kleiner als das durch `min` erlaubte Minimum ist, verhindert die Constraint-Validierung das Übermitteln des Formulars. Weitere Informationen finden Sie unter [clientseitige Validierung](#clientseitige_validierung).

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist, beispielsweise bei Daten oder Uhrzeiten, kann der Wert von `max` kleiner als der Wert von `min` sein. Dies gibt an, dass der Bereich umgebrochen werden kann; so können Sie beispielsweise einen Zeitbereich von 22 Uhr bis 4 Uhr festlegen.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`. Es definiert die minimale Zeichenfolgenlänge, gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}, die Benutzer in das Eingabefeld eingeben können. Dies muss ein nicht negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` oder ein ungültiger Wert angegeben ist, besitzt die Eingabe keine Mindestlänge.

    Die Eingabe besteht die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} beträgt, wodurch das Übermitteln des Formulars verhindert wird. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Weitere Informationen finden Sie unter [clientseitige Validierung](#clientseitige_validierung).

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das Boolean-Attribut `multiple` bedeutet, wenn es gesetzt ist, dass Benutzer in dem E-Mail-Widget durch Kommas getrennte E-Mail-Adressen eingeben oder mit der Eingabe `file` mehr als eine Datei auswählen können. Siehe die Eingabetypen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}}.

- `name`
  - : Eine Zeichenfolge, die einen Namen für das Eingabe-Steuerelement angibt. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie `name` als erforderliches Attribut, auch wenn es das nicht ist. Wenn für eine Eingabe kein `name` angegeben ist oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, nicht aktivierte Optionsschaltflächen, nicht aktivierte Kontrollkästchen und Zurücksetzen-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_` : Wenn dies als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe vom {{Glossary("user_agent", "User Agent")}} automatisch auf die für die Übermittlung des Formulars verwendete Zeichenkodierung gesetzt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das Attribut [`name`](#name) erzeugt ein eindeutiges Verhalten für Optionsschaltflächen.

    In einer Gruppe gleichnamiger Optionsschaltflächen kann jeweils nur eine aktiviert sein. Durch das Auswählen einer Optionsschaltfläche in dieser Gruppe wird jede aktuell ausgewählte Optionsschaltfläche derselben Gruppe automatisch deaktiviert. Der Wert dieser einen aktivierten Optionsschaltfläche wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Wenn Sie mit der Tabulatortaste in eine Reihe gleichnamiger Optionsschaltflächen wechseln und eine davon aktiviert ist, erhält diese den Fokus. Wenn sie in der Quellreihenfolge nicht zusammen gruppiert sind und eine der Gruppe aktiviert ist, beginnt das Navigieren mit der Tabulatortaste in die Gruppe beim ersten angetroffenen Gruppenmitglied und überspringt alle nicht aktivierten. Mit anderen Worten: Wenn eine aktiviert ist, überspringt die Tabulatornavigation die nicht aktivierten Optionsschaltflächen in der Gruppe. Wenn keine aktiviert ist, erhält die Optionsschaltflächengruppe den Fokus, wenn die erste Schaltfläche in der gleichnamigen Gruppe erreicht wird.

    Sobald eine der Optionsschaltflächen in einer Gruppe den Fokus hat, navigieren die Pfeiltasten durch alle Optionsschaltflächen mit demselben Namen, selbst wenn diese in der Quellreihenfolge nicht zusammen gruppiert sind.

    Wenn einem Eingabeelement ein `name` gegeben wird, wird dieser Name zu einer Eigenschaft der Eigenschaft [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) des besitzenden Formularelements. Wenn Sie eine Eingabe mit `name` `guest` und eine weitere mit `name` `hat-size` haben, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Nachdem dieser Code ausgeführt wurde, ist `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das Feld `guest` und `hatSize` das Objekt für das Feld `hat-size`.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer integrierten Eigenschaft des Formulars entspricht, da Sie andernfalls die vordefinierte Eigenschaft oder Methode mit dieser Referenz auf die entsprechende Eingabe überschreiben.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`. Das Attribut `pattern` wird verwendet, um einen regulären Ausdruck zu kompilieren, dem der [`value`](#value) der Eingabe entsprechen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom Typ {{jsxref("RegExp")}} verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert wird. Um den Mustertext herum sollten keine Schrägstriche angegeben werden. Beim Kompilieren des regulären Ausdrucks:
    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, sodass eine Übereinstimmung mit dem _gesamten_ Eingabewert erforderlich ist, also `^(?:<pattern>)$`.
    2. wird das Flag `'v'` angegeben, sodass das Muster als Folge von Unicode-Codepunkten statt als {{Glossary("ASCII", "ASCII")}} behandelt wird.

    Wenn das Attribut `pattern` vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert. Wenn das Attribut `pattern` gültig ist und ein nicht leerer Wert nicht mit dem Muster übereinstimmt, verhindert die Constraint-Validierung die Formularübermittlung. Wenn [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck mit jedem durch Komma getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das Attribut `pattern` verwenden, informieren Sie Benutzer durch erklärenden Text in der Nähe über das erwartete Format. Sie können auch ein Attribut [`title`](#title) einfügen, um die Anforderungen für die Übereinstimmung mit dem Muster zu erläutern; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Ergänzung.

    Weitere Informationen finden Sie unter [clientseitige Validierung](#clientseitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`. Das Attribut `placeholder` gibt dem Benutzer einen kurzen Hinweis darauf, welche Art von Informationen im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf den erwarteten Datentyp gibt, und keine Erklärung oder Aufforderung. Der Text darf _keine_ Wagenrückläufe oder Zeilenvorschübe enthalten. Wenn ein Feld beispielsweise den Vornamen eines Benutzers erfassen soll und seine Beschriftung „Vorname“ lautet, könnte ein geeigneter Platzhalter „z. B. Mustafa“ sein.

    > [!NOTE]
    > Das Attribut `placeholder` ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Beschriftungen](#beschriftungen).

- `popovertarget`
  - : Wandelt ein Element `<input type="button">` in eine Popover-Steuerschaltfläche um; als Wert wird die ID des zu steuernden Popover-Elements verwendet. Weitere Einzelheiten finden Sie auf der Übersichtsseite zur [Popover API](/de/docs/Web/API/Popover_API). Das Herstellen einer Beziehung zwischen einem Popover und seiner aufrufenden Schaltfläche mit dem Attribut `popovertarget` hat zwei weitere nützliche Auswirkungen:
    - Der Browser erstellt eine implizite Beziehung über [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) zwischen Popover und Auslöser und platziert das Popover beim Anzeigen an einer logischen Position in der Reihenfolge der Tastaturfokusnavigation. Dadurch ist das Popover für Benutzer von Tastaturen und unterstützenden Technologien (AT) besser zugänglich (siehe auch [Barrierefreiheitsfunktionen von Popovern](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, wodurch es sehr bequem ist, Popover mithilfe von [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) relativ zu ihren Steuerelementen zu positionieren. Weitere Informationen finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die Aktion an, die auf einem Popover-Element ausgeführt werden soll, das durch ein `<input type="button">`-Steuerelement gesteuert wird. Mögliche Werte sind:
    - `"hide"`
      - : Die Schaltfläche blendet ein angezeigtes Popover aus. Wenn Sie versuchen, ein bereits ausgeblendetes Popover auszublenden, wird keine Aktion ausgeführt.
    - `"show"`
      - : Die Schaltfläche zeigt ein ausgeblendetes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Die Schaltfläche schaltet ein Popover zwischen angezeigt und ausgeblendet um. Wenn das Popover ausgeblendet ist, wird es angezeigt; wenn es angezeigt wird, wird es ausgeblendet. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das bei Vorhandensein angibt, dass Benutzer den Wert der Eingabe nicht bearbeiten können sollen. Das Attribut `readonly` wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Weitere Informationen finden Sie unter [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut, das bei Vorhandensein angibt, dass Benutzer einen Wert für die Eingabe angeben müssen, bevor das besitzende Formular übermittelt werden kann. Das Attribut `required` wird von den Eingaben `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Weitere Informationen finden Sie unter [clientseitige Validierung](#clientseitige_validierung) und [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required).

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`. Das Attribut `size` gibt an, wie viel der Eingabe angezeigt wird. Es erzeugt grundsätzlich dasselbe Ergebnis wie das Setzen der CSS-Eigenschaft {{cssxref("width")}}, weist jedoch einige Besonderheiten auf. Die tatsächliche Einheit des Werts hängt vom Eingabetyp ab. Bei `password` und `text` ist es eine Anzahl von Zeichen bzw. `em`-Einheiten mit dem Standardwert `20`; bei den anderen handelt es sich um Pixel bzw. `px`-Einheiten. CSS `width` hat Vorrang vor dem Attribut `size`.

- `src`
  - : Nur für die Eingabeschaltfläche `image` gültig. `src` ist eine Zeichenfolge, die die URL der Bilddatei angibt, die als grafische Senden-Schaltfläche angezeigt wird. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`. Das Attribut [`step`](/de/docs/Web/HTML/Reference/Attributes/step) ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss. Nur Werte, die eine ganze Anzahl von Schritten von der Schrittbasis entfernt sind, sind gültig. Die Schrittbasis ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), wenn angegeben, andernfalls [`value`](#value), oder `0`, wenn keines davon bereitgestellt wird (außer für `week`, das eine Standardschrittbasis von −259.200.000 besitzt, die den Beginn der Woche `1970-W01` darstellt).

    Wenn nicht explizit enthalten:
    - ist `step` für `number` und `range` standardmäßig 1.
    - besitzt jeder Datums-/Uhrzeit-Eingabetyp einen für den Typ geeigneten Standardwert für `step`; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl – ganzzahlig oder Gleitkommazahl – oder der spezielle Wert `any` sein. Dieser bedeutet, dass keine Schrittweite impliziert wird und jeder Wert erlaubt ist, sofern keine anderen Einschränkungen wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) entgegenstehen.

    Wenn Sie beispielsweise `<input type="number" min="10" step="2">` haben, ist jede gerade Ganzzahl `10` oder größer gültig. Wenn bei `<input type="number">` nichts angegeben wird, ist jede Ganzzahl gültig, Gleitkommazahlen wie `4.2` jedoch nicht, weil `step` standardmäßig `1` ist. Damit `4.2` gültig wäre, müsste `step` auf `any`, 0.1 oder 0.2 gesetzt sein oder der Wert von `min` müsste eine auf `.2` endende Zahl sein, beispielsweise `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht der Schrittweitenkonfiguration entsprechen, wird der Wert bei der Constraint-Validierung als ungültig angesehen und entspricht der Pseudoklasse `:invalid`.

    Weitere Informationen finden Sie unter [clientseitige Validierung](#clientseitige_validierung).

- [`switch`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#switch) {{experimental_inline}} {{non-standard_inline}}
  - : Nur für die Eingabe `checkbox` gültig. `switch` ist ein Boolean-Attribut, das angibt, ob die Kontrollkästchen-Eingabe als Schalter gerendert werden soll.

    > [!NOTE]
    > Dieses Attribut ist weiterhin experimentell und wird nur von wenigen Browsern unterstützt. In nicht unterstützten Browsern wird das Attribut ignoriert.

- `tabindex`
  - : Ein globales Attribut, das für alle Elemente einschließlich aller Eingabetypen gültig ist. Es ist ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus erhalten kann, also fokussierbar ist, und ob es an der sequenziellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen außer Eingaben vom Typ `hidden` fokussierbar sind, sollte dieses Attribut nicht für Formular-Steuerelemente verwendet werden. Andernfalls müssten Sie die Fokusreihenfolge für alle Elemente im Dokument verwalten, was bei falscher Umsetzung die Benutzerfreundlichkeit und Barrierefreiheit beeinträchtigen kann.

- `title`
  - : Ein globales Attribut, das für alle Elemente einschließlich aller Eingabetypen gültig ist und Text mit Hinweisinformationen zum zugehörigen Element enthält. Solche Informationen können dem Benutzer typischerweise, aber nicht zwingend, als Tooltip präsentiert werden. `title` sollte NICHT als primäre Erklärung des Zwecks eines Formular-Steuerelements verwendet werden. Verwenden Sie stattdessen das Element {{htmlelement('label')}} mit einem Attribut `for`, das auf das Attribut [`id`](#id) des Formular-Steuerelements gesetzt ist. Siehe [Beschriftungen](#beschriftungen) weiter unten.

- `type`
  - : Eine Zeichenfolge, die den zu rendernden Steuerelementtyp angibt. Um beispielsweise ein Kontrollkästchen zu erstellen, wird der Wert `checkbox` verwendet. Wenn das Attribut weggelassen oder ein unbekannter Wert angegeben wird, wird der Eingabetyp `text` verwendet und ein Klartext-Eingabefeld erstellt.

    Zulässige Werte sind oben unter [Eingabetypen](#input_types) aufgeführt.

- `value`
  - : Der Wert des Eingabe-Steuerelements. Wenn er in HTML angegeben ist, ist dies der Anfangswert. Anschließend kann er jederzeit mithilfe von JavaScript geändert oder abgerufen werden, indem auf die Eigenschaft `value` des jeweiligen [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts zugegriffen wird. Das Attribut `value` ist immer optional, sollte jedoch für `checkbox`, `radio` und `hidden` als obligatorisch betrachtet werden.

- `webkitdirectory`
  - : Das Boolean-Attribut `webkitdirectory` gibt bei Vorhandensein an, dass Benutzer in der Dateiauswahloberfläche nur Verzeichnisse auswählen können sollen. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

    > [!NOTE]
    > `webkitdirectory` ist in der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) definiert. Es heißt aufgrund seines Ursprungs als Chrome-spezifische API `webkitdirectory`. Es ist jetzt in allen Browsern verfügbar.

- `width`
  - : Nur für die Eingabeschaltfläche `image` gültig. `width` ist die Breite der Bilddatei, die als grafische Senden-Schaltfläche angezeigt wird. Siehe den Eingabetyp {{HTMLElement("input/image", "image")}}.

### Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind ebenfalls in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie deren Verwendung vermeiden, sofern sie nicht unvermeidbar ist.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, damit Live-Suchergebnisse aktualisiert werden können, während der Benutzer den Feldwert noch bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenfolge, die den Aktionstyp angibt, der ausgeführt wird, wenn der Benutzer beim Bearbeiten des Felds die Taste <kbd>Enter</kbd> oder <kbd>Return</kbd> drückt; sie dient dazu, eine geeignete Beschriftung für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
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
        Die maximale Anzahl von Einträgen, die in der Dropdownliste vorheriger Suchanfragen angezeigt werden soll. <strong>Nur Safari.</strong>
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung, wird also von Safari, Opera, Chrome usw. unterstützt. Bei Vorhandensein weist es den {{Glossary("user_agent", "User Agent")}} an, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Feldwert bearbeitet, sendet der User Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das Ereignis [`search`](/de/docs/Web/API/HTMLInputElement/search_event) nur gesendet, wenn Benutzer eine Suche ausdrücklich initiieren, etwa durch Drücken der Taste <kbd>Enter</kbd> oder <kbd>Return</kbd> beim Bearbeiten des Felds.

    Das Ereignis `search` wird ratenbegrenzt, sodass es nicht häufiger als in einem implementationsdefinierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}
  - : Ähnlich wie die nicht standardisierte CSS-Eigenschaft `-moz-orient`, die die Elemente {{htmlelement('progress')}} und {{htmlelement('meter')}} beeinflusst, definiert das Attribut `orient` die Ausrichtung des Bereichsreglers. Zu den Werten gehören `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, bei dem der Bereich vertikal gerendert wird. Einen modernen Ansatz zum Erstellen vertikaler Formular-Steuerelemente finden Sie unter [Erstellen vertikaler Formular-Steuerelemente](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls).

- `results` {{non-standard_inline}}
  - : Das nur von Safari unterstützte Attribut `results` ist ein numerischer Wert, mit dem Sie die maximale Anzahl von Einträgen überschreiben können, die im nativ bereitgestellten Dropdownmenü des Elements `<input>` für vorherige Suchanfragen angezeigt werden.

    Der Wert muss eine nicht negative Dezimalzahl sein. Wenn kein oder ein ungültiger Wert angegeben wird, wird die maximale Standardanzahl von Einträgen des Browsers verwendet.

## Methoden

Die folgenden Methoden werden von der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) bereitgestellt, welche `<input>`-Elemente im DOM repräsentiert. Ebenfalls verfügbar sind die von den übergeordneten Schnittstellen [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) festgelegten Methoden.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben und ein Ereignis [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) für das Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben, ein Ereignis [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) für das Element ausgelöst und das Problem dem Benutzer gemeldet, sofern das Ereignis nicht abgebrochen wird.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des Elements `<input>` aus, wenn der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt, etwa einem visuellen Farbwähler oder einer Kalendereingabe für Daten, bewirkt diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Meldung fest, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine bestimmte Zeichenfolge. Ein Parameter `selectMode` ist verfügbar, um zu steuern, wie der vorhandene Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines Texteingabeelements aus. Bei Eingaben, die nicht als Texteingabefelder dargestellt werden, geschieht nichts.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Auswähler für das Eingabeelement an, der normalerweise beim Auswählen des Elements angezeigt würde, jedoch ausgelöst durch einen Tastendruck oder eine andere Benutzerinteraktion.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Eingaben weisen als ersetzte Elemente einige Merkmale auf, die auf Nicht-Formularelemente nicht anwendbar sind. Es gibt CSS-Selektoren, die Formular-Steuerelemente anhand ihrer UI-Merkmale gezielt ansprechen können; diese werden auch UI-Pseudoklassen genannt. Das Eingabeelement kann außerdem anhand seines Typs mit Attributselektoren angesprochen werden. Auch einige Eigenschaften sind besonders nützlich.

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
        Jedes aktuell aktivierte Element, das aktiviert werden kann, etwa ausgewählt, angeklickt oder beschriftet werden kann, oder den Fokus annehmen kann und außerdem einen deaktivierten Zustand besitzt, in dem es nicht aktiviert werden oder den Fokus annehmen kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes aktuell deaktivierte Element, das einen aktivierten Zustand besitzt, was bedeutet, dass es andernfalls aktiviert werden könnte, etwa ausgewählt, angeklickt oder beschriftet werden könnte oder den Fokus annehmen könnte, wenn es nicht deaktiviert wäre.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element, das nicht vom Benutzer bearbeitet werden kann</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das aktuell <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code>- und {{HTMLElement("textarea")}}-Elementen mit vorhandenem Attribut <a href="#placeholder"><code>placeholder</code></a>, die bisher keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formular-Elemente, die in einer Gruppe zugehöriger Elemente die Standardwerte sind.
        Entspricht den Eingabetypen {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}}, die beim Laden oder Rendern der Seite aktiviert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht den Eingabetypen {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}}, die aktuell aktiviert sind, sowie dem {{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, das aktuell ausgewählt ist.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren Eigenschaft `indeterminate` durch JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Optionsschaltflächen mit demselben Namenswert im Formular nicht aktiviert sind, sowie
        {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formular-Steuerelemente, auf die die Constraint-Validierung angewendet werden kann und die aktuell gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formular-Steuerelemente, auf die die Constraint-Validierung angewendet wird und die aktuell ungültig sind. Entspricht einem Formular-Steuerelement, dessen Wert nicht den durch seine Attribute gesetzten Einschränkungen entspricht, etwa
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die Attribute <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> sowie <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die Attribute <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> festgelegten Bereichsgrenzen liegt oder die Einschränkung <a href="#step"><code>step</code></a> nicht einhält.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        Ein Element <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}, bei dem das Attribut <a href="#required"><code>required</code></a> gesetzt ist.
        Entspricht nur Elementen, die erforderlich sein können.
        Das Attribut bei einem Element einzuschließen, das nicht erforderlich sein kann, führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        Ein Element <code>&#x3C;input></code>, {{HTMLElement("select")}} oder
        {{HTMLElement("textarea")}}, bei dem das Attribut <a href="#required"><code>required</code></a> NICHT gesetzt ist.
        Entspricht keinen Elementen, die nicht erforderlich sein können.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        Elemente <code>&#x3C;input></code> und {{HTMLElement("textarea")}}, die aktuell keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlust des Fokus aktiviert. Entspricht ungültiger Eingabe, jedoch erst nach Benutzerinteraktion, etwa durch Fokussieren des Steuerelements, Verlassen des Steuerelements oder Versuch, das Formular mit dem ungültigen Steuerelement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Auswähler anzeigen, aus dem Benutzer einen Wert wählen können, beispielsweise <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a> – aber nur, wenn sich das Element im geöffneten Zustand befindet, also wenn der Auswähler angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können eine Kontrollkästchen-Beschriftung danach gestalten, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel gestalten wir {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar auf eine aktivierte Eingabe folgt. Wenn die `input` nicht aktiviert ist, haben wir keine Stile angewendet.

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

Es ist möglich, verschiedene Typen von Formular-Steuerelementen anhand ihres [`type`](#type) mithilfe von [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren entsprechen Elementen entweder allein anhand des Vorhandenseins eines Attributs oder anhand des Werts eines bestimmten Attributs.

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

Standardmäßig ist das Erscheinungsbild von Platzhaltertext durchscheinend oder hellgrau. Das Pseudoelement {{cssxref('::placeholder')}} ist der [`placeholder`-Text](#placeholder) der Eingabe. Es kann mit einer begrenzten Teilmenge von CSS-Eigenschaften gestaltet werden.

```css
::placeholder {
  color: blue;
}
```

In einer Regel, die `::placeholder` in ihrem Selektor verwendet, kann nur die Teilmenge der CSS-Eigenschaften verwendet werden, die auf das Pseudoelement {{cssxref("::first-line")}} anwendbar ist.

### caret-color

Eine für Texteingabe-bezogene Elemente spezifische Eigenschaft ist die CSS-Eigenschaft {{cssxref("caret-color")}}, mit der Sie die Farbe festlegen können, die zum Zeichnen der Texteingabemarkierung verwendet wird:

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

Die Eigenschaft {{cssxref("field-sizing")}} ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern, denen standardmäßig eine bevorzugte Größe zugewiesen wird. Mit dieser Eigenschaft können Sie das Standardverhalten überschreiben, sodass Formular-Steuerelemente ihre Größe an ihren Inhalt anpassen können.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die sich an ihren Inhalt anpassen und mit zunehmender Texteingabe wachsen. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren, beispielsweise [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url), dem Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}}-Elementen.

### object-position und object-fit

In bestimmten Fällen, üblicherweise bei nicht textuellen Eingaben und spezialisierten Schnittstellen, ist das Element `<input>` ein {{Glossary("replaced_elements", "ersetztes Element")}}. In diesem Fall können Position und Größe des Elements innerhalb seines Rahmens mithilfe der CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Gestaltung

Weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML finden Sie unter:

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color).

Siehe außerdem:

- [Gestaltung von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Beschriftungen

Beschriftungen sind erforderlich, um Hilfstext mit einem `<input>` zu verknüpfen. Das Element {{HTMLElement("label")}} stellt erläuternde Informationen über ein Formularfeld bereit, die _immer_ angemessen sind, abgesehen von möglichen Layoutaspekten. Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugeordnete Beschriftungen

Die semantische Verknüpfung der Elemente `<input>` und `<label>` ist für unterstützende Technologien wie Screenreader nützlich. Indem Sie sie mit dem Attribut [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) von `<label>` verknüpfen, binden Sie die Beschriftung auf eine Weise an die Eingabe, die es Screenreadern ermöglicht, Eingaben Benutzern präziser zu beschreiben.

Es reicht nicht aus, einfachen Text neben dem Element `<input>` zu platzieren. Stattdessen erfordern Benutzerfreundlichkeit und Barrierefreiheit entweder ein implizites oder explizites {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht barrierefrei: Zwischen der Aufforderung und dem Element `<input>` besteht keine Beziehung.

Zusätzlich zu einem barrierefreien Namen bietet die Beschriftung einen größeren Trefferbereich, auf den Benutzer mit Maus oder Touchscreen klicken bzw. tippen können. Wenn Sie ein `<label>` mit einem `<input>` verknüpfen, wird durch Klicken auf eines der beiden das `<input>` fokussiert. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu „beschriften“, geschieht dies nicht. Dass die Aufforderung Teil des Aktivierungsbereichs für die Eingabe ist, hilft Menschen mit motorischen Einschränkungen.

Als Webentwickler ist es wichtig, dass wir niemals annehmen, Menschen wüssten all die Dinge, die wir wissen. Die Vielfalt der Menschen, die das Web – und damit auch Ihre Website – nutzen, garantiert praktisch, dass einige Besucher Ihrer Website aufgrund unterschiedlicher Denkprozesse und/oder Umstände Ihre Formulare ohne klare und korrekt präsentierte Beschriftungen ganz anders interpretieren als Sie.

#### Platzhalter sind nicht barrierefrei

Mit dem Attribut [`placeholder`](#placeholder) können Sie Text angeben, der innerhalb des Inhaltsbereichs des Elements `<input>` selbst angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Er ist keine Beschriftung und sollte nicht als Ersatz verwendet werden, weil er keiner ist. Der Platzhalter dient dazu, einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, und nicht als Erklärung oder Aufforderung.

Der Platzhalter ist nicht nur für Screenreader nicht zugänglich, sondern verschwindet auch, sobald der Benutzer Text in das Formular-Steuerelement eingibt oder wenn das Formular-Steuerelement bereits einen Wert hat. Browser mit Funktionen zur automatischen Seitenübersetzung können Attribute beim Übersetzen überspringen, sodass `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das Attribut [`placeholder`](#placeholder) nicht, wenn Sie es vermeiden können. Wenn Sie ein Element `<input>` beschriften müssen, verwenden Sie das Element {{HTMLElement("label")}}.

### Clientseitige Validierung

> [!WARNING]
> Die clientseitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten empfängt. Wenn die Daten ein bestimmtes Format haben müssen, überprüfen Sie sie _immer_ auch serverseitig und geben Sie eine [`400`-HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den UI-Zuständen {{cssxref(":valid")}} oder {{cssxref(":invalid")}} entsprechend dem aktuellen Zustand jeder Eingabe zu gestalten, wie im obigen Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) beschrieben, stellt der Browser bei der versuchten Formularübermittlung clientseitige Validierung bereit. Wenn bei der Formularübermittlung ein Formular-Steuerelement die Constraint-Validierung nicht besteht, zeigen unterstützende Browser eine Fehlermeldung beim ersten ungültigen Formular-Steuerelement an. Dabei wird eine Standardmeldung basierend auf dem Fehlertyp oder eine von Ihnen gesetzte Meldung angezeigt.

Einige Eingabetypen und andere Attribute begrenzen, welche Werte für eine bestimmte Eingabe gültig sind. Beispielsweise bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Es können mehrere Fehler auftreten, einschließlich eines Fehlers `rangeUnderflow`, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10, aber keine gerade Ganzzahl ist und somit nicht den Anforderungen des Attributs `step` entspricht, oder `typeMismatch`, wenn der Wert keine Zahl ist.

Bei den Eingabetypen, deren Wertebereich periodisch ist, das heißt, bei denen die Werte beim höchstmöglichen Wert zum Anfang zurückkehren statt zu enden, können die Werte der Eigenschaften [`max`](#max) und [`min`](#min) umgekehrt sein. Dies gibt an, dass der Bereich zulässiger Werte bei `min` beginnt, beim niedrigstmöglichen Wert umbricht und dann fortgesetzt wird, bis `max` erreicht wird. Dies ist insbesondere für Daten und Uhrzeiten nützlich, etwa wenn Sie den Bereich von 20 Uhr bis 8 Uhr zulassen möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und deren Werte können zu einem bestimmten Fehler von [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Fehler des Validitätsobjekts hängen von den Attributen von <code>&lt;input&gt;</code> und deren Werten ab:
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
        Tritt auf, wenn der Wert größer als der durch das Attribut <code>max</code> definierte Höchstwert ist
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer als die durch die Eigenschaft <code>maxlength</code> erlaubte Anzahl ist
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner als der durch das Attribut <code>min</code> definierte Mindestwert ist
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner als die durch die Eigenschaft <code>minlength</code> erforderliche Anzahl ist
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Musterattribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> diesem nicht entspricht.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das Attribut <code>required</code> vorhanden ist, der Wert jedoch <code>null</code> ist oder eine Optionsschaltfläche bzw. ein Kontrollkästchen nicht aktiviert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht der Schrittweite. Das Schrittinkrement ist standardmäßig <code>1</code>, daher sind für <code>type="number"</code> nur Ganzzahlen gültig, wenn <code>step</code> nicht enthalten ist. <code>step="any"</code> löst diesen Fehler niemals aus.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht den richtigen Typ hat, etwa wenn eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formular-Steuerelement das Attribut `required` nicht besitzt, keinen Wert oder eine leere Zeichenfolge hat, ist es nicht ungültig. Selbst wenn die obigen Attribute vorhanden sind, führt eine leere Zeichenfolge mit Ausnahme von `required` nicht zu einem Fehler.

Wir können Einschränkungen für die akzeptierten Werte festlegen; unterstützende Browser validieren diese Formularwerte nativ und warnen Benutzer, wenn beim Absenden des Formulars ein Fehler vorliegt.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält die Schnittstelle `validityState` die schreibgeschützten Boolean-Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Für jede dieser Boolean-Eigenschaften gibt ein Wert von `true` an, dass der angegebene Grund, warum die Validierung fehlgeschlagen sein könnte, zutrifft. Die Ausnahme ist die Eigenschaft `valid`, die `true` ist, wenn der Wert des Elements alle Einschränkungen erfüllt.

Wenn ein Fehler vorliegt, warnen unterstützende Browser sowohl den Benutzer als auch verhindern sie die Übermittlung des Formulars. Ein Hinweis zur Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen truthy-Wert gesetzt wird, also alles außer der leeren Zeichenfolge oder `null`, wird die Übermittlung des Formulars verhindert. Wenn keine benutzerdefinierte Fehlermeldung vorhanden ist und keine der anderen Eigenschaften true zurückgibt, ist `valid` true und das Formular kann übermittelt werden.

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

Die letzte Zeile, die die benutzerdefinierte Gültigkeitsmeldung auf die leere Zeichenfolge setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt wird, schlägt die Übermittlung fehl, selbst wenn alle Werte gültig sind, bis die Meldung `null` ist.

#### Beispiel für einen benutzerdefinierten Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die für `<input>`- und verwandte Elemente verfügbare [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden. Betrachten Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen führen dazu, dass eine Standardfehlermeldung angezeigt wird, wenn Sie versuchen, das Formular ohne gültige Eingabe oder mit einem Wert abzusenden, der nicht dem `pattern` entspricht.

Wenn Sie stattdessen benutzerdefinierte Fehlermeldungen anzeigen möchten, können Sie JavaScript wie das folgende verwenden:

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

Kurz zusammengefasst:

- Wir prüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die Methode `checkValidity()` über den Ereignishandler `input` ausführen.
- Wenn der Wert ungültig ist, wird ein Ereignis `invalid` ausgelöst und die Ereignishandlerfunktion für `invalid` ausgeführt. Innerhalb dieser Funktion ermitteln wir mithilfe eines `if ()`-Blocks, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, und setzen eine benutzerdefinierte Gültigkeitsfehlermeldung.
- Wenn der Eingabewert beim Drücken der Senden-Schaltfläche ungültig ist, wird folglich eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er wie erwartet übermittelt. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit aufgehoben werden, indem `setCustomValidity()` mit einer leeren Zeichenfolge aufgerufen wird. Deshalb tun wir dies jedes Mal, wenn das Ereignis `input` ausgelöst wird. Wenn Sie dies nicht tun und zuvor eine benutzerdefinierte Gültigkeit gesetzt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie beim Absenden aktuell einen gültigen Wert enthält.

> [!NOTE]
> Validieren Sie Eingabebeschränkungen immer sowohl clientseitig als auch serverseitig. Die Constraint-Validierung beseitigt nicht die Notwendigkeit einer Validierung auf der _Serverseite_. Ungültige Werte können weiterhin von älteren Browsern oder böswilligen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte über viele Versionen ein proprietäres Fehlerattribut – `x-moz-errormessage` –, mit dem Sie auf ähnliche Weise benutzerdefinierte Fehlermeldungen festlegen konnten. Dieses wurde ab Version 66 entfernt, siehe [Firefox-Bug 1513890](https://bugzil.la/1513890).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen vom Gebietsschema ab. In einigen Gebietsschemata ist 1,000.00 eine gültige Zahl, während in anderen Gebietsschemata 1.000,00 die gültige Eingabeform dieser Zahl ist.

Firefox verwendet die folgenden Heuristiken, um das Gebietsschema für die Validierung der Benutzereingabe zu bestimmen, zumindest für `type="number"`:

- Versuchen Sie die durch ein Attribut `lang`/`xml:lang` auf dem Element oder einem seiner übergeordneten Elemente angegebene Sprache.
- Versuchen Sie die durch einen HTTP-Header `Content-Language` angegebene Sprache. Oder:
- Wenn keine angegeben ist, verwenden Sie das Gebietsschema des Browsers.

## Barrierefreiheit

### Beschriftungen

Beim Einfügen von Eingaben ist es eine Anforderung der Barrierefreiheit, Beschriftungen hinzuzufügen. Dies ist erforderlich, damit Personen, die unterstützende Technologien verwenden, erkennen können, wofür die Eingabe bestimmt ist. Durch Klicken oder Tippen auf eine Beschriftung erhält außerdem das zugehörige Formular-Steuerelement den Fokus. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer und vergrößert den Bereich, auf den Benutzer klicken oder tippen können, um das Formular-Steuerelement zu aktivieren. Dies ist insbesondere für Optionsschaltflächen und Kontrollkästchen nützlich und sogar erforderlich, da diese sehr klein sind. Weitere Informationen zu Beschriftungen im Allgemeinen finden Sie unter [Beschriftungen](#beschriftungen).

Im Folgenden sehen Sie ein Beispiel dafür, wie `<label>` auf die oben beschriebene Weise mit einem `<input>`-Element verknüpft wird. Sie müssen dem `<input>` ein Attribut `id` geben. Das `<label>` benötigt dann ein Attribut `for`, dessen Wert mit der `id` der Eingabe übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bereitstellen, damit sie einfach aktiviert werden können. Dies hilft vielen Menschen, einschließlich Personen mit Problemen bei der motorischen Steuerung und Personen, die ungenaue Eingabeformen wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>, aufgelistet, übermittelbar, zurücksetzbar, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a>. Wenn <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann beschriftbares Element, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Auslassung von Tags</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a> akzeptiert.
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
            <code>type=text</code> ohne Attribut <code>list</code>:
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            oder <code>text</code> mit Attribut <code>list</code>: keine
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
- [Anleitung: Struktur eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Constraint-Validierung von Formularen](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Gestaltung von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
