---
title: "<input>: Das HTML-Eingabeelement"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 13856107d2cab5bb9e40de608ee38a5770ef7c4d
---

Das **`<input>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerungen für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren. Eine Vielzahl von Eingabedatentypen und Steuerungswidgets sind je nach Gerät und {{Glossary("user_agent", "User-Agent")}} verfügbar. Das `<input>`-Element ist eines der mächtigsten und komplexesten in HTML aufgrund der schieren Anzahl von Kombinationen von Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich je nach Wert seines [`type`](#type)-Attributs, daher werden die verschiedenen Typen auf ihren eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` verwendet.

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
        Ein Drückknopf ohne Standardverhalten, der den Wert des <a href="#value"><code>value</code></a>-Attributs anzeigt, standardmäßig leer.
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
        Eine Kontrolle zur Auswahl einer Farbe; öffnet bei unterstützten Browsern einen Farbwähler, wenn aktiv.
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
        Öffnet bei unterstützten Browsern einen Datumsauswahl oder numerische Räder für Jahr, Monat, Tag, wenn aktiv.
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
        Eine Steuerung zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet bei unterstützten Browsern einen Datumsauswahl oder numerische Räder für Datum- und Zeitkomponenten, wenn aktiv.
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
        Tastaturen in unterstützten Browsern und Geräten mit dynamischen Tastaturen.
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
        Eine Kontrolle, die es dem Benutzer erlaubt, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Dateitypen zu definieren, die die Kontrolle auswählen kann.
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
        Eine Kontrolle, die nicht angezeigt wird, deren Wert jedoch an den
        Server gesendet wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist versteckt!
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
        Ein grafischer <code>submit</code>-Button. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert ist.
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
        Eine Steuerung zur Eingabe einer Zahl. Zeigt einen Spinner und fügt eine Standardvalidierung hinzu.
        Zeigt ein numerisches Tastenfeld auf einigen Geräten mit dynamischen Tastenfeldern an.
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
        Warnt den Benutzer, wenn die Seite unsicher ist.
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
        Ein Optionsfeld, das es erlaubt, einen einzelnen Wert aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Eine Steuerung zur Eingabe einer Zahl, deren exakter Wert nicht wichtig ist.
        Wird als Bereichs-Widget angezeigt, standardmäßig auf den mittleren Wert eingestellt.
        Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich zulässiger Werte zu definieren.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbrüche werden
        aus dem Eingabewert automatisch entfernt. Kann in unterstützten Browsern ein Löschsymbol enthalten, das verwendet werden kann, um das Feld zu leeren. Zeigt ein
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
        Eine Steuerung zur Eingabe einer Telefonnummer. Zeigt ein Telefontastenfeld
        auf einigen Geräten mit dynamischen Tastenfeldern an.
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
        aus dem Eingabewert automatisch entfernt.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabefeld, hat jedoch Validierungsparameter und relevante Tastaturen in unterstützten Browsern und Geräten mit dynamischen Tastaturen.
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
        Eine Steuerung zur Eingabe eines Datums, das aus einer Jahr-Woche-Zahl und einer Wochennummer besteht, ohne Zeitzone.
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
        Eine Steuerung zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so mächtig wegen seiner Attribute; das [`type`](#type)-Attribut, das mit Beispielen oben beschrieben wird, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch gesehen denselben Satz von Attributen. In der Realität haben jedoch die meisten Attribute nur Auswirkungen auf eine spezielle Untermenge von Eingabetypen. Darüber hinaus hängt die Auswirkung einiger Attribute auf eine Eingabe von ihrem Typ ab, was unterschiedliche Eingabetypen auf unterschiedliche Weise beeinträchtigt.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird von einer Liste gefolgt, die jedes Attribut im Detail beschreibt, zusammen mit den Eingabetypen, mit denen sie verknüpft sind. Diejenigen, die für die meisten oder alle Eingabetypen gemeinsam sind, werden im Folgenden ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind—oder Attribute, die für alle Eingabetypen gelten, aber besondere Verhaltensweisen aufweisen, wenn sie bei einem bestimmten Eingabetyp verwendet werden—werden stattdessen auf den entsprechenden Typseiten dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                                      |
| --------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis auf den erwarteten Dateityp in Datei-Upload-Steuerungen                                                   |
| [`alt`](#alt)                                 | `image`                                                                      | alt-Attribut für den Bildtyp. Erforderlich für die Zugänglichkeit                                                 |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Steuerung der automatischen Großschreibung bei eingegebenem Text.                                                 |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis für die Formular-Autovervollständigungsfunktion                                                           |
| [`capture`](#capture)                         | `file`                                                                       | Methode zur Medienaufnahme bei Datei-Upload-Steuerungen                                                           |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Ob der Befehl oder die Steuerung ausgewählt ist                                                                   |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfelds, das zur Übermittlung der Richtung dieses Elements über Formulareinreichung verwendet wird |
| [`disabled`](#disabled)                       | alle                                                                         | Ob die Formularsteuerung deaktiviert ist                                                                          |
| [`form`](#form)                               | alle                                                                         | Verknüpft die Steuerung mit einem Formularelement                                                                 |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | URL, die für das Absenden des Formulars verwendet werden soll                                                     |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Kodierungstyp des Formulardatensatzes für das Absenden des Formulars                                              |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | HTTP-Methode, die für das Absenden des Formulars verwendet wird                                                   |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Umgeht die Formularfeldprüfung beim Absenden des Formulars                                                        |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für das Absenden des Formulars                                                                   |
| [`height`](#height)                           | `image`                                                                      | Dasselbe wie das Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                                    |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des id-Attributs der {{htmlelement('datalist')}} für Autovervollständigungsoptionen                          |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Maximalwert                                                                                                       |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) des `value`                                                                   |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Minimalwert                                                                                                       |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Minimale Länge (Anzahl der Zeichen) des `value`                                                                   |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolean. Ob mehrere Werte erlaubt sind                                                                            |
| [`name`](#name)                               | alle                                                                         | Name der Formularsteuerung. Wird mit dem Formular als Name/Wert-Paar gesendet                                     |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Muster, das der `value` erfüllen muss, um gültig zu sein                                                          |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der im Formularsteuerung angezeigt wird, wenn kein Wert gesetzt ist                                         |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Weist ein `<input type="button">` als Steuerungselement für ein Popover zu                                        |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Gibt die Aktion an, die eine Popover-Steuerung ausführen sollte                                                   |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht bearbeitbar                                                                           |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss ausgewählt sein, damit das Formular absendbar ist                    |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe der Steuerung                                                                                               |
| [`src`](#src)                                 | `image`                                                                      | Dasselbe wie das `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                             |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Inkrementelle Werte, die gültig sind                                                                              |
| [`type`](#type)                               | alle                                                                         | Typ der Formularsteuerung                                                                                         |
| [`value`](#value)                             | alle außer `image`                                                           | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht dies dem Anfangswert                                   |
| [`width`](#width)                             | `image`                                                                      | Dasselbe wie das `width`-Attribut für {{htmlelement('img')}}                                                      |

Einige zusätzliche nicht standardisierte Attribute werden nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelattribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Gültig nur für den `file`-Eingabetyp, das `accept`-Attribut definiert, welche Dateitypen in einer `file`-Upload-Steuerung wählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alt`
  - : Gültig nur für den `image`-Button, das `alt`-Attribut liefert einen alternativen Text für das Bild, der den Attributwert anzeigt, falls das Bild [`src`](#src) fehlt oder nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`
  - : Steuert, ob und in welcher Weise eingegebener Text automatisch großgeschrieben wird. Weitere Informationen finden Sie auf der Seite [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) des globalen Attributs.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette, die beschreibt, welche Art von Autovervollständigungs-Funktionalität die Eingabe bereitstellen soll, falls vorhanden. Eine typische Implementierung von Autovervollständigung erinnert sich an zuvor eingetragene Werte im selben Eingabefeld, aber komplexere Formen von Autovervollständigung können existieren. Beispielsweise könnte ein Browser in das Kontaktverzeichnis eines Geräts integriert werden, um `email`-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder textbasierten Daten zurückgeben. Es ist gültig für alle Eingabetypen außer `checkbox`, `radio`, `file` oder einer der Schaltflächentypen.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Sicherheit von Passwörtern und wie `autocomplete` sich bei `hidden` im Vergleich zu anderen Eingabetypen leicht unterscheidet.

- `autofocus`
  - : Ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass die Eingabe automatisch den Fokus haben soll, sobald die Seite vollständig geladen ist (oder wenn der {{HTMLElement("dialog")}}, der das Element enthält, angezeigt wird).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Event ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn auf mehr als einem Element vorhanden, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht bei Eingabetypen `hidden` verwendet werden, da verborgene Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren einer Formularsteuerung kann für sehbehinderte Personen, die Bildschirmlesetechnologie verwenden, und für Menschen mit kognitiven Beeinträchtigungen verwirrend sein. Wenn `autofocus` zugewiesen ist, "teleportiert" der Bildschirmleser den Benutzer ohne vorherige Warnung zur Formularsteuerung.

    Wenden Sie besondere Überlegungen zur Barrierefreiheit an, wenn Sie das `autofocus`-Attribut anwenden. Das automatische Fokussieren einer Steuerung kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label der Formularsteuerung mit Fokus ankündigen wird, wird der Bildschirmleser nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext verpassen, der durch den vorausgehenden Inhalt erstellt wird.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in die Spezifikation HTML Media Capture, gültig nur für den `file`-Eingabetyp, definiert das `capture`-Attribut, welche Medien—Mikrofon, Video oder Kamera—verwendet werden sollen, um eine neue Datei für den Upload mit `file`-Upload-Steuerung in unterstützten Szenarien aufzunehmen. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `checked`
  - : Gültig für beide `radio`- und `checkbox`-Typen, `checked` ist ein Boolean-Attribut. Wenn bei einem `radio`-Typ vorhanden, zeigt es an, dass der Radiobutton derzeit in der Gruppe von gleichnamigen Radiobuttons ausgewählt ist. Wenn bei einem `checkbox`-Typ vorhanden, zeigt es an, dass das Kontrollkästchen standardmäßig (wenn die Seite geladen wird) aktiviert ist. Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`-`checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird der Wert von Kontrollkästchen und Radiobuttons nur dann in den gesendeten Daten aufgenommen, wenn sie derzeit `checked` sind. Wenn sie das sind, werden der Name und die Wert(e) der aktivierten Steuerungen gesendet.
    >
    > Wenn beispielsweise ein Kontrollkästchen dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, werden die gesendeten Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es in den Formulardaten überhaupt nicht aufgelistet. Der Standard-`value` für Kontrollkästchen und Radiobuttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen, ermöglicht das `dirname`-Attribut die Übermittlung der Ausrichtung des Elements. Wenn enthalten, sendet die Formularsteuerung zwei Name/Wert-Paare: das erste ist der [`name`](#name) und der [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das obige Formular gesendet wird, bewirkt die Eingabe sowohl das `name` / `value`-Paar von `fruit=cherry` als auch das `dirname` / Richtungs-Paar von `fruit-dir=ltr`.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren sollte. Deaktivierte Eingaben werden in der Regel mit einer dimmer Farbe oder durch eine andere Art der Kennzeichnung, dass das Feld nicht verfügbar ist, angezeigt.

    Konkret erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Event, und deaktivierte Eingaben werden nicht mit dem Formular gesendet.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation gefordert, wird Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` über Seitenladungen hinweg [beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- `form`
  - : Eine Zeichenkette, die das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (das heißt, dessen **Formulareigentümer**). Der Wert dieser Zeichenkette, wenn vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element dem nächstgelegenen umschließenden Formular zugeordnet, sofern vorhanden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe an einer beliebigen Stelle im Dokument zu platzieren, es aber in einem Formular an einer anderen Stelle im Dokument enthalten zu lassen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.

- `formenctype`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.

- `formmethod`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.

- `formnovalidate`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.

- `formtarget`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.

- `height`
  - : Gültig nur für den `image`-Eingabebutton, die `height` ist die Höhe der Bilddatei, die dargestellt werden soll, um den grafischen submit-Button zu repräsentieren. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `id`
  - : Globales Attribut, das für alle Elemente, einschließlich aller Eingabetypen, gültig ist, es definiert eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um das Label mit der Formularsteuerung zu verbinden. Siehe {{htmlelement('label')}}.

- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist, es bietet einen Hinweis für Browser, welche Tastaturkonfiguration zu verwenden ist, wenn dieses Element oder dessen Inhalt bearbeitet wird. Werte schließen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search` ein.

- `list`
  - : Der Wert, der dem `list`-Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements sein, das sich im selben Dokument befindet. Das `<datalist>` bietet eine Liste von vordefinierten Werten als Vorschläge für den Benutzer bezüglich dieser Eingabe. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Nach den Spezifikationen wird das `list`-Attribut von `hidden`, `password`, `checkbox`, `radio`, `file` oder einer der Schaltflächenarten nicht unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette, tick Marks entlang eines Bereichs oder sogar eine Eingabe sehen, die sich wie ein {{HTMLElement("select")}} öffnet, aber auch nicht aufgelistete Werte erlaubt. Neue Informationen finden Sie in der [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den größten Wert im Bereich erlaubter Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist, z.B. für Daten oder Zeiten, kann der Wert von `max` unter dem Wert von `min` liegen, was darauf hinweist, dass der Bereich sich umwickeln kann; zum Beispiel können Sie einen Zeitbereich von 22 Uhr bis 4 Uhr morgens angeben.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn `maxlength` nicht angegeben ist oder ein ungültiger Wert angegeben wird, hat das Feld keine maximale Länge. Dieser Wert muss genauso groß oder größer als der Wert von `minlength` sein.

    Die Eingabe wird [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des Texts im Feld länger als `maxlength` ist, gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen als durch das `maxlength`-Attribut erlaubt einfügen. Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den negativsten Wert im Bereich erlaubter Werte. Wenn der in das Element eingegebene [`value`](#value) kleiner als dies ist, schlägt das Element die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem `max`-Attributwert sein. Wenn das `min`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert unter dem Minimum liegt, das durch das `min`-Attribut zulässig ist, wird die Constraint-Validierung die Formularabsendung verhindern. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist, z.B. für Daten oder Zeiten, kann der Wert von `max` unter dem Wert von `min` liegen, was darauf hinweist, dass der Bereich sich umwickeln kann; zum Beispiel können Sie einen Zeitbereich von 22 Uhr bis 4 Uhr morgens angeben.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem Wert des `maxlength` sein muss. Wenn `minlength` nicht angegeben ist oder ein ungültiger Wert angegeben wird, hat die Eingabe keine Mindestlänge.

    Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des Texts in das Feld weniger als `minlength` ist, gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}, und die Formular-Übermittlung verhindern. Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das Boolean-Attribut `multiple`, wenn gesetzt, bedeutet, dass der Benutzer durch Komma getrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit dem `file`-Input auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `name`
  - : Eine Zeichenkette, die einen Namen für die Eingabesteuerung angibt. Dieser Name wird zusammen mit dem Wert der Steuerung gesendet, wenn die Formulardaten gesendet werden.

    Betrachten Sie den `name` als ein erforderliches Attribut (auch wenn es nicht so ist). Wenn eine Eingabe keinen angegebenen `name` hat, oder der `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerungen, deaktivierte Radiobuttons, deaktivierte Kontrollkästchen und Reset-Buttons werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_` : Wenn verwendet als Name eines `<input>`-Elements des Typs {{HTMLElement("input/hidden", "hidden")}}, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "User-Agent")}} auf das für die Formularübermittlung verwendete Zeichenencoding gesetzt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut schafft ein einzigartiges Verhalten für Radiobuttons.

    Nur ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons kann zu einem Zeitpunkt ausgewählt werden. Die Auswahl eines beliebigen Radiobuttons in dieser Gruppe deaktiviert automatisch einen aktuell ausgewählten Radiobutton in derselben Gruppe. Der Wert dieses einen ausgewählten Radiobuttons wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Wenn Sie in eine Reihe von gleichnamigen Gruppen von Radiobuttons wechseln, erhält, wenn einer aktiviert ist, dieser den Fokus. Wenn sie nicht zusammen in der Quelldatei gruppiert sind, springt der Fokus beim Wechsel in die Gruppe auf den ersten in der Gruppe gefundenen, der nicht aktiviert ist. Mit anderen Worten, wenn einer aktiviert ist, wird beim Wechsel der Fokus auf die nicht aktivierten Radiobuttons in der Gruppe übersprungen. Wenn keiner aktiviert ist, geht der Fokus auf die Radiobutton-Gruppe, wenn der erste Button in der gleichnamigen Gruppe erreicht ist.

    Sobald ein Radiobutton in einer Gruppe den Fokus hat, wechselt die Nutzung der Pfeiltasten durch alle Radiobuttons des selben Namens, auch wenn die Radiobuttons nicht zusammen in der Quelldatei gruppiert sind.

    Wenn ein Eingabeelement einen `name` gegeben wird, wird dieser Name zu einer Eigenschaft des eignernden Formularelements [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft. Wenn Sie eine Eingabe haben, deren `name` `guest` gesetzt ist und eine andere deren `name` `hat-size`, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein, und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formular-Elemente einen `name` zu geben, der einer integrierten Eigenschaft des Formulars entspricht, da Sie dann die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompilieren, den der [`value`](#value) des Eingabefelds erfüllen muss, um die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie er in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Um das Muster zu kompilieren, sollten keine Vorwärts-Slashes um den Mustertext angegeben werden:
    1. Das Muster wird automatisch mit `^(?:` und `)$` umschlossen, so dass die Übereinstimmung mit dem _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. Das `'v'`-Flag wird spezifiziert, so dass das Muster als eine Sequenz von Unicode-Codestaus gesehen wird, anstatt als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden ist aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert. Wenn das pattern-Attribut gültig ist und ein nicht leerer Wert nicht dem Muster entspricht, wird die Constraint-Validierung die Formularübermittlung verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden mit Kommas getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format durch Hinzufügen eines erklärenden Textes in der Nähe. Sie können auch einen [`title`](#title)-Attribut einfügen, um die Anforderungen zur Übereinstimmung mit dem Muster zu erläutern. Die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erläuterung ist für Zugänglichkeit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das `placeholder`-Attribut dem Benutzer einen kurzen Hinweis darauf, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder ein kurzer Satz sein, der einen Hinweis auf den erwarteten Datentyp gibt, und keine Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenvorschübe enthalten. Wenn zum Beispiel ein Feld dazu dient, den Vornamen eines Benutzers aufzunehmen, und sein Label "Vorname" ist, wäre ein geeigneter Platzhalter beispielsweise "z. B. Mustafa".

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erläutern, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für mehr Informationen.

- `popovertarget`
  - : Verwandelt ein `<input type="button">`-Element in einen Popover-Steuerknopf; nimmt die ID des Popover-Elements, das gesteuert werden soll, als seinen Wert. Siehe die [Popover-API](/de/docs/Web/API/Popover_API)-Landeseite für weitere Details. Die Herstellung einer Beziehung zwischen einem Popover und seinem Aufrufer-Button mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Invoker und platziert das Popover in einer logischen Position in der Tastatur-Fokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und Hilfsmitteltechnologie-Benutzer (AT) zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`
  - : Gibt die auszuführende Aktion auf einem durch eine Steuerung `<input type="button">` gesteuerten Popover-Element an. Mögliche Werte sind:
    - `"hide"`
      - : Der Knopf wird ein angezeigtes Popover verstecken. Wenn Sie ein bereits verstecktes Popover zu verstecken versuchen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Knopf wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Knopf wird ein Popover zwischen Anzeige und Verstecken umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerungsschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten sollte. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) für mehr Informationen.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Formulareigentümer-Formular gesendet werden kann. Das `required`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für mehr Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`, gibt das `size`-Attribut an, wie viel der Eingabe angezeigt wird. Grundsätzlich dasselbe Ergebnis wie das Setzen der CSS-Eigenschaft [`width`](/de/docs/Web/CSS/width), mit einigen Besonderheiten. Die tatsächliche Maßeinheit des Wertes hängt vom Eingabefeldtyp ab. Für `password` und `text` sind es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`
  - : Gültig nur für den `image`-Eingabebutton, es ist die URL der Bilddatei darzustellen, um den graphischen Submit-Button zu repräsentieren. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, ist das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut eine Zahl, die die Granularität angibt, die der Wert einhalten muss. Nur Werte, die ein ganzzahliger Vielfaches des Step-Referenzwertes sind, sind gültig. Der Step-Referenzwert ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), falls angegeben, [`value`](#value) andernfalls oder `0`, wenn weder angegeben ist (außer für `week`, die einen Standard-Step-Referenzwert von −259,200,000 hat, was den Beginn der Woche `1970-W01` darstellt).

    Wenn nicht explizit enthalten:
    - `step` standardmäßig auf 1 für `number` und `range`.
    - Jeder datum/zeit Eingabetyp hat einen Standard-`step`-Wert, der für den Typ angemessen ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein—ganzzahlig oder float—oder der spezielle Wert `any`, was bedeutet, dass

keine Schrittweite erforderlich ist, alle Werte zulässig sind (abgesehen von anderen Einschränkungen, wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Wenn Sie zum Beispiel `<input type="number" min="10" step="2">` haben, dann ist jede gerade Zahl, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede ganze Zahl gültig, aber Kommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig auf `1` steht. Damit `4.2` gültig ist, hätte Schritt auf `any`, 0.1, 0.2, gesetzt werden müssen oder der Minimumwert wäre eine Zahl, die mit `.2` endet, wie etwa `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht den Stepping-Konfigurationen entsprechen, wird der Wert bei der Einschränkungsvalidierung als ungültig betrachtet und stimmt mit der `:invalid`-Pseudoklasse überein.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- `tabindex`
  - : Globales Attribut gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob ein Element Eingabefokus erhalten kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen außer dem Typ `hidden` fokussierbar sind, sollte dieses Attribut nicht für Formularsteuerungen verwendet werden, weil dadurch die Verwaltung der Reihenfolge des Fokus für alle Elemente im Dokument erforderlich sein würde, mit dem Risiko, die Benutzbarkeit und Zugänglichkeit zu beeinträchtigen, wenn es falsch gemacht wird.

- `title`
  - : Globales Attribut gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text enthält, der beratende Informationen über das Element darstellt, zu dem es gehört. Solche Informationen können typischerweise, aber nicht unbedingt, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als die primäre Erklärung des Zwecks der Formularsteuerung verwendet werden. Stattdessen sollte das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das `id` Attribut der Formularsteuerung gesetzt ist, verwendet werden. Siehe [Labels](#labels) unten.

- `type`
  - : Eine Zeichenkette, die den Typ der Steuerung angibt, der gerendert werden soll. Zum Beispiel, um ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben wird), wird der `text`-Eingabetyp verwendet, um ein Klartext-Eingabefeld zu erstellen.

    Erlaubte Werte sind in [Eingabetypen](#input_types) oben aufgelistet.

- `value`
  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Anfangswert und von da an kann er jederzeit geändert oder abgerufen werden, indem JavaScript verwendet wird, um auf die jeweilige [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft `value` zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`
  - : Gültig nur für den `image`-Eingabebutton, die `width` ist die Breite der Bilddatei darzustellen, um den grafischen Submit-Button zu repräsentieren. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind auch in einigen Browsern verfügbar. Grundsätzlich sollte deren Verwendung vermieden werden, es sei denn, es kann nicht anders.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Events gesendet werden, um das Live-Update von Suchergebnissen zu ermöglichen, während der Benutzer noch den Wert des Felds bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenkette, die den Typ der Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt, während er das Feld bearbeitet; dies wird verwendet, um ein geeignetes Label für diese Taste auf einer virtuellen Tastatur festzulegen. <strong>Da dieses Attribut veraltet ist, benutzen Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Orientierung des Bereichsreglers fest. <strong>Nur Firefox.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Elementen, die in der Dropdown-Liste vorheriger Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob der Benutzer nur ein Verzeichnis (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) auswählen kann.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (so unterstützt von Safari, Opera, Chrome, etc.), die, wenn vorhanden, den {{Glossary("user_agent", "User-Agent")}} anweist, die Eingabe als Echtzeitsuche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Events an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Event nur gesendet, wenn der Benutzer explizit eine Suche initiiert (wie durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

    Das `search`-Event hat eine Ratebegrenzung, so dass es nicht häufiger gesendet wird, als in einem implementierungsdefinierten Intervall festgelegt ist.

- `orient` {{non-standard_inline}}
  - : Ähnlich wie die nicht standardisierte CSS-Eigenschaft -moz-orient, welche die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente beeinflusst, definiert das `orient`-Attribut die Orientierung des Bereichsreglers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, was bedeutet, dass der Bereich vertikal gerendert wird. Siehe [Vertikale Formularelemente erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularelemente.

- `results` {{non-standard_inline}}
  - : Das `results`-Attribut—nur von Safari unterstützt—is ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü für frühere Suchanfragen des `<input>`-Elements angezeigt werden soll.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert wird gegeben, wird die standardmäßige maximale Anzahl der Einträge des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass nur Verzeichnisse für die Auswahl durch den Benutzer in der Dateiauswahloberfläche zur Verfügung stehen sollten. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später nutzbar. Allerdings, auch wenn es relativ breite Unterstützung hat, ist es immer noch nicht standardisiert und sollte nur verwendet werden, wenn Sie keine Alternative haben.

## Methoden

Die folgenden Methoden werden durch die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Auch verfügbar sind jene Methoden, die von den übergeordneten Schnittstellen, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget), spezifiziert sind.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; ansonsten gibt `false` zurück und ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis beim Element auslöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; sonst gibt `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis beim Element aus, und (wenn das Ereignis nicht abgebrochen wird) meldet das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements, wenn der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder Kalenderdatumseingabe) macht diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt werden soll, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Textinhalt des angegebenen Bereichs von Zeichen im Eingabeelement auf eine gegebene Zeichenfolge. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der bestehende Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines Texteingabeelements aus. Tut nichts für Eingaben, die nicht als Texteinpfelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Wähler für das Eingabeelement an, das normalerweise angezeigt wird, wenn das Element ausgewählt wird, wird jedoch von einem Knopfdruck oder einer anderen Benutzerinteraktion ausgelöst.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Eigenschaften, die für Nichtformular-Elemente nicht anwendbar sind. Es gibt CSS-Selektoren, die spezifisch auf Formularsteuerungen basierend auf ihren UI-Funktionen abzielen können, auch bekannt als UI-Pseudoklassen. Das Input-Element kann auch nach Typ mit Attributselektoren gezielt angesprochen werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudo-Klassen, die für das
    <code>&#x3C;input></code>
    Element relevant sind:
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
        Jedes aktuell aktivierte Element, das aktiviert werden kann (selektiert, angeklickt,
        eingetippt usw.) oder den Fokus akzeptieren kann und auch einen deaktivierten Zustand hat, in
        dem es nicht aktiviert werden kann oder den Fokus akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes aktuell deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es
        ansonsten aktiviert werden könnte (selektiert, angeklickt, eingetippt usw.) oder
        den Fokus akzeptieren könnte, wenn es nicht deaktiviert wäre.
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
        Element, das aktuell <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt,
        einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elemente mit dem <a href="#placeholder"><code>placeholder</code></a> Attribut, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die standardmäßig in einer Gruppe verwandter Elemente sind.
        Stimmt mit {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Input-Typen überein, die beim Laden oder Rendern der Seite aktiviert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Stimmt mit {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Input-Typen überein, die
        aktuell aktiviert sind (und mit {{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, das aktuell ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle
        Radio-Buttons mit demselben Namenswert im Formular nicht aktiviert sind, und
        {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularsteuerungen, auf die eine Constraint-Validierung angewendet werden kann und die
        derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularsteuerungen, auf die eine Constraint-Validierung angewendet wird und die derzeit
        nicht gültig sind. Passend zu einer Formularsteuerung, deren Wert nicht mit den
        durch ihre Attribute festgelegten Einschränkungen übereinstimmt, wie
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht-leeres Input, dessen aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>-Attribute angegebenen Bereichsgrenzen liegt und die <a href="#step"><code>step</code></a> einhält.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht-leeres Input, dessen aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a>-Attribute angegebenen Bereichsgrenzen liegt oder
        nicht der <a href="#step"><code>step</code></a>-Einschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Stimmt nur mit Elementen überein, die erforderlich sein können.
        Das Attribut auf einem nicht-erforderlichen Element führt nicht zu einem Treffer.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut NICHT gesetzt hat.
        Stimmt nicht mit Elementen überein, die nicht erforderlich sein können.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente, die aktuell keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, wird aber beim Verlassen aktiviert. Stimmt mit
        ungültigen Eingaben nur nach Benutzerinteraktion überein, zum Beispiel durch Fokussieren
        auf die Steuerung, Verlassen der Steuerung oder Versuch, das Formular
        mit der ungültigen Steuerung zu senden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Picker anzeigen, aus dem der Benutzer einen Wert auswählen kann (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — aber nur, wenn das Element im offenen Zustand ist, d.h. wenn der Picker angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudo-Klassen-Beispiel

Wir können ein Beschriftungselement für ein Kontrollkästchen basierend darauf stylen, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} der {{htmlelement('label')}}, die direkt nach einem aktivierten Input folgt. Wir haben keine Stile angewendet, wenn das `input` nicht aktiviert ist.

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

Es ist möglich, verschiedene Arten von Formularsteuerungen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren passen zu Elementen basierend auf entweder nur der Anwesenheit eines Attributs oder dem Wert eines bestimmten Attributs.

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

Standardmäßig ist das Erscheinungsbild von Placeholder-Text transluzent oder hellgrau. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder`-Text](#placeholder) des Inputs. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Satz von CSS-Eigenschaften, der auf das {{cssxref("::first-line")}}-Pseudoelement anwendbar ist, kann in einer Regel verwendet werden, die `::placeholder` im Selektor verwendet.

### appearance

Die {{cssxref("appearance")}}-Eigenschaft ermöglicht die Darstellung von (fast) jedem Element im nativen Stil der Plattform basierend auf dem Thema des Betriebssystems sowie die Entfernung jeglicher plattformeigener Stilierung mit dem Wert `none`.

Sie könnten ein `<div>` wie ein Radio-Button aussehen lassen mit `div {appearance: radio;}` oder ein Radio wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}`, aber lassen Sie es.

Durch das Setzen von `appearance: none` werden plattformeigene Grenzen entfernt, aber nicht die Funktionalität.

### caret-color

Eine spezifische Eigenschaft für texteingaberelierte Elemente ist die CSS-Eigenschaft {{cssxref("caret-color")}}, die es ermöglicht, die Farbe des Textcursor für die Eingabe zu definieren:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie haben standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und es Formularelementen zu ermöglichen, sich in ihrer Größe anzupassen, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die sich an ihren Inhalt anpassen und wachsen, je mehr Text eingegeben wird. Dies funktioniert mit Input-Typen, die direkte Texteingabe akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Input-Typen [`file`](/de/docs/Web/HTML/Reference/Elements/input/file), und {{htmlelement("textarea")}}-Elementen.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textlichen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es das ist, können die Position und die Größe des Elements innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML siehe:

- [Farbe mit CSS auf HTML-Elemente anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Styles für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Es werden Labels benötigt, um Hilfstext mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element liefert erklärende Informationen zu einem Formularfeld, die _immer_ angemessen sind (abgesehen von etwaigen Layout-Bedenken, die Sie haben). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugehörige Labels

Die semantische Paarung von `<input>` und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Bildschirmlesegeräte. Indem sie durch das Attribut `for` des `<label>`-Elements gekoppelt werden, verbinden Sie das Label mit der Eingabe auf eine Weise, die es Bildschirmlesegeräten ermöglicht, Eingaben gegenüber den Benutzern präziser zu beschreiben.

Es genügt nicht, einfachen Text neben dem `<input>`-Element zu haben. Vielmehr erfordert die Benutzerfreundlichkeit und Zugänglichkeit die Einbindung eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht zugänglich: Es gibt keine Beziehung zwischen der Aufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere "Treffer"-Fläche für Maus- und Touchscreen-Benutzer zum Klicken oder Berühren. Durch die Paarung eines `<label>` mit einem `<input>`, fokussiert das Klicken auf eines von beiden das `<input>`. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu "beschreiben", wird dies nicht passieren. Wenn der Aufforderungsteil des Eingabebereichs zur Aktivierungsfläche des Inputs gehört, ist dies hilfreich für Menschen mit motorischen Beeinträchtigungen.

Als Webentwickler sollten wir niemals davon ausgehen, dass Menschen alles wissen, was wir wissen. Die Vielfalt der Menschen, die das Web benutzen - und damit praktisch garantiert auf Ihrer Website - führt fast unvermeidlich dazu, dass einige Ihrer Besucher auf Ihrer Seite abweichende Denkprozesse und/oder Umstände haben, die ihre Interpretation Ihrer Formulare ohne klare und korrekt dargelegte Labels signifikant von Ihrer eigenen unterscheidet.

#### Placeholder sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text anzugeben, der innerhalb des Inhaltsbereichs des `<input>`-Elements selbst erscheint, wenn es leer ist. Der Placeholder sollte nie erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, weil es das nicht ist. Der Placeholder wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Nicht nur, dass der Placeholder nicht barrierefrei für Screenreader ist, sondern sobald der Benutzer irgendeinen Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert hat, verschwindet der Placeholder. Browser mit automatischen Seitenübersetzungsfunktionen können Attribute beim Übersetzen auslassen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie können. Wenn Sie ein `<input>`-Element beschriften müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert aber _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, _immer_ auch serverseitig verifizieren und eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurückgeben, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}}- oder {{cssxref(":invalid")}}-UI-Zuständen basierend auf dem aktuellen Zustand jeder Eingabe zu stylen, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser eine Client-seitige Validierung beim (versuchten) Absenden des Formulars an. Beim Absenden des Formulars zeigt der unterstützende Browser eine Fehlermeldung bei der ersten ungültigen Formularsteuerung an; entweder eine standardmäßige Nachricht basierend auf dem Fehler oder eine von Ihnen festgelegte Nachricht.

Einige Input-Typen und andere Attribute setzen Grenzen für die Werte, die für einen bestimmten Input gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Es können mehrere Fehler auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, jedoch keine gerade Ganzzahl (entspricht nicht den Anforderungen des `step`-Attributs) oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich der möglichen Werte periodisch ist (d.h. bei Erreichen des höchstmöglichen Wertes wickeln sich die Werte wieder zum Anfang anstelle des Endes), ist es möglich, dass die Werte der [`max`](#max)- und [`min`](#min)-Eigenschaften umgekehrt sind, was anzeigt, dass der Bereich der zulässigen Werte bei `min` beginnt, sich bis zum niedrigst möglichen Wert erstreckt und dann bis `max` weitergeht. Dies ist besonders nützlich für Daten und Zeiten, beispielweise wenn Sie den Bereich von 20 Uhr bis 8 Uhr morgens zulassen möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und deren Werte können zu einem spezifischen Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Validitätsobjekt-Fehler hängen von den <code>&lt;input&gt;</code>-Attributen und ihren Werten ab:
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
        Tritt auf, wenn der Wert größer als der Maximalwert ist, der durch
        das <code>max</code>-Attribut definiert wird.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die nach der <code>maxlength</code>-Eigenschaft zulässige Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner als der Minimalwert ist, der durch das <code>min</code>-Attribut definiert wird.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code>-Eigenschaft geforderte Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Pattern-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> dieses nicht erfüllt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden, der Wert jedoch <code>null</code> ist oder ein Radio oder Checkbox nicht aktiviert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht der Schritteinstellung. Der standardmäßige Schritt ist <code>1</code>, daher sind nur Ganzzahlen gültig, wenn <code>type="number"</code> ist, wenn kein Schritt einbezogen ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, z.B. eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement das Attribut `required` nicht hat, ist kein Wert oder eine leere Zeichenfolge nicht ungültig. Selbst wenn die obigen Attribute vorhanden sind, mit Ausnahme von `required`, wird eine leere Zeichenfolge nicht zu einem Fehler führen.

Wir können Grenzen setzen, welche Werte wir akzeptieren, und unterstützende Browser validieren diese Formularwerte nativ und benachrichtigen den Benutzer bei einem Fehler, wenn das Formular gesendet wird.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält die Schnittstelle `validityState` die booleschen readonly-Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt enthält:

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

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund für das Scheitern der Validierung zutrifft, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

Wenn ein Fehler vorliegt, werden unterstützende Browser sowohl den Benutzer informieren als auch verhindern, dass das Formular gesendet wird. Ein Wort der Vorsicht: Wenn eine benutzerdefinierte Fehlermeldung auf einen echten Wert (etwas anderes als die leere Zeichenfolge oder `null`) gesetzt ist, wird das Formular daran gehindert, gesendet zu werden. Wenn keine benutzerdefinierte Fehlermeldung angezeigt wird und keine der anderen Eigenschaften `true` zurückgibt, ist `valid` `true` und das Formular kann gesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Validitätsnachricht auf die leere Zeichenfolge setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt ist, wird es unterlassen, zu senden, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung präsentieren möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandten) Elementen verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formvalidierungsfunktionen führen dazu, dass dies eine standardmäßige Fehlermeldung anzeigt, wenn Sie versuchen, das Formular zu senden, ohne ein gültiges Feld auszufüllen oder mit einem Wert, der das `pattern` nicht erfüllt.

Wenn Sie stattdessen benutzerdefinierte Fehlermeldungen anzeigen möchten, könnten Sie JavaScript wie das Folgende verwenden:

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

In Kürze:

- Wir überprüfen den gültigen Zustand des Input-Elements jedes Mal, wenn sich sein Wert ändert, indem wir die Methode `checkValidity()` über den `input`-Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst und die `invalid`-Ereignis-Handler-Funktion wird ausgeführt. Innerhalb dieser Funktion finden wir heraus, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, indem wir einen `if ()`-Block verwenden, und setzen eine benutzerdefinierte Gültigkeitsfehlermeldung.
- Infolgedessen, wenn der Eingabewert ungültig ist, wenn die Schaltfläche "Senden" gedrückt wird, wird eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er wie erwartet gesendet. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit durch Aufrufen von `setCustomValidity()` mit einem leeren Zeichenfolgenwert storniert werden. Daher tun wir das jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und zuvor eine benutzerdefinierte Gültigkeit festgelegt wurde, wird das Input bei der Übermittlung als ungültig registriert, auch wenn es derzeit einen gültigen Wert enthält.

> [!NOTE]
> Immer sowohl clientseitige als auch serverseitige Eingabebeschränkungen validieren. Constraint-Validierung entfernt nicht die Notwendigkeit zur Validierung auf der _Serverseite_. Ungültige Werte können immer noch von älteren Browsern oder durch böswillige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte ein proprietäres Fehlerattribut - `x-moz-errormessage` - über viele Versionen hinweg, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise festzulegen. Dies wurde ab Version 66 entfernt (siehe [Firefox Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die zulässigen Eingaben für bestimmte `<input>`-Typen hängen vom Gebietsschema ab. In einigen Gebietsschemas ist 1.000,00 eine gültige Zahl, während in anderen Gebietsschemas die gültige Eingabemethode 1.000,00 lautet.

Firefox verwendet die folgenden Heuristiken, um das Gebietsschema zu bestimmen, um die Eingabe des Benutzers zu validieren (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die von einem `lang`/`xml:lang`-Attribut auf dem Element oder einem seiner Elternteile angegeben wird.
- Versuchen Sie die Sprache, die von einem `Content-Language`-HTTP-Header angegeben wird. Oder,
- Wenn keine angegeben ist, verwenden Sie das Gebietsschema des Browsers.

## Barrierefreiheit

### Labels

Bei der Einbeziehung von Eingaben ist es eine Barrierefreiheitsanforderung, Labels daneben hinzuzufügen. Dies ist erforderlich, damit diejenigen, die unterstützende Technologien verwenden, erkennen können, worum es bei der Eingabe geht. Außerdem erhält das Klicken oder Berühren eines Labels den Fokus auf das damit verbundene Formularelement. Dadurch wird die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer verbessert, der Bereich, den ein Benutzer durch Klicken oder Berühren aktivieren kann, vergrößert. Dies ist besonders nützlich (und sogar notwendig) für Radio-Buttons und Kontrollkästchen, die klein sind. Für weitere Informationen zu Labels im Allgemeinen siehe [Labels](#labels).

Folgendes ist ein Beispiel dafür, wie das `<label>` mit einem `<input>`-Element in den oben genannten Stil integriert werden kann. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert mit dem `id` der Eingabe übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bereitstellen, um sie leicht aktivieren zu können. Dies hilft einer Vielzahl von Menschen, einschließlich Personen mit motorischen Kontrolleinschränkungen und Personen, die unpräzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44x44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Erfolgscriterion 2.5.5: Zielgröße | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, aufgeführt, übermittelbar, zurücksetzbar, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann kennzeichnungsfähiges Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine; es ist ein {{Glossary("void_element", "Void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
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
            oder <code>text</code> mit <code>list</code>-Attribut: kein
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

- [Formularbeschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Anleitung zur Erstellung benutzerdefinierter Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Styles für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Vertikale Formularsteuerungen erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
