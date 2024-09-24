---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: bf1775f6305d95ae7c7022922c9cea2ef89212c1
---

{{HTMLSidebar}}

Das **`<input>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerungen für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; je nach Gerät und {{Glossary("user agent")}} sind eine Vielzahl von Eingabedatentypen und Steuerungswidgets verfügbar. Das `<input>`-Element gehört zu den leistungsstärksten und komplexesten in HTML, aufgrund der Vielzahl von Kombinationen von Eingabetypen und Attributen.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## \<input>-Typen

Die Funktionsweise eines `<input>` variiert erheblich, je nachdem, welcher Wert im [`type`](#type)-Attribut angegeben ist, daher werden die verschiedenen Typen auf ihren jeweiligen Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` angenommen.

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
      <td>Ein Kontrollkästchen, das es ermöglicht, einzelne Werte auszuwählen/zu deselektieren.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Eine Steuerung zur Angabe einer Farbe; öffnet einen Farbwähler, wenn er in unterstützenden Browsern aktiv ist.
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
        Öffnet einen Datumsauswähler oder numerische Räder für Jahr, Monat und Tag, wenn er in unterstützenden Browsern aktiv ist.
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
        Eine Steuerung zur Eingabe eines Datums und einer Zeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Räder für Datum- und Zeitkomponenten, wenn er in unterstützenden Browsern aktiv ist.
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
        <code>text</code>-Input, hat aber Validierungsparameter und eine relevante
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
        Eine grafische <code>submit</code>-Taste. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert ist.
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
        Eine Steuerung zur Eingabe einer Zahl. Zeigt einen Spinner und fügt eine Standardvalidierung hinzu.
        Zeigt eine numerische Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Auswahlfeld, das es ermöglicht, einen einzelnen Wert aus mehreren Optionen mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Wird als Schieberegleranzeige dargestellt, die auf den mittleren Wert standardisiert ist.
        Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich gültiger Werte zu definieren.
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
        Eine Taste, die den Inhalt des Formulars auf die Standardwerte zurücksetzt. Nicht empfehlenswert.
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
        automatisch aus dem Eingabewert entfernt. Kann ein Löschsymbol in
        unterstützen Browsern enthalten, das zum Löschen des Feldes verwendet werden kann. Zeigt ein
        Suchsymbol anstelle der Eingabetaste auf einigen Geräten mit dynamischen Tastaturen.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Eine Taste, die das Formular übermittelt.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        Eine Steuerung zur Eingabe einer Telefonnummer. Zeigt eine Telefontastatur
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code> Input, hat
        jedoch Validierungsparameter und eine relevante Tastatur in unterstützenden Browsern
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
        Eine Steuerung zur Eingabe eines Datums, das aus einer Wochennummer und einer Jahrwoche besteht, ohne Zeitzone.
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

Das `<input>`-Element ist aufgrund seiner Attribute so leistungsstark; das [`type`](#type)-Attribut, das in den obigen Beispielen beschrieben wird, ist dabei das wichtigste. Da jedes `<input>`-Element, unabhängig von seinem Typ, auf der Schnittstelle {{domxref("HTMLInputElement")}} basiert, teilen sie technisch das genau gleiche Set von Attributen. In der Realität haben jedoch die meisten Attribute Auswirkungen nur auf eine spezifische Untergruppe von Eingabetypen. Zudem hängt die Art und Weise, wie einige Attribute ein Input beeinflussen, vom Eingabetyp ab, was verschiedene Inputtypen auf unterschiedliche Weise beeinflusst.

Dieser Abschnitt stellt eine Tabelle aller Attribute mit einer kurzen Beschreibung bereit. Diese Tabelle wird von einer Liste begleitet, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie verbunden sind. Jene, die gemeinsam für die meisten oder alle Eingabetypen sind, werden unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind — oder Attribute, die zwar bei allen Eingabetypen verwendet werden können, aber spezielles Verhalten bei einem bestimmten Eingabetyp haben — sind stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes) und zusätzlich:

