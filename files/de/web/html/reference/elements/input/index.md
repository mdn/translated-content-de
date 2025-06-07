---
title: "<input>: Das HTML-Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<input>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um interaktive Steuerungen für webbasierte Formulare zu erstellen, um Daten vom Nutzer zu akzeptieren. Eine Vielzahl von Eingabedatentypen und Steuerwidgets sind verfügbar, abhängig vom Gerät und {{Glossary("user_agent", "user agent")}}. Das `<input>`-Element ist eines der leistungsstärksten und komplexesten in HTML aufgrund der Vielzahl von Kombinationen von Eingabetypen und Attributen.

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

## `<input>`-Typen

Wie ein `<input>` funktioniert, variiert erheblich abhängig vom Wert seines [`type`](#type)-Attributs, weshalb die verschiedenen Typen in separaten Referenzseiten behandelt werden. Wenn dieses Attribut nicht angegeben ist, wird als Standardtyp `text` angenommen.

Die verfügbaren Typen sind:

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
      <td>Ein Kontrollkästchen, das das Auswählen/Abwählen einzelner Werte ermöglicht.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerungselement zum Angeben einer Farbe; öffnet einen Farbwähler in unterstützenden Browsern.
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
        Ein Steuerungselement zum Eingeben eines Datums (Jahr, Monat und Tag, ohne Zeit).
        Öffnet einen Datumsauswahldialog oder numerische Rollen für Jahr, Monat, Tag in unterstützenden Browsern.
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
        Ein Steuerungselement zum Eingeben eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswahldialog oder numerische Rollen für Datum- und Zeitkomponenten in unterstützenden Browsern.
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
        <code>text</code>-Eingabe, verfügt jedoch über Validierungsparameter und relevante
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
        Ein Steuerungselement, das dem Benutzer das Auswählen einer Datei ermöglicht.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Dateitypen zu definieren, die das Steuerungselement auswählen kann.
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
        Server übermittelt wird. Es gibt in der nächsten Spalte ein Beispiel, aber es ist ausgeblendet!
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
        Ein Steuerungselement zur Eingabe einer Zahl. Zeigt ein Spin-Feld an und fügt eine Standardvalidierung hinzu. Zeigt ein numerisches Tastenfeld auf einigen Geräten mit dynamischen Tastenfeldern an.
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
        Ein Radio-Button, der es ermöglicht, einen einzelnen Wert aus mehreren Optionen mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Zeigt als Bereichs-Widget standardmäßig den Mittelwert an.
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
        Ein einzeiliges Textfeld für die Eingabe von Suchbegriffen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern ein Löschsymbol enthalten, das verwendet werden kann, um das Feld zu leeren. Zeigt auf einigen Geräten mit dynamischen Tastenfeldern ein Suchsymbol anstelle der Eingabetaste an.
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
        Ein Steuerungselement zur Eingabe einer Telefonnummer. Zeigt ein Telefon-Tastenfeld in einigen Geräten mit dynamischen Tastenfeldern an.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabefeld, verfügt jedoch über Validierungsparameter und relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerungselement zur Eingabe eines Datums bestehend aus Jahr-Woche-Nummer und Wochen-Nummer ohne Zeitzone.
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
        Ein Steuerungselement zum Eingeben eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so leistungsstark aufgrund seiner Attribute; das [`type`](#type)-Attribut, das oben mit Beispielen beschrieben wurde, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch gesehen den exakt gleichen Satz von Attributen. In der Praxis haben jedoch die meisten Attribute nur Auswirkungen auf einen spezifischen Teil der Eingabetypen. Außerdem hängt die Wirkung einiger Attribute auf eine Eingabe vom Eingabetyp ab und beeinflusst verschiedene Eingabetypen auf unterschiedliche Weise.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie verbunden sind. Diejenigen, die den meisten oder allen Eingabetypen gemeinsam sind, werden im Folgenden ausführlicher definiert. Attribute, die für bestimmte Eingabetypen einzigartig sind – oder Attribute, die allen Eingabetypen gemeinsam sind, aber unterschiedliches Verhalten auf bestimmten Eingabetypen zeigen – werden stattdessen auf den Seiten dieser Typen dokumentiert.

Zu den Attributen des `<input>`-Elements gehören die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                                               |
| --------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis für erwarteten Dateityp in Datei-Upload-Steuerelementen                                            |
| [`alt`](#alt)                                 | `image`                                                                | alt-Attribut für den image-Typ. Erforderlich für Barrierefreiheit                                          |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                               | Steuert die automatische Großschreibung im eingegebenen Text.                                              |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Buttons                             | Hinweis für die automatische Vervollständigungsfunktion des Formulars                                      |
| [`capture`](#capture)                         | `file`                                                                 | Eingabemethode zur Medienerfassung in Datei-Upload-Steuerelementen                                         |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Ob der Befehl oder die Steuerung aktiviert ist                                                             |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfelds, das zum Senden der Richtung des Elements bei Formularübermittlungen verwendet wird |
| [`disabled`](#disabled)                       | alle                                                                   | Ob das Formularsteuerelement deaktiviert ist                                                               |
| [`form`](#form)                               | alle                                                                   | Verknüpft die Steuerung mit einem Formularelement                                                          |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL zur Formularübermittlung                                                                               |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Kodierungstyp des Formulardatensatzes zur Formularübermittlung                                             |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | HTTP-Methode zur Formularübermittlung                                                                      |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Umgehen der Formularsteuerungsüberprüfung bei Formularübermittlungen                                       |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browsing-Kontext für Formularübermittlungen                                                                |
| [`height`](#height)                           | `image`                                                                | Entspricht dem height-Attribut für {{htmlelement('img')}}; vertikale Dimension                             |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Buttons       | Wert des id-Attributs der {{htmlelement('datalist')}} von Autovervollständigungsoptionen                   |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Höchstwert                                                                                                 |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Länge (Anzahl der Zeichen) des `value`                                                            |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Mindestwert                                                                                                |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Länge (Anzahl der Zeichen) des `value`                                                            |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolean. Ob mehrere Werte zugelassen werden                                                                |
| [`name`](#name)                               | alle                                                                   | Name des Formularsteuerelements. Wird mit dem Formular als Teil eines Name-/Wert-Paares übermittelt        |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, dem der `value` entsprechen muss, um gültig zu sein                                                |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der im Formularsteuerelement angezeigt wird, wenn kein Wert gesetzt ist                              |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Definiert ein `<input type="button">` als Steuerung für ein Popover-Element                                |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                           |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolean. Der Wert ist nicht bearbeitbar                                                                    |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss geprüft werden, damit das Formular übermittelt werden kann    |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe des Steuerungselements                                                                               |
| [`src`](#src)                                 | `image`                                                                | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildquelle                           |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Inkrementelle gültige Werte                                                                                |
| [`type`](#type)                               | alle                                                                   | Typ des Formularsteuerelements                                                                             |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht dem Anfangswert                                 |
| [`width`](#width)                             | `image`                                                                | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                                 |

Einige zusätzliche, nicht standardmäßige Attribute sind nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)

  - : Gültig nur für den `file`-Eingabetyp, definiert das `accept`-Attribut, welche Dateitypen in einem `file`-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`

  - : Gültig nur für den `image`-Button, bietet das `alt`-Attribut Alternativtext für das Bild, indem es den Wert des Attributs anzeigt, falls das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und wenn ja, wie. Weitere Informationen finden Sie auf der Seite zum globalen Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge an, die beschreibt, welche Art von Autovervollständigungsfunktion die Eingabe bereitstellen soll, falls vorhanden. Eine typische Implementierung der Autovervollständigung erinnert sich an zuvor in dasselbe Eingabefeld eingegebene Werte, aber es existieren auch komplexere Formen der Autovervollständigung. Zum Beispiel könnte ein Browser in der Lage sein, sich mit einer Kontaktliste eines Geräts zu integrieren, um `email`-Adressen in einem Email-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#values) für erlaubte Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist somit für alle Eingabetypen bis auf `checkbox`, `radio`, `file` oder einer der Buttontypen gültig.

    Weitere Informationen, inklusive Informationen zur Passwortsicherheit und wie `autocomplete` sich geringfügig für `hidden` von anderen Eingabetypen unterscheidet, finden Sie im Abschnitt [`autocomplete` attribute](/de/docs/Web/HTML/Reference/Attributes/autocomplete).

- `autofocus`

  - : Ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass die Eingabe automatisch den Fokus erhält, sobald die Seite vollständig geladen ist (oder wenn das {{HTMLElement("dialog")}}-Element, das das Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element platziert wird, erhält das erste Element den Fokus.

    Das `autofocus`-Attribut kann nicht mit Eingaben vom Typ `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren auf ein Steuerelement kann für sehbehinderte Personen, die Bildschirmlesetechnologie verwenden, und für Personen mit kognitiven Einschränkungen verwirrend sein. Wenn `autofocus` zugewiesen ist, "teleportieren" sich Bildschirmleser ohne vorherige Warnung zum Eingabefeld.

    Wägen Sie die Zugänglichkeit sorgfältig ab, wenn Sie das `autofocus`-Attribut verwenden. Das automatische Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dafür sorgen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Etikett des fokussierten Formularsteuerelements ankündigt, wird er nichts vor dem Etikett mitteilen, und auch der sehende Benutzer auf einem kleinen Gerät wird den durch den vorhergehenden Inhalt geschaffenen Kontext verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML-Medienerfassungsspezifikation und nur gültig für den `file`-Eingabetyp, definiert das `capture`-Attribut, welches Medium—Mikrofon, Video oder Kamera—zur Erfassung einer neuen Datei mit dem `file`-Upload-Steuerelement in unterstützenden Szenarien genutzt werden soll. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`

  - : Gültig sowohl für `radio`- als auch `checkbox`-Typen, ist `checked` ein Boolean-Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass der Radio-Button in der Gruppe von Buttons mit demselben Namen derzeit ausgewählt ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig (beim Laden der Seite) aktiviert ist. Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerelementen werden der Wert von Kontrollkästchen und Radiobuttons nur dann mit den übermittelten Daten übermittelt, wenn sie derzeit `checked` sind. Wenn sie das sind, werden der Name und die Wert(e) der aktivierten Steuerelemente übermittelt.
    >
    > Wenn zum Beispiel ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, werden die Formulardaten, die übermittelt werden, `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgeführt. Der Standardwert `value` für Kontrollkästchen und Radiobuttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen, ermöglicht das `dirname`-Attribut die Übermittlung der Richtung des Elements. Bei Aufnahme wird das Formularsteuerelement mit zwei Namens-/Wertpaaren übermittelt: Das erste ist [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser vorgegeben.

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

    Wenn das Formular oben übermittelt wird, verursacht die Eingabe sowohl den `name` / `value`-Paar von `fruit=cherry` als auch das `dirname` / Richtungs-Paar von `fruit-dir=ltr`, gesendet zu werden.
    Weitere Informationen finden Sie auf der Seite zum [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)

  - : Ein Boolean-Attribut, das angibt, dass der Nutzer mit der Eingabe nicht interagieren sollte, wenn es vorhanden ist. Deaktivierte Eingaben werden typischerweise mit einer gedimmten Farbe oder durch eine andere Form der Anzeige, dass das Feld nicht verfügbar ist, dargestellt.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht durch die Spezifikation gefordert, wird Firefox standardmäßig [den dynamischen deaktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg beibehalten. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut wird, um diese Funktion zu kontrollieren.

- `form`

  - : Ein String, der das {{HTMLElement("form")}} Element angibt, mit dem die Eingabe verbunden ist (das heißt, dessen **Formulareigentümer**). Der Wert dieses Strings, falls vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächstgelegenen enthaltenen Formular assoziiert, falls vorhanden.

    Das `form`-Attribut ermöglicht es, eine Eingabe überall im Dokument zu platzieren, aber sie mit einem Formular anderswo im Dokument zu verbinden.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular in Verbindung stehen.

- `formaction`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Nur gültig für den `image`-Eingabe-Button, entspricht `height` der Höhe der Bilddatei, die zur Darstellung des grafischen Absenden-Buttons angezeigt werden soll. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, inklusive aller Eingabetypen, es definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss. Sein Zweck besteht darin, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um das Label mit der Formularsteuerung zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, stellt einen Hinweis für Browser bereit, welche Art von virtueller Tastaturkonfiguration beim Bearbeiten dieses Elements oder seiner Inhalte verwendet werden sollte. Die Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der Wert, der dem `list`-Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. Die `<datalist>` bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge und keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Gemäß den Spezifikationen wird das `list`-Attribut nicht von den Typen `hidden`, `password`, `checkbox`, `radio`, `file` oder einem der Buttontypen unterstützt.

    Je nach Browser kann der Benutzer eine benutzerdefinierte Farbpalette sehen, Striche entlang eines Bereichs oder sogar eine Eingabe, die wie ein {{HTMLElement("select")}} geöffnet wird, aber es erlaubt, nicht aufgeführte Werte einzugeben. Sehen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den höchsten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) diesen Wert überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, dann hat das Element keinen Höchstwert.

    Es gibt einen Spezialfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich überschneiden kann; zum Beispiel ermöglicht dies, einen Zeitbereich von 22:00 bis 04:00 Uhr anzugeben.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die maximale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein Ganzzahlwert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe wird bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Texts größer ist als `maxlength` UTF-16 Codeeinheiten. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben dürfen, als das `maxlength`-Attribut erlaubt. Die Einschränkungsvalidierung wird nur angewendet, wenn sich der Wert durch den Benutzer ändert. Weitere Informationen finden Sie im Abschnitt [Client-seitige Validierung](#client-seitige_validierung).

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den am wenigsten wenigsten Wert im Bereich der zugelassenen Werte. Wenn der in das Element eingegebene [`value`](#value) kleiner ist als dieser, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben ist oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das Attribut `min` gültig ist und ein nicht-leerer Wert kleiner ist als der durch das Attribut `min` erlaubte Mindestwert, verhindert die Einschränkungsvalidierung die Übermittlung des Formulars. Weitere Informationen finden Sie im Abschnitt [Client-seitige Validierung](#client-seitige_validierung).

    Es gibt einen Spezialfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich überschneiden kann; zum Beispiel ermöglicht dies, eine Zeitspanne von 22:00 Uhr bis 04:00 Uhr anzugeben.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des Textes, der in das Feld eingegeben wurde, kürzer als `minlength` UTF-16 Codeeinheiten ist und somit verhindert, dass das Formular übermittelt wird. Die Einschränkungsvalidierung wird nur angewendet, wenn sich der Wert durch den Benutzer ändert. Weitere Informationen finden Sie im Abschnitt [Client-seitige Validierung](#client-seitige_validierung).

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)

  - : Das Boolean-Attribut `multiple`, wenn gesetzt, bedeutet, dass der Benutzer durch Kommas getrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mit der `file`-Eingabe mehr als eine Datei wählen kann. Siehe Eingabetypen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}}.

- `name`

  - : Eine Zeichenfolge, die einen Namen für das Eingabesteuerelement angibt. Dieser Name wird zusammen mit dem Wert der Steuerung übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als ein erforderliches Attribut (auch wenn es nicht so ist). Wenn eine Eingabe kein `name`-Attribut hat oder der `name` leer ist, wird der Wert dieser Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, nicht markierte Radioknöpfe, nicht markierte Kontrollkästchen und -löschen-Buttons werden ebenfalls nicht versendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_`: Wenn es als Name eines `<input>`-Elements des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch von {{Glossary("user_agent", "user agent")}} auf die Zeichenkodierung gesetzt, die zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erzeugt ein einzigartiges Verhalten für Radioknöpfe.

    Es kann jeweils nur ein Radioknopf in einer Gruppe von Radioknöpfen mit demselben Namen ausgewählt sein. Die Auswahl eines beliebigen Radioknopfes in dieser Gruppe hebt automatisch die derzeitige Auswahl eines anderen Radioknopfes in der gleichen Gruppe auf. Der Wert dieses einen ausgewählten Radioknopfes wird mit dem Namen übermittelt, wenn das Formular gesendet wird.

    Wenn Sie in eine Gruppe von Radioknöpfen mit demselben Namen hinein tabben und einer davon ausgewählt ist, erhält dieser den Fokus. Wenn sie nicht in Quellreihenfolge gruppiert sind und einer von ihnen ausgewählt ist, wird das Tabben in die Gruppe bei dem ersten in der Gruppe begonnen, und alle, die nicht ausgewählt sind, werden übersprungen. Mit anderen Worten, wenn einer ausgewählt ist, überspringt das Tabben die nicht markierten Radioknöpfe in der Gruppe. Wenn keiner ausgewählt ist, erhält die Radioknopfgruppe den Fokus, wenn der erste Knopf in der gleichen Namensgruppe erreicht wird.

    Sobald ein Radioknopf in einer Gruppe den Fokus hat, navigieren die Pfeiltasten durch alle Radioknöpfe des gleichen Namens, auch wenn die Radioknöpfe in der Quellreihenfolge nicht gruppiert sind.

    Wenn einem Eingabeelement ein `name` gegeben wird, wird dieser Name zu einer Eigenschaft des [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft des besitzenden Formularelements. Wenn Sie eine Eingabe haben, deren `name` auf `guest` gesetzt ist und eine andere, deren `name` `hat-size` ist, kann folgender Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer integrierte Eigenschaft des Formulars entspricht, da Sie damit die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, das `pattern`-Attribut wird verwendet, um einen regulären Ausdruck zu kompilieren, dem der [`value`](#value) der Eingabe entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) bestehen kann. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie vom {{jsxref("RegExp")}}-Typ verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Es sollten keine Schrägstriche um den Mustertext angegeben werden. Beim Kompilieren des regulären Ausdrucks:

    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, so dass die Übereinstimmung gegen den gesamten Eingabewert erforderlich ist, das heißt, `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag gesetzt, sodass das Muster als Abfolge von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht-leerer Wert nicht mit dem Muster übereinstimmt, wird die Einschhränkungsvalidierung das Übermitteln des Formulars verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden durch Kommas getrennten Wert geprüft.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, sollten Sie den Benutzer über das erwartete Format informieren, indem Sie erklärenden Text in der Nähe hinzufügen. Sie können auch ein [`title`](#title)-Attribut einschließen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Weitere Informationen finden Sie im Abschnitt [Client-seitige Validierung](#client-seitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, das `placeholder`-Attribut bietet einen kurzen Hinweis an den Benutzer, welche Art von Informationen in das Feld eingegeben werden sollen. Es sollte sich um ein Wort oder eine kurze Phrase handeln, die einen Hinweis auf die erwartete Art von Daten gibt und keine Erklärung oder Eingabeaufforderung sein. Der Text _darf nicht_ Wagenrückläufe oder Zeilenfeede enthalten. Wenn beispielsweise ein Feld erwartet, den Vornamen des Benutzers zu erfassen, und sein Label "Vorname" lautet, könnte ein geeigneter Platzhalter "z. B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie im Abschnitt [Labels](#labels).

- `popovertarget`

  - : Macht ein `<input type="button">`-Element zu einem Popover-Steuerbutton; nimmt die ID des Popover-Elements, das kontrolliert werden soll, als seinen Wert. Weitere Details finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API)-Einstiegsseite. Die Einrichtung einer Beziehung zwischen einem Popover und seinem Aufruferbutton mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Aufrufer und platziert das Popover in einer logischen Position in der Tastaturnavigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und Assistive-Technologie-Nutzer (AT) zugänglicher (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt einen impliziten Ankerverweis zwischen den beiden, sodass es sehr bequem ist, Popover relativ zu ihren Steuerelementen mithilfe von [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Informationen finden Sie unter [Popover-Anker-Positionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`

  - : Gibt die Aktion an, die auf ein Popover-Element angewendet werden soll, das von einer Steuerung `<input type="button">` kontrolliert wird. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein angezeigtes Popover ausblenden. Wenn Sie versuchen, ein bereits ausgeblendetes Popover auszublenden, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein ausgeblendetes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen Anzeige und Ausblenden umschalten. Wenn das Popover ausgeblendet ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es ausgeblendet. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerung-Button ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)

  - : Ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer den Wert der Eingabe nicht bearbeiten können sollte. Das `readonly`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` Eingabetypen unterstützt.

    Weitere Informationen finden Sie im Abschnitt [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das besitzende Formular übermittelt werden kann. Das `required`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` Eingaben unterstützt.

    Weitere Informationen finden Sie im Abschnitt [Client-seitige Validierung](#client-seitige_validierung) und im Abschnitt [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required).

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url` und `text`, das `size`-Attribut gibt an, wie viel der Eingabe angezeigt wird. Es erzeugt im Grunde dasselbe Ergebnis, als würde die CSS-[`width`](/de/docs/Web/CSS/width)-Eigenschaft mit einigen Besonderheiten gesetzt werden. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Bei `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und bei anderen sind es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`

  - : Nur gültig für den `image`-Eingabe-Button, ist das `src` eine Zeichenfolge, die die URL der Bilddatei angibt, die angezeigt wird, um den grafischen Absenden-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss.

    Wenn nicht explizit enthalten ist:

    - `step` standardmäßig auf 1 für `number` und `range`.
    - Jeder Eingabetyp Datum/Zeit hat einen Standard-`step`-Wert, der für den Typ angemessen ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein—Ganzzahl oder Fließkommazahl—oder der spezielle Wert `any`, der bedeutet, dass kein Schritt angenommen wird und jeder Wert erlaubt ist (außer andere Einschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, Datum/Zeit-Eingabetypen und `range`-Eingabetypen gleich dem Maß für das Schrittinkrement – der [`min`](#min)-Wert und Inkremente des Schrittwerts, bis zum ['max'](#max)-Wert, wenn angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Ganzzahl, `10` oder größer, gültig. Wenn `step` weggelassen wird, `<input type="number">`, ist jede Ganzzahl gültig, aber Fließkommazahlen (wie `4,2`) sind nicht gültig, da `step` standardmäßig `1` ist. Für `4,2` als gültig müsste `step` auf `any`, 0,1, 0,2 gesetzt werden; oder der `min`-Wert hätte eine Zahl sein müssen, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die Daten, die vom Benutzer eingegeben werden, nicht mit der Stufenkonfiguration übereinstimmen, wird der Wert bei der Einschränkungsvalidierung als ungültig betrachtet und hält dem `:invalid`-Pseudoklass entsprechen.

    Weitere Informationen finden Sie im Abschnitt [Client-seitige Validierung](#client-seitige_validierung).

- `tabindex`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus erhalten kann (fokussierbar ist), wenn es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen außer Eingaben vom Typ `hidden` fokussierbar sind, sollte dieses Attribut nicht auf Formularsteuerelementen verwendet werden, da dadurch die Verwaltung der Fokussierungsreihenfolge für alle Elemente im Dokument erforderlich gemacht würde, mit dem Risiko, die Benutzerfreundlichkeit und Zugänglichkeit zu beeinträchtigen, wenn es falsch gemacht wird.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, enthält einen Text, der beratende Informationen im Zusammenhang mit dem Element, zu dem es gehört, darstellt. Solche Informationen können typischerweise, aber nicht unbedingt, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks des Formularsteuerelements verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}} Element mit einem `for`-Attribut, das auf das [`id`](#id) Attribut des Formularelements gesetzt ist. Weitere Informationen finden Sie im Abschnitt [Labels](#labels) unten.

- `type`

  - : Eine Zeichenfolge, die den Typ der Steuerung angibt, die dargestellt werden soll. Zum Beispiel wird ein Wert von `checkbox` verwendet, um ein Kontrollkästchen zu erstellen. Wenn er weggelassen (oder ein unbekannter Wert angegeben) wird, wird der Eingabetyp `text` verwendet, was ein Klartext-Eingabefeld erstellt.

    Zulässige Werte sind in [Eingabetypen](#input_types) oben aufgelistet.

- `value`

  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Anfangswert, und von da an kann es jederzeit mit JavaScript geändert oder abgerufen werden, indem auf die jeweilige [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft `value` zugegriffen wird. Das `value`-Attribut ist immer optional, sollte jedoch als verpflichtend für `checkbox`, `radio` und `hidden` angesehen werden.

- `width`

  - : Nur gültig für den `image`-Eingabe-Button, ist die `width` die Breite der Bilddatei, die angezeigt wird, um den grafischen Absenden-Button zu repräsentieren. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standardmäßige Attribute

Die folgenden nicht-standardmäßigen Attribute sind ebenfalls in manchen Browsern verfügbar. Als allgemeine Regel sollten Sie sie vermeiden, es sei denn, es lässt sich nicht vermeiden.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden, um die Aktualisierung von Live-Suchergebnissen zu ermöglichen, während der Benutzer den Wert des Feldes noch bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes drückt; dies wird verwendet, um ein geeignetes Label für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Ausrichtung des Bereichsschiebeelements. <strong>Nur Firefox.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl an Elementen, die in der Dropdown-Liste früherer Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Boolean, ob der Benutzer nur ein Verzeichnis (oder Verzeichnisse, falls <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) auswählen darf.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome, usw.), die, wenn vorhanden, dem {{Glossary("user_agent", "user agent")}} sagt, dass die Eingabe als Live-Suche verarbeitet werden soll. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das die Suchbox darstellt. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer eine Suche explizit initiiert (z. B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste beim Bearbeiten des Feldes).

    Das `search`-Ereignis ist ratenlimitiert, sodass es nicht öfter gesendet wird als ein implementierungsdefiniertes Intervall.

- `orient` {{non-standard_inline}}

  - : Ähnlich wie die -moz-orient nicht standardmäßige CSS-Eigenschaft, die die {{htmlelement('progress')}} und {{htmlelement('meter')}}-Elemente beeinflusst, definiert das `orient`-Attribut die Ausrichtung des Bereichsschiebeelements. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wobei der Bereich vertikal gerendert wird. Siehe [Erstellen vertikaler Formularsteuerelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zum Erstellen vertikaler Formularsteuerelemente.

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl an Einträgen, die im nativ bereitgestellten Dropdown-Menü von vorherigen Suchanfragen eines `<input>`-Elements angezeigt werden sollen, zu überschreiben.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben ist, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass im Dateiauswahl-Interface nur Verzeichnisse vom Benutzer ausgewählt werden sollten. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später verwendbar. Dennoch sollte es, auch wenn es relativ breit unterstützt wird, nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, welche `<input>`-Elemente im DOM repräsentiert. Auch stehen die Methoden zur Verfügung, die von den Elternschnittstellen, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget), spezifiziert sind.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und meldet (falls das Ereignis nicht abgebrochen wird) das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder Kalenderdateieingabe) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine angegebene Zeichenfolge. Ein `selectMode`-Parameter steht zur Verfügung, um zu steuern, wie der bestehende Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines Textinhalteingabeelements aus. Tut nichts für Eingaben, die nicht als Texteingabefelder präsentiert werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Picker für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, jedoch durch einen Button-Druck oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins, standardmäßig, oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Eingaben, als ersetzte Elemente, haben einige Eigenschaften, die auf nicht-Form-Elemente nicht anwendbar sind. Es gibt CSS-Selektoren, die speziell auf Formularelemente basierend auf ihren UI-Funktionen abzielen können, auch bekannt als UI-Pseudoklassen. Das Eingabeelement kann auch nach Typ über Attributselektoren angesprochen werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

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
        Jedes aktuell aktivierte Element, das aktiviert, fokussiert oder/und in einem deaktivierten Zustand sein kann, in dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes aktuell deaktivierte Element, das einen aktivierten Zustand hat, also ansonsten aktiviert, fokussiert oder in einen deaktivierten Zustand sein könnte.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element, das von den Benutzern nicht bearbeitet werden kann</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das von den Benutzern bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das momentan <a href="#placeholder"><code>placeholder</code> Text</a> anzeigt,
        einschließlich von <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elementen mit dem Attribut <a href="#placeholder"><code>placeholder</code></a>, das bisher keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die in einer Gruppe verwandter Elemente die Standardeinstellung sind.
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die beim Laden oder Rendern der Seite markiert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die
        derzeit markiert sind (und der {{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, der derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente,
        deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle
        Radio-Buttons mit demselben Namen im Formular nicht markiert sind, und
        {{HTMLElement("progress")}} Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die eine Constraint-Validierung angewendet werden kann und die
        derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die eine Constraint-Validierung angewendet wird und die momentan nicht
        gültig sind. Entspricht einem Formularelement, dessen Wert nicht den
        durch die Attribute gesetzten Einschränkungen entspricht, wie z. B.
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute festgelegten Bereichsgrenzen liegt sowie das <a href="#step"><code>step</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert NICHT innerhalb der Bereichsgrenzen liegt, die durch die <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a> Attribute festgelegt sind, oder
        nicht der <a href="#step"><code>step</code></a>-Einschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut gesetzt hat.
        Entspricht nur Elementen, die erforderlich sein können.
        Das Attribut an einem nicht-erforderlichen Element führt zu keiner Entsprechung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}} Element, das NICHT das <a href="#required"><code>required</code></a> Attribut gesetzt hat.
        Es entspricht nicht Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch bei Blur aktiviert. Entspricht
        ungültiger Eingabe, aber nur nach der Benutzerinteraktion, wie z. B. durch Fokussieren
        auf das Steuerelement, Verlassen des Steuerelements oder dem Versuch, das Formular
        zu senden, das das ungültige Steuerelement enthält.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code> Elemente, die eine Auswahlmöglichkeit für den Benutzer anzeigen, um einen Wert auszuwählen (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — jedoch nur, wenn das Element im offenen Zustand ist, das heißt, wenn der Picker angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können ein Checkbox-Label basierend darauf stylen, ob die Checkbox markiert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das direkt nach einer markierten Eingabe kommt. Wir haben keine Stile angewendet, wenn die `input` nicht markiert ist.

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

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mithilfe von [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) gezielt anzusprechen. CSS-Attributselektoren stimmen Elemente basierend auf entweder nur der Anwesenheit eines Attributs oder dem Wert eines angegebenen Attributs überein.

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

Standardmäßig erscheint der Platzhaltertext als durchscheinender oder heller Grauton. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder` Text](#placeholder) des Eingabefeldes. Es kann mit einer begrenzten Teilmenge von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur die Teilmenge von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement angewendet werden können, kann in einer Regel mit `::placeholder` im Selektor verwendet werden.

### appearance

Die {{cssxref("appearance")}} Eigenschaft ermöglicht das Anzeigen von (fast) jedem Element in einem plattformnativen Stil basierend auf dem Thema des Betriebssystems sowie die Entfernung jeglicher plattformnativem Styling mit dem Wert `none`.

Sie könnten ein `<div>` wie ein Radio-Button aussehen lassen mit `div {appearance: radio;}` oder ein Radio wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}`, aber tun Sie es nicht.

Das Festlegen von `appearance: none` entfernt plattformnative Rahmen, aber nicht die Funktionalität.

### caret-color

Eine spezifische Eigenschaft für texteintragsbezogene Elemente ist die CSS-{{cssxref("caret-color")}}-Eigenschaft, die es Ihnen ermöglicht, die Farbe des Textcursor-Eingabepunkts zu setzen:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu kontrollieren (d.h. sie haben standardmäßig eine bevorzugte Standardgröße). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, sodass Formularelemente ihre Größe anpassen können, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetyps, die direkte Texteingaben akzeptieren (z. B. [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}} Elemente.

### object-position und object-fit

In bestimmten Fällen (normalerweise bei nicht-textbezogenen Eingaben und spezialisierten Schnittstellen) ist das `<input>` Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es so ist, können Position und Größe des Elements und seiner Positionierung innerhalb seines Rahmens mit den CSS {{cssxref("object-position")}} und {{cssxref("object-fit")}} Eigenschaften angepasst werden.

### Styling

Für weitere Informationen zur Anwendung von Farben auf Elemente in HTML, sehen Sie:

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Styling-Möglichkeiten für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels sind notwendig, um erläuternden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}} Element liefert erläuternde Informationen zu einem Formularfeld, das immer angemessen ist (abgesehen von jeglichen Layout-Bedenken). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugeordnete Labels

Das semantische Paaren von `<input>` und `<label>` Elementen ist nützlich für unterstützende Technologien wie Bildschirmleser. Indem sie sie paaren, indem Sie das [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) Attribut des `<label>` verwenden, binden Sie das Label an die Eingabe auf eine Weise, die Bildschirmleser Eingaben präziser beschreiben lässt.

Es reicht nicht, einfachen Text neben dem `<input>` Element zu haben. Vielmehr erfordert die Benutzerfreundlichkeit und Zugänglichkeit die Aufnahme von entweder impliziten oder expliziten {{HTMLElement("label")}}:

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

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere "Treffer"-Fläche für Maus- und Touchscreen-Nutzer, auf die sie klicken oder tippen können, um den Fokus auf das `<input>` zu setzen. Durch das Paaren eines `<label>` mit einem `<input>` fokussiert ein Klick auf eines von beiden das `<input>`. Wenn Sie normalen Text verwenden, um Ihr Eingabefeld zu "beschriften", passiert dies nicht. Das Vorhandensein der Eingabeaufforderung als Teil des Aktivierungsbereichs für die Eingabe ist hilfreich für Menschen mit motorischen Einschränkungen.

Als Webentwickler ist es wichtig, dass wir niemals davon ausgehen, dass Menschen all die Dinge wissen, die wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und damit Ihre Website – garantiert praktisch, dass einige der Besucher Ihrer Website einige Variationen in Denkprozessen und/oder Umständen haben, die sie dazu veranlassen, Ihre Formulare sehr anders zu interpretieren als Sie, ohne klare und korrekt präsentierte Labels.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text anzugeben, der innerhalb des Inhaltsbereichs des `<input>` Elements selbst angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, da es keins ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Eingabeaufforderung.

Der Platzhalter ist nicht nur für Bildschirmleser nicht zugänglich, sondern er verschwindet auch, sobald der Benutzer einen Text in das Formulareingabefeld eingibt oder wenn das Formulareingabefeld bereits einen Wert hat. Browser mit automatischer Seitenübersetzungsfunktionalität können beim Übersetzen von Attributen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>` Element beschriften müssen, verwenden Sie das {{HTMLElement("label")}} Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, überprüfen Sie sie _immer_ auch auf der Server-Seite und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Neben der Möglichkeit, CSS zu verwenden, um Eingaben basierend auf den {{Cssxref(":valid")}} oder {{Cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Zustand jeder Eingabe zu stylen, ermöglicht der Browser die Client-seitige Überprüfung beim (versuchten) Absenden des Formulars. Beim Absenden des Formulars, wenn es ein Formularelement gibt, das die Constraint-Validierung nicht erfüllt, zeigen unterstützende Browser eine Fehlermeldung auf dem ersten ungültigen Formularelement an; entweder eine Standardmeldung basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Nachricht.

Einige Eingabetypen und andere Attribute legen Grenzen fest, welche Werte für eine gegebene Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">` dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Verschiedene Fehler könnten auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade ganze Zahl (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich der möglichen Werte periodisch ist (das heißt, bei dem höchsten möglichen Wert, "rollen" die Werte zurück zum Anfang, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min) Eigenschaften umgekehrt werden, was anzeigt, dass der Bereich der erlaubten Werte bei `min` beginnt, zum niedrigsten möglichen Wert zurückkehrt und dann weitergeht, bis `max` erreicht ist. Dies ist besonders nützlich für Datums- und Uhrzeitangaben, wie z. B. wenn Sie den Bereich von 20:00 Uhr bis 08:00 Uhr erlauben möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und ihre Werte können zu einem spezifischen [`ValidityState`](/de/docs/Web/API/ValidityState)-Fehler führen:

<table class="no-markdown">
  <caption>
    Validitäts-Objektfehler hängen von den <code>&lt;input&gt;</code>
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
        Tritt auf, wenn der Wert größer ist als der Maximalwert, der durch
        das <code>max</code> Attribut definiert ist
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
        Tritt auf, wenn der Wert kleiner ist als der Minimalwert, der durch das <code>min</code> Attribut definiert ist
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code> Eigenschaft benötigte Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Pattern-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht damit übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code> Attribut vorhanden ist, aber der Wert <code>null</code> ist oder das Radio oder Checkbox nicht markiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Das Standardinkrement ist <code>1</code>, daher sind nur ganze Zahlen bei <code>type="number"</code> erlaubt, wenn step nicht eingeschlossen ist. <code>step="any"</code> wird diesen Fehler nie verursachen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, z. B. wenn eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll beinhaltet.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das Attribut `required` hat, ist kein Wert oder ein leerer String nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, wird ein leerer String nicht zu einem Fehler führen.

Wir können Grenzen für die akzeptierten Werte setzen, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer benachrichtigen, wenn beim Ausfüllen des Formulars ein Fehler auftritt.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen readonly-Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Für jede dieser Boolean-Eigenschaften bedeutet ein Wert von `true`, dass der angegebene Grund, warum die Validierung möglicherweise fehlgeschlagen sein könnte, wahr ist, mit der Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen einhält.

Wenn ein Fehler auftritt, werden unterstützende Browser sowohl den Benutzer benachrichtigen als auch verhindern, dass das Formular gesendet wird. Ein Wort der Warnung: Wenn ein benutzerdefinierter Fehler auf einen wahrheitsgemäßen Wert gesetzt ist (alles außer dem leeren String oder `null`), wird die Übermittlung des Formulars verhindert. Wenn es keine benutzerdefinierte Fehlermeldung gibt und keine der anderen Eigenschaften true zurückgibt, ist `valid` true, und das Formular kann übermittelt werden.

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

Die letzte Zeile, die die benutzerdefinierte Gültigkeitsnachricht auf den leeren String setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit festgelegt ist, wird das Formular nicht gesendet, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die für `<input>` (und verwandte) Elemente verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungs-Funktionen führen dazu, dass dies eine Standardfehlermeldung produziert, wenn Sie versuchen, das Formular ohne gültigen Wert oder einen Wert einzureichen, der nicht dem `pattern` entspricht.

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

Das Beispiel rendert wie folgt:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich dessen Wert ändert, indem wir die `checkValidity()`-Methode über den `input`-Event-Handler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid` Event ausgelöst, und die `invalid` Event-Handler-Funktion wird ausgeführt. In dieser Funktion bestimmen wir mittels eines `if ()` Blocks, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Pattern entspricht, und setzen eine benutzerdefinierte Validierungsfehlermeldung.
- Infolgedessen wird je nach dem, wenn der Eingabewert ungültig ist, wenn die Schaltfläche zum Absenden gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er wie erwartet übermittelt. Dafür muss die benutzerdefinierte Gültigkeit aufgehoben sein, indem `setCustomValidity()` mit einem leeren String-Wert aufgerufen wird. Dies tun wir daher jedes Mal, wenn das `input` Event ausgelöst wird. Wenn Sie das nicht tun, und eine benutzerdefinierte Gültigkeit zuvor festgelegt wurde, wird die Eingabe als ungültig registriert, auch wenn sie gerade einen gültigen Wert bei der Übermittlung enthält.

> [!NOTE]
> Validieren Sie immer Eingabebeschränkungen sowohl client- als auch serverseitig. Constraint-Validierung ersetzt nicht die Validierung auf der _Server-Seite_. Ungültige Werte können immer noch von älteren Browsern oder von böswilligen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte für viele Versionen ein proprietäres Fehlerattribut — `x-moz-errormessage` —, das es Ihnen erlaubte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise festzulegen. Dies wurde ab Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>` Typen hängen von der Ländereinstellung ab. In einigen Regionen ist 1.000,00 eine gültige Zahl, während es in anderen Regionen 1.000,00 richtig ist.

Firefox verwendet die folgenden Heuristiken, um die Ländereinstellung zu bestimmen, um die Benutzereingaben zu validieren (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang` Attribut auf dem Element oder einem seiner Eltern spezifiziert ist.
- Versuchen Sie die durch eine `Content-Language` HTTP-Header spezifizierte Sprache. Oder,
- Verwenden Sie, wenn keine festgelegt ist, die Sprache des Browsers.

## Barrierefreiheit

### Labels

Bei der Einbindung von Eingaben ist es eine Voraussetzung für Barrierefreiheit, Labels hinzuzufügen. Dies ist notwendig, damit Benutzer unterstützender Technologien verstehen können, wofür die Eingabe steht. Auch das Klicken oder Berühren eines Labels gibt dem assoziierten Formularelement den Fokus. Dies verbessert die Zugänglichkeit und Benutzerfreundlichkeit für sehende Benutzer und vergrößert den Bereich, den ein Benutzer anklicken oder berühren kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radio-Buttons und Checkboxen, die sehr klein sind. Für weitere Informationen über Labels im Allgemeinen siehe [Labels](#labels).

Im Folgenden wird ein Beispiel gezeigt, wie das `<label>` mit einem `<input>` Element im obigen Stil verknüpft werden kann. Sie müssen dem `<input>` ein Attribut `id` geben. Das `<label>` benötigt dann ein Attribut `for`, dessen Wert derselbe wie die `id` des Inputs ist.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bieten, damit es einfach ist, sie zu aktivieren. Dies hilft einer Vielzahl von Menschen, einschließlich Personen mit motorischen Einschränkungen und Personen, die unpräzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine Mindestinteraktive Größe von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, aufgelistet, einreichbar, zurücksetzbar, formular-assoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann beschriftbares Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a> wenn verwendet
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

- [Formulareinschränkungs-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Anleitung zum Erstellen benutzerdefinierter Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in Legacy-Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Styling-Möglichkeiten für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Vertikale Formularsteuerungen erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
