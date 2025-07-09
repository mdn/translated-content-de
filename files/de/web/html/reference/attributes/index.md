---
title: HTML-Attribut-Referenz
short-title: Attributes
slug: Web/HTML/Reference/Attributes
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Elemente in HTML haben **Attribute**; dies sind zusätzliche Werte, die die Elemente konfigurieren oder ihr Verhalten auf verschiedene Weisen anpassen, um die gewünschten Anforderungen der Benutzer zu erfüllen.

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
      <td>Liste der vom Server akzeptierten Typen, typischerweise ein Dateityp.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/form#accept-charset">accept-charset</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>Der Zeichensatz, der, falls angegeben, auf <code>"UTF-8"</code> sein muss.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/accesskey">accesskey</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Tastaturkürzel, um das Element zu aktivieren oder den Fokus darauf zu setzen.</td>
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
      <td>Legt die horizontale Ausrichtung des Elements fest.</td>
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
      <td>Gibt den Typ des Inhalts an, der durch den Link geladen wird.</td>
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
        Gibt an, ob die Steuerungen in diesem Formular standardmäßig ihre Werte automatisch durch den Browser vervollständigen lassen können.
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
            <strong>Hinweis:</strong> Dies ist ein Legacy-Attribut. Bitte verwenden Sie stattdessen die
            CSS {{ Cssxref("background-color") }}-Eigenschaft.
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
            <strong>Hinweis:</strong> Dies ist ein Legacy-Attribut. Bitte verwenden Sie stattdessen die
            CSS {{ Cssxref("border") }}-Eigenschaft.
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
        Aus der <a href="https://w3c.github.io/html-media-capture/#the-capture-attribute">Media Capture Spezifikation</a>,
        gibt an, dass eine neue Datei aufgenommen werden kann.
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
      <td>Wird häufig mit CSS verwendet, um Elemente mit gemeinsamen Eigenschaften zu gestalten.</td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>
        {{ HTMLElement("font") }}, {{ HTMLElement("hr") }}
      </td>
      <td>
        <p>
          Dieses Attribut setzt die Textfarbe mit entweder einem benannten Farbwert oder einem Farbwert im hexadezimalen Format #RRGGBB.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Dies ist ein Legacy-Attribut. Bitte verwenden Sie stattdessen die
            CSS {{ Cssxref("color") }}-Eigenschaft.
          </p>
        </div>
      </td>
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
        Das colspan-Attribut definiert die Anzahl der Spalten, die eine Zelle überspannen soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/content">content</a></code>
      </td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>
        Ein Wert, der mit <code>http-equiv</code> oder
        <code>name</code> je nach Kontext assoziiert ist.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/contenteditable">contenteditable</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Gibt an, ob der Inhalt des Elements bearbeitbar ist.</td>
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
        Gibt an, ob der Browser dem Benutzer Steuerungselemente für die Wiedergabe anzeigen soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/area#coords">coords</a></code>
      </td>
      <td>{{ HTMLElement("area") }}</td>
      <td>
        Eine Reihe von Werten, die die Koordinaten des Hotspot-Bereichs spezifizieren.
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
      <td>Wie das Element Cross-Origin-Anfragen behandelt</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/API/HTMLIFrameElement/csp">csp</a></code>
        {{experimental_inline}}
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>
        Bestimmt die Content-Security-Policy, die ein eingebettetes Dokument selbst durchsetzen muss.
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
      <td>Ermöglicht das Hinzufügen benutzerdefinierter Attribute zu einem HTML-Element.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/datetime">datetime</a></code>
      </td>
      <td>
        {{ HTMLElement("del") }}, {{ HTMLElement("ins") }},
        {{ HTMLElement("time") }}
      </td>
      <td>Gibt das Datum und die Uhrzeit an, die dem Element zugeordnet sind.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/img#decoding">decoding</a></code>
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>Bestimmt die bevorzugte Methode zur Dekodierung des Bildes.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/track#default">default</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td>
        Gibt an, dass die Spur aktiviert werden sollte, es sei denn, die Benutzerpräferenzen geben etwas anderes an.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/script#defer">defer</a></code>
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>
        Gibt an, dass das Skript ausgeführt werden sollte, nachdem die Seite geparst wurde.
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
        Legt die Textrichtung fest. Erlaubte Werte sind ltr (Left-To-Right) oder
        rtl (Right-To-Left)
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
        Gibt an, dass der Hyperlink zum Herunterladen einer Ressource verwendet werden soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/draggable">draggable</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Legt fest, ob das Element gezogen werden kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/form#enctype">enctype</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        Bestimmt den Inhaltstyp der Formulardaten, wenn die
        <code>method</code> POST ist.
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
        gibt an, welches Aktionslabel (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll. Das Attribut kann mit Formularelementen (wie dem Wert von <code>textarea</code>-Elementen) oder in Elementen in einem Bearbeitungsbereich (z. B. unter Verwendung des <code>contenteditable</code> Attributs) verwendet werden.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/elementtiming">elementtiming</a></code>
      </td>
      <td>
        {{htmlelement("img")}},
        {{SVGElement("image")}} Elemente innerhalb eines {{SVGElement("svg")}},
        Poster-Bilder von {{htmlelement("video")}} Elementen,
        Elemente, die ein {{cssxref("background-image")}} haben,
        und Elemente, die Textknoten enthalten, wie ein {{htmlelement("p")}}
      </td>
      <td>
        Gibt an, dass ein Element für die Verfolgung durch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekte unter Verwendung des <code>"element"</code>-Typs gekennzeichnet ist. Für weitere Details siehe das [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interface.
      </td>
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
        {{ HTMLElement("label") }},
        {{ HTMLElement("meter") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("output") }},
        {{ HTMLElement("progress") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Gibt an, welches Formular der Besitzer des Elements ist.</td>
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
        Gibt die Aktion des Elements an und überschreibt die im {{ HTMLElement("form") }} festgelegte Aktion.
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
        Wenn die Schaltfläche/das Eingabefeld eine {{Glossary("submit_button", "submit-Schaltfläche")}} ist (z. B. <code>type="submit"</code>),
        legt dieses Attribut den Kodierungstyp fest, der während der Formularübermittlung verwendet werden soll. Wenn
        dieses Attribut angegeben ist, überschreibt es das
        <code>enctype</code>-Attribut des Formularbesitzers der Schaltfläche.
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
        Wenn die Schaltfläche/das Eingabefeld eine {{Glossary("submit_button", "submit-Schaltfläche")}} ist (z. B. <code>type="submit"</code>),
        legt dieses Attribut die Übermittlungsmethode fest, die während der Formularübermittlung verwendet werden soll
        (<code>GET</code>, <code>POST</code> usw.). Wenn dieses Attribut
        angegeben ist, überschreibt es das <code>method</code>-Attribut des
        Formularbesitzers der Schaltfläche.
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
        Wenn die Schaltfläche/das Eingabefeld eine {{Glossary("submit_button", "submit-Schaltfläche")}} ist (z. B. <code>type="submit"</code>),
        gibt dieses boolesche Attribut an, dass das Formular bei der Übermittlung nicht validiert werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das
        <code>novalidate</code>-Attribut des Formularbesitzers der Schaltfläche.
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
        Wenn die Schaltfläche/das Eingabefeld eine {{Glossary("submit_button", "submit-Schaltfläche")}} ist (z. B. <code>type="submit"</code>),
        gibt dieses Attribut den Browserkontext an (z. B. Tab, Fenster
        oder Inline-Frame), in dem die Antwort angezeigt werden soll, die nach
        der Übermittlung des Formulars empfangen wird. Wenn dieses Attribut angegeben ist, überschreibt es das
        <code>target</code>-Attribut des Formularbesitzers der Schaltfläche.
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
        IDs der <code>&#x3C;th></code>-Elemente, die für dieses
        Element gelten.
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
          Bestimmt die Höhe der hier aufgeführten Elemente. Für alle anderen Elemente
          verwenden Sie die CSS-Eigenschaft {{cssxref("height")}}.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> In einigen Fällen, wie bei
            {{ HTMLElement("div") }}, ist dies ein Legacy-Attribut, bei dem
            die CSS-Eigenschaft {{ Cssxref("height") }} stattdessen
            verwendet werden sollte.
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
        Verhindert die Darstellung des angegebenen Elements, während die Kindelemente, z.B. Skriptelemente, aktiv bleiben.
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
      <td>Gibt die Sprache der verknüpften Ressource an.</td>
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
        Wird häufig mit CSS verwendet, um ein bestimmtes Element zu gestalten. Der Wert dieses
        Attributs muss eindeutig sein.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/Security/Subresource_Integrity">integrity</a></code>
      </td>
      <td>
        {{ HTMLElement("link") }}, {{ HTMLElement("script") }}
      </td>
      <td>
        <p>
          Gibt einen
          <a href="/de/docs/Web/Security/Subresource_Integrity">Subresource Integrity</a>-Wert an,
          der es Browsern ermöglicht, zu überprüfen, was sie abrufen.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/img#intrinsicsize"><code>intrinsicsize</code></a>
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>
        Dieses Attribut weist den Browser an, die tatsächliche intrinsische Größe des
        Bildes zu ignorieren und vorzutäuschen, dass es die im Attribut angegebene Größe hat.
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
        Gibt einen Hinweis auf die Art der Daten an, die der Benutzer möglicherweise eingibt, während er das Element oder dessen Inhalte bearbeitet. Das Attribut kann
        mit Formularelementen (wie dem Wert von <code>textarea</code>-Elementen) oder in Elementen in einem Bearbeitungsbereich (z. B. unter Verwendung des
        <code>contenteditable</code> Attributs) verwendet werden.
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
      <td>Gibt die Art der Texteinbahn an.</td>
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
      <td>Legt einen vom Benutzer lesbaren Titel des Elements fest.</td>
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
      <td>Legt die im Element verwendete Skriptsprache fest.</td>
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
      <td>Identifiziert eine Liste von vordefinierten Optionen, die dem Benutzer vorgeschlagen werden sollen.</td>
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
        Gibt an, ob das Medium nach dem Ende wieder von vorne beginnen soll, abzuspielen.
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
      <td>Definiert die maximale Anzahl an Zeichen, die im Element zulässig sind.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/minlength">minlength</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Definiert die minimale Anzahl an Zeichen, die im Element zulässig sind.</td>
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
        Gibt einen Hinweis auf das Medium an, für das die verknüpfte Ressource
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
        Gibt an, ob mehrere Werte in ein Eingabefeld vom Typ
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
        Gibt an, ob das Audio initial beim Laden der Seite stummgeschaltet wird.
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
        Name des Elements. Zum Beispiel wird es vom Server verwendet, um die
        Felder in Formularübermittlungen zu identifizieren.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/form#novalidate">novalidate</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        Dieses Attribut gibt an, dass das Formular bei der Übermittlung nicht validiert werden soll.
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
        Das <code>ping</code>-Attribut gibt eine leerzeichenseparierte Liste von URLs
        an, die benachrichtigt werden sollen, wenn ein Benutzer dem Hyperlink folgt.
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
      <td>Ein Boolean-Attribut, das angibt, dass das Video "inline" abgespielt werden soll; das bedeutet, innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs nicht impliziert, dass das Video immer im Vollbildmodus abgespielt wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/video#poster">poster</a></code>
      </td>
      <td>{{ HTMLElement("video") }}</td>
      <td>
        Eine URL, die auf ein Poster-Frame hinweist, das angezeigt werden soll, bis der Benutzer spielt oder springt.
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
        Gibt an, ob die gesamte Ressource, Teile davon oder nichts vorgeladen werden soll.
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
      <td>Legt fest, welcher Referrer beim Abrufen der Ressource gesendet wird.</td>
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
        Bestimmt die Beziehung des Zielobjekts zum Link-Objekt.
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
        anstelle einer aufsteigenden Reihenfolge.
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
        Verhindert, dass ein Dokument, das in einem iframe geladen wird, bestimmte Funktionen verwendet (wie das Absenden von Formularen oder das Öffnen neuer Fenster).
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
        <code><a href="/de/docs/Web/HTML/Reference/Elements/style#scoped">scoped</a></code>
        {{non-standard_inline}} {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("style") }}</td>
      <td></td>
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
        Definiert die Breite des Elements (in Pixeln). Wenn das <code>type</code>-Attribut des Elements
        <code>text</code> oder <code>password</code> ist, dann ist es die Anzahl der Zeichen.
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
      <td>Weist einem Element einen Slot in einem Shadow-DOM-Shadow-Baum zu.</td>
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
      <td>Definiert die erste Nummer, wenn sie nicht 1 ist.</td>
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
        Überschreibt die Standard-Tabulatorreihenfolge des Browsers und folgt der angegebenen Reihenfolge.
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
        Bestimmt, wo das verlinkte Dokument geöffnet werden soll (im Fall eines
        <code>&#x3C;a></code>-Elements) oder wo die empfangene Antwort
        angezeigt werden soll (im Fall eines <code>&#x3C;form></code>-Elements)
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/title">title</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>Text, der in einem Tooltip angezeigt wird, wenn über das Element gehärt wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/translate">translate</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Bestimmt, ob die Attributwerte eines Elements und die Werte ihrer
        <code><a href="https://dom.spec.whatwg.org/#text">Text</a></code>-Knotenkinder übersetzt werden sollen, wenn die Seite lokalisiert wird, oder ob sie unverändert bleiben sollen.
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
        Definiert einen Standardwert, der im Element beim Laden der Seite angezeigt wird.
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
            <strong>Hinweis:</strong> Für alle anderen Fälle, wie
            {{ HTMLElement("div") }}, ist dies ein Legacy-Attribut, bei dem
            die CSS-Eigenschaft {{ Cssxref("width") }} stattdessen verwendet werden sollte.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/textarea#wrap">wrap</a></code>
      </td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>Gibt an, ob der Text umbrochen werden soll.</td>
    </tr>
  </tbody>
</table>

## Inhalt versus IDL-Attribute

In HTML haben die meisten Attribute zwei Facetten: das **Inhaltsattribut** und das **IDL- (Interface Definition Language) Attribut**.

Das Inhaltsattribut ist das Attribut, das Sie aus dem Inhalt (dem HTML-Code) einstellen, und Sie können es über [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) oder [`element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) festlegen oder abrufen. Das Inhaltsattribut ist immer ein String, selbst wenn der erwartete Wert eine Ganzzahl sein sollte. Beispielsweise, um ein {{HTMLElement("input")}}-Element maximal `maxlength` auf 42 zu setzen, müssen Sie `setAttribute("maxlength", "42")` auf diesem Element aufrufen.

Das IDL-Attribut ist auch bekannt als JavaScript-Eigenschaft. Dies sind die Attribute, die Sie mit JavaScript-Eigenschaften wie `element.foo` lesen oder setzen können. Das IDL-Attribut wird immer das zugrunde liegende Inhaltsattribut verwenden (kann es aber umwandeln), um einen Wert zurückzugeben, wenn Sie ihn abrufen, und etwas im Inhaltsattribut speichern, wenn Sie ihn setzen. Mit anderen Worten, die IDL-Attribute spiegeln im Wesentlichen die Inhaltsattribute wider.

Die meiste Zeit geben IDL-Attribute ihre Werte so zurück, wie sie wirklich verwendet werden. Zum Beispiel ist der Standardtyp `type` für {{HTMLElement("input")}} Elemente "text", also wenn Sie `input.type="foobar"` setzen, wird das `<input>` Element vom Typ Text sein (in der Darstellung und im Verhalten), aber der Wert des "type" Inhaltsattributs wird "foobar" sein. Das `type` IDL-Attribut wird jedoch die Zeichenkette "text" zurückgeben.

IDL-Attribute sind nicht immer Zeichenketten; zum Beispiel ist `input.maxlength` eine Zahl (ein signierter langer Wert). Wenn Sie IDL-Attribute verwenden, lesen oder setzen Sie Werte des gewünschten Typs, also gibt `input.maxlength` immer eine Zahl zurück, und wenn Sie `input.maxlength` setzten, erwartet es eine Zahl. Wenn Sie einen anderen Typ übergeben, wird er gemäß den Standard-JavaScript-Regeln für die Typumwandlung automatisch in eine Zahl umgewandelt.

IDL-Attribute können [andere Typen reflektieren](https://html.spec.whatwg.org/multipage/urls-and-fetching.html) wie unsignierte Longs, URLs, Booleans usw. Leider gibt es keine klaren Regeln, und das Verhalten der IDL-Attribute in Verbindung mit ihren entsprechenden Inhaltsattributen hängt vom Attribut ab. Die meiste Zeit wird es [den in der Spezifikation festgelegten Regeln folgen](https://html.spec.whatwg.org/multipage/urls-and-fetching.html), aber manchmal nicht. HTML-Spezifikationen versuchen, dies so benutzerfreundlich wie möglich zu gestalten, aber aus verschiedenen Gründen (meist historischen) verhalten sich einige Attribute seltsam (`select.size` zum Beispiel), und Sie sollten die Spezifikationen lesen, um zu verstehen, wie genau sie sich verhalten.

## Boolesche Attribute

Einige Inhaltsattribute (z. B. `required`, `readonly`, `disabled`) werden [boolesche Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes) genannt. Ist ein boolesches Attribut vorhanden, ist sein Wert **true**, und wenn es fehlt, ist sein Wert **false**.

HTML definiert Einschränkungen für die zulässigen Werte von booleschen Attributen: Wenn das Attribut vorhanden ist, muss sein Wert entweder der leere String sein (gleichbedeutend damit, dass das Attribut keinen zugewiesenen Wert hat) oder ein Wert, der eine ASCII-Groß-/Kleinschreibung-tolerante Entsprechung des kanonischen Namens des Attributs ist, ohne führende oder nachfolgende Leerzeichen. Die folgenden Beispiele zeigen gültige Möglichkeiten, ein boolesches Attribut zu markieren:

```html-nolint
<div itemscope>This is valid HTML but invalid XML.</div>
<div itemscope=itemscope>This is also valid HTML but invalid XML.</div>
<div itemscope="">This is valid HTML and also valid XML.</div>
<div itemscope="itemscope">
  This is also valid HTML and XML, but perhaps a bit verbose.
</div>
```

Zur Klarstellung: Die Werte `"true"` und `"false"` sind bei booleschen Attributen nicht zulässig. Um einen falschen Wert darzustellen, muss das Attribut vollständig weggelassen werden. Diese Einschränkung beseitigt einige häufige Missverständnisse: Mit `checked="false"` beispielsweise würde das `checked`-Attribut des Elements als **true** interpretiert, da das Attribut vorhanden ist.

## Ereignis-Handler-Attribute

> [!WARNING]
> Die Verwendung von Ereignis-Handler-Inhaltsattributen wird nicht empfohlen. Die Mischung von HTML und JavaScript führt oft zu unwartbarem Code, und die Ausführung von Ereignis-Handler-Attributen kann auch durch Content-Sicherheitsrichtlinien blockiert werden.

Zusätzlich zu den in der obigen Tabelle aufgelisteten Attributen können globale [Ereignis-Handler](/de/docs/Web/Events/Event_handlers#using_onevent_properties) — wie [`onclick`](/de/docs/Web/API/Element/click_event) — auch als [Inhaltsattribute](#inhalt_versus_idl-attribute) auf allen Elementen angegeben werden.

Alle Ereignis-Handler-Attribute akzeptieren einen String. Der String wird verwendet, um eine [JavaScript-Funktion](/de/docs/Web/JavaScript/Reference/Functions) wie `function name(/*args*/) {body}` zu synthetisieren, wobei `name` der Name des Attributs ist und `body` der Wert des Attributs. Der Handler erhält die gleichen Parameter wie sein JavaScript-Ereignis-Handler-Pendant — die meisten Handler empfangen nur einen `event`-Parameter, während `onerror` fünf empfängt: `event`, `source`, `lineno`, `colno`, `error`. Dies bedeutet, dass Sie im Allgemeinen die `event`-Variable innerhalb des Attributs verwenden können.

```html
<div onclick="console.log(event)">Click me!</div>
<!-- The synthesized handler has a name; you can reference itself -->
<div onclick="console.log(onclick)">Click me!</div>
```

## Siehe auch

- [HTML-Elemente](/de/docs/Web/HTML/Reference/Elements)
