---
title: "<input>: Das HTML-Input-Element"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

Das **`<input>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; eine Vielzahl von Eingabedatenarten und Steuerungswidgets sind verfügbar, abhängig vom Gerät und {{Glossary("user_agent", "Benutzeragenten")}}. Das `<input>`-Element ist eines der mächtigsten und komplexesten in ganz HTML aufgrund der schieren Anzahl von Kombinationen aus Eingabetypen und Attributen.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## \<input>-Typen

Wie ein `<input>` funktioniert, variiert erheblich je nach Wert seines [`type`](#type)-Attributs, daher werden die verschiedenen Typen auf ihren eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben wird, ist der Standardtyp `text`.

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
      <th>Basisbeispiele</th>
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
      <td>Ein Auswahlkästchen, das das Auswählen oder Abwählen einzelner Werte erlaubt.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Eine Steuerung zur Farbwahl; öffnet einen Farbwähler, wenn er in unterstützenden Browsern aktiv ist.
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
        Öffnet einen Datumsauswähler oder numerische Räder für Jahr, Monat, Tag, wenn er in unterstützenden Browsern aktiv ist.
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
        Eine Steuerung zur Eingabe eines Datums und einer Zeit ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Räder für Datums- und Zeitkomponenten, wenn er in unterstützenden Browsern aktiv ist.
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
        <code>text</code>-Eingabe, verfügt jedoch über Validierungsparameter und relevante
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
&#x3C;input id="userId" name="userId" type="hidden" value="abc123"></pre
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
      <td>Eine Steuerung zur Eingabe eines Monats und Jahres ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Eine Steuerung zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt eine Standardvalidierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Einzeiliges Textfeld, dessen Wert verborgen wird.
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
        Ein Optionsfeld, das es ermöglicht, einen einzigen Wert aus mehreren mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Eine Steuerung zur Eingabe einer Zahl, deren exakter Wert nicht wichtig ist. Wird standardmäßig als Bereichs-Widget angezeigt. Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich der akzeptablen Werte zu definieren.
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
        Ein Button, der die Formularinhalte auf Standardwerte zurücksetzt. Nicht empfohlen.
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
        Einzeiliges Textfeld zur Eingabe von Suchstrings. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann ein Löschsymbol in unterstützenden Browsern enthalten, das verwendet werden kann, um das Feld zu löschen. Zeigt ein Suchsymbol anstelle der Eingabetaste auf einigen Geräten mit dynamischen Tastaturen.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Ein Button, der das Formular übermittelt.</td>
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
        Der Standardwert. Einzeiliges Textfeld. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabe, verfügt jedoch über Validierungsparameter und relevante Tastaturen in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Eine Steuerung zur Eingabe eines Datums, bestehend aus einer Jahr-Woche-Nummer und einer Wochennummer ohne Zeitzone.
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
        Eine Steuerung zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteile einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so mächtig wegen seiner Attribute; das [`type`](#type)-Attribut, oben mit Beispielen beschrieben, ist dabei das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf dem [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interface basiert, teilen sie technisch dieselbe Menge an Attributen. Tatsächlich jedoch haben die meisten Attribute nur Auswirkungen auf einen bestimmten Teil der Eingabetypen. Darüber hinaus hängt bei einigen Attributen die Wirkung auf ein Eingabeelement vom Eingabetyp ab, beeinflusst verschiedene Eingabetypen auf unterschiedliche Weise.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird durch eine Liste ergänzt, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie verbunden sind. Attribute, die für die meisten oder alle Eingabetypen gemeinsam sind, werden weiter unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind - oder Attribute, die bei allen Eingabetypen vorkommen, aber spezielle Verhalten aufweisen, wenn sie auf einem bestimmten Eingabetyp verwendet werden - sind stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                                                   |
| --------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis auf erwarteten Dateityp in Datei-Upload-Steuerungen                                                    |
| [`alt`](#alt)                                 | `image`                                                                | Alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                                |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                               | Steuert die automatische Großschreibung im eingegebenen Text.                                                  |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Buttons                             | Hinweis für die Formular-Autovervollständigungsfunktion                                                        |
| [`capture`](#capture)                         | `file`                                                                 | Medieneingabemethode in Datei-Upload-Steuerungen                                                               |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Gibt an, ob das Steuerungs- oder Befehlsfeld ausgewählt ist                                                    |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfelds zur Übermittlung der Richtungseigenschaft des Elements in der Formulardatenübermittlung |
| [`disabled`](#disabled)                       | alle                                                                   | Gibt an, ob das Formularelement deaktiviert ist                                                                |
| [`form`](#form)                               | alle                                                                   | Verknüpft die Steuerung mit einem Formularelement                                                              |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL für die Formulardatenübermittlung                                                                          |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Formular-Datensatztkodierungstyp zur Verwendung bei der Formulardatenübermittlung                              |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | HTTP-Methode für die Formulardatenübermittlung                                                                 |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Umgeht die Formularkontrollprüfung bei der Formulardatenübermittlung                                           |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browsing-Kontext für die Formulardatenübermittlung                                                             |
| [`height`](#height)                           | `image`                                                                | Entspricht dem Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                                   |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Buttons       | Wert des ID-Attributs der {{htmlelement('datalist')}}-Autocomplete-Optionenliste                               |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Höchstwert                                                                                                     |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Länge (Anzahl der Zeichen) des `value`-Wertes                                                         |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Mindestwert                                                                                                    |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Länge (Anzahl der Zeichen) des `value`-Wertes                                                         |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolean. Gibt an, ob mehrere Werte erlaubt sind                                                                |
| [`name`](#name)                               | alle                                                                   | Name der Formularsteuerung. Wird beim Absenden des Formulars als Teil eines Name/Wert-Paares eingereicht       |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, dem der `value` entsprechen muss, um gültig zu sein                                                    |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der im Formularelement angezeigt wird, wenn es keinen Wert hat                                           |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Kennzeichnet ein `<input type="button">` als Steuerungselement für ein Popover-Element                         |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt die Aktion an, die ein Popover-Kontrollelement ausführen soll                                             |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolean. Der Wert ist nicht bearbeitbar                                                                        |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolean. Ein Wert wird benötigt oder muss ausgewählt sein, damit das Formular übermittelt werden kann          |
| [`size`](#size)                               | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe der Steuerung                                                                                            |
| [`src`](#src)                                 | `image`                                                                | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                            |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Inkrementelle gültige Werte                                                                                    |
| [`type`](#type)                               | alle                                                                   | Typ der Formularsteuerung                                                                                      |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht er dem ursprünglichen Wert                          |
| [`width`](#width)                             | `image`                                                                | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                                     |

Einige zusätzliche nicht standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Nur für den `file`-Eingabetyp gültig, definiert das `accept`-Attribut, welche Dateitypen in einer `file`-Upload-Steuerung ausgewählt werden können. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`

  - : Nur für den `image`-Button gültig, bietet das `alt`-Attribut Alternativtext für das Bild an, der den Wert des Attributs anzeigt, wenn das Bild-[`src`](#src) fehlt oder nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, in welcher Weise. Siehe die [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)-Seite für globale Attribute, um mehr Informationen zu erhalten.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette an, die beschreibt, welche Autovervollständigungsfunktionen das Eingabeelement bereitstellen soll. Eine typische Implementierung der Autovervollständigung ruft die zuvor in dasselbe Eingabefeld eingegebenen Werte ab, aber es können komplexere Formen der Autovervollständigung existieren. Beispielsweise könnte ein Browser mit der Kontaktliste eines Geräts integrieren, um E-Mail-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values) für die erlaubten Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Wirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, es ist gültig für alle Eingabetypen außer `checkbox`, `radio`, `file` oder jegliche der Button-Typen.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` sich leicht für `hidden` unterscheidet im Vergleich zu anderen Eingabetypen.

- `autofocus`

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Fokus beim Laden der Seite (oder beim Anzeigen des {{HTMLElement("dialog")}}, das das Element enthält) automatisch auf dieses Eingabeelement gelegt werden soll.

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut besitzen. Wenn das Attribut auf mehr als einem Element liegt, erhält das erste Element mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben des Typs `hidden` angewendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Ein Formularfeld automatisch zu fokussieren, kann Menschen mit Seheinschränkungen, die Bildschirmlesetechnologien nutzen, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihre Benutzer ohne vorherige Warnung zum Formularelement.

    Verwenden Sie das `autofocus`-Attribut unter sorgfältiger Berücksichtigung der Barrierefreiheit. Automatisches Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass dynamische Tastaturen auf einigen Touch-Geräten angezeigt werden. Während ein Bildschirmleser das Etikett des fokussierten Formularelements ansagt, wird er nichts vor dem Etikett ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird ebenso den Kontext, der durch den vorhergehenden Inhalt geschaffen wird, verpassen.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den `file`-Eingabetyp, definiert das `capture`-Attribut, welches Medium - Mikrofon, Video oder Kamera - verwendet werden soll, um eine neue Datei für den Upload mit einer `file`-Upload-Steuerung in unterstützten Szenarien aufzunehmen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`

  - : Gültig sowohl für `radio` als auch für `checkbox` Typen, ist `checked` ein Boolean-Attribut. Wenn es bei einem `radio` Typ vorhanden ist, zeigt es an, dass das Optionsfeld das derzeit ausgewählte in der Gruppe von gleichnamigen Optionsfeldern ist. Wenn es bei einem `checkbox` Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn sich der Status des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`checked` IDL-Attribut des HTMLInputElement](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerelementen werden der Name und die Werte der Aktivierten nur eingeschlossen, wenn Checkboxes und Radio-Buttons zur Zeit `checked` sind. Wenn sie es sind, werden der Name und die Werte der ausgewählten Steuerelemente übermittelt.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen mit dem `name` `frucht` einen `value` von `kirsche` hat und das Kontrollkästchen aktiviert ist, werden die Formulardaten mit `frucht=kirsche` übermittelt. Wenn das Kontrollkästchen nicht aktiv ist, wird es in den Formulardaten überhaupt nicht aufgelistet. Der Standardwert für Checkboxes und Radio-Buttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen ermöglicht das `dirname`-Attribut die Übermittlung der Richtungseigenschaft des Elements. Wenn es enthalten ist, wird die Formularsteuerung mit zwei Name/Wert-Paaren übermittelt: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das obige Formular übermittelt wird, verursacht die Eingabe sowohl das `name` / `value` Paar von `frucht=kirsche` als auch das `dirname` / Richtungspaar von `frucht-dir=ltr`.
    Für mehr Informationen siehe das [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren können soll. Deaktivierte Eingaben werden normalerweise mit einer dunkleren Farbe oder durch eine andere Form des Hinweises angezeigt, dass das Feld nicht verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation gefordert, wird Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` zwischen Seitenladungen [beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- `form`

  - : Ein String, der das {{HTMLElement("form")}}-Element spezifiziert, mit dem die Eingabe verbunden ist (d. h. ihr **Formularbesitzer**). Der Wert dieses Strings, wenn vorhanden, muss die [`id`](#id) eines `<form>`-Elements im selben Dokument sein. Wenn dieses Attribut nicht angegeben ist, ist das `<input>`-Element mit dem nächstgelegenen enthaltenen Formular, falls vorhanden, verbunden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe an einer beliebigen Stelle im Dokument zu platzieren, aber sie in einem Formular an einer anderen Stelle im Dokument zu verwenden.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verbunden sein.

- `formaction`
  - : Gültig nur für den `image` und `submit` Eingabetyp. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Gültig nur für den `image` und `submit` Eingabetyp. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Gültig nur für den `image` und `submit` Eingabetyp. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Gültig nur für den `image` und `submit` Eingabetyp. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Gültig nur für den `image` und `submit` Eingabetyp. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Gültig nur für den `image` Eingabebutton, gibt die `height` die Höhe der Bilddatei an, die angezeigt werden soll, um den grafischen Senden-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente einschließlich aller Eingabetypen gültig ist. Es definiert eine eindeutige Kennung (ID), die eindeutig im gesamten Dokument sein muss. Sein Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des {{htmlelement('label')}} `for`-Attributs verwendet, um das Label mit der Formularsteuerung zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist. Er gibt einen Hinweis an Browser, welchen Typ von virtueller Tastaturkonfiguration verwendet werden soll, wenn dieses Element oder seine Inhalte bearbeitet werden. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der Wert, der dem `list`-Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements sein, das sich im selben Dokument befindet. Die `<datalist>` bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen eingeschlossen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut den Spezifikationen wird das `list`-Attribut nicht von den `hidden`, `password`, `checkbox`, `radio`, `file` oder jeglichen Button-Typen unterstützt.

    Je nach Browser sieht der Benutzer möglicherweise eine benutzerdefinierte Farbpalette vor, Strichmarkierungen entlang eines Bereichs oder sogar eine Eingabe, die wie ein {{HTMLElement("select")}} öffnet, aber nicht aufgelistete Werte zulässt. Sehen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}} Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den höchsten Wert im Bereich der zugelassenen Werte. Wenn der eingegebene [`value`](#value) in das Element diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Ist der Wert des `max`-Attributs keine Zahl, dann hat das Element keinen Höchstwert.

    Es gibt einen speziellen Fall: wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der von `min`, was anzeigt, dass der Bereich umschlungen werden kann; z. B. ermöglicht dies das Festlegen eines Zeitbereichs von 22:00 Uhr bis 04:00 Uhr.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, es definiert die maximale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe wird bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegeben Textes länger als `maxlength` UTF-16-Code-Einheiten ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als das `maxlength`-Attribut erlaubt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-side_validation) für mehr Informationen.

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, es definiert den niedrigsten Wert im Bereich der zugelassenen Werte. Wenn der eingegebene [`value`](#value) in das Element niedriger ist als dieser, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Ist der Wert des `min`-Attributs keine Zahl, hat das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig und ein nicht leerer Wert niedriger als das vom `min`-Attribut erlaubte Minimum ist, wird die Einschränkungsvalidierung die Übermittlung des Formulars verhindern. Siehe [Client-seitige Validierung](#client-side_validation) für mehr Informationen.

    Es gibt einen speziellen Fall: wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der von `min`, was anzeigt, dass der Bereich umschlungen werden kann; z. B. ermöglicht dies das Festlegen eines Zeitbereichs von 22:00 Uhr bis 04:00 Uhr.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die minimale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert kleiner oder gleich dem durch `maxlength` angegebenen Wert sein. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Eingabe keine Mindestlänge.

    Die Eingabe wird bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegeben Textes kürzer als `minlength` UTF-16-Code-Einheiten ist, was die Formularübermittlung verhindert. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-side_validation) für mehr Informationen.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolean-Attribut `multiple`, wenn gesetzt, erlaubt dem Benutzer, durch Kommas getrennte E-Mail-Adressen im E-Mail-Widget einzugeben oder mehrere Dateien mit der `file`-Eingabe auszuwählen. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`

  - : Ein String, der einen Namen für die Eingabesteuerung spezifiziert. Dieser Name wird zusammen mit dem Wert der Steuerung übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als erforderlich (auch wenn er es nicht ist). Wenn eine Eingabe keinen `name` angegeben hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, nicht angekreuzte Optionsfelder, nicht angekreuzte Kontrollkästchen und Zurücksetzen-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn als Name eines `<input>` Elements des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "Benutzeragenten")}} auf die beim Absenden des Formulars verwendete Zeichenkodierung eingestellt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name) Attribut erzeugt ein einzigartiges Verhalten für Radio-Buttons.

    Nur ein Radio-Button in einer gleichnamigen Gruppe von Radio-Buttons kann zu einem Zeitpunkt angekreuzt werden. Wenn ein Radio-Button in dieser Gruppe aktiviert ist, werden automatisch alle derzeit ausgewählten Radio-Buttons in derselben Gruppe deaktiviert. Der Wert dieses einen angekreuzten Radio-Buttons wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Wenn man in eine Serie von gleichnamigen Radio-Buttons eintabbed, wird der zuerst fokussierte, der bereits angekreuzt ist. Wenn sie nicht in der Reihenfolge gruppiert sind, und einer von ihnen angekreuzt ist, beginnt das Durchlaufen der Gruppe mit dem ersten erreichten, wobei alle übersprungen werden, die nicht aktiv sind. Mit anderen Worten, wenn einer aktiviert ist, überspringt das Durchlaufen die in der Gruppe nicht aktivierten Radio-Buttons. Wenn keiner aktiviert ist, erhält die Radio-Button-Gruppe den Fokus, wenn der erste in der gleichnamigen Gruppe erreicht wird.

    Sobald einer der Radio-Buttons in einer Gruppe den Fokus hat, erlauben die Pfeiltasten das Navigieren durch alle Radio-Buttons mit demselben Namen, selbst wenn die Radio-Buttons in der Quellreihenfolge nicht zusammen gruppiert sind.

    Wenn einem Eingabeelement ein `name` gegeben wird, wird dieser Name zu einer Eigenschaft des Element [elements](/de/docs/Web/API/HTMLFormElement/elements) des übergeordneten Formularelements. Wenn Sie eine Eingabe mit `name` als `gäste` und eine andere mit `name` als `hut-größe` haben, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `gastName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `gast` Feld und `hutGröße` das Objekt für das `hut-größe` Feld sein.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einem integrierten Eigenschaft des Formulars entspricht, da Sie damit die vordefinierte Eigenschaft oder Methode mit diesem Referenz auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, das `pattern`-Attribut wird verwendet, um ein reguläres Ausdrucksmuster zu kompilieren, dem der `value` der Eingabe entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger regulärer Ausdruck in JavaScript sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Um das Muster herum sollten keine nach vorn gerichteten Schrägstriche angegeben werden. Bei der Kompilierung des regulären Ausdrucks:

    1. das Muster wird implizit mit `^(?:` und `)$` umschlossen, sodass das Übereinstimmen gegen den _gesamten_ Eingabewert erforderlich ist, d. h. `^(?:<pattern>)$`.
    2. das `'v'`-Flag wird festgelegt, sodass das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht leerer Wert nicht dem Muster entspricht, wird die Einschränkungsvalidierung die Übermittlung des Formulars verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden durch Komma getrennten Wert verglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe einschließen. Sie können auch ein [`title`](#title)-Attribut einschließen, um zu erklären, welche Anforderungen erfüllt werden müssen, um mit dem Muster übereinzustimmen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#client-side_validation) für mehr Informationen.

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, das `placeholder`-Attribut bietet einen kurzen Hinweis für den Benutzer auf die Art von Informationen, die im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf den erwarteten Datentyp gibt, anstatt einer Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrücklaufzeichen oder Zeilenumbrüche enthalten. Beispielsweise, wenn ein Feld erwartet, den Vornamen eines Benutzers zu erfassen, und sein Etikett ist "Vorname", könnte ein geeignetes Platzhalterbeispiel "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Wege, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für mehr Informationen.

- `popovertarget`

  - : Wandelt ein `<input type="button">`-Element in einen Popover-Knopf um; nimmt die ID des zu steuernden Popover-Elements als seinen Wert an. Siehe die [Popover API](/de/docs/Web/API/Popover_API)-Landingpage für mehr Details.

- `popovertargetaction`

  - : Gibt die auszuführende Aktion auf einem Popover-Element an, das von einer Steuerung `<input type="button">` kontrolliert wird. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein angezeigtes Popover ausblenden. Wenn Sie versuchen, ein bereits ausgeblendet Popover auszublenden, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein ausgeblendet Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen angezeigt und ausgeblendet umschalten. Wenn das Popover ausgeblendet ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es ausgeblendet. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerknopf ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten können soll. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly) für mehr Informationen.

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das übergeordnete Formular übermittelt werden kann. Das `required`-Attribut wird von `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` Eingaben unterstützt.

    Siehe [Client-seitige Validierung](#client-side_validation) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Attributes/required) für mehr Informationen.

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url` und `text`, das `size`-Attribut gibt an, wie viel der Eingabe angezeigt werden soll. Im Grunde erzeugt es dasselbe Ergebnis wie das Setzen der CSS [`width`](/de/docs/Web/CSS/width)-Eigenschaft mit ein paar Ausnahmen. Die tatsächliche Einheit des Werts hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em` Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px` Einheiten). CSS `width` hat Vorrang über das `size`-Attribut.

- `src`

  - : Gültig nur für den `image` Eingabebutton, das `src` ist ein String, der die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Senden-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, ist das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut eine Zahl, die die Granularität festlegt, der der Wert entsprechen muss.

    Wenn es nicht explizit enthalten ist:

    - `step` standardmäßig auf 1 für `number` und `range`.
    - Jeder Eingabetyp für Datum/Zeit hat einen Standardwert für den `step`; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step), und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl sein - ganzzahlig oder Gleitkomma - oder der spezielle Wert `any`, was bedeutet, dass kein Schritt vorgesehen ist und jeder Wert erlaubt ist (vorbehaltlich anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, Datum/Zeit-Eingabetypen und `range` Eingabetypen gleich der Grundlage für die Stufung - der [`min`](#min) Wert und Inkremente des Stufenwerts, bis zum [`max`](#max) Wert, wenn angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Zahl als `10` oder mehr gültig. Wenn weggelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber Fließzahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig auf `1` gesetzt ist. Für `4.2` wäre erforderlich gewesen, `step` auf `any`, `0.1`, `0.2` zu setzen oder der `min` Wert hätte eine Zahl sein müssen, die auf `.2`, wie `<input type="number" min="-5.2">` endet.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht der Step-Konfiguration entsprechen, wird der Wert bei der Einschränkungsvalidierung als ungültig betrachtet und wird die `:invalid`-Pseudoklasse auslösen.

    Siehe [Client-seitige Validierung](#client-side_validation) für mehr Informationen.

- `tabindex`

  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen. Ein Integer-Attribut, das angibt, ob das Element Eingabefokus erhalten kann (fokusierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen mit Ausnahme von `hidden` Eingaben fokusierbar sind, sollte dieses Attribut nicht für Formularsteuerelemente verwendet werden, da es andernfalls notwendig wäre, die Fokushierarchie für alle Elemente im Dokument zu verwalten, mit dem Risiko, die Benutzbarkeit und Zugänglichkeit zu beeinträchtigen, falls dies nicht korrekt gemacht wird.

- `title`

  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, das einen Text mit beratender Information in Bezug auf das zugehörige Element enthält. Diese Informationen können typischerweise, aber nicht unbedingt, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks der Formulareingabe verwendet werden. Stattdessen verwenden Sie das {{htmlelement('label')}} Element mit einem `for` Attribut, das auf das [`id`](#id) Attribut der Formulareingabe gesetzt ist. Siehe [Labels](#labels) unten.

- `type`

  - : Ein String, der den Typ der zu rendernden Steuerung angibt. Um beispielsweise ein Kontrollkästchen zu erstellen, wird `checkbox` als Wert verwendet. Wird es weggelassen (oder ein unbekannter Wert angegeben), wird der Eingabetyp `text` verwendet, um ein Klartext-Eingabefeld zu erstellen.

    Erlaubte Werte sind oben unter [Input-Typen](#input_types) aufgelistet.

- `value`

  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Anfangswert, und ab dann kann dieser zu jeder Zeit geändert oder abgerufen werden, indem JavaScript verwendet wird, um auf die jeweilige [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)'s `value`-Eigenschaft zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch als verpflichtend für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`

  - : Gültig nur für den `image` Eingabebutton, gibt die `width` die Breite der Bilddatei an, die angezeigt werden soll, um den grafischen Senden-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch in manchen Browsern verfügbar. Grundsätzlich sollten Sie sie vermeiden zu verwenden, es sei denn, es ist unvermeidlich.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#autocorrect"><code>autocorrect</code></a></td>
      <td>
        Ein String, der angibt, ob die Autokorrektur <code>on</code> oder <code>off</code> ist. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#incremental"><code>incremental</code></a></td>
      <td>
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)
        Ereignisse gesendet werden, um Live-Suchergebnisse zu aktualisieren, während der Benutzer den Wert des Feldes noch bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der den Typ der Aktion angibt, die durchgeführt wird, wenn der Benutzer die <kbd>Eingabetaste</kbd> oder <kbd>Return</kbd> gedrückt hält, während das Feld bearbeitet wird; wird verwendet, um ein geeignetes Label für diese Taste auf einer virtuellen Tastatur auszuwählen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Orientierung des Bereichsschiebers fest. <strong>Nur Firefox.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximal darzustellende Anzahl der Einträge in der Dropdown-Liste der bisherigen Suchanfragen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob nur das Auswählen eines Verzeichnisses (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) erlaubt ist
      </td>
    </tr>
  </tbody>
</table>

- `autocorrect` {{non-standard_inline}}

  - : (Nur Safari). Ein String, der angibt, ob während der Bearbeitung dieses Feldes automatische Korrektur aktiviert ist. Zulässige Werte sind:

    - `on`
      - : Aktiviert die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textsubstitutionen, falls konfiguriert.
    - `off`
      - : Deaktiviert automatische Korrekturen und Textsubstitutionen.

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also von Safari, Opera, Chrome usw. unterstützt), die, wenn vorhanden, dem {{Glossary("user_agent", "Benutzeragenten")}} sagt, die Eingabe als Live-Suche zu verarbeiten. Wenn der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das die Suchbox darstellt. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis nur gesendet, wenn der Benutzer eine Suche ausdrücklich initiiert (z. B. durch Drücken der <kbd>Eingabetaste</kbd> oder <kbd>Return</kbd> während der Bearbeitung des Feldes).

    Das `search` Ereignis ist so begrenzt, dass es nicht häufiger als in einem vom Implementierungsbereich festgelegten Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich wie die -moz-orient nicht-standardisierte CSS-Eigenschaft, die die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente betrifft, definiert das `orient` Attribut die Orientierung des Bereichsschiebers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gezeichnet wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zum Erstellen vertikaler Formularelemente.

