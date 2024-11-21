---
title: "<style>: Das Style-Informationselement"
slug: Web/HTML/Element/style
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<style>`** [HTML](/de/docs/Web/HTML)-Element enthält Style-Informationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, welches auf die Inhalte des Dokuments angewendet wird, das das `<style>`-Element enthält.

{{EmbedInteractiveExample("pages/tabbed/style.html", "tabbed-standard")}}

Das `<style>`-Element muss innerhalb des {{htmlelement("head")}} des Dokuments enthalten sein. Im Allgemeinen ist es besser, Ihre Styles in externen Stylesheets zu platzieren und sie mit {{htmlelement("link")}}-Elementen anzuwenden.

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument einfügen, werden sie in der Reihenfolge, in der sie im Dokument enthalten sind, auf das DOM angewendet. Stellen Sie sicher, dass Sie sie in der richtigen Reihenfolge einfügen, um unerwartete Kaskadierungsprobleme zu vermeiden.

Genau wie `<link>`-Elemente können `<style>`-Elemente `media`-Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/CSS_media_queries) beinhalten, sodass Sie interne Stylesheets selektiv auf Ihr Dokument anwenden können, abhängig von Medieneigenschaften wie der Breite des Viewports.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `blocking`
  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen kritischer Subressourcen blockiert werden sollen. [`@import`](/de/docs/Web/CSS/@import)-Stylesheets werden im Allgemeinen als kritische Subressourcen betrachtet, während [`background-image`](/de/docs/Web/CSS/background-image) und Schriftarten nicht dazu zählen. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgelisteten Blocking-Tokens sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.
- `media`
  - : Dieses Attribut definiert, auf welche Medien der Stil angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig auf `all` gesetzt ist, wenn das Attribut fehlt.
- `nonce`
  - : Ein Kryptowert, der einmalig verwendet wird (Nonce), um Inline-Stile in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) zuzulassen. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist wichtig, einen Nonce bereitzustellen, der nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource sonst trivial ist.
- `title`
  - : Dieses Attribut gibt die [alternativen Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets)-Sets an.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht angegeben werden: Wenn doch, sind die einzigen zulässigen Werte der leere String oder eine nicht groß-/klein-schreibungssensitive Übereinstimmung für `text/css`.

## Beispiele

### Ein grundlegendes Stylesheet

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

In diesem Beispiel haben wir zwei `<style>`-Elemente eingefügt - beachten Sie, wie die widersprüchlichen Deklarationen im späteren `<style>`-Element diejenigen im früheren Element überschreiben, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/Specificity) haben.

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

### Eine Media Query einfügen

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
      <th>Zulässiger Inhalt</th>
      <td>
        Textinhalt, der dem <code>type</code>-Attribut entspricht, das heißt
        <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Weder Start- noch End-Tag sind auslassbar.</td>
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

- Das {{HTMLElement("link")}}-Element, mit dem wir externe Stylesheets auf ein Dokument anwenden können.
- [Alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets)
