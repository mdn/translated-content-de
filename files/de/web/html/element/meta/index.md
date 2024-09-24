---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Element/meta
l10n:
  sourceCommit: cbbe2e84fbf84f6af2d889bb44dd7e0521a18469
---

{{HTMLSidebar}}

Das **`<meta>`** [HTML](/de/docs/Web/HTML) Element repräsentiert {{Glossary("Metadata","Metadaten")}}, die nicht durch andere HTML-Meta-bezogene Elemente wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}} dargestellt werden können.

Der Typ von Metadaten, die durch das `<meta>` Element bereitgestellt werden, kann einer der folgenden sein:

- Wenn das [`name`](#name) Attribut gesetzt ist, liefert das `<meta>` Element _dokumentenbezogene Metadaten_, die für die gesamte Seite gelten.
- Wenn das [`http-equiv`](#http-equiv) Attribut gesetzt ist, ist das `<meta>` Element eine _Pragma-Direktive_, die Informationen bereitstellt, die einem gleichnamigen HTTP-Header entsprechen können.
- Wenn das [`charset`](#charset) Attribut gesetzt ist, ist das `<meta>` Element eine _Zeichensatzdeklaration_, die die Zeichenkodierung angibt, in der das Dokument kodiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop) Attribut gesetzt ist, liefert das `<meta>` Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das Attribut [`name`](#name) hat eine spezifische Bedeutung für das `<meta>` Element, und das Attribut [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop) darf nicht auf dasselbe `<meta>` Element gesetzt werden, auf dem bereits die Attribute [`name`](#name), [`http-equiv`](#http-equiv) oder [`charset`](#charset) vorhanden sind.

- `charset`
  - : Dieses Attribut deklariert die Zeichenkodierung des Dokuments. Wenn das Attribut vorhanden ist, muss sein Wert eine ASCII-fallunabhängige Übereinstimmung mit dem String `"utf-8"` sein, da UTF-8 die einzige gültige Kodierung für HTML5-Dokumente ist. `<meta>` Elemente, die eine Zeichenkodierung deklarieren, müssen sich vollständig innerhalb der ersten 1024 Bytes des Dokuments befinden.
- `content`
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](#http-equiv) oder [`name`](#name) Attribut, je nachdem welches verwendet wird.
- `http-equiv`

  - : Definiert eine Pragma-Direktive. Der Name des Attributs, kurz für `http-equivalent`, stammt daher, dass alle erlaubten Werte Namen bestimmter HTTP-Header sind:

    - `content-security-policy`

      - : Ermöglicht es Seitenautoren, eine [Inhaltspolitik](/de/docs/Web/HTTP/Headers/Content-Security-Policy) für die aktuelle Seite zu definieren. Inhaltspolitiken spezifizieren hauptsächlich erlaubte Server-Ursprünge und Skriptendpunkte, die helfen, Cross-Site-Scripting-Angriffe zu verhindern.

        Siehe auch {{HTTPHeader("Content-Security-Policy")}}.

    - `content-type`

      - : Deklariert den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) und die Zeichenkodierung des Dokuments. Das `content` Attribut muss den Wert `"text/html; charset=utf-8"` haben, falls angegeben. Dies ist äquivalent zu einem `<meta>` Element mit dem spezifizierten [`charset`](#charset) Attribut und unterliegt derselben Einschränkung bezüglich der Platzierung im Dokument. **Hinweis:** Kann nur in Dokumenten verwendet werden, die mit `text/html` bedient werden — nicht in Dokumenten, die mit einem XML-MIME-Typ serviert werden.

        Siehe auch {{HTTPHeader("Content-Type")}}.

    - `default-style`

      - : Setzt den Namen des standardmäßigen [CSS-Stylesheets](/de/docs/Web/CSS).

    - `x-ua-compatible`

      - : Falls angegeben, muss das `content` Attribut den Wert `"IE=edge"` haben. Benutzeragenten müssen dieses Pragma ignorieren.

    - `refresh`

      - : Diese Anweisung gibt an:

        - Die Anzahl der Sekunden bis zur erneuten Ladezeit der Seite - wenn der Wert des [`content`](#content) Attributs eine nicht-negative Ganzzahl ist.
        - Die Anzahl der Sekunden bis die Seite zu einer anderen umleiten soll - wenn der Wert des [`content`](#content) Attributs eine nicht-negative Ganzzahl gefolgt von `;url=` und einer gültigen URL ist.

        Der Timer startet, wenn die Seite _vollständig geladen_ ist, das heißt, nachdem sowohl das {{domxref("Window/load_event", "load")}} als auch das {{domxref("Window/pageshow_event", "pageshow")}} Ereignis ausgelöst wurden.

        Siehe auch {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Seiten, die mit einem `refresh` Wert gesetzt sind, laufen Gefahr, dass das Zeitintervall zu kurz ist. Personen, die mit Hilfstechnologien wie einem Bildschirmleser navigieren, können möglicherweise die Inhalte der Seite nicht lesen und verstehen, bevor sie automatisch umgeleitet werden. Das abrupte, unangekündigte Aktualisieren des Seiteninhalts kann für Personen mit Sehbehinderungen ebenfalls verwirrend sein.
        >
        > - [MDN Understanding WCAG, Guideline 2.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Understanding WCAG, Guideline 3.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Understanding Success Criterion 2.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Understanding Success Criterion 2.2.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Understanding Success Criterion 3.2.5 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `name`

  - : Die Attribute `name` und `content` können zusammen verwendet werden, um Dokumenten-Metadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das `name` Attribut den Metadaten-Namen und das `content` Attribut den Wert angibt.

    Siehe [standardisierte Metadatennamen](/de/docs/Web/HTML/Element/meta/name) für Details über die Menge der standardisierten Metadatennamen, die in der HTML-Spezifikation definiert sind.

## Beispiele

```html
<meta charset="utf-8" />

<!-- Seite nach 3 Sekunden umleiten -->
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
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void element", "leeres Element")}}.</td>
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
            {{HTMLElement("head")}} Element. Wenn das
            <a href="#http-equiv"><code>http-equiv</code></a> keine
            Kodierungserklärung ist, kann es sich auch innerhalb eines
            {{HTMLElement("noscript")}} Elements befinden, das sich selbst innerhalb eines
            <code>&#x3C;head></code> Elements befindet.
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
            > akzeptiert
            oder
            <a href="/de/docs/Web/HTML/Content_categories#flow_content"
              >Fluss-Inhalt</a
            >.
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
      <td>{{domxref("HTMLMetaElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Standardisierte Metadatennamen](/de/docs/Web/HTML/Element/meta/name)
- [Lernen: `<meta>`](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#metadata_the_meta_element)
- [Das viewport Meta-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
