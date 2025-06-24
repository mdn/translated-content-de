---
title: "<base>: Das Document Base URL Element"
slug: Web/HTML/Reference/Elements/base
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<base>`** [HTML](/de/docs/Web/HTML)-Element gibt die Basis-URL an, die für alle _relativen_ URLs in einem Dokument verwendet werden soll. Es darf nur ein `<base>`-Element in einem Dokument vorhanden sein.

Die verwendete Basis-URL eines Dokuments kann von Skripten mit [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) abgerufen werden. Wenn das Dokument kein `<base>`-Element hat, ist `baseURI` standardmäßig auf [`location.href`](/de/docs/Web/API/Location/href) gesetzt.

## Attribute

Die Attribute dieses Elements schließen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ein.

> [!WARNING]
> Ein `<base>`-Element muss ein `href`-Attribut, ein `target`-Attribut oder beides haben.
> Wenn mindestens eines dieser Attribute angegeben ist, muss das `<base>`-Element **vor** anderen Elementen mit Attributwerten, die URLs sind, wie z.B. dem `href`-Attribut eines {{HTMLElement("link")}}, stehen.

- `href`
  - : Die Basis-URL, die im gesamten Dokument für relative URLs verwendet werden soll.
    Absolute und relative URLs sind erlaubt.
    [`data:`](/de/docs/Web/URI/Reference/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) URLs sind nicht erlaubt.
- `target`
  - : Ein **Schlüsselwort** oder **autordefinierter Name** des Standard-{{Glossary("browsing_context", "Browser-Kontextes")}}, um die Ergebnisse der Navigation von {{HTMLElement("a")}}, {{HTMLElement("area")}}, oder {{HTMLElement("form")}}-Elementen ohne explizite `target`-Attribute anzuzeigen. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self` (Standard): Zeigt das Ergebnis im aktuellen Browser-Kontext an.
    - `_blank`: Zeigt das Ergebnis in einem neuen, unbenannten Browser-Kontext an.
    - `_parent`: Zeigt das Ergebnis im übergeordneten Browser-Kontext des aktuellen an, falls die aktuelle Seite in einem Rahmen liegt. Wenn es keinen übergeordneten Kontext gibt, verhält es sich wie `_self`.
    - `_top`: Zeigt das Ergebnis im obersten Browser-Kontext an (dem Browser-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Wenn es keinen übergeordneten Kontext gibt, verhält es sich wie `_self`.

## Anwendungshinweise

### Mehrere <base>-Elemente

Wenn mehrere `<base>`-Elemente verwendet werden, werden nur das erste `href` und das erste `target` beachtet — alle anderen werden ignoriert.

### Anker innerhalb der Seite

Links, die auf ein Fragment im Dokument verweisen — z.B. `<a href="#some-id">` — werden mit der `<base>` aufgelöst, wodurch eine HTTP-Anfrage an die Basis-URL mit dem angehängten Fragment ausgelöst wird.

Zum Beispiel, gegeben `<base href="https://example.com/">` und diesen Link: `<a href="#anchor">Zum Anker</a>`. Der Link verweist auf `https://example.com/#anchor`.

### target darf keine ASCII-Newline, Tab oder < enthalten

Wenn das [`target`](#target)-Attribut eine ASCII-Newline, einen Tab oder das `<`-Zeichen enthält, wird der Wert auf `_blank` zurückgesetzt.
Dies soll verhindern, dass Markup-Injektionsangriffe ohne Skripte erfolgen, bei denen ein nicht geschlossenes `target`-Attribut in die Seite injiziert wird, sodass jeder nachfolgende Text erfasst wird, bis der Browser auf ein Zeichen stößt, das das Attribut schließt.

### Open Graph

[Open Graph](https://ogp.me/)-Tags erkennen `<base>` nicht an und sollten immer vollständige absolute URLs haben. Zum Beispiel:

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
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("head")}}, das kein weiteres <code>&lt;base&gt;</code>-Element enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
