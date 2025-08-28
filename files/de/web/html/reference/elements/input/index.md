---
title: "<input>: Das HTML-Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: f29e825161ee6776a395cd846f8570686f784341
---

Das **`<input>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerungen für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; eine Vielzahl von Arten von Eingabedaten und Steuerungswidgets stehen zur Verfügung, abhängig vom Gerät und vom {{Glossary("user_agent", "User-Agent")}}. Das `<input>`-Element ist eines der mächtigsten und komplexesten im gesamten HTML aufgrund der schieren Anzahl von Kombinationen von Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich in Abhängigkeit vom Wert seines [`type`](#type)-Attributs, daher werden die verschiedenen Typen auf ihren eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird als Standardtyp `text` angenommen.

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
      <th>Einfaches Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/button", "button")}}</td>
      <td>
        Eine Schaltfläche ohne Standardverhalten, die den Wert des <a href="#value"><code>value</code></a>-Attributs anzeigt, standardmäßig leer.
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
        Ein Steuerungselement zur Farbauswahl, das in unterstützenden Browsern einen Farbwähler öffnet, wenn aktiv.
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
        Eine Steuerung zur Eingabe eines Datums (Jahr, Monat und Tag ohne Zeit).
        Öffnet einen Datumsauswähler oder numerische Rollen für Jahr, Monat, Tag, wenn aktiv
        in unterstützenden Browsern.
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
        Eine Steuerung, um ein Datum und eine Zeit ohne Zeitzone einzugeben. Öffnet einen Datumsauswähler oder numerische Rollen für Datum- und Zeitkomponenten, wenn aktiv in unterstützenden Browsern.
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
        Ein Feld zur Bearbeitung einer E-Mail-Adresse. Sieht aus wie eine
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
        Eine Steuerung, mit der der Benutzer eine Datei auswählen kann.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Dateitypen zu definieren, die die Steuerung auswählen kann.
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
        Eine grafische <code>submit</code>-Schaltfläche. Zeigt ein Bild basierend auf dem <code>src</code>-Attribut an.
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
        Ein Steuerungselement zur Eingabe einer Zahl. Zeigt einen Spinner und fügt
        Standardvalidierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten
        mit dynamischen Tastaturen an.
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
        Warnung des Benutzers, wenn die Seite nicht sicher ist.
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
        Ein Optionsfeld, das ermöglicht, einen einzelnen Wert aus mehreren Auswahlmöglichkeiten mit dem gleichen <a href="#name"><code>name</code></a>-Wert auszuwählen.
      </td>
      <td id="exampleradio">
        <pre class="brush: html hidden">
&#x3C;input type="radio" name="radio"/></pre>
        >
        {{EmbedLiveSample("exampleradio",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>
        Ein Steuerungselement zur Eingabe einer Zahl, deren genauer Wert nicht wichtig ist.
        Wird als Bereichs-Widget angezeigt, standardmäßig auf den mittleren Wert eingestellt.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbrüche werden
        automatisch aus dem Eingabewert entfernt. Kann in unterstützenden
        Browsern ein Löschsymbol enthalten, das zum Leeren des Felds verwendet werden kann. Zeigt auf einigen
        Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
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
        Ein Steuerungselement zur Eingabe einer Telefonnummer. Zeigt eine Telefontastatur
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
      <td>Eine Steuerung zur Eingabe eines Zeitwertes ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabefeld, hat
        jedoch Validierungsparameter und relevante Tastatur in unterstützenden Browsern
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
        Eine Steuerung zur Eingabe eines Datums, bestehend aus einer Kalenderwoche und Jahr, ohne Zeitzone.
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

Das `<input>`-Element ist so mächtig wegen seiner Attribute; das [`type`](#type)-Attribut, wie oben mit Beispielen beschrieben, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch gesehen dieselbe Attributgruppe. In der Praxis haben jedoch die meisten Attribute nur einen Effekt auf einen bestimmten Teil der Eingabetypen. Darüber hinaus hängt die Art und Weise, wie einige Attribute ein Eingabeelement beeinflussen, vom Eingabetyp ab und wirkt sich auf unterschiedliche Eingabetypen unterschiedlich aus.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie assoziiert sind. Attribute, die den meisten oder allen Eingabetypen gemeinsam sind, werden weiter unten im Detail definiert. Attribute, die besonderen Eingabetypen eigen sind oder Attribute, die allen Eingabetypen gemeinsam sind, aber bei einem bestimmten Eingabetyp spezielle Verhaltensweisen aufweisen, werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                                             |
| --------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis für den erwarteten Dateityp bei Dateiupload-Steuerelementen                                                      |
| [`alt`](#alt)                                 | `image`                                                                      | alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                                          |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Steuert die automatische Großschreibung im eingegebenen Text.                                                            |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis für die Formular-Autovervollständigungsfunktion                                                                  |
| [`capture`](#capture)                         | `file`                                                                       | Methode zur Medienaufnahme beim Dateiupload-Steuerelement                                                                |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Ob der Befehl oder die Steuerung aktiviert ist                                                                           |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfeldes, das für das Senden der Direktionalität des Elements bei der Formularübermittlung verwendet wird |
| [`disabled`](#disabled)                       | alle                                                                         | Ob das Formularsteuerelement deaktiviert ist                                                                             |
| [`form`](#form)                               | alle                                                                         | Ordnet die Steuerung einem Formularelement zu                                                                            |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | URL, die für die Formularübermittlung verwendet wird                                                                     |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Kodierungstyp des Datenensatzes, der für die Formularübermittlung verwendet wird                                         |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | HTTP-Methode, die für die Formularübermittlung verwendet wird                                                            |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Umgehung der Formularsteuerung-Validierung bei der Formularübermittlung                                                  |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für die Formularübermittlung                                                                            |
| [`height`](#height)                           | `image`                                                                      | Wie das height-Attribut für {{htmlelement('img')}}; vertikale Dimension                                                  |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsoptionen                                 |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Höchstwert                                                                                                               |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) von `value`                                                                          |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Mindestwert                                                                                                              |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Minimale Länge (Anzahl der Zeichen) von `value`                                                                          |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolean. Ob mehrere Werte erlaubt sind                                                                                   |
| [`name`](#name)                               | alle                                                                         | Name der Formularsteuerung. Wird mit dem Formular als Name/Wert-Paar übermittelt                                         |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Muster, das `value` entsprechen muss, um gültig zu sein                                                                  |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der im Formularsteuerelement erscheint, wenn kein Wert festgelegt ist                                              |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Legt ein `<input type="button">` als Steuerung für ein Popover-Element fest                                              |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Gibt die Aktion an, die eine Popover-Steuerung ausführen soll                                                            |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht bearbeitbar                                                                                  |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss überprüft werden, damit das Formular übermittelt werden kann                |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe der Steuerung                                                                                                      |
| [`src`](#src)                                 | `image`                                                                      | Wie das `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                                             |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Inkrementelle Werte, die gültig sind                                                                                     |
| [`type`](#type)                               | alle                                                                         | Typ der Formularsteuerung                                                                                                |
| [`value`](#value)                             | alle außer `image`                                                           | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht das dem Anfangswert                                           |
| [`width`](#width)                             | `image`                                                                      | Wie das `width`-Attribut für {{htmlelement('img')}}                                                                      |

Einige zusätzliche nicht-standardisierte Attribute werden nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Nur für den `file`-Eingabetyp gültig, definiert das `accept`-Attribut, welche Dateitypen in einem `file`-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alt`
  - : Nur gültig für den `image`-Button, bietet das `alt`-Attribut einen alternativen Text für das Bild und zeigt den Wert des Attributs an, wenn das Bild-`src`(#src) fehlt oder sonst fehlschlägt. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise. Weitere Informationen finden Sie auf der [globalen Attributseite `autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge, die beschreibt, welche, wenn überhaupt, Art von Autovervollständigungsfunktionalität das Eingabefeld bieten sollte. Eine typische Implementierung von Autovervollständigung erinnert sich an zuvor eingegebene Werte im selben Eingabefeld, aber komplexere Formen der Autovervollständigung können existieren. Zum Beispiel könnte ein Browser mit der Kontaktliste eines Geräts integrieren, um E-Mail-Adressen in einem E-Mail-Eingabefeld zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für erlaubte Werte.

  Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keinen Effekt auf Eingabetypen, die keine numerischen oder textuellen Daten zurückgeben, und ist für alle Eingabetypen gültig, außer `checkbox`, `radio`, `file` oder irgendwelche der Schaltflächentypen.

  Weitere Informationen, einschließlich Informationen zur Passwortsicherheit und darüber, wie `autocomplete` für `hidden` leicht anders ist als für andere Eingabetypen, finden Sie im [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete).

- `autofocus`
  - : Ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass das Eingabefeld automatisch den Fokus erhalten soll, wenn die Seite vollständig geladen wurde (oder wenn das {{HTMLElement("dialog")}} mit dem Element angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann bereits den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element vorhanden ist, erhält das erste Element mit diesem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben vom Typ `hidden` verwendet werden, da versteckte Eingaben nicht den Fokus erhalten können.

    > [!WARNING]
    > Automatisches Fokussieren auf ein Formularelement kann verwirrend für sehbehinderte Personen sein, die Bildschirmlesetechnologie verwenden, ebenso wie für Menschen mit kognitiven Beeinträchtigungen. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmlesegeräte ihren Benutzer ohne vorherige Warnung zum Formularelement.

  Verwenden Sie bei der Anwendung des `autofocus`-Attributs eine sorgfältige Überlegung zur Barrierefreiheit. Das automatische Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann außerdem dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label des jeweils fokussierten Formularsteuerelements ansagt, wird er nichts vor dem Label ansagen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext, der durch den vorangehenden Inhalt erzeugt wurde, verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den `file`-Eingabetyp, definiert das `capture`-Attribut, welches Medium — Mikrofon, Video oder Kamera — zur Erfassung einer neuen Datei zum Hochladen mit `file`-Upload-Steuerung verwendet werden soll in unterstützenden Szenarien. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`
  - : Gültig für sowohl `radio`- als auch `checkbox`-Typen, `checked` ist ein Boolean-Attribut. Wenn es vorhanden ist auf einem `radio`-Typ, zeigt es an, dass die Optionsschaltfläche momentan die ausgewählte in der Gruppe der gleichnamigen Optionsschaltflächen ist. Wenn es auf einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen momentan aktiviert ist: wenn der Zustand des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerelementen wird der Wert eines Kontrollkästchens oder einer Optionsschaltfläche nur dann in den übermittelten Daten aufgenommen, wenn sie momentan `checked` ist. Wenn sie es sind, werden der Name und der Wert(e) der aktivierten Steuerungen übermittelt.
    >
    > Zum Beispiel: Wenn ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, dann wird in den übermittelten Formulardaten `fruit=cherry` enthalten sein. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgeführt. Der Standard-`value` für Kontrollkästchen und Optionsschaltflächen ist `on`.

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen, aktiviert das `dirname`-Attribut die Übermittlung der Direktionalität des Elements. Wenn eingeschlossen, wird die Formularsteuerung mit zwei Namen/Wert-Paaren übermittelt: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das oben gezeigte Formular übermittelt wird, wird der Eingabewert sowohl zu dem `name`/`value`-Paar `fruit=cherry` als auch zu dem `dirname`/Richtungs-Paar `fruit-dir=ltr` gesendet.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer nicht mit der Eingabe interagieren sollte. Deaktivierte Eingaben werden normalerweise in einer gedimmten Farbe dargestellt oder mit einer anderen Form der Anzeige, dass das Feld nicht verfügbar ist.

    Deaktivierte Eingaben empfangen insbesondere nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden auch nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl es von der Spezifikation nicht erforderlich ist, wird Firefox standardmäßig den dynamischen deaktivierten Zustand [über Seitenladevorgänge hinweg beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` Elements. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Ein String, der das zugeordnete {{HTMLElement("form")}}-Element angibt (d.h. seinen **Formularbesitzer**). Der Wert dieses Strings, wenn vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element dem nächstgelegenen enthaltenen Formular zugeordnet, falls vorhanden.

    Das `form`-Attribut ermöglicht es, eine Eingabe an beliebigen Stellen im Dokument zu platzieren, aber es mit einem Formular anderswo im Dokument zu verknüpfen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem einzigen Formular verbunden sein.

- `formaction`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für mehr Informationen.
- `formenctype`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für mehr Informationen.
- `formmethod`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für mehr Informationen.
- `formnovalidate`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für mehr Informationen.
- `formtarget`
  - : Nur gültig für die `image`- und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für mehr Informationen.
- `height`
  - : Nur gültig für den `image`-Inputbutton, ist `height` die Höhe der Bilddatei, die angezeigt werden soll, um die grafische Absenden-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen. Es definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Der Zweck besteht darin, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des {{htmlelement('label')}}'s `for`-Attributes verwendet, um das Label mit der Formularsteuerung zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, er gibt den Browsern einen Hinweis auf die Konfiguration der virtuellen Tastatur, die beim Bearbeiten dieses Elements oder seines Inhalts verwendet wird. Die Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der Wert, der dem `list`-Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements sein, das sich im selben Dokument befindet. Das `<datalist>` bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden sollen. Alle Werte in der Liste, die mit dem [`type`](#type) nicht kompatibel sind, sind in den vorgeschlagenen Optionen nicht enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

  Es ist gültig auf `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

  Gemäß den Spezifikationen wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder einem der Schaltflächentypen unterstützt.

  Abhängig vom Browser könnte der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Tick-Markierungen entlang eines Bereichs oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber es erlaubt, nicht aufgelistete Werte einzufügen. Prüfen Sie die [Browser-Kompatibilitäts-Tabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen.

  Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den größten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Höchstwert.

  Es gibt einen speziellen Fall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), darf der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass sich der Bereich umwickeln kann; zum Beispiel können Sie so einen Zeitbereich von 22 Uhr bis 4 Uhr festlegen.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein Ganzzahlwert von 0 oder höher sein. Wenn kein `maxlength` festgelegt ist oder ein ungültiger Wert festgelegt ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

  Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen als von `maxlength` erlaubt eingeben. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den kleinsten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) kleiner als dieser Wert ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, dann hat das Element keinen Mindestwert.

  Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert kleiner ist als das Minimum, das vom `min`-Attribut erlaubt wird, wird die Einschränkungsvalidierung die Einreichung des Formulars verhindern. Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

  Es gibt einen besonderen Fall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), darf der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass sich der Bereich umwickeln kann; zum Beispiel können Sie so einen Zeitbereich von 22 Uhr bis 4 Uhr festlegen.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimal erforderliche Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Eingabefeld eingeben muss. Dies muss ein nicht-negativer Ganzzahlwert sein, der kleiner als oder gleich dem Wert ist, der von `maxlength` spezifiziert wird. Wenn kein `minlength` festgelegt oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

  Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} ist und die Übermittlung des Formulars verhindert. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das Boolean-Attribut `multiple`, wenn es gesetzt ist, erlaubt dem Benutzer, kommaseparierte E-Mail-Adressen im E-Mail-Widget einzugeben oder mehr als eine Datei mit der `file`-Eingabe auszuwählen. Siehe den {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `name`
  - : Ein String, der einen Namen für die Eingabesteuerung spezifiziert. Dieser Name wird zusammen mit dem Wert der Steuerung gesendet, wenn die Formulardaten gesendet werden.

    Betrachten Sie den `name` als erforderliches Attribut (auch wenn es nicht so ist). Wenn eine Eingabe keinen `name` hat, oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular gesendet! (Deaktivierte Steuerungen, nicht markierte Optionsfelder, nicht markierte Kontrollkästchen und Reset-Knöpfe werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_` : Wenn verwendet als Name eines `<input>`-Elements des Typs {{HTMLElement("input/hidden", "hidden")}}, wird der `value` der Eingabe automatisch durch den {{Glossary("user_agent", "User-Agent")}} auf die zur Übermittlung des Formulars verwendete Zeichencodierung gesetzt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut schafft ein einzigartiges Verhalten für Optionsschaltflächen.

    Nur eine Optionsschaltfläche in einer gleichnamigen Gruppe von Optionsschaltflächen kann zu einem Zeitpunkt markiert sein. Die Auswahl einer beliebigen Optionsschaltfläche in dieser Gruppe hebt automatisch die Markierung der aktuell ausgewählten Optionsschaltfläche in derselben Gruppe auf. Der Wert dieser einen markierten Optionsschaltfläche wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Wenn in eine Serie gleichnamiger Gruppen von Optionsschaltflächen getippt wird, wird, falls eine markiert ist, diese den Fokus erhalten. Wenn sie nicht in der Quellreihenfolge gruppiert sind, wenn eine der Gruppe markiert ist, beginnt das Tabbing in die Gruppe, wenn die erste der Gruppe erreicht wird und überspringt alle, die nicht markiert sind. Mit anderen Worten, wenn eine markiert ist, wird das Tabben die nicht markierten Optionsschaltflächen in der Gruppe überspringen. Wenn keine markiert sind, erhält die Optionsschaltflächengruppe den Fokus, wenn die erste Schaltfläche in der gleichen Namensgruppe erreicht ist.

    Sobald eine der Radio-Knöpfe in einer Gruppe den Fokus hat, bewegen sich die Pfeiltasten durch alle Radio-Knöpfe mit demselben Namen, selbst wenn die Radio-Knöpfe in der Quellreihenfolge nicht gruppiert sind.

    Wenn einem Input-Element ein `name` gegeben wird, wird dieser Name zu einer Eigenschaft des [owners form element's](/de/docs/Web/API/HTMLFormElement)['HTMLFormElement.elements'](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft. Wenn Sie ein Eingabefeld haben, dessen `name` auf `guest` und ein anderes, dessen `name` auf `hat-size` gesetzt ist, kann folgender Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein, und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie, Formularelementen einen `name` zu geben, der mit einer eingebauten Eigenschaft des Formulars zusammenfällt, da Sie dadurch die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um ein reguläres Ausdruck zu erstellen, das der [`value`](#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er beim {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Es sollten keine Schrägstriche um den Mustertext angegeben werden. Beim Kompilieren des regulären Ausdrucks:
    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, sodass das Übereinstimmen gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. Das `'v'`-Flag wird angegeben, sodass das Muster als Folge von Unicode-Zeichencodes anstelle von {{Glossary("ASCII", "ASCII")}} behandelt wird.

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut komplett ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht leerer Wert nicht mit dem Muster übereinstimmt, verhindert die Einschränkungsvalidierung die Übermittlung des Formulars. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut vorhanden ist, wird der kompilierte reguläre Ausdruck mit jedem kommagetrennten Wert verglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe einschließen. Sie können auch ein [`title`](#title)-Attribut einfügen, um zu erklären, was die Anforderungen sind, um dem Muster zu entsprechen; die meisten Browser werden diesen Titel als Tooltip anzeigen. Die sichtbare Erklärung ist erforderlich für die Barrierefreiheit. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, liefert das `placeholder`-Attribut einen Hinweis für den Benutzer, welche Art von Informationen im Feld erwartet wird. Es sollte ein Wort oder ein kurzer Satz sein, der einen Hinweis auf den erwarteten Datentyp gibt, anstatt eine Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Wenn zum Beispiel ein Feld erwartet, den Vornamen des Benutzers zu erfassen, und dessen Label "Vorname" ist, könnte ein geeigneter Platzhalter "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch hilfreich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`
  - : Verwandelt ein `<input type="button">`-Element in eine Popover-Steuerknopf; nimmt die ID des Popover-Elements, das es steuern soll, als Wert. Siehe die [Popover-API](/de/docs/Web/API/Popover_API) Landing Page für mehr Details. Die Schaffung einer Beziehung zwischen einem Popover und seinem Auslöseknopf mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und unterstützende Technologie (AT)-Nutzer besser zugänglich (siehe auch [Popover accessibility features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Verankerungsreferenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover anchor positioning](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`
  - : Gibt die auszuführende Aktion auf einem Popover-Element an, das von einem Steuerknopf `<input type="button">` gesteuert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Knopf wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion unternommen.
    - `"show"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion unternommen.
    - `"toggle"`
      - : Der Button wechselt ein Popover zwischen anzeigen und versteckt. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerknopf ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer den Wert der Eingabe nicht bearbeiten kann. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) für mehr Informationen.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Eigentümerformular übermittelt werden kann. Das `required`-Attribut wird von `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` Eingaben unterstützt.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) und die [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für mehr Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`, das `size`-Attribut definiert, wie viel der Eingabe angezeigt wird. Im Wesentlichen wird das gleiche Ergebnis erzielt wie bei der Einstellung der CSS-[`width`](/de/docs/Web/CSS/width)-Eigenschaft mit einigen Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`
  - : Nur gültig für den `image`-Inputbutton, ist `src` ein String, der die URL der anzuzeigenden Bilddatei angibt, um die grafische Absenden-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, gibt das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut eine Zahl an, die die Granularität festlegt, an die der Wert gebunden sein muss. Nur Werte, die ein Vielfaches der Schrittgröße vom Schrittbasiswert sind, sind gültig. Der Schrittbasiswert ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min) falls spezifiziert, [`value`](#value) ansonsten, oder `0` falls keiner bereitgestellt wird (außer bei `week`, wo die Standard-Schrittbasis −259.200.000 ist, was den Anfang der Woche `1970-W01` darstellt).

  Wenn nicht explizit einbezogen:
  - `step`-Werte standardmäßig auf 1 für `number` und `range`.
  - Jeder Datum/Zeit-Eingabetyp hat einen Standard-`step`-Wert, der für den Typ geeignet ist; siehe die individuellen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

  Der Wert muss eine positive Zahl—Ganzzahl oder Gleitkommazahl—sein oder der spezielle Wert `any`, was bedeutet, dass keine Schrittweite impliziert wird und jeder Wert erlaubt ist (unter Vorbehalt anderer Einschränkungen, wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

  Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann sind alle ganzzahlige Zahlen, `10` oder höher, gültig. Wenn weggelassen, `<input type="number">`, ist jede ganze Zahl gültig, aber Gleitkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig `1` ist. Um `4.2` gültig zu machen, müsste `step` entweder `any`, 0.1, 0.2 sein, oder der `min`-Wert müsste eine Zahl sein, die in `.2` endet, wie `<input type="number" min="-5.2">`.

  > [!NOTE]
  > Wenn die von der Nutzerin eingegebenen Daten nicht den Schrittkonfigurationen entsprechen, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und wird die `:invalid`-Pseudoklasse treffen.

  Siehe [Client-seitige Validierung](#clientseitige_validierung) für mehr Informationen.

- `tabindex`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen sollte. Da alle Eingabetypen außer dem Typ `hidden` fokussierbar sind, sollte dieses Attribut auf Formularelementen nicht verwendet werden, da sonst der Fokusreihenfolge für alle Elemente im Dokument verwaltet werden müsste mit dem Risiko, die Benutzbarkeit und Barrierefreiheit bei falscher Handhabung zu beeinträchtigen.

- `title`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text enthält, der Beratungsinformationen in Bezug auf das Element bereitstellt, zu dem es gehört. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks der Kontrolle des Formulars verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut der Formularelementkontrolle eingestellt ist. Siehe [Labels](#labels) unten.

- `type`
  - : Ein String, der den Typ der zu rendernden Steuerung spezifiziert. Beispielsweise wird ein Wert von `checkbox` verwendet, um ein Kontrollkästchen zu erstellen. Wenn weggelassen (oder ein unbekannter Wert angegeben), wird der Eingabetyp `text` verwendet und ein Klartext-Eingabefeld erstellt.

    Erlaubte Werte sind oben in den [Input-Typen](#input_types) aufgeführt.

- `value`
  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Initialwert und kann von da an jederzeit geändert oder mit JavaScript abgerufen werden, um auf die entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt `value`-Eigenschaft zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch als zwingend für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`
  - : Nur gültig für den `image`-Inputbutton, ist `width` die Breite der Bilddatei, die angezeigt werden soll, um die grafische Absenden-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch bei einigen Browsern verfügbar. Generell sollten sie vermieden werden, es sei denn, es gibt keine Alternative.

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
        <p>Ein String, der den Typ der Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste drückt, während er das Feld bearbeitet; dies wird verwendet, um ein geeignetes Label für diesen Schlüssel auf einer
        virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Ausrichtung des Bereichsschiebers. <strong>Nur Firefox.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Elementen, die in der Liste der Vorschläge für vorherige Suchabfragen angezeigt werden sollten. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, das angibt, ob nur Verzeichnisse (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> auch vorhanden ist) vom Benutzer ausgewählt werden dürfen
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine Erweiterung für WebKit und Blink (daher wird es von Safari, Opera, Chrome usw. unterstützt), das, wenn vorhanden, den {{Glossary("user_agent", "User-Agent")}} dazu fordert, den Input als Live-Suche zu bearbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur dann gesendet, wenn der Benutzer explizit eine Suche initiiert (zum Beispiel durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste, während er das Feld bearbeitet).

    Das `search`-Ereignis ist so rate-begrenzt, dass es nicht häufiger als ein implementierungsdefiniertes Intervall gesendet wird.

- `orient` {{non-standard_inline}}
  - : Ähnlich wie die nicht-standardisierte CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente beeinflusst, definiert das `orient`-Attribut die Ausrichtung des Bereichsschiebers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal dargestellt wird, und `vertical`, bei dem der Bereich vertikal gerendert wird. Siehe [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz, vertikale Formularelemente zu erstellen.

- `results` {{non-standard_inline}}
  - : Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die im nativen Dropdown-Menü des `<input>`-Elements für frühere Suchanfragen angezeigt werden sollen.

  Der Wert muss eine nicht negative Dezimalzahl sein. Wird kein gültiger Wert bereitgestellt, wird die maximale Anzahl von Einträgen auf den Standardwert des Browsers gesetzt.

- `webkitdirectory` {{non-standard_inline}}
  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, weist darauf hin, dass nur Verzeichnisse als Auswahloptionen für den Benutzer in der Dateiauswahloberfläche angezeigt werden sollen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

  Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie in Firefox 50 und später verwendbar. Obwohl es eine relativ breite Unterstützung hat, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, wenn keine Alternative besteht.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM repräsentiert. Auch verfügbar sind die von den übergeordneten Schnittstellen spezifizierten Methoden, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben und es wird ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf das Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben, ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element ausgelöst und (falls das Ereignis nicht abgebrochen wird) das Problem dem Benutzer gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements ausgewählt werden kann. Bei Elementen ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder ein Kalendereingabefeld) bewirkt diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabe-Element auf eine gegebene Zeichenfolge. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der bestehende Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines textuellen Eingabeelements aus. Bewirkt nichts für Eingaben, die nicht als Texteingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Auswähler für das Eingabeelement an, der normalerweise bei Auswahl des Elements angezeigt wird, aber durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Vermindert den Wert einer numerischen Eingabe standardmäßig um eins oder durch die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder durch die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Eigenschaften, die nicht auf Nicht-Formularelemente anwendbar sind. Es gibt CSS-Selektoren, die speziell auf Formularelemente basierend auf ihren UI-Merkmalen, auch bekannt als UI-Pseudoklassen, abzielen können. Das Input-Element kann auch durch Typ mit Attributselektoren angesprochen werden. Einige Eigenschaften sind ebenfalls besonders nützlich.

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
        Jedes derzeit aktivierbare Element, das ausgewählt, angeklickt oder fokussiert werden kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element mit einem aktivierten Zustand, was bedeutet, dass es sonst aktiviert oder fokussiert werden könnte, wäre es nicht deaktiviert.
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
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das bisher keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die in einer Gruppe verwandter Elemente standardmäßig sind. Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} input Typen, die beim Laden oder Rendern der Seite aktiviert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} input Typen, die derzeit aktiviert sind (und die {{HTMLElement("option")}} in einem {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente, deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt ist, {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle Radio-Buttons mit demselben Namenswert im Formular nicht aktiviert sind, und {{HTMLElement("progress")}}-Elemente in einem indeterminierten Zustand
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, die einer Beschränkungsvalidierung unterzogen werden können und derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, die einer Beschränkungsvalidierung unterzogen werden und derzeit nicht gültig sind. Passt zu einem Formularelement, dessen Wert nicht den durch seine Attribute festgelegten Einschränkungen entspricht, wie <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein Nicht-leeres input, dessen aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribute sowie des <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein Nicht-leeres input, dessen aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribute festgelegten Bereichsgrenzen liegt oder nicht der <a href="#step"><code>step</code></a>-Einschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Passt nur zu Elementen, die erforderlich sein können.
        Das Attribut bei einem nicht erforderlichen Element wird nicht zu einem Treffer führen.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut NICHT gesetzt hat.
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
        Ähnlich wie <code>:invalid</code>, wird aber bei Blur aktiviert. Passt zu ungültigen inputs, jedoch nur nach Benutzereingriff, z. B. durch Fokussierung auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular mit dem ungültigen Steuerelement zu übermitteln.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code> Elemente, die ein Auswahlwerkzeug für den Benutzer anzeigen, um einen Wert daraus zu wählen (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — jedoch nur, wenn das Element im offenen Zustand ist, das heißt, wenn das Auswahlwerkzeug angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen-Beispiel

Wir können ein Checkbox-Label basierend darauf stylen, ob die Checkbox angekreuzt ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einem angekreuzten input kommt. Wir haben keine Styles angewendet, wenn das `input` nicht angekreuzt ist.

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

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren passen zu Elementen basierend entweder nur auf der Anwesenheit eines Attributs oder dem Wert eines bestimmten Attributs.

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

Standardmäßig ist das Aussehen von Placholder-Text transluzent oder hellgrau. Das {{cssxref('::placeholder')}}-Pseudoelement ist der [`placeholder`-Text](#placeholder) des inputs. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil der CSS-Eigenschaften, der auf das {{cssxref("::first-line")}}-Pseudoelement anzuwenden ist, kann in einer Regel verwendet werden, die `::placeholder` in seinem Selektor verwendet.

### caret-color

Eine Eigenschaft, die sich speziell auf Texteingabe-bezogene Elemente bezieht, ist die CSS-{{cssxref("caret-color")}}-Eigenschaft, mit der Sie die Farbe festlegen können, die zur Darstellung der Texteingabepflegemarke verwendet wird:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht Ihnen die Kontrolle über das Größenverhalten von Formulareingaben (d.h. ihnen wird standardmäßig eine bevorzugte Größe zugewiesen). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und Formularelementen die Anpassung an ihre Inhalte zu erlauben.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die sich an ihren Inhalt anpassen und mit zunehmendem Text größer werden. Dies funktioniert mit input-Typen, die direkte Texteingabe akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), input Typ [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}}-Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textuellen Inputs und spezialisierten Oberflächen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. In diesem Fall können die Position und Größe des Elements innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen zur Hinzufügung von Farbe zu Elementen in HTML, siehe:

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels sind notwendig, um erklärenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element bietet erklärende Informationen über ein Formularfeld, das _immer_ angemessen ist (abgesehen von jeglichen Layout-Bedenken, die Sie möglicherweise haben). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in eine `<input>` oder ein {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugeordnete Labels

Die semantische Paarung von `<input>`- und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Screenreader. Indem Sie sie durch das [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut des `<label>` verbinden, koppeln Sie das Label an das input auf eine Weise, die es Screenreadern ermöglicht, Eingaben für Benutzer präziser zu beschreiben.

Es genügt nicht, einfachen Text neben dem `<input>`-Element zu haben. Vielmehr erfordern Benutzerfreundlichkeit und Barrierefreiheit die Einbeziehung entweder eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist unzugänglich: Es besteht keine Beziehung zwischen der Eingabeaufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere "Treffer"-Fläche für Maus- und Touchscreen-Nutzer, um darauf zu klicken oder zu berühren. Durch das Zusammenführen eines `<label>` mit einem `<input>` wird beim Klicken auf beide das `<input>` fokussiert. Wenn Sie einfachen Text verwenden, um Ihr input zu "labeln", wird dies nicht geschehen. Die Eingabeaufforderung als Teil des Aktivierungsbereichs des inputs ist hilfreich für Personen mit motorischen Kontrollproblemen.

Als Webentwickler ist es wichtig, dass wir nie davon ausgehen, dass Menschen all das wissen, was wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und damit Ihre Website – garantiert praktisch, dass einige Besucher Ihrer Seite einige Variationen in Denkprozessen und/oder Umständen haben werden, was dazu führt, dass sie Ihre Formulare sehr unterschiedlich interpretieren, wenn keine klaren und richtig präsentierten Labels vorhanden sind.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut erlaubt es Ihnen, Text anzugeben, der innerhalb des Inhaltsbereichs des `<input>`-Elements selbst erscheint, wenn es leer ist. Der Platzhalter sollte nie notwendig sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, weil es keins ist. Der Platzhalter dient dazu, einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Der Platzhalter ist nicht nur für Screenreader nicht zugänglich, sondern verschwindet auch, sobald der Benutzer Text in das Formularelement eingibt oder das Formularelement bereits einen Wert hat. Browser mit automatischen Seitenübersetzungsfunktionen können Attribute beim Übersetzen überspringen, wodurch der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element markieren müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Clientseitige Validierung

> [!WARNING]
> Die clientseitige Validierung ist nützlich, aber sie garantiert _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, überprüfen Sie sie _immer_ auch auf der Serverseite und senden Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400), wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um inputs basierend auf den {{cssxref(":valid")}}- oder {{cssxref(":invalid")}}-UI-Zuständen basierend auf dem aktuellen Zustand jedes inputs zu stylen, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben beschrieben, bietet der Browser eine clientseitige Validierung bei (versuchter) Formularübermittlung. Bei der Formularübermittlung, wenn es ein Formularelement gibt, das die Beschränkungsvalidierung nicht besteht, zeigen unterstützende Browser eine Fehlermeldung bei dem ersten ungültigen Formularelement an; entweder eine Standardmeldung basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Nachricht.

Einige input-Typen und andere Attribute schränken ein, welche Werte für ein gegebenes input gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Es könnten mehrere Fehler auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade ganze Zahl (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die input-Typen, deren Wertebereich periodisch ist (das heißt, bei dem höchstmöglichen Wert wickeln sich die Werte an den Anfang zurück, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max)- und [`min`](#min)-Eigenschaften umgekehrt sind. Dies zeigt an, dass der Bereich der zulässigen Werte bei `min` beginnt, sich zu dem niedrigstmöglichen Wert wickelt und dann fortfährt, bis `max` erreicht ist. Dies ist besonders nützlich für Daten und Zeiten, wie wenn Sie den Bereich von 20 Uhr bis 8 Uhr zulassen möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Bestimmte Attribute und deren Werte können zu einem spezifischen [`ValidityState`](/de/docs/Web/API/ValidityState) -Fehler führen:

<table class="no-markdown">
  <caption>
    Validitätsobjektfehler hängen von den <code>&lt;input&gt;</code>-Attributen und deren Werten ab:
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
        Tritt auf, wenn der Wert größer ist als der Höchstwert, wie durch das <code>max</code>-Attribut definiert
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die Eigenschaft <code>maxlength</code> erlaubte Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner als der Mindestwert ist, wie durch das <code>min</code>-Attribut definiert
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die Eigenschaft <code>minlength</code> erforderliche Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein pattern-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht damit übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> ist oder ein Radio- oder Checkbox nicht aktiviert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert stimmt nicht mit dem Schrittinkrement überein. Der voreingestellte Inkrementwert ist <code>1</code>, daher sind nur Ganzzahlen beim <code>type="number"</code> gültig, wenn step nicht enthalten ist. <code>step="any"</code> löst diesen Fehler nie aus.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht den richtigen Typ hat, zum Beispiel, wenn eine Email kein <code>@</code> enthält oder eine URL kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required`-Attribut hat, ist kein Wert oder ein leerer String nicht ungültig. Selbst wenn die obigen Attribute vorhanden sind, mit Ausnahme von `required`, wird ein leerer String nicht zu einem Fehler führen.

Wir können Grenzen dafür setzen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer warnen, wenn bei der Übermittlung ein Fehler vorliegt.

Zusätzlich zu den im obigen Tabellen beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen, nur lesbaren Eigenschaften `badInput`, `valid` und `customError`. Das Validität-Objekt beinhaltet:

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

Für jede dieser Booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund, warum die Validierung möglicherweise fehlgeschlagen ist, zutrifft, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

Wenn ein Fehler vorliegt, werden unterstützende Browser sowohl den Benutzer warnen als auch die Übermittlung des Formulars verhindern. Ein Wort der Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen `truthy` Wert gesetzt wird (alles außer dem leeren String oder `null`), wird die Formulareinreichung verhindert. Wenn keine benutzerdefinierte Fehlermeldung vorliegt und keine der anderen Eigenschaften `true` zurückgibt, wird `valid` `true` sein, und es kann eingereicht werden.

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

Die letzte Zeile, in der die benutzerdefinierte Fehlermeldung auf den leeren String gesetzt wird, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt wird, wird sie nicht übermittelt, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>`-Elementen (und verwandten) verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen führen dazu, dass eine Standardfehlermeldung angezeigt wird, wenn Sie versuchen, das Formular ohne gültige Eingabe oder einen Wert, der nicht dem `pattern` entspricht, zu übermitteln.

Wenn Sie stattdessen benutzerdefinierte Fehlermeldungen anzeigen möchten, könnten Sie das folgende JavaScript verwenden:

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

Das Beispiel wird folgendermaßen dargestellt:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sein Wert durch Ausführen der `checkValidity()`-Methode über den `input`-Ereignishandler geändert wird.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst und die `invalid`-Ereignishandlerfunktion ausgeführt. Innerhalb dieser Funktion ermitteln wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, und setzen eine benutzerdefinierte Validitätsfehlermeldung.
- Folglich wird, falls der Eingabewert ungültig ist, wenn der Absenden-Button gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn es gültig ist, wird es wie erwartet übermittelt. Damit dies passiert, muss die benutzerdefinierte Gültigkeit abgebrochen werden, indem `setCustomValidity()` mit einem leeren String-Wert aufgerufen wird. Wir tun dies daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und zuvor eine benutzerdefinierte Gültigkeit festgelegt wurde, wird das input als ungültig registriert, auch wenn es derzeit einen gültigen Wert enthält.

> [!NOTE]
> Validieren Sie Eingabebeschränkungen immer sowohl clientseitig als auch serverseitig. Die Beschränkungsvalidierung beseitigt nicht die Notwendigkeit der Validierung auf der _Serverseite_. Ungültige Werte können immer noch von älteren Browsern oder von bösartigen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte über viele Versionen hinweg ein proprietäres Fehlerattribut — `x-moz-errormessage` — das es ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise zu setzen. Dieses wurde in Version 66 entfernt (siehe [Firefox-Fehler 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der Lokalisierung ab. In einigen Gebieten ist 1.000,00 eine gültige Zahl, während in anderen Gebieten die gültige Eingabeweise dieser Zahl 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Lokalisierung zur Validierung der Benutzereingabe zu bestimmen (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut am Element oder einem seiner Eltern angegeben ist.
- Versuchen Sie die Sprache, die durch einen `Content-Language`-HTTP-Header angegeben ist. Oder,
- Wenn keine angegeben ist, verwenden Sie die Browsersprache.

## Barrierefreiheit

### Labels

Beim Einfügen von Eingabeelementen ist es eine Anforderung der Barrierefreiheit, Labels hinzuzufügen. Dies ist erforderlich, damit diejenigen, die unterstützende Technologien verwenden, wissen, wofür die Eingabe gedacht ist. Außerdem gibt das Klicken oder Berühren eines Labels dem zugehörigen Technologieformularfaktor den Fokus zurück. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer und erhöht die Fläche, die ein Benutzer klicken oder berühren kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radio-Buttons und Checkboxes, die sehr klein sind. Für weitere Informationen über Labels im Allgemeinen siehe [Labels](#labels).

Das folgende ist ein Beispiel dafür, wie das `<label>` mit einem `<input>`-Element im oben beschriebenen Stil verknüpft wird. Sie müssen dem `<input>`-Element ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert derselbe ist wie die `id` des inputs.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formularinputs sollten einen Bereich bieten, der groß genug ist, damit es einfach ist, sie zu aktivieren. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die nicht-präzise Formen der Eingabe wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Kategorien der Inhalte</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalte</a>, aufgelistet, einreichbar, zurücksetzbar, mit dem Formular assoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasing content</a>. Wenn das <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann labelbares Element, palpabler Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Starttag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasing content</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
            <code>type=text</code> ohne <code>list</code>-Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            oder <code>text</code> mit <code>list</code>-Attribut: kein
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

- CSS {{cssxref("appearance")}} Eigenschaft
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formular-Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
