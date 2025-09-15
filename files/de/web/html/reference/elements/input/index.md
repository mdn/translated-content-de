---
title: "<input>: Das HTML-Eingabeelement"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: baa785abec7bc852b909f1c827510731ada5ff4f
---

Das **`<input>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerungen für webbasierte Formulare zu erstellen, um Daten von Benutzern zu akzeptieren; eine Vielzahl von Arten von Eingabedaten und Steuerungswidgets ist verfügbar, abhängig vom Gerät und {{Glossary("user_agent", "Benutzeragenten")}}. Das `<input>`-Element ist eines der mächtigsten und komplexesten in HTML aufgrund der Vielzahl von Kombinationen von Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich je nach Wert seines [`type`](#type)-Attributs, daher werden die verschiedenen Typen in ihren eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, ist der Standardtyp `text`.

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
      <td>Ein Kontrollkästchen, das die Auswahl oder Deselektion einzelner Werte ermöglicht.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerungselement zur Spezifizierung einer Farbe; öffnet einen Farbauswähler, wenn es in unterstützenden Browsern aktiv ist.
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
        Öffnet einen Datumswähler oder numerische Räder für Jahr, Monat, Tag, wenn es in unterstützenden Browsern aktiv ist.
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
        Ein Steuerungselement zur Eingabe eines Datums und einer Uhrzeit ohne Zeitzone. Öffnet einen Datumswähler oder numerische Räder für Datums- und Zeitkomponenten, wenn es in unterstützenden Browsern aktiv ist.
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
        Ein Feld zum Bearbeiten einer E-Mail-Adresse. Sieht aus wie eine <code>text</code>-Eingabe, verfügt jedoch über Validierungsparameter und eine relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerungselement, das dem Benutzer die Auswahl einer Datei ermöglicht.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Typen von Dateien zu definieren, die das Steuerungselement auswählen kann.
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
        Ein Steuerungselement, das nicht angezeigt wird, dessen Wert jedoch an den Server übermittelt wird. Es gibt ein Beispiel in der nächsten Spalte, aber es ist verborgen!
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
      <td>Ein Steuerungselement zur Eingabe von Monat und Jahr, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerungselement zur Eingabe einer Zahl. Zeigt einen Schieberegler und fügt eine Standardvalidierung hinzu. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein numerisches Tastenfeld an.
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
        Ein einzeiliges Textfeld, dessen Wert verschleiert ist. Warnt den Benutzer, wenn die Seite nicht sicher ist.
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
        Eine Optionsschaltfläche, die es ermöglicht, einen einzelnen Wert aus mehreren Optionen mit dem gleichen <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Ein Steuerungselement zur Eingabe einer Zahl, deren genauer Wert nicht wichtig ist. Wird als Bereichs-Widget dargestellt, das standardmäßig den mittleren Wert ausgibt. Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich akzeptabler Werte zu definieren.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann ein Löschsymbol in unterstützenden Browsern enthalten, das verwendet werden kann, um das Feld zu löschen. Zeigt ein Suchsymbol anstelle der Eingabetaste auf einigen Geräten mit dynamischen Tastaturen an.
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
        Ein Steuerungselement zur Eingabe einer Telefonnummer. Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Telefon-Tastenfeld an.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code>-Eingabe, verfügt jedoch über Validierungsparameter und eine relevante Tastatur in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerungselement zur Eingabe eines Datums, das aus einer Kalenderwoche und einer Jahreswoche besteht, ohne Zeitzone.
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

Das `<input>`-Element ist so mächtig wegen seiner Attribute; das [`type`](#type)-Attribut, das oben mit Beispielen beschrieben wurde, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch dasselbe Attributset. In der Realität jedoch haben die meisten Attribute Auswirkungen nur auf einen spezifischen Teil von Eingabetypen. Außerdem beeinflussen einige Attribute ein Eingabeelement unterschiedlich, abhängig vom Eingabetyp, und haben unterschiedliche Auswirkungen auf verschiedene Eingabetypen.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut ausführlicher beschreibt, zusammen mit den Eingabetypen, mit denen sie verbunden sind. Attribute, die für die meisten oder alle Eingabetypen üblich sind, werden unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind—oder Attribute, die zwar für alle Eingabetypen üblich sind, aber besondere Verhaltensweisen bei bestimmten Eingabetypen aufweisen—werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                           |
| --------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis auf erwarteten Dateityp bei Datei-Upload-Steuerelementen                                       |
| [`alpha`](#alpha)                             | `color`                                                                      | Transparenz der Farbe                                                                                  |
| [`alt`](#alt)                                 | `image`                                                                      | alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                        |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Steuert die automatische Großschreibung im eingegebenen Text.                                          |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis auf die Formular-Autovervollständigungsfunktion                                                |
| [`capture`](#capture)                         | `file`                                                                       | Eingabemethode für Medieneinnahme in Datei-Upload-Steuerelementen                                      |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Ob der Befehl oder das Steuerelement geprüft ist                                                       |
| [`colorspace`](#colorspace)                   | `color`                                                                      | Der {{Glossary("Color_space", "Farbraum")}}, der zur Auswahl des Farbwertes verwendet werden soll      |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfelds zur Übermittlung der Richtungsinformation des Elements bei der Formularübergabe |
| [`disabled`](#disabled)                       | alle                                                                         | Ob das Formularsteuerelement deaktiviert ist                                                           |
| [`form`](#form)                               | alle                                                                         | Verknüpft das Steuerelement mit einem Formularelement                                                  |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | URL zur Verwendung für die Formularübergabe                                                            |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Zeichensatz für die Formulardatensatzcodierung zur Verwendung bei der Formularübergabe                 |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | HTTP-Methode zur Verwendung für die Formularübergabe                                                   |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Umgehung der Formularsteuerelementvalidierung für die Formularübergabe                                 |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für die Formularübergabe                                                              |
| [`height`](#height)                           | `image`                                                                      | Entspricht dem Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                           |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des id-Attributs der {{htmlelement('datalist')}} zur Autovervollständigung                        |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Maximaler Wert                                                                                         |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) des `value`                                                        |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Minimaler Wert                                                                                         |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Minimale Länge (Anzahl der Zeichen) des `value`                                                        |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolean. Ob mehrere Werte erlaubt sind                                                                 |
| [`name`](#name)                               | alle                                                                         | Name des Formularsteuerelements. Mit dem Formular als Teil eines Namens/Wert-Paares übermittelt        |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Muster, dem `value` entsprechen muss, um gültig zu sein                                                |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der im Formularsteuerelement erscheint, wenn kein Wert eingestellt ist                           |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Bezeichnet ein `<input type="button">` als Steuerung für ein Popover-Element                           |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Gibt die Aktion an, die eine Popover-Steuerung ausführen soll                                          |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht editierbar                                                                 |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolean. Ein Wert ist erforderlich oder muss geprüft werden, damit das Formular absendbar ist          |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe des Steuerungselements                                                                           |
| [`src`](#src)                                 | `image`                                                                      | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                    |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Inkrementelle Werte, die gültig sind                                                                   |
| [`type`](#type)                               | alle                                                                         | Art des Formularsteuerelements                                                                         |
| [`value`](#value)                             | alle außer `image`                                                           | Der Wert des Steuerungselements. Wenn im HTML angegeben, entspricht dem Anfangswert                    |
| [`width`](#width)                             | `image`                                                                      | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                             |

Einige zusätzliche nicht standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Gültig nur für den `file`-Eingabetyp. Das `accept`-Attribut definiert, welche Dateitypen in einem Datei-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alpha`
  - : Gültig nur für den `color`-Eingabetyp. Das `alpha`-Attribut ermöglicht es dem Endnutzer, die Transparenz der gewählten Farbe einzustellen.

