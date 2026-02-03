---
title: "<input>: Das HTML-Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 539dea64b179cea3f12270fe2b5203a9d2d08795
---

Das **`<input>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu erfassen. Eine Vielzahl von Eingabedatentypen und Steuerungswidgets stehen zur Verfügung, abhängig vom Gerät und {{Glossary("user_agent", "User-Agent")}}. Das `<input>`-Element ist eines der mächtigsten und komplexesten Elemente in HTML, aufgrund der Vielzahl an Kombinationen von Eingabetypen und Attributen.

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

Die Funktionsweise eines `<input>` Elements variiert erheblich, abhängig vom Wert seines [`type`](#type)-Attributs, weshalb die verschiedenen Typen auf separaten Referenzseiten behandelt werden. Wird dieses Attribut nicht angegeben, wird der Standardtyp `text` verwendet.

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
        Eine Schaltfläche ohne Standardverhalten, die den Wert des <a href="#value"><code>value</code></a>-Attributs anzeigt, standardmäßig leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Kontrollkästchen, das einzelne Werte ausgewählt oder abgewählt lassen kann.</td>
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
        Ein Steuerungselement zur Eingabe eines Datums (Jahr, Monat, und Tag, ohne Zeit).
        Öffnet einen Datumsauswähler oder numerische Räder für Jahr, Monat, Tag in unterstützenden Browsern, wenn aktiv.
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
        Ein Steuerungselement zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Räder für Datum- und Uhrzeitkomponenten in unterstützenden Browsern, wenn aktiv.
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
        <code>text</code>-Eingabe, hat jedoch Validierungsparameter und relevante
        Tastaturen in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerungselement, das dem Benutzer erlaubt, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Typen von Dateien zu definieren, die das Steuerungselement auswählen kann.
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
        Server übermittelt wird. In der nächsten Spalte befindet sich ein Beispiel, aber es ist versteckt!
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
        Ein grafischer <code>submit</code>-Button. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert wird.
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
        Ein Steuerungselement zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt eine Standardvalidierung hinzu. Zeigt in einigen Geräten mit dynamischen Tastaturen eine numerische Tastatur an.
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
        Ein einzeiliges Textfeld, dessen Wert verdeckt ist.
        Warnung des Benutzers, wenn die Seite nicht sicher ist.
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
        Ein Radiobutton, der es erlaubt, einen einzigen Wert aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Ein Steuerungselement zur Eingabe einer Zahl, deren exakter Wert nicht wichtig ist.
        Wird als Bereichs-Widget angezeigt, das auf den mittleren Wert voreingestellt ist.
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
        Ein einzeiliges Textfeld zum Eingeben von Suchbegriffen. Zeilenumbrüche werden
        automatisch aus dem Eingabewert entfernt. Kann ein Löschen-Symbol in
        unterstützenden Browsern enthalten, das zum Löschen des Feldes verwendet werden kann. Zeigt ein
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
        Ein Steuerungselement zur Eingabe einer Telefonnummer. Zeigt eine Telefontastatur
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
      <td>Ein Steuerungselement zur Eingabe eines Zeitwerts ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code>-Eingabe, hat jedoch
        Validierungsparameter und relevante Tastaturen in unterstützenden Browsern
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
        Ein Steuerungselement zur Eingabe eines Datums bestehend aus einer Wochennummer und einer Jahresnummer ohne Zeitzone.
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

Das `<input>`-Element ist so mächtig wegen seiner Attribute; das [`type`](#type)-Attribut, das oben mit Beispielen beschrieben wurde, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie sich technisch dasselbe Set von Attributen. In der Realität haben jedoch die meisten Attribute nur Einfluss auf eine spezifische Untergruppe von Eingabetypen. Außerdem hängt die Art und Weise, wie einige Attribute ein `<input>` beeinflussen, vom Eingabetyp ab, was unterschiedliche Auswirkungen je nach Eingabetyp zur Folge hat.

Dieser Abschnitt enthält eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird von einer Liste gefolgt, die jedes Attribut ausführlicher beschreibt, sowie den Eingabetypen, mit denen sie verknüpft sind. Diejenigen, die zu den meisten oder allen Eingabetypen gehören, werden unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind—oder Attribute, die bei allen Eingabetypen vorkommen, aber spezielle Verhaltensweisen haben, wenn sie auf einem bestimmten Eingabetyp verwendet werden—werden dagegen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element schließen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ein und zusätzlich:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                                             |
| --------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis auf erwarteten Dateityp in Dateiupload-Steuerelementen                                           |
| [`alpha`](#alpha)                             | `color`                                                                | Deckkraft der Farbe                                                                                      |
| [`alt`](#alt)                                 | `image`                                                                | Alt-Attribut für den Bildtyp. Erforderlich für die Barrierefreiheit                                      |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                               | Steuert die automatische Großschreibung im eingegebenen Text.                                            |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Buttons                             | Hinweis für die Autofill-Funktion                                                                        |
| [`capture`](#capture)                         | `file`                                                                 | Medienerfassungsmethode in Dateiupload-Steuerelementen                                                   |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Ob das Steuerungselement ausgewählt ist                                                                  |
| [`colorspace`](#colorspace)                   | `color`                                                                | Der {{Glossary("Color_space", "Farbraum")}}, der für die Auswahl des Farbwertes verwendet werden soll.   |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfeldes zur Übermittlung der Richtung des Elements bei der Formularübertragung           |
| [`disabled`](#disabled)                       | alle                                                                   | Ob das Formularsteuerungselement deaktiviert ist                                                         |
| [`form`](#form)                               | alle                                                                   | Verknüpft das Steuerungselement mit einem Formularelement                                                |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL zur Verwendung bei der Formularübertragung                                                           |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Verschlüsselungstyp des Formulardatensatzes zur Verwendung bei der Formularübertragung                   |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | HTTP-Methode zur Verwendung bei der Formularübertragung                                                  |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Umgeht die Formularsteuerungsvalidierung bei der Formularübertragung                                     |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browsing-Kontext für die Formularübertragung                                                             |
| [`height`](#height)                           | `image`                                                                | Entsprechend dem height-Attribut für {{htmlelement('img')}}; vertikale Dimension                         |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Buttons       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autocomplete-Optionen                          |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Höchstwert                                                                                               |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Länge (Anzahl von Zeichen) des `value`-Attributs                                                |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Mindestwert                                                                                              |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Länge (Anzahl von Zeichen) des `value`-Attributs                                                |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolescher Wert. Ob mehrere Werte erlaubt sind                                                           |
| [`name`](#name)                               | alle                                                                   | Name der Formularsteuerung. Wird mit dem Formular als Bestandteil eines Name/Wert-Paares übermittelt     |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, das der `value`-Wert entsprechen muss, um gültig zu sein                                         |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der im Formularsteuerungselement erscheint, wenn kein Wert festgelegt ist                          |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Bezeichnet ein `<input type="button">` als Steuerungselement für ein Popover-Element                     |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt die Aktion an, die ein Popover-Steuerungselement ausführen soll                                     |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolescher Wert. Der Wert ist nicht editierbar                                                           |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolescher Wert. Ein Wert ist erforderlich oder muss markiert sein, damit das Formular übermittelbar ist |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe des Steuerungselements                                                                             |
| [`src`](#src)                                 | `image`                                                                | Entsprechend dem src-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                      |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Inkrementelle Werte, die gültig sind                                                                     |
| [`switch`](#switch)                           | `checkbox`                                                             | Ob das Checkbox-Steuerelement als Schalter gerendert werden soll                                         |
| [`type`](#type)                               | alle                                                                   | Typ der Formularsteuerung                                                                                |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert der Steuerung. Wenn in HTML angegeben, entspricht es dem Anfangswert                            |
| [`width`](#width)                             | `image`                                                                | Entsprechend dem width-Attribut für {{htmlelement('img')}}                                               |

Eine Handvoll zusätzlicher nicht standardisierter Attribute werden nach den Beschreibungen der Standardattribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Gültig nur für den `file`-Eingabetyp, definiert das `accept`-Attribut, welche Dateitypen in einem `file`-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alpha` {{experimental_inline}}
  - : Gültig nur für den `color`-Eingabetyp, ermöglicht das `alpha`-Attribut dem Endbenutzer, die Deckkraft der ausgewählten Farbe festzulegen.