| Attribut                                   | Typ(en)                                                                 | Beschreibung                                                                 |
| --------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                  | Hinweis für den erwarteten Dateityp in Dateiupload-Steuerelementen                  |
| [`alt`](#alt)                                 | `image`                                                                 | alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                      |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                               | Kontrolliert die automatische Großschreibung in eingegebenem Text.                    |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Buttons                             | Hinweis für die automatische Formularvervollständigungsfunktion                      |
| [`capture`](#capture)                         | `file`                                                                  | Eingabemethode für die Medienaufnahme in Dateiupload-Steuerelementen                  |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                     | Ob der Befehl oder die Kontrolle aktiviert ist                                       |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                       | Name des Formularfeldes zur Übermittlung der Richtung des Elements bei Formulareinreichung |
| [`disabled`](#disabled)                       | alle                                                                     | Ob das Formularelement deaktiviert ist                                               |
| [`form`](#form)                               | alle                                                                     | Verknüpft die Kontrolle mit einem Formularelement                                   |
| [`formaction`](#formaction)                   | `image`, `submit`                                                       | URL zur Verwendung für die Formulareinreichung                                      |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                       | Kodierungstyp für den Formulardatensatz, der für die Formulareinreichung verwendet wird |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                       | HTTP-Methode zur Formulareinreichung                                                 |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                       | Umgehen der Formularsteuerungsvalidierung für die Formulareinreichung               |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                       | Browsing-Kontext für die Formulareinreichung                                        |
| [`height`](#height)                           | `image`                                                                 | Wie das `height`-Attribut für {{htmlelement('img')}}; vertikale Ausdehnung         |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Buttons      | Wert des `id`-Attributes des {{htmlelement('datalist')}} der Autovervollständigungsoptionen |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Maximale Wert                                                                       |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Maximale Länge (Anzahl der Zeichen) des `value`                                     |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Minimale Wert                                                                       |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Minimallänge (Anzahl der Zeichen) des `value`                                       |
| [`multiple`](#multiple)                       | `email`, `file`                                                         | Boolean. Ob mehrere Werte erlaubt sind                                              |
| [`name`](#name)                               | alle                                                                     | Name der Formularsteuerung. Wird mit dem Formular als Teil eines Namens/Wert-Paars übermittelt |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                     | Muster, das `value` erfüllen muss, um gültig zu sein                                |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`           | Text, der im Formularelement angezeigt wird, wenn noch kein Wert festgelegt ist     |
| [`popovertarget`](#popovertarget)             | `button`                                                                | Bezeichnet ein `<input type="button">` als Steuerung für ein Popover-Element        |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                | Gibt die Aktion an, die eine Popover-Steuerung ausführen soll                       |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolean. Der Wert ist nicht editierbar                                              |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss aktiviert sein, damit das Formular übermittelt werden kann |
| [`size`](#size)                               | `text`, `search`, `url`, `tel`, `email`, `password`                     | Größe der Steuerung                                                                 |
| [`src`](#src)                                 | `image`                                                                 | Wie das `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource       |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Inkrementelle Werte, die gültig sind                                                |
| [`type`](#type)                               | alle                                                                     | Typ der Formularsteuerung                                                           |
| [`value`](#value)                             | alle außer `image`                                                      | Der Wert der Steuerung. Wenn in HTML angegeben, entspricht er dem Anfangswert       |
| [`width`](#width)                             | `image`                                                                 | Wie das `width`-Attribut für {{htmlelement('img')}}                                  |

Einige zusätzliche nicht standardmäßige Attribute sind im Anschluss an die Beschreibungen der Standardattribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Gültig nur für den `file`-Eingabetyp. Das `accept`-Attribut definiert, welche Dateitypen in einem `file`-Upload-Steuerelement ausgewählt werden können. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alt`

  - : Gültig nur für den `image`-Button. Das `alt`-Attribut gibt alternativen Text für das Bild an und zeigt den Wert des Attributs an, wenn das Bild [`src`](#src) fehlt oder auf andere Weise nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`

  - : Kontrolliert, ob eingegebener Text automatisch großgeschrieben wird und falls ja, in welcher Weise. Weitere Informationen finden Sie auf der globalen Attributseite zum [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge, die beschreibt, welchen Typ von Autovervollständigungsfunktionalität das Eingabeelement bereitstellen soll. Eine typische Implementierung der Autovervollständigung erinnert sich an zuvor eingegebene Werte in demselben Eingabefeld, aber es können auch komplexere Formen der Autovervollständigung existieren. Beispielsweise könnte ein Browser in ein Kontaktverzeichnis eines Geräts integrieren, um `email`-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Zugelassene Werte finden Sie unter [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values).

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben. Es ist für alle Eingabetypen gültig, außer `checkbox`, `radio`, `file` oder irgendeine der Buttonarten.

    Weitere Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` sich bei `hidden` leicht von anderen Eingabetypen unterscheidet, finden Sie beim [`autocomplete`-Attribut](/de/docs/Web/HTML/Attributes/autocomplete).

- `autofocus`

  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass das Eingabeelement automatisch den Fokus erhalten sollte, wenn die Seite geladen ist (oder wenn das {{HTMLElement("dialog")}}, das das Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann Fokus erhalten, bevor das {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element gesetzt ist, erhält das erste Element mit diesem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht bei Eingabeelementen vom Typ `hidden` verwendet werden, da verborgene Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Ein automatisch fokussiertes Steuerelement kann Menschen mit Sehbehinderung, die Screen-Reader-Technologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportiert" ein Screen-Reader seinen Benutzer ohne Vorwarnung zum Formularelement.

    Verwenden Sie das `autofocus`-Attribut mit Vorsicht in Bezug auf Barrierefreiheit. Automatisches Fokussieren auf eine Kontrolle kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch bewirken, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Ein Screen-Reader wird das Label des fokussierten Formularelements ansagen, jedoch nichts davor ansagen, und der sehende Benutzer auf einem kleinen Gerät wird ebenso den Zusammenhang, der durch den vorhergehenden Inhalt geschaffen wurde, verpassen.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den `file`-Eingabetyp. Das `capture`-Attribut definiert, welches Medium—Mikrofon, Video oder Kamera—zur Aufnahme einer neuen Datei verwendet werden soll, die mit dem `file`-Upload-Steuerelement in unterstützenden Szenarien hochgeladen wird. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`

  - : Gültig für `radio`- und `checkbox`-Typen. `checked` ist ein Boolean-Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass der Radio-Button der momentan ausgewählte in der Gruppe von gleichnamigen Radio-Buttons ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite lädt). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: wenn sich der Status des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`-'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen werden der Name und der Wert eines ausgewählten Kontrollkästchens oder Radio-Buttons nur dann in die eingereichten Daten aufgenommen, wenn sie derzeit `checked` sind.
    >
    > Wenn zum Beispiel ein Kontrollkästchen dessen `name` `fruit` ist, den `value` `cherry` hat und das Kontrollkästchen aktiviert ist, werden die Formulardaten, die eingereicht werden, `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es in den Formulardaten überhaupt nicht aufgelistet. Der Standardwert für Kontrollkästchen und Radio-Buttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email`-Eingabetypen. Das `dirname`-Attribut ermöglicht die Übermittlung der Richtungseigenschaft des Elements. Bei Aufnahme wird die Formularkontrolle mit zwei Namens/Wert-Paaren übermittelt: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name mit einem Wert von `ltr` or `rtl`, das vom Browser festgelegt wird.

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

    Wenn das obige Formular eingereicht wird, bewirkt die Eingabe, dass sowohl das `name` / `value`-Paar `fruit=cherry` als auch das `dirname` / Richtungs-Paar `fruit-dir=ltr` gesendet werden.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer nicht in der Lage sein sollte, mit der Eingabe zu interagieren. Deaktivierte Eingaben werden typischerweise mit einer blasseren Farbe oder einer anderen Form der Indikation gerendert, dass das Feld nicht verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben das {{domxref("Element/click_event", "click")}}-Ereignis nicht, und deaktivierte Eingaben werden nicht mit dem Formular eingereicht.

    > [!NOTE]
    > Obwohl es nicht von der Spezifikation gefordert wird, wird Firefox standardmäßig [den dynamischen deaktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinaus beibehalten. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- `form`

  - : Ein Zeichenfolgenwert, der das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verbunden ist (also der **Formularbesitzer**). Dieser Zeichenfolgenwert, falls vorhanden, muss mit dem [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Falls dieses Attribut nicht angegeben ist, ist das `<input>`-Element mit dem nächstgelegenen enthaltenen Formular verknüpft, sofern vorhanden.

    Das `form`-Attribut ermöglicht es, eine Eingabe überall im Dokument zu platzieren, wird jedoch bei Formulareinschlüssen im Dokument eingeschlossen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft sein.

- `formaction`
  - : Gültig nur für die `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formenctype`
  - : Gültig nur für die `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formmethod`
  - : Gültig nur für die `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formnovalidate`
  - : Gültig nur für die `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formtarget`
  - : Gültig nur für die `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `height`
  - : Gültig nur für den `image`-Button. Die `height` ist die Höhe der Bilddatei, die angezeigt wird, um den grafischen Sende-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.
- `id`
  - : Globales Attribut gültig für alle Elemente, einschließlich aller Eingabetypen. Es definiert eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element bei der Verlinkung zu identifizieren. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um das Label mit der Formularkontrolle zu verlinken. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert gültig für alle Elemente. Er bietet einen Hinweis für die Browser auf die Art der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seines Inhalts zu verwenden ist. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der dem `list`-Attribut gegebene Wert sollte das {{domxref("Element.id", "id")}} eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements sein. Das `<datalist>` bietet eine Liste vorab definierter Werte, die dem Benutzer als Vorschläge für diese Eingabe zu bieten sind. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vorab definierten Liste auswählen oder einen anderen Wert bereitstellen.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Gemäß den Spezifikationen wird das `list`-Attribut nicht vom `hidden`, `password`, `checkbox`, `radio`, `file` oder einer der Buttonarten unterstützt.

    Abhängig vom Browser kann der Benutzer möglicherweise eine benutzerdefinierte Farbpalette vorgeschlagen sehen, Markierungen entlang eines Bereichs erhalten oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber für Nicht-gelistete Werte erlaubt. Prüfen Sie die [Browserverträglichkeitstabelle](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für die anderen Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`. Es definiert den größten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) diesen Wert überschreitet, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributes keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (wie bei Datumsangaben oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was bedeutet, dass der Bereich eventuell umgeschlagen wird; dies erlaubt es Ihnen, einen Zeitraum von 10 Uhr abends bis 4 Uhr morgens anzugeben.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`. Es definiert die maximale Zeichenanzahl (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzähliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben oder ein ungültiger Wert festgelegt ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem durch `minlength` festgelegten Wert sein.

    Die Eingabe wird [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes größer als `maxlength` UTF-16-Codeeinheiten ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das `maxlength`-Attribut erlaubt ist. Constraint-Validierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`. Es definiert den niedrigsten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) kleiner ist als dieser, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des `min`-Attributes keine Zahl ist, hat das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributes sein. Wenn das `min`-Attribut vorhanden ist, aber nicht spezifiziert oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nichtleerer Wert kleiner ist als das durch das `min`-Attribut erlaubte Minimum, verhindert die Constraint-Validierung die Formulareinreichung. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (wie bei Datumsangaben oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was bedeutet, dass der Bereich eventuell umgeschlagen wird; dies erlaubt es Ihnen, einen Zeitraum von 10 Uhr abends bis 4 Uhr morgens anzugeben.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`. Es definiert die minimale Zeichenanzahl (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` spezifizierten Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert festgelegt ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe wird [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger Zeichen hat als `minlength` UTF-16-Codeeinheiten, was die Formulareinreichung verhindert. Constraint-Validierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolean-Attribut `multiple`, falls gesetzt, bedeutet, dass der Benutzer durch Kommas getrennte E-Mail-Adressen im E-Mail-Widget eingeben kann oder mehr als eine Datei mit der `file`-Eingabe auswählen kann. Siehe den {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `name`

  - : Ein Zeichenfolgenwert, der einen Namen für die Steuerung festlegt. Dieser Name wird zusammen mit dem Wert der Steuerung übermittelt, wenn die Formulardaten gesendet werden.

    Betrachten Sie den `name` als ein erforderliches Attribut (obwohl es das nicht ist). Wenn eine Eingabe kein angegebenes `name` hat oder das `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, nicht ausgewählte Radio-Buttons, nicht aktivierte Kontrollkästchen und Zurückstelltasten werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn es als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch vom {{Glossary("user agent")}} auf die Zeichencodierung eingestellt, die für die Formulareinreichung verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erzeugt ein einzigartiges Verhalten für Radio-Buttons.

    Es kann nur ein Radio-Button in einer gleichnamigen Gruppe von Radio-Buttons zur gleichen Zeit aktiviert werden. Durch Auswahl eines beliebigen Radio-Buttons in dieser Gruppe wird automatisch jeder derzeit ausgewählte Radio-Button derselben Gruppe abgewählt. Der Wert dieses einen ausgewählten Radio-Buttons wird zusammen mit dem Namen übermittelt, wenn das Formular eingereicht wird,

    Beim Tabbing in eine Serie von gleichnamigen Radio-Buttons, wenn einer ausgewählt ist, bekommt dieser den Fokus. Wenn sie nicht gruppiert in Quellcode-Reihenfolge sind, wenn einer der Gruppe ausgewählt ist, beginnt das Tabben in die Gruppe, wenn der erste in der Gruppe erreicht wird, überspringt alle, die nicht ausgewählt sind. Mit anderen Worten, wenn einer ausgewählt ist, wird das Tabben die nicht ausgewählten Radio-Buttons in der Gruppe überspringen. Wenn keiner ausgewählt ist, erhält die Radio-Button-Gruppe den Fokus, wenn der erste Button in der gleichnamigen Gruppe erreicht wird.

    Wenn ein Eingabefeld einen `name` hat, wird dieser Name zu einer Eigenschaft der zugehörigen Formularelement-{{domxref("HTMLFormElement.elements")}}-Eigenschaft. Wenn Sie ein Eingabeelement haben, dessen `name` auf `guest` gesetzt ist und ein anderes, dessen `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das {{domxref("HTMLInputElement")}} für das `guest`-Feld sein, und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer eingebauten Eigenschaft des Formulars entspricht, da Sie ansonsten die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabeelement überschreiben.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`. Das `pattern`-Attribut wird verwendet, um einen regulären Ausdruck zu kompilieren, mit dem der `value` des Eingabeelements übereinstimmen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}} verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert wird. Keine Schrägstriche sollten um den Musterausdruck spezifiziert werden. Wenn der reguläre Ausdruck kompiliert wird:

    1. wird das Muster implizit mit `^(?:` und `)$` eingeschlossen, sodass die Übereinstimmung auf den _gesamten_ Eingabewert gefordert wird, d.h. `^(?:<pattern>)$`.
    2. das `'v'`-Flag ist spezifiziert, sodass das Muster als Abfolge von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden, aber nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet und das Attribut wird vollständig ignoriert. Wenn das Muster-Attribut gültig ist und ein nicht-leerer Wert nicht dem Muster entspricht, verhindert die Constraint-Validierung die Formulareinreichung. Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck mit jedem durch Kommas getrennten Wert verglichen.

    > [!NOTE]
    > Bei Verwendung des `pattern`-Attributs sollte der Benutzer über das erwartete Format informiert werden, indem erklärender Text in der Nähe eingefügt wird. Sie können auch ein [`title`](#title)-Attribut einfügen, um zu erklären, was die Anforderungen sind, um mit dem Muster übereinzustimmen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`. Das `placeholder`-Attribut bietet einen kurzen Hinweis für den Benutzer, welche Art von Informationen in dem Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der einen Hinweis auf die erwartete Art der Daten gibt, anstatt eine Erklärung oder Eingabeaufforderung. Der Text _darf nicht_ Umbrüche oder Zeilenvorschübe enthalten. Wenn z.B. ein Feld erwartet, den Vornamen eines Benutzers zu erfassen, und sein Label "Vorname" ist, könnte ein geeigneter Platzhalter "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erläutern, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Labels](#labels).

- `popovertarget`

  - : Wandelt ein `<input type="button">`-Element in einen Popover-Steuerungsknopf um; nimmt die ID des zu steuernden Popover-Elements als seinen Wert. Weitere Details finden Sie auf der {{domxref("Popover API", "Popover API", "", "nocode")}}-Landingpage.

- `popovertargetaction`

  - : Gibt die auf einem gesteuerten Popover-Element auszuführende Aktion an, die durch ein Steuerungs-<input type="button">` ausgeführt wird. Mögliche Werte sind:

    - `"hide"`
      - : Der Knopf blendet ein angezeigtes Popover aus. Wenn Sie versuchen, ein bereits ausgeblendetes Popover auszublenden, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Knopf zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Knopf wechselt ein Popover zwischen Anzeige und Verstecken. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerungsknopf ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer den Wert der Eingabe nicht ändern kann. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Weitere Informationen finden Sie im [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das besitzende Formular abgeschickt werden kann. Das `required`-Attribut wird von den Eingaben `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation) und im [HTML-Attribut: `required`](/de/docs/Web/HTML/Attributes/required).

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url` und `text`, gibt das `size`-Attribut an, wie viel der Eingabe angezeigt werden soll. Es erstellt im Wesentlichen dasselbe Ergebnis, als wenn die CSS-{{cssxref("width")}}-Eigenschaft mit nur wenigen Besonderheiten festgelegt wird. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere ist es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang gegenüber dem `size`-Attribut.

- `src`

  - : Gültig nur für die `image`-Eingabetaste. Das `src` ist eine Zeichenkette, die die URL der Bilddatei angibt, die angezeigt werden soll, um die grafische Sende-Taste darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`. Das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert gebunden ist.

    Falls nicht ausdrücklich angegeben:

    - `step` standardmäßig auf 1 für `number` und `range`.
    - Jeder Datums-/Zeiteingabetyp hat einen Standardwert für `step`, der für den Typ geeignet ist. Weitere Details finden Sie auf den einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step) und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl—ganzzahlige oder float—oder der spezielle Wert `any` sein, was bedeutet, dass kein Schritt impliziert wird und jeder Wert erlaubt ist (unter Ausschluss anderer Beschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht ausdrücklich gesetzt ist, sind gültige Werte für die `number`, Datums-/Zeit-Eingabetypen und `range` Eingabetypen vergleichbar mit der Basis für die Schritte — dem [`min`](#min)-Wert und Inkrementen des step-Wertes bis zum [`max`](#max)-Wert, falls angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann sind nur gerade Ganzzahlen, `10` oder höher, gültig. Wenn weggelassen, `<input type="number">`, sind Ganzzahlen gültig, aber Floats (wie `4.2`) sind nicht gültig, da `step` standardmäßig auf `1` gesetzt ist. Damit `4.2` gültig ist, hätte `step` auf `any`, 0.1, 0.2, oder irgendein `min`-Wert auf eine Zahl mit `.2`, wie `<input type="number" min="-5.2">`, gesetzt sein müssen.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht mit der Schritt-Konfiguration übereinstimmen, wird der Wert in der Constraint-Validierung als ungültig betrachtet und stimmt mit der `:invalid`-Pseudoklasse überein.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

- `tabindex`

  - : Globales Attribut, das gültig für alle Elemente ist, einschließlich aller Eingabetypen. Es ist ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus aufnehmen kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen sollte. Da alle Eingabetypen außer für den Eingabetyp `hidden` fokussierbar sind, sollte dieses Attribut nicht auf Formularelementen verwendet werden, da dies die Verwaltung der Fokus-Reihenfolge für alle Elemente im Dokument erforderlich machen würde, mit dem Risiko, die Nutzbarkeit und Zugänglichkeit zu beeinträchtigen, wenn es falsch gemacht wird.

- `title`

  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen. Es enthält einen Text, der Hinweise zur Beratung gibt, die sich auf das Element beziehen, zu dem es gehört. Diese Informationen können typischerweise, jedoch nicht unbedingt, als Tooltip dem Benutzer dargestellt werden. Der Titel sollte NICHT als die primäre Erklärung des Zwecks der Formularkontrolle verwendet werden. Stattdessen sollte das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id) der Formularkontrolle gesetzt ist, verwendet werden. Siehe [Labels](#labels) unten.

- `type`

  - : Eine Zeichenkette, die den Typ der zu rendernden Steuerung angibt. Zum Beispiel, um eine CheckBox zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet, wodurch ein Klartext-Eingabefeld erstellt wird.

    Zulässige Werte sind in [Inputtypen](#input_types) oben aufgeführt.

- `value`

  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Anfangswert, und von da an kann es jederzeit mit JavaScript geändert oder abgerufen werden, indem auf die jeweilige {{domxref("HTMLInputElement")}}-Wertseigenschaft zugegriffen wird. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`

  - : Gültig nur für die `image`-Eingabetaste. Die `width` ist die Breite der Bilddatei, die angezeigt wird, um die grafische Sende-Taste darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind auch in einigen Browsern verfügbar. Grundsätzlich sollten Sie deren Nutzung vermeiden, es sei denn, es ist unvermeidlich.

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
        Eine Zeichenkette, die angibt, ob die automatische Korrektur <code>on</code> oder <code>off</code> ist. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#incremental"><code>incremental</code></a></td>
      <td>
        Ob die Wiederholung von {{domxref("HTMLInputElement/search_event", "search")}}
        Ereignissen erlaubt ist, um Live-Suchergebnisse zu aktualisieren, während der Benutzer noch den Wert des Eingabefeldes bearbeitet.
        <strong>WebKit und Blink nur (Safari, Chrome, Opera usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenkette, die angibt, welche Art von Aktion ergriffen wird, wenn der Benutzer die <kbd>Enter</kbd> – oder <kbd>Return</kbd>-Taste gedrückt hält, während das
          Feld bearbeitet wird; dies wird verwendet, um das entsprechende Label für diese Taste auf einer
          virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, nutzen Sie stattdessen <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Ausrichtung des Schiebereglers fest. <strong>Nur Firefox.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Elementen, die im Dropdown-Menü der vorherigen Suchabfragen angezeigt werden sollten. <strong>Nur Safari.</strong>
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

- `autocorrect` {{non-standard_inline}}

  - : (Safari nur). Eine Zeichenkette, die angibt, ob die automatische Korrektur während der Bearbeitung dieses Feldes aktiviert sein soll. Erlaubte Werte sind:

    - `on`
      - : Aktiviert die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textsubstitutionen, wenn welche konfiguriert sind.
    - `off`
      - : Deaktiviert die automatische Korrektur und Textsubstitutionen.

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome, usw.), das, falls vorhanden, den {{Glossary("user agent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Eingabefeldes bearbeitet, sendet der Benutzeragent {{domxref("HTMLInputElement/search_event", "search")}}-Ereignisse an das {{domxref("HTMLInputElement")}}-Objekt, das das Suchfeld darstellt. Dies ermöglicht, den Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das {{domxref("HTMLInputElement/search_event", "search")}}-Ereignis nur gesendet, wenn der Benutzer eine Suche explizit initiiert (z. B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

    Das `search`-Ereignis ist rate-limitiert, sodass es nicht häufiger gesendet wird als ein implementierungsdefiniertes Intervall.

- `orient` {{non-standard_inline}}

  - : Ähnlich wie die nicht-standardmäßige CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente beeinflusst, definiert das Attribut `orient` die Ausrichtung des Schiebereglers. Werte umfassen `horizontal`, was bedeutet, dass der Schieberegler horizontal gerendert wird, und `vertical`, wo der Schieberegler vertikal gerendet wird. Weitere Details zum Erstellen von vertikalen Formularelementen finden Sie unter [Creating vertical form controls](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls).

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü des `<input>`-Elements vorheriger Suchabfragen angezeigt wird.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben ist, wird die maximale Anzahl der Einträge standardmäßig auf die Anzahl des Browsers gesetzt.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass nur Verzeichnisse von Benutzern im Dateiauswahlfenster ausgewählt werden können. Weitere Details und Beispiele finden Sie unter {{domxref("HTMLInputElement.webkitdirectory")}}.

    Auch wenn es ursprünglich implementiert wurde, um nur mit WebKit-basierten Browsern zu arbeiten, kann `webkitdirectory` mittlerweile auch mit Microsoft Edge sowie Firefox 50 und später verwendet werden. Trotz seiner relativ breiten Unterstützung ist es immer noch nicht standardisiert und sollte daher nach Möglichkeit nicht verwendet werden.

## Methoden

Die folgenden Methoden werden von der {{domxref("HTMLInputElement")}}-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Auch diejenigen Methoden, die von den übergeordneten Schnittstellen angegeben werden, {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}} und {{domxref("EventTarget")}}.

- {{domxref("HTMLInputElement.checkValidity", "checkValidity()")}}
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; gibt andernfalls `false` zurück und löst ein {{domxref("HTMLInputElement.invalid_event", "invalid")}}-Ereignis beim Element aus.
- {{domxref("HTMLInputElement.reportValidity", "reportValidity()")}}
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; gibt andernfalls `false` zurück, löst ein {{domxref("HTMLInputElement.invalid_event", "invalid")}}-Ereignis beim Element aus und meldet das Problem dem Benutzer, sofern das Ereignis nicht abgebrochen wird.
- {{domxref("HTMLInputElement.select", "select()")}}
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder ein Datumseingabefeld) macht diese Methode nichts.
- {{domxref("HTMLInputElement.setCustomValidity", "setCustomValidity()")}}
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabefeld auf eine gegebene Zeichenfolge. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der bestehende Inhalt beeinflusst wird.
- {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
  - : Wählt den angegebenen Zeichenbereich innerhalb eines Text-Eingabefeldes aus. Macht nichts für Eingaben, die nicht als Texteingabefelder angezeigt werden.
- {{domxref("HTMLInputElement.showPicker", "showPicker()")}}
  - : Zeigt den Browser-Auswahlmechanismus für das Eingabefeld an, das normalerweise angezeigt würde, wenn das Element ausgewählt wird, aber über einen Buttonklick oder eine andere Benutzerinteraktion ausgelöst wird.
- {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Eingaben, die ersetzte Elemente sind, haben einige Merkmale, die auf nicht-formularelementen nicht anwendbar sind. Es gibt CSS-Selektoren, die Formularelemente basierend auf ihren UI-Funktionen gezielt ansprechen können, auch bekannt als UI-Pseudoklassen. Das Eingabeelement kann auch nach Typ mit Attributselektoren gezielt werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Bildunterschriften passend zum
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
        hineinschreiben, usw.) oder den Fokus akzeptieren kann und auch einen deaktivierten Zustand hat, in
        dem es nicht aktiviert oder den Fokus akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es
        ansonsten aktiviert (ausgewählt, angeklickt, hineinschreiben usw.) werden könnte oder
        den Fokus akzeptieren könnte, wenn es nicht deaktiviert wäre.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element, das vom Benutzer nicht editierbar ist</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer editierbar ist.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt,
        einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut vorhanden, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die der Standard in einer Gruppe verwandter Elemente sind.
        Stimmt mit {{HTMLElement("input/checkbox", "checkbox")}}- und
        {{HTMLElement("input/radio", "radio")}}-Eingabetypen überein, die
        beim Laden der Seite oder Rendern ausgewählt wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Stimmt mit {{HTMLElement("input/checkbox", "checkbox")}}- und
        {{HTMLElement("input/radio", "radio")}}-Eingabetypen überein, die
        derzeit ausgewählt sind (und das ({{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente,
        deren unbestimmte Eigenschaft durch JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle
        Radio-Buttons mit demselben Namenswert im Formular nicht ausgewählt sind, und
        {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, die eine Constraint-Validierung haben können und
        derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, die eine Constraint-Validierung haben und derzeit
        nicht gültig sind. Stimmt mit einem Formularelement überein, dessen Wert nicht den
        von seinen Attributen gesetzten Einschränkungen entspricht, wie
        z.B. <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht leeres Eingabefeld, dessen aktueller Wert innerhalb der Bereichsgrenzen
        liegt, die durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>-Attribute und den <a href="#step"><code>step</code></a> festgelegt sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht leeres Eingabefeld, dessen aktueller Wert NICHT innerhalb der Bereichsgrenzen liegt,
        spezifiziert durch die <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a> Attribute oder
        entspricht nicht der <a href="#step"><code>step</code></a>-Beschränkung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}- oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Stimmt nur mit Elementen überein, die erforderlich sein können.
        Das Attribut auf einem nicht-erforderlichen Element wird keine Übereinstimmung hervorrufen.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}- oder
        {{HTMLElement("textarea")}}-Element, das NICHT das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Stimmt nicht mit Elementen überein, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch bei einem Blur-Ereignis aktiviert. Passt
        zu ungültigen Eingaben, aber nur nach der Benutzerinteraktion, beispielsweise durch Fokussieren
        auf die Steuerung, Verlassen der Steuerung oder Versuch, das Formular
        mit der ungültigen Steuerung zu übermitteln.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können einen Kontrollkästchenbezeichner basierend darauf stylen, ob das Kontrollkästchen ausgecheckt ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einer überprüften Eingabe erscheint. Wir haben keine Stile angewendet, wenn das `input` nicht überprüft ist.

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

Es ist möglich, verschiedene Typen von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) zu targetieren. CSS-Attributselektoren stimmen Elemente basierend auf entweder nur dem Vorhandensein eines Attributs oder dem Wert eines gegebenen Attributs ab.

```css
/* passt auf eine Passworteingabe */
input[type="password"] {
}

/* passt auf eine Formulareingabe, deren gültige Werte auf einen Bereich beschränkt sind */
input[min][max] {
}

/* passt auf eine Formulareingabe mit einem Musterattribut */
input[pattern] {
}
```

### ::placeholder

Standardmäßig erscheint der Platzhaltertext in einem durchscheinenden oder hellgrauen Ton. Das {{cssxref('::placeholder')}}-Pseudoelement ist der [`placeholder`-Text](#placeholder) des Eingabefeldes. Es kann
