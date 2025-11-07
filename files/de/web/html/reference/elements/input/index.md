---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`<input>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, damit Benutzerdaten erfasst werden können. Es stehen viele verschiedene Arten von Eingabedaten und Steuerelementen zur Verfügung, abhängig von Gerät und {{Glossary("user_agent", "Nutzeragent")}}. Das `<input>`-Element ist eines der mächtigsten und komplexesten in HTML aufgrund der Vielzahl von Kombinationen aus Eingabetypen und Attributen.

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

Wie ein `<input>` funktioniert, variiert erheblich je nach Wert seines [`type`](#type)-Attributs. Daher werden die verschiedenen Typen auf ihren eigenen separaten Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird standardmäßig der Typ `text` verwendet.

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
      <td>Ein Kontrollkästchen, das einzelne Werte auswählen/abwählen lässt.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Eine Steuerung zur Farbauswahl; öffnet einen Farbwähler, wenn sie in unterstützten Browsern aktiv ist.
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
        Eine Steuerung zum Eingeben eines Datums (Jahr, Monat und Tag, ohne Zeit). Öffnet einen Datumsauswähler oder numerische Rädchen für Jahr, Monat, Tag, wenn aktiv in unterstützten Browsern.
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
        Eine Steuerung zum Eingeben eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder numerische Rädchen für die Datums- und Zeitkomponenten, wenn aktiv in unterstützten Browsern.
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
        <code>text</code>-Eingabe, hat aber Validierungsparameter und eine entsprechende Tastatur in unterstützten Browsern und Geräten mit dynamischen Tastaturen.
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
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Typen der Dateien zu definieren, die die Steuerung auswählen kann.
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
&#x3C;input id="userId" name="userId" type="hidden" value="abc123" /></pre
        >
        {{EmbedLiveSample("examplehidden",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/image", "image")}}</td>
      <td>
        Eine grafische <code>submit</code>-Schaltfläche. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert ist.
        Das <a href="#alt"><code>alt</code></a>-Attribut wird angezeigt, wenn das Bild-<a href="#src"><code>src</code></a> fehlt.
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
        Eine Steuerung zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt eine Standardvalidierung hinzu. Zeigt bei einigen Geräten mit dynamischen Tastenfeldern ein numerisches Tastenfeld an.
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
        Einzeiliges Textfeld, dessen Wert verdeckt ist.
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
        Ein Radioknopf, der es erlaubt, einen einzelnen Wert aus mehreren Optionen mit demselben <a href="#name"><code>name</code></a>-Wert auszuwählen.
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
        Eine Steuerung zur Eingabe einer Zahl, deren exakter Wert nicht wichtig ist. Wird als Bereichsregler angezeigt, der auf den mittleren Wert voreingestellt ist. Wird zusammen mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich der akzeptablen Werte zu definieren.
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
        Einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt. Kann ein Löschsymbol in unterstützten Browsern enthalten, um das Feld zu löschen. Zeigt bei einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Eine Schaltfläche, die das Formular abschickt.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        Eine Steuerung zur Eingabe einer Telefonnummer. Zeigt bei einigen Geräten mit dynamischen Tastenfeldern ein Telefonsymbol an.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code>-Eingabe, hat aber Validierungsparameter und eine entsprechende Tastatur in unterstützten Browsern und Geräten mit dynamischen Tastaturen.
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
        Eine Steuerung zur Eingabe eines Datums bestehend aus einer Wochennummer und einer Jahreszahl ohne Zeitzone.
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

Das `<input>`-Element ist aufgrund seiner Attribute so leistungsfähig. Das [`type`](#type)-Attribut, das oben mit Beispielen beschrieben wurde, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch gesehen alle den exakt gleichen Attributsatz. In der Realität haben jedoch die meisten Attribute nur auf einen spezifischen Unterbereich von Eingabetypen Einfluss. Darüber hinaus hängt die Weise, wie einige Attribute eine Eingabe beeinflussen, von ihrem Eingabetyp ab, und sie wirken sich auf unterschiedliche Eingabetypen unterschiedlich aus.

Dieser Abschnitt bietet eine Tabelle mit einer Liste aller Attribute und einer kurzen Beschreibung. Auf diese Tabelle folgt eine Liste, die jedes Attribut detaillierter beschreibt, zusammen mit den Eingabetypen, mit denen sie verbunden sind. Attribute, die bei den meisten oder allen Eingabetypen üblich sind, werden weiter unten detaillierter definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind – oder Attribute, die bei allen Eingabetypen üblich sind, aber besondere Verhaltensweisen aufweisen, wenn sie bei einem bestimmten Eingabetyp verwendet werden – werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                | Beschreibung                                                                                              |
| --------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                 | Hinweis auf erwarteten Dateityp in Dateiupload-Steuerelementen                                            |
| [`alpha`](#alpha)                             | `color`                                                                | Deckkraft der Farbe                                                                                       |
| [`alt`](#alt)                                 | `image`                                                                | Alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                           |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                               | Steuert die automatische Großschreibung im eingegebenen Text.                                             |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio`, und Buttons                            | Hinweis auf die automatische Ausfüllfunktion                                                              |
| [`capture`](#capture)                         | `file`                                                                 | Methode der Medienaufnahme in Dateiupload-Steuerelementen                                                 |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                    | Ob der Befehl oder die Steuerung ausgewählt ist                                                           |
| [`colorspace`](#colorspace)                   | `color`                                                                | Der {{Glossary("Color_space", "Farbraum")}}, der zum Auswählen des Farbwerts verwendet werden soll        |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                      | Name des Formularfelds, das für das Senden der Richtung des Elements beim Einreichen verwendet wird       |
| [`disabled`](#disabled)                       | alle                                                                   | Ob die Steuerelemente des Formulars deaktiviert sind                                                      |
| [`form`](#form)                               | alle                                                                   | Verknüpft das Steuerelement mit einem Formular-Element                                                    |
| [`formaction`](#formaction)                   | `image`, `submit`                                                      | URL, die für die Formulareinreichung verwendet werden soll                                                |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                      | Kodierungstyp für das Formular-Datenset, der für die Formulareinreichung verwendet werden soll            |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                      | HTTP-Methode, die für die Formulareinreichung verwendet werden soll                                       |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                      | Überspringt die Validierung der Steuerelemente des Formulars für die Formulareinreichung                  |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                      | Browsing-Kontext für die Formulareinreichung                                                              |
| [`height`](#height)                           | `image`                                                                | Entspricht dem Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                              |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Buttons       | Wert des ID-Attributs der {{htmlelement('datalist')}} mit Auto-Vervollständigungsoptionen                 |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Maximalwert                                                                                               |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Maximale Länge (Anzahl der Zeichen) des `value`                                                           |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Minimalwert                                                                                               |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                    | Minimale Länge (Anzahl der Zeichen) des `value`                                                           |
| [`multiple`](#multiple)                       | `email`, `file`                                                        | Boolean. Gibt an, ob mehrere Werte erlaubt sind                                                           |
| [`name`](#name)                               | alle                                                                   | Name der Formularsteuerung. Wird mit dem Formular als Teil eines Name/Wert-Paars übermittelt              |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                    | Muster, das der `value` erfüllen muss, um gültig zu sein                                                  |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`          | Text, der im Steuerelement angezeigt wird, wenn kein Wert festgelegt ist                                  |
| [`popovertarget`](#popovertarget)             | `button`                                                               | Weist ein `<input type="button">` als Steuerelement für ein Popover-Element zu                            |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                               | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                          |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Buttons | Boolean. Der Wert ist nicht editierbar                                                                    |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Buttons                      | Boolean. Ein Wert ist erforderlich oder muss überprüft werden, damit das Formular eingereicht werden kann |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                    | Größe der Steuerung                                                                                       |
| [`src`](#src)                                 | `image`                                                                | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                       |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`   | Zuwachswerte, die gültig sind                                                                             |
| [`type`](#type)                               | alle                                                                   | Typ der Formularsteuerung                                                                                 |
| [`value`](#value)                             | alle außer `image`                                                     | Der Wert der Steuerung. Wenn im HTML angegeben, entspricht dies dem Anfangswert                           |
| [`width`](#width)                             | `image`                                                                | Entspricht dem Breitenattribut für {{htmlelement('img')}}                                                 |

Einige zusätzliche nicht standardmäßige Attribute werden nach den Beschreibungen der Standardattribute aufgeführt.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Nur gültig für den `file`-Eingabetyp definiert das `accept`-Attribut, welche Dateitypen in einer `file`-Upload-Steuerung auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.

- `alpha` {{experimental_inline}}
  - : Nur gültig für den `color`-Eingabetyp bietet das `alpha`-Attribut dem Endbenutzer die Möglichkeit, die Deckkraft der ausgewählten Farbe einzustellen.

- `alt`
  - : Nur gültig für die `image`-Schaltfläche liefert das `alt`-Attribut Alternativtext für das Bild und zeigt den Wert des Attributs an, falls das Bild[`src`](#src) fehlt oder anderweitig nicht geladen wird. Siehe den {{HTMLElement("input/image", "image")}}-Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, in welcher Weise. Siehe die globale Attributseite [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert eine leerraumgetrennte Zeichenkette, die beschreibt, welche Art von Autovervollständigungsfunktionalität die Eingabe bereitstellen soll. Eine typische Implementierung von Autovervollständigung erinnert sich an zuvor in dasselbe Eingabefeld eingegebene Werte, aber komplexere Formen der Autovervollständigung können existieren. Beispielsweise könnte ein Browser mit der Kontaktliste eines Geräts integrieren, um `email`-Adressen in einem Email-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für erlaubte Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, und `password`. Dieses Attribut hat keinen Einfluss auf Eingabetypen, die keine numerischen oder textlichen Daten zurückgeben, und ist gültig für sämtliche Eingabetypen außer `checkbox`, `radio`, `file`, oder sonstigen Buttontypen.

    Weitere Informationen finden Sie im [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete), einschließlich Informationen zur Passwortsicherheit und wie `autocomplete` für `hidden` minimal unterschiedlich ist im Vergleich zu anderen Eingabetypen.

- `autofocus`
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass das Eingabefeld automatisch Fokus haben soll, wenn die Seite geladen ist (oder wenn das {{HTMLElement("dialog")}}-Element, das das Element enthält, angezeigt wird).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann Fokus haben, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wird es mehreren Elementen zugewiesen, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht bei Eingaben vom Typ `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren eines Formularkontrollfeldes kann sehbehinderte Personen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser den Benutzer ohne vorherige Warnung zum Formularkontrollfeld.

    Verwenden Sie beim Anwenden des `autofocus`-Attributs sorgfältige Überlegungen zur Barrierefreiheit. Automatisches Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch bei einigen Touch-Geräten dazu führen, dass dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label der Formularkontrollfeldes, das den Fokus erhält, ansagt, wird der Bildschirmleser nichts vor dem Label ansagen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext der vorangegangenen Inhalte verpassen.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt im HTML Media Capture-Spezifikations und nur gültig für den `file`-Eingabetyp, definiert das `capture`-Attribut, welches Medium – Mikrofon, Video oder Kamera – verwendet werden soll, um bei der `file`-Upload-Steuerung in unterstützten Szenarien eine neue Datei aufzunehmen. Siehe den {{HTMLElement("input/file", "file")}}-Eingabetyp.
- `checked`
  - : Gültig sowohl für `radio` als auch `checkbox`-Typen, ist `checked` ein Boolean-Attribut. Wenn es bei einem `radio`-Typ vorhanden ist, zeigt es an, dass der Radioknopf der aktuell ausgewählte in der Gruppe der gleichnamigen Radioknöpfe ist. Wenn es bei einem `checkbox`-Typ vorhanden ist, zeigt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es gibt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn der Zustand des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerungen wird der Wert eines Kontrollkästchens und Radio-Knopfes nur in die gesendeten Daten eingeschlossen, wenn sie derzeit `checked` sind. Wenn sie das sind, werden Name und Wert(e) der aktivierten Steuerung gesendet.
    >
    > Zum Beispiel, wenn ein Kontrollkästchen, dessen `name`-Attribut `fruit` ist, den `value` von `cherry` hat und es aktiviert ist, wird die gesendete Formulardaten `fruit=cherry` enthalten. Wenn das Kästchen nicht aktiv ist, wird es in den Formulardaten überhaupt nicht aufgeführt. Der Standard `value` für Kontrollkästchen und Radio-Knöpfe ist `on`.

- `colorspace` {{experimental_inline}}
  - : Nur gültig für den `color` Eingabetyp spezifiziert das `colorspace` Attribut den {{Glossary("Color_space", "Farbraum")}}, der mit der `type="color"` Eingabe verwendet wird. Mögliche {{Glossary("enumerated", "aufgezählte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe ist im {{Glossary("RGB", "sRGB")}} Farbraum. Dies umfasst [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) und {{cssxref("hex-color")}} Werte. Der Farbwerrt ist auf 8 Bits pro `r`, `g`, und `b` begrenzt. Dies ist der Standardwert.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3 Farbraum")}}, z. B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email` Eingabetypen, ermöglicht das `dirname` Attribut die Übermittlung der Richtung des Elements. Wenn inkludiert, wird die Formularkontrolle mit zwei Name/Wert-Paaren gesendet: das erste ist der [`name`](#name) und der [`value`](#value), und das zweite zeigt den Wert des `dirname` Attributs als Namen an, mit einem Wert von `ltr` oder `rtl`, gesetzt durch den Browser.

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

    Beim Senden des obigen Formulars verursacht die Eingabe, dass sowohl das `name` / `value` Paar `fruit=cherry` als auch das `dirname` / Richtungs Paar `fruit-dir=ltr` gesendet wird.
    Weitere Informationen finden Sie im [`dirname` Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer nicht in der Lage sein sollte, mit der Eingabe zu interagieren. Deaktivierte Eingaben werden typischerweise in einer gedimmteren Farbe oder auf eine andere Weise angezeigt, die anzeigt, dass das Feld nicht verfügbar ist.

    Insbesondere erhalten deaktivierte Eingaben das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis nicht, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Obwohl nicht durch die Spezifikation erforderlich, wird Firefox standardmäßig den [dynamischen Zustand der Deaktivierung](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladezyklen beibehalten. Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Ein String, der das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verbunden ist (das heißt sein **Formularbesitzer**). Der Wert dieses Strings, wenn vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächstgelegenen umgebenden Formular verknüpft, sofern vorhanden.

    Das `form`-Attribut ermöglicht es, eine Eingabe irgendwo im Dokument zu platzieren, aber es mit einem Formular im Dokument einzuschließen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft sein.

- `formaction`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie beim {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Nur gültig für den `image` Eingabeknopf, die `height` ist die Höhe der Bilddatei, die angezeigt werden soll, um den grafischen Submit-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, es definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Sein Zweck besteht darin, das Element zu identifizieren, wenn ein Link hergestellt wird. Der Wert wird als Wert des `for` Attributs der {{htmlelement('label')}} verwendet, um das Label mit der Formularkontrolle zu verbinden. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, gibt einen Hinweis an die Browser, welche Art von virtueller Tastaturkonfiguration verwendet werden sollte, wenn dieses Element oder dessen Inhalt bearbeitet wird. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der für das `list`-Attribut angegebene Wert sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements sein, das sich im selben Dokument befindet. Das `<datalist>` bietet eine Liste vordefinierter Werte an, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](#type) vereinbar sind, werden in den vorgeschlagenen Optionen nicht enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vorgaben Liste auswählen oder einen anderen Wert bereitstellen.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, und `color`.

    Entsprechend den Spezifikationen wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file`, oder einer der Button-Typen unterstützt.

    Abhängig vom Browser, kann der Benutzer eine benutzerdefinierte Farbpalette vorgeschlagen sehen, Markierungen entlang eines Bereiches oder sogar ein Eingabefeld, das wie ein {{HTMLElement("select")}} öffnet, jedoch nicht aufgelistete Werte zulässt. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}} Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den größten Wert innerhalb des erlaubten Wertespektrums. Wenn der eingegebene [`value`](#value) diesen überschreitet, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Falls der Wert des `max` Attributs keine Zahl ist, hat das Element keinen Maximalwert.

    Es gibt einen speziellen Fall: Wenn der Datentyp periodisch ist (wie bei Datums- oder Zeitangaben), kann der Wert von `max` niedriger sein als der Wert von `min`, was anzeigt, dass der Bereich sich umwickeln könnte; zum Beispiel können Sie damit einen Zeitbereich von 22 Uhr bis 4 Uhr morgens spezifizieren.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Feld eingeben kann. Dies muss ein Ganzzahlenwert von 0 oder größer sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des Textes, der in das Feld eingegeben wurde, mehr als `maxlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} beträgt. Standardmäßig verhindern Browser, dass Benutzer mehr Zeichen als durch das `maxlength`-Attribut erlaubt eingeben. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Weitere Informationen finden Sie in der [Client-seitigen Validierung](#client-seitige_validierung).

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den niedrigsten Wert innerhalb des erlaubten Wertespektrums. Wenn der eingegebene [`value`](#value) weniger betragt als dieser, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Falls der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Minimalwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht spezifiziert oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein Nicht-Leerwert weniger beträgt als das durch das `min`-Attribut erlaubte Minimum, verhindert Einschränkungsvalidierung die Formulareinreichung. Weitere Informationen finden Sie in der [Client-seitigen Validierung](#client-seitige_validierung).

    Es gibt einen besonderen Fall: Wenn der Datentyp periodisch ist (wie bei Datums- oder Zeitangaben), kann der Wert von `max` weniger sein als der Wert von `min`, was angibt, dass der Bereich sich umwickeln könnte; zum Beispiel können Sie damit einen Zeitbereich von 22 Uhr bis 4 Uhr morgens spezifizieren.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert kleiner oder gleich dem durch `maxlength` spezifizierten Wert sein. Wenn kein `minlength` spezifiziert ist oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des Textes, der in das Feld eingegeben wurde, weniger als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} beträgt und die Formulareinreichung verhindert. Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Weitere Informationen finden Sie in der [Client-seitigen Validierung](#client-seitige_validierung).

- [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - : Das Boolean-Attribut `multiple`, wenn gesetzt, bedeutet, dass der Benutzer in dem E-Mail-Widget kommagetrennte E-Mail-Adressen eingeben kann oder mehr als eine Datei beim `file`-Eingang gewählt werden kann. Siehe den {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetyp.

- `name`
  - : Ein String, der einen Namen für die Eingabesteuerung angibt. Dieser Name wird zusammen mit dem Wert der Steuerung gesendet, wenn die Formulardaten eingereicht werden.

    Betrachten Sie `name` als ein erforderliches Attribut (auch wenn es das nicht ist). Wenn einer Eingabe kein `name` zugewiesen ist, oder `name` leer ist, wird der Eingabewert nicht mit der Formularübermittlung gesendet! (Deaktivierte Steuerelemente, nicht angekreuzte Radioknöpfe, nicht angekreuzte Kontrollkästchen und Zurücksetzen-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfäll
    1. `_charset_`: Wenn es als Name eines `<input>`-Elements vom Typ {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` der Eingabe automatisch vom {{Glossary("user_agent", "Nutzeragent")}} auf die Zeichencodierung gesetzt, die zur Einreichung des Formulars verwendet wird.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name)-Attribut erzeugt ein einzigartiges Verhalten für Radioknöpfe.

    Nur ein Radio-Button in einer gleichnamigen Gruppe kann zur selben Zeit markiert sein. Das Auswählen eines Radio-Buttons in der Gruppe des gleichen Namens, hebt die Markierung eines aktuell ausgewählten Radio-Buttons der gleichen Gruppe automatisch auf. Der Wert dieses einen markierten Radio-Buttons wird zusammen mit dem Namen gesendet, falls das Formular geleitet wird,

    Beim Wechseln durch eine Serie von gleichnamigen Radargruppen, wird der markierte Fokus erhalten. Wenn diese in der Quellreihenfolge nicht zusammen gruppiert sind und einer der Gruppe markiert ist, beginnt der Wechsel, wenn der erste der Gruppe erreicht wird, um die übersprungen zu sein. Mit anderen Worten, wenn eine markiert ist, wird dasWechseln durch die unmarkierten Radioknöpfe in der Gruppe werden übersprungen. Wenn keiner markiert ist, erhält die Radiobutton-Gruppe den Fokus, wenn der ersten Knopf in der gleichnamigen Gruppe erreicht wird.

    Sobald einer der Radioknöpfe in einer Gruppe den Fokus hat, erlaubt die Nutzung der Pfeiltasten die Navigation durch alle Radioknöpfe mit gleichem Namen, auch wenn die Radioknöpfe nicht in der Quellreihenfolge zusammen gruppiert sind.

    Wenn ein Eingabeelement einen `name` erhält, wird dieser Name eine Eigenschaft des `HTMLFormElement.elements`-Eigenschaft des eigenen Formularelements. Wenn der `name` der Eingabe `guest` und eines anderen `hat-size` ist, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Wenn dieser Code ausgeführt wurde, ist `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie das Geben von Formularelementen eines `name`, der einer integrierten Eigenschaft des Formulars entspricht, da Sie dann die vordefinierte Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, und `password`, das `pattern` Attribut wird verwendet, um einen regulären Ausdruck zu übersetzen, den der `value` der Eingabe erfüllen muss, damit er die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie vom {{jsxref("RegExp")}}-Typ verwendet, und wie in unserem [Leitfaden über reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Keine Slashes sollten um den Mustertext angegeben werden. Beim Übersetzen des regulären Ausdrucks:
    1. Das Muster wird implizit mit `^(?:` und `)$` umschlossen, so dass das Übereinstimmen gegen den _gesamten_ Eingabewert erforderlich ist, d.h. `^(?:<pattern>)$`.
    2. Das `'v'`-Flag wird angegeben, so dass das Muster als eine Sequenz von Unicode-Codestellen statt ASCII interpretiert wird.

    Sollte das `pattern`-Attribut anwesend sein, aber nicht spezifiziert oder ungültig sein, wird kein regulärer Ausdruck angewandt und dieses Attribut wird vollständig ignoriert. Wenn das Muster-Attribut gültig ist und ein Nicht-Leerwert nicht dem Muster entspricht, verhindert die Einschränkungsvalidierung die Formulareinsendung. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) anwesend ist, wird der übersetzte reguläre Ausdruck mit jedem kommagetrennten Wert verglichen.

    > [!NOTE]
    > Wenn Sie das `pattern`-Attribut verwenden, informieren Sie den Benutzer über das erwartete Format, indem Sie erklärenden Text in der Nähe hinzufügen. Sie können auch ein [`title`](#title)-Attribut hinzufügen, um zu erläutern, welche Anforderungen erfüllt sein müssen, um dem Muster zu entsprechen; die meisten Browser zeigen diesen Titel als Tooltip an. Die sichtbar Erklärung is erfordelrich für Barrierefreiheit. Der Tooltip is einen Verbesserung.

    Weitere Informationen finden Sie in der [Client-seitigen Validierung](#client-seitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, das `placeholder` Attribut bietet einen kurzen Hinweis an den Benutzer, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder kurzer Satz sein, der einen Hinweis darauf gibt, welche Art von Daten erwartet werden, anstatt einer Erklärung oder Aufforderung. Der Text _darf nicht_ Wagenrückläufe oder Zeilenvorschübe umfassen. Wenn beispielsweise ein Feld zur Erfassung eines Benutzervornamens erwartet wird und sein Label "Vorname" ist, könnte ein geeigneter Platzhalter „z.B. Mustafa“ sein.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [Labels](#labels).

- `popovertarget`
  - : Wandelt ein `<input type="button">`-Element in eine Popover-Steuerschaltfläche um; nimmt die ID des zu steuernden Popover-Elements als Wert an. Weitere Einzelheiten finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API) Startseite. Das Herstellen einer Beziehung zwischen einem Popover und dessen Aufruferknopf über das `popovertarget` Attribut hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite Beziehung zu [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) zwischen Popover und Aufrufer und platziert das Popover in einer logischen Position der Tastaturnavigation, wenn gezeigt. Dies macht das Popover für Tastatur- und assistive Technik-Anwender (AT) zugänglicher (siehe auch [Popover-Accessbility-Funktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, wodurch es sehr komfortabel wird, Popover im Verhältnis zu ihren Steuerungen mithilfe von [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Infos siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die durchzuführende Aktion für ein Popover-Element an, das von einer Steuerung `<input type="button">` kontrolliert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Knopf verbirgt ein angezeigtes Popover. Wenn versucht wird, ein bereits verstecktes Popover zu verbergen, wird keine Aktion unternommen.
    - `"show"`
      - : Der Knopf zeigt ein verstecktes Popover. Wenn versucht wird, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion unternommen.
    - `"toggle"`
      - : Der Knopf aktiviert und deaktiviert ein Popover zwischen der Anzeige und dem Verbergen. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Falls `popovertargetaction` nicht angegeben wird, ist `"toggle"` die Standardaktion, die durch die Steuerschaltfläche ausgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer den Wert der Eingabe nicht bearbeiten sollte. Das `readonly` Attribut wird von den Eingbetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `password`unterstützt.

    Weitere Informationen finden Sie im [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : `required` ist ein Boolean-Attribut das, wenn vorhanden, angibt, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das besitzende Formular übermittelt werden kann. Das `required`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Weitere Informationen finden Sie unter [Client-seitige Validierung](#client-seitige_validierung) und im [HTML-Attribut: `required`](/de/docs/Web/HTML/Reference/Attributes/required).

- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
  - : Gültig für `email`, `password`, `tel`, `url` und `text`, das `size` Attribut gibt an, wie groß die Eingabe angezeigt werden soll. Grundsätzlich ergibt es das selbe Resultat wie die Einstellung der CSS [`width`](/de/docs/Web/CSS/Reference/Properties/width)-Eigenschaft mit ein paar Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em`-Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px`-Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`
  - : Nur gültig für den `image` Eingabeknopf, das `src` ist ein String, der die URL der Bilddatei spezifiziert, die angezeigt werden soll, um den Grafischen Submit-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
  - : Gültig für die `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`, das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss. Nur Werte, die eine ganze Anzahl von Schritten vom Schritt-Basis sind, sind gültig. Die Schritt-Basis ist das [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Attribut, falls spezifiziert, andernfalls [`value`](#value) oder `0`, wenn keines von beiden angegeben ist (außer for `week`, dessen Standard Schritt Basis −259,200,000 ist, was dem Anfang der Woche `1970-W01` entspricht).

    Wenn nicht ausdrücklich enthalten:
    - `step` standardmäßig 1 für `number` und `range`.
    - Jeder Datum-/Uhrzeit-Eingabetyp hat ein Standard `step`-Wert, der für den Typ geeignet ist; siehe die jeweiligen Eingabe Seiten: [`date`](/de/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time#step), und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week#step).

    Der Wert muss eine positive Zahl sein – ganze oder Fließkomma – oder der spezielle Wert `any`, was bedeutet, dass keine Schrittbildung impliziert wird und jeder Wert zulässig ist (ausgenommen andere Beschränkungen wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

    Zum Beispiel, wenn Sie `<input type="number" min="10" step="2">` haben, dann ist jede gerade Ganzzahl, die `10` oder größer ist, gültig. Wenn weggelassen, `<input type="number">`, ist jede Ganzzahl gültig, aber keine Fließkommazahlen (wie `4.2`), weil `step` standardmäßig `1` ist. Damit `4.2` gültig ist, muss `step` auf `any`, 0.1, 0.2 gesetzt werden, oder der `min`-Wert hätte eine Zahl sein müssen, die mit `.2` endet, wie zum Beispiel `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Wenn die von Benutzer eingegebenen Daten nicht der Stepping-Konfiguration entsprechen, wird der Wert in der Einschränkungsvalidierung als ungültig angesehen und wird die `:invalid` pseudoklasse entsprechen.

    Weitere Informationen finden Sie in der [Client-seitigen Validierung](#client-seitige_validierung).

- `tabindex`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus aufnehmen kann (fokussierbar ist) und ob es an der sequentiellen Tastaturnavigation teilnehmen sollte. Da alle Eingabetypen außer den Eingaben vom Typ versteckt fokussierbar sind, sollte dieses Attribut nicht bei Formularelementen verwendet werden, da dies die Verwaltung der Fokusreihenfolge für alle Elemente im Dokument erfordern würde, mit dem Risiko, die Benutzerfreundlichkeit und Zugänglichkeit zu beeinträchtigen wenn falsch gemacht.

- `title`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, einen Text, der beratende Informationen darstellt, die im Zusammenhang mit dem Element, zu dem es gehört, stehen. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden. Der Titel sollte NICHT als primäre Erklärung des Zwecks des Formularkontrollfeldes verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut der Formularkontrolle gesetzt ist. Siehe [Labels](#labels) weiter unten.

- `type`
  - : Ein String, der den Typ der Steuerelemente angibt, die gerendert werden sollen. Zum Beipspiel, um ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet, um ein einfaches Texteingabefeld zu erstellen.

    Erlaubte Werte sind in den [Eingabetypen](#input_types) oben aufgelistet.

- `value`
  - : Der Wert der Eingabesteuerung. Wenn im HTML angegeben, ist dies der Anfangswert, und von da an kann er jederzeit geändert oder abgerufen werden, indem auf das jeweilige [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt `value`-Eigenschaft zugegriffen wird. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio`, und `hidden` betrachtet werden.

- `width`
  - : Nur gültig für den `image` Eingabeknopf, die `width` ist die Breite der Bilddatei, die angezeigt werden soll, um den grafischen Submit-Button darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht-standard Attribute

Die folgenden nicht-standardmäßigen Attribute sind auch auf einigen Browsern verfügbar. Als generelle Regel sollten Sie ihre Verwendung vermeiden, es sei denn es lässt sich nicht vermeiden.

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
        Ob wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse gesendet werden, um Aktualisierung von Suchergebnissen in Echtzeit zu ermöglichen, während der Benutzer noch den Wert des Feldes bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der den Typ der Aktion angibt, die durchgeführt wird, wenn der Benutzer die <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste drückt, während das Feld bearbeitet wird; dies dient zur Bestimmung eines geeigneten Labels für diese Taste auf einer virtuellen Tastatur. <strong>Da dieses Attribut veraltet ist, verwenden Sie <a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> stattdessen.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Orientierung des Bereichsreglers fest. <strong>Nur Firefox</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl der Elemente, die in der Dropdownliste der vorherigen Suchabfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, der angibt, ob es dem Benutzer nur erlaubt werden soll, ein Verzeichnis (oder Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist) auszuwählen.
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also in Safari, Opera, Chrome, usw. unterstützt), die, wenn vorhanden, den {{Glossary("user_agent", "Nutzeragent")}} veranlasst, die Eingabe als Echtzeitsuche zu verarbeiten. Während der Nutzer den Wert des Feldes bearbeitet, sendet der Nutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Damit kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer eine Suche explizit initiiert (zum Beispiel durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes).

    Das `search`-Ereignis ist rate-begrenzt, damit es nicht häufiger als in einem implementierungsdefinierten Intervall gesendet wird.

- `orient` {{non-standard-inline}}
  - : Ähnlich wie die -moz-orient nicht-standardmäßige CSS Eigenschaft, die die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente betrifft, definiert das `orient` Attribut die Orientierung des Bereichsreglers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wobei der Bereich vertikal gerendert wird. Siehe [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für einen modernen Ansatz zur Erstellung vertikaler Formularelemente.

- `results` {{non-standard-inline}}
  - : Das `results` Attribut – unterstützt nur von Safari – ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl an Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü der `<input>`-Element der vorherigen Suchanfragen angezeigt werden sollen.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben wird, wird die Standardmaximumanzahl der Einträge verwendet.

- `webkitdirectory` {{non-standard-inline}}
  - : Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass nur Verzeichnisse von Benutzern in der Dateiauswahlmethode ausgewählt werden dürfen. Weitere Details und Beispiele finden Sie in [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

    Obwohl es ursprünglich nur für WebKit-basierte Browser implementiert wurde, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später nutzbar. Trotz der relativ breiten Unterstützung, ist es noch immer nicht standardmäßig und sollte nicht benutzt werden, es sei denn Sie haben keine Alternative.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Ebenfalls verfügbar sind die in den übergeordneten Schnittstellen spezifizierten Methoden wie [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben und ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben, ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element ausgelöst und (falls das Ereignis nicht abgebrochen wird) das Problem dem Benutzer gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Bei Elementen ohne auswählbaren Textinhalt (wie einem visuellen Farbwähler oder Kalenderdateneingaben) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine gegebene Zeichenfolge. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der vorhandene Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines textuellen Eingabeelements aus. Tut nichts für Eingaben, die nicht als Texteingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Picker für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe standardmäßig um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Eingaben, die ersetzte Elemente sind, haben einige Funktionen, die auf Nicht-Formularelemente nicht anwendbar sind. Es gibt CSS-Selektoren, die speziell auf Formularelemente basierend auf ihren UI-Funktionen, auch bekannt als UI-Pseudoklassen, abzielen können. Das Eingabeelement kann auch nach Typ mit Attributselektoren gezielt angesprochen werden. Es gibt einige Eigenschaften, die ebenfalls besonders nützlich sind.

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
        Jedes derzeit aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, eingetippt usw.) oder den Fokus akzeptieren kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder den Fokus akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es ansonsten aktiviert werden könnte (ausgewählt, angeklickt, eingetippt usw.) oder den Fokus akzeptieren könnte, wenn es nicht deaktiviert wäre.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Nicht vom Benutzer bearbeitbares Element</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitbar ist.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>Platzhalter</code>text</a> anzeigt, einschließlich <code>&#x3C;input></code>- und {{HTMLElement("textarea")}}-Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das bisher keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die die Standardelemente in einer Gruppe von verwandten Elementen sind. Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die beim Laden oder Rendern der Seite überprüft wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die derzeit ausgewählt sind (und den {{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, der derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}}-Elemente, deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt ist,
        {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle
        Radiobuttons mit dem gleichen Namen im Formular nicht ausgewählt sind, und
        {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die Validierung angewendet werden kann und die derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die Validierung angewendet wurde und die derzeit nicht gültig sind. Entspricht einem Formularelement, dessen Wert die durch die Attribute festgelegten Einschränkungen nicht erfüllt, wie
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>-Attribute und die <a href="#step"><code>step</code></a>-Einschränkungen festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribute festgelegten Bereichsgrenzen liegt oder die die <a href="#step"><code>step</code></a>-Einschränkung nicht erfüllt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Entspricht nur Elementen, die erforderlich sein können.
        Das Attribut, das auf einem nicht erforderlichen Element eingeschlossen ist, wird keine Übereinstimmung erzielen.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}} oder
        {{HTMLElement("textarea")}}-Element, das das <a href="#required"><code>required</code></a>-Attribut NICHT gesetzt hat.
        Entspricht nicht Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird aber bei Blende aktiviert. Entspricht ungültigen Eingaben, aber nur nach einer Benutzerinteraktion, beispielsweise durch das Fokussieren auf das Steuerelement, das Verlassen des Steuerelements oder den Versuch, das Formular mit dem ungültigen Steuerelement abzusenden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die einen Picker zur Auswahl eines Werts für den Benutzer anzeigen (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) - aber nur, wenn das Element im offenen Zustand ist, also wenn der Picker angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können das Etikett einer Checkbox basierend darauf stylen, ob die Checkbox aktiviert ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das unmittelbar nach einer aktivierten Eingabe folgt. Wir haben keine Stile angewendet, wenn die `input` nicht aktiviert ist.

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

Es ist möglich, verschiedene Typen von Formularelementen basierend auf ihrem [`type`](#type) mit [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) anzusprechen. CSS-Attributselektoren passen auf Elemente basierend auf entweder nur der Anwesenheit eines Attributs oder dem Wert eines bestimmten Attributs.

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

Standardmäßig erscheint der Platzhaltertext transluzent oder hellgrau. Das {{cssxref('::placeholder')}} Pseudo-Element ist der [`placeholder`-Text](#placeholder) der Eingabe. Es kann mit einer begrenzten Untermenge von CSS-Eigenschaften gestaltet werden.

```css
::placeholder {
  color: blue;
}
```

Nur die Untermenge der CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudo-Element angewendet werden kann, kann in einer Regel verwendet werden, in deren Selektor `::placeholder` vorkommt.

### caret-color

Eine spezifische Eigenschaft für textbezogene Eingabefelder ist die CSS-Eigenschaft {{cssxref("caret-color")}}, die es Ihnen ermöglicht, die Farbe festzulegen, mit der die Texteingabemarkierung gezeichnet wird:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (z.B. haben sie standardmäßig eine bevorzugte Standardgröße). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, sodass sich Formularelemente in der Größe an ihren Inhalt anpassen können.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die ihren Inhalt umschließen und wachsen, je mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingaben akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}} Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textlichen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein {{Glossary("replaced_elements", "ersetztes Element")}}. Wenn es dies ist, können die Position und Größe des Elements innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farben zu Elementen in HTML siehe:

- [Farben zu HTML-Elementen mit CSS hinzufügen](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Zusätzliche Funktionen

### Labels

Labels sind notwendig, um begleitenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element bietet erklärende Informationen über ein Formularfeld, die _immer_ angebracht sind (abgesehen von jeglichen Layoutbedenken, die Sie haben). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden sollte.

#### Zugeordnete Labels

Die semantische Paarung von `<input>`- und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Bildschirmleser. Indem sie über das Attribut [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) des `<label>` miteinander verbunden werden, verbinden Sie das Label mit dem Eingabeelement so, dass Bildschirmleser Eingaben den Benutzern genauer beschreiben können.

Es reicht nicht aus, einfachen Text neben dem `<input>`-Element zu haben. Benutzerfreundlichkeit und Barrierefreiheit erfordern die Einbindung eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Neben einem zugänglichen Namen bietet das Label eine größere 'Treffer'-Fläche für Maus- und Touchscreen-Nutzer, um es anzuklicken oder zu berühren. Indem Sie ein `<label>` mit einem `<input>` paaren, wird durch Klicken auf eines davon das `<input>` fokussiert. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu "kennzeichnen", passiert dies nicht. Es ist hilfreich für Menschen mit motorischen Einschränkungen, wenn die Aufforderung Teil des Aktivierungsbereichs für die Eingabe ist.

Als Webentwickler ist es wichtig, niemals davon auszugehen, dass Menschen alles wissen, was wir wissen. Die Vielfalt der Menschen, die das Web nutzen - und damit Ihre Website - garantiert praktisch, dass einige Besucher Ihrer Website eine andere Denkweise haben und/oder Umstände, die sie dazu bringen, Ihre Formulare sehr unterschiedlich von Ihnen ohne klare und richtig präsentierte Labels zu interpretieren.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text anzugeben, der innerhalb des Inhaltsbereichs des `<input>`-Elements selbst angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als Ersatz verwendet werden, weil er es nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, und nicht als Erklärung oder Aufforderung.

Nicht nur ist der Platzhalter für Bildschirmleser nicht zugänglich, sondern sobald der Benutzer einen Text in das Formularelement eingibt oder das Formularelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitenübersetzungsfunktionen können Attribute bei der Übersetzung überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn es vermeidbar ist. Wenn Sie ein `<input>`-Element kennzeichnen müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert aber _nicht_, dass der Server gültige Daten empfängt. Wenn die Daten in einem bestimmten Format vorliegen müssen, stellen Sie _immer_ sicher, dass sie auch auf der Serverseite überprüft werden, und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS für die Gestaltung von Eingaben basierend auf den {{cssxref(":valid")}}- oder {{cssxref(":invalid")}}-UI-Zuständen, basierend auf dem aktuellen Zustand jeder Eingabe, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser bei (versuchter) Formularübermittlung eine client-seitige Validierung an. Bei der Formularübermittlung, wenn ein Formularelement die Einschränkungsvalidierung nicht besteht, zeigen unterstützende Browser eine Fehlermeldung auf dem ersten ungültigen Formularelement an; sie zeigen eine Standardnachricht basierend auf der Fehlerart an oder eine von Ihnen festgelegte Nachricht.

Einige Eingabetypen und andere Attribute schränken ein, welche Werte für eine gegebene Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler könnten auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn größer als 10, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine ganze Zahl (entspricht nicht den Anforderungen des `step`-Attributs) oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Bereich von möglichen Werten periodisch ist (das heißt, bei dem höchsten möglichen Wert kehren die Werte zum Anfang zurück, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max)- und [`min`](#min)-Eigenschaften umgekehrt sind, was anzeigt, dass der Bereich der erlaubten Werte bei `min` beginnt, sich bis zum niedrigsten möglichen Wert umschlägt und dann weiter geht, bis `max` erreicht wird. Dies ist besonders nützlich für Daten und Zeiten, wie wenn man den Bereich von 20 Uhr bis 8 Uhr morgens erlauben möchte:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und ihre Werte können zu einem spezifischen Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

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
        Tritt auf, wenn der Wert größer ist als der Maximalwert, der durch das <code>max</code>-Attribut definiert ist.
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
        Tritt auf, wenn der Wert kleiner ist als der Mindestwert, der durch das <code>min</code>-Attribut definiert ist
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die durch die <code>minlength</code>-Eigenschaft erforderliche Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein pattern-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, der Wert jedoch <code>null</code> ist oder Radio- oder Checkbox nicht angekreuzt ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Das Standardinkrement ist <code>1</code>, sodass nur ganze Zahlen gültig sind, wenn es nicht <code>step</code> enthalten ist. <code>step="any"</code> wird diesen Fehler niemals auslösen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom korrekten Typ ist, beispielsweise, wenn eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularelement nicht das `required`-Attribut hat, ist kein Wert oder eine leere Zeichenfolge nicht ungültig. Selbst wenn die obigen Attribute vorhanden sind, mit Ausnahme von `required`, führt eine leere Zeichenfolge nicht zu einem Fehler.

Wir können Grenzen festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer warnen, wenn beim Absenden des Formulars ein Fehler vorliegt.

Zusätzlich zu den oben in der Tabelle beschriebenen Fehlern enthält die `validityState`-Schnittstelle die Booleschen Nur-Lese-Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt enthält:

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

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund für das Fehlschlagen der Validierung wahr ist, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen erfüllt.

Wenn ein Fehler vorliegt, werden unterstützende Browser den Benutzer sowohl warnen als auch das Absenden des Formulars verhindern. Ein Wort der Vorsicht: Wenn ein benutzerdefinierter Fehler auf einen wahrer Wert (irgendetwas anderes als die leere Zeichenfolge oder `null`) gesetzt wird, wird das Formular daran gehindert, abgesendet zu werden. Wenn keine benutzerdefinierte Fehlermeldung vorliegt und keine der anderen Eigenschaften wahr ist, wird `valid` wahr sein und das Formular kann abgesendet werden.

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

Die letzte Zeile, in der die benutzerdefinierte Gültigkeitsmeldung auf die leere Zeichenfolge gesetzt wird, ist wichtig. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt ist, wird es bis zum Abbruch des Absends fehlschlagen, selbst wenn die Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die für `<input>`- (und verwandte) Elemente verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Validierungsfunktionen werden dies dazu veranlassen, eine Standardfehlermeldung anzuzeigen, wenn Sie versuchen, das Formular mit entweder keinem gültigen Wert oder einem Wert, der nicht dem `pattern` entspricht, abzusenden.

Wenn Sie stattdessen benutzerdefinierte Fehlermeldungen anzeigen möchten, könnten Sie JavaScript verwenden wie folgt:

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

Das Beispiel rendert sich wie folgt:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich dessen Wert ändert, indem wir die `checkValidity()`-Methode über den `input`-Event-Handler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Event ausgelöst und die `invalid`-Event-Handler-Funktion wird ausgeführt. Innerhalb dieser Funktion ermitteln wir, ob der Wert ungültig ist, weil er leer ist oder weil er nicht dem Muster entspricht, indem wir einen `if ()`-Block verwenden und eine benutzerdefinierte Gültigkeitsfehlermeldung festlegen.
- Infolgedessen wird, wenn der Eingabewert ungültig ist, wenn die Schaltfläche zum Absenden gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Wenn es gültig ist, wird es wie erwartet absenden. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit aufgehoben werden, indem `setCustomValidity()` mit einem leeren Zeichenfolgenwert aufgerufen wird. Dies tun wir daher jedes Mal, wenn das `input`-Event ausgelöst wird. Wenn Sie dies nicht tun, und eine benutzerdefinierte Gültigkeit zuvor festgelegt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie derzeit einen gültigen Wert bei der Absendung enthält.

> [!NOTE]
> Validieren Sie immer Eingabeeinschränkungen sowohl clientseitig als auch serverseitig. Die Einschränkungsvalidierung entfernt nicht die Notwendigkeit einer Validierung _auf der Serverseite_. Ungültige Werte können immer noch von älteren Browsern oder von schlechten Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte viele Versionen lang ein proprietäres Fehlerattribut — `x-moz-errormessage` —, das es Ihnen ermöglichte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise festzulegen. Dieses wurde ab Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der Lokalisierung ab. In einigen Lokalen ist 1.000,00 eine gültige Zahl, während in anderen Lokalen die gültige Eingabeweise für diese Zahl 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Lokale zur Validierung der Benutzereingabe zu bestimmen (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang`-Attribut auf dem Element oder einem seiner Eltern spezifiziert wird.
- Versuchen Sie die Sprache, die durch jeden `Content-Language`-HTTP-Header spezifiziert wird. Oder,
- Wenn keiner angegeben ist, verwenden Sie die Lokale des Browsers.

## Barrierefreiheit

### Labels

Wenn Eingaben einbezogen werden, ist es eine Anforderung der Barrierefreiheit, Labels hinzuzufügen. Dies ist erforderlich, damit diejenigen, die unterstützende Technologien nutzen, erkennen können, wofür die Eingabe ist. Das Klicken oder Berühren eines Labels gibt außerdem den Fokus auf das damit verbundene Formularelement. Dies verbessert die Zugänglichkeit und Benutzerfreundlichkeit für sehende Benutzer, erhöht den Bereich, den ein Benutzer anklicken oder berühren kann, um das Formularelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radiobuttons und Checkboxen, die winzig sind. Weitere Informationen zu Labels im Allgemeinen finden Sie unter [Labels](#labels).

Das folgende Beispiel zeigt, wie das `<label>` mit einem `<input>`-Element im oben beschriebenen Stil verknüpft werden kann. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert derselbe wie der `id` der Eingabe ist.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulardaten sollten einen Bereich bieten, der groß genug ist, um sie leicht zu aktivieren. Dies hilft verschiedenen Menschen, einschließlich Menschen mit motorischen Einschränkungen und Menschen, die unpräzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixel](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Erfolgsmaßstab 2.5.5: Zielgröße verstehen | W3C Verständnis der WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, gelistet, übermittelbar, zurücksetzbar, formelement-assoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann kennzeichnungsfähiges Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Kein; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
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
- [Formular-Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