- `alt`
  - : Gültig nur für den `image`-Button, das `alt`-Attribut bietet alternativen Text für das Bild, der angezeigt wird, wenn das Bild-`[src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, in welcher Weise. Siehe den globalen Attribut-Seite [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) für mehr Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** boolesches Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette, die beschreibt, welche Art von Autocomplete-Funktionalität die Eingabe bereitstellen sollte. Eine typische Implementierung von Autocomplete erinnert sich an zuvor in derselben Eingabefeld eingegebene Werte, aber komplexere Formen des Autocomplete können existieren. Beispielsweise könnte ein Browser in die Kontaktliste eines Geräts integrieren, um E-Mail-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig bei `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, ist gültig bei allen Eingabetypen außer `checkbox`, `radio`, `file`, oder irgendeines der Button-Typen.

    Weitere Informationen finden Sie im [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete), einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` bei `hidden` leicht anders funktioniert als bei anderen Eingabetypen.

- `autofocus`
  - : Ein Boolesches Attribut, das, wenn vorhanden, anzeigt, dass die Eingabe automatisch den Fokus haben sollte, wenn die Seite geladen ist (oder wenn der das Element enthaltende {{HTMLElement("dialog")}} angezeigt wird).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als ein Element gesetzt wird, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingabefeldern des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren eines Formularsteuerelements kann sehbehinderte Menschen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmlesegeräte ihre Benutzer ohne Vorwarnung zum Formularsteuerelement.

    Berücksichtigen Sie bei der Anwendung des `autofocus`-Attributs die Barrierefreiheit sorgfältig. Ein automatischer Fokus auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch bei einigen Touch-Geräten zu einer Anzeige der virtuellen Tastatur führen. Während ein Bildschirmleser das Label des fokussierten Formularsteuerelements ankündigt, wird der Bildschirmleser nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext von vorhergehendem Inhalt übersehen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den `file`-Eingabetyp, definiert das `capture`-Attribut, welches Medium– Mikrofon, Video oder Kamera – verwendet werden soll, um eine neue Datei zur Aufnahme mit `file`-Upload-Steuerelement in unterstützenden Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`
  - : Gültig für sowohl `radio` als auch `checkbox` Typen, `checked` ist ein Boolesches Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass dieser Radiobutton der aktuell ausgewählte in der Gruppe von gleichnamigen Radiobuttons ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kästchen standardmäßig (wenn die Seite geladen wird) ausgewählt ist. Es zeigt _nicht_ an, ob das Kästchen aktuell ausgewählt ist: wenn sich der Status des Kästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Anders als andere Eingabesteuerelemente wird der Wert eines Auswahlsfeldes oder Radiobuttons nur dann in den übermittelten Daten aufgenommen, wenn sie `checked` sind. Wenn sie selektiert sind, werden der Name und die Werte der ausgewählten Steuerelemente übermittelt.
    >
    > Beispiel: Wenn ein Kästchen, dessen `name` `fruit` ist, den `value` `cherry` hat und es ausgewählt ist, wird `fruit=cherry` in die übermittelten Formulardaten aufgenommen. Ist das Kästchen nicht ausgewählt, wird es gar nicht in den Formulardaten aufgeführt. Der Standard `value` für Auswahlsfelder und Radiobuttons ist `on`.

