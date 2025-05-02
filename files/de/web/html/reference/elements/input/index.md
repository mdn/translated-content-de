---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: e5c488b9b26cb609b3a61bb6a45973f1191d2f34
---

{{HTMLSidebar}}

Das **`<input>`**-Element [HTML](/de/docs/Web/HTML) wird verwendet, um interaktive Steuerelemente für webbasierten Formulare zu erstellen, um Daten vom Benutzer entgegenzunehmen; je nach Gerät und {{Glossary("user_agent", "User Agent")}} stehen verschiedene Arten von Eingabedaten und Steuerungs-Widgets zur Verfügung. Das `<input>`-Element ist eines der mächtigsten und komplexesten in HTML, da es so viele Kombinationen aus Eingabetypen und Attributen gibt.

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

Wie ein `<input>` funktioniert, variiert erheblich abhängig vom Wert seines [`type`](#type)-Attributs, weshalb die verschiedenen Typen auf separaten Referenzseiten behandelt werden. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` verwendet.

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
      <td>Eine Kontrollkästchen, das es ermöglicht, einzelne Werte zu selektieren/deselektieren.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerelement zur Farbauswahl, das in unterstützenden Browsern einen Farbwähler öffnen kann.
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
        Ein Steuerelement zur Eingabe von Datum und Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Räder für Datums- und Zeitkomponenten in unterstützenden Browsern.
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
        <code>text</code>-Eingabe, hat aber Validierungsparameter und eine relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerelement, mit dem der Benutzer eine Datei auswählen kann. Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Typen von Dateien zu definieren, die das Steuerelement auswählen kann.
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
        Ein nicht angezeigtes Steuerelement, dessen Wert jedoch an den Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist versteckt!
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
        Eine grafische <code>submit</code>-Schaltfläche. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert ist.
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
        Ein Steuerelement zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt standardmäßig eine Validierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein einzeiliges Textfeld, dessen Wert verborgen wird.
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
        Eine Optionsschaltfläche, die es ermöglicht, einen einzelnen Wert aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Ein Steuerelement zur Eingabe einer Zahl, deren genauer Wert nicht wichtig ist. Wird als Bereichs-Widget angezeigt, das standardmäßig auf den mittleren Wert gesetzt ist. Wird zusammen mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich akzeptabler Werte zu definieren.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchtexten. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern ein Löschsymbol enthalten, das zum Leeren des Feldes verwendet werden kann. Zeigt ein Suchsymbol anstelle der Eingabetaste auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Steuerelement zur Eingabe einer Telefonnummer. Zeigt eine Telefonwähltastatur auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code>-Eingabe, hat aber Validierungsparameter und eine relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerelement zur Eingabe eines Datums, das aus einer Wochennummer und einer Jahrzahl besteht, ohne Zeitzone.
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
        Ein Steuerelement zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteile einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so leistungsfähig aufgrund seiner Attribute; das [`type`](#type)-Attribut, das oben mit Beispielen beschrieben wurde, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie sich technisch genau den gleichen Satz von Attributen. In der Realität haben jedoch die meisten Attribute nur auf eine bestimmte Untermenge von Eingabetypen Auswirkungen. Darüber hinaus hängt es vom Eingabetyp ab, wie einige Attribute eine Eingabe beeinflussen und unterschiedliche Eingabetypen unterschiedlich beeinflussen.

In diesem Abschnitt finden Sie eine Tabelle mit allen Attributen und einer kurzen Beschreibung. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut ausführlicher beschreibt, zusammen mit den Eingabetypen, mit denen sie verbunden sind. Attribute, die für die meisten oder alle Eingabetypen gemeinsam sind, werden unten ausführlicher definiert. Attribute, die für bestimmte Eingabetypen einzigartig sind oder Attribute, die für alle Eingabetypen gemeinsam sind, aber ein spezielles Verhalten haben, werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                          |
| --------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis auf den erwarteten Dateityp in Datei-Upload-Steuerelementen                                   |
| [`alt`](#alt)                                 | `image`                                                                      | Alt-Attribut für den Bildtyp. Erforderlich für Zugänglichkeit                                         |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Steuert die automatische Großschreibung im eingegebenen Text.                                         |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis für die Formular-Autovervollständigungsfunktion                                               |
| [`capture`](#capture)                         | `file`                                                                       | Medieneingabemethode in Datei-Upload-Steuerelementen                                                  |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Ob der Befehl oder die Steuerung aktiviert ist                                                        |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfeldes zur Angabe der Richtung des Elements bei Formularübermittlung                 |
| [`disabled`](#disabled)                       | alle                                                                         | Ob das Formularfeld deaktiviert ist                                                                   |
| [`form`](#form)                               | alle                                                                         | Verknüpft das Steuerelement mit einem Formularelement                                                 |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | URL zur Verwendung bei der Formularübermittlung                                                       |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Formulardatensatz-Codierungstyp zur Verwendung bei der Formularübermittlung                           |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | HTTP-Methode zur Verwendung bei der Formularübermittlung                                              |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Formularfeldvalidierung für Formularübermittlung umgehen                                              |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für die Formularübermittlung                                                         |
| [`height`](#height)                           | `image`                                                                      | Entspricht dem Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                          |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsoptionen              |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Maximalwert                                                                                           |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) von `value`                                                       |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Minimalwert                                                                                           |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Minimale Länge (Anzahl der Zeichen) von `value`                                                       |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolean. Ob mehrere Werte zulässig sind                                                               |
| [`name`](#name)                               | alle                                                                         | Name des Formularfelds. Wird als Teil eines Name-Werte-Paares mit dem Formular übermittelt            |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Das Muster, das `value` entsprechen muss, um gültig zu sein                                           |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der im Formularfeld erscheint, wenn kein Wert festgelegt ist                                    |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Bestimmt ein `<input type="button">` als Steuerung für ein Popover-Element                            |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                      |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht editierbar                                                                |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss ausgewählt sein, damit das Formular gesendet werden kann |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe des Steuerelements                                                                              |
| [`src`](#src)                                 | `image`                                                                      | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                   |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Inkrementelle Werte, die zulässig sind                                                                |
| [`type`](#type)                               | alle                                                                         | Art des Formularsteuerungselements                                                                    |
| [`value`](#value)                             | alle außer `image`                                                           | Der Wert des Steuerungselements. Wenn im HTML angegeben, entspricht dies dem initialen Wert           |
| [`width`](#width)                             | `image`                                                                      | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                            |

Einige zusätzliche nicht standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)

  - : Gültig nur für den `file`-Eingabetyp, das `accept`-Attribut definiert, welche Dateitypen in einem `file`-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alt`

  - : Gültig nur für den `image`-Button, das `alt`-Attribut bietet Alternativtext für das Bild und zeigt den Wert des Attributs an, wenn das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, auf welche Weise. Weitere Informationen finden Sie auf der globalen Attributseite [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als seinen Wert eine durch Leerzeichen getrennte Zeichenfolge an, die beschreibt, welche, wenn überhaupt, Art von Autovervollständigungsfunktionalität das Eingabefeld bereitstellen soll. Eine typische Implementierung von Autovervollständigung erinnert sich an vorherige Werte, die im selben Eingabefeld eingegeben wurden, aber komplexere Formen der Autovervollständigung können existieren. Zum Beispiel könnte ein Browser mit der Kontakliste eines Geräts integriert werden, um E-Mail-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#values) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig auf `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen außer `checkbox`, `radio`, `file` oder eine der Schaltflächentypen gültig.

    Siehe das [`autocomplete`](#autocomplete)-Attribut für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` etwas anders für `hidden` ist als für andere Eingabetypen.

- `autofocus`

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass die Eingabe automatisch den Fokus erhalten soll, wenn die Seite fertig geladen ist (oder wenn das {{HTMLElement("dialog")}} mit dem Element angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es mehreren Elementen zugewiesen wird, erhält das erste mit diesem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf `hidden`-Eingaben verwendet werden, da versteckte Eingaben nicht fokussierbar sind.

    > [!WARNING]
    > Ein Formularsteuerungselement automatisch zu fokussieren, kann sehbehinderte Menschen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, "beamen" Bildschirmleser ihren Benutzer ohne Vorwarnung zur Formularsteuerung.

    Verwenden Sie sorgfältige Überlegungen für die Barrierefreiheit, wenn Sie das `autofocus`-Attribut anwenden. Das automatische Fokussieren auf ein Steuerelement kann bewirken, dass die Seite beim Laden scrollt. Der Fokus kann auch dafür sorgen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser die Beschriftung der Fokus-erhaltenden Formularsteuerung ankündigt, wird der Bildschirmleser nichts vor der Beschriftung ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird ebenso den durch den vorhergehenden Inhalt erzeugten Kontext verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML-Media-Capture-Spezifikation und nur für den `file`-Eingabetyp gültig, definiert das `capture`-Attribut, welches Medium—Mikrofon, Video oder Kamera—verwendet werden soll, um eine neue Datei zur Upload mit `file`-Upload-Steuerung in unterstützenden Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`

  - : Gültig für beide `radio`- und `checkbox`-Typen, `checked` ist ein Boolean-Attribut. Wenn es auf einen `radio`-Typ angewendet wird, gibt es an, dass die Radiobox das derzeit ausgewählte im Kreis von gleichnamigen Radio-Buttons ist. Wenn es auf einen `checkbox`-Typ angewendet wird, gibt es an, dass die Checkbox standardmäßig (beim Laden der Seite) ausgewählt ist. Es zeigt _nicht_ an, ob diese Checkbox derzeit ausgewählt ist: Wenn der Zustand der Checkbox geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungselementen wird der Wert von Checkboxes und Radio-Buttons nur in die gesendeten Daten aufgenommen, wenn sie gerade `checked` sind. Wenn sie es sind, werden der Name und die Wert(e) der ausgewählten Steuerung gesendet.

    > Zum Beispiel, wenn eine Checkbox, deren `name` `fruit` ist, `value` von `cherry` hat und die Checkbox aktiviert ist, werden die Formulardaten `fruit=cherry` enthalten. Wenn die Checkbox nicht aktiv ist, wird sie überhaupt nicht in den Formulardaten aufgeführt. Der Standardwert von Checkboxes und Radio-Buttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email`-Eingabetypen, ermöglicht das `dirname`-Attribut die Übermittlung der Richtung des Elements. Wenn es eingeschlossen ist, wird das Formularfeld mit zwei Name-Wert-Paaren gesendet: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser eingestellt.

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

    Wenn das oben stehende Formular gesendet wird, sorgt die Eingabe dafür, dass sowohl das `name` / `value`-Paar `fruit=cherry` als auch das `dirname` / Richtungs-Paar `fruit-dir=ltr` gesendet wird.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren können sollte. Deaktivierte Eingaben werden normalerweise mit einer blasseren Farbe oder unter Verwendung einer anderen Form der Anzeige, dass das Feld nicht verfügbar ist, angezeigt.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular gesendet.

    > [!NOTE]
    > Obwohl nicht durch die Spezifikation erforderlich, wird Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` über Seitenladungen hinweg [beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- `form`

  - : Ein String, der das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (d.h. sein **Formularinhaber**). Dieses Attribut muss, wenn vorhanden, mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächsten enthaltenden Formular verknüpft, wenn vorhanden.

    Das `form`-Attribut erlaubt es Ihnen, eine Eingabe überall im Dokument zu platzieren, aber sie bei einem Formular anderswo im Dokument einzuschließen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft sein.

- `formaction`
  - : Nur für die `image`- und `submit`-Eingabetypen gültig. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formenctype`
  - : Nur für die `image`- und `submit`-Eingabetypen gültig. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formmethod`
  - : Nur für die `image`- und `submit`-Eingabetypen gültig. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formnovalidate`
  - : Nur für die `image`- und `submit`-Eingabetypen gültig. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formtarget`
  - : Nur für die `image`- und `submit`-Eingabetypen gültig. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `height`
  - : Nur für die `image`-Eingabeschaltfläche gültig, die `height` ist die Höhe der Bilddatei, die angezeigt wird, um die grafische Absenden-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen. Es definiert einen eindeutigen Identifikator (ID), der im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des `for`-Attributs der {{htmlelement('label')}}-Verbindung verwendet, um das Label mit der Formularsteuerung zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist, er bietet einen Hinweis an Browser, welche Art von virtueller Tastaturkonfiguration bei der Bearbeitung dieses Elements oder seines Inhalts zu verwenden ist. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der Wert, der dem `list`-Attribut zugewiesen wird, sollte der [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. Das `<datalist>` bietet eine Liste mit vordefinierten Werten, um dem Benutzer für diese Eingabe vorzuschlagen. Alle Werte in der Liste, die mit dem [`type`](#type) nicht kompatibel sind, werden in den vorgeschlagenen Optionen nicht aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert bereitstellen.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Gemäß den Spezifikationen wird das `list`-Attribut vom `hidden`, `password`, `checkbox`, `radio`, `file` oder einer der Schaltflächentypen nicht unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Markierungen entlang eines Bereichs oder sogar einen Eingabewert, der sich wie ein {{HTMLElement("select")}} öffnet, jedoch nicht gelistete Werte zulässt. Prüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den größten Wert im Bereich der zulässigen Werte. Wenn der eingefügte [`value`](#value) den überschreitet, misslingt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation). Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (wie etwa für Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich umwickeln kann; zum Beispiel erlaubt dies das Festlegen eines Zeitbereichs von 22 Uhr bis 4 Uhr.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die maximale Stringlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein Ganzzahlenwert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe misslingt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation), wenn die Länge des in das Feld eingegebenen Textes länger ist als `maxlength` UTF-16-Codeeinheiten. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das `maxlength`-Attribut erlaubt sind. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den kleinsten zulässigen Wert im Bereich der zulässigen Werte. Wenn der [`value`](#value), der in das Element eingegeben wird, geringer ist als dies, misslingt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation). Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert kleiner ist als der durch das `min`-Attribut erlaubte Minimalwert, verhindert die Einschränkungsvalidierung die Formulareinreichung. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (wie etwa für Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich umwickeln kann; zum Beispiel erlaubt dies das Festlegen eines Zeitbereichs von 22 Uhr bis 4 Uhr.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimale Stringlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert sein, der kleiner oder gleich dem durch `maxlength` festgelegten Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben wird, hat die Eingabe keine Mindestlänge.

    Die Eingabe misslingt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation), wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16-Codeeinheiten ist, wodurch die Formulareinreichung verhindert wird. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)

  - : Wenn das `multiple`-Boolean-Attribut gesetzt ist, bedeutet dies, dass der Benutzer kommaseparierte E-Mail-Adressen im E-Mail-Widget eingeben kann oder mehr als eine Datei mit der `file`-Eingabe auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `name`

  - : Ein String, der einen Namen für das Eingabesteuerelement angibt. Dieser Name wird zusammen mit dem Wert des Steuerungselements gesendet, wenn das Formulardaten gesendet werden.

    Betrachten Sie `name` als erforderliches Attribut (auch wenn es nicht ist). Wenn eine Eingabe kein `name` angegeben hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular gesendet! (Deaktivierte Steuerungen, nicht aktivierte Radio-Buttons, nicht aktivierte Checkboxes und Reset-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn es als Name eines `<input>`-Elements des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der Wert der Eingabe automatisch auf die Zeichenkodierung gesetzt, die verwendet wird, um das Formular zu übermitteln.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name) Attribut schafft ein einzigartiges Verhalten für Radio-Buttons.

    Nur ein Radio-Button in einer gleichnamigen Gruppe von Radio-Buttons kann gleichzeitig ausgewählt sein. Wenn ein Radio-Button in dieser Gruppe selektiert wird, wird automatisch der derzeit selektierte Radio-Button in derselben Gruppe deaktiviert. Der Wert dieses einen selektierten Radio-Buttons wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Wenn durchgehend eine Gruppe von gleichnamigen Radio-Buttons indiziert wird, wird, wenn eines davon selektiert ist, dieses den Fokus erhalten. Wenn sie nicht zusammen in der Quell-Reihenfolge gruppiert sind, wird, wenn eines der Gruppe selektiert ist, das Indizieren in die Gruppe gestartet, wenn das erste in der Gruppe erreicht wird, wobei alle ignoriert werden, die nicht selektiert sind. Mit anderen Worten, wenn eines selektiert ist, wird das Indizieren die nicht-selektierten Radio-Buttons in der Gruppe überspringen. Wenn keine selektiert sind, erhält die Radio-Button-Gruppe den Fokus, wenn der erste Radio-Button in der gleichnamigen Gruppe erreicht ist.

    Sobald ein Radio-Button in einer Gruppe den Fokus hat, kann mit den Pfeiltasten durch alle Radio-Buttons des gleichen Namens navigiert werden, auch wenn die Radio-Buttons nicht zusammen in der Quell-Reihenfolge sind.

    Wenn einem Eingabefeld ein `name` zugewiesen wird, wird dieser Name zu einer Eigenschaft des [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaftselements des Besitzformulars. Wenn Sie eine Eingabe haben, deren `name` auf `guest` und eine andere auf `hat-size` gesetzt ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein, und `hatSize` der Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer integrierten Eigenschaft des Formulars entspricht, da Sie damit die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompilieren, dem der [`value`](#value) der Eingabe entsprechen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Es sollten keine Schrägstriche um den Text des Musters angegeben werden. Beim Kompilieren des regulären Ausdrucks:

    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, sodass die Übereinstimmung gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird der `'v'`-Flag angegeben, damit das Muster als eine Folge von Unicode-Codierungen behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn das Musterattribut gültig ist und ein nicht leerer Wert nicht mit dem Muster übereinstimmt, wird die Einschränkungsvalidierung die Formulareinreichung verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte regulären Ausdruck gegen jeden der durch Kommata getrennten Werte getestet.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe einfügen. Sie können auch ein [`title`](#title)-Attribut hinzufügen, um die Anforderungen anzugeben, die sinnvollerweise in einem Tooltip angezeigt werden können; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist aus Gründen der Zugänglichkeit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe die [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis an den Benutzer, welche Art von Information in das Feld eingegeben werden soll. Es sollte ein Wort oder ein kurzer Satz sein, der einen Hinweis auf die erwartete Datenart gibt und keine Erklärung oder Eingabeaufforderung. Der Text _darf nicht_ Wagenrückläufe oder Zeilenumbrüche enthalten. Beispielsweise, wenn ein Feld darauf ausgelegt ist, den Vornamen eines Benutzers zu erfassen, und seine Beschriftung "Vorname" lautet, könnte ein geeigneter Platzhalter "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrer Inhalte verursachen. Siehe [Labels](#labels) für mehr Informationen.

- `popovertarget`

  - : Macht ein `<input type="button">`-Element zu einer Popover-Steuerelement-Schaltfläche; verwendet die ID des Popover-Elements, das gesteuert werden soll. Siehe die [Popover-API](/de/docs/Web/API/Popover_API)-Startseite für weitere Details. Eine Beziehung zwischen einem Popover und seiner Invoker-Schaltfläche durch das `popovertarget`-Attribut zu etablieren, hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Invoker und platziert das Popover logisch in der Fokusnavigation durch die Tastatur, wenn es angezeigt wird. Dies macht das Popover zugänglicher für Benutzer von Bildschirmlesern und assistiven Technologien (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt ein implizites Anker-Referenz zwischen den beiden, sodass es sehr bequem ist, Popovers relativ zu ihren Steuerelementen zu positionieren, mithilfe der [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning). Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die an einem Popover-Element, das durch ein Steuerungselement `<input type="button">` gesteuert wird, ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Die Schaltfläche versteckt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits ausgeblendetes Popover zu verstecken, wird keine Aktion vorgenommen.
    - `"show"`
      - : Die Schaltfläche zeigt ein ausgeblendetes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion vorgenommen.
    - `"toggle"`
      - : Die Schaltfläche schaltet ein Popover zwischen angezeigt und versteckt um. Wenn das Popover ausgeblendet ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, wird `"toggle"` die Standardaktion sein, die von der Steuerungsschaltstelle ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht ändern können sollte. Das `readonly`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` Eingabetypen unterstützt.

    Siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) für mehr Informationen.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, bedeutet, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Besitzformular übermittelt werden kann. Das `required`-Attribut wird von den Eingaben `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Siehe die [Client-seitige Validierung](#client-seitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für mehr Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url` und `text`, bestimmt das `size`-Attribut, wie viel von der Eingabe angezeigt wird. Im Grunde erreicht das gleiche Ergebnis wie das Setzen der CSS-[`width`](/de/docs/Web/CSS/width)-Eigenschaft mit einigen Besonderheiten. Die tatsächliche Einheit des Werts hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`

  - : Gültig nur für die `image`-Eingabeschaltfläche, `src` ist ein String, der die URL der Bilddatei angibt, die angezeigt werden soll, um die grafische Absenden-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut ist eine Zahl, die die Granularität bestimmt, an die sich der Wert halten muss.

    Wenn es nicht ausdrücklich einbezogen ist:

    - `step` wird für `number` und `range` standardmäßig auf 1 gesetzt.
    - Jeder Datum-/Zeiteingabetyp hat einen Standard-`step`-Wert, der dem Typ angemessen ist; siehe die individuellen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl—ganzzahlig oder Gleitkommazahl—sein oder der spezielle Wert `any`, was bedeutet, dass kein Schritt eingeschränkt werden muss und jeder Wert (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)) erlaubt ist.

    Wenn `any` nicht ausdrücklich gesetzt ist, sind gültige Werte für die `number`-, Datum-/Zeit-Eingabetypen und `range`-Eingabetypen gleich dem Schrittfundament—dem [`min`](#min)-Wert und Inkrementen des `step`-Wertes bis zum [`max`](#max)-Wert, falls angegeben.

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Zahl, `10` oder höher, gültig. Wenn der Wert weggelassen wird, `<input type="number">`, ist jede Ganzzahl gültig, aber Gleitkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig `1` ist. Für `4.2`, gültig zu sein, müsste `step` auf `any`, 0.1, 0.2 gesetzt werden oder der `min`-Wert müsste eine Zahl sein, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten sich nicht an die Stepping-Konfiguration halten, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und entspricht dem `:invalid`-Pseudoklasse.

    Siehe die [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- `tabindex`

  - : Globales Attribut gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus aufnehmen kann (fokussierbar ist), wenn es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen, außer der Eingabe des Typs hidden, fokussierbar sind, sollte dieses Attribut nicht auf Formularsteuerungselementen verwendet werden, weil man dann die Fokusreihenfolge für alle Elemente im Dokument mit der Gefahr der Beeinträchtigung der Benutzerfreundlichkeit und Zugänglichkeit steuern müsste, wenn es falsch gemacht wird.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, enthält einen Text, der Beratungsinformationen über das zugehörige Element darstellt. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks der Formularsteuerung verwendet werden. Stattdessen sollte das {{htmlelement('label')}}-Element mit einem `for`-Attribut verwendet werden, das auf das [`id`](#id)-Attribut der Formularsteuerung gesetzt ist. Siehe [Labels](#labels) unten.

- `type`

  - : Ein String, der angibt, welcher Steuerelementtyp gerendert werden soll. Zum Beispiel, um ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben), wird der Eingabetyp `text` verwendet, was ein Nur-Text-Eingabefeld erstellt.

    Zulässige Werte sind in den [Eingabetypen](#input_types) oben aufgelistet.

- `value`

  - : Der Wert des Eingabesteuerelements. Wenn im HTML angegeben, ist das der initiale Wert, und dann kann er jederzeit durch JavaScript geändert oder abgerufen werden, indem auf die entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft `value` zugegriffen wird. Das `value`-Attribut ist immer optional, sollte aber für `checkbox`, `radio` und `hidden` als erforderlich betrachtet werden.

- `width`

  - : Nur für die `image`-Eingabeschaltfläche gültig, die `width` ist die Breite der Bilddatei, die angezeigt wird, um die grafische Absenden-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. Grundsätzlich sollten Sie sie vermeiden, es sei denn, es gibt keine Alternative.

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
        Ob wiederkehrende [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden oder nicht, um das Live-Aktualisieren von Suchergebnissen zu ermöglichen, während der Benutzer den Wert des Feldes noch bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der den Typ der Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt, während das Feld bearbeitet wird; das wird verwendet, um ein geeignetes Label für diese Taste auf einer virtuellen Tastatur zu ermitteln. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Ausrichtung des Bereichsschiebers. <strong>Nur Firefox.</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl der Elemente, die in der Drop-down-Liste der bisherigen Suchanfragen angezeigt werden sollte. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der anzeigt, ob nur ein Verzeichnis (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) von Benutzer ausgewählt werden können soll
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine Erweiterung von WebKit und Blink (also unterstützt von Safari, Opera, Chrome, etc.), die, wenn vorhanden, dem {{Glossary("user_agent", "Benutzer-Agenten")}} sagt, dass die Eingabe als Live-Suche verarbeitet wird. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzer-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Dies ermöglicht Ihrem Code das Aktualisieren der Suchergebnisse in Echtzeit, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (z.B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Rückgabe</kbd>-Taste, während das Feld bearbeitet wird).

    Das `search`-Ereignis ist so limitiert, dass es nicht öfter gesendet wird als im Implementationsabstand definiert.

- `orient` {{non-standard_inline}}

  - : Ähnlich der nicht-standardisierten CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente beeinflusst, definiert das `orient`-Attribut die Ausrichtung des Bereichschiebers. Zu den Werten gehören `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, bei dem der Bereich vertikal gerendert wird. Siehe [Erstellen vertikaler Formularsteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularsteuerungen.

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der Ihnen erlaubt, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Drop-down-Menü der vorherigen Suchanfragen des `<input>`-Elements angezeigt werden.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben ist, wird die Standard-Maximalzahl von Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-`webkitdirectory`-Attribut, wenn vorhanden, gibt an, dass nur Verzeichnisse im Datei-Auswahl-Interface vom Benutzer zur Auswahl verfügbar gemacht werden sollen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Auch wenn es ursprünglich nur für WebKit-basierte Browser implementiert wurde, kann `webkitdirectory` auch in Microsoft Edge wie auch in Firefox 50 und höher verwendet werden. Trotz der relativ breiten Unterstützung ist es noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Ebenfalls verfügbar sind die in den übergeordneten Schnittstellen spezifizierten Methoden, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Validitätsprüfungen besteht; ansonsten gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Validitätsprüfungen besteht; ansonsten gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und (wenn das Ereignis nicht abgebrochen wird) meldet das Problem an den Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Bei Elementen mit nicht auswählbarem Textinhalt (z.B. ein visueller Farbwähler oder ein Kalendardatumeingabefeld) macht diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabefelds ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabefeld auf eine gegebene Zeichenfolge. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines Text-Eingabeelements aus. Machen Sie nichts für Eingabefelder, die nicht als Texteingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Auswahler für das Eingabefeld an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins, standardmäßig, oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Eigenschaften, die nicht auf Nicht-Formularelemente anwendbar sind. Es gibt CSS-Selektoren, die gezielt Formularsteuerungen basierend auf ihren UI-Funktionen ansprechen können, auch bekannt als UI-Pseudo-Klassen. Das Input-Element kann auch nach Typ mit Attributselektoren angesprochen werden. Einige Eigenschaften sind ebenfalls besonders nützlich.

### UI-Pseudo-Klassen

<table class="no-markdown">
  <caption>
    Pseudo-Klassen, die für das
    <code>&#x3C;input></code>
    Element relevant sind:
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
        Jedes derzeit aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, hineingetippt, etc.) oder den Fokus akzeptieren kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert werden kann oder den Fokus nicht akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es ansonsten aktiviert werden könnte (ausgewählt, angeklickt, hineingetippt, etc.) oder den Fokus akzeptieren könnte, wenn es nicht deaktiviert wäre.
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
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}, bei denen das <a href="#placeholder"><code>placeholder</code></a>-Attribut vorhanden ist und die bislang keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die in einer Gruppe verwandter Elemente die Standardeinstellung sind. Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Eingabetypen, die beim Laden der Seite oder beim Rendern markiert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Eingabetypen, die derzeit ausgewählt sind (und die {{HTMLElement("option")}} in einer {{HTMLElement("select")}} derzeit ausgewählt sind).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente, deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt ist, {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle Radiobuttons mit demselben Namenwert im Formular nicht markiert sind, und {{HTMLElement("progress")}} Elemente im unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die die Validierung von Einschränkungen angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die die Validierung von Einschränkungen angewendet wird und die derzeit nicht gültig sind. Passt zu einem Formularelement, dessen Wert nicht den durch seine Attribute festgelegten Einschränkungen entspricht, wie <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute und das <a href="#step"><code>step</code></a>-Attribut festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute festgelegten Bereichsgrenzen liegt oder nicht der <a href="#step"><code>step</code></a>-Einschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut gesetzt hat. Passt nur zu Elementen, die erforderlich sein können. Das Attribut auf einem nicht erforderbaren Element führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element, das NICHT das <a href="#required"><code>required</code></a>-Attribut gesetzt hat. Passt nicht zu Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch bei Feldaustritt aktiviert. Passt auf ein ungültiges Eingabeelement, aber nur nach der Benutzerinteraktion, wie z.B. durch Fokussierung auf das Steuerungselement, Verlassen des Steuerungselements oder Versuch, das Formular mit dem ungültigen Steuerungselement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code> Elemente, die ein Auswahlfenster anzeigen, aus dem der Benutzer einen Wert auswählen kann (z.B. <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — aber nur, wenn das Element im offenen Zustand ist, d.h. wenn das Auswahlfenster angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudo-Klassen

Wir können das Label eines Kontrollkästchens basierend darauf stylen, ob das Kontrollkästchen ausgewählt ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das sofort nach einem ausgewählten `input` kommt. Wir haben keine Stile angewendet, wenn die `input`-Eingabe nicht ausgewählt ist.

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

### Attribut-Selektoren

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mit [Attribut-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS Attribut-Selektoren stimmen Elemente basierend entweder nur auf das Vorhandensein eines Attributs oder den Wert eines bestimmten Attributs überein.

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

Standardmäßig erscheint der `placeholder`-Text transluzent oder hellgrau. Das {{cssxref('::placeholder')}} Pseudo-Element ist der [`placeholder`-Text](#placeholder) der Eingabe. Es kann mit einem begrenzten Teil von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudo-Element anwendbar sind, kann in einer Regel verwendet werden, die `::placeholder` in seinem Selektor verwendet.

### appearance

Die {{cssxref("appearance")}} Eigenschaft ermöglicht es, (fast) jedem Element eine plattformnative Darstellung basierend auf dem Betriebssystemthema zu geben sowie die Entfernung jeglicher plattformnativen Gestaltung mit dem Wert `none`.

Sie könnten ein `<div>` wie ein Radio-Button aussehen lassen mit `div {appearance: radio;}` oder ein Radio wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}`, aber machen Sie es nicht.

Das Setzen von `appearance: none` entfernt plattformnative Rahmen, aber nicht die Funktionalität.

### caret-color

Eine Eigenschaft, die speziell für Texteingabeelemente gilt, ist die CSS {{cssxref("caret-color")}} Eigenschaft, mit der Sie die Farbe festlegen können, die zum Zeichnen des Texteingabecursors verwendet wird:

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

Die {{cssxref("field-sizing")}} Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie erhalten standardmäßig eine bevorzugte Standardgröße). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, sodass Formularelemente ihre Größe ändern können, um ihren Inhalt anzupassen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingaben akzeptieren (z.B. [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}} Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise nicht-textuelle Eingaben und spezialisierte Schnittstellen betreffend) ist das `<input>` Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es dies ist, können die Position und die Größe des Elements Größe und Positionierung innerhalb seines Rahmens mit den CSS {{cssxref("object-position")}} und {{cssxref("object-fit")}} Eigenschaften angepasst werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML siehe:

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels sind erforderlich, um erklärenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}} Element bietet stets geeignete erläuternde Informationen über ein Formularfeld (abgesehen von eventuellen Layoutproblemen). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugeordnete Labels

Das semantische Paaren von `<input>` und `<label>` Elementen ist nützlich für unterstützende Technologien wie Screenreader. Durch das Paaren mit dem [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) Attribut des `<label>`, binden Sie das Label an das Eingabeelement auf eine Weise, die Screenreadern ermöglicht, Eingaben den Benutzern präziser zu beschreiben.

Es reicht nicht aus, einfachen Text neben dem `<input>` Element zu haben. Vielmehr erfordert Benutzerfreundlichkeit und Zugänglichkeit die Einbeziehung eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht barrierefrei: Es besteht keine Beziehung zwischen der Aufforderung und dem `<input>` Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label einen größeren "Treffer"-Bereich für Maus- und Touchscreen-Benutzer, auf den sie klicken oder tippen können. Durch das Paaren eines `<label>` mit einem `<input>`, führt ein Klick oder Tipp auf eines der beiden zur Fokussierung des `<input>`. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu "labeln", passiert dies nicht. Das Einfügen der Aufforderung als Teil des Aktivierungsbereichs für das Eingabefeld ist hilfreich für Personen mit motorischen Störungen.

Als Webentwickler sollten wir niemals davon ausgehen, dass Menschen alles wissen, was wir wissen. Die Vielfalt der Menschen, die das Web nutzen - und damit auch Ihre Website - garantiert praktisch, dass einige Ihrer Website-Besucher aufgrund unterschiedlicher Denkmuster und/oder Umstände Ihre Formulare ohne klare und ordnungsgemäß präsentierte Labels sehr unterschiedlich interpretieren.

#### Platzhalter sind nicht barrierefrei

Das [`placeholder`](#placeholder) Attribut ermöglicht es Ihnen, Text zu spezifizieren, der innerhalb des `<input>` Elements angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und darf nicht als Ersatz verwendet werden, da es keins ist. Der Platzhalter wird verwendet, um einen Hinweis zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Der Platzhalter ist für Screenreader nicht zugänglich, und er verschwindet, sobald der Benutzer Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert hat. Browser mit automatischen Seitenübersetzungsfunktionen überspringen möglicherweise Attribute bei der Übersetzung, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nach Möglichkeit nicht. Wenn Sie ein `<input>` Element labeln müssen, verwenden Sie das {{HTMLElement("label")}} Element.

### Client-seitige Validierung

> [!WARNING]
> Die client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, überprüfen Sie sie immer auch serverseitig und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen zu stylen, basierend auf dem aktuellen Zustand jeder Eingabe, wie im Abschnitt [UI-Pseudo-Klassen](#ui-pseudo-klassen) oben erwähnt, bietet der Browser die client-seitige Validierung bei (versuchter) Formularübermittlung. Bei der Formularübermittlung wird bei einem Formularsteuerelement, das die Einschränkungsvalidierung nicht erfüllt, ein unterstützender Browser eine Fehlermeldung am ersten ungültigen Formularsteuerelement anzeigen; sei es durch die Anzeige einer Standardmeldung basierend auf dem Fehlertyp oder einer von Ihnen festgelegten Meldung.

Einige Eingabetypen und andere Attribute setzen Grenzen für die gültigen Werte, die für eine gegebene Eingabe zulässig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Es können mehrere Fehler auftreten, darunter ein `rangeUnderflow` Fehler, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn größer als 10, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Ganzzahl (nicht den Anforderungen des `step` Attributs entspricht), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Werteraum periodisch ist (also am höchsten möglichen Wert, die Werte zurück zum Anfang überschreiten, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min) Eigenschaften umgekehrt sind, was zeigt, dass der Bereich der erlaubten Werte bei `min` beginnt, dann zum niedrigsten möglichen Wert springt, und dann weitergeht, bis `max` erreicht ist. Dies ist besonders nützlich für Datums- und Zeitangaben, wie zum Beispiel, wenn Sie den Bereich von 20 Uhr bis 8 Uhr zulassen möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und ihre Werte können zu einem bestimmten Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Validitätsobjekt-Fehler hängen von den <code>&lt;input&gt;</code>
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
        Tritt auf, wenn der Wert größer als der maximale Wert ist, wie durch das <code>max</code> Attribut definiert.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code> Eigenschaft erlaubte.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner als der minimale Wert ist, wie durch das <code>min</code> Attribut definiert.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code> Eigenschaft erforderte.
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein `pattern`-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht dazu passt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code> Attribut vorhanden ist, aber der Wert <code>null</code> ist oder Radio- oder Kontrollkästchen nicht ausgewählt sind.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Das Standardinkrement ist <code>1</code>, sodass nur ganze Zahlen gültig sind, wenn `type="number"` ist, wenn `step` nicht eingeschlossen ist. <code>step="any"</code> wird diesen Fehler nie auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, z.B. eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required` Attribut hat, ist kein Wert oder ein leerer String nicht ungültig. Auch wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, wird ein leerer String nicht zu einem Fehler führen.

Wir können Grenzen festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer benachrichtigen, wenn bei der Einreichung ein Fehler vorliegt.

Neben den in der Tabelle beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen, nur lesbaren Eigenschaften `badInput`, `valid` und `customError`. Das Gültigkeitsobjekt umfasst:

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

Bei diesen booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund für das Scheitern der Validierung wahr ist, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen erfüllt.

Wenn ein Fehler auftritt, benachrichtigen unterstützende Browser den Benutzer und verhindern das Absenden des Formulars. Eine Warnung: Wenn ein benutzerdefinierter Fehler auf einen wahrheitsgemäßen Wert gesetzt wird (d.h. alles andere als ein leerer String oder `null`), wird das Absenden des Formulars verhindert. Wenn keine benutzerdefinierte Fehlermeldung vorliegt und keine der anderen Eigenschaften `true` zurückgibt, ist `valid` wahr und das Formular kann abgesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Fehlermeldung auf den leeren String setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt ist, wird das Formular nicht gesendet, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung präsentieren möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandte) Elemente verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen führen dazu, dass dies eine Standardfehlermeldung anzeigt, wenn Sie versuchen, das Formular einzureichen, ohne gültig ausgefüllt zu sein oder einen Wert zu haben, der nicht dem `pattern` entspricht.

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

Das Beispiel sieht wie folgt aus:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die `checkValidity()`-Methode über den `input`-Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst und die `invalid`-Ereignishandlerfunktion ausgeführt. Innerhalb dieser Funktion ermitteln wir, ob der Wert unzulässig ist, weil er leer ist oder weil er nicht dem Muster entspricht, indem wir eine `if ()`-Block verwenden und eine benutzerdefinierte Fehlernachricht festlegen.
- Infolgedessen, wenn der Eingabewert ungültig ist, wenn die Schaltfläche "Senden" gedrückt wird, wird eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn es gültig ist, wird es auf die erwartete Weise gesendet. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit mit dem Aufruf von `setCustomValidity()` mit einem leeren String-Wert abgebrochen werden. Wir tun dies daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Gültigkeit zuvor festgelegt wurde, wird die Eingabe als ungültig registriert, auch wenn sie derzeit einen gültigen Wert beim Absenden enthält.

> [!NOTE]
> Überprüfen Sie immer Eingabe-Einschränkungen sowohl clientseitig als auch serverseitig. Die Einschränkungsvalidierung beseitigt nicht die Notwendigkeit der Validierung auf der _Server-Seite_. Ungültige Werte können immer noch durch ältere Browser oder schlechte Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte ein proprietäres Fehlerattribut — `x-moz-errormessage` — für viele Versionen, das es Ihnen erlaubte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise festzulegen. Dies wurde ab Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>` Typen hängen vom Gebietsschema ab. In einigen Gebietsschemata ist 1.000,00 eine gültige Zahl, während in anderen Gebietsschemata die gültige Eingabemöglichkeit 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um das Gebietsschema zu bestimmen, um die Benutzereingabe zu validieren (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang` Attribut auf dem Element oder einem seiner Eltern festgelegt ist.
- Versuchen Sie die Sprache, die durch einen `Content-Language` HTTP-Header angegeben wird. Oder
- Wenn keine angegeben ist, verwenden Sie das Gebietsschema des Browsers.

## Zugänglichkeit

### Labels

Wenn Eingaben enthalten sind, ist es eine Zugänglichkeitsanforderung, Labels beizufügen. Dies ist erforderlich, damit diejenigen, die unterstützende Technologien verwenden, erkennen können, welche Funktion die Eingabe hat. Außerdem erhält ein Klick oder ein Fingertipp auf ein Label den Fokus auf das mit dem Label verknüpfte Formularelement. Dies verbessert die Zugänglichkeit und Benutzerfreundlichkeit für sehende Benutzer, erhöht den Bereich, den Benutzer klicken oder berühren können, um die Formularelemente zu aktivieren. Dies ist besonders nützlich (und sogar erforderlich) für Radiobuttons und Kontrollkästchen, die klein sind. Für weitere Informationen zu Labels im Allgemeinen siehe [Labels](#labels).

Das folgende ist ein Beispiel, wie Sie das `<label>` mit einem `<input>` Element im oben beschriebenen Stil verknüpfen können. Sie müssen dem `<input>` ein `id`-Attribut zuweisen. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert mit der `id` der Eingabe übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bieten, um sie leicht zu aktivieren. Dies hilft einer Vielzahl von Menschen, einschließlich Personen mit motorischen Einschränkungen und Personen, die ungenaue Eingabemethoden wie einen Stylus oder Finger verwenden. Eine Mindestinteraktionsgröße von 44×44 [CSS-Pixeln](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

- [Verstehen des Erfolgskriteriums 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>, aufgelistet, einreichbar, zurücksetzbares, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann ein element mit Label, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a> akzeptiert.
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
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
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
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a> wenn verwendet mit <code>aria-pressed</code>,
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
            oder <code>text</code> mit <code>list</code> Attribut: keine <code>role</code> erlaubt
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

- [Formularbeschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Versenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Wie man benutzerdefinierte Formular-Widgets erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Erstellen von vertikalen Formularsteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
