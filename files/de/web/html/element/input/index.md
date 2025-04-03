---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Das **`<input>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerungen für webbasierte Formulare zu erstellen, um Daten vom Benutzer zu akzeptieren. Eine Vielzahl von Typen von Eingabedaten und Widgets stehen zur Verfügung, abhängig vom Gerät und dem {{Glossary("user_agent", "user agent")}}. Das `<input>`-Element ist eines der mächtigsten und komplexesten in ganz HTML aufgrund der Vielzahl an Kombinationen von Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich in Abhängigkeit vom Wert des [`type`](#type)-Attributs. Daher werden die verschiedenen Typen auf eigenen Referenzseiten behandelt. Wird dieses Attribut nicht spezifiziert, ist der standardmäßig angenommene Typ `text`.

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
      <td>Ein Kontrollkästchen, das einzelne Werte zur Auswahl/Deselektion ermöglicht.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerelement zur Spezifizierung einer Farbe; öffnet einen Farbwähler, wenn es in unterstützenden Browsern aktiv ist.
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
        Öffnet einen Datumsauswähler oder numerische Räder für Jahr, Monat und Tag, wenn es in unterstützenden Browsern aktiv ist.
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
        Ein Steuerelement zur Eingabe von Datum und Zeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Räder für Datum- und Zeit-Komponenten, wenn es in unterstützenden Browsern aktiv ist.
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
        <code>text</code>-Eingabe, verfügt aber über Validierungsparameter und eine relevante
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
        Ein Steuerelement, das den Benutzer eine Datei auswählen lässt.
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
        Ein grafischer <code>submit</code>-Knopf. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert ist.
        Das <a href="#alt"><code>alt</code></a>-Attribut wird angezeigt, wenn die Bildquelle <a href="#src"><code>src</code></a> fehlt.
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
        Ein Steuerelement zur Eingabe einer Zahl. Zeigt einen Spinner und fügt eine Standard-
        Validierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten
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
        Einzeiliges Textfeld, dessen Wert unkenntlich gemacht wird.
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
        Ein Radio-Button, der die Auswahl eines einzelnen Wertes aus mehreren Optionen mit
        demselben <a href="#name"><code>name</code></a>-Wert ermöglicht.
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
        Ein Steuerelement zur Eingabe einer Zahl, deren genauer Wert nicht wichtig ist.
        Wird als Bereichs-Widget angezeigt, das auf den mittleren Wert standardmäßig eingestellt ist.
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
        Ein Knopf, der den Inhalt des Formulars auf Standardwerte zurücksetzt. Nicht empfohlen.
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
        automatisch aus dem Eingabewert entfernt. Kann in
        unterstützenden Browsern ein Löschsymbol enthalten, das zum Leeren des Feldes verwendet werden kann. Zeigt ein
        Suchsymbol anstelle der Eingabetaste auf einigen Geräten mit dynamischen Tastaturen an.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Ein Knopf, der das Formular abschickt.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        Ein Steuerelement zur Eingabe einer Telefonnummer. Zeigt eine Telefontastatur
        auf einigen Geräten mit dynamischen Tastaturen.
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
      <td>Ein Steuerelement zur Eingabe eines Zeitwerts ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code>-Eingabe, verfügt
        aber über Validierungsparameter und eine relevante Tastatur in unterstützenden Browsern
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
        Ein Steuerelement zur Eingabe eines Datums, bestehend aus einer Wochennummer und einer Jahr-Woche-Zahl, ohne Zeitzone.
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
        Ein Steuerelement zur Eingabe eines Datums und einer Zeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so leistungsfähig wegen seiner Attribute; das [`type`](#type)-Attribut, wie oben mit Beispielen beschrieben, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch das genau gleiche Attributset. Allerdings haben die meisten Attribute in Wirklichkeit nur Einfluss auf eine spezifische Teilmenge von Eingabetypen. Zudem hängt die Auswirkung einiger Attribute auf ein `<input>` vom Eingabetyp ab, und beeinflusst verschiedene Eingabetypen auf unterschiedliche Weise.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird durch eine Liste ergänzt, die jedes Attribut im Detail beschreibt und mit welchen Eingabetypen sie verbunden sind. Attribute, die für die meisten oder alle Eingabetypen üblich sind, werden weiter unten ausführlicher definiert. Attribute, die spezifisch für bestimmte Eingabetypen sind – oder Attribute, die zwar für alle Eingabetypen allgemein sind, aber besondere Verhaltensweisen aufweisen, wenn sie auf einem bestimmten Eingabetyp verwendet werden – sind stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                               | Beschreibung                                                                                       |
| --------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                | Hinweis für den erwarteten Dateityp in Dateiupload-Steuerelementen                                 |
| [`alt`](#alt)                                 | `image`                                                               | Alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                    |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                              | Steuert die automatische Großschreibung des eingegebenen Textes.                                   |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Knöpfe                             | Hinweis für die automatische Ausfüllfunktion im Formular                                           |
| [`capture`](#capture)                         | `file`                                                                | Mediendatei-Aufnahmemethode in Dateiupload-Steuerelementen                                         |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                   | Ob der Befehl oder das Steuerelement markiert ist                                                  |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                     | Name des Formularfeldes zur Übermittlung der Richtungsangabe des Elements bei Formularübertragung  |
| [`disabled`](#disabled)                       | alle                                                                  | Ob das Formular-Steuerelement deaktiviert ist                                                      |
| [`form`](#form)                               | alle                                                                  | Verknüpft das Steuerelement mit einem Formularelement                                              |
| [`formaction`](#formaction)                   | `image`, `submit`                                                     | URL zur Verwendung für die Formularübertragung                                                     |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                     | Kodierungstyp des Formulardatensatzes zur Verwendung für die Formularübertragung                   |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                     | HTTP-Methode zur Verwendung für die Formularübertragung                                            |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                     | Überspringt die Formularüberprüfung zur Übertragung des Formulars                                  |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                     | Browsing-Kontext für die Formularübertragung                                                       |
| [`height`](#height)                           | `image`                                                               | Entspricht Attribut der Höhe für {{htmlelement('img')}}; vertikale Dimension                       |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Knöpfe       | Wert des ID-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsoptionen           |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`  | Maximaler Wert                                                                                     |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                   | Maximale Länge (Anzahl der Zeichen) von `value`                                                    |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`  | Minimaler Wert                                                                                     |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                   | Minimale Länge (Anzahl der Zeichen) von `value`                                                    |
| [`multiple`](#multiple)                       | `email`, `file`                                                       | Boolesch. Ob mehrere Werte zulässig sein sollen                                                    |
| [`name`](#name)                               | alle                                                                  | Name des Formularsteuerelements. Wird mit dem Formular als Teil eines Name/Wert-Paares übermittelt |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                   | Muster, welches das `value` erfüllen muss, um gültig zu sein                                       |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`         | Text, der im Formularsteuerelement erscheint, wenn kein Wert gesetzt ist                           |
| [`popovertarget`](#popovertarget)             | `button`                                                              | Bezeichnet ein `<input type="button">` als Steuerungselement für ein Popover-Element               |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                              | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                   |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Knöpfe | Boolesch. Der Wert ist nicht editierbar                                                            |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Knöpfe                      | Boolesch. Ein Wert ist erforderlich oder muss geprüft werden, um das Formular senden zu können     |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                   | Größe des Steuerelements                                                                           |
| [`src`](#src)                                 | `image`                                                               | Entspricht `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                    |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`  | Inkrementelle Werte, die gültig sind                                                               |
| [`type`](#type)                               | alle                                                                  | Typ des Formularsteuerelements                                                                     |
| [`value`](#value)                             | alle außer `image`                                                    | Der Wert des Steuerelements. Wenn im HTML angegeben, entspricht es dem Anfangswert                 |
| [`width`](#width)                             | `image`                                                               | Entspricht `width`-Attribut für {{htmlelement('img')}}                                             |

Einige zusätzliche, nicht standardisierte Attribute sind nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Gültig nur für den `file`-Eingabetyp, definiert das `accept`-Attribut, welche Dateitypen in einem Dateiupload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alt`

  - : Gültig nur für den `image`-Button, bietet das `alt`-Attribut alternativen Text für das Bild, das den Wert des Attributs anzeigt, wenn die Bildquelle [`src`](#src) fehlt oder anderweitig nicht geladen wird. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise. Weitere Informationen finden Sie auf der globalen Attributseite für [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Nicht** ein Boolesches Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenkette an, die beschreibt, welche Art von Autovervollständigungsfunktionalität die Eingabe bieten soll, falls vorhanden. Eine typische Implementierung von Autovervollständigung ruft zuvor eingegebene Werte im gleichen Eingabefeld ab, aber komplexere Formen der Autovervollständigung können existieren. Zum Beispiel könnte ein Browser mit der Kontaktliste eines Geräts integrieren, um E-Mail-Adressen in einem E-Mail-Eingabefeld zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig auf `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen außer `checkbox`, `radio`, `file` oder irgendeine Art der Knöpfe gültig.

    Besuchen Sie die [`autocomplete`-Attribut-Seite](/de/docs/Web/HTML/Attributes/autocomplete) für zusätzliche Informationen, inklusive Informationen zur Passwortsicherheit und wie `autocomplete` leicht anders für `hidden` ist als für andere Eingabetypen.

- `autofocus`

  - : Ein Boolesches Attribut, welches, wenn es vorhanden ist, angibt, dass das Eingabeformular automatisch den Fokus haben sollte, wenn die Seite fertig geladen ist (oder wenn das {{HTMLElement("dialog")}}-Element, das dieses Element enthält, angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus haben, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als ein Element gesetzt ist, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht bei Eingaben vom Typ `hidden` verwendet werden, da verborgene Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Ein Eingabeelement automatisch zu fokussieren, kann Menschen mit Seheinschränkungen, die Bildschirmlesetechnologie verwenden, oder Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" sich Bildschirmlesegeräte direkt zum Kontrollpunkt ohne vorherige Warnung.

    Seien Sie bei der Barrierefreiheit vorsichtig bei der Verwendung des `autofocus`-Attributs. Automatisches Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Obwohl ein Bildschirmleser das Label des fokussierten Formularelements ankündigt, wird der Bildschirmleser nichts vor dem Label ankündigen und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen das durch den vorhergehenden Inhalt geschaffene Kontext vermissen.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und nur gültig für den `file`-Eingabetyp, definiert das `capture`-Attribut, welche Medien—Mikrofon, Video oder Kamera—zur Aufnahme einer neuen Datei für den Upload mit einem `file`-Upload-Steuerelement in unterstützten Szenarien verwendet werden soll. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`

  - : Gültig sowohl für `radio` als auch `checkbox`-Typen, `checked` ist ein Boolesches Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass der Radio-Button der aktuell ausgewählte in der Gruppe von gleich benannten Radio-Buttons ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es gibt _nicht_ an, ob dieses Kontrollkästchen aktuell ausgewählt ist: wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`checked` IDL-Attribut des HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Anders als andere Eingabesteuerungen werden Werte von Kontrollkästchen und Radio-Buttons nur in die übermittelten Daten einbezogen, wenn sie aktuell `checked` sind. Wenn sie es sind, werden der Name und die Wert(e) der aktivierten Steuerungen gesendet.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen aktiv ist, werden die Formulardaten, die übermittelt werden, `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiviert ist, wird es in den Formulardaten überhaupt nicht aufgelistet. Der Standardwert für Kontrollkästchen und Radio-Buttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für die Eingabetypen `hidden`, `text`, `search`, `url`, `tel` und `email`, ermöglicht das `dirname`-Attribut die Übermittlung der Richtungalität des Elements. Wenn es enthalten ist, wird das Formularelement mit zwei Namen/Wert-Paaren übermittelt: der erste ist der [`name`](#name) und [`value`](#value) und der zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das obige Formular gesendet wird, sendet die Eingabe sowohl das `name` / `value` Paar von `fruit=cherry` als auch das `dirname` / Richtungs-Paar von `fruit-dir=ltr`.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolesches Attribut, das angibt, dass der Benutzer nicht mit dem Eingabesteuerelement interagieren darf, wenn es vorhanden ist. Deaktivierte Eingaben werden typischerweise in einer gedimmten Farbe oder unter Verwendung einer anderen Form von Anzeige rendern, dass das Feld nicht zur Verfügung steht.

    Insbesondere erhalten deaktivierte Eingaben nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht von der Spezifikation gefordert, behält Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` über Seitenladungen hinweg bei. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um dieses Feature zu steuern.

- `form`

  - : Eine Zeichenkette, die das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (das heißt, ihr **Formulareigentümer**). Der Wert dieser Zeichenkette, wenn vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, ist das `<input>`-Element mit dem nächstgelegenen enthaltenen Formular verknüpft, sofern vorhanden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe irgendwo im Dokument zu platzieren, aber es mit einem Formular an anderer Stelle einzuschließen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft sein.

- `formaction`
  - : Nur gültig für `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formenctype`
  - : Nur gültig für `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formmethod`
  - : Nur gültig für `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formnovalidate`
  - : Nur gültig für `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `formtarget`
  - : Nur gültig für `image` und `submit`-Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}}-Eingabetyp.
- `height`
  - : Nur gültig für den `image`-Eingabeknopf, die `height` ist die Höhe der Bilddatei, die zur Darstellung des grafischen Submit-Knopfs angezeigt werden soll. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, definiert es eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Sein Zweck ist die Identifizierung des Elements beim Verlinken. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um das Label mit dem Formularelement zu verbinden. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, gibt er einen Hinweis an Browser über die Art der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seiner Inhalte verwendet werden soll. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der Wert, der dem `list`-Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements sein, das sich im selben Dokument befindet. Das `<datalist>` bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig auf `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Entsprechend den Spezifikationen wird das `list`-Attribut nicht von den Typen `hidden`, `password`, `checkbox`, `radio`, `file` oder irgendeinem der Knopftypen unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Markierungen entlang eines Bereichs oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber nicht aufgelistete Werte zulässt. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für die Typen `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, definiert es den größten Wert im Bereich zugelassener Werte. Wenn der im Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, dann hat das Element keinen maximalen Wert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was anzeigt, dass der Bereich "umschlagen" kann; zum Beispiel erlaubt dies die Angabe eines Zeitraums von 22 Uhr bis 4 Uhr.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert es die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes größer als `maxlength` UTF-16-Codeeinheiten ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben als durch das `maxlength`-Attribut erlaubt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`,` week`, `time`, `datetime-local`, `number`, und `range`, definiert es den kleinsten Wert im Bereich zugelassener Werte. Wenn der im Element eingegebene [`value`](#value) diesen unterschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, dann hat das Element keinen minimalen Wert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht-leerer Wert kleiner ist als der minimal erlaubte durch das `min`-Attribut, verhindert die Einschränkungsvalidierung das Absenden des Formulars. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was anzeigt, dass der Bereich "umschlagen" kann; zum Beispiel erlaubt dies die Angabe eines Zeitraums von 22 Uhr bis 4 Uhr.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, definiert es die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem Wert ist, der von `maxlength` angegeben ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kleiner ist als `minlength` UTF-16-Codeeinheiten, was verhindert, dass das Formular gesendet wird. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolesche `multiple`-Attribut, wenn gesetzt, bedeutet, dass der Benutzer in der E-Mail-Steuerung kommagetrennte E-Mail-Adressen eingeben oder mehr als eine Datei mit dem `file`-Eingabesteuerung auswählen kann. Siehe den {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `name`

  - : Eine Zeichenkette, die einen Namen für das Eingabesteuerelement angibt. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als obligatorisches Attribut (obwohl es nicht ist). Wenn eine Eingabe keine `name`-Angabe hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerungen, nicht markierte Radio-Buttons, nicht markierte Kontrollkästchen und Zurücksetztaste werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wird verwendet als der Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}}, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "Benutzeragenten")}} auf die Zeichenkodierung gesetzt, mit der das Formular gesendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name) -Attribut erstellt ein einzigartiges Verhalten für Radio-Buttons.

    Nur ein Radio-Button in einer gleichnamigen Gruppe von Radio-Buttons kann gleichzeitig ausgewählt sein. Die Auswahl eines beliebigen Radio-Buttons in dieser Gruppe hebt automatisch die Auswahl des aktuell ausgewählten Radio-Buttons in derselben Gruppe auf. Der Wert des einen ausgewählten Radio-Buttons wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird.

    Beim Tab-Durchlaufen in eine Gruppe von gleichnamigen Radio-Buttons, wenn einer ausgewählt ist, erhält dieser den Fokus. Wenn sie nicht in der Quellreihenfolge gruppiert sind, wenn einer der Gruppe ausgewählt ist, beginnt das Tab-Durchlaufen in die Gruppe, sobald der erste in der Quellreihenfolge erreicht wird, und überspringt alle, die nicht ausgewählt sind. Wenn keiner ausgewählt ist, erhält die Radio-Button-Gruppe den Fokus, wenn der erste Button in der gleichnamigen Gruppe erreicht wird.

    Sobald einer der Radio-Buttons in einer Gruppe den Fokus hat, navigieren die Pfeiltasten durch alle Radio-Buttons des gleichen Namens, auch wenn die Radio-Buttons nicht in der Quellreihenfolge gruppiert sind.

    Wenn einem Eingabeelement ein `name` gegeben wird, wird dieser Name zu einer Eigenschaft des `HTMLFormElement.elements`-Eigentums des Formular-Besitzers. Wenn Sie eine Eingabe haben, deren `name` auf `guest` gesetzt ist, und eine andere, deren `name` `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der einem eingebauten Attribut oder einer Methode des Formulars entspricht, da Sie dann das vordefinierte Attribut oder die Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für die Eingabetypen `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompilieren, den das [`value`](#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärausdruck sein, wie ihn der {{jsxref("RegExp")}}-Typ verwendet und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Keine Schrägstriche sollten um den Text des Musters angegeben werden. Beim Kompilieren des regulären Ausdrucks:

    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, so dass das Matching gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag angegeben, so dass das Muster als eine Sequenz von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird.

    Wenn das Musterattribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert. Wenn das Musterattribut gültig ist und ein nicht-leerer Wert nicht mit dem Muster übereinstimmt, verhindert die Einschränkungsvalidierung das Absenden des Formulars. Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden durch Kommas getrennten Wert gematcht.

    > [!NOTE]
    > Wenn das `pattern`-Attribut verwendet wird, informieren Sie den Benutzer über das erwartete Format, indem Sie erläuternden Text in der Nähe einfügen. Sie können auch ein [`title`](#title)-Attribut einfügen, um zu erklären, was die Anforderungen sind, um das Muster zu erfüllen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbare Erklärung ist für Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für die Eingabetypen `text`, `search`, `url`, `tel`, `email`, `password`, und `number`, gibt das `placeholder`-Attribut dem Benutzer einen kurzen Hinweis darauf, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf den erwarteten Datentyp gibt, statt einer Erklärung oder Aufforderung. Der Text _darf nicht_ Wagenrückläufe oder Zeilenvorschübe enthalten. Beispielsweise, wenn erwartet wird, dass ein Feld den Vornamen eines Benutzers aufnimmt, und das Label lautet "Vorname", könnte ein geeigneter Platzhalter "z.B., Mustafa" lauten.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Labels](#labels).

- `popovertarget`

  - : Macht ein `<input type="button">`-Element zu einem Popover-Steuerknopf; nimmt die ID des Popover-Elements, das gesteuert werden soll, als seinen Wert an. Weitere Details finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API) Startseite. Das Etablieren einer Beziehung zwischen einem Popover und seinem Auslöseknopf unter Verwendung des `popovertarget`-Attributs hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Navigationsreihenfolge der Tastatur, wenn es angezeigt wird. Dies macht das Popover für Benutzer von Tastaturen und unterstützenden Technologien (AT) zugänglicher (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, wodurch es sehr bequem wird, Popover relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`

  - : Gibt die Aktion an, die auf ein Popover-Element ausgeführt werden soll, welches durch ein `<input type="button">`-Steuerelement gesteuert wird. Mögliche Werte sind:

    - `"hide"`
      - : Der Knopf wird ein angezeigtes Popover verbergen. Wenn versucht wird, ein bereits verstecktes Popover zu verbergen, wird keine Aktion unternommen.
    - `"show"`
      - : Der Knopf wird ein verstecktes Popover anzeigen. Wenn versucht wird, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion unternommen.
    - `"toggle"`
      - : Der Knopf wird ein Popover zwischen "zeigen" und "verbergen" umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerelement ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolesches Attribut, das angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten darf, wenn es vorhanden ist. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `password` unterstützt.

    Weitere Informationen finden Sie unter [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein Boolesches Attribut, das angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das oberste Formular gesendet werden kann. Das `required`-Attribut wird von den Eingabetypen `text`, `search`,` url`, `tel`, `email`, `date`, `month`, `week`,` time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, und `file` unterstützt.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung) und im [HTML-Attribut: `required`](/de/docs/Web/HTML/Attributes/required).

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url`, und `text`, das `size`-Attribut gibt an, wie viel von der Eingabe angezeigt wird. Im Grunde erzeugt es dasselbe Ergebnis wie das Setzen der CSS-`width`-Eigenschaft mit einigen Besonderheiten. Die tatsächlich verwendete Einheit des Werts hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere ist es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`

  - : Nur gültig für den `image`-Eingabeknopf, das `src` ist ein String, der die URL der Bilddatei angibt, die zur Darstellung des grafischen Submit-Knopfs angezeigt werden soll. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für die Eingabetypen `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, das `step`-Attribut ist eine Zahl, die die Granularität spezifiziert, die der Wert einhalten muss.

    Wenn nicht explizit einbezogen:

    - `step` hat einen Standardwert von 1 für `number` und `range`.
    - Jeder Date/Time Eingabetyp hat einen Standardwert für `step`, der für den Typ geeignet ist; siehe die individuellen Eingangspages: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step), und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl sein—ganz oder gleitend—oder der spezielle Wert `any`, der bedeutet, dass kein Schritt impliziert wird und ein beliebiger Wert erlaubt ist (vorbehaltlich anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, müssen die gültigen Werte für die `number`, `date/time` Eingabetypen und `range` Eingabetypen gleich dem Basismuster für das Angeben des Wertsents sein—dem [`min`](#min) Wert und Inkrementen des `step`-Werts, bis zum [`max`](#max) Wert, wenn angegeben.

    Wenn Sie beispielsweise `<input type="number" min="10" step="2">` haben, dann ist jede gerade ganze Zahl, `10` oder größer, gültig. Wenn weggelassen, `<input type="number">`, ist jede ganze Zahl gültig, aber Fließkommazahlen (wie `4.2`) sind nicht gültig, da `step` standardmäßig `1` ist. Damit `4.2` gültig ist, hätte `step` auf `any`, 0.1, 0.2 oder einen der `min`-Wert gesetzt werden müssen, der eine Zahl sein muss, die mit `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die vom Benutzer eingegebenen Daten nicht der Konfiguration folgen, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und entspricht der `:invalid`-Pseudoklasse.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für mehr Informationen.

- `tabindex`

  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erlangen kann (fokussierbar ist), wenn es an der sequentiellen Navigation mit der Tastatur teilnehmen soll. Da alle Eingabetypen außer dem Typ `hidden` fokussierbar sind, sollte dieses Attribut nicht auf Formularen verwendet werden, da dies die Verwaltung der Fokusreihenfolge für alle Elemente im Dokument erfordern würde, was die Benutzerfreundlichkeit und Barrierefreiheit beeinträchtigen könnte, wenn es inkorrekt durchgeführt wird.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text enthält, der die Beratung zur Information bezüglich des Elements darstellt, zu dem es gehört. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als die Hauptklärung der Funktion des Formularelements verwendet werden. Stattdessen verwenden Sie das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das `id`-Attribut des Formularelements gesetzt ist. Siehe [Labels](#labels) unten.

- `type`

  - : Ein String, der den Typ des darzustellenden Steuerelements angibt. Zum Beispiel, um ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben ist), wird der Eingabetyp `text` verwendet, um ein Klartext-Eingabefeld zu erstellen.

    Zugelassene Werte sind auf der Seite [Input types](#input_types) oben gelistet.

- `value`

  - : Der Wert der Eingabesteuerung. Wenn er im HTML angegeben ist, ist dies der Anfangswert, und kann von da an jederzeit geändert oder abgerufen werden, indem Sie JavaScript verwenden, um das entsprechende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt zu überprüfen. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`

  - : Nur gültig für den `image`-Eingabeknopf, ist die `width` die Breite der Bilddatei, die zur Darstellung des grafischen Submit-Knopfs angezeigt werden soll. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

### Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind ebenfalls in einigen Browsern verfügbar. Im Allgemeinen sollten Sie deren Verwendung vermeiden, es sei denn, es lässt sich nicht vermeiden.

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
        Ob oder nicht wiederholt [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden, um die Aktualisierung der Live-Suchergebnisse zu ermöglichen, während der Benutzer den Wert des Feldes noch bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion angibt, die ausgeführt wird, wenn der Benutzer die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt, während das
        Feld bearbeitet wird; dies wird verwendet, um ein passendes Label für diese Taste auf einem
        virtuellen Keyboard zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Orientierung des Bereichs-Schiebers fest. <strong>Nur Firefox.</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Einträgen, die in der Dropdown-Liste der vorherigen Suchanfragen angezeigt werden sollten. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein booleanes Indikator, ob nur das Auswählen eines Verzeichnisses (oder von Verzeichnissen, wenn das <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) zugelassen werden soll.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (so von Safari, Opera, Chrome, etc. unterstützt), welches angibt, ob der {{Glossary("user_agent", "Benutzeragent")}} die Eingabe als Live-Suche behandeln soll. Während der Benutzer den Wert im Feld bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das die Suchbox darstellt. Dies erlaubt Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer an der Suche arbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (zum Beispiel durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

    Das `search`-Ereignis ist rate-limitiert, sodass es nicht häufiger als in einem durch die Implementierung festgelegten Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich wie die -moz-orient nicht-standardmäßige CSS-Eigenschaft, die die {{htmlelement('progress')}} und {{htmlelement('meter')}}-Elemente betrifft, definiert das `orient`-Attribut die Orientierung des Bereichs-Schiebereglers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal angezeigt wird, und `vertical`, wo der Bereich vertikal angezeigt wird. Siehe [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularelemente.

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen in der nativ bereitgestellten Dropdown-Liste des `<input>`-Elements von vorherigen Suchanfragen zu überschreiben.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben ist, wird die vom Browser festgelegte Standardanzahl von maximalen Einträgen verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean-Attribut `webkitdirectory`, wenn es vorhanden ist, gibt an, dass nur Verzeichnisse vom Benutzer im Dateiauswahl-Interface ausgewählt werden dürfen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

    Obwohl es ursprünglich nur für WebKit-basierte Browser implementiert wurde, ist `webkitdirectory` auch in Microsoft Edge sowie in Firefox Version 50 und spätere Versionen benutzbar. Dennoch ist es, obwohl es relativ breite Unterstützung hat, immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden durch die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM repräsentiert. Ebenfalls verfügbar sind jene Methoden, die von den übergeordneten Schnittstellen, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget) spezifiziert sind.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und (wenn das Ereignis nicht abgebrochen wird) wird dem Benutzer das Problem gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements selektierbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwahl- oder Kalenderdatumseingabe) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Nachricht, die angezeigt wird, wenn der Wert des Eingabeelements ungültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Bereichs von Zeichen im Eingabeelement auf eine gegebene Zeichenkette. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Bereich von Zeichen innerhalb eines Text-Eingabeelements aus. Tut nichts für Eingaben, die nicht als Text-Eingabefelder präsentiert werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Auswahlfeld für das Eingabeelement, das normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber von einem Knopfdrücken oder anderen Benutzerinteraktionen ausgelöst.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins, standardmäßig oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Inputs, als ersetzte Elemente, haben einige Merkmale, die für Nicht-Formular-Elemente nicht anwendbar sind. Es gibt CSS-Selektoren, die Formularsteuerelemente basierend auf ihren UI-Merkmalen gezielt ansprechen können, auch bekannt als UI-Pseudoklassen. Das `input`-Element kann auch nach Typ mit Attributselektoren angesprochen werden. Es gibt einige Eigenschaften, die ebenfalls besonders nützlich sind.

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
        Jedes derzeit aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, eingegeben etc.) oder den Fokus akzeptieren kann und das auch einen deaktivierten Zustand hat, in dem es nicht aktiviert werden oder den Fokus akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es ansonsten aktiviert werden könnte (auswählen, anklicken, eingeben etc.) oder den Fokus akzeptieren könnte, wenn es nicht deaktiviert wäre.
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
        Element, das derzeit <a href="#placeholder"><code>Platzhalter</code>-Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die standardmäßig in einer Gruppe verwandter Elemente sind. Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Eingabetypen, die beim Seitenladen oder Rendern markiert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Eingabetypen, die momentan markiert sind (und die ({{HTMLElement("option")}} in einem {{HTMLElement("select")}}, die derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente, deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt ist, {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle Radiobuttons mit demselben Namenswert im Formular nicht markiert sind, und {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularsteuerelemente, auf die eine Einschränkungsvalidierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularsteuerelemente, auf die eine Einschränkungsvalidierung angewendet wird und die derzeit ungültig sind. Passt zu einem Formularsteuerelement, dessen Wert nicht den durch seine Attribute festgelegten Einschränkungen entspricht, wie <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht-leeres `input`, dessen aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute und dem <a href="#step"><code>step</code></a> festgelegten Bereiche liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht-leeres `input`, dessen aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute festgelegten Bereichs liegt oder nicht dem <a href="#step"><code>step</code></a> Constraint entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut gesetzt hat. Passt nur zu Elementen, die erforderlich sein können. Das Attribut auf einem nicht erforderlich sein könnenden Element führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das NICHT das <a href="#required"><code>required</code></a> Attribut gesetzt hat. Passt nicht zu Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird aber beim Verlassen aktiviert. Passt zu ungültigen Eingaben, aber nur nach der Benutzerinteraktion, wie durch Fokussieren des Steuerelements, Verlassen des Steuerelements oder versuchen, das Formular mit dem ungültigen Steuerelement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code> Elemente, die dem Benutzer einen Auswahlmaßstab zur Verfügung stellen (zum Beispiel <a href="/de/docs/Web/HTML/Element/input/color"><code>&lt;input type="color"&gt;</code></a>) — aber nur wenn das Element im offenen Zustand ist, also wenn der Auswahlmaßstab angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen-Beispiel

Wir können ein `label` für ein Kontrollkästchen basierend darauf stylen, ob das Kontrollkästchen ausgewählt ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einem ausgewählten `input` kommt. Wir haben keine Stile angewendet, wenn das `input` nicht ausgewählt ist.

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

Es ist möglich, verschiedene Arten von Formularsteuerelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren stimmen mit Elementen basierend entweder nur auf das Vorhandensein eines Attributs oder den Wert eines gegebenen Attributs überein.

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

Standardmäßig erscheint der Text des Platzhalters als halbtransparent oder hellgrau. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder` Text](#placeholder) der Eingabe. Es kann mit einem eingeschränkten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der eingeschränkte Satz von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement angewendet werden können, können in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor enthält.

### appearance

Die {{cssxref("appearance")}} Eigenschaft ermöglicht die Darstellung (fast) jedes Elements als plattformnative Gestaltung basierend auf dem Thema des Betriebssystems sowie die Entfernung jeglicher plattformnativer Gestaltung mit dem Wert `none`.

Sie könnten ein `<div>` wie einen Radiobutton aussehen lassen mit `div {appearance: radio;}` oder ein Radio wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}`, aber tun Sie das nicht.

Das Setzen von `appearance: none` entfernt plattformnative Umrandungen, aber nicht die Funktionalität.

### caret-color

Eine spezielle Eigenschaft für textbezogene Eingabeelemente ist die CSS {{cssxref("caret-color")}} Eigenschaft, die es Ihnen ermöglicht, die Farbe festzulegen, die verwendet wird, um den Texteingabe-Caret zu zeichnen:

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

Die {{cssxref("field-sizing")}} Eigenschaft ermöglicht Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie haben standardmäßig eine bevorzugte Größe.) Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, sodass Formularelemente sich in ihrer Größe anpassen können, um ihre Inhalte zu fassen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (zum Beispiel, [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Element/input/file), und {{htmlelement("textarea")}} Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textuellen Eingaben und speziellen Schnittstellen) ist das `<input>` Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es so ist, können die Position und die Größe des Elements innerhalb seines Rahmens durch die CSS {{cssxref("object-position")}} und {{cssxref("object-fit")}} Eigenschaften angepasst werden.

### Styling

Für weitere Informationen über das Hinzufügen von Farbe zu Elementen in HTML, siehe:

- [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und

## Zusätzliche Funktionen

### Labels

Labels sind notwendig, um unterstützenden Text mit einem `<input>` zu assoziieren. Das {{HTMLElement("label")}} Element stellt erläuternde Informationen über ein Formularfeld bereit, die _immer_ angemessen sind (abgesehen von jeglichen Layout-Bedenken, die Sie haben mögen). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Assoziierte Labels

Die semantische Paarung von `<input>` und `<label>` Elementen ist nützlich für unterstützende Technologien wie Bildschirmlesegeräte. Indem sie mit dem [`for`](/de/docs/Web/HTML/Element/label#for) Attribut auf dem `<label>`, das mit dem `<input>` verbunden wird, paarweise verbunden werden, setzen Sie den Bezugspunkt, der es Bildschirmlesern ermöglicht, Eingaben für Benutzer genauer zu beschreiben.

Es reicht nicht aus, einfachen Text neben dem `<input>` Element zu haben. Vielmehr erfordert Nutzerfreundlichkeit und Zugänglichkeit die Einbeziehung eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist unzugänglich: es gibt keine Beziehung zwischen der Eingabeaufforderung und dem `<input>` Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label einen größeren "Treffer"-Bereich für Maus- und Touchscreen-Benutzer, um darauf zu klicken oder zu berühren. Durch das Paaren eines `<label>` mit einem `<input>`, wird durch Klicken auf eines von beiden der Fokus auf das `<input>` gesetzt. Wenn Sie normalen Text verwenden, um Ihr Eingangsfeld zu "labeln", wird dies nicht passieren. Die Aufforderung, Teil des Aktivierungsbereichs für die Eingabe zu sein, ist hilfreich für Personen mit motorischen Kontrollproblemen.

Als Webentwickler sollten wir niemals davon ausgehen, dass Menschen all die Dinge wissen, die wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und somit Ihre Website – garantiert praktisch, dass einige Besucher Ihrer Website einige Variationen in ihren Denkprozessen und/oder Umständen haben, die sie dazu bringen, Ihre Formulare ohne klare und richtig präsentierte Labels sehr unterschiedlich zu interpretieren.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder) Attribut ermöglicht Ihnen, Text anzugeben, der innerhalb des Inhaltsbereichs des `<input>` Elements selbst erscheint, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, weil es keines ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Der Platzhalter ist nicht nur für Bildschirmleser nicht zugänglich, sondern verschwindet auch, sobald der Benutzer irgendeinen Text in das Formularsteuerelement eingibt oder wenn das Formularsteuerelement bereits einen Wert hat. Browser mit automatischen Seitentranslationsfunktionen können Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie nicht das [`placeholder`](#placeholder) Attribut, wenn Sie es vermeiden können. Wenn Sie ein `<input>` Element labeln müssen, verwenden Sie das {{HTMLElement("label")}} Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert aber _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, überprüfen Sie sie _immer_ auch auf der Serverseite und senden Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400), wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Zustand jeder Eingabe zu stylen, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser eine client-seitige Validierung beim (versuchten) Absenden des Formulars. Beim Absenden des Formulars zeigt der Browser eine Fehlermeldung auf dem ersten ungültigen Formularsteuerelement an, wenn ein Formularsteuerelement die Einschränkungsvalidierung nicht besteht, unterstützt standardmäßig die Anzeige einer Nachricht basierend auf dem Fehlertyp oder einer von Ihnen gesetzten Nachricht.

Einige Eingabetypen und andere Attribute setzen Grenzen dafür, welche Werte für eine gegebene Eingabe gültig sind. Beispielsweise bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Verschiedene Fehler könnten auftreten, einschließlich eines `rangeUnderflow` Fehlers, wenn der Wert weniger als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Ganzzahl (entspricht nicht den Anforderungen des `step` Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Domäne der möglichen Werte periodisch ist (also bei Erreichen des höchstmöglichen Wertes die Werte wieder von vorne beginnen, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min) Eigenschaften umgekehrt sind, was angibt, dass der Bereich der erlaubten Werte bei `min` beginnt, um den niedrigstmöglichen Wert geht und dann weiterläuft, bis `max` erreicht ist. Dies ist besonders nützlich für Daten und Zeiten, wie zum Beispiel, wenn Sie den Bereich von 20 Uhr bis 8 Uhr erlauben möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und ihre Werte können zu einem bestimmten Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Validitätsobjekt-Fehler beziehen sich auf die <code>&lt;input&gt;</code>
    Attribute und ihre Werte:
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
        Tritt auf, wenn der Wert größer ist als der maximale Wert, wie durch das <code>max</code> Attribut definiert.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code> Eigenschaft erlaubte Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der minimale Wert, wie durch das <code>min</code> Attribut definiert.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code> Eigenschaft erforderliche Anzahl.
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein `pattern` Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> diesem nicht entspricht.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code> Attribut vorhanden ist, aber der Wert <code>null</code> ist oder das Radiobutton oder Checkbox nicht markiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Der Standardwert für das Inkrement ist <code>1</code>, so dass nur ganze Zahlen gültig sind, wenn das <code>type="number"</code> ist, sofern der `step` nicht angegeben ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht den korrekten Typ hat, zum Beispiel, wenn eine E-Mail kein <code>@</code>-Zeichen enthält oder eine URL kein Protokoll angibt.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularsteuerelement nicht das `required` Attribut hat, ist kein Wert, oder ein leerer String ist nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, wird ein leerer String nicht zu einem Fehler führen.

Wir können Grenzen für die akzeptierten Werte setzen, und unterstützende Browser validieren diese Formularwerte nativ und benachrichtigen den Benutzer, wenn beim Absenden des Formulars ein Fehler vorliegt.

Zusätzlich zu den in der Tabelle oben beschriebenen Fehlern enthält die `validityState` Schnittstelle die `badInput`, `valid` und `customError` booleschen schreibgeschützten Eigenschaften. Das Validitätsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund, warum die Validierung möglicherweise fehlgeschlagen ist, zutrifft, mit Ausnahme der `valid` Eigenschaft, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

Wenn es einen Fehler gibt, benachrichtigen die unterstützenden Browser sowohl den Benutzer als auch verhindern, dass das Formular abgesendet wird. Ein Wort der Vorsicht: wenn ein benutzerdefinierter Fehler auf einen wahrheitsgetreuen Wert gesetzt ist (etwas anderes als der leere String oder `null`), wird das Formular daran gehindert, abgesendet zu werden. Wenn es keine benutzerdefinierte Fehlermeldung gibt und none der anderen Eigenschaften `true` zurückgeben, wird `valid` `true` sein und das Formular kann abgesendet werden.

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

Die letzte Zeile, die die benutzerdefinierte Gültigkeitsnachricht auf den leeren String setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt wird, wird das Absenden verhindert, selbst wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Benutzerdefiniertes Validierungsfehler-Beispiel

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die auf `<input>` (und verwandte) Elemente verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen lassen dies eine Standardfehlermeldung erzeugen, wenn Sie versuchen, das Formular einzusenden, ohne eine gültige Angabe gemacht zu haben, oder einen Wert, der dem `pattern` nicht entspricht.

Wenn Sie insteatt benutzerdefinierte Fehlermeldungen anzeigen möchten, könnten Sie JavaScript wie das folgende verwenden:

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

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich dessen Wert durch den `checkValidity()`-Methode ändert, über den `input`-Ereignishandler.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst und die `invalid`-Ereignishandlerfunktion wird ausgeführt. Innerhalb dieser Funktion erarbeiten wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, indem wir einen `if ()` Block verwenden und eine benutzerdefinierte Gültigkeitsfehlermeldung setzen.
- Folglich wird, wenn der Eingabewert ungültig ist, wenn die Schaltfläche Absenden gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er wie erwartet eingereicht. Dafür muss die benutzerdefinierte Gültigkeit durch Aufrufen von `setCustomValidity()` mit einem leeren String-Wert abgebrochen werden. Wir machen das daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Gültigkeit zuvor gesetzt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie derzeit bei der Einreichung einen gültigen Wert enthält.

> [!NOTE]
> Validieren Sie immer die Eingabe-Einschränkungen sowohl clientseitig als auch serverseitig. Die Einschränkungsvalidierung beseitigt nicht die Notwendigkeit für die Validierung auf der _Serverseite_. Ungültige Werte können dennoch von älteren Browsern oder durch böswillige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte viele Versionen lang ein proprietäres Error-Attribut — `x-moz-errormessage` —, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen ähnlich wie zu setzen. Dies wurde in Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der Lokalisierung ab. In einigen Ländern ist 1.000,00 eine gültige Zahl, während in anderen die gültige Weise diese Zahl einzugeben, 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Lokalisierung zur Validierung der Benutzereingabe zu bestimmen (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang` Attribut auf dem Element oder einem seiner Eltern angegeben wird.
- Versuchen Sie die Sprache, die durch einen `Content-Language` HTTP-Header angegeben wird. Oder,
- Wenn keine angegeben ist, verwenden Sie die Lokalisierung des Browsers.

## Barrierefreiheit

### Labels

Beim Einbeziehen von Eingaben ist es ein Barrierefreiheitsanforderung, Labels hinzuzufügen. Dies ist notwendig, damit diejenigen, die unterstützende Technologien verwenden, erkennen können, wofür die Eingabe gedacht ist. Auch durch Klicken oder Berühren eines Labels wird das zugehörige Formularsteuerelement fokussiert. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erhöht den zu klickenden oder berührenden Bereich, um das Formularsteuerelement zu aktivieren. Das ist besonders nützlich (und sogar notwenig) für Radiobuttons und Checkboxes, die winzig sind. Weitere Informationen zu Labels allgemein finden Sie unter [Labels](#labels).

Das Folgende ist ein Beispiel dafür, wie das `<label>` mit einem `<input>` Element im obigen Stil verbunden wird. Sie müssen dem `<input>` ein `id` Attribut geben. Das `<label>` benötigt dann ein `for` Attribut mit demselben Wert wie das `id` der Eingabe.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen Bereich bereitstellen, der groß genug ist, um ihn leicht zu aktivieren. Dies hilft einer Vielzahl von Personen, einschließlich Personen mit motorischen Kontrollproblemen und Personen, die nicht präzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine Mindestinteraktivgröße von 44×44 [CSS-Pixel](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

- [Verständnis von Erfolgskriterium 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - Das A11Y Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, aufgelistet, einreichbar, zurücksetzbar, formularzugeordnetes Element,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann labelbares Element, palpable content.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
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

- [Formularbeschränkungs-Validierung](/de/docs/Web/HTML/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Wie man benutzerdefinierte Formular-Widgets erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
