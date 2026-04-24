---
title: "`<meta>` HTML-Metadaten-Element"
short-title: <meta>
slug: Web/HTML/Reference/Elements/meta
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<meta>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert {{Glossary("Metadata", "Metadaten")}}, die nicht durch andere Metadaten-bezogene Elemente wie {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}} dargestellt werden können.

Der Typ der vom `<meta>`-Element bereitgestellten Metadaten kann folgendermaßen sein:

- Wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut gesetzt ist, stellt das `<meta>`-Element _dokumentweite Metadaten_ bereit, die für die gesamte Seite gelten.
- Wenn das [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut gesetzt ist, fungiert das `<meta>`-Element als _Pragma-Direktive_, um Direktiven zu simulieren, die sonst durch einen HTTP-Header gegeben werden könnten.
- Wenn das [`charset`](#charset)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Zeichensatzdeklaration_, die die Zeichenkodierung angibt, in der das Dokument kodiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut gesetzt ist, stellt das `<meta>`-Element _benutzerdefinierte Metadaten_ bereit.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> Das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut hat eine spezifische Bedeutung für das `<meta>`-Element.
> Das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut darf nicht bei einem `<meta>`-Element gesetzt werden, das ein [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-, [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)- oder [`charset`](#charset)-Attribut enthält.

- `charset`
  - : Dieses Attribut gibt die Zeichenkodierung des Dokuments an. Wenn das Attribut vorhanden ist, muss sein Wert eine ASCII-fallunempfindliche Übereinstimmung mit dem String `"utf-8"` sein, da UTF-8 die einzige gültige Kodierung für HTML5-Dokumente ist. `<meta>`-Elemente, die eine Zeichenkodierung deklarieren, müssen vollständig innerhalb der ersten 1024 Bytes des Dokuments liegen.
- [`content`](/de/docs/Web/HTML/Reference/Attributes/content)
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)- oder [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut, je nachdem, welches verwendet wird.
- [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)
  - : Definiert eine Pragma-Direktive, die Anweisungen für den Browser zur Verarbeitung des Dokuments sind.
    Der Attributname ist eine Kurzform für `http-equivalent`, da die zulässigen Werte Namen von gleichwertigen HTTP-Headern sind.
- `media`
  - : Das `media`-Attribut definiert, auf welche Medien die im `content`-Attribut definierte Themenfarbe angewendet werden soll.
    Sein Wert ist eine [Media Query](/de/docs/Web/CSS/Guides/Media_queries/Using), die standardmäßig `all` ist, wenn das Attribut fehlt.
    Dieses Attribut ist nur relevant, wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des Elements auf [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) gesetzt ist.
    Andernfalls hat es keine Wirkung und sollte nicht eingeschlossen werden.
- [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)
  - : Die Attribute `name` und `content` können zusammen verwendet werden, um Dokumentmetadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das `name`-Attribut den Metadatennamen und das `content`-Attribut den Wert angibt.

## Beispiele

### Eine Meta-Beschreibung setzen

Das folgende `<meta>`-Tag stellt eine `description` als Metadaten für die Webseite bereit:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

### Eine Seitenweiterleitung einrichten

Das folgende Beispiel verwendet `http-equiv="refresh"`, um den Browser anzuweisen, eine Weiterleitung auszuführen.
Das `content="3;url=https://www.mozilla.org"`-Attribut leitet die Seite nach 3 Sekunden zu `https://www.mozilla.org` weiter:

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
        >. Wenn das
        <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop"><code>itemprop</code></a>-Attribut vorhanden ist:
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
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
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
            {{HTMLElement("head")}}-Element. Wenn das
            <a href="/de/docs/Web/HTML/Reference/Elements/meta/http-equiv"><code>http-equiv</code></a>
            keine Kodierungsdeklaration ist, kann es auch innerhalb eines
            {{HTMLElement("noscript")}}-Elements sein, das sich selbst innerhalb eines
            <code>&#x3C;head></code>-Elements befindet.
          </li>
          <li>
            <code>&#x3C;meta name></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >Metadaten-Inhalt akzeptiert</a
            >.
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >Metadaten-Inhalt akzeptiert</a
            >
            oder
            <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
              >Flussinhalt</a
            >.
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

- [Standardmetadatennamen](/de/docs/Web/HTML/Reference/Elements/meta/name)
- [Lernen: `<meta>`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
