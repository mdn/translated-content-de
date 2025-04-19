---
title: "<input>: Das HTML-Eingabeelement"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<input>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren. Eine große Vielfalt an Typen von Eingabedaten und Steuerelement-Werkzeugen steht zur Verfügung, abhängig vom Gerät und dem {{Glossary("user_agent", "user agent")}}. Das `<input>`-Element gehört zu den mächtigsten und komplexesten in HTML, aufgrund der schieren Anzahl von Kombinationen von Eingabetypen und Attributen.

{{InteractiveExample("HTML Demo: &lt;input type='text'&gt;", "tabbed-shorter")}}

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

## `<input>` Typen

Wie ein `<input>` funktioniert, variiert beträchtlich je nach dem Wert seines [`type`](#type)-Attributs, daher werden die verschiedenen Typen auf ihren eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, ist der Standardtyp `text`.

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
        Eine Drucktaste ohne voreingestelltes Verhalten, die den Wert des <a href="#value"><code>value</code></a>-Attributs anzeigt, standardmäßig leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Auswahlkästchen, das einzelne Werte zur Auswahl/Abwahl zulässt.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerfeld zur Angabe einer Farbe; öffnet einen Farbwähler, wenn es in unterstützenden Browsern aktiviert ist.
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
        Ein Steuerfeld, um ein Datum (Jahr, Monat und Tag, ohne Zeit) einzugeben.
        Öffnet einen Datumsauswähler oder numerische Räder für Jahr, Monat, Tag, wenn es in unterstützenden Browsern aktiviert ist.
      </td>
      <td id="exampledate">
        <pre class="brush: html hidden">
&#x3C;input type="date" name="date"/></pre>
        {{EmbedLiveSample("exampledate",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/datetime-local", "datetime-local")}}</td>
      <td>
        Ein Steuerfeld zur Eingabe von Datum und Uhrzeit ohne Zeitzone. Öffnet ein Datumsauswahlfeld oder numerische Räder für Datum- und Zeitkomponenten, wenn es in unterstützenden Browsern aktiviert ist.
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
        <code>text</code> Eingabefeld, hat aber Validierungsparameter und relevante
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
        Ein Steuerfeld, das dem Benutzer erlaubt, eine Datei auszuwählen.
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
        Ein Steuerfeld, das nicht angezeigt wird, dessen Wert jedoch an den
        Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist verborgen!
      </td>
      <td id="examplehidden">
        <pre class="brush: html hidden">
&#x3C;input id="userId" name="userId" type="hidden" value="abc123"></pre>
        {{EmbedLiveSample("examplehidden",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/image", "image")}}</td>
      <td>
        Eine grafische <code>submit</code> Schaltfläche. Zeigt ein Bild an, das durch das <code>src</code> Attribut definiert ist.
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
      <td>Ein Steuerfeld zur Eingabe eines Monats und Jahres ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerfeld zur Eingabe einer Zahl. Zeigt ein Spinner an und fügt eine Standardvalidierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Eine Optionsschaltfläche, die es erlaubt, einen einzigen Wert aus mehreren mit dem gleichen <a href="#name"><code>name</code></a> Wert auszuwählen.
      </td>
      <td id="exampleradio">
        <pre class="brush: html hidden">
&#x3C;input type="radio" name="radio"/></pre>
        {{EmbedLiveSample("exampleradio",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>
        Ein Steuerfeld zur Eingabe einer Zahl, deren exakter Wert nicht wichtig ist.
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
        Eine Schaltfläche, die den Inhalt des Formulars auf die Standardwerte zurücksetzt. Nicht empfohlen.
      </td>
      <td id="examplereset">
        <pre class="brush: html hidden">
&#x3C;input type="reset" name="reset"/></pre>
        {{EmbedLiveSample("examplereset",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/search", "search")}}</td>
      <td>
        Ein einzeiliges Textfeld zur Eingabe von Suchstrings. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern ein Löschsymbol enthalten, das zum Löschen des Feldes verwendet werden kann. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Eine Schaltfläche, die das Formular absendet.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        Ein Steuerfeld zur Eingabe einer Telefonnummer. Zeigt eine Telefontastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
      <td>Ein Steuerfeld zur Eingabe einer Uhrzeit ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code> Eingabe, hat aber Validierungsparameter und relevante Tastaturen in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerfeld zur Eingabe eines Datums, das aus einer Jahr-Wochen-Nummer und einer Wochennummer besteht, ohne Zeitzone.
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
        Ein Steuerfeld zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so mächtig wegen seiner Attribute; das [`type`](#type) Attribut, das mit Beispielen oben beschrieben wurde, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle basiert, teilen sie technisch gesehen genau dieselbe Menge von Attributen. Allerdings haben die meisten Attribute in der Realität nur auf eine spezifische Teilmenge von Eingabetypen eine Wirkung. Zusätzlich beeinflusst die Art und Weise, wie einige Attribute eine Eingabe beeinflussen, den Eingabetyp auf unterschiedliche Weise.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut im Detail beschreibt, zusammen mit den Eingabetypen, mit denen sie verbunden sind. Diejenigen, die für die meisten oder alle Eingabetypen gemeinsam sind, werden unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind – oder Attribute, die für alle Eingabetypen gemeinsam sind, aber spezielle Verhaltensweisen auf einem bestimmten Eingabetyp haben – werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element beinhalten die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                           |
| --------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                  | Hinweis für den erwarteten Dateityp in Datei-Upload-Steuerelementen                    |
| [`alt`](#alt)                                 | `image`                                                                 | alt-Attribut für den Bildtyp. Erforderlich für die Barrierefreiheit                    |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email`, und `password`                               | Steuert die automatische Großschreibung im eingegebenen Text.                          |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio`, und Buttons                             | Hinweis für die Formular-Autoausfüllfunktion                                           |
| [`capture`](#capture)                         | `file`                                                                  | Methode zur Erfassung von Medien in Datei-Upload-Steuerelementen                       |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                     | Ob der Befehl oder das Steuerelement aktiviert ist                                     |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                       | Name des Formularfeldes zur Übermittlung der Richtungsinformation des Elements          |
| [`disabled`](#disabled)                       | alle                                                                    | Ob das Formular-Steuerelement deaktiviert ist                                          |
| [`form`](#form)                               | alle                                                                    | Verknüpft das Steuerelement mit einem Formularelement                                  |
| [`formaction`](#formaction)                   | `image`, `submit`                                                       | URL zur Verwendung für die Formularübermittlung                                        |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                       | Zu verwendender Codierungstyp des Formulardatasets für die Formularübermittlung        |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                       | HTTP Methode zur Verwendung für Formularübermittlung                                   |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                       | Umgehung der Formularsteuerprüfung zur Formularübermittlung                            |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                       | Browsing-Kontext für die Formularübermittlung                                          |
| [`height`](#height)                           | `image`                                                                 | Gleich wie das height-Attribut für {{htmlelement('img')}}; vertikale Dimension         |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio`, und Buttons       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsoptionen |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Maximaler Wert                                                                         |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Maximale Länge (Anzahl der Zeichen) des `value`                                        |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Minimaler Wert                                                                         |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Minimale Länge (Anzahl der Zeichen) von `value`                                        |
| [`multiple`](#multiple)                       | `email`, `file`                                                         | Boolean. Ob mehrere Werte erlaubt sind                                                 |
| [`name`](#name)                               | alle                                                                    | Name des Formular-Steuerelements. Wird mit dem Formular als Teil eines Namen/Wert-Paares übermittelt |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                     | Muster, das `value` entsprechen muss, um gültig zu sein                                 |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`           | Text, der im Formular-Steuerelement angezeigt wird, wenn kein Wert gesetzt ist         |
| [`popovertarget`](#popovertarget)             | `button`                                                                | Kennzeichnet ein `<input type="button">` als Steuerelement für ein Popover-Element     |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                       |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio`, und Buttons | Boolean. Der Wert ist nicht bearbeitbar                                                |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color`, und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss überprüft werden, damit das Formular übermittelt werden kann |
| [`size`](#größe)                               | `text`, `search`, `url`, `tel`, `email`, `password`                     | Größe des Steuerelements                                                               |
| [`src`](#src)                                 | `image`                                                                 | Gleich wie das `src` Attribut für {{htmlelement('img')}}; Adresse der Bildressource   |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Inkrementelle Werte, die gültig sind                                                   |
| [`type`](#type)                               | alle                                                                    | Typ des Formularsteuerelements                                                         |
| [`value`](#value)                             | alle außer `image`                                                      | Der Wert des Steuerelements. Wenn im HTML angegeben, entspricht dem Anfangswert         |
| [`width`](#width)                             | `image`                                                                 | Gleich wie das `width` Attribut für {{htmlelement('img')}}                              |

Einige zusätzliche nicht standardisierte Attribute werden nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)

  - : Nur für den `file`-Eingabetyp gültig, definiert das `accept`-Attribut, welche Dateitypen in einem `file`-Upload-Steuerelement ausgewählt werden dürfen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`

  - : Nur für den `image`-Button gültig, bietet das `alt`-Attribut alternativen Text für das Bild, der den Wert des Attributs anzeigt, falls das Bild [`src`](#src) fehlt oder sonst nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, in welcher Weise. Weitere Informationen finden Sie auf der Seite des globalen Attributs [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge, die beschreibt, welche Art von Autovervollständigungs-Funktionalität das Eingabeelement bereitstellen soll. Eine typische Implementierung von Autovervollständigung ruft vorherige Werte auf, die im gleichen Eingabefeld eingegeben wurden, jedoch können komplexere Formen der Autovervollständigung existieren. Beispielsweise könnte ein Browser mit der Kontaktliste eines Geräts integriert werden, um E-Mail-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#values) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig bei `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, und `password`. Dieses Attribut hat keine Auswirkung auf Eingabetypen, die keine numerischen oder textuellen Daten zurückgeben, und ist für alle Eingabetypen außer `checkbox`, `radio`, `file` oder eine der Schaltflächen gültig.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` sich geringfügig für `hidden` von anderen Eingabetypen unterscheidet.

- `autofocus`

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass die Eingabe automatisch den Fokus erhalten sollte, wenn die Seite fertig geladen ist (oder wenn das {{HTMLElement("dialog")}} mit dem Element angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erlangen, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element platziert wird, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben vom Typ `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Die automatische Fokussierung eines Formular-Steuerelements kann sehbehinderte Personen, die Bildschirmlesetechnologie verwenden, und Personen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, "teleportieren" Screen-Reader ihre Benutzer ohne Vorwarnung zum Formular-Steuerelement.

    Wenden Sie bei der Anwendung des `autofocus`-Attributs sorgfältige Überlegungen zur Barrierefreiheit an. Die automatische Fokussierung eines Steuerelements kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass dynamische Tastaturen auf einigen Touch-Geräten angezeigt werden. Während ein Screen-Reader das Etikett des Formular-Steuerelements ansagt, das den Fokus erhält, wird der Screen-Reader nichts vor dem Etikett ansagen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den durch den vorhergehenden Inhalt geschaffenen Kontext verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML-Spezifikation für die Medienaufnahme und nur für den `file` Eingabetyp gültig, definiert das `capture` Attribut, welches Medium — Mikrofon, Video oder Kamera — verwendet werden sollte, um eine neue Datei zur Upload-Steuerung mit `file`-Upload-Steuerung in unterstützten Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`

  - : Für sowohl den `radio` als auch `checkbox` Typ gültig, ist `checked` ein Boolean-Attribut. Wenn es auf einem `radio`-Typ vorhanden ist, gibt es an, dass die Optionsschaltfläche die derzeit ausgewählte in der Gruppe der gleichbenannten Optionsschaltflächen ist. Wenn es auf einem `checkbox`-Typ vorhanden ist, gibt es an, dass das Auswahlkästchen standardmäßig ausgewählt ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen aktuell markiert ist: Wenn der Status des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut nicht die Änderung wider. (Nur das [`HTMLInputElement`'s `checked` IDL Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen werden die Werte von Checkboxen und Optionsfeldern nur dann in den übermittelten Daten erfasst, wenn sie derzeit `checked` sind. Wenn sie es sind, werden der Name und der Wert(e) der markierten Steuerelemente übermittelt.
    >
    > Zum Beispiel, wenn eine Checkbox mit dem `name` `fruit` einen `value` von `cherry` hat und die Checkbox ausgewählt ist, werden die gesendeten Formulardaten `fruit=cherry` beinhalten. Wenn das Auswahlkästchen nicht aktiv ist, taucht es überhaupt nicht in den Formulardaten auf. Der Standard `value` für Checkboxen und Optionsfelder ist `on`.

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel`, und `email` Eingabetypen, ermöglicht das `dirname` Attribut die Übermittlung der Richtung des Elements. Wenn es enthalten ist, sendet das Formularsteuerelement zwei Namen/Wert-Paare: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname` Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das Formular oben gesendet wird, verursacht die Eingabe sowohl das `name` / `value` Paar von `fruit=cherry` als auch das `dirname` / Richtungs-Paar von `fruit-dir=ltr` gesendet werden.
    Weitere Informationen finden Sie im [`dirname` Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren darf. Deaktivierte Eingaben werden typischerweise mit einer gedämpfteren Farbe oder einer anderen Form der Anzeige dargestellt, dass das Feld nicht verfügbar ist.

    Konkret erhalten deaktivierte Eingaben das [`click`](/de/docs/Web/API/Element/click_event) Ereignis nicht, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl es von der Spezifikation nicht erforderlich ist, wird Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` über Seitenladezeiten hinweg beibehalten. Verwenden Sie das [`autocomplete`](#autocomplete) Attribut, um dieses Feature zu steuern.

- `form`

  - : Ein String, der das {{HTMLElement("form")}} Element angibt, mit dem die Eingabe verknüpft ist (d.h. ihr **Formularbesitzer**). Der Wert dieser Zeichenkette, wenn vorhanden, muss mit dem [`id`](#id) eines `<form>` Elements im gleichen Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben wird, ist das `<input>` Element mit dem nächstgelegenen enthaltenen Formular, wenn vorhanden, verknüpft.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe irgendwo im Dokument zu platzieren, sie jedoch einem Formular an anderer Stelle im Dokument zuzuordnen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft sein.

- `formaction`
  - : Nur für die `image` und `submit` Eingabetypen gültig. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Nur für die `image` und `submit` Eingabetypen gültig. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Nur für die `image` und `submit` Eingabetypen gültig. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Nur für die `image` und `submit` Eingabetypen gültig. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Nur für die `image` und `submit` Eingabetypen gültig. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Nur für den `image` Eingangstyp gültig, ist die `height` die Höhe der zu darstellenden Bilddatei, um die grafische Sendeschaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingangstyp.
- `id`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, und das eine eindeutige Kennung (ID) definiert, die im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als der Wert des {{htmlelement('label')}}'s `for`-Attributs verwendet, um das Label mit dem Formular-Steuerelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Allgemeiner Wert, der für alle Elemente gültig ist. Er bietet Browsern einen Hinweis auf die Art der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Werte sind `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der dem `list`-Attribut gegebene Wert sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. Die `<datalist>`-Element bietet eine Liste vordefinierter Werte an, die dem Benutzer zur Auswahl vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, und `color`.

    Laut den Spezifikationen wird das `list`-Attribut von `hidden`, `password`, `checkbox`, `radio`, `file` oder einer der Schaltflächentypen nicht unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen sehen, Markierungen entlang eines Bereichs oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, jedoch die Eingabe nicht gelisteter Werte zulässt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert es den größten Wert im Bereich der erlaubten Werte. Wenn der eingegebene [`value`](#value) in das Element diesen überschreitet, schlägt das Element in der [Existenzprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen maximalen Wert.

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` kleiner als der von `min` sein, was darauf hindeutet, dass der Bereich umlaufen kann; dies ermöglicht Ihnen beispielsweise, einen Zeitbereich von 22 Uhr bis 4 Uhr anzugeben.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert es die maximale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben wird, oder ein ungültiger Wert angegeben wird, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe wird die [Existenzüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16 Codeeinheiten ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben können, als durch das `maxlength` Attribut erlaubt sind. Die Existenzüberprüfung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert es den kleinsten Wert im Bereich der erlaubten Werte. Wenn der eingegebene [`value`](#value) in das Element kleiner als dieser ist, schlägt das Element in der [Existenzüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen minimalen Wert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht-leerer Wert kleiner als das durch das `min`-Attribut erlaubte Minimum ist, verhindert die Existenzüberprüfung die Formularübermittlung. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` kleiner als der von `min` sein, was darauf hinweist, dass der Bereich umlaufen kann; dies ermöglicht Ihnen beispielsweise, einen Zeitbereich von 22 Uhr bis 4 Uhr anzugeben.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert es die minimale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` spezifizierten Wert ist. Wenn kein `minlength` angegeben wird, oder ein ungültiger Wert angegeben wird, hat die Eingabe keine Mindestlänge.

    Die Eingabe wird die [Existenzüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16 Codeeinheiten ist, wodurch die Formularübermittlung verhindert wird. Die Existenzüberprüfung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)

  - : Wenn das Boolean-Attribut `multiple` gesetzt ist, bedeutet dies, dass der Benutzer durch Kommas getrennte E-Mail-Adressen im Email-Widget eingeben oder mehr als eine Datei mit der `file`-Eingabe auswählen kann. Siehe die {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetypen.

- `name`

  - : Ein String, der einen Namen für das Eingabesteuerelement angibt. Dieser Name wird zusammen mit dem Wert des Steuerfelds übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als ein erforderliches Attribut (obwohl es das nicht ist). Wenn eine Eingabe keinen `name`-Wert hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, nicht markierte Optionsfelder, nicht markierte Checkboxen und Zurücksetzen-Tasten werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn der Name einer `<input>` Element vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "user agent")}} auf die Zeichencodierung gesetzt, die zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erzeugt ein einzigartiges Verhalten für Optionsfelder.

    Nur ein Optionsfeld in einer gleichbenannten Gruppe von Optionsfeldern kann gleichzeitig markiert sein. Das Auswählen eines beliebigen Optionsfelds in dieser Gruppe deaktiviert automatisch jedes aktuell markierte Optionsfeld in derselben Gruppe. Der Wert dieses einen markierten Optionsfelds wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Wenn Sie in eine Serie von gleichbenannten Gruppen von Optionsfeldern tabulieren, wenn eines markiert ist, erhält dieses den Fokus. Wenn sie nicht zusammen in der Quellreihenfolge gruppiert sind, wenn eines der Gruppe markiert ist, beginnt das Tabben in die Gruppe, sobald das erste in der Gruppe erreicht wird, und überspringt alle, die nicht markiert sind. Mit anderen Worten, wenn eines markiert ist, überspringt das Tabben die nicht markierten Optionsfelder der Gruppe. Wenn keines markiert ist, erhält die Optionsfeldgruppe den Fokus, wenn das erste Feld in der gleich genannten Gruppe erreicht wird.

    Sobald eines der Optionsfelder in einer Gruppe den Fokus hat, wird durch die Verwendung der Pfeiltasten durch alle_OPTIONS_ felder derselben Namen navigiert, selbst wenn die Optionen nicht in der Quellreihenfolge zusammengefasst.

    Wenn einem Eingabeelement ein `name` zugewiesen wird, wird dieser Name zu einer Eigenschaft des Eigentümer-Formularelements [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) Eigenschaft. Wenn Sie eine Eingabe, deren `name` auf `guest` gesetzt ist, und eine weitere, deren `name` auf `hat-size` gesetzt ist, haben, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein, und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer integrierten Eigenschaft des Formulars entspricht, da Sie damit die vordefinierte Eigenschaft oder Methode mit diesem Bezug auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password` ist das `pattern`-Attribut ein regulärer Ausdruck, dem der `value` des Eingabefelds entsprechen muss, damit der Wert die [Existenzüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Er muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er durch den {{jsxref("RegExp")}} Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Keine Schrägstriche sollten um den Mustertext angegeben werden. Beim Kompilieren des regulären Ausdrucks:

    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, so dass die Übereinstimmung gegen die _gesamte_ Eingabe des Wertes erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'` Flagge angegeben, so dass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden, aber nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Ist das `pattern`-Attribut gültig und ein nicht-leerer Wert stimmt nicht mit dem Muster überein, verhindert die Existenzüberprüfung die Formularübermittlung. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden durch Kommas getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erläuternden Text in der Nähe angeben. Sie können auch ein [`title`](#title) Attribut einschließen, um zu erklären, welche Anforderungen an das Muster erfordern sind; die meisten Browser werden diesen Titel als Tooltip angezeigt. Die sichtbare Erklärung ist zur Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password`, und `number`, das `placeholder`-Attribut bietet dem Benutzer einen kurzen Hinweis darauf, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf den erwarteten Datentyp gibt, anstatt einer Erklärung oder einer Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Wenn beispielsweise ein Feld erwartet, den Vornamen des Benutzers zu erfassen, und sein Label "Vorname" lautet, könnte ein geeigneter Platzhalter "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Wege, Ihr Formular zu erklären und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Etiketten](#labels) für weitere Informationen.

- `popovertarget`

  - : Wandelt ein `<input type="button">` Element in einen Popover-Steuerknopf um; nimmt die ID des kontrollierten Popover-Elements als Wert. Siehe die [Popover-API](/de/docs/Web/API/Popover_API) Landing-Seite für mehr Details. Das Herstellen einer Beziehung zwischen einem Popover und seinem Auslöser-Button mithilfe des `popovertarget`-Attributs hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastaturnavigationsfolge, wenn es angezeigt wird. Dies macht das Popover zugänglicher für Tastatur- und unterstützende Technologie-(AT)-Benutzer (siehe auch [Popover-Barrierefreiheitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf einem Popover-Element ausgeführt werden soll, das von einem Kontroll-`<input type="button">` gesteuert wird. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein angezeigtes Popover ausblenden. Wenn Sie versuchen, ein bereits verborgenes Popover auszublenden, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button wird ein verborgenes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen angezeigtem und verborgenem Zustand umschalten. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerknopf ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten darf. Das `readonly`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `password` Eingabetypen unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) für weitere Informationen.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das zugehörige Formular abgesendet werden kann. Das `required`-Attribut wird von `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, und `file` Eingaben unterstützt.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für weitere Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url`, und `text`, das `size` Attribut gibt an, wie viel von der Eingabe angezeigt wird. Im Grunde erzielt es dasselbe Ergebnis wie das Setzen der CSS [`width`](/de/docs/Web/CSS/width) Eigenschaft, jedoch mit einigen Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em` Einheiten) mit einem Standardwert von `20`, und für andere ist es Pixel (oder `px` Einheiten). CSS `width` hat Vorrang vor dem `size` Attribut.

- `src`

  - : Nur für den `image` Eingabetyp gültig, ist das `src` ein String, der die URL der anzuzeigenden Bilddatei angibt, um die grafische Sende-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingangstyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss.

    Wenn nicht explizit eingeschlossen:

    - Standardmäßig ist `step` auf 1 für `number` und `range`.
    - Jeder Datums-/Uhrzeit-Eingabetyp hat einen Standard-`step`-Wert, der für den Typ angemessen ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step), und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl - Ganzzahl oder Gleitkommazahl - oder der spezielle Wert `any` sein, was bedeutet, dass kein Schritt impliziert ist und jeder Wert erlaubt ist (vorbehaltlich anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind für `number`, datums-/uhrzeitspezifische Eingabetypen und `range`-Eingabetypen gültige Werte gleich dem Schrittgrund - dem [`min`](#min) Wert und Inkrementen des Schrittwertes, bis zum [`max`](#max) Wert, falls angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Zahl größer oder gleich `10` gültig. Falls weggelassen, `<input type="number">`, jede ganze Zahl ist gültig, aber Gleitkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig auf `1` gesetzt ist. Damit `4.2` gültig ist, hätte `step` auf `any`, 0.1, 0.2, oder ein anderer Wert gesetzt werden müssen oder der `min`-Wert wäre eine Zahl gewesen, die auf `.2` endet, zum Beispiel `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, wird der Wert in der Existenzüberprüfung als ungültig angesehen und entspricht der `:invalid` Pseudoklasse.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- `tabindex`

  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das anzeigt, ob das Element den Eingabefokus erhalten kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen außer für Eingaben vom Typ hidden fokussierbar sind, sollte dieses Attribut nicht auf Formularsteuerungen angewendet werden, da das Erfordernis der Verwaltung der Fokusreihenfolge für alle Elemente im Dokument mit dem Risiko der Schädigung von Benutzerfreundlichkeit und Zugänglichkeit, wenn es unkorrekt durchgeführt wird, besteht.

- `title`

  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, das einen Text enthält, der beratende Informationen zu dem Element, dem es angehört, darstellt. Solche Informationen können typischerweise, aber nicht notwendigerweise dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks der Formularsteuerung verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut des Formularsteuerelements gesetzt ist. Siehe [Etiketten](#labels) unten.

- `type`

  - : Ein String, der angibt, welche Art von Steuerelement gerendert werden soll. Zum Beispiel wird ein Wert von `checkbox` verwendet, um eine Checkbox zu erstellen. Wird weggelassen (oder ein unbekannter Wert angegeben), so wird der Eingabetyp `text` verwendet, und es wird ein einfaches Texteingabefeld erstellt.

    Zugelassene Werte sind oben in den [Eingabetypen](#input_types) aufgelistet.

- `value`

  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Anfangswert, und von da an kann er jederzeit mithilfe von JavaScript, um die jeweilige [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt `value`-Eigenschaft zuzugreifen, geändert oder abgerufen werden. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio`, und `hidden` betrachtet werden.

- `width`

  - : Nur für den `image` Eingabetyp gültig, ist die `width` die Breite der zu darstellenden Bilddatei, um die grafische Sende-Schaltfläche zu repräsentieren. Siehe den {{HTMLElement("input/image", "image")}} Eingangstyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie sie vermeiden, es sei denn, es lässt sich nicht vermeiden.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse gesendet werden sollen, um die Live-Ergebnisse während der Benutzereingabe zu aktualisieren.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion angibt, die ausgeführt werden soll, wenn der Benutzer die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes drückt; dies wird verwendet, um eine geeignete Bezeichnung für die Taste auf einer virtuellen Tastatur zu ermitteln. <strong>Da dieses Attribut abgelehnt wurde, verwenden Sie das <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
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
        Die maximale Anzahl von Elementen, die im Drop-down-Menü vorheriger Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob der Benutzer nur ein Verzeichnis (oder Verzeichnisse, falls <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) auswählen kann
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (und wird daher von Safari, Opera, Chrome usw. unterstützt), das, wenn vorhanden, den {{Glossary("user_agent", "user agent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse an das relevante [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das das Suchfeld repräsentiert. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht spezifiziert ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (z.B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes).

    Das `search` Ereignis unterliegt einer Frequenzbegrenzung, sodass es nicht häufiger als in einem implementationsspezifischen Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich dem -moz-orient nicht-standardisierten CSS-Stil, der die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente betrifft, definiert das `orient` Attribut die Ausrichtung des Bereichsschiebers. Zu den Werten gehören `horizontal`, wodurch der Bereich horizontal gerendert wird, und `vertical`, bei der der Bereich vertikal gerendert wird. Siehe [Erstellen von vertikalen Formular-Steuerelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formular-Steuerelemente.

- `results` {{non-standard_inline}}

  - : Das `results` Attribut – nur von Safari unterstützt – ist ein numerischer Wert, der es Ihnen erlaubt, die maximale Anzahl von Einträgen zu überschreiben, die im vom `<input>` Element nativ bereitgestellten Dropdown-Menü vorheriger Suchanfragen angezeigt werden.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Falls nicht angegeben oder ein ungültiger Wert angegeben wird, verwendet der Browser die standardmäßig maximale Anzahl von Einträgen.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean `webkitdirectory`-Attribut, wenn vorhanden, gibt an, dass nur Verzeichnisse für die Auswahl des Benutzers im Datei-Picker-Interface zur Verfügung stehen sollten. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und späteren Versionen verwendbar. Trotz der vergleichsweise breiten Unterstützung sollte es dennoch nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle bereitgestellt, die `<input>` Elemente im DOM darstellt. Ebenfalls verfügbar sind die von den übergeordneten Schnittstellen spezifizierten Methoden, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis auf dem Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis auf dem Element aus und (wenn das Ereignis nicht abgebrochen wird) meldet das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>` Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder eine Kalenderdatumseingabe) bewirkt diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht zur Anzeige, wenn der Eingabewert des Elements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabelement auf eine angegebene Zeichenfolge. Ein `selectMode` Parameter ist verfügbar, um zu steuern, wie der bestehende Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines Text-Eingabeelements aus. Bewirkt nichts für Eingaben, die nicht als Text-Eingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Auswahlsteuerelement für das Eingabeelement im Browser an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, jedoch durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Funktionen, die auf Nicht-Formular-Elemente nicht anwendbar sind. Es gibt CSS-Selektoren, die gezielt Formularelemente basierend auf ihren UI-Merkmalen ansprechen können, bekannt als UI-Pseudoklassen. Das Input-Element kann auch nach Typ mit Attributselektoren gezielt angesprochen werden. Es gibt einige Eigenschaften, die ebenfalls besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudoklassen relevant für das
    <code>&#x3C;input></code>-Element:
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
        Jedes derzeit aktivierte Element, das aktiviert (ausgewählt, angeklickt, eingegeben usw.) oder den Fokus erhalten kann und zudem einen deaktivierten Zustand hat, in dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es andernfalls aktiviert (ausgewählt, angeklickt, eingegeben usw.) oder den Fokus erhalten könnte, wenn es nicht deaktiviert wäre.
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
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elementen mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut vorhanden, das bis jetzt keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die in einer Gruppe von verwandten Elementen standardmäßig sind.
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Input-Typen, die beim Laden oder Rendern der Seite ausgewählt waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Input-Typen, die
        derzeit ausgewählt sind (und dem ({{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente,
        deren indeterminate-Eigenschaft von JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle
        Radiobuttons mit demselben Name-Wert im Formular nicht ausgewählt sind, und
        {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die eine Constraintvalidierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, die einer Constraintvalidierung unterzogen wurden und derzeit
        ungültig sind. Entspricht einem Formularsteuerungs-Element, dessen Wert nicht den
        durch seine Attribute festgelegten Einschränkungen entspricht, wie z.B.
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht leeres Input, dessen aktueller Wert innerhalb der Bereichsgrenzen liegt,
        die durch die Attribute <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> sowie das <a href="#step"><code>step</code></a> festgelegt sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht leeres Input, dessen aktueller Wert NICHT innerhalb der Bereichsgrenzen liegt,
        die durch die Attribute <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a> festgelegt sind oder
        nicht der <a href="#step"><code>step</code></a>-Einschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Entspricht nur Elementen, die erforderlich sein können.
        Das Attribut auf einem nicht erforderlichen Element wird keine Übereinstimmung hervorrufen.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}}-Element, das NICHT das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Entspricht nicht Elementen, die nicht erforderlich gemacht werden können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlassen des Elements aktiviert. Entspricht
        einem ungültigen Input, jedoch nur nach der Benutzerinteraktion, z.B. durch Fokussieren
        auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular mit dem invaliden Steuerelement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die ein Auswahlfenster anzeigen, aus dem der Benutzer einen Wert auswählen kann (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) – jedoch nur, wenn sich das Element im geöffneten Zustand befindet, also wenn das Auswahlfenster angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen-Beispiel

Wir können ein Checkbox-Label basierend darauf stylen, ob die Checkbox angekreuzt ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einem angekreuzten Input kommt. Wir haben keine Styles angewendet, wenn das `input` nicht angekreuzt ist.

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

Es ist möglich, verschiedene Typen von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren selektieren Elemente basierend auf entweder nur dem Vorhandensein eines Attributs oder dem Wert eines bestimmten Attributs.

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

Standardmäßig erscheint der Placeholder-Text in einem durchscheinenden oder hellgrauen Farbton. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder` Text](#placeholder) des Inputs. Es kann mit einem limitierten Satz von CSS-Eigenschaften gestyled werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement anwendbar sind, kann in einer Regel mit `::placeholder` im Selektor verwendet werden.

### appearance

Die {{cssxref("appearance")}} Eigenschaft ermöglicht das Darstellen von (fast) jedem Element im plattformeigenen Stil basierend auf dem Betriebssystemthema sowie das Entfernen jeglicher plattformeigenen Gestaltung mit dem Wert `none`.

Sie könnten ein `<div>` wie einen Radiobutton mit `div {appearance: radio;}` oder ein Radio wie eine Checkbox mit `[type="radio"] {appearance: checkbox;}` aussehen lassen, aber tun Sie das nicht.

Das Festlegen von `appearance: none` entfernt die plattformeigenen Rahmen, aber nicht die Funktionalität.

### caret-color

Eine Eigenschaft, die speziell auf textorientierte Eingabeelemente abzielt, ist die CSS-Eigenschaft {{cssxref("caret-color")}}, die Ihnen die Möglichkeit gibt, die Farbe des Texteingabe-Cursors zu bestimmen:

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

Die {{cssxref("field-sizing")}} Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie erhalten standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und Formularelementen zu erlauben, sich in der Größe anzupassen, um ihren Inhalt zu fassen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetypen [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}} Elementen.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es das ist, können die Position und die Größe des Elements innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML siehe:

- [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels sind erforderlich, um erklärenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element bietet erläuternde Informationen über ein Formularfeld, die _immer_ angemessen sind (abgesehen von jeglichen Layoutbedenken, die Sie haben könnten). Es ist immer eine gute Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugewiesene Labels

Die semantische Paarung von `<input>` und `<label>`-Elementen ist nützlich für Hilfstechnologien wie Bildschirmleser. Indem sie mit dem [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut des `<label>` miteinander verbunden werden, binden Sie das Label an das Input auf eine Art, die es Bildschirmlesern ermöglicht, Eingaben den Nutzern präziser zu beschreiben.

Es reicht nicht aus, einfachen Text neben dem `<input>`-Element zu haben. Vielmehr erfordert die Benutzerfreundlichkeit und Barrierefreiheit die Einbeziehung eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist unzugänglich: Es existiert keine Beziehung zwischen der Aufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere "Treffer"-Fläche für Maus- und Touchscreen-Benutzer zum Klicken oder Berühren. Indem ein `<label>` mit einem `<input>` gepaart wird, fokussiert das Klicken auf eines von beiden das `<input>`. Wenn Sie einfachen Text verwenden, um Ihre Eingabe "zu beschriften", wird dies nicht passieren. Das Einbeziehen der Aufforderung als Aktivierungsbereich für die Eingabe ist hilfreich für Menschen mit motorischen Kontrollbedingungen.

Als Webentwickler ist es wichtig, dass wir niemals annehmen, dass Menschen alles wissen, was wir wissen. Die Vielfalt der Menschen, die das Web - und damit Ihre Website - nutzen, garantiert praktisch, dass einige Besucher Ihrer Website einige Variation in ihren Denkprozessen und/oder Umständen haben werden, die sie dazu bringt, Ihre Formulare sehr unterschiedlich von Ihnen zu interpretieren, ohne klare und korrekt präsentierte Labels.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text festzulegen, der innerhalb der inhaltsbereichsichen `<input>`-Elemente selbst erscheint, wenn sie leer sind. Der Platzhalter sollte niemals benötigt werden, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil er keins ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie der eingegebene Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Nicht nur, dass der Platzhalter für Bildschirmleser nicht zugänglich ist, sondern auch, sobald der Benutzer irgendeinen Text in das Formularsteuerelement eingibt oder wenn das Formularsteuerelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischer Seitenübersetzungsfunktionalität können Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element beschriften müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Die Client-seitige Validierung ist nützlich, garantiert jedoch nicht, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, überprüfen Sie sie _immer_ auch auf der Serverseite und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Nutzung von CSS, um Inputs basierend auf den {{cssxref(":valid")}}- oder {{cssxref(":invalid")}}-UI-Zuständen basierend auf dem aktuellen Zustand jedes Inputs zu stylen, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser bei (versuchter) Formularübermittlung eine client-seitige Validierung an. Bei der Formularübermittlung, wenn es ein Formularsteuerungselement gibt, das die Eingabebereichsvalidierung nicht besteht, zeigen unterstützte Browser eine Fehlermeldung am ersten ungültigen Formularsteuerungselement an; sie zeigen entweder eine Standard-Nachricht basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Nachricht an.

Einige Eingabetypen und andere Attribute setzen Grenzen für welche Werte für eine gegebene Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler könnten auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn größer als 10, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Zahl ist (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren mögliche Werte periodisch sind (das heißt, beim höchsten möglichen Wert, wickeln sie sich zurück zum Anfang anstatt zu enden), ist es möglich, dass die Werte der Eigenschaften [`max`](#max) und [`min`](#min) umgekehrt sind, was darauf hinweist, dass der Bereich der zulässigen Werte bei `min` beginnt, sich zurückwickelt zum niedrigsten möglichen Wert und dann weitergeht bis `max` erreicht wird. Dies ist besonders nützlich für Daten und Zeiten, z.B. wenn Sie das Zeitfenster von 20:00 Uhr bis 8:00 Uhr erlauben wollen:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und ihre Werte können zu einem bestimmten Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Validitätsobjektfehler hängen von den Attributen des <code>&lt;input&gt;</code>
    und ihren Werten ab:
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
        Tritt auf, wenn der Wert größer als der maximal durch das <code>max</code>-Attribut definierte Wert ist.
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
        Tritt auf, wenn der Wert kleiner als der minimal durch das <code>min</code>-Attribut definierte Wert ist.
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
        Tritt auf, wenn ein pattern-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> dies nicht erfüllt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> ist oder Radio oder Checkbox nicht angekreuzt ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schritt-Inkrement. Der Standard-Inkrement ist <code>1</code>, sodass nur ganze Zahlen bei <code>type="number"</code> gültig sind, sofern der Schritt nicht angegeben ist. <code>step="any"</code> wird diesen Fehler nie auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, z.B. eine E-Mail enthält nicht ein <code>@</code> oder eine URL enthält kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularsteuerelement nicht das `required`-Attribut hat, ist kein Wert oder eine leere Zeichenfolge nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, führt eine leere Zeichenfolge nicht zu einem Fehler.

Wir können Einschränkungen dafür setzen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer nach einem Fehler beim Absenden des Formulars benachrichtigen.

Zusätzlich zu den oben in der Tabelle beschriebenen Fehlern enthält das `validityState`-Interface die boolean-Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Für jede dieser Booleans ist ein Wert von `true` eine Bestätigung, dass der angegebene Grund, warum die Validierung möglicherweise fehlgeschlagen ist, zutrifft, mit Ausnahme der Eigenschaft `valid`, die `true` ist, wenn der Wert des Elements alle Einschränkungen einhält.

Wenn ein Fehler auftritt, warnen unterstützte Browser sowohl den Benutzer als auch verhindern das Senden des Formulars. Ein Wort der Warnung: Wenn eine benutzerdefinierte Fehlernachricht auf einen wahrheitsgemäßen Wert (alles andere als die leere Zeichenfolge oder `null`) gesetzt wird, wird das Formular daran gehindert, gesendet zu werden. Wenn es keine benutzerdefinierte Fehlermeldung gibt und keine anderen Eigenschaften true zurückgeben, wird `valid` true sein und das Formular kann gesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Gültigkeitsnachricht auf die leere Zeichenfolge setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt wird, wird es nicht senden, selbst wenn alle Werte gültig sind, bis die Meldung `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlernachricht anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die für `<input>` (und verwandte) Elemente verfügbar ist. Betrachten Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen führen dazu, dass dies eine Standardfehlermeldung erzeugt, wenn Sie versuchen, das Formular ohne gültig ausgefüllte oder nicht mit dem `pattern` übereinstimmende Werte abzusenden.

Wenn Sie stattdessen benutzerdefinierte Fehlermeldungen anzeigen möchten, können Sie JavaScript wie folgt verwenden:

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

- Wir prüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich dessen Wert ändert, indem wir die `checkValidity()`-Methode über den `input`-Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst und die `invalid`-Ereignishandlerfunktion wird ausgeführt. Innerhalb dieser Funktion ermitteln wir anhand eines `if ()`-Blocks, ob der Wert ungültig ist, weil er leer ist oder nicht dem Muster entspricht, und setzen eine benutzerdefinierte Fehlernachricht für die Gültigkeit.
- Infolgedessen wird, wenn der Eingabewert ungültig ist, wenn der Senden-Button gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Ist er gültig, wird er wie erwartet gesendet. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit storniert werden, indem `setCustomValidity()` mit einem leeren Zeichenfolgenwert aufgerufen wird. Deshalb machen wir dies jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und zuvor eine benutzerdefinierte Gültigkeit festgelegt wurde, registriert sich die Eingabe als ungültig, selbst wenn sie derzeit einen gültigen Wert enthält, sobald sie gesendet wird.

> [!NOTE]
> Immer sowohl clientseitige als auch serverseitige Eingabeeinschränkungen validieren. Constraint-Validierung entfernt nicht die Notwendigkeit für die Validierung auf der _Serverseite_. Ungültige Werte können immer noch von älteren Browsern oder von böswilligen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte viele Versionen lang ein proprietäres Fehlerattribut — `x-moz-errormessage` —, welches Ihnen erlaubte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise zu setzen. Dies wurde seit Version 66 entfernt (siehe [Firefox bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die zugelassenen Eingaben für bestimmte `<input>`-Typen hängen von der lokalen Region ab. In einigen Regionen ist 1.000,00 eine gültige Nummer, während in anderen Regionen die gültige Eingabe 1.000,00 ist.

Firefoxe verwendet die folgenden Heuristiken, um die lokale Region zu bestimmen, um die Eingabe des Nutzers zu validieren (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut auf dem Element oder einem seiner Eltern spezifiziert wird.
- Versuchen Sie die Sprache, die durch einen `Content-Language`-HTTP-Header spezifiziert wird. Oder,
- Wenn keine angegeben, verwenden Sie die lokale Sprache des Browsers.

## Barrierefreiheit

### Labels

Beim Einfügen von Eingaben ist es eine Anforderung bei der Barrierefreiheit, nebenstehend Labels hinzuzufügen. Dies ist notwendig, damit Benutzer, die assistive Technologien verwenden, erkennen können, wofür die Eingabe gedacht ist. Außerdem verleiht das Klicken oder Berühren eines Labels dem zugehörigen Formularsteuerungselement den Fokus. Dies verbessert die Zugänglichkeit und Benutzerfreundlichkeit für sehende Benutzer und erhöht den Bereich, den ein Benutzer klicken oder berühren kann, um das Formularsteuerungselement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radiobuttons und Checkboxen, die winzig sind. Weitere Informationen zu Labels im Allgemeinen finden Sie unter [Labels](#labels).

Das folgende ist ein Beispiel dafür, wie Sie das `<label>`-Element in dem oben genannten Stil mit einem `<input>`-Element verknüpfen. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert mit der `id` des Inputs übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten eine ausreichend große Fläche bieten, damit es leicht ist, sie zu aktivieren. Dies hilft einer Vielzahl von Personen, einschließlich Menschen mit motorischen Kontrollproblemen und Personen, die ungenaue Eingabemethoden wie einen Stylus oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixel] ist empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, gelistet, absendbar, zurücksetzbar, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a>. Wenn <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann beschriftbares Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "Void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a> akzeptiert.
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
                ohne <code>list</code>-Attribut:
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
                ohne <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>
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
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a ></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a> when used
            with <code>aria-pressed</code>,
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
            oder <code>text</code> mit <code>list</code>-Attribut: keine<|disc_score|>1
<li><code>role</code> erlaubt</li> </ul> </td> </tr> <tr> <th scope="row">DOM Interface</th> <td>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</td> </tr> </tbody> </table>

## Standards

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Formular-Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Native Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Versenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formdatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Anleitung zur Erstellung benutzerdefinierter Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in Legacy-Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Erstellen vertikaler Formulareingaben](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
