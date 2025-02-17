---
title: "<style>: Das Stilelement"
slug: Web/HTML/Element/style
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{HTMLSidebar}}

Das **`<style>`**-[HTML](/de/docs/Web/HTML)-Element enthält Stilinformationen für ein Dokument oder einen Teil eines Dokuments. Es beinhaltet CSS, das auf die Inhalte des Dokuments angewendet wird, das das `<style>`-Element enthält.

{{EmbedInteractiveExample("pages/tabbed/style.html", "tabbed-standard")}}

Das `<style>`-Element muss innerhalb des {{htmlelement("head")}} eines Dokuments eingefügt werden. Im Allgemeinen ist es besser, Ihre Stile in externen Stylesheets zu platzieren und sie mit {{htmlelement("link")}}-Elementen anzuwenden.

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument einfügen, werden diese in der Reihenfolge auf das DOM angewendet, wie sie im Dokument enthalten sind. Stellen Sie sicher, dass Sie diese in der richtigen Reihenfolge einfügen, um unerwartete Probleme mit der Kaskade zu vermeiden.

Analog zu `<link>`-Elementen können `<style>`-Elemente `media`-Attribute enthalten, die [Media Queries](/de/docs/Web/CSS/CSS_media_queries) beinhalten. Diese ermöglichen es Ihnen, interne Stylesheets selektiv auf Ihr Dokument anzuwenden, abhängig von Medieneigenschaften wie der Breite des Viewports.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `blocking`
  - : Dieses Attribut gibt ausdrücklich an, dass bestimmte Operationen auf das Abrufen kritischer Unterressourcen warten sollen. [`@import`](/de/docs/Web/CSS/@import)-Stile werden in der Regel als kritische Unterressourcen betrachtet, während [`background-image`](/de/docs/Web/CSS/background-image) und Schriftarten dies nicht sind. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungskennzeichnungen sein.
    - `render`: Das Rendering von Inhalten auf dem Bildschirm wird blockiert.
- `media`
  - : Dieses Attribut definiert, für welche Medien der Stil angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die standardmäßig auf `all` gesetzt ist, wenn das Attribut fehlt.
- `nonce`
  - : Ein kryptografisches Nonce (eine einmal verwendete Nummer), das verwendet wird, um Inline-Stile in einer [style-src-Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) zu erlauben. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, ein nicht erratbares Nonce bereitzustellen, da das Umgehen der Richtlinie eines Ressourcen ansonsten trivial wäre.
- `title`
  - : Dieses Attribut gibt [alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) an.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht verwendet werden: Wenn es angegeben wird, sind die einzigen zulässigen Werte ein leerer String oder eine Groß-/Kleinschreibungs-unabhängige Übereinstimmung mit `text/css`.

## Beispiele

### Ein einfacher Stylesheet

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

In diesem Beispiel haben wir zwei `<style>`-Elemente eingefügt – beachten Sie, wie die widersprüchlichen Deklarationen im späteren `<style>`-Element die im früheren übersteuern, wenn sie die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) haben.

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

In diesem Beispiel bauen wir auf dem vorherigen auf und fügen ein `media`-Attribut im zweiten `<style>`-Element ein, sodass es nur angewendet wird, wenn der Viewport weniger als 500px breit ist.

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
          >Metadateninhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>
        Text-Inhalt, der dem <code>type</code>-Attribut entspricht, also
        <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Auslassung von Tags</th>
      <td>Keiner der Tags darf weggelassen werden.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadateninhalte</a
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

- Das {{HTMLElement("link")}}-Element, mit dem wir externe Stylesheets auf ein Dokument anwenden können.
- [Alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets)
