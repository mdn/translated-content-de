---
title: "<base>: Das Document Base URL-Element"
slug: Web/HTML/Reference/Elements/base
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<base>`** [HTML](/de/docs/Web/HTML) Element gibt die Basis-URL an, die für alle _relativen_ URLs in einem Dokument verwendet werden soll. Es kann nur ein `<base>` Element in einem Dokument geben.

Die verwendete Basis-URL eines Dokuments kann von Skripten mit [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) abgerufen werden. Wenn das Dokument kein `<base>` Element hat, ist der Standardwert von `baseURI` [`location.href`](/de/docs/Web/API/Location/href).

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Ein `<base>` Element muss ein `href` Attribut, ein `target` Attribut oder beides haben. 
> Wenn mindestens eines dieser Attribute angegeben ist, muss das `<base>` Element **vor** anderen Elementen mit Attributwerten, die URLs sind, kommen, wie z.B. das `href` Attribut eines {{HTMLElement("link")}}.

- `href`
  - : Die Basis-URL, die im gesamten Dokument für relative URLs verwendet werden soll.
    Absolute und relative URLs sind erlaubt.
    [`data:`](/de/docs/Web/URI/Reference/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) URLs sind nicht erlaubt.
- `target`
  - : Ein **Schlüsselwort** oder ein **vom Autor definierter Name** des Standard-{{Glossary("browsing_context", "Browsing-Kontexts")}}, um die Ergebnisse der Navigation von {{HTMLElement("a")}}, {{HTMLElement("area")}}, oder {{HTMLElement("form")}} Elementen ohne explizite `target` Attribute anzuzeigen. Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self` (Standard): Zeigt das Ergebnis im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt das Ergebnis in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigt das Ergebnis im übergeordneten Browsing-Kontext des aktuellen an, wenn die aktuelle Seite in einem Frame ist. Wenn es keinen übergeordneten gibt, wirkt es wie `_self`.
    - `_top`: Zeigt das Ergebnis im obersten Browsing-Kontext an (dem Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten hat). Wenn es keinen übergeordneten gibt, wirkt es wie `_self`.

## Hinweise zur Nutzung

### Mehrere \<base> Elemente

Wenn mehrere `<base>` Elemente verwendet werden, wird nur `href` und `target` des ersten Elements berücksichtigt — alle weiteren werden ignoriert.

### Anker im Dokument

Links, die auf ein Fragment im Dokument verweisen — z.B. `<a href="#some-id">` — werden mit dem `<base>` aufgelöst, was eine HTTP-Anfrage an die Basis-URL mit dem Fragment auslöst.

Zum Beispiel, gegeben `<base href="https://example.com/">` und diesen Link: `<a href="#anchor">Zum Anker</a>`. Der Link verweist auf `https://example.com/#anchor`.

### target darf keine ASCII-Zeilenumbrüche, Tabs oder < enthalten

Wenn das [`target`](#target) Attribut einen ASCII-Zeilenumbruch, Tab oder das `<` Zeichen enthält, wird der Wert auf `_blank` zurückgesetzt.
Dies soll verhindern, dass ungeschlossene `target` Attribute in die Seite injiziert werden, eine skriptlose Angriffstechnik, bei der ein ungeschlossenes `target` Attribut injiziert wird, sodass jeglicher nachfolgender Text erfasst wird, bis der Browser ein Zeichen erreicht, das das Attribut schließt.

### Open Graph

[Open Graph](https://ogp.me/) Tags erkennen `<base>` nicht und sollten immer vollständige absolute URLs haben. Zum Beispiel:

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
        Ein {{HTMLElement("head")}}, das kein weiteres <code>&lt;base&gt;</code> Element enthält.
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
