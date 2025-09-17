---
title: "<input>: Das HTML-Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: cf16851e73da29823438198c4f0efcb7026b7d10
---

Das **`<input>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren. Es stehen eine Vielzahl von Eingabedatentypen und Steuerungs-Widgets zur Verfügung, abhängig vom Gerät und dem {{Glossary("user_agent", "User-Agent")}}. Das `<input>` Element ist eines der leistungsstärksten und komplexesten in HTML aufgrund der Vielzahl von Kombinationen aus Eingabetypen und Attributen.

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

Die Funktionsweise eines `<input>` variiert erheblich, abhängig vom Wert seines [`type`](#type)-Attributs. Daher werden die verschiedenen Typen auf eigenen Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` angenommen.

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
      <td>Eine Checkbox, die es erlaubt, einzelne Werte auszuwählen oder abzuwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerelement zur Farbauswahl; öffnet einen Farbwähler, wenn dies in unterstützenden Browsern aktiv ist.
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
        Öffnet einen Datumsauswähler oder numerische Räder für Jahr, Monat, Tag, wenn dies in unterstützenden Browsern aktiv ist.
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
        Ein Steuerelement zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Räder für Datums- und Zeitkomponenten, wenn dies in unterstützenden Browsern aktiv ist.
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
        <code>text</code> Eingabefeld, verfügt jedoch über Validierungsparameter und eine entsprechende
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
        Ein Steuerelement, das es dem Benutzer ermöglicht, eine Datei auszuwählen.
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
        Ein graphischer <code>submit</code>-Button. Zeigt ein Bild, definiert durch das <code>src</code>-Attribut.
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
        Ein Radiobutton, der es erlaubt, einen einzelnen Wert aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Ein Steuerelement zur Eingabe einer Zahl, deren genauer Wert nicht wichtig ist. Wird als Bereichs-Widget angezeigt, wobei standardmäßig der mittlere Wert gewählt ist. Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich der akzeptablen Werte zu definieren.
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
        Ein einzeiliges Textfeld zum Eingeben von Suchbegriffen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern ein Lösch-Symbol enthalten, mit dem das Feld geleert werden kann. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabefeld, verfügt jedoch über Validierungsparameter und eine entsprechende Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerelement zur Eingabe eines Datums, bestehend aus einer Kalenderwoche und einer Wochennummer ohne Zeitzone.
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

