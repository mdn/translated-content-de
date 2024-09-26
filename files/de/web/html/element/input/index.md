---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: bf1775f6305d95ae7c7022922c9cea2ef89212c1
---

{{HTMLSidebar}}

Das **`<input>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; je nach Gerät und [User-Agent](/de/docs/Glossary/user_agent) stehen zahlreiche Arten von Eingabedaten und Steuer-Widgets zur Verfügung. Das `<input>`-Element ist eines der mächtigsten und komplexesten in ganz HTML aufgrund der schieren Anzahl von Kombinationen von Eingabetypen und Attributen.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## \<input>-Typen

Die Funktionsweise eines `<input>` variiert beträchtlich, je nach Wert seines [`type`](#type)-Attributs, weshalb die unterschiedlichen Typen auf ihren eigenen separaten Referenzseiten behandelt werden. Wenn dieses Attribut nicht angegeben wird, ist der Standardtyp `text`.

Die verfügbaren Typen sind wie folgt:

<table class="no-markdown">
  <colgroup>
    <col />
    <col style="width: 50%" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>Type</th>
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
      <td>Ein Kontrollkästchen, das es ermöglicht, einzelne Werte auszuwählen/abwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerfeld zum Festlegen einer Farbe; öffnet einen Farbwähler, wenn aktiv in unterstützten Browsern.
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
        Ein Steuerfeld zur Eingabe eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumsauswähler oder numerische Rollen für Jahr, Monat, Tag, wenn aktiv in unterstützten Browsern.
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
        Ein Steuerfeld zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Rollen für Datum- und Zeitkomponenten, wenn aktiv in unterstützten Browsern.
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
        Ein Steuerfeld, das dem Benutzer ermöglicht, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Dateitypen zu definieren, die das Steuerfeld auswählen kann.
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
        Ein Steuerfeld, das nicht angezeigt wird, dessen Wert jedoch an den
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
      <td>Ein Steuerfeld zur Eingabe eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerfeld zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt die Standardvalidierung hinzu. Zeigt eine nummerische Tastatur auf manchen Geräten mit dynamischen Tastaturen an.
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
        Ein Radiobutton, der das Auswählen eines einzigen Wertes aus mehreren Optionen mit demselben <a href="#name"><code>name</code></a>-Wert ermöglicht.
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
        Ein Steuerfeld zur Eingabe einer Zahl, deren genauer Wert nicht wichtig ist.
        Wird als Bereichs-Widget angezeigt, das auf den mittleren Wert standardmäßig gesetzt ist.
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
        Ein Button, der den Inhalt des Formulars auf die Standardwerte zurücksetzt. Nicht empfohlen.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchzeichenfolgen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann in unterstützten Browsern ein Löschsymbol enthalten, mit dem das Feld geleert werden kann. Zeigt auf manchen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Ein Button, der das Formular abschickt.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        Ein Steuerfeld zur Eingabe einer Telefonnummer. Zeigt eine Telefon-Wählfläche auf manchen Geräten mit dynamischen Tastaturen an.
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
      <td>Ein Steuerfeld zur Eingabe eines Zeitwerts ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabefeld, hat aber Validierungsparameter und eine relevante Tastatur in unterstützten Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerfeld zur Eingabe eines Datums bestehend aus einer Wochen-Jahreszahl und einer Wochennummer ohne Zeitzone.
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
        Ein Steuerfeld zur Eingabe eines Datums und einer Zeit (Stunde, Minute, Sekunde und Bruchteile einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so mächtig aufgrund seiner Attribute; das [`type`](#type)-Attribut, das oben mit Beispielen beschrieben wird, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch gesehen denselben Satz von Attributen. In der Realität haben jedoch die meisten Attribute nur eine Wirkung auf eine spezielle Untergruppe von Eingabetypen. Darüber hinaus wirkt sich die Art und Weise, wie einige Attribute ein Input beeinflussen, anders auf verschiedene Eingabetypen aus.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird von einer Liste gefolgt, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie verbunden sind. Diejenigen, die für die meisten oder alle Eingabetypen gemeinsam sind, werden weiter unten detaillierter definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind – oder Attribute, die für alle Eingabetypen üblich sind, aber spezielle Verhaltensweisen haben, wenn sie auf einem bestimmten Eingabetyp verwendet werden – werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element schließen die [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes) ein und zusätzlich:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                              |
| --------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis für erwarteten Dateityp in Datei-Upload-Steuerelementen                                           |
| [`alt`](#alt)                                 | `image`                                                                      | alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                           |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Steuert die automatische Großschreibung in eingegebenem Text.                                             |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis für Formular-Autovervollständigungsfunktion                                                       |
| [`capture`](#capture)                         | `file`                                                                       | Eingabemethode für Medienaufnahme in Datei-Upload-Steuerelementen                                         |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Ob der Befehl oder das Steuerfeld aktiviert ist                                                           |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfelds zur Übermittlung der Richtung des Elements bei der Formularübermittlung            |
| [`disabled`](#disabled)                       | alle                                                                         | Ob das Formular-Steuerelement deaktiviert ist                                                             |
| [`form`](#form)                               | alle                                                                         | Verknüpft das Steuerelement mit einem Formularelement                                                     |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | URL zur Verwendung für die Formularübermittlung                                                           |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Typ der Formular-Datensatzcodierung, die für die Formularübermittlung zu verwenden ist                    |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | HTTP-Methode zur Verwendung für die Formularübermittlung                                                  |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Umgeht die Formular-Steuerelementvalidierung für die Formularübermittlung                                 |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für die Formularübermittlung                                                             |
| [`height`](#height)                           | `image`                                                                      | Dasselbe wie height-Attribut für {{htmlelement('img')}}; vertikale Dimension                              |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsoptionen                  |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Höchstwert                                                                                                |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) von `value`                                                           |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Minimalwert                                                                                               |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Minimale Länge (Anzahl der Zeichen) von `value`                                                           |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolean. Ob mehrere Werte erlaubt sind                                                                    |
| [`name`](#name)                               | alle                                                                         | Name des Formular-Steuerelements. Wird mit dem Formular als Teil eines Name-Wert-Paares übermittelt       |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Muster, dem das `value` entsprechen muss, um gültig zu sein                                               |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der im Formular-Steuerelement erscheint, wenn kein Wert festgelegt ist                              |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Bezeichnet ein `<input type="button">` als Steuerungselement für ein Popover-Element                      |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                          |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht bearbeitbar                                                                   |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss aktiviert werden, damit das Formular übermittelt werden kann |
| [`size`](#size)                               | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe des Steuerelements                                                                                  |
| [`src`](#src)                                 | `image`                                                                      | Dasselbe wie `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                         |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Inkrementelle Werte, die gültig sind                                                                      |
| [`type`](#type)                               | alle                                                                         | Typ des Formular-Steuerelements                                                                           |
| [`value`](#value)                             | alle außer `image`                                                           | Der Wert des Steuerelements. Wenn im HTML angegeben, entspricht er dem Anfangswert                        |
| [`width`](#width)                             | `image`                                                                      | Dasselbe wie `width`-Attribut für {{htmlelement('img')}}                                                  |

Einige zusätzliche nicht-standardmäßige Attribute werden aufgelistet nach den Beschreibungen der Standardattribute.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Gültig nur für den Eingabetyp `file`, definiert das `accept`-Attribut, welche Dateitypen in einem Datei-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`

  - : Gültig nur für den `image`-Button, liefert das `alt`-Attribut alternativen Text für das Bild, zeigt den Wert des Attributs an, wenn das Bild [`src`](#src) fehlt oder nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, auf welche Weise. Weitere Informationen finden Sie auf der Seite des globalen Attributs [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge, die beschreibt, welche Art von Autovervollständigungsfunktionalität das Eingabefeld bieten soll, falls vorhanden. Eine typische Implementierung der Autovervollständigung erinnert sich an vorherige Werte, die in das gleiche Eingabefeld eingegeben wurden, aber es können auch komplexere Formen der Autovervollständigung existieren. Beispielsweise könnte ein Browser in das Kontaktverzeichnis eines Geräts integrieren, um `email`-Adressen in einem Email-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values) für erlaubte Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Wirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen gültig außer `checkbox`, `radio`, `file` oder für alle Arten von Buttons.

    Weitere Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` für `hidden` leicht anders ist als für andere Eingabetypen, finden Sie im [`autocomplete`-Attribut](/de/docs/Web/HTML/Attributes/autocomplete).

- `autofocus`

  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass das Eingabefeld automatisch den Fokus haben soll, wenn die Seite geladen ist (oder wenn das {{HTMLElement("dialog")}} mit dem Element angezeigt wird).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis gefeuert wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut besitzen. Wenn es auf mehr als ein Element gesetzt wird, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Ein automatisch fokussiertes Formular-Steuerelement kann für sehbehinderte Menschen, die Bildschirmlesetechnologie verwenden, und für Menschen mit kognitiven Beeinträchtigungen verwirrend sein. Wenn `autofocus` verwendet wird, "teleportieren" Bildschirmlesegeräte den Benutzer zum Formular-Steuerelement, ohne sie vorher zu warnen.

    Verwenden Sie das `autofocus`-Attribut mit Bedacht unter Berücksichtigung der Barrierefreiheit. Ein automatisch fokussiertes Steuerelement kann beim Laden der Seite Scrollen verursachen. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Ein Bildschirmlesegerät wird den Titel des fokussierten Formular-Steuerelements ankündigen, aber es wird nichts ankündigen, bevor der Titel angezeigt wird, und der sehende Benutzer auf einem kleinen Gerät wird den durch den vorhergehenden Inhalt geschaffenen Kontext ebenfalls verpassen.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den Eingabetyp `file`, definiert das `capture`-Attribut, welches Medium—Mikrofon, Video oder Kamera—verwendet werden soll, um eine neue Datei für den Upload mit `file`-Upload-Steuerelementen in unterstützten Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`

  - : Gültig für sowohl `radio` als auch `checkbox` Typen ist `checked` ein Boolean-Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, gibt es an, dass der Radiobutton der aktuell ausgewählte in der Gruppe von gleich benannten Radiobuttons ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (beim Laden der Seite). Es zeigt _nicht_ an, ob dieses Kontrollkästchen aktuell aktiviert ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhalt-Attribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerelementen wird der Wert von Kontrollkästchen und Radiobuttons nur in die übermittelten Daten aufgenommen, wenn sie aktuell `checked` sind. Wenn sie es sind, werden der Name und die Wert(e) der aktivierten Steuerelemente übermittelt.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name` `fruit` ist, ein `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, enthalten die übermittelten Formulardaten `fruit=cherry`. Wenn das Kontrollkästchen nicht aktiv ist, ist es in den Formulardaten überhaupt nicht aufgeführt. Der Standardwert `value` für Kontrollkästchen und Radiobuttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für die Eingabefelder `hidden`, `text`, `search`, `url`, `tel`, und `email`, ermöglicht das `dirname`-Attribut die Übermittlung der Richtung des Elements. Wenn enthalten, wird das Formular-Steuerelement mit zwei Namen/Wert-Paaren übermittelt: das erste sind der [`name`](#name) und der [`value`](#value), und das zweite sind der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl` wie durch den Browser festgelegt.

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

    Wenn das oben genannte Formular übermittelt wird, verursacht die Eingabe sowohl das `name` / `value`-Paar von `fruit=cherry` als auch das `dirname` / Direction-Paar von `fruit-dir=ltr`.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer nicht mit der Eingabe interagieren soll. Deaktivierte Eingaben werden in der Regel mit einer dunkleren Farbe oder durch eine andere Form der Anzeige gezeichnet, dass das Feld nicht verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht in der Spezifikation vorgeschrieben wird Firefox standardmäßig den [dynamischen deaktivierten Status](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge beibehalten. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- `form`

  - : Eine Zeichenfolge, die das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (das ist, ihr **Formularbesitzer**). Der Wert dieser Zeichenfolge muss, falls vorhanden, mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächstgelegenen umgebenden Formular verknüpft, falls vorhanden.

    Das `form`-Attribut ermöglicht es, ein Eingabefeld beliebig im Dokument zu platzieren, es jedoch mit einem Formular an anderer Stelle im Dokument aufgenommen zu haben.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Gültig nur für den `image`-Eingabeknopf, der `height` ist die Höhe der Bilddatei, die angezeigt wird, um den grafischen Submit-Button zu repräsentieren. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabefelder, es definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Es soll das Element identifizieren, wenn Links verwendet werden. Der Wert wird als Wert des {{htmlelement('label')}}-`for`-Attributs verwendet, um das Label mit dem Formularelement zu verlinken. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, es liefert einen Hinweis an Browser, welche Art von virtueller Tastaturkonfiguration beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Zu den Werten zählen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der `list`-Attributwert sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements sein, das im selben Dokument lokalisiert ist. Das `<datalist>` liefert eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe suggeriert werden. Alle in der Liste aufgeführten Werte, die nicht kompatibel mit dem [`type`](#type) sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

    Gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut den Vorgaben wird das `list`-Attribut nicht vom `hidden`, `password`, `checkbox`, `radio`, `file` oder von einer der Schaltflächenarten unterstützt.

    Je nach Browser kann dem Nutzer eine benutzerdefinierte Farbpallette vorgeschlagen werden, Strichtzungen entlang eines Bereichs oder sogar, dass eine Eingabe geöffnet wird wie ein {{HTMLElement("select")}}, aber die Eingabe anderer nicht gelisteter Werte ermöglicht wird. Schauen Sie sich die [Kompatibilitätstabelle der Browser](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das Element {{htmlelement('datalist')}}.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den größten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) diesen Wert überschreitet, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, dann hat das Element keinen Höchstwert.

    Es gibt einen besonderen Fall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der `max`-Wert niedriger sein als der `min`-Wert, das darauf hinweist, dass der Bereich herumgewickelt werden kann; zum Beispiel, dies ermöglicht es, einen Zeitraum von 22 Uhr bis 4 Uhr anzugeben.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die maximale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger als die `maxlength` UTF-16-Code-Einheiten ist. Standardmäßig hindern Browser Benutzer daran, mehr Zeichen als durch das `maxlength`-Attribut erlaubt sind, einzugeben. Einschränkungsvalidierung wird nur angewendet, wenn der Benutzer den Wert ändert. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den kleinsten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) niedriger ist als dieser, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, dann hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Falls das `min`-Attribut gültig und ein nicht-leerer Wert kleiner als der nach dem `min`-Attribut erlaubte Wert ist, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

    Es gibt einen besonderen Fall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der `max`-Wert niedriger sein als der `min`-Wert, das darauf hinweist, dass der Bereich herumgewickelt werden kann; zum Beispiel, dies ermöglicht es Ihnen, einen Zeitraum von 22 Uhr bis 4 Uhr anzugeben.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die minimale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlt, wenn die Länge des in das Feld eingegebenen Textes weniger als die `minlength` UTF-16-Code-Einheiten ist, was die Formularübermittlung verhindert. Einschränkungsvalidierung wird nur angewendet, wenn der Benutzer den Wert ändert. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolean-Attribut `multiple`, falls gesetzt, bedeutet, dass der Benutzer mehrere durch Kommata getrennte E-Mail-Adressen im E-Mail-Widget eingeben kann oder mehr als eine Datei mit der `file`-Eingabe auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetypen.

- `name`

  - : Eine Zeichenfolge, die einen Namen für das Steuerelement angibt. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als erforderliches Attribut (auch wenn es nicht ist). Wenn eine Eingabe kein angegebenes `name` hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, deaktivierte Radiobuttons, deaktivierte Kontrollkästchen und Reset-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei besondere Fälle:

    1. `_charset_` : Wenn es als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch durch den [User-Agent](/de/docs/Glossary/user_agent) auf die Zeichencodierung gesetzt, die zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erzeugt ein einzigartiges Verhalten für Radiobuttons.

    Nur ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons kann gleichzeitig ausgewählt werden. Das Auswählen eines beliebigen Radiobuttons in dieser Gruppe hebt automatisch die Auswahl eines aktuell ausgewählten Radiobuttons in derselben Gruppe auf. Der Wert dieses einen ausgewählten Radiobuttons wird zusammen mit dem Namen übermittelt, wenn das Formular übermittelt wird.

    Wenn man in eine Serie von gleichnamigen Gruppen von Radiobuttons tabbt, wird, falls einer aktiviert ist, dieser den Fokus erhalten. Wenn sie nicht in der Quelldatei zusammen gruppiert sind, startet das Tabben in die Gruppe, sobald der erste Button in der Gruppe erreicht wird, und überspringt alle, die nicht aktiviert sind. Mit anderen Worten: Wenn einer markiert ist, überspringt das Tabben die deaktivierten Radiobuttons in der Gruppe. Wenn keiner markiert ist, erhält die Radiobutton-Gruppe, sobald der erste Button in der gleichnamigen Gruppe erreicht wird, den Fokus.

    Sobald einer der Radiobuttons in einer Gruppe den Fokus hat, kann man mit den Pfeiltasten durch alle Radiobuttons mit demselben Namen navigieren, selbst wenn die Radiobuttons in der Quelldatei nicht zusammen gruppiert sind.

    Wenn einem Eingabeelement ein `name` gegeben wird, wird dieser Name zu einer Eigenschaft des [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigentums des besitzenden Formsular-Elements. Wenn Sie ein Eingabefeld haben, dessen `name` auf `guest` gesetzt ist und ein anderes, dessen Name `hat-size` lautet, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer eingebauten Eigenschaft des Formulars entspricht, da Sie damit die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um ein reguläres Ausdrucksmuster zu kompilieren, dem das [`value`](#value) der Eingabe entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) bestehen kann. Es muss ein gültiges JavaScript-reguläres Ausdruck sein, das durch den {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Keine Schrägstriche sollten um den Mustertest angegeben werden. Beim Kompilieren des regulären Ausdruck:

    1. wird das Muster implizit mit `^(?:` und `)$` eingeschlossen, so dass das Muster gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag gesetzt, so dass das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstelle als [ASCII](/de/docs/Glossary/ASCII).

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn das Pattern-Attribut gültig ist und ein nicht-leerer Wert nicht dem Muster entspricht, verhindert die Einschränkungsvalidierung die Formularübermittlung. Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck mit jedem Komma getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe einfügen. Sie können auch ein [`title`](#title)-Attribut einfügen, um zu erklären, welche Anforderungen erfüllt sein müssen, um dem Muster zu entsprechen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number` bietet das `placeholder`-Attribut einen kurzen Hinweis für den Benutzer, welcher Art von Informationen im Feld erwartet werden. Es sollte sich um ein Wort oder eine kurze Phrase handeln, die einen Hinweis darauf gibt, welche Art von Daten erwartet werden, anstatt eine Erklärung oder Aufforderung. Der Text _darf nicht_ Wagenrückläufe oder Zeilenumbrüche enthalten. Zum Beispiel, wenn ein Feld erwartet, dass der Vorname eines Benutzers erfasst wird, und die Beschriftung "Vorname" lautet, könnte ein geeigneter Platzhalter "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Wege, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Labels](#labels).

- `popovertarget`

  - : Verwandelt ein `<input type="button">`-Element in einen Popover-Steuerelement-Button; nimmt die ID des Popover-Elements, das gesteuert werden soll, als Wert. Weitere Informationen erhalten Sie auf der Einstiegsseite der [Popover-API](/de/docs/Web/API/Popover_API).

- `popovertargetaction`

  - : Gibt die auszuführende Aktion auf einem von einem Steuerelement `<input type="button">` gesteuerten Popover-Element an. Mögliche Werte sind:

    - `"hide"`
      - : Die Schaltfläche wird ein angezeigtes Popover verstecken. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion durchgeführt.
    - `"show"`
      - : Die Schaltfläche wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Die Schaltfläche wird ein Popover zwischen Anzeigen und Verbergen umschalten. Wenn das Popover versteckt ist, wird es angezeigt; Wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die durch den Steuerungsbutton durchgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten darf. Das `readonly`-Attribut wird unterstützt von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password`.

    Weitere Informationen erhalten Sie im [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer vor dem Abschicken des Formulars einen Wert für die Eingabe angeben muss. Das `required`-Attribut wird von den Eingaben `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Weitere Informationen erhalten Sie unter [Client-seitige Validierung](#client-side_validation) und [HTML-Attribut: `required`](/de/docs/Web/HTML/Attributes/required).

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url` und `text` gibt das `size`-Attribut an, wie viel von der Eingabe angezeigt wird. Im Wesentlichen wird das gleiche Ergebnis erzeugt, als würde die CSS-`width`-Eigenschaft festgelegt, mit ein paar Besonderheiten. Die tatsächliche Einheit des Werts hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px`-Einheiten). CSS-`width` hat Vorrang vor dem `size`-Attribut.

- `src`

  - : Gültig nur für den `image`-Eingabeknopf, `src` ist eine Zeichenfolge, die die URL der anzuzeigenden Bilddatei angibt, um den grafischen Submit-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range` ist das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut eine Zahl, die die Unterteilung angibt, an der der Wert festhalten muss.

    Wenn nicht explizit aufgenommen:

    - Der `step`-Standardwert ist 1 für `number` und `range`.
    - Jeder Datums-/Uhrzeiteingabetyp hat einen Standard-`step`-Wert, der für den Typ gilt; siehe die individuellen Eingabeseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step) und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl sein—Ganzzahl oder Fließkommazahl—oder der spezielle Wert `any`, was bedeutet, dass keine Unterteilung impliziert ist und jeder Wert erlaubt ist (unter Vorbehalt anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, Datums-/Uhrzeiteingabetypen und `range`-Eingabetypen gleich der Grundlage für die Unterteilung—dem [`min`](#min)-Wert und Inkrementen des Stufenwerts bis zum [`max`](#max)-Wert, falls angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, sind dann alle geraden Ganzzahlen, die gleich oder größer als `10` sind, gültig. Wenn weggelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber Gleitkommawerte (wie `4.2`) sind nicht gültig, da der `step`-Standardwert `1` ist. Damit `4.2` gültig ist, hätte `step` auf `any`, 0.1, 0.2 oder eine `min`-Wertendung auf `.2` gesetzt werden müssen, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die durch den Benutzer eingegebenen Daten nicht den Schritt-Konfigurationen entsprechen, wird der Wert in der Einschränkungsvalidierung als ungültig angesehen und wird die `:invalid`-Pseudoklasse anpassen.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

- `tabindex`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabefelder, ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus haben kann (ist fokussierbar), ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabefelder mit Ausnahme von `hidden` fokussierbar sind, sollte dieses Attribut nicht auf Formularelementen verwendet werden, da dies es erforderlich machen würde, die Fokusreihenfolge aller Elemente im Dokument zu verwalten, mit dem Risiko, die Benutzbarkeit und Zugänglichkeit zu beeinträchtigen, wenn dies nicht korrekt durchgeführt wird.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabefelder, mit einem Text, der beratende Informationen bezüglich des Elements, zu dem es gehört, darstellt. Solche Informationen können typischerweise, aber nicht notwendigerweise, als Tooltip dem Benutzer präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks des Formular-Steuerelements verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das Formular-Steuerelement [`id`](#id) verweist. Siehe [Labels](#labels) unten.

- `type`

  - : Eine Zeichenfolge, die den Typ des anzuzeigenden Steuerelements angibt. Zum Beispiel, um ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet und ein Nur-Text-Eingabefeld erstellt.

    Erlaubte Werte sind oben unter [Eingabetypen](#input_types) aufgeführt.

- `value`

  - : Der Wert des Eingabesteuerelements. Wenn im HTML angegeben, ist dies der Anfangswert und kann ab diesem Zeitpunkt jederzeit mit JavaScript verändert oder abgerufen werden, indem auf die jeweilige [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft `value` zugegriffen wird. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`

  - : Gültig nur für den `image`-Eingabeknopf, der `width` ist die Breite der anzuzeigenden Bilddatei zur Darstellung des grafischen Submit-Buttons. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardmäßige Attribute

Die folgenden nicht-standardmäßigen Attribute sind auch auf einigen Browsern verfügbar. Grundsätzlich sollten Sie vermeiden, sie zu verwenden, es sei denn, es ist nicht möglich.

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
        Eine Zeichenfolge, die angibt, ob die Autokorrektur <code>on</code> oder <code>off</code> ist. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#incremental"><code>incremental</code></a></td>
      <td>
        Ob wiederholt [`search`](/de/docs/Web/API/HTMLInputElement/search_event)
        Ereignisse gesendet werden, um Aktualisierungen in den Suchergebnissen in Echtzeit zu erhalten, während der Benutzer die Eingabe des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenfolge, die die Art von Aktion angibt, die durchgeführt wird, wenn der Benutzer die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste drückt, während er das Feld bearbeitet; dies wird verwendet, um ein entsprechendes Label für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dies Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Orientierung des Bereichs-Schiebereglers. <strong>Nur Firefox.</strong>
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
        Ein Boolean-Wert, der angibt, ob nur das Auswählen eines Verzeichnisses (oder Verzeichnisse, falls <a href="#multiple"><code>multiple</code></a> auch vorhanden ist) erlaubt ist
      </td>
    </tr>
  </tbody>
</table>

- `autocorrect` {{non-standard_inline}}

  - : (Nur Safari). Eine Zeichenfolge, die angibt, ob die automatische Korrektur aktiviert werden soll, während der Benutzer dieses Feld bearbeitet. Erlaubte Werte sind:

    - `on`
      - : Aktiviert die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textersetzungen, falls vorhanden.
    - `off`
      - : Deaktiviert die automatische Korrektur und Textersetzungen.

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome etc.), das, falls vorhanden, dem [User-Agent](/de/docs/Glossary/user_agent) mitteilt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das die Suchbox darstellt. Dies ermöglicht es Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, indem der Benutzer die Sucheingabe bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche auslöst (wie zum Beispiel durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste, während er das Feld bearbeitet).

    Das `search`-Ereignis ist auf eine definierte Rate beschränkt, so dass es nicht häufiger als ein implementationsdefinierter Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich dem -moz-orient nicht-standardmäßigen CSS-Eigenschaft, die die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente betrifft, das `orient`-Attribut definiert die Orientierung des Bereichs-Schiebereglers. Werte beinhalten `horizontal`, was bedeutet, dass der Bereich horizontal angezeigt wird, und `vertical`, wo der Bereich vertikal angezeigt wird. Weitere Informationen erhalten Sie unter [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularelemente.

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut—unterstützt nur von Safari—ist ein numerischer Wert, der es erlaubt, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü des `<input>`-Elements der vorherigen Suchanfragen angezeigt werden sollen.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben wird, wird die Standardanzahl der Einträge anzeigt, die im Browser des Benutzers maximal zulässig ist.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass nur Verzeichnisse des Benutzers in der Dateiauswahloberfläche des Datei-Browsers zur Auswahl stehen sollen. Weitere Einzelheiten und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

    Ursprünglich wurde dies nur für WebKit-basierte Browser entwickelt, aber `webkitdirectory` ist auch in Microsoft Edge sowie Firefox Version 50 und später verwendbar. Obwohl es eine relativ breiten Unterstützung hat, ist es noch nicht Standard und sollte nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM repräsentiert. Auch verfügbar sind jene Methoden, die von den Elternschnittstellen spezifiziert werden, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; anderenfalls zurück `false` und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; anderenfalls zurück `false`, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element aus und (wenn das Ereignis nicht abgebrochen wird), meldet das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, falls der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder Kalender-Datumseingabe) bewirkt diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, falls der Eingabewert des Elements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabefeld auf eine gegebene Zeichenfolge. Ein `selectMode`-Parameter steht zur Verfügung, um zu steuern, wie der vorhandene Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines Text-Eingabefelds aus. Tut nichts bei Eingaben, die nicht als Texteingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Picker für das Eingabefeld an, das normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber ausgelöst durch einen Tastendruck oder eine andere Benutzerinteraktion.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Vermindert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Eingaben, als ersetzte Elemente, haben eine Reihe von Funktionen, die nicht-Formularelementen nicht zugeordnet sind. Es gibt CSS-Selektoren, die Formularelemente basierend auf ihren UI-Funktionen speziell ansprechen können, auch als UI-Pseudoklassen bekannt. Das Eingabeelement kann auch nach Typ mit Attributselektoren angezielt werden. Einige Eigenschaften sind ebenfalls besonders nützlich.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Beschreibungen sehr relevant für das
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
        Jedes aktuell aktivierte Element, das aktiviert (ausgewählt, angeklickt, eingetippt usw.) oder fokussiert werden kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes aktuell deaktivierte Element, das einen aktivierten Zustand hat, das im Übrigen aktiviert (ausgewählt, angeklickt, eingetippt usw.) oder fokussiert werden könnte, wäre es nicht deaktiviert.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element, das nicht vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das aktuell <a href="#placeholder"><code>placeholder</code> Text</a> anzeigt,
        einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elementen mit dem <a href="#placeholder"><code>placeholder</code></a> Attribut, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die der Standard in einer Gruppe von verwandten Elementen sind.
        Passt auf {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die
        beim Seitenladen oder Rendern aktiviert wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt auf {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die
        momentan aktiviert sind (und das ({{HTMLElement("option")}} in einer
        {{HTMLElement("select")}}, die gerade ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente,
        deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle
        Radiobuttons mit demselben Namen im Formular deaktiviert sind, und
        {{HTMLElement("progress")}} Elemente in einem indeterminierten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die Einschränkungsvalidierung angewendet werden kann und die
        momentan gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die Einschränkungsvalidierung angewendet wird und die momentan
        ungültig sind. Passt auf ein Formularelement, dessen Wert nicht den
        Einschränkungen entspricht, die durch seine Attribute festgelegt sind, wie
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attributen und dem <a href="#step"><code>step</code></a> festgelegten Bereich Werte liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a> sortierten Bereiche oder
        nicht den <a href="#step"><code>step</code></a>-Wert entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut hat.
        Nur passt auf Elemente, die erforderlich sein können.
        Das Attribut, das auf ein nicht-erforderliches Element angewendet wird, führt nicht dazu, dass ein Match erzwingen.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder
        {{HTMLElement("textarea")}} Element, das NICHT das <a href="#required"><code>required</code></a> Attribut hat.
        Passt nicht auf Elemente, die nicht erforderlich sein können.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elemente, die aktuell keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlassen aktiviert. Passt
        auf ungültige Eingaben, jedoch nur nach Benutzerinteraktion, wie z.B.
        durch Fokussieren des Steuerelements, Verlassen des Steuerelements oder beim Versuch, das Formular mit dem ungültigen Steuerelement zu senden.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können das Label eines Kontrollkästchens basierend darauf stylen, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}} das direkt nach einer geprüften Eingabe kommt. Wir haben keine Stile angewendet, wenn das `input` nicht geprüft ist.

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

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) zu zielen. CSS-Attributselektoren passen auf Elemente basierend auf entweder nur die Anwesenheit eines Attributs oder den Wert eines gegebenen Attributs.

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

Standardmäßig erscheint der Platzhaltertext halbtransparent oder in hellgrau. Das {{cssxref('::placeholder')}}-Pseudo-Element ist der [`placeholder` Text](#placeholder) der Eingabe. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der begrenzte Satz von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}}-Pseudo-Element angewendet werden, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### appearance

Die {{cssxref("appearance")}}-Eigenschaft ermöglicht das Anzeigen von (fast) jedem Element als plattform-nativer Style basierend
