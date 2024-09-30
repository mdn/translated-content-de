---
title: "<input>: Das HTML Input Element"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: bf1775f6305d95ae7c7022922c9cea2ef89212c1
---

{{HTMLSidebar}}

Das **`<input>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; es steht eine Vielzahl von Eingabedatentypen und Steuerungs-Widgets zur Verfügung, abhängig von Gerät und [User Agent](/de/docs/Glossary/user_agent). Das `<input>` Element ist eines der mächtigsten und komplexesten in ganz HTML, aufgrund der schieren Anzahl an Kombinationen von Eingabetypen und Attributen.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## \<input> Typen

Wie ein `<input>` funktioniert, variiert erheblich basierend auf dem Wert seines [`type`](#type) Attributs, daher werden die verschiedenen Typen in ihren eigenen, separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` angenommen.

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
        Ein Schaltknopf ohne Standardverhalten, der den Wert des <a href="#value"><code>value</code></a> Attributs anzeigt, standardmäßig leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Kontrollkästchen, das es ermöglicht, einzelne Werte auszuwählen oder abzuwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerungselement zur Spezifizierung einer Farbe; öffnet einen Farbwähler, wenn er in unterstützten Browsern aktiv ist.
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
        Ein Steuerungselement, um ein Datum (Jahr, Monat und Tag, ohne Zeit) einzugeben.
        Öffnet einen Datumsauswähler oder numerische Räder für Jahr, Monat, Tag, wenn er in unterstützten Browsern aktiv ist.
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
        Ein Steuerungselement für die Eingabe von Datum und Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Räder für Datum- und Zeitkomponenten, wenn er in unterstützten Browsern aktiv ist.
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
        <code>text</code> Eingabe, verfügt aber über Validierungsparameter und eine relevante
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
        Ein Steuerungselement, das es dem Benutzer ermöglicht, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a> Attribut, um die Dateitypen zu definieren, die das Steuerungselement auswählen kann.
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
        Ein Steuerungselement, das nicht angezeigt wird, aber dessen Wert an den
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
        Ein grafischer <code>submit</code> Button. Zeigt ein durch das <code>src</code> Attribut definiertes Bild an.
        Das <a href="#alt"><code>alt</code></a> Attribut wird angezeigt, wenn das Bild <a href="#src"><code>src</code></a> fehlt.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>Ein Steuerungselement zum Eingeben eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerungselement zum Eingeben einer Nummer. Zeigt einen Spinner an und fügt eine Standardvalidierung hinzu. Zeigt ein numerisches Tastenfeld in einigen Geräten mit dynamischen Tastenfeldern an.
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
        Warnt Benutzer, wenn die Seite nicht sicher ist.
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
        Eine Optionsschaltfläche, die es ermöglicht, einen einzelnen Wert aus mehreren Optionen mit dem gleichen <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Ein Steuerungselement zum Eingeben einer Zahl, deren genauer Wert nicht wichtig ist.
        Wird als Bereichs-Widget angezeigt, das standardmäßig auf den mittleren Wert gesetzt ist.
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
        Ein einzeiliges Textfeld für die Eingabe von Suchbegriffen. Zeilenumbrüche werden
        automatisch aus dem Eingabewert entfernt. Kann ein Löschsymbol in
        unterstützten Browsern enthalten, das zum Löschen des Feldes verwendet werden kann. Zeigt ein
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
        Ein Steuerungselement zur Eingabe einer Telefonnummer. Zeigt ein Telefon-Tastenfeld
        in einigen Geräten mit dynamischen Tastenfeldern an.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code>-Eingabe, verfügt aber
        über Validierungsparameter und eine relevante Tastatur in unterstützten Browsern
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
        Ein Steuerungselement zur Eingabe eines Datums, bestehend aus einer Jahr-Nummer und einer Wochen-Nummer ohne Zeitzone.
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
        Ein Steuerungselement zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteile einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>` Element ist so mächtig aufgrund seiner Attribute; das [`type`](#type) Attribut, oben mit Beispielen beschrieben, ist das Wichtigste. Da jedes `<input>` Element, unabhängig vom Typ, auf dem [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interface basiert, teilen sie technisch gesehen dieselbe Menge an Attributen. In Wirklichkeit haben jedoch die meisten Attribute nur auf eine spezifische Teilmenge von Eingabetypen Auswirkungen. Zudem beeinflussen einige Attribute, abhängig vom Eingabetyp, auf unterschiedliche Weise.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung aufführt. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut detailliert beschreibt, zusammen mit den Eingabetypen, mit denen sie verbunden sind. Diejenigen, die für die meisten oder alle Eingabetypen üblich sind, werden unten detaillierter definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind – oder Attribute, die allgemein für alle Eingabetypen sind, aber spezielle Verhaltensweisen haben, wenn sie auf einen gegebenen Eingabetyp verwendet werden – werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>` Element beinhalten die [globalen HTML Attribute](/de/docs/Web/HTML/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                 | Beschreibung                                                                          |
| --------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                  | Hinweis für erwarteten Dateityp in Datei-Upload-Steuerungen                             |
| [`alt`](#alt)                                 | `image`                                                                 | alt Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                        |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                | Steuert die automatische Großschreibung im eingegebenen Text.                          |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                        | Hinweis für automatische Formularausfüllung                                            |
| [`capture`](#capture)                         | `file`                                                                  | Eingabemethode zur Medienerfassung in Datei-Upload-Steuerungen                        |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                     | Ob der Befehl oder die Steuerung aktiviert ist                                         |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                       | Name des Formularfelds zur Übermittlung der Richtung des Elements in der Formularübermittlung |
| [`disabled`](#disabled)                       | alle                                                                     | Ob die Steuerelement deaktiviert ist                                                   |
| [`form`](#form)                               | alle                                                                     | Verknüpft das Steuerungselement mit einem Formularelement                              |
| [`formaction`](#formaction)                   | `image`, `submit`                                                       | URL zur Verwendung für die Formularübermittlung                                        |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                       | Zu verwendender Kodierungstyp des Formulardatensatzes für die Formularübermittlung     |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                       | HTTP-Methode zur Verwendung für die Formularübermittlung                               |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                       | Umgehung der Formularüberprüfungssteuerung bei der Formularübermittlung                |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                       | Browserkontext für die Formularübermittlung                                            |
| [`height`](#height)                           | `image`                                                                 | Entspricht dem height Attribut für {{htmlelement('img')}}; vertikale Dimension        |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen   | Wert des id-Attributs der {{htmlelement('datalist')}} von automatischen Ausfülloptionen |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Maximalwert                                                                           |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Maximale Länge (Anzahl der Zeichen) des `value`                                        |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Minimalwert                                                                            |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Minimale Länge (Anzahl der Zeichen) des `value`                                        |
| [`multiple`](#multiple)                       | `email`, `file`                                                         | Boolean. Ob mehrere Werte erlaubt sind                                                  |
| [`name`](#name)                               | alle                                                                     | Name des Steuerelements. Gemeinsam mit dem Formular als Teil eines Namens/Wert-Paars übermittelt |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                     | Muster, das `value` entsprechen muss, um gültig zu sein                                  |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`           | Text, der im Steuerelement erscheint, wenn kein Wert festgelegt ist                     |
| [`popovertarget`](#popovertarget)             | `button`                                                                | Designiert ein `<input type="button">` als Steuerung für ein Popover-Element            |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                        |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht bearbeitbar                                                |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                  | Boolean. Ein Wert ist erforderlich oder muss überprüft werden, damit das Formular übermittelt werden kann |
| [`size`](#size)                               | `text`, `search`, `url`, `tel`, `email`, `password`                     | Größe des Steuerelements                                                               |
| [`src`](#src)                                 | `image`                                                                 | Entspricht dem `src` Attribut für {{htmlelement('img')}}; Adresse der Bildressource    |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Inkrementelle Werte, die gültig sind                                                    |
| [`type`](#type)                               | alle                                                                     | Typ des Steuerelements                                                                 |
| [`value`](#value)                             | alle außer `image`                                                      | Der Wert des Steuerelements. Wenn im HTML angegeben, entspricht dies dem Anfangswert   |
| [`width`](#width)                             | `image`                                                                 | Entspricht dem `width` Attribut für {{htmlelement('img')}}                             |

Einige zusätzliche nicht-standardisierte Attribute sind in den Beschreibungen der Standardattribute aufgeführt.

### Individuelle Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Gilt nur für den `file` Eingabetyp, das `accept` Attribut definiert, welche Dateitypen in einem `file` Upload-Steuerelement ausgewählt werden können. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`

  - : Gültig nur für den `image` Button, das `alt` Attribut bietet Alternativtext für das Bild, der angezeigt wird, wenn das Bild [`src`](#src) fehlt oder anderweitig fehlschlägt. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise. Siehe die [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) globale Attributseite für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) Attribut nimmt als Wert einen leerzeichengetrennten String an, der beschreibt, welche, falls vorhanden, Autovervollständigungsfunktionalität die Eingabe bereitstellen soll. Eine typische Implementierung von Autovervollständigung erinnert sich an zuvor eingegebene Werte in demselben Eingabefeld, aber komplexere Formen der Autovervollständigung können existieren. Zum Beispiel könnte ein Browser mit der Kontaktliste eines Geräts integrieren, um `email`-Adressen in einem E-Mail-Eingabefeld zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values) für erlaubte Werte.

    Das `autocomplete` Attribut ist für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password` gültig. Dieses Attribut hat keine Auswirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen außer `checkbox`, `radio`, `file` oder einer der Schaltflächentypen gültig.

    Siehe das [`autocomplete` Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` für `hidden` leicht anders ist als für andere Eingabetypen.

- `autofocus`

  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass die Eingabe automatisch den Fokus haben sollte, wenn die Seite vollständig geladen ist (oder wenn das {{HTMLElement("dialog")}} angezeigt wird, das das Element enthält).

    > [!NOTE]
    > Ein Element mit dem `autofocus` Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus` Attribut haben. Wenn es auf mehr als ein Element angewendet wird, erhält das erste, das das Attribut hat, den Fokus.

    Das `autofocus` Attribut kann nicht auf `hidden` Eingaben verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren eines Steuerelements kann sehbehinderten Menschen, die Bildschirmleser verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihre Benutzer ohne vorherige Warnung zu dem Steuerelement.

    Verwenden Sie sorgfältige Überlegungen zur Barrierefreiheit, wenn Sie das `autofocus` Attribut anwenden. Das automatische Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser die Bezeichnung des Fokussierenden Steuerelements ankündigt, wird der Bildschirmleser nichts vor der Bezeichnung ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext der vorherigen Inhalte verpassen.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture Spezifikation und gültig nur für den `file` Eingabetyp, definiert das `capture` Attribut, welches Medium — Mikrophon, Video oder Kamera — zur Erfassung einer neuen Datei für den Upload mit `file` Upload-Steuerung in unterstützenden Szenarien verwendet werden soll. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`

  - : Gültig für sowohl `radio` als auch `checkbox` Typen, `checked` ist ein Boolean-Attribut. Wenn es auf einen `radio` Typ angewendet wird, gibt es an, dass die Optionsschaltfläche die derzeit ausgewählte in der Gruppe von gleichnamigen Optionsschaltflächen ist. Wenn es auf einen `checkbox` Typ angewendet wird, gibt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es gibt _nicht_ an, ob dieses Kontrollkästchen momentan aktiviert ist: wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen werden die Werte eines Kontrollkästchens und von Optionsschaltflächen nur dann in den übermittelten Daten enthalten, wenn sie derzeit `checked` sind. Wenn sie es sind, werden der Name und die Wert(e) der überprüften Steuerungen übermittelt.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, werden die Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgeführt. Der Standardwert für Kontrollkästchen und Optionsschaltflächen ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen, ermöglicht das `dirname` Attribut die Übermittlung der Richtung des Elements. Wenn es enthalten ist, wird das Steuerelement mit zwei Namens-/Wertpaaren übermittelt: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname` Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das Formular oben übermittelt wird, bewirkt die Eingabe sowohl die Übermittlung des `name` / `value` Paars `fruit=cherry` als auch des `dirname` / Richtungs-Paars `fruit-dir=ltr`.
    Für weitere Informationen siehe das [`dirname` Attribut](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer nicht mit der Eingabe interagieren soll. Deaktivierte Eingaben werden typischerweise in einer gedimmteren Farbe oder auf andere Weise angezeigt, die anzeigt, dass das Feld nicht verfügbar ist.

    Insbesondere empfangen deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event) Ereignis, und deaktivierte Eingaben werden nicht zusammen mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation gefordert, wird Firefox standardmäßig den dynamischen deaktivierten Zustand einer `<input>` über Seitenladevorgänge hinweg beibehalten. Verwenden Sie das [`autocomplete`](#autocomplete) Attribut, um dieses Feature zu steuern.

- `form`

  - : Ein String, der das {{HTMLElement("form")}} Element angibt, mit dem die Eingabe verbunden ist (d.h. ihr **Formularbesitzer**). Der Wert dieses Strings, falls vorhanden, muss mit dem [`id`](#id) eines `<form>` Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>` Element mit dem nächstgelegenen umgebenden Formular verknüpft, falls vorhanden.

    Das `form` Attribut ermöglicht es Ihnen, eine Eingabe überall im Dokument zu platzieren, sie aber in ein Formular andernorts im Dokument einzuschließen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `formenctype`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `formmethod`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `formnovalidate`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `formtarget`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für mehr Informationen.
- `height`
  - : Gültig nur für den `image` Eingabe-Button, ist die `height` die Höhe der Bilddatei, die zur Darstellung des grafischen Senden-Buttons angezeigt werden soll. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen. Es definiert eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als der Wert des `for` Attributs des {{htmlelement('label')}} verwendet, um das Label mit dem Steuerelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente. Es gibt einen Hinweis an die Browser, welche Art von Konfiguration für die virtuelle Tastatur verwendet werden soll, wenn dieses Element oder sein Inhalt bearbeitet wird. Werte sind `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal`, und `search`.
- `list`

  - : Der Wert, der dem `list` Attribut gegeben wird, sollte der [`id`](/de/docs/Web/API/Element/id) einer {{HTMLElement("datalist")}} -Element sein, das im selben Dokument existiert. Die `<datalist>` bietet eine Liste vordefinierter Werte als Vorschläge für den Benutzer für diese Eingabe. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, und `color`.

    Gemäß den Spezifikationen wird das `list` Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder einer der Schaltflächentypen unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Tick-Marks entlang eines Bereiches oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber nicht aufgelistete Werte zulässt. Sehen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}} Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert es den größten Wert im Bereich erlaubter Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max` Attributs keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen speziellen Fall: Wenn der Datentyp periodisch ist (z.B. für Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was angibt, dass der Bereich sich umwickeln kann; zum Beispiel ermöglicht dies, einen Zeitbereich von 22 Uhr bis 4 Uhr zu spezifizieren.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert es die maximale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein Wert von 0 oder mehr sein. Wenn kein `maxlength` angegeben ist, oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe wird bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Textes länger ist als `maxlength` UTF-16 Code-Einheiten. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das `maxlength` Attribut erlaubt. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-Seiten-Validierung](#client-side_validation) für mehr Informationen.

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert es den kleinsten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) weniger als dies ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min` Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max` Attributs sein. Wenn das `min` Attribut vorhanden, aber nicht spezifiziert oder ungültig ist, wird kein `min` Wert angewendet. Wenn das `min` Attribut gültig ist und ein nicht-leerer Wert kleiner ist als das Minimum, das durch das `min` Attribut erlaubt ist, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Siehe [Client-Seiten-Validierung](#client-side_validation) für mehr Informationen.

    Es gibt einen speziellen Fall: Wenn der Datentyp periodisch ist (z.B. für Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was angibt, dass der Bereich sich umwickeln kann; zum Beispiel ermöglicht dies, einen Zeitbereich von 22 Uhr bis 4 Uhr zu spezifizieren.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert sein, der kleiner oder gleich dem Wert ist, der durch `maxlength` spezifiziert wird. Wenn keine `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe wird bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Code-Einheiten beträgt, was die Formularübermittlung verhindert. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-Seiten-Validierung](#client-side_validation) für mehr Informationen.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolean `multiple` Attribut, wenn gesetzt, bedeutet, dass der Benutzer komma-getrennte E-Mail-Adressen im E-Mail-Widget eingeben kann oder mehr als eine Datei mit dem Eingabesteuerung `file` auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`

  - : Ein String, der einen Namen für das Steuerelement angibt. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn das Formular übermittelt wird.

    Betrachten Sie den `name` als ein erforderliches Attribut (auch wenn es nicht ist). Wenn eine Eingabe keinen `name` angegeben hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerungen, nicht aktivierte Optionsschaltflächen, nicht aktivierte Kontrollkästchen und Zurücksetzen-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn es als Name eines `<input>` Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch vom [User Agent](/de/docs/Glossary/user_agent) auf den Zeichensatz gesetzt, der zum Übermitteln des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name) Attribut erstellt einzigartiges Verhalten für Optionsschaltflächen.

    Nur eine Optionsschaltfläche in einer Gruppe gleichnamiger Optionsschaltflächen kann gleichzeitig aktiviert sein. Wenn eine Optionsschaltfläche aus dieser Gruppe ausgewählt wird, werden automatisch alle derzeit ausgewählten Optionsschaltflächen in derselben Gruppe abgewählt. Der Wert dieser einen aktivierten Optionsschaltfläche wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird,

    Wenn man in eine Serie von gleichnamigen Gruppen von Optionsschaltflächen tabbt, erhält die erste, die aktiviert ist, den Fokus. Wenn sie nicht zusammen in Quellreihenfolge gruppiert sind, wird das Tabbing in die Gruppe gestartet, wenn die erste in der Gruppe erreicht wird und alle unaktivierten übersprungen werden. Mit anderen Worten, wenn einer ausgewählt ist, wird das Tabbing die unaktivierten Optionsschaltflächen in der Gruppe überspringen. Wenn keiner ausgewählt ist, erhält die Optionsschaltflächengruppe den Fokus, wenn die erste Schaltfläche in der gleich benannten Gruppe erreicht ist.

    Wenn eine der Optionsschaltflächen in einer Gruppe den Fokus erhalten hat, wird durch die Verwendung der Pfeiltasten durch alle Optionsschaltflächen desselben Namens navigiert, selbst wenn die Optionsschaltflächen nicht zusammen in der Quellreihenfolge gruppiert sind.

    Wenn einem Eingabeelement ein `name` zugewiesen wird, wird dieser Name zu einer Eigenschaft der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) Eigenschaft des Formulars, dem es gehört. Wenn Sie eine Eingabe haben, deren `name` auf `guest` gesetzt ist und eine andere, deren `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein und `hatSize` das Objekt für das `hat-size` Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einem eingebauten Eigenschaft des Formulars entspricht, da Sie dann die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf die entsprechende Eingabe überschreiben.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, das `pattern` Attribut wird verwendet, um einen regulären Ausdruck zu kompilieren, dem der [`value`](#value) der Eingabe entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript regulärer Ausdruck sein, wie vom {{jsxref("RegExp")}} Typ verwendet und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Vorwärts Schrägstriche sollten nicht um den Mustertest spezifiziert werden. Bei der Kompilierung des regulären Ausdrucks gilt:

    1. das Muster wird implizit mit `^(?:` und `)$` umschlossen, sodass die Übereinstimmung gegen den gesamten Eingabewert erforderlich ist, d. h. `^(?:<pattern>)$`.
    2. das `'v'` Flag wird spezifiziert, damit das Muster als Sequenz von Unicode Code-Punkten behandelt wird, anstatt als [ASCII](/de/docs/Glossary/ASCII).

    Wenn das `pattern` Attribut vorhanden, aber nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet, und dieses Attribut wird vollständig ignoriert. Wenn das Musterattribut gültig ist und ein nicht-leerer Wert nicht mit dem Muster übereinstimmt, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden komma-getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern` Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe platzieren. Sie können auch ein [`title`](#title) Attribut einfügen, um zu erklären, welche Anforderungen erfüllt sein müssen, um dem Muster zu entsprechen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-Seiten-Validierung](#client-side_validation) für mehr Informationen.

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, das `placeholder` Attribut bietet einen kurzen Hinweis für den Benutzer, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf den erwarteten Datentyp gibt, anstatt eine Erklärung oder Aufforderung. Der Text _darf nicht_ Zeilenumbrüche oder Zeilenwechsel enthalten. Zum Beispiel, wenn ein Feld den Vornamen eines Benutzers erfassen soll und seine Bezeichnung „Vorname“ lautet, könnte ein geeigneter Platzhalter „z.B. Mustafa“ sein.

    > [!NOTE]
    > Das `placeholder` Attribut ist semantisch nicht so nützlich wie andere Möglichkeiten, um Ihr Formular zu erklären, und kann unerwartete technische Probleme verursachen. Siehe [Bezeichnungen](#labels) für weitere Informationen.

- `popovertarget`

  - : Wandelt ein `<input type="button">` Element in eine Popover-Steuerungsschaltfläche um; nimmt die ID des Popover-Elements, das gesteuert werden soll, als seinen Wert. Siehe die [Popover API](/de/docs/Web/API/Popover_API) Startseite für mehr Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf ein Popover-Element angewendet werden soll, das von einem Kontroll `<input type="button">` gesteuert wird. Mögliche Werte sind:

    - `"hide"`
      - : Die Schaltfläche wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Die Schaltfläche wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Die Schaltfläche wird ein Popover zwischen angezeigtem und verborgenem Zustand umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerungsschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer den Wert der Eingabe nicht bearbeiten soll. Das `readonly` Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `password` Eingabetypen unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly) für weitere Informationen.

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Formular an den Besitzer übermittelt werden kann. Das `required` Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, und `file` Eingaben unterstützt.

    Siehe [Client-Seiten-Validierung](#client-side_validation) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Attributes/required) für weitere Informationen.

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url`, und `text`, das `size` Attribut gibt an, wie viel von der Eingabe angezeigt wird. Im Grunde das gleiche Ergebnis wie die Einstellung der CSS [`width`](/de/docs/Web/CSS/width) Eigenschaft mit ein paar Spezialitäten. Die tatsächliche Einheit des Wertes hängt von der Art der Eingabe ab. Bei `password` und `text` ist es eine Anzahl von Zeichen (oder `em` Einheiten) mit einem Standardwert von `20`, und bei anderen sind es Pixel (oder `px` Einheiten). Die CSS `width` hat Vorrang gegenüber dem `size` Attribut.

- `src`

  - : Gültig nur für den `image` Eingabe-Button, ist die `src` ein String, der die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Senden-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, ist das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut eine Zahl, die die Granularität angibt, der der Wert entsprechen muss.

    Wenn nicht explizit eingeschlossen:

    - `step` standardmäßig auf 1 für `number` und `range`.
    - Jeder Date- und Uhreingabetyp hat einen Standardwert für `step`, der für den Typ geeignet ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step), und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl sein – Ganzzahl oder Fließkommazahl – oder der spezielle Wert `any`, was bedeutet, dass keine Schrittgröße impliziert ist, und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für `number`, Daten- und Uhrzeiteingabetypen sowie `range` Eingabetypen gleich dem Basiswert für das Schrittverfahren – dem [`min`](#min) Wert und den Inkrementen des Schrittwerts, bis zum [`max`](#max) Wert, falls angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Ganzzahl, `10` oder größer, gültig. Bei Weglassen, `<input type="number">`, ist jede Ganzzahl gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig auf `1` gesetzt ist. Um `4.2` gültig zu machen, müsste der `step` als `any`, 0.1, 0.2 oder die `min` Wert als Zahl mit `.2` enden, wie `<input type="number" min="-5.2">` gesetzt werden.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht mit der Konfiguration der Schrittgröße übereinstimmen, wird der Wert bei der Einschränkungsvalidierung als ungültig angesehen und wird die `:invalid` Pseudoklasse matchen.

    Siehe [Client-Seiten-Validierung](#client-side_validation) für mehr Informationen.

- `tabindex`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, eine ganzzahlige Attribut, das angibt, ob das Element den Eingabefokus (ist fokussierbar) erlangen kann, oder ob es teilnehmen soll an der sequentiellen Tastaturnavigation. Da alle Eingabetypen mit Ausnahme von Eingaben vom Typ hidden fokussierbar sind, sollte dieses Attribut nicht auf Steuerelementen im Formular verwendet werden, da dies die Verwaltung der Fokusreihenfolge für alle Elemente im Dokument erfordern würde, mit dem Risiko, die Bedienbarkeit und Barrierefreiheit zu beeinträchtigen, wenn dies falsch gemacht wird.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text enthält, der Beratungsinformationen zu dem Element darstellt, zu dem es gehört. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks des Steuerelements des Formulars verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}} Element mit einem `for` Attribut, das auf das [`id`](#id) Attribut des Steuerelement des Formulars gesetzt ist. Siehe [Labels](#labels) unten.

- `type`

  - : Ein String, der die Art des darzustellenden Steuerelements angibt. Zum Beispiel, um ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wird er weggelassen (oder ein unbekannter Wert angegeben), wird der Eingabetyp `text` verwendet, wodurch ein Klartext-Eingabefeld erstellt wird.

    Die erlaubten Werte sind in den [Eingabetypen](#input_types) oben aufgeführt.

- `value`

  - : Der Wert des Eingabesteuerelements. Wenn dieser im HTML angegeben wird, ist dies der Anfangswert, und ab diesem Zeitpunkt kann er jederzeit mithilfe von JavaScript geändert oder abgerufen werden, um auf die entsprechende `HTMLInputElement`-Instanz zuzugreifen, die die `value`-Eigenschaft enthält. Das `value` Attribut ist immer optional, sollte aber als obligatorisch für `checkbox`, `radio`, und `hidden` angesehen werden.

- `width`

  - : Gültig nur für den `image` Eingabe-Button, ist die `width` die Breite der Bilddatei, die dargestellt werden soll, um den grafischen Senden-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind ebenfalls in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie sie vermeiden, es sei denn, es geht nicht anders.

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
        Ein String, der angibt, ob die Autokorrektur ein- oder ausgeschaltet ist. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#incremental"><code>incremental</code></a></td>
      <td>
        Ob Eingabe wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)
        Ereignisse sendet, um Live-Suchergebnisse zu aktualisieren, während der Benutzer den Wert des Feldes noch bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion angibt, die ausgeführt wird, wenn der Benutzer
        die <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste drückt, während er das
        Feld bearbeitet; dies wird verwendet, um ein geeignetes Label für diese Taste auf einer
        virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut als veraltet gilt, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Ausrichtung des Bereich-Reglers. <strong>Nur Firefox.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Elementen, die in der Dropdown-Liste der vorherigen Suchanfragen angezeigt werden soll. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob nur das Auswählen eines Verzeichnisses (oder von Verzeichnissen, falls <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden) erlaubt ist.
      </td>
    </tr>
  </tbody>
</table>

- `autocorrect` {{non-standard_inline}}

  - : (Nur Safari). Ein String, der angibt, ob die automatische Korrektur während der Bearbeitung dieses Feldes aktiviert werden soll. Zulässige Werte sind:

    - `on`
      - : Automatische Korrektur von Tippfehlern aktivieren, sowie die Verarbeitung von Textersetzungen, wenn welche konfiguriert sind.
    - `off`
      - : Automatische Korrektur und Textersetzungen deaktivieren.

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also von Safari, Opera, Chrome usw. unterstützt), die, falls vorhanden, den [User Agent](/de/docs/Glossary/user_agent) anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das das Suchfeld darstellt. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis nur gesendet, wenn der Benutzer ausdrücklich eine Suche einleitet (z.B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd>Taste während der Bearbeitung des Feldes).

    Das `search` Ereignis ist so rate-begrenzt, dass es häufiger als ein implementationsdefinierter Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich wie das -moz-orient nicht-standardisierte CSS-Attribut, das die {{htmlelement('progress')}} und die {{htmlelement('meter')}} Elemente betrifft, definiert das `orient` Attribut die Orientierung des Bereich-Reglers. Werte sind `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Erstellen vertikaler Steuerelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Steuerelemente.

- `results` {{non-standard_inline}}

  - : Das `results` Attribut – nur von Safari unterstützt – ist ein numerischer Wert, der es ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü der vorherigen Suchanfragen des `<input>` Elements angezeigt werden sollen.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wird er nicht bereitgestellt oder ein ungültiger Wert angegeben, wird die standardmäßige maximale Eintragsanzahl des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean `webkitdirectory` Attribut, falls vorhanden, zeigt an, dass im Datei-Auswahldialog nur Verzeichnisse zur Verfügung stehen sollen, die vom Benutzer ausgewählt werden dürfen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Einzelheiten und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und späteren Versionen nutzbar. Obwohl es relativ breite Unterstützung hat, ist es nach wie vor nicht standardisiert und sollte nur verwendet werden, sofern keine Alternative vorhanden ist.

## Methoden

Die folgenden Methoden werden durch die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle bereitgestellt, die `<input>` Elemente im DOM darstellt. Auch sind jene Methoden verfügbar, die durch die übergeordneten Schnittstellen spezifiziert sind: [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)Ereignis an dem Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)Ereignis an dem Element aus, und (falls das Ereignis nicht abgebrochen wird) meldet das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>` Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Text (z.B. ein visueller Farbwähler oder Kalendereingabe) hat diese Methode keine Wirkung.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Bereichs von Zeichen im Eingabeelement auf eine gegebene Zeichenfolge. Ein `selectMode` Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen in einem Texteingabeelement aus. Hat keine Wirkung für Eingaben, die nicht als Text eingegeben werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Abholer des Browsers für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, wird jedoch ausgelöst von einem Druck auf eine Schaltfläche oder eine andere Benutzerinteraktion.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl Einheiten.

## CSS

Eingaben, die ersetzte Elemente sind, haben einige Eigenschaften, die auf Nicht-Formularelemente nicht anwendbar sind. Es gibt CSS-Selektoren, die Steuerelemente des Formulars basierend auf ihren UI-Funktionen speziell ansprechen können, bekannt auch als UI-Pseudoklassen. Das Eingabeelement kann auch mit Attributselektoren nach Typ gezielt werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Beschreibungen besonders relevant für das
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
        in das getippt usw.) werden kann oder den Fokus erhalten kann und
        auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder fokusiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, es
        könnte andernfalls aktiviert (ausgewählt, angeklickt, in das getippt usw.) oder
        den Fokus erhalten werden, wenn es nicht deaktiviert wäre.
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
        Element, das derzeit <a href="#placeholder"><code>placeholder</code> Text</a> anzeigt,
        einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elementen mit dem <a href="#placeholder"><code>placeholder</code></a> Attribut, die bislang keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die die Standardoption in einer Gruppe verwandter Elemente sind.
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die
        beim Laden oder Rendern der Seite überprüft wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die
        derzeit überprüft sind (und der ({{HTMLElement("option")}} in einer
        {{HTMLElement("select")}} der sich derzeit in Prüfung befindet).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente
        deren indeterminate Eigenschaft durch JavaScript auf true gesetzt wird,
        {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle
        Optionsschaltflächen mit dem gleichen Namen-Wert in dem Formular nicht überprüft sind und
        {{HTMLElement("progress")}} Elemente in einem unbestimmten Zustand
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, die eine Einschränkungsvalidierung haben können und
        derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, die eine Einschränkungsvalidierung haben und derzeit
        nicht gültig sind. Entspricht einem Formularelement, dessen Wert nicht den
        eingeschränkten Anforderungen entspricht, die durch seine Attribute wie
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a> festgelegt sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert innerhalb der Bereichsgrenzen liegt,
        die durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute und den <a href="#step"><code>step</code></a> festgelegt sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert NICHT innerhalb der Bereichsgrenzen liegt,
        die durch die <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a> Attribute festgelegt sind oder
        nicht der <a href="#step"><code>step</code></a> Einschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut gesetzt hat.
        Entspricht nur Elementen, die verlangt sein können.
        Das Attribut auf einem nicht-verlangbaren Element wird kein Match ergeben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}} Element, das NICHT das <a href="#required"><code>required</code></a> Attribut gesetzt hat.
        Entspricht nicht Elementen, die nicht verlangt sein können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch bei Unschärfe aktiviert. Entspricht
        ungültiger Eingabe, jedoch erst nach Benutzerinteraktion wie zum Beispiel das Fokussieren
        auf die Steuerung, Verlassen der Steuerung oder den Versuch, das Formular
        mit der ungültigen Steuerung zu übermitteln.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudo-Klassen Beispiel

Wir können ein Kontrollkästchen basierend darauf stylen, ob es aktiviert oder nicht ist. In diesem Beispiel stylen wir die {{cssxref('color')}} und das {{cssxref('font-weight')}} des {{htmlelement('label')}}, der unmittelbar nach einer überprüften Eingabe kommt. Wir haben keine Stile angewendet, wenn die `input` nicht aktiviert ist.

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

Es ist möglich, unterschiedliche Formularelemente basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) zu selektieren. CSS-Attributselektoren entsprechen den Elementen basierend auf entweder der bloßen Präsenz eines Attributs oder dem Wert eines bestimmten Attributs.

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

Standardmäßig ist das Erscheinungsbild von Platzhaltertext transluzent oder hellgrau. Die {{cssxref('::placeholder')}} Pseudo-Element ist der [`placeholder` Text](#placeholder) der Eingabe. Er kann mit einem begrenzten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur die Untermenge der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudo-Element angewendet werden können, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### appearance

Das {{cssxref("appearance")}} Attribut ermöglicht das Anzeigen (fast) jedes Elements als plattformnativer Stil basierend auf dem Thema des Betriebssystems sowie die Entfernung jeglicher plattformnativer Stile mit dem `none` Wert.

Sie könnten ein `<div>` wie eine Optionsschaltfläche aussehen lassen mit `div {appearance: radio;}` oder eine Option wie ein Kontrollkästchen mit `[type="radio"] {appearance
