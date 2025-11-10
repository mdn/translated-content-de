---
title: "<base>: Das Dokument-Basis-URL-Element"
slug: Web/HTML/Reference/Elements/base
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<base>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert die Basis-URL, die für alle _relativen_ URLs in einem Dokument verwendet wird. In einem Dokument kann es nur ein `<base>`-Element geben.

Die verwendete Basis-URL eines Dokuments kann von Skripten über [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) aufgerufen werden. Wenn das Dokument kein `<base>`-Element hat, wird `baseURI` standardmäßig auf [`location.href`](/de/docs/Web/API/Location/href) gesetzt.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Ein `<base>`-Element muss ein `href`-Attribut, ein `target`-Attribut oder beides haben. Wenn mindestens eines dieser Attribute angegeben ist, muss das `<base>`-Element vor anderen Elementen mit Attributwerten stehen, die URLs sind, wie z.B. das `href`-Attribut eines {{HTMLElement("link")}}.

- `href`
  - : Die Basis-URL, die im gesamten Dokument für relative URLs verwendet werden soll. Absolute und relative URLs sind erlaubt. [`data:`](/de/docs/Web/URI/Reference/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) URLs sind nicht erlaubt.
- `target`
  - : Ein **Schlüsselwort** oder **vom Autor definierter Name** des standardmäßigen {{Glossary("browsing_context", "Browsing-Kontextes")}}, um die Ergebnisse der Navigation von {{HTMLElement("a")}}, {{HTMLElement("area")}} oder {{HTMLElement("form")}}-Elementen ohne explizite `target`-Attribute zu zeigen. Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self` (Standard): Zeigt das Ergebnis im aktuellen Browsing-Kontext.
    - `_blank`: Zeigt das Ergebnis in einem neuen, unbenannten Browsing-Kontext.
    - `_parent`: Zeigt das Ergebnis im Eltern-Browsing-Kontext des aktuellen an, wenn die aktuelle Seite in einem Frame ist. Wenn es keinen Eltern gibt, verhält sich wie `_self`.
    - `_top`: Zeigt das Ergebnis im obersten Browsing-Kontext (dem Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat) an. Wenn es keinen Eltern gibt, verhält sich wie `_self`.

## Nutzungshinweise

### Mehrere \<base>-Elemente

Wenn mehrere `<base>`-Elemente verwendet werden, werden nur das erste `href` und das erste `target` beachtet – alle anderen werden ignoriert.

### Anker im Dokument

Links, die auf ein Fragment im Dokument verweisen – z.B. `<a href="#some-id">` – werden mit dem `<base>` aufgelöst, was eine HTTP-Anfrage an die Basis-URL mit dem angehängten Fragment auslöst.

Zum Beispiel, gegeben `<base href="https://example.com/">` und diesem Link: `<a href="#anchor">Zu Anker</a>`. Der Link verweist auf `https://example.com/#anchor`.

### target darf keine ASCII-Steuerzeichen oder < enthalten

Wenn das [`target`](#target)-Attribut ein ASCII-Steuerzeichen, Tabulator oder das `<`-Zeichen enthält, wird der Wert auf `_blank` zurückgesetzt. Dies dient dazu, Angriffe durch hängendes Markup-Injection zu verhindern, einem skriptlosen Angriff, bei dem ein nicht geschlossenes `target`-Attribut in die Seite injiziert wird, sodass alle darauf folgenden Texte erfasst werden, bis der Browser auf ein Zeichen trifft, das das Attribut schließt.

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
      <td>Metadateninhalt.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("head")}}, das kein anderes <code>&lt;base&gt;</code>-Element enthält.
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
