---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Element/meta
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<meta>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert {{Glossary("Metadata", "Metadaten")}}, die nicht durch andere HTML-Metadaten-bezogene Elemente wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}} dargestellt werden können.

Die Art der Metadaten, die durch das `<meta>`-Element bereitgestellt werden, kann eine der folgenden sein:

- Wenn das [`name`](#name)-Attribut gesetzt ist, bietet das `<meta>`-Element _Dokumentenebenen-Metadaten_, die für die gesamte Seite gelten.
- Wenn das [`http-equiv`](#http-equiv)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Pragma-Direktive_, die Informationen bereitstellt, die einem ähnlich benannten HTTP-Header entsprechen.
- Wenn das [`charset`](#charset)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Charset-Deklaration_, die die Zeichencodierung angibt, in der das Dokument codiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut gesetzt ist, bietet das `<meta>`-Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das Attribut [`name`](#name) hat eine spezielle Bedeutung für das `<meta>`-Element, und das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut darf nicht auf demselben `<meta>`-Element gesetzt werden, das vorhandene [`name`](#name)-, [`http-equiv`](#http-equiv)- oder [`charset`](#charset)-Attribute hat.

- `charset`
  - : Dieses Attribut deklariert die Zeichencodierung des Dokuments. Wenn das Attribut vorhanden ist, muss sein Wert mit dem String `"utf-8"` in ASCII-Groß-/Kleinschreibung übereinstimmen, da UTF-8 die einzige gültige Kodierung für HTML5-Dokumente ist. `<meta>`-Elemente, die eine Zeichencodierung deklarieren, müssen sich vollständig innerhalb der ersten 1024 Bytes des Dokuments befinden.
- `content`
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](#http-equiv)- oder [`name`](#name)-Attribut, je nachdem, welches verwendet wird.
- `http-equiv`

  - : Definiert eine Pragma-Direktive. Der Name des Attributs, kurz für `http-equivalent`, ist so, weil alle zulässigen Werte Namen bestimmter HTTP-Header sind:

    - `content-security-policy`

      - : Ermöglicht es Seitenautoren, eine [Inhaltspolitik](/de/docs/Web/HTTP/Headers/Content-Security-Policy) für die aktuelle Seite zu definieren. Inhaltspolitiken legen hauptsächlich zulässige Server-Ursprünge und Skript-Endpunkte fest, die helfen, Cross-Site-Scripting-Angriffe zu verhindern.

        Siehe auch {{HTTPHeader("Content-Security-Policy")}}.

    - `content-type`

      - : Deklariert den [MIME-Typ](/de/docs/Web/HTTP/MIME_types) und die Zeichencodierung des Dokuments. Das `content`-Attribut muss den Wert `"text/html; charset=utf-8"` haben, wenn es angegeben wird. Dies entspricht einem `<meta>`-Element mit dem angegebenen [`charset`](#charset)-Attribut und unterliegt denselben Einschränkungen bezüglich der Platzierung innerhalb des Dokuments. **Hinweis:** Kann nur in Dokumenten verwendet werden, die mit `text/html` geliefert werden – nicht in Dokumenten, die mit einem XML-MIME-Typ geliefert werden.

        Siehe auch {{HTTPHeader("Content-Type")}}.

    - `default-style`

      - : Legt den Namen des Standard-[CSS-Stylesheets](/de/docs/Web/CSS) fest.

    - `x-ua-compatible`

      - : Wenn angegeben, muss das `content`-Attribut den Wert `"IE=edge"` haben. Benutzeragenten müssen diese Pragma-Direktive ignorieren.

    - `refresh`

      - : Diese Anweisung spezifiziert:

        - Die Anzahl der Sekunden, nach denen die Seite neu geladen werden soll - wenn der Wert des [`content`](#content)-Attributs eine nicht-negative Ganzzahl ist.
        - Die Anzahl der Sekunden, nach denen die Seite zu einer anderen umleiten soll - wenn der Wert des [`content`](#content)-Attributs eine nicht-negative Ganzzahl gefolgt von `;url=` und einer gültigen URL ist.

        Der Timer startet, wenn die Seite _vollständig geladen_ ist, d. h. nachdem sowohl das [`load`](/de/docs/Web/API/Window/load_event) als auch das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis ausgelöst wurde.

        Siehe auch {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Seiten, die mit einem `refresh`-Wert konfiguriert sind, laufen Gefahr, dass das Zeitintervall zu kurz ist. Personen, die mit Hilfe von unterstützender Technologie wie einem Screenreader navigieren, können möglicherweise den Inhalt der Seite nicht lesen und verstehen, bevor sie automatisch weitergeleitet werden. Die plötzliche, unangekündigte Aktualisierung des Seiteninhalts kann auch für Menschen mit Sehbehinderungen desorientierend sein.
        >
        > - [MDN Understanding WCAG, Guideline 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Understanding WCAG, Guideline 3.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Understanding Success Criterion 2.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Understanding Success Criterion 2.2.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Understanding Success Criterion 3.2.5 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `media`

  - : Das `media`-Attribut definiert, auf welches Medium die im `content`-Attribut definierte Themenfarbe angewendet werden soll. Sein Wert ist eine [Media-Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die auf `all` standardmäßig, wenn das Attribut fehlt. Dieses Attribut ist nur relevant, wenn das [`name`](/de/docs/Web/HTML/Element/meta/name)-Attribut des Elements auf [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color) gesetzt ist. Andernfalls hat es keine Auswirkung und sollte nicht eingeschlossen werden.

- `name`

  - : Die Attribute `name` und `content` können zusammen verwendet werden, um Dokument-Metadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das `name`-Attribut den Metadaten-Namen und das `content`-Attribut den Wert angibt.

    Siehe [Standard-Metadaten-Namen](/de/docs/Web/HTML/Element/meta/name) für Details über die Menge der Standard-Metadaten-Namen, die in der HTML-Spezifikation definiert sind.

## Beispiele

```html
<meta charset="utf-8" />

<!-- Redirect page after 3 seconds -->
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadaten-Inhalt</a>. Wenn das <a href="/de/docs/Web/HTML/Global_attributes/itemprop"><code>itemprop</code></a>-Attribut vorhanden ist:
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>.
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
            {{HTMLElement("head")}}-Element. Wenn das
            <a href="#http-equiv"><code>http-equiv</code></a> keine
            Kodierungsdeklaration ist, kann es auch innerhalb eines
            {{HTMLElement("noscript")}}-Elements, das sich selbst innerhalb eines
            <code>&#x3C;head></code>-Elements befindet, sein.
          </li>
          <li>
            <code>&#x3C;meta name></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Content_categories#metadata_content"
              >Metadaten-Inhalt</a
            >
            akzeptiert.
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Content_categories#metadata_content"
              >Metadaten-Inhalt</a
            >
            oder
            <a href="/de/docs/Web/HTML/Content_categories#flow_content"
              >Fließ-Inhalt</a
            >
            akzeptiert.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>Rolle</code> erlaubt</td>
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

- [Standard-Metadaten-Namen](/de/docs/Web/HTML/Element/meta/name)
- [Lernen: `<meta>`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
- [Das Viewport-Meta-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
