---
title: "<style>: Das Stilelement"
slug: Web/HTML/Reference/Elements/style
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{HTMLSidebar}}

Das **`<style>`** [HTML](/de/docs/Web/HTML)-Element enthält Stilinformationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, das auf die Inhalte des Dokuments angewendet wird, die das `<style>`-Element enthalten.

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

Das `<style>`-Element muss im {{htmlelement("head")}} des Dokuments enthalten sein. Allgemein ist es besser, Ihre Stile in externen Stylesheets zu platzieren und diese mit {{htmlelement("link")}}-Elementen anzuwenden.

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument aufnehmen, werden sie in der Reihenfolge auf das DOM angewendet, in der sie im Dokument enthalten sind. Achten Sie darauf, sie in der richtigen Reihenfolge einzufügen, um unerwartete Kaskadenprobleme zu vermeiden.

In der gleichen Weise wie `<link>`-Elemente können `<style>`-Elemente `media`-Attribute enthalten, die [Medienabfragen (media queries)](/de/docs/Web/CSS/CSS_media_queries) enthalten, die es ermöglichen, interne Stylesheets je nach Medienmerkmalen wie der Breite des Viewports selektiv auf Ihr Dokument anzuwenden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `blocking`
  - : Dieses Attribut zeigt explizit an, dass bestimmte Operationen beim Abrufen kritischer Subressourcen blockiert werden sollten. [`@import`](/de/docs/Web/CSS/@import)-ierte Stylesheets gelten im Allgemeinen als kritische Subressourcen, während [`background-image`](/de/docs/Web/CSS/background-image) und Schriftarten dies nicht sind. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungstoken sein.
    - `render`: Die Darstellung des Inhalts auf dem Bildschirm wird blockiert.
- `media`
  - : Dieses Attribut definiert, auf welche Medien der Stil angewendet werden soll. Sein Wert ist eine [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig `all` ist, wenn das Attribut fehlt.
- `nonce`
  - : Eine kryptografische Nonce (ein einmal verwendete Zahl), die verwendet wird, um Inline-Stile in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) zuzulassen. Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist wichtig, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource ansonsten trivial ist.
- `title`
  - : Dieses Attribut gibt [alternative Stylesheet-Sets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) an.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht angegeben werden: Wenn es angegeben wird, sind die einzigen zulässigen Werte die leere Zeichenkette oder eine groß-/kleinschreibungsunabhängige Übereinstimmung mit `text/css`.

## Beispiele

### Ein grundlegendes Stylesheet

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

### Mehrere Stilelemente

In diesem Beispiel haben wir zwei `<style>`-Elemente eingefügt — beachten Sie, wie die widersprüchlichen Deklarationen im späteren `<style>`-Element diejenigen im früheren überschreiben, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) haben.

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

### Einschließen einer Medienabfrage

In diesem Beispiel bauen wir auf dem vorherigen auf und fügen ein `media`-Attribut im zweiten `<style>`-Element hinzu, sodass es nur angewendet wird, wenn der Viewport weniger als 500px breit ist.

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
    <style media="(width < 500px)">
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
        Textinhalt, der dem <code>type</code>-Attribut entspricht, das
        <code>text/css</code> ist.
      </td>
    </tr>
    <tr>
      <th>Auslassung des Tags</th>
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
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
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
