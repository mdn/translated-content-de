---
title: "<style>: Das Style-Information-Element"
slug: Web/HTML/Reference/Elements/style
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<style>`** [HTML](/de/docs/Web/HTML) Element enthält Style-Informationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, das auf den Inhalt des Dokumentes, das das `<style>` Element enthält, angewendet wird.

{{InteractiveExample("HTML Demo: &lt;style&gt;", "tabbed-standard")}}

```html interactive-example
<style>
  p {
    color: #26b72b;
  }
  code {
    font-weight: bold;
  }
</style>

<p>
  This text will be green. Inline styles take precedence over CSS included
  externally.
</p>

<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

```css interactive-example
p {
  color: #f00;
}
```

Das `<style>` Element muss innerhalb des {{htmlelement("head")}} des Dokuments eingefügt werden. Im Allgemeinen ist es besser, Ihre Styles in externen Stylesheets zu platzieren und sie durch {{htmlelement("link")}} Elemente anzuwenden.

Wenn Sie mehrere `<style>` und `<link>` Elemente in Ihr Dokument einfügen, werden sie in der Reihenfolge im DOM angewendet, in der sie im Dokument enthalten sind — stellen Sie sicher, dass Sie sie in der richtigen Reihenfolge einfügen, um unerwartete Kaskadeneffekte zu vermeiden.

Genau wie `<link>` Elemente können `<style>` Elemente `media` Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/CSS_media_queries) enthalten, sodass Sie interne Stylesheets selektiv auf Ihr Dokument anwenden können, abhängig von Medienmerkmalen wie der Breite des Viewports.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `blocking`
  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abruf kritischer Subressourcen blockiert werden sollen. [`@import`](/de/docs/Web/CSS/@import)-ierte Stylesheets gelten allgemein als kritische Subressourcen, während [`background-image`](/de/docs/Web/CSS/background-image) und Schriftarten dies nicht sind. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungs-Token sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.
- `media`
  - : Dieses Attribut definiert, auf welche Medien der Style angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig `all` ist, wenn das Attribut fehlt.
- `nonce`
  - : Eine kryptografische Nonce (Zahl, die einmal verwendet wird), die verwendet wird, um Inline-Styles in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) zu erlauben. Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da es sonst trivial wäre, die Richtlinie einer Ressource zu umgehen.
- `title`
  - : Dieses Attribut gibt [alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) an.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht bereitgestellt werden: Wenn es vorhanden ist, sind die einzigen erlaubten Werte der leere String oder ein nicht case-sensitives Übereinstimmungsmuster für `text/css`.

## Beispiele

### Ein einfaches Stylesheet

Im folgenden Beispiel wenden wir ein kurzes Stylesheet auf ein Dokument an:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Test page</title>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>This is my paragraph.</p>
  </body>
</html>
```

#### Ergebnis

{{EmbedLiveSample('A_basic_stylesheet', '100%', '100')}}

### Mehrere Style-Elemente

In diesem Beispiel haben wir zwei `<style>` Elemente eingefügt — beachten Sie, wie die widersprüchlichen Deklarationen im späteren `<style>` Element diejenigen im früheren überschreiben, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) haben.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Test page</title>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style>
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>This is my paragraph.</p>
  </body>
</html>
```

#### Ergebnis

{{EmbedLiveSample('Multiple_style_elements', '100%', '100')}}

### Einfügen einer Media Query

In diesem Beispiel bauen wir auf dem vorherigen auf, indem wir ein `media` Attribut im zweiten `<style>` Element einfügen, sodass es nur angewendet wird, wenn der Viewport weniger als 500px breit ist.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Test page</title>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style media="all and (max-width: 500px)">
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>This is my paragraph.</p>
  </body>
</html>
```

#### Ergebnis

{{EmbedLiveSample('Including_a_media_query', '100%', '100')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadaten-Inhalte</a>.
      </td>
    </tr>
    <tr>
      <th>Zulässiger Inhalt</th>
      <td>
        Textinhalt, der mit dem <code>type</code> Attribut übereinstimmt, d.h. <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Kein Tag darf weggelassen werden.</td>
    </tr>
    <tr>
      <th>Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadaten-Inhalte</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th>DOM-Schnittstelle</th>
      <td>[`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("link")}} Element, das es ermöglicht, externe Stylesheets auf ein Dokument anzuwenden.
- [Alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)
