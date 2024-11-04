---
title: "<input>: Das HTML Eingabeelement"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: 709d3a56661f895e5b0a67ff969e381d503ddd45
---

{{HTMLSidebar}}

Das **`<input>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um interaktive Bedienelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer anzunehmen; es gibt eine breite Vielfalt an Eingabedatenarten und Steuerelement-Widgets, abhängig vom Gerät und dem {{Glossary("user_agent", "User-Agent")}}. Das `<input>` Element ist eines der leistungsfähigsten und komplexesten in ganz HTML aufgrund der schieren Anzahl an Kombinationen von Eingabetypen und Attributen.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## `<input>` Typen

Wie ein `<input>` funktioniert, variiert erheblich abhängig vom Wert seines [`type`](#type) Attributs, daher werden die unterschiedlichen Arten auf ihren jeweiligen Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` angenommen.

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
      <td>Ein Kontrollkästchen, das einzelne Werte ausgewählt/abgewählt werden lässt.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerelement zum Festlegen einer Farbe; öffnet einen Farbwähler, wenn aktiv in unterstützenden Browsern.
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
        Ein Steuerelement zum Eingeben eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumsauswähler oder numerische Räder für Jahr, Monat, Tag, wenn aktiv in unterstützenden Browsern.
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
        Ein Steuerelement zum Eingeben von Datum und Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Räder für Datum- und Zeitkomponenten, wenn aktiv in unterstützenden Browsern.
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
        Ein Feld zum Bearbeiten einer E-Mail-Adresse. Sieht aus wie eine <code>text</code>-Eingabe, hat jedoch Validierungsparameter und eine relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerelement, das nicht angezeigt wird, jedoch dessen Wert an den Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist versteckt!
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
        Das <a href="#alt"><code>alt</code></a>-Attribut zeigt sich an, wenn das Bild <a href="#src"><code>src</code></a> fehlt.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>Ein Steuerelement zum Eingeben eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerelement zum Eingeben einer Zahl. Zeigt ein Spinnrädchen und fügt Standardvalidierungen hinzu. Zeigt eine numerische Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein einzeiliges Textfeld, dessen Wert verdeckt wird.
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
        Ein Optionsfeld, das das Auswählen eines einzelnen Wertes aus mehreren Optionen mit demselben <a href="#name"><code>name</code></a>-Wert erlaubt.
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
        Ein Steuerelement zum Eingeben einer Zahl, deren exakter Wert nicht wichtig ist.
        Zeigt sich als Bereichs-Widget, das standardmäßig auf den mittleren Wert eingestellt ist.
        Wird zusammen mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich akzeptabler Werte zu definieren.
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
        Ein Button, der die Inhalte des Formulars auf die Standardwerte zurücksetzt. Nicht empfohlen.
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
        Ein einzeiliges Textfeld zum Eingeben von Suchbegriffen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern ein Löschsymbol enthalten, das zum Leeren des Felds verwendet werden kann. Zeigt ein Suchsymbol statt der Eingabetaste auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Steuerelement zum Eingeben einer Telefonnummer. Zeigt eine Telefontastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
      <td>Ein Steuerelement zum Eingeben eines Zeitwertes ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zum Eingeben einer URL. Sieht aus wie eine <code>text</code>-Eingabe, hat jedoch Validierungsparameter und eine relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerelement zum Eingeben eines Datums, das aus einer Wochennummer und einer Wochenzahl ohne Zeitzone besteht.
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
        Ein Steuerelement zum Eingeben von Datum und Uhrzeit (Stunde, Minute, Sekunde und Bruchteile einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>` Element ist so leistungsfähig aufgrund seiner Attribute; das [`type`](#type) Attribut, das oben mit Beispielen beschrieben ist, ist das Wichtigste. Da jedes `<input>` Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle basiert, teilen sie technisch gesehen denselben Satz von Attributen. In Wirklichkeit haben jedoch die meisten Attribute nur auf einen spezifischen Teil von Eingabetypen eine Auswirkung. Außerdem hängt die Art und Weise, wie einige Attribute eine Eingabe beeinflussen, vom Eingabetyp ab und wirkt auf verschiedene Eingabetypen unterschiedlich.

Dieser Abschnitt enthält eine Tabelle mit allen Attributen mit einer kurzen Beschreibung. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut detaillierter beschreibt sowie mit welchen Eingabetypen sie verbunden sind. Diejenigen, die bei den meisten oder allen Eingabetypen üblich sind, werden weiter unten detaillierter beschrieben. Attribute, die einzigartig für bestimmte Eingabetypen sind—oder Attribute, die bei allen Eingabetypen allgemein sind, aber spezielles Verhalten aufweisen, wenn sie bei einem bestimmten Eingabetyp verwendet werden—werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>` Element umfassen die [globalen HTML Attribute](/de/docs/Web/HTML/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                 | Beschreibung                                                                                   |
| --------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                  | Hinweis für erwarteten Dateityp in Datei-Upload-Steuerelementen                                |
| [`alt`](#alt)                                 | `image`                                                                 | Alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email`, und `password`                               | Steuert die automatische Großschreibung im eingegebenen Text.                                  |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio`, und Buttons                             | Hinweis für Formular-Autofill-Funktion                                                         |
| [`capture`](#capture)                         | `file`                                                                  | Eingabemethode für Medienaufnahme in Datei-Upload-Steuerelementen                              |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                     | Ob der Befehl oder das Steuerelement ausgewählt ist                                            |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                       | Name des Formularfeldes zur Angabe der Richtung der Elementübergabe in der Formulareinreichung |
| [`disabled`](#disabled)                       | alle                                                                    | Ob das Formular-Steuerelement deaktiviert ist                                                  |
| [`form`](#form)                               | alle                                                                    | Verknüpft das Steuerelement mit einem Formularelement                                          |
| [`formaction`](#formaction)                   | `image`, `submit`                                                       | URL zur Verwendung für Formulareinreichung                                                     |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                       | Formular-Datensatz-Kodierungstyp zur Verwendung für Formulareinreichung                        |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                       | HTTP-Methode zur Verwendung für Formulareinreichung                                            |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                       | Umgeht die Formular-Steuerelement-Validierung für Formulareinreichung                          |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                       | Browsing-Kontext für Formulareinreichung                                                       |
| [`height`](#height)                           | `image`                                                                 | Entspricht dem Höhe-Attribut für {{htmlelement('img')}}; vertikale Dimension                   |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio`, und Buttons       | Wert des id Attributs der {{htmlelement('datalist')}} der Autofill-Optionen                    |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Maximaler Wert                                                                                 |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Maximale Länge (Anzahl an Zeichen) des `value`                                                 |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Minimaler Wert                                                                                 |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Minimale Länge (Anzahl an Zeichen) des `value`                                                 |
| [`multiple`](#multiple)                       | `email`, `file`                                                         | Boolean. Ob mehrere Werte erlaubt sind                                                         |
| [`name`](#name)                               | alle                                                                    | Name des Formular-Steuerelements. Wird mit dem Formular als Name/Wert-Paar eingereicht.        |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                     | Muster das `value` entsprechen muss um gültig zu sein                                          |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`           | Text, der im Formular-Steuerelement erscheint, wenn kein Wert gesetzt ist                      |
| [`popovertarget`](#popovertarget)             | `button`                                                                | Weist ein `<input type="button">` als Steuerelement für ein Popover-Element zu                 |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                               |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio`, und Buttons | Boolean. Der Wert ist nicht editierbar                                                         |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color`, und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss zum Einreichen des Formulars überprüft werden     |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                     | Größe des Steuerelements                                                                       |
| [`src`](#src)                                 | `image`                                                                 | Entspricht dem `src` Attribut für {{htmlelement('img')}}; Adresse der Bildressource            |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Inkrementelle gültige Werte                                                                    |
| [`type`](#type)                               | alle                                                                    | Typ des Formular-Steuerelements                                                                |
| [`value`](#value)                             | alle außer `image`                                                      | Der Wert des Steuerelements. Wenn im HTML angegeben, entspricht dies dem Anfangswert           |
| [`width`](#width)                             | `image`                                                                 | Entspricht dem `width` Attribut für {{htmlelement('img')}}                                     |

Einige zusätzliche nicht-standardmäßige Attribute sind nach den Beschreibungen der Standardattribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Gültig nur für den `file` Eingabetyp, definiert das `accept` Attribut, welche Dateitypen in einem `file` Upload-Steuerelement wählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`

  - : Gültig nur für den `image` Button, bietet das `alt` Attribut alternativen Text für das Bild und zeigt den Wert des Attributs an, wenn das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Weitere Informationen finden Sie auf der globalen Attributseite [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das `autocomplete`-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge, die beschreibt, welche, wenn überhaupt, Autovervollständigungs- Funktionalität das Eingabefeld bieten soll. Eine typische Implementierung von Autocomplete erinnert sich an vorherige Werte, die im selben Eingabefeld eingegeben wurden, aber es existieren auch komplexere Formen von Autocomplete. Beispielsweise könnte ein Browser in die Kontaktliste eines Geräts integriert werden, um `email`-Adressen in einem E-Mail-Eingabefeld automatisch auszufüllen. Siehe [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values) für erlaubte Werte.

    Das `autocomplete`-Attribut ist gültig bei `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben. Es ist gültig für alle Eingabetypen außer `checkbox`, `radio`, `file`, oder einem der Buttontypen.

    Weitere Informationen finden Sie im [`autocomplete` Attribut](/de/docs/Web/HTML/Attributes/autocomplete), einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` sich bei `hidden` leicht von anderen Eingabetypen unterscheidet.

- `autofocus`

  - : Ein Boolean-Attribut, das angibt, dass das Eingabefeld automatisch den Fokus erhalten soll, wenn die Seite das Laden abgeschlossen hat (oder wenn das {{HTMLElement("dialog")}} mit dem Element angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wird es auf mehr als einem Element gesetzt, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf `hidden` Eingaben verwendet werden, da versteckte Eingaben nicht den Fokus erhalten können.

    > [!WARNING]
    > Automatisches Fokussieren eines Formular-Steuerelements kann sehbehinderten Menschen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, "teleportieren" Bildschirmleser ihre Benutzer ohne Vorwarnung zum Formular-Steuerelement.

    Berücksichtigen Sie sorgfältig die Barrierefreiheit, wenn Sie das `autofocus`-Attribut anwenden. Automatische Fokussierung auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label des fokussierten Formular-Steuerelements ansagen wird, wird der Bildschirmleser nichts vor dem Label ansagen, und der sehende Benutzer auf einem kleinen Gerät wird ebenso den Kontext verpassen, der durch den vorhergehenden Inhalt erstellt wird.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und nur für den `file` Eingabetyp gültig, definiert das `capture` Attribut, welches Medium—Mikrofon, Video oder Kamera—verwendet werden sollte, um eine neue Datei für den Upload mit dem `file` Upload-Steuerelement in unterstützenden Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`

  - : Gültig für sowohl `radio` als auch `checkbox`-Typen, ist `checked` ein Boolean-Attribut. Wenn vorhanden in einem `radio`-Typ, gibt es an, dass das Optionsfeld das aktuell ausgewählte in der Gruppe gleichnamiger Optionsfelder ist. Wenn vorhanden in einem `checkbox`-Typ, gibt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: wenn der Zustand des Kontrollkästchens geändert wird, wird dieses Inhaltsattribut nicht aktualisiert. (Nur das IDL-Attribut `checked` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabekontrollen wird der Wert von Kontrollkästchen und Optionsfeldern nur in die übermittelten Daten aufgenommen, wenn sie derzeit `checked` sind. Wenn sie es sind, wird der Name und der Wert der ausgewählten Steuerelemente übermittelt.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen dessen `name` `fruit` ist und einen `value` von `cherry` hat, und das Kontrollkästchen aktiviert ist, werden die übermittelten Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, erscheint es überhaupt nicht in den Formulardaten. Der Standard `value` für Kontrollkästchen und Optionsfelder ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel`, und `email` Eingabetypen, aktiviert das `dirname` Attribut die Übermittlung der Ausrichtung des Elements. Bei Inkludierung übermittelt das Steuerelement zwei Name/Wert Paare: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname` Attributs als Name mit einem Wert von `ltr` oder `rtl`, wie vom Browser eingestellt.

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

    Wenn das obenstehende Formular eingereicht wird, verursacht die Eingabe die Übermittlung sowohl von `name` / `value` Paar `fruit=cherry` als auch dem `dirname` / Richtungs-Paar `fruit-dir=ltr`.
    Weitere Informationen finden Sie im [`dirname` Attribut](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren soll. Deaktivierte Eingaben werden typischerweise in einer gedimmten Farbe angezeigt oder zeigen in anderer Form an, dass das Feld nicht zur Verwendung verfügbar ist.

    Speziell: deaktivierte Eingaben empfangen nicht das [`click`](/de/docs/Web/API/Element/click_event) Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular eingereicht.

    > [!NOTE]
    > Obwohl nicht durch die Spezifikation erforderlich, wird Firefox standardmäßig [den dynamischen deaktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Ladezeiten der Seite hinweg bestehen lassen. Verwenden Sie das [`autocomplete`](#autocomplete) Attribut, um dieses Feature zu steuern.

- `form`

  - : Ein String, der das {{HTMLElement("form")}} Element angibt, mit dem die Eingabe verbunden ist (d.h. dessen **Formulareigentümer**). Der Wert dieses Strings, falls vorhanden, muss mit dem [`id`](#id) eines `<form>` Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht spezifiziert ist, ist das `<input>` Element mit dem nächstgelegenen enthaltenen Formular verbunden, falls vorhanden.

    Das `form` Attribut erlaubt es Ihnen, eine Eingabe überall im Dokument zu platzieren, sie aber trotzdem einem Formular an einer anderen Stelle im Dokument anzugehören lassen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verbunden sein.

- `formaction`
  - : Gültig nur für die Typen `image` und `submit`. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Gültig nur für die Typen `image` und `submit`. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Gültig nur für die Typen `image` und `submit`. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Gültig nur für die Typen `image` und `submit`. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Gültig nur für die Typen `image` und `submit`. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Gültig nur für den `image` Eingabetyp, ist `height` der Wert der Höhe der Bilddatei zur Darstellung des grafischen Submit-Button. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Ein globales Attribut, das für alle Elemente gültig ist, insbesondere alle Eingabetypen. Es definiert einen einzigartigen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des `for` Attributs des {{htmlelement('label')}} verwendet, um das Label mit dem Formular-Steuerelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Ein globaler Wert, gültig für alle Elemente, gibt einen Hinweis an Browser zur Art der virtuellen Tastaturkonfiguration, die verwendet werden sollte, wenn dieses Element oder dessen Inhalte bearbeitet werden. Werte sind `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal`, und `search`.
- `list`

  - : Der angegebene Wert des `list` Attributs sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements im selben Dokument sein. Die `<datalist>` stellt eine Liste vordefinierter Werte bereit, die der Benutzer für diese Eingabe vorgeschlagen bekommt. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in den Vorschlagsoptionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, und `color`.

    Gemäß den Spezifikationen wird das `list` Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file`, oder einem der Buttontypen unterstützt.

    Je nach Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen sehen, Markierungen entlang eines Bereichs oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber nicht gelistete Werte erlaubt sehen. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}} Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert es den größten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) größer ist als dieser Wert, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des `max` Attributs keine Zahl ist, hat das Element keinen maximalen Wert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (z.B. bei Daten oder Zeiten), darf der Wert von `max` kleiner sein als der Wert von `min`, was anzeigt, dass der Bereich sich umwickeln kann; beispielsweise erlaubt dies, einen Zeitrahmen von 22 Uhr bis 4 Uhr festzulegen.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert es die maximale Zeichenfolgenlänge (gemessen in UTF-16 Code Einheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn `maxlength` nicht angegeben ist oder ein ungültiger Wert angegeben wird, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes größer ist als `maxlength` UTF-16 Code Einheiten. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das `maxlength` Attribut erlaubt ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Weitere Informationen finden Sie unter [Clientseitige Validierung](#client-seitige_validierung).

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert es den negativsten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) kleiner ist als dieser Wert, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des `min` Attributs keine Zahl ist, hat das Element keinen minimalen Wert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max` Attributs sein. Wenn das `min` Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `min` Wert angewendet. Wenn das `min` Attribut gültig ist und ein nicht-leerer Wert unter dem Minimum liegt, das durch das `min` Attribut erlaubt ist, verhindert die Einschränkungsvalidierung die Formulareinreichung. Weitere Informationen finden Sie unter [Clientseitige Validierung](#client-seitige_validierung).

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), darf der Wert von `max` kleiner sein als der Wert von `min`, was anzeigt, dass der Bereich sich umwickeln kann; beispielsweise erlaubt dies, einen Zeitrahmen von 22 Uhr bis 4 Uhr festzulegen.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert es die minimale Zeichenfolgenlänge (gemessen in UTF-16 Code Einheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert kleiner oder gleich dem Wert sein, der durch `maxlength` spezifiziert ist. Wenn `minlength` nicht angegeben ist oder ein ungültiger Wert angegeben wird, hat die Eingabe keine minimale Länge.

    Die Eingabe schlägt [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Code Einheiten beträgt und die Formulareinreichung verhindern. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert von Benutzer geändert wird. Weitere Informationen finden Sie unter [Clientseitige Validierung](#client-seitige_validierung).

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolean-Attribut `multiple`, wenn gesetzt, bedeutet, dass der Benutzer durch Kommas getrennte E-Mail-Adressen im Email-Widget eingeben oder mehr als eine Datei mit der `file` Eingabe wählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`

  - : Ein String, der einen Namen für das Eingabesteuerelement angibt. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als ein erforderliches Attribut (auch wenn es nicht erforderlich ist). Wenn eine Eingabe keinen `name` Angabe hat, oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, nicht ausgewählte Optionsfelder, nicht aktivierte Kontrollkästchen und Rücksetzknöpfe werden ebenfalls nicht gesendet.)

    Es gibt zwei besondere Fälle:

    1. `_charset_` : Wenn dies als Name eines `<input>` Elements des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "User-Agent")}} auf die verwendete Zeichencodierung gesetzt, die für die Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name) Attribut erzeugt ein einzigartiges Verhalten für Optionsfelder.

    Nur ein einziges Optionsfeld in einer gleichnamigen Gruppe von Optionsfeldern kann gleichzeitig aktiviert sein. Durch das Auswählen eines Optionsfeldes in dieser Gruppe werden automatisch alle derzeit ausgewählten Optionsfelder in derselben Gruppe abgewählt. Der Wert dieses einen ausgewählten Optionsfeldes wird zusammen mit dem Namen übermittelt, wenn das Formular abgeschickt wird.

    Beim Tabben in eine Serie gleichnamiger Gruppe von Optionsfeldern wird, wenn eines aktiviert ist, dieses den Fokus erhalten. Wenn sie nicht zusammen in Quellreihenfolge gruppiert sind, beginnt das Tabben in die Gruppe, sobald das erste in der Gruppe angetroffen wird, und überspringt alle, die nicht aktiviert sind. Mit anderen Worten, wenn eines aktiviert ist, überspringt das Tabben die nicht aktivierten Optionsfelder in der Gruppe. Wenn keines aktiviert ist, erhält die Optionsfeldgruppe den Fokus, wenn das erste in der gleichnamigen Gruppe erreicht wird.

    Wenn eines der Optionsfelder in einer Gruppe den Fokus hat, navigiert man mit den Pfeiltasten durch alle Optionsfelder mit demselben Namen, auch wenn die Optionsfelder in der Quellreihenfolge nicht zusammen gruppiert sind.

    Wenn einem Eingabeelement ein `name` gegeben wird, wird dieser Name zu einer Eigenschaft des [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) des besitzenden Formularelements. Wenn Sie eine Eingabe haben, deren `name` auf `guest` gesetzt ist und eine andere deren `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wird, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest` Feld sein, und `hatSize` das Objekt für das `hat-size` Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, das einer eingebauten Eigenschaft des Formulars entspricht, da Sie damit die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf die entsprechende Eingabe überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, wird das `pattern` Attribut verwendet, um einen regulären Ausdruck zu kompilieren, dem der `value` der Eingabe entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden über reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Es sollten keine Schrägstriche um den Mustertext angegeben werden. Wenn der reguläre Ausdruck kompiliert wird:

    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, sodass der Abgleich mit dem _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'` Flag angegeben, sodass das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern` Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert. Wenn das `pattern` Attribut gültig ist und ein nicht-leerer Wert das Muster nicht erfüllt, verhindert die Einschränkungsvalidierung die Formulareinreichung. Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck für jeden durch Komma getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern` Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe hinzufügen. Sie können auch ein [`title`](#title) Attribut hinzufügen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist ein Enhancement.

    Weitere Informationen finden Sie unter [Clientseitige Validierung](#client-seitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password`, und `number`, bietet das `placeholder` Attribut einen kurzen Hinweis darauf, welche Art von Informationen in das Feld eingegeben werden sollen. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf den erwarteten Datentyp gibt, anstatt eine Erklärung oder Eingabeaufforderung. Der Text _darf nicht_ Zeilenumbrüche oder Zeilenvorschübe enthalten. Wenn beispielsweise ein Feld erwartet, den Vornamen eines Benutzers zu erfassen, und das Label "Vorname" ist, könnte ein geeigneter Platzhalter "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder` Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten zur Erklärung Ihres Formulars und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`

  - : Wandelt ein `<input type="button">` Element in einen Popover-Steuerknopf um; nimmt die ID des Popover-Elements, das es steuern soll, als Wert an. Siehe die [Popover API](/de/docs/Web/API/Popover_API) Startseite für weitere Informationen.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf ein durch ein Steuer-`<input type="button">` kontrolliertes Popover-Element ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button wird ein verborgenes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button wechselt ein Popover zwischen Anzeige und Verbergen. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerknopf durchgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten können soll. Das `readonly` Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `password` unterstützt.

    Weitere Informationen finden Sie unter [HTML Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das besitzende Formular übermittelt werden kann. Das `required` Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, und `file` unterstützt.

    Weitere Informationen finden Sie unter [Clientseitige Validierung](#client-seitige_validierung) und [HTML Attribut: `required`](/de/docs/Web/HTML/Attributes/required).

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url`, und `text`, gibt das `size` Attribut an, wie viel der Eingabe angezeigt wird. Im Wesentlichen erzeugt es dasselbe Ergebnis wie das Setzen der CSS [`width`](/de/docs/Web/CSS/width) Eigenschaft mit einigen Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em` Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px` Einheiten). CSS `width` hat Vorrang vor dem `size` Attribut.

- `src`

  - : Gültig nur für den `image` Eingabetyp, ist `src` ein String, der die URL der Bilddatei angibt, um die grafische Submit-Taste darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, spezifiziert das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut eine Zahl, die die Feinheit angibt, die der Wert einhalten muss.

    Wenn nicht explizit enthalten:

    - `step` Default ist 1 für `number` und `range`.
    - Jeder Datum/Zeit Eingabetyp hat einen Standardwert für `step`, der für den Typ geeignet ist; siehe die individuellen Eingabenseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step), und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl sein—ganz oder Gleitpunkt—oder der spezielle Wert `any`, was bedeutet, dass kein Schritt angenommen wird, und jeder Wert erlaubt ist (ungeachtet anderer Beschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, Datum/Zeit Eingabetypen, und `range` Eingabetypen gleich der Basis für Schrittwerte— dem [`min`](#min) Wert und Inkrementen des step Wertes, bis zum [`max`](#max) Wert, falls angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade ganze Zahl, `10` oder größer, gültig. Wird es weggelassen, `<input type="number">`, ist jede ganze Zahl gültig, aber Gleitkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig `1` ist. Damit `4.2` gültig ist, müsste `step` auf `any`, `0.1`, `0.2`, oder irgendein Wert gesetzt werden, und der `min` Wert müsste eine Zahl sein, die auf `.2` endet, wie `<input type="number" min="-5.2">`

    > [!NOTE]
    > Wenn Daten, die vom Benutzer eingegeben werden, nicht der Schrittkonfiguration entsprechen, wird der Wert als ungültig in der Einschränkungsvalidierung angesehen und wird die `:invalid` Pseudoklasse treffen.

    Weitere Informationen finden Sie unter [Clientseitige Validierung](#client-seitige_validierung).

- `tabindex`

  - : Ein globales Attribut, gültig für alle Elemente, speziell für alle Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element den Eingabe Fokus erhalten kann (fokussierbar ist), wenn es am sequentiellen Tastaturnavigation teilnehmen sollte. Da alle Eingabetypen außer der Eingabe von Typ versteckt fokussierbar sind, sollte dieses Attribut nicht auf Formulareingaben verwendet werden, da die Verwaltung der Fokusreihenfolge für alle Elemente innerhalb des Dokuments erforderlich wäre mit dem Risiko, die Benutzerfreundlichkeit und Barrierefreiheit zu schädigen, wenn es falsch gemacht wird.

- `title`

  - : Ein globales Attribut, gültig für alle Elemente, speziell für alle Eingabetypen, das einen Text enthält, der beratende Informationen zum Element, zu dem es gehört, darstellt. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip angezeigt werden. Der Titel sollte NICHT als die primäre Erklärung des Zwecks des Formular-Steuerelements verwendet werden. Stattdessen verwenden Sie das {{htmlelement('label')}} Element mit einem `for` Attribut, das auf die `id` Attribut des Formular-Steuerelements gesetzt ist. Siehe [Labels](#labels) unten.

- `type`

  - : Ein String, der den Typ des Steuerelements angibt, das gerendert werden soll. Um beispielsweise ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben), wird der Eingabetyp `text` verwendet, wodurch ein normales Text-Eingabefeld erstellt wird.

    Zulässige Werte sind in [Eingabetypen](#input_types) oben aufgeführt.

- `value`

  - : Der Wert des Eingabesteuerelements. Wenn im HTML angegeben, ist dies der Anfangswert, und von dann an kann dieser Wert jederzeit geändert oder abgerufen werden unter Verwendung von JavaScript, um auf die `value`-Eigenschaft des entsprechenden [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekts zuzugreifen. Das `value` Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio`, und `hidden` betrachtet werden.

- `width`

  - : Gültig nur für den `image` Eingabetyp, ist `width` die Breite der Bilddatei zur Darstellung des grafischen Submit-Button. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardmäßige Attribute

Die folgenden nicht-standardmäßigen Attribute sind auch in einigen Browsern verfügbar. Generell sollten Sie vermeiden, sie zu verwenden, es sei denn, es ist unvermeidlich.

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
        Ob oder nicht wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse gesendet werden sollen, um Aktualisierungen von Live-Suchergebnissen zu ermöglichen, während der Benutzer immer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste drückt, während er das Feld bearbeitet; dies wird verwendet, um ein geeignetes Label für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
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
        Die maximale Anzahl von Elementen, die in der Dropdown-Liste vorheriger Suchanfragen angezeigt werden soll. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob dem Benutzer nur erlaubt werden soll, ein Verzeichnis (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) auszuwählen.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome, etc.), die, wenn vorhanden, dem {{Glossary("user_agent", "User Agent")}} mitteilt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das das Suchfeld repräsentiert. Dies erlaubt Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht spezifiziert ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (z.B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste während des Bearbeitens des Feldes).

    Das `search` Ereignis ist auf eine Rate begrenzt, sodass es nicht häufiger gesendet wird als ein implementierungsdefiniertes Intervall.

- `orient` {{non-standard_inline}}

  - : Ähnlich der nicht-standardmäßigen CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente beeinflusst, definiert das `orient` Attribut die Orientierung des Bereichsschiebers. Mögliche Werte sind `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zum Erstellen von vertikalen Formularelementen.

- `results` {{non-standard_inline}}

  - : Das `results` Attribut—nur von Safari unterstützt—ist ein numerischer Wert, mit dem Sie die maximale Anzahl von Einträgen überschreiben können, die im nativen Dropdown-Menü des `<input>` Elements früherer Suchanfragen angezeigt werden.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben wird, wird die maximale Standardanzahl der Einträge des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass im Dateiauswahl-Fenster nur Verzeichnisse zur Auswahl durch den Benutzer verfügbar sein sollen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie ab Firefox 50 und später verwendbar. Auch wenn es relativ breit unterstützt wird, ist es noch immer nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden durch die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle bereitgestellt, die `<input>` Elemente im DOM repräsentiert. Auch die von den Elternschnittstellen, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget), spezifizierten Methoden sind verfügbar.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements Gültigkeitsprüfungen besteht; ansonsten `false` und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements Gültigkeitsprüfungen besteht; andernfalls `false`, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis am Element aus und (falls das Ereignis nicht abgebrochen wird) meldet das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>` Elements aus, wenn der Inhalt auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder Kalender-Datumseingabe) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des spezifizierten Zeichenbereichs im Eingabelement auf eine bestimmte Zeichenkette. Ein `selectMode` Parameter ist verfügbar, um zu steuern, wie der bestehende Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den spezifizierten Zeichenbereich innerhalb eines Text-Eingabeelements aus. Für Eingaben die nicht als Texteingabefelder dargestellt werden, tut diese Methode nichts.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Picker für das Eingabelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, jedoch durch einen Button-Druck oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins, standardmäßig, oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Eingabeelemente, die als ersetzte Elemente gelten, besitzen einige Merkmale, die nicht auf Nicht-Formularelemente zutreffen. Es gibt CSS-Selektoren, die speziell Formularsteuerelemente basierend auf ihren UI-Funktionen ansprechen können, auch bekannt als UI-Pseudoklassen. Das Eingabeelement kann auch nach Typ mit Attributselektoren angesprochen werden. Es gibt einige Eigenschaften, die ebenfalls besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Überschriften, die für das
    <code>&#x3C;input></code>
    Element besonders relevant sind:
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
        Jedes aktuell aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, hineingetippt usw.) oder den Fokus akzeptieren kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert werden kann oder den Fokus akzeptiert.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes aktuell deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es ansonsten aktiviert werden könnte (ausgewählt, angeklickt, hineingetippt usw.) oder den Fokus akzeptieren würde, wäre es nicht deaktiviert.
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
        Element, das derzeit <a href="#placeholder"><code>placeholder</code> Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elementen mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die in einer Gruppe verwandter Elemente die Voreinstellung sind. Passt zu den {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die beim Laden oder Rendern der Seite ausgewählt waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu den {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die derzeit ausgewählt sind (und die ({{HTMLElement("option")}} in einem {{HTMLElement("select")}}-Element, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren Unbestimmtheits-Eigenschaft durch JavaScript auf true gesetzt wurde, {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Radio-Buttons mit demselben Namen im Formular nicht ausgewählt sind, und {{HTMLElement("progress")}}-Elemente im unbestimmten Zustand
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, bei denen eine Beschränkungsvalidierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, bei denen eine Beschränkungsvalidierung angewendet wird und die derzeit nicht gültig sind. Passt zu einem Formularelement, dessen Wert nicht den durch seine Attribute festgelegten Beschränkungen entspricht, wie <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert sich innerhalb der durch die <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribute und das <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen befindet.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert sich NICHT innerhalb der durch die <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribute festgelegten Bereichsgrenzen befindet oder nicht der <a href="#step"><code>step</code></a>-Beschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut enthält. Passt nur zu Elementen, die erforderlich sein können. Das Attribut auf einem nicht erforderlichen Element führt zu keiner Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das NICHT das <a href="#required"><code>required</code></a>-Attribut enthält. Passt nicht zu Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlassen der Eingabe aktiviert. Passt zu ungültigen Eingaben, aber nur nach Benutzerinteraktion, wie durch Fokussieren auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular mit dem ungültigen Steuerelement zu senden.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen-Beispiel

Wir können ein Checkbox-Label basierend darauf gestalten, ob die Checkbox aktiviert ist oder nicht. In diesem Beispiel formatieren wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des Labels, das direkt nach einer aktivierten Checkbox kommt. Wir haben keine Stile angewendet, wenn die `input` nicht aktiviert ist.

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

Es ist möglich, unterschiedliche Typen von Formularsteuerelementen basierend auf ihrem [`type`](#type) mit Hilfe von [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) zu adressieren. CSS-Attributselektoren wählen Elemente basierend entweder nur auf der Anwesenheit eines Attributs oder dem Wert eines bestimmten Attributs aus.

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

Standardmäßig ist das Erscheinungsbild von Platzhaltertext durchsichtig oder hellgrau. Das {{cssxref('::placeholder')}} Pseudoelement repräsentiert den [`placeholder` Text](#placeholder) des Eingabeelements. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Satz von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement anwendbar sind, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### appearance

Die {{cssxref("appearance")}}-Eigenschaft ermöglicht das Anzeigen von (fast) jedem Element im plattform-eigenen Stil, basierend auf dem Thema des Betriebssystems, sowie die Entfernung jeder plattform-eigenen Stilierung mit dem Wert `none`.

Sie könnten ein `<div>` so aussehen lassen wie einen Radio-Button mit `div {appearance: radio;}` oder einen Radio-Button wie eine Checkbox mit `[type="radio"] {appearance: checkbox;}`, aber bitte nicht.

Das Setzen von `appearance: none` entfernt plattform-eigene Rahmen, aber nicht die Funktionalität.

### caret-color

Eine Eigenschaft, die spezifisch für texteintragsbezogene Elemente ist, ist die CSS-Eigenschaft {{cssxref("caret-color")}}, mit der Sie die Farbe des Textpositionierungs-Cursors festlegen können:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h., sie erhalten standardmäßig eine bevorzugte Standardgröße). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, wodurch Formularelemente sich in der Größe anpassen können, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die sich an ihren Inhalt anpassen und mit mehr Text mitwachsen. Diese funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url)), Eingabetypen [`file`](/de/docs/Web/HTML/Element/input/file) und {{htmlelement("textarea")}}-Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textlichen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element). In solchen Fällen können die Position und die Größe des Elements innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Gestaltung

Für weitere Informationen zum Hinzufügen von Farben zu Elementen in HTML siehe:

- [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Gestaltung von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling) und
- die [Kompatibilitätstabelle der CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls).

## Zusätzliche Funktionen

### Labels

Labels sind notwendig, um Hilfetext mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element bietet erklärende Informationen über ein Formularfeld, die _immer_ angemessen sind (abgesehen von den Layout-Angelegenheiten, die Sie haben könnten). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden sollte.

#### Zugehörige Labels

Das semantische Pairing von `<input>`- und `<label>`-Elementen ist nützlich für assistive Technologien wie Screenreader. Durch das Kombinieren mit dem [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut von `<label>` binden Sie das Label an die Eingabe auf eine Weise, die es Screenreader ermöglicht, Eingaben den Benutzern präziser zu beschreiben.

Es reicht nicht aus, normalen Text neben dem `<input>`-Element zu haben. Vielmehr erfordert die Benutzerfreundlichkeit und Barrierefreiheit die Einbeziehung entweder impliziter oder expliziter {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht zugänglich: Es existiert keine Beziehung zwischen der Aufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label ein größeres 'Treff'-Bereich für Maus- und Touchscreen-Nutzer, um es anzuklicken oder zu berühren. Durch das Kombinieren eines `<label>` mit einem `<input>`, wird durch Klicken auf eines von beiden das `<input>` fokussiert. Wenn Sie normalen Text verwenden, um Ihre Eingabe zu kennzeichnen, geschieht dies nicht. Teil des Aktivierungsbereichs für die Eingabe zu sein, ist hilfreich für Menschen mit motorischen Beeinträchtigungen.

Als Webentwickler ist es wichtig, niemals anzunehmen, dass alle Menschen all das Wissen, das wir haben, besitzen. Die Vielfalt der Menschen, die das Web nutzen – und damit auch Ihre Website – garantiert nahezu, dass einige Besucher Ihrer Seite aufgrund unterschiedlicher Denkvorgänge und/oder Umstände Ihre Formulare sehr unterschiedlich interpretieren werden, es sei denn, Sie haben klare und richtig präsentierte Labels.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut lässt Sie Text angeben, der innerhalb des Inhaltsbereichs des `<input>`-Elements angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil er es nicht ist. Der Platzhalter dient als Hinweis darauf, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Nicht nur ist der Platzhalter für Screenreader nicht zugänglich, sondern auch, sobald der Benutzer einen Text in das Steuerelement eingibt oder wenn das Steuerelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitenübersetzungsfunktionen können über Attribute hinweggehen, wenn sie übersetzen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Vermeiden Sie, wenn möglich, das [`placeholder`](#placeholder)-Attribut. Wenn Sie ein `<input>`-Element markieren müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Die Client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten ein bestimmtes Format haben müssen, überprüfen Sie es _immer_ auch serverseitig und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Zustand jeder Eingabe zu formatieren, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser eine clientseitige Validierung beim (versuchten) Formularversuch an. Beim Formularversuch, wenn es ein Formularelement gibt, das die Einschränkungsvalidierung nicht besteht, zeigen unterstützende Browser eine Fehlermeldung beim ersten ungültigen Formularelement an; entweder eine Standardmeldung basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Nachricht.

Einige Eingabetypen und andere Attribute setzen Grenzen für die gültigen Werte, die für eine bestimmte Eingabe akzeptiert werden. Beispielsweise bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler könnten auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Zahl (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich an möglichen Werten periodisch ist (das heißt, beim höchsten möglichen Wert wickeln sich die Werte wieder um den Anfang, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max)- und [`min`](#min)-Eigenschaften umgekehrt sind, was anzeigt, dass der Bereich der zulässigen Werte bei `min` beginnt, um den niedrigsten möglichen Wert wickelt und dann weitergeht, bis `max` erreicht wird. Dies ist besonders nützlich für Daten und Zeiten, z. B. wenn Sie den Bereich von 20 Uhr bis 8 Uhr morgens erlauben wollen:

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
        Tritt auf, wenn der Wert größer ist als der maximale Wert, wie im <code>max</code>-Attribut definiert.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die im <code>maxlength</code>-Attribut erlaubte Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der minimale Wert, wie im <code>min</code>-Attribut definiert.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die im <code>minlength</code>-Attribut erforderliche Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Musterattribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht damit übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> oder ein Radio oder eine Checkbox nicht ausgewählt ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert stimmt nicht mit dem Schrittinkrement überein. Das Standardinkrement ist <code>1</code>, daher sind nur Ganzzahlen auf <code>type="number"</code> gültig, wenn kein Schritt enthalten ist. <code>step="any"</code> wird diesen Fehler nie auslösen.
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

Wenn ein Formularelement nicht das `required`-Attribut hat, ist kein Wert oder ein leerer String nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, wird ein leerer String nicht zu einem Fehler führen.

Wir können festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer bei einem Fehler beim Absenden des Formulars benachrichtigen.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält die `validityState` Schnittstelle die booleschen, schreibgeschützten Eigenschaften `badInput`, `valid` und `customError`. Das Gültigkeitsobjekt enthält:

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

Für jede dieser Booleschen Eigenschaften gibt ein Wert von `true` an, dass der angegebene Grund, dass die Validierung fehlgeschlagen sein könnte, wahr ist, mit Ausnahme der Eigenschaft `valid`, die `true` ist, wenn der Wert des Elements alle Beschränkungen einhält.

Wenn ein Fehler vorliegt, werden unterstützende Browser den Benutzer sowohl benachrichtigen als auch verhindern, dass das Formular gesendet wird. Ein Wort der Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen wahrheitsgemäßen Wert (etwas anderes als der leere String oder `null`) gesetzt ist, wird das Formular daran gehindert, gesendet zu werden. Wenn es keine benutzerdefinierte Fehlermeldung gibt und keine der anderen Eigenschaften `true` zurückgeben, wird `valid` `true` sein, und das Formular kann gesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Gültigkeitsmeldung auf den leeren String setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt ist, wird das Formular nicht gesendet, selbst wenn alle Werte gültig sind, bis die Meldung `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn/Forms/Form_validation#validating_forms_using_javascript) verwenden, die für `<input>` (und verwandte) Elemente verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen führen dazu, dass dies eine Standardfehlermeldung produziert, wenn Sie versuchen, das Formular mit unvollständig oder einem Wert, der nicht dem `pattern` entspricht, zu senden.

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

Das Beispiel wird so gerendert:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert durch Ausführen der `checkValidity()`-Methode über den `input`-Ereignishandler ändert.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst, und die `invalid`-Ereignisbehandlungsfunktion wird ausgeführt. Innerhalb dieser Funktion ermitteln wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, indem wir einen `if ()` Block verwenden und eine benutzerdefinierte Gültigkeitsfehlermeldung setzen.
- Infolgedessen wird, wenn der Eingabewert ungültig ist, wenn die Schaltfläche „Senden“ gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn es gültig ist, wird es wie erwartet gesendet. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit durch Aufrufen von `setCustomValidity()` mit einem leeren String-Wert abgebrochen werden. Wir tun dies daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Gültigkeit vorher festgelegt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie derzeit bei der Übermittlung einen gültigen Wert enthält.

> [!NOTE]
> Validieren Sie immer sowohl Client-seitig als auch Server-seitig Eingabebeschränkungen. Beschränkungsvalidierung entfernt nicht die Notwendigkeit zur Validierung auf der _Server-Seite_. Ungültige Werte können immer noch von älteren Browsern oder von böswilligen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte ein proprietäres Fehlerattribut — `x-moz-errormessage` — für viele Versionen, das Ihnen erlaubte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise zu setzen. Dies wurde ab Version 66 entfernt (siehe [Firefox Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen sind vom Standort abhängig. In einigen Standorten ist 1.000,00 eine gültige Zahl, während in anderen Standorten die gültige Eingabe 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um den Standort zu bestimmen, um die Benutzereingabe zu validieren (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut auf dem Element oder einem seiner Elternteile spezifiziert ist.
- Versuchen Sie die Sprache, die durch einen `Content-Language` HTTP-Header spezifiziert ist. Oder,
- Wenn keine spezifiziert ist, verwenden Sie die Sprache des Browsers.

## Barrierefreiheit

### Labels

Beim Einfügen von Eingaben ist es eine Barrierefreiheitsanforderung, Labels hinzuzufügen. Dies ist notwendig, damit diejenigen, die assistive Technologien verwenden, erkennen können, wofür die Eingabe vorgesehen ist. Außerdem führt das Klicken oder Berühren eines Labels dazu, dass das zugehörige Formularsteuerelement in den Fokus gerät. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erhöht den Bereich, auf den Benutzer klicken oder tippen können, um das Formularsteuerelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Optionsfelder und Kontrollkästchen, die winzig sind. Für weitere Informationen über Labels im Allgemeinen siehe [Labels](#labels).

Das folgende ist ein Beispiel dafür, wie das `<label>`-Element stilgerecht einem `<input>`-Element zugeordnet werden kann. Sie müssen dem `<input>`-Element ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert mit dem `id` des Eingaben übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bieten, um sie leicht aktivieren zu können. Dies hilft einer Vielzahl von Menschen, einschließlich Personen mit motorischen Kontrollproblemen und Menschen, die nicht präzise Eingabemethoden wie einen Stylus oder Finger verwenden. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

- [Verstehen von Erfolgskriterium 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Tastelemente - Das A11Y Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>, aufgelistet, einreichbar, zurücksetzbar, formularelement-verbunden,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>. Wenn das <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann beschriftbares Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=checkbox</code>:
            <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role">checkbox</a></code>
          </li>
          <li>
            <code>type=email</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=image</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=number</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li><code>type=radio</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a></li>
          <li><code>type=range</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/slider_role"><code>slider</code></a></li>
          <li>
            <code>type=reset</code>:
            <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=search</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role"><code>searchbox</code></a>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=submit</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=tel</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a ></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=color|date|datetime-local|file|hidden|month|password|time|week</code>:
            <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>
          </li>
          <li>
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a> wenn verwendet
            mit <code>aria-pressed</code>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=image</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=radio</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>
          </li>
          <li>
            <code>type=text</code> ohne <code>list</code>-Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            oder <code>text</code> mit <code>list</code>-Attribut: keine
            <code>role</code> zugelassen
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

- [Formular Beschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form)
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn/Forms/Basic_native_form_controls)
- [Datenübermittlung von Formularen](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Anleitung zum Erstellen benutzerdefinierter Formular-Widgets](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in Legacy-Browsern](/de/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Gestaltung von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- [CSS-Eigenschaften-Kompatibilitätstabelle](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
- [Erstellen von vertikalen Formularsteuerelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
