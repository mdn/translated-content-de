---
title: HTML-Attributreferenz
short-title: Attributes
slug: Web/HTML/Reference/Attributes
l10n:
  sourceCommit: fef6630e9b90f9794d3194ea8389ff70599c6884
---

Elemente in HTML haben **Attribute**; dies sind zusätzliche Werte, die die Elemente konfigurieren oder ihr Verhalten auf verschiedene Arten anpassen, um die gewünschten Kriterien der Benutzer zu erfüllen.

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
      <td>Liste von Typen, die der Server akzeptiert, typischerweise ein Dateityp.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/form#accept-charset">accept-charset</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>Der Zeichensatz, der, falls angegeben, <code>"UTF-8"</code> sein muss.</td>
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
      <td>Gibt die horizontale Ausrichtung des Elements an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/iframe#allow">allow</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>Bestimmt eine Feature-Policy für das Iframe.</td>
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
        <code><a href="/de/docs/Web/HTML/Reference/Elements/link#as">as</a></code>
      </td>
      <td>
        {{ HTMLElement("link") }}
      </td>
      <td>Gibt den Typ des von dem Link geladenen Inhalts an.</td>
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
        Legt fest, ob Eingaben von Benutzern automatisch großgeschrieben
        werden
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
        Gibt an, ob in diesem Formular die Werte der Steuerelemente standardmäßig
        automatisch vom Browser vervollständigt werden können.
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
      <td>Das Audio- oder Videoelement sollte so schnell wie möglich abgespielt werden.</td>
    </tr>
    <tr>
      <td><code>background</code></td>
      <td>
        {{ HTMLElement("body") }}, {{ HTMLElement("table") }},
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>
        Gibt die URL einer Bilddatei an.
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
            <strong>Hinweis:</strong> Dies ist ein altes Attribut. Verwenden Sie stattdessen die
            CSS-Eigenschaft {{ Cssxref("background-color") }}.
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
        <p>Die Breite des Rahmens.</p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Dies ist ein altes Attribut. Verwenden Sie stattdessen die
            CSS-Eigenschaft {{ Cssxref("border") }}.
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
        Aus der <a href="https://w3c.github.io/html-media-capture/#the-capture-attribute">Media Capture-Spezifikation</a>,
        gibt an, dass eine neue Datei erfasst werden kann.
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
      <td>Gibt an, ob das Element beim Laden der Seite aktiviert sein soll.</td>
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
          Dieses Attribut legt die Textfarbe fest, entweder mit einem benannten Farbwert oder
          einer Farbe im hexadezimalen #RRGGBB-Format.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Dies ist ein altes Attribut. Verwenden Sie stattdessen die
            CSS-Eigenschaft {{ Cssxref("color") }}.
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
        Das colspan-Attribut definiert die Anzahl der Spalten, die eine Zelle umfassen soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/content">content</a></code>
      </td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>
        Ein Wert, der je nach Kontext mit <code>http-equiv</code> oder
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
      <td>Gibt an, ob der Inhalt des Elements editierbar ist.</td>
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
        Gibt an, ob der Browser dem Benutzer Wiedergabesteuerelemente anzeigen soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/area#coords">coords</a></code>
      </td>
      <td>{{ HTMLElement("area") }}</td>
      <td>
        Eine Reihe von Werten, die die Koordinaten des Hotspot-Bereichs festlegen.
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
      <td>Wie das Element Cross-Origin-Anfragen behandelt.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/API/HTMLIFrameElement/csp">csp</a></code>
        {{experimental_inline}}
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>
        Gibt die Content Security Policy an, die ein eingebettetes Dokument
        selbst durchsetzen muss.
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
      <td>Ermöglicht das Anfügen benutzerdefinierter Attribute an ein HTML-Element.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/datetime">datetime</a></code>
      </td>
      <td>
        {{ HTMLElement("del") }}, {{ HTMLElement("ins") }},
        {{ HTMLElement("time") }}
      </td>
      <td>Gibt das Datum und die Uhrzeit an, die mit dem Element verbunden sind.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/img#decoding">decoding</a></code>
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>Gibt die bevorzugte Methode zum Dekodieren des Bildes an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/track#default">default</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td>
        Gibt an, dass die Spur aktiviert werden sollte, es sei denn, die
        Benutzerpräferenzen geben etwas anderes an.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/script#defer">defer</a></code>
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>
        Gibt an, dass das Skript nach dem Parsen der Seite ausgeführt werden soll.
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
        Definiert die Textrichtung. Zulässige Werte sind ltr (Links-nach-Rechts)
        oder rtl (Rechts-nach-Links).
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
      <td>
        Gibt an, dass der Hyperlink zum Herunterladen einer Ressource verwendet
        werden soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/draggable">draggable</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Definiert, ob das Element gezogen werden kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/form#enctype">enctype</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        Definiert den Inhaltstyp der Formulardaten, wenn die
        <code>method</code> ist POST.
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
        gibt an, welche Aktionsbeschriftung (oder welches Icon) für die Eingabetaste auf
        virtuellen Tastaturen angezeigt werden soll. Das Attribut kann mit
        Formularelementen (wie dem Wert von <code>textarea</code>-Elementen) oder in Elementen eines
        Bearbeitungshosts (z. B. mit dem <code>contenteditable</code>-Attribut) verwendet werden.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/elementtiming">elementtiming</a></code>
      </td>
      <td>
        {{htmlelement("img")}},
        {{SVGElement("image")}}-Elemente innerhalb eines {{SVGElement("svg")}},
        Posterbilder von {{htmlelement("video")}}-Elementen,
        Elemente, die ein {{cssxref("background-image")}} haben,
        und Elemente, die Textknoten enthalten, wie ein {{htmlelement("p")}}
      </td>
      <td>
        Gibt an, dass ein Element für das Tracking durch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekte unter Verwendung des <code>"element"</code>-Typs gekennzeichnet ist. Weitere Einzelheiten finden Sie in der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Schnittstelle.
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
      <td>Signalisiert, dass das Abrufen eines bestimmten Bildes früh im Ladeprozess mehr oder weniger Einfluss auf die Benutzererfahrung hat, als ein Browser vernünftigerweise beim Zuweisen einer internen Priorität ableiten kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/for">for</a></code>
      </td>
      <td>
        {{ HTMLElement("label") }},
        {{ HTMLElement("output") }}
      </td>
      <td>Beschreibt Elemente, die zu diesem gehören.</td>
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
        Gibt die Aktion des Elements an, die die im {{ HTMLElement("form") }}
        definierte Aktion überschreibt.
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
        Wenn der Button/Input ein {{Glossary("submit_button", "submit button")}}
        ist (z. B. <code>type="submit"</code>), setzt dieses Attribut den Kodierungstyp, der während des
        Senden des Formulars verwendet wird. Wenn dieses Attribut angegeben wird, überschreibt es das
        <code>enctype</code>-Attribut des Eigentümer-Formulars des Buttons.
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
        Wenn der Button/Input ein {{Glossary("submit_button", "submit button")}}
        ist (z. B. <code>type="submit"</code>), setzt dieses Attribut die
        Übermittlungsmethode, die während des Senden des Formulars verwendet wird
        (<code>GET</code>, <code>POST</code> usw.). Wenn dieses Attribut
        angegeben wird, überschreibt es das <code>method</code>-Attribut des
        Eigentümer-Formulars des Buttons.
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
        Wenn der Button/Input ein {{Glossary("submit_button", "submit button")}}
        ist (z. B. <code>type="submit"</code>), gibt dieses boolesche Attribut an,
        dass das Formular nicht validiert werden soll, wenn es übermittelt wird. Wenn dieses Attribut
        angegeben wird, überschreibt es das <code>novalidate</code>-Attribut
        des Eigentümer-Formulars des Buttons.
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
        Wenn der Button/Input ein {{Glossary("submit_button", "submit button")}}
        ist (z. B. <code>type="submit"</code>), gibt dieses Attribut den
        Browsing-Kontext (z. B. Tab, Fenster oder Inline-Frame) an, in dem die Antwort
        angezeigt werden soll, die nach Absenden des Formulars empfangen wird. Wenn dieses Attribut
        angegeben wird, überschreibt es das <code>target</code>-Attribut
        des Eigentümer-Formulars des Buttons.
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
        IDs der <code>&#x3C;th></code>-Elemente, die auf dieses Element zutreffen.
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
          Bestimmt die Höhe für die hier aufgeführten Elemente. Für alle anderen Elemente
          verwenden Sie die CSS-Eigenschaft {{cssxref("height")}}.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> In einigen Fällen, wie beim
            {{ HTMLElement("div") }}, handelt es sich um ein altes Attribut, in
            dem Fall sollte die CSS-Eigenschaft {{ Cssxref("height") }}
            verwendet werden.
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
        Verhindert die Darstellung des angegebenen Elements, während die
        Kindelemente, z.B. Skriptelemente, aktiv bleiben.
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
      <td>Die URL einer verlinkten Ressource.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/hreflang">hreflang</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("link") }}
      </td>
      <td>Gibt die Sprache der verlinkten Ressource an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/meta/http-equiv">http-equiv</a></code>
      </td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>Definiert eine Pragma-Richtlinie.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/id">id</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Wird häufig mit CSS verwendet, um ein bestimmtes Element zu stylen. Der Wert dieses
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
          Dieses Attribut enthält einen oder mehrere <a href="/de/docs/Glossary/Hash_function">Hashes</a> der Ressource und wird verwendet, um sicherzustellen, dass der Inhalt der Ressource dem entspricht, was der Entwickler erwartet, und nicht mit einer böswilligen Kopie aus einem <a href="/de/docs/Web/Security/Attacks/Supply_chain_attacks">Supply-Chain-Angriff</a> ersetzt wurde.
        </p>
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
        Gibt einen Hinweis auf den Datentyp, der möglicherweise vom Benutzer eingegeben wird,
        während das Element oder sein Inhalt bearbeitet wird. Das Attribut kann mit
        Formularelementen (wie dem Wert von
        <code>textarea</code>-Elementen) oder in Elementen eines Bearbeitungshosts
        (z. B. mit dem <code>contenteditable</code>-Attribut) verwendet werden.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/img#ismap">ismap</a></code>
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>Gibt an, dass das Bild Teil einer serverseitigen Bildkarte ist.</td>
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
      <td>Gibt die Art der Textspur an.</td>
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
      <td>Gibt einen für den Benutzer lesbaren Titel des Elements an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/lang">lang</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Definiert die im Element verwendete Sprache.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/script#language">language</a></code>
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>Definiert die Skriptsprache, die im Element verwendet wird.</td>
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
      <td>Identifiziert eine Liste vordefinierter Optionen, die dem Benutzer vorgeschlagen werden.</td>
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
        Gibt an, ob das Medium von Anfang an beginnen soll, wenn
        es beendet ist.
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
      <td>Gibt den maximal zulässigen Wert an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/maxlength">maxlength</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Definiert die maximale Anzahl von Zeichen, die im Element erlaubt sind.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/minlength">minlength</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Definiert die minimale Anzahl von Zeichen, die im Element erlaubt sind.</td>
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
        Gibt einen Hinweis auf das Medium, für das die verlinkte Ressource
        entworfen wurde.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/form#method">method</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        Definiert, welche <a href="/de/docs/Web/HTTP">HTTP</a>-Methode beim
        Absenden des Formulars verwendet werden soll. Kann <code>GET</code> (Standard) oder
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
      <td>Gibt den minimal zulässigen Wert an.</td>
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
        Gibt an, ob mehrere Werte in einem Eingabefeld des Typs
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
        Gibt an, ob das Audio beim Laden der Seite initial stummgeschaltet wird.
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
        Name des Elements. Zum Beispiel vom Server verwendet, um die Felder
        bei Formularübermittlungen zu identifizieren.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/form#novalidate">novalidate</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        Dieses Attribut gibt an, dass das Formular nicht validiert werden soll,
        wenn es abgeschickt wird.
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
        Gibt an, ob die Inhalte derzeit sichtbar sind (im Fall eines
        <code>&#x3C;details></code>-Elements) oder ob der Dialog aktiv
        ist und interagiert werden kann (im Fall eines
        <code>&#x3C;dialog></code>-Elements).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/meter#optimum">optimum</a></code>
      </td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>Gibt den optimalen numerischen Wert an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/pattern">pattern</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>
        Definiert einen regulären Ausdruck, gegen den der Wert des Elements validiert
        wird.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/a#ping">ping</a></code>
      </td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td>
        Das <code>ping</code>-Attribut spezifiziert eine durch Leerzeichen getrennte Liste von URLs,
        die benachrichtigt werden sollen, wenn ein Benutzer dem Hyperlink folgt.
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
      <td>Bietet dem Benutzer einen Hinweis darauf, was in das Feld eingegeben werden kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/video#playsinline">playsinline</a></code>
      </td>
      <td>
        {{ HTMLElement("video") }}
      </td>
      <td>Ein boolesches Attribut, das angibt, dass das Video "inline" abgespielt werden soll, d.h. innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs nicht impliziert, dass das Video immer im Vollbildmodus abgespielt wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/video#poster">poster</a></code>
      </td>
      <td>{{ HTMLElement("video") }}</td>
      <td>
        Eine URL, die ein Posterbild angibt, das angezeigt wird, bis der Benutzer
        das Video abspielt oder vorspult.
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
        Gibt an, ob die gesamte Ressource, Teile davon oder nichts im Voraus
        geladen werden soll.
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
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/referrerpolicy">referrerpolicy</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("link") }}, {{ HTMLElement("script") }}
      </td>
      <td>Gibt an, welcher Referrer gesendet wird, wenn die Ressource abgerufen wird.</td>
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
        Gibt die Beziehung des Zielobjekts zum Linkobjekt an.
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
        Gibt an, ob die Liste in absteigender Reihenfolge angezeigt werden soll
        statt in aufsteigender Reihenfolge.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">role</a></code>
      </td>
      <td><a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a></td>
      <td>Definiert eine explizite Rolle für ein Element zur Verwendung durch unterstützende Technologien.</td>
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
      <td>Definiert die Anzahl der Zeilen, die eine Tabellenzelle umfassen soll.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/iframe#sandbox">sandbox</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>
        Verhindert, dass ein Dokument, das in einem Iframe geladen wird, bestimmte Funktionen nutzt (wie z.B. das Absenden von Formularen oder das Öffnen neuer Fenster).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/th#scope">scope</a></code>
      </td>
      <td>{{ HTMLElement("th") }}</td>
      <td>
        Definiert die Zellen, mit denen der Header-Test (im
        <code>th</code>-Element definiert) in Beziehung steht.
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
        Definiert die Breite des Elements (in Pixeln). Wenn das Element
        <code>type</code> <code>text</code> oder <code>password</code> ist, dann ist es die Anzahl der Zeichen.
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
      <td>Ordnet einem Element einen Platz in einem Shadow-DOM-Shadow-Baum zu.</td>
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
      <td>Gibt an, ob die Rechtschreibprüfung für das Element zulässig ist.</td>
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
      <td>Legt die erste Nummer fest, wenn sie nicht 1 ist.</td>
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
      <td>Definiert CSS-Stile, die zuvor festgelegte Stile überschreiben.</td>
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
        Überschreibt die standardmäßige Tab-Reihenfolge des Browsers und folgt
        stattdessen der angegebenen Reihenfolge.
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
        Gibt an, wo das verlinkte Dokument (im Fall eines
        <code>&#x3C;a></code>-Elements) oder wo die Antwort angezeigt werden soll, die
        empfangen wurde (im Fall eines <code>&#x3C;form></code>-Elements).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/title">title</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Text, der in einem Tooltip angezeigt wird, wenn über das Element geschwebt wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/translate">translate</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Gibt an, ob die Attributwerte und die Werte der
        <code><a href="https://dom.spec.whatwg.org/#text">Text</a></code>-Knoten
        des Elements übersetzt werden sollen, wenn die Seite lokalisiert wird, oder ob sie
        unverändert bleiben sollen.
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
        Definiert einen Standardwert, der beim Laden der Seite im Element
        angezeigt wird.
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
            <strong>Hinweis:</strong> In allen anderen Fällen, wie z.B. beim
            {{ HTMLElement("div") }}, ist dies ein altes Attribut, in
            welchem Fall die CSS-Eigenschaft {{ Cssxref("width") }}
            stattdessen verwendet werden sollte.
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

## Inhalt versus IDL-Attribute

In HTML haben die meisten Attribute zwei Gesichter: das **Inhaltsattribut** und das **IDL (Interface Definition Language) Attribut**.

Das Inhaltsattribut ist das Attribut, wie Sie es im Inhalt (dem HTML-Code) setzen können, und Sie können es über [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) oder [`element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) setzen oder abfragen. Das Inhaltsattribut ist immer ein String, selbst wenn der erwartete Wert eine Ganzzahl sein sollte. Um beispielsweise das `maxlength` eines {{HTMLElement("input")}}-Elements auf 42 zu setzen, müssen Sie `setAttribute("maxlength", "42")` auf diesem Element verwenden.

Das IDL-Attribut ist auch als JavaScript-Eigenschaft bekannt. Diese Attribute können Sie über JavaScript-Eigenschaften wie `element.foo` lesen oder setzen. Das IDL-Attribut wird immer das zugrunde liegende Inhaltsattribut verwenden (es könnte es transformieren, um einen Wert zurückzugeben, wenn Sie es abfragen) und es wird etwas im Inhaltsattribut speichern, wenn Sie es setzen. Mit anderen Worten, die IDL-Attribute reflektieren im Wesentlichen die Inhaltsattribute.

Meistens geben IDL-Attribute ihre Werte so zurück, wie sie tatsächlich verwendet werden. Zum Beispiel ist der Standard-`type` für {{HTMLElement("input")}}-Elemente "text", wenn Sie also `input.type="foobar"` setzen, wird das `<input>`-Element vom Typ Text sein (sowohl im Aussehen als auch im Verhalten), aber der Wert des Inhaltsattributs "type" wird "foobar" sein. Das `type` IDL-Attribut jedoch wird die Zeichenfolge "text" zurückgeben.

IDL-Attribute sind nicht immer Strings; zum Beispiel ist `input.maxlength` eine Zahl (ein signed long). Wenn Sie IDL-Attribute verwenden, lesen oder setzen Sie Werte des gewünschten Typs, sodass `input.maxlength` immer eine Zahl zurückgeben wird und beim Setzen von `input.maxlength` eine Zahl erwartet wird. Wenn Sie einen anderen Typ übergeben, wird er gemäß den standardmäßigen JavaScript-Regeln zur Typkonvertierung automatisch in eine Zahl umgewandelt.

IDL-Attribute können [andere Typen widerspiegeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html) wie unsigned long, URLs, Booleans usw. Leider gibt es keine klaren Regeln und die Art und Weise, wie IDL-Attribute in Verbindung mit ihren entsprechenden Inhaltsattributen verhalten, ist vom Attribut abhängig. Meistens werden die [in der Spezifikation festgelegten Regeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html) befolgt, manchmal jedoch nicht. Die HTML-Spezifikationen versuchen, dies so entwicklerfreundlich wie möglich zu gestalten, aber aus verschiedenen Gründen (meist historisch bedingt) verhalten sich einige Attribute merkwürdig (`select.size` zum Beispiel) und Sie sollten die Spezifikationen lesen, um genau zu verstehen, wie sie sich verhalten.

## Boolesche Attribute

Einige Inhaltsattribute (z.B. `required`, `readonly`, `disabled`) werden als [boolesche Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes) bezeichnet. Wenn ein boolesches Attribut vorhanden ist, ist sein Wert **true**, und wenn es fehlt, ist sein Wert **false**.

HTML definiert Einschränkungen bezüglich der erlaubten Werte von booleschen Attributen: Wenn das Attribut vorhanden ist, muss sein Wert entweder der leere String sein (gleichbedeutend damit, dass dem Attribut kein Wert zugewiesen wurde), oder ein Wert, der in der ASCII-Zeichenweise für den kanonischen Namen des Attributs unempfindlich ist, ohne führende oder abschließende Leerzeichen. Die folgenden Beispiele sind gültige Möglichkeiten, ein boolesches Attribut zu markieren:

```html-nolint
<div itemscope>This is valid HTML but invalid XML.</div>
<div itemscope=itemscope>This is also valid HTML but invalid XML.</div>
<div itemscope="">This is valid HTML and also valid XML.</div>
<div itemscope="itemscope">
  This is also valid HTML and XML, but perhaps a bit verbose.
</div>
```

Um klarzustellen: Die Werte `"true"` und `"false"` sind bei booleschen Attributen nicht erlaubt. Um einen falschen Wert darzustellen, muss das Attribut vollständig weggelassen werden. Diese Einschränkung beseitigt einige häufige Missverständnisse: Bei `checked="false"` zum Beispiel würde das `checked`-Attribut des Elements als **true** interpretiert, weil das Attribut vorhanden ist.

## Ereignis-Handler-Attribute

> [!WARNING]
> Der Gebrauch von Ereignis-Handler-Inhaltsattributen wird nicht empfohlen. Die Mischung von HTML und JavaScript führt oft zu unwartbarem Code, und die Ausführung von Ereignis-Handler-Attributen kann auch durch Inhalts-Sicherheitsrichtlinien blockiert werden.

> [!WARNING]
> Auch wenn es durch Aufruf der Methode `Function.prototype.toString()` für den Handler nicht sichtbar ist, werden Ereignis-Handler-Attribute implizit mit 2 `with`-Anweisungen umwickelt und können unerwartete Ergebnisse erzeugen. Zum Beispiel:
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
>       console.log(new URL(location)); // 'URL' verweist jetzt auf document.URL statt auf window.URL
>       // TypeError: URL ist kein Konstruktor
>     }
>   }
> }
> ```

Neben den in der obigen Tabelle aufgelisteten Attributen können globale [Ereignis-Handler](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) — wie [`onclick`](/de/docs/Web/API/Element/click_event) — auch als [Inhaltsattribute](#inhalt_versus_idl-attribute) auf allen Elementen angegeben werden.

Alle Ereignis-Handler-Attribute akzeptieren einen String. Der String wird verwendet, um eine [JavaScript-Funktion](/de/docs/Web/JavaScript/Reference/Functions) wie `function name(/*args*/) {body}` zu synthetisieren, wobei `name` der Name des Attributs ist und `body` der Wert des Attributs ist. Der Handler erhält dieselben Parameter wie sein JavaScript-Ereignis-Handler-Gegenstück — die meisten Handler erhalten nur einen `event`-Parameter, während `onerror` fünf erhält: `event`, `source`, `lineno`, `colno`, `error`. Das bedeutet, dass Sie im Allgemeinen die `event`-Variable innerhalb des Attributs verwenden können.

```html
<div onclick="console.log(event)">Click me!</div>
<!-- The synthesized handler has a name; you can reference itself -->
<div onclick="console.log(onclick)">Click me!</div>
```

## Siehe auch

- [HTML-Elemente](/de/docs/Web/HTML/Reference/Elements)
