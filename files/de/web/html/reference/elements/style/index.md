---
title: "<style>: Das Stilelement"
slug: Web/HTML/Reference/Elements/style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`<style>`** [HTML](/de/docs/Web/HTML)-Element enthält Stilinformationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, das auf den Inhalt des Dokuments angewendet wird, das das `<style>`-Element enthält.

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

Das `<style>`-Element muss innerhalb des {{htmlelement("head")}} des Dokuments enthalten sein. Im Allgemeinen ist es besser, Ihre Stile in externen Stylesheets zu speichern und sie mithilfe von {{htmlelement("link")}}-Elementen anzuwenden.

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument einfügen, werden diese in der Reihenfolge angewendet, in der sie im Dokument enthalten sind — stellen Sie sicher, dass Sie sie in der richtigen Reihenfolge einfügen, um unerwartete Kaskadenprobleme zu vermeiden.

Ebenso wie `<link>`-Elemente können `<style>`-Elemente `media`-Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/CSS_media_queries) enthalten und es ermöglichen, interne Stylesheets abhängig von Medienmerkmalen wie der Viewport-Breite selektiv auf Ihr Dokument anzuwenden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `blocking`
  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen kritischer Subressourcen und beim Anwenden des Stylesheets auf das Dokument blockiert werden sollen. [`@import`](/de/docs/Web/CSS/@import)-Stylesheets werden im Allgemeinen als kritische Subressourcen betrachtet, während [`background-image`](/de/docs/Web/CSS/Reference/Properties/background-image) und Schriftarten dies nicht sind. Die Operationen, die blockiert werden sollen, müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungstoken sein. Derzeit gibt es nur ein Token:
    - `render`: Die Darstellung des Inhalts auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `style`-Elemente im `<head>` des Dokuments können möglicherweise die Darstellung blockieren. Standardmäßig blockiert ein `style`-Element im `<head>` die Darstellung, wenn der Browser es während des Parsings entdeckt. Wenn ein solches `style`-Element dynamisch über Skripte hinzugefügt wird, müssen Sie zusätzlich `blocking = "render"` setzen, damit die Darstellung blockiert wird.

- `media`
  - : Dieses Attribut definiert, auf welche Medien der Stil angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig auf `all` gesetzt ist, wenn das Attribut fehlt.
- `nonce`
  - : Eine kryptografische Nonce (einmalige Nummer), die verwendet wird, um Inline-Stile in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) zuzulassen. Der Server muss einen eindeutigen Nonce-Wert generieren, jedes Mal wenn er eine Policy überträgt. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen der Policy einer Ressource sonst trivial ist.
- `title`
  - : Dieses Attribut gibt [alternative Stile](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)-Sätze an.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht bereitgestellt werden: wenn es bereitgestellt wird, sind die einzigen zulässigen Werte die leere Zeichenfolge oder ein nicht casesensitiver Abgleich für `text/css`.

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

### Mehrere Stilelemente

In diesem Beispiel haben wir zwei `<style>`-Elemente eingefügt — beachten Sie, wie die widersprüchlichen Deklarationen im späteren `<style>`-Element die im vorherigen überschreiben, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) haben.

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

### Einschließen einer Media Query

In diesem Beispiel bauen wir auf dem vorherigen auf, indem wir ein `media`-Attribut im zweiten `<style>`-Element einfügen, sodass es nur angewendet wird, wenn der Viewport weniger als 500px breit ist.

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

## Technische Übersicht

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
        Textinhalt, der zum <code>type</code>-Attribut passt, das heißt
        <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Kein Tag ist weglassbar.</td>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Kein <code>role</code> erlaubt</td>
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
