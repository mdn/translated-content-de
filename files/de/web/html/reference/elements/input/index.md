---
title: "`<input>` HTML-Input-Element"
short-title: <input>
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

Das **`<input>`**-Element [HTML](/de/docs/Web/HTML) wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; eine Vielzahl von Eingabedatentypen und Steuerwidgets sind verfügbar, abhängig von Gerät und {{Glossary("user_agent", "Benutzeragent")}}. Das `<input>`-Element ist eines der leistungsfähigsten und komplexesten in HTML, aufgrund der schieren Anzahl von Kombinationen von Eingabetypen und Attributen.

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

Die Funktionsweise eines `<input>` variiert erheblich, je nachdem, welchen Wert das [`type`](#type)-Attribut hat. Daher werden die verschiedenen Typen auf eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` angenommen.

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
      <td>Ein Kontrollkästchen, das es ermöglicht, einzelne Werte auszuwählen/abzuwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerfeld zur Farbauswahl; öffnet einen Farbwähler in unterstützenden Browsern, wenn aktiv.
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
        Ein Steuerfeld zum Eingeben eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumsauswähler oder numerische Räder für Jahr, Monat und Tag in unterstützenden Browsern, wenn aktiv.
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
        Ein Steuerfeld zum Eingeben eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Räder für Datum- und Zeitkomponenten in unterstützenden Browsern, wenn aktiv.
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
        <code>text</code>-Input, hat aber Validierungsparameter und eine geeignete
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
        Ein Steuerfeld, das dem Benutzer ermöglicht, eine Datei auszuwählen.
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
        Ein Steuerfeld, das nicht angezeigt wird, dessen Wert jedoch an den Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist versteckt!
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
        Eine grafische <code>submit</code>-Schaltfläche. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert wird.
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
        Ein Steuerfeld zum Eingeben einer Zahl. Zeigt ein Spinner an und fügt standardmäßige
        Validierung hinzu. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein numerisches Tastenfeld an.
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
        Einzeiliges Textfeld, dessen Wert nicht sichtbar ist.
        Es wird der Benutzer gewarnt, wenn die Seite nicht sicher ist.
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
        Eine Optionsschaltfläche, die es ermöglicht, einen Einzelwert aus mehreren Optionen mit dem gleichen <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Ein Steuerfeld zum Eingeben einer Zahl, deren genauer Wert nicht wichtig ist.
        Wird als Bereichs-Widget standardmäßig mit dem mittleren Wert angezeigt.
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
        Eine Schaltfläche, die den Formularinhalt auf die Standardwerte zurücksetzt. Nicht empfohlen.
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
        Einzeiliges Textfeld zum Eingeben von Suchanfragen. Zeilenumbrüche werden
        automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern ein Löschsymbol enthalten, mit dem das Feld geleert werden kann. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
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
        Ein Steuerfeld zum Eingeben einer Telefonnummer. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Telefon-Tastenfeld an.
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
      <td>Ein Steuerfeld zum Eingeben eines Zeitwerts ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zum Eingeben einer URL. Sieht aus wie ein <code>text</code>-Feld, hat aber Validierungsparameter und eine geeignete Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerfeld zum Eingeben eines Datums, das aus einer Kalenderwochennummer und einer Wochennummer ohne Zeitzone besteht.
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
        Ein Steuerfeld zum Eingeben eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der Zeitzone UTC.
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

Das `<input>`-Element ist so leistungsfähig aufgrund seiner Attribute; das [`type`](#type)-Attribut, wie oben mit Beispielen beschrieben, ist das wichtigste. Da jedes `<input>`-Element, unabhängig von seinem Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch dasselbe Set von Attributen. In Wirklichkeit haben jedoch die meisten Attribute nur auf einen bestimmten Teilbereich von Eingabetypen Einfluss. Außerdem beeinflussen einige Attribute ein Eingabefeld unterschiedlich, je nach Eingabetyp, und wirken sich auf verschiedene Eingabetypen unterschiedlich aus.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird von einer Liste gefolgt, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie assoziiert sind. Diejenigen, die für die meisten oder alle Eingabetypen gemeinsam sind, werden im Folgenden ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind - oder Attribute, die bei allen Eingabetypen, aber mit besonderen Verhalten bei einem bestimmten Eingabetyp, allgemein sind - werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                                 |
| --------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis für den erwarteten Dateityp in Dateiupload-Steuerelementen                                           |
| [`alpha`](#alpha)                             | `color`                                                                      | Opazität der Farbe                                                                                           |
| [`alt`](#alt)                                 | `image`                                                                      | alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                              |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Kontrolliert die automatische Großschreibung in eingegebenem Text.                                           |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis für das automatische Ausfüllen von Formularen                                                        |
| [`capture`](#capture)                         | `file`                                                                       | Eingabemethode zur Medienaufzeichnung in Dateiupload-Steuerelementen                                         |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Ob der Befehl oder das Steuerfeld aktiviert ist                                                              |
| [`colorspace`](#colorspace)                   | `color`                                                                      | Der {{Glossary("Color_space", "Farbraum")}}, der für die Farbauswahl verwendet werden soll                   |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfelds zur Verwendung bei der Übermittlung der Richtung des Elements im Formular             |
| [`disabled`](#disabled)                       | alle                                                                         | Ob das Formularelement deaktiviert ist                                                                       |
| [`form`](#form)                               | alle                                                                         | Verknüpft das Steuerelement mit einem Formularelement                                                        |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | URL für die Formularübermittlung                                                                             |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Datensatz-Codierungstyp, der für die Formularübermittlung verwendet werden soll                              |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | HTTP-Methode für die Formularübermittlung                                                                    |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Umgeht die Validierung der Formularelemente für die Formularübermittlung                                     |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für die Formularübermittlung                                                                |
| [`height`](#height)                           | `image`                                                                      | Entspricht dem Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                                 |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des ID-Attributs der {{htmlelement('datalist')}} mit automatischen Vervollständigungsoptionen           |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Höchstwert                                                                                                   |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) des `value`                                                              |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Mindestwert                                                                                                  |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Mindestlänge (Anzahl der Zeichen) des `value`                                                                |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolean. Ob mehrere Werte erlaubt sind                                                                       |
| [`name`](#name)                               | alle                                                                         | Name des Formularelements. Wird mit dem Formular als Teil eines Namens-/Wertepaars übermittelt               |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Muster, das der `value` erfüllen muss, um gültig zu sein                                                     |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der im Formularelement erscheint, wenn kein Wert gesetzt ist                                           |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Designiert ein `<input type="button">` als Steuerung für ein Popover-Element                                 |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Gibt die Aktion an, die ein Popoversteuerelement ausführen soll                                              |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht bearbeitbar                                                                      |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss für die Übermittlungsfähigkeit des Formulars ausgewählt werden. |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe des Steuerelements                                                                                     |
| [`src`](#src)                                 | `image`                                                                      | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                          |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Inkrementelle Werte, die gültig sind                                                                         |
| [`switch`](#switch)                           | `checkbox`                                                                   | Ob das Kontrollkästchen-Steuerelement als Schalter dargestellt werden soll                                   |
| [`type`](#type)                               | alle                                                                         | Typ des Formularelements                                                                                     |
| [`value`](#value)                             | alle außer `image`                                                           | Der Wert des Steuerelements. Wenn im HTML angegeben, entspricht der initiale Wert                            |
| [`width`](#width)                             | `image`                                                                      | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                                   |

Einige zusätzliche, nicht-standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Gültig nur für den `file`-Eingabetyp, definiert das `accept`-Attribut, welche Dateitypen in einem `file`-Upload-Steuerelement wählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alpha` {{experimental_inline}}
  - : Gültig nur für den `color`-Eingabetyp, bietet das `alpha`-Attribut dem Endbenutzer die Möglichkeit, die Opazität der ausgewählten Farbe einzustellen.

- `alt`
  - : Gültig nur für den `image`-Button, bietet das `alt`-Attribut alternativen Text für das Bild, der den Wert des Attributs anzeigt, wenn das Bild [`src`](#src) fehlt oder aus irgendeinem Grund nicht geladen wird. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`
  - : Kontrolliert, ob eingegebener Text automatisch großgeschrieben wird, und falls ja, auf welche Weise. Siehe die Seite zum [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)-globalen Attribut für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert einen durch Leerzeichen getrennten String an, der beschreibt, welche, wenn vorhanden, Art der Autovervollständigungsfunktionalität das Eingabefeld bereitstellen soll. Eine typische Implementierung von Autovervollständigung erinnert sich an vorherige Werte, die in demselben Eingabefeld eingegeben wurden, aber komplexere Formen der Autovervollständigung können existieren. Ein Browser könnte zum Beispiel mit der Kontaktliste eines Geräts integrieren, um `email`-Adressen in einem E-Mail-Eingabefeld autovervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Wirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen gültig außer `checkbox`, `radio`, `file` oder eine der Schaltflächentypen.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` bei `hidden` geringfügig anders ist als bei anderen Eingabetypen.

- `autofocus`
  - : Ein Boolean-Attribut, das, wenn vorhanden, darauf hinweist, dass die Eingabe automatisch den Fokus haben soll, wenn die Seite fertig geladen hat (oder wenn das {{HTMLElement("dialog")}}, das das Element enthält, angezeigt wird).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element gesetzt wird, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben vom Typ `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren eines Formularelements kann visuell beeinträchtigte Menschen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, "teleportieren" Bildschirmleser ihren Benutzer zum Formularelement, ohne sie vorher zu warnen.

    Verwenden Sie sorgfältige Überlegungen zur Barrierefreiheit, wenn Sie das `autofocus`-Attribut anwenden. Automatisches Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass dynamische Tastaturen auf einigen Touch-Geräten angezeigt werden. Während ein Bildschirmleser das Label des Formularelements, das den Fokus erhält, ankündigt, wird der Bildschirmleser nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den durch den vorhergehenden Inhalt geschaffenen Kontext verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und nur für den `file`-Eingabetyp gültig, definiert das `capture`-Attribut, welche Medien - Mikrofon, Video oder Kamera - verwendet werden sollen, um eine neue Datei für einen Upload mit einem `file`-Upload-Steuerelement in unterstützenden Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`
  - : Gültig für sowohl `radio` als auch `checkbox` Typen, ist `checked` ein Boolean-Attribut. Wenn es auf einem `radio`-Typ vorhanden ist, zeigt es an, dass die Optionsschaltfläche die derzeit ausgewählte in der Gruppe von gleichnamigen Optionsschaltflächen ist. Wenn es auf einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig aktiv ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn der Status des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerelementen werden der Name und die Werte der aktivierten Kontrollkästchen und Optionsschaltflächen nur dann in die übermittelten Daten einbezogen, wenn sie derzeit `aktiviert` sind. Wenn sie es sind, werden der Name und der Wert/die Werte der aktivierten Steuerelemente übermittelt.
    >
    > Wenn beispielsweise ein Kontrollkästchen, dessen `name` `fruit` lautet, einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, werden die übermittelten Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgeführt. Der Standard-`value` für Kontrollkästchen und Optionsschaltflächen ist `on`.

- `colorspace` {{experimental_inline}}
  - : Gültig nur für den `color`-Eingabetyp, gibt das `colorspace`-Attribut den {{Glossary("Color_space", "Farbraum")}} an, der vom `type="color"`-Eingabefeld verwendet wird. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe ist im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies schließt {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}} und {{cssxref("hex-color")}} Werte ein. Der Farbwert ist auf 8-Bit pro `r`, `g` und `b` Komponente begrenzt. Dies ist der Standardwert.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3-Farbraum")}}, z.B., `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für die Eingabetypen `hidden`, `text`, `search`, `url`, `tel` und `email`, ermöglicht das `dirname`-Attribut die Übermittlung der Richtung des Elements. Wenn enthalten, wird das Formularelement mit zwei Namens-/Wertepaaren übermittelt: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, je nachdem, wie vom Browser festgelegt.

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

    Wenn das oben gezeigte Formular übermittelt wird, bewirkt die Eingabe, dass sowohl das `name` / `value`-Paar von `fruit=cherry` als auch das `dirname` / Richtungs-Paar von `fruit-dir=ltr` gesendet wird.
    Für weitere Informationen, siehe das [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, wenn vorhanden, darauf hinweist, dass der Benutzer nicht in der Lage sein sollte, mit der Eingabe zu interagieren. Deaktivierte Eingaben werden typischerweise in einer verblassenen Farbe oder in anderer Weise angezeigt, um anzuzeigen, dass das Feld nicht verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl dies nicht von der Spezifikation gefordert wird, wird Firefox standardmäßig den dynamischen deaktivierten Status eines `<input>` über Seitenladevorgänge hinweg [beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Ein String, der das {{HTMLElement("form")}}-Element spezifiziert, mit dem die Eingabe verknüpft ist (also, dessen **Formularbesitzer** sie ist). Der Wert dieses Strings, falls vorhanden, muss mit dem [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächsten enthaltenen Formular verknüpft, falls vorhanden.

    Mit dem `form`-Attribut können Sie eine Eingabe überall im Dokument platzieren, jedoch mit einem Formular anderswo im Dokument einfügen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `formenctype`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `formmethod`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `formnovalidate`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `formtarget`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `height`
  - : Nur gültig für den `image`-Eingabeknopf, ist `height` die Höhe der Bilddatei, die angezeigt werden soll, um die grafische Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, es definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss. Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um die Beschriftung mit der Formulareingabe zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist, er gibt Browsers einen Hinweis auf den Typ der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Werte schließen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search` ein.
- `list`
  - : Der dem `list`-Attribut gegebene Wert sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements sein, das sich im selben Dokument befindet. Die `<datalist>` bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden sollen. Alle Werte in der Liste, die mit dem [`type`](#type) inkompatibel sind, werden nicht in den vorgeschlagenen Optionen eingeschlossen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig in `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Gemäß der Spezifikationen wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder einer der Schaltflächentypen unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Längenmarken entlang eines Bereichs oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber nicht gelistete Werte erlaubt. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabearten an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den größten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, dann hat das Element keinen Höchstwert.

    Es gibt einen Spezialfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass der Bereich entfernt sein kann; zum Beispiel erlaubt dies, einen Zeitbereich von 22:00 Uhr bis 04:00 Uhr anzugeben.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein Integerwert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine Maximallänge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger ist als `maxlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das `maxlength`-Attribut erlaubt sind. Einschränkungsvalidierung wird nur angewandt, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den kleinsten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) kleiner als dieser ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, dann hat das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht-leerer Wert kleiner als das Mindestmaß ist, das durch das `min`-Attribut erlaubt ist, verhindert die Einschränkungsvalidierung die Formularübermittlung. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

    Es gibt einen Spezialfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass der Bereich entfernt sein kann; zum Beispiel erlaubt dies, einen Zeitbereich von 22:00 Uhr bis 04:00 Uhr anzugeben.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die Mindestzeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Integerwert sein, der kleiner oder gleich dem durch `maxlength` festgelegten Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} ist, und verhindert so die Formularübermittlung. Einschränkungsvalidierung wird nur angewandt, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das Boolean-`multiple`-Attribut, wenn gesetzt, bedeutet, dass der Benutzer kommagetrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit der `file`-Eingabe wählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`
  - : Ein String, der einen Namen für das Eingabesteuerung angibt. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie das `name` als ein erforderliches Attribut (auch wenn es das nicht ist). Wenn eine Eingabe kein `name` angegeben hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular gesendet! (Deaktivierte Steuerelemente, nicht markierte Optionsschaltflächen, nicht markierte Kontrollkästchen und Rücksetztasten werden ebenfalls nicht gesendet.)

    Es gibt zwei Spezialfälle:
    1. `_charset_` : Wenn als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet, wird der Wert der Eingabe automatisch vom {{Glossary("user_agent", "Benutzeragent")}} auf die zur Übermittlung des Formulars verwendete Zeichenkodierung gesetzt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erstellt ein einzigartiges Verhalten für Optionsschaltflächen.

    Nur eine Optionsschaltfläche in einer gleichnamigen Gruppe von Optionsschaltflächen kann gleichzeitig aktiviert sein. Das Wählen einer Optionsschaltfläche in dieser Gruppe deaktiviert automatisch jede derzeit aktivierte Optionsschaltfläche in derselben Gruppe. Der Wert dieser einen aktiven Optionsschaltfläche wird zusammen mit dem Namen übermittelt, wenn das Formular übermittelt wird,

    Wenn Sie in eine Serie von gleichnamigen Gruppen von Optionsschaltflächen tabben, wird, wenn eine aktiviert ist, diejenige den Fokus erhalten. Wenn sie in der Quellreihenfolge nicht zusammen gruppiert sind, wird, wenn eine der Gruppe aktiviert ist, beim Tabben in die Gruppe beginnend, wenn die erste in der Gruppe erreicht wird, alle nicht aktivierten Optionsschaltflächen der Gruppe übersprungen. Mit anderen Worten, wenn eine aktiviert ist, überspringt das Tabben die nicht aktivierten Optionsschaltflächen in der Gruppe. Wenn keine aktiviert ist, erhält die Optionsschaltflächengruppe den Fokus, wenn die erste Schaltfläche in der gleichen Namensgruppe erreicht wird.

    Sobald eine der Optionsschaltflächen in einer Gruppe den Fokus hat, wird durch Verwenden der Pfeiltasten durch alle Optionsschaltflächen mit demselben Namen navigiert, auch wenn die Optionsschaltflächen in der Quellreihenfolge nicht zusammen gruppiert sind.

    Wenn einem Eingabeelement ein `name` zugewiesen wird, wird dieser Name zur Eigenschaft des lo<formularbesitzende Formularobjekt\'s [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) Eigenschaft. Wenn Sie ein Eingabefeld haben, dessen `name` auf `guest` gesetzt ist, und eine andere, deren `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer eingebauten Eigenschaft des Formulars entspricht, da Sie sonst die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompilieren, den der `value` der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Es sollten keine Schrägstriche um den Mustertest angegeben werden. Bei der Zusammenstellung des regulären Ausdrucks:
    1. das Muster wird implizit mit `^(?:` und `)$` eingeschlossen, sodass der Abgleich gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<Muster>)$`.
    2. das `'v'`-Flag wird angegeben, sodass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht-leerer Wert nicht dem Muster entspricht, verhindert die Einschränkungsvalidierung die Formularübermittlung. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierten Reguläre Ausdruck gegen jeden kommagetrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe einfügen. Sie können auch ein [`title`](#title)-Attribut einfügen, um zu erklären, was die Anforderungen sind, um das Muster zu erfüllen; die meisten Browser werden diesen Titel als Tooltip anzeigen. Die sichtbare Erklärung ist zur Barrierefreiheit erforderlich. Der Tooltip ist ein verbessertes Element.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für weiteres Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis für den Benutzer darauf, welche Art von Informationen im Feld erwartet wird. Es sollte ein Wort oder kurze Phrase sein, die einen Hinweis auf die erwartete Art von Daten gibt, anstelle einer Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Wenn also zum Beispiel erwartet wird, dass ein Feld den Vornamen eines Benutzers aufnimmt und dessen Beschriftung "Vorname" lautet, könnte ein geeigneter Platzhalter "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch sinnvoll wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`
  - : Wandelt ein Element `<input type="button">` in eine Popover-Steuerungstaste um; nimmt die ID des zu kontrollierenden Popover-Elements als seinen Wert. Siehe die [Popover API](/de/docs/Web/API/Popover_API)-Landeseite für weitere Details. Die Etablierung einer Beziehung zwischen einem Popover und seiner Auslösetaste mit dem `popovertarget`-Attribut hat zwei weitere nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Keyboard-Fokusnavigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover besser zugänglich für Benutzer von Tastatur und unterstützender Technologie (AT) (siehe auch [Popover Accessibility Features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Verankerungsreferenz zwischen beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

- `popovertargetaction`
  - : Gibt die auszuführende Aktion auf einem von einem Steuerelement `<input type="button">` gesteuerten Popover-Element an. Mögliche Werte sind:
    - `"hide"`
      - : Die Schaltfläche blendet ein angezeigtes Popover aus. Wenn Sie versuchen, ein bereits angedocktes Popover auszublenden, wird keine Aktion ausgeführt.
    - `"show"`
      - : Die Schaltfläche zeigt ein verborgenes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion unternommen.
    - `"toggle"`
      - : Die Schaltfläche schaltet ein Popover zwischen sichtbar und verborgen. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuertaste ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das, wenn vorhanden, darauf hinweist, dass der Benutzer nicht in der Lage sein sollte, den Wert der Eingabe zu bearbeiten. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) für mehr Informationen.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, darauf hinweist, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das besitzende Formular übermittelt werden kann. Das `required`-Attribut wird durch `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file`-Eingaben unterstützt.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für mehr Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`, das `size`-Attribut gibt an, wie viel von der Eingabe angezeigt wird. Grundeinrichmetiliar erzeugt dies dasselbe Ergebnis wie die CSS {{cssxref("width")}}-Eigenschaft mit einigen Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`
  - : Nur gültig für den `image`-Eingabeknopf, `src` ist eine Zeichenkette, die die URL der anzuzeigenden Bilddatei angibt, um die grafische Schaltfläche zu darstellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss. Nur Werte, die eine ganze Anzahl von Schritten vom Stützpunkt des Schrittes entfernt sind, sind gültig. Der Stützpunkt des Schrittes ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), wenn angegeben, sonst [`value`](#value) oder `0`, wenn keines angegeben ist (außer für `week`, das einen Standardstützpunkt des Schritts von -259.200.000 hat, was den Start von Woche `1970-W01` darstellt).

    Wenn nicht explizit enthalten:
    - `step` ist standardmäßig 1 für `number` und `range`.
    - Jeder Eingabedatentyp hat einen Standardwert für `step`, der dem Typ angemessen ist; siehe die individuellen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein - Integer oder Float - oder der spezielle Wert `any`, was bedeutet, dass kein Schritt impliziert wird und jeder Wert erlaubt ist (unter Berücksichtigung anderer Einschränkungen, wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann sind alle geraden Ganzzahlen, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">` sind alle Ganzzahlen gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, weil `step` standardmäßig auf `1` gesetzt ist. Damit `4.2` gültig ist, müsste `step` auf `any`, 0.1, 0.2, oder müsste der `min`-Wert eine Zahl sein, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht den Stufenkonfigurationen entsprechen, wird der Wert als ungültig in der Einschränkungsvalidierung angesehen und das Pseudoklass `:invalid` wird übereinstimmen.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`switch`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#switch) {{experimental_inline}} {{non-standard_inline}}
  - : Gültig nur für Kontrollkästchen-Eingaben, ist `switch` ein Boolean-Attribut, das angibt, ob das Kontrollkästchen-Eingabefeld als Schalter dargestellt werden soll.

    > [!NOTE]
    > Dieses Attribut ist noch experimentell und hat begrenzte Browserunterstützung. Auf nicht unterstützten Browsern wird das Attribut ignoriert.

- `tabindex`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein Integer-Attribut, das angibt, ob das Element Eingabefokus aufnehmen kann (fokusfähig ist), wenn es an der sequenziellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen mit Ausnahme der Eingabe vom Typ hidden fähig sind, fokussiert zu werden, sollte dieses Attribut nicht auf Formularsteuerelementen verwendet werden, da dadurch die Verwaltung der Fokusreihenfolge für alle Elemente innerhalb des Dokuments mit der Gefahr einer fehlerhaften Benutzbarkeit und Zugänglichkeit, falls dies nicht korrekt erfolgt, erforderlich wäre.

- `title`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text enthält, der ähnliche Informationen über das zugehörige Element darstellt. Solche Informationen können typischerweise, aber nicht unbedingt, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks des Formularelements verwendet werden. Stattdessen sollten Sie das {{htmlelement('label')}}-Element verwenden, wobei das `for`-Attribut auf das [`id`](#id) Attribut des Formularelements gesetzt wird. Siehe [Labels](#labels) unten.

- `type`
  - : Ein String, der den Typ des zu rendierenden Steuerelements angibt. Um beispielsweise ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben), wird der Eingabetypt `text` verwendet, wodurch ein Klartext-Eingabefeld erstellt wird.

    Zulässige Werte sind in [Eingabetypen](#input_types) oben aufgeführt.

- `value`
  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Ausgangswert, und von da an kann er jederzeit mithilfe von JavaScript geändert oder abgerufen werden, um auf die `value`-Eigenschaft des entsprechenden [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch als verpflichtend für `checkbox`, `radio` und `hidden` angesehen werden.

- `width`
  - : Nur gültig für den `image`-Eingabeknopf, ist `width` die Breite der Bilddatei, die angezeigt werden soll, um die grafische Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auf einigen Browsern ebenfalls verfügbar. Im Allgemeinen sollten Sie deren Verwendung vermeiden, es sei denn, es kann nicht anders.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, um die Aktualisierung der Live-Suchergebnisse zu ermöglichen, während der Benutzer noch den Wert des Felds bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenkette, die den Typ der Aktion anzeigt, die durchgeführt wird, wenn der Benutzer die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste drückt, während das Feld bearbeitet wird; dies wird verwendet, um ein geeignetes Label für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
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
        Ein Boolean, der angibt, ob nur erlaubt ist, dass der Benutzer ein Verzeichnis (oder Verzeichnisse, falls <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) auswählen darf.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome, etc.), die, wenn vorhanden, dem {{Glossary("user_agent", "Benutzeragent")}} sagt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (wie durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

    Das `search`-Ereignis ist so rate-begrenzt, dass es nicht häufiger als in einem implementierungsdefinierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}
  - : Ähnlich dem nicht-standardisierten CSS-Eigenschaft `-moz-orient`, das die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente betrifft, definiert das `orient`-Attribut die Ausrichtung des Bereichsschiebers. Werte schließen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Vertikale Formularsteuerung erstellen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung von vertikalen Formularsteuerungen.

- `results` {{non-standard_inline}}
  - : Das `results`-Attribut—unterstützt nur von Safari—ist ein numerischer Wert, der Ihnen erlaubt, die maximale Anzahl von Einträgen in dem nativ bereitgestellten Dropdown-Menü des `<input>`-Elements früherer Suchanfragen zu überschreiben.

    Der Wert muss eine nicht negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben wird, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean-`webkitdirectory`-Attribut, wenn vorhanden, gibt an, dass im Dateiauswahl-Interface nur Verzeichnisse ausgewählt werden können. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später verwendbar. Obwohl es relativ umfassende Unterstützung hat, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden durch das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interface bereitgestellt, das `<input>`-Elemente im DOM repräsentiert. Ebenso verfügbar sind die Methoden, die durch die übergeordneten Schnittstellen [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) festgelegt sind.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; ansonsten wird `false` zurückgegeben und ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; ansonsten wird `false` zurückgegeben, ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element ausgelöst und (falls das Ereignis nicht abgebrochen wird) das Problem dem Benutzer gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder Kalenderdateneingaben) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Bereichs von Zeichen im Eingabeelement auf eine gegebene Zeichenkette. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines Texteingabeelements aus. Tut nichts für Eingaben, die nicht als Texteingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Auswahldialog für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Da Inputs ersetzte Elemente sind, haben sie einige Funktionen, die auf Nicht-Formularelemente nicht anwendbar sind. Es gibt CSS-Selektoren, die gezielt Formularelemente basierend auf ihren UI-Funktionen, auch bekannt als UI-Pseudo-Klassen, ansprechen können. Das Input-Element kann auch nach Typ mit Attributselektoren angesprochen werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

### UI-Pseudo-Klassen

<table class="no-markdown">
  <caption>
    Pseudo-Klassen, die für das
    <code>&#x3C;input></code>-Element relevant sind:
  </caption>
  <thead>
    <tr>
      <th>Pseudo-Klasse</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{Cssxref(":enabled")}}</td>
      <td>
        Jedes aktuell aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, eingegeben etc.) oder den Fokus akzeptieren kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder keinen Fokus akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes aktuell deaktivierte Element, das einen aktivierten Zustand hat, d.h. es könnte sonst aktiviert werden (ausgewählt, angeklickt, eingegeben etc.) oder den Fokus akzeptieren, wäre es nicht deaktiviert.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element, das vom Benutzer nicht bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elementen mit vorhandenem <a href="#placeholder"><code>placeholder</code>-Attribut, die noch keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die standardmäßig in einer Gruppe von verwandten Elementen sind. Entspricht {{HTMLElement("input/checkbox", "checkbox")}}- und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die beim Laden oder Rendern der Seite geprüft wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}}- und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die derzeit geprüft sind (und dem {{HTMLElement("option")}}, das in einem {{HTMLElement("select")}} derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt wurde, {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Radio-Buttons mit demselben Namenswert im Formular nicht geprüft sind, und {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die eine Validierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die eine Validierung angewendet wurde und die derzeit nicht gültig sind. Entspricht einem Formularelement, dessen Wert die durch seine Attribute festgelegten Einschränkungen wie <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a> nicht erfüllt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribute sowie <a href="#step"><code>step</code></a> angegebenen Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribute angegebenen Grenzen liegt oder nicht dem <a href="#step"><code>step</code></a>-Constraint entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Es entspricht nur Elementen, die erforderlich sein können.
        Das Attribut auf einem Element, das nicht erforderlich sein kann, führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element, das NICHT das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Entspricht nicht Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, aber wird beim Verlassen des Feldes aktiviert. Entspricht ungültigen Eingaben, jedoch nur nach der Benutzerinteraktion, z.B. durch Fokus auf das Steuerungselement, Verlassen des Steuerungselements oder Versuch, das Formular mit dem ungültigen Steuerungselement einzureichen.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Auswahldialog für den Benutzer anzeigen, um einen Wert auszuwählen (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) – aber nur, wenn das Element im geöffneten Zustand ist, das heißt, wenn der Auswahldialog angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudo-Klassen

Wir können ein Checkbox-Label basierend darauf gestalten, ob die Checkbox ausgewählt ist oder nicht. In diesem Beispiel gestalten wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einer ausgewählten Eingabe kommt. Wir haben keine Styles angewendet, wenn das `input` nicht ausgewählt ist.

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

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mittels [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) zu adressieren. CSS-Attributselektoren stimmen Elemente basierend auf der bloßen Anwesenheit eines Attributs oder dem Wert eines bestimmten Attributs ab.

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

Standardmäßig erscheint der Platzhaltertext durchscheinend oder hellgrau. Das {{cssxref('::placeholder')}}-Pseudo-Element ist der [`placeholder`-Text](#placeholder) des Eingabefelds. Es kann mit einer begrenzten Untergruppe von CSS-Eigenschaften gestaltet werden.

```css
::placeholder {
  color: blue;
}
```

Nur die Untergruppe von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}}-Pseudo-Element anwendbar sind, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### caret-color

Eine spezielle Eigenschaft für textbezogene Eingabewelten ist die CSS-Eigenschaft {{cssxref("caret-color")}}, die es Ihnen ermöglicht, die Farbe festzulegen, die zum Zeichnen des Textkursors verwendet wird:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie erhalten standardmäßig eine voreingestellte bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, sodass Formularelemente ihre Größe anpassen, um ihren Inhalt zu fassen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingabe erlauben (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetypen [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}}-Elementen.

### object-position und object-fit

In bestimmten Fällen (häufig bei nicht-textbasierten Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es so ist, können die Position und Größe des Elements in seinem Rahmen mithilfe der CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für mehr Informationen darüber, wie man Farbe zu HTML-Elementen hinzufügt, siehe:

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color).

Auch siehe:

- [HTML-Formulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels sind notwendig, um unterstützenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element bietet erklärende Informationen über ein Formularfeld, das _immer_ angemessen ist (abgesehen von gestalterischen Überlegungen). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden sollte.

#### Zugehörige Labels

Die semantische Verknüpfung von `<input>`- und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Bildschirmleser. Indem sie durch das Attribut [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) des `<label>`-Elements gemeinsam genutzt werden, verbinden Sie das Label mit dem Eingabefeld auf eine Weise, die Bildschirmleser Inputs präziser den Benutzern beschreiben lässt.

Es reicht nicht aus, einfachen Text neben dem `<input>`-Element zu haben. Vielmehr erfordert Usability und Zugänglichkeit den Einschluss von entweder impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist unzugänglich: keine Beziehung besteht zwischen der Aufforderung und dem `<input>`-Element.

Neben einem zugänglichen Namen bietet das Label einen größeren "Trefferbereich" für Maus- und Touchscreen-Nutzer, um darauf zu klicken oder sie zu berühren. Indem ein `<label>` mit einem `<input>` verbunden wird, fokussiert das Klicken auf eines von beiden das `<input>`. Wenn Sie einfachen Text verwenden, um Ihr Input zu "beschriften", passiert das nicht. Das Einbeziehen der Aufforderung als Teil des Aktivierungsbereichs für die Eingabe ist hilfreich für Menschen mit motorischen Kontrollbedingungen.

Als Webentwickler ist es wichtig, dass wir nie annehmen, dass Menschen alle Dinge wissen werden, die wir wissen. Die Vielfalt an Menschen, die das Web nutzen – und damit auch Ihre Website – garantiert praktisch, dass einige Besucher Ihrer Website Varianten in Denkprozessen und/oder Umstände haben werden, die sie Ihre Formulare anders interpretieren lassen als Sie ohne klare und richtig präsentierte Labels.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text festzulegen, der innerhalb des Inhaltsbereichs des `<input>`-Elements selbst angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, weil es das nicht ist. Der Platzhalter dient dazu, einen Hinweis darauf zu geben, wie ein eingabewert aussehen sollte, nicht als Erklärung oder Aufforderung.

Nicht nur ist der Platzhalter für Bildschirmleser nicht zugänglich, sondern sobald der Benutzer Text in das Formularelement eingibt, oder wenn das Formularelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischer Seitenübersetzungsfunktionalität können bei der Übersetzung der Attribute überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nach Möglichkeit nicht. Wenn Sie ein `<input>`-Element kennzeichnen müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, _überprüfen_ Sie diese immer auch serverseitig und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}}- oder {{cssxref(":invalid")}}-UI-Zuständen basierend auf dem aktuellen Zustand jeder Eingabe zu gestalten, wie im Abschnitt [UI-Pseudo-Klassen](#ui-pseudo-klassen) oben erwähnt, ermöglicht der Browser eine client-seitige Validierung bei (versuchter) Formulareinreichung. Bei der Formulareinreichung, wenn ein Formularelement die Einschränkungsvalidierung nicht besteht, zeigen unterstützende Browser eine Fehlermeldung auf dem ersten ungültigen Formularelement an; eine Standardmeldung basierend auf der Art des Fehlers oder eine von Ihnen festgelegte Meldung.

Einige Eingabetypen und andere Attribute setzen Grenzen, welche Werte für eine bestimmte Eingabe gültig sind. Beispielsweise bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler könnten auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Ganzzahl (nicht den Anforderungen des `step`-Attributs entspricht), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Wertebereich periodisch ist (d.h. bei dem höchstmöglichen Wert kehren die Werte zum Anfang zurück, anstatt zu enden), ist es möglich, dass die Werte der Eigenschaften [`max`](#max) und [`min`](#min) umgekehrt sind, was darauf hinweist, dass der Bereich erlaubter Werte bei `min` beginnt, zum niedrigsten möglichen Wert zurückkehrt und dann fortfährt, bis `max` erreicht ist. Dies ist besonders nützlich für Datum- und Zeitwerte, wie wenn Sie den Bereich auf 20:00 Uhr bis 08:00 Uhr festlegen möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und deren Werte können zu einem bestimmten Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

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
        Tritt auf, wenn der Wert größer ist als der Höchstwert, der durch das <code>max</code>-Attribut definiert ist
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch das <code>maxlength</code>-Eigenschaft erlaubte Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der Minimalwert, der durch das <code>min</code>-Attribut definiert ist
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen geringer ist als die durch die <code>minlength</code>-Eigenschaft erforderliche Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Musterattribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> ist oder ein Radio- oder Checkbox-Auswahlfeld nicht ausgewählt ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert stimmt nicht mit dem Schrittinkrement überein. Der Standardinkrement ist <code>1</code>, sodass nur ganze Zahlen bei <code>type="number"</code> gültig sind, falls Schritt nicht eingeschlossen ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, z.B. eine E-Mail enthält kein <code>@</code> oder eine URL enthält kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required`-Attribut hat, führt kein Wert oder ein leerer String nicht zu einer Ungültigkeit. Selbst wenn die obigen Attribute vorhanden sind, außer `required`, wird ein leerer String nicht zu einem Fehler führen.

Wir können Grenzen festlegen, welche Werte wir akzeptieren, und unterstützte Browser werden diese Formularwerte von Natur aus validieren und den Benutzer warnen, wenn beim Absenden ein Fehler auftritt.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen, schreibgeschützten Eigenschaften `badInput`, `valid` und `customError`. Das Validierungsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften gibt ein Wert von `true` an, dass der angegebene Grund, warum die Validierung fehlgeschlagen sein könnte, zutrifft, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen einhält.

Wenn ein Fehler auftritt, werden unterstützte Browser sowohl den Benutzer warnen als auch verhindern, dass das Formular abgeschickt wird. Ein Wort der Vorsicht: Wenn eine benutzerdefinierte Fehlermeldung auf einen wahrheitsgemäßen Wert (alles außer dem leeren String oder `null`) gesetzt wird, wird verhindert, dass das Formular abgeschickt wird. Wenn keine benutzerdefinierte Fehlermeldung vorliegt und keine der anderen Eigenschaften `true` zurückgeben, wird `valid` `true` sein und das Formular kann abgeschickt werden.

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

Die letzte Zeile, die die benutzerdefinierte Fehlermeldung auf den leeren String setzt, istt unerlässlich. Wird ein Fehler gemacht und die Gültigkeit wird eingestellt, wird die Einreichung nicht erfolgen, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandten) Elementen verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen werden dazu führen, dass dies eine Standardfehlermeldung erzeugt, wenn Sie versuchen, das Formular mit entweder leerem oder ungültigem Wert einzureichen, der nicht mit `pattern` übereinstimmt.

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

Das Beispiel wird wie folgt angezeigt:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir prüfen den Gültigkeitszustand des Eingabeelements jedes Mal, wenn sein Wert durch das Ausführen der `checkValidity()`-Methode über den `input`-Ereignishandler geändert wird.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis erzeugt und die `invalid`-Ereignishandler-Funktion ausgeführt. In dieser Funktion ermitteln wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht mit dem Muster übereinstimmt, indem wir einen `if ()`-Block verwenden, und setzen eine benutzerdefinierte Gültigkeitsfehlermeldung.
- Infolgedessen wird, wenn der Eingabewert ungültig ist, wenn der Absende-Button gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er in gewohnter Weise eingereicht. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit durch Aufrufen von `setCustomValidity()` mit einem leeren String-Wert gestoppt werden. Wir tun dies daher jedes Mal, wenn das `input`-Ereignis aufgerufen wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Gültigkeit zuvor eingestellt wurde, wird die Eingabe als ungültig registriert, auch wenn sie derzeit einen gültigen Wert bei der Einreichung enthält.

> [!NOTE]
> Validieren Sie immer sowohl clientseitige als auch serverseitige Eingabeeinschränkungen. Die Anwendungsvalidierung entfernt nicht die Notwendigkeit einer Validierung auf der _Serverseite_. Ungültige Werte können immer noch von älteren Browsern oder durch böswillige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte lange ein proprietäres Fehlerattribut — `x-moz-errormessage` — das es erlaubt, benutzerdefinierte Fehlermeldungen ähnlich einzustellen. Dies wurde mit Version 66 entfernt (siehe [Firefox-bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der Lokalisierung ab. In einigen lokalen Regionen ist 1.000,00 eine gültige Zahl, während in anderen Gebieten die gültige Möglichkeit, diese Zahl einzugeben, 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um zu bestimmen, welche Lokalisierung zur Validierung der Benutzereingabe verwendet wird (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut am Element oder einem seiner Eltern angegeben wird.
- Versuchen Sie die Sprache, die durch einen `Content-Language` HTTP-Header angegeben wird. Oder,
- Wenn keine angegeben ist, verwenden Sie die Sprache des Browsers.

## Barrierefreiheit

### Labels

Beim Hinzufügen von Eingaben ist es erforderlich, auch Labels hinzuzufügen. Dies ist unerlässlich, damit Benutzer von unterstützenden Technologien erkennen können, wofür die Eingabe gedacht ist. Außerdem gewährleistet das Klicken oder Berühren eines Labels den Fokus auf das zugehörige Formularelement des Labels. Dies verbessert die Barrierefreiheit und Usability für sehende Nutzer und vergrößert den Bereich, den der Benutzer klicken oder berühren kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar erforderlich) für Radio-Buttons und Checkboxen, die sehr klein sind. Weitere Informationen über Labels im Allgemeinen finden Sie unter [Labels](#labels).

Das folgende Beispiel zeigt, wie das `<label>` mit einem `<input>`-Element im obigen Stil verknüpft werden kann. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert mit der `id` des Inputs übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bieten, der leicht zu aktivieren ist. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die unpräzise Eingabemethoden wie einen Stylus oder Finger verwenden. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Verständnis des Erfolgs-Kriteriums 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>, aufgelistet, einreichbar, zurücksetzbar, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Satzinhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann ein label-fähiges Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Satzinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">Schaltfläche</a></code>
          </li>
          <li>
            <code>type=checkbox</code>:
            <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role">Kontrollkästchen</a></code>
          </li>
          <li>
            <code>type=email</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">Textfeld</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>Kombinationsfeld</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=image</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">Schaltfläche</a></code>
          </li>
          <li>
            <code>type=number</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>Drehknopf</code></a>
          </li>
          <li><code>type=radio</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>Radio</code></a></li>
          <li><code>type=range</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role"><code>Schieberegler</code></a></li>
          <li>
            <code>type=reset</code>:
            <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">Schaltfläche</a></code>
          </li>
          <li>
            <code>type=search</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>Suchfeld</code></a>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>Kombinationsfeld</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=submit</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">Schaltfläche</a></code>
          </li>
          <li>
            <code>type=tel</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">Textfeld</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>Kombinationsfeld</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">Textfeld</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>Kombinationsfeld</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">Textfeld</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>Kombinationsfeld</code></a>
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
            <code>type=button</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>Kontrollkästchen</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>Kombinationsfeld</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>Link</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>Menüpunkt</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>Menüpunkt-Kontrollkästchen</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>Menüpunkt-Radio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>Option</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>Radio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>Schalter</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>Registerkarte</code></a>
          </li>
          <li>
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>Schaltfläche</code></a> bei Verwendung
            mit <code>aria-pressed</code>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>Menüpunkt-Kontrollkästchen</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>Option</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>Schalter</code></a>
          </li>
          <li>
            <code>type=image</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>Link</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>Menüpunkt</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>Menüpunkt-Kontrollkästchen</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>Menüpunkt-Radio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>Radio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>Schalter</code></a>
          </li>
          <li>
            <code>type=radio</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>Menüpunkt-Radio</code></a>
          </li>
          <li>
            <code>type=text</code> ohne <code>list</code>-Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>Kombinationsfeld</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>Suchfeld</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>Drehknopf</code></a>
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

- CSS {{cssxref("appearance")}}-Eigenschaft
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Wie Sie ein HTML-Formular strukturieren](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formulareinschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [HTML-Formulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
