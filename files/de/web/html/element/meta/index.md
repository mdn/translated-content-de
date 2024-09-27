---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Element/meta
l10n:
  sourceCommit: cbbe2e84fbf84f6af2d889bb44dd7e0521a18469
---

{{HTMLSidebar}}

Das **`<meta>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert [Metadaten](/de/docs/Glossary/Metadata), die durch andere HTML-meta-bezogene Elemente wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}} nicht dargestellt werden können.

Die Art der Metadaten, die durch das `<meta>`-Element bereitgestellt werden, kann eine der folgenden sein:

- Wenn das Attribut [`name`](#name) gesetzt ist, liefert das `<meta>`-Element _dokumentenbezogene Metadaten_, die für die gesamte Seite gelten.
- Wenn das Attribut [`http-equiv`](#http-equiv) gesetzt ist, ist das `<meta>`-Element eine _Pragma-Direktive_, die Informationen bereitstellt, die einem ähnlich benannten HTTP-Header entsprechen.
- Wenn das Attribut [`charset`](#charset) gesetzt ist, ist das `<meta>`-Element eine _Zeichensatzdeklaration_, die die Zeichencodierung angibt, in der das Dokument kodiert ist.
- Wenn das Attribut [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop) gesetzt ist, liefert das `<meta>`-Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das Attribut [`name`](#name) hat eine spezifische Bedeutung für das `<meta>`-Element, und das Attribut [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop) darf nicht auf demselben `<meta>`-Element gesetzt werden, das bereits vorhandene [`name`](#name)-, [`http-equiv`](#http-equiv)- oder [`charset`](#charset)-Attribute hat.

- `charset`
  - : Dieses Attribut deklariert die Zeichencodierung des Dokuments. Wenn das Attribut vorhanden ist, muss sein Wert eine ASCII-Groß-/Kleinschreibung-unempfindliche Übereinstimmung mit dem String `"utf-8"` sein, da UTF-8 die einzige gültige Codierung für HTML5-Dokumente ist. `<meta>`-Elemente, die eine Zeichencodierung deklarieren, müssen sich vollständig innerhalb der ersten 1024 Bytes des Dokuments befinden.
- `content`
  - : Dieses Attribut enthält den Wert für das Attribut [`http-equiv`](#http-equiv) oder [`name`](#name), je nachdem, welches verwendet wird.
- `http-equiv`

  - : Definiert eine Pragma-Direktive. Der Name des Attributs, abgekürzt von `http-equivalent`, kommt daher, dass alle erlaubten Werte Namen bestimmter HTTP-Header sind:

    - `content-security-policy`

      - : Ermöglicht es Seitenautoren, eine [Inhaltspolitik](/de/docs/Web/HTTP/Headers/Content-Security-Policy) für die aktuelle Seite zu definieren. Inhaltspolitiken spezifizieren hauptsächlich erlaubte Serverursprünge und Skriptendpunkte, die helfen, Cross-Site-Scripting-Angriffe zu verhindern.

        Siehe auch {{HTTPHeader("Content-Security-Policy")}}.

    - `content-type`

      - : Deklariert den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) und die Zeichencodierung des Dokuments. Das `content`-Attribut muss den Wert `"text/html; charset=utf-8"` haben, falls angegeben. Dies entspricht einem `<meta>`-Element mit dem spezifizierten [`charset`](#charset)-Attribut und unterliegt derselben Einschränkung bezüglich der Platzierung im Dokument. **Hinweis:** Kann nur in Dokumenten verwendet werden, die mit `text/html` serviert werden – nicht in Dokumenten, die mit einem XML-MIME-Typ serviert werden.

        Siehe auch {{HTTPHeader("Content-Type")}}.

    - `default-style`

      - : Legt den Namen des standardmäßigen [CSS-Stylesheets](/de/docs/Web/CSS) fest.

    - `x-ua-compatible`

      - : Falls angegeben, muss das `content`-Attribut den Wert `"IE=edge"` haben. Benutzeragenten müssen diese Pragma ignorieren.

    - `refresh`

      - : Diese Anweisung gibt an:

        - Die Anzahl der Sekunden, bis die Seite neu geladen werden soll – wenn der Wert des Attributs [`content`](#content) eine nicht-negative ganze Zahl ist.
        - Die Anzahl der Sekunden, bis die Seite umleiten soll – wenn der Wert des Attributs [`content`](#content) eine nicht-negative ganze Zahl gefolgt von `;url=` und einer gültigen URL ist.

        Der Timer startet, sobald die Seite _vollständig geladen_ ist, also nachdem sowohl die [`load`](/de/docs/Web/API/Window/load_event)- als auch die [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignisse ausgelöst wurden.

        Siehe auch {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Seiten, die mit einem `refresh`-Wert eingestellt sind, laufen Gefahr, dass das Zeitintervall zu kurz ist. Personen, die mit unterstützenden Technologien wie einem Bildschirmleser navigieren, könnten nicht in der Lage sein, den Inhalt der Seite zu lesen und zu verstehen, bevor sie automatisch umgeleitet werden. Das abrupt und ohne Ankündigung erfolgende Aktualisieren des Seiteninhalts kann auch desorientierend für Menschen mit eingeschränktem Sehvermögen sein.
        >
        > - [MDN Understanding WCAG, Guideline 2.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Understanding WCAG, Guideline 3.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Understanding Success Criterion 2.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Understanding Success Criterion 2.2.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Understanding Success Criterion 3.2.5 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `name`

  - : Die Attribute `name` und `content` können zusammen verwendet werden, um Dokumentmetadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das Attribut `name` den Metadaten-Namen und das Attribut `content` den Wert angibt.

    Siehe [Standard-Metadaten-Namen](/de/docs/Web/HTML/Element/meta/name) für Details über das in der HTML-Spezifikation definierte Set von Standard-Metadaten-Namen.

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
          >Metadaten-Inhalt</a
        >. Wenn das
        <a href="/de/docs/Web/HTML/Global_attributes/itemprop"><code>itemprop</code></a>-Attribut vorhanden ist:
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein [leeres Element](/de/docs/Glossary/void_element).</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
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
            {{HTMLElement("noscript")}}-Elements, das sich innerhalb eines
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
            akzeptiert oder
            <a href="/de/docs/Web/HTML/Content_categories#flow_content"
              >Flussinhalt</a
            >.
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
- [Lernen: `<meta>`](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#metadata_the_meta_element)
- [Das Viewport-Meta-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
