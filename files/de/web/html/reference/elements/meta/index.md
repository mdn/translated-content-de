---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Reference/Elements/meta
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<meta>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert {{Glossary("Metadata", "Metadaten")}}, die nicht durch andere metabezogene Elemente dargestellt werden können, wie z. B. {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}}.

Der Typ der von dem `<meta>`-Element bereitgestellten Metadaten kann einer der folgenden sein:

- Wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut gesetzt ist, bietet das `<meta>`-Element _Dokumentenebenen-Metadaten_, die für die gesamte Seite gelten.
- Wenn das [`http-equiv`](#http-equiv)-Attribut gesetzt ist, fungiert das `<meta>`-Element als _Pragma-Direktive_, um Direktiven zu simulieren, die sonst durch einen HTTP-Header gegeben werden könnten.
- Wenn das [`charset`](#charset)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Zeichensatz-Deklaration_, die die Zeichencodierung angibt, in der das Dokument kodiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut gesetzt ist, bietet das `<meta>`-Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> Das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut hat eine spezifische Bedeutung für das `<meta>`-Element. Das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut darf nicht auf ein `<meta>`-Element gesetzt werden, das ein [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-, [`http-equiv`](#http-equiv)- oder [`charset`](#charset)-Attribut enthält.

- `charset`
  - : Dieses Attribut deklariert die Zeichencodierung des Dokuments. Wenn das Attribut vorhanden ist, muss sein Wert eine ASCII-Groß-/Kleinschreibung unabhängige Übereinstimmung mit dem String `"utf-8"` sein, da UTF-8 die einzige gültige Codierung für HTML5-Dokumente ist. `<meta>`-Elemente, die eine Zeichencodierung deklarieren, müssen sich vollständig innerhalb der ersten 1024 Bytes des Dokuments befinden.
- `content`
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](#http-equiv)- oder [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut, je nachdem, welches verwendet wird.
- `http-equiv`

  - : Definiert eine Pragma-Direktive. Der Attributname, kurz für `http-equivalent`, liegt daran, dass alle zugelassenen Werte Namen bestimmter HTTP-Header sind:

    - `content-security-policy`
      - : Ermöglicht es Seitenautoren, eine [Inhaltspolitik](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) für die aktuelle Seite zu definieren. Inhaltspolitiken spezifizieren hauptsächlich erlaubte Serverquellen und Skriptendpunkte, die dabei helfen, Cross-Site-Scripting-Angriffe zu verhindern.
        Weitere Informationen finden Sie unter {{HTTPHeader("Content-Security-Policy")}}.
    - `content-type`
      - : Deklariert den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) und die Zeichencodierung des Dokuments. Das `content`-Attribut muss den Wert `"text/html; charset=utf-8"` haben, falls angegeben. Dies entspricht einem `<meta>`-Element mit dem [`charset`](#charset)-Attribut und unterliegt der gleichen Einschränkung hinsichtlich der Platzierung innerhalb des Dokuments. **Hinweis:** Kann nur in Dokumenten verwendet werden, die mit einem `text/html` bedient werden — nicht in Dokumenten, die mit einem XML-MIME-Typ bedient werden.
        Siehe auch {{HTTPHeader("Content-Type")}}.
    - `default-style`
      - : Legt den Namen des Standard-[CSS-Stylesheets](/de/docs/Web/CSS) fest.
    - `x-ua-compatible`
      - : Wenn angegeben, muss das `content`-Attribut den Wert `"IE=edge"` haben. Benutzeragenten sind verpflichtet, diese Pragma-Direktive zu ignorieren.
    - `refresh`

      - : Diese Anweisung spezifiziert:

        - Die Anzahl der Sekunden bis zum Neuladen der Seite - wenn der Wert des [`content`](#content)-Attributes eine nicht negative ganze Zahl ist.
        - Die Anzahl der Sekunden bis zum Weiterleiten der Seite zu einer anderen - wenn der Wert des [`content`](#content)-Attributes eine nicht negative ganze Zahl ist, gefolgt von `;url=` und einer gültigen URL.

        Der Timer startet, wenn die Seite _vollständig geladen_ ist, d.h. nach dem Auslösen der [`load`](/de/docs/Web/API/Window/load_event)- und [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignisse.

        Siehe auch {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Seiten, die einen `refresh`-Wert setzen, laufen Gefahr, dass das Zeitintervall zu kurz ist. Personen, die mit Unterstützungstechnologie wie einem Screenreader navigieren, könnten nicht in der Lage sein, den Inhalt der Seite zu lesen und zu verstehen, bevor sie automatisch weitergeleitet werden. Das abrupte, unangekündigte Aktualisieren des Seiteninhalts kann auch für Menschen mit Sehbehinderung verwirrend sein.
        >
        > - [MDN Verstehen WCAG, Richtlinie 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Verstehen WCAG, Richtlinie 3.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Verstehen des Erfolgskriteriums 2.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Verstehen des Erfolgskriteriums 2.2.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Verstehen des Erfolgskriteriums 3.2.5 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `media`
  - : Das `media`-Attribut definiert, auf welche Medien die im `content`-Attribut definierte Themenfarbe angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig auf `alle` eingestellt ist, wenn das Attribut fehlt. Dieses Attribut ist nur relevant, wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des Elements auf [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) gesetzt ist. Andernfalls hat es keine Wirkung und sollte nicht enthalten sein.
- [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)
  - : Die Attribute `name` und `content` können zusammen verwendet werden, um Dokumentmetadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das `name`-Attribut den Metadaten-Namen und das `content`-Attribut den Wert liefert.

## Beispiele

### Setzen einer Meta-Beschreibung

Das folgende `<meta>`-Tag bietet eine `description` als Metadaten für die Webseite:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

### Setzen einer Seitenumleitung

Das folgende Beispiel verwendet `http-equiv="refresh"`, um den Browser anzuweisen, eine Weiterleitung durchzuführen.
Das Attribut `content="3;url=https://www.mozilla.org"` leitet die Seite nach 3 Sekunden auf `https://www.mozilla.org` weiter:

```html
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadaten-Inhalt</a>. Wenn das <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop"><code>itemprop</code></a>-Attribut vorhanden ist:
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fluss-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungs-Inhalt</a>.
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
            {{HTMLElement("head")}} Element. Wenn das
            <a href="#http-equiv"><code>http-equiv</code></a> keine Kodierungsdeklaration ist, kann es sich auch innerhalb eines
            {{HTMLElement("noscript")}}-Elements befinden, das selbst innerhalb eines
            <code>&#x3C;head></code>-Elements liegt.
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
              >Fluss-Inhalt</a
            > akzeptiert.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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

- [Standard-Metadaten-Namen](/de/docs/Web/HTML/Reference/Elements/meta/name)
- [Lernen: `<meta>`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
- [Das viewport meta Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
