---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Reference/Elements/meta
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<meta>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert {{Glossary("Metadata", "Metadaten")}}, die nicht durch andere HTML-Meta-Elemente wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}} dargestellt werden können.

Der Typ der durch das `<meta>`-Element bereitgestellten Metadaten kann einer der folgenden sein:

- Wenn das [`name`](#name)-Attribut gesetzt ist, bietet das `<meta>`-Element _Dokumenten-Metadaten_, die für die gesamte Seite gelten.
- Wenn das [`http-equiv`](#http-equiv)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Pragma-Direktive_, die Informationen bereitstellt, die einem gleichnamigen HTTP-Header entsprechen.
- Wenn das [`charset`](#charset)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Zeichensatzdeklaration_, die die Zeichenkodierung angibt, in der das Dokument kodiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut gesetzt ist, bietet das `<meta>`-Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> Das Attribut [`name`](#name) hat eine spezifische Bedeutung für das `<meta>`-Element, und das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut darf nicht auf demselben `<meta>`-Element gesetzt werden, das bereits ein [`name`](#name)-, [`http-equiv`](#http-equiv)- oder [`charset`](#charset)-Attribut besitzt.

- `charset`
  - : Dieses Attribut gibt die Zeichenkodierung des Dokuments an. Wenn das Attribut vorhanden ist, muss sein Wert eine ASCII-Groß-/Kleinschreibung-unempfindliche Übereinstimmung mit dem String `"utf-8"` sein, da UTF-8 die einzige gültige Kodierung für HTML5-Dokumente ist. `<meta>`-Elemente, die eine Zeichenkodierung deklarieren, müssen sich vollständig innerhalb der ersten 1024 Bytes des Dokuments befinden.
- `content`
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](#http-equiv)- oder [`name`](#name)-Attribut, je nachdem, welches verwendet wird.
- `http-equiv`

  - : Definiert eine Pragma-Direktive. Der Attributname, eine Abkürzung für `http-equivalent`, rührt daher, dass alle erlaubten Werte Namen bestimmter HTTP-Header sind:

    - `content-security-policy`

      - : Ermöglicht Seitenautoren, eine [Inhaltspolitik](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) für die aktuelle Seite zu definieren. Inhaltspolitiken spezifizieren hauptsächlich erlaubte Server-Ursprünge und Skript-Endpunkte, die helfen, Cross-Site-Scripting-Angriffe zu verhindern.

        Siehe auch {{HTTPHeader("Content-Security-Policy")}}.

    - `content-type`

      - : Deklariert den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) und die Zeichenkodierung des Dokuments. Das `content`-Attribut muss den Wert `"text/html; charset=utf-8"` haben, wenn es angegeben wird. Dies ist gleichbedeutend mit einem `<meta>`-Element mit dem angegebenen [`charset`](#charset)-Attribut und unterliegt der gleichen Einschränkung bezüglich des Speicherorts im Dokument. **Hinweis:** Kann nur in Dokumenten verwendet werden, die mit `text/html` bereitgestellt werden — nicht in Dokumenten, die mit einem XML-MIME-Typ bereitgestellt werden.

        Siehe auch {{HTTPHeader("Content-Type")}}.

    - `default-style`

      - : Setzt den Namen des Standard-[CSS-Stylesheets](/de/docs/Web/CSS).

    - `x-ua-compatible`

      - : Wenn angegeben, muss das `content`-Attribut den Wert `"IE=edge"` haben. Benutzeragenten müssen dieses Pragma ignorieren.

    - `refresh`

      - : Diese Anweisung spezifiziert:

        - Die Anzahl der Sekunden, bis die Seite neu geladen werden soll - falls der Wert des [`content`](#content)-Attributs eine nicht-negative Ganzzahl ist.
        - Die Anzahl der Sekunden, bis die Seite zu einer anderen umgeleitet werden soll - falls der Wert des [`content`](#content)-Attributs eine nicht-negative Ganzzahl ist, gefolgt von `;url=` und einer gültigen URL.

        Der Timer startet, wenn die Seite _vollständig geladen_ ist, also nachdem sowohl die [`load`](/de/docs/Web/API/Window/load_event)- als auch die [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Events ausgelöst wurden.

        Siehe auch {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Seiten, die mit einem `refresh`-Wert eingestellt sind, laufen Gefahr, dass das Zeitintervall zu kurz ist. Personen, die mit Unterstützungstechnologie wie einem Screenreader navigieren, könnten möglicherweise den Inhalt der Seite nicht lesen und verstehen, bevor sie automatisch weitergeleitet werden. Das abrupte, unangekündigte Aktualisieren des Seiteninhalts könnte auch desorientierend für Menschen mit Sehbehinderungen sein.
        >
        > - [MDN Verständnis WCAG, Erklärung zu Richtlinie 2.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Verständnis WCAG, Erklärung zu Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Verständnis des Erfolgsrichtwerts 2.2.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Verständnis des Erfolgsrichtwerts 2.2.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Verständnis des Erfolgsrichtwerts 3.2.5 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `media`

  - : Das `media`-Attribut definiert, für welche Medien die im `content`-Attribut definierte Themenfarbe angewandt werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig auf `all` gesetzt wird, wenn das Attribut fehlt. Dieses Attribut ist nur relevant, wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des Elements auf [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) gesetzt ist. Andernfalls hat es keine Wirkung und sollte nicht enthalten sein.

- `name`

  - : Die Attribute `name` und `content` können zusammen verwendet werden, um Dokument-Metadaten in Form von Namens-Wert-Paaren bereitzustellen, wobei das `name`-Attribut den Metadaten-Namen und das `content`-Attribut den Wert angibt.

    Siehe [Standard-Metadatennamen](/de/docs/Web/HTML/Reference/Elements/meta/name) für Details über die Menge der Standard-Metadatennamen, die in der HTML-Spezifikation definiert sind.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >. Wenn das <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop"><code>itemprop</code></a>-Attribut vorhanden ist:
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >formulierender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th>Auslassen des Tags</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Zulässige Eltern</th>
      <td>
        <ul>
          <li>
            <code>&#x3C;meta charset></code>,
            <code>&#x3C;meta http-equiv></code>: ein
            {{HTMLElement("head")}}-Element. Wenn das
            <a href="#http-equiv"><code>http-equiv</code></a> keine
            Kodierungsdeklaration ist, kann es sich auch in einem
            {{HTMLElement("noscript")}}-Element befinden, das sich selbst in einem
            <code>&#x3C;head></code>-Element befindet.
          </li>
          <li>
            <code>&#x3C;meta name></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >Metadaten-Inhalt</a
            > akzeptiert.
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >Metadaten-Inhalt</a
            >
            oder
            <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
              >fließenden Inhalt</a
            > akzeptiert.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- [Standard-Metadatennamen](/de/docs/Web/HTML/Reference/Elements/meta/name)
- [Lernen: `<meta>`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
- [Das Viewport-Meta-Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
