---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Das **`<input>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerungen für webbasierte Formulare zu erstellen, damit Daten vom Nutzer akzeptiert werden können; je nach Gerät und {{Glossary("user_agent", "Benutzeragent")}} stehen eine Vielzahl von Eingabedatentypen und Steuerungswidgets zur Verfügung. Das `<input>`-Element ist eines der leistungsfähigsten und komplexesten in ganz HTML aufgrund der schieren Anzahl von Kombinationen von Eingabetypen und Attributen.

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

Die Funktionsweise eines `<input>` variiert erheblich abhängig vom Wert seines [`type`](#type)-Attributs, daher werden die verschiedenen Typen auf ihren eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird der Standardtyp `text` angenommen.

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
      <td>Ein Kontrollkästchen, das einfache Werte auswählen/deselektieren lässt.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Eine Steuerung zur Farbauswahl; öffnet einen Farbwähler, wenn aktiv in unterstützenden Browsern.
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
        Eine Steuerung zum Eingeben eines Datums (Jahr, Monat und Tag, ohne Zeit).
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
        Eine Steuerung zum Eingeben von Datum und Uhrzeit, ohne Zeitzone. Öffnet einen Datumswähler
        oder numerische Räder für Datum- und Uhrzeitkomponenten, wenn aktiv in unterstützenden Browsern.
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
        Ein Feld zum Bearbeiten einer E-Mail-Adresse. Sieht aus wie ein
        <code>text</code>-Eingabe, hat jedoch Validierungsparameter und relevante
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
        Eine Steuerung, die dem Benutzer das Auswählen einer Datei ermöglicht.
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
        Eine grafische <code>submit</code>-Schaltfläche. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert wird.
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
      <td>Eine Steuerung zum Eingeben eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Eine Steuerung zum Eingeben einer Zahl. Zeigt einen Spinner an und fügt
        eine Standardvalidierung hinzu. Zeigt eine numerische Tastatur auf einigen Geräten
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
        Einzeiliges Textfeld, dessen Wert verschleiert wird.
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
        Ein Auswahlknopf, der es ermöglicht, einen einzelnen Wert aus mehreren
        Optionen mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Wird als Bereichs-Widget angezeigt, standardmäßig auf den mittleren Wert eingestellt.
        Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>
        verwendet, um den Bereich der akzeptablen Werte zu definieren.
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
        Eine Schaltfläche, die die Inhalte des Formulars auf die Standardwerte zurücksetzt. Nicht empfohlen.
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
        Ein einzeiliges Textfeld zum Eingeben von Suchzeichenfolgen. Zeilenumbrüche werden
        automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern
        ein Löschsymbol enthalten, mit dem das Feld geleert werden kann. Zeigt an
        einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
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
        Eine Steuerung zum Eingeben einer Telefonnummer. Zeigt eine Telefontastatur
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
      <td>Eine Steuerung zum Eingeben eines Zeitwertes ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zum Eingeben einer URL. Sieht aus wie eine <code>text</code>-Eingabe,
        hat jedoch Validierungsparameter und relevante Tastatur in unterstützenden
        Browsern und Geräten mit dynamischen Tastaturen.
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
        Eine Steuerung zur Eingabe eines Datums, bestehend aus einer Wochennummer im Jahr
        und einer Wochennummer ohne Zeitzone.
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
        Eine Steuerung zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteile einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so leistungsfähig wegen seiner Attribute; das [`type`](#type)-Attribut, wie oben mit Beispielen beschrieben, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch gesehen die exakt gleichen Attributsets. In der Praxis wirken sich jedoch die meisten Attribute nur auf einen bestimmten Untertyp von Eingabetypen aus. Darüber hinaus beeinflussen einige Attribute ein Eingabefeld unterschiedlich, je nach Eingabetyp.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Auf diese Tabelle folgt eine Liste, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie assoziiert sind. Diejenigen, die zu den meisten oder allen Eingabetypen gehören, werden unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind—oder Attribute, die für alle Eingabetypen gemeinsam sind, aber ein spezielles Verhalten zeigen, wenn sie auf einem bestimmten Eingabetyp angewendet werden—werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                                            |
| --------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis für erwarteten Dateityp in Dateiupload-Steuerungen                                              |
| [`alt`](#alt)                                 | `image`                                                                | alt-Attribut für den Image-Typ. Erforderlich für Barrierefreiheit                                       |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                               | Steuert die automatische Großschreibung bei eingegebenem Text.                                          |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Buttons                             | Hinweis für Autofill-Funktion des Formulars                                                             |
| [`capture`](#capture)                         | `file`                                                                 | Medienaufnahme-Eingabemethode in Dateiupload-Steuerungen                                                |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Ob der Befehl oder die Steuerung aktiviert ist                                                          |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfeldes zur Übermittlung der Richtung des Elements bei Formularübermittlung             |
| [`disabled`](#disabled)                       | alle                                                                   | Ob die Formularsteuerung deaktiviert ist                                                                |
| [`form`](#form)                               | alle                                                                   | Verknüpft die Steuerung mit einem Formularelement                                                       |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL für die Formularübermittlung                                                                        |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Kodierungstyp des Formulardatensatzes zur Verwendung bei der Formularübermittlung                       |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | HTTP-Methode zur Verwendung bei der Formularübermittlung                                                |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Umgeht die Validierung der Formularsteuerung bei der Formularübermittlung                               |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browsing-Kontext für die Formularübermittlung                                                           |
| [`height`](#height)                           | `image`                                                                | Entspricht dem height-Attribut für {{htmlelement('img')}}; vertikale Dimension                          |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Buttons       | Wert des id-Attributs des {{htmlelement('datalist')}} der Autovervollständigungsoptionen                |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Maximaler Wert                                                                                          |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Länge (Anzahl der Zeichen) von `value`                                                         |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Minimaler Wert                                                                                          |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Länge (Anzahl der Zeichen) von `value`                                                         |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolean. Ob mehrere Werte erlaubt sind                                                                  |
| [`name`](#name)                               | alle                                                                   | Name der Formularsteuerung. Wird mit dem Formular als Teil eines Namens/Wert-Paares übermittelt         |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, das `value` entsprechen muss, um gültig zu sein                                                 |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der in der Formularsteuerung erscheint, wenn kein Wert gesetzt ist                                |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Bezeichnet ein `<input type="button">` als Steuerung für ein Popover-Element                            |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt die Aktion an, die eine Popover-Steuerung ausführen soll                                           |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolean. Der Wert ist nicht editierbar                                                                  |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss geprüft werden, damit das Formular abgeschickt werden kann |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe der Steuerung                                                                                     |
| [`src`](#src)                                 | `image`                                                                | Entspricht dem src-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                       |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Inkrementale Werte, die gültig sind                                                                     |
| [`type`](#type)                               | alle                                                                   | Typ der Formularsteuerung                                                                               |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht er dem Anfangswert                           |
| [`width`](#width)                             | `image`                                                                | Entspricht dem width-Attribut für {{htmlelement('img')}}                                                |

Einige zusätzliche Nicht-Standard-Attribute werden nach den Beschreibungen der Standardattribute aufgelistet.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Gültig nur für den `file`-Eingabetyp definiert das `accept`-Attribut, welche Dateitypen in einer `file`-Upload-Steuerung auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`

  - : Nur für die `image`-Schaltfläche gültig bietet das `alt`-Attribut alternativen Text für das Bild, der den Attributwert anzeigt, falls das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, auf welche Weise. Siehe die [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) globale Attributseite für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) Attribut nimmt als Wert einen durch Leerzeichen getrennten String an, der beschreibt, welche Art von Autovervollständigungsfunktionalität (wenn überhaupt) das Eingabefeld bereitstellen soll. Eine typische Implementierung von Autovervollständigung ruft frühere Werte auf, die in dasselbe Eingabefeld eingegeben wurden, aber komplexere Formen der Autovervollständigung können existieren. Ein Browser könnte beispielsweise in das Kontaktverzeichnis eines Geräts integriert sein, um `email`-Adressen in einem Email-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, and `password`. Dieses Attribut hat keine Auswirkung auf Eingabefelder, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen gültig außer `checkbox`, `radio`, `file`, oder irgendeine Art von Buttons.

    Weitere Informationen, einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` bei `hidden` gegenüber anderen Eingabetypen leicht unterschiedlich ist, finden Sie im [`autocomplete`-Attribut](/de/docs/Web/HTML/Attributes/autocomplete).

- `autofocus`

  - : Ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass die Eingabe automatisch fokussiert werden soll, wenn die Seite fertig geladen ist (oder wenn das {{HTMLElement("dialog")}} das Element anzeigt wird).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als ein Element gesetzt ist, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht auf versteckte Eingaben angewendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren eines Formularsteuerelements kann sehbehinderte Menschen, die auf Bildschirmlesetechnologie angewiesen sind, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihre Benutzer ohne Vorwarnung zum Steuerelement.

    Verwenden Sie bei der Anwendung des `autofocus`-Attributs sorgfältige Überlegungen zur Barrierefreiheit. Das automatische Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann bei einigen Touch-Geräten auch dazu führen, dass dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label der Formularsteuerung mit Fokus ankündigen wird, wird der Bildschirmleser nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext verpassen, der durch den vorhergehenden Inhalt erstellt wurde.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den `file` Eingabetyp, definiert das `capture`-Attribut, welche Medien—Mikrofon, Video oder Kamera—verwendet werden sollten, um eine neue Datei für den Upload mit der `file` Upload-Steuerung in unterstützenden Szenarien zu erstellen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`

  - : Gültig für beide `radio` und `checkbox` Typen, `checked` ist ein Boolean-Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass der Optionsknopf der aktuell ausgewählte innerhalb der Gruppe von gleichnamigen Optionsknöpfen ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, gibt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen aktuell aktiviert ist: wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird der Wert von Kontrollkästchen und Optionsfeldern nur dann in die übermittelten Daten aufgenommen, wenn sie aktuell `checked` sind. Wenn sie es sind, werden der Name und die Wert(e) der aktivierten Steuerungen übermittelt.
    >
    > Wenn beispielsweise ein Kontrollkästchen dessen `name` `fruit` ist, einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, werden die Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es überhaupt nicht in den Formulardaten aufgelistet. Der Standardwert (`value`) für Kontrollkästchen und Optionsfelder ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel`, und `email` Eingabetypen, ermöglicht das `dirname`-Attribut die Übermittlung der Richtung des Elements. Wenn es enthalten ist, wird das Formularsteuerelement mit zwei Namens/Wert-Paaren übermittelt: das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name mit einem Wert `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das obige Formular übermittelt wird, führt der Input sowohl zum `name` / `value` Paar von `fruit=cherry` als auch zum `dirname` / Richtungs-Paar von `fruit-dir=ltr`.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass der Benutzer nicht mit der Eingabe interagieren kann. Deaktivierte Eingaben werden typischerweise mit einer gedimmten Farbe oder einer anderen Form der Anzeige, dass das Feld nicht verfügbar ist, dargestellt.

    Speziell deaktivierte Eingaben erhalten nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl es nicht von der Spezifikation verlangt wird, wird Firefox standardmäßig den [dynamischen deaktivierten Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) einer `<input>` über Seitenladungen hinweg beibehalten. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktionalität zu steuern.

