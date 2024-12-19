---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Element/meta
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<meta>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert {{Glossary("Metadata", "Metadaten")}}, die nicht durch andere HTML-Meta-bezogene Elemente dargestellt werden können, wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}}.

Der Typ der durch das `<meta>`-Element bereitgestellten Metadaten kann einer der folgenden sein:

- Wenn das [`name`](#name)-Attribut gesetzt ist, liefert das `<meta>`-Element _dokumentenweite Metadaten_, die für die gesamte Seite gelten.
- Wenn das [`http-equiv`](#http-equiv)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Pragma-Direktive_, die Informationen bereitstellt, die einem gleichnamigen HTTP-Header entsprechen.
- Wenn das [`charset`](#charset)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Zeichensatz-Deklaration_, die anzeigt, in welcher Zeichenkodierung das Dokument kodiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut gesetzt ist, liefert das `<meta>`-Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element umfasst die [Globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das Attribut [`name`](#name) hat eine spezifische Bedeutung für das `<meta>`-Element, und das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut darf nicht auf demselben `<meta>`-Element gesetzt werden, das bereits bestehende [`name`](#name)-, [`http-equiv`](#http-equiv)- oder [`charset`](#charset)-Attribute hat.

- `charset`
  - : Dieses Attribut gibt die Zeichenkodierung des Dokuments an. Wenn das Attribut vorhanden ist, muss sein Wert eine ASCII-fallunabhängige Übereinstimmung mit dem String `"utf-8"` sein, da UTF-8 die einzige gültige Kodierung für HTML5-Dokumente ist. `<meta>`-Elemente, die eine Zeichenkodierung deklarieren, müssen vollständig innerhalb der ersten 1024 Bytes des Dokuments platziert werden.
- `content`
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](#http-equiv)- oder [`name`](#name)-Attribut, je nachdem, welches verwendet wird.
- `http-equiv`

  - : Definiert eine Pragma-Direktive. Der Name des Attributs, kurz für `http-equivalent`, ist, weil alle zulässigen Werte Namen bestimmter HTTP-Header sind:

    - `content-security-policy`

      - : Erlaubt Seitenautoren, eine [Content-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy) für die aktuelle Seite zu definieren. Content-Policies spezifizieren hauptsächlich erlaubte Server-Ursprünge und Skript-Endpunkte, die helfen, Cross-Site-Scripting-Angriffe zu verhindern.

        Siehe auch {{HTTPHeader("Content-Security-Policy")}}.

    - `content-type`

      - : Deklariert den [MIME-Type](/de/docs/Web/HTTP/MIME_types) und die Zeichenkodierung des Dokuments. Das `content`-Attribut muss den Wert `"text/html; charset=utf-8"` haben, falls angegeben. Dies entspricht einem `<meta>`-Element mit dem angegebenen [`charset`](#charset)-Attribut und unterliegt denselben Platzierungsbeschränkungen innerhalb des Dokuments. **Hinweis:** Kann nur in Dokumenten verwendet werden, die mit `text/html` bereitgestellt werden — nicht in Dokumenten, die mit einem XML-MIME-Typ bereitgestellt werden.

        Siehe auch {{HTTPHeader("Content-Type")}}.

    - `default-style`

      - : Setzt den Namen des Standard-[CSS-Style-Sheets](/de/docs/Web/CSS).

    - `x-ua-compatible`

      - : Wenn angegeben, muss das `content`-Attribut den Wert `"IE=edge"` haben. Benutzer-Agenten sind verpflichtet, dieses Pragma zu ignorieren.

    - `refresh`

      - : Diese Anweisung spezifiziert:

        - Die Anzahl der Sekunden, bis die Seite neu geladen werden soll - wenn der Wert des [`content`](#content)-Attributs eine nicht-negative ganze Zahl ist.
        - Die Anzahl der Sekunden, bis die Seite zu einer anderen umleiten soll - wenn der Wert des [`content`](#content)-Attributs eine nicht-negative ganze Zahl gefolgt von `;url=` und einer gültigen URL ist.

        Der Timer startet, wenn die Seite _vollständig geladen_ ist, was nach den Ereignissen [`load`](/de/docs/Web/API/Window/load_event) und [`pageshow`](/de/docs/Web/API/Window/pageshow_event) erfolgt ist.

        Siehe auch {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Seiten, die mit einem `refresh`-Wert gesetzt sind, laufen Gefahr, dass das Zeitintervall zu kurz ist. Personen, die mit Hilfstechnologien wie Bildschirmlesegeräten navigieren, können möglicherweise den Inhalt der Seite nicht lesen und verstehen, bevor automatisch umgeleitet wird. Das abrupte, unangekündigte Aktualisieren des Seiteninhalts kann auch verwirrend für Menschen mit eingeschränktem Sehvermögen sein.
        >
        > - [MDN Verständnis von WCAG, Richtlinie 2.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Verständnis von WCAG, Richtlinie 3.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Verständnis des Erfolgskriteriums 2.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Verständnis des Erfolgskriteriums 2.2.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Verständnis des Erfolgskriteriums 3.2.5 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `media`

  - : Das `media`-Attribut definiert, auf welche Medien die im `content`-Attribut definierte Themenfarbe angewendet werden soll. Sein Wert ist eine [Media-Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die auf `all` standardmäßig eingestellt ist, wenn das Attribut fehlt. Dieses Attribut ist nur relevant, wenn das [`name`](/de/docs/Web/HTML/Element/meta/name)-Attribut des Elements auf [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color) gesetzt ist. Andernfalls hat es keine Wirkung und sollte nicht eingeschlossen werden.

- `name`

  - : Die `name`- und `content`-Attribute können zusammen verwendet werden, um Dokument-Metadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das `name`-Attribut den Namen der Metadaten und das `content`-Attribut den Wert angibt.

    Siehe [Standard-Metadatennamen](/de/docs/Web/HTML/Element/meta/name) für Details über die in der HTML-Spezifikation definierten Standard-Metadatennamen.

## Beispiele

```html
<meta charset="utf-8" />

<!-- Redirect page after 3 seconds -->
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## Technische Übersicht

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
          >Metadaten-Inhalte</a
        >. Wenn das <a href="/de/docs/Web/HTML/Global_attributes/itemprop"><code>itemprop</code></a>-Attribut vorhanden ist:
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Es muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Zulässige Elternteile</th>
      <td>
        <ul>
          <li>
            <code>&#x3C;meta charset></code>,
            <code>&#x3C;meta http-equiv></code>: ein
            {{HTMLElement("head")}}-Element. Wenn das
            <a href="#http-equiv"><code>http-equiv</code></a> keine
            Kodierungserklärung ist, kann es auch innerhalb eines
            {{HTMLElement("noscript")}}-Elements sein, das sich im Inneren eines
            <code>&#x3C;head></code>-Elements befindet.
          </li>
          <li>
            <code>&#x3C;meta name></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Content_categories#metadata_content"
              >Metadaten-Inhalte</a
            > akzeptiert.
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Content_categories#metadata_content"
              >Metadaten-Inhalte</a
            >
            oder
            <a href="/de/docs/Web/HTML/Content_categories#flow_content"
              >Flussinhalte</a
            > akzeptiert.
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

- [Standard-Metadatennamen](/de/docs/Web/HTML/Element/meta/name)
- [Learn: `<meta>`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
- [Das viewport meta-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
