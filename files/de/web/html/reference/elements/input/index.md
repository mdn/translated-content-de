---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

Das **`<input>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren; je nach Gerät und {{Glossary("user_agent", "User-Agent")}} stehen eine Vielzahl von Eingabedatenarten und Steuerungs-Widgets zur Verfügung. Das `<input>` Element ist eines der mächtigsten und komplexesten von allen in HTML aufgrund der schieren Anzahl an Kombinationen von Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich je nach Wert seines [`type`](#type) Attributs, daher sind die verschiedenen Typen in eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` angenommen.

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
        Ein Druckknopf ohne Standardverhalten, der den Wert des <a href="#value"><code>value</code></a> Attributs anzeigt, standardmäßig leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Ein Kontrollkästchen, das es erlaubt, einzelne Werte auszuwählen oder abzuwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Eine Steuerung zur Angabe einer Farbe; öffnet einen Farbwähler in unterstützenden Browsern, wenn aktiv.
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
        Öffnet einen Datumswähler oder numerische Räder für Jahr, Monat, Tag, wenn aktiv
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
        Eine Steuerung zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datums- und Uhrzeitwähler oder numerische Räder in unterstützenden Browsern.
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
        Eine Steuerung, die es dem Benutzer erlaubt, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a> Attribut, um die Dateitypen zu definieren, die die Steuerung auswählen kann.
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
        Eine Steuerung, die nicht angezeigt wird, deren Wert jedoch
        an den Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist versteckt!
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
        Eine Steuerung zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt eine Standardvalidierung hinzu. Zeigt eine numerische Tastatur auf manchen Geräten mit dynamischen Tastaturen.
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
        Ein Auswahlknopf, der das Auswählen von einem Einzelwert aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert ermöglicht.
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
        Wird als Bereichswidget angezeigt und standardmäßig auf den Mittelwert eingestellt.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchzeichenfolgen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann ein Löschsymbol in unterstützenden Browsern enthalten, das verwendet werden kann, um das Feld zu leeren. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
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
        Eine Steuerung zur Eingabe einer Telefonnummer. Zeigt auf manchen Geräten mit dynamischen Tastaturen ein Telefonwählschema an.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code> Eingabefeld, hat aber Validierungsparameter und relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Eine Steuerung zur Eingabe eines Datums, bestehend aus einer Wochennummer und einer Jahr-Woche, ohne Zeitzone.
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

