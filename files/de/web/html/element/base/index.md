---
title: "<base>: Das Document Base URL-Element"
slug: Web/HTML/Element/base
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Das **`<base>`** [HTML](/de/docs/Web/HTML) Element gibt die Basis-URL an, die für alle _relativen_ URLs in einem Dokument verwendet werden soll. Es kann nur ein `<base>` Element in einem Dokument vorhanden sein.

Die verwendete Basis-URL eines Dokuments kann durch Skripte mit [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) abgerufen werden. Wenn das Dokument keine `<base>` Elemente besitzt, wird `baseURI` standardmäßig auf [`location.href`](/de/docs/Web/API/Location/href) gesetzt.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Ein `<base>` Element muss ein `href`-Attribut, ein `target`-Attribut oder beides besitzen.
> Wenn mindestens eines dieser Attribute angegeben ist, muss das `<base>` Element **vor** anderen Elementen kommen, deren Attributwerte URLs sind, wie zum Beispiel das `href` Attribut eines {{HTMLElement("link")}}.

- `href`
  - : Die Basis-URL, die im gesamten Dokument für relative URLs verwendet werden soll.
    Absolute und relative URLs sind erlaubt.
    [`data:`](/de/docs/Web/URI/Reference/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) URLs sind nicht erlaubt.
- `target`

  - : Ein **Schlüsselwort** oder ein **vom Autor definierter Name** des Standard-{{Glossary("browsing_context", "Browsing-Kontextes")}}, in dem die Ergebnisse der Navigation von {{HTMLElement("a")}}, {{HTMLElement("area")}} oder {{HTMLElement("form")}} Elementen ohne explizite `target` Attribute angezeigt werden sollen. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (Standard): Zeigt das Ergebnis im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt das Ergebnis in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigt das Ergebnis im übergeordneten Browsing-Kontext des aktuellen an, falls die aktuelle Seite in einem Frame enthalten ist. Wenn es keinen Eltern gibt, verhält es sich wie `_self`.
    - `_top`: Zeigt das Ergebnis im obersten Browsing-Kontext an (derjenige Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat). Wenn es keinen Eltern gibt, verhält es sich wie `_self`.

## Verwendungshinweise

### Mehrere `<base>` Elemente

Wenn mehrere `<base>` Elemente verwendet werden, werden nur die ersten `href` und `target` berücksichtigt — alle anderen werden ignoriert.

### Anker im Dokument

Links, die auf ein Fragment im Dokument verweisen — z.B. `<a href="#some-id">` — werden mit dem `<base>` gelöst, wodurch eine HTTP-Anfrage an die Basis-URL mit dem angehängten Fragment ausgelöst wird.

Beispielsweise: Angenommen es gibt `<base href="https://example.com/">` und diesen Link: `<a href="#anchor">Zu Anker</a>`. Der Link verweist auf `https://example.com/#anchor`.

### target darf keine ASCII Newlines, Tabs oder < enthalten

Wenn das [`target`](#target) Attribut eine ASCII-Newline, Tab oder `<` enthält, wird der Wert auf `_blank` zurückgesetzt.
Dies soll Angriffe durch hängende Markup-Injektionen verhindern, eine skriptlose Attacke, bei der ein nicht geschlossenes `target` Attribut in die Seite injiziert wird, sodass jeder nachfolgende Text erfasst wird, bis der Browser ein Zeichen erreicht, das das Attribut schließt.

### Open Graph

[Open Graph](https://ogp.me/) Tags erkennen `<base>` nicht an und sollten immer vollständige absolute URLs beinhalten. Beispielsweise:

```html
<meta property="og:image" content="https://example.com/thumbnail.jpg" />
```

## Beispiele

```html
<base href="https://www.example.com/" />
<base target="_blank" />
<base target="_top" href="https://example.com/" />
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Metadaten-Inhalt.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Starttag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("head")}} das kein weiteres <code>&lt;base&gt;</code> Element enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLBaseElement`](/de/docs/Web/API/HTMLBaseElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
