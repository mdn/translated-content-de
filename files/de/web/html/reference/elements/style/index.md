---
title: "<style>: Das Style-Informationselement"
slug: Web/HTML/Reference/Elements/style
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<style>`** [HTML](/de/docs/Web/HTML)-Element enthält Style-Informationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, das auf den Inhalt des Dokuments angewendet wird, der das `<style>`-Element enthält.

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

Das `<style>`-Element muss im {{htmlelement("head")}} des Dokuments enthalten sein. Im Allgemeinen ist es besser, Ihre Styles in externen Stylesheets zu platzieren und sie mit {{htmlelement("link")}}-Elementen anzuwenden.

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument aufnehmen, werden sie in der Reihenfolge angewendet, in der sie im Dokument enthalten sind. Stellen Sie sicher, dass Sie sie in der richtigen Reihenfolge einfügen, um unerwartete Kaskadenprobleme zu vermeiden.

In ähnlicher Weise wie bei `<link>`-Elementen können `<style>`-Elemente `media`-Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/CSS_media_queries) umfassen und es Ihnen ermöglichen, interne Stylesheets abhängig von Medienmerkmalen wie der Viewport-Breite selektiv auf Ihr Dokument anzuwenden.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `blocking`
  - : Dieses Attribut weist explizit darauf hin, dass bestimmte Operationen beim Abrufen kritischer Subressourcen blockiert werden sollten. [`@import`](/de/docs/Web/CSS/@import)-Stile gelten allgemein als kritische Subressourcen, während [`background-image`](/de/docs/Web/CSS/background-image) und Schriftarten dies nicht sind. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungstokens sein.
    - `render`: Das Rendern des Inhalts auf dem Bildschirm wird blockiert.
- `media`
  - : Dieses Attribut definiert, auf welche Medien der Style angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig auf `all` gesetzt ist, wenn das Attribut fehlt.
- `nonce`
  - : Ein kryptographischer Nonce (einmal verwendete Nummer), der verwendet wird, um Inline-Styles in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) zuzulassen. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, einen Nonce bereitzustellen, der nicht erraten werden kann, da sonst das Umgehen der Richtlinie einer Ressource trivial ist.
- `title`
  - : Dieses Attribut spezifiziert [alternative Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)-Sets.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht bereitgestellt werden: Wenn es vorhanden ist, sind die einzigen zulässigen Werte der leere String oder eine nicht case-sensitive Übereinstimmung zu `text/css`.

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

In diesem Beispiel haben wir zwei `<style>`-Elemente eingefügt – beachten Sie, wie die widersprüchlichen Deklarationen im späteren `<style>`-Element die Deklarationen im früheren überschreiben, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) haben.

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

In diesem Beispiel bauen wir auf dem vorherigen auf und fügen ein `media`-Attribut im zweiten `<style>`-Element ein, sodass es nur angewendet wird, wenn der Viewport weniger als 500px breit ist.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadateninhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>
        Textinhalt, der mit dem <code>type</code>-Attribut übereinstimmt, also
        <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Kein Tag kann weggelassen werden.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadateninhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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

- Das {{HTMLElement("link")}}-Element, das es uns ermöglicht, externe Stylesheets auf ein Dokument anzuwenden.
- [Alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)
