---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

Das **`<input>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Nutzer zu akzeptieren. Je nach Gerät und {{Glossary("user_agent", "Benutzeragent")}} stehen viele verschiedene Arten von Eingabedaten und Steuer-Widgets zur Verfügung. Das `<input>`-Element ist eines der mächtigsten und komplexesten in ganz HTML aufgrund der schieren Anzahl an Kombinationen von Eingabetypen und Attributen.

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

## `<input>`-Typen

Wie ein `<input>` funktioniert, variiert erheblich je nach Wert seines [`type`](#type)-Attributs, daher werden die verschiedenen Typen auf ihren eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird standardmäßig der Typ `text` verwendet.

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
      <td>Ein Auswahlkästchen, das einzelne Werte ausgewählt/abgewählt werden lässt.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Eine Steuerung zur Spezifizierung einer Farbe; öffnet einen Farbwähler, wenn er in unterstützenden Browsern aktiv ist.
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
        Eine Steuerung zum Eingeben eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumsauswahl-Dialog oder numerische Räder für Jahr, Monat, Tag, wenn aktiv in unterstützenden Browsern.
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
        Eine Steuerung zum Eingeben eines Datums und einer Zeit, ohne Zeitzone. Öffnet einen Datumsauswahl-Dialog oder numerische Räder für Datums- und Zeitkomponenten, wenn aktiv in unterstützenden Browsern.
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
        Eine Steuerung, die es dem Benutzer ermöglicht, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Dateitypen zu definieren, die die Steuerung auswählen kann.
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
        Eine Steuerung, die nicht angezeigt wird, deren Wert jedoch an den
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
      <td>Eine Steuerung zum Eingeben eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Eine Steuerung zum Eingeben einer Zahl. Zeigt einen Spinner an und fügt eine Standardvalidierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Radiobutton, der die Auswahl eines einzelnen Wertes aus mehreren Auswahlmöglichkeiten mit dem gleichen <a href="#name"><code>name</code></a>-Wert zulässt.
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
        Eine Steuerung zum Eingeben einer Zahl, deren exakter Wert nicht wichtig ist.
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
        Ein einzeiliges Textfeld zum Eingeben von Suchbegriffen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann ein Löschsymbol in unterstützenden Browsern enthalten, das zum Leeren des Feldes verwendet werden kann. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
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
        Eine Steuerung zum Eingeben einer Telefonnummer. Zeigt eine Telefontastatur in einigen Geräten mit dynamischen Tastaturen an.
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
      <td>Eine Steuerung zum Eingeben eines Zeitwerts ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zum Eingeben einer URL. Sieht aus wie eine <code>text</code>-Eingabe, hat jedoch Validierungsparameter und relevante Tastaturen in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Eine Steuerung zum Eingeben eines Datums bestehend aus einer Jahr-Woche-Nummer und einer Wochennummer ohne Zeitzone.
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
        Eine Steuerung zum Eingeben eines Datums und einer Zeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so leistungsfähig aufgrund seiner Attribute; das [`type`](#type)-Attribut, wie oben mit Beispielen beschrieben, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch das gleiche Set von Attributen. In der Praxis haben jedoch die meisten Attribute nur Auswirkungen auf einen bestimmten Teil von Eingabetypen. Zusätzlich beeinflussen einige Attribute eine Eingabe in unterschiedlicher Weise, je nach Eingabetyp.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut näher beschreibt, zusammen mit den zugeordneten Eingabetypen. Solche, die zu den meisten oder allen Eingabetypen gehören, sind unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind – oder Attribute, die zwar allgemein für alle Eingabetypen sind, aber spezielle Verhaltensweisen auf einem bestimmten Eingabetyp zeigen – sind stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element beinhalten die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                                                      |
| --------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis auf erwarteten Dateityp in Datei-Upload-Steuerelementen                                                   |
| [`alt`](#alt)                                 | `image`                                                                | alt-Attribut für den Image-Typ. Erforderlich für Barrierefreiheit                                                 |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email`, und `password`                              | Steuert die automatische Großschreibung in eingegebenem Text.                                                     |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio`, und Buttons                            | Hinweis für das automatische Ausfüllen von Formularen                                                             |
| [`capture`](#capture)                         | `file`                                                                 | Medieneingabemethode in Datei-Upload-Steuerelementen                                                              |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Ob der Befehl oder die Steuerung markiert ist                                                                     |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfeldes, das für das Senden der Richtung des Elements bei der Formularübermittlung verwendet wird |
| [`disabled`](#disabled)                       | alle                                                                   | Ob das Formularsteuerungselement deaktiviert ist                                                                  |
| [`form`](#form)                               | alle                                                                   | Verknüpft die Steuerung mit einem Formularelement                                                                 |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL für die Formularübermittlung abzugeben                                                                        |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Zu verwendender Enkodierungstyp für die Formulardatensatzübermittlung                                             |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | Zu verwendende HTTP-Methode für die Formularübermittlung                                                          |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Formularkontrollvalidierung für die Formularübermittlung umgehen                                                  |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browservorgang für die Formularübermittlung                                                                       |
| [`height`](#height)                           | `image`                                                                | Wie das Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                                             |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio`, und Buttons      | Wert des id-Attributs der {{htmlelement('datalist')}} von Autovervollständigungsmöglichkeiten                     |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Maximalwert                                                                                                       |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Länge (Anzahl der Zeichen) des `value`                                                                   |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Minimalwert                                                                                                       |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Länge (Anzahl der Zeichen) des `value`                                                                   |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolean. Ob mehrere Werte erlaubt sind                                                                            |
| [`name`](#name)                               | alle                                                                   | Name des Formularsteuerungselements. Wird als Teil eines Namens-/Werte-Paares mit dem Formular übermittelt        |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, das der `value` erfüllen muss, um gültig zu sein                                                          |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der in der Formularsteuerung angezeigt wird, wenn kein Wert eingestellt ist                                 |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Bezeichnet ein `<input type="button">` als Steuerung für ein Popover-Element                                      |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt die Aktion an, die eine Popover-Steuerung ausführen soll                                                     |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolean. Der Wert ist nicht bearbeitbar                                                                           |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss überprüft werden, damit das Formular absendbar ist                   |
| [`size`](#size)                               | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe der Steuerung                                                                                               |
| [`src`](#src)                                 | `image`                                                                | Wie das `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                                      |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Inkrementelle Werte, die gültig sind                                                                              |
| [`type`](#type)                               | alle                                                                   | Typ der Formularsteuerungselemente                                                                                |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht dem Anfangswert                                        |
| [`width`](#width)                             | `image`                                                                | Gleichermaßen wie das `width`-Attribut für {{htmlelement('img')}}                                                 |

Einige zusätzliche nicht standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgelistet.

### Individuelle Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)

  - : Gültig nur für den `file`-Eingabetyp, das `accept`-Attribut definiert, welche Dateitypen in einem `file`-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alt`

  - : Gültig nur für den `image`-Button, das Attribut `alt` bietet Alternativtext für das Bild und zeigt den Wert des Attributs an, falls das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`

  - : Steuert, ob der eingegebene Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Siehe die globale Attributseite [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)

  - : (**Nicht** ein Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als seinen Wert eine durch Leerzeichen getrennte Zeichenkette an, die beschreibt, welche Art von Autovervollständigungsfunktionalität die Eingabe bieten soll. Eine typische Implementierung der Autovervollständigung ruft frühere Werte, die im gleichen Eingabefeld eingegeben wurden, ab, aber es können komplexere Formen der Autovervollständigung existieren. Zum Beispiel könnte ein Browser mit der Kontaktliste eines Geräts integriert werden, um `email`-Adressen in einem E-Mail-Eingabefeld zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für erlaubte Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Wirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, es ist für alle Eingabetypen gültig, außer `checkbox`, `radio`, `file` oder irgendeiner der Buttontypen.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` für `hidden` leicht unterschiedlich zu anderen Eingabetypen ist.

- `autofocus`

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass die Eingabe automatisch den Fokus erhalten soll, wenn die Seite fertig geladen ist (oder wenn der {{HTMLElement("dialog")}} das Element enthaltend angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann vor dem Event [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) den Fokus erhalten.

    Nicht mehr als ein Element im Dokument kann das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element verwendet wird, erhält das erste Element mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben vom Typ `hidden` angewendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Automatisches Fokussieren einer Formularsteuerung kann Benutzer mit Sehbehinderungen, die Bildschirmlesetechnologie verwenden, und Personen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, "teleportieren" Bildschirmleser ihren Benutzer zur Formularsteuerung ohne vorherige Warnung.

    Verwenden Sie sorgfältige Überlegungen zur Barrierefreiheit, wenn Sie das `autofocus`-Attribut anwenden. Automatisches Fokussieren auf eine Steuerung kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label der Formularsteuerung ankündigt, die den Fokus erhält, gibt der Bildschirmleser nichts vor dem Label an, und der sehende Benutzer auf einem kleinen Gerät verpasst gleichermaßen den Kontext, der durch den vorhergehenden Inhalt erstellt wird.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den `file`-Eingabetyp, definiert das `capture`-Attribut, welches Medium – Mikrofon, Video oder Kamera – verwendet werden soll, um eine neue Datei zur Hochladung mit `file`-Upload-Steuerung in unterstützenden Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`

  - : Gültig sowohl für den Typ `radio` als auch `checkbox`, ist `checked` ein Boolean-Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass der Radiobutton der aktuell ausgewählte in der Gruppe gleichnamiger Radio-Buttons ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Auswahlkästchen standardmäßig markiert ist (wenn die Seite geladen wird). Es gibt _nicht_ an, ob diese Checkbox momentan markiert ist: wenn der Zustand des Kontrollkästchens geändert wird, verändert dieser Inhaltsattribut nicht den Status. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen werden Checkboxen und Radiobuttons-Werte nur eingeschlossen in die übermittelten Daten, wenn sie aktuell `checked` sind. Wenn sie es sind, werden der Name und die Wert(e) der markierten Steuerungen übermittelt.
    >
    > Zum Beispiel, wenn eine Checkbox, deren `name` `fruit` ist, einen `value` von `cherry` hat, und das Kontrollkästchen markiert ist, werden die übermittelten Formulardaten `fruit=cherry` beinhalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es in den Formulardaten überhaupt nicht aufgeführt. Der Standard `value` für Checkboxen und Radiobuttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel`, und `email` Eingabetypen, ermöglicht das `dirname`-Attribut die Übermittlung der Richtung des Elements. Wenn enthalten, wird die Formularsteuerung mit zwei Namens/Werte-Paaren übermittelt: das erste ist das [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name mit einem Wert von `ltr` oder `rtl` wie vom Browser festgelegt.

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

    Wenn das obige Formular übermittelt wird, verursacht es, dass die Eingabe sowohl das `name` / `value`-Paar `fruit=cherry` als auch das `dirname` / Richtungs-Paar `fruit-dir=ltr` gesendet werden.
    Weitere Informationen finden Sie im [`dirname` Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)

  - : Ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer nicht mit der Eingabe interagieren sollte. Deaktivierte Eingaben werden typischerweise in einer dunkleren Farbe oder mit einer anderen Form der Kennzeichnung gerendert, dass das Feld nicht verfügbar ist.

    Insbesondere empfangen deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht von den Spezifikationen erforderlich, wird Firefox standardmäßig [den dynamischen deaktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seiten-Ladevorgänge hinweg beibehalten. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um dieses Feature zu steuern.

- `form`

  - : Ein Zeichenfolgenwert, der das {{HTMLElement("form")}}-Element spezifiziert, mit dem die Eingabe verknüpft ist (also dessen **Formulareigentümer**). Der Wert dieser Zeichenfolge, wenn vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im gleichen Dokument übereinstimmen. Wenn dieses Attribut nicht spezifiziert ist, wird das `<input>`-Element mit dem nächstgelegenen eingeschlossenen Formular verknüpft, falls vorhanden.

    Das `form`-Attribut lässt Sie eine Eingabe beliebig im Dokument platzieren, sie aber als Bestandteil eines Formulars anderswo im Dokument aufnehmen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft sein.

- `formaction`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formenctype`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formmethod`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formnovalidate`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formtarget`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `height`
  - : Gültig nur für den `image`-Button, ist die Höhe der Bilddatei, die zum Darstellen des grafischen Submit-Buttons angezeigt wird. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen eindeutigen Bezeichner (ID) definiert, der im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element zu identifizieren, wenn darauf verwiesen wird. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}}-Elements verwendet, um das Label mit der Formularsteuerung zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globales Wert, gültig für alle Elemente, bietet einen Hinweis an Browser, wie die Konfiguration der virtuellen Tastatur aussehen sollte, wenn dieses Element oder sein Inhalt bearbeitet wird. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal`, und `search`.
- `list`

  - : Der Wert, der dem `list`-Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements sein, das im gleichen Dokument enthalten ist. Der `<datalist>` bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden sollen. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Gemäß den Spezifikationen wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder einem der Button-Typen unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen, Strichmarkierungen entlang eines Bereichs oder sogar eine Eingabe angezeigt bekommen, die sich wie eine {{HTMLElement("select")}} öffnet, aber nicht aufgeführte Werte erlaubt. Prüfen Sie die [Tabelle zur Browser-Kompatibilität](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den größten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element erneut die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich überläuft; zum Beispiel, dies ermöglicht es Ihnen, einen Zeitbereich von 22 Uhr bis 4 Uhr anzugeben.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die maximale Zeichenfolgenlänge (gemessen in UTF-16-Codierungseinheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn keine `maxlength`-Attributwerte angegeben oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe wird erneut die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl schlagen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16-Codierungseinheiten ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen als die durch das `maxlength`-Attribut definierten Zeichen eingeben können. Die Constraint-Validierung wird nur angewandt, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den negativsten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) weniger als dieser ist, schlägt das Element die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewandt. Wenn das `min`-Attribut gültig ist und ein nicht-leerer Wert geringer ist als der durch das `min`-Attribut erlaubte Minimum, verhindert die Constraint-Validierung die Formularübermittlung. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich überläuft; zum Beispiel, dies ermöglicht es Ihnen, einen Zeitbereich von 22 Uhr bis 4 Uhr anzugeben.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimale Zeichenfolgenlänge (gemessen in UTF-16-Codierungseinheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss eine nicht-negative Ganzzahl sein, die kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn keine `minlength`-Attributwerte angegeben oder ein ungültiger Wert angegeben ist, hat das Eingabefeld keine Mindestlänge.

    Die Eingabe wird erneut die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl schlagen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16-Codierungseinheiten ist, was die Formularübermittlung verhindert. Die Constraint-Validierung wird nur angewandt, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)

  - : Das Boolean-Attribut `multiple`, wenn es gesetzt ist, bedeutet, dass der Benutzer kommagetrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit der `file`-Eingabe auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `name`

  - : Eine Zeichenkette, die einen Namen für die Eingabesteuerung spezifiziert. Dieser Name wird zusammen mit dem Wert der Steuerung übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als erforderliches Attribut (auch wenn es nicht ist). Wenn eine Eingabe keinen `name` angegeben hat oder der `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, abgewählte Radiobuttons, abgewählte Checkboxen und Reset-Buttons werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet, wird der Wert der Eingabe automatisch durch den {{Glossary("user_agent", "Benutzeragent")}} auf das verwendete Zeichensatz für die Formularübermittlung gesetzt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut schafft ein einzigartiges Verhalten für Radiobuttons.

    Nur ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons kann gleichzeitig aktiviert sein. Das Auswählen eines Radiobuttons in dieser Gruppe hebt automatisch die Auswahl eines aktuell ausgewählten Radiobuttons in der gleichen Gruppe auf. Der Wert dieses einen ausgewählten Radiobuttons wird zusammen mit dem Namen, wenn das Formular übermittelt wird, gesendet.

    Beim Wechseln in eine Serie von gleichnamigen Gruppen von Radiobuttons, wenn eine aktiviert ist, erhält diese den Fokus. Wenn sie in der Quellreihenfolge nicht zusammen gruppiert sind, wenn einer der Gruppe aktiviert ist, beginnt das Weitertappen in die Gruppe, wenn der erste der Gruppe erreicht wird, überspringend wird über alle, die nicht aktiviert sind. Mit anderen Worten, wenn einer aktiviert ist, überspringt das Weitertappen die nicht überprüften Radiobuttons in der Gruppe. Wenn keiner aktiviert ist, erhält die Radiobutton-Gruppe den Fokus, wenn der erste Button in der gleichen Namensgruppe erreicht wird.

    Sobald einer der Radiobuttons in einer Gruppe den Fokus erhält, navigieren die Pfeiltasten durch alle Radiobuttons mit demselben Namen, selbst wenn die Radiobuttons in der Quellreihenfolge nicht zusammen gruppiert sind.

    Wenn einem Eingabeelement ein `name` zugewiesen wird, wird dieser Name zu einer Eigenschaft des [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigentums des besitzenden Formularelements. Wenn Sie ein Eingabeelement mit dem `name` `guest` haben und ein weiteres mit dem `name` `hat-size`, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das Feld `guest` und `hatSize` das Objekt für das Feld `hat-size` sein.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einem eingebauten Formularelement entspricht, da Sie dann die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabelement überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, das Attribut `pattern` wird verwendet, um einen regulären Ausdruck zu kompilieren, dem der Eingabewert [`value`](#value) zur Passierung der [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) entsprechen muss. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie es in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Keine vorwärts gerichteten Schrägstriche sollten um den Mustertext angegeben werden. Beim Kompilieren des regulären Ausdrucks:

    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, so dass die Übereinstimmung mit dem _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag spezifiziert, so dass das Muster als Folge von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird.

    Wenn das `pattern`-Attribut vorhanden, aber nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet, und dieses Attribut wird vollständig ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht-leerer Wert nicht mit dem Muster übereinstimmt, verhindert die Constraint-Validierung die Formularübermittlung. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck mit jedem komma-getrennten Wert verglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format durch die Einbeziehung erklärenden Textes in der Nähe. Sie können auch ein [`title`](#title)-Attribut hinzufügen, um zu erklären, was die Anforderungen sind, um das Muster zu erfüllen; die meisten Browser werden diesen Titel als Tooltip anzeigen. Die sichtbare Erklärung ist für Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, das Attribut `placeholder` gibt einen kurzen Hinweis für den Benutzer an, welche Art von Information in das Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf den erwarteten Datentyp gibt, statt einer Erklärung oder Aufforderung. Der Text _darf nicht_ Wagenrückläufe oder Zeilenumbruchzeichen enthalten. Zum Beispiel, wenn ein Feld erwartet, den Vornamen eines Benutzers zu erfassen, und sein Label "Vorname" ist, könnte ein geeignetes Placeholder sein "z.B., Mustafa".

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`

  - : Verwandelt ein `<input type="button">`-Element in eine Popover-Steuerungstaste; nimmt die ID des Popover-Elements als seinen Wert. Siehe die [Popover API](/de/docs/Web/API/Popover_API) Startseite für weitere Details. Die Etablierung einer Beziehung zwischen einem Popover und seinem Aufrufer-Button über das `popovertarget`-Attribut hat zwei weitere nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Aufrufer und platziert das Popover in einer logischen Position in der Reihenfolge der Tastaturfokussierung, wenn es gezeigt wird. Dies macht das Popover für Tastaturnutzer und Nutzer unterstützender Technologien (AT) zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`

  - : Gibt die auszuführende Aktion an einem von einem Kontrollelement `<input type="button">` gesteuerten Popover-Element an. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verstecken. Wenn Sie versuchen, ein bereits geschlossenes Popover zu verstecken, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button wird ein verborgenes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen anzeigend und verborgen umschalten. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von dem Steuerungsknopf ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)

  - : Ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer den Wert der Eingabe nicht bearbeiten können sollte. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) für weitere Informationen.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Eigentümerformular übermittelt werden kann. Das `required`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für mehr Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url`, und `text`, das `size`-Attribut spezifiziert, wieviel vom Eingabefeld angezeigt wird. Grundsätzlich erzielt es dasselbe Ergebnis wie die Einstellung der CSS-[`width`](/de/docs/Web/CSS/width)-Eigenschaft mit einigen Besonderheiten. Die tatsächliche Einheit des Werts hängt vom Eingabetyp ab. Für `password` und `text` sind es eine Anzahl Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang gegenüber dem `size`-Attribut.

- `src`

  - : Gültig nur für den `image`-Button, das `src` ist eine Zeichenfolge, die die URL der Bilddatei angibt, die zur Darstellung des grafischen Sende-Buttons angezeigt werden soll. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut ist eine Zahl, die die Granularität spezifiziert, mit der der Wert übereinstimmen muss.

    Wenn nicht explizit enthalten:

    - `step` hat standardmäßig den Wert 1 für `number` und `range`.
    - Jeder Datum/Uhrzeit-Eingabetyp hat einen Standardwert für `step`, der zum Typ passend ist; siehe die individuellen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step), und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl — ganzzahlig oder float — oder der spezielle Wert `any` sein, was bedeutet, dass keine Schrittgröße impliziert wird, und jeder Wert zulässig ist (ausgenommen anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, entsprechen gültige Werte für die `number`-, Datum/Uhrzeit-Eingabetypen und `range`-Eingabetypen der Grundlage für die Schrittgröße — dem [`min`](#min)-Wert und Inkremente des Step-Wertes, bis zum `[`max`](#max)-Wert, falls spezifiziert.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, ist jede gerade Ganzzahl, `10` oder größer, gültig. Wenn ausgelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig auf `1` gesetzt ist. Für `4.2`, um es gültig zu machen, müsste `step` auf `any`, 0.1, 0.2 gesetzt sein, oder der `min`-Wert müsste eine Zahl sein, die auf `.2` endet, wie zum Beispiel `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht mit der Schritt-Konfiguration übereinstimmen, wird der Wert in der Constraint-Validierung als ungültig betrachtet und wird der `:invalid`-Pseudoklasse entsprechen.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- `tabindex`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein Ganzzahl-Attribut, das angibt, ob das Element den Fokus bei Eingabe erhalten kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen sollte. Da alle Eingabetypen, außer die von Typ hidden, fokussierbar sind, sollte dieses Attribut nicht auf Formularsteuerungen verwendet werden, da dies das Management der Fokussierungsreihenfolge für alle Elemente innerhalb des Dokuments erfordern würde, mit dem Risiko, die Benutzerfreundlichkeit und Zugänglichkeit bei fehlerhafter Durchführung zu schädigen.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, enthält einen Text, der Beratungsinformationen in Bezug auf das Element enthält, dem es gehört. Solche Informationen können dem Benutzer typischerweise, aber nicht notwendigerweise, als Tooltip präsentiert werden. Der Titel sollte NICHT als die primäre Erklärung für den Zweck der Formularsteuerung verwendet werden. Stattdessen verwenden Sie das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut der Formularsteuerung gesetzt ist. Siehe [Labels](#labels) unten.

- `type`

  - : Eine Zeichenkette, die den Typ der zu rendernden Steuerung spezifiziert. Zum Beispiel, um eine Checkbox zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn ignoriert (oder ein unbekannter Wert spezifiziert ist), wird der Eingabetyp `text` verwendet, wodurch ein Klartext-Eingabefeld erstellt wird.

    Erlaubte Werte sind oben bei [Eingabetypen](#input_types) aufgeführt.

- `value`

  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Anfangswert, und kann dann jederzeit mit JavaScript geändert oder abgerufen werden, um auf das entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt und dessen `value`-Eigenschaft zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`

  - : Gültig nur für den `image`-Button, ist die `width` die Breite der Bilddatei, die zur Darstellung des grafischen Sende-Buttons angezeigt wird. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind ebenfalls bei einigen Browsern verfügbar. Im Allgemeinen sollten Sie deren Verwendung vermeiden, es sei denn, es lässt sich nicht vermeiden.

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
        Ob [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse wiederholt gesendet werden sollen, um Live-Suchergebnisse zu ermöglichen, während der Benutzer den Wert des Feldes noch bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenkette, die den Typ der Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Eingabetaste</kbd> oder die <kbd>Return-Taste</kbd> drückt, während das
        Feld bearbeitet wird; dies wird verwendet, um eine geeignete Beschriftung für diese Taste auf einer
        virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Ausrichtung des Bereichssliders. <strong>Nur Firefox.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Elementen, die in der Dropdown-Liste vorheriger Suchanfragen angezeigt werden sollten. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob nur das Wählen eines Verzeichnisses (oder von Verzeichnissen, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) zulässig ist.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine Erweiterung von WebKit und Blink (also von Safari, Opera, Chrome, etc.) was, wenn es vorhanden ist, den {{Glossary("user_agent", "Benutzeragent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Beim Bearbeiten des Feldwertes sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Auf diese Weise kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer ausdrücklich eine Suche initiiert (wie durch Drücken der <kbd>Eingabetaste</kbd> oder <kbd>Return-Taste</kbd>, während das Feld bearbeitet wird).

    Das `search`-Ereignis ist rate-limitiert, so dass es nicht öfter als in einem implementierungsdefinierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich zur nicht-standardisierten CSS-Eigenschaft -moz-orient, die auf die {{htmlelement('progress')}} und {{htmlelement('meter')}}-Elemente Auswirkung hat, definiert das `orient`-Attribut die Orientierung des Bereichssliders. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal angezeigt wird, und `vertical`, wo der Bereich vertikal angezeigt wird. Siehe [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz, vertikale Formularelemente zu erstellen.

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut—unterstützt nur von Safari—ist ein numerischer Wert, der Ihnen die Möglichkeit bietet, die maximale Anzahl an Einträgen zu überschreiben, die in der nativ bereitgestellten Dropdown-Liste der vorherigen Suchanfragen des `<input>`-Elements angezeigt werden sollen.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben ist, wird die Standardeinstellung des Browsers für die maximale Eintragsanzahl verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, weist darauf hin, dass nur Verzeichnisse vom Benutzer in der Dateiauswahl-Oberfläche ausgewählt werden können. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl es ursprünglich nur für WebKit-basierte Browser implementiert wurde, ist `webkitdirectory` auch in Microsoft Edge sowie in Firefox 50 und später nutzbar. Es wird jedoch auch im weiteren Sinne unterstützt und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM repräsentiert. Auch stehen die von den übergeordneten Schnittstellen spezifizierten Methoden zur Verfügung, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, falls der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, falls der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und (falls das Ereignis nicht abgebrochen wird) meldet das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, falls der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder eine Terminauswahl) führt diese Methode nichts aus.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine gegebene Zeichenfolge. Ein `selectMode`-Parameter steht zur Verfügung, um die bestehenden Inhalte zu steuern.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines textuellen Eingabeelements aus. Macht nichts für Eingaben, die nicht als Text-Eingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browserauswahl-Dialog für das Eingabeelement an, wie er normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber ausgelöst durch einen Button-Druck oder eine andere Benutzerinteraktion.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins, standardmäßig, oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, besitzen einige Merkmale, die nicht auf Nicht-Formularelemente anwendbar sind. Es gibt CSS-Selektoren, die speziell Formularsteuerelemente basierend auf ihren UI-Merkmalen, auch bekannt als UI-Pseudoklassen, ansprechen können. Das Input-Element kann auch nach Typ mit Attributselektoren angesprochen werden. Es gibt einige Eigenschaften, die auch besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Relevante Pseudoklassen für das
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
        Jedes derzeit aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, eingegeben, etc.) oder den Fokus annehmen kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert werden kann oder den Fokus annehmen kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es andernfalls aktiviert werden könnte (ausgewählt, angeklickt, eingegeben, etc.) oder den Fokus annehmen könnte, wenn es nicht deaktiviert wäre.
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
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elementen mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, die bisher keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die der Standard in einer Gruppe verwandter Elemente sind. Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Input-Typen, die beim Laden oder Rendern der Seite geprüft wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Input-Typen, die
        derzeit geprüft sind (und dem {{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente,
        deren unbestimmte Eigenschaft durch JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle
        Radiobuttons mit demselben Namen im Formular nicht überprüft sind, und
        {{HTMLElement("progress")}} Elemente in einem unbestimmten Zustand
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularsteuerungen, auf die die Einschränkungsvalidierungsregel angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularsteuerungen, auf die die Einschränkungsvalidierungsregel angewendet wird und die derzeit
        nicht gültig sind. Passt zu einer Formularsteuerung, deren Wert nicht den
        durch ihre Attribute festgelegten Einschränkungen entspricht, wie
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht leeres Input, dessen aktueller Wert innerhalb der durch die Attribute <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> festgelegten Bereichsgrenzen und des <a href="#step"><code>step</code></a> liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht leeres Input, dessen aktueller Wert NICHT innerhalb der durch die Attribute <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a> festgelegten Bereichsgrenzen liegt oder
        nicht den <a href="#step"><code>step</code></a>-Einschränkungen entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut gesetzt hat. Passt nur zu Elementen, die erforderlich sein können. Ein Attribut, das bei einem nicht erforderlichen Element enthalten ist, führt nicht zu einem Treffer.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut NICHT gesetzt hat. Passt nicht zu Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird aber bei Unschärfe aktiviert. Passt
        zu ungültigem Input, jedoch nur nach Benutzerinteraktion, z. B. durch Fokussieren
        der Steuerung, Verlassen der Steuerung oder Versuch, das Formular
        mit ungültiger Steuerung zu übermitteln.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code> Elemente, die dem Benutzer ein Auswahlelement anzeigen, um einen Wert auszuwählen (z. B. <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — jedoch nur, wenn das Element im offenen Zustand ist, d.h. wenn das Auswahlelement angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können das Label eines Kontrollkästchens basierend darauf, ob das Kontrollkästchen angekreuzt ist oder nicht, stylen. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das direkt nach einem angekreuzten Input steht. Wir haben keine Stile angewendet, wenn das `input` nicht angekreuzt ist.

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

Es ist möglich, verschiedene Arten von Formularsteuerungen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzugehen. CSS-Attributselektoren stimmen mit Elementen entweder basierend auf dem Vorhandensein eines Attributs oder auf dem Wert eines bestimmten Attributs überein.

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

Standardmäßig ist das Erscheinungsbild von Platzhaltertext transluzent oder hellgrau. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder` Text](#placeholder) des Inputs. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil der CSS-Eigenschaften, der auf das {{cssxref("::first-line")}} Pseudoelement angewendet wird, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### appearance

Die {{cssxref("appearance")}} Eigenschaft ermöglicht das Darstellen von (fast) jedem Element als plattformnativen Stil basierend auf dem Betriebssystemthema sowie die Entfernung der plattformnativen Stilverwendung mit dem Wert `none`.

Sie könnten ein `<div>` wie einen Radiobutton mit `div {appearance: radio;}` aussehen lassen oder ein Radio wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}`, aber das sollten Sie nicht tun.

Das Setzen von `appearance: none` entfernt plattformnative Umrandungen, jedoch nicht die Funktionalität.

### caret-color

Eine speziell auf Texteingaben bezogene Eigenschaft ist die CSS {{cssxref("caret-color")}} Eigenschaft, die es Ihnen ermöglicht, die Farbe festzulegen, die zum Zeichnen des Texteingabe-Carets verwendet wird:

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
    "sans-serif";
}
```

#### Ergebnis

{{EmbedLiveSample('caret-color', 500, 80)}}

### field-sizing

Die {{cssxref("field-sizing")}} Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie haben standardmäßig eine bevorzugte Standardgröße). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, sodass die Formularsteuerungen in der Größe angepasst werden können, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die den Inhalt verkleinern und wachsen, während mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingaben akzeptieren (z. B. [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetypen [`file`](/de/docs/Web/HTML/Reference/Elements/input/file), und {{htmlelement("textarea")}} Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>` Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. In diesem Fall kann die Position und Größe des Elements innerhalb seines Rahmens mithilfe der CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML finden Sie unter:

- [Farben auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Formulare für HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels werden benötigt, um Hilfetext mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}} Element bietet erläuternde Informationen zu einem Formularfeld, die stets angemessen sind (abgesehen von eventuell vorhandenen Layoutproblemen). Es ist immer eine gute Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden sollte.

#### Zugehörige Labels

Die semantische Paarung von `<input>` und `<label>` Elementen ist nützlich für unterstützende Technologien wie Bildschirmleser. Indem Sie sie mithilfe des `<label>`-Attributs [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) paaren, binden Sie das Label an das Eingabefeld in einer Weise, die es Bildschirmlesern ermöglicht, Eingaben den Benutzern genauer zu beschreiben.

Es reicht nicht aus, einfachen Text neben dem `<input>` Element zu haben. Vielmehr erfordern Benutzerfreundlichkeit und Zugänglichkeit die Einbeziehung eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist unzugänglich: Es gibt keine Beziehung zwischen der Aufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere "Trefffläche" für Maus- und Touchscreen-Benutzer zum Klicken oder Berühren. Indem Sie ein `<label>` mit einem `<input>`-Element paaren, wird das Klicken auf eines von beiden den Fokus auf das `<input>`-Element setzen. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu "labeln", wird dies nicht passieren. Der Integrationsbereich der Aufforderung für die Eingabe ist hilfreich für Menschen mit motorischen Erkrankungen.

Als Webentwickler ist es wichtig, dass wir niemals davon ausgehen, dass Menschen all das wissen, was wir wissen. Die Vielfalt der Menschen, die das Web nutzen—und dadurch Ihre Website—praktisch garantiert, dass einige Ihrer Website-Besucher einige Variationen in Denkprozessen und/oder Umständen haben werden, die dazu führen, dass sie Ihre Formulare sehr unterschiedlich von Ihnen interpretieren, wenn keine klar und korrekt dargestellten Labels vorhanden sind.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder) Attribut erlaubt es Ihnen, Text anzugeben, der innerhalb des Inhaltsbereichs des `<input>` Elements selbst angezeigt wird, wenn er leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, da es dies nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht um eine Erklärung oder Aufforderung zu geben.

Der Platzhalter ist nicht nur nicht für Bildschirmleser zugänglich, sondern verschwindet auch, sobald der Benutzer Text in die Formularsteuerung eingibt oder wenn die Formularsteuerung bereits einen Wert hat. Browser mit automatischen Seitenübersetzungsfunktionen können Attribute bei der Übersetzung überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder) Attribut nur, wenn es nicht anders geht. Wenn Sie ein `<input>`-Element bezeichnen müssen, verwenden Sie das {{HTMLElement("label")}} Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, aber sie garantiert _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, überprüfen Sie sie _immer_ auch serverseitig, und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, falls das Format ungültig ist.

Zusätzlich zum Verwenden von CSS, um Inputs zu stylen, basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen, basierend auf dem aktuellen Zustand jeder Eingabe, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, stellt der Browser eine Client-seitige Validierung bei einem (versuchten) Formularausdruck bereit. Bei der Formularübermittlung, wenn eine Formularsteuerung vorliegt, die die Einschränkungsvalidierung nicht bestanden hat, werden unterstützende Browser eine Fehlermeldung bei der ersten ungültigen Formularsteuerung anzeigen; eine Standardmeldung basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Meldung.

Einige Eingabetypen und andere Attribute legen fest, welche Werte für eine gegebene Eingabe gültig sind. Beispielsweise <input type="number" min="2" max="10" step="2"> bedeutet, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Es können mehrere Fehler auftreten, einschließlich eines `rangeUnderflow` Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow` wenn der Wert größer als 10 ist, `stepMismatch` wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Ganzzahl ist (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch` wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Domäne der möglichen Werte periodisch ist (d.h. beim höchsten möglichen Wert kehren die Werte an den Anfang zurück, anstatt zu enden), können die Werte der [`max`](#max) und [`min`](#min) Eigenschaften umgekehrt werden, was anzeigt, dass der Bereich zulässiger Werte bei `min` beginnt, um den niedrigsten möglichen Wert herum abwickelt und dann fortgesetzt wird, bis `max` erreicht ist. Dies ist besonders nützlich für Datums- und Zeitangaben, z. B. wenn Sie den Bereich von 20:00 Uhr bis 8:00 Uhr zulassen möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und deren Werte können zu einem spezifischen Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Validitätsfehler des Objekts hängen von den <code>&lt;input&gt;</code>-Attributen und deren Werten ab:
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
        Tritt auf, wenn der Wert größer als der Maximalwert ist, wie im <code>max</code> Attribut definiert
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die im <code>maxlength</code>-Eigenschaft erlaubte Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner als der Minimalwert ist, wie im <code>min</code>-Attribut definiert
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die im <code>minlength</code>-Eigenschaft erforderliche Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein pattern-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> zu diesem nicht passt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> oder Radio-bzw. Kontrollkästchen nicht aktiviert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert stimmt nicht mit dem Schritt-Inkrement überein. Das Standard-Inkrement beträgt <code>1</code>, sodass nur Ganzzahlen gültig sind mit <code>type="number"</code>, wenn der Schritt nicht eingeschlossen ist. <code>step="any"</code> löst diesen Fehler niemals aus.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht der richtige Typ ist, z.B. wenn eine Email kein <code>@</code> enthält oder eine URL kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement das `required`-Attribut nicht aufweist, ist kein Wert oder eine leere Zeichenkette nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, führt eine leere Zeichenkette nicht zu einem Fehler.

Wir können Grenzen für die akzeptierten Werte setzen, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer alerten, wenn beim Übermitteln des Formulars ein Fehler vorliegt.

Neben den in der Tabelle oben beschriebenen Fehlern enthält das `validityState` Interface die Booleschen schreibgeschützten Eigenschaften `badInput`, `valid`, und `customError`. Das Validität-Objekt umfasst:

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

Für jede dieser booleschen Eigenschaften gibt ein Wert von `true` an, dass der angegebene Grund warum die Validierung fehlschlagen könnte, zutrifft, mit Ausnahme der `valid` Eigenschaft, welche `true` ist, wenn der Wert des Elements alle Einschränkungen erfüllt.

Falls es einen Fehler gibt, werden unterstützende Browser sowohl den Benutzer warnen als auch verhindern, dass das Formular übermittelt wird. Ein Warnwort: wenn ein benutzerdefinierter Fehler auf einen wertmäßigen Wert (alles außer der leeren Zeichenkette oder `null`) gesetzt ist, wird das Formular an der Übermittlung gehindert. Wenn keine benutzerdefinierte Fehlermeldung vorhanden ist, und keine der anderen Eigenschaften wahr zurückgeben, ist `valid` wahr, und das Formular kann übermittelt werden.

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

Die letzte Zeile, die die benutzerdefinierte Gültigkeitsmeldung auf die leere Zeichenkette setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Validität gesetzt ist, wird sie die Übermittlung verhindern, auch wenn alle Werte gültig sind, bis die Meldung `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandte) Elemente verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen bewirken, dass dies eine Standardfehlermeldung erzeugt, wenn Sie versuchen, das Formular ohne gültige Eingabe oder einen Wert, der nicht zum `pattern` passt, zu senden.

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

Das Beispiel wird folgendermaßen gerendert:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabe-Elements jedes Mal, wenn sein Wert geändert wird, indem wir die `checkValidity()` Methode über den `input` Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid` Ereignis ausgelöst, und die `invalid` Ereignishandlerfunktion ausgeführt. In dieser Funktion arbeiten wir heraus, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, indem wir einen `if ()` Block verwenden und eine benutzerdefinierte Fehlermeldung festlegen.
- Dadurch wird, wenn der Eingabewert ungültig ist, wenn die Senden-Schaltfläche gedrückt wird, einer der benutzerdefinierten Fehlernachrichten angezeigt.
- Wenn er gültig ist, wird er gesendet, wie erwartet. Dazu muss die benutzerdefinierte Gültigkeit aufgehoben werden, indem `setCustomValidity()` mit einem leeren Zeichenkettenwert aufgerufen wird. Wir tun dies daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Gültigkeit zuvor gesetzt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie derzeit einen gültigen Wert bei der Übermittlung enthält.

> [!NOTE]
> Validieren Sie immer Eingabebeschränkungen sowohl auf der Clientseite als auch auf der Serverseite. Constraint-Validierung erübrigt nicht die Validierung auf der _Serverseite_. Ungültige Werte können immer noch von älteren Browsern oder von böswilligen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte viele Versionen lang ein proprietäres Fehlerattribut — `x-moz-errormessage` —, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen in ähnlicher Weise festzulegen. Dies wurde in Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der lokalen Einstellung ab. In einigen lokalen Einstellungen ist 1.000,00 eine gültige Zahl, während in anderen lokalen Einstel
