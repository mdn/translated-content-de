---
title: "<input>: Das HTML-Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: c534ba0cb925657de5e99ab8c540eae31afd9382
---

Das **`<input>`**-Element ([HTML](/de/docs/Web/HTML)) wird verwendet, um interaktive Steuerungen für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren. Je nach Gerät und {{Glossary("user_agent", "User Agent")}} stehen eine Vielzahl von Eingabedatentypen und Steuerungs-Widgets zur Verfügung. Das `<input>`-Element gehört zu den leistungsstärksten und komplexesten in HTML, da es eine Vielzahl an Kombinationen von Eingabetypen und Attributen gibt.

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

Wie ein `<input>` funktioniert, hängt stark vom Wert des [`type`](#type)-Attributs ab. Daher werden die verschiedenen Typen auf separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben wird, ist der Standardtyp `text`.

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
        Eine Drucktaste ohne Standardverhalten, die den Wert des <a href="#value"><code>value</code></a>-Attributs anzeigt, standardmäßig leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Kontrollkästchen, das einzelne Werte auswählen/deselektieren lässt.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerelement zur Farbauswahl; öffnet einen Farbwähler in unterstützenden Browsern.
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
        Ein Steuerelement zur Eingabe eines Datums (Jahr, Monat, Tag, ohne Zeit).
        Öffnet einen Datumswähler oder numerische Räder für Jahr, Monat, Tag in unterstützenden Browsern.
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
        Ein Steuerelement zur Eingabe von Datum und Zeit, ohne Zeitzone. Öffnet einen Datumswähler oder numerische Räder für Datums- und Zeitkomponenten in unterstützenden Browsern.
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
        <code>text</code>-Input, hat jedoch Validierungsparameter und relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerelement, das den Benutzer eine Datei auswählen lässt.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Arten von Dateien zu definieren, die das Steuerelement auswählen kann.
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
        Server gesendet wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist versteckt!
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
        Eine grafische <code>submit</code>-Schaltfläche. Zeigt ein durch das <code>src</code>-Attribut definiertes Bild an.
        Das <a href="#alt"><code>alt</code></a>-Attribut wird angezeigt, wenn das Bild-<a href="#src"><code>src</code></a> fehlt.
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
        Ein Steuerelement zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt standardmäßige
        Validierung hinzu. Zeigt bei einigen Geräten mit dynamischen Tastaturen eine numerische Tastatur an.
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
        Ein Optionsfeld, das es ermöglicht, aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert einen Einzelwert auszuwählen.
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
        Wird als Bereichs-Widget angezeigt, das standardmäßig auf den Mittelwert eingestellt ist.
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
        Ein Button, der den Inhalt des Formulars auf Standardwerte zurücksetzt. Nicht empfohlen.
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
        automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern ein Löschsymbol enthalten, das zum Leeren des Feldes verwendet werden kann. Zeigt bei einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
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
        Ein Steuerelement zur Eingabe einer Telefonnummer. Zeigt bei einigen Geräten mit dynamischen Tastaturen eine Telefontastatur an.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Input, hat aber Validierungsparameter und relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerelement zur Eingabe eines Datums, das aus einer Wochenjahreszahl und einer Wochennummer ohne Zeitzone besteht.
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

Das `<input>`-Element ist aufgrund seiner Attribute so leistungsfähig; das [`type`](#type)-Attribut, das oben mit Beispielen beschrieben wird, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) basiert, teilen sie technisch gesehen denselben Satz von Attributen. In der Praxis haben die meisten Attribute jedoch nur Auswirkungen auf einen bestimmten Eingabemetyp. Darüber hinaus variieren die Auswirkungen einiger Attribute abhängig vom Eingabetyp und beeinflussen verschiedene Eingabetypen auf unterschiedliche Weise.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Im Anschluss an diese Tabelle folgen detaillierte Beschreibungen der einzelnen Attribute sowie der Eingabetypen, mit denen sie verbunden sind. Attribute, die für die meisten oder alle Eingabetypen üblich sind, werden weiter unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind — oder Attribute, die für alle Eingabetypen üblich sind, aber spezielle Verhaltensweisen haben, wenn sie für einen bestimmten Eingabetyp verwendet werden — werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute des `<input>`-Elements umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                                  |
| --------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis für erwarteten Dateityp in Dateiupload-Steuerelementen                                                |
| [`alpha`](#alpha)                             | `color`                                                                      | Deckkraft der Farbe                                                                                           |
| [`alt`](#alt)                                 | `image`                                                                      | alt-Attribut für den Bildtyp. Erforderlich für Zugänglichkeit                                                 |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Steuert automatische Großschreibung im eingegebenen Text.                                                     |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis für die Formular-Autovervollständigungsfunktion                                                       |
| [`capture`](#capture)                         | `file`                                                                       | Medienerfassungseingabemethode in Dateiupload-Steuerelementen                                                 |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Ob der Befehl oder die Steuerung markiert ist                                                                 |
| [`colorspace`](#colorspace)                   | `color`                                                                      | Der {{Glossary("Color_space", "Farbraum")}}, der für die Auswahl des Farbwerts verwendet werden soll          |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfelds für das Senden der Richtung des Elements bei der Formularübermittlung                  |
| [`disabled`](#disabled)                       | alle                                                                         | Ob das Formularsteuerelement deaktiviert ist                                                                  |
| [`form`](#form)                               | alle                                                                         | Verknüpft die Steuerung mit einem Formularelement                                                             |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | URL für die Formularübermittlung                                                                              |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Kodierungstyp des Formulardatensatzes für die Formularübermittlung                                            |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | HTTP-Methode für die Formularübermittlung                                                                     |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Umgehung der Formularvalidierung bei der Formularübermittlung                                                 |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für die Formularübermittlung                                                                 |
| [`height`](#height)                           | `image`                                                                      | Entspricht dem height-Attribut für {{htmlelement('img')}}; vertikale Dimension                                |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsoptionen                      |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Maximalwert                                                                                                   |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) von `value`                                                               |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Minimalwert                                                                                                   |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Minimale Länge (Anzahl der Zeichen) von `value`                                                               |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolean. Ob Mehrfachwerte erlaubt sind                                                                        |
| [`name`](#name)                               | alle                                                                         | Name des Formularsteuerelements. Wird zusammen mit dem Formular als Teil eines Namens-/Wertepaars übermittelt |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Muster, dem der `value` entsprechen muss, um gültig zu sein                                                   |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der im Formularsteuerelement erscheint, wenn kein Wert gesetzt ist                                      |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Bezeichnet ein `<input type="button">` als Steuerelement für ein Popover-Element                              |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                              |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht bearbeitbar                                                                       |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss markiert sein, damit das Formular übermittelt werden kann        |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe der Steuerung                                                                                           |
| [`src`](#src)                                 | `image`                                                                      | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                           |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Inkrementelle gültige Werte                                                                                   |
| [`switch`](#switch)                           | `checkbox`                                                                   | Ob das Kontrollkästchen-Input als Schalter gerendert werden soll                                              |
| [`type`](#type)                               | alle                                                                         | Art des Formularsteuerelements                                                                                |
| [`value`](#value)                             | alle außer `image`                                                           | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht dies dem Anfangswert                               |
| [`width`](#width)                             | `image`                                                                      | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                                    |

Einige zusätzliche nicht standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Gültig nur für den `file`-Eingabetyp, definiert das `accept`-Attribut, welche Dateitypen in einem `file`-Upload-Steuerelement ausgewählt werden können. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alpha` {{experimental_inline}}
  - : Gültig nur für den `color`-Eingabetyp, bietet das `alpha`-Attribut dem Endbenutzer die Möglichkeit, die Deckkraft der ausgewählten Farbe festzulegen.

- `alt`
  - : Gültig nur für den `image`-Button, bietet das `alt`-Attribut alternativen Text für das Bild, der den Wert des Attributs anzeigt, falls das Bild-`src`(#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und in welcher Weise. Siehe die globale Attributseite [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolean-Attribut!) Das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette an, die beschreibt, welche Art von Autovervollständigungsfunktionalität das Eingabefeld bieten soll, falls vorhanden. Eine typische Implementierung von Autovervollständigung erinnert sich an vorher eingegebene Werte im selben Eingabefeld, aber komplexere Formen von Autovervollständigung können existieren. Beispielsweise könnte ein Browser mit der Kontaktliste eines Geräts integrieren, um `email`-Adressen in einem E-Mail-Eingabefeld zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für erlaubte Werte.

    Das Attribut `autocomplete` ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist gültig für alle Eingabetypen außer `checkbox`, `radio`, `file` oder jegliche der Schaltflächen-Typen.

    Siehe das [`autocomplete` attribute](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` bei `hidden` geringfügig anders ist als bei anderen Eingabetypen.

- `autofocus`
  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass die Eingabe automatisch den Fokus erhalten soll, sobald die Seite das Laden abgeschlossen hat (oder wenn das {{HTMLElement("dialog")}}-Element angezeigt wurde, das das Element enthält).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element gesetzt ist, erhält das erste Element mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Inputs des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussierbar sind.

    > [!WARNING]
    > Das automatische Fokussieren eines Formularsteuerelements kann sehbehinderte Menschen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, "teleportieren" Bildschirmleser ihre Benutzer zum Formularsteuerelement, ohne sie vorher zu warnen.

    Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie das `autofocus`-Attribut anwenden. Das automatische Fokussieren auf eine Steuerung kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label des Formularsteuerelements ankündigen wird, das den Fokus erhält, wird der Bildschirmleser nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext verpassen, der durch den vorausgehenden Inhalt geschaffen wird.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML-Medienerfassungsspezifikation und gültig nur für den `file`-Eingabetyp, definiert das `capture`-Attribut, welches Medium — Mikrofon, Video oder Kamera — verwendet werden soll, um eine neue Datei zur Hochladung mit der `file`-Upload-Steuerung in unterstützenden Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`
  - : Gültig für beide `radio`- und `checkbox`-Typen, ist `checked` ein Boolean-Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass das Optionsfeld das derzeit ausgewählte in der Gruppe gleichnamiger Optionsfelder ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig markiert (wenn die Seite geladen wird) ist. Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit markiert ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabekontrollen werden die Werte eines Kontrollkästchens und Optionsfelds nur in den übermittelten Daten enthalten, wenn sie derzeit `checked` sind. Wenn sie es sind, werden der Name und die Werte der markierten Steuerelemente übermittelt.
    >
    > Wenn zum Beispiel ein Kontrollkästchen mit einem `name` des Werts `fruit` und einem `value` des Werts `cherry` markiert ist, wird `fruit=cherry` als Formulardaten übermittelt. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgelistet. Der Standardwert `value` für Kontrollkästchen und Optionsfelder ist `on`.

- `colorspace` {{experimental_inline}}
  - : Gültig nur für den `color`-Eingabetyp, das `colorspace`-Attribut gibt den {{Glossary("Color_space", "Farbraum")}} an, der vom `type="color"`-Input verwendet wird. Mögliche {{Glossary("enumerated", "aufgezählte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies umfasst {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}}, und {{cssxref("hex-color")}} Werte. Der Farbwert ist auf 8-Bit pro `r`-, `g`- und `b`-Komponente begrenzt. Dies ist der Standardwert.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3-Farbraum")}}, z.B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen, ermöglicht das Attribut `dirname` die Übermittlung der Richtung des Elements. Wenn es enthalten ist, wird das Formularsteuerelement mit zwei Namens-/Wertepaaren übermittelt: das erste ist der [`name`](#name) und [`value`](#value) und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie durch den Browser festgelegt.

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

    Wenn das obige Formular übermittelt wird, verursachen die Eingabeelemente sowohl das Namens-/Wertepaar von `fruit=cherry` als auch das `dirname`-/Richtungs-Paar von `fruit-dir=ltr`.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer nicht mit der Eingabe interagieren kann. Deaktivierte Eingaben werden typischerweise mit einer gedimmten Farbe oder einer anderen Form der Indikation gerendert, die anzeigt, dass das Feld nicht zur Verwendung verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event) Ereignis und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht durch die Spezifikation gefordert, wird Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` über Seitenladevorgänge hinweg [beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Eine Zeichenkette, die das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (also, der **Formulareigentümer**). Der Wert dieser Zeichenkette, falls vorhanden, muss mit dem [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächsten enthaltenen Formular verknüpft, wenn vorhanden.

    Das Attribut `form` lässt Sie eine Eingabe irgendwo im Dokument platzieren, sodass sie jedoch in einem Formular an anderer Stelle im Dokument einbezogen wird.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formenctype`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formmethod`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formnovalidate`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formtarget`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `height`
  - : Gültig nur für den `image`-Eingabetyp, gibt `height` die Höhe der Bilddatei an, um die grafische Schaltfläche zu repräsentieren. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gilt, einschließlich aller Eingabetypen, das eine eindeutige Kennung (ID) definiert, die im gesamten Dokument einzigartig sein muss. Sein Zweck besteht darin, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des `for`-Attributs von {{htmlelement('label')}} verwendet, um das Label mit dem Formularsteuerelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, bietet einen Hinweis an Browser darüber, welche Art von Konfiguration der virtuellen Tastatur verwendet werden soll, wenn dieses Element oder seine Inhalte bearbeitet werden. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der Wert, der dem `list`-Attribut zugewiesen wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. Das `<datalist>` bietet eine Liste mit vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Wert in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut den Spezifikationen wird das `list`-Attribut nicht von den `hidden`, `password`, `checkbox`, `radio`, `file` oder einer der Schaltflächen-Typen unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen, Strichmarkierungen entlang eines Bereichs oder sogar eine Eingabe, die wie ein {{HTMLElement("select")}}-Element geöffnet wird, aber nicht gelistete Werte zulässt, sehen. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range` definiert es den größten Wert im Bereich der erlaubten Werte. Überschreitet der eingegebene [`value`](#value) diesen Wert, schlägt das Element [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Höchstwert.

    Es gibt einen besonderen Fall: Wenn der Datentyp periodisch ist (z.B. bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich umschließt. Zum Beispiel erlaubt dies, einen Zeitbereich von 22:00 Uhr bis 04:00 Uhr anzugeben.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer als oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes größer ist als `maxlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} lang. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als das `maxlength`-Attribut erlaubt. Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Siehe [Client-seitige Validierung](#validierung_auf_client-seite) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range` definiert es den kleinsten Wert im Bereich der erlaubten Werte. Überschreitet der eingegebene [`value`](#value) diesen Wert, schlägt das Element [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert kleiner ist als das Minimum, das durch das `min`-Attribut erlaubt ist, wird die Einschränkungsvalidierung die Übermittlung des Formulars verhindern. Siehe [Client-seitige Validierung](#validierung_auf_client-seite) für weitere Informationen.

    Es gibt einen besonderen Fall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich umschließt. Zum Beispiel erlaubt dies, einen Zeitbereich von 22:00 Uhr bis 04:00 Uhr anzugeben.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert kleiner als oder gleich dem durch `maxlength` angegebenen Wert sein. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} lang ist, was die Übermittlung des Formulars verhindert. Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Siehe [Client-seitige Validierung](#validierung_auf_client-seite) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das Boolean `multiple`-Attribut, falls gesetzt, bedeutet, dass der Benutzer in das E-Mail-Widget kommagetrennte E-Mail-Adressen eingeben oder im `file`-Input mehr als eine Datei auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`
  - : Eine Zeichenkette, die einen Namen für das Eingabesteuerelement angibt. Dieser Name wird zusammen mit dem Wert der Steuerung übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als erforderliches Attribut (auch wenn es das nicht ist). Wenn eine Eingabe keinen angegebenen `name` hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerungen, nicht markierte Optionsfelder, nicht markierte Kontrollkästchen und Reset-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei besondere Fälle:
    1. `_charset_` : Wenn es als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabeagentur automatisch auf die Zeichenkodierung gesetzt, die verwendet wird, um das Formular zu übermitteln.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erzeugt ein einzigartiges Verhalten für Optionsfelder.

    In einer Gruppe von gleichnamigen Optionsfeldern kann nur ein Optionsfeld gleichzeitig markiert sein. Wenn ein Optionsfeld in dieser Gruppe ausgewählt wird, wird automatisch ein derzeit ausgewähltes Optionsfeld in derselben Gruppe deselektiert. Der Wert dieses einen ausgewählten Optionsfelds wird zusammen mit dem Namen übermittelt, wenn das Formular übermittelt wird,

    Wenn Sie in eine Serie von gleichnamigen Optionsfeldern tabben, erhält, falls ein Optionfeld markiert ist, dieses den Fokus. Wenn sie in der Quellordnung nicht gruppiert sind und eines der Gruppe markiert ist, beginnt das Tabben in die Gruppe, wenn das erste in der Gruppe angetroffen wird, wodurch alle übersprungen werden, die nicht markiert sind. Mit anderen Worten, wenn eine markiert ist, wird das Tabben die nicht markierten Optionsfelder in der Gruppe überspringen. Wenn keine markiert sind, erhält die Optionsfeldgruppe den Fokus, wenn das erste Optionsfeld in der gleichnamigen Gruppe erreicht wird.

    Sobald eines der Optionsfelder in einer Gruppe den Fokus hat, ermöglicht die Navigation mit den Pfeiltasten durch alle Optionsfelder desselben Namens, selbst wenn die Optionsfelder in der Quellordnung nicht gruppiert sind.

    Wenn ein Eingabeelement einen `name` erhält, wird dieser Name zu einer Eigenschaft der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) Eigenschaft des Besitzforms. Wenn Sie eine Eingabe haben, deren `name` auf `guest` gesetzt ist, und eine andere, deren `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein, und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelemente einen `name` zu geben, der einer eingebauten Eigenschaft des Formulars entspricht, da Sie dann die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password` wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompilieren, dem der [`value`](#value) des Inputs entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er durch den {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Vorwärtsschrägstriche sollten nicht um den Mustertext angegeben werden. Beim Kompilieren des regulären Ausdrucks:
    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, sodass das Ergebnis gegen den _gesamten_ Eingabewert übereinstimmen muss, d.h. `^(?:<pattern>)$`.
    2. ist das `'v'`-Flag gesetzt, sodass das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert. Wenn das Musterattribut gültig ist und ein nicht leerer Wert nicht mit dem Muster übereinstimmt, wird die Einschränkungsvalidierung die Übermittlung des Formulars verhindern. Ist [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden, wird der kompilierte reguläre Ausdruck gegen jeden kommagetrennten Wert verglichen.

    > [!NOTE]
    > Falls Sie das `pattern`-Attribut verwenden, klären Sie den Benutzer über das erwartete Format auf, indem Sie erläuternden Text in der Nähe platzieren. Sie können auch ein [`title`](#title)-Attribut einfügen, um zu erklären, was die Anforderungen sind, um dem Muster zu entsprechen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#validierung_auf_client-seite) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis auf den Benutzer, welche Art von Informationen im Feld erwartet wird. Dies sollte ein Wort oder kurzer Satz sein, der einen Hinweis auf die erwartete Art der Daten gibt, anstatt eine Erklärung oder Aufforderung. Der Text _darf nicht_ Wagenrückläufe oder Zeilenumbrüche enthalten. Wenn beispielsweise erwartet wird, dass ein Feld den Vornamen des Benutzers erfasst, und sein Label "Vorname" lautet, könnte ein geeignetes Platzhalter sein "z.B., Mustafa".

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten zur Erklärung Ihres Formulars und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`
  - : Wandelt ein `<input type="button">`-Element in einen Popover-Steuerungs-Button um; nimmt die ID des zu steuernden Popover-Elements als Wert an. Siehe die [Popover API](/de/docs/Web/API/Popover_API)-Startseite für weitere Details. Die Einrichtung einer Beziehung zwischen einem Popover und seinem Auslöser-Button mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und positioniert das Popover in einer logischen Position in der Tastaturnavigation, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und Hilfstechnologie-Benutzer (AT) zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt einen impliziten Ankerverweis zwischen den beiden, wodurch es sehr praktisch wird, Popover relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

- `popovertargetaction`
  - : Gibt die Aktion an, die auf ein Popover-Element ausgeführt werden soll, das von einer Steuerung `<input type="button">` gesteuert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verstecken. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button wird ein verstecktes Popover zeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen anzuzeigendem und verstecktem Zustand umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die durch den Steuerungs-Button ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer den Wert der Eingabe nicht bearbeiten kann. Das `readonly`-Attribut ist unterstützt durch die `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` Eingabetypen.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) für weitere Informationen.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das besitzende Formular übermittelt werden kann. Das `required`-Attribut ist unterstützt durch `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` Eingaben.

    Siehe [Client-seitige Validierung](#validierung_auf_client-seite) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für weitere Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text` spezifiziert das `size`-Attribut, wie viel von der Eingabe angezeigt wird. Grundsätzlich erzeugt dies dasselbe Ergebnis wie das Einstellen der CSS-{{cssxref("width")}}-Eigenschaft mit einigen Besonderheiten. Die tatsächliche Einheit des Werts hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20` und für andere sind es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`
  - : Gültig nur für den `image` Eingabebutton, ist `src` eine Zeichenkette, die die URL der Bilddatei angibt, um die grafische Absende-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, ist das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut eine Zahl, die die Feinheit angibt, an die sich der Wert halten muss. Nur Werte, die eine ganze Anzahl von Schritten vom Schritt-Basispunkt entfernt sind, sind gültig. Der Schritt-Basispunkt ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min) falls angegeben, [`value`](#value) andernfalls oder `0`, falls keiner vorhanden ist (außer bei `week`, bei dem der Standard-Schritt-Basispunkt −259.200.000 beträgt, was den Anfang der Woche `1970-W01` darstellt).

    Wenn es nicht ausdrücklich einbezogen wird:
    - Der `step` standardmäßig ist `1` für `number` und `range`.
    - Jeder Datum-/Zeiteingabetyp hat einen eigenen Standard-`step`-Wert, der für den Typ geeignet ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein — Ganzzahl oder Fließkomma — oder der spezielle Wert `any`, was bedeutet, dass kein Schritt gemacht wird, und jeder Wert ist erlaubt (unter Berücksichtigung anderer Einschränkungen, wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Wenn Sie zum Beispiel `<input type="number" min="10" step="2">` haben, dann ist jede gerade Ganzzahl `10` oder größer gültig. Wenn weggelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig `1` ist. Für `4.2`, um gültig zu sein, hätte `step` auf `any` gesetzt werden müssen, 0.1, 0.2, oder der `min`-Wert hätte eine Zahl sein müssen, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die von Benutzer eingegebenen Daten nicht mit der Schritt-Konfiguration übereinstimmen, wird der Wert bei der Einschränkungsvalidierung als ungültig angesehen und entspricht der `:invalid`-Pseudo-Klasse.

    Siehe [Client-seitige Validierung](#validierung_auf_client-seite) für weitere Informationen.

- [`switch`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#switch) {{experimental_inline}}
  - : Gültig nur für `checkbox`-Eingaben, `switch` ist ein Boolean-Attribut, das angibt, ob die Kontrollkästchen-Eingabe als Schalter gerendert werden soll.

    > [!NOTE]
    > Dieses Attribut ist noch experimentell und hat begrenzte Browser-Unterstützung. Das Attribut wird auf nicht unterstützten Browsern ignoriert.

- `tabindex`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliger Wert, der angibt, ob das Element Eingabefokus annehmen kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen sollte. Da alle Eingabetypen außer den Eingaben des Typs hidden fokussierbar sind, sollte dieses Attribut nicht auf Formularsteuerelementen verwendet werden, da dadurch die Fokusreihenfolge für alle Elemente im Dokument verwaltet werden müsste, mit dem Risiko, die Benutzerfreundlichkeit und Barrierefreiheit bei falscher Umsetzung zu beeinträchtigen.

- `title`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text enthält, der beratende Informationen zu dem Element bietet, zu dem es gehört. Solche Informationen können typischerweise, aber nicht unbedingt, als Tooltip dem Benutzer präsentiert werden. Der Titel sollte nicht als primäre Erklärung des Zwecks der Formularkontrolle verwendet werden. Stattdessen sollte das {{htmlelement('label')}}-Element mit einem `for`-Attribut verwendet werden, das auf das [`id`](#id)-Attribut der Formularkontrolle gesetzt ist. Siehe [Labels](#labels) unten.

- `type`
  - : Eine Zeichenkette, die den Typ der Steuerung angibt, die gerendert werden soll. Zum Beispiel wird ein Wert von `checkbox` verwendet, um eine Checkbox zu erstellen. Wenn weggelassen (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet, wodurch ein Textfeld erstellt wird.

    Zulässige Werte sind oben in [Eingabetypen](#input_types) aufgelistet.

- `value`
  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Anfangswert, und von da an kann er jederzeit mithilfe von JavaScript geändert oder abgerufen werden, indem auf die `value`-Eigenschaft des jeweiligen [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts zugegriffen wird. Das `value`-Attribut ist immer optional, sollte jedoch als zwingend für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`
  - : Gültig nur für den `image` Eingabebutton, ist `width` die Breite der Bilddatei, um die grafische Absende-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind ebenfalls in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie vermeiden, sie zu verwenden, es sei denn, es ist unvermeidlich.

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
        Ob oder nicht, um wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse zu senden, um das Aktualisieren von Live-Suchergebnissen zu ermöglichen, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenkette, die die Art von Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt, während er das Feld bearbeitet; dies wird verwendet, um eine geeignete Beschriftung für diese Taste auf einem
        virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Ausrichtung des Bereichs-Schiebers fest. <strong>Nur Firefox.</strong>.
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
        Ein Boolean, der angibt, ob nur dem Benutzer erlaubt sein soll, ein Verzeichnis (oder Verzeichnisse, falls <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) auszuwählen
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher von Safari, Opera, Chrome usw. unterstützt), das, falls vorhanden, dem {{Glossary("user_agent", "User Agent")}} sagt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Falls `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer eine Suche explizit initiiert (wie durch das Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste beim Bearbeiten des Feldes).

    Das `search`-Ereignis ist so rate-begrenzet, dass es nicht häufiger als in einem implementierungsdefinierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}
  - : Ähnlich dem nicht standardisierten CSS- `-moz-orient`-Eigenschaft, die die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente beeinträchtigt, definiert das `orient`-Attribut die Ausrichtung des Bereichs-Sliders. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, bei dem der Bereich vertikal gerendert wird. Siehe [Erstellung vertikaler Formularsteuerelemente](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularsteuerelemente.

- `results` {{non-standard_inline}}
  - : Das `results`-Attribut — nur von Safari unterstützt — ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen in der vom `<input>` Element nativ bereitgestellten Dropdown-Liste vorheriger Suchanfragen zu überschreiben.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Falls nicht bereitgestellt oder ein ungültiger Wert angegeben wird, verwendet der Browser die Standard-Maximalanzahl von Einträgen.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean `webkitdirectory`-Attribut, falls vorhanden, gibt an, dass nur Verzeichnisse vom Benutzer in der Dateiauswahl-Oberfläche ausgewählt werden sollen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und neuer verwendbar. Obwohl es relativ breit unterstützt wird, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM repräsentiert. Ebenfalls verfügbar sind Methoden, die von den Elternschnittstellen, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) spezifiziert werden.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfung besteht; andernfalls wird `false` zurückgegeben und ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis am Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfung besteht; andernfalls wird `false` zurückgegeben, ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis wird am Element ausgelöst und (falls das Ereignis nicht abgebrochen wird) wird das Problem dem Benutzer gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder ein Kalenderdatumseingabefeld) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingangselements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des spezifizierten Bereichs von Zeichen im Eingabefeld auf eine gegebene Zeichenfolge. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den spezifizierten Bereich von Zeichen innerhalb eines Texteingabeelements aus. Funktioniert nicht für Eingaben, die nicht als Texteintragsfelder präsentiert werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-picker für das Eingabefeld an, der normalerweise angezeigt würde, wenn das Element ausgewählt wird, aber durch Drücken eines Knopfes oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins (standardmäßig) oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, die ersetzbare Elemente sind, haben einige Eigenschaften, die nicht auf nicht-Formularelemente zutreffen. Es gibt CSS-Selektoren, die speziell auf Formularelemente basierend auf ihren UI-Funktionen abzielen können, auch bekannt als UI-Pseudoklassen. Das Eingabeelement kann auch nach Typ mit Attributselektoren angesprochen werden. Es gibt einige Eigenschaften, die ebenfalls besonders nützlich sind.

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
        Jedes momentan aktivierte Element, das aktiviert (ausgewählt, angeklickt, beschriftet etc.) oder fokussiert werden kann und auch einen deaktivierten Status hat, in dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes momentan deaktivierte Element, das einen aktivierten Status hat, was bedeutet, dass es anderweitig aktiviert (ausgewählt, angeklickt, beschriftet etc.) oder fokussiert werden könnte, wenn es nicht deaktiviert wäre.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element nicht vom Benutzer bearbeitbar</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das momentan <a href="#placeholder"><code>Platzhalter</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente mit dem <a href="#placeholder"><code>placeholder</code></a> Attribut, das bisher noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formular-Elemente, die Standard in einer Gruppe verwandter Elemente sind. Entspricht den {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Eingabetypen, die beim Laden oder Rendern der Seite aktiviert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht den {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Eingabetypen, die momentan aktiviert sind (und der {{HTMLElement("option")}} in einem {{HTMLElement("select")}}, das momentan ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente, deren indeterminate Eigenschaft durch JavaScript auf true gesetzt wurde, {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle Radioschaltflächen mit dem gleichen Namen im Formular nicht aktiviert sind, und {{HTMLElement("progress")}} Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>Formularsteuerelemente, auf die eine Gültigkeitsprüfung angewendet werden kann und die momentan gültig sind.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularsteuerelemente, auf die eine Gültigkeitsprüfung angewendet wurde und die derzeit nicht gültig sind. Entspricht einem Formularsteuerelement, dessen Wert nicht den durch seine Attribute festgelegten Einschränkungen entspricht, wie <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute und den <a href="#step"><code>step</code></a> festgelegten Bereichsbeschränkungen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute festgelegten Bereichslimits liegt oder nicht den <a href="#step"><code>step</code></a> Beschränkungen entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut gesetzt hat.
        Entspricht nur Elementen, die erforderlich sein können.
        Das Attribut an einem nicht-erforderlichen Element aufzunehmen, führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das KEIN <a href="#required"><code>required</code></a> Attribut gesetzt hat.
        Entspricht nicht Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird aber beim Verlassen aktiv. Entspricht ungültigen Eingaben, jedoch erst nach Benutzerinteraktion, wie durch Fokussieren auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular mit dem ungültigen Steuerelement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code> Elemente, die einen Picker anzeigen, aus dem der Benutzer einen Wert auswählen kann (etwa <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — aber nur, wenn das Element im geöffneten Zustand ist, das heißt, wenn der Picker angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können ein Kontrollkästchen-Etikett basierend darauf gestalten, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel gestalten wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das direkt nach einer aktivierten Eingabe kommt. Wir haben keine Stile angewandt, wenn die `input` nicht aktiviert ist.

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

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren vergleichen Elemente basierend entweder nur auf dem Vorhandensein eines Attributs oder dem Wert eines bestimmten Attributs.

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

Standardmäßig erscheint der Platzhalter-Text in durchsichtigem oder hellem Grau. Das {{cssxref('::placeholder')}} Pseudo-Element ist der [`placeholder` Text](#placeholder) des Eingabefeldes. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestaltet werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teilbereich der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudo-Element angewendet werden können, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor hat.

### caret-color

Eine Eigenschaft, die speziell für texteingabebezogene Elemente gilt, ist die CSS {{cssxref("caret-color")}} Eigenschaft, die es ermöglicht, die Farbe festzulegen, mit der die Texteingabefarbe gezeichnet wird:

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

Die {{cssxref("field-sizing")}} Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formularen zu steuern (d.h. sie erhalten standardmäßig eine bevorzugte Größe.) Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und Formularsteuerelemente in ihrer Größe anzupassen, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Eingabefelder zu erstellen, die ihren Inhalt anpassen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingaben akzeptieren (zum Beispiel, [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}}-Elementen.

### object-position und object-fit

In bestimmten Fällen (typischerweise in nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>` Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es so ist, können die Position und Größe des Elements und ihre Position innerhalb des Rahmens mithilfe der CSS {{cssxref("object-position")}} und {{cssxref("object-fit")}} Eigenschaften angepasst werden.

### Styling

Für weitere Informationen über das Hinzufügen von Farbe zu Elementen in HTML siehe:

- [Applying color to HTML elements using CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color).

Siehe auch:

- [Styling HTML forms](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Advanced styling for HTML forms](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) and

## Zusätzliche Funktionen

### Labels

Labels sind erforderlich, um erläuternden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element liefert erklärende Informationen über ein Eingabefeld, das _immer_ angemessen ist (von etwaigen Layout-Bedenken abgesehen). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugehörige Labels

Die semantische Paarung von `<input>` und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Screenreader. Indem sie mit dem [for-Attribut](/de/docs/Web/HTML/Reference/Elements/label#for) des `<label>`-Tags verbunden werden, binden Sie den Arm an das `input`, sodass Screenreader den Benutzern die Inputs genauer beschreiben können.

Es reicht nicht aus, einfachen Text neben dem `<input>`-Element zu haben. Vielmehr erfordert die Benutzbarkeit und Barrierefreiheit die Einbeziehung entweder impliziter oder expliziter {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht zugänglich: Es gibt keine Beziehung zwischen der Eingabeaufforderung und dem `<input>` Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label einen größeren 'Hit'-Bereich für Maus- und Touchscreen-Benutzer, um zu klicken oder zu berühren. Durch die Paarung eines `<label>` mit einem `<input>` wird durch Klicken auf eines von beiden das `<input>` fokussiert. Wenn Sie einfachen Text verwenden, um Ihr Eingabefeld zu "beschriften", wird dies nicht passieren. Wenn die Eingabeaufforderung Teil des Aktivierungsbereichs für die Eingabe ist, ist dies hilfreich für Personen mit motorischen Steuerungsstörungen.

Für Webentwickler ist es wichtig, nie davon auszugehen, dass die Leute all das wissen, was wir wissen. Diese Vielfalt an Personen, die das Internet nutzen, und damit Ihre Website, garantiert praktisch, dass einige Besucher Ihrer Website aufgrund ihrer einzigartigen Interpretationen von Gedankenprozessen und/oder Umständen Ihre Formulare unterschiedlich von Ihnen wahrnehmen, wenn Sie keine klaren und korrekt präsentierten Labels bereitstellen.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder) Attribut ermöglicht es Ihnen, Text anzugeben, der innerhalb des `<input>`-Inhaltsbereichs selbst angezeigt wird, wenn dieser leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz dafür verwendet werden, weil es dies nicht erfüllt. Der Platzhalter dient dazu, einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen soll, nicht eine Erklärung oder Aufforderung.

Der Platzhalter ist nicht nur für Screenreader unzugänglich, sondern verschwindet auch, sobald der Benutzer Text in das Formularsteuerelement eingibt oder wenn das Formularsteuerelement bereits einen Wert hat. Browser mit automatisierten Seitenübersetzungsfunktionen können Attribute bei der Übersetzung überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder) Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>` Element kennzeichnen müssen, verwenden Sie das {{HTMLElement("label")}} Element.

### Validierung auf Client-Seite

> [!WARNING]
> Die clientseitige Validierung ist nützlich, garantiert jedoch nicht, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, überprüfen Sie sie _immer_ auch serverseitig und geben Sie eine [`400` HTTP Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS zum Stil der Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Zustand jeder Eingabe, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben beschrieben, bietet der Browser auch eine clientseitige Validierung beim (versuchten) Absenden des Formulars an. Beim Absenden des Formulars, wenn es ein Formularsteuerelement gibt, das die Einschränkungsprüfung nicht besteht, zeigen unterstützende Browser eine Fehlermeldung auf dem ersten ungültigen Formularsteuerelement an; entweder eine Standardmeldung basierend auf dem Fehlertyp anzeigend oder eine von Ihnen festgelegte Meldung.

Einige Eingabetypen und andere Attribute schränken ein, welche Werte für eine bestimmte Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler könnten auftreten, darunter ein `rangeUnderflow`-Fehler, wenn der Wert kleiner als 2 ist; `rangeOverflow`, wenn er größer als 10 ist; `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade ganze Zahl (nicht den Anforderungen des `step` Attributs entsprechend); oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich von möglichen Werten periodisch ist (d.h. am höchsten möglichen Wert Fähre, die Werte wieder an den Anfang zurückgehen, anstatt aufzuhören), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min) Eigenschaften umgekehrt sind, was darauf hinweist, dass der Bereich der zulässigen Werte an `min` beginnt, um den niedrigsten möglichen Wert wickelt, und dann weitergeht, bis `max` erreicht ist. Dies ist besonders nützlich für Daten und Zeiten, beispielsweise wenn Sie möchten, dass der Bereich von 20:00 Uhr bis 08:00 Uhr reicht:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und deren Werte können zu einem bestimmten Fehler des [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Die Validitätsobjektfehler hängen von den <code>&lt;input&gt;</code>
    Attributen und deren Werten ab:
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
        Tritt auf, wenn der Wert größer ist als der maximal erlaubte Wert gemäß dem <code>max</code> Attribut
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code> Eigenschaft erlaubte Zahl
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der minimal erlaubte Wert gemäß dem <code>min</code> Attribut
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code> Eigenschaft erforderliche Zahl
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Mustermodus mit einem gültigen regulären Ausdruck enthalten ist und das <code>value</code> diesen nicht erfüllt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code> Attribut vorhanden ist, der Wert jedoch <code>null</code> ist oder das Radio oder Kontrollkästchen nicht aktiviert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert erfüllt nicht das Schrittinkrement. Der Standard-Inkrement wert ist <code>1</code>, daher sind nur ganze Zahlen bei <code>type="number"</code> gültig, wenn der Schritt nicht enthalten ist. <code>step="any"</code> wird diesen Fehler niemals verursachen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, z. B. wenn eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn eine Steuerelement kein `required` Attribut hat, kein Wert oder eine leere Zeichenkette, ist es nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, führt eine leere Zeichenkette nicht zu einem Fehler.

Wir können Grenzen festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer alarmieren, wenn beim Absenden des Formulars ein Fehler auftritt.

Neben den im obigen Tab beschriebenen Fehlern enthält die `validityState` Schnittstelle die booleanschen readonly Eigenschaften `badInput`, `valid` und `customError`. Das Gültigkeitsobjekt umfasst:

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

Für diese booleschen Eigenschaften zeigt ein Wert von `true`, dass der gegebene Grund für das Scheitern der Validierung vorliegt, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements allen Einschränkungen genügt.

Wenn ein Fehler vorliegt, werden unterstützende Browser sowohl den Benutzer alarmieren als auch verhindern, dass das Formular abgesendet wird. Ein Wort der Warnung: Wenn ein benutzerdefinierter Fehler auf einen wahrheitsgemäßen Wert (alles außer der leeren Zeichenkette oder `null`) gesetzt wird, wird das Formular daran gehindert, abgesandt zu werden. Wenn keine benutzerdefinierte Fehlermeldung vorliegt und keine der anderen Eigenschaften `true` zurückgeben, wird `valid` `true` sein und das Formular kann abgesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Gültigkeitsnachricht auf die leere Zeichenfolge setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt ist, wird das Absenden fehlschlagen, auch wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die für `<input>` (und verwandte) Elemente verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen lassen dies eine Standard-Fehlermeldung erzeugen, wenn Sie versuchen, das Formular ohne gültige Werte abzusenden oder mit einem Wert, der das `pattern` nicht erfüllt.

Wenn Sie stattdessen benutzerdefinierte Fehlermeldungen anzeigen möchten, können Sie JavaScript wie folgt verwenden:

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

Kurzgesagt:

- Wir überprüfen den gültigen Status des Eingabeelements jedes Mal, wenn sein Wert geändert wird, indem wir die `checkValidity()` Methode über den `input` Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid` Ereignis ausgelöst und die `invalid` Ereignishandlerfunktion wird ausgeführt. Innerhalb dieser Funktion bestimmen wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, indem wir einen `if ()` Block verwenden und eine benutzerdefinierte Gültigkeitsfehlermeldung festlegen.
- Dadurch wird bei Betätigung des `submit`-Buttons eine der benutzerdefinierten Fehlermeldungen angezeigt, wenn der Wert der Eingabe ungültig ist.
- Wenn er gültig ist, wird er wie erwartet abgesendet. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit durch Aufrufen von `setCustomValidity()` mit einem leeren Zeichenkettenwert abgebrochen werden. Daher tun wir dies jedes Mal, wenn das `input` Ereignis ausgelöst wird. Wenn Sie dies nicht tun, und eine benutzerdefinierte Gültigkeit zuvor gesetzt wurde, wird die Eingabe auch dann als ungültig registriert, wenn sie momentan einen gültigen Wert bei Abgabe enthält.

> [!NOTE]
> Validieren Sie Eingabebeschränkungen immer sowohl clientseitig als auch serverseitig. Die Einschränkungsvalidierung beseitigt nicht die Notwendigkeit der Validierung auf der _Seite des Servers_. Ungültige Werte können dennoch von älteren Browsern oder schlechten Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte für viele Versionen ein proprietäres Fehlerattribut — `x-moz-errormessage` —, mit dem Sie benutzerdefinierte Fehlermeldungen auf ähnliche Weise einstellen konnten. Dieses wurde mit Version 66 entfernt (siehe [Firefox Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>` Typen hängen vom Gebietsschema ab. In einigen Gebietsschemas ist 1.000,00 eine gültige Zahl, während in anderen das gültige Format zur Eingabe dieser Zahl 1.000,00 ist.

Firefox verwendet die folgenden Punkte, um das Gebietsschema zur Validierung der Benutzereingabe zu bestimmen (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang` Attribut am Element oder einem seiner Elternteile angegeben ist.
- Versuchen Sie die Sprache, die durch einen `Content-Language` HTTP-Header angegeben ist. Oder,
- Wenn keine angegeben ist, verwenden Sie das Browser-Gebietsschema.

## Barrierefreiheit

### Labels

Wenn Eingaben enthalten sind, ist es eine Barrierefreiheitsanforderung, Etiketten hinzuzufügen. Dies ist notwendig, damit Benutzer, die unterstützende Technologien verwenden, erkennen können, wofür die Eingabe ist. Außerdem gibt das Klicken oder Berühren eines Labels den Fokus auf das dem Label zugeordnete Formularsteuerelement. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erhöht den Bereich, den ein Benutzer klicken oder berühren kann, um das Formularsteuerelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radioknöpfe und Kontrollkästchen, die klein sind. Für weitere Informationen über Labels allgemein siehe [Labels](#labels).

Das folgende Beispiel zeigt, wie das `<label>`-Element mit einem `<input>` Element im obigen Stil verknüpft wird. Sie müssen dem `<input>`-Element ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert mit dem `id` des Inputs identisch ist.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten ein ausreichend großes Aktionsfeld bieten, das leicht zu aktiveren ist. Dies hilft einer Vielzahl von Personen, einschließlich Personen mit motorischen Steuerungsproblemen und Personen, die ungenaue Formen der Eingabe verwenden, wie z.B. einen Stift oder Finger. Eine minimale interaktive Größe von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließende Inhalte</a>, gelistet, einreichbar, zurücksetzbar, form-assoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalte</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann labelbares Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Kein; es ist ein {{Glossary("void_element", "Void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalte</a> akzeptiert.
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
                ohne <code>list</code> Attribut:
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
                ohne <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
                ohne <code>list</code> Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                ohne <code>list</code> Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                ohne <code>list</code> Attribut:
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a ></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
            <code>type=text</code> ohne <code>list</code> Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            oder <code>text</code> mit <code>list</code> Attribut: keine
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
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die einheimischen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Validierung von Formulareinschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
