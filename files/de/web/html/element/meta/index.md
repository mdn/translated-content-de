---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Element/meta
l10n:
  sourceCommit: 4d3287f254f786fbd6a4d402828f5d5c3cf5b1f4
---

{{HTMLSidebar}}

Das **`<meta>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert {{Glossary("Metadata", "Metadaten")}}, die nicht von anderen HTML-Meta-bezogenen Elementen wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}} dargestellt werden können.

Die Art der durch das `<meta>`-Element bereitgestellten Metadaten kann folgende sein:

- Wenn das [`name`](#name)-Attribut gesetzt ist, bietet das `<meta>`-Element _dokumentenbezogene Metadaten_, die für die gesamte Seite gelten.
- Wenn das [`http-equiv`](#http-equiv)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Pragma-Direktive_, die Informationen bereitstellt, die einem gleichnamigen HTTP-Header entsprechen.
- Wenn das [`charset`](#charset)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Zeichensatzdeklaration_, die die Zeichenkodierung angibt, in der das Dokument kodiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut gesetzt ist, bietet das `<meta>`-Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das Attribut [`name`](#name) hat eine spezifische Bedeutung für das `<meta>`-Element, und das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut darf nicht auf demselben `<meta>`-Element gesetzt werden, das bereits irgendein [`name`](#name)-, [`http-equiv`](#http-equiv)- oder [`charset`](#charset)-Attribut enthält.

- `charset`
  - : Dieses Attribut deklariert die Zeichenkodierung des Dokuments. Wenn das Attribut vorhanden ist, muss sein Wert eine ASCII-fallunabhängige Übereinstimmung mit der Zeichenkette `"utf-8"` sein, da UTF-8 die einzige gültige Kodierung für HTML5-Dokumente ist. `<meta>`-Elemente, die eine Zeichenkodierung deklarieren, müssen vollständig innerhalb der ersten 1024 Bytes des Dokuments platziert werden.
- `content`
  - : Dieses Attribut enthält den Wert für das Attribut [`http-equiv`](#http-equiv) oder [`name`](#name), abhängig davon, welches verwendet wird.
- `http-equiv`

  - : Definiert eine Pragma-Direktive. Der Name des Attributs, kurz für `http-equivalent`, da alle erlaubten Werte Namen bestimmter HTTP-Header sind:

    - `content-security-policy`

      - : Ermöglicht es Autoren, eine [Content-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy) für die aktuelle Seite zu definieren. Content-Policies spezifizieren hauptsächlich erlaubte Server-Ursprünge und Skript-Endpunkte, die helfen, Cross-Site-Scripting-Angriffe zu verhindern.

        Siehe auch {{HTTPHeader("Content-Security-Policy")}}.

    - `content-type`

      - : Deklariert den [MIME-Typ](/de/docs/Web/HTTP/MIME_types) und die Zeichenkodierung des Dokuments. Das `content`-Attribut muss, falls angegeben, den Wert `"text/html; charset=utf-8"` haben. Dies entspricht einem `<meta>`-Element mit dem angegebenen [`charset`](#charset)-Attribut und unterliegt derselben Einschränkung bezüglich der Platzierung im Dokument. **Hinweis:** Kann nur in Dokumenten verwendet werden, die mit `text/html` ausgeliefert werden – nicht in Dokumenten mit einem XML-MIME-Typ.

        Siehe auch {{HTTPHeader("Content-Type")}}.

    - `default-style`

      - : Setzt den Namen des Standard-[CSS-Stilblatts](/de/docs/Web/CSS)-Sets.

    - `x-ua-compatible`

      - : Wenn angegeben, muss das `content`-Attribut den Wert `"IE=edge"` haben. Benutzeragenten müssen diese Pragma ignorieren.

    - `refresh`

      - : Diese Anweisung spezifiziert:

        - Die Anzahl der Sekunden, bis die Seite neu geladen werden soll - wenn der Wert des [`content`](#content)-Attributs eine nicht-negative Ganzzahl ist.
        - Die Anzahl der Sekunden, bis die Seite zu einer anderen weiterleiten soll - wenn der Wert des [`content`](#content)-Attributs eine nicht-negative Ganzzahl ist, gefolgt von `;url=` und einer gültigen URL.

        Der Timer startet, wenn die Seite _vollständig geladen_ ist, also nachdem die Ereignisse [`load`](/de/docs/Web/API/Window/load_event) und [`pageshow`](/de/docs/Web/API/Window/pageshow_event) beide ausgelöst wurden.

        Siehe auch {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Seiten, die mit einem `refresh`-Wert festgelegt sind, laufen Gefahr, dass das Zeitintervall zu kurz ist. Personen, die mit Hilfe von Unterstützungstechnologie wie einem Screenreader navigieren, könnten nicht in der Lage sein, den Inhalt der Seite vollständig zu lesen und zu verstehen, bevor sie automatisch weitergeleitet werden. Das abrupte, unangekündigte Aktualisieren des Seiteninhalts kann auch für Personen mit Sehbehinderungen desorientierend sein.
        >
        > - [MDN Understanding WCAG, Guideline 2.2 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Understanding WCAG, Guideline 3.2 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Understanding Success Criterion 2.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Understanding Success Criterion 2.2.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Understanding Success Criterion 3.2.5 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `media`

  - : Das `media`-Attribut definiert, für welche Medien die im `content`-Attribut definierte Themafarbe angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die auf `all` standardmäßig festgelegt ist, wenn das Attribut fehlt. Dieses Attribut ist nur relevant, wenn das [`name`](/de/docs/Web/HTML/Element/meta/name)-Attribut des Elements auf [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color) gesetzt ist. Andernfalls hat es keine Wirkung und sollte nicht enthalten sein.

- `name`

  - : Die Attribute `name` und `content` können zusammen verwendet werden, um Dokumentmetadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das `name`-Attribut den Metadaten-Namen angibt und das `content`-Attribut den Wert angibt.

    Siehe [Standard-Metadatennamen](/de/docs/Web/HTML/Element/meta/name) für Details über die Menge der im HTML-Standard definierten Standard-Metadatennamen.

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
        >. Wenn das <a href="/de/docs/Web/HTML/Global_attributes/itemprop"><code>itemprop</code></a>-Attribut vorhanden ist:
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
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
            {{HTMLElement("head")}}-Element. Falls das
            <a href="#http-equiv"><code>http-equiv</code></a> keine
            Kodierungsdeklaration ist, kann es auch innerhalb eines
            {{HTMLElement("noscript")}}-Elements sein, das sich selbst innerhalb eines
            <code>&#x3C;head></code>-Elements befindet.
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
              >Fließender Inhalt</a
            >
            akzeptiert.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
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

- [Standard-Metadatennamen](/de/docs/Web/HTML/Element/meta/name)
- [Lernen: `<meta>`](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#metadata_the_meta_element)
- [Das Viewport-Meta-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
