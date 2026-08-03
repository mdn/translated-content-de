---
title: "`<style>` HTML style information element"
short-title: <style>
slug: Web/HTML/Reference/Elements/style
l10n:
  sourceCommit: ae75e612d34b87b46332beb1bddc879f56358495
---

Das **`<style>`** [HTML](/de/docs/Web/HTML) Element enthält Stilinformationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, das auf die Inhalte des Dokuments angewendet wird, die das `<style>` Element enthalten.

{{InteractiveExample("HTML Demo: \<style>", "tabbed-standard")}}

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

Das `<style>`-Element wird typischerweise innerhalb des {{htmlelement("head")}} des Dokuments eingebunden. Es kann auch überall dort verwendet werden, wo Metadateninhalte zulässig sind, etwa innerhalb eines {{htmlelement("template")}} Elements.

Wenn Sie mehrere `<style>` und `<link>` Elemente in Ihrem Dokument einfügen, werden diese in der Reihenfolge angewendet, in der sie im Dokument enthalten sind – stellen Sie sicher, dass sie in der richtigen Reihenfolge enthalten sind, um unerwartete Kaskadenprobleme zu vermeiden.

Ähnlich wie `<link>`-Elemente können `<style>`-Elemente `media`-Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) enthalten. Dadurch können Sie interne Stile je nach Medienmerkmalen wie z.B. der Ansichtsfensterbreite selektiv auf Ihr Dokument anwenden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `blocking`
  - : Dieses Attribut gibt ausdrücklich an, dass bestimmte Operationen beim Abrufen kritischer Subressourcen und der Anwendung des Stylesheets auf das Dokument blockiert werden sollen. {{cssxref("@import")}}-ierte Stylesheets werden im Allgemeinen als kritische Subressourcen angesehen, während {{cssxref("background-image")}} und Schriftarten es nicht sind. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von unten aufgeführten Blockierungstokens sein. Derzeit gibt es nur ein Token:
    - `render`: Das Rendering von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `style` Elemente im `<head>` des Dokuments können eventuell das Rendering blockieren. Standardmäßig blockiert ein `style`-Element im `<head>` das Rendering, wenn der Browser es während des Parsens entdeckt. Wenn solch ein `style` Element dynamisch über ein Skript hinzugefügt wird, müssen Sie zusätzlich `blocking = "render"` setzen, damit es das Rendering blockiert.

- `media`
  - : Dieses Attribut definiert, auf welche Medien der Stil angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/Guides/Media_queries/Using), die standardmäßig `all` ist, wenn das Attribut fehlt.
- `nonce`
  - : Eine kryptografische {{Glossary("Nonce", "Nonce")}} (nur einmal verwendete Zahl), die verwendet wird, um Inline-Stile in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) zuzulassen. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da ansonsten das Umgehen der Richtlinie trivial ist.
- `title`
  - : Dieses Attribut gibt [alternative Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) Sätze an.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht bereitgestellt werden: Falls doch, sind die einzigen zulässigen Werte der leere String oder eine Groß- und Kleinschreibung ignorierende Entsprechung von `text/css`.

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

### Verwendung von `<style>` innerhalb `<template>`

Ein `<style>` Element kann auch innerhalb eines {{HTMLElement("template")}} Elements platziert werden. Die Stile bleiben inaktiv, bis der Templateinhalt instanziiert und in das Dokument eingefügt wird.

```html
<template id="card-template">
  <style>
    .card {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  </style>

  <div class="card">Template content</div>
</template>
```

### Mehrere Style-Elemente

In diesem Beispiel haben wir zwei `<style>` Elemente eingefügt – beachten Sie, wie die widersprüchlichen Deklarationen im späteren `<style>` Element die im früheren überschreiben, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) haben.

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

In diesem Beispiel bauen wir auf dem vorherigen auf und fügen ein `media` Attribut im zweiten `<style>` Element hinzu, sodass es nur angewendet wird, wenn das Ansichtsfenster weniger als 500px breit ist.

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
          >Metadateninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>
        Textinhalt entsprechend dem <code>type</code> Attribut, das ist
        <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Kein Tag ist auslassbar.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadateninhalt</a
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

- Das {{HTMLElement("link")}} Element, das uns ermöglicht, externe Stylesheets auf ein Dokument anzuwenden.
- [Alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)
