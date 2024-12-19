---
title: "<input>: Das HTML-Eingabeelement"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<input>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerungen für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren. Eine Vielzahl von Dateneingabetypen und Steuerelementen steht zur Verfügung, abhängig vom Gerät und dem {{Glossary("user_agent", "User-Agent")}}. Das `<input>`-Element ist eines der leistungsstärksten und komplexesten in ganz HTML aufgrund der schieren Anzahl an Kombinationen von Eingabetypen und Attributen.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## \<input> Typen

Wie ein `<input>` funktioniert, variiert erheblich abhängig vom Wert des [`type`](#type)-Attributs, weshalb die verschiedenen Typen in ihren eigenen separaten Referenzseiten behandelt werden. Wenn dieses Attribut nicht angegeben ist, ist der Standardtyp `text`.

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
        Eine Schaltfläche ohne voreingestelltes Verhalten, die den Wert des <a href="#value"><code>value</code></a>-Attributs anzeigt, standardmäßig leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Kontrollkästchen, das es ermöglicht, einzelne Werte auszuwählen/abwuwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerelement zur Farbauswahl; öffnet bei unterstützenden Browsern einen Farbwähler.
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
        Ein Steuerelement zur Eingabe eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumsauswahlkalender oder numerische Räder für Jahr, Monat, Tag bei unterstützenden Browsern.
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
        Ein Steuerelement zur Eingabe eines Datums und einer Uhrzeit ohne Zeitzone. Öffnet einen Datumsauswahlkalender oder numerische Räder für Datums- und Uhrzeitkomponenten bei unterstützenden Browsern.
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
        <code>text</code>-Eingabe, hat jedoch Validierungsparameter und eine relevante
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
        Ein Steuerelement, das dem Benutzer ermöglicht, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Dateitypen zu definieren, die das Steuerelement auswählen kann.
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
        Ein Steuerelement, das nicht angezeigt wird, dessen Wert jedoch an den
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
        Eine grafische <code>submit</code>-Schaltfläche. Zeigt ein Bild, das durch das <code>src</code>-Attribut definiert wird, an.
        Das <a href="#alt"><code>alt</code></a>-Attribut wird angezeigt, falls das Bild <a href="#src"><code>src</code></a> fehlt.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>Ein Steuerelement zur Eingabe eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerelement zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt eine Standardvalidierung hinzu. Zeigt auf einigen Geräten mit dynamischen Keypads eine numerische Tastatur an.
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
        Einzeiliges Textfeld, dessen Wert verborgen ist.
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
        Ein Optionsfeld, das es ermöglicht, einen einzelnen Wert aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Ein Steuerelement zur Eingabe einer Zahl, deren exakten Wert unwichtig ist.
        Wird als Bereichs-Widget angezeigt, das standardmäßig den Mittelwert zeigt.
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
        Ein einzeiliges Textfeld für die Eingabe von Suchbegriffen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern ein Löschsymbol beinhalten, das zum Leeren des Feldes verwendet werden kann. Zeigt auf einigen Geräten mit dynamischen Keypads ein Suchsymbol anstelle der Eingabetaste.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Eine Schaltfläche, die das Formular einreicht.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        Ein Steuerelement zur Eingabe einer Telefonnummer. Zeigt eine Telefonnumerntastatur auf einigen Geräten mit dynamischen Keypads an.
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
      <td>Ein Steuerelement zur Eingabe eines Zeitwertes ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code>-Eingabe, hat jedoch Validierungsparameter und eine relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerelement zur Eingabe eines Datums bestehend aus einer Jahr-Woche-Zahl und einer Wochenzahl ohne Zeitzone.
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
        Ein Steuerelement zur Eingabe eines Datums und einer Zeit (Stunde, Minute, Sekunde, und Bruchteile einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so leistungsstark wegen seiner Attribute; das [`type`](#type)-Attribut, das mit Beispielen oben beschrieben wurde, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf dem [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interface basiert, teilen sie technisch dasselbe Set an Attributen. In Wirklichkeit haben jedoch die meisten Attribute nur auf eine bestimmte Teilmenge von Eingabetypen Auswirkungen. Außerdem beeinflussen einige Attribute eine Eingabe je nach Eingabetyp unterschiedlich.

Dieser Abschnitt bietet eine Tabelle mit allen Attributen sowie einer kurzen Beschreibung. Anschließend folgt eine Liste, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie verknüpft sind. Attribute, die für die meisten oder alle Eingabetypen gemeinsam sind, werden unten detailliert definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind – oder Attribute, die für alle Eingabetypen gemeinsam sind, aber ein spezielles Verhalten bei bestimmten Eingabetypen haben – sind stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element beinhalten die [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes) und zusätzlich:

| Attribut                                     | Typ(en)                                                                | Beschreibung                                                                            |
| --------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis für erwartete Dateitypen in Datei-Upload-Kontrollen                              |
| [`alt`](#alt)                                 | `image`                                                                | Alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                         |
| [`autocapitalize`](#autocapitalize)           | Alle außer `url`, `email` und `password`                               | Steuert die automatische Großschreibung in eingegebenem Text.                           |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                       | Hinweis für die Auto-Ausfüll-Funktion des Formulars                                      |
| [`capture`](#capture)                         | `file`                                                                 | Medieneingabemethode bei Datei-Upload-Kontrollen                                         |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Ob der Befehl oder die Steuerung geprüft ist                                             |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfeldes zum Senden der Richtungseinstellung des Elements in der Formularübermittlung |
| [`disabled`](#disabled)                       | alle                                                                   | Ob die Formularsteuerung deaktiviert ist                                                 |
| [`form`](#form)                               | alle                                                                   | Verknüpft die Steuerung mit einem Formularelement                                        |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL, die für die Formularübermittlung verwendet werden soll                              |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Kodierungstyp des Formulardatensatzes für die Formularübermittlung                       |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | HTTP-Methode, die für die Formularübermittlung verwendet werden soll                     |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Überspringt die Formularsteuerungsvalidierung für die Formularübermittlung               |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browsing-Kontext für die Formularübermittlung                                            |
| [`height`](#height)                           | `image`                                                                | Gleich wie das Höhenattribut für {{htmlelement('img')}}; vertikale Dimension             |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen | Wert des id-Attributs der {{htmlelement('datalist')}} mit Autovervollständigung          |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Maximalwert                                                                              |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Länge (Anzahl der Zeichen) von `value`                                          |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Minimalwert                                                                              |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Länge (Anzahl der Zeichen) von `value`                                          |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolean. Ob mehrere Werte erlaubt sind                                                   |
| [`name`](#name)                               | alle                                                                   | Name der Formularsteuerung. Wird mit dem Formular als Teil eines Name/Wert-Paares übermittelt    |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, das `value` erfüllen muss, um gültig zu sein                                    |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der im Formularsteuerfeld angezeigt wird, wenn kein Wert gesetzt ist               |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Bezeichnet ein `<input type="button">` als Steuerungselement für ein Popover-Element      |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt an, welche Aktion ein Popover-Steuerelement ausführen soll                          |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht editierbar                                                   |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                | Boolean. Ein Wert ist erforderlich oder muss geprüft werden, um das Formular absendbar zu machen |
| [`size`](#größe)                               | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe der Steuerung                                                                     |
| [`src`](#src)                                 | `image`                                                                | Gleich wie das `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource      |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Inkrementelle Werte, die gültig sind                                                     |
| [`type`](#type)                               | alle                                                                   | Typ der Formularsteuerung                                                               |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert der Steuerung. Wenn in HTML angegeben, entspricht dies dem Anfangswert          |
| [`width`](#width)                             | `image`                                                                | Gleich wie das `width`-Attribut für {{htmlelement('img')}}                               |

Einige zusätzliche nicht-standardisierte Attribute sind in den Beschreibungen der standardisierten Attribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Nur gültig für den Eingabetyp `file`, das `accept`-Attribut definiert, welche Dateitypen in einer `file`-Upload-Kontrolle ausgewählt werden können. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`

  - : Nur gültig für die `image`-Schaltfläche, das `alt`-Attribut stellt alternativen Text für das Bild bereit, der den Wert des Attributs anzeigt, wenn das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und wenn ja, in welcher Weise. Weitere Informationen finden Sie auf der globalen Attributseite von [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette an, die beschreibt, welche Art von Autovervollständigungsfunktionalität, falls vorhanden, das Eingabefeld bereitstellen soll. Eine typische Implementierung von Autovervollständigung merkt sich vorher in demselben Eingabefeld eingegebene Werte, aber komplexere Formen der Autovervollständigung können existieren. Beispielsweise könnte ein Browser mit der Kontaktliste eines Geräts interagieren, um `email`-Adressen in einem E-Mail-Eingabefeld automatisch zu komplettieren. Siehe [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values) für erlaubte Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, es ist gültig für alle Eingabetypen außer `checkbox`, `radio`, `file` oder jede der Schaltflächentypen.

    Weitere Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` leicht unterschiedlich für `hidden` im Vergleich zu anderen Eingabetypen ist, finden Sie im [`autocomplete` attribute](/de/docs/Web/HTML/Attributes/autocomplete).

- `autofocus`

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass das Eingabefeld automatisch den Fokus erhalten soll, wenn die Seite fertig geladen ist (oder wenn das {{HTMLElement("dialog")}}-Element angezeigt wird).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut besitzen. Wenn es mehr als einem Element zugewiesen wird, erhält das erste Element mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht bei Eingaben des Typs `hidden` verwendet werden, da versteckte Eingabefelder nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren einer Formularsteuerung kann Personen mit Sehbeeinträchtigungen, die Bildschirmlesetechnologie verwenden, und Personen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmlesegeräte ihren Benutzer ohne Vorwarnung zur Formularsteuerung.

    Die Anwendung des `autofocus`-Attributs sollte sorgfältig hinsichtlich der Barrierefreiheit betrachtet werden. Das automatische Fokussieren einer Steuerung kann bewirken, dass die Seite beim Laden scrollt. Der Fokus kann auch bewirken, dass dynamische Tastaturen auf einigen Berührungsgeräten angezeigt werden. Während ein Bildschirmlesegerät das Label der Formularsteuerung, die den Fokus erhält, ansagt, wird das Bildschirmlesegerät nichts vor dem Label ansagen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext durch den davor liegenden Inhalt verpassen.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und nur gültig für den Eingabetyp `file`, das `capture`-Attribut definiert, welches Medium—Mikrofon, Video oder Kamera—zum Erfassen einer neuen Datei für den Upload mit der `file`-Upload-Kontrolle in unterstützenden Szenarien verwendet werden soll. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`

  - : Gültig für sowohl `radio`- als auch `checkbox`-Typen, `checked` ist ein Boolean-Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass die Radiobox die aktuell ausgewählte in der Gruppe gleichnamiger Radio-Buttons ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen aktuell aktiviert ist: Wenn der Zustand des Kontrollkästchens geändert wird, wird dieses Inhaltsattribut nicht aktualisiert. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Anders als bei anderen Eingabesteuerungen wird der Wert eines Kontrollkästchens oder eines Optionsfeldes nur in die übermittelten Daten aufgenommen, wenn sie derzeit `checked` sind. Falls ja, werden der Name und die Wert(e) der aktivierten Steuerungen übermittelt.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, werden die übermittelten Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgelistet. Der Standardwert `value` für Kontrollkästchen und Optionsfelder ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für die Eingabetypen `hidden`, `text`, `search`, `url`, `tel`, und `email`, ermöglicht das `dirname`-Attribut das Übermitteln der Richtungseinstellung des Elements. Wenn enthalten, wird die Formularsteuerung mit zwei Name/Wert-Paaren übermittelt: das erste ist [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl` wie vom Browser festgelegt.

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

    Wenn das Formular oben übermittelt wird, führt die Eingabe zu sowohl dem `name` / `value`-Paar `fruit=cherry` als auch dem `dirname` / Richtungspaar `fruit-dir=ltr`.
    Weitere Informationen finden Sie im [`dirname` attribute](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer nicht mit der Eingabefeld interagieren können sollte. Deaktivierte Eingaben werden typischerweise mit einer gedimmten Farbe oder einer anderen Form von Hinweis darauf, dass das Feld nicht zur Verwendung verfügbar ist, gerendert.

    Konkret erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation gefordert, behält Firefox standardmäßig den [dynamischen deaktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladezeiten hinweg bei. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um dieses Feature zu steuern.

- `form`

  - : Eine Zeichenkette, die das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (d.h. sein **Formularbesitzer**). Der Wert dieser Zeichenkette, falls vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Falls dieses Attribut nicht angegeben wird, ist das `<input>`-Element mit dem nächstgelegenen umgebenden Formular verknüpft, falls vorhanden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe irgendwo im Dokument zu platzieren, aber sie mit einem Formular an einer anderen Stelle im Dokument einzubeziehen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Nur gültig für die `image`-Eingabeschaltfläche, die `height` ist die Höhe der Bilddatei, die dargestellt werden soll, um die grafische Absenden-Schaltfläche zu repräsentieren. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, es definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert für das `for`-Attribut des {{htmlelement('label')}} verwendet, um das Label mit der Formularsteuerung zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, es bietet einen Hinweis für Browser hinsichtlich der Art der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Werte beinhalten `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal`, und `search`.
- `list`

  - : Der dem `list`-Attribut gegebene Wert sollte die [`id`](/de/docs/Web/API/Element/id) einer {{HTMLElement("datalist")}} im selben Dokument sein. Der `<datalist>` bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, und `color`.

    Gemäß den Spezifikationen wird das `list`-Attribut nicht vom `hidden`, `password`, `checkbox`, `radio`, `file`, oder jeder der Schaltflächentypen unterstützt.

    Je nach Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen, Tic-Marken entlang eines Bereichs oder sogar eine Eingabe sehen, die sich wie ein {{HTMLElement("select")}} öffnet, aber nicht aufgeführte Werte erlaubt. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, es definiert den größten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element in der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, dann hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass der Bereich sich umschließen kann; zum Beispiel ermöglicht dies, einen Zeitbereich von 22 Uhr bis 4 Uhr festzulegen.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, es definiert die maximal Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe wird in der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) scheitern, wenn die Länge des in das Feld eingegebenen Textes größer als `maxlength` UTF-16-Codeeinheiten ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als das `maxlength`-Attribut erlaubt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, es definiert den niedrigsten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) diesen unterschreitet, schlägt das Element in der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, dann hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert niedriger als der minimal erlaubte vom `min`-Attribut ist, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass sich der Bereich umschließen kann; zum Beispiel ermöglicht dies, einen Zeitbereich von 22 Uhr bis 4 Uhr festzulegen.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, es definiert die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahl-Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist, oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe wird in der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) scheitern, wenn die Länge des Textes, der in das Feld eingegeben wird, weniger als `minlength` UTF-16-Codeeinheiten ist, wodurch die Formularübermittlung verhindert wird. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolean-Attribut `multiple`, wenn es gesetzt ist, bedeutet, dass der Benutzer durch Kommas getrennte E-Mail-Adressen in das E-Mail-Widget eingeben oder mehr als eine Datei mit der `file`-Eingabe auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`

  - : Eine Zeichenkette, die einen Namen für die Eingabesteuerung angibt. Dieser Name wird zusammen mit dem Wert der Steuerung übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie das `name` als erforderliches Attribut (obwohl es das nicht ist). Wenn eine Eingabe keinen angegebenen `name` hat oder ist `name` leer, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerungen, nicht geprüfte Optionsfelder, nicht überprüfte Kontrollkästchen und Zurücksetzen-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn es als Name eines `<input>`-Elements des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "user agent")}} auf die verwendete Zeichencodierung zur Übermittlung des Formulars gesetzt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut schafft ein einzigartiges Verhalten für Optionsfelder.

    Nur ein Optionsfeld in einer gleichnamigen Gruppe von Optionsfeldern kann zu einem Zeitpunkt überprüft sein. Das Auswählen eines beliebigen Optionsfelds in dieser Gruppe deselektiert automatisch jedes aktuell ausgewählte Optionsfeld in derselben Gruppe. Der Wert dieses einen überprüften Optionsfeldes wird zusammen mit dem Namen gesendet, falls das Formular übermittelt wird.

    Wenn man sich auf eine Serie von gleichnamigen Gruppen von Optionsfeldern tabt, erhält das, was überprüft ist, den Fokus. Wenn sie nicht im Quellcode zusammen gruppiert sind, wenn eines der Gruppe überprüft ist, beginnt das Tabben in der Gruppe, wenn das erste davon in der Gruppe erreicht wird, wobei alle nicht überprüften übersprungen werden. Mit anderen Worten, wenn eines überprüft ist, überspringt das Tabben die nicht überprüften Optionsfelder in der Gruppe. Wenn keines überprüft ist, erhält die Optionsfeldgruppe den Fokus, wenn das erste Element in der Gruppe denselben Namen erreicht hat.

    Sobald eines der Optionsfelder in der Gruppe den Fokus hat, navigieren die Pfeiltasten durch alle Optionsfelder desselben Namens, selbst wenn sie nicht zusammen im Quellcode gruppiert sind.

    Wenn einem Eingabeelement ein `name` zugewiesen wird, wird dieser Name eine Eigenschaft des [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigentümerformularelements. Wenn Sie eine Eingabe haben, deren `name` auf `guest` und ein anderes, dessen `name` auf `hat-size` gesetzt ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie, Formularelemente mit einem `name` zu versehen, das einer integrierten Eigenschaft des Formulars entspricht, da Sie sonst die vordefinierte Eigenschaft bzw. Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, das `pattern`-Attribut wird verwendet, um einen regulären Ausdruck zu kompilieren, den der [`value`](#value) der Eingabe erfüllen muss, damit der Wert in der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) als gültig anerkannt wird. Er muss einem gültigen regulären JavaScript-Ausdruck entsprechen, wie er für den {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Es sollten keine Schrägstriche um den Text des Musters angegeben werden. Beim Kompilieren des regulären Ausdrucks:

    1. Das Muster wird implizit mit `^(?:` und `)$` umschlossen, so dass die Übereinstimmung gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. Das `'v'`-Flag ist angegeben, so dass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn das Pattern-Attribut gültig ist und ein nicht leerer Wert das Muster nicht erfüllt, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden durch Komma getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erläuternden Text in der Nähe bereitstellen. Sie können auch ein [`title`](#title)-Attribut hinzufügen, um zu erklären, welche Anforderungen bestehen, um das Muster zu erfüllen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password`, und `number`, das `placeholder`-Attribut bietet dem Benutzer einen kurzen Hinweis darauf, welche Art von Informationen erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Art der Daten gibt, anstatt einer Erklärung oder Aufforderung. Der Text _darf nicht_ Umbrüche oder Zeilenumbrüche enthalten. Wenn zum Beispiel erwartet wird, dass ein Feld den Vornamen erfassen soll und das Label "First Name" ist, könnte ein geeigneter Platzhalter "z.B. Mustafa" lauten.

    > [!NOTE]
    > Das `placeholder`-Attribut ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erklären und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Labels](#labels).

- `popovertarget`

  - : Macht ein `<input type="button">`-Element zu einer Popover-Steuerungsschaltfläche; es nimmt die ID des zu steuernden Popover-Elements als Wert. Weitere Informationen finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API) Hauptseite.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf einem von einer Steuerung `<input type="button">`-Element kontrollierten Popover-Element ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Die Schaltfläche wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion durchgeführt.
    - `"show"`
      - : Die Schaltfläche wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits sichtbares Popover zu zeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Die Schaltfläche wird ein Popover zwischen angezeigt und verborgen umschalten. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerungsschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten kann. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `password` unterstützt.

    Weitere Informationen finden Sie im [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Eigentümerformular übermittelt werden kann. Das `required`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, und `file` unterstützt.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung) und im [HTML-Attribut: `required`](/de/docs/Web/HTML/Attributes/required).

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url`, und `text`, das `size`-Attribut gibt an, wie viel der Eingabe angezeigt wird. Es erzeugt im Grunde dasselbe Ergebnis wie das Setzen der CSS- [`width`](/de/docs/Web/CSS/width) Eigenschaft mit ein paar Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es die Anzahl der Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere ist es Pixel (oder `px`-Einheiten). Das CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`

  - : Nur gültig für die `image`-Eingabeschaltfläche, das `src` ist eine Zeichenkette, die die URL der Bilddatei angibt, die dargestellt wird, um die grafische Absende-Schaltfläche zu repräsentieren. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut ist eine Zahl, die die Feinheit angibt, die der Wert einhalten muss.

    Wenn nicht explizit enthalten:

    - `step` ist standardmäßig 1 für `number` und `range`.
    - Jeder Eingabetyp für Datum/Zeit hat einen Standardwert für `step`, der für den Typ angemessen ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step), und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl sein—ganze Zahl oder Gleitkommazahl—oder der spezielle Wert `any`, was bedeutet, dass kein Stufenverhalten impliziert wird und jeder Wert erlaubt ist (außer anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, Datum/Zeit-Eingabetypen und `range` Eingabetypen gleich dem Referenzwert für das Stufen—der [`min`](#min) Wert und Inkremente des Schrittwerts, bis zum [`max`](#max) Wert, falls angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Zahl, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede ganze Zahl gültig, Gleitkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig `1` ist. Für `4.2`, um gültig zu sein, müsste `step` auf `any`, 0.1, 0.2 gesetzt werden oder der `min`-Wert müsste eine Zahl sein, die auf `.2` endet, wie `<input type="number" min="-5.2">`

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht mit der Stufenkonfiguration übereinstimmen, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und wird die `:invalid`-Pseudoklasse treffen.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung).

- `tabindex`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus aufnehmen kann (fokussierbar ist), wenn es am sequentiellen Tastaturnavigation teilnehmen sollte. Da alle Eingabetypen außer Eingaben des Typs `hidden` fokussierbar sind, sollte dieses Attribut nicht auf Formularsteuerungen verwendet werden, weil dies die Verwaltung der Fokusreihenfolge für alle Elemente im Dokument erforderlich machen würde, mit dem Risiko, die Benutzerfreundlichkeit und Barrierefreiheit zu beeinträchtigen, wenn es nicht korrekt angewendet wird.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text darstellt, der beratende Informationen über das Element enthält, zu dem es gehört. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als die primäre Erklärung für den Zweck der Formularsteuerung verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das `id`-Attribut der Steuerung gesetzt ist. Weitere Informationen finden Sie unter [Labels](#labels) unten.

- `type`

  - : Eine Zeichenkette, die den Typ der zu rendernden Steuerung angibt. Zum Beispiel, um ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben ist), wird der Eingabetyp `text` verwendet, um ein Klartext-Eingabefeld zu erstellen.

    Erlaubte Werte sind in [Eingabetypen](#input_types) oben aufgeführt.

- `value`

  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Anfangswert, und von da an kann er jederzeit mit JavaScript geändert oder abgerufen werden, indem auf die entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft `value` zugegriffen wird. Das `value`-Attribut ist immer optional, sollte jedoch für `checkbox`, `radio`, und `hidden` als obligatorisch betrachtet werden.

- `width`

  - : Nur gültig für die `image`-Eingabeschaltfläche, die `width` ist die Breite der Bilddatei, die dargestellt wird, um die grafische Absende-Schaltfläche zu repräsentieren. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind ebenfalls in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie die Verwendung vermeiden, es sei denn, es ist unvermeidbar.

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
        <p>Ein String, der die Art der Aktion anzeigt, die ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt, während das Feld bearbeitet wird; Dies wird verwendet, um ein geeignetes Label für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Ausrichtung des Bereichsschuiebers. <strong>Nur Firefox.</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl der Elemente, die in der Dropdown-Liste der vorherigen Suchanfragen angezeigt werden sollten. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob der Benutzer nur ein Verzeichnis auswählen darf (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist)
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome, etc.), die, wenn vorhanden, dem {{Glossary("user_agent", "user agent")}} sagt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht es Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (wie z.B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

    Das `search`-Ereignis ist so limitiert, dass es nicht häufiger gesendet wird, als ein implementationsdefiniertes Intervall.

- `orient` {{non-standard_inline}}

  - : Ähnlich wie das nicht standardisierte CSS-Property -moz-orient, das die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente beeinflusst, definiert das `orient`-Attribut die Ausrichtung des Bereichsschiebers. Werte beinhalten `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Erstellen von vertikalen Formularsteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zum Erstellen von vertikalen Formularsteuerungen.

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der es Ihnen erlaubt, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü der vorherigen Suchanfragen des `<input>`-Elements angezeigt werden.

    Der Wert muss eine nicht negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben wird, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass nur Verzeichnisse von dem Benutzer im Dateiauswahldialog auswählbar sein sollen. Weitere Details und Beispiele finden Sie in [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und höher nutzbar. Es hat jedoch trotz seiner relativ breiten Unterstützung noch keinen Standardstatus und sollte nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Methoden

Die folgenden Methoden werden vom [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interface bereitgestellt, das `<input>`-Elemente im DOM darstellt. Auch stehen die Methoden der übergeordneten Interfaces, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget), zur Verfügung.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis beim Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis beim Element aus und (wenn das Ereignis nicht abgebrochen wird) berichtet dem Benutzer das Problem.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder Kalender Datumseingabe), tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine gegebene Zeichenfolge. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der bestehende Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen in einem Texteingabeelement aus. Macht nichts für Eingaben, die nicht als Texteingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Auswahlbildschirm für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins, standardmäßig, oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Eigenschaften, die auf Nicht-Formularelemente nicht anwendbar sind. Es gibt CSS-Selektoren, die gezielt Steuerelemente basierend auf ihren UI-Funktionen anvisieren können, auch bekannt als UI-Pseudoklassen. Das `input`-Element kann auch nach Typ mit Attributselektoren gezielt werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Beschriftungen super relevant für das
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
        Jedes aktuell aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, eingegeben, etc.) oder den Fokus akzeptiert und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder den Fokus akzeptiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes aktuell deaktivierte Element, das einen aktivierten Zustand hat. Das bedeutet, dass es ansonsten aktiviert werden könnte (ausgewählt, angeklickt, eingegeben, etc.) oder den Fokus akzeptieren könnte, wäre es nicht deaktiviert.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element nicht vom Benutzer bearbeitbar</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich `&lt;input&gt;` und {{HTMLElement("textarea")}} Elementen mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut vorhandenen Attribut, das bislang keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die standardmäßig in einer Gruppe verwandter Elemente sind.
        Entsprechungen sind {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Eingabetypen, die beim Laden oder Rendern der Seite aktiviert sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entsprechungen sind {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Eingabetypen, die derzeit aktiviert sind (und die ({{HTMLElement("option")}} in einem {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente, deren indeterminate-Eigenschaft durch JavaScript auf wahr gesetzt wurde, {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle Radiobuttons mit demselben Name-Wert im Formular nicht aktiviert sind, und {{HTMLElement("progress")}} Elemente in einem undefinierten Zustand
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularsteuerelemente, auf die eine Validierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularsteuerelemente, auf die eine Validierung angewendet wurde und die derzeit nicht gültig sind. Entsprechen einem Formularsteuerelement, dessen Wert nicht den durch seine Attribute festgelegten Einschränkungen entspricht, wie z.B. <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert innerhalb der von den Attributen <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> sowie dem <a href="#step"><code>step</code></a> angegebenen Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert NICHT innerhalb der von den Attributen <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> angegebenen Bereichsgrenzen liegt oder nicht der <a href="#step"><code>step</code></a>-Einschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a>-Attribut aufweist.
        Entspricht nur Elementen, die erforderlich sein können.
        Das Attribut auf einem nicht erforderlichen Element führt nicht zu einem Treffer.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}} Element, das NICHT das <a href="#required"><code>required</code></a>-Attribut auf sich gesetzt hat.
        Entspricht nicht Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird aber bei Unschärfe aktiviert. Entspricht ungültiger Eingabe, aber erst nach der Benutzerinteraktion, wie z.B. durch Fokussieren auf das Steuerelement, das Verlassen des Steuerelements oder den Versuch, das Formular mit dem ungültigen Steuerelement abzusenden.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können ein Kontrollkästchen-Label basierend darauf stylen, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel gestalten wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einem aktivierten `input` kommt. Wir haben keine Stile angewendet, wenn das `input` nicht aktiviert ist.

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

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) gezielt anzusprechen. CSS-Attributselektoren entsprechen Elementen basierend entweder auf der bloßen Anwesenheit eines Attributs oder dem Wert eines bestimmten Attributs.

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

Standardmäßig ist das Erscheinen von Platzhaltertexten durchscheinend oder hellgrau. Das {{cssxref('::placeholder')}}-Pseudo-Element ist der [`placeholder` Text](#placeholder) der Eingabe. Es kann mit einem eingeschränkten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil der CSS-Eigenschaften, der auf das {{cssxref("::first-line")}} Pseudo-Element anwendbar ist, kann in einer Regel verwendet werden, die `::placeholder` in seinem Selektor enthält.

### appearance

Die {{cssxref("appearance")}} Eigenschaft ermöglicht das Anzeigen von (fast) jedem Element als plattformnativer Stil basierend auf dem Thema des Betriebssystems sowie das Entfernen jeglicher plattformnativer Stile mit dem Wert `none`.

Man könnte ein `<div>` wie einen Radiobutton aussehen lassen mit `div {appearance: radio;}` oder ein Radio wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}`, aber sollten Sie nicht.

Das Setzen von `appearance: none` entfernt plattformnative Rahmen, aber nicht die Funktionalität.

### caret-color

Eine spezifische Eigenschaft für Texteingabe-bezogene Elemente ist die CSS {{cssxref("caret-color")}} Eigenschaft, die es Ihnen erlaubt, die Farbe zu setzen, die verwendet wird, um den Texteingabecursor zu zeichnen:

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

Die {{cssxref("field-sizing")}} Eigenschaft ermöglicht Ihnen die Steuerung des Größenverhaltens von Formulareingaben (d.h. sie haben standardmäßig eine bevorzugte Größe.) Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und Formularelementen zu erlauben, ihre Größe anzupassen, um ihren Inhalt zu fassen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die sich an ihren Inhalt anpassen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Element/input/file), und {{htmlelement("textarea")}} Elementen.

### object-position und object-fit

In bestimmten Fällen (typischerweise mit nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>` Element ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element). Wenn dem so ist, können die Position und Größe des Elements innerhalb seines Rahmens mithilfe der CSS {{cssxref("object-position")}} und {{cssxref("object-fit")}} Eigenschaften angepasst werden.

### Styling

Für weitere Informationen über das Hinzufügen von Farbe zu Elementen in HTML, siehe:

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Stilgebung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels sind erforderlich, um unterstützende Texte mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}} Element bietet erklärende Informationen über ein Formularfeld, das _immer_ angemessen ist (unabhängig von jeglichen Layout-Bedenken, die Sie haben könnten). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden sollte.

#### Assoziierte Labels

Die semantische Paarung von `<input>` und `<label>` Elementen ist nützlich für unterstützende Technologien wie Bildschirmleser. Indem Sie sie mit Hilfe des [`for`](/de/docs/Web/HTML/Element/label#for) Attributes des `<label>`-Elements paaren, verbinden Sie das Label mit dem Input auf eine Weise, die Bildschirmlesern ermöglicht, Eingaben präziser zu beschreiben.

Es reicht nicht aus, normalen Text neben dem `<input>` Element zu haben. Vielmehr erfordern Benutzbarkeit und Zugänglichkeit das Einschließen von entweder impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht zugänglich: Es gibt keine Beziehung zwischen dem Prompt und dem `<input>` Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere 'Treffer'-Fläche für Maus- und Touchscreen-Benutzer, um darauf zu klicken oder zu berühren. Indem Sie ein `<label>` mit einem `<input>` paaren, wird durch Klicken auf eines von beiden der Fokus auf das `<input>` gelegt. Wenn Sie normalen Text verwenden, um Ihre Eingabe zu "bezeichnen", passiert dies nicht. Wenn der Prompt Teil der Aktivierungsfläche für die Eingabe ist, ist das hilfreich für Menschen mit motorischen Steuerungsbedingungen.

Als Webentwickler sollten wir nie zu der Annahme gelangen, dass Menschen alle Dinge wissen, die wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und damit auch Ihre Website – garantiert praktisch, dass einige Besucher Ihrer Website einige Variationen in Denkprozessen und/oder Umständen haben werden, die sie dazu bringen, Ihre Formulare sehr unterschiedlich von Ihnen zu interpretieren ohne klare und korrekt präsentierte Labels.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder) Attribut ermöglicht es Ihnen, Text zu spezifizieren, der innerhalb des `<input>` Elements angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil es das nicht ist. Der Platzhalter dient dazu, einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Der Platzhalter ist nicht nur für Bildschirmleser nicht zugänglich, sondern verschwindet auch, sobald der Benutzer Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert hat. Browser mit automatischen Seitenübersetzungsfunktionen könnten Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder) Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>` Element kennzeichnen müssen, verwenden Sie das {{HTMLElement("label")}} Element.

### Client-seitige Validierung

> [!WARNING]
> Die Client-seitige Validierung ist nützlich, garantiert aber _nicht_, dass der Server gültige Daten erhält. Wenn die Daten ein bestimmtes Format haben müssen, überprüfen Sie auch _immer_ auf der Serverseite und geben eine [`400` HTTP Antwort](/de/docs/Web/HTTP/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen zu gestalten, wie im Abschnitt [UI Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser eine clientseitige Validierung bei (versuchter) Formularübersendung. Bei der Formularübermittlung wird, wenn eine Formulareingabe die Einschränkungsvalidierung nicht besteht, in unterstützenden Browsern eine Fehlermeldung am ersten ungültigen Formularelement angezeigt; dabei wird eine Standardmeldung basierend auf dem Fehlertyp angezeigt oder eine von Ihnen festgelegte Nachricht.

Einige Eingabetypen und andere Attribute legen fest, welche Werte für eine bestimmte Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler können auftreten, darunter ein `rangeUnderflow` Fehler, wenn der Wert kleiner als 2 ist, `rangeOverflow` wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Ganzzahl (entspricht nicht den Anforderungen des `step` Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Menge der möglichen Werte periodisch ist (das heißt, bei maximal möglichen Wert drehen sich die Werte wieder zu Anfang statt aufzuhören), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min) Eigenschaften umgekehrt sind, was anzeigt, dass der Bereich der zulässigen Werte bei `min` beginnt, zum niedrigsten möglichen Wert springt und dann weiter zu `max` reicht. Dies ist besonders nützlich für Datums- und Zeitangaben, wie im Fall einer Erlaubnis für den Bereich von 8 Uhr abends bis 8 Uhr morgens:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und ihre Werte können zu einem bestimmten Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Gültigkeitsobjektfehler hängen von den <code>&lt;input&gt;</code>
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
        Tritt auf, wenn der Wert größer ist als der durch das <code>max</code> Attribut definierte Höchstwert
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl an Zeichen größer ist als die durch das <code>maxlength</code> erlaubte Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der durch das <code>min</code> Attribut definierte Mindestwert
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl an Zeichen geringer ist als die Anzahl, die durch das <code>minlength</code> Attribut gefordert wird
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Musterattribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> diesem nicht entspricht.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code> Attribut vorhanden ist, der Wert jedoch <code>null</code> ist oder Radio oder Checkbox nicht aktiviert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Standardmäßig ist das Inkrement <code>1</code>, daher sind nur ganze Zahlen auf <code>type="number"</code> gültig, wenn der Schritt nicht angegeben ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, beispielsweise enthält eine E-Mail kein <code>@</code> oder eine URL kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required` Attribut hat, ist kein Wert oder ein leerer String nicht ungültig. Selbst wenn die obigen Attribute vorhanden sind, mit Ausnahme von `required`, führt ein leerer String nicht zu einem Fehler.

Wir können Grenzen festlegen, für welche Werte wir akzeptieren, und unterstützende Browser werden diese Formulareingaben nativ validieren und den Benutzer benachrichtigen, wenn beim Einreichen des Formulars ein Fehler vorliegt.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält die `validityState`-Schnittstelle die Eigenschaften `badInput`, `valid` und `customError`, die alle Boolesche schreibgeschützte Eigenschaften sind. Das Gültigkeitsobjekt enthält:

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

Für jede dieser Boolean-Eigenschaften zeigt ein Wert von `true`, dass der angegebene Grund der Validierung möglicherweise fehlschlägt, mit Ausnahme der `valid` Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen einhält.

Wenn ein Fehler vorliegt, werden unterstützende Browser sowohl den Benutzer darauf hinweisen als auch verhindern, dass das Formular gesendet wird. Eine Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen wahrheitsgemäßen Wert gesetzt wird (alles außer dem leeren String oder `null`), wird das Senden des Formulars verhindert. Wenn keine benutzerdefinierte Fehlermeldung vorhanden ist und keine der anderen Eigenschaften `true` zurückgibt, ist `valid` `true`, und das Formular kann gesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Fehlermeldung auf den leeren String setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit festgelegt ist, wird es nicht gesendet, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die für `<input>` (und verwandte) Elemente verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen veranlassen dies, um eine Standard-Fehlermeldung zu erzeugen, wenn Sie versuchen, das Formular ohne gültig ausgefüllt oder einem Wert, der nicht dem `pattern` entspricht, abzusenden.

Wenn Sie stattdessen benutzerdefinierte Fehlermeldungen anzeigen möchten, könnten Sie JavaScript wie folgt verwenden:

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

In Kürze:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die Methode `checkValidity()` über den `input` Ereignis-Handler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid` Ereignis ausgelöst und die `invalid` Ereignishandler-Funktion wird ausgeführt. In dieser Funktion arbeiten wir heraus, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, indem wir einen `if ()` Block verwenden und eine benutzerdefinierte Validitätsfehlermeldung setzen.
- Infolgedessen wird eine der benutzerdefinierten Fehlermeldungen angezeigt, wenn der Eingabewert ungültig ist, wenn die Senden-Schaltfläche gedrückt wird.
- Wenn er gültig ist, wird er wie erwartet gesendet. Dafür muss die benutzerdefinierte Gültigkeit durch Aufruf von `setCustomValidity()` mit einem leeren String-Wert abgesagt werden. Deshalb machen wir das jedes Mal, wenn das `input` Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Gültigkeit zuvor festgelegt wurde, wird die Eingabe als ungültig registriert, auch wenn sie derzeit einen gültigen Wert bei der Übermittlung enthält.

> [!NOTE]
> Validieren Sie immer beide, sowohl Eingabebeschränkungen client- als auch serverseitig. Die Beschränkungsvalidierung entfernt nicht die Notwendigkeit für die Validierung auf der _Server-Seite_. Ungültige Werte können weiterhin von älteren Browsern oder von bösartigen Akteuren gesendet werden.

> [!NOTE]
> Firefox hat für viele Versionen ein proprietäres Fehlerattribut — `x-moz-errormessage` — unterstützt, das es Ihnen ermöglicht hat, benutzerdefinierte Fehlermeldungen auf ähnliche Weise festzulegen. Dies wurde seit Version 66 entfernt (siehe [Firefox Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die zulässigen Eingaben für bestimmte `<input>` Typen hängen von der Sprache ab. In einigen Sprachen ist 1.000,00 eine gültige Zahl, während in anderen Sprachen die gültige Weise, diese Zahl einzugeben, 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Sprache zur Validierung der Benutzereingabe zu bestimmen (zumindest für `type="number"`):

- Versuchen Sie, die Sprache zu verwenden, die durch ein `lang`/`xml:lang` Attribut auf dem Element oder einem seiner Eltern angegeben ist.
- Versuchen Sie, die durch einen `Content-Language` HTTP-Header angegebene Sprache zu verwenden. Oder,
- Wenn keine angegeben ist, verwenden Sie die Sprache des Browsers.

## Zugänglichkeit

### Labels

Beim Einschließen von Eingaben ist es eine Zugänglichkeitsanforderung, Labels hinzuzufügen. Dies wird benötigt, damit diejenigen, die unterstützende Technologien verwenden, erkennen können, wofür die Eingabe gedacht ist. Auch das Klicken oder Antippen eines Labels gibt den Fokus an das mit dem Label verbundene Formsteuerelement. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erhöht den Bereich, den ein Benutzer klicken oder antippen kann, um das Formsteuerelement zu aktivieren. Dies ist besonders nützlich (und sogar erforderlich) für Radioknöpfe und Kontrollkästchen, die klein sind. Weitere Informationen zu Labels im Allgemeinen finden Sie unter [Labels](#labels).

Das folgende ist ein Beispiel dafür, wie das `<label>` mit einem `<input>` Element im obigen Stil verbunden wird. Sie müssen dem `<input>` ein `id` Attribut geben. Das `<label>` benötigt dann ein `for` Attribut, dessen Wert derselbe wie das `id` des Inputs ist.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bieten, dass sie leicht aktiviert werden können. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit Problemen bei der motorischen Steuerung und Menschen, die nicht präzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine Mindestinteraktive Größe von 44×44 [CSS-Pixel] wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgruppengröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgruppengröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Inhaltsfluss</a>, gelistet, submittable, resettable, element zugeordnet mit Form,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht <code>hidden</code> ist,
        dann benennbares Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "Void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Verzicht auf Tags</th>
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
                ohne <code>list</code> Attribut:
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
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
                ohne <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role"><code>searchbox</code></a>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
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
                ohne <code>list</code> Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                ohne <code>list</code> Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                ohne <code>list</code> Attribut:
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
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
      <th scope="row">Erlaubte ARIA Rollen</th>
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a> bei Verwendung
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
            <code>type=text</code> ohne <code>list</code> Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role"><code>spinbutton</code></a>
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

- [Formulareinschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formulareingaben-Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Anleitung zum Erstellen benutzerdefinierter Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Stilgebung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Erstellen von vertikalen Formulareingabefeldern](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
