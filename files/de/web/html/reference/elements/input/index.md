---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

Das **`<input>`**-Element [HTML](/de/docs/Web/HTML) wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren. Je nach Gerät und {{Glossary("user_agent", "Benutzeragent")}} stehen eine Vielzahl von Eingabedaten und Steuerelement-Widgets zur Verfügung. Das `<input>`-Element ist eines der mächtigsten und komplexesten im gesamten HTML aufgrund der schier zahlreichen Kombinationen von Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich abhängig vom Wert seines [`type`](#type)-Attributs. Daher werden die unterschiedlichen Typen in separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben wird, ist der Standardtyp `text`.

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
      <td>Eine Checkbox, die einzelne Werte zur Auswahl/Deselect erlauben.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Kontroller zur Farbauswahl, der in unterstützenden Browsern einen Farbwähler öffnet.
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
        Ein Steuerelement zur Dateneingabe (Jahr, Monat und Tag ohne Zeit).
        Öffnet in unterstützenden Browsern einen Datumswähler oder numerische Rollen für Jahr, Monat, Tag.
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
        Ein Steuerelement zur Eingabe von Datum und Uhrzeit, ohne Zeitzone. Öffnet einen Datumswähler oder numerische Rollen für Datum- und Zeitkomponenten in unterstützenden Browsern.
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
        Ein Feld zur Bearbeitung einer E-Mail-Adresse. Sieht aus wie eine
        <code>text</code>-Eingabe, hat aber Validierungsparameter und eine relevante
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
        Ein Steuerelement, mit dem der Benutzer eine Datei auswählen kann.
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
        Ein Steuerelement, das nicht angezeigt wird, dessen Wert jedoch an den
        Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist versteckt!
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
        Ein grafischer <code>submit</code>-Button. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert ist.
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
      <td>Ein Steuerelement zur Eingabe eines Monats und eines Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerelement zur Eingabe einer Zahl. Zeigt eine Spinnsteuerung an und fügt eine Standardvalidierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Radiobutton, der die Auswahl eines einzelnen Wertes aus mehreren mit demselben <a href="#name"><code>name</code></a>-Wert ermöglicht.
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
        Ein Steuerelement zur Eingabe einer Zahl, deren exakter Wert nicht wichtig ist. Wird als Bereichs-Widget angezeigt, das standardmäßig auf den mittleren Wert eingestellt ist. Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich der akzeptablen Werte zu definieren.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchzeichenfolgen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern ein Löschsymbol enthalten, das verwendet werden kann, um das Feld zu löschen. Zeigt ein Suche-Symbol anstelle der Eingabetaste auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Steuerelement zur Eingabe einer Telefonnummer. Zeigt eine Telefon-Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
      <td>Ein Steuerelement zur Eingabe eines Zeitwerts ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code>-Eingabe, hat aber Validierungsparameter und eine relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerelement zur Eingabe eines Datums, das aus einer Wochennummer und einer Jahrwoche besteht, ohne Zeitzone.
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
        Ein Steuerelement zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf UTC-Zeitzone.
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

Das `<input>`-Element ist so mächtig, aufgrund seiner Attribute; das [`type`](#type)-Attribut, wie oben in den Beispielen beschrieben, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch gesehen denselben Satz an Attributen. In der Realität haben jedoch die meisten Attribute nur einen Effekt auf eine bestimmte Teilmenge von Eingabetypen. Darüber hinaus beeinflussen einige Attribute, je nach Eingabetyp, unterschiedliche Eingabetypen auf unterschiedliche Weise.

Dieser Abschnitt enthält eine Tabelle, in der alle Attribute mit einer kurzen Beschreibung aufgeführt sind. Danach folgt eine Liste, die jedes Attribut im Detail beschreibt, sowie die damit verbundenen Eingabetypen. Attribute, die den meisten oder allen Eingabetypen gemeinsam sind, werden weiter unten ausführlicher definiert. Attribute, die für bestimmte Eingabetypen einzigartig sind – oder Attribute, die für alle Eingabetypen gemeinsam sind, aber spezielle Verhaltensweisen haben, wenn sie auf einen bestimmten Eingabetyp angewendet werden – werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                       | Beschreibung                                                                                              |
| --------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                        | Hinweis auf erwarteten Dateityp in Datei-Upload-Steuerelementen                                           |
| [`alpha`](#alpha)                             | `color`                                                                       | Deckkraft der Farbe                                                                                       |
| [`alt`](#alt)                                 | `image`                                                                       | Alt-Attribut für den Bildtyp. Erforderlich für die Barrierefreiheit                                       |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email`, und `password`                                     | Steuert die automatische Großschreibung von eingegebenem Text.                                            |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio`, und Schaltflächen                             | Hinweis für das automatische Ausfüllen von Formularen                                                     |
| [`capture`](#capture)                         | `file`                                                                        | Eingabemethode für Medienaufnahme in Datei-Upload-Steuerelementen                                         |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                           | Ob der Befehl oder das Steuerelement aktiviert ist                                                        |
| [`colorspace`](#colorspace)                   | `color`                                                                       | Der {{Glossary("Color_space", "Farbraum")}}, der zur Auswahl des Farbwerts verwendet werden soll          |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                             | Name des Formularfelds zur Übermittlung der Ausrichtung des Elements bei der Formularübermittlung         |
| [`disabled`](#disabled)                       | alle                                                                          | Ob das Formularsteuerelement deaktiviert ist                                                              |
| [`form`](#form)                               | alle                                                                          | Verknüpft das Steuerelement mit einem Formularelement                                                     |
| [`formaction`](#formaction)                   | `image`, `submit`                                                             | URL für die Formularübermittlung                                                                          |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                             | Kodierungstyp des Formulardatensatzes für die Formularübermittlung                                        |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                             | HTTP-Methode zur Formularübermittlung                                                                     |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                             | Umgehen der Formularsteuerelementvalidierung für die Formularübermittlung                                 |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                             | Browsing-Kontext für die Formularübermittlung                                                             |
| [`height`](#height)                           | `image`                                                                       | Entspricht dem Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                              |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio`, und Schaltflächen       | Wert des ID-Attributs der {{htmlelement('datalist')}} mit Autovervollständigungsoptionen                  |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Maximalwert                                                                                               |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                           | Maximale Länge (Anzahl Zeichen) des `value`                                                               |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Minimalwert                                                                                               |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                           | Minimale Länge (Anzahl Zeichen) des `value`                                                               |
| [`multiple`](#multiple)                       | `email`, `file`                                                               | Boolean. Ob mehrere Werte erlaubt sind                                                                    |
| [`name`](#name)                               | alle                                                                          | Name des Formularsteuerelements. Wird mit dem Formular als Teil eines Name/Wert-Paars übermittelt         |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                           | Muster, das der `value` entsprechen muss, um gültig zu sein                                               |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                 | Text, der im Formularsteuerelement erscheint, wenn kein Wert gesetzt ist                                  |
| [`popovertarget`](#popovertarget)             | `button`                                                                      | Weist einem `<input type="button">` als Steuerelement für ein Popover-Element zu                          |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                      | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                          |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio`, und Schaltflächen | Boolean. Der Wert ist nicht bearbeitbar                                                                   |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color`, und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss aktiviert werden, damit das Formular übermittelt werden kann |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                           | Größe des Steuerelements                                                                                  |
| [`src`](#src)                                 | `image`                                                                       | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                       |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Schrittweise gültige Werte                                                                                |
| [`switch`](#switch)                           | `checkbox`                                                                    | Ob die Checkbox als Schalter dargestellt werden soll                                                      |
| [`type`](#type)                               | alle                                                                          | Typ des Formularsteuerelements                                                                            |
| [`value`](#value)                             | alle außer `image`                                                            | Der Wert des Steuerelements. Wenn im HTML angegeben, entspricht es dem Anfangswert                        |
| [`width`](#width)                             | `image`                                                                       | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                                |

Einige zusätzliche nicht standardisierte Attribute werden nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Gültig nur für den `file` Eingabetyp, das `accept`-Attribut definiert, welche Dateitypen in einem `file` Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alpha` {{experimental_inline}}
  - : Gültig nur für den `color` Eingabetyp, das `alpha`-Attribut gibt dem Endbenutzer die Möglichkeit, die Deckkraft der ausgewählten Farbe festzulegen.

- `alt`
  - : Gültig nur für den `image` Button, das `alt`-Attribut liefert alternativen Text für das Bild und zeigt den Wert des Attributs an, falls das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch in Großbuchstaben umgewandelt wird und, falls ja, auf welche Weise. Siehe die globalen Attributseite [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** booleanes Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge an, die beschreibt, welche Art von Autovervollständigungsfunktionalität das Eingabefeld bereitstellen soll. Eine typische Implementierung von Autovervollständigung erfasst zuvor eingegebene Werte in demselben Eingabefeld, es können jedoch komplexere Formen der Autovervollständigung existieren. Beispielsweise könnte ein Browser die Kontaktliste eines Geräts integrieren, um `email`-Adressen in einem E-Mail-Eingabefeld automatisch auszufüllen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für erlaubte Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, und `password`. Dieses Attribut hat keine Wirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, es ist für alle Eingabetypen außer `checkbox`, `radio`, `file`, oder eine der Schaltflächen-Typen gültig.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für weitere Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` bei `hidden` leicht anders ist als bei anderen Eingabetypen.

- `autofocus`
  - : Ein booleanes Attribut, das, falls vorhanden, angibt, dass das Eingabefeld automatisch den Fokus haben soll, wenn die Seite fertig geladen ist (oder wenn das {{HTMLElement("dialog")}}, das das Element enthält, angezeigt wird).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element angebracht ist, erhält das erste Element mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben vom Typ `hidden` verwendet werden, da verborgene Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Ein automatisches Fokussieren eines Formularsteuerelements kann sehbehinderten Menschen, die Bildschirmlesegeräte verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmlesegeräte ihren Benutzer ohne Vorwarnung zum Formularsteuerelement.

    Verwenden Sie das `autofocus`-Attribut mit Bedacht auf die Barrierefreiheit. Ein automatisches Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch auf einigen Touch-Geräten dynamische Tastaturen anzeigen. Während ein Bildschirmlesegerät das Label des Formularsteuerelements ankündigt, das den Fokus erhält, wird das Bildschirmlesegerät nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird den Kontext des vorangegangenen Inhalts ebenso verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und nur für den `file` Eingabetyp gültig, definiert das `capture`-Attribut, welches Medium – Mikrofon, Video oder Kamera – verwendet werden soll, um eine neue Datei mit dem `file` Upload-Steuerelement in unterstützenden Szenarien hochzuladen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`
  - : Gültig für die Typen `radio` und `checkbox`, ist `checked` ein booleanes Attribut. Wenn es auf einem `radio`-Typ vorhanden ist, gibt es an, dass der Radiobutton der aktuell ausgewählte in der Gruppe der gleichnamigen Radiobuttons ist. Wenn es auf einem `checkbox`-Typ vorhanden ist, gibt es an, dass die Checkbox standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob diese Checkbox aktuell aktiviert ist: Wenn sich der Zustand der Checkbox ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`](#HTMLInputElement) `checked` IDL-Attribut wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen werden der Wert von Checkboxen und Radiobuttons nur dann in den übermittelten Daten enthalten, wenn sie derzeit `checked` sind. Wenn sie es sind, werden der Name und die Werte der aktivierten Kontrollen übermittelt.
    >
    > Wenn beispielsweise eine Checkbox mit dem `name` `fruit` den `value` "cherry" hat und die Checkbox aktiviert ist, enthalten die übermittelten Formulardaten `fruit=cherry`. Wenn die Checkbox nicht aktiv ist, wird sie in den Formulardaten nicht aufgeführt. Der Standardwert für Checkboxen und Radiobuttons ist `on`.

- `colorspace` {{experimental_inline}}
  - : Gültig nur für den `color` Eingabetyp, gibt das `colorspace`-Attribut den {{Glossary("Color_space", "Farbraum")}} an, der von der Eingabe mit `type="color"` verwendet wird. Mögliche {{Glossary("enumerated", "aufgelistete")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}} Farbraum. Dies umfasst {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}} und {{cssxref("hex-color")}} Werte. Der Farbwert ist auf 8-Bit pro `r`, `g` und `b` Komponente begrenzt. Dies ist der Standard.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3 Farbraum")}}, z.B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für die Eingabetypen `hidden`, `text`, `search`, `url`, `tel` und `email`, ermöglicht das `dirname`-Attribut die Übermittlung der Ausrichtung des Elements. Wenn sie enthalten ist, wird das Formularsteuerelement mit zwei Name/Wert-Paaren übermittelt: das erste ist `name` / `value` und das zweite ist der Wert des `dirname`-Attributs als Name mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das oben genannte Formular übermittelt wird, führt die Eingabe dazu, dass sowohl das `name` / `value` Paar `fruit=cherry` als auch das `dirname` / Richtungspaar `fruit-dir=ltr` gesendet werden.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein booleanes Attribut, das, wenn vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren sollte. Deaktivierte Eingaben werden typischerweise mit einer abgedunkelten Farbe angezeigt oder durch eine andere Form der Anzeige, dass das Feld nicht verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis und werden nicht zusammen mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation gefordert, wird Firefox standardmäßig den dynamischen deaktivierten Zustand von einem `<input>` über Seitenladungen hinweg [speichern](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Ein String, der das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe zugeordnet ist (d.h. ihr **Formularbesitzer**). Der Wert dieses Strings, falls vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, ist das `<input>`-Element mit dem nächstgelegenen enthaltenen Formular assoziiert, falls vorhanden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe überall im Dokument zu platzieren, aber sie in einem Formular an anderer Stelle im Dokument einzubinden.

    > [!NOTE]
    > Eine Eingabe kann nur einem Formular zugeordnet sein.

- `formaction`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formenctype`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formmethod`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formnovalidate`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formtarget`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `height`
  - : Nur gültig für den `image`-Button, die `height` ist die Höhe der Bilddatei, die als grafischer Submit-Button dargestellt werden soll. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabentypen, definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des {{htmlelement('label')}} `for`-Attributs verwendet, um das Label mit dem Formularsteuerelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist, und einen Hinweis an Browser liefert, welche Art von virtueller Tastaturkonfiguration beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal`, und `search`.
- `list`
  - : Der dem `list`-Attribut zugewiesene Wert sollte die [`id`](/de/docs/Web/API/Element/id) eines `datalist`-Elements im selben Dokument sein. Die `<datalist>` bietet eine Liste von vordefinierten Werten, die dem Benutzer zur Eingabe für diese Eingabe vorgeschlagen werden. Alle in der Liste enthaltenen Werte, die nicht mit dem [`type`](#type) übereinstimmen, werden nicht in den vorgeschlagenen Optionen enthalten sein. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Nutzer können aus dieser vorgefertigten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, und `color`.

    Entsprechend den Spezifikationen wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file`, oder einer der Schaltflächentypen unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Markierungen entlang eines Bereichs, oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber nicht gelistete Werte zulässt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert den höchsten Wert innerhalb des Bereichs der erlaubten Werte. Wenn der eingegebene [`value`](#value) dieses Element überschreitet, schlägt die Element-[Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), darf der `max`-Wert niedriger sein als der `min`-Wert, was darauf hinweist, dass der Bereich sich umstellen kann; dies erlaubt es beispielsweise, einen Zeitbereich von 22:00 bis 04:00 Uhr festzulegen.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn keine `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Feld keine Maximallänge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des eingegebenen Textes größer ist als `maxlength` {{Glossary("UTF-16", "UTF-16 code units")}} Länge. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das `maxlength`-Attribut erlaubt sind. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Siehe [Client-seitige Validierung](#validierung_auf_client-seite) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert den negativsten Wert innerhalb des Bereichs der erlaubten Werte. Wenn der eingegebene [`value`](#value) des Elements darunter fällt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein Nicht-Null-Wert unter dem minimal erlaubten Wert gemäß dem `min`-Attribut liegt, verhindert die Einschränkungsvalidierung die Formularübermittlung. Siehe [Client-seitige Validierung](#validierung_auf_client-seite) für weitere Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), darf der `max`-Wert niedriger sein als der `min`-Wert, was darauf hinweist, dass der Bereich sich umstellen kann; dies erlaubt es beispielsweise, einen Zeitbereich von 22:00 bis 04:00 Uhr festzulegen.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert die minimal Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich der durch das `maxlength`-Attribut festgelegten Länger ist. Wenn keine `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Eingabe keine Minimallänge.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Zeichenanzahl des Textes, die in das Feld eingegeben wird, weniger ist als `minlength` {{Glossary("UTF-16", "UTF-16 code units")}} und verhindert die Formularübermittlung. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Siehe [Client-seitige Validierung](#validierung_auf_client-seite) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das boolesche `multiple`-Attribut, wenn es gesetzt ist, bedeutet, dass der Benutzer durch Komma getrennte E-Mail-Adressen in das E-Mail-Widget eingeben oder mehr als eine Datei mithilfe des `file`-Inputs auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`
  - : Ein String, der einen Namen für das Eingabefeld festlegt. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn die Formulardaten gesendet werden.

    Betrachten Sie den `name` als ein erforderliches Attribut (auch wenn es das nicht ist). Wenn keine Bezeichnung angegeben ist oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular gesendet! (Deaktivierte Steuerelemente, nicht aktivierte Radiobuttons, nicht aktivierte Checkboxen und Zurücksetzen-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_` : Wenn als `name` eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet, wird der Wert des Eingabefeldes automatisch vom {{Glossary("user_agent", "Benutzeragent")}} auf die zum Senden des Formulars verwendete Zeichenkodierung gesetzt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut schafft ein einzigartiges Verhalten für Radiobuttons.

    Nur ein Radiobutton innerhalb einer gleichnamigen Gruppe aus Radiobuttons kann gleichzeitig aktiviert sein. Wenn irgendein Radiobutton in dieser Gruppe ausgewählt wird, wird jeder derzeit aktivierte Radiobutton in derselben Gruppe automatisch deselektiert. Der Wert dieses einen aktivierten Radiobuttons wird mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Wenn in eine Serie von gleichnamigen Radiobuttons getabt wird, falls einer aktiviert ist, wird dieser den Fokus erhalten. Wenn sie nicht in Quellcode-Reihenfolge gruppiert sind, wenn einer aus der Gruppe aktiviert ist, beginnt das Tabben in die Gruppe, wenn der erste in der Gruppe erreicht wird, wobei alle aktuellen deaktivierten übersprungen werden. Anders gesagt, wenn einer aktiviert ist, wird das Tabben die nicht aktivierten Radiobuttons in der Gruppe überspringen. Wenn keiner aktiviert ist, erhält die Radiobutton-Gruppe den Fokus, wenn der erste Button in der Gruppe mit demselben Namen erreicht wird.

    Sobald einer der Radiobuttons in einer Gruppe den Fokus hat, erfolgt die Navigation durch die Pfeiltasten durch alle Radiobuttons des gleichen Namens, auch wenn die Radiobuttons im Quellcode nicht zusammengefasst sind.

    Wenn einem Eingabeelement ein `name` zugewiesen wird, wird dieser Name zu einem Eigentum des eigentlichen Formularelements [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft. Wenn Sie eine Eingabe mit dem Namen `guest` und eine andere mit dem Namen `hat-size` haben, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das Gastfeld sein, und `hatSize` das Objekt für das Hutgrößenfeld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer integrierten Eigenschaft des Formulars entspricht, da Sie damit die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompilieren, den der [`value`](#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird, und im [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Vorwärtsslashs sollten nicht um den Mustertext angegeben werden. Beim Kompilieren des regulären Ausdrucks:
    1. Das Muster wird implizit mit `^(?:` und `)$` umschlossen, so dass die Übereinstimmung auf den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. Das `'v'` Flag wird spezifiziert, so dass das Muster als Sequenz von Unicode-Codepunkten behandelt wird und nicht als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet, und dieses Attribut wird vollständig ignoriert. Wenn das pattern Attribut gültig ist und ein nicht-leerer Wert nicht mit dem Muster übereinstimmt, verhindert die Einschränkungsvalidierung die Formularübermittlung. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck mit jedem durch Komma getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe einfügen. Sie können auch ein [`title`](#title)-Attribut einschließen, um zu erklären, was die Anforderungen sind, um das Muster zu erfüllen; die meisten Browser werden diesen Titel als Tooltip anzeigen. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#validierung_auf_client-seite) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password`, und `number`, das `placeholder`-Attribut bietet einen kurzen Hinweis für den Benutzer auf welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Art von Daten gibt, anstelle einer Erklärung oder Aufforderung. Der Text _darf nicht_ Wagenrückläufe oder Zeilenumbrüche enthalten. Zum Beispiel, wenn ein Feld erwartet, den Vornamen eines Benutzers zu erfassen und sein Label „Vorname“ ist, könnte ein geeignetes Platzhalter sein „z.B., Mustafa“.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Wege, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für mehr Informationen.

- `popovertarget`
  - : Verwandelt ein `<input type="button">`-Element in einen Popover-Steuerknopf; nimmt die ID des Popover-Elements, das kontrolliert werden soll, als Wert an. Siehe die [Popover API](/de/docs/Web/API/Popover_API)-Landeseite für weitere Details. Die Herstellung einer Beziehung zwischen einem Popover und seinem Aufrufknopf mit dem `popovertarget`-Attribut hat zwei zusätzliche, nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Aufrufer, und platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dadurch wird das Popover für Tastatur- und assistive Technologie (AT)-Benutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerverbindung zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerelementen mit [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`
  - : Gibt die Aktion an, die auf ein kontrolliertes Popover-Element von einem `<input type="button">`-Steuerelement ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Der Knopf wird ein gezeigtes Popover verbergen. Wenn versucht wird, ein bereits verstecktes Popover zu verstecken, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Knopf wird ein verstecktes Popover zeigen. Wenn versucht wird, ein bereits angezeigtes Popover zu zeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Knopf wird ein Popover zwischen dem Zeigen und dem Verbergen umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die standardmäßige Aktion, die vom Steuerknopf durchgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein booleanes Attribut, das, wenn vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten soll. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `password` unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) für mehr Informationen.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein booleanes Attribut, das, wenn vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das dazugehörige Formular eingereicht werden kann. Das `required`-Attribut wird von den Ausgabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, und `file` unterstützt.

    Siehe [Client-seitige Validierung](#validierung_auf_client-seite) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für mehr Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url`, und `text`, das `size`-Attribut spezifiziert, wie viel der Eingabe gezeigt wird. Erzeugt im Wesentlichen dasselbe Ergebnis wie das Setzen der CSS-{{cssxref("width")}}-Eigenschaft mit einigen Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`
  - : Nur gültig für den `image`-Button ist `src` eine Zeichenfolge, die die URL der Bilddatei angibt, die dargestellt werden soll, um den grafischen Submit-Button anzuzeigen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut ist eine Zahl, die die Granularität, der der Wert entsprechen muss, angibt. Nur Werte, die eine ganze Anzahl von Schritten vom Schritt-Basiswert entfernt sind, sind gültig. Der Schritt-Basis ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), wenn angegeben, [`value`](#value) andernfalls oder `0`, wenn keiner vorhanden ist (außer `week`, das einen standardmäßigen Schritt-Basis von −259,200,000 hat, was dem Beginn von Woche `1970-W01` entspricht).

    Wenn nicht explizit angegeben:
    - `step` ist standardmäßig 1 für `number` und `range`.
    - Jeder Date/Time Eingabetyp hat einen standardmäßigen `step`-Wert, der für den Typ geeignet ist; siehe die individuellen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step), und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein – ganze Zahl oder Gleitkommazahl – oder der spezielle Wert `any`, was bedeutet, dass keine Schritte impliziert sind und jeder Wert erlaubt ist (unter Ausschluss anderer Einschränkungen, wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Zahl, `10` oder größer, gültig. Wenn nicht festgelegt wird, `<input type="number">`, ist jede ganze Zahl gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, weil `step` standardmäßig `1` ist. Damit `4.2` gültig ist, hätte `step` auf `any`, 0.1, 0.2 gesetzt werden müssen oder der `min`-Wert hätte eine Zahl sein müssen, die mit `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die durch den Benutzer eingegebenen Daten nicht mit der Schritt-Konfiguration übereinstimmen, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und das `:invalid`-Pseudoklasse wird übereinstimmen.

    Siehe [Client-seitige Validierung](#validierung_auf_client-seite) für mehr Informationen.

- [`switch`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#switch) {{experimental_inline}} {{non-standard_inline}}
  - : Nur gültig für `checkbox` Eingaben, `switch` ist ein booleanes Attribut, das angibt, ob die Checkbox-Eingabe als Schalter dargestellt werden soll.

    > [!NOTE]
    > Dieses Attribut ist noch experimentell und hat begrenzte Browserunterstützung. Das Attribut wird auf nicht unterstützten Browsern ignoriert.

- `tabindex`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das anzeigt, ob das Element den Eingabefokus erhalten kann (fokussierbar ist), wenn es an der sequentiellen Keyboard-Navigation teilnehmen soll. Da alle Eingabetypen mit Ausnahme von Eingaben vom Typ hidden fokussierbar sind, sollte dieses Attribut nicht auf Formular-Steuerelementen verwendet werden, da dies erfordern würde, dass die Fokusreihenfolge für alle Elemente im Dokument verwaltet wird, mit dem Risiko, Gebrauchstauglichkeit und Barrierefreiheit zu beeinträchtigen, wenn es nicht korrekt gemacht wird.

- `title`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, das einen Text enthält, der beratende Informationen im Zusammenhang mit dem Element darstellt, zu dem es gehört. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als die primäre Erklärung für den Zweck des Formular-Steuerelements verwendet werden. Stattdessen verwenden Sie das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das Formular-Steuerelement [`id`](#id) gesetzt ist. Siehe [Labels](#labels) unten.

- `type`
  - : Ein String, der den Typ des darzustellenden Steuerelements angibt. Um beispielsweise eine Checkbox zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet, was ein Klartext-Eingabefeld erstellt.

    Erlaubte Werte werden unter [Eingabetypen](#input_types) oben aufgelistet.

- `value`
  - : Der Wert des Eingabefeldes. Wenn im HTML festgelegt, ist dies der anfängliche Wert, und kann von da an jederzeit geändert oder durch JavaScript abgerufen werden, um die entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft auf den Wert zuzugreifen. Das `value`-Attribut ist immer optional, sollte aber als obligatorisch betrachtet werden für `checkbox`, `radio`, und `hidden`.

- `width`
  - : Nur gültig für den `image`-Button ist die `width` die Breite der Bilddatei, die dargestellt werden soll, um den grafischen Submit-Button anzuzeigen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind auch in einigen Browsern verfügbar. Generell sollten Sie vermeiden, sie zu verwenden, es sei denn, es ist unvermeidlich.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, um Live-Suchergebnisse zu aktualisieren, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der anzeigt, welche Art von Aktion ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt, während er das Feld bearbeitet; dies wird verwendet, um eine geeignete Beschriftung für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Ausrichtung des Range-Schiebereglers. <strong>Nur Firefox</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl an Elementen, die in der Dropdown-Liste der vorherigen Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein booleanes Attribut, das angibt, ob nur das Auswählen von Verzeichnissen (oder Verzeichnissen, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) erlaubt sein soll.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das boolesche Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome usw.), die, wenn vorhanden, den {{Glossary("user_agent", "Benutzeragent")}} dazu auffordert, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht spezifiziert ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer ausdrücklich eine Suche initiiert (z.B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

    Das `search`-Ereignis ist so rate-limitiert, dass es nicht häufiger gesendet wird als ein implementierungsdefinierter Intervall.

- `orient` {{non-standard_inline}}
  - : Ähnlich wie die nicht standardisierte CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}} und {{htmlelement('meter')}}-Elemente betrifft, definiert das `orient`-Attribut die Ausrichtung des Range-Schiebereglers. Werte umfassen `horizontal`, was bedeutet, dass der Range horizontal gerendert wird, und `vertical`, wo der Range vertikal gerendert wird. Siehe [Erstellen von vertikalen Formularsteuerelementen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung von vertikalen Formularsteuerelementen.

- `results` {{non-standard_inline}}
  - : Das `results`-Attribut, das nur von Safari unterstützt wird, ist ein numerischer Wert, der es Ihnen erlaubt, die maximale Anzahl von Einträgen zu überschreiben, die in der nativ bereitgestellten Dropdown-Liste der vorhergehenden Suchanfragen des `<input>`-Elements angezeigt werden soll.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben wird, wird die standardmäßige maximale Anzahl an Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean `webkitdirectory`-Attribut, wenn vorhanden, gibt an, dass nur Verzeichnisse im Dateiauswahl-Interface vom Benutzer ausgewählt werden dürfen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später verwendbar. Jedoch, obwohl es eine relativ breite Unterstützung hat, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Außerdem stehen die Methoden zur Verfügung, die von den übergeordneten Schnittstellen [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) spezifiziert sind.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben und ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben, ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element ausgelöst, und (wenn das Ereignis nicht abgebrochen wird) das Problem dem Benutzer gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt (wie einem visuellen Farbwähler oder einem Kalenderdateneingabefeld) hat diese Methode keine Wirkung.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf einen bestimmten String. Ein `selectMode`-Parameter steht zur Verfügung, um zu steuern, wie der bestehende Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines Texteingabeelements aus. Macht nichts für Eingaben, die nicht als Texteingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browserwähler für das Eingabeelement an, der normalerweise beim Auswählen des Elements angezeigt wird, aber durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Da Eingaben ersetzte Elemente sind, besitzen sie einige Funktionen, die für Nicht-Formularelemente nicht zutreffen. Es gibt CSS-Selektoren, die speziell Formularelemente basierend auf ihren UI-Funktionen, auch bekannt als UI-Pseudoklassen, ansprechen können. Das Eingabeelement kann auch anhand des Typs mit Attributselektoren angesprochen werden. Einige Eigenschaften sind ebenfalls besonders nützlich.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudoklassen, die für das <code>&#x3C;input></code>-Element relevant sind:
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
        Jedes aktuell aktivierbare Element, das fokussiert oder gewählt werden kann (geklickt, eingegeben usw.) und auch einen deaktivierten Zustand hat, bei dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es ansonsten aktiviert werden könnte (ausgewählt, angeklickt, eingegeben usw.) oder den Fokus akzeptieren könnte, wenn es nicht deaktiviert wäre.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Vom Benutzer nicht bearbeitbares Element.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Vom Benutzer bearbeitbares Element.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt,
        einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elementen mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die standardmäßig in einer Gruppe verwandter Elemente sind.
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}}- und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die beim Laden oder Rendern der Seite markiert wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}}- und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die derzeit markiert sind (und dem {{HTMLElement("option")}} in einem {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren unbestimmte Eigenschaft von JavaScript auf true gesetzt ist, {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Radiobuttons mit demselben Namen in der Form nicht markiert sind, und {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die Prüfungen angewendet werden können und die aktuell gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die Prüfungen angewendet werden und die derzeit nicht gültig sind. Entspricht einem Formularelement, dessen Wert die durch seine Attribute festgelegten Anforderungen wie <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a> nicht erfüllt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribute und den <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribute festgelegten Bereichsgrenzen liegt oder die nicht den <a href="#step"><code>step</code></a>-Anforderungen entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Elemente, die das <a href="#required"><code>required</code></a>-Attribut gesetzt haben.
        Entspricht nur Elementen, die erforderlich sein können.
        Das Attribut, das bei einem Element enthalten ist, das nicht erforderlich sein kann, führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Elemente, die NICHT das <a href="#required"><code>required</code></a>-Attribut gesetzt haben.
        Entspricht keine Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlassen des Schwerpunktbereichs aktiviert. Entspricht ungültigen Eingaben, jedoch nur nach der Benutzerinteraktion, z. B. durch Fokussierung der Steuerung, das Verlassen der Steuerung oder den Versuch, das Formular mit der ungültigen Steuerung zu übermitteln.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Auswahldialog anzeigen, aus dem der Benutzer einen Wert auswählen kann (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) – jedoch nur, wenn das Element im geöffneten Zustand ist, also wenn der Auswahldialog angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können eine Checkbox-Beschriftung basierend darauf, ob die Checkbox aktiviert ist oder nicht, stylen. In diesem Beispiel gestalten wir die {{cssxref('color')}} und {{cssxref('font-weight')}} der {{HTMLElement('label')}}, die direkt nach einer gewählten Eingabe folgt. Wenn das `input` nicht aktiviert ist, haben wir keine Styles angewendet.

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

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) zu wählen. CSS-Attributselektoren entsprechen Elementen basierend entweder nur auf dem Vorhandensein eines Attributs oder dem Wert eines gegebenen Attributs.

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

Standardmäßig erscheint der Platzhaltertext in einer durchscheinenden oder hellgrauen Farbe. Das {{cssxref('::placeholder')}}-Pseudoelement ist der [`placeholder`](#placeholder)-Text der Eingabe. Es kann mit einem eingeschränkten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der eingeschränkte Satz von CSS-Eigenschaften, die für das {{cssxref("::first-line")}}-Pseudoelement gelten, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### caret-color

Eine Eigenschaft, die sich speziell auf Texteingabeelemente bezieht, ist die CSS-Eigenschaft {{cssxref("caret-color")}}, mit der Sie die Farbe festlegen können, die verwendet wird, um die Texteingabemarkierung zu zeichnen:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie erhalten standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und Formularelementen zu erlauben, sich in der Größe anzupassen, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Formulareingabefelder zu erstellen, die ihren Inhalt umschließen und mit der Eingabe von mehr Text wachsen. Dies erfolgt mit Eingabetypen, die direkte Texteingaben akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetypen [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}}-Elementen.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textlichen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es das ist, können Position und Größe des Elements innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML, siehe:

- [Farbe auf HTML-Elemente anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color).

Siehe auch:

- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Stile für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Zusätzliche Funktionen

### Labels

Labels sind notwendig, um unterstützenden Text mit einer `<input>`-Eingabe zu verknüpfen. Das {{HTMLElement("label")}}-Element liefert erklärende Informationen über ein Formularfeld, die _immer_ angemessen sind (abgesehen von jeglichen Layoutproblemen, die Sie haben). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in eine `<input>`- oder {{HTMLElement("textarea")}}-Eingabe eingegeben werden sollte.

#### Zugehörige Labels

Die semantische Paarung von `<input>`- und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Bildschirmleser. Indem sie mit dem `for`-Attribut des `<label>`-Elements kombiniert werden, verbinden Sie das Label mit der Eingabe in einer Weise, die Bildschirmlesern ermöglicht, Eingaben präziser zu beschreiben.

Es reicht nicht aus, einfachen Text neben dem `<input>`-Element zu haben. Vielmehr erfordert die Usability und Barrierefreiheit die Einbeziehung entweder impliziter oder expliziter {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht barrierefrei: keine Beziehung besteht zwischen dem Prompt und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere 'Treffer'fläche für Maus- und Touchscreen-Benutzer zum Klicken oder Berühren. Durch das Kombinieren eines `<label>` mit einem `<input>` wird durch Klicken auf eines von beiden das `<input>` fokussiert. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu "labeln", wird dies nicht passieren. Das Einbeziehen des Prompts als Teil der Aktivierungsfläche für die Eingabe ist hilfreich für Menschen mit motorischen Beeinträchtigungen.

Als Web-Entwickler ist es wichtig, niemals anzunehmen, dass Menschen alles wissen, was wir wissen. Die Vielfalt der Menschen, die das Internet nutzen – und somit auch Ihre Website – garantiert praktisch, dass einige der Besucher Ihrer Website einige Abweichungen in Denkprozessen und/oder Umständen haben werden, die dazu führen, dass sie Ihre Formulare sehr unterschiedlich von Ihnen interpretieren, ohne klare und richtig präsentierte Labels.

#### Platzhalter sind nicht zugänglich

Das Attribut [`placeholder`](#placeholder) ermöglicht es Ihnen, Text anzugeben, der im Inhaltbereich des `<input>`-Elements angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil er es nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht eine Erklärung oder ein Prompt.

Nicht nur ist der Platzhalter für Bildschirmleser nicht zugänglich, sondern er verschwindet, sobald der Benutzer Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert hat. Browser mit automatischen Seitenübersetzungsfunktionen überspringen möglicherweise Attribute während der Übersetzung, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element labeln müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Validierung auf Client-Seite

> [!WARNING]
> Die Validierung auf Client-Seite ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, _überprüfen_ Sie es immer auch auf der Server-Seite und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS zum Stylen von Eingaben basierend auf den UI-Staaten {{cssxref(":valid")}} oder {{cssxref(":invalid")}} basierend auf dem aktuellen Zustand jeder Eingabe, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser eine Validierung auf Client-Seite bei (versuchter) Formularübermittlung. Bei der Formularübermittlung, wenn es ein Formularelement gibt, das die Validierungsanforderungen nicht erfüllt, zeigt der unterstützende Browser eine Fehlermeldung beim ersten ungültigen Formularelement an; eine Standardmeldung basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Meldung.

Einige Eingabetypen und andere Attribute setzen Grenzen, welche Werte für eine bestimmte Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Es könnten mehrere Fehler auftreten, darunter ein `rangeUnderflow`-Fehler, wenn der Wert kleiner als 2 ist, `rangeOverflow` bei größerem Wert als 10, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade ganze Zahl (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Wertebereich periodisch ist (d.h. beim höchsten möglichen Wert werden die Werte zum Anfang zurückgesetzt, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max)- und [`min`](#min)-Eigenschaften umgekehrt sind, was darauf hinweist, dass der Bereich der erlaubten Werte bei `min` beginnt, an den niedrigsten möglichen Wert zurückspringt und dann weitergeht, bis `max` erreicht ist. Dies ist besonders nützlich für Datum und Uhrzeiten, z. B. wenn Sie den Bereich von 20 Uhr bis 8 Uhr erlauben möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und deren Werte können zu einem spezifischen Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Validitätsobjektfehler hängen von den <code>&lt;input&gt;</code>-Attributen und deren Werten ab:
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
        Tritt auf, wenn der Wert größer als der maximale Wert ist, der durch das <code>max</code>-Attribut definiert wird.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code>-Eigenschaft erlaubte Zahl.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der minimale Wert, der durch das <code>min</code>-Attribut definiert wird.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code>-Eigenschaft geforderte Zahl.
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
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> ist oder das Radio- oder Checkbox nicht markiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Das Standardinkrement ist <code>1</code>, sodass nur ganze Zahlen für <code>type="number"</code> gültig sind, wenn der Schritt nicht enthalten ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, z. B. wenn eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required`-Attribut hat, ist kein Wert oder ein leerer String nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, führt ein leerer String (außer bei `required`) zu keinem Fehler.

Wir können Grenzen festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer darauf hinweisen, wenn ein Fehler bei der Übermittlung des Formulars auftritt.

Zusätzlich zu den in der Tabelle oben beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen schreibgeschützten Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften gibt ein Wert von `true` an, dass der angegebene Grund, warum die Validierung fehlgeschlagen sein könnte, zutrifft, mit Ausnahme der Eigenschaft `valid`, die `true` ist, wenn der Wert des Elements alle Einschränkungen erfüllt.

Wenn ein Fehler vorliegt, werden unterstützende Browser den Benutzer sowohl darauf hinweisen als auch verhindern, dass das Formular übermittelt wird. Ein Wort der Vorsicht: Wenn eine benutzerdefinierte Fehlermeldung auf einen wahren Wert gesetzt ist (irgendein Wert außer dem leeren String oder `null`), wird die Übermittlung des Formulars verhindert. Wenn keine benutzerdefinierte Fehlermeldung vorhanden ist und keine der anderen Eigenschaften `true` zurückgibt, wird `valid` `true` sein und das Formular kann übermittelt werden.

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

Die letzte Zeile, die die benutzerdefinierte Fehlermeldung auf den leeren String setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt ist, wird es nicht übermitteln, selbst wenn alle Werte gültig sind, bis die Meldung `null` ist.

#### Beispiel für eine benutzerdefinierte Validierungsfehlermeldung

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld nicht validiert, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die für `<input>` (und verwandte) Elemente verfügbar ist. Betrachten Sie folgendes Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen werden dies dazu bringen, eine Standardfehlermeldung anzuzeigen, wenn Sie versuchen, das Formular mit entweder einem nicht gültig ausgefüllten oder einem Wert, der das `pattern` nicht entspricht, zu übermitteln.

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

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die `checkValidity()`-Methode über den `input`-Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst, und die `invalid`-Ereignishandlerfunktion wird ausgeführt. Innerhalb dieser Funktion ermitteln wir mit einem `if ()`-Block, ob der Wert ungültig ist, weil er leer ist oder weil er nicht das Muster entspricht, und setzen eine benutzerdefinierte Fehlermeldung.
- Infolgedessen, wenn der Eingabewert ungültig ist, wenn der Sende-Button gedrückt wird, wird eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er erwartungsgemäß übermittelt. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit durch den Aufruf von `setCustomValidity()` mit einem leeren String-Wert aufgehoben werden. Daher tun wir dies jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Gültigkeit vorhergesetzt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie derzeit einen gültigen Wert bei der Übermittlung enthält.

> [!NOTE]
> Validieren Sie Eingabebeschränkungen immer sowohl auf der Client- als auch auf der Server-Seite. Constraint-Validierung ersetzt nicht die Notwendigkeit der Validierung auf der _Server-Seite_. Ungültige Werte können immer noch von älteren Browsern oder bösen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte in vielen Versionen ein proprietäres Fehlerattribut — `x-moz-errormessage` — , das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise einzustellen. Dies wurde mit Version 66 entfernt (siehe [Firefox Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die zulässigen Eingaben für bestimmte `<input>`-Typen hängen von der Lokalisierung ab. In einigen Lokalen ist 1.000,00 eine gültige Zahl, während in anderen Lokalen die gültige Art, diese Zahl einzugeben, 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um das Lokale zur Validierung der Benutzereingabe zu bestimmen (zumindest für `type="number"`):

- Versuchen Sie, die Sprache zu verwenden, die durch ein `lang`/`xml:lang`-Attribut am Element oder einem seiner Elternteile angegeben ist.
- Versuchen Sie, die durch einen `Content-Language`-HTTP-Header angegebene Sprache zu verwenden. Oder,
- Wenn keine angegeben wurde, verwenden Sie die Spracheinstellung des Browsers.

## Barrierefreiheit

### Labels

Beim Einschluss von Eingaben ist es ein Erfordernis zur Barrierefreiheit, Labels hinzuzufügen. Dies ist notwendig, damit diejenigen, die unterstützende Technologien nutzen, erkennen können, wofür die Eingabe gedacht ist. Außerdem gibt das Klicken oder Berühren eines Labels dem Label zugehörigen Formularsteuerelement den Fokus. Dies verbessert sowohl die Barrierefreiheit als auch die Benutzerfreundlichkeit für sehende Benutzer, indem es den Bereich vergrößert, auf den ein Benutzer klicken oder tippen kann, um das Steuerelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radiobuttons und Checkboxen, die klein sind. Weitere Informationen zu Labels im Allgemeinen finden Sie unter [Labels](#labels).

Das Folgende ist ein Beispiel dafür, wie man das `<label>` mit einem `<input>`-Element im obigen Stil assoziiert. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert identisch mit der `id` der Eingabe ist.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingabefelder sollten eine Fläche groß genug bieten, damit es einfach ist, sie zu aktivieren. Dies hilft verschiedenen Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die nicht präzise Eingabegeräte wie einen Stift oder Finger verwenden. Eine minimale Interaktionsgröße von 44×44 [CSS-Pixel](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Understand Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, gelistet, übermittelbar, zurücksetzbar, formularbezogenes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasierter Inhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht <code>hidden</code> ist, dann labelbares Element, tastbarer Inhalt.
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
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>:
            <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
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
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=image</code>: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=number</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li><code>type=radio</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a></li>
          <li><code>type=range</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role"><code>slider</code></a></li>
          <li>
            <code>type=reset</code>: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
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
            <code>type=submit</code>: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
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
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a </code>
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a> wenn verwendet
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
- [Die nativen Formularwidgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formularbeschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