- `results` {{non-standard_inline}}

  - : Das `results` Attribut - nur von Safari unterstützt - ist ein numerischer Wert, der es Ihnen erlaubt, die maximal darzustellende Anzahl von Einträgen in dem vom `<input>` Element nativ bereitgestellten Dropdown-Menü der vorherigen Suchanfragen zu überschreiben.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert gegeben wird, wird die Standardmaximalanzahl von Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, zeigt an, dass nur Verzeichnisse in der Datei-Auswahl-Oberfläche des Benutzers verfügbar sein sollten. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Informationen und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später verwendbar. Doch obwohl es relativ breiten Support gibt, ist es noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Methoden

Die folgenden Methoden werden durch die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle bereitgestellt, die `<input>` Elemente im DOM darstellt. Verfügbar sind auch die Methoden der übergeordneten Schnittstellen, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis beim Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis beim Element aus und (wenn das Ereignis nicht abgebrochen wird) berichtet das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements ausgewählt werden kann. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder kalendarische Datumseingabe) macht diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Meldung fest, die angezeigt wird, wenn der Wert des Eingabelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Bereichs von Zeichen im Eingabefeld auf eine gegebene Zeichenkette. Ein `selectMode` Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines Texteisabelements aus. Macht nichts für Eingaben, die nicht als Texteingabefelder präsentiert werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browserwähler für das Eingabefeld an, der normalerweise angezeigt würde, wenn das Element ausgewählt wird, jedoch ausgelöst durch einen Button-Klick oder andere Benutzerinteraktion.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Reduziert den Wert einer numerischen Eingabe um eins, standardmäßig, oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Eingaben, da sie ersetzte Elemente sind, haben einige Merkmale, die nicht auf Nicht-Formularelemente anwendbar sind. Es gibt CSS-Selektoren, die speziell auf Formularelemente basierend auf ihren Benutzeroberflächenmerkmalen, auch bekannt als Benutzeroberflächen-Pseudoklassen, abzielen können. Das Eingabeelement kann auch nach Typ mit Attributselektoren zielgerichtet werden. Es gibt einige Eigenschaften, die ebenfalls besonders nützlich sind.

