---
title: "<base>: Das Document Base URL Element"
slug: Web/HTML/Element/base
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{HTMLSidebar}}

Das **`<base>`** [HTML](/de/docs/Web/HTML)-Element legt die Basis-URL fest, die für alle _relativen_ URLs in einem Dokument verwendet werden soll. In einem Dokument kann es nur ein `<base>`-Element geben.

Die verwendete Basis-URL eines Dokuments kann von Skripten mit {{domxref('Node.baseURI')}} abgerufen werden. Wenn das Dokument keine `<base>`-Elemente enthält, wird `baseURI` standardmäßig zu {{domxref("location.href")}}.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Ein `<base>`-Element muss ein `href`-Attribut, ein `target`-Attribut oder beides haben.
> Wenn mindestens eines dieser Attribute angegeben ist, **muss** das `<base>`-Element vor anderen Elementen mit Attributwerten, die URLs darstellen, wie zum Beispiel einem {{HTMLElement("link")}}'s `href`-Attribut, stehen.

- `href`
  - : Die Basis-URL, die im gesamten Dokument für relative URLs verwendet werden soll.
    Absolute und relative URLs sind erlaubt.
    [`data:`](/de/docs/Web/URI/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Schemes/javascript) URLs sind nicht erlaubt.
- `target`

  - : Ein **Schlüsselwort** oder **benutzerdefinierter Name** des Standard-{{Glossary("browsing context")}}, um die Ergebnisse der Navigation von {{HTMLElement("a")}}, {{HTMLElement("area")}} oder {{HTMLElement("form")}}-Elementen ohne explizite `target`-Attribute anzuzeigen. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (Standard): Zeigt das Ergebnis im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt das Ergebnis in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigt das Ergebnis im übergeordneten Browsing-Kontext des aktuellen an, wenn die aktuelle Seite innerhalb eines Rahmens ist. Wenn es keinen übergeordneten Kontext gibt, verhält sich dies wie `_self`.
    - `_top`: Zeigt das Ergebnis im obersten Browsing-Kontext an (der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Wenn es keinen übergeordneten Kontext gibt, verhält sich dies wie `_self`.

## Hinweise zur Verwendung

### Mehrere \<base>-Elemente

Wenn mehrere `<base>`-Elemente verwendet werden, werden nur das erste `href` und das erste `target` beachtet — alle anderen werden ignoriert.

### Anker innerhalb der Seite

Links, die auf ein Fragment im Dokument verweisen — z. B. `<a href="#some-id">` — werden mit dem `<base>` aufgelöst, was eine HTTP-Anfrage an die Basis-URL mit dem angehängten Fragment auslöst.

Zum Beispiel, gegeben `<base href="https://example.com/">` und diesem Link: `<a href="#anchor">Zum Anker</a>`. Der Link verweist auf `https://example.com/#anchor`.

### target darf keine ASCII-Zeilenumbruchzeichen, Tabulatoren oder < enthalten

Wenn das [`target`](#target)-Attribut ein ASCII-Zeilenumbruchzeichen, einen Tabulator oder das `<` Zeichen enthält, wird der Wert auf `_blank` zurückgesetzt.
Dies dient dazu, Angriffe durch hängende Markup-Injektion zu verhindern, einen skriptlosen Angriff, bei dem ein nicht geschlossenes `target`-Attribut in die Seite injiziert wird, sodass jeder nachfolgende Text erfasst wird, bis der Browser auf ein Zeichen stößt, das das Attribut schließt.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Metadata-Inhalt.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void element")}}.</td>
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
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLBaseElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
