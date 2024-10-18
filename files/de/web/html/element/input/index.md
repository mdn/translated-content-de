---
title: "<input>: Das HTML Input-Element"
slug: Web/HTML/Element/input
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

Das **`<input>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um interaktive Steuerelemente für webbasierte Formulare zu erstellen, um Daten von Benutzerinnen und Benutzern zu akzeptieren; eine große Vielfalt von Eingabedatentypen und Steuerungswidgets stehen zur Verfügung, abhängig vom Gerät und dem {{Glossary("user_agent", "User-Agent")}}. Das `<input>`-Element ist eines der leistungsstärksten und komplexesten in der gesamten HTML-Sprache aufgrund der Vielzahl von Kombinationen von Eingabetypen und Attributen.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## \<input> Typen

Die Funktionsweise eines `<input>` variiert erheblich, abhängig vom Wert seines [`type`](#type)-Attributs, daher werden die verschiedenen Typen auf eigenen Referenzseiten behandelt. Wenn dieses Attribut nicht angegeben ist, wird standardmäßig `text` angenommen.

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
        Ein Drückknopf ohne voreingestelltes Verhalten, der den Wert des <a href="#value"><code>value</code></a>-Attributs anzeigt, standardmäßig leer.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Eine Checkbox, die einzelne Werte zum Auswählen/Abwählen zulässt.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Ein Steuerungselement zur Farbauswahl; öffnet einen Farbpicker, wenn es in unterstützenden Browsern aktiv ist.
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
        Ein Steuerungselement zum Eingeben eines Datums (Jahr, Monat, und Tag, ohne Zeit).
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
        Ein Steuerungselement zum Eingeben eines Datums und einer Uhrzeit, ohne Zeitzone. Öffnet einen Datums- oder Zeitwähler mit numerischen Komponente, wenn sie in unterstützenden Browsern aktiv ist.
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
        <code>text</code> Eingabefeld, hat jedoch Validierungsparameter und relevante
        Tastaturunterstützung in unterstützenden Browsern und Geräten mit dynamischen Tastaturen.
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
        Ein Steuerungselement, das Benutzerinnen und Benutzer eine Datei auswählen lässt.
        Verwenden Sie das <a href="#accept"><code>accept</code></a>-Attribut, um die Dateitypen zu definieren, die das Steuerungselement auswählen kann.
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
        Ein grafischer <code>submit</code>-Button. Zeigt ein Bild an, das durch das <code>src</code>-Attribut definiert wird.
        Das <a href="#alt"><code>alt</code></a>-Attribut wird angezeigt, wenn das Bild <a href="#src"><code>src</code></a> fehlen sollte.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>Ein Steuerungselement zur Eingabe eines Monats und Jahres, ohne Zeitzone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Ein Steuerungselement zur Eingabe einer Zahl. Zeigt ein Spinner-Element an und fügt eine Standardvalidierung hinzu.
        Zeigt eine numerische Tastatur auf manchen Geräten mit dynamischen Tastaturen an.
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
        Ein einzeiliges Texteingabefeld, dessen Wert verschleiert wird.
        Warnt die Benutzerin oder den Benutzer, wenn die Seite nicht sicher ist.
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
        Ein Radio-Button, der es erlaubt, einen einzelnen Wert aus mehreren Möglichkeiten zu wählen, die denselben <a href="#name"><code>name</code></a>-Wert haben.
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
        Ein Steuerungselement zum Eingeben einer Zahl, deren genauer Wert nicht wichtig ist.
        Wird als Bereichs-Widget angezeigt, das standardmäßig im mittleren Bereich liegt.
        Wird in Verbindung mit <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> verwendet, um den Bereich der zulässigen Werte zu definieren.
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
        Ein Button, der die Inhalte des Formulars auf die Standardwerte zurücksetzt. Wird nicht empfohlen.
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
        Ein einzeiliges Texteingabefeld zum Eingeben von Suchbegriffen. Zeilenumbrüche werden
        automatisch aus dem Eingabewert entfernt. Möglicherweise enthält es ein Löschsymbol in
        unterstützenden Browsern, das verwendet werden kann, um das Feld zu leeren. Zeigt ein
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
        Ein Steuerungselement zur Eingabe einer Telefonnummer. Zeigt eine telefonnummernspezifische Tastatur
        auf manchen Geräten mit dynamischen Tastaturen an.
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
        Der Standardwert. Ein einzeiliges Texteingabefeld. Zeilenumbrüche werden
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
      <td>Ein Steuerungselement zur Eingabe einer Zeitangabe ohne Zeitzone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Ein Feld zur Eingabe einer URL. Sieht aus wie ein <code>text</code>-Eingabefeld, hat jedoch
        Validierungsparameter und relevante Tastaturunterstützung in unterstützenden Browsern
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
        Ein Steuerungselement zum Eingeben eines Datums bestehend aus einer Jahresnummer und einer Wochennummer ohne Zeitzone.
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
        Ein Steuerungselement zum Eingeben eines Datums und einer Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde) bezogen auf die UTC-Zeitzone.
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

Das `<input>`-Element ist so leistungsstark aufgrund seiner Attribute; das [`type`](#type)-Attribut, wie oben mit Beispielen beschrieben, ist das wichtigste. Da jedes `<input>`-Element, unabhängig vom Typ, auf dem [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interface basiert, teilen sie technisch gesehen den gleichen Satz von Attributen. In Wirklichkeit jedoch wirkt sich die Mehrheit der Attribute nur auf eine bestimmte Gruppe von Eingabetypen aus. Darüber hinaus hängt die Wirkung einiger Attribute auf ein `<input>`-Element vom Eingabetyp ab und kann sich auf unterschiedliche Eingabetypen unterschiedlich auswirken.

Dieser Abschnitt bietet eine Tabelle, die alle Attribute mit einer kurzen Beschreibung auflistet. Diese Tabelle wird gefolgt von einer Liste, die jedes Attribut detaillierter beschreibt, sowie mit welchen Eingabetypen sie assoziiert sind. Attribute, die den meisten oder allen Eingabetypen gemeinsam sind, werden weiter unten ausführlicher definiert. Attribute, die einzigartig für bestimmte Eingabetypen sind – oder Attribute, die für alle Eingabetypen allgemein sind, aber spezielle Verhaltensweisen haben, wenn sie auf einen bestimmten Eingabetyp angewendet werden – sind stattdessen auf den Seiten dieser Typen dokumentiert.

Attribute für das `<input>`-Element umfassen die [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes) und zusätzlich:

| Attribut                                      | Typ(en)                                                                      | Beschreibung                                                                                                                         |
| --------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [`accept`](#accept)                           | `file`                                                                       | Hinweis auf den erwarteten Dateityp in Dateiupload-Steuerelementen                                                                   |
| [`alt`](#alt)                                 | `image`                                                                      | `alt`-Attribut für den Bildtyp. Für Barrierefreiheit erforderlich                                                                    |
| [`autocapitalize`](#autocapitalize)           | alle außer `url`, `email` und `password`                                     | Steuert die automatische Großschreibung im eingegebenen Text.                                                                        |
| [`autocomplete`](#autocomplete)               | alle außer `checkbox`, `radio` und Schaltflächen                             | Hinweis auf die Autoausfüllfunktion von Formularen                                                                                   |
| [`capture`](#capture)                         | `file`                                                                       | Eingabemodus für Medienaufnahme in Dateiupload-Steuerelementen                                                                       |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                          | Ob der Befehl oder das Steuerelement ausgewählt ist                                                                                  |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                            | Name des Formularfeldes, das zur Übermittlung der Direktionalität des Elements bei der Formular-Submittierung verwendet wird         |
| [`disabled`](#disabled)                       | alle                                                                         | Ob das Formularelement deaktiviert ist                                                                                               |
| [`form`](#form)                               | alle                                                                         | Verknüpft das Steuerelement mit einem Formularelement                                                                                |
| [`formaction`](#formaction)                   | `image`, `submit`                                                            | URL für die Formularübermittlung                                                                                                     |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                            | Kodierungstyp des Formulardatensatzes zur Formularübermittlung                                                                       |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                            | HTTP-Methode für die Formularübermittlung                                                                                            |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                            | Umgeht die Validierung von Formularelementen für die Formularübermittlung                                                            |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                            | Browsing-Kontext für die Formularübermittlung                                                                                        |
| [`height`](#height)                           | `image`                                                                      | Gleich dem Höhenattribut für {{htmlelement('img')}}; vertikale Dimension                                                             |
| [`list`](#list)                               | alle außer `hidden`, `password`, `checkbox`, `radio` und Schaltflächen       | Wert des id-Attributs der {{htmlelement('datalist')}} von Autoausfüll-Optionen                                                       |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Maximaler Wert                                                                                                                       |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Maximale Länge (Anzahl der Zeichen) von `value`                                                                                      |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Minimaler Wert                                                                                                                       |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                          | Minimale Länge (Anzahl der Zeichen) von `value`                                                                                      |
| [`multiple`](#multiple)                       | `email`, `file`                                                              | Boolean. Ob mehrere Werte erlaubt sind                                                                                               |
| [`name`](#name)                               | alle                                                                         | Name des Formularelements. Wird mit dem Formular als Teil eines Name/Wert-Paares übermittelt                                         |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                          | Muster, das `value` entsprechen muss, um gültig zu sein                                                                              |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`                | Text, der im Formularelement angezeigt wird, wenn kein Wert gesetzt ist                                                              |
| [`popovertarget`](#popovertarget)             | `button`                                                                     | Bestimmt ein `<input type="button">` als Steuerung für ein Popover-Element                                                           |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                     | Gibt die Aktion an, die ein Popover-Steuerelement ausführen soll                                                                     |
| [`readonly`](#readonly)                       | alle außer `hidden`, `range`, `color`, `checkbox`, `radio` und Schaltflächen | Boolean. Der Wert ist nicht editierbar                                                                                               |
| [`required`](#required)                       | alle außer `hidden`, `range`, `color` und Schaltflächen                      | Boolean. Es ist erforderlich, dass ein Wert angegeben oder ein Kontrollkästchen aktiviert wird, damit das Formular übermittelbar ist |
| [`size`](#größe)                              | `text`, `search`, `url`, `tel`, `email`, `password`                          | Größe des Steuerelements                                                                                                             |
| [`src`](#src)                                 | `image`                                                                      | Gleich dem `src`-Attribut für {{htmlelement('img')}}; Adresse der Bildressource                                                      |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`         | Inkrementelle gültige Werte                                                                                                          |
| [`type`](#type)                               | alle                                                                         | Typ des Formularelements                                                                                                             |
| [`value`](#value)                             | alle außer `image`                                                           | Der Wert des Steuerelements. Wenn im HTML angegeben, entspricht dem Anfangswert                                                      |
| [`width`](#width)                             | `image`                                                                      | Gleich dem `width`-Attribut für {{htmlelement('img')}}                                                                               |

Einige zusätzliche nicht standardisierte Attribute sind aufgeführt, gefolgt von den Beschreibungen der standardisierten Attribute.

### Einzelne Attribute

- [`accept`](/de/docs/Web/HTML/Attributes/accept)

  - : Gültig nur für den `file`-Eingabetyp, definiert das `accept`-Attribut, welche Dateitypen in einem `file`-Upload-Steuerelement auswählbar sind. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.

- `alt`

  - : Gültig nur für den `image`-Button, bietet das `alt`-Attribut alternativen Text für das Bild, der den Wert des Attributs anzeigt, wenn das Bild [`src`](#src) fehlt oder nicht geladen werden kann. Siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Art und Weise. Weitere Informationen finden Sie auf der Seite des [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) globalen Attributs.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : (**Kein** Boolean-Attribut!) Das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut nimmt als Wert eine durch Leerzeichen getrennte Zeichenfolge an, die beschreibt, ob und welche Art von Autovervollständigungsfunktionalität das Eingabefeld bieten soll. Eine typische Implementierung von Autovervollständigung erinnert sich an zuvor eingegebene Werte im gleichen Eingabefeld, aber es können auch komplexere Formen der Autovervollständigung existieren. Zum Beispiel könnte ein Browser sich in die Kontaktliste eines Geräts integrieren, um E-Mail-Adressen in einem E-Mail-Eingabefeld zu autovervollständigen. Siehe [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete#values) für zulässige Werte.

    Das `autocomplete`-Attribut ist gültig bei `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` und `password`. Dieses Attribut hat keine Auswirkung auf Eingabetypen, die keine numerischen oder Textdaten zurückgeben, da alle Eingabetypen außer `checkbox`, `radio`, `file` oder irgendeine der Button-Typen.

    Siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für weitere Informationen, einschließlich Passwörter-Sicherheit und wie sich `autocomplete` bei `hidden` leicht von anderen Eingabetypen unterscheidet.

- `autofocus`

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass das Eingabefeld automatisch den Fokus erhalten soll, wenn die Seite vollständig geladen ist (oder wenn das {{HTMLElement("dialog")}} mit dem Element angezeigt wurde).

    > [!NOTE]
    > Ein Element mit dem `autofocus`-Attribut kann den Fokus erhalten, bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird.

    Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehr als einem Element gesetzt wird, erhält das erste mit dem Attribut den Fokus.

    Das `autofocus`-Attribut kann nicht bei Eingaben des Typs `hidden` verwendet werden, da versteckte Eingaben nicht fokussiert werden können.

    > [!WARNING]
    > Das automatische Fokussieren eines Formularelements kann Menschen mit Sehbehinderungen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihre Benutzerinnen und Benutzer ohne Vorwarnung zum Formularelement.

    Berücksichtigen Sie sorgfältig die Barrierefreiheit, wenn Sie das `autofocus`-Attribut anwenden. Das automatische Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser die Bezeichnung des Fokus empfangenden Formularelements ankündigt, wird der Bildschirmleser nichts vor der Bezeichnung ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird ebenfalls den Kontext durch den vorhergehenden Inhalt vermissen.

- [`capture`](/de/docs/Web/HTML/Attributes/capture)
  - : Eingeführt in der HTML Media Capture-Spezifikation und gültig nur für den `file`-Eingabetyp, definiert das `capture`-Attribut, welches Medium – Mikrofon, Video oder Kamera – verwendet werden soll, um eine neue Datei für den Upload mit dem `file`-Upload-Steuerelement in unterstützten Szenarien zu erfassen. Siehe den {{HTMLElement("input/file", "file")}} Eingabetyp.
- `checked`

  - : Gültig sowohl für `radio`- als auch `checkbox`-Typen, ist `checked` ein Boolean-Attribut. Wenn bei einem `radio`-Typ vorhanden, zeigt es an, dass der Radiobutton der momentan ausgewählte in der Gruppe gleichnamiger Radiobuttons ist. Wenn bei einem `checkbox`-Typ vorhanden, zeigt es an, dass die Checkbox standardmäßig (beim Laden der Seite) ausgewählt ist. Es gibt _nicht_ an, ob diese Checkbox aktuell ausgewählt ist: Wenn sich der Zustand der Checkbox ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider. (Nur das [`HTMLInputElement`'s `checked` IDL-Attribut](/de/docs/Web/API/HTMLInputElement) wird aktualisiert.)

    > [!NOTE]
    > Anders als bei anderen Eingabesteuerungen werden die Werte von Checkboxen und Radiobuttons nur in die übermittelten Daten aufgenommen, wenn sie derzeit `checked` sind. Wenn sie ausgewählt sind, werden der Name und die Wert(e) der ausgewählten Steuerelemente übermittelt.
    >
    > Wenn z.B. eine Checkbox mit dem Namen `fruit` den Wert `cherry` hat und die Checkbox ausgewählt ist, wird `fruit=cherry` in die Formulardaten aufgenommen. Wenn die Checkbox nicht aktiv ist, wird sie überhaupt nicht in den Formulardaten aufgeführt. Der Standardwert `value` für Checkboxen und Radiobuttons ist `on`.

- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)

  - : Gültig für `hidden`, `text`, `search`, `url`, `tel` und `email`-Eingabetypen, das `dirname`-Attribut ermöglicht die Übermittlung der Direktionalität des Elements. Wenn enthalten, wird das Formularelement mit zwei Name/Wert-Paaren übermittelt: Das erste ist das [`name`](#name) und [`value`](#value) Paar und das zweite ist der Wert des `dirname` Attributs als Name mit einem Wert von `ltr` oder `rtl`, der vom Browser gesetzt wird.

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

    Wenn das obige Formular übermittelt wird, führen die Eingaben zu beiden Paaren: `name` / `value` von `fruit=cherry` und `dirname` / direction von `fruit-dir=ltr`.
    Für weitere Informationen, siehe das [`dirname` Attribut](/de/docs/Web/HTML/Attributes/dirname).

- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass die Benutzerinnen und Benutzer nicht in der Lage sein sollten, mit der Eingabe zu interagieren. Deaktivierte Eingaben werden typischerweise in einer dunkleren Farbe gerendert oder auf andere Weise angezeigt, dass das Feld nicht verfügbar ist.

    Genauer gesagt, deaktivierte Eingaben erhalten nicht das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, und deaktivierte Eingaben werden nicht mit dem Formular übermittelt.

    > [!NOTE]
    > Auch wenn es nicht von der Spezifikation gefordert ist, wird Firefox standardmäßig den dynamischen deaktivierten Zustand eines `<input>` über Seitenladevorgänge hinweg [persistieren](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Verwenden Sie das [`autocomplete`](#autocomplete)-Attribut, um dieses Feature zu steuern.

- `form`

  - : Ein String, der das {{HTMLElement("form")}}-Element spezifiziert, mit dem die Eingabe verknüpft ist (d.h. sein **Formularbesitzer**). Der Wert dieses Strings, wenn vorhanden, muss dem [`id`](#id) eines `<form>`-Elements im selben Dokument entsprechen. Wenn dieses Attribut nicht angegeben ist, wird das `<input>`-Element mit dem nächstgelegenen umgebenden Formular verknüpft, falls vorhanden.

    Das `form`-Attribut ermöglicht es Ihnen, eine Eingabe überall im Dokument zu platzieren, sie jedoch mit einem Formular an einer anderen Stelle im Dokument einzubeziehen.

    > [!NOTE]
    > Eine Eingabe kann nur mit einem einzigen Formular verknüpft sein.

- `formaction`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formenctype`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formmethod`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formnovalidate`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `formtarget`
  - : Nur gültig für die `image` und `submit` Eingabetypen. Weitere Informationen finden Sie im {{HTMLElement("input/submit", "submit")}} Eingabetyp.
- `height`
  - : Gültig nur für den `image`-Button als Eingabetyp, definiert `height`, die Höhe der Bilddatei, die das grafische Absenden repräsentieren soll. Weitere Informationen siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.
- `id`
  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Der Zweck besteht darin, das Element beim Verlinken zu identifizieren. Der Wert wird als Wert des `for`-Attributs des {{htmlelement('label')}} verwendet, um das Label mit dem Formularelement zu verknüpfen. Weitere Informationen siehe {{htmlelement('label')}}.
- `inputmode`
  - : Globales Attribut, gültig für alle Elemente, bietet einen Hinweis für Browser in Bezug auf die Art der virtuellen Tastaturkonfiguration, wenn dieses Element oder dessen Inhalt bearbeitet wird. Mögliche Werte umfassen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` und `search`.
- `list`

  - : Der `list`-Wert sollte das [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument sein. Das `<datalist>` bietet eine Liste vordefinierter Werte, die der Benutzer für diese Eingabe vorschlagen kann. Werte in der Liste, die mit dem [`type`](#type) nicht kompatibel sind, werden bei den vorgeschlagenen Optionen nicht einbezogen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste wählen oder einen anderen Wert angeben.

    Es ist gültig bei `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` und `color`.

    Laut Spezifikationen wird das `list`-Attribut nicht von `hidden`, `password`, `checkbox`, `radio`, `file` oder irgendeine der Button-Typen unterstützt.

    Abhängig vom Browser kann die Benutzerin oder der Benutzer ein benutzerdefiniertes Farbpalette vorgeschlagen bekommen, Markierungen entlang eines Bereichs sehen oder sogar eine Eingabe, die sich wie ein {{HTMLElement("select")}} öffnet, aber nicht gelistete Werte erlaubt. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/HTML/Element/datalist#browser_compatibility) für die anderen Eingabetypen an.

    Weitere Informationen siehe das {{htmlelement('datalist')}} Element.

- [`max`](/de/docs/Web/HTML/Attributes/max)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es das größte Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) diesen überschreitet, schlägt die Elemente bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen maximalen Wert.

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (z.B. für Daten oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass der Bereich umhergeschlagen werden kann; zum Beispiel kann dies eine Zeitspanne von 22 Uhr bis 4 Uhr ermöglichen.

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die maximale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die die Benutzerin oder der Benutzer in das Feld eintragen kann. Dies muss ein Integer-Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben oder ein ungültiger Wert angegeben ist, hat das Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

    Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) bei der Eingabe nicht überschreiten, wenn die Länge des Textes im Feld `maxlength` UTF-16 Codeeinheiten überschreitet. Standardmäßig verhindern Browser, dass Benutzende mehr Zeichen eingeben als durch das `maxlength`-Attribut erlaubt. Einschränkungsvalidierung wird nur angewandt, wenn der Wert von der Benutzerin oder dem Benutzer selbst geändert wird. Weitere Informationen siehe [Client-seitige Validierung](#client-seitige_validierung).

- [`min`](/de/docs/Web/HTML/Attributes/min)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, definiert es den kleinsten Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](#value) weniger als dieser ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine Zahl ist, hat das Element keinen minimalen Wert.

    Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein. Wenn das `min`-Attribut vorhanden ist, aber nicht spezifiziert oder ungültig ist, wird kein `min`-Wert angewendet. Wenn das `min`-Attribut gültig ist und ein nichtleerer Wert kleiner als das Minimum ist, wird die Einschränkungsvalidierung die Übermittlung des Formulars verhindern. Weitere Informationen siehe [Client-seitige Validierung](#client-seitige_validierung).

    Es gibt einen Sonderfall: Wenn der Datentyp periodisch ist (z.B. für Daten oder Zeiten), kann der Wert von `max` niedriger als der Wert von `min` sein, was darauf hinweist, dass der Bereich umhergeschlagen werden kann; zum Beispiel kann dies eine Zeitspanne von 22 Uhr bis 4 Uhr ermöglichen.

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, definiert es die minimale Länge (in UTF-16 Codeeinheiten), die von Benutzer:innen in das Eingabefeld eingegeben werden kann. Dies muss eine nicht-negative ganze Zahl sein, die kleiner oder gleich dem durch `maxlength` spezifizierten Wert ist. Wenn keine `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat die Eingabe keine Mindestlänge.

    Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des Textes, der im Feld eingegeben wird, weniger als `minlength` UTF-16 Codeeinheiten lang ist, was die Übermittlung des Formulars verhindert. Einschränkungsvalidierung wird nur angewandt, wenn der Wert von Benutzer:innen geändert wird. Weitere Informationen siehe [Client-seitige Validierung](#client-seitige_validierung).

- [`multiple`](/de/docs/Web/HTML/Attributes/multiple)

  - : Das Boolean-Attribut `multiple` bedeutet, wenn es gesetzt ist, dass Benutzer:innen kommagetrennte E-Mail-Adressen im E-Mail-Widget eingeben oder mehr als eine Datei mit der `file`-Eingabe auswählen können. Weitere Informationen siehe die {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/file", "file")}} Eingabetypen.

- `name`

  - : Ein String, der einen Namen für das Eingabesteuerelement angibt. Dieser Name wird zusammen mit dem Wert des Steuerelements übermittelt, wenn die Formulardaten übermittelt werden.

    Betrachten Sie den `name` als erforderliches Attribut (auch wenn er es nicht ist). Wenn eine Eingabe keinen `name` hat oder `name` leer ist, wird der Wert der Eingabe nicht mit dem Formular übermittelt! (Deaktivierte Steuerelemente, nicht markierte Radio-Buttons, nicht markierte Checkboxen und Reset-Schaltflächen werden ebenfalls nicht gesendet.)

    Es gibt zwei Sonderfälle:

    1. `_charset_` : Wenn dieser Name als der einer `<input>`-Element des Typs {{HTMLElement("input/hidden", "hidden")}} verwendet wird, wird der `value` des Eingabefelds automatisch durch den {{Glossary("user_agent", "User-Agent")}} auf die zum Übermitteln des Formulars verwendeten Zeichencodierung gesetzt.
    2. `isindex`: Aus historischen Gründen ist der Name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) nicht erlaubt.

    Das [`name`](#name) Attribut erzeugt ein einzigartiges Verhalten für Radio-Buttons.

    In einer gleichnamigen Gruppe von Radio-Buttons kann nur ein Radio-Button gleichzeitig markiert werden. Das Auswählen eines beliebigen Radio-Buttons in dieser Gruppe hebt automatisch jeden derzeit ausgewählten Radio-Button in derselben Gruppe auf. Der Wert dieses einen markierten Radio-Buttons wird zusammen mit dem Namen gesendet, wenn das Formular übermittelt wird,

    Beim Tabben in eine Serie gleichnamiger Gruppen von Radio-Buttons, wenn einer markiert ist, erhält dieser den Fokus. Wenn sie nicht gruppiert in der Quellenreihenfolge stehen, startet das Tabben in der Gruppe, wenn der erste Button in der Gruppe gefunden wird, und überspringt alle, die nicht markiert sind. Mit anderen Worten, wenn einer markiert ist, überspringt das Tabben die nicht markierten Radio-Buttons in der Gruppe. Wenn keiner markiert ist, erhält die Radio-Button-Gruppe den Fokus, sobald der erste Button in der gleichnamigen Gruppe erreicht ist.

    Sobald einer der Radio-Buttons in einer Gruppe den Fokus hat, navigiert die Verwendung der Pfeiltasten durch alle Radio-Buttons desselben Namens, auch wenn die Radio-Buttons nicht zusammen in der Quellenreihenfolge gruppiert sind.

    Wenn ein Eingabeelement einen `name` erhält, wird dieser Name zu einer Eigenschaft des Eigentümerformular-Elements [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) Eigenschaft. Wenn Sie beispielsweise eine Eingabe mit `name` `guest` und eine andere mit `name` `hat-size` haben, kann der folgende Code verwendet werden:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Nachdem dieser Code ausgeführt wurde, ist `guestName` das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) für das `guest`-Feld, und `hatSize` das Objekt für das `hat-size`-Feld.

    > [!WARNING]
    > Vermeiden Sie es, Formularelementen einen `name` zu geben, der mit einer integrierten Eigenschaft des Formulars übereinstimmt, da Sie dadurch die vorgegebene Eigenschaft oder Methode mit diesem Verweis auf das entsprechende Eingabefeld überschreiben würden.

- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)

  - : Gültig für `text`, `search`, `url`, `tel`, `email` und `password`, wird das `pattern`-Attribut verwendet, um einen regulären Ausdruck zu kompilieren, dem der [`value`](#value) der Eingabe entsprechen muss, damit er die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Er muss ein gültiger regulärer Ausdruck in JavaScript sein, wie er von dem {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert. Keine Schrägstriche sollten um den Mustertext angegeben werden. Bei der Kompilierung des regulären Ausdrucks:

    1. wird das Muster implizit mit `^(?:` und `)$` umwickelt, damit der Abgleich mit dem _ganzen_ Eingabewert erforderlich ist, d.h., `^(?:<pattern>)$`.
    2. wird das `'v'` Flag angegeben, damit das Muster als eine Sequenz von Unicode-Zeichen verstanden wird, statt als {{Glossary("ASCII", "ASCII")}}.

    Wenn das `pattern`-Attribut vorhanden ist, aber nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut völlig ignoriert. Wenn das pattern-Attribut gültig ist und ein nicht leerer Wert nicht dem Pattern entspricht, wird die Einschränkungsvalidierung die Übermittlung des Formulars verhindern. Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut vorhanden ist, wird der kompilierte reguläre Ausdruck mit jedem kommagetrennten Wert abgeglichen.

    > [!NOTE]
    > Beim Verwenden des `pattern`-Attributs informieren Sie die Benutzer:innen über das erwartete Format durch die Einbeziehung erklärenden Textes in der Nähe. Sie können auch ein [`title`](#title)-Attribut aufnehmen, um zu erklären, welche Anforderungen für das Muster erfüllt werden müssen; die meisten Browser zeigen dieses Titelattribut als Tooltip an. Die sichtbare Erklärung ist für die Barrierefreiheit erforderlich. Der Tooltip ist eine Verbesserung.

    Weitere Informationen siehe [Client-seitige Validierung](#client-seitige_validierung).

- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Gültig für `text`, `search`, `url`, `tel`, `email`, `password` und `number`, bietet das `placeholder`-Attribut einen kurzen Hinweis für die Benutzer:innen auf die Art der erwarteten Information im Feld. Es sollte ein Wort oder ein kurzer Satz sein, der einen Hinweis auf den erwarteten Datentyp gibt, anstatt einer Erklärung oder Aufforderung. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten. Wenn beispielsweise ein Feld den Vornamen einer Benutzerin oder eines Benutzers erfassen soll und sein Label "Vorname" lautet, könnte ein geeigneter Platzhalter "z.B. Mustafa" lauten.

    > [!NOTE]
    > Das `placeholder`-Attribut ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen siehe [Etiketten](#labels).

- `popovertarget`

  - : Wandelt ein `<input type="button">`-Element in eine Popover-Steuerung um; nimmt die ID des zu steuernden Popover-Elements als seinen Wert. Weitere Details siehe die [Popover API](/de/docs/Web/API/Popover_API) Übersichtsseite.

- `popovertargetaction`

  - : Gibt die Aktion an, die bei einem durch eine Steuerung `<input type="button">` gesteuerten Popover-Element durchgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Der Button versteckt ein angezeigtes Popover. Wenn versucht wird, ein bereits verstecktes Popover zu verstecken, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn versucht wird, ein bereits angezeigtes Popover zu zeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button schaltet ein Popover zwischen dem Anzeigen und verstecken um. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `toggle` die Standardaktion, die von der Steuerungsschaltfläche durchgeführt wird.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)

  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass Benutzer:innen den Wert der Eingabe nicht ändern können sollen. Das `readonly`-Attribut wird von den Eingabetypen `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` und `password` unterstützt.

    Weitere Informationen finden Sie im [HTML-Attribut: `readonly`](/de/docs/Web/HTML/Attributes/readonly).

- [`required`](/de/docs/Web/HTML/Attributes/required)

  - : `required` ist ein Boolean-Attribut, das, wenn vorhanden, angibt, dass die Benutzer:innen einen Wert für die Eingabe angeben müssen, bevor das Formular übermittelt werden kann. Das `required`-Attribut wird von den Eingaben `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` und `file` unterstützt.

    Weitere Informationen siehe [Client-seitige Validierung](#client-seitige_validierung) und das [HTML-Attribut: `required`](/de/docs/Web/HTML/Attributes/required).

- [`size`](/de/docs/Web/HTML/Attributes/size)

  - : Gültig für die Eingaben `email`, `password`, `tel`, `url` und `text`, gibt das `size`-Attribut an, wie viel von der Eingabe angezeigt wird. Im Grunde erzeugt sich das gleiche Ergebnis wie beim Setzen der CSS [`width`](/de/docs/Web/CSS/width)-Eigenschaft mit wenigen Besonderheiten. Die tatsächliche Einheit des Wertes hängt vom Eingabetyp ab. Für `password` und `text` ist es eine Anzahl von Zeichen (oder `em` Einheiten) mit einem Standardwert von `20`, und für andere sind es Pixel (oder `px` Einheiten). CSS `width` hat Vorrang vor dem `size`-Attribut.

- `src`

  - : Gültig nur für die `image` Eingabeschaltfläche, ist `src` ein String, der die URL der Bilddatei angibt, die angezeigt werden soll, um die grafische Absendschaltfläche zu repräsentieren. Weitere Informationen siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

- [`step`](/de/docs/Web/HTML/Attributes/step)

  - : Gültig für `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`, ist das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut eine Zahl, die die Granularität angibt, der der Wert entsprechen muss.

    Wenn nicht ausdrücklich enthalten:

    - `step` hat einen Standardwert von 1 für `number` und `range`.
    - Jeder Datums-/Uhrzeit-Eingabetyp hat einen Standardwert für `step`, der zu dem Typ passt; siehe die einzelnen Eingabeseiten: [`date`](/de/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/de/docs/Web/HTML/Element/input/month#step), [`time`](/de/docs/Web/HTML/Element/input/time#step) und [`week`](/de/docs/Web/HTML/Element/input/week#step).

    Der Wert muss eine positive Zahl sein – Ganzzahl oder Gleitkommazahl – oder der spezielle Wert `any`, was bedeutet, dass keine Schrittweise festgelegt ist, und jeder Wert erlaubt ist (abgesehen von anderen Beschränkungen, wie [`min`](#min) und [`max`](#max)).

    Wenn `any` nicht ausdrücklich gesetzt ist, sind gültige Werte für die Eingabetypen `number`, Datum/Zeit und `range` gleich dem Grund für Schrittweise – dem [`min`](#min) Wert und Schritten des Schrittwerts bis zum [`max`](#max) Wert, wenn angegeben.

    Wenn Sie beispielsweise `<input type="number" min="10" step="2">` haben, dann ist jede gerade Ganzzahl, `10` oder größer, gültig. Wenn weggelassen wird, `<input type="number">`, ist jede Ganzzahl gültig, aber Gleitkommazahlen (wie `4.2`) sind ungültig, da `step` standardmäßig `1` ist. Damit `4.2` gültig ist, müsste `step` auf `any`, 0.1, 0.2, oder der `min`-Wert auf eine Zahl endend in `.2`, wie `<input type="number" min="-5.2">` gesetzt werden.

    > [!NOTE]
    > Wenn die von Benutzer:innen eingegebenen Daten nicht den sequentiellen Anforderungen entsprechen, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und entspricht der `:invalid`-Pseudoklasse.

    Weitere Informationen siehe [Client-seitige Validierung](#client-seitige_validierung).

- `tabindex`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, ein Integer-Attribut, das angibt, ob das Element den Eingabefokus übernehmen kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen sollte. Da alle Eingabetypen außer Input vom Typ hidden fokussierbar sind, sollte dieses Attribut nicht auf Formularelementen angewendet werden, da dies die Verwaltung der Fokusreihenfolge für alle Elemente innerhalb des Dokuments erfordert und das Risiko birgt, die Benutzbarkeit und Barrierefreiheit zu beeinträchtigen, wenn es nicht korrekt angewendet wird.

- `title`

  - : Globales Attribut, gültig für alle Elemente, einschließlich aller Eingabetypen, das einen Text enthält, der advisory Informationen im Zusammenhang mit dem Element, zu dem es gehört, darstellt. Solche Informationen können typischerweise, aber nicht notwendigerweise, der Benutzerin oder dem Benutzer als Tooltip angezeigt werden. Der Titel sollte NICHT als die primäre Erklärung des Zwecks des Formularelements verwendet werden. Verwenden Sie stattdessen das {{htmlelement('label')}}-Element mit einem `for`-Attribut, das auf das [`id`](#id)-Attribut des Formularelements gesetzt ist. Weitere Informationen siehe [Etiketten](#labels) unten.

- `type`

  - : Ein String, der den Typ des Steuerelements angibt, das gerendert werden soll. Um zum Beispiel ein Kontrollkästchen zu erstellen, wird ein Wert von `checkbox` verwendet. Wenn weggelassen (oder ein unbekannter Wert angegeben wird), wird der Eingabetyp `text` verwendet, wodurch ein einfaches Text-Eingabefeld erstellt wird.

    Zulässige Werte sind in [Eingabetypen](#Eingabe_typen) oben aufgeführt.

- `value`

  - : Der Wert des Eingabesteuerelements. Wenn im HTML angegeben, ist dies der Anfangswert; und von da an kann er jederzeit mit JavaScript geändert oder abgerufen werden, um auf die `value`-Eigenschaft des entsprechenden [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekts zuzugreifen. Das `value`-Attribut ist immer optional, sollte jedoch als obligatorisch für `checkbox`, `radio` und `hidden` betrachtet werden.

- `width`

  - : Gültig nur für die `image` Eingabeschaltfläche, ist `width` die Breite der Bilddatei, die repräsentiert werden soll, um die grafische Absendschaltfläche darzustellen. Weitere Informationen siehe den {{HTMLElement("input/image", "image")}} Eingabetyp.

### Nicht standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind in einigen Browsern auch verfügbar. Grundsätzlich sollten Sie ihre Verwendung vermeiden, es sei denn, es ist unvermeidbar.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#autocorrect"><code>autocorrect</code></a></td>
      <td>
        Ein String, der anzeigt, ob Autokorrektur <code>on</code> oder <code>off</code> ist. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#incremental"><code>incremental</code></a></td>
      <td>
        Ob oder nicht wiederholte [`search`](/de/docs/Web/API/HTMLInputElement/search_event)
        Ereignisse gesendet werden, um die Aktualisierung der Live-Suchergebnisse zu ermöglichen, während der Benutzer oder die Benutzerin den Wert des Feldes noch bearbeitet.
        <strong>Nur WebKit und Blink (Safari, Chrome, Opera, usw.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Ein String, der die Art der Aktion angibt, die unternommen wird, wenn der Benutzer oder die Benutzerin die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste drückt, während das Feld bearbeitet wird; wird verwendet, um ein geeignetes Label für diese Taste auf einer virtuellen Tastatur zu bestimmen. <strong>Da dieses Attribut veraltet ist, verwenden Sie stattdessen <a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a>.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Legt die Ausrichtung des Bereichs-Schiebereglers fest. <strong>Nur Firefox.</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        Die maximale Anzahl von Elementen, die in der Dropdown-Liste vorheriger Suchanfragen angezeigt werden sollen. <strong>Nur Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Ein Boolean, das angibt, ob der Benutzer oder die Benutzerin nur ein Verzeichnis auswählen darf (oder mehrere Verzeichnisse, wenn <a href="#multiple"><code>multiple</code></a> ebenfalls vorhanden ist).
      </td>
    </tr>
  </tbody>
</table>

- `autocorrect` {{non-standard_inline}}

  - : (Nur Safari). Ein String, der angibt, ob automatische Korrekturen aktiviert werden sollen, während die Benutzerinnen oder Benutzer dieses Feld bearbeiten. Zulässige Werte sind:

    - `on`
      - : Aktiviert die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textsubstitutionen, falls vorhanden.
    - `off`
      - : Deaktiviert die automatische Korrektur und Textsubstitutionen.

- `incremental` {{non-standard_inline}}

  - : Das Boolean-Attribut `incremental` ist eine Erweiterung von WebKit und Blink (wird also von Safari, Opera, Chrome, usw. unterstützt), das, wenn vorhanden, dem {{Glossary("user_agent", "User-Agent")}} vorgibt, die Eingabe als eine Live-Suche zu verarbeiten. Wenn Benutzerinnen und Benutzer den Wert des Felds bearbeiten, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während Benutzerinnen und Benutzer die Suche bearbeiten.

    Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn die Benutzer die Suche explizit initiieren (z.B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

    Das `search`-Ereignis ist ratengesteuert, sodass es nicht häufiger als in einem implementationsdefinierten Intervall gesendet wird.

- `orient` {{non-standard_inline}}

  - : Ähnlich zur nicht standardisierten `-moz-orient` CSS-Eigenschaft, die sich auf die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente auswirkt, definiert das `orient` Attribut die Ausrichtung des Bereichs-Schiebereglers. Zu den Werten gehören `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wenn der Bereich vertikal gerendert wird. Nähere Informationen siehe das moderne Vorgehen beim Erstellen vertikaler Formularelemente im [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls).

- `results` {{non-standard_inline}}

  - : Das `results`-Attribut – wird nur von Safari unterstützt – ist ein numerischer Wert, welcher es Ihnen ermöglicht, die maximale Anzahl von Einträgen außer Kraft zu setzen, die im nativ bereitgestellten Dropdown-Menü vorheriger Suchanfragen des `<input>`-Elements angezeigt werden sollen.

    Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert, wird die Standardmaximalzahl von Einträgen des Browsers verwendet.

- `webkitdirectory` {{non-standard_inline}}

  - : Das Boolean `webkitdirectory`-Attribut, wenn vorhanden, gibt an, dass nur Verzeichnisse verfügbar sein sollten, die von Benutzerinnen und Benutzern im Dateiauswahl-Interface ausgewählt werden können. Mehr Details und Beispiele siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

    Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und später verwendbar. Trotz seiner relativ breiten Unterstützung ist es immer noch nicht standardisiert und sollte nicht verwendet werden, wenn Sie eine Alternative haben.

## Methoden

Die folgenden Methoden werden von der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle bereitgestellt, die `<input>`-Elemente im DOM darstellt. Verfügbar sind auch die von den Elternschnittstellen, [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) spezifizierten Methoden.

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück und löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis bei dem Element aus.
- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements die Gültigkeitsprüfungen besteht; andernfalls gibt es `false` zurück, löst ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis aus und weist das Problem den Benutzerinnen und Benutzern an.
- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Inhalt des `<input>`-Elements aus, wenn der Inhalt des Elements auswählbar ist. Für Elemente ohne auswählbaren Textinhalt (wie ein visueller Farbwähler oder ein Kalender-Datumsfeld) tut diese Methode nichts.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Meldung fest, die angezeigt wird, wenn der Wert des Eingabefelds nicht gültig ist.
- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Setzt den Inhalt des angegebenen Zeichenbereichs im Eingabefeld auf einen gegebenen String. Ein Parameter `selectMode` ist verfügbar, um die Steuerung darüber zu erlauben, wie der bestehende Inhalt betroffen ist.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt den angegebenen Zeichenbereich innerhalb eines textuellen Eingabefelds aus. Tut nichts für Eingaben, die nicht als Texteingabefelder dargestellt werden.
- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt den Browser-Picker für das Eingabefeld an, das normalerweise angezeigt würde, wenn das Element ausgewählt wird, aber ausgelöst durch einen Tastendruck oder eine andere Benutzerinteraktion.
- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert standardmäßig den Wert einer Zahlen-Eingabe um einen, oder um die angegebene Anzahl von Einheiten.
- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den Wert einer Zahlen-Eingabe um eins oder um die angegebene Anzahl von Einheiten.

## CSS

Die Eingaben, als ersetzte Elemente, haben einige Merkmale, die nicht auf nicht-Formularelemente zutreffen. Es gibt CSS-Selektoren, die speziell auf Formularelemente basierend auf ihren Benutzeroberflächenmerkmalen abzielen können, auch bekannt als UI-Pseudoklassen. Das Eingabeelement kann auch durch seinen Typ mit Attributselektoren anvisiert werden. Es gibt einige Eigenschaften, die besonders nützlich sind.

### UI-Pseudoklassen

<table class="no-markdown">
  <caption>
    Bildunterschriften, die für das
    <code>&#x3C;input></code>
    Element besonders relevant sind:
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
        Jedes derzeit aktivierte Element, das aktiviert werden kann (ausgewählt, angeklickt, hineingetippt, etc.) oder den Fokus akzeptieren kann und auch einen deaktivierten Zustand hat, in dem es nicht aktiviert oder fokussiert werden kann.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Jedes derzeit deaktivierte Element, das einen aktivierten Zustand hat, was bedeutet, dass es ansonsten aktiviert werden könnte (ausgewählt, angeklickt, hineingetippt, etc.) oder den Fokus akzeptieren könnte, wäre es nicht deaktiviert.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element vom Benutzer nicht bearbeitbar</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element, das vom Benutzer bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element, das derzeit <a href="#placeholder"><code>placeholder</code> Text</a> anzeigt, einschließlich <code>&#x3C;input></code> und {{HTMLElement("textarea")}} Elemente mit dem <a href="#placeholder"><code>placeholder</code></a>-Attribut, das noch keinen Wert hat.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Formularelemente, die der Standard in einer Gruppe verwandter Elemente sind. Entspricht {{HTMLElement("input/checkbox", "checkbox")}}- und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die beim Laden oder Rendern der Seite markiert waren.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Entspricht {{HTMLElement("input/checkbox", "checkbox")}}- und {{HTMLElement("input/radio", "radio")}}-Eingabetypen, die derzeit markiert sind (und der ({{HTMLElement("option")}} in einem {{HTMLElement("select")}}, der derzeit ausgewählt ist).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} Elemente, deren indeterminate Eigenschaft durch JavaScript auf true gesetzt ist, {{HTMLElement("input/radio", "radio")}} Elemente, wenn alle Radiobuttons mit dem gleichen Namen im Formular nicht markiert sind, und {{HTMLElement("progress")}} Elemente in einem unbestimmten Zustand.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Formularelemente, die eine Einschränkungsvalidierung anwenden können und derzeit gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Formularelemente, die eine Einschränkungsvalidierung anwenden und derzeit nicht gültig sind. Entspricht einem Formularelement, dessen Wert nicht den durch seine Attribute festgelegten Einschränkungen entspricht, wie etwa <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a> und <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert innerhalb der durch die <a href="#min"><code>min</code></a>- und <a href="#max"><code>max</code></a>-Attribute und den <a href="#step"><code>step</code></a> festgelegten Bereichsgrenzen liegt.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Eine nicht-leere Eingabe, deren aktueller Wert NICHT innerhalb der durch die <a href="#min"><code>min</code></a> und <a href="#max"><code>max</code></a> Attribute festgelegten Bereichsgrenzen liegt oder nicht der <a href="#step"><code>step</code></a>-Einschränkung entspricht.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das <a href="#required"><code>required</code></a> Attribut gesetzt hat. Entspricht nur Elementen, die erforderlich sein können. Das Attribut, das auf einem nicht erforderlichen Element enthalten ist, führt nicht zu einer Übereinstimmung.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das NICHT das <a href="#required"><code>required</code></a> Attribut gesetzt hat. Entspricht nicht Elementen, die nicht erforderlich sein können.
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
        Ähnlich wie <code>:invalid</code>, wird jedoch beim Verlassen aktiviert. Entspricht ungültigen Eingaben, jedoch nur nach einer Benutzerinteraktion, wie durch Fokussieren auf das Steuerelement, Verlassen des Steuerelements oder Versuch, das Formular mit dem ungültigen Steuerelement zu übermitteln.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiel für Pseudoklassen

Wir können ein Beschriftungsfeld eines Kontrollkästchens basierend darauf gestalten, ob das Kontrollkästchen markiert ist oder nicht. In diesem Beispiel gestalten wir die {{cssxref('color')}} und {{cssxref('font-weight')}} des {{htmlelement('label')}}, das direkt nach einem markierten Eingabefeld kommt. Wir haben keine Stile angewendet, wenn das `input` nicht markiert ist.

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

Es ist möglich, verschiedene Arten von Formularsteuerelementen basierend auf ihrem [`type`](#type) mithilfe von [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) anzusprechen. CSS-Attributselektoren stimmen mit Elementen basierend entweder nur auf das Vorhandensein eines Attributs oder den Wert eines bestimmten Attributs überein.

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

Standardmäßig erscheint der Platzhaltertext halbtransparent oder in hellem Grau. Das {{cssxref('::placeholder')}} Pseudoelement ist der [`placeholder` Text](#placeholder) der Eingabe. Es kann mit einer begrenzten Untermenge von CSS-Eigenschaften gestaltet werden.

```css
::placeholder {
  color: blue;
}
```

Nur die Untermenge von CSS-Eigenschaften, die auf das {{cssxref("::first-line")}} Pseudoelement anwendbar sind, kann in einer Regel verwendet werden, die `::placeholder` in seinem Selektor verwendet.

### appearance

Die {{cssxref("appearance")}} Eigenschaft ermöglicht das Anzeigen (fast) jedes Elements im plattformeigenen Stil basierend auf dem Thema des Betriebssystems sowie das Entfernen jeglicher plattformeigener Gestaltung mit dem `none` Wert.

Sie könnten ein `<div>` wie einen Radiobutton aussehen lassen mit `div {appearance: radio;}` oder ein Radio wie ein Kontrollkästchen mit `[type="radio"] {appearance: checkbox;}`, tun Sie es jedoch nicht.

Das Setzen von `appearance: none` entfernt plattformeigene Rahmen, nicht jedoch die Funktionalität.

### caret-color

Eine Eigenschaft, die spezifisch für textbezogene Eingabeelemente ist, ist die CSS {{cssxref("caret-color")}} Eigenschaft, die es Ihnen ermöglicht, die Farbe festzulegen, die zum Zeichnen der Texteinfügemarke verwendet wird:

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

Die {{cssxref("field-sizing")}} Eigenschaft ermöglicht es Ihnen, das Größeverhalten von Formulareingaben zu steuern (d.h. sie haben standardmäßig eine bevorzugte Standardgröße). Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten zu überschreiben, sodass Formularelemente ihre Größe an ihre Inhalte anpassen können.

Diese Eigenschaft wird typischerweise verwendet, um Formularfelder zu erstellen, die zu ihrem Inhalt passen und wachsen, je mehr Text eingegeben wird. Dies funktioniert mit Eingabetypen, die direkte Texteingabe akzeptieren (z. B. [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url)), Eingabetyp [`file`](/de/docs/Web/HTML/Element/input/file) und {{htmlelement("textarea")}} Elemente.

### object-position und object-fit

In bestimmten Fällen (typischerweise bei nicht-textuellen Eingaben und spezialisierten Schnittstellen) ist das `<input>` Element ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element). Wenn es der Fall ist, können die Position und Größe des Elements innerhalb seines Rahmens durch die CSS-Eigenschaften {{cssxref("object-position")}} und {{cssxref("object-fit")}} angepasst werden.

### Styling

Für weitere Informationen zum Hinzufügen von Farbe zu Elementen in HTML, siehe:

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color).

Siehe auch:

- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling) und
- die [Kompatibilitätstabelle der CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls).

## Zusätzliche Funktionen

### Labels

Labels sind erforderlich, um unterstützenden Text mit einem `<input>` zu verknüpfen. Das {{HTMLElement("label")}} Element bietet erklärende Informationen zu einem Formularfeld, die _immer_ angemessen sind (abgesehen von Layout-Bedenken, die Sie haben könnten). Es ist nie eine schlechte Idee, ein `<label>` zu verwenden, um zu erklären, was in ein `<input>` oder {{HTMLElement("textarea")}} eingegeben werden soll.

#### Zugeordnete Labels

Die semantische Zuordnung von `<input>` und `<label>` Elementen ist für assistive Technologien wie Screenreader nützlich. Indem Sie sie mithilfe des [`for`](/de/docs/Web/HTML/Element/label#for)-Attributs des `<label>` koppeln, verbinden Sie das Label mit der Eingabe in einer Weise, die es Screenreadern ermöglicht, Eingaben den Nutzern genauer zu beschreiben.

Es reicht nicht aus, einfachen Text neben dem `<input>` Element zu haben. Vielmehr erfordert die Benutzerfreundlichkeit und Zugänglichkeit die Einbeziehung eines impliziten oder expliziten {{HTMLElement("label")}}:

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

Zusätzlich zu einem zugänglichen Namen bietet das Label eine größere Klickfläche für Maus- und Touchscreen-Nutzer. Durch das Koppeln eines `<label>` mit einem `<input>` wird beim Klicken auf eines von beiden der `<input>` fokussiert. Wenn Sie einfachen Text verwenden, um Ihre Eingabe zu "beschriften", passiert dies nicht. Die Eingabeaufforderung zum Aktivierungsbereich zu machen, ist hilfreich für Menschen mit motorischen Beeinträchtigungen.

Als Webentwickler ist es wichtig, niemals davon auszugehen, dass Menschen alles wissen, was wir wissen. Die Vielfalt der Menschen, die das Internet nutzen—und damit auch Ihre Website—garantiert praktisch, dass einige Besucher Ihrer Website einige Unterschiede in den Denkprozessen und/oder Umständen haben, die sie dazu führen, Ihre Formulare sehr unterschiedlich auszulegen, ohne klare und richtig präsentierte Labels.

#### Platzhalter sind nicht zugänglich

Das [`placeholder`](#placeholder) Attribut lässt Sie Text angeben, der im Inhaltsbereich des `<input>` Elements selbst erscheint, wenn er leer ist. Der Platzhalter sollte niemals erforderlich sein, um Ihre Formulare zu verstehen. Es ist kein Label und sollte nicht als Ersatz verwendet werden, weil es das nicht ist. Der Platzhalter dient dazu, einen Hinweis darauf zu geben, wie ein eingegebener Wert aussehen sollte, nicht eine Erklärung oder Aufforderung.

Nicht nur ist der Platzhalter für Screenreader nicht zugänglich, sondern der Platzhalter verschwindet auch, sobald der Benutzer Text in das Formularfeld eingibt oder wenn das Formularfeld bereits einen Wert hat. Browser mit automatischen Funktionalitäten zur Übersetzung von Webseiten könnten Attribute beim Übersetzen überspringen, was bedeutet, dass der `placeholder` möglicherweise nicht übersetzt wird.

> [!NOTE]
> Verwenden Sie das [`placeholder`](#placeholder) Attribut nicht, wenn Sie es vermeiden können. Wenn Sie ein `<input>` Element beschriften müssen, verwenden Sie das {{HTMLElement("label")}} Element.

### Client-seitige Validierung

> [!WARNING]
> Client-seitige Validierung ist nützlich, garantiert jedoch _nicht_, dass der Server gültige Daten erhält. Wenn die Daten in einem bestimmten Format vorliegen müssen, validieren Sie es _immer_ auch auf der Serverseite und geben Sie eine [`400` HTTP-Antwort](/de/docs/Web/HTTP/Status/400) zurück, wenn das Format ungültig ist.

Zusätzlich zur Verwendung von CSS, um Eingaben basierend auf den {{cssxref(":valid")}} oder {{cssxref(":invalid")}} UI-Zuständen basierend auf dem aktuellen Zustand jeder Eingabe zu gestalten, wie im Abschnitt [UI-Pseudoklassen](#ui-pseudoklassen) oben erwähnt, bietet der Browser auch eine client-seitige Validierung beim (versuchten) Absenden des Formulars. Bei der Formularübermittlung, wenn ein Formularfeld die Validierung der Einschränkung nicht besteht, zeigen unterstützende Browser eine Fehlermeldung auf dem ersten ungültigen Formularfeld an; entweder eine standardmäßige Fehlermeldung basierend auf dem Fehlertyp oder eine von Ihnen gesetzte Nachricht.

Einige Eingabetypen und andere Attribute setzen Grenzen dafür, welche Werte für eine gegebene Eingabe gültig sind. Zum Beispiel bedeutet `<input type="number" min="2" max="10" step="2">`, dass nur die Zahlen 2, 4, 6, 8 oder 10 gültig sind. Mehrere Fehler könnten auftreten, darunter ein `rangeUnderflow` Fehler, wenn der Wert kleiner als 2 ist, `rangeOverflow`, wenn er größer als 10 ist, `stepMismatch`, wenn der Wert eine Zahl zwischen 2 und 10 ist, aber keine gerade Ganzzahl (entspricht nicht den Anforderungen des `step` Attributs), oder `typeMismatch`, wenn der Wert keine Zahl ist.

Für die Eingabetypen, deren Wertebereich periodisch ist (das heißt, beim höchsten möglichen Wert wickeln sich die Werte zurück zum Anfang, anstatt zu enden), ist es möglich, dass die Werte der [`max`](#max) und [`min`](#min) Eigenschaften umgekehrt sind, was darauf hinweist, dass der Bereich der zulässigen Werte bei `min` beginnt, sich um den niedrigsten möglichen Wert wickelt, dann fortfährt, bis `max` erreicht ist. Das ist besonders nützlich für Daten und Zeiten, wie wenn Sie den Bereich von 20 Uhr bis 8 Uhr morgens zulassen möchten:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Spezifische Attribute und ihre Werte können zu einem spezifischen Fehler [`ValidityState`](/de/docs/Web/API/ValidityState) führen:

<table class="no-markdown">
  <caption>
    Validitätsobjektfehler hängen von den <code>&lt;input&gt;</code> Attributen und ihren Werten ab:
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
        Tritt auf, wenn der Wert größer als der maximale Wert ist, der durch das <code>max</code> Attribut definiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen größer ist als die Anzahl, die durch die <code>maxlength</code> Eigenschaft erlaubt ist.
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)</td>
      <td>
        Tritt auf, wenn der Wert kleiner als der minimale Wert ist, der durch das <code>min</code> Attribut definiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>[`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)</td>
      <td>
        Tritt auf, wenn die Anzahl der Zeichen kleiner ist als die Anzahl, die durch die <code>minlength</code> Eigenschaft erforderlich ist.
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)</td>
      <td>
        Tritt auf, wenn ein pattern-Attribut mit einem gültigen regulären Ausdruck enthalten ist und der <code>value</code> nicht mit diesem übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)</td>
      <td>
        Tritt auf, wenn das <code>required</code> Attribut vorhanden ist, aber der Wert <code>null</code> ist oder Radio oder Checkbox nicht markiert ist.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)</td>
      <td>
        Der Wert stimmt nicht mit dem Schrittinkrement überein. Der Standardwert für das Inkrement ist <code>1</code>, daher sind nur Ganzzahlen auf <code>type="number"</code> gültig, wenn step nicht enthalten ist. <code>step="any"</code> wird diesen Fehler niemals werfen.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)</td>
      <td>
        Tritt auf, wenn der Wert nicht vom richtigen Typ ist, z. B. wenn eine E-Mail kein <code>@</code> enthält oder eine URL kein Protokoll enthält.
      </td>
    </tr>
  </tbody>
</table>

Wenn ein Formularfeld nicht das `required` Attribut hat, ist kein Wert, oder ein leerer String, nicht ungültig. Selbst wenn die oben genannten Attribute vorhanden sind, führt mit Ausnahme von `required` ein leerer String nicht zu einem Fehler.

Wir können Grenzen festlegen, welche Werte wir akzeptieren, und unterstützende Browser werden diese Formularwerte nativ validieren und den Benutzer darauf hinweisen, wenn beim Absenden des Formulars ein Fehler vorliegt.

Zusätzlich zu den in der obigen Tabelle beschriebenen Fehlern enthält die `validityState`-Schnittstelle die Boolean-Readonly-Eigenschaften `badInput`, `valid` und `customError`. Das Validitätsobjekt umfasst:

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

Für jede dieser booleschen Eigenschaften gibt ein Wert von `true` an, dass der angegebene Validierungsgrund möglicherweise fehlgeschlagen ist, mit Ausnahme der `valid` Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen einhält.

Wenn ein Fehler auftritt, warnen unterstützende Browser sowohl den Benutzer als auch verhindern, dass das Formular übermittelt wird. Ein Wort der Vorsicht: Wenn eine benutzerdefinierte Fehlermeldung auf einen als wahrwertig gesetzten Wert festgelegt wird (alles außer dem leeren String oder `null`), wird die Übermittlung des Formulars verhindert. Wenn es keine benutzerdefinierte Fehlermeldung gibt und keine der anderen Eigenschaften `true` zurückgeben, wird `valid` wahr sein, und das Formular kann übermittelt werden.

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

Die letzte Zeile, die die benutzerdefinierte Validitätsmeldung auf den leeren String setzt, ist entscheidend. Wenn der Benutzer einen Fehler macht und die Validität gesetzt ist, wird es nicht übermittelt, selbst wenn alle Werte gültig sind, bis die Meldung `null` ist.

#### Beispiel für benutzerdefinierte Validierungsfehler

Wenn Sie eine benutzerdefinierte Fehlermeldung anzeigen möchten, wenn ein Feld nicht erfolgreich validiert wurde, müssen Sie die [Constraint Validation API](/de/docs/Learn/Forms/Form_validation#validating_forms_using_javascript) verwenden, die für `<input>` (und verwandte) Elemente verfügbar ist. Nehmen Sie das folgende Formular:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

Die grundlegenden HTML-Validierungsfunktionen führen dazu, dass dies eine Standardfehlermeldung erzeugt, wenn Sie versuchen, das Formular mit entweder keinen gültigen Werten oder einem Wert, der nicht dem `pattern` entspricht, abzusenden.

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

Das Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample('Custom_validation_error_example')}}

Kurz gesagt:

- Wir überprüfen den gültigen Zustand des Eingabeelements jedes Mal, wenn sich sein Wert durch Ausführen der `checkValidity()` Methode über den `input` Ereignishandler ändert.
- Wenn der Wert ungültig ist, wird ein `invalid` Ereignis ausgelöst und die `ungültige` Ereignishandlerfunktion ausgeführt. In dieser Funktion arbeiten wir heraus, ob der Wert ungültig ist, weil er leer ist oder weil er nicht mit dem Muster übereinstimmt, indem wir einen `if ()` Block verwenden, und eine benutzerdefinierte Validitätsfehlermeldung setzen.
- Als Ergebnis wird, wenn der Eingabewert ungültig ist, wenn die Schaltfläche "Absenden" gedrückt wird, eine der benutzerdefinierten Fehlermeldungen angezeigt.
- Ist er gültig, wird er wie erwartet übermittelt. Damit dies geschieht, muss die benutzerdefinierte Validität aufgehoben werden, indem `setCustomValidity()` mit einem leeren Stringwert aufgerufen wird. Wir tun dies daher jedes Mal, wenn die `input` Ereignis ausgelöst wird. Wenn Sie dies nicht tun, und eine benutzerdefinierte Validität zuvor festgelegt wurde, wird die Eingabe als ungültig registriert, auch wenn sie derzeit einen gültigen Wert bei der Absendung enthält.

> [!NOTE]
> Validieren Sie immer Eingabeeinschränkungen sowohl auf der Clientseite als auch auf der Serverseite. Einschränkungsvalidierung schließt die Notwendigkeit der Validierung auf der _Serverseite_ nicht aus. Ungültige Werte können trotzdem von älteren Browsern oder durch böswillige Akteure gesendet werden.

> [!NOTE]
> Firefox unterstützte für viele Versionen ein proprietäres Fehlerattribut—`x-moz-errormessage`, das es Ihnen erlaubte, benutzerdefinierte Fehlermeldungen auf ähnliche Weise festzulegen. Dies wurde ab Version 66 entfernt (siehe [Firefox Bug 1513890](https://bugzil.la/1513890)).

### Lokalisierung

Die erlaubten Eingaben für bestimmte `<input>` Typen hängen von der Region ab. In einigen Regionen ist 1.000,00 eine gültige Zahl, während in anderen Regionen die gültige Art, diese Zahl einzugeben, 1.000,00 ist.

Firefox verwendet die folgenden Heuristiken, um die Region zu bestimmen, um die Eingabe des Benutzers zu validieren (zumindest für `type="number"`):

- Versuchen Sie die Sprache, die durch ein `lang`/`xml:lang` Attribut auf dem Element oder einem seiner Elternteile angegeben wird.
- Versuchen Sie die Sprache, die durch einen beliebigen `Content-Language` HTTP-Header angegeben wird. Oder,
- Wenn keine angegeben ist, verwenden Sie die Region des Browsers.

## Barrierefreiheit

### Labels

Bei der Einbeziehung von Eingaben ist es eine Anforderung der Barrierefreiheit, Labels hinzuzufügen. Dies ist erforderlich, damit diejenigen, die assistive Technologien verwenden, wissen, wofür die Eingabe ist. Außerdem verleiht das Klicken oder Tippen auf ein Label den Fokus auf das dem Label zugeordnete Formelement. Dies verbessert die Barrierefreiheit und Benutzerfreundlichkeit für sehbehinderte Benutzer, erhöht die Fläche, die ein Benutzer klicken oder berühren kann, um das Formelement zu aktivieren. Dies ist besonders nützlich (und sogar notwendig) für Radiobuttons und Kontrollkästchen, die klein sind. Für weitere Informationen zu Labels im Allgemeinen siehe [Labels](#labels).

Das folgende ist ein Beispiel dafür, wie das `<label>` mit einem `<input>` Element im oben beschriebenen Stil verbunden wird. Sie müssen dem `<input>` ein `id` Attribut geben. Das `<label>` benötigt dann ein `for` Attribut, dessen Wert mit der `id` der Eingabe übereinstimmt.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Größe

Interaktive Elemente wie Formulareingaben sollten einen Bereich bereitstellen, der groß genug ist, dass es einfach ist, sie zu aktivieren. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Beeinträchtigungen und Menschen, die ungenaue Eingabemethoden wie einen Stylus oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixeln](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

- [Verständnis von Erfolgskriterium 2.5.5: Zielgröße | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>, aufgelistet, einreichbar, rücksetzbares, formularassoziiertes Element,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">sinnentsprechendes Inhalt</a>. Wenn der <a href="#type"><code>type</code></a> nicht
        <code>hidden</code> ist, dann etikettierbares Element, greifbare Inhalte.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">sinnentsprechendes Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=checkbox</code>:
            <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role">checkbox</a></code>
          </li>
          <li>
            <code>type=email</code>
            <ul>
              <li>
                ohne dem <code>list</code> Attribut:
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=image</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=number</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li><code>type=radio</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a></li>
          <li><code>type=range</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/slider_role"><code>slider</code></a></li>
          <li>
            <code>type=reset</code>:
            <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=search</code>
            <ul>
              <li>
                ohne dem <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role"><code>searchbox</code></a>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=submit</code>:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=tel</code>
            <ul>
              <li>
                ohne dem <code>list</code> Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                ohne dem <code>list</code> Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                ohne dem <code>list</code> Attribut:
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a ></code>
              </li>
              <li>
                mit <code>list</code> Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
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
            <code>type=button</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>
          </li>
          <li>
            <code>type=checkbox</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a> bei Verwendung mit <code>aria-pressed</code>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=image</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=radio</code>: <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>
          </li>
          <li>
            <code>type=text</code> ohne dem <code>list</code> Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role"><code>spinbutton</code></a>
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

- [Formulareinschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form)
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn/Forms/Basic_native_form_controls)
- [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
- [Validierung von Formulardaten](/de/docs/Learn/Forms/Form_validation)
- [Anleitung zur Erstellung benutzerdefinierter Formular-Widgets](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- [CSS-Eigenschaft-Kompatibilitätstabelle](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
- [Erstellung vertikaler Formularsteuerelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
