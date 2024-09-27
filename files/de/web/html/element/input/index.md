---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: bf1775f6305d95ae7c7022922c9cea2ef89212c1
---

{{HTMLSidebar}}

Das **`<input>`**-Element in [HTML](/de/docs/Web/HTML) wird verwendet, um interaktive Steuerungen für webbasierte Formulare zu erstellen, um Daten vom Benutzer entgegenzunehmen; Je nach Gerät und [user agent](/de/docs/Glossary/user_agent) stehen eine Vielzahl von Eingabedatentypen und Steuerungs-Widgets zur Verfügung. Das `<input>`-Element ist eines der leistungsstärksten und komplexesten in ganz HTML aufgrund der schieren Anzahl von Kombinationen aus Eingabetypen und Attributen.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## \<input> Typen

Wie ein `<input>` funktioniert, variiert erheblich je nach Wert seines [`type`](#type)-Attributs, weshalb die verschiedenen Typen in eigenen Referenzseiten behandelt werden. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` verwendet.

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
      <td>Ein Kontrollkästchen, das erlaubt einzelne Werte zu aktivieren/deaktivieren.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Eine Steuerung zur Auswahl einer Farbe; öffnet einen Farbwähler in unterstützenden Browsern.
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
        Öffnet einen Datumswähler oder numerische Rädchen für Jahr, Monat, Tag in unterstützenden Browsern.
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
        Eine Steuerung zur Eingabe von Datum und Uhrzeit, ohne Zeitzone. Öffnet einen Datumswähler oder numerische Rädchen für Datums- und Zeitkomponenten in unterstützenden Browsern.
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
        Ein Feld zum Bearbeiten einer E-Mail-Adresse. Sieht aus wie ein <code>text</code>-Eingabefeld, hat jedoch Validierungsparameter und relevante Tastaturen in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Dateitypen zu definieren, die mit der Steuerung ausgewählt werden können.
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
        Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist verborgen!
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
      <td>Eine Steuerung zur Eingabe eines Monats und eines Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Eine Steuerung zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt standardmäßig eine Validierung hinzu. Zeigt auf einigen Geräten mit dynamischen Tastaturen eine numerische Tastatur an.
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
        Eine Optionsschaltfläche, die es erlaubt, einen einzigen Wert aus mehreren Auswahlmöglichkeiten mit dem gleichen <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Wird als Bereichs-Widget angezeigt, standardmäßig in der Mittelwert. Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich zulässiger Werte zu definieren.
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
        Eine Taste, die die Inhalte des Formulars auf Standardwerte zurücksetzt. Nicht empfohlen.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchstrings. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. In unterstützenden Browsern kann es ein Löschsymbol enthalten, das verwendet werden kann, um das Feld zu leeren. Zeigt ein Suchsymbol anstelle der Eingabetaste auf einigen Geräten mit dynamischen Tastaturen an.
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
        Eine Steuerung zur Eingabe einer Telefonnummer. Zeigt eine Telefon-Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabefeld, jedoch mit Validierungsparametern und relevanter Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Eine Steuerung zur Eingabe eines Datums, bestehend aus einer Kalenderwoche und einer Wochennummer ohne Zeitzone.
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

Das `<input>`-Element ist so leistungsfähig wegen seiner Attribute; das [`type`](#type)-Attribut, oben mit Beispielen beschrieben, ist das wichtigste. Da jedes `<input>`-Element unabhängig vom Typ auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch gesehen den gleichen Satz an Attributen. In der Praxis haben jedoch die meisten Attribute lediglich einen Effekt auf eine bestimmte Teilmenge von Eingabetypen. Darüber hinaus hängt die Wirkung einiger Attribute auf eine Eingabe vom Eingabetyp ab und wirkt sich auf verschiedene Eingabetypen unterschiedlich aus.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird gefolgt von einer Liste, in der jedes Attribut ausführlicher beschrieben wird, zusammen mit den zugehörigen Eingabetypen. Attribute, die für die meisten oder alle Eingabetypen üblich sind, werden weiter unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind oder Attribute, die zwar für alle Eingabetypen, aber mit besonderen Funktionen bei einem bestimmten Eingabetyp verwendet werden, sind auf den Seiten dieser Typen dokumentiert.

Die Attribute für das `<input>`-Element schließen die [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes) ein sowie zusätzlich:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                                      |
| --------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis auf erwarteten Dateityp in Datei-Upload-Steuerungen                                       |
| [`alt`](#alt)                                 | `image`                                                                | Alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                   |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                               | Steuert automatische Großschreibung in eingegebenem Text.                                         |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Buttons                             | Hinweis für die Autoausfüllfunktion des Formulars                                                 |
| [`capture`](#capture)                         | `file`                                                                 | Methode zur Medienaufnahme in Datei-Upload-Steuerungen                                            |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Ob der Befehl oder die Steuerung aktiviert ist                                                    |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfeldes zur Übermittlung der Richtung des Elements bei Formularübermittlung       |
| [`disabled`](#disabled)                       | alle                                                                   | Ob das Formularsteuerfeld deaktiviert ist                                                         |
| [`form`](#form)                               | alle                                                                   | Zeigt die Zugehörigkeit zu einem Formularelement an                                               |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL für die Formularübermittlung                                                                  |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Formulardaten-Satz-Codierungstyp für die Formularübermittlung                                     |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | HTTP-Methode zur Formularübermittlung                                                             |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Umgehung der Formularkontrollvalidierung für die Formularübermittlung                             |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browsing-Kontext für die Formularübermittlung                                                     |
| [`height`](#height)                           | `image`                                                                | Entspricht dem height-Attribut für {{htmlelement('img')}}; vertikale Dimension                    |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Buttons       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsoptionen          |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Höchstwert                                                                                        |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Länge (Anzahl der Zeichen) des `value`-Werts                                             |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Mindestwert                                                                                       |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Länge (Anzahl der Zeichen) des `value`-Werts                                             |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolean. Ob mehrere Werte erlaubt sind                                                            |
| [`name`](#name)                               | alle                                                                   | Name der Formularsteuerung. Wird zusammen mit dem Formular als Teil eines Namenswerts versendet   |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, dem der `value` entsprechen muss, um gültig zu sein                                       |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der in der Formularsteuerung angezeigt wird, wenn kein Wert gesetzt ist                     |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Bestimmt ein `<input type="button">` als Steuerung für ein Popover-Element                        |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt die Aktion an, die eine Popover-Steuerung ausführen soll                                     |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolean. Der Wert ist nicht editierbar                                                            |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss überprüft sein, damit das Formular übermittelbar ist |
| [`size`](#size)                               | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe der Steuerung                                                                               |
| [`src`](#src)                                 | `image`                                                                | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource               |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Inkrementelle Werte, die gültig sind                                                              |
| [`type`](#type)                               | alle                                                                   | Art der Formularsteuerung                                                                         |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht er dem Anfangswert                     |
| [`width`](#width)                             | `image`                                                                | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                        |

Einige zusätzliche nicht-standardmäßige Attribute sind nach den Beschreibungen der Standardattribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Nur für den Eingabetyp `file` gültig, definiert das `accept`-Attribut, welche Dateitypen in einer Datei-Upload-Kontrolle ausgewählt werden können. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alt`

  - : Nur für den Bild-Button gültig, bietet das `alt`-Attribut alternativen Text für das Bild, der den Wert des Attributs anzeigt, wenn das Bild [`src`](#src) fehlt oder nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch in Großbuchstaben umgewandelt wird und, wenn ja, wie. Weitere Informationen finden Sie auf der globalen Attributseite [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das Attribut [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge an, die beschreibt, welche Art von Autovervollständigungsfunktionalität die Eingabe bieten sollte. Eine typische Implementierung der Autovervollständigung erinnert sich an zuvor eingegebene Werte im gleichen Eingabefeld, aber komplexere Formen der Autovervollständigung können existieren. Ein Browser könnte beispielsweise in die Kontaktliste eines Geräts integrieren, um `email`-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen außer `checkbox`, `radio`, `file` oder einer der Tastenarten gültig.

    Weitere Informationen, einschließlich Informationen zur Passwortsicherheit und wie sich `autocomplete` geringfügig anders für `hidden` im Vergleich zu anderen Eingabetypen verhält, finden Sie im Attribut [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete).

- `autofocus`

  - : Ein Boolean-Attribut, das – falls vorhanden – angibt, dass die Eingabe automatisch den Fokus erhält, wenn die Seite vollständig geladen ist (oder wenn das {{HTMLElement("dialog")}}, das das Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element vorhanden ist, erhält das erste Element mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Ein Formularsteuerelement automatisch zu fokussieren, kann Menschen mit Sehbehinderung, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihre Benutzer ohne Vorwarnung zum Formularsteuerung.

    Bei der Anwendung des `autofocus`-Attributs sollte die Barrierefreiheit sorgfältig berücksichtigt werden. Automatisches Fokussieren auf eine Steuerung kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass dynamische Tastaturen auf einigen Touch-Geräten angezeigt werden. Während ein Bildschirmleser das Label des Formularsteuerung mit Fokus ankündigt, wird der Bildschirmleser nichts vor dem Label ankündigen, und der Benutzer eines sehenden kleinen Geräts wird gleichermaßen den Kontext verpassen, der durch den vorangehenden Inhalt geschaffen wird.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und nur gültig für den Eingabetyp `file`, definiert das `capture`-Attribut, welches Medium—Mikrofon, Video oder Kamera—verwendet werden soll, um eine neue Datei für den Upload in unterstützenden Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`

  - : Gültig sowohl für `radio` als auch für `checkbox`-Typen, ist `checked` ein Boolean-Attribut. Wenn es auf einem `radio`-Typ vorhanden ist, zeigt es an, dass dieser Radio-Button der aktuell ausgewählte in der Gruppe von gleichnamigen Radio-Buttons ist. Wenn es auf einem `checkbox`-Typ vorhanden ist, zeigt es an, dass dieses Kontrollkästchen standardmäßig ausgewählt ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit ausgewählt ist: wenn sich der Status des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerelementen wird der Wert eines Kontrollkästchens und von Radio-Buttons nur in die übermittelten Daten aufgenommen, wenn sie derzeit `checked` sind. Wenn sie dies sind, werden der Name und die Wert(e) der aktivierten Steuerungen übermittelt.
    >
    > Wenn beispielsweise ein Kontrollkästchen mit dem `name` `fruit` den Wert `cherry` hat und das Kontrollkästchen aktiviert ist, werden die Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es in den Formulardaten überhaupt nicht aufgeführt. Der Standardwert für Kontrollkästchen und Radio-Buttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Für `hidden`, `text`, `search`, `url`, `tel` und `email`-Eingabetypen gültig, ermöglicht das Attribute `dirname` den Versand der Richtung des Elements. Wenn es enthalten ist, wird das Formularsteuerelement mit zwei Name/Wert-Paaren gesendet: das erste ist das [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, der vom Browser festgelegt wurde.

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

    Beim Senden des obigen Formulars, bewirkt die Eingabesteuerung, dass sowohl das `name` / `value` Paar `fruit=cherry` als auch das `dirname` / Richtungspaar `fruit-dir=ltr` gesendet werden.
    Weitere Informationen finden Sie im Attribut [`dirname`](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolean-Attribut, das – falls vorhanden – angibt, dass der Benutzer nicht mit der Eingabe interagieren können sollte. Deaktivierte Eingaben werden typischerweise mit einer gedimmten Farbe oder durch eine andere Form von Hinweis dargestellt, die anzeigt, dass das Feld nicht verfügbar ist.

    Konkret erhält disabled Inputs das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis nicht, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl es von der Spezifikation nicht erforderlich ist, speichert Firefox standardmäßig den [dynamischen disabled Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` zwischen Seitenladen. Verwenden Sie das Attribut [`autocomplete`](#autocomplete), um diese Funktion zu steuern.

- `form`

  - : Eine Zeichenfolge, die das {{HTMLElement("form")}}-Element angibt, dem die Eingabe zugeordnet ist (das heißt, ihr **Formularbesitzer**). Der Wert dieser Zeichenfolge muss, falls vorhanden, mit dem [`id`](#id) eines `<form>`-Elements im gleichen Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächstgelegenen enthaltenden Formular verknüpft, falls vorhanden.

    Das `form`-Attribut ermöglicht es Ihnen, ein Eingabesteuerelement überall im Dokument zu platzieren, es aber in einem Formular an anderer Stelle im Dokument einzuschließen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft sein.

- `formaction`
  - : Nur für die Eingabetypen `image` und `submit` gültig. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formenctype`
  - : Nur für die Eingabetypen `image` und `submit` gültig. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formmethod`
  - : Nur für die Eingabetypen `image` und `submit` gültig. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formnovalidate`
  - : Nur für die Eingabetypen `image` und `submit` gültig. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `formtarget`
  - : Nur für die Eingabetypen `image` und `submit` gültig. Weitere Informationen finden Sie beim Eingabetyp {{HTMLElement("input/submit", "submit")}}.
- `height`
  - : Nur für den Bild-Input-Button gültig. Das `height`-Attribut gibt die Höhe der Bilddatei an, die angezeigt werden soll, um den grafischen Submit-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente, einschließlich aller Eingabetypen, gültig ist. Es definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verknüpfen zu identifizieren. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um die Bezeichnung mit der Formularsteuerung zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist. Er bietet einen Hinweis für Browser, welche Konfiguration der virtuellen Tastatur beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Mögliche Werte sind `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der Wert, der dem `list`-Attribut zugewiesen wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. Das `<datalist>` bietet eine Liste von vordefinierten Werten, die dem Benutzer zur Eingabe in diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut den Spezifikationen wird das `list`-Attribut von den Eingabetypen `hidden`, `password`, `checkbox`, `radio`, `file` und den Schaltflächentypen nicht unterstützt.

    Je nach Browser kann der Benutzer möglicherweise eine benutzerdefinierte Farbpalette vorgeschlagen sehen, Tick-Markierungen entlang eines Bereichs oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber die Eingabe nicht gelisteter Werte zulässt. Schauen Sie sich die [Kompatibilitätstabelle für Browser](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für andere Eingabetypen an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den größten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) diesen Wert überschreitet, schlägt die Element-Validierung fehl [constraint validation](/de/docs/Web/HTML/Constraint_validation). Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (wie bei Datumsangaben oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass der Bereich umschlagen kann. Beispielsweise können Sie dadurch einen Zeitbereich von 22:00 bis 4:00 Uhr angeben.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die maximale Zeichenlänge (gemessen in UTF-16-Codierungseinheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder größer sein. Wenn kein `maxlength` angegeben oder ein ungültiger Wert angegeben wird, hat das Feld keine maximale Länge. Dieser Wert muss ebenfalls größer als oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt bei [constraint validation](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16-Codierungseinheiten ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben können, als das `maxlength`-Attribut erlaubt. Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den negativsten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) geringer als dieser Wert ist, schlägt die Element-Validierung fehl [constraint validation](/de/docs/Web/HTML/Constraint_validation). Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Mindestwert.

    Dieser Wert muss weniger als oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein Mindestwert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht-leerer Wert kleiner als das Minimum des `min`-Attributs ist, wird die Constraint-Validierung das Absenden des Formulars verhindern. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (wie bei Datumsangaben oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass der Bereich umschlagen kann. Beispielsweise können Sie dadurch einen Zeitbereich von 22:00 bis 4:00 Uhr angeben.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimale Zeichenlänge (gemessen in UTF-16-Codierungseinheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem mit `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben wird, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt bei [constraint validation](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16-Codierungseinheiten ist, was das Absenden des Formulars verhindert. Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolean-Attribut `multiple`, wenn gesetzt, bedeutet, dass der Benutzer kommaseparierte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit der `file`-Eingabe auswählen kann. Siehe den {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `name`

  - : Eine Zeichenfolge, die einem Eingabesteuerung einen Namen zuweist. Dieser Name wird zusammen mit dem Wert der Steuerung bei der Formularübermittlung gesendet.

    Betrachten Sie das `name`-Attribut als erforderlich (auch wenn es das nicht ist). Wenn eine Eingabe kein angegebenes `name` hat oder das `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular gesendet! (Deaktivierte Steuerungen, nicht aktivierte Radio-Buttons, nicht aktivierte Kontrollkästchen und Zurücksetzen-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn es als der Name eines `<input>`-Elements des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe vom [user agent](/de/docs/Glossary/user_agent) automatisch auf die Zeichencodierung gesetzt, die für die Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut schafft ein besonderes Verhalten für Radio-Buttons.

    Nur ein Radio-Button in einer gleichnamigen Gruppe von Radio-Buttons kann gleichzeitig aktiviert sein. Durch das Auswählen eines Radio-Buttons in dieser Gruppe werden automatisch alle derzeit aktivierten Radio-Buttons in derselben Gruppe deaktiviert. Der Wert dieses einen aktivierten Radio-Buttons wird zusammen mit dem Namen gesendet, wenn das Formular gesendet wird,

    Wenn man in eine Reihe von gleichnamigen Radio-Buttons einsteigt, wird, falls einer aktiviert ist, dieser den Fokus erhalten. Wenn sie nicht in der Quellreihenfolge gruppiert sind und einer der Gruppe aktiviert ist, beginnt das Einsteigen in die Gruppe, sobald der erste in der Gruppe erreicht wird, wobei alle, die nicht aktiviert sind, übersprungen werden. Mit anderen Worten, wenn einer aktiviert ist, überspringt das Tabben die nicht aktiven Radio-Buttons in der Gruppe. Wenn keiner aktiviert ist, erhält die Radiobutton-Gruppe den Fokus, wenn der erste Button in der gleichnamigen Gruppe erreicht wird.

    Sobald ein Radio-Button in einer Gruppe den Fokus hat, navigiert das Verwenden der Pfeiltasten durch alle Radio-Buttons des gleichen Namens, selbst wenn die Radio-Buttons nicht in der Quellreihenfolge zusammen gruppiert sind.

    Wenn einem Eingabeelement ein `name` gegeben wird, wird dieser Name eine Eigenschaft der besitzenden Formularelements [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) Eigenschaft. Wenn Sie ein Eingabefeld haben, dessen `name` auf `guest` gesetzt ist, und ein weiteres, dessen `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einem integrierten Attribut der Form entspricht, da Sie dann die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompilieren, dem der Eingabewert [`value`](#value) entsprechen muss, damit der Wert [constraint validation](/de/docs/Web/HTML/Constraint_validation) konform ist. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Keine Schrägstriche sollten um den Mustertest spezifiziert werden. Bei der Kompilierung des regulären Ausdrucks:

    1. das Muster wird implizit mit `^(?:` und `)$` umgeben, sodass das Muster auf den _gesamten_ Eingabewert angewendet wird, d.h. `^(?:<pattern>)$`.
    2. Das 'v'-Flag wird angegeben, damit das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als [ASCII](/de/docs/Glossary/ASCII).

    Wenn das `pattern`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn das Musterattribut gültig ist und ein nicht-leerer Wert nicht zum Muster passt, wird die constraint validation das Absenden des Formulars verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden durch Kommas getrennten Wert geprüft.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie in der Nähe erklärenden Text hinzufügen. Sie können auch ein [`title`](#title)-Attribut verwenden, um zu erklären, was die Anforderungen sind, um das Muster zu erfüllen; die meisten Browser zeigen dieses Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`. Das `placeholder`-Attribut bietet dem Benutzer einen kurzen Hinweis darauf, welche Art von Informationen im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Art von Daten gibt, und kein Erklärungstext oder keine Aufforderung. Der Text darf _keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Wenn beispielsweise erwartet wird, dass ein Feld den Vornamen des Benutzers erfasst und seine Bezeichnung "Vorname" ist, könnte ein geeigneter Platzhalter "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Labels](#labels).

- `popovertarget`

  - : Verwandelt ein `<input type="button">`-Element in eine Popover-Steuerknopf; nimmt die ID des gesteuerten Popover-Elements als Wert. Weitere Informationen finden Sie auf der [Popover-API](/de/docs/Web/API/Popover_API)-Übersichtsseite.

- `popovertargetaction`

  - : Gibt die auszuführende Aktion für ein Popover-Element an, das von einer Steuerung `<input type="button">` gesteuert wird. Mögliche Werte sind:

    - `"hide"`
      - : Der Knopf wird ein angezeigtes Popover ausblenden. Wenn Sie versuchen, ein bereits verborgenes Popover auszublenden, wird keine Aktion unternommen.
    - `"show"`
      - : Der Knopf wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion unternommen.
    - `"toggle"`
      - : Der Knopf wird ein Popover zwischen anzeigend und versteckt umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerknopf ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolean-Attribut, das – falls vorhanden – angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten kann. Das Readonly-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Weitere Informationen finden Sie im [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `erforderlich` ist ein Boolean-Attribut, das – falls vorhanden – angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das besitzende Formular gesendet werden kann. Das Erforderlich-Attribut wird von den Eingaben `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Attributes/required).

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url` und `text`, das `size`-Attribut gibt an, wie viel von der Eingabe angezeigt wird. Grundsätzlich wird dasselbe Ergebnis erreicht wie beim Setzen der CSS-Eigenschaft [`width`](/de/docs/Web/CSS/width) mit einigen Besonderheiten. Die tatsächliche Einheit des Werts hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere ist es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`

  - : Nur für den Bild-Input-Button gültig. Das `src`-Attribut ist eine Zeichenfolge, die die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Submit-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss.

    Wenn nicht ausdrücklich angegeben:

    - `step` hat den Standardwert 1 für `number` und `range`.
    - Jeder Datum/Uhrzeit-Eingabetyp hat einen Standard `step`-Wert, der für den Typ geeignet ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step) und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl – ganzzahlig oder gleitend – oder der spezielle Wert `any` sein, was bedeutet, dass kein Schritt impliziert ist und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht ausdrücklich gesetzt ist, sind gültige Werte für die Zahl-, Datum/Uhrzeit- und Bereichseingabetypen gleich dem Basiswert für die Schritte – dem [`min`](#min)-Wert und Inkrementen des Schrittwerts, bis hin zum [`max`](#max)-Wert, falls angegeben.

    Beispiel: Wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Ganzzahl, die `10` oder größer ist, gültig. Wenn weggelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig `1` ist. Damit `4.2` gültig ist, hätte `step` auf `any`, 0.1, 0.2 oder ein Wert, der im .2 endet, gesetzt werden müssen, wie zum Beispiel `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, wird der Wert bei der constraint validation als ungültig angesehen und weist die `:invalid`-Pseudo-Klasse zu.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-side_validation).

- `tabindex`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliger Attribut, der angibt, ob das Element den Eingabefokus aufnehmen kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen außer Input vom Typ hidden fokussierbar sind, sollte dieses Attribut nicht auf Formularsteuerelemente angewendet werden, da dies die Verwaltung der Fokussreihenfolge für alle Elemente im Dokument erforderlich machen würde, wobei die Gefahr besteht, dass es bei falscher Durchführung die Benutzbarkeit und Barrierefreiheit schädigt.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text enthält, der Beratungsinformationen bezüglich des Elements enthält, zu dem es gehört. Solche Informationen können typischerweise, aber nicht zwingend, dem Benutzer als Tooltip angezeigt werden. Der Titel sollte NICHT als primäre Erklärung für den Zweck der Formularsteuerung verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut der Formsteuerung gesetzt ist. Siehe unten [Labels](#labels).

- `type`

  - : Eine Zeichenfolge, die den Typ der ausgegebenen Steuerung angibt. Zum Beispiel, um ein Kontrollkästchen zu erstellen, wird `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet, wodurch ein reines Texteingabefeld erstellt wird.

    Zulässige Werte sind in [Eingabetypen](#input_types) oben aufgeführt.

- `value`

  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Ausgangswert. Ab dann kann er jederzeit geändert oder abgerufen werden, indem JavaScript verwendet wird, um auf die entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft `value` zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch als verpflichtend für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`

  - : Nur für den Bild-Input-Button gültig. Das `width`-Attribut gibt die Breite der Bilddatei an, die angezeigt werden soll, um den grafischen Submit-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht-standardmäßige Attribute

Die folgenden nicht-standardmäßigen Attribute sind ebenfalls in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie deren Verwendung vermeiden, es sei denn, das kann nicht vermieden werden.

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
        Eine Zeichenfolge, die angibt, ob die Autokorrektur <code>on</code> oder <code>off</code> ist. <strong>Safari only.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#incremental"><code>incremental</code></a></td>
      <td>
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)
        Ereignisse gesendet werden, um Live-Suchergebnisse beim Bearbeiten des Feldwerts zu aktualisieren.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Eine Zeichenfolge, die den Aktionstyp angibt, der ausgeführt wird, wenn der Benutzer
        die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt, während das Feld bearbeitet wird; dies wird verwendet, um eine
        angemessene Beschriftung für diese Taste auf einer virtuellen Tastatur zu ermitteln. <strong>Da dieses Attribut veraltet ist, verwenden Sie bitte <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Stellt die Orientierung des Bereichsschiebereglers ein. <strong>Nur Firefox</strong>.
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
        Ein Boolean, der angibt, ob dem Benutzer nur das Auswählen eines Verzeichnisses (bzw. von Verzeichnissen, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) gestattet ist
      </td>
    </tr>
  </tbody>
</table>

- `autocorrect` {{non-standard_inline}}

  - : (Nur Safari). Eine Zeichenfolge, die angibt, ob die automatische Korrektur während der Bearbeitung dieses Feldes aktiviert sein soll. Zulässige Werte sind:

    - `on`
      - : Aktivieren der automatischen Korrektur von Tippfehlern sowie Verarbeitung von Textsubstitutionen, falls vorhanden.
    - `off`
      - : Deaktivieren der automatischen Korrektur und Textsubstitutionen.

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome usw.), die – falls vorhanden – dem [user agent](/de/docs/Glossary/user_agent) sagt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht es Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer die Suche ausdrücklich initiiert (z.B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

    Das `search`-Ereignis ist so begrenzt, dass es nicht häufiger als in einem vom Benutzeragenten definierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich dem -moz-orient nicht-standardmäßigen CSS-Attribut, das die Elemente {{htmlelement('progress')}} und {{htmlelement('meter')}} betrifft, definiert das Attribut `orient` die Orientierung des Bereichsschiebereglers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wobei der Bereich vertikal gerendert wird. Sehen Sie sich für einen modernen Ansatz zur Erstellung vertikaler Formulareingabesteuerungen die [Erstellung vertikaler Formulareingabesteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) an.

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut – unterstützt nur von Safari – ist ein numerischer Wert, mit dem Sie die maximale Anzahl von Einträgen, die im nativ bereitgestellten Dropdown-Menü des `<input>`-Elements von vorherigen Suchanfragen angezeigt werden sollen, außer Kraft setzen.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wird er nicht bereitgestellt oder ein ungültiger Wert angegeben, wird die maximale Anzahl der Einträge des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass nur Verzeichnisse vom Benutzer im Datei-Auswahlinterfacet ausgewählt werden können. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, kann `webkitdirectory` auch in Microsoft Edge sowie in Firefox 50 und später verwendet werden. Obwohl es relativ breit unterstützt wird, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, welche `<input>`-Elemente im DOM darstellt. Ebenfalls stehen die von den übergeordneten Schnittstellen, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) festgelegten Methoden zur Verfügung.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements den Gültigkeitsprüfungen entspricht; andernfalls gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements den Gültigkeitsprüfungen entspricht; andernfalls gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und informiert den Benutzer über das Problem (falls das Ereignis nicht abgebrochen wird).
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Bei Eingaben ohne auswählbare Textinhalte (wie beispielsweise einem visuellen Farbwähler oder einer Kalenderdateneingabe) hat diese Methode keine Wirkung.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabefelds ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabefeld auf eine gegebene Zeichenfolge. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der bestehende Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines Texteingabefelds aus. Hat keine Wirkung für Eingaben, die nicht als Texteingabefelder angezeigt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den im Browser integrierten Picker für das Eingabefeld an, der normalerweise angezeigt würde, wenn das Element ausgewählt wurde, jedoch ausgelöst durch einen Tastendruck oder eine andere Benutzerinteraktion.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins standardmäßig oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Eingaben, als ersetzte Elemente, verfügen über einige Funktionen, die nicht auf Nicht-Formular-Elemente anwendbar sind. Es gibt CSS-Selektoren, die speziell auf Formulareingabesteuerungen basierend auf deren Benutzeroberflächenmerkmalen abzielen können, auch bekannt als UI-Pseudo-Klassen. Das Eingabeelement kann auch nach Typ mit Attributselektoren gezielt werden. Es gibt einige Eigenschaften, die auch besonders nützlich sind.

### UI-Pseudo-Klassen

<table class="no-markdown">
  <caption>
    Bildunterschriften, die sehr relevant für das
    <code>&#x3C;input></code>
    Element sind:
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
        Jedes derzeit aktivierte Element, das aktiviert (ausgewählt, angeklickt
        werden, eingegeben, etc.) werden kann oder den Fokus erhalten kann und
        auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder
        den Fokus erhalten kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es andernfalls aktiviert werden könnte (ausgewählt, angeklickt werden, eingegeben, etc.) oder den Fokus erhalten könnte, wäre es nicht deaktiviert.
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
        einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das bisher keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die in einer Gruppe verwandter Elemente das Standard sind.
        Trifft auf {{HTMLElement("input/checkbox", "checkbox")}}- und
        {{HTMLElement("input/radio", "radio")}}-Eingabetypen zu, die
        beim Laden oder Rendern der Seite aktiviert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Trifft auf {{HTMLElement("input/checkbox", "checkbox")}}- und
        {{HTMLElement("input/radio", "radio")}}-Eingabetypen zu, die
        derzeit aktiviert sind (und das ({{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, der derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente,
        deren Indeterminate-Eigenschaft von JavaScript auf `true` gesetzt ist,
        {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle
        Radio-Buttons mit dem gleichen Namenswert im Formular nicht aktiviert sind, und
        {{HTMLElement("progress")}}-Elemente, die sich im unbestimmten Zustand befinden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die Constraints angewendet werden können und die
        derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die Constraint-Validierung angewendet wurde und die derzeit
        nicht gültig sind. Trifft auf ein Formulareingabefeld zu, dessen Wert nicht mit den
        durch seine Attribute festgelegten Einschränkungen übereinstimmt, wie
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren derzeitiger Wert innerhalb der von den <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>-Attributen und dem <a href="#step"><code>step</code></a> festgelegten Bereichsbegrenzungen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren derzeitiger Wert NICHT innerhalb der von den <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a>-Attributen festgelegten Bereichsbegrenzungen liegt
        oder nicht den <a href="#step"><code>step</code></a>-Anforderungen genügt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das Attribut <a href="#required"><code>required</code></a> gesetzt hat.
        Trifft nur auf Elemente zu, die erforderlich sein können.
        Das Attribut, wenn es bei einem nicht erforderlichen Element enthalten ist, führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}}-Element, das nicht das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Trifft nicht auf Elemente zu, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch bei Blur aktiviert. Trifft
        auf ungültige Eingaben zu, jedoch nur nach der Nutzerinteraktion, wie durch Fokussieren
        auf die Steuerung, Verlassen der Steuerung oder Versuch, das Formular mit der ungültigen Steuerung zu senden.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudo-Klassen Beispiel

Wir können ein Kontrollkästchen-Label basierend darauf stylen, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}s, das direkt nach einer aktivierten Eingabe kommt. Wir haben keine Stile angewendet, wenn die `input`-Eingabe nicht aktiviert ist.

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

Es ist möglich, auf verschiedene Arten von Formulareingabesteuerungen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) zu zielen. CSS-Attributselektoren erreichen Elemente basierend entweder nur auf der Anwesenheit eines Attributs oder dem Wert eines gegebenen Attributs.

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

Standardmäßig ist das Erscheinungsbild des Platzhaltertextes ein lichtgrau oder durchscheinend. Das {{cssxref('::placeholder')}}-Pseudo-Element ist der [`placeholder` text](#placeholder) der Eingabe. Es kann mit einer begrenzten Anzahl CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Subset der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}}-Pseudo-Element anwendbar sind, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### appearance

Die {{cssxref("appearance")}}-Eigenschaft ermöglicht das Anzeigen (fast) jedes Elements als plattformnativer Stil basierend auf dem Betriebssystem-Thema sowie das Entfernen jeglicher plattformnativer Stile mit dem `none`-Wert.

Man könnte ein `<div>` wie ein Radio-Button mit `div {appearance: radio;}` oder
