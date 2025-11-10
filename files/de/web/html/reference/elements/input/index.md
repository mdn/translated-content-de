---
title: "<input>: Das HTML-Eingabeelement"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`<input>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; eine Vielzahl von Eingabedatentypen und Steuerungswidgets sind verfügbar, abhängig vom Gerät und dem {{Glossary("user_agent", "User-Agent")}}. Das `<input>`-Element ist eines der leistungsstärksten und komplexesten in HTML aufgrund der schieren Anzahl an Kombinationen von Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich, abhängig vom Wert seines [`type`](#type)-Attributs, daher werden die verschiedenen Typen auf separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` übernommen.

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
      <td>Ein Kontrollkästchen, mit dem einzelne Werte ausgewählt oder abgewählt werden können.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Eine Steuerung zur Festlegung einer Farbe; öffnet einen Farbwähler in unterstützenden Browsern.
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
        Eine Steuerung zur Eingabe eines Datums (Jahr, Monat und Tag, ohne Zeit). Öffnet einen Datumswähler oder numerische Räder für Jahr, Monat, Tag in unterstützenden Browsern.
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
        Eine Steuerung zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumswähler oder numerische Räder für Datum- und Zeitkomponenten in unterstützenden Browsern.
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
        Eine Steuerung, die dem Benutzer erlaubt, eine Datei auszuwählen. Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Dateitypen festzulegen, die die Steuerung auswählen kann.
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
        Eine Steuerung, die nicht angezeigt wird, deren Wert jedoch an den Server gesendet wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist verborgen!
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
        Eine grafische <code>submit</code>-Schaltfläche. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert ist. Das <a href="#alt"><code>alt</code></a>-Attribut wird angezeigt, wenn das Bild <a href="#src"><code>src</code></a> fehlt.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>Eine Steuerung zur Eingabe eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Eine Steuerung zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt eine Standardvalidierung hinzu. Auf einigen Geräten mit dynamischen Tastaturen wird eine numerische Tastatur angezeigt.
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
        Einzeiliges Textfeld, dessen Wert verwischt wird. Warnt den Benutzer, wenn die Seite nicht sicher ist.
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
        Ein Optionsfeld, das es ermöglicht, einen einzigen Wert aus mehreren Optionen mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Eine Steuerung zur Eingabe einer Zahl, deren exakter Wert nicht wichtig ist. Wird als Bereichs-Widget angezeigt, das standardmäßig auf den Mittelwert eingestellt ist. Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich akzeptabler Werte zu definieren.
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
        Einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern ein Löschsymbol enthalten, mit dem das Feld geleert werden kann. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
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
        Eine Steuerung zur Eingabe einer Telefonnummer. Zeigt in einigen Geräten mit dynamischen Tastaturen eine Telefontastatur an.
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
        Der Standardwert. Einzeiliges Textfeld. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt.
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
        Eine Steuerung zur Eingabe eines Datums, bestehend aus einer Wochennummer und einer Jahrwoche, ohne Zeitzone.
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
        Eine Steuerung zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so leistungsfähig aufgrund seiner Attribute; das [`type`](#type)-Attribut, das mit Beispielen oben beschrieben wurde, ist dabei das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf dem [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interface basiert, teilen sie technisch die exakt gleichen Attributsätze. Allerdings haben die meisten Attribute in der Praxis nur Einfluss auf einen bestimmten Teil der Eingabetypen. Darüber hinaus wirkt sich die Art und Weise, wie einige Attribute auf eine Eingabe wirken, unterschiedlich auf verschiedene Eingabetypen aus.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie assoziiert sind. Diejenigen, die für die meisten oder alle Eingabetypen gemeinsam sind, werden ausführlicher unten definiert. Attribute, die bei bestimmten Eingabetypen einzigartig sind – oder Attribute, die für alle Eingabetypen üblich sind, aber spezielles Verhalten aufweisen, wenn sie auf einem bestimmten Eingabetyp verwendet werden – sind stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                                                 |
| --------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis auf den erwarteten Dateityp in Dateiupload-Steuerungen                                               |
| [`alpha`](#alpha)                             | `color`                                                                | Deckkraft der Farbe                                                                                          |
| [`alt`](#alt)                                 | `image`                                                                | Alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                              |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                               | Steuert die automatische Großschreibung im eingegebenen Text.                                                |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Buttons                             | Hinweis für Autofill-Funktion                                                                                |
| [`capture`](#capture)                         | `file`                                                                 | Eingabemethode für die Medienaufnahme in Dateiupload-Steuerungen                                             |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Ob der Befehl oder die Steuerung aktiviert ist                                                               |
| [`colorspace`](#colorspace)                   | `color`                                                                | Der {{Glossary("Color_space", "Farbraum")}}, der zur Auswahl des Farbwerts verwendet werden soll             |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfelds, um die Richtung des Elements bei der Formularübermittlung zu senden                  |
| [`disabled`](#disabled)                       | alle                                                                   | Ob das Formularelement deaktiviert ist                                                                       |
| [`form`](#form)                               | alle                                                                   | Ordnet die Steuerung einem Formularelement zu                                                                |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL für die Formularübermittlung                                                                             |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Formulardatensatz-Codierungstyp für die Formularübermittlung                                                 |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | HTTP-Methode für die Formularübermittlung                                                                    |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Umgehung der Formularvalidierung für die Formularübermittlung                                                |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browsing-Kontext für die Formularübermittlung                                                                |
| [`height`](#height)                           | `image`                                                                | Entspricht dem Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                                 |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Buttons       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsoptionen                     |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Maximaler Wert                                                                                               |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Länge (Anzahl der Zeichen) des `value`                                                              |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Minimaler Wert                                                                                               |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Länge (Anzahl der Zeichen) des `value`                                                              |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolean. Ob mehrere Werte erlaubt sind                                                                       |
| [`name`](#name)                               | alle                                                                   | Name des Formularsteuerelements. Wird zusammen mit dem Formular als Teil eines Namen/Wert-Paars übermittelt. |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, das `value` erfüllen muss, um gültig zu sein                                                         |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der im Formularelement erscheint, wenn kein Wert gesetzt ist                                           |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Designiert ein `<input type="button">` als Steuerelement für ein Popover-Element                             |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                             |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolean. Der Wert ist nicht bearbeitbar                                                                      |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss überprüft werden, um das Formular absendbar zu machen           |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe der Steuerung                                                                                          |
| [`src`](#src)                                 | `image`                                                                | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                          |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Inkrementelle gültige Werte                                                                                  |
| [`type`](#type)                               | alle                                                                   | Typ des Formularelements                                                                                     |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht dies dem Anfangswert                              |
| [`width`](#width)                             | `image`                                                                | Entspricht dem Breitenattribut für {{htmlelement('img')}}                                                    |

Einige zusätzliche nicht-standardisierte Attribute werden nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)

  - : Gültig nur für den `file`-Eingabetyp, das `accept`-Attribut legt fest, welche Dateitypen in einer `file`-Upload-Steuerung auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alpha` {{experimental_inline}}

  - : Gültig nur für den `color`-Eingabetyp, das `alpha`-Attribut ermöglicht es dem Endbenutzer, die Deckkraft der ausgewählten Farbe festzulegen.

- `alt`

  - : Gültig nur für den `image`-Button, das `alt`-Attribut bietet einen Alternativtext für das Bild und zeigt den Wert des Attributs an, wenn das Bild [`src`](#src) fehlt oder anderweitig nicht geladen wird. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Siehe die [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) Globale Attribute-Seite für mehr Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert einen Leerzeichen-getrennten String an, der beschreibt, welche, wenn überhaupt, Art von Autovervollständigungsfunktionalität die Eingabe bieten soll. Eine typische Implementierung für Autovervollständigung erinnert sich an zuvor eingetragene Werte in dasselbe Eingabefeld, aber komplexere Formen der Autovervollständigung können existieren. Beispielsweise könnte ein Browser mit einer Geräteliste für Autovervollständigung für E-Mail-Adressen in einem E-Mail-Eingabefeld integrieren. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig bei `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, da es für alle Eingabetypen außer `checkbox`, `radio`, `file` oder eine der Schaltflächen gültig ist.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` sich leicht beim `hidden`-Typ von den anderen Eingabetypen unterscheidet.

- `autofocus`

  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass die Eingabe automatisch den Fokus haben soll, wenn die Seite fertig geladen wurde (oder wenn das {{HTMLElement("dialog")}}-Element, das das Element enthält, angezeigt wird).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element gesetzt wird, erhält das erste Element mit diesem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Automatisches Fokussieren auf ein Formularelement kann Menschen mit Sehbehinderungen, die Bildschirmlesetechnologie nutzen, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihre Benutzer zu der Formsteuerung, ohne sie vorher zu warnen.

    Verwenden Sie das `autofocus`-Attribut mit überlegter Berücksichtigung der Zugänglichkeit. Das automatische Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch auf einigen Touch-Geräten dazu führen, dass dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label der fokussierten Formsteuerung ankündigt, wird der Bildschirmleser nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird den durch den vorhergehenden Inhalt geschaffenen Kontext ebenfalls verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)

  - : Eingeführt in der HTML-Medienaufnahme-Spezifikation und gültig nur für den `file`-Eingabetyp, das `capture`-Attribut definiert, welches Medien – Mikrofon, Video oder Kamera – zum Aufnehmen einer neuen Datei für den Upload mit der `file`-Upload-Steuerung verwendet werden sollten. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `checked`

  - : Gültig für beide `radio`- und `checkbox`-Typen, `checked` ist ein Boolean-Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass der Radiobutton der derzeit ausgewählte in der Gruppe der gleichnamigen Radiobuttons ist. Wenn `checked` bei einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig (beim Laden der Seite) aktiviert ist. Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn sich der Status des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`-`s`sm checked](/de/docs/Web/API/HTMLInputElement) IDL-Attribut wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabekontrollen werden der Wert eines Kontrollkästchens und eines Radiobuttons nur gesendet, wenn sie derzeit `checked` sind. Wenn sie das sind, werden der Name und der Wert der aktivierten Kontrollen gesendet.
    >
    > Wenn zum Beispiel ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, enthält die gesendete Formular-Daten `fruit=cherry`. Wenn das Kontrollkästchen nicht aktiv ist, ist es in den Formulardaten überhaupt nicht aufgeführt. Der Standardwert für Kontrollkästchen und Radiobuttons ist `on`.

- `colorspace` {{experimental_inline}}

  - : Gültig nur für den `color`-Eingabetyp, das `colorspace`-Attribut gibt den {{Glossary("Color_space", "Farbraum")}} an, der vom `type="color"`-Eingabefeld verwendet wird. Mögliche {{Glossary("enumerated", "Aufzählungswerte")}} sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies umfasst [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) und {{cssxref("hex-color")}}-Werte. Der Farbwert ist auf 8-Bits pro `r`-, `g`- und `b`-Komponente beschränkt. Dies ist der Standard.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3-Farbraum")}}, z.B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)

  - : Gültig für die Eingabetypen `hidden`, `text`, `search`, `url`, `tel` und `email`, ermöglicht das `dirname`-Attribut die Übermittlung der Textausrichtung des Elements. Wenn es enthalten ist, werden mit der Formsteuerung zwei Name/Wert-Paare übermittelt: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das obige Formular übermittelt wird, führt die Eingabe dazu, dass sowohl das `name`/`value`-Paar `fruit=cherry` als auch das `dirname`/`direction`-Paar `fruit-dir=ltr` gesendet werden.
    Für weitere Informationen siehe das [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)

  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren sollte. Deaktivierte Eingaben werden typischerweise in einer schwächeren Farbe oder mit einer anderen Form von Hinweis darauf dargestellt, dass das Feld nicht verwendet werden kann.

    Insbesondere empfangen deaktivierte Eingaben das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis nicht, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Auch wenn es von der Spezifikation nicht erforderlich ist, wird Firefox standardmäßig den dynamischen deaktivierten Status eines `<input>` über Seitenladevorgänge hinweg [beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)

  - : Eine Zeichenkette, die das {{HTMLElement("form")}}-Element spezifiziert, mit dem die Eingabe verbunden ist (d.h. ihr **Formulareigentümer**). Der Wert dieser Zeichenkette, falls vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächstgelegenen umschließenden Formular verknüpft, falls vorhanden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe an beliebiger Stelle im Dokument zu platzieren, aber sie in einem Formular an einer anderen Stelle im Dokument einzuschließen.

    > [!NOTE]
    > Eine Eingabe kann nur einem Formular zugeordnet werden.

- `formaction`

  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.

- `formenctype`

  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.

- `formmethod`

  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.

- `formnovalidate`

  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.

- `formtarget`

  - : Gültig nur für die `image`- und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.

- `height`

  - : Gültig nur für den `image`-Eingabe-Button, die `height` ist die Höhe der Bilddatei, die als grafischer Absende-Button angezeigt werden soll. Weitere Informationen finden Sie im {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `id`

  - : Globales Attribut, das für alle Elemente, einschließlich aller Eingabetypen, gültig ist und eine eindeutige Kennung (ID) definiert, die im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element bei der Verlinkung zu identifizieren. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um das Label mit dem Formsteuerelement zu verknüpfen. Weitere Informationen finden Sie im {{htmlelement('label')}}-Element.

- `inputmode`

  - : Globaler Wert, der für alle Elemente gültig ist und einen Hinweis an Browser zur Art der virtuellen Tastaturkonfiguration gibt, die beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Werte beinhalten `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.

- `list`

  - : Der Wert, der dem `list`-Attribut zugewiesen ist, sollte die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements sein. Die `<datalist>` liefert eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](#type) nicht kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut den Spezifikationen wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder einer der Schaltflächen unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Ticks entlang einer Reichweite oder sogar eine Eingabe, die wie ein {{HTMLElement("select")}} geöffnet wird, aber es den Eintritt weiterer nicht aufgeführter Werte ermöglicht. Besuchen Sie die [Browser-Kompatibilität-Tabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen.

    Weitere Informationen finden Sie im {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den größten Wert innerhalb des Bereichs der zulässigen Werte. Wenn der in das Element eingetragene [`value`](#value) mehr als dieser ist, scheitert das Element an der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation). Wenn der Wert des `max`-Attributs keine Zahl ist, dann hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (wie für Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was bedeutet, dass der Bereich übergehen kann; zum Beispiel ermöglicht dies die Angabe eines Zeitbereichs von 22 Uhr bis 4 Uhr.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die maximale Zeichenfolgelänge (gemessen in {{Glossary("UTF-16", "UTF-16_Code-Einheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben oder ein ungültiger Wert spezifiziert ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe wird an der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) scheitern, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` {{Glossary("UTF-16", "UTF-16_Code-Einheiten")}} ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als das `maxlength`-Attribut erlaubt. Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den kleinsten Wert innerhalb des Bereichs der zulässigen Werte. Wenn der in das Element eingetragene [`value`](#value) weniger als dieser ist, scheitert das Element an der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation). Wenn der Wert des `min`-Attributs keine Zahl ist, dann hat das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht spezifiziert oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht-leerer Wert geringer ist als das Minimum, das vom `min`-Attribut erlaubt wird, verhindert die Einschränkungsvalidierung die Formularübermittlung. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

    Es gibt einen Sonderfall: wenn der Datentyp periodisch ist (wie für Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was bedeutet, dass der Bereich übergehen kann; zum Beispiel ermöglicht dies die Angabe eines Zeitbereichs von 22 Uhr bis 4 Uhr.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die minimale Zeichenfolgelänge (gemessen in {{Glossary("UTF-16", "UTF-16_Code-Einheiten")}}), die der Benutzer in das Eingabefeld eingetragen kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert spezifiziert ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe wird an der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) scheitern, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16_Code-Einheiten")}} ist, was die Formularübermittlung verhindert. Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)

  - : Das Boolean-`multiple`-Attribut, wenn gesetzt, bedeutet, dass der Benutzer durch Kommas getrennte E-Mail-Adressen in das E-Mail-Widget eingeben oder mehr als eine Datei mit dem `file`-Eingang auswählen kann. Siehe den {{HTMLElement("input/email", "email")}}- und den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `name`

  - : Eine Zeichenkette, die einen Namen für das Eingabesteuerelement spezifiziert. Dieser Name wird zusammen mit dem Wert der Steuerung gesendet, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name`-Attribut als obligatorisch (auch wenn er es nicht ist). Wenn eine Eingabe keinen spezifizierten `name` hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular gesendet! (Deaktivierte Steuerelemente, nicht ausgewählte Radiobuttons, nicht aktivierte Kontrollkästchen und Zurücksetz-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn es als Name eines `<input>`-Elements des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "User-Agent")}} auf die zur Übermittlung des Formulars verwendete Zeichenkodierung gesetzt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut schafft ein einzigartiges Verhalten für Radiobuttons.

    Nur ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons kann gleichzeitig ausgewählt werden. Wenn ein Radiobutton in dieser Gruppe ausgewählt wird, werden alle anderen derzeit ausgewählten Radiobuttons in derselben Gruppe automatisch abgewählt. Der Wert dieses einen ausgewählten Radiobuttons wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird,

    Wenn durch eine Serie gleichnamiger Gruppen von Radiobuttons getabt wird und einer ausgewählt ist, erhält dieser den Fokus. Wenn sie nicht in der Quellreihenfolge gruppiert sind, wenn einer der Gruppe ausgewählt ist, beginnt das Tabben in die Gruppe, wenn der erste der Gruppe erreicht wird, und überspringt alle, die nicht ausgewählt sind. Mit anderen Worten, wenn einer ausgewählt ist, überspringt das Tabben die nicht ausgewählten Radiobuttons in der Gruppe. Wenn keiner ausgewählt ist, erhält die Radiobutton-Gruppe den Fokus, wenn der erste der gleichnamigen Gruppe erreicht wird.

    Sobald einer der Radiobuttons in einer Gruppe den Fokus hat, wird mit den Pfeiltasten durch alle Radiobuttons des gleichen Namens navigiert, auch wenn die Radiobuttons nicht zusammen in der Quellreihenfolge angeordnet sind.

    Wenn ein Eingabeelement einen `name` erhält, wird dieser Name zu einer Eigenschaft des [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigentums des Eigentümerformulars. Wenn Sie eine Eingabe haben, deren `name` auf `guest` gesetzt ist, und eine andere, deren `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wird, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld und `hatSize` das Objekt für das `hat-size`-Feld sein.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer eingebauten Eigenschaft des Formulars entspricht, da Sie dann die vordefinierte Eigenschaft oder Methode mit dieser Referenz auf das entsprechende Eingabeelement überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, das `pattern`-Attribut wird verwendet, um einen regulären Ausdruck zu kompilieren, dem der [`value`](#value) der Eingabe entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie sie vom {{jsxref("RegExp")}}-Typ verwendet werden, und wie sie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert sind. Keine Schrägstriche sollten um den Mustertetailssatz angegeben werden. Beim Kompilieren des regulären Ausdrucks:

    1. das Muster wird implizit mit `^(?:` und `)$` umgeben, sodass der Abgleich gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. das `'v'`-Flag wird angegeben, sodass das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht spezifiziert ist oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht-leerer Wert nicht dem Muster entspricht, verhindert die Einschränkungsvalidierung die Formularübermittlung. Wenn die [`multiple`](#multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden durch Kommas getrennten Wert abgeglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format durch Hinzufügen von erläuterndem Text in der Nähe. Sie können auch ein [`title`](#title)-Attribut einschließen, um zu erläutern, welche Anforderungen erfüllt werden müssen, um das Muster zu entsprechen; die meisten Browser werden diesen Titel als Tooltip anzeigen. Die sichtbare Erklärung ist erforderlich für Barrierefreiheit. Der Tooltip ist eine Erweiterung.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis für den Benutzer, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder ein kurzer Satz sein, der einen Hinweis auf den erwarteten Datentyp gibt, anstatt einer Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Wenn erwartet wird, dass ein Feld den Vornamen eines Benutzers aufzeichnet und sein Label "Vorname" lautet, könnte eine geeignete Platzhalteranzeige "z.B., Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Wege, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt hervorrufen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`

  - : Wandelt ein `<input type="button">`-Element in einen Popover-Steuerungsknopf um; nimmt die ID des zu steuernden Popover-Elements als Wert. Weitere Details finden Sie auf der [Popover-API](/de/docs/Web/API/Popover_API)-Landeseite. Die Einrichtung einer Beziehung zwischen einem Popover und seinem Auslöserknopf mit dem `popovertarget`-Attribut hat zwei weitere nützliche Wirkungen:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Reihenfolge der Tastaturfokus-Navigation, wenn es angezeigt wird. Dies macht das Popover zugänglicher für Tastaturnutzer und Benutzer von unterstützenden Technologien (AT-Nutzer) (siehe auch [Popover-Accessibility-Features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen dem Popover und seiner Steuerung, was es sehr bequem macht, Popover durch [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) relativ zu ihren Steuerungen zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die von einem kontrollierenden Popover-Element `<input type="button">` ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Der Knopf wird ein sichtbares Popover ausblenden. Wenn Sie versuchen, ein bereits ausgeblendetes Popover auszublenden, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Knopf wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Knopf wird ein Popover zwischen angezeigten und versteckten Zuständen umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)

  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten können sollte. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Für weitere Informationen siehe das [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe spezifizieren muss, bevor das Eigentümerformular gesendet werden kann. Das `required`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Für weitere Informationen siehe [Client-seitige Validierung](#client-seitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required).

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url` und `text`, das `size`-Attribut spezifiziert, wie viel der Eingabe angezeigt wird. Grundsätzlich erzeugt es dasselbe Ergebnis wie das Setzen der CSS-[`width`](/de/docs/Web/CSS/Reference/Properties/width)-Eigenschaft mit ein paar Besonderheiten. Die tatsächliche Einheit des Werts hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere ist es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`

  - : Gültig nur für den `image`-Eingabe-Button, das `src` ist ein String, der die URL der Bilddatei angibt, die als grafischer Absende-Button angezeigt werden soll. Weitere Informationen finden Sie im {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss. Es sind nur Werte gültig, die ein ganzzahliger Vielfaches der Schritte des Step-Basiswerts sind. Die Step-Basis ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), wenn angegeben, [`value`](#value) ansonsten, oder `0`, wenn keines der beiden angegeben ist (außer für `week`, das eine Standard-Step-Basis von −259,200,000 hat, was dem Beginn der Woche `1970-W01` entspricht).

    Wenn nicht explizit eingeschlossen:

    - `step` hat standardmäßig den Wert 1 für `number` und `range`.
    - Jeder Eingabetyp für Datum/Uhrzeit hat einen Standard-`step`-Wert, der für den Typ angemessen ist; siehe die individuellen Eingabe-Seiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein – ganze Zahl oder Gleitkommazahl – oder der spezielle Wert `any`, was bedeutet, dass kein Schritt erforderlich ist und jeder Wert zulässig ist (mit Ausnahme anderer Beschränkungen, wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede ganze Zahl oder größer, `10` oder mehr, gültig. Wenn ausgelassen, `<input type="number">`, ist jede ganze Zahl gültig, aber Gleitkommazahlen (wie `4.2`) sind nicht gültig, weil `step` standardmäßig `1` ist. Für `4.2` gültig zu sein, hätte `step` auf `any`, 0.1, 0.2 gesetzt werden müssen, oder der `min`-Wert hätte eine Zahl sein müssen, die mit `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht mit der Step-Konfiguration übereinstimmen, wird der Wert bei der Einschränkungsvalidierung als ungültig angesehen und wird die `:invalid`-Pseudoklasse treffen.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- `tabindex`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus erhalten kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen sollte. Da alle Eingabetyps mit Ausnahme der versteckten eingabefokussierbaren sind, sollte dieses Attribut nicht auf Formularelementen verwendet werden, da dies die Verwaltung der Fokussierreihenfolge für alle Elemente im Dokument erfordern würde, mit dem Risiko, die Benutzerfreundlichkeit und Barrierefreiheit zu beeinträchtigen, wenn es falsch gemacht wird.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text enthält, der beratende Informationen im Zusammenhang mit dem Element darstellt, zu dem es gehört. Solche Informationen können typischerweise, aber nicht unbedingt, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks des Formsteuerelements verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut des Steuerelements gesetzt wird. Siehe [Labels](#labels) unten.

- `type`

  - : Eine Zeichenkette, die den Typ des zu rendernden Steuerelements angibt. Um beispielsweise ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn ausgelassen (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet, wodurch ein Klartext-Eingabefeld erstellt wird.

    Zulässige Werte sind in den [Eingabetypen](#input_types) weiter oben aufgeführt.

- `value`

  - : Der Wert des Eingabesteuerelements. Wenn es im HTML angegeben wird, ist dies der anfängliche Wert, und von nun an kann es jederzeit mit JavaScript geändert oder abgerufen werden, indem auf die `value`-Eigenschaft des entsprechenden [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts zugegriffen wird. Das `value`-Attribut ist immer optional, sollte jedoch für `checkbox`, `radio` und `hidden` als verpflichtend angesehen werden.

- `width`
  - : Gültig nur für den `image`-Eingabe-Button, die `width` ist die Breite der Bilddatei, die als grafischer Absende-Button angezeigt werden soll. Weitere Informationen finden Sie im {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie sie vermeiden, es sei denn, es ist nicht anders möglich.

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
        Ob oder nicht wiederholt [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, um Live-Suchergebnisse zu aktualisieren, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der angibt, welche Art von Aktion ausgeführt wird, wenn der Benutzer die <kbd>Eingabetaste</kbd> oder <kbd>Return-Taste</kbd> drückt, während er das Feld bearbeitet; dies wird verwendet, um eine geeignete Bezeichnung für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Ausrichtung des Bereichreglers. <strong>Nur Firefox.</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Einträgen, die in der Dropdown-Liste früherer Suchanfragen angezeigt werden sollten. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob nur das Auswählen eines Verzeichnisses (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) dem Benutzer möglich gemacht werden soll.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome, etc.), die, falls vorhanden, dem {{Glossary("user_agent", "User-Agent")}} vorgibt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Dies ermöglicht es Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explicit ein Suchvorgang auslöst (wie etwa durch Drücken der <kbd>Eingabetaste</kbd> oder <kbd>Return-Taste</kbd>, während er das Feld bearbeitet).

    Das `search`-Ereignis wird so rate-begrenzt, dass es nicht häufiger gesendet wird als ein implementierungsdefiniertes Intervall.

- `orient` {{non-standard_inline}}

  - : Ähnlich der nicht-standardisierten -moz-orient CSS-Eigenschaft, die die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente betrifft, definiert das `orient`-Attribut die Ausrichtung des Bereichreglers. Werte beinhalten `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Erstellen vertikaler Formkontrollen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) für einen modernen Ansatz zum Erstellen vertikaler Formkontrollen.

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut wird nur von Safari unterstützt und ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die in der nativen Dropdown-Menueingabe des `<input>`-Elements vorheriger Suchanfragen angezeigt werden sollen.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert vorhanden ist, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-`webkitdirectory`-Attribut, falls vorhanden, gibt an, dass der Benutzer nur Verzeichnisse in der Dateiauswahloberfläche auswählen darf. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später nutzbar. Auch wenn es eine relativ breite Unterstützung hat, ist es dennoch nicht standardisiert und sollte nur verwendet werden, wenn Sie keine alternative Lösung haben.

## Methoden

Die folgenden Methoden werden durch das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interface bereitgestellt, das `<input>` Elemente im DOM repräsentiert. Auch verfügbar sind die Methoden, die von den übergeordneten Interfaces, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget), spezifiziert werden.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben und ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis wird am Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben, ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis am Element ausgelöst und (falls das Ereignis nicht abgebrochen wird) das Problem dem Benutzer gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>` Elements aus, wenn der Inhalt wählbar ist. Bei Elementen ohne wählbaren Textinhalt (wie zum Beispiel visuelle Farbwähler oder Kalenderdatums-Eingaben) macht diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine gegebene Zeichenkette. Ein `selectMode` Parameter steht zur Verfügung, um zu steuern, wie der vorhandene Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines textuellen Eingabeelements aus. Macht nichts für Eingaben, die nicht als Texteingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Wähler für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, jedoch durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Eingaben, die ersetzte Elemente sind, haben einige Merkmale, die auf Nicht-Formular-Elemente nicht anwendbar sind. Es gibt CSS-Selektoren, die speziell auf Formularsteuerelemente basierend auf ihren UI-Merkmalen, auch bekannt als UI-Pseudoklassen, abzielen können. Das Eingabeelement kann auch nach Typ mit Attributselektoren anvisiert werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

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
        Jedes derzeit aktivierbare Element, das aktiviert werden kann (ausgewählt, angeklickt werden, eingetippt werden, etc.) oder Fokus akzeptiert und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert werden oder Fokus akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierbaren Zustand hat, was bedeutet, dass es ansonsten aktiviert werden (ausgewählt, angeklickt werden, eingetippt werden, etc.) oder Fokus akzeptieren könnte, wenn es nicht deaktiviert wäre.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element, das vom Benutzer nicht bearbeitbar ist</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitbar ist.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code> Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elemente mit dem <a href="#placeholder"><code>placeholder</code></a> Attribut, das bisher keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die in einer Gruppe von verwandten Elementen der Standard sind. Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Eingabetypen, die beim Seitenladen oder beim Rendern ausgewählt waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Eingabetypen, die derzeit ausgewählt sind (und der {{HTMLElement("option")}} in einem {{HTMLElement("select")}}, die derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente, deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt ist, {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle Radiobuttons mit dem gleichen Namenwert im Formular nicht ausgewählt sind, und {{HTMLElement("progress")}} Elemente im indeterminierten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die eine Gültigkeitsprüfung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die eine Gültigkeitsprüfung angewendet wurde und die derzeit nicht gültig sind. Passt zu einem Formularelement, dessen Wert nicht den durch seine Attribute festgelegten Einschränkungen entspricht, wie z.B. <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute und die <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute festgelegten Bereichsgrenzen liegt oder nicht den <a href="#step"><code>step</code></a> Einschränkungen entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut eingestellt hat. Passt nur auf Elemente, die erforderlich sein können. Das Attribut, das auf ein nicht erforderliches Element angewendet wird, führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut nicht eingestellt hat. Passt nicht auf Elemente, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch bei Verlassen aktiviert. Passt zu ungültigen Eingaben, jedoch nur nach Benutzerinteraktion, wie z.B. durch Fokussieren auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular mit dem ungültigen Steuerelement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code> Elemente, die einen Wähler anzeigen, aus dem der Benutzer einen Wert auswählen kann (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — aber nur, wenn das Element im offenen Zustand ist, d.h. wenn der Wähler angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können ein Kontrollkästchen-Label basierend darauf stylen, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das direkt nach einer aktivierten Eingabe kommt. Wir haben keine Stile angewendet, wenn die `input` nicht aktiviert ist.

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

Es ist möglich, verschiedene Typen von Formular-Steuerelementen basierend auf ihrem [`type`](#type) zu adressieren, indem man [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) verwendet. CSS-Attributselektoren passen zu Elementen basierend auf entweder nur der Anwesenheit eines Attributs oder dem Wert eines gegebenen Attributs.

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

Standardmäßig erscheint der Platzhaltertext als durchscheinend oder hellgrau. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder` Text](#placeholder) der Eingabe. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement angewendet werden können, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### caret-color

Eine spezifische Eigenschaft, die sich auf texteingabebezogene Elemente bezieht, ist die CSS-Eigenschaft {{cssxref("caret-color")}}, die es ermöglicht, die Farbe zu setzen, die zum Zeichnen des Texteingabecursors verwendet wird:

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

### Feldgröße

Die {{cssxref("field-sizing")}} Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie haben standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, sodass Formularelemente in der Größe an ihren Inhalt angepasst werden.

Diese Eigenschaft wird üblicherweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt einschränken und wachsen, während mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingaben akzeptieren (z.B. [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file), und {{htmlelement("textarea")}} Elemente.

### object-position and object-fit

In bestimmten Fällen (typischerweise nicht-textuelle Eingaben und spezialisierte Schnittstellen betreffend) ist das `<input>` Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es das ist, können die Position und Größe innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen darüber, wie man Elemente in HTML einfärbt, siehe:

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color).

Siehe auch:

- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Zusätzliche Funktionen

### Labels

Labels werden benötigt, um unterstützenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}} Element bietet erklärende Informationen über ein Formularfeld, das _immer_ angebracht ist (abgesehen von etwaigen Layout-Bedenken). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugehörige Labels

Die semantische Paarung von `<input>` und `<label>` Elementen ist nützlich für unterstützende Technologien wie Bildschirmleser. Indem man sie mit dem [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) Attribut des `<label>` verbindet, verknüpfen Sie das Label mit der Eingabe so, dass Bildschirmleser Eingaben den Benutzern präziser beschreiben können.

Es reicht nicht aus, nur einfachen Text neben das `<input>` Element zu setzen. Vielmehr erfordert die Benutzbarkeit und Zugänglichkeit die Aufnahme eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere Zielzone für Maus- und Touchscreen-Nutzer zum Klicken oder Berühren. Indem ein `<label>` mit einem `<input>` verbunden wird, wird entweder durch Klicken auf das eine oder das andere die `<input>` fokussiert. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu "labeln", passiert das nicht. Die Eingabeaufforderung als Teil des Aktivierungsbereichs des Eingabefelds zu haben, ist hilfreich für Personen mit motorischen Kontrollbedingungen.

Als Webentwickler ist es wichtig, dass wir nie davon ausgehen, dass Menschen all das wissen, was wir wissen. Die Vielfalt der Menschen, die das Web nutzen—und in der Erweiterung Ihre Website—garantiert praktisch, dass einige Ihrer Webseitenbesucher Abweichungen in den Denkprozessen und/oder Umständen haben, die sie dazu führen, Ihre Formulare ohne klar und korrekt präsentierte Labels sehr unterschiedlich zu interpretieren.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder) Attribut ermöglicht es Ihnen, Text anzugeben, der im Inhaltsbereich des `<input>` Elements selbst erscheint, wenn es leer ist. Der Platzhalter sollte nie erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil er es nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Der Platzhalter ist nicht nur für Bildschirmleser nicht zugänglich, sondern verschwindet auch, sobald der Benutzer einen Text in das Formularelement eingibt, oder wenn das Formularelement bereits einen Wert hat. Browser mit automatischen Seitenübersetzungsfunktionen können Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder) Attribut nur, wenn es unvermeidlich ist. Wenn Sie ein `<input>` Element kennzeichnen müssen, verwenden Sie das {{HTMLElement("label")}} Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, überprüfen Sie diese _immer_ auch auf der Serverseite und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Neben der Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Stati basierend auf dem aktuellen Zustand jeder Eingabe zu gestalten, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben beschrieben, bietet der Browser eine Client-seitige Validierung bei einer (versuchten) Formularübermittlung. Bei der Eingabe, wenn ein Formularelement vorhanden ist, das nicht den Einschränkungen entspricht, werden unterstützende Browser eine Fehlermeldung an dem ersten fehlerhaften Formularelement anzeigen; eine Standardmeldung basierend auf dem Fehlerdatum oder eine von Ihnen festgelegte Nachricht.

Einige Eingabetypen und andere Attribute setzen Grenzen auf, welche Werte für eine gegebene Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler könnten auftreten, darunter ein `rangeUnderflow` Fehler, wenn der Wert weniger als 2 ist, `rangeOverflow` wenn größer als 10, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Zahl (entspricht nicht den Anforderungen des `step` Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich möglicher Werte periodisch ist (d.h. bei dem höchsten möglichen Wert, die Werte wieder zurück zum Anfang eingerollt werden, anstatt zu enden), können die Werte der [`max`](#max) und [`min`](#min) Eigenschaften umgedreht werden, was anzeigt, dass der Bereich der erlaubten Werte bei `min` beginnt, zurück zum niedrigsten möglichen Wert rollt und dann weitergeht, bis `max` erreicht wird. Dies ist besonders nützlich für Daten und Zeiten, wie wenn Sie den Bereich von 20:00 Uhr bis 8:00 Uhr erlauben möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und deren Werte können zu einem spezifischen Fehler in [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Gültigkeitsobjektfehler hängen von den <code>&lt;input&gt;</code>
    Attributen und deren Werten ab:
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
        Tritt auf, wenn der Wert größer ist als der maximale Wert, wie durch das <code>max</code> Attribut definiert
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch das <code>maxlength</code> Attribut erlaubte Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der minimale Wert, wie durch das <code>min</code> Attribut definiert
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch das <code>minlength</code> Attribut benötigte Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Musterattribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code> Attribut vorhanden, aber der Wert <code>null</code> ist, oder wenn ein Radio oder ein Kontrollkästchen nicht aktiviert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schritt-Inkrement. Das Standard-Inkrement beträgt <code>1</code>, sodass nur ganze Zahlen gültig sind, wenn <code>type="number"</code> ist, falls der Schritt nicht enthalten ist. <code>step="any"</code> wird diesen Fehler nie auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht dem richtigen Typ entspricht, zum Beispiel eine E-Mail enthält kein <code>@</code> oder eine URL hat kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required` Attribut hat, ist kein Wert oder eine leere Zeichenkette nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, führt eine leere Zeichenkette nicht zu einem Fehler - mit Ausnahme von `required`.

Wir können Limits festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden nativ diese Formularwerte validieren und den Benutzer benachrichtigen, wenn beim Versand ein Fehler auftritt.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält das `validityState` Interface die Boolean-Leseeigenschaften `badInput`, `valid`, und `customError`. Das Gültigkeitsobjekt beinhaltet:

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

Für jede dieser Boolean-Eigenschaften bedeutet ein Wert von `true`, dass der spezifizierte Grund, warum die Validierung fehlgeschlagen ist, zutrifft, mit Ausnahme der `valid` Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen einhält.

Wenn ein Fehler vorliegt, werden unterstützende Browser sowohl den Benutzer warnen als auch verhindern, dass das Formular abgesendet wird. Ein Hinweis der Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen wahrheitswertigen Wert gesetzt wird (alles außer dem leeren String oder `null`), wird das Formular daran gehindert, abgeschickt zu werden. Wenn keine benutzerdefinierte Fehlermeldung vorhanden ist und keine der anderen Eigenschaften true zurückgibt, wird `valid` true, und das Formular kann abgesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Gültigkeitsmeldung auf den leeren String setzt, ist wichtig. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt wird, wird es so lange nicht abgeschickt, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandten) Elementen verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen werden dies dazu bringen, eine Standardfehlermeldung anzuzeigen, wenn Sie versuchen, das Formular zu übermitteln, ohne ein gültiges Feld auszufüllen oder ein Muster nicht zu entsprechen.

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

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sein Wert geändert wird, indem wir die `checkValidity()` Methode über den `input` Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid` Ereignis ausgelöst und die `invalid` Ereignishandlerfunktion ausgeführt. Innerhalb dieser Funktion bestimmen wir, ob der Wert ungültig ist, weil er leer ist oder, weil er das Muster nicht erfüllt, mithilfe eines `if ()` Blocks und setzen eine benutzerdefinierte Gültigkeitsfehlermeldung.
- Infolgedessen wird, wenn der Eingabewert beim Drücken der Senden-Schaltfläche ungültig ist, eine der benutzerdefinierten Meldungen angezeigt.
- Wenn er gültig ist, wird es, wie erwartet, abgesendet. Dafür muss die benutzerdefinierte Gültigkeit abgebrochen werden, indem `setCustomValidity()` mit einem leeren String aufgerufen wird. Wir tun dies deshalb jedes Mal, wenn das `input` Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Gültigkeit zuvor gesetzt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie derzeit beim Versand einen gültigen Wert enthält.

> [!NOTE]
> Validieren Sie immer Eingabe-Constraints sowohl clientseitig als auch serverseitig. Constraint-Validierung beseitigt nicht die Notwendigkeit der Validierung auf der _Server-Seite_. Ungültige Werte können immer noch von älteren Browsern oder durch schlechte Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte viele Versionen lang ein proprietäres Fehlerattribut — `x-moz-errormessage` —, das es Ihnen ermöglicht hat, benutzerdefinierte Fehlermeldungen auf ähnliche Weise zu setzen. Seit Version 66 wurde dies entfernt (siehe [Firefox-Fehler 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>` Typen hängen von der Sprache ab. In einigen Sprachen sind 1.000,00 eine gültige Zahl, während in anderen Sprachen die gültige Art, diese Zahl einzugeben, 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Sprache zu bestimmen, um die Eingaben des Benutzers zu validieren (zumindest für `type="number"`):

- Versuch die Sprache, die durch ein `lang`/`xml:lang` Attribut auf dem Element oder irgendeinem seiner Eltern angegeben wird.
- Versuch die Sprache, die durch einen `Content-Language` HTTP Header spezifiziert wird. Oder,
- Verwenden Sie die Sprache des Browsers, wenn keine angegeben ist.

## Barrierefreiheit

### Labels

Bei der Einbindung von Eingaben ist es eine Barrierefreiheitserfordernis, Labels hinzuzufügen. Dies ist erforderlich, damit diejenigen, die unterstützende Technologien verwenden, wissen, wofür die Eingabe ist. Außerdem wird durch Klicken oder Berühren eines Labels das zugehörige Formularelement fokussiert. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erhöht die Fläche, auf die der Benutzer klicken oder berühren kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar erforderlich) für Radiobuttons und Kontrollkästchen, die klein sind. Für weitere Informationen zu Labels im Allgemeinen, siehe [Labels](#labels).

Im Folgenden finden Sie ein Beispiel dafür, wie das `<label>` mit einem `<input>` Element in obigem Stil verbunden wird. Sie müssen dem `<input>` ein `id` Attribut geben. Das `<label>` benötigt dann ein `for` Attribut, dessen Wert mit dem `id` des Eingabes identisch ist.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen Bereich bieten, der groß genug ist, dass sie leicht zu aktivieren sind. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollschwierigkeiten und Menschen, die ungenaue Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>, aufgelistet, übermittelbar, zurücksetzbares, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann auszeichnungsfähiges Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th slope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf nicht einen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>:
            <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
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
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=image</code>:
            <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
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
            <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
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
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=color|date|datetime-local|file|hidden|month|password|time|week</code>: <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a>
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
            <code>type=color|date|datetime-local|email|file|hidden|month|number|password|range|reset|search|submit|tel|url|week</code>
            oder <code>text</code> mit <code>list</code> Attribut: keine
            <code>role</code> erlaubt
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

- CSS {{cssxref("appearance")}} Eigenschaft
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formulareinschränkungs-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
