---
title: HTML-Element `<style>` für Stilinformationen
short-title: <style>
slug: Web/HTML/Reference/Elements/style
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

Das [HTML](/de/docs/Web/HTML)-Element **`<style>`** enthält Stilinformationen für ein Dokument oder einen Teil davon. Es enthält CSS, das auf den Inhalt des Dokuments angewendet wird, in dem sich das `<style>`-Element befindet.

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

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `blocking`
  - : Dieses Attribut gibt ausdrücklich an, dass bestimmte Vorgänge bis zum Abrufen kritischer Unterressourcen und zum Anwenden des Stylesheets auf das Dokument blockiert werden sollen. Mit {{cssxref("@import")}} eingebundene Stylesheets gelten im Allgemeinen als kritische Unterressourcen, {{cssxref("background-image")}} und Schriftarten dagegen nicht. Die zu blockierenden Vorgänge müssen als durch Leerzeichen getrennte Liste der folgenden Blocking-Tokens angegeben werden. Derzeit gibt es nur ein Token:
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `style`-Elemente im `<head>` des Dokuments können das Rendern blockieren. Standardmäßig blockiert ein `style`-Element im `<head>` das Rendern, wenn der Browser es beim Parsen entdeckt. Wird ein solches `style`-Element dynamisch per Skript hinzugefügt, müssen Sie zusätzlich `blocking = "render"` setzen, damit es das Rendern blockiert.

- `media`
  - : Dieses Attribut legt fest, für welche Medien der Stil gelten soll. Sein Wert ist eine [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries/Using). Fehlt das Attribut, gilt standardmäßig `all`.
- `nonce`
  - : Eine kryptografische {{Glossary("Nonce", "Nonce")}} (eine einmalig verwendete Zahl), mit der Inline-Stile im Rahmen einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) zugelassen werden. Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert erzeugen. Es ist entscheidend, dass die Nonce nicht erraten werden kann, da sich die Richtlinie für eine Ressource andernfalls leicht umgehen lässt.
- `title`
  - : Dieses Attribut gibt Gruppen [alternativer Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) an.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht angegeben werden. Falls es angegeben wird, sind nur eine leere Zeichenfolge oder ein Wert zulässig, der ohne Berücksichtigung der Groß- und Kleinschreibung `text/css` entspricht.

## Verwendungshinweise

Das `<style>`-Element befindet sich üblicherweise innerhalb von {{htmlelement("head")}} im Dokument. Es kann auch überall dort verwendet werden, wo Metadateninhalt zulässig ist, beispielsweise innerhalb eines {{htmlelement("template")}}-Elements.

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument aufnehmen, werden sie in der Reihenfolge auf das DOM angewendet, in der sie im Dokument stehen. Achten Sie auf die richtige Reihenfolge, um unerwartete Probleme mit der Kaskade zu vermeiden.

Wie `<link>`-Elemente können auch `<style>`-Elemente `media`-Attribute mit [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) enthalten. So können Sie interne Stylesheets abhängig von Medieneigenschaften wie der Breite des Viewports gezielt auf Ihr Dokument anwenden.

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

### `<style>` innerhalb von `<template>` verwenden

Ein `<style>`-Element kann auch innerhalb eines {{HTMLElement("template")}}-Elements stehen. Die Stile bleiben inaktiv, bis der Inhalt des Templates instanziiert und in das Dokument eingefügt wird.

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

### Mehrere style-Elemente

In diesem Beispiel sind zwei `<style>`-Elemente enthalten. Beachten Sie, dass die widersprüchlichen Deklarationen im späteren `<style>`-Element diejenigen im früheren überschreiben, sofern sie die gleiche [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) haben.

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

### Eine Medienabfrage einbinden

Dieses Beispiel baut auf dem vorherigen auf. Das zweite `<style>`-Element erhält ein `media`-Attribut, sodass es nur angewendet wird, wenn der Viewport weniger als 500 px breit ist.

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
          >Metadateninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th>Zulässiger Inhalt</th>
      <td>
        Textinhalt, der dem Attribut <code>type</code> entspricht, also
        <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Weglassen von Tags</th>
      <td>Keines der beiden Tags darf weggelassen werden.</td>
    </tr>
    <tr>
      <th>Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadateninhalt</a
        >
        zulässt.
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
      <td>Keine <code>role</code> zulässig</td>
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

- Das {{HTMLElement("link")}}-Element, mit dem externe Stylesheets auf ein Dokument angewendet werden können.
- [Alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)
