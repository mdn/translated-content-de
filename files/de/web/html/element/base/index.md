---
title: "<base>: Das Dokument Basis-URL-Element"
slug: Web/HTML/Element/base
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{HTMLSidebar}}

Das **`<base>`** [HTML](/de/docs/Web/HTML)-Element gibt die Basis-URL an, die für alle _relativen_ URLs in einem Dokument verwendet werden soll. Es kann nur ein `<base>`-Element in einem Dokument geben.

Die verwendete Basis-URL eines Dokuments kann von Skripten mit [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) abgerufen werden. Falls das Dokument kein `<base>`-Element enthält, verwendet `baseURI` standardmäßig [`location.href`](/de/docs/Web/API/Location/href).

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Ein `<base>`-Element muss ein `href`-Attribut, ein `target`-Attribut oder beides besitzen. Wenn mindestens eines dieser Attribute angegeben ist, **muss** das `<base>`-Element vor anderen Elementen mit Attributwerten, die URLs sind, wie z.B. dem `href`-Attribut eines {{HTMLElement("link")}}, stehen.

- `href`
  - : Die Basis-URL, die im gesamten Dokument für relative URLs verwendet wird.
    Absolute und relative URLs sind zulässig.
    [`data:`](/de/docs/Web/URI/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Schemes/javascript) URLs sind nicht zulässig.
- `target`

  - : Ein **Schlüsselwort** oder **benutzerdefinierter Name** des standardmäßigen [Browsing-Kontexts](/de/docs/Glossary/browsing_context), in dem die Ergebnisse der Navigation von {{HTMLElement("a")}}, {{HTMLElement("area")}}, oder {{HTMLElement("form")}}-Elementen ohne explizite `target`-Attribute angezeigt werden sollen. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (Standard): Zeigt das Ergebnis im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt das Ergebnis in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigt das Ergebnis im übergeordneten Browsing-Kontext des aktuellen an, wenn die aktuelle Seite in einem Frame ist. Wenn es keinen Elternteil gibt, verhält es sich wie `_self`.
    - `_top`: Zeigt das Ergebnis im obersten Browsing-Kontext an (dem Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn es keinen Elternteil gibt, verhält es sich wie `_self`.

## Verwendungshinweise

### Mehrere \<base>-Elemente

Wenn mehrere `<base>`-Elemente verwendet werden, werden nur das erste `href` und das erste `target` befolgt — alle anderen werden ignoriert.

### Anker im Dokument

Links, die auf ein Fragment im Dokument verweisen — z.B. `<a href="#some-id">` — werden mit dem `<base>` aufgelöst, wodurch eine HTTP-Anfrage an die Basis-URL mit dem angehängten Fragment ausgelöst wird.

Zum Beispiel, gegeben `<base href="https://example.com/">` und dieser Link: `<a href="#anchor">Zu Anker</a>`. Der Link verweist auf `https://example.com/#anchor`.

### target darf keine ASCII-Zeilenumbrüche, Tabs oder < enthalten

Wenn das [`target`](#target)-Attribut einen ASCII-Zeilenumbruch, einen Tab oder das `<`-Zeichen enthält, wird der Wert auf `_blank` zurückgesetzt.
Dies geschieht, um Angriffe mit nicht geschlossenem Markup zu verhindern, ein skriptloser Angriff, bei dem ein ungeschlossenes `target`-Attribut in die Seite eingefügt wird, sodass jeglicher Text, der darauf folgt, erfasst wird, bis der Browser auf ein Zeichen stößt, das das Attribut schließt.

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
      <td>Metadaten-Inhalt.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Kein Inhalt; es ist ein [leeres Element](/de/docs/Glossary/void_element).</td>
    </tr>
    <tr>
      <th scope="row">Auslassung des Tags</th>
      <td>Muss ein Start-Tag haben und darf keine End-Tag haben.</td>
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
      <td>[`HTMLBaseElement`](/de/docs/Web/API/HTMLBaseElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
