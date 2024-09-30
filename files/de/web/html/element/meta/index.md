---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Element/meta
l10n:
  sourceCommit: cbbe2e84fbf84f6af2d889bb44dd7e0521a18469
---

{{HTMLSidebar}}

Das **`<meta>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert [Metadaten](/de/docs/Glossary/Metadata), die nicht durch andere HTML-meta-bezogene Elemente wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}} dargestellt werden können.

Die Art der durch das `<meta>`-Element bereitgestellten Metadaten kann eine der folgenden sein:

- Wenn das [`name`](#name)-Attribut gesetzt ist, bietet das `<meta>`-Element _Metadaten auf Dokument-Ebene_, die für die ganze Seite gelten.
- Wenn das [`http-equiv`](#http-equiv)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Pragma-Direktive_, die Informationen bereitstellt, die einem gleichnamigen HTTP-Header entsprechen.
- Wenn das [`charset`](#charset)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Zeichensatzdeklaration_, die die Zeichenkodierung angibt, in der das Dokument kodiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut gesetzt ist, liefert das `<meta>`-Element vom Benutzer definierte Metadaten.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das Attribut [`name`](#name) hat eine spezifische Bedeutung für das `<meta>`-Element, und das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut darf nicht auf demselben `<meta>`-Element gesetzt werden, das bereits über [`name`](#name), [`http-equiv`](#http-equiv) oder [`charset`](#charset) Attribute verfügt.

- `charset`
  - : Dieses Attribut deklariert die Zeichenkodierung des Dokuments. Wenn das Attribut vorhanden ist, muss dessen Wert eine ASCII-schreibsensible Übereinstimmung für den String `"utf-8"` sein, da UTF-8 die einzige gültige Kodierung für HTML5-Dokumente ist. `<meta>`-Elemente, die eine Zeichensatzkodierung angeben, müssen sich vollständig innerhalb der ersten 1024 Bytes des Dokuments befinden.
- `content`
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](#http-equiv)- oder [`name`](#name)-Attribut, je nachdem, welches verwendet wird.
- `http-equiv`

  - : Definiert eine Pragma-Direktive. Der Name des Attributs, eine Kurzform von `http-equivalent`, kommt daher, dass alle erlaubten Werte Namen bestimmter HTTP-Header sind:

    - `content-security-policy`

      - : Ermöglicht es den Seitenautoren, eine [Content-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy) für die aktuelle Seite zu definieren. Content-Policies legen meist erlaubte Server-Ursprünge und Skript-Endpunkte fest, die dazu beitragen, Cross-Site-Scripting-Angriffe zu verhindern.

        Siehe auch {{HTTPHeader("Content-Security-Policy")}}.

    - `content-type`

      - : Deklariert den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) und die Zeichenkodierung des Dokuments. Das `content`-Attribut muss den Wert `"text/html; charset=utf-8"` haben, falls angegeben. Dies entspricht einem `<meta>`-Element mit dem angegebenen [`charset`](#charset)-Attribut und unterliegt denselben Einschränkungen hinsichtlich der Platzierung im Dokument. **Hinweis:** Kann nur in Dokumenten verwendet werden, die mit einem `text/html` - nicht in Dokumenten verwendet, die mit einem XML-MIME-Typ bereitgestellt werden.

        Siehe auch {{HTTPHeader("Content-Type")}}.

    - `default-style`

      - : Legt den Namen des Standard-[CSS-Stilbogens](/de/docs/Web/CSS) fest.

    - `x-ua-compatible`

      - : Wenn angegeben, muss das `content`-Attribut den Wert `"IE=edge"` haben. Benutzeragenten müssen diese Pragma ignorieren.

    - `refresh`

      - : Diese Anweisung gibt an:

        - Die Anzahl der Sekunden, bis die Seite neu geladen werden soll - wenn der Wert des [`content`](#content)-Attributs eine nicht negative Ganzzahl ist.
        - Die Anzahl der Sekunden, bis die Seite zu einer anderen weiterleiten soll - wenn der Wert des [`content`](#content)-Attributs eine nicht negative Ganzzahl gefolgt von `;url=` und einer gültigen URL ist.

        Der Timer beginnt, wenn die Seite _vollständig geladen_ ist, was nach dem Eintreten der [`load`](/de/docs/Web/API/Window/load_event) und [`pageshow`](/de/docs/Web/API/Window/pageshow_event) Ereignisse der Fall ist.

        Siehe auch {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Seiten, die mit einem `refresh`-Wert eingestellt sind, laufen Gefahr, dass das Zeitintervall zu kurz ist. Personen, die sich mit Hilfe von assistiver Technologie wie einem Bildschirmlesegerät fortbewegen, könnten nicht in der Lage sein, den Inhalt der Seite vollständig zu lesen und zu verstehen, bevor sie automatisch weitergeleitet werden. Die abrupte, unangekündigte Aktualisierung des Seiteninhalts kann auch für Menschen mit Sehbehinderungen verwirrend sein.
        >
        > - [MDN Verstehen von WCAG, Richtlinie 2.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Verstehen von WCAG, Richtlinie 3.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Verstehen von Erfolgskriterium 2.2.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Verstehen von Erfolgskriterium 2.2.4 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Verstehen von Erfolgskriterium 3.2.5 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `name`

  - : Die `name`- und `content`-Attribute können zusammen verwendet werden, um Dokumentmetadaten in Form von Namens-Wert-Paaren bereitzustellen, wobei das `name`-Attribut den Metadaten-Namen und das `content`-Attribut den Wert angibt.

    Siehe [standardisierte Metadaten-Namen](/de/docs/Web/HTML/Element/meta/name) für Details über die Menge von standardisierten Metadaten-Namen, die in der HTML-Spezifikation definiert sind.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein [void element](/de/docs/Glossary/void_element).</td>
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
            {{HTMLElement("noscript")}}-Elements sein, selbst innerhalb eines
            <code>&#x3C;head></code>-Elements.
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
- [Das viewport meta tag](/de/docs/Web/HTML/Viewport_meta_tag)
