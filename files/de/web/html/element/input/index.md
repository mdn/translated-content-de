---
title: "<input>: Das HTML-Eingabeelement"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: 41f2977624562dde84c0ef5956a80ee2575c80f0
---

{{HTMLSidebar}}

Das **`<input>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; eine Vielzahl von Typen von Eingabedaten und Steuerungswidgets steht je nach Gerät und {{Glossary("user_agent", "User-Agent")}} zur Verfügung. Das `<input>`-Element ist eines der leistungsstärksten und komplexesten in ganz HTML aufgrund der schieren Anzahl von Kombinationen von Eingabetypen und Attributen.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## `<input>`-Typen

Wie ein `<input>` funktioniert, variiert erheblich in Abhängigkeit vom Wert seines [`type`](#type)-Attributs, daher werden die verschiedenen Typen auf ihren eigenen separaten Referenzseiten behandelt. Ist dieses Attribut nicht angegeben, so wird als Standardtyp `text` angenommen.

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
      <td>Ein Kontrollkästchen, das es ermöglicht, einzelne Werte auszuwählen/abzuwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerungselement zur Spezifizierung einer Farbe; öffnet einen Farbwähler, wenn es in unterstützenden Browsern aktiv ist.
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
        Ein Steuerungselement zur Eingabe eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumsauswähler oder numerische Räder für Jahr, Monat, Tag, wenn es in unterstützenden Browsern aktiv ist.
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
        Ein Steuerungselement zur Eingabe von Datum und Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Räder für Datums- und Zeitkomponenten, wenn es in unterstützenden Browsern aktiv ist.
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
        <code>text</code>-Eingabe, verfügt aber über Validierungsparameter und relevante
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
        Ein Steuerungselement, das dem Benutzer ermöglicht, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Arten von Dateien zu definieren, die das Steuerungselement auswählen kann.
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
        Ein grafischer <code>submit</code>-Button. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert wird.
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
        Ein Steuerungselement zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt eine Standardvalidierung hinzu.
        Zeigt ein numerisches Tastenfeld in einigen Geräten
        mit dynamischen Tastenfeldern an.
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
        Ein Optionsfeld, das es ermöglicht, einen einzigen Wert aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Ein Steuerungselement zur Eingabe einer Zahl, deren genauer Wert nicht wichtig ist.
        Wird als Bereichs-Widget angezeigt, das standardmäßig auf den Mittelwert eingestellt ist.
        Wird zusammen mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich der akzeptablen Werte zu definieren.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbruch wird
        automatisch aus dem Eingabewert entfernt. Kann ein Löschsymbol in
        unterstützenden Browsern enthalten, das zum Löschen des Feldes verwendet werden kann. Zeigt ein
        Suchsymbol anstelle der Eingabetaste auf einigen Geräten mit dynamischen Tastenfeldern an.
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
        Ein Steuerungselement zur Eingabe einer Telefonnummer. Zeigt ein Telefon-Tastenfeld
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code>-Eingabe,
        verfügt jedoch über Validierungsparameter und relevante Tastatur in unterstützenden Browsern
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
        Ein Steuerungselement zur Eingabe eines Datums bestehend aus einer Kalenderwochen-Jahreszahl und einer Wochennummer ohne Zeitzone.
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
        Ein Steuerungselement zur Eingabe von Datum und Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so leistungsstark aufgrund seiner Attribute; das [`type`](#type)-Attribut, das mit Beispielen beschrieben ist, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch gesehen dasselbe Set an Attributen. In der Realität haben jedoch die meisten Attribute nur Auswirkungen auf eine spezifische Untermenge von Eingabetypen. Darüber hinaus beeinflusst die Art und Weise, in der einige Attribute eine Eingabe beeinflussen, die verschiedenen Eingabetypen auf unterschiedliche Weise.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird von einer Liste gefolgt, die jedes Attribut ausführlicher beschreibt, zusammen mit den Eingabetypen, mit denen sie in Verbindung stehen. Diejenigen, die bei den meisten oder allen Eingabetypen gemeinsam sind, werden weiter unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind - oder Attribute, die für alle Eingabetypen gemeinsam sind, aber ein besonderes Verhalten aufweisen, wenn sie auf einem bestimmten Eingabetyp verwendet werden -, werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes) und außerdem:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                                            |
| --------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis für erwarteten Dateityp in Datei-Upload-Steuerelementen                                         |
| [`alt`](#alt)                                 | `image`                                                                | `alt`-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                       |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                               | Steuert automatische Großschreibung im eingegebenen Text.                                               |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Buttons                             | Hinweis für die Auto-Ausfüllfunktion des Formulars                                                      |
| [`capture`](#capture)                         | `file`                                                                 | Eingabemethode für Medienaufnahme in Datei-Upload-Steuerelementen                                       |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Ob der Befehl oder das Steuerelement aktiviert ist                                                      |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfeldes zur Übermittlung der Richtung des Elements im Formular                          |
| [`disabled`](#disabled)                       | alle                                                                   | Ob das Formularsteuerelement deaktiviert ist                                                            |
| [`form`](#form)                               | alle                                                                   | Verknüpft das Steuerelement mit einem Formularelement                                                   |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL zur Verwendung für das Absenden des Formulars                                                       |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Kodierungstyp des Datensatzes zur Verwendung für das Absenden des Formulars                             |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | HTTP-Methode zur Verwendung für das Absenden des Formulars                                              |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Umgehen der Formularsteuerungsvalidierung für das Absenden des Formulars                                |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browsing-Kontext für das Absenden des Formulars                                                         |
| [`height`](#height)                           | `image`                                                                | Entspricht dem `height`-Attribut von {{htmlelement('img')}}; vertikale Dimension                        |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Buttons       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsoptionen                |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Maximaler Wert                                                                                          |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Länge (Anzahl der Zeichen) des `value`                                                         |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Minimaler Wert                                                                                          |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Länge (Anzahl der Zeichen) des `value`                                                         |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolean. Ob mehrere Werte erlaubt sind                                                                  |
| [`name`](#name)                               | alle                                                                   | Name der Formularsteuerung. Wird als Teil eines Name/Wert-Paares mit dem Formular eingereicht           |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, das `value` entsprechen muss, um gültig zu sein                                                 |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der im Formularsteuerelement erscheint, wenn kein Wert gesetzt ist                                |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Bezeichnet ein `<input type="button">` als Steuerung für ein Popover-Element                            |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt die Aktion an, die von einer Popover-Steuerung ausgeführt werden soll                              |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolean. Der Wert ist nicht bearbeitbar                                                                 |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss aktiviert sein, damit das Formular abgeschickt werden kann |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe des Steuerelements                                                                                |
| [`src`](#src)                                 | `image`                                                                | Entspricht dem `src`-Attribut von {{htmlelement('img')}}; Adresse der Bildressource                     |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Inkrementelle Werte, die gültig sind                                                                    |
| [`type`](#type)                               | alle                                                                   | Typ der Formularsteuerung                                                                               |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert der Steuerung. Bei Angabe im HTML entspricht dies dem Anfangswert                              |
| [`width`](#width)                             | `image`                                                                | Entspricht dem `width`-Attribut von {{htmlelement('img')}}                                              |

Einige zusätzliche nicht standardmäßige Attribute sind nach den Beschreibungen der Standardattribute aufgeführt.

### Individuelle Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Gültig nur für den `file`-Eingabetyp, das `accept`-Attribut definiert, welche Dateitypen in einer `file`-Uplodsteuerung auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alt`

  - : Gültig nur für den `image`-Button, das `alt`-Attribut bietet alternativen Text für das Bild und zeigt den Wert des Attributs an, wenn das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Weitere Informationen finden Sie auf der Seite über das [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)-globale Attribut.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge, die beschreibt, welche, falls überhaupt, Art von Autovervollständigungsfunktion die Eingabe bereitstellen soll. Eine typische Implementierung von Autovervollständigung ruft vorher eingegebene Werte in dasselbe Eingabefeld ab, aber es können komplexere Formen der Autovervollständigung existieren. Beispielsweise könnte ein Browser auf die Kontaktliste eines Geräts zugreifen, um E-Mail-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig bei `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, gültig für alle Eingabetypen mit Ausnahme von `checkbox`, `radio`, `file` oder einen der Button-Typen.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für weitere Informationen einschließlich Informationen zur Passwortsicherheit und wie sich `autocomplete` geringfügig für `hidden` von anderen Eingabetypen unterscheidet.

- `autofocus`

  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass die Eingabe automatisch den Fokus erhalten sollte, wenn die Seite vollständig geladen ist (oder wenn das {{HTMLElement("dialog")}}, das das Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, noch bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Im Dokument darf höchstens ein Element das `autofocus`-Attribut besitzen. Wenn es auf mehr als einem Element gesetzt wird, erhält das erste Element mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht bei Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Ein Formularsteuerelement automatisch zu fokussieren, kann für sehbehinderte Personen, die Bildschirmlesetechnologie verwenden, und Personen mit kognitiven Beeinträchtigungen verwirrend sein. Wenn `autofocus` zugewiesen wird, "teleportieren" Bildschirmleser ihre Benutzer ohne Vorwarnung zum Formularsteuerelement.

    Verwenden Sie diese Funktion mit Bedacht auf Barrierefreiheit, wenn Sie das `autofocus`-Attribut anwenden. Ein automatisches Fokussieren auf eine Steuerung kann bewirken, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Etikett des Formularsteuerelements ankündigen wird, das den Fokus erhält, wird der Bildschirmleser nichts vor dem Etikett ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext verpassen, der durch den vorherigen Inhalt erstellt wird.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den `file`-Eingabetyp, definiert das `capture`-Attribut, welches Medium—Mikrofon, Video oder Kamera—zum Erfassen einer neuen Datei für das Hochladen mit einer `file`-Upload-Steuerung in unterstützenden Szenarien verwendet werden soll. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`

  - : Gültig sowohl für `radio` als auch `checkbox` Typen, `checked` ist ein Boolean-Attribut. Wenn es im Typ `radio` vorhanden ist, gibt es an, dass das Optionsfeld das aktuell ausgewählte in der Gruppe der gleichnamigen Optionsfelder ist. Wenn es im Typ `checkbox` vorhanden ist, gibt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen aktuell aktiviert ist: wenn der Status des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur dem [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird der Wert eines Kontrollkästchens und eines Optionsfeldes nur dann in den übermittelten Daten enthalten, wenn sie derzeit `checked` sind. Wenn sie es sind, werden der Name und die Werte der aktivierten Steuerungen gesendet.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name` `fruit` ist, den `value` `cherry` hat und das Kontrollkästchen aktiviert ist, werden im übermittelten Formular `fruit=cherry` enthalten sein. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgelistet. Der Standardwert für Kontrollkästchen und Optionsfelder ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen, ermöglicht das `dirname`-Attribut das Übermitteln der Richtung des Elements. Wenn enthalten, wird die Formularsteuerung mit zwei Name/Wert-Paaren übermittelt: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das obige Formular übermittelt wird, wird die Eingabe sowohl das `name` / `value`-Paar `fruit=cherry` als auch das `dirname`/Richtung-Paar `fruit-dir=ltr` senden.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren können sollte. Deaktivierte Eingaben werden typischerweise mit einer gedimmten Farbe oder durch eine andere Form der Anzeige dargestellt, dass das Feld nicht verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation gefordert, wird Firefox standardmäßig den [dynamischen deaktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladezyklen hinweg beibehalten. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- `form`

  - : Ein String, der das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (das heißt, ihr **Formularbesitzer**). Der Wert dieses Strings, falls vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, ist das `<input>`-Element mit dem nächstgelegenen enthaltenen Formular verknüpft, falls vorhanden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe an einer beliebigen Stelle im Dokument zu platzieren, jedoch mit einem Formular woanders im Dokument zu verknüpfen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft sein.

- `formaction`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formenctype`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formmethod`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formnovalidate`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formtarget`
  - : Gültig nur für die `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `height`
  - : Gültig nur für den `image` Eingabeknopf, `height` ist die Höhe der Bilddatei, die zur Repräsentation des grafischen Absende-Buttons angezeigt werden soll. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, es definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss. Sein Zweck besteht darin, das Element beim Verlinken zu identifizieren. Der Wert wird als der Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um das Etikett mit dem Formularsteuerelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert gültig für alle Elemente, er bietet einen Hinweis an die Browser auf die Art der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder dessen Inhalts verwendet werden soll. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der Wert, der dem `list`-Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements sein. Das `<datalist>` bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Nach den Spezifikationen wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder einem der Button-Typen unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Markierungen entlang eines Bereichs, oder sogar eine Eingabe, die wie ein {{HTMLElement("select")}} öffnet, aber nicht gelistete Werte erlaubt. Prüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für die anderen Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den größten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) diesen Wert überschreitet, schlägt das Element in der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Höchstwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was anzeigt, dass der Bereich umschlagen kann; zum Beispiel ermöglicht dies Ihnen, einen Zeitbereich von 22:00 bis 04:00 Uhr zu spezifizieren.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn keine `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Diese Zahl muss auch größer oder gleich dem von `minlength` angegebenen Wert sein.

    Die Eingabe schlägt in der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Texts mehr als `maxlength` UTF-16-Codeeinheiten beträgt. Standardmäßig verhindern Browser das Eingeben von mehr Zeichen, als durch das `maxlength`-Attribut erlaubt sind. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, es definiert den kleinsten Wert im Bereich der zugelassenen Werte. Wenn der in das Element eingegebene [`value`](#value) kleiner ist als dieser, schlägt das Element in der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht spezifiziert oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert kleiner ist als das Minimum, das vom `min`-Attribut erlaubt ist, verhindert die Einschränkungsvalidierung das Absenden des Formulars. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was anzeigt, dass der Bereich umschlagen kann; zum Beispiel ermöglicht dies Ihnen, einen Zeitbereich von 22:00 bis 04:00 Uhr zu spezifizieren.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn keine `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt in der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Texts weniger als `minlength` UTF-16-Codeeinheiten beträgt, was das Absenden des Formulars verhindert. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolean-Attribut `multiple`, falls gesetzt, bedeutet, dass der Benutzer in der E-Mail-Steuerung durch Kommas getrennte E-Mail-Adressen eingeben kann oder mit dem `file`-Eingabefeld mehr als eine Datei auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`

  - : Ein String, der einen Namen für das Eingabefeld angibt. Dieser Name wird zusammen mit dem Wert der Steuerung, wenn die Formulardaten übermittelt werden, gesendet.

    Betrachten Sie `name`-Attribut als erforderlich (auch wenn es nicht ist). Wenn eine Eingabe keinen `name` angegeben hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular gesendet! (Deaktivierte Steuerungen, nicht aktivierte Optionsfelder, nicht aktivierte Kontrollkästchen und Reset-Buttons werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn es als der Name eines `<input>`-Elements des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "Benutzer-Agent")}} auf die Zeichencodierung gesetzt, die zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erstellt ein einzigartiges Verhalten für Optionsfelder.

    Nur ein Optionsfeld in einer gleichnamigen Gruppe von Optionsfeldern kann gleichzeitig aktiviert sein. Das Auswählen eines beliebigen Optionsfeldes in dieser Gruppe deaktiviert automatisch jedes aktuell ausgewählte Optionsfeld in derselben Gruppe. Der Wert dieses einen aktivierten Optionsfeldes wird zusammen mit dem Namen gesendet, wenn das Formular gesendet wird.

    Wenn man in eine Gruppe von gleichnamigen Optionsfeldern eintabbed, erhält, wenn eines davon aktiviert ist, dieser den Fokus. Wenn sie nicht zusammen in der Quellreihenfolge gruppiert sind, beginnt das Eintabben, wenn eines der Gruppe aktiviert ist, bei dem ersten in der Gruppe, wobei alle, die nicht aktiviert sind, übersprungen werden. Mit anderen Worten, wenn eines aktiviert ist, überspringt das Eintabben die nicht aktiven Optionsfelder in der Gruppe. Wenn keines aktiviert ist, erhält das Optionsfeldgruppe den Fokus, wenn der erste Button in der gleichnamigen Gruppe erreicht ist.

    Sobald eines der Optionsfelder in einer Gruppe den Fokus hat, navigieren die Pfeiltasten durch alle Optionsfelder mit dem gleichen Namen, selbst wenn die Optionsfelder nicht zusammen in der Quellreihenfolge sind.

    Wenn einem Eingabe-Element ein `name` zugewiesen wurde, wird dieser Name zu einer Eigenschaft des [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigentum des Formularbesitzers. Wenn Sie eine Eingabe haben, dessen `name` auf `guest` und ein weiteres dessen `name` auf `hat-size` gesetzt wurde, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein, und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es Formularelementen einen `name` zu geben, der einem eingebauten Eigenschaft des Formulars entspricht, da Sie ansonsten die vordefinierte Eigenschaft oder Methode mit dieser Referenz auf das entsprechende Eingabeelement überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu erstellen, mit dem der [`value`](#value) der Eingabe übereinstimmen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Keine Schrägstriche sollten um den Musterntext angegeben werden. Beim Erstellen des regulären Ausdrucks:

    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, so dass der Abgleich gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag angegeben, so dass das Muster als Sequenz von Unicode-Codepunkten und nicht as {{Glossary("ASCII", "ASCII")}} behandelt wird.

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn das Musterattribut gültig ist und ein nicht leerer Wert das Muster nicht erfüllt, verhindert die Einschränkungsvalidierung das Absenden des Formulars. Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck mit jedem durch Kommas getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe einschließen. Sie können auch ein [`title`](#title)-Attribut hinzufügen, um zu erklären, welche Anforderungen an die Übereinstimmung mit dem Muster gestellt werden; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist erforderlich für die Barrierefreiheit. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis für den Benutzer darauf, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Art von Daten gibt, eher als eine Erklärung oder Aufforderung. Der Text _darf keine_ Zeilenumbrüche oder Zeilenwechsel umfassen. Wenn beispielsweise erwartet wird, dass ein Feld den Vornamen eines Benutzers erfasst und sein Etikett "Vorname" lautet, könnte ein geeigneter Platzhalter "z. B. Mustafa" lauten.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt hervorrufen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`

  - : Wandelt ein `<input type="button">`-Element in einen Popover-Steuerungsbutton um; nimmt die ID des zu steuernden Popover-Elements als seinen Wert an. Siehe die [Popover-API](/de/docs/Web/API/Popover_API)-Landing-Page für weitere Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf ein von einer Steuerung `<input type="button">` gesteuertes Popover-Element angewendet werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein bereits gezeigtes Popover ausblenden. Wenn Sie versuchen, ein bereits verstecktes Popover auszublenden, wird keine Aktion unternommen.
    - `"show"`
      - : Der Button wird ein verstecktes Popover zeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen, wird keine Aktion unternommen.
    - `"toggle"`
      - : Der Button wird zwischen angezeigtem und verstecktem Popover wechseln. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerungstaste ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten kann. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly) für weitere Informationen.

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Formular abgesendet werden kann. Das `required`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Attributes/required) für weitere Informationen.

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url` und `text`, gibt das `size`-Attribut an, wie viel von der Eingabe angezeigt wird. Es erzeugt im Grunde das gleiche Ergebnis wie die Einstellung der CSS-`width`-Eigenschaft mit einigen Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px`-Einheiten). CSS-`width` hat Vorrang vor dem `size`-Attribut.

