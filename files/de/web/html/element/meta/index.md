---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Element/meta
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTMLSidebar}}

Das **`<meta>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert {{Glossary("Metadata", "Metadaten")}}, die nicht von anderen HTML-Meta-Elementen wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}} dargestellt werden können.

Die Art der durch das `<meta>`-Element bereitgestellten Metadaten kann eine der folgenden sein:

- Wenn das [`name`](#name)-Attribut gesetzt ist, liefert das `<meta>`-Element _Dokumenten-Metadaten_, die für die gesamte Seite gelten.
- Wenn das [`http-equiv`](#http-equiv)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Pragma-Direktive_, die Informationen bereitstellt, die einem gleichnamigen HTTP-Header entsprechen.
- Wenn das [`charset`](#charset)-Attribut gesetzt ist, ist das `<meta>`-Element eine _zeichensatzdeklaration_, die die Zeichencodierung angibt, in der das Dokument kodiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut gesetzt ist, liefert das `<meta>`-Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das Attribut [`name`](#name) hat eine spezifische Bedeutung für das `<meta>`-Element, und das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut darf nicht auf demselben `<meta>`-Element gesetzt sein, das ein vorhandenes [`name`](#name)-, [`http-equiv`](#http-equiv)- oder [`charset`](#charset)-Attribut hat.

- `charset`
  - : Dieses Attribut deklariert die Zeichencodierung des Dokuments. Wenn das Attribut vorhanden ist, muss sein Wert eine ASCII-Groß- und Kleinschreibung-unabhängige Übereinstimmung mit dem String `"utf-8"` sein, da UTF-8 die einzige gültige Codierung für HTML5-Dokumente ist. `<meta>`-Elemente, die eine Zeichencodierung deklarieren, müssen sich vollständig innerhalb der ersten 1024 Byte des Dokuments befinden.
- `content`
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](#http-equiv)- oder [`name`](#name)-Attribut, je nachdem, welches verwendet wird.
- `http-equiv`

  - : Definiert eine Pragma-Direktive. Der Name des Attributs, kurz für `http-equivalent`, stammt daher, dass alle erlaubten Werte Namen bestimmter HTTP-Header sind:

    - `content-security-policy`

      - : Erlaubt es Seitenautoren, eine [Content-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy) für die aktuelle Seite zu definieren. Content-Policies spezifizieren hauptsächlich erlaubte Server-Ursprünge und Skript-Endpunkte, die helfen, Cross-Site-Scripting-Angriffe zu verhindern.

        Siehe auch {{HTTPHeader("Content-Security-Policy")}}.

    - `content-type`

      - : Deklariert den [MIME-Typ](/de/docs/Web/HTTP/MIME_types) und die Zeichencodierung des Dokuments. Das `content`-Attribut muss den Wert `"text/html; charset=utf-8"` haben, wenn es angegeben wird. Dies entspricht einem `<meta>`-Element mit dem angegebenen [`charset`](#charset)-Attribut und unterliegt derselben Einschränkung hinsichtlich der Platzierung im Dokument. **Hinweis:** Kann nur in Dokumenten verwendet werden, die mit einem `text/html` - nicht in Dokumenten, die mit einem XML-MIME-Typ bereitgestellt werden.

        Siehe auch {{HTTPHeader("Content-Type")}}.

    - `default-style`

      - : Legt den Namen des voreingestellten [CSS-Stilsheets](/de/docs/Web/CSS) fest.

    - `x-ua-compatible`

      - : Wenn angegeben, muss das `content`-Attribut den Wert `"IE=edge"` haben. Benutzeragenten sind verpflichtet, diese Pragma-Direktive zu ignorieren.

    - `refresh`

      - : Diese Anweisung gibt an:

        - Die Anzahl der Sekunden, bis die Seite neu geladen werden soll - falls der Wert des [`content`](#content)-Attributs eine nicht negative Ganzzahl ist.
        - Die Anzahl der Sekunden, bis die Seite zu einer anderen weiterleitet - falls der Wert des [`content`](#content)-Attributs eine nicht negative Ganzzahl ist, gefolgt von `;url=` und einer gültigen URL.

        Der Timer beginnt, wenn die Seite _vollständig geladen_ ist, was nach dem Auslösen der [`load`](/de/docs/Web/API/Window/load_event)- und [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignisse der Fall ist.

        Siehe auch {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Seiten mit einem `refresh`-Wert laufen Gefahr, dass das Zeitintervall zu kurz ist. Personen, die mit Unterstützungstechnologien wie einem Screenreader navigieren, können möglicherweise nicht den gesamten Inhalt der Seite lesen und verstehen, bevor sie automatisch weitergeleitet werden. Das abrupte, unangekündigte Aktualisieren des Seiteninhalts kann auch für Personen mit Sehbehinderungen desorientierend wirken.
        >
        > - [MDN Verständnis von WCAG, Richtlinie 2.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Verständnis von WCAG, Richtlinie 3.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Verständnis des Erfolgskriteriums 2.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Verständnis des Erfolgskriteriums 2.2.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Verständnis des Erfolgskriteriums 3.2.5 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `name`

  - : Die Attribute `name` und `content` können zusammen verwendet werden, um Dokumentmetadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das `name`-Attribut den Metadatennamen und das `content`-Attribut den Wert angibt.

    Siehe [Standard-Metadaten-Namen](/de/docs/Web/HTML/Element/meta/name) für Details über die Menge der in der HTML-Spezifikation definierten Standard-Metadaten-Namen.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th>Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Starttag haben und darf keinen Endtag haben.</td>
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
            Kodierungsdeklaration ist, kann es auch innerhalb eines
            {{HTMLElement("noscript")}}-Elements befinden, das sich selbst in einem
            <code>&#x3C;head></code>-Element befindet.
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
              >Fließinhalte</a
            > akzeptiert.
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

- [Standard-Metadaten-Namen](/de/docs/Web/HTML/Element/meta/name)
- [Learn: `<meta>`](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#metadata_the_meta_element)
- [Das viewport `<meta>`-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
