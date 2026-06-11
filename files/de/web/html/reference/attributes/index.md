---
title: HTML-Attributreferenz
short-title: Attributes
slug: Web/HTML/Reference/Attributes
l10n:
  sourceCommit: 1f73b512daca27339931eca233376957a7a7a4fd
---

Elemente in HTML haben **Attribute**; dies sind zusätzliche Werte, die die Elemente konfigurieren oder deren Verhalten auf verschiedene Weise anpassen, um die Kriterien zu erfüllen, die die Benutzer wünschen.

## Attributliste

<table class="standard-table">
  <thead>
    <tr>
      <th>Attributname</th>
      <th>Elemente</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/accept">accept</a></code>
      </td>
      <td>
        {{ HTMLElement("form") }}, {{ HTMLElement("input") }}
      </td>
      <td>Liste der Dateitypen, die der Server akzeptiert, typischerweise ein Dateityp.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/form#accept-charset">accept-charset</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>Der Zeichensatz, der bereitgestellt werden muss, falls vorhanden, <code>"UTF-8"</code> sein.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/accesskey">accesskey</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Tastenkombination, um das Element zu aktivieren oder den Fokus darauf zu setzen.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/form#action">action</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        Die URI eines Programms, das die über das Formular übermittelten Informationen verarbeitet.
      </td>
    </tr>
    <tr>
      <td>
        <code>align</code> {{deprecated_inline}}
      </td>
      <td>
        {{ HTMLElement("caption") }}, {{ HTMLElement("col") }},
        {{ HTMLElement("colgroup") }},
        {{ HTMLElement("hr") }}, {{ HTMLElement("iframe") }},
        {{ HTMLElement("img") }}, {{ HTMLElement("table") }},
        {{ HTMLElement("tbody") }}, {{ HTMLElement("td") }},
        {{ HTMLElement("tfoot") }}, {{ HTMLElement("th") }},
        {{ HTMLElement("thead") }}, {{ HTMLElement("tr") }}
      </td>
      <td>Bestimmt die horizontale Ausrichtung des Elements.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/iframe#allow">allow</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>Definiert eine feature-policy für das iframe.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input/color#alpha">alpha</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>Erlaubt dem Benutzer, die Deckkraft einer Farbe in einem <code>type="color"</code>-Eingabefeld auszuwählen.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/alt">alt</a></code>
      </td>
      <td>
        {{ HTMLElement("area") }},
        {{ HTMLElement("img") }}, {{ HTMLElement("input") }}
      </td>
      <td>Alternativtext, falls ein Bild nicht angezeigt werden kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Attributes">aria-*</a></code>
      </td>
      <td>
        Alle Elemente
      </td>
      <td>
        Modifiziert den Zustand oder die Eigenschaften eines Elements im Accessibility-Tree. Die Anwendbarkeit hängt vom spezifischen <a href="/de/docs/Web/Accessibility/ARIA">ARIA</a>-Attribut ab.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/link#as">as</a></code>
      </td>
      <td>
        {{ HTMLElement("link") }}
      </td>
      <td>Bestimmt den Typ des Inhalts, der von dem Link geladen wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/script#async">async</a></code>
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>Führt das Skript asynchron aus.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize">autocapitalize</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Legt fest, ob die Eingabe automatisch großgeschrieben wird, wenn sie vom Benutzer eingegeben wird.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/autocomplete">autocomplete</a></code>
      </td>
      <td>
        {{ HTMLElement("form") }}, {{ HTMLElement("input") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>
        Gibt an, ob die Steuerungen in diesem Formular standardmäßig automatisch vom Browser ergänzt werden können.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/autoplay">autoplay</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>Das Audio oder Video sollte so schnell wie möglich abgespielt werden.</td>
    </tr>
    <tr>
      <td><code>background</code></td>
      <td>
        {{ HTMLElement("body") }}, {{ HTMLElement("table") }},
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>
        Bestimmt die URL einer Bilddatei.
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Obwohl Browser und E-Mail-Clients dieses Attribut möglicherweise noch unterstützen, ist es veraltet. Verwenden Sie stattdessen CSS
            {{ Cssxref("background-image") }}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>bgcolor</code></td>
      <td>
        {{ HTMLElement("body") }}, {{ HTMLElement("col") }},
        {{ HTMLElement("colgroup") }},
        {{ HTMLElement("marquee") }},
        {{ HTMLElement("table") }},
        {{ HTMLElement("tbody") }},
        {{ HTMLElement("tfoot") }}, {{ HTMLElement("td") }},
        {{ HTMLElement("th") }}, {{ HTMLElement("tr") }}
      </td>
      <td>
        <p>Hintergrundfarbe des Elements.</p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Dies ist ein altes Attribut. Bitte verwenden Sie stattdessen die CSS-Eigenschaft {{ Cssxref("background-color") }}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>border</code></td>
      <td>
        {{ HTMLElement("img") }}, {{ HTMLElement("object") }},
        {{ HTMLElement("table") }}
      </td>
      <td>
        <p>Die Randbreite.</p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Dies ist ein altes Attribut. Bitte verwenden Sie stattdessen die CSS-Eigenschaft {{ Cssxref("border") }}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/capture">capture</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>
        Aus der <a href="https://w3c.github.io/html-media-capture/#the-capture-attribute">Media Capture Specification</a>,
        bestimmt, dass eine neue Datei erfasst werden kann.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/meta#charset">charset</a></code>
      </td>
      <td>
        {{ HTMLElement("meta") }}
      </td>
      <td>Deklariert die Zeichenkodierung der Seite oder des Skripts.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#checked">checked</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}
      </td>
      <td>Gibt an, ob das Element beim Laden der Seite markiert sein soll.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/cite">cite</a></code>
      </td>
      <td>
        {{ HTMLElement("blockquote") }},
        {{ HTMLElement("del") }}, {{ HTMLElement("ins") }},
        {{ HTMLElement("q") }}
      </td>
      <td>Enthält eine URI, die auf die Quelle des Zitats oder der Änderung verweist.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/class">class</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Wird häufig mit CSS verwendet, um Elemente mit gemeinsamen Eigenschaften zu stylen.</td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>
        {{ HTMLElement("font") }}, {{ HTMLElement("hr") }}
      </td>
      <td>
        <p>
          Dieses Attribut legt die Textfarbe fest, entweder durch die Verwendung eines benannten Farbwerts oder durch eine Farbe im hexadezimalen Format #RRGGBB.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Dies ist ein altes Attribut. Bitte verwenden Sie stattdessen die CSS-Eigenschaft {{ Cssxref("color") }}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input/color#colorspace">colorspace</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>Definiert den <a href="/de/docs/Glossary/Color_space">Farbraum</a>, der von einem <code>type="color"</code>-Eingabefeld verwendet wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/textarea#cols">cols</a></code>
      </td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>Definiert die Anzahl der Spalten in einem Textbereich.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/colspan">colspan</a></code>
      </td>
      <td>
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>
        Das <code>colspan</code> Attribut definiert die Anzahl der Spalten, die eine Zelle umfassen soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/content">content</a></code>
      </td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>
        Ein Wert, der in Abhängigkeit vom Kontext mit <code>http-equiv</code> oder
        <code>name</code> assoziiert ist.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/contenteditable">contenteditable</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Gibt an, ob der Inhalt des Elements bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/controls">controls</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        Gibt an, ob der Browser dem Benutzer Wiedergabesteuerungen anzeigen soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/area#coords">coords</a></code>
      </td>
      <td>{{ HTMLElement("area") }}</td>
      <td>
        Eine Reihe von Werten, die die Koordinaten des Hotspot-Bereichs angeben.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/crossorigin">crossorigin</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("link") }}, {{ HTMLElement("script") }},
        {{ HTMLElement("video") }}
      </td>
      <td>Wie das Element Cross-Origin-Anforderungen handhabt.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/API/HTMLIFrameElement/csp">csp</a></code>
        {{experimental_inline}}
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>
        Gibt die Content Security Policy an, die ein eingebettetes Dokument einhalten muss.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/object#data">data</a></code>
      </td>
      <td>{{ HTMLElement("object") }}</td>
      <td>Gibt die URL der Ressource an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/data-*">data-*</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Ermöglicht es, benutzerdefinierte Attribute an ein HTML-Element anzuhängen.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/datetime">datetime</a></code>
      </td>
      <td>
        {{ HTMLElement("del") }}, {{ HTMLElement("ins") }},
        {{ HTMLElement("time") }}
      </td>
      <td>Gibt das Datum und die Uhrzeit an, die mit dem Element verknüpft sind.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/img#decoding">decoding</a></code>
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>Bestimmt die bevorzugte Methode zum Dekodieren des Bildes.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/track#default">default</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td>
        Gibt an, dass der Track aktiviert werden sollte, es sei denn, die Benutzerpräferenzen geben etwas anderes an.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/script#defer">defer</a></code>
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>
        Gibt an, dass das Skript ausgeführt werden sollte, nachdem die Seite analysiert wurde.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/dir">dir</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Definiert die Textrichtung. Erlaubte Werte sind ltr (Links-nach-Rechts) oder rtl (Rechts-nach-Links).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/dirname">dirname</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/disabled">disabled</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("fieldset") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("optgroup") }},
        {{ HTMLElement("option") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Gibt an, ob der Benutzer mit dem Element interagieren kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/download">download</a></code>
      </td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td>Gibt an, dass der Hyperlink zum Herunterladen einer Ressource verwendet werden soll.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/draggable">draggable</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Bestimmt, ob das Element gezogen werden kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/form#enctype">enctype</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        Bestimmt den Inhaltstyp der Formulardaten, wenn die
        <code>method</code> auf POST steht.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint">enterkeyhint</a></code>
      </td>
      <td>
        {{ HTMLElement("textarea") }},
        <a href="/de/docs/Web/HTML/Reference/Global_attributes/contenteditable"><code>contenteditable</code></a>
      </td>
      <td>
        Das <a href="https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute"><code>enterkeyhint</code></a>
        Attribut spezifiziert, welches Aktionslabel (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt wird. Das Attribut kann mit Formularelementen verwendet werden (wie z.B. dem Wert von <code>textarea</code>-Elementen), oder in Elementen eines Bearbeitungsbereichs (z.B. mit dem <code>contenteditable</code>-Attribut).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/elementtiming">elementtiming</a></code>
      </td>
      <td>
        {{htmlelement("img")}},
        {{SVGElement("image")}} Elemente innerhalb eines {{SVGElement("svg")}},
        Posterbilder von {{htmlelement("video")}}-Elementen,
        Elemente, die ein {{cssxref("background-image")}} haben,
        und Elemente, die Textknoten enthalten, wie ein {{htmlelement("p")}}
      </td>
      <td>
        Gibt an, dass ein Element für die Nachverfolgung durch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekte mit dem <code>"element"</code>-Typ markiert ist. Für weitere Details siehe die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Schnittstelle.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/fetchpriority">fetchpriority</a></code>
      </td>
      <td>
        {{ HTMLElement("img") }},
        {{ HTMLElement("link") }},
        {{ HTMLElement("script") }}
      </td>
      <td>Signale, dass das frühzeitige Abrufen eines bestimmten Bildes im Ladeprozess einen größeren oder geringeren Einfluss auf die Benutzererfahrung hat, als ein Browser vernünftigerweise bei der Zuordnung einer internen Priorität ableiten kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/for">for</a></code>
      </td>
      <td>
        {{ HTMLElement("label") }},
        {{ HTMLElement("output") }}
      </td>
      <td>Beschreibt, welche Elemente zu diesem gehören.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/form">form</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("fieldset") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("output") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Gibt das Formular an, das der Eigentümer des Elements ist.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/formaction">formaction</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("button") }}
      </td>
      <td>
        Gibt die Aktion des Elements an und überschreibt die im
        {{ HTMLElement("form") }} definierte Aktion.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/formenctype">formenctype</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        Wenn der Button/das Eingabefeld ein {{Glossary("submit_button", "Submit-Button")}} ist (z.B. <code>type="submit"</code>),
        legt dieses Attribut den Codierungstyp fest, der bei der Formularübermittlung verwendet wird. Wenn
        dieses Attribut angegeben ist, überschreibt es das
        <code>enctype</code>-Attribut des Formularbesitzers des Buttons.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/formmethod">formmethod</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        Wenn der Button/das Eingabefeld ein {{Glossary("submit_button", "Submit-Button")}} ist (z.B. <code>type="submit"</code>),
        legt dieses Attribut die Übermittlungsmethode fest, die bei der Formularübermittlung verwendet wird
        (<code>GET</code>, <code>POST</code>, etc.). Wenn dieses Attribut
        angegeben ist, überschreibt es das <code>method</code>-Attribut des
        Formularbesitzers des Buttons.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/formnovalidate">formnovalidate</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        Wenn der Button/das Eingabefeld ein {{Glossary("submit_button", "Submit-Button")}} ist (z.B. <code>type="submit"</code>),
        gibt dieses boolesche Attribut an, dass das Formular nicht validiert
        werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das
        <code>novalidate</code>-Attribut des Formularbesitzers des Buttons.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/formtarget">formtarget</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        Wenn der Button/das Eingabefeld ein {{Glossary("submit_button", "Submit-Button")}} ist (z.B. <code>type="submit"</code>),
        gibt dieses Attribut den Browsing-Kontext (z.B. Tab, Fenster oder Inline-Frame) an, in dem
        die Antwort angezeigt werden soll, die nach dem Senden des Formulars
        empfangen wird. Wenn dieses Attribut angegeben ist, überschreibt es das
        <code>target</code>-Attribut des Formularbesitzers des Buttons.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/headers">headers</a></code>
      </td>
      <td>
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>
        IDs der <code>&#x3C;th></code>-Elemente, die auf dieses Element anwendbar sind.
      </td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>
        {{ HTMLElement("canvas") }},
        {{ HTMLElement("embed") }},
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        <p>
          Gibt die Höhe der hier aufgeführten Elemente an. Für alle anderen Elemente
          verwenden Sie die CSS-Eigenschaft {{cssxref("height")}}.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> In einigen Fällen, wie z.B.
            {{ HTMLElement("div") }}, ist dies ein altes Attribut, in
            diesem Fall sollte die CSS-Eigenschaft {{ Cssxref("height") }}
            stattdessen verwendet werden.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/hidden">hidden</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Verhindert die Darstellung des angegebenen Elements, während untergeordnete Elemente, z.B. Skriptelemente, aktiv bleiben.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/meter#high">high</a></code>
      </td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>Gibt die untere Grenze des oberen Bereichs an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/href">href</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("base") }}, {{ HTMLElement("link") }}
      </td>
      <td>Die URL einer verknüpften Ressource.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/hreflang">hreflang</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("link") }}
      </td>
      <td>Legt die Sprache der verknüpften Ressource fest.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/meta/http-equiv">http-equiv</a></code>
      </td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>Definiert eine Pragma-Direktive.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/id">id</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Wird häufig mit CSS verwendet, um ein spezifisches Element zu stylen. Der Wert dieses
        Attributs muss eindeutig sein.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/integrity">integrity</a></code>
      </td>
      <td>
        {{ HTMLElement("link") }}, {{ HTMLElement("script") }}
      </td>
      <td>
        <p>
          Dieses Attribut enthält ein oder mehrere <a href="/de/docs/Glossary/Hash_function">Hashes</a> der Ressource und wird verwendet, um sicherzustellen, dass der Inhalt der Ressource das ist, was der Entwickler erwartet, und nicht durch eine bösartige Kopie in einer <a href="/de/docs/Web/Security/Attacks/Supply_chain_attacks">Lieferketten-Angriff</a> ersetzt wurde.</p>
          <p>Siehe <a href="/de/docs/Web/Security/Defenses/Subresource_Integrity">Subresource Integrity</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes/inputmode"><code>inputmode</code></a>
      </td>
      <td>
        {{ HTMLElement("textarea") }},
        <a href="/de/docs/Web/HTML/Reference/Global_attributes/contenteditable"><code>contenteditable</code></a>
      </td>
      <td>
        Gibt einen Hinweis auf die Art der Daten, die beim Bearbeiten des Elements oder seines Inhalts möglicherweise eingegeben werden. Das Attribut kann
        mit Formularelementen (wie dem Wert von
        <code>textarea</code>-Elementen) oder in Elementen in einem Bearbeitungsbereich
        (z.B. mit dem <code>contenteditable</code>-Attribut) verwendet werden.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/img#ismap">ismap</a></code>
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>Gibt an, dass das Bild Teil eines serverseitigen Bildmaps ist.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/track#kind">kind</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td>Bestimmt die Art des Texttracks.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/label">label</a></code>
      </td>
      <td>
        {{ HTMLElement("optgroup") }},
        {{ HTMLElement("option") }},
        {{ HTMLElement("track") }}
      </td>
      <td>Bestimmt einen für den Benutzer lesbaren Titel des Elements.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/lang">lang</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Definiert die Sprache, die im Element verwendet wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/script#language">language</a></code>
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>Definiert die im Element verwendete Skriptsprache.</td>
    </tr>
    <tr>
      <td><code>loading</code></td>
      <td>
        {{ HTMLElement("img") }}, {{ HTMLElement("iframe") }}
      </td>
      <td>
        Gibt an, ob das Element verzögert geladen werden soll
        (<code>loading="lazy"</code>) oder sofort geladen werden soll
        (<code>loading="eager"</code>).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#list">list</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>Identifiziert eine Liste vordefinierter Optionen, die dem Benutzer vorgeschlagen werden sollen.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/loop">loop</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("marquee") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        Gibt an, ob das Medium nach dem Ende wieder von Anfang an abgespielt werden soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/meter#low">low</a></code>
      </td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>Gibt die obere Grenze des unteren Bereichs an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/max">max</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("meter") }},
        {{ HTMLElement("progress") }}
      </td>
      <td>Bestimmt den maximal erlaubten Wert.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/maxlength">maxlength</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Definiert die maximale Anzahl an Zeichen, die im Element erlaubt sind.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/minlength">minlength</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Definiert die minimale Anzahl an Zeichen, die im Element erlaubt sind.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/media">media</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("link") }}, {{ HTMLElement("source") }},
        {{ HTMLElement("style") }}
      </td>
      <td>
        Gibt einen Hinweis auf das Medium, für das die verknüpfte Ressource
        entworfen wurde.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/form#method">method</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        Bestimmt, welche <a href="/de/docs/Web/HTTP">HTTP</a>-Methode beim
        Einreichen des Formulars verwendet werden soll. Kann <code>GET</code> (Standard) oder
        <code>POST</code> sein.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/min">min</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("meter") }}
      </td>
      <td>Gibt den minimal erlaubten Wert an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/multiple">multiple</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("select") }}
      </td>
      <td>
        Gibt an, ob mehrere Werte in ein Eingabefeld des Typs
        <code>email</code> oder <code>file</code> eingegeben werden können.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/muted">muted</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        Gibt an, ob das Audio beim Laden der Seite initial stummgeschaltet ist.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/name">name</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}, {{ HTMLElement("form") }},
        {{ HTMLElement("fieldset") }},
        {{ HTMLElement("iframe") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("output") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }},
        {{ HTMLElement("map") }}, {{ HTMLElement("meta") }},
        {{ HTMLElement("param") }}
      </td>
      <td>
        Name des Elements. Wird beispielsweise vom Server verwendet, um die
        Felder bei Formularübermittlungen zu identifizieren.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/form#novalidate">novalidate</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        Dieses Attribut gibt an, dass das Formular beim Absenden nicht validiert werden soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/open">open</a></code>
      </td>
      <td>
        {{ HTMLElement("details") }},
        {{ HTMLElement("dialog") }}
      </td>
      <td>
        Gibt an, ob der Inhalt derzeit sichtbar ist (bei einem
        <code>&#x3C;details></code>-Element) oder ob der Dialog aktiv ist
        und mit ihm interagiert werden kann (bei einem
        <code>&#x3C;dialog></code>-Element).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/meter#optimum">optimum</a></code>
      </td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>Bestimmt den optimalen numerischen Wert.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/pattern">pattern</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>
        Bestimmt einen regulären Ausdruck, gegen den der Wert des Elements validiert wird.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/a#ping">ping</a></code>
      </td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td>
        Das <code>ping</code>-Attribut gibt eine durch Leerzeichen getrennte Liste von URLs an, die benachrichtigt werden sollen, wenn ein Benutzer dem Hyperlink folgt.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/placeholder">placeholder</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Gibt einen Hinweis darauf, was in das Feld eingegeben werden kann, an den Benutzer.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/video#playsinline">playsinline</a></code>
      </td>
      <td>
        {{ HTMLElement("video") }}
      </td>
      <td>Ein boolesches Attribut, das angibt, dass das Video "inline" abgespielt werden soll, d.h. innerhalb des Abspielbereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs nicht bedeutet, dass das Video immer im Vollbildmodus abgespielt wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/video#poster">poster</a></code>
      </td>
      <td>{{ HTMLElement("video") }}</td>
      <td>
        Eine URL, die auf ein Posterbild verweist, das angezeigt wird, bis der Benutzer abspielt oder schreibt.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/preload">preload</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        Gibt an, ob die gesamte Ressource, Teile davon oder nichts vorab geladen werden soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/readonly">readonly</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Gibt an, ob das Element bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/referralpolicy">referrerpolicy</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("link") }}, {{ HTMLElement("script") }}
      </td>
      <td>Bestimmt, welcher Referrer beim Abrufen der Ressource gesendet wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/rel">rel</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("link") }}
      </td>
      <td>
        Bestimmt die Beziehung des Zielobjekts zum Linkobjekt.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/required">required</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Gibt an, ob dieses Element ausgefüllt werden muss oder nicht.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/ol#reversed">reversed</a></code>
      </td>
      <td>{{ HTMLElement("ol") }}</td>
      <td>
        Gibt an, ob die Liste in absteigender Reihenfolge statt in aufsteigender Reihenfolge angezeigt werden soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">role</a></code>
      </td>
      <td><a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a></td>
      <td>Definiert eine explizite Rolle für ein Element zur Verwendung durch assistive Technologien.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/textarea#rows">rows</a></code>
      </td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>Definiert die Anzahl der Zeilen in einem Textbereich.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/rowspan">rowspan</a></code>
      </td>
      <td>
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>Definiert die Anzahl der Zeilen, die eine Tabellenzelle überspannen soll.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/iframe#sandbox">sandbox</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>
        Verhindert, dass ein Dokument, das in einem iframe geladen ist, bestimmte Funktionen nutzt (wie z.B. das Absenden von Formularen oder das Öffnen neuer Fenster).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/th#scope">scope</a></code>
      </td>
      <td>{{ HTMLElement("th") }}</td>
      <td>
        Definiert die Zellen, auf die sich der Header-Test (definiert im
        <code>th</code>-Element) bezieht.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/option#selected">selected</a></code>
      </td>
      <td>{{ HTMLElement("option") }}</td>
      <td>Definiert einen Wert, der beim Laden der Seite ausgewählt wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/shape">shape</a></code>
      </td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/size">size</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("select") }}
      </td>
      <td>
        Bestimmt die Breite des Elements (in Pixeln). Wenn das Attribut des Elements
        <code>type</code> auf <code>text</code> oder
        <code>password</code> gesetzt ist, dann ist es die Anzahl der Zeichen.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/sizes">sizes</a></code>
      </td>
      <td>
        {{ HTMLElement("link") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("source") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/slot">slot</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Weist einem Element einen Slot in einem Shadow DOM Shadow Tree zu.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/span">span</a></code>
      </td>
      <td>
        {{ HTMLElement("col") }},
        {{ HTMLElement("colgroup") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/spellcheck">spellcheck</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Gibt an, ob die Rechtschreibprüfung für das Element erlaubt ist.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/src">src</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("embed") }},
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("script") }},
        {{ HTMLElement("source") }},
        {{ HTMLElement("track") }},
        {{ HTMLElement("video") }}
      </td>
      <td>Die URL des einbettbaren Inhalts.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc">srcdoc</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/track#srclang">srclang</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/srcset">srcset</a></code>
      </td>
      <td>
        {{ HTMLElement("img") }}, {{ HTMLElement("source") }}
      </td>
      <td>Ein oder mehrere responsive Bildkandidaten.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/ol#start">start</a></code>
      </td>
      <td>{{ HTMLElement("ol") }}</td>
      <td>Definiert die erste Nummer, falls diese anders als 1 ist.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/step">step</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/style">style</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Bestimmt CSS-Stile, die bereits festgelegte Stile überschreiben.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/table#summary">summary</a></code>
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("table") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/tabindex">tabindex</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Überschreibt die Standard-Tastaturnavigation des Browsers und folgt stattdessen der angegebenen Reihenfolge.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/target">target</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("base") }}, {{ HTMLElement("form") }}
      </td>
      <td>
        Bestimmt, wo das verknüpfte Dokument geöffnet werden soll (im Fall eines
        <code>&#x3C;a></code>-Elements) oder wo die empfangene Antwort angezeigt
        werden soll (im Fall eines <code>&#x3C;form></code>-Elements)
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/title">title</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Text, der in einem Tooltip angezeigt wird, wenn mit der Maus über das Element gefahren wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/translate">translate</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Bestimmen Sie, ob die Attributwerte eines Elements und die Werte seiner
        <code><a href="https://dom.spec.whatwg.org/#text">Text</a></code>-Knoten
        beim Lokalisieren der Seite übersetzt werden sollen oder ob sie unverändert bleiben sollen.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/type">type</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("embed") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("ol") }},
        {{ HTMLElement("script") }},
        {{ HTMLElement("source") }},
        {{ HTMLElement("style") }}, {{ HTMLElement("menu") }},
        {{ HTMLElement("link") }}
      </td>
      <td>Definiert den Typ des Elements.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/usemap">usemap</a></code>
      </td>
      <td>
        {{ HTMLElement("img") }}, {{ HTMLElement("input") }},
        {{ HTMLElement("object") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/value">value</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}, {{ HTMLElement("data") }},
        {{ HTMLElement("input") }}, {{ HTMLElement("li") }},
        {{ HTMLElement("meter") }},
        {{ HTMLElement("option") }},
        {{ HTMLElement("progress") }},
        {{ HTMLElement("param") }}
      </td>
      <td>
        Definiert einen Standardwert, der beim Laden der Seite im Element angezeigt wird.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/width">width</a></code>
      </td>
      <td>
        {{ HTMLElement("canvas") }},
        {{ HTMLElement("embed") }},
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        <p>
          Für die hier aufgeführten Elemente legt dies die Breite des Elements fest.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> In allen anderen Fällen, wie z.B.
            {{ HTMLElement("div") }}, ist dies ein altes Attribut, in
            dessen Fall die CSS-Eigenschaft {{ Cssxref("width") }} stattdessen verwendet werden sollte.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/textarea#wrap">wrap</a></code>
      </td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>Gibt an, ob der Text umgebrochen werden soll.</td>
    </tr>
  </tbody>
</table>

## Inhats- versus IDL-Attribute

In HTML haben die meisten Attribute zwei Seiten: das **Inhaltsattribut** und das **IDL (Interface Definition Language)-Attribut**.

Das Inhaltsattribut ist das Attribut, das Sie aus dem Inhalt (dem HTML-Code) festlegen und das Sie über [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) oder [`element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) setzen oder abrufen können. Das Inhaltsattribut ist immer ein String, selbst wenn der erwartete Wert eine Ganzzahl sein sollte. Zum Beispiel, um das `maxlength` eines {{HTMLElement("input")}}-Elements auf 42 mit dem Inhaltsattribut zu setzen, müssen Sie `setAttribute("maxlength", "42")` auf diesem Element aufrufen.

Das IDL-Attribut ist auch als JavaScript-Eigenschaft bekannt. Dies sind die Attribute, die Sie mit JavaScript-Eigenschaften wie `element.foo` lesen oder setzen können. Das IDL-Attribut wird immer das zugrunde liegende Inhaltsattribut verwenden (aber möglicherweise transformieren), um einen Wert zurückzugeben, wenn Sie es abrufen, und es wird etwas im Inhaltsattribut speichern, wenn Sie es setzen. Mit anderen Worten reflektieren die IDL-Attribute im Wesentlichen die Inhaltsattribute.

Meistens geben IDL-Attribute ihre Werte so zurück, wie sie wirklich verwendet werden. Zum Beispiel ist der Standard-Typ für {{HTMLElement("input")}}-Elemente "text". Wenn Sie also `input.type="foobar"` setzen, wird das `<input>`-Element vom Typ Text sein (in der Erscheinung und im Verhalten), aber der Wert des "type"-Inhaltsattributs wird "foobar" sein. Jedoch wird das `type`-IDL-Attribut den String "text" zurückgeben.

IDL-Attribute sind nicht immer Strings; zum Beispiel ist `input.maxlength` eine Zahl (ein signierter Long). Wenn Sie IDL-Attribute verwenden, lesen oder setzen Sie Werte des gewünschten Typs, sodass `input.maxlength` immer eine Zahl zurückgeben wird und wenn Sie `input.maxlength` setzen, erwartet es eine Zahl. Wenn Sie einen anderen Typ übergeben, wird er automatisch in eine Zahl konvertiert, wie es die Standard-JavaScript-Regeln für die Typkonvertierung vorsehen.

IDL-Attribute können [andere Typen widerspiegeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html), wie unsignierte Long, URLs, Booleans usw. Leider gibt es keine klaren Regeln und die Art und Weise, wie IDL-Attribute in Verbindung mit ihren entsprechenden Inhaltsattributen verhalten, hängt vom Attribut ab. Meistens wird es [den in der Spezifikation dargelegten Regeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html) folgen, aber manchmal nicht. HTML-Spezifikationen versuchen, dies so entwicklerfreundlich wie möglich zu gestalten, aber aus verschiedenen Gründen (hauptsächlich historischen) verhalten sich einige Attribute eigenartig (zum Beispiel `select.size`) und Sie sollten die Spezifikationen lesen, um zu verstehen, wie sie sich genau verhalten.

## Boolean-Attribute

Einige Inhaltsattribute (z. B. `required`, `readonly`, `disabled`) werden als [boolean-Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes) bezeichnet. Wenn ein Boolean-Attribut vorhanden ist, ist sein Wert **true**, und wenn es fehlt, ist sein Wert **false**.

HTML definiert Einschränkungen für die erlaubten Werte von Boolean-Attributen: Wenn das Attribut vorhanden ist, muss sein Wert entweder der leere String sein (gleichwertig, das Attribut kann einen nicht zugewiesenen Wert haben) oder ein Wert, der eine ASCII-Groß-/Kleinschreibung-Übereinstimmung für den kanonischen Namen des Attributs ist, ohne führende oder nachfolgende Leerzeichen. Die folgenden Beispiele sind gültige Möglichkeiten, ein Boolean-Attribut zu markieren:

```html-nolint
<div itemscope>This is valid HTML but invalid XML.</div>
<div itemscope=itemscope>This is also valid HTML but invalid XML.</div>
<div itemscope="">This is valid HTML and also valid XML.</div>
<div itemscope="itemscope">
  This is also valid HTML and XML, but perhaps a bit verbose.
</div>
```

Um klarzustellen: Die Werte `"true"` und `"false"` sind bei Boolean-Attributen nicht erlaubt. Um einen falschen Wert darzustellen, muss das Attribut vollständig weggelassen werden. Diese Einschränkung beseitigt einige häufige Missverständnisse: Bei `checked="false"` zum Beispiel würde das `checked`-Attribut des Elements als **true** interpretiert, weil das Attribut vorhanden ist.

## Event-Handler-Attribute

> [!WARNING]
> Die Verwendung von Inhaltsattributen für Event-Handler wird nicht empfohlen. Das Mischen von HTML und JavaScript führt oft zu schwer wartbarem Code, und die Ausführung von Event-Handler-Attributen kann auch durch Content-Sicherheitsrichtlinien blockiert werden.

> [!WARNING]
> Auch wenn dies nicht sichtbar ist, wenn die Methode `Function.prototype.toString()` auf dem Handler aufgerufen wird, werden Event-Handler-Attribute implizit Code in 2 `with`-Anweisungen einbetten und können zu unerwarteten Ergebnissen führen. Zum Beispiel:
>
> ```html
> <div onclick="console.log(new URL(location))">Schlechtes Beispiel</div>
> ```
>
> Wird im Wesentlichen zu:
>
> ```js example-bad
> function onclick(event) {
>   with (this.ownerDocument) {
>     with (this) {
>       console.log(new URL(location)); // 'URL' löst sich nun zu document.URL anstelle von window.URL auf
>       // TypeError: URL ist kein Konstruktor
>     }
>   }
> }
> ```

Zusätzlich zu den in der obigen Tabelle aufgeführten Attributen können globale [Event-Handler](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) — wie [`onclick`](/de/docs/Web/API/Element/click_event) — auch als [Inhaltsattribute](#inhats-versus-idl-attribute) auf allen Elementen angegeben werden.

Alle Event-Handler-Attribute akzeptieren einen String. Der String wird verwendet, um eine [JavaScript-Funktion](/de/docs/Web/JavaScript/Reference/Functions) wie `function name(/*args*/) {body}` zu erstellen, wobei `name` der Name des Attributs und `body` der Wert des Attributs ist. Der Handler erhält dieselben Parameter wie sein JavaScript-Event-Handler-Gegenstück — die meisten Handler erhalten nur einen `event`-Parameter, während `onerror` fünf erhält: `event`, `source`, `lineno`, `colno`, `error`. Das bedeutet, dass Sie im Allgemeinen die Variable `event` innerhalb des Attributs verwenden können.

```html
<div onclick="console.log(event)">Click me!</div>
<!-- The synthesized handler has a name; you can reference itself -->
<div onclick="console.log(onclick)">Click me!</div>
```

## Siehe auch

- [HTML-Elemente](/de/docs/Web/HTML/Reference/Elements)
