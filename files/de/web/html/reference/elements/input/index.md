---
title: "<input>: Das HTML-Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{HTMLSidebar}}

Das **`<input>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um interaktive Steuerungen für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; je nach Gerät und {{Glossary("user_agent", "Benutzeragent")}} stehen eine Vielzahl von Eingabedatentypen und Steuerungswidgets zur Verfügung. Das `<input>`-Element ist eines der mächtigsten und komplexesten in ganz HTML, aufgrund der schieren Anzahl von Kombinationen von Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich in Abhängigkeit vom Wert seines [`type`](#type)-Attributs, weshalb die verschiedenen Typen auf eigenen separaten Referenzseiten behandelt werden. Wenn dieses Attribut nicht angegeben ist, wird als Standardtyp `text` angenommen.

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
      <td>Ein Kontrollkästchen, das Einzelwerte ausgewählt/nicht ausgewählt werden lässt.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Eine Steuerung zur Angabe einer Farbe; Bei Aktivierung öffnet sich in unterstützten Browsern ein Farbwähler.
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
        Öffnet einen Datumsauswahl- oder numerisches Rad für Jahr, Monat und Tag bei Aktivierung
        in unterstützten Browsern.
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
        Eine Steuerung zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet eine Datumsauswahl
        oder numerische Räder für Datum- und Zeitkomponenten bei Aktivierung in unterstützten Browsern.
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
        <code>text</code>-Eingabefeld, verfügt jedoch über Validierungsparameter und relevante
        Tastatur in unterstützten Browsern und Geräten mit dynamischen Tastaturen.
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
        Eine Steuerung, die nicht angezeigt wird, deren Wert jedoch an den
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
        Eine Steuerung zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt standardmäßig
        Validierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten
        mit dynamischen Tastaturen an.
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
        Ein Optionsfeld, das es ermöglicht, einen einzigen Wert aus mehreren Optionen auszuwählen, die denselben <a href="#name"><code>name</code></a>-Wert haben.
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
        Wird als Bereichs-Widget angezeigt, das standardmäßig auf den mittleren Wert eingestellt ist.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchzeichenfolgen. Zeilenumbrüche werden
        automatisch aus dem Eingabewert entfernt. Kann in unterstützten Browsern ein Löschsymbol enthalten, mit dem das Feld gelöscht werden kann. Zeigt
        stattdessen ein Suchsymbol anstelle der Eingabetaste auf einigen Geräten mit dynamischen Tastaturen an.
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
        Eine Steuerung zur Eingabe einer Telefonnummer. Zeigt eine Telefon-Tastatur
        auf einigen Geräten mit dynamischen Tastaturen an.
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
      <td>Eine Steuerung zur Eingabe eines Zeitwertes ohne Zeitzone.</td>
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
        Validierungsparameter und relevante Tastatur in unterstützten Browsern
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
        Eine Steuerung zur Eingabe eines Datums bestehend aus einer Jahr-Woche-Nummer und einer Wochenzahl ohne Zeitzone.
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
        Eine Steuerung zur Eingabe von Datum und Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so mächtig wegen seiner Attribute; das [`type`](#type)-Attribut, das oben mit Beispielen beschrieben wurde, ist das Wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch gesehen den gleichen Satz von Attributen. In Wirklichkeit haben die meisten Attribute jedoch nur Auswirkungen auf eine bestimmte Untermenge von Eingabetypen. Zudem beeinflussen einige Attribute die Eingabe unterschiedlich, je nach Eingabetyp, und beeinflussen verschiedene Eingabetypen auf unterschiedliche Weise.

Dieser Abschnitt bietet eine Tabelle mit allen Attributen und einer kurzen Beschreibung. An diese Tabelle schließt sich eine Liste an, in der jedes Attribut detaillierter beschrieben wird, zusammen mit den Eingabetypen, mit denen sie verbunden sind. Attribute, die den meisten oder allen Eingabetypen gemeinsam sind, werden unten detaillierter definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind oder Attribute, die für alle Eingabetypen gelten, aber bei einem bestimmten Eingabetyp spezielle Verhaltensweisen haben, werden hingegen auf den jeweiligen Typen-Seiten dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                                             |
| --------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis für erwarteten Dateityp in Datei-Upload-Steuerungen                                              |
| [`alt`](#alt)                                 | `image`                                                                | alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                          |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                               | Steuerung der automatischen Großschreibung bei eingegebenem Text.                                        |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Buttons                             | Hinweis für die Formular-Autofill-Funktion                                                               |
| [`capture`](#capture)                         | `file`                                                                 | Medienaufnahme-Eingabemethode in Datei-Upload-Steuerungen                                                |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Ob der Befehl oder die Steuerung aktiv ist                                                               |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfeldes zum Senden der Elemente Intentionins Mahlfluss bei Formulareinsendung            |
| [`disabled`](#disabled)                       | alle                                                                   | Ob die Formularsteuerung deaktiviert ist                                                                 |
| [`form`](#form)                               | alle                                                                   | Verknüpft die Steuerung mit einem Formularelement                                                        |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL, die für die Formularübermittlung verwendet werden soll                                              |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Datensatzkodierungstyp für Formularübermittlung                                                          |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | HTTP-Methode für die Formularübermittlung                                                                |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Formularsteuerungsvalidierung für Formularübermittlung umgehen                                           |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browsing-Kontext für die Formularübermittlung                                                            |
| [`height`](#height)                           | `image`                                                                | Entspricht dem Attribut height für {{htmlelement('img')}}; vertikale Dimension                           |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Buttons       | Wert des id-Attributs der {{htmlelement('datalist')}} mit Autovervollständigungsvorschlägen              |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Maximalwert                                                                                              |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Länge (Anzahl der Zeichen) von `value`                                                          |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Minimalwert                                                                                              |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Länge (Anzahl der Zeichen) von `value`                                                          |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolean. Ob mehrere Werte erlaubt sind                                                                   |
| [`name`](#name)                               | alle                                                                   | Name der Formularsteuerung. Wird mit dem Formular als Teil eines Name/Wert-Paares übermittelt            |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, dem der `value` entsprechen muss, um gültig zu sein                                              |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der im Formularelement angezeigt wird, wenn kein Wert festgelegt ist                               |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Markiert ein `<input type="button">` als Steuerung für ein Popover-Element                               |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt die Aktion an, die eine Popover-Steuerung ausführen soll                                            |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolean. Der Wert ist nicht editierbar                                                                   |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss angekreuzt sein, damit das Formular abgeschickt werden kann |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe der Steuerung                                                                                      |
| [`src`](#src)                                 | `image`                                                                | Entspricht dem Attribut `src` für {{htmlelement('img')}}; Adresse der Bildressource                      |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Inkrementelle Werte, die gültig sind                                                                     |
| [`type`](#type)                               | alle                                                                   | Typ der Formularsteuerung                                                                                |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht er dem Anfangswert                            |
| [`width`](#width)                             | `image`                                                                | Entspricht dem Attribut `width` für {{htmlelement('img')}}                                               |

Einige zusätzliche nicht standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)

  - : Gültig nur für den `file` Eingabetyp, definiert das `accept`-Attribut, welche Dateitypen in einer `file` Upload-Steuerung auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`

  - : Gültig nur für die `image` Schaltfläche, stellt das `alt`-Attribut alternativen Text für das Bild bereit und zeigt den Wert des Attributs an, wenn das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird, und falls ja, in welcher Weise. Weitere Informationen finden Sie auf der globalen Attributseite für [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette an, die beschreibt, welche Art von Autovervollständigungsfunktionalität das Eingabefeld bereitstellen soll, falls vorhanden. Eine typische Implementierung der Autovervollständigung ruft vorher eingegebene Werte im gleichen Eingabefeld ab, aber es können auch komplexere Formen existieren. So könnte beispielsweise ein Browser mit der Kontaktliste eines Geräts integriert werden, um `email`-Adressen in einem Eingabefeld für E-Mails zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für zulässige Werte.

    Das Attribut `autocomplete` ist gültig auf `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkung auf Eingabetypen, die keine numerischen oder textuellen Daten liefern, d.h. es gilt für alle Eingabetypen außer `checkbox`, `radio`, `file` oder einer der Button-Typen.

    Siehe das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für weitere Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` für `hidden` ein wenig anders ist als für andere Eingabetypen.

- `autofocus`

  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass das Eingabefeld automatisch den Fokus erhalten soll, wenn die Seite vollständig geladen ist (oder wenn das {{HTMLElement("dialog")}}, das das Element enthält, sichtbar gemacht wird).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es in mehr als einem Element verwendet wird, erhält das erste Element mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Automatisches Fokussieren auf ein Formularelement kann Menschen mit Sehbehinderungen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihren Benutzer ohne Vorwarnung zum Formularelement.

    Berücksichtigen Sie Barrierefreiheit sorgfältig, wenn Sie das `autofocus`-Attribut anwenden. Automatisches Fokussieren auf eine Steuerung kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmlesegerät das Etikett der fokussierten Formularsteuerung ankündigt, zeigt es nichts vor dem Etikett an, und der sehende Benutzer auf einem kleinen Gerät verpasst gleichermaßen den Kontext, der durch den vorhergehenden Inhalt geschaffen wird.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und nur für den `file` Eingabetyp gültig, definiert das `capture`-Attribut, welches Medium — Mikrofon, Video oder Kamera — zur Aufnahme einer neuen Datei für den Upload mit `file`-Upload-Steuerung in unterstützten Szenarien verwendet werden soll. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`

  - : Gültig für beide `radio` und `checkbox` Typen, `checked` ist ein Boolean-Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass die Optionsschaltfläche die derzeit ausgewählte in der Gruppe von gleichnamigen Optionsschaltflächen ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es gibt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn sich der Zustand des Kontrollkästchens ändert, wird dieses Inhaltsattribut nicht aktualisiert. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen werden der Wert von Kontrollkästchen und Optionsschaltflächen nur dann in die übermittelten Daten aufgenommen, wenn sie derzeit `checked` sind. Wenn sie es sind, werden der Name und die Wert(e) der aktivierten Steuerungen übermittelt.
    >
    > Wenn zum Beispiel ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat, und das Kontrollkästchen aktiviert ist, werden die Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgelistet. Der Standard `value` für Kontrollkästchen und Optionsschaltflächen ist `on`.

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen, ermöglicht das `dirname`-Attribut die Übermittlung der Richtung des Elements. Wenn es enthalten ist, wird die Formularkontrolle mit zwei Namens-/Wertepaaren übermittelt: das erste ist das [`name`](#name) und [`value`](#value) Paar, und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das obige Formular übermittelt wird, führt die Eingabe dazu, dass sowohl das `name` / `value` Paar von `fruit=cherry` als auch das `dirname` / Richtungs-Paar von `fruit-dir=ltr` gesendet wird. Weitere Informationen finden Sie im Attribut [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)

  - : Ein Boolean-Attribut, das, falls vorhanden, darauf hinweist, dass der Benutzer nicht mit der Eingabe interagieren sollte. Deaktivierte Eingaben werden typischerweise mit einer gedimmten Farbe oder in einer anderen Form angezeigt, die anzeigt, dass das Feld nicht verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation verlangt, wird der dynamische deaktivierte Zustand eines `<input>` von Firefox standardmäßig [über Seiten-Ladevorgänge hinweg beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das Attribut [`autocomplete`](#autocomplete), um diese Funktion zu steuern.

- `form`

  - : Eine Zeichenkette, die das {{HTMLElement("form")}} Element angibt, mit dem die Eingabe verknüpft ist (d.h. ihr **Formularinhaber**). Der Wert dieser Zeichenkette, falls vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächstgelegenen enthaltenen Formular verknüpft, sofern vorhanden.

    Das `form`-Attribut ermöglicht es, eine Eingabe überall im Dokument zu platzieren, aber diese mit einem Formular anderswo im Dokument einzuschließen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Gültig nur für die `image` Eingabeschaltfläche, ist die `height` die Höhe der Bilddatei, die angezeigt werden soll, um die grafische Absende-Schaltfläche darzustellen. Weitere Informationen finden Sie beim {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, es definiert einen eindeutigen Identifikator (ID), der im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um das Label mit der Formularkontrolle zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist, bietet es einen Hinweis für Browser, welche Art von Konfiguration der virtuellen Tastatur verwendet werden soll, wenn dieser Inhalt bearbeitet wird. Zu den Werten gehören `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der dem `list`-Attribut gegebene Wert sollte die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements sein. Die `<datalist>` stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle in der Liste enthaltenen Werte, die nicht mit dem [`type`](#type) kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Er ist gültig auf `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut den Spezifikationen wird das `list`-Attribut von `hidden`, `password`, `checkbox`, `radio`, `file` oder einem der Button-Typen nicht unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen sehen, Strichmarkierungen entlang eines Bereichs oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber nicht aufgelistete Werte erlaubt. Schauen Sie sich die [Tabelle zur Browser-Kompatibilität](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den größten Wert im Bereich der zulässigen Werte. Wenn der eingegebene [`value`](#value) diesen überschreitet, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie zum Beispiel für Daten oder Zeiten), darf der Wert von `max` geringer sein als der Wert von `min`, was darauf hinweist, dass der Bereich umwickelbar ist; das Beispiel erlaubt es, einen Zeitbereich von 22:00 Uhr bis 4:00 Uhr anzugeben.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Feld eintragen kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes größer als `maxlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben können, als durch das Attribut `maxlength` erlaubt ist. Die Einschränkungsvalidierung wird nur dann angewendet, wenn der Wert vom Benutzer geändert wird. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung).

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den kleinsten Wert im Bereich der zulässigen Werte. Wenn der eingegebene [`value`](#value) geringer ist als dieser, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss geringer oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert geringer ist als das Minimum, das durch das `min`-Attribut erlaubt ist, verhindert die Einschränkungsvalidierung die Formularübermittlung. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung).

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie zum Beispiel für Daten oder Zeiten), darf der Wert von `max` geringer sein als der Wert von `min`, was darauf hinweist, dass der Bereich umwickelbar ist; das Beispiel erlaubt es, einen Zeitbereich von 22:00 Uhr bis 4:00 Uhr anzugeben, wie bereits erläutert.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Eingabefeld einfügen kann. Dies muss ein ganzzahliger Nicht-Negativwert sein, der kleiner oder gleich dem durch `maxlength` spezifizierten Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} beträgt, was die Formularübermittlung verhindert. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung).

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)

  - : Das Boolean-Attribut `multiple`, wenn es gesetzt ist, bedeutet, dass der Benutzer kommagetrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit dem `file` Eingabesteuerung wählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`

  - : Eine Zeichenkette, die einen Namen für das Eingabesteuerungsfeld spezifiziert. Dieser Name wird zusammen mit dem Wert der Steuerung übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als ein Pflichtattribut (auch wenn es das nicht ist). Wenn eine Eingabe keinen angegebenen `name` hat oder der `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerungen, nicht aktivierte Optionsschaltflächen, nicht aktivierte Kontrollkästchen und Zurücksetzen-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "Benutzeragent")}} auf die Zeichencodierung gesetzt, die zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name) Attribut erzeugt ein einzigartiges Verhalten für Optionsschaltflächen.

    Nur eine Optionsschaltfläche in einer gleichnamigen Gruppe von Optionsschaltflächen kann jeweils aktiviert sein. Wenn eine in der Gruppe ausgewählt wird, werden alle derzeit in derselben Gruppe ausgewählten Optionsschaltflächen automatisch deselektiert. Der Wert dieser einen aktivierten Optionsschaltfläche wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Wenn durch eine Gruppe gleichnamiger Optionsschaltflächen getabbt wird, erhält diejenige, die aktiviert ist, den Fokus. Wenn sie nicht zusammen in der Quellreihenfolge gruppiert sind, beginnt das Tabben in der Gruppe, sobald die erste in der Gruppe erreicht ist, und überspringt alle, die nicht aktiviert sind. Mit anderen Worten, wenn eine aktiviert ist, wird das Tabben an den nicht aktivierten Optionsschaltflächen in der Gruppe vorbeigeführt. Wenn keine aktiviert sind, erhält die Gruppe von Optionsschaltflächen den Fokus, wenn die erste Optionsschaltfläche in der gleichnamigen Gruppe erreicht ist.

    Sobald eine der Optionsschaltflächen in einer Gruppe fokussiert ist, navigieren die Pfeiltasten durch alle gleichnamigen Optionsschaltflächen, auch wenn die Optionsschaltflächen in der Quellreihenfolge nicht zusammen gruppiert sind.

    Wenn einem Eingabeelement ein `name` gegeben wird, wird dieser Name zu einer Eigenschaft des [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigentums des Formularinhabers. Wenn Sie eine Eingabe haben, deren `name` auf `guest` gesetzt ist und eine andere, deren `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein, und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelemente so zu benennen, dass dies einer eingebauten Eigenschaft des Formulars entspricht, da Sie sonst die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompiliert, den der `value` der Eingabe erfüllen muss, um bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Um den Mustertext sollten keine Schrägstriche angegeben werden. Beim Kompilieren des regulären Ausdrucks:

    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, so dass die Übereinstimmung gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag gesetzt, damit das Muster als Folge von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht leerer Wert dem Muster nicht entspricht, verhindert die Einschränkungsvalidierung die Formularübermittlung. Wenn das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden kommagetrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das Attribut `pattern` verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie einen erklärenden Text in der Nähe einschließlich. Sie können auch ein [`title`](#title)-Attribut angeben, um die Anforderungen zur Übereinstimmung mit dem Muster zu erklären; die meisten Browser werden diesen Titel als Tooltip anzeigen. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das Attribut `placeholder` einen kurzen Hinweis auf den Benutzer, welche Art von Informationen in dem Feld erwartet werden. Es sollte sich um ein Wort oder einen kurzen Satz handeln, der einen Hinweis auf den erwarteten Datentyp gibt, anstatt eine Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Zum Beispiel, wenn erwartet wird, dass ein Feld den Vornamen eines Benutzers erfasst, und dessen Label "Vorname" lautet, könnte ein geeigneter Platzhalter "z.B., Mustafa" sein.

    > [!NOTE]
    > Das Attribut `placeholder` ist nicht so semantisch nützlich wie andere Wege zur Erklärung Ihres Formulars und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Labels](#labels).

- `popovertarget`

  - : Macht ein `<input type="button">` zu einer Popover-Steuerungsschaltfläche; nimmt die ID des Popover-Elements an, das es steuern soll. Weitere Details finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API) Hauptseite. Die Herstellung einer Beziehung zwischen einem Popover und seiner Auslöser-Schaltfläche mit dem Attribut `popovertarget` hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Auslöser und positioniert das Popover in einer logischen Position in der Tastaturnavigation, wenn angezeigt. Dies macht das Popover für Benutzer von Tastatur und assistive Technologie (AT) besser zugänglich (siehe auch [Popover accessibility features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt einen impliziten Anker zwischen beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerungen mit [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover anchor positioning](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`

  - : Gibt die Aktion an, die auf ein vom Steuerung `<input type="button">` verwaltetes Popover-Element ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Die Schaltfläche versteckt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verborgenes Popover zu verstecken, wird keine Aktion unternommen.
    - `"show"`
      - : Die Schaltfläche zeigt ein verborgenes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion unternommen.
    - `"toggle"`
      - : Die Schaltfläche schaltet ein Popover zwischen sichtbar und verborgen um. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerungsschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)

  - : Ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass der Benutzer den Wert des Eingabefelds nicht bearbeiten können soll. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Weitere Informationen finden Sie auf der Seite [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, falls vorhanden, darauf hinweist, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Formular übermittelt werden kann. Das `required`-Attribut wird von den Eingaben `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung) und dem [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required).

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url` und `text`, das `size`-Attribut gibt an, wie viel von der Eingabe angezeigt wird. Erzeugt im Wesentlichen dasselbe Ergebnis wie das Festlegen der CSS-Eigenschaft [`width`](/de/docs/Web/CSS/width) mit einigen Spezialfällen. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang über das `size`-Attribut.

- `src`

  - : Gültig nur für die `image` Eingabeschaltfläche, das `src` ist eine Zeichenkette, die die URL der Bilddatei angibt, die angezeigt werden soll, um die grafische Absende-Schaltfläche darzustellen. Weitere Informationen finden Sie beim {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, das Attribut [`step`](/de/docs/Web/HTML/Reference/Attributes/step) ist eine Zahl, die die Granularität angibt, an die sich der Wert anpassen muss.

    Wenn nicht ausdrücklich enthalten:

    - Ist `step` standardmäßig 1 für `number` und `range`.
    - Jeder Eingabetyp für Daten/Zeit hat einen standardmäßigen `step`-Wert, der für den Typ geeignet ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein—ganz oder gekürzt—oder der spezielle Wert `any`, was bedeutet, dass kein Schritt impliziert wird und alle Werte erlaubt sind (außer anderen Einschränkungen wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht ausdrücklich gesetzt ist, sind gültige Werte für die `number`, Eingabetypen für Daten/Zeit und `range` Eingabetypen gleich dem Basiswert für die Schritte—dem [`min`](#min)-Wert und ansteigenden Einheiten des Schrittwertes bis zum [`max`](#max)-Wert, wenn angegeben.

    Beispielsweise, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Ganzzahl, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede ganze Zahl gültig, aber gekürzte (wie `4.2`) sind nicht gültig, weil `step` standardmäßig `1` ist. Für `4.2` gültig zu sein, hätte `step` auf `any`, 0.1, 0.2 gesetzt werden müssen, oder der `min`-Wert hätte eine Zahl endend auf `.2` sein müssen, wie z.B. `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht den Schritt-Konfigurationen entsprechen, wird der Wert bei der Einschränkungsvalidierung als ungültig angesehen und trifft auf die `:invalid` Pseudoklasse zu.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung).

- `tabindex`

  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus annehmen kann (fokusfähig ist) und ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen außer `hidden` fokussierbar sind, sollte dieses Attribut nicht auf Formularelementen verwendet werden, da dies das Management der Fokusreihenfolgen für alle Elemente im Dokument mit sich bringen und die Benutzerfreundlichkeit und Barrierefreiheit beeinträchtigen könnte, wenn es nicht richtig durchgeführt wird.

- `title`

  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, enthält es einen Text, der Beratungsinformationen in Bezug auf das Element, zu dem es gehört, darstellt. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip gezeigt werden. Der Titel darf NICHT als primäre Erklärung des Zwecks der Formularkontrolle verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id) Attribut der Formularkontrolle gesetzt ist. Weitere Informationen finden Sie unter [Labels](#labels) unten.

- `type`

  - : Eine Zeichenkette, die den Typ der Steuerung angibt, die gerendert werden soll. Beispielsweise wird eine durch das Festlegen auf `checkbox` eine Auswahlmöglichkeit erstellt. Wenn weggelassen (oder ein unbekannter Wert angegeben wird), wird die Eingabe `text` verwendet, was ein Klartextfeld erstellt.

    Erlaubte Werte sind wie in den [Eingabetypen](#input_types) oben aufgelistet.

- `value`

  - : Der Wert der Eingabesteuerung. Wenn es im HTML angegeben wird, entspricht dies dem Anfangswert und kann danach jederzeit durch den Zugriff auf das `value` Attribut des entsprechenden [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekts geändert oder abgerufen werden. Das `value` Attribut ist immer optional, sollte jedoch als verpflichtend für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`
  - : Gültig nur für die `image` Eingabeschaltfläche, ist die `width` die Breite der Bilddatei, die angezeigt werden soll, um die grafische Absende-Schaltfläche darzustellen. Weitere Informationen finden Sie beim {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind auch in einigen Browsern verfügbar. Generell sollten Sie vermeiden, sie zu verwenden, es sei denn, es lässt sich nicht vermeiden.

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
        Gibt an, ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse gesendet werden sollen, um die Live-Suchergebnisse zu aktualisieren, während der Benutzer den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenkette, die den Typ der Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Eingabetaste</kbd> oder <kbd>Return</kbd> drückt, während das Feld bearbeitet wird; dies wird verwendet, um eine passende Beschriftung für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Ausrichtung des Bereichsschiebers fest. <strong>Nur Firefox.</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl der Elemente, die in der Dropdown-Liste der vorherigen Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob dem Benutzer nur erlaubt wird, ein Verzeichnis (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist)
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit und Blink Erweiterung (deshalb unterstützt von Safari, Opera, Chrome, etc.), das, falls vorhanden, den {{Glossary("user_agent", "Benutzeragent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (wie durch Drücken der <kbd>Eingabetaste</kbd> oder <kbd>Return</kbd> während der Bearbeitung des Feldes).

    Das `search`-Ereignis ist so limitiert, dass es nicht häufiger als ein implementierungsdefiniertes Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich der nicht-standardisierten `-moz-orient` CSS-Eigenschaft, die die {{htmlelement('progress')}} und {{htmlelement('meter')}}-Elemente betrifft, definiert das Attribut `orient` die Ausrichtung des Bereichsschiebers. Zu den Werten gehören `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Weitere Informationen finden Sie unter [Erstellung vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls).

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut — nur von Safari unterstützt — ist ein numerischer Wert, der es Ihnen erlaubt, das Maximum von Einträgen zu überschreiben, die in dem vom `<input>`-Element nativ bereitgestellten Dropdown-Menü der vorherigen Suchanfragen angezeigt werden.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben wird, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass nur Verzeichnisse vom Benutzer in der Dateiauswahloberfläche ausgewählt werden sollen. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie in Firefox 50 und später verwendbar. Allerdings, obwohl es eine relativ breite Unterstützung hat, ist es noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Auch verfügbar sind die Methoden, die durch die Elternschnittstellen spezifiziert sind, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis am Element aus und meldet (wenn das Ereignis nicht abgesagt wird) das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder Kalenderdateneingabe) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt wird, wenn der Wert des Eingabefelds nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabefeld auf eine gegebene Zeichenkette. Ein `selectMode` Parameter ist verfügbar, um zu steuern, wie der bestehende Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines Text-Eingabefelds aus. Tut nichts für Eingaben, die nicht als Texteingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Auswähler für das Eingabefeld an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, jedoch durch das Drücken einer Schaltfläche oder eine andere Benutzerinteraktion ausgelöst.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Da Eingaben ersetzte Elemente sind, haben sie einige Merkmale, die nicht für Nicht-Formularelemente gelten. Es gibt CSS-Selektoren, die speziell Formularelemente basierend auf ihren UI-Funktionen ansprechen können, auch bekannt als UI-Pseudoklassen. Das Eingabeelement kann auch nach Typ mit Attributselektoren angesprochen werden. Es gibt einige Eigenschaften, die ebenfalls besonders nützlich sind.

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
        Jedes derzeit aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt,
        eingegeben, etc.) oder den Fokus akzeptieren kann und auch einen deaktivierten Zustand hat,
        in dem es nicht aktiviert oder den Fokus akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es
        ansonsten aktiviert werden könnte (ausgewählt, angeklickt, eingegeben, etc.) oder den Fokus
        akzeptieren könnte, wäre es nicht deaktiviert.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element nicht bearbeitbar durch den Benutzer</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code> Text</a> anzeigt,
        einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elementen mit dem <a href="#placeholder"><code>placeholder</code></a> Attribut, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die standardmäßig in einer Gruppe verwandter Elemente sind.
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die
        beim Laden oder Rendern der Seite aktiviert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die
        derzeit aktiviert sind (und die {{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente,
        deren unbestimmte Eigenschaft durch JavaScript auf wahr gesetzt ist,
        {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle
        Radioknöpfe mit demselben Namen im Formular nicht aktiviert sind, und
        {{HTMLElement("progress")}} Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formulare, die einer Validierung unterliegen und momentan gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularsteuerelemente, auf die eine Validierungsbeschränkung angewendet wurde und die derzeit
        nicht gültig sind. Entspricht einem Formularsteuerelement, dessen Wert die
        Einschränkungen, die durch seine Attribute festgelegt sind, wie z.B.
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>, nicht erfüllt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht-leeres Eingabefeld, dessen aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute festgelegten Bereichsgrenzen sowie dem <a href="#step"><code>step</code></a> liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht-leeres Eingabefeld, dessen aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a> Attribute festgelegten Bereichsgrenzen liegt oder
        nicht den <a href="#step"><code>step</code></a> Einschränkungen entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das Attribut <a href="#required"><code>required</code></a> gesetzt hat.
        Entspricht nur Elementen, die erforderlich sein können.
        Das Attribut wird bei einem nicht erforderbaren Element keine Übereinstimmung ergeben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}} Element, das NICHT das Attribut <a href="#required"><code>required</code></a> gesetzt hat.
        Entspricht nicht Elementen, die nicht erforderlich sein können.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elemente, die momentan keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, jedoch erst bei Verlust des Fokus. Entspricht
        ungültigen Eingaben, aber nur nach der Benutzerinteraktion, wie z.B. durch Fokussieren
        auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular
        mit dem ungültigen Steuerelement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code> Elemente, die einen Auswahldialog anzeigen, aus dem der Benutzer einen Wert auswählen kann (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) – aber nur, wenn das Element im offenen Zustand ist, das heißt, wenn der Auswahldialog angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassenbeispiel

Wir können ein Kontrollkästchen-Etikett basierend darauf stylen, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel gestalten wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das direkt nach einer aktivierten Eingabe erscheint. Wir haben keine Stile angewendet, wenn die `input` nicht aktiviert ist.

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

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mittels [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren passen zu Elementen basierend entweder nur auf das Vorhandensein eines Attributs oder auf den Wert eines gegebenen Attributs.

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

Standardmäßig ist das Erscheinungsbild von Platzhaltertext transluzent oder hellgrau. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder` Text](#placeholder) der Eingabe. Es kann mit einem begrenzten Satz an CSS-Eigenschaften gestaltet werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil der CSS-Eigenschaften, der auf das {{cssxref("::first-line")}} Pseudoelement angewendet werden kann, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor enthält.

### appearance

Die {{cssxref("appearance")}} Eigenschaft ermöglicht die Darstellung von (fast) jedem Element im plattformnativen Stil basierend auf dem Thema des Betriebssystems sowie die Entfernung jeglicher plattformnativer Stilierung mit dem Wert `none`.

Man könnte ein `<div>` wie eine Optionsschaltfläche aussehen lassen mit `div {appearance: radio;}` oder eine Optionsschaltfläche wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}`, aber es wird nicht empfohlen.

Das Setzen von `appearance: none` entfernt plattformnative Rahmen, aber nicht die Funktionalität.

### caret-color

Eine Eigenschaft, die spezifisch für Elemente zum Texteingeben ist, ist die CSS {{cssxref("caret-color")}} Eigenschaft, mit der Sie die Farbe des Textcursor einstellen können:

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

Die {{cssxref("field-sizing")}} Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu kontrollieren (d.h. sie erhalten standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, wodurch Formularelemente sich anpassen können, um ihren Inhalt zu fassen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die den Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetypen [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}} Elementen.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-texualen Eingaben und spezialisierten Schnittstellen) ist das `<input>` Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es das ist, können die Größe und Position des Elements innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Stilierung

Für weitere Informationen über das Hinzufügen von Farbe zu Elementen in HTML, siehe:

- [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Gestaltung von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Zusätzliche Merkmale

### Labels

Labels sind erforderlich, um Hilfetext mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}} Element bietet erklärende Informationen über ein Formularfeld, die _immer_ angemessen sind (abgesehen von Layout-Bedenken, die Sie haben könnten). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden sollte.

#### Zugehörige Labels

Die semantische Kopplung von `<input>` und `<label>` Elementen ist nützlich für unterstützende Technologien wie Bildschirmleser. Durch das Verknüpfen über das [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) Attribut des `<label>` wird der Label mit der Eingabe auf eine Weise verbunden, die es Bildschirmlesern ermöglicht, Eingaben präziser zu beschreiben.

Es ist nicht ausreichend, einfachen Text neben dem `<input>` Element zu haben. Vielmehr erfordern Gebrauchstauglichkeit und Zugänglichkeit die Aufnahme von entweder implizitem oder explizitem {{HTMLElement("label")}}:

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

Das erste Beispiel ist unzugänglich: Es besteht keine Beziehung zwischen der Eingabeaufforderung und dem `<input>` Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label einen größeren "Treffer"-Bereich für Maus- und Touchscreen-Benutzer zum Klicken oder Berühren. Durch die Kopplung von `<label>` mit `<input>`, wird beim Klicken auf eines dieser Elemente der Fokus auf die `<input>` gelegt. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu "labeln", passiert dies nicht. Das Einbeziehen der Eingabeaufforderung als Teil des Aktivierungsbereichs für die Eingabe ist hilfreich für Menschen mit motorischen Beeinträchtigungen.

Als Webentwickler ist es wichtig, dass wir niemals annehmen, dass Menschen alle Dinge wissen, die wir wissen. Die Vielfalt der Menschen, die das Internet nutzen – und damit Ihre Website – garantiert praktisch, dass einige Besucher Ihrer Website einige Variationen in Denkprozessen und/oder Umständen haben werden, die sie dazu bringen, Ihre Formulare ohne klare und richtig präsentierte Labels sehr unterschiedlich zu interpretieren.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder) Attribut ermöglicht es Ihnen, Text anzugeben, der innerhalb des Inhaltsbereichs des `<input>` Elements erscheint, wenn es leer ist. Der Platzhalter sollte nie erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, da er das nicht ist. Der Platzhalter dient dazu, einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Nicht nur, dass der Platzhalter für Bildschirmleser nicht zugänglich ist, er verschwindet auch, sobald der Benutzer Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert hat. Browser mit automatischen Seitenübersetzungsfunktionen können bei der Übersetzung Attribute überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder) Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>` Element beschriften müssen, verwenden Sie das {{HTMLElement("label")}} Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert jedoch nicht, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format sein müssen, überprüfen Sie sie _immer_ auch serverseitig und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Zustand jeder Eingabe zu stylen, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser eine Client-seitige Validierung bei (versuchter) Formularübermittlung. Bei der Formularübermittlung zeigt der unterstützende Browser, sofern ein Formularelement, das die Einschränkungsvalidierung nicht bestanden hat, eine Fehlermeldung am ersten ungültigen Formularelement an und zeigt eine Standardmeldung basierend auf dem Fehlertyp oder einer von Ihnen festgelegten Nachricht an.

Einige Eingabetypen und andere Attribute setzen Grenzen dafür, welche Werte für eine gegebene Eingabe gültig sind. Beispielsweise bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler können auftreten, darunter ein `rangeUnderflow` Fehler, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Ganzzahl (nicht den Anforderungen des `step` Attributs entspricht), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich möglicher Werte periodisch ist (d.h. am höchsten möglichen Wert kehren die Werte an den Anfang zurück, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min) Eigenschaften umgekehrt sind, was darauf hinweist, dass der Bereich zulässiger Werte bei `min` beginnt, zum niedrigsten möglichen Wert zurückkehrt und dann fortfährt, bis `max` erreicht ist. Dies ist besonders nützlich für Datum und Uhrzeiten, wie etwa, wenn Sie den Bereich von 20:00 bis 08:00 Uhr zulassen möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und ihre Werte können zu einem bestimmten Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Gültigkeitsfehlerobjekte hängen von den <code>&lt;input&gt;</code>
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
        Tritt auf, wenn der Wert größer als der durch das <code>max</code> Attribut definierte Höchstwert ist
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code> Eigenschaft erlaubte Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner als der durch das <code>min</code> Attribut definierte Mindestwert ist
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code> Eigenschaft erforderliche Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Pattern-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> dazu nicht passt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code> Attribut vorhanden ist, der Wert jedoch <code>null</code> ist, oder Radio/Checkbox nicht aktiviert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert passt nicht zum Schritt-Inkrement. Standardinkrement ist <code>1</code>, sodass nur Ganzzahlen bei <code>type="number"</code> gültig sind, wenn der Schritt nicht enthalten ist. <code>step="any"</code> wird diesen Fehler nie auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, zum Beispiel eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required` Attribut hat, ist kein Wert oder ein leerer String nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, wird ein leerer String nicht zu einem Fehler führen.

Wir können Grenzen für die akzeptierten Werte setzen, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer bei einem Fehler bei der Übermittlung des Formulars benachrichtigen.

Zusätzlich zu den in der Tabelle oben beschriebenen Fehlern enthält die `validityState` Schnittstelle die readonly booleschen Eigenschaften `badInput`, `valid` und `customError`. Das Gültigkeitsobjekt beinhaltet:

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

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund für einen Validierungsfehler zutrifft, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements allen Beschränkungen entspricht.

Wenn es einen Fehler gibt, werden unterstützende Browser den Benutzer sowohl benachrichtigen als auch verhindern, dass das Formular übermittelt wird. Ein Wort der Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen wahrheitsgemäßen Wert (alles außer leerem String oder `null`) gesetzt ist, wird das Formular daran gehindert, übermittelt zu werden. Wenn es keine benutzerdefinierte Fehlermeldung gibt und keine der anderen Eigenschaften als wahr zurückgegeben wird, wird `valid` wahr sein, und das Formular kann übermittelt werden.

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

Die letzte Zeile, die die benutzerdefinierte Fehlermeldung auf einen leeren String setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit festgelegt ist, wird es nicht übermittelt, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die verfügbare [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) für `<input>` (und verwandte) Elemente verwenden. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen führen dazu, dass dies eine Standardfehlermeldung erzeugt, wenn Sie versuchen, das Formular mit entweder keiner gültigen Eingabe oder einem Wert, der nicht dem `pattern` entspricht, abzusenden.

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

Das Beispiel wird wie folgt gerendert:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir prüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die `checkValidity()` Methode über den `input` Event-Handler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid` Event ausgelöst und die `invalid` Event-Handler-Funktion wird ausgeführt. Innerhalb dieser Funktion stellen wir fest, ob der Wert ungültig ist, weil er leer ist oder weil er nicht zum Muster passt, indem wir einen `if ()` Block verwenden, und setzen eine benutzerdefinierte Gültigkeitsfehlermeldung.
- Infolgedessen wird, wenn der Eingabewert ungültig ist, wenn die Senden-Taste gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn es gültig ist, wird es wie erwartet übermittelt. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit abgebrochen werden, indem `setCustomValidity()` mit einem leeren String-Wert aufgerufen wird. Daher tun wir dies jedes Mal, wenn das `input` Event ausgelöst wird. Wenn Sie dies nicht tun und vorher eine benutzerdefinierte Gültigkeit festgelegt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie derzeit bei der Übermittlung einen gültigen Wert enthält.

> [!NOTE]
> Überprüfen Sie immer die Eingangsbeschränkungen sowohl clientseitig als auch serverseitig. Eine Einschränkungsvalidierung beseitigt nicht die Notwendigkeit der Validierung auf der _Serverseite_. Ungültige Werte können weiterhin von älteren Browsern oder von böswilligen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte für viele Versionen ein proprietäres Fehlerattribut — `x-moz-errormessage` —, das es ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise festzulegen. Dies wurde ab Version 66 entfernt (siehe [Firefox Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>` Typen hängen von der Lokalisierung ab. In einigen Sprachen sind 1.000,00 eine gültige Zahl, während in anderen Sprachen 1.000,00 die korrekte Möglichkeit ist, diese Zahl einzugeben.

Firefox verwendet die folgenden Heuristiken, um die Lokalisierung zu bestimmen, um die Benutzereingabe zu validieren (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang` Attribut auf dem Element oder einem seiner Elternteile angegeben ist.
- Versuchen Sie die Sprache, die durch einen `Content-Language` HTTP-Header angegeben ist. Oder
- Verwenden Sie, wenn nichts angegeben ist, die Lokalisierung des Browsers.

## Barrierefreiheit

### Labels

Beim Einfügen von Eingaben ist es eine Anforderung in Bezug auf die Barrierefreiheit, Labels hinzuzufügen. Dies ist erforderlich, damit diejenigen, die unterstützende Technologien verwenden, erkennen können, wofür die Eingabe ist. Auch durch Klicken oder Berühren eines Labels wird der Fokus auf das mit dem Label verbundene Formularelement gelegt. Dies verbessert sowohl die Zugänglichkeit als auch die Benutzerfreundlichkeit für sehende Benutzer, erhöht den Bereich, auf den ein Benutzer klicken oder tippen kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radio-Buttons und Kontrollkästchen, die sehr klein sind. Weitere Informationen zu Labels im Allgemeinen finden Sie unter [Labels](#labels).

Das folgende ist ein Beispiel dafür, wie ein `<label>` mit einem `<input>` Element im obigen Stil verknüpft wird. Sie müssen dem `<input>` ein `id` Attribut geben. Das `<label>` benötigt dann ein `for` Attribut, dessen Wert dieselbe wie die `id` der Eingabe ist.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bereitstellen, damit es einfach ist, sie zu aktivieren. Dies ist für eine Vielzahl von Menschen hilfreich, einschließlich Menschen mit motorischen Problemen und Menschen, die ungenaue Eingabemethoden wie einen Stift oder Finger verwenden. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#fließender_inhalt">Fließender Inhalt</a>, aufgelistet, übermittelbar, zurücksetzbar, formularzugehöriges Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#textinhalt">Phraseninhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann benennbares Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "Leerelement")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#text-inhalt">Phraseninhalt</a> akzeptiert.
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a> when used
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

- [Formularbeschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Wie man benutzerdefinierte Formular-Steuerelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Gestaltung von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Erstellung vertikaler Formular-Steuerelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
