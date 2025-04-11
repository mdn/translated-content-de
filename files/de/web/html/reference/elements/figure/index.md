---
title: "<figure>: Das Figurenelement mit optionaler Beschriftung"
slug: Web/HTML/Reference/Elements/figure
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<figure>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eigenständigen Inhalt, potentiell mit einer optionalen Beschriftung, die mit dem {{HTMLElement("figcaption")}}-Element spezifiziert wird. Die Figur, ihre Beschriftung und ihr Inhalt werden als eine Einheit referenziert.

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

- Üblicherweise ist ein `<figure>` ein Bild, eine Illustration, ein Diagramm, ein Code-Schnipsel etc., das im Hauptfluss eines Dokuments referenziert wird, aber in einen anderen Teil des Dokuments oder in einen Anhang verschoben werden kann, ohne den Hauptfluss zu beeinträchtigen.
- Eine Beschriftung kann mit dem `<figure>`-Element assoziiert werden, indem ein {{HTMLElement("figcaption")}} darin eingefügt wird (als erstes oder letztes Kind). Das erste im `<figure>` gefundene `<figcaption>`-Element wird als die Beschriftung der Figur dargestellt.
- Das `<figcaption>` bietet den {{Glossary("accessible_name", "zugänglichen Namen")}} für das übergeordnete `<figure>`.

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

### Code-Schnipsel

```html
<figure>
  <figcaption>Get browser details using <code>navigator</code>.</figcaption>
  <pre>
function NavigatorExample() {
  var txt;
  txt = "Browser CodeName: " + navigator.appCodeName + "; ";
  txt+= "Browser Name: " + navigator.appName + "; ";
  txt+= "Browser Version: " + navigator.appVersion  + "; ";
  txt+= "Cookies Enabled: " + navigator.cookieEnabled  + "; ";
  txt+= "Platform: " + navigator.platform  + "; ";
  txt+= "User-agent header: " + navigator.userAgent  + "; ";
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
  <p style="white-space:pre">
    Bid me discourse, I will enchant thine ear, Or like a fairy trip upon the
    green, Or, like a nymph, with long dishevelled hair, Dance on the sands, and
    yet no footing seen: Love is a spirit all compact of fire, Not gross to
    sink, but light, and will aspire.
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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Ein {{HTMLElement("figcaption")}}-Element, gefolgt von
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >; oder Flussinhalt gefolgt von einem
        {{HTMLElement("figcaption")}}-Element; oder Flussinhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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
          >figure</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        Ohne
        <a href="/de/docs/Web/HTML/Reference/Elements/figcaption">figcaption</a
        > Nachfahre:
        <a href="https://www.w3.org/TR/html-aria/#dfn-any-role">beliebig</a>,
        ansonsten keine zulässigen Rollen
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

- Das {{HTMLElement("figcaption")}}-Element.