### Benutzeroberflächen-Pseudoklassen

<table class="no-markdown">
  <caption>
    Überschriften, die super relevant für das
    <code>&#x3C;input></code>
    Element sind:
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
        Jedes derzeit aktivierbare Element, das aktiviert (ausgewählt, angeklickt,
        getippt usw.) oder fokussiert werden kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es
        anderweitig aktiviert werden könnte (ausgewählt, angeklickt, getippt usw.) oder fokussiert werden könnte, sofern es nicht deaktiviert wäre.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element nicht vom Benutzer bearbeitbar</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitbar ist.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code> text</a> anzeigt,
        einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elemente mit der <a href="#placeholder"><code>placeholder</code></a> Attribut, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die das Standard in einer Gruppe verwandter Elemente sind.
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die
        beim Laden oder Rendern der Seite aktiviert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die
        derzeit ausgewählt sind (und die ({{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, der aktuell ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente,
        deren indeterminate Eigenschaft per JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle
        Radio-Buttons mit demselben Namenwert im Formular nicht ausgewählt sind, und
        {{HTMLElement("progress")}}-Elemente in einem indeterminierten Zustand
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die Einschränkungsgültigkeitsprüfung angewandt werden kann und die
        derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die Einschränkungsgültigkeitsprüfung angewandt wird und die derzeit
        nicht gültig sind. Entspricht einem Formularelement, dessen Wert nicht übereinstimmt mit den
        durch seine Attribute festgelegten Einschränkungen, wie
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, dessen aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute und den <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, dessen aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a> Attribute festgelegten Bereichsgrenzen liegt oder
        der nicht den <a href="#step"><code>step</code></a> Einschränkungen entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut hat.
        Entspricht nur Elementen, die erforderlich sein können.
        Das Attribut, das auf einem nicht erforderlich gemachten Element enthalten ist, führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}} Element, das NICHT das <a href="#required"><code>required</code></a> Attribut hat.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlassen aktiviert. Entspricht
        ungültigen Eingaben, jedoch nur nach Benutzereingriff, wie durch Fokussieren
        auf die Steuerung, Verlassen der Steuerung oder Versuch, das Formular mit der ungültigen Steuerung zu übermitteln.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen-Beispiel

Wir können eine Kontrollkästchenbeschriftung basierend darauf gestalten, ob das Kontrollkästchen ausgewählt ist oder nicht. In diesem Beispiel gestalten wir die {{cssxref('color')}} und {{cssxref('font-weight')}} der {{htmlelement('label')}}, die direkt nach einer ausgewählten Eingabe kommt. Wir haben keine Stile angewendet, wenn die `input` nicht ausgewählt ist.

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

Es ist möglich, verschiedene Typen von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) anzuzielen. CSS-Attributselektoren passen auf Elemente basierend auf entweder nur der Präsenz eines Attributs oder dem Wert eines gegebenen Attributs.

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

Standardmäßig ist das Erscheinungsbild von Platzhaltertexten durchscheinend oder hellgrau. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder` Text](#placeholder) der Eingabe. Es kann mit einer begrenzten Auswahl von CSS-Eigenschaften gestaltet werden.

```css
::placeholder {
  color: blue;
}
```

Nur die Auswahl von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement angewendet werden können, darf in einer Regel verwendet werden, die `::placeholder` in seinem Selektor verwendet.

### appearance

Die {{cssxref("appearance")}} Eigenschaft ermöglicht das Anzeigen (fast) jedes Elements im Stil des Betriebssystems basierend auf dem Thema sowie das Entfernen jeder für die Plattform nativen Gestaltung mit dem Wert `none`.

Sie könnten ein `<div>` wie einen Radio-Button aussehen lassen mit `div {appearance: radio;}` oder ein Radio wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}`, aber tun Sie es nicht.

Das Setzen von `appearance: none` entfernt plattformspezifische Grenzen, aber nicht die Funktionalität.
