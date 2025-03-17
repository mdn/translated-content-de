---
title: "<input>: Das HTML-Eingabeelement"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{HTMLSidebar}}

Das **`<input>`**-Element in [HTML](/de/docs/Web/HTML) wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren. Es stehen eine Vielzahl von Arten von Eingabedaten und Steuerelementen zur Verfügung, abhängig vom Gerät und dem {{Glossary("user_agent", "User-Agent")}}. Das `<input>`-Element ist eines der leistungsstärksten und komplexesten in ganz HTML, aufgrund der zahlreichen Kombinationen von Eingabetypen und Attributen.

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

## `<input>` Typen

Wie ein `<input>` funktioniert, variiert erheblich je nach Wert des [`type`](#type)-Attributs. Daher werden die verschiedenen Typen auf eigenen Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird standardmäßig der Typ `text` angenommen.

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
      <td>Ein Kontrollkästchen, das es ermöglicht, einzelne Werte auszuwählen oder abzuwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerelement zur Auswahl einer Farbe; öffnet einen Farbwähler, wenn in unterstützten Browsern aktiviert.
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
        Öffnet einen Datumswähler oder numerische Räder für Jahr, Monat, Tag, wenn in unterstützten Browsern aktiviert.
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
        Ein Steuerelement zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumswähler oder numerische Räder für Datums- und Zeitkomponenten, wenn in unterstützten Browsern aktiviert.
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
        <code>text</code>-Eingabe, verfügt jedoch über Validierungsparameter und eine relevante
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
        Ein Steuerelement, das dem Benutzer das Auswählen einer Datei ermöglicht.
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
        Ein Steuerelement zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt die Standard-
        Validierung hinzu. Zeigt ein numerisches Tastenfeld auf einigen Geräten
        mit dynamischen Tastaturen.
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
        Ein Optionsknopf, der es ermöglicht, einen einzigen Wert aus mehreren
        Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Ein Steuerelement zur Eingabe einer Zahl, deren genauer Wert nicht wichtig
        ist. Wird als Bereichs-Widget angezeigt, das standardmäßig auf den mittleren
        Wert eingestellt ist. Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>
        verwendet, um den Bereich akzeptabler Werte zu definieren.
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
        Ein Button, der die Inhalte des Formulars auf Standardwerte zurücksetzt. Nicht empfohlen.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchzeichenfolgen. Zeilenumbrüche werden
        automatisch aus dem Eingabewert entfernt. Kann eine Löschtaste in
        unterstützenden Browsern enthalten, die zum Leeren des Feldes verwendet werden kann. Zeigt ein
        Suchsymbol statt der Eingabetaste auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Steuerelement zur Eingabe einer Telefonnummer. Zeigt ein Telefonsymbol an
        in einigen Geräten mit dynamischen Tastaturen.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code>-Eingabe, verfügt aber
        über Validierungsparameter und eine relevante Tastatur in unterstützten Browsern
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
        Ein Steuerelement zur Eingabe eines Datums bestehend aus einer Kalenderwoche und einer Jahreszahl, ohne Zeitzone.
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
        Ein Steuerelement zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Zehntelsekunde), basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist aufgrund seiner Attribute so leistungsfähig; das [`type`](#type)-Attribut, das oben mit Beispielen beschrieben wird, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, haben sie technisch dieselbe Menge von Attributen gemeinsam. In der Realität haben jedoch die meisten Attribute nur auf eine bestimmte Teilmenge von Eingabetypen Einfluss. Darüber hinaus hängt die Art und Weise, wie einige Attribute eine Eingabe beeinflussen, vom Eingabetyp ab, der verschiedene Eingabetypen auf unterschiedliche Weise beeinflusst.

Dieser Abschnitt enthält eine Tabelle, in der alle Attribute mit einer kurzen Beschreibung aufgeführt sind. Diese Tabelle wird durch eine Liste ergänzt, die jedes Attribut detaillierter beschreibt und angibt, mit welchen Eingabetypen sie in Verbindung stehen. Attribute, die für die meisten oder alle Eingabetypen gemeinsam sind, werden weiter unten ausführlicher definiert. Attribute, die für bestimmte Eingabetypen einzigartig sind, oder Attribute, die zwar für alle Eingabetypen gelten, aber bei bestimmten Eingabetypen besondere Verhaltensweisen aufweisen, werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element beinhalten die [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                       | Beschreibung                                                                              |
| --------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                        | Hinweis auf den erwarteten Dateityp in Datei-Upload-Steuerelementen                       |
| [`alt`](#alt)                                 | `image`                                                                       | Alt-Attribut für den Bildtyp, erforderlich für die Barrierefreiheit                       |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email`, and `password`                                     | Steuert die automatische Großschreibung im eingegebenen Text.                             |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio`, und Schaltflächen                             | Hinweis für die Autoausfüllen-Funktion des Formulars                                      |
| [`capture`](#capture)                         | `file`                                                                        | Methode zur Erfassung von Medien in Datei-Upload-Steuerelementen                          |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                           | Ob der Befehl oder die Steuerung ausgewählt ist                                           |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                             | Name des Formularfeldes, das zur Übermittlung der Richtung des Elements verwendet wird    |
| [`disabled`](#disabled)                       | alle                                                                          | Ob das Formularelement deaktiviert ist                                                    |
| [`form`](#form)                               | alle                                                                          | Verknüpft die Steuerung mit einem Formularelement                                         |
| [`formaction`](#formaction)                   | `image`, `submit`                                                             | URL für die Formularübermittlung                                                          |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                             | Kodierungstyp für Formulardatensatz zur Verwendung bei der Formularübermittlung           |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                             | HTTP-Methode für die Formularübermittlung                                                 |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                             | Formularvalidierung für die Formularübermittlung passieren                                |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                             | Browsingkontext für die Formularübermittlung                                              |
| [`height`](#height)                           | `image`                                                                       | Entspricht dem Höhenattribut für {{htmlelement('img')}}; vertikale Abmessung              |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio`, und Schaltflächen       | Wert des ID-Attributs der {{htmlelement('datalist')}} für Autovervollständigungsoptionen  |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Maximaler Wert                                                                            |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                           | Maximale Länge (Anzahl der Zeichen) des `value`                                           |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Minimaler Wert                                                                            |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                           | Minimale Länge (Anzahl der Zeichen) des `value`                                           |
| [`multiple`](#multiple)                       | `email`, `file`                                                               | Boolean. Ob mehrere Werte zulässig sind                                                   |
| [`name`](#name)                               | alle                                                                          | Name der Formsteuerung. Wird mit dem Formular als Teil eines Name/Wert-Paares übermittelt |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                           | Muster, das der `value` entsprechen muss, um gültig zu sein                               |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                 | Text, der im Formularelement erscheint, wenn es keinen eingestellten Wert hat             |
| [`popovertarget`](#popovertarget)             | `button`                                                                      | Bestimmt ein `<input type="button">` als Steuerung für ein Popover-Element                |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                      | Gibt die Aktion an, die eine Popover-Steuerung ausführen soll                             |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio`, und Schaltflächen | Boolean. Der Wert ist nicht bearbeitbar                                                   |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color`, und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss zum Absenden des Formulars ausgewählt werden |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                           | Größe der Steuerung                                                                       |
| [`src`](#src)                                 | `image`                                                                       | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource       |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`          | Inkrementelle Werte, die gültig sind                                                      |
| [`type`](#type)                               | alle                                                                          | Typ der Formsteuerung                                                                     |
| [`value`](#value)                             | alle außer `image`                                                            | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht dies dem Anfangswert           |
| [`width`](#width)                             | `image`                                                                       | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                |

Einige zusätzliche nicht standardmäßige Attribute sind nach den Beschreibungen der Standardattribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Gilt nur für den Eingabetyp `file`, das `accept`-Attribut definiert, welche Dateitypen in einer `file`-Upload-Steuerung auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alt`

  - : Gültig nur für den Bild-Button, bietet das `alt`-Attribut alternativen Text für das Bild, indem der Wert des Attributs angezeigt wird, wenn das Bild [`src`](#src) fehlt oder anders nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`

  - : Steuert ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Weitere Informationen finden Sie auf der globalen Attributseite [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette an, die beschreibt, welche Art von Autovervollständigungsfunktionalität das Eingabefeld bieten soll. Eine typische Implementierung von Autovervollständigung erinnert sich an zuvor eingegebene Werte im selben Eingabefeld, aber komplexere Arten von Autovervollständigung können existieren. Beispielsweise könnte ein Browser mit der Kontaktliste eines Geräts interagieren, um `email`-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Wirkung bei Eingabetypen, die keine numerischen oder textbasierten Daten zurückgeben, und ist gültig für alle Eingabetypen außer `checkbox`, `radio`, `file` oder jede der Schaltflächenarten.

    Weitere Informationen finden Sie im [`autocomplete`-Attribut](/de/docs/Web/HTML/Attributes/autocomplete), einschließlich Informationen zur Passwortsicherheit und wie sich `autocomplete` für `hidden` leicht von anderen Eingabetypen unterscheidet.

- `autofocus`

  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass die Eingabe automatisch den Fokus haben soll, nachdem die Seite geladen wurde (oder nachdem das {{HTMLElement("dialog")}}, das das Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element vorhanden ist, erhält das erste Element mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren auf ein Formularelement kann sehbehinderte Menschen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, "teleportieren" Bildschirmleser ihre Benutzer ohne vorherige Warnung zum Formularelement.

    Berücksichtigen Sie den Aspekt der Zugänglichkeit sorgfältig, wenn Sie das `autofocus`-Attribut anwenden. Das automatische Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass dynamische Tastaturen auf einigen Touch-Geräten angezeigt werden. Während ein Bildschirmleser das Label des fokussierten Formularelements ankündigt, wird der Bildschirmleser nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext, der durch den vorhergehenden Inhalt geschaffen wird, verpassen.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den Eingabetyp `file`, definiert das `capture`-Attribut, welches Medium—Mikrofon, Video oder Kamera—verwendet werden soll, um eine neue Datei zur Übertragung mit `file`-Upload-Steuerung in unterstützten Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`

  - : Gültig für sowohl `radio` als auch `checkbox` Typen, ist `checked` ein Boolean-Attribut. Wenn es beim `radio`-Typ vorhanden ist, zeigt es an, dass die Radiobox derzeit die ausgewählte in der Gruppe gleichnamiger Radioboxen ist. Wenn es beim `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig (beim Laden der Seite) aktiviert ist. Es zeigt _nicht_ an, ob das Kontrollkästchen derzeit aktiviert ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen ist der Wert eines Kontrollkästchens und Radios nur dann in den übermittelten Daten enthalten, wenn sie aktuell `checked` sind. Wenn sie das sind, werden der Name und die Wert(e) der aktivierten Steuerelemente übermittelt.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, werden die Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es in den Formulardaten überhaupt nicht aufgelistet. Der Standard-`value` für Kontrollkästchen und Radios ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabearten ermöglicht das `dirname`-Attribut die Übermittlung der Richtung des Elements. Wenn es enthalten ist, übermittelt die Eingabesteuerung zusammen mit zwei Name/Wert-Paaren: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das oben angegebene Formular übermittelt wird, veranlasst die Eingabe, dass sowohl das `name` / `value` Paar `fruit=cherry` als auch das `dirname` / Richtungs-Paar `fruit-dir=ltr` gesendet werden. Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer nicht in der Lage sein sollte, mit der Eingabe zu interagieren. Deaktivierte Eingaben werden typischerweise mit einer gedämpfteren Farbe oder mit einer anderen Form von Indikator darstellt, dass das Feld nicht verfügbar ist.

    Speziell erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht zusammen mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht durch die Spezifikationen gefordert, wird Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` beim Seitenladen [beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- `form`

  - : Ein String, der das {{HTMLElement("form")}}-Element spezifiziert, mit dem die Eingabe verknüpft ist (d.h. sein **Formularbesitzer**). Der Wert dieses Strings, falls vorhanden, muss der [`id`](#id) eines `<form>`-Elements im selben Dokument entsprechen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element dem am nächsten gelegenen enthaltenden Formular zugeordnet, falls vorhanden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe irgendwo im Dokument zu platzieren, sie aber als Teil eines Formulars mit einzubeziehen, das sich an einer anderen Stelle im Dokument befindet.

    > [!NOTE]
    > Eine Eingabe kann nur einem Formular zugeordnet werden.

- `formaction`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formenctype`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formmethod`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formnovalidate`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formtarget`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `height`
  - : Gültig nur für den Bild-Button, die `height` ist die Höhe der Bilddatei, die angezeigt werden soll, um den grafischen Übertragungsbutton darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, definiert es einen eindeutigen Identifikator (ID), der im gesamten Dokument einzigartig sein muss. Zweck ist die Identifikation des Elements beim Verlinken. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}}-Tags verwendet, um das Label mit dem Formularelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, bietet einen Hinweis an Browser, welche Art der virtuellen Tastaturkonfiguration bei der Bearbeitung dieses Elements oder seines Inhalts verwendet werden soll. Werte sind zum Beispiel `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der für das `list`-Attribut angegebene Wert sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements sein, das sich im selben Dokument befindet. Das `<datalist>` bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die mit dem [`type`](#type) nicht kompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste wählen oder einen anderen Wert angeben.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Entsprechend den Spezifikationen wird das `list`-Attribut nicht unterstützt von `hidden`, `password`, `checkbox`, `radio`, `file` oder jede der Schaltflächenarten.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Markierungen entlang eines Bereichs sehen oder sogar eine Eingabe, die wie ein {{HTMLElement("select")}} öffnet aber nicht aufgeführte Werte erlaubt. Siehe die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für andere Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert das Attribut den größten Wert im Bereich zugelassener Werte. Wenn der in das Element eingetragene [`value`](#value) diesen überschreitet, scheitert das Element an der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation). Wenn der Wert des `max`-Attributs keine Zahl ist, dann hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (zum Beispiel für Daten oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass der Bereich umschlagen kann; zum Beispiel erlaubt dies, einen Zeitbereich von 22 Uhr bis 4 Uhr festzulegen.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert das Attribut die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein Ganzzahlwert von 0 oder größer sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Das Eingabefeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des eingegebenen Textes größer als `maxlength` UTF-16-Codeeinheiten ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen als durch das `maxlength`-Attribut erlaubt eingegeben werden. Die Einschränkungsvalidierung wird nur angewendet, wenn sich der Wert durch den Benutzer ändert. Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert das Attribut den negativsten Wert im Bereich zulässiger Werte. Wenn der in das Element eingetragene [`value`](#value) niedriger als dieser ist, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht spezifiziert oder ungültig ist, wird kein `min` Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert kleiner als das durch das `min`-Attribut erlaubte Minimum ist, wird die Einschränkungsvalidierung die Formulareinreichung verhindern. Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (zum Beispiel für Daten oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass der Bereich umschlagen kann; zum Beispiel erlaubt dies, einen Zeitbereich von 22 Uhr bis 4 Uhr festzulegen.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert das Attribut die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert kleiner oder gleich dem durch `maxlength` angegebenen Wert sein. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des eingegebenen Textes kürzer als `minlength` UTF-16-Codeeinheiten ist, was die Formulareinreichung verhindert. Einschränkungsvalidierung wird nur angewendet, wenn sich der Wert durch den Benutzer ändert. Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolean-Attribut `multiple`, wenn gesetzt, bedeutet, dass der Benutzer im E-Mail-Widget kommagetrennte E-Mail-Adressen eingeben oder mehr als eine Datei mit der `file`-Eingabe wählen kann. Siehe die {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetypen.

- `name`

  - : Ein String, der einen Namen für die Eingabesteuerung angibt. Dieser Name wird zusammen mit dem Wert der Steuerung übermittelt, wenn das Formular übermittelt wird.

    Betrachten Sie das `name`-Attribut als erforderlich (obwohl es nicht ist). Wenn eine Eingabe keinen `name` angegeben hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, nicht markierte Optionsfelder, nicht markierte Kontrollkästchen und Reset-Tasten werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn es als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "User-Agent")}} auf die Zeichencodierung gesetzt, die zum Senden des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erzeugt ein spezielles Verhalten für Optionen.

    Nur ein Optionsfeld in einer Gruppe gleichnamiger Optionsfelder kann gleichzeitig ausgewählt sein. Das Auswählen eines Optionsfelds in dieser Gruppe hebt automatisch die Auswahl eines derzeit ausgewählten Optionsfelds in derselben Gruppe auf. Der Wert dieses einen ausgewählten Optionsfelds wird zusammen mit dem Namen übermittelt, wenn das Formular übermittelt wird.

    Wenn Sie eine Reihe gleichnamiger Gruppen von Optionsfeldern durchgehen, wird in den Fokus des ersten, der überprüft ist, genommen. Wenn sie nicht in der Quellreihenfolge gruppiert sind, beginnt das Tabulieren in die Gruppe, wenn der erste in der Gruppe erreicht wird, wobei alle übersprungen werden, die nicht überprüft sind. Mit anderen Worten, wenn einer geprüft wird, werden die nicht überprüften Optionsfelder in der Gruppe übersprungen. Wenn keiner geprüft ist, erhält die Optionsfeldgruppe den Fokus, wenn der erste in der gleichnamigen Gruppe erreicht wird.

    Sobald eines der Optionsfelder in einer Gruppe den Fokus hat, navigieren die Pfeiltasten durch alle Optionsfelder des gleichen Namens, selbst wenn die Optionsfelder nicht zusammen in der Quellreihenfolge gruppiert sind.

    Wenn ein Eingabefeld ein `name`-Attribut erhält, wird dieser Name zu einer Eigenschaft des Eigentümerformularelements [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft. Wenn Sie eine Eingabe haben, deren `name` auf `guest` gesetzt ist und eine andere, deren `name` `hat-size` ist, kann folgender Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein, und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der mit einer eingebauten Eigenschaft des Formular übereinstimmt, da Sie dann die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf die entsprechende Eingabe überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, das `pattern`-Attribut wird verwendet, um ein reguläres Ausdrucksmuster zu kompilieren, das der `value` der Eingabe entsprechen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Keine Schrägstriche sollten um den Mustertext angegeben werden. Beim Kompilieren des regulären Ausdrucks:

    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, sodass die Übereinstimmung gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'` Flag angegeben, sodass das Muster als Sequenz von Unicode-Codepunkten, und nicht als {{Glossary("ASCII", "ASCII")}}, behandelt wird.

    Wenn das `pattern`-Attribut vorhanden, aber nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet, und dieses Attribut wird vollständig ignoriert. Wenn das Musterattribut gültig ist und ein nicht leerer Wert nicht mit dem Muster übereinstimmt, wird die Einschränkungsvalidierung die Formulareinreichung verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden kommagetrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn das `pattern`-Attribut verwendet wird, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe bereitstellen. Sie können auch ein [`title`](#title)-Attribut hinzufügen, um die Anforderungen zum Übereinstimmen mit dem Muster zu erklären; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist erforderlich für die Zugänglichkeit. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password`, und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis für den Benutzer, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Art der Daten gibt, anstatt einer Erklärung oder Aufforderung. Der Text _darf_ keine Wagenrücklauf- oder Zeilenumbruchszeichen enthalten. Wenn beispielsweise erwartet wird, dass ein Feld den Vornamen eines Benutzers erfasst und dessen Etikett "Vorname" lautet, könnte ein geeigneter Platzhalter "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Label](#labels) für weitere Informationen.

- `popovertarget`

  - : Wandelt ein `<input type="button">`-Element in eine Knopf-Steuerung für Popover um; nimmt die ID des Popover-Elements als Wert. Siehe die [Popover API](/de/docs/Web/API/Popover_API) Übersichtsseite für mehr Details. Das Herstellen einer Beziehung zwischen einem Popover und seinem Invoker-Button mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Invoker und platziert das Popover in einer logischen Position in der Tastaturnavigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover zugänglicher für Tastatur- und Hilfsgerät-(AT) Benutzer (siehe auch [Popover Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt einen impliziten Ankerbezug zwischen den beiden, was es sehr praktisch macht, Popover relativ zu ihren Kontrollen mithilfe von [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf ein durch ein Steuerelement `<input type="button">` gesteuertes Popover-Element ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Der Knopf wird ein gezeigtes Popover verbergen. Versuchen Sie, ein bereits verborgenes Popover zu verstecken, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Knopf wird ein verborgenes Popover zeigen. Versuchen Sie, ein bereits sichtbares Popover zu zeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Knopf wird ein Popover zwischen Sichtbarkeit und Unsichtbarkeit umschalten. Wird das Popover verborgen, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Falls `popovertargetaction` ausgelassen wird, ist `"toggle"` die Standardaktion, die durch den Steuerknopf ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer den Wert der Eingabe nicht bearbeiten darf. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `password` unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly) für weitere Informationen.

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Eigentümerformular übermittelt werden kann. Das `required`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, und `file` unterstützt.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Attributes/required) für weitere Informationen.

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url`, und `text`, das `size`-Attribut bestimmt, wie viel der Eingabe angezeigt wird. Im Grunde genommen schafft es dasselbe Ergebnis wie das Setzen der CSS-Eigenschaft [`width`](/de/docs/Web/CSS/width) mit ein paar Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Bei `password` und `text` ist es eine Zeichenanzahl (oder `em` Einheiten) mit einem Standardwert von `20`, und für andere ist es Pixel (oder `px` Einheiten). Die CSS-Eigenschaft `width` hat Vorrang über das `size`-Attribut.

- `src`

  - : Nur gültig für den Bild-Button, das `src` ist ein String, der die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Übertragungsbutton darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut ist eine Zahl, die die Granularität bestimmt, die der Wert einhalten muss.

    Wenn nicht explizit enthalten:

    - `step` default auf 1 für `number` und `range`.
    - Jeder date/time Eingabetyp hat einen Standard-`step`-Wert, der für den Typ angemessen ist, siehe die Einzelseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step), und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl—Ganzzahl oder Fließkommazahlen—sein oder der spezielle Wert `any`, was bedeutet, dass kein Trittbrettfahren impliziert ist, und jeder Wert zulässig ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, date/time Eingabetypen, und `range` Eingabetypen gleich der Grundlage für das Schritte—der [`min`](#min) Wert und Inkremente des Schrittwertes, bis zum [`max`](#max) Wert, wenn angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, ist jede gerade Ganzzahl, `10` oder größer, gültig. Wenn ausgelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, weil `step` standardmäßig `1` ist. Für `4.2`, um gültig zu sein, hätte `step` auf `any`, 0.1, 0.2, oder irgendein `min` Wert hätte eine Zahl sein müssen, die auf `.2` endet, so wie `<input type="number" min="-5.2">`

    > [!NOTE]
    > Wenn die durch den Benutzer eingegebenen Daten nicht mit der Schritte-Konfiguration übereinstimmt, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und wird das `:invalid` Pseudoklasse übereinstimmen.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- `tabindex`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein Integer-Attribut, das angibt, ob das Element Eingabefokus annehmen kann (fokussierbar ist), wenn es an sequentieller Tastaturnavigation teilnehmen soll. Da alle Eingabetypen außer Eingaben des Typs versteckt fokusierbar sind, sollte dieses Attribut nicht auf Formularelementen verwendet werden, denn dies würde das Verwalten der Fokusreihenfolge für alle Elemente im Dokument erfordern mit dem Risiko der Beeinträchtigung der Benutzerfreundlichkeit und Zugänglichkeit, wenn nicht korrekt durchgeführt.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text enthält, der Beratungsinformationen zu dem Element, zu dem es gehört, repräsentiert. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip angezeigt werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks des Formularelements verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut des Formularelements gesetzt ist. Siehe [Label](#labels) unten.

- `type`

  - : Ein String, der den Typ der zu rendernden Steuerung angibt. Um beispielsweise ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Falls weggelassen (oder ein unbekannter Wert angegeben wird), wird der `text` Eingabetyp verwendet, das ein Klartexteingabefeld erzeugt.

    Zulässige Werte sind in [Input Typen](#input_types) oben aufgelistet.

- `value`

  - : Der Wert des Eingabesteuerung. Wenn im HTML angegeben, ist dies der Anfangswert, und dann kann er jederzeit geändert oder abgerufen werden, indem JavaScript verwendet wird, um auf die entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt `value`-Eigenschaft zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`

  - : Nur gültig für den Bild-Button, die `width` ist die Breite der Bilddatei, die angezeigt werden soll, um den grafischen Übertragungsbutton darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind auch in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie sie vermeiden, es sei denn, es lässt sich nicht vermeiden.

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
        Ob wiederholt [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, um Live-Suchergebnisse zu aktualisieren, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion anzeigt, die ausgeführt wird, wenn der Benutzer
        die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste drückt, während das
        Feld bearbeitet wird; dies wird verwendet, um ein geeignetes Label für diese
        Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Orientierung des Bereichsschiebers. <strong>Nur Firefox</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl an Elementen, die in der Dropdown-Liste vorheriger Suchanfragen angezeigt werden sollten. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der anzeigt, ob dem Benutzer nur erlaubt werden soll, ein Verzeichnis (oder mehrere, wenn <a href="#multiple"><code>multiple</code></a> auch vorhanden ist) auszuwählen.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine Erweiterung von WebKit und Blink (daher wird es von Safari, Opera, Chrome, etc. unterstützt), die, falls vorhanden, dem {{Glossary("user_agent", "User-Agent")}} sagt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Falls `incremental` nicht festgelegt ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer die Suche explizit einleitet (zum Beispiel durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

    Das `search` Ereignis wird so begrenzt, dass es nicht häufiger als in einem implementierungsdefinierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich dem nicht standardkonformen CSS-Eigenschaft -moz-orient, das die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente beeinflusst, definiert das `orient`-Attribut die Orientierung des Bereichsschiebers. Werte schließen `horizontal` ein, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wobei der Bereich vertikal gerendert wird. Siehe [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularelemente.

- `results` {{non-standard_inline}}

  - : Das in Safari unterstützte `results`-Attribut ist ein numerischer Wert, der es Ihnen erlaubt, die maximale Anzahl an Einträgen zu überschreiben, die in der nativ bereitgestellten Dropdown-Liste des `<input>`-Elements für frühere Suchanfragen angezeigt werden soll.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben wird, wird die Standardmaximalzahl an Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, zeigt an, dass nur Verzeichnisse im Dateiauswahldialog verfügbar sein sollen, um vom Benutzer ausgewählt zu werden. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge und seit Firefox 50 und höher verwendbar. Auch wenn es relativ breit unterstützt wird, ist es noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Außerdem sind die von den Elternschnittstellen, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget) spezifizierten Methoden verfügbar.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; ansonsten gibt es `false` zurück und feuert ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis im Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; ansonsten gibt es `false` zurück, feuert ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis im Element aus und meldet (falls das Ereignis nicht abgebrochen wird) das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, falls der Inhalt des Elements auswählbar ist. Bei Elementen mit keinem auswählbaren Textinhalt (wie ein visueller Farbwähler oder eine Kalenderdatums-Eingabe) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des spezifizierten Zeichenbereichs im Eingabeelement auf einen angegebenen String. Ein `selectMode`-Parameter ist verfügbar, um zu kontrollieren, wie der vorhandene Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den spezifizierten Zeichenbereich innerhalb eines textlichen Eingabeelements aus. Macht nichts für Eingaben, die nicht als Texteingabefelder präsentiert werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browserwähler für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber ausgelöst durch das Drücken eines Buttons oder eine andere Benutzerinteraktion.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins, standardmäßig, oder durch die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder durch die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Eigenschaften, die für Nicht-Formularelemente nicht zutreffen. Es gibt CSS-Selektoren, die gezielt Formularelemente basierend auf ihren UI-Eigenschaften ansprechen können, auch bekannt als UI-Pseudoklassen. Das Input-Element kann auch anhand des Typs mit Attributselektoren angesprochen werden. Einige Eigenschaften sind dabei besonders nützlich.

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
        Jedes aktuell aktivierte Element, das aktiviert (ausgewählt, angeklickt, eingetippt etc.) oder fokussiert werden kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes aktuell deaktivierte Element, das einen aktivierten Zustand hat, d.h. es könnte sonst aktiviert (ausgewählt, angeklickt, eingetippt etc.) oder fokussiert werden, wäre es nicht deaktiviert.
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
        Element, das momentan <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, inkl. <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elementen mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die der Standard in einer Gruppe verwandter Elemente sind. Passt zu {{HTMLElement("input/checkbox", "checkbox")}}- und {{HTMLElement("input/radio", "radio")}}-Input-Typen, die beim Seitenladen oder beim Rendern markiert wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}}- und {{HTMLElement("input/radio", "radio")}}-Input-Typen, die aktuell markiert sind (und das {{HTMLElement("option")}} in einem {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren indeterminate-Eigenschaft durch JavaScript auf wahr gesetzt ist, {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Radio-Buttons mit demselben Namenswert im Formular nicht markiert sind, und {{HTMLElement("progress")}}-Elemente im unbestimmten Zustand
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die eine Constraint-Validierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die eine Constraint-Validierung angewendet wird und die derzeit ungültig sind. Passt zu einem Formularelement, dessen Wert nicht mit den durch seine Attribute gesetzten Einschränkungen übereinstimmt, wie <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht-leeres Input, dessen aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribute sowie <a href="#step"><code>step</code></a> spezifizierten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht-leeres Input, dessen aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribute angegebenen Bereichsgrenzen liegt oder nicht dem <a href="#step"><code>step</code></a>-Constraint entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Passt nur zu Elementen, die erforderlich sein können.
        Das Attribut auf einem nicht erforderlichen Element führt zu keiner Übereinstimmung.
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
        <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente, die momentan keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, wird aber bei Blur aktiviert. Passt zu ungültigem Input, aber nur nach Benutzerinteraktion, z.B. durch Fokussieren auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular mit dem ungültigen Steuerelement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Picker anzeigen, aus dem der Benutzer einen Wert auswählen kann (z.B. <a href="/de/docs/Web/HTML/Element/input/color"><code>&lt;input type="color"&gt;</code></a>) — jedoch nur, wenn das Element im offenen Zustand ist, d.h. wenn der Picker angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können das Label eines Auswahlkästchens basierend darauf stylen, ob das Kästchen markiert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einem markierten Input folgt. Wir haben keine Stile angewendet, wenn das `input` nicht markiert ist.

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

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) gezielt anzusprechen. CSS-Attributselektoren passen zu Elementen basierend auf der bloßen Existenz eines Attributs oder dem Wert eines bestimmten Attributs.

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

Standardmäßig erscheint der Platzhaltertext in einem durchscheinenden oder hellgrauen Ton. Das {{cssxref('::placeholder')}}-Pseudoelement ist der [`placeholder`-Text](#placeholder) des Inputs. Es kann mit einem begrenzten Satz an CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil der CSS-Eigenschaften, der auf das {{cssxref("::first-line")}}-Pseudoelement angewendet werden kann, kann in einer Regel verwendet werden, die `::placeholder` im Selektor hat.

### appearance

Die {{cssxref("appearance")}}-Eigenschaft ermöglicht es, (fast) jedes Element in einem plattform-eigenen Stil basierend auf dem Betriebssystem-Thema anzuzeigen sowie jede nativen Plattform-Stile mit dem Wert `none` zu entfernen.

Sie könnten ein `<div>` wie ein Auswahlkästchen aussehen lassen, indem Sie `div {appearance: radio;}` setzen oder ein Radio wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}`, aber tun Sie das nicht.

Wenn Sie `appearance: none` setzen, werden die plattformnativen Ränder entfernt, jedoch nicht die Funktionalität.

### caret-color

Eine Eigenschaft, die speziell für texteingabebezogene Elemente genutzt werden kann, ist die CSS-{{cssxref("caret-color")}}-Eigenschaft, mit der Sie die Farbe des Texteingabe-Cursors festlegen können:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie erhalten standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und Formularelemente in ihrer Größe an ihren Inhalt anzupassen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die sich an ihren Inhalt anpassen und mit zunehmendem Text wachsen. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (zum Beispiel, [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Element/input/file) und {{htmlelement("textarea")}}-Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textlichen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es das ist, können die Position und die Größe des Elements sowie die Positionierung innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Weitere Informationen zum Hinzufügen von Farben zu HTML-Elementen finden Sie unter:

- [Anwendung von Farben auf HTML-Elemente mittels CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Stylingoptionen für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Weitere Eigenschaften

### Labels

Labels sind notwendig, um erläuternden Text mit einem `<input>` zu verbinden. Das {{HTMLElement("label")}}-Element liefert erklärende Informationen über ein Formularfeld, die _immer_ angemessen sind (abgesehen von Layoutaspekten). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugeordnete Labels

Die semantische Paarung von `<input>`- und `<label>`-Elementen ist nützlich für Technologien für Barrierefreiheit, wie Screenreader. Indem Sie sie mit dem [`for`](<a href="/de/docs/Web/HTML/Element/label#for) `for`-Attribut eines `<label>` verbinden, verbinden Sie das Label mit dem Input auf eine Weise, die es Screenreadern erlaubt, Benutzer die Eingaben präziser zu beschreiben.

Es reicht nicht aus, einfachen Text neben das `<input>`-Element zu stellen. Vielmehr erfordern Benutzbarkeit und Zugangsfähigkeit die Einbeziehung eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist unzugänglich: Es existiert keine Beziehung zwischen der Eingabeaufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere "Trefferfläche" für Maus- und Touchscreen-Benutzer, um darauf zu klicken oder zu tippen. Durch das Verbinden eines `<label>`- mit einem `<input>`-Element fokussiert das Klicken auf eines von beiden das `<input>`. Wenn Sie einfachen Text verwenden, um Ihr Input zu "labeln", wird dies nicht passieren. Dass die Eingabeaufforderung Teil der Aktivierungsfläche für das Input ist, ist hilfreich für Menschen mit motorischen Beeinträchtigungen.

Als Webentwickler ist es wichtig, dass wir niemals annehmen, dass Menschen all die Dinge wissen, die wir wissen. Die Vielfalt der Personen, die das Web nutzen — und davon abgeleitet Ihre Website — garantiert praktisch, dass einige Besucher Ihrer Website einige Gedankenprozesse und/oder Umstände haben werden, die sie dazu bringen, Ihre Formulare sehr unterschiedlich von Ihnen zu interpretieren, wenn keine klaren und richtig präsentierten Labels vorhanden sind.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text anzugeben, der im Inhaltsbereich des `<input>`-Elements selbst erscheint, wenn es leer ist. Der Platzhalter sollte niemals nötig sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, weil es keins ist. Der Platzhalter wird verwendet, um einen Hinweis zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Der Platzhalter ist nicht zugänglich für Screenreader, und sobald der Benutzer Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitenübersetzungsfunktionen können Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element labeln müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Clientseitige Validierung

> [!WARNING]
> Clientseitige Validierung ist nützlich, garantiert aber _nicht_, dass der Server gültige Daten erhält. Wenn die Daten ein spezifisches Format haben müssen, überprüfen Sie sie _immer_ auch auf der Serverseite und geben Sie eine [`400`-HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Inputs basierend auf den {{cssxref(":valid")}}- oder {{cssxref(":invalid")}}-UI-Zuständen basierend auf dem aktuellen Zustand jedes Inputs zu stylen, stellt der Browser auch eine clientseitige Validierung beim (versuchten) Absenden von Formularen bereit. Beim Absenden eines Formulars, wenn es ein Formularelement gibt, das die Constraint-Validierung nicht erfüllt, zeigt der unterstützende Browser eine Fehlermeldung auf dem ersten ungültigen Formularelement an; wobei eine Standardnachricht basierend auf dem Fehlerart oder eine von Ihnen festgelegte Nachricht angezeigt wird.

Einige Input-Typen und andere Attribute begrenzen, welche Werte für ein gegebenes Input gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler könnten auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade ganze Zahl (nicht den Anforderungen des `step`-Attributs entspricht), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Input-Typen, deren Wertebereich periodisch ist (das heißt, beim höchsten möglichen Wert wickeln sich die Werte wieder zu Beginn zurück, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max)- und [`min`](#min)-Eigenschaften umgekehrt werden, was angibt, dass der erlaubte Wertebereich bei `min` beginnt, um die niedrigsten möglichen Werte umgewandelt wird und dann weitergeht, bis `max` erreicht ist. Dies ist besonders nützlich für Daten und Zeiten, zum Beispiel, wenn Sie möchten, dass der Bereich von 20 Uhr bis 8 Uhr zulässig ist:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und ihre Werte können zu einem bestimmten Fehler führen, dem [`ValidityState`](/de/docs/Web/API/ValidityState):

<table class="no-markdown">
  <caption>
    Gültigkeitsobjektfehler hängen von den <code>&lt;input&gt;</code>-Attributen und ihren Werten ab:
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
        Tritt auf, wenn der Wert größer als der maximale Wert ist, der durch das <code>max</code>-Attribut definiert ist
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer als die vom <code>maxlength</code>-Attribut erlaubte Anzahl ist
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner als der minimale Wert ist, der durch das <code>min</code>-Attribut definiert ist
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner als die vom <code>minlength</code>-Attribut geforderte Anzahl ist
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein <code>pattern</code>-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> ihm nicht entspricht.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, der Wert jedoch <code>null</code> ist oder das Radio oder Checkbox nicht markiert sind.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Der Standardwert für das Inkrement ist <code>1</code>, daher sind nur ganze Zahlen bei <code>type="number"</code> gültig, wenn <code>step</code> nicht enthalten ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, zum Beispiel wenn eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required`-Attribut hat, ist kein Wert oder eine leere Zeichenfolge nicht ungültig. Auch wenn die oben genannten Attribute vorhanden sind, ist eine leere Zeichenfolge mit Ausnahme von `required` kein Fehler.

Wir können Grenzen für die akzeptierten Werte setzen, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer bei einem Fehler alarmieren, wenn das Formular eingereicht wird.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen readonly-Eigenschaften `badInput`, `valid` und `customError`. Das Gültigkeitsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund für eine mögliche Validierungsfehlstellung zutrifft, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements alle Constraints einhält.

Wenn es einen Fehler gibt, alarmieren unterstütztende Browser sowohl den Benutzer als auch verhindern, dass das Formular eingereicht wird. Ein Wort der Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen wahrheitswert ist (alles außer der leeren Zeichenfolge oder `null`), wird das Formular an der Einreichung gehindert. Wenn keine benutzerdefinierte Fehlermeldung vorliegt und keine der anderen Eigenschaften wahr ist, wird `valid` wahr sein und das Formular kann gesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Gültigkeitsnachricht auf die leere Zeichenfolge setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt ist, wird es nicht gesendet, auch wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandte) Elemente anwendbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen führen dazu, dass eine Standardfehlermeldung angezeigt wird, wenn Sie versuchen, das Formular ohne gültige Eingaben oder mit einem Wert, der nicht zum `pattern` passt, zu senden.

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

Das Beispiel wird wie folgt gerendert:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die `checkValidity()`-Methode über den `input`-Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst und die `invalid`-Ereignishandlerfunktion ausgeführt. In dieser Funktion überprüfen wir, ob der Wert wegen Leere oder wegen Nichtübereinstimmung mit dem Muster ungültig ist, indem wir einen `if ()`-Block verwenden und eine benutzerdefinierte Fehlermeldung setzen.
- Infolgedessen wird, wenn der Eingabewert ungültig ist, wenn der Senden-Button gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er wie erwartet gesendet. Damit das passiert, muss die benutzerdefinierte Gültigkeit durch das Aufrufen von `setCustomValidity()` mit einem leeren Zeichenfolgenwert abgebrochen werden. Dies tun wir daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Gültigkeit zuvor gesetzt wurde, wird die Eingabe als ungültig registriert, auch wenn sie derzeit einen gültigen Wert bei der Einreichung enthält.

> [!NOTE]
> Validieren Sie immer Eingabebeschränkungen sowohl clientseitig als auch serverseitig. Die Constraint-Validierung beseitigt nicht die Notwendigkeit der Validierung auf der _Server-Seite_. Ungültige Werte können weiterhin von älteren Browsern oder Angreifern gesendet werden.

> [!NOTE]
> Firefox unterstützte ein proprietäres Fehlerattribut - `x-moz-errormessage` - über viele Versionen hinweg, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen ähnlich zu setzen. Dies wurde ab Version 66 entfernt (siehe [Firefox-Fehler 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der Sprache ab. In einigen Regionen ist 1.000,00 eine gültige Zahl, während in anderen Regionen die gültige Eingabeweise 1.000,00 ist.

Firefox verwendet folgende Heuristiken, um die Sprache zu bestimmen, in der die Benutzereingabe validiert werden soll (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut auf dem Element oder einem seiner Eltern angegeben wird.
- Versuchen Sie die Sprache, die durch einen `Content-Language`-HTTP-Header angegeben wird. Oder,
- Falls keine angegeben ist, verwenden Sie die Sprache des Browsers.

## Barrierefreiheit

### Labels

Beim Einfügen von Inputs ist es erforderlich, Labels hinzuzufügen. Dies ist notwendig, damit Benutzer mit Hilfstechnologien erkennen können, wofür das Input ist. Außerdem wird durch Klicken oder Tippen auf ein Label der Fokus auf das zugehörige Formularelement gesetzt. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erhöht die Fläche, auf die ein Benutzer klicken oder tippen kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar erforderlich) für Radio-Buttons und Auswahlkästchen, die sehr klein sind. Weitere Informationen zu Labels im Allgemeinen finden Sie unter [Labels](#labels).

Das folgende Beispiel zeigt, wie das `<label>`-Element mit einem `<input>`-Element im oben genannten Stil assoziiert wird. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert dem `id` des Inputs entspricht.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten eine genügend große Fläche bieten, damit sie leicht zu aktivieren sind. Dies hilft einer Vielzahl von Menschen, einschließlich Personen mit motorischen Beeinträchtigungen und Personen, die unpräzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixeln](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

- [Erfolgskriterium 2.5.5: Zielgröße | W3C Verständliche WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Zielbereiche - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>, aufgezählt, einreichbar, zurücksetzbar, formularassoziiertes Element, <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasing-Inhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht <code>hidden</code> ist, dann labelbares Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasing-Inhalt</a> akzeptiert.
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
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a ></code>
              </li>
              <li>
                mit <code>list</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
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
            <code>type=text</code> without <code>list</code> attribute:
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            or <code>text</code> with <code>list</code> attribute: no
            <code>role</code> allowed
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Formular Zwänge Validierung](/de/docs/Web/HTML/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formular Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Wie man benutzerdefinierte Formular-Widgets erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in Legacy-Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Styling HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Stylingoptionen für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
