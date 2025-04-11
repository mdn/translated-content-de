---
title: "<meta>: Das Metadatenelement"
slug: Web/HTML/Reference/Elements/meta
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<meta>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert {{Glossary("Metadata", "Metadaten")}}, die nicht durch andere HTML-Meta-bezogene Elemente, wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}}, dargestellt werden können.

Die Art der durch das `<meta>`-Element bereitgestellten Metadaten kann eine der folgenden sein:

- Wenn das [`name`](#name)-Attribut gesetzt ist, liefert das `<meta>`-Element _dokumentenbezogene Metadaten_, die für die gesamte Seite gelten.
- Wenn das [`http-equiv`](#http-equiv)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Pragma-Anweisung_, die Informationen bereitstellt, die einem ähnlich benannten HTTP-Header entsprechen können.
- Wenn das [`charset`](#charset)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Zeichencodierungserklärung_, die die Zeichencodierung angibt, in der das Dokument kodiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut gesetzt ist, liefert das `<meta>`-Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> Das Attribut [`name`](#name) hat eine spezifische Bedeutung für das `<meta>`-Element, und das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut darf nicht auf demselben `<meta>`-Element gesetzt sein, das bereits vorhandene [`name`](#name)-, [`http-equiv`](#http-equiv)- oder [`charset`](#charset)-Attribute hat.

- `charset`
  - : Dieses Attribut deklariert die Zeichencodierung des Dokuments. Wenn das Attribut vorhanden ist, muss sein Wert eine ASCII-Groß-/Kleinschreibung-unabhängige Übereinstimmung mit der Zeichenkette `"utf-8"` sein, da UTF-8 die einzige gültige Codierung für HTML5-Dokumente ist. `<meta>`-Elemente, die eine Zeichencodierung deklarieren, müssen vollständig innerhalb der ersten 1024 Bytes des Dokuments platziert werden.
- `content`
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](#http-equiv)- oder [`name`](#name)-Attribut, je nachdem, welches verwendet wird.
- `http-equiv`

  - : Definiert eine Pragma-Anweisung. Der Name des Attributs, kurz für `http-equivalent`, ist, weil alle zulässigen Werte Namen bestimmter HTTP-Header sind:

    - `content-security-policy`

      - : Ermöglicht es Seitenautoren, eine [Inhaltspolitik](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) für die aktuelle Seite zu definieren. Inhaltspolitiken spezifizieren hauptsächlich erlaubte Server-Ursprünge und Skript-Endpunkte, die helfen, Cross-Site-Scripting-Angriffe zu verhindern.

        Siehe auch {{HTTPHeader("Content-Security-Policy")}}.

    - `content-type`

      - : Deklariert den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) und die Zeichencodierung des Dokuments. Das `content`-Attribut muss den Wert `"text/html; charset=utf-8"` haben, wenn es angegeben ist. Dies entspricht einem `<meta>`-Element mit dem angegebenen [`charset`](#charset)-Attribut und unterliegt derselben Platzierungsbeschränkung im Dokument. **Hinweis:** Kann nur in Dokumenten verwendet werden, die mit `text/html` serviert werden — nicht in Dokumenten, die mit einem XML MIME-Typ serviert werden.

        Siehe auch {{HTTPHeader("Content-Type")}}.

    - `default-style`

      - : Legt den Namen des Standard-[CSS-Stylesheets](/de/docs/Web/CSS) fest.

    - `x-ua-compatible`

      - : Wenn angegeben, muss das `content`-Attribut den Wert `"IE=edge"` haben. Benutzeragenten sind verpflichtet, dieses Pragma zu ignorieren.

    - `refresh`

      - : Diese Anweisung spezifiziert:

        - Die Anzahl der Sekunden, bis die Seite neu geladen werden sollte - wenn der Wert des [`content`](#content)-Attributs eine nicht-negative ganze Zahl ist.
        - Die Anzahl der Sekunden, bis die Seite zu einer anderen umleiten sollte - wenn der Wert des [`content`](#content)-Attributs eine nicht-negative ganze Zahl ist, gefolgt von `;url=` und einer gültigen URL.

        Der Timer startet, wenn die Seite _vollständig geladen_ ist, also nachdem die [`load`](/de/docs/Web/API/Window/load_event)- und die [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignisse beide ausgelöst wurden.

        Siehe auch {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Seiten, die mit einem `refresh`-Wert gesetzt sind, laufen Gefahr, dass das Zeitintervall zu kurz ist. Personen, die mit Hilfe von unterstützender Technologie wie einem Screenreader navigieren, könnten nicht in der Lage sein, den Inhalt der Seite zu lesen und zu verstehen, bevor sie automatisch umgeleitet werden. Das plötzliche, unangekündigte Aktualisieren des Seiteninhalts kann auch desorientierend für Personen mit Sehbehinderungen sein.
        >
        > - [MDN Verstehen von WCAG, Leitfaden 2.2 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Verstehen von WCAG, Leitfaden 3.2 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Verständnis des Erfolgs-Kriteriums 2.2.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Verständnis des Erfolgs-Kriteriums 2.2.4 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Verständnis des Erfolgs-Kriteriums 3.2.5 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `media`

  - : Das `media`-Attribut definiert, auf welche Medien die im `content`-Attribut definierte Theme-Farbe angewendet werden soll. Sein Wert ist eine [Media-Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die auf `all` voreingestellt ist, wenn das Attribut fehlt. Dieses Attribut ist nur relevant, wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des Elements auf [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) gesetzt ist. Andernfalls hat es keine Wirkung und sollte nicht enthalten sein.

- `name`

  - : Die `name`- und `content`-Attribute können zusammen verwendet werden, um Dokument-Metadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das `name`-Attribut den Metadatennamen liefert und das `content`-Attribut den Wert.

    Siehe [Standard-Metadatennamen](/de/docs/Web/HTML/Reference/Elements/meta/name) für Details über die im HTML-Standard definierten Standard-Metadatennamen-Sets.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
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
            Deklaration der Kodierung ist, kann es auch innerhalb eines
            {{HTMLElement("noscript")}}-Elements, selbst innerhalb eines
            <code>&#x3C;head></code>-Elements sein.
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
              >Flussinhalt</a
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Kein <code>role</code> erlaubt</td>
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