- `alt`
  - : Gültig nur für die `image`-Schaltfläche. Das `alt`-Attribut liefert Alternativtext für das Bild, der angezeigt wird, wenn das Bild [`src`](#src) fehlt oder anderweitig nicht geladen wird. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch in Großbuchstaben umgewandelt wird und, wenn ja, in welcher Weise. Siehe die globale Attributseite [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** boolesches Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge, die beschreibt, welche Art von Autovervollständigungsfunktionalität die Eingabe bieten soll, falls vorhanden. Eine typische Implementierung von Autovervollständigung ruft zuvor in dasselbe Eingabefeld eingegebene Werte ab, aber es können auch komplexere Formen der Autovervollständigung existieren. Beispielsweise könnte ein Browser mit einer Geräteliste von Kontakten interagieren, um E-Mail-Adressen in einem E-Mail-Eingabefeld zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für erlaubte Werte.

    Das `autocomplete`-Attribut ist gültig bei `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Wirkung auf Eingabetypen, die weder numerische noch Textdaten zurückgeben, es ist gültig für alle Eingabetypen außer `checkbox`, `radio`, `file` oder irgendeinen der Schaltflächentypen.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für zusätzliche Informationen, einschließlich Informationen zur Passwortsicherheit und wie sich `autocomplete` leicht für `hidden` von anderen Eingabetypen unterscheidet.

- `autofocus`
  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass die Eingabe automatisch den Fokus haben sollte, wenn die Seite fertig geladen hat (oder wenn das {{HTMLElement("dialog")}}, das das Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erlangen, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element gesetzt ist, erhält das erste Element mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf Eingaben vom Typ `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren eines Formularsteuerelements kann sehbeeinträchtigte Menschen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, "teleportieren" Bildschirmleser ihren Benutzer ohne Vorwarnung beim Formularsteuerelement.

    Ziehen Sie Barrierefreiheit sorgfältig in Betracht, wenn Sie das `autofocus`-Attribut verwenden. Automatisches Fokussieren auf ein Steuerungselement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass dynamische Tastaturen auf einigen Touch-Geräten angezeigt werden. Während ein Bildschirmleser das Label des fokussierten Formularsteuerelements ansagt, wird der Bildschirmleser davor nichts ansagen, und der sehende Benutzer auf einem kleinen Gerät wird den Kontext, der durch den vorhergehenden Inhalt geschaffen wird, gleichsam verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und nur gültig für den `file`-Eingabetyp. Das `capture`-Attribut definiert, welches Medium—Mikrofon, Video oder Kamera—verwendet werden soll, um eine neue Datei für den Upload mit `file`-Upload-Steuerelement bei unterstützenden Szenarien aufzunehmen. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`
  - : Gültig für beide Typen `radio` und `checkbox` ist `checked` ein boolesches Attribut. Wenn in einem `radio`-Typ vorhanden, gibt es an, dass die Optionsschaltfläche die derzeit ausgewählte in der Gruppe der gleichnamigen Optionsschaltflächen ist. Wenn im `checkbox`-Typ, gibt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn der Zustand des Kontrollkästchens geändert wird, wird dieses Inhaltsattribut nicht aktualisiert. (Nur das [`checked`-IDL-Attribut von HTMLInputElement](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird der Wert von Kontrollkästchen und Optionsschaltflächen nur dann in die gesendeten Daten aufgenommen, wenn sie derzeit `checked` sind. Wenn sie vorhanden sind, werden der Name und die Wert(e) der aktivierten Steuerelemente eingereicht.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, werden die Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, erscheint es überhaupt nicht in den Formulardaten. Der Standardwert für Kontrollkästchen und Optionsschaltflächen ist `on`.

- `colorspace`
  - : Gültig nur für den `color`-Eingabetyp, gibt das `colorspace`-Attribut den {{Glossary("Color_space", "Farbraum")}}, der mit dem Eingabetyp `color` verwendet wird, an. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe ist im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies schließt [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und {{cssxref("hex-color")}}-Werte ein. Der Farbwert ist auf 8 Bit pro `r`, `g` und `b`-Komponente begrenzt. Dies ist der Standard.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3-Farbraum")}}, z. B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email`-Eingabetypen, ermöglicht das `dirname`-Attribut das Übermitteln der Richtungsangabe des Elements. Wenn es enthalten ist, wird das Formularsteuerelement mit zwei Namen/Wert-Paaren übermittelt: das erste ist der [`name`](#name) und [`value`](#value), das zweite das `dirname`-Attribut als Name mit einem Wert von `ltr` oder `rtl`, wie vom Browser angegeben.

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

    Wenn das oben stehende Formular übermittelt wird, erzeugt die Eingabe sowohl das `name` / `value`-Paar von `fruit=cherry` als auch das `dirname` / -Richtungspaar von `fruit-dir=ltr`.
    Für weitere Informationen siehe das [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren sollte. Deaktivierte Eingaben werden typischerweise in einer gedimmten Farbe oder auf andere Weise angezeigt, um anzuzeigen, dass das Feld nicht verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und sie werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl es von der Spezifikation nicht erforderlich ist, wird Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` über Seitenladevorgänge hinweg [beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Eine Zeichenfolge, die das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verbunden ist (d.h. ihr **Formularbesitzer**). Der Wert dieser Zeichenfolge, falls vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächsten umschließenden Formular, falls vorhanden, verknüpft.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe irgendwo im Dokument zu platzieren, aber es mit einem Formular an anderer Stelle im Dokument einzuschließen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem einzigen Formular verbunden werden.

- `formaction`
  - : Nur gültig für die `image` und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formenctype`
  - : Nur gültig für die `image` und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formmethod`
  - : Nur gültig für die `image` und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formnovalidate`
  - : Nur gültig für die `image` und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `formtarget`
  - : Nur gültig für die `image` und `submit`-Eingabetypen. Siehe den {{HTMLElement("input/submit", "submit")}}-Eingabetyp für weitere Informationen.
- `height`
  - : Nur gültig für die `image`-Eingabeschaltfläche. Die `height` ist die Höhe der Bilddatei, die angezeigt werden soll, um die grafische Senden-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss. Zweck ist es, das Element bei der Verlinkung zu identifizieren. Der Wert wird als Wert des `for`-Attributs von {{htmlelement('label')}} verwendet, um das Label mit dem Formularsteuerelement zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, der für alle Elemente gültig ist. Gibt einen Hinweis an Browser, welche Art von virtueller Tastaturkonfiguration verwendet werden soll, wenn dieses Element oder sein Inhalt bearbeitet wird. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der Wert, der dem `list`-Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) einer {{HTMLElement("datalist")}}-Element sein, das sich im selben Dokument befindet. Die `<datalist>` bietet eine Liste vordefinierter Werte an, um sie dem Benutzer für diese Eingabe vorzuschlagen. Alle Werte in der Liste, die mit dem [`type`](#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig für `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Gemäß den Spezifikationen wird das `list`-Attribut nicht von den Typen `hidden`, `password`, `checkbox`, `radio`, `file` oder irgendeinem der Schaltflächentypen unterstützt.

    Je nach Browser kann der Benutzer ein benutzerdefiniertes Farbpalette, Strichmarkierungen entlang eines Bereichs oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber nicht aufgelistete Werte erlaubt, sehen. Weitere Informationen zu anderen Eingabetypen finden Sie in der [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility).

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den größten Wert im Bereich der erlaubten Werte. Wenn der eingegebene [`value`](#value) des Elements diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen maximalen Wert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (z.B. bei Datums- oder Zeitangaben), kann der Wert von `max` unter dem Wert von `min` liegen, was anzeigt, dass der Bereich sich umschlagen kann; beispielsweise ermöglicht dies, einen Zeitbereich von 22 Uhr bis 4 Uhr anzugeben.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die maximale Stringlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss ebenfalls größer als oder gleich dem `minlength`-Wert sein.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger ist als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben, als durch das `maxlength`-Attribut erlaubt ist. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den am wenigsten negativen Wert im Bereich der erlaubten Werte. Wenn der eingegebene [`value`](#value) des Elements weniger ist als dieser, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen minimalen Wert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert kleiner ist als das Minimum, das durch das `min`-Attribut erlaubt ist, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (z.B. bei Datums- oder Zeitangaben), kann der Wert von `max` unter dem Wert von `min` liegen, was anzeigt, dass der Bereich sich umschlagen kann; beispielsweise ermöglicht dies, einen Zeitbereich von 22 Uhr bis 4 Uhr anzugeben.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimale Stringlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer ist als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}, was die Formularübermittlung verhindert. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das boolesche `multiple`-Attribut gibt, falls gesetzt, an, dass der Benutzer durch Kommas getrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit dem `file`-Eingabefeld wählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`
  - : Eine Zeichenfolge, die einen Namen für das Eingabesteuerelement spezifiziert. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als erforderliches Attribut (auch wenn es nicht so ist). Wenn eine Eingabe keinen oder einen leeren `name` hat, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, nicht markierte Optionsschaltflächen, nicht markierte Kontrollkästchen und Zurücksetzen-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:
    1. `_charset_` : Wenn es als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der Wert der Eingabe vom {{Glossary("user_agent", "Benutzeragenten")}} automatisch auf die beim Übermitteln des Formulars verwendete Zeichenkodierung eingestellt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erzeugt ein einzigartiges Verhalten für Optionsschaltflächen.

    Nur eine einzige Optionsschaltfläche in einer gleichnamigen Gruppe kann zu einem gegebenen Zeitpunkt aktiviert sein. Das Auswählen einer Optionsschaltfläche in dieser Gruppe deaktiviert automatisch eine aktuell ausgewählte Optionsschaltfläche in derselben Gruppe. Der Wert dieser einen aktivierten Optionsschaltfläche wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Wenn man in eine Gruppe von gleichnamigen Optionsschaltflächen wechselt, wird, falls eine ausgewählt ist, diese den Fokus erhalten. Wenn sie nicht in der Quellreihenfolge gruppiert sind, wird, wenn eine der Gruppe ausgewählt ist, beim Eintritt in die Gruppe mit der Blockverschiebung begonnen, wobei alle, die nicht ausgewählt sind, übergangen werden. Mit anderen Worten, wenn eine ausgewählt ist, wird das Übergehen von Optionsschaltflächen in der Gruppe, die nicht gewählt sind, überlaufen. Wenn keine überprüft ist, erhält die Gruppe der Optionsschaltflächen den Fokus, wenn die erste Schaltfläche in der gleichnamigen Gruppe erreicht wird.

    Sobald eine der Radio-Buttons in einer Gruppe den Fokus hat, wird die Verwendung der Pfeiltasten durch alle Radio-Buttons desselben Namens navigieren, auch wenn die Funk-Buttons nicht in der Reihenfolge des Quellcodes gruppiert sind.

    Wenn einem Eingabeelement ein `name` gegeben wird, wird dieser Name zu einer Eigenschaft der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) Eigenschaft des besitzenden Formularelements. Wenn Sie eine Eingabe haben, deren `name` auf `guest` gesetzt ist, und eine andere, deren `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wird, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld und `hatSize` das Objekt für das `hat-size`-Feld sein.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einer eingebauten Eigenschaft des Formulars entspricht, da Sie in diesem Fall die vordefinierte Eigenschaft oder Methode mit dieser Referenz auf das entsprechende Eingabeobjekt überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`. Das `pattern`-Attribut wird verwendet, um einen regulären Ausdruck zu kompiliert, den der [`value`](#value) der Eingabe erfüllen muss, damit der Wert bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) gültig ist. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Es sollten keine Schrägstriche um den Mustertext angegeben werden. Bei der Kompilierung des regulären Ausdrucks:
    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, sodass die Übereinstimmung gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag angegeben, sodass das Muster als Sequenz von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird.

    Wenn das `pattern`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut komplett ignoriert. Wenn das Musterattribut gültig ist und ein nicht leerer Wert nicht dem Muster entspricht, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Falls [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden durch Kommas getrennten Wert überprüft.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe einschließen. Sie können auch ein [`title`](#title)-Attribut hinzufügen, um zu erklären, was die Anforderungen sind, um das Muster zu erfüllen; die meisten Browser werden diesen Titel als Tooltip anzeigen. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`. Das `placeholder`-Attribut liefert dem Benutzer einen kurzen Hinweis auf die Art der Informationen, die im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Datenart gibt, anstatt eine Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrücklaufzeichen oder Zeilenumbrüche enthalten. Beispielsweise, wenn in einem Feld erwartet wird, den Vornamen eines Benutzers zu erfassen, und das Label dafür lautet "Vorname", wäre ein geeigneter Platzhalter "z.B. Mustafa".

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`
  - : Verwandelt ein `<input type="button">`-Element in eine Popover-Steuerungsschaltfläche; nimmt die ID des zu steuernden Popover-Elements als Wert. Siehe die [Popover-API](/de/docs/Web/API/Popover_API)-Startseite für weitere Details. Die Erstellung einer Beziehung zwischen einem Popover und seiner Steuerungsschaltfläche mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Steuerung und platziert das Popover in einer logischen Position im Fokusnavigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und Hilfstechnologie-Benutzer (AT) zugänglicher. Siehe auch [Popover-Zugänglichkeitseigenschaften](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerungen mit [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

- `popovertargetaction`
  - : Gibt die Aktion an, die auf ein Kontroll-`<input type="button">`-Popover-Element ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Die Schaltfläche verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verborgenes Popover zu verstecken, wird keine Aktion ausgeführt.
    - `"show"`
      - : Die Schaltfläche zeigt ein verborgenes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Mit der Schaltfläche wird ein Popover zwischen sichtbar und verborgen umgeschaltet. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt ist, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerungsschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten können sollte. Das `readonly`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` Eingabetypen unterstützt.

    Siehe [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) für weitere Informationen.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein boolesches Attribut, das, falls vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe festlegen muss, bevor das besitzende Formular übermittelt werden kann. Das `required`-Attribut wird von den Eingaben `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required) für weitere Informationen.

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`. Das `size`-Attribut gibt an, wie viel von der Eingabe angezeigt wird. Basically creates same result as setting CSS [`width`](/de/docs/Web/CSS/width) property mit ein paar Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Bei `password` und `text` ist es die Anzahl der Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, bei den anderen Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`
  - : Gültig nur für die `image`-Eingabeschaltfläche. `src` ist eine Zeichenfolge, die die URL der Bilddatei, die angezeigt werden soll, um die grafische Senden-Schaltfläche darzustellen, spezifiziert. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`. Das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss. Nur Werte, die eine ganze Anzahl von Schritten vom Stützpunktwert entfernt sind, sind gültig. Der Stützpunkt ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), falls angegeben, andernfalls [`value`](#value), oder `0`, falls nichts angegeben wird (außer bei `week`, dessen Standardstützpunkt −259.200.000 ist, was dem Start von Woche `1970-W01` entspricht).

    Wenn nicht explizit angegeben:
    - `step` beträgt standardmäßig 1 bei `number` und `range`.
    - Jeder Datum/Zeit-Eingabetyp hat einen Standardwert für `step`, der für den Typ geeignet ist. Siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein—ganz oder fließend—oder der spezielle Wert `any`, was bedeutet, dass kein Schritt eingeführt ist und jeder Wert erlaubt ist (andere Einschränkungen, wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) außen vorgelassen).

    Zum Beispiel ist bei `<input type="number" min="10" step="2">` jeder gerade Integer, `10` oder größer, gültig. Wenn ausgelassen, `<input type="number">`, ist jeder Integer gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, weil `step` standardmäßig `1` ist. Damit `4.2` gültig ist, müsste `step` auf einen beliebigen Wert gesetzt sein, 0.1, 0.2 oder der `min`-Wert hätte auf eine Zahl, die auf `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht den Schrittkonfigurationen entsprechen, wird der Wert bei der Einschränkungsvalidierung als ungültig angesehen und entspricht der `:invalid` Pseudoklasse.

    Siehe [Client-seitige Validierung](#clientseitige_validierung) für weitere Informationen.

- `tabindex`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen. Es handelt sich um ein Integer-Attribut, das angibt, ob das Element Eingabefokus halten kann (zentriert ist) und ob es an der sequentiellen Tastaturnavigation beteiligt sein sollte. Da alle Eingabetypen außer für Eingaben vom Typ hidden fokussierbar sind, sollte dieses Attribut nicht auf Formularsteuerelementen verwendet werden, da dies ein Management der Fokussierreihenfolge für alle Elemente innerhalb des Dokuments erforderlich machen würde, wobei das Risiko besteht, die Benutzerfreundlichkeit und Zugänglichkeit zu beeinträchtigen, wenn dies falsch durchgeführt wird.

- `title`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, das einen Text enthält, der beratende Informationen über das Element, zu dem es gehört, darstellt. Solche Informationen können typischerweise, aber nicht zwingend, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als hauptsächliche Erklärung des Zwecks des Formularsteuerelements verwendet werden. Stattdessen sollte das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id) des Formularkontrollelements gesetzt ist, verwendet werden. Siehe [Labels](#labels) unten.

- `type`
  - : Eine Zeichenfolge, die den anzuzeigenden Steuerungstyp spezifiziert. Um zum Beispiel eine Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben ist), wird der Eingabetyp `text` verwendet, was ein Klartexteingabefeld erzeugt.

    Erlaubte Werte sind in [Eingabetypen](#input_types) oben aufgelistet.

- `value`
  - : Der Wert des Eingabesteuerelements. Wenn im HTML angegeben, ist dies der Anfangswert, und von da an kann er zu jeder Zeit mithilfe von JavaScript verändert oder abgerufen werden, um auf die jeweilige [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekteigenschaft `value` zuzugreifen. Das `value`-Attribut ist immer optional, sollte aber als zwingend angesehen werden für `checkbox`, `radio` und `hidden`.

- `width`
  - : Gültig nur für die `image`-Eingabeschaltfläche. Die `width` ist die Breite der Bilddatei, die angezeigt werden soll, um die grafische Senden-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind ebenfalls in einigen Browsern verfügbar. Im Allgemeinen sollten Sie sie vermeiden, es sei denn, sie sind unvermeidbar.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, um Live-Suchergebnisse zu aktualisieren, während der Benutzer den Wert des Feldes bearbeitet. <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein Zeichen, welches die Art der Aktion bezeichnet, die ausgeführt wird, wenn der Benutzer bei Bearbeitung des Feldes die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt. Dies wird verwendet, um ein geeignetes Label für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Setzt die Orientierung des Bereichssliders. <strong>Nur Firefox.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl an Elementen, die in der Dropdownliste der vorherigen Suchabfragen angezeigt werden sollten. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der anzeigt, ob der Benutzer nur Verzeichnisse auswählen darf (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist)
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das boolesche Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome, etc.), das, wenn vorhanden, dem {{Glossary("user_agent", "Benutzeragenten")}} anzeigt, das Eingabefeld als Live-Suche zu behandeln. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das die Suchbox darstellt. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer eine Suche ausdrücklich initiiert (z.B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes).

    Das `search`-Ereignis ist rate-begrenzt, sodass es nicht öfter gesendet wird als in einem vom Implementierungszwecke festgelegten Intervall.

- `orient` {{non-standard_inline}}
  - : Ähnlich wie die nicht standardisierte CSS-Eigenschaft -moz-orient, die {{htmlelement('progress')}} und {{htmlelement('meter')}} beeinflusst, definiert das `orient`-Attribut die Orientierung des Bereichssliders. Dazu zählen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wobei der Bereich vertikal angezeigt wird. Siehe [Erstellung vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularelemente.

- `results` {{non-standard_inline}}
  - : Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der Ihnen erlaubt, die maximale Anzahl von Einträgen, die im nativ bereitgestellten Dropdown-Menü der vorherigen Suchabfragen des `<input>`-Elements angezeigt werden sollen, zu überschreiben.

    Der Wert muss eine nicht negative Dezimalzahl sein. Ist diese Zahl nicht angegeben oder ungültig, wird die Standardanzahl von Einträgen im Browser verwendet.

- `webkitdirectory` {{non-standard_inline}}
  - : Das boolesche `webkitdirectory`-Attribut gibt, falls vorhanden, an, dass nur Verzeichnisse vom Nutzer ausgewählt werden dürfen. Weitere Einzelheiten und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später nutzbar. Dennoch sollte es trotz der relativ breiten Unterstützung nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Ebenfalls verfügbar sind jene Methoden, die von den übergeordneten Schnittstellen spezifiziert sind: [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements Prüfungen zur Gültigkeit besteht; andernfalls gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements Prüfungen zur Gültigkeit besteht; andernfalls gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und meldet (falls das Ereignis nicht abgebrochen wird) das Problem dem Benutzer.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt (wie einem visuellen Farbfilter oder Kalender-Dateneingaben) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt die Inhalte des angegebenen Bereichs von Zeichen im Eingabeelement auf einen gegebenen String. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines Text-Eingabeelements aus. Tut nichts für Eingaben, die nicht als Text-Eingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Picker für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber durch einen Knopfdruck oder andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins, standardmäßig, oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, die ersetzte Elemente sind, haben ein paar Eigenschaften, die für Nicht-Formular-Elemente nicht anwendbar sind. Es gibt CSS-Selektoren, die speziell Formularelemente basierend auf ihren UI-Eigenschaften, auch bekannt als UI-Pseudoklassen, anvisieren können. Das Input-Element kann auch nach Typ mit Attributselektoren angezielt werden. Es gibt auch einige besonders nützliche Eigenschaften.

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
        Jedes derzeit aktivierbare Element, das aktiviert (ausgewählt, darauf geklickt, eingegeben werden usw.) oder fokussiert werden kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierbaren Zustand hat, d.h. es könnte sonst aktiviert (ausgewählt, darauf geklickt, eingegeben werden usw.) oder fokussiert werden, wäre es nicht deaktiviert.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element, das nicht vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elementen mit dem <a href="#placeholder"><code>placeholder</code></a> Attribut, das bisher keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die standardmäßig in einer Gruppe verwandter Elemente sind. Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Input-Typen, die beim Laden oder Rendern der Seite aktiviert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Input-Typen, die aktuell aktiviert sind (und die {{HTMLElement("option")}} in einer {{HTMLElement("select")}}, die derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente, deren indeterminate-Eigenschaft von JavaScript auf true gesetzt wurde, {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle Radiobuttons mit dem gleichen Namenswert im Formular nicht markiert sind, und {{HTMLElement("progress")}} Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die eine Beschränkungsvalidierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die eine Beschränkungsvalidierung angewendet wird und die derzeit ungültig sind. Passt zu einem Formularelement, dessen Wert nicht den durch seine Attribute festgelegten Beschränkungen entspricht, wie zum Beispiel <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute sowie das <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute festgelegten Bereichsgrenzen liegt oder nicht dem <a href="#step"><code>step</code></a> entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat. Passt nur zu Elementen, die erforderlich gemacht werden können. Das Attribut, das zu einem nicht erforderlichen Element hinzugefügt wird, führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element, das NICHT das <a href="#required"><code>required</code></a> Attribut gesetzt hat. Passt nicht zu Elementen, die nicht erforderlich gemacht werden können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlassen des Kontrollfelds aktiviert. Passt auf ungültige Eingaben, jedoch nur nach einer Benutzerinteraktion, wie durch Fokussierung auf das Kontrollfeld, Verlassen des Kontrollfelds oder Versuch, das Formular einzureichen, das das ungültige Kontrollfeld enthält.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code> Elemente, die einen Picker anzeigen, aus dem der Benutzer einen Wert auswählen kann (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — jedoch nur, wenn das Element im offenen Zustand ist, das heißt, wenn der Picker angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen-Beispiel

Wir können ein Kontrollkästchen-Label basierend darauf stylen, ob das Kontrollkästchen aktiviert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einem aktivierten Input kommt. Es wurden keine Stile angewendet, wenn das `input` nicht aktiviert ist.

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

Es ist möglich, verschiedene Arten von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) zu selektieren. CSS-Attributselektoren passen zu Elementen basierend entweder nur auf das Vorhandensein eines Attributs oder den Wert eines gegebenen Attributs.

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

Standardmäßig erscheint der Placeholder-Text in einem durchscheinenden oder hellgrauen Farbton. Das {{cssxref('::placeholder')}} Pseudoelement stellt den [`placeholder` Text](#placeholder) des Eingabefeldes dar. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil des CSS-Eigenschaften, der auf das {{cssxref("::first-line")}} Pseudoelement angewendet werden kann, kann in einer Regel verwendet werden, die `::placeholder` im Selektor enthält.

### caret-color

Eine spezifische Eigenschaft für Elemente der Texteingabe ist die CSS-Eigenschaft {{cssxref("caret-color")}}, die es Ihnen ermöglicht, die Farbe zu setzen, die für die Darstellung des Texteingabecursors verwendet wird:

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

Die {{cssxref("field-sizing")}} Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. diese erhalten standardmäßig eine bevorzugte Größe.) Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben und Formularelementen zu erlauben, sich in der Größe an ihren Inhalt anzupassen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die sich dem Inhalt anpassen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (z. B. [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}} Elementen.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es ein ersetztes Element ist, können Position und Größe des Elements innerhalb seines Rahmens mithilfe der CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen über das Hinzufügen von Farbe zu Elementen in HTML siehe:

- [Farbe auf HTML-Elementen mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Styling-Optionen für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels werden benötigt, um erläuternden Text mit einem `<input>` zu assoziieren. Das {{HTMLElement("label")}} Element liefert erklärende Informationen zu einem Formfeld, die _immer_ angemessen sind (abgesehen von Layoutproblemen, die Sie haben könnten). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugehörige Labels

Das semantische Paaren von `<input>` und `<label>` Elementen ist nützlich für unterstützende Technologien wie Screenreader. Indem Sie diese mit dem `for`-Attribut des `<label>` verbinden, verknüpfen Sie das Label mit der Eingabe so, dass Screenreader Eingaben den Benutzern präziser beschreiben können.

Es genügt nicht, einfachen Text neben das `<input>`-Element zu setzen. Vielmehr erfordert Usability und Barrierefreiheit die Einbindung eines entweder impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist nicht zugänglich: Es besteht keine Beziehung zwischen der Aufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere "Treffer"-Fläche für Maus- und Touchscreen-Benutzer zum Klicken oder Berühren. Indem Sie ein `<label>` mit einem `<input>` paaren, ermöglicht das Klicken auf eines von beiden das Fokussieren des `<input>`. Wenn Sie einfachen Text verwenden, um Ihre Eingabe "zu labeln", passiert dies nicht. Das Einbeziehen der Eingabeaufforderung in den Aktivierungsbereich des Eingabefelds ist hilfreich für Menschen mit motorischen Kontrollproblemen.

Als Webentwickler ist es wichtig, nie davon auszugehen, dass Menschen alles wissen, was wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und damit Ihre Website – garantiert praktisch, dass einige Ihrer Seitenbesucher in ihren Denkprozessen und/oder Umständen variieren, sodass sie Ihre Formulare ohne klare und ordnungsgemäß präsentierte Labels sehr unterschiedlich interpretieren.

#### Platzhalter sind nicht barrierefrei

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text zu spezifizieren, der innerhalb des `<input>`-Bereichs erscheint, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil er das nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Nicht nur ist der Platzhalter für Screenreader nicht zugänglich, sondern er verschwindet, sobald der Benutzer irgendeinen Text in das Formularelement eingibt oder wenn das Formularelement bereits einen Wert enthält. Browser mit automatischen Seitentext-Übersetzungsfunktionen können Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nur, wenn es sich nicht vermeiden lässt. Wenn Sie ein `<input>`-Element labeln müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Clientseitige Validierung

> [!WARNING]
> Clientseitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, überprüfen Sie diese _immer_ auch auf der Serverseite und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zu Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}}-UI-Zuständen abhängig vom aktuellen Zustand jeder Eingabe zu stylen, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben beschrieben, bietet der Browser eine clientseitige Validierung bei (versuchter) Formulareinreichung. Bei der Formulareinreichung, wenn ein Formularelement die Beschränkungsvalidierung nicht besteht, zeigen unterstützende Browser eine Fehlermeldung am ersten ungültigen Formularelement an; entweder eine Standardmeldung basierend auf dem Fehler, oder eine von Ihnen festgelegte Nachricht.

Einige Eingabetypen und andere Attribute beschränken, welche Werte für eine vorgegebene Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler können auftreten, darunter ein `rangeUnderflow`-Fehler, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade ganze Zahl (nicht den Anforderungen des `step`-Attributs entspricht), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für Eingabetypen, deren Wertedomain periodisch ist (d.h. bei dem höchstmöglichen Wert springt der Wert zurück zum Anfang statt zu enden), ist es möglich, dass die Werteigenschaften von [`max`](#max) und [`min`](#min) umgekehrt sind, was anzeigt, dass der Bereich der erlaubten Werte bei `min` beginnt, dann zurück zum niedrigsten möglichen Wert geht, und dann fortfährt, bis `max` erreicht ist. Dies ist besonders nützlich für Datums- und Zeitangaben, zum Beispiel, wenn Sie den Bereich von 20 Uhr bis 8 Uhr zulassen möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und ihre Werte können zu einem spezifischen Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

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
        Tritt auf, wenn der Wert größer ist als der maximale Wert, wie durch das <code>max</code>-Attribut definiert
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code>-Eigenschaft erlaubte
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
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code>-Eigenschaft erforderliche
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein pattern-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht dazu passt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, der Wert jedoch <code>null</code> ist oder das Radio oder Checkbox nicht aktiviert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert passt nicht zum Inkrement für die Schritte. Das Standardinkrement ist <code>1</code>, daher sind nur ganze Zahlen gültig für <code>type="number"</code>, wenn step nicht enthalten ist. <code>step="any"</code> wird diesen Fehler nie auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht der korrekten Typ ist, z. B. ein E-Mail-Adresse enthält kein <code>@</code> oder eine URL enthält nicht ein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formelelement das `required`-Attribut nicht hat, ist kein Wert oder eine leere Zeichenkette nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, wird eine leere Zeichenkette keinen Fehler verursachen.

Wir können Grenzen festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer auf einen Fehler hinweisen, wenn das Formular eingereicht wird.

Neben den im obigen Tabellen beschriebenen Fehlern enthält die Schnittstelle `validityState` die Eigenschaften `badInput`, `valid` und `customError` als schreibgeschützte Booleans. Das Validitätsobjekt umfasst:

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

Für jede dieser Boolean-Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund, warum die Validierung möglicherweise fehlgeschlagen ist, wahr ist, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements allen Beschränkungen entspricht.

Wenn es einen Fehler gibt, werden unterstützende Browser sowohl den Benutzer warnen als auch verhindern, dass das Formular eingereicht wird. Ein Wort der Vorsicht: Wenn eine benutzerdefinierte Fehlermeldung auf einen wahrheitsgemäßen Wert (alles außer der leeren Zeichenkette oder `null`) gesetzt ist, wird verhindert, dass das Formular eingereicht wird. Wenn keine benutzerdefinierte Fehlermeldung vorhanden ist und keine der anderen Eigenschaften `true` ist, wird `valid` wahr sein, und das Formular kann eingereicht werden.

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

Die letzte Zeile, die die benutzerdefinierte Validitätsmeldung auf die leere Zeichenkette zurücksetzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Validität eingestellt ist, folgt das Formular nicht ab und kann nicht eingereicht werden, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die bei `<input>` (und verwandten) Elementen verfügbar ist. Betrachten Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen verursachen standardmäßig eine Fehlermeldung, wenn Sie versuchen, das Formular mit entweder keinem gültigen ausgefüllten Wert oder einem Wert, der nicht dem `pattern` entspricht, einzureichen.

Wenn Sie stattdessen benutzerdefinierte Fehlermeldungen anzeigen möchten, können Sie JavaScript wie das folgende verwenden:

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

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich dessen Wert ändert, indem wir die Methode `checkValidity()` über den `input`-Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst und die `invalid`-Ereignishandlerfunktion wird ausgeführt. In dieser Funktion prüfen wir, ob der Wert ungültig ist, weil er leer ist oder nicht dem Muster entspricht, und setzen eine benutzerdefinierte Fehlermeldung.
- In der Folge, wenn der Input-Wert ungültig ist, wenn die Senden-Schaltfläche gedrückt wird, wird eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er wie erwartet gesendet. Dazu muss die benutzerdefinierte Gültigkeit abgebrochen werden, indem `setCustomValidity()` mit einem leeren String-Wert aufgerufen wird. Wir tun dies daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn dies nicht getan wird und eine benutzerdefinierte Gültigkeit zuvor festgelegt wurde, registriert die Eingabe als ungültig, selbst wenn sie aktuell einen gültigen Wert bei der Einreichung enthält.

> [!NOTE]
> Validieren Sie immer die Eingabebeschränkungen sowohl auf der Client- als auch auf der Serverseite. Beschränkungsvalidierung beseitigt nicht die Notwendigkeit für eine Überprüfung auf der _Serverseite_. Ungültige Werte können dennoch von älteren Browsern oder bösen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte in vielen Versionen ein proprietäres Fehlerattribut — `x-moz-errormessage` —, mit dem Sie benutzerdefinierte Fehlermeldungen auf ähnliche Weise festlegen konnten. Dies wurde in Version 66 entfernt (siehe [Firefox Fehler 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Welche Eingaben für bestimmte `<input>`-Typen erlaubt sind, hängt von der Ländereinstellung ab. In einigen Regionen ist 1.000,00 eine gültige Zahl, während in anderen Regionen die gültige Schreibweise 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Region zur Validierung der Eingabe des Benutzers zu bestimmen (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut am Element oder einem seiner Elternteile angegeben ist.
- Versuchen Sie die Sprache, die durch einen `Content-Language` HTTP-Header spezifiziert ist. Oder,
- Wenn keine angegeben, verwenden Sie das Browser-Locale.

## Barrierefreiheit

### Labels

Beim Einfügen von Eingaben ist es ein Barrierefreiheitsanforderung, Labels beizufügen. Dies ist nötig, damit Benutzer, die unterstützende Technologien verwenden, wissen, wofür die Eingabe ist. Außerdem fokussiert das Klicken oder Berühren eines Labels das damit verbundene Formelement. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erhöht die Fläche, die ein Benutzer anklicken oder berühren kann, um das Formelement zu aktivieren. Dies ist besonders nützlich (und sogar erforderlich) für Radiobuttons und Kontrollkästchen, die winzig sind. Für mehr Informationen zu Labels im Allgemeinen, siehe [Labels](#labels).

Das folgende Beispiel zeigt, wie ein `<label>` einem `<input>` Element im obigen Stil zugeordnet werden kann. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert mit der `id` des Inputs übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bieten, damit sie leicht zu aktivieren sind. Dies hilft einer Vielzahl von Menschen, darunter Menschen mit motorischen Kontrollproblemen und Menschen, die ungenaue Formen der Eingabe verwenden, wie einen Stift oder Finger. Eine minimale interaktive Größe von 44×44 [CSS-Pixel] (https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Erfolgsfaktor 2.5.5: Zielgröße verstehen | W3C Leitfaden WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Kurzer Test: Große Tippziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, gelistet, einreichbar, zurücksetzbares, formularassoziiertes Element, <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Schriftsatzinhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann etikettierbares Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Schriftsatzinhalt</a> akzeptiert.
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
            <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">kei#n entsprechendes Rolle</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Zugelassene ARIA-Rollen</th>
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
            <code>Rolle</code> erlaubt
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
- [Anleitung zum Strukturieren eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formularbeschränkungen validieren](/de/docs/Web/HTML/Guides/Constraint_validation)
- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
