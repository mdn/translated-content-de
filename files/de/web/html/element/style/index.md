---
title: "<style>: Das Style-Informationselement"
slug: Web/HTML/Element/style
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<style>`** [HTML](/de/docs/Web/HTML) Element enthält Style-Informationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, das auf die Inhalte des Dokuments angewendet wird, das das `<style>`-Element enthält.

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

Das `<style>`-Element muss innerhalb des {{htmlelement("head")}} des Dokuments eingefügt werden. Im Allgemeinen ist es besser, Ihre Styles in externen Stylesheets zu platzieren und sie mithilfe von {{htmlelement("link")}}-Elementen anzuwenden.

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument einfügen, werden sie in der Reihenfolge auf das DOM angewendet, in der sie im Dokument enthalten sind – stellen Sie sicher, dass Sie sie in der richtigen Reihenfolge einfügen, um unerwartete Kaskadenprobleme zu vermeiden.

In ähnlicher Weise wie `<link>`-Elemente können `<style>`-Elemente `media`-Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/CSS_media_queries) beinhalten, sodass Sie interne Stylesheets je nach Medienmerkmalen wie der Breite des Viewports selektiv auf Ihr Dokument anwenden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `blocking`
  - : Dieses Attribut zeigt explizit an, dass bestimmte Operationen beim Abrufen von kritischen Subressourcen blockiert werden sollen. [`@import`](/de/docs/Web/CSS/@import)-Stilblätter werden im Allgemeinen als kritische Subressourcen betrachtet, während [`background-image`](/de/docs/Web/CSS/background-image) und Schriften dies nicht sind. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungstokens sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.
- `media`
  - : Dieses Attribut definiert, auf welche Medien der Style angewendet werden soll. Sein Wert ist ein [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), das auf `all` zurückfällt, wenn das Attribut fehlt.
- `nonce`
  - : Eine kryptografische Nonce (eine Zahl, die einmal verwendet wird), die verwendet wird, um Inline-Stile in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) zuzulassen. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da es sonst trivial ist, die Richtlinie einer Ressource zu umgehen.
- `title`
  - : Dieses Attribut spezifiziert [alternative Stilblätter](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet)-Sets.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht angegeben werden: wenn es angegeben wird, dürfen die einzigen zulässigen Werte der leere String oder ein nicht fall-empfindliches Übereinstimmen mit `text/css` sein.

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

In diesem Beispiel haben wir zwei `<style>`-Elemente eingefügt – beachten Sie, wie die widersprüchlichen Deklarationen im späteren `<style>`-Element diejenigen im früheren Modul überschreiben, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) haben.

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

In diesem Beispiel bauen wir auf dem vorherigen auf und fügen ein `media`-Attribut am zweiten `<style>`-Element hinzu, sodass es nur angewendet wird, wenn der Viewport weniger als 500px breit ist.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadateninhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubte Inhalte</th>
      <td>
        Textinhalt, der dem <code>type</code>-Attribut entspricht, also
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
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadateninhalte</a
        >
        akzeptiert.
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

- Das {{HTMLElement("link")}} Element, das es ermöglicht, externe Stylesheets auf ein Dokument anzuwenden.
- [Alternative Stilblätter](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet)