- `form`

  - : Ein String, der das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (das heißt, dessen **Formulareigentümer**). Der Wert dieses Strings muss, wenn vorhanden, mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, ist das `<input>`-Element mit dem nächstgelegenen enthaltenden Formular verknüpft, falls vorhanden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe irgendwo im Dokument zu platzieren, wird aber bei einem Formular an einer anderen Stelle im Dokument einbezogen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formenctype`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formmethod`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formnovalidate`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `formtarget`
  - : Gültig nur für die Eingabetypen `image` und `submit`. Siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp für weitere Informationen.
- `height`
  - : Gültig nur für den `image` Eingabeknopf, ist `height` die Höhe der Bilddatei, die angezeigt werden soll, um die grafische Abschick-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen. Es definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Der Zweck ist es, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des `for`-Attributs eines {{htmlelement('label')}} verwendet, um die Beschriftung mit der Formularsteuerung zu verknüpfen. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente. Er bietet einen Hinweis an Browser, welche Art von virtueller Tastaturkonfiguration verwendet werden soll, wenn dieses Element oder dessen Inhalt bearbeitet wird. Zu den Werten gehören `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der Wert, der dem `list`-Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im gleichen Dokument sein. Das `<datalist>` bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die mit dem [`type`](#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Den Spezifikationen entsprechend, wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder einer Art von Buttons unterstützt.

    Abhängig vom Browser kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen bekommen, Markierungen entlang eines Bereichs oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, sie aber Nicht-gelistete Werte zulässt ansehen. Schaauen Sie auch die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für die restlichen Eingabetypen.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den größten Wert im Bereich zulässiger Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element bei [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen speziellen Fall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich umwickeln kann; beispielsweise ermöglicht dies die Angabe eines Zeitraums von 22 Uhr bis 4 Uhr.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die maximale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das Feld eingeben kann. Dies muss ein Ganzzahlenwert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt bei [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16 Codeeinheiten ist. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen eingeben als durch das `maxlength`-Attribut erlaubt. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, es definiert den negativsten Wert im Bereich zulässiger Werte. Wenn der in das Element eingegebene [`value`](#value) geringer als dieser ist, schlägt das Element bei [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht-leerer Wert weniger als das Minimum ist, dass durch das `min`-Attribut festgelegt ist, verhindert die Einschränkungsvalidierung die Formulareinreichung. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

    Es gibt einen speziellen Fall: Wenn der Datentyp periodisch ist (wie bei Daten oder Zeiten), kann der Wert von `max` niedriger sein als der Wert von `min`, was darauf hinweist, dass der Bereich sich umwickeln kann; beispielsweise ermöglicht dies die Angabe eines Zeitbereichs von 22 Uhr bis 4 Uhr.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, es definiert die minimale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert sein, der kleiner oder gleich dem durch `maxlength` festgelegten Wert ist. Wenn kein `minlength` angegeben ist, oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt bei [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16 Codeeinheiten ist, was die Formulareinreichung verhindert. Einschränkungsvalidierung wird nur dann angewendet, wenn der Wert vom Benutzer geändert wird. Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolean-Attribut `multiple`, falls gesetzt, bedeutet, dass der Benutzer durch Komma getrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit dem `file`-Input auswählen kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`

  - : Ein String, der einen Namen für das Eingabesteuerelement angibt. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als ein erforderliches Attribut (obwohl es das nicht ist). Wenn eine Eingabe keinen `name`-Wert spezifiziert hat, oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerungen, nicht angekreuzte Optionsfelder, nicht angekreuzte Kontrollkästchen und Rücksetzknöpfe werden ebenfalls nicht gesendet.)

    Es gibt zwei spezielle Fälle:

    1. `_charset_` : Wenn es als name für ein `<input>`-Element vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der Wert des Inputs vom {{Glossary("user_agent", "Benutzeragenten")}} automatisch auf die Zeichencodierung gesetzt, die zur Übermittlung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erzeugt ein einzigartiges Verhalten für Optionsknöpfe.

    Nur ein Optionsknopf in einer Gruppe von gleichnamigen Optionsknöpfen kann gleichzeitig angekreuzt sein. Das Auswählen eines beliebigen Optionsknopfs in dieser Gruppe hebt automatisch die Auswahl eines aktuell ausgewählten Optionsknopfs in der gleichen Gruppe auf. Der Wert dieses einen angekreuzten Optionsknopfs wird zusammen mit dem Namen übermittelt, wenn das Formular abgeschickt wird,

    Wenn Sie in eine Serie gleichnamiger Optionsknöpfe tabben, erhält derjenige, der angekreuzt ist, den Fokus. Wenn sie nicht zusammen in der Quellreihenfolge gruppiert sind, beginnt das Tabben in die Gruppe bei dem ersten in der Gruppe, das gefunden wird, wobei alle nicht angekreuzten übersprungen werden. Mit anderen Worten, wenn einer angekreuzt ist, überspringt das Tabben die nicht angekreuzten Optionsknöpfe in der Gruppe. Wenn keiner angekreuzt ist, erhält die Optionsknopfgruppe den Fokus, wenn der erste Knopf in der gleichnamigen Gruppe erreicht wird.

    Wenn einer der Optionsknöpfe in einer Gruppe den Fokus hat, können Sie mit den Pfeiltasten durch alle Optionsknöpfe mit demselben Namen navigieren, selbst wenn die Optionsknöpfe nicht zusammen in der Quellreihenfolge gruppiert sind.

    Wenn einem Eingabeelement ein `name` gegeben wird, wird dieser Name eine Eigenschaft des `HTMLFormElement.elements`-Eigentums des besitzenden Formularelements. Wenn Sie eine Eingabe mit `name` auf `guest` gesetzt haben und eine andere mit `name` auf `hat-size`, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, wird `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld sein, und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie, Formularelementen einen `name` zu geben, der mit einer eingebauten Eigenschaft des Formulars übereinstimmt, da Sie sonst die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende input überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, das `pattern`-Attribut wird verwendet, um einen regulären Ausdruck zu kompilieren, den der Eingabewert entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Es sollten keine Schrägstriche um den Mustertext herum angegeben werden. Beim Kompilieren des regulären Ausdrucks:

    1. wird das Muster implizit mit `^(?:` und `)$` umschlossen, sodass das Match gegen den _gesamten_ Eingabewert erforderlich ist, d.h., `^(?:<pattern>)$`.
    2. wird das `'v'`-Flag angegeben, so dass das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt wie {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden, aber nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet, und dieses Attribut wird vollständig ignoriert. Wenn das `pattern`-Attribut gültig ist und ein nicht-leerer Wert dem Muster nicht entspricht, wird die Einschränkungsvalidierung die Formulareinreichung verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) vorhanden ist, wird der kompilierte reguläre Ausdruck gegen jeden kommagetrennten Wert getestet.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie einen erläuternden Text in der Nähe hinzufügen. Sie können auch ein [`title`](#title)-Attribut einfügen, um zu erklären, welche Anforderungen erfüllt sein müssen, um dem Muster zu entsprechen; die meisten Browser werden diesen Titel als Tooltip anzeigen. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password`, und `number`, das `placeholder`-Attribut bietet dem Benutzer einen kurzen Hinweis auf die Art der im Feld erwarteten Informationen. Es sollte ein Wort oder eine kurze Phrase sein, die einen Hinweis auf die erwartete Art von Daten gibt, anstelle einer Erklärung oder Eingabeaufforderung. Der Text _darf nicht_ Wagenrückläufe oder Zeilenumbrüche enthalten. Wenn zum Beispiel erwartet wird, dass ein Feld den Vornamen eines Benutzers erfasst und sein Label "Vorname" lautet, könnte ein geeigneter Platzhalter "z.B. Mustafa" sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Labels](#labels) für weitere Informationen.

- `popovertarget`

  - : Verwandelt ein `<input type="button">`-Element in eine Popover-Steuerungsschaltfläche; nimmt die ID des zu steuernden Popover-Elements als Wert an. Weitere Details finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API) Startseite. Die Erstellung einer Beziehung zwischen einem Popover und seiner Aufrufer-Schaltfläche mit dem `popovertarget`-Attribut hat zwei weitere nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Aufrufer und platziert das Popover an einer logischen Stelle in der Tastatur-Fokussierung bei Anzeige. Dies macht das Popover für Tastatur- und Hilfstechnologie-Benutzer (AT) zugänglicher (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf einem von einer Steuerung `<input type="button">` gesteuerten Popover-Element ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Die Schaltfläche wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Die Schaltfläche wird ein verborgenes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Die Schaltfläche wird ein Popover zwischen Anzeigen und Verbergen umschalten. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten können sollte. Das `readonly`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `password` Eingabetypen unterstützt.

    Weitere Informationen finden Sie im [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das Formular gesendet werden kann. Das `required`-Attribut wird von den `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, und `file` Eingabetypen unterstützt.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung) und im [HTML-Attribut: `required`](/de/docs/Web/HTML/Attributes/required).

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für `email`, `password`, `tel`, `url`, und `text`, das `size`-Attribut gibt an, wie viel von der Eingabe angezeigt wird. Im Wesentlichen erzeugt es das gleiche Ergebnis wie das Setzen der CSS-`width`-Eigenschaft mit einigen Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, für andere ist es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`

  - : Gültig nur für den `image` Eingabeknopf, ist `src` ein String, der die URL der Bilddatei angibt, die angezeigt werden soll, um die grafische Abschick-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss.

    Wenn nicht explizit eingeschlossen:

    - Standardmäßig hat `step` den Wert 1 für `number` und `range`.
    - Jeder Datum-/Uhrzeit-Eingabetyp hat einen Standard-`step`-Wert, der für den Typ angemessen ist; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step), und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl sein—ganzzahlig oder fließkommas-trichiert—oder der spezielle Wert `any`, was bedeutet, dass keine Schrittweite impliziert wird und jeder Wert erlaubt ist (ohne andere Einschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`-, Datum-/Uhrzeit-Eingabetypen und `range`-Eingabetypen gleich dem Basiswert für die Schrittweite—dem [`min`](#min)-Wert und Inkrementen des Schrittwertes, bis zum [`max`](#max)-Wert, wenn angegeben.

    Beispiel: Wenn Sie `<input type="number" min="10" step="2">` haben, dann kann jede gerade Ganzzahl, die größer oder gleich `10` ist, gültig sein. Wenn der Step-Werte für `number` weggelassen wird (`<input type="number">`), ist jede Ganzzahl gültig, aber Zahlen mit Dezimalstellen (wie `4.2`) sind nicht gültig, weil der `step`-Wert standardmäßig auf `1` gesetzt ist. Für `4.2` wäre es gültig, hätte `step` auf `any`, 0.1, 0.2 oder 0.3 sein müssen. Der `min`-Wert hätte eine Zahl sein müssen, die mit `.2` endet, wie `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die eingegebenen Daten des Benutzers nicht mit der Schrittweite übereinstimmen, wird der Wert bei der Einschränkungsvalidierung als ungültig betrachtet und entspricht der `:invalid` Pseudoklasse.

    Siehe [Client-seitige Validierung](#client-seitige_validierung) für weitere Informationen.

- `tabindex`

  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen. Ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (ist fokussierbar), ob es an der sequentiellen Tastaturnavigation teilnehmen soll. Da alle Eingabetypen, außer input vom Typ versteckt, fokussierbar sind, sollte dieses Attribut nicht auf Formularkontrollen verwendet werden, da dies die Verwaltung der Fokusreihenfolge für alle Elemente im Dokument erfordern würde mit dem Risiko, die Benutzbarkeit und Zugänglichkeit zu schädigen, wenn falsch gemacht.

- `title`

  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen. Es enthält einen Text, der Beratungsinformationen darstellt, die mit dem Element, zu dem es gehört, zusammenhängen. Solche Informationen können typischerweise, aber nicht unbedingt, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks der Formularsteuerung verwendet werden. Stattdessen verwenden Sie das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das `id`-Attribut der Formularsteuerung gesetzt ist. Siehe [Labels](#labels) unten.

- `type`

  - : Ein String, der den Typ der Steuerung angibt. Um beispielsweise ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben), wird der Eingabetyp `text` verwendet, was ein Klartext-Eingabefeld erzeugt.

    Die erlaubten Werte sind im Abschnitt [Eingabetypen](#input_types) oben aufgelistet.

- `value`

  - : Der Wert des Eingabesteuerelements. Wenn er im HTML angegeben ist, ist dies der Anfangswert, und von da an kann er jederzeit über JavaScript geändert oder abgerufen werden, um auf die `value`-Eigenschaft des entsprechenden [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`

  - : Gültig nur für den `image` Eingabeknopf, ist `width` die Breite der Bilddatei, die angezeigt werden soll, um die grafische Abschick-Schaltfläche darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-Standard Attribute

Die folgenden Nicht-Standard-Attribute sind auch in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie vermeiden, diese zu benutzen, es sei denn, es kann nicht anders helfen.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden sollen, um die Aktualisierung von Live-Suchergebnissen zu ermöglichen, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der den Typ der Aktion angibt, die durchgeführt wird, wenn der Benutzer die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste drückt, während er das Feld bearbeitet; dies wird verwendet, um ein angemessenes Label für diese Taste auf einer
        virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Orientierung des Bereichsschiebers fest. <strong>Nur Firefox.</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Elementen, die in der Dropdown-Liste der früheren Suchanfragen angezeigt werden sollten. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Boolean, der angibt, ob dem Benutzer nur das Auswählen eines Verzeichnisses erlaubt sein soll (oder von Verzeichnissen, wenn <a href="#multiple"><code>multiple</code></a> auch vorhanden ist)
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome, usw.), das liefert, wenn vorhanden, dem {{Glossary("user_agent", "Benutzeragenten")}}. Trägt zum Eingabewert bei, da der Benutzer noch den Wert des Feldes bearbeitet und sendet [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse zum [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt repräsentiert die Suchbox. Damit kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis nur gesendet, wenn der Benutzer explizit eine Suche auslöst (z. B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes).

    Das `search`-Ereignis ist rate-begrenzt, sodass es nicht häufiger als in einem implementierungsdefinierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich wie das -moz-orient Non-Standard-CSS-Eigenschaft, das die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente beeinflusst, definiert das `orient`-Attribut die Orientierung des Bereichsschiebers. Zu den Werten gehören `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wobei der Bereich vertikal gerendert wird. Siehe [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zum Erstellen von vertikalen Formularelementen.

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut—wird nur von Safari unterstützt—ist ein numerischer Wert, mit dem Sie die maximale Anzahl von Einträgen übersteuern können, die in diesem `<input>`-Element nativ in der Dropdown-Liste früherer Suchanfragen angezeigt werden.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben, oder ein ungültiger Wert angegeben wird, wird die maximale Anzahl von Einträgen des Browsers verwenden.

- `webkitdirectory` {{non-standard_inline}}

  - : Der Boolean `webkitdirectory` das Attribut, wenn vorhanden, deutet darauf hin, dass nur Verzeichnisse im Auswahlfenster des Dateienlayouts von Benutzern ausgewählt werden dürfen. Sehen Sie auch [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für weitere Details und Beispiele.

    Ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie in Firefox 50 und später nutzbar. Aber obwohl es relativ breit unterstützt wird, ist es immer noch nicht standard und sollte nicht verwendet werden, es sei denn, Sie haben keine wirkliche alternative Wahl.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, welche `<input>`-Elemente im DOM darstellt. Zusätzlich verfügbar sind jene Methoden, die von den übergeordneten Schnittstellen spezifiziert werden, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen bestanden hat; andernfalls wird `false` zurückgegeben und ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis beim Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen bestanden hat; andernfalls wird `false` zurückgegeben, ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis beim Element ausgelöst und (wenn das Ereignis nicht abgebrochen wird) das Problem dem Benutzer gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visuelles Farbauswahl- oder Kalenderdatumseingabefeld) wird diese Methode nichts tun.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt wird, wenn der Wert des Eingabefelds nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabelement in eine gegebene Zeichenkette. Ein Parameter `selectMode` ist verfügbar, um die Steuerung zu ermöglichen, wie der vorhandene Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines Textischen Eingabeelements aus. Tut nichts für Eingaben, die nicht als Textfeld präsentiert werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browserauswahl-Dialog für das Eingabefeld an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber aufgrund eines Button-Drücken oder einer anderen Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert eines numerischen Inputs standardmäßig um eins oder um die spezifizierte Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert eines numerischen Inputs um eins oder um die spezifizierte Anzahl von Einheiten.

## CSS

Da `Inputs` ersetzte Elemente sind, haben sie einige Merkmale, die für Nicht-Formular-Elemente nicht zutreffen. Es gibt CSS-Selektoren, die spezifisch auf Formularsteuerelemente basierend auf ihren UI-Merkmalen abzielen können, auch bekannt als UI-Pseudoklassen. Das `input`-Element kann auch nach Typ mit Attributselektoren angesprochen werden. Es gibt einige Eigenschaften, die ebenfalls besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Pseudoklassen, die für das
    <code>&lt;input&gt;</code>
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
        Jedes derzeit aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, beschrieben usw.) oder den Fokus erlangen kann und ebenfalls einen deaktivierten Status hat, in dem es nicht aktiviert werden kann oder keinen Fokus akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element mit einem aktivierten Status, was bedeutet, dass es sonst aktiviert werden könnte (ausgewählt, angeklickt, beschrieben usw.) oder den Fokus akzeptieren könnte, wenn es nicht deaktiviert wäre.
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
        Element, das derzeit <a href="#placeholder"><code>placeholder</code>-Text</a> anzeigt, einschließlich <code>&lt;input&gt;</code> und {{HTMLElement("textarea")}}-Elementen mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das bisher keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die in einer Gruppe verwandter Elemente standardmäßig sind. Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Input-Typen, die beim Laden oder Rendern der Seite ausgewählt waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und {{HTMLElement("input/radio", "radio")}} Input-Typen, die derzeit ausgewählt sind (und die ({{HTMLElement("option")}} in einer {{HTMLElement("select")}} derzeit ausgewählt sind).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren unbestimmte Eigenschaft durch JavaScript auf wahr gesetzt wurde, {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle Radio-Buttons mit demselben Namenswert im Formular nicht ausgewählt sind, und {{HTMLElement("progress")}}-Elemente, die sich in einem unbestimmten Zustand befinden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularsteuerungen, auf die Constraints-Validierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularsteuerungen, auf die Constraints-Validierung angewendet werden und die derzeit nicht gültig sind. Entspricht einem Formularsteuerelement, dessen Wert nicht den durch seine Attribute festgelegten Einschränkungen entspricht, wie <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Ein nicht-leeres Eingabefeld, dessen aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>-Attribute und das <a href="#step"><code>step</code></a>-Attribut festgelegten Bereichs liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Ein nicht-leeres Eingabefeld, dessen aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>-Attribute festgelegten Bereichs liegt oder nicht der <a href="#step"><code>step</code></a>-Einschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&lt;input&gt;</code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat. Entspricht nur Elementen, die erzwungen werden können. Das Attribut, das bei einem nicht-erforderbaren Element enthalten ist, wird nicht für eine Übereinstimmung sorgen.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&lt;input&gt;</code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}}-Element, das NICHT das <a href="#required"><code>required</code></a>-Attribut gesetzt hat. Entspricht nicht Elementen, die nicht erforderlich sein können.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&lt;input&gt;</code> und {{HTMLElement("textarea")}}-Elemente, die derzeit keinen Wert haben.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Ähnlich wie <code>:invalid</code>, aber wird beim Verlassen des Eingabefelds aktiviert. Entspricht ungültigen Eingaben, jedoch nur nach der Benutzerinteraktion, wie dem Fokussieren auf das Steuerelement, dem Verlassen des Steuerelements oder dem Versuch, das Formular mit dem ungültigen Steuerelement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Picker zum Auswählen eines Werts für den Benutzer anzeigen (z.B. <a href="/de/docs/Web/HTML/Element/input/color"><code>&lt;input type="color"&gt;</code></a>) – jedoch nur, wenn das Element im geöffneten Zustand ist, das heißt, wenn der Picker angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können das Label eines Kontrollkästchens basierend darauf stylen, ob das Kontrollkästchen ausgewählt ist oder nicht. In diesem Beispiel gestalten wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einem ausgewählten Input kommt. Wir haben keine Styles angewendet, wenn das `input` nicht ausgewählt ist.

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

Es ist möglich, verschiedene Arten von Formularsteuerelementen basierend auf ihrem [`type`](#type) mithilfe von [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) zu adressieren. CSS-Attributselektoren stimmen Übereinstimmungen von Elementen entweder nur mit dem Vorhandensein eines Attributs oder dem Wert eines bestimmten Attributs ab.

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

Standardmäßig erscheint der Platzhaltertext transparent oder hellgrau. Das {{cssxref('::placeholder')}} Pseudo-Element ist der [`placeholder` Text](#placeholder) des `input`. Es kann mit einem begrenzten Satz von CSS-Eigenschaften gestaltet werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Teil der CSS-Eigenschaften, der auf das {{cssxref("::first-line")}} Pseudo-Element angewendet werden kann, kann in einer Regel verwendet werden, bei der der Selektor auf `::placeholder` zurückgreift.

### appearance

Die {{cssxref("appearance")}}-Eigenschaft ermöglicht das Anzeigen von (fast) jedem Element im plattformnativen Stil basierend auf dem Systemthema sowie das Entfernen eines plattformnativen Stylings mit dem Wert `none`.

Sie könnten ein `<div>` wie einen Radio-Button erscheinen lassen mit `div {appearance: radio;}` oder ein Radio wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}`, aber tun Sie es nicht.

Das Festlegen von `appearance: none` entfernt plattformnative Rahmen, aber nicht die Funktionalität.

### caret-color

Eine spezifische Eigenschaft für texteingabebezogene Elemente ist die CSS-Eigenschaft {{cssxref("caret-color")}}, die es Ihnen ermöglicht, die Farbe des Texteingabecarets einzustellen:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht Ihnen die Kontrolle über das Größenverhalten von Formulareingaben (d.h. sie haben standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, wodurch Formularelemente ihre Größe anpassen können, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Element/input/file) und {{htmlelement("textarea")}}-Elementen.

### object-position und object-fit

In bestimmten Fällen (normalerweise bei nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element). Wenn es so ist, kann die Position und Größe des Elements innerhalb seines Rahmens mithilfe der CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML siehe:

- [Anwenden von Farbe auf HTML-Elemente mithilfe von CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Zusätzliche Funktionen

### Labels

Labels sind notwendig, um unterstützenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element liefert erklärende Informationen zu einem Formularfeld, die _immer_ angemessen sind (abgesehen von Layout-Bedenken, die Sie haben könnten). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugehörige Labels

Die semantische Kopplung von `<input>`- und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Screenreader. Indem Sie sie durch das [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut des `<label>`s koppeln, verknüpfen Sie das Label mit dem Input auf eine Weise, die es Screenreadern ermöglicht, Benutzern die Eingaben präziser zu beschreiben.

Es reicht nicht aus, nur einfachen Text neben das `<input>`-Element zu setzen. Vielmehr erfordert die Benutzerfreundlichkeit und Zugänglichkeit entweder die Einbindung eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Neben einem zugänglichen Namen bietet das Label eine größere 'Trefffläche' für Maus- und Touchscreen-Benutzer, um darauf zu klicken oder zu berühren. Indem Sie ein `<label>` mit einem `<input>` koppeln, wird durch Klicken auf eines von beiden das `<input>` fokussiert. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu "beschriften", wird dies nicht geschehen. Das Einbeziehen der Eingabeaufforderung in den Aktivierungsbereich für die Eingabe ist hilfreich für Menschen mit motorischen Störungen.

Als Webentwickler ist es wichtig, dass wir niemals davon ausgehen, dass Menschen alles wissen, was wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und damit Ihre Website – garantiert praktisch, dass einige Ihrer Website-Besucher aufgrund unterschiedlicher Denkprozesse und/oder Umstände Ihre Formulare ohne klare und angemessen dargestellte Labels sehr unterschiedlich interpretieren werden.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text anzugeben, der im Inhaltsbereich des `<input>`-Elements selbst angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil er es nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht als Erklärung oder Aufforderung.

Nicht nur, dass der Platzhalter für Screenreader nicht zugänglich ist, sondern sobald der Benutzer Text in das Formularelement eingibt oder das Formularelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitenübersetzungsfunktionen überspringen möglicherweise Attribute beim Übersetzen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element beschriften müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert aber _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, verifizieren Sie sie _immer_ auch auf der Server-Seite und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Neben der Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen je nach dem aktuellen Zustand jeder Eingabe zu stylen, wie oben im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) erwähnt, stellt der Browser auch für die client-seitige Validierung bei versuchter Formularübermittlung bereit. Bei der Formularübermittlung zeigt der Browser in unterstützten Browsern eine Fehlermeldung beim ersten ungültigen Formularelement an, wenn eine Formularsteuerung die Beschränkungsvalidierung nicht besteht, wobei entweder eine Standardmeldung basierend auf dem Fehlertyp angezeigt wird oder eine Nachricht, die Sie selbst festgelegt haben.

Einige Eingabetypen und andere Attribute setzen Grenzen für gültige Werte für eine gegebene Eingabe. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Verschiedene Fehler können auftreten, darunter ein `rangeUnderflow`-Fehler, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10, aber keine gerade ganze Zahl ist (nicht den Anforderungen des `step`-Attributs entspricht), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren mögliches Wertebereich periodisch ist (d.h. beim höchsten möglichen Wert die Werte wieder zum Anfang zurückkehren anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min)-Eigenschaften umgekehrt sind, was bedeutet, dass der Bereich der erlaubten Werte bei `min` beginnt, sich bis zum niedrigsten möglichen Wert umschließt und dann fortsetzt, bis `max` erreicht ist. Dies ist besonders nützlich für Daten und Zeiten, wie zum Beispiel, wenn Sie den Bereich von 8 PM bis 8 AM erlauben möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und ihre Werte können zu einem spezifischen Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

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
        Tritt auf, wenn der Wert größer als der maximale Wert ist, wie im <code>max</code>-Attribut definiert
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code>-Eigenschaft erlaubte Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der Mindestwert, wie im <code>min</code>-Attribut definiert
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code>-Eigenschaft geforderte Zahl
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein Pattern-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>Wert</code> nicht damit übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> ist oder Radio- oder Kontrollkästchen nicht ausgewählt sind.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Das Standardinkrement ist <code>1</code>, daher sind nur Ganzzahlen bei <code>type="number"</code> gültig, wenn kein Schritt enthalten ist. <code>step="any"</code> wird diesen Fehler niemals erzeugen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, zum Beispiel eine E-Mail enthält kein <code>@</code> oder eine URL enthält kein Protokoll.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required`-Attribut hat, ist kein Wert oder ein Leerstring nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, mit Ausnahme von `required`, führt ein Leerstring nicht zu einem Fehler.

Wir können Grenzen setzen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer alarmieren, wenn bei der Eingabe ein Fehler auftritt, wenn das Formular gesendet wird.

Zusätzlich zu den in der oben genannten Tabelle beschriebenen Fehlern enthält die `validityState`-Schnittstelle die booleschen Nur-Lese-Eigenschaften `badInput`, `valid` und `customError`. Das Gültigkeitsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund, warum die Validierung möglicherweise fehlgeschlagen ist, zutrifft, mit Ausnahme der Eigenschaft `valid`, die `true` ist, wenn der Wert des Elements alle Einschränkungen einhält.

Wenn ein Fehler vorliegt, werden unterstützende Browser den Benutzer nicht nur alarmieren, sondern auch das Absenden des Formulars verhindern. Eine Warnung: Wenn ein benutzerdefinierter Fehler auf einen wahrheitswertigen Wert gesetzt wird (alles außer einem Leerstring oder `null`), wird das Formular daran gehindert, gesendet zu werden. Wenn keine benutzerdefinierte Fehlermeldung vorliegt und keine der anderen Eigenschaften `true` zurückgeben, wird `valid` `true` sein und das Formular kann gesendet werden.

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

Die letzte Zeile, das festlegen der benutzerdefinierten Fehlermeldung auf den Leerstring, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Validität eingestellt ist, wird es trotzdem nicht gesendet, selbst wenn alle Werte gültig sind, solange die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld nicht validiert, müssen Sie die verfügbare [Constraints-Validierungs-API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) auf `<input>` (und verwandten) Elementen verwenden. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen werden dazu führen, dass dies eine Standardfehlermeldung ausgibt, wenn Sie versuchen, das Formular mit entweder keinem gültigen Wert oder einem Wert, der dem `pattern` nicht entspricht, zu senden.

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

Das Beispiel rendert folgendermaßen:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die `checkValidity()`-Methode über den `input`-Event-Handler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst und die Funktion des `invalid`-Ereignishandlers ausgeführt. Innerhalb dieser Funktion ermitteln wir, ob der Wert ungültig ist, weil er leer ist, oder weil er nicht dem Muster entspricht, mithilfe eines `if ()`-Blocks, und setzen eine benutzerdefinierte Validitätsfehlermeldung.
- Als Ergebnis wird, wenn der Eingabewert ungültig ist, wenn der Absendebutton gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn er gültig ist, wird er wie erwartet gesendet. Damit dies geschieht, muss die benutzerdefinierte Validität abgebrochen werden, indem `setCustomValidity()` mit einem Leerstring-Wert aufgerufen wird. Wir tun dies daher jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und zuvor eine benutzerdefinierte Validität festgelegt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie aktuell einen gültigen Wert bei der Übermittlung enthält.

> [!NOTE]
> Überprüfen Sie immer sowohl clientseitige als auch serverseitige Eingabeeinschränkungen. Constraints-Validierung beseitigt nicht die Notwendigkeit der Validierung _serverseitig_. Ungültige Werte können immer noch von älteren Browsern oder von böswilligen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte über viele Versionen hinweg ein proprietäres Fehlerattribut – `x-moz-errormessage` – das es Ihnen gestattete, benutzerdefinierte Fehlermeldungen auf ähnliche Weise festzulegen. Dies wurde in Version 66 entfernt (siehe [Firefox Fehler 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der Region ab. In einigen Regionen ist 1.000,00 eine gültige Zahl, während in anderen Regionen die gültige Weise, diese Zahl einzugeben, 1.000,00 ist.

Firefox verwendet folgende Heuristiken, um die Region zur Validierung der Benutzereingaben zu bestimmen (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die von einem `lang`/`xml:lang`-Attribut auf dem Element oder einem seiner Eltern angegeben wird.
- Versuchen Sie die Sprache, die von einem beliebigen `Content-Language`-HTTP-Header angegeben wird. Oder,
- Wenn keine angegeben ist, verwenden Sie die Sprache des Browsers.

## Barrierefreiheit

### Labels

Beim Einfügen von Eingaben ist es eine Anforderung der Barrierefreiheit, Labels neben ihnen hinzuzufügen. Dies ist notwendig, damit diejenigen, die unterstützende Technologien verwenden, erkennen können, wofür die Eingabe ist. Darüber hinaus verbessert das Klicken oder Berühren eines Labels den Fokus auf das mit dem Label verbundene Formularelement. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer und erhöht den Bereich, den ein Benutzer anklicken oder berühren kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radiobuttons und Kontrollkästchen, die sehr klein sind. Für weitere Informationen zu Labels im Allgemeinen siehe [Labels](#labels).

Das folgende ist ein Beispiel, wie Sie das `<label>`-Element mit einem `<input>`-Element im obigen Stil verknüpfen können. Sie müssen dem `<input>`-Element ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert mit der `id` des `<input>` übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten eine Fläche bereitstellen, die groß genug ist, um sie leicht zu aktivieren. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die ungenaue Formen der Eingabe wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixel](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

- [Erfolgskriterium verstehen 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>, aufgelistet, einreichbar, zurücksetzbares, formularzugeordnetes Element,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">inhaltlich formulierter Inhalt</a>. Wenn das <a href="#type"><code>type</code></a> nicht <code>hidden</code> ist, dann beschriftbares Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Müssen ein Start-Tag haben und dürfen kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">inhaltsformen Inhalt</a> akzeptiert.
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
            oder <code>text</code> mit <code>list</code>-Attribut: keine <code>role</code> erlaubt
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

- [Formular Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Wie man benutzerdefinierte Formular-Widgets erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Gestaltung für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [Erstellen von vertikalen Formulareinstellungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
