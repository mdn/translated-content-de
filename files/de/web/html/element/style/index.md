---
title: "<style>: Das Style-Informationselement"
slug: Web/HTML/Element/style
l10n:
  sourceCommit: 176953b8260e0dd4328a7e788e8179accbafb8e1
---

{{HTMLSidebar}}

Das **`<style>`** [HTML](/de/docs/Web/HTML)-Element enthält Style-Informationen für ein Dokument oder einen Teil eines Dokuments. Es enthält CSS, das auf die Inhalte des Dokuments angewendet wird, das das `<style>`-Element enthält.

{{EmbedInteractiveExample("pages/tabbed/style.html", "tabbed-standard")}}

Das `<style>`-Element muss innerhalb des {{htmlelement("head")}} des Dokuments eingefügt werden. Im Allgemeinen ist es besser, Ihre Styles in externen Stylesheets zu platzieren und sie mithilfe von {{htmlelement("link")}}-Elementen anzuwenden.

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument einfügen, werden sie in der Reihenfolge angewendet, in der sie im Dokument enthalten sind — stellen Sie sicher, dass Sie sie in der richtigen Reihenfolge einfügen, um unerwartete Kaskadenprobleme zu vermeiden.

In ähnlicher Weise wie `<link>`-Elemente können `<style>`-Elemente `media`-Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/CSS_media_queries) enthalten, sodass Sie interne Stylesheets je nach Medienmerkmalen wie der Breite des Ansichtsbereichs selektiv auf Ihr Dokument anwenden können.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `blocking`
  - : Dieses Attribut zeigt explizit an, dass bestimmte Operationen beim Abrufen kritischer Subressourcen blockiert werden sollen. [`@import`](/de/docs/Web/CSS/@import)-Stylesheets werden im Allgemeinen als kritische Subressourcen betrachtet, während [`background-image`](/de/docs/Web/CSS/background-image) und Schriften dies nicht sind. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungstokens sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.
- `media`
  - : Dieses Attribut definiert, auf welche Medien der Style angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die auf `all` gesetzt wird, wenn das Attribut fehlt.
- `nonce`
  - : Eine kryptografische Nonce (einmal verwendete Nummer), die verwendet wird, um Inline-Styles in einer [style-src Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) zuzulassen. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert erzeugen. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource andernfalls trivial ist.
- `title`
  - : Dieses Attribut gibt [alternative Stylesheets](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet)-Sets an.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht angegeben werden: Wenn es angegeben ist, sind die einzigen zulässigen Werte der leere String oder ein Groß-/Kleinschreibungs-unschädliche Übereinstimmung mit `text/css`.

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

In diesem Beispiel haben wir zwei `<style>`-Elemente eingefügt — beachten Sie, wie die widersprüchlichen Deklarationen im späteren `<style>`-Element die im früheren überschreiben, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) haben.

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

### Einbindung einer Media Query

In diesem Beispiel bauen wir auf dem vorherigen auf und fügen dem zweiten `<style>`-Element ein `media`-Attribut hinzu, sodass es nur angewendet wird, wenn der Ansichtsbereich weniger als 500px breit ist.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadaten-Inhalte</a>.
      </td>
    </tr>
    <tr>
      <th>Zulässiger Inhalt</th>
      <td>
        Textinhalt, der mit dem <code>type</code>-Attribut übereinstimmt, das heißt
        <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Kein Tag kann weggelassen werden.</td>
    </tr>
    <tr>
      <th>Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadaten-Inhalte</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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

- Das {{HTMLElement("link")}}-Element, das es uns ermöglicht, externe Stylesheets auf ein Dokument anzuwenden.
- [Alternative Stylesheets](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet)
