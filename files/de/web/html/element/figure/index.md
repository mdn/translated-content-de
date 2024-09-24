---
title: "<figure>: Das Figure-Element mit optionaler Beschriftung"
slug: Web/HTML/Element/figure
l10n:
  sourceCommit: 42c7716dd1b9907b669f34f13adb5e0efe10cdb4
---

{{HTMLSidebar}}

Das **`<figure>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eigenständigen Inhalt, möglicherweise mit einer optionalen Beschriftung, die mit dem {{HTMLElement("figcaption")}}-Element angegeben wird. Die Figur, ihre Beschriftung und ihre Inhalte werden als eine Einheit betrachtet.

{{EmbedInteractiveExample("pages/tabbed/figure.html","tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Üblicherweise ist ein `<figure>` ein Bild, eine Illustration, ein Diagramm, ein Code-Snippet usw., das im Hauptfluss eines Dokuments referenziert wird, aber an eine andere Stelle oder in einen Anhang verschoben werden kann, ohne den Hauptfluss zu beeinträchtigen.
- Eine Beschriftung kann dem `<figure>`-Element zugeordnet werden, indem eine {{HTMLElement("figcaption")}} innerhalb eingefügt wird (als erstes oder letztes Kind). Das erste im Figure gefundene `<figcaption>`-Element wird als die Beschriftung der Figur dargestellt.
- Das `<figcaption>` bietet den {{glossary("zugänglichen Namen")}} für das übergeordnete `<figure>`.

## Beispiele

### Bilder

```html
<!-- Nur ein Bild -->
<figure>
  <img src="favicon-192x192.png" alt="Das schöne MDN-Logo." />
</figure>

<!-- Bild mit einer Beschriftung -->
<figure>
  <img src="favicon-192x192.png" alt="Das schöne MDN-Logo." />
  <figcaption>MDN Logo</figcaption>
</figure>
```

#### Ergebnis

{{EmbedLiveSample("Images", "100%", 375)}}

### Code-Beispiele

```html
<figure>
  <figcaption>Holen Sie Browser-Details mit <code>navigator</code>.</figcaption>
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
    Wenn Debugging der Prozess ist, Softwarefehler zu entfernen, dann muss
    Programmieren der Prozess sein, sie einzufügen.
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
  <figcaption><cite>Venus und Adonis</cite>, von William Shakespeare</figcaption>
</figure>
```

#### Ergebnis

{{EmbedLiveSample("Poems", "100%", 250)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Ein {{HTMLElement("figcaption")}}-Element, gefolgt von
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >; oder Flussinhalt gefolgt von einem
        {{HTMLElement("figcaption")}}-Element; oder Flussinhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/figure_role"
          >figure</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        Ohne
        <a href="/de/docs/Web/HTML/Element/figcaption">figcaption</a
        >-Nachkommen:
        <a href="https://www.w3.org/TR/html-aria/#dfn-any-role">beliebige</a>,
        ansonsten keine zulässigen Rollen
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("figcaption")}}-Element.
