---
title: "<base>: Das Document Base URL Element"
slug: Web/HTML/Element/base
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{HTMLSidebar}}

Das **`<base>`** [HTML](/de/docs/Web/HTML) Element gibt die Basis-URL an, die für alle _relativen_ URLs in einem Dokument verwendet wird. Es kann nur ein `<base>` Element in einem Dokument geben.

Die verwendete Basis-URL eines Dokuments kann durch Skripte mit [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) abgerufen werden. Wenn das Dokument keine `<base>` Elemente enthält, wird `baseURI` standardmäßig zu [`location.href`](/de/docs/Web/API/Location/href).

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Ein `<base>` Element muss ein `href` Attribut, ein `target` Attribut oder beides haben.
> Wenn mindestens eines dieser Attribute angegeben ist, muss das `<base>` Element vor anderen Elementen mit Attributwerten, die URLs sind, wie dem `href` Attribut eines {{HTMLElement("link")}}, stehen.

- `href`
  - : Die Basis-URL, die im gesamten Dokument für relative URLs verwendet wird.
    Absolute und relative URLs sind erlaubt.
    [`data:`](/de/docs/Web/URI/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Schemes/javascript) URLs sind nicht erlaubt.
- `target`

  - : Ein **Schlüsselwort** oder **vom Autor definierter Name** des Standard-[Browsing-Kontextes](/de/docs/Glossary/browsing_context), in dem die Ergebnisse der Navigation von {{HTMLElement("a")}}, {{HTMLElement("area")}}, oder {{HTMLElement("form")}} Elementen ohne explizite `target` Attribute angezeigt werden sollen. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (Standard): Zeigt das Ergebnis im aktuellen Browsing-Kontext.
    - `_blank`: Zeigt das Ergebnis in einem neuen, unbenannten Browsing-Kontext.
    - `_parent`: Zeigt das Ergebnis im übergeordneten Browsing-Kontext des aktuellen an, wenn die aktuelle Seite in einem Rahmen eingebettet ist. Gibt es keinen übergeordneten, wirkt es wie `_self`.
    - `_top`: Zeigt das Ergebnis im obersten Browsing-Kontext (der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat). Gibt es keinen übergeordneten, wirkt es wie `_self`.

## Hinweise zur Verwendung

### Mehrere \<base> Elemente

Wenn mehrere `<base>` Elemente verwendet werden, werden nur das erste `href` und das erste `target` berücksichtigt — alle anderen werden ignoriert.

### Anker innerhalb der Seite

Links, die auf ein Fragment im Dokument zeigen — z. B. `<a href="#some-id">` — werden mit dem `<base>` aufgelöst, was eine HTTP-Anfrage an die Basis-URL mit angehängtem Fragment auslöst.

Zum Beispiel, gegeben `<base href="https://example.com/">` und diesem Link: `<a href="#anchor">To anchor</a>`. Der Link zeigt auf `https://example.com/#anchor`.

### target darf keine ASCII-Zeilenumbrüche, Tabs oder < enthalten

Wenn das [`target`](#target) Attribut einen ASCII-Zeilenumbruch, Tab oder das `<` Zeichen enthält, wird der Wert auf `_blank` zurückgesetzt.
Dies dient der Vermeidung von „dangling markup“-Injection-Angriffen, einem skriptlosen Angriff, bei dem ein nicht geschlossenes `target` Attribut in die Seite eingefügt wird, so dass jeder nachfolgende Text erfasst wird, bis der Browser auf ein Zeichen trifft, das das Attribut schließt.

### Open Graph

[Open Graph](https://ogp.me/) Tags erkennen `<base>` nicht an und sollten immer vollständige absolute URLs haben. Zum Beispiel:

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein [leeres Element](/de/docs/Glossary/void_element).</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("head")}}, der kein anderes <code>&lt;base&gt;</code> Element enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
