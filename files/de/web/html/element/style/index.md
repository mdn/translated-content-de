---
title: "<style>: Das Stil-Informationselement"
slug: Web/HTML/Element/style
l10n:
  sourceCommit: e651c702e7a16093ca5a615f74fde1d9ef234508
---

{{HTMLSidebar}}

Das **`<style>`** [HTML](/de/docs/Web/HTML)-Element enthält Stil-Informationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, das auf die Inhalte des Dokuments angewendet wird, das das `<style>`-Element enthält.

{{EmbedInteractiveExample("pages/tabbed/style.html", "tabbed-standard")}}

Das `<style>`-Element muss innerhalb des {{htmlelement("head")}} des Dokuments eingefügt werden. Im Allgemeinen ist es besser, Ihre Stile in externen Stylesheets zu belassen und sie mithilfe von {{htmlelement("link")}}-Elementen anzuwenden.

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument aufnehmen, werden diese in der Reihenfolge angewendet, in der sie im Dokument enthalten sind — stellen Sie sicher, dass Sie sie in der richtigen Reihenfolge einfügen, um unerwartete Kaskadenprobleme zu vermeiden.

In gleicher Weise wie `<link>`-Elemente können `<style>`-Elemente `media`-Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/CSS_media_queries) enthalten. Dadurch können Sie interne Stylesheets je nach Medienmerkmalen wie der Breite des Viewports selektiv auf Ihr Dokument anwenden.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `blocking` {{Experimental_Inline}}
  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen bei der Beschaffung kritischer Unterressourcen blockiert werden sollten. [`@import`](/de/docs/Web/CSS/@import)-Stylesheets gelten in der Regel als kritische Unterressourcen, während [`background-image`](/de/docs/Web/CSS/background-image) und Schriftarten dies nicht sind. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten angegebenen Blockiertoken sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.
- `media`
  - : Dieses Attribut definiert, auf welche Medien der Stil angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig auf `all` gesetzt ist, wenn das Attribut fehlt.
- `nonce`
  - : Eine kryptografische Nonce (Nummer, die einmal verwendet wird), die es ermöglicht, Inline-Stile in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) zuzulassen. Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist wichtig, eine Nonce bereitzustellen, die nicht erraten werden kann, da sonst das Umgehen einer Ressourcenrichtlinie trivial ist.
- `title`
  - : Dieses Attribut gibt [Alternative Stylesheet]-Sets(/de/docs/Web/CSS/Alternative_style_sheets) an.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht angegeben werden: Wenn es vorhanden ist, sind die einzigen zulässigen Werte das leere Zeichenfolgen oder eine nicht großgeschriebene Übereinstimmung für `text/css`.

## Beispiele

### Ein einfaches Stylesheet

Im folgenden Beispiel wird ein sehr einfaches Stylesheet auf ein Dokument angewendet:

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

In diesem Beispiel haben wir zwei `<style>`-Elemente eingefügt — beachten Sie, wie die sich widersprechenden Deklarationen im späteren `<style>`-Element diejenigen im früheren überschreiben, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/Specificity) aufweisen.

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

### Ein Media Query einbeziehen

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
        Textinhalt, der mit dem <code>type</code>-Attribut übereinstimmt, das
        <code>text/css</code> ist.
      </td>
    </tr>
    <tr>
      <th>Weglassen des Tags</th>
      <td>Kein Tag ist weglassbar.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
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

- Das {{HTMLElement("link")}}-Element, das die Anwendung externer Stylesheets auf ein Dokument ermöglicht.
- [Alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets)
