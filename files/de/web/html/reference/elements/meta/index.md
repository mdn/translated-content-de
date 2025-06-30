---
title: "<meta>: Das Metadaten-Element"
slug: Web/HTML/Reference/Elements/meta
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

{{HTMLSidebar}}

Das **`<meta>`**-Element von [HTML](/de/docs/Web/HTML) repräsentiert {{Glossary("Metadata", "Metadaten")}}, die nicht von anderen metadatenbezogenen Elementen dargestellt werden können, wie z. B. {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("title")}}.

Der Typ der durch das `<meta>`-Element bereitgestellten Metadaten kann einer der folgenden sein:

- Wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut gesetzt ist, bietet das `<meta>`-Element _dokumentweite Metadaten_, die für die gesamte Seite gelten.
- Wenn das [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut gesetzt ist, agiert das `<meta>`-Element als _Pragma-Direktive_, um Direktiven zu simulieren, die sonst durch einen HTTP-Header gegeben werden könnten.
- Wenn das [`charset`](#charset)-Attribut gesetzt ist, ist das `<meta>`-Element eine _Zeichensatzdeklaration_, die die Zeichencodierung angibt, in der das Dokument kodiert ist.
- Wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut gesetzt ist, bietet das `<meta>`-Element _benutzerdefinierte Metadaten_.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> Das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut hat eine spezifische Bedeutung für das `<meta>`-Element.
> Das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut darf nicht auf einem `<meta>`-Element gesetzt werden, das ein [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-, [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)- oder [`charset`](#charset)-Attribut enthält.

- `charset`
  - : Dieses Attribut deklariert die Zeichencodierung des Dokuments. Wenn das Attribut vorhanden ist, muss sein Wert eine ASCII-fallunabhängige Übereinstimmung mit der Zeichenfolge `"utf-8"` sein, da UTF-8 die einzige gültige Kodierung für HTML5-Dokumente ist. `<meta>`-Elemente, die eine Zeichencodierung deklarieren, müssen vollständig innerhalb der ersten 1024 Bytes des Dokuments platziert werden.
- [`content`](/de/docs/Web/HTML/Reference/Attributes/content)
  - : Dieses Attribut enthält den Wert für das [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)- oder [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut, je nachdem, welches verwendet wird.
- [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)
  - : Definiert eine Pragma-Direktive, die Anweisungen für den Browser zur Verarbeitung des Dokuments sind.
    Der Name des Attributs ist eine Abkürzung für `http-equivalent`, da die erlaubten Werte Namen von gleichwertigen HTTP-Headern sind.
- `media`
  - : Das `media`-Attribut definiert, auf welche Medien die im `content`-Attribut definierte Farbgestaltung angewendet werden soll.
    Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig auf `all` gesetzt ist, wenn das Attribut fehlt.
    Dieses Attribut ist nur relevant, wenn das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des Elements auf [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) gesetzt ist.
    Andernfalls hat es keine Wirkung und sollte nicht enthalten sein.
- [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)
  - : Die Attribute `name` und `content` können zusammen verwendet werden, um Dokumentmetadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das `name`-Attribut den Namen der Metadaten angibt und das `content`-Attribut den Wert.

## Beispiele

### Eine Meta-Beschreibung festlegen

Das folgende `<meta>`-Tag bietet eine `description` als Metadaten für die Webseite:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

### Eine Seitenumleitung einrichten

Das folgende Beispiel verwendet `http-equiv="refresh"`, um den Browser anzuweisen, eine Umleitung durchzuführen.
Das Attribut `content="3;url=https://www.mozilla.org"` wird die Seite nach 3 Sekunden zu `https://www.mozilla.org` umleiten:

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
          >Metadatenelemente</a
        >. Wenn das <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop"><code>itemprop</code></a>-Attribut vorhanden ist:
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrase-Inhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Weglassung</th>
      <td>Es muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        <ul>
          <li>
            <code>&#x3C;meta charset></code>,
            <code>&#x3C;meta http-equiv></code>: ein
            {{HTMLElement("head")}}-Element. Wenn der
            <a href="/de/docs/Web/HTML/Reference/Elements/meta/http-equiv"><code>http-equiv</code></a> keine
            Kodierungsdeklaration ist, kann es auch innerhalb eines
            {{HTMLElement("noscript")}}-Elements, selbst innerhalb eines
            <code>&#x3C;head></code>-Elements sein.
          </li>
          <li>
            <code>&#x3C;meta name></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >Metadateninhalt</a
            > akzeptiert.
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: jedes Element, das
            <a
              href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >Metadateninhalt</a
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
- [Das viewport meta tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
