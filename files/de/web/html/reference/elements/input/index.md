---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Das **`<input>`**-[HTML](/de/docs/Web/HTML) Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu erfassen; eine Vielzahl von Arten von Eingabedaten und Steuerungswidgets sind verfügbar, abhängig von dem Gerät und dem {{Glossary("user_agent", "Benutzeragent")}}. Das `<input>`-Element ist eines der leistungsfähigsten und komplexesten in ganz HTML aufgrund der schieren Anzahl von Kombinationen aus Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich abhängig vom Wert seines [`type`](#type)-Attributs, daher werden die verschiedenen Typen in ihren eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird standardmäßig der Typ `text` übernommen.

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
        Ein Steuergerät zum Angeben einer Farbe; öffnet einen Farbwähler, wenn es in unterstützenden Browsern aktiv ist.
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
        Eine Steuerung zur Eingabe eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datepicker oder numerische Räder für Jahr, Monat, Tag, wenn es in unterstützenden Browsern aktiv ist.
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
        Eine Steuerung zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datepicker oder numerische Räder für Datum- und Zeitkomponenten, wenn es in unterstützenden Browsern aktiv ist.
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
        <code>text</code>-Eingabefeld, hat jedoch Validierungsparameter und relevante
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
        Eine Steuerung, die es dem Benutzer ermöglicht, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Arten von Dateien zu definieren, die die Steuerung auswählen kann.
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
        Eine Steuerung, die nicht angezeigt wird, deren Wert jedoch an den Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist versteckt!
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
        Eine grafische <code>submit</code>-Schaltfläche. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert ist.
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
      <td>Eine Steuerung zur Eingabe eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Eine Steuerung zur Eingabe einer Zahl. Zeigt einen Spinner und fügt eine Standardvalidierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein einzeiliges Texteingabefeld, dessen Wert verborgen ist.
        Warnt den Benutzer, wenn die Website nicht sicher ist.
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
        Eine Optionsschaltfläche, die es ermöglicht, einen einzelnen Wert aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Eine Steuerung zur Eingabe einer Zahl, deren genauer Wert nicht wichtig ist.
        Wird als Bereichs-Widget angezeigt, das standardmäßig auf den Mittelwert eingestellt ist.
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
        Eine Schaltfläche, die den Inhalt des Formulars auf Standardwerte zurücksetzt. Nicht empfohlen.
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
        Ein einzeiliges Texteingabefeld zur Eingabe von Suchzeichenfolgen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Bei unterstützenden Browsern kann ein Löschsymbol enthalten sein, das verwendet werden kann, um das Feld zu leeren. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste.
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
        Eine Steuerung zur Eingabe einer Telefonnummer. Zeigt eine Telefonnummerntastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Der Standardwert. Ein einzeiliges Texteingabefeld. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt.
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
      <td>Eine Steuerung zur Eingabe eines Zeitwerts ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabefeld, hat jedoch Validierungsparameter und relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Eine Steuerung zur Eingabe eines Datums, das aus einer Kalenderjahrnummer und einer Wochennummer besteht, ohne Zeitzone.
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
        Eine Steuerung zur Eingabe eines Datums und einer Zeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so leistungsfähig aufgrund seiner Attribute; das [`type`](#type)-Attribut, das oben mit Beispielen beschrieben wurde, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch das exakt gleiche Set von Attributen. In Wirklichkeit haben jedoch die meisten Attribute einen Effekt nur auf einen spezifischen Teilmengen von Eingabetypen. Darüber hinaus variiert die Auswirkung einiger Attribute je nach Eingabetyp, was unterschiedliche Eingabetypen auf verschiedene Weisen beeinflusst.

Dieser Abschnitt enthält eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird von einer Liste gefolgt, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie assoziiert sind. Attribute, die bei den meisten oder allen Eingabetypen üblich sind, werden unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind—oder Attribute, die bei allen Eingabetypen üblich sind, aber spezielles Verhalten bei einem bestimmten Eingabetyp haben—sind stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                 | Beschreibung                                                                                              |
| --------------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                  | Hinweis auf erwarteten Dateityp in Dateiupload-Steuerungen                                                |
| [`alpha`](#alpha)                             | `color`                                                                 | Opazität der Farbe                                                                                        |
| [`alt`](#alt)                                 | `image`                                                                 | alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                           |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email`, und `password`                               | Steuert die automatische Großschreibung im eingegebenen Text.                                             |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio`, und Buttons                             | Hinweis für die Autovervollständigungsfunktion von Formularen                                             |
| [`capture`](#capture)                         | `file`                                                                  | Eingabemethode zur Medienerfassung in Dateiupload-Steuerungen                                             |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                     | Ob der Befehl oder die Steuerung aktiviert ist                                                            |
| [`colorspace`](#colorspace)                   | `color`                                                                 | Der {{Glossary("Color_space", "Farbraum")}}, der zum Auswählen des Farbwerts verwendet werden soll        |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                       | Name des Formularfelds zum Senden der Richtung des Elements bei Formularübertragungen                     |
| [`disabled`](#disabled)                       | alle                                                                    | Ob die Steuerung des Formularfelds deaktiviert ist                                                        |
| [`form`](#form)                               | alle                                                                    | Verknüpft die Steuerung mit einem Formularelement                                                         |
| [`formaction`](#formaction)                   | `image`, `submit`                                                       | URL zur Verwendung bei der Formularübertragung                                                            |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                       | Kodierungstyp des Formulardatensatzes, der bei der Formularübertragung verwendet werden soll              |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                       | HTTP-Methode, die bei der Formularübertragung verwendet werden soll                                       |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                       | Umgeht die Validierung der Formularsteuerung bei der Formularübertragung                                  |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                       | Browsing-Kontext für die Formularübertragung                                                              |
| [`height`](#height)                           | `image`                                                                 | Dasselbe wie das height-Attribut für {{htmlelement('img')}}; vertikale Dimension                          |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio`, und Buttons       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigung                           |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Maximaler Wert                                                                                            |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Maximale Länge (Anzahl der Zeichen) von `value`                                                           |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Minimaler Wert                                                                                            |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Minimale Länge (Anzahl der Zeichen) von `value`                                                           |
| [`multiple`](#multiple)                       | `email`, `file`                                                         | Boolean. Ob mehrere Werte erlaubt sind                                                                    |
| [`name`](#name)                               | alle                                                                    | Name der Formularsteuerung. Wird mit dem Formular als Teil eines Namens/Werte-Paars übermittelt           |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                     | Muster, das der `value` entsprechen muss, um gültig zu sein                                               |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`           | Text, der im Steuerelement angezeigt wird, wenn kein Wert gesetzt ist                                     |
| [`popovertarget`](#popovertarget)             | `button`                                                                | Definiert ein `<input type="button">` als Steuerung für ein Popover-Element                               |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                | Gibt an, welche Aktion ein Popover-Steuerelement ausführen soll                                           |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio`, und Buttons | Boolean. Der Wert ist nicht editierbar                                                                    |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color`, und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss überprüft werden, damit das Formular übermittelt werden kann |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                     | Größe der Steuerung                                                                                       |
| [`src`](#src)                                 | `image`                                                                 | Dasselbe wie das `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                     |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Inkrementale Werte, die gültig sind                                                                       |
| [`type`](#type)                               | alle                                                                    | Typ der Formularsteuerung                                                                                 |
| [`value`](#value)                             | alle außer `image`                                                      | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht dem Anfangswert                                |
| [`width`](#width)                             | `image`                                                                 | Dasselbe wie das `width`-Attribut für {{htmlelement('img')}}                                              |

Einige zusätzliche nicht standardisierte Attribute sind nach der Beschreibung der Standardattribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Nur für den `file` Eingabetyp gültig, definiert das `accept`-Attribut, welche Dateitypen in einer Steuerung zur Dateiauswahl ausgewählt werden können. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alpha` {{experimental_inline}}
  - : Nur für den `color` Eingabetyp gültig, bietet das `alpha`-Attribut dem Benutzer die Möglichkeit, die Opazität der ausgewählten Farbe einzustellen.

- `alt`
  - : Gültig nur für den `image` Button, bietet das `alt`-Attribut alternativen Text für das Bild, das den Wert des Attributs anzeigt, wenn die Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Weitere Informationen finden Sie auf der globalen Attributseite für [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolean-Attribut!) Das `autocomplete`-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge, die beschreibt, welche, wenn überhaupt, Autovervollständigungsfunktionen das Eingabefeld bereitstellen soll. Eine typische Implementierung von Autovervollständigung erinnert sich an zuvor eingegebene Werte in demselben Eingabefeld, aber es können auch komplexere Formen der Autovervollständigung existieren. Beispielsweise könnte ein Browser mit der Kontaktliste eines Geräts integrieren, um `email`-Adressen in einem E-Mail-Eingabefeld zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für erlaubte Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, und `password`. Dieses Attribut hat keinen Effekt auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben und ist somit gültig für alle Eingabetypen außer `checkbox`, `radio`, `file` oder einer der Schaltflächentypen.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Passwortsicherheit und wie `autocomplete` für `hidden` leicht unterschiedlich ist im Vergleich zu anderen Eingabetypen.

- `autofocus`
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass das Eingabefeld automatisch den Fokus erhalten sollte, wenn die Seite geladen wurde (oder wenn das {{HTMLElement("dialog")}} mit dem Element angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es bei mehr als einem Element gesetzt ist, erhält das erste Element mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Automatisches Fokussieren einer Formularsteuerung kann Menschen mit Sehbehinderungen, die Bildschirmüberlese-Technologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmlesegeräte Benutzer ohne vorherige Warnung zur Formularsteuerung.

    Verwenden Sie beim Anwenden des `autofocus`-Attributs eine sorgfältige Überlegung zur Barrierefreiheit. Automatisches Fokussieren auf eine Steuerung kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass dynamische Tastaturen auf einigen Touch-Geräten angezeigt werden. Während ein Bildschirmleser das Etikett der Formularsteuerung, die den Fokus erhält, ankündigt, kündigt der Bildschirmleser nichts vor dem Etikett an, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext des vorherigen Inhalts vermissen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und nur gültig für den `file` Eingabetyp, definiert das `capture`-Attribut, welche Medien—Mikrofon, Video oder Kamera—zur Erfassung einer neuen Datei für den Upload mit der Datei-Upload-Steuerung in unterstützenden Szenarien verwendet werden sollen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`
  - : Gültig für sowohl `radio` als auch `checkbox` Typen, ist `checked` ein Boolean-Attribut. Wenn es beim `radio` Typ vorhanden ist, zeigt es an, dass die Optionsschaltfläche die derzeit ausgewählte in der Gruppe von gleichnamigen Optionsschaltflächen ist. Wenn es beim `checkbox` Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird bei Kontrollkästchen und Optionsschaltflächen der Wert nur dann in die übermittelten Daten aufgenommen, wenn sie derzeit `checked` sind. Wenn sie es sind, werden der Name und die Wert(e) der aktivierten Steuerungen übermittelt.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, werden die Formulardaten `fruit=cherry` beinhalten. Ist das Kontrollkästchen nicht aktiv, wird es in den Formulardaten überhaupt nicht aufgeführt. Der Standard `value` für Kontrollkästchen und Optionsschaltflächen ist `on`.

- `colorspace` {{experimental_inline}}
  - : Nur für den `color` Eingabetyp gültig, spezifiziert das `colorspace`-Attribut den {{Glossary("Color_space", "Farbraum")}}, der von der `type="color"` Eingabe verwendet wird. Mögliche {{Glossary("enumerated", "aufgezählte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}} Farbraum. Dies schließt {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}}, und {{cssxref("hex-color")}} Werte ein. Der Farbwert ist auf 8 Bits pro `r`, `g`, und `b` Komponente begrenzt. Dies ist die Standardeinstellung.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3 Farbraum")}}, z.B., `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel`, und `email` Eingabetypen, ermöglicht das `dirname`-Attribut die Übermittlung der Richtungsangabe des Elements. Wenn enthalten, wird die Steuerung des Formulars mit zwei Namen/Werte-Paaren übermittelt: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname` Attributs als Name mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das oben stehende Formular übermittelt wird, bewirkt die Eingabe, dass sowohl das `name` / `value` Paar von `fruit=cherry` als auch das `dirname` / Richtungs-Paar von `fruit-dir=ltr` gesendet werden.
    Weitere Informationen finden Sie im [`dirname` Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer nichts mit der Eingabe machen soll. Deaktivierte Eingaben werden typischerweise mit einer gedimmten Farbe oder durch eine andere Art der Andeutung angezeigt, dass das Feld nicht zur Verwendung verfügbar ist.

    Speziell erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht durch die Spezifikation erforderlich, speichert Firefox standardmäßig [den dynamischen deaktivierten Zustand über Seitenladungen hinweg](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) von einem `<input>`. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Ein String, der das {{HTMLElement("form")}} Element spezifiziert, mit dem die Eingabe verknüpft ist (das heißt, sein **Formularinhaber**). Der Wert dieses Strings, wenn vorhanden, muss mit dem [`id`](#id) eines `<form>` Elements in demselben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächstgelegenen im Dokument enthaltenen Formular verknüpft, wenn es vorhanden ist.

    Das `form`-Attribut ermöglicht es, eine Eingabe an einer beliebigen Stelle im Dokument zu platzieren, aber diese mit einem Formular an anderer Stelle im Dokument zu verknüpfen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Nur für die `image` und `submit` Eingabetypen gültig. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formenctype`
  - : Nur für die `image` und `submit` Eingabetypen gültig. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formmethod`
  - : Nur für die `image` und `submit` Eingabetypen gültig. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formnovalidate`
  - : Nur für die `image` und `submit` Eingabetypen gültig. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formtarget`
  - : Nur für die `image` und `submit` Eingabetypen gültig. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `height`
  - : Gültig nur für den `image` Eingabeknopf, ist die `height` die Höhe der Bilddatei, die angezeigt wird, um die grafische Sende-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gilt, einschließlich aller Eingabetypen, es definiert einen eindeutigen Bezeichner (ID), der im ganzen Dokument einzigartig sein muss. Sein Zweck ist es, das Element zu identifizieren, wenn es verknüpft wird. Der Wert wird als Wert des `for` Attributs des {{htmlelement('label')}} verwendet, um das Label mit der Steuerung des Formulars zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist, er bietet einen Hinweis für Browser hinsichtlich der Art der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Werte sind `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal`, und `search`.
- `list`
  - : Der Wert, der dem `list` Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) einer {{HTMLElement("datalist")}} in demselben Dokument sein. Das `<datalist>` bietet eine Liste vordefinierter Werte an, die dem Benutzer für diese Eingabe vorgeschlagen wird. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Verwender können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

    Es ist gültig auf `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, und `color`.

    Laut den Spezifikationen wird das `list` Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file`, oder einem der Schaltflächentypen unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen sehen, Tic-Marken entlang eines Bereichs, oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, dabei jedoch nicht auf gelistete Werte beschränkt ist. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}} Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert es den größten Wert im Bereich der erlaubten Werte. Wenn der eingegebene [`value`](#value) in das Element diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max` Attributs keine Zahl ist, dann hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie für Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich umklappt; beispielsweise ermöglicht dies, einen Zeitbereich von 22 Uhr bis 4 Uhr anzugeben.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert es die maximale Zeichenfolge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des eingegebenen Texts in das Feld länger als `maxlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das `maxlength` Attribut erlaubt ist. Die Einschränkungsvalidierung wird nur angewandt, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert es den minimalsten Wert im Bereich der erlaubten Werte. Wenn der eingegebene [`value`](#value) in das Element unter diesem liegt, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min` Attributs keine Zahl ist, dann hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max` Attributs sein. Wenn das `min` Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `min` Wert angewandt. Wenn das `min` Attribut gültig ist und ein nicht-leerer Wert unter dem durch das `min` Attribut erlaubten Minimum liegt, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie für Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich umklappt; beispielsweise ermöglicht dies, einen Zeitbereich von 22 Uhr bis 4 Uhr anzugeben.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert es die minimale Zeichenfolge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert sein, der kleiner oder gleich dem Wert ist, der durch `maxlength` bestimmt wird. Wenn keine `minlength` angegeben ist, oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des eingegebenen Textes in das Feld kürzer ist als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} lang, was die Formularübermittlung verhindert. Die Einschränkungsvalidierung wird nur angewandt, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das Boolean `multiple` Attribut, wenn gesetzt, bedeutet, dass der Benutzer durch Kommas getrennte E-Mail-Adressen im Email-Widget eingeben kann oder mehr als eine Datei mit der `file` Eingabe auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`
  - : Ein String, der einen Namen für die Eingabesteuerung angibt. Dieser Name wird zusammen mit dem Wert der Steuerung bei der Übermittlung der Formulardaten gesendet.

    Betrachten Sie den `name` als ein erforderliches Attribut (obwohl es das nicht ist). Wenn eine Eingabe keinen `name` angibt oder der `name` leer ist, wird der Wert der Eingabe bei der Übermittlung des Formulars nicht gesendet! (Deaktivierte Steuerungen, nicht ausgewählte Optionsschaltflächen, nicht aktivierte Kontrollkästchen und Zurücksetzen-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_` : Wenn als Name eines `<input>` Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet, wird der `value` der Eingabe automatisch durch den {{Glossary("user_agent", "Benutzeragent")}} auf die verwendete Zeichencodierung zur Übermittlung des Formulars gesetzt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name) Attribut schafft ein einzigartiges Verhalten für Optionsschaltflächen.

    Nur eine Optionsschaltfläche in einer Gruppe von gleichnamigen Optionsschaltflächen kann gleichzeitig ausgewählt sein. Wenn eine dieser Schaltflächen ausgewählt wird, wird jede derzeit ausgewählte Schaltfläche in derselben Gruppe automatisch abgewählt. Der Wert dieser einen ausgewählten Schaltfläche wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Bei der Tab-Navigation in eine Serie von gleichnamigen Gruppen von Optionsschaltflächen, wenn eine ausgewählt ist, erhält diese dann den Fokus. Wenn sie nicht in der Quellreihenfolge gruppiert sind und eine der Gruppe ausgewählt ist, beginnt die Tab-Navigation, wenn die erste in der Gruppe erreicht wird, wobei alle übersprungen werden, die nicht ausgewählt sind. Mit anderen Worten, wenn eine ausgewählt ist, überspringt die Tab-Navigation die nicht ausgewählten der Gruppe. Wenn keine ausgewählt ist, erhält die Radioschaltflächengruppe den Fokus, wenn die erste Schaltfläche in der gleichen Gruppe erreicht wird.

    Sobald eine der Optionsschaltflächen in einer Gruppe den Fokus hat, kann man mit den Pfeiltasten durch alle Optionsschaltflächen mit demselben Namen navigieren, selbst wenn die Radioschaltflächen in der Quellreihenfolge nicht gruppiert sind.

    Wenn einem Eingabeelement ein `name` zugeordnet ist, wird dieser Name zu einer Eigenschaft der Besitzformularelements [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft. Wenn Sie eine Eingabe haben, deren `name` auf `guest` gesetzt ist und eine andere, deren `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest` Feld sein, und `hatSize` das Objekt für das `hat-size` Feld.

    > [!WARNING]
    > Vermeiden Sie, Formularelementen einen `name` zu vergeben, der einer integrierten Eigenschaft von Formularen entspricht, da Sie damit die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, das `pattern`-Attribut wird verwendet, um einen regulären Ausdruck zu kompilieren, dem der Eingabe `value` entsprechen muss, um bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) gültig zu sein. Es muss ein gültiger JavaScript-Regulärausdruck sein, wie er durch den {{jsxref("RegExp")}} Typ verwendet wird und wie in unserem [Leitfaden zu Regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Keine Schrägstriche sollten um den Mustertext spezifiziert werden. Bei der Kompilierung des regulären Ausdrucks:
    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, sodass die Übereinstimmung gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'` Flag angegeben, sodass das Muster als Folge von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn das Musterattribut gültig ist und ein nicht-leerer Wert das Muster nicht erfüllt, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Wenn [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck mit jedem durch Kommas getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn das `pattern`-Attribut verwendet wird, informieren Sie den Benutzer über das erwartete Format, indem Sie erläuternden Text in der Nähe bereitstellen. Sie können auch ein [`title`](#title) Attribut einschließen, um zu erklären, was die Anforderungen sind, um dem Muster zu entsprechen; die meisten Browser werden diesen Titel als Tooltip anzeigen. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password`, und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis für den Benutzer, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf den erwarteten Typ von Daten gibt, anstatt einer vollständigen Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. So zum Beispiel, wenn ein Feld den Vornamen eines Benutzers erfassen soll und sein Etikett "Vorname" lautet, könnte ein geeigneter Platzhalter "z.B., Mustafa" lauten.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Methoden, um das Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für mehr Informationen.

- `popovertarget`
  - : Wandelt ein `<input type="button">` Element in eine Popover-Steuertaste um; nimmt die ID des Popover-Elements, das gesteuert werden soll, als Wert. Siehe die [Popover API](/de/docs/Web/API/Popover_API) Startseite für mehr Details. Die Erstellung einer Beziehung zwischen einem Popover und seiner aufrufenden Schaltfläche mithilfe des `popovertarget`-Attributs hat zwei weitere nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Aufrufer und platziert das Popover in einer logischen Position in der Tastaturfokussierungsnavigation, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und Hilfstechnologie (AT) Benutzer zugänglicher (siehe auch [Popover-Zugänglichkeitseigenschaften](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, die es sehr bequem macht, Popovers relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`
  - : Gibt die auszuführende Aktion an einem Popover-Element an, das von einem Steuerungs-`<input type="button">` gesteuert wird. Mögliche Werte sind:
    - `"hide"`
      - : Die Schaltfläche wird ein angezeigtes Popover ausblenden. Wenn Sie versuchen, ein bereits ausgeblendetes Popover auszublenden, wird keine Aktion durchgeführt.
    - `"show"`
      - : Die Schaltfläche wird ein ausgeblendetes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigt werdendes Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Die Schaltfläche wird ein Popover zwischen sichtbar und ausgeblendet umschalten. Wenn das Popover ausgeblendet ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es ausgeblendet. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerungstaste durchgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten können soll. Das `readonly`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `password` Eingabetypen unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) für mehr Informationen.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das das Formular besitzen könnende Formular abgesendet werden kann. Das `required`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, und `file` Eingaben unterstützt.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) und das [HTML Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für mehr Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url`, und `text`, das `size`-Attribut spezifiziert, wie viel von der Eingabe angezeigt wird. Erzeugt im Grunde dasselbe Ergebnis wie das Setzen der CSS-Eigenschaft {{cssxref("width")}} mit ein paar Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em` Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px` Einheiten). CSS `width` hat Vorrang gegenüber dem `size` Attribut.

- `src`
  - : Gültig nur für den `image` Eingabeknopf, ist das `src` ein String, der die URL der Bilddatei angibt, die angezeigt wird, um die grafische Sende-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut ist eine Zahl, die die Granularität spezifiziert, der der Wert einhalten muss. Nur Werte, die eine ganze Anzahl von Schritten vom Basiswert entfernt sind, sind gültig. Der Basiswert ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), wenn angegeben, [`value`](#value) andernfalls, oder `0`, wenn keiner angegeben ist (außer für `week`, das einen Standardbasiswert von -259,200,000 hat, was den Anfang der Woche `1970-W01` darstellt).

    Wenn nicht explizit enthalten:
    - `step` standardmäßig auf 1 für `number` und `range`.
    - Jeder Datums-/Uhrzeittyp hat einen Standardwert für `step`, der für den Type geeignet ist; siehe die einzelnen Eingabe-Seiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step), und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein—Ganzzahl oder Fließkommazahl—oder der spezielle Wert `any`, der bedeutet, dass kein Step angenommen wird, und jeder Wert erlaubt ist (unter der Vorbehalt anderer Einschränkungen, wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Zahl, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber Fließkommazahlen (wie `4.2`) sind es nicht, weil `step` per Voreinstellung `1` ist. Um `4.2` gültig zu machen, müsste `step` auf `any`, 0.1, 0.2 gesetzt worden sein oder der `min` Wert müsste eine Zahl sein, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebene Daten nicht der Step-Konfiguration entsprechen, wird der Wert als ungültig in der Einschränkungsvalidierung betrachtet und wird die `:invalid` -Pseudoklasse entsprechen.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- `tabindex`
  - : Globales Attribut gültig für alle Elemente, einschließlich aller Eingabetypen, eine ganzzahlige Attributierung anzeigend, ob das Element den Eingabefokus nehmen kann (ist fokussierbar), ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen außer `hidden` Eingaben fokussierbar sind, sollte dieses Attribut nicht auf Formularsteuerungen verwendet werden, da dies das Management der Fokusreihenfolge für alle Elemente im Dokument erfordern würde, mit dem Risiko, die Benutzerfreundlichkeit und Zugänglichkeit zu beeinträchtigen, wenn es falsch gemacht wird.

- `title`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, enthält einen Text, der beratende Informationen in Bezug auf das Element enthält, zu dem es gehört. Solche Informationen können typischerweise, aber nicht unbedingt, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks der Formularsteuerung verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut der Formularsteuerung gesetzt ist. Siehe [Labels](#labels) unten.

- `type`
  - : Ein String, der den Typ der Steuerelemente angibt. Zum Beispiel, um ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben ist), wird die Eingabetype `text` verwendet, was ein Klartext-Eingabefeld erstellt.

    Erlaubte Werte sind im Abschnitt [Eingabetypen](#input_types) oben aufgelistet.

- `value`
  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Anfangswert und von da an kann er jederzeit mit JavaScript abgerufen und abgeändert werden, indem auf die `value`-Eigenschaft des jeweiligen [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts zugegriffen wird. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`
  - : Gültig nur für den `image` Eingabeknopf, ist die `width` die Breite der Bilddatei, die angezeigt wird, um die grafische Sende-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. Generell sollten Sie sie vermeiden, es sei denn, es lässt sich nicht anders regeln.

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
        Ob Ereignisse zur [{`search`}(/de/docs/Web/API/HTMLInputElement/search_event)]-Ereignisse versendet werden sollen, um Live-Suchergebnisse zu aktualisieren, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion anzeigt, die ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste drückt, während er das Feld bearbeitet; dies wird verwendet, um eine geeignete Bezeichnung für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Ausrichtung des Bereichsschiebereglers. <strong>Nur Firefox.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl an Elementen, die in der Dropdown-Liste vorheriger Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, das angibt, ob der Benutzer nur ein Verzeichnis (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) auswählen darf
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine WebKit und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome, usw.), das, wenn vorhanden, dem {{Glossary("user_agent", "Benutzeragent")}} mitteilt, die Eingabe als eine Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [{`search`}(/de/docs/Web/API/HTMLInputElement/search_event)]-Ereignisse zum [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das die Suchbox repräsentiert. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [{`search`}(/de/docs/Web/API/HTMLInputElement/search_event)]-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche auslöst (z.B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste während der Bearbeitung des Feldes).

    Das `search`-Ereignis ist durch eine Implementierung definierte Intervalle rate-begrenzt, sodass es nicht häufiger gesendet wird als ein implementierungsdefiniertes Intervall.

- `orient` {{non-standard_inline}}
  - : Ähnlich zur nicht standardisierten CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente betrifft, definiert das `orient` Attribut die Ausrichtung des Bereichsschiebereglers. Werte sind `horizontal`, was bedeutet, dass der Bereich horizontal angezeigt wird, und `vertical`, wo der Bereich vertikal angezeigt wird. Siehe [Erstellen vertikaler Formularelemente](aleale=es/Web/CSS/Guides/Writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularelemente.

- `results` {{non-standard_inline}}
  - : Das Attribut `results` - nur von Safari unterstützt - ist ein numerischer Wert, der es Ihnen erlaubt, die maximale Anzahl von Einträgen zu überschreiben, die im der `<input>`-Element nativ bereitgestellten Dropdown-Menü vorheriger Suchanfragen angezeigt werden sollen.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben wird, wird die Standardmaximumanzahl der Einträge des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass nur Verzeichnisse verfügbar sein sollen, die der Benutzer im Datei-Auswahl-Interface auswählen kann. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie ab Firefox 50 und nicht darunter verwendbar. Trotz seiner relativ breiten Unterstützung ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden durch das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interface bereitgestellt, welches `<input>`-Elemente im DOM repräsentiert. Ebenfalls verfügbar sind die Methoden, die durch die übergeordneten Interfaces [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) spezifiziert werden.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; ansonsten gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; ansonsten gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und meldet (falls das Ereignis nicht abgebrochen wird) das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, falls der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder Datums-Eingabe) macht diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine bestimmte Zeichenkette. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines textuellen Eingabeelements aus. Macht nichts für Eingaben, die nicht als Texteingabefelder präsentiert werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Picker für das Eingabeelement an, das normalerweise angezeigt würde, wenn das Element ausgewählt wird, jedoch ausgelöst durch einen Tastendruck oder eine andere Benutzerinteraktion.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Merkmale, die auf nicht-formbezogene Elemente nicht zutreffen. Es gibt CSS-Selektoren, die speziell Formularsteuerungen auf Basis ihrer UI-Features anvisieren können, auch bekannt als UI-Pseudo-Klassen. Das Input-Element kann auch nach Typ mit Attributselektoren gezielt angesprochen werden. Es gibt einige besonders nützliche Eigenschaften.

### UI-Pseudo-Klassen

<table class="no-markdown">
  <caption>
    Pseudo-Klassen relevant für das
    <code>&#x3C;input></code>
    Element:
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
        Jedes derzeit aktivierbare Element, das aktiviert (ausgewählt, angeklickt, hineingeschrieben etc.) oder fokussiert werden kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, d.h. es könnte ansonsten aktiviert (ausgewählt, angeklickt, hineingeschrieben etc.) oder fokussiert werden, wenn es nicht deaktiviert wäre.
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
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code>- und {{HTMLElement("textarea")}}-Elementen mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das bisher keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die der Standard in einer Gruppe verwandter Elemente sind. Passt auf {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die beim Laden oder Rendern der Seite angekreuzt waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt auf {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die derzeit angekreuzt sind (und das {{HTMLElement("option")}} in einem {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt wurde, {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Radioknöpfe mit dem gleichen Namenwert im Formular nicht angekreuzt sind, und {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die eine Constraint-Validierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die eine Constraint-Validierung angewendet wird und die derzeit nicht gültig sind. Passt auf ein Formularelement, dessen Wert den durch seine Attribute festgelegten Einschränkungen wie <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a> nicht entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die Attribute <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> und den <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die Attribute <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> festgelegten Bereichsgrenzen liegt oder nicht den <a href="#step"><code>step</code></a>-Einschränkungen entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}- oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat. Passt nur auf Elemente, die erforderlich sein können. Das Attribut auf einem nicht-erforderlichen Element führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}- oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut NICHT gesetzt hat. Passt nicht auf Elemente, die nicht erforderlich sein können.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code>- und {{HTMLElement("textarea")}}-Elemente, die derzeit keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, aber es wird bei verlassen des Feldes aktiviert. Passt auf eine ungültige Eingabe, jedoch nur nach der Benutzerinteraktion, z.B. durch Fokussierung auf die Steuerung, Verlassen der Steuerung oder Versuch, das Formular mit der ungültigen Steuerung abzuschicken.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Picker anzeigen, mit dem der Benutzer einen Wert auswählen kann (z.B. <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — jedoch nur, wenn das Element im offenen Zustand ist, das heißt, wenn der Picker angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudo-Klassen Beispiel

Wir können ein Label für ein Kontrollkästchen basierend darauf stylen, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einem angekreuzten Input folgt. Wir haben keine Stile angewendet, wenn das `input` nicht angekreuzt ist.

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

Es ist möglich, verschiedene Typen von Formularsteuerungen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzuvisieren. CSS-Attributselektoren matchen Elemente basierend entweder auf der bloßen Anwesenheit eines Attributs oder dem Wert eines bestimmten Attributs.

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

Standardmäßig erscheint der Placeholder-Text in einem durchscheinenden oder hellgrauen Ton. Das {{cssxref('::placeholder')}}-Pseudo-Element ist der [`placeholder`-Text](#placeholder) des Inputs. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Satz von CSS-Eigenschaften, der auf das {{cssxref("::first-line")}}-Pseudo-Element angewendet werden kann, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor enthält.

### caret-color

Eine spezifische Eigenschaft, die auf Eingabefelder bezogen ist, ist die CSS-Eigenschaft {{cssxref("caret-color")}}, die es Ihnen ermöglicht, die Farbe zu setzen, mit der der Texteingabe-Caret gezeichnet wird:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie erhalten standardmäßig eine bevorzugte Standardgröße.) Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, sodass sich Formularsteuerungen in ihrer Größe an ihren Inhalt anpassen können.

Diese Eigenschaft wird typischerweise verwendet, um Eingabefelder zu erstellen, die ihren Inhalt umwickeln und wachsen, je mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingaben akzeptieren (z.B. [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}}-Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textlichen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn dies der Fall ist, können die Position und die Größe des Elements sowie die Platzierung innerhalb seines Rahmens mithilfe der CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML siehe:

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Styling-Techniken für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels sind erforderlich, um erklärenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element liefert erklärende Informationen über ein Formularfeld, das _immer_ sinnvoll ist (abgesehen von eventuellen Layoutbedenken). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden sollte.

#### Zugehörige Labels

Die semantische Paarung von `<input>`- und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Bildschirmleser. Indem Sie sie mithilfe des [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attributs des `<label>` paaren, binden Sie das Label an das Input, sodass Bildschirmleser Eingaben den Benutzern präziser beschreiben können.

Es genügt nicht, einfachen Text neben das `<input>`-Element zu setzen. Vielmehr erfordern Benutzerfreundlichkeit und Barrierefreiheit die Einbindung eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht barrierefrei: Es gibt keine Beziehung zwischen dem Eingabehinweis und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere Klickfläche für Maus- und Touch-Benutzer. Durch das Paaren eines `<label>` mit einem `<input>` hat das Klicken auf eines der beiden den Effekt, das `<input>` zu fokussieren. Wenn Sie einfachen Text verwenden, um Ihr Input zu "labeln", geschieht das nicht. Wenn der Hinweis Teil des Aktivierungsbereichs für das Input ist, hilft das Personen mit motorischen Kontrollstörungen.

Als Webentwickler sollten wir nie davon ausgehen, dass Menschen all das wissen, was wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und damit auch Ihre Website – garantiert praktisch, dass einige Ihrer Seitenbesucher einige Varianten in ihren Denkprozessen und/oder Lebensumständen aufweisen, die dazu führen, dass sie Ihre Formulare sehr unterschiedlich von Ihnen interpretieren, ohne klare und korrekt dargestellte Labels.

#### Platzhalter sind nicht barrierefrei

Das [`placeholder`](#placeholder)-Attribut lässt Sie Text angeben, der innerhalb des Inhaltsbereichs des `<input>`-Elements selbst erscheint, wenn es leer ist. Der Platzhalter sollte nie erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte deshalb nicht als Ersatz verwendet werden, weil es das nicht ist. Der Platzhalter dient dazu, einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte und nicht als Erklärung oder Aufforderung.

Nicht nur, dass der Platzhalter für Bildschirmleser nicht zugänglich ist, sondern auch, wenn der Benutzer irgendeinen Text in das Formulareingabefeld eingibt oder wenn das Formulareingabefeld bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitenübersetzungsfunktionen können Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie nach Möglichkeit nicht das [`placeholder`](#placeholder)-Attribut. Wenn Sie ein `<input>`-Element labeln müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, überprüfen Sie sie _immer_ auch serverseitig und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den UI-Zuständen {{cssxref(":valid")}} oder {{cssxref(":invalid")}} zu stylen, basierend auf dem aktuellen Zustand jeder Eingabe, wie im Abschnitt [UI-Pseudo-Klassen](#ui-pseudo-klassen) oben beschrieben, ermöglicht der Browser eine Client-seitige Validierung bei (versuchter) Formularübermittlung. Bei der Formularübermittlung, wenn ein Formularelement die Constraint-Validierung nicht besteht, zeigen unterstützte Browser eine Fehlermeldung beim ersten ungültigen Formularelement an und zeigen eine Standardmeldung basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Nachricht an.

Einige Eingabetypen und andere Attribute begrenzen, welche Werte für ein bestimmtes Eingabefeld gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Es können verschiedene Fehler auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade ganze Zahl ist (nicht den Anforderungen des `step`-Attributs entspricht) oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich möglicher Werte periodisch ist (d.h. bei den höchstmöglichen Werten, wird der Bereich wieder von vorne begonnen, anstatt zu enden), ist es möglich, dass die Werte der Eigenschaften [`max`](#max) und [`min`](#min) umgekehrt sind, was anzeigt, dass der Bereich der zulässigen Werte bei `min` beginnt, bis zum niedrigstmöglichen Wert geht und dann weiter bis `max` reicht. Dies ist besonders nützlich für Daten und Zeiten, zum Beispiel wenn Sie einen Bereich von 20:00 Uhr bis 8:00 Uhr zulassen möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und ihre Werte können zu einem spezifischen Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Die Validitätsobjektfehler hängen von den <code>&lt;input&gt;</code>-Attributen und deren Werten ab:
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
        Tritt auf, wenn der Wert größer als der Höchstwert ist, der durch das <code>max</code>-Attribut definiert ist
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code>-Eigenschaft erlaubte Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner als der Mindestwert ist, der durch das <code>min</code>-Attribut definiert ist
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code>-Eigenschaft erforderliche Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein `pattern`-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> ist oder Radio- oder Checkbox nicht aktiviert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Standardinkrement ist <code>1</code>, daher sind nur ganze Zahlen auf <code>type="number"</code> gültig, wenn Step nicht eingeschlossen ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, z.B. wenn eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required`-Attribut hat, ist kein Wert oder eine leere Zeichenkette nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, wird eine leere Zeichenkette nicht zu einem Fehler führen.

Wir können Grenzen festlegen, welche Werte wir akzeptieren, und unterstützende Browser validieren diese Formularwerte nativ und benachrichtigen den Benutzer, falls bei der Übermittlung des Formulars ein Fehler auftritt.

Zusätzlich zu den in der Tabelle oben beschriebenen Fehlern enthält das `validityState`-Interface die booleschen nur-lese-Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften gilt: Ein Wert von `true` zeigt an, dass der angegebene Gültigkeitsgrund tatsächlich nicht zutrifft, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen erfüllt.

Wenn ein Fehler auftritt, werden unterstützende Browser sowohl den Benutzer benachrichtigen als auch die Übermittlung des Formulars verhindern. Ein Hinweis: Wenn eine benutzerdefinierte Fehlermeldung auf einen wahrheitsgetreuen Wert (irgendetwas außer der leeren Zeichenkette oder `null`) gesetzt wird, wird die Formularübermittlung verhindert. Wenn keine benutzerdefinierte Fehlermeldung vorliegt und keiner der anderen Werte true zurückgibt, ist `valid` true und das Formular kann übermittelt werden.

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

Die letzte Zeile, die die benutzerdefinierte Fehlermeldung auf die leere Zeichenkette setzt, ist wichtig. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt ist, wird es bis zur Nachricht `null` nicht gesendet, selbst wenn alle Werte gültig sind.

#### Beispiel für Benutzerdefinierte Validierungsfehler

Wenn Sie beim Versagen der Validierung eines Feldes eine benutzerdefinierte Fehlermeldung anzeigen möchten, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die für `<input>` (und verwandte) Elemente verfügbar ist. Betrachten Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen führen dazu, dass dies eine Standardfehlermeldung erzeugt, wenn Sie versuchen, das Formular abzusenden, ohne entweder einen gültigen Wert einzugeben oder mit einem Wert, der nicht dem `pattern` entspricht.

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

Das Beispiel wird so ausgegeben:

{{EmbedLiveSample('Custom_validation_error_example')}}

Zusammengefasst:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die `checkValidity()`-Methode über den `input`-Event-Handler aufrufen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst, und die `invalid`-Ereignishandler-Funktion wird ausgeführt. Innerhalb dieser Funktion ermitteln wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, und setzen eine benutzerdefinierte Validitätsfehlermeldung.
- Das Ergebnis ist, dass, wenn der Eingabewert ungültig ist, wenn die Absenden-Schaltfläche gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt wird.
- Wenn es gültig ist, wird es wie erwartet übermittelt. Dafür muss die benutzerdefinierte Validität aufgehoben werden, indem `setCustomValidity()` mit einem leeren Zeichenkettenwert aufgerufen wird. Wir tun dies daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und vorher eine benutzerdefinierte Validität festgelegt war, wird die Eingabe als ungültig registriert, selbst wenn sie momentan einen gültigen Wert hat, der beim Absenden übermittelt wird.

> [!NOTE]
> Validieren Sie immer sowohl die Eingabebeschränkungen auf Client-Seite als auch auf Server-Seite. Constraint-Validierung hebt nicht die Notwendigkeit einer Validierung auf der _Server-Seite_ auf. Ungültige Werte können immer noch von älteren Browsern oder von böswilligen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte für viele Versionen ein proprietäres Fehlerattribut – `x-moz-errormessage` –, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen in ähnlicher Weise festzulegen. Dies wurde ab Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die zulässigen Eingaben für bestimmte `<input>`-Typen hängen von der Spracheinheit ab. In einigen Orten ist 1.000,00 eine gültige Zahl, während in anderen Orten die gültige Schreibweise 1,000.00 ist.

Firefox verwendet die folgenden Heuristiken, um das Gebietsschema zu bestimmen, mit dem die Eingaben des Benutzers validiert werden sollen (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut am Element oder einem seiner Elternteile angegeben ist.
- Versuchen Sie die Sprache, die durch einen beliebigen `Content-Language` HTTP-Header angegeben wird. Oder
- Wenn keine angegeben ist, verwenden Sie das Gebietsschema des Browsers.

## Barrierefreiheit

### Labels

Beim Einfügen von Eingaben ist es eine Barrierefreiheitserforderlichkeit, Labels hinzuzufügen. Dies ist notwendig, damit Benutzer, die unterstützende Technologien verwenden, wissen, für was die Eingabe gedacht ist. Auch das Klicken oder Berühren eines Labels gibt dem zugehörigen Formularelement den Fokus. Dies verbessert die Zugänglichkeit und Benutzerfreundlichkeit für sehende Nutzer, erhöht die Fläche, die ein Benutzer anklicken oder berühren kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar erforderlich) für Radio-Buttons und Checkboxen, die klein sind. Für weitere Informationen zu Labels allgemein siehe [Labels](#labels).

Das folgende ist ein Beispiel dafür, wie man das `<label>` mit einem `<input>`-Element im oben beschriebenen Stil verknüpft. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert dem `id` des Inputs entspricht.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten eine Fläche bereitstellen, die groß genug ist, um sie einfach zu aktivieren. Dies hilft einer Vielzahl von Menschen, darunter Menschen mit motorischen Kontrollproblemen und Menschen, die ungenaue Formen der Eingabe wie einen Stylus oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Verstehen des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis der WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, gelistet, übermittler, zurücksetzer, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann ist es ein labelbares Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "Void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
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

- CSS {{cssxref("appearance")}} Eigenschaft
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zum Strukturieren eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formular-Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
