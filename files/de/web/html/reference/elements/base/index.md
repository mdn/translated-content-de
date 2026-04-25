---
title: "`<base>` HTML-Dokument Basis-URL-Element"
short-title: <base>
slug: Web/HTML/Reference/Elements/base
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<base>`**-Element in [HTML](/de/docs/Web/HTML) legt die Basis-URL fest, die für alle _relativen_ URLs in einem Dokument verwendet werden soll. Es darf nur ein `<base>`-Element in einem Dokument vorhanden sein.

Die genutzte Basis-URL eines Dokuments kann in Skripten mit [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) abgerufen werden. Wenn das Dokument keine `<base>`-Elemente hat, ist der Standardwert von `baseURI` [`location.href`](/de/docs/Web/API/Location/href).

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Ein `<base>`-Element muss ein `href`-Attribut, ein `target`-Attribut oder beide haben.
> Wenn mindestens eines dieser Attribute angegeben ist, **muss** das `<base>`-Element vor anderen Elementen erscheinen, deren Attributwerte URLs sind, wie z. B. das `href`-Attribut eines {{HTMLElement("link")}}.

- `href`
  - : Die Basis-URL, die im gesamten Dokument für relative URLs verwendet werden soll.
    Absolute und relative URLs sind erlaubt.
    URLs vom Typ [`data:`](/de/docs/Web/URI/Reference/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) sind nicht erlaubt.
- `target`
  - : Ein **Schlüsselwort** oder **benutzerdefinierter Name** des Standard-{{Glossary("browsing_context", "Browsing-Kontexts")}}, in dem die Ergebnisse der Navigation von {{HTMLElement("a")}}, {{HTMLElement("area")}} oder {{HTMLElement("form")}}-Elementen ohne explizite `target`-Attribute angezeigt werden sollen. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self` (Standard): Zeigt das Ergebnis im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt das Ergebnis in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigt das Ergebnis im übergeordneten Browsing-Kontext der aktuellen Seite an, wenn diese sich innerhalb eines Frames befindet. Gibt es keinen Elternrahmen, verhält es sich wie `_self`.
    - `_top`: Zeigt das Ergebnis im obersten Browsing-Kontext an (dem Browsing-Kontext, der Vorfahre des aktuellen ist und keinen Elternrahmen hat). Gibt es keinen Elternrahmen, verhält es sich wie `_self`.

## Anmerkungen zur Nutzung

### Mehrere `<base>`-Elemente

Werden mehrere `<base>`-Elemente verwendet, werden nur das erste `href` und das erste `target` berücksichtigt — alle anderen werden ignoriert.

### Anker innerhalb der Seite

Links, die auf ein Fragment im Dokument verweisen — z.B. `<a href="#some-id">` — werden mit dem `<base>` aufgelöst, was zu einer HTTP-Anfrage an die Basis-URL mit dem Fragment als Anhang führt.

Zum Beispiel, bei `<base href="https://example.com/">` und diesem Link: `<a href="#anchor">Zu Anker</a>`. Der Link zeigt auf `https://example.com/#anchor`.

### `target` darf keine ASCII-Neuzeile, Tab oder `<` enthalten

Wenn das [`target`](#target)-Attribut eine ASCII-Neuzeile, ein Tab oder das `<`-Zeichen enthält, wird der Wert auf `_blank` zurückgesetzt.
Dies dient zur Vermeidung von Dangling-Markup-Injektionsangriffen, einem angreifenden Skriptlosen Angriff, bei dem ein nicht geschlossenes `target`-Attribut in die Seite injiziert wird, sodass jeder Text, der folgt, aufgenommen wird, bis der Browser auf ein Zeichen stößt, das das Attribut schließt.

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("head")}}, das kein weiteres <code>&lt;base&gt;</code>-Element enthält.
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
