---
title: "<figure>: Das Abbildungselement mit optionaler Beschriftung"
slug: Web/HTML/Reference/Elements/figure
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<figure>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eigenständige Inhalte, die eventuell mit einer optionalen Beschriftung versehen sind, welche durch das {{HTMLElement("figcaption")}} Element spezifiziert wird. Die Abbildung, ihre Beschriftung und ihre Inhalte werden als eine Einheit betrachtet.

{{InteractiveExample("HTML Demo: &lt;figure&gt;", "tabbed-shorter")}}

```html interactive-example
<figure>
  <img
    src="/shared-assets/images/examples/elephant.jpg"
    alt="Elephant at sunset" />
  <figcaption>An elephant at sunset</figcaption>
</figure>
```

```css interactive-example
figure {
  border: thin #c0c0c0 solid;
  display: flex;
  flex-flow: column;
  padding: 5px;
  max-width: 220px;
  margin: auto;
}

img {
  max-width: 220px;
  max-height: 150px;
}

figcaption {
  background-color: #222;
  color: #fff;
  font: italic smaller sans-serif;
  padding: 3px;
  text-align: center;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

- Üblicherweise ist ein `<figure>` ein Bild, eine Illustration, ein Diagramm, ein Code-Snippet usw., das im Hauptfluss eines Dokuments referenziert wird, aber an eine andere Stelle im Dokument oder in einen Anhang verschoben werden kann, ohne den Hauptfluss zu beeinflussen.
- Eine Beschriftung kann dem `<figure>` Element zugeordnet werden, indem ein {{HTMLElement("figcaption")}} in das `<figure>` Element eingefügt wird (als erstes oder letztes Kind). Das erste `<figcaption>` Element, das in der Abbildung gefunden wird, wird als deren Beschriftung dargestellt.
- Das `<figcaption>` liefert den {{Glossary("accessible_name", "barrierefreien Namen")}} für das Eltern-`<figure>`.

## Beispiele

### Bilder

```html
<!-- Just an image -->
<figure>
  <img src="favicon-192x192.png" alt="The beautiful MDN logo." />
</figure>

<!-- Image with a caption -->
<figure>
  <img src="favicon-192x192.png" alt="The beautiful MDN logo." />
  <figcaption>MDN Logo</figcaption>
</figure>
```

#### Ergebnis

{{EmbedLiveSample("Images", "100%", 375)}}

### Code-Snippets

```html
<figure>
  <figcaption>Get browser details using <code>navigator</code>.</figcaption>
  <pre>
function NavigatorExample() {
  let txt = `Browser CodeName: ${navigator.appCodeName};\n`;
  txt += `Browser Name: ${navigator.appName};\n`;
  txt += `Browser Version: ${navigator.appVersion};\n`;
  txt += `Cookies Enabled: ${navigator.cookieEnabled};\n`;
  txt += `Platform: ${navigator.platform};\n`;
  txt += `User-agent header: ${navigator.userAgent};`;
  console.log("NavigatorExample", txt);
}
  </pre>
</figure>
```

#### Ergebnis

{{EmbedLiveSample("Code_snippets", "100%", 250)}}

### Zitate

```html
<figure>
  <figcaption><b>Edsger Dijkstra:</b></figcaption>
  <blockquote>
    If debugging is the process of removing software bugs, then programming must
    be the process of putting them in.
  </blockquote>
</figure>
```

#### Ergebnis

{{EmbedLiveSample('Quotations')}}

### Gedichte

```html
<figure>
  <p>
    Bid me discourse, I will enchant thine ear,<br />
    Or like a fairy trip upon the green,<br />
    Or, like a nymph, with long dishevelled hair,<br />
    Dance on the sands, and yet no footing seen:<br />
    Love is a spirit all compact of fire,<br />
    Not gross to sink, but light, and will aspire.<br />
  </p>
  <figcaption><cite>Venus and Adonis</cite>, by William Shakespeare</figcaption>
</figure>
```

#### Ergebnis

{{EmbedLiveSample("Poems", "100%", 250)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("figcaption")}} Element, gefolgt von
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >; oder Flussinhalt gefolgt von einem
        {{HTMLElement("figcaption")}} Element; oder Flussinhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role"
          >Abbildung</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        Ohne
        <a href="/de/docs/Web/HTML/Reference/Elements/figcaption">figcaption</a>-Nachkommen:
        <a href="https://w3c.github.io/html-aria/#dfn-any-role">beliebig</a>,
        ansonsten keine erlaubten Rollen
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("figcaption")}} Element.