- `colorspace` {{experimental_inline}}
  - : Gültig nur für den `color`-Eingabetyp, spezifiziert das `colorspace`-Attribut den {{Glossary("Color_space", "Farbraum")}}, der von der `type="color"`-Eingabe verwendet wird. Mögliche {{Glossary("enumerated", "aufgelistete")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies schließt {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}} und {{cssxref("hex-color")}} Werte ein. Der Farbwert ist auf 8-Bits pro `r`, `g` und `b` Komponente beschränkt. Dies ist der Standardwert.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3 Farbraum")}}, z.B., `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel`, und `email` Eingabetypen, ermöglicht das `dirname`-Attribut die Übermittlung der Richtung des Elements. Wenn dieses enthalten ist, übermittelt das Steuerelement zwei Name/Wert-Paare: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das obige Formular übermittelt wird, führt die Eingabe dazu, dass sowohl das `name`/`value`-Paar von `fruit=cherry` als auch das `dirname`/Richtung-Paar von `fruit-dir=ltr` gesendet werden.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolesches Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer nicht in der Lage sein sollte, mit der Eingabe zu interagieren. Deaktivierte Eingaben werden typischerweise in der Darstellung abgedunkelt angezeigt oder verwenden eine andere Form der Indikation, dass das Feld nicht zur Benutzung freigegeben ist.

    Insbesondere deaktivierte Eingaben erhalten das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis nicht, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation gefordert, wird Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` über Seitenladeaktionen speichern ([persistieren](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Ein String, der das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (d.h. ihr **Formulareigentümer**). Der Wert dieses Strings, falls vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im gleichen Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächstgelegenen enthaltenen Formular verknüpft, falls vorhanden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe überall im Dokument zu platzieren und sie dennoch mit einem Formular an anderer Stelle im Dokument einzubeziehen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Nur gültig für den `image` und `submit` Eingabetyp. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Nur gültig für den `image` und `submit` Eingabetyp. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Nur gültig für den `image` und `submit` Eingabetyp. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Nur gültig für den `image` und `submit` Eingabetyp. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Nur gültig für den `image` und `submit` Eingabetyp. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Nur gültig für den `image` Eingabe-Button, die `height` ist die Höhe der Bilddatei, die angezeigt werden soll, um den grafischen Submit-Button zu repräsentieren. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, es definiert eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Zweck ist es, das Element zu identifizieren, wenn es verlinkt wird. Der Wert wird als Wert des `for`-Attributs im {{htmlelement('label')}} verwendet, um das Label mit der Formularsteuerung zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, bietet einen Hinweis für Browser über die Art der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seines Inhaltes zu verwenden ist. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der dem `list`-Attribut zugewiesene Wert sollte die [`id`](/de/docs/Web/API/Element/id) einer {{HTMLElement("datalist")}} sein, die im gleichen Dokument enthalten ist. Die `<datalist>` bietet eine Liste mit vordefinierten Werten, die dem Benutzer zur Eingabe empfohlen werden. Jeder Wert in der Liste, der mit dem [`type`](#type) nicht kompatibel ist, wird nicht in die Vorschläge aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste wählen oder einen anderen Wert angeben.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Gemäß den Spezifikationen wird das `list`-Attribut von den `hidden`, `password`, `checkbox`, `radio`, `file` oder keinem der Button-Typen unterstützt.

    Abhängig vom Browser könnte der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Haltemarken entlang eines Bereichs oder sogar eine Eingabe, die sich wie eine {{HTMLElement("select")}} öffnet, aber nicht gelistete Werte zulässt. Sehen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den höchsten Wert im Bereich zugelassener Werte. Wenn der [`value`](#value), der in das Element eingegeben wird, dieses übersteigt, schlägt das Element in der [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Höchstwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich umschlagen könnte; zum Beispiel erlaubt dies Ihnen, einen Bereich von Uhrzeiten von 10 PM bis 4 AM festzulegen.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld kein maximales Längenlimit. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt in der [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes mehr als `maxlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} beträgt. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als das `maxlength`-Attribut erlaubt. Constraint Validation wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-side validation](#clientseitige_validierung) für mehr Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den negativsten Wert im Bereich der zulässigen Werte. Wenn der [`value`](#value), der in das Element eingegeben wird, kleiner ist, schlägt das Element in der [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht-leerer Wert kleiner als das erlaubte Minimum des `min`-Attributs ist, verhindert die Constraint Validation die Formularübermittlung. Siehe [Client-side validation](#clientseitige_validierung) für mehr Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich umschlagen könnte; zum Beispiel erlaubt dies Ihnen, einen Bereich von Uhrzeiten von 10 PM bis 4 AM festzulegen.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer, ganzzahliger Wert sein, der kleiner oder gleich dem Wert des `maxlength` ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Eingabe kein Mindestlängenlimit.

    Die Eingabe schlägt in der [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} beträgt, was die Formularübermittlung verhindert. Constraint Validation wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-side validation](#clientseitige_validierung) für mehr Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das boolesche `multiple`-Attribut bedeutet, wenn gesetzt, dass der Benutzer kommagetrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit der `file`-Eingabe wählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`
  - : Ein String, der einen Namen für die Eingabesteuerung spezifiziert. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als ein erforderliches Attribut (auch wenn es das nicht ist). Wenn eine Eingabe keinen `name` angegeben hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, nicht markierte Radiobuttons, nicht markierte Kästchen, und Reset-Buttons werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_` : Wenn es als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "User Agent")}} auf die Zeichenkodierung gesetzt, die zur Formularübermittlung verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erzeugt ein einzigartiges Verhalten für Radiobuttons.

    Nur ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons kann auf einmal ausgewählt sein. Wenn ein Radiobutton in dieser Gruppe ausgewählt wird, wird jeder aktuell ausgewählte Radiobutton in der gleichen Gruppe automatisch abgewählt. Der Wert des einen ausgewählten Radiobuttons wird zusammen mit dem Namen übermittelt, wenn das Formular übermittelt wird.

    Beim Tabben in eine Reihe gleichnamiger Gruppen von Radiobuttons wird, wenn einer ausgewählt ist, dieser den Fokus erhalten. Wenn sie nicht in Reihenfolge gruppiert sind, beginnt das Tabben in der Gruppe, wenn der erste in der Gruppe angetroffen wird, und überspringt alle, die nicht ausgewählt sind. Das bedeutet, wenn einer ausgewählt ist, überspringt das Tabben die nicht markierten Radiobuttons in der Gruppe. Wenn keiner ausgewählt ist, erhält die Gruppe den Fokus, wenn der erste Button in der Gruppe erreicht wird.

    Sobald ein Radiobutton in einer Gruppe den Fokus hat, navigieren die Pfeiltasten durch alle Radiobuttons mit demselben Namen, selbst wenn die Radiobuttons in der Quellreihenfolge nicht beieinander gruppiert sind.

    Wenn ein Eingabeelement einen `name` erhalten hat, wird dieser Name zu einer Eigenschaft der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft des eigenen Formularelements. Wenn Sie eine Eingabe haben, deren `name` auf `guest` gesetzt ist und eine andere, deren `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularsteuerelementen einen `name` zu geben, der einem eingebauten Attribut des Formulars entspricht, da Sie damit das vordefinierte Eigenschaft oder die Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu erstellen, dem der Eingabe-`[`value`](#value)` entsprechen muss, um die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regular-Expression-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Keine Schrägstriche sollten um den Mustertext spezifiziert werden. Beim Erstellen des regulären Ausdrucks:
    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, sodass der Abgleich auf den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag angegeben, sodass das Muster als eine Sequenz von Unicode-Code-Punkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn das Muster-Attribut gültig ist und ein nicht-leerer Wert nicht dem Muster entspricht, verhindert die Constraint Validation die Formularübermittlung. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der erzeugte reguläre Ausdruck gegen jeden kommagetrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe einschließen. Sie können auch ein [`title`](#title)-Attribut einfügen, um zu erläutern, welche Voraussetzungen erfüllt sein müssen, um das Muster abzugleichen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Weitere Informationen finden Sie unter [Client-side validation](#clientseitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, das `placeholder`-Attribut bietet dem Benutzer einen kurzen Hinweis darauf, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Art der Daten gibt, anstatt einer Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Zum Beispiel, wenn in einem Feld der Vorname eines Benutzers erwartet wird und das Label "Vorname" lautet, könnte ein geeigneter Placeholder "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Labels](#labels).

- `popovertarget`
  - : Macht ein `<input type="button">`-Element zu einer Popover-Steuerungsschaltfläche; nimmt die ID des Popover-Elements an, das als Wert zu steuern ist. Weitere Details finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API) Hauptseite. Die Etablierung einer Beziehung zwischen einem Popover und seinem übergeordneten Button mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und dem übergeordneten Element und platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und unterstützende Technologie (AT) Benutzer zugänglicher (siehe auch [Popover-Zugänglichkeitseigenschaften](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Verankerungsreferenz zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerungen mit [CSS-Verankerungs-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die Aktion an, die auf einem von einer Steuerung `<input type="button">` kontrollierten Popover-Element ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Die Schaltfläche wird ein angezeigtes Popover verbergen. Wenn versucht wird, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ergriffen.
    - `"show"`
      - : Die Schaltfläche wird ein verstecktes Popover anzeigen. Wenn versucht wird, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ergriffen.
    - `"toggle"`
      - : Die Schaltfläche wird ein Popover zwischen angezeigt und versteckt umschalten. Wenn das Popover versteckt ist, wird es angezeigt; ist das Popover sichtbar, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerungsschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolesches Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer den Wert der Eingabe nicht ändern kann. Das `readonly`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` Eingabetypen unterstützt.

    Weitere Informationen finden Sie auf der [HTML-Attribut-Seite: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolesches Attribut, das, wenn vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das eigene Formular übermittelt werden kann. Das `required`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` Eingaben unterstützt.

    Weitere Informationen finden Sie bei [Client-side validation](#clientseitige_validierung) und auf der [HTML-Attribut-Seite: `required`](/de/docs/Web/HTML/Reference/Attributes/required).

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`, gibt das Attribut `size` an, wie viel der Eingabe angezeigt wird. Im Wesentlichen dasselbe Ergebnis wie das Setzen der CSS {{cssxref("width")}}-Eigenschaft mit ein paar Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es die Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px` Einheiten). CSS `width` hat Vorrang über das `size`-Attribut.

- `src`
  - : Nur gültig für den `image` Eingabe-Button, ist `src` ein String, der die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Submit-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, ist das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut eine Zahl, die die Granularität spezifiziert, an die sich der Wert halten muss. Nur Werte, die eine ganzzahlige Anzahl von Schritten von der Schrittbasis entfernt sind, sind gültig. Die Schrittbasis ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), falls angegeben, andernfalls [`value`](#value) oder `0`, falls keines angegeben ist (außer für `week`, das eine Standard-Diagrammbasis von −259,200,000 hat, was den Beginn der Woche `1970-W01` darstellt).

    Wenn nicht explizit eingefügt:
    - `step` hat für `number` und `range` den Standardwert `1`.
    - Jeder Datums-/Uhrzeiteingabentyp hat einen geeigneten Standard-`step`-Wert für den Typ; für die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step), und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein – ganzzahlig oder als Gleitkommazahl – oder der spezielle Wert `any`, der bedeutet, dass keine Schritte impliziert sind, und jeder Wert zulässig ist (unter anderen Einschränkungen wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann sind alle geraden Ganzzahlen größer oder gleich `10` gültig. Ist die Angabe weggelassen, akzeptiert `<input type="number">` jede Ganzzahl, jedoch sind Gleitkommazahlen (wie `4.2`) nicht gültig, denn `step` hat standardmäßig den Wert `1`. Damit `4.2` gültig ist, hätte `step` auf `any`, 0.1, 0.2 oder der `min`-Wert hätte auf eine Zahl, die mit `.2` endet, gesetzt werden müssen, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht den Schritt-Konfigurationen entsprechen, wird der Wert in der Constraint Validation als ungültig angesehen und entspricht der `:invalid` Sammlung.

    Weitere Informationen finden Sie bei [Client-side validation](#clientseitige_validierung).

- [`switch`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#switch)
  - : Gültig nur für `checkbox`-Eingaben, `switch` ist ein Boolesches Attribut, das angibt, ob das Checkbox-Eingabefeld als Schalter angezeigt werden soll.

    > [!NOTE]
    > Dieses Attribut ist noch experimentell und hat begrenzte Browserunterstützung. Das Attribut wird auf nicht unterstützten Browsern ignoriert.

- `tabindex`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erlangen kann (fokusserbar ist), wenn es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen, außer solchen vom Typ `hidden`, fokusförmig sind, sollte dieses Attribut nicht auf Formularsteuerelementen verwendet werden, da dies erfordern würde, dass die Fokusreihenfolge für alle Elemente im Dokument verwaltet wird, mit dem Risiko, die Benutzerfreundlichkeit und Zugänglichkeit zu beeinträchtigen, wenn es falsch gemacht wird.

- `title`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text enthält, der verbindliche Informationen im Zusammenhang mit dem Element angibt, zu dem es gehört. Derartige Informationen können dem Benutzer typischerweise, jedoch nicht unbedingt, als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks der Formularsteuerung verwendet werden. Stattdessen verwenden Sie das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das `[`id`](#id) des Formularsteuerelements gesetzt ist. Weitere Informationen finden Sie bei [Labels](#labels).

- `type`
  - : Ein String, der den Typ der zu rendierenden Steuerung angibt. Um beispielsweise ein Kästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wird es weggelassen (oder ein unbekannter Wert angegeben), wird der Eingabetyp `text` verwendet, was ein einfaches Textfeld erzeugt.

    Erlaubte Werte siehe [Input types](#input_types) oben.

- `value`
  - : Der Wert der Eingabesteuerung. Wenn in HTML angegeben, ist dies der Anfangswert, und von da an kann er jederzeit mithilfe von JavaScript auf das entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt über das `value`-Eigenschaft abgeändert oder abgerufen werden. Das `value`-Attribut ist immer optional, sollte jedoch als zwingend für `checkbox`, `radio` und `hidden` angesehen werden.

- `width`
  - : Nur gültig für den `image` Eingabe-Button, die `width` ist die Breite der Bilddatei, die angezeigt werden soll, um den grafischen Submit-Button zu repräsentieren. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute stehen ebenfalls in einigen Browsern zur Verfügung. Als allgemeine Regel sollten diese nur verwendet werden, wenn es keine Alternative gibt.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, um die Aktualisierung der Livesuche zu ermöglichen, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der anzeigt, welche Art von Aktion durchgeführt wird, wenn der Benutzer die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt, während er das
        Feld bearbeitet; dies wird verwendet, um eine geeignete Bezeichnung für diese Taste auf einer virtuellen Tastatur zu identifizieren. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Ausrichtung des Bereichsreglers. <strong>Nur Firefox</strong>.
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
        Ein Boolescher Wert, der anzeigt, ob es nur erlaubt werden soll, ein Verzeichnis (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist), auszuwählen.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolesche Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome, etc.), die, wenn vorhanden, dem {{Glossary("user_agent", "User Agent")}} mitteilt, die Eingabe als Livesuche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das das Suchfeld darstellt. Damit kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche einleitet (z.B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste, während er das Feld bearbeitet).

    Das `search`-Ereignis ist rate-begrenzt, sodass es nicht häufiger gesendet wird als durch ein implementationsdefiniertes Intervall.

- `orient` {{non-standard_inline}}
  - : Ähnlich wie bei der nicht-standardisierten CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente beeinflusst, definiert das `orient`-Attribut die Ausrichtung des Bereichsreglers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Erstellen von vertikalen Formular-Steuerelementen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung von vertikalen Formular-Steuerelementen.

- `results` {{non-standard_inline}}
  - : Das `results`-Attribut - unterstützt nur von Safari - ist ein numerischer Wert, der es Ihnen erlaubt, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü früherer Suchanfragen im `<input>`-Element angezeigt werden sollen.

    Der Wert muss eine nichtnegative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben ist, wird die Standardhöchstzahl der Einträge des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das boolesche `webkitdirectory`-Attribut, wenn es vorhanden ist, gibt an, dass nur Verzeichnisse in der Dateiauswahloberfläche vom Benutzer ausgewählt werden können. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später verwendbar. Auch wenn es relativ weit verbreitete Unterstützung hat, ist es noch nicht standardisiert und sollte nur verwendet werden, wenn es keine Alternative gibt.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM repräsentiert. Auch die Methoden, die von den übergeordneten Schnittstellen [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) spezifiziert sind, stehen zur Verfügung.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Validitätsprüfungen besteht; andernfalls gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Validitätsprüfungen besteht; andernfalls gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und meldet das Problem dem Benutzer (sofern das Ereignis nicht abgebrochen wird).
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt (wie z. B. einem visuellen Farbwähler oder Datums-Picker) macht diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine gegebene Zeichenkette. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines Texteingabeelements aus. Tut nichts für Eingaben, die nicht als Textfelder präsentiert werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Picker für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, jedoch durch Klicken auf eine Schaltfläche oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins standardmäßig oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Features, die nicht auf Nichtformen-Elemente anwendbar sind. Es gibt CSS-Selektoren, die speziell Formularsteuerelemente basierend auf ihren UI-Features, auch bekannt als UI-Pseudoklassen, anvisieren können. Das Input-Element kann auch nach Typ mit Attributselektoren angesprochen werden. Einige Eigenschaften sind ebenfalls besonders nützlich.

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
        Jedes derzeit aktivierte Element, das aktiviert (ausgewählt, angeklickt,
        eingegeben usw.) oder fokussiert werden kann und auch einen deaktivierten Zustand hat, in dem es
        nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat,
        was bedeutet, dass es ansonsten aktiviert werden könnte (ausgewählt,
        angeklickt, eingegeben usw.) oder fokussiert werden könnte, wäre es nicht deaktiviert.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element nicht bearbeitbar durch den Benutzer</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitbar ist.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code> Text</a> anzeigt,
        einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das bisher keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die standardmäßig in einer Gruppe verwandter Elemente sind.
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} input types, die beim Laden oder Rendern der Seite ausgewählt waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} input types, die
        derzeit ausgewählt sind (und das {{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente,
        deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle
        Radioknöpfe mit dem gleichen Namen im Formular nicht ausgewählt sind, und
        {{HTMLElement("progress")}} Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die eine Einschränkungsvalidierung angewendet werden kann und die
        derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die eine Einschränkungsvalidierung angewendet wurde und die derzeit
        nicht gültig sind. Passt zu einem Formularelement, dessen Wert nicht den
        durch seine Attribute festgelegten Einschränkungen entspricht, wie z. B.
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribute sowie <a href="#step"><code>step</code></a> spezifizierten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a> angegebenen Bereichsgrenzen liegt oder
        nicht dem <a href="#step"><code>step</code></a>-Einschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Elemente, die das <a href="#required"><code>required</code></a>-Attribut gesetzt haben.
        Passt nur zu Elementen, die erforderlich sein können.
        Das Attribut, das in einem nicht erforderlichen Element enthalten ist, führt nicht zu einem Treffer.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}}-Elemente, die NICHT das <a href="#required"><code>required</code></a>-Attribut gesetzt haben.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlassen aktiviert. Passt zu
        ungültigen Eingaben, jedoch nur nach Benutzerinteraktion, z. B. durch Fokussieren
        auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular
        mit dem ungültigen Steuerelement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Picker anzeigen, aus dem der Benutzer einen Wert auswählen kann (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — jedoch nur, wenn sich das Element im offenen Zustand befindet, das heißt, wenn der Picker angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können ein Checkbox-Label basierend darauf stylen, ob die Checkbox ausgewählt ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}-Elements, das direkt nach einer ausgewählten Eingabe folgt. Wir haben keine Stile angewendet, wenn die `input` nicht ausgewählt ist.

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

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) zu adressieren. CSS-Attributselektoren passen zu Elementen basierend auf der bloßen Anwesenheit eines Attributs oder dem Wert eines bestimmten Attributs.

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

Standardmäßig ist das Erscheinungsbild von Platzhaltertext transparent oder hellgrau. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder` Text](#placeholder) des Eingabefeldes. Es kann mit einer eingeschränkten Untermenge von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur die Untermenge der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement anwendbar sind, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor enthält.

### caret-color

Eine Eigenschaft, die speziell für eingabebezogene Elemente ist, ist die CSS {{cssxref("caret-color")}} Eigenschaft, die es Ihnen ermöglicht, die Farbe zu setzen, die für die Darstellung des Texteingabecursors verwendet wird:

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

#### Resultat

{{EmbedLiveSample('caret-color', 500, 80)}}

### Feldgröße

Die Eigenschaft {{cssxref("field-sizing")}} ermöglicht Ihnen, das Größenverhalten von Formulareingaben zu kontrollieren (d.h. sie erhalten standardmäßig eine bevorzugte Größe.) Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und Formularelemente sich in ihrer Größe an ihren Inhalt anpassen zu lassen.

Diese Eigenschaft wird typischerweise verwendet, um Formulareingabefelder zu erstellen, die ihren Inhalt umschließen und mit mehr eingegebenem Text wachsen. Dies funktioniert mit Eingabetypen, die unmittelbaren Texteingang akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}}-Elemente.

### object-position und object-fit

In bestimmten Fällen (normalerweise bei nicht-tekstuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn dem so ist, kann die Position und Größe des Elements innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen über das Hinzufügen von Farbe zu Elementen in HTML, siehe:

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Stylingeinstellungen für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Zusätzliche Funktionen

### Labels

Labels sind nötig, um erklärenden Text mit einem `<input>` zu assoziieren. Das {{HTMLElement("label")}} Element liefert erklärende Informationen über ein Formularfeld, die _immer_ angemessen sind (abgesehen von etwaigen Layout-Überlegungen, die Sie haben.). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder ein {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugehörige Labels

Die semantische Paarung von `<input>`- und `<label>`-Elementen ist nützlich für assistive Technologien wie Bildschirmlesehilfen. Indem man sie mit dem `for`-Attribut des `<label>`-Elements paart, bindet man das Label an das Eingabeelement auf eine Weise, die es Bildschirmlesehilfen ermöglicht, Eingaben den Benutzern präziser zu beschreiben.

Es genügt nicht, einfachen Text neben dem `<input>`-Element zu haben. Vielmehr erfordert die Benutzerfreundlichkeit und Barrierefreiheit das Einfügen von entweder einer impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht barrierefrei: Es besteht keine Beziehung zwischen der Aufforderung und dem `<input>`-Element.

Neben einem zugänglichen Namen bietet das Label eine größere Trefferfläche für Maus- und Touchscreen-Benutzer zum Klicken oder Berühren. Wenn Sie ein `<label>` mit einem `<input>` paaren, wird das Klicken auf eines von beiden das `<input>` fokussieren. Wenn Sie normalen Text verwenden, um Ihre Eingabe zu "labeln", wird dies nicht passieren. Das Hinzufügen des Prompts als Teil des Aktivierungsbereichs für das Eingabeelement ist hilfreich für Menschen mit motorischen Kontrollbedingungen.

Als Webentwickler sollten wir niemals davon ausgehen, dass Menschen alle Dinge kennen, die wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und in der Verlängerung Ihre Website – garantiert praktisch, dass einige der Besucher Ihrer Website einige Variationen in Denkprozessen und/oder Umständen haben, die sie dazu führen, Ihre Formulare ohne klare und richtig dargestellte Labels sehr unterschiedlich zu interpretieren.

#### Platzhalter sind nicht barrierefrei

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text anzugeben, der innerhalb des `<input>`-Elementbereichs selbst angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als solches verwendet werden, weil es nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Der Platzhalter ist nicht nur für Bildschirmleser nicht zugänglich, sondern sobald der Benutzer Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitentranslationsfunktionen können Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element beschriften müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Clientseitige Validierung

> [!WARNING]
> Clientseitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format sein müssen, überprüfen Sie sie _immer_ auch auf der Serverseite und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Status jeder Eingabe zu gestalten, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser auch eine clientseitige Validierung bei (versuchter) Formularübermittlung. Bei der Formularübermittlung, falls es ein Formularelement gibt, das die Einschränkungsvalidierung nicht besteht, zeigen unterstützende Browser eine Fehlermeldung am ersten ungültigen Formularelement an; entweder eine Standardmeldung basierend auf dem Fehlertyp oder eine von Ihnen gesetzte Nachricht.

Einige Eingabetypen und andere Attribute setzen Grenzen, welche Werte für eine gegebene Eingabe gültig sind. Zum Beispiel gibt `<input type="number" min="2" max="10" step="2">` an, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Es könnten verschiedene Fehler auftreten, darunter ein `rangeUnderflow`-Fehler, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn größer als 10, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Ganzzahl (entspricht nicht der Anforderung des `step`-Attributes), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Domäne möglicher Werte periodisch ist (d.h. bei den höchsten möglichen Werten drehen sich die Werte zurück zum Anfang, anstatt zu enden), ist es möglich, dass die Werte der Eigenschaften [`max`](#max) und [`min`](#min) umgedreht sind, was anzeigt, dass der Bereich erlaubter Werte bei `min` beginnt, zurück um den niedrigsten möglichen Wert dreht und dann weitergeht, bis `max` erreicht ist. Dies ist besonders nützlich für Daten und Zeiten, wie wenn Sie den Bereich von 20:00 bis 8:00 Uhr erlauben möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und ihre Werte können zu einem bestimmten Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

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
        Tritt auf, wenn der Wert größer ist als der maximale Wert, der durch das
        <code>max</code>-Attribut definiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code>-Eigenschaft erlaubte Anzahl.
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
        Tritt auf, wenn ein Musterattribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> diesem nicht entspricht.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> ist oder wenn Radio oder Checkbox nicht ausgewählt sind.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Standardinkrement ist <code>1</code>, also sind nur ganze Zahlen auf <code>type="number"</code> gültig, wenn Schritt nicht enthalten ist. <code>step="any"</code> wird diesen Fehler niemals verursachen.
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

Wenn ein Formularelement nicht das `required`-Attribut hat, ist kein Wert oder ein leerer String nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, führt ein leerer String nicht zu einem Fehler, mit Ausnahme von `required`.

Wir können Grenzen für die Werte setzen, die wir akzeptieren, und unterstützende Browser werden diese Formulareingabewerte nativ validieren und den Benutzer warnen, wenn beim Absenden des Formulars ein Fehler vorliegt.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen, schreibgeschützten Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund für Fehler bei der Validierung zutrifft, mit Ausnahme der Eigenschaft `valid`, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

Wenn ein Fehler auftritt, werden unterstützende Browser sowohl den Benutzer warnen als auch das Absenden des Formulars verhindern. Ein Wort der Vorsicht: Wenn eine benutzerdefinierte Fehlermeldung auf einen wahrheitsgemäßen Wert (alles außer dem leeren String oder `null`) gesetzt ist, wird das Formular nicht abgesendet. Wenn keine benutzerdefinierte Fehlermeldung vorliegt oder keine der anderen Eigenschaften `true` zurückgibt, ist `valid` wahr und das Formular kann abgesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Fehlermeldung auf den leeren String setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Validität festgelegt wurde, wird das Absenden verhindern, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierten Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandte) Elemente verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden Funktionen zur HTML-Formularvalidierung führen dazu, dass dies eine Standardfehlermeldung erzeugt, wenn Sie versuchen, das Formular ohne gültigen gefüllten Wert oder mit einem Wert, der nicht dem `pattern` entspricht, abzusenden.

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

Das Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Status des Eingabeelements jedes Mal, wenn sich der Wert ändert, durch Auslösen der `checkValidity()`-Methode über den `input`-Ereignishandler.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst, und die `invalid`-Ereignishandlungsfunktion wird ausgeführt. Innerhalb dieser Funktion ermitteln wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, indem wir einen `if ()`-Block verwenden und eine benutzerdefinierte Validitätsfehlermeldung einstellen.
- Infolgedessen wird eine der benutzerdefinierten Fehlermeldungen angezeigt, wenn der Eingabewert ungültig ist, wenn die Senden-Schaltfläche gedrückt wird.
- Wenn er gültig ist, wird er so gesendet, wie Sie es erwarten würden. Damit dies passiert, muss die benutzerdefinierte Validitätsprüfung abgebrochen werden, indem `setCustomValidity()` mit einem leeren Stringwert aufgerufen wird. Wir führen dies daher jedes Mal aus, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und zuvor eine benutzerdefinierte Validität festgelegt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie derzeit beim Absenden einen gültigen Wert enthält.

> [!NOTE]
> Überprüfen Sie immer die Eingabeanforderungen sowohl auf der Client- als auch auf der Serverseite. Einschränkungsvalidierung entfernt nicht die Notwendigkeit für eine Validierung auf der _Server-Seite_. Ungültige Werte können weiterhin von älteren Browsern oder durch böswillige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte über viele Versionen ein proprietäres Fehlerattribut - `x-moz-errormessage` -, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise festzulegen. Dies wurde ab Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die zulässigen Eingaben für bestimmte `<input>`-Typen hängen von der Spracheinstellung ab. In einigen Sprachregionen ist 1,000.00 eine gültige Zahl, während in anderen Sprachregionen die gültige Eingabeweise 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Sprache einzustellen, um die Benutzereingabe zu validieren (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut am Element oder einem seiner Elternteile angegeben wird.
- Versuchen Sie die Sprache, die durch jeden `Content-Language` HTTP-Header angegeben wird. Oder,
- Verwenden Sie, wenn keine angegeben ist, die Lokalisierung des Browsers.

## Barrierefreiheit

### Labels

Beim Einschließen von Eingaben ist es eine Anforderung an die Barrierefreiheit, Labels hinzuzufügen. Dies ist nötig, sodass diejenigen, die assistive Technologien verwenden, erkennen können, wofür die Eingabe ist. Zusätzlich gibt das Klicken oder Berühren eines Labels den Fokus auf die dem Label zugeordnete Formularsteuerung. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erhöht den Bereich, den ein Benutzer anklicken oder berühren kann, um die Formularsteuerung zu aktivieren. Dies ist besonders nützlich (und sogar erforderlich) für Radioknöpfe und Checkboxen, die klein sind. Für weitere Informationen zu Labels allgemein siehe [Labels](#labels).

Das Folgende ist ein Beispiel, wie das `<label>` mit einem `<input>`-Element im oben beschriebenen Stil assoziiert wird. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert mit dem `id` der Eingabe übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen Bereich bereitstellen, der groß genug ist, damit man sie leicht aktivieren kann. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die keine präzisen Eingabeformen wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, gelistet, übermittelbar, zurücksetzbar, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann beschriftbares Element, tastbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "Leerelement")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
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
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die einheimischen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Das Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formularbeschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
