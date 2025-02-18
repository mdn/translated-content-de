---
title: "<base>: Das Dokument-Basis-URL-Element"
slug: Web/HTML/Element/base
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{HTMLSidebar}}

Das **`<base>`** [HTML](/de/docs/Web/HTML)-Element legt die Basis-URL fest, die für alle _relativen_ URLs in einem Dokument verwendet wird. Es kann nur ein `<base>`-Element in einem Dokument geben.

Die verwendete Basis-URL eines Dokuments kann von Skripten mit [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) abgerufen werden. Wenn das Dokument keine `<base>`-Elemente enthält, ist `baseURI` standardmäßig auf [`location.href`](/de/docs/Web/API/Location/href) gesetzt.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Ein `<base>`-Element muss ein `href`-Attribut, ein `target`-Attribut oder beide besitzen.
> Wenn mindestens eines dieser Attribute angegeben ist, **muss** das `<base>`-Element vor anderen Elementen mit Attributwerten, die URLs enthalten, wie z. B. dem `href`-Attribut eines {{HTMLElement("link")}}, stehen.

- `href`
  - : Die Basis-URL, die im gesamten Dokument für relative URLs verwendet wird.
    Absolute und relative URLs sind erlaubt.
    [`data:`](/de/docs/Web/URI/Reference/Schemes/data)- und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript)-URLs sind nicht erlaubt.
- `target`

  - : Ein **Schlüsselwort** oder ein **benutzerdefinierter Name** des Standard-{{Glossary("browsing_context", "Browsing-Kontexts")}}, in dem die Ergebnisse der Navigation von {{HTMLElement("a")}}, {{HTMLElement("area")}} oder {{HTMLElement("form")}}-Elementen ohne explizite `target`-Attribute angezeigt werden sollen. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (Standard): Die Ergebnisse im aktuellen Browsing-Kontext anzeigen.
    - `_blank`: Die Ergebnisse in einem neuen, unbenannten Browsing-Kontext anzeigen.
    - `_parent`: Die Ergebnisse im übergeordneten Browsing-Kontext des aktuellen Kontexts anzeigen, wenn die aktuelle Seite sich innerhalb eines Frames befindet. Wenn es keinen übergeordneten Kontext gibt, verhält sich das wie `_self`.
    - `_top`: Die Ergebnisse im obersten Browsing-Kontext anzeigen (der Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen übergeordneten Kontext hat). Wenn es keinen übergeordneten Kontext gibt, verhält sich das wie `_self`.

## Hinweise zur Nutzung

### Mehrere \<base>-Elemente

Wenn mehrere `<base>`-Elemente verwendet werden, werden nur das erste `href` und das erste `target` beachtet – alle anderen werden ignoriert.

### Anker im Dokument

Links, die auf ein Fragment im Dokument zeigen – z. B. `<a href="#some-id">` – werden mit dem `<base>` aufgelöst, was eine HTTP-Anfrage an die Basis-URL mit dem angehängten Fragment auslöst.

Zum Beispiel: Gegeben `<base href="https://example.com/">` und diesen Link: `<a href="#anchor">To anchor</a>`. Der Link zeigt auf `https://example.com/#anchor`.

### target darf keine ASCII-Zeilenumbrüche, Tabs oder < enthalten

Wenn das [`target`](#target)-Attribut einen ASCII-Zeilenumbruch, einen Tab oder das `<`-Zeichen enthält, wird der Wert auf `_blank` zurückgesetzt.
Dies dient dazu, danglende Markup-Injektionen zu verhindern, eine skriptlose Angriffsmethode, bei der ein ungeschlossenes `target`-Attribut in die Seite injiziert wird, sodass jeglicher Text danach erfasst wird, bis der Browser auf ein Zeichen stößt, das das Attribut schließt.

### Open Graph

[Open Graph](https://ogp.me/)-Tags erkennen `<base>` nicht und sollten immer vollständige absolute URLs enthalten. Zum Beispiel:

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
      <td>Keiner; es ist ein {{Glossary("void_element", "void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Ein {{HTMLElement("head")}}, das kein weiteres <code>&lt;base&gt;</code>-Element enthält.
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
      <td>Kein <code>role</code> erlaubt</td>
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
