---
title: "<style>: Das Style-Informationselement"
slug: Web/HTML/Element/style
l10n:
  sourceCommit: e651c702e7a16093ca5a615f74fde1d9ef234508
---

{{HTMLSidebar}}

Das **`<style>`** [HTML](/de/docs/Web/HTML)-Element enthält Stilinformationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, das auf den Inhalt des Dokuments angewendet wird, das das `<style>`-Element enthält.

{{EmbedInteractiveExample("pages/tabbed/style.html", "tabbed-standard")}}

Das `<style>`-Element muss innerhalb des {{htmlelement("head")}} des Dokuments eingefügt werden. Im Allgemeinen ist es besser, Ihre Stile in externen Stylesheets zu speichern und sie mithilfe von {{htmlelement("link")}}-Elementen anzuwenden.

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument einfügen, werden sie in der Reihenfolge auf das DOM angewendet, in der sie im Dokument enthalten sind – stellen Sie sicher, dass Sie sie in der richtigen Reihenfolge einfügen, um unerwartete Kaskadierungseffekte zu vermeiden.

Auf dieselbe Weise wie `<link>`-Elemente können `<style>`-Elemente `media`-Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/CSS_media_queries) enthalten, sodass Sie interne Stylesheets je nach Medienmerkmalen wie der Breite des Ansichtsfensters selektiv auf Ihr Dokument anwenden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `blocking` {{Experimental_Inline}}
  - : Dieses Attribut gibt ausdrücklich an, dass bestimmte Operationen beim Abrufen von kritischen Subressourcen blockiert werden sollten. Eingebundene [`@import`](/de/docs/Web/CSS/@import)-Stylesheets werden im Allgemeinen als kritische Subressourcen betrachtet, während [`background-image`](/de/docs/Web/CSS/background-image) und Schriftarten dies nicht sind. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blocking-Tokens sein.
    - `render`: Das Rendering von Inhalten auf dem Bildschirm wird blockiert.
- `media`
  - : Dieses Attribut definiert, auf welche Medien der Stil angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die auf `all` zurückgesetzt wird, wenn das Attribut fehlt.
- `nonce`
  - : Eine kryptografische Zufallszahl (number used once), die verwendet wird, um Inline-Stile in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) zuzulassen. Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen nonce-Wert erzeugen. Es ist entscheidend, einen nonce zu erstellen, der nicht erraten werden kann, da ansonsten die Umgehung der Ressourcenrichtlinie trivial wäre.
- `title`
  - : Dieses Attribut gibt [alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) an.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht angegeben werden: Wenn es angegeben wird, sind die einzigen erlaubten Werte der leere String oder eine nicht groß-/kleinschreibungssensible Übereinstimmung mit `text/css`.

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

In diesem Beispiel haben wir zwei `<style>`-Elemente eingefügt — beachten Sie, wie die späteren `<style>`-Elemente die widersprüchlichen Deklarationen im früheren Element überschreiben, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/Specificity) haben.

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

### Einschließlich einer Media Query

In diesem Beispiel bauen wir auf dem vorherigen auf, indem wir ein `media`-Attribut auf das zweite `<style>`-Element anwenden, sodass es nur verwendet wird, wenn das Ansichtsfenster weniger als 500px breit ist.

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
      <th>Erlaubter Inhalt</th>
      <td>
        Textinhalt, der dem <code>type</code>-Attribut entspricht, das ist
        <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Tag-Weglassung</th>
      <td>Kein Tag kann weggelassen werden.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- Das {{HTMLElement("link")}}-Element, das uns ermöglicht, externe Stylesheets auf ein Dokument anzuwenden.
- [Alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets)
