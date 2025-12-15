---
title: "<style>: Das Stilelement"
slug: Web/HTML/Reference/Elements/style
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

Das **`<style>`** [HTML](/de/docs/Web/HTML) Element enthält Stilinformationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, das auf die Inhalte des Dokuments angewendet wird, das das `<style>`-Element enthält.

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

Das `<style>`-Element muss im {{htmlelement("head")}} des Dokuments enthalten sein. Im Allgemeinen ist es besser, Ihre Stile in externen Stylesheets zu platzieren und sie mithilfe von {{htmlelement("link")}}-Elementen anzuwenden.

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument einfügen, werden sie in der Reihenfolge auf das DOM angewendet, in der sie im Dokument enthalten sind — stellen Sie sicher, dass Sie sie in der richtigen Reihenfolge einfügen, um unerwartete Kaskadenprobleme zu vermeiden.

In gleicher Weise wie `<link>`-Elemente können `<style>`-Elemente `media`-Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) enthalten, sodass Sie interne Stylesheets abhängig von Medieneigenschaften wie der Viewport-Breite selektiv auf Ihr Dokument anwenden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `blocking`
  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen kritischer Subressourcen und der Anwendung des Stylesheets auf das Dokument blockiert werden sollten. {{cssxref("@import")}}-ed Stylesheets werden im Allgemeinen als kritische Subressourcen angesehen, während {{cssxref("background-image")}} und Schriftarten es nicht sind. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockiertokens sein. Derzeit gibt es nur ein Token:
    - `render`: Die Darstellung von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `style`-Elemente im `<head>` des Dokuments können möglicherweise die Darstellung blockieren. Standardmäßig blockiert ein `style`-Element im `<head>` die Darstellung, wenn der Browser es während der Analyse entdeckt. Wenn ein solches `style`-Element dynamisch über ein Skript hinzugefügt wird, müssen Sie zusätzlich `blocking = "render"` setzen, damit es die Darstellung blockiert.

- `media`
  - : Dieses Attribut definiert, auf welche Medien der Stil angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/Guides/Media_queries/Using), die auf `all` gesetzt wird, wenn das Attribut fehlt.
- `nonce`
  - : Ein kryptografischer {{Glossary("Nonce", "Nonce")}} (nur einmal verwendete Zahl), der verwendet wird, um Inline-Stile in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) zuzulassen. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, einen Nonce bereitzustellen, der nicht erraten werden kann, da andernfalls die Umgehung der Richtlinie einer Ressource trivial ist.
- `title`
  - : Dieses Attribut gibt [alternative Stylesheet]-Sets(/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) an.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht angegeben werden: Wenn es angegeben wird, sind die einzigen erlaubten Werte der leere String oder ein nicht groß-/kleinschreibungssensitives `text/css`.

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

In diesem Beispiel haben wir zwei `<style>`-Elemente eingeschlossen — beachten Sie, wie die widersprüchlichen Deklarationen im späteren `<style>`-Element die im früheren überschreiben, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) haben.

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

### Einbeziehen einer Media-Query

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
          >Metadateninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>
        Textinhalt, der dem <code>type</code>-Attribut entspricht, also
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
        >
        akzeptiert.
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

- Das {{HTMLElement("link")}}-Element, das es uns erlaubt, externe Stylesheets auf ein Dokument anzuwenden.
- [Alternative Style Sheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)
