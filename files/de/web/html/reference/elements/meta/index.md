---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Reference/Elements/meta
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{HTMLSidebar}}

Das **`<meta>`** [HTML](/de/docs/Web/HTML) Element repräsentiert {{Glossary("Metadata", "Metadaten")}}, die nicht durch andere meta-verwandte Elemente dargestellt werden können, wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}}.

Der Typ der Metadaten, die durch das `<meta>` Element bereitgestellt werden, kann einer der folgenden sein:

- Wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut gesetzt ist, bietet das `<meta>` Element _dokumentenbezogene Metadaten_, die für die ganze Seite gelten.
- Wenn das [`http-equiv`](#http-equiv) Attribut gesetzt ist, fungiert das `<meta>` Element als _Pragmadirektive_, um Direktiven zu simulieren, die sonst durch einen HTTP-Header gegeben werden könnten.
- Wenn das [`charset`](#charset) Attribut gesetzt ist, ist das `<meta>` Element eine _Zeichencode-Deklaration_, die die Zeichenkodierung angibt, in der das Dokument kodiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop) Attribut gesetzt ist, bietet das `<meta>` Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> Das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut hat eine spezifische Bedeutung für das `<meta>` Element. Das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop) Attribut darf nicht auf einem `<meta>` Element gesetzt sein, das ein [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name), [`http-equiv`](#http-equiv) oder [`charset`](#charset) Attribut enthält.

- `charset`
  - : Dieses Attribut deklariert die Zeichenkodierung des Dokuments. Wenn das Attribut vorhanden ist, muss sein Wert eine ASCII-fallunempfindliche Übereinstimmung für die Zeichenkette `"utf-8"` sein, da UTF-8 die einzige gültige Kodierung für HTML5-Dokumente ist. `<meta>` Elemente, die eine Zeichenkodierung deklarieren, müssen vollständig innerhalb der ersten 1024 Bytes des Dokuments platziert werden.
- `content`
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](#http-equiv) oder das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut, je nachdem, welches verwendet wird.
- `http-equiv`

  - : Definiert eine Pragmadirektive. Der Name des Attributs, kurz für `http-equivalent`, ist so, weil alle erlaubten Werte die Namen bestimmter HTTP-Header sind:

    - `content-security-policy`
      - : Ermöglicht es den Seitenautoren, eine [Inhaltspolitik](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) für die aktuelle Seite zu definieren. Inhaltspolitiken spezifizieren hauptsächlich erlaubte Serverursprünge und Skriptendpunkte, die helfen, Angriffe durch Cross-Site-Scripting zu verhindern.
        Siehe {{HTTPHeader("Content-Security-Policy")}} für weitere Informationen.
    - `content-type`
      - : Deklariert den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) und die Zeichenkodierung des Dokuments. Das `content`-Attribut muss den Wert `"text/html; charset=utf-8"` haben, wenn es angegeben wird. Dies ist gleichbedeutend mit einem `<meta>` Element mit dem spezifizierten [`charset`](#charset) Attribut und unterliegt derselben Platzierungsrestriktion innerhalb des Dokuments. **Hinweis:** Kann nur in Dokumenten verwendet werden, die mit einem `text/html`-MIME-Typ bedient werden — nicht in Dokumenten, die mit einem XML-MIME-Typ bedient werden.
        Siehe auch {{HTTPHeader("Content-Type")}}.
    - `default-style`
      - : Setzt den Namen des Standard-[CSS-Stilblatts](/de/docs/Web/CSS).
    - `x-ua-compatible`
      - : Wenn angegeben, muss das `content` Attribut den Wert `"IE=edge"` haben. Benutzeragenten sind dazu verpflichtet, diese Pragmadirektive zu ignorieren.
    - `refresh`

      - : Diese Anweisung gibt an:

        - Die Anzahl der Sekunden, bis die Seite neu geladen werden soll - wenn der Wert des [`content`](#content) Attributs eine nicht-negative ganze Zahl ist.
        - Die Anzahl der Sekunden, bis die Seite zu einer anderen umgeleitet werden soll - wenn der Wert des [`content`](#content) Attributs eine nicht-negative ganze Zahl gefolgt von `;url=` und einer gültigen URL ist.

        Der Timer beginnt, wenn die Seite _vollständig geladen_ ist, das heißt, nachdem sowohl das [`load`](/de/docs/Web/API/Window/load_event) als auch das [`pageshow`](/de/docs/Web/API/Window/pageshow_event) Ereignis ausgelöst wurde.

        Siehe auch {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Seiten, die mit einem `refresh`-Wert eingestellt sind, laufen Gefahr, dass das Zeitintervall zu kurz ist. Menschen, die mit Hilfe von unterstützender Technologie wie einem Bildschirmleser navigieren, könnten nicht in der Lage sein, den Inhalt der Seite vollständig zu lesen und zu verstehen, bevor sie automatisch umgeleitet werden. Die abrupte, unangekündigte Aktualisierung des Seiteninhalts kann auch desorientierend für Menschen mit Sehbehinderungen sein.
        >
        > - [MDN Verständnis von WCAG, Leitlinie 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Verständnis von WCAG, Leitlinie 3.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Verständnis des Erfolgs-Kriteriums 2.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Verständnis des Erfolgs-Kriteriums 2.2.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Verständnis des Erfolgs-Kriteriums 3.2.5 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `media`
  - : Das `media` Attribut definiert, auf welche Medien die im `content` Attribut definierte Themenfarbe angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig `all` ist, wenn das Attribut fehlt. Dieses Attribut ist nur relevant, wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut des Elements auf [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) gesetzt ist. Andernfalls hat es keine Wirkung und sollte nicht enthalten sein.
- [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)
  - : Die `name` und `content` Attribute können zusammen verwendet werden, um Dokument-Metadaten in Form von Namen-Wert-Paaren bereitzustellen, wobei das `name` Attribut den Metadaten-Namen und das `content` Attribut den Wert angibt.

## Beispiele

### Setzen einer Meta-Beschreibung

Das folgende `<meta>` Tag bietet eine `description` als Metadaten für die Webseite:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

### Setzen einer Seitenumleitung

Das folgende Beispiel verwendet `http-equiv="refresh"`, um den Browser aufzufordern, eine Umleitung auszuführen. Das `content="3;url=https://www.mozilla.org"` Attribut wird die Seite nach 3 Sekunden zu `https://www.mozilla.org` umleiten:

```html
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadateninhalte</a
        >. Wenn das <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop"><code>itemprop</code></a> Attribut vorhanden ist:
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Wortlautinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Anfangstag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        <ul>
          <li>
            <code>&#x3C;meta charset></code>,
            <code>&#x3C;meta http-equiv></code>: ein
            {{HTMLElement("head")}} Element. Wenn das
            <a href="#http-equiv"><code>http-equiv</code></a> keine
            Kodierungsdeklaration ist, kann es auch innerhalb eines
            {{HTMLElement("noscript")}} Elements sein, das sich selbst innerhalb eines
            <code>&#x3C;head></code> Elements befindet.
          </li>
          <li>
            <code>&#x3C;meta name></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >Metadateninhalte akzeptiert</a
            >.
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >Metadateninhalte akzeptiert</a
            >
            oder
            <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
              >Flussinhalte</a
            >.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th>DOM-Schnittstelle</th>
      <td>[`HTMLMetaElement`](/de/docs/Web/API/HTMLMetaElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Standard-Metadaten-Namen](/de/docs/Web/HTML/Reference/Elements/meta/name)
- [Lernen: `<meta>`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
- [Das Viewport-Meta-Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
