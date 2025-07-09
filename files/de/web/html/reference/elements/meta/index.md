---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Reference/Elements/meta
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<meta>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert {{Glossary("Metadata", "Metadaten")}}, die nicht durch andere metabezogene Elemente wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}} dargestellt werden können.

Der Typ der vom `<meta>`-Element bereitgestellten Metadaten kann einer der folgenden sein:

- Wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut gesetzt ist, bietet das `<meta>`-Element _Dokumentenebene-Metadaten_, die für die gesamte Seite gelten.
- Wenn das [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut gesetzt ist, fungiert das `<meta>`-Element als _Pragma-Direktive_, um Direktiven zu simulieren, die sonst durch einen HTTP-Header gegeben werden könnten.
- Wenn das [`charset`](#charset)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Zeichensatzdeklaration_, die die Zeichenkodierung angibt, in der das Dokument kodiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut gesetzt ist, bietet das `<meta>`-Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> Das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut hat eine spezifische Bedeutung für das `<meta>`-Element.
> Das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut darf nicht auf ein `<meta>`-Element gesetzt werden, das ein [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-, [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)- oder [`charset`](#charset)-Attribut enthält.

- `charset`
  - : Dieses Attribut deklariert die Zeichenkodierung des Dokuments. Wenn das Attribut vorhanden ist, muss sein Wert insensitiv gegenüber Groß-/Kleinschreibung mit der Zeichenfolge `"utf-8"` übereinstimmen, da UTF-8 die einzige gültige Kodierung für HTML5-Dokumente ist. `<meta>`-Elemente, die eine Zeichensatzkodierung deklarieren, müssen sich vollständig innerhalb der ersten 1024 Bytes des Dokuments befinden.
- [`content`](/de/docs/Web/HTML/Reference/Attributes/content)
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)- oder [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut, je nachdem, welches verwendet wird.
- [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)
  - : Definiert eine Pragma-Direktive, die Anweisungen für den Browser zur Verarbeitung des Dokuments enthält. Der Attributname steht für `http-equivalent`, weil die erlaubten Werte Namen von gleichwertigen HTTP-Headern sind.
- `media`
  - : Das `media`-Attribut definiert, auf welche Medien die im `content`-Attribut definierte Themenfarbe angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig auf `all` gesetzt ist, falls das Attribut fehlt. Dieses Attribut ist nur relevant, wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des Elements auf [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) gesetzt ist. Andernfalls hat es keine Wirkung und sollte nicht enthalten sein.
- [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)
  - : Die Attribute `name` und `content` können zusammen verwendet werden, um Dokumentmetadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das `name`-Attribut den Metadaten-Namen und das `content`-Attribut den Wert angibt.

## Beispiele

### Setzen einer Meta-Beschreibung

Der folgende `<meta>`-Tag bietet eine `description` als Metadaten für die Webseite:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

### Setzen einer Seitenweiterleitung

Das folgende Beispiel verwendet `http-equiv="refresh"`, um den Browser anzuweisen, eine Weiterleitung durchzuführen. Das `content="3;url=https://www.mozilla.org"`-Attribut leitet die Seite nach 3 Sekunden auf `https://www.mozilla.org` weiter:

```html
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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss einen Starttag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        <ul>
          <li>
            <code>&#x3C;meta charset></code>,
            <code>&#x3C;meta http-equiv></code>: ein
            {{HTMLElement("head")}}-Element. Wenn
            <a href="/de/docs/Web/HTML/Reference/Elements/meta/http-equiv"><code>http-equiv</code></a> keine Kodierungsdeklaration ist, kann es auch innerhalb eines
            {{HTMLElement("noscript")}}-Elements enthalten sein, das sich innerhalb eines
            <code>&#x3C;head></code>-Elements befindet.
          </li>
          <li>
            <code>&#x3C;meta name></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >Metadaten-Inhalte</a
            > akzeptiert.
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >Metadaten-Inhalte</a
            >
            oder
            <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
              >Fluss-Inhalte</a
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

- [Standard-Metadaten-Namen](/de/docs/Web/HTML/Reference/Elements/meta/name)
- [Lernen: `<meta>`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
- [Das Viewport-Meta-Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