- `src`

  - : Gültig nur für den `image` Eingabeknopf, das `src` ist ein String, der die URL der Bilddatei angibt, die zur Darstellung des grafischen Absende-Buttons angezeigt werden soll. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss.

    Wenn nicht explizit enthalten:

    - `step` standardmäßig auf 1 für `number` und `range`.
    - Jeder Datums/Zeit-Eingabetyp hat einen Standardwert für `step`, der dem Typ entspricht; siehe die individuellen Eingabeseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step), und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl sein - ganzzahlig oder dezimal - oder der spezielle Wert `any`, was bedeutet, dass keine Stufe impliziert wird und jeder Wert erlaubt ist (unter Ausschluss anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, Datums/Zeit-Eingabetypen und `range` Eingabetypen gleich der Basis für die Schritthöhe - dem [`min`](#min)-Wert und den Inkrementen des Schrittwerts bis zum [`max`](#max)-Wert, wenn vorhanden.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Zahl, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede ganze Zahl gültig, aber Kommazahlen (wie `4.2`) sind nicht gültig, weil `step` standardmäßig auf `1` gesetzt ist. Für `4.2`, um gültig zu sein, hätte `step` auf `any`, 0.1, 0.2, oder auf eine Zahl gesetzt werden müssen, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die eingegebenen Daten des Benutzers sich nicht an die Schritt-Konfiguration halten, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und wird die `:invalid`-Pseudo-Klasse entsprechen.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- `tabindex`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein integer-Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen mit Ausnahme von Eingaben des Typs `hidden` fokussierbar sind, sollte dieses Attribut nicht auf Formularsteuerungen verwendet werden, da dies die Verwaltung der Fokusreihenfolge für alle im Dokument enthaltenen Elemente erfordern würde mit dem Risiko schlechter Benutzerfreundlichkeit und Barrierefreiheit bei inkorrekter Umsetzung.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text enthält, der als Zusatzinformation zu dem Element gehört, dem es angehört. Solche Informationen können typischerweise, aber nicht zwingend, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks der Formulareingabe verwendet werden. Stattdessen verwenden sie das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut der Formulareingabe festgelegt ist. Siehe [Labels](#labels) unten.

- `type`

  - : Ein String, der den zu rendernden Steuerungstyp angibt. Um beispielsweise ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben ist) wird der `text`-Eingabetyp verwendet, wodurch ein Klartext-Eingabefeld erstellt wird.

    Zulässige Werte sind in [Eingabetypen](#input_types) oben aufgeführt.

- `value`

  - : Der Wert der Eingabesteuerung. Bei Angabe im HTML entspricht dies dem Anfangswert, und von da an kann es jederzeit mit JavaScript geändert oder abgerufen werden, um auf die `value`-Eigenschaft des jeweiligen [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch für `checkbox`, `radio` und `hidden` als verpflichtend angesehen werden.

- `width`

  - : Gültig nur für den `image` Eingabeknopf, das `width` ist die Breite der Bilddatei, die zur Darstellung des grafischen Absende-Buttons angezeigt werden soll. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardmäßige Attribute

Die folgenden nicht-standardmäßigen Attribute sind ebenfalls auf einigen Browsern verfügbar. Als allgemeine Regel sollten Sie deren Verwendung vermeiden, es sei denn, es lässt sich nicht anders machen.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, um Live-Suchergebnisse zu aktualisieren, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion angibt, die ausgeführt wird, wenn der Benutzer die Taste <kbd>Enter</kbd> oder <kbd>Return</kbd> drückt, während er das Feld bearbeitet; dies wird verwendet, um ein geeignetes Etikett für diese Taste auf einer virtuellen Tastatur zu ermitteln. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Orientierung des Bereichsschiebers. <strong>Nur Firefox.</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Elementen, die in der Dropdown-Liste vorheriger Suchabfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob nur Verzeichnisse vom Benutzer ausgewählt werden dürfen (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls präsent ist)
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome, etc.), das, falls vorhanden, den {{Glossary("user_agent", "Benutzer-Agent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzer-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht es Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche startet (z. B. indem er die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt, während er das Feld bearbeitet).

    Das `search`-Ereignis ist so rate-limitiert, dass es nicht öfter gesendet wird als ein implementierungsdefiniertes Intervall.

- `orient` {{non-standard_inline}}

  - : Ähnlich wie die nicht-standard CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente betrifft, definiert das `orient`-Attribut die Orientierung des Bereichsschiebers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Erstellen von vertikalen Formularsteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz, um vertikale Formularsteuerungen zu erstellen.

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die in der nativ bereitgestellten Dropdown-Liste des `<input>`-Elements früherer Suchanfragen angezeigt werden soll.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben wird, wird die maximale Standardanzahl an Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass nur Verzeichnisse vom Benutzer im Datei-Auswahl-Interface auswählbar sein sollen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und höher verwendbar. Obwohl es relativ breite Unterstützung hat, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, welche `<input>`-Elemente im DOM repräsentiert. Ebenfalls verfügbar sind die durch die übergeordneten Schnittstellen spezifizierten Methoden, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben und ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben, ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element ausgelöst und (wenn das Ereignis nicht abgebrochen wird) das Problem dem Benutzer gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Markiert den gesamten Inhalt des `<input>`-Elements, wenn der Inhalt des Elements ausgewählt werden kann. Bei Elementen ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder Kalendereingabedatum) hat diese Methode keine Wirkung.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Legt die Inhalte des angegebenen Zeichenbereichs im Eingabeelement auf eine gegebene Zeichenfolge fest. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Markiert den angegebenen Bereich von Zeichen innerhalb eines textuellen Eingabeelements. Tut nichts bei Eingaben, die nicht als Texteingabefelder dargestellt sind.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Picker für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, jedoch von einem Button-Druck oder einer anderen Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins, oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Eingabefelder, als ersetzte Elemente, haben einige Funktionen, die für Nicht-Formularelemente nicht zutreffen. Es gibt CSS-Selektoren, die speziell Formularsteuerungen basierend auf ihren UI-Funktionen, auch bekannt als UI-Pseudoklassen, ansprechen können. Das Input-Element kann auch nach Typ mit Attributselektoren gezielt angesprochen werden. Es gibt einige Eigenschaften, die ebenfalls besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudoklassen, die für das
    <code>&#x3C;input></code>-Element relevant sind:
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
        Jedes derzeit aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, beschriftet etc.) oder den Fokus akzeptieren kann und ebenfalls einen deaktivierten Zustand hat, in dem es nicht aktiviert werden kann oder den Fokus nicht akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktiven Zustand hat, was bedeutet, dass es sonst aktiviert werden könnte (ausgewählt, angeklickt, beschriftet etc.) oder den Fokus akzeptieren könnte, wäre es nicht deaktiviert.
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
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das bisher noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die die Standardeinstellung in einer Gruppe von verwandten Elementen sind. Entsprechende {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Eingabetypen, die beim Laden oder Rendern der Seite aktiviert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entsprechende {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Eingabetypen, die aktuell aktiviert sind (außerdem {{HTMLElement("option")}} in einem {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt ist, {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Radiobuttons mit demselben Namenwert im Formular deaktiviert sind, und {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularsteuerungen, auf die Einschränkungsvalidierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularsteuerungen, auf die Einschränkungsvalidierung angewendet wurde und die derzeit nicht gültig sind. Entspricht einer Formularsteuerung, deren Wert die durch ihre Attribute festgelegten Einschränkungen nicht erfüllt, wie z.B. <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht leeres Eingabefeld, dessen aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute und die <a href="#step"><code>step</code></a> vorgegebenen Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht leeres Eingabefeld, dessen aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute vorgegebenen Bereichsgrenzen liegt oder nicht dem <a href="#step"><code>step</code></a>-Einschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat. Entspricht nur Elementen, die erforderlich sein können. Das Attribut auf einem nicht erforderlichen Element führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut nicht gesetzt hat.
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
        Ähnlich wie <code>:invalid</code>, wird aber beim Verlassen des Fokus aktiviert. Entspricht ungültigen Eingaben, jedoch erst nach der Benutzerinteraktion, wie z.B. durch Fokussierung auf das Steuerungselement, Verlassen des Steuerungselements oder Versuch, das Formular mit dem ungültigen Steuerungselement zu übermitteln.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die dem Benutzer ein Auswahlmenü zum Auswählen eines Wertes anzeigen (zum Beispiel <a href="/de/docs/Web/HTML/Element/input/color"><code>&lt;input type="color"&gt;</code></a>) — aber nur, wenn das Element im offenen Zustand ist, d.h. wenn das Auswahlmenü angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können das Label einer Checkbox basierend darauf stylen, ob die Checkbox aktiviert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das direkt nach einem aktivierten Input folgt. Wir haben keine Stile angewendet, wenn das `input` nicht aktiviert ist.

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

Es ist möglich, verschiedene Arten von Formularsteuerungen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusteuern. CSS-Attributselektoren entsprechen Elementen basierend entweder nur auf der Anwesenheit eines Attributs oder dem Wert eines bestimmten Attributs.

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

Standardmäßig erscheint der Text des Platzhalters in einem durchsichtigen oder hellgrauen Ton. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder` Text](#placeholder) des Inputs. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement anwendbar sind, kann in einer Regel verwendet werden, die `::placeholder` als Selektor hat.

### appearance

Die {{cssxref("appearance")}} Eigenschaft ermöglicht es, (fast) jedes Element als plattformspezifischen Stil basierend auf dem Theme des Betriebssystems anzuzeigen sowie das Entfernen jeglicher plattformspezifischer Stile mit dem Wert `none`.

Man könnte ein `<div>` wie einen Radiobutton aussehen lassen mit `div {appearance: radio;}` oder ein Radio wie eine Checkbox mit `[type="radio"] {appearance: checkbox;}`, aber tun Sie das nicht.

Das Setzen von `appearance: none` entfernt plattformspezifische Ränder, aber nicht die Funktionalität.

### caret-color

Eine Eigenschaft, die speziell für textbezogene Elemente ist, ist die CSS {{cssxref("caret-color")}} Eigenschaft, die es Ihnen ermöglicht, die Farbe des Texteingabe-Cursors zu setzen:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht Ihnen die Kontrolle über das Größenverhalten von Formulareingaben (d.h. sie erhalten standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht Ihnen das Überschreiben des Standardverhaltens und erlaubt es Formularsteuerungen, ihre Größe anzupassen, um ihrem Inhalt zu entsprechen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die sich an ihren Inhalt anpassen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Element/input/file), und {{htmlelement("textarea")}}-Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textuellen Eingaben und spezialisierten Oberflächen) ist das `<input>` Element ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element). Wenn es so ist, können die Position und die Größe des Elements innerhalb seines Rahmens mithilfe der CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML siehe:

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Stil von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Stile für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels sind erforderlich, um Assistenztexte mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element liefert erläuternde Informationen über ein Formularfeld, das _immer_ angemessen ist (abgesehen von den Layoutüberlegungen, die Sie haben). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugeordnete Labels

Das semantische Paaren von `<input>` und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Bildschirmlesegeräte. Durch das Paaren mit dem `for`-Attribut des `<label>`, verbinden Sie das Label mit dem Input, sodass Bildschirmleser Eingaben den Benutzern genauer beschreiben können.

Es genügt nicht, nur einfachen Text neben dem `<input>`-Element zu haben. Vielmehr erfordert die Benutzerfreundlichkeit und Zugänglichkeit die Aufnahme von entweder impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht zugänglich: Es gibt keine Beziehung zwischen dem Prompt und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere 'Treffer'-Fläche für Maus- und Touchscreen-Nutzer, um darauf zu klicken oder zu tippen. Durch das Paaren eines `<label>` mit einem `<input>`, fokussiert ein Klick auf eines von beiden das `<input>`. Wenn Sie einfachen Text verwenden, um Ihr Input zu "labeln", wird dies nicht passieren. Dass der Prompt Teil des Aktivierungsbereichs für die Eingabe ist, hilft Menschen mit motorischen Kontrollproblemen.

Als Webentwickler ist es wichtig, dass wir nie annehmen, dass Menschen all das wissen, was wir wissen. Die Vielfalt der Menschen, die das Internet nutzen—und damit Ihre Webseite—garantiert praktisch, dass einige Besucher Ihrer Website einige Unterschiede in Denkprozessen und/oder Umständen haben werden, die sie dazu führen, Ihre Formulare sehr unterschiedlich zu interpretieren, wenn sie keine klaren und ordnungsgemäß präsentierten Labels haben.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut erlaubt es Ihnen, Text zu spezifizieren, der innerhalb des `<input>`-Elements Inhalt angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil er es nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Nicht nur ist der Platzhalter für Bildschirmleser nicht zugänglich, sondern er verschwindet auch, sobald der Benutzer irgendeinen Text in das Steuerungselement eingegeben hat, oder wenn das Steuerungselement bereits einen Wert hat. Browser mit automatischen Seitenübersetzungsfunktionen könnten Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Vermeiden Sie es, das [`placeholder`](#placeholder)-Attribut zu verwenden, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element labeln müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Die Client-seitige Validierung ist nützlich, garantiert aber _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, verifizieren Sie dies _immer_ auch auf der Serverseite und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Zustand jeder Eingabe zu stylen, wie im Abschnitt über [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser eine Client-seitige Validierung bei (versuchter) Formularübermittlung. Bei der Übermittlung des Formulars, wenn es ein Formularsteuerungselement gibt, das die Einschränkungsvalidierung nicht besteht, zeigt der unterstützende Browser eine Fehlermeldung bei dem ersten ungültigen Formularsteuerelement an; entweder eine Standardmeldung basierend auf dem Fehlerart oder eine von Ihnen gesetzte Nachricht.

Einige Eingabetypen und andere Attribute legen fest, welche Werte für eine bestimmte Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Es könnten mehrere Fehler auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow` wenn er größer als 10 ist, `stepMismatch` wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade ganze Zahl ist (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch` wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich an möglichen Werten periodisch ist (d.h. dass die Werte bei dem größten möglichen Wert zurück zum Anfang und nicht enden), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min) Eigenschaften umgekehrt werden, was darauf hinweist, dass der Bereich der zulässigen Werte bei `min` beginnt, sich um den kleinsten möglichen Wert erweitert und dann weitergeht bis `max` erreicht ist. Dies ist besonders nützlich für Datum- und Uhrzeiten, wie zum Beispiel, wenn Sie möchten, dass der Bereich von 20:00 Uhr bis 8:00 Uhr reicht:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und ihre Werte können zu einem speziellen [`ValidityState`](/de/docs/Web/API/ValidityState)-Fehler führen:

<table class="no-markdown">
  <caption>
    Validity-Objektfehler hängen von den <code>&lt;input&gt;</code>
    -Attributen und ihren Werten ab:
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
        Tritt auf, wenn der Wert größer ist als der maximale Wert, wie durch das <code>max</code>-Attribut definiert.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die Zahl, die durch die <code>maxlength</code>-Eigenschaft erlaubt wird.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der minimale Wert, wie durch das <code>min</code>-Attribut definiert.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die Anzahl, die von der <code>minlength</code>-Eigenschaft gefordert wird.
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein pattern-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht mit ihm übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, der Wert jedoch <code>null</code> ist oder ein Radio- oder Kontrollkästchen nicht aktiviert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Der Standardinkrement ist <code>1</code>, daher sind nur ganze Zahlen auf <code>type="number"</code> gültig, wenn step nicht enthalten ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht der richtige Typ ist, beispielsweise wenn eine Email kein <code>@</code> enthält oder eine URL kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn eine Formularsteuerung nicht das `required`-Attribut hat, kein Wert oder ein leerer String, ist dies nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, führt ein leerer String nicht zu einem Fehler.

Wir können Grenzen für akzeptierte Werte festlegen, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer alarmieren, wenn beim Übermitteln des Formulars ein Fehler vorliegt.

Zusätzlich zu den in der Tabelle oben beschriebenen Fehlern enthält das `validityState`-Interface die booleschen, nur lesbaren Eigenschaften `badInput`, `valid`, und `customError`. Das Validitätsobjekt enthält:

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

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund für das mögliches Validierungsversagen zutrifft, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen einhält.

Wenn es einen Fehler gibt, alarmieren unterstützende Browser sowohl den Benutzer als auch verhindern, dass das Formular übermittelt wird. Ein Wort der Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen truthy-Wert gesetzt wird (alles andere als der leere String oder `null`), wird das Formular nicht abgeschickt. Wenn es keine benutzerdefinierte Fehlermeldung gibt, und keine der anderen Eigenschaften true zurückgibt, wird `valid` true sein, und das Formular kann übermittelt werden.

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

Die letzte Zeile, die die benutzerdefinierte Validitätsmeldung auf den leeren String setzt, ist wichtig. Wenn der Benutzer einen Fehler macht und die Validität gesetzt ist, wird es nicht übermittelt, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandten) Elementen verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen führen dazu, dass dies eine Standardfehlermeldung erzeugt, wenn Sie versuchen, das Formular mit entweder keinem gültigen ausgefüllten Feld oder einem Wert, der nicht dem `pattern` entspricht, abzusenden.

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

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sein Wert sich ändert, indem wir die `checkValidity()`-Methode über den `input`-Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst und die `invalid`-Ereignishandlungsfunktion wird ausgeführt. Innerhalb dieser Funktion bestimmen wir mittels einer `if ()`-Anweisung, ob der Wert ungültig ist, weil er leer ist oder weil er dem `pattern` nicht entspricht, und setzen eine benutzerdefinierte Validitätsfehlermeldung.
- Infolgedessen wird beim Drücken des Absende-Buttons, falls der Eingabewert ungültig ist, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er wie erwartet übermittelt. Damit dies geschehen kann, muss die benutzerdefinierte Validierung aufgehoben werden, indem `setCustomValidity()` mit einem leeren Zeichenkettenwert aufgerufen wird. Deshalb tun wir dies jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Validität vorher gesetzt wurde, wird die Eingabe als ungültig registriert, auch wenn sie bei der Übermittlung einen gültigen Wert enthält.

> [!NOTE]
> Validieren Sie immer Eingabebeschränkungen sowohl auf Client- als auch auf Serverseite. Die Einschränkungsvalidierung entfernt nicht die Notwendigkeit der Validierung auf der _Serverseite_. Ungültige Werte können immer noch von älteren Browsern oder von Angreifern gesendet werden.

> [!NOTE]
> Firefox unterstützte ein proprietäres Fehlerattribut — `x-moz-errormessage` — über viele Versionen hinweg, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise zu setzen. Dies wurde ab Version 66 entfernt (siehe [Firefox-Fehler 1513890](https://bugzil.la/1513890)).

### Lokalisation

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der Lokale ab. In einigen Lokalen ist 1,000.00 eine gültige Zahl, während in anderen Lokalen die gültige Art, diese Zahl einzugeben, 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Lokale zu bestimmen, um die Eingabe des Benutzers zu validieren (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut auf dem Element oder einem seiner Elternteile angegeben ist.
- Versuchen Sie die Sprache, die durch einen `Content-Language`-HTTP-Header angegeben ist. Oder,
- Wenn keine angegeben ist, verwenden Sie die Lokale des Browsers.

## Zugänglichkeit

### Labels

Beim Hinzufügen von Eingaben ist es eine Zugänglichkeitsanforderung, Labels hinzuzufügen. Dies ist erforderlich, damit diejenigen, die unterstützende Technologien verwenden, wissen, wofür die Eingabe bestimmt ist. Auch das Klicken oder Antippen eines Labels fokussiert das damit verbundene Formulareingabeelement. Dies verbessert die Zugänglichkeit und Benutzerfreundlichkeit für sehende Benutzer, da es den Bereich vergrößert, den ein Benutzer anklicken oder antippen kann, um das Formulareingabeelement zu aktivieren. Dies ist besonders nützlich (und sogar erforderlich) für Radiobuttons und Kontrollkästchen, die sehr klein sind. Für weitere Informationen zu Labels im Allgemeinen, siehe [Labels](#labels).

Das folgende ist ein Beispiel dafür, wie das `<label>` mit einem `<input>`-Element im obigen Stil verknüpft wird. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert derselbe wie der des `id` des Inputs ist.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen Bereich bieten, der groß genug ist, um leicht aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die unpräzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine Mindestinteraktionsgröße von 44×44 [CSS-Pixeln](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, aufgelistet, absendbar, zurücksetzbar, mit Formular verbundenes Element, <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalte</a>. Wenn <a href="#type"><code>type</code></a> nicht <code>hidden</code> ist, dann labelbares Element, auffindbarer Inhalt.
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
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalte</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
      <th scope="row">Zugelassene ARIA-Rollen</th>
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a> wenn verwendet mit <code>aria-pressed</code>,
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

- [Formulareinschränkung Validierung](/de/docs/Web/HTML/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Wie man benutzerdefinierte Formular-Widgets baut](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Stil von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Stile für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Erstellung von vertikalen Formularsteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
