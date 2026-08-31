---
title: "`<input>` HTML-Tag"
short-title: <input>
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

Das **`<input>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um interaktive Steuerelemente für webbasierten Formulare zu erstellen, um Daten vom Benutzer entgegenzunehmen. Je nach Gerät und {{Glossary("user_agent", "User-Agent")}} stehen eine Vielzahl von Eingabedaten- und Steuerelement-Widgets zur Verfügung. Das `<input>`-Element ist eines der leistungsstärksten und komplexesten in HTML, aufgrund der schieren Anzahl an Kombinationen von Eingabetypen und Attributen.

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

## \<input>-Typen

Die Funktionsweise eines `<input>` variiert erheblich, abhängig vom Wert des [`type`](#type)-Attributs, weshalb die verschiedenen Typen auf separaten Referenzseiten behandelt werden. Wenn dieses Attribut nicht angegeben ist, ist der Standardtyp `text`.

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
      <td>Eine Checkbox, die es ermöglicht, einzelne Werte auszuwählen oder abzuwählen.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerelement zur Farbauswahl; öffnet einen Farbwähler, wenn es in unterstützenden Browsern aktiv ist.
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
        Öffnet einen Datumsauswähler oder nummerische Räder für Jahr, Monat, Tag, wenn es in unterstützenden Browsern aktiv ist.
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
        Ein Steuerelement zur Eingabe eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datumsauswähler oder nummerische Räder für Datums- und Uhrzeitkomponenten, wenn es in unterstützenden Browsern aktiv ist.
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
        <code>text</code>-Eingabe, hat aber Validierungsparameter und relevante Tastaturen in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerelement, das es dem Nutzer erlaubt, eine Datei auszuwählen.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Dateitypen zu definieren, die das Steuerelement auswählen kann.
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
        Ein Steuerelement, das nicht angezeigt wird, dessen Wert aber an den
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
        Ein grafischer <code>submit</code>-Button. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert wird.
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
        Ein Steuerelement zur Eingabe einer Zahl. Zeigt einen Spinner an und fügt eine standardmäßige
        Validierung hinzu. Zeigt auf einigen Geräten mit dynamischen Keypads eine numerische Tastatur an.
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
        Ein Radiobutton, der es ermöglicht, einen einzigen Wert aus mehreren Auswahlmöglichkeiten mit demselben <a href="#name"><code>name</code></a>-Wert zu wählen.
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
        Wird als Bereichs-Widget angezeigt, das standardmäßig auf den mittleren Wert eingestellt ist.
        In Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich der akzeptablen Werte zu definieren.
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
        Ein Button, der den Inhalt des Formulars auf Standardwerte zurücksetzt. Nicht empfohlen.
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
        Ein einzeiliges Textfeld zur Eingabe von Suchstrings. Zeilenumbrüche werden
        automatisch aus dem Eingabewert entfernt. Kann in unterstützenden Browsern ein Lösch-Symbol enthalten, mit dem das Feld geleert werden kann.
        Zeigt auf einigen Geräten mit dynamischen Tastaturen ein Suchsymbol anstelle der Eingabetaste an.
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
        Ein Steuerelement zur Eingabe einer Telefonnummer. Zeigt in einigen Geräten mit dynamischen Tastaturen ein Telefon-Tastenfeld an.
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
        Ein Feld zur Eingabe einer URL. Sieht aus wie eine <code>text</code>-Eingabe, hat
        aber Validierungsparameter und relevante Tastaturen in unterstützenden Browsern
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
        Ein Steuerelement zur Eingabe eines Datums, bestehend aus einer Jahr-Woche-Nummer und einer Wochennummer ohne Zeitzone.
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
        Ein Steuerelement zur Eingabe eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) basierend auf der UTC-Zeitzone.
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

Das `<input>`-Element ist so leistungsstark aufgrund seiner Attribute; das [`type`](#type)-Attribut, welches oben mit Beispielen beschrieben ist, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle basiert, teilen sie technisch gesehen dasselbe Set von Attributen. In Wirklichkeit haben jedoch die meisten Attribute nur auf eine spezifische Untergruppe von Eingabetypen Einfluss. Darüber hinaus hängt die Wirkung einiger Attribute auf eine Eingabe vom Eingabetyp ab und beeinflusst verschiedene Eingabetypen auf unterschiedliche Weise.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird von einer Liste gefolgt, die jedes Attribut im Detail beschreibt, zusammen mit den Eingabetypen, mit denen sie assoziiert sind. Diejenigen, die für die meisten oder alle Eingabetypen allgemein sind, werden im Folgenden detailliert beschrieben. Attribute, die einzigartig für bestimmte Eingabetypen sind – oder Attribute, die für alle Eingabetypen generell, aber bei einem bestimmten Eingabetyp spezielle Verhaltensweisen aufweisen – werden stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                               | Beschreibung                                                                                              |
| --------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                | Hinweis auf den erwarteten Dateityp in Datei-Upload-Steuerelementen                                       |
| [`alpha`](#alpha)                             | `color`                                                               | Deckkraft der Farbe                                                                                       |
| [`alt`](#alt)                                 | `image`                                                               | alt-Attribut für den Bildtyp. Erforderlich für Barrierefreiheit                                           |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                              | Steuert automatische Großschreibung in eingegebenem Text.                                                 |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Tasten                             | Hinweis für die Formular-Autovervollständigungsfunktion                                                   |
| [`capture`](#capture)                         | `file`                                                                | Medienaufnahme-Eingabemethode in Datei-Upload-Steuerelementen                                             |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                   | Gibt an, ob der Befehl oder das Steuerelement ausgewählt ist                                              |
| [`colorspace`](#colorspace)                   | `color`                                                               | Der {{Glossary("Color_space", "Farbraum")}}, der zum Auswählen des Farbwerts verwendet werden soll        |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                     | Name des Formularfelds zum Senden der Textausrichtung des Elements bei der Formularübermittlung           |
| [`disabled`](#disabled)                       | alle                                                                  | Gibt an, ob das Formularfeld deaktiviert ist                                                              |
| [`form`](#form)                               | alle                                                                  | Verknüpft das Steuerelement mit einem Formularelement                                                     |
| [`formaction`](#formaction)                   | `image`, `submit`                                                     | URL zur Verwendung bei der Formularübermittlung                                                           |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                     | Kodierungstyp für Formulardatensatz zur Verwendung bei der Formularübermittlung                           |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                     | HTTP-Methode zur Verwendung bei der Formularübermittlung                                                  |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                     | Umgeht die Formularfeldvalidierung bei der Formularübermittlung                                           |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                     | Browsing-Kontext für die Formularübermittlung                                                             |
| [`height`](#height)                           | `image`                                                               | Entspricht dem Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                              |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Tasten       | Wert des ID-Attributs der {{htmlelement('datalist')}} der Autovervollständigungsoptionen                  |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`  | Maximalwert                                                                                               |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                   | Maximale Länge (Anzahl der Zeichen) des `value`                                                           |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`  | Minimalwert                                                                                               |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                   | Minimale Länge (Anzahl der Zeichen) des `value`                                                           |
| [`multiple`](#multiple)                       | `email`, `file`                                                       | Boolean. Gibt an, ob mehrere Werte erlaubt sind                                                           |
| [`name`](#name)                               | alle                                                                  | Name des Formularsteuerfelds. Wird mit dem Formular als Teil eines Name/Wert-Paares übermittelt           |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                   | Muster, das der `value`-Wert erfüllen muss, um gültig zu sein                                             |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`         | Text, der im Formularfeld erscheint, wenn kein Wert festgelegt ist                                        |
| [`popovertarget`](#popovertarget)             | `button`                                                              | Weist einem `<input type="button">` ein Steuerelement für ein Popover-Element zu                          |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                              | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                          |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Tasten | Boolean. Der Wert ist nicht editierbar                                                                    |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Tasten                      | Boolean. Ein Wert ist erforderlich oder muss überprüft werden, damit das Formular eingereicht werden kann |
| [`size`](#technische_zusammenfassung)         | `text`, `search`, `url`, `tel`, `email`, `password`                   | Größe des Steuerelements                                                                                  |
| [`src`](#src)                                 | `image`                                                               | Entspricht dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                       |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`  | Inkrementwerte, die gültig sind                                                                           |
| [`switch`](#switch)                           | `checkbox`                                                            | Ob die Checkbox-Eingabe als Schalter dargestellt werden soll                                              |
| [`type`](#type)                               | alle                                                                  | Typ des Formularsteuerfelds                                                                               |
| [`value`](#value)                             | alle außer `image`                                                    | Der Wert des Steuerfeldes. Wenn im HTML angegeben, entspricht dem Anfangswert                             |
| [`width`](#width)                             | `image`                                                               | Entspricht dem `width`-Attribut für {{htmlelement('img')}}                                                |

Einige zusätzliche nicht-standardmäßige Attribute sind im Anschluss an die Beschreibungen der Standardattribute aufgeführt.

### Einzelene Attribute

- [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)
  - : Nur gültig für den Typ `file`. Das `accept`-Attribut definiert, welche Dateitypen in einem `file`-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alpha` {{experimental_inline}}
  - : Nur gültig für den Typ `color`. Das `alpha`-Attribut bietet dem Endnutzer die Möglichkeit, die Deckkraft der ausgewählten Farbe festzulegen.

- `alt`
  - : Nur gültig für den Bildknopf `image`. Das `alt`-Attribut bietet alternativen Text für das Bild, der angezeigt wird, wenn das Bild [`src`](#src) fehlt oder anderweitig nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird, und falls ja, auf welche Weise. Weitere Informationen finden Sie auf der globalen Attributseite [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut nimmt als Wert einen durch Leerzeichen getrennten String, der beschreibt, welche Art von Autovervollständigungsfunktionalität die Eingabe bereitstellen soll, wenn überhaupt. Eine typische Implementierung von Autovervollständigung merkt sich frühere Werte, die im selben Eingabefeld eingegeben wurden, es können jedoch auch komplexere Formen der Autovervollständigung existieren. Beispielsweise könnte sich ein Browser mit der Kontaktliste eines Geräts integrieren, um `email`-Adressen in einem E-Mail-Eingabefeld automatisch zu vervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#value) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig für `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkungen auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, und ist für alle Eingabetypen außer `checkbox`, `radio`, `file` oder einen der Tasten-Typen gültig.

    Weitere Informationen finden Sie im [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete), einschließlich Informationen zur Passwortsicherheit und wie sich `autocomplete` bei `hidden` leicht von anderen Eingabetypen unterscheidet.

- `autofocus`
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass das Eingabefeld automatisch den Fokus haben soll, wenn die Seite geladen wurde (oder wenn der {{HTMLElement("dialog")}} enthaltende relevante Content geladen wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Es darf nicht mehr als ein Element im Dokument mit dem `autofocus`-Attribut versehen sein. Wenn es auf mehr als einem Element gesetzt wird, erhält das erste Element mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht bei Eingaben vom Typ `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Automatisches Fokussieren eines Formularsteuerelements kann sehbehinderte Menschen verwirren, die Bildschirmlesetechnologie verwenden, ebenso wie Menschen mit kognitiven Beeinträchtigungen. Wenn `autofocus` zugewiesen ist, "teleportieren" Lesegeräte für Bildschirme ihre Nutzer ohne Vorwarnung.

    Seien Sie vorsichtig, wenn Sie das `autofocus`-Attribut anwenden und das Hinzufügen für Barrierefreiheit berücksichtigen. Automatisches Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auf einigen Touch-Geräten dazu führen, dass dynamische Tastaturen angezeigt werden. Ein Bildschirmlesegerät wird das Etikett des fokussierten Formularsteuerelements ansagen, aber es wird nichts vor dem Etikett ansagen. Ebenso wird der Sichtvergleichsbenutzer auf einem kleinen Gerät den Kontext verpassen, der durch den vorausgehenden Inhalt erstellt wird.

- [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und nur gültig für den Eingabetyp `file`, definiert das `capture`-Attribut, welche Medien - Mikrofon, Video oder Kamera - verwendet werden sollen, um in unterstützenden Szenarien eine neue Datei mit dem `file`-Upload-Steuerelement aufzunehmen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`
  - : Gültig für die Typen `radio` und `checkbox`. `checked` ist ein Boolean-Attribut. Wenn es beim `radio`-Typ vorhanden ist, gibt es an, dass der Radiobutton der aktuell ausgewählte in der Gruppe gleichnamiger Radiobuttons ist. Wenn es beim `checkbox`-Typ vorhanden ist, gibt es an, dass das Kontrollkästchen standardmäßig aktiviert ist (wenn die Seite geladen wird). Es zeigt _nicht_ an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn sich der Zustand des Kontrollkästchens ändert, wird dieses Inhaltsattribut bei der Änderung nicht aktualisiert. (Nur das [`HTMLInputElement`-Attribut `checked`](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Im Gegensatz zu anderen Eingabesteuerfeldern werden die Werte von Kontrollkästchen und Radio-Buttons nur in die übermittelten Daten aufgenommen, wenn sie derzeit `checked` sind. Wenn dies der Fall ist, werden der Name und die Werte der aktivierten Steuerelemente übermittelt.
    >
    > Wenn beispielsweise ein Kontrollkästchen mit dem `name` `fruit` einen `value` von `cherry` hat und das Kontrollkästchen aktiviert ist, dann werden die Formulardaten `fruit=cherry` enthalten. Wenn das Kontrollkästchen nicht aktiv ist, wird es in den Formulardaten überhaupt nicht aufgeführt. Der Standardwert für Kontrollkästchen und Radio-Buttons ist `on`.

- `colorspace` {{experimental_inline}}
  - : Nur gültig für den Eingabetyp `color`. Das `colorspace`-Attribut gibt den {{Glossary("Color_space", "Farbraum")}} an, der vom `type="color"`-Eingabetyp verwendet wird. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dazu gehören {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}} und {{cssxref("hex-color")}}-Werte. Der Farbwert ist auf 8-Bit pro `r`-, `g`- und `b`-Komponente begrenzt. Dies ist der Standard.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3-Farbraum")}}, z. B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Gültig für die Eingabetypen `hidden`, `text`, `search`, `url`, `tel` und `email`. Das `dirname`-Attribut ermöglicht die Übermittlung der Textausrichtung des Elements. Wenn hinzugefügt, wird das Formularsteuerelement mit zwei Name/Wert-Paaren übermittelt: Das erste ist der [`name`](#name) und [`value`](#value), und das zweite ist der Wert des `dirname`-Attributs als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

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

    Wenn das oben gezeigte Formular übermittelt wird, führen die Eingaben dazu, dass sowohl das `name` / `value`-Paar `fruit=cherry` als auch das `dirname` / Richtungs-Paar `fruit-dir=ltr` gesendet werden.
    Für mehr Informationen siehe das [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer nicht mit der Eingabe interagieren soll. Deaktivierte Eingaben werden typischerweise mit einer dunkleren Farbe oder mit einer anderen Form der Indikation dargestellt, dass das Feld nicht zur Verwendung verfügbar ist.

    Genauer gesagt, deaktivierte Eingaben erhalten nicht das [`click`](//de/docs/Web/API/Element/click_event)-Ereignis und deaktivierte Eingaben werden nicht mit dem Formular eingereicht.

    > [!NOTE]
    > Obwohl es von der Spezifikation nicht erforderlich ist, wird Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` über Seitenladezyklen hinweg [beibehalten](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um diese Funktion zu steuern.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Eine Zeichenfolge, die das {{HTMLElement("form")}}-Element angibt, mit dem die Eingabe verknüpft ist (d.h. der **Formularbesitzer** ist). Der Wert dieser Zeichenfolge, falls vorhanden, muss mit der [`id`](#id) eines `<form>`-Elements im selben Dokument übereinstimmen. Wenn dieses Attribut nicht spezifiziert ist, wird das `<input>`-Element mit dem nächsten enthaltenden Formular verbunden, falls vorhanden.

    Das `form`-Attribut ermöglicht es, eine Eingabe an einer beliebigen Stelle im Dokument zu platzieren, aber diese in einem Formular an anderer Stelle im Dokument zu inkludieren.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem Formular verknüpft werden.

- `formaction`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Für mehr Informationen siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Für mehr Informationen siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Für mehr Informationen siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Für mehr Informationen siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Nur gültig für die Eingabetypen `image` und `submit`. Für mehr Informationen siehe den {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Nur beim Bildknopf `image` gültig. Die `height` ist die Höhe der Bilddatei, die angezeigt wird, um den grafischen Bestätigungsbutton darzustellen. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, das für alle Elemente gültig ist, einschließlich aller Eingabetypen, und eine eindeutige Kennung (ID) definiert, die im gesamten Dokument einzigartig sein muss. Ihr Zweck ist es, das Element bei der Verknüpfung zu identifizieren. Der Wert wird als Wert des Attributs `for` des {{htmlelement('label')}}-Elements verwendet, um das Label mit dem Formularsteuerelement zu verbinden. Siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globaler Wert, gültig für alle Elemente, er bietet einen Hinweis an Browser, welche Art von virtueller Tastaturkonfiguration beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`
  - : Der Wert, der dem `list`-Attribut gegeben wird, sollte die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements sein, das sich im selben Dokument befindet. Die `<datalist>` bietet eine Liste vorab definierter Werte als Vorschläge für den Nutzer zur Eingabe. Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Nutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut Spezifikationen wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder irgendeinem Button-Typ unterstützt.

    Abhängig vom Browser kann der Nutzer eine benutzerdefinierte Farbpalette, Tic-Marken entlang eines Bereichs oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber auch nicht aufgelistete Werte zulässt, sehen. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Reference/Elements/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Siehe das {{htmlelement('datalist')}}-Element.

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den größten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Höchstwert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Datums- oder Zeitangaben), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass der Bereich umschlagen kann; zum Beispiel erlaubt dies die Angabe eines Zeitbereichs von 22:00 Uhr bis 4:00 Uhr.

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die maximale Zeichenfolgelänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Nutzer in das Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn keine `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes größer ist als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} lang. Standardmäßig verhindern Browser, dass Nutzer mehr Zeichen eingeben, als durch das `maxlength`-Attribut erlaubt sind. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Weitere Informationen finden Sie unter [Client-side-Validierung](#beispiel_für_benutzerdefinierte_validierungsfehler).

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, es definiert den negativsten Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](#value) kleiner als dieser ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen Mindestwert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden, aber nicht spezifiziert oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nicht leerer Wert kleiner als das Minimum, das durch das `min`-Attribut zugelassen wird, wird die Einschränkungsvalidierung die Formularübermittlung verhindern. Weitere Informationen finden Sie unter [Client-side-Validierung](#beispiel_für_benutzerdefinierte_validierungsfehler).

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (wie bei Datums- oder Zeitangaben), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass der Bereich umschlagen kann; zum Beispiel erlaubt dies die Angabe eines Zeitbereichs von 22:00 Uhr bis 4:00 Uhr.

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, es definiert die minimale Zeichenfolgelänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Nutzer in das Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert kleiner oder gleich dem durch `maxlength` angegebenen Wert sein. Wenn keine `minlength` angegeben ist o

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Ebenfalls verfügbar sind die Methoden, die von den übergeordneten Schnittstellen [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) spezifiziert sind.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben und ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis am Element ausgelöst.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls wird `false` zurückgegeben, ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis am Element ausgelöst und (wenn das Ereignis nicht abgebrochen wird) das Problem dem Benutzer gemeldet.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder Kalendereingabe) bewirkt diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Nachricht fest, die angezeigt wird, wenn der Wert des Eingabeelements nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Legt den Inhalt des angegebenen Zeichenbereichs im Eingabeelement auf eine gegebene Zeichenfolge fest. Ein `selectMode`-Parameter ist verfügbar, um zu steuern, wie der bestehende Inhalt beeinflusst wird.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines Text-Eingabeelements aus. Macht nichts bei Eingaben, die nicht als Texteingabefelder präsentiert werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Auswahldialog für das Eingabeelement an, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber durch einen Knopfdruck oder eine andere Benutzerinteraktion ausgelöst wird.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer numerischen Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Eingaben, die ersetzte Elemente sind, haben einige Funktionen, die auf Nicht-Formularelemente nicht anwendbar sind. Es gibt CSS-Selektoren, die speziell Formularsteuerungen basierend auf ihren UI-Funktionen, auch bekannt als UI-Pseudoklassen, anvisieren können. Das `input`-Element kann auch nach Typ mit Attributselektoren anvisiert werden. Es gibt einige Eigenschaften, die ebenfalls besonders nützlich sind.

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
        Jedes momentan aktivierte Element, das aktiviert (ausgewählt, angeklickt, hineingeschrieben etc.) werden kann oder den Fokus akzeptieren kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder den Fokus akzeptieren kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes momentan deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es andernfalls aktiviert (ausgewählt, angeklickt, hineingeschrieben etc.) werden könnte oder den Fokus akzeptieren könnte, wenn es nicht deaktiviert wäre.
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
        Element, das momentan <a href="#placeholder"><code>Platzhalter</code>-Text</a> anzeigt,
        einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}}-Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die der Standard in einer Gruppe von verwandten Elementen sind.
        Passt zu den {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die
        beim Laden oder Rendern der Seite ausgewählt wurden.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Passt zu den {{HTMLElement("input/checkbox", "checkbox")}} und
        {{HTMLElement("input/radio", "radio")}} Eingabetypen, die
        momentan ausgewählt sind (und das {{HTMLElement("option")}} in einem
        {{HTMLElement("select")}}, das momentan ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente,
        deren indeterminate-Eigenschaft durch JavaScript auf true gesetzt wurde,
        {{HTMLElement("input/radio", "radio")}}-Elemente, wenn alle
        Radio-Buttons mit demselben Namenswert im Formular nicht ausgewählt sind, und
        {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, auf die Einschränkungsprüfungen angewendet werden können und die
        momentan gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, auf die Einschränkungsprüfungen angewendet werden und die
        momentan nicht gültig sind. Passt zu einem Formularelement, dessen Wert nicht den
        durch seine Attribute festgelegten Einschränkungen entspricht, wie
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a>-Attribute und den <a href="#step"><code>step</code></a> angegebenen Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a>
        und <a href="#max"><code>max</code></a>-Attribute angegebenen Bereichs liegt oder
        nicht der <a href="#step"><code>step</code></a>-Einschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
        Passt nur zu Elementen, die erforderlich sein können.
        Das Attribut auf einem nicht erforderlichen Element eingeschlossen, wird kein Treffer sein.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder
        {{HTMLElement("textarea")}} Element, das NICHT das <a href="#required"><code>required</code></a>-Attribut gesetzt hat.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlassen des Fokus aktiviert. Passt
        zu ungültigen Eingaben, jedoch nur nach der Benutzerinteraktion, etwa durch Fokussieren
        auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular
        mit dem ungültigen Steuerelement abzuschicken.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        <code>&lt;input&gt;</code>-Elemente, die ein Auswahlfeld anzeigen, aus dem der Benutzer einen Wert wählen kann (zum Beispiel <a href="/de/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — jedoch nur, wenn das Element im offenen Zustand ist, das heißt, wenn das Auswahlfeld angezeigt wird.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudoklassen-Beispiel

Wir können ein Kontrollkästchen-Label basierend darauf stylen, ob das Kontrollkästchen ausgewählt ist oder nicht. In diesem Beispiel stylen wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das direkt nach einer ausgewählten Eingabe folgt. Es wurden keine Stile angewendet, wenn das `input` nicht ausgewählt ist.

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

Es ist möglich, verschiedene Typen von Eingabesteuerelementen basierend auf ihrem [`type`](#type) unter Verwendung von [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) zu anvisieren. CSS-Attributselektoren passen Elemente an, basierend entweder nur auf der Anwesenheit eines Attributs oder dem Wert eines gegebenen Attributs.

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

Standardmäßig erscheint der Text des Platzhalters lichtdurchlässig oder hellgrau. Das {{cssxref('::placeholder')}}-Pseudo-Element ist der [`placeholder`-Text](#placeholder) der Eingabe. Es kann mit einem eingeschränkten Satz von CSS-Eigenschaften gestylt werden.

```css
::placeholder {
  color: blue;
}
```

Nur der Unterbereich von CSS-Eigenschaften, der auf das {{cssxref("::first-line")}}-Pseudo-Element angewendet werden kann, kann in einer Regel verwendet werden, die `::placeholder` in ihrem Selektor verwendet.

### caret-color

Eine Eigenschaft, die speziell auf texteingabe-bezogene Elemente zutrifft, ist die CSS-{{cssxref("caret-color")}}-Eigenschaft, die es erlaubt, die Farbe des Texteingabe-Cursors zu bestimmen:

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

Die {{cssxref("field-sizing")}}-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formulareingaben zu steuern (d.h. sie erhalten standardmäßig eine bevorzugte Größe). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, sodass sich Formsteuerungen in ihrer Größe anpassen können, um ihren Inhalt zu erfassen.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die sich entsprechend ihrem Inhalt verkleinern und mit mehr eingegebenem Text wachsen. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (zum Beispiel [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) und {{htmlelement("textarea")}} Elemente.

### object-position und object-fit

In bestimmten Fällen (normalerweise bei nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>`-Element ein [ersetztes Element](/de/docs/Glossary/Replaced_elements). Wenn es das ist, können die Position und Größe des Elements und seine Positionierung innerhalb seines Rahmens mit den CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML, siehe:

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color).

Siehe auch:

- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Stylings für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Zusätzliche Funktionen

### Labels

Labels sind notwendig, um erklärenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}}-Element bietet erläuternde Informationen über ein Eingabefeld, das _immer_ angemessen ist (abgesehen von eventuellen Layoutbedenken, die Sie haben könnten). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder ein {{HTMLElement("textarea")}} eingegeben werden sollte.

#### Zugehörige Labels

Die semantische Paarung von `<input>`- und `<label>`-Elementen ist nützlich für unterstützende Technologien wie Bildschirmleser. Indem Sie sie unter Verwendung des [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attributs des `<label>`-Elements koppeln, verbinden Sie das Label mit der Eingabe auf eine Weise, die es Bildschirmlesern ermöglicht, Eingaben genauer zu beschreiben.

Es reicht nicht aus, einfachen Text neben dem `<input>`-Element zu haben. Vielmehr erfordern Benutzerfreundlichkeit und Barrierefreiheit die Einbeziehung eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Das erste Beispiel ist unzugänglich: Es besteht keine Verbindung zwischen der Aufforderung und dem `<input>`-Element.

Zusätzlich zu einem zugänglichen Namen bietet das Label einen größeren 'Touchpoint' für Maus- und Touchscreen-Nutzer zum Klicken oder Berühren. Durch die Kopplung eines `<label>` mit einem `<input>` wird beim Klicken auf eines von beiden das `<input>` fokussiert. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu "benennen", geschieht dies nicht. Es ist hilfreich für Menschen mit motorischen Störungen, den Auftreffbereich der Eingabe als Teil des aktivierenden Bereichs zu haben.

Als Webentwickler ist es wichtig, dass wir nie annehmen, dass Menschen alle Dinge wissen, die wir wissen. Die Vielfalt der Menschen, die das Web nutzen – und damit Ihre Website – garantiert praktisch, dass einige Ihrer Website-Besucher einige Variationen im Denkprozess und/oder Umstände haben, die sie dazu führen, Ihre Formulare ohne klar und ordnungsgemäß präsentierte Labels sehr unterschiedlich zu interpretieren.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder)-Attribut ermöglicht es Ihnen, Text zu spezifizieren, der innerhalb des Inhaltsbereichs des `<input>`-Elements selbst angezeigt wird, wenn es leer ist. Der Platzhalter sollte niemals nötig sein, um Ihre Formulare zu verstehen. Er ist kein Label und sollte nicht als solches verwendet werden, weil er es nicht ist. Der Platzhalter wird verwendet, um einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, keine Erklärung oder Aufforderung.

Nicht nur ist der Platzhalter nicht für Bildschirmleser zugänglich, sondern sobald der Benutzer Text in das Formularelement eingibt oder das Formularelement bereits einen Wert hat, verschwindet der Platzhalter. Browser mit automatischen Seitenübersetzungsfunktionen umgehen möglicherweise Attribute beim Übersetzen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder)-Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>`-Element labeln müssen, verwenden Sie das {{HTMLElement("label")}}-Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format sein müssen, _überprüfen_ Sie es immer auch serverseitig und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Reference/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS zur Stilisierung von Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Zustand jeder Eingabe, wie oben im Abschnitt [UI-Pseudoklassen](#pseudoklassen-beispiel) erwähnt, bietet der Browser eine client-seitige Validierung bei (versuchtem) Formularversand an. Beim Formularversand, wenn ein Formularsteuerelement die Prüfung der Einschränkungen nicht besteht, zeigen unterstützende Browser eine Fehlermeldung beim ersten ungültigen Formularsteuerelement an; sie zeigen eine Standardnachricht basierend auf dem Fehlertyp oder eine von Ihnen festgelegte Nachricht an.

Einige Eingabetypen und andere Attribute setzen Einschränkungen auf, welche Werte für eine gegebene Eingabe gültig sind. Beispielsweise bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler könnten auftreten, einschließlich eines `rangeUnderflow`-Fehlers, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn der Wert größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Ganzzahl (entspricht nicht den Anforderungen des `step`-Attributs) oder `typeMismatch`, wenn der Wert keine Zahl ist.

Bei Eingabetypen, deren Bereich an möglichen Werten periodisch ist (d.h. am höchsten möglichen Wert wickeln sich die Werte zum Anfang zurück, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min)-Eigenschaften vertauscht werden, was angibt, dass der Bereich der erlaubten Werte bei `min` beginnt, sich bis zum niedrigsten möglichen Wert zurückwickelt und dann weitergeht, bis `max` erreicht wird. Dies ist insbesondere nützlich für Datums- und Zeitangaben, wie wenn Sie den Bereich von 20 Uhr bis 8 Uhr morgens erlauben möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und deren Werte können zu einem spezifischen Fehler im [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Validitätsfehlerobjekte hängen von den <code>&lt;input&gt;</code>
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
        Tritt auf, wenn der Wert größer ist als der maximale Wert, der durch
        das <code>max</code>-Attribut definiert ist
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die durch die <code>maxlength</code>-Eigenschaft zugelassene Anzahl
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner ist als der minimale Wert, der durch das <code>min</code>-Attribut definiert ist
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
        Tritt auf, wenn ein Musterattribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> ihm nicht entspricht.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code>-Attribut vorhanden ist, aber der Wert <code>null</code> ist oder ein Radio- oder Kontrollkästchen nicht ausgewählt ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert entspricht nicht dem Schrittinkrement. Standardmäßiges Inkrement ist <code>1</code>, daher sind nur ganze Zahlen auf <code>type="number"</code> ohne step zulässig. <code>step="any"</code> löst diesen Fehler nie aus.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, beispielsweise eine E-Mail, die kein <code>@</code> enthält, oder eine URL, die kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularsteuerelement nicht das `required`-Attribut hat, wird kein Wert oder eine leere Zeichenkette nicht als ungültig betrachtet. Selbst wenn die obigen Attribute vorhanden sind, mit Ausnahme von `required`, wird eine leere Zeichenkette nicht zu einem Fehler führen.

Wir können Grenzen für die Werte setzen, die wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer benachrichtigen, wenn ein Fehler bei der Einsendung des Formulars auftritt.

Zusätzlich zu den in der Tabelle oben beschriebenen Fehlern enthält das `validityState`-Interface die boolean-Leseeigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften bedeutet ein Wert von `true`, dass der angegebene Grund, warum die Validierung möglicherweise fehlgeschlagen ist, zutrifft, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

Wenn ein Fehler vorliegt, benachrichtigen unterstützende Browser den Benutzer und verhindern, dass das Formular eingereicht wird. Ein Wort der Vorsicht: Wenn eine benutzerdefinierte Fehlermeldung auf einen wahrheitsgemäßen Wert gesetzt wird (etwas anderes als eine leere Zeichenkette oder `null`), wird das Formular daran gehindert, eingereicht zu werden. Wenn keine benutzerdefinierte Fehlermeldung vorhanden ist und keine der anderen Eigenschaften `true` zurückgibt, wird `valid` `true` sein und das Formular kann eingereicht werden.

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

Die letzte Zeile, die die benutzerdefinierte Fehlermeldung auf eine leere Zeichenkette setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Gültigkeit gesetzt ist, wird das Formular auch dann nicht eingereicht, wenn alle Werte gültig sind, bis die Nachricht `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld die Validierung nicht besteht, müssen Sie die [Constraint Validation API](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) verwenden, die für `<input>`- (und verwandte) Elemente verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Formularvalidierungsfunktionen führen dazu, dass dies eine Standard-Fehlermeldung erzeugt, wenn Sie versuchen, das Formular mit entweder einem nicht gültigen Wert oder einem Wert, der nicht dem `pattern` entspricht, einzureichen.

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

Das Beispiel wird wie folgt gerendert:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert ändert, indem wir die `checkValidity()`-Methode über den `input`-Ereignishandler ausführen.
- Wenn der Wert ungültig ist, wird ein `invalid`-Ereignis ausgelöst, und die `invalid`-Ereignishandlerfunktion wird ausgeführt. Innerhalb dieser Funktion ermitteln wir, ob der Wert ungültig ist, weil er leer ist oder weil er dem Muster nicht entspricht, indem wir einen `if ()`-Block verwenden und eine benutzerdefinierte Fehlermeldung festlegen.
- Infolgedessen wird eine der benutzerdefinierten Fehlermeldungen angezeigt, wenn der Eingabewert ungültig ist, wenn die Senden-Taste gedrückt wird.
- Wenn der Wert gültig ist, wird er wie erwartet gesendet. Damit dies geschieht, muss die benutzerdefinierte Gültigkeit abgebrochen werden, indem `setCustomValidity()` mit einem leeren Zeichenkettenwert aufgerufen wird. Deshalb tun wir dies jedes Mal, wenn das `input`-Ereignis ausgelöst wird. Wenn Sie dies nicht tun und eine benutzerdefinierte Gültigkeit zuvor festgelegt wurde, wird die Eingabe als ungültig registriert, selbst wenn sie beim Absenden einen gültigen Wert enthält.

> [!NOTE]
> Überprüfen Sie immer Eingabebeschränkungen sowohl auf der Client- als auch auf der Serverseite. Einschränkungsvalidierung entfernt nicht die Notwendigkeit der Validierung auf der _Serverseite_. Ungültige Werte können immer noch von älteren Browsern oder von böswilligen Akteuren gesendet werden.

> [!NOTE]
> Firefox unterstützte für viele Versionen ein proprietäres Fehlerattribut — `x-moz-errormessage` —, das es erlaubte, benutzerdefinierte Fehlermeldungen in ähnlicher Weise festzulegen. Dies wurde in Version 66 entfernt (siehe [Firefox-Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>`-Typen hängen von der Gebietsschema ab. In einigen Gebietsschemas ist 1.000,00 eine gültige Nummer, während in anderen Gebietsschemas die gültige Art, diese Nummer einzugeben, 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um das Gebietsschema zur Validierung der Benutzereingabe zu bestimmen (mindestens für `type="number"`):

- Versuchen Sie, die Sprache zu verwenden, die durch ein `lang`/`xml:lang`-Attribut auf dem Element oder einem seiner Eltern angegeben ist.
- Versuchen Sie die Sprache, die durch einen `Content-Language`-HTTP-Header angegeben ist. Oder,
- Wenn keine angegeben ist, verwenden Sie das Browser-Gebietsschema.

## Barrierefreiheit

### Labels

Wenn Eingaben enthalten sind, ist es ein Barrierefreiheitsstandard, neben den Eingaben auch Labels hinzuzufügen. Dies ist erforderlich, damit Benutzer, die unterstützende Technologien verwenden, erkennen können, für was die Eingabe vorgesehen ist. Außerdem gibt das Klicken oder Berühren eines Labels dem damit verbundenen Steuerelement den Fokus. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehende Benutzer, erhöht den Bereich, auf den ein Benutzer klicken oder tippen kann, um das Steuerelement zu aktivieren. Dies ist besonders nützlich (und sogar nötig) für Radiobuttons und Kontrollkästchen, die winzig sind. Für weitere Informationen zu Labels im Allgemeinen siehe [Labels](#größe).

Das folgende Beispiel zeigt, wie das `<label>` mit einem `<input>`-Element in der oben angegebenen Weise verknüpft werden kann. Sie müssen dem `<input>` ein `id`-Attribut geben. Das `<label>` benötigt dann ein `for`-Attribut, dessen Wert mit der `id` des Eingabefeldes übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen ausreichend großen Bereich bieten, damit sie leicht aktiviert werden können. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Problemen und Menschen, die weniger präzise Eingabemethoden wie einen Eingabestift oder Finger verwenden. Eine Mindestgröße für interaktive Bereiche von 44×44 [CSS-Pixel](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

- [Erfolgskriterium 2.5.5: Zielgröße verstehen | W3C Erklärung zu WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>, aufgelistet, einreichbar, zurücksetzbar, form-assoziiertes Element,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">satz-assoziierter Inhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann ein label-Attachaer-Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>None; es ist ein [Leerelement](/de/docs/Glossary/void_element).</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">satz-assoziierte Inhalte</a> akzeptiert.
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
- [Die nativen Form-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Einschränkungsvalidierung von Formularen](/de/docs/Web/HTML/Guides/Constraint_validation)
- [HTML-Formulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
