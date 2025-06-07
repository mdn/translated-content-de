---
title: "<base>: Das Dokumentbasis-URL-Element"
slug: Web/HTML/Reference/Elements/base
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<base>`** [HTML](/de/docs/Web/HTML) Element legt die Basis-URL fest, die für alle _relativen_ URLs in einem Dokument verwendet wird. Es kann nur ein `<base>` Element in einem Dokument geben.

Die im Dokument verwendete Basis-URL kann von Skripten mit [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) abgerufen werden. Wenn das Dokument keine `<base>` Elemente enthält, lautet der Standardwert von `baseURI` [`location.href`](/de/docs/Web/API/Location/href).

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Ein `<base>` Element muss ein `href` Attribut, ein `target` Attribut oder beides haben.
> Wenn mindestens eines dieser Attribute angegeben ist, muss das `<base>` Element vor anderen Elementen mit Attributwerten, die URLs sind, erscheinen, wie z.B. das `href` Attribut eines {{HTMLElement("link")}}.

- `href`
  - : Die Basis-URL, die im gesamten Dokument für relative URLs verwendet werden soll.
    Absolute und relative URLs sind erlaubt.
    [`data:`](/de/docs/Web/URI/Reference/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) URLs sind nicht erlaubt.
- `target`

  - : Ein **Schlüsselwort** oder **vom Autor definierter Name** des Standard-{{Glossary("browsing_context", "Browsing-Kontextes")}}, um die Ergebnisse der Navigation von {{HTMLElement("a")}}, {{HTMLElement("area")}} oder {{HTMLElement("form")}} Elementen ohne explizite `target` Attribute anzuzeigen. Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self` (Standard): Zeigt das Ergebnis im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt das Ergebnis in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigt das Ergebnis im übergeordneten Browsing-Kontext des aktuellen an, wenn die aktuelle Seite innerhalb eines Frames ist. Wenn es keinen übergeordneten Kontext gibt, verhält es sich wie `_self`.
    - `_top`: Zeigt das Ergebnis im obersten Browsing-Kontext an (der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Wenn es keinen übergeordneten Kontext gibt, verhält es sich wie `_self`.

## Anwendungshinweise

### Mehrere \<base> Elemente

Wenn mehrere `<base>` Elemente verwendet werden, werden nur die erste `href` und die erste `target` beachtet — alle anderen werden ignoriert.

### Ankerpunkte innerhalb der Seite

Links, die auf ein Fragment im Dokument verweisen — z.B. `<a href="#some-id">` — werden mit der `<base>` aufgelöst, was eine HTTP-Anfrage an die Basis-URL mit dem angehängten Fragment auslöst.

Beispielsweise verweist bei `<base href="https://example.com/">` und diesem Link `<a href="#anchor">Zum Anker</a>` der Link auf `https://example.com/#anchor`.

### Der `target` darf kein ASCII-Zeilenumbruch, Tab oder < enthalten

Wenn das [`target`](#target) Attribut einen ASCII-Zeilenumbruch, ein Tab oder das Zeichen `<` enthält, wird der Wert auf `_blank` zurückgesetzt.
Dies soll hängen gebliebene Markup-Injections verhindern, einen skriplosen Angriff, bei dem ein nicht geschlossenes `target` Attribut in die Seite injiziert wird, sodass jeder nachfolgende Text erfasst wird, bis der Browser ein Zeichen erreicht, das das Attribut schließt.

### Open Graph

[Open Graph](https://ogp.me/) Tags erkennen `<base>` nicht an und sollten stets vollständige absolute URLs enthalten. Zum Beispiel:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Metadaten-Inhalt.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
      <td>
        Ein {{HTMLElement("head")}}, das kein anderes <code>&lt;base&gt;</code> Element enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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
