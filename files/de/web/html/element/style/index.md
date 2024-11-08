---
title: "<style>: Das Style-Informationselement"
slug: Web/HTML/Element/style
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTMLSidebar}}

Das **`<style>`** [HTML](/de/docs/Web/HTML) Element enthält Style-Informationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, das auf die Inhalte des Dokuments, das das `<style>` Element enthält, angewendet wird.

{{EmbedInteractiveExample("pages/tabbed/style.html", "tabbed-standard")}}

Das `<style>` Element muss innerhalb des {{htmlelement("head")}} des Dokuments enthalten sein. Im Allgemeinen ist es besser, Ihre Styles in externe Stylesheets zu legen und diese mit {{htmlelement("link")}} Elementen anzuwenden.

Wenn Sie mehrere `<style>` und `<link>` Elemente in Ihr Dokument einfügen, werden sie in der Reihenfolge angewendet, in der sie im Dokument enthalten sind. Achten Sie darauf, sie in der richtigen Reihenfolge einzuschließen, um unerwartete Kaskadenprobleme zu vermeiden.

Ähnlich wie `<link>` Elemente können `<style>` Elemente `media` Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/CSS_media_queries) enthalten. Diese ermöglichen Ihnen, interne Stylesheets je nach Medienmerkmalen wie der Breite des Ansichtsfensters selektiv auf Ihr Dokument anzuwenden.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `blocking`
  - : Dieses Attribut zeigt explizit an, dass bestimmte Operationen beim Abrufen kritischer Subressourcen blockiert werden sollten. [`@import`](/de/docs/Web/CSS/@import)-Stylesheets werden im Allgemeinen als kritische Subressourcen betrachtet, während [`background-image`](/de/docs/Web/CSS/background-image) und Schriften dies nicht sind. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blocking-Tokens sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.
- `media`
  - : Dieses Attribut definiert, auf welches Medium der Style angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig `all` ist, wenn das Attribut fehlt.
- `nonce`
  - : Eine kryptografische Nonce (Number used once), die verwendet wird, um Inline-Styles in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) zuzulassen. Der Server muss jedes Mal, wenn er eine Policy überträgt, einen einzigartigen Nonce-Wert generieren. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen der Policy einer Ressource ansonsten trivial ist.
- `title`
  - : Dieses Attribut gibt [alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) an.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht angegeben werden: Wenn es vorhanden ist, sind die einzigen zulässigen Werte der leere String oder ein nicht casesensitiver Match für `text/css`.

## Beispiele

### Ein einfaches Stylesheet

Im folgenden Beispiel wenden wir ein sehr einfaches Stylesheet auf ein Dokument an:

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

{{EmbedLiveSample('A_simple_stylesheet', '100%', '100')}}

### Mehrere Style-Elemente

In diesem Beispiel haben wir zwei `<style>` Elemente eingefügt – achten Sie darauf, wie die widersprüchlichen Deklarationen im späteren `<style>` Element diejenigen im früheren überschreiben, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/Specificity) haben.

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

In diesem Beispiel bauen wir auf dem vorigen auf, indem wir ein `media` Attribut auf dem zweiten `<style>` Element einfügen, sodass es nur angewendet wird, wenn das Ansichtsfenster weniger als 500px breit ist.

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
          >Metadaten-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th>Zulässiger Inhalt</th>
      <td>
        Textinhalt entsprechend dem <code>type</code> Attribut, also
        <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Tags weglassbar</th>
      <td>Weder das Start- noch das Endtag können weggelassen werden.</td>
    </tr>
    <tr>
      <th>Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
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

- Das {{HTMLElement("link")}} Element, welches uns ermöglicht, externe Stylesheets auf ein Dokument anzuwenden.
- [Alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets)
