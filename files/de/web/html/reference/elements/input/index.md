---
title: "`<input>` HTML-Eingabeelement"
short-title: <input>
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<input>`**-Element von [HTML](/de/docs/Web/HTML) wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten von Benutzern zu akzeptieren; je nach Gerät und {{Glossary("user_agent", "User-Agent")}} stehen eine Vielzahl von Eingabedatentypen und Steuerungswidgets zur Verfügung. Das `<input>`-Element ist eines der leistungsstärksten und komplexesten in ganz HTML, aufgrund der Vielzahl an Kombinationen von Eingabetypen und Attributen.

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

## \<input> Typen

Wie ein `<input>` funktioniert, variiert erheblich je nach Wert des [`type`](#type)-Attributs, weshalb die verschiedenen Typen in eigenen separaten Referenzseiten behandelt werden. Wenn dieses Attribut nicht angegeben ist, wird als Standardtyp `text` verwendet.

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
        Ein Druckknopf ohne voreingestelltes Verhalten, der den Wert des <a href="#value"><code>value</code></a>-Attributs anzeigt, standardmäßig leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Eine Checkbox, die die Auswahl/Abwahl einzelner Werte ermöglicht.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerungselement zur Auswahl einer Farbe; öffnet einen Farbwähler in unterstützenden Browsern.
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
        Öffnet einen Datumsauswähler oder numerische Räder für Jahr, Monat und Tag in unterstützenden Browsern.
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
        Ein Steuerungselement zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Räder für Datumskomponenten und Zeiteingaben in unterstützenden Browsern.
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
        <code>text</code>-Eingabefeld, aber enthält Validierungsparameter und relevante
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
        Ein Steuerelement, das dem Benutzer die Auswahl einer Datei ermöglicht.
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
        Ein Steuerelement, das nicht angezeigt wird, dessen Wert jedoch an den
        Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist verborgen!
      </td>
      <td id="examplehidden">
        <pre class="brush: html hidden">
&#x3C;input id="userId" name="userId" type="hidden" value="abc123" /></pre
        >
        {{EmbedLiveSample("examplehidden",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/image", "image")}}</td>
      <td>
        Ein grafischer <code>submit</code>-Button. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert ist.
        Das <a href="#alt"><code>alt</code></a>-Attribut wird angezeigt, wenn das Bild<a href="#src"><code>src</code></a> fehlt.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>Ein Kontrollfeld zur Eingabe von Monat und Jahr, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Kontrollfeld zur Eingabe einer Zahl. Zeigt einen Spinnbutton und fügt eine Standardvalidierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Radio-Button, der es erlaubt, einen einzelnen Wert aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Ein Steuerungselement zur Eingabe einer Zahl, deren exakter Wert unwichtig ist.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann ein Löschsymbol in unterstützenden Browsern enthalten, das zum Löschen des Feldes verwendet werden kann. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
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
        Ein Steuerungselement zur Eingabe einer Telefonnummer. Zeigt eine Telefon-Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabefeld, hat jedoch Validierungsparameter und relevante Tastaturen in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerungselement zur Eingabe eines Datums, bestehend aus einer Wochennummer und einer Jahreszahl, ohne Zeitzone.
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
        Ein Steuerungselement zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist aufgrund seiner Attribute so leistungsstark; das [`type`](#type)-Attribut, das oben mit Beispielen beschrieben wurde, ist hierbei das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch dasselbe Attributset. In der Realität haben jedoch die meisten Attribute nur auf eine spezifische Untergruppe von Eingabetypen eine Wirkung. Darüber hinaus wirkt sich die Art und Weise, wie einige Attribute ein Eingabeelement beeinflussen, je nach Eingabetyp unterschiedlich aus.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Nach dieser Tabelle folgt eine Liste, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie verbunden sind. Diejenigen, die zu den meisten oder allen Eingabetypen gehören, sind weiter unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind, oder Attribute, die bei allen Eingabetypen gemein sind, aber spezielle Verhaltensweisen aufweisen, wenn sie auf einem bestimmten Eingabetyp verwendet werden, werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                   | Beschreibung                                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                    | Hinweis auf den erwarteten Dateityp in Datei-Upload-Steuerelementen                                 |
| [`alpha`](#alpha)                             | `color`                                                                   | Transparenz der Farbe                                                                               |
| [`alt`](#alt)                                 | `image`                                                                   | `alt` Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                   |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email`, und `password`                                 | Steuert die automatische Großschreibung im eingegebenen Text.                                       |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio`, und `buttons`                             | Hinweis für Autofill-Funktion des Formulars                                                         |
| [`capture`](#capture)                         | `file`                                                                    | Methode der Medienaufnahme in Datei-Upload-Steuerelementen                                          |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                       | Ob der Befehl oder das Steuerelement aktiviert ist                                                  |
| [`colorspace`](#colorspace)                   | `color`                                                                   | Der {{Glossary("Color_space", "Farbraum")}}, der zum Auswählen des Farbwertes verwendet werden soll |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                         | Name des Formularfeldes zum Senden der Richtung des Elements bei der Formularübermittlung           |
| [`disabled`](#disabled)                       | alle                                                                      | Ob das Steuerelement des Formulars deaktiviert ist                                                  |
| [`form`](#form)                               | alle                                                                      | Verbindet das Steuerelement mit einem Formularelement                                               |
| [`formaction`](#formaction)                   | `image`, `submit`                                                         | URL zur Verwendung für die Formularübermittlung                                                     |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                         | Datensatz-Codierungstyp für die Formularübermittlung                                                |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                         | HTTP-Methode zur Verwendung für die Formularübermittlung                                            |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                         | Umgehung der Formularsteuerungsvalidierung bei der Formularübermittlung                             |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                         | Browsing-Kontext für die Formularübermittlung                                                       |
| [`height`](#height)                           | `image`                                                                   | Entspricht dem Höhenattribut für {{htmlelement('img')}}; Vertikale Dimension                        |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio`, und `buttons`       | Wert des id-Attributes der {{htmlelement('datalist')}} der Autovervollständigungsoptionen           |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`      | Maximalwert                                                                                         |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                       | Maximale Länge (Zeichenanzahl) von `value`                                                          |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`      | Minimalwert                                                                                         |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                       | Minimale Länge (Zeichenanzahl) von `value`                                                          |
| [`multiple`](#multiple)                       | `email`, `file`                                                           | Boolean. Ob mehrere Werte erlaubt werden                                                            |
| [`name`](#name)                               | alle                                                                      | Name des Formularsteuerelements. Wird zusammen mit dem Wert als Name/Werte-Paar übermittelt         |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                       | Muster, das `value` entsprechen muss, um gültig zu sein                                             |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`             | Text, der im Feld des Formularsteuerelements erscheint, wenn kein Wert festgelegt ist               |
| [`popovertarget`](#popovertarget)             | `button`                                                                  | Bezeichnet ein `<input type="button">` als Steuerelement für ein Popover-Element                    |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                  | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                    |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio`, und `buttons` | Boolean. Der Wert ist nicht bearbeitbar                                                             |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color`, und `buttons`                      | Boolean. Ein Wert ist erforderlich oder muss überprüft werden, damit das Formular absendbar ist     |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                       | Größe des Steuerelements                                                                            |
| [`src`](#src)                                 | `image`                                                                   | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                 |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`      | Inkrementell gültige Werte                                                                          |
| [`switch`](#switch)                           | `checkbox`                                                                | Ob das Kontrollkästchen als Schalter gerendert werden soll                                          |
| [`type`](#type)                               | alle                                                                      | Art des Formularsteuerelements                                                                      |
| [`value`](#value)                             | alle außer `image`                                                        | Der Wert des Steuerelements. Bei Angabe im HTML entspricht er dem Anfangswert                       |
| [`width`](#width)                             | `image`                                                                   | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                          |

Einige zusätzliche nicht standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Nur gültig für den `file`-Eingabetyp, definiert das `accept`-Attribut, welche Dateitypen in einem Datei-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alpha` {{experimental_inline}}
  - : Nur gültig für den `color`-Eingabetyp, ermöglicht das `alpha`-Attribut dem Endbenutzer, die Deckkraft der ausgewählten Farbe festzulegen.

- `alt`
  - : Gültig nur für den `image`-Button, bietet das `alt`-Attribut einen alternativen Text für das Bild, der den Wert des Attributs anzeigt, falls das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, auf welche Weise. Weitere Informationen finden Sie auf der Seite zum [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)-Attribut der globalen Attribute.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette, die beschreibt, welche, wenn überhaupt, Autovervollständigungsfunktionen die Eingabe bereitstellen soll. Eine typische Implementierung von Autovervollständigung ruft frühere Werte ab, die in dasselbe Eingabefeld eingegeben wurden, aber es können komplexere Formen von Autovervollständigung existieren. Beispielsweise könnte ein Browser mit der Kontaktliste eines Geräts integrieren, um `email`-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Weitere Informationen zu den erlaubten Werten finden Sie unter [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value).

    Das `autocomplete`-Attribut ist gültig bei `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Wirkung auf Eingabetypen, die keine numerischen oder textbasierten Daten zurückgeben, und ist für alle Eingabetypen außer `checkbox`, `radio`, `file` oder einem der Button-Typen gültig.

    Weitere Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` für `hidden` leicht anders funktioniert als für andere Eingabetypen, finden Sie im Abschnitt zum [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete).

- `autofocus`
  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass die Eingabe automatisch den Fokus erhalten soll, wenn die Seite geladen ist (oder wenn der {{HTMLElement("dialog")}} das Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element gesetzt wird, erhält das erste mit diesem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Einem Formularsteuerelement automatisch den Fokus zu geben kann visuell beeinträchtigte Menschen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, "teleportieren" Bildschirmleser den Benutzer zum Formularsteuerelement, ohne sie vorher zu warnen.

    Verwenden Sie beim Zuweisen des `autofocus`-Attributs sorgfältige Überlegungen zur Barrierefreiheit. Automatisches Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dynamische Tastaturen auf einigen Touch-Geräten anzeigen. Während ein Bildschirmleser die Bezeichnung des Formularsteuerelements beim Fokus ankündigt, wird der Bildschirmleser nichts vor der Bezeichnung bekannt geben, und der sehende Benutzer auf einem kleinen Gerät wird den Kontext, der durch den vorangestellten Inhalt erstellt wurde, ebenso verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den `file`-Eingabetyp, definiert das `capture`-Attribut, welches Medium—Mikrofon, Video oder Kamera—zum Erfassen einer neuen Datei für den Upload mit dem Datei-Upload-Steuerelement in unterstützenden Szenarien verwendet werden soll. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`
  - : Gültig für sowohl `radio`- als auch `checkbox`-Typen, `checked` ist ein Boolean-Attribut. Wenn es auf einem `radio`-Typ vorhanden ist, zeigt es an, dass der Radio-Button der derzeit ausgewählte in der Gruppe der gleichnamigen Radio-Buttons ist. Wenn es auf einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn der Status des Kontrollkästchens geändert wird, reflektiert dieses Inhaltsattribut die Änderung nicht. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird ein Wertepaar von Kontrollkästchen und Radio-Buttons nur gesendet, wenn sie derzeit `checked` sind. Wenn sie aktiviert sind, werden der Name und die Wert(e) des aktivierten Steuerelements gesendet.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat, und das Kontrollkästchen aktiviert ist, wird das Formular mit `fruit=cherry` gesendet. Wenn das Kontrollkästchen nicht aktiviert ist, wird es überhaupt nicht in den Formulardaten aufgeführt. Der Standardwert `value` für Kontrollkästchen und Radio-Buttons ist `on`.

- `colorspace` {{experimental_inline}}
  - : Nur gültig für den `color`-Eingabetyp, das `colorspace`-Attribut spezifiziert den {{Glossary("Color_space", "Farbraum")}}, der von der `type="color"` Eingabe verwendet wird. Mögliche {{Glossary("enumerated", "numerorierbare")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies umfasst {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}} und {{cssxref("hex-color")}} Werte. Der Farbwert ist auf 8-Bit pro `r`, `g` und `b`-Komponente begrenzt. Dies ist der Standardwert.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3 Farbraum")}}, z. B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen, ermöglicht das `dirname`-Attribut die Einsendung der Richtung des Elements. Bei Einbeziehung, wird das Formularsteuerelement mit zwei Name/Werte-Paaren gesendet: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das obige Formular gesendet wird, verursacht die Eingabe sowohl die `name` / `value`-Paarung von `fruit=cherry` als auch die `dirname` / Richtungs-Paarung von `fruit-dir=ltr`, die gesendet werden.
    Weitere Informationen finden Sie beim [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren können soll. Deaktivierte Eingaben werden typischerweise mit einer schwächeren Farbe oder unter Verwendung einer anderen Form der Anzeige dargestellt, dass das Feld nicht verfügbar ist.

    Insbesondere empfangen deaktivierte Eingaben das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis nicht, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation gefordert, wird Firefox standardmäßig [den dynamischen deaktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladungen hinweg beibehalten. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Ein String, der das {{HTMLElement("form")}}-Element spezifiziert, mit dem die Eingabe verbunden ist (also sein **Formularbesitzer**). Der Wert dieses Strings, falls vorhanden, muss der [`id`](#id) eines `<form>`-Elements im selben Dokument entsprechen. Wenn dieses Attribut nicht spezifiziert ist, wird das `<input>`-Element mit dem nächsten beinhaltenden Formular, falls vorhanden, verbunden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe überall im Dokument zu platzieren, aber sie zusammen mit einem Formular an anderer Stelle im Dokument zu verwenden.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verbunden sein.

- `formaction`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Nur gültig für den `image`-Button, das `height` ist die Höhe der Bilddatei, die angezeigt werden soll, um den grafischen Absende-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, definiert eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als der Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um das Label mit dem Formularsteuerelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, es bietet einen Hinweis für Browser, welche Art von virtueller Tastaturkonfiguration beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Zu den Werten gehören `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der Wert, der dem `list`-Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. Das `<datalist>` bietet eine Liste von vordefinierten Werten, um sie dem Benutzer für diese Eingabe vorzuschlagen. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut den Spezifikationen wird das `list`-Attribut von `hidden`, `password`, `checkbox`, `radio`, `file` oder einem der Button-Typen nicht unterstützt.

    Je nach Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Markierungen entlang eines Bereichs oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber nicht gelistete Werte zulässt. Überprüfen Sie die [Tabelle zur Browser-Kompatibilität](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den größten Wert im Bereich der zulässigen Werte. Wenn der eingegebene [`value`](#value) ins Element diesen Wert überschreitet, schlägt das Element [die Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (z. B. bei Datumsangaben oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass der Bereich sich überschlagen kann; zum Beispiel ermöglicht dies, einen Zeitbereich von 22 Uhr bis 4 Uhr anzugeben.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer ins Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt [die Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des Textes im Feld größer als `maxlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen als durch das `maxlength`-Attribut erlaubt eingeben. Die Einschränkungsvalidierung wird nur angewandt, wenn der Wert vom Benutzer geändert wird. Weitere Informationen finden Sie in der [Client-seitigen Validierung](#client-seitige_validierung).

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den negativsten Wert im Bereich der zulässigen Werte. Wenn der eingegebene [`value`](#value) ins Element weniger als dieser Wert ist, schlägt das Element [die Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewandt. Wenn das `min`-Attribut gültig ist und ein nicht-Nullwert kleiner ist als das Minimum, das das `min`-Attribut erlaubt, verhindert die Einschränkungsvalidierung die Formularübermittlung. Weitere Informationen finden Sie in der [Client-seitigen Validierung](#client-seitige_validierung).

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (z. B. bei Datumsangaben oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass der Bereich sich überschlagen kann; zum Beispiel erlaubt dies, einen Zeitbereich von 22 Uhr bis 4 Uhr anzugeben.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer ins Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt [die Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des Textes im Feld weniger als `minlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} lang ist, was die Formularübermittlung verhindert. Die Einschränkungsvalidierung wird nur angewandt, wenn der Wert vom Benutzer geändert wird. Weitere Informationen finden Sie in der [Client-seitigen Validierung](#client-seitige_validierung).

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das Boolean-Attribut `multiple`, falls gesetzt, bedeutet, dass der Benutzer durch Kommata getrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit dem `file`-Eingabesteuerung auswählen kann. Siehe die {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetypen.

- `name`
  - : Ein String, der einen Namen für das Eingabefeld festlegt. Dieser Name wird zusammen mit dem Wert des Steuerelements beim Senden vom Formulardatensatz übertragen.

    Betrachten Sie den `name` als ein erforderliches Attribut (auch wenn es das nicht ist). Wenn eine Eingabe keinen `name`-Wert festgelegt oder `name` leer ist, wird der Wert der Eingabe beim Formularsenden nicht übertragen! (Deaktivierte Steuerelemente, nicht markierte Radio-Buttons, nicht markierte Kontrollkästchen und Zurücksetzen-Buttons werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_` : Wenn es als Name eines `<input>`-Elements des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` des Eingabeelements automatisch vom {{Glossary("user_agent", "User-Agent")}} auf die Zeichenkodierung eingestellt, die zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erzeugt ein einzigartiges Verhalten für Radio-Buttons.

    Es kann nur ein Radio-Button in einer gleichnamigen Gruppe von Radio-Buttons gleichzeitig ausgewählt sein. Wenn ein Radio-Button dieser Gruppe ausgewählt wird, wird automatisch jeder momentan ausgewählte Radio-Button in derselben Gruppe abgewählt. Der Wert dieses einen ausgewählten Radio-Buttons wird zusammen mit dem Namen gesendet, wenn das Formular gesendet wird.

    Beim Tabben durch eine Serie von gleichnamigen Gruppen von Radio-Buttons, wenn einer ausgewählt ist, erhält dieser den Fokus. Wenn sie nicht in der Quellenreihenfolge gruppiert sind und einer der Gruppe ausgewählt ist, beginnt das Tabben der Gruppe, wenn der erste Button in der Gruppe erreicht wird, wobei alle nicht ausgewählten Radio-Buttons in der Gruppe übersprungen werden. Anders ausgedrückt: Wenn einer ausgewählt ist, überspringt das Tabben die nicht gewählten Radio-Buttons in der Gruppe. Wenn keiner ausgewählt ist, erhält die Radio-Button-Gruppe den Fokus, wenn der erste Button in der gleichnamigen Gruppe erreicht wird.

    Sobald ein Radio-Button der Gruppe den Fokus erhalten hat, wird beim Verwenden der Pfeiltasten durch alle Radio-Buttons desselben Namens navigiert, selbst wenn die Radio-Buttons nicht zusammengeordnet in der Quellenreihenfolge sind.

    Wenn ein Eingsooagelement ein `name`-Attribut hat, wird dieser Name zu einer Eigenschaft des dazugehörigen [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Objekts des Formulars. Wenn Sie ein Eingabeelement mit `name` auf `guest` gesetzt und ein anderes mit `name` auf `hat-size` haben, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein, und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularsteuerelementen einen `name` zu geben, der einer eingebauten Eigenschaft des Formulars entspricht, da Sie dann die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompilieren, dem der [`value`](#value) der Eingabe entsprechen muss, um [die Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserer [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Es sollten keine Schrägstriche um den Mustertext angegeben werden. Beim Kompilieren des regulären Ausdrucks:
    1. wird das Muster implizit mit `^(?:` und `)$` umgeben, sodass die Übereinstimmung gegen den _ganzen_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. Das `'v'`-Flag wird angegeben, sodass das Muster als eine Sequenz von Unicode-Codepunkten, anstatt als {{Glossary("ASCII", "ASCII")}} behandelt wird.

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird komplett ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht-leerer Wert nicht dem Muster entspricht, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck bei jedem durch Kommas getrennten Wert angewendet.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format durch das Hinzufügen eines erklärenden Textes in der Nähe. Sie können auch ein [`title`](#title)-Attribut hinzufügen, um zu erklären, welche Anforderungen erfüllt sein müssen, damit das Muster relevant ist; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Weitere Informationen finden Sie in der [Client-seitigen Validierung](#client-seitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis für den Benutzer, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die ein Hinweis auf den erwarteten Datentyp gibt, anstatt eine Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbruchzeichen enthalten. Beispielsweise, wenn von einem Feld erwartet wird, den Vornamen eines Benutzers zu erfassen, und sein Label `Vorname` lautet, könnte ein geeigneter Platzhalter `z.B. Mustafa` sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`
  - : Wandelt ein `<input type="button">`-Element in einen Popover-Steuerungsbutton um; nimmt die ID des zu steuernden Popover-Elements als seinen Wert. Weitere Details finden Sie auf der [Popover-API](/de/docs/Web/API/Popover_API)-Landeseite. Die Verbindung zwischen einem Popover und seinem Auslöser-Button über das `popovertarget`-Attribut hat zwei weitere nützliche Auswirkungen:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Verbindung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover zugänglicher für Tastatur- und Benutzer von unterstützenden Technologien (AT) (siehe auch [Popover-Bedienbarkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, wodurch es sehr bequem wird, Popover relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Weitere Informationen finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt an, welche Aktion auf ein gesteuertes Popover-Element von einem Kontrollbutton `<input type="button">` ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verstecken. Wenn versucht wird, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn versucht wird, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen anzeigen und verstecken umschalten. Wenn das Popover versteckt ist, wird es sichtbar gemacht; wenn das Popover sichtbar ist, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Kontrollbutton ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer den Wert der Eingabe nicht bearbeiten darf. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Weitere Informationen finden Sie im [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das dazugehörige Formular übermittelt werden kann. Das `required`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Weitere Informationen finden Sie in der [Client-seitigen Validierung](#client-seitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required).

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`, das `size`-Attribut gibt an, wie viel von der Eingabe angezeigt wird. Im Wesentlichen erzeugt es dasselbe Ergebnis wie das Setzen der CSS-Eigenschaft {{cssxref("width")}} mit einigen Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` handelt es sich um eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere ist es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`
  - : Nur gültig für den `image`-Button, das `src` ist ein String, der die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Absende-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut ist eine Zahl, die die Granularität spezifiziert, der der Wert entsprechen muss. Nur Werte, die eine ganze Zahl von Schritten vom Schritt-Basiswert entfernt sind, sind gültig. Der Schritt-Basiswert ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), falls angegeben, sonst [`value`](#value), oder `0`, wenn keiner angegeben ist (außer für `week`, welches einen Standard-Schritt-Basiswert von −259.200.000 hat, das dem Anfang der Woche `1970-W01` entspricht).

    Wird `step` nicht explizit angegeben:
    - `step` ist standardmäßig auf 1 für `number` und `range` gesetzt.
    - Jeder Date/Time-Eingabetyp hat einen eigenen Standardwert für `step`, der zum Typ passt; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step), und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein—ganz oder gebrochen—oder der spezielle Wert `any`, welcher bedeutet, dass kein Schritt erforderlich ist, und jeder Wert zulässig ist (andere Einschränkungen wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) vorbehalten).

    Zum Beispiel: Wenn Sie `<input type="number" min="10" step="2">` haben, sind alle gerade Ganzzahlen, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber keine gebrochenen (wie `4.2`), weil `step` standardmäßig `1` ist. Damit `4.2` gültig ist, hätte `step` auf `any`, 0.1, 0.2 festgesetzt werden müssen, oder der `min`-Wert hätte mit `.2` enden müssen, wie z.B. `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht den Konfiguration zur Inkrementierung entsprechen, wird der Wert in der Einschränkungsvalidierung als ungültig angesehen und entspricht der `:invalid`-Pseudoklasse.

    Weitere Informationen finden Sie in der [Client-seitigen Validierung](#client-seitige_validierung).

- [`switch`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#switch) {{experimental_inline}} {{non-standard_inline}}
  - : Nur gültig für `checkbox`-Eingabe, `switch` ist ein Boolean-Attribut, das angibt, ob das Kontrollkästchen als Schalter gerendert werden soll.

    > [!NOTE]
    > Dieses Attribut ist noch experimentell und hat begrenzte Unterstützung im Browser. Es wird auf nicht unterstützten Browsern ignoriert.

- `tabindex`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element fokussierbar ist, ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen, außer für den Typ `hidden`, fokussierbar sind, sollte dieses Attribut nicht auf Formularsteuerelementen verwendet werden, da dies erfordern würde, die Fokusreihenfolge für alle Elemente im Dokument zu verwalten, mit dem Risiko, die Benutzerfreundlichkeit und Barrierefreiheit zu beeinträchtigen, wenn es nicht richtig gemacht wird.

- `title`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text darstellt, der beratende Informationen über das Element enthält, zu dem es gehört. Solche Informationen können typischerweise, aber nicht unbedingt, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung für den Zweck des Formularsteuerelements verwendet werden. Stattdessen verwenden Sie das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut des Formularsteuerelements setzt. Siehe [Labels](#labels) unten.

- `type`
  - : Ein String, der die Art der zu rendernenden Steuerung angibt. Zum Beispiel, um eine Checkbox zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn ausgelassen (oder ein unbekannter Wert angegeben), wird der Eingabetyp `text` verwendet, wodurch ein Klartext-Eingabefeld erstellt wird.

    Erlaubte Werte sind oben in den [Eingabetypen](#input_types) aufgelistet.

- `value`
  - : Der Wert der Eingabesteuerung. Bei Angabe im HTML ist dies der Anfangswert, und von da an kann er jederzeit mithilfe von JavaScript abgerufen oder geändert werden, indem auf die `value`-Eigenschaft des entsprechenden [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts zugegriffen wird. Das `value`-Attribut ist immer optional, jedoch sollte es als obligatorisch für `checkbox`, `radio` und `hidden` angesehen werden.

- `width`
  - : Nur gültig für den `image`-Button, das `width` ist die Breite der Bilddatei, die angezeigt werden soll, um den grafischen Absende-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie diese vermeiden, es sei denn, es lässt sich nicht vermeiden.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, um die Aktualisierung von Live-Suchergebnissen zu ermöglichen, während der Benutzer den Wert des Feldes noch bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der angibt, welche Art von Aktion ausgeführt wird, wenn der Benutzer die <kbd>Eingabe</kbd>- oder <kbd>Return</kbd>-Taste drückt, während er das Feld bearbeitet; dies dient dazu, ein geeignetes Label für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Ausrichtung des Range-Sliders fest. <strong>Nur Firefox.</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl der Elemente, die in der Drop-down-Liste vorheriger Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, das angibt, ob nur Verzeichnisse (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) vom Benutzer ausgewählt werden dürfen.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome, etc.), die, falls vorhanden, den {{Glossary("user_agent", "User-Agent")}} auffordert, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (zum Beispiel, indem er die <kbd>Eingabe</kbd>- oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes drückt).

    Das `search`-Ereignis ist ratelimitiert, sodass es nicht häufiger als in einem vom Anbieter definierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}
  - : Ähnlich wie die nicht-standardisierte CSS-Eigenschaft `-moz-orient` auf die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente wirkt, definiert das `orient`-Attribut die Ausrichtung des Range-Sliders. Werte sind `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) für einen modernen Ansatz zum Erstellen vertikaler Formularelemente.

- `results` {{non-standard_inline}}
  - : Das `results`-Attribut wird nur von Safari unterstützt und ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die in der nativ bereitgestellten Drop-down-Liste des `<input>`-Elements vorheriger Suchanfragen angezeigt werden soll.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn er nicht bereitgestellt ist oder ein ungültiger Wert angegeben wird, wird die Standardeinstellung des Browsers für die maximale Anzahl von Einträgen verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass nur Verzeichnisse vom Benutzer im Datei-Auswahldialog ausgewählt werden dürfen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie in Firefox 50 und späteren Versionen nutzbar. Obwohl es eine relativ breite Unterstützung hat, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Methoden

Die folgenden Methoden werden durch die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM repräsentiert. Zusätzlich stehen die Methoden zur Verfügung, die von den übergeordneten Schnittstellen [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) spezifiziert sind.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfung besteht; andernfalls gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfung besteht; andernfalls gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und gibt (falls das Ereignis nicht abgebrochen wird) das Problem dem Benutzer bekannt.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt (wie z. B. einem visuellen Farbwähler oder einem Kalenderdatumeingabefeld) macht diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Legt den Inhalt des angegebenen Zeichensbereichs im Eingabeelement auf eine gegebene Zeichenfolge fest. Ein `selectMode`-Parameter steht zur Verfügung, um zu steuern, wie der vorhandene Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichensbereich innerhalb eines Texteingabeelements aus. Bei Eingaben, die nicht als Texteingabefelder dargestellt werden, wird nichts unternommen.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Picker für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Eingaben, als ersetzte Elemente, haben einige Merkmale, die bei Nicht-Formular-Elementen nicht anwendbar sind. Es gibt CSS-Selektoren, die speziell auf Formularsteuerungen basierend auf ihren Benutzeroberflächenmerkmalen, auch bekannt als UI-Pseudoklassen, abzielen können. Das Eingabeelement kann auch nach Typ mit Attributselektoren gezielt angesprochen werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudoklassen relevant für das
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
        eingegeben usw.) oder fokussiert werden kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es andernfalls aktiviert (ausgewählt, angeklickt, eingegeben usw.) oder fokussiert werden könnte, wenn es nicht deaktiviert wäre.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element, das vom Benutzer nicht bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>Platzhalter</code>-Text</a> anzeigt,
        einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elementen mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das bisher keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die standardmäßig in einer Gruppe von verwandten Elementen sind.
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die bei Seitenladen oder Rendern aktiviert wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die
        derzeit aktiviert sind (und die {{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, die derzeit ausgewählt sind).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren unbestimmte Eigenschaft von JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Radioknöpfe mit demselben Namenswert im Formular nicht aktiviert sind, und
        {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
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
        Formularsteuerungen, auf die Einschränkungsvalidierung angewendet wurde und die derzeit ungültig sind. Passt auf eine Formularsteuerung, deren Wert nicht den durch ihre Attribute festgelegten Einschränkungen entspricht, wie
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die Attribute <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> sowie die <a href="#step"><code>step</code></a> angegebenen Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die Attribute <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a> angegebenen Bereichsgrenzen liegt oder
        die die <a href="#step"><code>step</code></a>-Einschränkung nicht einhält.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, auf das das <a href="#required"><code>required</code></a>-Attribut angewendet wurde.
        Passt nur zu Elementen, die erforderlich sein können.
        Das Attribut, das bei einem nicht erforderlichen Element enthalten ist, führt nicht zu einem Treffer.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}}-Element, auf das das <a href="#required"><code>required</code></a>-Attribut nicht angewendet wurde.
        Passt nicht zu Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlassen aktiviert. Passt zu
        ungültigen Eingaben, jedoch nur nach Benutzerinteraktionen, wie durch Fokussierung auf die Steuerung, Verlassen der Steuerung oder dem Versuch, das Formular mit der ungültigen Steuerung abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Picker anzeigen, aus dem der Benutzer einen Wert auswählen kann (z. B. <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) - aber nur, wenn das Element im offenen Zustand ist, das heißt, wenn der Picker angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen-Beispiel

Wir können einen Kontrollkästchenbeschriftung basierend darauf gestalten, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel gestalten wir die {{cssxref('color')}} und {{cssxref('font-weight')}} der {{htmlelement('label')}}, die unmittelbar nach einer aktivierten Eingabe kommt. Wir haben keine Stile angewendet, wenn die `input` nicht aktiviert ist.

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

Es ist möglich, verschiedene Arten von Formularsteuerungen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) zu zielen. CSS-Attributselektoren stimmen mit Elementen basierend entweder nur auf dem Vorhandensein eines Attributs oder dem Wert eines bestimmten Attributs überein.

```css
/* matches a password input */
input[type="password"] {
}

/* matches a form control whose valid values are limited to a range of values */
input[min][max] {
}

/* matches a form control with a pattern attribute */
input[pattern] {
}
```

### ::placeholder

Standardmäßig erscheint der Platzhaltertext transluzent oder hellgrau. Das {{cssxref('::placeholder')}}-Pseudoelement ist der [`placeholder` Text](#placeholder) der Eingabe. Es kann mit einem eingeschränkten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Satz von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}}-Pseudoelement angewendet werden können, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### caret-color

Eine für Texteingaben spezifische Eigenschaft ist die CSS {{cssxref("caret-color")}}-Eigenschaft, mit der Sie die Farbe festlegen können, die zum Zeichnen des Text-Carets verwendet wird:

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
    sans-serif;
}
```

#### Ergebnis

{{EmbedLiveSample('caret-color', 500, 80)}}

### field-sizing

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie erhalten standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und Formularelemente so einzustellen, dass sie sich an ihre Inhalte anpassen.

Diese Eigenschaft wird üblicherweise verwendet, um Formularfelder zu erstellen, die sich an ihren Inhalt anpassen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingaben akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}}-Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nichttextuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn dies der Fall ist, kann die Position und Größe der Größe des Elements und seiner Positionierung innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen über das Hinzufügen von Farbe zu Elementen in HTML, siehe:

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color).

Siehe auch:

- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Styling-Optionen für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Weitere Funktionen

### Labels

Labels sind erforderlich, um unterstützenden Text mit einem `<input>`-Element zu verknüpfen. Das {{HTMLElement("label")}}-Element liefert erklärende Informationen zu einem Formularfeld, die _immer_ angebracht sind (abgesehen von Layout-Bedenken, die Sie haben). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder ein {{HTMLElement("textarea")}} eingebracht werden soll.

#### Zugeordnete Labels

Die semantische Kopplung von `<input>`- und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Bildschirmleser. Indem Sie sie mit dem [`for`](#for)-Attribut des `<label>` verbinden, verknüpfen Sie das Label mit der Eingabe auf eine Weise, die es Bildschirmlesern ermöglicht, Eingaben für die Benutzer genauer zu beschreiben.

Es reicht nicht aus, Klartext neben dem `<input>`-Element zu haben. Vielmehr erfordert Benutzerfreundlichkeit und Barrierefreiheit die Aufnahme entweder impliziter oder expliziter {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht zugänglich: Es existiert keine Beziehung zwischen der Eingabeaufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere Anklick- und Berührfläche für Maus- und Touchscreen-Benutzer. Indem Sie ein `<label>` mit einem `<input>` verbinden, werden durch das Klicken auf eines von beiden den Fokus auf das `<input>` gesetzt. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu "kennzeichnen", passiert das nicht. Die Aufnahme der Eingabeaufforderung in den Aktivierungsbereich der Eingabe ist hilfreich für Personen mit motorischen Behinderungen.

Als Webentwickler sollten wir nie davon ausgehen, dass die Menschen alles Wissen, was wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und damit Ihre Website – garantiert praktisch, dass einige Ihrer Besucher Unterschiede in den Denkprozessen und/oder Umständen haben, was dazu führt, dass sie Ihre Formulare sehr unterschiedlich von Ihnen interpretieren, ohne klare und richtig präsentierte Labels.

#### Platzhalter sind nicht barrierefrei

Das [`placeholder`](#placeholder)-Attribut erlaubt es Ihnen, Text anzugeben, der im Inhaltsbereich des `<input>`-Elements selbst erscheint, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als solches verwendet werden, weil er es nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht jedoch als Erklärung oder Eingabeaufforderung.

Der Platzhalter ist nicht nur für Bildschirmleser nicht zugänglich, sondern verschwindet auch, sobald der Benutzer Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert hat. Browser mit automatischen Seitentranslationsfunktionen könnten Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` unter Umständen nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie nicht das [`placeholder`](#placeholder)-Attribut, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element kennzeichnen müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Die Client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, überprüfen Sie sie _immer_ auch serverseitig und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf dem aktuellen Zustand jedes Eingabefeldes in den {{cssxref(":valid")}}- oder {{cssxref(":invalid")}}-UI-Zuständen zu gestalten, stellt der Browser eine client-seitige Validierung bei der (versuchten) Formularübermittlung zur Verfügung. Bei der Formularübermittlung zeigt der Browser, wenn eine Formularsteuerung die Einschränkungsvalidierung nicht besteht, bei unterstützenden Browsern eine Fehlermeldung auf der ersten ungültigen Formularsteuerung an; entweder eine Standardnachricht basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Nachricht.

Einige Eingabetypen und andere Attribute schränken ein, welche Werte für eine bestimmte Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Nummern 2, 4, 6, 8 oder 10 gültig sind. Verschiedene Fehler könnten auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10, aber keine gerade Ganzzahl ist (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Domain möglicher Werte periodisch ist (d.h. bei Erreichen des höchsten möglichen Wertes kehren die Werte wieder zum Anfang zurück, anstatt zu enden), ist es möglich, dass die Werte der Eigenschaften [`max`](#max) und [`min`](#min) vertauscht werden, was darauf hinweist, dass der Bereich der zulässigen Werte bei `min` beginnt, zum niedrigsten möglichen Wert umschlägt und dann bis `max` fortgesetzt wird. Dies ist besonders nützlich für Daten und Zeiten, z. B. wenn Sie wollen, dass der Bereich von 20 Uhr bis 8 Uhr morgens reicht:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und deren Werte können zu einem bestimmten [`ValidityState`-Fehler führen](/de/docs/Web/API/ValidityState):

<table class="no-markdown">
  <caption>
    Validiäts-Objektfehler hängen von den <code>&lt;input&gt;</code>
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
        Tritt auf, wenn der Wert größer als der maximale Wert ist, der durch das
        <code>max</code> Attribut definiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code>-Eigenschaft erlaubte Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner als der durch das <code>min</code>-Attribut definierte minimale Wert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code>-Eigenschaft erforderliche Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Musterausdruck mit einer gültigen regulären Ausdruck und dem <code>value</code> nicht übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, der Wert jedoch <code>null</code> ist oder das Radio- oder Kontrollkästchen nicht ausgewählt ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert passt nicht zur Schrittweite. Der Schritt-Standardwert ist <code>1</code>, daher sind nur Ganzzahlen gültig, wenn der <code>type="number"</code>
        ist und step nicht enthalten ist. <code>step="any"</code> wird diesen Fehler nie auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, zum Beispiel enthält eine E-Mail kein <code>@</code> oder eine URL enthält kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required`-Attribut hat, ist kein Wert oder eine leere Zeichenfolge ungültig. Wenn die obigen Attribute vorhanden sind, mit Ausnahme von `required`, führt eine leere Zeichenfolge nicht zu einem Fehler.

Wir können Grenzen festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer darauf hinweisen, wenn bei der Formularübermittlung ein Fehler vorliegt.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen schreibgeschützten Eigenschaften `badInput`, `valid` und `customError`. Das Gültigkeitsobjekt umfasst:

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

Für jede dieser Booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund für das Scheitern der Validierung zutreffen könnte, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen erfüllt.

Wenn ein Fehler auftritt, werden unterstützende Browser sowohl den Benutzer benachrichtigen als auch die Formularübermittlung verhindern. Vorsicht ist geboten: Wenn ein benutzerdefinierte Fehler zu einem wahrheitsgemäßen Wert gesetzt wird (alles außer der leeren Zeichenfolge oder `null`), wird die Formularübermittlung verhindert. Wenn keine benutzerdefinierte Fehlermeldung angezeigt wird und keine der anderen Eigenschaften `true` zurückgeben, wird `valid` `true` sein und das Formular kann übermittelt werden.

```js
function validate(input) {
  let validityState = input.validity;
  if (validityState.valueMissing) {
    input.setCustomValidity("A value is required");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("Your value is too low");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("Your value is too high");
  } else {
    input.setCustomValidity("");
  }
}
```

Die letzte Zeile, die die benutzerdefinierte Gültigkeitsnachricht auf die leere Zeichenfolge setzt, ist von entscheidender Bedeutung. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt wird, wird sie nicht gesendet, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierten Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, falls ein Feld die Validierung nicht besteht, müssen Sie die auf `<input>` (und verwandte) Elemente verfügbaren [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden. Nehmen Sie dieses Formular-Beispiel:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formular-Validierungsfunktionen werden dafür sorgen, dass eine Standardfehlermeldung angezeigt wird, wenn Sie versuchen, das Formular ohne gültige Eingabe zu senden, oder mit einem Wert, der nicht dem `pattern` entspricht.

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

Kurz zusammengefasst:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich dessen Wert ändert, indem wir die Methode `checkValidity()` über den `input`-Ereignishandler aufrufen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst und die `invalid`-Ereignishandler-Funktion ausgeführt. In dieser Funktion arbeiten wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, mit einem `if ()`-Block heraus und setzen eine benutzerdefinierte Gültigkeitsfehlermeldung.
- Infolgedessen wird eine der benutzerdefinierten Fehlermeldungen angezeigt, wenn die Eingabe ungültig ist, wenn der Sende-Button gedrückt wird.
- Wenn sie gültig ist, wird sie wie erwartet gesendet. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit abgebrochen werden, indem `setCustomValidity()` mit einem leeren Zeichenfolgewert aufgerufen wird. Dies tun wir deshalb, jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und zuvor eine benutzerdefinierte Gültigkeit festgelegt wurde, wird die Eingabeangabe als ungültig registriert, auch wenn sie derzeit bei der Übermittlung einen gültigen Wert enthält.

> [!NOTE]
> Validieren Sie immer die Eingabe-Einschränkungen sowohl clientseitig als auch serverseitig. Die Einschränkungsvalidierung entfernt nicht die Notwendigkeit der Validierung auf dem _Server_.
> Ungültige Werte können immer noch von älteren Browsern oder durch böswillige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte viele Versionen lang ein proprietäres Fehlerattribut — `x-moz-errormessage` —, das Ihnen erlaubte, benutzerdefinierte Fehlermeldungen ähnlich festzulegen. Dies wurde ab Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen vom Gebietsschema ab. In einigen Regionen ist 1.000,00 eine gültige Zahl, während in anderen Regionen der gültige Weg, diese Zahl einzugeben, 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um das Gebietsschema für die Validierung der Benutzereingaben zu bestimmen (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut am Element oder einem seiner Eltern angegeben wird.
- Versuchen Sie die durch einen `Content-Language` HTTP-Header angegebene Sprache. Oder,
- Wenn nichts angegeben ist, verwenden Sie das Gebietsschema des Browsers.

## Barrierefreiheit

### Labels

Bei der Einbindung von Eingaben ist es eine Barrierefreiheitsanforderung, Labels daneben hinzuzufügen. Dies ist notwendig, damit Menschen, die unterstützende Technologien nutzen, erkennen können, wofür die Eingabe ist. Auch das Klicken oder Berühren eines Labels fokussiert die damit verbundene Formsteuerung des Labels. Dies verbessert die Zugänglichkeit und Benutzerfreundlichkeit für sehende Benutzer, erhöht den Bereich, den ein Benutzer zum Aktivieren der Formsteuerung klicken oder berühren kann. Dies ist besonders nützlich (und sogar erforderlich) für Radioknöpfe und Kontrollkästchen, die winzig sind. Weitere Informationen zu Labels im Allgemeinen finden Sie unter [Labels](#labels).

Das Folgende ist ein Beispiel dafür, wie man das `<label>` mit einem `<input>`-Element im obigen Stil verbinden kann. Sie müssen dem `<input>` ein `id`-Attribut zuweisen. Das `<label>` muss dann ein `for`-Attribut haben, dessen Wert derselbe wie die `id`-des Eingabe ist.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten eine ausreichend große Fläche bieten, damit sie leicht zu aktivieren sind. Dies hilft einer Vielzahl von Menschen, einschließlich Personen mit motorischen Einschränkungen und Personen, die ungenauere Eingabeformen wie einen Stift oder Finger verwenden. Eine Mindestinteraktionsgröße von 44×44 [CSS-Pixel](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Criterion 2.5.5: Target Size verstehen | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touchziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, aufgelistet, übermittelbar, zurückstellbares, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>. Wenn das <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann kennzeichbares Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Das Start-Tag muss vorhanden sein und das End-Tag darf nicht vorhanden sein.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> aufnimmt.
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
                ohne <code>list</code>-Attribut:
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
                ohne <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
                ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                ohne <code>list</code>-Attribut:
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a> bei Verwendung
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
            <code>type=text</code> ohne <code>list</code>-Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
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

- CSS {{cssxref("appearance")}}-Eigenschaft
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Einschränkungsvalidierung von Formularen](/de/docs/Web/HTML/Guides/Constraint_validation)
- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
