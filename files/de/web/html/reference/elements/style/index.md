---
title: "<style>: Das Stil-Informationselement"
slug: Web/HTML/Reference/Elements/style
l10n:
  sourceCommit: 0e2ec54f4eb55cccad11af843d83061857918bee
---

Das **`<style>`** [HTML](/de/docs/Web/HTML)-Element enthält Stilinformationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, welches auf die Inhalte des Dokuments, das das `<style>`-Element enthält, angewendet wird.

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
  color: red;
}
```

Das `<style>`-Element muss innerhalb des {{htmlelement("head")}} des Dokuments enthalten sein. Im Allgemeinen ist es besser, Ihre Stile in externen Stylesheets zu platzieren und sie mithilfe von {{htmlelement("link")}}-Elementen anzuwenden.

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument einfügen, werden diese in der Reihenfolge, in der sie im Dokument enthalten sind, auf das DOM angewendet — stellen Sie sicher, dass Sie sie in der richtigen Reihenfolge einfügen, um unerwartete Kaskadenprobleme zu vermeiden.

Genauso wie `<link>`-Elemente können `<style>`-Elemente `media`-Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/CSS_media_queries) beinhalten, sodass Sie interne Stylesheets je nach Medienmerkmalen wie der Breite des Viewports selektiv auf Ihr Dokument anwenden können.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `blocking`
  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen kritischer Subressourcen und beim Anwenden des Stylesheets auf das Dokument blockiert werden sollen. [`@import`](/de/docs/Web/CSS/@import)-Stilvorlagen gelten in der Regel als kritische Subressourcen, während [`background-image`](/de/docs/Web/CSS/background-image) und Schriften dies nicht tun. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungstokens sein. Derzeit gibt es nur ein Token:
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `style`-Elemente im `<head>` des Dokuments können das Rendern möglicherweise blockieren. Standardmäßig blockiert ein `style`-Element im `<head>` das Rendern, wenn der Browser es beim Parsen entdeckt. Wenn ein solches `style`-Element dynamisch über ein Skript hinzugefügt wird, müssen Sie zusätzlich `blocking = "render"` setzen, damit es das Rendern blockiert.

- `media`
  - : Dieses Attribut definiert, auf welche Medien der Stil angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig auf `all` gesetzt ist, wenn das Attribut fehlt.
- `nonce`
  - : Eine kryptografische Nonce (Nummer, die einmal verwendet wird), die es erlaubt, Inline-Stile in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) zuzulassen. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da andernfalls die Umgehung der Richtlinie einer Ressource trivial ist.
- `title`
  - : Dieses Attribut gibt [alternative Stylesheet-Sets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) an.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht angegeben werden: wenn es vorhanden ist, sind die einzigen erlaubten Werte der leere String oder eine nicht auf Groß- und Kleinschreibung achtende Übereinstimmung mit `text/css`.

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

### Mehrere Stil-Elemente

In diesem Beispiel haben wir zwei `<style>`-Elemente eingefügt – beachten Sie, wie die späteren `<style>`-Elemente die widersprüchlichen Deklarationen der früheren überschreiben, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) haben.

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

### Einbinden einer Media Query

In diesem Beispiel bauen wir auf dem vorherigen auf, indem wir ein `media`-Attribut im zweiten `<style>`-Element hinzufügen, sodass es nur angewendet wird, wenn der Viewport weniger als 500px breit ist.

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
          >Metadaten-Inhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>
        Textinhalt, der mit dem <code>type</code>-Attribut übereinstimmt, das ist
        <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Weglassung des Tags</th>
      <td>Kein Tag kann weggelassen werden.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadaten-Inhalte</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
