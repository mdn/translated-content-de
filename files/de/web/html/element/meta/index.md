---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Element/meta
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Das **`<meta>`** [HTML](/de/docs/Web/HTML) Element repräsentiert {{Glossary("Metadata", "Metadaten")}}, die nicht durch andere HTML meta-verwandte Elemente wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}} dargestellt werden können.

Der Typ der durch das `<meta>` Element bereitgestellten Metadaten kann einer der folgenden sein:

- Wenn das [`name`](#name) Attribut gesetzt ist, liefert das `<meta>` Element _dokumentweite Metadaten_, die für die gesamte Seite gelten.
- Wenn das [`http-equiv`](#http-equiv) Attribut gesetzt ist, ist das `<meta>` Element eine _Pragma-Direktive_, die Informationen bereitstellt, die einem gleichnamigen HTTP-Header entsprechen können.
- Wenn das [`charset`](#charset) Attribut gesetzt ist, ist das `<meta>` Element eine _Zeichensatzdeklaration_, die die Zeichenkodierung angibt, in der das Dokument kodiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop) Attribut gesetzt ist, liefert das `<meta>` Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das Attribut [`name`](#name) hat eine spezielle Bedeutung für das `<meta>` Element, und das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop) Attribut darf nicht auf demselben `<meta>` Element gesetzt sein, das bereits ein vorhandenes [`name`](#name), [`http-equiv`](#http-equiv) oder [`charset`](#charset) Attribut hat.

- `charset`
  - : Dieses Attribut deklariert die Zeichenkodierung des Dokuments. Wenn das Attribut vorhanden ist, muss sein Wert eine ASCII-Groß-/Kleinschreibung-unschärfliche Übereinstimmung mit dem String `"utf-8"` sein, da UTF-8 die einzige gültige Kodierung für HTML5-Dokumente ist. `<meta>` Elemente, die eine Zeichenkodierung deklarieren, müssen sich vollständig innerhalb der ersten 1024 Bytes des Dokuments befinden.
- `content`
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](#http-equiv) oder [`name`](#name) Attribut, je nachdem, welches verwendet wird.
- `http-equiv`

  - : Definiert eine Pragma-Direktive. Der Name des Attributs, abgekürzt von `http-equivalent`, ist, weil alle erlaubten Werte Namen bestimmter HTTP-Header sind:

    - `content-security-policy`

      - : Erlaubt es Seitenautoren, eine [Inhaltspolitik](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) für die aktuelle Seite zu definieren. Inhaltspolitiken geben meistens erlaubte Serverherkünfte und Skriptendpunkte an, die helfen, Cross-Site-Scripting-Angriffe zu verhindern.

        Siehe auch {{HTTPHeader("Content-Security-Policy")}}.

    - `content-type`

      - : Deklariert den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) und die Zeichenkodierung des Dokuments. Das `content` Attribut muss den Wert `"text/html; charset=utf-8"` haben, falls angegeben. Dies entspricht einem `<meta>` Element mit dem [`charset`](#charset) Attribut und unterliegt denselben Beschränkungen hinsichtlich der Platzierung im Dokument. **Hinweis:** Kann nur in Dokumenten verwendet werden, die mit einem `text/html` bereitgestellt werden — nicht in Dokumenten, die mit einem XML MIME-Type bereitgestellt werden.

        Siehe auch {{HTTPHeader("Content-Type")}}.

    - `default-style`

      - : Setzt den Namen des Standard-[CSS-Stilblatts](/de/docs/Web/CSS).

    - `x-ua-compatible`

      - : Wenn angegeben, muss das `content` Attribut den Wert `"IE=edge"` haben. Benutzeragenten müssen diese Pragma ignorieren.

    - `refresh`

      - : Diese Anweisung spezifiziert:

        - Die Anzahl der Sekunden bis die Seite neu geladen werden soll - wenn der Wert des [`content`](#content) Attributs eine nicht-negative Ganzzahl ist.
        - Die Anzahl der Sekunden bis die Seite zu einer anderen umleiten soll - wenn der Wert des [`content`](#content) Attributs eine nicht-negative Ganzzahl gefolgt von `;url=` und einer gültigen URL ist.

        Der Timer startet, wenn die Seite _vollständig geladen_ ist, also nach den `[`load`](/de/docs/Web/API/Window/load_event)` und `[`pageshow`](/de/docs/Web/API/Window/pageshow_event)` Ereignissen, die ausgelöst wurden.

        Siehe auch {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Seiten, die mit einem `refresh` Wert gesetzt sind, laufen Gefahr, dass das Zeitintervall zu kurz ist. Personen, die mit der Hilfe von unterstützender Technologie wie einem Bildschirmleser navigieren, könnten nicht in der Lage sein, den Inhalt der Seite zu lesen und zu verstehen, bevor sie automatisch umgeleitet werden. Das abrupte, unangekündigte Aktualisieren des Seiteninhalts kann auch verwirrend für Menschen mit Sehschwächen sein.
        >
        > - [MDN Verständnis von WCAG, Leitfaden 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Verständnis von WCAG, Leitfaden 3.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Verständnis des Erfolgskriteriums 2.2.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Verständnis des Erfolgskriteriums 2.2.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Verständnis des Erfolgskriteriums 3.2.5 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `media`

  - : Das `media` Attribut definiert, in welchen Medien die im `content` Attribut definierte Themafarbe angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die auf `all` voreingestellt ist, falls das Attribut fehlt. Dieses Attribut ist nur relevant, wenn das [`name`](/de/docs/Web/HTML/Element/meta/name) Attribut des Elements auf [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color) gesetzt ist. Ansonsten hat es keine Wirkung und sollte nicht enthalten sein.

- `name`

  - : Die `name` und `content` Attribute können zusammen verwendet werden, um Dokumentmetadaten in Form von Namens-Wert-Paaren bereitzustellen, wobei das `name` Attribut den Metadaten-Namen und das `content` Attribut den Wert angibt.

    Einzelheiten zu den in der HTML-Spezifikation definierten Standards für Metadaten-Namen finden Sie unter [Standards für Metadaten-Namen](/de/docs/Web/HTML/Element/meta/name).

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >. Wenn das <a href="/de/docs/Web/HTML/Global_attributes/itemprop"><code>itemprop</code></a> Attribut vorhanden ist:
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th>Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Zulässige Eltern</th>
      <td>
        <ul>
          <li>
            <code>&#x3C;meta charset></code>,
            <code>&#x3C;meta http-equiv></code>: ein
            {{HTMLElement("head")}} Element. Wenn das
            <a href="#http-equiv"><code>http-equiv</code></a> keine
            Deklaration der Kodierung ist, kann es auch innerhalb eines
            {{HTMLElement("noscript")}} Elements, das sich selbst in einem
            <code>&#x3C;head></code> Element befindet, sein.
          </li>
          <li>
            <code>&#x3C;meta name></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Content_categories#metadata_content"
              >Metadaten-Inhalt</a
            > akzeptiert.
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Content_categories#metadata_content"
              >Metadaten-Inhalt</a
            >
            oder
            <a href="/de/docs/Web/HTML/Content_categories#flow_content"
              >Fluss-Inhalt</a
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th>DOM Schnittstelle</th>
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