Das `<input>` Element ist so mächtig wegen seiner Attribute; das [`type`](#type) Attribut, wie oben mit Beispielen beschrieben, ist das wichtigste. Da jedes `<input>` Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle basiert, teilen sie technisch die gleiche Gruppe von Attributen. In der Realität haben jedoch die meisten Attribute nur Auswirkungen auf eine bestimmte Teilmenge von Eingabetypen. Darüber hinaus hängt die Art und Weise, wie einige Attribute eine Eingabe beeinflussen, vom Eingabetyp ab und beeinflusst verschiedene Eingabetypen auf unterschiedliche Weise.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie verbunden sind. Diejenigen, die bei den meisten oder allen Eingabetypen häufig sind, werden unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind—oder Attribute, die zwar für alle Eingabetypen gelten, aber besondere Verhaltensweisen bei einem bestimmten Eingabetyp aufweisen—sind stattdessen auf den Seiten der jeweiligen Typen dokumentiert.

Attribute für das `<input>` Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                                                 |
| --------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis auf den erwarteten Dateityp in Datei-Upload-Steuerelementen                                          |
| [`alpha`](#alpha)                             | `color`                                                                | Opazität der Farbe                                                                                           |
| [`alt`](#alt)                                 | `image`                                                                | Alt-Attribut für den Bildtyp. Für Barrierefreiheit erforderlich                                              |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                               | Steuert die automatische Großschreibung im eingegebenen Text.                                                |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Buttons                             | Hinweis auf die Formulario-Autofill-Funktion                                                                 |
| [`capture`](#capture)                         | `file`                                                                 | Eingabemethode zur Medienaufnahme in Datei-Upload-Steuerelementen                                            |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Ob der Befehl oder die Steuerung aktiviert (angekreuzt) ist                                                  |
| [`colorspace`](#colorspace)                   | `color`                                                                | Der {{Glossary("Color_space", "Farbraum")}}, der zur Auswahl des Farbwerts verwendet werden soll             |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfelds zu Verwendung zur Übermittlung der Richtung des Elements bei der Formularübermittlung |
| [`disabled`](#disabled)                       | alle                                                                   | Ob das Formularsteuerfeld deaktiviert ist                                                                    |
| [`form`](#form)                               | alle                                                                   | Ordnet die Steuerung einem Formularelement zu                                                                |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL, die zur Formularübermittlung verwendet werden soll                                                      |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Kodierungstyp des Formulardatensatzes, der zur Formularübermittlung verwendet werden soll                    |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | HTTP-Methode, die zur Formularübermittlung verwendet werden soll                                             |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Formularsteuerungsvalidierung für die Formularübermittlung umgehen                                           |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browsing-Kontext für die Formularübermittlung                                                                |
| [`height`](#height)                           | `image`                                                                | Dasselbe wie das Height-Attribut für {{htmlelement('img')}}; vertikale Dimension                             |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Buttons       | Wert des id-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsmöglichkeiten                |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Maximalwert                                                                                                  |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Länge (Anzahl der Zeichen) von `value`                                                              |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Minimalwert                                                                                                  |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Länge (Anzahl der Zeichen) von `value`                                                              |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolean. Ob mehrere Werte zugelassen werden                                                                  |
| [`name`](#name)                               | alle                                                                   | Name der Formularsteuerung. Mit dem Formular als Teil eines Name/Wert-Paares übermittelt                     |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, das `value` entsprechen muss, um gültig zu sein                                                      |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der im Formularsteuerfeld erscheint, wenn kein Wert festgelegt ist                                     |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Bezeichnet ein `<input type="button">` als Steuerung für ein Popover-Element                                 |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt die Aktion an, die eine Popover-Steuerung ausführen soll                                                |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolean. Der Wert ist nicht editierbar                                                                       |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss überprüft sein, damit das Formular übermittelt werden kann      |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe der Steuerung                                                                                          |
| [`src`](#src)                                 | `image`                                                                | Dasselbe wie das src-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                          |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Inkrementelle Werte, die gültig sind                                                                         |
| [`type`](#type)                               | alle                                                                   | Typ der Formularsteuerung                                                                                    |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht er dem Anfangswert                                |
| [`width`](#width)                             | `image`                                                                | Dasselbe wie das width-Attribut für {{htmlelement('img')}}                                                   |

Einige zusätzliche nicht standardisierte Attribute werden nach den Beschreibungen der Standardattribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Gültig nur für den `file` Eingabetyp, das `accept` Attribut definiert, welche Dateitypen in einem `file` Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alpha` {{experimental_inline}}
  - : Gültig nur für den `color` Eingabetyp, das `alpha` Attribut gibt dem Endbenutzer die Möglichkeit, die Opazität der ausgewählten Farbe festzulegen.

- `alt`
  - : Gültig nur für die `image` Schaltfläche, das `alt` Attribut bietet alternativen Text für das Bild, der den Wert des Attributs anzeigt, wenn das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`
  - : Steuert, ob der eingegebene Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Siehe die [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) globale Attributseite für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette an, die beschreibt, welche, wenn überhaupt, Form von Autovervollständigungsfunktionalität die Eingabe bieten soll. Eine typische Implementierung von Autovervollständigung ruft vorherige Werte zurück, die im gleichen Eingabefeld eingegeben wurden, aber es können auch komplexere Formen von Autovervollständigung existieren. Zum Beispiel könnte ein Browser eine Integration mit der Kontaktliste eines Geräts ermöglichen, um E-Mail-Adressen in einem E-Mail-Eingabefeld zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für erlaubte Werte.

    Das `autocomplete` Attribut ist gültig bei `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, ist also für alle Eingabetypen gültig außer `checkbox`, `radio`, `file` oder eine der Buttonarten.

    Siehe das [`autocomplete` Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Sicherheit bei Passwörtern und wie `autocomplete` leicht anders für `hidden` als für andere Eingabetypen funktioniert.

- `autofocus`
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass das Eingabefeld automatisch den Fokus erhalten soll, wenn die Seite fertig geladen ist (oder wenn das {{HTMLElement("dialog")}} das Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus` Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus` Attribut haben. Wenn es auf mehr als einem Element gesetzt wird, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus` Attribut kann nicht bei Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren eines Formularsteuerfeldes kann für sehbehinderte Menschen verwirrend sein, die Bildschirmlesetechnologien verwenden, sowie für Menschen mit kognitiven Beeinträchtigungen. Wenn `autofocus` zugewiesen wird, "teleportieren" Bildschirmlesegeräte ihre Benutzer zur Formularsteuerung, ohne diese vorher zu warnen.

    Verwenden Sie sorgfältige Überlegungen zur Barrierefreiheit, wenn Sie das `autofocus` Attribut anwenden. Das automatische Fokussieren auf eine Steuerung kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmlesegerät das Label der Formularsteuerung ankündigt, die den Fokus erhält, wird das Bildschirmlesegerät nichts vor dem Label ankündigen, und der sehende Benutzer eines kleinen Geräts wird gleichermassen den durch den vorhergehenden Inhalt geschaffenen Kontext vermissen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture Spezifikation und nur gültig für den `file` Eingabetyp, definiert das `capture` Attribut, welches Medium — Mikrofon, Video oder Kamera — verwendet werden soll, um eine neue Datei für den Upload mit `file` Upload-Steuerung in unterstützenden Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`
  - : Gültig sowohl für `radio` als auch `checkbox` Typen, `checked` ist ein Boolean-Attribut. Wenn es bei einem `radio` Typ vorhanden ist, gibt es an, dass der Radioknopf der aktuell ausgewählte in der Gruppe von gleichnamigen Radioknöpfen ist. Wenn es bei einem `checkbox` Typ vorhanden ist, gibt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es gibt _nicht_ an, ob dieses Kontrollkästchen aktuell aktiviert ist: wenn der Zustand des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird ein Wert eines Kontrollkästchens oder eines Radioknopfes nur dann in die übermittelten Daten aufgenommen, wenn sie aktuell `checked` sind. Wenn sie es sind, werden der Name und die Werte der aktivierten Steuerungen übermittelt.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, werden die übermittelten Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgeführt. Der Standardwert für Kontrollkästchen und Radioknöpfe ist `on`.

- `colorspace` {{experimental_inline}}
  - : Gültig nur für den `color` Eingabetyp, das `colorspace` Attribut gibt den {{Glossary("Color_space", "Farbraum")}} an, der vom `type="color"` Eingabefeld verwendet wird. Mögliche {{Glossary("enumerated", "Aufzählungswerte")}} sind:
    - `"limited-srgb"`: Die Farbe ist im {{Glossary("RGB", "sRGB")}} Farbraum. Dies schließt [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und {{cssxref("hex-color")}} Werte ein. Der Farbwert ist auf 8-Bit pro `r`, `g` und `b` Komponente begrenzt. Dies ist der Standard.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3 Farbraum")}}, z.B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen, das `dirname` Attribut ermöglicht die Übermittlung der Richtung des Elements. Wenn es enthalten ist, wird die Eingabesteuerung mit zwei Name/Wert-Paaren übermittelt: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname` Attributs als Name mit einem Wert von `ltr` oder `rtl`, wie vom Browser eingestellt.

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

    Wenn das oben genannte Formular übermittelt wird, verursacht die Eingabe, dass sowohl das `name` / `value` Paar von `fruit=cherry` als auch das `dirname` / Richtungs-Paar von `fruit-dir=ltr` gesendet werden.
    Für weitere Informationen siehe das [`dirname` Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer nicht in der Lage sein sollte, mit der Eingabe zu interagieren. Deaktivierte Eingaben werden normalerweise mit einer dunkleren Farbe oder durch eine andere Form der Anzeige gerendert, dass das Feld nicht verfügbar ist.

    Speziell deaktivierte Eingaben empfangen das [`click`](/de/docs/Web/API/Element/click_event) Ereignis nicht, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation gefordert, wird Firefox standardmäßig [den dynamischen deaktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenlade-Vorgänge beibehalten. Verwenden Sie das [`autocomplete`](#autocomplete) Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Ein Zeichenstring, der das {{HTMLElement("form")}} Element spezifiziert, mit dem die Eingabe verknüpft ist (d.h. sein **Formulareigentümer**). Der Wert dieses Strings, wenn vorhanden, muss der [`id`](#id) eines `<form>` Elements im gleichen Dokument entsprechen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>` Element mit dem nächsten, umschließenden Formular verknüpft, falls vorhanden.

    Das `form` Attribut ermöglicht es, eine Eingabe irgendwo im Dokument zu platzieren, aber sie mit einem Formular an anderer Stelle im Dokument einzuschließen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verbunden werden.

- `formaction`
  - : Gültig nur für `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formenctype`
  - : Gültig nur für `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formmethod`
  - : Gültig nur für `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formnovalidate`
  - : Gültig nur für `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formtarget`
  - : Gültig nur für `image` und `submit` Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `height`
  - : Gültig nur für die `image` Eingabeschaltfläche, die `height` ist die Höhe der Bilddatei zur Darstellung der grafischen Absende-Schaltfläche. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, es definiert eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Sein Zweck besteht darin, das Element bei der Verknüpfung zu identifizieren. Der Wert wird als Wert des {{htmlelement('label')}}-Attributs `for` verwendet, um das Label mit der Formularsteuerung zu verbinden. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist, er enthält einen Hinweis für Browser auf die Art der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Werte sind `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der dem `list` Attribut gegebene Wert sollte die [`id`](/de/docs/Web/API/Element/id) einer {{HTMLElement("datalist")}} sein, die sich im selben Dokument befindet. Das `<datalist>` stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert bereitstellen.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut Spezifikationen wird das `list` Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder einer der Buttonarten unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Striche entlang eines Bereichs oder sogar eine Eingabe, die öffnet wie ein {{HTMLElement("select")}}, aber es ermöglicht die Eingabe von Werten, die nicht in der Liste enthalten sind. Überprüfen Sie die [Browser-Kompatibilitätsrechtung](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den größten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) diesen Wert überschreitet, schlägt das Element bei [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max` Attributs keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was anzeigt, dass der Bereich umschlagen kann; zum Beispiel können Sie einen Zeitraum von 22 Uhr bis 4 Uhr morgens festlegen.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 code units")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein Ganzzahlenwert von 0 oder mehr sein. Wenn kein `maxlength` angegeben ist, oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch gleich oder größer als der Wert von `minlength` sein.

    Die Eingabe scheitert an der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation), wenn die Länge des in das Feld eingegebenen Textes größer als die von `maxlength` angegebene maximale Länge in {{Glossary("UTF-16", "UTF-16 code units")}} ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das `maxlength` Attribut erlaubt sind. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den kleinsten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) kleiner als dieser Wert ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min` Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max` Attributs sein. Wenn das `min` Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min` Wert angewendet. Wenn das `min` Attribut gültig ist und ein nicht-angegebener Wert kleiner als das Minimum des `min` Attributs ist, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was anzeigt, dass der Bereich umschlagen kann; zum Beispiel können Sie einen Zeitraum von 22 Uhr bis 4 Uhr morgens festlegen.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 code units")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert kleiner oder gleich dem vom `maxlength` Attribut angegebenen Wert sein. Wenn kein `minlength` angegeben ist, oder ein ungültiger Wert angegeben ist, hat die Eingabe keine minimale Länge.

    Die Eingabe wird bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` in {{Glossary("UTF-16", "UTF-16 code units")}} ist, was die Formularübermittlung verhindert. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das `multiple` Boolean-Attribut, falls gesetzt, bedeutet, dass der Benutzer durch Kommata getrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit der `file` Eingabe auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`
  - : Ein Zeichenstring, der einen Namen für die Eingabesteuerung angibt. Dieser Name wird zusammen mit dem Wert der Steuerung über das Formular übermittelt.

    Betrachten Sie den `name` als erforderliches Attribut (auch wenn es nicht der Fall ist). Wenn eine Eingabe keinen `name` angegeben hat, oder der `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerungen, nicht aktivierte Radioknöpfe, nicht aktivierte Kontrollkästchen und Reset-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_` : Wenn als Name eines `<input>` Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet, wird der Wert der Eingabe automatisch von {{Glossary("user_agent", "Benutzeragenten")}} auf die Zeichencodierung gesetzt, die zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name) Attribut erzeugt ein einzigartiges Verhalten bei Radioknöpfen.

    Es kann immer nur ein Radioknopf einer gleichnamigen Gruppe von Radioknöpfen ausgewählt sein. Durch die Wahl eines beliebigen Radioknopfes in dieser Gruppe werden automatisch alle aktuell ausgewählten Radioknöpfe in derselben Gruppe abgewählt. Der Wert dieses einen ausgewählten Radioknopfs wird zusammen mit dem Namen übermittelt, wenn das Formular übermittelt wird,

    Beim Einfügen in eine Serie gleichnamiger Gruppen von Radioknöpfen, erhält, falls einer aktiviert ist, dieser den Fokus. Wenn sie nicht in Quellcode-Reihenfolge gruppiert sind, beginnt das Einfügen in die Gruppe, wenn der erste in der Gruppe gefunden wird, indem alle nicht markierten übersprungen werden. Mit anderen Worten, wenn einer aktiviert ist, wird das Einfügen in die Gruppe alle nicht markierten Radioknöpfe in der Gruppe überspringen. Wenn keiner aktiviert ist, erhält die Radioknopf-Gruppe den Fokus, wenn der erste Knopf in der Gruppe erreicht wird.

    Wenn ein Eingabeelement ein `name`-Attribut erhält, wird dieser Name zu einer Eigenschaft des sie besitzenden Formularelements mit [[`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements). Wenn Sie eine Eingabesteuerung haben, deren `name` auf `guest` gesetzt ist und eine andere, deren `name` auf `hat-size` gesetzt ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein, und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer integrierten Eigenschaft des Formulars entspricht, da Sie damit die vordefinierte Eigenschaft oder Methode mit dieser Referenz auf das entsprechende Eingabeelement überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, das `pattern` Attribut wird verwendet, um einen regulären Ausdruck zu kompilieren, dem der [`value`](#value) der Eingabe entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) passieren kann. Es muss ein gültiger JavaScript-Regulärausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird, und wie in unserem [Leitfaden zu Regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Es sollten keine Schrägstriche um den Mustertext herum angegeben werden. Beim Kompilieren des regulären Ausdrucks:
    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, so dass die Übereinstimmung gegen den _ganzen_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag festgelegt, so dass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein Regulärausdruck angewendet, und dieses Attribut wird vollständig ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht-leerer Wert nicht mit dem Muster übereinstimmt, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut vorhanden ist, wird der kompilierte Reguläre Ausdr

    > [!NOTE]
    > Wenn Sie das `pattern` Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe des Eingabefelds hinzufügen. Sie können auch ein [`title`](#title) Attribut verwenden, um die Anforderungen zur Übereinstimmung mit dem Muster zu erklären; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-side Validation](#client-seitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, das `placeholder` Attribut bietet einen kurzen Hinweis für den Benutzer darauf, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, das/die einen Hinweis auf den erwarteten Datentyp gibt, anstatt einer Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Wenn zum Beispiel in einem Feld erwartet wird, dass der Vorname eines Benutzers erfasst wird, und sein Label "Vorname" ist, könnte ein geeigneter Platzhalter "z.B., Mustafa" sein.

    > [!NOTE]
    > Das `placeholder` Attribut ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erklären und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`
  - : Verwandelt ein `<input type="button">`-Element in eine Popover-Steuerungsschaltfläche; nimmt die ID des Popover-Elements als Wert. Weitere Details finden Sie auf der [Popover-API](/de/docs/Web/API/Popover_API) Hauptseite. Die Erstellung einer Beziehung zwischen einem Popover und seiner Aufrufschaltfläche mit dem `popovertarget` Attribut hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Aufrufer und platziert das Popover an einer logischen Position in der Tastaturnavigation, wenn es gezeigt wird. Dies macht das Popover für Tastatur- und unterstützte Technologie (AT)-Benutzer zugänglicher (siehe auch [Popover Accessibility Features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt einen impliziten Ankerbezug zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover Anchor Positioning](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die Aktion an, die bei einem Popover-Element ausgeführt werden soll, das von einer Steuerung `<input type="button">` gesteuert wird. Mögliche Werte sind:
    - `"hide"`
      - : Die Schaltfläche verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Die Schaltfläche zeigt ein verborgenes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Die Schaltfläche wechselt ein Popover zwischen Anzeigen und Verbergen. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerungsschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten kann. Das `readonly` Attribut wird bei den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Weitere Informationen finden Sie im [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer einen Wert für das Eingabefeld angeben muss, bevor das Formular übermittelt werden kann. Das `required` Attribut wird von den Eingaben `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für weitere Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`, das `size` Attribut gibt an, wie viel von der Eingabe angezeigt wird. Erzeugt im Grunde dasselbe Ergebnis wie das Setzen der CSS `width`-Eigenschaft mit einigen Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em` Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px` Einheiten). CSS `width` hat Vorrang vor dem `size` Attribut.

- `src`
  - : Gültig nur für die `image` Eingabeschaltfläche, der `src` ist eine Zeichenfolge, die die URL der Bilddatei spezifiziert, die zur Darstellung der grafischen Absende-Schaltfläche verwendet werden soll. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss. Nur Werte, die ein ganzzahliges Vielfaches der Schritte aus der Schrittbasis sind, sind gültig. Die Schrittbasis ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), wenn angegeben, ansonsten [`value`](#value), oder `0`, wenn keines von beiden angegeben ist (außer für `week`, der eine Standard-Schrittbasis von −259,200,000 hat, die den Beginn der Woche `1970-W01` darstellt).

    Wenn nicht explizit enthalten:
    - `step` hat einen Standardwert von 1 für `number` und `range`.
    - Jeder Datums-/Zeiteingabetyp hat einen Standardwert für `step`, der für den Typ geeignet ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein – Ganzzahl oder Fließkommazahl – oder der spezielle Wert `any`, was bedeutet, dass keine Schritte impliziert sind, und jeder Wert erlaubt ist (unter Ausschluss anderer Einschränkungen wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, sind dann alle geraden Ganzzahlen, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, weil `step` standardmäßig auf `1` gesetzt ist. Für `4.2` gültig zu sein, hätte `step` entweder auf `any`, 0,1, 0,2 gesetzt werden müssen, oder der `min` Wert hätte eine Zahl sein müssen, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, wird der Wert bei der Einschränkungsvalidierung als ungültig angesehen und wird die `:invalid` Pseudoclasse übereinstimmen.

    Siehe [Client-side validation](#client-seitige_validierung) für weitere Informationen.

- `tabindex`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus haben kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen mit Ausnahme von Eingaben des Typs hidden fokussierbar sind, sollte dieses Attribut nicht auf Formularsteuerungen verwendet werden, da Sie dann die Fokussierreihenfolge für alle Elemente im Dokument verwalten müssten, mit dem Risiko, die Benutzbarkeit und Barrierefreiheit zu beeinträchtigen, wenn es falsch gemacht wird.

- `title`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, das einen Text enthält, der beratende Informationen zum Element enthält, zu dem es gehört. Solche Informationen können typischerweise, aber nicht notwendigerweise, als Tooltip dem Benutzer präsentiert werden. Der Titel sollte NICHT als primäre Erklärung der Zweck der Formularsteuerung verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}} Element mit einem `for`-Attribut, das auf das [`id`](#id) Attribut der Formularsteuerung gesetzt ist. Siehe [Labels](#labels) unten.

- `type`
  - : Ein String, der den Steuerungstyp angibt, der gerendert werden soll. Zum Beispiel, um ein Kontrollkästchen zu erstellen, wird der Wert `checkbox` verwendet. Wenn ausgelassen (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet, was ein Klartext-Eingabefeld erstellt.

    Erlaubte Werte sind in [Eingabetypen](#input_types) oben aufgelistet.

- `value`
  - : Der Wert der Eingabesteuerung. Wenn im HTML spezifiziert, ist dies der Anfangswert, und danach kann er jederzeit mit JavaScript geändert oder abgerufen werden, indem auf die jeweilige [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt `value`-Eigenschaft zugegriffen wird. Das `value`-Attribut ist immer optional, sollte aber bei `checkbox`, `radio` und `hidden` als obligatorisch betrachtet werden.

- `width`
  - : Gültig nur für die `image` Eingabeschaltfläche, die `width` ist die Breite der Bilddatei, die zur Darstellung der grafischen Absende-Schaltfläche verwendet wird. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind ebenfalls auf einigen Browsern verfügbar. Generell sollten Sie sie nur verwenden, wenn es nicht anders geht.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse gesendet werden, um die Aktualisierung der Suchergebnisse in Echtzeit zu ermöglichen, während der Benutzer den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion angibt, die ergriffen wird, wenn der Benutzer die <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste beim Bearbeiten des Feldes drückt; dies wird verwendet, um ein passendes Label für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Orientierung des Bereichs-Schiebereglers. <strong>Nur Firefox.</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl der Elemente, die in der Drop-down-Liste der vorherigen Suchanfragen angezeigt werden sollten. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean-Wert, der angibt, ob nur Verzeichnisse ausgewählt werden dürfen (oder, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist, mehrere Verzeichnisse)
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das `incremental` Boolean-Attribut ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome usw.), die, wenn vorhanden, dem {{Glossary("user_agent", "Benutzeragent")}} mitteilt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das das Suchfeld darstellt. So kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis nur gesendet, wenn der Benutzer die Suche explizit initiiert (z.B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste, während das Feld bearbeitet wird).

    Das `search` Ereignis ist rate-limitiert, sodass es nicht öfter als in einem implementierungsdefinierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}
  - : Ähnlich dem nicht standardisierten CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente betrifft, definiert das `orient` Attribut die Orientierung des Bereichs-Schiebereglers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird. Siehe [Erstellen von vertikalen Formularsteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung von vertikalen Formularsteuerungen.

- `results` {{non-standard_inline}}
  - : Das `results` Attribut — nur von Safari unterstützt — ist ein numerischer Wert, der es Ihnen erlaubt, die maximale Anzahl der Einträge zu überschreiben, die im nativ bereitgestellten Drop-down-Menü der vorherigen Suchanfragen des `<input>` Elements angezeigt werden sollen.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben wird, wird die standardmäßige maximale Eintragszahl des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das `webkitdirectory` Boolean-Attribut, wenn vorhanden, gibt an, dass nur Verzeichnisse von der Benutzerin der Dateiauswahloberfläche ausgewählt werden dürfen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl es ursprünglich nur für WebKit-basierte Browser implementiert war, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später verwendbar. Aber selbst wenn es relativ breit unterstützt wird, ist es immer noch nicht standardmäßig und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Ebenfalls verfügbar sind die Methoden, die von den übergeordneten Schnittstellen bereitgestellt werden: [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben und ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis beim Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben, ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis beim Element ausgelöst und (wenn das Ereignis nicht abgebrochen wird) das Problem dem Benutzer gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements, falls der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt (wie einem visuellen Farbwähler oder einem Kalenderdatumseingabefeld) macht diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, um anzuzeigen, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine angegebene Zeichenfolge. Ein Parameter `selectMode` ist verfügbar, um zu steuern, wie der bestehende Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines Texteingabefelds aus. Macht nichts bei Eingaben, die nicht als Texteingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Wähler für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, jedoch durch einen Tastendruck oder andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Funktionen, die bei nicht Formular-Elementen nicht anwendbar sind. Es gibt CSS-Selektoren, die speziell Formularsteuerelemente basierend auf ihren UI-Funktionen ansprechen können, auch bekannt als UI-Pseudoklassen. Das Input-Element kann auch nach Typ mit Attributselektoren angesprochen werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudoklassen, die für das
    <code>&#x3C;input></code>
    -Element relevant sind:
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
        Jedes derzeit aktivierte Element, das aktiviert (ausgewählt, angeklickt werden, eingegeben, usw.) werden kann oder den Fokus akzeptieren kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert werden kann oder den Fokus akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es ansonsten aktiviert (ausgewählt, angeklickt, eingegeben, usw.) werden könnte oder den Fokus akzeptieren könnte, wäre es nicht deaktiviert.
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
        Ein Element, das momentan <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt,
        einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente mit dem vorhandenen <a href="#placeholder"><code>placeholder</code></a>-Attribut, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die die Standards in einer Gruppe verwandter Elemente sind.
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}}- und
        {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die bei Seitenladezeit oder Renderzeit geprüft wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht den aktuell überprüften {{HTMLElement("input/checkbox", "checkbox")}}- und
        {{HTMLElement("input/radio", "radio")}}-Eingabetypen (sowie dem {{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, das derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente,
        deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle
        Radiobuttons mit dem gleichen Namenswert im Formular nicht angekreuzt sind, und
        {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die Einschränkungsvalidierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die Einschränkungsvalidierung angewendet wird und die derzeit
        ungültig sind. Entspricht einem Formularelement, dessen Wert nicht den
        durch seine Attribute festgelegten Einschränkungen entspricht, wie
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert innerhalb der vom <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribut und dem <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert NICHT innerhalb der vom <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribut festgelegten Bereichsgrenzen liegt oder
        nicht den <a href="#step"><code>step</code></a>-Anforderungen entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Entspricht nur Elementen, die erforderlich sein können.
        Das Attribut, das an einem nicht erforderlichen Element hinzugefügt wird, führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}}-Element, das NICHT das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Entspricht nicht Elementen, die nicht erforderlich sein können.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code> und {{HTMLElement("textarea")}}
        -Elemente, die aktuell keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, wird aber bei Verlust des Fokus aktiviert. Entspricht ungültigen Eingaben, jedoch nur nach der Benutzerinteraktion, beispielsweise durch Fokussierung auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular mit dem ungültigen Steuerelement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Wähler anzeigen, aus dem der Benutzer einen Wert auswählen kann (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — aber nur, wenn das Element im geöffneten Zustand ist, das heißt, wenn der Wähler angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen-Beispiel

Wir können das Label einer Checkbox basierend darauf gestalten, ob die Checkbox angekreuzt ist oder nicht. In diesem Beispiel gestalten wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einer angekreuzten Eingabe kommt. Wir haben keine Stile angewendet, wenn das `input` nicht angekreuzt ist.

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

Es ist möglich, verschiedene Typen von Formularsteuerelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) zu selektieren. CSS-Attributselektoren stimmen mit Elementen überein, die entweder nur das Vorhandensein eines Attributs oder den Wert eines bestimmten Attributs aufweisen.

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

Standardmäßig ist das Erscheinungsbild von Platzhaltertext durchscheinend oder hellgrau. Das {{cssxref('::placeholder')}}-Pseudo-Element ist der [`placeholder`-Text](#placeholder) des Eingabefeldes. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestaltet werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}}-Pseudo-Element angewendet werden können, kann in einer Regel mit `::placeholder` in seinem Selektor verwendet werden.

### caret-color

Eine Eigenschaft, die speziell auf texteinbezogene Elemente zutrifft, ist die CSS-{{cssxref("caret-color")}}-Eigenschaft, die es Ihnen ermöglicht, die Farbe zu setzen, die zum Zeichnen der Texteinfügemarke verwendet wird:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. standardmäßig haben sie eine bevorzugte Größe). Diese Eigenschaft erlaubt es Ihnen, das Standardverhalten zu überschreiben, sodass Formularelemente sich in der Größe an ihren Inhalt anpassen können.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die sich dem Inhalt anpassen und mit eingegebenem Text wachsen. Dies funktioniert mit Eingabetypen, die direkte Texteingaben akzeptieren (zum Beispiel, [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file), und {{htmlelement("textarea")}}-Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textlichen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es das ist, können die Position und die Größe des Elements innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für mehr Informationen darüber, wie Sie Farbe zu HTML-Elementen mittels CSS hinzufügen, siehe:

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Zusätzliche Funktionen

### Labels

Labels sind erforderlich, um unterstützenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element bietet erklärende Informationen zu einem Formularelement, das _immer_ zutreffend ist (unabhängig von Layout-Anliegen). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugehörige Labels

Das semantische Paaren von `<input>`- und `<label>`-Elementen ist nützlich für assistive Technologien wie Bildschirmlesegeräte. Durch das Paaren mit dem [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut von `<label>` verknüpfen Sie das Label mit der Eingabe auf eine Weise, die es Bildschirmlesegeräten ermöglicht, Eingaben genauer zu beschreiben.

Es ist nicht ausreichend, einfachen Text neben dem `<input>`-Element zu haben. Vielmehr erfordern Benutzerfreundlichkeit und Zugänglichkeit die Einbeziehung von entweder impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht barrierefrei: Es besteht keine Beziehung zwischen der Aufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere 'Trefferfläche' für Maus- und Touchscreen-Nutzer, um darauf zu klicken oder zu tippen. Durch das Paaren eines `<label>` mit einem `<input>` wird durch Klicken auf eines von beiden der Fokus auf das `<input>` gelegt. Wenn Sie normalen Text verwenden, um Ihre Eingabe zu 'labeln', wird dies nicht passieren. Die Aufforderung Teil der Aktivierungsfläche für die Eingabe zu machen, ist hilfreich für Menschen mit motorischen Beeinträchtigungen.

Als Webentwickler sollten wir niemals davon ausgehen, dass Menschen alles wissen, was wir wissen. Die Diversität der Menschen, die das Web nutzen – und damit Ihre Website – garantiert praktisch, dass einige Besucher Ihrer Website einige Unterschiede in Denkprozessen und/oder Umständen haben, die dazu führen, dass sie Ihre Formulare sehr unterschiedlich zu Ihnen interpretieren, ohne klare und ordnungsgemäß präsentierte Labels.

#### Platzhalter sind nicht barrierefrei

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text zu spezifizieren, der innerhalb des Inhaltsbereichs des `<input>`-Elements angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, weil es keines ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, keine Erklärung oder Aufforderung.

Der Platzhalter ist nicht nur für Screenreader nicht zugänglich, sondern verschwindet auch, sobald der Benutzer Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert hat. Browser mit automatischen Seitene-Übersetzungsfunktionen können Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element kennzeichnen müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-Seitige Validierung

> [!WARNING]
> Die Client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format sein müssen, überprüfen Sie diese _immer_ auch auf Serverseite und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS zum Gestalten von Eingaben basierend auf den {{cssxref(":valid")}}- oder {{cssxref(":invalid")}}-UI-Zuständen, basierend auf dem aktuellen Zustand jeder Eingabe, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser eine client-seitige Validierung bei einem (versuchten) Formularübermittlung. Bei der Formularübermittlung, wenn es ein Formularelement gibt, das die Einschränkungsprüfung nicht besteht, zeigen unterstützende Browser eine Fehlermeldung bei dem ersten ungültigen Formularelement an; dabei wird eine Standardmeldung basierend auf dem Fehlertyp angezeigt oder eine von Ihnen festgelegte Meldung.

Einige Eingabetypen und andere Attribute beschränken, welche Werte für eine gegebene Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Nummern 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler könnten auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn größer als 10, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Ganzzahl (entspricht nicht den Anforderungen des `step`-Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Bei den Eingabetypen, deren Bereich möglicher Werte periodisch ist (d.h. bei dem höchsten möglichen Wert wickeln die Werte zur Anfang zurück, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max)- und [`min`](#min)-Eigenschaften umgekehrt sind, was darauf hinweist, dass der Bereich gültiger Werte bei `min` beginnt, zum niedrigsten möglichen Wert zurückwickelt und dann weitergeht, bis `max` erreicht ist. Dies ist besonders nützlich für Daten und Zeiten, zum Beispiel wenn Sie möchten, dass der Bereich von 20:00 bis 08:00 Uhr reicht:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und deren Werte können zu einem spezifischen Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Validitätsobjektfehler hängen von den <code>&lt;input&gt;</code>
    -Attributen und deren Werten ab:
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
        Tritt auf, wenn der Wert größer ist als der maximale Wert, wie durch das <code>max</code>-Attribut definiert
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die Anzahl, die durch die <code>maxlength</code>-Eigenschaft erlaubt ist
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der minimale Wert, wie durch das <code>min</code>-Attribut definiert
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die Anzahl, die durch die <code>minlength</code>-Eigenschaft verlangt wird
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
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, der Wert jedoch <code>null</code> ist oder Radio- oder Checkbox nicht ausgewählt sind.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert stimmt nicht mit dem Schritt-Inkrement überein. Der Standardwert für Inkrement ist <code>1</code>, sodass nur ganze Zahlen gültig sind, wenn <code>type="number"</code> ohne Schritt ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht den richtigen Typ hat, z. B. enthält eine E-Mail kein <code>@</code> oder eine URL enthält kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das Attribut `required` hat, dann ist kein Wert oder ein leerer String nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, wird ein leerer String nicht zu einem Fehler führen.

Wir können Grenzen dafür festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer warnen, wenn beim Absenden des Formulars ein Fehler auftritt.

Zusätzlich zu den oben in der Tabelle beschriebenen Fehlern enthält das `validityState`-Interface die booleschen schreibgeschützten Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund für das mögliche Fehlschlagen der Validierung zutrifft, außer bei der Eigenschaft `valid`, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

Wenn es einen Fehler gibt, werden unterstützende Browser den Benutzer sowohl warnen als auch verhindern, dass das Formular gesendet wird. Ein Wort der Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen wahrheitsgetreuen Wert (irgendetwas anderes als den leeren String oder `null`) gesetzt ist, wird das Formular daran gehindert, gesendet zu werden. Wenn keine benutzerdefinierte Fehlermeldung vorhanden ist und keine der anderen Eigenschaften `true` zurückgibt, ist `valid` `true`, und das Formular kann gesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Validitätsnachricht auf den leeren String setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Validität festgelegt ist, wird das Senden verhindert, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die bei `<input>`- (und ähnlichen) Elementen verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen führen dazu, dass dies eine Standardfehlermeldung erzeugt, wenn Sie versuchen, das Formular zu senden, ohne dass ein gültiges Feld ausgefüllt ist oder ein Wert eingegeben wird, der nicht dem `pattern` entspricht.

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

Das Beispiel sieht wie folgt aus:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Status des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die `checkValidity()`-Methode über den `input`-Event-Handler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst, und die `invalid`-Event-Handler-Funktion wird ausgeführt. Innerhalb dieser Funktion ermitteln wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht mit dem Muster übereinstimmt, indem wir einen `if ()`-Block verwenden und eine benutzerdefinierte Fehlermeldung festlegen.
- Infolgedessen wird, wenn der Eingabewert ungültig ist, wenn die Schaltfläche "Senden" gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn sie gültig ist, wird sie wie erwartet gesendet. Damit dies geschieht, muss die benutzerdefinierte Validität aufgehoben werden, indem `setCustomValidity()` mit einem leeren Stringwert aufgerufen wird. Wir tun dies daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Validität zuvor festgelegt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie aktuell einen gültigen Wert bei der Übermittlung enthält.

> [!NOTE]
> Validieren Sie immer Eingabebeschränkungen sowohl client- als auch serverseitig. Die Einschränkungsvalidierung beseitigt nicht die Notwendigkeit der Validierung auf der _Server-Seite_. Ungültige Werte können immer noch von älteren Browsern oder von böswilligen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte über viele Versionen hinweg ein proprietäres Fehlerattribut — `x-moz-errormessage` —, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise festzulegen. Dies wurde jedoch ab Version 66 entfernt (siehe [Firefox Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der Lokalisierung ab. In einigen Lokalen ist 1.000,00 eine gültige Zahl, während in anderen Lokalen der gültige Weg, diese Zahl einzugeben, 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Lokalisierung zu bestimmen, um die Eingabe des Benutzers zu validieren (zumindest für `type="number"`):

- Versuchen Sie, die Sprache durch ein `lang`/`xml:lang`-Attribut am Element oder einem seiner Eltern zu bestimmen.
- Versuchen Sie die durch einen Content-Language HTTP-Header angegebene Sprache. Oder,
- Wenn keine angegeben ist, verwenden Sie die Sprache des Browsers.

## Barrierefreiheit

### Labels

Beim Einfügen von Eingaben ist es ein Barrierefreiheitsanspruch, Labels beizufügen. Dies ist notwendig, damit Benutzer von unterstützenden Technologien erkennen können, wofür die Eingabe ist. Durch Klicken oder Tippen auf ein Label wird das mit dem Label verknüpfte Formularelement fokussiert. Dies verbessert die Zugänglichkeit und Benutzerfreundlichkeit für sehende Benutzer und erhöht den Bereich, den ein Benutzer anklicken oder berühren kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radiobuttons und Checkboxen, die winzig sind. Für mehr Informationen über Labels im Allgemeinen siehe [Labels](#labels).

Das folgende ist ein Beispiel dafür, wie man das `<label>` mit einem `<input>`-Element auf die oben beschriebene Art verknüpft. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` braucht dann ein `for`-Attribut, dessen Wert der gleiche ist wie der des `id` der Eingabe.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bieten, damit sie einfach aktiviert werden können. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Beeinträchtigungen und Menschen, die nicht präzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Verständnis des Erfolgs-Kriteriums 2.5.5: Zielgröße | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, gelistet, einreichbar, rücksetzbares, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Ausdrucksinhalt</a>. Wenn das <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann kennzeichnungsfähiges Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>None; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Ausdrucksinhalt</a> akzeptiert.
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
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formulareinschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
