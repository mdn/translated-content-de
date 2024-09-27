---
title: HTML-Attributreferenz
short-title: Attributes
slug: Web/HTML/Attributes
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar("Attributes")}}

Elemente in HTML haben **Attribute**; dies sind zusätzliche Werte, die die Elemente konfigurieren oder ihr Verhalten auf verschiedene Weise anpassen, um den Kriterien der Benutzer zu entsprechen.

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
        <code><a href="/de/docs/Web/HTML/Attributes/accept">accept</a></code>
      </td>
      <td>
        {{ HTMLElement("form") }}, {{ HTMLElement("input") }}
      </td>
      <td>Liste der vom Server akzeptierten Typen, typischerweise ein Dateityp.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/form#accept-charset">accept-charset</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>Liste der unterstützten Zeichensätze.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/accesskey">accesskey</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>Tastenkombination, um das Element zu aktivieren oder den Fokus darauf zu setzen.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/form#action">action</a></code>
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
        <code><a href="/de/docs/Web/HTML/Element/iframe#allow">allow</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>Gibt eine Feature-Policy für das iframe an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/alt">alt</a></code>
      </td>
      <td>
        {{ HTMLElement("area") }},
        {{ HTMLElement("img") }}, {{ HTMLElement("input") }}
      </td>
      <td>Alternativtext, falls ein Bild nicht angezeigt werden kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/link#as">as</a></code>
      </td>
      <td>
        {{ HTMLElement("link") }}
      </td>
      <td>Gibt den Typ des vom Link geladenen Inhalts an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/script#async">async</a></code>
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>Führt das Skript asynchron aus.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/autocapitalize">autocapitalize</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Legt fest, ob Benutzereingaben automatisch großgeschrieben werden.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/autocomplete">autocomplete</a></code>
      </td>
      <td>
        {{ HTMLElement("form") }}, {{ HTMLElement("input") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>
        Gibt an, ob die Steuerungen in diesem Formular standardmäßig ihre Werte automatisch vom Browser vervollständigen lassen können.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/autoplay">autoplay</a></code>
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
        Gibt die URL einer Bilddatei an.
        <div class="note">
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
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Dies ist ein Legacy-Attribut. Verwenden Sie stattdessen die CSS-Eigenschaft {{ Cssxref("background-color") }}.
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
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Dies ist ein Legacy-Attribut. Verwenden Sie stattdessen die CSS-Eigenschaft {{ Cssxref("border") }}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/capture">capture</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>
        Aus der <a href="https://w3c.github.io/html-media-capture/#the-capture-attribute">Media-Capture-Spezifikation</a>,
        spezifiziert, dass eine neue Datei aufgenommen werden kann.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/meta#charset">charset</a></code>
      </td>
      <td>
        {{ HTMLElement("meta") }}
      </td>
      <td>Deklariert die Zeichenkodierung der Seite oder des Skripts.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/input#checked">checked</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }}
      </td>
      <td>Gibt an, ob das Element beim Laden der Seite ausgewählt sein soll.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/cite">cite</a></code>
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
        <code><a href="/de/docs/Web/HTML/Global_attributes/class">class</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
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
          Dieses Attribut setzt die Textfarbe entweder mit einem benannten Farbwert oder einem hexadezimalen #RRGGBB-Format.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Dies ist ein Legacy-Attribut. Verwenden Sie stattdessen die CSS-Eigenschaft {{ Cssxref("color") }}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/textarea#cols">cols</a></code>
      </td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>Definiert die Anzahl der Spalten in einem textarea.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/colspan">colspan</a></code>
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
        <code><a href="/de/docs/Web/HTML/Element/meta#content">content</a></code>
      </td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>
        Ein Wert, der in Abhängigkeit vom Kontext mit <code>http-equiv</code> oder
        <code>name</code> verbunden ist.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/contenteditable">contenteditable</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>Gibt an, ob der Inhalt des Elements bearbeitbar ist.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/controls">controls</a></code>
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
        <code><a href="/de/docs/Web/HTML/Element/area#coords">coords</a></code>
      </td>
      <td>{{ HTMLElement("area") }}</td>
      <td>
        Eine Reihe von Werten, die die Koordinaten des Hotspot-Bereichs angeben.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/crossorigin">crossorigin</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("link") }}, {{ HTMLElement("script") }},
        {{ HTMLElement("video") }}
      </td>
      <td>Wie das Element mit Cross-Origin-Anfragen umgeht.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/API/HTMLIFrameElement/csp">csp</a></code>
        {{experimental_inline}}
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>
        Gibt die Content-Security-Policy an, die ein eingebettetes Dokument umsetzen muss.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/object#data">data</a></code>
      </td>
      <td>{{ HTMLElement("object") }}</td>
      <td>Gibt die URL der Ressource an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/data-*">data-*</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>Ermöglicht die Anbindung benutzerdefinierter Attribute an ein HTML-Element.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/datetime">datetime</a></code>
      </td>
      <td>
        {{ HTMLElement("del") }}, {{ HTMLElement("ins") }},
        {{ HTMLElement("time") }}
      </td>
      <td>Gibt das Datum und die Uhrzeit an, die mit dem Element verbunden sind.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/img#decoding">decoding</a></code>
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>Gibt die bevorzugte Methode zur Dekodierung des Bildes an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/track#default">default</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td>
        Gibt an, dass der Track aktiviert sein sollte, es sei denn, die Benutzerpräferenzen deuten auf etwas anderes hin.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/script#defer">defer</a></code>
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>
        Gibt an, dass das Skript ausgeführt werden sollte, nachdem die Seite analysiert wurde.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/dir">dir</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Definiert die Textrichtung. Erlaubte Werte sind ltr (Links-nach-Rechts) oder rtl (Rechts-nach-Links)
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/dirname">dirname</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/disabled">disabled</a></code>
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
        <code><a href="/de/docs/Web/HTML/Attributes/download">download</a></code>
      </td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td>
        Gibt an, dass der Hyperlink zum Herunterladen einer Ressource verwendet werden soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/draggable">draggable</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>Definiert, ob das Element gezogen werden kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/form#enctype">enctype</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        Definiert den Inhaltstyp der Formulardaten, wenn die
        <code>method</code> POST ist.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/enterkeyhint">enterkeyhint</a></code>
      </td>
      <td>
        {{ HTMLElement("textarea") }},
        <a href="/de/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code></a>
      </td>
      <td>
        Das <a href="https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute"><code>enterkeyhint</code></a>-Attribut spezifiziert, welches Aktionslabel (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll. Das Attribut kann mit Formularelementen (wie dem Wert von <code>textarea</code>-Elementen) oder in Elementen in einem Bearbeitungshost verwendet werden (z.B. durch das <code>contenteditable</code>-Attribut).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/for">for</a></code>
      </td>
      <td>
        {{ HTMLElement("label") }},
        {{ HTMLElement("output") }}
      </td>
      <td>Beschreibt Elemente, die zu diesem gehören.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/form">form</a></code>
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
      <td>Gibt das Formular an, das der Besitzer des Elements ist.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/formaction">formaction</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("button") }}
      </td>
      <td>
        Gibt die Aktion des Elements an und überschreibt die im {{ HTMLElement("form") }} definierte Aktion.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/formenctype">formenctype</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        Wenn der Button/das Input ein [Submit-Button](/de/docs/Glossary/submit_button) ist (z.B. <code>type="submit"</code>),
        setzt dieses Attribut den Kodierungstyp fest, der bei der Formularübermittlung verwendet werden soll. Wenn
        dieses Attribut angegeben ist, überschreibt es das
        <code>enctype</code>-Attribut des Formularbesitzers des Buttons.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/formmethod">formmethod</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        Wenn der Button/das Input ein [Submit-Button](/de/docs/Glossary/submit_button) ist (z.B. <code>type="submit"</code>),
        setzt dieses Attribut die zu verwendende Übermittlungsmethode fest
        (<code>GET</code>, <code>POST</code>, etc.). Wenn dieses Attribut
        angegeben ist, überschreibt es das <code>method</code>-Attribut des
        Formularbesitzers des Buttons.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/formnovalidate">formnovalidate</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        Wenn der Button/das Input ein [Submit-Button](/de/docs/Glossary/submit_button) ist (z.B. <code>type="submit"</code>),
        gibt dieses boolesche Attribut an, dass das Formular nicht validiert
        werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben
        ist, überschreibt es das
        <code>novalidate</code>-Attribut des Formularbesitzers des Buttons.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/formtarget">formtarget</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        Wenn der Button/das Input ein [Submit-Button](/de/docs/Glossary/submit_button) ist (z.B. <code>type="submit"</code>),
        gibt dieses Attribut den Browsing-Kontext an (z.B. Tab, Fenster
        oder Inline-Frame), in dem die Antwort angezeigt wird, die nach
        dem Senden des Formulars empfangen wird. Wenn dieses Attribut angegeben
        ist, überschreibt es das <code>target</code>-Attribut des
        Formularbesitzers des Buttons.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/headers">headers</a></code>
      </td>
      <td>
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>
        IDs der <code>&#x3C;th></code>-Elemente, die auf dieses
        Element angewendet werden.
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
          Gibt die Höhe der hier gelisteten Elemente an. Für alle anderen Elemente
          verwenden Sie die CSS {{cssxref("height")}}-Eigenschaft.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> In einigen Fällen, wie
            {{ HTMLElement("div") }}, ist dies ein Legacy-Attribut, in
            dem Fall sollte die CSS-Eigenschaft {{ Cssxref("height") }} stattdessen
            verwendet werden.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/hidden">hidden</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Verhindert das Rendern des angegebenen Elements, während untergeordnete Elemente, z. B.
        Skriptelemente, aktiv bleiben.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/meter#high">high</a></code>
      </td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>Gibt die untere Grenze des oberen Bereichs an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/href">href</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("base") }}, {{ HTMLElement("link") }}
      </td>
      <td>Die URL einer verlinkten Ressource.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/hreflang">hreflang</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("link") }}
      </td>
      <td>Gibt die Sprache der verlinkten Ressource an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/meta#http-equiv">http-equiv</a></code>
      </td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>Definiert eine Pragmadirektive.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/id">id</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Oft mit CSS verwendet, um ein bestimmtes Element zu stylen. Der Wert dieses
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
          <a href="/de/docs/Web/Security/Subresource_Integrity">Subresource-Integrity</a>-Wert an, der es Browsern ermöglicht, das, was sie abrufen, zu überprüfen.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/HTML/Element/img#intrinsicsize"><code>intrinsicsize</code></a>
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>
        Dieses Attribut sagt dem Browser, die tatsächliche intrinsische Größe des
        Bildes zu ignorieren und es vorgibt, dass es die im Attribut angegebene Größe hat.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes/inputmode"><code>inputmode</code></a>
      </td>
      <td>
        {{ HTMLElement("textarea") }},
        <a href="/de/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code></a>
      </td>
      <td>
        Bietet einen Hinweis auf die Art der Daten, die der Benutzer möglicherweise eingibt, während
        er das Element oder dessen Inhalte bearbeitet. Das Attribut kann mit
        Formularelementen (wie dem Wert der
        <code>textarea</code>-Elemente) oder in Elementen in einem Bearbeitungshost
        verwendet werden (z.B. durch das <code>contenteditable</code>-Attribut).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/img#ismap">ismap</a></code>
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>Gibt an, dass das Bild Teil einer serverseitigen Imagemap ist.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/track#kind">kind</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td>Gibt die Art des Texttracks an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/label">label</a></code>
      </td>
      <td>
        {{ HTMLElement("optgroup") }},
        {{ HTMLElement("option") }},
        {{ HTMLElement("track") }}
      </td>
      <td>Gibt einen benutzerlesbaren Titel des Elements an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/lang">lang</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>Definiert die in dem Element verwendete Sprache.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/script#language">language</a></code>
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
        <code><a href="/de/docs/Web/HTML/Element/input#list">list</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>Identifiziert eine Liste vordefinierter Optionen, die dem Benutzer vorgeschlagen werden sollen.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/loop">loop</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("marquee") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        Gibt an, ob das Medium von vorne beginnen soll, wenn es beendet ist.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/meter#low">low</a></code>
      </td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>Gibt die obere Grenze des unteren Bereichs an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/max">max</a></code>
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
        <code><a href="/de/docs/Web/HTML/Attributes/maxlength">maxlength</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Definiert die maximale Anzahl von Zeichen, die im Element zulässig sind.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/minlength">minlength</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Definiert die minimale Anzahl von Zeichen, die im Element zulässig sind.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/media">media</a></code>
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
        <code><a href="/de/docs/Web/HTML/Element/form#method">method</a></code>
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
        <code><a href="/de/docs/Web/HTML/Attributes/min">min</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("meter") }}
      </td>
      <td>Gibt den minimal zulässigen Wert an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/multiple">multiple</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("select") }}
      </td>
      <td>
        Gibt an, ob mehrere Werte in ein Input vom Typ
        <code>email</code> oder <code>file</code> eingegeben werden können.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/muted">muted</a></code>
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
        <code><a href="/de/docs/Web/HTML/Attributes/name">name</a></code>
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
        Name des Elements. Zum Beispiel vom Server verwendet, um die Felder bei Formulareinsendungen zu identifizieren.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/form#novalidate">novalidate</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        Dieses Attribut gibt an, dass das Formular beim Absenden nicht validiert werden soll.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/open">open</a></code>
      </td>
      <td>
        {{ HTMLElement("details") }},
        {{ HTMLElement("dialog") }}
      </td>
      <td>
        Gibt an, ob der Inhalt derzeit sichtbar ist (im Fall eines
        <code>&#x3C;details></code>-Elements) oder ob der Dialog aktiv ist
        und interaktiv ist (im Fall eines
        <code>&#x3C;dialog></code>-Elements).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/meter#optimum">optimum</a></code>
      </td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>Gibt den optimalen numerischen Wert an.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/pattern">pattern</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>
        Definiert einen regulären Ausdruck, gegen den der Wert des Elements validiert wird.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/a#ping">ping</a></code>
      </td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td>
        Das <code>ping</code>-Attribut spezifiziert eine durch Leerzeichen getrennte Liste von URLs,
        die benachrichtigt werden sollen, wenn ein Benutzer dem Hyperlink folgt.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/placeholder">placeholder</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Gibt dem Benutzer einen Hinweis darauf, was in das Feld eingegeben werden kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/video#playsinline">playsinline</a></code>
      </td>
      <td>
        {{ HTMLElement("video") }}
      </td>
      <td>Ein boolesches Attribut, das angibt, dass das Video "inline" abgespielt werden soll, das heißt, im Abspielbereich des Elements. Beachten Sie, dass das Fehlen dieses Attributs nicht impliziert, dass das Video immer im Vollbildmodus abgespielt wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/video#poster">poster</a></code>
      </td>
      <td>{{ HTMLElement("video") }}</td>
      <td>
        Eine URL, die auf einen Poster-Frame verweist, der angezeigt werden soll, bis der Benutzer den Film abspielt oder vorspult.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/preload">preload</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        Gibt an, ob die gesamte Ressource, Teile davon oder nichts vorgeladen werden sollte.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/readonly">readonly</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Gibt an, ob das Element bearbeitet werden kann.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/referralpolicy">referrerpolicy</a></code>
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
        <code><a href="/de/docs/Web/HTML/Attributes/rel">rel</a></code>
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
        <code><a href="/de/docs/Web/HTML/Attributes/required">required</a></code>
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
        <code><a href="/de/docs/Web/HTML/Element/ol#reversed">reversed</a></code>
      </td>
      <td>{{ HTMLElement("ol") }}</td>
      <td>
        Gibt an, ob die Liste in absteigender Reihenfolge angezeigt werden soll
        statt in aufsteigender Reihenfolge.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles">role</a></code>
      </td>
      <td><a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a></td>
      <td>Definiert eine explizite Rolle für ein Element zur Verwendung durch unterstützende Technologien.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/textarea#rows">rows</a></code>
      </td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>Definiert die Anzahl der Zeilen in einem Textbereich.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/rowspan">rowspan</a></code>
      </td>
      <td>
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>Definiert die Anzahl der Reihen, die eine Tabellenzelle überspannen soll.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/iframe#sandbox">sandbox</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>
        Stoppt ein in einem iframe geladenes Dokument, bestimmte Funktionen (wie das Absenden von Formularen oder das Öffnen neuer Fenster) zu verwenden.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/th#scope">scope</a></code>
      </td>
      <td>{{ HTMLElement("th") }}</td>
      <td>
        Definiert die Zellen, auf die der Header-Test (definiert im
        <code>th</code>-Element) sich bezieht.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/style#scoped">scoped</a></code>
        {{non-standard_inline}} {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("style") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/option#selected">selected</a></code>
      </td>
      <td>{{ HTMLElement("option") }}</td>
      <td>Definiert einen Wert, der beim Laden der Seite ausgewählt wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/shape">shape</a></code>
      </td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/size">size</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("select") }}
      </td>
      <td>
        Definiert die Breite des Elements (in Pixeln). Wenn das
        <code>type</code>-Attribut des Elements <code>text</code> oder
        <code>password</code> ist, dann ist es die Anzahl der Zeichen.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/sizes">sizes</a></code>
      </td>
      <td>
        {{ HTMLElement("link") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("source") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/slot">slot</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>Weist einem Element einen Slot in einem Shadow-DOM-Shadow-Tree zu.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/span">span</a></code>
      </td>
      <td>
        {{ HTMLElement("col") }},
        {{ HTMLElement("colgroup") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/spellcheck">spellcheck</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>Gibt an, ob die Rechtschreibprüfung für das Element zulässig ist.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/src">src</a></code>
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
        <code><a href="/de/docs/Web/HTML/Element/iframe#srcdoc">srcdoc</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/track#srclang">srclang</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/srcset">srcset</a></code>
      </td>
      <td>
        {{ HTMLElement("img") }}, {{ HTMLElement("source") }}
      </td>
      <td>Ein oder mehrere responsive Bildkandidaten.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/ol#start">start</a></code>
      </td>
      <td>{{ HTMLElement("ol") }}</td>
      <td>Definiert die erste Nummer, wenn diese ungleich 1 ist.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/step">step</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/style">style</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>Definiert CSS-Stile, die zuvor gesetzte Stile überschreiben.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/table#summary">summary</a></code>
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("table") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Überschreibt die Standardeinstellung der Tabulatorreihenfolge im Browser und folgt der angegebenen Reihenfolge.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/target">target</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("base") }}, {{ HTMLElement("form") }}
      </td>
      <td>
        Gibt an, wo das verlinkte Dokument (im Fall eines
        <code>&#x3C;a></code>-Elements) geöffnet oder wo die Antwort angezeigt
        wird, die nach dem Absenden des Formulars empfangen wird
        (im Fall eines <code>&#x3C;form></code>-Elements).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/title">title</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>Text, der in einem Tooltip angezeigt wird, wenn über das Element geschwebt wird.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Global_attributes/translate">translate</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Global_attributes">Globales Attribut</a>
      </td>
      <td>
        Gibt an, ob die Attributwerte eines Elements und die Werte seiner
        <code><a href="https://dom.spec.whatwg.org/#text">Text</a></code>-Kindknoten beim Lokalisieren der Seite übersetzt
        werden sollen oder ob sie unverändert bleiben sollen.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/type">type</a></code>
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
        <code><a href="/de/docs/Web/HTML/Attributes/usemap">usemap</a></code>
      </td>
      <td>
        {{ HTMLElement("img") }}, {{ HTMLElement("input") }},
        {{ HTMLElement("object") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Attributes/value">value</a></code>
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
        <code><a href="/de/docs/Web/HTML/Attributes/width">width</a></code>
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
          Für die hier aufgeführten Elemente wird die Breite des Elements festgelegt.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Für alle anderen Fälle, wie
            {{ HTMLElement("div") }}, handelt es sich um ein Legacy-Attribut, in
            diesem Fall sollte die CSS-Eigenschaft {{ Cssxref("width") }} verwendet werden.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/textarea#wrap">wrap</a></code>
      </td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>Gibt an, ob der Text umbrochen werden soll.</td>
    </tr>
  </tbody>
</table>

## Inhalt vs. IDL-Attribute

In HTML haben die meisten Attribute zwei Gesichter: das **Inhaltsattribut** und das **IDL (Interface Definition Language) Attribut**.

Das Inhaltsattribut ist das Attribut, das Sie aus dem Inhalt (dem HTML-Code) setzen, und Sie können es über [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) oder [`element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) setzen oder abrufen. Das Inhaltsattribut ist immer ein String, selbst wenn der erwartete Wert eine Ganzzahl sein sollte. Um beispielsweise das `maxlength`-Attribut eines {{HTMLElement("input")}}-Elements auf 42 mit dem Inhaltsattribut zu setzen, müssen Sie `setAttribute("maxlength", "42")` für dieses Element aufrufen.

Das IDL-Attribut ist auch als JavaScript-Eigenschaft bekannt. Dies sind die Attribute, die Sie mit JavaScript-Eigenschaften wie `element.foo` lesen oder setzen können. Das IDL-Attribut wird immer das zugrunde liegende Inhaltsattribut verwenden (aber möglicherweise transformieren), um einen Wert zurückzugeben, wenn Sie es abrufen, und etwas im Inhaltsattribut speichern, wenn Sie es setzen. Mit anderen Worten, die IDL-Attribute reflektieren im Wesentlichen die Inhaltsattribute.

Meistens geben die IDL-Attribute ihre Werte so zurück, wie sie wirklich verwendet werden. Zum Beispiel ist der Standard-`type` für {{HTMLElement("input")}}-Elemente "text", sodass das `<input>`-Element vom Typ Text ist (im Aussehen und im Verhalten), wenn Sie `input.type="foobar"` setzen, aber der Wert des "type"-Inhaltsattributs "foobar" sein wird. Das `type`-IDL-Attribut gibt jedoch die Zeichenfolge "text" zurück.

IDL-Attribute sind nicht immer Zeichenfolgen; beispielsweise ist `input.maxlength` eine Zahl (ein signierter Long). Beim Verwenden von IDL-Attributen lesen oder setzen Sie Werte des gewünschten Typs, sodass `input.maxlength` immer eine Zahl zurückgibt und wenn Sie `input.maxlength` setzen, erwartet es eine Zahl. Wenn Sie einen anderen Typ übergeben, wird dieser gemäß den Standards der JavaScript-Konvertierungsregeln automatisch in eine Zahl umgewandelt.

IDL-Attribute können [andere Typen widerspiegeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html) wie unsignierte Longs, URLs, Booleans usw. Leider gibt es keine klaren Regeln, und die Art und Weise, wie IDL-Attribute in Verbindung mit ihren entsprechenden Inhaltsattributen verhalten, hängt vom Attribut ab. Meistens wird es den [regeln laid out in der Spezifikation](https://html.spec.whatwg.org/multipage/urls-and-fetching.html) folgen, aber manchmal tut es das nicht. HTML-Spezifikationen versuchen, dies so entwicklerfreundlich wie möglich zu gestalten, aber aus verschiedenen Gründen (hauptsächlich historisch) verhalten sich einige Attribute merkwürdig (`select.size` zum Beispiel), und Sie sollten die Spezifikationen lesen, um genau zu verstehen, wie sie sich verhalten.

## Boolesche Attribute

Einige Inhaltsattribute (z.B. `required`, `readonly`, `disabled`) werden [boolesche Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes) genannt. Wenn ein boolesches Attribut vorhanden ist, ist sein Wert **true**, und wenn es fehlt, ist sein Wert **false**.

HTML definiert Einschränkungen für die erlaubten Werte boolescher Attribute: Wenn das Attribut vorhanden ist, muss sein Wert entweder die leere Zeichenfolge sein (gleichbedeutend damit, dass das Attribut keinen zugewiesenen Wert hat) oder ein Wert, der eine ASCII-fallunabhängige Übereinstimmung mit dem kanonischen Namen des Attributs ohne führende oder nachfolgende Leerzeichen ist. Die folgenden Beispiele sind gültige Möglichkeiten, ein boolesches Attribut zu markieren:

```html-nolint
<div itemscope>This is valid HTML but invalid XML.</div>
<div itemscope=itemscope>This is also valid HTML but invalid XML.</div>
<div itemscope="">This is valid HTML and also valid XML.</div>
<div itemscope="itemscope">
  This is also valid HTML and XML, but perhaps a bit verbose.
</div>
```

Um klarzustellen: Die Werte `"true"` und `"false"` sind bei booleschen Attributen nicht erlaubt. Um einen falschen Wert darzustellen, muss das Attribut vollständig weggelassen werden. Diese Einschränkung klärt einige häufige Missverständnisse auf: Mit `checked="false"` wäre zum Beispiel das `checked`-Attribut des Elements als **true** interpretiert, da das Attribut vorhanden ist.

## Ereignishandler-Attribute

> [!WARNING]
> Die Verwendung von Ereignishandler-Inhaltsattributen wird nicht empfohlen. Die Kombination von HTML und JavaScript führt oft zu unwartbarem Code und die Ausführung von Ereignishandler-Attributen kann ebenfalls durch Inhalts-Sicherheitsrichtlinien blockiert werden.

Neben den oben in der Tabelle aufgeführten Attributen können globale [Ereignishandler](/de/docs/Web/Events/Event_handlers#using_onevent_properties) — wie [`onclick`](/de/docs/Web/API/Element/click_event) — auch als [Inhaltsattribute](#inhalt_vs._idl-attribute) für alle Elemente angegeben werden.

Alle Ereignishandler-Attribute akzeptieren eine Zeichenfolge. Die Zeichenfolge wird verwendet, um eine [JavaScript-Funktion](/de/docs/Web/JavaScript/Reference/Functions) wie `function name(/*args*/) {body}` zu erzeugen, wobei `name` der Name des Attributs und `body` der Wert des Attributs ist. Der Handler erhält die gleichen Parameter wie sein JavaScript-Ereignishandler-Pendant — die meisten Handler erhalten nur einen `event`-Parameter, während `onerror` fünf erhält: `event`, `source`, `lineno`, `colno`, `error`. Das bedeutet, dass Sie im Allgemeinen die Variable `event` innerhalb des Attributs verwenden können.

```html
<div onclick="console.log(event)">Click me!</div>
<!-- The synthesized handler has a name; you can reference itself -->
<div onclick="console.log(onclick)">Click me!</div>
```

## Siehe auch

- [HTML-Elemente](/de/docs/Web/HTML/Element)
