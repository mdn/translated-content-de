---
title: "`<style>` HTML-Stil-Informationselement"
short-title: <style>
slug: Web/HTML/Reference/Elements/style
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Das **`<style>`**-Element von [HTML](/de/docs/Web/HTML) enthält Stil-Informationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, das auf die Inhalte des Dokuments angewendet wird, in dem sich das `<style>`-Element befindet.

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

Das `<style>`-Element wird typischerweise innerhalb des {{htmlelement("head")}} des Dokuments eingefügt. Es kann auch überall dort verwendet werden, wo Metadaten-Inhalte erlaubt sind, wie beispielsweise innerhalb eines {{htmlelement("template")}}-Elements.

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument einfügen, werden diese in der Reihenfolge, in der sie im Dokument enthalten sind, auf das DOM angewendet — stellen Sie sicher, dass Sie sie in der korrekten Reihenfolge einfügen, um unerwartete Kaskadenprobleme zu vermeiden.

In derselben Weise wie `<link>`-Elemente können `<style>`-Elemente `media`-Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) zusammenfassen, sodass Sie interne Stylesheets je nach Medienmerkmalen wie der Viewport-Breite selektiv auf Ihr Dokument anwenden können.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `blocking`
  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen kritischer Subressourcen und bei der Anwendung des Stylesheets auf das Dokument blockiert werden sollen. Via {{cssxref("@import")}}-Anweisung eingebundene Stylesheets gelten im Allgemeinen als kritische Subressourcen, während {{cssxref("background-image")}} und Schriftarten dies nicht tun. Die Operationen, die blockiert werden sollen, müssen eine durch Leerzeichen getrennte Liste von unten aufgeführten Blockierungstokens sein. Derzeit gibt es nur ein Token:
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `style`-Elemente im `<head>` des Dokuments können möglicherweise das Rendern blockieren. Standardmäßig blockiert ein `style`-Element im `<head>` das Rendern, wenn der Browser es während des Parsens entdeckt. Wenn ein solches `style`-Element dynamisch durch ein Script hinzugefügt wird, müssen Sie zusätzlich `blocking = "render"` setzen, damit es das Rendern blockiert.

- `media`
  - : Dieses Attribut definiert, auf welches Medium der Stil angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/Guides/Media_queries/Using), die standardmäßig auf `all` festgelegt ist, wenn das Attribut fehlt.
- `nonce`
  - : Eine kryptografische {{Glossary("Nonce", "Nonce")}} (Nummer, die einmal verwendet wird), die verwendet wird, um Inline-Stile in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) zuzulassen. Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist wichtig, eine Nonce bereitzustellen, die nicht erraten werden kann, da eine sonstige Umgehung der Richtlinie einer Ressource trivial ist.
- `title`
  - : Dieses Attribut spezifiziert [alternative Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)-Sätze.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht angegeben werden: Wenn es vorhanden ist, sind die einzigen erlaubten Werte der leere String oder eine Groß-/Kleinschreibung ignorierende Übereinstimmung für `text/css`.

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

### Verwendung von `<style>` innerhalb von `<template>`

Ein `<style>`-Element kann auch innerhalb eines {{HTMLElement("template")}}-Elements platziert werden. Die Stile bleiben inaktiv, bis der Template-Inhalt instanziiert und in das Dokument eingefügt wird.

```html
<template id="card-template">
  <style>
    .card {
      border: 1px solid #cccccc;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  </style>

  <div class="card">Template content</div>
</template>
```

### Mehrere Style-Elemente

In diesem Beispiel haben wir zwei `<style>`-Elemente eingefügt — beachten Sie, wie die widersprüchlichen Deklarationen im späteren `<style>`-Element jene im früheren überschreiben, falls sie gleiche [spezifische Größen](/de/docs/Web/CSS/Guides/Cascade/Specificity) haben.

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

In diesem Beispiel bauen wir auf dem vorherigen auf, indem wir dem zweiten `<style>`-Element ein `media`-Attribut hinzufügen, sodass es nur angewendet wird, wenn der Viewport weniger als 500px breit ist.

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
        Textinhalt, der dem <code>type</code>-Attribut entspricht, das
        <code>text/css</code> ist.
      </td>
    </tr>
    <tr>
      <th>Tags-Auslassung</th>
      <td>Kein Tag kann ausgelassen werden.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadaten-Inhalte</a
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