Das `<input>`-Element ist so leistungsstark wegen seiner Attribute; das [`type`](#type)-Attribut, das mit Beispielen oben beschrieben ist, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf dem [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interface basiert, teilen sie technisch die gleiche Menge an Attributen. In der Realität haben jedoch die meisten Attribute nur auf eine spezifische Untergruppe von Eingabetypen Auswirkungen. Darüber hinaus hängt die Art und Weise, wie einige Attribute eine Eingabe beeinflussen, vom Eingabetyp ab und wirkt sich unterschiedlich auf verschiedene Eingabetypen aus.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird von einer Liste gefolgt, die jedes Attribut detaillierter beschreibt, zusammen mit den zugehörigen Eingabetypen. Diejenigen, die für die meisten oder alle Eingabetypen gemeinsam sind, werden im Folgenden detaillierter definiert. Attribute, die für bestimmte Eingabetypen einzigartig sind—oder Attribute, die für alle Eingabetypen gemeinsam sind, aber besondere Verhaltensweisen auf einem bestimmten Eingabetyp haben—werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element beinhalten die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                               | Beschreibung                                                                                  |
| --------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                | Hinweis für erwarteten Dateityp in Dateiupload-Steuerelementen                                |
| [`alpha`](#alpha)                             | `color`                                                               | Deckkraft der Farbe                                                                           |
| [`alt`](#alt)                                 | `image`                                                               | alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                               |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                              | Steuert die automatische Großschreibung im eingegebenen Text.                                 |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Button                             | Hinweis für die Formular-Autovervollständigungs-Funktion                                      |
| [`capture`](#capture)                         | `file`                                                                | Medienaufnahme-Eingabemethode in Dateiupload-Steuerelementen                                  |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                   | Ob der Befehl oder das Steuerelement aktiviert ist                                            |
| [`colorspace`](#colorspace)                   | `color`                                                               | Der {{Glossary("Color_space", "Farbraum")}}, der zur Farbauswahl verwendet werden soll        |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                     | Name des Formularfelds zur Verwendung bei der Übermittlung der Richtungsdaten des Elements    |
| [`disabled`](#disabled)                       | alle                                                                  | Ob das Formularelement deaktiviert ist                                                        |
| [`form`](#form)                               | alle                                                                  | Verbindet das Steuerelement mit einem Formularelement                                         |
| [`formaction`](#formaction)                   | `image`, `submit`                                                     | URL zur Verwendung bei der Formularübermittlung                                               |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                     | Formular-Daten-Satz-Codierungstyp zur Verwendung bei der Formularübermittlung                 |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                     | HTTP-Methode zur Verwendung bei der Formularübermittlung                                      |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                     | Umgehung der Formulareingabe-Validierung für die Formularübermittlung                         |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                     | Browsing-Kontext für die Formularübermittlung                                                 |
| [`height`](#height)                           | `image`                                                               | Identisch mit dem height-Attribut für {{htmlelement('img')}}; vertikale Ausdehnung            |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Button       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsoptionen      |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`  | Maximaler Wert                                                                                |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                   | Maximale Länge (Anzahl der Zeichen) des `value`                                               |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`  | Minimaler Wert                                                                                |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                   | Minimale Länge (Anzahl der Zeichen) des `value`                                               |
| [`multiple`](#multiple)                       | `email`, `file`                                                       | Boolean. Ob mehrere Werte erlaubt sind                                                        |
| [`name`](#name)                               | alle                                                                  | Name des Formularelements. Wird mit dem Formular als Namens/Wert-Paar übermittelt             |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                   | Muster, das der `value` erfüllen muss, um gültig zu sein                                      |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`         | Text, der im Formularelement erscheint, wenn dieses noch keinen Wert aufweist                 |
| [`popovertarget`](#popovertarget)             | `button`                                                              | Bezeichnet ein `<input type="button">` als Steuerelement für ein Popover-Element              |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                              | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                              |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Button | Boolean. Der Wert ist nicht bearbeitbar                                                       |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Button                      | Boolean. Ein Wert ist erforderlich oder muss aktiviert sein, damit das Formular absendbar ist |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                   | Größe des Steuerelements                                                                      |
| [`src`](#src)                                 | `image`                                                               | Identisch mit src-Attribut für {{htmlelement('img')}}; Adresse der Bildressource              |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`  | Inkrementelle Werte, die gültig sind                                                          |
| [`type`](#type)                               | alle                                                                  | Typ des Formularelements                                                                      |
| [`value`](#value)                             | alle außer `image`                                                    | Der Wert des Steuerelements. Wenn im HTML angegeben, entspricht dies dem anfänglichen Wert    |
| [`width`](#width)                             | `image`                                                               | Identisch mit width-Attribut für {{htmlelement('img')}}                                       |

Einige zusätzliche nicht standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Gültig nur für den `file`-Eingabetyp, das `accept`-Attribut definiert, welche Dateitypen in einem `file`-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alpha` {{experimental_inline}}
  - : Gültig nur für den `color`-Eingabetyp, das `alpha`-Attribut bietet dem Endbenutzer die Möglichkeit, die Deckkraft der auszuwählenden Farbe festzulegen.

- `alt`
  - : Gültig nur für den `image`-Button, das `alt`-Attribut bietet alternativen Text für das Bild und zeigt den Wert des Attributs an, wenn das Bild [`src`](#src) fehlt oder sich anderweitig nicht laden lässt. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und falls ja, in welcher Weise. Siehe die [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) Seite der globalen Attribute für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert einen durch Leerzeichen getrennten String, der beschreibt, welche Art von Autovervollständigung—falls überhaupt—die Eingabe bieten sollte. Eine typische Implementierung der Autovervollständigung ruft vorherige Werte ab, die in dasselbe Eingabefeld eingegeben wurden, aber es können auch komplexere Formen der Autovervollständigung existieren. Zum Beispiel könnte ein Browser eine Integration mit der Kontaktliste eines Geräts haben, um `email`-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für die erlaubten Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Wirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und gilt für alle Eingabetypen außer `checkbox`, `radio`, `file` oder irgendeinem der Button-Typen.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie sich `autocomplete` für `hidden` leicht von anderen Eingabetypen unterscheidet.

- `autofocus`
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass die Eingabe automatisch Fokus erhalten soll, wenn die Seite vollständig geladen ist (oder wenn das {{HTMLElement("dialog")}}, das das Element enthält, angezeigt wird).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es bei mehr als einem Element angegeben ist, wird das erste Element mit dem Attribut fokussiert.

    Das `autofocus`-Attribut kann nicht bei `hidden`-Eingaben verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren eines Formularelements kann Menschen, die Bildschirmlesesoftware verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmlesegeräte ihren Benutzer ohne Vorwarnung zum Formularelement.

    Verwenden Sie das `autofocus`-Attribut mit Bedacht in Hinblick auf Barrierefreiheit. Das automatische Fokussieren eines Steuerelements kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Geräten mit Touch-Eingabe dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label des fokussierten Formularelements vorliest, wird er nichts vor dem Label ankündigen, und sichtbare Benutzer auf kleinen Geräten werden gleichermaßen den Kontext, der durch den vorausgehenden Inhalt geschaffen wird, verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML-Media-Capture-Spezifikation und nur für den `file`-Eingabetyp gültig, definiert das `capture`-Attribut, welches Medium—Mikrofon, Video oder Kamera—zur Aufnahme einer neuen Datei für den Upload im `file`-Upload-Steuerelement in unterstützenden Szenarien verwendet werden soll. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`
  - : Gültig für sowohl `radio` als auch `checkbox` Typen, ist `checked` ein Boolean-Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, gibt es an, dass der Radiobutton derzeit im Set der gleichnamigen Radiobuttons ausgewählt ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, gibt es an, dass die Checkbox standardmäßig (wenn die Seite geladen wird) aktiviert ist. Es gibt _nicht_ an, ob diese Checkbox momentan aktiviert ist: Wenn der Status der Checkbox geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`-'s `checked` IDL Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Anders als bei anderen Eingabesteuerelementen wird der Wert einer Checkbox oder eines Radiobuttons nur dann in die übermittelten Daten eingeschlossen, wenn sie gegenwärtig `checked` sind. Wenn sie das sind, werden der Name und die Wert(e) der aktivierten Steuerelemente übermittelt.
    >
    > Zum Beispiel, wenn eine Checkbox, deren `name` `fruit` ist, einen `value` von `cherry` hat und die Checkbox aktiviert ist, enthalten die übermittelten Formulardaten `fruit=cherry`. Wenn die Checkbox nicht aktiv ist, wird sie überhaupt nicht in den Formulardaten aufgelistet. Der Standard-`value` für Checkboxes und Radiobuttons ist `on`.

- `colorspace` {{experimental_inline}}
  - : Gültig nur für den `color`-Eingabetyp, wie das `colorspace`-Attribut, spezifiziert den {{Glossary("Color_space", "Farbraum")}}, der von der `type="color"` Eingabe verwendet wird. Mögliche {{Glossary("enumerated", "aufzählbare")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies umfasst [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und {{cssxref("hex-color")}} Werte. Der Farbwert ist auf 8 Bits pro `r-`, `g-` und `b-Komponente` beschränkt. Dies ist der Standard.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3-Farbraum")}}, z. B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen, das `dirname`-Attribut ermöglicht die Übermittlung der Richtungsdaten des Elements. Wenn enthalten, wird das Formularelement mit zwei Namen/Wert-Paaren übermittelt: Das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das oben stehende Formular übermittelt wird, führen die Eingabe sowohl das `name` / `value` Paar `fruit=cherry` als auch das `dirname` / Richtungs-Paar `fruit-dir=ltr` mit sich.
    Weitere Informationen finden Sie im [`dirname` Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren können soll. Deaktivierte Eingaben werden typischerweise mit einer schwächeren Farbe oder in einer anderen Form angezeigt, um zu signalisieren, dass das Feld nicht nutzbar ist.

    Genauer gesagt empfangen deaktivierte Eingaben nicht das `click`-Ereignis und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht durch die Spezifikation erforderlich, wird Firefox standardmäßig [den dynamisch deaktivierten Zustand](/de/docs/Web/HTML/Reference/Attributes/disabled), eines `<input>` über Seitenladungen hinweg beibehalten. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Ein String, der das {{HTMLElement("form")}}-Element spezifiziert, mit dem die Eingabe verknüpft ist (d.h. sein **Formulareigentümer**). Der Wert dieses Strings, falls vorhanden, muss mit dem [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht spezifiziert ist, wird das `<input>`-Element mit dem nächstgelegenen umschließenden Formular verknüpft, falls vorhanden.

    Das `form`-Attribut erlaubt es, eine Eingabe an beliebiger Position im Dokument zu platzieren, sie jedoch einem an anderer Stelle im Dokument vorhandenen Formular hinzuzufügen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular assoziiert sein.

- `formaction`
  - : Gültig nur für die `image` und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formenctype`
  - : Gültig nur für die `image` und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formmethod`
  - : Gültig nur für die `image` und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formnovalidate`
  - : Gültig nur für die `image` und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formtarget`
  - : Gültig nur für die `image` und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `height`
  - : Gültig nur für den `image`-Eingabe-Button, die `height` ist die Höhe der Bilddatei, die angezeigt werden soll, um den graphischen Absendebutton darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, es definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als der Wert des {{htmlelement('label')}}'s `for`-Attribut verwendet, um das Label mit dem Formularelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, es bietet einen Hinweis an Browser auf die Art der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Werte beinhalten `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der Wert, der dem `list`-Attribut angegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements sein, das sich im selben Dokument befindet. Das `<datalist>` bietet eine Liste von vordefinierten Werten an, die dem Benutzer für diese Eingabe vorgeschlagen werden. Jegliche Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut den Spezifikationen wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder einem der Button-Typen unterstützt.

    Der Benutzer kann je nach Browser eine benutzerdefinierte Farbpalette vorgeschlagen erhalten, Tick-Marken entlang einer Skala oder sogar ein Eingabefeld, das sich wie ein {{HTMLElement("select")}}-Element verhält, aber die Angabe nicht aufgeführter Werte erlaubt. Schauen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den größten Wert im Bereich der zulässigen Werte. Wenn der eingegebene [`value`](#value) den festgelegten Maximalwert überschreitet, schlägt die [Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, dann hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich möglicherweise umschließt; zum Beispiel erlaubt dies die Angabe eines Zeitbereichs von 22:00 bis 4:00 Uhr.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die maximale Zeichenkette (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein Ganzzahlwert von 0 oder höher sein. Wenn kein `maxlength` angegeben oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Das Eingabefeld wird die [Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des eingegebenen Textes in das Feld länger als `maxlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das `maxlength`-Attribut erlaubt ist. Die Beschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den niedrigsten Wert im Bereich der zulässigen Werte. Wenn der eingegebene [`value`](#value) in das Element niedriger ist als dieser, schlägt die [Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, dann hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht-leerer Wert weniger als das Minimum, das durch das `min`-Attribut erlaubt ist, beträgt, verhindert die Beschränkung eine Formularübermittlung. Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich möglicherweise umschließt; zum Beispiel erlaubt dies die Angabe eines Zeitbereichs von 22:00 bis 4:00 Uhr.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die minimale Zeichenfolge (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt die [Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Eingabefeld eingegebenen Textes weniger als `minlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} lang ist, was die Formularübermittlung verhindert. Die Beschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das Boolean-Attribut `multiple`, wenn gesetzt, bedeutet, dass der Benutzer kommagetrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit der `file`-Eingabe auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`
  - : Ein String, der einen Namen für das Eingabesteuerelement spezifiziert. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als erforderliches Attribut (auch wenn es nicht so ist). Wenn eine Eingabe keinen spezifizierten `name` oder einen leeren `name` hat, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, nicht ausgewählte Radiobuttons, nicht angekreuzte Checkboxes und Reset-Buttons werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_`: Wenn es als Name eines `<input>` Elements des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "User-Agent")}} auf die beim Übermitteln des Formulars verwendete Zeichencodierung gesetzt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erstellt ein einzigartiges Verhalten für Radiobuttons.

    Es kann nur ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons auf einmal ausgewählt sein. Durch das Wählen eines beliebigen Radiobuttons in dieser Gruppe wird jeder derzeit ausgewählte Radiobutton in derselben Gruppe automatisch abgewählt. Der Wert dieses einen ausgewählten Radiobuttons wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Wenn man in eine Reihe gleichnamiger Radiobuttons eintritt, erhält derjenige, der ausgewählt ist, den Fokus. Wenn sie in der Quellordnung nicht gruppiert sind, wird das Fokussieren der Gruppe ab wann begonnen, wenn der erste dieser Gruppe erreicht wird, das auch die nicht ausgewählten Radiobuttons in der Gruppe überspringt. Mit anderen Worten, wenn einer ausgewählt ist, wird das Tabben die nicht ausgewählten Radiobuttons in der Gruppe überspringen. Wenn keiner ausgewählt ist, erhält die Radiobuttongruppe den Fokus, wenn der erste Button in der gleichnamigen Gruppe erreicht wird.

    Sobald einer der Radiobuttons in einer Gruppe den Fokus hat, wird mit den Pfeiltasten durch alle Radiobuttons desselben Namens navigiert, auch wenn die Radiobuttons nicht in der Quellreihenfolge zusammengefasst sind.

    Wenn einem Eingabeelement ein `name` zugewiesen wird, wird dieser Name zu einer Eigenschaft des Elements [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) des besitzenden Formularelements. Wenn Sie ein Eingabeelement haben, dessen `name` auf `guest` gesetzt ist und ein anderes, dessen `name` `hat-size` lautet, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld und `hatSize` das Objekt für das `hat-size`-Feld sein.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer eingebauten Eigenschaft des Formulars entspricht, da Sie dann die vordefinierte Eigenschaft oder Methode mit dieser Referenz auf das entsprechende Eingabefeld überschreiben.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, das `pattern`-Attribut wird verwendet, um einen regulären Ausdruck zu erstellen, den der Eingabe-`value` erfüllen muss, damit der Wert die [Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie es in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Keine Schrägstriche dürfen um den Mustertext angegeben werden. Wenn der reguläre Ausdruck erstellt wird:
    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, sodass es erforderlich ist, dass die Übereinstimmung gegen den _gesamten_ Eingabewert erfolgt, d.h. `^(?:<pattern>)$`.
    2. das `'v'`-Flag angegeben, sodass das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn ein gültiges Muster vorhanden ist und ein nicht leerer Wert nicht mit dem Muster übereinstimmt, wird durch die Beschränkung die Formularübermittlung verhindert. Wenn [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der erstellte reguläre Ausdruck gegen jeden kommagetrennten Wert abgestimmt.

    > [!NOTE]
    > Wenn das `pattern`-Attribut verwendet wird, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe bereitstellen. Sie können auch ein [`title`](#title)-Attribut hinzufügen, um zu erläutern, welche Anforderungen notwendig sind, um das Muster zu erfüllen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist erforderlich für Barrierefreiheit. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, das `placeholder`-Attribut bietet einen kurzen Hinweis an den Benutzer, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf den erwarteten Datentyp gibt, eher als eine Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenvorschübe enthalten. Wenn beispielsweise erwartet wird, dass ein Feld den Vornamen eines Benutzers erfasst und das Label "Vorname" lautet, könnte eine geeignete Platzhalterangabe "z.B., Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten zur Erklärung Ihres Formulars und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`
  - : Wandelt ein `<input type="button">`-Element in einen Popover-Steuerknopf um; nimmt die ID des zu steuernden Popover-Elements als seinen Wert. Details finden Sie auf der [Popover-API](/de/docs/Web/API/Popover_API) Einstiegsseite. Die Etablierung einer Beziehung zwischen einem Popover und seinem Aufruferbutton durch das `popovertarget`-Attribut hat zwei weitere nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Aufrufer und platziert das Popover in einer logischen Position in der Tastaturnavigationsreihenfolge, wenn es angezeigt wird. Dies macht den Popover für Benutzer von Tastaturen und Hilfstechnologien (AT) zugänglicher (siehe auch [Popover-Accessibilitätsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Anker-Referenz zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerelementen mit [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Anker-Positionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

- `popovertargetaction`
  - : Gibt die Aktion an, die an einem Popover-Element, das von einem `<input type="button">`-Steuerknopf gesteuert wird, ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Der Button wird einen angezeigten Popover ausblenden. Wenn Sie versuchen, einen bereits ausgeblendeten Popover auszublenden, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button wird einen ausgeblendeten Popover anzeigen. Wenn Sie versuchen, einen bereits angezeigten Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button wird einen Popover zwischen sichtbar und unsichtbar umschalten. Wenn der Popover unsichtbar ist, wird er angezeigt; wenn der Popover sichtbar ist, wird er ausgeblendet. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die standardmäßige Aktion, die vom Steuerknopf ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass der Benutzer den Wert der Eingabe nicht bearbeiten darf. Das `readonly`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` Eingabetypen unterstützt.

    Siehe das [HTML Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) für weitere Informationen.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, besagt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das besitzende Formular übermittelt werden kann. Das `required`-Attribut wird von `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` Eingaben unterstützt.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) und das [HTML Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für weitere Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`, das `size`-Attribut gibt an, wie viel der Eingabe angezeigt wird. Im Grunde genommen hat es dieselbe Wirkung wie das Setzen der CSS [`width`](/de/docs/Web/CSS/width)-Eigenschaft, mit ein paar Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es die Anzahl der Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20` und für andere ist es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang über das `size`-Attribut.

- `src`
  - : Gültig nur für den `image`-Eingabe-Button, das `src` ist ein String, der die URL der Bilddatei spezifiziert, um den graphischen Absendebutton darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut ist eine Zahl, die die Granularität spezifiziert, die der Wert einhalten muss. Nur Werte, die ein ganzzahliges Vielfaches der Schritte vom Schrittgrundwert sind, sind gültig. Der Schrittgrundwert ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), wenn dieser spezifiziert ist, andernfalls [`value`](#value), oder `0`, wenn keiner davon bereitgestellt ist (außer für `week`, welches einen Standard-Schrittgrundwert von −259.200.000 hat, was den Beginn der `1970-W01` Woche repräsentiert).

    Wenn nicht explizit enthalten:
    - `step` hat standardmäßig den Wert 1 für `number` und `range`.
    - Jeder Datum/Uhrzeit-Eingabetyp hat einen Standard-Schrittwert, der für den Typ angemessen ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein—Ganzzahl oder Gleitkomma—oder der spezielle Wert `any`, der bedeutet, dass kein Schritte gemeint sind, und jeder Wert erlaubt ist (es sei denn, es gibt andere Einschränkungen, wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann sind alle geraden Ganzzahlen, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig `1` ist. Für `4.2`, um gültig zu sein, hätte `step` auf `any`, 0.1, 0.2, gesetzt oder der `min`-Wert hätte eine Zahl sein müssen, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht mit der Schrittkonfiguration übereinstimmen, wird der Wert in der Beschränkungsvalidierung als ungültig betrachtet und wird die `:invalid`-Pseudoklasse erfüllen.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- `tabindex`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus erhalten kann (fokussierbar ist) und ob es an der sequentiellen Tastaturnavigation teilnehmen sollte. Da alle Eingabetypen mit Ausnahme des `hidden`-Typs fokussierbar sind, sollte dieses Attribut nicht bei Formularelementen verwendet werden, da dies eine Verwaltung der Fokusreihenfolge für alle Elemente im Dokument erforderte, was bei unsachgemäßer Handhabung die Benutzerfreundlichkeit und Barrierefreiheit beeinträchtigen könnte.

- `title`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text zur Darstellung von Empfehlung Informationen enthält, die sich auf das Element beziehen, zu dem es gehört. Diese Informationen können typischerweise, aber nicht unbedingt, den Benutzern als Tooltip präsentiert werden. Der Titel sollte NICHT zur primären Erklärung des Zwecks des Formularelements verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut des Formularelements gesetzt ist. Siehe [Labels](#labels) weiter unten.

- `type`
  - : Ein String, der die Art der Darstellung des Steuerelements angibt. Um beispielsweise ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet, sodass ein Klartext-Eingabefeld erstellt wird.

    Zulässige Werte sind unter [Eingabetypen](#input_types) oben aufgeführt.

- `value`
  - : Der Wert des Eingabesteuerelements. Wenn im HTML spezifiziert, ist dies der Anfangswert, und danach kann er jederzeit geändert oder abgerufen werden, indem JavaScript verwendet wird, um auf die jeweilige [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft `value` zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch bei `checkbox`, `radio` und `hidden`-Typen als verpflichtend angesehen werden.

- `width`
  - : Gültig nur für den `image`-Eingabe-Button, das `width` ist die Breite der anzuzeigenden Bilddatei, die den graphischen Absendebutton darstellt. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch auf einigen Browsern verfügbar. Grundsätzlich sollten Sie die Verwendung vermeiden, es sei denn, es gibt keine Alternative.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden, um Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer den Wert des Feldes noch bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Eingabetaste</kbd> oder die <kbd>Returntaste</kbd> drückt, während er das Feld bearbeitet; dieser String wird verwendet, um ein geeignetes Label für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Orientierung der Bereichssteuerung. <strong>Nur Firefox.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Einträgen, die im Drop-Down-Menü der vorherigen Suchanfragen angezeigt werden sollten. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob der Benutzer nur ein Verzeichnis (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) auswählen darf.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine WebKit und Blink Erweiterung (wird daher von Safari, Opera, Chrome, etc. unterstützt), das, wenn vorhanden, den {{Glossary("user_agent", "User-Agent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das die Suchbox repräsentiert. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht spezifiziert ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer eine Suche explizit initiiert (z. B. durch Drücken der <kbd>Eingabe</kbd>- oder der <kbd>Return</kbd>-Taste, während er das Feld bearbeitet).

    Das `search`-Ereignis ist rate-begrenzt, sodass es nicht häufiger als in einem vom Implementierungs-Definierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}
  - : Ähnlich zur nicht-standardisierten CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente betrifft, definiert das `orient`-Attribut die Ausrichtung der Skala für die Range-Steuerung. Werte umfassen `horizontal`, was bedeutet, dass die Skala horizontal angezeigt wird, und `vertical`, was bedeutet, dass die Skala vertikal angezeigt wird. Siehe [Erstellung vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularelemente.

- `results` {{non-standard_inline}}
  - : Das `results` Attribut—unterstützt nur von Safari—ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Drop-Down-Menü des `<input>` Elements für vorherige Suchanfragen angezeigt werden sollen.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben ist, wird die Standard maximale Anzahl von Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass nur Verzeichnisse durch den Benutzer im Datei-Picker-Interface ausgewählt werden dürfen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie in Firefox 50 und später nutzbar. Aber obwohl es relativ breite Unterstützung hat, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM repräsentiert. Ebenfalls verfügbar sind die Methoden, die von den Elternschnittstellen [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) spezifiziert sind.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben und ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis beim Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben, ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis beim Element ausgelöst und (wenn das Ereignis nicht abgebrochen wird) das Problem dem Benutzer gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt (wie z. B. einem visuellen Farbwähler oder Kalenderdatumseingaben) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine gegebene Zeichenfolge. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der bestehende Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines Texteingabeelements aus. Tut nichts für Eingaben, die nicht als Texteingabefelder präsentiert werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browserauswahl-Dialog für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt ist, aber durch einen Knopfdruck oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Eigenschaften, die auf Nicht-Formularelemente nicht anwendbar sind. Es gibt CSS-Selektoren, die speziell auf Formularelemente basieren, die auf ihre UI-Features abzielen, auch bekannt als UI-Pseudoklassen. Das Input-Element kann auch durch den Typ mit Attributselektoren angesprochen werden. Einige Eigenschaften sind ebenfalls besonders nützlich.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudoklassen relevant für das
    <code>&#x3C;input></code>
    element:
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
        Jedes derzeit aktivierbare Element, das fokussiert werden kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierbaren Zustand hat, was bedeutet, dass es, wenn es nicht deaktiviert wäre, fokussiert werden könnte oder aktivierbar wäre.
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
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, die noch keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die die Standardauswahl in einer Gruppe verwandter Elemente sind. Passt zu {{HTMLElement("input/checkbox", "checkbox")}}- und {{HTMLElement("input/radio", "radio")}}-Input-Typen, die beim Laden oder Rendern der Seite aktiviert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}}- und {{HTMLElement("input/radio", "radio")}}-Input-Typen, die derzeit aktiviert sind (und die {{HTMLElement("option")}} in einem {{HTMLElement("select")}}, die derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren Unstimmigkeitseigenschaft von JavaScript auf true gesetzt wurde, {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Radiobuttons mit demselben Namen im Formular nicht aktiviert sind, und {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die die Restriktionsvalidierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die die Restriktionsvalidierung angewendet wird und die derzeit ungültig sind. Passt zu einem Formularelement, dessen Wert nicht den durch seine Attribute festgelegten Einschränkungen entspricht, z. B. <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der vom <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribut sowie dem <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der vom <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribut festgelegten Bereichsgrenzen liegt oder das der <a href="#step"><code>step</code></a>-Einschränkung nicht entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat. Passt nur zu Elementen, die erforderlich sein können. Das Attribut, das auf ein nicht erforderliches Element angewendet wird, führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a>-Attribut NICHT gesetzt hat. Passt nicht zu Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch bei der Unschärfe aktiviert. Passt zu ungültiger Eingabe, jedoch nur nach Benutzereingriffen, wie durch Fokussieren auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular mit dem ungültigen Steuerelement abzuschicken.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Auswahldialog für den Benutzer anzeigen, um einen Wert auszusuchen (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — aber nur, wenn das Element im offenen Zustand ist, d.h. wenn der Auswahldialog angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudo-Klassen Beispiel

Wir können ein Kontrollkästchen-Label basierend darauf gestalten, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} der {{htmlelement('label')}} , die unmittelbar nach einer aktivierten Eingabe kommt. Wir haben keine Styles angewendet, wenn der `input` nicht aktiviert ist.

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

### Attribut-Selektoren

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren stimmen mit Elementen basierend entweder nur auf der Anwesenheit eines Attributs oder auf dem Wert eines gegebenen Attributs überein.

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

Standardmäßig ist das Erscheinungsbild von Placeholder-Text transluzent oder hellgrau. Das {{cssxref('::placeholder')}}-Pseudoelement ist der [`placeholder`-Text](#placeholder) der Eingabe. Es kann mit einem begrenzten Teilmenge von CSS-Eigenschaften gestyled werden.

```css
::placeholder {
  color: blue;
}
```

Nur die Teilmenge von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}}-Pseudoelement angewendet werden kann, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor enthält.

### caret-color

Eine spezifische Eigenschaft für Texteingabe-zusammenhängende Elemente ist die CSS-{{cssxref("caret-color")}} Eigenschaft, die es ermöglicht, die Farbe des Texteingabe-Carets festzulegen:

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

### feldgrößenanpassung

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größeverhalten von Formulareingaben zu steuern (d.h. sie haben standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und Formularelementen zu erlauben, sich in der Größe anzupassen, um ihren Inhalt zu passen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt umhüllen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabefeldern, die direkte Texteingabe akzeptieren (zum Beispiel, [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file), und {{htmlelement("textarea")}}-Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. In diesem Fall können die Position und Größe des Elements und die Positionierung innerhalb ihres Rahmens mit den CSS-{{cssxref("object-position")}}- und {{cssxref("object-fit")}}-Eigenschaften angepasst werden.

### Styling

Für weitere Informationen über das Hinzufügen von Farbe zu Elementen in HTML siehe:

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Styling-Optionen für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels sind erforderlich, um unterstützenden Text mit einem `<input>` zu assoziieren. Das {{HTMLElement("label")}}-Element bietet erklärende Informationen zu einem Formularfeld, das _immer_ geeignet ist (abgesehen von irgendwelchen Layout-Bedenken, die Sie haben). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Assoziierte Labels

Das semantische Paaren von `<input>`- und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Bildschirmlesegeräte. Indem sie sie durch das [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut von `<label>` koppeln, binden Sie das Label an das Eingabeelement auf eine Weise, die es Bildschirmlesern erlaubt, Eingaben den Benutzern präziser zu beschreiben.

Es reicht nicht aus, einfachen Text direkt neben dem `<input>`-Element zu haben. Vielmehr erfordert die Benutzerfreundlichkeit und Barrierefreiheit die Aufnahme eines expliziten oder impliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist unzugänglich: Es besteht keine Beziehung zwischen der Aufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label einen größeren "Treffer"-Bereich für Maus- und Touchscreen-Benutzer, um darauf zu klicken oder es zu berühren. Durch die Paarung eines `<label>` mit einem `<input>` wird durch Klick auf eines von beiden das `<input>` fokussiert. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu "labeln", wird dies nicht passieren. Wenn die Aufforderung Teil des Aktivierungsbereiches für die Eingabe ist, ist dies hilfreich für Menschen mit motorischen Störungen.

Als Webentwickler ist es wichtig, dass wir niemals davon ausgehen, dass Menschen alle die Dinge wissen, die wir wissen. Die Diversität der Personen, die das Web nutzen – und damit Ihre Website – garantiert praktisch, dass einige Besucher Ihrer Website Variationen in Denkprozessen und/oder Umständen haben, was dazu führt, dass sie Ihre Formulare sehr unterschiedlich von Ihnen interpretieren können, wenn nicht klare und korrekt präsentierte Labels vorhanden sind.

#### Platzhalter sind nicht barrierefrei

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text anzugeben, der im Inhaltsbereich des `<input>`-Elements angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, weil es das nicht ist. Der Platzhalter dient dazu, einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Der Platzhalter ist für Bildschirmlesegeräte nicht zugänglich, und sobald der Benutzer einen Text in das Eingabesteuerungselement eingibt oder wenn das Formularelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitenübersetzungsfunktionen können Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nur, wenn Sie es nicht vermeiden können. Wenn Sie ein `<input>`-Element labeln müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Clientseitige Validierung

> [!WARNING]
> Clientseitige Validierung ist nützlich, garantiert aber _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, verifizieren Sie sie _immer_ auch auf der Serverseite und senden Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400), wenn das Format ungültig ist.

Neben der Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}}- oder {{cssxref(":invalid")}}-UI-Zuständen aufgrund des aktuellen Zustands jeder Eingabe zu stylen, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser auch eine clientseitige Validierung bei (versuchter) Formularübermittlung an. Bei der Formularübermittlung, wenn es ein Formularelement gibt, das die Restriktionsvalidierung nicht besteht, werden unterstützende Browser eine Fehlermeldung bei dem ersten ungültigen Formularelement anzeigen; sie zeigen eine Standardmeldung basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Nachricht an.

Einige Eingabetypen und andere Attribute legen Grenzen dafür fest, welche Werte für eine bestimmte Eingabe gültig sind. Beispielsweise bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Es könnten mehrere Fehler auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Ganzzahl (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für Eingabetypen, deren Bereich von möglichen Werten periodisch ist (d.h. am höchsten möglichen Wert, fangen die Werte wieder von vorne an, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max)- und [`min`](#min)-Eigenschaften umgekehrt sind, was darauf hinweist, dass der Bereich der erlaubten Werte bei `min` beginnt, um das niedrigste mögliche Wert geht, dann weiter bis `max` erreicht wird. Dies ist besonders nützlich für Daten und Zeiten, wie zum Beispiel, wenn Sie den Bereich von 20 Uhr bis 8 Uhr erlauben möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und deren Werte können zu einem spezifischen Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Validitätsobjekterrors basieren auf den <code>&lt;input&gt;</code>-Attributen und deren Werten:
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
        Tritt auf, wenn der Wert größer ist als der durch das <code>max</code> Attribut definierte Höchstwert
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen die durch die <code>maxlength</code>-Eigenschaft erlaubte Anzahl überschreitet
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der durch das <code>min</code> Attribut definierte Mindestwert
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code> Property geforderte Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Pattern-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> diesem nicht entspricht.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, der Wert jedoch <code>null</code> ist oder ein Radio- oder Kontrollkästchen nicht ausgewählt ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Der Inkrement-Standard ist <code>1</code>, sodass nur Ganzzahlen bei <code>type="number"</code> gültig sind, wenn kein Schritt angegeben ist. <code>step="any"</code> wird diesen Fehler niemals verursachen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, z. B. eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required`-Attribut hat, ist kein Wert oder ein leerer String nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, führt ein leerer String nicht zu einem Fehler.

Wir können Grenzen festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer benachrichtigen, wenn beim Absenden des Formulars ein Fehler vorliegt.

Zusätzlich zu den im obigen Diagramm beschriebenen Fehlern enthält die `validityState`-Schnittstelle die Booleschen Leseeigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Für jede dieser Booleschen Eigenschaften weist ein Wert von `true` darauf hin, dass der spezifische Grund, aus dem die Validierung möglicherweise fehlgeschlagen ist, wahr ist, mit Ausnahme der Eigenschaft `valid`, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

Wenn ein Fehler vorliegt, werden unterstützende Browser sowohl den Benutzer benachrichtigen als auch das Formular daran hindern, gesendet zu werden. Eine Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen wahrheitsgemäßen Wert gesetzt wird (alles außer dem leeren String oder `null`), wird das Formular am Absenden gehindert. Wenn es keine benutzerdefinierte Fehlermeldung gibt und keine der anderen Eigenschaften wahr ist, wird `valid` wahr sein, und das Formular kann abgesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Fehlermeldung auf den leeren String setzt, ist wichtig. Wenn der Benutzer einen Fehler macht und die Validität gesetzt wird, wird das Absenden fehlschlagen, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierten Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die verfügbare [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) auf `<input>` (und verwandten) Elementen verwenden. Nehmen wir das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfeatures werden dies dazu veranlassen, eine Standardfehlermeldung zu erzeugen, wenn Sie versuchen, das Formular mit entweder keinem gültigen gefüllten Wert oder einem Wert, der nicht dem `pattern` entspricht, abzuschicken.

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

Das Beispiel rendert wie folgt:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir prüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die Methode `checkValidity()` über den `input`-Ereignis-Handler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst, und die `invalid`-Ereignis-Handler-Funktion wird ausgeführt. In dieser Funktion ermitteln wir, ob der Wert ungültig ist, weil er leer ist, oder weil er nicht dem Muster entspricht, wobei wir einen `if ()`-Block verwenden und eine benutzerdefinierte Validitätsfehlermeldung festlegen.
- Infolgedessen wird, wenn der Eingabewert ungültig ist, wenn die Schaltfläche "Absenden" gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er wie erwartet abgesendet. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit storniert werden, indem `setCustomValidity()` mit einem leeren Stringwert aufgerufen wird. Wir tun dies daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Gültigkeit zuvor festgelegt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie derzeit beim Absenden einen gültigen Wert enthält.

> [!NOTE]
> Validieren Sie immer Eingabebeschränkungen sowohl clientseitig als auch serverseitig. Die Beschränkungsvalidierung entfernt nicht die Notwendigkeit der Validierung auf der _Serverseite_. Ungültige Werte können immer noch von älteren Browsern oder von böswilligen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte ein proprietäres Fehlerattribut — `x-moz-errormessage` — über viele Versionen hinweg, das es erlaubte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise festzulegen. Dieses wurde ab Version 66 entfernt (siehe [Firefox Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der Lokalisierung ab. In einigen Lokalisierungen ist 1.000,00 eine gültige Zahl, während in anderen Lokalisierungen die gültige Eingabe 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken zur Bestimmung der Lokalisierung, um die Benutzereingabe zu validieren (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut auf dem Element oder einem seiner Eltern festgelegt ist.
- Versuchen Sie die Sprache, die durch einen `Content-Language` HTTP-Header festgelegt ist. Oder,
- Wenn keine festgelegt ist, verwenden Sie die Browsersprache.

## Barrierefreiheit

### Labels

Beim Einfügen von Eingaben ist es eine Anforderung zur Barrierefreiheit, Labels hinzuzufügen. Dies ist notwendig, damit diejenigen, die unterstützende Technologien verwenden, erkennen können, wofür die Eingabe ist. Außerdem erhält das Klicken oder Tippen auf ein Label den Fokus auf das mit dem Label verbundene Formularelement. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erweitern den Bereich, den ein Benutzer klicken oder berühren kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radiobuttons und Kontrollkästchen, die klein sind. Weitere Informationen zu Labels im Allgemeinen finden Sie unter [Labels](#labels).

Das folgende Beispiel zeigt, wie das `<label>` mit einem `<input>`-Element im oben genannten Stil verbunden werden kann. Sie müssen dem `<input>`-Element ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert mit der ID des Eingabefelds übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen Bereich bieten, der groß genug ist, um sie leicht zu aktivieren. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die nicht-präzise Eingabeformen wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Verstehen des Erfolgs-Kriteriums 2.5.5: Zielgröße | W3C Verstehen von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flusseinhalte</a>, aufgelistet, übermittelbar, zurücksetzbares, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalte</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann geltendes Element, fühlbares Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Entfernung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalte</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a> wenn benutzt
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
            oder <code>text</code> mit `list`-Attribut: keine
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
- [Die nativen Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formular-Restriktionsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Styling HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
