---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Reference/Elements/meta
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

Das **`<meta>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert {{Glossary("Metadata", "Metadaten")}}, die nicht durch andere mit Metadaten verwandte Elemente wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}} dargestellt werden können.

Der Typ der von dem `<meta>`-Element bereitgestellten Metadaten kann einer der folgenden sein:

- Wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut gesetzt ist, bietet das `<meta>`-Element _dokumentenbezogene Metadaten_, die für die gesamte Seite gelten.
- Wenn das [`http-equiv`](#http-equiv)-Attribut gesetzt ist, fungiert das `<meta>`-Element als _Pragma-Direktive_, um Direktiven zu simulieren, die sonst durch einen HTTP-Header gegeben werden könnten.
- Wenn das [`charset`](#charset)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Zeichensatz-Deklaration_, die die Zeichencodierung angibt, in der das Dokument codiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut gesetzt ist, bietet das `<meta>`-Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> Das [`name`](#name)-Attribut hat eine spezifische Bedeutung für das `<meta>`-Element. Das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut darf nicht auf einem `<meta>`-Element gesetzt sein, das ein [`name`](#name)-, [`http-equiv`](#http-equiv)- oder [`charset`](#charset)-Attribut enthält.

- `charset`
  - : Dieses Attribut deklariert die Zeichencodierung des Dokuments. Wenn das Attribut vorhanden ist, muss sein Wert ein ASCII-Groß-/Kleinschreibung-unempfindlicher Abgleich für die Zeichenkette `"utf-8"` sein, da UTF-8 die einzige gültige Codierung für HTML5-Dokumente ist. `<meta>`-Elemente, die eine Zeichencodierung deklarieren, müssen vollständig innerhalb der ersten 1024 Bytes des Dokuments platziert werden.
- `content`
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](#http-equiv)- oder [`name`](#name)-Attribut, je nachdem, welches verwendet wird.
- `http-equiv`

  - : Definiert eine Pragma-Direktive. Der Name des Attributs, kurz für `http-equivalent`, kommt daher, dass alle zulässigen Werte Namen von bestimmten HTTP-Headern sind:

    - `content-security-policy`
      - : Ermöglicht es Seitenautoren, eine [Inhaltsrichtlinie](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) für die aktuelle Seite zu definieren. Inhaltsrichtlinien spezifizieren hauptsächlich erlaubte Serverherkünfte und Skript-Endpunkte, die helfen, Cross-Site-Scripting-Angriffe zu verhindern.
        Siehe {{HTTPHeader("Content-Security-Policy")}} für mehr Informationen.
    - `content-type`
      - : Deklariert den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) und die Zeichencodierung des Dokuments. Das `content`-Attribut muss den Wert `"text/html; charset=utf-8"` haben, wenn es spezifiziert ist. Dies ist gleichbedeutend mit einem `<meta>`-Element mit dem [`charset`](#charset)-Attribut und unterliegt den gleichen Einschränkungen bezüglich der Platzierung innerhalb des Dokuments. **Hinweis:** Kann nur in Dokumenten verwendet werden, die mit `text/html` bedient werden – nicht in Dokumenten, die mit einem XML-MIME-Typ bedient werden.
        Siehe auch {{HTTPHeader("Content-Type")}}.
    - `default-style`
      - : Setzt den Namen des standardmäßigen [CSS-Stilsheets](/de/docs/Web/CSS).
    - `x-ua-compatible`
      - : Wenn spezifiziert, muss das `content`-Attribut den Wert `"IE=edge"` haben. Benutzeragenten sind verpflichtet, diese Pragma-Direktive zu ignorieren.
    - `refresh`

      - : Diese Anweisung spezifiziert:

        - Die Anzahl der Sekunden bis die Seite neu geladen werden sollte - wenn der Wert des [`content`](#content)-Attributs eine nicht-negative Ganze Zahl ist.
        - Die Anzahl der Sekunden bis die Seite zu einer anderen umleiten sollte - wenn der Wert des [`content`](#content)-Attributs eine nicht-negative Ganze Zahl gefolgt von `;url=` und einer gültigen URL ist.

        Der Timer startet, wenn die Seite _vollständig geladen_ ist, das heißt, nach den Ereignissen [`load`](/de/docs/Web/API/Window/load_event) und [`pageshow`](/de/docs/Web/API/Window/pageshow_event).

        Siehe auch {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Seiten, die mit einem `refresh`-Wert gesetzt sind, laufen Gefahr, dass die Zeitspanne zu kurz ist. Menschen, die mit Unterstützungstechnologien wie einem Screenreader navigieren, sind möglicherweise nicht in der Lage, den Seiteninhalt zu lesen und zu verstehen, bevor sie automatisch weitergeleitet werden. Das abrupte, unangekündigte Aktualisieren des Seiteninhalts kann auch desorientierend für Menschen mit Sehbehinderungen sein.
        >
        > - [MDN Verständnis von WCAG, Leitlinie 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Verständnis von WCAG, Leitlinie 3.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Verständnis von Erfolgskriterium 2.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Verständnis von Erfolgskriterium 2.2.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Verständnis von Erfolgskriterium 3.2.5 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `media`
  - : Das `media`-Attribut definiert, auf welche Medien die im `content`-Attribut definierte Themenfarbe angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig auf `all` gesetzt ist, falls das Attribut fehlt. Dieses Attribut ist nur relevant, wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des Elements auf [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) gesetzt ist. Andernfalls hat es keine Wirkung und sollte nicht hinzugefügt werden.
- [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)
  - : Die Attribute `name` und `content` können zusammen verwendet werden, um Dokumenten-Metadaten in Form von Namen-Wert-Paaren bereitzustellen, wobei das `name`-Attribut den Metadaten-Namen und das `content`-Attribut den Wert angibt.

## Beispiele

### Setzen einer Meta-Beschreibung

Das folgende `<meta>`-Tag bietet eine `description` als Metadaten für die Webseite an:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

### Einstellen einer Seitenumleitung

Das folgende Beispiel verwendet `http-equiv="refresh"`, um den Browser zu veranlassen, eine Umleitung durchzuführen. Das `content="3;url=https://www.mozilla.org"`-Attribut wird die Seite nach 3 Sekunden auf `https://www.mozilla.org` umleiten:

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
        >. Wenn das Attribut <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop"><code>itemprop</code></a> vorhanden ist:
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        <ul>
          <li>
            <code>&#x3C;meta charset></code>,
            <code>&#x3C;meta http-equiv></code>: ein
            {{HTMLElement("head")}}-Element. Wenn
            <a href="#http-equiv"><code>http-equiv</code></a> keine
            Codierungsdeklaration ist, kann es auch innerhalb eines
            {{HTMLElement("noscript")}}-Elements, selbst innerhalb eines
            <code>&#x3C;head></code>-Elements, stehen.
          </li>
          <li>
            <code>&#x3C;meta name></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >Metadateninhalte</a
            >
            akzeptiert.
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >Metadateninhalte</a
            >
            oder
            <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
              >Flussinhalte</a
            >
            akzeptiert.
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
- [Das viewport meta tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
